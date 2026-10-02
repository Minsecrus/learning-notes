# 62：分布的卷积

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：61.1：作业：齐次分布，Hadamard有限部分，分布除以多项式](61-distribution-support/61-03-p0742-0746.md) · [下一篇：基本解与椭圆正则性](63-fundamental-solutions/63-01-p0756-0764.md)

<!-- source: PDF 747; printed: 747; transcription: first-pass; proofreading: applied -->



## 分布与试验函数的卷积

我们要研究分布的正则化问题，也就是如何用光滑函数来逼近一个给定的分布。我们在上个学期已经学习关于光滑逼近的一个重要工具：卷积。对于 $u \in L^1(\mathbb{R}^n)$，$\varphi \in \mathcal{D}(\mathbb{R}^n)$，我们回忆一下卷积的定义：
$$
(u * \varphi)(x) = \int_{\mathbb{R}^n} u(y)\varphi(x - y)dy.
$$

据此，对于 $u \in \mathcal{D}'(\mathbb{R}^n)$ 和 $\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$，我们如下定义它们的卷积：对任意的 $x \in \mathbb{R}^n$，令
$$
(u * \varphi)(x) := \langle u, \varphi(x - \cdot) \rangle,
$$

我们下面证明，这个定义给出了双线性的映射：
$$
\mathcal{D}'(\mathbb{R}^n) \times \mathcal{D}(\mathbb{R}^n) \xrightarrow{*} \mathcal{C}^\infty(\mathbb{R}^n), \quad (u, \varphi) \mapsto u * \varphi.
$$

<span id="ma-theorem-414" class="lecture-anchor"></span>**定理 414**。对于 $u \in \mathcal{D}'(\mathbb{R}^n)$ 和 $\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$，如上定义的卷积 $u * \varphi$ 是 $\mathbb{R}^n$ 上的光滑函数。进一步，对每个多重指标 $\alpha$，我们都有
$$
\partial^\alpha(u * \varphi) = u * \partial^\alpha\varphi.
$$

**证明**：我们证明 $u * \varphi$ 是连续可微的函数并且对每个 $1 \leqslant k \leqslant n$，都有
$$
\partial_k(u * \varphi) = u * (\partial_k\varphi).
$$

实际上，只要证明了这个命题，根据归纳法，我们每次都把导数作用在 $\varphi$ 上，这就给出了命题的证明。

先证明 $u * \varphi$ 是良好定义的。对任意的 $x \in \mathbb{R}^n$，把它视作是给定的参数，再把 $\varphi(x - y)$ 看作是 $y$ 的函数，从而，$\varphi(x - y) \in \mathcal{D}(\mathbb{R}^n_y)$，其中我们在 $\mathbb{R}^n$ 上用下标 $y$ 表明这里的函数都是以 $y$ 为变量的。特别地，这表明分布与试验函数之间的配对 $\langle u, \varphi(x - \cdot) \rangle$ 是良好定义的，所以 $u * \varphi(x)$ 作为 $x$ 的函数是良好定义的。

再证明 $u * \varphi$ 是连续函数。任意固定 $x \in \mathbb{R}^n$。任意选取点列 $\{a_j\}_{j \geqslant 1} \subset \mathbb{R}^n$，假设当 $j \to \infty$ 时，$a_j \to 0$。我们要证明
$$
\lim_{j \to \infty} (u * \varphi)(x + a_j) = (u * \varphi)(x).
$$

这等价于证明
$$
\lim_{j \to \infty} \langle u, \varphi(x + a_j - \cdot) \rangle = \langle u, \varphi(x - \cdot) \rangle.
$$

由于 $a_j + x \to x$，所以，我们只要证明对任意的 $\{b_j\}_{j \geqslant 1} \subset \mathbb{R}^n$，当 $j \to \infty$ 时，$b_j \to b$，那么，
$$
\varphi(y + b_j) \xrightarrow{\mathcal{D}} \varphi(y+b),
$$

<!-- source: PDF 748; printed: 748; transcription: first-pass; proofreading: applied -->

即可（最终，我们选取 $b_j = a_j + x$，$y = -y$）。这是显然的：令 $K = \operatorname{supp}(\varphi)$，那么，$\operatorname{supp}(\varphi(\cdot + b_j))$ 显然都落在一个共同的紧集中 $K'$（如果 $\delta = 1+\sup_{j \geqslant 1} |b_j|$，那么，对任意的 $j$，$\operatorname{supp}(\varphi(\cdot + b_j)) \subset K_\delta$）。

对任意的多重指标 $\alpha$，我们自然有
$$
\lim_{j \to \infty} \|\partial^\alpha\varphi(x + b_j) - \partial^\alpha\varphi(x+b)\|_{L^\infty(K')} = 0.
$$

这就说明了在 $\mathcal{D}(\mathbb{R}^n)$ 中，$\varphi(\cdot + b_j) \to \varphi(\cdot+b)$。

我们最终证明，对任意的 $a \in \mathbb{R}^n$（$|a| = 1$），都有
$$
\nabla_a(u * \varphi) = u * (\nabla_a\varphi).
$$

固定 $x_0, a \in \mathbb{R}^n$（$|a| = 1$），根据 Taylor 公式：
$$
f(x) = \sum_{|\alpha| \leqslant m} \frac{\partial^\alpha f(x_0)}{\alpha!} (x - x_0)^\alpha + (m + 1) \sum_{|\alpha| = m + 1} \frac{(x - x_0)^\alpha}{\alpha!} \int_0^1 (1 - t)^m \partial^\alpha f(x_0 + t(x - x_0)) dt.
$$

我们有
$$
\varphi(x_0 - y + \varepsilon a) - \varphi(x_0 - y) = \varepsilon \sum_{j=1}^n a_j \partial_j \varphi(x_0 - y) + \varepsilon^2 r(y, \varepsilon, a),
$$

其中，
$$
r(y, \varepsilon, a) = 2 \sum_{|\alpha| = 2} \frac{a^\alpha}{\alpha!} \int_0^1 (1 - t) \partial^\alpha \varphi(x_0 - y + t \varepsilon a) dt.
$$

将上面的式子与分布 $u$ 进行配对，我们得到
$$
u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0) - \varepsilon \sum_{j=1}^n a_j u * \partial_j \varphi(x_0) = \varepsilon^2 \langle u, r(\cdot, \varepsilon, a) \rangle,
$$

其中，我们将 $a, \varepsilon$ 和 $x_0$ 视作是给定的参数。

根据 $r(\cdot, \varepsilon, a)$ 的表达式，我们很容易看出 $r(\cdot, \varepsilon, a)$ 的支集是紧的，实际上，当 $|\varepsilon|\leqslant1$ 时，它的支集在 $x_0-\operatorname{supp}(\varphi)$ 距离不超过 1 的附近。另外，对于任意的多重指标 $\beta$，我们有
$$
\partial_y^\beta r(y, \varepsilon, a) = 2(-1)^{|\beta|} \sum_{|\alpha| = 2} \frac{a^\alpha}{\alpha!} \int_0^1 (1 - t) \partial^{\alpha + \beta} \varphi(x_0 - y + t \varepsilon a) dt.
$$

所以，$r(\cdot, \varepsilon, a)$ 的各阶导数被 $\varphi$ 在它的支集上的各阶导数所控制，即
$$
\|\partial_y^\beta r(y, \varepsilon, a)\|_{L^\infty} \leqslant C \sup_{|\alpha| \leqslant |\beta| + 2} \|\partial^\alpha \varphi\|_{L^\infty}.
$$

根据分布的定义，我们就有
$$
\langle u, r(\cdot, \varepsilon, a) \rangle = O(1).
$$

（实际上，我们需要说明这里的 $O(1)$ 是不依赖于参数 $\varepsilon$ 的，我们把这一点的证明留作作业，这是一道很重要的习题。）从而，当 $\varepsilon \to 0$ 时，我们得到
$$
\frac{|u * \varphi(x_0 + \varepsilon a) - u * \varphi(x_0) - \varepsilon (u * (\nabla_a \varphi))(x_0)|}{\varepsilon |a|} = o(1),
$$

这个等式就给出了要证明的等式。 $\square$

<!-- source: PDF 749; printed: 749; transcription: first-pass; proofreading: applied -->

## 分布配对与微分积分的交换

当试验函数含有参数时，我们要考虑对参数的微分或积分与分布的配对是否可以交换。这就是下面的定理。证明的主要工具就是 Lebesgue 控制收敛定理。

<span id="ma-theorem-415" class="lecture-anchor"></span>**定理 415**（交换积分或者微分）。给定分布 $u \in \mathcal{D}'(\mathbb{R}^n)$ 和双变量的试验函数 $\varphi(x, y) \in \mathcal{D}(\mathbb{R}^n_x \times \mathbb{R}^p_y)$，其中 $p \geqslant 1$。对于每个参数 $y \in \mathbb{R}^p$，（由于 $\operatorname{supp}_x \varphi(\cdot, y)$ 是紧的），我们定义函数
$$
\psi(y) = \langle u, \varphi(\cdot, y) \rangle.
$$

那么，$\psi(y)$ 是 $\mathbb{R}^p$ 上的光滑有紧支集的函数，即 $\psi(y) \in \mathcal{D}(\mathbb{R}^p_y)$。进一步，对任意的多重指标 $\alpha$，我们有
$$
\partial^\alpha \psi(y) = \langle u, \partial_y^\alpha \varphi(\cdot, y) \rangle.
$$

另外，$\int_{\mathbb{R}^p} \cdot dy$ 与分布的配对可以交换：
$$
\int_{\mathbb{R}^p} \psi(y) dy = \left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle.
$$

**证明**：我们首先证明 $\psi$ 是光滑有紧支集的函数并且满足定理中的求导公式。我们可以假设 $\operatorname{supp}(\varphi(x, y)) \subset K_1 \times K_2$，其中，$K_1 \subset \mathbb{R}^n$ 和 $K_2 \subset \mathbb{R}^p$ 均为紧集。那么，对任意的 $y \in \mathbb{R}^p$，$\operatorname{supp}\varphi(\cdot, y) \subset K_1$。从而，$\operatorname{supp}\psi \subset K_2$（因为当 $y \notin K_2$ 时，按照定义，$\psi(y) = 0$）。

我们观察到，这一部分剩下的证明实际上和上面的定理的证明是一致的：我们只需要按照 Taylor 公式，把 $\varphi(x, y_0 + \varepsilon a)$ 写成：
$$
\varphi(x, y_0 + \varepsilon a) - \varphi(x, y_0) - \varepsilon \sum_{j=1}^p a_j \partial_{y_j} \varphi(x, y_0) = \varepsilon^2 r(x, y_0, \varepsilon, a),
$$

然后重复之前的证明过程即可。

为了证明积分与分布的配对可以交换，我们先处理 $p = 1$ 的情形。我们利用 Riemann 积分的定义（我们上学期证明过，光滑情况下，Riemann 积分与 Lebesgue 积分是一样的）：假设 $K_2 \subset [-A, A]$，其中 $A$ 为正整数。对任意的正整数 $k$，我们定义部分和
$$
r_k(x) = \sum_{|j| \leqslant kA} \frac{1}{k} \varphi\left(x, \frac{j}{k}\right).
$$

很显然，对每个 $k \geqslant 1$，$r_k(x) \in \mathcal{D}(\mathbb{R}^n_x)$。我们现在证明，在 $r_k(x) \in \mathcal{D}(\mathbb{R}^n_x)$ 的拓扑下，有
$$
r_k(x) \xrightarrow{\mathcal{D}(\mathbb{R}^n)} \int_{\mathbb{R}^1} \varphi(x, y) dy, \quad k \to \infty.
$$

通过做差，我们得到
$$
\int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) = \sum_{j=-kA}^{kA-1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \left( \varphi(x, y) - \varphi\left(x, \frac{j}{k}\right) \right) dy,
$$

<!-- source: PDF 750; printed: 750; transcription: first-pass; proofreading: applied -->

对任意的多重指标 $\alpha$，利用 Lebesgue 控制收敛定理的推论，交换积分与求导数在此情况下总可以交换：
$$
\partial_x^\alpha \left( \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) \right) = \sum_{j=-kA}^{kA-1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \partial_x^\alpha \left( \varphi(x, y) - \varphi\left(x, \frac{j}{k}\right) \right) dy.
$$

根据微积分基本定理的积分估计，就有
$$
\left| \partial_x^\alpha \left( \int_{\mathbb{R}^1} \varphi(x, y) dy - r_k(x) \right) \right| \leqslant \left( \sum_{j=-kA}^{kA-1} \int_{\frac{j}{k}}^{\frac{j+1}{k}} \underbrace{\left| y - \frac{j}{k} \right|}_{\leqslant \frac{1}{k}} dy \right) \sup_{|\beta| \leqslant 1} \|\partial_x^\alpha \partial_y^\beta \varphi\|_\infty
$$
$$
\leqslant \frac{2A}{k} \sup_{|\beta| \leqslant 1} \|\partial_x^\alpha \partial_y^\beta \varphi\|_\infty.
$$

按照定义，这表明当 $k \to \infty$ 时，我们有 $r_k(x) \xrightarrow{\mathcal{D}(\mathbb{R}^n)} \int_{\mathbb{R}^1} \varphi(x, y) dy$。从而，
$$
\begin{aligned}
\left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \lim_{k \to \infty} \langle u, r_k(x) \rangle \\
&= \lim_{k \to \infty} \sum_{|j| \leqslant kA} \frac{1}{k} \left\langle u, \varphi\left(x, \frac{j}{k}\right) \right\rangle \\
&= \lim_{k \to \infty} \sum_{|j| \leqslant kA} \frac{1}{k} \psi\left(\frac{j}{k}\right).
\end{aligned}
$$

根据 Riemann 积分的定义，我们就得到
$$
\left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle = \int_{\mathbb{R}} \psi(y) dy.
$$

这就完成了 $p = 1$ 时的证明。对于一般的 $p$，我们用归纳法和 Fubini 定理。假设 $y = (y', y_p) \in \mathbb{R}^p$，其中 $y' \in \mathbb{R}^{p-1}, y_p \in \mathbb{R}$。那么，
$$
\begin{aligned}
\left\langle u, \int_{\mathbb{R}^p} \varphi(\cdot, y) dy \right\rangle &= \left\langle u, \int_{\mathbb{R}^{p-1}} \left( \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right) dy' \right\rangle \\
&= \int_{\mathbb{R}^{p-1}} \left\langle u, \int_{\mathbb{R}} \varphi(\cdot, y', y_p) dy_p \right\rangle dy' \\
&= \int_{\mathbb{R}^{p-1}} \int_{\mathbb{R}} \langle u, \varphi(\cdot, y', y_p) \rangle dy_p dy'
\end{aligned}
$$

我们对最后的等式利用 Fubini 定理可以把累次积分化作对 $y \in \mathbb{R}^p$ 的积分，这就完成了证明。 $\square$

下面的命题总结了卷积
$$
\mathcal{D}'(\mathbb{R}^n) \times \mathcal{D}(\mathbb{R}^n) \xrightarrow{*} \mathcal{C}^\infty(\mathbb{R}^n), \quad (u, \varphi) \mapsto u * \varphi.
$$
的大部分性质：

<!-- source: PDF 751; printed: 751; transcription: first-pass; proofreading: applied -->

## 卷积性质与光滑逼近

<span id="ma-proposition-416" class="lecture-anchor"></span>**命题 416**（$\mathcal{D}'(\mathbb{R}^n) * \mathcal{D}(\mathbb{R}^n)$ 的性质）。任意给定分布 $u \in \mathcal{D}'(\mathbb{R}^n)$ 和试验函数 $\varphi, \psi \in \mathcal{D}(\mathbb{R}^n)$，那么，我们有

1) 卷积之后的支集满足：$\operatorname{supp}(u * \varphi) \subset \operatorname{supp}(u) + \operatorname{supp}(\varphi)$；[^p0751-17]

2) 卷积的结合律：

$$u * (\varphi * \psi) = (u * \varphi) * \psi;$$

3) 卷积在 $0$ 处的取值：

$$(u * \varphi)(0) = \langle u, \check{\varphi} \rangle,$$

其中 $\check{\varphi}(x) = \varphi(-x)$；

4) 卷积的导数：对任意的多重指标 $\alpha$，我们有

$$\partial^\alpha(u * \varphi) = \partial^\alpha u * \varphi = u * \partial^\alpha \varphi.$$

**证明：** 我们逐条来证明：

1) 我们定义

$$F = \operatorname{supp}(u) + \operatorname{supp}(\varphi) = \{x + y \mid x \in \operatorname{supp}(u), y \in \operatorname{supp}(\varphi)\}.$$

很明显 $F$ 是闭集，因为对于任意的 Cauchy 列 $\{x_i + y_i\}_{i \ge 1} \subset F$，其中，$x_i \in \operatorname{supp}(u), y_i \in \operatorname{supp}(\varphi)$，由于 $\operatorname{supp}(\varphi)$ 是紧集，所以可以先选取子列（仍然记作）$\{y_i\}_{i \ge 1}$，使得 $y_i \to y$ 收敛，并且 $y \in \operatorname{supp}(\varphi)$；由于 $\{x_i + y_i\}_{i \ge 1}$ 是 Cauchy 列，所以 $\{x_i\}_{i \ge 1}$ 在闭集 $\operatorname{supp}(u)$ 中收敛到 $x \in \operatorname{supp}(u)$，这说明 $\{x_i + y_i\}_{i \ge 1}$ 的极限点仍然在 $F$ 中。

为了说明该命题，我们只要证明对任意的 $x \notin F$（从而 $x$ 附近的一个开邻域中的点也不在 $F$ 中），我们有

$$u * \varphi(x) = \langle u(y), \varphi(x - y) \rangle = 0.$$

我们证明上式的一个充分条件：

$$\operatorname{supp}(u) \cap \operatorname{supp}(\varphi(x - \cdot)) = \emptyset.$$

这是明显的，因为 $\operatorname{supp}(\varphi(x - \cdot)) = -\operatorname{supp}(\varphi) + x$。



<!-- source: PDF 752; printed: 752; transcription: first-pass; proofreading: applied -->

2) 结合律的证明用到了上一个定理中分布与积分可交换的性质：

$$(u * \varphi) * \psi(x) = \int_{\mathbb{R}^n} (u * \varphi)(y) \psi(x - y) dy$$

$$= \int_{\mathbb{R}^n} \langle u(z), \varphi(y - z) \rangle \psi(x - y) dy$$

$$= \int_{\mathbb{R}^n} \langle u(z), \varphi(y - z) \psi(x - y) \rangle dy$$

$$= \left\langle u(z), \int_{\mathbb{R}^n} \varphi(y - z) \psi(x - y) dy \right\rangle.$$

另外，

$$(u * (\varphi * \psi))(x) = \langle u(z), (\varphi * \psi)(x - z) \rangle$$

$$= \left\langle u(z), \int_{\mathbb{R}^n} \varphi(x - z - y) \psi(y) dy \right\rangle.$$

做变量替换 $y \mapsto x - y$ 就可以看到上面的两个等式是相等的。

3) 这是显然的：利用定义即可。

4) 我们证明第一个等号。事实上，我们有

$$\partial^\alpha u * \varphi(x) = \left\langle u(y), (-1)^{|\alpha|} \partial_y^\alpha (\varphi(x - y)) \right\rangle$$

$$= \langle u(y), (\partial^\alpha \varphi)(x - y) \rangle$$

$$= u * \partial^\alpha \varphi.$$

由于我们已经证明了第三项与第一项相等，所以命题成立。

作为卷积的应用，我们证明，在分布的意义下，任意一个分布可以被光滑函数所逼近：

<span id="ma-theorem-417" class="lecture-anchor"></span>**定理 417**。我们任意选取标准的单位逼近 $\chi_\varepsilon$，其中 $\varepsilon > 0$。那么，对任意的 $u \in \mathcal{D}'(\mathbb{R}^n)$，当 $\varepsilon \to 0$ 时，我们都有

$$u * \chi_\varepsilon \xrightarrow{\mathcal{D}'} u.$$

另外，如果 $u \in \mathcal{E}'(\mathbb{R}^n)$，那么逼近序列 $u * \chi_\varepsilon \in C_0^\infty(\mathbb{R}^n)$。

**证明：** 我们只要证明，对任意的试验函数 $\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$，有

$$\lim_{\varepsilon \to 0} \langle u * \chi_\varepsilon, \varphi \rangle = \langle u, \varphi \rangle.$$

根据上面第三个和第四个命题，我们有

$$\langle u * \chi_\varepsilon, \varphi \rangle = ((u * \chi_\varepsilon) * \check{\varphi})(0) = (u * (\chi_\varepsilon * \check{\varphi}))(0)$$

$$= \langle u, (\chi_\varepsilon * \check{\varphi})^\check{} \rangle = \langle u, (\chi_\varepsilon)^\check{} * \varphi \rangle.$$

<!-- source: PDF 753; printed: 753; transcription: first-pass; proofreading: applied -->

容易证明（请参考本次作业），当 $\varepsilon \to 0$ 时，我们有

$$(\chi_\varepsilon)^\check{} * \varphi \xrightarrow{\mathcal{D}} \varphi.$$

从而定理得证。

**注记**。对任意的分布 $u \in \mathcal{D}'(\mathbb{R}^n)$，我们通过如下的式子来定义 $\check{u}$：

$$\langle \check{u}, \varphi \rangle = \langle u, \check{\varphi} \rangle,$$

其中 $\varphi$ 是试验函数。

## 与紧支集分布的卷积

我们对卷积做推广，来定义一个分布与一个有紧支集的分布的卷积：

$$\mathcal{D}'(\mathbb{R}^n) * \mathcal{E}'(\mathbb{R}^n) \xrightarrow{*} \mathcal{D}'(\mathbb{R}^n).$$

为此，我们选取 $u \in \mathcal{D}'(\mathbb{R}^n), \psi \in \mathcal{D}(\mathbb{R}^n) \subset \mathcal{E}'(\mathbb{R}^n)$ 来做计算（实际上，我们选取所有的函数都在 $\mathcal{D}(\mathbb{R}^n)$ 中也可以）。此时，我们有如下等式

$$\langle u * \psi, \varphi \rangle = \langle u, \check{\psi} * \varphi \rangle.$$

这个等式实际上在前一个定理的证明中已经证明了，其中 $\psi = \chi_\varepsilon$。

根据上面等式的启发，我们定义

<span id="ma-theorem-418" class="lecture-anchor"></span>**定理 418**。任意给定分布 $u \in \mathcal{D}'(\mathbb{R}^n)$ 和有紧支集的分布 $c \in \mathcal{D}'(\mathbb{R}^n)$，如下定义的 $u * c$：

$$\langle u * c, \varphi \rangle = \langle u, \check{c} * \varphi \rangle,$$

是 $\mathbb{R}^n$ 上的分布，其中 $\varphi \in \mathcal{D}(\mathbb{R}^n)$ 是任意的试验函数。

**注记**。这个定义给出了卷积的定义：

$$\mathcal{D}'(\mathbb{R}^n) * \mathcal{E}'(\mathbb{R}^n) \xrightarrow{*} \mathcal{D}'(\mathbb{R}^n).$$

**证明：** 根据分布的定义，我们要证明，任意给定紧集 $K \subset \mathbb{R}^n$，存在常数 $C$ 和 $p$，使得对每个试验函数 $\varphi \in C_K^\infty(\mathbb{R}^n)$，都有不等式

$$|\langle u, \check{c} * \varphi \rangle| \le C \sup_{|\alpha| \le p} \|\partial^\alpha \varphi\|_{L^\infty}.$$

首先，我们注意到 $\operatorname{supp}(\check{c} * \varphi) \subset L$，其中，$L = \operatorname{supp}(\check{c}) + K$。我们注意到，$L$ 为紧集（有界闭集）。从而，根据 $u$ 是分布的定义，存在常数 $D$ 和 $q$（只依赖于 $L$，从而只依赖于 $K$），使得

$$|\langle u, \check{c} * \varphi \rangle| \le D \sup_{|\beta| \le q} \|\partial^\beta (\check{c} * \varphi)\|_{L^\infty}.$$

<!-- source: PDF 754; printed: 754; transcription: first-pass; proofreading: applied -->

我们计算 $\partial^\beta(\check{c} * \varphi)$：

$$\partial^\beta(\check{c} * \varphi)(x) = (\check{c} * \partial^\beta \varphi)(x) = \langle c, \partial^\beta \varphi(x + \cdot) \rangle.$$

此时，由于 $c$ 是有紧支集的分布，所以存在 $D'$ 和 $q'$，使得

$$|\partial^\beta(\check{c} * \varphi)| \le D' \sup_{|\beta'| \le q'} \|\partial^{\beta + \beta'} \varphi\|_{L^\infty}.$$

最终，我们选取 $C = DD'$ 和 $p = q + q'$ 就证明了 $u * c$ 是分布。

**例子。（Dirac 函数与平移算子）** 给定分布 $u \in \mathcal{D}'(\mathbb{R}^n)$，给定 $a \in \mathbb{R}^n$，我们定义了该分布的平移 $\tau_a u$：

$$\langle \tau_a u, \varphi \rangle = \langle u, \varphi(\cdot + a) \rangle.$$

我们来证明：

$$u * \delta_a = \tau_a u.$$

实际上，我们有 $\check{\delta}_a = \delta_{-a}$，所以

$$\langle u * \delta_a, \varphi \rangle = \langle u, \check{\delta}_a * \varphi \rangle.$$

所以，$\check{\delta}_a * \varphi = \varphi(x + a)$ 即可。根据定义，

$$(\check{\delta}_a * \varphi)(x) := \langle \delta_{-a}, \varphi(x - \cdot) \rangle = \varphi(x + a).$$

所以，命题成立。

特别地，对任意的分布 $u \in \mathcal{D}'(\mathbb{R}^n)$，我们有

$$u * \delta_0 = u.$$

另外，我们还可以用卷积来还原 $\mathbb{R}^n$ 上的群结构：

$$\delta_a * \delta_b = \delta_{a+b}.$$

对于分布之间的卷积，我们也有类似于之前的性质：

<span id="ma-proposition-419" class="lecture-anchor"></span>**命题 419**。对任意的分布 $u \in \mathcal{D}'(\mathbb{R}^n)$ 和 $c \in \mathcal{E}'(\mathbb{R}^n)$，我们有

1) 卷积之后的支集满足：$\operatorname{supp}(u * c) \subset \operatorname{supp}(u) + \operatorname{supp}(c)$。特别地，我们有

$$\mathcal{E}'(\mathbb{R}^n) * \mathcal{E}'(\mathbb{R}^n) \xrightarrow{*} \mathcal{E}'(\mathbb{R}^n).$$

2) 卷积与求导数可交换：对任意的多重指标 $\alpha$，我们有

$$\partial^\alpha(u * c) = (\partial^\alpha u) * c = u * (\partial^\alpha c).$$

<!-- source: PDF 755; printed: 755; transcription: first-pass; proofreading: applied -->

**证明：** 我们逐条来证明：

1) 我们令 $F = \operatorname{supp}(u) + \operatorname{supp}(c)$，这是一个闭集（证明用到了 $\operatorname{supp}(c)$ 是紧的，请参考之前的论证）。考虑任意一个试验函数 $\varphi$，我们令 $K = \operatorname{supp}(\varphi)$，假设 $K \cap F = \emptyset$。那么，

$$\operatorname{supp}(u) \cap (K + \operatorname{supp}(\check{c})) = \emptyset.$$

这表明 $\operatorname{supp}(u)$ 与 $\operatorname{supp}(\check{c} * \varphi)$ 是不相交的，所以

$$\langle u * c, \varphi \rangle = \langle u, \check{c} * \varphi \rangle = 0.$$

2) 我们利用定义直接计算：

$$\begin{aligned}
\langle \partial^\alpha(u * c), \varphi \rangle &= \langle u * c, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle u, (-1)^{|\alpha|} \check{c} * \partial^\alpha \varphi \rangle \\
&= \langle u, (-1)^{|\alpha|} \partial^\alpha (\check{c} * \varphi) \rangle = \langle \partial^\alpha u, \check{c} * \varphi \rangle \\
&= \langle (\partial^\alpha u) * c, \varphi \rangle.
\end{aligned}$$

另外，我们还可以如下计算：

$$\begin{aligned}
\langle \partial^\alpha(u * c), \varphi \rangle &= \langle u, (-1)^{|\alpha|} \check{c} * \partial^\alpha \varphi \rangle = \langle u, (-1)^{|\alpha|} (\partial^\alpha \check{c}) * \varphi \rangle \\
&= \langle u, (\partial^\alpha c)\check{} * \varphi \rangle \\
&= \langle u * (\partial^\alpha c), \varphi \rangle.
\end{aligned}$$

命题得证。 \hfill $\square$

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：61.1：作业：齐次分布，Hadamard有限部分，分布除以多项式](61-distribution-support/61-03-p0742-0746.md) · [下一篇：基本解与椭圆正则性](63-fundamental-solutions/63-01-p0756-0764.md)

[^p0751-17]: 两个集合 $A, B \subset \mathbb{R}^n$ 的加法 $A + B$ 指的是：
    $$A + B := \{a + b \mid a \in A, b \in B\}.$$
