# 68 缓增分布的 Fourier 变换与卷积

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：缓增分布的 Fourier 变换](67-tempered-fourier.md) · [下一篇：数学物理方程与 Sobolev 空间](69-sobolev-introduction.md)

<!-- source: PDF 819; printed: 819; transcription: first-pass; proofreading: applied -->

<!-- math-analysis-layout: document-title-normalized -->


我们是首先研究球面测度的 Fourier 变换, 这是一个重要计算, 我们在课程的后面会看到它在解波动方程时的应用, 这个公式在调和分析中也是重要例子 (限制定理):

**例子.** 令 $d\sigma_R$ 为 $\mathbb{R}^3$ 上中心在原点半径为 $R$ 的球面 $S^2_R$ 上的球面测度, 其中 $R > 0$。我们 (已经见过) 可以把它视作是一个 $0$ 阶的分布: 对任意的 $\varphi\in\mathcal D(\mathbb R^3)$, 我们令
$$\langle d\sigma_R, \varphi \rangle = \int_{S^2_R} \varphi\vert_{S^2_R} d\sigma_R.$$
这是一个具有紧支集的分布, 我们要计算它的 Fourier 变换 $\widehat{d\sigma_R}(\xi)$。这是一个关于 $\xi$ 的光滑函数。由于分布 $d\sigma_R$ 是旋转不变的 (作业), 所以 $\widehat{d\sigma_R}(\xi)$ 是也是旋转对称的。特别地, $\widehat{d\sigma_R}(\xi)$ 是只与 $|\xi|$ 相关的函数。

根据上面的讨论, 我们只要做如下计算即可:
$$\begin{aligned}
\widehat{d\sigma_R}(0, 0, |\xi|) &= \langle d\sigma_R, e^{-i(x,y,z)\cdot(0,0,|\xi|)} \rangle = \int_{0}^{2\pi} \left( \int_{0}^{\pi} e^{-i|\xi|R \cos\vartheta} R^2 \sin\vartheta d\vartheta \right) d\phi \\
&= 2R^2\pi \int_{0}^{\pi} e^{-i|\xi|R \cos\vartheta} \sin\vartheta d\vartheta = 2R^2 \pi \frac{e^{-iR|\xi|t}}{-iR|\xi|} \bigg\vert_{-1}^{1}
\end{aligned}$$
最终, 我们得到
$$\frac{\widehat{d\sigma_R}}{4\pi R}=\frac{\sin(R|\xi|)}{|\xi|}.$$
其中右侧在 $\xi=0$ 处按连续延拓取值 $R$。

在进一步研究缓增分布的性质之前, 我们先说明对于一个 $L^1$ 或者 $L^2$ 的函数, 我们把它 Fourier 变换视作是一个缓增的分布, 也可以先将它视作是缓增的分布再做 Fourier 变换来得到一个缓增的分布, 这两种方式是一致的:

<span id="ma-proposition-467" class="lecture-anchor"></span>**命题 467.** 假定 $u \in L^1(\mathbb{R}^n)$ (或者 $L^2(\mathbb{R}^n)$), 那么, 它作为缓增分布的 Fourier 变换与它作为 $L^1$ (或 $L^2$) 函数的 Fourier 变换是一致的。

**证明:** 先假设 $f \in L^1(\mathbb{R}^n)$, 我们把它在 $L^1$ 意义下的 Fourier 变换 (可用积分来写) 记为 $\mathcal{F}_1(f)$。由于 $\mathcal{F}_1(f) \in C_\circ(\mathbb{R}^n)$, 所以, 对任意的 Schwartz 函数 $\varphi$, 我们有 (容易验证 Fubini 定理的条件总是满足的)
$$\begin{aligned}
\langle \mathcal{F}_1(f), \varphi \rangle &= \int_{\mathbb{R}^n} \mathcal{F}_1(f)(\xi) \varphi(\xi) d\xi = \int_{\mathbb{R}^n} \int_{\mathbb{R}^n} e^{-ix\cdot\xi} f(x) \varphi(\xi) dx d\xi \\
&= \int_{\mathbb{R}^n} f(x) \left( \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(\xi) d\xi \right) dx = \int_{\mathbb{R}^n} f(x) \widehat{\varphi}(x) dx = \langle f, \widehat{\varphi} \rangle \\
&= \langle \widehat{f}, \varphi \rangle.
\end{aligned}$$
其中, 最后的等号用的是缓增分布中的 Fourier 变换。根据局部可积函数到分布嵌入的唯一性, 我们知道 $\mathcal{F}_1(f) = \widehat{f}$。

<!-- source: PDF 820; printed: 820; transcription: first-pass; proofreading: applied -->

现在假设 $f \in L^2(\mathbb{R}^n)$, 我们把它在 $L^2$-意义下的 Fourier 变换记为 $\mathcal{F}_2(f)$。对任意的 $k \geqslant 1$, 我们令
$$f_k=f\cdot\mathbf1_{|x|\leqslant k} \in L^1(\mathbb{R}^n) \cap L^2(\mathbb{R}^n),$$
那么, 我们已经证明过
$$\mathcal{F}_2(f) \overset{L^2}{=} \lim_{k \to \infty} \mathcal{F}_1(f_k),$$
其中, 极限是在 $L^2$ 的收敛的意义下取的。所以, 作为分布, 我们也有 (利用 Cauchy-Schwartz, 请参考作业题)
$$\mathcal{F}_2(f) \overset{\mathcal{D}'}{=} \lim_{k \to \infty} \mathcal{F}_1(f_k),$$
从而, 根据上述, 我们知道
$$\mathcal{F}_2(f) \overset{\mathcal{D}'}{=} \lim_{k \to \infty} \widehat{f_k},$$
其中, 后面戴帽子的符号代表 $\mathcal{S}'$ 中的 Fourier 变换。由于
$$f \overset{L^2}{=} \lim_{k \to \infty} f_k,$$
所以,
$$f \overset{\mathcal{S}'}{=} \lim_{k \to \infty} f_k,$$
从而, 根据连续性
$$\widehat{f_k} \xrightarrow{\mathcal{D}'} \widehat{f}.$$
所以,
$$\mathcal{F}_2(f) \overset{\mathcal{D}'}{=} \lim_{k \to \infty} \widehat{f_k} \overset{\mathcal{D}'}{=} \widehat{f}.$$
这就验证了这些 Fourier 变换的概念都是相容的。 $\hfill \square$

我们强调过, Fourier 分析中的一个直观是物理空间的衰减意味着频率空间的光滑性, 这对分布也是成立的:

<span id="ma-theorem-468" class="lecture-anchor"></span>**定理 468.** 假设 $u \in \mathcal{E}'(\mathbb{R}^n)$ (自然在无穷远处衰减地足够快), 那么, $\widehat{u} \in C^\infty(\mathbb{R}^n_\xi)$ 是光滑函数并且
$$\widehat{u}(\xi) = \langle u, e^{-ix\cdot\xi} \rangle.$$

**证明:** 我们选取截断函数 $\chi \in C^\infty_0(\mathbb{R}^n)$ 来帮助我们记住 $u$ 具有紧支集, 其中 $\chi$ 在 $\operatorname{supp}(u)$ 的一个开邻域中恒为 $1$。按照定义以及分布与积分可交换的命题, 我们有
$$\begin{aligned}
\langle \widehat{u}, \varphi \rangle &= \langle u, \widehat{\varphi} \rangle = \langle \chi \cdot u, \widehat{\varphi} \rangle = \langle u, \chi \widehat{\varphi} \rangle \\
&= \left\langle u, \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \chi(\xi) \varphi(x) dx \right\rangle \\
&= \int_{\mathbb{R}^n} \left\langle u(\xi), e^{-ix\cdot\xi} \chi(\xi) \right\rangle \varphi(x) dx \\
&= \int_{\mathbb{R}^n} \left\langle u(x), e^{-ix\cdot\xi} \chi(x) \right\rangle \varphi(\xi) d\xi \\
&= \int_{\mathbb{R}^n} \left\langle u(x), e^{-ix\cdot\xi} \right\rangle \varphi(\xi) d\xi.
\end{aligned}$$

<!-- source: PDF 821; printed: 821; transcription: first-pass; proofreading: applied -->

这就证明了 $\widehat{u}(\xi) = \langle u, e^{-ix\cdot\xi} \rangle$。
我们将 $\xi$ 视为参数, 那么,
$$\widehat{u}(\xi) = \langle u, \chi(x) e^{-ix\cdot\xi} \rangle.$$
所以, 函数 $\widehat{u}(\xi)$ 光滑性可以利用对分布与求导数可交换的命题立即得到。 $\hfill \square$

**注记.** 特别的, 上面的命题表明, 如果将 $\xi$ 视作是复变量, 那么, $\widehat{u}(\xi)$ 是复解析函数。特别地，当 $u\ne0$ 时，$\widehat u$ 的支集不可能是紧集。

我们再来研究 $\mathcal{S}'(\mathbb{R}^n)$ 上的卷积运算。为此, 我们先考虑在 $\mathcal{S}(\mathbb{R}^n)$ 上的卷积。

<span id="ma-proposition-469" class="lecture-anchor"></span>**命题 469.** 任意给定有紧支集的分布 $c \in \mathcal{E}'(\mathbb{R}^n)$。那么,

1) 对任意的 Schwartz 函数 $\varphi \in \mathcal{S}(\mathbb{R}^n)$, 我们有
$$\varphi * c \in \mathcal{S}(\mathbb{R}^n).$$
进一步, 我们能找到正整数 $q$ (可能依赖于 $c$), 使得对于任何非负整数 $p$, 都存在正常数 $C_p$, 使得对任意的 $\varphi \in \mathcal{S}(\mathbb{R}^n)$, 我们有
$$N_p(\varphi * c) \leqslant C_p N_{p+q}(\varphi).$$

2) 对每个 Schwartz 函数 $\varphi \in \mathcal{S}(\mathbb{R}^n)$, 我们有
$$\widehat{\varphi*c}(\xi)=\widehat\varphi(\xi)\widehat c(\xi), \quad \forall \xi \in \mathbb{R}^n.$$

**注记.** 在本次课的最后一个定理的证明过程中, 我们会证明 $\widehat{c}(\xi)$ 是一个多项式增长的函数。

**证明:** 我们已经证明过, 如果 $f$ 是光滑函数, 那么 $f * c$ 是光滑函数并且可以表达为
$$(f * c)(x) = \langle c, f(x - \cdot) \rangle.$$
所以, 对于 Schwartz 函数 $\varphi$, 我们有
$$(\varphi * c)(x) = \langle c(y), \varphi(x-y) \rangle.$$
从而, 利用分布与求导数可交换的性质, 对任意的多重指标 $\alpha$ 和 $\beta$, 我们就有
$$x^\alpha\partial^\beta(\varphi*c)(x) = \left\langle c(y), x^\alpha (\partial^\beta\varphi)(x-y) \right\rangle$$
由于 $c$ 是有紧支集的分布, 我们令 $K$ 为包含 $\operatorname{supp}(c)$ 的一个开邻域的紧集；$c$ 是有限阶的分布, 它的阶记作 $q$。以下我们认为 $x$ 是固定的。从而,
$$\begin{aligned}
|x^\alpha\partial^\beta(\varphi*c)(x)| &\leqslant C |x|^{|\alpha|} \sup_{y\in K,\,|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right| \\
&\leqslant C \sup_{y\in K,\,|\gamma|\leqslant q} (|x - y| + |y|)^{|\alpha|} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right|.
\end{aligned}$$

<!-- source: PDF 822; printed: 822; transcription: first-pass; proofreading: applied -->

在上面的不等式中 $y \in K$, 所以 $|y|$ 的因子只能贡献一个常数, 只贡献一个常数 $M$。所以,
$$|x^\alpha\partial^\beta(\varphi*c)(x)| \leqslant C \sup_{y\in K,\,|\gamma|\leqslant q} (|x - y| + M)^{|\alpha|} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right|.$$
通过对 $x$ 取 $\sup$, 从而,
$$\sup_{x \in \mathbb{R}^n} |x^\alpha\partial^\beta(\varphi*c)(x)| \leqslant C' N_{\max\{|\alpha|,|\beta|+q\}}(\varphi).$$
从而, 1) 中的不等式成立。

现在证明 2)。我们选取截断函数 $\chi \in C^\infty_0(\mathbb{R}^n)$, 使得 $\chi$ 在 $\operatorname{supp}(c)$ 的一个开邻域恒为 $1$。我们先假定 $\varphi \in \mathcal{D}(\mathbb{R}^n)$ (从而, 如下进行的分布与积分号可以交换)。我们有
$$\begin{aligned}
\widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(x-y) \rangle dx \\
&= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
&= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
&= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
&= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
&= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
&= \widehat{c}(\xi) \widehat{\varphi}(\xi).
\end{aligned}$$
对于一般情形, 我们选取 $\varphi_k \xrightarrow{\mathcal{S}} \varphi$, 其中 $\{\varphi_k\}_{k\geqslant1}\subset\mathcal D(\mathbb R^n)$。根据 1) 的证明, 对任意的非负整数 $p$, 我们有
$$N_p(\varphi * c - \varphi_k * c) \leqslant C_p N_{p+q}(\varphi - \varphi_k).$$
从而,
$$\varphi_k * c \xrightarrow{\mathcal{S}} \varphi * c,$$
从而根据 Fourier 变换的连续性, 我们有
$$\widehat{\varphi_k * c}(\xi) = \widehat{\varphi_k}(\xi) \widehat{c}(\xi) \xrightarrow{\mathcal{S}} \widehat{\varphi * c}(\xi).$$
另外, 我们还有 $\widehat{\varphi_k}(\xi)\widehat{c}(\xi) \xrightarrow{\mathcal{S}} \widehat{\varphi}(\xi)\widehat{c}(\xi)$ (因为 $\widehat c$ 及其各阶导数均为多项式增长的, 请参考本次作业), 这就证明了定理。 $\hfill \square$

<span id="ma-theorem-470" class="lecture-anchor"></span>**定理 470.** 对任意的 $u \in \mathcal{S}'(\mathbb{R}^n)$, $c \in \mathcal{E}'(\mathbb{R}^n)$, 我们有 $u * c \in \mathcal{S}'(\mathbb{R}^n)$, 即
$$\mathcal{S}'(\mathbb{R}^n) \times \mathcal{E}'(\mathbb{R}^n) \xrightarrow{*} \mathcal{S}'(\mathbb{R}^n), \quad (u, c) \mapsto u * c.$$
进一步, 我们还有
$$\widehat{u * c} = \widehat{c} \cdot \widehat{u},$$
其中, $\widehat{c}$ 是多项式增长的 （其各阶导数也为多项式增长） 光滑函数。

<!-- source: PDF 823; printed: 823; transcription: first-pass; proofreading: applied -->

**证明:** 首先证明 $u * c \in \mathcal{S}'(\mathbb{R}^n)$。对任意的 $\varphi \in \mathcal{D}(\mathbb{R}^n)$, 存在常数 $C$ 和 $p$, 使得有
$$|\langle u * c, \varphi \rangle| = |\langle u, \check{c} * \varphi \rangle| \leqslant C N_p(\check{c} * \varphi)$$

利用上一个命题, 我们有
$$|\langle u * c, \varphi \rangle| \leqslant C' N_{p+q}(\varphi).$$

所以, $u * c$ 是缓增的分布。

下面计算 $u * c$ 的 Fourier 变换: 对任意给定的 $\varphi \in \mathcal{D}(\mathbb{R}^n)$, 那么 $\psi = \widehat{\varphi} \in \mathcal{S}(\mathbb{R}^n)$。从而,
$$\begin{aligned}
\langle \widehat{u * c}, \psi \rangle &= \langle u * c, \widehat{\psi} \rangle = \langle u * c, (2\pi)^n \check{\varphi} \rangle \\
&= \langle u, (2\pi)^n \check{c} * \check{\varphi} \rangle = \langle u, \widehat{\widehat c\,\widehat\varphi} \rangle = \langle\widehat u,\widehat c\,\widehat\varphi\rangle \\
&= \langle \widehat{u}, \widehat{c}\widehat{\varphi} \rangle = \langle \widehat{c} \cdot \widehat{u}, \psi \rangle.
\end{aligned}$$

利用 Fourier 变换的连续性, $\mathcal{D}(\mathbb{R}^n)$ 在 $\mathcal{S}(\mathbb{R}^n)$ 的稠密性意味着上述所有可能的 $\psi$ 在 $\mathcal{S}(\mathbb{R}^n)$ 中稠密, (通过逼近) 所以上面的等式就给出了定理完整证明。 $\square$

利用我们学过的知识, 我们可以给出 $\mathcal{E}'(\mathbb{R}^n)$ 的一个漂亮的刻画:

<span id="ma-theorem-471" class="lecture-anchor"></span>**定理 471** (有紧支集的分布的结构定理). 对任意的有紧支集的分布 $c \in \mathcal{E}'(\mathbb{R}^n)$, 存在有限多个多重指标 $\alpha_1, \cdots, \alpha_m$ 和有限多个有紧支集的连续函数 $f_{\alpha_1}(x), \cdots, f_{\alpha_m}(x)$, 使得
$$c = \sum_{k \leqslant m} \partial^{\alpha_k} f_{\alpha_k}(x).$$

**注记.** 一般不能再要求所有导数的阶数相同。例如 $c=\delta_0$：若共同阶数为正，有限个紧支集函数导数之和的积分为零；若共同阶数为零，该和又是连续函数，均不能等于 $\delta_0$。

**证明:** 我们选取截断函数 $\chi \in C_0^\infty(\mathbb{R}^n)$, 使得 $\chi$ 在 $\operatorname{supp}(c)$ 的一个开邻域恒为 $1$。那么, 我们有
$$\widehat{c}(\xi) = \left\langle c, e^{-ix \cdot \xi} \right\rangle = \left\langle c, \chi(x) e^{-ix \cdot \xi} \right\rangle.$$

由于 $c$ 的阶是有限的 (记作是 $p$), 所有存在常数 $C$, 使得
$$|\widehat{c}(\xi)| \leqslant C \sup_{|\alpha| \leqslant p} \left\| \partial^\alpha \left( \chi(x) e^{-ix \cdot \xi} \right) \right\|_{L_x^\infty} \leqslant C(1 + |\xi|)^p \sup_{|\beta|\leqslant p} \|\partial^\beta \chi\|_{L^\infty}.$$

所以, 只要选取 $N \geqslant p + n + 1$, 我们就有
$$F(\xi) = \frac{1}{(1 + |\xi|^2)^N} \widehat{c}(\xi) \in L^1(\mathbb{R}^n),$$

特别的, $\mathcal{F}^{-1} F \in C_\circ(\mathbb{R}^n)$ 是连续函数。通过导数与乘法在 Fourier 变换下的关系, 我们就得到
$$(1 - \Delta)^N \left( \mathcal{F}^{-1} F \right) = c.$$

从而,
$$\chi(x)(1 - \Delta)^N \left( \mathcal{F}^{-1} F \right) = c.$$

利用 $\chi \cdot \partial_j = \partial_j(\chi \cdot) - \partial_j \chi$, 我们可以把 $\chi$ (以及其导数) 的乘法全部放到求导数运算里面去, 这就给出了定理的证明。 $\square$

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：缓增分布的 Fourier 变换](67-tempered-fourier.md) · [下一篇：数学物理方程与 Sobolev 空间](69-sobolev-introduction.md)
