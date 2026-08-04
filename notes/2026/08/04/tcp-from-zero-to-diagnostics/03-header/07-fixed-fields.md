# 第13章 Data Offset、Window、Checksum 和 Urgent Pointer

端口、Seq、Ack 和 Flags 已经勾勒出 TCP 首部的主体。本章补齐四组固定字段：Data Offset 定位数据起点，Window 公布接收序列空间，Checksum 检查传输差错，Urgent Pointer 标记紧急信息边界。

第三篇共用样本中的四组原始值如下：

| 字段 | 原始字节或值 | 当前可直接读出的信息 |
| --- | --- | --- |
| Data Offset | `0x80` 的高 4 位为 8 | TCP 首部为 32 字节 |
| Window | `fa f0`，即 64240 | 原始 16 位窗口值 |
| Checksum | `e7 fd` | 线上字段值为 `0xe7fd` |
| Urgent Pointer | `00 00`，且 URG 为 0 | 当前报文不解释紧急指针 |

后续各节会把这些值从“字段读数”提升为“结合上下文后的连接信息”。

## Data Offset：数据从首部的哪里开始

Data Offset 占 4 位，单位是 32 位字，也就是 4 字节。设字段值为 $D$，TCP 首部长度为：

$$
H_{TCP}=D\times 4\ \text{bytes}
$$

4 位无符号数最大为 15，合法 TCP 首部还需要容纳 20 字节固定部分，所以 $5\le D\le15$：

| Data Offset | TCP 首部长度 | 选项区域长度 |
| ---: | ---: | ---: |
| 5 | 20 字节 | 0 字节 |
| 8 | 32 字节 | 12 字节 |
| 10 | 40 字节 | 20 字节 |
| 15 | 60 字节 | 40 字节 |

在原始字节中，TCP 相对偏移 12 的字节，其高 4 位就是 Data Offset。例如该字节为 `0x80`，高半字节为 8，TCP 数据从 TCP 首部起点后 32 字节开始。

### 从 IP 长度推导 TCP 数据长度

对普通 IPv4 数据报，IP Total Length 包含 IPv4 首部、TCP 首部和 TCP 数据，因此：

$$
L_{data}=L_{IP,total}-H_{IP}-H_{TCP}
$$

共用样本的 `IP Total Length = 62`、IPv4 IHL 为 5、TCP Data Offset 为 8：

$$
H_{IP}=5\times4=20
$$

$$
H_{TCP}=8\times4=32
$$

$$
L_{data}=62-20-32=10\ \text{bytes}
$$

在这个无 VLAN 标签的 Ethernet II 样本中，TCP 数据起点相对帧开头的偏移是 $14+20+32=66$ 字节，随后正好是 10 字节 `HELLO TCP\n`。抓包点若使用 Linux cooked capture、回环接口、VLAN 或隧道，链路层头部长度会变化；IP 与 TCP 层内的计算仍按各自字段完成。

IPv6 的基础首部为 40 字节，扩展首部会增加 TCP 之前的网络层长度。Wireshark 的 `tcp.hdr_len` 与 `tcp.len` 已完成协议层解析，手算时仍应逐层识别扩展首部。

## Window：接收方愿意开放多少序列空间

Window 是 16 位无符号字段，由报文发送方公布自己的接收能力。在 ACK 有效的已同步报文中，它以当前 Ack 为左边界，表示接收 TCP 此刻愿意接受的后续序列空间。SYN 携带初始的未缩放 Window 值；下面的区间公式用于 ACK 已经生效的报文。未启用窗口缩放时，最大字段值为 65535。

设报文携带 `Ack = A`，原始窗口字段为 $W$，该方向协商的 Window Scale 位移为 $s$。连接建立后的有效窗口为：

$$
W_{effective}=W\times2^s
$$

接收窗口的半开区间可写成：

$$
[A,\ A+W_{effective})
$$

例如服务端发送：

```text
Ack = 5001
Window field = 4096
Window scale shift = 4
```

则有效窗口为：

$$
4096\times2^4=65536\ \text{bytes}
$$

右边界为 $5001+65536=70537$，服务端当前公布的接收区间是 $[5001,70537)$。所有序列号运算最终都位于模 $2^{32}$ 的空间内；接近回绕位置时，内核使用专门的模比较规则。

Window Scale 选项具有方向性。服务端 SYN 中声明的位移，用于解释服务端后来发出的 Window 字段；客户端声明的位移则作用于客户端后续广告。SYN 和 SYN+ACK 自身的 Window 字段保持原始 16 位数值，缩放从握手后的报文开始应用。第 14 章会完整展开协商过程。

Window 反映接收 TCP 愿意开放的序列空间，接收缓冲区占用和应用读取速度会推动它变化。拥塞窗口 `cwnd` 属于发送方对网络容量的估计，通常只保存在主机内部。实际可发送量同时受 `rwnd`、`cwnd`、已在途数据、发送缓冲区和应用供数影响。

窗口值为零时，接收方暂时关闭新数据空间，连接状态仍然存在。发送方随后使用 Persist 机制和 Zero Window Probe 观察窗口恢复，第 22 章会继续推导这一过程。

## Checksum：覆盖端点、首部和数据的差错检查

TCP Checksum 占 16 位。发送方必须生成，接收方必须检查。计算输入由三部分组成：

1. IP 伪首部；
2. 完整 TCP 首部，计算时先把 Checksum 字段视为零；
3. TCP 数据，奇数字节长度时在计算末尾补一个零字节，该填充字节只参与计算。

IPv4 伪首部包含源 IPv4 地址、目标 IPv4 地址、零字节、协议号 6 和 TCP 长度。IPv6 伪首部包含 128 位源/目标地址、TCP 首部与数据的总长度、保留零位，以及表示上层协议 TCP 的 Next Header 值 6；IPv6 基本首部与 TCP 之间存在扩展首部时，伪首部里的这个值仍为 6。计算程序从 IP 字段临时拼出伪首部；Packet Bytes 中的源、目标地址位于 IP 首部，TCP 区域仍从 Source Port 开始。伪首部让校验覆盖通信端点与上层协议类型，从而帮助发现地址、协议或长度相关的误投递差错。

算法使用 16 位反码加法：把输入按 16 位字相加，将最高位进位回卷到低 16 位，最后对结果逐位取反。用三个示例字演示折叠：

$$
0x1234+0xF000+0x0F00=0x11134
$$

把高位进位 1 加回低 16 位：

$$
0x1134+1=0x1135
$$

取反后得到 `0xEECA`。真实 TCP 报文还会加入伪首部、全部选项和数据。接收端把收到的校验和一同求和，正确结果通常表现为全 1，即 `0xFFFF`。

Checksum 擅长发现传输中的偶发比特错误。主动攻击者可以修改数据后重新计算同类校验和，身份认证与对抗篡改由 TLS、IPsec、TCP-AO 等安全机制承担。

## Checksum Offload 带来的抓包现象

现代网卡常执行发送校验和卸载。操作系统把待发送报文交给抓包驱动时，网卡可能尚未填写最终 Checksum；随后网卡在真正发线上之前完成计算。因此，发送主机上的抓包可能显示 `Checksum incorrect`、`unverified` 或一个尚待填充的值，而接收主机看到的线上报文校验正常。

接收方向也可能经过硬件校验、合并与驱动元数据传递。抓包软件是否验证校验和、捕获接口类型以及虚拟化路径都会改变显示。一次红色标记只是一条观察线索，稳定判断还会结合：

- 网卡卸载状态；
- 报文方向；
- 接收端或路径中另一抓包点；
- 是否存在真实重传、应用损坏或接收端丢弃；
- Wireshark 的校验和验证设置。

PowerShell 可以只读查看本机适配器的卸载配置：

```powershell
Get-Command Get-NetAdapterChecksumOffload
Get-NetAdapterChecksumOffload | Format-Table -AutoSize
```

命令可用性随 Windows 版本、驱动和权限而变。实验记录应保存适配器名称、抓包方向与命令输出。

## Urgent Pointer：紧急区间的终点

Urgent Pointer 占 16 位，只有 URG 标志为 1 时才解释。RFC 9293 将它定义为相对当前 Segment Seq 的正偏移，得到紧急数据之后第一个字节的序列号：

$$
UP_{absolute}=Seq+UrgentPointer\pmod {2^{32}}
$$

例如 `Seq = 10000, Urgent Pointer = 5, URG = 1`，绝对指针为 10005。当前连续紧急区间的终点位于 10005，序列号小于 10005 的相应待消费字节处于 urgent 范围。

Urgent Pointer 为零且 URG 为零时，该字段只是首部中的固定占位。历史协议与系统 Socket API 对 urgent data、`MSG_OOB` 和边界位置形成过不同解释，新应用通常选择应用层控制消息来获得跨平台一致行为。分析旧协议时，需要同时记录 RFC 语义、操作系统 API 和应用的实际读取方式。

## 受控实验：逐字段核对一个数据报文

复用第 11 章端口 39011 的抓包，选择一个 `tcp.len > 0` 的报文。展开 IPv4 或 IPv6 与 TCP 树，并记录：

| 观察项 | Wireshark 常见字段 | 手工核对 |
| --- | --- | --- |
| IP 长度 | `ip.len`、`ip.hdr_len` 或 IPv6 Payload Length | 得到 TCP 首部加数据的总长度 |
| TCP 首部 | `tcp.hdr_len` | Data Offset 乘 4 |
| TCP 数据 | `tcp.len` | IP 层长度减网络层相关首部与 TCP 首部 |
| 原始窗口 | `tcp.window_size_value` | 读取 16 位 Window 字段 |
| 计算窗口 | `tcp.window_size` | 原始值乘该方向缩放因子 |
| 校验和 | `tcp.checksum`、`tcp.checksum.status` | 结合方向与卸载状态解释 |
| 紧急指针 | `tcp.urgent_pointer` | 仅在 URG 为 1 时计算绝对位置 |

随后在 Packet Bytes 中定位 TCP 起点：先核对源端口和目标端口，再向后数 12 字节，读取该字节高 4 位。由 Data Offset 算出数据起点，并检查高亮的 TCP Payload 是否从同一位置开始。

若有另一台受控虚拟机，可以在发送端与接收端同时抓取同一四元组。以 Seq、Ack、TCP Len 和时间关联报文，比较两侧 Checksum 状态。发送侧显示待卸载值、接收侧显示有效值，是常见预期；实际结果由虚拟网卡和捕获位置决定。

## 理解检查

1. 一个 IPv4 数据报 `Total Length = 100`，IPv4 首部为 24 字节，TCP Data Offset 为 10。TCP 数据长度是多少？
2. Window 原始值为 3000，该方向 Window Scale 为 7。有效窗口是多少？
3. 报文为 `Ack = 10001, Window = 32768`，Window Scale shift 为 0。它公布的接收半开区间是什么？
4. `Seq = 50000, Urgent Pointer = 12, URG = 1` 时，紧急区间终点在哪里？
5. TCP Checksum 可以支持哪类结论？业务身份与内容防篡改还需要什么机制？

<details>
<summary>参考答案</summary>

1. TCP 首部为 $10\times4=40$ 字节，数据长度为 $100-24-40=36$ 字节。
2. $3000\times2^7=384000$ 字节。
3. 有效窗口为 32768，区间是 $[10001,42769)$。
4. $50000+12=50012$。
5. 它支持传输差错检查；身份认证和主动篡改防护由 TLS、IPsec、TCP-AO 等安全机制提供。

</details>

## 本章小结

- Data Offset 乘 4 得到 TCP 首部字节数，IP 层长度再减 TCP 首部即可得到 TCP 数据长度。
- Window 从 Ack 指向的左边界开始，结合该方向 Window Scale 得到有效接收区间。
- Checksum 覆盖 IP 伪首部、完整 TCP 首部和数据，硬件卸载会影响发送主机上的抓包显示。
- Checksum 用于传输差错检查，TLS、IPsec 和 TCP-AO 提供安全层面的身份与完整性保护。
- URG 为 1 时，Urgent Pointer 给出紧急区间终点相对 Seq 的偏移。

## 规范依据

- [RFC 9293：Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html)，定义 Data Offset、Window、Checksum、IP 伪首部和 Urgent Pointer。
- [RFC 8200：Internet Protocol, Version 6 (IPv6) Specification](https://www.rfc-editor.org/rfc/rfc8200.html#section-8.1)，定义 IPv6 上层协议校验和使用的伪首部。
- [RFC 7323：TCP Extensions for High Performance](https://www.rfc-editor.org/rfc/rfc7323.html)，定义 Window Scale 与高性能扩展的窗口解释。

---

[上一章：第12章 TCP 标志位](./06-flags.md) · [所属篇：第三篇](../03-header.md) · [下一章：第14章 TCP Options](./08-options.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
