# 第15章 三次握手

客户端调用 `connect` 时，内核需要为双向字节流建立一组可验证的起点。服务端也要确认这个连接请求仍然有效，并为自己的发送方向选择起点。三次握手把双方的初始序列号、接收能力和连接状态同步起来。

## 先预测一次本地连接

假设服务端已经监听 `127.0.0.1:18080`，客户端临时端口为 `53000`。请先预测：

- 服务端还没有调用 `accept` 时，握手能否完成？
- `connect` 返回和 `accept` 返回，哪一个一定先出现在应用日志里？
- 第三个报文只携带 ACK 时，它会不会消耗一个序列号？

操作系统通常在监听 Socket 的内核队列中处理握手。握手可以在应用调用 `accept` 之前完成。两个进程的调度顺序会影响日志先后，所以 `connect` 与 `accept` 的返回顺序缺少跨平台的固定关系。纯 ACK 没有 SYN、FIN 和数据时，不推进本端序列号。

## 用两个序列号空间理解握手

TCP 全双工连接包含两个独立的序列号空间。设客户端初始序列号为 $C$，服务端初始序列号为 $S$。SYN 在序列号空间中占一个位置，因此确认 SYN 时需要加一。

### 第一步：客户端发送 SYN

```text
客户端 -> 服务端
Flags = SYN
Seq   = C
Ack   = 无有效含义（ACK 标志未置位）
Len   = 0
```

客户端从 `CLOSED` 进入 `SYN-SENT`。发送状态中的下一个序列号变为：

$$
\mathrm{SND.NXT}=C+1
$$

服务端收到可接受的 SYN 后，记录客户端的起点，期待客户端下次发送 `C + 1`，并为这个连接创建握手中的状态。对应状态为 `SYN-RECEIVED`。监听 Socket 自身继续处于 `LISTEN`。

### 第二步：服务端发送 SYN+ACK

```text
服务端 -> 客户端
Flags = SYN, ACK
Seq   = S
Ack   = C + 1
Len   = 0
```

这里包含两项信息：服务端用 `Seq = S` 公布自己的初始序列号，同时用 `Ack = C + 1` 表明已经收到客户端 SYN。服务端发送 SYN 后，自己的下一个序列号变成 `S + 1`。

客户端收到该报文后检查 `Ack` 是否覆盖自己发出的 SYN。检查通过后，它知道服务端收到了自己的连接请求，也知道服务端发送方向的起点为 $S$。

### 第三步：客户端发送 ACK

```text
客户端 -> 服务端
Flags = ACK
Seq   = C + 1
Ack   = S + 1
Len   = 0
```

客户端确认服务端 SYN，进入 `ESTABLISHED`。服务端收到这个 ACK，确认自己的 SYN 已被覆盖，也进入 `ESTABLISHED`。如果第三个报文还携带 $L$ 字节应用数据，它的起始序列号仍为 `C + 1`，随后客户端的下一个序列号推进到 `C + 1 + L`。

## 带具体数字逐步计算

设抓包首部显示：

- 客户端绝对初始序列号 $C=2\,105\,000\,000$；
- 服务端绝对初始序列号 $S=3\,700\,000\,000$。

那么三步为：

| 方向 | Flags | Seq | Ack | 发送后下一 Seq |
| --- | --- | ---: | ---: | ---: |
| 客户端 → 服务端 | SYN | 2,105,000,000 | — | 2,105,000,001 |
| 服务端 → 客户端 | SYN, ACK | 3,700,000,000 | 2,105,000,001 | 3,700,000,001 |
| 客户端 → 服务端 | ACK | 2,105,000,001 | 3,700,000,001 | 2,105,000,001 |

第三步以后，客户端发送 12 字节请求。数据报文为 `Seq = 2,105,000,001`、`Ack = 3,700,000,001`，服务端完整收到后可累计确认 `Ack = 2,105,000,013`。

Wireshark 默认启用相对序列号时，常把两个 SYN 显示为 `Seq=0`，把后续位置显示为 `Seq=1`。这只是显示变换。展开 TCP 字段或关闭相对序列号选项，可以查看线上首部中的 32 位值。计算方法保持一致。

## 三个报文分别建立了哪些事实

握手是一组可逐包验证的状态同步：

1. 服务端收到 SYN，获得客户端初始序列号，并确认这个方向的报文曾到达服务端。
2. 客户端收到 SYN+ACK，确认服务端掌握了客户端 SYN，也获得服务端初始序列号。
3. 服务端收到最终 ACK，确认客户端掌握了服务端 SYN。双方由此拥有一致的收发起点。

这个过程还会降低旧的重复连接请求干扰新连接的机会。握手本身不提供身份认证和加密；TLS 或应用认证承担相应职责。

## SYN 中还协商什么

常用能力会在 SYN 与 SYN+ACK 中通过 TCP Options 或控制标志公布：

- **MSS**：发送者声明自己在该方向愿意接收的最大 TCP 数据载荷。客户端与服务端的值可以不同。
- **Window Scale**：双方在握手中声明缩放因子，后续首部里的 16 位 Window 字段才能按协商结果解释。
- **SACK Permitted**：发送 SYN 的端点表示自己能接收并处理对端未来发送的 SACK 选项。当该端点发送数据时，对端便可用 SACK 报告已经收到的非连续数据块；双方各自公布后，两个数据方向都可使用 SACK。
- **Timestamp**：常用于 RTT 测量和保护序列号空间，是否出现取决于实现与配置。
- **ECN 相关标志**：支持时可在连接建立阶段协商显式拥塞通知能力。

选项具有方向性。客户端 SYN 中的 MSS 描述客户端接收能力，服务端 SYN+ACK 中的 MSS 描述服务端接收能力。普通数据报文不会重新协商这些握手能力。

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

先启动服务端，再启动客户端。服务端特意在 `accept` 前暂停 10 秒。此时客户端的 `connect` 通常已经返回，系统里也已经存在 `ESTABLISHED` 连接。这证明监听内核能够先完成握手，再把已完成连接交给 `accept`。

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

本地握手往往在一次 250 毫秒查询间隔内完成，`SYN-SENT` 与 `SYN-RECEIVED` 可能只在抓包中出现。若受控实验网络提供“静默丢弃 SYN”的目标，可以观察客户端停留在 `SYN-SENT` 并重传 SYN。目标端口明确拒绝连接时，常见结果是立即返回 RST，现象会在第19章展开。

## Wireshark 中应当看到什么

在回环接口开始捕获后，使用显示过滤器：

```text
tcp.port == 18080
```

依次检查：

1. SYN 的源端口是客户端临时端口，目标端口是 18080。
2. SYN+ACK 的四元组方向相反，Ack 等于客户端 SYN 的 Seq 加一。
3. 最终 ACK 的 Ack 等于服务端 SYN 的 Seq 加一。
4. 比较两个 SYN 报文中的 MSS、Window Scale、SACK Permitted 与 Timestamp。
5. 把客户端 `CONNECT returned`、服务端 `ACCEPT` 的时间与三个报文时间对齐。

最终 ACK 可能携带应用数据，SYN 或 SYN+ACK 也允许携带受相应机制约束的数据。当前实验没有立刻发送数据，因此最容易看清基本序列。

## 平台与观察边界

- `connect` 的完成语义由 Socket API 与操作系统实现共同决定；阻塞连接通常在握手成功或确定失败后返回。
- `accept` 从已完成连接队列取得已连接 Socket。监听 Socket 继续接收新的连接请求。
- 握手中的重传间隔、次数、队列结构和超时属于实现与配置细节。
- 回环抓包可能带有平台生成的虚拟链路层头部，TCP 字段和四元组仍可按同一方式分析。
- 抓包点只呈现经过该点的报文。状态查询与应用日志能补充内核队列和调用返回信息。

## 理解检查

1. 客户端 SYN 的 `Seq=9000`，服务端 SYN+ACK 的 `Seq=40000`。请写出第二步和第三步的 Ack。
2. 第三个 ACK 携带 30 字节数据时，客户端下一个 Seq 是多少？
3. 服务端应用仍在 `accept` 前暂停，系统为何可以显示已建立连接？
4. 客户端 SYN 中 MSS 为 65495，这个值约束哪个方向的数据段？
5. 抓包只有 SYN 与两次 SYN+ACK，最直接的待验证推断是什么？还需要收集哪类系统或应用证据？

答案要点：第二步 `Ack=9001`，第三步 `Ack=40001`；携带 30 字节后客户端下一 Seq 为 `9031`；握手由监听端点的内核 TCP 处理；客户端 MSS 表达客户端愿意接收的数据载荷上限；重复 SYN+ACK 表明服务端尚未观察到可接受的最终 ACK，链路丢失、捕获缺失和端点处理都需要结合双端证据继续判断。

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
