"""Accumulate a complete Messages API response over a live SSE connection.

Streaming keeps long mathematical transcription requests from sitting idle at
the HTTP proxy. Protocol: https://platform.claude.com/docs/en/build-with-claude/streaming
"""

import json
import math
import threading
import time
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

import requests


ERROR_TYPES = {'rate_limit_error', 'overloaded_error', 'authentication_error',
               'permission_error', 'invalid_request_error', 'not_found_error',
               'api_error', 'RESOURCE_EXHAUSTED', 'resource_exhausted'}


class MessageAPIError(RuntimeError):
    """Structured, credential-free HTTP/stream error; never retain response text."""

    def __init__(self, status=None, retry_after=None, error_type=None):
        self.status = status
        self.retry_after = retry_after
        self.error_type = error_type if isinstance(error_type, str) and error_type in ERROR_TYPES else None
        self.retryable = (status in {408, 409, 429, 500, 502, 503, 504}
                          or self.error_type in {'rate_limit_error', 'overloaded_error',
                                                 'RESOURCE_EXHAUSTED', 'resource_exhausted'})
        self.rate_limited = status in {429, 503} or self.error_type in {
            'rate_limit_error', 'overloaded_error', 'RESOURCE_EXHAUSTED', 'resource_exhausted'}
        detail = f'HTTP {status}' if status is not None else 'Messages stream error'
        if self.error_type:
            detail += f'; type={self.error_type}'
        if retry_after is not None:
            detail += f'; retry_after={retry_after:g}s'
        super().__init__(detail)


class MessageTransportError(RuntimeError):
    pass


class CooldownStopped(RuntimeError):
    pass


def parse_retry_after(value, now=None):
    """Accept delta-seconds or an HTTP date without logging the original header."""
    if not isinstance(value, str) or not value.strip():
        return None
    try:
        seconds = float(value.strip())
        return max(0.0, seconds) if math.isfinite(seconds) else None
    except ValueError:
        try:
            date = parsedate_to_datetime(value.strip())
            date = date.replace(tzinfo=timezone.utc) if date.tzinfo is None else date
            current = now if now is not None else datetime.now(timezone.utc)
            return max(0.0, (date - current).total_seconds())
        except (TypeError, ValueError, OverflowError):
            return None


def safe_error_type(value):
    if not isinstance(value, dict):
        return None
    error = value.get('error', {})
    if isinstance(error, dict):
        for field in ('type', 'status', 'code'):
            candidate = error.get(field)
            if isinstance(candidate, str) and candidate in ERROR_TYPES:
                return candidate
    return None


class RequestCoordinator:
    """One cooldown and request-start pace shared by all transcription workers.

    A long Retry-After stops dispatch promptly, persists its deadline, and makes a
    subsequent same-scope resume obey the remaining wait. Raising max_cooldown is
    an explicit choice to wait longer. Condition waits never exceed 45 seconds.
    """

    def __init__(self, max_cooldown=300, request_interval=1.0, state_path=None,
                 scope='', progress=print, wait_slice=45):
        self.condition = threading.Condition()
        self.max_cooldown = float(max_cooldown)
        self.request_interval = float(request_interval)
        if any(not math.isfinite(x) or x < 0 for x in (self.max_cooldown, self.request_interval)):
            raise ValueError('Cooldown and request interval must be finite and nonnegative.')
        self.state_path = Path(state_path) if state_path else None
        self.scope = scope
        self.progress = progress
        self.wait_slice = min(45.0, max(0.001, float(wait_slice)))
        self.deadline = 0.0
        self.next_start = 0.0
        self.stopped = None
        self.last_notice = 0.0
        self.events = 0
        if self.state_path and self.state_path.exists():
            value = json.loads(self.state_path.read_text(encoding='utf-8'))
            if value.get('scope') == self.scope:
                remaining = max(0.0, float(value.get('next_request_at', 0)) - time.time())
                if remaining:
                    self.deadline = time.monotonic() + remaining
                    if remaining > self.max_cooldown:
                        self.stopped = f'Persisted Retry-After has {remaining:.0f}s remaining; resume after its deadline or explicitly increase --max-cooldown.'

    def _persist_locked(self, reason):
        if not self.state_path:
            return
        remaining = max(0.0, self.deadline - time.monotonic())
        next_at = time.time() + remaining
        value = {'scope': self.scope, 'next_request_at': next_at,
                 'next_request_utc': datetime.fromtimestamp(next_at, timezone.utc).isoformat(),
                 'remaining_seconds_at_save': round(remaining, 3),
                 'reason': reason, 'stopped': self.stopped is not None}
        self.state_path.parent.mkdir(parents=True, exist_ok=True)
        temporary = self.state_path.with_suffix(self.state_path.suffix + '.tmp')
        temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        temporary.replace(self.state_path)

    def abort(self, reason):
        with self.condition:
            self.stopped = self.stopped or reason
            self.condition.notify_all()

    def defer(self, seconds, reason):
        seconds = max(0.0, float(seconds))
        if not math.isfinite(seconds):
            raise ValueError('Cooldown must be finite.')
        with self.condition:
            self.deadline = max(self.deadline, time.monotonic() + seconds)
            self.events += 1
            if seconds > self.max_cooldown:
                self.stopped = (f'Retry-After requires {seconds:.0f}s, exceeding --max-cooldown '
                                f'{self.max_cooldown:g}s. Dispatch stopped; successful pages are cached. '
                                'Resume after the saved deadline or explicitly allow the longer wait.')
            self._persist_locked(reason)
            self.condition.notify_all()
            self.progress(f'Shared cooldown: {seconds:.1f}s; {reason}. '
                          + ('Stopping new requests.' if self.stopped else 'No new requests before this deadline.'))

    @property
    def aborted(self):
        with self.condition:
            return self.stopped is not None

    @property
    def cooling_down(self):
        with self.condition:
            return self.deadline > time.monotonic()

    def acquire(self, label='request', reserve=True):
        with self.condition:
            while True:
                if self.stopped:
                    raise CooldownStopped(self.stopped)
                now = time.monotonic()
                remaining = max(self.deadline, self.next_start if reserve else 0) - now
                if remaining <= 0:
                    if reserve:
                        self.next_start = now + self.request_interval
                    return
                if self.deadline > now and now - self.last_notice >= min(30.0, self.wait_slice):
                    self.progress(f'Shared cooldown: {self.deadline - now:.0f}s remaining; '
                                  f'{label} waiting; new dispatch suspended.')
                    self.last_notice = now
                self.condition.wait(timeout=min(self.wait_slice, remaining))

    def retry_wait(self, seconds, label='retry'):
        until = time.monotonic() + max(0.0, float(seconds))
        with self.condition:
            while time.monotonic() < until:
                if self.stopped:
                    raise CooldownStopped(self.stopped)
                self.condition.wait(timeout=min(self.wait_slice, until - time.monotonic()))
        self.acquire(label, reserve=False)

    def snapshot(self):
        with self.condition:
            return {'cooldown_events': self.events, 'stopped': self.stopped is not None,
                    'stop_reason': self.stopped, 'cooldown_remaining_seconds':
                    round(max(0.0, self.deadline - time.monotonic()), 3)}


def _post_message(endpoint, key, payload, timeout=480):
    request = {**payload, 'stream': True}
    headers = {'x-api-key': key, 'anthropic-version': '2023-06-01',
               'content-type': 'application/json'}
    start = time.monotonic()
    session = requests.Session()
    # Use verified direct TLS; the local forwarding proxy drops long responses.
    session.trust_env = False
    try:
        response_context = session.post(endpoint, headers=headers, json=request, stream=True,
                                        timeout=(30, timeout))
    except requests.RequestException as exc:
        session.close()
        raise MessageTransportError(type(exc).__name__ + ': request connection failed.') from None
    with session, response_context as response:
        if response.status_code != 200:
            retry_after = parse_retry_after(response.headers.get('retry-after', ''))
            try:
                error_type = safe_error_type(response.json())
            except (ValueError, requests.RequestException):
                error_type = None
            raise MessageAPIError(response.status_code, retry_after, error_type)
        if 'application/json' in response.headers.get('content-type', ''):
            value = response.json()
            if safe_error_type(value):
                raise MessageAPIError(response.status_code, error_type=safe_error_type(value))
            return value
        response.encoding = 'utf-8'
        blocks = {}
        usage = {}
        stop_reason = None
        complete = False
        for line in response.iter_lines(decode_unicode=True):
            if time.monotonic() - start > timeout:
                raise TimeoutError('Messages stream exceeded its total time budget.')
            if not line or not line.startswith('data:'):
                continue
            event = json.loads(line[5:].strip())
            kind = event.get('type')
            if kind == 'error':
                raise MessageAPIError(error_type=safe_error_type(event))
            if kind == 'message_start':
                usage.update(event.get('message', {}).get('usage', {}))
            elif kind == 'content_block_start':
                block = event.get('content_block', {})
                if block.get('type') == 'text':
                    blocks[event['index']] = block.get('text', '')
            elif kind == 'content_block_delta':
                delta = event.get('delta', {})
                if delta.get('type') == 'text_delta':
                    index = event['index']
                    blocks[index] = blocks.get(index, '') + delta.get('text', '')
            elif kind == 'message_delta':
                stop_reason = event.get('delta', {}).get('stop_reason', stop_reason)
                usage.update(event.get('usage', {}))
            elif kind == 'message_stop':
                complete = True
                break
        if not complete or stop_reason is None:
            raise ValueError('Messages stream ended before the complete message.')
        return {'content': [{'type': 'text', 'text': blocks[index]}
                            for index in sorted(blocks)],
                'stop_reason': stop_reason, 'usage': usage}


def post_message(endpoint, key, payload, timeout=480):
    try:
        return _post_message(endpoint, key, payload, timeout)
    except requests.RequestException as exc:
        raise MessageTransportError(type(exc).__name__ + ': request connection failed.') from None
    except json.JSONDecodeError:
        raise MessageTransportError('Messages API returned malformed protocol JSON.') from None
