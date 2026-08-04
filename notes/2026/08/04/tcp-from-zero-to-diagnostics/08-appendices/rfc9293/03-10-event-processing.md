---
title: 3.10. 事件处理
outline: deep
lastUpdated: false
---

# 3.10. 事件处理

<a id="section-3-10"></a>

本节给出的处理流程只是一种可能的实现示例。其他实现可以采用略有不同的处理顺序，但差异应仅限于细节，不应涉及实质内容。

TCP 端点的活动可以视为对事件的响应。事件分为三类：用户调用、到达的报文段和超时。本节描述 TCP 端点对各类事件的具体处理；在许多情况下，所需的处理取决于连接所处的状态。

事件包括：

- **用户调用：** `OPEN`、`SEND`、`RECEIVE`、`CLOSE`、`ABORT`、`STATUS`。
- **到达的报文段：** `SEGMENT ARRIVES`。
- **超时：** `USER TIMEOUT`、`RETRANSMISSION TIMEOUT`、`TIME-WAIT TIMEOUT`。

TCP/用户接口的模型是：用户命令会立即获得返回结果，之后还可能通过事件或伪中断收到延迟响应。下文描述中的“signal（通知）”即表示触发这种延迟响应。

本文中的错误响应用字符串表示。例如，用户命令引用不存在的连接时，会收到 `error: connection not open`。

下文中序列号、确认号、窗口等的所有算术运算均按 `2³²`（序列号空间的大小）取模；`=<` 表示按 `2³²` 取模意义上的小于或等于。

处理传入报文段的一种自然思路是：先检验序列号是否有效，即报文段内容是否落在序列号空间中预期的“接收窗口”范围内；然后一般按序列号顺序排队并处理。

如果报文段与已收到的其他报文段重叠，则对其进行重构，使其只保留新数据，并相应调整首部字段。

若未明确说明状态变化，TCP 连接保持当前状态。

## 3.10.1. OPEN 调用

<a id="section-3-10-1"></a>

### CLOSED 状态（即不存在 TCB）

- 创建新的传输控制块（TCB），用于保存连接状态信息。填入本地套接字标识、远端套接字、Diffserv 字段、安全级别/隔离域以及用户超时信息。被动 `OPEN` 中，远端套接字的某些部分可能未指定，稍后将根据传入 `SYN` 报文段的参数填入。检查用户是否有权使用所请求的安全级别和 Diffserv 值；若无权，返回 `error: Diffserv value not allowed` 或 `error: security/compartment not allowed`。如果是被动 `OPEN`，进入 `LISTEN` 状态并返回。如果是主动 `OPEN` 且未指定远端套接字，返回 `error: remote socket unspecified`；如果已指定远端套接字，则发送 `SYN` 报文段：选择初始发送序列号（ISS），发送 `<SEQ=ISS><CTL=SYN>`，设置 `SND.UNA = ISS`、`SND.NXT = ISS+1`，进入 `SYN-SENT` 状态并返回。
- 如果调用方无权访问指定的本地套接字，返回 `error: connection illegal for this process`。如果没有空间创建新连接，返回 `error: insufficient resources`。

### LISTEN 状态

- 如果 `OPEN` 调用是主动调用且指定了远端套接字，则将连接从被动转为主动，选择 ISS 并发送 `SYN`，设置 `SND.UNA = ISS`、`SND.NXT = ISS+1`，进入 `SYN-SENT`。与 `SEND` 关联的数据可以随 `SYN` 一同发送，也可以排队，待进入 `ESTABLISHED` 状态后再发送。如果命令请求了紧急位，则由该命令产生的数据报文段必须携带紧急位。如果没有空间对该请求排队，返回 `error: insufficient resources`。如果未指定远端套接字，返回 `error: remote socket unspecified`。

### SYN-SENT、SYN-RECEIVED、ESTABLISHED、FIN-WAIT-1、FIN-WAIT-2、CLOSE-WAIT、CLOSING、LAST-ACK 状态

本调用在这些状态下没有额外动作，连接保持当前状态。

### TIME-WAIT 状态

- 返回 `error: connection already exists`。

## 3.10.2. SEND 调用

<a id="section-3-10-2"></a>

### CLOSED 状态（即不存在 TCB）

- 如果用户无权访问该连接，返回 `error: connection illegal for this process`。
- 否则返回 `error: connection does not exist`。

### LISTEN 状态

- 如果指定了远端套接字，则将连接从被动转为主动，选择 ISS 并发送 `SYN`，设置 `SND.UNA = ISS`、`SND.NXT = ISS+1`，进入 `SYN-SENT`。本次 `SEND` 关联的数据可以随 `SYN` 一同发送，也可以排队，待进入 `ESTABLISHED` 状态后再发送。如果命令请求了紧急位，则由本次命令产生的数据报文段必须携带紧急位。如果没有空间对该请求排队，返回 `error: insufficient resources`。如果未指定远端套接字，返回 `error: remote socket unspecified`。

### SYN-SENT 状态

本调用没有额外动作，连接保持当前状态。

### SYN-RECEIVED 状态

- 将数据排队，待进入 `ESTABLISHED` 状态后发送。如果没有空间排队，返回 `error: insufficient resources`。

### ESTABLISHED、CLOSE-WAIT 状态

- 将缓冲区数据分段，并捎带确认（确认值为 `RCV.NXT`）发送。如果没有足够空间保存该缓冲区，直接返回 `error: insufficient resources`。
- 如果设置了 `URGENT` 标志，则设置 `SND.UP <- SND.NXT`，并在发出的报文段中设置紧急指针。

### FIN-WAIT-1、FIN-WAIT-2、CLOSING、LAST-ACK 状态

本调用没有额外动作，连接保持当前状态。

### TIME-WAIT 状态

- 返回 `error: connection closing`，不处理该请求。

## 3.10.3. RECEIVE 调用

<a id="section-3-10-3"></a>

### CLOSED 状态（即不存在 TCB）

- 如果用户无权访问该连接，返回 `error: connection illegal for this process`。
- 否则返回 `error: connection does not exist`。

### LISTEN、SYN-SENT 状态

本调用没有额外动作，连接保持当前状态。

### SYN-RECEIVED 状态

- 将请求排队，待进入 `ESTABLISHED` 状态后处理。如果没有空间排队，返回 `error: insufficient resources`。

### ESTABLISHED、FIN-WAIT-1、FIN-WAIT-2 状态

- 如果已排队的传入报文段不足以满足请求，则将请求排队。如果没有排队空间保存该 `RECEIVE`，返回 `error: insufficient resources`。
- 将已排队的传入报文段重组到接收缓冲区并返回给用户；若遇到 `PUSH`，则标记“已见推送”（`PUSH`）。
- 如果 `RCV.UP` 超前于当前正交付给用户的数据位置，则通知用户存在紧急数据。
- 当 TCP 端点承担起向用户交付数据的责任时，必须通过确认告知发送方这一情况。确认的形成方式见传入报文段处理部分。

### CLOSE-WAIT 状态

- 远端已发送 `FIN`，因此 `RECEIVE` 只能由当前已有、但尚未交付给用户的数据来满足。如果没有等待交付的正文，`RECEIVE` 返回 `error: connection closing`；否则用剩余数据满足该请求。

### CLOSING、LAST-ACK 状态

本调用没有额外动作，连接保持当前状态。

### TIME-WAIT 状态

- 返回 `error: connection closing`。

## 3.10.4. CLOSE 调用

<a id="section-3-10-4"></a>

### CLOSED 状态（即不存在 TCB）

- 如果用户无权访问该连接，返回 `error: connection illegal for this process`。
- 否则返回 `error: connection does not exist`。

### LISTEN 状态

- 对所有未完成的 `RECEIVE` 返回 `error: closing`。删除 TCB，进入 `CLOSED` 并返回。

### SYN-SENT 状态

- 删除 TCB，并向所有已排队的 `SEND` 或 `RECEIVE` 返回 `error: closing`。

### SYN-RECEIVED 状态

- 如果尚未发出过 `SEND` 且没有待发送的数据，则形成并发送 `FIN`，进入 `FIN-WAIT-1`；否则将 `CLOSE` 排队，待进入 `ESTABLISHED` 状态后处理。

### ESTABLISHED 状态

- 将该请求排队，待此前所有 `SEND` 完成分段后，形成并发送 `FIN`；无论哪种情况都进入 `FIN-WAIT-1`。

### FIN-WAIT-1 状态

本调用没有额外动作，连接保持当前状态。

### FIN-WAIT-2 状态

- 严格来说这属于错误，应返回 `error: connection closing`。不过只要不再发送第二个 `FIN`，返回 `ok` 也可接受（第一个 `FIN` 仍可重传）。

### CLOSE-WAIT 状态

- 将该请求排队，待此前所有 `SEND` 完成分段后发送 `FIN`，进入 `LAST-ACK`。

### CLOSING、LAST-ACK 状态

本调用没有额外动作，连接保持当前状态。

### TIME-WAIT 状态

- 返回 `error: connection closing`。

## 3.10.5. ABORT 调用

<a id="section-3-10-5"></a>

### CLOSED 状态（即不存在 TCB）

- 如果用户无权访问该连接，返回 `error: connection illegal for this process`。
- 否则返回 `error: connection does not exist`。

### LISTEN 状态

- 对所有未完成的 `RECEIVE` 返回 `error: connection reset`。删除 TCB，进入 `CLOSED` 并返回。

### SYN-SENT 状态

- 对所有排队的 `SEND` 和 `RECEIVE` 发出 `connection reset` 通知。删除 TCB，进入 `CLOSED` 并返回。

### SYN-RECEIVED、ESTABLISHED、FIN-WAIT-1、FIN-WAIT-2、CLOSE-WAIT 状态

- 发送复位报文段：

  ```text
  <SEQ=SND.NXT><CTL=RST>
  ```

- 对所有排队的 `SEND` 和 `RECEIVE` 发出 `connection reset` 通知；清空所有排队等待发送或重传的报文段，但保留上面形成的 `RST`。删除 TCB，进入 `CLOSED` 并返回。

### CLOSING、LAST-ACK 状态

本调用没有额外动作，连接保持当前状态。

### TIME-WAIT 状态

- 返回 `ok`，删除 TCB，进入 `CLOSED` 并返回。

## 3.10.6. STATUS 调用

<a id="section-3-10-6"></a>

### CLOSED 状态（即不存在 TCB）

- 如果用户无权访问该连接，返回 `error: connection illegal for this process`。
- 否则返回 `error: connection does not exist`。

其余状态均返回对应状态和 TCB 指针：

| 当前状态 | 返回值 |
| --- | --- |
| `LISTEN` | `state = LISTEN` 和 TCB 指针 |
| `SYN-SENT` | `state = SYN-SENT` 和 TCB 指针 |
| `SYN-RECEIVED` | `state = SYN-RECEIVED` 和 TCB 指针 |
| `ESTABLISHED` | `state = ESTABLISHED` 和 TCB 指针 |
| `FIN-WAIT-1` | `state = FIN-WAIT-1` 和 TCB 指针 |
| `FIN-WAIT-2` | `state = FIN-WAIT-2` 和 TCB 指针 |
| `CLOSE-WAIT` | `state = CLOSE-WAIT` 和 TCB 指针 |
| `CLOSING` | `state = CLOSING` 和 TCB 指针 |
| `LAST-ACK` | `state = LAST-ACK` 和 TCB 指针 |
| `TIME-WAIT` | `state = TIME-WAIT` 和 TCB 指针 |

## 3.10.7. SEGMENT ARRIVES

<a id="section-3-10-7"></a>

### 3.10.7.1. CLOSED 状态

<a id="section-3-10-7-1"></a>

如果状态为 `CLOSED`（即不存在 TCB）：

- 丢弃传入报文段中的所有数据。包含 `RST` 的传入报文段直接丢弃；不包含 `RST` 的传入报文段则触发响应 `RST`。确认字段和序列字段的取值，应使复位报文段对发送了问题报文段的 TCP 端点而言是可接受的。
- 如果 `ACK` 位关闭，使用序列号零：

  ```text
  <SEQ=0><ACK=SEG.SEQ+SEG.LEN><CTL=RST,ACK>
  ```

- 如果 `ACK` 位打开：

  ```text
  <SEQ=SEG.ACK><CTL=RST>
  ```

- 返回。

### 3.10.7.2. LISTEN 状态

<a id="section-3-10-7-2"></a>

如果状态为 `LISTEN`：

1. **第一步检查 `RST`：** 传入的 `RST` 不可能有效，因为它不可能是对本连接实例已发送内容的响应。应忽略传入的 `RST` 并返回。
2. **第二步检查 `ACK`：** 仍处于 `LISTEN` 状态的连接收到任何确认都是异常的。对于任何携带 ACK 的到达报文段，都应形成可接受的复位：

   ```text
   <SEQ=SEG.ACK><CTL=RST>
   ```

   然后返回。
3. **第三步检查 `SYN`：** 如果设置了 `SYN` 位，检查安全级别/隔离域。如果传入报文段的安全级别/隔离域与 TCB 中的值不完全匹配，则发送复位并返回：

   ```text
   <SEQ=0><ACK=SEG.SEQ+SEG.LEN><CTL=RST,ACK>
   ```

   设置 `RCV.NXT = SEG.SEQ+1`、`IRS = SEG.SEQ`，并将其他控制信息或正文排队，留待稍后处理。选择 ISS，并发送以下形式的 `SYN` 报文段：

   ```text
   <SEQ=ISS><ACK=RCV.NXT><CTL=SYN,ACK>
   ```

   设置 `SND.NXT = ISS+1`、`SND.UNA = ISS`，并将连接状态改为 `SYN-RECEIVED`。注意，与 `SYN` 一同到达的其他控制信息或数据将在 `SYN-RECEIVED` 状态下处理，但不应重复处理 `SYN` 和 `ACK`。如果监听请求未完整指定远端套接字，则在此时填入未指定的字段。
4. **第四步：其他数据或控制。** 正常情况下不应到达这一步，丢弃报文段并返回。任何其他控制报文段或携带数据的报文段（不含 `SYN`）都必须带 ACK，因此本会在第二步的 ACK 处理中被丢弃，除非它在第一步的 RST 检查中就已先被丢弃。

### 3.10.7.3. SYN-SENT 状态

<a id="section-3-10-7-3"></a>

如果状态为 `SYN-SENT`：

1. **第一步检查 `ACK` 位：** 如果设置了 `ACK` 位，且 `SEG.ACK =< ISS` 或 `SEG.ACK > SND.NXT`，则发送复位；但如果同时设置了 `RST` 位，则丢弃报文段并返回。复位的形式为：

   ```text
   <SEQ=SEG.ACK><CTL=RST>
   ```

   发送后丢弃报文段并返回。如果 `SND.UNA < SEG.ACK =< SND.NXT`，则该 ACK 可接受。一些已部署的 TCP 代码采用 `SEG.ACK == SND.NXT` 的判断（即 `==` 而非 `=<`）；但对于能够在 `SYN` 上携带数据发送的 TCP 栈，这种判断并不合适，因为对端可能未接受或未确认 `SYN` 上的全部数据。
2. **第二步检查 `RST` 位：** RFC 5961 描述了一种潜在的盲复位攻击及其缓解方案。该缓解方案的具体适用范围见 RFC 5961，它不能替代密码学保护（如 IPsec 或 TCP-AO）。支持该缓解方案的 TCP 实现，在执行下一段所述动作之前，应先检查序列号是否与 `RCV.NXT` 精确匹配。

   如果 ACK 可接受，则向用户通知 `error: connection reset`，丢弃报文段，进入 `CLOSED`，删除 TCB 并返回；如果没有 ACK，则丢弃报文段并返回。
3. **第三步检查安全级别/隔离域：** 如果报文段中的安全级别/隔离域与 TCB 中的值不完全匹配，则发送复位：

   - 有 ACK 时：`<SEQ=SEG.ACK><CTL=RST>`。
   - 无 ACK 时：`<SEQ=0><ACK=SEG.SEQ+SEG.LEN><CTL=RST,ACK>`。

   如果发送了复位，则丢弃报文段并返回。
4. **第四步检查 `SYN` 位：** 只有当 ACK 无误或不存在 ACK，且报文段不含 `RST` 时，才会到达这一步。

   - 如果设置了 `SYN`，且安全级别/隔离域可接受，则设置 `RCV.NXT = SEG.SEQ+1`、`IRS = SEG.SEQ`。如果存在 ACK，则将 `SND.UNA` 推进到 `SEG.ACK`，并从重传队列中删除由此得到确认的报文段。
   - 如果 `SND.UNA > ISS`（本端 `SYN` 已得到确认），则将连接状态改为 `ESTABLISHED`，形成并发送：

     ```text
     <SEQ=SND.NXT><ACK=RCV.NXT><CTL=ACK>
     ```

     可以将排队等待发送的数据或控制信息包含在其中。有些 TCP 实现会在收到的报文段带有数据、后续处理本就会产生确认时，抑制为确认 `SYN` 而额外发送的这个报文段，从而节省一个报文段。如果报文段中还有其他控制信息或正文，则转到[第 3.10.7.4 节](#section-3-10-7-4)第六步继续处理（检查 `URG`）；否则返回。
   - 否则进入 `SYN-RECEIVED`，形成并发送 `SYN,ACK`：

     ```text
     <SEQ=ISS><ACK=RCV.NXT><CTL=SYN,ACK>
     ```

     设置：

     ```text
     SND.WND <- SEG.WND
     SND.WL1 <- SEG.SEQ
     SND.WL2 <- SEG.ACK
     ```

     如果报文段中还有其他控制信息或正文，则将其排队，待进入 `ESTABLISHED` 状态后处理，然后返回。

     在 `SYN` 报文段上发送和接收应用数据是合法的，上文提到的“正文”即指这类数据。围绕这一话题，历史上存在大量错误说法和误解，一些防火墙及安全设备也将其视为可疑行为。然而，T/TCP 曾使用这一能力，TCP Fast Open（TFO）也在使用它，因此实现和网络设备必须允许这种用法。
5. **第五步：** 如果 `SYN` 和 `RST` 都未设置，则丢弃报文段并返回。

### 3.10.7.4. 其他状态

<a id="section-3-10-7-4"></a>

对于其他状态，按以下顺序处理。

#### 第一步：检查序列号

适用状态为 `SYN-RECEIVED`、`ESTABLISHED`、`FIN-WAIT-1`、`FIN-WAIT-2`、`CLOSE-WAIT`、`CLOSING`、`LAST-ACK` 和 `TIME-WAIT`。

- 报文段按序处理。到达时先进行初步检查，以丢弃旧的重复报文段；进一步的处理则按 `SEG.SEQ` 顺序进行。如果报文段内容跨越新旧之间的边界，则只处理新的部分。
- 一般而言，收到报文段后的处理必须尽可能聚合 ACK 报文段（`MUST-58`）。例如，如果 TCP 端点正在处理一系列已排队的报文段，必须全部处理完毕后才发送任何 ACK（`MUST-59`）。
- 传入报文段的可接受性测试有四种情况：

  | 报文段长度 | 接收窗口 | 测试 |
  | ---: | ---: | --- |
  | 0 | 0 | `SEG.SEQ = RCV.NXT` |
  | 0 | >0 | `RCV.NXT =< SEG.SEQ < RCV.NXT+RCV.WND` |
  | >0 | 0 | 不可接受 |
  | >0 | >0 | `RCV.NXT =< SEG.SEQ < RCV.NXT+RCV.WND`，或 `RCV.NXT =< SEG.SEQ+SEG.LEN-1 < RCV.NXT+RCV.WND` |

  **表 6：报文段可接受性测试。**

- 实现此处描述的序列号验证时，需注意若干情形，参见[附录 A.2](./appendix-a.md#appendix-a-2)。
- 当 `RCV.WND` 为零时，任何报文段都不可接受；但应特别允许有效的 ACK、URG 和 RST。
- 如果传入报文段不可接受，则应发送应答确认；但如果设置了 `RST`，则丢弃报文段并返回。确认的形式为：

  ```text
  <SEQ=SND.NXT><ACK=RCV.NXT><CTL=ACK>
  ```

  发送确认后，丢弃该不可接受的报文段并返回。
- 注意，对于 `TIME-WAIT` 状态，[RFC 6191](https://www.rfc-editor.org/rfc/rfc6191) 描述了一种利用时间戳处理传入 `SYN` 的改进算法，而不依赖此处描述的序列号检查。实现了该改进算法后，`TIME-WAIT` 连接收到带时间戳选项的传入 `SYN` 时，上述逻辑不再适用。
- 下文的讨论均假定报文段是理想化的：从 `RCV.NXT` 开始且不超出窗口。可以对实际报文段进行裁剪以符合这一假定，即去掉落在窗口之外的部分（包括 `SYN` 和 `FIN`），且仅当裁剪后的报文段从 `RCV.NXT` 开始时才继续处理。起始序列号更大的报文段应保留，留待稍后处理（`SHLD-31`）。

#### 第二步：检查 `RST` 位

RFC 5961 第 3 节描述了一种潜在的盲复位攻击及可选的缓解方法，该方法的具体适用范围见该文档。此缓解方法不提供密码学保护（如 IPsec 或 TCP-AO 所提供的），但在 RFC 5961 所述场景下可以适用。对于实现了 RFC 5961 所述保护的 TCP 栈，适用以下三项检查：

1. 如果设置了 `RST` 且序列号在当前接收窗口之外，则静默丢弃该报文段。
2. 如果设置了 `RST` 且序列号与下一个期望的序列号 `RCV.NXT` 精确匹配，则 TCP 端点必须按连接状态规定的方式复位连接。
3. 如果设置了 `RST`，序列号与 `RCV.NXT` 不精确匹配，但落在当前接收窗口内，则 TCP 端点必须发送确认（challenge ACK）：

   ```text
   <SEQ=SND.NXT><ACK=RCV.NXT><CTL=ACK>
   ```

   发送 challenge ACK 后，TCP 端点必须丢弃该不可接受的报文段，并停止对传入分组的进一步处理。RFC 5961 及其勘误 ID 4772 还包含实现 ACK 限流时的其他注意事项。

按状态处理 `RST`：

- **`SYN-RECEIVED`：** 如果连接由被动 `OPEN` 发起（即从 `LISTEN` 状态到达），则将连接退回 `LISTEN` 状态并返回，无需通知用户。如果连接由主动 `OPEN` 发起（即从 `SYN-SENT` 状态到达），则连接被拒绝，向用户通知 `connection refused`；两种情况下都应清空重传队列。主动 `OPEN` 的情形还需进入 `CLOSED`、删除 TCB 并返回。
- **`ESTABLISHED`、`FIN-WAIT-1`、`FIN-WAIT-2`、`CLOSE-WAIT`：** 如果设置了 `RST`，则所有未完成的 `RECEIVE` 和 `SEND` 都应收到 `reset` 响应；清空所有报文段队列；向用户发送未经请求的一般性 `connection reset` 通知；进入 `CLOSED`，删除 TCB 并返回。
- **`CLOSING`、`LAST-ACK`、`TIME-WAIT`：** 如果设置了 `RST`，则进入 `CLOSED`、删除 TCB 并返回。

#### 第三步：检查安全级别/隔离域

- `SYN-RECEIVED`：如果报文段中的安全级别/隔离域与 TCB 中的值不完全匹配，则发送复位并返回。
- `ESTABLISHED`、`FIN-WAIT-1`、`FIN-WAIT-2`、`CLOSE-WAIT`、`CLOSING`、`LAST-ACK`、`TIME-WAIT`：如果安全级别/隔离域不完全匹配，则发送复位；所有未完成的 `RECEIVE` 和 `SEND` 收到 `reset` 响应；清空所有报文段队列；向用户发送未经请求的一般性 `connection reset` 通知；进入 `CLOSED`，删除 TCB 并返回。

将此项检查置于序列号检查之后，是为了防止来自同一端口号旧连接、但安全级别/隔离域不同的报文段导致当前连接中止。

#### 第四步：检查 `SYN` 位

- `SYN-RECEIVED`：如果连接由被动 `OPEN` 发起，则退回 `LISTEN` 状态并返回；否则按下文同步状态的方式处理。
- `ESTABLISHED`、`FIN-WAIT-1`、`FIN-WAIT-2`、`CLOSE-WAIT`、`CLOSING`、`LAST-ACK`、`TIME-WAIT`：同步状态下出现的 `SYN` 可能是合法的新连接尝试（例如 `TIME-WAIT` 的情形），也可能是应复位连接的错误，或是攻击尝试。对于 `TIME-WAIT` 状态，当使用时间戳选项且满足其要求时，可以接受新连接。对于其他情况，RFC 5961 为部分场景提供了缓解方案，也有密码学保护的替代方案（见[第 7 节](./07-security-and-privacy.md#section-7)）。RFC 5961 建议：同步状态下收到 `SYN` 时，无论序列号为何，TCP 端点都必须向远端发送 challenge ACK：

  ```text
  <SEQ=SND.NXT><ACK=RCV.NXT><CTL=ACK>
  ```

  发送确认后，TCP 实现必须丢弃该不可接受的报文段并停止后续处理。RFC 5961 及其勘误 ID 4772 还包含实现 ACK 限流时的注意事项。

对于不遵循 RFC 5961 的实现，此时适用 RFC 793 的原始行为：如果 `SYN` 在窗口内，则视为错误——发送复位，所有未完成的 `RECEIVE` 和 `SEND` 都收到 `reset` 响应，清空所有报文段队列，并向用户发送未经请求的一般性 `connection reset` 通知，然后进入 `CLOSED`、删除 TCB 并返回。如果 `SYN` 不在窗口内，则不会到达本步骤，因为在第一步（序列号检查）中就已发送了 ACK。

#### 第五步：检查 ACK 字段

- 如果 ACK 位关闭，丢弃报文段并返回。
- 如果 ACK 位打开，RFC 5961 第 5 节描述了一种潜在的盲数据注入攻击及可选的缓解方案，实现可以选择采用该缓解措施（`MAY-12`）。实现了 RFC 5961 的 TCP 栈必须增加一项输入检查：只有当 ACK 值位于下列范围内时才可接受：

  ```text
  (SND.UNA - MAX.SND.WND) =< SEG.ACK =< SND.NXT
  ```

  不满足该条件的所有传入报文段都必须丢弃，并回送 ACK。新的状态变量 `MAX.SND.WND` 定义为本地发送方曾从对端收到的最大窗口（经过窗口缩放），也可以硬编码为允许的最大窗口值。ACK 值可接受时，继续执行下面按状态的处理。

按状态处理 ACK：

- **`SYN-RECEIVED`：** 如果 `SND.UNA < SEG.ACK =< SND.NXT`，进入 `ESTABLISHED`，并设置：

  ```text
  SND.WND <- SEG.WND
  SND.WL1 <- SEG.SEQ
  SND.WL2 <- SEG.ACK
  ```

  如果确认不可接受，形成并发送：`<SEQ=SEG.ACK><CTL=RST>`。

- **`ESTABLISHED`：** 如果 `SND.UNA < SEG.ACK =< SND.NXT`，设置 `SND.UNA <- SEG.ACK`，并删除重传队列中由此得到完全确认的报文段。对于已 `SENT` 且已得到完全确认的缓冲区，应向用户返回肯定确认，即对该 `SEND` 缓冲区返回 `ok` 响应。如果 ACK 是重复 ACK（`SEG.ACK =< SND.UNA`），可以忽略。如果 ACK 确认了尚未发送的数据（`SEG.ACK > SND.NXT`），则发送 ACK，丢弃报文段并返回。

  如果 `SND.UNA =< SEG.ACK =< SND.NXT`，则更新发送窗口。如果 `SND.WL1 < SEG.SEQ`，或 `SND.WL1 = SEG.SEQ` 且 `SND.WL2 =< SEG.ACK`，则设置 `SND.WND <- SEG.WND`、`SND.WL1 <- SEG.SEQ`、`SND.WL2 <- SEG.ACK`。

  注意，`SND.WND` 是相对于 `SND.UNA` 的偏移量；`SND.WL1` 记录最近一次用于更新 `SND.WND` 的报文段的序列号；`SND.WL2` 记录最近一次用于更新 `SND.WND` 的报文段的确认号。此处的检查用于防止用旧报文段更新窗口。

- **`FIN-WAIT-1`：** 除执行 `ESTABLISHED` 状态的处理外，如果 `FIN` 现已得到确认，则进入 `FIN-WAIT-2`，并继续按该状态处理。
- **`FIN-WAIT-2`：** 除执行 `ESTABLISHED` 状态的处理外，如果重传队列为空，可以向用户确认 `CLOSE`（返回 `ok`），但不要删除 TCB。
- **`CLOSE-WAIT`：** 执行与 `ESTABLISHED` 状态相同的处理。
- **`CLOSING`：** 除执行 `ESTABLISHED` 状态的处理外，如果该 ACK 确认了本端的 `FIN`，则进入 `TIME-WAIT`；否则忽略该报文段。
- **`LAST-ACK`：** 此状态下唯一可能到达的是对本端 `FIN` 的确认。如果本端 `FIN` 现已得到确认，则删除 TCB，进入 `CLOSED` 并返回。
- **`TIME-WAIT`：** 此状态下唯一可能到达的是远端 `FIN` 的重传。对其作出确认，并重启 2 MSL 超时。

#### 第六步：检查 URG 位

- 对于 `ESTABLISHED`、`FIN-WAIT-1`、`FIN-WAIT-2`，如果设置了 `URG`，则设置 `RCV.UP <- max(RCV.UP, SEG.UP)`。如果紧急指针（`RCV.UP`）超前于已消费数据的位置，则通知用户远端有紧急数据。如果用户已被告知过这段连续紧急数据，或仍处于“紧急模式”，则不再通知。
- 对于 `CLOSE-WAIT`、`CLOSING`、`LAST-ACK`、`TIME-WAIT`，由于远端已发送 `FIN`，此处不应出现紧急数据；忽略 `URG`。

#### 第七步：处理报文段正文

- 对于 `ESTABLISHED`、`FIN-WAIT-1`、`FIN-WAIT-2`，进入 `ESTABLISHED` 状态后，即可将报文段数据交付到用户的 `RECEIVE` 缓冲区。报文段数据持续移入缓冲区，直至缓冲区填满或报文段为空。如果报文段变空且携带 `PUSH` 标志，则在缓冲区返回给用户时通知用户已收到 `PUSH`。
- TCP 端点一旦承担起向用户交付数据的责任，就必须确认数据已收到。
- TCP 端点承担数据责任后，将 `RCV.NXT` 向前推进以越过已接受的数据，并根据当前缓冲区可用情况相应调整 `RCV.WND`。`RCV.NXT + RCV.WND` 之和不应减小。
- 当有效报文段到达、落在窗口内但不在窗口左边界时，TCP 实现可以发送一个确认 `RCV.NXT` 的 ACK（`MAY-13`）。
- 应注意[第 3.8 节](./03-08-data-communication.md#section-3-8)中的窗口管理建议。
- 发送以下形式的确认：

  ```text
  <SEQ=SND.NXT><ACK=RCV.NXT><CTL=ACK>
  ```

  若不会造成不当延迟，应将该确认捎带在正在发送的报文段上。
- 对于 `CLOSE-WAIT`、`CLOSING`、`LAST-ACK`、`TIME-WAIT`，由于远端已发送 `FIN`，不应出现正文；忽略报文段正文。

#### 第八步：检查 FIN 位

如果状态是 `CLOSED`、`LISTEN` 或 `SYN-SENT`，由于无法验证 `SEG.SEQ`，不要处理 `FIN`；丢弃报文段并返回。

如果设置了 `FIN` 位，向用户通知 `connection closing`，并以同一消息返回所有待处理的 `RECEIVE`；将 `RCV.NXT` 推进以越过 `FIN`，并发送对该 `FIN` 的确认。注意，`FIN` 对任何尚未交付给用户的报文段正文都隐含 `PUSH`。

- `SYN-RECEIVED`：完成本状态的后续处理后返回。
- `ESTABLISHED`：进入 `CLOSE-WAIT`。
- `FIN-WAIT-1`：如果本端 `FIN` 已得到确认（可能就在当前报文段中），则进入 `TIME-WAIT`，启动 time-wait 计时器并关闭其他计时器；否则进入 `CLOSING`。
- `FIN-WAIT-2`：进入 `TIME-WAIT`，启动 time-wait 计时器并关闭其他计时器。
- `CLOSE-WAIT`：保持 `CLOSE-WAIT`。
- `CLOSING`：保持 `CLOSING`。
- `LAST-ACK`：保持 `LAST-ACK`。
- `TIME-WAIT`：保持 `TIME-WAIT`，重启 2 MSL 的 time-wait 超时。

完成上述处理后返回。

## 3.10.8. 超时

<a id="section-3-10-8"></a>

**用户超时（`USER TIMEOUT`）：** 对任何状态，如果用户超时到期，则清空所有队列，向用户发出 `error: connection aborted due to user timeout` 通知（既作为一般通知，也针对所有未完成的调用），删除 TCB，进入 `CLOSED` 并返回。

**重传超时（`RETRANSMISSION TIMEOUT`）：** 对任何状态，如果重传队列中的某个报文段发生重传超时，则重新发送重传队列最前面的报文段，重新初始化重传计时器并返回。

**TIME-WAIT 超时（`TIME-WAIT TIMEOUT`）：** 如果连接的 time-wait 超时到期，则删除 TCB，进入 `CLOSED` 并返回。
