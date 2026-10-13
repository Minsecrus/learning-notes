# 勘误：62 分布的卷积

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> 就是用如何用光滑函数

**修正：**

> 就是如何用光滑函数

**理由：** 源图重复用字，删除一个即可保留正则化的原意。

**原文：**

> $$
> u * f = \int_{\mathbb{R}^n} u(y)\varphi(x - y)dy.
> $$

**修正：**

> $$
> (u * \varphi)(x) = \int_{\mathbb{R}^n} u(y)\varphi(x - y)dy.
> $$

**理由：** 源图卷积式左侧f未定义而右侧函数是φ，且右侧以x为变量，正确为(u*φ)(x)。

**原文：**

> $$
> \lim_{j \to \infty} \langle u, \varphi(x + a_k - \cdot) \rangle = \langle u, \varphi(x - \cdot) \rangle.
> $$

**修正：**

> $$
> \lim_{j \to \infty} \langle u, \varphi(x + a_j - \cdot) \rangle = \langle u, \varphi(x - \cdot) \rangle.
> $$

**理由：** 源图极限指标j，与配对式ak不一致，应为aj。

**原文：**

> $a_k + x \to x$

**修正：**

> $a_j + x \to x$

**理由：** 源图点列指标j，与说明句ak不一致，应为aj。

**原文：**

> $$
> \varphi(y + b_j) \xrightarrow{\mathcal{D}} \varphi(y),
> $$

**修正：**

> $$
> \varphi(y + b_j) \xrightarrow{\mathcal{D}} \varphi(y+b),
> $$

**理由：** 源图已设bj→b，一般平移极限应φ(y+b)，只在b=0时才是φ(y)。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> $\delta = \sup_{j \geqslant 1} |b_j|$

**修正：**

> $\delta = 1+\sup_{j \geqslant 1} |b_j|$

**理由：** 源图开邻域Kδ未留余量，在达到上确界或δ=0时不能包含支集；加1给出共同有界邻域且可取其闭包为紧集。

**原文：**

> $$
> \lim_{j \to \infty} \|\partial^\alpha\varphi(x + b_j) - \partial^\alpha\varphi(x)\|_{L^\infty(K')} = 0.
> $$

**修正：**

> $$
> \lim_{j \to \infty} \|\partial^\alpha\varphi(x + b_j) - \partial^\alpha\varphi(x+b)\|_{L^\infty(K')} = 0.
> $$

**理由：** 源图承接bj→b的平移极限，比较项应平移b，而非平移0。

**原文：**

> $\varphi(\cdot + b_j) \to \varphi$

**修正：**

> $\varphi(\cdot + b_j) \to \varphi(\cdot+b)$

**理由：** 源图连续平移结论需以bj→b为准，故极限为φ(·+b)。

**原文：**

> $$
> u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0 + \varepsilon a) - \varepsilon \sum_{j=1}^n a_j u * \partial_j \varphi(x_0) = \varepsilon^2 \langle u, r(\cdot, \varepsilon, a) \rangle,
> $$

**修正：**

> $$
> u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0) - \varepsilon \sum_{j=1}^n a_j u * \partial_j \varphi(x_0) = \varepsilon^2 \langle u, r(\cdot, \varepsilon, a) \rangle,
> $$

**理由：** 源图将增量两项写成相同值；配对前的Taylor增量第二项是φ(x0−y)，故卷积应在x0取值。

**原文：**

> 它的支集在 $\tau_{\pm x_0}(\operatorname{supp}(\varphi))$ 距离不超过 1 的附近)

**修正：**

> 当 $|\varepsilon|\leqslant1$ 时，它的支集在 $x_0-\operatorname{supp}(\varphi)$ 距离不超过 1 的附近

**理由：** 源图把φ(x0−y+tεa)的y支集误写成平移原支集，应反射后平移x0；同时1邻域需|ε|≤1。

**原文：**

> $$
> \partial_y^\beta r(y, \varepsilon, a) = 2 \sum_{|\alpha| = 2} \frac{a^\alpha}{\alpha!} \int_0^1 (1 - t) \partial^{\alpha + \beta} \varphi(x_0 - y + t \varepsilon a) dt.
> $$

**修正：**

> $$
> \partial_y^\beta r(y, \varepsilon, a) = 2(-1)^{|\beta|} \sum_{|\alpha| = 2} \frac{a^\alpha}{\alpha!} \int_0^1 (1 - t) \partial^{\alpha + \beta} \varphi(x_0 - y + t \varepsilon a) dt.
> $$

**理由：** 源图对y求导φ(x0−y+tεa)漏链式法则负号，总共β阶产生(−1)^|β|。

**原文：**

> $$
> \frac{|u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0) - \varepsilon u * (\nabla_a \varphi(x_0))|}{\varepsilon |a|} = o(1),
> $$

**修正：**

> $$
> \frac{|u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0) - \varepsilon (u * (\nabla_a \varphi))(x_0)|}{\varepsilon |a|} = o(1),
> $$

**理由：** 源图将先取φ方向导数再在x0卷积取值误括成卷积一个常数，应先卷积函数∇aφ后在x0求值。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> $\operatorname{supp}_x \psi(\cdot, y)$

**修正：**

> $\operatorname{supp}_x \varphi(\cdot, y)$

**理由：** 源图ψ只有y变量，x变量的截面支集应是双变量试验函数φ。

**原文：**

> $\int_{\mathbb{R}^n} \cdot dy$

**修正：**

> $\int_{\mathbb{R}^p} \cdot dy$

**理由：** 源图参数y在Rp中，参数积分域应Rp而非分布变量域Rn。

**原文：**

> $$
> \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) = \sum_{|j| \leqslant kA - 1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \left( \varphi(x, y) - \varphi\left(x, \frac{j}{k}\right) \right) dy,
> $$

**修正：**

> $$
> \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) = \sum_{j=-kA}^{kA-1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \left( \varphi(x, y) - \varphi\left(x, \frac{j}{k}\right) \right) dy,
> $$

**理由：** 源图Riemann分割漏最左小区间[−A,−A+1/k]，完整分割应j=−kA,…,kA−1；端点φ(x,A)=0使原部分和一致。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> $$
> \partial_x^\alpha \left( \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) \right) = \sum_{|j| \leqslant kA - 1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \partial_x^\alpha \left( \varphi(x, y) - \varphi\left(x, \frac{j}{k}\right) \right) dy.
> $$

**修正：**

> $$
> \partial_x^\alpha \left( \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) \right) = \sum_{j=-kA}^{kA-1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \partial_x^\alpha \left( \varphi(x, y) - \varphi\left(x, \frac{j}{k}\right) \right) dy.
> $$

**理由：** 源图同前页Riemann和遗漏左端小区间，j范围需由−kA至kA−1才能覆盖[−A,A]。

**原文：**

> $$
> \left| \partial_x^\alpha \left( \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) \right) \right| \leqslant \left( \sum_{|j| \leqslant kA - 1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \underbrace{\left| y - \frac{j}{k} \right|}_{\leqslant \frac{1}{k}} dy \right) \sup_{|\beta| \leqslant 1} \|\partial_x^\alpha \partial_y^\beta \varphi\|_\infty
> $$

**修正：**

> $$
> \left| \partial_x^\alpha \left( \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) \right) \right| \leqslant \left( \sum_{j=-kA}^{kA-1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \underbrace{\left| y - \frac{j}{k} \right|}_{\leqslant \frac{1}{k}} dy \right) \sup_{|\beta| \leqslant 1} \|\partial_x^\alpha \partial_y^\beta \varphi\|_\infty
> $$

**理由：** 源图同前页Riemann和遗漏左端小区间，j范围需由−kA至kA−1才能覆盖[−A,A]。

**原文：**

> 根据 Rolle 中值定理

**修正：**

> 根据微积分基本定理的积分估计

**理由：** 源图试验函数允许复值，实值Rolle中值定理不能直接用于复函数；用基本定理及|∫h′|≤∫|h′|得完全相同估计。

**原文：**

> $$
> \begin{aligned}
> \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy' \right) dy_p \right\rangle \\
> &= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy' \right\rangle dy_p \\
> &= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy' dy_p
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right) dy' \right\rangle \\
> &= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right\rangle dy' \\
> &= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy_p dy'
> \end{aligned}
> $$

**理由：** 源图累次积分微分变量写反；内层R积分变量yp、外层R^(p−1)积分变量y′，按Fubini换序应各自匹配。

**原文：**

> $$
> \begin{aligned}
> \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy' \right) dy_p \right\rangle \\
> &= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy' \right\rangle dy_p \\
> &= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy' dy_p
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right) dy' \right\rangle \\
> &= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right\rangle dy' \\
> &= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy_p dy'
> \end{aligned}
> $$

**理由：** 源图把内外积分变量互换了；内层一维积分用yp，外层p−1维积分用y′。

**原文：**

> $$
> \begin{aligned}
> \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy' \right) dy_p \right\rangle \\
> &= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy' \right\rangle dy_p \\
> &= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy' dy_p
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right) dy' \right\rangle \\
> &= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right\rangle dy' \\
> &= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy_p dy'
> \end{aligned}
> $$

**理由：** 源图末行微分顺序需与外Rp−1、内R的积分顺序一致，内yp外y′。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> 一个开领域中的点

**修正：**

> 一个开邻域中的点

**理由：** 源图领域应为邻域，闭集外点具有不与闭集相交的开邻域。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> 作为应用卷积的应用

**修正：**

> 作为卷积的应用

**理由：** 源图应用重复，删去一次即可，使陈述语法完整。

**原文：**

> 试验函数 $\varphi(x) \in \mathcal{D}'(\mathbb{R}^n)$

**修正：**

> 试验函数 $\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$

**理由：** 源图把试验函数写入分布空间D′，测试分布收敛所需的是D中的试验函数。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> $\mathbb{R}^d$ 上的分布

**修正：**

> $\mathbb{R}^n$ 上的分布

**理由：** 源图定理418前后所有对象定义在Rn，d未定义，为n的笔误。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> $$\partial^\beta(\check{c} * \varphi)(x) = \check{c} * \partial^\beta \varphi = \langle c, \partial^\beta \varphi(x + \cdot) \rangle.$$

**修正：**

> $$\partial^\beta(\check{c} * \varphi)(x) = (\check{c} * \partial^\beta \varphi)(x) = \langle c, \partial^\beta \varphi(x + \cdot) \rangle.$$

**理由：** 源图在函数等式中把中间卷积函数漏写x取值，右侧配对为依赖x的标量，应保留同一取值点。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 〈u*δa,φ〉=〈u,δa*φ〉

**正文：**

> $$\langle u * \delta_a, \varphi \rangle = \langle u, \check{\delta}_a * \varphi \rangle.$$

**理由：** 源图该配对右项漏反射记号，应checkδa=δ−a，canonical已正确。

**原讲义片段：**

> (δa*φ)(x):=〈δ−a,φ(x−·)〉

**正文：**

> $$(\check{\delta}_a * \varphi)(x) := \langle \delta_{-a}, \varphi(x - \cdot) \rangle = \varphi(x + a).$$

**理由：** 源图卷积左边漏check，canonical已正确恢复，与δ−a一致。

[相关正文：62：分布的卷积](../../03-math-analysis-iii/62-distribution-convolution.md)

## 数学修正

**原文：**

> $\operatorname{supp} \check{c} * \varphi$

**修正：**

> $\operatorname{supp}(\check{c} * \varphi)$

**理由：** 源图支集算子缺括号，语义是卷积所得试验函数的支集，不能写成支集与函数的卷积。
