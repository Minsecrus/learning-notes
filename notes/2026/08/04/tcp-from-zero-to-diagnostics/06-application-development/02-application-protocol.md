# 第26章 如何设计应用层协议

TCP 负责按序交付字节流，但并不关心这些字节的业务含义。因此，我们需要应用层协议来回答另一组关键问题：一条消息的边界在哪里？它属于哪个版本？代表什么操作？对应哪次请求？遇到异常输入时，又该如何安全退出？

## 1. 从需求推导首部

在本章中，我们将从零设计一个教学用的应用层协议 TNP/1。为了方便解析，我们将基础首部（Base Header）大小固定为 24 字节，网络字节序（Network Byte Order）采用大端序（Big-Endian）：

| 字段 | 长度 | 含义 |
| --- | ---: | --- |
| Magic | 4 | 固定为 `TNP1`，快速识别错接协议 |
| Version | 1 | 当前值为 1 |
| Flags | 1 | 低四位表示可选特性，高四位保留给必须理解的特性（Mandatory Features） |
| Type | 1 | 1 请求、2 响应、3 错误 |
| Header Length | 1 | 首部总长度（包含扩展字段） |
| Payload Length | 4 | 消息体字节数，最大 1 MiB |
| Request ID | 8 | 关联请求、响应和重试 |
| Error Code | 2 | 错误响应中的机器可读错误码 |
| Reserved | 2 | v1 必须为零 |

固定宽度的设计，能让解析器在第一次读取时就有确定的长度预期；而 `Header Length` 字段则为未来引入 TLV（Type-Length-Value）扩展预留了空间。一个数据帧（Frame）的总长度计算如下：

$$
L_{frame}=L_{header}+L_{payload}
$$

在解析时，接收端会先分别校验首部长度和消息体（Payload）长度是否超过预设的安全上限，**验证通过后才会进行内存分配**。这种“先校验后分配”的顺序非常重要，能有效防止攻击者通过伪造极大的长度值（如 `0xffffffff`）来触发 OOM（Out of Memory）攻击。

## 2. 完整编解码器

请将上一章编写的 `io_helpers.py` 与以下 `protocol.py` 代码放在同一目录下。这段代码实现了一个完整的编解码器，支持处理粘包（连续消息）、截断检测、TLV 扩展解析以及基于总截止时间（Deadline）的超时控制。

```python
from __future__ import annotations

from dataclasses import dataclass
import socket
import struct

from io_helpers import read_exactly, send_all

MAGIC = b"TNP1"
VERSION = 1
TYPE_REQUEST = 1
TYPE_RESPONSE = 2
TYPE_ERROR = 3
VALID_TYPES = {TYPE_REQUEST, TYPE_RESPONSE, TYPE_ERROR}

FLAG_JSON = 0x01
MANDATORY_FLAGS_MASK = 0xF0
BASE_HEADER = struct.Struct("!4sBBBBIQHH")
TLV_HEADER = struct.Struct("!BBH")
MAX_HEADER = 255
MAX_PAYLOAD = 1024 * 1024
EXT_REQUIRED = 0x80
EXT_TRACE_ID = 1


class ProtocolError(ValueError):
    pass


@dataclass(frozen=True)
class Message:
    msg_type: int
    flags: int
    request_id: int
    error_code: int
    payload: bytes
    extensions: dict[int, bytes]


def _validate_fields(
    msg_type: int,
    flags: int,
    request_id: int,
    error_code: int,
    payload_size: int,
) -> None:
    if msg_type not in VALID_TYPES:
        raise ProtocolError(f"unknown message type: {msg_type}")
    if not 0 <= flags <= 0xFF:
        raise ProtocolError("flags is outside uint8 range")
    if flags & MANDATORY_FLAGS_MASK:
        raise ProtocolError(f"unsupported mandatory flags: 0x{flags:02x}")
    if not 0 <= request_id <= 0xFFFF_FFFF_FFFF_FFFF:
        raise ProtocolError("request_id is outside uint64 range")
    if payload_size > MAX_PAYLOAD:
        raise ProtocolError("payload exceeds 1 MiB limit")
    if not 0 <= error_code <= 0xFFFF:
        raise ProtocolError("error_code is outside uint16 range")
    if msg_type == TYPE_ERROR and error_code == 0:
        raise ProtocolError("error message requires a nonzero error_code")
    if msg_type != TYPE_ERROR and error_code != 0:
        raise ProtocolError("regular message requires error_code 0")


def _parse_extensions(raw: bytes) -> dict[int, bytes]:
    result: dict[int, bytes] = {}
    seen: set[int] = set()
    offset = 0
    while offset < len(raw):
        if len(raw) - offset < TLV_HEADER.size:
            raise ProtocolError("truncated TLV header")
        tag, ext_flags, value_size = TLV_HEADER.unpack_from(raw, offset)
        offset += TLV_HEADER.size
        if ext_flags & 0x7F:
            raise ProtocolError("unknown TLV flag bits")
        end = offset + value_size
        if end > len(raw):
            raise ProtocolError("TLV value crosses header boundary")
        if tag in seen:
            raise ProtocolError(f"duplicate TLV tag: {tag}")
        seen.add(tag)
        value = raw[offset:end]
        offset = end

        if tag == EXT_TRACE_ID:
            if not 1 <= len(value) <= 64:
                raise ProtocolError("trace id length must be 1..64")
            result[tag] = value
        elif ext_flags & EXT_REQUIRED:
            raise ProtocolError(f"unsupported required TLV tag: {tag}")
        # 未识别且可选的 TLV 已由长度字段安全跳过。
    return result


def encode_message(
    msg_type: int,
    request_id: int,
    payload: bytes,
    *,
    flags: int = 0,
    error_code: int = 0,
) -> bytes:
    if not isinstance(payload, bytes):
        raise TypeError("payload must be bytes")
    _validate_fields(msg_type, flags, request_id, error_code, len(payload))
    header = BASE_HEADER.pack(
        MAGIC,
        VERSION,
        flags,
        msg_type,
        BASE_HEADER.size,
        len(payload),
        request_id,
        error_code,
        0,
    )
    return header + payload


def send_message(
    sock: socket.socket,
    msg_type: int,
    request_id: int,
    payload: bytes,
    deadline: float,
    *,
    flags: int = 0,
    error_code: int = 0,
) -> None:
    packet = encode_message(
        msg_type, request_id, payload, flags=flags, error_code=error_code
    )
    send_all(sock, packet, deadline)


def read_message(sock: socket.socket, deadline: float) -> Message:
    raw = read_exactly(sock, BASE_HEADER.size, deadline)
    (
        magic,
        version,
        flags,
        msg_type,
        header_size,
        payload_size,
        request_id,
        error_code,
        reserved,
    ) = BASE_HEADER.unpack(raw)

    if magic != MAGIC:
        raise ProtocolError("invalid magic")
    if version != VERSION:
        raise ProtocolError(f"unsupported version: {version}")
    if not BASE_HEADER.size <= header_size <= MAX_HEADER:
        raise ProtocolError("header length outside allowed range")
    if reserved != 0:
        raise ProtocolError("reserved field must be zero")
    _validate_fields(msg_type, flags, request_id, error_code, payload_size)

    extension_size = header_size - BASE_HEADER.size
    extension_raw = read_exactly(sock, extension_size, deadline)
    extensions = _parse_extensions(extension_raw)
    payload = read_exactly(sock, payload_size, deadline)
    return Message(
        msg_type, flags, request_id, error_code, payload, extensions
    )
```

上述代码的解析顺序处处体现了**防御性编程**的思维：
1. 首先读取固定长度的首部。
2. 校验 Magic 字段、版本号、消息类型、保留位以及长度的合法性。
3. 严格根据 `Header Length` 字段读取并解析扩展区，防止越界。
4. 只有在确认消息体长度安全后，才为其分配内存。
如果在上述任何一步发现异常，都应当记录简短的错误日志，并**立刻关闭当前连接**。千万不要试图在已经失去同步的字节流中去“猜测”下一帧的起点。

### 把解析器看成状态机

从概念上看，一条 TCP 连接上的协议解析过程其实是一个状态机。其状态流转可以清晰地表示为：`READ_BASE_HEADER -> VALIDATE -> READ_EXTENSIONS -> READ_PAYLOAD -> DISPATCH`。
每次系统调用 `recv` 读到数据时，只是向前推进当前状态的偏移量（Offset）；当一条完整的消息被提取并交给业务层后，状态机再次回到 `READ_BASE_HEADER`。这种状态机模型能非常自然地处理网络编程中的各种“麻烦事”：比如一次 `recv` 读到了多条消息（粘包）、一个首部被切分成多次到达（拆包），或是消息体数据尚未完全到达等情况。

当发生协议错误时，当前的字节流往往已经失去了可信的边界。例如，Magic 校验失败可能是因为客户端连错了端口，也可能是由于前一条消息的长度字段被篡改，导致解析错位。在这种情况下，TNP/1 的策略是：**记录错误并直接断开连接**，强制客户端重新建连，从而在下一个全新的连接中从头开始解析。
虽然某些二进制文件格式会尝试扫描后续字节来寻找下一个 Magic 以便“恢复同步”，但网络服务若采用这种策略会面临极大的风险——你必须严格限制扫描的范围，并且还要防范攻击者在消息体中故意构造伪造的 Magic 序列来制造解析歧义。

在生产环境中，解析器还需要在连接级别统计资源指标，比如：已处理的帧数、协议错误次数、累计收发字节数、解析耗时以及当前的缓冲区占用情况。
记录错误日志时要格外小心。应当只打印少量十六进制的前缀片段，并对 Token 等敏感凭据脱敏。绝对不能将不受信任的长度值或大段异常文本直接写入日志，否则攻击者可以轻易塞满你的服务器磁盘，引发日志拒绝服务（Log Forging / DoS）攻击。

## 3. 为什么需要 Magic、版本和请求 ID

**Magic 字段**的作用是“尽早发现端口误接”。比如，当一个 HTTP 客户端错误地把 `GET /` 发送到我们的 TNP 端口时，解析器在检查前四个字节时就会立即报错并拒绝连接。不过要记住，Magic 仅仅用于格式识别，真正的安全通信和身份认证应该由 TLS 和应用层的鉴权机制来保证。

**Version（版本号）** 则是双方通信的语法契约。在协议的迭代演进中，向后兼容通常有三种做法：

- **新增可选的 TLV**：旧版本接收端即使不认识新标签，也可以根据长度字段安全跳过。
- **使用可选 Flag**：在标志位（Flags）的低位区域增加新特性，允许旧版本接收端忽略它们。
- **升级版本号或使用强制 Flag**：如果新增了必须由双方共同理解的破坏性变更语义，就应该使用高位的强制标志位（Mandatory Flags），或者直接升级大版本号。此时，旧接收端会直接返回“不支持该版本/特性”的错误。

**Request ID（请求标识）** 是连接异步世界的桥梁。它不仅能让异步响应准确对应回原始请求，还能作为后续实现幂等性（Idempotency）去重机制的键值（Key）。
一次逻辑操作的所有重试动作，都应该共享同一个 Request ID；而不同的逻辑操作必须生成不同的 ID。服务端通常会将“客户端身份标识”与“Request ID”组合起来，形成一个全局唯一键，用来防止重复执行。

在实际工程中，版本协商往往需要一个“双方都能理解的基准起点”。对于内部或简单的服务，你可以直接在文档里规定“当前端口仅支持 v1”，遇到其他版本就抛出固定的格式化错误。但对于需要长期对外服务的系统，更优雅的做法是：客户端在首次握手时发送自身的能力列表，由服务端选择一个双方都支持的版本。需要注意的是，**协商消息本身必须使用极度稳定的基础格式**，以免陷入“为了解析协商消息还需要先协商版本”的死循环。

在 TLV 扩展设计中，`Length` 仅表示后续 Value 的字节数。本章的代码通过判断 `offset + value_size <= header boundary` 来确保每个扩展字段都不会越过首部边界。在真实的工业级协议中，你还需要明确规定：是否允许重复的标签？标签的排列顺序是否有要求？一次最多允许多少个扩展？以及各种数据类型的规范编码（Canonical Encoding）方式。采用规范编码能让后续的请求签名（Signature）、缓存键计算以及测试向量的构造变得更加可靠和一致。

## 4. 文本编码与结构化数据

协议首部（Header）负责处理网络字节，而消息体（Payload）则可以用来承载结构化数据，例如一段采用 UTF-8 编码的 JSON：

```python
import json
import secrets
import time

body = json.dumps(
    {"operation": "greet", "name": "小林"},
    ensure_ascii=False,
    separators=(",", ":"),
).encode("utf-8")

send_message(
    sock,
    TYPE_REQUEST,
    secrets.randbits(64),
    body,
    time.monotonic() + 3.0,
    flags=FLAG_JSON,
)
```

收到这段 JSON 后，接收端千万不要直接反序列化就完事了。你还需要限制 JSON 的嵌套层级、字段数量、字符串最大长度，并校验关键业务字段的数值范围。前面我们设置的 1 MiB 帧大小上限仅仅防御了字节流层面的攻击，而业务层面的 Schema 校验（如 JSON Schema）才能防止语义上的滥用。
对于这类解析错误，服务端应当返回机器可读的错误码（Error Code）和简短的文字描述。同时，服务端的内部日志要记录下 Request ID、报文长度和具体的解析报错位置，并务必剔除用户的密码、凭证等个人隐私数据（PII）。

协议规范中必须明确“长度”的单位。在 TNP/1 中，`Payload Length` 指的是**编码后的字节数（Bytes）**，而不是字符数（Characters）。例如，一个中文字符在 UTF-8 编码下通常占据 3 个字节。因此，在 Python 中打包消息体时，必须使用 `len(encoded_bytes)` 而绝不能用 `len(string)`。
一般来说，“字符数”适合用来做业务逻辑的限制（例如用户名最多 10 个字符），而“字节数”才是用来做网络成帧和内存上限控制的标准。最佳实践是：接收端先按字节数拦截超大报文，然后安全地将字节流解码为 UTF-8 字符串，最后再进行字符长度和数据结构的业务校验。

在处理长度等整数运算时，边界溢出是常见的漏洞源头。虽然 Python 会自动把大整数升级为大数类型，但如果是用 C、Rust、Java 等语言实现协议，在计算 `header_size + payload_size` 时必须使用安全的饱和加法或显式检查溢出。因为即使两个字段各自都在合法范围内，它们相加后的总长度也可能超出可用缓冲区的上限。
如果你的协议需要跨多语言实现，强烈建议维护一份语言无关的**测试向量集（Test Vectors）**。通过跨语言共享这些二进制样例，你可以轻松验证各端的字节序处理、极限值校验、空包处理以及错误恢复逻辑是否完全一致。

当解析器完成所有的脏活累活后，业务层的分发器（Dispatcher）才会接收到一个格式绝对合法的 `Message` 对象。随后的业务逻辑就像洋葱一样逐层剥开：认证（Authentication）、授权（Authorization）、Schema 校验、状态流转校验，最后是限流控制（Rate Limiting）。
每一层拦截都应该返回标准的错误码。例如，使用 `400 Malformed Request` 表示格式错误，`401 Unauthenticated` 表示未登录，`403 Forbidden` 表示无权限，`413 Payload Too Large` 表示报文过大，以及 `503 Service Unavailable` 表示系统繁忙。客户端则根据这些明确的错误指示，智能地决定是应该修改请求、刷新 Token 还是进行指数退避式的重试。

### 一份可执行的协议契约

一份优秀的工业级协议规范远不止一张字段表。它应该包含：字节序约定、状态机转换图、各类长度的绝对上限、字符编码规范、全局错误码表、连接关闭与超时断开的规则、幂等性语义说明，以及跨版本的兼容矩阵。
更重要的是，规范应当附带详尽的十六进制“测试向量”，让其他语言的开发者能够逐字节对照调试。例如：一个正文为空的 24 字节心跳请求、一个恰好处于临界上限的超大包、包含未知可选 TLV 的报文，以及触发“不支持能力”报错的必需 TLV 报文，都是非常经典的固化测试用例。

除了静态用例，网络协议绝对不能缺少**模糊测试（Fuzzing）**。通过向解析器疯狂注入随机字节、执行位翻转（Bit-Flipping）、人为截断报文以及填入极端长度，我们可以验证系统的底线：进程不能崩溃、内存分配必须有界、解析必须在指定的超时时间内完成，并且返回的错误类型必须符合预期。
另外，基于属性的测试（Property-Based Testing）也极其有效，比如验证编解码的对称性法则 `decode(encode(message)) == message`，并全排列测试 Request ID 为 0 和最大值的边界情况。当你的协议实现和规范文档通过 CI（持续集成）共享同一套测试向量时，不同团队间的“兼容性承诺”就不再是空口白话，而是一份随时可验证的自动报告。

系统上线前，最好进行跨语言的互操作测试（Interoperability Testing）。比如让 Python 编写的客户端去连接 Rust 编写的服务端，然后交换角色，运行同一套测试用例。在这个过程中使用 Wireshark 或 tcpdump 抓包，逐个字节地比对首部数据，能极快地暴露出主机字节序疏忽、结构体对齐填充（Struct Padding）错误、字符串编码异常以及长度计算差异等隐蔽缺陷。在协议大版本升级时，务必保留旧版代码参与回归测试，以确保持续兼容。

## 5. 实验：连续、截断与恶意输入

下面我们通过一段测试代码，来模拟网络中常见的异常场景。这里使用 `socket.socketpair()` 创建一对直接相连的全双工 Socket（在当前的 Python 版本中，主流的 Windows、Linux 和 macOS 都完美支持该接口）。

```python
import socket
import time

from io_helpers import UnexpectedEOF
from protocol import *

left, right = socket.socketpair()
with left, right:
    first = encode_message(TYPE_REQUEST, 101, b"alpha")
    second = encode_message(TYPE_REQUEST, 102, b"beta")
    left.sendall(first + second)       # 两帧可以在一次写入中连续出现
    deadline = time.monotonic() + 1
    assert read_message(right, deadline).payload == b"alpha"
    assert read_message(right, deadline).payload == b"beta"

left, right = socket.socketpair()
with left, right:
    packet = encode_message(TYPE_REQUEST, 103, b"truncated")
    left.sendall(packet[:-3])
    left.shutdown(socket.SHUT_WR)
    try:
        read_message(right, time.monotonic() + 1)
    except UnexpectedEOF as exc:
        print("truncation detected:", exc)
```

除了上述的粘包和截断测试，你还可以尝试构造一些恶意输入：比如把 Magic 修改为 `XXXX`，将 Type 设置为一个不存在的枚举值 `99`，或者把 Payload Length 声明为 `MAX_PAYLOAD + 1`。
正如预期，解析器会在尝试读取消息正文之前，果断抛出 `invalid magic`、`unknown message type` 或是报文超长的错误。
如果将两条合法的完整数据帧拼接在一起发送，接收端能够通过我们在首部定义的长度字段，准确无误地从连续的字节流中切割并解析出两条独立的消息。当你在扩展区塞入一个未知的可选 TLV 时，解析器会静默且安全地将其跳过；但如果你在扩展头中把高位的 `EXT_REQUIRED` 标志位置位，解析器就会立刻感知到危险，并报告当前程序缺少支持该强制特性的能力。

## 6. 理解检查

1. 为什么接收端在处理消息体时，必须先校验长度上限，然后才能去分配内存？
2. 当 TCP 将客户端的两次连续发送“粘包”合并成一次接收时，TNP/1 协议是如何准确无误地将其切分为两条消息的？
3. TNP/1 中的请求 ID（Request ID）与 TCP 的序列号（Sequence Number）分别是在网络模型的哪一层发挥作用的？它们解决的问题有何不同？
4. 当解析器遇到一个“未知的可选 TLV”和一个“未知的强制必需 TLV”时，分别应该采取怎样的处理行为？
5. 简单的 Magic 字符串校验能帮我们规避哪些常见的配置错误？为什么说它不能替代密码学级别的身份认证（如 TLS）？

## 7. 本章小结

一个健壮的应用层协议，本质上是将消息边界、版本契约、功能协商、身份追踪以及资源分配的上限，全部编码为一种可被严格校验的格式。通过建立这套规则，应用层摆脱了底层网络字节流的混沌状态。
但在分布式系统中，网络连接的断开随时可能发生。在下一章中，我们将面对一个更加棘手的业务难题：当连接突然中断时，客户端如何应对“请求到底有没有被服务端执行”这种薛定谔的状态？

## 导航

- [上一章：Socket API 的正确使用](./01-socket-api.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：超时、重试和幂等性](./03-timeouts-retries-idempotency.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
