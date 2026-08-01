# PEAS 在现代 Coding Harness 中的映射

## PEAS 是什么

PEAS 是人工智能中用于描述智能体任务环境的框架：

| 字母 | 英文 | 含义 | 要回答的问题 |
| --- | --- | --- | --- |
| P | Performance measure | 性能指标 | 怎样才算完成得好？ |
| E | Environment | 环境 | 智能体在哪里工作？ |
| A | Actuators | 执行器 | 智能体能够采取哪些行动？ |
| S | Sensors | 传感器 | 智能体能够观察到什么？ |

PEAS 适合在设计智能体之前使用。它迫使设计者明确目标、边界、能力和反馈，避免只关注模型本身。

## 先确定智能体的边界

讨论 Coding Harness 时，需要先确定什么被算作“智能体”。

本文采用下面的边界：

```text
智能体 = LLM + Coding Harness
```

其中 Coding Harness 通常负责：

- 构造模型上下文
- 管理 agent loop
- 向模型提供工具
- 执行工具调用并返回结果
- 管理上下文窗口和会话状态
- 实施权限、审批与 sandbox 限制
- 运行测试和其他验证
- 与用户、GitHub、CI、MCP 服务等系统交互

如果只把 LLM 看作智能体，那么 Harness 会成为 LLM 与外部环境之间的接口层，同时承担传感器适配、执行器适配和安全控制等职责。本文把 LLM 与 Harness 视为一个整体，更方便分析完整的软件工程智能体。

现代 Coding Harness 的核心通常是一个循环：模型请求工具，Harness 执行工具，将结果追加到上下文，模型再根据新信息继续工作，直到产生最终回复或满足终止条件。[OpenAI 对 Codex agent loop 的说明](https://openai.com/index/unrolling-the-codex-agent-loop/)

## P：Performance measure

P 定义“怎样才算做好”。在 Coding Harness 中，它通常是多个目标与约束的组合。

### 功能正确性

- 用户要求或 Issue 中的验收条件得到满足
- 项目能够编译或构建
- 目标测试通过
- 原有测试没有回归
- 类型检查、lint 和静态分析通过

### 补丁质量

- 修改范围与任务相符
- 代码可读、可维护
- 符合仓库的命名、风格和架构约定
- 没有为了通过测试而硬编码结果
- 没有引入新的安全风险

### 行为与过程质量

- 遵守用户指令、仓库说明和组织策略
- 高风险操作经过授权
- 没有越过文件系统或网络边界
- 如实说明做了什么、哪些验证已运行、哪些验证未运行
- 在合理的时间、token 和工具调用预算内完成任务

P 可以分成两个层次：

```text
在线完成标准：
  当前任务什么时候可以报告完成？

离线评估指标：
  一批任务中的解决率、回归率、人工接受率、
  安全事件率、延迟和成本分别是多少？
```

例如，SWE-bench 的评估 Harness 会检查 fail-to-pass 与 pass-to-pass 测试，并据此判断补丁是完全解决、部分解决还是未解决。这是 P 的一个可执行但相对简化的版本。[SWE-bench Harness](https://www.swebench.com/SWE-bench/api/harness/)

## E：Environment

E 是智能体所处的软件工程世界，包括任务执行过程中可能影响结果的外部状态。

### 任务与代码环境

- 用户提示、Issue、PR 评论和验收条件
- Git 仓库、基准提交、分支和 worktree
- 源代码、测试、配置、文档和生成文件
- `AGENTS.md`、`CLAUDE.md` 等项目指令

### 执行环境

- 操作系统、Shell 和当前工作目录
- 编程语言运行时、SDK、编译器和依赖
- 本地机器、容器、虚拟机或云端开发环境
- 文件系统权限、网络策略、凭据和密钥可见性

### 外部工程系统

- GitHub、GitLab、Issue Tracker 和代码审查系统
- CI/CD、构建平台和制品仓库
- 包注册表、文档网站和搜索服务
- 数据库、浏览器、部署平台和可观测性系统
- 通过 MCP 或其他协议接入的 API 与工具

### 人与组织

- 提出需求和中途纠正方向的用户
- 审批高风险操作的人
- 最终审查补丁的开发者
- 团队的安全策略、合规要求和开发规范

Sandbox 也是 E 的重要组成部分。它规定智能体能写哪些目录、能否访问网络，以及哪些资源受到保护。现代 Harness 通常把 sandbox 与审批策略结合，让智能体在明确边界内自主行动。[Codex 的 sandbox 与审批说明](https://openai.com/index/running-codex-safely/)

## A：Actuators

A 是智能体可以通过 Harness 发起的操作。它们通常以工具调用的形式出现。

### 代码与文件操作

- 读取、创建、修改、重命名和删除文件
- 搜索文本、符号或文件
- 应用补丁
- 调用格式化器或代码生成器

### 执行操作

- 运行 Shell 或 PowerShell 命令
- 安装依赖
- 编译、构建和运行程序
- 执行测试、lint、类型检查和安全扫描
- 启动或停止本地服务

### 版本控制与协作

- 查看或修改 Git 状态
- 创建分支、提交和推送代码
- 创建或更新 Pull Request
- 查询 Issue、Review 和 CI 状态

### 外部工具与用户交互

- 调用 Web、MCP、数据库或其他 API
- 操作浏览器、IDE 或桌面界面
- 请求用户授权
- 向用户提问、报告进度或交付结果
- 启动子智能体并分派任务

现代 Harness 往往支持内置工具、MCP 工具和子智能体。以 Claude Code 为例，其工具层包括文件操作、Shell、搜索、LSP、用户询问和子智能体等能力。[Claude Code Tools Reference](https://code.claude.com/docs/en/tools-reference)

## S：Sensors

S 是 Harness 能够采集并反馈给模型的观测。传感器质量决定模型能否准确理解当前状态和行动结果。

### 任务与规则观测

- 用户消息和后续纠正
- 系统、开发者与项目指令
- 当前目录、Shell、权限和 sandbox 信息
- 会话历史、任务计划和已保留的记忆

### 代码观测

- 文件内容和目录结构
- 文本搜索与符号搜索结果
- AST、调用关系和依赖图
- LSP 提供的定义、引用、类型错误和警告

### 执行反馈

- stdout、stderr 和退出码
- 编译器、lint、类型检查器和测试框架的诊断
- 服务日志、异常堆栈、性能数据和运行时 trace
- 命令超时、权限拒绝和 sandbox 阻止信息

### 工程状态观测

- `git status`、`git diff`、`git log` 和 blame
- CI job 状态和测试报告
- Issue、PR、Review 和部署状态
- 浏览器 DOM、页面截图和交互结果
- 用户的批准、拒绝和文字反馈

一些现代工具能缩短反馈路径。例如 LSP 可以在文件编辑后立即把类型错误和警告返回给智能体，使其无需等待完整构建就能修正问题。[Claude Code 的 LSP 工具说明](https://code.claude.com/docs/en/tools-reference#lsp-tool)

## PEAS 如何形成闭环

Coding Harness 中的 PEAS 可以表示为下面的循环：

```text
S：观察任务、代码和当前状态
        ↓
LLM + Harness：推理、规划并选择工具
        ↓
A：执行工具调用
        ↓
E：仓库、进程或外部系统发生变化
        ↓
S：获得新的输出、错误和验证结果
        ↓
继续迭代，直到满足 P
```

P 不一定直接参与每次工具调用，但它决定智能体应该优化什么、何时继续修复，以及何时可以结束任务。

## 三个容易混淆的边界

### 工具调用属于 A，工具结果属于 S

例如：

```text
shell("pnpm test")
```

- 发起 Shell 调用属于 A
- Shell 改变或查询执行环境
- 返回的 stdout、stderr 和退出码属于 S

即使某个工具只执行读取，它的“发起读取”仍是一种行动，返回的数据才是观测。

### 测试同时与 P 和 S 有关

```text
“所有目标测试必须通过”
```

这是 P 中的完成标准。

```text
“本次测试退出码为 1，auth.test.ts 有两个断言失败”
```

这是 S 提供的当前观测。

测试工具的执行则属于 A。一次测试因此会同时连接 A、S 和 P。

### 权限、Sandbox 和 Hooks 是跨层机制

- Sandbox 划定 E 的可访问边界
- 权限系统决定哪些 A 可以执行
- 权限拒绝和违规信息通过 S 返回
- “不得越权”属于 P 中的硬约束

Hooks 还能在工具执行前阻止或修改行动，并在工具执行后把额外反馈送回智能体。因此，它们同时影响 A 的控制和 S 的反馈路径。[Claude Code Permissions](https://code.claude.com/docs/en/permissions) 与 [Claude Code Hooks](https://code.claude.com/docs/en/hooks)

## 示例：修复登录并发 Bug

假设用户提出任务：

> 修复登录刷新 token 时偶发产生两个有效 token 的并发问题，并补充回归测试。

对应的 PEAS 可以写成：

### P

- 并发场景只能生成一个有效 token
- 新增回归测试并通过
- 原有认证测试没有回归
- 修改符合项目并发控制方式
- 不泄露 token，也不修改无关模块

### E

- 当前 Git 仓库和工作分支
- 认证服务、数据库事务和缓存实现
- 测试数据库与项目依赖
- 仓库指令、CI 配置和代码审查要求

### A

- 搜索 token 刷新相关代码
- 阅读认证服务和现有测试
- 修改事务、锁或幂等逻辑
- 添加并发回归测试
- 运行目标测试、完整测试和 Git 检查

### S

- 搜索结果、源代码和调用关系
- 测试失败信息和异常堆栈
- 数据库日志与并发执行结果
- 编辑后的 LSP 诊断
- `git diff`、测试报告和 CI 状态

完整轨迹可能是：

```text
读取需求
→ 搜索刷新逻辑
→ 阅读事务边界
→ 编写可复现测试
→ 观察测试失败
→ 修改并发控制
→ 观察目标测试通过
→ 运行回归测试
→ 检查 diff 和状态
→ 根据 P 判断是否完成
```

## 设计 Coding Harness 时的 PEAS 检查表

### P：完成标准是否可验证

- 用户意图是否已经转化为清晰的验收条件？
- 除测试外，是否还检查回归、安全、质量和指令遵循？
- Harness 如何防止智能体在验证不足时提前宣布完成？

### E：环境是否真实且边界明确

- 运行环境是否足够接近实际开发环境？
- 仓库、依赖、网络和凭据是否处于受控范围？
- 外部系统状态变化后，智能体能否及时感知？

### A：工具是否足够且遵循最小权限

- 是否提供完成任务所需的文件、Shell、Git 和外部工具？
- 高风险工具是否需要审批或受到 sandbox 限制？
- 工具参数和失败语义是否足够清晰？

### S：反馈是否准确、及时且可消费

- 是否返回退出码、结构化诊断和必要日志？
- 大量输出是否会被截断或淹没关键信息？
- LSP、测试、CI、运行时和用户反馈能否进入同一个 agent loop？

## 总结

在现代 Coding Harness 中，可以这样记忆 PEAS：

```text
P：怎样算做好
E：在哪里工作
A：能够做什么
S：能够看到什么
```

模型决定推理能力的上限，Harness 对 PEAS 的实现则决定这些能力能否稳定地转化为可验证的软件工程成果。优秀的 Coding Harness 会提供真实且受控的环境、表达清晰的工具、及时准确的反馈，以及严格而可执行的完成标准。

## 参考资料

- [OpenAI：Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)
- [OpenAI：Running Codex safely at OpenAI](https://openai.com/index/running-codex-safely/)
- [Claude Code Tools Reference](https://code.claude.com/docs/en/tools-reference)
- [Claude Code Permissions](https://code.claude.com/docs/en/permissions)
- [Claude Code Hooks](https://code.claude.com/docs/en/hooks)
- [SWE-bench Harness](https://www.swebench.com/SWE-bench/api/harness/)
