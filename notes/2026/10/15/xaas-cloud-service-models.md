# XaaS 云服务模式全景：从 IaaS 到 MaaS

云计算发展到今天，几乎什么都能做成“XX 即服务”，统称 **XaaS（Everything as a Service，万物皆服务）**。IaaS、SaaS、MaaS 分别对应底层基建、顶层应用和 AI 大模型，它们中间和周边还有一大串 `aaS`，可以按两条线来理解：

- **抽象层级**：云厂商替你管掉多少层技术栈。
- **垂直领域**：把某一类具体能力（数据库、通信、安全……）单独封装成服务。

## 一、主线：你管多少，云厂商管多少

| 缩写 | 全称 | 核心交付物 | 典型代表 | 你还要管什么 |
| --- | --- | --- | --- | --- |
| IaaS | Infrastructure as a Service，基础设施即服务 | 虚拟机、存储、网络 | AWS EC2、阿里云 ECS | 操作系统、运行环境、中间件、数据库、业务代码 |
| CaaS | Containers as a Service，容器即服务 | 托管的容器编排集群 | AWS EKS、阿里云 ACK | 容器镜像、应用配置、业务代码 |
| PaaS | Platform as a Service，平台即服务 | 代码运行环境、托管中间件 | Heroku、Render、Vercel | 业务代码和配置，扩缩容由平台负责 |
| FaaS | Function as a Service，函数即服务 | 事件触发的单个函数 | AWS Lambda、Cloudflare Workers | 只写函数，按调用次数和执行时长计费，进程都不用管 |
| BaaS | Backend as a Service，后端即服务 | 现成的数据库、鉴权、对象存储 API | Supabase、Firebase | 只写前端或客户端，常用后端能力直接调 API |
| SaaS | Software as a Service，软件即服务 | 开箱即用的完整软件 | Notion、Figma、飞书 | 不写代码，注册账号直接用 |

比 IaaS 再往下还有一层 **BMaaS（Bare Metal as a Service，裸金属即服务）**：连虚拟化层（Hypervisor）都不加，直接租给你一台物理服务器。延迟或算力损耗特别敏感的场景会用它，比如高频交易、高性能计算、自建大模型训练集群。

### 责任矩阵

| 技术栈层级 | 自建机房 | IaaS | CaaS | PaaS | FaaS | SaaS |
| --- | --- | --- | --- | --- | --- | --- |
| 机房、电力、网络硬件 | 你 | 云 | 云 | 云 | 云 | 云 |
| 物理服务器 | 你 | 云 | 云 | 云 | 云 | 云 |
| 虚拟化 | 你 | 云 | 云 | 云 | 云 | 云 |
| 操作系统 | 你 | 你 | 共担 | 云 | 云 | 云 |
| 容器编排 | 你 | 你 | 云 | 云 | 云 | 云 |
| 运行时与中间件 | 你 | 你 | 你 | 云 | 云 | 云 |
| 扩缩容 | 你 | 你 | 共担 | 云 | 云 | 云 |
| 应用代码 | 你 | 你 | 你 | 你 | 你（函数粒度） | 云 |
| 数据与访问权限 | 你 | 你 | 你 | 你 | 你 | 你 |

CaaS 一栏的“共担”：托管 Kubernetes 通常只替你管控制面，工作节点的系统补丁、节点池扩容往往还得自己操心；换成 EKS on Fargate、阿里云 ACK Serverless 这类无节点模式，这部分才交给云厂商。

## 二、数据与 AI 时代的延伸

技术圈说 **MaaS** 一般指 **Model as a Service（模型即服务）**。交通领域也有个 MaaS，指 Mobility as a Service（出行即服务），看上下文区分。

| 缩写 | 全称 | 交付什么 | 典型代表 |
| --- | --- | --- | --- |
| GPUaaS | GPU as a Service，算力即服务 | 面向训练和推理的弹性 GPU 租赁 | CoreWeave、Lambda、AutoDL |
| MaaS | Model as a Service，模型即服务 | 通过 API 提供模型推理、微调 | OpenAI API、DeepSeek API、阿里云百炼、Hugging Face Inference Endpoints |
| AaaS | Agent as a Service，智能体即服务 | 打包好工具调用、记忆、规划和沙盒执行环境的 Agent | 各家托管 Agent 平台 |

- GPUaaS 本质上是专门卖 GPU 的 IaaS，处在 IaaS 和 MaaS 之间：你拿到的是带显卡的机器，模型、框架、训练脚本都得自己搞定。
- MaaS 把模型部署、推理优化、显存调度全部包掉，你只管发请求、按 Token 付费。
- AaaS 比 MaaS 再往上一层：直接交付一个能干活的智能体，你描述任务即可。

### 数据类服务

- **DBaaS（Database as a Service，数据库即服务）**：托管数据库，自动处理备份、主从切换和分片。例如 AWS RDS、Neon（Serverless Postgres）、MongoDB Atlas。
- **DaaS（Data as a Service，数据即服务）**：通过 API 直接卖清洗好的结构化数据，比如金融行情、链上数据流、天气和地理信息。

## 三、企业与垂直领域

- **DaaS（Desktop as a Service，云桌面）**：和上面的 Data 撞了缩写。桌面系统跑在云端，本地用瘦客户端或浏览器串流访问，例如 AWS WorkSpaces、阿里云无影。
- **SECaaS（Security as a Service，安全即服务）**：云端 WAF、DDoS 防护、零信任网关，Cloudflare 的核心业务就是这一类。
- **CPaaS（Communications Platform as a Service，通信平台即服务）**：几行 API 接入短信验证码、语音通话、音视频能力，例如 Twilio、声网 Agora。
- **BaaS（Blockchain as a Service，区块链即服务）**：又和 Backend 撞了缩写。云厂商帮企业一键部署联盟链，例如蚂蚁链 BaaS、腾讯云 TBaaS。Alchemy、Infura 这类公司提供的是公链节点和 API 访问，一般叫 Node as a Service，也常被归到这一类。

## 四、黑产与极客圈的 aaS

- **RaaS（Ransomware as a Service，勒索软件即服务）**：暗网真实存在的商业模式。核心团队开发勒索软件和支付后台，租给“附属成员”（affiliate）去投递，赎金按比例分成，附属成员通常拿大头。
- **CaaS（Crime-as-a-Service / Crimeware as a Service，犯罪即服务）**：租用僵尸网络发起 DDoS（俗称 Booter / Stresser）、出租钓鱼套件等。又一个撞车的 CaaS。
- **NaaS（No as a Service）**：开发者整活的开源 API，每次调用随机返回一句礼貌又有创意的拒绝理由。

## 演进规律

所有 `aaS` 的演进可以归结成一句话：**计费粒度越来越细，离硬件越来越远，离业务逻辑越来越近。**

| 阶段 | 计费粒度 |
| --- | --- |
| IDC 托管 | 按月租机柜 |
| IaaS | 按小时，后来细到按秒租虚拟机 |
| FaaS | 按毫秒级执行时长加调用次数 |
| MaaS | 按 Token |

## Gotchas

- **缩写大量撞车**：CaaS（Containers / Crimeware）、DaaS（Data / Desktop）、BaaS（Backend / Blockchain）、MaaS（Model / Mobility）。看到缩写先看上下文，别想当然。
- **Serverless 包含 FaaS 和 BaaS 两部分**：FaaS 跑你自己写的逻辑，BaaS 提供现成的后端能力。主线表格里它们挨着放，其实是同一层抽象的两种形态，没有严格的上下级关系。
- **数据永远归你管**：即使用 SaaS，账号权限、数据分类、误删误分享仍然是你的责任。这就是云厂商常说的“责任共担模型”（Shared Responsibility Model）。
- **越往上越省事，也越难迁移**：PaaS、FaaS、BaaS 往往绑定厂商私有的 API 和运行时，换平台的成本比 IaaS 高得多。用量上去以后，按调用计费也可能比租机器更贵。

## 参考

- NIST SP 800-145, *The NIST Definition of Cloud Computing*：对 IaaS、PaaS、SaaS 的经典定义。<https://csrc.nist.gov/pubs/sp/800/145/final>
- AWS Shared Responsibility Model：<https://aws.amazon.com/compliance/shared-responsibility-model/>
- No as a Service：<https://github.com/hotheadhacker/no-as-a-service>
