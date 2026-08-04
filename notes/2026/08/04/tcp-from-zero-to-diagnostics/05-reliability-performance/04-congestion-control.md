# 第23章 拥塞控制

接收端公布了 8 MiB 窗口，发送端内存也很充足，路径中间却只有一条 20 Mbit/s 的瓶颈链路。若发送端瞬间注入数百 MiB，瓶颈队列会迅速增长并丢包。TCP 拥塞控制让发送端逐步探测路径可承载的在途数据与发送速率。

## rwnd 与 cwnd 共同约束发送

第22章的 `rwnd` 来自接收端，保护接收缓冲区。拥塞窗口 `cwnd` 位于发送端，保护共享网络路径。按基础模型，一条连接允许的在途数据上限为：

$$
W_{send}=\min(rwnd,cwnd)
$$

假设 `rwnd = 512 KiB`、`cwnd = 64 KiB`，路径侧当前只允许约 64 KiB 在途；若 `rwnd` 降为 32 KiB，接收端容量成为主要限制。真实发送量还受 FlightSize、发送缓冲区、应用供数、分段策略和 pacing 影响。

`cwnd` 保存在发送端内部状态中。Wireshark能够看到 Seq、Ack、丢失、ECN 标志和发送时序，再据此估计部分行为；发送端的 `ss -ti`、内核跟踪或性能计数器才直接提供实现维护的拥塞状态。Linux `ss -ti` 中的 `cwnd` 通常以报文段为单位，和按字节表示的 `rwnd`、FlightSize、BDP 比较前，需要结合该连接的 MSS 换算。

## 用 Reno 建立经典模型

RFC 5681 用四组机制奠定经典模型：慢启动、拥塞避免、快速重传和快速恢复。慢启动阈值 `ssthresh` 决定当前使用哪种窗口增长方式。

### 慢启动

当 `cwnd < ssthresh`，每个确认新数据的 ACK 最多让 `cwnd` 增加一个 SMSS。ACK 又来自前一轮发出的数据，所以窗口在理想化的“一段一 ACK”条件下每个 RTT 近似翻倍。

设 SMSS 为 1460 字节，取一个便于演算的起点 `cwnd = 10 SMSS`、`ssthresh = 64 SMSS`：

| 轮次 | 可发送段数 | `cwnd` 字节数 |
| --- | ---: | ---: |
| 起点 | 10 | $10\times1460=14600$ |
| 1 RTT 后 | 20 | 29200 |
| 2 RTT 后 | 40 | 58400 |
| 接近阈值 | 64 | 93440 |

Delayed ACK、Appropriate Byte Counting、应用供数和实现策略会改变每一轮的精确形状，“指数增长”用于表达反馈驱动的整体趋势。慢启动的“慢”表示从受控窗口开始探测，它在早期阶段仍可快速增长。

### 拥塞避免

当窗口到达 `ssthresh` 附近，经典 Reno 进入拥塞避免。规范目标约为每个 RTT 增长一个 SMSS。常见近似更新式是在每个确认新数据的 ACK 上执行：

$$
cwnd \mathrel{+}= \frac{SMSS^2}{cwnd}
$$

一整个 RTT 内收到约 $cwnd/SMSS$ 份相应 ACK，累计增量接近一个 SMSS。窗口随时间呈线性增长，持续寻找更多可用容量。

### 遇到拥塞信号

经典模型常把丢包当作拥塞信号。若丢包前 `FlightSize = 80 SMSS`，取 RFC 5681 所给阈值上界进行演算：

$$
ssthresh=\max\left(\frac{FlightSize}{2},2\times SMSS\right)=40\,SMSS
$$

3 个重复 ACK 触发快速重传与快速恢复时，发送端降低窗口并利用仍在到达的 ACK 时钟继续恢复。RTO 到期表示反馈更弱，经典规范把 `cwnd` 收缩到最多一个满尺寸段，再从新的 `ssthresh` 之前执行慢启动。拥塞避免期间的加性增大与拥塞事件后的乘性减小合称 AIMD。SACK、RACK 和具体内核会细化恢复过程，降低窗口这一拥塞响应仍与第20章的丢包定位协同发生。

## ECN 与 pacing

路径也可以在队列出现拥塞趋势时标记 IP 报文的 CE 位。连接成功协商 Classic ECN 后，接收端通过 ECE 反馈，发送端执行拥塞响应并用 CWR 表示已经降低拥塞窗口。ECN 提供显式信号，有机会在队列溢出丢包前反馈拥塞；部署效果取决于端点和路径设备共同支持。

Pacing 按计算出的速率把报文分散到时间轴上，减少一个窗口内的瞬时突发。它属于常见发送实现策略，可与 Reno、CUBIC、BBR 等算法组合。抓包中较均匀的包间隔可以支持 pacing 假设，调度抖动、网卡批处理和卸载也会改变可见节奏，因此发送端配置仍是关键证据。

## CUBIC：按拥塞事件后的时间增长

CUBIC 是 RFC 9438 定义的 Standards Track 算法。它记住最近拥塞事件前的窗口 $W_{max}$，用当前拥塞避免阶段已经经过的有效时间 $t$ 计算目标窗口；应用受限且 `cwnd` 停止更新的时段从 $t$ 中扣除：

$$
W_{cubic}(t)=C(t-K)^3+W_{max}
$$

$$
K=\sqrt[3]{\frac{W_{max}-cwnd_{epoch}}{C}}
$$

这里的窗口以报文段为单位，$t$ 与 $K$ 以秒为单位，$cwnd_{epoch}$ 是本轮拥塞避免开始时的窗口。$\beta_{cubic}$ 是乘性降低因子，RFC 9438 建议取 0.7；常数 $C$ 控制曲线的增长强度，建议取 0.4。常见的乘性降低场景满足 $cwnd_{epoch}=\beta_{cubic}W_{max}$，代入后即可得到含 $(1-\beta_{cubic})W_{max}$ 的写法。窗口降低后，曲线先较快接近原来的 $W_{max}$；靠近该点时形成平缓平台；超过该点后逐步加快探测新容量。CUBIC 仍由新 ACK 驱动窗口更新，也保留 TCP 的快速恢复和超时框架。它还维护 Reno-friendly 区域，在小 BDP 环境下参考 Reno 的增长结果。

这套时间函数让大窗口路径上的增长具有更好的伸缩性。CUBIC 仍属于基于丢包的控制思路，较深的瓶颈缓冲可能形成持续队列。具体默认算法、参数和版本由操作系统发布决定，实验前应查询目标主机。

## BBR：估计带宽和传播 RTT

BBR 取自 Bottleneck Bandwidth and Round-trip propagation time。它持续估计近期最大交付速率 `max_bw` 与最小往返传播时间 `min_rtt`，由两者形成路径模型：

$$
BDP_{estimate}=max\_bw\times min\_rtt
$$

算法使用 pacing rate、发送量子和 `cwnd` 三类控制量，让发送过程接近估计交付速率，并限制在途数据。典型状态包括 Startup、Drain、ProbeBW 和 ProbeRTT：快速建立带宽估计，排出启动队列，周期性探测带宽，再短暂刷新传播 RTT 估计。

BBR 仍使用 ACK/SACK 交付反馈、`cwnd` 上限和丢包恢复信息。当前 BBRv3 草案还把丢包率与 ECN 反馈纳入路径模型；上面的乘积给出基础在途量尺度，pacing gain、`cwnd` gain 和状态机继续决定实际控制动作。截至 2026 年 8 月，IETF CCWG 的 BBR 文档仍是拟定 Experimental 状态的 Internet-Draft，版本可继续演进；Linux 等系统中的 BBR v1、v2、v3 可用性与行为也存在版本差异。因此正文采用“模型型拥塞控制”这一稳定直觉，生产判断以目标内核文档和配置为准。

| 算法 | 主要控制思路 | 观察重点 |
| --- | --- | --- |
| Reno | ACK 驱动加性增长，拥塞后乘性降低 | `cwnd` 线性增长、丢包后下降 |
| CUBIC | 按拥塞事件后的时间运行三次函数 | $W_{max}$ 附近平台、长期大窗口增长 |
| BBR | 估计交付速率与传播 RTT，以 pacing 和在途上限控制 | delivery rate、min RTT、pacing、状态阶段 |

## 窗口控制与速率控制怎样配合

`cwnd` 规定某一时刻最多保留多少未确认数据，pacing rate 规定这些数据以多快节奏进入网络。假设 `cwnd = 1 MiB`、RTT 100 ms，窗口给出的平均速率量级约为 80 Mbit/s；若 pacing 设为 60 Mbit/s，发送节奏先形成 60 Mbit/s 上限。若接收端 `rwnd = 512 KiB`，接收窗口又把在途量压到一半。

应用受限状态也会改变样本。发送应用每 500 ms 才提供 32 KiB 时，FlightSize 长期低于 `cwnd`，低吞吐主要来自供数节奏。现代算法会标记或估计 application-limited 区间，避免把低交付率直接当成路径容量。诊断报告应同时采集待发送字节、FlightSize、`rwnd`、`cwnd` 和 pacing rate。

公平性属于另一项观察维度。多条流共享瓶颈时，各自的 RTT、算法、启动时刻与 ECN 支持会影响带宽份额。一次单流实验回答“该流怎样使用路径”，多流实验再回答“算法怎样共享路径”。两种实验目标分开记录，可让结论更清晰。

同一算法在空闲后重启、应用受限恢复和突发流量下也可能走不同分支。实验日志记录连接持续时间与应用发送时刻，可帮助解释窗口曲线中的停顿和重新增长。

## 受控实验：固定 RTT 和瓶颈带宽

复用 `tcp-rx` 命名空间。下面在正反方向各加入 50 ms 延迟，并把正向数据路径限制到 20 Mbit/s，近似得到 100 ms RTT 的瓶颈：

```bash
sudo tc qdisc replace dev veth-tx root netem delay 50ms rate 20mbit limit 10000
sudo ip netns exec tcp-rx tc qdisc replace dev veth-rx root netem delay 50ms limit 10000
```

先查询发送端可用算法和默认算法：

```bash
sysctl net.ipv4.tcp_available_congestion_control
sysctl net.ipv4.tcp_congestion_control
```

终端 A 启动服务端，终端 B 抓包：

```bash
sudo ip netns exec tcp-rx iperf3 -s -B 10.200.20.2
sudo tcpdump -i veth-tx -s 0 -w chapter23.pcap 'tcp port 5201'
```

分别选择系统列出的算法运行 64 MiB 传输：

```bash
iperf3 -c 10.200.20.2 -n 64M -C reno -i 0.5
iperf3 -c 10.200.20.2 -n 64M -C cubic -i 0.5
iperf3 -c 10.200.20.2 -n 64M -C bbr -i 0.5
```

某算法未列入 available 清单时，本轮直接记录“当前内核未提供”。传输过程中在另一终端采样发送端状态：

```bash
watch -n 0.2 "ss -tin dst 10.200.20.2"
```

### 记录与预期

- 记录每 0.5 秒吞吐、总耗时、`cwnd`、`rtt`、重传数和 pacing 相关字段；可见字段依内核版本而定。
- 初始阶段常能看到发送能力逐轮增长；发生丢包或 ECN 反馈时，窗口或发送速率进入恢复调整。
- 单条 pcap可计算在途字节和 ACK 节奏，算法名称仍由发送端配置确认。
- CUBIC、Reno、BBR 的差异会受到队列大小、传输时长和内核版本影响。保留原始表格比只保存最终平均吞吐更有分析价值。

传输结束后在状态采样与抓包终端按 `Ctrl+C`，再清理规则。`iperf3` 服务端可保留给第24章继续使用，整组实验结束时用 `Ctrl+C` 停止：

```bash
sudo tc qdisc del dev veth-tx root
sudo ip netns exec tcp-rx tc qdisc del dev veth-rx root
```

缺少 `netem` 时，可以在自有 Linux 主机之间运行较长的 `iperf3`，使用 `ss -ti` 观察当前算法、`cwnd`、RTT 和 pacing 信息。回环路径也能展示内核字段与算法切换流程；它的 BDP 很小，结果适合作为工具练习。Windows 可用 `Get-NetTCPConnection` 配合 Wireshark吞吐图记录端到端表现，算法细节再依据对应系统版本的官方诊断工具补充。

## 理解检查

1. `rwnd = 2 MiB`、`cwnd = 256 KiB` 时，基础模型允许的最大在途量是多少？
2. Reno 在 `FlightSize = 30 SMSS` 时检测到拥塞，按公式计算新的 `ssthresh`。
3. CUBIC 曲线在 $W_{max}$ 附近为什么增长较平缓？
4. 哪类证据可以确认一条连接实际使用 Reno、CUBIC 或 BBR？
5. BBR 的带宽估计和最小 RTT 分别描述路径的哪个属性？

## 小结

拥塞控制面向共享路径容量，`cwnd` 与接收端 `rwnd` 共同限定在途数据。Reno 提供慢启动、拥塞避免和恢复的经典骨架；CUBIC 用三次函数改善大 BDP 场景的窗口增长；BBR 根据交付速率和传播 RTT 建模并实施 pacing。抓包呈现结果，发送端状态揭示实际控制算法与内部变量。

## 规范依据

- [RFC 5681：TCP Congestion Control](https://www.rfc-editor.org/rfc/rfc5681.html)
- [RFC 3168：Classic ECN](https://www.rfc-editor.org/rfc/rfc3168.html)
- [RFC 9438：CUBIC](https://www.rfc-editor.org/rfc/rfc9438.html)
- [IETF CCWG：BBR Congestion Control Internet-Draft](https://datatracker.ietf.org/doc/draft-ietf-ccwg-bbr/)

## 导航

[上一章：第22章 流量控制](./03-flow-control.md) · [所属篇：第五篇](../05-reliability-performance.md) · [下一章：第24章 延迟、吞吐量和带宽时延积](./05-latency-throughput-bdp.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
