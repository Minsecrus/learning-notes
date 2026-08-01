# 第六章 贝叶斯网络

## 本章解决什么问题

现实中的智能体经常无法确定世界处于哪个状态，只能根据带噪证据维护概率信念。

贝叶斯网络（Bayesian Network，Bayes Net）用有向无环图表示随机变量之间的直接概率依赖，并把庞大的联合分布分解成多个局部条件概率表。

本章回答四个问题：

1. 怎样从概率规则计算查询结果？
2. 怎样用图结构紧凑表示联合分布？
3. 怎样从图判断条件独立？
4. 精确推断太贵时，怎样用采样近似？

## 概率基础

### 随机变量与分布

离散随机变量 $X$ 可以取值 $x_1,\ldots,x_k$，概率分布满足：

$$
P(X=x_i)\ge0,
\qquad
\sum_{i=1}^{k}P(X=x_i)=1
$$

为简化记号，经常用 $P(x)$ 表示 $P(X=x)$，用 $P(\neg x)$ 表示布尔变量 $X$ 为假的概率。

### 联合分布

联合分布给出多个变量同时取值的概率：

$$
P(X,Y)
$$

若 $X$ 有 $m$ 种取值，$Y$ 有 $n$ 种取值，完整联合表需要 $mn$ 个条目。变量数量增加时，表大小按各值域大小相乘。

### 边缘化

从联合分布中消去不关心的变量：

$$
P(x)=\sum_yP(x,y)
$$

更一般地：

$$
P(X)=\sum_Y P(X,Y)
$$

这称为 marginalization 或 sum out。

### 条件概率

$$
P(x\mid y)=\frac{P(x,y)}{P(y)}
$$

因此乘法规则为：

$$
P(x,y)=P(x\mid y)P(y)
$$

### 链式法则

对 $n$ 个变量：

$$
P(x_1,\ldots,x_n)
=\prod_{i=1}^{n}P(x_i\mid x_1,\ldots,x_{i-1})
$$

链式法则总是成立，但直接使用时，后面的条件概率表仍可能非常大。

### Bayes 定理

$$
P(x\mid y)=\frac{P(y\mid x)P(x)}{P(y)}
$$

若只需要比较不同 $x$ 的相对概率，可以写成：

$$
P(x\mid y)\propto P(y\mid x)P(x)
$$

最后再归一化，使所有 $x$ 的概率之和为 1。

## 独立与条件独立

### 独立

若：

$$
P(x,y)=P(x)P(y)
$$

则 $X$ 与 $Y$ 独立，记作：

$$
X\perp Y
$$

等价地，在概率有定义时：

$$
P(x\mid y)=P(x)
$$

### 条件独立

若给定 $Z$ 后：

$$
P(x,y\mid z)=P(x\mid z)P(y\mid z)
$$

则记作：

$$
X\perp Y\mid Z
$$

两个变量可能边缘相关，却在给定第三个变量后独立；也可能原本独立，却在观察第三个变量后变得相关。

条件独立是贝叶斯网络压缩分布和高效推断的基础。

## 概率查询

一个典型查询写成：

$$
P(Q\mid e)
$$

- $Q$：query variable，查询变量。
- $e$：evidence，已经观察到的证据。
- 其余变量：hidden variables，需要被边缘化。

### 直接枚举

若有完整联合分布，可以：

1. 保留与证据一致的行。
2. 对隐藏变量求和。
3. 对查询变量的结果归一化。

用归一化常数 $\alpha$ 表示：

$$
P(Q\mid e)=\alpha P(Q,e)
$$

其中：

$$
\alpha=\frac{1}{\sum_qP(q,e)}
$$

完整联合表随变量数指数增长，贝叶斯网络通过条件独立结构避免显式存储它。

## 贝叶斯网络的组成

一个 Bayes Net 包含：

1. 一组随机变量。
2. 一张有向无环图（DAG）。
3. 每个变量在给定父节点时的条件概率分布。

若 $\operatorname{Pa}(X_i)$ 表示 $X_i$ 的父节点集合，则联合分布分解为：

$$
P(x_1,\ldots,x_n)
=\prod_{i=1}^{n}P(x_i\mid \operatorname{Pa}(X_i))
$$

### 一个简单网络

```text
Rain ─────→ WetGrass
   ╲         ↑
    ╲        │
     → Sprinkler
```

一种可能结构是：

```text
Rain → Sprinkler
Rain → WetGrass
Sprinkler → WetGrass
```

联合分布分解为：

$$
P(R,S,W)=P(R)P(S\mid R)P(W\mid R,S)
$$

如果三个布尔变量直接使用完整联合表，需要 $2^3$ 个条目；利用结构后，只需保存局部概率表中的独立参数。

## 图结构表达什么

一条边通常表示直接概率依赖。没有边则可能表达某种条件独立，但不能简单理解成“没有连接就独立”。是否独立需要结合整条路径和已观察变量判断。

### 局部马尔可夫性质

给定一个节点的父节点后，该节点与它所有非后代节点条件独立。

$$
X_i\perp \operatorname{NonDescendants}(X_i)
\mid \operatorname{Pa}(X_i)
$$

这是联合分布能够按父节点条件概率分解的核心语义。

### 网络结构不必等同因果结构

有向边经常按照因果方向建模，因为这样较自然，也便于干预推理。但一般 Bayes Net 首先是概率分布的分解结构；只凭观察分布和箭头，不能自动得到完整因果结论。

## D-Separation

D-Separation 用图结构判断两个变量在给定证据后是否条件独立。

理解它的关键是三种基本三节点结构。

## Causal Chain

```text
X → Y → Z
```

没有观察 $Y$ 时，关于 $X$ 的信息可以通过 $Y$ 影响对 $Z$ 的信念，路径处于 active 状态。

观察 $Y$ 后，路径被阻断：

$$
X\perp Z\mid Y
$$

直觉：一旦知道中间状态 $Y$，更早的 $X$ 不再为预测 $Z$ 提供额外信息。

## Common Cause

```text
X ← Y → Z
```

$Y$ 是共同原因。未观察 $Y$ 时，$X$ 会为 $Y$ 提供间接信息，进而改变对 $Z$ 的判断。

观察 $Y$ 后：

$$
X\perp Z\mid Y
$$

例如天气同时影响是否带伞和路面是否湿。看到有人带伞会改变对路面湿润的判断；若天气已经明确，带伞不再提供额外信息。

## Common Effect

```text
X → Y ← Z
```

$Y$ 是 collider 或共同结果。

未观察 $Y$ 及其后代时，这条路径被阻断，$X$ 与 $Z$ 可以独立：

$$
X\perp Z
$$

观察 $Y$ 后，路径反而被打开，$X$ 与 $Z$ 条件相关：

$$
X\not\perp Z\mid Y
$$

例如：

```text
能力 → 被录取 ← 推荐关系
```

在总体人群中，能力与推荐关系可以独立。已知某人被录取后，若进一步知道其能力较弱，就会提高“可能有强推荐”的信念。这称为 explaining away。

观察 collider 的后代也可能打开路径，因为后代为 collider 提供了信息。

## 一般 D-Separation 判断

要判断 $X$ 与 $Y$ 在证据集合 $Z$ 下是否独立：

1. 找出 $X$ 与 $Y$ 之间的所有无向路径。
2. 把每条路径分解成 chain、fork 或 collider 三元组。
3. 对 chain 或 fork，若中间节点被观察，路径阻断。
4. 对 collider，若该节点及其所有后代都未观察，路径阻断。
5. 若所有路径都被阻断，则 $X$ 与 $Y$ 被 $Z$ d-separated。

$$
X\text{ 与 }Y\text{ 被 }Z\text{ d-separated}
\Longrightarrow X\perp Y\mid Z
$$

### Bayes Ball 直觉

也可以想象信息球沿图传播：

- 观察到的 chain/fork 节点会挡住传播。
- 未观察的 collider 会挡住传播。
- collider 或其后代被观察后，相关路径被打开。

## Markov Blanket

节点 $X$ 的 Markov blanket 包括：

- $X$ 的父节点
- $X$ 的子节点
- $X$ 子节点的其他父节点

给定 Markov blanket 后，$X$ 与网络中的其他所有节点条件独立：

$$
X\perp \text{其余节点}\mid \operatorname{MB}(X)
$$

这使 Gibbs sampling 在更新一个变量时只需查看局部邻域。

## 精确推断

精确推断要计算准确的后验分布。朴素枚举会重复计算大量相同乘积，Variable Elimination 使用因子复用中间结果。

## Factor

因子（factor）是若干变量到非负数的函数：

$$
f(X_1,\ldots,X_k)
$$

条件概率表可以看作因子。推断过程中产生的中间因子不一定是归一化概率分布。

### Join

两个因子相乘，得到作用域并集上的新因子：

$$
h(X,Y,Z)=f(X,Y)g(Y,Z)
$$

对每个兼容赋值：

$$
h(x,y,z)=f(x,y)g(y,z)
$$

### Eliminate

从因子中消去变量 $Y$：

$$
g(X,Z)=\sum_y f(X,y,Z)
$$

## Variable Elimination

计算 $P(Q\mid e)$ 时：

1. 把证据代入所有相关 CPT，缩小因子。
2. 选择一个隐藏变量消元顺序。
3. 对当前隐藏变量 $X$，连接所有包含 $X$ 的因子。
4. 从连接结果中对 $X$ 求和。
5. 把新因子放回集合。
6. 连接剩余因子并对查询结果归一化。

```text
for hidden variable X in elimination_order:
    related = 所有包含 X 的 factors
    joined = JOIN(related)
    new_factor = SUM_OUT(X, joined)
    用 new_factor 替换 related
```

### 消元顺序决定效率

不同消元顺序得到相同查询答案，却会产生大小完全不同的中间因子。

若一次 join 产生含有很多变量的因子，表大小按这些变量的值域乘积增长。好的顺序尽量避免在中间步骤形成大 clique。

常见启发式包括：

- Min-Degree：优先消去当前连接邻居最少的变量。
- Min-Fill：优先消去造成新增邻接边最少的变量。

精确推断的一般复杂度与图的 treewidth 指数相关。

## 近似推断

网络较大时，精确推断可能不可行。采样方法通过生成许多完整或局部样本，用频率估计概率。

## Prior Sampling

按拓扑顺序采样每个变量：

1. 先采样无父节点变量。
2. 再根据已经采样的父节点值，从 CPT 采样子节点。
3. 直到得到一个完整世界样本。

生成样本的概率正好等于 Bayes Net 的联合分布。

若要估计无条件概率 $P(Q=q)$，可以统计样本频率。

## Rejection Sampling

估计 $P(Q\mid e)$ 时：

1. 从先验生成完整样本。
2. 丢弃与证据 $e$ 不一致的样本。
3. 在剩余样本中统计查询变量频率。

它实现简单，但证据概率很低时会丢弃绝大多数样本，效率极差。

如果：

$$
P(e)=10^{-6}
$$

平均需要约一百万个先验样本才能保留一个与证据一致的样本。

## Likelihood Weighting

Likelihood Weighting 固定证据变量，不再随机采样它们：

1. 初始化权重 $w=1$。
2. 按拓扑顺序处理节点。
3. 若节点是证据变量，固定其值，并令 $w$ 乘以该证据在父节点取值下的概率。
4. 若节点不是证据变量，按其 CPT 采样。

样本权重为：

$$
w=\prod_{E_i\in E}P(e_i\mid \operatorname{Pa}(E_i))
$$

最后按权重累计查询变量，再归一化。

它不会像 rejection sampling 那样直接丢弃样本，但证据很多或证据位于网络下游时，权重可能高度不均匀，导致有效样本数很低。

## Gibbs Sampling

Gibbs Sampling 是 Markov Chain Monte Carlo 方法：始终保持一个与证据一致的完整赋值，每次只重新采样一个非证据变量。

步骤：

1. 固定证据变量。
2. 随机初始化所有非证据变量。
3. 随机选择一个非证据变量 $X$。
4. 根据 $X$ 在其 Markov blanket 条件下的分布重新采样。
5. 重复并统计后期样本。

更新分布为：

$$
P(X\mid \operatorname{MB}(X))
$$

由于给定 Markov blanket 后，其他节点与 $X$ 条件独立，所以无需计算完整网络。

### Burn-In 与相关性

连续 Gibbs 样本彼此相关，初始样本也可能受随机初始化影响。实践中常：

- 丢弃前若干步作为 burn-in。
- 隔若干步记录一次样本。
- 运行多条独立链检查结果是否一致。

如果状态空间存在难以跨越的模式，链可能混合很慢。

## 采样方法对比

| 方法 | 怎样处理证据 | 优点 | 主要问题 |
| --- | --- | --- | --- |
| Prior Sampling | 不专门处理 | 简单，正确生成联合分布样本 | 不适合条件概率中的稀有证据 |
| Rejection Sampling | 丢弃不一致样本 | 概念直接 | 证据稀有时浪费严重 |
| Likelihood Weighting | 固定证据并加权 | 每个样本都被利用 | 权重退化 |
| Gibbs Sampling | 固定证据，反复重采样隐藏变量 | 每步只需局部计算 | 样本相关，可能混合缓慢 |

## 一个推断思路示例

假设网络为：

```text
Burglary → Alarm ← Earthquake
             ↓
            Call
```

观察到有人打来电话 $Call=true$，查询入室盗窃概率：

$$
P(Burglary\mid Call=true)
$$

精确推断会：

1. 将 $Call=true$ 代入 $P(Call\mid Alarm)$。
2. 对隐藏变量 $Earthquake$ 与 $Alarm$ 进行 join 和 sum out。
3. 得到关于 $Burglary$ 的未归一化因子。
4. 归一化两个布尔取值。

采样推断则可以固定或筛选 $Call=true$，用大量样本估计 $Burglary$ 的后验频率。

## 常见误区

### 图中没有直接边不代表边缘独立

两个节点可能通过中间路径相关。需要结合路径类型和证据应用 D-Separation。

### 观察 collider 会产生相关性

chain 和 fork 的中间节点被观察后会阻断路径；collider 的行为相反。把三种结构混在一起是最常见错误之一。

### 因子不一定是概率分布

中间因子可能没有归一化，数值和也不等于 1。完成查询后再归一化。

### Variable Elimination 的答案与顺序无关，成本与顺序高度相关

任何合法消元顺序都会得到相同后验；中间因子大小可能相差几个数量级。

### 近似结果需要不确定性评估

样本数、有效样本数、链混合和多次运行差异都应检查。输出一个小数并不能证明估计已经可靠。

## 本章速记

```text
Bayes Net = DAG + 每个节点给定父节点的 CPT
联合分布 = 所有局部条件概率的乘积

chain / fork：观察中间节点会阻断
collider：未观察时阻断，观察自身或后代后打开

精确推断：Join → Eliminate → Normalize
消元顺序决定中间因子大小

Prior：直接采样
Rejection：丢弃不符合证据的样本
Likelihood Weighting：固定证据并加权
Gibbs：给定 Markov blanket 反复重采样
```

[上一章：强化学习](./05-reinforcement-learning.md) · [返回合集](../cs188-introduction-to-ai.md) · [下一章：决策网络与完美信息价值](./07-decision-networks-and-vpi.md)
