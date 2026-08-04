# 第29章 常用 Socket 选项

Socket 选项是应用向操作系统表达局部策略的接口。每个选项都有明确作用域：有的影响地址绑定，有的影响空闲探测，有的影响小块写入的聚合，有的调整缓冲区容量。调优从读取本机实际值、定义目标指标和建立对照实验开始。

## 1. 选项地图

| 选项 | 设置时机 | 主要影响 |
| --- | --- | --- |
| `SO_REUSEADDR` | `bind` 之前 | 本地地址复用规则，语义随平台变化 |
| `SO_KEEPALIVE` | 已创建 Socket，通常用于已连接 Socket | 开启 TCP 空闲存活探测 |
| `TCP_NODELAY` | 已连接 Socket | 关闭 Nagle 的小块等待规则 |
| `SO_RCVBUF` | 连接前或连接后 | 内核接收缓冲区目标值 |
| `SO_SNDBUF` | 连接前或连接后 | 内核发送缓冲区目标值 |
| `SO_RCVTIMEO` / `SO_SNDTIMEO` | I/O 前 | 操作系统级接收与发送等待时间 |
| `TCP_USER_TIMEOUT` | 平台提供时 | 已发送数据长期缺少确认等进展时的容忍期限 |

选项值、单位、取值范围、继承方式和默认值都可能随操作系统及内核版本变化。监听 Socket 上设置的部分选项会被已接受 Socket 继承，具体集合由平台定义。实验应同时记录系统、Python 版本、设置值和 `getsockopt` 返回值。

配置函数还应在启动日志中输出最终生效值。遇到平台拒绝某个扩展时，程序可以保留安全默认策略并产生清晰告警；部署检查据此判断该项能力是否属于运行前提。

## 2. 读取并配置本机实际值

下面的 `socket_options.py` 使用能力探测覆盖 Windows、Linux 与 macOS 常见接口。无法识别的平台扩展会打印原因，核心连接仍可继续运行。

```python
from __future__ import annotations

import os
import socket
import sys


def show_int(sock: socket.socket, level: int, option: int, name: str) -> None:
    value = sock.getsockopt(level, option)
    print(f"{name}={value}")


def set_tcp_if_available(
    sock: socket.socket, name: str, value: int
) -> bool:
    option = getattr(socket, name, None)
    if option is None:
        print(f"{name}: constant unavailable")
        return False
    try:
        sock.setsockopt(socket.IPPROTO_TCP, option, value)
        actual = sock.getsockopt(socket.IPPROTO_TCP, option)
        print(f"{name}: requested={value}, actual={actual}")
        return True
    except OSError as exc:
        print(f"{name}: unsupported by this socket: {exc}")
        return False


def configure_listener(listener: socket.socket) -> None:
    if os.name == "nt" and hasattr(socket, "SO_EXCLUSIVEADDRUSE"):
        listener.setsockopt(
            socket.SOL_SOCKET, socket.SO_EXCLUSIVEADDRUSE, 1
        )
        show_int(
            listener,
            socket.SOL_SOCKET,
            socket.SO_EXCLUSIVEADDRUSE,
            "SO_EXCLUSIVEADDRUSE",
        )
    else:
        listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        show_int(
            listener, socket.SOL_SOCKET, socket.SO_REUSEADDR, "SO_REUSEADDR"
        )


def configure_connected(sock: socket.socket) -> None:
    print("platform:", os.name)
    show_int(sock, socket.SOL_SOCKET, socket.SO_RCVBUF, "SO_RCVBUF before")
    show_int(sock, socket.SOL_SOCKET, socket.SO_SNDBUF, "SO_SNDBUF before")

    sock.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, 256 * 1024)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 256 * 1024)
    show_int(sock, socket.SOL_SOCKET, socket.SO_RCVBUF, "SO_RCVBUF after")
    show_int(sock, socket.SOL_SOCKET, socket.SO_SNDBUF, "SO_SNDBUF after")

    sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
    show_int(sock, socket.IPPROTO_TCP, socket.TCP_NODELAY, "TCP_NODELAY")

    sock.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 1)
    show_int(sock, socket.SOL_SOCKET, socket.SO_KEEPALIVE, "SO_KEEPALIVE")

    if os.name == "nt" and hasattr(socket, "SIO_KEEPALIVE_VALS"):
        # on/off、空闲毫秒数、探测间隔毫秒数
        sock.ioctl(socket.SIO_KEEPALIVE_VALS, (1, 30_000, 10_000))
        print("Windows keepalive idle=30000ms interval=10000ms")
    else:
        # Linux 常用 TCP_KEEPIDLE；macOS 常用 TCP_KEEPALIVE。
        idle_set = set_tcp_if_available(sock, "TCP_KEEPIDLE", 30)
        if not idle_set:
            set_tcp_if_available(sock, "TCP_KEEPALIVE", 30)
        set_tcp_if_available(sock, "TCP_KEEPINTVL", 10)
        set_tcp_if_available(sock, "TCP_KEEPCNT", 3)

    if sys.platform.startswith("linux"):
        set_tcp_if_available(sock, "TCP_USER_TIMEOUT", 15_000)  # Linux: 毫秒
    elif hasattr(socket, "TCP_USER_TIMEOUT"):
        print("TCP_USER_TIMEOUT: inspect this platform's unit before setting")
    sock.settimeout(5.0)
    print("Python call timeout:", sock.gettimeout())


def open_loopback_pair() -> tuple[socket.socket, socket.socket]:
    with socket.socket() as listener:
        configure_listener(listener)
        listener.bind(("127.0.0.1", 0))
        listener.listen()
        client = socket.create_connection(listener.getsockname())
        server, _ = listener.accept()
        return client, server


if __name__ == "__main__":
    client, server = open_loopback_pair()
    with client, server:
        configure_connected(client)
```

Linux 常把用户请求的缓冲区值乘以内部管理系数，`getsockopt` 返回值可能大于设置值；内核自动调节还会按连接状态改变有效接收空间。Windows 与 BSD 系统有各自的限制和自动调节策略。因此配置文件中的 `256 KiB` 只是一项请求，运行时读取值和抓包中的窗口变化提供实际证据。

接收缓冲区还与握手时协商的 Window Scale 相互作用。Window Scale 的缩放因子在 SYN 中协商，连接建立后保持固定；运行中的通告窗口值会随可用接收空间变化。抓包工具常同时显示首部原始 Window、缩放因子和计算后的窗口。修改 `SO_RCVBUF` 可能改变可用空间，已经建立连接的缩放因子仍沿用握手结果，因此高带宽实验适合在设置选项后新建连接。

Python 的 `settimeout(5.0)` 提供跨平台的 Socket 调用超时语义。原始 `SO_RCVTIMEO` 与 `SO_SNDTIMEO` 在 POSIX 常使用 `timeval` 结构，在 Windows 使用不同的二进制布局和单位；直接 `setsockopt` 需要平台专用打包代码。第25章的单调时钟总截止时间继续负责跨多次调用的端到端预算。

## 3. SO_REUSEADDR 的准确作用域

服务重启时，旧连接可能仍处于 TIME_WAIT。Unix 类系统上的 TCP 服务器常在 `bind` 前启用 `SO_REUSEADDR`，从而按系统规则重新绑定本地监听地址。它不会夺走另一个活跃监听者已经独占的四元组。

Windows 的地址复用历史语义更宽，服务若要求强独占可以研究 `SO_EXCLUSIVEADDRUSE`。跨平台服务器应通过条件分支表达部署目标，并在目标操作系统上测试“两个进程同时绑定”和“服务立即重启”两种场景。`SO_REUSEPORT` 是另一项平台扩展，常用于多个监听 Socket 分担流量，设计目标与 `SO_REUSEADDR` 分开评估。

## 4. Keepalive、User Timeout 与应用心跳

启用 `SO_KEEPALIVE` 只打开总开关。空闲多久开始探测、探测间隔和失败次数由系统默认值或平台扩展控制，默认空闲时间在许多系统上可能以小时计。需要分钟级发现故障的服务应明确配置并读取实际值。

Keepalive 只在连接空闲时提供低频存活探测。应用心跳可以携带会话状态、负载或租约信息，并按业务周期运行。`TCP_USER_TIMEOUT` 关注已经发送的数据长期缺少确认、零窗口等缺少传输进展的情形。三个机制可以同时存在：应用截止时间管理单次请求，心跳管理会话活性，TCP 选项帮助内核回收失去网络进展的连接。

中间 NAT、防火墙和负载均衡器还可能拥有独立空闲回收期限。Keepalive 周期若长于中间设备期限，连接状态可能先被设备清除。生产配置应从完整链路的最短空闲期限推导，并评估大量连接探测产生的包量。

## 5. Nagle、Delayed ACK 与小消息

Nagle 算法面向许多细小写入：连接存在未确认的小段数据时，协议栈倾向于暂存后续小块，直到收到 ACK 或凑出较大报文。Delayed ACK 允许接收端短暂等待，期待数据响应或更多 Segment 一起确认。某些“一次写一个小字段、双方交替等待”的模式会让两种等待叠加，形成可见延迟。

`TCP_NODELAY=1` 关闭 Nagle 规则，适合延迟敏感的交互式小消息。应用仍可以把同一逻辑消息组装为一个 `bytes` 后调用一次发送，这通常同时改善系统调用次数和包效率。`TCP_NODELAY` 不会固定 TCP Segment 边界，操作系统调度、MSS、拥塞控制和网卡卸载仍会影响实际报文。

批量上传更重视吞吐与包效率，默认聚合通常表现良好。选项决策应围绕消息尺寸、写入节奏、RTT、延迟分位数和包数进行对照测量。

### 建立可信的调优实验

先固定消息大小、并发数、连接复用方式、网络 RTT、丢包率与运行时版本，再只改变一个选项。每组包含预热和多轮测量，记录吞吐、CPU、系统调用数、包数、重传、窗口和延迟分位数。结果应覆盖典型负载与峰值负载，因为某个选项可能降低小消息延迟，同时增加包数和 CPU。

对照还应包含操作系统默认配置。默认值常由内核自动调节，并随版本持续改进。应用层批量、协议压缩、连接池和业务并发限制也会改变结果，所以调优报告需要保留完整配置。确认收益后，配置以小范围发布方式上线，指标异常时可以快速恢复原值。

容器环境还要记录宿主机内核参数、网络命名空间和资源限额。容器内看到的 Socket 值可能受宿主机上限约束，云负载均衡器也会引入自己的空闲期限。客户端、服务端和中间设备三侧配置合在一张表中，才能解释同一选项在实验室与线上呈现的差异。

## 6. 实验：测量小消息往返

以下程序在回环连接中连续执行“两次 1 字节写入 + 一次 1 字节响应”，分别测试 Nagle 开启和关闭。它依赖第25章的 `io_helpers.py`。

```python
import socket
import statistics
import threading
import time

from io_helpers import read_exactly, send_all

ROUNDS = 2000


def echo_server(listener, nodelay):
    conn, _ = listener.accept()
    with conn:
        conn.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, nodelay)
        deadline = time.monotonic() + 30
        for _ in range(ROUNDS):
            read_exactly(conn, 2, deadline)
            send_all(conn, b"R", deadline)


def measure(nodelay):
    with socket.socket() as listener:
        listener.bind(("127.0.0.1", 0))
        listener.listen()
        worker = threading.Thread(
            target=echo_server, args=(listener, nodelay)
        )
        worker.start()

        samples = []
        with socket.create_connection(listener.getsockname()) as client:
            client.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, nodelay)
            deadline = time.monotonic() + 30
            for _ in range(ROUNDS):
                started = time.perf_counter_ns()
                send_all(client, b"A", deadline)
                send_all(client, b"B", deadline)
                read_exactly(client, 1, deadline)
                samples.append((time.perf_counter_ns() - started) / 1_000_000)
        worker.join()

    p95 = statistics.quantiles(samples, n=100)[94]
    return statistics.median(samples), p95


for value in (0, 1):
    median, p95 = measure(value)
    print(f"TCP_NODELAY={value}: median={median:.3f}ms p95={p95:.3f}ms")
```

### 预期现象

回环 RTT 极低，现代协议栈也有多种 ACK 优化，所以两组结果可能很接近。这个结果本身很有价值：它说明目标环境当前没有显著收益。把实验放到受控的跨主机网络，并在 Wireshark 中比较 TCP Segment 数、ACK 时序和 p95，差异通常更容易观察。

继续做两项实验：

1. 将 `SO_SNDBUF` 和 `SO_RCVBUF` 依次请求为 4 KiB、64 KiB、1 MiB，记录设置前后返回值，并传输 64 MiB 数据测量吞吐。
2. 建立空闲连接，配置 30 秒 Keepalive，在一端断电或用防火墙丢弃报文，记录内核报告连接失败的时间。正常 `close` 会发送 FIN，适合另设一组对照。

吞吐实验中，大带宽时延积链路更容易体现缓冲区容量；回环环境可能很快达到 CPU 或内存复制上限。Keepalive 实验的结果应与配置的空闲、间隔、次数以及系统重传行为一起解释。

## 7. 理解检查

1. `SO_RCVBUF` 的设置值、`getsockopt` 返回值和抓包中的 Window 为什么可能不同？
2. `TCP_NODELAY` 改变哪条发送规则，它会保证一次写入对应一个 Segment 吗？
3. Keepalive、User Timeout 和请求总截止时间分别覆盖哪些状态？
4. `SO_REUSEADDR` 为什么需要在目标操作系统上验证双进程绑定行为？
5. 一项选项调整应至少记录哪些基线指标与环境信息？

## 8. 本章小结

Socket 选项是针对具体机制的调节器。读取实际值、理解平台边界、建立对照实验和保留回退配置，才能把调优结论转化为可复查的工程证据。下一章会把 TLS 与 HTTP 放到 TCP 字节流之上，观察每一层怎样定义自己的结构。

## 导航

- [上一章：并发、缓冲区和背压](./04-concurrency-buffers-backpressure.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：TLS、HTTP 与 TCP 的关系](./06-tls-http-tcp.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
