---
title: 2. 引言
outline: deep
lastUpdated: false
---

# 2. 引言

<a id="section-2"></a>

RFC 793 讨论了 TCP 的设计目标，并给出了若干运行示例，涵盖连接建立、连接终止，以及通过重传修复分组丢失等场景。

本文描述现代 TCP 实现应具备的基本功能，并取代 RFC 793 中的协议规范。对于 RFC 793 第 1、2 节中的引言与设计哲学内容，本文不再复述，也不试图更新；运行原理、设计依据以及设计决策的详细讨论，均援引其他文档加以说明。本文仅聚焦于协议的规范性行为。

《TCP 路线图》（[RFC 7414](https://www.rfc-editor.org/rfc/rfc7414)）更全面地介绍了定义 TCP 及描述各种重要算法的各类 RFC。该路线图还专门列出一些强烈鼓励实现的增强特性，它们能在本文规定的基本运行之上，改善 TCP 的性能及其他方面的行为。举例来说，实现拥塞控制（如 [RFC 5681](https://www.rfc-editor.org/rfc/rfc5681)）是 TCP 的一项要求，但拥塞控制本身就是一个复杂的主题，且有诸多不影响基本互操作性的选项与实现方式，故本文不作详述。同样，现今大多数 TCP 实现都包含 [RFC 7323](https://www.rfc-editor.org/rfc/rfc7323) 中的高性能扩展，但这些扩展并非严格要求，本文也不予讨论。TCP 的多路径相关事项另由 [RFC 8684](https://www.rfc-editor.org/rfc/rfc8684) 单独规定。

RFC 793 的变更列表见[第 5 节](./05-changes-from-rfc-793.md#section-5)。

## 2.1. 需求语言

<a id="section-2-1"></a>

仅当 `MUST`、`MUST NOT`、`REQUIRED`、`SHALL`、`SHALL NOT`、`SHOULD`、`SHOULD NOT`、`RECOMMENDED`、`NOT RECOMMENDED`、`MAY` 和 `OPTIONAL` 这些关键字以全大写形式出现（如本文所示）时，才应按照 BCP 14（[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) 与 [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174)）中的定义进行解释。

本文中每一处 RFC 2119 关键字的使用都单独做了标记，并与附录 B 交叉引用；附录 B 汇总了各项实现需求。

使用 `MUST` 的句子标记为 `MUST-X`，其中 `X` 为数字标识符，便于与附录 B 交叉引用时定位具体需求。

类似地，使用 `SHOULD` 的句子标记为 `SHLD-X`，使用 `MAY` 的句子标记为 `MAY-X`，使用 `RECOMMENDED` 的句子标记为 `REC-X`。

在这一标记体系中，`SHOULD NOT` 与 `MUST NOT` 分别作为 `SHOULD` 与 `MUST` 的实例进行标记。

## 2.2. TCP 的关键概念

<a id="section-2-2"></a>

TCP 向应用提供可靠、有序的字节流服务。

应用层字节流以 TCP 报文段的形式在网络上传输，每个 TCP 报文段均作为一个互联网协议（IP）数据报发送。

TCP 的可靠性体现在：通过序列号检测分组丢失，通过逐报文段校验和检测错误，并通过重传进行纠正。

TCP 支持数据的单播传输。现有的某些任播应用可以不加修改地使用 TCP，但下层转发行为一旦发生变化，便存在不稳定的风险（参见 [RFC 7094](https://www.rfc-editor.org/rfc/rfc7094)）。

TCP 面向连接，但协议本身并不具备检测连接存活性的能力。

TCP 连接支持双向数据流动，但应用可自行选择仅沿一个方向发送数据。

TCP 使用端口号来标识应用服务，并在主机之间复用相互独立的数据流。

关于 TCP 的特性与各组成机制（相对于其他传输协议）的更详细说明，参见 [RFC 8095 第 3.1 节](https://www.rfc-editor.org/rfc/rfc8095)；开发 TCP 的动机及其在互联网协议栈中的定位，则见 RFC 793 第 2 节及更早版本的 TCP 规范。
