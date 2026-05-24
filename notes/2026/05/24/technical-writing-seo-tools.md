# Technical Writing 中的 SEO 工具：Trends、Keyword Planner 与 Analytics

## 核心结论

在 Technical Writing 的 SEO 工作流里，Google Trends、Google Keyword Planner 和 Google Analytics 分别服务于不同阶段：

```text
Google Trends 选方向
Google Keyword Planner 定关键词
Google Analytics 看效果
```

它们的关系不是互相替代，而是形成一个从“写什么”到“怎么写”再到“写完后效果如何”的闭环。

## 三个工具分别解决什么问题

| 工具 | 主要问题 | 使用阶段 | 数据重点 |
| --- | --- | --- | --- |
| Google Trends | 这个话题最近是不是变热？不同术语谁更流行？ | 选题前 | 相对搜索热度、时间趋势、地区差异 |
| Google Keyword Planner | 用户具体会搜哪些关键词？搜索量和竞争如何？ | 写作准备阶段 | 搜索量范围、关键词建议、竞争程度、预测 |
| Google Analytics | 用户实际上如何访问和使用我的文档？ | 发布后 | 页面访问、流量来源、停留、互动、转化 |

## Google Trends：选题和趋势判断

Google Trends 适合在写作前使用，用来判断某个技术话题是否值得优先写。

它可以帮助 technical writer 比较不同技术术语的热度，例如：

```text
API key
OAuth
JWT
SSO
```

如果某个术语的搜索兴趣持续上升，说明用户对这个话题的关注度正在增加。这时可以考虑优先写入门指南、概念解释、迁移指南或 troubleshooting 文档。

注意：Google Trends 通常展示的是相对热度，不是精确搜索量。它更适合看趋势和比较方向。

## Google Keyword Planner：关键词规划

当已经确定要写某个主题后，可以用 Google Keyword Planner 进一步决定文档应该围绕哪些关键词展开。

例如已经决定写 API authentication，可以比较：

```text
API authentication
API key authentication
how to use API key
OAuth authentication tutorial
```

这些关键词可以影响：

- 文档标题
- 小标题
- Introduction
- FAQ
- Meta description
- URL slug
- 示例和 troubleshooting 的表达方式

Keyword Planner 更偏向关键词需求和广告投放场景，但对技术写作也有帮助，因为它能让作者看到用户实际搜索时使用的语言。

## Google Analytics：发布后的效果分析

Google Analytics 主要用于文档发布之后，分析真实用户行为。

在技术文档中，它可以帮助回答：

- 哪些页面访问量高？
- 用户从 Google、GitHub、官网还是其他渠道进入？
- 用户进入页面后有没有继续阅读？
- 哪些页面停留时间短或跳出率高？
- 用户是否点击了示例代码、下载链接或相关文档？
- 用户是否提交反馈、搜索站内内容或访问 troubleshooting 页面？

这类数据可以帮助作者判断文档是否真的解决了用户问题，而不是只看文档是否已经写完。

## 在写作流程中的位置

| 阶段 | 使用工具 | 目的 |
| --- | --- | --- |
| 选题前 | Google Trends | 判断话题趋势和用户关注方向 |
| 写作准备 | Google Keyword Planner | 选择关键词，决定标题和内容角度 |
| 写作与发布 | 根据关键词组织内容 | 把用户搜索语言融入文档结构 |
| 发布后 | Google Analytics | 查看真实访问和互动数据 |
| 后续优化 | Analytics + Search Console | 发现表现差的页面、补充缺失内容 |

## Technical Writing 示例

假设要写一组 API 登录相关文档：

1. 先用 Google Trends 比较 `API key`、`OAuth`、`JWT` 的搜索趋势，判断哪个主题更值得优先写。
2. 再用 Google Keyword Planner 比较 `how to use API key`、`API key authentication`、`OAuth tutorial` 等关键词。
3. 根据关键词写出更接近用户搜索习惯的标题和结构，例如 `How to Use an API Key`。
4. 发布后用 Google Analytics 查看页面访问量、来源、停留时间和相关链接点击情况。
5. 如果访问量高但停留时间短，可能说明页面标题吸引人，但内容没有真正解决问题。

## 一句话总结

Google Trends 帮助 technical writer 判断“用户现在关心什么方向”；Google Keyword Planner 帮助判断“用户会用什么词搜索”；Google Analytics 帮助判断“用户实际如何使用已经发布的文档”。

## 英文表达

> Google Trends is used in the topic research stage to identify emerging or popular topics, Google Keyword Planner is used in the keyword planning stage to choose search terms and shape content structure, and Google Analytics is used after publication to measure user behavior and improve documentation performance.

## 参考

- [Google Trends Help](https://support.google.com/trends/)
- [Google Keyword Planner Help](https://support.google.com/google-ads/answer/7337243)
- [Google Analytics Help](https://support.google.com/analytics/)
- [Google Search Console Performance report](https://support.google.com/webmasters/answer/7576553)
