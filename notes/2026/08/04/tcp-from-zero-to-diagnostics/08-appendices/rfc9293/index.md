---
title: RFC 9293：传输控制协议（TCP）
description: RFC 9293《Transmission Control Protocol (TCP)》的中文翻译，按章节拆分，适合 VitePress 阅读
lang: zh-CN
outline: deep
lastUpdated: false
---

# RFC 9293：传输控制协议（TCP）

> 原文：W. Eddy（编），MTI Systems，2022 年 8 月。本文依据 [RFC 9293 原文](https://www.rfc-editor.org/rfc/rfc9293.html)翻译，并按章节拆分为多个页面，完整保留 RFC 的章节编号、协议变量、状态名、图示与需求标签。

::: warning 翻译说明

本文为便于中文阅读的非官方译文。涉及协议一致性的场合，请以 IETF 发布的英文 RFC 9293 为准。文中的规范性关键字保留英文大写形式，并在第 2.1 节给出对应的中文解释；`MUST-`、`SHLD-`、`MAY-`、`REC-` 需求标签也全部保留，便于与附录 B 的需求汇总对照。

:::

## 阅读导航

<details open>
<summary>展开目录</summary>

- [摘要](#section-abstract)
- [文档状态与版权声明](#section-boilerplate)
- [1. 目的与范围](./01-purpose-and-scope.md#section-1)
- [2. 引言](./02-introduction.md#section-2)
  - [2.1. 需求语言](./02-introduction.md#section-2-1)
  - [2.2. TCP 的关键概念](./02-introduction.md#section-2-2)
- [3. 功能规范](./03-functional-specification.md#section-3)
  - [3.1. 首部格式](./03-01-header-format.md#section-3-1)
  - [3.2. 特定选项定义](./03-02-specific-options.md#section-3-2)
  - [3.3. TCP 术语概览](./03-03-terminology.md#section-3-3)
  - [3.4. 序列号](./03-04-sequence-numbers.md#section-3-4)
  - [3.5. 建立连接](./03-05-establishing-a-connection.md#section-3-5)
  - [3.6. 关闭连接](./03-06-closing-a-connection.md#section-3-6)
  - [3.7. 分段](./03-07-segmentation.md#section-3-7)
  - [3.8. 数据通信](./03-08-data-communication.md#section-3-8)
  - [3.9. 接口](./03-09-interfaces.md#section-3-9)
  - [3.10. 事件处理](./03-10-event-processing.md#section-3-10)
- [4. 术语表](./04-glossary.md#section-4)
- [5. 相对于 RFC 793 的变更](./05-changes-from-rfc-793.md#section-5)
- [6. IANA 注意事项](./06-iana-considerations.md#section-6)
- [7. 安全与隐私注意事项](./07-security-and-privacy.md#section-7)
- [8. 参考文献](./08-references.md#section-8)
- [附录 A：其他实现说明](./appendix-a.md#appendix-a)
- [附录 B：TCP 需求汇总](./appendix-b.md#appendix-b)
- [致谢](./acknowledgments.md#acknowledgments)
- [作者地址](./authors-address.md#authors-address)

</details>

## RFC 元数据

| 项目 | 内容 |
| --- | --- |
| RFC | 9293 |
| STD | 7 |
| 状态 | Internet Standard（互联网标准） |
| 类别 | Standards Track（标准化轨道） |
| 发布 | 2022 年 8 月 |
| 作者 | W. Eddy（编） |
| 组织 | MTI Systems |
| 废止 | RFC 793、879、2873、6093、6429、6528、6691 |
| 更新 | RFC 1011、1122、5961 |

## 摘要

<a id="section-abstract"></a>

本文规定传输控制协议（Transmission Control Protocol，TCP）。TCP 是互联网协议栈中重要的传输层协议，数十年来随着互联网的应用与发展持续演进。在此期间，RFC 793 所规定的 TCP 历经多次变更，但这些变更此前仅以零散的方式记录在案。本文将这些变更与 RFC 793 的协议规范汇集整合。本文废止 RFC 793，以及曾对 RFC 793 部分内容作出更新的 RFC 879、2873、6093、6429、6528 和 6691。本文更新 RFC 1011 和 RFC 1122；对于这两份文档中涉及 TCP 需求的部分，本文应视为其替代文档。本文还通过澄清 `SYN-RECEIVED` 状态下的复位处理，对 RFC 5961 作出小幅更新。此外，本文依据 RFC 3168 更新了 RFC 793 中的 TCP 首部控制位。

## 文档状态与版权声明

<a id="section-boilerplate"></a>

### 本备忘录的状态

<a id="section-status-of-memo"></a>

本文属于互联网标准化轨道文档。

本文是互联网工程任务组（IETF）的成果，代表 IETF 社区的共识。本文已经过公开审阅，并经互联网工程指导组（IESG）批准发布。关于互联网标准的更多信息，请参见 RFC 7841 第 2 节。

本文的当前状态、勘误信息及反馈方式，请参见 [RFC 9293 信息页](https://www.rfc-editor.org/info/rfc9293)。

### 版权声明

<a id="section-copyright"></a>

版权所有 © 2022 IETF Trust 及本文档所列作者。保留所有权利。

本文受发布之日生效的 BCP 78 以及 [IETF Trust 关于 IETF 文档的法律规定](https://trustee.ietf.org/license-info)约束。请仔细阅读这些文档，其中说明了您对本文所享有的权利与所受的限制。从本文中提取的代码组件必须包含 Trust 法律规定第 4.e 节所述的修订版 BSD 许可证文本，并按修订版 BSD 许可证的说明以“现状”提供，不附带任何担保。

本文可能包含 2008 年 11 月 10 日之前发布或公开的 IETF 文档或 IETF 贡献中的材料。其中部分材料的版权控制人可能并未授权 IETF Trust，允许在 IETF 标准化流程之外修改这些材料。在未获得相关版权控制人适当许可的情况下，不得在 IETF 标准化流程之外修改本文，也不得据此创作衍生作品；但为以 RFC 格式发布而进行排版，或将本文翻译成英语之外的语言，不在此限。

::: tip 关于规范性语言

译文中的 `MUST`、`MUST NOT`、`REQUIRED`、`SHALL`、`SHALL NOT`、`SHOULD`、`SHOULD NOT`、`RECOMMENDED`、`NOT RECOMMENDED`、`MAY`、`OPTIONAL` 与英文原文保持一致，其精确定义见 [2.1. 需求语言](./02-introduction.md#section-2-1)。

:::
