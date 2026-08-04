# 第39章 TCP、UDP 和 QUIC 的对比

选择传输协议时，“延迟低”或“可靠”都只是一个维度。真正的问题是：应用交付的是连续字节、独立消息，还是多条彼此独立的流；数据迟到后还有多少价值；连接是否需要迁移；加密由哪一层提供；当前网络和运行环境支持哪些实现。

本章把三种协议放进同一张需求表，并用一个受控 UDP 实验收束全书。

## 一、三种传输抽象

### TCP：一条可靠、有序的双向字节流

TCP 先建立连接，再把每个方向的字节编号。接收应用得到连续、有序的字节；丢失由重传恢复，流量控制保护接收端，拥塞控制调节网络中的在途数据。应用负责通过长度字段、分隔符等方式划分消息。

TCP 的有序范围覆盖整条连接。较早字节缺失时，后续已到达字节会留在接收端等待缺口恢复。操作系统通常在内核中提供成熟实现，诊断工具能够直接观察 Seq、Ack、窗口、重传和状态。

### UDP：一个个独立的数据报

UDP 发送与接收以数据报为单位。每个数据报带源端口、目的端口、长度和校验和；接收方一次读取对应一个数据报，接收缓冲过小时会发生截断或丢弃剩余部分，具体 API 会给出相应结果。

UDP 本身没有握手、重传、有序交付、接收窗口和拥塞控制。数据报可以丢失、重复或改变到达顺序。应用协议可根据场景加入请求 ID、序号、确认、重传、前向纠错、速率控制和安全握手。面向公网持续发送 UDP 的应用仍需遵循拥塞控制原则，并把数据报尺寸控制在路径可承载范围内。

UDP Socket 调用 `connect` 时，操作系统只是记录默认对端并过滤部分输入，线上不会因此出现 UDP 握手。

### QUIC：基于 UDP 的安全连接与多条流

QUIC 在 UDP 之上实现连接、TLS 1.3安全握手、可靠流、确认、丢包恢复、流量控制与拥塞控制。它通常位于用户空间，协议迭代和应用集成更灵活。

一条 QUIC 连接可以承载多条流。每条流内部可靠有序；某条流丢失数据时，其他流已经完整收到的数据仍可交给应用。这消除了 TCP 字节流在多路复用场景中的跨流传输层队头等待。各流共享路径和连接拥塞控制，所以丢包仍会降低整条连接可用发送速率。

QUIC 使用 Connection ID 标识连接，并提供路径验证与连接迁移机制。QUIC v1 的主动迁移由客户端发起；移动设备从 Wi-Fi 切到蜂窝网络、NAT 映射变化时，连接具备继续迁移的协议基础。迁移还要满足握手已确认、对端策略允许和新路径验证等条件。QUIC 默认集成加密，大部分传输控制信息也受保护，抓包分析更依赖端点日志和密钥材料。

## 二、多维比较

| 维度 | TCP | UDP | QUIC |
| --- | --- | --- | --- |
| 应用抽象 | 双向字节流 | 独立数据报 | 连接内多条流，可扩展数据报 |
| 可靠性 | 可靠交付连续字节 | 由应用协议决定 | 流内可靠；QUIC DATAGRAM 可提供非可靠消息 |
| 有序范围 | 整条连接每个方向 | 无内建顺序 | 每条流内部 |
| 建立 | 三次握手；TLS另行握手 | 无传输握手 | 传输与 TLS 集成握手，恢复时可使用 0-RTT |
| 加密 | 由 TLS 等上层协议加入 | 由 DTLS 或应用协议加入 | 协议内集成 TLS 1.3 |
| 拥塞控制 | 内建 | 应用协议负责 | 内建 |
| 多路复用 | 由 HTTP/2 等应用层完成 | 应用自行定义 | 传输层流 |
| 路径变化 | 四元组变化通常需要新连接 | 应用可继续向新地址发送 | Connection ID 与路径验证支持迁移 |
| 实现位置 | 通常为操作系统内核 | 操作系统内核提供数据报接口 | 通常为用户空间库加 UDP |
| 网络部署 | 成熟、覆盖广 | 覆盖广，部分网络会限速或过滤 | 依赖 UDP 可达与 QUIC 支持，可设计回退 |
| 观察方式 | TCP 字段和状态较丰富 | 数据报、ICMP 与应用字段 | 包长、时序、Connection ID及端点日志 |

“一次调用就发出去”只描述 API 时刻。UDP 应用若需要身份认证、可靠性与拥塞控制，也会产生握手、状态、计时器和额外往返。TCP 或 QUIC 复用一条已建立连接时，后续请求可以直接写入，实际延迟由连接状态、RTT、排队、丢包和应用处理共同决定。

## 三、HTTP/1.1、HTTP/2 与 HTTP/3

回到第1章的浏览器访问地图：

```text
HTTP/1.1 → TLS → TCP → IP
HTTP/2   → TLS → TCP → IP
HTTP/3   → QUIC（集成 TLS）→ UDP → IP
```

这张图描述浏览器访问 HTTPS 站点的常见封装；明文 HTTP/1.1 与 h2c 会省去 TLS。HTTP/1.1 常通过连接复用与多条连接组织请求。HTTP/2 把多个 Stream 的 Frame 复用进一条 TCP 字节流；某个 TCP 段丢失时，接收端需要先恢复字节缺口，随后才能把完整的后续 HTTP/2 Frame 交给各 Stream。

HTTP/3 把 HTTP Stream 映射到 QUIC Stream。一条流的缺口只约束该流的有序交付，其他流可继续推进。连接级拥塞、服务器处理、优先级与带宽仍会共同影响所有请求。

抓包上，HTTP/2 over TLS 能看到 TCP 握手、Seq/Ack 与 TLS Record 外形；HTTP/3通常表现为 UDP 上的 QUIC 包。解析加密后的 HTTP 内容需要端点导出的会话密钥和兼容分析器。

## 四、场景选择

### Web 与通用 API

现有 HTTP 生态、企业代理和成熟服务栈通常让 TCP+TLS 与 HTTP/2具有很高可部署性。面向支持 HTTP/3 的客户端、存在多流并发与移动网络切换时，QUIC可以提供有价值的连接建立和独立流能力。生产部署常同时开放 HTTP/2 与 HTTP/3，并依据协商和网络可达性选择。

### DNS

经典 DNS 使用 UDP 完成许多紧凑查询，也使用 TCP 处理截断响应、较大消息与区域传送。现代 DNS 还可以运行在 TLS、HTTPS 或 QUIC 上。选择取决于消息尺寸、隐私、连接复用和部署环境。

### 实时音视频与在线游戏

语音帧到达播放截止时间后，晚到价值通常很低。基于 UDP 的实时协议可以自行决定重传窗口、前向纠错、抖动缓冲和拥塞控制。游戏也常把位置快照放进可丢失的数据报，把登录、支付与关键状态转换放进可靠通道。QUIC可靠流与 QUIC DATAGRAM 可以在一个安全连接中组合两类语义。

### 遥测、控制与文件传输

周期性遥测可通过序号识别丢失和重复；关键控制命令还需要身份认证、可靠结果、幂等和审计。文件传输通常重视完整、有序交付，TCP+TLS 或 QUIC 流都能提供良好基础。最终选择还会受库成熟度、代理支持、CPU 成本、运维工具和团队经验影响。

## 五、在 UDP 上补可靠性意味着什么

假设自定义 UDP 协议需要可靠交付一份大文件，它至少要处理：

- 消息或字节编号、分片与重组；
- 确认、重复检测、超时估计和重传；
- 乱序缓存与内存上限；
- 流量控制、拥塞控制和路径 MTU；
- 握手、身份认证、密钥更新与重放保护；
- NAT 映射、地址变化、关闭和版本协商；
- 弱网恢复、公平性与跨平台测试。

这些状态正是成熟传输协议长期演进的核心。自定义设计适合具有特殊时效语义和充分协议工程能力的团队；常规可靠流场景直接采用 TCP+TLS 或 QUIC 能显著降低正确性负担。

## 六、Windows 实验：亲眼看见 UDP 数据报语义

下面的程序只绑定回环地址 `127.0.0.1:3939`。服务端故意丢弃序号为 3 的倍数的响应，并让奇数响应稍晚发送，从而稳定呈现丢失与乱序。它模拟应用可观察结果，不改变系统网络配置。

```python
import socket, sys, threading, time

ADDRESS = ("127.0.0.1", 3939)

def run_server():
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
        sock.bind(ADDRESS)
        print("UDP server", ADDRESS)
        while True:
            data, peer = sock.recvfrom(2048)
            sequence = int(data.decode().split(":")[1])
            print("one datagram", sequence, "bytes", len(data))
            if sequence % 3 == 0:
                print("controlled drop", sequence)
                continue
            def reply(payload=data, target=peer, seq=sequence):
                time.sleep(0.15 if seq % 2 else 0.01)
                sock.sendto(payload, target)
            threading.Thread(target=reply, daemon=True).start()

def run_client():
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
        sock.settimeout(0.2)
        for sequence in range(1, 7):
            sock.sendto(f"SEQ:{sequence}".encode(), ADDRESS)
        received = []
        deadline = time.monotonic() + 1
        while time.monotonic() < deadline:
            try:
                data, _ = sock.recvfrom(2048)
                received.append(int(data.decode().split(":")[1]))
            except socket.timeout:
                pass
        print("received order", received)
        print("missing", sorted(set(range(1, 7)) - set(received)))

run_server() if sys.argv[1] == "server" else run_client()
```

分别在两个 PowerShell 终端运行：

```powershell
python .\udp39.py server
python .\udp39.py client
```

预期客户端得到类似 `[2, 4, 1, 5]` 的顺序，并报告缺少 `[3, 6]`。每次 `recvfrom` 都取得一个完整的短数据报。若协议要求完整可靠结果，客户端需要为缺失序号安排重传、去重、截止时间和速率控制。

同时捕获 Npcap Loopback Adapter：

```text
udp.port == 3939 || tcp.port == 3939 || quic
```

然后复用[第26章的长度字段 TCP 服务](../06-application-development/02-application-protocol.md)，把端口改为 TCP 3939并连续发送六条消息。TCP 抓包会呈现 Seq/Ack 和可能的分段组合，应用通过长度字段恢复六条有序消息；UDP 抓包直接保留六个请求数据报，其中应用控制了两条响应缺失。

查看本机 `curl` 是否具备 HTTP/3 能力：

```powershell
curl.exe --version
```

输出的 `Features` 或 `Protocols` 若包含 HTTP3，可继续连接自己控制的 HTTP/3测试端点，并用 `curl.exe --http3-only` 验证；缺少该能力时，保留 TCP/UDP 实验结果，并在具备受控 HTTP/3环境后补充 QUIC 抓包。工具能力属于实验前置条件，应写入报告。

## 七、Linux 扩展与选择清单

Linux 上运行同一 UDP程序后，可以对照 Socket 与抓包：

```bash
ss -uapn | grep 3939
sudo tcpdump -ni lo 'udp port 3939 or tcp port 3939'
```

为真实项目选型时依次回答：

1. 交付单位是连续字节、独立消息，还是多条并发流？
2. 每类数据需要可靠、有序、可丢弃或有截止时间中的哪些语义？
3. 是否需要内建加密、连接迁移、0-RTT 或 QUIC DATAGRAM？
4. UDP 在目标企业网、移动网、代理和云入口中的可达性怎样？
5. 客户端与服务端是否具备成熟库、升级机制和密钥日志能力？
6. 团队能否持续验证拥塞控制、弱网、公平性、安全和互操作？
7. 降级路径会保留哪些语义，监控怎样区分实际使用的协议？

协议名称给出能力起点，端到端表现仍由实现、路径、负载和应用设计共同决定。

## 理解检查

1. TCP、UDP 与 QUIC向应用提供的基本数据单位分别是什么？
2. QUIC 怎样缩小多流场景中的传输层队头等待范围？
3. UDP 应用获得可靠交付时，需要新增哪些关键机制？
4. UDP 缺少握手为什么只代表少一次传输层步骤？
5. HTTP/2 与 HTTP/3 遇到单包丢失时，各 Stream 的交付会怎样变化？
6. 实时音视频、关键控制命令和文件传输分别看重哪些语义？
7. 为什么 QUIC 选型还需要检查 UDP 可达性与运维工具？

## 延伸阅读

- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)
- [RFC 768：User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768.html)
- [RFC 8085：UDP Usage Guidelines](https://www.rfc-editor.org/rfc/rfc8085.html)
- [RFC 9000：QUIC: A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000.html)
- [RFC 9001：Using TLS to Secure QUIC](https://www.rfc-editor.org/rfc/rfc9001.html)
- [RFC 9002：QUIC Loss Detection and Congestion Control](https://www.rfc-editor.org/rfc/rfc9002.html)
- [RFC 9221：An Unreliable Datagram Extension to QUIC](https://www.rfc-editor.org/rfc/rfc9221.html)
- [RFC 9114：HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html)

---

[上一章：第38章 TCP 安全基础](./08-security.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一页：附录](../08-appendices.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
