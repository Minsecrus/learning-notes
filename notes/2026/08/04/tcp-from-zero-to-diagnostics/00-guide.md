# 导读 怎样学习和实验 TCP

TCP 很适合用“程序 + 系统状态 + 抓包”一起学习。程序告诉我们应用调用了什么，系统状态告诉我们内核保存了什么，抓包告诉我们某个观察点经过了什么报文。三类证据放在同一条时间线上，抽象名词就会逐渐变成可验证的事件。

这篇导读会搭好整套教程的实验环境。完成后，你将启动一个本地服务，找到它的监听端口，发起一次连接，并在 Wireshark 中保存第一份抓包。后续各章都沿用这里的记录方法。

## 这套教程希望你获得什么能力

学完整套教程，你应当可以独立完成四类工作：

1. 从应用消息一路解释到 TCP 报文段、IP 数据报和链路层帧。
2. 编写能够处理部分读写、消息边界、超时、关闭与背压的 Socket 程序。
3. 根据四元组、序列号、确认号、窗口、标志位和选项阅读抓包。
4. 联合应用日志、系统状态与线上报文，形成一条可复查的故障证据链。

阅读时可以暂时放下字段背诵。每遇到一个新概念，先回答三个问题：它解决哪类可观察问题；它属于应用、Socket、TCP、IP 还是链路层；我们能用什么实验验证它。

## 六个观察层次

一次“发送成功”在不同层次有不同含义。整套教程统一使用下面六层证据：

| 层次 | 典型问题 | 常用证据 |
| --- | --- | --- |
| 应用语义 | 请求是否通过校验，订单是否写入数据库 | 应用日志、响应码、数据库记录 |
| Socket API | `send`、`recv`、`connect` 在何时返回 | 程序日志、返回值、异常 |
| TCP 协议 | 哪些字节得到确认，窗口如何变化 | Seq、Ack、Flags、Window |
| 操作系统实现 | 缓冲区、连接队列和计时器处于什么状态 | `Get-NetTCPConnection`、`ss`、系统指标 |
| 线上报文 | 抓包点实际看到了哪些帧和报文段 | `.pcapng` 文件、原始字节 |
| 分析器推断 | Wireshark 如何解释局部报文历史 | Retransmission、Dup ACK 等标签 |

例如，客户端的 `send` 返回，说明本地 Socket 接受了这批字节；服务端发回 TCP ACK，说明服务端 TCP 已接收相应的连续字节；服务端发回应用响应，才可能表达具体业务结果。以后看到“成功”二字，先为它补上所属层次。

## 准备工具

### Python

示例只使用 Python 3 标准库。先在 PowerShell 中检查版本：

```powershell
python --version
python -c "import socket; print(socket.__file__)"
```

若机器同时安装了多个 Python，也可以使用 Windows Python Launcher：

```powershell
py -3 --version
```

建议使用 Python 3.11 或更高版本。教程代码也尽量保持对常见 Python 3 版本的兼容。

### Wireshark 与 Npcap

Windows 上的 Wireshark 通常借助 Npcap 捕获数据。安装时保留 Npcap，并确认接口列表中出现 **Adapter for loopback traffic capture** 一类的回环捕获接口。不同版本显示名称可能略有差异。

Wireshark 有两种常用过滤器：

- **捕获过滤器**在记录前缩小数据范围，例如 `tcp port 8765`。
- **显示过滤器**在已有记录中筛选报文，例如 `tcp.port == 8765`。

本教程优先保存较完整的受控实验抓包，再使用显示过滤器分析。这样可以随时切换筛选条件。

### Windows 网络命令

以下命令会在后续章节反复出现：

```powershell
Get-NetTCPConnection
Resolve-DnsName example.com
Test-NetConnection example.com -Port 443
route print
arp -a
```

Linux 环境可使用 `ss -tanp`、`ip route`、`ip neigh`、`tcpdump` 等工具完成对应观察。涉及延迟、丢包、乱序和 MTU 的可控实验时，教程会单独给出 Linux 或 WSL 说明。

### 实验目录与文件命名

在这个学习仓库中，代码实验适合放入 `experiments/`。可以从仓库根目录创建专用目录：

```powershell
New-Item -ItemType Directory -Force .\experiments\tcp-tutorial
Set-Location .\experiments\tcp-tutorial
```

后续章节给出的 `*_server.py` 与 `*_client.py` 可以保存在这里。每次抓包使用“章节 + 场景 + 轮次”命名，例如 `ch03-stream-gap-300ms-run1.pcapng`；日志可用对应的 `.client.log` 与 `.server.log` 后缀。这样的命名能让程序、日志和抓包自然配成一组。

日志时间建议采用带时区的 ISO 8601 格式，例如：

```text
2026-08-04T15:20:31.428+08:00 role=client event=connected local=127.0.0.1:53124 peer=127.0.0.1:9023
```

同一行写明角色、事件、本地地址和远端地址，后续与 Wireshark 时间轴对齐会更加直接。

## 第一次受控实验

我们先借用 Python 自带的 HTTP 服务。它只承担环境验证，正式的 TCP 示例会在后续章节从 Socket API 开始编写。

打开 PowerShell 窗口 A，运行：

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

看到 `Serving HTTP on 127.0.0.1 port 8765` 后，保留窗口。此时进程已经在 IPv4 回环地址 `127.0.0.1` 的 TCP 端口 `8765` 上监听。

打开窗口 B，记录监听状态：

```powershell
Get-NetTCPConnection -LocalAddress 127.0.0.1 -LocalPort 8765 -State Listen |
  Format-Table -AutoSize
```

接着打开 Wireshark，选择回环捕获接口，开始捕获，在显示过滤器中输入：

```text
tcp.port == 8765
```

回到窗口 B 发起请求：

```powershell
curl.exe --http1.1 -v http://127.0.0.1:8765/ --output NUL
```

`curl.exe` 明确调用系统中的 curl 可执行文件，避免旧版 PowerShell 的命令别名影响参数解释。请求完成后停止抓包，并保存为 `tcp-guide-first-capture.pcapng`。

### 预期看到什么

窗口 A 会打印一条访问日志。窗口 B 中的 curl 会显示它连接了 `127.0.0.1:8765`，随后打印请求与响应首部。Wireshark 中通常能看到：

1. 带 SYN 的连接发起报文。
2. 带 SYN、ACK 的服务端响应。
3. 客户端的 ACK。
4. 携带 HTTP 请求和响应字节的数据报文段。
5. 带 FIN 或 ACK 的关闭过程。

实际报文数量会受到数据大小、系统调度、确认策略与抓包位置影响。此刻只需确认同一条连接同时出现在程序日志、系统状态和抓包里。第6章会逐项解释这些报文。

实验结束后，在窗口 A 按 `Ctrl+C` 关闭服务。再次运行状态查询，监听条目应当消失。

## 每次实验怎样记录

建议为每次实验保留一张简短记录表：

```text
实验名称：
开始时间与时区：
客户端命令和 PID：
服务端命令和 PID：
客户端本地地址:端口：
服务端本地地址:端口：
预先预测：
应用日志文件：
系统状态快照：
抓包接口与过滤器：
抓包文件：
观察结果：
结论所属层次：
仍待验证的问题：
```

记录时间时保留毫秒并注明时区。程序日志、PowerShell 输出和 Wireshark 时间格式统一后，事件对应会轻松很多。连接建立后还应记录双方地址与端口；这四项值会在第4章组成连接的核心标识。

## 让实验具有解释力

一次实验只改变一个主要变量。例如研究 `recv(4)` 时，先固定消息内容、发送次数和连接数量；研究发送间隔时，再保持读取缓冲区不变。每轮先写下预测，然后运行三次以上，记录稳定现象与可变现象。

结论最好得到两类证据支持。例如“服务正在监听”可由 `Get-NetTCPConnection` 和一次成功连接共同支持；“服务端收到了 12 个字节”可由服务端累计读取长度与 TCP 序列号范围共同支持。Wireshark 的分析标签很有帮助，其身份属于分析器基于局部抓包得出的判断，原始 Seq、Ack、时间和长度仍是复核基础。

## 常见环境问题

- **端口已占用**：换用 `8766` 等空闲高位端口，或根据 `OwningProcess` 查明占用者。关闭进程前先确认它属于本次实验。
- **回环接口看不到报文**：检查选择的捕获接口、Npcap 安装状态以及 Wireshark 权限。Windows 的真实网卡通常看不到本机回环流量。
- **抓包中缺少 DNS**：系统可能已有缓存，本地实验也直接使用了 IP。第1章会将 DNS 查询作为独立证据观察。
- **出现很多无关流量**：使用 `tcp.port == 8765` 作为显示过滤器，再通过 `tcp.stream` 锁定单条连接。
- **防火墙弹出提示**：回环实验仅绑定 `127.0.0.1`。扩展到局域网前，先确认网络类型、监听地址和授权范围。

## 安全与隐私约定

所有实验都应限定在自己控制的进程、主机和测试网络中。抓包可能包含 URL、Cookie、令牌、聊天内容以及其他人的流量。共享文件前先检查 Packet Bytes、Follow TCP Stream 与名称解析结果，并清理敏感信息。教程默认使用回环地址、测试文本和临时端口，降低意外暴露的机会。

## 理解检查

1. `send` 返回、TCP ACK、应用响应分别属于哪一层证据？
2. 为什么同一实验值得同时保存客户端日志、服务端日志和抓包？
3. 捕获过滤器与显示过滤器分别在什么阶段生效？
4. 回环通信在 Windows 上通常选择哪个捕获接口？
5. Wireshark 的 Retransmission 标签为什么需要结合原始字段和抓包完整性复核？

能够用自己的话回答这五题，就可以进入第一篇。后续章节会逐渐把首次抓包里的每个字段都解释清楚。

---

[返回教程总览](../tcp-from-zero-to-diagnostics.md) · [下一篇：TCP 基础直觉与通信模型](./01-foundations.md)
