# 第36章 NAT、防火墙和负载均衡

客户端日志记录 `10.0.0.8:53124 → 203.0.113.20:443`，服务端日志却记录 `10.20.0.15:41872 → 10.20.1.9:8443`。两份日志都可能准确：中间路径可以改写地址与端口，也可以在代理处结束一条 TCP 连接，再发起另一条连接。

理解中间设备的关键是先画出抓包点，再为每一段路径分别记录四元组、连接建立时间和连接终止方式。四元组只在给定观察位置上成立。

## 一、NAT 怎样改写四元组

网络地址转换设备维护一张映射表。以常见的源 NAT 为例，客户端发出的报文可能经历：

```text
内网侧：10.0.0.8:53124  → 203.0.113.20:443
公网侧：198.51.100.7:62001 → 203.0.113.20:443
```

设备将源 IP 与源端口改成公网映射值，并更新 IP、TCP 校验相关信息。返回报文命中该映射后，目的地址与端口会还原为客户端端点。端口转换让多个内网连接共享一个公网地址。

目标 NAT 常用于把一个对外服务地址映射到内网地址：

```text
外部观察：客户端 → 203.0.113.20:443
内部观察：客户端 → 10.20.1.9:8443
```

一条映射通常与协议、内外地址、端口、方向和计时器有关。具体字段与筛选算法属于设备实现。映射表容量有限；连接速率高、每个映射保留时间长或端口范围较小时，端口与表项会成为资源上限。

NAT 进行报文转发与字段改写时，端点之间仍维护同一组 TCP 字节进度。不同抓包点看到的 IP 与端口会变化，Seq/Ack 通常保持同一逻辑序列空间；带完整 TCP 代理能力的设备则会建立独立序列空间。

## 二、有状态防火墙观察的是自己的连接表

有状态防火墙会根据经过它的报文建立状态，并按策略允许后续双向流量。它的状态来源于局部观察，和两端操作系统中的 TCP 状态机属于三个独立视角。

例如双方长时间保持 `ESTABLISHED`，防火墙的空闲计时器已经删除对应表项。下一次应用写入时可能出现静默丢弃、显式拒绝或重新建立表项，表现取决于策略。单侧主机此时仍可能显示 `ESTABLISHED`，直到重传、Keepalive、应用截止时间或后续 I/O 把故障暴露出来。

诊断防火墙问题时记录：

- 首个 SYN 在每个抓包点是否可见；
- SYN+ACK 能否沿回程到达客户端；
- 某个固定方向、端口或报文尺寸是否稳定消失；
- 设备日志中的规则、动作、会话 ID 与表项年龄；
- 空闲前后的时间差是否接近设备回收阈值；
- RST 或 ICMP 来自哪个地址与哪个抓包点。

静默丢弃通常产生重传与超时；显式拒绝可以更快返回 RST 或 ICMP。两种策略体现不同的安全、可观测性和客户端恢复目标。

## 三、四层负载均衡有多种数据路径

四层负载均衡依据 IP、端口与连接状态选择后端，主要关心 TCP 连接和字节流。常见实现包括地址转换、直接服务器返回、隧道转发和 TCP 代理。

在 NAT 或隧道型转发中，负载均衡器可以让一个客户端连接的报文继续到达选定后端。后端选择通常在连接建立时固定，以保持后续报文进入同一状态。返回流量可能再次经过负载均衡器，也可能由后端直接返回客户端，实际路径需要结合部署确认。

在 TCP 代理型四层负载均衡中，设备接收客户端连接，并从本机连接后端：

```text
连接 A：客户端 C  ⇄ 负载均衡器 L 的前端
连接 B：负载均衡器 L 的后端 ⇄ 服务端 S
```

两条连接各有三次握手、初始序列号、窗口、拥塞状态、重传计时器与关闭过程。L 可以重新分段、缓冲、限速，也可以在一侧故障后选择怎样关闭另一侧。连接 A 的帧号与 Seq 无法直接套到连接 B；应用字节、时间窗口和请求 ID 才是更稳定的对应依据。

## 四、七层代理为什么天然形成两条连接

七层代理需要理解 HTTP、数据库协议或自定义协议的消息。它终止客户端侧 TCP，从字节流中解析应用消息，再通过后端连接发送。后端连接还可能来自连接池，所以映射关系可以是：

- 多个客户端连接依次复用一个后端连接；
- 一个客户端的多个请求分散到不同后端连接；
- 代理缓冲完整请求后，稍晚才向后端写入；
- 代理先向客户端返回缓存内容，此次请求没有产生新的后端传输。

因此，代理前后的 TCP 分段数量、Seq/Ack、窗口、重传和 FIN 时间各自独立。客户端收到代理侧 ACK，含义是代理主机的 TCP 已接收相应字节。后端应用的处理结果需要由应用响应、代理日志与后端日志来证明。

一个常见时间线是：

```text
00.000 C→L  完成握手
00.006 C→L  请求字节到达，L 的 TCP 确认
00.010 L→S  从连接池取得连接并发送请求
00.035 S→L  返回响应
00.038 L→C  写入客户端连接
```

这里 `28 ms` 的代理后端阶段只能从 L 与 S 的证据中确认。客户端抓包只看到请求被 L 确认，以及响应在稍后到达。

## 五、源地址传递与信任边界

后端在独立连接上通常看到代理的源地址。应用若需要原始客户端地址，可以采用经认证网络路径传递的元数据：HTTP 的标准 `Forwarded` 字段、部署约定中的转发头，或连接起始处的 PROXY protocol 元数据。每种方案都需要明确可信代理集合、字段覆盖规则和解析上限。

客户端可以自行构造普通 HTTP 头。代理应在受信入口删除或覆盖外部传入的同名字段，再写入经过验证的来源信息。PROXY protocol 会在实际应用数据之前增加固定格式或二进制元数据，服务端监听端口需要按同一协议配置；配置错配时，后端可能把元数据当成应用请求并立即报错。

日志中建议同时保存：直接对端地址、可信代理给出的原始地址、请求 ID、代理路由 ID、前端连接 ID、后端连接 ID和时间戳。直接对端地址始终来自当前 Socket，来源链字段则依赖受信配置。

## 六、空闲超时需要沿整条路径对齐

连接寿命同时受到客户端、NAT、防火墙、负载均衡器、代理连接池、服务端和应用协议控制。假设路径上的最短空闲回收时间是 60 秒，而应用每 5 分钟才发送一次消息，那么中间表项可能在两次消息之间消失。

配置时可以先列出一张表：

| 层次 | 示例参数 | 负责发现或处理的事件 |
| --- | --- | --- |
| 客户端应用 | 请求截止时间、心跳周期 | 请求迟迟无结果、业务会话健康 |
| TCP 主机 | Keepalive、User Timeout | 空闲连接路径、已发送数据长期无确认 |
| NAT / 防火墙 | 状态表空闲时间 | 中间设备资源回收 |
| L4/L7 设备 | 前端与后端空闲时间 | 两侧连接和连接池回收 |
| 服务端应用 | 读取、空闲与总超时 | 慢连接、闲置会话、过载保护 |

心跳周期通常留出抖动与重传余量，并低于路径中最短的可控空闲阈值。实际阈值需要从设备配置与受控测试确认。第37章会继续比较 Keepalive、应用心跳与业务健康检查覆盖的层次。

## 七、Windows 实验：同时观察代理两侧

实验全部绑定回环地址，只服务于本机。先把下面代码保存为临时文件 `proxy36.py`：

```python
import socket
import threading

FRONT = ("127.0.0.1", 3636)
BACK = ("127.0.0.1", 3637)

def relay(source, target, label):
    total = 0
    try:
        while True:
            data = source.recv(65536)
            if not data:
                break
            target.sendall(data)
            total += len(data)
    finally:
        print(f"{label}: {total} bytes")
        try:
            target.shutdown(socket.SHUT_WR)
        except OSError:
            pass

with socket.socket() as listener:
    listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    listener.bind(FRONT)
    listener.listen(1)
    print("front listening", listener.getsockname())
    client, client_addr = listener.accept()
    with client, socket.create_connection(BACK, timeout=5) as backend:
        print("front", client.getsockname(), client.getpeername())
        print("back ", backend.getsockname(), backend.getpeername())
        t1 = threading.Thread(target=relay, args=(client, backend, "C->P->S"))
        t2 = threading.Thread(target=relay, args=(backend, client, "S->P->C"))
        t1.start(); t2.start(); t1.join(); t2.join()
```

在 Wireshark 中捕获 Npcap Loopback Adapter，并使用：

```text
tcp.port == 3636 || tcp.port == 3637
```

随后在三个 PowerShell 终端依次运行：

```powershell
python -m http.server 3637 --bind 127.0.0.1
python .\proxy36.py
curl.exe --http1.1 http://127.0.0.1:3636/
```

连接存在期间可以在第四个终端记录状态：

```powershell
Get-NetTCPConnection |
  Where-Object { $_.LocalPort -in 3636,3637 -or $_.RemotePort -in 3636,3637 } |
  Format-Table LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess
```

预期证据包括两组三次握手、两个不同的四元组、各自独立的相对 Seq/Ack，以及相同 HTTP 请求字节先后出现在 3636 与 3637 流中。代理输出还会给出两侧 Socket 地址和转发字节数。抓包中可用 `tcp.stream` 分别跟踪两条连接。

## 八、Linux 扩展与排障报告

同一实验在 Linux 上可以配合以下命令：

```bash
ss -tnp '( sport = :3636 or dport = :3636 or sport = :3637 or dport = :3637 )'
sudo tcpdump -ni lo '(tcp port 3636 or tcp port 3637)'
sudo conntrack -L -p tcp 2>/dev/null
```

`conntrack` 需要相应内核模块、工具和权限；输出中的原始方向与回复方向可用于认识 NAT/防火墙表项。仅在自有实验虚拟机中观察这些状态。

一份可复查的中间设备报告至少包含：拓扑图、每个抓包点、每段四元组、设备工作模式、前后端连接 ID、空闲时间、关键帧号、应用请求 ID、设备日志与尚待验证的路径假设。

## 理解检查

1. 源 NAT 前后，哪些四元组字段可能变化？
2. 为什么两端都显示 `ESTABLISHED` 时，中间防火墙仍可能已经回收表项？
3. NAT 转发型 L4 负载均衡与 TCP 代理型 L4 负载均衡在 Seq/Ack 观察上有何差异？
4. 七层代理前后的两个 `tcp.stream` 应通过哪些证据关联？
5. 后端应用怎样安全地使用代理传来的客户端地址？
6. 心跳周期与路径最短空闲回收时间之间应怎样协调？

## 延伸阅读

- [RFC 3022：Traditional IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc3022.html)
- [RFC 5382：NAT Behavioral Requirements for TCP](https://www.rfc-editor.org/rfc/rfc5382.html)
- [RFC 7857：Updates to NAT Behavioral Requirements](https://www.rfc-editor.org/rfc/rfc7857.html)
- [RFC 3234：Middleboxes: Taxonomy and Issues](https://www.rfc-editor.org/rfc/rfc3234.html)
- [RFC 7239：Forwarded HTTP Extension](https://www.rfc-editor.org/rfc/rfc7239.html)

---

[上一章：第35章 IPv4、IPv6、MTU 和分片](./05-ipv4-ipv6-mtu-fragmentation.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第37章 TCP Keepalive 与应用层心跳](./07-keepalive-heartbeat.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
