# 第5章 用一个最小程序建立 TCP 连接

## 从 API 调用提出问题

在服务端代码中，我们经常看到 `bind`、`listen` 和 `accept` 这三个调用形影不离。初学者往往会把它们统一理解为“等待客户端连接”。但实际运行时的表现并非如此：`listen` 会瞬间返回，真正可能阻塞（卡住）的是 `accept`。甚至在应用层调用 `accept` 之前，内核底层的 TCP 三次握手可能就已经完成了。

本章我们将手写一个简单的单连接回显（Echo）服务，并解答以下三个疑问：

1. 服务端究竟从哪一步开始，才真正具备了被动接收连接的能力？
2. `accept` 吐出的新 Socket，跟最初的监听 Socket 分工上有何不同？
3. Python 代码层面方法返回的时刻，和操作系统内核里的连接进度到底是怎么对应的？

我们的程序将基于 TCP 面向字节流的特性来设计。这里采用一种经典的自定义应用层协议结构：即“4 字节长度头 + 消息体”：

```text
+----------------------+--------------------------+
| 长度：4字节无符号整数 | 消息体：长度字段指定的字节数 |
+----------------------+--------------------------+
```

其中，长度字段采用网络字节序（大端序）。接收端会通过循环调用 `recv` 一直读，直到收满目标字节数；发送端则利用 `sendall` 一次性将完整的帧推入缓冲区。这样一来，无论底层的 TCP 协议栈如何拆分（Segment）网络包，我们的程序都能准确无误地解析出完整的消息边界。

## 服务端程序

新建 `server.py`：

```python
import socket
import struct
from datetime import datetime

HOST = "127.0.0.1"
PORT = 50007
BACKLOG = 8
MAX_MESSAGE = 1024 * 1024
HEADER = struct.Struct("!I")


def log(message: str) -> None:
    now = datetime.now().astimezone().isoformat(timespec="milliseconds")
    print(f"{now}  {message}", flush=True)


def recv_exact(sock: socket.socket, size: int) -> bytes:
    data = bytearray()
    while len(data) < size:
        remaining = size - len(data)
        chunk = sock.recv(remaining)
        log(f"recv({remaining}) -> {len(chunk)} bytes")
        if chunk == b"":
            raise ConnectionError("对端在完整消息到达前结束了发送方向")
        data.extend(chunk)
    return bytes(data)


def recv_frame(sock: socket.socket) -> bytes:
    header = recv_exact(sock, HEADER.size)
    (length,) = HEADER.unpack(header)
    if length > MAX_MESSAGE:
        raise ValueError(f"消息长度 {length} 超过上限 {MAX_MESSAGE}")
    return recv_exact(sock, length)


def send_frame(sock: socket.socket, payload: bytes) -> None:
    if len(payload) > MAX_MESSAGE:
        raise ValueError(f"消息长度 {len(payload)} 超过上限 {MAX_MESSAGE}")
    frame = HEADER.pack(len(payload)) + payload
    result = sock.sendall(frame)
    log(f"sendall({len(frame)} bytes) -> {result!r}")


def main() -> None:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as listener:
        log(f"socket() -> fd={listener.fileno()}")

        result = listener.bind((HOST, PORT))
        log(f"bind({HOST!r}, {PORT}) -> {result!r}")

        result = listener.listen(BACKLOG)
        log(
            f"listen({BACKLOG}) -> {result!r}; "
            f"local={listener.getsockname()}"
        )

        log("即将调用 accept()")
        conn, peer = listener.accept()
        log(f"accept() -> fd={conn.fileno()}, peer={peer}")

        with conn:
            log(
                f"connected socket: local={conn.getsockname()}, "
                f"peer={conn.getpeername()}"
            )
            request = recv_frame(conn)
            log(f"完整请求: {len(request)} bytes, value={request!r}")
            send_frame(conn, request)
            log("回显响应已经提交给本地 TCP")

        log("已连接 Socket 已关闭")
    log("监听 Socket 已关闭")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ConnectionError, ValueError) as exc:
        raise SystemExit(f"server error: {exc}") from exc
```

## 客户端程序

新建 `client.py`：

```python
import socket
import struct
from datetime import datetime

SERVER = ("127.0.0.1", 50007)
MAX_MESSAGE = 1024 * 1024
HEADER = struct.Struct("!I")


def log(message: str) -> None:
    now = datetime.now().astimezone().isoformat(timespec="milliseconds")
    print(f"{now}  {message}", flush=True)


def recv_exact(sock: socket.socket, size: int) -> bytes:
    data = bytearray()
    while len(data) < size:
        remaining = size - len(data)
        chunk = sock.recv(remaining)
        log(f"recv({remaining}) -> {len(chunk)} bytes")
        if chunk == b"":
            raise ConnectionError("对端在完整消息到达前结束了发送方向")
        data.extend(chunk)
    return bytes(data)


def recv_frame(sock: socket.socket) -> bytes:
    header = recv_exact(sock, HEADER.size)
    (length,) = HEADER.unpack(header)
    if length > MAX_MESSAGE:
        raise ValueError(f"消息长度 {length} 超过上限 {MAX_MESSAGE}")
    return recv_exact(sock, length)


def send_frame(sock: socket.socket, payload: bytes) -> None:
    if len(payload) > MAX_MESSAGE:
        raise ValueError(f"消息长度 {len(payload)} 超过上限 {MAX_MESSAGE}")
    frame = HEADER.pack(len(payload)) + payload
    result = sock.sendall(frame)
    log(f"sendall({len(frame)} bytes) -> {result!r}")


def main() -> None:
    request = "你好，TCP".encode("utf-8")

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
        log(f"socket() -> fd={client.fileno()}")

        result = client.connect(SERVER)
        log(
            f"connect({SERVER}) -> {result!r}; "
            f"local={client.getsockname()}, peer={client.getpeername()}"
        )

        send_frame(client, request)
        response = recv_frame(client)
        log(f"完整响应: {len(response)} bytes, value={response!r}")

        if response != request:
            raise RuntimeError("回显内容校验失败")
        print("响应文本：", response.decode("utf-8"))

    log("客户端 Socket 已关闭")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ConnectionError, ValueError, RuntimeError) as exc:
        raise SystemExit(f"client error: {exc}") from exc
```

这两段程序都用到了 Python 的上下文管理器（`with` 语法）。无论是正常执行结束、协议校验报错，还是底层 Socket 抛出异常，只要代码退出了 `with` 块，对应的 Socket 都会被自动安全释放。此外，服务端还给消息长度设了一个 1 MiB 的硬性上限，防止恶意请求导致内存分配失控。

## 步步拆解服务端的生命周期

### 1. `socket`：创建通信端点

调用 `socket(AF_INET, SOCK_STREAM)` 会创建一个 IPv4 TCP Socket。此时，它还只是一个毫无特征的“通用端点”，直到后续调用 `listen` 后，它才会被赋予“监听”的职责。我们在日志里打印的 `fileno()` 在 Windows 上返回的是一个标识该 Socket 句柄的整数，这个数字仅在当前进程的本次运行中有效。

### 2. `bind`：绑定本地地址与端口

通过 `bind((HOST, PORT))`，我们请求操作系统将这个“准监听” Socket 绑定到 `127.0.0.1` 地址的 `50007` 端口上。调用成功时，Python 的 API 会返回 `None`。如果这个端口已经被其他程序占用（已有监听者），往往会抛出 `OSError`，此时程序会报错并退出。

我们在这里绑定了本地回环地址（Loopback），这意味着该服务只能被本机访问。作为本教程的第一个实验，这种做法能排除外部网络环境的干扰，为我们提供一个稳定、清晰的测试路径。

### 3. `listen`：正式进入被动监听状态

`listen(BACKLOG)` 是一个关键的转折点，它将这个 Socket 正式转换为被动监听状态。传入的 `BACKLOG` 参数相当于告诉操作系统：“如果新的连接建好了，但我的应用程序还没来得及 `accept` 取走它，请在底层帮我暂存这些连接，最多存 `BACKLOG` 个”。不过，各个操作系统底层对这个数值可能会做微调或截断；而且不同平台在组织“半连接（未完成握手）”和“全连接（已完成握手）”队列的具体实现上也会有所差异。

`listen` 成功后通常会瞬间返回 `None`。请注意：**正是从此刻起，操作系统的 TCP/IP 内核协议栈开始真正接管工作**，它可以响应发往该端口的 SYN 报文（TCP 握手的起始标志），并在底层默默维护建立连接所需的各种状态。

### 4. `accept`：从内核“摘取”已建立的连接

当服务端应用调用 `accept()` 时，它实际上是在向内核索要：“请从已经完成三次握手的全连接队列里，拿出一个连接给我”。它会返回一个元组：

```python
(conn, peer)
```

其中，`conn` 是一个**全新**的 Socket，专门负责与当前接入的这个客户端进行数据收发（即已连接 Socket）；而 `peer` 则记录了远端客户端的 IP 地址和系统分配的临时端口。

如果在调用时，内核的全连接队列里暂时是空的，那么在默认的阻塞模式下，`accept` 调用就会停在这里死等（Block），直到有新连接到来。同时需要牢记，最初的那个“监听 Socket”并未消失，它仍然留在原位继续站岗，随时准备迎接后续的新连接（也就是可以再次调用 `accept`）。

在这里，我们需要分清一个极易混淆的概念：**内核处理 TCP 握手**与**应用层 `accept` 领取连接**，完全是两个独立的异步阶段。客户端发起的 TCP 握手可能早就在底层完成了，甚至连客户端发来的第一批业务数据都已经躺在操作系统的接收缓冲区（Receive Buffer）里了，这时候服务端的应用代码才慢吞吞地调用 `accept`。这种设计非常巧妙，操作系统底层的监听队列就像一个缓冲池，吸收了用户态应用程序在进程调度或处理业务时产生的短暂延迟。

### 5. `recv` 与 `sendall`：在字节流上收发应用帧（Frame）

`recv(n)` 的语义是：从缓冲区尝试读取最多 `n` 个字节的数据。由于 TCP 是流式协议，它完全有可能只返回比 `n` 少的数据。因此，我们在代码中封装了 `recv_exact` 函数，用 `while` 循环持续死磕，直到把我们期望的长度字段（4字节）或完整的消息体全部收齐。

如果 `recv` 居然返回了一个空字节流 `b""`，这在 TCP 语境里代表极其明确的信号：对端已经体面地关闭了它的发送方向（即收到了对端的 FIN 报文，达到了有序 EOF）。如果在我们期望读完一个完整帧的过程中突然遭遇了这种 EOF（比如只读了半截消息对端就断了），程序就会把它判定为协议层面的错误。

相比之下，发送端的 `sendall(frame)` 就省心多了，它是 Python 提供的一个高阶方法。它会在底层自动帮我们写 `while` 循环，持续调用底层的 `send`，直到把整个应用帧一滴不剩地塞进本地 Socket 的发送缓冲区，或者遭遇不可恢复的网络错误。当它成功返回 `None` 时，仅仅意味着 **“数据已成功交给了本地系统的 TCP 协议栈”** （即 Socket API 层面的成功）。至于对端有没有真正收到，还得靠 TCP 自身的确认机制（ACK），或者像我们这样，依靠服务端应用层特意发回的“回显响应”来向客户端证实业务处理已完成。

### 6. 退出上下文并释放 Socket

当程序执行完毕退出作用域时，内层的 `with conn` 会首先触发，关闭专属的已连接 Socket；随后外层的 `with listener` 关闭负责监听的 Socket。在代码层面关闭已连接 Socket 时，底层系统就会自动向对端发送 FIN 报文，正式启动 TCP 连接的挥手释放流程。关于这里面 FIN、ACK 报文的交互细节与 TCP 状态机的流转，我们将在后续的抓包章节详细剖析。

## 追踪客户端的生命周期

客户端的流程相对简单：创建好 Socket 后，直接一把梭调用 `connect(SERVER)`。在这个瞬间，操作系统会自动搞定一系列麻烦事：根据目标 IP 选择合适的路由、决定用哪个本地接口地址，并为自己随机分配一个临时端口（Ephemeral Port），最后正式向服务端发起 TCP 三次握手。

在默认的阻塞模式下，直到三次握手圆满完成，`connect` 调用才会返回 `None` 唤醒应用程序。此时，这条虚拟链路已经通了，通过调用 `getsockname()` 和 `getpeername()` 就能分别查阅到自己和对方完整的端点信息（IP+端口）。

紧接着，客户端开始组装并发送总长 16 字节的应用层数据帧：

- 前 4 个字节是长度头（大端序的 `12`），十六进制在内存里长这样：`00 00 00 0c`；
- 后面紧跟消息体，也就是 `你好，TCP` 这段字符串的 UTF-8 编码，恰好占 12 个字节；
- 两者拼接，帧总长度刚好 16 字节。

这里有一个极为核心的 TCP 认知：**TCP 是没有业务边界概念的字节流协议**。

你在发送端潇洒地调了一次 `sendall` 拍出 16 个字节，但在接收端，你可能需要调用两次甚至多次 `recv` 才能把它们凑齐。应用程序层的 Socket API 调用次数，与底层网络实际传输的 TCP 数据段（Segment）数量，完全没有任何必然的 1:1 映射关系。TCP 唯一能向你拍胸脯保证的只有一点：**只要连接没断，接收端按顺序读到的字节内容，绝对跟发送端写进去的一模一样**。

## 动手运行实验

首先，打开第一个 PowerShell 窗口，启动服务端程序：

```powershell
python -X utf8 .\server.py
```

此时，控制台会停在等待接收新连接的地方：

```text
...  listen(8) -> None; local=('127.0.0.1', 50007)
...  即将调用 accept()
```

接着，新开一个客户端的 PowerShell 窗口：

```powershell
python -X utf8 .\client.py
```

### 观察并验证预期现象

你会发现，服务端输出日志的关键执行顺序完美契合了我们的生命周期分析：

```text
socket → bind → listen → accept → recv长度 → recv消息体 → sendall → close
```

而客户端日志的执行顺序则是：

```text
socket → connect → sendall → recv长度 → recv消息体 → close
```

在日志输出里，你应该能清晰地看到操作系统为客户端动态随机分配的临时端口（比如 `53124`）。不仅如此，端点信息也是镜像对应的：服务端 `accept()` 打印出来的远端 `peer` 地址，一定严丝合缝地等于客户端 `getsockname()` 获取的本地地址；而服务端那个专用的“已连接 Socket”打印的 `getsockname()`，也必然等于客户端眼中的远端 `getpeername()`。

正如前文强调过的，`recv` 每次吐出数据的具体分组情况是允许变化的。某次运行它可能乖乖地先给你 4 字节的头，再给你 12 字节的体；而在网络环境复杂或系统负载高时，它可能每次只蹦出几个字节。好在我们应用层有严谨的 `while` 循环去接管一切，确保最终能稳稳地拼接出一条完整的应用消息。

## 进阶实验：验证内核异步完成握手与 accept 调用的关系

为了亲眼见证刚才提到的“内核在底层默默完成 TCP 握手，无需应用层操心”的理论，我们在服务端的 `log("即将调用 accept()")` 之后、`listener.accept()` 之前，临时加一行阻塞代码：

```python
input("监听已生效；启动客户端后，按 Enter 调用 accept：")
```

保存代码后，重新运行服务端，接着再启动客户端。

你会看到非常有趣的一幕：客户端的 `connect` 和 `sendall` 居然毫无阻碍地执行完毕并返回了！客户端此时已经把数据发出去了，正眼巴巴地挂在 `recv` 等待服务端的响应。

而服务端代码此刻还傻傻地卡在 `input` 的等待输入环节，根本没来得及执行 `accept()`。

此时，只要你在服务端按下 Enter 键放行，代码继续往下跑，`accept` 会**立刻、瞬间**拿到一个已经就绪的连接，接下来的 `recv_frame` 也会立马读到已经在操作系统缓冲区里排队等候多时的数据。

更硬核的证据在系统层面。在服务端按下 Enter 之前（趁代码还卡在 `input`），你可以打开第三个 PowerShell 窗口，用系统命令直接去扒 TCP 的底：

```powershell
Get-NetTCPConnection |
  Where-Object { $_.LocalPort -eq 50007 -or $_.RemotePort -eq 50007 } |
  Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess
```

在命令输出的结果里，你通常会同时看到三条赫然在列的记录：
- 一条是服务端监听 Socket 的 `Listen` 状态。
- 另外两条则是属于这个新连接的双方端点，它们都已经堂而皇之地进入了 `Established`（连接已确立）状态！

要知道，我们的服务端应用程序这个时候还死死卡在 `input` 里没动弹呢。这组系统级状态的确凿证据，无可辩驳地证明了一个真理：**TCP 的三次握手完全是由底层系统内核自主驱动并完成的，它会把建好的连接放入队列，根本不需要用户态应用层的 `accept` 参与。**

通过这个进阶实验，我们将 TCP 连接建立生命周期中的三个关键时刻彻底分清了：

1. `listen`：宣告大功告成，向内核申请开启被动建立连接的开关；
2. **三次握手**：完全是双方操作系统内核之间的私下交流，自主推进；
3. `accept`：只是服务端应用层睡醒了，去系统队列里“领走”一个已经建好的专用 Socket 而已。

实验验证完毕后，记得把这行 `input` 删掉，让程序恢复正常的自动化运行。

## 本章概念自查

1. 调用 `listen` 成功后所持有的那个 Socket 承担着什么职责？负责跟客户端进行数据交互的那个“专用 Socket”又是从哪个调用里蹦出来的？
2. 在默认的阻塞模式下，如果内核的全连接队列里空空如也，程序会在哪个系统调用处卡住等待？
3. 客户端的 `connect` 明明已经握手成功并返回了，可服务端的应用层还没来得及调用 `accept`。操作系统是用什么机制来衔接这个时间差的？
4. 发送端调用 `sendall` 并顺利返回 `None`，这到底代表着网络架构中“哪一层”的成功？
5. 为什么我们非得不厌其烦地用 `while` 循环去包装出一个 `recv_exact` 函数？

### 参考答案

1. 它是**监听 Socket**（Listener），职责是像门卫一样守着端口，处理来自四面八方的新连接请求（SYN）。而专门负责跟某一个具体客户端一对一聊天的**已连接 Socket**，是由 `accept()` 的返回值赋予的。
2. 会卡在 `accept()` 处。它在死等（Block），直到内核全连接队列里出现一个完成了三次握手的可用连接供其领走为止。
3. 靠的是内核底层的**连接队列**机制。操作系统内核会自己负责响应握手包，握手成功后就把它塞进“已完成连接队列”里暂存缓冲，等待迟钝的应用层什么时候想起来调用 `accept` 什么时候去领走它。
4. 它仅仅代表 **Socket API 层（也就是本地操作系统层面）**的成功。意思是：你的这段字节序列，已经一点不差地被塞进了本机操作系统的发送缓冲区里了。至于对端什么时候收到、怎么处理，还得靠网络传输（TCP ACK）以及我们应用层协议（如服务端回显的消息）来最终确认。
5. 因为 TCP 骨子里是一个**无边界的字节流协议（Byte Stream）**。单次 `recv` API 调用极有可能只返回比你预期的要少得多的字节。我们必须利用循环机制，像拼图一样耐心地把收到的零碎字节流一点点拼凑起来，直到满足了我们应用层协议规定的完整长度（比如 4字节长度头 + 消息体）才算大功告成。

## 本章小结

服务端通过 `bind` 绑定并明确了自己在本地的门牌号（端点），接着利用 `listen` 正式开启被动监听的大门，最后在阻塞状态下通过 `accept` 从内核队列里“领养”了一个专门负责与某位客户端私聊的全新 Socket。
而客户端则雷厉风行，直接通过 `connect` 建立起自身与远端服务器的连接映射关系。
在数据交互层面，我们借助了带有 4 字节长度头的帧结构，辅以 `while` 循环硬磕的 `recv`，以及省心省力的 `sendall`，成功在无边界的 TCP 字节流上，构筑起了一套可靠的应用层消息投递机制。

在跑通了这套“最小可用程序”之后，下一章，我们将正式架起抓包工具，潜入网络的最底层，去亲自捕获并解剖隐藏在这些高级 API 调用背后的 TCP 真实线上报文！

[上一章：第4章 Socket、地址、端口和四元组](./01-socket-address-port-four-tuple.md) · [所属篇：第二篇](../02-connection.md) · [下一章：第6章 第一次抓包](./03-first-capture.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
