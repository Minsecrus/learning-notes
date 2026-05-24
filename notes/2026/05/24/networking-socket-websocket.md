# Socket 与 WebSocket 的区别

## Socket 是什么

`Socket` 是程序使用网络的接口，也可以理解为一次网络通信的端点。

一句话：

> Socket 是应用程序和操作系统网络协议栈之间的接口。

前面可以把网络分层理解成：

```text
Frame 负责一跳内传输
IP 负责跨网络找到主机
TCP/UDP 负责主机上的进程通信
Socket 是程序实际使用 TCP/UDP 的入口
```

浏览器、服务器、聊天软件、游戏客户端通常不会自己手动组装 Ethernet frame、IP packet 或 TCP segment。它们会通过操作系统提供的 Socket API 表达自己的意图：

```text
我要连接 example.com 的 443 端口
我要发送这些数据
我要接收返回的数据
```

然后操作系统网络协议栈会处理 TCP、IP、ARP、Frame 等底层细节。

## Socket 由什么标识

通常一条 TCP 连接可以用这几个信息描述：

```text
协议 + 本地 IP + 本地端口 + 远程 IP + 远程端口
```

例如电脑访问网站服务器：

```text
协议: TCP
本地 IP: 192.168.1.23
本地端口: 51544
远程 IP: 203.0.113.10
远程端口: 443
```

其中：

```text
192.168.1.23:51544  是电脑这边的 socket
203.0.113.10:443    是服务器这边的 socket
```

所以 socket 常常写成：

```text
IP address + port
```

例如：

```text
203.0.113.10:443
127.0.0.1:3000
192.168.1.23:51544
```

## Port 的作用

IP 地址只能定位到一台主机，但一台主机上可能同时运行很多程序：

```text
浏览器
聊天软件
游戏
数据库
Web 服务器
SSH 服务
```

数据到了这台主机之后，要交给哪个程序，就靠 `port`，端口。

可以记成：

```text
IP address 找到哪台机器
port 找到机器上的哪个程序
```

常见端口：

```text
80    HTTP
443   HTTPS
22    SSH
3306  MySQL
5432  PostgreSQL
```

## Server Socket 和 Client Socket

服务器通常会做这些事：

```text
1. 创建 socket
2. 绑定 IP 和端口
3. 开始监听
4. 等客户端连接
5. 收发数据
```

比如一个 Web 服务器监听：

```text
0.0.0.0:8080
```

意思是：

```text
我在本机所有网卡的 8080 端口上等待连接
```

客户端访问它时，会创建自己的 socket：

```text
客户端: 192.168.1.23:51544
服务器: 203.0.113.10:8080
```

客户端的 `51544` 这种端口通常是操作系统临时分配的，叫 `ephemeral port`，临时端口。

## TCP Socket 和 UDP Socket

Socket 不只用于 TCP，也可以用于 UDP。

TCP socket：

```text
可靠
有连接
保证顺序
丢包会重传
像打电话，先建立连接，再持续交流
```

UDP socket：

```text
不保证可靠
无连接
不保证顺序
延迟低
像寄明信片，发出去就发出去
```

常见场景：

```text
TCP: 网页、文件下载、SSH、数据库连接
UDP: 游戏实时同步、语音视频、DNS、直播传输
```

## Socket 和网络分层的关系

程序代码里可能只是写：

```js
socket.write("hello");
```

但底层发送路径大致是：

```text
应用数据
  ↓
TCP segment
  ↓
IP packet
  ↓
Ethernet frame
  ↓
bits
```

接收时则反过来：

```text
bits
  ↓
Ethernet frame
  ↓
IP packet
  ↓
TCP segment
  ↓
socket read
  ↓
应用程序拿到数据
```

## Node.js TCP Socket 示例

服务器：

```js
const net = require("net");

const server = net.createServer((socket) => {
  socket.write("hello client\n");

  socket.on("data", (data) => {
    console.log("client says:", data.toString());
  });
});

server.listen(8080, () => {
  console.log("server listening on port 8080");
});
```

客户端：

```js
const net = require("net");

const socket = net.createConnection({
  host: "127.0.0.1",
  port: 8080,
});

socket.on("data", (data) => {
  console.log("server says:", data.toString());
});

socket.write("hello server\n");
```

这里的 `socket` 就是程序用来收发网络数据的对象。

## WebSocket 是什么

`WebSocket` 是一种建立在 TCP 之上的应用层协议，主要用于浏览器和服务器之间的持久双向通信。

一句话：

> Socket 是底层网络通信端点或编程接口；WebSocket 是一种应用层协议。

可以这样分层看：

```text
应用层:        HTTP / WebSocket / DNS / ...
传输层:        TCP / UDP
网络层:        IP
数据链路层:    Ethernet Frame / Wi-Fi Frame
```

普通 socket 更接近：

```text
程序 ↔ 操作系统 TCP/UDP 接口
```

WebSocket 更接近：

```text
浏览器/应用 ↔ WebSocket 协议 ↔ TCP socket ↔ 网络
```

也就是说：

```text
WebSocket 底层通常使用 TCP socket
但 WebSocket 本身不是底层 socket
```

## WebSocket 的连接过程

浏览器中可以这样创建 WebSocket：

```js
const ws = new WebSocket("wss://example.com/chat");

ws.onmessage = (event) => {
  console.log(event.data);
};

ws.send("hello");
```

WebSocket 的特点：

```text
1. 先通过 HTTP 发起握手
2. 服务器同意后，把连接升级为 WebSocket
3. 之后双方可以长期保持连接
4. 客户端和服务器都可以主动发消息
```

典型握手请求：

```http
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

服务器同意后返回：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

之后这条连接就不再按普通 HTTP 请求/响应工作，而是按 WebSocket 协议传输消息。

## Socket 和 WebSocket 的核心区别

| 对比项 | Socket | WebSocket |
| --- | --- | --- |
| 层级 | 更底层的通信端点/API | 应用层协议 |
| 依赖 | 可基于 TCP 或 UDP | 通常基于 TCP |
| 浏览器能否直接用 | 浏览器不能直接创建任意 TCP socket | 浏览器原生支持 |
| 数据形态 | 字节流或数据报 | 消息，text/binary |
| 是否自带消息边界 | TCP socket 没有 | 有 WebSocket message/frame |
| 常见用途 | 任意网络程序、服务端通信、系统编程 | 网页实时聊天、通知、协作、游戏状态同步 |
| 地址形式 | `IP:port` | `ws://...` 或 `wss://...` |

关键区别：

> TCP socket 传的是字节流；WebSocket 传的是 WebSocket 消息。

例如连续发送两次：

```js
ws.send("hello");
ws.send("world");
```

WebSocket 接收方通常能按两条消息收到：

```text
message 1: hello
message 2: world
```

但 TCP socket 只保证字节顺序，不保证应用层消息边界。接收方可能读到：

```text
hello
```

也可能读到：

```text
helloworld
```

或者：

```text
hel
loworld
```

所以在 TCP socket 上层，应用需要自己设计消息格式，比如：

```text
前 4 字节表示消息长度
后面 N 字节是消息内容
```

而 WebSocket 已经帮应用定义了一层消息协议。

## WebSocket Frame 和 Ethernet Frame

WebSocket 里也有 `frame`，但它和前面网络基础里讲的 Ethernet frame 不是一个层级。

```text
WebSocket frame: 应用层，用来组织 WebSocket 消息
Ethernet frame: 数据链路层，用来在一跳内传输数据
```

它们名字都叫 frame，但解决的问题不同。

## 总结

Socket 有两个常见含义：

```text
1. 抽象概念：网络通信的端点
2. 编程接口：操作系统提供给程序的网络 API
```

Socket 让程序能够通过 TCP 或 UDP 与另一个程序收发数据。IP 负责找到主机，port 负责找到主机上的进程，socket 则是程序实际使用网络的入口。

WebSocket 是一个跑在 TCP 之上的应用层协议。它内部依赖 TCP socket，但额外提供了 HTTP 握手、浏览器兼容、长期连接、双向通信和消息边界。
