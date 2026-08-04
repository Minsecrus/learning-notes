# 第18章 TIME_WAIT、CLOSE_WAIT 和连接释放

应用已经调用 `close`，系统里仍可能列出这条连接。看到 `TIME-WAIT` 或 `CLOSE-WAIT` 时，先问三个问题：这是连接哪一端的状态，触发状态的最后一个报文是什么，状态已经持续多久。答案会把协议所需的短暂保留与应用资源释放问题区分开来。

> RFC 状态图常写作 `TIME-WAIT`、`CLOSE-WAIT`。Windows `Get-NetTCPConnection` 通常显示 `TimeWait`、`CloseWait`，Linux `ss` 通常显示带连字符的形式；本章正文沿用 RFC 写法。

## 两个状态来自两条不同路线

典型关闭配对如下：

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

这张图揭示关键差别：

- `TIME-WAIT` 出现在协议关闭已经走到最终确认的一端，后续离开主要依赖计时器。
- `CLOSE-WAIT` 出现在已经收到对端 FIN、仍等待本地应用结束发送的一端，后续离开主要依赖应用调用。

主动关闭方常进入 `TIME-WAIT`。双方同时关闭时，两端都有机会进入 `TIME-WAIT`；具体路线由 FIN 与 ACK 的到达顺序决定。

## TIME-WAIT 为什么保留连接身份

### 作用一：仍能确认重传的 FIN

设 A 最后收到 B 的 FIN，并发送最终 ACK：

```text
B (LAST-ACK) ---- FIN ----> A
B            <--- ACK ----- A (TIME-WAIT)
```

若这个 ACK 在网络中丢失，B 会重传 FIN。A 保留 `TIME-WAIT` 状态后，仍能识别这次重传并再次发送 ACK。RFC 状态机还会在 `TIME-WAIT` 收到对应 FIN 时重新启动等待计时器。B 得到确认后即可从 `LAST-ACK` 释放。

### 作用二：隔离旧连接的迟到报文

一条 TCP 连接由协议上下文与四元组识别。连接关闭后，网络中仍可能有延迟、重复或重传的旧报文。如果同一四元组立即建立新连接，旧报文有机会落入新连接的时间范围。保留一段时间可以让旧报文在网络中自然消失，并保护新旧连接的边界。

经典规范用 MSL（Maximum Segment Lifetime，报文段最大生存时间）描述单个报文段可能在网络中存活的上界，`TIME-WAIT` 采用 $2\times\mathrm{MSL}$ 的模型：

$$
T_{\mathrm{TIME\text{-}WAIT}}=2\times \mathrm{MSL}
$$

具体系统选择的持续时间、重用策略和可调参数属于实现细节。Windows、Linux、不同内核版本与网络命名空间可能呈现不同结果。诊断报告应记录实测持续时间与系统版本，并把 `2MSL` 当作协议模型解释。

## TIME-WAIT 由内核维护

应用关闭 Socket 后，内核仍可以保存精简的连接记录。因此可能出现这些现象：

- 进程已经退出，`TIME-WAIT` 条目仍存在。
- 查询工具中的拥有进程为空、为系统进程或缺少原应用 PID。
- 同一服务可以继续接受新连接，因为新客户端通常选择新的临时端口，四元组随之变化。
- 等待期结束后条目自动消失，应用无需再次调用清理函数。

`TIME-WAIT` 数量的意义需要结合连接速率、主动关闭角色、目标分布、临时端口范围、内存占用和实际错误。短连接速率很高时，数量自然接近：

$$
N\approx \lambda\times T
$$

其中 $\lambda$ 是每秒进入 `TIME-WAIT` 的连接数，$T$ 是平均保留秒数。例如每秒100条连接、平均保留60秒，稳态数量约为6000。这个估算能帮助判断数量是否符合业务模式。

## CLOSE-WAIT 在等待本地应用

本端收到可接受的 FIN 后，内核确认 FIN，并把 EOF 交给应用。状态进入 `CLOSE-WAIT`：

```text
对端发送方向：数据 ... FIN -> 本端 recv 最终返回 b""
本端发送方向：仍可发送剩余响应
```

应用完成响应后调用 `shutdown(SHUT_WR)` 或 `close`，本端发送 FIN 并进入 `LAST-ACK`。若应用一直保留 Socket，本端就持续停在 `CLOSE-WAIT`。

短暂 `CLOSE-WAIT` 完全符合正常处理流程。长期、大量且持续增长的 `CLOSE-WAIT` 常见原因包括：

- 代码读到 EOF 后遗漏关闭路径；
- 异常分支提前跳出，Socket 没有进入 `finally` 或上下文管理器；
- 业务线程卡在数据库、锁、队列或外部调用，尚未执行关闭；
- 连接对象仍被其他线程、文件对象或引用持有；
- 应用设计允许对端半关闭后进行长时间响应，此时持续时间应符合协议约定。

`CLOSE-WAIT` 条目通常仍对应活着的本地 Socket 和进程资源。诊断时 PID、线程栈、打开句柄数与应用日志很有价值。

## 可控实验：制造可观察窗口

保存以下程序为 `wait_states.py`：

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

### 实验 A：观察 CLOSE-WAIT

服务端为每条连接保留30秒窗口：

```powershell
python .\wait_states.py server --count 1 --hold 30
```

另一个终端运行：

```powershell
python .\wait_states.py client --count 1
```

客户端发送 FIN 后会等待响应。服务端内核确认 FIN，服务端进程睡眠期间可以稳定观察 `CLOSE-WAIT`；客户端通常处于 `FIN-WAIT-2`。30秒后服务端发送响应和 FIN，双方继续释放。

### 实验 B：积累短连接的 TIME-WAIT

服务端快速处理20条连接：

```powershell
python .\wait_states.py server --count 20 --hold 0
```

客户端再运行：

```powershell
python .\wait_states.py client --count 20
```

客户端先结束发送，并最终确认服务端 FIN，因此客户端一侧通常会出现多条 `TIME-WAIT`。客户端日志还能显示每次使用的临时端口。

## Windows 与 Linux 状态统计

Windows 查看本实验的所有状态：

```powershell
Get-NetTCPConnection |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 } |
    Sort-Object State, LocalPort |
    Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
```

分别计数：

```powershell
$timeWait = Get-NetTCPConnection -State TimeWait -ErrorAction SilentlyContinue |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 }
$closeWait = Get-NetTCPConnection -State CloseWait -ErrorAction SilentlyContinue |
    Where-Object { $_.LocalPort -eq 18080 -or $_.RemotePort -eq 18080 }
"TIME_WAIT=$($timeWait.Count) CLOSE_WAIT=$($closeWait.Count)"
```

Linux 可查看条目与计时器：

```bash
ss -tanpo state time-wait | grep ':18080'
ss -tanp state close-wait | grep ':18080'
```

不同工具对状态名使用连字符、大小写或紧凑写法，语义对应同一 TCP 状态。

## Wireshark 怎样提供佐证

过滤 `tcp.port == 18080`，为每条连接检查：

1. 哪一端先发送 FIN；它通常是后续 `TIME-WAIT` 候选端。
2. 对端何时确认 FIN；确认后该端通常进入 `CLOSE-WAIT`。
3. 对端在 `CLOSE-WAIT` 窗口中是否继续发送数据。
4. 最后一个 FIN 由谁发送，最终 ACK 由谁发送。
5. 若 FIN 重传，最终 ACK 是否缺失于当前抓包点。

Wireshark 无法直接看到应用是否关闭句柄。系统状态和 PID 能补足这一层；应用日志与线程栈继续解释本地代码为何停留。

## 面对大量状态的诊断顺序

### 大量 TIME-WAIT

按以下顺序建立证据：

1. 按本地端口、远端地址和远端端口分组，确定业务归属。
2. 从抓包识别主动关闭方，核对架构预期。
3. 测量新建连接速率与实际保留时间，用 $N\approx\lambda T$ 估算正常规模。
4. 查看连接失败、临时端口耗尽、绑定失败、内存压力和延迟指标。
5. 评估连接池、长连接、HTTP Keep-Alive 或应用复用能否减少无意义的频繁建连。
6. 任何内核参数与端口复用策略都先在对应系统文档和受控负载中验证。

`SO_REUSEADDR` 主要影响绑定与地址复用规则，其语义具有平台差异。它与 `TIME-WAIT` 的协议职责应分别评估。

### 大量 CLOSE-WAIT

1. 找出拥有这些 Socket 的 PID 与调用栈。
2. 检查应用是否已经记录 EOF、远端关闭或请求取消。
3. 比较条目年龄，区分短暂处理与长期滞留。
4. 检查正常、异常、超时和取消路径是否都能进入资源释放代码。
5. 检查线程池、数据库调用、锁等待和发送阻塞。
6. 建立连接数、文件句柄数与 `CLOSE-WAIT` 年龄分布监控。

## 理解检查

1. 最终 ACK 丢失后，`TIME-WAIT` 端还能做什么？
2. 应用进程已经退出，系统仍显示若干 `TIME-WAIT`，由谁维护这些条目？
3. 服务端显示 `CLOSE-WAIT` 时，哪一个方向已经结束？服务端还能否发送？
4. 每秒建立200条短连接，实测 `TIME-WAIT` 平均保留50秒，稳态数量约为多少？
5. 单次状态快照显示1000条 `TIME-WAIT`，还需补充哪些证据才能判断影响？

答案要点：识别重传 FIN 并再次 ACK；内核 TCP 实现；对端到服务端的方向已结束，服务端方向仍可发送；约10,000条；连接速率、持续时间、四元组分布、主动关闭角色、端口与内存资源、实际错误和延迟都应纳入判断。

## 本章小结

- `TIME-WAIT` 为最终 ACK 重传响应和旧报文隔离保留连接身份。
- `CLOSE-WAIT` 表明已收到对端 FIN，后续离开依赖本地应用结束发送方向。
- 短暂状态属于正常生命周期，持续时间、增长趋势和资源影响决定诊断优先级。
- `2MSL` 是协议模型，具体持续时间和复用策略由操作系统实现。
- 状态数量需要与连接速率、角色、四元组分布、PID、日志和抓包共同解释。

## 参考资料

- [RFC 9293：TCP 关闭、TIME-WAIT 与状态处理](https://www.rfc-editor.org/rfc/rfc9293.html)
- [Get-NetTCPConnection 文档](https://learn.microsoft.com/powershell/module/nettcpip/get-nettcpconnection)
- [ss(8) Linux 手册](https://man7.org/linux/man-pages/man8/ss.8.html)

## 导航

- [上一章：第17章 连接关闭与半关闭](./03-close-half-close.md)
- [所属篇：第四篇](../04-lifecycle.md)
- [下一章：第19章 RST、异常断开和半开连接](./05-rst-half-open.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
