# 第35章 IPv4、IPv6、MTU 和分片

我们常会遇到这样一种诡异的现象：TCP 连接能够顺利完成三次握手，也能正常收发几十字节的小消息，却在发送较大的响应数据时突然卡死。此时，客户端通常只会报超时错误，而在服务端的抓包中，则会看到在同一个 Sequence Number（序列号）附近不断地发生重传。这种现象将问题指向了一个非常具体的方向：握手报文和短消息能够顺利穿透网络路径，但大尺寸的 IP 数据报却在某处遇到了“更窄”的链路（路径容量不足）。更糟糕的是，发送端没能及时收到反馈，自然也就无法减小发送的尺寸。

本章将沿着“TCP 字节流 → TCP Segment（报文段） → IP 数据报 → 链路帧”的封装顺序，带你逐层计算尺寸，并教你如何一步步建立起诊断 MTU 问题的完整证据链。

## 一、TCP 怎样装进 IPv4 和 IPv6

TCP Segment（报文段）由 TCP Header（首部）和 TCP Data（数据载荷）组成。在网络层，IP 协议会把整个 TCP 报文段作为自己的数据载荷（Payload）进行封装：

$$
L_{IP}=L_{IPHeader}+L_{TCPHeader}+L_{TCPData}
$$

最常见的不带选项（Options）的 IPv4 首部大小是 20 字节；而 IPv6 的基本首部固定为 40 字节（后面还可以追加扩展首部）。TCP 自身的首部最小也是 20 字节，如果开启了 Timestamp（时间戳）等选项，还会进一步占用空间。

在 IPv4 首部中，`Protocol = 6` 字段标识了上层协议是 TCP。而在 IPv6 基本首部中，则是通过 `Next Header` 字段指向 TCP，或者指向第一个扩展首部（扩展首部再像链表一样逐个指向下一个内容）。由于 IPv6 地址长达 128 位，为了提高处理效率，它的基本首部移除了 IPv4 中的首部校验和（Header Checksum）、分片偏移（Fragment Offset）等字段，分片信息被专门剥离到了 Fragment 扩展首部中。

当你在 Wireshark 中选中一个数据包时，可以依次展开 `Internet Protocol Version 4/6`、`Transmission Control Protocol` 以及应用层数据，直观地看到这种层层封装的结构。需要注意的是，我们在抓包软件中看到的，只是抓包点当前的封装状态；如果数据包穿越了隧道、VPN 或者 PPPoE 网络，外层还会被裹上额外的协议首部。

## 二、MTU、PMTU 与 MSS 各管一层

- **链路 MTU（Maximum Transmission Unit，最大传输单元）**：网络接口能够直接承载的最大 IP 数据报尺寸，单位是字节。普通以太网最常见的 MTU 值是 1500。
- *路径 MTU（Path MTU，PMTU）*：从源端到目的端整条网络路径上，所有链路 MTU 的最小值。它决定了这条路上的“最窄瓶颈”。要注意的是，网络通信往往是不对称的，去程和回程的 PMTU 可能并不相同。
- **TCP MSS（Maximum Segment Size，最大报文段长度）**：表示本端愿意接收的单个 TCP 报文段中，TCP Data 的最大长度。MSS 选项只在三次握手的 SYN 报文中声明，并且同样区分方向。

::: details PMTU 是什么？
PMTU（Path MTU）是源到目的某一方向上所有链路 MTU 的最小值，也就是整条路径允许无分片通过的最大 IP 数据报尺度。去程、回程或路由变化后的 PMTU 可以不同。

端点通常通过 PMTUD 或 PLPMTUD 学习它；隧道增加外层首部后，也会降低内层可用的有效 PMTU。
:::

如果网络接口的 MTU 是 1500，且 IP 和 TCP 首部都不带任何选项，那么 MSS 的计算公式如下：

$$
MSS_{IPv4}=1500-20-20=1460\ \text{bytes}
$$

$$
MSS_{IPv6}=1500-40-20=1440\ \text{bytes}
$$

假如 IPv4 首部带有 12 字节的选项，TCP 首部因为时间戳等选项加上填充又多出了 12 字节，那么这单个 IP 数据报实际能容纳的 TCP 数据就会缩水：

$$
1500-(20+12)-(20+12)=1436\ \text{bytes}
$$

请记住，握手时通告的 MSS 仅仅指的是 TCP 纯数据（Payload）的长度，不包含 IP 首部和 TCP 首部。在实际发送数据时，TCP 协议栈决定一个 Segment 到底要切多大，不仅要看对端通告的 MSS，还要综合考虑当前的 PMTU、协议首部开销、拥塞控制（Congestion Control）算法状态以及操作系统的实现策略。

这就意味着，即便应用程序一口气调用 `send(65536)` 发送了 64KB 的数据，底层也会将其切分成许多个较小的 TCP Segment 分批发送。另外，如果网卡开启了 TSO/GSO 等发送卸载（Offload）功能，你在发送端本机抓包时，可能会看到远超 MTU 大小的“超大逻辑段”，这只是系统内部尚未切片前的假象。

## 三、IPv4 与 IPv6 的分片规则

当一个 IPv4 数据报的大小超过了路由器下一跳链路的 MTU，且该数据报允许分片时，路由器会进行 *IPv4 分片（Fragmentation）*，把它拆成多个更小的分片（Fragments）。IPv4 首部中的 Identification（标识符）、Flags（标志位）和 Fragment Offset（分片偏移量）就是为了帮助目的端把这些碎片重新拼装起来。分片偏移量是以 8 字节为基本单位的；因此除了最后一个分片，前面所有分片的数据长度通常都必须是 8 的整数倍。

::: details IPv4 分片是什么？
IPv4 分片把一个过大的 IP 数据报拆成多个独立转发的分片，目的主机根据 Identification、偏移和更多分片标志进行重组。任意分片缺失都会让原始数据报无法完整重组。

分片增加设备和重组成本，也会放大丢包影响，现代 TCP 通常借助 MSS 与 PMTUD 尽量避免它。
:::

不过，现代 TCP 栈在传输数据时，通常会开启 *Path MTU Discovery（PMTUD，路径 MTU 发现）*机制，并在 IPv4 首部打上 *DF（Don't Fragment，不分片）*标记。当路由器收到一个带有 DF 标记且尺寸超标的数据报时，它会将其丢弃，并向发送端返回一个 *ICMP* “Destination Unreachable — Fragmentation Needed（需要分片但设置了不分片位）”错误报文。这个 ICMP 报文里通常会携带下一跳链路的实际 MTU 值。发送端收到反馈后，就会缩小后续发送的报文尺寸。

::: details PMTUD 是什么？
PMTUD（Path MTU Discovery）让发送端从较大报文开始，根据沿途路由器返回的 ICMP 尺寸错误逐步学习 PMTU。IPv4 常配合 DF 与 Fragmentation Needed，IPv6 依赖 Packet Too Big。

关键 ICMP 反馈被过滤时，发送端可能持续重传同样过大的报文并形成 PMTU 黑洞。
:::

::: details IPv4 DF 位是什么？
DF 是 IPv4 Flags 字段中的 Don't Fragment 位。置位后，路由器不能把过大的数据报分片，只能丢弃并按规范返回需要分片的 ICMP 错误，让源端调整尺寸。

DF 只存在于 IPv4；IPv6 路由器本来就不执行途中分片。
:::

::: details ICMP 是什么？
ICMP（Internet Control Message Protocol）是 IPv4 的控制与错误报告协议，承载 Echo、目标不可达、需要分片和超时等消息。`ping` 使用 Echo，PMTUD 则依赖特定错误消息。

ICMP 错误通常关联触发它的原始 IP 数据报。防火墙应按类型、代码和连接上下文精细处理，全面过滤会破坏诊断和路径发现。
:::

到了 IPv6 时代，网络层的设计思路发生了改变：IPv6 路由器只负责转发完整的数据报，不在途中执行分片。当数据报尺寸超过下一跳 MTU 时，IPv6 路由器会直接丢弃包，并返回 ICMPv6 的 `Packet Too Big` 消息。源端收到消息后，自行决定减小发送尺寸，或在源端分片并插入 *IPv6 Fragment 扩展首部*。最终依然由目的端负责重组。另外，IPv6 规定网络中所有链路的 MTU 不能低于 1280 字节；这 1280 字节仍要容纳 IPv6 首部、扩展首部和 TCP 首部。

::: details IPv6 Fragment 扩展首部是什么？
IPv6 把分片信息放进独立的 Fragment 扩展首部。只有源端可以生成 IPv6 分片，路由器遇到过大数据报时返回 ICMPv6 Packet Too Big，由源端调整或分片。

目的端按 Fragment Identification 和偏移重组；TCP 通常继续通过 PMTU 机制避免依赖 IP 分片。
:::

为什么 TCP 如此讨厌网络层分片？因为分片会成倍放大丢包的代价：只要其中任何一个小分片在网络中不幸丢失，整个原始的 IP 数据报就宣告作废，无法重组，TCP 只能将这一大坨数据全部重传。因此，TCP 通常倾向于结合 MSS 和 PMTUD 机制，直接生成尺寸刚好的完整 IP 数据报，从源头上扼杀网络分片的发生。

## 四、PMTUD 与 PMTU 黑洞（Blackhole）

经典的 PMTUD 工作机制非常直来直去：

1. 发送端先按照本机的接口 MTU 和对方通告的 MSS 综合计算出的尺寸发送数据。
2. 路径上的某台路由器发现，自己下一跳的链路太窄，塞不下这么大的数据报。
3. 路由器丢弃该包，并返回一个携带下一跳 MTU 尺寸信息的 ICMP 错误报文给发送端。
4. 发送端收到后，调低对这条路径的 PMTU 预估值，然后切分出更小的 TCP Segment 继续传输。

机制依赖反馈。路径上的防火墙如果拦截了关键 ICMP 错误，过大的数据报会被路由器丢弃，而发送端收不到缩小尺寸所需的信息。握手和短请求仍可穿越狭窄链路，于是连接看似正常；大尺寸响应则在固定 Seq 范围持续重传。这就是 *PMTU 黑洞（Path MTU Black Hole）*。

::: details PMTU Black Hole 是什么？
PMTU 黑洞是“过大的数据报在路径中被丢弃，同时发送端收不到有效尺寸反馈”的故障。典型现象是握手与小包正常，大包在同一 Seq 范围反复重传，ACK 长期停滞。

多点抓包、放行所需 ICMP、验证 PMTUD/PLPMTUD 或临时 MSS Clamping 可以帮助确认和修复。
:::

为了解决黑洞问题，业界引入了 *PLPMTUD（Packetization Layer PMTUD）*。它把路径探测上移到分组化层，通过发送不同尺寸的探测数据并观察是否成功交付，逐步摸索可用上限。PLPMTUD 的具体启用方式、回退策略高度依赖操作系统和传输协议实现，在排障时需要结合主机侧网络遥测指标确认是否生效。

::: details PLPMTUD 是什么？
PLPMTUD 在 TCP、QUIC 等分组化层主动探测可成功交付的报文尺寸，并根据确认、丢失和搜索状态调整上限。它可以利用 ICMP 提示，也能在提示缺失时靠传输层反馈继续工作。

探测包丢失也可能来自拥塞，因此实现需要谨慎区分并按状态机回退。
:::

在实际网络诊断中，当你遇到以下这些现象的组合时，就要高度怀疑是 PMTU 黑洞在作祟：

- 连接握手以及小载荷数据双向通信完全正常；
- 一旦单次发送的数据长度超过某个阈值，发送端就在一个固定的 Sequence Number（序列号）范围陷入死循环般的持续重传；
- 接收端抓包显示，其回复的 ACK 号长期停滞在一个位置；
- 在中间网络设备上抓包，能看到路由器发出了 `ICMP Fragmentation Needed` 或 `ICMPv6 Packet Too Big` 报文；
- 但在发送端主机抓包，却发现根本没有收到这个 ICMP；或者虽然收到了，但发送端出于某种 Bug 依然我行我素，不肯减小报文尺寸；
- 尝试让应用层减小单次发送的数据量，情况偶尔会有所改善；但在网络设备上调整 *MSS 钳制（MSS Clamping）*或放行 ICMP 后，问题瞬间彻底解决。

::: details MSS Clamping 是什么？
MSS Clamping 是中间设备在经过的 TCP SYN 中下调 MSS 通告值，使端点从连接开始就发送更小的 TCP 载荷，以适应隧道或固定的较小路径 MTU。

它只影响 TCP，且依赖握手流量经过实施设备；恢复正确 ICMP 反馈和端点 PMTU 探测仍是更完整的路径方案。
:::

需要提醒的是，日常使用的 `ping` 命令往往具有欺骗性。一次普通的小包 `ping` 测试成功，只能证明这两点之间的 IP 连通性没问题。TCP 大流量传输能否跑满带宽，不被 MTU 卡脖子，仍然需要结合实际业务流量进行独立验证。

## 五、Windows 主机的基本排查

首先，可以通过 PowerShell 查看本机所有网络接口的 MTU 配置（该命令仅为读取操作，无副作用）：

```powershell
Get-NetIPInterface -AddressFamily IPv4 |
  Sort-Object InterfaceIndex |
  Format-Table InterfaceIndex, InterfaceAlias, NlMtu, ConnectionState

Get-NetIPInterface -AddressFamily IPv6 |
  Sort-Object InterfaceIndex |
  Format-Table InterfaceIndex, InterfaceAlias, NlMtu, ConnectionState
```

找一台你能控制的测试机器，我们可以利用带有 DF 位的 `ping` 命令（大包 ping）来手工探测链路的 PMTU。在以太网环境中，由于 `1472（ICMP 载荷）+ 8（ICMP 首部）+ 20（IPv4 首部）= 1500`，所以 1472 是 MTU 1500 下能通过的最大载荷：

```powershell
$labTarget = '192.168.56.20'   # 替换为你的虚拟机或实验主机 IP
# 发送 1472 字节载荷，并强制设置 DF 位（-f）
ping.exe -4 -f -l 1472 $labTarget
# 尝试减小尺寸再次发送
ping.exe -4 -f -l 1400 $labTarget
```

执行后，预期会看到以下三种结果之一：

1. **收到 Echo Reply**：说明该尺寸的数据包顺利穿越了整条路径。
2. **提示“需要分片但设置了不分片（Packet needs to be fragmented but DF set）”**：说明沿途有设备的 MTU 小于当前包大小，并成功返回了 ICMP 报错。
3. **请求超时（Request timed out）**：这是一个非常危险的信号。超时仅仅意味着发送端没有收到回音，此时往往需要结合 Wireshark 抓包，利用 `icmp`、`icmpv6`、`tcp.analysis.retransmission` 等过滤器，配合网络拓扑进一步排查，看看包到底是在去程被丢了，还是回程的 ICMP 被防火墙吞了。

在 Wireshark 中排查时，建议熟练使用以下显示过滤器：

```text
icmp || icmpv6                    # 捕捉所有的 ICMP 报错消息
tcp.analysis.retransmission       # 揪出所有发生了重传的 TCP 报文
tcp.stream eq 目标流编号            # 剥离出出问题的特定 TCP 连接
ipv6.nxt == 44                    # 专门查找包含 IPv6 Fragment 扩展首部的数据包
```

## 六、Linux 实验：亲手捏造一个 PMTU 黑洞

为了深刻理解黑洞现象，我们可以在一台 Linux 测试机上进行可控复现（需要 root 权限）。为了不影响宿主机原有的网络环境，我们使用 Linux Network Namespace（网络命名空间）来隔离构建出一个 `客户端 A — 路由器 R — 服务端 B` 的微型拓扑。

在这个拓扑中，我们将路由器 R 指向 A 的出口 MTU 人为缩小到 1200，而服务端 B 依旧不知情地按照 1500 的 MTU 发送数据：

```bash
# 创建 A、R、B 三个独立的网络命名空间
sudo ip netns add mtua
sudo ip netns add mtur
sudo ip netns add mtub

# 创建两对 veth 网线，一端接 A 和 B，另一端都接在 R 上
sudo ip link add a0 type veth peer name ra0
sudo ip link add b0 type veth peer name rb0

# 将这些虚拟网卡分配到对应的命名空间中
sudo ip link set a0 netns mtua
sudo ip link set ra0 netns mtur
sudo ip link set b0 netns mtub
sudo ip link set rb0 netns mtur

# 为它们配置 IP 地址
sudo ip -n mtua addr add 10.35.1.2/24 dev a0
sudo ip -n mtur addr add 10.35.1.1/24 dev ra0
sudo ip -n mtub addr add 10.35.2.2/24 dev b0
sudo ip -n mtur addr add 10.35.2.1/24 dev rb0

# 启动所有的 loopback 接口
sudo ip -n mtua link set lo up
sudo ip -n mtur link set lo up
sudo ip -n mtub link set lo up

# 启动网卡并配置关键的 MTU 值（注意：ra0 被设成了瓶颈 1200）
sudo ip -n mtua link set a0 up mtu 1500
sudo ip -n mtur link set ra0 up mtu 1200
sudo ip -n mtur link set rb0 up mtu 1500
sudo ip -n mtub link set b0 up mtu 1500

# 在 A 和 B 中配置默认路由，将流量指向路由器 R
sudo ip -n mtua route add default via 10.35.1.1
sudo ip -n mtub route add default via 10.35.2.1

# 开启路由器 R 的 IP 转发功能
sudo ip netns exec mtur sysctl -q -w net.ipv4.ip_forward=1
```

接下来，我们在服务端 B 生成一个 64KB 的测试文件，并启动一个简易的 HTTP 服务。准备好三个终端窗口，分别运行以下命令：

```bash
# 终端 1：在 B 中生成测试文件
sudo ip netns exec mtub python3 -c "open('/tmp/mtu.bin','wb').write(b'x'*65536)"
# 终端 1：在 B 中启动 HTTP 服务
sudo ip netns exec mtub bash -c 'cd /tmp && python3 -m http.server 3535 --bind 10.35.2.2'

# 终端 2：在 R 中开启抓包，监听 3535 端口的数据和 ICMP 报文
sudo ip netns exec mtur tcpdump -ni any 'tcp port 3535 or icmp'

# 终端 3：作为对照组，先在没有黑洞的情况下测试正常下载
sudo ip netns exec mtua curl --max-time 10 -o /dev/null http://10.35.2.2:3535/mtu.bin
```

现在，见证黑洞的时刻到了。我们利用 `iptables` 在路由器 R 上下达一道“格杀勿论”的防火墙规则，强制丢弃所有发往 B 的 `fragmentation-needed` ICMP 报错，然后再让 A 发起下载：

```bash
# 终端 3：在 R 上制造黑洞：丢弃关键的 ICMP 报错
sudo ip netns exec mtur iptables -I OUTPUT -p icmp --icmp-type fragmentation-needed -d 10.35.2.2 -j DROP

# 终端 3：再次尝试下载
sudo ip netns exec mtua curl --max-time 10 -o /dev/null http://10.35.2.2:3535/mtu.bin

# 终端 3：下载必定卡死超时。排障完成后，移除这条罪恶的规则
sudo ip netns exec mtur iptables -D OUTPUT -p icmp --icmp-type fragmentation-needed -d 10.35.2.2 -j DROP
```

在这个被人为制造出的黑洞阶段，如果你去观察 `tcpdump` 的输出，会发现一个非常经典的场景：TCP 三次握手极其顺畅，A 发出的短 HTTP GET 请求也成功送达了 B。然而，当 B 开始往回发送大尺寸的文件响应时，这些巨大的数据报在 R 的 `ra0` 接口处撞墙并被直接丢弃。因为 ICMP 报错被防火墙拦截，B 就像个聋子一样，傻傻地在同一个 Sequence Number 处疯狂重传那些巨大的报文，而 A 永远也收不到，它的 ACK 进度条彻底僵死。

当你移除 `iptables` 拦截规则，再次发起下载：

```bash
sudo ip netns exec mtua curl --max-time 10 -o /dev/null http://10.35.2.2:3535/mtu.bin
```

此时的预期表现是：R 成功发出了 `fragmentation needed` 的 ICMP 报文，B 收到后立刻“顿悟”，将发送的 TCP Segment 缩小到了适合 1200 MTU 的尺寸，下载顺畅完成。

在这个实验中，我们故意先演示黑洞，再展示恢复。这是因为内核协议栈非常聪明，它会把学习到的 PMTU 缓存到路由表中。如果你先让它成功学到了 1200 的 PMTU，再去做黑洞实验，B 依然会用小包发送，黑洞现象就无法复现了。如果需要反复测试，建议直接重建这三个命名空间。

最后，实验结束别忘了清理战场：

```bash
# 清理三个命名空间，相关的 veth 网卡也会随之自动销毁
sudo ip netns del mtua
sudo ip netns del mtur
sudo ip netns del mtub
```

## 七、如何彻底修复 PMTU 问题

要从根本上治愈网络中的 MTU 顽疾，通常需要多管齐下：

1. **放行关键 ICMP**：在防火墙安全策略中，务必允许与现有连接强相关的 `ICMP Fragmentation Needed` 和 `ICMPv6 Packet Too Big` 报文通过。
2. **精算封装开销**：在部署隧道、VPN、云虚拟网络（VPC）和容器网络（如 Flannel/Calico）时，一定要精确计算外层协议首部的封装开销，给内层网络预留出合理的 MTU。
3. **TCP MSS Clamping（MSS 钳制）**：在网络的边界入口路由器或防火墙上，根据真实路径的最大承载能力，强制修改路过 TCP SYN 报文中的 MSS 选项值。
4. **启用 PLPMTUD**：在端侧操作系统中，启用并验证现代的 PMTUD 或 PLPMTUD 机制是否生效。

其中，**MSS Clamping** 是排障时非常见效的“外科手术”。当 SYN 报文经过网关设备时，设备会像个“中间人”一样，把里面过大的 MSS 值偷偷改小。这种方法非常适合那种存在固定封装开销（比如 PPPoE 拨号或 IPSec VPN）的网络边界。但它的局限性在于：它只对 TCP 有效（UDP 依然会遭遇分片或丢包），而且高度依赖于双向流量都要经过这台实施 Clamping 的设备。相比之下，恢复健康的 ICMP 传递环境，让端到端的 PMTUD 机制正常运转，才是能覆盖所有 IP 流量的堂堂正正之师。

## 八、将抓包观察转化为严密的证据链

在撰写网络排障报告时，不要只写一句“好像是 MTU 的问题”，而要用抓包事实建立起无懈可击的证据链。举个经典的例子：

> 客户端在第 18 号帧发出了短 HTTP 请求，服务端在第 24 号帧开始返回大量数据。客户端的确认号在推进到 `Ack=1161` 后就彻底停滞了。随后，服务端开始疯狂重传 `Seq=1161, Len=1460` 的大尺寸报文。
>
> 我们在服务端出口网卡抓包，看到了这个大报文；在中间路由器的入口侧，也看到了它。但是在路由器的出口侧，这个大报文神秘消失了，取而代之的是路由器生成了一条 “需要分片，下一跳 MTU=1200” 的 ICMP 报错。然而，当我们回到服务端入口侧抓包时，却根本没有找到这条 ICMP 报文的踪影。

上面这组清晰的事实，能够稳稳地支撑起三个技术判断：

1. TCP 连接状态正常，双向的小尺寸报文可以毫无阻碍地通行。
2. 尺寸超过中间路由器出口承载能力的大报文，确实在该处被丢弃了。
3. 路由器发出的关键 ICMP 反馈，在回程的某段网络中被防火墙吞噬了。

基于这个证据链，你的下一步“最小动作验证”就非常明确了：去排查防火墙规则，临时放行这条 ICMP 报错。如果在放行后，观察到服务端立刻将发送的 TCP Data 长度缩小到了 1160 字节左右（适应 1200 的 MTU），并且客户端的 ACK 开始继续向前推进，那么“PMTU 黑洞”的假设就形成了一个完美的逻辑闭环。

在出具最终报告时，作为专业的网络工程师，你还应该严谨地注明：抓包时网卡是否开启了 TSO/GSO 卸载、整条链路上是否存在隧道导致的外层首部开销，以及去程和回程是否是不对称路由。

如果抓包显示，服务端明明收到了 ICMP 报错，却像没事人一样继续发 1460 字节的大包，那排查方向就要立刻 180 度大转弯：问题不在网络，而在主机侧！重点要去查服务端的 PMTUD 配置是否关闭了、内核路由表的 PMTU 缓存有没有起效，或者检查操作系统底层的网络协议栈遥测数据是否命中了某种特殊 Bug。相反，如果在路由器入口根本就没看到那个大报文，那说明案发现场还在上游，排查焦点就要继续向服务端方向倒推。

只有这种逐点抓包、步步为营的排查逻辑，才能把业务部门口中玄学的“应用偶尔卡住”，转化为有理有据、可复现、可彻底根治的网络路径结论。

## 理解检查

1. 链路 MTU、路径 PMTU 与 TCP MSS 分别属于哪一层面的概念？它们的单位各是什么？
2. 在链路 MTU 为 1500、IPv6 基本首部 40 字节、且 TCP 首部包含选项长达 32 字节的情况下，单个网络包最多能携带多少字节的 TCP 净载荷（TCP Data）？
3. 为什么在 TCP 三次握手完美成功的情况下，仍然会遭遇 PMTU 黑洞导致大文件传输卡死？
4. 在处理过大的数据报时，IPv4 路由器的主动分片机制与 IPv6 的“只转发不分片（源端分片）”设计哲学有何根本差异？
5. 在多点抓包时，需要同时集齐哪些现象组合，才能坐实“关键 ICMP 报错被防火墙过滤”的假设？
6. 在诊断 MTU 问题时，为什么单侧的 `ping` 测试往往具有欺骗性？为什么多点抓包才是真正的试金石？

## 延伸阅读

- [RFC 8200：Internet Protocol, Version 6 Specification](https://www.rfc-editor.org/rfc/rfc8200.html)
- [RFC 1191：Path MTU Discovery for IPv4](https://www.rfc-editor.org/rfc/rfc1191.html)
- [RFC 8201：Path MTU Discovery for IP version 6](https://www.rfc-editor.org/rfc/rfc8201.html)
- [RFC 4821：Packetization Layer Path MTU Discovery](https://www.rfc-editor.org/rfc/rfc4821.html)
- [RFC 8899：Packetization Layer PMTUD for Datagram Transports](https://www.rfc-editor.org/rfc/rfc8899.html)

---

[上一章：第34章 TCP 性能调优的边界](./04-performance-tuning-boundaries.md) · [所属篇：第七篇](../07-diagnostics-environments.md) · [下一章：第36章 NAT、防火墙和负载均衡](./06-nat-firewall-load-balancing.md) · [教程总览](../../tcp-from-zero-to-diagnostics.md)
