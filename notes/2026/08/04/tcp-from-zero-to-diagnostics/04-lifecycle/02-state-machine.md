# 第16章 TCP 连接状态机

TCP 状态机本质上是在记录当前端点已经发送、接收并确认了哪些控制信息。一条完整的 TCP 连接由两端的端点共同维护，且两端各自运行独立的状态机。因此，当客户端处于 `FIN-WAIT-2` 状态时，服务端可能正处于 `CLOSE-WAIT` 状态——它们只是从不同视角描述了同一时刻的连接状态。

## 状态是压缩后的历史

看到一个状态名，可以将它视作一段网络事件历史的浓缩。例如：

- `SYN-SENT`：本端已主动发送 SYN 报文（同步序列号），正等待对端的响应以完成同步。
- `ESTABLISHED`：双方的序列号已完成同步，当前端点可以正常收发数据。
- `CLOSE-WAIT`：本端已收到并确认对端的 FIN 报文，但本端的发送通道依然保持开放。
- `FIN-WAIT-2`：本端的 FIN 报文已获确认，正等待对端关闭其发送通道（即等待对端的 FIN 报文）。

状态机仅仅停留在传输层，不具备任何业务含义。`ESTABLISHED` 仅代表底层的 TCP 连接已成功建立，至于业务层面的身份认证、数据库写入和请求是否成功，都需要由上层的应用协议来判定。

## 十一个核心状态

| 状态 | 状态含义 | 触发条件 |
| --- | --- | --- |
| `CLOSED` | 尚未创建 TCP 传输控制块（TCB），或连接已完全释放 | 初始状态、连接释放完成或遇到异常中止 |
| `LISTEN` | 本端正处于被动监听模式，等待远端的连接请求 | 应用程序执行 `bind` 后调用 `listen` |
| `SYN-SENT` | 本端已主动发出 SYN 报文 | 应用层主动调用 `connect` |
| `SYN-RECEIVED` | 本端收到 SYN，并回复了自己的 SYN+ACK | 监听端收到 SYN 请求，或在“同时打开”场景下收到 SYN |
| `ESTABLISHED` | 双方已完成初始序列号同步，连接建立 | 收到最终的 ACK，三次握手完成 |
| `FIN-WAIT-1` | 本端已主动关闭发送通道，并发出 FIN 报文 | 本端应用程序主动关闭连接 |
| `FIN-WAIT-2` | 本端的 FIN 已被确认，正等待接收对端的 FIN | 在 `FIN-WAIT-1` 状态下，收到确认本端 FIN 的 ACK |
| `CLOSE-WAIT` | 已收到对端的 FIN，但本端的发送通道仍然保持开放 | 在 `ESTABLISHED` 状态下收到对端的 FIN |
| `LAST-ACK` | 对端先发 FIN，本端随后也发出自己的 FIN，正等待最终的 ACK | 应用程序在 `CLOSE-WAIT` 状态下主动关闭了发送通道 |
| `CLOSING` | 双方几乎同时发送 FIN。本端已收到对端的 FIN，但自己的 FIN 尚未获确认 | 在 `FIN-WAIT-1` 状态下，抢先收到对端的 FIN 报文（但该报文未包含对本端 FIN 的 ACK） |
| `TIME-WAIT` | 双方均已完成关闭，本端正等待计时器（2MSL）到期 | 本端确认对端 FIN 后，等待足够长的时间以确保对端收到最终确认 |

`CLOSED` 往往在协议状态图中用来表示“无连接”的初始状态，而网络排查工具通常不会显示它。此外，Windows 系统中还可能出现 `DeleteTCB` 或 `Bound` 等平台特定的内部状态；但在分析连接问题时，我们仍应以上表所列的标准 TCP 生命周期为主线。

## 主动连接路线

客户端主动发起连接的典型状态流转如下：

```text
CLOSED
  | connect：发送 SYN
  v
SYN-SENT
  | 收到可接受的 SYN+ACK，发送 ACK
  v
ESTABLISHED
```

如果使用阻塞模式，`connect` 调用通常会一直等待，直到连接成功建立才返回。对于非阻塞 Socket，它会立即返回并提示连接正在进行中（如 `EINPROGRESS`），应用程序随后可以通过监听可写事件，并配合 `SO_ERROR` 选项来获取最终的连接结果。需要注意的是，TCP 报文的收发是由操作系统内核独立处理的，由于应用线程存在调度延迟，业务日志中记录的连接建立时间往往会比抓包工具捕获到的时间略晚。

## 被动监听路线

在服务端，通常涉及两类不同职责的 Socket：

```text
监听 Socket：LISTEN，四元组中的远端尚未固定

收到 SYN
   |
   +--> 子连接：SYN-RECEIVED
                  |
                  | 收到最终 ACK
                  v
              ESTABLISHED ----等待应用 accept----> 已连接 Socket
```

`accept` 调用的作用仅仅是从内核的“已完成连接队列”中取出一个就绪的 Socket。它本身不会触发任何 TCP 握手报文的发送，也不会改变原监听 Socket 的状态。取出新 Socket 后，原来的监听 Socket 依然保持 `LISTEN` 状态，继续准备迎接其他客户端的连接请求。

系统通常需要维护两类未被应用层取走的连接：一类是正处于半连接（握手进行中）状态的连接，另一类是已完成全连接（握手完毕）但尚未被应用层 `accept` 的连接。在 Linux 的心智模型中，这两类连接分别对应 SYN 队列（半连接队列）和 accept 队列（全连接队列）。而在 Windows 等其他系统中，这些队列的内部命名、大小计算方式以及溢出处理机制各不相同。`listen(backlog)` 中的 `backlog` 参数会参与这两个队列的容量控制，但其实际能容纳的连接上限最终由操作系统的具体实现和参数共同决定。

## 主动关闭路线

当本端主动关闭发送通道时，常见的状态流转如下：

```text
ESTABLISHED
  | 应用结束发送方向，内核发送 FIN
  v
FIN-WAIT-1
  | 收到对本端 FIN 的 ACK
  v
FIN-WAIT-2
  | 收到对端 FIN并发送 ACK
  v
TIME-WAIT
  | 计时器到期
  v
CLOSED
```

如果对端将“确认本端 FIN 的 ACK”和“对端自己的 FIN”合并在同一个报文中发来，本端就会跳过 `FIN-WAIT-2`，直接从 `FIN-WAIT-1` 进入 `TIME-WAIT`。如果双方几乎同时发起关闭，本端还可能会经历 `CLOSING` 状态。这些分支情况充分说明，TCP 状态机是严格由实际的网络事件（报文交互）驱动的，对端报文的组合方式会直接改变我们观察到的中间状态。

## 被动关闭路线

当本端被动收到对端发来的 FIN 报文时，流转路线如下：

```text
ESTABLISHED
  | 收到 FIN，内核发送 ACK
  v
CLOSE-WAIT
  | 本地应用结束发送方向，内核发送 FIN
  v
LAST-ACK
  | 收到对本端 FIN 的 ACK
  v
CLOSED
```

一旦进入 `CLOSE-WAIT` 状态，意味着本端已经感知到了对端发送通道的关闭（即读到了 EOF）。但此时本端的发送通道依然敞开，随时可以继续向对端发送数据。连接在这个状态停留的时间，完全取决于本地应用程序何时处理完剩余业务，并主动调用接口关闭发送通道。

## API 调用与状态流转的映射关系

| API 或网络事件 | 核心行为 | 触发的状态流转 |
| --- | --- | --- |
| `socket()` | 创建 Socket 对象 | 尚未形成可查询的 TCP 连接 |
| `bind()` | 选择本地地址和端口 | Socket 绑定了本地的 IP 和端口（获得本地标识） |
| `listen()` | 转为被动监听角色 | 进入 `LISTEN` 状态 |
| `connect()` | 发起主动连接 | 经历 `CLOSED → SYN-SENT → ESTABLISHED`，该调用通常会阻塞直到整个握手完成 |
| `accept()` | 从队列取出已就绪的连接 | 实际上该子连接在 `accept` 被调用前往往就已经处于 `ESTABLISHED` 状态了 |
| `send()` / `recv()` | 读写字节流数据 | 连接保持在 `ESTABLISHED` 状态，若遇到 EOF 或错误则意味着连接可能正在被关闭 |
| `shutdown(SHUT_WR)` | 主动关闭本地发送通道 | 等待发送队列中的数据清空后发出 FIN 报文，随后进入 `FIN-WAIT-1` 或 `LAST-ACK` 状态 |
| `close()` | 释放应用程序手中的文件句柄 | 内核会根据当前状态和 Socket 选项（如 SO_LINGER）决定是优雅关闭还是发送 RST 强行中止 |
| 收到 FIN | 对端已关闭其发送通道 | 触发被动关闭，进入 `CLOSE-WAIT` 或关闭路线中的其他相应状态 |
| 收到可接受的 RST | 连接被强行复位 | 连接立刻被释放，内核会向应用层抛出连接重置错误 |
| TIME-WAIT 计时器到期 | 2MSL 等待期结束 | 资源回收，进入 `CLOSED` 状态 |

在 Python 中，使用 `with socket.socket(...)` 上下文管理器时，离开代码块会自动调用 `close()`。不过，如果同一个底层 Socket 被多个文件描述符、子进程（句柄复制）或并发线程共同引用，那么仅关闭其中一个对象的句柄并不会立刻触发底层的 TCP 连接关闭，真正的连接释放时机还取决于引用计数是否归零。

## 利用暂停点观察两端状态

我们可以编写简单的 Python 脚本，通过人为设置暂停（Sleep）来观察连接生命周期中的关键状态。

首先，保存服务端代码为 `state_server.py`：

```python
import socket
import time

ADDR = ("127.0.0.1", 18080)

with socket.socket() as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(ADDR)
    listener.listen(8)
    print("LISTEN", flush=True)
    conn, peer = listener.accept()
    with conn:
        print("ESTABLISHED", peer, "hold 5s", flush=True)
        time.sleep(5)
        while conn.recv(4096):
            pass
        print("EOF received; hold CLOSE-WAIT for 10s", flush=True)
        time.sleep(10)
        conn.shutdown(socket.SHUT_WR)
        print("local write side closed", flush=True)
```

接着，保存客户端代码为 `state_client.py`：

```python
import socket
import time

with socket.socket() as sock:
    sock.connect(("127.0.0.1", 18080))
    print("connected; hold ESTABLISHED for 5s", flush=True)
    time.sleep(5)
    sock.sendall(b"state-lab")
    sock.shutdown(socket.SHUT_WR)
    print("SHUT_WR; waiting for peer FIN", flush=True)
    while sock.recv(4096):
        pass
    print("peer EOF", flush=True)
    time.sleep(3)
```

运行脚本后，我们能在以下几个阶段获得稳定的观察窗口：

1. **前 5 秒**：客户端和服务端的连接均处于 `ESTABLISHED` 状态，同时服务端还有另一个用于监听的 Socket 处于 `LISTEN` 状态。
2. **客户端调用 `SHUT_WR` 后**：客户端主动关闭发送通道，首先进入 `FIN-WAIT-1`；当收到服务端的 ACK 后，转入 `FIN-WAIT-2` 状态。
3. **服务端收到 FIN 后**：服务端被动进入 `CLOSE-WAIT` 状态。此时我们的脚本刻意让其休眠了 10 秒，方便在终端进行状态观察。
4. **服务端调用 `SHUT_WR` 后**：服务端发送了自己的 FIN 并短暂经历 `LAST-ACK` 状态，随后释放资源；而客户端在确认该 FIN 后，将进入并停留在 `TIME-WAIT` 状态。

你可以使用以下 Windows PowerShell 命令来观察状态流转：

```powershell
Get-NetTCPConnection |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 } |
    Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
```

或者在 Linux 环境下使用 `ss` 命令：

```bash
ss -tanpo '( sport = :18080 or dport = :18080 )'
```

`ss -o` 参数可以额外显示连接内部的计时器信息。如果你想连续监控状态，可以配合 `watch -n 0.2` 命令来实现高频刷新。不过要注意，TCP 的状态迁移速度极快，轮询查询很可能会漏掉转瞬即逝的中间状态。此时，你可以借助 Wireshark（过滤条件：`tcp.port == 18080`）的时间线来精确捕捉 SYN、FIN、ACK 等底层的报文触发事件。

## 从一对状态反推连接阶段

当你在网络排查中，同时在两端观察到一对连接状态时，可以反推当前连接所处的阶段。假设我们看到：

```text
客户端 127.0.0.1:53120 -> 127.0.0.1:18080  FIN-WAIT-2
服务端 127.0.0.1:18080 -> 127.0.0.1:53120  CLOSE-WAIT
```

由此我们可以得出清晰的推导：客户端已经主动发送了 FIN 报文并关闭了自己的发送通道，且该 FIN 已被服务端成功确认；而服务端这边仍在处理中，尚未发出自己的 FIN 报文。这意味着，当前的连接处于“半关闭”状态——服务端的应用程序依然可以向客户端发送响应数据，客户端也完全有能力接收。排查这种现场时，下一步的动作应当是检查服务端的应用层日志，看看它是否陷入了死循环或缓慢的业务处理中，是否忘记了关闭连接，或者通过抓包确认服务端是否真的还在源源不断地发送数据。

匹配两端的状态能为故障排查提供极为强力的线索，但要得出最终的结论，我们仍需结合 TCP 四元组、关联进程、状态的持续时间、业务应用日志以及网络报文抓包来进行综合研判。

## 理解检查

1. 服务端拥有一个 `LISTEN` 和三个 `ESTABLISHED`，它至少关联多少个 Socket 角色？
2. 为什么 `accept` 返回晚于客户端 `connect` 返回仍属正常？
3. 本端处于 `FIN-WAIT-2`、对端处于 `CLOSE-WAIT` 时，哪个方向已经结束？
4. 哪种事件会让主动关闭方经过 `CLOSING`？
5. 状态查询没有捕获到 `SYN-RECEIVED`，抓包却有完整握手，怎样解释？

答案要点：
1. 服务端维护了一个监听角色（用于接受连接请求）外加三个已连接角色（用于处理业务通信），共计四个。
2. TCP 握手完全由系统内核独立完成并排队（放入全连接队列）。`connect` 只要收到 SYN+ACK 就能返回成功，而 `accept` 只是应用层从队列中取走连接的操作，存在调度延迟，因此它晚于 `connect` 甚至远晚于底层网络握手完成也是正常的。
3. 处于 `FIN-WAIT-2` 的一方（主动关闭方）的发送通道已经彻底结束。
4. 当连接的双方几乎在同一时间发送 FIN 报文（同时关闭），且主动方的 FIN 尚未收到对方的 ACK 确认时，就会短暂进入 `CLOSING` 状态。
5. `SYN-RECEIVED` 存在的时间极短（仅等待最后一次 ACK 即可），轮询工具的采样频率远低于网络传输速度，因此很容易漏掉这个瞬间。而抓包工具监听的是实时的网卡报文，自然能记录完整的握手过程。

## 本章小结

- 一条 TCP 连接的两端分别维护着独立的端点状态，因此同一时刻双方往往处于不同的状态。
- `listen` 负责将 Socket 转化为被动监听的角色，而 `accept` 仅仅负责从内核队列中取出已经完成握手的全连接。
- 主动关闭连接的一方通常会经历 `FIN-WAIT-1` / `FIN-WAIT-2` 及 `TIME-WAIT` 状态；而被动关闭方则主要经历 `CLOSE-WAIT` 和 `LAST-ACK` 状态。
- 状态机的流转是由系统 API 调用、收发的网络报文以及底层计时器事件共同驱动的。要时刻谨记，业务层 API 的返回时间与网络层的真实报文时间存在时间差。
- TCP 的各种状态名是连接交互历史的高度浓缩。在实际排查中，状态名是绝佳的切入点，但仍需结合四元组信息、状态滞留时间、应用日志和抓包数据来交叉验证。

## 参考资料

- [RFC 9293：TCP 状态机与事件处理](https://www.rfc-editor.org/rfc/rfc9293.html)
- [ss(8) Linux 手册](https://man7.org/linux/man-pages/man8/ss.8.html)
- [Get-NetTCPConnection 文档](https://learn.microsoft.com/powershell/module/nettcpip/get-nettcpconnection)

## 导航

- [上一章：第15章 三次握手](./01-three-way-handshake.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第17章 连接关闭与半关闭](./03-close-half-close.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
