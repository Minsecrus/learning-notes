# 勘误：52 Hilbert 基与 Fourier 级数

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \int_X |f| \mu &= \int_X |f| \cdot 1 \mu \\
> &\leqslant \|f\|_{L^2} \|1\|_{L^2} \\
> &= \sqrt{\mu(X)} \|f\|_{L^2}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_X |f|\,d\mu &= \int_X |f| \cdot 1\,d\mu \\
> &\leqslant \|f\|_{L^2} \|1\|_{L^2} \\
> &= \sqrt{\mu(X)} \|f\|_{L^2}.
> \end{aligned}
> $$

**理由：** 测度空间上的积分应写dμ，原图两处在被积函数后直接乘μ，漏掉测度积分的微分记号。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> 简单函数 $\varphi \in \mathcal{E}(\mathbb{R})$

**修正：**

> 简单函数 $\varphi \in \mathcal{E}(\mathbb{R}^n)$

**理由：** 本引理在Rn上用简单函数逼近L¹函数f，因此φ也必须定义在Rn上；原图这里漏掉维数n。

**原文：**

> 我嗯选取简单函数

**修正：**

> 我们选取简单函数

**理由：** 原图我嗯是我们一词的输入笔误，改正后保留δ精度的简单函数选择。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> 这是个光滑函数。很明显，$h$ 在 $K$ 上恒为 $1$（关键点）。另外，如果 $d(x, K) > 2 \cdot 2^{-N}$，那么 $h(x) = 0$。

**修正：**

> 这是个光滑函数。很明显，$h$ 在 $K$ 上恒为 $1$（关键点）。另外，如果 $d(x, K) > 2\sqrt n\cdot 2^{-N}$，那么 $h(x) = 0$。

**理由：** 支集落在边长2^(−N+1)的n维正方体内，欧氏直径为2√n·2^(−N)。对与K相交的同一支集中的两点，用这个直径界定距离；原图漏掉维数因子，补上后后续邻域积分界与递减集合论证仍成立。

**原文：**

> $$\int_{\mathbb{R}^n} |h - \mathbf{1}_K| \leqslant m(\{x \notin K \mid d(x, K) \leqslant 2 \cdot 2^{-N}\}).$$

**修正：**

> $$\int_{\mathbb{R}^n} |h - \mathbf{1}_K| \leqslant m(\{x \notin K \mid d(x, K) \leqslant 2\sqrt n\cdot 2^{-N}\}).$$

**理由：** 支集落在边长2^(−N+1)的n维正方体内，欧氏直径为2√n·2^(−N)。对与K相交的同一支集中的两点，用这个直径界定距离；原图漏掉维数因子，补上后后续邻域积分界与递减集合论证仍成立。

**原文：**

> $$\bigcap_{N \geqslant 1} \{x \notin K \mid d(x, K) \leqslant 2 \cdot 2^{-N}\} = \emptyset,$$

**修正：**

> $$\bigcap_{N \geqslant 1} \{x \notin K \mid d(x, K) \leqslant 2\sqrt n\cdot 2^{-N}\} = \emptyset,$$

**理由：** 支集落在边长2^(−N+1)的n维正方体内，欧氏直径为2√n·2^(−N)。对与K相交的同一支集中的两点，用这个直径界定距离；原图漏掉维数因子，补上后后续邻域积分界与递减集合论证仍成立。

**原文：**

> $$\lim_{N \to \infty} m(\{x \notin K \mid d(x, K) \leqslant 2 \cdot 2^{-N}\}) = 0.$$

**修正：**

> $$\lim_{N \to \infty} m(\{x \notin K \mid d(x, K) \leqslant 2\sqrt n\cdot 2^{-N}\}) = 0.$$

**理由：** 支集落在边长2^(−N+1)的n维正方体内，欧氏直径为2√n·2^(−N)。对与K相交的同一支集中的两点，用这个直径界定距离；原图漏掉维数因子，补上后后续邻域积分界与递减集合论证仍成立。

**原文：**

> 这就证明了命题。

**修正：**

> 还需验证卷积逼近：对上述 $h\in C_0^\infty$，一致连续性及卷积支集落在固定紧集保证 $\|\chi_\varepsilon*h-h\|_{L^1}\to0$。由卷积范数估计及三角不等式，$\limsup_{\varepsilon\to0}\|\chi_\varepsilon*\mathbf1_K-\mathbf1_K\|_{L^1}\le2\|h-\mathbf1_K\|_{L^1}$。右侧可任意小，故得到示性函数的卷积逼近，再由前面的线性与稠密性论证得到命题。

**理由：** 原证明到此只构造了紧支集光滑函数对1_K的L¹逼近，尚未证明本引理要求的固定卷积核χ_ε的逼近。补上紧支光滑函数的卷积收敛和范数三角估计这一缺失步骤，不改变已完成的单位分解构造。

**原文：**

> $R \to 0$

**修正：**

> $R \to +\infty$

**理由：** 正在用越来越大的球截断L¹函数，其球外积分随半径趋正无穷才趋零；原图把极限方向误写为趋零。

**原文：**

> $C(\mathbb{R}) \cap L^\infty(\mathbb{R}^n)$

**修正：**

> $C(\mathbb{R}^n) \cap L^\infty(\mathbb{R}^n)$

**理由：** 两侧讨论同一个Rn上的有界连续函数空间，原图连续函数空间漏掉维数n，导致两个相交空间的函数定义域不相同。

**原文：**

> $C(\mathbb{R}^n) \subset L^\infty(\mathbb{R}^n)$ 不稠密

**修正：**

> $C(\mathbb{R}^n)\cap L^\infty(\mathbb{R}^n)$ 在 $L^\infty(\mathbb{R}^n)$ 中不稠密

**理由：** 一般连续函数在Rn上未必有界，例如坐标函数，所以C(Rn)本身不是L∞的子空间。本段正确的不稠密命题涉及有界连续函数，即二者的交。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \mathbb R^b
> ```

**正文：**

> $$\int_{\mathbb{R}^n} |h - \mathbf{1}_K| \leqslant m(\{x \notin K \mid d(x, K) \leqslant 2\sqrt n\cdot 2^{-N}\}).$$

**理由：** 量化练习所在空间为n维，原图将维数n误写b，Markdown已用Rn。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> $$\langle S_{m+1} + \cdots + S_n, S_{m+1} + \cdots + S_n \rangle < \varepsilon^2.$$

**修正：**

> $$\langle x_{m+1} + \cdots + x_n, x_{m+1} + \cdots + x_n \rangle < \varepsilon^2.$$

**理由：** 部分和之差为x_(m+1)+…+x_n，其两两正交的项是x_k。原图在这两行把各求和项写成部分和S_k，部分和通常不正交，改回x_k才能使用勾股定理。

**原文：**

> $$\langle S_{m+1}, S_{m+1} \rangle + \cdots + \langle S_n, S_n \rangle = \|S_{m+1}\|^2 + \cdots + \|S_n\|^2 < \varepsilon^2.$$

**修正：**

> $$\langle x_{m+1}, x_{m+1} \rangle + \cdots + \langle x_n, x_n \rangle = \|x_{m+1}\|^2 + \cdots + \|x_n\|^2 < \varepsilon^2.$$

**理由：** 部分和之差为x_(m+1)+…+x_n，其两两正交的项是x_k。原图在这两行把各求和项写成部分和S_k，部分和通常不正交，改回x_k才能使用勾股定理。

**原文：**

> 是自己，如果它所张成

**修正：**

> 是子集，如果它所张成

**理由：** 定义正在讨论H的子集A张成的线性空间，原图自己为子集的输入笔误。

**原文：**

> 我们可以 $x_1, x_2, \cdots, x_n, \cdots$

**修正：**

> 我们可以跳过零向量及已被前面向量张成的项，对 $x_1, x_2, \cdots, x_n, \cdots$

**理由：** 任意可数张成集可以含零向量和线性相关项，Gram–Schmidt需跳过这些项才不会除以零；只对新的独立方向正交化仍张成相同稠密子空间。

**原文：**

> **注记**. 请区分，Hilbert 基一般不是 $H$ 作为线性空间的基。

**修正：**

> **注记**. 请区分，Hilbert 基一般不是 $H$ 作为线性空间的基。若基有限，以下基向量的求和按有限指标进行。

**理由：** 有限维Hilbert空间的正交化会在有限步停止，不能得到无限多个正交单位向量。明确有限基的求和约定，使接下来统一的可数求和记法兼容定义允许的有限情况。

**原文：**

> $L^2(\mathbb{R}^n)$ 得一个可数集合

**修正：**

> $L^2(\mathbb{R}^n)$ 的一个可数集合

**理由：** 原图构造可数集合一句把所属关系的的误写为得，改为的。

**原文：**

> $Q$ 的变长不超过

**修正：**

> $Q$ 的边长不超过

**理由：** 此处控制用于逼近紧集的正方体边长，变长为边长的笔误。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \|y - x\|^2 &= \left\langle y - x, (y - x) - \sum_{k \leqslant N} b_k e_k \right\rangle + \sum_{k \leqslant N} b_k \langle y - x, e_k \rangle \\
> &= \left\langle y - x, (y - x) - \sum_{k \leqslant N} b_k e_k \right\rangle \\
> &\leqslant \|y - x\| \left\| (y - x) - \sum_{k \leqslant N} b_k e_k \right\| \\
> &\leqslant \varepsilon \|y - x\|.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|y - x\|^2 &= \left\langle y - x, (y - x) - \sum_{k \leqslant N} b_k e_k \right\rangle + \sum_{k \leqslant N} \overline{b_k} \langle y - x, e_k \rangle \\
> &= \left\langle y - x, (y - x) - \sum_{k \leqslant N} b_k e_k \right\rangle \\
> &\leqslant \|y - x\| \left\| (y - x) - \sum_{k \leqslant N} b_k e_k \right\| \\
> &\leqslant \varepsilon \|y - x\|.
> \end{aligned}$$

**理由：** 本讲义内积第一变量线性、第二变量共轭线性。这里b_k处于第二变量，展开时需取复共轭；原图遗漏共轭。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \langle y,e_k\rangle=\langle y,e_k\rangle
> ```

**正文：**

> $$\langle y, e_k \rangle = \langle x, e_k \rangle \implies \langle y - x, e_k \rangle = 0 \implies x - y \perp e_k.$$

**理由：** 正交投影应保持x沿子空间正交基的坐标；源图把等式两边都写y成为恒等式，Markdown已写正确的x坐标。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> 拉回来得到 $\mathbf{T}$ 上的连续函数

**修正：**

> 拉回来得到 $\mathbb{R}$ 上的连续函数

**理由：** q的定义域是实数轴，圆周上函数经q拉回后定义在实数轴；原图把拉回函数的定义域仍写成T。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> 考虑 $\mathbb{R}^2$ 以 $2\pi$ 为周期

**修正：**

> 考虑 $\mathbb{R}$ 以 $2\pi$ 为周期

**理由：** 本段是一维圆周上函数与实数轴周期函数的对应，高维情形另行讨论；原图此处实数轴被误标成二维。

**原文：**

> $p = 1, 2$ 或 $\infty$

**修正：**

> $p = 1$ 或 $2$

**理由：** 光滑周期函数在L¹及L²中稠密，但在L∞中不稠密。例如半圆示性函数的跳跃不能按本质上确界范数用连续函数任意逼近；删去错误的p=∞范围。

**原文：**

> $$\theta_1 \ominus \theta_2 = \begin{cases} \theta_1 + \theta_2, & \theta_1 - \theta_2 \geqslant 0, \\ \theta_1 + \theta_2 + 2\pi, & \theta_1 - \theta_2 < 0. \end{cases}$$

**修正：**

> $$\theta_1 \ominus \theta_2 = \begin{cases} \theta_1 - \theta_2, & \theta_1 - \theta_2 \geqslant 0, \\ \theta_1 - \theta_2 + 2\pi, & \theta_1 - \theta_2 < 0. \end{cases}$$

**理由：** 模2π的减法应以θ1−θ2为基础，负值分支再加2π；原图两个分支把减法写成加法，与随后复数商对应不符。

**原文：**

> 我们可以把 $\chi_\varepsilon$（选取比较小的 $\varepsilon$ 是的它的支撑集很小（长度不超过 $2\pi$））以 $2\pi$ 为周期延拓成 $\mathbb{R}$ 上的以 $2\pi$ 为周期的函数，那么，我们就可以认为 $\chi_\varepsilon \in C^\infty(\mathbf{T})$。

**修正：**

> 选取支集长度不超过 $2\pi$ 的实轴单位积分核 $\chi_\varepsilon$，定义其归一化周期化 $\kappa_\varepsilon(\theta)=2\pi\sum_{j\in\mathbb Z}\chi_\varepsilon(\theta+2\pi j)$。这样 $\kappa_\varepsilon\in C^\infty(\mathbf T)$ 且 $\int_{\mathbf T}\kappa_\varepsilon\,d\mu=1$。

**理由：** 环面测度被约定为dθ/(2π)，直接周期化实轴单位积分核的环面积分为1/(2π)，卷积不会逼近恒等映射。周期化后需乘2π以保证单位积分。

**原文：**

> $$\chi_\varepsilon * f(\theta) = \int_0^{2\pi} \chi_\varepsilon(\theta - \eta) f(\theta) \frac{\mathrm{d}\theta}{2\pi} = \int_{\mathbf{T}} \chi_\varepsilon(z z'^{-1}) f(z') \mathrm{d}\mu(z').$$

**修正：**

> $$\kappa_\varepsilon * f(\theta) = \int_0^{2\pi} \kappa_\varepsilon(\theta - \eta) f(\eta) \frac{\mathrm{d}\eta}{2\pi} = \int_{\mathbf{T}} \kappa_\varepsilon(z z'^{-1}) f(z') \mathrm{d}\mu(z').$$

**理由：** 卷积中积分变量为η，被积函数应取f(η)，微分应为dη；核同时采用按环面测度归一化的κ_ε。原图错写f(θ)dθ并漏核的2π归一化。

**原文：**

> 我们强调，此时，这个定义对 $L^\infty$ 也成立。

**修正：**

> 我们强调，此时，这个卷积定义对 $L^\infty$ 也成立，但不保证一般 $L^\infty$ 函数在该范数下被光滑函数逼近。

**理由：** 卷积可以作用于L∞与光滑函数的L∞稠密性是不同结论；原文注记紧接错误范围，补明适用范围，避免把存在卷积误读为L∞范数逼近。

[相关正文：52：Hilbert 基与 Fourier 级数](../../02-math-analysis-ii/52-fourier-series.md)

## 数学修正

**原文：**

> 令 $\varepsilon \to 0$, 这表明对任意的 $\varphi \in C([0, 2\pi])$, $\langle f, \varphi \rangle = 0$, 即 $f \perp C([0, 2\pi])$。然而, $C([0, 2\pi])$ 在 $L^2([0, 2\pi])$ 是稠密的, 所以 $f = 0$。 \hfill $\square$

**修正：**

> 令 $\varepsilon \to 0$, 这表明对任意的 $\varphi \in C(\mathbf T)$, $\langle f, \varphi \rangle = 0$, 即 $f \perp C(\mathbf T)$。然而, $C(\mathbf T)$ 在 $L^2([0, 2\pi])$ 是稠密的, 所以 $f = 0$。 \hfill $\square$

**理由：** 前面的Stone–Weierstrass逼近只针对两端取值相同的连续函数，即C(T)。这个子空间在L²中稠密已由引理352保证，故结论仍成立；原图把得到的正交范围扩大成全部闭区间连续函数。
