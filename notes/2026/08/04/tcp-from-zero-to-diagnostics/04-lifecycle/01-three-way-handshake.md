# 第15章 三次握手

当客户端调用 `connect` 时，内核需要为这条双向字节流协商好起始位置。服务端不仅要确认这个连接请求依然有效，也要为自己的发送方向确定一个起始序列号（ISN）。简单来说，三次握手的核心目的就是同步双方的初始序列号、接收能力以及连接状态。

## 先预测一次本地连接

假设服务端已经监听 `127.0.0.1:18080`，客户端临时端口（Ephemeral Port）为 `53000`。请先预测：

- 服务端还没有调用 `accept` 时，握手能否完成？
- `connect` 返回和 `accept` 返回，哪一个一定先出现在应用日志里？
- 第三个报文只携带 ACK 时，它会不会消耗一个序列号？

内核会自动处理处于监听状态的 Socket 的握手过程。事实上，在应用程序调用 `accept` 之前，三次握手可能就已经在内核中完成了。另外，受制于操作系统的进程调度机制，`connect` 和 `accept` 谁先返回并没有固定的跨平台规律，这就导致它们在应用日志中的先后顺序是不确定的。如果第三次握手的纯 ACK 报文不携带 SYN、FIN 标志位，也没有应用数据，它就不会消耗序列号。

## 用两个序列号空间理解握手

TCP 是全双工协议，因此每条连接都包含两个独立的序列号（Sequence Number）空间。设客户端初始序列号为 $C$，服务端初始序列号为 $S$。需要注意的是，SYN 标志位会消耗一个序列号，所以在对其进行确认（ACK）时，确认号需要加一。

### 第一步：客户端发送 SYN

```text
客户端 -> 服务端
Flags = SYN
Seq   = C
Ack   = 无有效含义（ACK 标志未置位）
Len   = 0
```

客户端从 `CLOSED` 状态进入 `SYN-SENT`（同步已发送）。发送状态中的下一个序列号变为：

$$
\mathrm{SND.NXT}=C+1
$$

服务端收到可接受的 SYN 后，记录下客户端的初始序列号，并期望客户端下一次发送的数据从 `C + 1` 开始，同时在内核中为这个半连接创建对应的数据结构。此时该连接的状态变为 `SYN-RECEIVED`（同步收到）。而监听 Socket 本身依然保持在 `LISTEN` 状态。

### 第二步：服务端发送 SYN+ACK

```text
服务端 -> 客户端
Flags = SYN, ACK
Seq   = S
Ack   = C + 1
Len   = 0
```

这个报文同时传达了两层含义：服务端通过 `Seq = S` 宣告自己的初始序列号，同时通过 `Ack = C + 1` 确认已收到客户端的 SYN。同样地，由于发送了 SYN，服务端自己的下一个序列号变成了 `S + 1`。

客户端收到该报文后，会检查确认号 `Ack` 是否正确回应了自己发出的 SYN。校验通过后，客户端就能确认服务端成功接收了连接请求，并且得知了服务端的数据发送起点 $S$。

### 第三步：客户端发送 ACK

```text
客户端 -> 服务端
Flags = ACK
Seq   = C + 1
Ack   = S + 1
Len   = 0
```

客户端发送 ACK 确认服务端的 SYN，随后进入 `ESTABLISHED`（已建立连接）状态。服务端收到这个 ACK 后，确认自己的 SYN 已被对方妥善接收，于是也进入 `ESTABLISHED` 状态。值得一提的是，第三次握手的 ACK 报文是允许携带应用数据的。假设它携带了 $L$ 字节数据，其起始序列号依然是 `C + 1`，但发送完毕后，客户端的下一个序列号将推进到 `C + 1 + L`。

## 带具体数字逐步计算

假设抓包首部显示：

- 客户端绝对初始序列号 $C=2\,105\,000\,000$；
- 服务端绝对初始序列号 $S=3\,700\,000\,000$。

那么三步握手为：

| 方向 | Flags | Seq | Ack | 发送后下一 Seq |
| --- | --- | ---: | ---: | ---: |
| 客户端 → 服务端 | SYN | 2,105,000,000 | — | 2,105,000,001 |
| 服务端 → 客户端 | SYN, ACK | 3,700,000,000 | 2,105,000,001 | 3,700,000,001 |
| 客户端 → 服务端 | ACK | 2,105,000,001 | 3,700,000,001 | 2,105,000,001 |

如果在第三步完成之后，客户端发送了一个 12 字节的请求，该数据段（Segment）的首部将包含 `Seq = 2,105,000,001`、`Ack = 3,700,000,001`。服务端完整收到这 12 字节后，回复的累计确认号（Cumulative ACK）将是 `Ack = 2,105,000,013`。

Wireshark 默认启用相对序列号时，常把两个 SYN 显示为 `Seq=0`，把后续位置显示为 `Seq=1`。这只是抓包工具为了方便人类阅读而做的一种相对化处理（Relative Sequence Numbers）。展开 TCP 字段或关闭相对序列号选项，就可以查看线上首部中真实的 32 位绝对序列号（Absolute Sequence Numbers）。底层计算逻辑始终保持一致。

## 三个报文分别建立了哪些事实

从本质上看，三次握手是一次严谨的状态同步过程，每个报文都在确立特定的网络事实：

1. 服务端收到 SYN，获得了客户端初始序列号，证明客户端到服务端的网络链路是通的。
2. 客户端收到 SYN+ACK，证明服务端成功接收了客户端的 SYN，同时获得了服务端的初始序列号（证明服务端到客户端的链路也是通的）。
3. 服务端收到最后的 ACK，证明客户端也成功接收了服务端的 SYN。至此，双方的收发起点达成共识，双向通信链路确认可用。

此外，三次握手机制能有效防止网络中延迟的旧连接请求（历史报文）对新连接造成干扰。需要澄清的是，TCP 握手仅负责建立传输层连接，并不提供身份认证和数据加密，这些安全职责是由上层的 TLS 协议或应用层认证机制来完成的。

## SYN 中还协商什么

除了交换序列号，TCP 还会利用 SYN 和 SYN+ACK 报文中的 TCP 选项（Options）或控制标志位来协商双方的通信能力。常见的协商参数包括：

- **MSS**：最大段大小（Maximum Segment Size）。发送方借此声明自己在此连接上愿意接收的最大 TCP 数据载荷大小（不含 TCP 和 IP 头部）。客户端与服务端声明的值可以不同。
- **Window Scale**：窗口缩放因子。因为 TCP 头部的 Window 字段只有 16 位（最大 65535 字节），在现代高速网络中远远不够。双方会在握手时声明各自的缩放因子，后续通信中的 Window 值都需要乘以这个因子才能得出真正的接收窗口大小。
- **SACK Permitted**：选择性确认允许（Selective Acknowledgment Permitted）。发送 SYN 的一端借此表明自己支持处理对端未来发送的 SACK 选项。一旦双方都声明支持，后续如果出现丢包，接收方就可以用 SACK 明确报告哪些非连续的数据块已经收到，从而避免发送方盲目重传所有数据。
- **Timestamp**：时间戳。常用于更精确的 RTT（往返时间）测量以及 PAWS（防止序列号回绕，Protect Against Wrapped Sequences）。是否启用取决于操作系统的具体实现和配置。
- **ECN 相关标志**：显式拥塞通知（Explicit Congestion Notification）。如果双方和沿途路由器都支持，可以在连接建立阶段协商开启该功能，以便在网络拥塞时提前通过标记而不是丢包来通知端点减速。

需要注意的是，许多选项（如 MSS）是具有方向性的。客户端 SYN 中的 MSS 声明的是客户端的接收能力，而服务端 SYN+ACK 中的 MSS 声明的是服务端的接收能力。这些基础能力在三次握手期间敲定后，普通的 TCP 数据段不会再去重新协商它们。

## 可控 Python 实验

保存以下服务端为 `handshake_server.py`：

```python
import socket
import time

ADDR = ("127.0.0.1", 18080)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(ADDR)
    listener.listen(8)
    print("LISTEN", listener.getsockname(), flush=True)
    print("sleep 10s before accept", flush=True)
    time.sleep(10)
    conn, peer = listener.accept()
    with conn:
        print("ACCEPT", conn.getsockname(), peer, flush=True)
        time.sleep(10)
```

保存客户端为 `handshake_client.py`：

```python
import socket
import time

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    print("before connect", flush=True)
    sock.connect(("127.0.0.1", 18080))
    print("CONNECT returned", sock.getsockname(), sock.getpeername(), flush=True)
    time.sleep(15)
```

先启动服务端，再启动客户端。服务端特意在 `accept` 前暂停 10 秒。此时客户端的 `connect` 通常已经返回，系统里也已经存在 `ESTABLISHED` 连接。这直接证明了：内核网络协议栈会自动处理并完成三次握手，随后才将已经建立好（`ESTABLISHED`）的连接放入全连接队列，供应用层的 `accept` 调用去提取。

Windows PowerShell 中连续观察：

```powershell
while ($true) {
    Clear-Host
    Get-NetTCPConnection |
        Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 } |
        Sort-Object LocalPort, RemotePort |
        Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State
    Start-Sleep -Milliseconds 250
}
```

Linux 或 WSL 中可用：

```bash
watch -n 0.2 "ss -tanp | grep ':18080'"
```

在本地回环网络中，三次握手极快，通常会在一次 250 毫秒的查询间隔内就已完成，`SYN-SENT` 与 `SYN-RECEIVED` 状态可能只在抓包中短暂出现。如果我们在测试网络中设置一个会“静默丢弃 SYN”的黑洞 IP，你就能用上述命令观察到客户端长时间停留在 `SYN-SENT` 状态，并触发操作系统的 SYN 重传机制。而如果目标主机存在但对应端口未监听（明确拒绝连接），服务端通常会立即返回一个 RST（复位）报文，我们将在第19章详细探讨这种现象。

## Wireshark 中应当看到什么

在回环接口开始捕获后，使用显示过滤器：

```text
tcp.port == 18080
```

依次检查：

1. SYN 的源端口是客户端临时端口，目标端口是 18080。
2. SYN+ACK 报文的源 IP、源端口与目标 IP、目标端口（即四元组）与第一步完全相反，确认号 Ack 等于客户端 SYN 的 Seq 加一。
3. 最终 ACK 的确认号 Ack 等于服务端 SYN 的 Seq 加一。
4. 比较两个 SYN 报文中的 MSS、Window Scale、SACK Permitted 与 Timestamp 选项。
5. 你可以尝试将客户端应用日志输出的 `CONNECT returned` 时间、服务端 `ACCEPT` 的时间，与抓包里三次报文的绝对时间戳进行对比对齐。

值得补充的是，在特定机制（如 TCP Fast Open，TFO）的支持下，SYN 或 SYN+ACK 也是允许携带应用数据的。不过在我们上述的标准实验中并未立刻发送数据，这反而能让你看到最纯粹的序列号推进过程。

## 平台与观察边界

- 对于阻塞型（Blocking）Socket，`connect` 通常会在三次握手成功或者确立失败（如超时、收到 RST）后才返回。其完成语义由 Socket API 与操作系统实现共同决定。
- `accept` 的职责是从内核的“已完成连接队列（Accept Queue）”中取出一个已经建立好的 Socket。原来的监听 Socket 不受影响，继续处理其他新的连接请求。
- 三次握手期间的 SYN 重传间隔、最大重传次数、半连接队列与全连接队列的结构以及超时时间，这些都属于操作系统的具体实现和配置细节，不同平台会有所差异。
- 如果在本地回环接口（Loopback）抓包，你可能会看到操作系统虚拟出来的链路层头部（如 Null/Loopback），但这不影响我们对 TCP 字段和网络四元组的分析。
- 抓包工具（如 Wireshark）只能看到物理或虚拟网卡上的“线缆真实流量”。当你需要排查疑难杂症时，必须结合 `ss`/`netstat` 的状态查询以及应用程序日志，才能还原内核协议栈的完整上下文。

## 理解检查

1. 客户端 SYN 的 `Seq=9000`，服务端 SYN+ACK 的 `Seq=40000`。请写出第二步和第三步的 Ack。
2. 第三个 ACK 携带 30 字节数据时，客户端下一个 Seq 是多少？
3. 服务端应用仍在 `accept` 前暂停，系统为何可以显示已建立连接？
4. 客户端 SYN 中 MSS 为 65495，这个值约束哪个方向的数据段？
5. 抓包只有 SYN 与两次 SYN+ACK，最直接的待验证推断是什么？还需要收集哪类系统或应用证据？

**答案要点：**

1. 第二步服务端发出的确认号 `Ack = 9001`，第三步客户端发出的确认号 `Ack = 40001`。
2. 第三个 ACK 的当前序列号是 9001，携带 30 字节数据后，客户端下一次发送数据的起始序列号将推进到 `9031`。
3. 因为 TCP 三次握手由系统内核的协议栈自动完成，内核将握手成功的连接放入队列等待应用程序调用 `accept` 来提取，所以即使 `accept` 未被调用，系统层面该连接也早已是 `ESTABLISHED` 状态。
4. 客户端的 MSS 声明的是它自己作为接收方的接收能力，因此这个值约束的是服务端发送给客户端的数据段（Segment）大小。
5. 最直接的推断是：服务端的 SYN+ACK 送达客户端后，客户端回复的最后一次 ACK 在返回服务端的网络链路中丢失了（或者客户端压根没发）。此时还需要结合客户端的网络状态（例如是否已进入 `ESTABLISHED`）、路由配置或防火墙日志等双端证据来进行综合排查。

## 本章小结

- 握手同步两个方向的初始序列号并建立双方一致的连接状态。
- SYN 消耗一个序列号，纯 ACK 不消耗序列号。
- `Ack=C+1` 与 `Ack=S+1` 都能从首部直接验证。
- 内核可以在 `accept` 前完成握手，API 日志顺序还受进程调度影响。
- SYN 选项按方向表达 MSS、窗口缩放、SACK、时间戳和 ECN 等能力。

## 参考资料

- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)，第3.5节给出连接建立与序列号同步的规范描述。
- [Python socket 文档](https://docs.python.org/3/library/socket.html)
- [Get-NetTCPConnection 文档](https://learn.microsoft.com/powershell/module/nettcpip/get-nettcpconnection)

## 导航

- [上一章：第14章 TCP Options](../03-header/08-options.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第16章 TCP 连接状态机](./02-state-machine.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
