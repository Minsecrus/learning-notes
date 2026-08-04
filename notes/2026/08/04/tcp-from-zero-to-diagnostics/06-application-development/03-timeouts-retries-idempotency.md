# 第27章 超时、重试和幂等性

设想一次转账请求的时间线：客户端发送完整请求，服务端完成数据库提交，响应刚开始返回时连接中断。客户端知道响应缺失，也知道连接已经失效；转账是否提交仍然需要业务证据。这个区间称为“不确定结果”，它是分布式系统的基本状态。

## 1. TCP 状态与业务状态

TCP ACK 表示某段字节已经进入对端 TCP 接收路径。它没有携带“数据库事务已提交”这层业务含义。客户端收到完整的成功响应时，可以按协议确认成功；收到完整失败响应时，可以按错误码确认失败；在响应到齐前发生超时、EOF 或 RST 时，结果可能处于以下任一阶段：

1. 请求尚未到达服务端。
2. 服务端只收到部分请求，协议解析失败。
3. 服务端收到请求，业务处理尚未提交。
4. 业务已经提交，响应仍在服务端或网络途中。
5. 响应部分到达，客户端缺少完整消息。

第4、5种情形说明了重试设计的核心：同一逻辑操作需要稳定身份，服务端需要识别重复请求并返回首次执行结果。

### 请求身份的作用域

请求 ID 只有放进明确命名空间才具备唯一性。常见唯一键是 `(tenant_id, authenticated_client_id, request_id)`，这样两个客户生成相同随机数时仍属于不同操作。服务端在鉴权完成后建立该键，避免客户端自行声明的任意身份越过权限边界。

ID 可以使用 128 位随机 UUID，也可以采用数据库生成的业务编号。本章 TNP/1 首部使用 64 位字段，适合教学；高请求量和长期保留系统通常选择更大的空间。服务端保存请求正文摘要，确保同一 ID 始终对应相同参数。响应也保存为规范字节或稳定业务状态，让所有重试得到一致语义。

请求 ID 同时进入客户端日志、服务端日志、数据库记录和追踪 Span。排查“不确定结果”时，工程师可以用一个 ID 连接发送时间、服务端接收时间、事务提交记录和重试响应，减少依赖连接端口等短期标识。

## 2. 六类时间尺度

| 机制 | 约束对象 | 典型用途 |
| --- | --- | --- |
| 连接超时 | 建立 TCP 连接的等待 | 快速切换地址或服务实例 |
| 单次读写超时 | 一次 Socket 调用 | 避免线程长期停在一次调用 |
| 请求总截止时间 | 连接、发送、处理、读取、重试的总和 | 向上层兑现端到端时限 |
| 空闲超时 | 一段时间内没有应用活动 | 回收长期静默连接 |
| TCP User Timeout | 已发送数据长期缺少确认等进展 | 平台支持时约束失去传输进展的连接 |
| TCP Keepalive | 空闲连接上的存活探测 | 发现主机消失或中间状态丢失 |

TCP 的重传计时器由协议栈根据 RTT 等信号管理。应用总截止时间表达业务耐心，它可以先于内核重传结束。Keepalive 通常在连接空闲很久后启动，适合连接维护；应用请求的 2 秒响应目标仍应由应用截止时间负责。

绝对截止时间可以贯穿所有步骤：

$$
T_{remain}=T_{deadline}-T_{monotonic\ now}
$$

每次连接、发送、读取与退避都从 $T_{remain}$ 领取预算。这样可以保证多次重试仍受一个端到端上限约束。

## 3. 带总截止时间的客户端

下面代码基于前两章的 `io_helpers.py` 与 `protocol.py`。一次逻辑调用只生成一个 `request_id`，每次尝试复用相同的 ID 和消息体。

```python
from __future__ import annotations

import errno
import random
import secrets
import socket
import time

from io_helpers import UnexpectedEOF, seconds_left
from protocol import (
    ProtocolError,
    TYPE_ERROR,
    TYPE_REQUEST,
    TYPE_RESPONSE,
    read_message,
    send_message,
)


class BusyError(Exception):
    pass


class ApplicationError(Exception):
    pass


TRANSIENT_ERRNOS = {
    errno.ECONNRESET,
    errno.ECONNABORTED,
    errno.ECONNREFUSED,
    errno.ETIMEDOUT,
    errno.EHOSTUNREACH,
    errno.ENETUNREACH,
}


def is_retryable(exc: BaseException) -> bool:
    if isinstance(
        exc, (TimeoutError, UnexpectedEOF, BusyError, ConnectionError)
    ):
        return True
    if isinstance(exc, socket.gaierror):
        return exc.errno == getattr(socket, "EAI_AGAIN", None)
    return isinstance(exc, OSError) and exc.errno in TRANSIENT_ERRNOS


def attempt(
    address: tuple[str, int],
    request_id: int,
    payload: bytes,
    deadline: float,
) -> bytes:
    connect_budget = min(1.0, seconds_left(deadline))
    with socket.create_connection(address, timeout=connect_budget) as sock:
        send_message(sock, TYPE_REQUEST, request_id, payload, deadline)
        response = read_message(sock, deadline)
        if response.request_id != request_id:
            raise ProtocolError("response request id mismatch")
        if response.msg_type == TYPE_ERROR:
            if response.error_code == 503:
                raise BusyError(response.payload.decode("utf-8", "replace"))
            raise ApplicationError(
                f"error {response.error_code}: "
                + response.payload.decode("utf-8", "replace")
            )
        if response.msg_type != TYPE_RESPONSE:
            raise ProtocolError(
                f"expected response type, got {response.msg_type}"
            )
        return response.payload


def call_with_retry(
    address: tuple[str, int],
    payload: bytes,
    *,
    total_timeout: float = 5.0,
    max_attempts: int = 4,
) -> tuple[int, bytes]:
    if total_timeout <= 0:
        raise ValueError("total_timeout must be positive")
    if max_attempts <= 0:
        raise ValueError("max_attempts must be positive")
    request_id = secrets.randbits(64)
    deadline = time.monotonic() + total_timeout
    last_error: Exception | None = None

    for attempt_number in range(1, max_attempts + 1):
        try:
            result = attempt(address, request_id, payload, deadline)
            return request_id, result
        except Exception as exc:
            if not is_retryable(exc):
                raise
            last_error = exc
            if attempt_number == max_attempts:
                break

            remaining = seconds_left(deadline)
            cap = min(0.2 * (2 ** (attempt_number - 1)), 1.5, remaining)
            time.sleep(random.uniform(0.0, cap))  # full jitter

    if last_error is None:
        raise RuntimeError("no attempt was made")
    raise TimeoutError(
        f"request {request_id} has no confirmed result"
    ) from last_error
```

这段阻塞式示例适合传入字面 IP 或已经解析出的单一地址。`socket.create_connection` 会遍历域名解析得到的候选地址，传入的 timeout 可能分别作用于多个候选；同步 `getaddrinfo` 也缺少 Python 级截止时间参数。需要把域名解析和多地址竞速纳入严格总期限时，可以使用带取消能力的异步解析器，并在每个候选连接前重新计算剩余预算。连接成功后仍要再次检查总截止时间。

指数退避降低持续故障期间的请求压力，随机抖动让大量客户端的重试时刻分散。最大尝试次数和总截止时间同时限制资源消耗。协议错误、鉴权失败、参数错误等确定性结果直接交给调用方；容量繁忙、连接重置和超时适合进入受控重试路径。生产代码还会结合操作是否允许重试、服务发现结果和熔断状态细化分类。

### 从错误发生阶段推导重试策略

连接建立前得到本地参数错误，可以直接修正调用。域名短暂解析失败、连接拒绝、服务端 503 和连接重置可能通过换实例或等待恢复获得成功。完整业务错误已经提供确定结果，例如余额不足，客户端应把它交给业务流程。协议校验错误通常意味着双方版本或实现存在偏差，快速暴露会比重复流量更有诊断价值。

请求开始发送后发生任何连接错误，结果都进入待确认集合；幂等键让这类错误具备安全重试路径。即使错误发生在 `connect()` 返回前，操作系统与代理环境也可能具有额外转发层，统一使用幂等键能简化客户端状态机。

重试还会放大负载。原始请求速率为 $\lambda$，平均每个逻辑请求额外尝试 $r$ 次时，服务端观察到的到达速率约为：

$$
\lambda_{server}=\lambda(1+r)
$$

故障期间若所有客户端立刻重试，排队和超时会继续上升。退避、抖动、重试预算、服务端 `Retry-After`、熔断与全局并发限制共同控制放大系数。一个实用重试预算可以规定“重试请求最多占近期总请求的 10%”，超出后优先返回明确的暂时不可用结果。

## 4. 服务端用事务保存首次结果

幂等操作满足“同一个逻辑请求执行多次，业务效果保持一次”。查询天然接近幂等；转账、创建订单等写操作需要服务端去重。下面的 SQLite 示例把余额更新、确定的业务拒绝与幂等记录放进同一事务，金额用整数分表示。

```python
import hashlib
import hmac
import json
import sqlite3


MAX_SQLITE_INTEGER = (1 << 63) - 1

SCHEMA = """
CREATE TABLE IF NOT EXISTS accounts (
    id TEXT PRIMARY KEY,
    balance INTEGER NOT NULL
        CHECK (typeof(balance) = 'integer' AND balance >= 0)
);
CREATE TABLE IF NOT EXISTS idempotency (
    client_id TEXT NOT NULL,
    request_id TEXT NOT NULL,
    payload_hash BLOB NOT NULL,
    response BLOB NOT NULL,
    PRIMARY KEY (client_id, request_id)
);
"""


def open_database(path: str) -> sqlite3.Connection:
    db = sqlite3.connect(path, isolation_level=None)
    db.executescript(SCHEMA)
    return db


def transfer(
    db: sqlite3.Connection,
    client_id: str,
    request_id: str,
    source: str,
    target: str,
    amount: int,
) -> bytes:
    request_body = json.dumps(
        {"source": source, "target": target, "amount": amount},
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")
    fingerprint = hashlib.sha256(request_body).digest()

    db.execute("BEGIN IMMEDIATE")
    try:
        saved = db.execute(
            """SELECT payload_hash, response FROM idempotency
               WHERE client_id = ? AND request_id = ?""",
            (client_id, request_id),
        ).fetchone()
        if saved is not None:
            saved_hash, saved_response = saved
            if not hmac.compare_digest(saved_hash, fingerprint):
                raise ValueError("request id was reused with different content")
            db.execute("COMMIT")
            return saved_response

        reason: str | None = None
        balances: dict[str, int] = {}
        if type(amount) is not int or not 1 <= amount <= MAX_SQLITE_INTEGER:
            reason = "amount must be a positive signed 64-bit integer"
        elif (
            not isinstance(source, str)
            or not 1 <= len(source) <= 128
            or not isinstance(target, str)
            or not 1 <= len(target) <= 128
        ):
            reason = "account id length must be 1..128"
        elif source == target:
            reason = "source and target must differ"
        else:
            balances = dict(
                db.execute(
                    "SELECT id, balance FROM accounts WHERE id IN (?, ?)",
                    (source, target),
                ).fetchall()
            )
            if source not in balances:
                reason = "source account missing"
            elif target not in balances:
                reason = "target account missing"
            elif balances[source] < amount:
                reason = "balance insufficient"
            elif balances[target] > MAX_SQLITE_INTEGER - amount:
                reason = "target balance would overflow"

        status = "rejected" if reason is not None else "committed"
        if reason is None:
            debit = db.execute(
                "UPDATE accounts SET balance = balance - ? WHERE id = ?",
                (amount, source),
            )
            credit = db.execute(
                "UPDATE accounts SET balance = balance + ? WHERE id = ?",
                (amount, target),
            )
            if debit.rowcount != 1 or credit.rowcount != 1:
                raise RuntimeError("account changed unexpectedly during transfer")

        result = {"status": status, "request_id": request_id}
        if reason is not None:
            result["reason"] = reason
        response = json.dumps(result, separators=(",", ":")).encode("utf-8")
        db.execute(
            "INSERT INTO idempotency VALUES (?, ?, ?, ?)",
            (client_id, request_id, fingerprint, response),
        )
        db.execute("COMMIT")
        return response
    except BaseException:
        if db.in_transaction:
            db.execute("ROLLBACK")
        raise
```

若进程在事务提交后、响应发送前退出，下一次相同请求会读取已保存响应。已提交与已拒绝都是确定的业务结果；客户端若要在账户状态变化后重新发起操作，应生成新的请求 ID。容量繁忙等暂时性错误无需写入幂等表。若同一 ID 携带不同内容，服务端拒绝它，这能发现客户端 ID 管理错误。多线程服务为每个工作线程创建独立 SQLite 连接；生产数据库则使用唯一约束、行锁与事务完成同样的原子性目标。外部支付渠道需要继续把同一个幂等键传给渠道，或通过业务状态机、Outbox 等方案连接跨系统步骤。

幂等记录需要保留期限。期限至少覆盖客户端可能重试和查询结果的最长窗口；删除后再次收到旧 ID 时，协议应给出“结果已过保留期”这一明确状态。客户端在总截止时间耗尽后可以调用结果查询接口，以 `(client_id, request_id)` 获取 `处理中、已提交、已失败、未知` 等业务状态。

高并发下，两个相同 ID 可能同时到达。数据库唯一约束只允许一个创建者，其他请求可以等待首次事务完成后读取结果，或收到 `处理中` 并稍后查询。若业务耗时很长，幂等表可以保存 `accepted、running、committed、failed` 状态与租约；工作者取得租约后执行，崩溃恢复程序按业务规则接管。状态机中的每次迁移都应与对应副作用形成事务或可恢复步骤。

## 5. 实验：在三个位置切断连接

在服务端处理函数加入 `fail_at` 开关：

```python
def handle_one(conn, db, client_id, fail_at):
    deadline = time.monotonic() + 3
    message = read_message(conn, deadline)
    if fail_at == "before_commit":
        return

    args = json.loads(message.payload)
    response = transfer(
        db,
        client_id,
        str(message.request_id),
        args["source"],
        args["target"],
        args["amount"],
    )
    packet = encode_message(TYPE_RESPONSE, message.request_id, response)
    if fail_at == "after_commit":
        return
    if fail_at == "mid_response":
        conn.sendall(packet[: len(packet) // 2])
        return
    send_all(conn, packet, deadline)
```

外层使用 `with conn:`，函数返回后连接会关闭。分别运行三种故障，并让客户端以同一请求 ID 重试。

### 预期现象

- `before_commit`：数据库没有转账记录，重试首次执行并提交。
- `after_commit`：客户端只看到 EOF，数据库已经提交；重试命中幂等记录并获得首次响应。
- `mid_response`：客户端得到 `UnexpectedEOF`，数据库已经提交；重试同样返回保存结果。

三组实验中，断线瞬间的客户端日志都不足以单独确认业务结论。数据库记录、幂等响应或结果查询接口提供最终证据。

## 6. 理解检查

1. 收到 TCP ACK 后，客户端可以确认到哪一层的进展？
2. 为什么全部重试要复用同一个请求 ID 与相同消息体？
3. 总截止时间与单次 Socket 超时分别控制什么？
4. 幂等记录与余额更新分处两个独立事务时，会出现哪些故障窗口？
5. 客户端用尽重试预算后，怎样获得业务结果的进一步证据？

## 7. 本章小结

超时限定等待，重试提升短暂故障下的成功机会，幂等键约束重复副作用，结果查询解决长期不确定状态。下一章会继续处理容量问题：当每个请求都合法，流量总量仍可能超过服务能力。

## 导航

- [上一章：如何设计应用层协议](./02-application-protocol.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：并发、缓冲区和背压](./04-concurrency-buffers-backpressure.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
