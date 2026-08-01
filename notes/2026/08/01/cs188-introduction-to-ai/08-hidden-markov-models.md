# 第八章 隐马尔可夫模型

## 本章解决什么问题

贝叶斯网络可以描述任意一组随机变量。隐马尔可夫模型（Hidden Markov Model，HMM）专门处理随时间变化的系统：真实状态会演化，但智能体无法直接看到它，只能获得带噪观测。

典型场景包括：

- 根据传感器读数追踪机器人位置
- 根据症状推断病人健康状态
- 根据声音信号推断语音单元
- 根据点击和停留行为推断用户意图
- 根据气象站读数推断天气模式

```text
隐藏状态随时间转移
      ↓
每个状态产生带噪观测
      ↓
智能体根据观测维护信念分布
```

## 时间序列中的变量

用 $X_t$ 表示时刻 $t$ 的隐藏状态，用 $E_t$ 表示该时刻的观测证据。

HMM 的图结构为：

```text
X1 → X2 → X3 → ... → Xt
↓     ↓     ↓           ↓
E1    E2    E3          Et
```

模型包含三部分：

1. 初始分布 $P(X_1)$。
2. 转移模型 $P(X_t\mid X_{t-1})$。
3. 观测模型 $P(E_t\mid X_t)$。

## Markov Model

先假设状态可直接观察，只研究状态如何随时间变化。这就是 Markov model 或 Markov chain。

### 一阶马尔可夫假设

$$
P(X_t\mid X_1,\ldots,X_{t-1})
=P(X_t\mid X_{t-1})
$$

给定上一时刻状态后，更早历史不会为预测下一状态提供额外信息。

### 平稳转移假设

常见 HMM 还假设转移规律不随时间改变：

$$
P(X_t\mid X_{t-1})
=P(X_{t+1}\mid X_t)
$$

这称为 time-homogeneous。若系统规律会随时间、季节或阶段改变，需要把时间模式加入状态，或使用非平稳模型。

## 分布如何向前传播

若当前信念为 $P(X_{t-1})$，则下一时刻预测分布为：

$$
P(x_t)=
\sum_{x_{t-1}}
P(x_t\mid x_{t-1})P(x_{t-1})
$$

这有时称为 mini-forward update。

### 矩阵形式

若用行向量 $b_t$ 表示状态分布，用矩阵 $T$ 表示转移概率，则：

$$
b_t=b_{t-1}T
$$

连续向前 $k$ 步：

$$
b_{t+k}=b_tT^k
$$

矩阵的行或列对应什么状态必须在实现中保持一致，否则转置错误会让概率传播方向相反。

## Stationary Distribution

平稳分布 $\pi$ 在经历一次转移后保持不变：

$$
\pi=\pi T
$$

并满足：

$$
\sum_x\pi(x)=1
$$

若 Markov chain 不可约、非周期并满足适当条件，从许多初始分布出发都会逐渐接近唯一平稳分布。

平稳分布表示长期访问各状态的比例。它不表示系统停止转移；样本路径仍在变化，只是总体分布保持稳定。

## HMM 的条件独立结构

HMM 使用两类关键假设：

### 状态转移只依赖上一状态

$$
X_t\perp X_{1:t-2}\mid X_{t-1}
$$

### 当前观测只依赖当前状态

$$
E_t\perp
\{X_{1:t-1},X_{t+1:},E_{1:t-1},E_{t+1:}\}
\mid X_t
$$

这些局部独立性使推断可以递归进行，无需枚举整条状态历史。

## 四类常见推断任务

### Filtering

根据截至当前的证据估计当前状态：

$$
P(X_t\mid e_{1:t})
$$

### Prediction

根据当前证据预测未来状态：

$$
P(X_{t+k}\mid e_{1:t})
$$

### Smoothing

利用后来的证据重新估计过去状态：

$$
P(X_k\mid e_{1:t}),\qquad k<t
$$

### Most Likely Explanation

寻找最可能的整条隐藏状态序列：

$$
\operatorname*{arg\,max}_{x_{1:t}}
P(x_{1:t}\mid e_{1:t})
$$

Filtering 的每个时刻边缘最优状态拼接起来，不一定等于最可能的整条序列；Viterbi 专门解决后一个问题。

## Forward Algorithm

Forward Algorithm 递归计算 filtering 分布。

定义未归一化前向量：

$$
f_t(x_t)=P(x_t,e_{1:t})
$$

递推式为：

$$
f_t(x_t)=
P(e_t\mid x_t)
\sum_{x_{t-1}}
P(x_t\mid x_{t-1})f_{t-1}(x_{t-1})
$$

最后归一化：

$$
P(x_t\mid e_{1:t})
=\frac{f_t(x_t)}{\sum_{x_t}f_t(x_t)}
$$

### 两步理解

Forward update 可以拆成：

```text
Time Elapse：把上一时刻信念通过转移模型推到当前
Observation：用当前观测似然重新加权并归一化
```

#### Time Elapse

$$
\overline{b}_t(x_t)=
\sum_{x_{t-1}}
P(x_t\mid x_{t-1})b_{t-1}(x_{t-1})
$$

#### Observation Update

$$
b_t(x_t)=\alpha
P(e_t\mid x_t)\overline{b}_t(x_t)
$$

其中 $\alpha$ 是归一化常数。

### 直觉

- 转移步骤根据系统动力学传播不确定性。
- 观测步骤提高能解释证据的状态概率。
- 观测模型有噪声，所以不应仅保留最符合当前证据的单一状态。
- 新证据与长期动力学共同决定后验。

## Prediction

完成当前 filtering 后，预测未来不再使用新的观测，只反复应用转移模型：

$$
P(x_{t+k}\mid e_{1:t})
=\sum_{x_t}P(x_{t+k}\mid x_t)P(x_t\mid e_{1:t})
$$

随着预测时间增长，当前证据的影响通常减弱，分布可能逐渐接近平稳分布。

## Forward Algorithm 的复杂度

若隐藏状态数为 $N$，朴素一步更新需要考虑所有状态对：

$$
O(N^2)
$$

处理长度为 $T$ 的证据序列，总复杂度为：

$$
O(TN^2)
$$

如果转移矩阵稀疏，只遍历有非零概率的边可以明显降低成本。

## Viterbi Algorithm

Forward Algorithm 对所有可能前驱路径求和。Viterbi Algorithm 要找概率最大的完整状态路径，因此把求和改成最大值，并保存回溯指针。

定义：

$$
m_t(x_t)=
\max_{x_{1:t-1}}P(x_{1:t},e_{1:t})
$$

递推：

$$
m_t(x_t)=
P(e_t\mid x_t)
\max_{x_{t-1}}
\left[
P(x_t\mid x_{t-1})m_{t-1}(x_{t-1})
\right]
$$

同时记录最佳前驱：

$$
\operatorname{back}_t(x_t)=
\operatorname*{arg\,max}_{x_{t-1}}
\left[
P(x_t\mid x_{t-1})m_{t-1}(x_{t-1})
\right]
$$

结束时：

1. 选择 $m_T(x_T)$ 最大的终点状态。
2. 沿 backpointer 从 $T$ 逐步回溯到 1。
3. 得到最可能状态序列。

### Trellis

Viterbi 常画成 trellis：每一列代表一个时刻，每一行代表一个隐藏状态。节点保存“到达这里的最佳路径分数”，边表示转移。

它与最短路径动态规划非常相似：大量完整路径共享相同前缀，算法只保留到每个中间状态的最佳前缀。

### 使用对数概率

长序列中的概率连乘会下溢，可以使用对数：

$$
\log(ab)=\log a+\log b
$$

Viterbi 递推变成最大化对数分数之和。$\log0$ 需要表示为负无穷。

## Forward 与 Viterbi 的差别

| 问题 | Forward | Viterbi |
| --- | --- | --- |
| 目标 | 当前状态的后验分布 | 最可能完整路径 |
| 聚合路径 | 求和 | 取最大 |
| 输出 | 每个状态的概率 | 一条状态序列 |
| 是否需要回溯指针 | 否 | 是 |

最大后验边缘状态序列可能组合成一条整体概率很低甚至不合法的路径，因此不能用逐时刻 argmax 代替 Viterbi。

## Particle Filtering

状态空间很大时，完整信念向量难以维护。Particle Filtering 用一组样本近似信念分布。

若有 $M$ 个 particles：

$$
\{x_t^{(1)},x_t^{(2)},\ldots,x_t^{(M)}\}
$$

某状态在粒子中出现的比例近似其概率。

### 初始化

从初始分布采样 $M$ 个 particles。

### Time Elapse

对每个粒子独立采样下一状态：

$$
x_t^{(i)}\sim P(X_t\mid x_{t-1}^{(i)})
$$

### Observation Weighting

根据当前证据为每个粒子计算权重：

$$
w_i=P(e_t\mid x_t^{(i)})
$$

### Resampling

按归一化权重重新抽取 $M$ 个粒子：

$$
P(\text{选择粒子 }i)=
\frac{w_i}{\sum_jw_j}
$$

能够解释观测的状态会复制更多粒子，解释能力差的状态会逐渐消失。

## 粒子滤波的直觉

```text
转移：让粒子跟着动力学移动
加权：判断哪些粒子更符合观测
重采样：把计算资源集中到更可信区域
```

它把“维护所有状态概率”改成“维护有限个可能世界”。

## 粒子退化与贫化

### 所有权重为零

若当前所有粒子都无法解释证据：

$$
\sum_iw_i=0
$$

无法按权重重采样。常见处理包括重新初始化、引入少量随机粒子，或检查观测模型是否过于尖锐。

### Sample Impoverishment

反复重采样会让粒子多样性下降，很多粒子成为同一祖先的复制。状态转移噪声、更多粒子、系统性重采样或 MCMC rejuvenation 可以缓解。

### 粒子数与误差

粒子越多，近似通常越稳定，计算和内存也越高。稀有但重要的状态可能在有限样本中完全消失。

## 一个定位例子

假设机器人可能位于三个房间：

$$
X_t\in\{A,B,C\}
$$

传感器报告“靠近出口”，但有误报概率。

一次 filtering 更新为：

1. 根据上一时刻位置分布和移动模型，计算机器人现在位于 $A,B,C$ 的预测概率。
2. 对每个房间乘以“在该房间时传感器报告靠近出口”的概率。
3. 归一化得到新信念。

即使传感器更支持房间 $C$，如果从上一位置几乎不可能在一步内到达 $C$，最终后验也不会只由当前观测决定。

## 方法选择

| 需求 | 方法 |
| --- | --- |
| 精确追踪当前状态分布 | Forward / Filtering |
| 预测未来状态 | Filtering 后重复 Time Elapse |
| 利用未来证据修正过去 | Forward-Backward Smoothing |
| 找最可能完整状态路径 | Viterbi |
| 状态空间太大，允许近似 | Particle Filtering |

## 常见误区

### 当前观测不能独立决定状态

后验同时依赖转移得到的 prior belief 和 observation likelihood：

$$
\text{posterior}\propto
\text{likelihood}\times\text{predicted prior}
$$

### Filtering 与 Viterbi 的目标不同

Filtering 对到达某状态的所有路径求和；Viterbi 只保留概率最大的路径。一个状态可以由许多中等概率路径共同支持，因此 filtering 概率高，却不在 Viterbi 路径中。

### 平稳分布不保证存在或唯一

可约链或周期链可能有多个平稳分布，或者从某些初始状态不收敛到单一分布。需要检查链结构条件。

### 重采样之后粒子权重通常重新相等

权重用于决定复制次数。完成重采样后，新粒子集合本身用出现频率表示信念，不应继续把旧权重重复乘入下一轮。

## 本章速记

```text
HMM = Initial + Transition + Observation

隐藏状态：Xt
带噪观测：Et

Forward：先转移，再乘观测似然，最后归一化
Viterbi：sum 换成 max，并保存 backpointer
Particle Filtering：propagate → weight → resample

Filtering：当前状态分布
Prediction：未来状态分布
Smoothing：用未来证据修正过去
Viterbi：最可能完整路径
```

[上一章：决策网络与完美信息价值](./07-decision-networks-and-vpi.md) · [返回合集](../cs188-introduction-to-ai.md) · [下一章：机器学习](./09-machine-learning.md)
