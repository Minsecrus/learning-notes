# 第19章 RST、异常断开和半开连接

FIN 表达一个方向的有序终点，RST 表达连接状态被拒绝或中止。应用通常会把 FIN 观察为 EOF，把可接受的 RST 观察为连接重置错误。网络中的持续静默又会表现为等待、重传和超时。准确区分三者，是排查“连接突然断了”的起点。

## 从四种相似现象开始

客户端都可能只报告“请求失败”，线上过程却有明显差别：

| 场景 | 典型线上证据 | 典型 API 结果 |
| --- | --- | --- |
| 目标端口没有监听 | SYN 后很快收到 RST+ACK | `ConnectionRefusedError` |
| 对端有序结束发送 | 收到 FIN，确认后读完缓存 | `recv` 返回 `b""` |
| 已连接端点强制中止 | 连接中收到可接受的 RST | `ConnectionResetError` 或平台对应错误 |
| 对端或路径持续无响应 | 重传、长时间无决定性响应 | `TimeoutError`、连接超时或持续等待 |

错误类型还受到操作系统、调用阶段和语言封装影响。诊断时记录完整异常类型、错误码、API 名称、四元组和时间，再与抓包对齐。

## RST 表达什么

RST 是 TCP 首部中的 Reset 标志。常见生成条件包括：

1. SYN 到达一个没有监听端点、也没有匹配连接的端口。
2. 报文到达后，接收主机找不到对应的现有连接状态。
3. 应用或系统显式执行 abortive close，放弃排队数据并中止连接。
4. 主机重启后丢失旧连接状态，又收到旧连接的后续报文。
5. 防火墙、代理、负载均衡器或其他中间设备主动终止连接。
6. 协议状态或确认号检查发现需要以 Reset 拒绝的情况。

TCP 会依据当前状态与序列号规则验证收到的 RST。在 `ESTABLISHED` 等已同步状态中，RST 的 Seq 精确等于 `RCV.NXT` 时才会立即重置连接；Seq 位于当前接收窗口内但没有精确匹配时，端点发送 challenge ACK 并丢弃该 RST；窗口外的 RST 会被静默丢弃。抓包点看到 RST，说明该报文经过了该点。端点是否接收并改变状态，需要由端点状态、后续报文和应用错误继续确认。

RST 没有应用级错误说明。它无法告诉接收者业务失败原因、事务状态或重试策略。需要这些语义时，应用应在连接可用期间发送结构化错误响应。

## 拒绝连接时怎样计算 RST 的 Ack

设客户端向未监听端口发送：

```text
Seq = 7000, Flags = SYN, TCP data length = 0
```

接收主机在 `CLOSED` 上拒绝这个连接请求时，常见响应为：

```text
Seq = 0, Ack = 7001, Flags = RST, ACK
```

SYN 消耗一个序列号位置，所以确认值是7001。客户端收到与本次连接尝试匹配的 Reset 后，可以快速结束 `connect` 并报告连接被拒绝。若路径中的设备静默丢弃 SYN，客户端会重传并等待超时；拒绝与静默由是否出现 RST 直接区分。

## 半开连接与半关闭的区别

**半关闭**是双方都知道的协议状态：一端发送 FIN，另一个方向仍开放。

**半开连接**表示双方对连接是否存在的认知已经分裂。例如：

```text
客户端：仍保存 ESTABLISHED
服务端：重启后已经丢失这条连接的状态
```

形成半开的常见过程：

- 一台主机断电或内核崩溃，来不及发送任何控制报文；
- 网络长时间分区，一端继续保留连接，另一端因自身策略释放状态；
- NAT、负载均衡器或防火墙的会话状态先于端点过期；
- 进程和系统恢复后，旧四元组的一端仍尝试继续传输。

半开连接通常在下一次通信时暴露。仍保留状态的一端发送数据；已经失去状态的主机若收到并处理该报文，可能返回 RST。路径持续不可达时，发送方进行重传，并在 TCP、Socket 或应用计时器到期后报告失败。没有业务流量时，半开状态可以长时间保持，后续章节会用 Keepalive、心跳与应用超时管理这种情况。

## 进程退出、主机故障和关闭方式

“程序消失”需要展开为具体条件：

| 事件 | 操作系统是否仍运行 | 常见线上过程 | 影响因素 |
| --- | --- | --- | --- |
| 显式 `shutdown(SHUT_WR)` 后 `close` | 是 | 排队字节后发送 FIN，允许接收剩余数据 | 应用读取与关闭顺序 |
| 普通 `close` | 是 | 内核按当前状态推进有序关闭 | 缓冲数据、句柄引用、超时和 Socket 选项 |
| 进程正常退出或未捕获异常结束 | 是 | 内核回收所有句柄并关闭连接 | 未读入站数据、待发数据、linger 设置和系统实现 |
| 进程被强制终止 | 是 | 内核回收 Socket，可能出现 FIN 或 RST | 当时的收发状态、缓冲区与关闭选项 |
| 显式 abortive close | 是 | 常见为发送 RST 并丢弃待处理队列 | `SO_LINGER` 等平台 API 语义 |
| 主机断电或内核崩溃 | 否 | 故障发生时通常没有 FIN 或 RST | 对端重传、超时、Keepalive 和应用心跳 |
| 主机重启后收到旧连接报文 | 已恢复 | 新协议栈找不到旧状态时可能返回 RST | 防火墙规则、路径与报文有效性 |

由此可见，异常退出这个应用层描述还需要补充内核是否存活、Socket 当时状态、缓冲内容和关闭选项，才能预测线上报文。

## 可控实验程序

下面的程序提供 `orderly`、`abort` 和 `silent` 三种服务端模式。它只绑定回环地址，适合本机抓包。

保存为 `termination_server.py`：

```python
import argparse
import os
import socket
import struct
import time

ADDR = ("127.0.0.1", 18080)


def enable_abortive_close(sock: socket.socket) -> None:
    # Winsock 的 linger 使用两个 unsigned short；常见 Unix 使用两个 int。
    value = struct.pack("HH", 1, 0) if os.name == "nt" else struct.pack("ii", 1, 0)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_LINGER, value)


parser = argparse.ArgumentParser()
parser.add_argument("mode", choices=("orderly", "abort", "silent"))
args = parser.parse_args()

with socket.socket() as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(ADDR)
    listener.listen()
    print("LISTEN", ADDR, args.mode, flush=True)
    conn, peer = listener.accept()
    print("ACCEPT", peer, flush=True)

    if args.mode == "orderly":
        with conn:
            request = conn.recv(4096)
            print("request", request, flush=True)
            conn.sendall(b"orderly response")
            conn.shutdown(socket.SHUT_WR)
            while conn.recv(4096):
                pass

    elif args.mode == "abort":
        request = conn.recv(4096)
        print("request", request, flush=True)
        enable_abortive_close(conn)
        conn.close()
        print("abortive close", flush=True)

    else:
        with conn:
            request = conn.recv(4096)
            print("request", request, "sleep 6s", flush=True)
            time.sleep(6)
            conn.sendall(b"late response")
            conn.shutdown(socket.SHUT_WR)
            while conn.recv(4096):
                pass
```

保存为 `termination_client.py`：

```python
import argparse
import socket

parser = argparse.ArgumentParser()
parser.add_argument("mode", choices=("orderly", "abort", "silent", "refused"))
args = parser.parse_args()

port = 18081 if args.mode == "refused" else 18080

try:
    with socket.socket() as sock:
        sock.settimeout(2 if args.mode == "silent" else 5)
        sock.connect(("127.0.0.1", port))
        print("connected", sock.getsockname(), flush=True)
        sock.sendall(b"request")

        try:
            print("first recv", sock.recv(4096), flush=True)
        except TimeoutError:
            print("application recv timeout; connection object remains available", flush=True)
            sock.settimeout(10)
            print("later recv", sock.recv(4096), flush=True)

        sock.shutdown(socket.SHUT_WR)
        while True:
            chunk = sock.recv(4096)
            print("remaining recv", chunk, flush=True)
            if chunk == b"":
                break
except OSError as exc:
    print(type(exc).__name__, exc.errno, repr(exc), flush=True)
```

### 实验1：未监听端口

确认18081没有自己的服务在监听，直接运行：

```powershell
python .\termination_client.py refused
```

回环路径通常产生 `SYN → RST,ACK`，客户端快速得到 `ConnectionRefusedError`。端口占用可以先用以下命令核对：

```powershell
Get-NetTCPConnection -LocalPort 18081 -State Listen -ErrorAction SilentlyContinue
```

### 实验2：有序关闭

先运行 `python .\termination_server.py orderly`，再运行客户端的 `orderly` 模式。客户端先读到 `b'orderly response'`，随后读到 EOF。抓包以 FIN 路线结束。

### 实验3：强制重置

先运行 `python .\termination_server.py abort`，再运行客户端的 `abort` 模式。服务端把 linger 开启并设为零，然后关闭已连接 Socket。常见抓包会出现 RST，客户端的 `recv` 得到 `ConnectionResetError` 或系统对应错误。

`SO_LINGER` 的二进制结构和关闭细节具有平台差异，示例已分别处理 Windows 与常见 Unix 布局。该实验只在受控回环连接中使用，并以实际抓包和异常作为结果。

### 实验4：应用暂时无响应

先运行 `python .\termination_server.py silent`，再运行客户端的 `silent` 模式。服务端等待6秒才返回数据，客户端第一次 `recv` 的2秒应用超时先到期。客户端随后延长超时并能收到迟来的响应。这说明一次 Socket 超时可以只是本次等待期限已到，连接状态仍可能有效。

若要观察握手阶段的持续静默，可在自己控制的 Linux 网络命名空间、虚拟机或防火墙中丢弃指定 SYN。预期证据是 SYN 重传和 `SYN-SENT`，缺少 RST；具体重试次数与总时长由操作系统实现和配置决定。

## 同时观察系统状态

Windows PowerShell：

```powershell
Get-NetTCPConnection |
    Where-Object {
        $_.LocalPort -in 18080, 18081 -or $_.RemotePort -in 18080, 18081
    } |
    Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
```

Linux：

```bash
ss -tanpo '( sport = :18080 or dport = :18080 or sport = :18081 or dport = :18081 )'
```

连接被拒绝或接受 RST 后，内核释放状态的速度通常快于人工查询，因此系统表可能只留下空结果。Wireshark 保留了瞬时 RST；客户端异常证明本地 API 已观察到失败。`silent` 模式在第一次 `recv` 超时后仍可显示 `ESTABLISHED`，随后迟到响应继续沿原连接传输。

## Wireshark 检查清单

基本过滤器：

```text
tcp.port == 18080 || tcp.port == 18081
```

RST 专用过滤器：

```text
tcp.flags.reset == 1
```

逐项记录：

1. RST 由哪个 IP 和端口方向发出，四元组是否匹配目标连接。
2. RST 出现在 SYN 阶段、数据阶段还是关闭阶段。
3. RST 的 Seq、Ack 是否能与前一个报文对应。
4. RST 前是否已有 FIN、应用数据、零窗口、重传或长时间空闲。
5. RST 后对端是否还继续重传，这可能提示捕获点位置、报文丢失或端点未接受该 Reset。
6. 双端抓包是否都看到该 RST；只有中间抓包看到时，应继续调查路径设备。

分析器标注的 `[RST]` 来自首部标志位，来源归属仍需通过抓包位置和网络拓扑判断。TTL、IP ID 和时间特征可以提供线索，单项特征的证明力有限。

## 常见 Socket 错误怎样映射

| Python 异常 | 常见阶段 | 直接含义 | 后续证据 |
| --- | --- | --- | --- |
| `ConnectionRefusedError` | `connect` | 目标明确拒绝，常见于 RST | SYN/RST 抓包、目标监听状态 |
| `ConnectionResetError` | 已连接读写 | 本地协议栈接受了 Reset | RST 方向、前序数据与双方日志 |
| `BrokenPipeError` | `send` | 本地已经知道该发送方向无法继续 | 先前 FIN/RST、首次错误时刻、平台错误码 |
| `ConnectionAbortedError` | 建立或传输 | 操作系统报告连接已中止，对应 `ECONNABORTED` 一类错误 | 系统日志、连接阶段、超时与 Socket 选项 |
| `TimeoutError` | `connect`、`recv` 或 `send` | 当前调用超过配置等待期限 | 重传、窗口、对端日志、应用计时器 |
| `recv(...) == b""` | 接收 | 正常有序 EOF 已交付 | FIN 与此前字节的 Seq/Ack |

一次 `send` 成功只说明本地调用已接受这些字节。对端稍后重置时，错误可能出现在下一次 `send` 或 `recv`。Windows Winsock 常见 10053 `WSAECONNABORTED`、10054 `WSAECONNRESET`、10058 `WSAESHUTDOWN`、10060 `WSAETIMEDOUT` 与 10061 `WSAECONNREFUSED`。Linux 常见符号名包括 `ECONNABORTED`、`ECONNRESET`、`EPIPE`、`ESHUTDOWN`、`ETIMEDOUT` 与 `ECONNREFUSED`；数值由平台 ABI 定义。跨平台程序应以异常类别、符号名、错误码和连接阶段共同处理。

## 面对“对端突然消失”的证据链

1. 记录最后一次成功的应用操作、失败 API、错误码和单调时钟时间。
2. 固定四元组，查看 FIN、RST、重传与空闲间隔。
3. 查询双端进程是否存活、Socket 状态和重启时间。
4. 检查负载均衡器、NAT、防火墙的会话超时和重置日志。
5. 对照应用超时、TCP 重传超时、Keepalive 与业务心跳配置。
6. 判断业务请求是否可能已经被处理，再依据请求 ID、幂等键或结果查询决定重试。

TCP 连接错误只描述传输状态。连接在响应返回前重置时，请求可能尚未到达、正在处理、已经成功或处理失败。第27章会把这类不确定结果与幂等重试完整连接起来。

## 理解检查

1. SYN 的 `Seq=500`，目标端口关闭，典型 RST+ACK 的 Ack 是多少？
2. 主机断电的一瞬间，对端为什么可能仍显示 `ESTABLISHED`？
3. `recv` 返回 `b""` 与抛出 `ConnectionResetError` 分别对应哪类终止？
4. 应用的2秒 `recv` 超时发生后，连接是否一定已经释放？
5. 半开连接和半关闭分别描述什么？
6. 客户端写入请求后收到 RST，为什么仍需业务幂等或结果查询？

答案要点：501；断电时没有协议栈发送控制报文，对端要靠后续通信或计时器发现；前者是有序 EOF，后者是连接中止；应用超时可以先于连接失效；半开是双方状态认知分裂，半关闭是一个已知发送方向通过 FIN 结束；RST 无法证明服务端是否已经完成业务处理。

## 本章小结

- FIN、RST 与持续静默分别对应有序终点、连接中止和待判定状态。
- 未监听端口常用 RST 快速拒绝 SYN，静默丢弃会触发重传与超时。
- 进程退出、强制终止、主机崩溃、主机重启和 abortive close 具有不同前提与线上表现。
- 半开连接表示两端对连接状态的认知分裂；下一次通信或计时器通常使它暴露。
- API 错误、两端状态、双端抓包、系统日志和业务请求 ID 共同构成诊断证据链。

## 参考资料

- [RFC 9293：Reset Generation、Half-Open Connections 与 ABORT](https://www.rfc-editor.org/rfc/rfc9293.html)
- [Python socket 与 SO_LINGER 接口说明](https://docs.python.org/3/library/socket.html)
- [Python 内置连接异常说明](https://docs.python.org/3/library/exceptions.html#ConnectionError)
- [Microsoft Learn：Windows Sockets 错误码](https://learn.microsoft.com/windows/win32/winsock/windows-sockets-error-codes-2)
- [Linux errno(3) 手册](https://man7.org/linux/man-pages/man3/errno.3.html)
- [Get-NetTCPConnection 文档](https://learn.microsoft.com/powershell/module/nettcpip/get-nettcpconnection)

## 导航

- [上一章：第18章 TIME_WAIT、CLOSE_WAIT 和连接释放](./04-time-wait-close-wait.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第20章 确认、丢包检测和重传](../05-reliability-performance/01-ack-loss-retransmission.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
