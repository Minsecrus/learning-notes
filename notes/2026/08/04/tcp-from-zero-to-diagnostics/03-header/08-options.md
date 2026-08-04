# 第14章 TCP Options

TCP 固定首部只有 20 字节，Options 为连接补充扩展能力。握手双方会在有限空间内声明接收能力和协商参数；连接建立后，部分选项还会持续携带测量或乱序信息。

## 选项区域怎样编码

Data Offset 决定整个 TCP 首部长度。固定部分占 20 字节，剩余部分就是选项与填充，最多 40 字节。TCP 首部总长度必须对齐到 4 字节。

选项编码分为两类：

- EOL 和 NOP 只占一个字节，其中一个字节就是 Kind；
- 其他选项由 `Kind、Length、Value` 构成，Length 包含 Kind、Length 自身和 Value 的总长度。

| Kind | 名称 | 常见总长度 | 典型出现阶段 |
| ---: | --- | ---: | --- |
| 0 | End of Option List（EOL） | 1 | 结束有效选项，后方为零填充 |
| 1 | No-Operation（NOP） | 1 | 在选项之间填充或对齐 |
| 2 | Maximum Segment Size（MSS） | 4 | SYN |
| 3 | Window Scale（WS） | 3 | SYN |
| 4 | SACK Permitted | 2 | SYN |
| 5 | SACK | $2+8n$ | 建连后的 ACK |
| 8 | Timestamp | 10 | SYN 及协商后的报文 |

NOP 便于让后续多字节字段从期望边界开始，接收端仍会按字节解析任意合法排列。EOL 表示有效选项列表结束；Data Offset 若还留有空间，其余字节为零填充。

第三篇共用数据样本的选项区域正好是 12 字节：

```text
01 01 | 08 0A 01 02 03 04 A0 B0 C0 D0
```

前两个 `01` 是 NOP，`08 0A` 表示 Kind 8、Length 10，后面分别是 4 字节 TSval `0x01020304` 与 4 字节 TSecr `0xA0B0C0D0`。选项共占 12 字节，加上固定首部后得到 32 字节，正好对应样本 Data Offset 8。这也展示了 Timestamp 在建连后的数据报文中持续出现的形式。

### 手工解析一段合法选项字节

下面是一段 20 字节的 SYN 选项示例，竖线只用于阅读：

```text
02 04 05 B4 | 04 02 | 08 0A 12 34 56 78 00 00 00 00 | 01 | 03 03 07
```

按 Kind 与 Length 顺序解析：

1. `02 04 05 B4`：Kind 2、长度 4，MSS 为 `0x05B4 = 1460`；
2. `04 02`：Kind 4、长度 2，允许对端未来向本端发送 SACK 信息；
3. `08 0A` 后跟 8 字节：Timestamp 的 TSval 为 `0x12345678`，初始 SYN 的 TSecr 为 0；
4. `01`：一个 NOP；
5. `03 03 07`：Kind 3、长度 3，Window Scale 位移为 7。

固定首部 20 字节加选项 20 字节，总首部为 40 字节，Data Offset 应为 $40/4=10$。这是一份便于计算的合法排列；实际顺序、NOP 数量和具体取值由协议栈实现决定。

解析未知选项时，Length 让接收端跳到下一项。RFC 9293 要求 TCP 实现接收任意报文段中的选项，并按长度安全跳过已知格式之外的选项；非法长度需要进入错误处理路径。

## MSS：告诉对方单段数据接收上限

MSS 选项包含一个 16 位值，发送它的一方声明自己愿意接收的最大 TCP 数据量。它只出现在带 SYN 的报文段中，并且具有明确方向：

- 客户端 SYN 宣告 `MSS = 1460`，服务端据此限制服务端到客户端方向的数据段；
- 服务端 SYN+ACK 宣告 `MSS = 1200`，客户端据此限制客户端到服务端方向的数据段。

双方数值可以不同。发送 TCP 还会结合本地接口、路径 MTU、拥塞控制、应用数据量和其他实现约束，选择更小的实际报文段数据长度。因此，MSS 是接收能力上限，抓包中的每个 `tcp.len` 可以低于该值。

### MSS 与 MTU 的计算关系

MTU 约束一份网络层数据报在某段链路上的尺寸。MSS 关注 TCP 数据。对常见的 MTU 1500 路径，用固定首部估算：

$$
MSS_{IPv4}=1500-20_{IPv4}-20_{TCP}=1460
$$

$$
MSS_{IPv6}=1500-40_{IPv6}-20_{TCP}=1440
$$

[RFC 6691](https://www.rfc-editor.org/rfc/rfc6691.html) 明确，生成 MSS 选项值时只减固定 IP 与 TCP 首部。某个实际报文还携带 TCP Timestamp 或 IP 选项时，发送方相应减少该报文的数据长度，使整个 IP 数据报适合有效 MTU。隧道、IPv6 扩展首部和路径 MTU 变化也会改变实际分段上限。

抓取发送主机时，TSO/GSO 等卸载功能可能让抓包看到远大于线上 MSS 的大块 TCP 数据。网卡或后续软件层会在发出前完成分段，第 32 章会系统处理这种观察差异。

## Window Scale：扩展 16 位窗口

TCP 固定 Window 字段只有 16 位。Window Scale 选项携带一个位移计数 $s$，连接建立后把该端广告的窗口解释为：

$$
W_{effective}=W_{field}\times2^s
$$

允许的最大位移为 14，对应最高约 1 GiB 的可表示接收窗口。该选项只在 SYN 中发送，每个方向的位移在握手时固定。

协商包含两个要点：

1. 双方都在各自 SYN 中发送 Window Scale，连接才启用窗口缩放；
2. 某端发送的位移，专门用于解释该端未来发出的 Window 字段，因为它公布的是该端接收窗口。

假设握手记录为：

| 报文 | 原始 Window | WS 选项 | 含义 |
| --- | ---: | ---: | --- |
| 客户端 SYN | 64240 | 7 | 客户端未来广告窗口乘 $2^7$ |
| 服务端 SYN+ACK | 65535 | 8 | 服务端未来广告窗口乘 $2^8$ |

SYN 与 SYN+ACK 表中的 Window 保持原始 16 位值。进入已建立状态后，若客户端发送 `Window = 500`，它向服务端公布 $500\times2^7=64000$ 字节；若服务端发送同样的原始值 500，它向客户端公布 $500\times2^8=128000$ 字节。

Wireshark 常同时显示 `Calculated window size`、原始 `Window size value` 和缩放因子。分析中应保留原始值与计算值，尤其要先确认抓包包含握手；从连接中段开始捕获时，分析器可能缺少缩放因子，只能把计算结果标记为未知或推断。

## SACK Permitted 与 SACK Blocks

累计 Ack 只能推进到连续前缀的右边界。SACK 为乱序或多处丢失增加区间信息，让发送方更准确地选择重传数据。

### 第一步：在 SYN 中授予方向性能力

SACK Permitted 长度为 2，只包含 Kind 和 Length。发送该选项的一方声明自己能够接收并处理对端将来发来的 SACK 选项。

举例：客户端准备向服务端发送大量数据。服务端作为数据接收方，希望在发生乱序时把 SACK Blocks 发回客户端；这要求客户端在自己的 SYN 中发送 SACK Permitted。双向连接常由两端都发送该选项，于是两个数据方向都具备 SACK 反馈能力。

### 第二步：用半开区间报告数据岛

SACK 选项包含一个或多个 Block，每个 Block 由 32 位 Left Edge 和 32 位 Right Edge 组成，表示已经接收的连续区间：

$$
[LeftEdge,RightEdge)
$$

假设累计 `Ack = 1001`，接收方已额外收到 $[2001,3001)$ 与 $[4001,4501)$：

```text
累计连续前缀： ... 1001
缺口：          [1001,2001)
SACK Block 1：  [2001,3001)
缺口：          [3001,4001)
SACK Block 2：  [4001,4501)
```

累计 Ack 仍为 1001；SACK Blocks 告知发送方两块后续数据已经位于接收队列。两个 Block 的选项总长度为 $2+8\times2=18$ 字节。TCP 选项区最多 40 字节，单独使用 SACK 时理论上最多容纳 4 个 Block；Timestamp 及对齐常占 12 字节，此时常见上限为 3 个 Block。

SACK 信息具有建议性质。发送方可以据此优先重传缺口，同时保留已发送数据，直到累计 Ack 真正越过相应范围。这样既提升多处丢失时的恢复效率，也保留累计确认作为释放重传缓存的稳定依据。

## Timestamp：RTT 测量与旧重复报文防护

Timestamp 选项固定 10 字节：

```text
+--------+--------+------------------+------------------+
| Kind=8 | Len=10 | TSval，32 位     | TSecr，32 位     |
+--------+--------+------------------+------------------+
```

- **TSval** 是发送端的时间戳时钟值，通常与时间单调相关，也可带每连接随机偏移；
- **TSecr** 回显此前从对端收到的相关 TSval，ACK 标志存在时该字段有效。

初始 SYN 未设置 ACK，发送端按规范应将 TSecr 置 0，接收端也不会解释该值。服务端若接受 Timestamp，会在 SYN+ACK 中发送自己的 TSval，并在 TSecr 中回显客户端值；客户端第三次握手 ACK 再回显服务端 TSval。成功协商后，除 RST 等规范例外，后续报文持续携带 Timestamp。

Timestamp 有两个核心用途：

1. **RTTM**：发送方用 TSval 与返回的 TSecr 取得更丰富的往返时间样本，帮助维护重传超时估计；
2. **PAWS**：接收方利用同一连接中时间戳总体单调推进的性质识别旧重复报文，特别适合高速、大窗口连接中序列号较快回绕的情况。

TSval 的单位由实现选择，数值适合做相对变化和回显匹配。Wireshark 展示的 `Time since first frame` 属于抓包时间轴，TSval 属于端点 TCP 自己携带的时钟，两者应分栏记录。

## 四类选项的方向性总结

| 选项 | 发送方在表达什么 | 接收方怎样使用 |
| --- | --- | --- |
| MSS | 我最多愿意接收这么多 TCP 数据 | 限制发往该端的段数据长度 |
| Window Scale | 我未来的 Window 字段按这个位移解释 | 解码该端后续广告的接收窗口 |
| SACK Permitted | 我能处理你将来发给我的 SACK | 数据接收方可向该端报告数据岛 |
| Timestamp | 这是我的时钟值，并回显你的相关值 | 采集 RTT 样本并支持 PAWS |

一句实用读法是：先问“谁发出了这个选项”，再问“它约束哪个数据方向”。握手中的客户端 SYN 与服务端 SYN+ACK 必须分别展开，复制一端数值到另一方向会造成 MSS 和窗口计算颠倒。

## 受控实验：对比 SYN 与 SYN+ACK

在 Npcap Loopback Adapter 开始抓包。终端 A 启动本地 HTTP 服务：

```powershell
python -m http.server 39014 --bind 127.0.0.1
```

终端 B 建立一次 HTTP/1.1 连接：

```powershell
curl.exe --http1.1 http://127.0.0.1:39014/ -o NUL
```

停止服务和抓包后，先筛选握手：

```text
tcp.port == 39014 && tcp.flags.syn == 1
```

分别展开客户端 SYN 与服务端 SYN+ACK 的 `Options`，填写下表：

| 方向 | Data Offset | MSS | WS shift | SACK Permitted | TSval | TSecr |
| --- | ---: | ---: | ---: | --- | ---: | ---: |
| 客户端 → 服务端 |  |  |  |  |  |  |
| 服务端 → 客户端 |  |  |  |  |  |  |

接着执行四项核对：

1. 用 Data Offset 计算选项总长度，和 Wireshark 展开的各选项及填充相加结果比较；
2. 交换视角解释 MSS：客户端值约束服务端发送，服务端值约束客户端发送；
3. 若双方均携带 WS，任选建连后的两个 ACK，用各自方向的位移计算有效窗口；
4. 若双方均携带 Timestamp，检查 SYN+ACK 的 TSecr 与客户端 SYN 的 TSval，再检查第三次握手 ACK 的回显。

普通回环连接通常稳定传输，所以实验常见 SACK Permitted，真正的 SACK Blocks 出现频率很低。先用本章的区间例题掌握解码；第 21 章会在受控乱序或丢失环境中观察 Block 随缺口变化。

本机回环接口可能给出接近 64 KiB 的 MSS，选项顺序也可能与示例不同。这些数值反映本机接口与协议栈。实验的稳定目标是解析结构、确认方向、完成窗口计算和时间戳回显匹配。

## 理解检查

1. 客户端 SYN 宣告 MSS 1460，服务端 SYN+ACK 宣告 MSS 1200。客户端向服务端发送数据时主要受哪个宣告值约束？
2. 客户端宣告 WS shift 为 7。建连后客户端发出的原始 Window 为 2000，有效窗口是多少？
3. 累计 `Ack = 5001`，同时出现 `SACK [6001,7001)`。接收方当前缺少的最前方范围是什么？
4. 一个 SACK 选项 Length 为 26，它包含几个 Block？
5. Data Offset 为 11 时，TCP 选项与填充总共占多少字节？
6. MTU 为 1500、IPv4 与 TCP 固定首部各 20 字节时，MSS 选项的典型值是多少？实际数据报又携带 12 字节 TCP 选项时，发送方如何保持 IP 数据报适合该 MTU？

<details>
<summary>参考答案</summary>

1. 服务端宣告的 1200，它描述服务端的接收上限。
2. $2000\times2^7=256000$ 字节。
3. $[5001,6001)$。
4. $(26-2)/8=3$ 个 Block。
5. 总首部为 $11\times4=44$ 字节，选项与填充占 $44-20=24$ 字节。
6. 典型 MSS 为 $1500-20-20=1460$。MSS 值按固定首部计算；携带 12 字节选项的具体报文相应减少 TCP 数据，使总 IP 长度保持在 1500 以内。

</details>

## 本章小结

- Kind 与 Length 支持逐项解析，Data Offset 给出选项和填充的总边界。
- MSS 限制发往声明方的 TCP 数据长度；MTU 同时约束 IP 数据报尺寸。
- Window Scale 需要双方握手声明，每端位移解释该端后续发出的 Window 字段。
- SACK Permitted 在 SYN 中授予接收 SACK 的能力，SACK Blocks 用半开区间报告连续前缀之外的数据岛。
- Timestamp 的 TSval/TSecr 支持 RTTM 与 PAWS，端点时钟和抓包时间轴属于两套观察值。
- 握手选项具有方向性，分析时分别记录客户端 SYN 与服务端 SYN+ACK。

## 规范依据

- [RFC 9293：Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html)，定义通用选项格式、EOL、NOP 与 MSS。
- [RFC 6691：TCP Options and Maximum Segment Size (MSS)](https://www.rfc-editor.org/rfc/rfc6691.html)，澄清 MSS 与 IP/TCP 选项长度的计算关系。
- [RFC 7323：TCP Extensions for High Performance](https://www.rfc-editor.org/rfc/rfc7323.html)，定义 Window Scale、Timestamp、RTTM 与 PAWS。
- [RFC 2018：TCP Selective Acknowledgment Options](https://www.rfc-editor.org/rfc/rfc2018.html)，定义 SACK Permitted 与 SACK Blocks。

---

[上一章：第13章 固定字段](./07-fixed-fields.md) · [所属篇：第三篇](../03-header.md) · [下一章：第15章 三次握手](../04-lifecycle/01-three-way-handshake.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
