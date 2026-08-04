# 第35章 IPv4、IPv6、MTU 和分片

一条连接可以顺利完成三次握手，也可以持续传送几十字节的小消息，却在发送较大响应时停住。客户端通常只看到超时，服务端通常看到相同序列号附近反复重传。这个现象把问题范围指向一个很具体的方向：握手报文能够穿过路径，大尺寸 IP 数据报遇到了更小的路径容量，发送端又没有及时得到调整尺寸所需的反馈。

本章沿着“TCP 字节 → TCP 报文段 → IP 数据报 → 链路帧”逐层计算尺寸，并建立诊断 MTU 问题的证据链。

## 一、TCP 怎样装进 IPv4 和 IPv6

TCP 报文段由 TCP 首部和 TCP 数据组成。IP 层把整个 TCP 报文段作为自己的载荷：

$$
L_{IP}=L_{IPHeader}+L_{TCPHeader}+L_{TCPData}
$$

常见的无选项 IPv4 首部为 20 字节；IPv6 基本首部固定为 40 字节，后面还可能跟扩展首部。TCP 首部最少 20 字节，Timestamp 等选项会继续占用空间。

IPv4 首部通过 `Protocol = 6` 指向 TCP。IPv6 基本首部通过 `Next Header` 指向 TCP或第一个扩展首部，扩展首部再逐项指向后继内容。IPv6 地址为 128 位，基本首部移除了 IPv4 中的首部校验和、分片偏移等字段，分片信息由 Fragment 扩展首部承载。

在 Wireshark 中选中一个数据包，可以依次展开 `Internet Protocol Version 4/6`、`Transmission Control Protocol` 和应用数据。这里看到的是抓包点附近的封装结果；隧道、VPN、PPPoE 等机制还可能在外层增加首部。

## 二、MTU、PMTU 与 MSS 各管一层

- **链路 MTU**：一个接口能够直接承载的最大 IP 数据报尺寸，单位为字节。普通以太网常见值是 1500。
- **路径 MTU（PMTU）**：源到目的路径上各段链路 MTU 的最小值。去程与回程可以具有不同 PMTU。
- **TCP MSS**：一端愿意在单个 TCP 报文段中接收的最大 TCP 数据长度。MSS 选项出现在 SYN 中，并且具有方向性。

以 MTU 1500、无 IP/TCP 选项为例：

$$
MSS_{IPv4}=1500-20-20=1460\ \text{bytes}
$$

$$
MSS_{IPv6}=1500-40-20=1440\ \text{bytes}
$$

若 IPv4 首部含 12 字节选项、TCP 首部含 12 字节 Timestamp 相关填充，则当次数据报能够容纳的数据为：

$$
1500-(20+12)-(20+12)=1436\ \text{bytes}
$$

握手中通告的 MSS 只计算 TCP 数据，IP 与 TCP 首部都在它之外。发送端实际选取的报文段尺寸还会综合对端 MSS、当前 PMTU、协议首部长度、拥塞与实现策略。应用一次 `send(65536)` 仍可能对应许多较小的 TCP 报文段；发送卸载还会让发送主机上的抓包暂时显示很大的逻辑段。

## 三、IPv4 与 IPv6 的分片规则

IPv4 数据报大于下一跳 MTU时，路由器可以在允许分片的条件下把它拆成多个分片。IPv4 的 Identification、Flags 和 Fragment Offset 帮助目的端重组。分片偏移以 8 字节为单位；除最后一个分片外，各分片的数据长度通常也按 8 字节对齐。

现代 TCP 常配合 Path MTU Discovery 使用 DF（Don't Fragment）位。路由器遇到过大的 DF 数据报时，丢弃该数据报并返回 ICMP IPv4“Destination Unreachable — Fragmentation Needed”，其中可以携带下一跳 MTU。发送端据此缩小后续报文。

IPv6 路由器只负责转发完整数据报。数据报超过下一跳 MTU时，路由器返回 ICMPv6 Packet Too Big；源端根据反馈调整尺寸。需要分片时，由源端加入 Fragment 扩展首部，目的端负责重组。IPv6 规定每条链路至少支持 1280 字节的 MTU，这个下限仍需为 IPv6、扩展首部和 TCP 首部预留空间。

分片会扩大丢失影响：任一分片缺失都会让原始 IP 数据报无法完成重组。TCP 通常借助 MSS 与 PMTUD生成适配路径的完整 IP 数据报，从源头减少分片机会。

## 四、PMTUD 与 PMTU 黑洞

经典 PMTUD 的推理链很短：

1. 发送端先按已知接口 MTU 与对端 MSS 发送。
2. 路由器发现下一段链路容纳不下该数据报。
3. 路由器返回带尺寸信息的 ICMP 错误。
4. 发送端降低当前目的路径的 PMTU估计，并以更小的 TCP 段继续传输。

若中间防火墙丢弃这类 ICMP，过大的数据报会反复消失。SYN、ACK 和短请求尺寸很小，所以连接与小消息仍然成功；大响应第一次越过阈值后，发送端重复发送相同范围，接收端的累计 ACK停在缺口之前。这就是常说的 PMTU 黑洞。

Packetization Layer PMTUD（PLPMTUD）把探测放在传输或更高的分包层，通过不同尺寸的探测与确认结果逐步寻找可用上限。它可以在 ICMP反馈缺失时继续收集证据。具体启用方式和回退策略属于操作系统与协议实现，需要结合主机遥测确认。

诊断时优先寻找以下组合：

- 握手与小载荷双向成功；
- 数据长度达到某个阈值后，固定 Seq 范围持续重传；
- 对端 ACK 长期停留在同一位置；
- 中间设备抓包可见 ICMP Fragmentation Needed 或 ICMPv6 Packet Too Big；
- 发送主机抓包缺少相应 ICMP，或者收到了 ICMP 后报文尺寸仍未下降；
- 调小应用发送尺寸偶尔改善，而调整 MSS 或恢复 ICMP 后稳定恢复。

`ping` 只能测试特定方向、特定 ICMP 类型与指定尺寸。一次小尺寸 `ping` 成功提供了连通性证据，TCP 大流量仍需独立验证。

## 五、Windows 主线观察

先在自己的主机上记录接口 MTU。命令只读取配置：

```powershell
Get-NetIPInterface -AddressFamily IPv4 |
  Sort-Object InterfaceIndex |
  Format-Table InterfaceIndex, InterfaceAlias, NlMtu, ConnectionState

Get-NetIPInterface -AddressFamily IPv6 |
  Sort-Object InterfaceIndex |
  Format-Table InterfaceIndex, InterfaceAlias, NlMtu, ConnectionState
```

选择自己控制的实验主机后，可以用 IPv4 DF 探测做辅助观察。`1472 + 20 字节 IPv4 首部 + 8 字节 ICMP 首部 = 1500`：

```powershell
$labTarget = '192.168.56.20'   # 替换为自己的虚拟机或实验主机
ping.exe -4 -f -l 1472 $labTarget
ping.exe -4 -f -l 1400 $labTarget
```

预期有三类结果：收到 Echo Reply；本机或路由器报告需要分片；请求超时。超时只表示当前抓包点没有看到回应，需要结合 Wireshark 中的 `icmp`、`icmpv6`、`tcp.analysis.retransmission` 和实际路由继续判断。

Wireshark 可使用这些显示过滤器：

```text
icmp || icmpv6
tcp.analysis.retransmission
tcp.stream eq 目标流编号
ipv6.nxt == 44
```

## 六、Linux 扩展：可控地复现黑洞

下面的实验只在一次性 Linux 虚拟机中进行，需要 root 权限。三个网络命名空间组成 `客户端 A — 路由器 R — 服务端 B`；R 朝 A 的出口 MTU设为 1200，B 仍按 1500 发送。命名空间让改动局限于实验拓扑。

```bash
sudo ip netns add mtua
sudo ip netns add mtur
sudo ip netns add mtub
sudo ip link add a0 type veth peer name ra0
sudo ip link add b0 type veth peer name rb0
sudo ip link set a0 netns mtua
sudo ip link set ra0 netns mtur
sudo ip link set b0 netns mtub
sudo ip link set rb0 netns mtur
sudo ip -n mtua addr add 10.35.1.2/24 dev a0
sudo ip -n mtur addr add 10.35.1.1/24 dev ra0
sudo ip -n mtub addr add 10.35.2.2/24 dev b0
sudo ip -n mtur addr add 10.35.2.1/24 dev rb0
sudo ip -n mtua link set lo up
sudo ip -n mtur link set lo up
sudo ip -n mtub link set lo up
sudo ip -n mtua link set a0 up mtu 1500
sudo ip -n mtur link set ra0 up mtu 1200
sudo ip -n mtur link set rb0 up mtu 1500
sudo ip -n mtub link set b0 up mtu 1500
sudo ip -n mtua route add default via 10.35.1.1
sudo ip -n mtub route add default via 10.35.2.1
sudo ip netns exec mtur sysctl -q -w net.ipv4.ip_forward=1
```

在 B 中生成 64 KiB测试文件并启动服务，在 A 中下载；分别使用三个终端运行：

```bash
sudo ip netns exec mtub python3 -c "open('/tmp/mtu.bin','wb').write(b'x'*65536)"
sudo ip netns exec mtub bash -c 'cd /tmp && python3 -m http.server 3535 --bind 10.35.2.2'
sudo ip netns exec mtur tcpdump -ni any 'tcp port 3535 or icmp'
sudo ip netns exec mtua curl --max-time 10 -o /dev/null http://10.35.2.2:3535/mtu.bin
```

先在 R 中临时丢弃发往 B 的必要 ICMP，再从 A 建立连接并下载：

```bash
sudo ip netns exec mtur iptables -I OUTPUT -p icmp --icmp-type fragmentation-needed -d 10.35.2.2 -j DROP
sudo ip netns exec mtua curl --max-time 10 -o /dev/null http://10.35.2.2:3535/mtu.bin
sudo ip netns exec mtur iptables -D OUTPUT -p icmp --icmp-type fragmentation-needed -d 10.35.2.2 -j DROP
```

黑洞阶段通常表现为短 HTTP 请求成功、响应前一小段可能到达、较大的数据报在 R 被丢弃、B 重传且 A 的 ACK 进度停住。移除规则后再建立连接：

```bash
sudo ip netns exec mtua curl --max-time 10 -o /dev/null http://10.35.2.2:3535/mtu.bin
```

恢复阶段的预期是：R 产生 `fragmentation needed`，B 随后缩小报文，下载完成。这里先观察黑洞，再让 B 学到较小 PMTU，可以消除目的路由 PMTU 缓存对复现的干扰；已经完成过正常阶段时，重建三个命名空间即可回到初始状态。内核缓存与卸载会影响逐包外观，实验结论以“恢复 ICMP 后传输恢复”和多点抓包共同确认。

实验完成后停止 HTTP 服务与 `tcpdump`，再清理三个命名空间：

```bash
sudo ip netns del mtua
sudo ip netns del mtur
sudo ip netns del mtub
```

## 七、修复路径

长期方案通常包含：允许关联连接所需的 ICMP Fragmentation Needed 与 ICMPv6 Packet Too Big；让隧道、VPN、云网络与容器网络准确计算内外层开销；在入口设备按真实路径条件配置 TCP MSS clamping；启用并验证合适的 PMTUD 或 PLPMTUD；为路径变化保留重新探测能力。

MSS clamping 会在 SYN 经过设备时调整通告值，适合已知封装开销的边界。它只影响 TCP，也依赖双向设备位置。恢复正确的 ICMP 与路径尺寸模型能够覆盖更广泛的 IP 流量。

## 八、把观察写成证据链

假设客户端在帧 18 发出短请求，服务端从帧 24 开始返回数据；客户端 ACK 在 `Ack=1161` 后停止推进，服务端随后重传 `Seq=1161, Len=1460`。服务端出口可见该大报文，路由器入口也能看见；路由器出口缺少它，并生成一条“需要分片，下一跳 MTU=1200”的 ICMP。服务端入口抓包却没有这条 ICMP。

这组事实支持三项判断：TCP 连接与双向小报文可达；尺寸超过路由器出口能力的数据报在该处丢失；反馈在路由器到服务端之间消失。下一步最小验证是临时恢复该 ICMP 的可信回程，观察服务端是否把 TCP 数据长度降到约 1160 字节并继续推进 ACK。若结果符合预测，PMTU 黑洞假设得到闭合证据。

报告还应注明抓包卸载、隧道外层首部和非对称回程等边界。若服务端收到了 ICMP却保持原尺寸，调查重点转向主机 PMTUD 配置、路由缓存和协议栈遥测。若路由器也未收到大报文，调查点继续向服务端出口与前置设备移动。这样的逐点定位能够把“偶尔卡住”转化为可复查的路径结论。

## 理解检查

1. MTU、PMTU 与 MSS 分别属于哪一层，单位各是什么？
2. MTU 1500、IPv6 基本首部 40 字节、TCP 首部 32 字节时，单个数据报最多携带多少 TCP 数据？
3. 为什么三次握手成功仍然可能出现 PMTU 黑洞？
4. IPv4 路由器分片与 IPv6 源端分片的角色有何差异？
5. 抓包中哪些现象组合能够支持“必要 ICMP 被过滤”的假设？
6. 多点抓包为什么比单侧 `ping` 更适合确认这类故障？

## 延伸阅读

- [RFC 8200：Internet Protocol, Version 6 Specification](https://www.rfc-editor.org/rfc/rfc8200.html)
- [RFC 1191：Path MTU Discovery for IPv4](https://www.rfc-editor.org/rfc/rfc1191.html)
- [RFC 8201：Path MTU Discovery for IP version 6](https://www.rfc-editor.org/rfc/rfc8201.html)
- [RFC 4821：Packetization Layer Path MTU Discovery](https://www.rfc-editor.org/rfc/rfc4821.html)
- [RFC 8899：Packetization Layer PMTUD for Datagram Transports](https://www.rfc-editor.org/rfc/rfc8899.html)

---

[上一章：第34章 TCP 性能调优的边界](./04-performance-tuning-boundaries.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第36章 NAT、防火墙和负载均衡](./06-nat-firewall-load-balancing.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
