# 第27章 超时、重试和幂等性

试想一次转账请求的时间线：客户端发出了完整的请求，服务端也已经完成了数据库提交，但就在响应刚刚开始返回时，连接意外中断了。此时，客户端只知道自己没有收到完整的响应，而且连接也已经失效。至于那笔转账到底有没有成功提交，光靠网络状态是判断不了的，必须要去业务层寻找证据。这种“不知道到底成没成功”的状态，被称为*结果未知（Unknown Outcome，也称不确定结果）*，它是分布式系统里最常见的基本状态。

::: details “结果未知”是什么？
结果未知表示调用方没有获得足以证明成功或失败的完整业务结果。连接超时或断开只能说明通信未完整结束，服务端可能尚未处理，也可能已经提交并只丢失了响应。

解决它需要稳定请求标识、幂等处理、持久化业务记录和结果查询接口；TCP 的 ACK 无法单独证明业务事务状态。
:::

## 1. TCP 状态与业务状态

在 TCP 协议中，收到 ACK 仅仅代表数据段（Segment）已经顺利进入了对端的 TCP 接收缓冲区，它并不意味着“数据库事务已经提交”。换句话说，TCP 层面的送达不等于业务层面的成功。

当客户端收到完整的成功响应时，自然可以确认请求已成功；收到完整的失败响应时，也能根据错误码确认请求失败。但是，如果在完整的响应到达之前，网络就发生了超时、EOF（连接意外关闭）或者 RST（连接被重置），那么这个请求到底处于什么状态呢？它可能停留在以下五个阶段之一：

1. 请求压根还没到达服务端。
2. 服务端只收到了一部分请求，协议解析直接失败了。
3. 服务端收到了完整请求，但业务逻辑还没跑完，或者数据库事务还没提交。
4. 业务处理已经成功并提交，但响应还在服务端准备发送，或者还在网络传输的路上。
5. 响应已经有一部分到达了客户端，但客户端还没收全。

上述第 4 和第 5 种情况，恰恰点出了*重试（Retry）*设计的核心痛点：对于同一个逻辑操作，我们必须给它分配一个稳定的“身份证明”。这样一来，当客户端发起重试时，服务端就能认出这是一个重复的请求，从而避免重复扣款，并直接返回第一次执行的结果。

::: details 重试是什么？
重试是在一次尝试未获得可接受结果后，再次发起同一逻辑操作。它可以提高瞬态故障下的成功率，也会增加负载，并可能重复执行已经生效的业务副作用。

安全重试需要判断错误类型、限制次数和总时间、加入退避与抖动，并让有副作用的操作具备幂等保护。
:::

### 请求身份的作用域

一个 *Request ID（请求 ID）*只有被放在明确的命名空间（Namespace）里，才真正具备唯一性。我们通常会使用类似 `(tenant_id, authenticated_client_id, request_id)` （租户 ID、认证通过的客户端 ID、请求 ID）这样的组合来作为唯一键。这样做的好处是，就算两个不同的客户碰巧生成了完全相同的随机请求 ID，系统依然能识别出它们是不同的操作。

::: details Request ID 是什么？
Request ID 是标识一次逻辑请求的稳定值，可用于去重、日志关联和结果查询。发生重试时，同一逻辑操作应复用同一个 Request ID；新的业务操作应生成新值。

它的唯一性范围需要明确，例如与租户和已认证客户端身份组合，防止不同调用方之间冲突或越权。
:::

有一点需要特别注意：服务端必须在完成鉴权之后，再去构建这个唯一键。绝不能完全信任客户端传来的身份信息，否则可能会出现客户端伪造身份越权操作的安全漏洞。

关于 ID 的生成，我们可以使用 128 位的随机 UUID，也可以使用数据库生成的全局唯一业务流水号。在本章演示的 TNP/1 协议首部中，我们为了教学方便，使用了 64 位字段；但在真实的高并发或数据需要长期保留的系统中，通常需要更大的 ID 空间。

此外，服务端还需要保存请求正文的哈希摘要（Hash Digest），用来校验同一个请求 ID 每次重试时携带的参数是否完全一致。同时，服务端也要把处理好的响应保存为规范的字节流，或者记录下稳定的业务状态。只有这样，不管客户端重试多少次，服务端都能返回完全一致的语义和结果。

这个请求 ID 会贯穿整个系统的生命周期，同时被记录到客户端日志、服务端日志、数据库流水以及分布式追踪（Tracing）的 Span 中。分布式追踪还会用一个 *Trace ID* 关联同一次端到端调用跨越的多个服务与 Span。当我们需要排查那些“不知道成没成功”的棘手问题时，工程师就能通过这些 ID，将发送时间、服务端接收时间、数据库事务提交记录以及所有重试响应串联起来。相比于依赖源端口、连接状态这种转瞬即逝的短期标识，请求 ID 要可靠得多。

::: details Trace ID 是什么？
Trace ID 标识一条端到端分布式调用链，同一条调用链中的多个 Span 共享它。Request ID 常聚焦一个服务请求或幂等操作，两者可以相同，也可以按系统设计分别承担追踪与业务去重职责。

日志中同时记录 Trace ID、Request ID、服务实例和时间戳，能把业务调用与多条底层连接关联起来。
:::

## 2. 六类时间尺度

在设计网络应用时，我们通常需要关注以下六类超时机制：

| 机制 | 约束对象 | 典型用途 |
| --- | --- | --- |
| *连接超时 (Connect Timeout)* | 建立 TCP 连接（三次握手）的等待时间 | 遇到故障时快速失败，以便切换到备用地址或服务实例 |
| *单次读写超时 (Read/Write Timeout)* | 单次 Socket IO 调用（如 `recv`/`send`） | 避免工作线程长久挂死在一次无响应的网络调用上 |
| *请求总截止时间 (Request Deadline)* | 包含了连接、发送、服务端处理、接收响应以及所有重试耗时的总和 | 向上层业务兑现端到端（End-to-End）的时间承诺 |
| 空闲超时 (Idle Timeout) | 一段时间内连接上没有发生任何应用层数据交换 | 回收长期闲置的僵尸连接，释放系统资源 |
| TCP User Timeout | 已发送的数据迟迟收不到 TCP ACK 确认 | 在操作系统支持的前提下，主动断开已经失去传输能力的“死连接” |
| TCP Keepalive | 空闲连接上的底层存活探测（心跳包） | 及时发现对端主机宕机或中间网络设备（如 NAT 路由器）丢弃了连接状态 |

::: details Timeout 是什么？
Timeout（超时）给某个等待动作设置最长持续时间，例如一次连接或一次读写。超时发生表示在指定时间内没有得到所需进展，无法由此单独判断远端是否处理了请求。

每次操作各用完整超时会累积出很长总耗时，因此还需要总截止时间约束整条调用链。
:::

::: details Deadline 是什么？
Deadline（截止时间）是整个操作必须结束的绝对时间点。连接、发送、服务端处理、读取响应、退避和重试都从同一份剩余预算中取时间。

在跨服务调用中向下游传播剩余截止时间，可以防止上游早已放弃、下游仍继续消耗资源。
:::

TCP 底层的重传计时器（Retransmission Timer）是由操作系统内核根据 RTT（往返时延）等网络信号来动态计算和管理的。但对于应用层来说，我们更关心的是“业务耐心”——也就是请求总截止时间（Deadline）。业务层的超时往往会先于内核的 TCP 重传超时（通常需要几分钟）触发。

另外，TCP Keepalive 机制通常要等连接空闲很久（默认可能长达 2 小时）才会启动，它只适合用来做连接保活和状态维护。如果业务要求“请求必须在 2 秒内返回”，那么这个硬性指标必须由应用层的截止时间来保证。

为了实现这个目标，我们可以引入一个绝对截止时间（Absolute Deadline），让它贯穿整个请求的所有生命周期步骤：

$$
T_{remain}=T_{deadline}-T_{monotonic\ now}
$$

无论是建立连接、发送数据、读取响应，还是重试前的退避等待（Backoff Sleep），每一次操作都需要先看一眼 $T_{remain}$，从剩余时间里“领取”预算。一旦预算耗尽，就立刻中断流程。这样就能保证无论发生多少次重试，整个操作都不会超过端到端的总时间上限。

## 3. 带总截止时间的客户端

下面我们来看一段 Python 代码示例，它基于前两章编写的 `io_helpers.py` 和 `protocol.py`。核心逻辑是：一次完整的逻辑调用只生成一个 `request_id`，不管中间重试多少次，都复用这个 ID 和相同的消息体（Payload）。

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

上面这段阻塞式的代码，比较适合直接传入字面 IP，或者已经通过 DNS 解析好的单一目标地址。

需要注意的是，Python 的 `socket.create_connection` 在底层会遍历 DNS 解析返回的所有候选地址，而我们传入的 `timeout` 参数实际上会被分别应用到每一次候选地址的连接尝试中，这就可能导致总体耗时超出预期。此外，Python 标准库中同步的 `getaddrinfo`（DNS 解析函数）也无法接受一个全局的截止时间参数。

如果在实际生产中，你必须将 DNS 解析、多 IP 地址并发竞速（Happy Eyeballs）等过程全部纳入严格的总时限控制，那么通常需要借助带有取消机制的异步框架（如 `asyncio`）。在尝试连接每一个候选地址之前，都必须重新计算剩余的超时预算；即便连接建立成功了，也要在发送数据前再次检查总截止时间是否已经耗尽。

在重试逻辑中，我们使用了*指数退避（Exponential Backoff）*来减轻服务端在持续故障期间面临的流量压力，同时引入了*随机抖动（Jitter）*来打散大量客户端的重试时机，防止它们在同一瞬间发起重试引发“惊群效应”（Thundering Herd）。

::: details 指数退避是什么？
指数退避让相邻重试等待时间按指数增长，例如约为 200 ms、400 ms、800 ms，并设置最大上限。故障持续时，请求频率会迅速下降，给服务恢复留出空间。

实际等待还应受剩余 Deadline、最大尝试次数和服务端 `Retry-After` 等信号约束。
:::

::: details Jitter 是什么？
Jitter（随机抖动）在退避时间中加入随机性，使大量客户端的重试分散到不同时间。没有抖动时，同一故障触发的客户端可能按相同节奏同步重试，形成周期性流量尖峰。

Full Jitter 常从零到当前退避上限之间随机取值，具体策略应结合业务时延和负载目标选择。
:::

通过“最大重试次数”和“总截止时间”的双重保险，我们限制了无效请求对系统资源的无意义消耗。

此外，要学会区分错误类型：
- **确定性错误**：像协议校验报错、鉴权失败、请求参数错误等，无论重试多少次结果都一样，应该立刻放弃并把错误抛给调用方。
- **瞬态错误**：像服务端返回的“容量繁忙（503）”、TCP 连接被重置（Connection Reset）以及各种网络超时，就很适合进入重试流程。

在真正的生产级代码中，我们还会结合具体业务操作是否具有幂等性、服务发现系统返回的实例健康状态，以及熔断器（Circuit Breaker）的当前状态，来做更精细的重试决策。

### 从错误发生的阶段推导重试策略

我们可以根据错误发生的时机来制定应对策略。

如果错误发生在建立网络连接之前（例如本地参数校验不通过），那直接修改代码逻辑即可。

如果是遇到了 DNS 短暂解析失败、TCP 连接被拒绝（Connection Refused）、服务端返回 503 或者连接重置，这通常意味着当前实例不健康或者网络有瞬时抖动。这种情况下，换一个服务实例或者稍等片刻再试，大概率能成功。

如果服务端已经返回了明确的业务错误（比如“余额不足”），那这就属于确定性结果了。客户端不应该在网络层继续死磕，而是应该把这个结果交给上层业务流程去处理。

至于协议解析错误，往往暗示着客户端和服务端的协议版本不一致，或者某一方的实现有 Bug。这时候，快速报错（Fail Fast）并暴露出问题，远比盲目重试产生一堆无意义的垃圾流量更有诊断价值。

一旦请求数据开始往外发，只要中途发生了任何网络连接错误，这次操作的结果就会立刻掉进那个著名的“不确定结果”集合里。不过别慌，只要我们设计了*幂等键（Idempotency Key）*，中途断线后也能安全发起重试。

::: details 幂等与幂等键是什么？
幂等表示同一个逻辑操作重复执行多次，最终业务效果与执行一次一致。幂等键是客户端为该逻辑操作提供的稳定标识，服务端用它识别重复请求并返回首次保存的结果。

可靠实现还要校验相同键对应的请求参数一致，并把业务副作用与幂等记录放进同一原子事务或等价的一致性机制中。
:::

值得一提的是，有时候即使错误发生在 `connect()` 函数返回之前，我们也未必能肯定请求没发出去。因为在复杂的现代网络架构中，操作系统底层、代理服务器（Proxy）或者服务网格（Service Mesh）都可能有一层额外的转发缓冲。因此，不去死抠那些底层细节，而是统一依赖“幂等键”来兜底，能极大简化客户端状态机的设计。

不过，重试也是一把双刃剑，它会显著放大系统的整体负载。

假设正常的原始请求速率是 $\lambda$，如果遇到故障时，平均每个请求会额外重试 $r$ 次，那么服务端实际承受的流量到达率就会飙升到：

$$
\lambda_{server}=\lambda(1+r)
$$

试想一下，在服务端本来就已经吃不消发生故障时，如果所有客户端还都不按套路出牌疯狂重试，那只会导致服务端的排队越来越长，超时越来越严重，最终引发雪崩。

为了控制这个“重试放大系数”，我们需要打出一套组合拳：客户端退避等待、随机抖动、重试预算限制，服务端返回 `Retry-After` 提示，再加上链路上的熔断机制和全局并发控制。

在工程实践中，一个非常实用的“重试预算”策略是：**严格规定重试的请求量不能超过近期总请求量的 10%**。一旦重试流量超过这个红线，就立刻停止重试，直接向上层抛出“服务暂时不可用”的错误。

## 4. 服务端用事务保存首次结果

所谓“幂等操作”，用大白话讲就是：“同一个业务操作，不管你执行一次还是执行无数次，最终的业务效果和执行一次完全一样。”

对于“查询”这类只读操作，它天然就是幂等的。但如果是转账、创建订单这类“写操作”，服务端就必须承担起“去重”的责任。

下面我们用 Python 配合 SQLite 演示一下服务端的幂等实现。核心思路是：**把业务数据的更新操作（比如扣余额）、业务层面的明确拒绝理由，以及这次请求的幂等记录，统统塞进同一个数据库事务里。** 为了避免浮点数精度问题，金额统一采用整数“分”来表示。

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

通过这种设计，如果服务端进程好巧不巧地在数据库事务刚刚提交完、但网络响应还没来得及发出去的瞬间崩溃了，也不用担心。当客户端拿着同样的 `request_id` 再次来敲门时，服务端就能从幂等表中直接读出当时已经保存好的响应。

无论转账是成功提交了，还是因为余额不足被明确拒绝了，这都属于确定的业务终态。如果客户端因为余额不足被拒绝，后来又充了钱想再转一次账，那它必须生成一个**全新的请求 ID** 重新发起。

另外，像“系统繁忙”这类瞬时错误，压根就不应该写进幂等表。

在我们的代码中，如果服务端发现同一个请求 ID 竟然带着跟上次不一样的参数内容过来，就会立刻拒绝。这是一个非常好的防御性编程技巧，能帮你迅速揪出客户端在 ID 管理上的低级 Bug。

上面这个单机版的例子中，如果是多线程环境，你需要为每个线程创建独立的 SQLite 连接。而到了真正的生产环境（比如使用 MySQL 或 PostgreSQL），我们则是依靠数据库的唯一索引（Unique Constraint）、行锁（Row Lock）以及事务机制来实现同样的原子性保障。

如果你的转账业务还要调用外部的第三方支付网关，那情况会更复杂。你需要把同一个幂等键继续透传给下游渠道，或者借助分布式系统中的业务状态机、发件箱模式（Outbox Pattern）来串联起这些跨系统的复杂步骤。

当然，幂等表的数据不可能永远存下去，我们需要给它设定一个保留期限（TTL）。这个期限至少要能覆盖客户端可能会重试的最长周期，以及事后人工排查问题的时间窗口（通常是几天到几个月不等）。

如果一条幂等记录过期被清理了，后来又收到了带着这个老 ID 的请求，服务端不应该把它当成新请求来处理，而是应该明确返回“该请求的处理结果已过保留期，无法确认”的状态。

如果客户端的重试预算和总截止时间都耗尽了，它依然没有拿到结果，那该怎么办？这时候，网络层的努力已经到了尽头。客户端可以通过调用专门的“异步结果查询接口”，拿着 `(client_id, request_id)` 去查账，以此来获取“处理中”、“已提交”、“已失败”或“未知”等最终的业务状态。

在极高并发的场景下，可能会出现两个携带相同 ID 的请求“并发”到达服务端的情况。这时候，数据库表上的唯一约束（Unique Constraint）会发挥作用，只允许第一个请求成功插入记录并开始处理。此时其他并发到达的请求可以选择阻塞等待第一个事务完成然后直接读取结果，也可以直接拿到一个 `处理中` 的状态，稍后再来轮询。

如果这是一个非常耗时的长任务，我们可以在幂等表中引入更丰富的状态机（如 `accepted`、`running`、`committed`、`failed`），并加上并发控制的“租约（Lease）”机制。工作线程必须先抢到租约才能开始干活；一旦线程崩溃，后台的定时恢复程序就能根据业务规则重新接管那些超时未完成的任务。这就要求状态机里的每一次状态流转，都必须和实际产生的副作用绑定在同一个事务里，或者设计成可重入（Reentrant）的恢复步骤。

## 5. 实验：在三个位置切断连接

为了验证幂等机制的威力，我们可以在服务端的处理函数中加入一个名为 `fail_at` 的故障注入开关：

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

在代码外层，我们使用 `with conn:` 上下文管理器来确保只要函数一返回，TCP 连接就会立刻被强制关闭。现在，我们分别触发这三种故障，并让客户端拿着同一个请求 ID 进行重试。

### 预期现象

- **故障点设为 `before_commit`**：事务尚未提交连接就断开了。此时数据库里没有任何转账记录。客户端重试时，服务端会把它当成一次全新的请求，顺利执行并提交。
- **故障点设为 `after_commit`**：事务刚刚提交完，响应还没发连接就断了。客户端在网络层只会看到一个冰冷的 EOF 报错。但因为数据库已经记录了幂等信息，当客户端重试时，服务端会直接命中幂等表，将第一次成功执行保存的响应原样返回。
- **故障点设为 `mid_response`**：服务端发了一半的响应断开了。客户端会抛出 `UnexpectedEOF` 异常（解析到一半失败了）。这时候数据库同样已经提交了，客户端的重试依然会命中幂等表，安全拿到完整结果。

这三组实验生动地揭示了一个残酷的现实：**在分布式系统中，发生断线瞬间的客户端日志，根本不足以单独用来判定业务操作到底成没成功**。想要获得最终的“实锤证据”，我们只能依靠数据库的持久化记录、服务端的幂等响应，或者专门的结果查询接口。

## 6. 理解检查

1. 收到 TCP 层的 ACK 后，客户端究竟能确认数据到达了对端的哪一个组件？
2. 发生网络超时后，为什么客户端的所有重试都必须复用同一个请求 ID 和完全相同的消息体？
3. “请求总截止时间”与“单次 Socket IO 超时”在防范的风险上有什么本质区别？
4. 如果我们把保存幂等记录和更新账户余额拆分成两个独立的数据库事务来执行，系统会暴露出哪些可怕的故障窗口？
5. 当客户端把所有的重试次数和超时预算都用光了，仍然没有得到确切响应时，它应该通过什么途径去获取业务操作的最终结果？

## 7. 本章小结

在构建健壮的分布式网络应用时，“超时机制”帮我们限定了盲目等待的边界；“受控的重试”极大地提升了系统在遇到网络短暂抖动时的成功率；“幂等键设计”像一道保险，严防死守住了重复扣款等致命业务副作用；而“结果查询接口”则是解决长时间未知状态的最终兜底方案。

有了这些武器，我们已经能很好地应对各种网络层面的“意外中断”了。在下一章中，我们将把目光转向服务端容量问题：当源源不断涌来的请求每一个都合情合理，但总流量却远远超过了服务端的物理承载能力时，我们又该如何应对？

## 导航

- [上一章：如何设计应用层协议](./02-application-protocol.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：并发、缓冲区和背压](./04-concurrency-buffers-backpressure.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
