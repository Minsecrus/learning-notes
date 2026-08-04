# 第37章 TCP Keepalive 与应用层心跳

当一个 Socket 在操作系统中显示为 `ESTABLISHED` 状态时，它仅仅意味着本机依然保留着这条连接的状态。实际上，远端主机可能已经断电，进程可能已经崩溃退出，应用线程或许正卡在死循环里，或者中间的代理服务器早就把这个空闲的映射回收了。不同的故障发生在不同的网络和应用层次，因此我们需要不同层面的探测机制来发现它们。

在本章中，我们将健康检查拆解为三个可验证的问题：“网络路径是否还能响应 TCP？”“远端应用是否还在正常处理协议？”以及“底层业务依赖是否能够正常工作？”。

## 一、健康检查的三层含义

### 1. TCP Keepalive：探测空闲连接的传输路径

TCP Keepalive 是一种由操作系统发起的探测机制，专门用于检查长时间空闲的连接。只要对端的 TCP 协议栈里还保留着连接状态，通常就会回复一个 ACK 报文；如果本端持续收不到有效的响应，最终就会判定并报告该连接已经失效。

TCP Keepalive 主要能发现以下几类问题：

- 远端主机突然消失，或者网络路径中出现了“黑洞”；
- NAT 设备、防火墙或代理服务器的连接映射状态已经丢失，导致后续的探测报文被直接丢弃或触发 RST 重置；
- 远端主机重启后，丢失了原有的连接状态。

需要注意的是，Keepalive 探测完全由操作系统内核处理。就算远端的应用线程已经死锁或停止运行，远端的内核依然能正常回复 ACK 确认探测。因此，Keepalive 成功仅仅代表 TCP 这一层是连通的（网络可达）。至于应用层到底还能不能处理请求，我们需要更高层次的证据。

当前的 TCP 基础规范 RFC 9293 规定，Keepalive 机制需要由应用层针对每个连接手动启用，默认处于关闭状态；而且规范建议的默认空闲触发时间至少是两个小时。不过，现代操作系统都提供了更精细的系统级或 Socket 级配置参数。由于各平台的参数名称、单位、默认值以及重试次数都不尽相同，在编写网络程序时，最好显式读取并记录实际使用的配置。

### 2. 应用层心跳：让协议解析器参与进来

应用层心跳通常由一对带有编号（ID）的 `PING/PONG` 消息组成，例如：

```text
client → server: PING request_id=1842
server → client: PONG request_id=1842 status=ready
```

服务端只有在成功读取、解析并处理了 `PING` 消息之后，才会返回 `PONG`。这就意味着，应用层心跳能够覆盖 Socket 层以上的事件循环、线程池调度以及协议解析逻辑。除此之外，心跳消息里还可以顺便携带协议版本、会话租约（Lease）或者当前系统负载等信息，但切记：心跳包的字段应当尽量精简、易于验证，并设定严格的长度上限。

在实现应用心跳时，建议记录每一次心跳的发送时刻、请求 ID、超时截止时刻、响应时刻以及所在的连接 ID。计算往返时间（RTT）时，务必使用本机的单调时钟（Monotonic Clock），以免受到系统时间校准（如 NTP 同步）的干扰。收到响应后，必须将其与对应的请求 ID 进行严格匹配，对于那些迟到的响应，则应按照具体的协议策略进行丢弃或异常处理。

### 3. 业务健康检查：执行代表性的业务操作

业务层的健康检查通常会真实调用一次关键的底层依赖，比如读取一条已知的数据记录，或是执行一笔没有副作用的“合成事务”。这类检查旨在回答一个终极问题：“当前服务是否真的具备完成目标业务操作的能力？”。像负载均衡器发起的存活检查（Liveness Probe）、容器编排系统（如 Kubernetes）的就绪检查（Readiness Probe），以及端到端的合成监控，本质上都属于这一层，只不过它们的覆盖范围和侧重点各有不同。

别忘了，健康检查本身也会消耗系统资源。因此，它的执行路径、检查频率以及超时设置应该尽可能贴近真实业务的特征。为了防止健康检查压垮系统，我们还需要为其设定并发上限，甚至使用专用的隔离账户，并合理运用结果缓存策略（例如几秒内复用同一次数据库检查的结果）。

## 二、同一个故障，三种机制看到的不同结果

| 故障 | TCP Keepalive | 应用心跳 | 业务健康检查 |
| --- | --- | --- | --- |
| 应用线程停止读取 | 对端内核仍可回 ACK | PONG 超时 | 代表性操作超时 |
| 进程正常退出 | FIN 通常很快到达 | 当前 I/O 发现 EOF | 检查连接失败 |
| 主机突然断电 | 多次探测后超时 | 心跳截止时间到达 | 检查超时 |
| 中间路径静默丢包 | 多次探测后超时 | 心跳超时 | 检查超时 |
| 数据库不可用 | TCP 路径仍可响应 | 基础 PONG 可能正常 | 依赖检查失败 |
| 代理回收空闲连接 | 下一次探测或 I/O 暴露 | 周期消息可能维持映射 | 新检查连接可重新建立 |

表格里多次出现的“通常”二字，提醒我们实际的故障表现会因为操作系统实现和崩溃方式的不同而有所差异。例如，当进程正常退出时，操作系统通常会主动发送 FIN 报文挥手；但如果接收缓冲区里还有未读数据，或者发生了异常终止（Abortive Close），操作系统发出的可能就是 RST 报文了。而如果主机直接断电，连这种主动通知的机会都没有，对端只能傻傻地等待超时。

## 三、区分四类关键的时间参数

配置 TCP Keepalive 时，我们通常会接触到三个核心变量：

- `T_idle`：连接连续空闲多长时间后，才发送第一轮探测包；
- `T_interval`：在未收到有效响应时，相邻两次探测之间的间隔；
- `N`：在最终判定连接断开前，允许探测失败（未响应）的最大次数。

通过这三个变量，我们可以粗略估算出发现连接故障的时间上限：

$$
T_{detect}\approx T_{idle}+N\times T_{interval}+T_{scheduler}
$$

当然，不同的操作系统在何时发送首个探测、最后一次探测后等待多久、重传机制以及错误上报时机上，都存在实现细节上的差异。因此，这个公式主要用于架构设计时评估时间和数量级，生产环境的最终配置值还是需要通过受控实验来确认。

另外，在网络编程中还有三种容易混淆的计时器，它们各自解决不同的问题：

- **请求截止时间（Request Deadline / Timeout）**：应用层面上，一个业务操作被允许占用的最长总时间；
- **TCP 用户超时（TCP User Timeout，RFC 5482）**：当已发送的数据迟迟得不到 ACK 确认时，TCP 协议栈允许该连接继续保持的最大时长；
- **中间设备空闲超时（Middlebox Idle Timeout）**：NAT 设备、防火墙或代理服务器在看不到任何流量经过时，其内存中保留连接映射表项的时间。

如果 TCP 缓冲区里一直有尚未被确认的数据，连接实际上处于活跃的重传状态，这个时候 Keepalive 的空闲计时器通常根本不会启动。在这种情况下，反而是“请求截止时间”和“TCP User Timeout”能够更快速、更贴近地发现故障。归根结底，应用程序最清楚自己的业务时间预算，因此无论底层启用了什么机制，应用层都必须始终保留并强制执行自己的截止时间限制。

## 四、从业务容忍度反推参数配置

假设我们正在开发一个即时聊天系统，产品要求必须在 30 秒内发现并提示会话失效，同时我们知道网络路径中代理服务器的最短空闲回收时间是 60 秒。基于这些条件，我们可以推导出一套初始方案：

```text
应用心跳周期：20 s，加小范围随机抖动
PONG 截止时间：5 s
连续失败阈值：2 次
最长发现时间：约 45 s
TCP Keepalive：更长周期，作为路径级后备证据
请求截止时间：按每类业务操作单独定义
```

在上面的方案中，最长发现时间大约是 45 秒（20s + 20s + 5s）。如果产品目标是极其严格的 30 秒上限，我们就必须进一步缩短心跳周期，或者调低失败阈值。但缩短时间必然会增加在弱网环境下的误判率，这需要通过实际的弱网实验来反复验证。

在工程实践中，为了防止大量客户端在同一时刻集体发送心跳导致“雪崩”，通常会在心跳周期上加上一点随机抖动（Jitter）。此外，对于移动设备，高频心跳会频繁唤醒无线电基带，消耗大量电量和流量，必须谨慎评估；对于服务端，则需要仔细评估每秒的心跳 QPS、定时器开销以及海量心跳日志对存储的影响。

从安全和健壮性的角度考虑，心跳消息应当和普通业务消息一样，经过相同的身份认证和协议解析边界过滤。服务端必须严格限制心跳的频率、包长度和并发连接数；客户端则只接受当前活跃连接上、且请求 ID 完全匹配的响应。当网络断开并触发重连后，客户端应该生成一个全新的“连接世代标识（Epoch / Generation）”，以防上一个旧连接里姗姗来迟的响应报文污染了新会话的状态。

## 五、在 Windows 中配置并观察 Keepalive

在 Python 中，我们可以通过设置 Socket 选项 `SO_KEEPALIVE` 来启用 TCP 探测。下面我们编写一个跨平台的辅助函数：它会优先尝试使用 Windows 特有的 `SIO_KEEPALIVE_VALS` 控制码（需要注意，Windows 下的空闲和间隔时间单位是毫秒）；在其他平台上，则退化使用标准的 Socket 常量来配置：

```python
import os
import socket

def configure_keepalive(sock, idle_s=10, interval_s=3, count=3):
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 1)
    if os.name == "nt" and hasattr(socket, "SIO_KEEPALIVE_VALS"):
        sock.ioctl(socket.SIO_KEEPALIVE_VALS,
                   (1, idle_s * 1000, interval_s * 1000))
        count_option = getattr(socket, "TCP_KEEPCNT", None)
        if count_option is not None:
            sock.setsockopt(socket.IPPROTO_TCP, count_option, count)
        print("Windows keepalive enabled; count configured when supported")
        return

    for name, value in (("TCP_KEEPIDLE", idle_s),
                        ("TCP_KEEPINTVL", interval_s),
                        ("TCP_KEEPCNT", count)):
        option = getattr(socket, name, None)
        if option is not None:
            sock.setsockopt(socket.IPPROTO_TCP, option, value)
```

接下来的实验中，我们将服务绑定在本地 `127.0.0.1:3737`。服务端代码在接受连接后，提供了两种运行模式：正常响应的 `healthy` 模式，以及模拟应用层卡死的 `stall` 模式。

```python
import socket, sys, time

mode = sys.argv[1]                    # healthy 或 stall
with socket.socket() as listener:
    listener.bind(("127.0.0.1", 3737))
    listener.listen(1)
    conn, peer = listener.accept()
    with conn:
        print("accepted", peer, "mode", mode)
        if mode == "stall":
            time.sleep(120)           # 进程和 Socket 存活，应用停止读取
        else:
            with conn.makefile("rwb", buffering=0) as stream:
                for line in stream:
                    if line.startswith(b"PING "):
                        stream.write(b"PONG " + line[5:])
```

对应的客户端代码则同时支持纯空闲等待（`idle`）和发送应用心跳（`heartbeat`）两种模式。请将刚才写的 `configure_keepalive` 函数放在这个文件的顶部：

```python
import socket, sys, time

mode = sys.argv[1]                    # idle 或 heartbeat
with socket.create_connection(("127.0.0.1", 3737), timeout=5) as sock:
    configure_keepalive(sock, idle_s=10, interval_s=3, count=3)
    if mode == "idle":
        time.sleep(40)
    else:
        stream = sock.makefile("rwb", buffering=0)
        for request_id in range(1, 6):
            sock.settimeout(4)
            started = time.monotonic()
            stream.write(f"PING {request_id}\n".encode())
            reply = stream.readline()
            print(request_id, reply.rstrip(), time.monotonic() - started)
            time.sleep(2)
```

按以下顺序完成三轮实验观察（注意每次实验前都要重启服务端）：

1. 运行 `python server37.py healthy` 配合 `python client37.py heartbeat`：这是正常情况，客户端发出的每一个 `PING` 都能立刻得到匹配的 `PONG` 响应。
2. 运行 `python server37.py stall` 配合 `python client37.py heartbeat`：服务端应用层虽然卡死了，但底层的 TCP 栈依然会回复 ACK 确认 `PING` 报文的字节。不过，由于应用层迟迟没有返回 `PONG`，客户端在等待约 4 秒后，会触碰应用层截止时间，主动抛出超时异常。
3. 运行 `python server37.py stall` 配合 `python client37.py idle`：客户端不再发送业务心跳，仅仅依靠底层 TCP Keepalive。此时虽然远端应用层已经停止读取数据，但其操作系统的内核依然在孜孜不倦地回复 Keepalive 探测包。因此，即使过了 40 秒，客户端依然认为连接是存活的。

如果在 Wireshark 中使用 Npcap Loopback Adapter 抓包，可以使用以下过滤条件来观察探测过程：

```text
tcp.port == 3737
tcp.analysis.keep_alive || tcp.analysis.keep_alive_ack
```

通过抓包，你可以直观地看到：应用心跳包里包含了真实的 TCP 载荷数据，而 TCP Keepalive 探测包通常只是一个不带应用数据的“空报文”。需要说明的是，Wireshark 显示的 `[TCP Keep-Alive]` 标签纯粹是基于启发式规则推断出来的，你可以通过仔细核对报文的 Sequence Number、Acknowledgment Number 以及 TCP Length（通常为 0 或 1）来印证这一点。

再次强调：我们在代码中使用的超短计时器仅仅为了方便本地实验；在真实的生产环境中，必须严格根据业务的时间预算和服务器的承载能力来推导合理的参数。

## 六、Linux 实验扩展：模拟静默的路径中断

如果你想在 Linux 下做更深度的测试，可以复用我们在第35章搭建的 `mtua—mtur—mtub` 隔离拓扑。先把所有虚拟接口的 MTU 恢复为标准的 1500，并让服务端绑定在 `10.35.2.2:3737`。当连接建立之后，我们通过 `iptables` 在中间路由节点（`mtur`）上人为制造“黑洞”，悄无声息地丢弃经过的流量：

```bash
sudo ip netns exec mtur iptables -I FORWARD -p tcp --dport 3737 -j DROP
sudo ip netns exec mtur iptables -I FORWARD -p tcp --sport 3737 -j DROP
sudo ip netns exec mtua tcpdump -ni any 'tcp port 3737'
```

在这种静默丢包的场景下，你会观察到：带有应用心跳的连接，会迅速触碰并触发应用层的超时截止时间；而仅仅依靠 TCP Keepalive（即使配置了短周期）的空闲连接，则必须在苦苦经历多轮重传探测失败后，才会在操作系统层面报错。建议你分别记录下这两者的单调时间戳和抓包帧号，体会应用层和传输层在故障感知速度上的巨大差异。

实验结束后，别忘了恢复转发流量并清理 `iptables` 规则：

```bash
sudo ip netns exec mtur iptables -D FORWARD -p tcp --dport 3737 -j DROP
sudo ip netns exec mtur iptables -D FORWARD -p tcp --sport 3737 -j DROP
```

这些规则仅作用于我们创建的隔离网络命名空间，不会影响你的宿主机网络。彻底完成测试后，可以按照第35章的步骤将网络命名空间全部删除。

## 七、在生产环境中我们应该监控什么

对于长期保持的长连接，程序在运行日志中至少应该记录：连接 ID、网络四元组（源IP/端口、目的IP/端口）、连接建立时间、最后一次接收到应用数据的时间、最后一次成功完成 PONG 交互的时间、当前挂起的（未响应）心跳 ID、连续心跳失败的次数、最终关闭的具体原因，以及重新建连的尝试结果。

在全局监控的指标（Metrics）层面，我们需要持续观测活跃连接数、心跳 RTT（往返时间）的时序分布、超时率、断线重连率、被中间代理强制回收的连接数，以及服务端处理心跳包的实际延迟。

在设计监控大盘时，建议将上述不同维度的健康状态独立拆分，明确命名为：“TCP 网络可达”、“协议处理器正常响应”、“底层依赖服务就绪”和“具体业务请求成功”。这样一旦发生故障，告警系统就能立刻顺藤摸瓜，精确定位到是哪一“层”出了问题。

最后要牢记：一次成功的 PONG 只能证明心跳处理链路在截止时间内是通畅的，它并不能担保后续真实的业务请求一定能成功，每一笔业务操作都必须有自己独立的超时和错误处理机制。

## 理解检查

1. 当远端的应用线程卡死或陷入死循环时，为什么底层的 TCP Keepalive 探测仍然可能持续报告成功？
2. `T_idle`、`T_interval` 与 `N` 这三个参数是如何共同决定故障发现时间上限，并影响网络开销的？
3. 请求截止时间、TCP User Timeout 与 Keepalive 的空闲计时器，分别更适合覆盖哪些故障场景？
4. 为什么在设计应用心跳机制时，必须携带请求 ID，并且要强制使用系统的单调时钟来计算 RTT 往返时间？
5. 如果网络路径中存在一个 60 秒就会强制回收映射表项的 NAT 或代理设备，而我们将应用的心跳周期设置成了 5 分钟，会导致什么灾难性的后果？
6. 如果底层依赖的数据库发生了故障，更适合由上述哪一层面的健康检查机制来捕获和上报？

## 延伸阅读

- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)
- [RFC 1122：Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html)
- [RFC 5482：TCP User Timeout Option](https://www.rfc-editor.org/rfc/rfc5482.html)

---

[上一章：第36章 NAT、防火墙和负载均衡](./06-nat-firewall-load-balancing.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第38章 TCP 安全基础](./08-security.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
