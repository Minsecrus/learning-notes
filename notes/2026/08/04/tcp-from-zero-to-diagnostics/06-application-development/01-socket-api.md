# 第25章 Socket API 的正确使用

一个 TCP Socket 向程序呈现双向字节流。程序调用 `send` 时，内核按当前发送缓冲区空间接收一部分字节；程序调用 `recv` 时，内核返回当前已经到达的一部分字节。一次调用的边界由当时的缓冲区状态决定，应用消息的边界需要由应用协议表达。

## 1. 先读懂四种结果

对于阻塞 Socket，`send(data)` 返回正整数 $n$，表示 `data[:n]` 已经交给本机内核，剩余部分仍由程序负责。这个返回值只覆盖本机交接进度；对端应用何时读取、是否完成业务处理，需要应用层响应来确认。

`recv(size)` 也有清晰的三类结果：

- 返回非空 `bytes`：本次得到这些字节，长度可以小于 `size`。
- 返回 `b""`：对端已经对这一方向发送 FIN，本端读到了有序字节流的结尾。
- 抛出异常：超时、连接重置、本地关闭或其他系统错误中断了读取。

非阻塞 Socket 在暂时没有进展条件时抛出 `BlockingIOError`。POSIX 常把它映射为 `EAGAIN` 或 `EWOULDBLOCK`，Windows 常见对应值为 `WSAEWOULDBLOCK`。Python 提供统一异常类型，错误编号和文本仍会随平台变化。`InterruptedError` 表示系统调用被信号打断，循环可以重新计算剩余期限后继续。

### EOF、半关闭与复位

TCP 的两个方向可以分别结束。对端调用 `shutdown(SHUT_WR)` 后，本端会先读完已经排队的全部字节，随后得到 `b""`；本端仍可在相反方向发送响应。这个过程称为半关闭。若协议规定“请求体一直读到 EOF，随后服务端返回结果”，半关闭就是一项有用的消息完成信号。

`close()` 释放本地 Socket，内核通常按正常关闭流程发送剩余数据与 FIN。连接复位会表现为 `ConnectionResetError` 等异常，已排队数据是否还能被应用读到取决于复位到达时刻和平台行为。应用可以把完整协议响应作为成功证据，把 EOF、复位和超时归入连接终止或结果待确认路径。

每个 I/O 函数最好写出明确契约：成功时消费或产生多少字节；EOF 时返回什么；超时后连接是否继续使用；异常是否包含已完成进度。清晰契约能防止上层把“当前没有数据”“流正常结束”和“连接异常终止”混成同一种结果。

## 2. 用循环表达“全部”

下面的代码可保存为 `io_helpers.py`。它使用单调时钟构造绝对截止时间，系统时钟校准不会改变已经计算的等待预算。

```python
from __future__ import annotations

import socket
import time


class UnexpectedEOF(EOFError):
    def __init__(self, expected: int, received: int) -> None:
        super().__init__(
            f"stream ended after {received} bytes; expected {expected}"
        )
        self.expected = expected
        self.received = received


def deadline_after(seconds: float) -> float:
    if seconds <= 0:
        raise ValueError("seconds must be positive")
    return time.monotonic() + seconds


def seconds_left(deadline: float) -> float:
    remaining = deadline - time.monotonic()
    if remaining <= 0:
        raise TimeoutError("operation deadline expired")
    return remaining


def send_all(sock: socket.socket, data: bytes, deadline: float) -> int:
    """在 deadline 前发送全部 data，返回总字节数。"""
    view = memoryview(data)
    sent = 0
    old_timeout = sock.gettimeout()
    try:
        while sent < len(view):
            sock.settimeout(seconds_left(deadline))
            try:
                count = sock.send(view[sent:])
            except InterruptedError:
                continue
            if count == 0:
                raise ConnectionError("socket made no sending progress")
            sent += count
        return sent
    finally:
        sock.settimeout(old_timeout)


def read_exactly(sock: socket.socket, size: int, deadline: float) -> bytes:
    """在 deadline 前读取 size 字节；提前 EOF 时给出已读进度。"""
    if size < 0:
        raise ValueError("size must be non-negative")
    result = bytearray(size)
    view = memoryview(result)
    received = 0
    old_timeout = sock.gettimeout()
    try:
        while received < size:
            sock.settimeout(seconds_left(deadline))
            try:
                count = sock.recv_into(view[received:])
            except InterruptedError:
                continue
            if count == 0:
                raise UnexpectedEOF(size, received)
            received += count
        return bytes(result)
    finally:
        sock.settimeout(old_timeout)
```

这里的截止时间贯穿整个循环。假设总预算为 3 秒，第一次 `recv` 用掉 2.4 秒，下一次只能使用约 0.6 秒。若每轮都重新设置 3 秒，一个持续缓慢发送字节的对端可以让总等待无限延长。

### 失败后的流位置

超时可能发生在循环已经完成一部分工作之后。`send_all` 也许已经交给内核 600 字节，`read_exactly` 也许已经从流中取走 12 字节。示例函数在异常时通过日志文本表达问题，局部进度没有交给调用方继续拼接。因此它们采用一项简单契约：任一发送或帧读取失败后，调用方关闭当前连接；需要重试的逻辑操作在新连接上复用请求 ID。这个契约可以避免半条旧帧与一条新帧拼接后破坏协议同步。

长期连接也可以采用可恢复读取器：把已读数据保存在连接对象的持久缓冲区中，超时只结束本次等待，下次从已有偏移继续。此时缓冲区上限、帧截止时间和状态迁移都应成为连接状态机的一部分。事件循环框架通常采用这种设计。

写入失败后的业务结论仍需结合应用响应。即使函数知道已有多少字节进入本机内核，它也无法据此推导服务端解析与提交进度。第27章会用请求 ID 和幂等结果记录处理这类不确定性。

Python 自带的 `sendall` 适合普通阻塞发送；发生异常时，它不会报告已经成功交给内核的字节数。显式循环更适合教学、指标记录和统一截止时间。以上函数会临时改变 Socket 的 timeout，因此同一 Socket 同时由多个线程操作时应建立单一所有者或外部同步；事件循环程序则通过 readiness 事件和每个连接的偏移量管理进度。

`memoryview` 让循环在移动偏移时复用同一块底层内存，避免每轮用切片复制剩余数据。`recv_into` 直接写入预先分配的 `bytearray`，适合已知长度的首部和消息体。面对未知长度的流，程序可以按固定块读取到有限缓冲区，并在达到协议上限时立即结束解析。部分平台提供 `MSG_WAITALL` 一类标志，它仍会受 EOF、信号与错误影响；显式循环的行为更容易跨平台测试和记录。

## 3. 消息读取为何经常需要两段循环

长度前缀协议通常先读取固定首部，再读取首部声明的消息体：

```python
import struct

LENGTH = struct.Struct("!I")
MAX_BODY = 1024 * 1024


def read_frame(sock, deadline):
    (body_size,) = LENGTH.unpack(read_exactly(sock, LENGTH.size, deadline))
    if body_size > MAX_BODY:
        raise ValueError("frame exceeds 1 MiB limit")
    return read_exactly(sock, body_size, deadline)


def write_frame(sock, body, deadline):
    if len(body) > MAX_BODY:
        raise ValueError("frame exceeds 1 MiB limit")
    packet = LENGTH.pack(len(body)) + body
    send_all(sock, packet, deadline)
```

首部和消息体可能在一次 `recv` 中一起到达，也可能被拆成多次到达。`read_exactly` 把这些网络时序差异收敛为“得到指定数量”或“得到明确异常”两种程序结果。

## 4. 阻塞、非阻塞与 readiness

阻塞模式把等待交给当前线程，适合连接数较少、结构清晰的工具和服务。非阻塞模式让一次调用立即返回，程序通过 `selectors` 等待可读或可写事件。可写表示当前大概率能够发送一些字节，仍需检查 `send` 的实际返回值；可读也可能对应数据、FIN 或错误。

```python
import selectors

selector = selectors.DefaultSelector()
sock.setblocking(False)
selector.register(sock, selectors.EVENT_READ | selectors.EVENT_WRITE)

for key, mask in selector.select(timeout=1.0):
    if mask & selectors.EVENT_READ:
        try:
            chunk = key.fileobj.recv(65536)
        except BlockingIOError:
            continue
        if chunk == b"":
            selector.unregister(key.fileobj)
            key.fileobj.close()
```

`DefaultSelector` 会选择平台合适的后端，例如 Linux 的 `epoll`、macOS/BSD 的 `kqueue`，Windows 对普通 Socket 使用可用的选择机制。IOCP 属于 Windows 的完成通知模型，常由更高层异步运行时封装。

事件循环中的连接对象通常保存 `input_buffer`、`output_buffer`、当前首部解析进度、消息体剩余长度和绝对截止时间。收到可读事件后，程序循环 `recv` 到 `BlockingIOError`；收到可写事件后，从 `output_buffer` 当前偏移发送到再次出现 `BlockingIOError`。一次事件只代表状态可能推进，偏移量才是已经完成工作的事实。

阻塞模式也能服务多个连接，例如每连接一个线程或由固定线程池接管。选择模型时可以先估算同时连接数、每个线程的内存、业务处理方式和延迟目标。协议循环在各种模型中保持相同，只是“等待下一次可读或可写”的执行者发生变化。

## 5. 实验：让部分写入显形

把下面程序保存为 `partial_write_demo.py`。服务端先暂停读取，客户端请求较小发送缓冲区并用非阻塞模式发送 8 MiB 数据。Windows 回环快速路径可能一次接收很大的写入，所以示例再加一个每次最多转交 64 KiB 的测试适配器，确保偏移循环在各平台都能被执行。

```python
import select
import socket
import threading
import time

PAYLOAD_SIZE = 8 * 1024 * 1024


class CappedSender:
    """测试适配器：让每次底层 send 最多看到 limit 字节。"""
    def __init__(self, sock, limit):
        self.sock = sock
        self.limit = limit

    def send(self, data):
        return self.sock.send(data[: self.limit])


def slow_reader(listener):
    conn, _ = listener.accept()
    with conn:
        time.sleep(1.0)
        total = 0
        while True:
            chunk = conn.recv(4096)
            if not chunk:
                break
            total += len(chunk)
            time.sleep(0.0005)
        print("server received:", total)


with socket.socket() as listener:
    listener.bind(("127.0.0.1", 0))
    listener.listen()
    thread = threading.Thread(target=slow_reader, args=(listener,))
    thread.start()

    with socket.create_connection(listener.getsockname()) as client:
        client.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 4096)
        client.setblocking(False)
        sender = CappedSender(client, 64 * 1024)
        view = memoryview(b"x" * PAYLOAD_SIZE)
        calls = waits = 0
        while view:
            try:
                count = sender.send(view)
                if count == 0:
                    raise ConnectionError("sending made no progress")
                calls += 1
                view = view[count:]
            except BlockingIOError:
                waits += 1
                select.select([], [client], [], 1.0)
        client.shutdown(socket.SHUT_WR)
        print("send calls:", calls, "writable waits:", waits)

    thread.join()
```

### 预期现象

客户端至少会经历 128 次 `send`，服务端最终打印 `8388608`。`BlockingIOError` 与可写等待的次数受操作系统自动调节、回环快速路径和缓冲区实现影响，零次也是有效实验结果。删掉 `CappedSender` 后再次运行，可以观察本机内核单次接受大写入的能力。在 Wireshark 中，应用的一次大数据构造会对应许多 TCP Segment，分段边界也可能受到卸载机制影响。

再做一个 EOF 实验：让发送端只发送 2 字节后执行 `shutdown(socket.SHUT_WR)`，接收端调用 `read_exactly(sock, 4, deadline)`。预期得到 `UnexpectedEOF`，其中 `received == 2`。这个结果把“流已结束”和“当前暂时没数据”清楚地区分开。

## 6. 理解检查

1. `send` 返回 100 时，可以确认哪一段路径已经接收了这 100 字节？
2. `recv(4096)` 返回 37 字节时，程序依据什么判断一条应用消息是否完整？
3. 总截止时间为 5 秒，前三次读取已经用掉 4.7 秒，第四次读取应获得多长预算？
4. readiness 通知到达后，程序为什么仍需处理 `BlockingIOError`、短读与部分写入？
5. `b""` 与 `TimeoutError` 分别描述了怎样的连接事实？
6. 帧读取超时前已经消费了部分字节时，示例代码为什么选择关闭连接？

## 7. 本章小结

可靠使用 Socket 的核心是记录进度：发送偏移量、已读字节数、绝对截止时间和明确的 EOF。下一章将在这些循环之上定义消息首部，让接收端能够验证长度、版本、类型和请求身份。

## 导航

- [上一章：带宽、时延与带宽时延积](../05-reliability-performance/05-latency-throughput-bdp.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：如何设计应用层协议](./02-application-protocol.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
