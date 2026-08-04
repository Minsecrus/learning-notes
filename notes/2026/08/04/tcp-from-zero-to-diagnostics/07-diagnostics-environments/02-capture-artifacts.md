# 第32章 常见抓包假象

抓包文件记录的是“捕获机制在某个位置看到的数据”。发送端协议栈、网卡驱动、物理链路、接收端网卡和接收端协议栈处于不同处理阶段，同一批应用字节在这些位置可能呈现出不同的分段、校验和与时间关系。Wireshark 还会根据当前文件中的上下文生成重传、乱序和丢段等分析标记。

理解这些边界，可以避免把本机优化行为、捕获缺口或显示设置直接归因于网络故障。

## 一、先画出观察位置

```text
发送应用
   ↓
发送端 TCP/IP 栈
   ↓  抓包点 A：可能仍是大块数据，校验和可能待网卡填写
网卡分段、校验和计算
   ↓
──────────── 物理或虚拟网络 ────────────  抓包点 B
   ↓
接收网卡校验、合并
   ↓  抓包点 C：可能已经合并多个线上报文段
接收端 TCP/IP 栈
   ↓
接收应用
```

实际捕获钩子因操作系统、驱动、虚拟交换机和工具而变化。报告里应写“客户端物理网卡上的 Npcap 捕获”这类具体描述，并把钩子精确位置保留为实现信息。

分析时可以把三个对象分别命名为“捕获记录”“线上报文”“应用字节流”。捕获记录拥有文件时间戳、捕获长度和分析器字段；线上报文拥有真实链路分段与校验和；应用字节流只关心有序字节内容。一个捕获记录可能对应待切分的大块发送数据，也可能对应接收合并后的多个线上报文。明确对象名称后，诸如“这个包有 32 KiB”之类的描述就能带上准确层次。

## 二、Checksum Offload：本机显示校验和异常

发送方可把 TCP 校验和计算交给网卡。主机抓包程序若在网卡完成计算前复制报文，文件中会保存尚待填写的值。Wireshark 4.2 及更高版本能够识别常见的伪首部部分校验和，并标记 `Partial checksum`；其他待填充值或较早版本可能显示 `TCP checksum incorrect`。线上帧经过网卡后已经带有最终校验和，接收方也能正常确认数据。

判断时可以依次检查：

1. 异常是否集中在本机发出的方向；
2. 对端是否持续返回正常 ACK；
3. 接收端抓包中的同一 Seq 范围是否校验正确；
4. 网卡是否启用了 TCP/IPv4 或 TCP/IPv6 checksum offload；
5. Wireshark 是否提示该结果可能由 offload 引起。

Windows 可以读取相关状态：

```powershell
Get-NetAdapterChecksumOffload -Name "*" |
  Format-Table Name, IpIPv4Enabled, TcpIPv4Enabled, TcpIPv6Enabled
Get-NetAdapterAdvancedProperty -Name "*" |
  Where-Object DisplayName -Match 'Checksum|校验和' |
  Format-Table Name, DisplayName, DisplayValue
```

对端抓包能够直接观察网卡处理后的报文，证据强度通常更高。受控实验中也可以记录关闭某项卸载前后的差异；实验结束后恢复原配置，并记录驱动版本和变更范围。

## 三、TSO、GSO、LSO 与 GRO、LRO、RSC

发送路径可以先把较大的缓冲交给内核或网卡，再由后续阶段切分成符合 MSS 的报文段：

- TSO 是 TCP Segmentation Offload；
- GSO 是较通用的软件分段框架，常见于 Linux；
- LSO 是 Windows 界面中常见的大型发送卸载名称。

因此发送端抓包可能出现 `tcp.len` 为数千甚至数万字节的“超大 TCP 段”。它代表捕获点所见的待分段数据；线上抓包通常会看到多个接近 MSS 的报文段。

接收方向也可能发生合并。GRO、LRO 或 Windows RSC 会把多个到达报文聚合后交给上层，位于合并后的捕获钩子可能只记录一个较大的单元。合并会改变文件中的包数、分段边界和 ACK 可见节奏，同时保持应用接收的字节序列。

Windows 可读取发送分段和接收合并状态：

```powershell
Get-NetAdapterLso -Name "*" | Format-Table Name, IPv4Enabled, IPv6Enabled
Get-NetAdapterRsc -Name "*" | Format-Table Name, IPv4Enabled, IPv6Enabled
```

Linux 常用：

```bash
sudo ethtool -k eth0
```

当发送端出现 32 KiB 大段、接收端出现约 1460 字节分段时，两个文件可以同时准确反映各自捕获位置。跨点匹配应依靠四元组、Seq 范围、载荷和时间关系，包号没有跨文件意义。

## 四、回环接口的特殊表现

客户端与服务端都绑定在本机时，数据会经过回环路径，物理网卡没有承载这些帧。捕获工具可能通过专用回环适配器或系统过滤平台取得数据，并提供合成的链路层信息。分段、校验和和时间戳也可能与物理链路实验不同。

回环抓包很适合学习握手、Seq/Ack、字节流和关闭过程。研究网卡卸载、以太网 MTU、真实单向时延时，应在两台主机或受控虚拟网络间补充实验。

## 五、相对序列号隐藏了原始值

Wireshark 默认常把每个方向的初始序列号平移到 0，便于人工计算。相对 Seq 只改变显示方式，报文中的 32 位原始字段仍保存在文件中。

可以在 `Edit → Preferences → Protocols → TCP` 查看 `Relative sequence numbers`，也可以同时导出两组字段：

```powershell
tshark -r .\case.pcapng -Y "tcp.stream eq 7" -T fields `
  -e frame.number -e tcp.seq -e tcp.seq_raw -e tcp.ack -e tcp.ack_raw -e tcp.len
```

教程和人工时间线通常使用相对值，安全分析、跨文件关联和规范字段核验经常需要原始值。报告应明确当前采用哪一种表示。

## 六、Previous Segment Not Captured 的多种来源

当当前报文的 Seq 高于 Wireshark 根据此前报文计算出的期望值时，工具可能标记 `TCP Previous Segment Not Captured`。这个标记表达“当前文件中存在一个 Seq 缺口”。常见来源包括：

- 报文在到达抓包点前已经丢失；
- 抓包程序或内核捕获缓冲来不及保存全部报文；
- 抓包在连接中途启动，或提前停止；
- 捕获过滤器排除了部分流量；
- 分段卸载、接收合并或多队列交付改变了可见边界和顺序；
- 网络发生短暂乱序，缺口报文稍后出现在文件中；
- snaplen 使关键首部或载荷被截断。

核对对端抓包很有帮助：若发送端记录了某段、接收端和后续累计 ACK 都缺少它，路径丢包假设增强；若接收端完整记录且本端捕获工具报告丢弃，捕获缺口更符合证据。

下列过滤器适合定位分析器线索：

```text
tcp.analysis.lost_segment || tcp.analysis.out_of_order
tcp.analysis.retransmission || tcp.analysis.spurious_retransmission
tcp.analysis.duplicate_ack || tcp.option_kind == 5
```

## 七、抓包丢失与 snaplen 截断

高包速、小包密集、磁盘写入慢、CPU繁忙或捕获缓冲较小时，抓包程序可能丢弃报文。Wireshark 的 `Statistics → Capture File Properties` 可以显示文件统计；实时捕获结束时也应保存工具报告的 received、dropped 数量。部分旧格式或异常终止的捕获缺少完整统计，此时把丢弃量写成“未知”。

`snaplen` 控制每个包最多保存多少字节。值过小会保留原始帧长度，却只保存前一部分内容。以下过滤器可以寻找这类记录：

```text
frame.cap_len < frame.len
```

截断后的 TCP 载荷无法完整重组，TLS 或应用协议解析也会受影响。需要完整载荷时可使用 `-s 0`，并通过环形文件控制磁盘占用：

```powershell
dumpcap -D
dumpcap -i 1 -s 0 -B 64 -b duration:60 -b files:10 -w .\trace.pcapng
```

捕获过滤器在数据写入文件前缩小范围，显示过滤器只改变界面中展示的包。生产现场应先根据故障范围评估过滤条件，确保 DNS、ICMP、握手或相邻连接等关联证据仍在采集范围内。

## 八、比较不同抓包点

两端抓包比较前，先记录 NTP/PTP 状态和时钟误差。匹配同一数据范围时可以组合使用：四元组、TCP 原始 Seq、长度、TCP Timestamp、载荷摘要和事件顺序。

文件时间戳还受到捕获工具、软件时钟或网卡硬件时间戳能力影响。多队列网卡在高负载下可能让捕获记录的交付顺序出现细小变化。微秒级单向时延结论需要校准过的硬件时间戳；普通软件抓包更适合判断毫秒级阶段、字节顺序和相对事件。报告中记录时间戳分辨率与同步误差，可以防止测量精度超过采集能力。

NAT 可能改写地址与端口；四层转发通常仍保持一条连接的字节序列；七层代理会建立两条独立 TCP 连接，两个方向拥有各自的 Seq 空间、窗口和重传行为。代理日志中的请求 ID 或连接映射适合连接两侧时间线。

Wireshark 的 TCP 首选项也会改变显示结果。相对序列号、序列号分析、重组和 checksum 验证开关会影响派生字段、Expert Info 与上层协议解析。共享分析结果时记录 Wireshark 版本和关键首选项；需要复核时保存原始文件，并在相同设置下重现过滤结果。

| 观察 | 优先核验 | 可形成的结论 |
| --- | --- | --- |
| 仅发送端报 checksum 异常，对端正常 ACK | checksum offload 与接收端抓包 | 本机文件保存了校验和计算前状态 |
| 发送端段长远超 MSS，接收端为 MSS 大小 | LSO/TSO/GSO 与两端 Seq 范围 | 发送路径在捕获点后执行分段 |
| 单点出现 Seq 缺口 | 捕获丢弃、启动时间、对端文件 | 保留路径丢包与捕获缺口两项假设 |
| 文件能看到首部却无法重组载荷 | `frame.cap_len` 与 `frame.len` | snaplen 截断影响解析完整性 |
| 两侧四元组和 Seq 都不同 | 代理配置与连接日志 | 路径中存在连接终止和重新建立 |

## 实验：比较发送端与接收端

1. 在两台主机间传输一个已知哈希的 1 MiB 文件，并同时抓包。
2. 记录两台主机的接口、卸载状态、snaplen、捕获丢弃数和时钟状态。
3. 从 SYN 与 SYN+ACK 记录两个方向的 MSS；例如目标方向 MSS 为 1460 时，筛选 `tcp.len > 1460`，比较两个抓包中的可见分段。
4. 导出原始 Seq、相对 Seq、长度与 checksum 状态，匹配相同字节范围。
5. 对每项差异标注其来源层次：线上传输、捕获位置、主机卸载、文件完整性或分析器推断。

## 理解检查

1. 为什么发送端显示 checksum 异常时，对端 ACK 是重要证据？
2. TSO 与 GRO 分别处于哪个方向，它们怎样改变抓包中的分段？
3. `TCP Previous Segment Not Captured` 能直接确认路径丢包吗？还需哪些证据？
4. 相对序列号适合解决什么问题，原始序列号适合解决什么问题？
5. 两个抓包点之间存在七层代理时，怎样关联两条独立连接？

## 延伸阅读

- [Wireshark Wiki：CaptureSetup Offloading](https://wiki.wireshark.org/CaptureSetup/Offloading)
- [Microsoft Learn：High-performance networking](https://learn.microsoft.com/en-us/windows-server/networking/technologies/hpn/hpn-hardware-only-features)
- [Wireshark TCP 显示过滤字段参考](https://www.wireshark.org/docs/dfref/t/tcp.html)

---

[上一章：第31章 系统化阅读一份 TCP 抓包](./01-systematic-pcap-reading.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第33章 常见故障案例](./03-common-failures.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
