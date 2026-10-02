# 78 紧算子谱理论与 Laplace 算子

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：紧算子、自伴算子与弱收敛](77-compact-operators.md) · [下一篇：特征函数、变分原理与特征值增长](79-spectral-asymptotics.md)

<!-- source: PDF 907; printed: 907; transcription: first-pass; proofreading: applied -->

## 78 紧算子的谱理论: Hilbert-Schmidt 定理, Laplace 算子的谱分解定理, 正方形区域上 Laplace 算子的特征函数与特征值的计算, 正方形区域上上 Laplace 算子特征值的增长率


我们以下收集一些关于特征值和特征子空间的性质, 其中, 我们假设 $A$ 是从 $H$ 到自身的连续线性映射:

1) 对任意的 $\lambda \in \sigma(A)$, $H_\lambda \subset H$ 是闭子空间。

   这个是明显的: 如果 $A(x_k) = \lambda x_k$ 并且 $x_k \to x$, 由于方程的两边对于变量都是连续的, 所以令 $k \to \infty$, 我们就得到 $A(x) = \lambda x$。

2) $A$ 是自伴算子, 那么, $\sigma(A) \subset \mathbb{R}$ (只有实特征值)。

   这个证明和有限维的情况是一致的: 假设 $\lambda \in \sigma(A)$, $x \in H_\lambda$ 并且 $x \neq 0$。那么,
$$
(\lambda x, x) = (Ax, x) = (x, Ax) = (x, \lambda x).
$$
   所以,
$$
\lambda \|x\|^2 = \bar{\lambda} \|x\|^2.
$$
   从而, $\lambda \in \mathbb{R}$。

3) 假设 $A$ 是自伴算子, 那么 $A$ 的不同特征值的特征向量是相互垂直的, 即若 $\lambda, \lambda' \in \sigma(A)$ 并且 $\lambda \neq \lambda'$, 那么, $H_\lambda \perp H_{\lambda'}$。

   这个证明 (也) 和有限维的情况是一致的: 任意选取 $x \in H_\lambda$, $x' \in H_{\lambda'}$, 那么,
$$
(\lambda x, x') = (Ax, x') = (x, Ax') = (x, \lambda' x').
$$
   所以,
$$
\lambda (x, x') = \lambda' (x, x').
$$
   这里我们用到了这些特征值是实数。由于 $\lambda \neq \lambda'$, 所以, $(x, x') = 0$, 即 $x \perp x'$。

3) 假设 $A$ 是紧算子, 如果 $\lambda \in \sigma(A) - \{0\}$ 是非零的特征值, 那么 $H_\lambda$ 是有限维的线性空间。

   根据特征值的定义, 算子 $A$ 在 $H_\lambda$ 上的限制映射就是乘以一个非零的常数 $c \in \mathbb{C}$。由于 $H_\lambda$ 是闭子空间, 所以, 利用诱导的内积, 它也是一个可分的完备内积空间, 我们就可以在 $H_\lambda$ 上选取一个 Hilbert 基 $\{f_k\}_{k \geqslant 1}$。如果 $\dim_{\mathbb{C}}(H_\lambda) = \infty$, 那么, $f_k \rightharpoonup 0$, 从而, 根据 $A$ 是紧算子, $\{A(f_k) = c f_k\}_{k \geqslant 1}$ 收敛到 $0$, 矛盾。

<!-- source: PDF 908; printed: 908; transcription: first-pass; proofreading: applied -->

4) 给定连续线性映射 $A$, 我们在 $H - \{0\}$ 上定义如下的一个非线性的泛函:
$$
R : H - \{0\} \to \mathbb{C}, \quad u \mapsto R(u) = \frac{(A(u), u)}{\|u\|^2}.
$$
实际上, 通过对 $u$ 乘以一个常数, 我们知道 $R$ 本质上是定义在 $H$ 中的单位球面上的映射。如果 $A$ 是自伴的算子, 此时, 我们还知道 $R$ 在 $\mathbb{R}$ 中取值。

根据 $A$ 的连续性, 我们知道存在常数 $C > 0$, 使得 $|R(u)| \leqslant C$。我们现在进一步假设 $A$ 是自伴的算子, 我们定义
$$
r_1 := \sup_{u \in H - \{0\}} |R(u)|.
$$

<span id="ma-lemma-523" class="lecture-anchor"></span>**引理 523**. 如果 $A$ 是紧自伴算子, 那么, 上述极值 $r_1$ 可以被实现, 即存在 $u \in H$, $\|u\| = 1$, 使得 $|R(u)| = r_1$。

**证明:** 按上确界的定义, 存在 $\{u_k\}_{k \geqslant 1} \subset H$, 使得 $\|u_k\| = 1$ 并且
$$
\lim_{k \to \infty} |(A(u_k), u_k)| = r_1.
$$
我们还可以进一步假设存在 $u \in H$, 使得 $u_k \rightharpoonup u$。我们现在比较 $R(u)$ 与 $R(u_k)$ 之间的差距。实际上,
$$
(A(u_k), u_k) - (A(u), u) = (A(u_k - u), u_k) - (A(u), u - u_k).
$$
由于 $A$ 为紧算子, 所以, $A(u_k - u) \to 0$, 从而当 $k \to \infty$ 时, 上式第一项的极限为零; 第二项极限为零, 这是因为 $u_k \rightharpoonup u$。所以, $(A(u_k), u_k) \to (A(u), u)$, 从而, $|(Au, u)| = r_1$ (此时, 我们证明了更强的结论: $(A(u_k), u_k) \to (A(u), u)$)。特别地, 因为 $r_1 \neq 0$ (否则 $A = 0$ 就没什么可说的了), 所以 $u \neq 0$。

另外, 我们有
$$
\|u\| \leqslant \lim_{k \to \infty} \|u_k\| = 1,
$$
所以,
$$
|R(u)| \geqslant r_1.
$$
根据 $r_1$ 的定义, 我们必然有
$$
|R(u)| = r_1.
$$
特别地, $\|u\|=1$。
$\square$

**注记**. 取 $\lambda_1:=R(u)$, 则 $|\lambda_1|=r_1$。

5) 假设 $A$ 是紧自伴算子, $u_1 \in H - \{0\}$ 使得 $|R(u_1)| = r_1$, 并令 $\lambda_1=R(u_1)$, 那么, $A u_1 = \lambda_1 u_1$, 即 $\lambda_1$ 是 $A$ 的绝对值最大的特征值。

<!-- source: PDF 909; printed: 909; transcription: first-pass; proofreading: applied -->

我们用变分的观点来研究这个问题 (这个方法和之前研究 Dirichlet 问题时的想法很类似):
我们令 $u=u_1/\|u_1\|$, 从而 $\|u\|=1$ (即除以归一化系数)。对任意的 $v \in H$。我们考虑复数 $\varepsilon$, 其中 $\varepsilon \to 0$。此时,
$$
\begin{aligned}
R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
&\overset{A=A^*}{=} \frac{(Au, u) + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{(u, u) + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
&= \frac{\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{1 + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
&= (\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2))(1 - 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)) \\
&= \lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au - \lambda_1 u, v)) + O(|\varepsilon|^2).
\end{aligned}
$$
由于 $|R(u)|=r_1$ 是 $|R|$ 的最大值, 若 $r_1=0$ 则 $A=0$, 结论显然。否则令 $s=\operatorname{sgn}(\lambda_1)$。如果 $a = (Au - \lambda_1 u, v) \neq 0$, 取 $\varepsilon = \delta s a$, 其中 $\delta > 0$ 足够小, 则 $sR(u+\varepsilon v)=r_1+2\delta|a|^2+O(\delta^2)>r_1$, 从而 $|R(u+\varepsilon v)|>r_1$, 这与 $r_1$ 的定义矛盾。所以, 对任意的 $v$, 我们都有
$$
(A(u) - \lambda_1 u, v) = 0.
$$
令 $v = A(u) - \lambda_1 u$, 我们就证明了 $A(u) - \lambda_1 u = 0$。

6) 假设 $A$ 是紧自伴算子, 那么 $0$ 是 $\sigma(A)$ 唯一可能的聚点, 也就是说如果存在两两不同的 $\{ \lambda_k \}_{k \geqslant 1} \subset \sigma(A)$, 使得当 $k \to \infty$ 时, $\lambda_k \to \lambda$, 那么, $\lambda = 0$。

我们用反证法: 假设 $\lambda \neq 0$。对每个 $k$, 我们选取 $u_k \in H$, 使得 $A u_k = \lambda_k u_k$ 并且 $\|u_k\| = 1$。我们可以进一步要求 $u_k \rightharpoonup u$。由于 $A$ 是紧算子, 所以 $\{ A(u_k) \}_{k \geqslant 1}$ 是收敛的, 从而, 我们有如下的极限:
$$
\lim_{k \to \infty} \lambda_k u_k = \lambda u.
$$
由于我们假设了 $\lambda \neq 0$, 所以,
$$
\lim_{k \to \infty} u_k = \lim_{k \to \infty} \frac{\lambda_k}{\lambda} u_k = u.
$$
特别地, 我们得到了 $A u = \lambda u$, 从而, $\lambda$ 为非零特征值。

利用 $\lambda$ 是聚点这个性质, 对任意的 $\varepsilon > 0$, $H$ 的子空间
$$
X = \widehat{\bigoplus_{|\lambda_k - \lambda| < \varepsilon}} H_{\lambda_k}
$$
是无限维的闭子空间。其中上述直和 $\widehat{\bigoplus}$ 是在 $H$ 中的闭包的意义下下取的, 即
$$
\widehat{\bigoplus_{|\lambda_k - \lambda| < \varepsilon}} H_{\lambda_k} = \overline{\bigoplus_{|\lambda_k - \lambda| < \varepsilon} H_{\lambda_k}}.
$$
并且各个分量两两正交。我们证明, $A$ 是紧算子意味着当 $\varepsilon$ 足够小时, 我们就必然有 $\dim_{\mathbb{C}} X < \infty$: 实际上, 由于 $A$ 把 $H_{\lambda_k}$ 映射到自身, 所以, $A$ 把 $X$ 也映射到自身。我们在每个 $H_{\lambda_k}$ 中 (一种有无穷多个) 选取一个 $u_k$, 使得 $\|u_k\| = 1$, 当 $k \neq l$ 时, 我们知道
$$
\|\lambda_k u_k - \lambda_l u_l\| = \sqrt{\lambda_k^2 + \lambda_l^2} \approx \sqrt{2} |\lambda|.
$$

<!-- source: PDF 910; printed: 910; transcription: first-pass; proofreading: applied -->

这是因为不同特征值所对应的特征向量相互垂直。此时, $\{ A u_k = \lambda_k u_k \}_{k \geqslant 1}$ 中不可能有收敛的子列, 与 $A$ 的紧性矛盾。

<span id="ma-theorem-524" class="lecture-anchor"></span>**定理 524** (Hilbert-Schmidt 谱定理). 给定可分的完备内积空间 $(H, (\cdot, \cdot))$, $A : H \to H$ 自伴的紧算子 (有界)。那么, $H$ 有如下的 (拓扑) 直和分解:
$$
H = \widehat{\bigoplus_{\lambda \in \sigma(A)}} H_\lambda.
$$
特别地, 如果 $\lambda \neq 0$, 那么, $\dim_{\mathbb{C}} H_\lambda < \infty$。进一步, 如果 $|\sigma(A)| = \infty$ (有无限个特征值), 那么, 我们可以将所有的特征值 $\lambda_k \in \sigma(A)$ 排序 (只有可数个) 使得
$$
\lim_{k \to \infty} \lambda_k \to 0.
$$

**证明:** 除了关于直和的叙述, 我们在此之前已经证明了其他的论断。
首先, 我们可以假设 $\operatorname{ker}(A) = 0$, 即 $H_0 = \{0\}$: 由于 $A$ 是自伴算子, 所以, $A$ 把 $\operatorname{ker}(A)$ 的正交补空间映射到自身:
$$
A : \operatorname{ker}(A)^\perp \to \operatorname{ker}(A)^\perp.
$$
所以, 我们只要用 $\operatorname{ker}(A)^\perp$ 来代替 $H$ 考虑问题即可。

我们下面采用将实对称矩阵对角化的方法进行论证。
我们令 $H_1 = H$, $A_1 = A$, 其中 $A_1 : H_1 \to H_1$, 我们注意到 $A_1$ 也是紧的自伴算子。定理之前 5) 中的论证, 我们可以找到 $u_1 \in H_1$, 使得 $\|u_1\| = 1$, $R(u_1) = \lambda_1$ 并且 $A_1(u_1) = \lambda_1 u_1$。据此, 我们将 $H_1$ 分解为
$$
H_1 = \mathbb{C} u_1 \oplus H_2,
$$
其中 $H_2 = (\mathbb{C} u_1)^\perp$ 是 $u_1$ 在 $H_1$ 中的正交补。利用 $A_1$ 的自伴行, 我们知道 $A_1$ 在 $H_2$ 上的限制, 我们把它记作 $A_2$, 满足 $A_2 : H_2 \to H_2$ 并且 $A_2$ 仍然是自伴的紧算子。

我们重复上面的构造, 在 $H_2 - \{0\}$ 上选取使 $|R|$ 取到最大值的点, 并令 $\lambda_2$ 为该点处 $R$ 的取值, 那么, 我们可以找到 $u_2 \in H_2$, 使得 $\|u_2\| = 1$, $R(u_2) = \lambda_2$ 并且 $A_2(u_2) = \lambda_2 u_2$。据此, 我们将 $H_2$ 分解为
$$
H_2 = \mathbb{C} u_2 \oplus H_3.
$$
如此往复, 我们得到点的序列 $\{u_k\}_{k \geqslant 1} \subset H$ 和子空间的下降的序列
$$
H_1 \supset H_2 \supset H_3 \supset \cdots.
$$
特别地, 根据构造, 我们还有
$$
|\lambda_1| \geqslant |\lambda_2| \geqslant \cdots.
$$
我们现在令
$$
H' = \overline{\bigoplus_{\lambda_k \in \sigma(A)} \mathbb{C} u_k}.
$$

<!-- source: PDF 911; printed: 911; transcription: first-pass; proofreading: applied -->

我们只要 $H' = H$ 就完成了证明。首先，我们假设上述操作需要做无限次（否则这就是有限维关于 Hermite 矩阵对角化的过程，我们在线性代数中已经证明，实际上这里重新证明了这个结论），此时，我们已经将 $\{\lambda_k\}_{k \geqslant 1}$ 重排，使得 $\{|\lambda_k|\}_{k \geqslant 1}$ 是单调下降到 $0$ 的序列。现在考虑 $A$ 在 $H'^\perp$ 上的限制：
$$A : H'^\perp \to H'^\perp.$$
这仍然是自伴紧算子并且具有特征值 $\lambda \neq 0$。所以，存在某个 $k_0$，使得 $|\lambda| \in (|\lambda_{k_0+1}|, |\lambda_{k_0}|]$。但是，按照构造方式，我们的变分方法应该先构造出 $\lambda$ 之后才有可能构造出 $\lambda_{k_0+1}$，矛盾。 $\square$

## Laplace 算子的谱分解：有界区域上的 Fourier 级数的类比

我们可以将上述紧算子的理论应用到 Dirichlet 问题之上（我们在在这个章节并不需要区域是光滑的，$\Omega \subset \mathbb{R}^n$ 只要是有界的开集即可，而我们只在 $H^1_0(\Omega)$ 中研究问题而不再关心函数在边界 $\partial\Omega$ 上的限制）。为此，我们给出一个紧算子例子。从某种意义上说，这是最重要的一类紧算子的例子：

<span id="ma-theorem-525" class="lecture-anchor"></span>**定理 525**. 任意给定有界开区域 $\Omega \subset \mathbb{R}^n$，那么，自然的嵌入映射
$$\iota : H^1_0(\Omega) \to L^2(\Omega), \quad u \mapsto u,$$
是紧算子。

**证明：** 我们将利用 Fourier 级数的理论来证明这个重要的定理。首先，我们不妨假设 $\overline{\Omega} \subset\subset (0, 2\pi)^n$（否则，我们可以把 $\overline{\Omega}$ 放到更大的一个 $\mathbb{R}^n$ 中的一个盒子中去，从而用一个周期与 $2\pi$ 不同的 Fourier 级数即可）。

我们可以把 $C^\infty_0(\Omega)$ 中的函数在 $\mathbb{R}^n - \Omega$ 中来 $0$ 来延拓，这给出连续映射
$$\operatorname{Ext} : C^\infty_0(\Omega) \to H^1(\mathbb{R}^n).$$
其中，上述连续性之所以成立是因为我们可以在 $\Omega$ 上运用 Poincaré 不等式。根据 $C^\infty_0(\Omega)$ 在 $H^1_0(\Omega)$ 中的稠密性，我们就得到了等距嵌入
$$\iota : (H^1_0(\Omega), \|\cdot\|_{H^1}) \hookrightarrow H^1(\mathbb{R}^n).$$

由于 $\overline{\Omega} \subset (0, 2\pi)^n$ 是相对紧的，我们选取 $\chi \in C^\infty_0((0, 2\pi)^n)$，使得 $\chi|_{\Omega} \equiv 1$。我们现在证明映射
$$T_\chi : H^1(\mathbb{R}^n) \to L^2(\mathbb{R}^n), \quad f(x) \mapsto \chi(x)f(x),$$
是紧算子。我们注意到，作为 $L^2((0, 2\pi)^n)$ 中的函数，利用 Fourier 级数的展开，我们有
$$\begin{aligned}
\chi(x)f(x) &= \chi(x) \sum_{k \in \mathbb{Z}^n} c_k e^{ik \cdot x} \\
&= \chi(x) \sum_{k \in \mathbb{Z}^n} \left( \frac{1}{(2\pi)^n} \int_{(0,2\pi)^n} f(y)e^{-ik \cdot y} dy \right) e^{ik \cdot x} \\
&= \underbrace{\sum_{|k| \leqslant N} c_k \chi(x) e^{ik \cdot x}}_{= T_{\chi, N}(f)} + \underbrace{\chi(x) \sum_{|k| > N} c_k e^{ik \cdot x}}_{= R_{\chi, N}(f)}.
\end{aligned}$$

<!-- source: PDF 912; printed: 912; transcription: first-pass; proofreading: applied -->

我们把 $T_\chi$ 分解成两个算子的和，其中，
$$T_{\chi, N} : H^1(\mathbb{R}^n) \to L^2(\mathbb{R}^n), \quad f(x) \mapsto \sum_{|k| \leqslant N} c_k \chi(x) e^{ik \cdot x},$$
而
$$R_{\chi, N} : H^1(\mathbb{R}^n) \to L^2(\mathbb{R}^n), \quad f(x) \mapsto \chi(x) \sum_{|k| > N} c_k e^{ik \cdot x}.$$
这里，整数 $N$ 是待定的。由于 $T_{\chi, N}$ 的像完全落在 $\{\chi(x)e^{ik \cdot x}\}_{|k| \leqslant N}$ 这有限多个函数所生成的有限维线性空间中，所以它是有限秩的算子，从而，$T_{\chi, N}$ 是紧算子。

为了研究 $R_{\chi, N}$，我们将利用 $\nabla f$ 也是 $L^2$ 的函数这个事实。实际上，我们有
$$\begin{aligned}
\|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| > N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^n)} \\
&\leqslant \frac{1}{N^2} \sum_{|k| > N} |k|^2 |c_k|^2 \\
&\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
\end{aligned}$$
其中，我们把导数转化为频率空间上衰减。这表明，$T_\chi$ 这个算子可以一个紧算子 $T_{\chi, N}$ 来逼近，其中，$N \to \infty$，所以 $T_\chi$ 为紧算子。

最后，我们把嵌入
$$\iota : H^1_0(\Omega) \to L^2(\Omega)$$
写成如下两个连续线性映射的复合：
$$H^1_0(\Omega) \to H^1(\mathbb{R}^n) \xrightarrow{T_\chi} L^2(\Omega) \subset L^2(\mathbb{R}^n).$$

由于任何算子与紧算子复合之后是紧算子，所以我们就证明了 $\iota$ 也是紧算子。 $\square$

我们现在考虑如下的交换图表：
$$\begin{matrix}
H^{-1}(\Omega) & \xrightarrow{(-\Delta)^{-1}} & H^1_0(\Omega) \\
\uparrow \iota & & \downarrow \iota \\
L^2(\Omega) & \overset{(-\Delta)^{-1}}{\dashrightarrow} & L^2(\Omega)
\end{matrix}$$

据此，通过复合，我们就可以定义
$$(-\Delta)^{-1} : L^2(\Omega) \longrightarrow L^2(\Omega).$$
从此之后，当我们谈论 $(-\Delta)^{-1}$ 的时候，我们总假设它的定义域和值域都是 $L^2(\Omega)$。

由于右边竖列的箭头是紧算子，复合之后的算子 $(-\Delta)^{-1}$ 也是紧的。我们现在验证 $(-\Delta)^{-1}$ 是自伴算子：对任意的 $f_1, f_2 \in L^2(\Omega)$，令 $u_1 = (-\Delta)^{-1}f_1, u_2 = (-\Delta)^{-1}f_2$，我们知道，$u_1, u_2 \in H^1_0(\Omega)$，所以，
$$((-\Delta)^{-1}f_1, f_2) = (u_1, -\Delta u_2) = (\nabla u_1, \nabla u_2),$$

<!-- source: PDF 913; printed: 913; transcription: first-pass; proofreading: applied -->

这里，我们用到了 $u_1 \in H^1_0(\Omega)$ 事实，请参考[引理 492](73-dirichlet.md#ma-lemma-492)。类似地，我们还有
$$(f_1, (-\Delta)^{-1}f_2) = (\nabla u_1, \nabla u_2).$$
这就证明了自伴性。此时，就可以对 $(-\Delta)^{-1}$ 使用抽象的紧算子理论了。

另外，我们之前还证明了 $(-\Delta)^{-1}$ 是连续的正线性算子，即对任意的 $f \in L^2(\Omega)$，我们有
$$((-\Delta)^{-1}f, f)_{L^2} \geqslant 0.$$
这个不等式中等号成立当且仅当 $f = 0$。这表明，$(-\Delta)^{-1}$ 的所有特征值都是正实数（没有 $0$！）。

运用 Hilbert-Schmidt 定理，那么，我们可把 $(-\Delta)^{-1}$ 的特征值的集合写成
$$\sigma((-\Delta)^{-1}) = \{\mu_k\}_{k \geqslant 1}$$
使得
$$\mu_1 \geqslant \mu_2 \geqslant \mu_3 \geqslant \cdots, \quad \lim_{k \to \infty} \mu_k = 0.$$
我们用 $\varphi_k(x) \in L^2(\Omega)$ 表示与 $\mu_k$ 相对应的长度（$L^2$-范数）为 $1$ 的特征函数。我们再令 $\lambda_k = \mu_k^{-1}$，所以，
$$-\Delta \varphi_k = \lambda_k \varphi_k.$$
由于 $\varphi_k \in L^2(\Omega)$，根据 Dirichlet 问题的解，我们知道 $\varphi_k \in H^1_0(\Omega)$。综上所述，我们证明了如下关于 $(-\Delta)^{-1}$ 的谱分解定理：

<span id="ma-theorem-526" class="lecture-anchor"></span>**定理 526**. 假设 $\Omega \subset \mathbb{R}^n$ 是有界的开区域，那么，存在单调上升的无界序列
$$0 < \lambda_1 \leqslant \lambda_2 \leqslant \lambda_3 \leqslant \cdots, \quad \lim_{k \to \infty} \lambda_k = +\infty,$$
以及 $L^2(\Omega)$ 的一组 Hilbert 基 $\{\varphi_k\}_{k \geqslant 1}$，使得
$$-\Delta \varphi_k = \lambda_k \varphi_k.$$
进一步，对任意的 $k \geqslant 1$，我们有 $\varphi_k \in H^1_0(\Omega)$。

**注记**. 这个定理的证明没有用到 $\Omega$ 边界的正则性。

**例子**. 我们现在考虑 $\Omega = (0, d)^n$ 是一个正方体的情况，其中 $d > 0$ 是常数。（我们注意到 $\Omega$ 的边界并不是光滑的。）我们要详细地计算 $-\Delta$ 在 $\Omega$ 上的所有特征值和特征函数。根据 Fourier 级数的理论，$L^2(\Omega)$ 的一族 Hilbert 基可以取作
$$\left\{ d^{-\frac{n}{2}} e^{\frac{2\pi i}{d} k \cdot x} \right\}_{k \in \mathbb{Z}^n}.$$
由于我们要求 $\varphi|_{\partial\Omega} = 0$，所以，我们希望选取 $\sin$ 型的函数。
先研究 $d = 1$ 的情形，我们选取 $\left\{ \sin\left(\frac{k\pi}{d}x\right) \right\}_{k \in \mathbb{Z}_{\geqslant 1}}$ 作为备选。我们指出这里和 Fourier 级数的不同之处：指数中的 $2\pi$ 变成了 $\pi$。很明显，我们有

<!-- source: PDF 914; printed: 914; transcription: first-pass; proofreading: applied -->

- $-\Delta \left( \sin\left(\frac{k\pi}{d}x\right) \right) = \frac{\pi^2 k^2}{d^2} \sin\left(\frac{k\pi}{d}x\right)$;
- $\sin\left(\frac{k\pi}{d}x\right) \Big|_{\partial(0,d)} = 0$, 所以，根据一维的 $H^1_0$ 空间的描述，我们有 $\sin\left(\frac{k\pi}{d}x\right) \in H^1_0((0, d))$;
- 当 $k \neq l$ 时，我们有如下的正交性：
$$\left( \sin\left(\frac{k\pi}{d}x\right), \sin\left(\frac{l\pi}{d}x\right) \right)_{L^2} = \int_0^d \sin\left(\frac{k\pi}{d}x\right) \sin\left(\frac{l\pi}{d}x\right) dx = 0.$$

为了说明这给出了 $-\Delta = -\frac{d^2}{dx^2}$ 的所有特征函数，我们在区间 $(0, d)$ 上解（常）微分方程
$$-u'' = \lambda^2 u,$$
其中 $\lambda > 0$。注意到，我们要找的 $u$ 满足 $u \in H^1_0((0, d))$，根据 Sobolev 嵌入定理，$u \in C^0((0, d))$。据此，根据方程，$u'' \in C^0$，所以，$u \in C^2$，再代入方程，$u'' \in C^2$，所以，$u \in C^4$。如此迭代，我们知道 $u$ 是足够光滑的函数，从而可以能用经典的常微分方程理论（解存在唯一）。所以，这个方程的通解可写成
$$u(x) = A e^{i\lambda x} + B e^{-i\lambda x},$$
其中，$A, B$ 是复数。再利用 $u(0) = u(d) = 0$，我们有
$$\begin{aligned}
A + B &= 0, \\
A e^{i\lambda d} + B e^{-i\lambda d} &= 0,
\end{aligned}$$
这说明
$$\begin{aligned}
B &= -A, \\
A \sin(\lambda d) &= 0.
\end{aligned}$$
由于 $A \neq 0$，所以，
$$u(x) = C \sin\left(\frac{\pi}{d}kx\right).$$
这说明，我们已经列出了所有的特征函数和特征值。

现在假设维数是 $n$，我们假设 $k = (k_1, \cdots, k_n) \in (\mathbb{Z}_{\geqslant 1})^n$，那么
$$\left\{ \prod_{j=1}^n \sin\left(\frac{\pi}{d} k_j \cdot x_j\right) \right\}_{k_1, \cdots, k_n \in (\mathbb{Z}_{\geqslant 1})^n}$$
是所有的特征函数。

我们首先计算
$$-\Delta \left( \prod_{j=1}^n \sin\left(\frac{\pi}{d} k_j \cdot x_j\right) \right) = \frac{\pi^2 |k|^2}{d^2} \prod_{j=1}^n \sin\left(\frac{\pi}{d} k_j \cdot x_j\right).$$
其次，我们仍然有正交关系：当 $k \neq k'$ 时，我们就有
$$\int_{(0,d)^n} \prod_{j=1}^n \sin\left(\frac{\pi}{d} k_j \cdot x_j\right) \prod_{j=1}^n \sin\left(\frac{\pi}{d} k'_j \cdot x_j\right) dx = 0.$$

<!-- source: PDF 915; printed: 915; transcription: first-pass; proofreading: applied -->

对于 $k \in (\mathbb{Z}_{\geqslant 1})^n$, 我们定义
$$
\varphi_k = \prod_{j=1}^n \sin \left( \frac{\pi}{d} k_j \cdot x_j \right),
$$
我们来证明 $\varphi_k \in H_0^1((0,d)^n)$: 这显然是一个 $H^1((0,d)^n)$ 中的函数, 下面用光滑的有紧支集的函数来逼近它: 由于对每个 $j$, $\sin \left( \frac{\pi}{d} k_j \cdot x \right) \in H_0^1((0,d))$, 所以, 存在 $\{\varphi_j^{(p)}(x)\}_{p \geqslant 1} \subset C_0^\infty((0,d))$, 使得
$$
\lim_{p \to \infty} \left\| \varphi_j^{(p)}(x) - \sin \left( \frac{\pi}{d} k_j \cdot x \right) \right\|_{H^1} = 0.
$$
所以,
$$
\left\| \prod_{j=1}^n \varphi_j^{(p)}(x_j) - \prod_{j=1}^n \sin \left( \frac{\pi}{d} k_j \cdot x_j \right) \right\|_{H^1}^2 \leqslant C \sum_{j=1}^n \left\| \varphi_j^{(p)} - \sin \left( \frac{\pi}{d} k_j \cdot x_j \right) \right\|_{H_0^1}^2 \to 0.
$$
最终, 为了证明这是所有的特征函数, 我们来证明 $\{\varphi_k(x)\}_{(\mathbb{Z}_{\geqslant 1})^n}$ 归一化后构成 $L^2$ 的 Hilbert 基。我们假设 $n \geqslant 2$ ($((n = 1$ 的情形已经完成$))$), 只要证明与 $\{\varphi_k\}_{k \in (\mathbb{Z}_{\geqslant 1})^n}$ 都垂直的函数只有 $0$ 即可 (这表明这些函数所张成的空间的闭包是整个 $L^2$)。这与证明高维的 Fourier 级数是一组基是完全一样的 (利用 Fubini 定理), 请参考上学期 5 月 14 日的讲义。

我们现在研究 $\Omega = (0,d)^n$ 上 Laplace 算子的特征值分布问题。我们定义
$$
\Psi(\lambda) = \left| \{ k \geqslant 1 \mid \lambda_k \leqslant \lambda \} \right|.
$$
按照上述计算, 我们有
$$
\Psi(\lambda) = \left| \left\{ (k_1, \dots, k_n) \middle| k_i \geqslant 1, k_1^2 + \dots + k_n^2 \leqslant \frac{d^2}{\pi^2} \lambda \right\} \right|.
$$
这是在圆内的整点问题 (Gauss): $\Psi(\lambda)$ 是半径为 $\frac{d}{\pi}\sqrt{\lambda}$ 的球在第一卦限中的整点的个数, 从而
$$
\Psi(\lambda) \sim c_n \lambda^{\frac{n}{2}} \quad \Leftrightarrow \quad \lim_{\lambda \to \infty} \frac{\Psi(\lambda)}{c_n \lambda^{\frac{n}{2}}} = 1,
$$
其中 $c_n$ 是依赖于维数和边长 $d$ 的常数, 实际上, 通过计算半径为 $\frac{d}{\pi}\sqrt{\lambda}$ 的球在第一卦限中的体积, 我们知道
$$
c_n = \frac{|B_n(1)| d^n}{(2\pi)^n},
$$
其中 $B_n(1) = \frac{\pi^{\frac{n}{2}}}{\Gamma(\frac{n}{2} + 1)}$ 是 $\mathbb{R}^n$ 中单位球的体积, 所以,
$$
\Psi(\lambda) \sim \frac{d^n}{(2\sqrt{\pi})^n \Gamma(\frac{n}{2} + 1)} \lambda^{\frac{n}{2}}.
$$
我们考虑 $\lambda_k$ 的渐近大小, 其中 $k \to \infty$。我们在上式中取 $\lambda = \lambda_k$, 按上述渐近式, $\Psi(\lambda_k) \sim k$ ($k\to\infty$), 从而
$$
k \sim \frac{d^n}{(2\sqrt{\pi})^n \Gamma(\frac{n}{2} + 1)} \lambda_k^{\frac{n}{2}} = \frac{|\Omega|}{(2\sqrt{\pi})^n \Gamma(\frac{n}{2} + 1)} \lambda_k^{\frac{n}{2}}.
$$

<!-- source: PDF 916; printed: 916; transcription: first-pass; proofreading: applied -->

所以,
$$
\lambda_k \sim \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |\Omega|^{\frac{2}{n}}} k^{\frac{2}{n}}, \quad k \to \infty.
$$
我们将证明, 这个公式对于一般的区域 $\Omega$ 都成立, 这就是所谓的 Weyl 渐进公式。

**注记.** 如果 $\Omega$ 是连通的, 我们可以证明 $\lambda_1 < \lambda_2$, 也就是说第一特征值的重数是 $1$。

对于上面的例子, 这一点很容易验证。在这个例子中, 我们还看到, $\lambda_2 = \lambda_3 = \dots = \lambda_{n+1}$。

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：紧算子、自伴算子与弱收敛](77-compact-operators.md) · [下一篇：特征函数、变分原理与特征值增长](79-spectral-asymptotics.md)
