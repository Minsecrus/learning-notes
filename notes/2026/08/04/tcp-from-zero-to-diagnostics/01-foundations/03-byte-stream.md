# 第3章 TCP 是字节流

假设发送方连续执行三次发送，内容依次为 `ABC`、`DE`、`FGHI`。接收方可能一次读到 `ABCDEFGHI`，也可能读到 `ABCD`、`EFGH`、`I`，还可能得到更多种分组。所有结果都保持同一条字节序列：

```text
A B C D E F G H I
```

这就是字节流的核心。TCP 负责顺序与可靠交付，应用负责从连续字节中识别一条条消息。

## 先做一个预测

发送方执行：

```python
sock.sendall(b"ABC")
sock.sendall(b"DE")
sock.sendall(b"FGHI")
```

请判断下面哪些读取结果符合 TCP 语义：

```text
结果一：b"ABC" | b"DE" | b"FGHI"
结果二：b"ABCDE" | b"FGHI"
结果三：b"AB" | b"CDEF" | b"GHI"
结果四：b"ABCDEFGHI"
```

在每次 `recv` 的最大长度足够时，四种都可能出现。TCP 字节流记录字节及其顺序；发送调用的边界由应用协议另行编码。接收方观察当前可读取的连续字节。

## 一次 recv 究竟返回什么

阻塞模式下调用 `recv(n)`，含义可以概括为：

- 最多返回 `n` 字节。
- 只要已有一部分字节可交付，调用就可以返回。
- 返回内容遵循发送方写入的字节顺序。
- 连接收到有序 FIN 且缓冲区已有字节全部读完后，返回 `b""` 表示该方向到达 EOF。
- 超时、重置和其他错误通过异常报告。

`n` 是上限。应用常常需要循环读取，累计到协议所需长度。即使发送方一次提交 1 MiB，接收方也完全可以经历许多次较小的 `recv`。

`send` 也允许部分写入：返回值表示本次进入本地发送流程的字节数。Python 的 `sendall` 会在内部持续发送，直到全部数据交给本地 Socket 或发生异常。它写入连续字节，消息标记由应用协议另行编码。

## 为什么边界会变化

从应用写入到应用读取之间，有多个地方会重新组合数据：

1. 发送字节先进入本机 Socket 发送缓冲区。
2. TCP 根据 MSS、拥塞窗口、接收窗口和当前发送策略选择报文段载荷。
3. IP 把各报文段交给网络，路径中可能出现延迟、丢失、乱序与重传。
4. 接收 TCP 按序列号整理连续字节，放入接收缓冲区。
5. 接收进程何时得到 CPU、每次传给 `recv` 多大的上限，也会影响返回分组。
6. 网卡分段卸载、接收合并和抓包位置会影响 Wireshark 呈现的报文大小。

因此有三类边界值得分别记录：

| 边界 | 由谁决定 | 是否代表应用消息 |
| --- | --- | --- |
| `send` 调用边界 | 发送应用 | 仅在应用协议赋予含义时成立 |
| TCP 报文段边界 | TCP 实现与网络条件 | TCP 运输分段 |
| `recv` 返回边界 | 当前可用数据、参数与调度 | 本次 API 读取结果 |

它们可以在某次本地实验中恰好重合。协议设计仍应以连续字节为基础，这样程序在延迟、负载、平台和数据规模变化时仍能正确解析。

## 拆包与粘包怎样理解

工程讨论常用“拆包”表示一条应用消息分多次读取，用“粘包”表示多条应用消息在一次读取中一起出现。这两个词描述了应用消息与读取结果之间的关系。

更精确的处理方式是先定义应用层分帧规则，再用循环解析字节流：

- 当前字节少于一帧所需长度时，继续读取。
- 当前字节包含完整一帧时，取出这一帧。
- 当前字节还包含下一帧开头时，保留剩余部分继续解析。

一套可靠的解析器应当同时覆盖“半个首部”“完整一帧”“一帧加下一帧的一部分”“多帧连续到达”四类输入。

## 实验 让读取边界发生变化

将下面代码保存为 `stream_server.py`：

```python
import socket
import sys
import time

HOST = "127.0.0.1"
PORT = 9023
gap = float(sys.argv[1]) if len(sys.argv) > 1 else 0.0
messages = [b"ABC", b"DE", b"FGHI"]

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind((HOST, PORT))
    listener.listen()
    print(f"listening on {HOST}:{PORT}; gap={gap}")

    conn, peer = listener.accept()
    with conn:
        print(f"accepted {peer}")
        for index, message in enumerate(messages, start=1):
            conn.sendall(message)
            print(f"sendall #{index}: {message!r}")
            if gap:
                time.sleep(gap)
        conn.shutdown(socket.SHUT_WR)
```

将下面代码保存为 `stream_client.py`：

```python
import socket
import sys

HOST = "127.0.0.1"
PORT = 9023
chunk_size = int(sys.argv[1]) if len(sys.argv) > 1 else 1024

with socket.create_connection((HOST, PORT)) as sock:
    pieces = []
    while True:
        chunk = sock.recv(chunk_size)
        if chunk == b"":
            print("recv returned EOF")
            break
        pieces.append(chunk)
        print(f"recv({chunk_size}) -> {chunk!r}")

joined = b"".join(pieces)
print(f"joined={joined!r}, total={len(joined)}")
```

每轮先启动服务端，再启动客户端。第一轮使用零发送间隔和较大的读取上限：

```powershell
python .\stream_server.py 0
python .\stream_client.py 1024
```

第二轮让服务端每次发送后暂停 300 ms，同时把读取上限设为 4：

```powershell
python .\stream_server.py 0.3
python .\stream_client.py 4
```

第三轮恢复零发送间隔，并把读取上限设为 2：

```powershell
python .\stream_server.py 0
python .\stream_client.py 2
```

同时在 Wireshark 回环接口捕获，显示过滤器为：

```text
tcp.port == 9023
```

### 预期现象

三轮的 `joined` 都应是 `b'ABCDEFGHI'`，总长度都是 9。每轮打印的 `recv` 分组可能变化：较小的 `chunk_size` 会强制每次返回受较低上限约束，发送间隔常会提高逐条读取的观察概率。

Wireshark 中携带数据的报文段数量也可能变化。请把三组数据并排记录：三次 `sendall` 的长度、每次 `recv` 返回长度、每个 `tcp.len`、最终拼接结果。能够稳定一致的是字节总序列，分组属于当次运行的观察结果。

## PSH 标志的准确位置

抓包中常会看到 PSH。它与 TCP 的 Push 功能有关，提示接收实现及时把当前可交付数据推进给应用。常见 Socket API 很少把 PSH 作为独立事件暴露给程序，系统也可以按照自身缓冲和调度策略交付数据。

应用协议仍通过自身格式识别消息边界。即使某次抓包中的每条消息恰好结束于 PSH，接收代码也应继续按照固定长度、分隔符或长度字段解析。

## 四种常见分帧方案

### 固定长度

每帧恰好占用约定字节数，例如每条记录固定 64 字节。解析非常直接，也便于随机定位。字段内容长度变化大时，需要填充空间或把可变内容放到其他位置。

### 分隔符

每帧以特定字节结束，例如文本协议中的换行符。解析器要定义正文中出现分隔符时的转义规则，还要设置单帧最大长度，防止持续输入耗尽内存。

### 长度字段加数据

先发送固定大小的首部，首部写明后续正文的字节数。解析器先精确读取首部，再精确读取正文。二进制协议和许多通用消息协议都适合这种方式。

### TLV

TLV 依次编码 Type、Length、Value。Type 表明字段含义，Length 给出 Value 长度。它适合包含多种字段、需要扩展能力的协议。解析器同样需要长度上限、未知类型策略和整数溢出检查。

| 方案 | 优点 | 设计重点 |
| --- | --- | --- |
| 固定长度 | 解析简单，边界恒定 | 空间利用与版本扩展 |
| 分隔符 | 文本可读性好 | 转义、最大长度、编码 |
| 长度字段 | 高效支持任意二进制 | 字节序、上限、完整读取 |
| TLV | 字段扩展灵活 | 类型注册、嵌套深度、长度校验 |

## 实现 read_exactly

长度前缀协议最需要的基础函数是“精确读取 N 字节”。它会把多次 `recv` 的结果累积起来：

```python
import socket
import struct

HEADER_SIZE = 4
MAX_FRAME_SIZE = 1024 * 1024


def read_exactly(sock: socket.socket, size: int, *, allow_clean_eof: bool = False):
    data = bytearray()
    while len(data) < size:
        chunk = sock.recv(size - len(data))
        if chunk == b"":
            if allow_clean_eof and len(data) == 0:
                return None
            raise EOFError(
                f"stream ended after {len(data)} of {size} required bytes"
            )
        data.extend(chunk)
    return bytes(data)


def send_frame(sock: socket.socket, payload: bytes) -> None:
    if len(payload) > MAX_FRAME_SIZE:
        raise ValueError("frame is too large")
    header = struct.pack("!I", len(payload))
    sock.sendall(header + payload)


def recv_frame(sock: socket.socket):
    header = read_exactly(sock, HEADER_SIZE, allow_clean_eof=True)
    if header is None:
        return None

    (payload_size,) = struct.unpack("!I", header)
    if payload_size > MAX_FRAME_SIZE:
        raise ValueError(f"declared frame size {payload_size} exceeds limit")
    return read_exactly(sock, payload_size)
```

`!I` 表示网络字节序的 4 字节无符号整数。长度字段记录正文的字节数；对于 UTF-8 文本，应先 `encode("utf-8")`，再计算 `len(payload)`。

最大帧限制是协议安全边界。接收方先验证声明长度，再分配或累计内存。流在帧边界处正常结束时，`recv_frame` 返回 `None`；首部或正文读取到一半时结束，则抛出 `EOFError`，提示消息截断。

### 连续两帧怎样解析

```python
send_frame(sock, "你好".encode("utf-8"))
send_frame(sock, b"second message")
```

线上可能把两帧放进同一个 TCP 报文段，也可能把任意一帧拆到多个报文段。接收方连续调用两次 `recv_frame`，每次先取 4 字节长度，再取指定字节数，因此都能恢复原始消息。

## 理解检查

1. `recv(4096)` 返回 120 字节时，这个返回值说明了什么？
2. 三次 `sendall` 之后，一次 `recv` 读到全部字节是否符合 TCP 语义？
3. 应用为什么需要循环读取 4 字节长度首部？
4. UTF-8 文本的帧长度应依据字符数还是编码后的字节数？
5. 长度前缀解析器为什么要设置最大帧长度？
6. `recv` 返回 `b""` 在正常关闭路径中表示什么？

## 本章小结

TCP 向应用呈现一条连续、有序的字节流。`send` 调用、TCP 报文段和 `recv` 返回分别位于不同观察层次，它们的分组可以各自变化。应用通过固定长度、分隔符、长度字段或 TLV 建立消息边界，并通过循环读取处理任意合法分组。

至此，我们已经拥有第一篇的完整地图：一次请求怎样抵达远端应用，TCP 怎样维护双向有序字节，以及应用怎样从字节流恢复消息。第二篇将把这些概念落实到 Socket、四元组、最小客户端与服务端，以及第一份完整 TCP 抓包。

---

[上一章：第2章 TCP 提供怎样的通信能力](./02-tcp-capabilities.md) · [所属篇：第一篇](../01-foundations.md) · [下一章：第4章 Socket、地址、端口和四元组](../02-connection/01-socket-address-port-four-tuple.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
