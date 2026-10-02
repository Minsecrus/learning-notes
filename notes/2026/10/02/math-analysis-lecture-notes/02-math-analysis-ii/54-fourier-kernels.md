# 54：光滑性、Dirichlet 核与 Fejer 核

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../02-math-analysis-ii.md) · [校勘记录](../errata.md) · [上一篇：53.2：习题课：Riemann积分的定义3](53-fourier-l2/53-04-p0644-0646.md) · [下一篇：Fourier 级数的收敛理论](55-fourier-convergence/55-01-p0660-0666.md)

<!-- source: PDF 647; printed: 647; transcription: first-pass; proofreading: applied -->



## 光滑性与傅里叶系数的衰减

我们现在学习一个从频率的观点看函数的重要的例子：

<span id="ma-theorem-359" class="lecture-anchor"></span>**定理 359**。给定 $\mathbf{T}$ 上定义可积函数 $f$。如下两个叙述是等价的：

1) $f$ 几乎处处等于某个光滑函数，即其 $L^1$ 等价类有 $C^\infty(\mathbf T)$ 代表；

2) $\widehat{f}(k)$ 具有任意可能的多项式衰减，即对任意的 $N \ge 0$，总存在常数 $C_N$，使得对任意的 $k \in \mathbb{Z}$，我们有
$$
|\widehat{f}(k)| \le \frac{C_N}{(1 + |k|)^N}.
$$

**注记**。函数 Fourier 系数的衰减速度决定了函数的光滑性，反之亦然。换句话说，频率空间的衰减等价于物理空间的光滑性。这是学习 Fourier 分析必须要记住的原则之一。

**证明：** 我们先证明 1) $\Rightarrow$ 2)。不妨假设 $k \neq 0$，证明的关键就是利用光滑性，我们可以连续做多次分部积分并且分部积分得到的在端点 $0$ 和 $2\pi$ 处的值会相互抵消（利用周期性）：
$$
\begin{aligned}
\widehat{f}(k) &= \frac{1}{2\pi} \int_0^{2\pi} f(x) e^{-ikx} dx \\
&= \frac{1}{2\pi} \frac{1}{(-ik)} \int_0^{2\pi} f(x) \left( e^{-ikx} \right)' dx \\
&= \frac{1}{2\pi} \frac{1}{ik} \int_0^{2\pi} f(x)' e^{-ikx} dx \\
&\quad \dots \dots \\
&= \frac{1}{2\pi} \frac{1}{(ik)^N} \int_0^{2\pi} f^{(N)}(x) e^{-ikx} dx.
\end{aligned}
$$

所以，
$$
|\widehat{f}(k)| \le \frac{1}{2\pi} \frac{1}{|k|^N} \int_0^{2\pi} |f^{(N)}(x)| dx \le \frac{\|f^{(N)}\|_{L^\infty}}{|k|^N}.
$$

证明 2) $\Rightarrow$ 1) 的方法是使用 Lebesgue 控制收敛定理或者上学期证明的关于求导和求和可交换的命题。首先，根据条件 2)（选 $N = 2$ 即可），我们知道 $\sum_{k \in \mathbb{Z}} |\widehat{f}(k)|$ 是绝对收敛的，所以该 Fourier 级数一致收敛，定义连续函数
$$
g(x)=\sum_{k\in\mathbb Z}\widehat f(k)e^{ikx}.
$$
逐项积分可知 $g$ 与 $f$ 的 Fourier 系数相同。由三角多项式在 $C(\mathbf T)$ 中的一致稠密性，$f-g$ 对所有连续测试函数的积分为零，故 $f=g$ 几乎处处。以下用此连续代表记作 $f$。另外，利用 $N = 3$，我们知道函数项级数
$$
\sum_{k \in \mathbb{Z}} \left( \widehat{f}(k) e^{ikx} \right)' = \sum_{k \in \mathbb{Z}} ik \widehat{f}(k) e^{ikx}
$$

<!-- source: PDF 648; printed: 648; transcription: first-pass; proofreading: applied -->

是绝对收敛的，因为
$$
\sum_{k \in \mathbb{Z}} |ik \widehat{f}(k)| \le \sum_{k \in \mathbb{Z}} \frac{C_3 |k|}{(1 + |k|)^3} < \infty.
$$

根据 Lebesgue 控制收敛的第二个推论，我们有
$$
f(x)' = \left( \sum_{k \in \mathbb{Z}} \widehat{f}(k) e^{ikx} \right)' = \underbrace{\sum_{k \in \mathbb{Z}} ik \widehat{f}(k) e^{ikx}}_{\text{绝对收敛, 所以是连续函数}}.
$$

所以，$f \in C^1(\mathbf{T})$。我们可以继续这个过程，从而证明对任意的 $l \in \mathbb{Z}_{\ge 1}$，$f \in C^l(\mathbf{T})$。 $\hfill \square$

**注记**。从证明中可见，对函数光滑 $f$ 求导数等价于对每个频率 $k$ 的 Fourier 系数乘以 $ik$。把这个现象和线性代数联系起来是很有启发性的：我们考虑线性空间 $L^2(\mathbf{T})$，那么，
$$
\frac{d}{dx} : L^2(\mathbf{T}) \to L^2(\mathbf{T})
$$
是线性算子（当然，你可以会关心 $\frac{d}{dx}$ 是否是良好定义的，让我们假设这个成立（其实不成立））。我们现在考虑测度空间 $(\mathbb{Z}, \mathcal{P}(\mathbb{Z}), \mu)$，其中，$\mu$ 就是数元素个数的测度，我们令 $\ell^2(\mathbb{Z}) = L^2(\mathbb{Z}, \mathcal{P}(\mathbb{Z}), \mu)$。那么，根据关于 $L^2$ 空间上的 Fourier 级数的基本定理，我们得到了（连续的）映射（同构）：
$$
\mathcal{F} : L^2(\mathbf{T}) \to \ell^2(\mathbb{Z}), \quad f \mapsto \left(\widehat{f}(k)\right)_{k \in \mathbb{Z}}.
$$

我们把这个同构看做是在 $L^2(\mathbf{T})$ 选取了一个基。那么，上面求导可以用下面的交换图标来表达：
$$
\begin{array}{ccc}
L^2(\mathbf{T}) & \xrightarrow{\quad \frac{d}{dx} \quad} & L^2(\mathbf{T}) \\
\Big\downarrow \mathcal{F} & & \Big\downarrow \mathcal{F} \\
\ell^2(\mathbb{Z}) & \xrightarrow{\quad \times (ik) \quad} & \ell^2(\mathbb{Z})
\end{array}
,
$$

换句话说，换了这组基后，微分算子 $\frac{d}{dx}$ 被对角化了（变成了在每个分量上乘一个数），这把求微分的操作变成了代数操作。

仿照线性代数中对一个正定的矩阵可以定义它的开方的思路，我们对一个光滑函数的 Fourier 系数分别乘以 $|k|^{\frac{1}{2}}$，这可以定义求二分之一次导数。这实际上是所谓的拟微分算子的基本想法（如果下学期时间足够的话，我们会讲到）。

### 黎曼勒贝格引理

我们上学期已经证明如下的 Riemann-Lebesgue 引理，这个引理是 Fourier 分析中的核心定理：

<span id="ma-theorem-360" class="lecture-anchor"></span>**定理 360**（Riemann-Lebesgue）。对任意的 $f \in L^1(\mathbf{T})$，我们都有
$$
\lim_{|k| \to \infty} \widehat{f}(k) = 0.
$$

**证明：** 上面的定理表明，如果 $f \in C^\infty(\mathbf{T})$，那么命题成立，再利用光滑函数在 $L^1(\mathbf{T})$ 中稠密即可。我们不再重复证明的细节。 $\hfill \square$

<!-- source: PDF 649; printed: 649; transcription: first-pass; proofreading: applied -->

**注记**。实际上，我们可以证明，对任意的序列 $\{a_k\}_{k \in \mathbb{Z}}$，其中 $a_k \neq 0$，其中
$$
\lim_{k \to \infty} a_k = \infty,
$$
总存在某个可积函数 $f \in L^1(\mathbf{T})$，使得
$$
\lim_{k \to \infty} a_k |\widehat{f}(k)| = \infty.
$$
换句话说，一个 $L^1$ 函数的 Fourier 系数的衰减可以任意得慢。这个证明需要用到泛函分析中的 Banach-Steinhaus 定理，我们这里仅仅陈述结论而不给证明。（在本次的作业中，我们有一个较弱的版本，证明上面的极限对一个子序列是成立的）

**注记**。证明中分部积分的技巧实际上还证明了如下的结论：如果 $f \in C^m(\mathbf{T})$，其中 $m \ge 1$ 是正整数，那么存在常数 $C$，使得对任意的 $k \in \mathbb{Z}$，我们有
$$
|\widehat{f}(k)| \le \frac{C}{(1 + |k|)^m}.
$$
也就是说，每多一阶可微性，Fourier 系数的衰减也快一阶。

## Dirichlet 核和 Féjer 核

我们上周就提过：可以对 $\mathbf{T}$ 上的两个 $L^1$ 函数定义卷积：
$$
f * g : \mathbf{T} \to \mathbb{C}, \quad x \mapsto (f * g)(x) = \int_0^{2\pi} f(x - y)g(y) \frac{dy}{2\pi},
$$
与 $\mathbb{R}^n$ 上的证明完全一致，利用 Fubini 定理，我们有
$$
\|f * g\|_{L^1} \le \|f\|_{L^1} \|g\|_{L^1}.
$$

这表明，我们有如下的乘法结构
$$
L^1(\mathbf{T}) \times L^1(\mathbf{T}) \xrightarrow{\quad * \quad} L^1(\mathbf{T}).
$$

仍然根据 Fubini 定理，我们可以说明卷积满足交换律和结合律：

1) 对于几乎处处的 $x \in \mathbf{T}$，我们有 $(f * g)(x) = (g * f)(x)$。

2) 假设 $f, g, h \in L^1(\mathbf T)$，那么 $((f * g) * h)(x) = (f * (g * h))(x)$ 几乎处处成立。

类似地，我们可以证明：对于 $p = 1, 2$ 或者 $\infty$，有
$$
L^1(\mathbf{T}) \times L^p(\mathbf{T}) \xrightarrow{\quad * \quad} L^p(\mathbf{T}),
$$
即对任意的 $f \in L^1(\mathbf{T})$，$g \in L^p(\mathbf{T})$，函数
$$
(f * g)(x) = \int_{\mathbf{T}} f(x-y)g(y)\,d\mu(y)
$$

<!-- source: PDF 650; printed: 650; transcription: first-pass; proofreading: applied -->

在 $L^p(\mathbf T)$ 中是良好定义的（几乎处处）。特别地，我们还有如下的不等式：
$$
\|f * g\|_{L^p(\mathbf{T})} \le \|f\|_{L^1(\mathbf{T})} \|g\|_{L^p(\mathbf{T})}.
$$

卷积的定义不仅仅是概念上的推广，它有着很重要的实际意义。我们来看下面的例子：

**例子**。假设 $f \in L^1(\mathbf{T})$，考虑 Fourier 分析中最基本的函数
$$
e_k(x) = e^{ikx}.
$$

我们来计算 $f * e_k$：
$$
\begin{aligned}
(f * e_k)(x) &= \int_0^{2\pi} f(y) e^{ik(x-y)} \frac{dy}{2\pi} \\
&= e^{ikx} \int_0^{2\pi} f(y) e^{-iky} \frac{dy}{2\pi} \\
&= \widehat{f}(k)e^{ikx}.
\end{aligned}
$$

所以，与 $e^{ikx}$ 做卷积就给出了 $f$ 向 $e^{ikx}$ 这个方向上的投影。

特别地，我们在 Fourier 技术中感兴趣的部分和就有如下的表达式：
$$
S_N(f)(x) = \sum_{-N \le k \le N} \widehat{f}(k) e^{ikx} = f * \left( \sum_{-N \le k \le N} e_k \right).
$$

我们定义 **Dirichlet 核** $D_N(x)$ 如下，其中，$N \ge 0$ 是整数：
$$
\begin{aligned}
D_N(x) &= \sum_{-N \le k \le N} e_k = \frac{e^{i(N+1)x} - e^{-iNx}}{e^{ix} - 1} \\
&= \frac{e^{i(N+\frac{1}{2})x} - e^{-i(N+\frac{1}{2})x}}{e^{i\frac{x}{2}} - e^{-i\frac{x}{2}}} = \frac{\sin\left((N + \frac{1}{2})x\right)}{\sin\left(\frac{1}{2}x\right)}.
\end{aligned}
$$

所以，对于 $x \in \mathbb{R}$，我们定义 **Dirichlet 核** $D_N(x)$：
$$
D_N(x) = \begin{cases}
\dfrac{\sin\left((N+\frac{1}{2})x\right)}{\sin\left(\frac{1}{2}x\right)}, & x \neq 2k\pi; \\[1em]
2N + 1, & x = 2k\pi.
\end{cases}
$$

这也是定义在 $\mathbf{T}$ 上的函数。

我们就证明了下面的引理：

<span id="ma-lemma-361" class="lecture-anchor"></span>**引理 361**。对任意的 $f \in L^1(\mathbf{T})$，它的 Fourier 级数的部分和 $S_N(f)$ 可以表达为
$$
S_N(f)(x) = \sum_{-N \le k \le N} \widehat{f}(k) e^{ikx} = (f * D_N)(x).
$$

<!-- source: PDF 651; printed: 651; transcription: first-pass; proofreading: applied -->

在传统的 Fourier 分析中，我们还考虑一种被称作 Féjer 和的部分和。按照定义，它是部分和序列 $\{S_N\}_{N \geqslant 0}$ 的 Cesàro 求和（前 $n$ 项的平均值），即
$$
\sigma_N(f)(x) = \frac{S_0(x) + S_1(x) + \cdots + S_{N-1}(x)}{N}
$$
我们将会看到，Cesàro 求和会让 Fourier 级数的对连续周期函数一致收敛！

我们现在来计算 Féjer 核的公式。按照定义，我们有
$$
\sigma_N(f)(x) = \left( f * \frac{1}{N} \sum_{k=0}^{N-1} D_k \right)(x) = (f * F_N)(x).
$$
其中，Féjer 核 $F_N$ 被定义成
$$
F_N(x) = \frac1N\sum_{k=0}^{N-1} D_k.
$$
我们可以进一步计算 $F_N(x)$ 的解析表达式：
$$
\begin{aligned}
F_N(x) &= \frac{1}{N} \sum_{k=0}^{N-1} \frac{\sin\left( \left( k + \frac{1}{2} \right) x \right)}{\sin\left( \frac{1}{2} x \right)} = \frac{1}{N} \frac{1}{\sin\left( \frac{1}{2} x \right)} \sum_{k=0}^{N-1} \operatorname{Im}\left( e^{i \frac{1}{2} x} e^{ikx} \right) \\
&= \frac{1}{N} \frac{1}{\sin\left( \frac{1}{2} x \right)} \operatorname{Im}\left( e^{i \frac{1}{2} x} \frac{e^{iNx} - 1}{e^{ix} - 1} \right) \\
&= \frac{1}{N} \frac{1}{\sin\left( \frac{x}{2} \right)} \operatorname{Im}\left( e^{i \frac{Nx}{2}} \frac{e^{i \frac{Nx}{2}} - e^{-i \frac{Nx}{2}}}{e^{i \frac{x}{2}} - e^{-i \frac{x}{2}}} \right) \\
&= \frac{1}{N} \left( \frac{\sin\left( \frac{N}{2} x \right)}{\sin\left( \frac{x}{2} \right)} \right)^2
\end{aligned}
$$
所以，对于 $x \in \mathbb{R}$，我们定义如下的 Féjer 核：
$$
F_N(x) = \begin{cases}
\frac{1}{N} \left( \frac{\sin\left( \frac{N}{2} x \right)}{\sin\left( \frac{x}{2} \right)} \right)^2, & x \neq 2k\pi; \\
N, & x = 2k\pi.
\end{cases}
$$

**练习。** 证明，$F_N(x)$ 的积分是 $2\pi$：
$$
\int_0^{2\pi} F_N(x) \frac{dx}{2\pi} = 1.
$$
这是一个有趣的联系，最好的证明是观察到 $\int_{-\pi}^\pi D_N(x) \frac{dx}{2\pi} = 1$，这是因为（不要用解析表达式）$D_N = \sum_{-N \leqslant k \leqslant N} e_k$。

我们之前卷积的核函数是 $\chi_\varepsilon$，与之类似，我们的 Féjer 核 $F_N$ 满足下面的性质：

1) $F_N$ 是正的，即对任意的 $x \in \mathbb{R}$，我们有 $F_N(x) \geqslant 0$；

2) $F_N$ 是 $\mathbf{T}$ 上的概率密度，即
$$
\int_{-\pi}^\pi F_N(x) \frac{dx}{2\pi} = 1;
$$

<!-- source: PDF 652; printed: 652; transcription: first-pass; proofreading: applied -->

3) 把 $F_N$ 视作是 $[-\pi, \pi]$ 上的函数，那么，当 $N \to \infty$ 时，$F_N$ 集中在 $x = 0$ 附近，即对任意的 $\delta > 0$，当 $N \to \infty$ 时，我们有
$$
\int_{\delta \leqslant |x| \leqslant \pi} F_N(x) \frac{dx}{2\pi} \longrightarrow 0, \quad N \to \infty.
$$

证明是直截了当的：当 $|x| \in [\delta, \pi]$ 时，由于 $\left| \sin\left(\frac{x}{2}\right) \right| \geqslant \frac{|x|}{\pi}$，我们有
$$
|F_N(x)| \leqslant \frac{1}{N} \left( \frac{\pi}{\delta} \right)^2 \left( \sin\left( \frac{N}{2}x \right) \right)^2 \leqslant \frac{\pi^2}{N\delta^2}.
$$
所以，当 $N \to \infty$ 时，我们有
$$
\int_{\delta \leqslant |x| \leqslant \pi} F_N(x) \frac{dx}{2\pi} \leqslant \int_{\delta \leqslant |x| \leqslant \pi} \frac{\pi^2}{N\delta^2} \frac{dx}{2\pi} \longrightarrow 0.
$$

### 好的积分核与一致逼近

传统的 Fourier 分析把 $F_N$ 的性质提炼成所谓的好的积分核的性质：

<span id="ma-definition-362" class="lecture-anchor"></span>**定义 362。** 给定 $\mathbb{R}$ 上的一族以 $2\pi$ 为周期的连续函数 $\{K_N(x)\}_{N \geqslant 0}$，我们可以认为 $x \in \mathbf{T}$。假设它们满足下面的性质：

1) $K_N$ 在 $L^1(\mathbf{T})$ 中有界：存在常数 $M > 0$，使得对任意的 $N \geqslant 0$，都有
$$
\int_{-\pi}^\pi |K_N| \frac{dx}{2\pi} \leqslant M;
$$

2) $K_N$ 在 $\mathbf T$ 上积分归一化为 $1$，即
$$
\int_{-\pi}^\pi K_N(x) \frac{dx}{2\pi} = 1;
$$

3) 当 $N \to \infty$ 时，$\{K_N\}_{N \geqslant 0}$ 集中在 $x = 0$ 附近，即对任意的 $\delta > 0$，当 $N \to \infty$ 时，我们有
$$
\int_{\delta \leqslant |x| \leqslant \pi} |K_N(x)| \frac{dx}{2\pi} \longrightarrow 0.
$$
我就称 $\{K_N(x)\}$ 是 $\mathbf{T}$ 上一族好的积分核。

按照刚才的构造，Féjer 核 $\{F_N\}_{N \geqslant 1}$ 是一族好的积分核。

<span id="ma-theorem-363" class="lecture-anchor"></span>**定理 363。** 假设 $\{K_N(x)\}_{N \geqslant 1}$ 是一族好的积分核，那么对任意的 $f \in C^0(\mathbf{T})$，我们都有一致收敛：
$$
\lim_{N \to \infty} \|f * K_N - f\|_{L^\infty} = 0,
$$
其中
$$
f * K_N(x) = \int_{-\pi}^\pi f(x - y) K_N(y) \frac{dy}{2\pi}.
$$

<!-- source: PDF 653; printed: 653; transcription: first-pass; proofreading: applied -->

**证明：** 利用 $K_N$ 的积分为 $1$，我们有
$$
\begin{aligned}
|(f * K_N)(x) - f(x)| &= \left| \int_{-\pi}^\pi (f(x - y) - f(x)) K_N(y) \frac{dy}{2\pi} \right| \\
&\leqslant \underbrace{\left| \int_{|y| \leqslant \delta} (f(x - y) - f(x)) K_N(y) \frac{dy}{2\pi} \right|}_{A} \\
&\quad + \underbrace{\left| \int_{\delta \leqslant |y| \leqslant \pi} (f(x - y) - f(x)) K_N(y) \frac{dy}{2\pi} \right|}_{B}.
\end{aligned}
$$

由于 $f$ 在 $[0, 2\pi]$ 上面连续，所以一致连续性。从而，对任意的 $\varepsilon > 0$，存在 $\delta > 0$，当 $|y| < \delta$ 时，对任意的 $x$，我们都有 $|f(x - y) - f(x)| < \varepsilon$。所以，根据好的积分核的性质 1)，我们有
$$
A \leqslant \varepsilon \int_{|y| \leqslant \delta} |K_N(y)| \frac{dy}{2\pi} \leqslant \varepsilon M.
$$

对于 $B$，我们用好的积分核的性质 3)：
$$
B \leqslant 2\|f\|_{L^\infty} \int_{\delta \leqslant |y| \leqslant \pi} |K_N(y)| \frac{dy}{2\pi}.
$$

所以，存在 $N_0$ 依赖于 $\delta$ 从而依赖于 $\varepsilon$，使得当 $N \geqslant N_0$ 时，对任意的 $x \in \mathbf{T}$，我们有
$$
B \leqslant \varepsilon.
$$

综合上述，对任意的 $\varepsilon > 0$，存在 $N_0$，使得当 $N \geqslant N_0$ 时，对任意的 $x \in \mathbf{T}$，我们有
$$
|(f * K_N)(x) - f(x)| \leqslant (M + 1)\varepsilon.
$$

命题得到证明。 \hfill $\square$

<span id="ma-corollary-364" class="lecture-anchor"></span>**推论 364。** 对任意的 $f \in C^0(\mathbf{T})$，我们都有一致收敛
$$
\lim_{N \to \infty} \|f * F_N - f\|_{L^\infty} = 0.
$$

特别地，我们注意到
$$
F_N(x) = \frac{1}{N} \sum_{|k| \leqslant N} (N - |k|) e^{ikx},
$$
所以，
$$
\sigma_N(f)(x) = F_N * f(x) = \sum_{|k| \leqslant N} \left( 1 - \frac{|k|}{N} \right) \hat{f}(k) e^{ikx}.
$$
这是个有限的三角级数，它将一致收敛到 $f$，所以，我们实际上再次证明了周期连续函数情形下的 Stone-Weierstrass 定理。

<!-- source: PDF 654; printed: 654; transcription: first-pass; proofreading: applied -->

## Féjer 核的一个应用：$L^1$ 函数的原函数与 Fatou 的反例

根据 Riemann-Lebesgue 引理，$f \in L^1(\mathbf{T})$，那么 $\hat{f}(k) \to 0$。那么，是不是每个极限是 0 序列 $\{a_k\}_{k \in \mathbb{Z}}$，它必为某个可积函数的 Fourier 系数呢，即是否存在 $f \in L^1(\mathbf{T})$，使得对任意的 $k$，我们都有 $\hat{f}(k) = a_k$？

给定 $f \in L^1(\mathbf{T})$ 是周期函数，我们假设 $\hat{f}(0) = 0$。（$\hat{f}(0) = 0$ 等价于 $f$ 的积分为零）我们定义 $\mathbb{R}$ 上的函数：
$$
F : \mathbb{R} \to \mathbb{C}, \quad F(x) = \int_0^x f(t) dt.
$$

根据 $f$ 是可积的，$F(x)$ 是连续函数（比如，可以用 Lebesgue 控制收敛来证明）。由于 $f$ 在一个周期上的积分消失，所以 $F(x)$ 也是以 $2\pi$ 为周期的。我们可以计算 $F(x)$ 的 Fourier 系数：

<span id="ma-lemma-365" class="lecture-anchor"></span>**引理 365。** 给定 $f \in L^1(\mathbf{T})$，我们假设 $\hat{f}(0) = 0$。那么，以 $2\pi$ 为周期的连续函数 $F(x) = \int_0^x f(t) dt$ 的 Fourier 系数可以用 $f$ 的信息表示如下：
$$
\hat{F}(k) = \begin{cases}
-\int_0^{2\pi} x f(x) \frac{dx}{2\pi}, & k = 0; \\
\frac{1}{ik} \hat{f}(k), & k \neq 0.
\end{cases}
$$

**注记。** 如果 $f$ 是连续函数，那么 $F$ 是 $C^1$ 的，所以，$F' = f$。此时，由于求导在频率空间来看是乘以 $ik$，所以当 $k \neq 0$ 时，命题是显然的（可以直接分部积分）。

**证明：** 当 $k = 0$ 时，利用 Fubini 定理，我们有
$$
\begin{aligned}
\hat{F}(0) &= \int_0^{2\pi} \left( \int_0^x f(t) dt \right) \frac{dx}{2\pi} \\
&= \int_{[0, 2\pi]^2} f(t) 1_{t \leqslant x}(t, x) \frac{dx dt}{2\pi} \\
&= \frac{1}{2\pi} \int_0^{2\pi} \left( \int_t^{2\pi} f(t) dx \right) dt \\
&= \frac{1}{2\pi} \int_0^{2\pi} (2\pi - t) f(t) dt.
\end{aligned}
$$
由于 $\hat{f}(0) = 0$，所以
$$
\hat{F}(0) = -\int_0^{2\pi} x f(x) \frac{dx}{2\pi}.
$$

当 $k \neq 0$ 时，我们有
$$
\begin{aligned}
\hat{F}(k) &= \int_0^{2\pi} \left( \int_0^x f(t) dt \right) e^{-ikx} \frac{dx}{2\pi} \\
&= \frac{1}{2\pi} \int_0^{2\pi} \left( \int_t^{2\pi} e^{-ikx} f(t) dx \right) dt \\
&= \frac{1}{2\pi} \int_0^{2\pi} \frac{1}{-ik} \left( 1 - e^{-ikt} \right) f(t) dt \\
&= \frac{1}{ik} \hat{f}(k).
\end{aligned}
$$

<!-- source: PDF 655; printed: 655; transcription: first-pass; proofreading: applied -->

命题成立。 $\hfill\square$

在同样的假设下，由于 $F$ 是连续的，根据 Féjer 核的理论，当 $N \to \infty$ 时，$F_N * F$ 一致收敛到 $F$。另外，由于
$$F_N * F(x) = \sum_{|k|\leqslant N} \left(1 - \frac{|k|}{N}\right) \widehat{F}(k) e^{ikx},$$

所以，在 $x = 0$ 处，我们有
$$
\begin{aligned}
F_N * F(0) &= \sum_{|k|\leqslant N} \left(1 - \frac{|k|}{N}\right) \widehat{F}(k) \\
&= -\frac{1}{2\pi} \int_0^{2\pi} x f(x) dx + \sum_{1\leqslant |k|\leqslant N} \left(1 - \frac{|k|}{N}\right) \frac{1}{ik} \widehat{f}(k) \\
&= -\frac{1}{2\pi} \int_0^{2\pi} x f(x) dx - i \sum_{1\leqslant |k|\leqslant N} \frac{\widehat{f}(k)}{k} + \underbrace{\frac{i}{N} \sum_{1\leqslant k\leqslant N} \widehat{f}(k)}_{A_N} - \underbrace{\frac{i}{N} \sum_{-N\leqslant k\leqslant -1} \widehat{f}(k)}_{B_N}.
\end{aligned}
$$

根据 Riemann-Lebesgue 引理，我们知道 $\lim_{k\to\infty} \widehat{f}(k) = 0$，所以，$\lim_{N\to\infty} A_N = 0$（这是第一学期关于数列极限的标准习题：如果一个数列的极限是 $0$，那么它所对应的 Cesàro 和（前 $n$ 项的平均）的极限也是 $0$）；类似地，$\lim_{N\to\infty} B_N = 0$。由于 $F(0) = 0$，所以，当 $N \to \infty$ 时，上面的等式给出了
$$\lim_{N\to\infty} \left( \sum_{1\leqslant |k|\leqslant N} \frac{\widehat{f}(k)}{k} \right) = \frac{i}{2\pi} \int_0^{2\pi} x f(x) dx.$$

特别地，这表明对于一个 $L^1$ 函数的 Fourier 系数，数列 $\left\{ \frac{\widehat{f}(k)}{k} \right\}_{k\in\mathbb{Z}\setminus\{0\}}$ 具有一定的“可求和性”。Fatou 根据这个性质构造了如下的反例：

<span id="ma-proposition-366" class="lecture-anchor"></span>**命题 366**（Fatou）。对于如下定义的数列 $\{a_k\}_{k\in\mathbb Z}$，其中
$$a_k = \begin{cases} 0, & |k| \leqslant 1; \\ \frac{1}{2i \log k}, & k \geqslant 2; \\ \frac{-1}{2i \log |k|}, & k \leqslant -2. \end{cases}$$
不存在 $f \in L^1(\mathbb{T})$，使得对任意的 $k \in \mathbb{Z}$，$\widehat{f}(k) = a_k$。

**证明**：我们用反证法：如果不然，那么，$f$ 的 Fourier 级数的部分和为
$$S_N(f)(x) = \sum_{|k|\leqslant N} a_k e^{ikx} \left( = \sum_{2\leqslant k\leqslant N} \frac{\sin(kx)}{\log k} \right).$$

<!-- source: PDF 656; printed: 656; transcription: first-pass; proofreading: applied -->

上面的计算表明，$\left\{ \sum_{1\leqslant |k|\leqslant N} \frac{a_k}{k} \right\}_{N\geqslant 1}$ 是有极限的，然而，根据 $a_k$ 的定义，我们有
$$\sum_{1\leqslant |k|\leqslant N} \frac{a_k}{k} = \frac{1}{i} \sum_{2\leqslant k\leqslant N} \frac{1}{k \log k}.$$
我们可以用上学期最后学习的面积方法来用 $1/(x\log x)$ 的积分估计上面求和的大小，这表明
$$\sum_{2\leqslant k\leqslant N} \frac{1}{k \log k} \sim \log \log N \to \infty.$$
然而，上面的求和应该收敛到 $\frac{i}{2\pi} \int_0^{2\pi} x f(x) dx$，矛盾。 $\hfill\square$

尽管 Féjer 核的理论更简洁，我们却更想知道是否 $S_N(f)$ 能够足够好地逼近 $f$，因为这是最自然的部分和。这使得我们要研究 Dirichlet 核函数 $D_N$ 的性质。实际上，尽管 $D_N(x)$ 的积分是 $1$，但是，当 $N$ 很大的时候，它的振荡很厉害，所以有很多正的部分对积分的贡献可以被负的部分对积分的贡献消掉，而 $D_N(x)$ 并不满足好的积分核的定义中的第一条。实际上，我们有

<span id="ma-lemma-367" class="lecture-anchor"></span>**引理 367**。当 $N \to \infty$ 时，我们有
$$\int_{-\pi}^\pi |D_N(x)| \frac{dx}{2\pi} = \frac{4}{\pi^2} \log(N) + O(1).$$

**证明**：我们重新写下 $D_N(x)$ 的表达式
$$D_N(x) = \begin{cases} \frac{\sin\left(\left(N+\frac{1}{2}\right)x\right)}{\sin\left(\frac{1}{2}x\right)}, & x \neq 2k\pi; \\ 2N + 1, & x = 2k\pi. \end{cases}$$
证明的基本想法是把分母中的 $\sin$ 函数替换成更容易控制的函数。我们首先说明：对任意的 $x \in [0, \infty)$，我们有
$$x - \frac{1}{6}x^3 \leqslant \sin(x) \leqslant x.$$
后面一个不等式是熟知的；为了说明前一个，我们知道
$$1 - \frac{1}{2}x^2 \leqslant \cos(x), \quad x \geqslant 0.$$
对 $x$ 积分即可。

所以，对 $0<x\leqslant\pi$，我们有
$$\frac{2}{x} \leqslant \frac{1}{\sin\left(\frac{x}{2}\right)} \leqslant \frac{2}{x} \frac{1}{1 - \frac{1}{24}x^2} \leqslant \frac{2}{x} \left(1 + 2 \times \frac{1}{24}x^2\right) \leqslant \frac{2}{x} + \frac{x}{6}.$$
即
$$\frac{2}{x} \leqslant \frac{1}{\sin\left(\frac{x}{2}\right)} \leqslant \frac{2}{x} + \frac{x}{6}.$$

<!-- source: PDF 657; printed: 657; transcription: first-pass; proofreading: applied -->

从而，通过把 $[-\pi, \pi]$ 上的积分变成 $[0, \pi]$ 上的积分，我们有
$$
\begin{aligned}
0 \leqslant 2 \int_0^\pi |D_N(x)| \frac{dx}{2\pi} - \overbrace{2 \int_0^\pi \frac{\left|\sin\left(\left(N+\frac{1}{2}\right)x\right)\right|}{\frac{x}{2}} \frac{dx}{2\pi}}^{I_N} \\
&\leqslant \frac{1}{6\pi} \int_0^\pi x \left|\sin\left(\left(N+\frac{1}{2}\right)x\right)\right| dx \\
&\leqslant \frac{1}{6\pi} \int_0^\pi x dx = \frac{\pi}{12} = O(1).
\end{aligned}
$$

所以，我们只需要对
$$I_N = \frac{2}{\pi} \int_0^\pi \frac{\left|\sin\left(\left(N+\frac{1}{2}\right)x\right)\right|}{x} dx$$
的增长进行估计即可。此时，我们有
$$
\begin{aligned}
I_N &= \frac{2}{\pi} \int_0^{\left(N+\frac{1}{2}\right)\pi} \frac{|\sin x|}{x} dx \\
&= \frac{2}{\pi} \int_0^{N\pi} \frac{|\sin x|}{x} dx + \underbrace{\frac{2}{\pi} \int_{N\pi}^{\left(N+\frac{1}{2}\right)\pi} \frac{|\sin x|}{x} dx}_{O(N^{-1})} \\
&= \frac{2}{\pi} \sum_{k=0}^{N-1} \int_{k\pi}^{(k+1)\pi} \frac{|\sin x|}{x} dx + O(1) \\
&= \frac{2}{\pi} \sum_{k=1}^{N-1} \int_0^\pi \frac{|\sin x|}{x + k\pi} dx + O(1).
\end{aligned}
$$

我们进一步放缩分母，我们有
$$\frac{1}{(k+1)\pi} \leqslant \frac{1}{x + k\pi} \leqslant \frac{1}{k\pi}.$$
从而
$$\frac{2}{\pi} \sum_{k=1}^{N-1} \int_0^\pi \frac{|\sin x|}{(k+1)\pi} dx \leqslant I_N - O(1) \leqslant \frac{2}{\pi} \sum_{k=1}^{N-1} \int_0^\pi \frac{|\sin x|}{k\pi} dx.$$
然而，左右两边我们可以直接计算，从而
$$\frac{4}{\pi^2} \sum_{k=2}^N \frac{1}{k} \leqslant I_N - O(1) \leqslant \frac{4}{\pi^2} \sum_{k=1}^{N-1} \frac{1}{k}.$$
最终利用
$$\sum_{k=1}^{N-1} \frac{1}{k} = \log N + \gamma + O\left(\frac{1}{N}\right),$$
其中 $\gamma$ 是 Euler 常数。命题得证。 $\hfill\square$

<!-- source: PDF 658; printed: 658; transcription: first-pass; proofreading: applied -->

## 傅里叶级数的局部化

Dirichlet 核函数的研究将是我们之后学习的重点。我们先证明 Fourier 级数的部分和或者说 Dirichlet 核的局部化的性质。这是一个非常有启发意义的命题，它的证明是 Riemann-Lebesgue 的一个漂亮的应用：

<span id="ma-lemma-368" class="lecture-anchor"></span>**引理 368**（局部化引理）。对任意的 $x_0 \in \mathbb{R}$ 任意的小正数 $\delta > 0$，如果函数 $f, g \in L^1(\mathbb{T})$ 满足
$$f|_{(x_0-\delta, x_0+\delta)} = g|_{(x_0-\delta, x_0+\delta)},$$
那么，我们有
$$\lim_{N\to\infty} (S_N(f)(x_0) - S_N(g)(x_0)) = 0.$$

**注记**。据此，为了研究 $f$ 在某点 $x_0$ 处的 Fourier 级数是否收敛，只要将注意力集中在这个点的邻域就好！这是绝对是不平凡的结论：按照定义，Fourier 系数是依赖于 $f$ 在整个 $\mathbb{T}$ 的积分的，然而 Fourier 级数的收敛性却是局部的！

**证明**：首先，由于 $D_N(x)$ 是偶函数，通过变量替换，我们有
$$
\begin{aligned}
&S_N(f)(x_0) - S_N(g)(x_0) \\
&= \int_{-\pi}^\pi D_N(y) (f(x_0 - y) - g(x_0 - y)) \frac{dy}{2\pi} \\
&= \int_0^\pi D_N(y) (f(x_0 - y) + f(x_0 + y) - g(x_0 - y) - g(x_0 + y)) \frac{dy}{2\pi} \\
&= \int_\delta^\pi D_N(y) (f(x_0 - y) + f(x_0 + y) - g(x_0 - y) - g(x_0 + y)) \frac{dy}{2\pi}.
\end{aligned}
$$
根据 $D_N(x)$ 的解析表达式，我们有
$$
\begin{aligned}
S_N(f)(x_0) - S_N(g)(x_0) &= \int_\delta^\pi \sin\left(\left(N+\frac{1}{2}\right)y\right) \underbrace{\frac{(f(x_0 - y) + f(x_0 + y) - g(x_0 - y) - g(x_0 + y))}{\sin\left(\frac{y}{2}\right)}}_{F(y)} \frac{dy}{2\pi} \\
&= \int_0^\pi \sin\left(\left(N+\frac12\right)y\right)F(y)\mathbf1_{\delta\leqslant y\leqslant\pi}(y)\frac{dy}{2\pi}.
\end{aligned}
$$
由于在 $x \geqslant \delta$ 时，$\sin\left(\frac{x}{2}\right) \geqslant \sin\left(\frac{\delta}{2}\right)$ 有正的下界，所以 $F(x)\mathbf1_{\delta\leqslant x\leqslant\pi}(x)$ 实际上在 $L^1(\mathbb{T})$ 中。用 $\sin((N+\tfrac12)y)=\sin(Ny)\cos(y/2)+\cos(Ny)\sin(y/2)$，把固定的半频率因子并入上述 $L^1$ 函数；再由整数频率的 Riemann-Lebesgue 引理，当 $N\to\infty$ 时，我们有
$$|S_N(f)(x_0) - S_N(g)(x_0)| \to 0.$$
命题得证。 $\hfill\square$

**注记**。对上面的证明稍加修改，我们就可以证明：对任意的 $h \in L^1(\mathbb{T})$ 和任意的小正数 $\delta > 0$，当 $N \to \infty$ 时，我们有
$$
\begin{aligned}
\int_{\delta \leqslant |x| \leqslant \pi} D_N(x) h(x) \frac{dx}{2\pi} &\to 0, \\
\int_{\delta \leqslant |x| \leqslant \pi} F_N(x) h(x) \frac{dx}{2\pi} &= O\left(\frac{1}{N}\right).
\end{aligned}
$$

<!-- source: PDF 659; printed: 659; transcription: first-pass; proofreading: applied -->

我们观察到，尽管上面的极限都消失，但是后者有固定的衰减速度而前者并没有（由 Riemann-Lebesgue 引理给出的衰减是没有衰减速率的）。

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../02-math-analysis-ii.md) · [校勘记录](../errata.md) · [上一篇：53.2：习题课：Riemann积分的定义3](53-fourier-l2/53-04-p0644-0646.md) · [下一篇：Fourier 级数的收敛理论](55-fourier-convergence/55-01-p0660-0666.md)
