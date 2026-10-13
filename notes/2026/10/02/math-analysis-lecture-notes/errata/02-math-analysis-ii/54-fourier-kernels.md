# 勘误：54 光滑性、Dirichlet 核与 Fejer 核

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $f$ 是光滑函数, 即 $f \in C^\infty(\mathbf{T})$

**修正：**

> $f$ 几乎处处等于某个光滑函数，即其 $L^1$ 等价类有 $C^\infty(\mathbf T)$ 代表

**理由：** Fourier系数无法区分只在零测集上不同的函数，例如改变单点取值会破坏连续性而不改变系数。光滑性等价结论应针对几乎处处相等的光滑代表。

**原文：**

> 2) $\widehat{f}(k)$ 的具有

**修正：**

> 2) $\widehat{f}(k)$ 具有

**理由：** 原图描述Fourier系数衰减时多出一个的字，删除语句笔误。

**原文：**

> 所以, 根据刚刚证明的结论:
> $$
> f(x) = \sum_{k \in \mathbb{Z}} \widehat{f}(k) e^{ikx}
> $$
> 是连续函数。

**修正：**

> 所以该 Fourier 级数一致收敛，定义连续函数
> $$
> g(x)=\sum_{k\in\mathbb Z}\widehat f(k)e^{ikx}.
> $$
> 逐项积分可知 $g$ 与 $f$ 的 Fourier 系数相同。由三角多项式在 $C(\mathbf T)$ 中的一致稠密性，$f-g$ 对所有连续测试函数的积分为零，故 $f=g$ 几乎处处。以下用此连续代表记作 $f$。

**理由：** 前一绝对收敛定理假设原函数连续，而此处只假设L¹。应先用一致收敛级数构造连续g，再由相同Fourier系数及连续测试函数稠密性得f=g几乎处处；此后才能对这个代表求导。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> 乘以 $-ik$

**修正：**

> 乘以 $ik$

**理由：** Fourier展开使用e^(ikx)，求导将第k个系数乘ik，前页分部积分也得到这个正号。原图注记误写−ik。

**原文：**

> $$
> \begin{array}{ccc}
> L^2(\mathbf{T}) & \xrightarrow{\quad \frac{d}{dx} \quad} & L^2(\mathbf{T}) \\
> \Big\downarrow \mathcal{F} & & \Big\downarrow \mathcal{F} \\
> \ell^2(\mathbb{Z}) & \xrightarrow{\quad \times (-ik) \quad} & \ell^2(\mathbb{Z})
> \end{array}
> ,
> $$

**修正：**

> $$
> \begin{array}{ccc}
> L^2(\mathbf{T}) & \xrightarrow{\quad \frac{d}{dx} \quad} & L^2(\mathbf{T}) \\
> \Big\downarrow \mathcal{F} & & \Big\downarrow \mathcal{F} \\
> \ell^2(\mathbb{Z}) & \xrightarrow{\quad \times (ik) \quad} & \ell^2(\mathbb{Z})
> \end{array}
> ,
> $$

**理由：** 交换图应与同一Fourier约定下的求导系数ik一致；同步修正图中的负号。

**原文：**

> 变成了成在每个分量上

**修正：**

> 变成了在每个分量上

**理由：** 原图解释对角化时多出重复的成字，删除这个输入错误。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $$
> |\widehat{f}(k)| \le \frac{C_N}{(1 + |k|)^m}.
> $$

**修正：**

> $$
> |\widehat{f}(k)| \le \frac{C}{(1 + |k|)^m}.
> $$

**理由：** 该注记固定m并声明常数C，原图公式却使用没有在本命题定义的C_N；统一为同一常数C。

**原文：**

> $f, g, h \in L^1(\mathbb{R}^n)$

**修正：**

> $f, g, h \in L^1(\mathbf T)$

**理由：** 本段正在讨论环面上的周期卷积结合律，函数空间应为L¹(T)，原图沿用实轴卷积段落时未改定义域。

**原文：**

> $$
> (f * g)(x) = \int_{\mathbf{T}} f(x - y)g(y)dy
> $$

**修正：**

> $$
> (f * g)(x) = \int_{\mathbf{T}} f(x-y)g(y)\,d\mu(y)
> $$

**理由：** 本章环面卷积按照μ=dy/(2π)归一化，原图这一行漏掉归一化。用dμ明确采用此前同一个测度。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> 在 $L^p(\mathbb{R}^n)$ 中是良好定义的

**修正：**

> 在 $L^p(\mathbf T)$ 中是良好定义的

**理由：** 该卷积的函数定义域是环面，上下文的Young不等式也在T上；原图错沿用Rn。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $$
> F_N(x) = \sum_{k=0}^{N-1} D_k.
> $$

**修正：**

> $$
> F_N(x) = \frac1N\sum_{k=0}^{N-1} D_k.
> $$

**理由：** Fejér核是前N个Dirichlet核的平均值，原图这条定义漏掉1/N；上下两条卷积和解析公式都要求这个归一化因子。

**原文：**

> 收敛速度变得很快！

**修正：**

> 对连续周期函数一致收敛！

**理由：** Cesàro求和保证连续函数的一致收敛，但不能对任意连续函数宣称统一的快速收敛，速率还需要连续模等额外条件。用后续实际证明的结论替换原图笼统速度断言。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> 一族连续函数 $\{K_N(x)\}_{N \geqslant 0}$

**修正：**

> 一族以 $2\pi$ 为周期的连续函数 $\{K_N(x)\}_{N \geqslant 0}$

**理由：** 要把实轴函数视为环面上的连续函数，需要2π周期性；原图未在好的积分核定义中写出这一条件。

**原文：**

> $K_N$ 是 $\mathbf{T}$ 上的概率密度，即

**修正：**

> $K_N$ 在 $\mathbf T$ 上积分归一化为 $1$，即

**理由：** 好的积分核定义没有要求K_N非负，甚至可为复值，单位积分并不使它成为概率密度。改用准确的单位积分条件，不擅自加强核的正性假设。

**原文：**

> Féjer 核 $\{F_N\}_{N \geqslant 0}$

**修正：**

> Féjer 核 $\{F_N\}_{N \geqslant 1}$

**理由：** 这里采用F_N=N^−1∑_(k=0)^(N−1)D_k，N=0时没有定义，序列应从1起。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \left|\sin(x/2)\right|\leqslant |x|/2
> ```

**正文：**

> $\left| \sin\left(\frac{x}{2}\right) \right| \geqslant \frac{|x|}{\pi}$

**理由：** 控制Fejer核分母需要正弦的下界；所用sin(x/2)≥|x|/π由凹性得出。源图给的上界不能用于随后倒数估计，Markdown已使用正确下界。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> 利用 $K_N$ 是概率密度函数

**修正：**

> 利用 $K_N$ 的积分为 $1$

**理由：** 证明只用归一化积分及L¹有界性，不用非负性；配套修正好的核未必是概率密度的称呼。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $\hat{f} = a_k$

**修正：**

> $\hat{f}(k) = a_k$

**理由：** 正在讨论给定序列是否作为逐频率Fourier系数，原图漏掉系数的频率参数k。

**原文：**

> 乘以 $-ik$

**修正：**

> 乘以 $ik$

**理由：** 本章Fourier基为e^(ikx)，导数的系数为ik；原图原函数注记沿用了此前误写的负号，而下方1/(ik)的公式已正确。

**原文：**

> 由于 $\hat{f} = 0$

**修正：**

> 由于 $\hat{f}(0) = 0$

**理由：** 消失的是零频率系数，也就是一周期积分，而非所有Fourier系数；原图遗漏零频率参数。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \hat f(k)=0
> ```

**正文：**

> $\hat{f}(k) \to 0$

**理由：** Riemann–Lebesgue结论是Fourier系数趋零，通常不会逐项等于零；Markdown已给正确极限。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $\left\{ \frac{\widehat{f}(k)}{k} \right\}_{k\in\mathbb{Z}}$

**修正：**

> $\left\{ \frac{\widehat{f}(k)}{k} \right\}_{k\in\mathbb{Z}\setminus\{0\}}$

**理由：** 这里的序列项含有除以k，需排除k=0。随后对称求和也明确只含1≤|k|，补齐序列的指标范围。

**原文：**

> 数列 $\{a_k\}_{k\geqslant 1}$

**修正：**

> 数列 $\{a_k\}_{k\in\mathbb Z}$

**理由：** Fatou反例同时定义正、负及零频率，必须是双向整数指标序列，原图写成k≥1与分段定义矛盾。

**原文：**

> $$S_N(f)(x) = \sum_{|k|\leqslant N} a_k e^{ikx} \left( = \sum_{k\geqslant 2} \frac{\sin(kx)}{\log k} \right).$$

**修正：**

> $$S_N(f)(x) = \sum_{|k|\leqslant N} a_k e^{ikx} \left( = \sum_{2\leqslant k\leqslant N} \frac{\sin(kx)}{\log k} \right).$$

**理由：** 本行计算截断部分和S_N，右边也必须截断到N；原图把有限部分和写成无穷级数。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $(\log(x))^{-1}$ 的积分

**修正：**

> $1/(x\log x)$ 的积分

**理由：** 需要比较的是∑1/(k log k)，积分比较函数应为1/(x log x)，其原函数log log x给出随后渐近；原图漏掉因子1/x。

**原文：**

> 然而，上面的积分应该收敛

**修正：**

> 然而，上面的求和应该收敛

**理由：** 矛盾的对象是前页得到收敛性的对称求和∑a_k/k，此处没有新的积分序列；改正原图对象名称。

**原文：**

> 所有有很多正的部分

**修正：**

> 所以有很多正的部分

**理由：** 原图说明Dirichlet核正负抵消时把因果连词所以误写为所有，改正输入错误。

**原文：**

> 对 $\pi \geqslant x \geqslant 0$

**修正：**

> 对 $0<x\leqslant\pi$

**理由：** 下面不等式含2/x与1/sin(x/2)，x=0时未定义；原图端点应排除。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $$\sum_1^{N-1} \frac{1}{k} = \log N + \gamma + O\left(\frac{1}{N}\right),$$

**修正：**

> $$\sum_{k=1}^{N-1} \frac{1}{k} = \log N + \gamma + O\left(\frac{1}{N}\right),$$

**理由：** 调和级数求和下标需要声明变量k及起点1，原图只写下标1，补齐求和指标。

[相关正文：54：光滑性、Dirichlet 核与 Fejer 核](../../02-math-analysis-ii/54-fourier-kernels.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> S_N(f)(x_0) - S_N(g)(x_0) &= \int_\delta^\pi \sin\left(\left(N+\frac{1}{2}\right)y\right) \underbrace{\frac{(f(x_0 - y) + f(x_0 + y) - g(x_0 - y) - g(x_0 + y))}{\sin\left(\frac{y}{2}\right)}}_{F(y)} \frac{dy}{2\pi} \\
> &= \int_{-\pi}^\pi \sin\left(\left(N+\frac{1}{2}\right)y\right) \cdot F(y) \mathbf{1}_{\delta \leqslant |y| \leqslant \pi}(y) dy.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> S_N(f)(x_0) - S_N(g)(x_0) &= \int_\delta^\pi \sin\left(\left(N+\frac{1}{2}\right)y\right) \underbrace{\frac{(f(x_0 - y) + f(x_0 + y) - g(x_0 - y) - g(x_0 + y))}{\sin\left(\frac{y}{2}\right)}}_{F(y)} \frac{dy}{2\pi} \\
> &= \int_0^\pi \sin\left(\left(N+\frac12\right)y\right)F(y)\mathbf1_{\delta\leqslant y\leqslant\pi}(y)\frac{dy}{2\pi}.
> \end{aligned}
> $$

**理由：** 上一行是δ到π的归一化积分，把它重写成示性函数形式时应保持正半区间和dy/(2π)。原图改成双侧区间且漏掉归一化，造成多出4π因子。

**原文：**

> $F(x)\mathbf{1}_{\delta \leqslant |x| \leqslant \pi}(x)$

**修正：**

> $F(x)\mathbf1_{\delta\leqslant x\leqslant\pi}(x)$

**理由：** 配套使用正半区间的零延拓函数作为L¹测试函数；原图的双侧指示范围与前面积分重写不一致。

**原文：**

> 根据 Riemann-Lebesgue 引理，当 $N \to \infty$ 时

**修正：**

> 用 $\sin((N+\tfrac12)y)=\sin(Ny)\cos(y/2)+\cos(Ny)\sin(y/2)$，把固定的半频率因子并入上述 $L^1$ 函数；再由整数频率的 Riemann-Lebesgue 引理，当 $N\to\infty$ 时

**理由：** 前述周期Riemann–Lebesgue引理针对整数频率，这里振荡频率为N+1/2。通过加法公式把固定因子并入L¹函数，才直接符合已证明引理的条件。
