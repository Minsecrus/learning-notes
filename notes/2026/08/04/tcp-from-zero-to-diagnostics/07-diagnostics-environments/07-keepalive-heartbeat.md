# 第37章 TCP Keepalive 与应用层心跳

一个 Socket 在操作系统中显示 `ESTABLISHED`，只说明本机仍保存这条连接的状态。远端主机可能已经断电，进程可能已经退出，应用线程可能卡在死循环，代理也可能已经回收空闲映射。每种故障发生在不同层次，需要相应的探测机制。

本章把“路径还能回应 TCP”“远端应用还能处理协议”“业务依赖能够完成工作”拆成三个可验证的问题。

## 一、三种健康含义

### 1. TCP Keepalive：检查空闲连接的传输路径

TCP Keepalive 是操作系统对长时间空闲连接发送的探测。对端 TCP 栈若仍持有连接状态，通常会返回 ACK；持续收不到有效响应时，本端最终把连接报告为失败。

Keepalive 主要覆盖：

- 主机消失或路径形成黑洞；
- NAT、防火墙或代理的连接状态已经丢失，并且后续探测触发丢弃或重置；
- 远端重启后已丢失原连接状态。

探测由内核处理。远端应用线程即使停止运行，远端内核仍可以确认探测，所以 Keepalive 成功表示 TCP 层仍可达。应用处理能力还需要更高层证据。

现行 TCP 基础规范 RFC 9293 规定 Keepalive 由应用按连接启用，默认保持关闭；默认空闲间隔至少为两小时。现代操作系统提供了更细的每 Socket 或系统级参数，名称、单位、默认值与探测次数存在平台差异，程序应读取并记录实际配置。

### 2. 应用层心跳：让协议处理器参与

应用层心跳通常是一对有编号的 `PING/PONG` 消息：

```text
client → server: PING request_id=1842
server → client: PONG request_id=1842 status=ready
```

服务端只有在读取、解析并处理 `PING` 后才发送 `PONG`，所以它可以覆盖 Socket 以上的事件循环、线程池和协议解析器。心跳还可以携带协议版本、会话租约或负载摘要，但字段应保持小、可验证且有明确上限。

一次心跳建议记录发送时刻、请求 ID、截止时刻、响应时刻和连接 ID。往返时间使用本机单调时钟计算，避免时钟校准影响。每个响应与对应请求 ID 匹配，迟到响应按照协议策略处理。

### 3. 业务健康检查：执行代表性工作

业务健康检查可以调用关键依赖、读取一条已知数据或完成一笔无副作用的合成事务。它回答“服务现在是否具备完成目标操作的条件”。负载均衡器的存活检查、编排系统的就绪检查与端到端合成监控都属于这一层，但覆盖范围各异。

健康检查本身也消耗资源。检查路径、频率和超时应与真实业务接近，并设置并发上限、隔离账户和结果缓存策略。

## 二、同一个故障，三种机制看到什么

| 故障 | TCP Keepalive | 应用心跳 | 业务健康检查 |
| --- | --- | --- | --- |
| 应用线程停止读取 | 对端内核仍可回 ACK | PONG 超时 | 代表性操作超时 |
| 进程正常退出 | FIN 通常很快到达 | 当前 I/O 发现 EOF | 检查连接失败 |
| 主机突然断电 | 多次探测后超时 | 心跳截止时间到达 | 检查超时 |
| 中间路径静默丢包 | 多次探测后超时 | 心跳超时 | 检查超时 |
| 数据库不可用 | TCP 路径仍可响应 | 基础 PONG 可能正常 | 依赖检查失败 |
| 代理回收空闲连接 | 下一次探测或 I/O 暴露 | 周期消息可能维持映射 | 新检查连接可重新建立 |

表格中的“通常”提示了实现与故障方式的差异。例如进程结束时，操作系统可发送 FIN；具有未读数据、abortive close 或状态异常时也可能发送 RST。主机直接断电则缺少这种主动通知。

## 三、四类时间参数需要分开

Keepalive 常用三个量：

- `T_idle`：连接连续空闲多久后发送第一轮探测；
- `T_interval`：未收到有效响应时，相邻探测的间隔；
- `N`：判定失败前允许的未响应探测次数。

粗略的故障发现上界可以写成：

$$
T_{detect}\approx T_{idle}+N\times T_{interval}+T_{scheduler}
$$

具体系统在首个探测时刻、最后一次等待、重传和错误上报上会有细节差异，所以公式用于容量与数量级设计，最终值由受控实验确认。

另外三种计时器各自解决不同问题：

- **请求截止时间**：一项应用操作允许占用的总时间；
- **TCP User Timeout**：已发送数据长时间无法获得确认时，允许连接保持的时长；
- **中间设备空闲时间**：NAT、防火墙或代理在缺少符合策略的流量时保留表项的时间。

持续有未确认数据时，连接处于活跃传输状态，Keepalive 的空闲计时通常不会启动。此时请求截止时间和 User Timeout更贴近故障。应用拥有最完整的业务时间预算，因而应始终保留自己的截止时间。

## 四、从业务容忍度反推配置

假设聊天系统允许 30 秒内发现会话失效，路径中可控代理的最短空闲回收时间是 60 秒。可以形成如下初始方案：

```text
应用心跳周期：20 s，加小范围随机抖动
PONG 截止时间：5 s
连续失败阈值：2 次
最长发现时间：约 45 s
TCP Keepalive：更长周期，作为路径级后备证据
请求截止时间：按每类业务操作单独定义
```

若产品目标确实要求 30 秒上限，则继续缩短周期或失败阈值，并用弱网实验验证误判率。多个客户端采用随机抖动，可以分散同一秒内的心跳峰值。移动设备还要评估无线电唤醒、流量与电量；服务器需要评估每秒心跳数、定时器数量和日志容量。

心跳消息应当经过与普通消息相同的认证与协议解析边界。服务端限制频率、长度和并发；客户端接受当前连接上匹配请求 ID 的响应。重连后生成新的连接世代标识，防止旧连接的迟到响应污染新会话状态。

## 五、Windows 中配置并观察 Keepalive

Python 可以通过 `SO_KEEPALIVE` 启用探测。下面的辅助函数优先使用 Windows 的 `SIO_KEEPALIVE_VALS`，其空闲与间隔单位均为毫秒；其他平台按可用常量设置：

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

实验只绑定 `127.0.0.1:3737`。服务端接受连接后提供两种模式：

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

客户端同时支持纯空闲与应用心跳。把前面的 `configure_keepalive` 函数放在同一文件顶部：

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

按以下顺序完成三轮观察，每轮都重启服务端：

1. `python server37.py healthy` 配合 `python client37.py heartbeat`：每个 PING 都得到匹配 PONG。
2. `python server37.py stall` 配合 `python client37.py heartbeat`：TCP 会确认 PING 字节，客户端仍在约 4 秒的应用截止时间到达后报超时。
3. `python server37.py stall` 配合 `python client37.py idle`：远端内核持续响应 Keepalive，40 秒后客户端保持连接。

在 Npcap Loopback Adapter 上使用：

```text
tcp.port == 3737
tcp.analysis.keep_alive || tcp.analysis.keep_alive_ack
```

预期可以看到心跳携带 TCP 数据，Keepalive 探测通常是无应用数据的小报文。Wireshark 标签属于分析器推断，可继续核对 Seq、Ack 与 TCP Length。短计时只用于实验；生产值依据业务预算和环境容量确定。

## 六、Linux 扩展：模拟静默路径中断

可以复用第35章的 `mtua—mtur—mtub` 隔离拓扑，把所有接口 MTU恢复为 1500，并让服务端绑定 `10.35.2.2:3737`。连接建立后，在路由命名空间中临时丢弃转发流量：

```bash
sudo ip netns exec mtur iptables -I FORWARD -p tcp --dport 3737 -j DROP
sudo ip netns exec mtur iptables -I FORWARD -p tcp --sport 3737 -j DROP
sudo ip netns exec mtua tcpdump -ni any 'tcp port 3737'
```

应用心跳会先达到自身截止时间；启用短周期 Keepalive 的空闲连接会在多轮探测后报告错误。两种时刻分别记录单调时间和抓包帧号。恢复流量并清理规则：

```bash
sudo ip netns exec mtur iptables -D FORWARD -p tcp --dport 3737 -j DROP
sudo ip netns exec mtur iptables -D FORWARD -p tcp --sport 3737 -j DROP
```

规则仅作用于隔离命名空间。实验结束后按第35章步骤删除命名空间。

## 七、生产监控应记录什么

每条长连接至少记录连接 ID、四元组、建立时间、最后收到应用数据的时间、最后完成 PONG 的时间、当前未完成心跳 ID、连续失败次数、关闭原因和重连结果。指标层面观察活跃连接数、心跳 RTT 分布、超时率、重连率、代理回收数和服务端心跳处理延迟。

将“TCP 可达”“协议处理器响应”“依赖就绪”“具体请求成功”分别命名，告警就能直接指向相应证据层。一次 PONG 可以证明该心跳处理链在截止时间内完成；后续业务请求仍拥有独立结果。

## 理解检查

1. 远端应用线程卡住时，TCP Keepalive 为什么仍可能持续成功？
2. `T_idle`、`T_interval` 与 `N` 怎样共同影响发现时间和网络开销？
3. 请求截止时间、User Timeout 与 Keepalive 分别覆盖什么场景？
4. 为什么应用心跳应带请求 ID，并使用单调时钟计算 RTT？
5. 路径存在 60 秒空闲回收时，5 分钟心跳周期会带来什么结果？
6. 数据库故障更适合由哪一层健康检查发现？

## 延伸阅读

- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)
- [RFC 1122：Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html)
- [RFC 5482：TCP User Timeout Option](https://www.rfc-editor.org/rfc/rfc5482.html)

---

[上一章：第36章 NAT、防火墙和负载均衡](./06-nat-firewall-load-balancing.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第38章 TCP 安全基础](./08-security.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
