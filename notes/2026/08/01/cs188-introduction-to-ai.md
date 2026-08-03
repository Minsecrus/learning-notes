# CS 188 人工智能导论教程

## 这套教程是什么

这是一套系统介绍经典人工智能方法的中文教程，覆盖搜索、约束满足、博弈、马尔可夫决策过程、强化学习、贝叶斯网络、决策网络与信息价值、隐马尔可夫模型、机器学习和逻辑。

本目录中的十章正文依据用户提供的 `cs188.pdf` 按页翻译整理，保留原文的章节顺序、公式、算法说明、图注和 PDF 中实际嵌入的原始图片。PDF 没有嵌入的在线讲义外部图片不作为本地图片补造。

教程采用下面的讲解方式：

- 用中文讲解核心概念并保留常用英文术语
- 重新组织论述顺序，使章节之间的联系更清晰
- 保留重要公式、算法、复杂度和成立条件
- 用中文补充公式的直觉和常见误区
- 串联不同算法，说明它们分别解决了上一种方法的什么限制
- 将内容组织为可学习、可复习、可继续扩展的分章教程

同一术语存在多种中文名称时，正文会保留常用英文名称。理解算法时应同时关注它优化的目标、使用的信息、成立条件和失败方式。

## 适合哪些读者

- 已经掌握一种编程语言和基础数据结构，希望系统学习人工智能的人
- 学过部分算法或机器学习，希望补齐概率推断、决策和逻辑路线的人
- 正在构建智能体，希望理解搜索、状态、观测、策略和效用基础的人
- 需要复习经典 AI 课程核心公式、算法保证和常见误区的人

## 全书路线图

| 章节 | 核心问题 | 教程 |
| --- | --- | --- |
| 1. Search | 已知规则时，怎样找到通往目标的行动序列？ | [第一章 搜索](./cs188-introduction-to-ai/01-search.md) |
| 2. CSPs | 怎样利用约束快速排除不可能的组合？ | [第二章 约束满足问题](./cs188-introduction-to-ai/02-constraint-satisfaction-problems.md) |
| 3. Games | 当其他智能体也在决策时，怎样选择行动？ | [第三章 博弈](./cs188-introduction-to-ai/03-games.md) |
| 4. MDPs | 当行动结果带有随机性时，怎样规划长期策略？ | [第四章 马尔可夫决策过程](./cs188-introduction-to-ai/04-markov-decision-processes.md) |
| 5. RL | 不知道环境模型时，怎样从交互中学会行动？ | [第五章 强化学习](./cs188-introduction-to-ai/05-reinforcement-learning.md) |
| 6. Bayes Nets | 怎样表示概率依赖并进行精确或近似推断？ | [第六章 贝叶斯网络](./cs188-introduction-to-ai/06-bayesian-networks.md) |
| 7. Decision Networks and VPIs | 信息值多少钱，什么时候值得先观察再行动？ | [第七章 决策网络与完美信息价值](./cs188-introduction-to-ai/07-decision-networks-and-vpi.md) |
| 8. HMMs | 状态不可见、只有带噪观测时，怎样追踪状态？ | [第八章 隐马尔可夫模型](./cs188-introduction-to-ai/08-hidden-markov-models.md) |
| 9. ML | 怎样从带标签数据中学习分类或回归函数？ | [第九章 机器学习](./cs188-introduction-to-ai/09-machine-learning.md) |
| 10. Logic | 怎样用符号知识表示世界并进行可靠推理？ | [第十章 逻辑](./cs188-introduction-to-ai/10-logic.md) |

## 十章之间的关系

全书可以看成五次能力升级：

```text
确定性单智能体规划
  搜索 → 约束满足

多个行动者或随机结果
  博弈 → MDP

模型未知，需要从经验学习
  强化学习

状态与证据存在不确定性
  贝叶斯网络 → 决策网络 → HMM

从数据或符号知识获得能力
  机器学习 → 逻辑推理
```

另一种理解方式是观察“智能体知道多少”：

| 情形 | 已知信息 | 主要方法 |
| --- | --- | --- |
| 规则、状态和目标都已知 | 转移模型确定 | DFS、BFS、UCS、A* |
| 解由多个变量共同决定 | 变量、域和约束已知 | 回溯、过滤、变量排序 |
| 存在对手 | 对手会针对自己行动 | Minimax、Alpha-Beta |
| 行动结果随机 | 转移概率和奖励已知 | Value Iteration、Policy Iteration |
| 转移或奖励未知 | 只能通过交互获得样本 | TD、Q-Learning |
| 世界状态带有概率依赖 | 联合分布太大 | Bayes Net、Variable Elimination |
| 观察信息本身有成本 | 可在行动前购买信息 | Decision Network、VPI |
| 当前状态不可直接观察 | 有连续的带噪证据 | Forward、Viterbi、Particle Filtering |
| 规则需要从数据获得 | 有训练样本 | Naive Bayes、Perceptron、Regression、Neural Network |
| 知识以符号规则给出 | 有命题或一阶逻辑知识库 | DPLL、Resolution、Forward Chaining |

## 贯穿全书的智能体视角

第一章用 PEAS 描述任务环境：

```text
P：Performance measure，怎样衡量行动好坏
E：Environment，智能体所处的环境
A：Actuators，智能体能够执行的行动
S：Sensors，智能体能够获得的观测
```

后续各章都可以放回这个框架：

- 搜索和 CSP 主要研究如何根据已知模型选择行动或配置
- 博弈把其他智能体加入环境
- MDP 把随机转移加入环境
- 强化学习让转移和奖励需要通过传感器反馈估计
- 贝叶斯网络和 HMM 处理不完整、带噪的观测
- 决策网络把概率信念与效用结合
- 机器学习从观测样本中获得预测函数
- 逻辑用符号知识支持可解释推理

关于 PEAS 在现代软件智能体中的应用，可以继续阅读：[PEAS 在现代 Coding Harness 中的映射](./peas-in-modern-coding-harness.md)。

## 常用符号

| 符号 | 常见含义 |
| --- | --- |
| $s,s'$ | 当前状态与后继状态 |
| $a$ | 行动 |
| $S,A$ | 状态集合与行动集合 |
| $T(s,a,s')$ | 在 $s$ 执行 $a$ 后到达 $s'$ 的概率 |
| $R(s,a,s')$ | 一次转移得到的奖励 |
| $\gamma$ | 折扣因子 |
| $V(s)$ | 状态价值 |
| $Q(s,a)$ | 状态—行动价值 |
| $\pi(a\mid s)$ | 策略在状态 $s$ 选择行动 $a$ 的概率 |
| $P(X)$、$P(X\mid Y)$ | 概率与条件概率 |
| $x$ | 数据点、状态取值或变量取值，具体含义由章节决定 |
| $w$ | 模型参数或权重向量 |

同一个字母在不同章节可能承担不同角色，阅读公式时应先确认当前章节的定义。

## 建议学习顺序

如果第一次系统学习人工智能，可以按章节顺序阅读：

```text
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10
```

如果目标是理解现代智能体，可以优先走下面的路线：

```text
第一章 Agents 与 Search
→ 第四章 MDP
→ 第五章 Reinforcement Learning
→ 第六章 Bayes Nets
→ 第七章 Decision Networks
→ 第八章 HMM
```

如果目标是复习考试，建议每章完成三件事：

1. 能写出该章核心问题的形式化定义。
2. 能手算一个小例子，并解释每一步为什么成立。
3. 能说清算法保证成立所需的条件，以及换一个条件后哪里会失效。

## 学习边界

这套教程聚焦经典人工智能的基础模型与算法。计算机视觉、自然语言处理、生成模型、大语言模型、多模态学习和大规模深度学习工程需要在这些基础之上继续学习。

每章会覆盖定义、直觉、核心公式、算法步骤、成立条件和常见误区。真正掌握还需要动手实现算法，并在小规模例子上逐步计算中间结果。

## 参考与许可

教程路线参考 UC Berkeley [CS 188 在线教材](https://inst.eecs.berkeley.edu/~cs188/textbook/) 及其[公开源码](https://github.com/BerkeleyAI/textbook)。原教材主要作者为 Nikhil Sharma、Josh Hug、Jacky Liang 和 Henry Zhu，采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。本教程中的改编内容同样依 CC BY-SA 4.0 分享；UC Berkeley 与原作者不对本教程作背书。
