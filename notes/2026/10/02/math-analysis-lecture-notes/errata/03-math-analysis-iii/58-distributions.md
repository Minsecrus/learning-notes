# 勘误：58 分布的定义与基本例子

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：58：分布的定义与基本例子](../../03-math-analysis-iii/58-distributions.md)

## 数学修正

**原文：**

> 使得 $f|_{\Omega - K} \equiv 0$，即对任意的 $x \in \Omega - K$，$f(x) = 0$。

**修正：**

> 使得 $\varphi|_{\Omega - K} \equiv 0$，即对任意的 $x \in \Omega - K$，$\varphi(x) = 0$。

**理由：** 此句描述任意试验函数φ的支集，源图却在结论突然写未定义f，应统一为φ。

[相关正文：58：分布的定义与基本例子](../../03-math-analysis-iii/58-distributions.md)

## 数学修正

**原文：**

> $C = \|f\|_{L^1(K)}$

**修正：**

> $C = 1+\|f\|_{L^1(K)}$

**理由：** 定义390要求正常数C，若f在K上为0则原选取C=0不符合条件；用1+范数保持估计并明确正性。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 分布估计取q=0

**正文：**

> $p = 0$

**理由：** 定义390阶参数为p；源图写q而canonical已统一p，保留正确规范化。

[相关正文：58：分布的定义与基本例子](../../03-math-analysis-iii/58-distributions.md)

## 数学修正

**原文：**

> 对于 $\mathbf{I}_1$ 而言，当 $\varepsilon \to 0$ 时，$\varphi(x)$ 一致收敛到 $\varphi(0)$（因为 $|x| \leqslant \varepsilon$），所以，我们有

**修正：**

> 对于 $\mathbf{I}_1$ 而言，当 $\delta \to 0$ 时，$\sup_{|x|\leqslant\delta}|\varphi(x)-\varphi(0)|\to0$。因此对任意的 $\varepsilon>0$，我们都有如下估计

**理由：** 源图把近区|x|≤δ误写≤ε，并混淆核缩放ε与近区半径δ；连续性的统一小量取决于δ，且对缩放参数ε一致。

**原文：**

> $$
> \lim_{\delta \to 0} \mathbf{I}_1 \leqslant o(1) \int_{|x| \leqslant \delta} |\chi_\varepsilon(x)| dx = o(1) \|\chi\|_{L^1}.
> $$

**修正：**

> $$
> |\mathbf{I}_1| \leqslant \sup_{|x|\leqslant\delta}|\varphi(x)-\varphi(0)| \int_{|x| \leqslant \delta} |\chi_\varepsilon(x)| dx \leqslant \sup_{|x|\leqslant\delta}|\varphi(x)-\varphi(0)| \|\chi\|_{L^1}.
> $$

**理由：** 源图把lim写在不等式左侧而右侧仍为依赖δ的小量，且复积分不能直接用≤比较。近区统一估计应取绝对值，以sup差值乘固定L1范数控制。

**原文：**

> $$
> \mathbf{I}_1 \leqslant \varepsilon,
> $$

**修正：**

> $$
> |\mathbf{I}_1| \leqslant \eta,
> $$

**理由：** 先选δ用任意容差η控制近区，不能把同一个ε既当缩放参数又当任意容差；复积分还须取模。

**原文：**

> 其中，$\varepsilon$ 是任意给定的正实数。

**修正：**

> 其中，$\eta$ 是任意给定的正实数。

**理由：** 前式容差统一为η，与之后令ε→0的核缩放参数区分，修复源图量词混用。

**原文：**

> $$
> \begin{aligned}
> \mathbf{I}_2 &\leqslant 2\|\varphi\|_{L^\infty} \int_{|x| \geqslant \delta} |\chi_\varepsilon(x)| dx = 2\|\varphi\|_{L^\infty} \int_{|x| \geqslant \frac{\delta}{\varepsilon}} |\chi(x)| dx \\
> &= 2\|\varphi\|_{L^\infty} \int_{\mathbb{R}^n} |\chi(x)| \mathbf{1}_{|x| \geqslant \frac{\delta}{\varepsilon}} dx.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\mathbf{I}_2| &\leqslant 2\|\varphi\|_{L^\infty} \int_{|x| \geqslant \delta} |\chi_\varepsilon(x)| dx = 2\|\varphi\|_{L^\infty} \int_{|x| \geqslant \frac{\delta}{\varepsilon}} |\chi(x)| dx \\
> &= 2\|\varphi\|_{L^\infty} \int_{\mathbb{R}^n} |\chi(x)| \mathbf{1}_{|x| \geqslant \frac{\delta}{\varepsilon}} dx.
> \end{aligned}
> $$

**理由：** I2是复积分，三角不等式控制其模而非直接比较复数；源图漏绝对值。

**原文：**

> $$
> \mathbf{I}_2 \leqslant \varepsilon.
> $$

**修正：**

> $$
> |\mathbf{I}_2| \leqslant \eta.
> $$

**理由：** 固定容差η后取核参数ε充分小，尾积分模小于η；源图错误把ε同时当待极限参数和容差。

**原文：**

> $$
> \mathbf{I}_1 + \mathbf{I}_2 \leqslant 2\varepsilon.
> $$

**修正：**

> $$
> |\mathbf{I}_1 + \mathbf{I}_2| \leqslant |\mathbf{I}_1|+|\mathbf{I}_2| \leqslant 2\eta.
> $$

**理由：** 任意复试验函数的配对需取模，再将两个已各小于η的项相加，完成原收敛证明；源图漏模且容差参数错误。

[相关正文：58：分布的定义与基本例子](../../03-math-analysis-iii/58-distributions.md)

## 数学修正

**原文：**

> 取 $q = 0$, $C = \mu(K)$ 即可。

**修正：**

> 取 $p = 0$, $C = 1+\mu(K)$ 即可。

**理由：** 定义390阶指标为p而非q；C要求正，μ(K)可为0，取1+μ(K)仍满足估计。源图记号与正性选择不符。

**原文：**

> 某个 *Radon 测度* 的密度函数

**修正：**

> 某个局部有限的复 *Radon 测度* 的密度函数

**理由：** L1loc一般取复值，非负Radon测度仅能有非负密度；源图把所有局部可积函数都当正测度密度，须扩展至复测度。

**原文：**

> 所有的 0 阶分布都是 (由如上方式给出的) *Radon 测度*

**修正：**

> 所有的 0 阶分布都由复 *Radon 测度* 给出，其全变差在每个紧集上有限

**理由：** 分布定义为复线性泛函，而前面Radon测度为非负测度，例如−δ0和iδ0阶0却不来自非负测度。Riesz表示对应局部有限全变差的复测度，源图漏复及全变差条件。

[相关正文：58：分布的定义与基本例子](../../03-math-analysis-iii/58-distributions.md)

## 数学修正

**原文：**

> $$
> \varphi_K(x) = \begin{cases} \frac{f(x)}{|f(x)|} \mathbf{1}_K(x), & \text{如果 } f(x) \neq 0; \\ 0, & \text{如果 } f(x) = 0. \end{cases}
> $$

**修正：**

> $$
> \varphi_K(x) = \begin{cases} \frac{\overline{f(x)}}{|f(x)|} \mathbf{1}_K(x), & \text{如果 } f(x) \neq 0; \\ 0, & \text{如果 } f(x) = 0. \end{cases}
> $$

**理由：** 原图分子有复共轭，转录遗漏。配对无共轭，必须使fφK=|f|1K，原转录f²/|f|不能得模。

**原文：**

> 这是一个有紧支集 $K$ 的函数。

**修正：**

> 这是一个有紧支集 $K$ 的函数。在本证明中，取 $\chi$ 为满足 $\int\chi=1$、$\operatorname{supp}\chi\subset\overline{B(0,1)}$ 且 $\chi(-x)=\chi(x)$ 的光滑函数。

**理由：** 源图此证明使用支集到K距离≤ε及交换χε(x−y)为χε(y−x)，需要单位球支集和偶核；命题391任意χ不保证这两条。本证明可自由选取具有两性质的核，补其选取不改变命题391。

[相关正文：58：分布的定义与基本例子](../../03-math-analysis-iii/58-distributions.md)

## 数学修正

**原文：**

> $$
> |\varphi(x) - \varphi(-x)| = |2x \varphi'(\xi)| \leqslant 2 \|\varphi'\|_{L^\infty(K)} x.
> $$

**修正：**

> $$
> |\varphi(x) - \varphi(-x)| = \left|\int_{-x}^{x}\varphi'(t)\,dt\right| \leqslant 2 \|\varphi'\|_{L^\infty(K)} |x|.
> $$

**理由：** 试验函数取复值，实值中值定理的单一ξ等式一般不成立；用Newton-Leibniz积分式可对复函数成立，并以|x|修复负x的界。源图该等式错误。

**原文：**

> 我们利用中值定理:

**修正：**

> 我们利用 Newton-Leibniz 公式:

**理由：** 与下一式改为积分形式一致：复值函数可用逐分量Newton-Leibniz，不能直接使用实值拉格朗日中值定理。
