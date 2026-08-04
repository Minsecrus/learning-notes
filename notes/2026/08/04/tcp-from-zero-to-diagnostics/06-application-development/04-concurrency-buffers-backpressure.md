# 第28章 并发、缓冲区和背压

当一个网络请求从网卡一路走向你的业务代码时，它通常会经历一条漫长的流水线：内核接收缓冲区 -> 协议解析器 -> 应用任务队列 -> 工作线程。而响应数据则会沿着相反的方向，穿过应用输出队列和内核发送缓冲区。在这条链路上的每一个节点，数据都可能被暂存排队，因此每个节点都需要明确设定容量上限、超时机制以及过载时的应对策略。

## 1. 捋清排队链路

```text
客户端 -> TCP接收缓冲区 -> 连接处理器 -> 有限任务队列 -> 工作线程
客户端 <- TCP发送缓冲区 <- 连接处理器 <- 处理结果 ------+
```

如果请求的到达速率长期高于系统的处理速率，队列就会无休止地堆积。关于排队现象，经典的排队论公式 Little's Law（利特尔法则）给出了稳定系统下的平均数量关系：

$$
L=\lambda W
$$

这里 $L$ 是系统中同时存在的平均请求数，$\lambda$ 是系统的平均吞吐量（完成速率），$W$ 是请求在系统中的平均停留时间。举个例子，如果一个服务每秒能处理 100 个请求，每个请求平均耗时 0.2 秒，那么系统里同时存在的请求数大约就是 20 个。
一旦队列开始无限增长，请求的等待时间就会被急剧放大。最终的后果就是：还没等你的业务逻辑开始处理，客户端那边就已经因为超时（达到截止时间）而主动断开连接了。

在进行系统容量评估时，我们可以用下面这个简单的公式来估算应用层的内存消耗上限：

$$
M_{app}\le C\times M_{conn}+(N_{worker}+Q)\times S_{max}+M_{out}
$$

在这个公式中，$C$ 代表最大并发连接数，$Q$ 代表任务队列的容量上限，$S_{max}$ 是单个请求可能消耗的最大内存，$M_{out}$ 则是受高水位线（High-Water Mark）限制的待发送数据总量。
写出这个公式，并不是为了让你精确计算出系统会消耗多少个字节，而是为了强调一个核心系统设计原则：**链路上的每一个乘数，都必须有明确的配置上限。**

## 2. 并发模型的四种常见形态

| 模型 | 等待方式 | 适合场景 | 容量控制重点 |
| --- | --- | --- | --- |
| 一连接一线程 | 阻塞调用 | 连接量有限、代码直观 | 连接数、线程栈大小、空闲超时 |
| 固定线程池 | 任务排队 | CPU 密集或短阻塞任务 | 工作线程数、有限队列容量 |
| 事件循环 (Event Loop) | 就绪 (Readiness) 通知 | 海量并发连接 | 每连接状态内存、读写高水位线 |
| 完成通知 | 异步操作完成事件 | Windows IOCP 等环境 | 在途操作数量、完成队列大小 |

像 `select`、`poll`、`epoll` 和 `kqueue` 这些系统调用，本质上是在向应用程序报告 I/O 状态的“就绪（Readiness）”；而 Windows IOCP 则是直接报告异步操作的“完成”。
虽然底层的并发模型改变了我们等待数据的方式，但请记住：协议的分帧解析、并发请求数限制、内存用量上限以及业务层面的背压（Backpressure），仍然需要你在应用层代码中去显式地实现。

## 3. 背压（Backpressure）是如何沿着 TCP 链路反向传播的

假设服务端的工作队列已经被塞满了。这时，服务端应用可以主动暂停从某个连接读取新的请求。随着数据不断到来，服务端的内核接收缓冲区会逐渐被填满。于是，TCP 协议栈就会在回复给对端的报文中，把通告接收窗口（Advertised Window）调小。
当接收窗口降到零时，发送端的 TCP 就会暂停发送新的报文段（Segment）。这样一来，发送端内核的发送缓冲区也会很快堆满，最终导致发送端应用程序调用 `send` 时被阻塞、变慢，或者只能写入部分数据。
这就是一条非常天然的背压传播链路：

```text
有限的工作处理能力
  -> 应用层主动暂停读取
  -> 接收缓冲区占用率上升
  -> 接收窗口 (Advertised Window) 缩小
  -> 对端发送缓冲区占用率上升
  -> 对端应用层写入时感受到阻塞等待
```

不过，背压在网络链路中的传播是需要时间的，在发送端感知到阻塞之前，沿途各个缓冲区里的“飞行中”数据仍然会继续涌向服务端。因此，应用层光靠 TCP 的窗口控制是不够的，你还必须严格限制最大帧长度、单连接的最大在途请求数以及全局的总连接数。
对于支持多路复用（Multiplexing）的协议（比如 HTTP/2），应用层可以直接返回 `busy` 状态、主动降低应用层的配额窗口，或者暂时从事件循环里取消对该连接的读事件关注。
而对于传统的“一问一答”式协议（比如 HTTP/1.1），最简单的做法就是在处理当前请求的期间，暂停读取下一个报文。这就自然而然地将单条连接的在途请求数限制在了 1 个。

同理，在输出方向我们也需要引入“高水位（High-Water Mark）”的概念。如果遇到一个读取极其缓慢的“慢客户端”，服务端的发送缓冲区很快就会被塞满，紧接着应用层的输出队列也会随之积压。
在事件循环（Event Loop）模型中，常见的做法是：当输出队列达到高水位线时，立刻暂停生成新的响应（甚至暂停读取新的请求）；等积压的数据发送出去，水位回落到低水位线后，再恢复正常处理。如果积压情况持续恶化，触及了硬性容量上限或超时截止时间，那就应该果断关闭连接，释放资源。

### 三类缓冲区承担不同职责

在这条流水线上，有三类缓冲区各自扮演着不同的角色：
1. **内核接收缓冲区**：存放着已经被 TCP 成功接收、排好序，正等待应用层来读取的字节流。它直接决定了 TCP 的接收窗口大小。
2. **内核发送缓冲区**：存放着应用层已经调用 write/send 提交，但还在等待网络发送或等待对端 ACK 确认的字节流。
3. **应用任务队列**：存放着应用层已经完成协议分帧、解析好的业务对象。需要注意的是，业务对象在内存中的体积通常会远大于原始的网络报文字节，因为 JSON 解析、对象树构建等操作都会引入大量的内存开销。

虽然调大 Socket 缓冲区能显著改善高带宽延迟积（BDP）网络下的吞吐量，但这也会成倍增加单条连接在最坏情况下的内存占用，并导致背压的反馈变得更加迟钝。
同样，调大应用层的队列固然能帮你更好地吸收流量突发，但代价就是排在队尾的请求等待时间会变得极长。
合理的容量设计应该基于你“能接受的突发时长”来推算：假设服务的正常处理速率为 $\mu$，短时间内的请求到达峰值速率为 $\lambda$，持续了 $t$ 秒，那么这段时间里新增的积压排队量大约就是 $(\lambda-\mu)t$。对于超出队列上限的部分，我们应该直接走快速拒绝（Fast Reject）逻辑，或者依赖上游系统来进行限流。

对于事件循环模型，你还需要精心维护单连接输入与输出的高低水位线。比如：当单连接的输入缓冲区达到 1 MiB（高水位）时，立刻取消对该连接的读事件关注；等到输出缓冲排空至 256 KiB（低水位）以下时，再恢复读关注。如果输出积压达到了 4 MiB 的硬上限，就直接粗暴断开连接。将高水位和低水位拆开配置，可以有效避免系统在临界点附近频繁启停所带来的性能抖动（Thrashing）。

## 4. 动手实现一个有明确容量上限的服务器

下面的 `bounded_server.py` 代码复用了我们前两章编写的基础模块。这里我们采用了“有限连接处理线程 + 有限业务工作线程池”的架构模式。每条连接都会严格按顺序处理请求，因此单条连接的在途请求数天然被限制为了 1。
我们实现了一个 `BoundedExecutor`，它用信号量（Semaphore）包装了 Python 标准库的 `ThreadPoolExecutor`，巧妙地将“正在执行的任务”与“正在排队的任务”总量，强行限制在了 `workers + queue_size` 这个安全范围内。

```python
from __future__ import annotations

from concurrent.futures import Future, ThreadPoolExecutor, wait
import socket
import threading
import time

from io_helpers import UnexpectedEOF
from protocol import (
    ProtocolError,
    TYPE_ERROR,
    TYPE_REQUEST,
    TYPE_RESPONSE,
    read_message,
    send_message,
)

HOST = "127.0.0.1"
PORT = 9000
MAX_CONNECTIONS = 64
WORKERS = 4
QUEUE_SIZE = 16
REQUEST_DEADLINE = 5.0


class BoundedExecutor:
    def __init__(self, workers: int, queue_size: int) -> None:
        self._pool = ThreadPoolExecutor(max_workers=workers)
        self._capacity = threading.BoundedSemaphore(workers + queue_size)

    def try_submit(self, function, *args) -> Future | None:
        if not self._capacity.acquire(blocking=False):
            return None
        try:
            future = self._pool.submit(function, *args)
        except BaseException:
            self._capacity.release()
            raise
        future.add_done_callback(lambda _: self._capacity.release())
        return future

    def shutdown(self) -> None:
        self._pool.shutdown(wait=True, cancel_futures=True)


def process(payload: bytes) -> bytes:
    time.sleep(0.1)  # 代表有限的业务处理能力
    return payload.upper()


def send_error(conn, request_id: int, code: int, text: str) -> None:
    try:
        send_message(
            conn,
            TYPE_ERROR,
            request_id,
            text.encode("utf-8"),
            time.monotonic() + 0.5,
            error_code=code,
        )
    except (OSError, TimeoutError):
        pass


def handle_connection(conn: socket.socket, scheduler: BoundedExecutor) -> None:
    with conn:
        while True:
            deadline = time.monotonic() + REQUEST_DEADLINE
            try:
                message = read_message(conn, deadline)
            except UnexpectedEOF as exc:
                if exc.received:
                    print("truncated frame:", exc)
                return
            except TimeoutError:
                print("connection exceeded request deadline")
                return
            except ProtocolError as exc:
                print("protocol error:", exc)
                return
            except OSError as exc:
                print("connection ended while reading request:", exc)
                return

            if message.msg_type != TYPE_REQUEST:
                send_error(conn, message.request_id, 400, "request expected")
                return

            future = scheduler.try_submit(process, message.payload)
            if future is None:
                print("work rejected: bounded queue is full")
                send_error(conn, message.request_id, 503, "server busy")
                return

            remaining = max(0.0, deadline - time.monotonic())
            done, _ = wait((future,), timeout=remaining)
            if future not in done:
                future.cancel()
                print("request deadline expired during processing")
                return

            try:
                result = future.result()
            except Exception as exc:
                print("business processing failed:", exc)
                send_error(conn, message.request_id, 500, "processing failed")
                return

            try:
                send_message(
                    conn,
                    TYPE_RESPONSE,
                    message.request_id,
                    result,
                    deadline,
                )
            except TimeoutError:
                print("request deadline expired while sending response")
                return
            except OSError as exc:
                print("connection ended while returning response:", exc)
                return


def serve() -> None:
    scheduler = BoundedExecutor(WORKERS, QUEUE_SIZE)
    connection_slots = threading.BoundedSemaphore(MAX_CONNECTIONS)

    def run_connection(conn: socket.socket) -> None:
        try:
            handle_connection(conn, scheduler)
        finally:
            connection_slots.release()

    try:
        with socket.socket() as listener:
            if hasattr(socket, "SO_EXCLUSIVEADDRUSE"):
                listener.setsockopt(
                    socket.SOL_SOCKET, socket.SO_EXCLUSIVEADDRUSE, 1
                )
            else:
                listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            listener.bind((HOST, PORT))
            listener.listen(128)
            print(f"listening on {HOST}:{PORT}")
            while True:
                conn, _ = listener.accept()
                if not connection_slots.acquire(blocking=False):
                    print("connection rejected: connection limit reached")
                    conn.close()
                    continue
                threading.Thread(
                    target=run_connection,
                    args=(conn,),
                    daemon=True,
                ).start()
    finally:
        scheduler.shutdown()


if __name__ == "__main__":
    serve()
```

代码中 `listen(128)` 里的 `backlog` 参数，主要用来控制内核层面维护的“已完成三次握手、等待应用层 `accept`”的连接队列长度（其精确语义和上限取决于你所使用的操作系统）。
我们定义的 `MAX_CONNECTIONS` 常量，控制的是应用层主动接收并持有的连接总数；而 `WORKERS + QUEUE_SIZE` 则死死卡住了后端业务处理模块的吞吐容量。这两个截然不同的上限，分别解决的是网络接入层和业务处理层的过载问题。

注意这段代码：当 `wait` 发生超时后，我们调用 `future.cancel()` 只能取消那些还在队列里苦苦等待的任务；如果这个 Python 业务函数已经开始执行，它是无法被强行中断的。
在这个演示示例中，我们的 `process` 函数保证会在有限时间内跑完，而且没有任何副作用。但在真实的生产环境中，你的业务代码必须学会倾听取消信号（Cancel Signal），在循环里定期检查剩余的截止时间，并在进行数据库写操作时，严格采用第 27 章讨论过的“幂等事务”来进行自我保护。
同样，优雅停机时的 `shutdown(wait=True)` 会乖乖等待所有正在运行的任务结束。如果不想让停机过程无限期卡死，你必须给所有的下游 RPC 调用和长耗时业务循环设置严苛的超时期限，确保整个系统的停机过程是有限、可收敛的。

## 5. 应对过载的战术武器库

当系统面临过载风险时，你可以灵活组合使用以下策略：

- **有限队列**：给排队的内存积压和请求的最坏等待时间设定一个硬上限。
- **快速拒绝 (Fast Reject)**：一旦协议层成功解析出了请求 ID，如果判断系统已满载，立刻返回 503 错误（带上 Retry-After 建议退避时间），让客户端去重试。
- **暂停读取**：利用 TCP 自带的流量控制机制（窗口滑动），把背压精准地传导回那些疯狂发包的高流量连接。
- **公平配额 (Fair Quota)**：按连接、按用户或按租户去限制最大在途请求数，防止个别异常用户把全局资源吃光。
- **并发限制**：根据 CPU 核数、数据库连接池大小或下游微服务的承载能力，设置对应的信号量来进行压舱。
- **截止时间淘汰 (Deadline Drop)**：在业务任务真正开始执行前，先检查一下客户端的等待期限预算是否已经耗尽；如果请求已经超时失去了业务价值，就直接扔掉，不要浪费宝贵的 CPU。
- **优雅降级 (Graceful Degradation)**：丢车保帅，保留核心交易链路的容量；对于非核心、低优先级的请求，直接返回本地缓存数据或极简的托底结果。

在监控大屏上，队列的长度通常需要和请求延迟摆在一起看。强烈建议在你的代码里埋点记录：当前活跃连接数、工作线程数、队列占用率、主动拒绝的请求数、请求体大小、输出积压的字节数，以及 p50、p95、p99 延迟分位值。千万不要只看“平均延迟”，因为少量深陷排队泥潭的严重超时请求，很容易被庞大的正常请求基数给平均掉，从而掩盖了系统即将崩溃的先兆。

## 6. 实验观察：慢客户端与突发流量的冲击

你可以先启动我们写好的服务端代码，然后借用第 27 章的并发客户端脚本，瞬间向服务端发起 40 个并发请求（为了让效果更明显，你可以把 `process` 函数里的休眠时间临时改成 2 秒）。观察并记录一下：有多少请求成功返回了结果，有多少请求被无情地弹回了 503。
由于我们在代码里把容量死死限制在了“4 个执行任务 + 16 个排队任务”，面对这波 40 个请求的并发突发，你会清晰地看到服务端在打满 20 个配额后，果断拒绝了后续请求。得益于这个机制，不管瞬间并发有多高，服务端的进程内存始终会保持在一个极度安全的有限范围内。

接下来，我们来模拟一个恶意的“慢客户端”：建立连接后，每隔 1 秒钟才慢吞吞地发送 1 个字节的请求首部。你会发现，单条连接在熬过 5 秒的总体截止时间后，会被服务端无情地强制关闭。
如果你并发建立 64 条这种慢连接，当试图建立第 65 条时，就会立刻触发我们在服务端设置的 `MAX_CONNECTIONS` 上限。这个小实验完美展示了：**绝对的连接超时期限**与**全局的并发连接总配额**是如何相互配合，共同将传说中的 Slowloris 慢速攻击（Slowloris Attack）拒之门外的。

最后，我们再来构造一个“光发不收”的奇葩客户端：把客户端 Socket 的 `SO_RCVBUF` 调到极小，在向服务端发送了一个接近 1 MiB 的巨大请求后，客户端就彻底罢工，不再调用 `recv` 接收任何响应。
你会观察到，服务端在尝试发送那巨大的响应时，会被底层的 TCP 缓冲区彻底卡死，最终耗尽 5 秒的发送截止时间而报错崩溃。如果你此时打开 Wireshark 抓包，就能亲眼目睹客户端发送给服务端的 TCP 通告窗口（Advertised Window）是如何一步步缩小到零的（注：在本地回环网络下测试时，操作系统的 TCP 自动调优和硬件卸载功能可能会影响具体的窗口数值变化）。

### 预期现象

- 当工作队列打满时，服务端控制台会打印 `work rejected`，同时客户端会收到标准的 503 错误码或者直接被断开连接。
- 那些故意磨洋工的慢连接，基本会在触碰 5 秒请求截止时间的高压线时被系统集中回收；而且受 64 最大并发连接数的硬性约束，你的服务器线程数绝不会失控爆炸。
- “只发不收”的慢读取客户端，会拖垮服务端的响应发送耗时，在网络抓包中能清晰看到 TCP 接收窗口的不断萎缩。
- 最重要的是：一旦这种异常负载过去，新来的正常请求能立刻得到丝滑的服务，完全不会因为历史请求的“无界积压”而遭受连累。这，就是有限容量设计的最大魅力。

## 7. 理解与自测

1. 内核接收缓冲区和应用任务队列，它们分别保存着什么状态的数据？
2. 应用层主动暂停读取数据，是如何通过 TCP 接收窗口（Advertised Window）形成背压，进而卡住发送端的？
3. 假设你的业务线程池只配了 4 个工作线程，为什么你依然需要为一个看似无害的等待队列设置硬性容量上限？
4. `listen(backlog)` 配置项和我们在应用层用信号量控制的并发连接数，分别卡住了网络处理流中的哪两个关键阶段？
5. 当你提交给线程池的业务 Future 因为超时被取消后，仍在暗中执行的业务逻辑所产生的副作用，该用什么机制来兜底保护？

## 8. 本章小结

优秀的并发系统设计，其核心心法只有四条：**让每一个排队的节点变得清晰可见，让每一个缓冲队列都有明确的容量上限，让下游的压力能够逆流反馈形成背压，让系统在遭遇极端过载时的表现变得完全可预测。**
在掌握了这些应用层面的宏观控制手段后，下一章我们将深入系统底层，逐一拆解内核暴露出来的常用 Socket 选项，看看当我们修改这些参数时，网络栈底层的行为究竟发生了怎样的改变。

## 导航

- [上一章：超时、重试和幂等性](./03-timeouts-retries-idempotency.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：常用 Socket 选项](./05-socket-options.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
