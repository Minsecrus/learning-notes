# 69 数学物理方程与 Sobolev 空间

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：缓增分布的 Fourier 变换与卷积](68-fourier-convolution.md) · [下一篇：Sobolev 空间性质与嵌入定理](70-sobolev-embedding/70-01-p0830-0836.md)

<!-- source: PDF 824; printed: 824; transcription: first-pass; proofreading: applied -->

## 69 分布理论与 Fourier 变换在数学物理方程上的应用：求波动方程与热方程的基本解。Sobolev 空间的定义，Sobolev 空间的映射性质。


我们现在考虑函数 $\varphi \in \mathcal{S}(\mathbb{R}^m \times \mathbb{R}^n)$，其中，我们用 $t \in \mathbb{R}^m$ 表示前面的 $m$ 个变量，$x \in \mathbb{R}^n$ 表示后面的 $n$ 个变量，我们可以考虑只对后面 $n$ 个变量的 Fourier 变换：

$$
\mathcal{F}_{x \to \xi}(\varphi)(t, \xi) = \int_{\mathbb{R}^n} e^{-ix \cdot \xi} \varphi(t, x) dx.
$$

有时候，为了方便起见，我们把这个变换记做 $\widetilde{\varphi}(t, \xi)$ 或者干脆记做 $\widehat{\varphi}(t, \xi)$。我们在不同的场合总会指出具体对哪些变量做 Fourier 变换。类似地，我们可以定义对后面 $n$ 个变量的 Fourier 逆变换：

$$
\mathcal{F}_{\xi \to x}^{-1}(\psi(t, \xi))(t, x) = \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} e^{ix \cdot \xi} \psi(t, \xi) d\xi.
$$

我们注意到 $\mathcal{F}_{x \to \xi}$ 把 $\mathbb{R}^m \times \mathbb{R}^n$ 上的 Schwartz 函数映射成为 $\mathbb{R}^m \times \mathbb{R}^n$ 上的 Schwartz 函数，即

$$
\mathcal{F}_{x \to \xi} : \mathcal{S}(\mathbb{R}^m_t \times \mathbb{R}^n_x) \to \mathcal{S}(\mathbb{R}^m_t \times \mathbb{R}^n_x).
$$

这是一个连续的线性同构，证明和之前关于 Fourier 变换的证明是一致的，我们留作作业来验证。

根据 $\mathcal{F}_{x \to \xi}$ 在 Schwartz 函数上的作用，我们就可以定义它在缓增分布上的作用：

$$
\mathcal{F}_{x \to \xi} : \mathcal{S}'(\mathbb{R}^m_t \times \mathbb{R}^n_x) \to \mathcal{S}'(\mathbb{R}^m_t \times \mathbb{R}^n_x), \quad u \mapsto \mathcal{F}_{x \to \xi}(u),
$$

其中，对于任意的 $\varphi \in \mathcal{S}(\mathbb{R}^m \times \mathbb{R}^n)$，我们有

$$
\langle \mathcal{F}_{x \to \xi}(u), \varphi \rangle = \langle u, \mathcal{F}_{x \to \xi}(\varphi) \rangle.
$$

我们同样可以证明，这是一个连续的线性同构。

**例子.** 考虑 $\delta_{0,0} \in \mathcal{S}'(\mathbb{R}^m_t \times \mathbb{R}^n_x)$。按照定义，我们有

$$
\begin{aligned}
\langle \mathcal{F}_{x \to \xi}(\delta_{0,0}), \varphi \rangle &=\langle\delta_{0,0},\int_{\mathbb R^n} e^{-ix \cdot \xi} \varphi(t, x) dx \rangle = \left. \int_{\mathbb{R}^n} e^{-ix \cdot \xi} \varphi(t, x) dx \right|_{(t, \xi)=(0,0)} \\
&= \int_{\mathbb{R}^n} \varphi(0, x) dx = \int_{\mathbb{R}^n} \langle \delta_{t=0}, \varphi(t, x) \rangle dx.
\end{aligned}
$$

利用我们在第三次作业中定义的张量积，我们就有

$$
\mathcal{F}_{x \to \xi}(\delta_{0,0})(t, \xi) = \delta_{t=0} \otimes 1_\xi.
$$

<!-- source: PDF 825; printed: 825; transcription: first-pass; proofreading: applied -->

### 热核的推导

我们已经证明过：定义在 $\mathbb{R} \times \mathbb{R}^n$ 上的热算子 $\partial_t - \Delta$ 以如下的热核函数作为其基本解：

$$
E(t, x) = \frac{H(t)}{(4\pi t)^{\frac{n}{2}}} e^{-\frac{|x|^2}{4t}}.
$$

然而，之前只是被动地验证了这个事实，我们现在给出它的推导。

我们要解如下的方程：

$$
(\partial_t - \Delta) E = \delta_{0,0}.
$$

我们做如下的预设：$E \in \mathcal{S}'(\mathbb{R} \times \mathbb{R}^n)$。对上面方程的 $x$ 变量做 Fourier 变换（仍然用 $\widehat{\quad}$ 来表示），我们就有

$$
(\partial_t + |\xi|^2) \widehat{E}(t, \xi) = \delta_{t=0} \otimes 1_\xi.
$$

我们要解上面这个常微分方程。注意到，右边分布的支集在 $\{(t, \xi) \mid t = 0\}$ 这个超平面上，所以，在 $t = 0$ 之外，对于每个固定的 $\xi \in \mathbb{R}^n$，这个常微分方程的通解形如

$$
c(\xi)e^{-t|\xi|^2}.
$$

为了在 $t = 0$ 处得到关于 $t$ 的 Dirac 分布，我们很容易猜测

$$
c(\xi)e^{-t|\xi|^2} H(t)
$$

满足要求。现在计算热算子在这个分布上的作用：

$$
(\partial_t + |\xi|^2) \left( c(\xi) e^{-t|\xi|^2} H(t) \right) = c(\xi) e^{-t|\xi|^2} \delta_{t=0} = \delta_{t=0} \otimes c(\xi).
$$

我们只要取 $c(\xi) \equiv 1$ 即可。综上所述，我们就有

$$
\widehat{E}(t, \xi) = e^{-t|\xi|^2} H(t).
$$

对 $\xi$ 做 Fourier 逆变换，（根据我们已有的计算）我们得到

$$
E(t, x) = \frac{H(t)}{(4\pi t)^{\frac{n}{2}}} e^{-\frac{|x|^2}{4t}}.
$$

### $\mathbb{R}^n$ 中波动方程基本解的推导

我们考虑定义在 $\mathbb{R}^{1+n} = \mathbb{R} \times \mathbb{R}^n$ 上的算子波动算子 $\square = -\partial_t^2 + \Delta$，其中，第一个坐标是时间 $t$ 的坐标。波动算子作用在以 $(t, x) \in \mathbb{R} \times \mathbb{R}^n$ 为变量函数上的。我们仍然预设我们要找的基本解 $W \in \mathcal{S}'(\mathbb{R} \times \mathbb{R}^n)$，所以，

$$
\square W = \delta_{0,0} \quad \Leftrightarrow \quad -(\partial_t^2 + |\xi|^2) \widehat{W}(t, \xi) = \delta_{t=0} \otimes 1_\xi.
$$

这是一个二阶的线性常微分方程，与热核的情况相似，在 $t = 0$ 之外，对于每个固定的 $\xi \in \mathbb{R}^n$，它的通解形如

$$
a(\xi) \cos(t|\xi|) + b(\xi) \sin(t|\xi|).
$$

<!-- source: PDF 826; printed: 826; transcription: first-pass; proofreading: applied -->

在 $n = 3$ 的时，我们寻找的基本解满足“在过去为零”的要求（这是物理上因果性的要求），与热方程的情况比较，我们对 $\widehat{W}(t, \xi)$ 的形状先做出如下的猜测：

$$
\widehat{W}(t, \xi) = H(t) (a(\xi) \cos(t|\xi|) + b(\xi) \sin(t|\xi|)).
$$

所以，

$$
\begin{aligned}
\partial_t \left( \widehat{W}(t, \xi) \right) &= H(t) (-a(\xi)|\xi| \sin(t|\xi|) + b(\xi)|\xi| \cos(t|\xi|)) + \delta_{t=0} (a(\xi) \cos(t|\xi|) + b(\xi) \sin(t|\xi|)) \\
&= H(t) (-a(\xi)|\xi| \sin(t|\xi|) + b(\xi)|\xi| \cos(t|\xi|)) + \delta_{t=0} \otimes a(\xi).
\end{aligned}
$$

当然，如果我们再对这个式子求导数，最后一项可能会贡献出 $\delta'_{t=0}$，这不会满足基本解的公式，所以，我们假设 $a(\xi) \equiv 0$。据此，我们有

$$
\widehat{W}(t, \xi) = H(t) b(\xi) \sin(t|\xi|),
$$

$$
\partial_t \left( \widehat{W}(t, \xi) \right) = H(t) b(\xi) |\xi| \cos(t|\xi|).
$$

从而，

$$
\left(\partial_t^2+|\xi|^2\right)\widehat{W}(t,\xi) = \delta_{t=0} \cdot b(\xi) |\xi| \cos(t|\xi|).
$$

据此，我们令

$$
\widehat{W}(t, \xi) = -H(t) \frac{\sin(t|\xi|)}{|\xi|}.
$$

在 $n = 3$ 的情形，我们已经证明了

$$
\frac{\widehat{d\sigma_{S_R}}}{4\pi R} = \frac{\sin(R|\xi|)}{|\xi|}.
$$

所以，当 $n = 3$ 时，我们有

$$
\widehat{W}(t, \xi) = -H(t) \frac{\widehat{d\sigma_{S_t^2}}}{4\pi t}.
$$

最后，我们可以和之前已经给出的基本解做比较：

$$
W = -\frac{d\sigma}{4\pi \sqrt{t^2 + |x|^2}},
$$

其中，$d\sigma$ 是正向光锥的测度。这两个计算是一致的。

### 分布理论与 Fourier 变换的应用：Sobolev 空间及应用

在后面的课程中，我们会经常用所谓的 **Planchrel 公式**：对任意的 $f \in L^2(\mathbb{R}^n)$，我们有

$$
\|\widehat{f}\|_{L^2}^2 = (2\pi)^n \|f\|_{L^2}^2 \quad \Leftrightarrow \quad \int_{\mathbb{R}^n} |f(x)|^2 dx = \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} |\widehat{f}(\xi)|^2 d\xi.
$$

它的另外一个版本是说对任意的 $f, g \in L^2(\mathbb{R}^n)$，我们有

$$
(\widehat{f}, \widehat{g})_{L^2} = (2\pi)^n (f, g)_{L^2} \quad \Leftrightarrow \quad \int_{\mathbb{R}^n} f(x) \overline{g(x)} dx = \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{g}(\xi)} d\xi.
$$

这个公式我们之前已经证明过。

我们现在引入 $\mathbb{R}^n$ 上的 Sobolev 空间的定义。

<!-- source: PDF 827; printed: 827; transcription: first-pass; proofreading: applied -->

<span id="ma-definition-472" class="lecture-anchor"></span>**定义 472.** 给定 $s \in \mathbb{R}$，我们将把这个数称为是 Sobolev 空间的指标。我们考虑满足如下性质的缓增分布 $u \in \mathcal{S}'(\mathbb{R}^n)$：

1) $\widehat{u} \in L^1_{\mathrm{loc}}(\mathbb{R}^n)$ 是局部可积的函数；

2) $(1 + |\xi|^2)^{\frac{s}{2}} \widehat{u}(\xi)$ 是平方可积的函数。

对于这样的函数，我们定义其 Sobolev 范数为：

$$
\|u\|_{H^s} = \left( \int_{\mathbb{R}^n} (1 + |\xi|^2)^s |\widehat{u}(\xi)|^2 d\xi \right)^{\frac{1}{2}}.
$$

我们把所有满足上述条件的缓增分布的集合称作是一个指标为 $s$ 的 Sobolev 空间，这显然是一个复线性空间，我们用 $H^s(\mathbb{R}^n)$ 来表示。

在 $H^s(\mathbb{R}^n)$ 上所赋予的范数与下面的内积是相容的：对任意的 $u, v \in H^s(\mathbb{R}^n)$，令

$$
(u, v)_{H^s} = \int_{\mathbb{R}^n} (1 + |\xi|^2)^s \widehat{u}(\xi) \overline{\widehat{v}(\xi)} d\xi.
$$

所以，$(H^s(\mathbb{R}^n), (\cdot, \cdot)_{H^s})$ 是内积空间。

我们注意到，当 $s = 0$ 时，我们 $H^0(\mathbb{R}^n)$ 实际上就是 $L^2(\mathbb{R}^n)$，这由 Planchrel 公式立即就可以得到：

$$
u \in L^2(\mathbb{R}^n) \quad \Leftrightarrow \quad \widehat{u} \in L^2(\mathbb{R}^n).
$$

所以，

$$
H^0(\mathbb{R}^n) = L^2(\mathbb{R}^n).
$$

类似的，如果我们在频率空间 $\mathbb{R}^n_\xi$ 上考虑测度

$$
\mu_s = (1 + |\xi|^2)^s d\xi.
$$

那么，$u \in H^s(\mathbb{R}^n)$ 当且仅当 $\widehat{u} \in L^2(\mathbb{R}^n, d\mu_s)$。利用这个观察，我们现在证明：

<span id="ma-theorem-473" class="lecture-anchor"></span>**定理 473.** 对任意的 $s \in \mathbb{R}$，$(H^s(\mathbb{R}^n), (\cdot, \cdot)_{H^s})$ 是 Hilbert 空间（即完备的内积空间）。

**证明:** 假设 $\{u_k\}_{k \geqslant 1} \subset H^s(\mathbb{R}^n)$ 是 Cauchy 列，那么，根据定义，$\{\widehat{u}_k\}_{k \geqslant 1} \subset L^2(\mathbb{R}^n, d\mu_s)$ 是 Cauchy 列。利用 $L^2$-空间的完备性，存在 $v(\xi) \in L^2(\mathbb{R}^n, d\mu_s)$ 作为上述序列的极限。我们用 $u(x) \in \mathcal{S}'(\mathbb{R}^n)$ 表示它的 Fourier 逆变换，即

$$
\widehat{u} = v.
$$

那么，

$$
\lim_{k \to \infty} \|\widehat{u}_k - \widehat{u}\|_{L^2(\mathbb{R}^n, d\mu_s)}^2 = 0 \quad \Leftrightarrow \quad \lim_{k \to \infty} \|u_k - u\|_{H^s(\mathbb{R}^n)}^2 = 0.
$$

这就证明了完备性。 $\square$

<!-- source: PDF 828; printed: 828; transcription: first-pass; proofreading: applied -->

根据 Sobolev 空间的定义, 我们知道 $\{H^s(\mathbb{R}^n)\}_{s\in\mathbb{R}}$ 构成了一个下降的链, 即对任意的 $s, s' \in \mathbb{R}$
$$
s \geqslant s' \implies H^s(\mathbb{R}^n) \subset H^{s'}(\mathbb{R}^n).
$$

我们观察到, Schwartz 函数生活在所有的 Sobolev 空间中:
$$
\mathcal{S}(\mathbb{R}^n) \subset \bigcap_{s\in\mathbb{R}} H^s(\mathbb{R}^n).
$$

为了说明这一点，令 $q=\max\{0,\lceil2s+n+1\rceil\}$。我们再次运用熟悉的估计技巧。对任意的 $\varphi \in \mathcal{S}(\mathbb{R}^n)$, 我们只要说明它的 $H^s$-范数是有界的即可:
$$
\begin{aligned}
\|\varphi\|_{H^s}^2 &= \int_{\mathbb{R}^n} \underbrace{(1+|\xi|^2)^{s+\frac{n+1}{2}} |\widehat{\varphi}|^2}_{\in L^\infty} \underbrace{(1+|\xi|^2)^{-\frac{n+1}{2}}}_{\in L^1} d\xi \\
&\leqslant C N_q(\widehat\varphi)^2 \int_{\mathbb{R}^n} (1+|\xi|^2)^{-\frac{n+1}{2}} d\xi \\
&\leqslant C' N_{q+n+1}(\varphi)^2.
\end{aligned}
$$

缓增分布

我们在之后会证明
$$
\mathcal E'(\mathbb R^n)\subset\varinjlim_{s\in\mathbb{R}} H^s(\mathbb{R}^n) = \bigcup_{s\in\mathbb{R}} H^s(\mathbb{R}^n).
$$

<span id="ma-proposition-474" class="lecture-anchor"></span>**命题 474** (正整数阶的 Sobolev 空间). 假设 $m \in \mathbb{Z}_{\geqslant 1}$ 为正整数, 那么, $H^m(\mathbb{R}^n)$ 有如下的等价刻画:
$$
H^m(\mathbb{R}^n) = \left\{ u\in\mathcal S'(\mathbb R^n) \;\middle|\; \text{对任意的多重指标 } \alpha, |\alpha| \leqslant m, \partial^\alpha u \in L^2(\mathbb{R}^n) \right\}.
$$

**证明:** 这个命题的证明基于如下的一个简单的观察: 给定正整数 $m$, 存在常数 $C_1$ 和 $C_2$, 使得对任意的 $\xi \neq 0$, 我们有
$$
C_1(1+|\xi|^2)^m \leqslant \sum_{|\alpha| \leqslant m} |\xi^\alpha|^2 \leqslant C_2(1+|\xi|^2)^m,
$$
其中 $|\xi^\alpha| = |\xi_1^{\alpha_1} \xi_2^{\alpha_2} \cdots \xi_n^{\alpha_n}|$。这个证明是初等的, 我们留作作业来验证。

所以, 在差一个常数的意义下, 我们就有
$$
\begin{aligned}
\int_{\mathbb{R}^n} (1+|\xi|^2)^m|\widehat u|^2 d\xi &\approx \sum_{|\alpha|\leqslant m} \int_{\mathbb{R}^n} |\xi^\alpha \widehat{u}|^2 d\xi \\
&\stackrel{\text{Planchrel}}{\approx} \sum_{|\alpha|\leqslant m} \int_{\mathbb{R}^n} |\partial^\alpha u|^2 dx.
\end{aligned}
$$

上式最后一个积分有限就等价于说对任意的多重指标 $\alpha$, 我们有 $\partial^\alpha u \in L^2(\mathbb{R}^n)$, 其中 $|\alpha| \leqslant m$, 这就证明了命题。 $\square$

<!-- source: PDF 829; printed: 829; transcription: first-pass; proofreading: applied -->

## Sobolev 空间的映射性质

为了研究 Sobolev 空间的映射性质, 我们先引入一类比微分算子更广的算子。首先, 我们回忆一下, 对于任意的缓增分布, 对任意的 $k \leqslant n$, 我们有
$$
\widehat{\frac{1}{i} \partial_k u}(\xi) = \xi_k \widehat{u}(\xi).
$$

我们定义算子
$$
D_k = \frac{1}{i} \partial_k = -i\partial_k, \quad k = 1, 2, \cdots, n.
$$

为了简单起见, 我们还把它写成
$$
D = \frac{1}{i} \partial.
$$

形式上, $D$ 对一个分布的作用在频率空间上来看就是乘以 $\xi$。

<span id="ma-definition-475" class="lecture-anchor"></span>**定义 475** (Fourier 乘子). 给定频率空间上的函数 $m(\xi)$, 我们假设它光滑，且每一阶导数均为多项式增长。对于任意的缓增分布 $u \in \mathcal{S}'(\mathbb{R}^n)$, 我们定义
$$
m(D)u = \mathcal{F}^{-1} (m(\xi) \widehat{u}(\xi)) \iff \widehat{m(D)u} = m(\xi) \widehat{u}(\xi).
$$

由于 $m(\xi)$ 光滑且各阶导数均为多项式增长, 所以, $m(\xi) \widehat{u}(\xi)$ 仍然是缓增分布, 所以, 如下的算子是良好定义的:
$$
m(D) : \mathcal{S}'(\mathbb{R}^n) \to \mathcal{S}'(\mathbb{R}^n).
$$

**例子.** 我们先看几个简单的例子:

1) 当 $m(\xi) = \xi_k$ 时, 其中 $k = 1, 2, \cdots, n$, 我们有
$$
m(D) = \frac{1}{i} \partial_k = D_k.
$$

2) 当 $m(\xi) = |\xi|^2$ 时, 我们有
$$
m(D) = -\Delta.
$$

3) 给定常系数线性微分算子
$$
P = \sum_{|\alpha| \leqslant m} a_\alpha \partial^\alpha,
$$
它可以被视作是一个 Fourier 乘子 $m(D)$, 其中
$$
m(\xi) = \sum_{|\alpha| \leqslant m} i^{|\alpha|} a_\alpha \xi^\alpha,
$$

4) 算子 $(1 - \Delta)^s$ 表示的是函数 $(1+|\xi|^2)^s$ 所对应的 Fourier 乘子。

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：缓增分布的 Fourier 变换与卷积](68-fourier-convolution.md) · [下一篇：Sobolev 空间性质与嵌入定理](70-sobolev-embedding/70-01-p0830-0836.md)
