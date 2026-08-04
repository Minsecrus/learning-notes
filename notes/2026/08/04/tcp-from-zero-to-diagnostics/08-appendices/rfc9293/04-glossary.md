---
title: 4. 术语表
outline: deep
lastUpdated: false
---

# 4. 术语表

<a id="section-4"></a>

| 术语 | 中文含义与定义 |
| --- | --- |
| `ACK` | 确认控制位，不占用序列空间。该控制位表示本报文段的确认字段给出了本报文段发送方期望接收的下一个序列号，即确认此前的所有序列号均已收到。 |
| connection | 由一对套接字标识的逻辑通信路径。 |
| datagram | 在分组交换计算机通信网络中发送的一条消息。 |
| Destination Address | 报文段预期接收端点的网络层地址。 |
| `FIN` | finis（结束）控制位，占用一个序列号，表示发送方不再发送数据或其他占用序列空间的控制信息。 |
| flush | 从存储区（缓冲区或队列）中移除所有内容（数据或报文段）。 |
| fragment | 逻辑数据单元的一部分；特别地，互联网分片是互联网数据报的一部分。 |
| header | 位于消息、报文段、分片、分组或数据块开头的控制信息。 |
| host | 计算机；从通信网络的角度看，主机是消息的源或目的地。 |
| Identification | Internet Protocol 中的字段。该标识值由发送方分配，用于帮助接收方重组数据报分片。 |
| internet address | 网络层地址。 |
| internet datagram | 在互联网主机之间交换的数据单元，连同使数据报能够从源端路由到目的端的互联网首部。 |
| internet fragment | 互联网数据报数据的一部分，带有互联网首部。 |
| `IP` | Internet Protocol，互联网协议。参见 RFC 791 和 RFC 8200。 |
| `IRS` | Initial Receive Sequence number，初始接收序列号；连接上发送方使用的第一个序列号。 |
| `ISN` | Initial Sequence Number，初始序列号；连接上使用的第一个序列号（ISS 或 IRS）。其选取方式应保证在指定时间内取值唯一，且攻击者难以预测。 |
| `ISS` | Initial Send Sequence number，初始发送序列号；连接上发送方使用的第一个序列号。 |
| left sequence | 数据接收 TCP 端点接下来要确认的序列号，即当前最小的未确认序列号；有时也称为发送窗口的左边界。 |
| module | 通常以软件形式实现的协议或其他过程。 |
| `MSL` | Maximum Segment Lifetime，最大报文段生存期，即 TCP 报文段允许在互联网系统中存留的时间；该值人为规定为 2 分钟。 |
| octet | 八位字节，即 8 bit。 |
| Options | 一个选项字段可包含多个选项，每个选项可由多个八位组构成。 |
| packet | 带有首部的数据封装，逻辑上可能完整，也可能不完整；更常指数据的物理封装，而非逻辑封装。 |
| port | 连接标识中用于在端点处对连接进行分用的部分。 |
| process | 正在执行的程序；从 TCP 端点或其他主机到主机协议的角度看，是数据的源或目的地。 |
| `PUSH` | 不占用序列空间的控制位，表示本报文段包含必须推送给接收用户的数据。 |
| `RCV.NXT` | receive next，下一个接收序列号。 |
| `RCV.UP` | receive urgent pointer，接收紧急指针。 |
| `RCV.WND` | receive window，接收窗口。 |
| receive next sequence number | 本地 TCP 端点期望接收的下一个序列号。 |
| receive window | 本地接收 TCP 端点愿意接受的序列号范围。换言之，序列号落在 `RCV.NXT` 到 `RCV.NXT + RCV.WND - 1` 区间内的报文段，本地端点均认为其携带可接受的数据或控制信息；完全落在该范围之外的报文段则被视为重复报文或注入攻击，予以丢弃。 |
| `RST` | 复位控制位，不占用序列空间，表示接收方应删除连接且不再进行进一步交互。接收方可根据入站报文段的序列号与确认字段判断应接受还是忽略该复位；收到携带 `RST` 的报文段绝不会触发以 `RST` 作为响应。 |
| `SEG.ACK` | 报文段确认号。 |
| `SEG.LEN` | 报文段长度。 |
| `SEG.SEQ` | 报文段序列号。 |
| `SEG.UP` | 报文段紧急指针字段。 |
| `SEG.WND` | 报文段窗口字段。 |
| segment | 逻辑数据单元；特别地，TCP 报文段是两个 TCP 模块之间传输的数据单元。 |
| segment acknowledgment | 入站报文段确认字段中的序列号。 |
| segment length | 报文段占用的序列空间大小，包括占用序列空间的控制信息。 |
| segment sequence | 入站报文段序列字段中的数字。 |
| send sequence | 本地发送 TCP 端点将在连接上使用的下一个序列号。其初始值取自初始序列号曲线（ISN），此后每发送一个数据八位组或占用序列号的控制信息即相应递增。 |
| send window | 远端接收 TCP 端点愿意接受的序列号范围，即远端数据接收 TCP 端点报文段中指定的窗口字段值。TCP 实现可发送的新序列号范围为 `SND.NXT` 至 `SND.UNA + SND.WND - 1`；而 `SND.UNA` 至 `SND.NXT` 之间的序列号则可能需要重传。 |
| `SND.NXT` | send sequence，发送序列号。 |
| `SND.UNA` | left sequence，左序列号。 |
| `SND.UP` | send urgent pointer，发送紧急指针。 |
| `SND.WL1` | 上次窗口更新时的报文段序列号。 |
| `SND.WL2` | 上次窗口更新时的报文段确认号。 |
| `SND.WND` | send window，发送窗口。 |
| socket（也称 socket number、socket address 或 socket identifier） | 显式包含端口标识的地址，即 Internet Address 与 TCP 端口拼接而成的地址。 |
| Source Address | 发送端点的网络层地址。 |
| `SYN` | 入站报文段中的控制位，占用一个序列号，用于在发起连接时指示序列号的起始位置。 |
| `TCB` | Transmission Control Block，传输控制块；记录连接状态的数据结构。 |
| `TCP` | Transmission Control Protocol，传输控制协议；用于互联网环境中可靠通信的主机到主机协议。 |
| `TOS` | Type of Service，服务类型；已废弃的 IPv4 字段。该首部比特位目前用作区分服务（Differentiated Services）字段，其中包含 DSCP 值和 2 位 ECN 码点。 |
| Type of Service | 参见 `TOS`。 |
| `URG` | 紧急控制位，不占用序列空间；用于表示只要尚有序列号小于紧急指针值的数据等待读取，就应通知接收用户进行紧急处理。 |
| urgent pointer | 仅在 `URG` 位置位时才有意义的控制字段。该字段携带紧急指针值，指向与发送用户紧急调用相关联的数据八位组。 |
