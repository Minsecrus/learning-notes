# TCP 速查与规范阅读

这 7 个附录将教程正文里最常查阅的知识点，提炼成了方便检索的表格、索引以及核心 RFC 规范的中译本。建议大家在排查问题时，遇到拿不准的字段（Field）、状态（State）或命令，先来对应的附录里速查；如果需要深入了解背后的原理，再顺着链接回到正文去啃细节。

## 附录目录

1. [TCP 字段速查表](./08-appendices/a-header-fields.md)：涵盖固定首部（Header）、标志位（Flags）以及各种常用选项（Options）。
2. [TCP 状态速查表](./08-appendices/b-states.md)：一网打尽所有状态机的含义、状态流转触发条件，以及常见的排障提示。
3. [Wireshark 过滤器速查](./08-appendices/c-wireshark-filters.md)：教你如何根据 TCP 连接的不同阶段或具体故障现象，精准过滤出想要的报文段（Segment）。
4. [常用网络命令](./08-appendices/d-network-commands.md)：汇总了 Windows、Linux 与 macOS 三大平台下对应网络排障命令的映射与对比。
5. [TCP 术语表](./08-appendices/e-glossary.md)：囊括了从协议层、操作系统底层到应用层的核心中英文术语。
6. [RFC 阅读路线](./08-appendices/f-rfc-roadmap.md)：根据你的学习目标，量身定制不同侧重点的 RFC 规范阅读指南。
7. [RFC 9293：传输控制协议中文译文](./08-appendices/rfc9293/index.md)：最新 TCP 核心标准的完整中文翻译，按章节拆分为多个页面方便阅读。译文原汁原味地保留了原始章节编号、协议变量（如 SND.NXT）、状态名称、ASCII 图示以及各种规范要求标签（MUST/SHOULD 等）。

## 避坑与使用建议

- **字段分析有上下文**：不要孤立地看某个字段值（比如接收窗口 Window）。你需要结合数据流方向、三次握手（Three-way Handshake）时的参数协商情况，以及你的抓包点（靠近客户端还是服务端）来综合评判。
- **状态统计需客观看待**：服务器上出现大量的某个 TCP 状态（比如 `TIME_WAIT` 或 `CLOSE_WAIT`）到底正不正常？这取决于连接的持续时间、并发吞吐率以及当前应用节点扮演的角色。
- **辩证看待 Wireshark 专家提示**：利用 `tcp.analysis.*` 过滤器筛出来的结果，本质上是 Wireshark 自己的启发式推断。在定性问题前，请务必回过头核对原始的序列号（Sequence Number, Seq）、确认号（Acknowledgment Number, Ack）、标志位（Flags），同时确认抓包文件是否存在丢包截断。
- **警惕排障视角盲区**：终端排障命令的输出只代表“当前主机眼里的世界”。如果网络链路上存在代理、NAT 转换或负载均衡器（LB），往往需要在这些关键节点的两端分别抓包和比对。
- **规范要求的严肃性**：阅读 RFC 时，大写的词汇（如 MUST, SHOULD NOT）代表着严格的工程实现要求。教程正文里会用更接地气的大白话，为你剖析这些死磕细节的限制条件在真实场景中的意义。

[返回教程总览](../tcp-from-zero-to-diagnostics.md) · [上一篇：抓包诊断、性能分析与进阶环境](./07-diagnostics-environments.md) · [下一页：TCP 字段速查表](./08-appendices/a-header-fields.md)
