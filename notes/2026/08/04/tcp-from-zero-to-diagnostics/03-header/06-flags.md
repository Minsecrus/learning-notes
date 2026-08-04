# 第12章 TCP 标志位

序列号和确认号描述字节流的位置，Flags 则为报文段附加控制语义。连接建立、数据确认、单向关闭、立即重置和显式拥塞反馈，都通过这些单比特标志及其组合表达。

## 九个已分配标志的地图

现代 TCP 首部可以看到以下标志。Wireshark 常以 `Flags: 0x012 (SYN, ACK)` 和展开后的每一位同时展示它们。

| 标志 | 掩码 | 核心语义 | 是否占用一个序列号位置 |
| --- | ---: | --- | --- |
| FIN | `0x001` | 本端发送方向结束 | 是 |
| SYN | `0x002` | 同步初始序列号 | 是 |
| RST | `0x004` | 重置连接或拒绝无匹配连接的报文 | 否 |
| PSH | `0x008` | 推送当前已排队数据的提示 | 否 |
| ACK | `0x010` | Acknowledgment Number 有效 | 否 |
| URG | `0x020` | Urgent Pointer 有效 | 否 |
| ECE | `0x040` | ECN 能力协商或拥塞反馈 | 否 |
| CWR | `0x080` | 经典 ECN 中发送方已采取拥塞响应 | 否 |
| AE | `0x100` | Accurate ECN 使用的扩展标志 | 否 |

标志可以组合。`SYN + ACK = 0x012`，`FIN + ACK = 0x011`，`PSH + ACK = 0x018`，`RST + ACK = 0x014`。这些十六进制值适合快速核对原始首部，完整语义仍需结合连接状态、Seq、Ack、数据长度和方向。

第三篇共用样本的主要 Flags 字节为 `0x18`，即 PSH 与 ACK 同时置位。ACK 让 `Ack = 0x10203041` 生效；PSH 提示接收端及时交付当前连续数据；10 字节 Payload 则把样本 Seq 从 `0x6a1b2c3e` 推进到 `0x6a1b2c48`。三个信息各司其职，应用层仍按自身分帧规则识别 `HELLO TCP\n` 的含义。

## SYN：为一个方向建立序列号起点

SYN 的全称是 Synchronize。客户端发送 `SYN, Seq = C_ISN`，服务端由此获知客户端选择的初始序列号。服务端回复 `SYN, ACK, Seq = S_ISN, Ack = C_ISN + 1`，同时公布自己的起点并确认客户端 SYN。

SYN 占用一个序列号位置。首个普通数据字节从 `ISN + 1` 开始。MSS、Window Scale、SACK Permitted、Timestamp 和 ECN 能力也常借握手中的 SYN 报文进行声明或协商。

常见握手时间线为：

```text
客户端                                      服务端
SYN, Seq=1000                 ----------->
                              <----------- SYN, ACK, Seq=7000, Ack=1001
ACK, Seq=1001, Ack=7001       ----------->
```

同一台主机也可能经历 simultaneous open 等较少见路径。抓包分析应依据实际 Flags 与状态推进，三行经典时间线覆盖最常见的主动连接与被动监听场景。

## ACK：让确认号字段生效

ACK 为 1 时，Acknowledgment Number 表示本端接下来期待的对方序列号。连接进入同步状态后，正常报文通常都携带 ACK，包括纯确认、数据、FIN 以及许多 RST。

ACK 本身不占序列空间。`Seq = 1001, Ack = 7001, Len = 0, ACK = 1` 发送后，本端下一 Seq 仍可保持 1001。确认号采用第 11 章介绍的累计语义，一个 ACK 可以覆盖多个连续到达的数据报文段。

## FIN：结束一个发送方向

FIN 表示发送方完成该方向的数据发送。它出现在全部先前数据之后，占用一个序列号位置。若报文为 `Seq = 5001, Len = 300, FIN = 1`，对端完整接收后期待的位置是：

$$
5001 + 300 + 1 = 5302
$$

因此确认号为 5302。接收应用先读完 FIN 之前的全部字节，随后从 `recv` 得到 EOF；该端自己的发送方向仍可继续工作。这种双向独立结束构成半关闭的基础，第 17 章会把 FIN 与 Socket API、状态机放在同一条时间线上。

FIN 常与 ACK 组合，也可以与最后一批数据同行。ACK 与 FIN 还可能分别发送，所以正常关闭在抓包中会出现三段、四段或更多报文。

## RST：立即撤销连接状态

RST 表示 Reset。常见来源包括：

- SYN 到达一个当前没有监听端点的端口，目标主机返回 `RST, ACK`；
- 已有连接收到与本机状态冲突且满足重置校验条件的报文；
- 应用请求 abortive close，例如把 `SO_LINGER` 配置为启用且超时为零后关闭；
- 进程或协议栈在特定错误路径中撤销连接。

收到有效 RST 后，TCP 直接移除相应连接状态，应用通常收到 `ConnectionResetError`、`ECONNRESET` 或平台对应错误。FIN 路径会交付此前的有序字节并产生 EOF；RST 路径强调异常终止，尚未交付的数据可能随连接状态一起丢弃。

线上出现 RST 时，来源仍需证据确认。四元组、TTL 或 Hop Limit、IP ID、两端抓包、主机日志和中间设备日志可以帮助判断它来自端点、代理、防火墙或负载均衡器。现代实现还可能使用 challenge ACK 等机制校验位于窗口内但序列号不精确匹配的 RST。

## PSH：提示尽快交付已排队数据

PSH 源自 TCP 的 Push 功能。发送 TCP 会在某个报文段上设置 PSH，提示接收 TCP 将当前已到达的连续数据及时交给接收应用。许多协议栈会在当前发送队列最后一个报文段上设置它，具体位置随缓冲、调度、分段和实现变化。

应用消息边界由长度字段、分隔符、固定长度或其他应用层分帧规则定义。一次写入可以形成多个报文段，多个写入也可以合入一个报文段；PSH 只提供推送提示。接收端一次 `recv` 返回的长度仍由当前可用字节、缓冲区大小和运行时调度共同决定。

## URG：让 Urgent Pointer 生效

URG 为 1 时，16 位 Urgent Pointer 字段具有意义。按照 RFC 9293，它给出相对当前 Seq 的正偏移，指向紧急数据之后的第一个字节位置。接收 TCP 可以据此通知应用进入 urgent mode。

历史实现对紧急指针边界和 Socket“带外数据”接口存在差异，中间设备的处理也缺少一致性。RFC 9293 建议新应用避开 TCP urgent mechanism，同时要求 TCP 实现继续支持它。现代自定义协议通常使用应用消息类型、优先级字段和独立控制流表达紧急控制信息。

## ECE 与 CWR：经典 ECN 的反馈回路

Explicit Congestion Notification 允许支持 ECN 的路由器在 IP 首部中标记 CE，端点据此获得拥塞信号。经典 TCP ECN 使用 ECE 和 CWR 构成反馈：

1. 客户端在 SYN 中设置 `ECE = 1, CWR = 1`，声明经典 ECN 能力；
2. 支持该能力的服务端在 SYN+ACK 中设置 ECE；
3. 数据阶段若接收方看到 IP 报文带 CE 标记，就在返回的 ACK 中设置 ECE；
4. 发送方执行拥塞控制响应，并在后续新数据报文中设置 CWR；
5. 接收方看到 CWR 后结束这一轮持续 ECE 回显。

ECN 反馈仍会驱动拥塞控制。CE 标记可以在链路保留报文的同时表达拥塞，具体拥塞窗口变化由实现中的拥塞控制算法决定。

## AE：更精确的 AccECN 反馈

[RFC 9768](https://www.rfc-editor.org/rfc/rfc9768.html) 将 TCP 标志区 bit 7 过去使用的 NS 名称重新定义为 AE，即 Accurate ECN。支持 AccECN 的客户端在初始 SYN 中使用 `(AE, CWR, ECE) = (1, 1, 1)` 请求协商；支持它的服务端在 SYN+ACK 中用这三位的规定组合确认能力，并反馈 SYN 到达时的 IP ECN 状态。

连接建立后，AE、CWR、ECE 三位共同提供更细粒度的 ECN 计数反馈。接收方还可以使用 AccECN 相关 TCP 选项携带更完整计数。这样，发送方能比单个 ECE 状态获得更准确的拥塞标记信息。

AE 属于较新的标准扩展。操作系统支持度、路径中间设备和 Wireshark 版本都会影响实验可见性。分析抓包时先查看 SYN 中的协商组合，再按已协商模式解释后续三位；缺少成功协商的连接继续使用经典含义或普通保留位处理规则。

## 受控实验：制作 Flags 时间线

在 Npcap Loopback Adapter 上开始抓包，先观察正常连接。终端 A：

```powershell
python -c "import socket; l=socket.socket(); l.bind(('127.0.0.1',39012)); l.listen(1); c,_=l.accept(); f=c.makefile('rb'); print(f.read(5)); f.close(); c.sendall(b'OK'); c.shutdown(socket.SHUT_WR); c.close(); l.close()"
```

终端 B：

```powershell
python -c "import socket; c=socket.create_connection(('127.0.0.1',39012)); c.sendall(b'hello'); f=c.makefile('rb'); print(f.read(2)); print('eof:',f.read(1)); f.close(); c.close()"
```

随后选择当前无监听程序的 39013 端口观察拒绝连接：

```powershell
python -c "import socket; c=socket.socket(); c.settimeout(3); c.connect(('127.0.0.1',39013))"
```

最后在 39012 上重新启动一个主动重置服务端。以下 `linger` 二元组对应 Windows Winsock 的两个无符号短整数：

```powershell
python -c "import socket,struct,time; l=socket.socket(); l.bind(('127.0.0.1',39012)); l.listen(1); c,_=l.accept(); c.recv(16); c.setsockopt(socket.SOL_SOCKET,socket.SO_LINGER,struct.pack('HH',1,0)); c.close(); l.close(); time.sleep(1)"
```

客户端再次连接并读取：

```powershell
python -c "import socket; c=socket.create_connection(('127.0.0.1',39012)); c.sendall(b'hello'); print(c.recv(16))"
```

使用过滤器：

```text
tcp.port == 39012 || tcp.port == 39013
```

逐流记录 `Time`、`Source`、`Destination`、`Seq`、`Ack`、`Len` 和 `Flags`。预期可以得到三类时间线：

| 场景 | 关键 Flags | 应用现象 |
| --- | --- | --- |
| 正常通信 | SYN → SYN+ACK → ACK；数据；FIN/ACK | 收到 `OK`，随后读到 EOF |
| 无监听端口 | SYN → RST+ACK | `connect` 很快报告拒绝连接 |
| 主动重置 | 握手与数据后出现 RST 或 RST+ACK | `recv` 报连接重置 |

PSH 的具体出现位置由本机协议栈决定。ECN/AccECN 标志也取决于系统配置和路径支持；实验报告应记录实际观察值，并把协商缺席也作为结果保存。

## 理解检查

1. `Seq = 4000, Len = 50, SYN = 0, FIN = 1` 完整到达后，Ack 应推进到哪里？
2. 一个 `PSH, ACK` 报文携带 200 字节应用数据。接收程序可以由 PSH 推导出完整消息长度吗？
3. 已建立连接收到有效 RST 后，应用常见的观察是什么？
4. 在经典 ECN 数据阶段，ECE 与 CWR 分别由哪一方在什么时机设置？
5. 初始 SYN 中 `(AE, CWR, ECE) = (1,1,1)` 表达什么请求？

<details>
<summary>参考答案</summary>

1. 数据推进 50，FIN 推进 1，所以 `Ack = 4051`。
2. 消息长度仍由应用层分帧规则给出；PSH 只提供推送提示。
3. 连接状态被立即撤销，阻塞或后续 Socket 调用通常返回连接重置类错误。
4. 接收方看到 CE 后在 ACK 中持续设置 ECE；发送方采取拥塞响应后在新数据报文中设置 CWR。
5. 客户端请求协商 Accurate ECN。

</details>

## 本章小结

- SYN 和 FIN 各占一个序列号位置；其余标志提供控制语义而不增加数据长度。
- ACK 让确认号有效，PSH 提供推送提示，URG 让紧急指针有效。
- FIN 结束单个发送方向并形成 EOF，RST 立即撤销连接状态并向应用报告异常。
- ECE/CWR 支持经典 ECN，AE 与另外两位共同支持 AccECN 的更精确反馈。
- Flags 需要与方向、状态、Seq、Ack、TCP Len 和协商结果联合解释。

## 规范依据

- [RFC 9293：Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html)，定义 SYN、ACK、FIN、RST、PSH、URG 及当前 TCP 基础行为。
- [RFC 3168：The Addition of Explicit Congestion Notification (ECN) to IP](https://www.rfc-editor.org/rfc/rfc3168.html)，定义经典 ECN 的 ECE/CWR 协商与反馈。
- [RFC 9768：More Accurate Explicit Congestion Notification (AccECN) Feedback in TCP](https://www.rfc-editor.org/rfc/rfc9768.html)，定义 AE 和 AccECN 反馈协议。

---

[上一章：第11章 Acknowledgment Number](./05-acknowledgment-number.md) · [所属篇：第三篇](../03-header.md) · [下一章：第13章 固定字段](./07-fixed-fields.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
