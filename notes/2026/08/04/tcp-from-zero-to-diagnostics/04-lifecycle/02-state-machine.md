# 第16章 TCP 连接状态机

TCP 状态记录的是本端已经发送、收到和确认了哪些控制信息。同一条连接由两个端点共同组成，每个端点各自运行状态机。因此客户端显示 `FIN-WAIT-2` 时，服务端完全可能显示 `CLOSE-WAIT`；两者描述的是同一个时刻的两个视角。

## 状态是压缩后的历史

看到一个状态名，可以把它展开为一段事件历史。例如：

- `SYN-SENT`：本端已经主动发送 SYN，正在等待足以完成同步的响应。
- `ESTABLISHED`：双方的序列号已经同步，本端可以发送和接收数据。
- `CLOSE-WAIT`：本端已经收到并确认对端 FIN，本地发送方向仍可使用。
- `FIN-WAIT-2`：本端 FIN 已获确认，正在等待对端结束其发送方向。

状态本身缺少业务含义。`ESTABLISHED` 表明 TCP 连接已建立，业务认证、数据库写入和请求成功仍由应用协议表达。

## 十一个核心状态

| 状态 | 本端已知事实 | 常见进入事件 |
| --- | --- | --- |
| `CLOSED` | 当前没有可用的 TCP 连接控制块 | 初始状态、释放完成或异常中止 |
| `LISTEN` | 本端正在被动等待连接请求 | 应用完成 `bind` 后调用 `listen` |
| `SYN-SENT` | 本端已经发送 SYN | 主动 `connect` |
| `SYN-RECEIVED` | 本端收到 SYN，并发送了自己的 SYN+ACK | 监听端收到 SYN，或同时打开时收到 SYN |
| `ESTABLISHED` | 双方初始序列号已经同步 | 握手完成 |
| `FIN-WAIT-1` | 本端已经发出 FIN，等待对端确认或 FIN | 本端主动结束发送方向 |
| `FIN-WAIT-2` | 本端 FIN 已被确认，等待对端 FIN | 在 `FIN-WAIT-1` 收到本端 FIN 的 ACK |
| `CLOSE-WAIT` | 已收到对端 FIN，本地发送方向仍开放 | 在 `ESTABLISHED` 收到 FIN |
| `LAST-ACK` | 对端先发 FIN，本端随后也发出 FIN，等待最终 ACK | 应用在 `CLOSE-WAIT` 中结束发送方向 |
| `CLOSING` | 双方几乎同时发送 FIN，本端已收到对端 FIN，自己的 FIN 还未获确认 | 在 `FIN-WAIT-1` 先收到未确认本端 FIN 的对端 FIN |
| `TIME-WAIT` | 双向关闭已完成到最终确认阶段，本端暂时保留连接身份 | 本端确认对端 FIN 后等待计时器到期 |

`CLOSED` 常用于协议图表达“无连接状态”，系统查询工具通常不会持续列出它。Windows 还可能显示与自身实现相关的 `DeleteTCB` 或 `Bound`；分析主线仍以上表的 TCP 生命周期为准。

## 主动连接路线

客户端的典型建立路线是：

```text
CLOSED
  | connect：发送 SYN
  v
SYN-SENT
  | 收到可接受的 SYN+ACK，发送 ACK
  v
ESTABLISHED
```

阻塞 `connect` 通常在连接建立完成后返回。非阻塞 Socket 会先报告连接仍在进行，应用随后通过可写事件和 `SO_ERROR` 等接口取得完成结果。报文由内核处理，应用线程调度会让日志时间稍晚于抓包时间。

## 被动监听路线

服务端存在两类不同 Socket：

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

`accept` 从已完成连接队列中取出一个已连接 Socket。它不会发送握手报文，也不会把监听 Socket 改成 `ESTABLISHED`。取出之后，原监听 Socket 继续保持 `LISTEN`，准备处理其他客户端。

系统通常需要保存两类等待中的连接信息：一类处在握手过程中，一类已经完成握手、正在等待应用 `accept`。Linux 常以 SYN 队列和 accept 队列建立心智模型；Windows 与其他系统的内部命名、大小计算和溢出处理各有实现。`listen(backlog)` 会参与队列容量控制，其参数与最终可容纳数量之间由操作系统决定。

## 主动关闭路线

本端首先结束发送方向时，常见路线为：

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

若对端的 FIN 与确认本端 FIN 的 ACK 位于同一报文，本端可以从 `FIN-WAIT-1` 直接进入 `TIME-WAIT`。若双方接近同时关闭，本端可能经过 `CLOSING`。这些分支说明状态机由实际事件驱动，报文组合会改变可见的中间状态。

## 被动关闭路线

本端先收到对端 FIN 时，常见路线为：

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

进入 `CLOSE-WAIT` 后，本端已经读到了对方发送方向的终点，本端仍能继续发送。停留时间主要取决于本地应用何时完成工作并关闭发送方向。

## API 调用与状态迁移怎样对应

| API 或事件 | 直接作用 | 常见状态变化 |
| --- | --- | --- |
| `socket()` | 创建 Socket 对象 | 尚未形成可查询的 TCP 连接 |
| `bind()` | 选择本地地址和端口 | Socket 获得本地名字 |
| `listen()` | 转为被动监听端点 | 进入 `LISTEN` |
| `connect()` | 发起主动打开 | `CLOSED → SYN-SENT → ESTABLISHED`，调用可能跨越整个握手 |
| `accept()` | 取出已完成连接 | 子连接可在调用前已经是 `ESTABLISHED` |
| `send()` / `recv()` | 使用已有字节流 | 一般保持 `ESTABLISHED`，EOF 与错误可暴露关闭事件 |
| `shutdown(SHUT_WR)` | 声明本地发送方向结束 | 排队数据发送完后发送 FIN，常进入 `FIN-WAIT-1` 或 `LAST-ACK` |
| `close()` | 释放当前应用句柄 | 内核按当前状态和选项继续关闭或中止处理 |
| 收到 FIN | 对端发送方向结束 | `ESTABLISHED → CLOSE-WAIT`，或关闭路线中的其他分支 |
| 收到可接受的 RST | 连接被中止 | 释放连接状态并通知应用 |
| TIME-WAIT 计时器到期 | 保留期结束 | `TIME-WAIT → CLOSED` |

Python 的 `with socket.socket(...)` 在离开代码块时调用 `close()`。若多个文件描述符、复制句柄或并发线程共同引用同一底层 Socket，某个对象的关闭时刻与最终协议关闭时刻还会受到引用关系影响。

## 用暂停点观察两端状态

保存服务端为 `state_server.py`：

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

保存客户端为 `state_client.py`：

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

预期稳定观察窗口：

1. 前5秒，两端已连接 Socket 都是 `ESTABLISHED`，服务端另有一个 `LISTEN`。
2. 客户端 `SHUT_WR` 后，客户端通常进入 `FIN-WAIT-1`，收到 ACK 后进入 `FIN-WAIT-2`。
3. 服务端收到 FIN 后进入 `CLOSE-WAIT`，代码刻意停留10秒。
4. 服务端 `SHUT_WR` 后发出 FIN，客户端确认它并进入 `TIME-WAIT`；服务端短暂经过 `LAST-ACK` 后释放。

Windows 查询命令：

```powershell
Get-NetTCPConnection |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 } |
    Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
```

Linux 查询命令：

```bash
ss -tanpo '( sport = :18080 or dport = :18080 )'
```

`ss -o` 还能显示部分计时器信息。需要连续观察时，可放入 `watch -n 0.2`。状态迁移速度可能快于轮询，Wireshark 的 `tcp.port == 18080` 时间线可补全 SYN、FIN、ACK 等触发事件。

## 从一对状态反推连接阶段

假设同一时刻观察到：

```text
客户端 127.0.0.1:53120 -> 127.0.0.1:18080  FIN-WAIT-2
服务端 127.0.0.1:18080 -> 127.0.0.1:53120  CLOSE-WAIT
```

可以推导：客户端已经发送 FIN，服务端已经收到并确认该 FIN；服务端尚未发送自己的 FIN。此时服务端应用仍可发送响应，客户端仍可接收响应。下一步应查看服务端应用是否仍在处理、是否计划关闭，以及抓包中服务端是否继续发送数据。

状态配对提供强线索，完整结论仍需四元组、进程、持续时间、应用日志和报文共同支持。

## 理解检查

1. 服务端拥有一个 `LISTEN` 和三个 `ESTABLISHED`，它至少关联多少个 Socket 角色？
2. 为什么 `accept` 返回晚于客户端 `connect` 返回仍属正常？
3. 本端处于 `FIN-WAIT-2`、对端处于 `CLOSE-WAIT` 时，哪个方向已经结束？
4. 哪种事件会让主动关闭方经过 `CLOSING`？
5. 状态查询没有捕获到 `SYN-RECEIVED`，抓包却有完整握手，怎样解释？

答案要点：一个监听角色加三个已连接角色；握手由内核先完成并排队；主动关闭方的发送方向已经结束；双方接近同时发送 FIN 且自己的 FIN 尚未获确认时可进入 `CLOSING`；握手状态持续很短，轮询采样可能跨过它。

## 本章小结

- 每个 TCP 端点独立维护状态，同一连接两端经常处于不同状态。
- `listen` 创建被动监听角色，`accept` 取得内核已经完成握手的子连接。
- 主动关闭常经过 `FIN-WAIT-*` 与 `TIME-WAIT`，被动关闭常经过 `CLOSE-WAIT` 与 `LAST-ACK`。
- 状态由 API、收到的报文和计时器事件推进；API 返回时间与线上报文时间可能错开。
- 状态名适合压缩连接历史，诊断仍需结合四元组、持续时间、日志和抓包。

## 参考资料

- [RFC 9293：TCP 状态机与事件处理](https://www.rfc-editor.org/rfc/rfc9293.html)
- [ss(8) Linux 手册](https://man7.org/linux/man-pages/man8/ss.8.html)
- [Get-NetTCPConnection 文档](https://learn.microsoft.com/powershell/module/nettcpip/get-nettcpconnection)

## 导航

- [上一章：第15章 三次握手](./01-three-way-handshake.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第17章 连接关闭与半关闭](./03-close-half-close.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
