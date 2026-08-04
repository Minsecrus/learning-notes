# 第六篇 开发者如何正确使用 TCP

前五篇我们已经系统地梳理了 TCP 的连接管理、报文结构、状态机以及可靠传输模型。本篇，我们将把视角切回应用程序，看看这些底层机制在代码中是如何落地的。我们的核心原则是：发出的数据要检查进度，收发的消息要有明确边界，所有的等待都得设个期限，发起的重试必须带上身份，排队的任务也要限制容量。

接下来的六章，我们将从零开始，用 Python 实现一个可运行的 Socket 消息服务，并在这个过程中逐步展开应用层开发的各个细节：

1. [第25章 Socket API 的正确使用](./06-application-development/01-socket-api.md)：教你如何优雅处理短读（Short Read）、部分写入、连接中断（EOF）、超时控制以及非阻塞状态。
2. [第26章 如何设计应用层协议](./06-application-development/02-application-protocol.md)：动手实现一个包含魔数（Magic Number）、版本号、消息类型、数据长度和请求 ID 的二进制通信协议。
3. [第27章 超时、重试和幂等性](./06-application-development/03-timeouts-retries-idempotency.md)：引入绝对截止时间（Deadline）来兜底等待时长，并利用稳定的请求 ID 保证重试时的幂等性，防止副作用翻倍。
4. [第28章 并发、缓冲区和背压](./06-application-development/04-concurrency-buffers-backpressure.md)：为连接数、并发任务和内存缓冲设定明确上限，理解背压（Backpressure）机制，防止服务被冲垮。
5. [第29章 常用 Socket 选项](./06-application-development/05-socket-options.md)：吃透 TCP Keepalive、Nagle 算法、收发缓冲区设置以及它们在不同操作系统下的行为差异。
6. [第30章 TLS、HTTP 与 TCP 的关系](./06-application-development/06-tls-http-tcp.md)：穿透协议栈，认清应用层消息、TLS 记录（Record）和 TCP 报文段（Segment）之间的严格边界。

## 本篇综合任务

你需要手写完成一个健壮的消息服务。它需要包含基于长度首部的消息边界解析（处理粘包与半包）、请求 ID、标准错误响应、消息大小硬限制、安全循环读写、全局超时控制、幂等去重、并发限流以及有限容量的排队队列。

在测试阶段，你不仅要验证正常消息的收发，还要涵盖各类异常场景：连续拼包发送、网络截断造成的半包、恶意的超大长度首部、故意拖慢的“慢客户端”、并发过载时的优雅拒绝，以及在网络断开且结果未知情况下的安全重试。

最后，我们会为这个服务接入 TLS 加密，并结合应用日志与 Wireshark 抓包，分别从“明文业务语义”和“底层传输时序”两个维度进行对照观察。

## 学习方式

建议在学习每一章时，严格遵循这个闭环：“先预测结果 -> 运行代码验证 -> 记录真实返回值 -> 观察底层抓包 -> 解释现象发生的原因 -> 回答理解检查”。

所有的实验都在本地回环地址（Loopback）上完成，核心代码只依赖 Python 标准库。对于涉及 TCP Keepalive 或 TCP User Timeout 等依赖底层协议栈的具体细节，我们会明确标出不同操作系统的行为边界。

## 导航

- [系列总目录](../tcp-from-zero-to-diagnostics.md)
- [上一篇：可靠传输、流量控制与性能](./05-reliability-performance.md)
- [下一章：第25章 Socket API 的正确使用](./06-application-development/01-socket-api.md)
