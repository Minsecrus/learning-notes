# 第三章 博弈

## 本章解决什么问题

普通搜索假设环境按照固定转移规则响应行动。博弈（games）进一步加入其他决策者：自己的结果取决于自己的行动，也取决于对手如何行动。

```text
搜索：我选行动，环境按规则转移
博弈：我选行动，对手也会主动选择行动
```

本章研究确定性对抗搜索、随机对手建模、剪枝、评估函数和蒙特卡洛树搜索。

## 博弈问题的形式化

一个顺序博弈通常包含：

- 状态集合 $S$
- 初始状态 $s_0$
- 当前行动者函数 $\operatorname{Player}(s)$
- 合法行动集合 $A(s)$
- 状态转移函数 $\operatorname{Result}(s,a)$
- 终止测试 $\operatorname{Terminal}(s)$
- 每个行动者的效用函数 $U_i(s)$

博弈树的节点表示状态，边表示行动。节点类型由当前轮到谁行动决定。

### 零和博弈

双人零和博弈中，一方收益等于另一方损失：

$$
U_1(s)=-U_2(s)
$$

因此只需要维护一个标量效用：MAX 希望把它最大化，MIN 希望把它最小化。

### 完美信息与确定性

经典 Minimax 通常假定：

- 双方能看到完整状态
- 行动结果确定
- 双方轮流行动
- 双方知道规则和效用
- 双方都会作出对自己最优的选择

扑克等游戏含有隐藏信息，掷骰子等游戏含有随机转移，需要更一般的模型。

## Minimax

Minimax 用于双人、零和、确定性、完全可观测博弈。

它的核心思想是：

```text
MAX：选择后继价值最大的行动
MIN：选择后继价值最小的行动
```

状态价值递归定义为：

$$
V(s)=
\begin{cases}
U(s), & s\text{ 是终止状态}\\
\max\limits_{a\in A(s)}V(\operatorname{Result}(s,a)), & \operatorname{Player}(s)=\text{MAX}\\
\min\limits_{a\in A(s)}V(\operatorname{Result}(s,a)), & \operatorname{Player}(s)=\text{MIN}
\end{cases}
$$

MAX 在根节点选择：

$$
a^*=\operatorname*{arg\,max}_{a\in A(s_0)}V(\operatorname{Result}(s_0,a))
$$

### 为什么取最坏情况

MAX 选择一个行动后，MIN 会从对应子树中选择对 MAX 最不利的分支。MAX 因此比较的是每个行动在最强对手面前能够保证的结果。

这是一种保守决策：只要模型假设成立，无论对手怎样行动，结果都不会低于 Minimax 计算出的保证值。

### 伪代码

```text
MINIMAX-VALUE(state):
    if state 是终止状态:
        return Utility(state)

    if 当前是 MAX:
        return max(MINIMAX-VALUE(child))

    if 当前是 MIN:
        return min(MINIMAX-VALUE(child))
```

若分支因子为 $b$、搜索深度为 $m$：

$$
\text{时间}=O(b^m),\qquad \text{空间}=O(bm)
$$

深度优先递归只需保存当前路径及各层少量兄弟节点，所以空间远小于完整树大小。

## Alpha-Beta 剪枝

Alpha-Beta Pruning 在不改变 Minimax 结果的前提下，跳过不可能影响最终选择的分支。

搜索过程中维护两个界：

- $\alpha$：MAX 沿当前路径已经能保证的最好值。
- $\beta$：MIN 沿当前路径已经能保证的最好值。

### 在 MIN 节点剪枝

假设 MAX 已经有一个值为 $\alpha$ 的选择。当前另一个分支进入 MIN 节点后，只要发现某个子节点值 $v\le\alpha$，MIN 就能把该分支压到不高于 $\alpha$。

MAX 已经有更好的选择，因此该 MIN 节点剩余子节点无需继续计算。

### 在 MAX 节点剪枝

对称地，若上层 MIN 已经能够保证值不高于 $\beta$，当前 MAX 节点一旦找到 $v\ge\beta$，MIN 就不会选择这个分支，可以剪掉剩余子节点。

### 剪枝条件

当出现：

$$
\alpha\ge\beta
$$

当前剩余分支已经无法影响祖先选择，可以停止展开。

### 伪代码框架

```text
MAX-VALUE(state, alpha, beta):
    value = -∞
    for child in children(state):
        value = max(value, MIN-VALUE(child, alpha, beta))
        if value >= beta:
            return value
        alpha = max(alpha, value)
    return value

MIN-VALUE(state, alpha, beta):
    value = +∞
    for child in children(state):
        value = min(value, MAX-VALUE(child, alpha, beta))
        if value <= alpha:
            return value
        beta = min(beta, value)
    return value
```

### 行动顺序的重要性

Alpha-Beta 的结果与节点访问顺序无关，运行速度却高度依赖顺序：

- 最坏排序仍需 $O(b^m)$。
- 理想排序下约为 $O(b^{m/2})$。

理想情况下，同样计算预算可以把搜索深度大致翻倍。实践中常使用评估函数、历史最佳着法或迭代加深来优先搜索看起来更好的行动。

## 深度限制与评估函数

真实游戏树通常无法搜索到终局。深度受限搜索在某个深度停止，并用评估函数（evaluation function）估计非终止状态的价值：

$$
\operatorname{Eval}(s)\approx \text{从状态 }s\text{ 出发的真实博弈价值}
$$

评估函数常写成特征的加权和：

$$
\operatorname{Eval}(s)=\sum_{i=1}^{k}w_i f_i(s)
$$

例如棋类特征可能包括：

- 棋子数量与价值
- 王的安全程度
- 中心控制
- 可行动空间
- 距离获胜条件的进度

### 评估函数的要求

好的评估函数需要：

- 与最终胜负或效用相关
- 计算足够快
- 在双方视角下保持一致的正负方向
- 能区分关键战术状态

评估函数很精确但计算太慢，会降低可搜索深度；评估很快但噪声太大，又会误导决策。

### Horizon Effect

深度限制可能把即将发生的灾难推到搜索边界之外，这称为 horizon effect。常见缓解方式包括：

- 对战术剧烈状态继续进行 quiescence search
- 使用迭代加深
- 改进评估特征
- 延伸明显的强制行动序列

## Expectimax

Minimax 把其他节点视为最坏情况选择者。如果某些结果来自随机过程，或对手按照已知概率行动，可以使用 Expectimax。

Expectimax 有两种主要节点：

- MAX 节点：选择最大价值行动。
- Chance 节点：按照概率对后继价值求期望。

递归定义为：

$$
V(s)=
\begin{cases}
U(s), & s\text{ 是终止状态}\\
\max\limits_{a\in A(s)}V(\operatorname{Result}(s,a)), & s\text{ 是 MAX 节点}\\
\sum\limits_{a\in A(s)}P(a\mid s)V(\operatorname{Result}(s,a)), & s\text{ 是 Chance 节点}
\end{cases}
$$

### Minimax 与 Expectimax 的决策风格

```text
Minimax：这个行动在最坏对手面前能保证多少？
Expectimax：按照对手或环境模型，平均能得到多少？
```

Expectimax 可能接受有小概率失败、但期望收益更高的行动。效用数值之间的间距会影响期望，因此它对效用尺度比 Minimax 更敏感。

### 概率必须来自模型

Chance 节点需要 $P(a\mid s)$。若没有依据就假设各行动等概率，计算得到的是“均匀随机对手下的最优策略”，未必适合真实对手。

## 混合节点类型

一个博弈树可以混合多种节点：

```text
自己的选择：MAX
理性对手：MIN
骰子或随机事件：Chance
另一个合作伙伴：可能也是 MAX，但使用团队效用
```

递归规则由节点语义决定。建模的关键是明确：每个节点由谁控制，控制者优化什么，随机事件服从什么分布。

## 一般博弈

### 多人效用

一般博弈中，终止状态可以返回效用向量：

$$
U(s)=(U_1(s),U_2(s),\ldots,U_n(s))
$$

轮到玩家 $i$ 时，它选择使第 $i$ 个分量最大的行动。各方收益不必互为相反数，可能合作、竞争或同时存在共同与冲突目标。

### 策略与均衡

策略描述玩家在所有可能状态下如何行动。一般和博弈中，“每个节点都简单取自己的最大值”未必充分描述长期互动，还可能需要研究最佳响应、混合策略和 Nash equilibrium。

本章重点仍是树搜索：给定对手和随机事件模型，计算当前行动的后续价值。

## 蒙特卡洛树搜索

当分支很多、搜索深度很大，而且可以快速模拟一局游戏时，可以使用 Monte Carlo Tree Search（MCTS）。它不要求预先展开完整博弈树，而是把计算集中到看起来有希望的分支。

一次迭代包含四步：

1. Selection：从根开始，根据树策略选择子节点。
2. Expansion：到达尚未完全展开的节点后，加入一个或多个子节点。
3. Simulation：从新节点出发，用 rollout policy 模拟到终局或截断点。
4. Backpropagation：把模拟结果沿路径回传，更新访问次数和价值统计。

### 探索与利用

Selection 需要平衡：

- 利用（exploitation）：继续访问平均结果好的节点。
- 探索（exploration）：尝试访问次数少、仍不确定的节点。

常见 UCB 形式为：

$$
\operatorname{UCB}(j)=\bar X_j+c\sqrt{\frac{\ln N}{n_j}}
$$

- $\bar X_j$：子节点 $j$ 的平均回报。
- $n_j$：子节点访问次数。
- $N$：父节点访问次数。
- $c$：探索强度。

第一项偏好当前表现好的节点，第二项偏好尚未充分探索的节点。

### MCTS 的特点

- 可以随时停止并返回当前统计上最好的行动。
- 不需要完整枚举巨大状态空间。
- 模拟策略和价值回传方式会明显影响效果。
- 访问次数有限时，统计结果带有噪声。
- 在对抗游戏中，回传价值需要始终明确是从哪一方视角计算。

## 方法对比

| 方法 | 其他分支的含义 | 需要的模型 | 主要优点 | 主要限制 |
| --- | --- | --- | --- | --- |
| Minimax | 对手选择最坏结果 | 对手完全理性 | 有最坏情况保证 | 树规模指数增长 |
| Alpha-Beta | 与 Minimax 相同 | 同上 | 保持结果并减少展开 | 高度依赖行动排序 |
| Expectimax | 随机事件或概率对手 | 需要概率分布 | 优化期望效用 | 模型错误会误导结果 |
| MCTS | 用随机模拟估计 | 可执行模拟器 | 按需扩展、可随时停止 | 统计方差与模拟质量问题 |

## 常见误区

### Alpha-Beta 不会改变 Minimax 答案

它只跳过已经证明不会影响祖先选择的分支。若实现后答案发生变化，通常是边界更新、节点类型或返回值处理有误。

### Chance 节点取期望，MIN 节点取最小

两类节点表达完全不同的世界假设。把随机对手写成 MIN 会过度保守，把理性对手写成均匀 Chance 又会过度乐观。

### Expectimax 通常不能直接使用 Alpha-Beta

期望值由所有带非零概率的子节点共同决定。只看到部分子节点时，通常无法像 min/max 那样建立足够强的界进行安全剪枝。

### MCTS 的回报视角必须统一

如果一次模拟结果在不同深度交替解释，却没有正确转换玩家视角，访问统计会失去意义。

## 本章速记

```text
Minimax：MAX 取最大，MIN 取最小
Alpha-Beta：alpha >= beta 时可剪枝
Evaluation：深度不足时估计状态价值
Expectimax：Chance 节点按概率求期望
MCTS：Selection → Expansion → Simulation → Backpropagation

对手模型决定节点类型：
最强对手用 MIN
概率行为用 Chance
自己的选择用 MAX
```

[上一章：约束满足问题](./02-constraint-satisfaction-problems.md) · [返回合集](../cs188-introduction-to-ai.md) · [下一章：马尔可夫决策过程](./04-markov-decision-processes.md)
