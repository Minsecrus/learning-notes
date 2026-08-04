# 第38章 TCP 安全基础

TCP 服务端面临的不仅是业务数据，还包括各种网络行为：连接建立的速度、并发连接数、数据发送的节奏、消息长度、连接关闭的方式以及重试机制。只要这些输入能触发服务端分配连接状态、占用内存、消耗 CPU 算力或者产生日志，我们就必须把它们纳入系统的“资源预算”里。

在设计 TCP 安全策略时，通常要围绕三个核心目标：一是保护传输内容，确保通信双方身份的真实性；二是保证协议状态机和数据解析器足够健壮，能从容应对任何畸形输入；三是在系统过载时，能够按照既定策略合理分配或及时释放有限的资源。

## 一、先建立威胁模型

在分析 TCP 服务的安全性之前，我们要先理清“谁在攻击”以及“他们能干什么”，也就是建立威胁模型：

- **旁路攻击者 (Off-path attacker)**：他们能向服务端发送报文，但因为不在通信链路上，所以无法窃听当前连接的序列号（Sequence Number）、确认号（Acknowledgment Number）和具体内容。
- **链路中间人 (On-path attacker)**：他们身处通信链路上，能够监听、拦截、延迟、复制甚至篡改经过的流量。
- **恶意客户端 (Connected Client)**：他们能通过正常的 TCP 三次握手建立合法连接，随后发送畸形报文、超大 payload、极慢速的数据流或高频请求来消耗服务端资源。
- **账号被盗用户 (Compromised Account)**：攻击者拿到合法凭证，虽然身份有效，但可能会越权访问或恶意消耗资源配额。
- **故障组件 (Faulty Component)**：网络代理、客户端或服务端的 Bug 也可能引发类似 DDoS 的异常流量，无意中对系统造成破坏。

信任边界会随着部署架构而变化。假如你的架构是在反向代理处进行 TLS 卸载（TLS Termination），那么客户端到代理之间的数据受 TLS 保护；至于代理再转发给后端的流量要不要加密，则取决于内部网络的配置。在这种情况下，反向代理节点就是一个明确的信任边界。

## 二、TCP 校验和与 TLS 保护不同目标

TCP 校验和（Checksum）覆盖了伪首部、TCP 首部和数据段，主要作用是揪出网络传输中偶发的“比特反转”等物理错误。因为校验和算法是公开的，链路中间人完全可以篡改报文内容后再重新计算一个合法的校验和。所以，TCP 本身不具备防篡改能力，真正的密码学机密性、身份认证和数据完整性，必须交由 TLS 等安全协议来兜底。

现行的 TLS 1.3 规范（RFC 9846）能为我们提供以下安全保障：

- **应用数据加密**：让链路上的窃听者无法直接读取明文内容；
- **身份认证**：通过数字证书和握手机制验证通信双方的真实身份（具体强度取决于证书校验配置）；
- **数据完整性**：为数据记录提供密码学级别的完整性校验，任何对密文的篡改都会在解密验证时被识破；
- **前向保密（Forward Secrecy）**：通过临时 Diffie-Hellman（如 ECDHE）握手协商出动态的会话密钥。这样即便未来服务器私钥泄露，之前截获的历史流量也无法被解密（具体取决于握手和会话恢复模式）。

当然，TLS 也并非密不透风。它依然会暴露一些网络元数据，比如收发双方的 IP、端口、连接建立时间、数据流向、数据包大小以及发送节奏。而且，一旦在代理层终止了 TLS，代理服务器就能看到所有明文。
更重要的是，TLS 只管传输层的安全。像用户鉴权、多租户隔离、输入参数校验、操作审计、接口幂等性设计以及资源限流配额等工作，依然需要应用层自己来把关。需要特别注意的是，TLS 1.3 的 0-RTT（零往返时间）特性存在被重放攻击的风险。如果在生产环境开启 0-RTT，一定要在服务端严格限制，确保只有符合幂等性要求（即安全可重放）的操作才能使用 0-RTT 发送。

## 三、初始序列号和伪造报文防护

TCP 通过初始序列号（ISN, Initial Sequence Number）来构建整个字节流的时序空间。旁路攻击者如果想把伪造的数据段（Segment）或 RST 报文塞进现有的连接里，就必须瞎猫碰死耗子，让伪造报文的序列号恰好落入接收端的合法接收窗口（Window）内。
为了防范这种盲打攻击，现行基础规范 RFC 9293（已经吸收并取代了早期的 RFC 6528）规定了更加安全的 ISN 生成算法：操作系统会使用一个随时间递增的基础值，加上由“TCP 四元组”和“本地随机密钥”共同计算出的哈希值。这种机制不仅让序列号变得极难预测，也大大降低了网络中残留的旧报文与新连接发生冲突的概率。

不过，对于链路中间人来说，他们能直接抓包看到四元组和 TCP 序列号的推进情况，这时候就必须靠 TLS 来提供内容机密性和应用层的完整性了。同时需要明白，TCP 首部是裸露在 TLS 保护伞之外的，所以链路设备依然可以通过丢弃报文或篡改 TCP 标志位来破坏连接的可用性。

RFC 5961 专门强化了对伪造 RST、SYN 和数据报文的防御机制。其中最关键的一招叫 Challenge ACK：当服务端收到一个看起来有点可疑，但序列号勉强落在接收窗口内的报文时，它不会立刻盲目接受或中断连接，而是主动回推一个确认报文（即 Challenge ACK），要求对方“自证清白”。只有当对方回复了包含准确序列号的报文后，服务端才会更新连接状态。为了防止攻击者利用这种机制耗尽带宽，操作系统通常还会对发送 Challenge ACK 的速率进行严格限流。

在日常排查“连接被莫名其妙重置（Connection Reset）”的故障时，如果怀疑是网络中间设备伪造了 RST，不能只看日志。你需要记录下抓到 RST 报文的具体位置，并仔细比对 IP 层的 TTL（或 IPv6 的 Hop Limit）、以太网 MAC 地址的下一跳、Seq/Ack 值的合法性以及 IP ID 等底层特征。记住，单点抓包只能说明“在这个节点发生了这个现象”，要想实锤到底是哪台设备在作祟，往往需要多点抓包交叉验证。

## 四、SYN Flood 消耗什么资源

在 TCP 三次握手中，服务端（被动打开端）收到 SYN 报文后，通常需要为这个尚未完成的连接分配内存状态，并回复 SYN+ACK。如果攻击者发送海量伪造源 IP 的 SYN，就会导致服务端出现大量卡在 `SYN-RECEIVED` 状态的半连接。这不仅会瞬间塞满半连接队列（SYN backlog），还会大量消耗系统内存、内核定时器、网卡发包带宽，甚至会打满防火墙或负载均衡设备的会话状态表。最终导致正常的客户端在握手时遭遇 SYN 丢包、被迫重传，甚至彻底连不上。

对抗 SYN Flood 攻击，单靠一招往往不够，业界通常采用多层防御体系：

- **调优队列容量**：合理扩大半连接队列和全连接队列的容量；
- **限流与并发控制**：对源 IP、网段、租户或入口实施新建连接速率与并发上限的硬性限制；
- **启用 SYN Cookies**：这是底线保护机制。在队列压力下，不再分配连接状态内存，而是把必要信息编码进 SYN+ACK 的序列号中，收到合法 ACK 后再正式创建完整连接状态；
- **边缘清洗**：借助边缘负载均衡、DDoS 高防设备和上游网络将恶意流量吸收并过滤掉；
- **源地址验证与异常检测**：利用源地址验证和异常行为分析降低伪造流量影响，同时预留系统容量；
- **建立立体监控**：重点关注 SYN 收到数、SYN+ACK 重传率、握手成功率、队列溢出事件和 SYN Cookies 启用次数。

需要指出的是，SYN Cookies 虽然是保护握手资源的利器，但其能编码的信息量极其有限，往往受限于具体实现，部分 TCP 选项（如窗口缩放）在恢复连接时可能会受到限制。因此在开启后需要结合真实的网络抓包和内核指标来验证。另外，应用层代码里写的连接数限制，往往要在三次握手彻底完成、应用调用 `accept` 拿到 Socket 后才会生效。所以，应用层限流和内核底层的握手防护是不冲突的，两者属于互补关系。

## 五、连接建立后仍有多种资源压力

千万不要以为 TCP 握手成功了就万事大吉。每一条已经建立的 Socket 连接，都会死死咬住系统的多种资源：内核态的接收/发送缓冲区、Socket 数据结构状态机，以及用户态的应用业务对象、TLS 会话上下文、各种超时定时器和日志对象。
我们简单算一笔账：假设操作系统允许每条连接的内核接收缓冲区和发送缓冲区最大都可以增长到 128 KiB。如果有两万条并发连接，仅仅这部分缓冲区的内存开销就能达到：

$$
20\,000\times(128+128)\ \mathrm{KiB}
=5\,120\,000\ \mathrm{KiB}
\approx4.88\ \mathrm{GiB}
$$

而且这还不包括底层网络栈的元数据、受 TCP 拥塞控制（Congestion Control）自动调节带来的波动、用户态应用程序自己的队列内存，以及 TLS 加密库消耗的内存。所以在做系统容量规划时，必须实测进程的常驻内存（RSS）、内核 Socket 占用内存，并对比不同连接规模下的内存增量曲线。

更头疼的是，恶意客户端在建立连接后，还能玩出各种花样来“折磨”服务器：建立连接后什么也不发，无限期空闲；每次只慢吞吞地发一个字节，故意拉长首部解析时间；在协议头声明一个极大的消息长度，然后就停止发送数据干耗着；疯狂向服务端发请求，却故意不读取服务端的响应数据；或者利用单条连接疯狂创建成千上万个并发请求。针对这些花式攻击，我们需要一套立体的防护策略：

| 资源 | 保护参数 |
| --- | --- |
| 握手状态 | SYN 速率限制、半连接队列扩容、边缘流量清洗、SYN Cookies |
| 已连接 Socket | 限制全局并发上限、按租户或单 IP 限并发、设置最大连接存活时间 |
| 读取资源 | 强制首部读取超时、强制正文整体超时、设定最低数据接收速率要求 |
| 内存 | 限制最大消息体长度、限制最大未解析字节数、使用有界接收队列防止 OOM |
| CPU | 限制 TLS 握手速率、控制报文解析复杂度、设定单请求允许的最大 CPU 工作量配额 |
| 写入资源 | 限制应用层发送队列深度、通过高水位线触发背压 (Backpressure)、主动踢掉读取慢的客户端 |
| 下游微服务 | 限制单连接最大未完成请求数、全局并发调度、基于租户的 API 限流配额 |
| 日志系统 | 截断超长日志字段、实施采样与聚合、对敏感信息强制脱敏 |

特别提醒：在制定限流策略时，切忌只依靠“封禁源 IP”这一招。在 NAT 网络、大型企业统一出口网关以及 IPv6 动态分配的环境下，粗暴地封锁单一 IP 很容易误杀一大片正常用户。将用户身份、租户、连接特征、网段和全局容量结合起来进行多维度综合限流更稳健，同时也要为可信的内部批处理任务保留独立额度。

## 六、安全解析长度字段

很多私有 TCP 协议在设计时，首部会包含类似 32 位无符号整数表示长度 `L`、8 位表示消息类型 `T`。一个安全的处理流水线应该是这样的：

1. **强制首部超时**：在首部截止时间内精确读取 5 字节；
2. **长度校验前置**：按网络字节序解析 `L` 后，第一时间检查 `0 ≤ L ≤ MAX_BODY`；
3. **状态机校验**：验证消息类型、协议版本号，判断当前连接状态允许该消息；
4. **强制正文超时**：在正文总截止时间内读取 `L` 字节；
5. **防御性解码**：在后续解码或解压过程中继续限制字段数量、嵌套深度、解压膨胀率，并检查整数运算防溢出；
6. **有界投递**：解析完成后，将任务投递给具有容量上限的业务并发队列，并沿请求 ID 返回明确结果。

为什么一定要先验证长度再分配内存？因为这可以阻止一个恶意的 4 字节字段直接触发巨大的内存分配从而导致 OOM。在计算 `header + length`、`count × element_size` 或偏移量时，也务必使用有界整数检查防止溢出。一旦发现报文被截断或存在异常错误，不要犹豫，立即终止连接，并彻底释放该连接关联的缓冲与任务。

超时的设计也有门道。超时控制必须采用“绝对总截止时间（Deadline）”。如果你把逻辑写成“只要收到一个字节，就重置完整的 5 秒超时”，那攻击者完全可以持续慢速发送，从而无限期地把持着连接寿命。正确的做法是：总截止时间从读取首部或正文时开始计算，后续每次 `recv` 只能使用剩余的时间预算。

## 七、Windows 防御实验

为了让理论落地，下面的 Python 服务端代码仅绑定本地 `127.0.0.1:3838`，限制消息正文最大 4096 字节，最多同时处理 4 条并发连接。它浓缩演示了长度先验证、总截止时间、有限并发以及资源主动释放的安全理念：

```python
import socket, struct, threading, time

MAX_BODY = 4096
MAX_CONNECTIONS = 4
gate = threading.BoundedSemaphore(MAX_CONNECTIONS)

def recv_exact(conn, size, deadline):
    parts, received = [], 0
    while received < size:
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            raise TimeoutError("total read deadline reached")
        conn.settimeout(remaining)
        chunk = conn.recv(min(4096, size - received))
        if not chunk:
            raise EOFError("truncated frame")
        parts.append(chunk)
        received += len(chunk)
    return b"".join(parts)

def handle(conn, peer):
    try:
        with conn:
            # 严格控制首部读取时间
            header = recv_exact(conn, 5, time.monotonic() + 3)
            length, message_type = struct.unpack("!IB", header)

            # 分配内存前，先校验长度是否合法
            if length > MAX_BODY or message_type != 1:
                print("reject", peer, "length", length, "type", message_type)
                return

            # 严格控制正文读取时间
            body = recv_exact(conn, length, time.monotonic() + 5)
            print("accept", peer, "bytes", len(body))
            conn.sendall(b"OK\n")
    except (TimeoutError, EOFError, OSError) as error:
        print("close", peer, type(error).__name__)
    finally:
        gate.release() # 无论正常异常，必须释放信号量

with socket.socket() as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(("127.0.0.1", 3838))
    listener.listen(16)
    print("listening", listener.getsockname())
    while True:
        conn, peer = listener.accept()
        # 非阻塞尝试获取并发额度，防过载
        if gate.acquire(blocking=False):
            threading.Thread(target=handle, args=(conn, peer), daemon=True).start()
        else:
            print("overload reject", peer)
            conn.close()
```

先启动服务，再在另一个 PowerShell 终端运行四类本机客户端来进行测试：

```python
import socket, struct, sys, time

mode = sys.argv[1]
if mode == "valid":
    # 场景1：正常发数据的客户端
    with socket.create_connection(("127.0.0.1", 3838)) as s:
        body = b"hello"
        s.sendall(struct.pack("!IB", len(body), 1) + body)
        print(s.recv(100))
elif mode == "huge":
    # 场景2：声明巨大虚假长度的恶意客户端
    with socket.create_connection(("127.0.0.1", 3838)) as s:
        s.sendall(struct.pack("!IB", 2_000_000, 1))
        print(s.recv(100))
elif mode == "slow":
    # 场景3：慢吞吞每秒发一个字节的慢速客户端
    try:
        with socket.create_connection(("127.0.0.1", 3838)) as s:
            s.sendall(struct.pack("!IB", 10, 1))
            for byte in b"0123456789":
                s.sendall(bytes([byte]))
                time.sleep(1)
    except OSError as error:
        print("server closed after total deadline", type(error).__name__)
elif mode == "many":
    # 场景4：并发轰炸，瞬间打满服务额度
    sockets = [socket.create_connection(("127.0.0.1", 3838)) for _ in range(8)]
    time.sleep(10)
    for s in sockets:
        s.close()
```

```powershell
python .\client38.py valid
python .\client38.py huge
python .\client38.py slow
python .\client38.py many
```

预期结果：合法帧收到 `OK`；巨大长度在分配正文缓冲前被直接拒绝；慢速发送的正文约 5 秒后达到总截止时间被切断；前 4 条空闲连接占用满处理额度，后续连接按过载保护策略被快速关闭。经历测试后，服务仍能接受新的合法请求，进程内存保持稳定。

你可以打开 Wireshark，使用 `tcp.port == 3838` 作为过滤条件，并把每个 `tcp.stream` 与服务端的 `accept/reject/close` 日志一一对齐印证。注意，日志只记录对端、长度、类型和结果，业务正文应留在受控的测试数据中，避免打印敏感信息。

在 Windows 平台上，你还可以采集只读状态实时监控 TCP 连接统计：

```powershell
Get-NetTCPConnection -LocalPort 3838 |
  Group-Object State | Format-Table Count,Name
netstat.exe -s -p tcp
```

## 八、Linux 扩展与生产验证

在 Linux 实验或生产主机上，可通过以下命令透视监听队列与协议统计：

```bash
# 查看监听端口以及 Backlog 队列情况
ss -lnt sport = :3838
# 查看全面的 Socket 统计信息
ss -s
# 重点排查是否有队列溢出、SYN Cookies 触发或异常重置
nstat -az | grep -E 'ListenOverflows|ListenDrops|Syncookies|TCPAbort'
# 查看当前系统的 SYN 队列容量配置
sysctl net.ipv4.tcp_syncookies net.ipv4.tcp_max_syn_backlog
# 查看进程能打开的最大文件描述符数量
ulimit -n
```

这些命令提供的是单机主机视角。真实的生产环境还应将边缘设备的握手成功率、丢弃原因、连接速率、TLS 握手占用的 CPU、每租户并发、内存高水位线（High Water Mark）和请求结果结合起来监控。涉及大规模流量的压测一定要放在专用压测环境中，并由容量、网络与安全团队共同划定系统的安全上限。

过载演练（Chaos Engineering）的验收目标可以写成：在遭遇洪水流量时，正常用户的合法请求成功率维持在约定底线之上；对恶意流量的拒绝操作发生在处理链路的最早期（有界阶段）；系统的内存和队列深度维持稳定（无 OOM）；连接与任务在超出截止时间后被彻底释放；日志量受控不雪崩；流量恢复正常后，服务自动满血回到正常容量状态。

## 理解检查

1. TCP Checksum、TLS 完整性和应用授权分别保护什么？
2. 旁路攻击者（Off-path attacker）与链路中间人（On-path attacker）在伪造 TCP 报文方面有什么能力差异？
3. SYN Cookies 保护的是哪个连接阶段的资源？
4. 为什么最大消息长度必须在分配正文缓冲前验证？
5. 每次读取都重置超时时间，会给慢速连接带来什么可乘之机？
6. 20,000 条连接的缓冲区估算还遗漏了哪些内存开销？
7. 本机的畸形输入实验中，有哪些证据证明服务端的资源得到了妥善释放？

## 延伸阅读

- [RFC 4987：TCP SYN Flooding Attacks and Common Mitigations](https://www.rfc-editor.org/rfc/rfc4987.html)
- [RFC 5961：Improving TCP's Robustness to Blind In-Window Attacks](https://www.rfc-editor.org/rfc/rfc5961.html)
- [RFC 6528：初始序列号算法的历史说明，现已由 RFC 9293 取代](https://www.rfc-editor.org/rfc/rfc6528.html)
- [RFC 9846：The Transport Layer Security Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc9846.html)
- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)

---

[上一章：第37章 TCP Keepalive 与应用层心跳](./07-keepalive-heartbeat.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第39章 TCP、UDP 和 QUIC 的对比](./09-tcp-udp-quic.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
