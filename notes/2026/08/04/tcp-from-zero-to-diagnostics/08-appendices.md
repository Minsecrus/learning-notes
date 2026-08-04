# TCP 速查与规范阅读

七个附录把正文中的高频信息整理为可直接查询的表格、索引和规范译文。遇到字段、状态或命令时先查对应附录，再沿链接回到正文理解机制。

## 附录目录

1. [TCP 字段速查表](./08-appendices/a-header-fields.md)：固定首部、标志位与常用选项。
2. [TCP 状态速查表](./08-appendices/b-states.md)：状态含义、进入与退出事件、排障提示。
3. [Wireshark 过滤器速查](./08-appendices/c-wireshark-filters.md)：按连接阶段和故障现象检索报文。
4. [常用网络命令](./08-appendices/d-network-commands.md)：Windows、Linux 与 macOS 命令映射。
5. [TCP 术语表](./08-appendices/e-glossary.md)：协议层、系统层与应用层术语。
6. [RFC 阅读路线](./08-appendices/f-rfc-roadmap.md)：按学习目标选择当前规范。
7. [RFC 9293：传输控制协议中文译文](./08-appendices/g-rfc-9293-tcp-zh.md)：完整保留章节编号、协议变量、状态名、图示和规范要求标签。

## 使用方式

- 字段值需要结合连接方向、握手协商和抓包点解释。
- 状态数量需要结合持续时间、连接速率与应用角色解释。
- `tcp.analysis.*` 过滤器匹配 Wireshark 推断，分析时继续核对原始 Seq、Ack、Flags 和捕获完整性。
- 命令输出体现当前主机视角。代理、NAT 和负载均衡前后通常需要分别采集。
- RFC 中的大写要求词具有规范含义，教程正文会用通俗语言解释其适用条件。

[返回教程总览](../tcp-from-zero-to-diagnostics.md) · [上一篇：抓包诊断、性能分析与进阶环境](./07-diagnostics-environments.md) · [下一页：TCP 字段速查表](./08-appendices/a-header-fields.md)
