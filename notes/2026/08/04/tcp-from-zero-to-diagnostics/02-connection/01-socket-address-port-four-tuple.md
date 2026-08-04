# 第4章 Socket、地址、端口和四元组

## 从三个客户端提出问题

假设一个服务端监听 `127.0.0.1:50007`，同一台电脑上的三个客户端同时连接它。三个客户端访问相同的服务器 IP 和端口，操作系统仍然能把返回数据交给正确的客户端。

先预测一下：系统连接表里会出现几个 Socket？三个连接有哪些字段相同，又依靠哪个字段相互区分？

回答这些问题，需要把三个概念放进同一幅图：

1. **Socket** 是操作系统维护的通信端点抽象；Python 的 `socket.socket` 对象封装了对应的系统句柄。
2. **地址与端口** 描述通信端点在网络栈中的位置。
3. **四元组** 描述一条已经建立的 TCP 连接在一个方向上的两个端点。

## Socket 是操作系统维护的通信端点

Python 执行下面这行代码时，会创建一个 `socket.socket` 对象，并请求操作系统创建对应的 IPv4 TCP 端点：

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
```

`AF_INET` 选择 IPv4 地址族，`SOCK_STREAM` 选择面向字节流的 Socket 类型。协议参数采用默认值时，这个组合在本实验中选择 TCP。变量 `s` 引用 Python 封装对象，让程序能够调用 `bind`、`connect`、`send`、`recv` 等操作。

刚创建的 Socket 处于生命周期的起点。后续调用会逐渐补充本地地址、远端地址和连接状态。一个进程可以拥有许多 Socket；每个已连接 Socket 都有各自的发送缓冲区、接收缓冲区、状态和错误信息。

端口号与进程 ID 属于两套命名体系。进程通过 Socket 使用端口，一个进程可以使用多个端口，同一服务端口也可以出现在许多已连接 Socket 中。

## 监听 Socket 与已连接 Socket

服务端通常先创建一个 Socket，再调用 `bind` 与 `listen`：

```text
socket → bind(127.0.0.1, 50007) → listen
```

此时它成为**监听 Socket**。内核从这一刻起可以处理到达本机 `127.0.0.1:50007` 的新连接请求，并让已完成握手、等待应用领取的连接排队。监听 Socket 具有本地端点，远端保持通配状态。

`accept` 可以先阻塞等待，也可以在客户端握手完成后再调用。已完成连接队列中有可领取连接时，操作系统返回一个新的**已连接 Socket**：

```text
监听 Socket ──accept──▶ 已连接 Socket A：对话客户端 A
           ├─accept──▶ 已连接 Socket B：对话客户端 B
           └─accept──▶ 已连接 Socket C：对话客户端 C
```

监听 Socket 始终负责接收后续新连接。每个已连接 Socket 负责一位具体客户端的数据收发。它们可以共享服务端本地端点 `127.0.0.1:50007`，各自的远端端点提供区分依据。

这也解释了一个常见现象：服务端进程只监听一个端口，仍然可以同时维护成千上万条连接。实际容量受到内存、Socket 数量限制、队列、CPU、客户端临时端口以及应用处理能力共同约束。

## 地址回答“哪台主机的哪个接口”

本教程会遇到几类地址：

| 写法 | 含义 | 典型用途 |
| --- | --- | --- |
| `127.0.0.1` | IPv4 回环地址 | 连接本机 IPv4 服务 |
| `::1` | IPv6 回环地址 | 连接本机 IPv6 服务 |
| `localhost` | 由名称解析得到的本地主机名 | 结果可能包含 `127.0.0.1`、`::1` 或两者 |
| `0.0.0.0` | IPv4 通配绑定地址 | 让服务端在所有合适的本机 IPv4 地址上接收连接 |
| `::` | IPv6 通配绑定地址 | 让服务端在所有合适的本机 IPv6 地址上接收连接 |
| 局域网地址 | 当前局域网中的接口地址 | 同一局域网内跨主机实验 |
| 公网地址 | 可在公网路由语境中使用的地址 | 经过路由器、防火墙或 NAT 的远程通信 |

通配地址服务于 `bind`。客户端发起连接时填写具体目标，例如 `127.0.0.1` 或服务器的局域网地址。服务端绑定 `0.0.0.0:50007` 后，连接经由 `192.168.1.20` 到达时，已连接 Socket 的本地地址通常体现实际到达的本机地址。

`localhost` 需要经过名称解析。下面的命令可以查看 Python 当前得到的候选地址：

```powershell
python -X utf8 -c "import socket; print(socket.getaddrinfo('localhost', 50007, type=socket.SOCK_STREAM))"
```

本篇固定写 `127.0.0.1`，因此服务端与客户端都明确使用 IPv4。后续改用 IPv6 时，需要把地址族改为 `socket.AF_INET6`。IPv6 通配监听接收 IPv4 映射连接的具体行为由平台与 `IPV6_V6ONLY` 设置共同决定。

## 端口回答“交给主机里的哪个通信端点”

TCP 首部中的端口字段宽16位，取值范围为 0 到 65535。服务端一般选择稳定端口，方便客户端找到它。本实验使用 `50007`。

客户端通常把本地端点选择交给操作系统。调用 `connect` 时，操作系统会根据路由结果选择本地 IP，并从临时端口范围中分配一个端口。例如：

```text
客户端本地端点：127.0.0.1:53124
服务端远端端点：127.0.0.1:50007
```

下一位客户端可能获得 `53125`。临时端口的具体范围和分配算法属于操作系统实现细节，每次运行都可能变化。

端口 `0` 在 Socket API 中常用于请求系统自动分配端口。系统完成分配后，`getsockname()` 会给出真实端口；线上 TCP 报文会携带这个真实值。

## 四元组给一条连接命名

从客户端发送方向看，一条 TCP 连接可以写成：

```text
(源 IP, 源端口, 目标 IP, 目标端口)
(127.0.0.1, 53124, 127.0.0.1, 50007)
```

从服务端发回客户端时，源和目标互换：

```text
(127.0.0.1, 50007, 127.0.0.1, 53124)
```

这两个方向属于同一条连接。讨论系统内的连接标识时，经常使用规范化的“本地端点 + 远端端点”写法；阅读报文时则按照该报文的源与目标写四元组。

三个客户端的连接可以是：

```text
(127.0.0.1, 53124, 127.0.0.1, 50007)
(127.0.0.1, 53125, 127.0.0.1, 50007)
(127.0.0.1, 53126, 127.0.0.1, 50007)
```

目标端点完全相同，客户端临时端口让三条连接拥有各自的四元组。操作系统收到报文后，会结合 TCP 协议、网络命名空间以及四元组查找已连接 Socket。若报文属于一个新连接请求，系统再依据本地地址和监听端口查找监听 Socket。TCP 与 UDP 可以在各自协议上下文中使用相同数字端口。

NAT 设备可能改写地址或端口，因此不同抓包点看到的四元组可能不同。排障报告应同时记录抓包位置。

## 实验：同时建立三条连接

新建 `tuple_server.py`：

```python
import socket

HOST = "127.0.0.1"
PORT = 50007


def main() -> None:
    accepted: list[socket.socket] = []
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as listener:
        listener.bind((HOST, PORT))
        listener.listen(3)
        print("listener:", listener.getsockname())

        try:
            for number in range(1, 4):
                conn, peer = listener.accept()
                accepted.append(conn)
                print(
                    f"connection {number}:",
                    "local=", conn.getsockname(),
                    "peer=", peer,
                )
            input("三条连接均已建立，按 Enter 关闭服务端：")
        finally:
            for conn in accepted:
                conn.close()


if __name__ == "__main__":
    main()
```

再新建 `tuple_clients.py`：

```python
import socket

SERVER = ("127.0.0.1", 50007)


def main() -> None:
    clients: list[socket.socket] = []
    try:
        for number in range(1, 4):
            client = socket.create_connection(SERVER, timeout=5)
            client.settimeout(None)
            clients.append(client)
            print(
                f"client {number}:",
                "local=", client.getsockname(),
                "peer=", client.getpeername(),
            )
        input("三条连接均已建立，按 Enter 关闭客户端：")
    finally:
        for client in clients:
            client.close()


if __name__ == "__main__":
    main()
```

两个程序都通过 `with` 或 `finally` 释放 Socket。打开两个 PowerShell 窗口，依次运行：

```powershell
python -X utf8 .\tuple_server.py
```

```powershell
python -X utf8 .\tuple_clients.py
```

当两边都停在 `input` 时，打开第三个 PowerShell：

```powershell
Get-NetTCPConnection |
  Where-Object { $_.LocalPort -eq 50007 -or $_.RemotePort -eq 50007 } |
  Sort-Object State, LocalPort, RemotePort |
  Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess
```

### 预期现象

- 服务端打印三个不同的 `peer` 临时端口。
- 三个客户端的 `peer` 都是 `127.0.0.1:50007`。
- 在没有旧连接残留记录时，系统连接表通常包含 7 条本实验记录：一行 `Listen`，以及三条连接各自的客户端、服务端 `Established` 视角。
- 每条回环连接通常出现客户端侧与服务端侧两个 `Established` 视角，因为两个端点都位于这台电脑中。
- 客户端三个 Socket 由同一个客户端进程持有，`OwningProcess` 相同，临时端口各不相同。

先在客户端按 Enter，再在服务端按 Enter，两个程序会关闭所有 Socket。若查看连接表时结果已经消失，可以重新运行并保持两个 `input` 提示停留。

## 理解检查

1. 监听 `127.0.0.1:50007` 的 Socket 关联了几位固定客户端？
2. 三个客户端连接同一服务端时，最常见的区分字段是什么？
3. `0.0.0.0` 在本实验中适合放在 `bind` 还是 `connect` 的目标位置？
4. 为什么一次回环连接会在系统连接表中出现两个 `Established` 视角？
5. 仅写四元组时，还应补充哪些上下文才能严谨描述系统查找范围？

### 参考答案

1. 监听 Socket 面向后续新连接，固定客户端数量为零；每次 `accept` 返回一个关联具体客户端的已连接 Socket。
2. 客户端临时端口通常不同，因此四元组各自唯一。
3. `0.0.0.0` 适合服务端通配绑定；连接目标使用具体地址。
4. 客户端端点和服务端端点都在本机，系统同时展示两个本地 Socket 的视角。
5. 至少补充传输协议 TCP、所在主机或网络命名空间；涉及 NAT 时再补充观察位置。

## 本章小结

监听 Socket 负责接收新连接，已连接 Socket 负责一组具体端点之间的字节流。服务端端口可以保持稳定，客户端临时端口让并发连接拥有不同四元组。下一章会把这些对象放进完整的 Socket API 生命周期，并观察每个调用何时返回。

[上一章：第3章 TCP 是字节流](../01-foundations/03-byte-stream.md) · [所属篇：第二篇](../02-connection.md) · [下一章：第5章 用一个最小程序建立 TCP 连接](./02-minimal-program.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
