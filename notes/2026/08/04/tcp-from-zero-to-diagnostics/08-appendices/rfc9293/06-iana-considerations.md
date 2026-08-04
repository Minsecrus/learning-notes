---
title: 6. IANA 注意事项
outline: deep
lastUpdated: false
---

# 6. IANA 注意事项

<a id="section-6"></a>

IANA 对“Transmission Control Protocol (TCP) Header Flags”注册表作出了本节所述的若干变更。

该注册表最初由 RFC 3168 创建，但当时仅收录了 RFC 3168 定义的新位，遗漏了 RFC 793 及其他文档此前描述的位。此后，第 7 位又经 RFC 8311 更新。

下表将“Bit”列更名为“Bit Offset”，因为该列引用的是图 1 所示 TCP 首部 16 位对齐视图中各首部标志的偏移量。偏移量 0 至 3 的位属于 TCP 报文段的数据偏移字段，而非首部标志。

IANA 新增了“Assignment Notes（分配说明）”列。

IANA 分配的值如下：

| 位偏移 | 名称 | 参考 | 分配说明 |
| ---: | --- | --- | --- |
| 4 | 为未来使用保留 | RFC 9293 |  |
| 5 | 为未来使用保留 | RFC 9293 |  |
| 6 | 为未来使用保留 | RFC 9293 |  |
| 7 | 为未来使用保留 | RFC 8311 | Historic RFC 3540 曾将其用作 NS（Nonce Sum）。 |
| 8 | `CWR`（Congestion Window Reduced） | RFC 3168 |  |
| 9 | `ECE`（ECN-Echo） | RFC 3168 |  |
| 10 | 紧急指针字段有效（`URG`） | RFC 9293 |  |
| 11 | 确认字段有效（`ACK`） | RFC 9293 |  |
| 12 | 推送功能（`PSH`） | RFC 9293 |  |
| 13 | 复位连接（`RST`） | RFC 9293 |  |
| 14 | 同步序列号（`SYN`） | RFC 9293 |  |
| 15 | 发送方没有更多数据（`FIN`） | RFC 9293 |  |

**表 7：TCP 首部标志。**

“TCP Header Flags”注册表也已迁移，成为全局性的“Transmission Control Protocol (TCP) Parameters”注册表下的一个子注册表：[IANA TCP 参数](https://www.iana.org/assignments/tcp-parameters/)。

该注册表的注册流程仍为 Standards Action；但 Reference 已更新为指向本文档，原有的 Note 已移除。
