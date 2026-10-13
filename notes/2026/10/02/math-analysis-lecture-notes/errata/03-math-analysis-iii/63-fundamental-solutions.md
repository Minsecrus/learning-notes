# 勘误：63 基本解与椭圆正则性

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> 对任意的的

**修正：**

> 对任意的

**理由：** 源图的重复出现，删去一次即可保留命题420。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> 这个字空间

**修正：**

> 这个子空间

**理由：** 源图子空间误写为字空间，所指前行的函数子空间。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> 从而可以于

**修正：**

> 从而可以与

**理由：** 源图介词于误为与，此处说明函数与紧支集分布卷积。

**原文：**

> 3) 常值函数

**修正：**

> 2) 常值函数

**理由：** 源图说两个条件，却从1跳到3；这里为第二条条件。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> $$\langle f * c, \varphi \rangle = \langle f, \underbrace{\check{c} * \varphi}_{\text{紧支集}} \rangle = \left\langle \sum_{q \in \mathbb{Z}} f_p, \check{c} * \varphi \right\rangle = \left\langle \underbrace{\sum}_{\text{有限和}} f_p, \check{c} * \varphi \right\rangle.$$

**修正：**

> $$\langle f * c, \varphi \rangle = \langle f, \underbrace{\check{c} * \varphi}_{\text{紧支集}} \rangle = \left\langle \sum_{q \in \mathbb{Z}^n} f_q, \check{c} * \varphi \right\rangle = \left\langle \underbrace{\sum}_{\text{有限和}} f_q, \check{c} * \varphi \right\rangle.$$

**理由：** 源图已按q∈Zn定义fq，后续公式却混用p与q、Z与Zn；统一为同一n维格点哑指标q以恢复正确分解。

**原文：**

> $$\begin{aligned}
> \langle f * c, \varphi \rangle &= \sum_{\text{有限和}} \langle f_p * c, \varphi \rangle \\
> &= \sum_{\text{有限和}} \langle c * f_p, \varphi \rangle \\
> &= \sum_{\text{有限和}} \int_{\mathbb{R}^n} \langle c, f_p(x - \cdot) \rangle \varphi(x) dx.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle f * c, \varphi \rangle &= \sum_{\text{有限和}} \langle f_q * c, \varphi \rangle \\
> &= \sum_{\text{有限和}} \langle c * f_q, \varphi \rangle \\
> &= \sum_{\text{有限和}} \int_{\mathbb{R}^n} \langle c, f_q(x - \cdot) \rangle \varphi(x) dx.
> \end{aligned}$$

**理由：** 源图已按q∈Zn定义fq，后续公式却混用p与q、Z与Zn；统一为同一n维格点哑指标q以恢复正确分解。

**原文：**

> $$\begin{aligned}
> \langle f * c, \varphi \rangle &= \int_{\mathbb{R}^n} \left\langle c, \sum_{\text{有限和}} f_p(x - \cdot) \right\rangle \varphi(x) dx \\
> &= \int_{\mathbb{R}^n} \left\langle c, \sum_{p \in \mathbb{Z}} f_p(x - \cdot) \right\rangle \varphi(x) dx \\
> &= \int_{\mathbb{R}^n} \langle c, f(x - \cdot) \rangle \varphi(x) dx.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle f * c, \varphi \rangle &= \int_{\mathbb{R}^n} \left\langle c, \sum_{\text{有限和}} f_q(x - \cdot) \right\rangle \varphi(x) dx \\
> &= \int_{\mathbb{R}^n} \left\langle c, \sum_{q \in \mathbb{Z}^n} f_q(x - \cdot) \right\rangle \varphi(x) dx \\
> &= \int_{\mathbb{R}^n} \langle c, f(x - \cdot) \rangle \varphi(x) dx.
> \end{aligned}$$

**理由：** 源图已按q∈Zn定义fq，后续公式却混用p与q、Z与Zn；统一为同一n维格点哑指标q以恢复正确分解。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> Σp∈Z f(x−·)

**正文：**

> $$\begin{aligned}
> \langle f * c, \varphi \rangle &= \int_{\mathbb{R}^n} \left\langle c, \sum_{\text{有限和}} f_q(x - \cdot) \right\rangle \varphi(x) dx \\
> &= \int_{\mathbb{R}^n} \left\langle c, \sum_{q \in \mathbb{Z}^n} f_q(x - \cdot) \right\rangle \varphi(x) dx \\
> &= \int_{\mathbb{R}^n} \langle c, f(x - \cdot) \rangle \varphi(x) dx.
> \end{aligned}$$

**理由：** 源图此行漏f的下标p导致无限次重复求和f，canonical已经补p；另有哑指标/维数候选统一为q∈Zn。

## 未决数学问题

**原文：**

> 令 $N = 0$，那么我们就可以得到非负的光滑函数

**问题：** 源图引理424只对N≥1陈述，此处却取N=0；即便允许N=0，Γ0=(1/2)Zn并非此处Zn，直接重标后立方体边长会成为4而非2。所需整数格点边长2单位分解确实可另构造，但这一步与当前引理不吻合，保留疑点，避免猜更早引理中指数笔误。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> 我们选取非负的 $\chi$, 使得它的支集在半径为 $1$ 的小球之内并且其积分恰好等于 $1$。

**修正：**

> 我们选取非负的光滑截断函数 $\chi$，使得其支集在单位球之内且在原点的一个邻域内恒为 $1$，并令 $\chi_\varepsilon(z)=\chi(z/\varepsilon)$。

**理由：** 源图把单位逼近错用作截断；(1−χε)/z光滑需要χε在原点邻域恒1，通常ε^−n归一化核不满足，故用未归一化的缩放截断。

**原文：**

> $\mathbb{R}^2 - B_\varepsilon - \operatorname{supp}(c)$

**修正：**

> $\mathbb{R}^2 - (B_\varepsilon + \operatorname{supp}(c))$

**理由：** 源图应取卷积支集的Minkowski和的补集，两次集合差无法表达该集合。

**原文：**

> 使得 $B(z_0, 2\varepsilon) \subset \Omega$

**修正：**

> 使得 $\overline{B(z_0, 2\varepsilon)} \subset \Omega$

**理由：** 源图仅开球包含于Ω不能确保θ支集作为Ω内紧集；选小闭球包含Ω保证θu能紧支集延拓Rn。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> 我们只需要证明 $\theta \cdot u$ 光滑即可

**修正：**

> 我们只需要证明 $\theta \cdot u$ 在 $B(z_0,\varepsilon)$ 上光滑即可

**理由：** 源图实际只证明θu在小球上光滑，没有全空间光滑；这是所需局部结论，应限定同一小球。

## 未决数学问题

**原文：**

> 比如说, 只要求它们是 $L^\infty$ 的函数等

**问题：** 源图放宽系数至L∞的附注须限制所作用的对象或另给弱算子定义，一般分布无法乘任意L∞函数（δ′无法感知其点值/导数）。后文算子对所有分布的定义只在光滑系数假设下成立；此注有应用条件遗漏。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> $$ \begin{cases} E(x) = -\dfrac{1}{2\pi} \log |x|, & n = 2; \\[1em] E(x) = \dfrac{1}{(2-n)|\mathbf{S}^{n-1}|} \dfrac{1}{|x|^{n-2}}, & n \geqslant 3. \end{cases} $$

**修正：**

> $$ \begin{cases} E(x) = \dfrac{1}{2\pi} \log |x|, & n = 2; \\[1em] E(x) = \dfrac{1}{(2-n)|\mathbf{S}^{n-1}|} \dfrac{1}{|x|^{n-2}}, & n \geqslant 3. \end{cases} $$

**理由：** 源图二维Laplace基本解负号错误；此处Δ=Σ∂k²，圆周径向通量∮∂r log r=2π，故Δlog|x|=2πδ0，三维及以上负常数已正确。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> 观察到这时一个正函数

**修正：**

> 观察到这是一个非负函数

**理由：** 源图时为是的误字；E在t<0恒零故全局为非负，而t>0为正。

**原文：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx \\ &= \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx}_{I_\varepsilon} \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx}_{J_\varepsilon} . \end{aligned} $$

**修正：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt \\ &= - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt}_{I_\varepsilon} - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt}_{J_\varepsilon} . \end{aligned} $$

**理由：** 原图underbrace仅包正的ε截断积分，转录错误包含−lim，导致Iε/Jε定义与后续分部积分符号矛盾；恢复原图界限，并按内x外t写dxdt。

**原文：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx \\ &= \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx}_{I_\varepsilon} \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx}_{J_\varepsilon} . \end{aligned} $$

**修正：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt \\ &= - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt}_{I_\varepsilon} - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt}_{J_\varepsilon} . \end{aligned} $$

**理由：** 原图underbrace仅包正的ε截断积分，转录错误包含−lim，导致Iε/Jε定义与后续分部积分符号矛盾；恢复原图界限，并按内x外t写dxdt。

**原文：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx \\ &= \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx}_{I_\varepsilon} \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx}_{J_\varepsilon} . \end{aligned} $$

**修正：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt \\ &= - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt}_{I_\varepsilon} - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt}_{J_\varepsilon} . \end{aligned} $$

**理由：** 源图热核配对的累次积分内层x外层t，积分微分需dxdt。

**原文：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx \\ &= \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dt dx}_{I_\varepsilon} \underbrace{- \lim_{\varepsilon \to 0} \int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dt dx}_{J_\varepsilon} . \end{aligned} $$

**修正：**

> $$ \begin{aligned} \langle (\partial_t - \Delta)(E(t, x)), \varphi(t, x) \rangle &= - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt - \int_0^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt \\ &= - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \partial_t \varphi(t, x) dx dt}_{I_\varepsilon} - \lim_{\varepsilon \to 0} \underbrace{\int_\varepsilon^\infty \int_{\mathbb{R}^n} E(t, x) \Delta \varphi(t, x) dx dt}_{J_\varepsilon} . \end{aligned} $$

**理由：** 源图热核配对的累次积分内层x外层t，积分微分需dxdt。

**原文：**

> $$ \begin{aligned} I_\varepsilon &\overset{\text{Funibi}}{=} \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty E(t, x) \partial_t \varphi(t, x) dt \right) dx \\ &= - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \partial_t E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{热方程}}{=} - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \Delta E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{Funibi}}{=} - J_\varepsilon - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} I_\varepsilon &\overset{\text{Fubini}}{=} \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty E(t, x) \partial_t \varphi(t, x) dt \right) dx \\ &= - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \partial_t E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{热方程}}{=} - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \Delta E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{Fubini}}{=} - J_\varepsilon - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx. \end{aligned} $$

**理由：** 源图Fubini人名误拼为Funibi，所用为积分换序定理。

**原文：**

> $$ \begin{aligned} I_\varepsilon &\overset{\text{Funibi}}{=} \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty E(t, x) \partial_t \varphi(t, x) dt \right) dx \\ &= - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \partial_t E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{热方程}}{=} - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \Delta E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{Funibi}}{=} - J_\varepsilon - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} I_\varepsilon &\overset{\text{Fubini}}{=} \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty E(t, x) \partial_t \varphi(t, x) dt \right) dx \\ &= - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \partial_t E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{热方程}}{=} - \int_{\mathbb{R}^n} \left( \int_\varepsilon^\infty \Delta E(t, x) \varphi(t, x) dt \right) dx - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx \\ &\overset{\text{Fubini}}{=} - J_\varepsilon - \int_{\mathbb{R}^n} E(\varepsilon, x) \varphi(\varepsilon, x) dx. \end{aligned} $$

**理由：** 源图Fubini人名误拼为Funibi，所用为积分换序定理。

**原文：**

> 在 $[0, A]$ 上是可积分的

**修正：**

> 在 $[0, A]\times\mathbb{R}^n$ 上是可积分的

**理由：** 源图E是(t,x)函数，控制收敛需整个时间空间域上可积，前文已证明[0,A]×Rn可积。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> R × R² − {(0,0)}

**正文：**

> $\mathbb{R} \times \mathbb{R}^n - \{(0, 0)\}$

**理由：** 源图热核空间维数R²误写，应Rn，canonical已正确。

[相关正文：基本解与椭圆正则性](../../03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764.md)

## 数学修正

**原文：**

> $$
> -(I_\varepsilon + J_\varepsilon) = -\frac{1}{(4\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} e^{-\frac{|y|^2}{4}} \left( \varphi(\varepsilon, \sqrt{\varepsilon}y) - \varphi(0,0) \right) dy + \varphi(0,0).
> $$

**修正：**

> $$
> -(I_\varepsilon + J_\varepsilon) = \frac{1}{(4\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} e^{-\frac{|y|^2}{4}} \left( \varphi(\varepsilon, \sqrt{\varepsilon}y) - \varphi(0,0) \right) dy + \varphi(0,0).
> $$

**理由：** 源图减去φ(0,0)的余项符号错；前式I+J=−Gauss平均，故−(I+J)=φ(0,0)+Gauss平均(φ−φ0)，余项应正。

**原文：**

> 根据 Lagrange 中值定理

**修正：**

> 根据微积分基本定理的积分估计

**理由：** 源图试验函数允许复值，实值Lagrange中值定理不能直接用于复函数；沿线段积分梯度并取绝对值得同一估计。

**原文：**

> 两个积分都有有限的

**修正：**

> 两个积分都是有限的

**理由：** 原句语法不完整，两个Gaussian积分均有限，此处应写都是有限的。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> $$
> K \subset V \subset U; \quad \varphi|_V \equiv 1.
> $$

**修正：**

> $$
> K \subset V \subset \Omega; \quad \varphi|_V \equiv 1.
> $$

**理由：** 源图A0的U未定义，假设给定开集为Ω，截断邻域应包含在Ω内。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> $u \in L^1_{\text{loc}}(\Omega), f \in \mathcal{D}'(\mathbb{R}^n)$

**修正：**

> $u \in L^1_{\text{loc}}(\Omega), f \in C^\infty(\Omega)$

**理由：** 源图把乘数f写成分布，任意分布乘L1loc函数既非已定义操作亦无传统乘积；此题验证此前定义的光滑函数乘分布，故f应光滑。

**原文：**

> 等于现在传统意义下得到

**修正：**

> 等于先在传统意义下得到

**理由：** 源图先在，转录为现在倒置；此题比较先分布化与先取乘积的过程。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> u*φ(x0+εa)−u*φ(x0+εa)

**正文：**

> $$
> u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0) - \varepsilon \sum_{j=1}^n a_j u * \partial_j \varphi(x_0) = \varepsilon^2 \langle u, r(\cdot, \varepsilon, a) \rangle.
> $$

**理由：** 源图增量第二项重复x0+εa，canonical已正确改为x0。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> 假设 $F(z)$ 单位圆盘上的

**修正：**

> 假设 $F(z)$ 是单位圆盘上的

**理由：** 源图该句缺系词是，保留所给复解析函数假设。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> φ∈D(Rb)

**正文：**

> $\varphi \in \mathcal{D}(\mathbb{R}^n)$

**理由：** 源图A7试验函数域Rb中的b未定义，canonical已正确写Rn。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> $$
> \lim_{\varepsilon \to 0} \frac{\varepsilon}{\pi(x^2 + \varepsilon)} \overset{\mathcal{D}'(\mathbb{R})}{=} \delta_0.
> $$

**修正：**

> $$
> \lim_{\varepsilon \to 0^+} \frac{\varepsilon}{\pi(x^2 + \varepsilon^2)} \overset{\mathcal{D}'(\mathbb{R})}{=} \delta_0.
> $$

**理由：** 源图Poisson核分母漏平方，现式总质量为√ε趋0；应ε/(π(x²+ε²))总质量1，且ε→0+，负侧质量−1不趋δ。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> $$f_\varepsilon(x) = \begin{cases} \log |x|, & x \geqslant \varepsilon; \\ \log \varepsilon, & |x| < \varepsilon. \end{cases}$$

**修正：**

> $$f_\varepsilon(x) = \begin{cases} \log |x|, & |x| \geqslant \varepsilon; \\ \log \varepsilon, & |x| < \varepsilon. \end{cases}$$

**理由：** 源图分段边界把Rn向量x与标量ε比较，径向截断应|x|≥ε，与另一分支|x|<ε匹配。

**原文：**

> $$g_\varepsilon(x) = \begin{cases} \log |x|, & x \geqslant \varepsilon; \\ a_\varepsilon |x|^2 + b_\varepsilon, & |x| < \varepsilon. \end{cases}$$

**修正：**

> $$g_\varepsilon(x) = \begin{cases} \log |x|, & |x| \geqslant \varepsilon; \\ a_\varepsilon |x|^2 + b_\varepsilon, & |x| < \varepsilon. \end{cases}$$

**理由：** 源图分段边界把Rn向量x与标量ε比较，径向截断应|x|≥ε，与另一分支|x|<ε匹配。

**原文：**

> C6) (接 C6))

**修正：**

> C6) (接 C5))

**理由：** 源图题目自指C6，当前结论继续使用C5定义的n≥3基本解，故应接C5。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> $$|E * f(x)| \leqslant \frac{C}{|x|}.$$

**修正：**

> $$|E * f(x)| \leqslant \frac{C_1}{|x|}.$$

**理由：** 源图C11已量化常数C1，公式却用未定义C，统一为C1。

**原文：**

> $u$ 的总质量或者总电量

**修正：**

> $f$ 的总质量或者总电量

**理由：** 源图〈f,1〉是源分布f的总质量/电量，u是其位势且通常无有限积分。

[相关正文：63.1：作业：分布的例子，Laplace算子、位势方程与分布](../../03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771.md)

## 数学修正

**原文：**

> 来逼近 $u$

**修正：**

> 来逼近 $|u|$

**理由：** 源图sqrt(u²+ε²)趋|u|而不是u，题目估计的左项也正是Δ|u|。

## 未决数学问题

**原文：**

> The topology in $C^\infty(X)$ is the inductive limit

**问题：** 源图引述把C∞(X)称作紧支集空间的归纳极限及LF空间，但通常C∞(X)是Fréchet，紧支集试验函数D(X)才是相应LF归纳极限。此为署名引文，需查核原书上下文或注明引文中的空间记号笔误，不能无证据替换引用原文。
