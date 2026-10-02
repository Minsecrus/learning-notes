# 67 缓增分布的 Fourier 变换

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：66.1 作业:Fourier逆变换的另一个计算,一个分布扩张的问题,分布的张量积](66-schwartz-tempered/66-03-p0805-0810.md) · [下一篇：缓增分布的 Fourier 变换与卷积](68-fourier-convolution.md)

<!-- source: PDF 811; printed: 811; transcription: first-pass; proofreading: applied -->

## 67 缓增分布的 Fourier 变换：定义与基本例子的计算


我们先补充一个关于 Schwartz 函数的命题：任意的多重指标 $\alpha, \beta$，我们有连续映射
$$x^\alpha : \mathcal{S}(\mathbb{R}^n) \to \mathcal{S}(\mathbb{R}^n),$$
$$\partial^\beta : \mathcal{S}(\mathbb{R}^n) \to \mathcal{S}(\mathbb{R}^n).$$

其中，连续性指的是收敛的函数序列的像仍然是收敛的函数序列。

我们对求导数来证明这个命题：对任意的多重指标 $\alpha'$ 和 $\beta'$，我们有
$$\left| x^{\beta'} \partial^{\alpha'} \partial^\alpha \varphi(x) \right| \leqslant N_{|\alpha|+|\alpha'|+|\beta'|}(\varphi).$$
所以，$\partial^\alpha \varphi \in \mathcal{S}(\mathbb{R}^n)$。

为了说明连续性，我们任意选取 $\varphi_k \xrightarrow{\mathcal{S}} \varphi$，那么，对任意的 $p \geqslant 0$，我们有
$$N_p(\partial^\alpha \varphi_k - \partial^\alpha \varphi) \leqslant N_{p+|\alpha|}(\varphi_k - \varphi) \to 0.$$
所以，$\partial^\alpha \varphi_k \xrightarrow{\mathcal{S}} \partial^\alpha \varphi$。

关于乘以 $x^\beta$ 的验证类似，我们还可以利用 Fourier 变换（保持函数列的收敛）把乘法化成求导数即可。

我们上次定义了缓增的分布。所谓的缓增的分布 $u \in \mathcal{S}'(\mathbb{R}^n)$，就是满足如下条件的分布：存在非负整数 $p$ 和常数 $C > 0$，使得对每个 $\varphi \in \mathcal{D}(\mathbb{R}^n)$，我们都有
$$\left| \langle u, \varphi \rangle \right| \leqslant C N_p(\varphi),$$
我们上次证明了，给定 $u \in \mathcal{S}'(\mathbb{R}^n)$，对任意的 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们都可以定义 $T_u(\varphi) = \langle u, \varphi \rangle$：
$$T_u(\varphi) = \langle u, \varphi \rangle = \lim_{k \to \infty} \langle u, \varphi_k \rangle_{\mathcal{D}' \times \mathcal{D}},$$
其中，$\{\varphi_k\}_{k \geqslant 1} \subset \mathcal{D}(\mathbb{R}^n)$ 是 $\varphi$ 在 $\mathcal{S}(\mathbb{R}^n)$ 中的逼近序列。有时候，为了行文清楚，我们还把上面的配对记作
$$T_u(\varphi) = \langle u, \varphi \rangle_{\mathcal{S}' \times \mathcal{S}}.$$

给定 $u \in \mathcal{S}'(\mathbb{R}^n)$ 和多重指标 $\alpha, \beta$，作为 $\mathcal{D}'(\mathbb{R}^n)$ 中的元素，我们自然有 $\partial^\alpha u, x^\beta u \in \mathcal{D}'(\mathbb{R}^n)$。我们现在要说明 $\partial^\alpha u, x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。实际上，对任意的 $\varphi$，按照缓增分布的定义，我们有
$$\left| \langle \partial^\alpha u, \varphi \rangle \right| = \left| \langle u, \partial^\alpha \varphi \rangle \right| \leqslant C N_{p+|\alpha|}(\varphi).$$
这表明 $\partial^\alpha u \in \mathcal{S}'(\mathbb{R}^n)$。类似地，我们有 $x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。

<!-- source: PDF 812; printed: 812; transcription: first-pass; proofreading: applied -->

另外，对任意的 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们选取 $\{\varphi_k\}_{k \geqslant 1} \subset \mathcal{D}(\mathbb{R}^n)$ 为 $\varphi$ 在 $\mathcal{S}(\mathbb{R}^n)$ 中的逼近序列，那么，
$$\langle \partial^\alpha u, \varphi \rangle_{\mathcal{S}' \times \mathcal{S}} = (-1)^{|\alpha|} \lim_{k \to \infty} \langle u, \partial^\alpha \varphi_k \rangle$$
$$= (-1)^{|\alpha|} \langle u, \partial^\alpha \varphi \rangle_{\mathcal{S}' \times \mathcal{S}}.$$
所以，我们仍然有类似于分布情形的公式：
$$\langle \partial^\alpha u, \varphi \rangle_{\mathcal{S}' \times \mathcal{S}} = (-1)^{|\alpha|} \langle u, \partial^\alpha \varphi \rangle_{\mathcal{S}' \times \mathcal{S}}.$$
类似地，我们还有
$$\langle x^\beta u, \varphi \rangle_{\mathcal{S}' \times \mathcal{S}} = \langle u, x^\beta \varphi \rangle_{\mathcal{S}' \times \mathcal{S}}.$$

但是，我们注意到，如果 $f$ 仅仅是光滑函数，那么
$$\langle f u, \varphi \rangle_{\mathcal{S}' \times \mathcal{S}} = \langle u, f \varphi \rangle_{\mathcal{S}' \times \mathcal{S}}$$
并不成立，因为通常而言 $f \varphi \notin \mathcal{S}(\mathbb{R}^n)$。

我们现在规定 $\mathcal{S}'(\mathbb{R}^n)$ 中序列的收敛性：

<span id="ma-definition-461" class="lecture-anchor"></span>**定义 461** (收敛性). 给定缓增分布的序列 $\{u_k\}_{k \geqslant 1} \subset \mathcal S'(\mathbb R^n)$，我们说它在 $\mathcal{S}'(\mathbb{R}^n)$ 的意义下收敛到 $u \in \mathcal S'(\mathbb R^n)$，记作 $u_k \xrightarrow{\mathcal{S}'} u$，指的是对每个 Schwartz 函数 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，都有
$$\lim_{k \to \infty} \langle u_k, \varphi \rangle = \langle u, \varphi \rangle.$$

<span id="ma-proposition-462" class="lecture-anchor"></span>**命题 462**. 对任意的多重指标 $\alpha$ 和 $\beta$，我们有如下的连续映射
$$x^\alpha : \mathcal{S}'(\mathbb{R}^n) \to \mathcal{S}'(\mathbb{R}^n),$$
$$\partial^\beta : \mathcal{S}'(\mathbb{R}^n) \to \mathcal{S}'(\mathbb{R}^n).$$
换而言之，我们有

1) 如果 $u \in \mathcal{S}'(\mathbb{R}^n)$，那么 $\partial^\alpha u, x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。
2) 如果我们有缓增分布的收敛序列 $u_k \xrightarrow{\mathcal{S}'} u$，那么，它在求导数和乘多项式下被保持：
$$\partial^\alpha u_k \xrightarrow{\mathcal{S}'} \partial^\alpha u, \quad x^\beta u_k \xrightarrow{\mathcal{S}'} x^\beta u.$$

**证明:** 证明是简单（乏味）的：我们已经说明了 $\partial^\alpha u, x^\beta u \in \mathcal{S}'(\mathbb{R}^n)$。为了说明连续性，我们有
$$\lim_{k\to\infty}\langle\partial^\alpha u_k,\varphi\rangle=\lim_{k\to\infty} \langle u_k, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle u, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle \partial^\alpha u, \varphi \rangle.$$
关于乘法的证明是类似的。 \hfill $\square$

<!-- source: PDF 813; printed: 813; transcription: first-pass; proofreading: applied -->

我们现在看一些缓增的分布的例子：

1) 假设 $p = 1, 2$ 或 $\infty$，我们可以将函数空间 $L^p(\mathbb{R}^n)$ 视为分布（因为这都是局部可积的），那么它们是缓增的分布：
假设 $f \in L^\infty(\mathbb{R}^n)$，那么，对任意的 $\varphi \in \mathcal{D}(\mathbb{R}^n)$，我们有
$$\left| \langle f, \varphi \rangle \right| =\left|\int_{\mathbb R^n}\frac f{(1+|x|^2)^{(n+1)/2}}\left((1+|x|^2)^{(n+1)/2}\varphi\right)dx\right|$$
$$\leqslant \left( \int_{\mathbb{R}^n} \frac{1}{(1+|x|^2)^{\frac{n+1}{2}}} dx \right) C_n\|f\|_{L^\infty}N_{n+1}(\varphi).$$
我们把 $p = 1$ 或 $2$ 的情况留作作业。

2) 有紧支集的分布 $\mathcal{E}'(\mathbb{R}^n)$ 是缓增的分布：这是因为每个紧支集的分布都有有限阶的分布。

3) 分布 $\text{pv} \frac{1}{x}$ 是缓增的分布：实际上，我们可以把它写成
$$\text{pv} \frac{1}{x} = \underbrace{\mathbf{1}_{|x|<1} \cdot \text{pv} \frac{1}{x}}_{\in\mathcal E'(\mathbb R)} + \underbrace{\mathbf{1}_{|x| \geqslant 1} \text{pv} \cdot \frac{1}{x}}_{\in L^\infty}.$$

4) 局部可积函数并且具有多项式增长速度的函数是缓增的分布，即对于 $f \in L^1_{\text{loc}}(\mathbb{R}^n)$，如果存在常数 $C>0$ 和非负整数 $m$，使得对任意的 $x \in \mathbb{R}^n$，我们都有
$$|f(x)| \leqslant C(1+|x|)^m,$$
那么，$f \in \mathcal{S}'(\mathbb{R}^n)$。
实际上，对任意的试验函数 $\varphi\in\mathcal D(\mathbb R^n)$，我们有
$$\left| \langle f, \varphi \rangle \right| = \left| \int_{\mathbb{R}^n} f(x)\varphi(x) dx \right|$$
$$\leqslant \int_{\mathbb{R}^n} \underbrace{\frac{|f(x)|}{(1+|x|)^{m+n+1}}}_{\text{可积}} \cdot \underbrace{(1+|x|)^{m+n+1}|\varphi(x)|}_{\leqslant C' N_{m+n+1}(\varphi)} dx$$
$$\leqslant C'' N_{m+n+1}(\varphi).$$

5) 函数 $e^x$ 所定义的分布不是缓增的分布。
我们选取 $\chi\in C_0^\infty(\mathbb R)$，使得 $\chi|_{[0,1]} \equiv 1$ 并且 $\chi \geqslant 0$。令 $\chi_n = \chi(x-n)$。如果 $e^x$ 是缓增的分布，那么，存在 $p$，使得
$$\int_{\mathbb{R}} e^x \chi_n(x) dx \leqslant C \sup_{|\alpha|,|\beta| \leqslant p} \|x^\alpha \partial^\beta \chi_n\|_{L^\infty} \leqslant C n^p.$$
然而，
$$\int_{\mathbb{R}} e^x \chi_n(x) dx = \int_{\mathbb{R}} e^x \chi(x-n) dx \geqslant \int_{[n,n+1]} e^x dx \geqslant e^n.$$
令 $n \to \infty$，我们就得到了矛盾。

<!-- source: PDF 814; printed: 814; transcription: first-pass; proofreading: applied -->

6) 指数增长速度的函数也可以是缓增的分布。
我们令 $u = e^x e^{i e^x}$，这个函数是在 $\mathbb{R}$ 上是指数增长的，但是它所定义的分布是缓增的：因为 $u=\frac1i(e^{ie^x})'$，而 $e^{i e^x} \in L^\infty(\mathbb{R})$ 所定义的分布是缓增的。

<span id="ma-definition-463" class="lecture-anchor"></span>**定义 463** (缓增分布的 Fourier 变换). 对任意的 $u \in \mathcal{S}'(\mathbb{R}^n)$，我们用以下的公式来定义其 Fourier 变换（记作 $\mathcal{F}u$ 或者 $\widehat{u}$）：对任意的 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，令
$$\langle \widehat{u}, \varphi \rangle = \langle u, \widehat{\varphi} \rangle.$$
我们可以类似地定义 Fourier 逆变换 $\mathcal{F}^{-1}$。实际上，我们只要定义
$$\langle \mathcal{F}^{-1}(u), \varphi \rangle = \langle u, \mathcal{F}^{-1}(\varphi) \rangle.$$
即可。

在陈述下面的定理之前，我们先回忆在 Schwartz 函数空间上的 Fourier 变换（以及 Fourier 逆变换）：
$$\mathcal{F} : \mathcal{S}(\mathbb{R}^n) \longrightarrow \mathcal{S}(\mathbb{R}^n), \quad \varphi \mapsto \widehat{\varphi}(\xi),$$
是连续的同构，并且满足如下的性质：对任意的 $p \in \mathbb{Z}_{\geqslant 0}$，存在常数 $C_p > 0$，使得对每个 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们都有
$$N_p(\widehat{\varphi}) \leqslant C_p N_{p+n+1}(\varphi).$$

据此，我们来说明如果 $u \in \mathcal{S}'(\mathbb{R}^n)$，那么上述所定义的 $\widehat{u}$ 也是缓增的分布：这是因为对任意速降的函数 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，我们有如下的不等式
$$\left| \langle \widehat{u}, \varphi \rangle \right| = \left| \langle u, \widehat{\varphi} \rangle \right| \leqslant C N_p(\widehat{\varphi}) \leqslant C C_p N_{p+n+1}(\varphi).$$
这就验证了 $\widehat{u} \in \mathcal{S}'(\mathbb{R}^n)$。

<span id="ma-theorem-464" class="lecture-anchor"></span>**定理 464**. *Fourier 变换*
$$\mathcal{F} : \mathcal{S}'(\mathbb{R}^n) \longrightarrow \mathcal{S}'(\mathbb{R}^n),$$
是连续线性同构，这里连续性指的是对任意的在 $\mathcal{S}'(\mathbb{R}^n)$ 中收敛的缓增分布的序列 $u_k \xrightarrow{\mathcal{S}'} u$，我们都有 $\widehat{u}_k \xrightarrow{\mathcal{S}'} \widehat{u}$。进一步，对每个 $u \in \mathcal{S}'(\mathbb{R}^n)$，如下的公式成立：
$$\widehat{\partial_k u} = i \xi_k \widehat{u}, \quad \widehat{x_k u} = i \partial_k \widehat{u}, \quad \mathcal{F}^{-1}(u) = \frac{1}{(2\pi)^n} \mathcal{F}(u)^\check{}.$$

**证明:** 先验证连续性：假设 $u_k \xrightarrow{\mathcal{S}'} u$，那么，对任意的 Schwartz 函数 $\varphi$，我们都有
$$\langle \widehat{u}_k, \varphi \rangle = \langle u_k, \widehat{\varphi} \rangle \to \langle u, \widehat{\varphi} \rangle = \langle \widehat{u}, \varphi \rangle.$$
所以，$\widehat{u}_k \xrightarrow{\mathcal{S}'} \widehat{u}$。另外，由于
$$\langle \mathcal{F}^{-1}(\mathcal{F}(u)), \varphi \rangle = \langle u, \mathcal{F}^{-1}(\mathcal{F}(\varphi)) \rangle = \langle u, \varphi \rangle.$$
所以，$\mathcal{F}$ 与 $\mathcal{F}^{-1}$ 互为逆，从而，$\mathcal{F}$ 是缓增分布上的同构。

定理中的三个公式的验证也是平凡的，因为我们总是可以在 $\mathcal{S}'(\mathbb{R}^n) \times \mathcal{S}(\mathbb{R}^n)$ 的配对时，把 $\mathcal{S}'(\mathbb{R}^n)$ 中的运算全部挪到 $\mathcal{S}(\mathbb{R}^n)$ 上来验证。对于 $\mathcal{S}(\mathbb{R}^n)$ 中的 $\varphi$，这三个公式我们已经证明过了。 \hfill $\square$

<!-- source: PDF 815; printed: 815; transcription: first-pass; proofreading: applied -->

### Fourier 变换的几个例子

我们计算一些常见函数的 Fourier 变换:

**例子.**

1) *Dirac 函数 $\delta_0$*。我们有
$$\widehat{\delta}_0 = 1.$$

假设 $\varphi(x) \in \mathcal{S}(\mathbb{R}^n)$，那么，
$$\langle \widehat{\delta}_0, \varphi \rangle = \langle \delta_0, \widehat{\varphi} \rangle = \int_{\mathbb{R}^n} \varphi(x) dx = \langle 1, \varphi \rangle.$$

这就完成了计算

2) 对任意的 $a \in \mathbb{R}^n$，任意的多重指标 $\alpha$，我们有
$$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-ia\cdot\xi}, \quad \widehat{x^\alpha}=(2\pi)^n(i\partial_\xi)^\alpha\delta_0.$$

特别地，
$$\widehat{1} = (2\pi)^n \delta_0.$$

这个计算留作作业。

作为应用，我们研究 $\mathbb{R}^n$ 上的调和的缓增分布，即 $u \in \mathcal{S}'(\mathbb{R}^n)$ 并且满足
$$\Delta u = 0.$$

<span id="ma-proposition-465" class="lecture-anchor"></span>**命题 465.** 假设 $u \in \mathcal{S}'(\mathbb{R}^n)$ 是调和的缓增分布，那么，$u$ 必然是（$x_1, \cdots, x_n$ 的）多项式函数。

**证明：** 由于 $u \in \mathcal{S}'(\mathbb{R}^n)$，所以我们可以对它做 Fourier 变换。从而，
$$\Delta u = 0 \quad \Rightarrow \quad -|\xi|^2 \widehat{u} = 0.$$

这表明（练习）$\operatorname{supp}(\widehat{u}) \subset \{0\}$，从而，
$$\widehat{u} = \sum_{|\alpha| \leqslant m} c_\alpha \partial^\alpha \delta_0(\xi).$$

对上式作 Fourier 逆变换：
$$u(x)=\frac1{(2\pi)^n}\sum_{|\alpha|\leqslant m}c_\alpha(-ix)^\alpha.$$

这就得到了要证明的结论。 $\square$

**注记.** 由于众所周知的原因，我们通常把 $\operatorname{supp}(\widehat{u})$ 称作是 $u$ 的谱并记作 $\operatorname{spec}(u)$。

**注记.** 要求 $u$ 是缓增的分布是非常重要条件：如果不对 $u$ 在无穷远处的增长加以限制，那么调和的分布是很多的。比如说，在 $\mathbb{R}^2 = \mathbb{C}$ 上，任何一个在整个 $\mathbb{C}$ 上定义的复解析函数都是调和的。比如说，$e^z$，它就不是多项式函数，它在 $\infty$ 附近增长的很快，所以它所定义的分布不是缓增的。

<!-- source: PDF 816; printed: 816; transcription: first-pass; proofreading: applied -->

为了计算一些特殊的分布的 Fourier 变换，我们经常用到如下两个技巧：

<span id="ma-proposition-466" class="lecture-anchor"></span>**命题 466.** 假设 $u \in \mathcal{S}'(\mathbb{R}^n)$ 是缓增的分布。我们有：

1) 给定可逆的 $n \times n$ 的实系数矩阵 $A$，我们把它看作是 $\mathbb{R}^n$ 到自身的线性变换，那么，$A^* u$ 也是缓增的分布（证明几乎是显然的）并且
$$\widehat{A^* u} = |\det(A)|^{-1} ({^t}A^{-1})^* \widehat{u}.$$

通常，我们把这个公式写作
$$\widehat{u(Ax)}(\xi) = |\det(A)|^{-1} \widehat{u} ({^t}A^{-1}\xi).$$

2) 如果 $u$ 是次数为 $s$ 的齐次分布，那么，$\widehat{u}$ 是次数为 $-s-n$ 的齐次分布。

3) 如果 $u$ 是奇分布，即满足 $\check u=-u$，那么 $\widehat{u}$ 也是；如果 $u$ 是偶分布，即满足 $\check u=u$，那么 $\widehat{u}$ 也是。

4) 如果 $u$ 是旋转对称的，即对任意的 $A \in \mathrm{SO}(n)$，
$$A^* u = u,$$

那么，$\widehat{u}$ 是旋转对称的，

**证明：** 我们把 1) 的证明留作作业。为了证明 2)，我们用 1) 的结论。令 $A_\lambda$ 为对角线上均为 $\lambda$ 的对角矩阵，其中 $\lambda > 0$。那么（请参考第一次作业），$u$ 是次数为 $s$ 的齐次分布等价于对任意的 $\lambda > 0$，我们都有
$$(A_\lambda)^* u = \lambda^s u.$$

对上面的等式作 Fourier 变换，我们就得到
$$\lambda^{-n} (A_{\lambda^{-1}})^* \widehat{u} = \lambda^s \widehat{u}.$$

令 $\gamma = \lambda^{-1}$，所以，
$$(A_\gamma)^* \widehat{u} = \gamma^{-s-n} \widehat{u}.$$

所以，$\widehat{u}$ 是次数为 $-s-n$ 的齐次分布。

为了证明 3)，我们只需要在 1) 中选取矩阵 $A=-\operatorname{Id}$ 即可。

为了证明 4)，我们注意到对于任意的正交矩阵，我们都有
$${^t}A^{-1} = A.$$

所以，公式
$$\widehat{u(Ax)}(\xi) = |\det(A)|^{-1} \widehat{u} ({^t}A^{-1}\xi)$$

可以写成
$$\widehat{u(Ax)}(\xi) = \widehat{u}(A\xi).$$

这就是要验证的。 $\square$

<!-- source: PDF 817; printed: 817; transcription: first-pass; proofreading: applied -->

**例子.** Dirac 函数 $\delta_0$ 是次数为 $-n$ 的齐次分布，因为它的 Fourier 变换 $1$ 是次数为 $0$ 的齐次分布。

**例子.** 3) 我们计算 $\operatorname{vp} \frac{1}{x}$ 的 Fourier 变换：
$$\widehat{\operatorname{vp} \frac{1}{x}} = -2\pi i H(x) + \pi i,$$

我们注意到
$$x \cdot \operatorname{vp} \frac{1}{x} = 1.$$

所以，
$$\widehat{x \cdot \operatorname{vp} \frac{1}{x}} = 2\pi \delta_0 \quad \Rightarrow \quad \frac{d}{d\xi} \left( \widehat{\operatorname{vp} \frac{1}{x}} \right) = -i 2\pi \delta_0.$$

我们知道 $-2\pi iH(\xi)$ 是上述方程的一个解，所以，
$$\widehat{\operatorname{vp} \frac{1}{x}} = -2\pi i H(x) + C,$$

其中，$C$ 是待定的常数。

我们注意到 $\operatorname{vp} \frac{1}{x}$ 是一个奇分布，所以，$\widehat{\operatorname{vp} \frac{1}{x}}$ 也是，这说明 $C = \pi i$。

4) Heaviside 函数 $H(x)$ 的 Fourier 变换为
$$\widehat H(\xi)=-i\operatorname{vp}\frac1\xi + \pi \delta_0.$$

这个计算留作作业。

5) 我们考虑 $\mathbb{R}^n$ 上 Laplace 算子 $\Delta$ 的一个基本解 $u$，其中 $n \geqslant 3$，
$$\Delta u = \delta_0.$$

在第二次作业中，我们给出了 $\Delta$ 的基本解，但是，这种方式不是令人信服的：因为我们想知道如何能够合理地动手来构造一个基本解而不是仅仅验证某些分布是基本解。

我们做如下的预设[^p0817-20]：$u$ 是缓增的分布。那么，利用 Fourier 变换，在频率空间中，我们就有
$$-|\xi|^2 \widehat{u} = 1 \quad\text{可选取}\quad\widehat u(\xi)=-\frac1{|\xi|^2}.$$

我们注意到 $n \geqslant 3$，所以 $|\xi|^{-2}$ 是局部可积的，从而定义了一个分布。另外，我们可以把它写成
$$\frac{1}{|\xi|^2} = \frac{1}{|\xi|^2} \mathbf{1}_{|\xi| \leqslant 1}(\xi) + \frac{1}{|\xi|^2} \mathbf{1}_{|\xi| > 1}(\xi).$$



<!-- source: PDF 818; printed: 818; transcription: first-pass; proofreading: applied -->

这是一个有紧支集的分布与 $L^\infty$ 函数的和，从而是缓增的分布。

上面给出了 $\widehat{u}$ 的一个可能的解（其他的缓增解与 $u$ 相差一个复系数调和多项式）。为了在物理空间中表达 $u$，我们要计算 $-\frac{1}{|\xi|^2}$ 的 Fourier 逆变换。我们注意到这是一个旋转对称的次数为 $-2$ 的齐次分布，从而，它的 Fourier 逆变换是旋转对称的次数为 $-n + 2$ 的齐次分布。通过这个观察，一个合理的猜测自然是
$$u = \frac{C}{|x|^{n-2}}.$$

这样子，我们就回到了第二次作业中的形式，通过在原点处计算，我们可以将待定的系数 $C$ 算出来。

在那次作业中，我们已经证明了当 $n \geqslant 3$ 时，我们用。令
$$E = \frac{|x|^{2-n}}{(2-n) |S^{n-1}|}.$$

是 $\Delta$ 的基本解，其中 $|S^{n-1}|$ 表示 $S^{n-1}$ 的测度。由于 $E$ 在 $0$ 附近可积并且在 $\infty$ 处衰减，所以这是一个缓增的分布。它与前面所选解同为旋转不变、次数为 $2-n$ 的齐次基本解，两者之差是同次的调和多项式；因 $2-n<0$，该差只能为零。因此，我们知道
$$\widehat{E}(\xi) = -\frac{1}{|\xi|^2}.$$

从而，
$$\mathcal{F}^{-1} \left( -\frac{1}{|\xi|^2} \right) = E(x).$$

所以，
$$\mathcal{F}\left( -\frac{1}{|\xi|^2} \right) = \left( (2\pi)^n \mathcal{F}^{-1} \left( -\frac{1}{|\xi|^2} \right) \right)^\check{} = (2\pi)^n E(x),$$

即
$$\widehat{|x|^{-2}}(\xi) = \frac{(2\pi)^n}{(n-2) |S^{n-1}|} |\xi|^{2-n}.$$

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：66.1 作业:Fourier逆变换的另一个计算,一个分布扩张的问题,分布的张量积](66-schwartz-tempered/66-03-p0805-0810.md) · [下一篇：缓增分布的 Fourier 变换与卷积](68-fourier-convolution.md)

[^p0817-20]: 在找到问题的解答之前，我们总是可以做各种（相对合理的）假设。这些额外的假设可能给出问题的一类解。通过做这样的假设得到的解有时候恰好是问题的所有解，也有可能不是所有的解，但是总是比没有找到解更令人欣慰。在英文的文献中，这种假设叫做 ansatz。在分析问题中，所谓的分离变量法就是这样的一种方法。我们将会看到，利用另一种预设，我们也可以得到 $\Delta$ 的基本解。
