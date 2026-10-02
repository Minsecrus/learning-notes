# 80 边界正则性与热核的谱构造

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：特征函数、变分原理与特征值增长](79-spectral-asymptotics.md) · [下一篇：热核、极大值原理与比较定理](81-heat-kernel-pde.md)

<!-- source: PDF 924; printed: 924; transcription: first-pass; proofreading: applied -->

## 80 $H_0^1(\Omega) \cap H^2(\Omega)$ 的刻画，保证分布落在 $H_0^1(\Omega) \cap H^m(\Omega)$ 中的充分条件，特征函数到边界的连续性（光滑边界），利用特征函数构造热核（频率空间的观点）


假设 $\Omega \subset \mathbb{R}^n$ 是有界的开区域，我们证明了如下的结论：存在单调上升的无界序列
$$0 < \lambda_1 \leqslant \lambda_2 \leqslant \lambda_3 \leqslant \dots, \quad \lim_{k \to \infty} \lambda_k = +\infty,$$
以及 $L^2(\Omega)$ 的一组 Hilbert 基 $\{\varphi_k\}_{k \geqslant 1}$，使得
$$-\Delta \varphi_k = \lambda_k \varphi_k.$$
并且对于任意的 $k \geqslant 1$，我们有 $\varphi_k \in H_0^1(\Omega)$。从此往后，我们固定这样的一族特征函数（这种选取并不唯一）。

上次课，我们利用这些特征函数刻画了 $H_0^1(\Omega)$ 中的函数。如果 $\Omega$ 具有光滑的边界，我们还可以对指数更高的 Sobolev 空间进行一定的描述：

<span id="ma-theorem-531" class="lecture-anchor"></span>**定理 531**. 假设 $\Omega$ 具有光滑的边界，那么，作为 $L^2(\Omega)$ 的子空间，我们有
$$H_0^1(\Omega) \cap H^2(\Omega) = \left\{ u = \sum_{k=1}^\infty c_k \varphi_k \Bigg| \sum_{k=1}^\infty \lambda_k^2 |c_k|^2 < \infty \right\}.$$
进一步，假设 $m \geqslant 2$ 是整数并且 $u = \sum_{k=1}^\infty c_k \varphi_k \in L^2(\Omega)$ 满足
$$\sum_{k=1}^\infty \lambda_k^m |c_k|^2 < \infty,$$
那么，$u \in H_0^1(\Omega) \cap H^m(\Omega)$。

对于 $u \in H_0^1(\Omega) \cap H^m(\Omega)$，如果令 $f = -\Delta u$，那么，$f \in H^{m-2}$。另外，如果 $u$ 解如下的方程：
$$\begin{cases} -\Delta u = f, \\ u|_{\partial \Omega} = 0. \end{cases}$$
并且 $f \in H^{m-2}(\Omega)$，那么，根据正则性理论（这里用到了 $\partial \Omega$ 是光滑的），$u \in H^m(\Omega) \cap H_0^1(\Omega)$。所以，我们就有如下的结论：

- 假设 $u \in H_0^1(\Omega)$（其中 $\Omega$ 是有界的光滑带边区域），那么，对任意的 $m \geqslant 1$，$u \in H^m(\Omega)$ 当且仅当 $\Delta u \in H^{m-2}(\Omega)$。

<!-- source: PDF 925; printed: 925; transcription: first-pass; proofreading: applied -->

**注记 (伪证)**. 我们先给出定理的一个“错误”的证明：因为
$$u = \sum_{k=1}^\infty c_k \varphi_k$$
在 $L^2(\Omega)$ 中成立，所以它也在 $\mathcal{D}'(\Omega)$ 的意义下成立。据此，在分布的意义下，我们有（因为求导数与分布的极限可以交换）
$$\Delta u \overset{\mathcal{D}'}{=} \sum_{k=1}^\infty c_k \Delta \varphi_k \overset{\mathcal{D}'}{=} -\sum_{k=1}^\infty \lambda_k c_k \varphi_k.$$
利用 $u \in H^2(\Omega)$，我们知道 $\Delta u \in L^2(\Omega)$，所以，
$$\sum_{k=1}^\infty |\lambda_k c_k|^2 < \infty.$$

如果同学仔细阅读上面的证明，我们发现这个证明只用到了 $u \in H^2(\Omega)$ 而不需要 $u \in H_0^1(\Omega)$ 的条件。为了看出其中的错误，我们需要搞清楚
$$\Delta u \overset{\mathcal{D}'}{=} -\sum_{k=1}^\infty \lambda_k c_k \varphi_k$$
的含义：这个等式指的是
$$\Delta u \overset{\mathcal{D}'}{=} -\lim_{N \to \infty} \left( \sum_{k=1}^N \lambda_k c_k \varphi_k \right),$$
即对任意的 $\phi(x) \in \mathcal{D}(\Omega)$，我们有
$$\langle \Delta u, \phi \rangle = -\lim_{N \to \infty} \sum_{k=1}^N \lambda_k c_k \int_\Omega \varphi_k(x) \phi(x) dx.$$
这只测试紧支集光滑函数，弱于 $L^2(\Omega)$ 中的弱收敛；不能直接推出：
$$\sum_{k=1}^\infty \lambda_k c_k \varphi_k \overset{?}{\rightharpoonup} -\Delta u.$$
我们知道，在分布的意义下 $x_k\to x_0$ 不意味着 $x_k$ 的 $L^2$ 范数是受控制的。

**证明**: 假设 $u \in H_0^1(\Omega) \cap H^2(\Omega)$，那么 $f = -\Delta u \in L^2(\Omega)$。我们把 $f$ 用 $L^2(\Omega)$ 中的特征函数展开：
$$f(x) \overset{L^2}{=} \sum_{k=1}^\infty f_k \varphi_k(x).$$
特别地，我们知道
$$\sum_{k=1}^\infty |f_k|^2 < \infty.$$
现在定义函数
$$v(x) = \sum_{k=1}^\infty \frac{f_k}{\lambda_k} \varphi_k(x).$$

<!-- source: PDF 926; printed: 926; transcription: first-pass; proofreading: applied -->

由于 $\lambda_k \to +\infty$，$v$ 显然是 $L^2$ 的函数。另外，我们知道
$$\sum_{k=1}^\infty \lambda_k \left| \frac{f_k}{\lambda_k} \right|^2 < \infty.$$
所以，$v(x) \in H_0^1(\Omega)$。再者，利用 $v$ 的表达式，我们知道
$$-\Delta v \overset{\mathcal{D}'}{=} \sum_{k=1}^\infty \lambda_k \frac{f_k}{\lambda_k} \varphi_k = f.$$
所以，$v(x) \in H_0^1(\Omega)$ 和 $u \in H_0^1(\Omega)$ 都满足如下分布意义下的方程：
$$-\Delta v \overset{\mathcal{D}'}{=} f, \quad -\Delta u \overset{\mathcal{D}'}{=} f.$$
根据 Dirichlet 问题解的唯一性，我们知道
$$u = v.$$
特别地，我们有
$$u(x) \overset{L^2}{=} \sum_{k=1}^\infty \frac{f_k}{\lambda_k} \varphi_k(x).$$
所以，$c_k = \lambda_k^{-1} f_k$，从而
$$\sum_{k=1}^\infty \lambda_k^2 |c_k|^2 = \sum_{k=1}^\infty |f_k|^2 < \infty.$$

接下来，我们只要证明对任意整数 $m \geqslant 0$，$u = \sum_{k=1}^\infty c_k \varphi_k \in L^2(\Omega)$ 并且
$$\sum_{k=1}^\infty \lambda_k^m |c_k|^2 < \infty,$$
那么，$u\in H^m(\Omega)$；当 $m\geqslant1$ 时，还满足 $u\in H_0^1(\Omega)$。

我们对 $m$ 进行归纳：$m = 0$（Parseval 等式）和 $m = 1$ 的情况已经证明。假设对一切小于 $m$ 的整数命题都成立（$m \geqslant 2$），那么，
$$\Delta u \overset{\mathcal{D}'}{=} -\sum_{k=1}^\infty \lambda_k c_k \varphi_k.$$
我们注意到作用 $-\Delta$ 使得 Sobolev 指数降 2，所以，我们归纳的基础需要两个相邻的整数。根据 $m \geqslant 2$ 以及
$$\sum_{k=1}^\infty \lambda_k^m |c_k|^2 < \infty,$$
我们知道 $u \in H_0^1(\Omega)$ 并且（利用归纳假设）
$$\sum_{k=1}^\infty \lambda_k c_k \varphi_k \in H^{m-2}$$
所以，根据椭圆正则性，我们就知道 $u \in H_0^1(\Omega) \cap H^m(\Omega)$。 \hfill $\square$

<!-- source: PDF 927; printed: 927; transcription: first-pass; proofreading: applied -->

**注记**. 证明的过程表明，对任意的 $m \geqslant 1$ 时，如果
$$u \overset{L^2}{=} \sum_{k=1}^\infty c_k \varphi_k \in L^2(\Omega)$$
并且
$$\sum_{k=1}^\infty \lambda_k^m |c_k|^2 < \infty,$$
那么，$u \in H_0^1(\Omega) \cap H^m(\Omega)$ 并且存在常数 $C$，使得
$$\|u\|_{H^m(\Omega)} \leqslant C \sqrt{\sum_{k=1}^\infty \lambda_k^m |c_k|^2}.$$

证明的想法是在归纳假设中用所谓的椭圆估计：我们已经证明了如下的结论：

- $\Omega \subset \mathbb{R}^n$ 是有界光滑带边区域，$k \geqslant 1$ 是整数。假设 $u \in H^1(\Omega)$ 满足如下的边值问题：
$$\begin{cases} -\Delta u = f, \\ u|_{\partial \Omega} = g. \end{cases}$$
如果 $f \in H^{k-1}(\Omega)$ 并且 $g \in H^{k+\frac{1}{2}}(\partial \Omega)$，那么，$u \in H^{k+1}(\Omega)$。

实际上，证明的过程还给出了如下的估计：存在仅依赖于 $\Omega$ 和 $k$ 的常数，使得
$$\|u\|_{H^{k+1}(\Omega)} \leqslant C \left( \|f\|_{H^{k-1}(\Omega)} + \|g\|_{H^{k+\frac{1}{2}}(\partial\Omega)} \right).$$

**注记**. 当 $m \geqslant 3$ 时，并非每个 $u \in H_0^1(\Omega) \cap H^m(\Omega)$ 中的函数都可以写成
$$u \overset{L^2}{=} \sum_{k=1}^\infty c_k \varphi_k \in L^2(\Omega)$$
并且
$$\sum_{k=1}^\infty \lambda_k^m |c_k|^2 < \infty.$$
我们考虑 $m = 3$ 的情况。任选 $f \in H^1(\Omega)$ 但是 $f \notin H_0^1(\Omega)$，考虑如下方程的解
$$\begin{cases} -\Delta u = f, \\ u|_{\partial \Omega} = 0. \end{cases}$$
我们知道，$u \in H_0^1(\Omega) \cap H^3(\Omega)$。如果 $u \overset{L^2}{=} \sum_{k=1}^\infty c_k \varphi_k \in L^2(\Omega)$ 满足
$$\sum_{k=1}^\infty \lambda_k^3 |c_k|^2 < \infty,$$
根据定理中最后一部分的证明，$f = -\Delta u \in H_0^1(\Omega)$，矛盾。

<!-- source: PDF 928; printed: 928; transcription: first-pass; proofreading: applied -->

<span id="ma-corollary-532" class="lecture-anchor"></span>**推论 532.** 假设 $\Omega$ 具有光滑的边界, 对任意的 $k \geqslant 1$, 特征函数 $\varphi_k(x) \in C^\infty(\Omega) \cap C(\overline{\Omega})$（连续到边界）。特别地, $\varphi_k$ 在边界上的限制是 $0$。

**证明:** 根据定理, 我们知道 $\varphi_k \in H^N(\Omega)$ 其中 $2N > n$, 所以, 我们可以任意选取 $\varphi_k$ 在 $H^N(\mathbb{R}^n)$ 中的扩张, 从而, 根据 Sobolev 嵌入定理, $\varphi_k$ 在 $\overline{\Omega}$ 上连续。注意到, 我们此时同时证明了 $\varphi_k$ 在 $\Omega$ 内部是光滑的（一直到边界）。由于 $\left.\varphi_k\right|_{\partial\Omega} \stackrel{H^{\frac{1}{2}}}{=} 0$, 所以, $\varphi_k$ 在边界上的限制是 $0$。 $\square$

## 热核的构造

对任意的 $t > 0$, 对任意的 $(x, y) \in \Omega \times \Omega$, 我们定义
$$
p(t, x, y) = \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}.
$$

我们已经证明了 $\lambda_k$ 具有多项式的增长并且 $\varphi_k \in C^\infty(\Omega)$, 所以, 上面的级数是（逐点）绝对收敛的（我们可以证明给定点 $x \in \Omega$, $\varphi_k(x)$ 对 $k$ 是多项式增长的, 不过这个级数是逐点绝对收敛的这一点我们之后并不需要）。

我们首先证明, 对任意的 $t \geqslant 0$ 时（包括 $0$）, $p(t, x, y)$ 定义出 $\mathcal{D}'(\Omega \times \Omega)$ 中的一个元素: 对任意的 $\phi(x, y) \in \mathcal{D}(\Omega \times \Omega)$, 要定义
$$
\left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \right\rangle_{\mathcal{D}'(\Omega \times \Omega) \times \mathcal{D}(\Omega \times \Omega)}.
$$

为此, 我们先理解其中一项 $\varphi_k(x) \overline{\varphi_k(y)}$ 的贡献。由于这是一个光滑函数, 所以
$$
I_k = \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \rangle = \int_{\Omega \times \Omega} \varphi_k(x) \overline{\varphi_k(y)} \phi(x, y) dxdy.
$$

根据 Cauchy-Schwarz 不等式, 我们有
$$
|I_k| \leqslant \|\varphi_k(x) \overline{\varphi_k(y)}\|_{L^2(\Omega \times \Omega)} \|\phi(x, y)\|_{L^2(\Omega \times \Omega)}.
$$

由于 $\varphi_k(x)$ 是单位化的, 所以
$$
|I_k| \leqslant \|\phi(x, y)\|_{L^2(\Omega \times \Omega)}.
$$

另外, 我们可以把 $I_k$ 写成
$$
I_k = \frac{1}{\lambda_k^2} \int_{\Omega \times \Omega} \left(-\Delta_x \varphi_k(x)\right) \left(-\Delta_y \overline{\varphi_k(y)}\right) \phi(x, y) dxdy.
$$

由于上述 $\phi(x, y)$ 的支集是紧的并且所有的函数都是光滑的, 所以, 我们可以进行分部积分（这恰好就是证明 Riemann-Lebesgue 引理的想法!）来得到
$$
I_k = \frac{1}{\lambda_k^2} \int_{\Omega \times \Omega} \varphi_k(x) \overline{\varphi_k(y)} (\Delta_x \Delta_y \phi)(x, y) dxdy.
$$

<!-- source: PDF 929; printed: 929; transcription: first-pass; proofreading: applied -->

重复这个过程, 对于正偶数 $2N$, 我们有
$$
I_k = \frac{1}{\lambda_k^{2N}} \int_{\Omega \times \Omega} \varphi_k(x) \overline{\varphi_k(y)} (\Delta_x^N \Delta_y^N \phi)(x, y) dxdy.
$$

我们已经证明过 $\lambda_k \geqslant c k^{\frac{2}{n}}$, 下面我们将选取 $N = n$（这当然不是最优的）。现在假设 $\operatorname{supp} \phi(x, y) \subset K$, 那么, 重复上面对于 $I_k$ 的控制, 我们就有
$$
|I_k| \leqslant \frac{1}{\lambda_k^{2N}} \|\Delta_x^N \Delta_y^N \phi(x, y)\|_{L^2(K)} \leqslant \frac{C_K}{\lambda_k^{2N}} \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 4N}} |\partial^\alpha \phi(x, y)|
$$

所以, 我们定义
$$
\left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \right\rangle := \sum_{k \geqslant 1} e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \rangle
$$
$$
= \lim_{m \to \infty} \sum_{k=1}^m e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \rangle
$$
$$
= \lim_{m \to \infty} \sum_{k=1}^m e^{-\lambda_k t} I_k.
$$

由于当 $N = n$ 时, $\lambda_k^{-2N}$ 是绝对可和的, 所以, 上面是良好定义的。另外, 根据 $I_k$ 的估计, 我们还有
$$
\left| \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \right\rangle \right| \leqslant \sum_{k=1}^\infty e^{-\lambda_k t} |I_k|
$$
$$
\leqslant C \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 4N}} |\partial^\alpha \phi(x, y)|.
$$

这表明我们定义出了 $\mathcal{D}'(\Omega \times \Omega)$ 中的分布。

我们注意到, 上面所得（$I_k$ 的）估计是不依赖于 $t$。所以, 对于任意的试验函数
$$
\phi(t, x, y) \in \mathcal{D}((0, \infty) \times \Omega \times \Omega),
$$
我们可以定义
$$
\left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \right\rangle := \sum_{k \geqslant 1} \int_0^\infty e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle dt
$$
$$
= \lim_{m \to \infty} \sum_{k=1}^m \int_0^\infty e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle dt.
$$

我们假设 $\operatorname{supp}(\phi(t, x, y)) \subset J \times K$, 其中 $J \subset (0, \infty)$ 是紧集, $K \subset \Omega \times \Omega$ 是紧集, 那么, 根据之前的证明
$$
|\langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle| \leqslant \frac{C_K}{\lambda_k^{2N}} \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|
$$
$$
\leqslant \frac{C_K}{\lambda_k^{2N}} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|
$$

<!-- source: PDF 930; printed: 930; transcription: first-pass; proofreading: applied -->

从而, 我们有如下（很粗糙）的估计:
$$
\left| \int_0^\infty e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle dt \right| \leqslant \frac{C_K|J|}{\lambda_k^{2N}} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|.
$$

上面的右边对 $k$ 是可和的, 所以, 我们就有
$$
\left| \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \right\rangle \right| \leqslant C_{J, K} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|.
$$

这说明
$$
p(t, x, y) \in \mathcal{D}'((0, \infty) \times \Omega \times \Omega).
$$

根据定义, 作为 $(0, \infty) \times \Omega \times \Omega$ 上的分布, 我们有
$$
\sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} \stackrel{\mathcal{D}'}{=} \lim_{m \to \infty} \sum_{k=1}^m e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}.
$$

由于在分布的意义下, 求导数与极限是可以交换的, 所以, 我们可以逐项求导, 从而
$$
\left( \partial_t - \frac{1}{2}(\Delta_x + \Delta_y) \right) \left( \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} \right)
$$
$$
= \lim_{m \to \infty} \sum_{k=1}^m \left( \partial_t - \frac{1}{2}(\Delta_x + \Delta_y) \right) \left( e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} \right)
$$
$$
= \lim_{m \to \infty} \sum_{k=1}^m \left( -\lambda_k e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} + \frac{\lambda_k}{2} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} + \frac{\lambda_k}{2} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} \right)
$$
$$
= 0.
$$

这就说明了作为 $(0, \infty) \times \Omega \times \Omega$ 上的分布, 热核 $p(t, x, y)$ 满足如下的方程:
$$
\left( \partial_t - \frac{1}{2}(\Delta_x + \Delta_y) \right) p(t, x, y) = 0.
$$

**注记**（热核的两个看法）. 到目前为止, 我们对热核 $p(t, x, y)$ 有两种看法:

- $p(t, x, y)$ 是映射
$$
[0, +\infty) \to \mathcal{D}'(\Omega \times \Omega), \quad t \mapsto p(t, x, y).
$$

- $p(t, x, y)$ 是 $(0, \infty) \times \Omega \times \Omega$ 上的分布。

可以把热核函数 $p(t, x, y)$ 视作是映射
$$
[0, +\infty) \to \mathcal{D}'(\Omega \times \Omega), \quad t \mapsto p(t, x, y).
$$

<!-- source: PDF 931; printed: 931; transcription: first-pass; proofreading: applied -->

我们现在证明, 这个映射是连续映射, 即对任意的 $\{t_j\}_{j \geqslant 1} \subset [0, +\infty)$, $t_k \to t_0$, 在分布的意义下, 我们有
$$
p(t_k, x, y) \xrightarrow{\mathcal{D}'(\Omega \times \Omega)} p(t_0, x, y).
$$

按照定义, 对任意的 $\phi(x, y) \in \mathcal{D}(\Omega \times \Omega)$, 我们要证明如下的极限即可:
$$
\lim_{j \to \infty} \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t_j} \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \right\rangle - \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t_0} \varphi_k(x) \overline{\varphi_k(y)}, \phi(x, y) \right\rangle = 0.
$$

这等价于证明
$$
\sum_{k \geqslant 1} e^{-\lambda_k t_j} \int_{\Omega \times \Omega} \varphi_k(x) \overline{\varphi_k(y)} \phi(x, y) dxdy \to \sum_{k \geqslant 1} e^{-\lambda_k t_0} \int_{\Omega \times \Omega} \varphi_k(x) \overline{\varphi_k(y)} \phi(x, y) dxdy.
$$

刚才的证明表明,
$$
\left| \sum_{k \geqslant 1} \left( e^{-\lambda_k t_j} - e^{-\lambda_k t_0} \right) \int_{\Omega \times \Omega} \varphi_k(x) \overline{\varphi_k(y)} \phi(x, y) dxdy \right|
$$
$$
\leqslant \sum_{k \geqslant 1} \left| e^{-\lambda_k t_j} - e^{-\lambda_k t_0} \right| |I_k| \to 0.
$$

最后一步因为 $|I_k|$ 是绝对可和的（Lebesgue 控制收敛）。所以, 我们证明了
$$
p(t, x, y) \in C^0([0, +\infty), \mathcal{D}'(\Omega \times \Omega)).
$$

我们还可以计算 $p(0, x, y) \in \mathcal{D}'(\Omega \times \Omega)$: 任选 $f(x)g(y) \in \mathcal{D}(\Omega) \otimes \mathcal{D}(\Omega)$（在 $\mathcal{D}(\Omega \times \Omega)$ 中稠密）, 假设
$$
\overline{f(x)} \stackrel{L^2}{=} \sum_{k=1}^\infty a_k \varphi_k(x), \quad g(x) \stackrel{L^2}{=} \sum_{k=1}^\infty b_k \varphi_k(x),
$$
那么,
$$
\langle p(0, x, y), f(x)g(y) \rangle = \sum_{k=1}^\infty \langle \varphi_k(x) \overline{\varphi_k(y)}, f(x) \otimes g(y) \rangle
$$
$$
= \sum_{k=1}^\infty (g, \varphi_k)_{L^2} \overline{(\overline f, \varphi_k)_{L^2}}
$$
$$
= \sum_{k=1}^\infty b_k \overline{a_k} = \int_\Omega f(x) g(x) dx.
$$

所以,
$$
p(0, x, y) = \delta(x - y).
$$

我们下面说明, 对任意的 $t > 0$, 函数 $p(t, x, y)$ 是光滑函数。

<!-- source: PDF 932; printed: 932; transcription: first-pass; proofreading: applied -->

我们任选 $\chi(x, y) \in C^\infty_0(\Omega \times \Omega)$, 其中 $\chi(x, y) = \chi(x)\chi(y)$ 且 $0\leqslant\chi(x)\leqslant1$, 我们假设 $\operatorname{supp}(\chi(x, y)) = K$。那么, 作为分布, 我们有
$$
\chi(x, y)p(t, x, y) = \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x, y) \varphi_k(x) \overline{\varphi_k(y)}
$$

首先,
$$
\begin{aligned}
\|\chi(x, y)p(t, x, y)\|_{L^2(\Omega \times \Omega)} &\leqslant \sum_{k \geqslant 1} e^{-\lambda_k t} \|\varphi_k(x) \overline{\varphi_k(y)}\|_{L^2} \|\chi\|_{L^\infty} \\
&= \|\chi\|_{L^\infty} \sum_{k \geqslant 1} e^{-\lambda_k t} \\
&< \infty.
\end{aligned}
$$

这里, 我们用到了 $e^{-\lambda_k t}$ 对于 $k$ 是指数衰减的。

其次,
$$
\nabla_x (\chi(x, y)p(t, x, y)) = \sum_{k \geqslant 1} e^{-\lambda_k t} \left( \nabla_x \chi(x, y) \varphi_k(x) \overline{\varphi_k(y)} + \chi(x, y) \nabla_x \varphi_k(x) \overline{\varphi_k(y)} \right)
$$

所以,
$$
\begin{aligned}
\|\nabla_x(\chi(x, y)p(t, x, y))\|_{L^2(\Omega \times \Omega)} &\leqslant \sum_{k \geqslant 1} e^{-\lambda_k t} \|\varphi_k(x) \overline{\varphi_k(y)}\|_{L^2} \|\nabla \chi\|_{L^\infty} \\
&\quad + \sum_{k \geqslant 1} e^{-\lambda_k t} \|\chi(x) \nabla \varphi_k(x)\|_{L^2} \\
&\leqslant \sum_{k \geqslant 1} e^{-\lambda_k t} \|\nabla \chi\|_{L^\infty} + \sum_{k \geqslant 1} e^{-\lambda_k t} \|\chi(x) \nabla \varphi_k(x)\|_{L^2}
\end{aligned}
$$

和第一步类似, 我们只需要控制 $\|\chi(x) \nabla \varphi_k(x)\|_{L^2(\Omega)}$:
$$
\|\chi(x) \nabla \varphi_k(x)\|^2_{L^2(\Omega)} = \int_{\Omega} \chi(x)^2 \nabla \varphi_k(x) \overline{\nabla \varphi_k(x)}.
$$

现在都是光滑函数的等式, 并且由于有了 $\chi$ 作为截断函数, 上面的式子实际上与 $\partial\Omega$ 是没有关系的, 所以, 我们可以进行分部积分:
$$
\begin{aligned}
\|\chi(x) \nabla \varphi_k(x)\|^2_{L^2(\Omega)} &= -\int_{\Omega} \nabla(\chi(x)^2) \cdot \nabla \varphi_k(x) \overline{\varphi_k(x)} - \int_{\Omega} \chi(x)^2 \Delta \varphi_k(x) \overline{\varphi_k(x)} \\
&= -2 \int_{\Omega} (\varphi_k \nabla \chi) \cdot (\overline{\chi \cdot \nabla \varphi_k}) + \lambda_k \int_{\Omega} \chi(x)^2 \varphi_k(x) \overline{\varphi_k(x)} \\
&\leqslant 2 \|\varphi_k \nabla \chi\|^2_{L^2(\Omega)} + \frac{1}{2} \|\chi \cdot \nabla \varphi_k\|^2_{L^2(\Omega)} + \lambda_k \|\chi \varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
$$

在最后一步中, 我们用了如下初等的不等式:
$$
2ab \leqslant \lambda a^2 + \frac{1}{\lambda} b^2,
$$

<!-- source: PDF 933; printed: 933; transcription: first-pass; proofreading: applied -->

其中 $\lambda > 0$ 可以任意选取（我们选取了 $\lambda = 2$）。注意到, 上面不等式右边的第二项恰好是不等式左边的项, 并且其系数小于 $1$, 所以, 它可以被左边“吃掉”, 从而得到
$$
\begin{aligned}
\|\chi(x) \nabla \varphi_k(x)\|^2_{L^2(\Omega)} &\leqslant 4 \|\varphi_k \nabla \chi\|^2_{L^2(\Omega)} + 2\lambda_k \|\chi \varphi_k\|^2_{L^2(\Omega)} \\
&\leqslant (4 + 2\lambda_k) C_1^2.
\end{aligned}
$$

其中,
$$
C_m = \sup_{x \in K, |\alpha| \leqslant m} \|\partial^\alpha \chi\|_{L^\infty}.
$$

代入到之前的等式中, 利用 $e^{-\lambda_k t}$ 是指数衰减的, 我们就知道
$$
\sum_{k \geqslant 1} e^{-\lambda_k t} \|\chi(x) \nabla \varphi_k(x)\|_{L^2} < \infty.
$$

这就证明了
$$
\|\nabla_x (\chi(x, y)p(t, x, y))\|_{L^2(\Omega \times \Omega)} < \infty.
$$

利用 $x$ 与 $y$ 之间的对称性, 我们就知道
$$
\chi(x, y)p(t, x, y) \in H^1(\Omega \times \Omega).
$$

为了证明 $\chi(x, y)p(t, x, y) \in H^m(\Omega \times \Omega)$, 我们先做如下的准备: 利用分部积分, 我们有
$$
\begin{aligned}
\|\chi(x) \nabla \partial^\alpha \varphi_k(x)\|^2_{L^2(\Omega)} &= -\int_{\Omega} \nabla(\chi(x)^2) \cdot \nabla \partial^\alpha \varphi_k(x) \overline{\partial^\alpha \varphi_k(x)} - \int_{\Omega} \chi(x)^2 \Delta \partial^\alpha \varphi_k(x) \overline{\partial^\alpha \varphi_k(x)} \\
&= -2 \int_{\Omega} (\partial^\alpha \varphi_k \nabla \chi) \cdot (\overline{\chi \cdot \nabla \partial^\alpha \varphi_k}) + \lambda_k \int_{\Omega} \chi(x)^2 \partial^\alpha \varphi_k(x) \overline{\partial^\alpha \varphi_k(x)} \\
&\leqslant 2 \|\partial^\alpha \varphi_k \nabla \chi\|^2_{L^2(\Omega)} + \frac{1}{2} \|\chi \cdot \nabla \partial^\alpha \varphi_k\|^2_{L^2(\Omega)} + \lambda_k \|\chi \partial^\alpha \varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
$$

所以,
$$
\|\chi(x) \nabla \partial^\alpha \varphi_k(x)\|^2_{L^2(\Omega)} \leqslant 4 \|\partial^\alpha \varphi_k \nabla \chi\|^2_{L^2(\Omega)} + 2\lambda_k \|\chi \partial^\alpha \varphi_k\|^2_{L^2(\Omega)}.
$$

对 $|\alpha| = m$ 求和, 我们就得到
$$
\|\chi(x) \nabla^{m+1} \varphi_k(x)\|^2_{L^2(\Omega)} \leqslant 4 \|\nabla \chi \cdot \nabla^m \varphi_k\|^2_{L^2(\Omega)} + 2\lambda_k \|\chi \nabla^m \varphi_k\|^2_{L^2(\Omega)}.
$$

据此进行迭代, 我们就得到
$$
\|\chi(x) \nabla^m \varphi_k(x)\|^2_{L^2(\Omega)} \leqslant C_m \lambda_k^m \|\varphi_k\|^2_{L^2(\Omega)}.
$$

<!-- source: PDF 934; printed: 934; transcription: first-pass; proofreading: applied -->

此时,
$$
\begin{aligned}
&\sum_{k \geqslant 1} e^{-\lambda_k t} \nabla_x^{m_1} \nabla_y^{m_2} (\chi(x, y) p(t, x, y)) \\
&= \sum_{k \geqslant 1} e^{-\lambda_k t} \sum_{\substack{|\alpha_1|+|\alpha_2| \leqslant m_1, \\ |\beta_1|+|\beta_2| \leqslant m_2}} \nabla^{\alpha_1} \chi(x) \nabla^{\alpha_2} \varphi_k(x) \overline{\nabla^{\beta_1} \chi(y) \nabla^{\beta_2} \varphi_k(y)} \\
&= \sum_{k \geqslant 1} e^{-\lambda_k t} \sum_{\substack{|\alpha_1|+|\alpha_2| \leqslant m_1, |\beta_1|+|\beta_2| \leqslant m_2, \\ |\alpha_2| < m, |\beta_2| < m}} \nabla^{\alpha_1} \chi(x) \nabla^{\alpha_2} \varphi_k(x) \overline{\nabla^{\beta_1} \chi(y) \nabla^{\beta_2} \varphi_k(y)} \\
&\quad + \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x)^2 \nabla^m \varphi_k(x) \overline{\nabla \varphi_k(y)} + \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x)^2 \varphi_k(x) \overline{\nabla^m \varphi_k(y)}
\end{aligned}
$$

第一个求和中的项的导数个数不超过 $m-1$, 可以利用归纳法来解决, 对于后面两项, 它们的贡献可以被下面不等式控制
$$
\begin{aligned}
&\left\| \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x)^2 \nabla^m \varphi_k(x) \overline{\nabla \varphi_k(y)} + \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x)^2 \varphi_k(x) \overline{\nabla^m \varphi_k(y)} \right\|_{L^2} \\
&\leqslant \sum_{k \geqslant 1} e^{-\lambda_k t} C_m \lambda_k^m \|\varphi_k\|^2_{L^2(\Omega)}.
\end{aligned}
$$

利用 $e^{-\lambda_k t}$ 的指数衰减, 上面的求和是有界（/有限）的。

综上所述, 我们证明了对任意的 $t > 0$, 任意的 $m$, $\chi(x, y)p(t, x, y) \in H^m(\mathbb{R}^{2n})$, 所以, 根据 Sobolev 嵌入定理, 我们就知道 $\chi p(t, x, y) \in C^\infty(\Omega \times \Omega)$。由于光滑性是局部性质, 所以我们就证明了对任意的 $t > 0$, 我们 $p(t, x, y) \in C^\infty(\Omega \times \Omega)$。

由于热核 $p(t, x, y)$ 在 $(0, \infty) \times \Omega \times \Omega$ 满足如下的方程:
$$
\left( \partial_t - \frac{1}{2} (\Delta_x + \Delta_y) \right) p(t, x, y) = 0,
$$

所以, 对于任意的 $m$ 和任意的多重指标 $\alpha$, 我们还有
$$
\partial_t^m \partial^\alpha p(t, x, y) = \left( \frac{1}{2} (\Delta_x + \Delta_y) \right)^m \partial^\alpha p(t, x, y) \in C^\infty_{x, y}(\Omega \times \Omega).
$$

这就说明了
$$
p(t, x, y) \in C^\infty((0, \infty) \times \Omega \times \Omega).
$$

**注记**. 关于 $p(t, x, y)$ 的光滑性我们还可以仿照 Cauchy-Riemann 方程的情况进行证明: 我们注意到
$$
E(t, x, y) = \frac{H(t)}{(2\pi t)^n} e^{-\frac{|x|^2+|y|^2}{2t}}
$$
是 $C^\infty(\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n - \{0\})$ 上的光滑函数并且
$$
\left( \partial_t - \frac{1}{2} (\Delta_x + \Delta_y) \right) E(t, x, y) = \delta_0,
$$

其中, $0$ 代表的是 $\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n$ 上的原点。令 $P = \partial_t - \frac{1}{2} (\Delta_x + \Delta_y)$, 我们先证明如下的引理:

<!-- source: PDF 935; printed: 935; transcription: first-pass; proofreading: applied -->

<span id="ma-lemma-533" class="lecture-anchor"></span>**引理 533**. 给定有紧支集的分布 $c \in \mathcal{E}'(\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n)$, 那么, $E * c$ 在 $c$ 的支集之外是光滑的, 即
$$
E * c \in C^\infty(\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n - \operatorname{supp}(c)).
$$

**证明:** 选取非负的 $\chi$, 使得它的支集在半径为 $1$ 的小球（在 $\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n$ 中的）内并且在原点附近恒等于 $1$，令 $\chi_\varepsilon(z)=\chi(z/\varepsilon)$。我们把 $E * c$ 写成两部分:
$$
u = E * c = \underbrace{(\chi_\varepsilon \cdot E) * c}_{\text{支集 } \subset B_\varepsilon + \operatorname{supp}(c)} + \underbrace{((1 - \chi_\varepsilon) E) * c}_{\text{光滑}}.
$$

根据支集在卷积下的关系, 以上两部分的支集有上面的表达。所以, $u$ 至少在 $\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n - B_\varepsilon - \operatorname{supp}(c)$ 上光滑。令 $\varepsilon \rightarrow 0$, 我们就说明了 $u$ 在 $\operatorname{supp}(c)$ 之外光滑。 $\square$

现在可以证明 $p(t, x, y)$ 在 $(0, +\infty) \times \Omega \times \Omega$ 上光滑, 即证明 $u$ 在每个点的附近为光滑函数即可: 我们任选点 $(t_0, x_0, y_0) \in (0, +\infty) \times \Omega \times \Omega$ 以及 $(t_0, x_0, y_0)$ 处的一个半径为 $2\varepsilon$ 小开球 $B(2\varepsilon)$, 使得 $B(2\varepsilon) \subset (0, +\infty) \times \Omega \times \Omega$, 其中 $\varepsilon > 0$。然后, 选取 $\mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n$ 上的光滑函数 $\theta(z)$, 使得
$$
\begin{cases}
0 \leqslant \theta(z) \leqslant 1, \text{对任意的 } z \in \mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n; \\
\theta\big|_{B((t_0,x_0,y_0), \varepsilon)} \equiv 1; \\
\theta\big|_{\mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n - B((t_0,x_0,y_0), 2\varepsilon)} \equiv 0.
\end{cases}
$$

根据上面的构造, 我们知道,
$$
\partial_t \theta \big|_{B(\varepsilon)} \equiv \partial_x \theta \big|_{B(\varepsilon)} \equiv \partial_y \theta \big|_{B(\varepsilon)} \equiv 0.
$$

我们只需要证明 $\theta \cdot p(t, x, y)$ 光滑即可, 因为这就说明 $p(t, x, y)$ 在 $B(\varepsilon)$ 上光滑。
利用卷积的基本性质, 我们有如下的计算
$$
\begin{aligned}
\theta \cdot p(t, x, y) &= \delta_0 * (\theta \cdot p(t, x, y)) = P(E) * (\theta \cdot p) \\
&= E * (P(\theta \cdot p)) \\
&= E * ((P\theta) \cdot p - \nabla_x \theta \nabla_x p - \nabla_y \theta \nabla_y p).
\end{aligned}
$$

所以 $\theta \cdot p$ 在 $\operatorname{supp}((P\theta) \cdot p - \nabla_x \theta \nabla_x p - \nabla_y \theta \nabla_y p)$ 之外是光滑的。由于
$$
((P\theta) \cdot p - \nabla_x \theta \nabla_x p - \nabla_y \theta \nabla_y p)\big|_{B(\varepsilon)} \equiv 0,
$$
从而, $\theta \cdot p$ 在 $B(\varepsilon)$ 上光滑。

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：特征函数、变分原理与特征值增长](79-spectral-asymptotics.md) · [下一篇：热核、极大值原理与比较定理](81-heat-kernel-pde.md)
