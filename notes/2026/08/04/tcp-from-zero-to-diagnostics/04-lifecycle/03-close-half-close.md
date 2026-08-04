# 第17章 连接关闭与半关闭

TCP 提供全双工字节流。客户端到服务端与服务端到客户端各有一个发送方向，也各有独立的序列号空间。一个方向发送 FIN，只表达“这个方向已经发送完全部字节”。另一个方向可以继续传输数据，这种状态称为半关闭。

## 从一个请求场景开始

设客户端要上传一段长度未知的输入，服务端必须等输入结束后才能计算结果。应用可以约定：

1. 客户端持续发送请求字节。
2. 客户端调用 `shutdown(SHUT_WR)`，用 TCP EOF 表达请求结束。
3. 服务端 `recv` 读到 EOF，开始计算并发送响应。
4. 服务端发送完响应后结束自己的发送方向。
5. 客户端读到响应 EOF，连接完成释放。

第三步发生时，服务端仍然拥有可用的发送方向，因此它可以在收到客户端 FIN 后返回响应。

## 把连接画成两个方向

令 A 为客户端，B 为服务端：

```text
A 的 send / B 的 recv：A ==========================> B
B 的 send / A 的 recv：A <========================== B
```

A 调用 `shutdown(SHUT_WR)` 后，第一条箭头到达终点：

```text
A 的发送方向：A ========== data ========= FIN =====> B  已结束
B 的发送方向：A <=============== response ========== B  仍开放
```

FIN 按序排列在此前发送的字节之后。B 只有在此前所有连续字节都可交付后，才会把这个方向的 EOF 交给应用。FIN 也消耗一个序列号位置，便于确认与重传。

## 逐步计算数据、FIN 和确认号

假设握手后：

- A 下一个发送序列号为 1001；
- B 下一个发送序列号为 9001。

A 发送 120 字节请求，随后发送 FIN。若数据和 FIN 位于两个报文段：

| 方向 | Flags | Seq | TCP 数据长度 | Ack 的计算 |
| --- | --- | ---: | ---: | --- |
| A → B | ACK, PSH | 1001 | 120 | 数据覆盖 1001 到 1120，下一位置为 1121 |
| A → B | ACK, FIN | 1121 | 0 | FIN 占用位置 1121，下一位置为 1122 |
| B → A | ACK | 9001 | 0 | `Ack = 1122` |

实现也可以把最后一批数据与 FIN 放进同一报文：`Seq=1001`、数据长度120、FIN置位。下一序列号仍按以下公式计算：

$$
\mathrm{nextSeq}=\mathrm{Seq}+\mathrm{payloadLen}+\mathrm{SYN}+\mathrm{FIN}
$$

其中 SYN 与 FIN 置位时各按1计算，所以结果同样是 $1001+120+1=1122$。

B 在收到 A 的 FIN 后发送40字节响应。它使用 `Seq=9001`，发送后下一位置为9041。A 可以返回 `Ack=9041`。B 最后发送 `Seq=9041, FIN, ACK`，A 确认 `Ack=9042`。两个方向的 Seq/Ack 始终独立计算。

## shutdown 与 close 的应用语义

### shutdown(SHUT_WR)

Python 中：

```python
sock.shutdown(socket.SHUT_WR)
```

它声明本地应用已经完成发送。此前交给内核的排队字节会排在 FIN 前面。调用成功后，这个 Socket 仍可调用 `recv`。再次发送通常会得到 `BrokenPipeError`、`OSError` 或平台对应错误。

`sendall` 返回表示 Python 已把全部参数字节交给本地 Socket 发送路径；对端应用是否读取和处理，需要应用响应或其他业务证据确认。调用 `shutdown(SHUT_WR)` 可以清楚表达发送边界。

### close

```python
sock.close()
```

`close` 释放应用持有的 Socket 资源，之后代码失去继续读写该对象的能力。默认配置下，内核通常尝试有序处理已排队数据并推进 FIN 关闭；实际完成时刻还会受到缓冲、引用计数、超时和 Socket 选项影响。需要先结束发送、再完整读取对端剩余数据的协议，适合显式调用 `shutdown(SHUT_WR)`，最后再 `close`。

### shutdown(SHUT_RD) 与 SHUT_RDWR

`SHUT_RD` 表达本地应用停止接收，具体缓冲处理和后续调用结果具有平台差异。`SHUT_RDWR` 同时作用于读写方向。教学主线优先使用 `SHUT_WR` 建立清晰的线协议边界，因为它直接对应一个可抓取、可确认的 FIN。

## recv 返回空字节串意味着什么

对阻塞 TCP Socket 使用非零缓冲长度：

```python
chunk = sock.recv(4096)
if chunk == b"":
    print("EOF")
```

`b""` 表示这个 TCP 方向此前的有序字节已经读完，并且对端发送方向已正常到达 EOF。需要同时满足两个条件：

1. FIN 之前的连续数据已经交付给本地应用；
2. FIN 已经按序到达接收位置。

若接收缓冲中还有数据，`recv` 会先返回这些数据，下一次或后续某次调用再返回 `b""`。EOF 具有持续性，后续读取仍会得到结束结果。

应用协议可以合法定义“长度为0的消息”。长度字段编码的空消息仍有它的帧结构；Socket 层的 `recv(4096) == b""` 表示字节流终点。两者位于不同层次。

收到 RST 时，应用通常得到连接重置异常。网络长时间无响应时，`recv` 可能继续等待，或者在应用设定超时后抛出 `TimeoutError`。因此 EOF、重置和超时代表三类不同证据。

## FIN 仍然参加可靠传输

FIN 位于序列号空间中，也会经历确认与必要的重传。发送端调用 `shutdown(SHUT_WR)` 成功，表示本地 API 已接受结束发送的请求；对端 FIN 的确认可能稍后才到。若包含 FIN 的报文或对应 ACK 丢失，内核会依照 TCP 计时器继续处理。应用若需要限制整个关闭阶段的最长等待时间，应另行设置连接与业务生命周期策略。

接收端内核一旦按序收到 FIN，就会发送 ACK，并把连接推进到相应状态。应用线程可以稍后才调用 `recv`，此时 EOF 已经在接收路径中等待交付。系统状态可能先显示 `CLOSE-WAIT`，应用日志随后才打印 `recv == b""`，两者的时间差来自内核处理与线程调度。

FIN 前仍有序列缺口时，接收端先确认当前连续前缀，并等待缺失字节补齐。所有前序字节与 FIN 连成连续序列后，应用才观察到 EOF。这个规则保证“读到 EOF”同时意味着对端在 FIN 前发送的有序字节已经完成交付。

## 可控半关闭实验

保存为 `half_close_server.py`：

```python
import socket
import time

ADDR = ("127.0.0.1", 18080)

with socket.socket() as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(ADDR)
    listener.listen()
    print("listening", ADDR, flush=True)
    conn, peer = listener.accept()
    with conn:
        request = bytearray()
        while True:
            chunk = conn.recv(7)
            print("server recv", repr(chunk), flush=True)
            if chunk == b"":
                break
            request.extend(chunk)

        print("request EOF; response remains writable", flush=True)
        time.sleep(8)  # 留出 CLOSE_WAIT 观察窗口
        response = f"received={len(request)};".encode() + bytes(request).upper()
        conn.sendall(response)
        conn.shutdown(socket.SHUT_WR)
        print("response sent and write side closed", flush=True)
```

保存为 `half_close_client.py`：

```python
import socket

with socket.socket() as sock:
    sock.connect(("127.0.0.1", 18080))
    for part in (b"hello ", b"tcp ", b"half-close"):
        sock.sendall(part)

    sock.shutdown(socket.SHUT_WR)
    print("client request EOF sent", flush=True)

    response = bytearray()
    while True:
        chunk = sock.recv(5)
        print("client recv", repr(chunk), flush=True)
        if chunk == b"":
            break
        response.extend(chunk)
    print("complete response", response.decode(), flush=True)
```

请先启动 Wireshark，再运行服务端与客户端。客户端三次 `sendall` 的边界可能在服务端 `recv(7)` 中重新组合。服务端读到 `b""` 后等待8秒，期间它处于 `CLOSE-WAIT`，仍可发送响应。客户端已经结束发送方向，仍会读取到完整响应。

Windows 观察命令：

```powershell
Get-NetTCPConnection |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 } |
    Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State
```

Linux 观察命令：

```bash
ss -tanpo '( sport = :18080 or dport = :18080 )'
```

## Wireshark 预期时间线

过滤器使用：

```text
tcp.port == 18080
```

重点观察：

1. 客户端最后一批请求数据与 FIN 可能位于同一报文，也可能分开。
2. 服务端 ACK 覆盖请求字节和 FIN 后，客户端常显示 `FIN-WAIT-2`，服务端显示 `CLOSE-WAIT`。
3. 服务端在收到客户端 FIN 后继续发送响应数据。
4. 服务端响应末尾与 FIN可能组合，也可能由独立报文承载。
5. 客户端确认服务端 FIN 后，主动关闭路线进入 `TIME-WAIT`。

一次正常关闭可能呈现三段控制报文：A 发 FIN，B 用同一报文发送 FIN+ACK，A 发最终 ACK。若 B 先单独确认再发送 FIN，控制过程常见四段。应用数据、延迟 ACK、报文合并与重传还会增加可见报文数量。分析时逐个查看 Flags、Seq、Ack 与数据长度，就能恢复实际路线。

## 半关闭适合哪些协议

半关闭很适合“读取直到 EOF，然后返回一个响应”的单次批处理协议，例如上传一段未知长度输入后计算摘要。它会永久结束该连接的一个发送方向，因此同一条连接很难继续承载后续双向请求。需要长连接、多请求、多路复用时，长度字段或帧类型更适合作为消息边界。

应用还应定义：谁先半关闭、收到 EOF 后允许发送哪些响应、错误怎样表达、等待多久，以及双方何时最终 `close`。清晰的协议约定能避免双方都等待对方先结束的停滞。

## 理解检查

1. A 发送 `Seq=5001`、长度99的数据，并在同一报文置 FIN。B 应确认到多少？
2. 服务端 `recv(4096)` 先返回100字节，下一次返回 `b""`。这两个返回值怎样对应 FIN？
3. 客户端执行 `shutdown(SHUT_WR)` 后，还能进行哪一方向的操作？
4. 抓包中服务端在收到客户端 FIN 后又发送200字节数据，这是否符合 TCP 模型？
5. 三段与四段关闭控制报文的差异来自哪里？

答案要点：`Ack=5101`；缓存数据先交付，FIN 随后表现为 EOF；客户端仍可接收；服务端发送方向保持开放，因此可以继续发送；对首个 FIN 的 ACK 与本端 FIN 可以组合，也可以分别发送。

## 本章小结

- TCP 的两个发送方向独立结束，FIN 只关闭发送它的方向。
- FIN 按序位于此前字节之后，并消耗一个序列号位置。
- 非零长度 `recv` 返回 `b""` 表示此前字节已经读完并到达正常 EOF。
- `shutdown(SHUT_WR)` 保留接收能力，适合显式表达请求发送结束。
- 关闭报文数量由实际 ACK、FIN、数据组合和重传决定。

## 参考资料

- [RFC 9293：Closing a Connection](https://www.rfc-editor.org/rfc/rfc9293.html)
- [Python socket.shutdown 与 close 文档](https://docs.python.org/3/library/socket.html)

## 导航

- [上一章：第16章 TCP 连接状态机](./02-state-machine.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第18章 TIME_WAIT、CLOSE_WAIT 和连接释放](./04-time-wait-close-wait.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
