# 第五篇 TCP 如何可靠而高效地传输数据

一条 TCP 连接已经建立，发送端也持续提供数据，接下来会出现四个紧密相连的问题：字节怎样从丢失中恢复、乱序数据怎样被记录、接收端怎样限制发送速度、网络路径怎样限制在途数据。第五篇用同一条受控连接依次回答这些问题。

## 学习目标

完成本篇后，你将能够：

- 根据 Seq、Ack、SACK 和时间间隔还原一次丢包恢复；
- 分清 `rwnd`、`cwnd`、发送缓冲区和应用供数各自形成的限制；
- 解释慢启动、拥塞避免、CUBIC 与 BBR 的基本控制思路；
- 用统一单位计算 BDP，并判断窗口是否足以填满路径；
- 将 RFC 规则、操作系统实现状态和 Wireshark 分析标签分别记录。

## 章节路线

| 章节 | 主要问题 | 关键证据 |
| --- | --- | --- |
| [第20章 确认、丢包检测和重传](./05-reliability-performance/01-ack-loss-retransmission.md) | 发送方何时认为数据已经丢失 | Dup ACK、RTO、重传时刻、发送端计时器 |
| [第21章 乱序、重复数据和 SACK](./05-reliability-performance/02-reordering-duplicates-sack.md) | 接收方怎样描述连续前缀之外的数据 | 累计 Ack、SACK Block、接收队列 |
| [第22章 流量控制](./05-reliability-performance/03-flow-control.md) | 接收应用较慢时怎样限制发送端 | Window、缩放因子、Zero Window、Window Update |
| [第23章 拥塞控制](./05-reliability-performance/04-congestion-control.md) | 路径容量怎样限制发送端 | `cwnd`、`ssthresh`、发送速率、拥塞事件 |
| [第24章 延迟、吞吐量和带宽时延积](./05-reliability-performance/05-latency-throughput-bdp.md) | 高带宽路径为何仍可能传输缓慢 | RTT、有效吞吐、窗口、BDP |

第20、21章共同讲可靠性：累计确认给出连续进度，SACK补充缺口之后的接收情况，计时器与现代恢复算法选择重传时机。第22、23章分别处理接收端容量和网络容量。第24章将前面所有变量放进一个性能预算。

## 实验约定

故障注入只作用于本机 WSL、Linux 虚拟机或独立测试主机。实验以 `iperf3`、`iproute2`、`tc netem`、`tcpdump` 和 Wireshark 为主。每次保存发送端输出、`ss -ti` 状态和 pcap，并记录抓包接口与四元组。缺少 `netem` 的环境仍可完成无故障观察与数字推导；各章另列替代方法。

Wireshark 的 `tcp.analysis.*` 字段属于分析器基于当前捕获内容给出的判断。协议事实来自报文中的字段和时序，内核算法与计时器由发送端状态补充确认。

## 综合任务

选择一份含丢包、SACK、窗口变化和吞吐下降的受控抓包，完成四栏分析：可靠性恢复、接收端流量控制、路径拥塞控制、应用供数。报告至少计算一组 Seq/Ack/SACK 范围、一组缩放后的接收窗口和一个 BDP，并给每项结论标注“线上报文”“分析器推断”或“发送端实现状态”。

## 导航

[上一篇：第四篇 TCP 连接的建立、状态和关闭](./04-lifecycle.md) · [教程总览](../tcp-from-zero-to-diagnostics.md) · [下一章：第20章 确认、丢包检测和重传](./05-reliability-performance/01-ack-loss-retransmission.md)
