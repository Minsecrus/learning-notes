# Frame、MAC、IP 与 ARP：一次网络访问如何找到下一跳

## Frame 是什么

`frame`，帧，是数据链路层的传输单位。

可以把它理解为：

> Frame 是在同一条链路或同一个局域网内传送数据的外包装。

网络分层中的封装关系大致是：

```text
应用数据
  ↓
TCP/UDP Segment，传输层
  ↓
IP Packet / Datagram，网络层
  ↓
Frame，数据链路层
  ↓
Bits，比特，物理层
```

也就是说，frame 通常会把一个 IP packet 包起来，然后在本地链路上传输。

## Frame 解决的问题

IP 地址负责从源主机到目标主机的逻辑寻址，但数据在真实的网卡、交换机、网线或 Wi-Fi 之间传输时，还需要更贴近硬件的寻址和校验机制。

Frame 主要负责：

- 说明这一跳要发给谁，使用的是 `MAC address`
- 承载上层数据，比如把一个 IP packet 放进 payload
- 通过 `FCS` / `CRC` 检测传输错误
- 让交换机能够根据目标 MAC 地址转发

常见 Ethernet frame 的结构大致是：

```text
+------------------+----------------+--------------+----------------+------+
| Destination MAC  | Source MAC     | EtherType    | Payload        | FCS  |
| 目标 MAC          | 源 MAC          | 上层协议类型   | 数据内容         | 校验 |
+------------------+----------------+--------------+----------------+------+
```

其中：

- `Destination MAC`：这一跳的接收方网卡地址
- `Source MAC`：这一跳的发送方网卡地址
- `EtherType`：说明 payload 里装的是什么，比如 IPv4、IPv6、ARP
- `Payload`：通常是 IP packet
- `FCS`：Frame Check Sequence，用来检测错误

重要点：

> Frame 只在一跳内有效，经过路由器时会被拆掉并重新封装。

## MAC Address 和 IP Address 的区别

核心区别：

> MAC address 负责同一个局域网里找到哪块网卡；IP address 负责跨网络找到哪台主机。

| 对比项 | MAC address | IP address |
| --- | --- | --- |
| 中文 | 媒体访问控制地址 / 物理地址 | 网络地址 / 逻辑地址 |
| 所属层 | 数据链路层 | 网络层 |
| 作用范围 | 本地链路、局域网内 | 跨网络、跨地区、跨互联网 |
| 用途 | 找到下一跳设备的网卡 | 找到最终目标主机所在网络 |
| 是否通常变化 | 通常固定在网卡上 | 经常变化，比如换 Wi-Fi、换网络 |
| 常见格式 | `A4:5E:60:12:34:56` | IPv4: `192.168.1.10`，IPv6 更长 |
| 主要设备 | 交换机看 MAC | 路由器看 IP |

可以记成：

```text
MAC：这一跳怎么送
IP：最终要送到哪里
```

## ARP 是什么

`ARP`，Address Resolution Protocol，地址解析协议，用来在 IPv4 局域网里把 IP 地址解析成 MAC 地址。

一句话：

> ARP 解决的问题是：我知道下一跳的 IP，但我要发 frame，必须知道下一跳的 MAC。

注意，ARP 主要用于 IPv4。IPv6 不使用 ARP，而是使用 `Neighbor Discovery Protocol`，简称 `NDP`。

## ARP 的工作过程

假设：

```text
电脑 IP:  192.168.1.23
电脑 MAC: AA:AA:AA:AA:AA:AA

路由器 IP:  192.168.1.1
路由器 MAC: BB:BB:BB:BB:BB:BB
```

当电脑要访问外网服务器 `203.0.113.10` 时，会先判断：

```text
203.0.113.10 不在我的局域网 192.168.1.x 里
所以我要把 packet 交给默认网关 192.168.1.1
```

但此时电脑只知道网关 IP：

```text
192.168.1.1
```

它还不知道网关 MAC，所以不能直接构造 Ethernet frame。于是电脑会发出一个 ARP Request：

```text
谁是 192.168.1.1？
请告诉 192.168.1.23。
```

因为电脑还不知道路由器的 MAC，所以这个 ARP Request 会被放进一个广播 frame 里：

```text
Ethernet Frame
Destination MAC: ff:ff:ff:ff:ff:ff
Source MAC:      AA:AA:AA:AA:AA:AA
EtherType:       ARP

ARP Request:
Sender IP:       192.168.1.23
Sender MAC:      AA:AA:AA:AA:AA:AA
Target IP:       192.168.1.1
Target MAC:      unknown
```

`ff:ff:ff:ff:ff:ff` 是广播 MAC 地址，表示当前局域网里的所有设备都收一下。

路由器收到后发现：

```text
192.168.1.1 是我
```

于是它回复一个 ARP Reply：

```text
192.168.1.1 is at BB:BB:BB:BB:BB:BB
```

这个回复通常是单播 frame：

```text
Ethernet Frame
Destination MAC: AA:AA:AA:AA:AA:AA
Source MAC:      BB:BB:BB:BB:BB:BB
EtherType:       ARP

ARP Reply:
Sender IP:       192.168.1.1
Sender MAC:      BB:BB:BB:BB:BB:BB
Target IP:       192.168.1.23
Target MAC:      AA:AA:AA:AA:AA:AA
```

然后电脑就知道了：

```text
192.168.1.1 -> BB:BB:BB:BB:BB:BB
```

这个映射会被临时存进 `ARP cache`，也就是 ARP 缓存。之后一段时间内，电脑再给网关发 frame，就不用每次都重新广播询问。

在 Windows 上可以用这个命令查看 ARP 缓存：

```powershell
arp -a
```

## ARP 查的是谁

ARP 查的不是永远的最终目标，而是当前这一次 frame 要交给的下一跳。

如果目标 IP 在同一子网：

```text
电脑:     192.168.1.23
另一台电脑: 192.168.1.50
```

那么电脑会 ARP 查询：

```text
谁是 192.168.1.50？
```

因为它可以直接把 frame 发给对方。

如果目标 IP 不在同一子网，比如外网服务器：

```text
203.0.113.10
```

那么电脑会 ARP 查询：

```text
谁是 192.168.1.1？
```

也就是查询默认网关的 MAC。

可以总结成：

```text
目标 IP 在同一子网：
  ARP 查询目标主机的 MAC

目标 IP 不在同一子网：
  ARP 查询默认网关的 MAC
```

ARP 的几个特点：

- ARP 只在局域网内工作，ARP 广播不会穿过路由器
- ARP 不是用 IP packet 封装的，而是直接放在 Ethernet frame 里
- ARP 的 EtherType 通常是 `0x0806`
- ARP 本身不验证身份，所以存在 ARP spoofing / ARP poisoning 风险

所谓 ARP 欺骗，就是攻击者伪造 ARP Reply，例如声称：

```text
192.168.1.1 is at 攻击者的 MAC
```

如果电脑相信了这个映射，原本发给网关的数据就可能先被发给攻击者。

## 从电脑访问网站服务器时的 Frame 例子

假设：

```text
你电脑:        IP = 192.168.1.23
你电脑网卡:    MAC = AA:AA:AA:AA:AA:AA

家用路由器:    IP = 192.168.1.1
路由器内网MAC: MAC = BB:BB:BB:BB:BB:BB

网站服务器:    IP = 203.0.113.10
服务器MAC:     你电脑不知道，也不需要知道
```

当你访问：

```text
https://example.com
```

假设 DNS 已经把域名解析成：

```text
203.0.113.10
```

你的电脑要发出的 IP packet 是：

```text
Source IP:      192.168.1.23
Destination IP: 203.0.113.10
```

但是目标 IP `203.0.113.10` 不在本地局域网 `192.168.1.x` 里，所以你的电脑不能直接发给服务器，而是要先交给默认网关，也就是家用路由器 `192.168.1.1`。

在构造第一跳的 frame 之前，如果电脑还不知道路由器的 MAC，就会先通过 ARP 查询：

```text
谁是 192.168.1.1？
```

得到结果：

```text
192.168.1.1 -> BB:BB:BB:BB:BB:BB
```

第一跳的 Ethernet frame 大致是：

```text
Ethernet Frame
+------------------+------------------+----------------+----------------------+
| Destination MAC  | Source MAC       | EtherType      | Payload              |
+------------------+------------------+----------------+----------------------+
| BB:BB:BB:BB:BB:BB| AA:AA:AA:AA:AA:AA| IPv4           | IP packet            |
+------------------+------------------+----------------+----------------------+

Payload 里的 IP packet:
+------------------+------------------+----------------------+
| Source IP        | Destination IP   | Data                 |
+------------------+------------------+----------------------+
| 192.168.1.23     | 203.0.113.10     | TCP/HTTPS data       |
+------------------+------------------+----------------------+
```

这里最关键的是：

```text
Frame 的目标 MAC = 路由器的 MAC
IP packet 的目标 IP = 网站服务器的 IP
```

也就是：

```text
这一跳交给路由器
最终目标是网站服务器
```

路由器收到这个 frame 后：

1. 看到目标 MAC 是自己，于是接收这个 frame
2. 去掉 Ethernet frame 外壳
3. 取出里面的 IP packet
4. 查看目标 IP `203.0.113.10`
5. 查路由表，决定下一跳
6. 重新封装成新的 frame

到了路由器发给运营商下一跳时，frame 会变成类似这样：

```text
新的 Ethernet Frame
+------------------+------------------+----------------+----------------------+
| Destination MAC  | Source MAC       | EtherType      | Payload              |
+------------------+------------------+----------------+----------------------+
| CC:CC:CC:CC:CC:CC| DD:DD:DD:DD:DD:DD| IPv4           | IP packet            |
+------------------+------------------+----------------+----------------------+

Payload 里的 IP packet:
+------------------+------------------+----------------------+
| Source IP        | Destination IP   | Data                 |
+------------------+------------------+----------------------+
| 你的公网 IP       | 203.0.113.10     | TCP/HTTPS data       |
+------------------+------------------+----------------------+
```

这里的 MAC 已经换了，因为进入了下一段链路。

整个过程可以概括为：

```text
电脑
  Frame: 目标 MAC = 家用路由器
  IP packet: 目标 IP = 网站服务器
    ↓
家用路由器
  Frame: 目标 MAC = 运营商下一跳设备
  IP packet: 目标 IP = 网站服务器
    ↓
运营商路由器
  Frame: 目标 MAC = 再下一跳设备
  IP packet: 目标 IP = 网站服务器
    ↓
...
    ↓
网站服务器所在网络
  Frame: 目标 MAC = 网站服务器网卡
  IP packet: 目标 IP = 网站服务器
```

## 相关概念

`MTU`，Maximum Transmission Unit，最大传输单元。以太网常见 MTU 是 `1500 bytes`，指的是 Ethernet frame 的 payload 通常最多能装 1500 字节的 IP packet。

`Broadcast frame`，广播帧。目标 MAC 是：

```text
ff:ff:ff:ff:ff:ff
```

表示发给当前局域网里的所有设备。

`FCS` / `CRC` 用来检测 frame 是否损坏。它通常只负责发现错误，不负责重传；重传通常由更上层协议，比如 TCP，或者某些链路层机制处理。

## 总结

Frame 是数据链路层用来在局部网络中传输数据的封装单位。它用 MAC 地址完成一跳内的交付，并通过校验字段检测传输错误。

IP address 是网络层的逻辑地址，用来跨网络定位目标；MAC address 是数据链路层的硬件地址，用来在当前局域网内把 frame 交给下一跳设备。

ARP 是 IPv4 局域网里用来从 IP 地址找到 MAC 地址的协议。它通过广播提问、单播回答，让主机知道下一跳设备的 MAC，从而能够正确封装 Ethernet frame。

从电脑到网站服务器的过程中，IP packet 的目标 IP 基本保持指向网站服务器，但每一跳的 frame 都会重新生成，里面的目标 MAC 都是下一跳设备的 MAC。
