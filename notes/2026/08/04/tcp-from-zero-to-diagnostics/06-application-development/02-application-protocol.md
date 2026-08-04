# 第26章 如何设计应用层协议

TCP 负责按顺序交付字节。应用协议负责回答另一组问题：一条消息从哪里开始、在哪里结束、属于哪个版本、表达什么操作、与哪次请求对应，以及输入异常时如何安全退出。

## 1. 从需求推导首部

本章设计一个教学协议 TNP/1。它的基础首部固定为 24 字节，网络字节序采用大端：

| 字段 | 长度 | 含义 |
| --- | ---: | --- |
| Magic | 4 | 固定为 `TNP1`，快速识别错接协议 |
| Version | 1 | 当前值为 1 |
| Flags | 1 | 低四位表示可忽略特性，高四位保留给必需特性 |
| Type | 1 | 1 请求、2 响应、3 错误 |
| Header Length | 1 | 包含扩展的首部总长度 |
| Payload Length | 4 | 消息体字节数，最大 1 MiB |
| Request ID | 8 | 关联请求、响应和重试 |
| Error Code | 2 | 错误响应中的机器可读错误码 |
| Reserved | 2 | v1 必须为零 |

固定宽度使第一步读取有确定长度，`Header Length` 又给未来的 TLV 扩展留出空间。总帧长度为：

$$
L_{frame}=L_{header}+L_{payload}
$$

接收端先验证 $L_{header}$ 和 $L_{payload}$ 的独立上限，再执行内存分配。这个顺序可以阻止攻击者用 `0xffffffff` 一类长度值诱导巨额分配。

## 2. 完整编解码器

把第25章的 `io_helpers.py` 与下面的 `protocol.py` 放在同一实验目录。代码支持连续消息、截断检测、可选 TLV 和总截止时间。

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

解析顺序体现了防御性思维：固定首部先到齐；Magic、版本、类型、保留位和长度完成验证；扩展区严格受 `Header Length` 约束；消息体在确认上限后才分配。任何一步失败都应记录有限长度的诊断信息并关闭当前连接，避免继续在失去同步的位置猜测下一帧。

### 把解析器看成状态机

一条连接上的解析状态可以明确写成 `READ_BASE_HEADER -> VALIDATE -> READ_EXTENSIONS -> READ_PAYLOAD -> DISPATCH`。每次短读只推进当前状态的偏移量；完整消息交给业务层后，状态回到 `READ_BASE_HEADER`。这个模型能自然容纳一次 `recv` 带来多条消息、一个首部跨多次 `recv` 到达，以及正文暂时缺少后续字节等情况。

协议错误发生后，当前字节位置通常缺少可信边界。例如 Magic 错误可能来自客户端接错端口，也可能来自先前长度字段错误导致的错位。TNP/1 选择记录错误并关闭连接，让下一次连接从确定的首字节重新开始。某些二进制文件格式会扫描 Magic 尝试恢复；网络服务采用这种策略时需要限制扫描字节数，并评估随机正文碰巧出现 Magic 的歧义。

解析器还应按连接累计资源指标：已经读取的帧数、协议错误数、消息体总字节、解析耗时和当前缓冲区占用。日志只截取少量十六进制前缀，并对令牌等敏感字段做隐藏。攻击者控制的长度和文本直接进入日志会放大磁盘占用，所以日志本身也需要长度上限。

## 3. 为什么需要 Magic、版本和请求 ID

Magic 可以尽早发现端口误用。例如 HTTP 客户端把 `GET /` 发到 TNP 端口，前四字节校验会立即失败。Magic 只承担格式识别，安全认证由 TLS 或应用鉴权负责。

版本字段表达语法契约。兼容演进通常采用三种手段：

- 新增可选 TLV，旧接收端按长度跳过。
- 新增可选 Flag，低位区域允许旧端忽略。
- 需要双方理解的新语义使用必需位或新版本，接收端返回“版本不支持”。

请求 ID 让响应与请求建立稳定关联，也为第27章的幂等去重提供键。它应在一次逻辑操作的全部重试中保持相同；不同逻辑操作使用不同 ID。服务端通常把客户端身份与请求 ID 组合成唯一键。

版本协商需要一条双方都能理解的起点。简单服务可以在端口文档中规定只支持 v1，并对其他版本返回固定的最小错误；需要长期演进的系统可以让客户端先发送能力列表，服务端选择共同版本。协商消息自身应使用稳定基础格式，避免双方在理解协商消息前又需要第二次协商。

TLV 的 `Length` 只描述 Value 长度，本章实现通过 `offset + value_size <= header boundary` 约束每个扩展。真实协议还要规定重复标签、标签顺序、最大数量与规范编码。规范编码有助于签名、缓存键和测试向量保持一致。

## 4. 文本编码与结构化数据

协议首部处理字节，消息体可以承载 UTF-8 JSON：

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

接收端还需限制 JSON 的结构深度、字段数量、字符串长度和业务数值范围。1 MiB 帧上限只约束总字节数，业务模式校验继续约束内部含义。解析错误响应应包含稳定错误码和简短文字；日志可以保存请求 ID、帧长度和错误位置，并对凭据与个人信息做脱敏。

长度的单位必须写进规范。`Payload Length` 表示编码后的字节数，中文字符在 UTF-8 中常占多个字节，因此 Python 应使用 `len(encoded_bytes)`。字符数适合业务字段限制，字节数适合网络帧与内存限制；接收端可以先限制字节，再解码 UTF-8，随后限制字符和结构。

整数运算同样需要边界。Python 整数会自动扩展，C、Rust、Java 等实现仍需在计算 `header_size + payload_size` 时使用受检加法。即使两个字段分别合法，总长度也要受连接缓冲区上限约束。把测试向量跨语言共享，可以验证端序、最大值、空正文和错误输入产生一致结果。

业务分发只接收已经通过格式校验的 `Message`。鉴权、权限、字段模式、状态转换和速率限制随后逐层执行。每层错误使用稳定错误码，例如 `400 malformed request`、`401 unauthenticated`、`403 forbidden`、`413 payload too large` 和 `503 busy`；客户端据此决定修改请求、刷新凭据或受控重试。

### 一份可执行的协议契约

成熟协议文档应给出字段表、端序、状态机、长度上限、字符编码、错误码、连接关闭规则、超时建议、幂等语义和版本兼容矩阵。再配上十六进制测试向量，其他语言实现就能逐字节核对。例如空正文请求的 24 字节首部、最大合法正文的长度字段、未知可选 TLV 与未知必需 TLV 都适合作为固定样例。

Fuzz 测试可以把随机字节、位翻转、截断和极端长度持续送入解析器，验收条件包括进程存活、内存有界、解析在截止时间内结束、错误类型稳定。属性测试还可以验证 `decode(encode(message)) == message`，并覆盖请求 ID 的零值与最大值。协议实现和文档共享这些测试向量后，兼容性会从文字约定变成自动证据。

上线前还可以做双实现互操作测试：Python 客户端连接另一语言服务端，再交换角色运行同一组样例。抓包中逐字节比对首部，能很快发现本机端序、结构体填充、字符串编码和长度单位差异。版本升级时保留旧实现参与回归，可验证兼容承诺持续成立。

## 5. 实验：连续、截断与恶意输入

下面的测试使用 `socket.socketpair()` 创建本机已连接 Socket；当前 Python 在主流 Windows、Linux 与 macOS 上均提供它。

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

再构造三组输入：把 Magic 改为 `XXXX`；把 Type 改为 99；把 Payload Length 改为 `MAX_PAYLOAD + 1`。预期解析器分别在读取消息体之前报告 `invalid magic`、`unknown message type` 和超长错误。把两条合法帧拼接发送时，接收端应连续解析出两条独立消息。把一个未知可选 TLV 放进扩展区时，解析器会安全跳过；给它设置 `EXT_REQUIRED` 后，解析器会报告当前实现缺少所需能力。

## 6. 理解检查

1. 接收端为何先校验长度上限，再按长度分配消息体？
2. TCP 将两次发送合并到一次接收时，TNP/1 如何恢复两条消息？
3. 请求 ID 与 TCP 序列号分别在哪一层发挥作用？
4. 未知可选 TLV 和未知必需 TLV 应产生什么结果？
5. Magic 校验可以发现哪些配置问题，还需要哪一层提供身份认证？

## 7. 本章小结

健壮协议把边界、版本、能力、身份和资源上限写进可验证格式。下一章将处理一个更棘手的业务事实：连接中断时，客户端可能已经失去对请求最终结果的确定性。

## 导航

- [上一章：Socket API 的正确使用](./01-socket-api.md)
- [所属篇：第六篇](../06-application-development.md)
- [下一章：超时、重试和幂等性](./03-timeouts-retries-idempotency.md)
- [教程总览](../../tcp-from-zero-to-diagnostics.md)
