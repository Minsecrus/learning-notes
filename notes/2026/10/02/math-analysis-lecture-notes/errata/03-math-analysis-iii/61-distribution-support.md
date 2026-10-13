# 勘误：61 分布的局部刻画与支集

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> $i \in I, u|_{\Omega_i} \in L_{\text{loc}}^1(\Omega)$

**修正：**

> $i \in I, u|_{\Omega_i} \in L_{\text{loc}}^1(\Omega_i)$

**理由：** 源图定理409局部分布的定义域是Ωi，不能直接称其是大域Ω上的L1loc函数；右条件应在对应的开子域Ωi。

**原文：**

> $i \in I, u|_{\Omega_i} \in C^k(\Omega)$

**修正：**

> $i \in I, u|_{\Omega_i} \in C^k(\Omega_i)$

**理由：** 源图定理409限制u|Ωi只定义于Ωi，其局部Ck函数条件应写Ck(Ωi)，不是未在大域定义的Ck(Ω)。

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> 我们要说明说明

**修正：**

> 我们要说明

**理由：** 源图说明重复，删除一次即可，保留原证明逻辑。

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> $$
> \langle u, \varphi \rangle = \sum_{j=1}^N \langle u, \overbrace{\chi_i \varphi}^{\text{支集在 }\Omega_i\text{ 中}} \rangle = 0.
> $$

**修正：**

> $$
> \langle u, \varphi \rangle = \sum_{i=1}^N \langle u, \overbrace{\chi_i \varphi}^{\text{支集在 }\Omega_i\text{ 中}} \rangle = 0.
> $$

**理由：** 源图求和指标j与被加项χi、Ωi不一致，求和应以i为哑指标。

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> $\varphi \in \mathcal{D}(\varphi)$

**修正：**

> $\varphi \in \mathcal{D}(\mathbb{R}^n)$

**理由：** 源图D(φ)把函数误作定义域，该命题分布均在Rn，试验函数应在D(Rn)。

**原文：**

> 使得 $\psi|_K \equiv 1$

**修正：**

> 使得 $\psi$ 在 $K$ 的一个开邻域内恒为 $1$

**理由：** 源图仅在K上=1不能使(1−ψ)φ支集避开K，且对δ导数不成立；引理407提供在K邻域恒1的截断。

**原文：**

> 右边至多出现了 $u$ 的 $p$-次导数

**修正：**

> 右边至多出现了 $\varphi$ 的 $p$-次导数

**理由：** 源图阶数估计涉及试验函数φ的导数而非分布u的导数。

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> 是在 $K = \operatorname{supp}(u)$ 上恒为 $1$ 的

**修正：**

> 是在 $K = \operatorname{supp}(u)$ 的一个开邻域内恒为 $1$ 的

**理由：** 源图仅在K上恒1不足以定义独立于截断的配对，δ导数会感知ψ在支集的导数；需要邻域恒1。

**原文：**

> $$
> \begin{aligned}
> |\partial^\alpha \psi_\varepsilon| &= |\mathbf{1}_{L_{2\varepsilon}} * (\partial^\alpha \chi_\varepsilon)| \\
> &\leqslant \varepsilon^{-|\alpha|} \int_{L_{2\varepsilon}} \varepsilon^{-n} \left| (\partial^\alpha \chi) \left( \frac{x}{\varepsilon} \right) \right| \mathrm{d}x \\
> &= \varepsilon^{-|\alpha|} \|\partial^\alpha \chi\|_{L^1}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\partial^\alpha \psi_\varepsilon| &= |\mathbf{1}_{L_{2\varepsilon}} * (\partial^\alpha \chi_\varepsilon)| \\
> &\leqslant \varepsilon^{-|\alpha|} \int_{\mathbb{R}^n} \varepsilon^{-n} \left| (\partial^\alpha \chi) \left( \frac{x}{\varepsilon} \right) \right| \mathrm{d}x \\
> &= \varepsilon^{-|\alpha|} \|\partial^\alpha \chi\|_{L^1}.
> \end{aligned}
> $$

**理由：** 源图卷积积分经平移后积分域不能仍固定L2ε；扩大到Rn可统一按L1范数估计，并使末行等式正确。

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \varphi(y) &= \sum_{|\alpha| \leqslant p} \frac{\partial^\alpha \varphi(x)}{\alpha!} (x - y)^\alpha + \sum_{|\alpha| = p+1} \frac{\partial^\alpha \varphi(x + \vartheta(y - x))}{\alpha!} (x - y)^\alpha \\
> &\overset{\text{平坦性}}{\equiv} \sum_{|\beta| = p+1} \frac{\partial^\beta \varphi(x + \vartheta(y - x))}{\beta!} (x - y)^\beta.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \varphi(y) &= \sum_{|\alpha| \leqslant p} \frac{\partial^\alpha \varphi(x)}{\alpha!} (y-x)^\alpha + (p+1)\sum_{|\beta|=p+1}\frac{(y-x)^\beta}{\beta!}\int_0^1(1-t)^p\partial^\beta\varphi(x+t(y-x))\,dt \\
> &\overset{\text{平坦性}}{=} (p+1)\sum_{|\beta|=p+1}\frac{(y-x)^\beta}{\beta!}\int_0^1(1-t)^p\partial^\beta\varphi(x+t(y-x))\,dt.
> \end{aligned}
> $$

**理由：** 源图Taylor多项式方向x−y符号错误，且其Lagrange参数ϑ可能依赖y不可直接微分；改为正确(y−x)的积分余项形式，对复值试验函数同样成立。

**原文：**

> 以及 $\vartheta \in [0, 1]$, 使得

**修正：**

> 利用 Taylor 公式的积分余项形式, 我们有

**理由：** 源图后续需要导数估计，不能选用依赖y的Lagrange参数再求导；将承接语改为积分余项。

**原文：**

> $$
> \partial^\alpha \varphi(y) = \sum_{|\beta|=p+1} \sum_{\alpha_1+\alpha_2=\alpha} \frac{\alpha!}{\alpha_1!\alpha_2!} \underbrace{\frac{\partial^{\alpha_1} \left( \partial^\beta \varphi(x + \vartheta(y - x)) \right)}{\beta!} \partial^{\alpha_2} \left( (x - y)^\beta \right)}_{|\cdot| \leqslant C \varepsilon^{p+1-|\alpha_2|}}.
> $$

**修正：**

> $$
> \partial^\alpha\varphi(y)=(p+1-|\alpha|)\sum_{|\beta|=p+1-|\alpha|}\frac{(y-x)^\beta}{\beta!}\int_0^1(1-t)^{p-|\alpha|}\partial^{\alpha+\beta}\varphi(x+t(y-x))\,dt,\quad |\alpha|\leqslant p.
> $$
>
> 这里 $|y-x|<3\varepsilon$，积分区间为 $[0,1]$。由于各阶导数有界且 $|\beta|=p+1-|\alpha|$，积分余项的绝对值不超过 $C\varepsilon^{p+1-|\alpha|}$，其中 $C$ 不依赖于 $\varepsilon$。

**理由：** 源图直接微分含位置依赖的ϑ与x的Lagrange余项不合法；应对∂αφ在固定x∈F应用p−|α|阶Taylor公式，其低阶系数因p平坦消失，积分余项给出后文ε估计。

**原文：**

> $$
> \begin{aligned}
> |\partial^\alpha (\psi_\varepsilon \cdot \varphi)| &\leqslant 2^{|\alpha|} \sum_{|\beta| \leqslant |\alpha|} |\partial^{\alpha-\beta} \psi_\varepsilon| |\partial^\beta \varphi| \\
> &\leqslant C' \sum_{|\beta| \leqslant |\alpha|} \varepsilon^{-|\alpha-\beta|} \varepsilon^{p+1-|\beta|} \\
> &\leqslant C'' \varepsilon.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\partial^\alpha (\psi_\varepsilon \cdot \varphi)| &\leqslant 2^{|\alpha|} \sum_{\beta \leqslant \alpha} |\partial^{\alpha-\beta} \psi_\varepsilon| |\partial^\beta \varphi| \\
> &\leqslant C' \sum_{\beta \leqslant \alpha} \varepsilon^{-|\alpha-\beta|} \varepsilon^{p+1-|\beta|} \\
> &\leqslant C'' \varepsilon.
> \end{aligned}
> $$

**理由：** 源图Leibniz多重指标需要逐分量β≤α，防止负的α−β分量；常数估计不变。

**原文：**

> $$
> \begin{aligned}
> |\partial^\alpha (\psi_\varepsilon \cdot \varphi)| &\leqslant 2^{|\alpha|} \sum_{|\beta| \leqslant |\alpha|} |\partial^{\alpha-\beta} \psi_\varepsilon| |\partial^\beta \varphi| \\
> &\leqslant C' \sum_{|\beta| \leqslant |\alpha|} \varepsilon^{-|\alpha-\beta|} \varepsilon^{p+1-|\beta|} \\
> &\leqslant C'' \varepsilon.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\partial^\alpha (\psi_\varepsilon \cdot \varphi)| &\leqslant 2^{|\alpha|} \sum_{\beta \leqslant \alpha} |\partial^{\alpha-\beta} \psi_\varepsilon| |\partial^\beta \varphi| \\
> &\leqslant C' \sum_{\beta \leqslant \alpha} \varepsilon^{-|\alpha-\beta|} \varepsilon^{p+1-|\beta|} \\
> &\leqslant C'' \varepsilon.
> \end{aligned}
> $$

**理由：** 源图Leibniz多重指标需要逐分量β≤α，防止负的α−β分量；常数估计不变。

**原文：**

> 根据分布的定义以及 $u$ 的阶不超过 $p$, 我们知道

**修正：**

> 取 $0<\varepsilon\leqslant1$，所有 $\psi_\varepsilon\varphi$ 的支集均包含于固定紧集 $\overline{L_3}$。根据分布的定义以及 $u$ 的阶不超过 $p$, 我们知道

**理由：** 源图紧集随ε变化，不能直接令分布估计常数独立于ε；固定ε≤1后支集包含统一紧集L3闭包，即可选统一常数。

[相关正文：分布的局部刻画与支集](../../03-math-analysis-iii/61-distribution-support/61-01-p0735-0741.md)

## 数学修正

**原文：**

> 选取有紧支集的函数 $\chi$

**修正：**

> 选取有紧支集的光滑函数 $\chi$

**理由：** 源图未注明χ光滑，但余项r及x^αχ要作为试验函数，因此χ必须光滑。

**原文：**

> 多项式的近试验函数

**修正：**

> 多项式的试验函数

**理由：** 源图近为多余误字，所指明确为多项式乘截断的试验函数。

[相关正文：61.1：作业：齐次分布，Hadamard有限部分，分布除以多项式](../../03-math-analysis-iii/61-distribution-support/61-03-p0742-0746.md)

## 数学修正

**原文：**

> $$
> \langle u, \varphi \rangle = \int_0^\infty e^{\frac{1}{x}} \varphi(x).
> $$

**修正：**

> $$
> \langle u, \varphi \rangle = \int_0^\infty e^{\frac{1}{x}} \varphi(x)\,dx.
> $$

**理由：** 源图A7积分省掉微分dx，需补全积分变量以匹配配对定义。

[相关正文：61.1：作业：齐次分布，Hadamard有限部分，分布除以多项式](../../03-math-analysis-iii/61-distribution-support/61-03-p0742-0746.md)

## 数学修正

**原文：**

> 在 $[0, 1)$ 上的可积函数

**修正：**

> 是 $[0, 1)$ 上的可积函数

**理由：** 源图C1句法缺是，−1<α<0保证0附近可积，改后命题准确。

[相关正文：61.1：作业：齐次分布，Hadamard有限部分，分布除以多项式](../../03-math-analysis-iii/61-distribution-support/61-03-p0742-0746.md)

## 数学修正

**原文：**

> $$
> \int_\varepsilon^\infty x^\alpha \varphi(x) = P_\varphi(\varepsilon) + R_\varphi(\varepsilon),
> $$

**修正：**

> $$
> \int_\varepsilon^\infty x^\alpha \varphi(x)\,dx = P_\varphi(\varepsilon) + R_\varphi(\varepsilon),
> $$

**理由：** 源图C4公式漏积分微分dx，与引入它的句子及C2一致。

[相关正文：61.1：作业：齐次分布，Hadamard有限部分，分布除以多项式](../../03-math-analysis-iii/61-distribution-support/61-03-p0742-0746.md)

## 数学修正

**原文：**

> 上 $N$ 个齐次分布

**修正：**

> 上 $N$ 个非零齐次分布

**理由：** 源图F5缺非零条件；零分布是任意次数的齐次分布但含零的一组永远线性相关，故需排除。

**原文：**

> 的次齐次分布

**修正：**

> 的齐次分布

**理由：** 源图F8多一个次，问题要求0次与1次的齐次分布。
