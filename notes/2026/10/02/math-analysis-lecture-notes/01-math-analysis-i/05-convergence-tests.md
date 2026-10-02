# 5：收敛判别与常数 e

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../01-math-analysis-i.md) · [校勘记录](../errata.md) · [上一篇：极限、级数与 Cauchy 列](04-limits.md) · [下一篇：指数函数与三角函数](06-exponential-trigonometric/06-01-p0059-0064.md)

<!-- source: PDF 48; printed: 48; transcription: first-pass; proofreading: applied -->



## 级数运算与向量序列的收敛

我先对前面的课程做适当的补充：

1) 收敛级数的逐项加减法与逐项数乘法：假设实数项（对于复数和 $\mathbb{R}^n$ 取值的级数也成立）的 $\sum_{k=0}^{\infty} a_k$ 和 $\sum_{k=0}^{\infty} b_k$ 收敛，$\lambda \in \mathbb{R}$，那么 $\sum_{k=0}^{\infty} (a_k \pm b_k)$ 和 $\sum_{k=0}^{\infty} \lambda \cdot a_k$ 都收敛

$$
\sum_{k=0}^{\infty} (a_k \pm b_k) = \sum_{k=0}^{\infty} a_k \pm \sum_{k=0}^{\infty} b_k, \quad \sum_{k=0}^{\infty} \lambda \cdot a_k = \lambda \left( \sum_{k=0}^{\infty} a_k \right).
$$

这两个事实的证明是极限四则运算法则的直接应用（用部分和来表示级数）。

2) （向量值序列的极限问题）对于 $\mathbb{R}^n = \{ (x_1, \cdots, x_n) \mid x_1 \in \mathbb{R}, \cdots, x_n \in \mathbb{R} \}$，我们采取如下定义的距离函数

$$
d(x, y) = \sqrt{(x_1 - y_1)^2 + \cdots + (x_n - y_n)^2}, \quad x = (x_1, \cdots, x_n), \ y = (y_1, \cdots, y_n).
$$

对于复数域 $\mathbb{C}$，我们通过 $z = x + iy$ 这种表示，可以认为 $\mathbb{C} = \mathbb{R}^2$。对于 $z_1, z_2 \in \mathbb{C}$，我们自然有 $d(z_1, z_2) = |z_1 - z_2|$，其中 $|\cdot|$ 是取复数的模长。

假设 $\{x^{(k)}\}_{k \geqslant 1}$ 是 $\mathbb{R}^n$ 中的点列，其中，$x^{(k)} = (x_1^{(k)}, x_2^{(k)}, \cdots, x_n^{(k)})$。那么，$\{x^{(k)}\}_{k \geqslant 1}$ 在 $\mathbb{R}^n$ 中收敛当且仅当它的每个分量都是收敛的实数数列，即对任意的 $i = 1, 2, \cdots, n$，$\{x_i^{(k)}\}_{k \geqslant 1}$ 在 $\mathbb{R}$ 中收敛。

我们把这个性质留在第二次作业题中来证明，请注意这是非常重要的习题，我们会在今后经常考虑在线性空间中收敛的问题。

3) 不同的距离函数的问题。我们之前的课上提到过一个距离空间上可以有几个不同的距离函数，比如在 $\mathbb{R}$ 上，还可以定义 $d(x, y) = 2|x - y|$。对于这个问题的理解可以进一步加深对收敛的理解。

假设 $d_1$ 和 $d_2$ 均为集合 $X$ 上距离函数，如果存在常数 $C_1 > 0$ 和 $C_2 > 0$，使得对任意的 $x, y \in X$，都有

$$
d_2(x, y) \leqslant C_1 d_1(x, y), \quad d_1(x, y) \leqslant C_2 d_2(x, y),
$$

那么就称这两个距离函数 $d_1$ 和 $d_2$ 是**等价的**。上面的叙述也等价于存在常数 $c > 0$ 和 $C > 0$，使得对任意的 $x, y \in X$，都有

$$
c d_1(x, y) \leqslant d_2(x, y) \leqslant C d_1(x, y),
$$

<!-- source: PDF 49; printed: 49; transcription: first-pass; proofreading: applied -->

比如说，我们在 $\mathbb{R}^n$ 上面可以定义三种距离函数：

$$
d_1(x, y) = \sum_{j=1}^n |x_j - y_j|,
$$

$$
d_2(x, y) = \sqrt{\sum_{j=1}^n (x_j - y_j)^2},
$$

$$
d_\infty(x, y) = \sup_{i=1,2,\cdots,n} |x_i - y_i|.
$$

这三个距离自然是等价的：

$$
n d_\infty(x, y) \geqslant d_1(x, y) \geqslant d_2(x, y) \geqslant d_\infty(x, y).
$$

我们还有一个重要的的例子：我们可以把 $n \times n$ 的矩阵的全体 $\mathbf{M}_n(\mathbb{R})$ 视作是 $\mathbb{R}^{n^2}$（加法就是逐个分量相加），那么 $\mathbf{M}_n(\mathbb{R})$ 也有三个距离函数：对任意的 $n \times n$ 的矩阵 $A = (A_{ij})$ 和 $B = (B_{ij})$，其中 $1 \leqslant i, j \leqslant n$，我们有

$$
d_1(A, B) = \sum_{1 \leqslant i, j \leqslant n} |A_{ij} - B_{ij}|,
$$

$$
d_2(A, B) = \sqrt{\sum_{1 \leqslant i, j \leqslant n} (A_{ij} - B_{ij})^2},
$$

$$
d_\infty(A, B) = \sup_{1 \leqslant i, j \leqslant n} |A_{ij} - B_{ij}|.
$$

回到抽象的场合：如果 $d_1$ 和 $d_2$ 是 $X$ 上两个等价的距离函数，那么它们所定义的收敛的概念是一致的，即对于任意的点列 $\{x_n\}_{n \geqslant 1} \subset X$，当 $n \to \infty$，在 $d_1$ 这个距离下 $x_n \to x \in X$ 等价于在 $d_2$ 这个距离下 $x_n \to x \in X$。证明是平凡的：假设 $x_n \xrightarrow{d_1} x$，那么对任意的 $\varepsilon > 0$，存在 $N > 0$，使得当 $n \geqslant N$ 时，我们有 $d_1(x_n, x) < \varepsilon$，所以根据距离的等价性，我们有 $d_2(x_n, x) < C_1 \varepsilon$，这表明 $x_n \xrightarrow{d_2} x$。

特别地，数学分析通常在 $\mathbb{R}^n$ 中研究各种收敛的问题，除非我们对距离有特定的要求，我们假定度量可以是上面的任意一种。

4) 对于复数和 $n \times n$ 的矩阵，我们也可以谈论乘法。此时，乘法和除法也和极限交换。我们只给出矩阵的版本，复数的版本的叙述和证明都是一样的。假设 $\{A_k\}_{k \geqslant 1}$ 和 $\{B_k\}_{k \geqslant 1}$ 均为 $n \times n$ 的矩阵的序列并且收敛，那么

- 序列 $\{A_k \cdot B_k\}_{k \geqslant 1}$ 收敛并且 $\lim_{k \to \infty} (A_k \cdot B_k) = \lim_{k \to \infty} A_k \cdot \lim_{k \to \infty} B_k$。
- 如果 $\lim_{k \to \infty} B_k$ 是可逆矩阵，那么序列 $\{A_n \cdot (B_n)^{-1}\}_{n \geqslant N}$ 收敛（$\lim_{k \to \infty} B_k$ 可逆表明存在 $N$，使得当 $k \geqslant N$ 时，$B_k$ 均可逆）并且 $\lim_{k \to \infty} A_k \cdot (B_k)^{-1} = \lim_{k \to \infty} A_k \cdot \left( \lim_{k \to \infty} B_k \right)^{-1}$。

我们将在第二次作业中证明复数的情形。

<!-- source: PDF 50; printed: 50; transcription: first-pass; proofreading: applied -->

## 列紧性与柯西判别准则

上次课的最后我们证明了单调上升并且有界的实数序列有极限，这个极限恰好是它的上确界。当然，如果 $\{x_n\}_{n\geqslant 1}$ 单调上升的但是无界，我们有 $\lim_{n\to\infty} x_n = +\infty$。利用这个结果，我们可以证明

<span id="ma-theorem-17" class="lecture-anchor"></span>**定理 17**（Bolzano-Weierstrass 的列紧性定理）。任意有界的实数序列 $\{x_n\}_{n\geqslant 1}$ 必有收敛的子列。

我们只要证明如下引理即可：

<span id="ma-lemma-18" class="lecture-anchor"></span>**引理 18。** 对任意实数数列 $\{x_n\}_{n\geqslant 1}$，我们总能找到一个单调的（上升或下降）子序列。

**证明：** 考虑下面的集合 $X \subset \{x_1, x_2, \cdots, x_n, \cdots\}$：

$$X = \left\{x_k \mid \text{对任意的 } \ell \geqslant k,\text{ 都有 } x_k \geqslant x_\ell\right\}.$$

分两种情况讨论：

- 如果 $X$ 是无限集，那么将 $X$ 中元素按照下标从小到大排列，就得到了一个递减的子序列。

- 如果 $X$ 是有限集，可以假设 $X = \{x_{i_1}, \cdots, x_{i_\ell}\}$，我们令 $y_1 = x_{i_\ell+1}$，然后归纳地定义 $y_{n+1}$：我们假设 $y_n = x_{s(n)}$ 其中 $s(n) > i_\ell$。根据 $X$ 的定义以及由于 $y_n \notin X$，我们知道存在 $x_{s(n+1)}$，其中 $s(n+1) > s(n)$ 并且 $x_{s(n+1)} > y_n$，那么我们令 $y_{n+1} = x_{s(n+1)}$。那么，$\{y\}_{n\geqslant 1}$ 是单调上升的序列。

综合两种情况，我们总有单调的子序列。$\square$

在证明 Cauchy 判别准则之前，我们先回忆一下 Cauchy 列的定义：一个距离空间 $(X, d)$ 中的点列被称作是 **Cauchy 列**，指的是对任意的 $\varepsilon > 0$，存在 $N > 0$，使得对任意的 $m, n > N$，都有 $d(x_n, x_m) < \varepsilon$。

**定理**（Cauchy 判别准则）。$\{x_n\}_{n\geqslant 1}$ 是实数的数列。那么，$\{x_n\}_{n\geqslant 1}$ 收敛当且仅当 $\{x_n\}_{n\geqslant 1}$ 是 *Cauchy* 列。

**证明：** 如果 $\{x_n\}_{n\geqslant 1}$ 收敛，我们假设 $x_n \to x$。此时，根据极限的定义，对于 $\frac{1}{2}\varepsilon$ 而言，存在 $N$，使得对于任意的 $n, m \geqslant N$，我们都有 $d(x, x_n) < \frac{1}{2}\varepsilon$，$d(x, x_m) < \frac{1}{2}\varepsilon$。所以，利用三角不等式，我们就有

$$d(x_n, x_m) \leqslant d(x, x_n) + d(x, x_m) < \frac{1}{2}\varepsilon + \frac{1}{2}\varepsilon = \varepsilon.$$

这表明收敛的序列（在任意的距离空间中）一定是 Cauchy 列。

为了说明 Cauchy 列必然收敛，我们先证明两个有用的引理：

<span id="ma-lemma-19" class="lecture-anchor"></span>**引理 19。** *Cauchy 列必有界。*

**证明：** 假设 $\{x_n\}_{n\geqslant 1}$ 是 Cauchy 列，我们先说明它是有界的。令 $\varepsilon = 1$，那么存在 $N$，使得对任意的 $m, n \geqslant N$，我们都有 $|x_n - x_m| < 1$。特别地，我们令 $m = N$，这表明对所有的 $n \geqslant N$，都有 $|x_n - x_N| \leqslant 1$，所以 $\{x_n\}_{n\geqslant N}$ 是有界的。再加上前面的 $x_1, \cdots, x_{N-1}$，这还是一个有界集合。$\square$

<!-- source: PDF 51; printed: 51; transcription: first-pass; proofreading: applied -->

<span id="ma-lemma-20" class="lecture-anchor"></span>**引理 20。** 如果一个 Cauchy 列的子列收敛，那么这个 Cauchy 列也收敛。

**证明：** 假设 $\{x_n\}_{n \geqslant 1}$ 是 Cauchy 列，$\{x_{i_k}\}_{k \geqslant 1}$ 是其子列并且 $\lim\limits_{k \to \infty} x_{i_k} = x$，我们要证明在 $(X, d)$ 中，$x_n \to x$。任意选取 $\varepsilon > 0$。首先，根据 $x_{i_k} \to x$，我们可以找到 $N_1 > 0$，使得对任意的 $k > N_1$，我们都有 $|x_{i_k} - x| < \frac{\varepsilon}{2}$；另外，根据 Cauchy 列的定义，我们有 $N_2 > 0$，使得对任意的 $n, m > N_2$，我们都有 $|x_n - x_m| < \frac{\varepsilon}{2}$。令 $N = \max\big(\min\limits_{i_k \geqslant N_1}\{i_k\}, N_2\big)$，所以当 $n \geqslant N$ 时，我们有

$$
d(x_n, x) \leqslant d(x_n, x_{i_k}) + d(x_{i_k}, x) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon,
$$

其中 $k \geqslant N_1$ 可以任意选取。 $\square$

根据上面第二个引理，我们只要构造一个收敛的子列即可。根据第一个引理，我们能找到一个有界的子列，再利用 Bolzano-Weierstrass 的列紧性，这个有界子列有一个收敛的子列。证毕。 $\square$

**注记。** *1) 相比于极限定义本身，利用 Cauchy 判别准则证明极限存在的优势在于不需要先验地知道极限的值。*

比如说，我们有

$$
1 - \frac{1}{2} + \frac{1}{3} - \cdots + \frac{(-1)^{n+1}}{n} + \cdots = \ln 2.
$$

我们可以证明上面的级数是收敛的（而不需要知道最终是 $\ln 2$）：考虑部分和 $x_n = 1 - \frac{1}{2} + \frac{1}{3} - \cdots + \frac{(-1)^{n+1}}{n}$，不妨假设 $m > n$，那么我们有

$$
x_m - x_n = \frac{(-1)^n}{n+1} + \frac{(-1)^{n+1}}{n+2} + \cdots + \frac{(-1)^{m+1}}{m}
$$

如果 $n$ 是偶数，那么，我们知道

$$
x_m - x_n = \frac{1}{n+1} - \left( \frac{1}{n+2} - \frac{1}{n+3} \right) + \cdots + \frac{(-1)^{m+1}}{m}
$$

从第二项开始每两个数一组，最后如果剩下一个数可以单独一组，我们发现这些组都是负数，从而 $x_m - x_n < \frac{1}{n}$。类似地，我们有

$$
x_m - x_n = \frac{1}{n+1} - \frac{1}{n+2} + \left( \frac{1}{n+3} - \frac{1}{n+4} \right) + \cdots + \frac{(-1)^{m+1}}{m}
$$

即从第三项开始每两个数一组，最后如果剩下一个数可以单独一组，我们发现这些组都是正数，从而 $x_m - x_n \geqslant \frac{1}{n+1} - \frac{1}{n+2}$。对 $n$ 是奇数的情况类似讨论，我们可以得到

$$
\frac{1}{(n+1)(n+2)} \leqslant |x_m - x_n| < \frac{1}{n}.
$$

所以，对任意的 $\varepsilon > 0$，任取 $N > \frac{1}{\varepsilon}$，从而当 $m > n \geqslant N$ 时，我们有 $|x_m - x_n| < \varepsilon$，这就得到一个 Cauchy 列。利用同样的想法，我们可以证明下面的命题（需要记住结论）：

<!-- source: PDF 52; printed: 52; transcription: first-pass; proofreading: applied -->

**练习。** 假设 $\{a_n\}_{n \geqslant 1}$ 是递减的正实数的数列并且 $\lim\limits_{n \to \infty} a_n = 0$，那么，级数

$$
a_1 - a_2 + a_3 - a_4 + \cdots + (-1)^{n-1} a_n + \cdots
$$

是收敛的。

我们把这个练习留做本次的作业。有一个和这个习题相关联的有趣的姊妹问题，证明和结论都值得大家研究：

<span id="ma-proposition-21" class="lecture-anchor"></span>**命题 21。** $\{a_n\}_{n \geqslant 1}$ 是递减的正实数的数列并且 $\lim\limits_{n \to \infty} a_n = 0$。假设级数 $\sum\limits_{k=1}^{\infty} a_k$ 发散。那么，对任意 $x \in \mathbb{R}$，我们可以选取一组正负号 $\iota_k \in \{\pm 1\}$，使得级数 $\sum\limits_{k=1}^{\infty} \iota_k a_k$ 收敛并且

$$
\sum_{k=1}^{\infty} \iota_k a_k = x.
$$

**证明：** 因为 $\sum\limits_{k=1}^{\infty} a_k = +\infty$，所以对任意的 $M > 0$，任意的 $n$，总存在唯一一个 $k \geqslant 0$，使得

$$
a_n + a_{n+1} + \cdots + a_{n+k-1} \leqslant M \text{ 且 } a_n + a_{n+1} + \cdots + a_{n+k-1} + a_{n+k} > M.
$$

我们不妨假设 $x > 0$，根据上面的观察，我们能找到 $n_1$，使得

$$
a_1 + a_2 + \cdots + a_{n_1-1} \leqslant x \text{ 但是 } a_1 + a_2 + \cdots + a_{n_1-1} + a_{n_1} > x.
$$

特别地，我们知道对于前面的 $n_1$ 项的和，我们有

$$
|a_1 + a_2 + \cdots + a_{n_1-1} + a_{n_1} - x| < a_{n_1}.
$$

由于前 $n_1$ 项的和已经超过了 $x$，我们现在在后面的项前面加上负号。令 $\delta_1 = a_1 + a_2 + \cdots + a_{n_1-1} + a_{n_1} - x$ 为多出来的部分，那么 $\delta_1 < a_{n_1}$。根据上面的观察，一定存在 $n_2$，使得

$$
a_{n_1+1} + a_{n_1+2} + \cdots + a_{n_2-1} \leqslant \delta_1 \text{ 且 } a_{n_1+1} + a_{n_1+2} + \cdots + a_{n_2} > \delta_1.
$$

我们现在要求级数的前 $n_2$ 项为

$$
a_1 + a_2 + \cdots + a_{n_1} - a_{n_1+1} - a_{n_1+2} - \cdots - a_{n_2}.
$$

很明显，对于 $k < n_2$，我们有

$$
0 < a_1 + a_2 + \cdots + a_{n_1} - a_{n_1+1} - a_{n_1+2} - \cdots - a_k < \delta_1.
$$

令 $-\delta_2 = a_1 + a_2 + \cdots + a_{n_1} - a_{n_1+1} - a_{n_1+2} - \cdots - a_{n_2} - x$，这是一直到 $n_2$ 为止，所求和比 $x$ 少的部分，按照定义，我们有 $\delta_2 < a_{n_2}$。然后，我们再选取 $n_3$，使得

$$
a_{n_2+1} + a_{n_2+2} + \cdots + a_{n_3-1} \leqslant \delta_2 \text{ 且 } a_{n_2+1} + a_{n_2+2} + \cdots + a_{n_3} > \delta_2.
$$

<!-- source: PDF 53; printed: 53; transcription: first-pass; proofreading: applied -->

我们现在要求级数的前 $n_3$ 项为

$$
a_1 + a_2 + \cdots + a_{n_1} - a_{n_1+1} - a_{n_1+2} - \cdots - a_{n_2} + a_{n_2+1} + a_{n_2+2} + \cdots + a_{n_3}.
$$

按照这种方式，最新得到的部分和与 $x$ 的差距都不超过 $\delta_3 < a_{n_3}$。如此重复归纳地选取正负号即可。 $\square$

*2) Cauchy 判别准则是对实数的序列来陈述的。如果在一般的距离空间 $(X, d)$ 上，Cauchy 列未必收敛（试举出一个反例），即收敛性和序列所生活的空间的性质是密切相关的。*

*3) 对复数和 $\mathbb{R}^n$ 也成立。*

<span id="ma-corollary-22" class="lecture-anchor"></span>**推论 22**（级数收敛的 Cauchy 判别准则）。实数项的级数 $\sum\limits_{k=0}^{\infty} a_k$ 收敛的充分必要条件是对任意 $\varepsilon > 0$，存在 $N > 0$，对任意自然数 $n \geqslant N$ 和任意自然数 $p \geqslant 0$，我们都有

$$
\Big| \sum_{n \leqslant k \leqslant n+p} a_k \Big| < \varepsilon.
$$

**证明：** 对任意的 $n$，令 $S_n = a_1 + \cdots + a_n$ 为部分和。级数收敛等价于说 $\{S_n\}_{n \geqslant 1}$ 收敛。根据 Cauchy 判别准则，对任意的 $\varepsilon > 0$，存在 $N > 0$，对任意自然数 $n \geqslant N$ 和 $m \geqslant N$，我们都有 $|S_n - S_m| < \varepsilon$。我们不妨假设 $m \geqslant n$，令 $m = n + p$ 即得到了推论所要求的形式。 $\square$

**注记。** *（复数或 $\mathbb{R}^n$ 中也成立）。* 另外，假设 $\sum\limits_{k=0}^{\infty} a_k$ 收敛，取 $p = 0$，上述判别法说明 $a_n \to 0$。反之则未必成立，比如考虑调和级数。

## 上极限与下极限

对于一般的实数数列，尽管极限不一定存在，但是我们总能定义它的**上极限和下极限**：任意给定实数数列 $\{x_n\}_{n \geqslant 1}$，对任意 $n \geqslant 1$，我们令

$$
\overline{x}_n = \sup_{\ell \geqslant n} x_\ell, \quad \underline{x}_n = \inf_{\ell \geqslant n} x_\ell.
$$

很明显，$\{\overline{x}_n\}_{n \geqslant 1}$ 是单调下降的序列，$\{\underline{x}_n\}_{n \geqslant 1}$ 是单调上升的序列，所以 $\{\overline{x}_n\}_{n \geqslant 1}$ 和 $\{\underline{x}_n\}_{n \geqslant 1}$ 都有极限（极限可以是无穷）。据此，我们定义数列 $\{x_n\}_{n \geqslant 1}$ 的上极限和下极限为

$$
\varlimsup_{n \to \infty} x_n = \limsup_{n \to \infty} x_n = \lim_{n \to \infty} \overline{x}_n = \lim_{n \to \infty} (\sup_{\ell \geqslant n} x_\ell),
$$

$$
\varliminf_{n \to \infty} x_n = \liminf_{n \to \infty} x_n = \lim_{n \to \infty} \underline{x}_n = \lim_{n \to \infty} (\inf_{\ell \geqslant n} x_\ell).
$$

根据定义以及极限保持不等号的性质，我们有 $\limsup\limits_{n \to \infty} x_n \geqslant \liminf\limits_{n \to \infty} x_n$。我们如下命题：

<span id="ma-proposition-23" class="lecture-anchor"></span>**命题 23。** $\{x_n\}_{n \geqslant 1}$ 是实数数列。那么，$\{x_n\}_{n \geqslant 1}$ 收敛的充分必要条件是 $\limsup\limits_{n \to \infty} x_n = \liminf\limits_{n \to \infty} x_n$。

我们会在作业中证明这个命题。

## 重要极限与常数的构造

在进一步讨论如何判断极限是否存在之前，我们再研究两个极为重要的极限：

<!-- source: PDF 54; printed: 54; transcription: first-pass; proofreading: applied -->

**例子。** $\lim\limits_{n \to \infty} n^{\frac{1}{n}} = 1$。（开 $n$ 次方目前并未定义，我们先假设自己懂（按照中学的理解））

**证明：** 首先，我们显然有 $n^{\frac{1}{n}} \geqslant 1$。其次，根据算术-几何平均值不等式[^p0054-6]（我们课程后面会严格证明这个不等式）可以得到

$$
n^{\frac{1}{n}} = (1 \cdot 1 \cdot 1 \cdots 1 \cdot \sqrt{n} \cdot \sqrt{n})^{\frac{1}{n}} \leqslant \frac{1}{n} (1 + \cdots + 1 + \sqrt{n} + \sqrt{n}) = 1 - \frac{2}{n} + \frac{2}{\sqrt{n}}.
$$

从而，$0 \leqslant n^{\frac{1}{n}} - 1 \leqslant \frac{2}{n} + \frac{2}{\sqrt{n}}$。只需要选择比较大的 $N$，就可以使得对 $n \geqslant N$ 的自然数 $n$，有 $\frac{2}{n} + \frac{2}{\sqrt{n}} < \varepsilon$。 $\square$

**例子**（Euler 常数 $e$ 的构造）。极限 $\lim\limits_{n \to \infty} (1 + \frac{1}{n})^n$ 是存在的，我们把它记做是 $e$。$e$ 还有如下的级数表达式：

$$
e = \sum_{k=0}^{\infty} \frac{1}{k!}.
$$

为了说明 $\lim\limits_{n \to \infty} (1 + \frac{1}{n})^n$ 的存在性，我们只需要说明 $x_n = (1 + \frac{1}{n})^n$ 是单调上升的有界序列。为了说明有界性，我们注意到（利用数学归纳法）对任意的 $k \geqslant 2$，

$$
k! \geqslant 2^{k-1}.
$$

根据二项式展开，我们有

$$
(1 + \frac{1}{n})^n = \sum_{k=0}^n \binom{n}{k} \frac{1}{n^k} = \sum_{k=0}^n \frac{n!}{k!(n-k)! n^k}
$$

$$
= \sum_{k=0}^n \frac{1}{k!} (1 - \frac{1}{n})(1 - \frac{2}{n}) \cdots (1 - \frac{k-1}{n}) \leqslant \sum_{k=0}^n \frac{1}{k!}.
$$

根据 $k! \geqslant 2^{k-1}$（$k \geqslant 2$），我们就有

$$
x_n = (1 + \frac{1}{n})^n \leqslant 1 + 1 + \sum_{k=1}^n \frac{1}{2^k} < 3.
$$

其中，我们用到了如下的事实：

$$
\sum_{k=1}^n \frac{1}{2^k} < 1.
$$



<!-- source: PDF 55; printed: 55; transcription: first-pass; proofreading: applied -->

下面证明 $x_n \leqslant x_{n+1}$：

$$
\begin{aligned}
(1+\frac{1}{n})^n &= \sum_{k=0}^n \frac{1}{k!}(1-\frac{1}{n})(1-\frac{2}{n})\cdots(1-\frac{k-1}{n}) \\
&< \sum_{k=0}^n \frac{1}{k!}(1-\frac{1}{n+1})(1-\frac{2}{n+1})\cdots(1-\frac{k-1}{n+1}) \\
&< \sum_{k=0}^{n+1} \frac{1}{k!}(1-\frac{1}{n+1})(1-\frac{2}{n+1})\cdots(1-\frac{k-1}{n+1}) = (1+\frac{1}{n+1})^{n+1}.
\end{aligned}
$$

为了证明 $e$ 的级数表达式，我们先说明级数 $\sum_{k=2}^{\infty} \frac{1}{k!}$ 是收敛的（这个证明很具有一般性）：注意到级数 $\sum_{k=1}^{\infty} \frac{1}{2^k}$ 是收敛的，所以，根据 Cauchy 判别准则，对于任意的 $\varepsilon > 0$，存在 $N$，使得当 $n \geqslant N$ 并且 $m \geqslant N$ 时，前 $n$ 项的部分和与前 $m$ 项的部分和的差满足

$$
\frac{1}{2^{n+1}} + \frac{1}{2^{n+2}} + \cdots + \frac{1}{2^{n+m}} < \varepsilon.
$$

我们利用 $2^{-k}$ 控制 $(k!)^{-1}$，从而对于级数 $\sum_{k=2}^{\infty} \frac{1}{k!}$ 而言，对于上述任意选定的 $\varepsilon$ 和对应的 $N$，前 $n$ 项的部分和与前 $m$ 项的部分和的差有如下的控制

$$
\frac{1}{(n+1)!} + \frac{1}{(n+2)!} + \cdots + \frac{1}{(n+m)!} \leqslant \frac{1}{2^{n+1}} + \frac{1}{2^{n+2}} + \cdots + \frac{1}{2^{n+m}} < \varepsilon.
$$

这就证明了级数的收敛性（Cauchy 判别准则）。

最终来证明这个级数的值就是 $e$。

一方面，对于任意的 $n$，我们有

$$
\begin{aligned}
(1+\frac{1}{n})^n &= \sum_{k=0}^n \binom{n}{k} \frac{1}{n^k} = \sum_{k=0}^n \frac{1}{k!}(1-\frac{1}{n})(1-\frac{2}{n})\cdots(1-\frac{k-1}{n}) \\
&\leqslant \sum_{k=0}^n \frac{1}{k!} \leqslant \sum_{k=0}^{\infty} \frac{1}{k!}.
\end{aligned}
$$

即 $x_n \leqslant \sum_{k=0}^{\infty} \frac{1}{k!}$。通过对 $n$ 取极限，我们得到 $e \leqslant \sum_{k=0}^{\infty} \frac{1}{k!}$。

另一方面，我们要利用 $x_n$ 是单调上升的这个性质。先任意选取 $n$ 和 $n_0$，使得 $n \geqslant n_0$（这两个数是待定的），我们有

$$
\begin{aligned}
e = \lim_{m\to\infty} (1+\frac{1}{m})^m &\geqslant (1+\frac{1}{n})^n = \sum_{k=0}^n \frac{1}{k!}(1-\frac{1}{n})(1-\frac{2}{n})\cdots(1-\frac{k-1}{n}) \\
&\geqslant \sum_{k=0}^{n_0} \frac{1}{k!}(1-\frac{1}{n})(1-\frac{2}{n})\cdots(1-\frac{k-1}{n}).
\end{aligned}
$$

<!-- source: PDF 56; printed: 56; transcription: first-pass; proofreading: applied -->

上面的不等式对任意的 $n$ 和 $n_0$ 都成立。我们先固定住 $n_0$，令 $n \to \infty$，就得到 $e \geqslant \sum_{k=0}^{n_0} \frac{1}{k!}$。再令 $n_0 \to \infty$，我们就有 $e \geqslant \sum_{k=0}^{\infty} \frac{1}{k!}$。

综上所述，

$$
e = \lim_{n\to\infty} (1+\frac{1}{n})^n = \sum_{k=0}^{\infty} \frac{1}{k!}.
$$

**注记。** 1) 利用 $e$ 的级数表达式很容易相对精确的计算 $e$ 的大小。$7!$ 是一个 5 位数，$8!$ 是一个 6 位数，所以只要算 6 项（前两项整数部分不算）就已经可以精确到小数点后 5 位了：
$e = 2.71828\cdots!$

2) $e$ 是一个无理数。如若不然，我们假设 $e = \frac{m}{n}$，其中 $m$ 和 $n$ 都是正整数，那么 $n! \times (e - \sum_{k=0}^n \frac{1}{k!})$ 应该是整数，然而

$$
\begin{aligned}
&n! \times (e - \sum_{k=0}^n \frac{1}{k!}) \\
&= \frac{1}{(n+1)} + \frac{1}{(n+1)(n+2)} + \frac{1}{(n+1)(n+2)(n+3)} + \frac{1}{(n+1)(n+2)(n+3)(n+4)} + \cdots \\
&< \frac{1}{(n+1)} + \frac{1}{(n+1)(n+2)} + \frac{1}{(n+2)(n+3)} + \frac{1}{(n+3)(n+4)} + \cdots \\
&= \frac{1}{(n+1)} + \left(\frac{1}{(n+1)} - \frac{1}{(n+2)}\right) + \left(\frac{1}{(n+2)} - \frac{1}{(n+3)}\right) + \cdots \\
&= \frac{2}{n+1} < 1.
\end{aligned}
$$

这表明 $n! \times (e - \sum_{k=0}^n \frac{1}{k!}) \neq 0$，矛盾。

3) $e$ 是怎么来的：历史上，$e$ 和自然对数（我们尚未定义）是在 16 世纪计算银行存款的利息时自然出现的，有兴趣的同学可以去参考 wiki 上的叙述。我们给出一个简化版本的例子（有趣）：大汉银行每年的利息是 $100\%$，数学系的司马迁同学有存款 100 元，打算一年之后买一辆 272 元的须臾牌自行车。他算了一下，存钱一年之后总资产为 200 元。几天后，大汉银行规定改了，可以每半年结算一下并且半年的利息就是 $100\% \div 2 = 50\%$，司马迁发现上半年刚到的时候就提钱出来，然后再存进去，这样子前半年的利息也有利息，所以他就可以多赚一点，这样一来，半年之后，他就有 $100 \times (1 + 0.5)$ 元钱，一年之后，再乘以 $1 + 0.5$ 的利息，他一共有 $100 \times (1 + 0.5) \times (1 + 0.5) = 100 \times (1 + 0.5)^2 = 225$ 元，总收益又多了 25 元。后来，大汉银行容许每个月都结算，并且每个月的利率是 $100\% \div 12 = \frac{1}{12}$，司马迁同学本着尽量赚利息的利息的原则算了一下，每个月都去提出钱来然后再次存进去，他一年之后的资产变成了 $100 \times (1 + \frac{1}{12})^{12} \approx 261$ 元，这只差 11 块钱就可以买车了。他高兴地发现只要不厌其烦地多存一次，最终得到的钱就会变多（$x_{n+1} \geqslant x_n$）。大汉银行最终容许每天都可以存钱取钱一次，司马迁同学每天坚持去银行，一年之后还是没有买得起自行车。

<!-- source: PDF 57; printed: 57; transcription: first-pass; proofreading: applied -->

## 控制收敛与绝对收敛

我们现在列举出极限收敛的几种常见的判别方式。尽管它们的形式并不统一，但是背后的想法却是一致的：我们需要找一个所谓的控制序列！

<span id="ma-proposition-24" class="lecture-anchor"></span>**命题 24。** 我们有如下的判断收敛的方法：

1) （双边控制）假设有三个实数序列 $\{a_n\}_{n\geqslant 1}$，$\{x_n\}_{n\geqslant 1}$ 和 $\{b_n\}_{n\geqslant 1}$，对任意的 $n \geqslant 1$，都有 $a_n \leqslant x_n \leqslant b_n$（即 $x_n$ 在左右两边分别被 $a_n$ 和 $b_n$ 控制）。如果 $\{a_n\}_{n\geqslant 1}$ 和 $\{b_n\}_{n\geqslant 1}$ 都收敛并且 $\lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n$，那么 $\{x_n\}_{n\geqslant 1}$ 收敛并且

$$
\lim_{n\to\infty} x_n = \lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n.
$$

2) （上界控制）假设有非负实数序列 $\{x_n\}_{n\geqslant 1}$ 和 $\{y_n\}_{n\geqslant 1}$，对任意的 $n \geqslant 1$，都有满足 $0 \leqslant x_n \leqslant y_n$（即 $x_n$ 被 $y_n$ 控制）。如果 $\lim_{n\to\infty} y_n = 0$，那么 $\{x_n\}_{n\geqslant 1}$ 也收敛并且 $\lim_{n\to\infty} x_n = 0$。

**证明：** 第二个命题是第一个的推论。现在证明第一个命题。注意到

$$
\limsup_{n\to\infty} x_n \leqslant \limsup_{n\to\infty} b_n = \lim_{n\to\infty} b_n,
$$

和

$$
\liminf_{n\to\infty} x_n \geqslant \liminf_{n\to\infty} a_n = \lim_{n\to\infty} a_n,
$$

所以

$$
\limsup_{n\to\infty} x_n \leqslant \liminf_{n\to\infty} x_n.
$$

这说明 $\{x_n\}_{n\geqslant 1}$ 收敛。特别地，上面不等式也给出了 $\lim_{n\to\infty} x_n = \lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n$。 $\square$

数学中很多的极限都以级数的形式出现，我们给出上述命题的级数版本：

<span id="ma-proposition-25" class="lecture-anchor"></span>**命题 25（控制收敛定理与绝对收敛的概念）。** （重要！）

1) $\sum_{k=0}^{\infty} a_k$ 是正项级数（即 $a_k \geqslant 0$，其中 $k \geqslant 1$），那么 $\sum_{k=0}^{\infty} a_k$ 收敛当且仅当存在常数 $M$，使得每个部分和 $S_n = \sum_{k=0}^n a_k \leqslant M$。

2) （正项级数的控制收敛定理）$\sum_{k=0}^{\infty} a_k$ 和 $\sum_{k=0}^{\infty} b_k$ 是正项级数。假设对任意 $k \geqslant 0$，都有 $a_k \leqslant b_k$（即 $b_k$ 控制了 $a_k$）。如果 $\sum_{k=0}^{\infty} b_k$ 收敛，那么 $\sum_{k=0}^{\infty} a_k$ 也收敛（等价的表述是若 $\sum_{k=0}^{\infty} a_k$ 发散，那么 $\sum_{k=0}^{\infty} b_k$ 也发散）。

3) （绝对收敛的概念）考虑实数项的级数 $\sum_{k=0}^{\infty} a_k$。如果 $\sum_{k=0}^{\infty} |a_k|$ 收敛，那么 $\sum_{k=0}^{\infty} a_k$ 也收敛。此时，我们称这个级数是**绝对收敛的**（即加了绝对值之后收敛）。

<!-- source: PDF 58; printed: 58; transcription: first-pass; proofreading: applied -->

**证明：** 第一个命题的证明是单调递增的有界数列的必有极限的应用；第二个命题是第一个命题的直接推论。为了证明第三个命题，我们用级数收敛的 Cauchy 判别法：由于 $\sum_{k=0}^{\infty} |a_k|$ 收敛，所以对任意的 $\varepsilon > 0$，存在 $N$，使得对任意的 $n \geqslant N$ 和任意的 $p \geqslant 0$，我们有 $\big| \sum_{n \leqslant k \leqslant n+p} |a_k| \big| < \varepsilon$。根据三角不等式，我们就有

$$
\big| \sum_{n \leqslant k \leqslant n+p} a_k \big| \leqslant \sum_{n \leqslant k \leqslant n+p} |a_k| < \varepsilon,
$$

所以，$\sum_{k=0}^{\infty} a_k$ 收敛。 $\square$

**注记。** 上面的 2) 和 3) 结合在一起非常好用：为了证明一个级数 $\sum_{k=0}^{\infty} a_k$ 收敛，很多情况下只要说明它绝对收敛就可以了，此时，再找一个收敛的正项级数 $\sum_{k=0}^{\infty} b_k$ 控制 $\sum_{k=0}^{\infty} |a_k|$ 即可。

**用较大的收敛级数来控制较小的级数从而证明较小级数是收敛的，这是分析中最基本一个技术和想法。**

然而，这个想法貌似存在着不合理的地方：直观上，证明更大的级数收敛是比证明原来的小一点的级数收敛更难的事情。真正的解释是理解这个想法的核心（这在定理叙述中无法看出来）：通过适当选取较大的级数应容易计算。

**例子。** 我们给出上述命题的几个简单应用：

1) 交错项的调和级数 $\sum_{k=1}^{\infty} \frac{(-1)^k}{k}$ 是收敛的但是不绝对收敛。

2) 级数 $\sum_{k=1}^{\infty} \frac{1}{k^2}$ 是收敛的：我们可以用 $\sum_{k=2}^{\infty} \frac{1}{(k-1)k}$ 作为控制级数，此时，通过将后一个级数中的单项写成 $\frac{1}{k-1} - \frac{1}{k}$ 的形式很容易算出部分和（望远镜求和法）。

3) 级数 $(e = ) \sum_{k=0}^{\infty} \frac{1}{k!}$ 收敛：我们可以用 $\sum_{k=2}^{\infty} \frac{1}{2^k}$ 作为控制级数，因为等比数列更容易求和。

**练习。** 绝对收敛的概念对于复数项的级数或者在线性空间中（包括矩阵）取值的级数也成立，我们这里只考虑复数的情形，其余的我们会有更为一般的讨论：

考虑复数项的级数 $\sum_{k=0}^{\infty} a_k$。如果 $\sum_{k=0}^{\infty} |a_k|$ 收敛，证明，$\sum_{k=0}^{\infty} a_k$ 也收敛，其中 $|\cdot|$ 是取复数的模长。

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../01-math-analysis-i.md) · [校勘记录](../errata.md) · [上一篇：极限、级数与 Cauchy 列](04-limits.md) · [下一篇：指数函数与三角函数](06-exponential-trigonometric/06-01-p0059-0064.md)

[^p0054-6]: 给定 $n$ 个正实数 $a_1, a_2, \cdots, a_n$，它们的算术平均值 $A_M$ 和几何平均值 $G_M$ 分别定义为
    $$ A_M = \frac{a_1 + a_2 + \cdots + a_n}{n}, \quad G_M = (a_1 \cdot a_2 \cdot \cdots \cdot a_n)^{\frac{1}{n}}. $$
    那么，$G_M \leqslant A_M$ 并且如果等号成立当且仅当 $a_1 = a_2 = \cdots = a_n$。
