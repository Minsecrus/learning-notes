# TCP 从入门到抓包

<details open>
<summary>完整目录（导读 + 39 章 + 附录 + RFC 9293 译文）</summary>

- **[导读 怎样学习和实验 TCP](./tcp-from-zero-to-diagnostics/00-guide.md)**
- **[第一篇 TCP 基础直觉与通信模型](./tcp-from-zero-to-diagnostics/01-foundations.md)**
  - [第1章 一次网络请求是怎样发生的](./tcp-from-zero-to-diagnostics/01-foundations/01-network-request.md)
  - [第2章 TCP 提供怎样的通信能力](./tcp-from-zero-to-diagnostics/01-foundations/02-tcp-capabilities.md)
  - [第3章 TCP 是字节流](./tcp-from-zero-to-diagnostics/01-foundations/03-byte-stream.md)
- **[第二篇 认识一条 TCP 连接](./tcp-from-zero-to-diagnostics/02-connection.md)**
  - [第4章 Socket、地址、端口和四元组](./tcp-from-zero-to-diagnostics/02-connection/01-socket-address-port-four-tuple.md)
  - [第5章 用一个最小程序建立 TCP 连接](./tcp-from-zero-to-diagnostics/02-connection/02-minimal-program.md)
  - [第6章 第一次抓包](./tcp-from-zero-to-diagnostics/02-connection/03-first-capture.md)
- **[第三篇 逐字段看懂 TCP 报文头](./tcp-from-zero-to-diagnostics/03-header.md)**
  - [第7章 网络包的分层结构](./tcp-from-zero-to-diagnostics/03-header/01-layered-packet.md)
  - [第8章 TCP 首部总览](./tcp-from-zero-to-diagnostics/03-header/02-tcp-header-overview.md)
  - [第9章 源端口和目标端口](./tcp-from-zero-to-diagnostics/03-header/03-source-destination-ports.md)
  - [第10章 Sequence Number：给字节编号](./tcp-from-zero-to-diagnostics/03-header/04-sequence-number.md)
  - [第11章 Acknowledgment Number：累计确认](./tcp-from-zero-to-diagnostics/03-header/05-acknowledgment-number.md)
  - [第12章 TCP 标志位](./tcp-from-zero-to-diagnostics/03-header/06-flags.md)
  - [第13章 Data Offset、Window、Checksum 和 Urgent Pointer](./tcp-from-zero-to-diagnostics/03-header/07-fixed-fields.md)
  - [第14章 TCP Options](./tcp-from-zero-to-diagnostics/03-header/08-options.md)
- **[第四篇 TCP 连接的建立、状态和关闭](./tcp-from-zero-to-diagnostics/04-lifecycle.md)**
  - [第15章 三次握手](./tcp-from-zero-to-diagnostics/04-lifecycle/01-three-way-handshake.md)
  - [第16章 TCP 连接状态机](./tcp-from-zero-to-diagnostics/04-lifecycle/02-state-machine.md)
  - [第17章 连接关闭与半关闭](./tcp-from-zero-to-diagnostics/04-lifecycle/03-close-half-close.md)
  - [第18章 TIME_WAIT、CLOSE_WAIT 和连接释放](./tcp-from-zero-to-diagnostics/04-lifecycle/04-time-wait-close-wait.md)
  - [第19章 RST、异常断开和半开连接](./tcp-from-zero-to-diagnostics/04-lifecycle/05-rst-half-open.md)
- **[第五篇 TCP 如何可靠而高效地传输数据](./tcp-from-zero-to-diagnostics/05-reliability-performance.md)**
  - [第20章 确认、丢包检测和重传](./tcp-from-zero-to-diagnostics/05-reliability-performance/01-ack-loss-retransmission.md)
  - [第21章 乱序、重复数据和 SACK](./tcp-from-zero-to-diagnostics/05-reliability-performance/02-reordering-duplicates-sack.md)
  - [第22章 流量控制](./tcp-from-zero-to-diagnostics/05-reliability-performance/03-flow-control.md)
  - [第23章 拥塞控制](./tcp-from-zero-to-diagnostics/05-reliability-performance/04-congestion-control.md)
  - [第24章 延迟、吞吐量和带宽时延积](./tcp-from-zero-to-diagnostics/05-reliability-performance/05-latency-throughput-bdp.md)
- **[第六篇 开发者如何正确使用 TCP](./tcp-from-zero-to-diagnostics/06-application-development.md)**
  - [第25章 Socket API 的正确使用](./tcp-from-zero-to-diagnostics/06-application-development/01-socket-api.md)
  - [第26章 如何设计应用层协议](./tcp-from-zero-to-diagnostics/06-application-development/02-application-protocol.md)
  - [第27章 超时、重试和幂等性](./tcp-from-zero-to-diagnostics/06-application-development/03-timeouts-retries-idempotency.md)
  - [第28章 并发、缓冲区和背压](./tcp-from-zero-to-diagnostics/06-application-development/04-concurrency-buffers-backpressure.md)
  - [第29章 常用 Socket 选项](./tcp-from-zero-to-diagnostics/06-application-development/05-socket-options.md)
  - [第30章 TLS、HTTP 与 TCP 的关系](./tcp-from-zero-to-diagnostics/06-application-development/06-tls-http-tcp.md)
- **[第七篇 抓包诊断、性能分析与进阶环境](./tcp-from-zero-to-diagnostics/07-diagnostics-environments.md)**
  - [第31章 系统化阅读一份 TCP 抓包](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/01-systematic-pcap-reading.md)
  - [第32章 常见抓包假象](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/02-capture-artifacts.md)
  - [第33章 常见故障案例](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/03-common-failures.md)
  - [第34章 TCP 性能调优的边界](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/04-performance-tuning-boundaries.md)
  - [第35章 IPv4、IPv6、MTU 和分片](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/05-ipv4-ipv6-mtu-fragmentation.md)
  - [第36章 NAT、防火墙和负载均衡](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/06-nat-firewall-load-balancing.md)
  - [第37章 TCP Keepalive 与应用层心跳](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/07-keepalive-heartbeat.md)
  - [第38章 TCP 安全基础](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/08-security.md)
  - [第39章 TCP、UDP 和 QUIC 的对比](./tcp-from-zero-to-diagnostics/07-diagnostics-environments/09-tcp-udp-quic.md)
- **[TCP 速查与规范阅读](./tcp-from-zero-to-diagnostics/08-appendices.md)**
  - [TCP 字段速查表](./tcp-from-zero-to-diagnostics/08-appendices/a-header-fields.md)
  - [TCP 状态速查表](./tcp-from-zero-to-diagnostics/08-appendices/b-states.md)
  - [Wireshark 过滤器速查](./tcp-from-zero-to-diagnostics/08-appendices/c-wireshark-filters.md)
  - [常用网络命令](./tcp-from-zero-to-diagnostics/08-appendices/d-network-commands.md)
  - [TCP 术语表](./tcp-from-zero-to-diagnostics/08-appendices/e-glossary.md)
  - [RFC 阅读路线](./tcp-from-zero-to-diagnostics/08-appendices/f-rfc-roadmap.md)
  - **[RFC 9293：传输控制协议（TCP）中文译文](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/index.md)**
    - [1. 目的与范围](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/01-purpose-and-scope.md)
    - [2. 引言](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/02-introduction.md)
    - [3. 功能规范](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-functional-specification.md)
      - [3.1. 首部格式](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-01-header-format.md)
      - [3.2. 特定选项定义](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-02-specific-options.md)
      - [3.3. TCP 术语概览](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-03-terminology.md)
      - [3.4. 序列号](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-04-sequence-numbers.md)
      - [3.5. 建立连接](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-05-establishing-a-connection.md)
      - [3.6. 关闭连接](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-06-closing-a-connection.md)
      - [3.7. 分段](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-07-segmentation.md)
      - [3.8. 数据通信](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-08-data-communication.md)
      - [3.9. 接口](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-09-interfaces.md)
      - [3.10. 事件处理](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-10-event-processing.md)
    - [4. 术语表](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/04-glossary.md)
    - [5. 相对于 RFC 793 的变更](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/05-changes-from-rfc-793.md)
    - [6. IANA 注意事项](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/06-iana-considerations.md)
    - [7. 安全与隐私注意事项](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/07-security-and-privacy.md)
    - [8. 参考文献](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/08-references.md)
    - [附录 A：其他实现说明](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/appendix-a.md)
    - [附录 B：TCP 需求汇总](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/appendix-b.md)
    - [致谢](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/acknowledgments.md)
    - [作者地址](./tcp-from-zero-to-diagnostics/08-appendices/rfc9293/authors-address.md)

</details>

TCP 在底层默默处理了丢包、乱序、数据重复以及网络拥塞等复杂的细节，为上层应用提供了一条可靠、有序且全双工的字节流。这种高度抽象虽然好用，但也给开发者带来了挑战：应用层必须自己去定义“消息边界”（Message Boundary）；开发者得搞懂“部分读写”（Partial Read/Write）和各种关闭语义；而在排查故障时，我们还需要将程序日志、Socket 状态、TCP 报文段（Segment）甚至底层网络路径串联起来，形成一条完整的证据链。

本教程将从一个最基础的本地 Python 客户端与服务端写起。带你亲自动手建立连接、连续发送消息、设计基于长度前缀（Length-Prefixed）的应用层协议、抓取三次握手与四次挥手过程；随后，我们还会模拟真实的恶劣网络环境，人为制造延迟、丢包、零窗口（Zero Window）、连接重置（RST）、慢客户端以及 MTU 不匹配等经典问题。通过这一系列的实战，我们最终会手搓出一个既能跑、又能抓包，还方便排障诊断的“请求—响应”消息服务。

[开始学习：导读与实验准备](./tcp-from-zero-to-diagnostics/00-guide.md)

## 学完本教程你能收获什么

完成全系列后，你将能够：

1. 从浏览器、应用进程、Socket、TCP、IP 以及数据链路层这六个视角，透彻解释一次完整的网络通信过程；
2. 熟练运用“四元组”精准定位连接，并能通过序列号（Sequence Number / Seq）、确认号（Acknowledgment Number / Ack）、标志位（Flags）、窗口大小（Window Size）和 TCP 选项（Options）来解读任何一个 TCP 报文段；
3. 写出健壮的网络程序，能够优雅地处理消息边界、部分读写、EOF、超时、重试、幂等性以及背压（Backpressure）；
4. 彻底搞懂流量控制（Flow Control）与拥塞控制（Congestion Control）的区别，掌握如何计算最大报文段长度（MSS）、接收窗口以及带宽时延积（BDP）；
5. 识破“抓包假象”——搞清楚网卡卸载（Offload）、抓包缺失（Packet Loss in Capture）以及 Wireshark 等分析器的自动推断机制会对我们的观察造成什么干扰；
6. 针对连接超时、RST 异常断开、僵死的 CLOSE_WAIT / TIME_WAIT、零窗口告警、频繁重传（Retransmission）以及吞吐量低下等疑难杂症，给出有理有据的诊断结论；
7. 深入理解 NAT、防火墙、代理服务器、负载均衡器，以及 TLS、HTTP 和 QUIC 等协议是如何影响底层网络传输路径的。

## 一条贯穿全书的实验主线

本教程将带你从零起步，通过持续迭代同一个消息服务来推进学习：

```mermaid
flowchart LR
  A["最小 TCP 回显"] --> B["长度前缀分帧"]
  B --> C["请求 ID 与错误响应"]
  C --> D["超时、重试与幂等"]
  D --> E["并发、队列与背压"]
  E --> F["TLS 加密"]
  F --> G["故障注入与抓包诊断"]
```

在每个迭代阶段，我们都会收集并对比四类核心“证据”：

- **客户端日志**：记录 API 调用、返回值、请求 ID 及耗时；
- **服务端日志**：记录接收连接、读取数据、业务逻辑处理与断开连接的全过程；
- **系统状态**：通过命令行工具监控监听端口、四元组以及当前的 TCP 状态；
- **抓包文件**：利用 Wireshark 或 tcpdump 捕获网络链路上真实传输的报文。

这四类证据相互印证：应用日志告诉你“业务层面发生了什么”，Socket 的返回值揭示了“进程与系统内核的交互细节”，系统命令展示了“协议栈当下的状态”，而抓包文件则客观呈现了“特定网络节点上实际流过的比特流”。

## 三条阅读路线

### 完整入门路线

如果你是第一次系统学习网络编程，建议从导读开始，按篇章顺序稳扎稳打地阅读。请确保跑通每章的实验并完成“理解检查”。这条路线能帮你建立起最完整、连贯的 TCP 知识体系与心智模型。

### 应用开发路线

建议阅读顺序：**导读 → 第一篇 → 第二篇 → 第四篇 → 第六篇 → 第七篇第33章**。通过这条路线，你将优先掌握字节流特性、Socket API、连接关闭语义、应用层协议设计，以及如何处理超时、幂等性和背压问题，非常适合急需将理论落地到代码的后端开发者。

### 抓包诊断路线

建议阅读顺序：**第二篇第6章 → 第三篇 → 第四篇 → 第五篇 → 第七篇**。如果你已经具备一定的 Socket 开发经验，可以直接从“分析第一份抓包文件”切入，随后重点补齐对报文字段、状态机流转以及底层传输算法（如拥塞控制、重传机制）的理解。

## 实验平台

本教程的主线代码完全基于 Python 标准库 `socket` 编写。桌面端实验环境主要使用 Windows PowerShell 配合 Wireshark/Npcap，但所有的基础代码在 Linux 和 macOS 下也能完美运行。对于延迟、丢包、乱序、带宽受限以及 MTU 截断等高阶故障注入实验，我们将在受控的 Linux、WSL 或虚拟机环境中进行；即便你暂时没有这些环境，相关章节也会提供现成的抓包文件（pcap）或替代的观察方法。

所有的实验统一从本地回环地址（Loopback）起步：

- **IPv4**：`127.0.0.1`
- **IPv6**：`::1`
- **默认占位端口**：附录命令中统一使用 `5000` 端口；各篇章的具体实验以其开头约定的端口为准。

（提示：实验端口均可通过命令行参数灵活调整。运行代码前请务必确认端口未被占用，实验结束后也别忘了及时停止客户端、服务端及后台抓包进程。）

## 阅读中的六个层次

排查 TCP 问题时，常常会遇到“牵一发而动全身”的跨层现象。为了理清思路，全书统一使用以下六个维度来解构网络问题：

| 层次 | 典型问题示例 |
| --- | --- |
| **应用语义** | 业务请求成功了吗？数据落盘了吗？发起重试会导致“重复扣款”等副作用吗？ |
| **Socket API** | `send` 到底成功发出了几个字节？`recv` 为什么会返回长度为 0？系统调用为何一直阻塞直到超时？ |
| **TCP 协议** | Seq / Ack 是如何向前推进的？接收窗口经历过怎样的变化？当前连接卡在了哪个状态转移环节？ |
| **操作系统实现** | 底层的读写缓冲区（Buffer）、全/半连接队列、各类定时器（Timer）、拥塞控制算法以及网卡卸载机制在幕后是如何运作的？ |
| **抓包事实** | 在特定的网卡接口和精准的时间点，我们究竟捕获到了哪些实打实的数据帧和报文段？ |
| **分析器推断** | Wireshark 凭什么给某些包打上重传（Retransmission）、乱序（Out-of-Order）或重复确认（Dup ACK）的标签？它的推断总是准确的吗？ |

在实际分析时，请务必先定位问题所属的“层次”，再去寻找能直接支撑你假设的证据链。**切记：跨层推断必须经过交叉验证。**例如，就算抓包看到了 TCP 层面的 ACK 返回，这只能证明**对端的系统协议栈**已经收到了这些字节流；至于对端的**业务逻辑**是否真正处理成功，你依然需要查看应用层的业务响应、数据库状态或是服务端日志来做最终定论。

## 学习成果的判断方式

每一篇教程的末尾都配有综合实战任务。在完成这些任务并得出结论时，请试着用以下几个问题来“拷问”自己：

- 你的结论依据是什么？是 RFC 规范、操作系统的实现文档、代码的运行日志，还是实打实的抓包结果？
- 你的抓包节点设在哪里？有没有可能漏抓了某些数据帧？结果是否被网卡卸载机制“加工”过？
- 那些关键的指标数据（如吞吐量、延迟）是怎么算出来的？单位统一了吗？
- 造成当前现象的原因，除了你猜的那个，还有没有其他的可能性？
- 你能设计一个最精简的实验，来排除干扰项并锁定真正的元凶吗？

如果你能条理清晰地回答出以上所有问题，恭喜你，你已经将纸面上的 TCP 理论，真正转化为了硬核的工程分析与排障能力。

## 相关笔记

- [Socket 与 WebSocket 的区别](../../05/24/networking-socket-websocket.md)
- [Frame、MAC、IP 与 ARP：一次网络访问如何找到下一跳](../../05/24/networking-frame-mac-ip.md)

[开始学习：导读与实验准备](./tcp-from-zero-to-diagnostics/00-guide.md)
