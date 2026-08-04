# TCP 术语表

同一个数据对象在不同层有不同名称。术语表按层次整理，阅读抓包和文档时先确定当前讨论的层。

## 数据单位与分层

| 术语 | 层次 | 定义 | 相关术语 |
| --- | --- | --- | --- |
| Frame（帧） | 链路层 | 一次链路传输的数据单位，常见以太网帧包含源/目标 MAC、EtherType、Payload 与校验字段 | MAC、Ethernet、Wi-Fi |
| Packet（包） | 通用称呼 | 对网络数据单位的宽泛称呼，具体含义由上下文决定 | Frame、Datagram、Segment |
| IP Datagram（IP 数据报） | 网络层 | IPv4 或 IPv6 承载的网络层数据单位，包含源/目标 IP 和上层 Payload | 路由、TTL、Hop Limit |
| TCP Segment（TCP 报文段） | 传输层 | TCP 首部加 TCP 数据组成的数据单位 | Seq、Ack、Flags、Window |
| Payload（载荷） | 相对概念 | 某一层交给上一层的数据；TCP Payload 通常是应用字节或 TLS 字节 | Header、封装 |
| Encapsulation（封装） | 跨层 | 上层数据逐层加上当前层控制信息的过程 | 解封装、协议栈 |
| Byte Stream（字节流） | TCP 服务 | 一条有序字节序列，应用按任意合适大小写入和读取 | 消息边界、部分读取 |
| Application Message（应用消息） | 应用层 | 应用协议定义的完整语义单位，例如一个请求、一条聊天消息 | 分帧、长度前缀、TLV |
| Framing（分帧） | 应用层 | 在字节流上识别消息开始、长度和结束的方法 | 固定长度、分隔符、长度字段 |

## 地址、端点与连接

| 术语 | 层次 | 定义 | 观察方式 |
| --- | --- | --- | --- |
| IP Address | 网络层 | 标识一个网络接口或逻辑网络端点的地址，用于跨网络转发 | `Get-NetIPAddress`、`ip address`、IP 首部 |
| Port（端口） | 传输层 | 16位数字，帮助主机把 TCP/UDP 流量交给相应端点 | Socket 地址、TCP 首部 |
| Ephemeral Port（临时端口） | 操作系统 | 系统通常为主动连接自动选择的短期本地端口 | 四元组、系统连接表 |
| Socket | API/操作系统 | 应用访问通信端点的句柄与内核对象抽象 | 程序变量、文件描述符或句柄 |
| Endpoint（端点） | 通用 | 通信的一端；在 TCP 语境中常由 IP 地址与端口描述 | 本地/远端 Socket 地址 |
| Listening Socket（监听 Socket） | API/操作系统 | 经过 `bind` 与 `listen`、用于接收新连接的被动端点 | LISTEN 状态 |
| Connected Socket（已连接 Socket） | API/操作系统 | 关联本地与远端地址、可收发字节的 Socket | ESTABLISHED 等连接状态 |
| Connection（连接） | TCP | 两端共同维护的双向通信状态，包含序列空间、窗口、计时器与缓冲信息 | 四元组、状态机、抓包 |
| Four-tuple（四元组） | TCP 查找 | 源 IP、源端口、目标 IP、目标端口的组合 | 系统连接表、抓包 |
| Client（客户端） | 应用角色 | 主动发起某次连接或请求的一方 | `connect`、初始 SYN |
| Server（服务端） | 应用角色 | 监听地址并接受连接、处理请求的一方 | `listen`、`accept` |
| Wildcard Address（通配地址） | Socket 绑定 | IPv4 的 `0.0.0.0` 或 IPv6 的 `::`，表示在符合规则的本地地址上接受流量 | 监听地址 |
| Loopback（回环） | 主机网络 | 本机内部通信路径；IPv4 常用 `127.0.0.1`，IPv6 常用 `::1` | 回环接口抓包 |

## 序列、确认与可靠性

| 术语 | 定义 | 关键点 |
| --- | --- | --- |
| ISN（Initial Sequence Number） | 一个方向建立连接时选择的初始序列号 | 双方各自选择；SYN 占一个序列号位置 |
| Seq（Sequence Number） | 当前报文段首个数据字节在本方向序列空间的位置；SYN 设置时先携带 ISN | 给字节位置编号；SYN 占一个位置；32位回绕 |
| Ack（Acknowledgment Number） | 反方向下一个期待字节的位置 | ACK 位有效时解释；表达连续前缀接收进度 |
| Cumulative ACK（累计确认） | 一个 Ack 值同时覆盖此前连续到达的全部字节 | 缺口会让 Ack 停在缺口起点 |
| Delayed ACK（延迟确认） | 接收方在规则允许的短时间内合并确认 | 影响 ACK 数量和小消息时序 |
| Duplicate ACK（重复 ACK） | 接收方重复公布相同累计 Ack，通常同时携带新的上下文 | 可能反映缺口、乱序或窗口变化 |
| SACK（Selective Acknowledgment） | ACK 选项报告已收到的不连续字节范围 | 让发送方更精确地修复缺口 |
| D-SACK | 使用 SACK 结构报告重复收到的字节范围 | 可帮助识别伪重传与乱序程度 |
| Retransmission（重传） | 发送方再次发送某个序列范围 | 由 RTO、快速恢复、RACK 等机制触发 |
| RACK | 使用发送时间与确认反馈推断丢失的算法 | 对小规模在途数据、乱序和丢失重传具有更强适应性 |
| TLP（Tail Loss Probe） | 尾部数据缺少 ACK 时发送探测以促成反馈 | 与 RACK 配合，降低等待 RTO 的机会 |
| RTT（Round-Trip Time） | 数据从发送到相关确认返回的往返时间 | 路径、排队和端点行为共同影响 |
| SRTT（Smoothed RTT） | 对 RTT 样本平滑后的估计 | 用于稳定计时器计算 |
| RTO（Retransmission Timeout） | 未确认数据触发超时重传的等待时间 | 根据 SRTT 与变化程度计算，并受最小值与退避规则约束 |
| Checksum（校验和） | 覆盖 TCP 首部、数据与 IP 伪首部的差错检测值 | 网卡卸载会改变本机抓包中的计算时机 |

## 窗口、流量与拥塞

| 术语 | 层次 | 定义 | 关系 |
| --- | --- | --- | --- |
| Send Buffer（发送缓冲区） | 操作系统 | 保存应用已交给内核、仍需发送或确认的字节 | 部分写入、可写事件、内存 |
| Receive Buffer（接收缓冲区） | 操作系统 | 保存协议栈已接收、等待应用读取的字节及相关状态 | `rwnd`、Zero Window |
| `rwnd`（接收窗口） | TCP 流量控制 | 接收方公布的可接受序列空间范围 | 保护接收端缓冲能力 |
| Window Scale | TCP 扩展 | 握手协商的窗口缩放指数 | 扩展16位 Window 字段的表达范围 |
| Sliding Window（滑动窗口） | TCP 模型 | 确认推进后，允许发送的序列范围向前移动 | Seq、Ack、`rwnd`、`cwnd` |
| Zero Window | TCP 流量控制 | 接收方公布当前窗口为0 | 发送方暂停常规新数据并进入窗口探测流程 |
| Persist Timer | TCP 流量控制 | 零窗口期间维持探测的计时机制 | 防止窗口更新丢失后双方长期等待 |
| `cwnd`（拥塞窗口） | TCP 拥塞控制 | 发送方依据网络反馈维护的在途数据限制 | 与 `rwnd`、应用供数共同约束发送 |
| `ssthresh` | TCP 拥塞控制 | 慢启动与拥塞避免之间的门槛变量 | 拥塞事件会影响其取值 |
| Flight Size | TCP 发送状态 | 已发送且尚未确认的在途数据量 | 可能小于 `cwnd` |
| Slow Start（慢启动） | 拥塞控制阶段 | 以较快速度探测可用容量的窗口增长阶段 | 初始传输与部分恢复场景 |
| Congestion Avoidance（拥塞避免） | 拥塞控制阶段 | 接近已知容量后较温和地增加发送量 | Reno、CUBIC 等算法有不同增长曲线 |
| Fast Retransmit（快速重传） | 丢包恢复 | 依靠 ACK/SACK 反馈在 RTO 前修复缺口的经典机制 | 常与快速恢复配合 |
| Fast Recovery（快速恢复） | 拥塞控制/恢复 | 丢包事件后调整窗口并维持 ACK 时钟的阶段 | 算法细节依实现与规范 |
| ECN | 网络层与传输层 | 路由设备用标记表达拥塞，端点通过 TCP 标志反馈 | ECE、CWR、AE |
| Pacing | 发送实现 | 在时间上平滑安排报文发送 | 降低突发，配合拥塞控制 |

## 容量、时延与尺寸

| 术语 | 定义 | 计算或观察 |
| --- | --- | --- |
| Bandwidth（带宽） | 路径或链路单位时间可承载的数据率 | bit/s、Mbit/s、Gbit/s |
| Throughput（吞吐量） | 实际单位时间完成传输的数据量 | 字节数除以持续时间 |
| Goodput（有效吞吐） | 应用真正获得的有效数据率 | 扣除首部、重传和协议开销 |
| Latency（延迟） | 一个操作或数据传播所经历的时间 | 单向延迟、RTT、请求总耗时 |
| BDP（Bandwidth-Delay Product） | 带宽与 RTT 的乘积，表示填满路径所需的在途数据量 | 统一单位后计算为 bit 或 byte |
| MTU | 某一链路可承载的网络层数据报大小限制 | 以太网常见1500字节，实际环境依接口与隧道而定 |
| PMTU | 一条路径上可使用的最大 IP 数据报大小 | 路径中最小限制决定 |
| MSS | TCP 一个方向愿意接收的最大 TCP 数据载荷 | SYN 中公布，通常从 MTU 和首部开销估算 |
| Fragmentation（分片） | 将较大 IP 数据报拆为适合路径的数据单位 | IPv4 路由器在条件允许时可参与；IPv6 由端点处理 |
| PMTUD | 发现路径 MTU 的机制 | 利用 ICMP 反馈与发送策略调整 |
| PMTU Black Hole | 较大数据持续失败、必要反馈又无法返回的路径现象 | 小报文成功、大报文停滞是常见线索 |

## 生命周期与关闭

| 术语 | 定义 | 观察点 |
| --- | --- | --- |
| Three-Way Handshake（三次握手） | SYN、SYN+ACK、ACK 建立双方连接状态并同步初始序列号 | 抓包、SYN-SENT、SYN-RECEIVED、ESTABLISHED |
| FIN | 有序结束一个方向发送的控制位 | 占一个序列号位置 |
| EOF | 应用读取接口报告对端有序字节流已经结束 | 缓冲数据读取完成后 `recv` 返回长度为0的结果，Python 中为 `b''` |
| Half-Close（半关闭） | 一个方向完成发送，反方向继续传输 | `shutdown(SHUT_WR)`、FIN、继续读取 |
| Half-Open Connection（半开连接） | 一端保留连接状态，另一端已经失去相应状态或不可达 | 主机重启、路径中断、状态超时 |
| RST | 立即重置或拒绝连接状态的 TCP 控制位 | Connection refused、reset 错误、RST 抓包 |
| TIME-WAIT | 主动关闭常见的短期保留状态 | 隔离迟到报文并支持最终 ACK 场景 |
| CLOSE-WAIT | 已收到对端 FIN、等待本地应用完成关闭的状态 | 应用 EOF 处理和资源释放 |
| Graceful Close（有序关闭） | 已发送字节按 TCP 语义处理，并通过 FIN 结束方向 | FIN/ACK、半关闭、EOF |
| Abortive Close（中止式关闭） | 立即终止连接并放弃有序关闭流程的关闭方式 | 常见表现为 RST，具体受平台和选项影响 |

## 应用协议与工程

| 术语 | 定义 | 例子 |
| --- | --- | --- |
| Length Prefix（长度前缀） | 首部携带后续消息体字节数的分帧方式 | 4字节大端长度 + Payload |
| TLV | Type、Length、Value 组成的可扩展字段结构 | 选项、扩展属性 |
| Magic | 协议首部中的固定识别字节 | 快速发现错协议或错位解析 |
| Request ID | 标识一次逻辑请求的唯一值 | 关联日志、响应、去重和结果查询 |
| Deadline（截止时间） | 一次操作允许使用的总时间边界 | 多次读写共享剩余预算 |
| Timeout（超时） | 某个等待阶段达到时间边界后返回控制 | 连接、读取、写入、空闲、请求总超时 |
| Retry（重试） | 在满足策略时再次执行传输或逻辑请求 | 指数退避、随机抖动、次数上限 |
| Idempotency（幂等性） | 同一逻辑操作执行一次或多次产生相同业务结果 | 请求 ID 去重、幂等键 |
| Backpressure（背压） | 下游变慢时向上游传递容量限制 | 有限队列、暂停读取、并发上限 |
| High-Water Mark（高水位） | 缓冲或队列达到某阈值时触发限流动作 | 暂停生产、暂停读、拒绝新请求 |
| Keepalive | TCP 层针对长期空闲连接的探测机制 | 空闲时间、间隔、次数 |
| Heartbeat（心跳） | 应用层周期消息，用于验证远端程序仍能处理协议 | Ping/Pong、租约续期 |
| Health Check（健康检查） | 验证服务是否满足特定可用条件 | 连接检查、协议检查、依赖检查 |

## 网络路径与观察

| 术语 | 定义 | 分析提示 |
| --- | --- | --- |
| NAT | 修改地址或端口并维护映射状态的网络功能 | NAT 前后四元组不同 |
| Stateful Firewall（状态防火墙） | 按连接状态和规则允许、拒绝或回收流量 | 关注空闲超时与双向路径 |
| Layer 4 Load Balancer | 按传输层连接分发流量 | 可以转发、NAT 或终止传输连接，依产品架构而定 |
| Layer 7 Proxy | 解析应用协议并建立上游连接的代理 | 客户端侧与后端侧通常是两条独立 TCP 连接 |
| Capture Point（抓包点） | 捕获工具观察数据的位置 | 主机接口、回环、镜像口、代理前后 |
| Packet Loss in Capture（捕获丢帧） | 抓包工具未保存经过观察点的全部报文 | Sequence gap、接口统计、drop counter |
| Checksum Offload | 网卡或驱动在抓包点之后完成校验和 | 发送端抓包可能显示未完成值 |
| TSO/GSO | 主机把较大的数据块交给后续环节分段 | 本机抓包可能出现超大 TCP Segment |
| LRO/GRO | 接收路径在交给上层前合并多个报文 | 主机内部抓包可能呈现合并结果 |
| TCP Stream Index | Wireshark 为当前捕获中的 TCP 会话分配的编号 | 只在该捕获文件上下文内有意义 |
| Analyzer Inference（分析器推断） | 分析器根据已捕获上下文生成的解释字段 | `tcp.analysis.*`，需结合原始字段和捕获完整性复核 |

## 协议对比术语

| 术语 | 定义 |
| --- | --- |
| UDP Datagram | 保留单次发送边界的无连接传输数据报，由应用选择可靠性与顺序策略 |
| QUIC Connection | 在 UDP 之上由用户态协议实现维护的安全传输连接，支持多个流与连接迁移等能力 |
| QUIC Stream | QUIC 连接内的有序字节流，顺序范围局限于单个流 |
| Head-of-Line Blocking | 某个缺失数据阻止后续数据向上交付的等待现象；TCP 的有序范围覆盖整个连接字节流 |
| TLS Record | TLS 对明文分块、认证和加密后的记录单位，与 TCP 分段和应用消息各自独立 |
| HTTP/2 Stream | HTTP/2 单条 TCP 连接中的逻辑请求流，由 HTTP/2 帧标识 |

[上一页：常用网络命令](./d-network-commands.md) · [返回附录目录](../08-appendices.md) · [下一页：RFC 阅读路线](./f-rfc-roadmap.md)
