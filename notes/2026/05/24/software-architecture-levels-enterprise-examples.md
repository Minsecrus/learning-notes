# 软件架构层级与 Enterprise Architecture 示例

## 架构的三个层级

软件架构可以在不同抽象层级上进行。层级越低，越接近具体应用实现；层级越高，越接近组织级技术版图和长期演进方向。

一种常见划分方式是：

| 层级 | 关注范围 | 设计粒度 | 沟通对象 |
| --- | --- | --- | --- |
| Application Level | 单个应用 | 非常详细，低层设计 | 通常在一个开发团队内 |
| Solution Level | 一个或多个应用组成的业务解决方案 | 有一些高层设计，但主要仍偏低层 | 多个开发团队之间 |
| Enterprise Level | 多个业务解决方案和组织级能力 | 高层、抽象，需要被 Solution/Application 架构继续细化 | 跨组织、跨业务线 |

可以简单记成：

```text
Application Level:
  这个服务或应用怎么设计？

Solution Level:
  这几个系统如何共同完成一个业务能力？

Enterprise Level:
  整个组织未来几年在云、安全、数据、集成、平台、系统治理上怎么演进？
```

## Enterprise Level Architecture 是什么

Enterprise Level Architecture 不是在设计某一个系统怎么写，而是在设计整个组织的技术版图怎么演进。

它通常关注：

- 多个业务线之间的系统边界
- 统一身份认证、权限和安全策略
- 公司级数据架构和数据治理
- 云战略、基础设施标准和部署模式
- 应用组合治理，哪些系统保留、合并、替换、退役
- 企业集成方式，例如 API Gateway、事件总线、消息队列
- 公司级平台能力，例如开发者平台、数据平台、观测平台
- 技术路线图、Target Architecture、Reference Architecture

它的产物常常不是具体代码，而是：

```text
Target Architecture
Roadmap
Capability Map
Principles
Standards
Reference Architecture
治理模型
```

## Enterprise Level 的典型例子

### 企业级身份认证体系

一家公司可能有很多系统：

```text
OA
CRM
ERP
数据平台
内部开发者平台
客户门户
移动 App
```

Enterprise Level 关注的不是某个系统如何登录，而是：

```text
全公司是否统一使用 SSO？
用 Azure AD、Okta、Keycloak 还是自建？
权限模型是 RBAC、ABAC，还是混合？
员工、客户、合作伙伴是否使用不同身份域？
MFA、审计、账号生命周期如何统一？
```

### 企业级数据架构

例如公司希望所有业务线都能使用统一的数据分析能力。

Enterprise Level 关注：

```text
数据湖 / 数据仓库 / Lakehouse 怎么选？
各业务系统的数据如何汇聚？
主数据，比如客户、商品、组织、账号，由谁负责？
实时数据和离线数据如何分层？
数据治理、血缘、权限、质量标准怎么制定？
```

### 云战略和基础设施标准

例如公司从自建机房迁移到云上。

Enterprise Level 会设计：

```text
用单云还是多云？
AWS / Azure / GCP 如何分工？
网络拓扑、账号体系、VPC/VNet 规划怎么做？
安全基线是什么？
哪些系统必须迁移，哪些系统保留本地？
未来新系统必须遵守哪些云原生标准？
```

### 应用组合治理

大公司经常存在重复系统：

```text
多个 CRM
多个报销系统
多个客户主数据系统
多个消息推送平台
```

Enterprise Architecture 会问：

```text
哪些系统保留？
哪些系统合并？
哪些系统退役？
哪些系统应该成为集团级平台？
未来采购或自研系统要遵守什么边界？
```

### 企业集成架构

例如公司有电商、仓储、财务、客服、供应链等多个系统。

Enterprise Level 关注：

```text
系统之间用 API、事件总线、消息队列，还是文件同步？
是否建设统一 API Gateway？
是否采用 Event-Driven Architecture？
哪些数据可以同步，哪些必须实时？
跨系统失败、重试、审计怎么标准化？
```

## 大厂的 Enterprise Level 实例

### Netflix：从数据中心迁移到 AWS 云原生架构

Netflix 在 2008 年经历数据库损坏事故后，决定从数据中心里的垂直扩展单点系统，转向 AWS 上高可靠、水平扩展的分布式系统。

这次迁移持续多年，最终重建了大量技术体系：

```text
从单体应用转向数百个微服务
引入 NoSQL
建设 DevOps 和自助工具
使用弹性基础设施
让推荐、转码、大数据处理等能力运行在云上
```

它是典型 Enterprise Level，因为变化的不只是某个应用，而是：

```text
云战略
应用组合迁移
平台能力
组织运作方式
可靠性模型
```

参考：[Netflix: Completing the Netflix Cloud Migration](https://about.netflix.com/zh_cn/news/completing-the-netflix-cloud-migration)

### Google：BeyondCorp / Zero Trust 安全架构

Google 的 BeyondCorp 是公司级 Zero Trust 架构实践。

它改变的是整个企业访问模型：

```text
不再默认信任内网或 VPN
基于用户、设备、上下文做认证授权
让员工可以从不受信任网络访问公司资源
把访问控制从网络边界转向身份和设备状态
```

这属于 Enterprise Security Architecture，因为它把身份、设备、访问控制、代理、加密、企业资源访问策略放在一起设计。

参考：[Google Cloud BeyondCorp](https://cloud.google.com/beyondcorp?hl=en)

### Uber：公司级 Big Data Platform

Uber 的大数据平台不是某个业务系统的数据库，而是支撑全公司工程、运营、分析、机器学习的数据底座。

它的 Enterprise Level 价值在于：

```text
把全公司数据聚合到统一平台
提供标准 SQL 访问方式
支撑工程、运营、分析、机器学习团队
处理 PB 级数据和大量查询/计算任务
```

这就是 Enterprise Data Architecture：统一数据湖/仓库、数据接入、计算引擎、延迟目标、跨团队数据访问方式。

参考：[Uber: Uber's Big Data Platform](https://www.uber.com/en-DK/blog/uber-big-data-platform/)

### Airbnb：Viaduct 数据导向服务网格

Airbnb 的 Viaduct 是跨领域的数据和能力访问层。

它提供：

```text
连接公司所有领域的 central schema
多个团队共同开发的去中心化模式
跨领域数据组合能力
统一的数据/API 访问体验
```

这不是某个页面的 GraphQL API，而是公司级 API/数据访问架构。它关注统一 schema、跨领域组合、开发者体验和服务治理。

参考：[Airbnb: Viaduct five years on](https://airbnb.tech/infrastructure/viaduct-five-years-on-modernizing-the-data-oriented-service-mesh/)

### Amazon/AWS：可演进服务架构与组织对齐

Amazon/AWS 的例子不是某一个服务，而是一整套大规模工程组织实践：

```text
用服务化和 API 边界拆复杂度
让团队 ownership 对齐服务边界
区分 control plane 和 data plane
用 AZ、cell、shuffle sharding 缩小故障影响范围
用 static stability 避免故障时依赖临时恢复动作
用统一可观测性和自动回滚支撑持续发布
用 Well-Architected Framework 建立跨组织架构治理语言
用 evolvability 保证系统长期可演进
```

这非常适合说明 Enterprise Level Architecture，因为它回答的是：

> 一个超大规模技术组织如何规定所有服务应该如何拆分、拥有、发布、观测、隔离、恢复和演进？

## AWS/Amazon 的 Enterprise Architecture 实践

### 服务化和明确 API 边界

Amazon/AWS 的大系统由很多小服务组成，每个服务有窄职责，通过清晰 API 协作。

核心思想：

```text
不要让全公司共享一个巨大系统
而是让每个业务能力变成可独立演进的服务
每个服务必须有清晰 API、清晰 owner、清晰运行指标
```

架构治理会问：

```text
谁拥有这个服务？
API 契约是否稳定？
调用方如何发现错误？
服务变更是否能独立发布？
团队是否能独立运行和扩展它？
```

参考：[AWS Builders' Library: Instrumenting distributed systems for operational visibility](https://aws.amazon.com/builders-library/instrumenting-distributed-systems-for-operational-visibility/)

### 团队结构对齐架构

AWS 的 service-per-team pattern 强调：一个微服务由一个团队拥有，团队负责代码库，并独立开发、测试、部署、扩展服务。团队之间主要通过 API 协商。

这相当于反向使用 Conway's Law：

```text
如果希望系统是松耦合服务
组织也要变成能独立拥有服务的小团队
```

所以 AWS 的实践不是单纯拆微服务，而是对齐：

```text
服务边界
团队边界
API 边界
运维责任边界
发布责任边界
```

参考：[AWS Prescriptive Guidance: Service per team pattern](https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/service-per-team.html)

### Control Plane / Data Plane 分离

AWS 很多服务会区分：

```text
Control Plane：创建、修改、删除、配置资源
Data Plane：资源日常处理真实业务流量
```

例如 EC2：

```text
Control Plane:
  启动实例
  分配网络接口
  准备 EBS 卷
  安装安全组规则
  生成 IAM 角色凭证

Data Plane:
  已有实例继续运行
  网络包继续转发
  EBS 读写继续进行
```

Enterprise Level 的意义是：

> 即使控制面暂时出问题，数据面也应该尽量继续工作。

也就是说，你可能暂时不能创建新的 EC2 实例，但已有 EC2 实例应该继续跑。

参考：[AWS Builders' Library: Static stability using Availability Zones](https://aws.amazon.com/builders-library/static-stability-using-availability-zones/)

### Static Stability：故障发生前就准备好

`Static stability`，静态稳定性，指系统不要等故障发生后才扩容、重配、迁移，而是在故障发生前就已经准备好足够容量和隔离结构。

例如跨 3 个 Availability Zones 部署服务时，不是：

```text
一个 AZ 挂了以后，再临时扩另外两个 AZ
```

而是：

```text
平时就让剩余 AZ 有足够容量
即使一个 AZ 出问题，也不依赖临时创建资源来恢复
```

这是一条企业级可靠性原则：

> 不要把恢复能力建立在故障时的临时动作上，关键系统要预先具备承载故障的能力。

参考：[AWS Builders' Library: Static stability using Availability Zones](https://aws.amazon.com/builders-library/static-stability-using-availability-zones/)

### Cell-Based Architecture：缩小故障影响范围

`Cell-based architecture` 是把一个大系统拆成多个相对独立的 cell。

每个 cell 里有完整的一套应用逻辑和存储，可以独立：

```text
监控
扩容
部署
回滚
恢复
```

核心思想：

```text
不要让所有用户都依赖同一个巨大系统实例
而是把用户、租户或流量分配到多个隔离 cell
```

如果一个 cell 出问题，影响的是这个 cell 的一部分用户，而不是全局所有用户。

它解决的是 Enterprise Level 的问题：

```text
如何让公司级平台在超大规模下仍然可测试、可恢复、可局部发布？
```

参考：[AWS Well-Architected: Why use a cell-based architecture?](https://docs.aws.amazon.com/wellarchitected/latest/reducing-scope-of-impact-with-cell-based-architecture/why-to-use-a-cell-based-architecture.html)

### Control Plane 保护 Data Plane

在大规模系统里，data plane fleet 可能远大于 control plane fleet。如果大量 data plane 节点同时调用 control plane，较小的 control plane 可能被压垮。

一些做法包括：

```text
用 S3 作为配置分发中介
data plane 本地缓存最后一次配置
control plane 故障时 data plane 继续运行
让较小的 control plane 控制工作节奏
通过 backoff、jitter、load shedding 避免雪崩
```

这体现了一个重要原则：

> 大规模系统里，不只看功能调用是否正确，还要看调用方向、规模差异、重试风暴和故障恢复时的群体行为。

参考：[AWS Builders' Library: Avoiding overload in distributed systems](https://aws.amazon.com/builders-library/avoiding-overload-in-distributed-systems-by-putting-the-smaller-service-in-control/)

### 可观测性是架构的一部分

AWS/Amazon 不把日志、指标、报警当成上线后再补的东西，而是把它们视为 service ownership 的核心部分。

典型要求包括：

```text
每个 API 有指标
每个服务有 dashboard
关键路径有 alarms
依赖服务的表现要能看见
部署时要能根据指标自动回滚
团队要对服务运行状态负责
```

Amazon 特别关注高百分位延迟，例如 p99.9、p99.99，因为深层服务的尾延迟会在调用链里放大，最终影响用户体验。

参考：[AWS Builders' Library: Instrumenting distributed systems for operational visibility](https://aws.amazon.com/builders-library/instrumenting-distributed-systems-for-operational-visibility/)

### 自动化安全部署

AWS/Amazon 的安全部署流程通常包括：

```text
code review
alpha / beta / gamma 预生产环境
integration tests
one-box deployment
rolling deployment
deployment waves
metrics monitoring
automatic rollback
pipelines as code
```

典型流程：

```text
先在预生产环境验证
再部署到一个最小单元 one-box
观察指标和 canary
没问题再滚动部署
如果 fault rate、latency、CPU、内存、健康检查等异常，自动回滚
```

这不是某个应用的 CI/CD 小技巧，而是为了让成千上万个服务安全演进而建立的企业级发布体系。

参考：[AWS Builders' Library: Automating safe, hands-off deployments](https://aws.amazon.com/builders-library/automating-safe-hands-off-deployments/)

### Well-Architected Framework：把架构治理标准化

AWS Well-Architected Framework 用 6 个 pillar 评估架构：

```text
Operational Excellence
Security
Reliability
Performance Efficiency
Cost Optimization
Sustainability
```

它让不同团队讨论架构时，不只是说：

```text
这个设计好不好？
```

而是按统一维度问：

```text
怎么运维？
怎么保护数据？
怎么恢复故障？
性能如何随规模变化？
成本是否可控？
资源使用是否可持续？
```

这就是 Enterprise Architecture 的重要价值：建立跨团队、跨系统、跨业务线的共同判断标准。

参考：[AWS Well-Architected Framework definitions](https://docs.aws.amazon.com/wellarchitected/2023-10-03/framework/definitions.html)

### Evolvability：系统必须能长期演进

Amazon CTO Werner Vogels 强调，系统会增长，所以要把 `evolvability` 当成要求。

这代表 AWS 风格里很强的一点：

```text
架构不是一次画完
架构要允许未来被替换、拆分、重写、扩展
同时外部客户尽量无感
```

参考：[Amazon: CTO shares tips for managing complexity](https://www.aboutamazon.com/news/aws/aws-reinvent-2024-keynote-live-news-updates?p=amazon-cto-shares-his-6-tips-for-managing-complexity)

## 总结

Enterprise Level Architecture 关注的不是某个系统如何实现，而是整个组织的系统、数据、安全、集成、云平台、工程标准和技术能力如何协同与演进。

大厂的实际例子里：

```text
Netflix 云迁移体现云战略和平台化转型
Google BeyondCorp 体现企业级安全架构
Uber Big Data Platform 体现企业级数据架构
Airbnb Viaduct 体现公司级 API/数据访问架构
Amazon/AWS 体现服务化、平台治理、可靠性和组织架构协同
```

AWS 的实践尤其说明：Enterprise Architecture 不是抽象口号，而是一套落地到服务边界、团队 ownership、发布、观测、故障隔离、容量规划和长期演进的组织级工程系统。
