# 勘误：68 缓增分布的 Fourier 变换与卷积

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：68：缓增分布的 Fourier 变换与卷积](../../03-math-analysis-iii/68-fourier-convolution.md)

## 数学修正

**原文：**

> $\varphi \in \mathcal{D}'(\mathbb{R}^3)$

**修正：**

> $\varphi\in\mathcal D(\mathbb R^3)$

**理由：** 球面测度的配对输入必须为光滑测试函数，原图多prime写成一般分布，一般分布不能直接限制在球面并积分。

**原文：**

> $$\begin{aligned}
> \widehat{d\sigma_R}(0, 0, |\xi|) &= \langle d\sigma_R, e^{i(x,y,z)\cdot(0,0,|\xi|)} \rangle = \int_{0}^{2\pi} \left( \int_{0}^{\pi} e^{-i|\xi|R \cos\vartheta} R^2 \sin\vartheta d\vartheta \right) d\phi \\
> &= 2R^2\pi \int_{0}^{\pi} e^{-i|\xi|R \cos\vartheta} \sin\vartheta d\vartheta = 2R^2 \pi \frac{e^{-iR|\xi|t}}{-iR|\xi|} \bigg\vert_{-1}^{1}
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{d\sigma_R}(0, 0, |\xi|) &= \langle d\sigma_R, e^{-i(x,y,z)\cdot(0,0,|\xi|)} \rangle = \int_{0}^{2\pi} \left( \int_{0}^{\pi} e^{-i|\xi|R \cos\vartheta} R^2 \sin\vartheta d\vartheta \right) d\phi \\
> &= 2R^2\pi \int_{0}^{\pi} e^{-i|\xi|R \cos\vartheta} \sin\vartheta d\vartheta = 2R^2 \pi \frac{e^{-iR|\xi|t}}{-iR|\xi|} \bigg\vert_{-1}^{1}
> \end{aligned}$$

**理由：** 所用Fourier定义是负指数，原图第一配对写正而后续积分写负。即使球面偶性使结果相同，推导中的指数仍需一致。

**原文：**

> $$\frac{\widehat{d\sigma_R}}{4\pi R} = \frac{\sin(R|\xi|)}{|\xi|}.$$

**修正：**

> $$\frac{\widehat{d\sigma_R}}{4\pi R}=\frac{\sin(R|\xi|)}{|\xi|}.$$
> 其中右侧在 $\xi=0$ 处按连续延拓取值 $R$。

**理由：** 原商在零频率分母为零，必须用可去奇点值R延拓，才能给全频率上光滑的球面测度Fourier变换及hatσR(0)=4πR²。

[相关正文：68：缓增分布的 Fourier 变换与卷积](../../03-math-analysis-iii/68-fourier-convolution.md)

## 数学修正

**原文：**

> $$f_n = f \cdot 1_{|x|\leqslant n} \in L^1(\mathbb{R}^n) \cap L^2(\mathbb{R}^n),$$

**修正：**

> $$f_k=f\cdot\mathbf1_{|x|\leqslant k} \in L^1(\mathbb{R}^n) \cap L^2(\mathbb{R}^n),$$

**理由：** 本段以k≥1编号截断列，随后极限亦对k，原图定义行错用n。

**原文：**

> 其中 $\chi\vert_{\operatorname{supp}(u)} \equiv 1$

**修正：**

> 其中 $\chi$ 在 $\operatorname{supp}(u)$ 的一个开邻域中恒为 $1$

**理由：** 一般分布可能含δ的导数，仅在支集点集上χ=1不足以保证χu=u；必须在支集的邻域恒1才控制所有喷射。原图条件不足，后续配对用到该等式。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> f_n\xrightarrow{L^1}f
> ```

**正文：**

> $f \in L^2(\mathbb{R}^n)$

**理由：** 本段在L²中截断并作Fourier逼近，源图误写L¹收敛，Markdown已写对应L²收敛。

[相关正文：68：缓增分布的 Fourier 变换与卷积](../../03-math-analysis-iii/68-fourier-convolution.md)

## 数学修正

**原文：**

> 特别的, 它的支集不可能是紧集。

**修正：**

> 特别地，当 $u\ne0$ 时，$\widehat u$ 的支集不可能是紧集。

**理由：** 零分布的变换为零，支集为空紧集；解析函数的零点论证只有对非零u才排除紧支集，原图漏非零条件。

**原文：**

> $$\widehat{f * c}(\xi) = \widehat{f}(\xi) \widehat{c}(\xi), \quad \forall \xi \in \mathbb{R}^n.$$

**修正：**

> $$\widehat{\varphi*c}(\xi)=\widehat\varphi(\xi)\widehat c(\xi), \quad \forall \xi \in \mathbb{R}^n.$$

**理由：** 命题2量词给的是Schwartz函数φ，本式突然使用未定义f，统一公式的测试函数变量。

**原文：**

> $$(\varphi * c)(x) = \langle c(y), \varphi(y - x) \rangle.$$

**修正：**

> $$(\varphi * c)(x) = \langle c(y), \varphi(x-y) \rangle.$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> $$(x^\alpha \partial^\beta \varphi * c)(x) = \left\langle c(y), x^\alpha (\partial^\beta \varphi)(y - x) \right\rangle$$

**修正：**

> $$x^\alpha\partial^\beta(\varphi*c)(x) = \left\langle c(y), x^\alpha (\partial^\beta\varphi)(x-y) \right\rangle$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> $$\begin{aligned}
> |(x^\alpha \partial^\beta \varphi * c)(x)| &\leqslant C |x|^{|\alpha|} \sup_{|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta \varphi)(y - x) \right| \\
> &\leqslant C (|x - y| + |y|)^{|\alpha|} \sup_{|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta \varphi)(y - x) \right|.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> |x^\alpha\partial^\beta(\varphi*c)(x)| &\leqslant C |x|^{|\alpha|} \sup_{y\in K,\,|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right| \\
> &\leqslant C \sup_{y\in K,\,|\gamma|\leqslant q} (|x - y| + |y|)^{|\alpha|} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right|.
> \end{aligned}$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> $$\begin{aligned}
> |(x^\alpha \partial^\beta \varphi * c)(x)| &\leqslant C |x|^{|\alpha|} \sup_{|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta \varphi)(y - x) \right| \\
> &\leqslant C (|x - y| + |y|)^{|\alpha|} \sup_{|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta \varphi)(y - x) \right|.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> |x^\alpha\partial^\beta(\varphi*c)(x)| &\leqslant C |x|^{|\alpha|} \sup_{y\in K,\,|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right| \\
> &\leqslant C \sup_{y\in K,\,|\gamma|\leqslant q} (|x - y| + |y|)^{|\alpha|} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right|.
> \end{aligned}$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。 权重依赖同一个y，必须和导数的绝对值一起置于同一sup内，才能由有限阶估计及三角不等式推出，右侧不可留下自由y。

**原文：**

> $K = \operatorname{supp}(u))$; $u$ 是有限阶的的分布

**修正：**

> $K$ 为包含 $\operatorname{supp}(c)$ 的一个开邻域的紧集；$c$ 是有限阶的分布

**理由：** 本命题的紧支集分布为c，u未定义。取包含支集邻域的紧集后才能直接使用分布的有限阶半范数估计，原图还多一个右括号。

[相关正文：68：缓增分布的 Fourier 变换与卷积](../../03-math-analysis-iii/68-fourier-convolution.md)

## 数学修正

**原文：**

> $$|(x^\alpha \partial^\beta \varphi * c)(x)| \leqslant C (|x - y| + M)^{|\alpha|} \sup_{|\gamma|\leqslant q} \left| \partial_y^\gamma (\partial^\beta \varphi)(y - x) \right|.$$

**修正：**

> $$|x^\alpha\partial^\beta(\varphi*c)(x)| \leqslant C \sup_{y\in K,\,|\gamma|\leqslant q} (|x - y| + M)^{|\alpha|} \left| \partial_y^\gamma (\partial^\beta\varphi)(x-y) \right|.$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。 权重依赖同一个y，必须和导数的绝对值一起置于同一sup内，才能由有限阶估计及三角不等式推出，右侧不可留下自由y。

**原文：**

> $$\sup_{x \in \mathbb{R}^n} |(x^\alpha \partial^\beta \varphi * c)(x)| \leqslant C' N_{|\alpha|+|\beta|+q}(\varphi).$$

**修正：**

> $$\sup_{x \in \mathbb{R}^n} |x^\alpha\partial^\beta(\varphi*c)(x)| \leqslant C' N_{\max\{|\alpha|,|\beta|+q\}}(\varphi).$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> $$\begin{aligned}
> \widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(y - x) \rangle dx \\
> &= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(y - x) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(y - x) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \widehat{c}(\xi) \widehat{\varphi}(\xi).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(x-y) \rangle dx \\
> &= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \widehat{c}(\xi) \widehat{\varphi}(\xi).
> \end{aligned}$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> $$\begin{aligned}
> \widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(y - x) \rangle dx \\
> &= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(y - x) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(y - x) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \widehat{c}(\xi) \widehat{\varphi}(\xi).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(x-y) \rangle dx \\
> &= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \widehat{c}(\xi) \widehat{\varphi}(\xi).
> \end{aligned}$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> $$\begin{aligned}
> \widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(y - x) \rangle dx \\
> &= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(y - x) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(y - x) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \widehat{c}(\xi) \widehat{\varphi}(\xi).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{\varphi * c}(\xi) &= \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi * c(x) dx = \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \langle c(y), \varphi(x-y) \rangle dx \\
> &= \left\langle c(y), \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) \int_{\mathbb{R}^n} e^{-ix\cdot\xi} \varphi(x-y) dx \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \widehat{\varphi}(\xi) \right\rangle \\
> &= \left\langle c(y), \chi(y) e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \left\langle c(y), e^{-iy\cdot\xi} \right\rangle \widehat{\varphi}(\xi) \\
> &= \widehat{c}(\xi) \widehat{\varphi}(\xi).
> \end{aligned}$$

**理由：** 卷积应为<c(y),φ(x−y)>，原图y−x会得到反射函数；x^α权与x导数作用于卷积结果，不能写成先加权φ再卷积。分布有限阶估计中的y也须遍历固定紧集，不能留作自由变量。

**原文：**

> 使得 $\chi\vert_{\operatorname{supp}(c)} \equiv 1$

**修正：**

> 使得 $\chi$ 在 $\operatorname{supp}(c)$ 的一个开邻域恒为 $1$

**理由：** χc=c对含δ导数的分布要求χ在支集邻域恒1，仅在点集上值1不足，原图遗漏邻域条件。

**原文：**

> $\{\varphi_k\}_{k\geqslant 1} \in \mathcal{D}(\mathbb{R}^n)$

**修正：**

> $\{\varphi_k\}_{k\geqslant1}\subset\mathcal D(\mathbb R^n)$

**理由：** 函数列各项属于D，整个集合是D的子集，原图把子集关系写成元素关系。

**原文：**

> 因为 $\widehat{c}$ 是多项式增长的

**修正：**

> 因为 $\widehat c$ 及其各阶导数均为多项式增长的

**理由：** Schwartz乘法连续需要各阶导数多项式增长，仅函数本身多项式增长不足；compact分布变换的各阶导数等于x单项式乘c的变换，仍有该增长界。

**原文：**

> (实际上有衰减)

**修正：**

> （其各阶导数也为多项式增长）

**理由：** 紧支集分布的变换一般不衰减，例如δ0变换1、δ0′变换iξ。它及各阶导数为多项式增长才是乘任意缓增分布的正确条件。

[相关正文：68：缓增分布的 Fourier 变换与卷积](../../03-math-analysis-iii/68-fourier-convolution.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \langle \widehat{u * c}, \psi \rangle &= \langle u * c, \widehat{\psi} \rangle = \langle u * c, (2\pi)^n \check{\varphi} \rangle \\
> &= \langle u, (2\pi)^n \check{c} * \check{\varphi} \rangle = \langle u, \widehat{\widehat{c} * \varphi} \rangle = \langle \widehat{u}, \widehat{c} * \varphi \rangle \\
> &= \langle \widehat{u}, \widehat{c}\widehat{\varphi} \rangle = \langle \widehat{c} \cdot \widehat{u}, \psi \rangle.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle \widehat{u * c}, \psi \rangle &= \langle u * c, \widehat{\psi} \rangle = \langle u * c, (2\pi)^n \check{\varphi} \rangle \\
> &= \langle u, (2\pi)^n \check{c} * \check{\varphi} \rangle = \langle u, \widehat{\widehat c\,\widehat\varphi} \rangle = \langle\widehat u,\widehat c\,\widehat\varphi\rangle \\
> &= \langle \widehat{u}, \widehat{c}\widehat{\varphi} \rangle = \langle \widehat{c} \cdot \widehat{u}, \psi \rangle.
> \end{aligned}$$

**理由：** 上一项(2π)^n check c*checkφ等于F(hat c·hatφ)，并非F(hat c*φ)。原图把频率乘法与卷积混淆，且漏φ上的Fourier帽。

**原文：**

> $$\begin{aligned}
> \langle \widehat{u * c}, \psi \rangle &= \langle u * c, \widehat{\psi} \rangle = \langle u * c, (2\pi)^n \check{\varphi} \rangle \\
> &= \langle u, (2\pi)^n \check{c} * \check{\varphi} \rangle = \langle u, \widehat{\widehat{c} * \varphi} \rangle = \langle \widehat{u}, \widehat{c} * \varphi \rangle \\
> &= \langle \widehat{u}, \widehat{c}\widehat{\varphi} \rangle = \langle \widehat{c} \cdot \widehat{u}, \psi \rangle.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle \widehat{u * c}, \psi \rangle &= \langle u * c, \widehat{\psi} \rangle = \langle u * c, (2\pi)^n \check{\varphi} \rangle \\
> &= \langle u, (2\pi)^n \check{c} * \check{\varphi} \rangle = \langle u, \widehat{\widehat c\,\widehat\varphi} \rangle = \langle\widehat u,\widehat c\,\widehat\varphi\rangle \\
> &= \langle \widehat{u}, \widehat{c}\widehat{\varphi} \rangle = \langle \widehat{c} \cdot \widehat{u}, \psi \rangle.
> \end{aligned}$$

**理由：** 配对转移Fourier变换后应为hat c·hatφ，才能在ψ=hatφ时得到hat c乘hat u；原图仍错写卷积。

**原文：**

> 我们甚至可以进一步要求 $|\alpha_1| = |\alpha_2| = \cdots = |\alpha_m|$。

**修正：**

> 一般不能再要求所有导数的阶数相同。例如 $c=\delta_0$：若共同阶数为正，有限个紧支集函数导数之和的积分为零；若共同阶数为零，该和又是连续函数，均不能等于 $\delta_0$。

**理由：** 原注记对δ0直接不成立。所有正阶紧支集函数导数作用于支集邻域恒1的测试函数均为0，而δ0为1；零阶有限和连续也不是δ0。明确反例修正错误断言。

**原文：**

> 使得 $\chi|_{\operatorname{supp}(c)} \equiv 1$

**修正：**

> 使得 $\chi$ 在 $\operatorname{supp}(c)$ 的一个开邻域恒为 $1$

**理由：** 结构定理使用χc=c，须保证所有支集喷射，原图条件仅支集上值1不足以乘分布。

**原文：**

> $$|\widehat{c}(\xi)| \leqslant C \sup_{|\alpha| \leqslant p} \left\| \partial^\alpha \left( \chi(x) e^{-ix \cdot \xi} \right) \right\|_{L_x^\infty} \leqslant C(1 + |\xi|)^p \sup_{|\beta| \leqslant |\alpha|} \|\partial^\beta \chi\|_{L^\infty}.$$

**修正：**

> $$|\widehat{c}(\xi)| \leqslant C \sup_{|\alpha| \leqslant p} \left\| \partial^\alpha \left( \chi(x) e^{-ix \cdot \xi} \right) \right\|_{L_x^\infty} \leqslant C(1 + |\xi|)^p \sup_{|\beta|\leqslant p} \|\partial^\beta \chi\|_{L^\infty}.$$

**理由：** 外层supα已结束，右式不能再有自由α。χ的导数最多p阶，原图上界仍误用α。
