# 77 紧算子、自伴算子与弱收敛

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：76.1 习题(利用变分与Riesz表示定理解微分方程):一个弹性力学的模型](76-elliptic-boundary/76-03-p0899-0899.md) · [下一篇：紧算子谱理论与 Laplace 算子](78-spectral-decomposition.md)

<!-- source: PDF 900; printed: 900; transcription: first-pass; proofreading: applied -->

## 77 完备内积空间上的紧算子, 自伴算子与弱收敛理论


为了研究有界区域上 Laplace 算子的特征值问题, 我们还需要引入紧算子的概念。直观上, 我们可以将紧算子理解成最接近于有限维线性映射的线性算子。假设 $(X, \|\cdot\|_X)$ 和 $(Y, \|\cdot\|_Y)$ 是两个完备的赋范线性空间, 给定连续线性映射
$$T : X \to Y.$$

<span id="ma-definition-514" class="lecture-anchor"></span>**定义 514**. 如果对任何的有界集 $A \subset X$（即存在 $M > 0$, 使得对任意的 $a \in A$, 总有 $\|a\|_X \leqslant M$）, 对 $T(A) \subset Y$ 中的任意点列 $\{T(x_k)\}_{k\geqslant 1}$, 总能找到一个在 $Y$ 中收敛的子列, 那么, 我们就称 $T$ 是**紧算子**。

要强调是, 当谈论一个算子是紧算子的时候, 我们总是事先假定它是有界线性算子。

我们罗列几个关于紧算子的基本性质:

<span id="ma-proposition-515" class="lecture-anchor"></span>**命题 515**. 1)（紧算子是双边理想）假设 $(X, \|\cdot\|_X)$, $(Y, \|\cdot\|_Y)$ 和 $(Z, \|\cdot\|_Z)$ 是完备的赋范线性空间, 假设
$$T : X \to Y, \quad S : Y \to Z$$
是连续线性映射, 如果 $T$ 或者 $S$ 其中之一为紧算子, 那么它们的复合 $S \circ T : X \to Z$ 也是紧算子。

2)（紧算子的集合是闭的）给定 $(X, \|\cdot\|_X)$ 和 $(Y, \|\cdot\|_Y)$ 是完备的赋范线性空间和连续线性映射
$$T : X \to Y.$$
假设我们有一列紧算子
$$T_k : X \to Y, \quad k = 1, 2, \cdots,$$
并且在算子的意义下 $T_k \to T$, 这里的收敛性指的是
$$\lim_{k\to\infty} \|T_k(x) - T(x)\|_Y = 0$$
对所有的 $X$ 中的单位球中的点 $x$（即 $\|x\|_X \leqslant 1$）一致地成立, 也就是说, 对任意的 $\varepsilon > 0$, 存在 $N > 0$, 当 $k \geqslant N$ 时, 对任意的 $X$ 中的单位球中的点 $x$, 我们有
$$\|T_k(x) - T(x)\|_Y < \varepsilon,$$
那么, $T$ 也是紧算子。

3)（有限秩算子是紧的）给定 $(X, \|\cdot\|_X)$ 和 $(Y, \|\cdot\|_Y)$ 是完备的赋范线性空间和连续线性映射
$$T : X \to Y.$$
如果 $T$ 是有限秩的算子, 也就是说 $T$ 的像 $T(X)$ 是 $Y$ 中的有限维的线性子空间, 那么, $T$ 是紧算子。

<!-- source: PDF 901; printed: 901; transcription: first-pass; proofreading: applied -->

**证明:** 证明本身对我们后面的应用并没有影响, 为了完整起见, 我们还是在这里给出证明。

先证明 1)。如果 $T$ 是紧算子, 任取有界点列 $\{x_k\}_{k\geqslant 1} \subset X$, 利用紧性可抽取子列 (仍记为 $\{x_k\}_{k\geqslant 1}$), 使得 $\{T(x_k)\}_{k\geqslant 1}$ 在 $Y$ 中收敛。由于连续映射把收敛的序列映射为收敛的序列, 所以, $\{S(T(x_k))\}_{k\geqslant 1}$ 在 $Z$ 中收敛。这表明 $S \circ T$ 是紧算子。

如果 $S$ 是紧算子, 任取有界点列 $\{x_k\}_{k\geqslant 1} \subset X$, 令 $A=\{x_k\}_{k\geqslant 1}$。利用 $T$ 是有界线性算子, $T(A)$ 是 $Y$ 中的有界集合, 所以, 利用 $S$ 是紧算子, 可以选取像点列的子列 (仍记为 $\{T(x_k)\}_{k\geqslant 1} \subset T(A)$), 使得 $\{S(T(x_k))\}_{k\geqslant 1} \subset Z$ 是收敛的序列。这表明, 对原点列可以选取相应子列 (仍记为 $\{x_k\}_{k\geqslant 1} \subset A$), 使得 $\{S(T(x_k))\}_{k\geqslant 1}$ 在 $Z$ 中收敛, 从而 $S \circ T$ 是紧算子。

现在证明 2)。任取有界点列 $\{x_k\}_{k\geqslant 1} \subset X$, 令 $A=\{x_k\}_{k\geqslant 1}$, 并且对任意的 $a \in A$, $\|a\|_X \leqslant M$, 其中 $M>0$。令
$$\frac{1}{M} \cdot A = \left\{ \frac{1}{M} a \mathrel{\Big|} a \in A \right\},$$
根据 $T$ 的线性, 我们知道原点列在 $A$ 中有子列使得其像收敛等价于缩放后的点列在 $\frac{1}{M} A$ 中有子列使得其像收敛。所以, 通过把 $A$ 替换成 $\frac{1}{M} A$, 我们总是可以假设 $A$ 落在 $X$ 中的单位球里。我们利用对角线法则来选取 $A$ 中的收敛子列:

对于 $T_1$ 而言, 利用紧性, 可以抽取原点列的子列 $\{x_{1,k}\}_{k\geqslant 1} \subset A$, 使得 $T_1(x_{1,k})$ 在 $Y$ 中收敛;

对于 $T_2$ 而言, 由于 $\{x_{1,k}\}_{k\geqslant 1}$ 是有界的, 利用紧性, 存在 $\{x_{2,k}\}_{k\geqslant 1} \subset \{x_{1,k}\}_{k\geqslant 1}$ 是子序列, 使得 $T_2(x_{2,k})$ 在 $Y$ 中收敛, 我们还要求 $x_{2,1} = x_{1,2}$;

$\cdots \cdots$;

对于 $T_{m+1}$ 而言, 由于 $\{x_{m,k}\}_{k\geqslant 1}$ 是有界的, 利用紧性, 存在 $\{x_{m+1,k}\}_{k\geqslant 1} \subset \{x_{m,k}\}_{k\geqslant 1}$ 是子序列, 使得 $T_{m+1}(x_{m+1,k})$ 在 $Y$ 中收敛, 我们还要求 $x_{m+1,1} = x_{m,2}$;

$\cdots \cdots$;

此时, 我们考虑序列 $\{x_{m,1}\}_{m\geqslant 1}$。很明显, 对任意的 $k \geqslant 1$, 当 $m \geqslant \ell$ 时, 我们有 $\{x_{m,1}\}_{m\geqslant \ell} \subset \{x_{\ell,k}\}_{k\geqslant 1}$, 从而, 对任意的 $\ell$, $\{T_\ell(x_{m,1})\}_{m\geqslant 1}$ 在 $Y$ 中收敛。我们下面说明 $\{T(x_{m,1})\}_{m\geqslant 1}$ 是 $Y$ 中的 Cauchy 列即可（注意到 $\{x_{m,1}\}_{m\geqslant 1}$ 落在 $X$ 的单位球里）: 对任意的 $\varepsilon$, 存在 $\ell_1$ 和 $\ell_2$, 使得对任意的 $X$ 中的单位球中的点 $x$, 我们有
$$\|T_{\ell_1}(x) - T(x)\|_Y < \frac{\varepsilon}{4}, \quad \|T_{\ell_2}(x) - T(x)\|_Y < \frac{\varepsilon}{4}.$$
对于 $\ell_i$ 而言, 其中 $i = 1$ 和 2, 由于 $\{T_{\ell_i}(x_{m,1})\}_{m\geqslant 1}$ 在 $Y$ 中收敛, 所以存在 $N > 0$, 使得当 $m_1, m_2 \geqslant N$ 时, 我们有
$$\|T_{\ell_i}(x_{m_1,1}) - T_{\ell_i}(x_{m_2,1})\|_Y < \frac{\varepsilon}{4}.$$
所以, 对任意的 $\varepsilon > 0$, 存在 $N > 0$, 使得当 $m_1, m_2 \geqslant N$ 时, 我们有
$$\begin{aligned}
\|T(x_{m_1,1}) - T(x_{m_2,1})\|_Y &\leqslant \|T(x_{m_1,1}) - T_{\ell_1}(x_{m_1,1})\|_Y + \|T_{\ell_1}(x_{m_1,1}) - T_{\ell_1}(x_{m_2,1})\|_Y \\
&\quad + \|T_{\ell_1}(x_{m_2,1}) - T_{\ell_2}(x_{m_2,1})\|_Y + \|T_{\ell_2}(x_{m_2,1}) - T(x_{m_2,1})\|_Y \\
&< \varepsilon.
\end{aligned}$$

<!-- source: PDF 902; printed: 902; transcription: first-pass; proofreading: applied -->

所以 2) 成立。

现在证明 3)。我们在 $T(X)$ 配备上 $Y$ 所诱导的范数, 此时, $(T(X), \|\cdot\|_Y)$ 是有限维的赋范线性空间, 由于有限维赋范线性空间上的范数都是等价的, 所以, 如果我们用常用的 Euclid 范数, 那么, 由于 $T(A)$ 是有界集合, 所以有收敛子列。 $\Box$

**例子**. 我们研究一个非紧算子的例子。假设 $(H, (\cdot, \cdot))$ 是可分的完备内积空间, 从而, 我们可以找到一组 Hilbert 基 $\{e_k\}_{k\geqslant 1}$。特别地, 由于 $e_k$ 均为单位长的, 所以 $A = \{e_k\}_{k\geqslant 1}$ 是有界集。我们现在考虑恒同映射:
$$\text{Id} : H \to H,$$
$$x \mapsto x,$$
由于当 $k \neq l$ 时, $\|e_k - e_l\| = \sqrt{2}$, 我们知道 $\text{Id}$ 是紧算子当且仅当 $H$ 是有限维的空间: 如果 $\{e_k\}_{k\geqslant 1}$ 是无限序列, 那么, $\|e_{k+1} - e_k\| = \sqrt{2}$ 表明这不是 Cauchy 列。

上面这个例子中所选取的集合 $\{e_k\}_{k\geqslant 1}$ 通常不是紧的, 为了给出这个集合的一个更好的刻画, 我们引入一个与分布类似的概念:

<span id="ma-definition-516" class="lecture-anchor"></span>**定义 516**. 假设 $(H, (\cdot, \cdot))$ 是可分的完备内积空间, 给定 $\{x_k\}_{k\geqslant 1} \subset H$ 是一个点列。如果对任意的 $y \in H$, 我们都有
$$(x_k, y) \to (x, y),$$
那么, 我们就称 $\{x_k\}_{k\geqslant 1}$ **弱收敛**到 $x$。我们把弱收敛记做是
$$x_k \rightharpoonup x, \quad \text{或 } x_k \xrightarrow{w} x.$$

**例子**. 考虑可分完备内积空间 $H$ 的一组 Hilbert 基 $\{e_k\}_{k\geqslant 1}$, 我们来说明 $e_k \rightharpoonup 0$:
实际上, 对任意的 $x \in H$, 我们可以把 $x$ 唯一地写成
$$x = \sum_{k=1}^\infty a_k \cdot e_k, \quad a_k = (x, e_k), k = 1, 2, \cdots.$$
根据 Parseval 等式, 我们有
$$\|x\|^2 = \sum_{k=1}^\infty |a_k|^2 < \infty.$$
所以, $\lim_{k\to\infty} |a_k| = 0$。所以, 对任意的 $x \in H$, 我们有
$$\lim_{k\to\infty} (x, e_k) = 0.$$

**注记**. 弱极限有如下三个明显的性质:

1)（弱极限的唯一性）$(H, (\cdot, \cdot))$ 是可分的完备内积空间, 给定 $\{x_k\}_{k\geqslant 1} \subset H$ 是一个点列。假设当 $k \to \infty$ 时, 我们有
$$x_k \rightharpoonup x, \quad x_k \rightharpoonup x',$$

<!-- source: PDF 903; printed: 903; transcription: first-pass; proofreading: applied -->

其中 $x, x' \in H$, 那么 $x = x'$。
这是因为按照定义, 我们有
$$(x_k, x - x') \to (x, x - x'), \quad (x_k, x - x') \to (x', x - x').$$
取差, 我们就得到
$$(x - x', x - x') = 0.$$
所以, $x = x'$。

2)（收敛意味着弱收敛）$(H, (\cdot, \cdot))$ 是可分的完备内积空间, 给定 $\{x_k\}_{k\geqslant 1} \subset H$, 那么,
$$x_k \to x \implies x_k \rightharpoonup x.$$

实际上, 对任意的 $y$, 我们有
$$|(x_k, y) - (x, y)| = |(x_k - x, y)| \leqslant \|x_k - x\| \|y\| \to 0.$$
这表明 $\lim_{k\to\infty} (x_k, y) = (x, y)$。

<span id="ma-proposition-517" class="lecture-anchor"></span>**命题 517** (弱收敛在连续映射下被保持). 给定可分的完备内积空间 $(H, (\cdot, \cdot))$ 和 $(H', (\cdot, \cdot)')$, $A : H \to H'$ 是连续线性映射。假设 $\{x_k\}_{k\geqslant 1} \subset H$ 弱收敛到 $x$, 即 $x_k \rightharpoonup x$, 那么, $\{A(x_k)\}_{k\geqslant 1} \subset H'$ 弱收敛到 $A(x)$, 即 $A(x_k) \rightharpoonup A(x)$。

为了证明这个命题, 我们需要引入对偶算子的概念: 对任意给定的 $x' \in H'$, 对任意的 $x \in H$, 根据 Cauchy-Schwarz 不等式, 我们有
$$|(Ax, x')| \leqslant \|Ax\|_{H'} \|x'\|_{H'} \leqslant C \|x\|_H \|x'\|_{H'}.$$
其中, 最后一步我们用到了 $A$ 是有界的。令 $C' = C \|x'\|_{H'}$, 那么,
$$|(Ax, x')| \leqslant C' \|x\|_H.$$
所以, 线性映射
$$H \to \mathbb{C}, \quad x \mapsto (Ax, x'),$$
是 $H$ 上的连续线性泛函, 根据 Riesz 表示定理, 我们存在 $H$ 中的元素 $A^*(x')$（它由 $A$ 和 $x'$ 所决定）, 使得
$$(Ax, x') = (x, A^*(x')).$$
这样, 我们就构造了映射
$$A^* : H' \to H.$$
利用等式 $(Ax, x') = (x, A^* x')$, 很容易看出 $A^*$ 为线性映射。为了证明 $A^*$ 是有界的, 根据
$$|(x, A^*(x'))| = |(Ax, x')| \leqslant \|Ax\|_{H'} \|x'\|_{H'} \leqslant C \|x\|_H \|x'\|_{H'},$$

<!-- source: PDF 904; printed: 904; transcription: first-pass; proofreading: applied -->

其中 $x$ 和 $x'$ 是任意选取的, 我们可以选取 $x = A^*(x')$, 从而,

$$|(A^*(x'), A^*(x'))| \leqslant C \|A^*(x')\|_H \|x'\|_{H'},$$

所以,

$$\|A^*(x')\|_H \leqslant C \|x'\|_{H'}.$$

我们注意到常数 $C$ 这里的选取是和 $A$ 所对应的界是一致的。

现在回到命题的证明:

**证明**: 为了证明 $Ax_k \rightharpoonup Ax$, 我们证明对任意的 $x' \in H'$, $(Ax_k, x') \to (Ax, x')$, 这等价于去证明 $(x_k, A^*x') \to (x, A^*x')$。根据 $\{x_k\}_{k \geqslant 1}$ 的弱收敛性, 这是显然的。 $\square$

我们之所以引入弱收敛的概念, 是因为在可分的完备内积空间中, 有界序列在弱拓扑的意义下是仍然是列紧的 (和有限维的情况类似):

<span id="ma-theorem-518" class="lecture-anchor"></span>**定理 518**. 假定 $\{x_k\}_{k \geqslant 1}$ 是可分的完备内积空间 $(H, (\cdot, \cdot))$ 中的一个有界序列。那么, 存在一个子序列 $\{x_{k_i}\}_{i \geqslant 1}$ 和 $x_\infty \in H$, 使得

$$x_{k_i} \rightharpoonup x_\infty.$$

**证明**: 选定 $H$ 的一组 Hilbert 基 $\{e_j\}_{j \geqslant 1}$, 对任意的 $k$, 我们可以将 $x_k$ 写成

$$x_k = x_k^1 \cdot e_1 + x_k^2 \cdot e_2 + x_k^3 \cdot e_3 + \cdots,$$

其中对任意的 $k$ 和 $j$, $x_k^j \in \mathbb{C}$。根据 $\{x_k\}_{k \geqslant 1}$ 有界性和对角线法则, 我们可以选取 $k_1, k_2, \cdots, k_j, \cdots$, 对任意 $j$, 极限 $\lim_{i \to \infty} x_{k_i}^j$ 都存在, 我们记

$$x_\infty^j = \lim_{i \to \infty} x_{k_i}^j.$$

换句话说, 对任意的 $j \geqslant 1$, 极限

$$\lim_{i \to \infty} (x_{k_i}, e_j)$$

存在。所以这个子序列的每个点的每个分量 (在给定的 Hilbert 基下) 都是收敛的。

我们现在说明, $x_\infty = \sum_{j=1}^\infty x_\infty^j e_j$ 是在 $H$ 中良好定义的元素。为此, 只要说明 $\sum_{j=1}^\infty |x_\infty^j|^2$ 有界即可: 假设对任意的 $k$, $\|x_k\| \leqslant A$, 那么, 由于 $\lim_{i \to \infty} |x_{k_i}^j|^2 = |x_\infty^j|^2$, 根据 Fatou 引理, 我们有

$$\sum_{j=1}^\infty |x_\infty^j|^2 = \sum_{j=1}^\infty \lim_{i \to \infty} |x_{k_i}^j|^2 \leqslant \liminf_{i \to \infty} \sum_{j=1}^\infty |x_{k_i}^j|^2 \leqslant A^2.$$

特别地, 我们还证明了 $\|x_\infty\| \leqslant A$。

最终, 我们来证明弱收敛: 当 $i \to \infty$ 时, $x_{k_i} \rightharpoonup x_\infty$。对任何 $y \in H$, 我们把 $y$ 按照分量写开:

$$y = \sum_{1 \leqslant j \leqslant N} a_j e_j + \underbrace{\sum_{j \geqslant N+1} a_j e_j}_{= y'}.$$

<!-- source: PDF 905; printed: 905; transcription: first-pass; proofreading: applied -->

其中, 我们通过选取较大 $N$, 使得

$$\|y'\| < \frac{1}{4A} \varepsilon.$$

令 $B=\max(1,|a_1|,\ldots,|a_N|)$。由于 $N$ 固定, 所以通过选取足够大的 $i$, 我们可以使得对每个 $j \leqslant N$, 我们都有

$$|(x_{k_i} - x_\infty, e_j)| \leqslant \frac{\varepsilon}{2NB}.$$

这表明

$$\begin{aligned}
|(x_{k_i} - x_\infty, y)| &\leqslant |(x_{k_i} - x_\infty, y')| + \sum_{j \leqslant N} |a_j|\, |(x_{k_i} - x_\infty, e_j)| \\
&\leqslant 2A \times \frac{\varepsilon}{4A} + NB \times \frac{\varepsilon}{2NB}
\end{aligned}$$

从而, 当 $i \to \infty$ 时, $(x_{k_i} - x_\infty, y) \to 0$, 命题得证。 $\square$

上述运用 Fatou 引理的一段证明中表明弱极限下范数会变小:

<span id="ma-corollary-519" class="lecture-anchor"></span>**推论 519**. 假设 $x_k \rightharpoonup x$, 那么

$$\|x\| \leqslant \liminf_{k \to \infty} \|x_k\|.$$

我们知道, 如果一个点列 $\{x_k\}_{k \geqslant 1}$ 是收敛到 $x$ 的, 那么, 相应的范数也收敛, 即 $\|x\| = \lim_{k \to \infty} \|x_k\|$。我们之前见过, 给定一组 Hilbert 基 $\{e_k\}_{k \geqslant 1}$, 它们不收敛但是弱收敛到 $0$, 而

$$\|0\| < \liminf_{k \to \infty} \|e_k\| = 1.$$

下面的命题表明, 范数是否连续是从弱极限升级成为极限的唯一障碍:

<span id="ma-proposition-520" class="lecture-anchor"></span>**命题 520**. 假定 $\{x_k\}_{k \geqslant 1}$ 是可分的完备内积空间 $(H, (\cdot, \cdot))$ 中的一个有界序列并且 $x_k \rightharpoonup x_\infty$。如果

$$\lim_{k \to \infty} \|x_k\| = \|x_\infty\|,$$

那么,

$$\lim_{k \to \infty} x_k \overset{H}{=} x_\infty.$$

**证明**: 我们只要证明 $\|x_k - x_\infty\|^2 \to 0$ 即可。所以, 我们计算

$$\|x_k - x_\infty\|^2 = \underbrace{\|x_k\|^2 + \|x_\infty\|^2}_{\to 2\|x_\infty\|^2} - \underbrace{2\mathfrak{R}((x_k, x_\infty))}_{\to 2\|x_\infty\|^2}.$$

后面一项的极限是 $2\|x_\infty\|^2$, 我们用到了 $x_k \rightharpoonup x_\infty$。所以, 上面式子的极限为 $0$, 命题得证。 $\square$

我们回到紧算子的理论。紧算子的一个重要的作用是它也可以将弱收敛的序列升级为收敛的序列:

<span id="ma-theorem-521" class="lecture-anchor"></span>**定理 521**. 给定可分的完备内积空间 $(H, (\cdot, \cdot))_H$ 和 $(H', (\cdot, \cdot)')_{H'}$, $A : H \to H'$ 是连续线性映射。如下两个叙述是等价的:

<!-- source: PDF 906; printed: 906; transcription: first-pass; proofreading: applied -->

1) $A$ 是紧算子;

2) 对 $H$ 中任意 (有界的) 弱收敛序列 $x_k \rightharpoonup x_\infty$, 那么在 $H'$ 中, 我们有

$$A(x_k) \xrightarrow{H'} A(x_\infty).$$

**注记**. 上述 2) 有界性假设可以去掉, 这需要用到泛函分析中的共鸣定理。在其它很多场合下也不需要空间是可分的, 但是我们满足于这样的叙述, 因为它们后面的应用是足够的。

**证明**: 2) $\Rightarrow$ 1) 是显然的: 任取 $H$ 中的有界点列, 利用[定理 518](#ma-theorem-518) 可以抽取弱收敛子列 (仍记为 $\{x_k\}_{k\geqslant 1}$), 使得 $x_k \rightharpoonup x_\infty$。所以, 2) 表明 $A(x_k) \to A(x_\infty)$, 这说明 $A$ 是紧算子。

现在证明 1) $\Rightarrow$ 2)。由于 $A$ 是连续的, 所以在 $H'$ 中, 我们一定有

$$A(x_k) \rightharpoonup A(x_\infty).$$

因为 $A$ 是紧算子并且 $\{x_k\}_{k \geqslant 1}$ 是有界集, 所以, $\{A(x_k)\}_{k \geqslant 1}$ 中的任意子序列都包含收敛的子序列。根据弱极限的唯一性, 这个收敛子序列 (在 $\|\cdot\|_{H'}$ 下) 必须收敛到 $A(x_\infty)$。所以, $\{A(x_k)\}_{k \geqslant 1}$ 中的任意子序列所包含的收敛子序列的极限都是 $A(x_\infty)$。我们在一年级第一学期学习极限的时候就证明了这个序列必为 Cauchy 列, 从而整个序列收敛。 $\square$

我们现在研究所谓的自伴算子, 它们是线性代数中的 Hermite 矩阵或者是实对称矩阵的推广。

<span id="ma-definition-522" class="lecture-anchor"></span>**定义 522**. 给定可分的完备内积空间 $(H, (\cdot, \cdot))$, $A : H \to H$ 一个连续的线性自同态, 如果 $A = A^*$, 我们就称 $A$ 是自伴的。换而言之, 对任意的 $x, y \in H$, 我们均有

$$(Ax, y) = (x, Ay).$$

给定一个 $H$ 到自身的连续线性映射, 我们用 $\sigma(A)$ 表示它的特征值的集合, 即

$$\sigma(A) = \{\lambda \in \mathbb{C} \mid \text{存在 } x \neq 0, \text{ 使得 } A(x) = \lambda x\}.$$

对于 $\lambda \in \sigma(A)$, 我们定义其特征子空间为

$$H_\lambda = \{x \in H \mid A(x) = \lambda x\}.$$

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../03-math-analysis-iii.md) · [校勘记录](../errata.md) · [上一篇：76.1 习题(利用变分与Riesz表示定理解微分方程):一个弹性力学的模型](76-elliptic-boundary/76-03-p0899-0899.md) · [下一篇：紧算子谱理论与 Laplace 算子](78-spectral-decomposition.md)
