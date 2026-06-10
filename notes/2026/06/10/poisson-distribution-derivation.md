# 泊松分布公式推导与二项分布的联系

这份笔记整理泊松分布概率公式的来源，重点解释二项分布极限中组合数那一项为什么会变成 $\lambda^k/k!$，以及泊松分布的期望、均值与二项分布之间的关系。

## 基本问题

泊松分布描述的是：在一段固定时间、空间或区域内，某类事件发生的次数。

设 $X$ 表示这个固定区间内事件发生的次数。如果平均发生次数是 $\lambda$，那么泊松分布的概率公式是：

$$
P(X=k)=\frac{\lambda^k e^{-\lambda}}{k!},
\quad k=0,1,2,\dots
$$

这里的 $\lambda$ 是单位区间内的平均发生次数，也就是泊松分布的参数。

## 从二项分布出发

假设观察一段固定时间，比如 1 小时。已知这段时间内事件平均发生 $\lambda$ 次。

把这段时间切成 $n$ 个非常小的时间片。如果 $n$ 足够大，每个小时间片内发生事件的概率可以近似为：

$$
p=\frac{\lambda}{n}
$$

于是，在 $n$ 个小时间片中，事件总共发生 $k$ 次，可以先看成二项分布：

$$
P(X=k)
=
\binom{n}{k}
\left(\frac{\lambda}{n}\right)^k
\left(1-\frac{\lambda}{n}\right)^{n-k}
$$

泊松分布就是在下面这个极限条件下得到的：

$$
n\to\infty,
\quad
p=\frac{\lambda}{n}\to 0,
\quad
np=\lambda
$$

也就是：机会次数越来越多，每次机会发生的概率越来越小，但总平均次数保持为 $\lambda$。

## 组合数那一项的极限

推导中最容易卡住的是这一项：

$$
\binom{n}{k}
\left(\frac{\lambda}{n}\right)^k
$$

注意这里是 $n\to\infty$，但 $k$ 是固定的。

先展开组合数：

$$
\binom{n}{k}
=
\frac{n!}{k!(n-k)!}
=
\frac{n(n-1)(n-2)\cdots(n-k+1)}{k!}
$$

所以：

$$
\binom{n}{k}
\left(\frac{\lambda}{n}\right)^k
=
\frac{n(n-1)\cdots(n-k+1)}{k!}
\cdot
\frac{\lambda^k}{n^k}
$$

把 $n^k$ 分到前面的乘积里：

$$
=
\frac{\lambda^k}{k!}
\cdot
\frac{n(n-1)\cdots(n-k+1)}{n^k}
$$

而：

$$
\frac{n(n-1)\cdots(n-k+1)}{n^k}
=
1
\cdot
\left(1-\frac{1}{n}\right)
\cdot
\left(1-\frac{2}{n}\right)
\cdots
\left(1-\frac{k-1}{n}\right)
$$

当 $n\to\infty$ 时，每一个因子都趋近于 $1$：

$$
1-\frac{1}{n}\to 1,
\quad
1-\frac{2}{n}\to 1,
\quad
\dots
$$

因为 $k$ 是固定的，所以这只是有限个因子的乘积。有限个趋近于 $1$ 的因子相乘，整体也趋近于 $1$。

因此：

$$
\binom{n}{k}
\left(\frac{\lambda}{n}\right)^k
\to
\frac{\lambda^k}{k!}
$$

直觉上可以把组合数粗略看成：

$$
\binom{n}{k}
\approx
\frac{n^k}{k!}
$$

而 $\left(\lambda/n\right)^k$ 里正好有一个 $1/n^k$，二者抵消后剩下：

$$
\frac{\lambda^k}{k!}
$$

例如 $k=3$ 时：

$$
\binom{n}{3}
\left(\frac{\lambda}{n}\right)^3
=
\frac{n(n-1)(n-2)}{6}
\cdot
\frac{\lambda^3}{n^3}
$$

整理为：

$$
=
\frac{\lambda^3}{6}
\left(1-\frac{1}{n}\right)
\left(1-\frac{2}{n}\right)
$$

所以：

$$
\binom{n}{3}
\left(\frac{\lambda}{n}\right)^3
\to
\frac{\lambda^3}{6}
=
\frac{\lambda^3}{3!}
$$

## 剩余概率项的极限

二项分布中还剩这一项：

$$
\left(1-\frac{\lambda}{n}\right)^{n-k}
$$

把它拆成两部分：

$$
\left(1-\frac{\lambda}{n}\right)^{n-k}
=
\left(1-\frac{\lambda}{n}\right)^n
\left(1-\frac{\lambda}{n}\right)^{-k}
$$

其中：

$$
\left(1-\frac{\lambda}{n}\right)^n
\to
e^{-\lambda}
$$

而因为 $k$ 固定：

$$
\left(1-\frac{\lambda}{n}\right)^{-k}
\to
1
$$

所以：

$$
\left(1-\frac{\lambda}{n}\right)^{n-k}
\to
e^{-\lambda}
$$

## 得到泊松分布公式

把前面的两个极限合起来：

$$
\binom{n}{k}
\left(\frac{\lambda}{n}\right)^k
\to
\frac{\lambda^k}{k!}
$$

$$
\left(1-\frac{\lambda}{n}\right)^{n-k}
\to
e^{-\lambda}
$$

因此：

$$
P(X=k)
=
\binom{n}{k}
\left(\frac{\lambda}{n}\right)^k
\left(1-\frac{\lambda}{n}\right)^{n-k}
\to
\frac{\lambda^k e^{-\lambda}}{k!}
$$

这就是泊松分布的概率公式。

可以简写为：

$$
\operatorname{Binomial}
\left(n,\frac{\lambda}{n}\right)
\xrightarrow[n\to\infty]{}
\operatorname{Poisson}(\lambda)
$$

## 期望、均值与二项分布的关系

二项分布的参数是 $n$ 和 $p$：

$$
X\sim \operatorname{Binomial}(n,p)
$$

它的期望是：

$$
E[X]=np
$$

方差是：

$$
\operatorname{Var}(X)=np(1-p)
$$

泊松分布的参数是 $\lambda$：

$$
Y\sim \operatorname{Poisson}(\lambda)
$$

它的期望是：

$$
E[Y]=\lambda
$$

方差也是：

$$
\operatorname{Var}(Y)=\lambda
$$

这里的联系是：

$$
\lambda=np
$$

在二项分布极限中，令：

$$
p=\frac{\lambda}{n}
$$

于是：

$$
E[X]=np
=
n\cdot \frac{\lambda}{n}
=
\lambda
$$

所以，泊松分布的 $\lambda$ 可以看成二项分布均值 $np$ 在极限过程中的保留值。

二者的区别是：

- 二项分布有固定试验次数 $n$，每次试验成功概率是 $p$。
- 泊松分布没有显式记录“试验次数”，只记录固定区间内的平均发生次数 $\lambda$。
- 二项分布适合“有限次独立试验中成功了几次”。
- 泊松分布适合“固定时间或空间内事件发生了几次”。

二者的联系是：

- 当 $n$ 很大、$p$ 很小，并且 $np=\lambda$ 保持稳定时，二项分布可以用泊松分布近似。
- 二项分布的期望 $np$ 对应泊松分布的参数 $\lambda$。
- 在这个极限下，二项分布的方差 $np(1-p)$ 也趋近于 $\lambda$，因为 $p\to 0$，所以 $1-p\to 1$。

也就是：

$$
np(1-p)
\to
\lambda
$$

因此，泊松分布可以理解成一种“稀有事件极限”：事件有很多次潜在发生机会，但每次发生概率很小，最终只留下一个稳定的平均发生次数 $\lambda$。

## 期望和均值是不是一回事

在概率分布里，“期望”和“均值”通常说的是同一个东西，都是随机变量长期平均下来的中心位置。

所以对于泊松分布：

$$
\text{均值}=E[Y]=\lambda
$$

对于二项分布：

$$
\text{均值}=E[X]=np
$$

不过在实际数据分析里，“均值”有时也指样本均值，也就是从数据中算出来的平均值。例如观察很多个小时，每小时事件次数分别是 $x_1,x_2,\dots,x_m$，样本均值是：

$$
\bar{x}
=
\frac{x_1+x_2+\cdots+x_m}{m}
$$

如果这些数据确实来自泊松分布，那么样本均值 $\bar{x}$ 会用来估计理论参数 $\lambda$。

简短地说：

- 理论分布里，期望就是均值。
- 实际数据里，样本均值是从观测数据算出来的，用来估计理论期望。
- 泊松分布的理论均值是 $\lambda$。
- 二项分布的理论均值是 $np$。
