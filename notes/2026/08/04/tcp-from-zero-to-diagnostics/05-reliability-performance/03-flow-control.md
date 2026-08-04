# 第22章 流量控制

发送端很快，接收端应用暂停读取 10 秒。开始几毫秒内数据仍持续到达，随后发送端停下来，连接也保持 ESTABLISHED。这个现象来自 TCP 流量控制：接收 TCP 用窗口告诉对方，自己当前还愿意接收多少序列空间。

## 从接收缓冲区理解 rwnd

每个方向都有独立的发送和接收状态。A 向 B 发送数据时，B 的 TCP 把按序数据放进接收缓冲区，B 的应用通过 `recv` 取走字节。应用读取释放空间后，B 可以向 A 公布更大的接收窗口。

这个窗口常记为 `rwnd`。若 B 当前下一期待字节为 `RCV.NXT`，公布窗口为 `RCV.WND`，B 愿意接受的序列范围可写为：

$$
[RCV.NXT,\ RCV.NXT + RCV.WND)
$$

TCP 首部中的 Window 字段由报文发送者公布，描述报文发送者在反方向上的接收能力。分析抓包时需要先确认数据方向：客户端发给服务端的 ACK，其 Window 字段约束服务端未来发给客户端的数据。

窗口通常与 Socket 接收缓冲区可用空间相关。操作系统还会保留管理开销、执行自动调节并采用自己的记账方式。因此，`SO_RCVBUF`、进程内存、应用任务队列和线上 `rwnd` 具有联系，各自数值口径仍需分别测量。业务处理能力也有独立边界：应用可能快速读入内存，随后在业务队列中积压，此时 TCP 窗口依然很大。

## 滑动窗口怎样移动

发送端维护几个关键位置：

- `SND.UNA`：最早尚未累计确认的序列号；
- `SND.NXT`：下一个准备发送的序列号；
- `SND.WND`：对端最近公布的接收窗口。

按基础模型，先计算原始可用窗口：

$$
U_{raw}=SND.UNA+SND.WND-SND.NXT
$$

窗口发生收缩且 `SND.NXT` 已越过新右边界时，$U_{raw}$ 可能为负值。用于发送新数据的空间取为：

$$
U_{new}=\max(0,U_{raw})
$$

假设接收端公布 `Ack = 500001`、`rwnd = 16384` 字节，发送端已经发到 `SND.NXT = 508193`：

$$
U_{raw}=U_{new}=500001+16384-508193=8192\text{ bytes}
$$

已有 8192 字节处于窗口内在途状态，发送端还能继续发送 8192 字节。新 ACK 推进 `SND.UNA`，或 Window Update 增大 `SND.WND`，窗口右边界便向前滑动。

接收窗口只是一个上限。发送端可用的在途额度还受拥塞窗口约束：

$$
\text{允许在途上限}=\min(rwnd,cwnd)
$$

实际发送还需要扣除当前 FlightSize，并要求应用已经向发送缓冲区提供数据。由此可以形成四种独立瓶颈：接收端空间、网络拥塞控制、发送端应用供数、Socket/系统资源。

## Window Scale 的方向与计算

TCP 固定首部的 Window 字段只有 16 位，原始最大值为 65535。RFC 7323 的 Window Scale 选项在握手时为每个方向协商一个二进制移位数。双方的 SYN 都携带该选项时扩展生效；任一端省略该选项时，本连接按移位数 0 处理两个方向。若某端在成功协商后发送过 `shift.cnt = 7`，它以后公布的接收窗口原始值需要按下式还原：

$$
\text{calculated window}=\text{raw window}\times2^7
$$

例如线上字段为 4096：

$$
4096\times128=524288\text{ bytes}=512\text{ KiB}
$$

缩放因子最大为 14，对应可表达小于 $2^{30}$ 字节的窗口。两个方向的因子可以不同。一端发送的 Window Scale 表示该端自身未来公布接收窗口时使用的移位数。

SYN 和 SYN+ACK 中的 Window 字段直接按原始 16 位值解释，缩放从后续报文开始应用。Wireshark 完整看到握手后，通常会同时显示 `Window size value` 与 `Calculated window size`。抓包从连接中途开始时，分析器缺少协商因子，原始 Window 字段仍是事实，换算值需要从端点状态或完整握手补齐。

## 从窗口缩小到 Zero Window

设接收缓冲区可用于数据的空间为 64 KiB。应用暂停读取后，已缓存数据从 16 KiB 增至 48 KiB，可公布空间便从约 48 KiB 降至约 16 KiB。数据继续进入，接收端最终可能发送 `Window = 0`。这条 ACK 表示当前接收窗口右边界与下一期待字节重合。

发送端看到零窗口后暂停发送普通新数据，并进入持续探测逻辑。窗口更新 ACK 自身也可能在网络中丢失；若发送端永远静候，它可能错过窗口重新打开。RFC 9293 因此要求支持 Zero-Window Probing：发送端定期发送至少一个字节的新数据（有可用数据时）或重传数据，接收端回复当前 Ack 和窗口。规范建议第一次探测在零窗口持续一个 RTO 后发生，后续间隔指数增长。

接收应用恢复 `recv` 后，缓冲区出现空间，接收端发送 Window Update。发送端收到更新便继续发送。这个等待通常称为 persist 状态或 persist 机制，它解决窗口更新可靠到达的问题；RTO 丢包恢复和 persist 窗口探测使用相邻的计时概念，各自触发原因清晰不同。

抓包中常见分析标签包括 `TCP Window Full`、`TCP ZeroWindow`、`TCP ZeroWindowProbe`、`TCP ZeroWindowProbeAck` 和 `TCP Window Update`。Window 字段和 Seq/Ack 属于线上事实，这些名称属于 Wireshark 对上下文的归类。

## 四种相似的“发送停顿”

看到发送端的新数据暂时停发时，可以按限制来源逐项检查：

| 现象 | 报文与端点证据 | 主要限制 |
| --- | --- | --- |
| `rwnd = 0` | 对端 ACK 公布零窗口，后续出现探测 | 接收 TCP 缓冲空间 |
| `rwnd` 很小且反复更新 | Window 随接收应用读取逐步打开 | 接收消费速度 |
| `rwnd` 充足、`cwnd` 较小 | 发送端 `ss -ti` 显示拥塞窗口受限 | 网络路径探测与恢复 |
| 两个窗口都充足、FlightSize 很小 | 发送缓冲区和应用日志显示供数间歇 | 发送应用或上游处理 |

这张表也解释了流量控制与应用背压的衔接。服务端暂停 `recv`，内核接收缓冲区最终占满，`rwnd` 把压力传回对端 TCP；服务端持续 `recv` 并把数据放入无限业务队列时，TCP 层看到的空间保持充足，压力会转移到进程内存和业务延迟。第28章会用有限队列、暂停读取和过载拒绝把这条反馈链补完整。

窗口更新本身通常由纯 ACK 携带，也可以随反向数据一起发送。发送端会用 Ack、Seq 与窗口更新状态判断一份通告是否足够新，降低旧 ACK 乱序到达造成窗口回退的影响。分析者可以追踪“窗口右边界”：

$$
\text{right edge}=Ack+\text{calculated window}
$$

例如 `Ack = 100000`、换算窗口 32768，右边界为 132768。下一份 ACK 推进到 108192，同时窗口降为 24576，右边界仍为 132768；这表示接收端接纳了 8192 字节，应用暂时没有释放新空间。若窗口变为 40960，右边界推进到 149152，说明接收端新开放了更多序列空间。

分析双向连接时可以各画一条右边界曲线。客户端公布的曲线约束服务端发送，服务端公布的曲线约束客户端发送。方向标注清楚后，窗口瓶颈与数据方向会自然对应。

## 受控实验：暂停接收应用

这个实验复用第20章的 `tcp-rx` 命名空间，无需添加丢包。先移除旧规则：

```bash
sudo tc qdisc del dev veth-tx root 2>/dev/null || true
sudo ip netns exec tcp-rx tc qdisc del dev veth-rx root 2>/dev/null || true
```

终端 A 在命名空间内启动一个服务端。它请求较小接收缓冲区，连接建立后暂停读取 12 秒，再开始持续读取：

```bash
sudo ip netns exec tcp-rx python3 - <<'PY'
import socket
import time

srv = socket.socket()
srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
srv.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, 8192)
srv.bind(("10.200.20.2", 18080))
srv.listen(1)
conn, peer = srv.accept()
print("accepted", peer,
      "effective_rcvbuf", conn.getsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF),
      flush=True)
time.sleep(12)
total = 0
while True:
    chunk = conn.recv(65536)
    if not chunk:
        break
    total += len(chunk)
print("received", total)
conn.close()
srv.close()
PY
```

Linux 可能对 `SO_RCVBUF` 请求值做倍增或自动调节，所以程序打印有效值。终端 B 抓包：

```bash
sudo tcpdump -i veth-tx -s 0 -w chapter22.pcap 'tcp port 18080'
```

终端 C 发送 32 MiB，并记录发送耗时。循环显式展示本地发送在对端窗口耗尽后会等待：

```bash
python3 - <<'PY'
import socket
import time

data = memoryview(b"x" * (32 * 1024 * 1024))
s = socket.create_connection(("10.200.20.2", 18080))
started = time.monotonic()
sent = 0
while data:
    n = s.send(data)
    sent += n
    data = data[n:]
print("send completed", sent, "bytes in", time.monotonic() - started, "s")
s.shutdown(socket.SHUT_WR)
s.close()
PY
```

### 预期现象

1. 握手后 Window 随数据进入接收缓冲区逐步下降，可能降到零。
2. 服务端暂停期内，客户端发送循环出现明显等待，连接仍保持建立状态。
3. 较长暂停可看到零窗口探测及其 ACK；实际首次间隔与本机 RTO、实现策略有关。
4. 12 秒后服务端读取数据，Window Update 打开窗口，发送继续进行。

在 Wireshark 中使用：

```text
tcp.port == 18080 &&
(tcp.analysis.zero_window || tcp.analysis.zero_window_probe ||
 tcp.analysis.zero_window_probe_ack || tcp.analysis.window_update)
```

选中 ACK，手工记录原始 Window、缩放因子、换算窗口、Ack 和时间。若某标签未出现，仍可沿 Window 数值曲线和客户端耗时完成分析。

客户端发送完成后，两段 Python 程序会自行退出；随后在抓包终端按 `Ctrl+C` 保存 pcap。

缺少 `netem` 的 Windows 或 macOS 环境也能完成本实验：把地址改为 `127.0.0.1`，在两个终端直接运行同样的 Python 程序，并在回环接口抓包。回环卸载可能改变可见分段，Window 变化与发送阻塞仍可作为两类独立证据。

## 理解检查

1. 报文原始 Window 为 3000，发送该报文的一端在握手中声明 scale 5，换算窗口是多少字节？
2. `SND.UNA=10000`、`SND.WND=12000`、`SND.NXT=17500` 时，$U_{raw}$ 与 $U_{new}$ 各是多少？
3. 接收应用已经把数据读进自己的任务队列时，线上 `rwnd` 可能呈现怎样的变化？
4. Zero-Window Probe 解决哪条控制信息可能丢失的问题？

## 小结

流量控制保护接收端的序列空间和缓冲能力。`rwnd` 由接收端公布，Window Scale 决定线上 16 位字段的换算方式，滑动窗口随 Ack 和应用读取向前移动。零窗口让普通发送暂停，persist 探测保证窗口重新打开的消息能够被发现。应用业务队列、`rwnd` 与 `cwnd` 需要作为三个层次分别观察。

## 规范依据

- [RFC 9293 第3.8.6节：窗口管理与零窗口探测](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6)
- [RFC 7323 第2节：Window Scale](https://www.rfc-editor.org/rfc/rfc7323.html#section-2)

## 导航

[上一章：第21章 乱序、重复数据和 SACK](./02-reordering-duplicates-sack.md) · [所属篇：第五篇](../05-reliability-performance.md) · [下一章：第23章 拥塞控制](./04-congestion-control.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
