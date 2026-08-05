# 第25章 Socket API 的正确使用

TCP Socket 为应用程序提供的是双向字节流抽象。当程序调用 `send` 时，内核会根据当前发送缓冲区的剩余空间，接收一部分或全部字节；当程序调用 `recv` 时，内核则返回当前已经到达的字节。由于每次读写调用的边界完全由当时的缓冲区状态决定，因此 TCP 层并不保证消息的完整性，应用层消息的边界必须由应用层协议自己来定义和解析。

## 1. 先读懂四种结果

在阻塞模式下，`send(data)` 返回正整数 $n$，表示 `data[:n]` 这部分数据已经成功交给了本机内核，但剩余的数据仍需由应用程序继续发送。需要注意的是，这个返回值仅仅代表本机数据交接的进度，并不意味着对端已经收到了数据。对端应用何时读取数据、是否完成了业务处理，都必须通过应用层的响应消息来确认。

与之类似，`recv(size)` 也会返回三种清晰的结果：

- **返回非空的 `bytes`**：表示本次成功读取到了数据，但实际读取的长度可能会小于请求的 `size`。
- **返回空字节串 `b""`**：表示对端已经关闭了它的发送方向（即发送了 FIN 包），本端已经读到了这个有序字节流的末尾（EOF）。
- **抛出异常**：表示读取操作被意外中断，常见原因包括超时、连接重置（Connection Reset）、本地主动关闭，或其他系统级错误。

对于非阻塞 Socket，如果当前暂时没有数据可读或缓冲区已满无法写入，操作会直接抛出 `BlockingIOError`。在底层的 POSIX 系统中，这通常对应 `EAGAIN` 或 `EWOULDBLOCK` 错误码；而在 Windows 上，则通常对应 `WSAEWOULDBLOCK`。虽然 Python 将它们统一封装成了 `BlockingIOError`，但具体的错误编号和错误信息依然会因平台而异。此外，如果遇到 `InterruptedError`，说明系统调用被系统信号打断了，程序只需重新计算剩余的超时时间，继续重试即可。

### EOF、半关闭与复位

TCP 的全双工通信允许两个方向的数据流独立关闭。如果对端调用了 `shutdown(SHUT_WR)` 关闭发送，本端在读完操作系统已经排队的全部字节后，再次调用 `recv` 就会得到 `b""`（EOF）。此时，本端依然可以在相反方向上继续向对端发送数据，这种状态被称为**半关闭（Half-close）**。如果某个应用层协议规定“服务端需要一直读取请求体直到 EOF，然后再返回处理结果”，那么半关闭状态就可以作为一种非常清晰的“消息发送完毕”的信号。

调用 `close()` 会彻底释放本地 Socket。通常情况下，内核会走正常的 TCP 四次挥手流程，将缓冲区中剩余的数据和 FIN 包发送出去。如果连接被意外复位（RST 包），应用程序会捕获到 `ConnectionResetError` 异常。此时，之前已经进入内核排队的数据是否还能被应用程序读取，完全取决于复位包到达的准确时刻以及具体操作系统的实现机制。在实际开发中，应用层应该以“收到完整的协议响应报文”作为业务成功的唯一证据，而将 EOF、连接复位以及超时统统视为“连接终止”或“状态未知”，并进入相应的异常处理路径。

为了让代码更健壮，每个 I/O 函数都应该定义清晰的“契约（Contract）”：操作成功时，函数处理了多少字节？遇到 EOF 时，该返回什么值？发生超时后，当前的连接是否还能继续复用？抛出异常时，能否携带已经完成的处理进度？只有契约足够明确，上层调用者才不会把“当前暂时没有数据”、“字节流已正常结束”和“连接异常中断”这三种截然不同的情况混为一谈。

## 2. 用循环表达“全部”

为了确保能发送或接收“指定数量”的完整数据，我们必须使用循环。下面的代码可以保存为 `io_helpers.py`。需要注意的是，代码中使用了**单调时钟（Monotonic Clock）**来构造绝对截止时间，这样即使系统时钟在运行期间发生校准或跳变，也不会影响我们计算出的剩余等待时间。

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

在这段代码中，**绝对截止时间（Deadline）**的概念贯穿了整个循环。假设该操作的总时间预算为 3 秒，如果第一次 `recv` 调用耗费了 2.4 秒，那么下一次调用就只剩下约 0.6 秒的预算。如果不采用这种全局预算，而是每次循环都重新设置 3 秒的超时时间，那么恶意对端只需要以极慢的速度发送字节，就能让你的程序永远卡在这个循环里（这被称为慢速攻击）。

### 失败后的流位置

当网络超时发生时，你的循环可能已经完成了一部分 I/O 工作。例如，`send_all` 也许已经成功把 600 个字节推入内核，或者 `read_exactly` 已经从内核取出了 12 个字节。在上面的示例代码中，如果发生异常，函数仅仅通过日志或异常对象报告了局部进度，并没有将这些零碎的数据交还给调用方继续拼接处理。

这种设计背后有一个简单的契约：**一旦出现任何发送或读取失败，调用方必须直接关闭当前连接**。如果业务逻辑需要重试，应该建立一个全新的连接，并复用之前的请求 ID。这种契约可以有效防止将“旧连接遗留的半条消息”和“新连接重新发送的消息”错误拼接在一起，从而破坏应用层协议的同步机制。

当然，对于需要长期保持的长连接，也可以设计**可恢复读取器**：将已经读取的半条消息保存在该连接对象的内部持久缓冲区中。发生超时仅仅意味着中止当前这一轮的等待，下次可读事件到来时，继续从上一次记录的偏移量处接着读取。要实现这一点，缓冲区大小上限、整条帧的读取截止时间以及状态机的迁移，都必须被纳入连接对象的管理范围中。现代事件循环框架通常采用了这种设计。

需要再次强调的是：当“写入失败”发生时，应用程序必须结合业务上的响应才能得出最终结论。哪怕你的函数清楚知道有多少个字节已经成功进入了本机内核缓存，你也无法据此推断服务端的应用进程是否成功解析并提交了这条消息。我们将在第 27 章详细探讨如何利用请求 ID 和幂等结果记录，来妥善处理这种不确定性。

关于实现细节：
- Python 自带的 `socket.sendall` 已经能够很好地满足普通的阻塞发送需求。只是当它抛出异常时，它不会报告到底有多少字节已经成功交给了内核。显式循环则更适合用来教学、记录详细指标以及统一控制全局截止时间。
- 上述示例函数会在循环内部临时改变 Socket 的 `timeout`。因此，如果同一 Socket 被多个线程同时操作，必须建立单一所有者或引入外部同步机制；而在事件循环程序中，则是通过就绪事件（Readiness）和每个连接各自维护的偏移量来管理进度。
- 代码巧妙利用了 `memoryview`。在循环向前移动偏移量时，它始终复用同一块底层内存，避免了每轮用切片复制剩余数据而产生大量开销。
- `recv_into` 方法直接将数据写入预先分配好的 `bytearray` 中，非常适合已知长度的协议首部和消息体。面对未知长度的流，程序可以按固定块读取到有限缓冲区内，并在达到协议上限时立即结束解析。
- 虽然某些平台提供了 `MSG_WAITALL` 一类标志，但它依然会受到 EOF、系统信号与底层错误的影响；相比之下，显式循环的行为更容易跨平台进行测试和记录。

## 3. 消息读取为何经常需要两段循环

基于“长度前缀”设计的应用层协议，通常要求接收端采用“两段式”读取策略：首先读取固定首部，解析出消息体的大小，再根据大小读取真正的消息体：

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

在真实网络中，协议的首部和消息体可能在一次 `recv` 调用中一起到达，也可能会被拆分成好几个网络数据段从而多次到达。`read_exactly` 函数完美屏蔽了底层的碎片化时序差异，将复杂的网络状态收敛为两种清晰的程序结果：“得到指定数量的字节”或“抛出明确异常”。

## 4. 阻塞、非阻塞与 readiness

*阻塞模式（Blocking）*直接将等待任务交给当前线程，这种方式代码结构极其清晰，非常适合连接数较少、逻辑简单的内部工具和服务。*非阻塞模式（Non-blocking）*则让系统调用立即返回，程序必须借助 `selectors` 等多路复用工具来等待可读或可写事件。需要注意的是：“可写就绪”仅仅意味着内核当前的发送缓冲区有空余空间，你大概率能发出去一些数据，但仍需检查 `send` 的实际返回值；“可读就绪”既可能对应真实的到达数据，也可能代表对端发送了 FIN 包或者发生了底层错误。

::: details 阻塞模式是什么？
阻塞 Socket 调用在暂时无法完成时会让当前线程等待，例如没有数据时的 `recv` 或队列为空时的 `accept`。等待期间线程不继续执行后续应用代码，直到操作完成、超时、被中断或报错。

阻塞描述的是 API 调用方式，TCP 协议栈和内核仍可异步处理报文。
:::

::: details 非阻塞模式是什么？
非阻塞 Socket 调用会在当前无法继续读写时迅速返回一个“稍后再试”的结果。应用通过事件循环关注可读、可写等就绪事件，并在每次调用后检查实际完成的字节数。

它能让少量线程管理大量连接，同时需要为每条连接保存独立解析状态和输出偏移。
:::

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

`DefaultSelector` 会自动选择当前平台合适的底层实现，例如 Linux 的 *`epoll`*、macOS/BSD 的 *`kqueue`*，而对于 Windows 的普通 Socket 则回退到可用的 *`select`* 机制；一些运行时也会直接使用 *`poll`*。至于 Windows 平台的 *IOCP（完成端口）*，本质上属于完成通知模型，通常由更上层的异步运行时框架深度封装。

::: details select、poll、epoll 与 kqueue 是什么？
它们都是等待多个 I/O 对象状态变化的系统接口。`select` 可移植性高但集合与扫描成本较明显；`poll` 使用数组表达关注对象；Linux `epoll` 和 BSD/macOS `kqueue` 更适合维护大量长期注册的事件源。

这些接口主要报告“现在可能可以推进”，应用仍需实际调用 `accept`、`recv` 或 `send` 并处理竞态和部分结果。
:::

::: details IOCP 是什么？
IOCP（I/O Completion Ports，I/O 完成端口）是 Windows 的异步完成通知机制。程序先提交异步 I/O，操作完成后再从完成端口取得结果，关注的是“哪项操作已经完成”及其字节数。

Python、.NET、libuv 等运行时可以在上层封装 IOCP，应用通常通过统一的异步 API 使用它。
:::

在事件循环框架中，每个连接对象通常会各自保存一套独立状态：读缓冲区（`input_buffer`）、写缓冲区（`output_buffer`）、当前首部解析进度、消息体剩余长度，以及绝对截止时间。当收到“可读”事件后，程序会不断循环调用 `recv` 直到系统抛出 *`BlockingIOError`（底层常对应 `EAGAIN` 或 `EWOULDBLOCK`）*为止；当收到“可写”事件后，程序则从 `output_buffer` 的当前偏移量开始，不断调用 `send` 直到再次抛出 `BlockingIOError`。请牢记：**一次就绪事件仅仅代表网络状态可能向前推进，只有真正变化的偏移量，才是已经完成的工作事实。**

::: details EAGAIN、EWOULDBLOCK 与 BlockingIOError 是什么？
`EAGAIN` 和 `EWOULDBLOCK` 是系统错误码，表示非阻塞操作当前缺少继续推进的条件，应用可等待下一次就绪通知后重试。许多平台让两者取相同数值。

Python 把这类结果暴露为 `BlockingIOError`。它是非阻塞控制流中的常见状态，程序仍需保留尚未读写完的偏移与缓冲内容。
:::

阻塞模式同样可以服务于高并发的多连接场景，例如采用“每连接一线程”或交由固定线程池接管。在选择并发模型时，应该综合估算同时存在的连接数、每个线程消耗的内存、业务处理的计算密集度以及系统的延迟目标。无论是阻塞模型还是事件循环，网络协议解析的循环逻辑在本质上都是相同的，只是“等待下一次可读或可写”的执行者发生了改变。

## 5. 实验：让部分写入显形

为了直观体会“部分写入”，我们可以把下面这段程序保存为 `partial_write_demo.py` 并运行。服务端在建立连接后会故意暂停读取，而客户端则主动缩小内核发送缓冲区，并尝试以非阻塞模式发送高达 8 MiB 的数据。由于 Windows 的回环接口快速路径（Loopback Fast Path）极度强悍，可能会一口气吞下巨大的写入，为了确保“分片循环”逻辑在所有平台都能稳定触发，示例代码专门增加了一个 `CappedSender` 测试适配器，强制每次调用底层最多只转交 64 KiB 数据。

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

运行此代码，客户端至少会经历 128 次 `send` 调用，服务端最终打印完整的 `8388608` 字节。需要注意的是，抛出 `BlockingIOError` 以及陷入可写等待的次数，受操作系统拥塞自动调节、回环快速路径和底层缓冲区实现的深刻影响，哪怕次数为 0 也是完全正常的有效实验结果。如果你删掉 `CappedSender` 后再次运行，便可以观察你的本机内核单次能够接受多大体积的“一口吞”写入。在网络嗅探器（如 Wireshark）中，应用层构造的这一大块数据，最终会被切分成许多零散的 TCP Segment（数据段），而分段的具体边界尺寸往往还会受到网卡卸载机制的影响。

作为进阶，你可以自己动手再做一个关于 EOF 的实验：让发送端仅仅发送 2 个字节的数据，随后立即调用 `shutdown(socket.SHUT_WR)`。同时，接收端调用封装好的 `read_exactly(sock, 4, deadline)` 尝试读取 4 个字节。预期的结果是，接收端会明确抛出 `UnexpectedEOF` 异常，且异常对象的 `received` 属性为 `2`。这个直观的结果彻底划分清楚了“字节流已合法结束”和“当前网络暂时没数据”的区别。

## 6. 理解检查

1. 当 `send` 返回 100 时，你只能确认这 100 个字节抵达了哪一段路径？它能证明对端已经收到数据了吗？
2. 当 `recv(4096)` 仅仅返回 37 个字节时，应用程序应该依据什么来判断当前这条业务消息是否已经接收完整？
3. 假设某次操作的总截止时间为 5 秒，前三次读取总共耗费了 4.7 秒，那么第四次读取应当被赋予多长的等待预算？
4. 在非阻塞多路复用模型中，当“就绪（readiness）”通知到达后，为什么程序依然必须妥善处理 `BlockingIOError`、短读（Short Read）以及部分写入（Partial Write）现象？
5. `recv` 返回空字节串 `b""` 与操作抛出 `TimeoutError` 异常，分别向你描述了怎样的网络事实？
6. 如果在帧读取超时前，程序已经从底层获取到了残缺的一小段字节，为什么本文的示例代码强烈建议直接关闭当前连接？

## 7. 本章小结

要编写健壮且可靠的 Socket 网络程序，其核心哲学就是**精确记录状态进度**：严谨维护每一次发送的偏移量、累计的已读字节数、全局绝对截止时间，以及妥善处理明确的 EOF 边界。在熟练掌握了这些底层循环后，下一章我们将正式引入应用层协议的设计，探讨如何在网络字节流中定义消息首部，赋予接收端验证消息长度、协议版本、消息类型以及请求身份的能力。

## 导航

- [上一章：带宽、时延与带宽时延积](../05-reliability-performance/05-latency-throughput-bdp.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：如何设计应用层协议](./02-application-protocol.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
