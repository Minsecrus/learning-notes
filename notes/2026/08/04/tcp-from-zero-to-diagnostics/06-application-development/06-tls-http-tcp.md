# 第30章 TLS、HTTP 与 TCP 的关系

同一段网络通信往往交织着多套协议结构：HTTP 负责定义请求与响应；TLS 将明文封装为受保护的记录（Record）；TCP 则将加密后的字节流切分为报文段（Segment）进行传输。每一层只负责解析属于自己的首部与状态，上层的数据边界和下层的传输分段通常并不会对齐。

## 1. 三层各自提供什么

```text
HTTP / 自定义协议：方法、路径、状态码、请求ID、业务消息边界
TLS：握手、证书、密钥、加密、完整性保护、TLS Record
TCP：连接、可靠有序字节流、流量控制、拥塞控制、重传
IP：跨网络寻址与数据报转发
```

TCP 确保 TLS 能够按序收到字节流。TLS 负责验证与解密，随后将明文字节交付给 HTTP 层。HTTP 解析器再根据具体版本的规则，将这些字节还原为请求、响应、Header、Body、Frame 以及 Stream。最终，服务器将这些结构化的协议对象交给业务逻辑处理。

建立一条全新的 HTTPS 连接，通常要经历 TCP 三次握手、TLS 握手、HTTP 请求与响应，最后是连接复用或关闭。TLS 1.3 大幅减少了握手的往返次数（RTT），在恢复会话时甚至能做到 *0-RTT*。不过，0-RTT 数据存在被重放的风险，因此在使用时，必须单独评估业务操作是否具备幂等性。

::: details TLS 0-RTT 是什么？
TLS 1.3 的 0-RTT 允许客户端在恢复已有会话时，把早期应用数据随第一批握手消息一并发送，从而减少等待完整握手的往返成本。

早期数据缺少普通握手完成后的完整重放保护，攻击者可能复制并再次投递它；服务端应只允许安全可重放或具备严格幂等保护的操作使用 0-RTT。
:::

## 2. 边界为什么会错开

假设应用层一次性提交了 30 KiB 的 HTTP Body。TLS 层可能会将它拆分到多个 TLS Record 中；而每条 Record 的密文在传输时，又可能跨越多个 TCP 报文段（Segment）。在接收端，一次 `recv(4096)` 调用可能只拿到某个 Record 的一部分，也可能同时包含多个应用层字段，甚至可能正好读到了“上一条响应末尾 + 下一条响应开头”的连续字节。

这三者的边界关系可以概括为：

$$
B_{application},\ B_{TLS},\ B_{TCP}\quad\text{分别由各层规则确定}
$$

这个公式表明，这三种协议的结构是彼此独立的。这也解释了日常排查中常见的两类现象：

- 应用层只执行了一次写入，但抓包时却看到网络层发出了多个 TCP 报文段。
- 应用层执行了多次写入，但接收端通过一次读取操作就把它们全读了出来。

在底层机制上，TCP 依靠序列号（Sequence Number）区间来完成重传；TLS 必须收到完整的 Record 才能校验解密；HTTP 则需要读取到完整的消息体才能进行解析。虽然抓包工具能够同时展示这些层次的内容，但在分析时，我们必须先明确当前关注的到底是哪一层的长度与边界。

## 3. HTTP 各版本怎样使用传输层

### HTTP/1.1

HTTP/1.1 采用纯文本形式的起始行与 Header。消息体的长度由多种规则共同决定，例如请求方法、响应状态码、`Content-Length` 字段、`Transfer-Encoding: chunked` 或者是连接的关闭。通过持久连接（Keep-Alive），多次 HTTP 请求可以复用同一条 TCP 连接。由于底层数据可能随时被切分，解析器必须严格按照 HTTP 的规则来读取完整消息，而不能依赖 `recv` 返回的字节数来判断消息是否接收完毕。

### HTTP/2

HTTP/2 将通信数据拆分为二进制帧（Frame），每个 Frame 都包含长度、类型、标志以及 Stream ID。基于这种设计，多个 Stream 的帧可以交错穿插在同一条 TCP 连接中，从而实现了应用层的多路复用。此外，HTTP/2 还同时提供了连接级别和 Stream 级别的流量控制机制。

尽管 HTTP/2 实现了多路复用，但底层的 TCP 仍然只把它当成一条单一的有序字节流来交付。一旦某个 TCP 报文段丢失，后续已经到达的字节就必须在缓冲区里等待缺口被填补。这意味着，哪怕是属于其他 HTTP/2 Stream 的正常 Frame，也会被卡住而无法交付给应用层，这就是著名的“TCP 连接级队头阻塞”（Head-of-Line Blocking）。总的来说，HTTP/2 Stream 虽然能独立管理业务逻辑与优先级，但它们在底层的丢包恢复依然受制于同一个 TCP 序列号空间。

### HTTP/3 与 QUIC

QUIC 运行在 UDP 数据报之上，并在这一层直接实现了安全连接、可靠传输、拥塞控制（Congestion Control）以及多条独立的字节流。同时，它直接将 TLS 1.3 的握手过程集成到了协议内部。HTTP/3 则将 HTTP 的语义映射到了 QUIC 的 Stream 上。在 QUIC 中，某个 Stream 发生了数据丢失，只会阻塞该 Stream 自身的有序交付，其他 Stream 如果数据已经完整到达，依然可以正常提交给应用层。不过，所有的 Stream 仍然共享着同一条网络路径和总的拥塞控制资源。

此外，QUIC 引入了连接 ID（Connection ID）来支持连接迁移，并且对大部分的传输控制信息进行了加密保护。虽然 QUIC 改变了传输层的接口规范和抓包时的可观测特征，但应用层开发中必须面对的诸多经典挑战——如超时截止时间、请求重试、接口幂等性、容量上限以及背压（Backpressure）机制——依然存在，并没有因此消失。

| 协议 | 下层承载 | 应用层复用单位 | 丢包影响 |
| --- | --- | --- | --- |
| HTTP/1.1 | TCP（通常叠加 TLS） | 基于单一连接的请求/响应序列 | 后续字节必须等待 TCP 填补缺口 |
| HTTP/2 | TCP（实践中基本叠加 TLS） | 多个并发的 HTTP/2 Stream | 所有 Stream 共享 TCP 的有序交付，会产生队头阻塞 |
| HTTP/3 | QUIC (基于 UDP) | 多个并发的 QUIC Stream | 队头阻塞仅限于发生丢包的单个 Stream |

## 4. TLS 提供的安全边界

TLS 负责通过证书来验证服务端身份、协商加密密钥，并为传输的记录（Record）提供机密性与完整性保护。在这个过程中，客户端必须校验受信任的*证书链（Certificate Chain）*以及*目标主机名*；如果为了图省事而跳过证书校验，就会丧失最关键的身份保证机制，导致连接形同虚设。当然，服务端也可以要求客户端提供证书，从而实现*双向 TLS 认证（mTLS）*。

::: details 证书链是什么？
证书链是一条从服务器叶子证书，经一个或多个中间 CA 证书，通向客户端信任锚的签名关系。客户端逐级验证签名、用途、有效期和约束，确认服务器证书来自受信发行体系。

服务器通常需要发送叶子证书和必要的中间证书；根证书一般由客户端本地信任库提供。
:::

::: details TLS 主机名校验是什么？
主机名校验会把客户端准备访问的主机名与证书 Subject Alternative Name 中允许的 DNS 名称或 IP 地址比较。证书链可信但名称不匹配时，连接仍应失败。

它防止攻击者拿一张为其他域名签发的有效证书冒充当前目标。
:::

::: details mTLS 是什么？
mTLS（Mutual TLS，双向 TLS）在服务器证书认证之外，还要求客户端提交并证明自己持有客户端证书的私钥。双方都能在握手层获得对端的证书身份。

证书身份仍需映射到具体租户、角色和权限，证书吊销、轮换与信任范围也需要独立管理。
:::

需要强调的是，TLS 只负责保护连接中的字节流，具体的业务授权依然由应用层来完成。比如，即便一个请求已经通过了 HTTPS 证书验证，服务器依然要检查用户的登录会话、访问令牌（Token）以及资源权限。此外，从网络侧仍然能够观测到 TLS Record 的长度和时间特征。至于域名元数据 *SNI* 是否可见，则取决于 TLS 的版本、*ECH（Encrypted ClientHello）*的部署情况，以及你所处的抓包位置。

::: details SNI 是什么？
SNI（Server Name Indication）是 ClientHello 中携带目标服务器名称的 TLS 扩展。它让同一个 IP 和端口上的服务器在握手早期选择正确证书与虚拟主机配置。

传统 SNI 通常以明文出现在 ClientHello 中，因此路径观察者可能看到目标域名；ECH 旨在保护这部分信息。
:::

::: details ECH 是什么？
ECH（Encrypted ClientHello）把 ClientHello 中敏感的内部内容加密，其中包括真实 SNI 等信息，并通过外层 ClientHello 完成可部署的路由与兼容处理。

它需要客户端、DNS 配置和服务端共同支持；启用与否应从实际握手和部署配置确认。
:::

在 TLS 握手阶段，双方还会利用 *ALPN（Application-Layer Protocol Negotiation）*机制来决定后续的通信协议。浏览器和服务器正是借助 ALPN 来选择使用 `h2` 还是 `http/1.1`。在本章的实验中，我们的自定义服务将使用 `tnp/1` 作为教学专用的 ALPN 标识，以便通信双方在建立加密连接时确认上层协议。

::: details ALPN 是什么？
ALPN 是 TLS 扩展：客户端列出自己支持的上层协议标识，服务器在握手中选择一个，例如 `h2` 或 `http/1.1`。双方由此在发送应用数据前确认后续字节应由哪个协议解析器处理。

ALPN 协商失败或选择不一致常表现为 TLS 已连通、应用协议仍无法正常交互。
:::

分析 TLS 握手日志时，最清晰的做法是按阶段阅读：首先是客户端发送 ClientHello，提出它支持的版本、密码套件（Cipher Suite）、SNI、ALPN 以及密钥交换参数；接着服务端返回 ServerHello，敲定核心参数；随后服务端下发证书并提供签名证明；最后，双方推导出最终的会话密钥，并通过发送 Finished 消息来校验整个握手过程的完整性。需要注意的是，TLS 1.3 会加密 ServerHello 之后的大部分握手内容，因此在抓包界面上能看到哪些字段，很大程度上取决于你是否导入了*TLS 密钥日志（常由 `SSLKEYLOGFILE` 指定）*以及抓包点的位置。

::: details TLS 密钥日志与 SSLKEYLOGFILE 是什么？
TLS 密钥日志保存客户端为具体会话导出的流量密钥材料，Wireshark 可用它解密对应抓包。部分浏览器和运行时会读取 `SSLKEYLOGFILE` 环境变量，把密钥写入指定文件。

该文件具备解密会话内容的敏感能力，应仅在受控环境生成，限制访问并按数据保留策略清理；它不会包含抓包中未记录的报文。
:::

完整的证书验证至少要检查四大要素：有效期、信任链、主机名以及证书用途。在企业内网中，安全代理往往会在受管设备上安装自定义的*信任根（Trust Root）*，并在代理层进行 *TLS 终止（TLS Termination）*。在这种架构下，客户端到代理、代理到服务端实际上构成了两段完全独立的安全连接。因此，在诊断网络问题时，必须在记录中明确写出 TLS 是在哪里终止的，因为此时后端抓包与客户端抓包在连接、证书和时序上可能会呈现出完全不同的景象。

::: details 信任根是什么？
信任根是客户端预先信任的根 CA 证书或公钥锚点，位于证书链验证的起点。操作系统、浏览器或企业策略维护信任库；加入自定义根会让该根签发的证书获得相应信任。

信任根的安装范围直接决定谁有能力为该客户端认可的站点签发证书，必须严格管理。
:::

::: details TLS Termination 是什么？
TLS Termination 指某个端点完成 TLS 握手并解密该连接的数据。反向代理终止客户端 TLS 后，可以读取 HTTP，再通过另一条明文或 TLS 连接访问后端。

终止点形成可见明文的信任边界，也把端到端视角拆成两条独立传输连接；排障报告应明确每一段的证书、协议和加密状态。
:::

TLS 会话恢复（Session Resumption）机制可以有效降低后续连接的握手开销，而连接池技术则是直接复用早已建立好的长连接。在进行性能测试时，应当将“新建连接”、“恢复连接”和“复用连接”这三种情况分开记录；如果把它们混在一个平均值里，测试结论将会失去参考价值。另外，在测试证书轮换时，必须同时覆盖两个阶段：旧连接是否还能持续正常使用，以及新连接是否能成功加载新证书。

## 5. 完整实验：给长度前缀服务加 TLS

首先，我们来生成一张仅用于本机实验的证书。请确保已安装 OpenSSL，然后在一个空的实验目录下运行以下命令。在 Windows PowerShell 中，可以使用 `NUL` 作为空配置文件，以此绕过安装包里可能失效的默认 `openssl.cnf` 路径：

```powershell
openssl req -x509 -newkey rsa:2048 -sha256 -nodes -config NUL -keyout key.pem -out cert.pem -days 7 -subj "/CN=localhost" -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```

如果你使用的是 macOS 或 Linux，请将命令中的 `NUL` 替换为 `/dev/null`。生成的私钥和证书应仅保留在该实验目录中，并在实验结束后妥善清理。

请将以下代码保存为 `tls_echo.py`。代码中，客户端会将 `cert.pem` 作为实验的信任根，并校验服务器证书中的 `localhost` 主机名。为了方便重复抓包观察，服务端设计为只处理一条连接后便自动退出。

```python
from __future__ import annotations

import argparse
import socket
import ssl
import struct
import time

HOST = "127.0.0.1"
PORT = 9443
LENGTH = struct.Struct("!I")
MAX_FRAME = 1024 * 1024


def seconds_left(deadline: float) -> float:
    value = deadline - time.monotonic()
    if value <= 0:
        raise TimeoutError("deadline expired")
    return value


def send_all(sock, data: bytes, deadline: float) -> None:
    view = memoryview(data)
    offset = 0
    old_timeout = sock.gettimeout()
    try:
        while offset < len(view):
            sock.settimeout(seconds_left(deadline))
            try:
                count = sock.send(view[offset:])
            except InterruptedError:
                continue
            if count == 0:
                raise ConnectionError("sending made no progress")
            offset += count
    finally:
        sock.settimeout(old_timeout)


def read_exactly(sock, size: int, deadline: float) -> bytes:
    if size < 0:
        raise ValueError("size must be non-negative")
    result = bytearray()
    old_timeout = sock.gettimeout()
    try:
        while len(result) < size:
            sock.settimeout(seconds_left(deadline))
            try:
                chunk = sock.recv(size - len(result))
            except InterruptedError:
                continue
            if not chunk:
                raise EOFError(f"TLS stream ended at {len(result)}/{size}")
            result.extend(chunk)
        return bytes(result)
    finally:
        sock.settimeout(old_timeout)


def send_frame(sock, body: bytes, deadline: float) -> None:
    if len(body) > MAX_FRAME:
        raise ValueError("frame exceeds 1 MiB")
    send_all(sock, LENGTH.pack(len(body)) + body, deadline)


def read_frame(sock, deadline: float) -> bytes:
    (size,) = LENGTH.unpack(read_exactly(sock, LENGTH.size, deadline))
    if size > MAX_FRAME:
        raise ValueError("frame exceeds 1 MiB")
    return read_exactly(sock, size, deadline)


def require_tnp_alpn(sock: ssl.SSLSocket) -> str:
    selected = sock.selected_alpn_protocol()
    if selected != "tnp/1":
        raise ssl.SSLError(f"expected ALPN tnp/1, got {selected!r}")
    return selected


def run_server(cert_file: str, key_file: str) -> None:
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.minimum_version = ssl.TLSVersion.TLSv1_2
    context.load_cert_chain(certfile=cert_file, keyfile=key_file)
    context.set_alpn_protocols(["tnp/1"])

    with socket.socket() as listener:
        listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        listener.bind((HOST, PORT))
        listener.listen()
        print(f"TLS server listening on {HOST}:{PORT}")
        raw, address = listener.accept()
        try:
            raw.settimeout(5.0)  # 同时约束 TLS 握手
            with context.wrap_socket(raw, server_side=True) as tls_sock:
                alpn = require_tnp_alpn(tls_sock)
                print(
                    "peer:", address,
                    "TLS:", tls_sock.version(),
                    "cipher:", tls_sock.cipher()[0],
                    "ALPN:", alpn,
                )
                deadline = time.monotonic() + 5.0
                body = read_frame(tls_sock, deadline)
                print("plaintext request:", body.decode("utf-8"))
                send_frame(tls_sock, body.upper(), deadline)
        finally:
            raw.close()


def run_client(cert_file: str, keylog_file: str | None) -> None:
    context = ssl.create_default_context(cafile=cert_file)
    context.minimum_version = ssl.TLSVersion.TLSv1_2
    context.set_alpn_protocols(["tnp/1"])
    if keylog_file is not None:
        context.keylog_filename = keylog_file

    with socket.create_connection((HOST, PORT), timeout=5.0) as raw:
        raw.settimeout(5.0)
        with context.wrap_socket(raw, server_hostname="localhost") as tls_sock:
            alpn = require_tnp_alpn(tls_sock)
            print(
                "TLS:", tls_sock.version(),
                "cipher:", tls_sock.cipher()[0],
                "ALPN:", alpn,
            )
            deadline = time.monotonic() + 5.0
            send_frame(tls_sock, "hello，tcp".encode("utf-8"), deadline)
            print("response bytes:", read_frame(tls_sock, deadline))


def main() -> None:
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="mode", required=True)
    server = subparsers.add_parser("server")
    server.add_argument("--cert", required=True)
    server.add_argument("--key", required=True)
    client = subparsers.add_parser("client")
    client.add_argument("--cert", required=True)
    client.add_argument("--keylog")
    args = parser.parse_args()

    if args.mode == "server":
        run_server(args.cert, args.key)
    else:
        run_client(args.cert, args.keylog)


if __name__ == "__main__":
    main()
```

先打开一个终端运行服务端：

```powershell
python .\tls_echo.py server --cert .\cert.pem --key .\key.pem
```

然后再打开另一个终端运行客户端：

```powershell
python .\tls_echo.py client --cert .\cert.pem --keylog .\tls-keys.log
```

### 预期现象

正常情况下，通信双方会打印出相同的 TLS 版本、密码套件以及 `tnp/1` 协议标识。在服务端日志中能看到解密后的 `hello，tcp` 明文请求，而客户端也会收到转换为大写的响应报文。如果你尝试更换证书文件，或者把客户端的 `server_hostname` 改成证书未涵盖的名称，客户端立刻就会抛出证书验证失败的错误。

接着，用 Wireshark 抓包并应用过滤条件 `tcp.port == 9443`。在尚未加载密钥日志时，你能清晰地看到 TCP 的三次握手、TLS 的 ClientHello 与 ServerHello，以及 Application Data 载荷的长度和时间特征；底层的 TCP 重传、窗口大小变化、FIN 或 RST 等状态同样一览无余，只不过应用层的正文部分依旧是加密的乱码。

当你将生成的 `tls-keys.log` 配置到 Wireshark 的 TLS 密钥日志选项中后，Wireshark 就能解密并展示出真实的协议字节了。因为密钥日志拥有解密对应会话的最高权限，所以在实验时应当严格限制该文件的访问权限，并在使用后安全清理。需要留意的是，即使解密成功，Wireshark 中“Follow TCP Stream”的原始 TCP 视图依然会以 TLS 的 Record 字节为主，只有应用层分析插件才会直接展示解密后的消息对象。

你可以重新运行第26章的明文服务，并抓取同一条请求的报文。将明文抓包与 TLS 抓包放在一起对比，你会发现：明文抓包可以直接用关键字搜索 Magic Number 和 JSON 数据；而 TLS 抓包则只能提供握手元数据、密文长度、时序特征以及 TCP 状态。这种鲜明的对比，能帮你深刻建立起“网络排查的可观测性会随着协议层次而变化”的技术直觉。

## 6. 诊断时选择正确证据

在排查 HTTPS 请求超时问题时，可以按照协议栈的层次自底向上进行排查：

1. **TCP 层**：握手是否成功？是否存在 SYN 报文重传、意外的 RST 报文或者窗口停滞（Zero Window）？
2. **TLS 层**：握手是否完成？证书验证是否通过？TLS 版本、SNI 以及 ALPN 是否匹配预期？
3. **HTTP 层**：请求头部是否被正确解析？Stream 级别和连接级别的流量控制（Flow Control）是否允许数据继续发送？
4. **业务层**：应用是否成功接收到了请求？请求是否堆积在队列中？业务逻辑是否正常执行并生成了响应？
5. **全局视角**：客户端设置的总超时截止时间，到底是在上面哪一步被耗尽的？

不同的诊断工具擅长提供不同层面的证据：抓包工具（如 Wireshark）最擅长还原线上的时序与传输状态；TLS 日志能够解释握手过程与 Record 异常；HTTP 访问日志（Access Log）则用于记录请求的语义与状态码；而分布式追踪系统（Trace）能通过请求 ID，将队列等待与下游 RPC 调用串联起来。在排查复杂问题时，将多层工具的证据结合起来，并通过精确的时间戳、连接四元组以及请求 ID 将它们对齐，得出的结论才会更加严谨、更易于复查。

## 7. 理解检查

1. 为什么一条 HTTP 消息、一个 TLS Record 和一个 TCP 报文段（Segment）往往呈现出完全不同的切分边界？
2. 在 TLS 层面完成解密后，调用 `SSLSocket.recv` 会向应用层返回哪一层的明文数据？
3. 既然 HTTP/2 实现了多路复用，为什么当底层的 TCP 丢失一个报文段时，依然会同时卡住多个不同 Stream 的数据？
4. QUIC 协议的多 Stream 设计是如何解决队头阻塞问题，从而缩小有序交付缺口的影响范围的？
5. 当遇到 HTTPS 请求超时报警时，TCP、TLS、HTTP 和业务逻辑这四个层面分别能提供哪些排查证据？

## 8. 本章小结

TCP、TLS 和 HTTP 三者之间形成了一套严密的逐层契约：TCP 负责交付可靠、有序的字节流；TLS 负责保护连接中的数据记录不被窃听与篡改；HTTP 则负责解释业务的请求与响应语义。这种清晰的边界分离，不仅指导我们在编写网络程序时要用正确的循环姿势读取数据，更能在排查问题时，指引诊断者去寻找对应层次的证据。在下一章中，我们将把这些积累的网络排查能力汇总，整理成一套系统化的抓包诊断流程。

## 参考规范

- [RFC 9293：Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)
- [RFC 9846：The Transport Layer Security Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc9846.html)（取代 RFC 8446）
- [RFC 9112：HTTP/1.1](https://www.rfc-editor.org/rfc/rfc9112.html)
- [RFC 9113：HTTP/2](https://www.rfc-editor.org/rfc/rfc9113.html)
- [RFC 9000：QUIC](https://www.rfc-editor.org/rfc/rfc9000.html)
- [RFC 9114：HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html)

## 导航

- [上一章：常用 Socket 选项](./05-socket-options.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：系统化阅读一份 TCP 抓包](../07-diagnostics-environments/01-systematic-pcap-reading.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
