# 第18章 TIME_WAIT、CLOSE_WAIT 和连接释放

有时候你的应用明明已经调用了 `close`，但在系统里用命令一看，这条 TCP 连接居然还在。当你在排查网络问题时看到 `TIME-WAIT` 或 `CLOSE-WAIT` 状态，不妨先问自己三个问题：现在是连接的哪一端处于这个状态？触发当前状态的最后一个数据包是什么？这个状态已经持续了多久？搞清楚这三个问题，你就能判断这到底是 TCP 协议正常的短暂停留，还是你的应用存在资源泄露。

> **提示**：在 RFC 文档的状态图中，这两个状态通常带连字符，写成 `TIME-WAIT` 和 `CLOSE-WAIT`。而在 Windows 的 `Get-NetTCPConnection` 命令输出中通常显示为 `TimeWait`、`CloseWait`，Linux 的 `ss` 命令输出则带有连字符。为了保持严谨，本章正文统一沿用 RFC 的标准写法。

## 两个状态来自两条完全不同的路线

TCP 断开连接时，典型的状态变化（即我们常说的“四次挥手”）如下：

```text
主动结束发送的一端                    先收到 FIN 的一端

ESTABLISHED                           ESTABLISHED
    | 发送 FIN                            | 收到 FIN，发送 ACK
FIN-WAIT-1        ---------------->    CLOSE-WAIT
    | 收到 ACK                            | 应用继续处理或发送
FIN-WAIT-2                            CLOSE-WAIT
    | 收到 FIN，发送 ACK                   | 应用发送 FIN
TIME-WAIT          <----------------   LAST-ACK
    | 保留期到期                           | 收到最终 ACK
CLOSED                                CLOSED
```

从上面这张图可以看出这两个状态的本质区别：

- **`TIME-WAIT`**：出现在连接已经走到最后一步、也就是发送了最终确认（ACK）的那一端。到了这一步，协议层该做的事已经做完，何时彻底释放连接，全靠一个计时器来决定。
- **`CLOSE-WAIT`**：出现在已经收到对方的 FIN（意味着对方不再发送数据），但本地应用还没结束发送的那一端。要离开这个状态，完全取决于你的应用代码什么时候去调用底层的 `close` 或 `shutdown`。

通常来说，**主动发起关闭的一方**最终会进入 `TIME-WAIT` 状态。而如果双方巧合地同时发起了关闭，两端都有可能进入 `TIME-WAIT`。具体会走哪条状态分支，完全看网络中 FIN 和 ACK 报文的到达顺序。

## TIME-WAIT 为什么要“恋恋不舍”？

进入 `TIME-WAIT` 状态后，系统依然会保留这条连接的“身份信息”一段时间，这并不是浪费资源，而是 TCP 协议为了保证可靠性设计的安全机制。它的主要作用有两个：

### 作用一：兜底对方重传的 FIN 报文

假设主机 A 收到了主机 B 发来的 FIN 报文，并且回复了最终的 ACK：

```text
B (LAST-ACK) ---- FIN ----> A
B            <--- ACK ----- A (TIME-WAIT)
```

如果 A 发出的这个 ACK 在网络中不幸丢失了，B 会因为迟迟等不到确认而重传它的 FIN。如果 A 此时已经彻底清除了连接记录，收到重传的 FIN 就会摸不着头脑，直接回复一个 RST（重置）报文，这并不符合 TCP 正常关闭的预期。

而有了 `TIME-WAIT` 状态的缓冲，A 就能认出这是那条刚刚关闭的连接重传的 FIN，并再次给 B 回复 ACK。根据 RFC 的状态机设计，A 在 `TIME-WAIT` 期间如果再次收到相应的 FIN，还会重新刷新它的等待计时器。这样一来，B 最终就能顺利拿到确认，从 `LAST-ACK` 状态中解脱出来。

### 作用二：隔离旧连接里的“迟到”报文

我们知道，一条 TCP 连接是由“四元组”（源 IP、源端口、目标 IP、目标端口）唯一标识的。当一条连接关闭后，由于复杂的网络环境，说不定还有一些延迟、重复或者重传的旧报文段（Segment）正在路上飘着。

如果不等一等，立马用同一个四元组建立起一条新连接，那些迷路的“旧报文”就有可能突然杀到，被新连接当成有效数据接收下来，导致数据错乱。因此，强制保留一段时间，能让这些旧报文在网络中耗尽寿命自然消亡，从而在时间维度上干净利落地隔离开新旧连接。

在经典的 TCP 规范中，我们用 **MSL**（Maximum Segment Lifetime，报文段最大生存时间）来定义一个数据包在网络中最多能存活多久。而 `TIME-WAIT` 的等待时间通常被设定为它的两倍（即 2MSL）：

$$
T_{\mathrm{TIME\text{-}WAIT}}=2\times \mathrm{MSL}
$$

不过，这只是协议层面的一种理想模型。到了具体的操作系统（如 Windows、Linux），它到底等多久、是否允许复用，以及可以通过哪些内核参数进行微调，完全属于实现细节（甚至不同的 Linux 内核版本、不同的网络命名空间表现都不一样）。所以，在做网络诊断时，你应该记录真实的等待时间，并把 `2MSL` 仅仅作为一个协议概念来理解。

## TIME-WAIT 的幕后管家：内核

当应用程序调用 API 关闭 Socket 之后，维护 TCP 状态的工作就交接给了操作系统内核。内核会默默接管这些进入 `TIME-WAIT` 的连接，维护一份精简的记录。了解了这一点，你就能解释排查时常遇到的这些“诡异”现象：

- **程序都退出了，连接怎么还在？** 这是正常的，应用进程虽然结束了，但内核还在履行 `TIME-WAIT` 的倒计时职责。
- **为什么查不到 PID？** 使用 `netstat` 或 `ss` 这样的工具查询时，你会发现这些状态所属的进程是空的，或者挂在系统级进程名下，找不到原应用的 PID。
- **服务会因此拒绝访问吗？** 同一个服务端程序仍然能继续接受新连接，因为新来的客户端通常会使用新的临时端口，此时的四元组是全新的，并不会和 `TIME-WAIT` 的旧连接冲突。
- **还需要手动清理吗？** 完全不需要，倒计时一结束内核就会自动销毁记录。

那么，服务器上出现大量 `TIME-WAIT` 到底是好是坏呢？这不能一概而论，你需要结合系统的请求并发量、当前端是否是主动关闭方、对端地址分布、临时端口池大小以及内存占用等指标综合来看。如果你的业务全是高并发的 HTTP 短连接，那 `TIME-WAIT` 数量必然会很高，你可以用下面这个简单的公式来估算：

$$
N\approx \lambda\times T
$$

其中，$\lambda$ 是每秒钟进入 `TIME-WAIT` 状态的连接数，$T$ 是平均保留的时间（秒）。比如你每秒处理 100 条短连接，系统等待时间是 60 秒，那服务器上稳态的 `TIME-WAIT` 数量大概维持在 6000 左右。有了这个理论依据，你就能快速判断当前的连接数是否在业务预期的合理范围之内了。

## CLOSE-WAIT：把决定权交给本地应用

当本地机器收到对方发来的有效 FIN 报文时，内核会在底层回复确认，并在应用层给你抛出一个 EOF（比如 Python 里 `recv` 返回空字节 `b""`）。至此，连接在本地机器上就进入了 `CLOSE-WAIT` 状态：

```text
对端的发送方向：数据 ... FIN -> 本端应用程序 recv 最终返回 b""
本端的发送方向：通道依然敞开，本端可以继续把没发完的响应发给对方
```

接下来，应用层代码在发完最后的数据后，应当主动调用 `shutdown(SHUT_WR)` 或 `close` 来结束连接。此时系统才会真正发出 FIN 报文，并把状态推进到 `LAST-ACK`。如果你的应用程序磨磨蹭蹭，迟迟不释放这个 Socket，那这条连接就会一直僵死在 `CLOSE-WAIT` 状态。

短暂出现 `CLOSE-WAIT` 属于极其正常的 TCP 流程。但如果你发现服务器上出现**长期、大量、甚至不断堆积**的 `CLOSE-WAIT`，那大概率是你的代码或者业务逻辑出 Bug 了，常见的“元凶”有：

- **忘记关门**：代码读到了 EOF，但却没有写对应的关闭逻辑；
- **异常跳出**：代码抛出了异常导致流程提前中断，而 Socket 没有被写在 `finally` 块里，也没有使用上下文管理器（如 `with` 语法）保护；
- **线程阻塞**：处理业务的线程死锁了，或者卡在了慢查询的数据库调用、消息队列以及其他外部接口上，导致执行不到关闭 Socket 的代码行；
- **引用泄漏**：Socket 对象被其他工作线程、文件描述符或者全局变量死死拽着，无法被垃圾回收机制释放；
- **特殊的半关闭设计**：有的应用协议允许在对方“半关闭”之后，这边还能长时间进行耗时的计算并返回结果，不过即便是这种设计，持续时间也必须在可控预期内。

需要强调的是，处在 `CLOSE-WAIT` 状态下的连接背后，**往往还站着一个活生生的进程和大量占用的内存、文件句柄资源**。因此，当你排查这类问题时，顺藤摸瓜找到对应的 PID，打出它的线程堆栈（Thread Dump），结合打开的文件句柄数和业务日志，往往能直接揪出罪魁祸首。

## 可控实验：亲手制造状态窗口

纸上得来终觉浅，我们不如写一段 Python 脚本，故意拉长这些瞬态，亲眼看看它们。将下面的代码保存为 `wait_states.py`：

```python
import argparse
import socket
import time

ADDR = ("127.0.0.1", 18080)


def run_server(count: int, hold: float) -> None:
    with socket.socket() as listener:
        listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        listener.bind(ADDR)
        listener.listen(128)
        print("LISTEN", ADDR, flush=True)
        for index in range(count):
            conn, peer = listener.accept()
            try:
                while conn.recv(4096):
                    pass
                print(index, peer, "CLOSE-WAIT window", hold, "s", flush=True)
                time.sleep(hold)
                conn.sendall(b"ok")
                conn.shutdown(socket.SHUT_WR)
            finally:
                conn.close()


def run_client(count: int) -> None:
    for index in range(count):
        with socket.socket() as sock:
            sock.connect(ADDR)
            print(index, "local", sock.getsockname(), flush=True)
            sock.sendall(b"one request")
            sock.shutdown(socket.SHUT_WR)
            while sock.recv(4096):
                pass


parser = argparse.ArgumentParser()
parser.add_argument("role", choices=("server", "client"))
parser.add_argument("--count", type=int, default=20)
parser.add_argument("--hold", type=float, default=0.0)
args = parser.parse_args()

if args.role == "server":
    run_server(args.count, args.hold)
else:
    run_client(args.count)
```

### 实验 A：捕捉 CLOSE-WAIT

我们让服务端为每条连接故意休眠 30 秒，拉长处理窗口：

```powershell
python .\wait_states.py server --count 1 --hold 30
```

打开另一个终端，运行客户端：

```powershell
python .\wait_states.py client --count 1
```

**发生了什么？** 客户端发完请求后主动发送了 FIN 并等待响应。服务端的内核确认了这个 FIN，但在服务端 Python 进程休眠的这 30 秒内，服务端的连接会一直稳定停留在 `CLOSE-WAIT` 状态，而此时客户端通常处于 `FIN-WAIT-2` 状态。30 秒一过，服务端苏醒并发出了响应和最终的 FIN，双方连接顺利释放。

### 实验 B：制造大量短连接引发 TIME-WAIT

这次我们让服务端迅速处理完 20 条并发连接，不再等待：

```powershell
python .\wait_states.py server --count 20 --hold 0
```

接着在客户端发起请求：

```powershell
python .\wait_states.py client --count 20
```

**发生了什么？** 客户端主动发起了短连接，并在发送完后率先结束发送通道，随后确认了服务端的 FIN。由于客户端是“主动关闭方”，当你去查系统状态时，就会发现客户端机器上堆积了一批 `TIME-WAIT` 连接。你可以对比客户端终端打印的临时端口，与系统状态列表里的记录一一印证。

## 实战查阅：如何在 Windows 和 Linux 中统计状态

当你在做刚刚的实验时，你可以立刻用系统命令去观察连接池的状态。

在 **Windows** 环境下，你可以使用 PowerShell 过滤出实验用到的 `18080` 端口，并把当前的所有连接状态列出来：

```powershell
Get-NetTCPConnection |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 } |
    Sort-Object State, LocalPort |
    Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
```

如果只是想分别统计这两个状态的数量，可以使用如下命令：

```powershell
$timeWait = Get-NetTCPConnection -State TimeWait -ErrorAction SilentlyContinue |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 }
$closeWait = Get-NetTCPConnection -State CloseWait -ErrorAction SilentlyContinue |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 }
"TIME_WAIT=$($timeWait.Count) CLOSE_WAIT=$($closeWait.Count)"
```

如果你使用的是 **Linux** 机器，`ss` 命令是你的最佳帮手（它能比老旧的 `netstat` 提供更多带有计时器的细节）：

```bash
ss -tanpo state time-wait | grep ':18080'
ss -tanp state close-wait | grep ':18080'
```

正如我们前面提到的，不要被系统命令中输出的 `TimeWait`、`time-wait` 或者 `TIME_WAIT` 迷惑，无论是大小写还是连字符的区别，它们在底层都指向同一个经典的 TCP 协议状态。

## 如何借助 Wireshark 寻找蛛丝马迹？

除了系统命令，网络抓包也是非常关键的手段。在 Wireshark 中使用 `tcp.port == 18080` 进行过滤后，你需要对着每一次四次挥手的报文交互，依次验证以下五个细节：

1. **谁先提出了分手？** 找出先发送 FIN 的一端，这端往往就是随后进入 `TIME-WAIT` 的“头号候选人”。
2. **对端回应得够不够快？** 观察另一端是在什么时间点回复了 ACK，回复确认后，它就正式迈入了 `CLOSE-WAIT` 阶段。
3. **还有未尽事宜吗？** 检查在 `CLOSE-WAIT` 期间，对端是否还在源源不断地发送最后的响应数据。
4. **终场哨声由谁吹响？** 找到最后一个 FIN 报文以及对它的最终 ACK 确认。
5. **网络是否发生了丢包？** 如果你看到了重传的 FIN，就要去排查最初的那个 ACK 是不是在抓包节点的网络链路上丢失了。

需要注意的是，Wireshark 只能看到网络中流动的数据包，它**无法**告诉你应用层究竟有没有正确关闭文件句柄。这时候，你就得把网络抓包、操作系统的连接状态（PID）、应用日志以及代码的线程堆栈像拼图一样拼凑起来，才能彻底还原事故现场。

## 面对大量堆积状态的诊断锦囊

当监控面板上这两种状态的数量飙升时，不要慌张，遵循以下套路逐步排查。

### 应对海量 TIME-WAIT

请按照以下顺序收集证据：

1. **查归属**：按照本地端口、对方 IP 和对方端口进行分类汇总，先搞清楚是哪个具体的业务在疯狂产生这些连接。
2. **抓现行**：通过抓包验证到底是谁在主动发 FIN。如果是服务端，想想这是否符合你的架构预期（比如原本应该由客户端关连接，或者原本应该用长连接）。
3. **算笔账**：测量当前的每秒新建连接数以及系统设定的保留时间，套用 $N\approx\lambda T$ 的公式算一算，现在的数量到底算不算过分。
4. **看后果**：检查系统监控，看看是否已经出现了诸如“连接失败”、“临时端口耗尽（Port Exhaustion）”、“地址绑定失败”或是明显的内存压力与网络延迟激增。
5. **寻优化**：从根源入手，评估是否可以引入数据库连接池、复用 HTTP Keep-Alive 或者改用长连接，减少无谓的建连和销毁开销。
6. **慎调优**：如果非要修改内核参数或者开启端口复用策略（如 `tcp_tw_reuse`），一定要先查阅操作系统的官方文档，并在测试环境中模拟真实负载验证效果后再上生产环境。

顺便提一句，开启 `SO_REUSEADDR` 选项主要影响的是套接字的地址绑定与复用规则，并且在不同平台上表现大相径庭。在诊断时，你不应把它与 `TIME-WAIT` 保障网络可靠性的底层逻辑混为一谈。

### 应对海量 CLOSE-WAIT

`CLOSE-WAIT` 堆积往往意味着应用层“生病”了，排查思路应聚焦于代码和进程：

1. **顺藤摸瓜**：立刻定位出持有这些 Socket 的进程 PID，并导出它的线程调用栈。
2. **查阅日志**：翻看应用日志，确认代码是否已经感知到了网络层的 EOF、对端连接断开或者请求被取消的信号。
3. **区分良恶**：观察这些条目存活的时间。如果是几百毫秒的短暂状态，随它去；如果是挂了几个小时的死连接，那就得深挖了。
4. **复查代码**：仔细走查源码，确认所有的正常返回路径、异常抛出路径、超时打断逻辑以及任务取消分支，最终是否都能老老实实地走进释放资源的 `close()` 代码块里。
5. **排查阻塞**：如果你发现线程栈卡住了，重点排查线程池耗尽、数据库慢查询卡死、死锁或者发送缓冲区打满等导致业务线程无法往下执行的问题。
6. **建立防线**：为了防止未来重蹈覆辙，应将“活跃连接数”、“文件句柄数（FD）”以及“`CLOSE-WAIT` 的驻留时长”纳入你的常态化监控体系中。

## 随堂小测

1. 当最终的 ACK 报文在网络中不慎丢失后，处于 `TIME-WAIT` 状态的一端还能发挥什么作用？
2. 应用程序进程都已经彻底退出了，系统里竟然还挂着一堆 `TIME-WAIT` 连接，是谁在默默替它“收拾残局”？
3. 当服务端进入 `CLOSE-WAIT` 状态时，意味着哪一个方向的数据传输已经终结？此时服务端还能继续往外发数据吗？
4. 假设你的系统每秒处理 200 个短连接，系统实测的 `TIME-WAIT` 保留时间为 50 秒，请估算系统平时大概会维持多少个 `TIME-WAIT` 状态？
5. 有人发给你一张截图，说服务器上查出了 1000 条 `TIME-WAIT` 连接，你还需要让他补充哪些监控数据，才能严谨地判断这到底是不是一个故障？

**参考答案要点**：
能成功识别出对方重传的 FIN 并再次兜底回复 ACK；由操作系统内核底层的 TCP 协议栈接管维护；对端（客户端）向服务端发送数据的方向已关闭，但服务端依然可以向对端发送剩余的数据；大约 10,000 条（$200 \times 50$）；还需补充连接新建速率、具体留存时间、四元组的重合度分布、抓包确认主动关闭方是谁，以及是否有临时端口耗尽、内存吃紧、真实业务请求延迟等具体指标才能下定论。

## 本章小结

- **`TIME-WAIT` 的意义**：为可能丢失的最终 ACK 提供兜底重传机制，并在时间维度上阻断网络中迷路的“旧报文段”，从而保护后续同端口的新连接。
- **`CLOSE-WAIT` 的本质**：标志着网络协议层已收到对端的告别（FIN），但连接资源能否释放，完全受制于本地应用程序何时执行收尾逻辑并调用关闭函数。
- **正视短暂停留**：这两个状态的短暂出现都是 TCP 正常运转的一环，排查优先级应完全取决于它们的存活时间、增长趋势是否失控以及对系统资源的实际消耗。
- **理论与现实**：`2MSL` 是 RFC 协议给出的严谨数学模型，而在实际工程中，等待时间、端口复用策略等皆由操作系统内核的具体实现说了算。
- **立体排查**：不要只盯着状态数量，你需要结合业务并发速率、主动端角色、四元组分布、进程 PID、应用日志和 Wireshark 抓包，才能把排查的线索真正串联起来。

## 参考资料

- [RFC 9293：TCP 关闭、TIME-WAIT 与状态处理](https://www.rfc-editor.org/rfc/rfc9293.html)
- [Get-NetTCPConnection 文档](https://learn.microsoft.com/powershell/module/nettcpip/get-nettcpconnection)
- [ss(8) Linux 手册](https://man7.org/linux/man-pages/man8/ss.8.html)

## 导航

- [上一章：第17章 连接关闭与半关闭](./03-close-half-close.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第19章 RST、异常断开和半开连接](./05-rst-half-open.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
