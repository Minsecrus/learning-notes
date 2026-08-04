# Wireshark 过滤器速查

Wireshark 包含两类过滤器：**捕获过滤器（Capture Filters）** 决定哪些数据包会被写入捕获文件；**显示过滤器（Display Filters）** 则决定如何筛选和展示已经捕获的数据。本附录主要介绍显示过滤器，这种方式不会破坏原始抓包文件，非常适合反复排查和分析。本文列出的字段名均基于 Wireshark 4.6 系列，如果你使用的是其他版本，请参考官方的 Display Filter Reference 确认适用的字段范围。

## 连接与端点

| 目标 | 显示过滤器 | 说明 |
| --- | --- | --- |
| 所有 TCP | `tcp` | 显示所有解析为 TCP 协议的数据包 |
| 任一方向涉及端口 5000 | `tcp.port == 5000` | 同时匹配源端口和目标端口为 5000 的数据包 |
| 源端口 5000 | `tcp.srcport == 5000` | 筛选源端口为 5000 的数据包（例如只看服务端发出的数据） |
| 目标端口 5000 | `tcp.dstport == 5000` | 筛选目标端口为 5000 的数据包（例如只看发往服务端的数据） |
| 涉及指定 IPv4 地址 | `ip.addr == 192.0.2.10` | 匹配源 IP 或目标 IP 为该地址的数据包 |
| 涉及指定 IPv6 地址 | `ipv6.addr == 2001:db8::10` | 匹配源 IP 或目标 IP 为该地址的数据包 |
| 指定方向的 IPv4 流量 | `ip.src == 192.0.2.10 && ip.dst == 198.51.100.20` | 精确匹配从源 IP 发往目标 IP 的单向流量 |
| 指定 TCP 四元组 | `ip.src == 192.0.2.10 && tcp.srcport == 53000 && ip.dst == 198.51.100.20 && tcp.dstport == 443` | 仅匹配单向数据流；匹配反方向需对调源与目标信息 |
| 指定完整连接（双向） | `tcp.stream == 7` | 基于 Wireshark 自动分配的 Stream ID 筛选整个 TCP 连接的双向流量 |

在抓包列表中选中某个数据包（Packet/Segment），然后点击菜单栏的 **Analyze → Follow → TCP Stream**，Wireshark 会自动为你填入对应的 `tcp.stream` 过滤器。在弹出的追踪视图中，Wireshark 会根据 TCP 序列号（Sequence Number）自动重组应用层数据，并使用不同的颜色清晰区分客户端和服务器的双向流量。

## 建立连接

| 目标 | 显示过滤器 |
| --- | --- |
| 包含 SYN 标志的数据包 | `tcp.flags.syn == 1` |
| 初始 SYN（第一次握手） | `tcp.flags.syn == 1 && tcp.flags.ack == 0` |
| SYN+ACK（第二次握手） | `tcp.flags.syn == 1 && tcp.flags.ack == 1` |
| 特定服务端口的初始 SYN | `tcp.dstport == 5000 && tcp.flags.syn == 1 && tcp.flags.ack == 0` |
| 握手协商的 MSS 值 | `tcp.options.mss_val` |
| 窗口缩放因子 (Window Scale) | `tcp.options.wscale.shift` |
| 允许 SACK (SACK Permitted) | `tcp.option_kind == 4` |
| 时间戳 (Timestamp) | `tcp.options.timestamp.tsval` |
| 带有 ECE 或 CWR 标志位 | `tcp.flags.ece == 1 \|\| tcp.flags.cwr == 1` |
| Accurate ECN 的 AE 标志位 | `tcp.flags.ae == 1` |

排查连接建立问题时，建议先用 `tcp.stream == N` 锁定连接，然后再展开详情面板里的 TCP Options。注意，客户端和服务端会在各自的 SYN 和 SYN+ACK 包中，分别通告己方的 MSS、Window Scale 以及其他扩展能力。另外，新型的 AccECN 机制会组合使用 AE、ECE 和 CWR 这三个标志位；如果你只过滤其中某一个字段，匹配到的仅仅是该标志位被置为 1 的数据包。

## 数据与确认

| 目标 | 显示过滤器 | 用途 |
| --- | --- | --- |
| 携带 TCP 数据 | `tcp.len > 0` | 查看包含应用层负载（Payload）的数据包 |
| 纯 ACK 候选 | `tcp.len == 0 && tcp.flags.ack == 1 && tcp.flags.syn == 0 && tcp.flags.fin == 0 && tcp.flags.reset == 0` | 排除建连、断连和重置包，仅查看纯确认包（可能带有 Options） |
| 相对 Seq (Sequence Number) | `tcp.seq == 1001` | 匹配相对序列号（Wireshark 默认开启相对序列号模式） |
| 原始 Seq (Raw Seq) | `tcp.seq_raw == 305419896` | 直接匹配网络传输中的绝对序列号 |
| 相对 Ack (Acknowledgment Number) | `tcp.ack == 2001` | 匹配相对确认号 |
| 确认了特定帧的 ACK 包 | `tcp.analysis.acks_frame == 42` | 寻找用来确认“第 42 号数据帧”的那个 ACK |
| 已成功关联原报文的 ACK | `tcp.analysis.acks_frame` | 显示所有已被 Wireshark 成功映射到原始数据包的 ACK |
| 测算出的 ACK RTT | `tcp.analysis.ack_rtt` | 仅显示 Wireshark 能够计算出往返时间（RTT）的数据包 |
| 飞行中的字节数 (Bytes in Flight) | `tcp.analysis.bytes_in_flight` | 获取 Wireshark 估算的网络在途字节数（受抓包完整性影响较大） |

## 关闭与重置

| 目标 | 显示过滤器 |
| --- | --- |
| FIN 包 | `tcp.flags.fin == 1` |
| RST 重置包 | `tcp.flags.reset == 1` |
| FIN 或 RST 包 | `tcp.flags.fin == 1 \|\| tcp.flags.reset == 1` |
| 指定连接的关闭/重置包 | `tcp.stream == 7 && (tcp.flags.fin == 1 \|\| tcp.flags.reset == 1)` |
| 捎带业务数据的 FIN 包 | `tcp.flags.fin == 1 && tcp.len > 0` |

分析连接断开的过程时，重点关注 FIN 包的序列号 (Seq)、对端的确认号 (Ack)、收发方向以及时间间隔。需要特别注意的是，TCP 允许将多个标志位叠加使用（例如同时设置 ACK 和 FIN），并且 FIN 包也可以捎带着应用层数据一起发送。

## 重传、乱序与 SACK

以下列出的 `tcp.analysis.*` 字段均由 Wireshark 的内部专家分析系统（Expert Info）生成。请注意，如果你是从连接中途开始抓包，或者发生了抓包漏包、交换机镜像口导致包乱序、以及网卡开启了硬件卸载（Offload），都有可能导致 Wireshark 生成不准确的分析标记。

| 目标 | 显示过滤器 | 标签含义 |
| --- | --- | --- |
| 疑似重传 (Retransmission) | `tcp.analysis.retransmission` | 当前数据包的序列号范围与之前出现过的重叠，且符合 Wireshark 的重传判定规则 |
| 疑似快速重传 (Fast Retransmission) | `tcp.analysis.fast_retransmission` | Wireshark 根据 ACK 行为和时序，判定该包是快速恢复机制触发的重传候选 |
| 疑似虚假重传 (Spurious Retransmission) | `tcp.analysis.spurious_retransmission` | 对端实际上已经确认过该序列范围的数据，发送方却再次发送了相同数据 |
| 疑似乱序 (Out of Order) | `tcp.analysis.out_of_order` | 数据包到达的序列号顺序与 Wireshark 预期的连续顺序不一致 |
| 重复确认 (Duplicate ACK) | `tcp.analysis.duplicate_ack` | 该包的确认号和接收窗口大小等指标，符合重复确认的特征 |
| 重复确认次数达到阈值 | `tcp.analysis.duplicate_ack_num >= 3` | 筛选 Wireshark 判定为第 3 次及以上的重复 ACK，常用于排查快速重传触发条件 |
| 上一个数据包未捕获 (Lost Segment) | `tcp.analysis.lost_segment` | Wireshark 发现了序列号断层（这是从抓包视角的判断，不代表网络真实丢包） |
| ACK 确认了未捕获的数据 | `tcp.analysis.ack_lost_segment` | ACK 的确认号推进超过了 Wireshark 记录到的最大已发送数据范围 |
| 包含 SACK 块 | `tcp.options.sack.count > 0` | 该 ACK 包中携带了一个或多个 SACK（选择性确认）数据块 |
| SACK 块的左边界 | `tcp.options.sack_le` | 查看已接收到的每个不连续数据块的起始序列号 |
| SACK 块的右边界 | `tcp.options.sack_re` | 查看该不连续数据块末尾的下一个预期序列号 |
| D-SACK (Duplicate SACK) | `tcp.options.sack.dsack` | 接收端通过 SACK 选项告知发送端，自己收到了重复的数据包 |

组合示例：

```text
tcp.stream == 7 &&
(tcp.analysis.retransmission ||
 tcp.analysis.fast_retransmission ||
 tcp.analysis.out_of_order ||
 tcp.analysis.duplicate_ack ||
 tcp.options.sack.count > 0)
```

## 窗口与流量控制

| 目标 | 显示过滤器 | 说明 |
| --- | --- | --- |
| 原始 16 位 Window 字段为 0 | `tcp.window_size_value == 0` | 单纯看首部字段的值；在建连或 RST 等场景下，需结合标志位综合判断 |
| 计算后的窗口大小小于 4096 | `tcp.window_size < 4096` | 这是根据握手期间的 Window Scale 计算出的实际窗口大小 |
| 窗口缩放因子 (Window Scale) | `tcp.window_size_scalefactor` | 只有抓到了完整的握手包，Wireshark 才能准确解析并应用该因子 |
| 零窗口通告 (Zero Window) | `tcp.analysis.zero_window` | Wireshark 明确识别到的接收窗口耗尽通告 |
| 零窗口探测 (Zero Window Probe) | `tcp.analysis.zero_window_probe` | 发送端发出的探测包，用来询问接收端窗口是否已经恢复 |
| 探测包确认 (Probe ACK) | `tcp.analysis.zero_window_probe_ack` | 接收端对零窗口探测包的回应 |
| 窗口更新 (Window Update) | `tcp.analysis.window_update` | 接收端主动通知发送端接收窗口已经扩大 |
| 发送窗口已满 (Window Full) | `tcp.analysis.window_full` | 发送方发出的数据量已达到 Wireshark 估算的对端接收窗口上限 |

在排查零窗口（Zero Window）问题时，建议先通过 `tcp.stream` 过滤器将视图限定到单条连接，并结合服务端的应用程序日志进行分析。通常情况下，“应用层暂停读取数据 -> 操作系统接收缓冲区填满 -> 发出零窗口通告 -> 应用层恢复读取 -> 发出窗口更新”，这几个阶段会构成一条完整清晰的事件时间线。

## Keepalive 与空闲连接

| 目标 | 显示过滤器 |
| --- | --- |
| Wireshark 识别的 Keepalive 探测包 | `tcp.analysis.keep_alive` |
| Keepalive 探测的响应 ACK | `tcp.analysis.keep_alive_ack` |
| 筛选 Keepalive 请求及响应 | `tcp.analysis.keep_alive \|\| tcp.analysis.keep_alive_ack` |

需要注意的是，不同操作系统的 TCP Keepalive 实现细节（如序列号的回退机制、是否包含垃圾数据等）可能存在差异。在分析时，通常需要结合序列号 (Seq)、确认号 (Ack)、报文长度、发送间隔以及服务端的 Socket 选项配置来综合判断。

## Checksum 与捕获质量

| 目标 | 显示过滤器 | 阅读方式 |
| --- | --- | --- |
| Wireshark 提示 Checksum 错误 | `tcp.checksum_bad.expert` | 如果是在发送端本机抓包，优先怀疑是网卡的 Checksum Offload 导致的“假阳性”报错 |
| 部分伪首部校验和 (Partial Checksum)| `tcp.checksum.partial` | Wireshark 4.2+ 版本支持，可用于识别部分网卡卸载 (TSO/LSO) 行为 |
| 抓包文件被截断 | `frame.cap_len < frame.len` | 抓到的包长度 (cap_len) 小于网络上实际传输的帧长度 (len) |
| 包含专家提示信息 | `_ws.expert` | 筛选范围较广，建议在 **Analyze → Expert Information** 面板中按严重级别（Warning/Error）进一步过滤 |

## TLS、HTTP 与其他应用协议

| 目标 | 显示过滤器 |
| --- | --- |
| TLS 协议 | `tls` |
| TLS 握手记录 | `tls.handshake` |
| HTTP/1.x 协议 | `http` |
| HTTP 请求 | `http.request` |
| HTTP 响应 | `http.response` |
| HTTP/2 协议 | `http2` |
| DNS 协议 | `dns` |
| QUIC 协议 | `quic` |

如果 Wireshark 没有正确识别出协议（例如使用了非标准端口），你可以通过右键菜单的 **Analyze → Decode As** 强制指定解析方式。对于那些没有专属解析器（Dissector）的私有 TCP 协议，依然可以使用 `tcp.stream`、`tcp.len`、**Follow TCP Stream** 等基础工具直接分析原始字节流。

## 常用组合

### 指定连接的建立、异常与关闭

```text
tcp.stream == 7 &&
(tcp.flags.syn == 1 ||
 tcp.flags.fin == 1 ||
 tcp.flags.reset == 1 ||
 tcp.analysis.flags)
```

### 指定服务的所有问题候选

```text
tcp.port == 5000 &&
(tcp.analysis.retransmission ||
 tcp.analysis.out_of_order ||
 tcp.analysis.duplicate_ack ||
 tcp.analysis.zero_window ||
 tcp.flags.reset == 1)
```

### IPv4 双方的所有 TCP 流量

```text
tcp &&
((ip.src == 192.0.2.10 && ip.dst == 198.51.100.20) ||
 (ip.src == 198.51.100.20 && ip.dst == 192.0.2.10))
```

## 排查分析建议步骤

1. **粗筛范围**：利用 IP 地址和端口号，定位到疑似存在问题的候选流量。
2. **锁定连接**：选中其中一个相关的数据包，应用 `tcp.stream` 过滤器，剔除背景噪音。
3. **检查握手**：确认三次握手是否完整，并重点记录协商的 Window Scale、MSS、SACK Permitted 及 Timestamp 选项。
4. **定位数据**：使用 `tcp.len > 0` 过滤掉纯 ACK 包，观察业务数据的主要流向和交互阶段。
5. **核对核心指标**：关注原始序列号 (Seq)、确认号 (Ack)、SACK 边界以及接收窗口大小的动态变化。
6. **借助专家系统**：利用 `tcp.analysis.*` 系列过滤器，快速找出丢包、重传、乱序或零窗口等异常现象。
7. **交叉验证**：不要完全迷信 Wireshark 的分析标签，应返回到原始报文，结合对端的抓包或应用日志，验证分析器结论的准确性。
8. **分析断连**：追踪 FIN 或 RST 包的发生时机，将其与应用程序的异常断开或超时日志进行时间对齐。

## 参考

- [Wireshark TCP Display Filter Reference](https://www.wireshark.org/docs/dfref/t/tcp.html)
- [Wireshark User’s Guide: Following Protocol Streams](https://www.wireshark.org/docs/wsug_html_chunked/ChAdvFollowStreamSection.html)
- [Wireshark User’s Guide: TCP Stream Graphs](https://www.wireshark.org/docs/wsug_html_chunked/ChStatTCPStreamGraphs.html)

[上一页：TCP 状态速查表](./b-states.md) · [返回附录目录](../08-appendices.md) · [下一页：常用网络命令](./d-network-commands.md)
