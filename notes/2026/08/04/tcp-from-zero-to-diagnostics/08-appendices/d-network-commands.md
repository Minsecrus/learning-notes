# 常用网络命令

网络命令提供主机视角的证据：地址、路由、邻居、监听端点、已连接四元组、路径与抓包。运行时记录时间、主机、权限、命令和完整输出，随后与应用日志和抓包对齐。

示例统一使用服务端口 `5000`、IPv4 文档地址 `192.0.2.10` 与域名 `example.com`。请替换为自己的受控环境。

## Windows PowerShell

### 查看监听端点

```powershell
Get-NetTCPConnection -State Listen |
  Sort-Object LocalPort |
  Format-Table LocalAddress, LocalPort, OwningProcess
```

只看端口5000：

```powershell
Get-NetTCPConnection -State Listen -LocalPort 5000
```

把 PID 映射到进程：

```powershell
$connection = Get-NetTCPConnection -State Listen -LocalPort 5000
Get-Process -Id $connection.OwningProcess
```

监听状态证明内核存在相应端点。应用健康还需要一次真实请求、预期响应和必要的业务检查。

### 查看已连接四元组与状态

```powershell
Get-NetTCPConnection -RemotePort 5000 |
  Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess
```

查看各状态数量：

```powershell
Get-NetTCPConnection |
  Group-Object State |
  Sort-Object Count -Descending |
  Format-Table Count, Name
```

连续采样时保留时间：

```powershell
1..10 | ForEach-Object {
  Get-Date -Format o
  Get-NetTCPConnection -RemotePort 5000 -ErrorAction SilentlyContinue |
    Format-Table State, LocalAddress, LocalPort, RemoteAddress, RemotePort
  Start-Sleep -Seconds 1
}
```

### 测试 TCP 建连

```powershell
Test-NetConnection -ComputerName 192.0.2.10 -Port 5000 -InformationLevel Detailed
```

结果包含名称解析、目标地址、源地址和 TCP 建连测试。业务协议还需要使用对应客户端继续验证。

### 解析 DNS

```powershell
Resolve-DnsName example.com
Resolve-DnsName example.com -Type A
Resolve-DnsName example.com -Type AAAA
```

记录返回记录类型、地址、TTL 和使用的 DNS 服务器。缓存、负载均衡与地理位置可能让不同时间或不同主机得到不同答案。

### 查看地址、路由和邻居

```powershell
Get-NetIPAddress |
  Format-Table InterfaceAlias, AddressFamily, IPAddress, PrefixLength

Get-NetRoute -AddressFamily IPv4 |
  Sort-Object RouteMetric |
  Format-Table DestinationPrefix, NextHop, InterfaceAlias, RouteMetric

Get-NetNeighbor |
  Format-Table InterfaceAlias, IPAddress, LinkLayerAddress, State
```

传统命令也可提供快速快照：

```powershell
ipconfig /all
route print
arp -a
```

### 路径观察

```powershell
tracert example.com
pathping example.com
```

每一跳的响应策略由路由器配置决定。缺少某一跳回复仍可能存在可用的后续路径，最终连通性结合目标协议测试判断。

### 发起 HTTP 请求

强制 HTTP/1.1，便于观察 TCP：

```powershell
curl.exe --http1.1 -v https://example.com/
```

只记录连接与响应时间：

```powershell
curl.exe --http1.1 --output NUL --silent --show-error `
  --write-out "dns=%{time_namelookup}s connect=%{time_connect}s tls=%{time_appconnect}s first_byte=%{time_starttransfer}s total=%{time_total}s`n" `
  https://example.com/
```

### 使用 pktmon 捕获

Windows 自带的 Packet Monitor 可以生成 ETL，再转换为 pcapng。以下命令在管理员权限 PowerShell 中运行：

```powershell
pktmon start --capture --pkt-size 0 --file-name tcp-lab.etl
# 运行受控实验
pktmon stop
pktmon etl2pcap tcp-lab.etl --out tcp-lab.pcapng
```

具体参数随 Windows 版本变化，先运行 `pktmon help` 与子命令帮助确认。Pktmon 可以在多个网络栈组件观察到同一个报文；需要固定观察点时，先用 `pktmon list` 查看组件，再用 `--comp` 或 `etl2pcap --component-id` 缩小范围。Wireshark/Npcap 适合交互式选择接口与实时过滤。

## Linux

### 查看监听和连接

```bash
ss -ltnp
ss -ltnp 'sport = :5000'
ss -tan 'dport = :5000'
ss -tin 'dport = :5000'
```

`-t` 选择 TCP，`-l` 选择监听，`-n` 保留数字地址，`-p` 显示进程，`-i` 显示 TCP 内部信息。进程信息通常需要相应权限。

按状态筛选：

```bash
ss -tan state time-wait
ss -tan state close-wait
ss -tan state syn-recv
```

### 查看地址、路由和邻居

```bash
ip address show
ip -6 address show
ip route show
ip -6 route show
ip route get 192.0.2.10
ip neigh show
```

`ip route get` 会根据当前策略路由给出目标所使用的源地址、下一跳和接口，对多网卡主机尤其有用。

### 抓包

保存完整报文到文件：

```bash
sudo tcpdump -i any -nn -s 0 -w tcp-lab.pcap 'tcp port 5000'
```

在终端查看摘要：

```bash
sudo tcpdump -i any -nn -tttt -vvv 'tcp port 5000'
```

常用捕获表达式：

```bash
tcp port 5000
host 192.0.2.10 and tcp
src host 192.0.2.10 and dst port 5000
tcp[tcpflags] & tcp-syn != 0
tcp[tcpflags] & tcp-rst != 0
```

捕获过滤器采用 pcap 语法，Wireshark 显示过滤器采用另一套语法。保存原始捕获后再用显示过滤器分析，可以保留更多上下文。

### 连通性与路径

```bash
ping -c 4 192.0.2.10
ping -6 -c 4 2001:db8::10
traceroute example.com
tracepath example.com
mtr -rwzc 20 example.com
```

`tracepath` 常用于观察路径 MTU 线索，`mtr` 汇总多轮路径时延与响应情况。中间路由器的 ICMP 限速会影响显示结果。

### 手工建立 TCP 连接

```bash
nc -v 127.0.0.1 5000
```

监听测试：

```bash
nc -lv 5000
```

不同 `nc` 实现的参数略有差异，先查看 `nc -h`。长度前缀二进制协议需要使用教程中的 Python 客户端。

### 查看网卡卸载

```bash
sudo ethtool -k eth0
```

重点字段包括 `tx-checksumming`、`rx-checksumming`、`tcp-segmentation-offload`、`generic-segmentation-offload` 与 `generic-receive-offload`。修改卸载会影响主机性能，实验在受控环境中进行，并记录修改前值以便恢复。

### 查看故障注入配置

```bash
tc qdisc show dev eth0
```

教程涉及 `tc netem` 时，每个实验会给出精确添加、验证和删除步骤。操作前确认目标是测试接口，生产接口的排队规则由变更流程管理。

## macOS

### 查看监听进程

```bash
lsof -nP -iTCP:5000 -sTCP:LISTEN
```

### 查看 TCP 连接

```bash
netstat -anv -p tcp
```

### 查看地址、路由和邻居

```bash
ifconfig
netstat -rn
route -n get 192.0.2.10
arp -a
ndp -a
```

### 抓包与路径

```bash
sudo tcpdump -i all -nn -s 0 -w tcp-lab.pcapng 'tcp port 5000'
ping -c 4 192.0.2.10
traceroute example.com
```

macOS 的 `all` 捕获接口覆盖回环与隧道接口。本地回环实验也可以选用 `lo0`；运行 `tcpdump -D` 可以查看当前系统提供的接口名称。

### 手工连接与 HTTP

```bash
nc -v 127.0.0.1 5000
curl --http1.1 -v https://example.com/
```

## TShark 自动化摘要

安装 Wireshark 时可以同时安装 TShark。读取现有捕获并输出关键字段：

```powershell
tshark.exe -r tcp-lab.pcapng -Y "tcp.port == 5000" `
  -T fields `
  -e frame.number -e frame.time_relative `
  -e ip.src -e tcp.srcport -e ip.dst -e tcp.dstport `
  -e tcp.flags.str -e tcp.seq -e tcp.ack -e tcp.len
```

Linux/macOS 使用同样参数并移除 `.exe` 与 PowerShell 续行符。字段输出适合生成时间线、计数和可重复分析报告。

## 命令选择表

| 任务 | Windows | Linux | macOS |
| --- | --- | --- | --- |
| 监听端点 | `Get-NetTCPConnection -State Listen` | `ss -ltnp` | `lsof -nP -iTCP -sTCP:LISTEN` |
| 已连接四元组 | `Get-NetTCPConnection` | `ss -tan` | `netstat -anv -p tcp` |
| 地址 | `Get-NetIPAddress` | `ip address` | `ifconfig` |
| 路由 | `Get-NetRoute`、`route print` | `ip route` | `netstat -rn`、`route -n get` |
| 邻居 | `Get-NetNeighbor`、`arp -a` | `ip neigh` | `arp -a`、`ndp -a` |
| DNS | `Resolve-DnsName` | `resolvectl query`、`dig` | `dig`、`dscacheutil -q host` |
| TCP 建连 | `Test-NetConnection -Port` | `nc -vz` | `nc -vz` |
| 抓包 | Wireshark、`pktmon`、TShark | `tcpdump`、Wireshark、TShark | `tcpdump`、Wireshark、TShark |
| 路径 | `tracert`、`pathping` | `traceroute`、`tracepath`、`mtr` | `traceroute` |
| HTTP | `curl.exe` | `curl` | `curl` |
| 卸载 | 网卡高级属性、PowerShell 网卡命令 | `ethtool -k` | 驱动与系统工具，能力依接口而异 |

## 采集清单

一次完整排障通常保存：

1. 两端当前时间与时区；
2. 应用版本、启动参数和相关日志；
3. 地址、路由与 DNS 结果；
4. 监听端点、四元组、TCP 状态与 PID；
5. 两端或关键中间点抓包；
6. 复现步骤、请求 ID、开始和结束时间；
7. 防火墙、代理、负载均衡和空闲超时配置摘要；
8. 采集期间对环境做过的变更。

[上一页：Wireshark 过滤器速查](./c-wireshark-filters.md) · [返回附录目录](../08-appendices.md) · [下一页：TCP 术语表](./e-glossary.md)
