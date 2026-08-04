# 第5章 用一个最小程序建立 TCP 连接

## 从 API 调用提出问题

服务端代码里经常连续出现 `bind`、`listen` 和 `accept`。初学时很容易把它们都理解成“等待客户端”。实际运行中，`listen` 很快返回，`accept` 才可能停在那里；甚至在应用调用 `accept` 之前，内核已经完成了客户端的 TCP 握手。

这一章会写一个单连接回显服务，并回答三个问题：

1. 服务端从哪个调用开始具备被动接收连接的能力？
2. `accept` 返回的新 Socket 与监听 Socket 各自承担什么职责？
3. Python 调用返回的时刻，怎样与内核中的连接进度对应？

程序继续遵循 TCP 字节流模型。应用协议采用“4字节长度 + 消息体”：

```text
+----------------------+--------------------------+
| 长度：4字节无符号整数 | 消息体：长度字段指定的字节数 |
+----------------------+--------------------------+
```

长度使用网络字节序。接收端通过循环 `recv` 收满目标字节数，发送端使用 `sendall` 提交完整帧。这样程序在任何合法的 TCP 拆分方式下都能正确读取消息。

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

两个程序都使用上下文管理器。正常结束、协议校验失败或 Socket 调用抛出异常时，已进入的 `with` 块都会释放相应 Socket。服务端还为长度字段设置了 1 MiB 上限，让内存分配始终处于可预期范围。

## 分步理解服务端生命周期

### 1. socket 创建端点对象

`socket(AF_INET, SOCK_STREAM)` 创建 IPv4 TCP Socket。此时它处于通用端点阶段，后续的 `listen` 会赋予它监听职责。`fileno()` 在 Windows 上返回可用于标识该 Socket 句柄的整数；它只服务于本次进程运行。

### 2. bind 选择本地端点

`bind((HOST, PORT))` 请求操作系统把监听候选 Socket 绑定到 `127.0.0.1:50007`。成功时 Python 返回 `None`。若端口已有监听者，常见结果是 `OSError`，程序会输出错误并退出。

绑定回环地址会把访问范围限制在本机。本教程的首次实验因此具有稳定、清晰的路径。

### 3. listen 进入被动监听状态

`listen(BACKLOG)` 将这个 Socket 转为被动监听状态，并把 `BACKLOG` 作为尚未被应用 `accept` 的连接数量上限交给操作系统。具体系统可能对数值做截断或调整；未完成握手与已完成握手的队列组织也具有平台实现差异。

`listen` 成功后通常立即返回 `None`。从此刻起，内核可以处理到达该端口的 SYN，并维护建立连接所需的状态。

### 4. accept 取得一个已完成连接

`accept()` 从已完成、等待应用领取的连接中取出一个，并返回：

```python
(conn, peer)
```

`conn` 是新的已连接 Socket，`peer` 是客户端地址与临时端口。队列暂时为空时，当前阻塞模式下的 `accept` 会等待。监听 Socket 继续留在原位，后续还可以再次调用 `accept`。

内核处理握手与应用领取连接是两个相邻阶段。客户端的握手可能已经完成，数据也可能已经进入接收缓冲区，随后服务端应用才调用 `accept`。这让监听队列可以吸收应用调度中的短暂延迟。

### 5. recv 与 sendall 交换应用帧

`recv(n)` 返回当前可交付的最多 `n` 字节。它可能返回更少字节，因此 `recv_exact` 持续调用，直到收满长度字段或消息体。返回 `b""` 表示对端发送方向到达有序 EOF；帧提前遇到 EOF 时，程序将其报告为协议错误。

`sendall(frame)` 会持续调用底层发送操作，直到完整帧已提交给本地 Socket，或遇到错误。成功时返回 `None`。这个成功结论属于 Socket API 层；服务端回显响应进一步向客户端表达应用已读取该请求。

### 6. 上下文结束并释放 Socket

内层 `with conn` 先关闭已连接 Socket，外层 `with listener` 再关闭监听 Socket。关闭已连接 Socket 会启动 TCP 连接释放过程，后续章节会详细观察 FIN、ACK 与连接状态。

## 客户端生命周期

客户端创建 Socket 后调用 `connect(SERVER)`。操作系统会根据目标地址选择路由、本地回环地址和临时端口，并执行 TCP 连接建立流程。阻塞模式下，连接成功后 `connect` 返回 `None`，此时 `getsockname()` 与 `getpeername()` 能给出完整的本地、远端端点。

随后客户端发送16字节应用帧：

- 长度字段占4字节，十六进制内容为 `00 00 00 0c`；
- `你好，TCP` 的 UTF-8 编码占12字节；
- 帧总长度为16字节。

一次 `sendall` 与接收端两次或更多次 `recv` 可以同时成立。API 调用次数与 TCP 报文段数量也可以各自变化，字节顺序与总内容保持一致。

## 运行实验

打开服务端 PowerShell：

```powershell
python -X utf8 .\server.py
```

日志会停在：

```text
...  listen(8) -> None; local=('127.0.0.1', 50007)
...  即将调用 accept()
```

再打开客户端 PowerShell：

```powershell
python -X utf8 .\client.py
```

### 预期现象

服务端日志的关键顺序为：

```text
socket → bind → listen → accept → recv长度 → recv消息体 → sendall → close
```

客户端日志的关键顺序为：

```text
socket → connect → sendall → recv长度 → recv消息体 → close
```

你会看到一个由系统动态选择的客户端端口，例如 `53124`。服务端 `accept()` 打印的 `peer` 与客户端 `getsockname()` 相同；服务端已连接 Socket 的 `getsockname()` 与客户端 `getpeername()` 相同。

`recv` 的具体返回分组允许变化。某次运行可能先返回4字节、再返回12字节；循环读取保证最终结果仍是一条完整消息。

## 进阶观察：先完成握手，后调用 accept

在服务端 `log("即将调用 accept()")` 与 `listener.accept()` 之间临时加入：

```python
input("监听已生效；启动客户端后，按 Enter 调用 accept：")
```

重新运行服务端，再启动客户端。客户端的 `connect` 和 `sendall` 通常能够先返回，随后停在等待响应的位置。此时按下服务端 Enter，`accept` 会立即取得已完成连接，`recv_frame` 也可能立刻读到已经排队的数据。

在服务端按 Enter 之前，可以打开第三个 PowerShell 查看系统状态：

```powershell
Get-NetTCPConnection |
  Where-Object { $_.LocalPort -eq 50007 -or $_.RemotePort -eq 50007 } |
  Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess
```

此时通常能同时看到监听 Socket 的 `Listen` 状态，以及客户端、服务端两个端点的 `Established` 状态。服务端应用仍停在 `input`，这组系统状态直接证明内核已先行完成握手并把连接放入队列。

这个实验把三个时刻分得很清楚：

1. `listen` 让内核具备被动建立连接的能力；
2. TCP 握手由两端内核推进；
3. `accept` 让服务端应用取得一个已连接 Socket。

实验结束后可以移除这行 `input`，恢复自动运行。

## 理解检查

1. `listen` 返回的 Socket 承担什么职责？客户端专用 Socket 来自哪个调用？
2. 阻塞模式下，哪个调用会在已完成连接队列为空时等待？
3. 客户端的 `connect` 已经返回，服务端应用稍后才调用 `accept`，系统通过什么机制衔接这两个时刻？
4. `sendall` 返回 `None` 表达了哪一层的成功？
5. 为什么 `recv_exact` 使用循环？

### 参考答案

1. 此时得到的是监听 Socket；客户端专用 Socket 由 `accept` 返回。
2. `accept` 会等待队列中出现可领取的已完成连接。
3. 内核可以先完成握手并让连接进入队列，服务端应用稍后领取。
4. 完整字节序列已成功提交给本地 Socket；应用处理结果由应用协议继续表达。
5. 单次 `recv` 允许返回少于请求数量的字节，循环把字节流拼成完整长度字段和消息体。

## 本章小结

服务端通过 `bind` 确定本地端点，通过 `listen` 进入被动监听状态，通过 `accept` 取得专用于一位客户端的新 Socket。客户端通过 `connect` 建立自己的本地、远端关联。应用使用带长度字段的帧、循环 `recv` 与 `sendall` 在字节流上可靠地表达一条消息。下一章会捕获这些调用背后的线上报文。

[上一章：第4章 Socket、地址、端口和四元组](./01-socket-address-port-four-tuple.md) · [所属篇：第二篇](../02-connection.md) · [下一章：第6章 第一次抓包](./03-first-capture.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
