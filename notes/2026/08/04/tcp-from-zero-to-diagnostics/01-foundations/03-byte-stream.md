# 第3章 TCP 是字节流

假设发送方连续发送了三次数据，内容依次是 `ABC`、`DE` 和 `FGHI`。但在接收方看来，读取的情况完全不可预测：可能一次性读出完整的 `ABCDEFGHI`，也可能分三次读到 `ABCD`、`EFGH`、`I`，甚至还会出现其他千奇百怪的分组方式。

不过，不管怎么切分，这些数据的**先后顺序绝对不会变**：

```text
A B C D E F G H I
```

这就是“字节流”（Byte Stream）最核心的特点。TCP 只管一件事：保证这些字节按顺序、不丢失地送到对端。至于怎么从这一长串连绵不断的字节中把具体的“消息”抠出来，那是应用层该操心的事情。

## 先做一个预测

发送方的代码如下：

```python
sock.sendall(b"ABC")
sock.sendall(b"DE")
sock.sendall(b"FGHI")
```

考考你，在接收端，下面哪种读取结果符合 TCP 的行为规范？

```text
结果一：b"ABC" | b"DE" | b"FGHI"
结果二：b"ABCDE" | b"FGHI"
结果三：b"AB" | b"CDEF" | b"GHI"
结果四：b"ABCDEFGHI"
```

答案是：**只要每次调用 `recv` 时指定的读取上限足够大，这四种结果都有可能发生。**

TCP 并不关心你调用了几次 `send`，它只在乎字节本身的顺序。发送端的调用次数和消息边界，在到达接收端时早就被抹平了。接收端能看到的，仅仅是当前缓冲区里准备好的那部分连续字节。

## 一次 recv 究竟返回什么

在阻塞模式下，调用 `recv(n)` 的具体含义其实非常简单：

- 最多读取 `n` 个字节。
- 只要缓冲区里有数据，哪怕只有 1 个字节，`recv` 也会立刻返回。
- 读到的内容严格按照发送方的写入顺序。
- 如果收到了对端发来的正常的关闭请求（有序的 FIN 报文），且缓冲区的数据已经全被读完，`recv` 会返回 `b""`（空字节串），表示遇到了文件结束符（EOF）。
- 至于超时、连接重置等各种网络错误，系统通常会直接抛出异常，而不是通过返回值来表达。

这里的参数 `n` 仅仅是个上限，不是硬指标。所以在实际开发中，我们通常需要在一个循环里不断调用 `recv`，把读到的数据拼接起来，直到攒够协议要求的数据长度。就算发送端一次性暴力塞了 1 MB 的数据，接收端也完全有可能需要通过几十上百次微小的 `recv` 才能把它们收完。

类似地，底层的 `send` 其实也允许“写一半”，它的返回值就代表这次成功塞进本地发送缓冲区的数据量。好在 Python 提供了 `sendall`，它在底层帮你写了一个循环，会死磕到底，直到所有数据都成功交给操作系统的 Socket，或者彻底报错为止。但无论怎样，`sendall` 也只是在默默地堆砌字节，它不会帮你标记“这是一条完整的消息”。

## 为什么边界会变化

从发送方敲下 `send` 到接收方拿到 `recv` 结果，数据这一路上就像进了搅拌机，会被各种机制反复拆解和重组：

1. 发送的字节首先会被塞进本机的 Socket 发送缓冲区。
2. TCP 协议栈会根据最大报文段长度（MSS）、拥塞窗口（Congestion Window）、接收窗口（Receive Window）以及发送策略，把缓冲区里的数据切分成一个个 TCP 报文段（Segment）。
3. 随后 IP 层把报文段扔进网络，路上可能会遭遇延迟、丢包、乱序，甚至还会触发重传。
4. 接收端的 TCP 收到乱七八糟的报文段后，得乖乖按序列号（Sequence Number）把它们重新排好序，拼成连续的字节流，放进接收缓冲区。
5. 最后，接收进程什么时候能抢到 CPU 时间片，以及它每次传给 `recv` 的参数 `n` 有多大，都会直接决定它最终能摸出多大一块数据。
6. 顺带一提，网卡的硬件特性（比如 TSO/GRO 分段与合并机制）以及你的抓包位置，还会影响你在 Wireshark 里看到的报文大小。

正因为有着这么多变数，我们需要认清三种截然不同的“边界”：

| 边界类型 | 由谁决定 | 是否代表业务消息 |
| --- | --- | --- |
| `send` 调用的边界 | 发送端的应用程序 | 仅当应用层协议有明确约定时才算数 |
| TCP 报文段（Segment）边界 | 操作系统 TCP 实现与当前网络状况 | 否，这纯粹是网络层的运输载体 |
| `recv` 返回的边界 | 接收端的调度时机、可用数据量与 API 参数 | 否，这只是本次系统调用的随机结果 |

在本地测试时，这三个边界偶尔会非常默契地重合，给你一种“发送和接收天生一对齐”的错觉。但这真的只是个巧合。优秀的协议设计必须拥抱“连续字节流”这个残酷现实，这样你的代码才能在面对高延迟、高负载、不同的操作系统以及海量数据时稳如老狗。

## 拆包与粘包怎样理解

在国内的工程讨论中，大家特别喜欢用“拆包”和“粘包”这两个词：一条完整的消息被砍成几半，需要读好几次才能凑齐，叫“拆包”；多条独立的消息挤在同一次 `recv` 结果里，叫“粘包”。

本质上，这两个词描绘的是业务逻辑上的“消息”和系统调用返回的“无意义字节”之间的错位感。但这并不是 TCP 的 Bug，因为 TCP 从来没有承诺过要帮你维护消息边界。

想要彻底摆脱这两个词的困扰，最标准的做法是**定义好应用层的分帧（Framing）规则，然后用一个循环去细水长流地解析字节流**：

- 如果手头的字节还不够拼成一帧消息，那就耐心等待，继续 `recv`。
- 如果刚好拼出了一帧完整的消息，那就麻溜地把它剥离出来交给业务逻辑。
- 如果剥离出完整一帧后，后面还拖泥带水地跟着下一帧的开头，那就把这部分“尾巴”妥善保存在内存里，留给下一轮循环继续处理。

一个真正靠谱的解析器，应该能从容应对“只读到半个报文头”、“恰好读到完整一帧”、“读到一帧半”以及“一坨消息结伴而来”等各种奇葩输入。

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

咱们跑几轮代码看看。每轮都记得先启服务端，后启客户端。

第一轮，我们不设任何发送间隔，并给客户端一个相当宽裕的读取上限（1024 字节）：

```powershell
python .\stream_server.py 0
python .\stream_client.py 1024
```

第二轮，我们强行给服务端加点“卡顿”——每次发送后硬核休眠 300 毫秒，同时把客户端的读取上限卡得死死的（4 字节）：

```powershell
python .\stream_server.py 0.3
python .\stream_client.py 4
```

第三轮，咱们恢复服务端的疯狂手速（零间隔），但把客户端的上限进一步榨干到 2 字节：

```powershell
python .\stream_server.py 0
python .\stream_client.py 2
```

你可以同时打开 Wireshark 抓一下本地回环接口的数据包，填入显示过滤器：

```text
tcp.port == 9023
```

### 预期现象

不管过程多么曲折，这三轮跑下来，最终拼接完成的 `joined` 结果毫无例外都会是 `b'ABCDEFGHI'`，总长度稳如泰山地保持在 9 字节。

但每轮打印出的 `recv` 分组细节肯定会五花八门：较小的 `chunk_size`（比如第三轮）会倒逼你只能一次次像蚂蚁搬家一样读取；而服务端的休眠间隔（比如第二轮），则大大增加了客户端每次恰好完整读出单次 `sendall` 内容的概率。

如果你留意了 Wireshark，还会发现真正承载数据的 TCP 报文段数量也在上下横跳。请把这三组数据的指标摆在一起看看：服务端的 3 次 `sendall` 长度、客户端每次 `recv` 读出的长度、Wireshark 里每一帧的 `tcp.len`，以及最终拼接的字符串。你会得出一个深刻的结论：**能够稳定一致的只有那串连续的字节总序列，至于中间怎么分组，全看老天爷的心情，纯属当次运行的随机观察结果。**

## PSH 标志的准确位置

在 Wireshark 抓包时，你经常会看到 TCP 头部带着一个亮眼的 `PSH` 标志。这个标志的意思是“推（Push）”——它在催促接收端的协议栈及早把目前攒下的数据推送给应用层。

但这玩意儿对咱们写代码用处不大。绝大多数主流的 Socket API 根本不会把“收到 PSH 标志”当成一个独立的事件暴露给你，系统也完全有权利根据自身的缓冲和调度策略来决定何时交付数据。

所以千万别产生错觉，觉得可以用 PSH 来切分消息边界。哪怕某次测试中，你的每条应用层消息都无比凑巧地跟着一个 PSH 标志结束，你的业务代码也依然要老老实实地去按照固定长度、分隔符或长度字段来解析。

## 四种常见分帧方案

既然 TCP 甩手不管，应用层该如何优雅地划分消息（分帧）呢？业界主流有这四种套路：

### 固定长度

大家商量好，每条消息雷打不动就是那么多字节，例如每条记录固定 64 字节。这种做法解析起来极其粗暴简单，非常方便随机定位。但缺点也很致命：如果有些消息非常短，你就得塞一堆无效字节进去占位，极其浪费空间；遇到超长内容只能拆分或者换地方存。

### 分隔符

在每一条消息的尾巴上加一个特殊字符作为句号，比如很多文本协议最爱用的换行符。用这种方案，你不仅得定义当正文中万一也包含分隔符时该怎么转义，还必须设置一个防身用的“单帧最大长度”——万一持续遭到没有分隔符的恶意输入，你不加限制的话分分钟把内存撑爆。

### 长度字段加数据

这是业界最经典的做法：在消息的开头先发一个固定大小的报文头，报文头里清清楚楚地写明接下来的正文有多少字节。解析器先精准读出首部，算出尺寸，接着再精准读取相应大小的正文。RPC 框架和各种通用的二进制协议基本上都在用这招。

### TLV

TLV 依次编码 Type（类型）、Length（长度）和 Value（具体内容）。它特别适合那些字段很多、需要不断迭代扩展的复杂协议。不过写这种解析器需要更加小心，同样要防范长度上限、未知的类型策略以及整数溢出等问题。

| 分帧方案 | 核心优势 | 设计时容易踩的坑 |
| --- | --- | --- |
| 固定长度 | 解析极其粗暴简单，边界恒定 | 空间浪费严重，版本扩展困难 |
| 分隔符 | 文本可读性拉满 | 恶心的转义逻辑、必须限制最大长度、编码问题 |
| 长度字段 | 性能高，通吃一切二进制数据 | 别忘了统一大小端字节序、设定上限、确保读完整 |
| TLV | 扩展性无敌，字段灵活应对 | 类型注册表维护、嵌套层数限制、长度校验 |

## 实现 read_exactly

对于“长度字段加数据”这种协议，我们手头最缺的一个基础组件就是 `read_exactly`（精确读取 N 字节）。因为一次 `recv` 根本不靠谱，我们必须用个循环把多次读取的碎肉一点点拼起来：

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

代码里的 `!I` 代表使用“网络字节序”（大端序）的 4 字节无符号整数。这里的长度字段记录的是**正文的字节数**！如果是 UTF-8 文本，切记一定要先执行 `encode("utf-8")`，然后再去计算 `len(payload)`。

代码中 `MAX_FRAME_SIZE` 这个最大帧限制是守护你系统安全的最后一道防线。接收方一定要先验证首部里声明的长度，合格了再去分配或累加内存。当流在帧边界处正常结束时，`recv_frame` 优雅地返回 `None`；但凡在读首部或者读正文的过程中读到一半断开了，它都会抛出 `EOFError`，大声报警提示消息被截断。

### 连续两帧怎样解析

假设发送方瞬间发出两帧数据：

```python
send_frame(sock, "你好".encode("utf-8"))
send_frame(sock, b"second message")
```

在线上真实环境中，这两帧可能会被装进同一个 TCP 报文段，也可能随便哪一帧被拆分到了多个报文段里。不管网络怎么作妖，由于接收方是连续调用两次 `recv_frame`，每次都一板一眼地先取 4 字节算出长度，再取指定数量的字节，凭借这套严丝合缝的逻辑，它百分之百能把原始消息毫发无损地恢复出来。

## 理解检查

1. 当 `recv(4096)` 只返回了 120 字节时，这个返回值说明了什么？
2. 发送方连调 3 次 `sendall`，结果接收方用 1 次 `recv` 就把所有数据拿走了，这种现象符合 TCP 语义吗？
3. 明明只是读个 4 字节的定长首部，为什么应用层还需要写个循环去读？
4. 如果正文是 UTF-8 文本，帧长度应该依据字符数还是编码后的字节数？
5. 长度前缀解析器为什么要设置最大帧长度？
6. 在正常关闭路径中，`recv` 返回 `b""` 是在向你传达什么信息？

## 本章小结

对于应用层开发者而言，TCP 呈现的就是一条连续、有序的字节长河。`send` 调用的大小、TCP 报文段的切割以及 `recv` 捞取的数据量，这三者分别处于不同的观察维度，它们的分组完全可以各自变化。优秀的应用程序，懂得通过固定长度、分隔符、长度字段或 TLV 等手段自己建立消息边界，并始终坚持用循环读取来应对任何合法的随机分组。

至此，我们的第一篇基础理论部分算是彻底拉通了：从一次请求怎样抵达远端应用，到 TCP 怎样维护双向有序字节，再到应用层怎样从字节流恢复消息，这幅宏伟的全景图已经完整铺开。第二篇将把这些概念具体落实到 Socket、四元组、最小的客户端与服务端上，我们还会带你亲手拆解第一份完整的 TCP 抓包。

---

[上一章：第2章 TCP 提供怎样的通信能力](./02-tcp-capabilities.md) · [所属篇：第一篇](../01-foundations.md) · [下一章：第4章 Socket、地址、端口和四元组](../02-connection/01-socket-address-port-four-tuple.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
