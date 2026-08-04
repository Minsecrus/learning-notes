# 第30章 TLS、HTTP 与 TCP 的关系

同一段网络通信可以同时拥有多套结构：HTTP 定义请求与响应，TLS 把明文组织为受保护记录，TCP 再把加密字节流分段传输。每一层只解释自己的首部与状态，上层边界和下层分段通常不会对齐。

## 1. 三层各自提供什么

```text
HTTP / 自定义协议：方法、路径、状态码、请求ID、业务消息边界
TLS：握手、证书、密钥、加密、完整性保护、TLS Record
TCP：连接、可靠有序字节流、流量控制、拥塞控制、重传
IP：跨网络寻址与数据报转发
```

TCP 让 TLS 收到有序字节。TLS 验证并解密后，向 HTTP 实现交付明文字节。HTTP 解析器依据版本规则恢复请求、响应、Header、Body、Frame 和 Stream。服务器最终把这些协议对象交给业务处理器。

一条成功的 HTTPS 新连接通常经历：TCP 三次握手、TLS 握手、HTTP 请求、HTTP 响应、连接复用或关闭。TLS 1.3 会减少握手往返，恢复会话还可能使用 0-RTT；0-RTT 数据具有重放风险，适用操作需要单独评估幂等性。

## 2. 边界为什么会错开

假设应用一次提交 30 KiB HTTP Body。TLS 实现可以把它放入多个 TLS Record；每条 Record 的密文又可能跨越多个 TCP Segment。接收端一次 `recv(4096)` 也可能拿到一个 Record 的局部、多个应用字段，或前一条响应末尾与下一条响应开头的连续字节。

边界关系可以概括为：

$$
B_{application},\ B_{TLS},\ B_{TCP}\quad\text{分别由各层规则确定}
$$

这个公式表达三种结构彼此独立。它也解释了两类常见现象：

- 一次应用写入在抓包中出现许多 Segment。
- 多次应用写入在接收端一次读取中一起出现。

TCP 重传围绕序列号区间工作，TLS 校验完整 Record，HTTP 解析完整消息。抓包工具可以同时展示这些层次，分析时应先确定当前引用的是哪一种长度和边界。

## 3. HTTP 各版本怎样使用传输层

### HTTP/1.1

HTTP/1.1 使用文本形式的起始行与 Header。消息体长度由请求方法、响应状态、`Content-Length`、`Transfer-Encoding: chunked` 或连接关闭等规则确定。持久连接允许多次请求复用一条 TCP 连接。解析器必须按 HTTP 规则读完整消息，`recv` 返回长度不参与消息完成判定。

### HTTP/2

HTTP/2 把通信拆成二进制 Frame，每个 Frame 带有长度、类型、标志和 Stream ID。多个 Stream 可以交错放在一条 TCP 连接上，应用层因而获得多路复用。HTTP/2 同时提供连接级和流级流量控制。

TCP 仍按一条有序字节流交付。某个 TCP Segment 丢失后，后续已到达字节会等待缺口填补，位于其他 HTTP/2 Stream 的 Frame 也暂时无法交给上层。这称为 TCP 连接级队头阻塞。HTTP/2 Stream 可以独立管理 HTTP 语义与优先级，底层丢包恢复仍共享一条 TCP 序列空间。

### HTTP/3 与 QUIC

QUIC 在 UDP 数据报之上实现安全连接、可靠传输、拥塞控制和多条独立字节流，TLS 1.3 握手集成在 QUIC 协议中。HTTP/3 把 HTTP 语义映射到 QUIC Stream。一个 Stream 的丢失数据会阻塞该 Stream 的有序交付，其他 Stream 已完整到达的数据可以继续交给应用；所有 Stream 仍共享连接路径与拥塞控制资源。

QUIC 还使用 Connection ID 支持连接迁移，并加密大部分传输控制信息。它保留了应用层必须面对的截止时间、重试、幂等、容量上限和背压问题，只是传输接口与可观测证据发生变化。

| 协议 | 下层承载 | 应用复用单位 | 丢包影响 |
| --- | --- | --- | --- |
| HTTP/1.1 | TCP，可叠加 TLS | 连接上的请求/响应序列 | 后续字节等待 TCP 缺口 |
| HTTP/2 | TCP，互联网部署通常叠加 TLS | 多个 HTTP/2 Stream | 所有 Stream 共享 TCP 有序交付 |
| HTTP/3 | QUIC over UDP | 多个 QUIC Stream | 有序等待主要限制在发生缺口的 Stream |

## 4. TLS 提供的安全边界

TLS 通过证书验证服务端身份，协商密钥，并为记录提供机密性与完整性保护。客户端需要验证受信任证书链和目标主机名；跳过证书校验会失去关键身份保证。服务端也可配置客户端证书，实现双向 TLS。

TLS 保护连接中的字节，业务授权继续由应用完成。例如一个通过证书验证的 HTTPS 服务器仍要检查登录会话、访问令牌与资源权限。TLS Record 的长度和时间通常仍可从网络侧观察，域名等元数据的可见性还取决于 TLS 版本、ECH 部署和抓包位置。

ALPN 是 TLS 握手中的协议协商机制。浏览器和服务器可借它选择 `h2` 或 `http/1.1`。本章自定义服务使用 `tnp/1` 作为教学 ALPN 标识，让双方在加密连接建立时确认上层协议。

TLS 握手日志适合按阶段阅读：ClientHello 提出版本、密码套件、SNI、ALPN 与密钥交换参数；ServerHello 选定核心参数；服务端发送证书和签名证明；双方导出会话密钥并用 Finished 校验握手完整性。TLS 1.3 会加密 ServerHello 之后的大部分握手内容，抓包界面可见字段也随密钥日志与抓包点变化。

证书验证至少包含有效期、信任链、主机名和用途。企业代理可能在受管设备上安装自有信任根并终止 TLS，此时客户端到代理、代理到服务端形成两段独立安全连接。诊断记录应写明 TLS 终止点，后端抓包与客户端抓包可能呈现不同连接、证书和时序。

TLS 会话恢复能减少后续连接的握手成本，连接池则直接复用已建立连接。性能测试应分别记录新建连接、恢复连接和复用连接，避免把三种路径的时延混在一个平均值里。证书轮换测试还需覆盖旧连接持续使用与新连接加载新证书两个阶段。

## 5. 完整实验：给长度前缀服务加 TLS

先生成只用于本机实验的证书。已安装 OpenSSL 时，在空实验目录运行。Windows PowerShell 可把 `NUL` 作为空配置文件，绕开安装包中失效的默认 `openssl.cnf` 路径：

```powershell
openssl req -x509 -newkey rsa:2048 -sha256 -nodes -config NUL -keyout key.pem -out cert.pem -days 7 -subj "/CN=localhost" -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```

macOS 与 Linux 可将 `NUL` 改为 `/dev/null`。生成的私钥和证书只留在实验目录，并在实验结束后清理。

把下面代码保存为 `tls_echo.py`。客户端把 `cert.pem` 作为实验信任根，并验证证书中的 `localhost`。服务端只处理一条连接后退出，方便重复抓包。

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

先在一个终端运行：

```powershell
python .\tls_echo.py server --cert .\cert.pem --key .\key.pem
```

再在另一个终端运行：

```powershell
python .\tls_echo.py client --cert .\cert.pem --keylog .\tls-keys.log
```

### 预期现象

双方打印相同的 TLS 版本、密码套件与 `tnp/1`，服务端日志可以看到 `hello，tcp` 明文，客户端收到大写响应。证书文件更换或 `server_hostname` 改成证书未覆盖的名称时，客户端会报告证书验证失败。

用 Wireshark 过滤 `tcp.port == 9443`。在未加载密钥日志时，可以看到 TCP 握手、TLS ClientHello/ServerHello、Application Data 的长度和时间，以及 TCP 重传、窗口与 FIN/RST；应用正文保持加密。将 `tls-keys.log` 配置到 Wireshark 的 TLS 密钥日志后，本机授权实验可以展示解密后的协议字节。密钥日志具备解密对应会话的能力，实验时应限制文件权限并在使用后安全清理。`Follow TCP Stream` 的原始 TCP 视图仍以 TLS 记录字节为主，应用日志则直接使用解密后的消息对象。

再运行第26章的明文服务并抓取同一条请求，对比两份抓包：明文抓包可直接搜索 Magic 和 JSON，TLS 抓包主要提供握手元数据、密文长度、时序和 TCP 状态。这项对照能建立“可观测性随层次变化”的直觉。

## 6. 诊断时选择正确证据

遇到 HTTPS 超时时，可以按层检查：

1. TCP 握手是否完成，是否存在 SYN 重传、RST 或窗口停滞。
2. TLS 握手是否完成，证书验证、版本、SNI 与 ALPN 是否匹配。
3. HTTP 请求是否被解析，Stream 与连接级流量控制是否允许继续发送。
4. 应用是否接收请求、进入队列、完成处理并生成响应。
5. 客户端总截止时间在哪一步耗尽。

抓包擅长证明线上时序和传输状态，TLS 日志解释握手与记录，HTTP 访问日志解释请求语义，分布式追踪用请求 ID 串起队列和下游调用。多层证据共享精确时间、连接四元组和请求标识后，结论会更容易复查。

## 7. 理解检查

1. 一条 HTTP 消息、一个 TLS Record 和一个 TCP Segment 为什么经常呈现不同切分方式？
2. TLS 解密完成后，`SSLSocket.recv` 向应用提供哪一层的数据？
3. HTTP/2 多路复用后，TCP 丢失一个 Segment 为什么会暂时影响多个 Stream？
4. QUIC 的多 Stream 设计怎样缩小有序交付缺口的影响范围？
5. HTTPS 请求超时时，哪些证据分别来自 TCP、TLS、HTTP 和业务层？

## 8. 本章小结

TCP、TLS 和 HTTP 形成逐层契约：TCP交付可靠有序字节，TLS保护连接中的记录，HTTP解释请求与响应语义。边界分离帮助程序正确循环读取，也帮助诊断者选择对应层次的证据。下一篇将把这些能力汇总为系统化抓包诊断流程。

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
