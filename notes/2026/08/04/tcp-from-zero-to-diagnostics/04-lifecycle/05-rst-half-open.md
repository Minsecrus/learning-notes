# 第19章 RST、异常断开和半开连接

FIN 标志着一个方向上数据传输的正常结束（有序终点）；而 RST 则意味着连接被拒绝或强制中止。在应用层看来，FIN 通常表现为 EOF（文件结束符），而合法的 RST 则会触发“连接重置”（Connection Reset）错误。至于网络中的持续静默，则表现为应用层的无响应等待、底层的报文重传直至超时。准确区分这三种现象，是我们排查“连接突然断了”这一常见问题的起点。

## 从四种相似现象开始

客户端在日志中往往只留下一句“请求失败”，但底层发生的真实过程却可能大相径庭：

| 场景 | 典型线上证据 | 典型 API 结果 |
| --- | --- | --- |
| 目标端口没有监听 | SYN 后很快收到 RST+ACK | `ConnectionRefusedError` |
| 对端有序结束发送 | 收到 FIN，确认后读完缓存 | `recv` 返回 `b""` |
| 已连接端点强制中止 | 连接中收到可接受的 RST | `ConnectionResetError` 或平台对应错误 |
| 对端或路径持续无响应 | 重传、长时间无决定性响应 | `TimeoutError`、连接超时或持续等待 |

需要注意的是，具体的错误类型还会受到操作系统、系统调用的触发阶段以及编程语言封装的影响。在排查问题时，我们应该记录下完整的异常类型、错误码、触发异常的 API 名称、网络四元组以及发生时间，再将这些信息与抓包结果对照分析。

## RST 表达什么

RST（Reset）是 TCP 首部中的一个控制标志位，用于异常终止连接。常见的触发场景包括：

1. **端口未监听**：SYN 报文到达了目标主机，但该端口上并没有进程在监听。
2. **找不到连接状态**：主机收到数据报文，但在本地找不到与该报文四元组匹配的活动连接。
3. **强制关闭**：应用或系统显式执行了强制关闭（Abortive Close），直接丢弃发送队列中的残余数据并中止连接。
4. **主机重启丢失状态**：主机重启后丢失了之前的连接状态，此时如果收到对端发来的旧连接报文，就会响应 RST。
5. **中间设备干预**：防火墙、代理、NAT 或负载均衡器等中间设备基于安全策略或超时机制，主动发送 RST 终止连接。
6. **序列号不合法**：TCP 协议栈在检查报文序列号（Sequence Number）或确认号（Acknowledgment Number）时，发现严重越界等非法情况，必须用 RST 拒绝。

收到 RST 报文后，TCP 协议栈并不会盲目接受，而是会根据当前连接状态和序列号规则进行严格验证。例如，在 `ESTABLISHED` 等状态下：

- **精确匹配**：只有当 RST 报文的序列号（Seq）**精确等于**预期接收的下一个序列号（`RCV.NXT`）时，连接才会被立即重置。
- **窗口内但不匹配**：如果 Seq 落在当前接收窗口（Window）内但并不精确匹配 `RCV.NXT`，TCP 会发送一个 Challenge ACK 以确认对端的存活状态，并丢弃该 RST。
- **窗口外**：如果 Seq 落在接收窗口之外，RST 报文会被直接静默丢弃。

因此，如果在抓包时看到了 RST，只能说明这个报文途经了抓包点。至于端点究竟有没有接受这个 RST 并真正重置连接状态，还需要结合端点的后续报文行为和应用层抛出的错误来综合判定。

值得强调的是，RST 仅仅是一个传输层标志，**不包含任何应用层上下文**。它无法告诉接收方业务失败的具体原因、事务执行到了哪一步，更无法提供重试策略。如果需要传达这些业务语义，应用程序必须在连接断开之前，通过 HTTP 状态码等结构化的应用层响应来完成。

## 拒绝连接时怎样计算 RST 的 Ack

假设客户端向一个未被监听的端口发送 SYN 请求：

```text
Seq = 7000, Flags = SYN, TCP data length = 0
```

接收主机在 `CLOSED` 状态下拒绝这个连接请求，典型的响应如下：

```text
Seq = 0, Ack = 7001, Flags = RST, ACK
```

因为 SYN 标志本身会消耗一个序列号（Sequence Number），所以确认号（Ack）的值变成了 7001。客户端收到这个与其请求相匹配的 RST+ACK 报文后，`connect` 调用会立即失败，并向应用层报告“连接被拒绝”（Connection Refused）。

作为对比，如果 SYN 报文在网络路径中被某个防火墙静默丢弃，客户端就收不到任何响应，只能反复重传直至超时。因此，目标是“明确拒绝”还是“静默丢弃”，直接取决于我们是否收到了 RST 报文。

## 半开连接与半关闭的区别

在 TCP 的语境中，不要将“半关闭”和“半开连接”混为一谈：

**半关闭（Half-Close）**：这是一种**双方达成共识**的合法协议状态。一端主动发送了 FIN 结束发送数据的能力，但仍然可以接收数据，另一个方向的数据传输通道依然保持开放。

**半开连接（Half-Open Connection）**：这是一种**双方认知发生分裂**的异常状态。双方对“这条连接是否依然存活”产生了分歧。例如：

```text
客户端：认为连接一切正常，状态仍为 ESTABLISHED
服务端：刚刚经历重启，内存中这条连接的状态已经彻底丢失
```

导致半开连接的常见场景包括：

- 一端主机遭遇突然断电或内核崩溃（Kernel Panic），根本来不及发出任何 FIN 或 RST 控制报文；
- 网络长时间发生故障（例如网络分区），一端仍在死死坚守连接，而另一端可能出于资源保护策略已经悄悄清除了连接状态；
- NAT 网关、防火墙或负载均衡器上的会话表项已经因超时被清理，但两端的主机对此毫不知情；
- 发生故障的主机重启恢复后，对端毫不知情地依然使用旧的四元组向其发送数据。

半开连接是非常隐蔽的，它通常要到**下一次尝试通信时才会彻底暴露**。当仍保留连接状态的一端兴冲冲地发送数据（Segment）时，已经失去连接状态的另一端收到报文会一脸茫然，于是反手回复一个 RST。如果恰好连网络路径也不通，发送方就会陷入漫长的重传，直到 TCP 重传计时器或应用层超时，才会无奈地报告失败。如果在半开状态下双方都没有业务数据往来，这个虚假的“ESTABLISHED”状态可以无限期地保持下去。在后续章节中，我们将探讨如何利用 TCP Keepalive、应用层心跳机制以及合理的超时设置来主动揪出并清理这些半开连接。

## 进程退出、主机故障和关闭方式

当我们遇到“程序突然没了”引发的网络问题时，不能停留在如此笼统的描述上，必须弄清楚当时的具体情况：

| 事件 | 操作系统是否仍运行 | 常见线上过程 | 影响因素 |
| --- | --- | --- | --- |
| 显式 `shutdown(SHUT_WR)` 后 `close` | 是 | 排队字节后发送 FIN，允许接收剩余数据 | 应用读取与关闭顺序 |
| 普通 `close` | 是 | 内核按当前状态推进有序关闭 | 缓冲数据、句柄引用、超时和 Socket 选项 |
| 进程正常退出或未捕获异常结束 | 是 | 内核回收所有句柄并关闭连接 | 未读入站数据、待发数据、linger 设置和系统实现 |
| 进程被强制终止（如 `kill -9`） | 是 | 内核强制回收 Socket 资源，可能发出 FIN 或 RST | 终止时的收发状态、接收缓冲区残留与关闭选项 |
| 显式 abortive close | 是 | 常见为发送 RST 并丢弃待处理队列 | `SO_LINGER` 等底层平台 API 语义 |
| 主机断电或内核崩溃 | 否 | 故障发生时通常**没有** FIN 或 RST | 依赖对端的重传、超时、Keepalive 及应用层心跳来发现 |
| 主机重启后收到旧连接报文 | 已恢复 | 新协议栈找不到旧连接的状态记录，返回 RST | 防火墙规则、网络路径与报文有效性 |

由此可见，诸如“异常退出”这类高维度的应用层描述是远远不够的。我们必须结合**操作系统内核是否依然存活**、**Socket 当时的具体状态**、**缓冲区里是否有残余数据**以及**程序采用的关闭选项**，才能准确推演和预测网络层真实产生的报文序列。

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

由于 18081 端口并未监听，回环网络通常会直接产生 `SYN → RST,ACK` 的报文交互，客户端进程会瞬间捕获到 `ConnectionRefusedError` 异常。你可以先用以下 PowerShell 命令确认该端口未被占用：

```powershell
Get-NetTCPConnection -LocalPort 18081 -State Listen -ErrorAction SilentlyContinue
```

### 实验2：有序关闭

首先启动服务端 `python .\termination_server.py orderly`，然后运行客户端的 `orderly` 模式。客户端会先顺利读取到 `b'orderly response'` 业务数据，接着 `recv` 调用返回空字节（EOF）。如果在底层抓包，你会看到一段标准的基于 FIN 的四次挥手过程。

### 实验3：强制重置

首先启动服务端 `python .\termination_server.py abort`，然后运行客户端的 `abort` 模式。服务端通过开启 `SO_LINGER` 选项并将其超时时间强行设置为零，随后立即关闭已连接的 Socket。此时观察抓包，你会明显看到服务端发出了 RST 报文，而客户端的 `recv` 调用则会抛出 `ConnectionResetError` 或该操作系统下等价的异常错误码。

需要指出的是，`SO_LINGER` 的二进制结构以及强制关闭的具体表现在不同平台上存在差异，上述示例代码已经兼顾了 Windows 和常见 Unix 系统的内存布局。由于强制关闭具有一定破坏性，本实验仅建议在受控的回环连接（Loopback）上进行验证。

### 实验4：应用暂时无响应

首先启动服务端 `python .\termination_server.py silent`，接着运行客户端的 `silent` 模式。服务端刻意沉睡了 6 秒才开始返回数据，而客户端首次调用 `recv` 时设置了 2 秒的超时时间，因此会先抛出超时异常。但随后客户端捕获异常并延长了超时时间，紧接着就成功读到了迟来的服务端响应。这生动地说明了一个道理：**应用层的 Socket 超时仅仅意味着当前的 API 调用等得不耐烦了，底层的 TCP 连接状态完全有可能仍然是健康且有效的。**

如果你想进一步观察三次握手阶段的“持续静默”现象，可以在受控的 Linux Network Namespace、虚拟机或本地防火墙中人为配置规则，定点丢弃 SYN 报文。预期的网络表现将是不断增加的 SYN 重传报文，以及长时间卡在 `SYN-SENT` 状态，期间绝不会出现 RST 报文。至于重试的次数和持续的总时长，则完全取决于当前操作系统的 TCP 协议栈实现与相关内核参数配置（如 Linux 的 `tcp_syn_retries`）。

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

由于连接在被拒绝或接收到 RST 重置后，内核协议栈清理相关状态的速度极快，通常远超我们敲击键盘查询的速度。因此，你在命令行中查询系统网络表时，往往只能看到一片空白。此时，Wireshark 抓包能够忠实地帮你记录下转瞬即逝的 RST 报文；而客户端抛出的代码异常，也从侧面印证了本地 API 已经感知到了这次失败。相较之下，在我们之前的 `silent` 模式实验中，即便客户端第一次 `recv` 已经超时报错，你依然能在系统表中查看到坚挺的 `ESTABLISHED` 状态，随后服务端迟发的数据依然能在这个“老旧”却有效的连接通道上顺畅传输。

## Wireshark 检查清单

基本过滤器：

```text
tcp.port == 18080 || tcp.port == 18081
```

RST 专用过滤器：

```text
tcp.flags.reset == 1
```

排查时，请带着以下问题逐项核对：

1. 确认 RST 是由哪个 IP 和端口发出的？报文的网络四元组是否与你正在排查的目标连接严丝合缝地匹配？
2. 这个 RST 报文究竟出现在建立连接的 SYN 阶段、正常的数据传输阶段，还是最后的关闭挥手阶段？
3. RST 报文中的 Seq（序列号）和 Ack（确认号）是否能与抓包中前一个相关报文的上下文逻辑呼应上？
4. 追踪在出现 RST 之前，连接上是否已经发生了 FIN 挥手、大块应用数据传输、接收端宣告零窗口（Zero Window）、报文频繁重传或经历了极其漫长的静默空闲？
5. 收到 RST 后，对端是否还在傻傻地继续重传数据？这可能暗示了你当前抓包点的位置存在盲区，或者 RST 报文在后续路径中离奇丢失，亦或是端点协议栈基于严格的校验规则拒收了这个 Reset 报文。
6. 最关键的是，在客户端和服务端双端抓包时，是否都能看到这个 RST 报文？如果只在某一方或者中间节点的抓包中出现了 RST，那么请务必将矛头指向网络路径上的防火墙或代理等中间设备。

请注意，Wireshark 界面上醒目的 `[RST]` 标记仅仅来源于 TCP 首部的一个标志位。至于这个 RST 到底是谁发出的，你绝对不能盲信源 IP 地址，而必须结合你的抓包位置以及整体网络拓扑进行缜密的推断。虽然报文中的 TTL 跳数、IP ID 以及时间戳等细微特征能为你提供侧面线索，但单一特征往往具有欺骗性，证明力有限，需要综合研判。

## 常见 Socket 错误怎样映射

| Python 异常 | 常见阶段 | 直接含义 | 后续证据 |
| --- | --- | --- | --- |
| `ConnectionRefusedError` | `connect` | 目标明确拒绝，常见于 RST | SYN/RST 抓包、目标监听状态 |
| `ConnectionResetError` | 已连接读写 | 本地协议栈接受了 Reset | RST 方向、前序数据与双方日志 |
| `BrokenPipeError` | `send` | 本地已经知道该发送方向无法继续 | 先前 FIN/RST、首次错误时刻、平台错误码 |
| `ConnectionAbortedError` | 建立或传输 | 操作系统报告连接已中止，对应 `ECONNABORTED` 一类错误 | 系统日志、连接阶段、超时与 Socket 选项 |
| `TimeoutError` | `connect`、`recv` 或 `send` | 当前调用超过配置等待期限 | 重传、窗口、对端日志、应用计时器 |
| `recv(...) == b""` | 接收 | 正常有序 EOF 已交付 | FIN 与此前字节的 Seq/Ack |

切记，一次成功的 `send` API 调用仅仅意味着本地操作系统的发送缓冲区成功接纳了这些字节数据，**并不代表数据已经安全抵达对端**。如果对端随后重置了连接，那么错误可能要等到你的下一次 `send` 或 `recv` 调用时才会“延时”爆发出来。

在 Windows 平台的 Winsock 中，你经常会遇到诸如 `WSAECONNABORTED (10053)`、`WSAECONNRESET (10054)`、`WSAESHUTDOWN (10058)`、`WSAETIMEDOUT (10060)` 以及 `WSAECONNREFUSED (10061)` 这样的特征错误码。而在 Linux 平台下，常见的错误符号则表现为 `ECONNABORTED`、`ECONNRESET`、`EPIPE`、`ESHUTDOWN`、`ETIMEDOUT` 和 `ECONNREFUSED`；其具体的数值则由底层平台的 ABI 规范所定义。对于跨平台的应用程序而言，不应仅仅依赖单一的数值，而应当结合高层语言的异常类别、底层的错误码符号以及发生异常时的连接生命周期阶段，进行健壮的联合处理。

## 面对“对端突然消失”的证据链

面对“对端突然消失”这类疑难杂症，请按以下步骤构建完整的证据链：

1. 详细记录最后一次成功的应用层操作、最终抛出异常失败的 API 名称、具体的系统错误码以及高精度的单调时钟时间戳。
2. 锁定发生异常的网络四元组，在抓包文件中仔细甄别 FIN 挥手、RST 重置、重传风暴以及异常前的网络空闲间隔。
3. 分别查询客户端和服务端进程当时是否依然存活，底层 Socket 的真实状态如何，以及服务是否存在近期重启的时间窗口。
4. 如果跨越了复杂的网络拓扑，务必检查负载均衡器、NAT 网关或防火墙设备上的会话超时配置以及拦截重置日志。
5. 横向比对应用层代码的超时设置、操作系统内核的 TCP 重传超时参数、Keepalive 探活机制以及应用自身的业务心跳配置。
6. 结合上述信息，冷静判断发生断连时，业务请求是否**可能已经在服务端被成功处理**。随后，严格依据请求 ID、幂等键设计或结果查询接口，来审慎地决定是否发起重试。

我们要时刻保持一个清醒的认知：**TCP 连接错误仅仅描述了底层传输通道的状态，它并不能代表上层业务的真实结果**。当一个连接在服务端返回响应之前惨遭重置时，你的业务请求可能还在半路尚未到达，可能正在被服务端满头大汗地处理，可能已经处理成功仅仅是响应丢失了，也可能已经处理失败倒在了异常堆栈里。在后续的第27章中，我们将深入探讨如何将这种底层传输的不确定性，与高层业务的幂等重试机制进行完美融合。

## 理解检查

1. SYN 的 `Seq=500`，目标端口关闭，典型 RST+ACK 的 Ack 是多少？
2. 主机断电的一瞬间，对端为什么可能仍显示 `ESTABLISHED`？
3. `recv` 返回 `b""` 与抛出 `ConnectionResetError` 分别对应哪类终止？
4. 应用的2秒 `recv` 超时发生后，连接是否一定已经释放？
5. 半开连接和半关闭分别描述什么？
6. 客户端写入请求后收到 RST，为什么仍需业务幂等或结果查询？

答案要点：501（因为 SYN 消耗一个序列号）；主机突然断电时底层协议栈根本来不及发送任何 FIN 或 RST 等控制报文，对端只能傻傻等待后续通信失败或超时计时器触发才能发现异常；前者代表正常有序的 EOF 结束，后者代表连接被异常中止；应用层的超时完全可以先于底层 TCP 连接失效；半开连接指的是双方对连接状态认知彻底分裂的异常情况，半关闭则是双方达成共识，其中一端通过 FIN 合法结束发送数据的单向通道；RST 仅仅是网络层的传输状态，根本无法证明服务端上层的业务逻辑到底有没有被执行。

## 本章小结

- FIN、RST 与网络持续静默分别代表了连接的有序终点、强制中止以及悬而未决的待判定状态。
- 面对未被监听的端口，系统通常用 RST 快速拒绝 SYN 报文；而网络设备静默丢弃报文则会引发客户端漫长的重传与超时。
- 进程正常退出、进程被强制 `kill`、主机彻底崩溃、主机重启以及代码中显式调用 Abortive Close，它们有着截然不同的触发前提与线上真实表现，排查时必须细分。
- 半开连接深刻描绘了两端对同一条连接存活状态的认知大分裂；这种隐蔽的状态通常要等到下一次数据收发尝试或内部计时器到期时才会被迫暴露。
- 底层 API 抛出的错误、网络两端的真实状态、双端抓包的精确对比、系统内核日志以及应用层面的业务请求 ID，共同构筑了排查“对端突然消失”问题的完整证据链。

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