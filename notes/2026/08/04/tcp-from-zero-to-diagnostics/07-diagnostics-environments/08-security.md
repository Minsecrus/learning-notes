# 第38章 TCP 安全基础

TCP 服务面对的输入不仅是业务数据，还包括连接建立速率、并发连接、发送节奏、消息长度、关闭方式和重试行为。任何能够触发状态分配、内存分配、CPU 计算或日志写入的输入，都应纳入资源预算。

安全设计可以从三个目标展开：保护传输内容与身份关系；让协议状态和解析器能够处理任意输入；让有限资源在过载时仍按明确策略分配与释放。

## 一、先建立威胁模型

分析一个 TCP 服务时，先写出参与者和能力：

- **路径外参与者**：可以向服务地址发送报文，但看不到当前连接中的 Seq、Ack 与内容；
- **路径上参与者**：可以观察、延迟、丢弃、复制或修改经过路径的流量；
- **已连接客户端**：可以建立合法连接，再发送畸形、超大、缓慢或高频应用消息；
- **被盗用账户**：拥有有效身份，仍可能超出合理资源配额或访问权限；
- **故障组件**：代理、客户端或服务端 bug 也能产生与恶意流量相同的异常输入。

边界随部署变化。TLS 若在反向代理终止，客户端到代理的内容受 TLS 保护，代理到后端是否继续加密取决于内部连接配置；此时代理成为明确的信任边界。

## 二、TCP 校验和与 TLS 保护不同目标

TCP Checksum覆盖 TCP 伪首部、TCP 首部和数据，用于发现传输中的比特错误。它采用公开算法，路径参与者修改内容后也能重新计算。因此，密码学机密性、身份认证与完整性由 TLS 等安全协议提供。

TLS 1.3 的现行规范 RFC 9846 可以提供：

- 对应用数据加密，降低路径观察者读取内容的能力；
- 通过证书与握手验证对端身份，具体保证取决于验证配置；
- 对记录提供密码学完整性，修改会在验证时被发现；
- 派生会话密钥；常见的临时 Diffie-Hellman（如 ECDHE）握手可以提供前向保密，具体保证取决于握手模式与恢复配置。

TLS 仍会暴露一部分网络元数据，例如 IP、端口、连接时间、方向、包长与流量节奏。TLS 终止端能够看到明文。应用继续负责用户授权、租户隔离、输入验证、审计、业务幂等与资源配额。TLS 1.3 的 0-RTT 数据具有重放考虑，部署时将 0-RTT 限定为可安全重放的操作，并让服务端策略参与判断。

## 三、初始序列号和伪造报文防护

TCP 使用初始序列号建立字节空间。路径外参与者若想把伪造数据或 RST 注入已有连接，需要让报文落入接收端可接受的序列范围。现行基础规范 RFC 9293 已纳入 RFC 6528 的初始序列号生成方法，并取代 RFC 6528：实现使用随时间推进的分量，加上由四元组和秘密密钥参与的伪随机函数结果，让序列空间保持难以预测，同时降低旧连接报文与新连接混淆的机会。

路径上参与者能够直接观察四元组和序列进度，TLS 因此承担内容机密性与应用数据完整性。TCP 首部位于 TLS 之外，路径设备仍能丢弃报文或干扰连接可用性。

RFC 5961 加强了对伪造 RST、SYN 和数据的处理。其中一种机制是 Challenge ACK：收到可疑但处于一定接受范围的报文时，端点先发送确认以验证对方状态，再根据后续有效响应更新连接。操作系统通常还会限制 Challenge ACK速率，以平衡安全和资源消耗。

诊断疑似重置时，记录 RST 的抓包位置、TTL或 Hop Limit、MAC 下一跳、Seq/Ack 合法性、IP ID 等辅助特征，并与两端日志核对。单个抓包点只呈现该位置的事实，来源归属需要多点证据。

## 四、SYN Flood 消耗什么资源

被动端收到 SYN 后，通常为未完成握手保存状态，并发送 SYN+ACK。大量握手长期停留在 `SYN-RECEIVED` 会占用半连接队列、内存、计时器、发包能力和设备状态表。合法客户端随后可能经历 SYN 丢弃、重传或连接超时。

常见防御形成多层组合：

- 合理设置未完成握手队列和已完成连接队列容量；
- 对源、网段、租户或入口实施连接速率与并发限制；
- 使用 SYN Cookies，在队列压力下把必要状态编码进 SYN+ACK 的序列号，收到合法 ACK 后再创建完整连接状态；
- 在边缘负载均衡、DDoS 防护和上游网络吸收大规模流量；
- 通过源地址验证、异常检测和容量预留降低伪造流量影响；
- 监控 SYN 收到数、SYN+ACK 重传、握手成功率、队列溢出和 Cookie 启用次数。

SYN Cookies 适合保护握手状态资源，其可编码信息与 TCP 选项处理会受具体实现约束。启用结果需要结合真实握手选项和内核指标验证。应用层连接限制只会在握手完成、`accept` 返回后生效，因而与握手层防护相互补充。

## 五、连接建立后仍有多种资源压力

每条已建立连接可能占用内核发送/接收缓冲、Socket 状态、应用对象、TLS 状态、定时器和日志上下文。若每条连接可增长到 128 KiB 接收缓冲加 128 KiB 发送缓冲，20,000 条连接仅这两项的数量级就是：

$$
20\,000\times(128+128)\ \mathrm{KiB}
=5\,120\,000\ \mathrm{KiB}
\approx4.88\ \mathrm{GiB}
$$

实际内存还包括元数据、自动调节后的缓冲、应用队列和加密库。容量规划应测量进程常驻内存、内核 Socket 内存和不同连接阶段的增量。

已连接客户端可以采用多种节奏：只建立连接并空闲；逐字节缓慢发送首部；声明巨大长度后停顿；持续发送请求却停止读取响应；在单连接上创建大量未完成请求。相应防御包括：

| 资源 | 保护参数 |
| --- | --- |
| 握手状态 | SYN 速率、半连接队列、边缘清洗、SYN Cookies |
| 已连接 Socket | 全局、每租户、每来源并发上限与连接寿命 |
| 读取资源 | 首部截止时间、正文总截止时间、最低进度要求 |
| 内存 | 最大消息、最大未解析字节、有限接收队列 |
| CPU | TLS 握手速率、解析复杂度、每请求工作量配额 |
| 写入资源 | 有限发送队列、高水位背压、慢接收方淘汰 |
| 下游 | 每连接未完成请求数、全局并发、租户配额 |
| 日志 | 字段长度限制、采样、聚合和敏感信息脱敏 |

单一 IP 配额在 NAT、大型企业出口和 IPv6 地址变化环境中容易同时影响许多用户。身份、租户、连接、网段和全局容量组合起来更稳健，并为可信内部批处理保留独立额度。

## 六、安全解析长度字段

假设协议首部包含 32 位无符号长度 `L`、8 位消息类型 `T`。安全处理顺序是：

1. 在首部截止时间内精确读取 5 字节；
2. 按网络字节序解析 `L`，先检查 `0 ≤ L ≤ MAX_BODY`；
3. 验证消息类型、版本和当前连接状态允许该消息；
4. 在正文总截止时间内读取 `L` 字节；
5. 在解码或解压过程中继续限制字段数量、嵌套深度、解压后大小，并检查整数运算；
6. 业务处理进入有界并发队列，并沿请求 ID 返回明确结果。

先验证长度再分配对应内存，可以阻止一个 4 字节字段触发巨大分配。计算 `header + length`、`count × element_size` 或偏移时使用有界整数检查。截断正文进入协议错误路径，并立即释放该连接关联的缓冲与任务。

超时应采用总截止时间。每收到一个字节就重新获得完整的 5 秒，会让持续慢速发送无限延长连接寿命。总截止时间从首部或正文阶段开始时计算，后续每次 `recv` 只使用剩余预算。

## 七、Windows 防御实验

下面的服务仅绑定 `127.0.0.1:3838`，最大正文 4096 字节，最多同时处理 4 条连接。它演示长度先验证、总截止时间、有限并发和资源释放：

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
            header = recv_exact(conn, 5, time.monotonic() + 3)
            length, message_type = struct.unpack("!IB", header)
            if length > MAX_BODY or message_type != 1:
                print("reject", peer, "length", length, "type", message_type)
                return
            body = recv_exact(conn, length, time.monotonic() + 5)
            print("accept", peer, "bytes", len(body))
            conn.sendall(b"OK\n")
    except (TimeoutError, EOFError, OSError) as error:
        print("close", peer, type(error).__name__)
    finally:
        gate.release()

with socket.socket() as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(("127.0.0.1", 3838))
    listener.listen(16)
    print("listening", listener.getsockname())
    while True:
        conn, peer = listener.accept()
        if gate.acquire(blocking=False):
            threading.Thread(target=handle, args=(conn, peer), daemon=True).start()
        else:
            print("overload reject", peer)
            conn.close()
```

先启动服务，再在另一个 PowerShell 终端运行四类本机客户端：

```python
import socket, struct, sys, time

mode = sys.argv[1]
if mode == "valid":
    with socket.create_connection(("127.0.0.1", 3838)) as s:
        body = b"hello"
        s.sendall(struct.pack("!IB", len(body), 1) + body)
        print(s.recv(100))
elif mode == "huge":
    with socket.create_connection(("127.0.0.1", 3838)) as s:
        s.sendall(struct.pack("!IB", 2_000_000, 1))
        print(s.recv(100))
elif mode == "slow":
    try:
        with socket.create_connection(("127.0.0.1", 3838)) as s:
            s.sendall(struct.pack("!IB", 10, 1))
            for byte in b"0123456789":
                s.sendall(bytes([byte]))
                time.sleep(1)
    except OSError as error:
        print("server closed after total deadline", type(error).__name__)
elif mode == "many":
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

预期结果：合法帧收到 `OK`；巨大长度在分配正文前被拒绝；慢速正文约 5 秒后达到总截止时间；前 4 条空闲连接占用处理额度，后续连接按过载策略快速关闭。服务随后仍能接受新的合法请求，进程内存保持稳定。

Wireshark 使用 `tcp.port == 3838`，并把每个 `tcp.stream` 与服务端的 `accept/reject/close` 日志对齐。日志只记录对端、长度、类型和结果，业务正文留在受控测试数据中。

Windows 还可以采集只读状态：

```powershell
Get-NetTCPConnection -LocalPort 3838 |
  Group-Object State | Format-Table Count,Name
netstat.exe -s -p tcp
```

## 八、Linux 扩展与生产验证

Linux 实验主机可读取监听队列与协议统计：

```bash
ss -lnt sport = :3838
ss -s
nstat -az | grep -E 'ListenOverflows|ListenDrops|Syncookies|TCPAbort'
sysctl net.ipv4.tcp_syncookies net.ipv4.tcp_max_syn_backlog
ulimit -n
```

这些命令提供主机视角。生产环境还应联合边缘设备的握手成功率、丢弃原因、连接速率、TLS 握手 CPU、每租户并发、内存高水位和请求结果。大规模流量测试放在专用压测环境，并由容量、网络与安全团队共同设定上限。

过载演练的验收目标可以写成：合法请求成功率维持在约定范围；拒绝发生在有界阶段；内存和队列稳定；连接与任务在截止时间后释放；日志量受控；流量恢复后服务自动回到正常容量。

## 理解检查

1. TCP Checksum、TLS 完整性和应用授权分别保护什么？
2. 路径外与路径上参与者在伪造 TCP 报文方面具有什么能力差异？
3. SYN Cookies 保护的是哪个连接阶段的资源？
4. 为什么最大消息长度必须在分配正文缓冲前验证？
5. 每次读取都重置超时会给慢速连接带来什么机会？
6. 20,000 条连接的缓冲区估算还遗漏了哪些内存？
7. 一次本机畸形输入实验通过哪些证据证明资源得到释放？

## 延伸阅读

- [RFC 4987：TCP SYN Flooding Attacks and Common Mitigations](https://www.rfc-editor.org/rfc/rfc4987.html)
- [RFC 5961：Improving TCP's Robustness to Blind In-Window Attacks](https://www.rfc-editor.org/rfc/rfc5961.html)
- [RFC 6528：初始序列号算法的历史说明，现已由 RFC 9293 取代](https://www.rfc-editor.org/rfc/rfc6528.html)
- [RFC 9846：The Transport Layer Security Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc9846.html)
- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)

---

[上一章：第37章 TCP Keepalive 与应用层心跳](./07-keepalive-heartbeat.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第39章 TCP、UDP 和 QUIC 的对比](./09-tcp-udp-quic.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
