# 第20章 确认、丢包检测和重传

发送端把 5000 字节数据交给 TCP，接收端最终读到了完整字节流。网络中间若丢掉一个报文段，完整结果来自发送端再次发送缺失的序列范围。本章追踪这个决定：发送端依据哪些 ACK、哪些时间样本，以及哪个算法判断“现在该重传了”。

## 先做一次预测

假设每段携带 1000 字节，发送端连续发送以下五段：

| 段 | Seq 范围 | 结果 |
| --- | --- | --- |
| A | $[1001, 2001)$ | 到达 |
| B | $[2001, 3001)$ | 丢失 |
| C | $[3001, 4001)$ | 到达 |
| D | $[4001, 5001)$ | 到达 |
| E | $[5001, 6001)$ | 到达 |

先预测三个问题：接收端收到 C、D、E 后会回复哪个 Ack？发送端最早可在何时重传 B？B 到达后累计 Ack 会推进到哪里？

## 可靠性的最小模型

发送 TCP 会保留尚未被累计确认的数据。这个逻辑集合常称为重传队列。`ACK = 2001` 表示接收端已经形成连续字节前缀 $[1001,2001)$，下一期待字节位于 2001。它也为发送端释放已经确认的序列范围提供依据。

确认报文本身也可能丢失。累计确认让后来的更大 Ack 覆盖先前进度：若确认 A 的 ACK 在路上丢失，随后到达的 `ACK = 3001` 仍可确认 A、B 两段。因此，每个数据段通常无需各自对应一个成功抵达的 ACK。

### 即时 ACK 与 Delayed ACK

接收端可以短暂延后确认，等待第二个满尺寸段，或把 ACK 搭载到反向数据中。这个策略称为 Delayed ACK。经典规范模型要求确认至少覆盖每两个满尺寸段中的一组，并把延迟限制在 500 ms 内；现代系统通常采用更短、更自适应的计时与 ACK 频率策略，实际值需要在目标平台测量。

遇到序列缺口时，及时反馈更有利于恢复。RFC 5681 建议接收端在缺口上方的新段到达时立即发送重复 ACK，在填补部分或全部缺口时也立即确认。于是前述 C、D 会持续携带 `ACK = 2001`。这些 Ack 值相同，同时表明后续数据仍在到达。

Delayed ACK 改变 ACK 的数量和时刻，累计确认语义保持一致。第29章会继续分析它与 Nagle 算法、小消息往返和 `TCP_NODELAY` 的组合效果。

## 两条丢包检测路线

### 经典重复 ACK 模型

RFC 5681 的经典快速重传以 3 个重复 ACK 作为丢包信号。若 B 丢失，C、D、E 依次到达并各自触发 `ACK = 2001`，发送端收到第三个重复 ACK 后可重传从 Seq 2001 开始的数据，无需等候重传计时器到期。

当重传的 B 到达时，接收端原先缓存的 C、D、E 与它连成连续范围。假设 E 的右边界为 6001，接收端会回复 `ACK = 6001`。这个跃升称为累计确认推进。重复 ACK 也可能来自网络乱序或数据复制，因此经典阈值提供一种稳健折中，发送端仍会结合恢复状态和 SACK 信息。

快速重传负责定位重传时机；拥塞控制负责调整发送强度。经典 Reno 在同一事件中会更新 `ssthresh` 和 `cwnd`，第23章专门计算这些变化。

### 重传超时

当在途数据很少、尾部报文丢失，发送端可能收不到足够的重复 ACK。重传超时 RTO 提供保底恢复。RTT 样本测量“发送一个序列范围到收到确认”的往返时间；SRTT 平滑短期波动，RTTVAR 表示 RTT 变化幅度。RFC 6298 给出的核心计算为：

$$
RTO = SRTT + \max(G, 4 \times RTTVAR)
$$

其中 $G$ 是时钟粒度。第一次测得 $R=120\text{ ms}$ 时：

$$
SRTT=120\text{ ms},\qquad RTTVAR=60\text{ ms}
$$

$$
RTO=120+4\times60=360\text{ ms}
$$

RFC 6298 的规范模型会把低于 1 秒的计算结果向上取到 1 秒。再得到一个 $R'=160\text{ ms}$ 的样本，按 $\alpha=1/8$、$\beta=1/4$ 更新：

$$
RTTVAR=\frac34\times60+\frac14\times|120-160|=55\text{ ms}
$$

$$
SRTT=\frac78\times120+\frac18\times160=125\text{ ms}
$$

$$
RTO=125+4\times55=345\text{ ms}
$$

规范下仍取 1 秒。生产内核可能采用更细粒度计时器、不同下限以及附加恢复机制，抓包中观察到的时间应与该主机版本和状态共同解释。超时发生后，RTO 进行指数退避，连续故障期间的探测间隔逐渐增长。

一次报文经过重传后，某个 ACK 究竟对应原发送还是重传会产生测量歧义。经典 Karn 规则会跳过这类歧义 RTT 样本；协商 TCP Timestamp 后，发送端可获得更多区分信息。由此可见，Wireshark 根据两个帧算出的往返间隔和内核实际采纳的 RTT 样本可能处在不同口径。

## 现代实现中的 RACK-TLP

现代 TCP 常结合 SACK 使用 RACK-TLP。RACK 记录每个数据段最近一次发送的时间。当一个发送时间更晚的段已经被累计确认或选择确认，并且较早未交付段的发送时刻加上 RACK 采用的 RTT 与重排容忍窗口已经早于当前时刻，RACK 可将较早段标记为丢失。它以时间顺序补充纯粹按重复 ACK 数量判断的经典模型，并能识别丢失的重传。

TLP 面向“尾部只剩少量在途数据、ACK 反馈稀少”的场景。探测超时 PTO 到期后，发送端发送一个 Tail Loss Probe，促使接收端返回累计 ACK 或 SACK。有效反馈可能让 RACK 在传统 RTO 到期前启动恢复。RTO 仍保留为最终计时保障。

仅凭线上 pcap 往往只能看到“某时刻出现了一个新段或重传段”。发送端的内核指标、算法配置和事件日志有助于确认它来自经典快速重传、RACK 标记还是 TLP 探测。Wireshark 的 `Fast Retransmission`、`Retransmission` 等名称属于分析器推断。

## 从抓包还原一条恢复时间线

分析时先为每个数据段写出“发送时间、Seq 左右边界、是否被累计确认、是否被 SACK”。例如帧 101 在 0 ms 发送 $[2001,3001)$，帧 102、103、104 在 2、4、6 ms 发送更高序列范围；随后三份 `Ack = 2001` 在 82、84、86 ms 抵达发送端；帧 110 在 87 ms 再次发送 $[2001,3001)$。这组事实支持快速恢复时间线。

随后计算两个间隔：原发送到重传为 87 ms，第三个重复 ACK 到重传为 1 ms。若重传紧跟第三个重复 ACK，经典快速重传是合理解释；若重复 ACK 数量较少，较晚发送的数据已被 SACK，且旧段经过重排窗口后被重传，RACK 解释更贴合；若只剩尾部数据并在一个探测计时点出现额外段，TLP 假设值得检查。

再寻找累计 Ack 越过右边界的帧，并记录恢复总时长。接收端 pcap可以确认缺口实际到达时刻，发送端 `ss -ti` 可以给出 `rto`、重传计数和拥塞算法。三份证据各回答一个问题：线上发生了哪些报文、分析器如何分类、发送内核依据何种状态行动。

ACK 路径也需要纳入时间线。数据已经到达而确认在回程丢失时，后续累计 Ack 可能直接推进；发送端若先超时，则会出现数据副本。接收端抓包可显示原数据早已到达，发送端抓包则显示确认缺失，这种两侧差异正是定位方向性故障的依据。

## 受控实验：让数据路径出现延迟和丢包

以下命令在 WSL 或 Linux 的 Bash 中运行，需要 `iproute2`、`iperf3`、`tcpdump` 和管理员权限。网络命名空间把实验限制在一对虚拟接口中。

```bash
sudo ip netns add tcp-rx
sudo ip link add veth-tx type veth peer name veth-rx
sudo ip link set veth-rx netns tcp-rx
sudo ip addr add 10.200.20.1/24 dev veth-tx
sudo ip link set veth-tx up
sudo ip netns exec tcp-rx ip addr add 10.200.20.2/24 dev veth-rx
sudo ip netns exec tcp-rx ip link set lo up
sudo ip netns exec tcp-rx ip link set veth-rx up
```

终端 A 启动服务端：

```bash
sudo ip netns exec tcp-rx iperf3 -s -B 10.200.20.2
```

终端 B 开始抓包：

```bash
sudo tcpdump -i veth-tx -s 0 -w chapter20.pcap 'tcp port 5201'
```

终端 C 给正向数据增加 40 ms 延迟和 2% 随机丢包，再传输 32 MiB：

```bash
sudo tc qdisc replace dev veth-tx root netem delay 40ms loss 2%
sudo ip netns exec tcp-rx tc qdisc replace dev veth-rx root netem delay 40ms
iperf3 -c 10.200.20.2 -n 32M -i 0.5
```

传输期间在终端 D 采样发送端状态：

```bash
watch -n 0.2 "ss -tin dst 10.200.20.2"
```

随机实验每轮的丢失位置不同，可以运行数轮，分别寻找快速恢复和尾部等待。结束抓包后用 Wireshark 过滤：

```text
tcp.port == 5201 &&
(tcp.analysis.duplicate_ack || tcp.analysis.retransmission ||
 tcp.analysis.fast_retransmission || tcp.options.sack.count > 0)
```

### 预期与记录方式

1. 在丢失段之后到达的数据会触发相同累计 Ack，支持 SACK 时还会携带已收到区间。
2. 某些缺口在若干重复 ACK 后快速恢复；在途数据较少时可能出现更长等待或探测。
3. `ss -ti` 可提供发送端的 `rtt`、`rto`、重传计数和拥塞窗口等实现状态；字段集合随内核版本变化。
4. 抓包过滤结果先记录为“Wireshark 标记”，再以 Seq 范围和时间差自行复算。

清理时先在服务端和抓包终端按 `Ctrl+C`。继续第21至24章时，只移除本章的队列规则并保留命名空间：

```bash
sudo tc qdisc del dev veth-tx root 2>/dev/null || true
sudo ip netns exec tcp-rx tc qdisc del dev veth-rx root 2>/dev/null || true
```

到此结束整组实验时，再执行 `sudo ip netns del tcp-rx`；删除命名空间会一并清除其中的 `veth-rx` 及其对端。

若环境缺少 `netem`，可在自己控制的跨主机文件传输中同时运行 Wireshark 与 `ss -ti`，观察 Delayed ACK、RTT、RTO 估计和自然发生的重传。一次无丢包传输也有完整价值：它给出正常 ACK 频率和 RTT 基线，后续故障抓包可与之对照。

## 理解检查

1. 连续发送 $[1,1001)$、$[1001,2001)$、$[2001,3001)$，中间一段丢失，最后一段到达后 Ack 应是多少？
2. 第一个 RTT 样本为 80 ms，按 RFC 6298 计算初始 SRTT、RTTVAR 和公式结果 RTO。
3. 为什么少量尾部数据丢失时，3 个重复 ACK 可能长期凑不齐？
4. 一条 `tcp.analysis.retransmission` 标记还需要哪些证据才能确认发送端的恢复算法？

## 小结

累计 ACK 给出连续接收进度，Delayed ACK 调节反馈频率，重复 ACK 与 RTO 构成经典丢包检测基础。RACK 用发送时间和交付反馈识别缺口，TLP主动获取尾部反馈。协议报文说明发生了什么，发送端状态进一步解释内核为何在该时刻采取行动。

## 规范依据

- [RFC 9293：TCP 基础规范](https://www.rfc-editor.org/rfc/rfc9293.html)
- [RFC 5681：TCP 拥塞控制、Delayed ACK 与经典快速重传](https://www.rfc-editor.org/rfc/rfc5681.html)
- [RFC 6298：重传计时器计算](https://www.rfc-editor.org/rfc/rfc6298.html)
- [RFC 8985：RACK-TLP 丢包检测](https://www.rfc-editor.org/rfc/rfc8985.html)

## 导航

[上一章：第19章 RST、异常断开和半开连接](../04-lifecycle/05-rst-half-open.md) · [所属篇：第五篇](../05-reliability-performance.md) · [下一章：第21章 乱序、重复数据和 SACK](./02-reordering-duplicates-sack.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
