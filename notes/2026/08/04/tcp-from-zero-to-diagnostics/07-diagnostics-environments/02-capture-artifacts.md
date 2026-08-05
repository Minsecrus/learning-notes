# 第32章 常见抓包假象

抓包文件记录的是“捕获机制在某个位置看到的数据”。发送端协议栈、网卡驱动、物理链路、接收端网卡和接收端协议栈处于不同处理阶段，同一批应用层数据在不同阶段，其分片大小（Segment Size）、校验和（Checksum）以及时间戳往往各不相同。Wireshark 还会根据当前文件中的上下文，推断并生成重传、乱序和丢包等分析标记。

理解这些抓包工具的边界，可以避免我们在排查时，误将网卡的硬件优化、抓包工具的漏抓，或是软件的显示设置，直接当成真正的网络故障。

## 一、明确抓包所在的“观察位置”

```text
发送应用
   ↓
发送端 TCP/IP 栈
   ↓  抓包点 A：可能仍是尚未切分的大块数据，校验和可能待网卡填写
网卡分段、校验和计算
   ↓
──────────── 物理或虚拟网络 ────────────  抓包点 B
   ↓
接收网卡校验、合并
   ↓  抓包点 C：可能已经将多个线上小包合并成了一个大块
接收端 TCP/IP 栈
   ↓
接收应用
```

抓包工具真正介入的“钩子”（Hook）位置，会因操作系统、网卡驱动、虚拟交换机和抓包工具的不同而有所差异。在撰写排查报告时，应明确写出类似“客户端物理网卡上的 Npcap 捕获”这类具体描述，将*抓包点（Capture Point）*的精确位置作为诊断时的重要上下文。

::: details 抓包点是什么？
抓包点是报文被复制并记录时所在的主机、接口、方向和协议栈阶段。发送端网卡前、物理链路、接收端网卡后或代理两侧看到的内容都可能不同。

它决定抓包能证明什么：同一字节流的四元组、分段、校验和、时间和加密边界都可能随观察位置变化。
:::

在分析时，我们可以将数据分为三种视角：“抓包记录”、“线上报文”（Wire Packet）和“应用字节流”。
- **抓包记录**包含的是文件中的时间戳、捕获长度以及 Wireshark 解析出的字段；
- **线上报文**是真正在物理链路上传输的、带有真实物理分段和校验和的报文；
- **应用字节流**则只关心最终按序到达的应用层内容。

因此，一条抓包记录，可能对应着发送端尚未被网卡切分的一大块数据，也可能对应着接收端网卡合并后的多个报文段（Segment）。厘清这些概念后，当我们说出“这个包有 32 KiB”时，就能清楚它究竟处于哪一层抽象。

## 二、Checksum Offload：本机显示校验和异常

在现代操作系统中，发送方通常会将 TCP 校验和的计算工作卸载（Offload）给网卡硬件。如果本机的抓包程序在网卡完成计算前就截获了报文，抓包文件中记录的就会是一个“未完成”的校验和。Wireshark 4.2 及更高版本能聪明地识别出这种仅计算了伪首部的校验和，并标记为 `Partial checksum`；而在较旧版本中，你可能会直接看到刺眼的 `TCP checksum incorrect` 报错。但实际上，报文在经过网卡发往物理网络时，已经被填上了正确的校验和，对端完全能正常接收并回复 ACK。

排查这种异常时，可以依次检查：

1. 异常是否只出现在本机发送方向的报文中；
2. 对端是否持续返回了正常的 ACK（说明没被校验和错误丢弃）；
3. 检查接收端的抓包文件，相同的 Sequence Number 范围是否校验完全正常；
4. 确认本机网卡是否开启了 TCP/IPv4 或 TCP/IPv6 的 Checksum Offload 功能；
5. Wireshark 专家信息（Expert Info）中是否提示这可能是由 Offload 引起的。

在 Windows 系统下，可以通过以下命令读取网卡的 Offload 状态：

```powershell
Get-NetAdapterChecksumOffload -Name "*" |
  Format-Table Name, IpIPv4Enabled, TcpIPv4Enabled, TcpIPv6Enabled
Get-NetAdapterAdvancedProperty -Name "*" |
  Where-Object DisplayName -Match 'Checksum|校验和' |
  Format-Table Name, DisplayName, DisplayValue
```

最直接的证明是在对端抓包，这样能看到网卡处理后的真实线上报文，证据强度最高。在受控的测试环境下，你也可以尝试临时关闭网卡的 Offload 功能来对比差异（测试结束后别忘了恢复配置，并记录相关的驱动版本）。

## 三、TSO、GSO、LSO 与 GRO、LRO、RSC

现代网络栈为了降低 CPU 负载，在发送方向，操作系统会将一大块数据直接交给内核底层或网卡，由后续硬件阶段再去将其切分为符合 MSS（最大报文段长度）要求的 TCP Segment：

- **TSO**（TCP Segmentation Offload）：网卡硬件层面的 TCP 分段卸载；
- **GSO**（Generic Segmentation Offload）：Linux 中常见的通用软件分段框架；
- **LSO**（Large Send Offload）：Windows 经常使用的大型发送卸载叫法。

所以，如果在发送端抓包，你经常会看到 `tcp.len` 高达几千甚至几万字节的“超大 TCP 包”。这其实是抓包点截获的尚未被硬件分段的数据；如果你在交换机或接收端抓包，就会看到它们已经变成了多个规规矩矩的 MSS 大小的正常报文段。

同理，在接收方向也存在聚合机制（如 Linux 的 GRO/LRO 或 Windows 的 RSC）。它们会将网络上收到的多个小报文拼成一个大块后再交给上层协议栈。如果在聚合之后的位置抓包，你只会看到一个“庞然大物”。这种硬件合并不仅改变了抓包文件中的包数量和分段边界，还会影响我们观察到的 ACK 节奏，不过应用层接收到的最终字节流依然是完全一致的。

Windows 可读取发送分段和接收合并状态：

```powershell
Get-NetAdapterLso -Name "*" | Format-Table Name, IPv4Enabled, IPv6Enabled
Get-NetAdapterRsc -Name "*" | Format-Table Name, IPv4Enabled, IPv6Enabled
```

Linux 系统常使用 ethtool：

```bash
sudo ethtool -k eth0
```

因此，当发送端看到 32 KiB 的大段，而接收端看到 1460 字节的正常分段时，不要惊讶，它们都在诚实地反映各自抓包点的真实情况。如果需要做两端报文的精准匹配，请依赖五元组、Seq 范围、Payload 内容以及时间戳关系，跨文件的 Frame Number 只代表各自文件内的记录顺序。

## 四、Localhost 回环接口的特殊现象

当客户端和服务端都运行在同一台机器（通信走 127.0.0.1 或 localhost）时，数据会走系统的回环路径（Loopback），根本不会经过物理网卡。此时，抓包工具通常是通过虚拟的环回适配器（如 Npcap Loopback Adapter）或系统过滤平台来捕获数据的，它所展示的 MAC 地址等链路层信息通常是伪造的合成数据。在这里观察到的分段大小、校验和状态、甚至时间戳，都可能与真实的物理网络大相径庭。

回环抓包非常适合用来学习 TCP 三次握手、Seq/Ack 机制以及连接关闭等协议逻辑。但如果你想要研究网卡 Offload 行为、以太网 MTU 限制或者真实的单向网络延迟，请务必在两台物理机或受控的虚拟机网络之间进行实验。

## 五、相对序列号（Relative Seq）与原始值

为了方便人类阅读和计算，Wireshark 默认会将 TCP 连接两个方向的初始序列号（ISN）都平移映射为 0，这就是**相对序列号（Relative Sequence Number）**。这仅仅是界面的显示魔法，底层报文中保存的真实的 32 位原始字段丝毫未变。

你可以在 `Edit → Preferences → Protocols → TCP` 中勾选或取消 `Relative sequence numbers`。在使用命令行工具 `tshark` 时，也可以把这两组字段同时拉出来对比：

```powershell
tshark -r .\case.pcapng -Y "tcp.stream eq 7" -T fields `
  -e frame.number -e tcp.seq -e tcp.seq_raw -e tcp.ack -e tcp.ack_raw -e tcp.len
```

在撰写教程或梳理时间线时，相对 Seq 显然更易读；但在进行安全分析、两端抓包文件精准关联或协议规范核查时，必须使用原始 Seq。在编写排查报告时，务必注明图表中使用的是哪一种表示法。

## 六、解析“Previous Segment Not Captured”的成因

如果在抓包列表中突然冒出一个 `TCP Previous Segment Not Captured` 的警告，意味着 Wireshark 发现当前收到的 TCP Seq 号，比它期望收到的 Seq 号要大。它在告诉你：“在当前的抓包文件中，出现了一段 Seq 的断层（Gap）”。但这不一定代表网络真的丢包了，常见的成因有很多：

- **真正的网络丢包**：报文在到达当前抓包点之前就已经在网络中丢失了；
- **抓包性能瓶颈**：抓包程序或内核抓包缓冲被打满，来不及保存全部报文导致漏抓（Packet Drop）；
- **抓包时机不对**：在连接建立中途甚至传了一半数据时才开始抓包，或者提前停止了抓包；
- **捕获过滤器误伤**：捕获过滤器排除了部分属于该连接的流量；
- **网卡硬件干预**：分段卸载、接收合并或多队列交付改变了报文的可见边界和顺序；
- **网络短暂乱序**：网络发生极短暂乱序，那个缺失的报文其实紧跟在后面几行；
- **抓包截断**：设置了过小的 `snaplen`，导致关键首部被截断，Wireshark 无法正确解析。

此时，双端抓包是破局的关键。如果发送端抓到了这个包，但接收端没抓到，且后续的累积 ACK 都缺少它，那基本可以确认是路径丢包。但如果是接收端完好地收到了这个包，只有你本端的抓包文件里没有，那大概率是你的抓包工具漏抓了。

你可以使用以下显示过滤器来快速定位这些线索：

```text
tcp.analysis.lost_segment || tcp.analysis.out_of_order
tcp.analysis.retransmission || tcp.analysis.spurious_retransmission
tcp.analysis.duplicate_ack || tcp.option_kind == 5
```

## 七、抓包丢失与 snaplen 截断

在应对高包速（PPS）、小包密集、磁盘写入慢或 CPU 繁忙等场景时，抓包程序或系统内核的缓冲区很容易溢出，进而丢弃报文。在 Wireshark 的 `Statistics → Capture File Properties` 中，你能查看到当前文件的丢包统计。实时捕获结束时，也务必保存命令行工具报告的 received、dropped 数量。如果因为使用的是旧格式或异常终止导致缺少完整统计，在报告中应严谨地标明丢包数为“未知”。

`snaplen`（抓包快照长度）控制每个包最多保存多少个字节。如果设置得太小，抓包文件中会保留该包原本的帧长度，但实际保存的数据内容是被截断的。可以用这个过滤器找出这类被截断的包：

```text
frame.cap_len < frame.len
```

一旦数据包被截断，完整的 TCP 载荷将无法重组，TLS 或应用层协议的解析也会完全瘫痪。如果你需要分析完整的 Payload，抓包时请务必使用 `-s 0`（捕获完整包），并结合环形文件（Ring Buffer）功能来控制磁盘占用：

```powershell
dumpcap -D
dumpcap -i 1 -s 0 -B 64 -b duration:60 -b files:10 -w .\trace.pcapng
```

**注意区分过滤器：**捕获过滤器（Capture Filter）是在数据写入文件前缩小采集范围，而显示过滤器（Display Filter）只改变界面中展示的包。在生产现场排查时，应先根据故障范围谨慎评估捕获过滤条件，确保不会误将 DNS、ICMP 报错、握手包或相邻连接等重要的外围线索过滤掉。

## 八、双端抓包对比方法论

在进行两端抓包对比之前，第一件事永远是记录 NTP/PTP 时钟同步状态并明确时钟误差。在海量报文中想要精准匹配出同一个包，你可以综合利用这些维度：四元组、TCP 原始 Seq 号、包长、TCP Timestamp、载荷摘要和事件顺序。

抓包文件中的时间戳并不完美，它受制于软件时钟精度、抓包工具延迟，甚至网卡多队列机制（高负载下可能让记录的交付顺序出现微小错乱）。微秒级的单向时延结论必须依赖校准过的硬件时间戳；普通的软件抓包，只能用来定性判断毫秒级的交互阶段、字节到达顺序和相对事件。报告中务必记录时间戳分辨率与同步误差，切忌让测量结论的精度超越了工具的采集能力。

网络链路中的中间设备也会改变所见的内容。NAT 会改写 IP 与端口；四层转发通常仍保持一条连接的字节序列；而七层代理会截断 TCP，建立两条独立的 TCP 连接，两端的 Seq 空间、窗口和重传行为将各走各的路。对于七层代理，你需要结合代理日志中的请求 ID 或连接映射，才能将连接两侧的时间线串联起来。

Wireshark 的 TCP 首选项设置也是个巨大的变量。是否勾选相对序列号、序列号分析、重组以及 checksum 验证，会直接影响派生字段、专家信息与上层协议解析。在共享分析结果时，最好带上你使用的 Wireshark 版本和关键首选项设置；需要复核时，直接提供原始文件，并在相同的设置下重现过滤结果。

| 观察到的现象 | 优先核查项 | 能够得出的结论或假设 |
| --- | --- | --- |
| 仅本机发出方向报 Checksum 异常，对端正常回复 ACK | 检查本机网卡 Checksum Offload，对比对端抓包 | 本机抓包截获的是校验和计算前的数据 |
| 发送端包长远超 MSS（如几万字节），接收端为正常 MSS | 检查 LSO/TSO/GSO，对比两端 Seq 范围 | 操作系统将大块数据交由底层硬件或网卡分段 |
| 单侧抓包出现 Seq 断层（Gap） | 检查丢包统计、抓包启动时机、对比对端抓包 | 可能是真实的路径丢包，也可能是抓包工具漏抓 |
| Wireshark 能解析出首部，但无法重组 Payload | 检查 `frame.cap_len` 与 `frame.len` | 被 `snaplen` 截断，影响了载荷的完整性和应用层解析 |
| 两端抓到的四元组和 Seq 完全不同 | 检查链路中是否存在七层代理配置或日志 | 链路中间被七层代理截断，建立了独立的 TCP 连接 |

## 实验：比较发送端与接收端

1. 在两台主机间传输一个已知哈希的 1 MiB 文件，并同时开启抓包。
2. 记录两台主机的网络接口信息、Offload 状态、snaplen 设置、抓包丢弃数和系统时钟状态。
3. 从三次握手的 SYN 与 SYN+ACK 报文中记录两端的协商 MSS 值；例如，去往目标方向的 MSS 为 1460，筛选 `tcp.len > 1460`，对比两端抓包中看到的分段差异。
4. 导出原始 Seq、相对 Seq、包长与 Checksum 状态，精准匹配相同的字节流范围。
5. 对抓包文件中出现的每一项差异，标注其产生的根因：是真实的线上传输变化、抓包钩子位置差异、主机网卡 Offload，还是 Wireshark 分析器的推断。

## 理解检查

1. 为什么当发送端抓包显示 Checksum 异常时，对端是否回复了 ACK 是一项极其重要的证据？
2. TSO 与 GRO 分别作用于网络栈的哪个方向？它们如何改变抓包文件中呈现的分段大小？
3. `TCP Previous Segment Not Captured` 报错能直接证明网络发生了丢包吗？还需要哪些辅助证据？
4. 相对序列号和原始序列号在实际排查中各适合解决什么场景的问题？
5. 当客户端和服务端之间存在一个七层代理时，应该如何把前段和后段的两条独立 TCP 连接关联起来？

## 延伸阅读

- [Wireshark Wiki：CaptureSetup Offloading](https://wiki.wireshark.org/CaptureSetup/Offloading)
- [Microsoft Learn：High-performance networking](https://learn.microsoft.com/en-us/windows-server/networking/technologies/hpn/hpn-hardware-only-features)
- [Wireshark TCP 显示过滤字段参考](https://www.wireshark.org/docs/dfref/t/tcp.html)

---

[上一章：第31章 系统化阅读一份 TCP 抓包](./01-systematic-pcap-reading.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第33章 常见故障案例](./03-common-failures.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
