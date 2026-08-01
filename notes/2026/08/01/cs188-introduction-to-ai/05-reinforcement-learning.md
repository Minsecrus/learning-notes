# 第五章 强化学习

## 本章解决什么问题

在马尔可夫决策过程中，智能体知道转移概率 $T$ 和奖励函数 $R$，因此可以在行动前完成规划。强化学习（Reinforcement Learning，RL）面对的是模型未知的环境：智能体只能通过实际交互收集经验，并逐渐学会获得更高长期回报的策略。

```text
观察状态 s
→ 选择行动 a
→ 环境转移到 s'
→ 收到奖励 r
→ 用经验更新知识
→ 继续行动
```

强化学习的核心难题是：为了获得奖励，需要利用当前已知的好行动；为了发现更好的行动，又必须主动探索。

## 基本术语

一次交互样本通常写成：

$$
(s,a,r,s')
$$

- $s$：行动前状态。
- $a$：执行的行动。
- $r$：环境返回的即时奖励。
- $s'$：行动后的状态。

从初始状态开始，持续交互直到终止状态的一段经历称为 episode：

$$
s_0,a_0,r_1,s_1,a_1,r_2,\ldots,s_T
$$

### 在线学习

智能体一边行动一边更新模型或价值，这称为 online learning。更新不必等待收集完全部数据。

### Model-Based 与 Model-Free

| 类别 | 学习什么 | 怎样得到策略 |
| --- | --- | --- |
| Model-Based | 估计 $\hat T$ 和 $\hat R$ | 把估计模型交给 Value Iteration 或 Policy Iteration |
| Model-Free | 直接估计 $V$、$Q$ 或策略 | 从经验更新价值或策略，不显式保存环境模型 |

模型能够支持规划、解释和反事实推演，但状态很多时，存储所有转移计数可能很昂贵。Model-Free 方法跳过完整环境模型，重点学习决策所需的信息。

## Model-Based Learning

假设记录每种转移出现的次数：

$$
N(s,a,s')
$$

则转移概率可以用频率估计：

$$
\hat T(s,a,s')=
\frac{N(s,a,s')}{\sum_x N(s,a,x)}
$$

奖励可以用相同转移下的样本平均值估计：

$$
\hat R(s,a,s')=
\frac{1}{N(s,a,s')}
\sum_{i:\,(s_i,a_i,s'_i)=(s,a,s')}r_i
$$

得到 $\hat T$ 和 $\hat R$ 后，就形成一个估计 MDP，可以使用上一章的动态规划算法求策略。

### 优点

- 环境模型可以重复用于多个目标。
- 可以模拟尚未真实执行的行动。
- 便于检查智能体学到了怎样的环境规律。
- 在样本较少时，结构化模型可能提高数据利用率。

### 局限

- 需要保存大量状态—行动—后继计数。
- 模型误差会通过规划传播到策略。
- 连续或高维状态下不能简单使用完整计数表。
- 把模型学得非常精确，未必是获得好策略的最高效途径。

## Model-Free Learning

Model-Free 方法直接从经验估计价值，不显式构造 $T$ 与 $R$。本章依次介绍 Direct Evaluation、Temporal Difference Learning、Q-Learning 和 Approximate Q-Learning。

## Direct Evaluation

直接评估用于估计固定策略 $\pi$ 的状态价值。每次 episode 结束后，计算从状态 $s$ 出现位置开始的实际折扣回报：

$$
G_t=r_{t+1}+\gamma r_{t+2}+\gamma^2r_{t+3}+\cdots
$$

再对所有访问 $s$ 时观察到的回报求平均：

$$
V^\pi(s)\approx \frac{1}{N(s)}\sum_{i=1}^{N(s)}G_i(s)
$$

这类方法也称 Monte Carlo evaluation。

### 特点

- 不需要转移模型。
- 直接使用真实完整回报，目标容易理解。
- 通常要等 episode 结束后才能知道回报。
- 回报包含整条随机轨迹，方差可能很高。
- 只评估产生数据的策略。

## Temporal Difference Learning

时序差分学习（Temporal Difference Learning，TD）不等待完整 episode。每获得一步经验，就用当前对后继状态的估计构造目标：

$$
\operatorname{target}=r+\gamma V^\pi(s')
$$

TD error 为：

$$
\delta=r+\gamma V^\pi(s')-V^\pi(s)
$$

更新规则：

$$
V^\pi(s)\leftarrow V^\pi(s)+\alpha\delta
$$

等价地：

$$
V^\pi(s)\leftarrow
(1-\alpha)V^\pi(s)+
\alpha\left[r+\gamma V^\pi(s')\right]
$$

$\alpha\in[0,1]$ 是学习率。

### Bootstrapping

TD 目标中包含当前估计 $V(s')$，也就是用一个估计更新另一个估计，这称为 bootstrapping。

优点是可以立即更新，方差通常低于完整 Monte Carlo 回报；代价是目标带有当前模型偏差。

### 学习率

- $\alpha$ 大：快速响应新样本，但估计波动更大。
- $\alpha$ 小：更新稳定，但适应速度慢。
- 固定 $\alpha$：适合持续变化的环境，会保留对新经验的敏感度。
- 逐渐减小 $\alpha$：适合平稳环境中的收敛。

在经典随机逼近条件下，常要求：

$$
\sum_t\alpha_t=\infty,
\qquad
\sum_t\alpha_t^2<\infty
$$

直觉上，学习率要下降得足以抑制噪声，同时不能下降得太快，以免过早停止学习。

## Passive 与 Active Reinforcement Learning

### Passive RL

智能体被给定策略 $\pi$，任务是学习 $V^\pi$。Direct Evaluation 和本节形式的 TD Learning 都属于策略评估。

### Active RL

智能体还要决定采取什么行动，最终目标是找到最优策略。它需要学习行动价值并处理探索问题。

## Q-Learning

Q-Learning 直接学习最优行动价值 $Q^*(s,a)$，无需知道 $T$ 与 $R$。

观察样本 $(s,a,r,s')$ 后，构造 Q-target：

$$
\operatorname{target}=r+\gamma\max_{a'}Q(s',a')
$$

TD error：

$$
\delta=r+\gamma\max_{a'}Q(s',a')-Q(s,a)
$$

更新：

$$
Q(s,a)\leftarrow Q(s,a)+\alpha\delta
$$

或者写成移动平均形式：

$$
Q(s,a)\leftarrow
(1-\alpha)Q(s,a)+
\alpha\left[r+\gamma\max_{a'}Q(s',a')\right]
$$

### 为什么不需要环境模型

Bellman 最优方程原本需要对所有后继状态按 $T(s,a,s')$ 求期望。Q-Learning 使用真实交互得到的 $s'$ 作为一次随机样本。大量样本的更新会逐渐逼近期望。

### 从 Q 值得到策略

$$
\pi(s)\in\operatorname*{arg\,max}_a Q(s,a)
$$

这一步不需要再次查询转移模型。

### Off-Policy

Q-Learning 的行为策略可以探索、随机甚至暂时很差，更新目标仍然使用：

$$
\max_{a'}Q(s',a')
$$

它学习的是贪心目标策略的价值，而数据可以来自另一种行为策略，因此称为 off-policy learning。

TD policy evaluation 则学习实际所遵循策略的价值，属于 on-policy 思路。

### 收敛所需条件

表格型 Q-Learning 的经典收敛结论通常要求：

- 有限状态和行动空间。
- 环境平稳并满足马尔可夫性质。
- 每个 $(s,a)$ 被访问充分多次。
- 学习率按合适方式衰减。
- 奖励有界，$\gamma<1$ 或任务为适当的终止型任务。

“使用了 Q-Learning 更新式”本身不足以保证收敛；探索覆盖和步长条件同样重要。

## Approximate Q-Learning

表格型 Q-Learning 为每个 $(s,a)$ 单独保存数值：

```text
一个状态学到的经验
→ 只更新这一个状态—行动对
```

当状态空间巨大或连续时，智能体无法访问并存储所有组合。Approximate Q-Learning 使用特征表示，把相似状态共享到同一组参数中。

### 线性函数近似

为状态—行动对提取特征：

$$
f(s,a)=\left[f_1(s,a),\ldots,f_k(s,a)\right]
$$

使用线性模型：

$$
Q(s,a;w)=w^\top f(s,a)=\sum_{i=1}^{k}w_i f_i(s,a)
$$

仍然定义：

$$
\delta=r+\gamma\max_{a'}Q(s',a';w)-Q(s,a;w)
$$

每个权重更新为：

$$
w_i\leftarrow w_i+\alpha\delta f_i(s,a)
$$

向量形式：

$$
w\leftarrow w+\alpha\delta f(s,a)
$$

一次经验会更新所有被激活特征对应的权重，因此可以影响许多相似状态。

### 特征示例

Pacman 的特征可以包括：

- 是否会在下一步吃到食物
- 最近食物的距离
- 最近幽灵的距离
- 邻近幽灵数量
- 当前行动是否会进入死路

特征尺度差异过大时，单一学习率会造成训练不稳定，通常需要归一化。

### 泛化的代价

函数近似可以提高样本效率并减少存储，但不同状态通过共享参数相互影响。一处更新可能改善很多状态，也可能破坏之前学好的状态。

当 off-policy、bootstrapping 和函数近似同时出现时，训练可能不稳定，这三者的组合有时被称为 deadly triad。

## 探索与利用

### 为什么纯贪心会失败

如果智能体总选当前 $Q$ 最大的行动，早期随机获得较高回报的行动可能长期占据优势。其他行动没有被尝试，就永远没有机会证明自己更好。

### Epsilon-Greedy

$\varepsilon$-greedy 策略规定：

$$
a=
\begin{cases}
\text{随机合法行动}, & \text{概率 }\varepsilon\\
\operatorname*{arg\,max}_{a'}Q(s,a'), & \text{概率 }1-\varepsilon
\end{cases}
$$

- $\varepsilon$ 太大：学会后仍经常做随机行动。
- $\varepsilon$ 太小：早期探索不足。
- 常见做法是训练初期较大，随后逐渐衰减，同时保留足够覆盖。

评估最终策略时通常关闭探索，否则测量到的是带随机探索的行为表现。

### Exploration Function

另一种做法是给访问较少的状态—行动对增加探索奖励：

$$
f(s,a)=Q(s,a)+\frac{k}{N(s,a)}
$$

- $N(s,a)$：访问次数。
- $k$：探索强度。

行动按 $f(s,a)$ 选择。访问少时奖励较大；随着次数增加，探索项逐渐接近 0，选择越来越依赖 $Q$。

相应更新可以把后继动作的最大 $f$ 值放入目标：

$$
Q(s,a)\leftarrow(1-\alpha)Q(s,a)
+\alpha\left[r+\gamma\max_{a'}f(s',a')\right]
$$

实际系统还常使用 UCB、Boltzmann exploration、entropy regularization 或 intrinsic reward。

## 方法对比

| 方法 | 学习对象 | 是否需要完整 episode | 是否需要模型 | 是否直接求最优策略 |
| --- | --- | --- | --- | --- |
| Direct Evaluation | $V^\pi$ | 通常需要 | 否 | 否 |
| TD Learning | $V^\pi$ | 否 | 否 | 否 |
| Q-Learning | $Q^*$ | 否 | 否 | 是 |
| Model-Based | $\hat T,\hat R$ | 否 | 学习模型本身 | 通过规划得到 |
| Approximate Q-Learning | 参数化 $Q$ | 否 | 否 | 是，但有近似误差 |

## 常见误区

### 训练时的行动与更新目标可以不同

Q-Learning 可以执行随机探索行动，同时用后继状态中最大 $Q$ 构造更新目标。这正是 off-policy 的含义。

### 终止状态没有未来价值

若 $s'$ 是终止状态，目标通常为：

$$
\operatorname{target}=r
$$

实现时若继续读取终止状态的任意 Q 值，会把不存在的未来奖励加进更新。

### 奖励稀疏时，学习信号传播很慢

只有终局提供奖励时，Q 信息需要通过多次更新逐步向前传播。合理探索、eligibility traces、reward shaping 或模型规划可以缓解，但 shaping 必须避免改变真正目标。

### 学到高训练回报不代表策略稳健

需要在关闭探索、使用独立随机种子和不同初始状态时评估，并报告均值、方差与失败案例。

## 本章速记

```text
经验样本：(s, a, r, s')

Model-Based：学 T 和 R，再做规划
Direct Evaluation：平均完整回报
TD：r + gamma V(s')
Q-Learning：r + gamma max Q(s', a')
Approximate Q：Q = w · f

on-policy：学习实际行为策略
off-policy：行为可探索，目标仍是贪心策略

探索发现可能更好的行动
利用选择当前已知的好行动
```

[上一章：马尔可夫决策过程](./04-markov-decision-processes.md) · [返回合集](../cs188-introduction-to-ai.md) · [下一章：贝叶斯网络](./06-bayesian-networks.md)
