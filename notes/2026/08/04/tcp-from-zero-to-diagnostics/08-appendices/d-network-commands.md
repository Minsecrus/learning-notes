# 常用网络命令

排查网络问题时，网络命令能为我们提供“主机视角”的关键证据。这些证据包括 IP 地址、路由表、邻居缓存（ARP/NDP）、监听端口、已建立的连接（TCP 四元组）、网络路径以及底层的抓包数据。在执行这些命令时，建议顺手记录下当时的时间、主机名、执行权限、具体的命令以及完整的输出信息，方便后续与应用日志、抓包文件进行时间线对齐。

本文的所有示例统一使用服务端口 `5000`、IPv4 保留地址 `192.0.2.10` 和域名 `example.com`。在实际操作时，请将它们替换为你自己受控环境中的真实数据。

## Windows PowerShell

### 查看监听端口

```powershell
Get-NetTCPConnection -State Listen |
  Sort-Object LocalPort |
  Format-Table LocalAddress, LocalPort, OwningProcess
```

如果只想看 `5000` 端口：

```powershell
Get-NetTCPConnection -State Listen -LocalPort 5000
```

通过 PID 找到对应的进程名：

```powershell
$connection = Get-NetTCPConnection -State Listen -LocalPort 5000
Get-Process -Id $connection.OwningProcess
```

需要注意的是，端口处于 `Listen` 状态只能证明系统内核层面已经打开了该端口。要确认应用真正健康，还需要发起一次实际请求，拿到预期响应，并辅以必要的业务检查。

### 查看已建立连接（四元组）及其状态

```powershell
Get-NetTCPConnection -RemotePort 5000 |
  Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess
```

统计各个 TCP 状态（如 ESTABLISHED、TIME_WAIT 等）的连接数：

```powershell
Get-NetTCPConnection |
  Group-Object State |
  Sort-Object Count -Descending |
  Format-Table Count, Name
```

如果需要连续采样，可以通过脚本把时间戳打上：

```powershell
1..10 | ForEach-Object {
  Get-Date -Format o
  Get-NetTCPConnection -RemotePort 5000 -ErrorAction SilentlyContinue |
    Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort
  Start-Sleep -Seconds 1
}
```

### 测试 TCP 连通性

```powershell
Test-NetConnection -ComputerName 192.0.2.10 -Port 5000 -InformationLevel Detailed
```

命令输出会包含 DNS 解析结果、目标 IP、源 IP 以及 TCP 握手的结果。当然，TCP 通了并不代表业务正常，应用层协议还需要对应的客户端做进一步验证。

### DNS 解析与查询

```powershell
Resolve-DnsName example.com
Resolve-DnsName example.com -Type A
Resolve-DnsName example.com -Type AAAA
```

查询结果会显示 DNS 记录类型、解析到的 IP 地址、TTL（生存时间）以及响应查询的 DNS 服务器。由于本地缓存、DNS 负载均衡或 *GeoDNS* 等机制，不同时间或不同机器解析出来的结果可能会有所不同。

::: details GeoDNS 是什么？
GeoDNS 是依据查询来源的大致地理位置、网络运营商或策略返回不同 DNS 答案的调度方式，常用于把用户导向较近的 CDN 或区域入口。

递归 DNS 的出口位置、EDNS Client Subnet 支持和缓存都会影响定位结果，因此客户端真实位置与最终返回区域可能存在偏差。
:::

### 查看 IP 地址、路由表与邻居缓存（ARP表）

```powershell
Get-NetIPAddress |
  Format-Table InterfaceAlias, AddressFamily, IPAddress, PrefixLength

Get-NetRoute -AddressFamily IPv4 |
  Sort-Object RouteMetric |
  Format-Table DestinationPrefix, NextHop, InterfaceAlias, RouteMetric

Get-NetNeighbor |
  Format-Table InterfaceAlias, IPAddress, LinkLayerAddress, State
```

对于老 Windows 用户，我们熟悉的传统命令依然有效，非常适合快速排查：

```powershell
ipconfig /all
route print
arp -a
```

### 网络路径追踪

```powershell
tracert example.com
pathping example.com
```

需要强调的是，中间每一跳路由器是否回复 ICMP 报文，完全取决于它的安全策略。所以，如果你看到某几跳出现“请求超时（*）”，并不意味着网络就断了，后续节点可能依旧畅通。最终的网络连通性还是要通过目标端口或应用协议来测试。

### 发起 HTTP 请求

强制使用 HTTP/1.1 协议，这能让我们更容易在抓包时观察底层的 TCP 交互：

```powershell
curl.exe --http1.1 -v https://example.com/
```

如果只想统计各个阶段的耗时（如 DNS 解析、TCP 建连、首字节时间等）：

```powershell
curl.exe --http1.1 --output NUL --silent --show-error `
  --write-out "dns=%{time_namelookup}s connect=%{time_connect}s tls=%{time_appconnect}s first_byte=%{time_starttransfer}s total=%{time_total}s`n" `
  https://example.com/
```

### 使用 pktmon 抓包

除了 Wireshark，Windows 现在也自带了原生的 Packet Monitor (`pktmon`)，它可以抓取网络流量并保存为 ETL 格式，稍后还能转成大家熟悉的 pcapng。以下命令需要以管理员权限在 PowerShell 中运行：

```powershell
pktmon start --capture --pkt-size 0 --file-name tcp-lab.etl
# 运行受控实验
pktmon stop
pktmon etl2pcap tcp-lab.etl --out tcp-lab.pcapng
```

`pktmon` 的具体参数可能会随 Windows 版本更新而变化，建议操作前先通过 `pktmon help` 看一下帮助文档。

值得注意的是，`pktmon` 默认会在网络栈的多个层级抓包，导致同一个报文出现多次。如果你只需要在特定的网卡组件上抓包，可以先用 `pktmon list` 列出所有组件，然后加上 `--comp` 参数，或者在转换时用 `etl2pcap --component-id` 来过滤。当然，如果你需要更直观的交互界面和实时过滤，Wireshark (搭配 Npcap) 依然是首选。

## Linux

### 查看监听端口与 TCP 连接

```bash
ss -ltnp
ss -ltnp 'sport = :5000'
ss -tan 'dport = :5000'
ss -tin 'dport = :5000'
```

这些参数的含义：`-t` 表示只看 TCP，`-l` 表示只看处于 Listen 状态的端口，`-n` 禁用域名解析（直接显示 IP），`-p` 会显示关联的进程名，`-i` 则会输出详细的 TCP 内部统计信息（如 RTT、拥塞窗口 cwnd 等）。注意，查看进程通常需要 `root` 权限或使用 `sudo`。

按具体的 TCP 状态过滤连接：

```bash
ss -tan state time-wait
ss -tan state close-wait
ss -tan state syn-recv
```

### 查看 IP 地址、路由与 ARP 邻居表

```bash
ip address show
ip -6 address show
ip route show
ip -6 route show
ip route get 192.0.2.10
ip neigh show
```

这里极力推荐 `ip route get`，它会根据系统的策略路由规则，模拟计算出访问目标 IP 时实际会用到的源 IP、下一跳网关以及出口网卡。这在排查多网卡主机的路由问题时堪称神器。

### 网络抓包 (tcpdump)

抓取所有流量并保存到文件中，方便后续用 Wireshark 分析：

```bash
sudo tcpdump -i any -nn -s 0 -w tcp-lab.pcap 'tcp port 5000'
```

如果只是想在终端快速看看报文摘要：

```bash
sudo tcpdump -i any -nn -tttt -vvv 'tcp port 5000'
```

几个常用的 BPF（Berkeley Packet Filter）捕获过滤器语法：

```bash
tcp port 5000
host 192.0.2.10 and tcp
src host 192.0.2.10 and dst port 5000
tcp[tcpflags] & tcp-syn != 0
tcp[tcpflags] & tcp-rst != 0
```

需要区分的是，`tcpdump` 的“捕获过滤器”使用的是 pcap 语法（BPF），而 Wireshark 界面的“显示过滤器”是另一套语法体系。一般建议的做法是：用宽泛的捕获过滤器把原始包存下来，然后再用 Wireshark 的显示过滤器去细细排查，这样能保留更完整的上下文。

### 连通性测试与路径追踪

```bash
ping -c 4 192.0.2.10
ping -6 -c 4 2001:db8::10
traceroute example.com
tracepath example.com
mtr -rwzc 20 example.com
```

`tracepath` 非常适合用来探测路径上的 MTU（最大传输单元）瓶颈，而 `mtr` 则是结合了 `ping` 和 `traceroute` 的实时动态路由追踪工具，能帮你快速锁定网络抖动或丢包的节点。同样需要注意，中间路由器对 ICMP 报文的限速配置，可能会让丢包率看起来偏高。

### 使用 nc 手工测试 TCP

```bash
nc -v 127.0.0.1 5000
```

监听测试：

```bash
nc -lv 5000
```

Linux 发行版自带的 `nc` (Netcat) 版本繁多（如 OpenBSD 版本、GNU 版本等），参数可能略有出入，使用前最好先 `nc -h` 确认一下。另外，对于基于长度前缀（Length-Prefixed）的二进制协议，`nc` 处理起来比较困难，建议直接使用教程中提供的 Python 测试脚本。

### 查看网卡硬件卸载 (Offload)

```bash
sudo ethtool -k eth0
```

重点关注的字段包括 `tx-checksumming`、`rx-checksumming` 以及 TSO (`tcp-segmentation-offload`)、GSO (`generic-segmentation-offload`) 和 GRO (`generic-receive-offload`)。

警告：随意修改网卡卸载功能会大幅影响主机的网络性能。如果要做对比实验，请务必在受控的测试机上进行，并在修改前记录下原本的配置，以便实验结束后恢复。

### 查看网络故障注入配置 (Traffic Control)

```bash
tc qdisc show dev eth0
```

教程中如果涉及到使用 `tc netem` 模拟网络延迟或丢包，我们会给出严谨的添加、验证以及清理步骤。请时刻谨记：永远不要在生产环境的网卡上手动敲 `tc` 命令，所有的流量规则调整都应当经过标准的变更流程。

## macOS

### 查看监听状态的进程

```bash
lsof -nP -iTCP:5000 -sTCP:LISTEN
```

### 查看现有 TCP 连接

```bash
netstat -anv -p tcp
```

### 查看 IP 地址、路由与 ARP 邻居表

```bash
ifconfig
netstat -rn
route -n get 192.0.2.10
arp -a
ndp -a
```

### 网络抓包与路径追踪

```bash
sudo tcpdump -i all -nn -s 0 -w tcp-lab.pcapng 'tcp port 5000'
ping -c 4 192.0.2.10
traceroute example.com
```

macOS 的 `all` 接口可以一次性抓取物理网卡、本地回环（Loopback）以及各类 VPN 隧道接口的流量。如果是纯本地的进程间通信实验，可以直接指定 `lo0` 接口。你可以随时通过 `tcpdump -D` 来列出当前系统所有可用的网卡接口。

### 连通性测试与 HTTP 请求

```bash
nc -v 127.0.0.1 5000
curl --http1.1 -v https://example.com/
```

## TShark 自动化抓包分析

在安装 Wireshark 的同时，通常也可以勾选安装命令行版的 `tshark`。它非常适合用来读取现有的 pcap 文件，并结构化地输出我们需要关注的 TCP 字段：

```powershell
tshark.exe -r tcp-lab.pcapng -Y "tcp.port == 5000" `
  -T fields `
  -e frame.number -e frame.time_relative `
  -e ip.src -e tcp.srcport -e ip.dst -e tcp.dstport `
  -e tcp.flags.str -e tcp.seq -e tcp.ack -e tcp.len
```

如果是 Linux 或 macOS 环境，直接把 `tshark.exe` 换成 `tshark`，并去掉 PowerShell 的反引号续行符 (``` ` ```) 即可。使用 `tshark` 输出这些纯文本字段，能够极其方便地导入脚本进行统计、生成时间线，或是自动生成标准化的排查报告。

## 跨平台网络命令速查表

| 排查任务 | Windows | Linux | macOS |
| --- | --- | --- | --- |
| 监听端口 | `Get-NetTCPConnection -State Listen` | `ss -ltnp` | `lsof -nP -iTCP -sTCP:LISTEN` |
| TCP 四元组 | `Get-NetTCPConnection` | `ss -tan` | `netstat -anv -p tcp` |
| IP 地址 | `Get-NetIPAddress` | `ip address` | `ifconfig` |
| 路由表 | `Get-NetRoute`、`route print` | `ip route` | `netstat -rn`、`route -n get` |
| 邻居/ARP | `Get-NetNeighbor`、`arp -a` | `ip neigh` | `arp -a`、`ndp -a` |
| DNS 解析 | `Resolve-DnsName` | `resolvectl query`、`dig` | `dig`、`dscacheutil -q host` |
| TCP 连通性 | `Test-NetConnection -Port` | `nc -vz` | `nc -vz` |
| 网络抓包 | Wireshark、`pktmon`、TShark | `tcpdump`、Wireshark、TShark | `tcpdump`、Wireshark、TShark |
| 路由追踪 | `tracert`、`pathping` | `traceroute`、`tracepath`、`mtr` | `traceroute` |
| HTTP 请求 | `curl.exe` | `curl` | `curl` |
| 网卡卸载(Offload) | 网卡高级属性、PowerShell 网卡命令 | `ethtool -k` | 驱动与系统工具，能力依接口而异 |

## 故障排查信息采集清单

进行一次彻底的网络问题排障时，我们通常需要完整保存以下现场信息：

1. 通信两端的当前系统时间与时区；
2. 应用的版本号、启动参数以及事发时间段的相关日志；
3. 主机的 IP 地址、路由表以及 DNS 的解析结果；
4. 监听端口情况、TCP 四元组、具体的 TCP 状态以及关联的进程 PID；
5. 通信两端（或者关键中间节点）的抓包文件 (pcap/pcapng)；
6. 完整的复现步骤、具体的 Request ID、问题发生的起止时间；
7. 链路中可能存在的防火墙、代理服务器、负载均衡器以及它们配置的空闲超时 (Idle Timeout) 策略；
8. 在排查采集期间，对测试环境做过的所有变更记录。

[上一页：Wireshark 过滤器速查](./c-wireshark-filters.md) · [返回附录目录](../08-appendices.md) · [下一页：TCP 术语表](./e-glossary.md)
