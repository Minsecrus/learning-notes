# 勘误：56 Bernstein 定理与等分布

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> $$ \|f\|_{C^{0,\alpha}} = \inf_{x,y\in\mathbf{T}, x\neq y} \frac{|f(x) - f(y)|}{|x - y|^\alpha}. $$

**修正：**

> $$ \|f\|_{C^{0,\alpha}} = \sup_{x,y\in\mathbf{T}, x\neq y} \frac{|f(x) - f(y)|}{|x - y|^\alpha}. $$

**理由：** Hölder最佳常数是所有差商的上确界，等于可用上界常数的下确界；原图把差商也取下确界，通常会等于零而无法控制函数差值。

**原文：**

> 令 $\|f\|_{C^{0,\alpha}}$ 是上述可能的常数

**修正：**

> 用 $\|f\|_{C^{0,\alpha}}$ 记 Hölder 半范数，即上述可能的常数

**理由：** 这个量对常数函数为零，因此是半范数。保留作者记号并注明其性质，避免把只控制增量的量当成完整函数范数。

**原文：**

> $\{|k|^\alpha |\widehat{f}(k)|\}_{k \geqslant 1}$

**修正：**

> $\{|k|^\alpha |\widehat{f}(k)|\}_{k\in\mathbb Z\setminus\{0\}}$

**理由：** Fourier频率是双向整数，复值函数的正负系数不必共轭。该衰减命题对所有非零频率成立，不能用仅正频率有界作为等价说法。

**原文：**

> $$
> \begin{aligned}
> \widehat{f}(k) &= \frac{1}{2} \left( \int_{-\pi}^\pi f(x) e^{-ikx} \frac{dx}{2\pi} - \int_{-\pi}^\pi f(x + \frac{\pi}{k}) e^{-ixk} \frac{dx}{2\pi} \right) \\
> &= \int_{-\pi}^\pi \left( f(x + \frac{\pi}{k}) - f(x) \right) e^{-ixk} \frac{dx}{4\pi}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \widehat{f}(k) &= \frac{1}{2} \left( \int_{-\pi}^\pi f(x) e^{-ikx} \frac{dx}{2\pi} - \int_{-\pi}^\pi f(x + \frac{\pi}{k}) e^{-ixk} \frac{dx}{2\pi} \right) \\
> &= \int_{-\pi}^\pi \left(f(x)-f(x+\frac\pi k)\right)e^{-ixk} \frac{dx}{4\pi}.
> \end{aligned}
> $$

**理由：** 上一行是原函数积分减去平移函数积分，合并后也必须是f(x)−f(x+π/k)；原图合并时倒置了差值，等式差一个负号。后续绝对值估计不受影响。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> 实际上, 对于 $\alpha \in (0, 1)$, 这个衰减估计刻画了 $C^\alpha(\mathbf{T})$, 我们这里不给出证明了

**修正：**

> 这个逐个 Fourier 系数的衰减界是 $C^\alpha$ 的必要条件，一般并非充分条件，不能单凭它刻画 $C^\alpha$

**理由：** 原图把必要衰减界称为等价刻画，不成立。例如连续函数∑_(n≥2)cos(nx)/(n(log n)²)的系数满足任意α<1的O(n^−α)，但在零点的连续模至少为常数/log²(1/h)，不满足正Hölder指数。

**原文：**

> $\widehat{f_\alpha}(l) = |l|^{-\alpha}$

**修正：**

> $\widehat{f_\alpha}(l)=l^{-\alpha}$ 在 $l=2^k$（$k\ge1$）时成立，其他频率的系数为 $0$

**理由：** 该级数只在正的二进制频率2^k有项，其他整数频率的Fourier系数为零；原图把稀疏频率的公式误写成所有l都成立。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> 这表明, $f \in C^\alpha(\mathbf{T})$

**修正：**

> 这表明, $f_\alpha\in C^\alpha(\mathbf T)$

**理由：** 刚完成的两块估计针对显式构造的f_α，原图结论漏掉函数下标α。

**原文：**

> 如果 $\alpha > \frac{1}{2}$, 尽管对于 $f \in C^\alpha(\mathbf{T})$, 它的 Fourier 系数衰减的并不迅速（不是绝对收敛的）, 但是 Bernstein 有如下令人惊讶的结果:

**修正：**

> 对于 $f\in C^\alpha(\mathbf T)$，单独使用 $O(|k|^{-\alpha})$ 的逐项衰减界，在 $\alpha\le1$ 时不足以推出系数绝对可求和；Bernstein 在 $\alpha>\frac12$ 时给出如下更强的结论：

**理由：** 原图断言α>1/2的Hölder函数Fourier级数不是绝对收敛，与随后正确的Bernstein定理直接矛盾。真正不足的是前一逐项估计，不能把估计不足当成级数不收敛。

**原文：**

> 其的 Fourier 级数

**修正：**

> 其 Fourier 级数

**理由：** 原图定理379多出其后的的字，删除语句笔误。

**原文：**

> 不是在 $C^{0,\alpha}$ 的范数下收敛到 $f$

**修正：**

> 一般不保证在 $C^{0,\alpha}$ 的范数下收敛到 $f$

**理由：** 光滑函数甚至三角多项式可以在该范数下收敛，原图不是的绝对断言过强。此处正确警示是一致收敛不保证Hölder范数收敛。

**原文：**

> $$ |g_h(x)| \leqslant \|f\|_{C^{0,\alpha}} (2h)^\alpha. $$

**修正：**

> $$ |g_h(x)| \leqslant \|f\|_{C^{0,\alpha}} (2|h|)^\alpha. $$

**理由：** h被允许为任意实数，Hölder增量界需使用距离2|h|，原图非整数幂直接作用于负h没有实数意义。

**原文：**

> $$ \sum_{k \in \mathbf{Z}} |\sin(kh)|^2 |\widehat{f}(k)|^2 \leqslant C h^{2\alpha} $$

**修正：**

> $$ \sum_{k \in \mathbf{Z}} |\sin(kh)|^2 |\widehat{f}(k)|^2 \leqslant C|h|^{2\alpha} $$

**理由：** 平方积分界应对正负平移均成立，需要|h|的幂；与上一行增量估计的绝对值同步。

**原文：**

> 不依赖于 $f$ 的常数

**修正：**

> 不依赖于 $p$ 的常数（可以依赖于 $f$ 和 $\alpha$）

**理由：** 对f乘任意大常数会把系数平方界相应放大，常数不可能与f无关。此证明需要的只是常数对二进制块指标p统一。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> $\frac{k\pi}{2^{p+1}} \in [\frac{\pi}{4}, \frac{\pi}{2}]$

**修正：**

> $\left|\frac{k\pi}{2^{p+1}}\right|\in[\frac\pi4,\frac\pi2]$

**理由：** 求和包含负频率，kπ/2^(p+1)可以为负。其绝对值位于该正区间，才可据此使用sin²≥1/2。

**原文：**

> $$ \sum_{2^{p-1} \leqslant |k| < 2^p} |\widehat{f}(k)| \leqslant 2^{\frac{p-1}{2}} \left( \sum_{2^{p-1} \leqslant |k| < 2^p} |\widehat{f}(k)|^2 \right)^\frac{1}{2} \leqslant \frac{C}{2^{p(\alpha - \frac{1}{2})}}. $$

**修正：**

> $$ \sum_{2^{p-1} \leqslant |k| < 2^p} |\widehat{f}(k)| \leqslant 2^{p/2} \left( \sum_{2^{p-1} \leqslant |k| < 2^p} |\widehat{f}(k)|^2 \right)^\frac{1}{2} \leqslant \frac{C}{2^{p(\alpha - \frac{1}{2})}}. $$

**理由：** 双向频率带2^(p−1)≤|k|<2^p共有2^p个整数，Cauchy–Schwarz的计数平方根为2^(p/2)；原图漏算负频率那一半。

**原文：**

> $$ \sum_{k \in \mathbf{Z}} |\widehat{f}(k)| \leqslant \sum_{p=1}^\infty \left( \sum_{2^{p-1} \leqslant |k| < 2^p} |\widehat{f}(k)| \right) \leqslant \sum_{p=1}^\infty \frac{C}{2^{p(\alpha - \frac{1}{2})}} < \infty. $$

**修正：**

> $$ \sum_{k\in\mathbf Z\setminus\{0\}}|\widehat f(k)|\leqslant \sum_{p=1}^\infty \left( \sum_{2^{p-1} \leqslant |k| < 2^p} |\widehat{f}(k)| \right) \leqslant \sum_{p=1}^\infty \frac{C}{2^{p(\alpha - \frac{1}{2})}} < \infty. $$

**理由：** 二进制块只覆盖非零频率，因此左侧需排除零频率；常数函数可直接反驳原图整体求和的界。零频率系数本身有限，补上它后仍得绝对可求和。

**原文：**

> 这表明, $\sum_{k \in \mathbf{Z}} \widehat{f}(k) e^{ikx}$

**修正：**

> 由于零频率系数也有限，这表明, $\sum_{k \in \mathbf{Z}} \widehat{f}(k) e^{ikx}$

**理由：** 二进制块界证明非零系数的总和有限，再加上单个有限零系数，才完成全部Fourier系数绝对可求和的结论。

**原文：**

> 对任意的 $a, b \in [0, 1)$

**修正：**

> 对任意的 $0\le a<b\le1$

**理由：** 区间等分布的端点需有a<b，否则右侧b−a为负而左侧为非负。允许b=1也符合基本区间上等分布的定义。

**原文：**

> 使得 $\{\xi_k\}_{k \geqslant 1} \cap (a, b) = \emptyset$

**修正：**

> 缩小该开区间后，可使 $\{\xi_k\}_{k\ge1}\cap[a,b]=\emptyset$

**理由：** 原图只知道开区间内无点，却马上把闭区间的计数设为零，端点可能有点。先缩小到不含原端点的闭子区间，才能使用后面的零计数。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> 这个数列实际上只有有限项

**修正：**

> 这个数列实际上只取有限多个不同值

**理由：** 有理旋转序列有无限多项，只是周期性地重复有限多个值；原图把有限取值写成有限项。

**原文：**

> $$
> \xi_k = \left( \frac{1 + \sqrt{5}}{2} \right)^k .
> $$

**修正：**

> $$
> \xi_k=\left\{\left(\frac{1+\sqrt5}2\right)^k\right\} .
> $$

**理由：** 等分布定义要求ξ_k属于[0,1)，需取黄金比幂的小数部分。原图未取小数部分时序列直接趋无穷，后面的稠密讨论无意义。

**原文：**

> $$
> F_{k+1} = \left( \frac{1 + \sqrt{5}}{2} \right)^k + \left( \frac{1 - \sqrt{5}}{2} \right)^k
> $$

**修正：**

> $$
> L_k= \left( \frac{1 + \sqrt{5}}{2} \right)^k + \left( \frac{1 - \sqrt{5}}{2} \right)^k
> $$

**理由：** 黄金比幂与共轭幂之和形成Lucas数列L_k，非Fibonacci数列；配套修正数列名称及指标记号。

**原文：**

> 我们就得到了 Fibonacci 数列。

**修正：**

> 我们就得到了整数值的 Lucas 数列。

**理由：** φ^k+ψ^k的初始值为L0=2、L1=1，满足同一递推但不是Fibonacci初始值。原图把Lucas数列误称Fibonacci。

**原文：**

> $\xi_k \to 1$

**修正：**

> $\xi_{2j}\to1$、$\xi_{2j+1}\to0$

**理由：** 共轭根ψ为负且|ψ|<1。偶数幂使φ^k从整数左侧逼近，奇数幂从右侧逼近，所以小数部分偶子列趋1、奇子列趋0，整个序列并无趋1的极限。

**原文：**

> 令 $\xi_k = k \cdot \alpha$

**修正：**

> 令 $\xi_k=\{k\alpha\}$

**理由：** 正在研究[0,1)中的无理旋转序列，必须取kα的小数部分；周期频率函数的值仍等于在kα处的值。

**原文：**

> 利用 $\xi_k = k \cdot \alpha$

**修正：**

> 利用 $e_\ell(\xi_k)=e_\ell(k\alpha)$

**理由：** 几何级数计算需要周期指数函数相等，不需要把[0,1)中的ξ_k错误地等同于未经取小数部分的kα。

**原文：**

> 简单简单函数

**修正：**

> 简单函数

**理由：** 原图从集合过渡到函数的说明重复简单一词，删除重复。

**原文：**

> $f \in C[0, 1)$

**修正：**

> $f\in C_{\mathrm{per},1}(\mathbb R)$

**理由：** 下面先用三角多项式逼近周期连续函数，C[0,1)会容许无界或端点不一致的函数，不能用该一致逼近。明确这一阶段的周期连续范围，后文再推广到Riemann可积函数。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> $Q = \sum_{|l|\leqslant K} c_k e^{2\pi i k x}$

**修正：**

> $Q=\sum_{|l|\leqslant K}c_l e^{2\pi i l x}\quad(K\ge1)$

**理由：** 三角多项式频率求和指标为l，系数和指数也应使用l；原图混用k。选K≥1以便随后统一用2K计数非零频率项。

**原文：**

> $$
> \|Q - f\|_{L^\infty} < \frac{1}{2}\varepsilon.
> $$

**修正：**

> $$
> \|Q-f\|_{L^\infty}<\frac\varepsilon4.
> $$

**理由：** 证明平均值趋于积分需要同时控制函数平均值的逼近误差及积分的逼近误差，两项各用ε/4，给频率平均误差留ε/2。

**原文：**

> 对每个 $l \in \mathbb{Z} \cap [-K, K]$

**修正：**

> 对每个 $l\in\mathbb Z$，$0<|l|\le K$

**理由：** 零频率的平均值为1，不趋零，不能纳入这一步的小量估计；需把常数项c0作为积分值单独保留。

**原文：**

> $$
> |c_k| \times \left| \frac{1}{n} \sum_{k=1}^n e_l(\xi_k) \right| < \frac{1}{2}\varepsilon.
> $$

**修正：**

> $$
> |c_l|\left|\frac1n\sum_{k=1}^n e_l(\xi_k)\right|<\frac\varepsilon{4K}.
> $$

**理由：** 共有2K个非零频率，每项误差应取ε/(4K)，总误差才小于ε/2。原图每项取ε/2却将总和直接界为ε/2，且系数下标混用k。

**原文：**

> $$
> \left| \frac{1}{n} \sum_{k=1}^n Q(\xi_k) \right| < \frac{1}{2}\varepsilon.
> $$

**修正：**

> $$
> \left|\frac1n\sum_{k=1}^n Q(\xi_k)-\int_0^1 Q\right|<\frac\varepsilon2.
> $$

**理由：** 多项式平均值趋于其常数系数c0=∫Q，不一定趋零。原图遗漏常数项，常数函数Q=1直接反驳原式。

**原文：**

> $$
> \left| \frac{1}{n} \sum_{k=1}^n f(\xi_k) \right| < \left| \frac{1}{n} \sum_{k=1}^n Q(\xi_k) \right| + \frac{1}{n} \sum_{k=1}^n |Q(\xi_k) - f(\xi_k)| < \varepsilon,
> $$

**修正：**

> $$
> \left|\frac1n\sum_{k=1}^n f(\xi_k)-\int_0^1 f\right|\le\left|\frac1n\sum_{k=1}^n Q(\xi_k)-\int_0^1 Q\right|+\|f-Q\|_\infty+\left|\int_0^1(Q-f)\right|<\varepsilon,
> $$

**理由：** 等分布目标是函数平均趋于积分，并非趋零。正确三角估计保留两个积分，使用前面的ε/2频率误差和两项ε/4逼近误差；原图遗漏常数项及积分误差。

**原文：**

> 其中 $a \in [0, 1)$

**修正：**

> 其中先取 $a\in(0,1)$

**理由：** 先在周期基本区间内部构造上下连续截断，保证它们在端点为零而可周期延拓；端点情形再由总质量1和内部区间结论夹逼，不直接把不周期的端点函数用于先前结论。

**原文：**

> 对任意的 $\delta > 0$（很小）, 我们定义

**修正：**

> 选 $0<\delta<\min(a,1-b,(b-a)/2)$，定义下列函数并作周期延拓；端点区间随后由总质量 $1$ 与内部区间的结论作上下夹逼得到：

**理由：** 构造的斜坡需彼此分离且不碰基本区间端点，明确δ范围后上下函数连续且可用周期三角逼近；补齐a=0或b=1的夹逼步骤。

**原文：**

> $$
> f_+(x) =
> \begin{cases}
> 1, & a \leqslant x \leqslant b; \\
> 0, & x \leqslant a - \delta \text{ 或 } x \geqslant b + \delta; \\
> \frac{1}{\delta}(x - b) + 1, & b \leqslant x \leqslant b + \delta; \\
> -\frac{1}{\delta}(x - a) + 1, & a - \delta \leqslant x \leqslant a.
> \end{cases}
> $$

**修正：**

> $$
> f_+(x) =
> \begin{cases}
> 1, & a \leqslant x \leqslant b; \\
> 0, & x \leqslant a - \delta \text{ 或 } x \geqslant b + \delta; \\
> -\frac1\delta(x-b)+1, & b \leqslant x \leqslant b + \delta; \\
> \frac1\delta(x-a)+1, & a - \delta \leqslant x \leqslant a.
> \end{cases}
> $$

**理由：** 上逼近函数在右侧b到b+δ应从1降到0，原图正斜率使其升到2，与图示及后续小面积差均不符。

**原文：**

> $$
> f_+(x) =
> \begin{cases}
> 1, & a \leqslant x \leqslant b; \\
> 0, & x \leqslant a - \delta \text{ 或 } x \geqslant b + \delta; \\
> \frac{1}{\delta}(x - b) + 1, & b \leqslant x \leqslant b + \delta; \\
> -\frac{1}{\delta}(x - a) + 1, & a - \delta \leqslant x \leqslant a.
> \end{cases}
> $$

**修正：**

> $$
> f_+(x) =
> \begin{cases}
> 1, & a \leqslant x \leqslant b; \\
> 0, & x \leqslant a - \delta \text{ 或 } x \geqslant b + \delta; \\
> -\frac1\delta(x-b)+1, & b \leqslant x \leqslant b + \delta; \\
> \frac1\delta(x-a)+1, & a - \delta \leqslant x \leqslant a.
> \end{cases}
> $$

**理由：** 上逼近函数在左侧a−δ到a应从0升到1，原图负斜率使其从2降到1。改为正斜率。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> $$
> f_-(x) =
> \begin{cases}
> 1, & a + \delta \leqslant x \leqslant b - \delta; \\
> 0, & x \leqslant a \text{ 或 } x \geqslant b; \\
> \frac{1}{\delta}(x - b - \delta) + 1, & b - \delta \leqslant x \leqslant b; \\
> -\frac{1}{\delta}(x - a + \delta) + 1, & a \leqslant x \leqslant a + \delta.
> \end{cases}
> $$

**修正：**

> $$
> f_-(x) =
> \begin{cases}
> 1, & a + \delta \leqslant x \leqslant b - \delta; \\
> 0, & x \leqslant a \text{ 或 } x \geqslant b; \\
> \frac{b-x}{\delta}, & b - \delta \leqslant x \leqslant b; \\
> \frac{x-a}{\delta}, & a \leqslant x \leqslant a + \delta.
> \end{cases}
> $$

**理由：** 下逼近函数在b−δ到b应从1降到0，原图公式从−1升到0，错误且不连续。改为线性下降斜坡。

**原文：**

> $$
> f_-(x) =
> \begin{cases}
> 1, & a + \delta \leqslant x \leqslant b - \delta; \\
> 0, & x \leqslant a \text{ 或 } x \geqslant b; \\
> \frac{1}{\delta}(x - b - \delta) + 1, & b - \delta \leqslant x \leqslant b; \\
> -\frac{1}{\delta}(x - a + \delta) + 1, & a \leqslant x \leqslant a + \delta.
> \end{cases}
> $$

**修正：**

> $$
> f_-(x) =
> \begin{cases}
> 1, & a + \delta \leqslant x \leqslant b - \delta; \\
> 0, & x \leqslant a \text{ 或 } x \geqslant b; \\
> \frac{b-x}{\delta}, & b - \delta \leqslant x \leqslant b; \\
> \frac{x-a}{\delta}, & a \leqslant x \leqslant a + \delta.
> \end{cases}
> $$

**理由：** 下逼近函数在a到a+δ应从0升到1，原图公式从0降到−1，错误且不连续。改为线性上升斜坡。

**原文：**

> $$
> \lim_{n\to\infty} \frac{1}{n} \left( \sum_{k=1}^n \mathbf{1}(\xi_k) \right) - \int_0^1 \mathbf{1}(x) dx = O(\delta).
> $$

**修正：**

> $$
> \limsup_{n\to\infty}\left|\frac1n\sum_{k=1}^n\mathbf1_{[a,b]}(\xi_k)-\int_0^1\mathbf1_{[a,b]}(x)\,dx\right|\le2\delta.
> $$

**理由：** 此时尚未证明示性函数平均值存在极限，不能先写lim。上下夹逼首先给出偏差绝对值的上极限≤2δ，随后δ趋零才能推出极限存在且等于积分。

**原文：**

> $$
> f_+(x) = \sum_{k=0}^{N-1} \left( \sup_{y \in [x_k, x_{k+1}]} f(y) \right) \mathbf{1}_{[x_k, x_{k+1}]}(x),
> $$

**修正：**

> $$
> f_+(x) = \sum_{k=0}^{N-1} \left( \sup_{y \in [x_k, x_{k+1}]} f(y) \right) \mathbf1_{[x_k,x_{k+1})}(x),
> $$

**理由：** 阶梯函数应以互不重叠的半开分割区间定义；闭区间会在节点重复计数，任意等分布序列可命中节点而破坏逐点上下界。改为半开区间后对[0,1)所有点均有正确夹逼。

**原文：**

> $$
> f_-(x) = \sum_{k=0}^{N-1} \left( \inf_{y \in [x_k, x_{k+1}]} f(y) \right) \mathbf{1}_{[x_k, x_{k+1}]}(x).
> $$

**修正：**

> $$
> f_-(x) = \sum_{k=0}^{N-1} \left( \inf_{y \in [x_k, x_{k+1}]} f(y) \right) \mathbf1_{[x_k,x_{k+1})}(x).
> $$

**理由：** 阶梯函数应以互不重叠的半开分割区间定义；闭区间会在节点重复计数，任意等分布序列可命中节点而破坏逐点上下界。改为半开区间后对[0,1)所有点均有正确夹逼。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> 对任意的 $l \neq 0$

**修正：**

> 对任意的 $l\in\mathbb Z\setminus\{0\}$

**理由：** Weyl判别中的测试频率是非零整数，原图只写非零未指定整数；非整数频率的[0,1]积分一般不为零。

**原文：**

> $$
> \sum_{k=1}^n e^{i b k^\sigma} - \int_0^n e^{i b x^\sigma} dx = \sum_{k=1}^{n-1} \int_k^{k+1} \left( e^{i b k^\sigma} - e^{i b x^\sigma} \right) dx.
> $$

**修正：**

> $$
> \sum_{k=1}^{n-1} e^{i b k^\sigma} - \int_1^n e^{i b x^\sigma} dx = \sum_{k=1}^{n-1} \int_k^{k+1} \left( e^{i b k^\sigma} - e^{i b x^\sigma} \right) dx.
> $$

**理由：** 右侧逐区间[k,k+1]求和覆盖[1,n]，左侧应是前n−1项与该区间积分的差；原图包含第n项和[0,1]却没相应端项。端项总量为O(1)，不影响o(n)目标。

**原文：**

> $$
> \left| \sum_{k=1}^{n-1} e^{i b k^\sigma} - \int_1^{n-1} e^{i b x^\sigma} dx \right| \leqslant C \sum_{k=1}^n \int_k^{k+1} k^{-1+\sigma} dx = O(n^\sigma) (= o(n)).
> $$

**修正：**

> $$
> \left| \sum_{k=1}^{n-1} e^{i b k^\sigma} - \int_1^n e^{i b x^\sigma} dx \right| \leqslant C \sum_{k=1}^n \int_k^{k+1} k^{-1+\sigma} dx = O(n^\sigma) (= o(n)).
> $$

**理由：** 与上式前n−1个单位区间匹配，积分上端应为n，原图错误写为n−1。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> $$
> \int_1^n e^{i b x^\sigma} dx = \frac{1}{i \sigma b} \int_1^{n-1} (e^{i b x^\sigma})' x^{1-\sigma} dx
> $$

**修正：**

> $$
> \int_1^n e^{i b x^\sigma} dx = \frac{1}{i \sigma b} \int_1^n (e^{i b x^\sigma})' x^{1-\sigma} dx
> $$

**理由：** 本行是同一个[1,n]积分的恒等改写，分部积分前的积分区间必须仍到n；原图误写n−1。

**原文：**

> $$
> = \underbrace{\left. e^{i b x^\sigma} x^{1-\sigma} \right|_{x=1}^{x=n}}_{O(n^{1-\sigma})} - \frac{1-\sigma}{i \sigma b} \int_1^n e^{i b x^\sigma} x^{-\sigma} dx.
> $$

**修正：**

> $$
> = \underbrace{\left.\frac1{i\sigma b}e^{ibx^\sigma}x^{1-\sigma} \right|_{x=1}^{x=n}}_{O(n^{1-\sigma})} - \frac{1-\sigma}{i \sigma b} \int_1^n e^{i b x^\sigma} x^{-\sigma} dx.
> $$

**理由：** 分部积分前系数为1/(iσb)，边界项也需保留该系数；原图在边界项漏写，尽管O(n^(1−σ))量级不变。

**原文：**

> $$
> \left| \int_1^n e^{i b x^\sigma} x^{-\sigma} dx \right| \leqslant \int_1^n x^{-\sigma} dx = O(n^{1-\delta}).
> $$

**修正：**

> $$
> \left| \int_1^n e^{i b x^\sigma} x^{-\sigma} dx \right| \leqslant \int_1^n x^{-\sigma} dx = O(n^{1-\sigma}).
> $$

**理由：** 所积幂为x^−σ，其积分量级为n^(1−σ)。δ未在该例中定义，原图误换指数符号。

**原文：**

> $$
> \xi_k = a \log(k).
> $$

**修正：**

> $$
> \xi_k=\{a\log k\}.
> $$

**理由：** 该例讨论[0,1)上的等分布，需取a log k的小数部分。周期指数的计算仍可直接用a log k。

**原文：**

> $$
> \sum_{k=1}^n e^{i b \log(k)} - \int_0^n e^{i b \log(x)} dx = \sum_{k=0}^{n-1} \int_k^{k+1} \left( e^{i \log(k)} - e^{i b \log(x)} \right) dx.
> $$

**修正：**

> $$
> \sum_{k=1}^{n-1} e^{i b \log(k)} - \int_1^n e^{i b \log(x)} dx = \sum_{k=1}^{n-1} \int_k^{k+1} \left( e^{ib\log k} - e^{i b \log(x)} \right) dx.
> $$

**理由：** 用[k,k+1]的差值估计须从k=1起，log0未定义。改为前n−1项与[1,n]积分的精确差式，并补回原图指数漏掉的b；剩余第n项及[0,1]积分均为O(1)。

**原文：**

> $$
> \left| \sum_{k=1}^n e^{i b \log(k)} - \int_0^n e^{i b \log(x)} dx \right| \leqslant \sum_{k=0}^{n-1} \int_k^{k+1} \frac{C}{k} dx = O(\log(n)).
> $$

**修正：**

> $$
> \left| \sum_{k=1}^{n-1} e^{i b \log(k)} - \int_1^n e^{i b \log(x)} dx \right| \leqslant \sum_{k=1}^{n-1} \int_k^{k+1} \frac{C}{k} dx = O(\log(n)).
> $$

**理由：** 与前式同一端点分割，求和从1开始才可用C/k，原图从0开始含无定义的C/0。积分从1到n与对数积分的后续计算一致。

**原文：**

> 存在依赖于 $b$ 和 $\sigma$ 的常数

**修正：**

> 存在依赖于 $b$ 的常数

**理由：** 此例已经改为a log k，没有参数σ；导数估计的常数依赖固定的b即可，原图沿用上一例的多余参数。

[相关正文：56：Bernstein 定理与等分布](../../02-math-analysis-ii/56-bernstein-equidistribution.md)

## 数学修正

**原文：**

> $\int_1^n e^{ib \log x} dx \neq o(1)$

**修正：**

> $\int_1^n e^{ib\log x}\,dx\neq o(n)$

**理由：** Weyl判别需要指数和为o(n)，此处归一化积分模长趋于1/√(1+b²)>0，证明积分不是o(n)。原图只写非o(1)，该弱结论不足以排除等分布。
