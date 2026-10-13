# 勘误：70 Sobolev 空间性质与嵌入定理

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：Sobolev 空间性质与嵌入定理](../../03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836.md)

## 数学修正

**原文：**

> 对多项式增长的乘子函数 $m(\xi)$ 定义了 Fourier 乘子

**修正：**

> 对光滑且各阶导数均为多项式增长的乘子函数 $m(\xi)$ 定义了 Fourier 乘子

**理由：** 本段重复上节S′全空间的定义，应同步补Schwartz乘子条件，避免只对m函数值增长而对任意分布宣称乘法有定义。

**原文：**

> 对任意的在频率空间 $\mathbb{R}^n_\xi$ 多项式增长的乘子函数 $m(\xi)$

**修正：**

> 对任意在频率空间 $\mathbb R^n_\xi$ 上光滑、各阶导数均为多项式增长的乘子函数 $m(\xi)$

**理由：** 同一S′乘子定义的再次表述需保留全部导数增长的光滑前提，与后面Sobolev函数频率乘法的一般可测乘子区分。

[相关正文：Sobolev 空间性质与嵌入定理](../../03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836.md)

## 数学修正

**原文：**

> 给定多项式增长的乘子函数

**修正：**

> 给定多项式增长的可测乘子函数

**理由：** 本命题只在Fourier变换为局部可积函数的Hs上定义乘法，可测性及幂增长已足够且是必要的可积性前提。原图只写函数值增长未给可测性。

**原文：**

> 任意的 $d$-阶的微分算子 $P$

**修正：**

> 任意的 $d$ 阶常系数微分算子 $P$

**理由：** 此处由Fourier多项式乘子推出映射性，只适用于常系数算子；任意光滑但快速增长的变系数并不保持全空间Hs。

**原文：**

> $$
> (1 + \Delta)^{\frac{p}{2}} : H^s(\mathbb{R}^n) \to H^{s-p}(\mathbb{R}^n).
> $$

**修正：**

> $$
> (1-\Delta)^{\frac{p}{2}} : H^s(\mathbb{R}^n) \to H^{s-p}(\mathbb{R}^n).
> $$

**理由：** Δ的Fourier符号为−|ξ|²，正的Bessel权为1−Δ，逆乘子为(1+|ξ|²)^−p/2。原图1+Δ有零点且不能作为该同构。

**原文：**

> 其中, 上述映射的逆映射是 $(1 + \Delta)^{-\frac{p}{2}}$。

**修正：**

> 其中, 上述映射的逆映射是 $(1-\Delta)^{-\frac{p}{2}}$。

**理由：** Δ的Fourier符号为−|ξ|²，正的Bessel权为1−Δ，逆乘子为(1+|ξ|²)^−p/2。原图1+Δ有零点且不能作为该同构。

[相关正文：Sobolev 空间性质与嵌入定理](../../03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836.md)

## 数学修正

**原文：**

> 微分算子的情形是一个特例。为了说明 $m(D) = (1 + \Delta)^{\frac{p}{2}}$ 有逆, 我们用

**修正：**

> 微分算子的情形是一个特例。为了说明 $m(D) = (1-\Delta)^{\frac{p}{2}}$ 有逆, 我们用

**理由：** Δ的Fourier符号为−|ξ|²，正的Bessel权为1−Δ，逆乘子为(1+|ξ|²)^−p/2。原图1+Δ有零点且不能作为该同构。

**原文：**

> $$
> n(\xi) = (1 + |\xi|)^{-\frac{p}{2}}
> $$

**修正：**

> $$
> n(\xi)=(1+|\xi|^2)^{-\frac p2}
> $$

**理由：** (1−Δ)^(p/2)的乘子为(1+|ξ|²)^(p/2)，逆需同一个平方权，原图漏平方。

**原文：**

> $$
> \widehat{m(D)n(D)u} = (1 + |\xi|)^{\frac{p}{2}} (1 + |\xi|)^{-\frac{p}{2}} \widehat{u}(\xi) = \widehat{u}(\xi).
> $$

**修正：**

> $$
> \widehat{m(D)n(D)u} = (1+|\xi|^2)^{\frac{p}{2}} (1+|\xi|^2)^{-\frac{p}{2}} \widehat{u}(\xi) = \widehat{u}(\xi).
> $$

**理由：** 与Bessel算子1−Δ的p/2次幂对应，正逆两个乘子都必须用|ξ|²；原图两处漏平方，原乘子不对应声明的Sobolev降阶p。

**原文：**

> 指标 $s \in \mathbb{R}^n$

**修正：**

> 指标 $s\in\mathbb R$

**理由：** Sobolev指标为实数，不是n维向量，原图误加n。

**原文：**

> 我们有不等式

**修正：**

> 令 $P_s=\max\{0,\lceil2s+n+1\rceil\}+n+1$，我们有不等式

**理由：** 采用之前已证明的Schwartz到Hs估计，并将半范数指标取为非负整数Ps，避免任意实数s时Ns+n+1未定义。

**原文：**

> $$
> \|\psi\|_{H^s} \leqslant C N_{s+n+1}(\psi).
> $$

**修正：**

> $$
> \|\psi\|_{H^s} \leqslant C N_{P_s}(\psi).
> $$

**理由：** 前面选取的非负整数Ps使Schwartz半范数有定义，并用同一范数分别控制Hs距离和紧支集逼近；原图对实数或负指标直接写Ns+n+1。

**原文：**

> $$
> N_{s+n+1}(\psi - \varphi) < \frac{\varepsilon}{2C}.
> $$

**修正：**

> $$
> N_{P_s}(\psi - \varphi) < \frac{\varepsilon}{2C}.
> $$

**理由：** 前面选取的非负整数Ps使Schwartz半范数有定义，并用同一范数分别控制Hs距离和紧支集逼近；原图对实数或负指标直接写Ns+n+1。

[相关正文：Sobolev 空间性质与嵌入定理](../../03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836.md)

## 数学修正

**原文：**

> $N = \lfloor \frac{p}{2} \rfloor - n - 1$

**修正：**

> $N=\lfloor\frac p2\rfloor+n+1$

**理由：** g的乘子在上一行是(1+|ξ|²)^−(floor(p/2)+n+1)，故逆回c的正整数幂N为floor(p/2)+n+1。原图把两个正项错写负数。

**原文：**

> 在 $c$ 的支集上恒为 $1$

**修正：**

> 在 $c$ 的支集的一个开邻域上恒为 $1$

**理由：** 结构定理用χc=c，包含δ导数的一般分布要求χ在邻域恒1，而非只在支集点集取值1。

[相关正文：Sobolev 空间性质与嵌入定理](../../03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \|u \cdot v\|_{H^s}^2 &= \int_{\mathbb{R}^n} (1 + |\xi|^2)^s \left| \int_{\mathbb{R}^n} \widehat{u}(\xi - \eta)\widehat{v}(\eta) \mathrm{d}\eta \right|^2 \mathrm{d}\xi \\
> &\leqslant \int_{\mathbb{R}^n} (1 + |\xi|^2)^s \left( \int_{\mathbb{R}^n} |\widehat{u}(\xi - \eta)||\widehat{v}(\eta)| \mathrm{d}\eta \right)^2 \mathrm{d}\xi.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|u\cdot v\|_{H^s}^2 &=\frac1{(2\pi)^{2n}}\int_{\mathbb R^n} (1 + |\xi|^2)^s \left| \int_{\mathbb{R}^n} \widehat{u}(\xi - \eta)\widehat{v}(\eta) \mathrm{d}\eta \right|^2 \mathrm{d}\xi \\
> &\leqslant \int_{\mathbb{R}^n} (1 + |\xi|^2)^s \left( \int_{\mathbb{R}^n} |\widehat{u}(\xi - \eta)||\widehat{v}(\eta)| \mathrm{d}\eta \right)^2 \mathrm{d}\xi.
> \end{aligned}
> $$

**理由：** 无归一Fourier定义给F(uv)=(2π)^−n(hat u*hat v)，平方范数需因子(2π)^−2n。原图首行等号漏因子；后续可将小于1的此常数省去作上界。

**原文：**

> $$
> \begin{aligned}
> (1 + |\xi|^2)^{\frac{s}{2}} &\leqslant (1 + 2|\xi - \eta|^2 + 2|\eta|^2)^{\frac{s}{2}} \leqslant 2^{\frac{s}{2}} \left( (1 + |\xi - \eta|^2) + (1 + |\eta|^2) \right)^{\frac{s}{2}} \\
> &\leqslant 2^{2s} \left( (1 + |\xi - \eta|^2)^{\frac{s}{2}} + (1 + |\eta|^2)^{\frac{s}{2}} \right).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> (1 + |\xi|^2)^{\frac{s}{2}} &\leqslant (1 + 2|\xi - \eta|^2 + 2|\eta|^2)^{\frac{s}{2}} \leqslant 2^{\frac{s}{2}} \left( (1 + |\xi - \eta|^2) + (1 + |\eta|^2) \right)^{\frac{s}{2}} \\
> &\leqslant 2^s\left((1+|\xi-\eta|^2)^{\frac{s}{2}} + (1 + |\eta|^2)^{\frac{s}{2}} \right).
> \end{aligned}
> $$

**理由：** 前行第一因子2^(s/2)，幂和不等式再给2^(s/2)，可用2^s。这样平方后恰为后面2^(2s)；原图先放宽到2^(2s)却未在后面平方，常数链不成立。

**原文：**

> $$
> \begin{aligned}
> \|u \cdot v\|_{H^s}^2 &\leqslant 2^{2s} \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} \left( (1 + |\xi - \eta|^2)^{\frac{s}{2}} |\widehat{u}(\xi - \eta)||\widehat{v}(\eta)| + (1 + |\eta|^2)^{\frac{s}{2}} |\widehat{v}(\eta)||\widehat{u}(\xi - \eta)| \right) \mathrm{d}\eta \right)^2 \mathrm{d}\xi \\
> &\leqslant 2^{2s} \int_{\mathbb{R}^n} \left( \left( \int_{\mathbb{R}^n} \underbrace{(1 + |\xi - \eta|^2)^{\frac{s}{2}} |\widehat{u}(\xi - \eta)|}_{f(\xi - \eta)} \underbrace{|\widehat{v}(\eta)|}_{g(\eta)} \mathrm{d}\eta \right)^2 + \left( \int_{\mathbb{R}^n} (1 + |\eta|^2)^{\frac{s}{2}} |\widehat{v}(\eta)||\widehat{u}(\xi - \eta)| \mathrm{d}\eta \right)^2 \right) \mathrm{d}\xi.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|u \cdot v\|_{H^s}^2 &\leqslant 2^{2s} \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} \left( (1 + |\xi - \eta|^2)^{\frac{s}{2}} |\widehat{u}(\xi - \eta)||\widehat{v}(\eta)| + (1 + |\eta|^2)^{\frac{s}{2}} |\widehat{v}(\eta)||\widehat{u}(\xi - \eta)| \right) \mathrm{d}\eta \right)^2 \mathrm{d}\xi \\
> &\leqslant 2^{2s+1}\int_{\mathbb R^n}\left(\left(\int_{\mathbb{R}^n} \underbrace{(1 + |\xi - \eta|^2)^{\frac{s}{2}} |\widehat{u}(\xi - \eta)|}_{f(\xi - \eta)} \underbrace{|\widehat{v}(\eta)|}_{g(\eta)} \mathrm{d}\eta \right)^2 + \left( \int_{\mathbb{R}^n} (1 + |\eta|^2)^{\frac{s}{2}} |\widehat{v}(\eta)||\widehat{u}(\xi - \eta)| \mathrm{d}\eta \right)^2 \right) \mathrm{d}\xi.
> \end{aligned}
> $$

**理由：** 将(A+B)²分成A²+B²需额外因子2。原图直接≤A²+B²漏交叉项上界，补该系数。

**原文：**

> $$
> \|f\|_{L^2} \leqslant C_1 \|u\|_{H^s}, \quad \|g\|_{L^2} \leqslant C_2 \|v\|_{H^s}.
> $$

**修正：**

> $$
> \|f\|_{L^2} \leqslant C_1 \|u\|_{H^s}, \quad \|g\|_{L^1}\leqslant C_2 \|v\|_{H^s}.
> $$

**理由：** Young L¹*L²→L²用g=|hat v|的L¹界，且前文刚由s>n/2证明该L¹界；原图此处把L¹误写L²。

**原文：**

> $g(\xi) = \widehat{v} \in L^1(\mathbb{R}^n)$

**修正：**

> $g(\xi)=|\widehat v|\in L^1(\mathbb R^n)$

**理由：** 同页卷积拆分已定义g为Fourier变换的绝对值，随后L1论证必须沿用g=|hat v|；源图此处漏绝对值，不能把前面非负g改定义为复值hat v。

[相关正文：Sobolev 空间性质与嵌入定理](../../03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836.md)

## 数学修正

**原文：**

> $$
> \|u \cdot v\|_{H^s}^2 \leqslant 2^{2s} \left( C_1 C_2 \|u\|_{H^s}^2 \|v\|_{H^s}^2 + C_1 C_2 \|u\|_{H^s}^2 \|v\|_{H^s}^2 \right).
> $$

**修正：**

> $$
> \|u \cdot v\|_{H^s}^2 \leqslant 2^{2s+1} \left( (C_1C_2)^2 \|u\|_{H^s}^2 \|v\|_{H^s}^2 + (C_1C_2)^2 \|u\|_{H^s}^2 \|v\|_{H^s}^2 \right).
> $$

**理由：** 前页拆分两项时因(A+B)²≤2(A²+B²)多一个2；Young估计的C1C2在卷积范数平方后也必须平方。原图最终不等式两处常数未正确延续。

[相关正文：70.1：作业：Fourier变换的计算，Heisenberg测不准原理，分数次Sobolev空间的物理空间刻画，1维的等](../../03-math-analysis-iii/70-sobolev-embedding/70-03-p0837-0841.md)

## 数学修正

**原文：**

> $p \cdot \varphi \in \mathcal{S}'(\mathbb{R}^n)$

**修正：**

> $p\cdot u\in\mathcal S'(\mathbb R^n)$

**理由：** 该量词正在讨论缓增分布u，结论应为p乘u仍缓增，原图误重复测试函数φ。

**原文：**

> A4) 证明，对任意的 $a \in \mathbb{R}^n$，任意的多重指标 $\alpha$，我们有
> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-i x \cdot \xi}, \quad \widehat{x^\alpha} = (2\pi)^n (i\xi)^\alpha \delta_0.$$

**修正：**

> A4) 证明，对任意的 $a \in \mathbb{R}^n$，任意的多重指标 $\alpha$，我们有
> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-ia\cdot\xi}, \quad \widehat{x^\alpha} = (2\pi)^n (i\partial_\xi)^\alpha\delta_0.$$

**理由：** 与正文同组公式联动：δa的频率指数在点a求值，x^α的变换为i∂ξ作用于(2π)^nδ0，不能以ξ乘δ0。

**原文：**

> 特别地，
> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-i x \cdot \xi}, \quad \widehat{x^\alpha} = (2\pi)^n (i\xi)^\alpha \delta_0.$$

**修正：**

> 特别地，
> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-ia\cdot\xi}, \quad \widehat{x^\alpha} = (2\pi)^n (i\partial_\xi)^\alpha\delta_0.$$

**理由：** 该重复列出的公式同样需校正点a的指数与多项式变换的频率导数，保证正文和习题全部版本一致。

[相关正文：70.1：作业：Fourier变换的计算，Heisenberg测不准原理，分数次Sobolev空间的物理空间刻画，1维的等](../../03-math-analysis-iii/70-sobolev-embedding/70-03-p0837-0841.md)

## 数学修正

**原文：**

> $$\widehat{H}(\xi) = -i \cdot \mathrm{vp}\frac{1}{x} + \pi \delta_0.$$

**修正：**

> $$\widehat{H}(\xi) = -i \cdot \mathrm{vp}\frac1\xi + \pi \delta_0.$$

**理由：** Heaviside的Fourier变换定义在频率变量ξ，主值分母应ξ，原图混用物理空间x。

**原文：**

> $$\mathcal{F}_{x \to \xi} : \mathcal{S}(\mathbb{R}^n_t \times \mathbb{R}^m_x) \to \mathcal{S}(\mathbb{R}^n_t \times \mathbb{R}^m_x).$$

**修正：**

> $$\mathcal{F}_{x \to \xi} : \mathcal{S}(\mathbb R^m_t \times \mathbb R^n_x) \to \mathcal{S}(\mathbb R^m_t \times \mathbb R^n_x).$$

**理由：** 部分变换沿用正文t有m维、x有n维的统一标号，并与紧接的S′公式一致；频率输出的下标随后仍视作ξ。

[相关正文：70.1：作业：Fourier变换的计算，Heisenberg测不准原理，分数次Sobolev空间的物理空间刻画，1维的等](../../03-math-analysis-iii/70-sobolev-embedding/70-03-p0837-0841.md)

## 数学修正

**原文：**

> $(x_0, \xi_0) \in T^* \mathbb{R}^n = \mathbb{R}^n_x \times \mathbb{R}^n_\xi$

**修正：**

> $(x_0, \xi_0) \in T^*\mathbb R=\mathbb R_x\times\mathbb R_\xi$

**理由：** C3前提和两个积分均一维，本小题应是一维余切空间；n维推广在C5另行要求。原图提前误写Rn。

**原文：**

> $$(x_0, y_0) = \left( \int_{\mathbb{R}} x |f(x)|^2 dx, \int_{\mathbb{R}} \xi |\widehat{f}(\xi)|^2 \frac{d\xi}{2\pi} \right)$$

**修正：**

> $$(x_0,\xi_0) = \left( \int_{\mathbb{R}} x |f(x)|^2 dx, \int_{\mathbb{R}} \xi |\widehat{f}(\xi)|^2 \frac{d\xi}{2\pi} \right)$$

**理由：** C3待极小化的参数为位置x0和频率ξ0，原图C4误写未定义y0。

**原文：**

> $$\Gamma(z) = \int_0^{+\infty} e^{-t} t^{z-1} dt$$

**修正：**

> $$\Gamma(z)=\int_0^{+\infty}e^{-t}t^{z-1}\,dt,\quad\operatorname{Re}z>0$$

**理由：** Gamma积分在0可积要求Rez>0，原图脚注省域会误把积分式作为所有复数的定义。其他复数处须用解析延拓，非本积分。

[相关正文：70.1：作业：Fourier变换的计算，Heisenberg测不准原理，分数次Sobolev空间的物理空间刻画，1维的等](../../03-math-analysis-iii/70-sobolev-embedding/70-03-p0837-0841.md)

## 数学修正

**原文：**

> $$\lim_{k \to \infty} \left( \int_{\mathbb{R}} x_1^2 |f_k(x)|^2 dx \right) \left( \int_{\mathbb{R}} \xi_2^2 |\widehat{f_k}(\xi)|^2 \frac{d\xi}{2\pi} \right) = 0.$$

**修正：**

> $$\lim_{k \to \infty} \left( \int_{\mathbb R^n} x_1^2 |f_k(x)|^2 dx \right) \left( \int_{\mathbb R^n} \xi_2^2 |\widehat{f_k}(\xi)|^2 \frac{d\xi}{(2\pi)^n} \right) = 0.$$

**理由：** 该小题n≥2且fk为Rn函数，两个积分均在Rn，Parseval的频率测度为dξ/(2π)^n。原图仍沿用一维R和2π归一化，需同步改维数。

[相关正文：70.1：作业：Fourier变换的计算，Heisenberg测不准原理，分数次Sobolev空间的物理空间刻画，1维的等](../../03-math-analysis-iii/70-sobolev-embedding/70-03-p0837-0841.md)

## 数学修正

**原文：**

> $\widehat{W}_{\lambda} = C_{\lambda} W_{\lambda}$

**修正：**

> $\widehat W_\lambda=C_\lambda W_{2\pi/\lambda}$

**理由：** 间距λ的Dirac梳的Fourier变换间距是2π/λ，且Cλ=2π/λ；一般λ两边不在同一格上。原图把对偶格错写原格，仅λ=√(2π)才可同格。

**原文：**

> $$
> \sum_{k \in \mathbb{Z}} f(2\pi k) = \frac{1}{2\pi} \sum_{k \in \mathbb{Z}} \widehat{f}(k).
> $$

**修正：**

> $$
> \sum_{k \in \mathbb{Z}} \varphi(2\pi k) = \frac{1}{2\pi} \sum_{k \in \mathbb{Z}} \widehat\varphi(k).
> $$

**理由：** Poisson求和量词给定Schwartz函数φ，公式应同用φ，原图切换到未定义f。
