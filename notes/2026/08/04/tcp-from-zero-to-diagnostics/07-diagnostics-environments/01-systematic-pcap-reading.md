# 第31章 系统化阅读一份 TCP 抓包

打开一份陌生抓包时，Wireshark 往往会同时显示重传、乱序、窗口变化和多条连接。稳定的方法是沿着固定顺序收集证据：先确认观察条件，再识别连接和阶段，随后计算字节进度，最后与主机状态、应用日志互相校准。

本章使用一个贯穿案例：客户端 `10.0.0.21:51514` 连接服务端 `10.0.0.8:9000`，发送 64 字节请求，约 2 秒后收到 32 字节响应。

## 一、先给证据分类

一份可复查的报告至少区分五类内容：

| 类别 | 示例 | 记录方式 |
| --- | --- | --- |
| 抓包事实 | 帧 4 的 `tcp.len` 为 64，帧 5 在 1.2 ms 后确认到 Ack 65 | 引用帧号、字段和时间 |
| 分析器标记 | Wireshark 将帧 18 标为 `TCP Retransmission` | 写明工具及标记名称 |
| 推断 | 请求字节已在帧 5 前到达服务端 TCP 栈 | 列出支撑帧和推理过程 |
| 待验证假设 | 服务端业务处理占用了约 2 秒 | 给出可区分该假设的实验 |
| 结论 | 服务端日志显示处理阶段耗时 1.98 秒 | 同时引用抓包与日志事件 |

分析器标记属于很有价值的线索，它依赖已捕获报文和工具算法。最终结论需要能够沿着证据链回到原始字段。

## 二、步骤零：记录抓包条件

在查看单个报文前，先建立“这份文件怎样产生”的背景表：

- 抓包主机、接口和位置，例如客户端以太网口、服务端回环口、代理前侧；
- 捕获开始与结束时间、时区、主机时钟同步方式；
- 捕获过滤器、显示过滤器和 snaplen；
- Npcap、dumpcap 或其他工具报告的捕获包数与丢弃包数；
- 网卡卸载、虚拟交换机、容器和 VPN 情况；
- 测试操作、预期四元组、请求 ID 与应用日志文件。

抓包点决定可见范围。客户端抓包可以确认客户端何时发出数据、何时看到对端响应；它通常无法单独定位报文在远端网卡、TCP 栈和应用队列中的具体停留时间。两端抓包加上同步时钟可以进一步缩小路径范围。

保留原始 `pcapng` 文件并计算哈希，后续只在副本上添加注释：

```powershell
Get-FileHash -Algorithm SHA256 .\case.pcapng
Get-Item .\case.pcapng | Select-Object FullName, Length, LastWriteTimeUtc
```

## 三、识别连接、角色和完整性

先从 `Statistics → Conversations → TCP` 找到候选四元组，也可以使用显示过滤器：

```text
ip.addr == 10.0.0.21 && ip.addr == 10.0.0.8 && tcp.port == 9000
tcp.flags.syn == 1 && tcp.flags.ack == 0
tcp.stream eq 7
```

首个单独携带 SYN 的方向通常指向主动打开方。服务器端口常较稳定，客户端临时端口会随连接变化；应用日志和监听状态可以提供进一步确认。`tcp.stream` 是 Wireshark 在当前文件内分配的索引，换一份文件后编号可能改变，因此报告中仍应保留四元组。

大型文件可能同时包含 DNS、ARP、ICMP、健康检查、连接池和多个并行 TCP 流。可以先查看 `Statistics → Protocol Hierarchy`、`Endpoints` 与 `Conversations`，按开始时间、持续时间、字节数或端口缩小范围。故障时间窗口、用户地址和服务端口组成第一层筛选，请求 ID 与载荷特征组成第二层筛选。保留一份覆盖关联流量的视图，再为目标流建立单独视图；这样既能专注计算 Seq/Ack，也能回看名称解析、ICMP 错误和代理连接等上下文。

浏览器、连接池和重试逻辑可能为一次用户操作创建多条连接。每条连接分别记录四元组、`tcp.stream`、开始时间和结束方式，再通过请求 ID、TLS 会话信息、载荷摘要或应用日志建立业务关联。相同客户端端口在不同时间也可能被重新使用，时间范围是区分连接实例的重要条件。

随后判断捕获是否覆盖完整生命周期：

- 开头是否包含 SYN；
- 握手后的 Seq、Ack 能否连续衔接；
- 文件结尾是否包含 FIN 或 RST；
- 是否在会话中途开始、提前结束或报告抓包丢弃；
- 捕获过滤器是否排除了相关接口、地址或方向。

缺少握手仍然可以分析数据阶段，只需把 MSS、Window Scale 和 SACK Permitted 等握手选项标记为“当前文件未知”。

## 四、读握手和协商选项

按 SYN、SYN+ACK、第三次 ACK 的顺序记录：

1. 双方初始序列号和确认关系；
2. 两个方向各自声明的 MSS；
3. Window Scale、SACK Permitted、Timestamps；
4. SYN 是否重传，握手各阶段耗时；
5. 第三次 ACK 是否携带首批应用数据。

启用相对序列号后，首个 SYN 常显示 `Seq=0`，对端 SYN+ACK 显示 `Ack=1`。SYN 会占用一个序列号，所以握手完成后的首个数据字节从相对 `Seq=1` 开始。分析窗口时应使用 Wireshark 计算出的缩放后窗口，并保留握手中的缩放因子作为依据。

## 五、用 Seq 和 Ack 建立字节时间线

对每个方向分别维护“已经发送到哪里”和“对端累计确认到哪里”。一个报文段的期望后继序列号可写成：

$$
\operatorname{NextSeq}=\operatorname{Seq}+\operatorname{TCP\ Len}+I_{\mathrm{SYN}}+I_{\mathrm{FIN}}
$$

其中携带 SYN 或 FIN 时，对应指示量取 1。纯 ACK 的 `TCP Len` 为 0，通常也不会推进自身 Seq。Ack 值表示接收方下一步期待的字节序号。

贯穿案例的关键帧可以整理为：

| 帧 | 相对时间 | 方向 | Seq / Ack | TCP Len | 解释 |
| --- | ---: | --- | --- | ---: | --- |
| 1 | 0.0000 s | 客户端 → 服务端 | 0 / 0，SYN | 0 | 发起连接 |
| 2 | 0.0008 s | 服务端 → 客户端 | 0 / 1，SYN+ACK | 0 | 确认客户端 SYN |
| 3 | 0.0010 s | 客户端 → 服务端 | 1 / 1，ACK | 0 | 握手完成 |
| 4 | 0.0040 s | 客户端 → 服务端 | 1 / 1，PSH+ACK | 64 | 请求覆盖字节 1～64 |
| 5 | 0.0052 s | 服务端 → 客户端 | 1 / 65，ACK | 0 | 服务端 TCP 累计确认请求 |
| 6 | 2.0090 s | 服务端 → 客户端 | 1 / 65，PSH+ACK | 32 | 发送业务响应 |
| 7 | 2.0098 s | 客户端 → 服务端 | 65 / 33，ACK | 0 | 客户端累计确认响应 |

帧 5 说明客户端发出请求后很快收到累计确认，支持请求字节已经进入服务端 TCP 接收路径的判断。帧 6 提供的直接事实是：客户端抓包在约 2 秒后看到响应数据。这段间隔可能分布在服务端应用、发送队列和回程路径。此时“服务端处理耗时较长”是一项重点假设。若同一请求 ID 的服务端日志记录 `request_received=00:00.004`、`response_ready=00:02.006`，并且时间基准已经校准，证据便支持处理阶段占用了大部分等待；服务端出口抓包还能继续拆分写入后的排队与回程时间。TCP ACK 与业务处理完成属于两个不同事件。

## 六、检查异常、窗口和关闭

完成正常字节时间线后，再查看异常线索，能够减少分析器高亮带来的方向偏移：

```text
tcp.analysis.retransmission || tcp.analysis.fast_retransmission
tcp.analysis.out_of_order || tcp.analysis.lost_segment
tcp.analysis.duplicate_ack || tcp.option_kind == 5
tcp.window_size == 0 || tcp.analysis.zero_window_probe
tcp.flags.fin == 1 || tcp.flags.reset == 1
```

对每个重传候选段，比较原始段与后续段的 Seq 范围、长度、时间间隔和对端 Ack。对窗口问题，记录接收方通告窗口、发送方在途字节和 Zero Window Probe。对关闭过程，明确哪一端先发送 FIN、对端何时确认、双方最后的数据是否已累计确认。RST 还需要结合其 Seq、Ack、前置报文和应用错误日志解释来源。

## 七、把抓包与主机、应用对齐

Windows 可记录连接与进程归属：

```powershell
$tcpConn = Get-NetTCPConnection -RemotePort 9000 | Select-Object -First 1
$tcpConn | Select-Object LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
Get-Process -Id $tcpConn.OwningProcess
```

应用日志建议包含单调计时耗时、墙上时间、连接 ID、请求 ID、读取完成、处理完成、写入调用返回和关闭事件。不同主机的墙上时钟可能存在偏差，可利用握手、请求 ID 和事件顺序辅助对齐。

日志中的“写入调用返回”通常表示字节已进入本机 Socket 发送路径，后续何时上网、何时被对端 TCP 确认仍需抓包或内核遥测。类似地，“读取调用返回”说明应用已经取得相应字节。把这些边界写入时间线，可以准确区分应用排队、内核排队与网络传输。

命令行导出关键字段有助于形成可复查附件：

```powershell
tshark -r .\case.pcapng -Y "tcp.stream eq 7" -T fields `
  -e frame.number -e frame.time_relative -e ip.src -e tcp.srcport `
  -e ip.dst -e tcp.dstport -e tcp.seq -e tcp.ack -e tcp.len `
  -e tcp.window_size -e tcp.flags -e _ws.col.info
```

## 八、报告模板

```text
问题：客户端请求延迟约 2 秒
范围：客户端网卡抓包；10.0.0.21:51514 ↔ 10.0.0.8:9000；12:00:00～12:00:03
完整性：含完整握手与关闭；snaplen 65535；捕获工具报告 0 丢弃
事实：帧4发送64字节；帧5在1.2 ms后Ack=65；帧6在约2.005 s后发送32字节
分析器标记：该流无重传、零窗口或乱序标记
推断：请求已快速获得TCP累计确认；响应前间隔仍需在服务端处理、发送队列和回程路径间拆分
验证：按请求ID查询服务端读取完成与响应就绪时间
结论：服务端业务处理耗时1.98 s；网络传输未显示同量级等待
边界：缺少服务端网卡抓包，路径单向时延未被精确拆分
```

## 实验：为一份抓包建立证据链

1. 启动一个收到完整请求后等待 2 秒再响应的本地服务，并在读取完成、处理完成处记录日志。
2. 捕获从握手到关闭的完整连接，记下接口、四元组和请求 ID。
3. 关闭 Wireshark 的着色规则影响，只按帧号、时间、Seq、Ack、Len 建立表格。
4. 写出至少一个事实、一个推断和一个待验证假设。
5. 加入服务端日志，说明原假设得到支持、被修正或仍需更多证据。

## 理解检查

1. 看到服务器对请求数据发送 ACK，能够确认到哪一层的进度？
2. 抓包从连接中途开始时，哪些握手信息需要标记为未知？
3. 为什么每个方向都要单独维护 Seq 与累计 Ack？
4. 一条 `TCP Retransmission` 标记成为结论前，还应核对哪些字段？
5. 客户端单点抓包显示 2 秒响应延迟，怎样设计最小验证实验来区分网络等待与服务端处理等待？

## 延伸阅读

- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)
- [Wireshark TCP 显示过滤字段参考](https://www.wireshark.org/docs/dfref/t/tcp.html)

---

[上一章：第30章 TLS、HTTP 与 TCP 的关系](../06-application-development/06-tls-http-tcp.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第32章 常见抓包假象](./02-capture-artifacts.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
