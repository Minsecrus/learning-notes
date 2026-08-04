# 第28章 并发、缓冲区和背压

一个请求从网卡走向业务代码，通常经过内核接收缓冲区、协议解析器、应用任务队列和工作线程；响应再经过应用输出队列与内核发送缓冲区。每个位置都能暂存数据，也都需要容量、超时和过载行为。

## 1. 先画出排队链路

```text
客户端 -> TCP接收缓冲区 -> 连接处理器 -> 有限任务队列 -> 工作线程
客户端 <- TCP发送缓冲区 <- 连接处理器 <- 处理结果 ------+
```

当到达速率长期高于处理速率，队列会持续增长。Little 定律给出稳定系统中的平均关系：

$$
L=\lambda W
$$

$L$ 是系统中的平均请求数，$\lambda$ 是平均完成速率，$W$ 是平均停留时间。例如服务每秒完成 100 个请求，请求平均停留 0.2 秒，则系统中平均约有 20 个请求。队列增长会直接放大等待时间，最终让客户端截止时间先于处理完成。

一个便于容量评审的内存上界可以写成：

$$
M_{app}\le C\times M_{conn}+(N_{worker}+Q)\times S_{max}+M_{out}
$$

其中 $C$ 为连接上限，$Q$ 为任务队列上限，$S_{max}$ 为单请求最大内存，$M_{out}$ 为受高水位约束的待发送数据。公式无需精确到每个对象字节，它的价值在于让每个乘数都有配置上限。

## 2. 四种并发组织方式

| 模型 | 等待方式 | 适合场景 | 容量控制重点 |
| --- | --- | --- | --- |
| 一连接一线程 | 阻塞调用 | 连接量有限、代码直观 | 连接数、线程栈、空闲期限 |
| 固定线程池 | 任务排队 | CPU 或短阻塞任务 | 工作者数、有限队列 |
| 事件循环 | readiness 通知 | 大量并发连接 | 每连接状态、读写高水位 |
| 完成通知 | 操作完成事件 | Windows IOCP 等环境 | 在途操作数、完成队列 |

`select`、`poll`、`epoll` 和 `kqueue` 负责报告 readiness；IOCP 报告异步操作完成。它们改变等待的组织方式。协议分帧、请求并发限制、内存上限和业务背压仍由应用显式实现。

## 3. 背压怎样沿 TCP 返回发送端

假设服务端工作队列已满。服务端可以暂停从某连接读取新请求。内核接收缓冲区逐渐填满后，TCP 通告窗口会缩小；窗口降到零时，发送端 TCP 暂停发送新数据，发送端应用的 `send` 最终变慢、部分写入或等待。这是一条自然背压链路：

```text
有限工作能力
  -> 应用暂停读取
  -> 接收缓冲区占用上升
  -> advertised window 缩小
  -> 对端发送缓冲区占用上升
  -> 对端写入感受到等待
```

这条链路存在传播时间，沿途缓冲区中的数据仍会继续到达。应用还需要最大帧长度、每连接在途请求数和总连接数。对于支持多路请求的协议，可以在应用层返回 `busy`、降低窗口额度或暂时取消读事件；对于一次一答协议，处理当前请求期间暂停读取即可形成每连接一个在途请求的上限。

输出方向同样需要高水位。慢客户端停止读取时，服务端发送缓冲区填满，应用输出队列随之积压。事件循环常在输出队列达到高水位时暂停生成新响应，在回落到低水位后恢复；达到硬上限或截止时间后关闭连接并释放资源。

### 三类缓冲区承担不同职责

内核接收缓冲区保存已经由 TCP 接收、等待应用读取的有序字节，它与通告接收窗口直接相关。内核发送缓冲区保存应用已经提交、仍等待发送或确认的字节。应用任务队列保存已经解析的业务对象，单项大小常高于原始报文字节，因为 JSON、对象图和索引会引入额外内存。

扩大 Socket 缓冲区可以改善高带宽时延积链路的吞吐，同时也会增加单连接最坏内存与背压传播距离。扩大应用队列会暂时吸收突发，也会延长队尾等待。容量设计应根据可接受突发时长计算：服务处理速率为 $\mu$，短时到达速率为 $\lambda$，持续 $t$ 秒，则新增排队量约为 $(\lambda-\mu)t$。超过队列上限的部分进入快速拒绝或上游限流。

事件循环还需维护每连接输入与输出高水位。例如输入缓冲达到 1 MiB 时暂时取消读关注，输出缓冲回落到 256 KiB 后恢复；输出达到 4 MiB 硬上限时结束连接。高水位与低水位分开可以减少频繁启停造成的抖动。

## 4. 一个有明确上限的服务器

下面的 `bounded_server.py` 复用前两章的模块。它采用“有限连接线程 + 有限工作池”，每条连接按顺序处理请求，所以单连接在途请求数为 1。`BoundedExecutor` 用信号量包住 `ThreadPoolExecutor`，将执行中和排队中的任务总量限制为 `workers + queue_size`。

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

`listen(128)` 中的 backlog 影响内核维护的已完成连接等待队列，精确语义和上限会受操作系统影响。`MAX_CONNECTIONS` 控制应用已经接收并持有的连接，`WORKERS + QUEUE_SIZE` 控制业务任务。两个上限解决不同阶段的容量问题。

`wait` 到期后，`future.cancel()` 可以取消仍在队列中的任务；已经开始运行的 Python 函数仍可能继续。示例中的 `process` 会在有限时间内结束且没有副作用。生产任务应接收取消信号、定期检查截止时间，并采用第27章的幂等事务保护写操作。`shutdown(wait=True)` 会等待运行中的任务退出，因此服务还需要给下游调用和业务循环设置期限，形成可收敛的停机过程。

## 5. 过载策略的选择

过载时可以组合以下策略：

- **有限队列**：给排队内存和最坏等待时间设上限。
- **快速拒绝**：协议已经解析出请求 ID 时，返回可重试的 503 与建议退避时间。
- **暂停读取**：让 TCP 流量控制把压力传回单个高流量连接。
- **公平额度**：限制每个连接、用户或租户的在途请求数。
- **并发限制**：按 CPU、数据库连接池或下游容量设置信号量。
- **截止时间淘汰**：任务开始前检查剩余预算，清除已经失去业务价值的排队项。
- **优雅降级**：保留核心操作容量，为低优先级请求返回缓存或简化结果。

队列长度常与延迟一起监控。推荐记录当前连接数、活动工作数、队列占用、拒绝计数、请求体字节、输出积压字节以及 p50/p95/p99 延迟。只有平均延迟时，少量严重排队容易被掩盖。

## 6. 实验：慢客户端与突发流量

先启动服务器，再用第27章客户端并发发起 40 个请求，把 `process` 中的休眠临时改为 2 秒。记录多少请求成功，多少请求收到 503。由于容量为 4 个执行中任务加 16 个排队任务，突发时会看到明确拒绝，进程内存保持在有限范围。

接着创建慢客户端：连接后每秒只发送一个首部字节。单条连接会在 5 秒总期限到达后关闭。并发建立 64 条这种连接时，第65条会触发连接上限。这个实验展示连接期限与连接额度如何共同约束 Slowloris 型输入。

最后创建停止读取的客户端：把 `SO_RCVBUF` 调小，发送一个接近 1 MiB 的请求后暂停 `recv`。观察服务端发送逐渐耗尽 5 秒截止时间。Wireshark 中可关注客户端通告窗口的变化；本机自动调节和卸载会影响具体数值。

### 预期现象

- 工作队列满时出现 `work rejected`，客户端收到错误码 503 或连接结束。
- 慢首部连接在请求截止时间附近被回收，线程数受 64 的上限约束。
- 慢读取客户端会让发送耗时上升，窗口可能逐渐缩小。
- 正常负载恢复后，新连接继续获得服务，无界历史积压不会拖长后续请求。

## 7. 理解检查

1. 内核接收缓冲区与应用任务队列分别保存什么？
2. 暂停读取怎样通过 TCP 通告窗口影响发送端？
3. 线程池有 4 个工作线程时，为什么仍需单独限制等待队列？
4. `listen(backlog)` 与应用连接信号量控制的是哪两个阶段？
5. 工作 Future 超时后，业务函数的副作用应由哪些机制保护？

## 8. 本章小结

并发设计的重点是让等待位置可见、让每个队列有界、让压力能够反馈、让过载结果可预测。下一章会观察内核暴露的常用 Socket 选项，判断每个选项实际改变的行为。

## 导航

- [上一章：超时、重试和幂等性](./03-timeouts-retries-idempotency.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：常用 Socket 选项](./05-socket-options.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
