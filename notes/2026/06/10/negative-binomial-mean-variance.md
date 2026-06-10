# 负二项分布的期望与方差推导

这份笔记整理负二项分布的两个常见表述，并完整推导它们的期望与方差。

核心设定：

- 每次试验只有成功和失败两种结果。
- 每次成功概率为 $p$。
- 每次失败概率为 $q=1-p$。
- 各次试验相互独立，且成功概率不变。
- 目标是等到第 $r$ 次成功。

负二项分布可以看成几何分布的推广：

> 几何分布等第 $1$ 次成功，负二项分布等第 $r$ 次成功。

## 两种常见表述

负二项分布最容易混乱的地方，是随机变量可以有两种定义。

### 表述一：失败次数版

令 $Y$ 表示“第 $r$ 次成功之前失败的次数”。

如果第 $r$ 次成功之前刚好失败 $k$ 次，那么总试验次数是 $k+r$ 次，并且最后一次试验必须成功。

前 $k+r-1$ 次试验中，需要刚好有：

- $r-1$ 次成功；
- $k$ 次失败。

因此：

$$
P(Y=k)
=
\binom{k+r-1}{r-1}p^r q^k,
\quad k=0,1,2,\dots
$$

这个版本的均值和方差是：

$$
E[Y]=\frac{rq}{p}
$$

$$
\operatorname{Var}(Y)=\frac{rq}{p^2}
$$

### 表述二：总试验次数版

令 $X$ 表示“得到第 $r$ 次成功所需的总试验次数”。

如果第 $n$ 次试验刚好得到第 $r$ 次成功，那么第 $n$ 次必须成功，并且前 $n-1$ 次中刚好有 $r-1$ 次成功。

因此：

$$
P(X=n)
=
\binom{n-1}{r-1}p^r q^{n-r},
\quad n=r,r+1,r+2,\dots
$$

这个版本的均值和方差是：

$$
E[X]=\frac{r}{p}
$$

$$
\operatorname{Var}(X)=\frac{rq}{p^2}
$$

两个版本的关系很简单：

$$
X=Y+r
$$

所以：

$$
E[X]=E[Y]+r
$$

而方差不变：

$$
\operatorname{Var}(X)=\operatorname{Var}(Y+r)=\operatorname{Var}(Y)
$$

原因是：加上常数只会整体平移分布，不会改变随机变量围绕均值波动的程度。

## 先推几何分布

推导负二项分布的均值和方差，最干净的方法不是直接对组合数求和，而是先推几何分布，再把负二项分布拆成若干段几何分布。

令 $G$ 表示“第一次成功前失败的次数”。

于是：

$$
P(G=k)=q^k p,
\quad k=0,1,2,\dots
$$

我们需要推：

$$
E[G]=\frac{q}{p}
$$

$$
\operatorname{Var}(G)=\frac{q}{p^2}
$$

为了做到这一点，需要两个级数结论：

$$
\sum_{k=0}^{\infty} kq^k
=
\frac{q}{(1-q)^2}
$$

$$
\sum_{k=0}^{\infty} k^2q^k
=
\frac{q(1+q)}{(1-q)^3}
$$

其中 $|q|<1$。在概率问题中，$q$ 是失败概率，所以通常 $0\le q<1$。

## 级数结论：两次求导法

从等比级数开始：

$$
\sum_{k=0}^{\infty}q^k
=
\frac{1}{1-q}
$$

### 推导 $\sum kq^k$

两边对 $q$ 求导：

$$
\sum_{k=1}^{\infty}kq^{k-1}
=
\frac{1}{(1-q)^2}
$$

两边乘以 $q$：

$$
\sum_{k=1}^{\infty}kq^k
=
\frac{q}{(1-q)^2}
$$

因为 $k=0$ 项本来就是 $0$，所以：

$$
\sum_{k=0}^{\infty}kq^k
=
\frac{q}{(1-q)^2}
$$

### 推导 $\sum k^2q^k$

记：

$$
S_1(q)=\sum_{k=0}^{\infty}kq^k
=
\frac{q}{(1-q)^2}
$$

对 $S_1(q)$ 求导：

$$
S_1'(q)
=
\sum_{k=1}^{\infty}k^2q^{k-1}
$$

右边用乘积形式求导：

$$
S_1(q)=q(1-q)^{-2}
$$

所以：

$$
S_1'(q)
=
(1-q)^{-2}+2q(1-q)^{-3}
$$

通分：

$$
S_1'(q)
=
\frac{1-q+2q}{(1-q)^3}
=
\frac{1+q}{(1-q)^3}
$$

再乘以 $q$：

$$
qS_1'(q)
=
\sum_{k=1}^{\infty}k^2q^k
=
\frac{q(1+q)}{(1-q)^3}
$$

因此：

$$
\sum_{k=0}^{\infty}k^2q^k
=
\frac{q(1+q)}{(1-q)^3}
$$

这就是“两次求导”的路线：先从等比级数求导得到 $\sum kq^k$，再对 $\sum kq^k$ 求导得到 $\sum k^2q^k$。

## 级数结论：错位相减法

同样两个结论也可以用错位相减推出。

### 推导 $\sum kq^k$

记：

$$
S_1=q+2q^2+3q^3+4q^4+\cdots
$$

两边乘以 $q$：

$$
qS_1=q^2+2q^3+3q^4+4q^5+\cdots
$$

错位相减：

$$
S_1-qS_1
=
q+q^2+q^3+q^4+\cdots
$$

右边是等比级数：

$$
q+q^2+q^3+\cdots
=
\frac{q}{1-q}
$$

所以：

$$
(1-q)S_1=\frac{q}{1-q}
$$

得到：

$$
S_1=\frac{q}{(1-q)^2}
$$

也就是：

$$
\sum_{k=0}^{\infty}kq^k
=
\frac{q}{(1-q)^2}
$$

### 推导 $\sum k^2q^k$

记：

$$
S_2=q+4q^2+9q^3+16q^4+\cdots
$$

也就是：

$$
S_2=\sum_{k=1}^{\infty}k^2q^k
$$

两边乘以 $q$：

$$
qS_2=q^2+4q^3+9q^4+16q^5+\cdots
$$

错位相减：

$$
S_2-qS_2
=
q+3q^2+5q^3+7q^4+\cdots
$$

右边的系数是连续奇数：

$$
1,3,5,7,\dots
$$

因为：

$$
k^2-(k-1)^2=2k-1
$$

所以：

$$
q+3q^2+5q^3+7q^4+\cdots
=
\sum_{k=1}^{\infty}(2k-1)q^k
$$

拆开：

$$
\sum_{k=1}^{\infty}(2k-1)q^k
=
2\sum_{k=1}^{\infty}kq^k
-
\sum_{k=1}^{\infty}q^k
$$

代入已经得到的结论：

$$
\sum_{k=1}^{\infty}kq^k
=
\frac{q}{(1-q)^2}
$$

以及：

$$
\sum_{k=1}^{\infty}q^k
=
\frac{q}{1-q}
$$

于是：

$$
(1-q)S_2
=
\frac{2q}{(1-q)^2}
-
\frac{q}{1-q}
$$

通分：

$$
(1-q)S_2
=
\frac{2q-q(1-q)}{(1-q)^2}
$$

$$
(1-q)S_2
=
\frac{q+q^2}{(1-q)^2}
$$

所以：

$$
S_2
=
\frac{q(1+q)}{(1-q)^3}
$$

也就是：

$$
\sum_{k=0}^{\infty}k^2q^k
=
\frac{q(1+q)}{(1-q)^3}
$$

## 几何分布的期望

由定义：

$$
E[G]
=
\sum_{k=0}^{\infty}kP(G=k)
$$

代入 $P(G=k)=q^kp$：

$$
E[G]
=
\sum_{k=0}^{\infty}kq^kp
$$

把常数 $p$ 提出来：

$$
E[G]
=
p\sum_{k=0}^{\infty}kq^k
$$

代入级数结论：

$$
E[G]
=
p\cdot \frac{q}{(1-q)^2}
$$

因为 $1-q=p$，所以：

$$
E[G]
=
p\cdot \frac{q}{p^2}
=
\frac{q}{p}
$$

这说明：若成功概率越小，第一次成功前平均失败次数越多。

## 几何分布的方差

方差用：

$$
\operatorname{Var}(G)
=
E[G^2]-(E[G])^2
$$

先计算二阶矩：

$$
E[G^2]
=
\sum_{k=0}^{\infty}k^2P(G=k)
$$

代入 $P(G=k)=q^kp$：

$$
E[G^2]
=
p\sum_{k=0}^{\infty}k^2q^k
$$

代入级数结论：

$$
E[G^2]
=
p\cdot \frac{q(1+q)}{(1-q)^3}
$$

因为 $1-q=p$：

$$
E[G^2]
=
p\cdot \frac{q(1+q)}{p^3}
=
\frac{q(1+q)}{p^2}
$$

因此：

$$
\operatorname{Var}(G)
=
\frac{q(1+q)}{p^2}
-
\left(\frac{q}{p}\right)^2
$$

$$
\operatorname{Var}(G)
=
\frac{q+q^2-q^2}{p^2}
$$

所以：

$$
\operatorname{Var}(G)
=
\frac{q}{p^2}
$$

## 负二项分布的拆分

现在回到负二项分布。

令 $Y$ 表示“第 $r$ 次成功之前失败的次数”。

把等待第 $r$ 次成功拆成 $r$ 段：

- 第 $1$ 次成功前失败了 $G_1$ 次；
- 第 $2$ 次成功前失败了 $G_2$ 次；
- ...
- 第 $r$ 次成功前失败了 $G_r$ 次。

那么：

$$
Y=G_1+G_2+\cdots+G_r
$$

每个 $G_i$ 都表示“从当前状态开始，等到下一次成功前失败了多少次”。

由于原始试验相互独立，并且每次成功概率都等于 $p$，所以这些 $G_i$ 独立同分布，且都服从失败次数版几何分布：

$$
P(G_i=k)=q^kp,
\quad k=0,1,2,\dots
$$

## 失败次数版的均值和方差

由期望的线性性：

$$
E[Y]
=
E[G_1+G_2+\cdots+G_r]
$$

$$
E[Y]
=
E[G_1]+E[G_2]+\cdots+E[G_r]
$$

每一段的期望都是 $q/p$，所以：

$$
E[Y]
=
r\cdot \frac{q}{p}
=
\frac{rq}{p}
$$

方差这里也可以相加，是因为 $G_1,\dots,G_r$ 相互独立：

$$
\operatorname{Var}(Y)
=
\operatorname{Var}(G_1+\cdots+G_r)
$$

$$
\operatorname{Var}(Y)
=
\operatorname{Var}(G_1)+\cdots+\operatorname{Var}(G_r)
$$

每一段的方差都是 $q/p^2$，所以：

$$
\operatorname{Var}(Y)
=
r\cdot \frac{q}{p^2}
=
\frac{rq}{p^2}
$$

这就得到失败次数版负二项分布的结果：

$$
E[Y]=\frac{r(1-p)}{p}
$$

$$
\operatorname{Var}(Y)=\frac{r(1-p)}{p^2}
$$

## 总试验次数版的均值和方差

令 $X$ 表示“得到第 $r$ 次成功所需的总试验次数”。

失败次数是 $Y$，成功次数固定为 $r$，所以：

$$
X=Y+r
$$

因此均值为：

$$
E[X]
=
E[Y+r]
$$

$$
E[X]
=
E[Y]+r
$$

代入 $E[Y]=rq/p$：

$$
E[X]
=
\frac{rq}{p}+r
$$

$$
E[X]
=
\frac{rq+rp}{p}
$$

因为 $p+q=1$：

$$
E[X]
=
\frac{r(p+q)}{p}
=
\frac{r}{p}
$$

方差为：

$$
\operatorname{Var}(X)
=
\operatorname{Var}(Y+r)
$$

加常数不改变方差，所以：

$$
\operatorname{Var}(X)
=
\operatorname{Var}(Y)
=
\frac{rq}{p^2}
$$

也就是：

$$
\operatorname{Var}(X)
=
\frac{r(1-p)}{p^2}
$$

## 为什么两个版本方差相同

失败次数版 $Y$ 和总试验次数版 $X$ 的差别是：

$$
X=Y+r
$$

$r$ 是固定常数，不是随机变量。

方差衡量的是随机变量相对于自己均值的波动：

$$
\operatorname{Var}(X)
=
E[(X-E[X])^2]
$$

如果 $X=Y+r$，那么：

$$
X-E[X]
=
(Y+r)-E[Y+r]
$$

$$
X-E[X]
=
Y+r-(E[Y]+r)
$$

$$
X-E[X]
=
Y-E[Y]
$$

所以：

$$
\operatorname{Var}(X)
=
E[(Y-E[Y])^2]
=
\operatorname{Var}(Y)
$$

直觉上说，$X$ 比 $Y$ 多出来的是固定的 $r$ 次成功。固定增加 $r$ 次，只会把整个分布向右平移 $r$ 个单位，不会让分布变得更散或更集中。

## 小结

负二项分布有两个常见版本：

| 随机变量 | 含义 | 取值范围 | 均值 | 方差 |
|---|---|---|---|---|
| $Y$ | 第 $r$ 次成功前的失败次数 | $0,1,2,\dots$ | $\dfrac{rq}{p}$ | $\dfrac{rq}{p^2}$ |
| $X$ | 得到第 $r$ 次成功所需的总试验次数 | $r,r+1,r+2,\dots$ | $\dfrac{r}{p}$ | $\dfrac{rq}{p^2}$ |

其中：

$$
q=1-p
$$

最关键的结构是：

$$
Y=G_1+G_2+\cdots+G_r
$$

而：

$$
E[G]=\frac{q}{p},
\quad
\operatorname{Var}(G)=\frac{q}{p^2}
$$

所以：

$$
E[Y]=\frac{rq}{p},
\quad
\operatorname{Var}(Y)=\frac{rq}{p^2}
$$

总试验次数版只是在失败次数版上加了固定的 $r$：

$$
X=Y+r
$$

因此：

$$
E[X]=E[Y]+r=\frac{r}{p}
$$

但：

$$
\operatorname{Var}(X)=\operatorname{Var}(Y)=\frac{rq}{p^2}
$$

这也是记忆负二项分布均值和方差最稳的方式：先记住几何分布，再把负二项分布看成 $r$ 段独立等待时间的总和。
