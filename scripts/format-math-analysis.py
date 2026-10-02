"""Add safe statement links and bidirectional footnotes to assembled lecture notes.

Run after complete assembly and the independent review/apply pass. Canonical
transcripts, mathematical text, equations, existing links, and source numbering
are never edited. The formatter is deterministic and idempotent; its only visible
additions are navigation links, bold proof labels and safe delimiter spacing.
No API or credentials are
used. All audit details remain in the private work directory.
"""

from __future__ import annotations

import argparse
import bisect
import hashlib
import json
import os
import re
import sys
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path


VERSION = 'math-analysis-format-v1'
KINDS = {'定义': 'definition', '定理': 'theorem', '引理': 'lemma',
         '命题': 'proposition', '推论': 'corollary', '例': 'example'}
KIND_PATTERN = '|'.join(KINDS)
NUMBER = r'[0-9]+(?:[.．][0-9]+)*'
NUMBER_END = r'(?![0-9]|[.．][0-9])'
LABEL = re.compile(r'(?m)^[ \t]*(?:#{2,6}[ \t]+|[-+][ \t]+|[0-9]+[.)][ \t]+)?'
                   r'(?:<span id="ma-(?:definition|theorem|lemma|proposition|corollary|example)-[0-9p-]+" class="lecture-anchor"></span>)?'
                   r'(?P<label>\*\*(?P<kind>' + KIND_PATTERN + r')[ \t]*'
                   r'(?P<number>' + NUMBER + r')' + NUMBER_END + r'[^*\n]*\*\*)')
REFERENCE = re.compile(r'(?P<kind>' + KIND_PATTERN + r')[ \t]*'
                       r'(?P<number>' + NUMBER + r')' + NUMBER_END)
SOURCE = re.compile(r'<!--\s*source:\s*PDF\s*(?P<pdf>[0-9]+)\s*;\s*'
                    r'printed:\s*(?P<printed>[^;>]+)(?:;[^>]*?)?\s*-->', re.I)
NOTE = re.compile(r'(?m)^[ \t]*>[ \t]*(?P<label>\*\*脚注[ \t]*'
                  r'(?P<number>[0-9]+)(?:[（(]讲义第[ \t]*(?P<printed>[^）)]+?)[ \t]*页[）)])?\*\*)')
CALL = re.compile(r'<sup>[ \t]*(?P<label>\[?[ \t]*(?P<number>[0-9]+)[ \t]*\]?)[ \t]*</sup>', re.I)
NATIVE_NOTE = re.compile(r'(?m)^\[\^(?P<key>p(?P<pdf>[0-9]{4})-(?P<number>[0-9]+))\]:[ \t]?(?P<first>[^\n]*)')
NATIVE_CALL = re.compile(r'\[\^p(?P<pdf>[0-9]{4})-(?P<number>[0-9]+)\](?!:)')
OWN_ANCHOR = re.compile(r'<span id="(?:ma-(?:definition|theorem|lemma|proposition|corollary|example)-[0-9p-]+|'
                        r'fn-p[0-9]{4}-[0-9]+)" class="lecture-anchor"></span>(?:\n\n)?')
OWN_REFERENCE = re.compile(r'\[(?P<label>(?:' + KIND_PATTERN + r')[ \t]*' + NUMBER + r')\]'
                           r'\([^()\n]*#ma-(?:definition|theorem|lemma|proposition|corollary|example)-[0-9p-]+\)')
OWN_CALL = re.compile(r'<sup id="fnref-p[0-9]{4}-[0-9]+-[0-9]+" class="lecture-anchor">'
                      r'<a href="[^"]*#fn-p[0-9]{4}-[0-9]+" aria-label="脚注 [0-9]+">'
                      r'(?P<label>\[?[ \t]*[0-9]+[ \t]*\]?)</a></sup>')
OWN_BACKLINK = re.compile(r'(?m)^[ \t]*>[ \t]*\[↩[^\n]*'
                          r'<!-- math-analysis-format:footnote-backlinks fn-p[0-9]{4}-[0-9]+ -->[ \t]*\n?')


@dataclass(frozen=True)
class Span:
    start: int
    end: int
    kind: str


@dataclass
class Document:
    path: Path
    original: str
    text: str


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(path)


def escaped(text, pos):
    count = 0
    pos -= 1
    while pos >= 0 and text[pos] == '\\':
        count += 1
        pos -= 1
    return count % 2 == 1


def matching_delimiter(text, delimiter, pos):
    while True:
        found = text.find(delimiter, pos)
        if found < 0:
            return -1
        if not escaped(text, found):
            return found
        pos = found + len(delimiter)


def bracket_end(text, start, opening, closing):
    """Scan a nested Markdown label/URL without interpreting its contents."""
    depth = 0
    pos = start
    while pos < len(text):
        char = text[pos]
        if char == '\\':
            pos += 2
            continue
        if char == opening:
            depth += 1
        elif char == closing:
            depth -= 1
            if depth == 0:
                return pos + 1
        pos += 1
    return -1


def html_tag_end(text, start):
    quote = None
    for pos in range(start + 1, len(text)):
        char = text[pos]
        if quote:
            if char == quote:
                quote = None
        elif char in ('"', "'"):
            quote = char
        elif char == '>':
            return pos + 1
        elif char == '\n' and pos - start > 1000:
            break
    return -1


def html_element_end(text, start, tag_name):
    depth = 1
    cursor = start
    pattern = re.compile(r'</?' + re.escape(tag_name) + r'\b', re.I)
    while True:
        match = pattern.search(text, cursor)
        if not match:
            return len(text)
        end = html_tag_end(text, match.start())
        if end < 0:
            return len(text)
        raw = text[match.start():end]
        if raw.startswith('</'):
            depth -= 1
        elif not raw.endswith('/>'):
            depth += 1
        if depth == 0:
            return end
        cursor = end


def protected_spans(text):
    """Conservatively separate math/code/links/HTML from editable Markdown prose.

    This is intentionally narrower than a complete Markdown parser: unsupported
    or ambiguous constructs are protected rather than guessed. Original indices
    are retained, so no placeholder round-trip can change source characters.
    """
    spans = []
    pos = 0
    size = len(text)
    reference_labels = {re.sub(r'\s+', ' ', match[1]).strip().casefold()
                        for match in re.finditer(r'(?m)^[ \t]*(?:>[ \t]*)*\[([^]\n]+)\]:', text)}
    while pos < size:
        line_start = pos == 0 or text[pos - 1] == '\n'
        if line_start:
            if pos == 0 and text.startswith('---\n'):
                end = re.search(r'(?m)^(?:---|\.\.\.)[ \t]*$', text[4:])
                stop = 4 + end.end() if end else size
                spans.append(Span(pos, stop, 'frontmatter'))
                pos = stop
                continue
            fence = re.match(r'[ \t]*(?:>[ \t]*)*(?:(?:[-+*]|[0-9]+[.)])[ \t]+)?'
                             r'(`{3,}|~{3,})[^\n]*(?:\n|$)', text[pos:])
            if fence:
                marker = fence[1]
                closing = re.search(r'(?m)^[ \t]*(?:>[ \t]*)*' + re.escape(marker[0]) +
                                    '{' + str(len(marker)) + r',}[ \t]*(?:\n|$)', text[pos + fence.end():])
                stop = pos + fence.end() + closing.end() if closing else size
                spans.append(Span(pos, stop, 'code'))
                pos = stop
                continue
            # Protect indented code conservatively; an occasional deeply nested
            # list paragraph may consequently receive no automatic reference link.
            if re.match(r'(?: {4}|\t)', text[pos:]):
                stop = text.find('\n', pos)
                stop = size if stop < 0 else stop + 1
                spans.append(Span(pos, stop, 'code'))
                pos = stop
                continue
            definition = re.match(r'[ ]{0,3}\[[^]\n]+\]:[^\n]*(?:\n|$)', text[pos:])
            if definition:
                stop = pos + definition.end()
                spans.append(Span(pos, stop, 'link'))
                pos = stop
                continue
        if text.startswith('<!--', pos):
            closing = text.find('-->', pos + 4)
            stop = size if closing < 0 else closing + 3
            spans.append(Span(pos, stop, 'comment'))
            pos = stop
            continue
        if text[pos] == '`' and not escaped(text, pos):
            run = re.match(r'`+', text[pos:])[0]
            closing = text.find(run, pos + len(run))
            if closing >= 0:
                stop = closing + len(run)
                spans.append(Span(pos, stop, 'code'))
                pos = stop
                continue
        if text[pos] == '$' and not escaped(text, pos):
            delimiter = '$$' if text.startswith('$$', pos) else '$'
            closing = matching_delimiter(text, delimiter, pos + len(delimiter))
            stop = size if closing < 0 else closing + len(delimiter)
            spans.append(Span(pos, stop, 'math'))
            pos = stop
            continue
        if text.startswith(('\\[', '\\('), pos) and not escaped(text, pos):
            delimiter = '\\]' if text[pos + 1] == '[' else '\\)'
            closing = text.find(delimiter, pos + 2)
            stop = size if closing < 0 else closing + 2
            spans.append(Span(pos, stop, 'math'))
            pos = stop
            continue
        if text[pos] == '<':
            tag = re.match(r'</?([A-Za-z][A-Za-z0-9:-]*)\b', text[pos:])
            auto = re.match(r'<(?:https?://|mailto:)[^>\n]+>', text[pos:])
            if auto:
                stop = pos + auto.end()
                spans.append(Span(pos, stop, 'link'))
                pos = stop
                continue
            if tag:
                stop = html_tag_end(text, pos)
                if stop >= 0:
                    name = tag[1].lower()
                    void = name in {'br', 'hr', 'img', 'input', 'meta', 'link', 'wbr', 'area', 'source'}
                    if not text.startswith('</', pos) and not text[pos:stop].endswith('/>') and not void:
                        stop = html_element_end(text, stop, name)
                    spans.append(Span(pos, stop, 'html'))
                    pos = stop
                    continue
        label_start = pos + 1 if text.startswith('![', pos) else pos
        if text[label_start:label_start + 1] == '[' and not escaped(text, label_start):
            label_stop = bracket_end(text, label_start, '[', ']')
            if label_stop >= 0:
                if text[label_stop:label_stop + 1] == '(':
                    stop = bracket_end(text, label_stop, '(', ')')
                    if stop >= 0:
                        spans.append(Span(pos, stop, 'link'))
                        pos = stop
                        continue
                if text[label_stop:label_stop + 1] == '[':
                    stop = bracket_end(text, label_stop, '[', ']')
                    if stop >= 0:
                        spans.append(Span(pos, stop, 'link'))
                        pos = stop
                        continue
                shortcut = re.sub(r'\s+', ' ', text[label_start + 1:label_stop - 1]).strip().casefold()
                if shortcut in reference_labels:
                    spans.append(Span(pos, label_stop, 'link'))
                    pos = label_stop
                    continue
        if text[pos] == '\\' and pos + 1 < size:
            spans.append(Span(pos, pos + 2, 'escape'))
            pos += 2
        else:
            pos += 1
    return spans


def intersects(spans, start, end, kinds=None):
    return any(span.start < end and start < span.end and (kinds is None or span.kind in kinds)
               for span in spans)


def apply_edits(text, edits):
    ordered = sorted(edits, key=lambda edit: (edit[0], edit[1]))
    previous_end = -1
    for start, end, replacement in ordered:
        if not (0 <= start <= end <= len(text)) or start < previous_end:
            raise ValueError('Overlapping or invalid Markdown edits; refusing to format.')
        previous_end = end
    for start, end, replacement in reversed(ordered):
        text = text[:start] + replacement + text[end:]
    return text


def clean_owned(text, footnotes_only=False):
    """Regenerate only this script's exact output while preserving math and code."""
    spans = protected_spans(text)
    edits = []
    for pattern, replacement in (
        (OWN_ANCHOR, lambda match: ''),
        (OWN_CALL, lambda match: '<sup>' + match['label'] + '</sup>'),
        (OWN_BACKLINK, lambda match: ''),
    ):
        for match in pattern.finditer(text):
            if footnotes_only and pattern is OWN_ANCHOR and 'id="ma-' in match[0]:
                continue
            if intersects(spans, match.start(), match.end(), {'math', 'code', 'frontmatter'}):
                continue
            if any(span.start <= match.start() < span.end and span.kind in {'comment', 'link'} for span in spans):
                continue
            # Only an exact generated HTML object may be unwrapped. A matching
            # string inside an outer HTML element is source content to preserve.
            if any(span.kind == 'html' and span.start <= match.start() < span.end
                   and (span.start != match.start() or span.end > match.end()) for span in spans):
                continue
            edits.append((match.start(), match.end(), replacement(match)))
    return apply_edits(text, edits)


def page_locations(text, spans=None):
    spans = spans if spans is not None else protected_spans(text)
    positions = []
    for span in spans:
        if span.kind == 'comment':
            match = SOURCE.fullmatch(text[span.start:span.end])
            if match:
                positions.append((span.end, int(match['pdf']), match['printed'].strip()))
    return positions


def page_at(locations, pos):
    found = bisect.bisect_right([item[0] for item in locations], pos) - 1
    return locations[found][1] if found >= 0 else None


def line_bounds(text, pos):
    start = text.rfind('\n', 0, pos) + 1
    end = text.find('\n', pos)
    return start, len(text) if end < 0 else end + 1


def footnote_records(document):
    text = document.text
    spans = protected_spans(text)
    pages = page_locations(text, spans)
    headers = [match for match in NOTE.finditer(text)
               if not intersects(spans, match.start('label'), match.end('label'))]
    result = []
    for match in headers:
        start, end = line_bounds(text, match.start())
        cursor = end
        final_quote = end
        blank = False
        while cursor < len(text):
            next_end = text.find('\n', cursor)
            next_end = len(text) if next_end < 0 else next_end + 1
            line = text[cursor:next_end]
            if NOTE.match(text, cursor) or re.match(r'[ \t]*<!--\s*source:', line):
                break
            if re.match(r'[ \t]*>', line):
                final_quote = next_end
                blank = False
            elif not line.strip():
                blank = True
            elif not blank and not re.match(r'[ \t]*(?:#|[-+*][ \t]|[0-9]+[.)][ \t]|`{3,}|~{3,}|<)', line):
                # CommonMark permits lazy continuation of a quoted paragraph.
                # Protect it as part of the same footnote, before any back link.
                final_quote = next_end
            elif line.strip():
                break
            cursor = next_end
        pdf_page = page_at(pages, match.start())
        number = str(int(match['number']))
        raw = text[match.end('label'):final_quote]
        body_lines = raw.splitlines()
        if body_lines:
            body_lines[0] = re.sub(r'^[ \t]*[：:][ \t]*', '', body_lines[0])
            body_lines[1:] = [re.sub(r'^[ \t]*>[ \t]?', '', line) for line in body_lines[1:]]
        body = '\n'.join(body_lines).rstrip('\n')
        result.append({'document': document, 'start': start, 'end': final_quote,
                       'label_start': match.start('label'), 'label_end': match.end('label'),
                       'pdf_page': pdf_page, 'number': number,
                       'style': 'blockquote', 'body': body,
                       'key': (pdf_page, number),
                       'anchor': f'fn-p{pdf_page:04d}-{number}' if pdf_page is not None else None})
    for match in NATIVE_NOTE.finditer(text):
        if intersects(spans, match.start(), match.end(), {'math', 'code', 'frontmatter', 'html', 'comment'}):
            continue
        _, end = line_bounds(text, match.start())
        cursor = end
        final = end
        body_lines = [match['first']]
        pending_blank = []
        while cursor < len(text):
            stop = text.find('\n', cursor)
            stop = len(text) if stop < 0 else stop + 1
            line = text[cursor:stop].rstrip('\n')
            if line.startswith('    ') or line.startswith('\t'):
                body_lines.extend(pending_blank)
                pending_blank = []
                body_lines.append(line[4:] if line.startswith('    ') else line[1:])
                final = stop
            elif not line.strip():
                pending_blank.append('')
            else:
                break
            cursor = stop
        pdf_page, number = int(match['pdf']), str(int(match['number']))
        result.append({'document': document, 'start': match.start(), 'end': final,
                       'label_start': match.start(), 'label_end': match.end(),
                       'pdf_page': pdf_page, 'number': number, 'key': (pdf_page, number),
                       'style': 'native', 'body': '\n'.join(body_lines).rstrip('\n'),
                       'anchor': f'fn-p{pdf_page:04d}-{number}'})
    return result


def relative_target(from_file, to_file, anchor):
    if from_file.resolve() == to_file.resolve():
        return '#' + anchor
    return Path(os.path.relpath(to_file, from_file.parent)).as_posix() + '#' + anchor


def normalized_number(value):
    return '.'.join(str(int(part)) for part in value.replace('．', '.').split('.'))


def statement_labels(text):
    """Exclude named proof headings from numbered statement declarations."""
    return [match for match in LABEL.finditer(text)
            if not re.search(r'的[ \t]*(?:证明|證明)', match['label'])]


def separate_inline_math_from_digits(documents, report):
    """A closing dollar followed by a digit is rejected by Markdown math rules."""
    for document in documents:
        edits = []
        for span in protected_spans(document.text):
            value = document.text[span.start:span.end]
            if (span.kind == 'math' and value.startswith('$')
                    and not value.startswith('$$') and value.endswith('$')
                    and span.end < len(document.text)
                    and document.text[span.end] in '0123456789'):
                # This space lies outside the exact original TeX span.
                edits.append((span.end, span.end, ' '))
        report['math_boundary_spaces'] += len(edits)
        document.text = apply_edits(document.text, edits)


def add_statement_anchors(documents, report):
    records = []
    groups = defaultdict(list)
    for document in documents:
        text = document.text
        spans = protected_spans(text)
        pages = page_locations(text, spans)
        footnotes = footnote_records(document)
        for match in statement_labels(text):
            if intersects(spans, match.start('label'), match.end('number')):
                continue
            if any(note['start'] <= match.start() < note['end'] for note in footnotes):
                continue
            pdf_page = page_at(pages, match.start())
            if pdf_page is None:
                report['unlocated_statements'].append({'file': str(document.path), 'label': match['label']})
                continue
            number = normalized_number(match['number'])
            record = {'document': document, 'start': match.start('label'), 'end': match.end('label'),
                      'kind': match['kind'], 'number': number, 'pdf_page': pdf_page,
                      'key': (match['kind'], number)}
            groups[record['key']].append(record)
            records.append(record)
    edits = defaultdict(list)
    for key, items in groups.items():
        base = 'ma-' + KINDS[key[0]] + '-' + key[1].replace('.', '-')
        occurrence = defaultdict(int)
        if len(items) > 1:
            report['duplicate_statement_keys'].append({'kind': key[0], 'number': key[1],
                'targets': [{'file': str(item['document'].path), 'pdf_page': item['pdf_page']} for item in items]})
        for item in items:
            suffix = ''
            if len(items) > 1:
                occurrence[item['pdf_page']] += 1
                suffix = f'-p{item["pdf_page"]:04d}'
                if occurrence[item['pdf_page']] > 1:
                    suffix += '-' + str(occurrence[item['pdf_page']])
            item['anchor'] = base + suffix
            text = f'<span id="{item["anchor"]}" class="lecture-anchor"></span>'
            edits[item['document'].path].append((item['start'], item['start'], text))
            report['statement_targets'].append({'kind': item['kind'], 'number': item['number'],
                'pdf_page': item['pdf_page'], 'file': str(item['document'].path), 'anchor': item['anchor']})
    for document in documents:
        document.text = apply_edits(document.text, edits[document.path])
    return groups


def add_statement_references(documents, groups, report):
    for document in documents:
        text = document.text
        spans = protected_spans(text)
        pages = page_locations(text, spans)
        labels = [(match.start('label'), match.end('label')) for match in statement_labels(text)]
        notes = footnote_records(document)
        edits = []
        for match in REFERENCE.finditer(text):
            if intersects(spans, match.start(), match.end()):
                continue
            if any(start <= match.start() < end for start, end in labels):
                continue
            if any(note['start'] <= match.start() < note['end'] for note in notes):
                continue
            start, end = line_bounds(text, match.start())
            if re.match(r'[ \t]*#', text[start:end]):
                continue
            # "命题 1)" can name a local enumerated condition, not global 命题1.
            # Ranges/lists are also ambiguous; leave them as the original prose.
            after = text[match.end():]
            if re.match(r'[ \t]*[)）]', after) or re.match(r'[ \t]*[-–—～~至、,，][ \t]*[0-9]', after):
                report['skipped_local_or_range_references'] += 1
                continue
            key = (match['kind'], normalized_number(match['number']))
            targets = groups.get(key, [])
            if len(targets) != 1:
                report['unresolved_references'].append({'file': str(document.path),
                    'pdf_page': page_at(pages, match.start()), 'text': match[0],
                    'reason': 'ambiguous target' if targets else 'target not found'})
                continue
            target = targets[0]
            link = relative_target(document.path, target['document'].path, target['anchor'])
            edits.append((match.start(), match.end(), f'[{match[0]}]({link})'))
            report['references'] += 1
        document.text = apply_edits(text, edits)


def bold_proof_labels(documents, report):
    pattern = re.compile(r'(?m)^[ \t]*(?P<label>\*\*(?:证明|證明)[:：.．。]\*\*|(?:证明|證明)[:：.．。])')
    for document in documents:
        spans = protected_spans(document.text)
        notes = footnote_records(document)
        edits = []
        for match in pattern.finditer(document.text):
            if intersects(spans, match.start('label'), match.end('label')):
                continue
            if any(note['start'] <= match.start() < note['end'] for note in notes):
                continue
            label = match['label']
            if not label.startswith('**'):
                label = '**' + label + '**'
                report['proof_labels_bolded'] += 1
            # A punctuation-ending strong label needs a boundary before a
            # following letter or digit under CommonMark's delimiter rules.
            if match.end('label') < len(document.text) and not document.text[match.end('label')].isspace():
                label += ' '
            if label != match['label']:
                edits.append((match.start('label'), match.end('label'), label))
        document.text = apply_edits(document.text, edits)


def native_definition(key, body):
    identifier = f'p{key[0]:04d}-{key[1]}'
    lines = body.split('\n')
    first = lines[0] if lines else ''
    continuation = ''.join('\n    ' + line for line in lines[1:])
    return f'[^{identifier}]: {first}' + continuation + '\n'


def add_footnotes(documents, report):
    """Use the website's native Markdown-footnote parser and its own backrefs."""
    records = [note for document in documents for note in footnote_records(document)]
    groups = defaultdict(list)
    for note in records:
        groups[note['key']].append(note)
    bodies = {}
    for key, items in groups.items():
        if key[0] is not None and len({item['body'] for item in items}) == 1:
            bodies[key] = items[0]['body']
        else:
            report['unresolved_footnotes'].append({'pdf_page': key[0], 'number': key[1],
                'reason': 'unlocated or conflicting footnote bodies'})
    required = defaultdict(set)
    edits = defaultdict(list)
    global_calls = defaultdict(int)
    for document in documents:
        text = document.text
        spans = protected_spans(text)
        locations = page_locations(text, spans)
        local_notes = [note for note in records if note['document'] is document]
        for match in NATIVE_CALL.finditer(text):
            if intersects(spans, match.start(), match.end(), {'math', 'code', 'frontmatter', 'html', 'comment'}):
                continue
            if any(note['start'] <= match.start() < note['end'] for note in local_notes):
                continue
            key = (int(match['pdf']), str(int(match['number'])))
            required[document.path].add(key)
            global_calls[key] += 1
            report['footnote_callouts'] += 1
        for match in CALL.finditer(text):
            if intersects(spans, match.start(), match.end(), {'math', 'code', 'frontmatter', 'link', 'comment'}):
                continue
            containing = [span for span in spans if span.start <= match.start() < span.end]
            if any(span.kind == 'html' and (span.start != match.start() or span.end != match.end()) for span in containing):
                continue
            if any(note['start'] <= match.start() < note['end'] for note in local_notes):
                continue
            key = (page_at(locations, match.start()), str(int(match['number'])))
            if key not in bodies:
                report['unresolved_footnotes'].append({'file': str(document.path), 'pdf_page': key[0],
                    'number': key[1], 'reason': 'footnote definition not found'})
                continue
            required[document.path].add(key)
            global_calls[key] += 1
            edits[document.path].append((match.start(), match.end(), f'[^p{key[0]:04d}-{key[1]}]'))
            report['footnote_callouts'] += 1
    defined = defaultdict(set)
    for note in records:
        key = note['key']
        if key not in bodies:
            continue
        if note['style'] == 'native':
            defined[note['document'].path].add(key)
            continue
        if not global_calls[key]:
            report['unresolved_footnotes'].append({'file': str(note['document'].path),
                'pdf_page': key[0], 'number': key[1], 'reason': 'footnote has no identifiable callout; body retained'})
            continue
        edits[note['document'].path].append((note['start'], note['end'], native_definition(key, note['body']) + '\n'))
        defined[note['document'].path].add(key)
    for document in documents:
        copies = []
        for key in sorted(required[document.path]):
            if key not in bodies:
                report['unresolved_footnotes'].append({'file': str(document.path), 'pdf_page': key[0],
                    'number': key[1], 'reason': 'native footnote definition not found'})
            elif key not in defined[document.path]:
                copies.append(native_definition(key, bodies[key]))
                defined[document.path].add(key)
                report['footnote_definition_copies'] += 1
        if copies:
            edits[document.path].append((len(document.text), len(document.text), '\n\n' + '\n'.join(copies)))
        document.text = apply_edits(document.text, edits[document.path])
        # Validate complete editable bodies after quote-to-footnote serialization,
        # including all paragraphs, display formulae and lazy continuation lines.
        for note in footnote_records(document):
            if note['style'] == 'native' and note['key'] in bodies and note['body'] != bodies[note['key']]:
                raise ValueError('Footnote body changed during Markdown serialization; refusing all writes.')
    report['footnote_targets'] = sum(len(values) for values in defined.values())
    report['footnote_backlinks'] = report['footnote_callouts']


def move_native_footnotes_to_end(documents, report):
    """Relocate complete native definitions without reserializing their bodies."""
    report['footnote_definitions_relocated'] = 0
    for document in documents:
        notes = [note for note in footnote_records(document) if note['style'] == 'native']
        if not notes:
            continue
        before = [(note['key'], note['body']) for note in notes]
        definitions = [document.text[note['start']:note['end']].strip('\r\n') for note in notes]
        body = apply_edits(document.text, [(note['start'], note['end'], '') for note in notes])
        candidate = body.rstrip('\r\n') + '\n\n' + '\n\n'.join(definitions) + '\n'
        check = Document(document.path, candidate, candidate)
        after = [(note['key'], note['body']) for note in footnote_records(check) if note['style'] == 'native']
        if before != after:
            raise ValueError('Native footnote key/body changed during relocation; refusing all writes.')
        # This guard removes footnote containers and compares the original body
        # sequence. Each relocated footnote was separately checked in full above.
        if immutable_blocks(document.text) != immutable_blocks(candidate):
            raise ValueError('Body mathematics/code/links changed during footnote relocation; refusing all writes.')
        if candidate != document.text:
            report['footnote_definitions_relocated'] += len(notes)
            document.text = candidate


def immutable_blocks(text):
    # Footnote containers legitimately change from blockquotes to indented native
    # definitions and may be copied across files. Their complete decoded bodies
    # are verified separately; all other protected content stays byte-for-byte.
    document = Document(Path('immutable.md'), text, text)
    notes = footnote_records(document)
    text = apply_edits(text, [(note['start'], note['end'], '') for note in notes])
    protected = []
    for span in protected_spans(text):
        raw = text[span.start:span.end]
        if span.kind in {'math', 'code', 'frontmatter'}:
            protected.append((span.kind, raw))
        elif span.kind == 'comment' and not raw.startswith('<!-- math-analysis-format:footnote-backlinks '):
            protected.append((span.kind, raw))
        elif span.kind == 'html' and not (CALL.fullmatch(raw) or OWN_CALL.fullmatch(raw) or OWN_ANCHOR.fullmatch(raw)):
            protected.append((span.kind, raw))
        elif span.kind == 'link':
            relative_owned = OWN_REFERENCE.fullmatch(raw) and not re.search(r'\]\((?:https?:|//)', raw)
            backlink = re.fullmatch(r'\[↩[0-9]*\]\([^()\n]*#fnref-p[0-9]{4}-[0-9]+-[0-9]+\)', raw)
            native_marker = bool(re.match(r'\[\^p[0-9]{4}-[0-9]+\]', raw))
            if not relative_owned and not backlink and not native_marker:
                protected.append((span.kind, raw))
    return protected


def load_documents(args, manifest):
    output = args.output.resolve()
    names = sorted({page['file'] for page in manifest.get('pages', []) if page.get('semester', 0) > 0})
    documents = []
    for name in names:
        path = (output / name).resolve()
        if not path.is_relative_to(output) or path.suffix.lower() != '.md':
            raise ValueError('Source manifest contains a path outside the selected output directory.')
        original = path.read_text(encoding='utf-8')
        if not page_locations(original):
            raise ValueError(f'{name}: assembled source page comments are missing.')
        documents.append(Document(path, original, clean_owned(original, footnotes_only=args.completed_only)))
    if not documents:
        raise ValueError('No assembled mathematical section files were found in source-manifest.json.')
    return documents


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, default=Path('notes/2026/10/02/math-analysis-lecture-notes'))
    parser.add_argument('--work', type=Path, default=Path('.codex/math-analysis'))
    parser.add_argument('--check', action='store_true', help='Compute changes/audit without writing Markdown.')
    parser.add_argument('--allow-incomplete', action='store_true', help='Development-only: format an explicit partial fixture.')
    parser.add_argument('--completed-only', action='store_true', help='Convert footnotes in published complete fragments; defer statement links until full review.')
    args = parser.parse_args()
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(encoding='utf-8')
    try:
        manifest = read_json(args.output / 'source-manifest.json')
        review_path = args.work / 'review' / 'audit.json'
        review = read_json(review_path) if review_path.exists() else {}
        if not args.allow_incomplete and not args.completed_only:
            if manifest.get('complete') is not True:
                raise ValueError('Complete assembly is required before formatting; source-manifest.json is incomplete.')
            if review.get('second_pass_complete') is not True or not (args.output / 'errata.md').is_file():
                raise ValueError('Complete independent review/apply and errata.md are required before formatting.')
            if review.get('source_sha256') != manifest.get('source_sha256'):
                raise ValueError('Independent review belongs to a different source PDF.')
        documents = load_documents(args, manifest)
        report = {'version': VERSION, 'source_sha256': manifest.get('source_sha256'),
                  'complete_source': manifest.get('complete') is True,
                  'complete_review': review.get('second_pass_complete') is True,
                  'dry_run': args.check, 'files': len(documents), 'changed_files': [],
                  'statement_targets': [], 'duplicate_statement_keys': [],
                  'unlocated_statements': [], 'references': 0, 'unresolved_references': [],
                  'skipped_local_or_range_references': 0, 'footnote_targets': 0,
                  'footnote_callouts': 0, 'footnote_backlinks': 0, 'unresolved_footnotes': [],
                  'footnote_definition_copies': 0, 'native_markdown_footnotes': True,
                  'proof_labels_bolded': 0, 'proof_continuation_hints': 0, 'title_updates': 0,
                  'math_boundary_spaces': 0,
                  'math_code_preserved': True,
                  'footnote_return_policy': 'The native Markdown-footnote renderer numbers calls and generates return links.'}
        separate_inline_math_from_digits(documents, report)
        if not args.completed_only:
            groups = add_statement_anchors(documents, report)
            add_statement_references(documents, groups, report)
            bold_proof_labels(documents, report)
        add_footnotes(documents, report)
        move_native_footnotes_to_end(documents, report)
        report['references_added'] = report['references']
        report['references'] = sum(sum(span.kind == 'link'
                                  and OWN_REFERENCE.fullmatch(document.text[span.start:span.end]) is not None
                                  and not re.search(r'\]\((?:https?:|//)', document.text[span.start:span.end])
                                  for span in protected_spans(document.text))
                                  for document in documents)
        report['html_links_comments_preserved'] = True
        # Validate every document before writing any file. A formatting mismatch
        # cannot leave a partially modified corpus.
        for document in documents:
            if immutable_blocks(document.original) != immutable_blocks(document.text):
                raise ValueError(f'{document.path.name}: protected mathematical/code content changed; refusing all writes.')
            if document.original != document.text:
                report['changed_files'].append({'file': document.path.relative_to(args.output.resolve()).as_posix(),
                    'before_sha256': hashlib.sha256(document.original.encode('utf-8')).hexdigest(),
                    'after_sha256': hashlib.sha256(document.text.encode('utf-8')).hexdigest()})
        for document in documents:
            if not args.check and document.original != document.text:
                document.path.write_text(document.text, encoding='utf-8')
        report['anchors'] = len(report['statement_targets'])
        report['unlocated'] = len(report['unlocated_statements']) + len(report['unresolved_references']) + len(report['unresolved_footnotes'])
        write_json(args.work / 'format-audit.json', report)
        print(json.dumps({key: report[key] for key in ('files', 'anchors', 'references', 'footnote_targets',
                         'footnote_callouts', 'footnote_backlinks', 'unlocated', 'math_code_preserved')}
                         | {'changed_files': len(report['changed_files']), 'dry_run': args.check},
                         ensure_ascii=False, indent=2), flush=True)
    except (ValueError, OSError, json.JSONDecodeError) as exc:
        parser.exit(1, f'{type(exc).__name__}: {exc}\n')


if __name__ == '__main__':
    main()
