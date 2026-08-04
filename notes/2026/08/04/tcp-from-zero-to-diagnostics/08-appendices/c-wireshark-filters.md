# Wireshark 过滤器速查

Wireshark 有两类过滤器：捕获过滤器决定哪些报文进入捕获文件，显示过滤器决定已经捕获的报文怎样呈现。本附录以显示过滤器为主，便于在保留原始捕获的前提下反复分析。字段名已按 Wireshark 4.6 系列核对，使用其他版本时可在 Display Filter Reference 中确认对应版本范围。

## 连接与端点

| 目标 | 显示过滤器 | 说明 |
| --- | --- | --- |
| 所有 TCP | `tcp` | 显示解析为 TCP 的报文 |
| 任一方向涉及端口5000 | `tcp.port == 5000` | 同时匹配源端口和目标端口 |
| 源端口5000 | `tcp.srcport == 5000` | 只看从服务端示例端口发出的方向 |
| 目标端口5000 | `tcp.dstport == 5000` | 只看发往服务端示例端口的方向 |
| 任一方向涉及 IPv4 主机 | `ip.addr == 192.0.2.10` | 同时匹配 IPv4 源与目标 |
| 任一方向涉及 IPv6 主机 | `ipv6.addr == 2001:db8::10` | 同时匹配 IPv6 源与目标 |
| 指定方向的 IPv4 流量 | `ip.src == 192.0.2.10 && ip.dst == 198.51.100.20` | 方向明确 |
| 指定 TCP 四元组 | `ip.src == 192.0.2.10 && tcp.srcport == 53000 && ip.dst == 198.51.100.20 && tcp.dstport == 443` | 只匹配一个方向；反方向需交换源与目标 |
| 指定连接两方向 | `tcp.stream == 7` | Stream 编号由当前捕获文件中的 Wireshark 会话分析产生 |

选择连接中的任一报文后使用 **Analyze → Follow → TCP Stream**，Wireshark 会自动应用对应 `tcp.stream` 过滤器。Follow 视图按照 TCP 序列重组应用字节，并用不同颜色区分方向。

## 建立连接

| 目标 | 显示过滤器 |
| --- | --- |
| 所有带 SYN 的报文 | `tcp.flags.syn == 1` |
| 初始 SYN | `tcp.flags.syn == 1 && tcp.flags.ack == 0` |
| SYN+ACK | `tcp.flags.syn == 1 && tcp.flags.ack == 1` |
| 指定服务端口的初始 SYN | `tcp.dstport == 5000 && tcp.flags.syn == 1 && tcp.flags.ack == 0` |
| 握手中的 MSS | `tcp.options.mss_val` |
| Window Scale | `tcp.options.wscale.shift` |
| SACK Permitted | `tcp.option_kind == 4` |
| Timestamp | `tcp.options.timestamp.tsval` |
| ECE 或 CWR 位 | `tcp.flags.ece == 1 \|\| tcp.flags.cwr == 1` |
| Accurate ECN 的 AE 位 | `tcp.flags.ae == 1` |

分析握手时保留 `tcp.stream == N`，再展开 TCP Options。SYN 与 SYN+ACK 分别公布各自方向的 MSS、Window Scale 和扩展能力。AccECN 会组合解释 AE、ECE、CWR 三个位，单独过滤某一位只定位该位取值为1的报文。

## 数据与确认

| 目标 | 显示过滤器 | 用途 |
| --- | --- | --- |
| 携带 TCP 数据 | `tcp.len > 0` | 查看有应用负载的报文 |
| 纯 ACK 候选 | `tcp.len == 0 && tcp.flags.ack == 1 && tcp.flags.syn == 0 && tcp.flags.fin == 0 && tcp.flags.reset == 0` | 排除握手、关闭与重置；仍可能包含选项 |
| 相对 Seq 等于某值 | `tcp.seq == 1001` | 默认相对序列号模式下使用 |
| 线上原始 Seq | `tcp.seq_raw == 305419896` | 与报文原始字段匹配 |
| Ack 等于某值 | `tcp.ack == 2001` | 默认相对序列号模式下使用 |
| ACK 某个具体帧 | `tcp.analysis.acks_frame == 42` | 找到确认第42帧的报文 |
| 含有被确认帧号关联的 ACK | `tcp.analysis.acks_frame` | 显示分析器能够关联到先前报文的 ACK |
| 测得 ACK RTT | `tcp.analysis.ack_rtt` | 只显示 Wireshark 能关联并计算 RTT 的报文 |
| 当前在途字节分析 | `tcp.analysis.bytes_in_flight` | 读取分析器估算值，结合捕获完整性使用 |

## 关闭与重置

| 目标 | 显示过滤器 |
| --- | --- |
| FIN | `tcp.flags.fin == 1` |
| RST | `tcp.flags.reset == 1` |
| FIN 或 RST | `tcp.flags.fin == 1 \|\| tcp.flags.reset == 1` |
| 指定连接的关闭 | `tcp.stream == 7 && (tcp.flags.fin == 1 \|\| tcp.flags.reset == 1)` |
| 携带数据的 FIN | `tcp.flags.fin == 1 && tcp.len > 0` |

关闭分析继续查看 FIN 的 Seq、对端 Ack、报文方向和时间。一个报文可以同时设置 ACK、FIN，也可以同时携带数据。

## 重传、乱序与 SACK

下面的 `tcp.analysis.*` 字段来自 Wireshark 会话分析。抓包中途开始、捕获丢帧、镜像口重排和卸载都会影响标记。

| 目标 | 显示过滤器 | 标签含义 |
| --- | --- | --- |
| 疑似重传 | `tcp.analysis.retransmission` | 当前序列范围与先前已见范围重叠，并符合分析器规则 |
| 疑似快速重传 | `tcp.analysis.fast_retransmission` | 分析器根据 ACK 与时序判断的快速恢复候选 |
| 疑似伪重传 | `tcp.analysis.spurious_retransmission` | 对端看起来已经确认了该序列范围 |
| 疑似乱序 | `tcp.analysis.out_of_order` | 序列范围到达次序与预期不同 |
| 重复 ACK | `tcp.analysis.duplicate_ack` | Ack 值与窗口等条件符合重复确认规则 |
| 重复 ACK 次序 | `tcp.analysis.duplicate_ack_num >= 3` | 查找分析器编号达到3及以上的重复 ACK |
| 先前报文未捕获 | `tcp.analysis.lost_segment` | 分析器看到序列缺口，标签描述捕获视角 |
| ACK 指向未捕获报文 | `tcp.analysis.ack_lost_segment` | Ack 推进超过分析器已见数据 |
| SACK Block | `tcp.options.sack.count > 0` | ACK 中包含一个或多个选择确认块 |
| SACK 左边界 | `tcp.options.sack_le` | 查看每个已接收不连续范围的起点 |
| SACK 右边界 | `tcp.options.sack_re` | 查看范围结束后的下一个序列位置 |
| D-SACK | `tcp.options.sack.dsack` | 分析器识别到重复数据范围反馈 |

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
| 原始16位 Window 为0 | `tcp.window_size_value == 0` | 握手和RST等场景需要结合标志位解释 |
| 计算后的窗口小于4096 | `tcp.window_size < 4096` | 依赖握手中的缩放信息 |
| 窗口缩放因子 | `tcp.window_size_scalefactor` | 捕获握手后才能稳定解释 |
| Zero Window | `tcp.analysis.zero_window` | 分析器识别的零窗口通告 |
| Zero Window Probe | `tcp.analysis.zero_window_probe` | 发送方探测窗口是否重新开放 |
| Probe ACK | `tcp.analysis.zero_window_probe_ack` | 对探测的确认 |
| Window Update | `tcp.analysis.window_update` | 接收方公布更大窗口 |
| Window Full | `tcp.analysis.window_full` | 发送数据已填满分析器估算窗口 |

观察零窗口过程时，把过滤器限定到单个 `tcp.stream`，同时保留应用日志。接收应用暂停读取、接收缓冲区占用、窗口通告和恢复读取通常构成一条完整时间线。

## Keepalive 与空闲连接

| 目标 | 显示过滤器 |
| --- | --- |
| 分析器识别的 Keepalive | `tcp.analysis.keep_alive` |
| Keepalive ACK | `tcp.analysis.keep_alive_ack` |
| Keepalive 或 ACK | `tcp.analysis.keep_alive \|\| tcp.analysis.keep_alive_ack` |

不同实现的探测报文细节存在差异。Seq、Ack、长度、间隔和 Socket 选项配置共同支持判断。

## Checksum 与捕获质量

| 目标 | 显示过滤器 | 阅读方式 |
| --- | --- | --- |
| 分析器标注错误校验和 | `tcp.checksum_bad.expert` | 本机发送抓包优先检查 Checksum Offload |
| 部分伪首部校验和 | `tcp.checksum.partial` | Wireshark 4.2+ 可用于识别部分卸载表现 |
| 报文被截断 | `frame.cap_len < frame.len` | 捕获长度小于线上帧长度 |
| 含有专家信息 | `_ws.expert` | 范围较宽，可在 Analyze → Expert Information 中按严重级别继续筛选 |

## TLS、HTTP 与其他应用协议

| 目标 | 显示过滤器 |
| --- | --- |
| TLS | `tls` |
| TLS 握手 | `tls.handshake` |
| HTTP/1.x | `http` |
| HTTP 请求 | `http.request` |
| HTTP 响应 | `http.response` |
| HTTP/2 | `http2` |
| DNS | `dns` |
| QUIC | `quic` |

端口与协议解析可以通过 **Analyze → Decode As** 调整。自定义长度前缀协议在没有专用 dissector 时仍可用 `tcp.stream`、`tcp.len`、Follow TCP Stream 和原始字节分析。

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

## 分析顺序

1. 用地址和端口定位候选流量。
2. 选择一个报文并用 `tcp.stream` 隔离连接。
3. 确认握手是否完整，记录 Window Scale、MSS、SACK 和 Timestamp。
4. 用 `tcp.len > 0` 确定数据方向与数据阶段。
5. 检查 Seq、Ack、SACK 与窗口的原始字段。
6. 使用 `tcp.analysis.*` 快速定位候选异常。
7. 回到原始报文和另一端证据验证分析器标签。
8. 将 FIN、RST 与应用关闭日志对应。

## 参考

- [Wireshark TCP Display Filter Reference](https://www.wireshark.org/docs/dfref/t/tcp.html)
- [Wireshark User’s Guide: Following Protocol Streams](https://www.wireshark.org/docs/wsug_html_chunked/ChAdvFollowStreamSection.html)
- [Wireshark User’s Guide: TCP Stream Graphs](https://www.wireshark.org/docs/wsug_html_chunked/ChStatTCPStreamGraphs.html)

[上一页：TCP 状态速查表](./b-states.md) · [返回附录目录](../08-appendices.md) · [下一页：常用网络命令](./d-network-commands.md)
