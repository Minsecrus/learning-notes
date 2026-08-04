# RFC 阅读路线

TCP 的基础规范、扩展选项、丢包恢复以及拥塞控制机制，分散在多份 RFC 文档中。想要高效阅读，最好从具体问题切入：先通过写代码或抓包还原现象，再带着问题去相应的 RFC 里查找字段定义、状态机条件和规范细节。

本页内容以 2026 年 8 月 RFC Editor 上的文档状态为准。由于 RFC 的状态、更新关系和勘误会不断演进，建议你在实际参考前，先打开文档的 Info 页面复核最新状态。

## 先理解 RFC 文档状态

| 标记 | 含义 | 阅读方式 |
| --- | --- | --- |
| Internet Standard | 成熟的互联网标准 | 作为核心互操作基准优先参考 |
| Standards Track | IETF 标准轨道文档 | 需结合当前状态、更新关系及各家实现的支持程度来阅读 |
| BCP | Best Current Practice (最佳当前实践) | 描述当前社区认可的最佳实践 |
| Informational | 信息性文档 | 提供路线图、背景知识、经验分享或非标准的设计说明 |
| Experimental | 实验性机制 | 阅读时需重点关注其部署条件、后续的替代方案以及实验范围 |
| Historic | 历史文档 | 主要用于了解技术演进历史，当前的实现基准请参考更新的文档 |
| Updates | 新文档修改旧文档的一部分 | 阅读新旧文档时需结合起来，才能完整理解对应机制 |
| Obsoletes | 新文档取代旧文档 | 想了解当前标准，优先阅读新文档；旧文档仅保留历史参考价值 |

RFC 中的大写关键词（如 `MUST`、`SHOULD`、`MAY` 等）均按照 BCP 14 的定义进行解释。它们分别代表强制互操作要求、推荐做法和可选能力。普通的常规大小写段落多用于解释背景和列举示例，阅读时需要结合上下文来理解。

## 第一站：核心 TCP

### RFC 9293

[RFC 9293: Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html) 是当前 TCP 的核心基准，属于 Internet Standard（STD 7）。它汇总并更新了长期分散的 TCP 基础规范，正式取代了 RFC 793 以及多份早期的更新文档。

本文档的完整中文译文（已按章节拆分），请参考[附录 G：RFC 9293 传输控制协议](./rfc9293/index.md)。

建议优先阅读以下章节：

1. 第 2.2 节：TCP 提供的服务与关键概念；
2. 第 3.1 节：首部格式（Header Format）；
3. 第 3.3 节：连接状态变量与序列号空间（Sequence Number Space）；
4. 第 3.5 节：连接的建立与关闭；
5. 第 3.10 节：状态处理机（State Processing）；
6. 第 4 节：术语表（Glossary）；
7. 附录 B：实现要求汇总。

读完这些内容，你就能明白：各个字段究竟代表什么、Seq/Ack 机制是如何运转的、状态机如何流转、在什么条件下会触发 RST 和 FIN，以及 TCP 对上层应用程序接口提出了哪些要求。

此外，RFC 9293 已经吸收了有关初始序列号（ISN）安全的 RFC 6528 核心要求，同时对 RFC 5961 做了小幅更新。如果在旧教材中看到引用 RFC 793 或 RFC 6528 的地方，你可以直接沿着 RFC Editor 的更新关系，跳转到 RFC 9293 查阅最新规范。

### RFC 1122

[RFC 1122: Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html) 是定义主机通信层要求的经典文档。虽然 TCP 相关的基础要求已被 RFC 9293 覆盖和更新，但里面关于延迟确认（Delayed ACK）、保活机制（Keepalive）的历史背景和主机行为的讨论，依然极具学习价值。

推荐你在学完教程的第 20 章、29 章和 37 章后，回过头来阅读相关的段落，并且在阅读时，始终记得与 RFC 9293 的最新要求进行对照。

## 第二站：窗口、时间戳与 SACK

| 文档 | 状态与关系 | 主题 | 对应章节 |
| --- | --- | --- | --- |
| [RFC 7323](https://www.rfc-editor.org/rfc/rfc7323.html) | Proposed Standard，取代 RFC 1323 | 窗口缩放（Window Scale）、时间戳（Timestamp）、PAWS 与高带宽时延积路径 | 第 14、22、24 章 |
| [RFC 2018](https://www.rfc-editor.org/rfc/rfc2018.html) | Proposed Standard，取代 RFC 1072 | 允许 SACK（SACK Permitted）与 SACK 选项格式 | 第 14、21 章 |
| [RFC 6675](https://www.rfc-editor.org/rfc/rfc6675.html) | Proposed Standard，取代 RFC 3517 | 基于 SACK 的保守丢包恢复算法 | 第 20、21 章 |

阅读 RFC 7323 时，可以先带着这三个问题去读：窗口缩放因子在什么时候协商？通信双方如何在各自的传输方向上独立使用它？时间戳（Timestamp）又是如何参与到 RTT 测量以及防回绕序列号（PAWS）的识别中的？

在阅读 RFC 2018 时，建议你在纸上画一条序列号数轴。将累计 Ack（Cumulative Ack）左侧标记为“连续已接收区域”，把 SACK Blocks 标记为“缺口右侧的已接收区域”。画出来的图形刚好能和 SACK 选项里的左边界（Left Edge）和右边界（Right Edge）一一对应。

## 第三站：RTT、RTO 与丢包恢复

### RFC 6298

[RFC 6298: Computing TCP's Retransmission Timer](https://www.rfc-editor.org/rfc/rfc6298.html) 是 Proposed Standard 级别的文档。它取代了 RFC 2988，更新了 RFC 1122，给出了平滑 RTT（SRTT）、RTT 变异值（RTTVAR）和重传超时时间（RTO）的标准计算法则。

建议带着以下问题进行阅读：

- 收到第一个 RTT 样本时，如何初始化估计值？
- 收到新样本时，如何更新平滑值（SRTT）和变化量（RTTVAR）？
- 重传引发的歧义，为什么会影响 RTT 采样？
- 发生超时后，如何进行指数退避（Exponential Backoff）？
- 新的数据被成功确认后，计时器如何恢复工作？

### RFC 8985

[RFC 8985: The RACK-TLP Loss Detection Algorithm for TCP](https://www.rfc-editor.org/rfc/rfc8985.html) 详细描述了现代 TCP 中基于时间的丢包检测（RACK）与尾部丢失探测（TLP）机制。RACK 利用每个 Segment（报文段）的发送时间和 ACK/SACK 反馈，来推断较早发送的数据是否已经成功交付；而 TLP 则会在发送尾部数据但迟迟收不到反馈时，主动触发一次探测。

推荐的阅读顺序是：先掌握经典的重复确认（DupACK）、SACK 和 RTO 机制，接着阅读该文档第 3 节的高层设计，最后再去啃定时器逻辑和乱序窗口（Reordering Window）的设计细节。

### RFC 9937

[RFC 9937: Proportional Rate Reduction (PRR)](https://www.rfc-editor.org/rfc/rfc9937.html) 于 2025 年正式成为 Standards Track，取代了原本作为实验性 RFC 的 6937。PRR 算法主要用来控制快速恢复（Fast Recovery）期间允许发送的数据量，从而确保在恢复结束时，网络中的在途数据量（Flight Size）能平滑地逼近拥塞控制算法设定的慢启动阈值（ssthresh）。

如果说 RACK-TLP 解决的是“怎样检测丢包”的问题，那么 PRR 解决的就是“检测到丢包后，怎样平稳地减少在途数据量”的问题。这两种机制在现代 TCP 栈中通常是配合使用的。

## 第四站：拥塞控制

| 文档 | 主题 | 阅读目标 |
| --- | --- | --- |
| [RFC 5681](https://www.rfc-editor.org/rfc/rfc5681.html) | Draft Standard，取代 RFC 2581；定义经典慢启动（Slow Start）、拥塞避免（Congestion Avoidance）、快速重传（Fast Retransmit）与快速恢复（Fast Recovery） | 建立 Reno 风格的基础拥塞控制模型 |
| [RFC 9438](https://www.rfc-editor.org/rfc/rfc9438.html) | Proposed Standard；CUBIC 算法 | 理解三次函数窗口增长曲线与 Reno 友好区域；该文档取代了 RFC 8312 并更新了 RFC 5681 |
| [RFC 9406](https://www.rfc-editor.org/rfc/rfc9406.html) | Proposed Standard；HyStart++ 算法 | 学习如何在传统的丢包事件发生前，通过启发式方法提前退出慢启动 |
| [RFC 9743](https://www.rfc-editor.org/rfc/rfc9743.html) | BCP 133，新拥塞控制算法的规范评估方法；取代 RFC 5033 | 了解引入新算法时的安全性考量、竞争公平性原则以及实验评估要求 |
| [RFC 9937](https://www.rfc-editor.org/rfc/rfc9937.html) | Proposed Standard；PRR 算法，取代 RFC 6937 | 理解在丢包恢复阶段，如何精准地调节实际发送量 |

建议先通过 RFC 5681 建立起 `cwnd`（拥塞窗口）、`ssthresh`、`FlightSize`（在途数据量）和 `ACK clock`（ACK 时钟）的概念基础，然后再去读 CUBIC 的规范。有了基础后，你能更清晰地看出，CUBIC 其实主要就是修改了拥塞避免阶段的窗口增长函数，而在其他方面依然坚守着互联网拥塞控制的基本安全准则。

BBR 拥塞控制算法仍在不断演进中。学习 BBR 时，不能只看规范，还需要结合它的算法论文、最新的内核实现以及不同操作系统的版本来综合理解。本教程正文只聚焦于建立它的核心思路——“根据带宽（BtlBw）与往返传播时间（RTprop）来为网络路径建模”。

## 第五站：ECN 与 AccECN

### Classic ECN

[RFC 3168: The Addition of Explicit Congestion Notification (ECN) to IP](https://www.rfc-editor.org/rfc/rfc3168.html) 是 Proposed Standard。它取代了 RFC 2481，并被 RFC 9768 等后续文档持续更新。这篇文档描述了传统的 ECN（Classic ECN）机制：IP 首部携带 ECT/CE 码点，TCP 则利用 ECE 和 CWR 标志位来完成能力协商以及拥塞反馈。

阅读时可以把重点拆解为三步追踪：

1. IP 层是如何将数据包标记为拥塞（CE）的？
2. 接收端在收到 CE 标记后，如何将这一情况反馈给发送端？
3. 发送端收到拥塞反馈后应该作何响应，又该如何向对方表明自己已经采取了降速动作？

### Accurate ECN

[RFC 9768: More Accurate Explicit Congestion Notification (AccECN) Feedback in TCP](https://www.rfc-editor.org/rfc/rfc9768.html) 于 2026 年发布为 Proposed Standard，对 RFC 3168 进行了更新。它将 TCP 首部中早先定义的 NS 标志位重新定义为 AE（Accurate ECN），从而提供了一种颗粒度更细的 ECN 反馈编码方案。

在初学阶段，你只要弄懂 AE、ECE 和 CWR 这三个标志位是如何进行协商和反馈的即可。至于具体的位组合逻辑、计数器回绕处理以及 AccECN 选项的具体细节，建议在你彻底吃透 Classic ECN 之后再来深入研究。

## 第六站：超时、重置与安全

| 文档 | 主题 | 对应问题 |
| --- | --- | --- |
| [RFC 5482](https://www.rfc-editor.org/rfc/rfc5482.html) | TCP User Timeout Option | 在已发送数据持续收不到确认的情况下，连接最长能容忍多久不被断开 |
| [RFC 5961](https://www.rfc-editor.org/rfc/rfc5961.html) | 针对盲注攻击的 TCP 安全增强 | 如何通过严格校验 RST、SYN 和 ACK，提高 TCP 连接抵抗伪造攻击的能力 |
| [RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html) | 初始序列号与基础 RST 处理 | ISN 的生成要求，以及状态机响应异常报文的基准逻辑 |

许多操作系统在 Socket API 层级提供了 `TCP_USER_TIMEOUT` 选项，这与 RFC 5482 中定义的协议选项共享同一个“用户超时”概念。不过，本地 API 的具体能力，以及系统是否会真正将 UTO（User Timeout Option）随 TCP 报文发送到线上，需要根据不同操作系统的文档加以区分。

想要全面理解安全防御体系，不能只看 TCP，还应该结合 TLS 以及应用层的鉴权、长度校验、资源上限控制和防重放攻击机制一起看。TCP 的序列号和校验和仅仅提供了传输层的抗扰动机制，而真正的密码学身份认证和数据隐私保护，则必须由 TLS 等上层安全协议来承担。

## 第七站：IPv4、IPv6 与路径 MTU

| 文档 | 状态与关系 | 主题 |
| --- | --- | --- |
| [RFC 1191](https://www.rfc-editor.org/rfc/rfc1191.html) | Draft Standard，取代 RFC 1063 | IPv4 路径 MTU 发现（Path MTU Discovery） |
| [RFC 8200](https://www.rfc-editor.org/rfc/rfc8200.html) | Internet Standard，取代 RFC 2460；后续被 RFC 9673 更新 | IPv6 基础规范及端点分片规则 |
| [RFC 8201](https://www.rfc-editor.org/rfc/rfc8201.html) | Internet Standard，取代 RFC 1981 | IPv6 路径 MTU 发现 |
| [RFC 4821](https://www.rfc-editor.org/rfc/rfc4821.html) | Proposed Standard，后续被 RFC 8899 更新 | 封包层路径 MTU 发现（PLPMTUD），包含 TCP 特有的探测方法 |
| [RFC 8899](https://www.rfc-editor.org/rfc/rfc8899.html) | Proposed Standard，更新了 RFC 4821 | 面向数据报（Datagram）传输的 DPLPMTUD 机制与通用原则 |

对于 TCP 而言，学习的重点应该放在 RFC 9293 中关于 MSS（最大报文段长度）分段的建议、RFC 1191/8201 介绍的基于 ICMP 报错的经典 PMTUD 机制，以及 RFC 4821 介绍的基于 TCP 探测机制的 PLPMTUD 上。至于 QUIC、UDP 和 SCTP 这类数据报协议的 MTU 探测，你可以继续去查阅 RFC 8899 以及各协议对应的专门规范。

## 第八站：TLS、HTTP 与 QUIC

| 文档 | 主题 | 在本教程中的位置 |
| --- | --- | --- |
| [RFC 9846](https://www.rfc-editor.org/rfc/rfc9846.html) | TLS 1.3 当前规范，取代了 RFC 8446 等早期文档 | 基于 TCP 的加密、身份认证与记录协议（Record Layer）保护 |
| [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html) | HTTP 语义（HTTP Semantics） | 定义了 HTTP 请求、响应、方法、状态码和业务语义 |
| [RFC 9112](https://www.rfc-editor.org/rfc/rfc9112.html) | HTTP/1.1 规范 | 文本消息在 TCP 字节流之上的传输格式与边界界定 |
| [RFC 9113](https://www.rfc-editor.org/rfc/rfc9113.html) | HTTP/2 规范 | 在单条 TCP 连接上实现帧（Frame）传输与多路复用流（Stream）机制 |
| [RFC 9000](https://www.rfc-editor.org/rfc/rfc9000.html) | QUIC 传输层协议 | 建立在 UDP 之上的安全连接、多路复用流和连接迁移机制 |
| [RFC 9002](https://www.rfc-editor.org/rfc/rfc9002.html) | QUIC 的丢包检测与拥塞控制 | QUIC 如何完成 ACK 确认、丢包检测以及基础拥塞控制 |
| [RFC 9114](https://www.rfc-editor.org/rfc/rfc9114.html) | HTTP/3 规范 | HTTP 语义如何映射并承载于 QUIC 流（QUIC Stream）之上 |

需要注意的是，[RFC 9931](https://www.rfc-editor.org/rfc/rfc9931.html) 在 RFC 9112 的基础上做了更新，补充了关于 HTTP/1.1 乐观协议切换时的安全要求。另外，[RFC 9673](https://www.rfc-editor.org/rfc/rfc9673.html) 更新了 RFC 8200 中关于 IPv6 逐跳选项（Hop-by-Hop Options）的处理流程，如果在排查网络路径时遇到了带 IPv6 扩展首部的特殊包，可以一并阅读。

推荐你使用同一个 HTTP 请求，分别进行三次分层抓包练习：

1. HTTP/1.1：练习如何区分应用层消息、TLS Record 和底层的 TCP Segment；
2. HTTP/2：练习如何区分 HTTP/2 的 Stream、Frame，以及它们在底层 TCP 字节流中的排布；
3. HTTP/3：练习如何区分 HTTP/3 的 Frame、QUIC 的 Stream、QUIC 的 Packet 以及最底层的 UDP Datagram。

## RFC 7414 的使用方式

[RFC 7414: A Roadmap for Transmission Control Protocol Specification Documents](https://www.rfc-editor.org/rfc/rfc7414.html) 发布于 2015 年，是一份信息性的“TCP 文档导航地图”。它取代了早期的 RFC 4614，非常适合用来理清各种 TCP 扩展机制的分类以及它们之间的历史渊源。随后发布的 [RFC 7805](https://www.rfc-editor.org/rfc/rfc7805.html) 对这份地图做了进一步更新，将一批已经被弃用的 TCP 扩展文档打上了 Historic 或 Informational 的标签。

不过，由于 RFC 7414 年代较早，2015 年之后发布的诸如 RFC 9293、8985、9406、9438、9768、9846、9937 等重量级规范并没有包含在这张地图中。因此，在使用 RFC 7414 时，务必要打开每份目标 RFC 的 Info 页面，沿着 `Updated by` 和 `Obsoleted by` 顺藤摸瓜，追踪到最新的规范。

## 按教程章节查 RFC

| 学习问题 | 首读推荐 | 延伸阅读 |
| --- | --- | --- |
| TCP 提供哪些服务保障？ | RFC 9293 第 2.2 节 | RFC 1122 历史背景 |
| 报文首部字段、Seq、Ack、Flags 是什么？ | RFC 9293 第 3.1—3.4 节 | RFC 5961、RFC 9768 |
| 如何完成三次握手、四次挥手及状态机流转？ | RFC 9293 第 3.5、3.6、3.10 节 | RFC 5961 |
| 窗口缩放（Window Scale）、时间戳（Timestamp）机制 | RFC 7323 | RFC 9293 关于高性能扩展的引用 |
| SACK 选项与缺口恢复算法 | RFC 2018 | RFC 6675、RFC 8985 |
| RTT 测量与 RTO 超时重传 | RFC 6298 | RFC 7323、RFC 8985 |
| 经典的慢启动与拥塞控制 | RFC 5681 | RFC 9406、RFC 9937 |
| CUBIC 拥塞控制算法 | RFC 9438 | RFC 9743 |
| 显式拥塞通知（ECN）机制 | RFC 3168 | RFC 9768 |
| TCP 连接的用户超时断开机制（User Timeout） | RFC 5482 | 对应操作系统的 Socket API 文档 |
| 路径 MTU 发现与大包黑洞（Blackhole）停滞 | RFC 1191、RFC 8201 | RFC 4821、RFC 8899 |
| TLS 层、HTTP 应用层与 TCP 传输层的分界 | RFC 9846、RFC 9110、RFC 9112 | RFC 9113、RFC 9931 |
| QUIC 协议基础与 HTTP/3 机制 | RFC 9000、RFC 9114 | RFC 9002、RFC 8899 |

## 一次规范阅读记录

建议在阅读具体的 RFC 时，顺手记录下以下关键信息：

```text
所探究的问题：
RFC 编号与标题：
文档当前状态（来自 Info 页面）：
发布年份：
更新链条（Updates / Updated by）：
废弃链条（Obsoletes / Obsoleted by）：
是否有相关勘误（Errata）：
重点阅读的章节：
规范要求编号或关键段落原话：
该段落直接回答的疑问：
在具体实现中仍需进一步查证的细节：
对应哪份抓包文件或哪段测试代码：
```

坚持做这样的阅读记录，能够将枯燥的规范文字、真实的内核实现行为以及代码实验结果紧密串联起来，让你学到的每一个知识点都可验证、可追溯。

[上一页：TCP 术语表](./e-glossary.md) · [返回附录目录](../08-appendices.md) · [下一页：RFC 9293 中文译文](./rfc9293/index.md) · [返回教程总览](../../tcp-from-zero-to-diagnostics.md)
