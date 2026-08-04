# 第五篇 TCP 如何可靠而高效地传输数据

当一条 TCP 连接建立完毕，且发送端开始源源不断地发送数据时，我们往往会面临四个息息相关的问题：丢失的数据如何恢复？乱序到达的报文如何处理？接收端如何控制发送方的速度？网络链路状态又如何限制在途数据（In-flight Data）？在第五篇中，我们将通过分析同一条受控连接，逐一解答这些问题。

## 学习目标

完成本篇后，你将能够：

- 根据 Seq、Ack、SACK 以及时间间隔，还原一次丢包恢复的全过程；
- 分清 `rwnd`（接收窗口）、`cwnd`（拥塞窗口）、发送缓冲区和应用层写入速度各自带来的传输限制；
- 解释慢启动（Slow Start）、拥塞避免（Congestion Avoidance）、CUBIC 与 BBR 等拥塞控制算法的核心思路；
- 使用统一单位计算带宽时延积（BDP），并判断当前窗口是否足以跑满整个链路带宽；
- 理清 RFC 规范、操作系统底层实现以及 Wireshark 分析标签之间的对应关系。

## 章节路线

| 章节 | 主要问题 | 关键证据 |
| --- | --- | --- |
| [第20章 确认、丢包检测和重传](./05-reliability-performance/01-ack-loss-retransmission.md) | 发送方如何判断数据已经丢失？ | Dup ACK、RTO、重传时刻、发送端计时器 |
| [第21章 乱序、重复数据和 SACK](./05-reliability-performance/02-reordering-duplicates-sack.md) | 接收方如何确认乱序到达的数据？ | 累计 Ack、SACK Block、接收队列 |
| [第22章 流量控制](./05-reliability-performance/03-flow-control.md) | 当应用层读取变慢时，如何限制发送方的速度？ | Window、Window Scale（窗口缩放因子）、Zero Window、Window Update |
| [第23章 拥塞控制](./05-reliability-performance/04-congestion-control.md) | 网络链路容量如何限制发送速率？ | `cwnd`、`ssthresh`、发送速率、拥塞事件 |
| [第24章 延迟、吞吐量和带宽时延积](./05-reliability-performance/05-latency-throughput-bdp.md) | 为什么高带宽网络下传输依然可能很慢？ | RTT、有效吞吐、窗口、BDP |

第 20 和 21 章共同探讨 TCP 的**可靠性**：通过累计确认（Cumulative Acknowledgment）推进连续接收进度，利用 SACK（选择性确认）填补数据缺口，并依赖计时器与现代恢复算法来决定最佳的重传时机。第 22 和 23 章则分别讨论**流量控制**（应对接收端瓶颈）与**拥塞控制**（应对网络链路瓶颈）。最后，第 24 章会将前面提到的所有变量综合起来，探讨如何充分利用网络性能预算。

## 实验约定

本篇的故障注入实验（Fault Injection）建议仅在本机 WSL、Linux 虚拟机或独立的测试主机上进行。实验工具主要包含 `iperf3`、`iproute2`、`tc netem`、`tcpdump` 和 Wireshark。在每次实验中，请务必保存发送端的输出日志、`ss -ti` 的状态信息以及 pcap 抓包文件，同时记录抓包的网络接口和四元组（源 IP、源端口、目的 IP、目的端口）。如果你所在的实验环境不支持 `netem`，依然可以完成无故障情况下的观察与数据推导；对于这些受限环境，各章会单独提供替代方案。

需要注意的是，Wireshark 中 `tcp.analysis.*` 相关的字段，仅仅是分析器基于当前抓到的数据包所做出的推断。真正的协议行为必须以报文中的实际字段和时序为准；而诸如内核算法和计时器等底层机制，则需要结合发送端的系统状态来进行综合确认。

## 综合任务

在完成本篇学习后，你需要挑选一份包含丢包、SACK 触发、窗口动态变化以及吞吐量下降的受控抓包文件，完成以下四个维度的分析报告：**可靠性恢复**、**接收端流量控制**、**路径拥塞控制**以及**应用层供数速率**。

在你的分析报告中，至少需要包含以下计算过程：
- 一组 Seq / Ack / SACK 范围的推导；
- 一次应用缩放因子（Window Scale）后的接收窗口计算；
- 一个带宽时延积（BDP）的计算结果。

最后，请为你得出的每一项结论明确标注其来源，例如：“来自线上报文”、“来自 Wireshark 分析器推断”或“来自发送端系统实现状态”。

## 导航

[上一篇：第四篇 TCP 连接的建立、状态和关闭](./04-lifecycle.md) · [教程总览](../tcp-from-zero-to-diagnostics.md) · [下一章：第20章 确认、丢包检测和重传](./05-reliability-performance/01-ack-loss-retransmission.md)
