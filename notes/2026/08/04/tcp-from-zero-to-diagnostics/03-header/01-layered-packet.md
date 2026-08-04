# 第7章 网络包的分层结构

Wireshark 选中一条记录后，Packet Details 窗格常常展开几十个字段：MAC 地址、IP 地址、TTL、端口、Seq、Ack、窗口、时间戳和应用数据都会同时出现。阅读抓包的第一项能力，是给每个字段找到所属层次，再沿封装顺序定位它在原始字节中的位置。

## 从一个可观察的问题开始

先看本篇共用的样本帧。客户端 `192.0.2.10:49152` 向服务端 `198.51.100.20:9000` 发送文本 `HELLO TCP\n`：

```text
0000  02 42 ac 11 00 02 02 42 ac 11 00 01 08 00 45 00
0010  00 3e 1c 46 40 00 40 06 32 22 c0 00 02 0a c6 33
0020  64 14 c0 00 23 28 6a 1b 2c 3e 10 20 30 41 80 18
0030  fa f0 e7 fd 00 00 01 01 08 0a 01 02 03 04 a0 b0
0040  c0 d0 48 45 4c 4c 4f 20 54 43 50 0a
```

左侧的 `0000`、`0010` 等数字是十六进制偏移量。`0010` 代表该行首字节位于十进制第 16 个字节位置；每行展示 16 个字节。请先预测：TCP 首部的首字节位于哪里？应用数据的 `48` 又位于哪里？

答案会通过逐层计算自然出现。

## 四个对象嵌套在一起

这条抓包记录可以画成四层容器：

```text
Ethernet Frame，抓包长度 76 字节
└─ IPv4 Datagram，Total Length = 62 字节
   └─ TCP Segment，首部 32 字节，数据 10 字节
      └─ Application Data，"HELLO TCP\n"
```

术语在不同资料中偶尔会宽泛使用。本教程采用下面的精确定义：

| 名称 | 所属层次 | 在样本中的内容 |
| --- | --- | --- |
| Frame（帧） | 链路层 | Ethernet 首部加上整个 IPv4 数据报 |
| Packet / Datagram（包 / 数据报） | 网络层 | IPv4 首部加上 TCP 报文段 |
| Segment（报文段） | 传输层 | TCP 首部加上 TCP Payload |
| Application Message（应用消息） | 应用层 | 示例协议定义的 `HELLO TCP\n` |

封装发生在发送方向：应用交给 Socket 一串字节，TCP 为字节流加入 TCP 首部，IP 再加入 IP 首部，链路层为下一跳传输加入链路层首部。接收端沿相反顺序解析。每一层主要阅读自己首部中的控制信息，并把内部载荷交给上一层。

## 每一层回答一组问题

分层的价值体现在职责划分上。链路层关心这一跳如何交付帧，例如目标 MAC 与链路类型；IP 层关心数据报送往哪台主机以及沿途怎样转发，例如目标 IP、TTL 和分片信息；TCP 层关心哪两个端点正在通信、哪些字节已经发送和确认，例如端口、Seq、Ack 与 Window；应用层再解释字节代表请求、响应、文件片段还是错误消息。

`Payload` 也是一个相对概念。站在 Ethernet 层，整个 IPv4 数据报都是 Ethernet Payload；站在 IPv4 层，整个 TCP 报文段都是 IPv4 Payload；站在 TCP 层，首部之后的 10 字节才是 TCP Payload。阅读 Wireshark 的 `Payload` 或 `Data` 标签时，应先确认当前展开的是哪一层。

这一职责表还能帮助定位异常。例如 TTL 的变化属于 IP 路径证据，端口变化属于 TCP 端点或地址转换证据，应用返回码属于消息协议证据。把现象放回对应层次，后续验证就能选择恰当的命令、日志与抓包点。

抓包报告可以沿同样顺序书写：先说明接口与 Frame，再说明 IP 两端，随后说明 TCP 四元组和字节进度，最后关联应用日志。这样的叙述让每一项结论都拥有清晰来源。

## 第一层：Ethernet 首部

样本帧的前 14 字节如下：

```text
帧偏移 0～5    02 42 ac 11 00 02   目标 MAC
帧偏移 6～11   02 42 ac 11 00 01   源 MAC
帧偏移 12～13  08 00               EtherType = IPv4
```

EtherType `0x0800` 表明后续载荷按 IPv4 解析，因此 IPv4 首部从帧偏移 14 开始。Wireshark 的十六进制偏移以零起算，所以第一个 IPv4 字节 `45` 位于十进制偏移 14，也就是十六进制 `0x0e`。

MAC 地址服务于当前链路或当前一跳。路由器转发 IPv4 数据报时，会为下一段链路重新构造链路层首部，沿途各链路可出现不同的源/目标 MAC。更完整的下一跳过程可阅读 [Frame、MAC、IP 与 ARP](../../../../05/24/networking-frame-mac-ip.md)。

常见 Ethernet 抓包会显示 14 字节基本首部；VLAN 标签可增加链路层字段。回环接口、点对点链路或某些虚拟接口还会采用各自的链路层呈现方式。抓包软件保存的记录也常省略以太网前导码、帧间隙与 FCS。分析时以当前接口的链路类型和实际捕获长度为准。

## 第二层：IPv4 首部

IPv4 首字节是 `0x45`。把它拆成两个四位数：

```text
0x45 = 0100 0101（二进制）
       └──┘ └──┘
       版本  IHL
        4     5
```

版本值 `4` 表示 IPv4。IHL 值 `5` 的单位是 32 位字，也就是 4 字节，因此：

$$
\text{IPv4 Header Length}=5\times 4\ \text{bytes}=20\ \text{bytes}
$$

IPv4 从帧偏移 14 开始，占 20 字节，所以 TCP 起点为：

$$
14+20=34
$$

帧偏移 34 的十六进制写法是 `0x22`。回到原始字节，在 `0020` 行内再移动 2 个位置，正好看到 TCP 源端口的首字节 `c0`。

样本 IPv4 首部还给出这些信息：

| IPv4 字段 | 原始字节 | 计算或结果 |
| --- | --- | --- |
| Total Length | `00 3e` | `0x003e = 62` 字节 |
| TTL | `40` | `0x40 = 64` |
| Protocol | `06` | TCP |
| Header Checksum | `32 22` | `0x3222` |
| Source Address | `c0 00 02 0a` | `192.0.2.10` |
| Destination Address | `c6 33 64 14` | `198.51.100.20` |

`Total Length` 从 IPv4 首字节开始计数，覆盖 IPv4 首部和 IPv4 Payload。Ethernet 首部的 14 字节位于这个长度之外。样本中的长度关系为：

$$
62\ \text{bytes}=20\ \text{bytes IPv4 header}+42\ \text{bytes IPv4 payload}
$$

IPv4 的 `Protocol = 6` 指示 IPv4 Payload 按 TCP 解析。IPv6 使用 `Next Header` 字段承担相近的衔接职责；IPv6 基本首部长度固定为 40 字节，扩展首部会继续改变 TCP 的实际起点。

## 第三层：TCP 首部与 TCP Payload

TCP 从帧偏移 34 开始。样本的 TCP 区域为：

```text
c0 00 23 28 6a 1b 2c 3e 10 20 30 41 80 18 fa f0
e7 fd 00 00 01 01 08 0a 01 02 03 04 a0 b0 c0 d0
48 45 4c 4c 4f 20 54 43 50 0a
```

TCP 首部自身携带 Data Offset。这里相关字节为 `0x80`，高四位是 `8`，单位同样是 4 字节：

$$
\text{TCP Header Length}=8\times4\ \text{bytes}=32\ \text{bytes}
$$

因此应用数据在整帧中的起点为：

$$
34\ \text{bytes TCP start}+32\ \text{bytes TCP header}=66
$$

十进制偏移 66 等于十六进制 `0x42`。在 `0040` 行内移动 2 个位置，可以找到应用数据首字节 `48`。

TCP 数据长度也能由上层长度反推：

$$
\begin{aligned}
\text{TCP Segment Length}
  &=62-20\\
  &=42\ \text{bytes}\\[4pt]
\text{TCP Payload Length}
  &=42-32\\
  &=10\ \text{bytes}
\end{aligned}
$$

最后 10 个字节按 ASCII 解码：

```text
48 45 4c 4c 4f 20 54 43 50 0a
 H  E  L  L  O     T  C  P  \n
```

应用协议负责解释这 10 个字节的含义。TCP 只把它们放进该连接的有序字节空间。一次应用消息可能跨越多个 TCP 报文段，单个 TCP 报文段也可能承载多条较短的应用消息。

## 一张偏移量总表

| 范围，含首尾 | 长度 | 层次 | 样本内容 |
| --- | ---: | --- | --- |
| 帧偏移 0～13 | 14 字节 | Ethernet | MAC、EtherType |
| 帧偏移 14～33 | 20 字节 | IPv4 | 地址、TTL、Protocol 等 |
| 帧偏移 34～65 | 32 字节 | TCP Header | 固定首部 20 字节、选项 12 字节 |
| 帧偏移 66～75 | 10 字节 | TCP Payload | `HELLO TCP\n` |

检查总和：

$$
14+20+32+10=76\ \text{bytes}
$$

这个等式把原始字节、各层长度字段和抓包记录长度连接起来。后续章节会继续拆解偏移 34～65 的每一个 TCP 字段。

## 在 Wireshark 中复现实验

### 环境与步骤

1. 打开第二篇的客户端与服务端代码，将两端的 `PORT` 常量从 `50007` 同步设为 `9000`，随后启动服务端与客户端并发送一段已知文本。
2. 在 Wireshark 中选择回环接口；Windows/Npcap 环境通常显示为 `Adapter for loopback traffic capture`。
3. 使用显示过滤器 `tcp.port == 9000 && tcp.len > 0`。
4. 选中客户端发出的数据记录，依次展开链路层、Internet Protocol 和 Transmission Control Protocol。
5. 点击某个字段，观察 Packet Bytes 窗格同步高亮的字节范围。
6. 记录帧长度、IP 首部长度、IP Total Length、TCP 首部长度与 TCP 数据长度。

### 预期现象

- Wireshark 会把同一条记录分成 Frame、链路层、IP、TCP 和 Data 等树状节点。
- IP 的 Protocol 或 IPv6 的 Next Header 会把解析流程引向 TCP。
- TCP 的 Data Offset 会给出 TCP 数据起点。
- 你的实际长度与样本数值可以不同，长度关系仍满足对应的加减法。
- 回环接口可能显示虚拟链路层首部，字段树会忠实反映该接口的捕获格式。

### 证据记录

建议保存以下表格：

| 证据 | 记录内容 |
| --- | --- |
| 应用日志 | 发送字节串、发送长度、时间戳 |
| Socket 地址 | 本地端点与远端端点 |
| 抓包事实 | 帧号、接口、捕获长度、原始字节 |
| 手工推导 | 各层起点、首部长度、Payload 长度 |
| 分析器结果 | Wireshark 展示值及其字段路径 |

## 理解检查

1. 一个 Ethernet 帧使用 14 字节首部，IPv4 IHL 为 `6`，TCP Data Offset 为 `7`。TCP 从帧内哪个偏移开始？应用数据从哪个偏移开始？
2. IPv4 Total Length 为 100 字节，IPv4 首部为 24 字节，TCP 首部为 28 字节。TCP Payload 有多少字节？
3. 在服务端网卡抓到的目标 MAC 与客户端网卡抓到的目标 MAC 有机会呈现不同值，这一现象由哪一层的逐跳传输解释？

<details>
<summary>参考答案</summary>

1. IPv4 首部长度为 $6\times4=24$ 字节，TCP 起点为 $14+24=38$；TCP 首部长度为 $7\times4=28$ 字节，应用数据起点为 $38+28=66$。
2. $100-24-28=48$ 字节。
3. 链路层。路由器会针对每一段链路重新构造相应的链路层首部。

</details>

## 本章小结

- Frame、IP Datagram、TCP Segment 和应用消息形成逐层嵌套关系。
- 上一层协议号与本层首部长度共同确定下一层的解析起点。
- 样本 TCP 起点为帧偏移 34，应用数据起点为帧偏移 66。
- 长度计算提供了可复核证据，也为后续 Seq、Ack 计算奠定基础。
- 抓包接口决定链路层呈现形式；分析始终从当前捕获格式出发。

---

[上一章：第6章 第一次抓包](../02-connection/03-first-capture.md) · [所属篇：第三篇](../03-header.md) · [下一章：第8章 TCP 首部总览](./02-tcp-header-overview.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
