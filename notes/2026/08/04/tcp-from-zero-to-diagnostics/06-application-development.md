# 第六篇 开发者如何正确使用 TCP

前五篇已经建立了 TCP 的连接、报文、状态与可靠传输模型。本篇把这些机制落实到应用程序：每一次发送都检查进度，每一条消息都有边界，每一个等待都有期限，每一次重试都有身份，每一处排队都有容量。

六章沿着一条可运行的 Python Socket 消息服务逐步展开：

1. [第25章 Socket API 的正确使用](./06-application-development/01-socket-api.md)：处理短读、部分写入、EOF、超时与非阻塞状态。
2. [第26章 如何设计应用层协议](./06-application-development/02-application-protocol.md)：实现带 Magic、版本、类型、长度和请求 ID 的二进制协议。
3. [第27章 超时、重试和幂等性](./06-application-development/03-timeouts-retries-idempotency.md)：用总截止时间约束等待，用稳定请求 ID 消除重复副作用。
4. [第28章 并发、缓冲区和背压](./06-application-development/04-concurrency-buffers-backpressure.md)：给连接、任务与内存建立明确上限。
5. [第29章 常用 Socket 选项](./06-application-development/05-socket-options.md)：理解 Keepalive、Nagle、缓冲区与平台差异。
6. [第30章 TLS、HTTP 与 TCP 的关系](./06-application-development/06-tls-http-tcp.md)：看清应用消息、TLS Record 与 TCP Segment 的各自边界。

## 本篇综合任务

完成一个带长度首部、请求 ID、错误响应、最大消息限制、循环读写、总截止时间、幂等去重、并发限制和有限队列的消息服务。至少验证正常消息、连续消息、截断消息、恶意长度、慢客户端、过载拒绝和不确定结果重试。最后给服务加上 TLS，再用应用日志与 Wireshark 分别观察明文语义和传输时序。

## 学习方式

建议每章依次完成“先预测、运行代码、记录返回值、观察抓包、解释现象、回答理解检查”。实验全部使用回环地址，核心代码只依赖 Python 标准库；涉及 Keepalive 与 User Timeout 的细节会明确标出操作系统边界。

## 导航

- [系列总目录](../tcp-from-zero-to-diagnostics.md)
- [上一篇：可靠传输、流量控制与性能](./05-reliability-performance.md)
- [下一章：第25章 Socket API 的正确使用](./06-application-development/01-socket-api.md)
