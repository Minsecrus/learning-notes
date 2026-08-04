# RFC 阅读路线

TCP 的基础规范、扩展选项、丢包恢复和拥塞控制分布在多份 RFC 中。高效阅读从一个具体问题开始：先用程序或抓包描述现象，再进入对应 RFC 查字段定义、状态条件和规范要求。

本页以2026年8月的 RFC Editor 文档状态为基准。RFC 的状态、更新关系和勘误会继续演进，实际使用前打开文档的 Info 页面复核。

## 先理解 RFC 文档状态

| 标记 | 含义 | 阅读方式 |
| --- | --- | --- |
| Internet Standard | 成熟的互联网标准 | 作为核心互操作要求的优先基线 |
| Standards Track | IETF 标准轨道文档 | 结合当前状态、更新关系与实现支持阅读 |
| BCP | Best Current Practice | 描述当前社区认可的最佳实践 |
| Informational | 信息性文档 | 提供路线、背景、经验或非规范设计说明 |
| Experimental | 实验性机制 | 关注部署条件、后续替代和实验范围 |
| Historic | 历史文档 | 用于理解演进，当前实现基线由更新文档给出 |
| Updates | 新文档修改旧文档的一部分 | 两份文档需要一起解释对应机制 |
| Obsoletes | 新文档取代旧文档 | 学习当前行为优先阅读新文档，旧文档保留历史价值 |

RFC 中的大写 `MUST`、`SHOULD`、`MAY` 等词按照 BCP 14 解释。它们表达互操作要求、推荐与可选能力。普通小写文字承担解释、背景和例子，仍需结合上下文阅读。

## 第一站：核心 TCP

### RFC 9293

[RFC 9293: Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html) 是当前核心基线，属于 Internet Standard（STD 7）。它汇总并更新长期分散的 TCP 基础规范，取代 RFC 793 以及多份早期更新。

完整中文译文见[附录G RFC 9293：传输控制协议](./g-rfc-9293-tcp-zh.md)。

优先阅读：

1. 第2.2节：TCP 提供的服务与关键概念；
2. 第3.1节：首部格式；
3. 第3.3节：连接状态变量与序列空间；
4. 第3.5节：连接建立与关闭；
5. 第3.10节：状态处理；
6. 第4节：术语表；
7. 附录B：实现要求汇总。

它能回答：字段怎样解释、Seq/Ack 怎样工作、状态如何迁移、RST 与 FIN 在什么条件下处理、TCP 与应用接口之间有哪些要求。

RFC 9293 已经吸收初始序列号安全更新 RFC 6528 的核心要求，并对 RFC 5961 做了小幅更新。看到旧教材引用 RFC 793 或 RFC 6528 时，可以沿 RFC Editor 的更新关系转到 RFC 9293。

### RFC 1122

[RFC 1122: Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html) 是主机通信层的经典要求文档。TCP 相关基础要求已经由 RFC 9293 更新，Delayed ACK、Keepalive 历史语境和主机行为讨论仍有学习价值。

推荐在第20章、第29章和第37章之后阅读相关段落，并始终与 RFC 9293 的当前要求对照。

## 第二站：窗口、时间戳与 SACK

| 文档 | 状态与关系 | 主题 | 对应章节 |
| --- | --- | --- | --- |
| [RFC 7323](https://www.rfc-editor.org/rfc/rfc7323.html) | Proposed Standard，取代 RFC 1323 | Window Scale、Timestamp、PAWS 与高带宽时延积路径 | 第14、22、24章 |
| [RFC 2018](https://www.rfc-editor.org/rfc/rfc2018.html) | Proposed Standard，取代 RFC 1072 | SACK Permitted 与 SACK 选项格式 | 第14、21章 |
| [RFC 6675](https://www.rfc-editor.org/rfc/rfc6675.html) | Proposed Standard，取代 RFC 3517 | 基于 SACK 的保守丢包恢复算法 | 第20、21章 |

阅读 RFC 7323 时先抓住三个问题：缩放因子在何时协商、每个方向如何独立使用、Timestamp 怎样参与 RTT 测量和旧重复报文识别。

阅读 RFC 2018 时画一条序列轴，把累计 Ack 左侧标成连续已收区域，把 SACK Blocks 标成缺口右侧的已收区域。图形会直接对应选项中的 Left Edge 与 Right Edge。

## 第三站：RTT、RTO 与丢包恢复

### RFC 6298

[RFC 6298: Computing TCP's Retransmission Timer](https://www.rfc-editor.org/rfc/rfc6298.html) 是 Proposed Standard，取代 RFC 2988 并更新 RFC 1122，给出 SRTT、RTTVAR 和 RTO 的标准计算规则。

适合带着下面的问题阅读：

- 第一个 RTT 样本怎样初始化估计值；
- 新样本怎样更新平滑值和变化量；
- 重传歧义为什么影响 RTT 采样；
- 超时后怎样指数退避；
- 新数据成功确认后怎样恢复计时。

### RFC 8985

[RFC 8985: The RACK-TLP Loss Detection Algorithm for TCP](https://www.rfc-editor.org/rfc/rfc8985.html) 描述现代的时间型丢包检测与尾部探测。RACK 使用每段发送时间与 ACK/SACK 反馈推断较早数据的交付状态，TLP 在尾部缺少反馈时主动触发一次探测。

推荐顺序：先掌握经典 DupACK、SACK 和 RTO，再读第3节高层设计，最后进入定时器和重排窗口细节。

### RFC 9937

[RFC 9937: Proportional Rate Reduction (PRR)](https://www.rfc-editor.org/rfc/rfc9937.html) 于2025年发布为 Standards Track，并取代实验性的 RFC 6937。PRR 控制快速恢复期间可发送的数据量，使恢复结束时的在途量接近拥塞算法给出的 `ssthresh`。

它承担“检测到丢包以后怎样平稳减少在途量”的问题，RACK-TLP 承担“怎样检测丢包”的问题。两个机制可以配合使用。

## 第四站：拥塞控制

| 文档 | 主题 | 阅读目标 |
| --- | --- | --- |
| [RFC 5681](https://www.rfc-editor.org/rfc/rfc5681.html) | Draft Standard，取代 RFC 2581；定义经典慢启动、拥塞避免、快速重传与快速恢复 | 建立 Reno 风格基础模型 |
| [RFC 9438](https://www.rfc-editor.org/rfc/rfc9438.html) | Proposed Standard；CUBIC | 理解三次函数窗口增长与 Reno 友好区域；该文档取代 RFC 8312 并更新 RFC 5681 |
| [RFC 9406](https://www.rfc-editor.org/rfc/rfc9406.html) | Proposed Standard；HyStart++ | 理解在传统丢包点之前退出慢启动的启发式方法 |
| [RFC 9743](https://www.rfc-editor.org/rfc/rfc9743.html) | BCP 133，新拥塞控制算法的规范方法；取代 RFC 5033 | 理解安全性、竞争公平和实验评估要求 |
| [RFC 9937](https://www.rfc-editor.org/rfc/rfc9937.html) | Proposed Standard；PRR，取代 RFC 6937 | 理解恢复阶段怎样调节实际发送量 |

建议先用 RFC 5681 建立 `cwnd`、`ssthresh`、FlightSize 和 ACK clock，再读 CUBIC。这样可以清楚看到 CUBIC主要修改拥塞避免阶段的窗口增长函数，同时继续遵循互联网拥塞控制的安全原则。

BBR 的学习需要同时查看算法论文、当前实现文档和操作系统版本。其公开规范和实现继续演进，教程正文只建立“根据带宽与往返传播时间建模路径”的核心思路。

## 第五站：ECN 与 AccECN

### Classic ECN

[RFC 3168: The Addition of Explicit Congestion Notification (ECN) to IP](https://www.rfc-editor.org/rfc/rfc3168.html) 是 Proposed Standard，取代 RFC 2481，并由 RFC 9768 等后续文档更新。它描述 Classic ECN：IP 首部携带 ECT/CE 码点，TCP 使用 ECE 与 CWR 完成能力协商和拥塞反馈。

阅读时分开追踪：

1. IP 层怎样标记拥塞；
2. 接收端怎样把 CE 反馈给发送端；
3. 发送端怎样响应并表明已经采取拥塞动作。

### Accurate ECN

[RFC 9768: More Accurate Explicit Congestion Notification (AccECN) Feedback in TCP](https://www.rfc-editor.org/rfc/rfc9768.html) 于2026年发布为 Proposed Standard，并更新 RFC 3168。它把曾经的 NS 位重新定义为 AE，并提供更精确的 ECN 反馈编码。

初学阶段掌握 AE、ECE、CWR 的协商与反馈用途即可。位组合、计数器回绕和 AccECN Option 适合在理解 Classic ECN 后继续阅读。

## 第六站：超时、重置与安全

| 文档 | 主题 | 对应问题 |
| --- | --- | --- |
| [RFC 5482](https://www.rfc-editor.org/rfc/rfc5482.html) | TCP User Timeout Option | 已发送数据持续缺少确认时，连接可以容忍多长时间 |
| [RFC 5961](https://www.rfc-editor.org/rfc/rfc5961.html) | 针对盲注入的 TCP 安全增强 | RST、SYN 与 ACK 校验怎样提高连接抗注入能力 |
| [RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html) | 当前 ISN 与基础 RST 处理 | 初始序列号生成要求与状态机基线 |

操作系统提供的本地 `TCP_USER_TIMEOUT` 选项与 RFC 5482 的协议选项共享“用户超时”概念，API 能力和是否在线上发送 UTO 需要按平台文档区分。

安全阅读还应结合 TLS 以及应用层的鉴权、长度校验、资源上限和重放控制。TCP 序列号与校验和提供传输机制，密码学身份和内容保护由 TLS 等安全协议承担。

## 第七站：IPv4、IPv6 与路径 MTU

| 文档 | 状态与关系 | 主题 |
| --- | --- | --- |
| [RFC 1191](https://www.rfc-editor.org/rfc/rfc1191.html) | Draft Standard，取代 RFC 1063 | IPv4 Path MTU Discovery |
| [RFC 8200](https://www.rfc-editor.org/rfc/rfc8200.html) | Internet Standard，取代 RFC 2460；后续由 RFC 9673 更新 | IPv6 基础规范与端点分片规则 |
| [RFC 8201](https://www.rfc-editor.org/rfc/rfc8201.html) | Internet Standard，取代 RFC 1981 | IPv6 Path MTU Discovery |
| [RFC 4821](https://www.rfc-editor.org/rfc/rfc4821.html) | Proposed Standard，后续由 RFC 8899 更新 | Packetization Layer PMTUD，包含 TCP 探测方法 |
| [RFC 8899](https://www.rfc-editor.org/rfc/rfc8899.html) | Proposed Standard，更新 RFC 4821 | 面向数据报传输的 DPLPMTUD 与通用原则 |

TCP 学习重点放在 RFC 9293 的分段建议、RFC 1191/8201 的 ICMP 型 PMTUD，以及 RFC 4821 的 TCP PLPMTUD。QUIC、UDP 和 SCTP 的数据报型探测继续阅读 RFC 8899 与各协议更新。

## 第八站：TLS、HTTP 与 QUIC

| 文档 | 主题 | 在本教程中的位置 |
| --- | --- | --- |
| [RFC 9846](https://www.rfc-editor.org/rfc/rfc9846.html) | TLS 1.3 当前规范，取代 RFC 8446 等早期文档 | TCP 上的加密、身份认证与记录保护 |
| [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html) | HTTP Semantics | 请求、响应、方法、状态码和业务语义 |
| [RFC 9112](https://www.rfc-editor.org/rfc/rfc9112.html) | HTTP/1.1 | 文本消息在 TCP 字节流上的格式与边界 |
| [RFC 9113](https://www.rfc-editor.org/rfc/rfc9113.html) | HTTP/2 | 一条 TCP 连接上的帧与多路复用流 |
| [RFC 9000](https://www.rfc-editor.org/rfc/rfc9000.html) | QUIC Transport | UDP 之上的安全连接、多流和迁移 |
| [RFC 9002](https://www.rfc-editor.org/rfc/rfc9002.html) | QUIC Loss Detection and Congestion Control | QUIC 的确认、丢包检测与拥塞控制基线 |
| [RFC 9114](https://www.rfc-editor.org/rfc/rfc9114.html) | HTTP/3 | HTTP 语义到 QUIC 流的映射 |

[RFC 9931](https://www.rfc-editor.org/rfc/rfc9931.html) 更新了 RFC 9112，补充 HTTP/1.1 乐观协议切换的安全要求。[RFC 9673](https://www.rfc-editor.org/rfc/rfc9673.html) 更新了 RFC 8200 中逐跳选项的处理流程；排查含 IPv6 扩展首部的路径时可以继续阅读。

推荐用同一个 HTTP 请求做三次分层练习：

1. HTTP/1.1：识别应用消息、TLS Record 与 TCP Segment；
2. HTTP/2：识别 HTTP/2 Stream、Frame 与底层 TCP 字节流；
3. HTTP/3：识别 HTTP/3 Frame、QUIC Stream、QUIC Packet 与 UDP Datagram。

## RFC 7414 的使用方式

[RFC 7414: A Roadmap for Transmission Control Protocol Specification Documents](https://www.rfc-editor.org/rfc/rfc7414.html) 是2015年的信息性 TCP 文档地图，取代早期的 RFC 4614。它适合了解大量扩展之间的分类和历史关系。[RFC 7805](https://www.rfc-editor.org/rfc/rfc7805.html) 随后更新这份地图，并把一批已经停用的 TCP 扩展调整为 Historic 或 Informational。

2015年以后发布的 RFC 9293、8985、9406、9438、9768、9846、9937 等文档需要单独补入路线。使用 RFC 7414 时打开每份目标 RFC 的 Info 页面，继续追踪 `Updated by` 与 `Obsoleted by`。

## 按教程章节查 RFC

| 学习问题 | 首读 | 继续阅读 |
| --- | --- | --- |
| TCP 提供什么服务 | RFC 9293 第2.2节 | RFC 1122 历史背景 |
| 首部字段、Seq、Ack、Flags | RFC 9293 第3.1—3.4节 | RFC 5961、RFC 9768 |
| 握手、关闭与状态机 | RFC 9293 第3.5、3.6、3.10节 | RFC 5961 |
| Window Scale、Timestamp | RFC 7323 | RFC 9293 高性能扩展引用 |
| SACK 与缺口恢复 | RFC 2018 | RFC 6675、RFC 8985 |
| RTT 与 RTO | RFC 6298 | RFC 7323、RFC 8985 |
| 经典拥塞控制 | RFC 5681 | RFC 9406、RFC 9937 |
| CUBIC | RFC 9438 | RFC 9743 |
| ECN | RFC 3168 | RFC 9768 |
| User Timeout | RFC 5482 | 操作系统 Socket API 文档 |
| PMTU 与大包停滞 | RFC 1191、RFC 8201 | RFC 4821、RFC 8899 |
| TLS/HTTP/TCP 边界 | RFC 9846、RFC 9110、RFC 9112 | RFC 9113、RFC 9931 |
| QUIC 与 HTTP/3 | RFC 9000、RFC 9114 | RFC 9002、RFC 8899 |

## 一次规范阅读记录

阅读时记录下面信息：

```text
问题：
RFC 编号与标题：
Info 页面状态：
发布年份：
Updates / Updated by：
Obsoletes / Obsoleted by：
相关勘误：
阅读章节：
规范要求编号或关键段落：
它直接回答的内容：
实现仍需查证的内容：
对应抓包帧或程序实验：
```

这份记录让规范文字、实现行为和实验结果保持可追溯关系。

[上一页：TCP 术语表](./e-glossary.md) · [返回附录目录](../08-appendices.md) · [下一页：RFC 9293 中文译文](./g-rfc-9293-tcp-zh.md) · [返回教程总览](../../tcp-from-zero-to-diagnostics.md)
