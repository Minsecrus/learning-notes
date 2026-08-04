# 第10章 Sequence Number：给字节编号

TCP 向应用提供有序字节流。网络可以把一段数据拆成多个报文段，也可能让报文段以变化的时间和顺序到达。Sequence Number，简称 Seq，为字节流中的位置提供统一坐标，使接收方能够排列数据、识别缺口和放置重传内容。

本章继续使用样本中的 10 字节数据：

```text
Seq = 0x6a1b2c3e
Payload = 48 45 4c 4c 4f 20 54 43 50 0a
          H  E  L  L  O     T  C  P  \n
```

## Seq 指向本段第一个数据字节

TCP 首部中的 Sequence Number 占 32 位。携带数据时，Seq 表示本报文段第一个数据字节在当前发送方向字节空间中的位置。

样本首字节 `H` 的编号是 `0x6a1b2c3e`。之后每个字节依次加 1：

| Payload 偏移 | 字节 | 字符 | 线上序列号 |
| ---: | --- | --- | --- |
| 0 | `48` | `H` | `0x6a1b2c3e` |
| 1 | `45` | `E` | `0x6a1b2c3f` |
| 2 | `4c` | `L` | `0x6a1b2c40` |
| 3 | `4c` | `L` | `0x6a1b2c41` |
| 4 | `4f` | `O` | `0x6a1b2c42` |
| 5 | `20` | 空格 | `0x6a1b2c43` |
| 6 | `54` | `T` | `0x6a1b2c44` |
| 7 | `43` | `C` | `0x6a1b2c45` |
| 8 | `50` | `P` | `0x6a1b2c46` |
| 9 | `0a` | 换行 | `0x6a1b2c47` |

这组数据占据一个左闭右开的序列号区间：

$$
[\mathtt{0x6a1b2c3e},\ \mathtt{0x6a1b2c48})
$$

左端点属于本段，右端点是下一段新数据的起点。长度计算为：

$$
\mathtt{0x6a1b2c3e}+10
=\mathtt{0x6a1b2c48}
$$

所以该方向的下一 Seq 是 `0x6a1b2c48`。第11章还会看到，接收方连续收到这 10 字节后，会用 Ack 指向同一个右端点。

## 编号对象是字节位置

假设应用一次交给 Socket 10 字节 `HELLO TCP\n`。TCP 可以把它放入一段：

```text
段 A：Seq = 1，Len = 10，覆盖 [1, 11)
```

也可以分成两段：

```text
段 A：Seq = 1，Len = 4，覆盖 [1, 5)   -> HELL
段 B：Seq = 5，Len = 6，覆盖 [5, 11)  -> O TCP\n
```

两种分段都覆盖相同字节区间 `[1, 11)`。接收应用最终读取相同的有序字节流。这个例子说明，Seq 的连续性围绕字节位置建立；报文段边界可以随 MSS、拥塞状态、发送时机与网卡卸载等条件变化。

若第二段先到，接收方可以根据 `Seq = 5` 把它放在后半段位置，并等待 `[1, 5)`。若第一段需要重传，重传副本仍使用 `Seq = 1` 和相同覆盖区间。序列号让乱序放置与重复识别具有共同依据。

## 两个方向拥有独立的序列号空间

TCP 是全双工连接。客户端到服务端和服务端到客户端分别选择初始序列号，并分别推进：

```text
客户端 -> 服务端：客户端 Seq 空间
服务端 -> 客户端：服务端 Seq 空间
```

样本字段：

```text
Seq = 0x6a1b2c3e
Ack = 0x10203041
```

`Seq` 描述客户端当前发送方向，`Ack` 指向服务端发送方向。客户端发送 10 字节后，客户端方向的下一 Seq 推进到 `0x6a1b2c48`；服务端方向的推进由服务端实际发送的数据、SYN 与 FIN 决定。

响应报文会交换两个端点角色。例如服务端尚未发送应用数据时，它的纯 ACK 可以携带：

```text
Server Seq = 0x10203041
Server Ack = 0x6a1b2c48
```

这里两个数值恰好来自两套独立空间。第11章会完整解释 Ack 的累计确认语义。

## SYN 与 FIN 各占一个序列号位置

数据字节直接占据序列号空间；SYN 和 FIN 控制位也各贡献 1 个位置。一个报文段结束后的序列号可以统一写成：

$$
\operatorname{NextSeq}
=\left(\operatorname{Seq}+L+S+F\right)\bmod 2^{32}
$$

其中：

- $L$ 是 TCP Payload 字节数；
- SYN 置位时 $S=1$，其余情况 $S=0$；
- FIN 置位时 $F=1$，其余情况 $F=0$。

ACK、PSH、RST 等标志对该公式的序列空间贡献为 0。TCP Options 属于首部，选项长度对 $L$ 的贡献同样为 0。

### 情形一：纯 ACK

```text
Seq = 7000，Payload Len = 0，SYN = 0，FIN = 0
NextSeq = 7000 + 0 + 0 + 0 = 7000
```

因此纯 ACK 可以连续发送相同 Seq；它报告接收状态，同时保留本方向的新数据起点。

### 情形二：SYN 携带选项

假设客户端初始序列号 ISN 为 `0x6a1b2c3d`，SYN 携带 20 字节 TCP Options，Payload 长度为 0：

$$
\begin{aligned}
\operatorname{NextSeq}
&=\mathtt{0x6a1b2c3d}+0+1+0\\
&=\mathtt{0x6a1b2c3e}
\end{aligned}
$$

这正是样本首段数据使用的 Seq。20 字节 Options 只扩展 TCP 首部；SYN 本身贡献 1。

### 情形三：普通数据

样本 Flags 为 ACK、PSH，Payload 为 10 字节：

$$
\mathtt{0x6a1b2c3e}+10+0+0
=\mathtt{0x6a1b2c48}
$$

### 情形四：FIN 与数据同行

假设一段从 Seq 5000 开始，携带 3 字节并设置 FIN：

```text
数据字节位置：5000、5001、5002
FIN 的位置：  5003
NextSeq：       5004
```

公式给出相同结果：

$$
5000+3+0+1=5004
$$

另一端确认这段数据与 FIN 时，累计 Ack 会指向 5004。

## 初始序列号从哪里开始

每个方向在握手时选择一个 32 位 Initial Sequence Number，简称 ISN。客户端在 SYN 中公布客户端 ISN，服务端在 SYN+ACK 中公布服务端 ISN。双方的首个后续字节都从各自 ISN 加 1 开始。

本教程样本约定：

```text
客户端 ISN = 0x6a1b2c3d
服务端 ISN = 0x10203040
```

于是握手之后：

```text
客户端首个数据 Seq = 0x6a1b2c3e
服务端首个数据 Seq = 0x10203041
```

现代 TCP 实现会根据规范与实现策略生成随连接变化、具备安全性质的 ISN。抓包分析只需读取握手两端的原始 Seq，随后沿两个方向分别计算。

## Wireshark 的相对序列号

十进制数 `1780165694` 读起来很费力。Wireshark 默认常启用 Relative sequence numbers，把每个方向观察到的起始序列号映射到较小的显示值。

以客户端方向为例：

| 报文 | 线上原始 Seq | Wireshark 相对 Seq | 序列号消耗 |
| --- | --- | ---: | ---: |
| SYN | `0x6a1b2c3d` | 0 | 1 |
| 首段 10 字节数据 | `0x6a1b2c3e` | 1 | 10 |
| 下一段新数据 | `0x6a1b2c48` | 11 | 取决于新 Payload |

相对值可以理解为：

$$
\operatorname{RelativeSeq}
=\left(\operatorname{RawSeq}-\operatorname{BaseSeq}\right)\bmod2^{32}
$$

对样本首段数据：

$$
\mathtt{0x6a1b2c3e}-\mathtt{0x6a1b2c3d}=1
$$

Wireshark 字段 `tcp.seq_raw` 保存线上原始值，`tcp.seq` 常反映当前显示设置下的序列号。写分析报告时应标注使用哪一类数值。相对值适合展示推进关系，原始值适合核对 Packet Bytes 与跨工具结果。

抓包若从连接中途开始，分析器只能根据已捕获的首个报文选择显示基准，基准与真实握手 ISN 的关系需要更多证据确认。

## 32 位回绕与模运算

Sequence Number 只有 32 位，数值范围是：

$$
0\ \text{到}\ 2^{32}-1
=0\ \text{到}\ 4294967295
$$

当序列号走过最大值，会从 0 继续。例如某段：

```text
Seq = 0xfffffffc = 4294967292
Payload Len = 8
```

普通整数相加得到：

$$
4294967292+8=4294967300
$$

对 $2^{32}=4294967296$ 取模：

$$
4294967300\bmod4294967296=4
$$

所以：

```text
NextSeq = 0x00000004
```

八个字节的位置依次是：

```text
fffffffc fffffffd fffffffe ffffffff 00000000 00000001 00000002 00000003
```

TCP 规范使用序列号空间中的模运算和有效窗口判断先后关系。抓包工具会处理这种回绕；手工分析跨越边界的报文时，也应沿环形空间计算。

## 分段卸载会改变本机抓包的观察单位

发送主机可能启用 TCP Segmentation Offload、Generic Segmentation Offload 等能力。主机抓包点有机会看到一个很大的 TCP 数据单元，网卡随后才把它拆成适合线路发送的较小报文。接收侧的合并卸载也可能形成更大的观察单元。

序列号规则保持一致：大数据单元覆盖的区间仍等于起始 Seq 加 TCP 数据长度。第32章会通过不同抓包点与卸载状态辨认这类现象。

## 实验：在相对值与原始值之间切换

### 步骤

1. 捕获一条从 SYN 开始的完整连接，显示过滤器使用 `tcp.stream == N`。
2. 为数据包列表添加 `tcp.seq`、`tcp.seq_raw`、`tcp.len` 三列，或在字段树中逐项查看。
3. 在 Wireshark 的 TCP 协议首选项中记录 Relative sequence numbers 当前状态。
4. 依次记录客户端 SYN、第一条客户端数据、下一条客户端数据的 Seq 与 Len。
5. 用 $\operatorname{Seq}+L+S+F$ 计算每条报文的右端点。
6. 切换相对序列号显示，再次读取同一批报文；Packet Bytes 中的四个原始字节保持原值。
7. 若出现重传，比较原始 Seq、Len 与覆盖区间。

### 预期现象

- 完整抓包中，SYN 的相对 Seq 通常显示为 0，首个数据字节从相对 Seq 1 开始。
- 普通数据段的下一 Seq 等于当前 Seq 加 `tcp.len`。
- 纯 ACK 的 `tcp.len` 为 0，本方向 Seq 保持在新数据起点。
- 重传段会再次覆盖先前序列号区间。
- 切换相对显示只改变解析界面的数值表达，抓包文件中的四个 Seq 字节保持一致。

## 理解检查

1. 一条纯 ACK 的 Seq 为 700，Payload Len 为 0。下一 Seq 是多少？
2. 一条数据段的 Seq 为 1001，Payload Len 为 400。它覆盖哪个左闭右开区间？下一 Seq 是多少？
3. 一条报文 Seq 为 3000，携带 2 字节并设置 FIN。下一 Seq 是多少？
4. 一条 SYN 的 Seq 为 `0xabcdef00`，携带 40 字节 TCP Options 与 0 字节 Payload。下一 Seq 是多少？
5. Seq 为 `0xfffffffe`，Payload Len 为 4。按 32 位空间计算下一 Seq。

<details>
<summary>参考答案</summary>

1. $700+0=700$。
2. 覆盖 $[1001,1401)$，下一 Seq 为 1401。
3. $3000+2+1=3003$。
4. Options 的序列空间贡献为 0，SYN 贡献 1，所以下一 Seq 为 `0xabcdef01`。
5. `0xfffffffe + 4` 对 $2^{32}$ 取模，结果为 `0x00000002`。

</details>

## 本章小结

- Seq 指向当前发送方向中本段第一个数据字节的位置。
- 长度为 $L$ 的数据覆盖区间 $[\operatorname{Seq},\operatorname{Seq}+L)$。
- SYN 和 FIN 各贡献一个序列号位置；TCP Options 只占首部空间。
- 两个发送方向拥有各自的 ISN 与序列号空间。
- 重传复用原字节区间，乱序段依靠 Seq 找到目标位置。
- Wireshark 相对序列号便于阅读，`tcp.seq_raw` 与原始四字节直接对应。
- 32 位序列号按模 $2^{32}$ 运算，最大值之后从 0 继续。

进一步阅读可参考 [RFC 9293 的 Sequence Numbers 章节](https://www.rfc-editor.org/rfc/rfc9293.html#name-sequence-numbers)。

---

[上一章：第9章 源端口和目标端口](./03-source-destination-ports.md) · [所属篇：第三篇](../03-header.md) · [下一章：第11章 Acknowledgment Number](./05-acknowledgment-number.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
