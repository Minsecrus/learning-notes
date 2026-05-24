# Technical Writing 中的三种 Technical Content

## 核心结论

这三个词都属于 technical content，但关注点不同：

```text
Product Content 讲产品有什么
General Product Prose 讲产品是什么、为什么有用
How-to Guides 讲用户怎么做
```

它们常常会出现在同一个文档体系里，只是承担的任务不同。

## 对比表

| 类型 | 主要作用 | 回答的问题 | 常见例子 |
| --- | --- | --- | --- |
| Product Content | 描述产品本身的信息 | 产品有什么？支持什么？限制是什么？ | 功能列表、API reference、release notes、规格说明 |
| General Product Prose | 解释产品概念、价值和使用场景 | 产品是什么？为什么有用？适合什么场景？ | 产品介绍、overview、feature explanation、concept page |
| How-to Guides | 引导用户完成具体任务 | 用户应该按什么步骤做？ | 安装指南、配置教程、故障排查、操作流程 |

## Product Content

Product Content 更偏向产品本身的事实信息。它通常比较直接、具体、可查。

它适合回答：

- 产品有哪些功能？
- 某个功能支持哪些参数或选项？
- 某个版本更新了什么？
- 系统要求或限制是什么？

常见例子：

```text
The platform supports single sign-on, role-based access control, and audit logs.
```

```text
GET /users/{id} returns user profile information.
```

```text
Version 2.1 adds webhook retry support and improves export performance.
```

```text
Requires Node.js 20 or later and at least 4 GB of memory.
```

Product Content 的重点是准确描述产品，不一定需要讲很多背景故事。

## General Product Prose

General Product Prose 更像是产品说明文字。它不像 API reference 那么硬，也不像 how-to guide 那么步骤化。

它适合回答：

- 这个产品或功能是什么？
- 它为什么有用？
- 它解决什么问题？
- 用户应该如何理解这个概念？

常见例子：

```text
Our analytics dashboard helps teams monitor product usage, identify trends, and make data-driven decisions.
```

```text
Role-based access control allows administrators to define what each user can view or modify.
```

```text
Workspaces are shared environments where teams organize projects, members, and permissions.
```

```text
For support teams, automated alerts can reduce response time when system errors occur.
```

General Product Prose 的重点是解释和引导理解，语言通常比 reference 更自然。

## How-to Guides

How-to Guides 是任务导向的内容。它的目标不是全面介绍产品，而是帮助用户完成一个明确任务。

它适合回答：

- 如何安装？
- 如何配置？
- 如何创建、导入、导出？
- 出错时如何排查？

常见例子：

```text
# How to Install the CLI

1. Download the CLI package.
2. Run the installer.
3. Verify the installation with `tool --version`.
```

```text
# How to Configure API Authentication

1. Open the developer dashboard.
2. Create a new API key.
3. Add the key to your request header.
```

```text
# How to Troubleshoot Login Errors

1. Check whether the user account is active.
2. Confirm that SSO is enabled.
3. Review the authentication logs.
```

How-to Guides 的重点是可操作性。读者读完后应该能完成一件具体事情。

## 三者如何配合

一个完整的产品文档体系通常会同时包含这三类内容。

以 API authentication 为例：

- Product Content：列出支持的认证方式，例如 API key、OAuth、JWT。
- General Product Prose：解释每种认证方式适合什么场景，以及为什么要使用认证。
- How-to Guide：一步一步教用户创建 API key 并把它加到请求 header 中。

再以 SaaS 产品的权限管理为例：

- Product Content：列出角色、权限项和限制。
- General Product Prose：解释 role-based access control 的概念和价值。
- How-to Guide：教管理员如何创建角色、分配权限、邀请用户。

## 写作时的判断方法

如果内容主要是在列事实、功能、参数或限制，它更像 Product Content。

如果内容主要是在解释概念、价值、背景或场景，它更像 General Product Prose。

如果内容主要是在指导用户按步骤完成任务，它更像 How-to Guide。

## 一句话总结

Product Content 偏事实说明，General Product Prose 偏概念解释，How-to Guides 偏任务操作。

## 英文表达

> Product content describes what a product offers, general product prose explains what the product or feature means and why it matters, and how-to guides show users how to complete specific tasks.
