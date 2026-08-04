# 第23章 拥塞控制

假设接收端公布（Advertise）了 8 MiB 的接收窗口，发送端的内存也很充足，但网络路径中间有一条 20 Mbit/s 的瓶颈链路。此时，如果发送端瞬间向网络中注入数百 MiB 的数据，瓶颈链路的队列就会迅速堆积，最终导致丢包。TCP 拥塞控制（Congestion Control）的作用，就是让发送端能够逐步探测出网络路径真正能承载的在途数据量和发送速率。

## rwnd 与 cwnd：共同约束发送速率

在第22章我们提到过，接收窗口 `rwnd` 由接收端计算并通告，目的是保护接收缓冲区不被撑爆。相对地，拥塞窗口 `cwnd`（Congestion Window）则由发送端自己维护，目的是保护共享的网络路径。在基础的拥塞控制模型中，一条连接允许的在途数据量（Flight Size）上限受到这两个窗口的双重约束：

$$
W_{send}=\min(rwnd,cwnd)
$$

举个例子，假设当前的 `rwnd = 512 KiB`，但 `cwnd = 64 KiB`，这意味着当前网络路径最多只允许约 64 KiB 的数据在途；而如果 `rwnd` 骤降到了 32 KiB，那么接收端的处理能力就成了主要瓶颈。当然，在实际传输中，最终的发送量还要综合考虑当前的在途数据量（Flight Size）、发送缓冲区剩余空间、应用层产生数据的速度、分段（Segment）策略以及 Pacing（平滑发送）机制等多个因素。

值得注意的是，`cwnd` 纯粹是发送端的内部状态，不会在报文中传输。虽然我们能用 Wireshark 抓包观察 Sequence Number、ACK、丢包、ECN 标志和发送时序，从而间接推测拥塞控制的行为，但只有在发送端使用 `ss -ti`、内核 Trace 或性能计数器，才能直接看到真实的拥塞状态。另外，Linux `ss -ti` 输出的 `cwnd` 通常以报文段（Segment）为单位，如果你想把它和以字节为单位的 `rwnd`、Flight Size、BDP（带宽时延积）做对比，必须先乘上该连接的 MSS（最大报文段长度）进行换算。

## Reno 算法：TCP 拥塞控制的经典模型

RFC 5681 定义的 Reno 算法奠定了 TCP 拥塞控制的四大基石：慢启动（Slow Start）、拥塞避免（Congestion Avoidance）、快速重传（Fast Retransmit）和快速恢复（Fast Recovery）。其中，慢启动阈值 `ssthresh`（Slow Start Threshold）就像一个分水岭，决定了当前发送端应该采用哪种窗口增长策略。

### 慢启动（Slow Start）

当 `cwnd < ssthresh` 时，连接处于慢启动阶段。在这个阶段，发送端每收到一个确认新数据的 ACK，就会将 `cwnd` 最多增加一个 SMSS（Sender Maximum Segment Size）。由于 ACK 是由前一轮发出的数据触发的，所以在理想的“一个报文段对应一个 ACK”的情况下，`cwnd` 会在每个 RTT（往返时间）内近似翻倍。

假设 SMSS 为 1460 字节，为了方便计算，我们设定初始状态 `cwnd = 10 SMSS`，`ssthresh = 64 SMSS`，看看窗口是如何增长的：

| 轮次 | 可发送段数 | `cwnd` 字节数 |
| --- | ---: | ---: |
| 起点 | 10 | $10\times1460=14600$ |
| 1 RTT 后 | 20 | 29200 |
| 2 RTT 后 | 40 | 58400 |
| 接近阈值 | 64 | 93440 |

实际网络中，由于延迟确认（Delayed ACK）、适当字节计数（Appropriate Byte Counting，ABC）、应用层供数速度等因素，每一轮的窗口增长可能不会完美契合数学公式。这里的“指数增长”更多是描述一种由 ACK 驱动的整体趋势。要记住，慢启动的“慢”是指它从一个较小的保守窗口开始探测网络，而不是指它的增长速度慢——事实上，它在早期阶段的增长极快。

### 拥塞避免（Congestion Avoidance）

当 `cwnd` 增长到等于或超过 `ssthresh` 时，经典 Reno 算法就会进入拥塞避免阶段。此时，为了避免把网络“撑爆”，窗口的增长目标变为每个 RTT 增加约一个 SMSS。常见的近似实现是，每收到一个确认新数据的 ACK，就执行如下公式更新 `cwnd`：

$$
cwnd \mathrel{+}= \frac{SMSS^2}{cwnd}
$$

因为在一个 RTT 内，发送端大约会收到 $cwnd/SMSS$ 个 ACK，这样累加下来，一个 RTT 内 `cwnd` 的总增量刚好接近一个 SMSS。在这个阶段，拥塞窗口随时间呈线性增长，小心翼翼地探测网络中是否还有更多可用带宽。

### 应对拥塞信号

经典 Reno 模型简单粗暴地将“丢包”等同于“网络拥塞”。假设在丢包发生前，当前的在途数据量 `Flight Size = 80 SMSS`。根据 RFC 5681 的规范，当检测到丢包时，系统会重新计算 `ssthresh`，取以下公式的结果：

$$
ssthresh=\max\left(\frac{FlightSize}{2},2\times SMSS\right)=40\,SMSS
$$

如果是收到 3 个重复 ACK（Duplicate ACKs）触发了快速重传和快速恢复，发送端会将 `cwnd` 减半，并利用仍在不断到达的重复 ACK（被称为 ACK Clocking，ACK 时钟）来维持数据发送。而如果是 RTO（重传超时）到期，说明网络拥塞极度严重，连 ACK 都回不来了，此时经典规范要求将 `cwnd` 瞬间“腰斩”降至 1 个满尺寸报文段（1 SMSS），然后重新开始慢启动过程，直到 `cwnd` 再次达到新的 `ssthresh`。

拥塞避免阶段的“加性增大（Additive Increase）”与遭遇拥塞时的“乘性减小（Multiplicative Decrease）”，合并起来就是鼎鼎大名的 AIMD 机制。虽然现代 TCP 引入了 SACK、RACK 以及各家内核复杂的恢复算法来优化这个过程，但“遇到拥塞就降窗口”这一核心响应机制，始终与我们在第20章讨论的丢包恢复机制紧密协同。

## 现代控制手段：ECN 与 Pacing

除了被动等待丢包，现代网络设备还可以在队列快满、出现拥塞趋势时，主动将 IP 报文头部标记为 CE（Congestion Experienced）。如果 TCP 连接双方成功协商了 ECN（显式拥塞通知），接收端在收到 CE 标记的报文后，会通过在 TCP 头中设置 ECE 标志来通知发送端；发送端收到后立刻减小 `cwnd`，并回复 CWR（Congestion Window Reduced）标志，表示“我已经降速了”。ECN 提供了一种明确的拥塞信号，让 TCP 能在队列真正溢出丢包前就采取行动。不过，它的实际效果取决于两端主机和沿途路由器是否都良好支持。

另一方面，Pacing（平滑发送）机制则负责按照计算出的目标速率，将报文均匀地分散到时间轴上发送，从而避免一个大窗口数据在瞬间形成流量突发（Burst）。Pacing 是一种实现策略，它可以与 Reno、CUBIC 甚至 BBR 等任何算法组合使用。如果你在抓包时看到报文的时间间隔非常均匀，很可能就是 Pacing 在起作用。不过，操作系统的调度抖动、网卡的批处理特性（如 TSO/GSO）都会改变你在抓包文件里看到的微观发送节奏，所以最确凿的证据依然是发送端的内核配置。

## CUBIC：基于时间的三次函数窗口增长

CUBIC 是目前应用极广且在 RFC 9438 中被定义为标准跟踪（Standards Track）的算法。与 Reno 依赖 ACK 数量来增长窗口不同，CUBIC 依赖的是“时间”。它会记住上一次发生拥塞时的窗口大小 $W_{max}$，并根据当前拥塞避免阶段已经经过的有效时间 $t$（扣除掉应用层没数据发导致 `cwnd` 没更新的时段），利用三次函数来计算新的目标窗口：

$$
W_{cubic}(t)=C(t-K)^3+W_{max}
$$

$$
K=\sqrt[3]{\frac{W_{max}-cwnd_{epoch}}{C}}
$$

在这个公式中，窗口大小以报文段为单位，$t$ 和 $K$ 的单位是秒，$cwnd_{epoch}$ 则是本轮拥塞避免开始时的窗口大小。$\beta_{cubic}$ 是发生拥塞时的乘性减小因子，RFC 9438 建议取 0.7；常数 $C$ 控制着三次曲线的增长速率，建议取 0.4。在大多数降窗场景下，$cwnd_{epoch} = \beta_{cubic}W_{max}$。

CUBIC 的精妙之处在于它的形状：发生拥塞后，它的窗口首先会较快地回升，试图迅速接近原来的 $W_{max}$；在极其接近 $W_{max}$ 的区域，曲线会变得非常平缓，进入一个“平台期”以保持稳定，避免再次引发拥塞；如果在这个平台上呆了很久都没发生丢包，说明网络状况变好了，它又会逐步加速，向上去探测新的网络容量。同时，CUBIC 仍然由新到达的 ACK 驱动窗口更新，保留了经典的快速恢复和超时机制。为了向后兼容，它还设计了一个 Reno 友好区（Reno-friendly region），确保在低 BDP（带宽时延积）环境下，它的表现不会比传统的 Reno 差。

这种基于时间的三次函数设计，让 CUBIC 在高带宽、高延迟（大 BDP）网络下有着极佳的扩展性。不过，CUBIC 骨子里依然是一个“基于丢包（Loss-based）”的拥塞控制算法，如果瓶颈路由器的缓冲区很深（即所谓的 Bufferbloat），CUBIC 很容易把这个缓冲区塞满，导致排队延迟持续偏高。不同操作系统版本对 CUBIC 的具体参数和实现细节有所不同，进行性能调优前最好先查阅当前系统的内核文档。

## BBR：基于模型估计带宽与传播时延

BBR（Bottleneck Bandwidth and Round-trip propagation time）代表了拥塞控制范式的革命。它不再把丢包当作拥塞的唯一信号，而是致力于在端到端建立一个网络路径的模型。BBR 会持续地测量并估计最近一段时间内的最大交付速率（`max_bw`）和最小往返传播时延（`min_rtt`），并由此计算出当前路径的 BDP：

$$
BDP_{estimate}=max\_bw\times min\_rtt
$$

BBR 依靠三个关键控制量来进行调度：发送速率（Pacing Rate）、发送量子（Send Quantum）以及拥塞窗口（`cwnd`）。它的目标是让数据的发送速率完美匹配估算出的带宽，同时严控在途数据量，避免排队。BBR 的状态机在几个典型阶段间循环：Startup（慢启动，快速建立带宽估计）、Drain（排空阶段，清空 Startup 期间在瓶颈处堆积的队列）、ProbeBW（带宽探测，周期性地微调发送速率以试探是否有更多带宽可用）以及 ProbeRTT（时延探测，降低在途数据量以刷新真实传播延迟）。

尽管抛弃了传统的丢包驱动模型，BBR 仍然依赖 TCP 的 ACK/SACK 机制来获取网络反馈，并在拥塞极度严重时使用 `cwnd` 作为最终保障。最新的 BBRv3 草案甚至又将丢包率与 ECN 信号重新融合进了它的模型计算中。简单来说，前面计算的 $BDP_{estimate}$ 给出了网络能承载的数据量基准，而具体的发送行为则由状态机、Pacing 增益（Pacing Gain）和 `cwnd` 增益共同决定。

截至 2026 年 8 月，IETF CCWG 的 BBR 规范依然处于 Experimental 阶段的 Internet-Draft，其算法本身仍在快速迭代中；而在 Linux 内核里，BBR v1、v2、v3 的行为差异巨大。因此，理解 BBR 最重要的是把握它“基于模型控制发送速率”的核心直觉，遇到实际线上问题时，务必以机器当前内核版本的具体实现为准。

| 算法 | 核心控制思路 | 观测重点 |
| --- | --- | --- |
| Reno | ACK 驱动加性增长，丢包触发乘性减小 | `cwnd` 呈线性增长、遇丢包瞬间减半 |
| CUBIC | 窗口随拥塞事件后流逝的时间呈三次函数增长 | $W_{max}$ 附近的平缓期、大窗口下的爬坡速度 |
| BBR | 估计瓶颈带宽与传播延迟，通过 Pacing 精确控制速率和在途量 | Delivery Rate、Min RTT、Pacing Rate、当前所处状态机阶段 |

## 窗口控制与速率控制的协同

如果说 `cwnd` 决定了你在某个瞬间“最多能往网络里丢多少数据”，那么 Pacing Rate 就决定了“你用多快的节奏把这些数据平滑地喂给网卡”。举个例子，假设当前的 `cwnd = 1 MiB`，RTT 为 100 ms，单纯按窗口计算，平均发送速率大约在 80 Mbit/s 的量级。如果同时配置了 Pacing Rate 为 60 Mbit/s，那么 Pacing 机制会强制让发送端以 60 Mbit/s 的速率均匀发包，它成为了实际发送速率的上限。此时，如果接收端通告的 `rwnd` 只有 512 KiB，那么接收窗口会进一步限制在途数据，把实际吞吐量再砍掉一半。

此外，应用受限（Application-limited）状态也会严重影响网络测量的准确性。比如，应用层每 500 ms 才慢吞吐地吐出 32 KiB 数据，这会导致在途数据量（Flight Size）远远低于 `cwnd` 允许的上限。这时候吞吐上不去，错不在网络，而在应用本身。现代的拥塞控制算法能聪明地标记出这种 application-limited 区间，避免把低效的供数速度误认为是网络路径拥堵。这也是为什么一份专业的网络诊断报告，必须同时包含待发送字节数（Send Queue）、Flight Size、`rwnd`、`cwnd` 以及 Pacing Rate，这样才能排查出到底是哪一环拉了后腿。

拥塞控制不仅关乎单流的性能，还涉及“公平性”。当多条 TCP 连接共享同一条瓶颈链路时，每条流的 RTT、所选算法、启动时机甚至是 ECN 支持情况，都会决定它最终分到的带宽份额。通常，单流实验能够回答“这个算法是如何榨干路径带宽的”，而多流并发实验则用于探究“不同算法之间是如何竞争和共享带宽的”。我们在设计实验时，务必将这两个维度的目标分开测试和记录，才能得出清晰的结论。

即便是同一种算法，在面对连接长时间空闲后重启、从应用受限状态恢复，或是应对瞬间突发流量时，其内部状态机也可能走向截然不同的分支逻辑。因此，在实验日志中精确记录连接的生命周期和应用层的发送时序，将极大地帮助你解释图表里那些莫名其妙的拥塞窗口“停顿”与“暴增”。

## 动手实验：模拟固定 RTT 与瓶颈带宽

我们可以复用之前的 `tcp-rx` 网络命名空间。下面使用 `tc` 命令在正反两个方向各注入 50 ms 的延迟，并将正向的数据路径带宽限制在 20 Mbit/s，从而在本地模拟出一个 RTT 为 100 ms、存在带宽瓶颈的测试环境：

```bash
sudo tc qdisc replace dev veth-tx root netem delay 50ms rate 20mbit limit 10000
sudo ip netns exec tcp-rx tc qdisc replace dev veth-rx root netem delay 50ms limit 10000
```

先查询发送端可用算法和默认算法：

```bash
sysctl net.ipv4.tcp_available_congestion_control
sysctl net.ipv4.tcp_congestion_control
```

接下来，在终端 A 中启动 `iperf3` 服务端，并在终端 B 中启动 Wireshark 抓包进程：

```bash
sudo ip netns exec tcp-rx iperf3 -s -B 10.200.20.2
sudo tcpdump -i veth-tx -s 0 -w chapter23.pcap 'tcp port 5201'
```

在终端 C 中，依次指定刚刚列出的拥塞控制算法，分别发起 64 MiB 的数据传输测试：

```bash
iperf3 -c 10.200.20.2 -n 64M -C reno -i 0.5
iperf3 -c 10.200.20.2 -n 64M -C cubic -i 0.5
iperf3 -c 10.200.20.2 -n 64M -C bbr -i 0.5
```

（如果某个算法不在刚才打印出的 available 清单里，说明你的内核暂不支持该算法，跳过即可。）在测试传输的整个过程中，新开一个终端，高频抓取并记录发送端的 TCP Socket 状态：

```bash
watch -n 0.2 "ss -tin dst 10.200.20.2"
```

### 观察指标与实验预期

- 详细记录每 0.5 秒周期的吞吐量、总传输耗时，重点关注 `cwnd`、`rtt`、重传次数以及 pacing 相关的内核字段。具体能看到哪些字段，取决于你机器上的 Linux 内核版本。
- 在传输刚开始的慢启动阶段，你应该能清晰地看到发送能力呈现逐轮猛增的趋势；一旦触发了丢包或者收到 ECN 反馈，你就能抓拍到拥塞窗口或 Pacing 速率大幅下降，并进入恢复调整期的状态。
- 虽然单靠抓取的 `.pcap` 文件就能分析出在途字节量（Flight Size）和 ACK 的到达节奏，但最稳妥的方式依然是结合 `ss` 命令确认发送端到底使用的是哪种算法。
- CUBIC、Reno 和 BBR 在面对不同队列长度、不同传输耗时以及不同内核版本时，展现出的动态特性差异极大。记住，记录时间序列上的状态变迁，远比仅仅盯着最后那个“平均吞吐量”要有价值得多。

实验做完后，分别在采样和抓包的终端按 `Ctrl+C` 停止进程，然后一定要记得清理掉之前设置的 `tc` 限速规则。至于 `iperf3` 服务端，你可以暂时放着不管，留给第 24 章的实验继续复用：

```bash
sudo tc qdisc del dev veth-tx root
sudo ip netns exec tcp-rx tc qdisc del dev veth-rx root
```

如果你的测试机不支持 `netem` 模块，也可以找两台真实的 Linux 物理机或云主机跑个较长的 `iperf3` 测试，同样利用 `ss -ti` 深度观察各拥塞算法下的 `cwnd`、RTT 和 pacing 表现。即使是在本地回环地址（Loopback）上做实验，你也能跑通各种内核字段查看和算法切换的流程；只是因为回环网卡速度极快、BDP 极小，此时的测试结果更适合用来熟悉排查工具。如果是 Windows 环境，你可以尝试用 PowerShell 的 `Get-NetTCPConnection` 命令，搭配 Wireshark 的吞吐量图表来评估端到端性能，至于算法层面的微观细节，则需要借助于 Windows 官方的高级网络诊断工具。

## 理解检查

1. `rwnd = 2 MiB`、`cwnd = 256 KiB` 时，基础模型允许的最大在途量是多少？
2. Reno 在 `FlightSize = 30 SMSS` 时检测到拥塞，按公式计算新的 `ssthresh`。
3. CUBIC 曲线在 $W_{max}$ 附近为什么增长较平缓？
4. 哪类证据可以确认一条连接实际使用 Reno、CUBIC 或 BBR？
5. BBR 的带宽估计和最小 RTT 分别描述路径的哪个属性？

## 本章小结

拥塞控制的设计初衷是合理瓜分共享的网络路径带宽，它通过 `cwnd` 并结合接收端的 `rwnd`，双重限制了网络中的在途数据量。经典 Reno 算法构建了包括慢启动、拥塞避免和快速恢复在内的坚实骨架；CUBIC 引入基于时间的三次函数，极大改善了在大 BDP 环境下的带宽探测效率；而 BBR 另辟蹊径，通过估算实际交付速率和传播 RTT 来建立网络模型，并依靠精准的 Pacing 机制控制发送节奏。在日常排障中，抓包能直观展示传输的结果与宏观表现，而读取发送端的 Socket 内部状态，才是揭示真实控制行为的终极钥匙。

## 规范依据

- [RFC 5681：TCP Congestion Control](https://www.rfc-editor.org/rfc/rfc5681.html)
- [RFC 3168：Classic ECN](https://www.rfc-editor.org/rfc/rfc3168.html)
- [RFC 9438：CUBIC](https://www.rfc-editor.org/rfc/rfc9438.html)
- [IETF CCWG：BBR Congestion Control Internet-Draft](https://datatracker.ietf.org/doc/draft-ietf-ccwg-bbr/)

## 导航

[上一章：第22章 流量控制](./03-flow-control.md) · [所属篇：第五篇](../05-reliability-performance.md) · [下一章：第24章 延迟、吞吐量和带宽时延积](./05-latency-throughput-bdp.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
