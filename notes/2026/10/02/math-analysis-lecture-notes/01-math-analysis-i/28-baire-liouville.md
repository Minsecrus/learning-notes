# 28 Baire 纲定理与 Liouville 定理

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../01-math-analysis-i.md) · [校勘记录](../errata.md) · [上一篇：27.1 作业:振荡积分](27-stieltjes-mean-value/27-03-p0290-0295.md) · [下一篇：振荡与衰减、期末考试与寒假作业](29-oscillation-decay/29-01-p0306-0312.md)

<!-- source: PDF 296; printed: 296; transcription: first-pass; proofreading: applied -->

## 28 一元微积分拾遗：Baire 纲定理及其应用，原函数的初等函数表示定理：Liouville 定理


### Baire 定理以及应用

<span id="ma-theorem-160" class="lecture-anchor"></span>**定理 160** (Baire). $(X, d)$ 是完备的距离空间，那么任意可数个稠密的开集的交仍然是稠密的，即若 $\{U_n\}_{n \geqslant 1}$ 是可数个稠密的开集，那么 $U_\infty = \displaystyle\bigcap_{n \geqslant 1} U_n$ 是稠密的。

在第二课中，我们就已经给出了稠密性的定义：$U \subset X$ 是子集。如果对任意的 $x \in X$ 和任意的 $\varepsilon > 0$，都存在 $y \in U$，使得 $d(y, x) < \varepsilon$，我们就称 $U$ 在 $X$ 中是稠密的。我们注意到，$U_\infty$ 未必是开集，因为开集只在有限的交的操作下封闭。

**证明：** 任选 $x \in X$ 和 $\varepsilon_0 > 0$，我们将在 $U_\infty$ 中找到一个点 $x_\infty$，使得 $d(x_\infty, x) < 2\varepsilon_0$。为此，我们将归纳地构造 $X$ 中的点列 $\{x_n\}_{n \geqslant 1}$。

首先，根据 $U_1$ 的稠密性，存在 $x_1 \in U_1$，使得 $d(x_1, x) < \varepsilon_0$。再根据 $U_1$ 是开集，我们可以找到 $\varepsilon_1 > 0$，使得 $\overline{B(x_1, 2\varepsilon_1)} \subset U_1$，其中 $\overline{B(x_1, 2\varepsilon_1)}$ 是闭球，即 $\overline{B(x_1, 2\varepsilon_1)} = \left\{ y \in X \mid d(y, x_1) \leqslant 2\varepsilon_1 \right\}$。另外，通过缩小 $\varepsilon_1$，我们还可以要求 $2\varepsilon_1 < \varepsilon_0$。

我们用 $x_1$ 代替 $x$，用 $\varepsilon_1$ 代替 $\varepsilon_0$，重复上面的过程：根据 $U_2$ 的稠密性，存在 $x_2 \in U_2$，使得 $d(x_2, x_1) < \varepsilon_1$。根据 $U_2$ 是开集，我们可以找到 $\varepsilon_2 > 0$，使得 $\overline{B(x_2, 2\varepsilon_2)} \subset U_2$ 并且可以进一步要求 $2\varepsilon_2 < \varepsilon_1$。

重复以上过程，我们就得到了 $\{x_n\}_{n \geqslant 0}$ 和数列 $\{\varepsilon_n\}_{n \geqslant 0}$（其中 $x_0 = x$，$\varepsilon_0$ 是一开始选取的正半径），使得对任意的 $n \geqslant 0$，有

1. $x_{n+1} \in U_{n+1}$ 并且 $d(x_{n+1}, x_n) < \varepsilon_n$；

2. $\overline{B(x_{n+1}, 2\varepsilon_{n+1})} \subset U_{n+1}$；

3. $0 < 2\varepsilon_{n+1} < \varepsilon_n$。

特别地，根据第三条，我们有 $\varepsilon_{n+k} < 2^{-k} \varepsilon_n$。

我们现在说明 $\{x_n\}_{n \geqslant 1}$ 是 Cauchy 列。对任意的 $n \geqslant 0$ 和 $p \geqslant 1$，我们有

$$d(x_{n+p}, x_n) \leqslant d(x_{n+p}, x_{n+p-1}) + d(x_{n+p-1}, x_{n+p-2}) + \cdots + d(x_{n+1}, x_n)$$

$$< \varepsilon_{n+p-1} + \varepsilon_{n+p-2} + \cdots + \varepsilon_n$$

$$\leqslant 2^{-(p-1)}\varepsilon_n + 2^{-(p-2)}\varepsilon_n + \cdots + \varepsilon_n$$

$$< 2\varepsilon_n.$$

这表明，对一切 $p \geqslant 0$，$\{x_{n+p}\}_{p \geqslant 1}$ 都落在 $\overline{B(x_n, 2\varepsilon_n)}$ 中。我们注意到，上面的不等式直接给出

$$d(x_{n+p}, x_n) < \sum_{k=0}^{p-1} 2^{-(n+k)}\varepsilon_0 < 2^{1-n}\varepsilon_0.$$

<!-- source: PDF 297; printed: 297; transcription: first-pass; proofreading: applied -->

所以 $\{x_n\}_{n \geqslant 1}$ 是 Cauchy 列，根据 $X$ 的完备性，存在 $x_\infty \in X$，使得 $\displaystyle\lim_{n \to \infty} x_n = x_\infty$。特别地，根据 $\{x_{n+p}\}_{p \geqslant 1} \subset \overline{B(x_n, 2\varepsilon_n)}$，我们知道 $x_\infty \in \overline{B(x_n, 2\varepsilon_n)}$（这是闭集）。从而对任意的 $n \geqslant 1$，$x_\infty \in U_n$，所以，$x_\infty \in U_\infty$。特别地，利用 $x_\infty \in \overline{B(x_1, 2\varepsilon_1)}$，我们有

$$d(x_\infty, x) \leqslant d(x_\infty, x_1) + d(x_1, x) < 2\varepsilon_1 + \varepsilon_0 < 2\varepsilon_0.$$

因此找到了所需的点 $x_\infty$。$\square$

对于任意的集合 $Y \subset X$，如果对 $y \in Y$，存在 $\varepsilon > 0$，使得 $B(y, \varepsilon) \subset Y$，我们就称 $y$ 是 $Y$ 的一个**内点**。我们用 $\mathring{Y}$ 表示 $Y$ 的内点所组成的集合并称之为 $Y$ 的**内部**。

**练习.** 假设 $Y, Z \subset X$ 互为补集，那么 $\mathring{Y} = \emptyset$ 等价于 $Z$ 在 $X$ 中稠密。

<span id="ma-corollary-161" class="lecture-anchor"></span>**推论 161.** $(X, d)$ 是完备的距离空间，若 $\{F_n\}_{n \geqslant 1}$ 是可数个闭集并且对每个 $n \geqslant 1$，其内部 $\mathring{F}_n = \emptyset$，那么 $F_\infty = \displaystyle\bigcup_{n \geqslant 1} F_n$ 的内部为空集，即 $\mathring{F}_\infty = \emptyset$。

**证明：** 令 $U_n = X - F_n$，这是开集。那么，$\mathring{F}_n = \emptyset$ 意味着 $U_n$ 是稠密的。根据 Baire 的定理，$U_\infty = \displaystyle\bigcap_{n \geqslant 1} U_n$ 是稠密的，从而 $X - U_\infty$ 的内部为空集。最后，我们注意到 $F = \displaystyle\bigcup_{n \geqslant 1} F_n$ 的补集恰好为 $U_\infty$，所以命题成立。$\square$

我们给出 Baire 纲定理的几个应用。

<span id="ma-proposition-162" class="lecture-anchor"></span>**命题 162.** 不存在可微函数 $f \in C([a, b])$，使得对任意的开区间 $(c, d) \subset [a, b]$，$f'$ 在 $(c, d)$ 上无界。

**证明：** 假设 $f$ 是 $[a, b]$ 上的可微函数，对任意的 $n \geqslant 1$，定义

$$f_n(x) = \frac{f\!\left(x + \dfrac{1}{n}\right) - f(x)}{\dfrac{1}{n}}.$$

在上面的式子中，如果 $x + \dfrac{1}{n} > b$，我们可以考虑修改为 $f_n(x) = \dfrac{f(b) - f(x)}{\dfrac{1}{n}}$，不过这对证明没有影响。很明显，由于 $f$ 是可微的，所以 $\{f_n\}_{n \geqslant 1} \subset C([a, b])$ 逐点收敛，即对于每个点 $x \in [a, b)$，$f'(x) = \displaystyle\lim_{n \to \infty} f_n(x)$ 存在；在 $x=b$ 处，$f_n(b)=0$。

对于每个 $x \in [a, b]$，我们令 $M(x) = \displaystyle\sup_{n \geqslant 1} |f_n(x)|$。因为 $f'$ 的存在性，我们知道 $M(x)$ 是良好定义的。我们定义集合

$$F_k = \left\{ x \in [a, b] \mid M(x) \leqslant k \right\} = \bigcap_{n \geqslant 1} \underbrace{\left\{ x \in [a, b] \mid |f_n(x)| \leqslant k \right\}}_{F_{n,k}}.$$

由于每个 $F_{n,k}$ 都是闭集，所以 $F_k \subset [a, b]$ 是闭集。又因为在每一个点处 $M(x) < \infty$，所以

$$[a, b] = \bigcup_{k \geqslant 1} F_k.$$

<!-- source: PDF 298; printed: 298; transcription: first-pass; proofreading: applied -->

根据Baire 定理的推论,不可能每一个 $F_k$ 的内部都是空集,所以存在 $k_0 \geqslant 1$,使得

$$\mathring{F}_{k_0} \neq \emptyset.$$

所以,存在开区间 $(c, d) \subset [a, b]$,使得 $(c, d) \subset \left\{x \in [a, b] \mid M(x) \leqslant k_0\right\}$,即对任意的 $x \in (c, d)$,当 $n$ 足够大以使 $x+1/n \leqslant b$ 时,我们都有

$$|f_n(x)| = \left|\frac{f(x + \frac{1}{n}) - f(x)}{\frac{1}{n}}\right| \leqslant k_0.$$

令 $n \to \infty$,这表明在 $(c, d)$ 上,我们有 $f'$ 有界。$\square$

<span id="ma-proposition-163" class="lecture-anchor"></span>**命题 163.** 不存在 $[0, 1]$ 上的连续函数序列 $\{f_n\}_{n \geqslant 1} \subset C([0, 1])$,使得 $f_n$ 逐点收敛到 $\mathbf{1}_{\mathbb{Q}}$（即有理数的示性函数）。

**证明:** 如若不然,我们假设存在 $\{f_n\}_{n \geqslant 1} \subset C([0, 1])$,使得对任意的 $x \in [0, 1]$,我们都有

$$\lim_{n \to \infty} f_n(x) = \begin{cases} 1, & x \in \mathbb{Q}; \\ 0, & x \notin \mathbb{Q} \end{cases}$$

对于每个 $k \geqslant 1$,我们令

$$F_k = \bigcap_{n \geqslant k} f_n^{-1}\!\left(\left[-\frac{1}{2}, \frac{1}{2}\right]\right).$$

由于 $f_n$ 连续,所以

$$f_n^{-1}\!\left(\left[-\frac{1}{2}, \frac{1}{2}\right]\right) = \left\{x \in [0, 1] \mid -\frac{1}{2} \leqslant f_n(x) \leqslant \frac{1}{2}\right\}$$

是闭集,从而 $F_k$ 是闭集。根据定义,我们知道对任意的 $x \in F_k$,

$$\lim_{n \to \infty} f_n(x) = 0.$$

从而,对于任意的 $x \in F_k$,$x$ 是无理数。特别地,$\mathbb{Q} \cap F_k = \emptyset$,所以 $\mathring{F}_k = \emptyset$。

类似地,对于每个 $k \geqslant 1$,我们令

$$G_k = \bigcap_{n \geqslant k} f_n^{-1}\!\left(\left[\frac{1}{2}, \frac{3}{2}\right]\right).$$

这也是闭集。根据定义,我们知道对任意的 $x \in G_k$,

$$\lim_{n \to \infty} f_n(x) = 1.$$

从而,对于任意的 $x \in G_k$,$x$ 是有理数,所以 $\mathring{G}_k = \emptyset$。

然而,根据 $f_n$ 逐点收敛到 $\mathbf{1}_{\mathbb{Q}}$,我们知道

$$[0, 1] = \bigcup_{k \geqslant 1} (F_k \cup G_k) = F_1 \cup G_1 \cup F_2 \cup G_2 \cup \cdots.$$

上式左边的集合的内部非空,这和 Baire 定理矛盾。$\square$

<!-- source: PDF 299; printed: 299; transcription: first-pass; proofreading: applied -->

**练习.** 试构造函数 $\{f_{m,n}\}_{m,n \geqslant 1}$,使得对任意的 $x \in [0, 1]$,我们有

$$\lim_{m \to \infty} \left(\lim_{n \to \infty} f_{m,n}(x)\right) = \mathbf{1}_{\mathbb{Q}}(x).$$

Baire 定理在线性代数上有如下的应用：

<span id="ma-proposition-164" class="lecture-anchor"></span>**命题 164.** 假设 $(V, \|\cdot\|)$ 是完备的赋范线性空间（不妨假设是实数域上的线性空间）,如果 $\dim V = \infty$,那么 $V$ 的任意一组（代数）基 $\{e_i\}_{i \in I}$ 都是不可数集。

我们回忆一下,如果 $\{e_i\}_{i \in I}$ 是 $V$ 的一组（代数）基,那么对任意的 $v \in V$,存在有限个指标 $i_1, i_2, \cdots, i_m \in I$ 以及有限个实数 $\lambda_{i_1}, \lambda_{i_2}, \cdots, \lambda_{i_m}$,使得

$$v = \lambda_{i_1} e_{i_1} + \lambda_{i_2} e_{i_2} + \cdots + \lambda_{i_m} e_{i_m}.$$

为了证明这个命题,我们不加证明地接受如下的事实：

**有限维的赋范线性空间是完备的。**

上面的陈述是泛函分析中的标准事实,证明实际上很简单,我们在下个学期学起多元微积分的时候（应该）会证明。

**证明:** 如若不然,存在 $\{e_i\}_{i=1,2,\cdots}$ 是 $V$ 的一组可数的基,那么对任意的 $k \geqslant 1$,定义 $V$ 的子空间

$$V_k = \operatorname{span}\{e_1, e_2, \cdots, e_k\}.$$

我们在 $V_k$ 上用 $\|\cdot\|$ 所诱导的度量,从而 $(V_k, \|\cdot\|)$ 是完备的。特别地,我们知道 $V_k \subset V$ 是闭集,这是因为 $V_k$ 中的收敛的序列都在 $V_k$ 中收敛（连续性）。我们现在说明对任意的 $k$,$V_k$ 的内部为空集,实际上,假设 $v \in V_k$,那么任意选取 $\varepsilon > 0$,我们有 $v + \varepsilon e_{k+1} \notin V_k$,这表明 $v$ 不是 $V_k$ 的内点。根据基的定义,我们自然有

$$V = \bigcup_{k \geqslant 1} V_k.$$

然而 $V$ 的内部非空,这和 Baire 的定理矛盾。$\square$

**注记.** 考虑 $\left(C\left([a, b]\right), \|\cdot\|_\infty\right)$ 的子集 $D$,它是由在至少一点处可微的函数构成的,即

$$D = \left\{f \in C([a, b]) \mid \text{存在} x \in [a, b],\, f \text{ 在 } x \text{ 处可微}\right\}.$$

那么,利用稍微精细一点的分析,我们可以证明 $\mathring{D} = \emptyset$。这说明我们有很多的处处连续处处不可微分的函数。请有兴趣的同学自己参考网络或者有关的文献。

<!-- source: PDF 300; printed: 300; transcription: first-pass; proofreading: applied -->

### 原函数的初等表示

我们现在来说明不能找到一个初等函数 $f$，使得 $f' = e^{x^2}$。为此，我们先引入一些记号，当然，如果同学们学习了代数学中的域理论，这里的很多定义就会很自然。任意给定函数 $f_1, \cdots, f_n$，我们令

$$\mathbb{C}(f_1, \cdots, f_n) = \left\{ \frac{\displaystyle\sum_{0 \leqslant i_1, i_2, \cdots, i_n \leqslant k} a_{i_1, i_2, \cdots, i_n} (f_1)^{i_1}(f_2)^{i_2} \cdots (f_n)^{i_n}}{\displaystyle\sum_{0 \leqslant j_1, j_2, \cdots, j_n \leqslant \ell} b_{j_1, j_2, \cdots, j_n} (f_1)^{j_1}(f_2)^{j_2} \cdots (f_n)^{j_n}} \,\middle|\, k, \ell \in \mathbb{Z}_{\geqslant 0},\, a_{i_1, i_2, \cdots, i_n},\, b_{j_1, j_2, \cdots, j_n} \in \mathbb{C},\ \text{分母不恒为零} \right\}.$$

（其中，$\mathbb{C}(X)$ 是有理函数的集合，即两个多项式的商）换句话说，这是由 $f_1, \cdots, f_n$ 经过有限次四则运算所得到的所有可能的函数的集合（可以用上面的形式对四则运算的次数进行归纳即可）。特别地，根据定义，我们知道 $\mathbb{C}(f_1, \cdots, f_n)$ 在四则运算下是封闭的。

很明显，我们有如下的包含关系：

$$\mathbb{C} \subset \mathbb{C}(x) \subset \mathbb{C}(x, f_1) \subset \cdots \subset \mathbb{C}(x, f_1, \cdots, f_k) \subset \mathbb{C}(x, f_1, \cdots, f_k, f_{k+1}) \subset \cdots \subset \mathbb{C}(x, f_1, \cdots, f_n).$$

假设对于任意的 $k$，上面的从 $\mathbb{C}(x, f_1, \cdots, f_k)$ 到 $\mathbb{C}(x, f_1, \cdots, f_k, f_{k+1})$ 所新添进去的元素 $f_{k+1}$ 满足如下的关系之一：

1) $f_{k+1} = e^f$，其中 $f \in \mathbb{C}(x, f_1, \cdots, f_k)$；

2) $f_{k+1} = \log(f)$，其中 $f \in \mathbb{C}(x, f_1, \cdots, f_k)$；

3) 存在 $\mathbb{C}(x, f_1, \cdots, f_k)$ 上的多项式 $P(X)$ 使得 $P(f_{k+1}) = 0$，即存在 $m \geqslant 1$ 且 $\alpha_m\neq0$，$\alpha_0, \cdots, \alpha_m \in \mathbb{C}(x, f_1, \cdots, f_k)$，使得

$$\alpha_m (f_{k+1})^m + \alpha_{m-1}(f_{k+1})^{m-1} + \cdots + \alpha_1 f_{k+1} + \alpha_0 = 0.$$

我们就称 $\mathbb{C}(f_1, \cdots, f_n)$ 中的元素是**初等函数**，称 $\mathbb{C}(x, f_1, \cdots, f_n)$ 是一个**初等函数域**。很明显，从函数 $1$ 和 $x$ 出发，由指数函数，对数函数，取多项式函数的根以及四则运算进行有限次复合所得到的函数都是初等函数。比如说，$e^{x^2}$ 和 $\left(\log x\right)^{-1}$ 这两个函数很明显是初等函数，我们想知道是否它们的原函数是否可以用初等函数表达。

<span id="ma-proposition-165" class="lecture-anchor"></span>**命题 165.** 假设 $K = \mathbb{C}(x, f_1, \cdots, f_n)$ 是初等函数域，那么求导数运算 $\dfrac{d}{dx}$ 将 $K$ 中的元素映射成 $K$ 中的元素，即

$$\frac{d}{dx} : K \to K.$$

（代数上，我们把这样的域称作是一个微分域）

**证明：** 对 $n$ 进行归纳即可，当 $n = 0$ 时命题明显成立。假设对 $n \geqslant 0$ 命题成立，现在只要说明 $(f_{n+1})' \in K = \mathbb{C}(x, f_1, \cdots, f_n, f_{n+1})$ 即可。我们考虑 $f_{n+1}$ 的构造，分情况讨论：

<!-- source: PDF 301; printed: 301; transcription: first-pass; proofreading: applied -->

1) 若 $f_{n+1} = e^f$，其中 $f \in \mathbb{C}(x, f_1, \cdots, f_n)$，那么 $(f_{n+1})' = f'e^f = f'f_{n+1}$。然而，根据归纳法，$f' \in \mathbb{C}(x, f_1, \cdots, f_n) \subset K$，所以利用四则运算的封闭性，我们有 $f'f_{n+1} \in K$；

2) $f_{n+1} = \log(f)$，其中 $f \in \mathbb{C}(x, f_1, \cdots, f_n)$，证明完全类似于上面的情形。

3) 存在 $m \geqslant 1$，$\alpha_0, \cdots, \alpha_m \in \mathbb{C}(x, f_1, \cdots, f_n)$，使得

$$\alpha_m(f_{n+1})^m + \alpha_{m-1}(f_{n+1})^{m-1} + \cdots + \alpha_1 f_{n+1} + \alpha_0 = 0.$$

我们可以要求 $m$ 是最小的使得上面式子成立的正整数。对上式求导数，我们得到

$$\overbrace{(\alpha_m)'(f_{n+1})^m + (\alpha_{m-1})'(f_{n+1})^{m-1} + \cdots + (\alpha_1)'f_{n+1} + (\alpha_0)'}^{\text{根据归纳假设，}\alpha_i' \in K\text{，所以这是 }K\text{ 中的元素}}$$

$$= - \underbrace{\left(m\alpha_m(f_{n+1})^{m-1} + (m-1)\alpha_{m-1}(f_{n+1})^{m-2} + \cdots + \alpha_1\right)}_{\text{这是 }K\text{ 中的元素，记作 }F} \left(f_{n+1}\right)'.$$

根据 $m$ 的选取，我们知道 $F$ 不是零。所以，通过除法我们就证明了 $(f_{n+1})' \in K$。

一般的 $f \in K$ 的导数通过 Leibniz 法则立即可以得到。$\square$

我们现在承认如下 Liouville 定理（这是纯代数的结果，请参见初等的介绍：M. Rosenlicht, *Integration in finite terms*, American Math. Monthly 79 (1972), 963–972）：

<span id="ma-theorem-166" class="lecture-anchor"></span>**定理 166** (Liouville). 假设 $K$ 是一个初等函数域，$f \in K$，那么存在初等函数 $F$ 使得 $F' = f$ 当且仅当存在常数 $c_1, \cdots, c_m \in \mathbb{C}$，存在函数 $R_0, R_1, \cdots, R_m \in K$，使得

$$f = R_0' + \sum_{k=1}^{m} c_k \frac{R_k'}{R_k}.$$

这个条件自然是充分的，因为

$$f = \left(R_0 + \sum_{k=1}^{m} c_k \log(R_k)\right)'.$$

必要性的证明请参见上述 Rosenlicht 的短文。Liouville 定理有如下的有用推论：

<span id="ma-corollary-167" class="lecture-anchor"></span>**推论 167.** 假设 $f, g \in \mathbb{C}(X)$ 是有理函数且 $g$ 不是常数，那么函数 $f(x)e^{g(x)}$ 具有初等的原函数当且仅当存在有理函数 $R \in \mathbb{C}(X)$ 使得

$$R' + g'R = f.$$

**证明：** 充分性是明显的，因为如果 $R' + g'R = f$，那么

$$\left(R \cdot e^g\right)' = (R' + g'R)e^g = fe^g.$$

现在假设 $f(x)e^{g(x)}$ 具有初等的原函数，我们在 $K = \mathbb{C}(x, e^g)$ 中工作，根据 Liouville 的定理，我们有

$$f(x)e^{g(x)} = R_0'(x, e^{g(x)}) + \sum_{k=1}^{m} c_k \frac{R_k'(x, e^{g(x)})}{R_k(x, e^{g(x)})},$$

<!-- source: PDF 302; printed: 302; transcription: first-pass; proofreading: applied -->

其中 $R_k(X, Y) = \dfrac{P_k(X, Y)}{Q_k(X, Y)}$，这里 $P_k$ 和 $Q_k$ 是 $\mathbb{C}$-系数的二元多项式。给定一个二元的多项式 $P(X, Y)$，我们通过将它写成

$$P(X, Y) = p_n(X)Y^n + \cdots + p_1(X)Y + p_0(X)$$

可以将它看作是系数在 $\mathbb{C}(X)$ 中的多项式，这是一个域（和实数一样满足四则运算法则），所以可以将 $P(X, Y)$ 写成 $\mathbb{C}(X)[Y]$ 中的不可约分多项式的分解。据此，对 $k \geqslant 1$，我们可以将 $R_k(X, Y)$ 写成

$$R_k(X, Y) = r_k(X) \frac{\prod p_{k,i}(X, Y)}{\prod q_{k,j}(X, Y)},$$

其中 $p_{k,i}(X, Y)$ 和 $q_{k,j}(X, Y)$ 都是首一的 $\mathbb{C}(X)[Y]$ 中的不可约多项式，即形如

$$Y^m + a_{m-1}(X)Y^{m-1} + \cdots + a_0(X),$$

其中 $r_k(X)$ 和 $a_i(X)$ 均为 $\mathbb{C}(X)$ 中的元素。所以，

$$\frac{R_k'(x, e^{g(x)})}{R_k(x, e^{g(x)})} = \left(\log(R_k(x, e^{g(x)}))\right)' = \frac{r_k'(x)}{r_k(x)} + \sum \frac{p_{k,i}'(x, e^{g(x)})}{p_{k,i}(x, e^{g(x)})} - \sum \frac{q_{k,j}'(x, e^{g(x)})}{q_{k,j}(x, e^{g(x)})}.$$

据此，我们不妨假设所有的 $R_k(X, Y)$ 都是首一的 $\mathbb{C}(X)[Y]$ 中的不可约多项式，$R(X, Y) = \dfrac{P(X, Y)}{Q(X, Y)}$，其中 $P(X, Y)$ 和 $Q(X, Y)$ 也是首一的不可约多项式（可以对 $f$ 乘一个系数来做到这一点）。按照要求，我们有

$$\left. f(X)Y - D(R_0(X, Y)) - \sum_{k=1}^{m} c_k \frac{D(R_k(X, Y))}{R_k(X, Y)} \right|_{X=x, Y=e^g} = 0.$$

其中

$$D(R_k(X, Y)) = D\!\left(\sum r(X)Y^l\right) = \sum \left(r(X)' + \ell r(X)g'(X)\right) Y^l.$$

我们现在说明，这个等式意味着

$$f(X)Y - D(R_0(X, Y)) - \sum_{k=1}^{m} c_k \frac{D(R_k(X, Y))}{R_k(X, Y)} = 0.$$

实际上，我们只需要说明

$$P(x, e^{g(x)}) = 0 \quad \Rightarrow \quad P(X, Y) = 0,$$

其中 $P(X, Y) \in \mathbb{C}(X)[Y]$ 是首一多项式，$g(x)$ 不是常数。为此，假设

$$P(X, Y) = Y^n + \cdots + r_1(X)Y + r_0(X).$$

不妨设 $r_0\neq0$（否则除去 $Y$ 的因子以降低次数）。我们对 $n$ 进行归纳。$n = 0$ 是显然的。对一般的 $n$，我们将上面的式子写成

$$e^{ng(x)} + r_{n-1}(x)e^{(n-1)g(x)} + \cdots + r_1(x)e^{g(x)} + r_0(x) = 0.$$

<!-- source: PDF 303; printed: 303; transcription: first-pass; proofreading: applied -->

求导数，我们就有

$$ng'(x)e^{ng(x)} + \sum_{k=0}^{n-1}\left(r'_k(x) + kr_k(x)g'(x)\right)e^{kg(x)} = 0.$$

所以，

$$\sum_{k=0}^{n-1}\left(r'_k(x) + kr_k(x)g'(x) - ng'(x)r_k(x)\right)e^{kg(x)} = 0.$$

由归纳假设，我们有

$$\sum_{k=0}^{n-1}\left(r'_k(X) + (k-n)r_k(X)g'(X)\right)Y^k = 0.$$

对于 $k = 0$ 的系数我们有

$$g'(X) = \frac{r'_0(X)}{nr_0(X)} = \sum_{i=1}^{m} \frac{c_i}{X - a_i}.$$

对于任意的一个有理函数 $g(X)$，我们总可以将它写成

$$g(X) = \sum_{k=1}^{M} c_k(X - a_k)^{b_k}$$

的形式，其中 $b_k \in \mathbb{Z}$，$c_k\in\mathbb{C}$。其导数的每个有限极点阶数至少为 $2$；非零的有理函数对数导数只有简单极点，若没有极点则恒为 $0$。这与 $g$ 非常数矛盾。

我们现在来分析

$$f(X)Y - \frac{D(P(X,Y))Q(X,Y) - P(X,Y)D(Q(X,Y))}{Q(X,Y)^2} - \sum_{k=1}^{m} c_k \frac{D(R_k(X,Y))}{R_k(X,Y)} = 0 \quad \cdots\cdots \quad (\star)$$

中多项式的整除关系。先研究 $R_k$，其中 $k \geqslant 1$。按照定义，我们有

$$D(R_k(X,Y)) = D\!\left(Y^N + \sum_{\ell < N} r(X)Y^\ell\right)$$

$$= Ng'(X)Y^N + \sum_{\ell < N}\left(r(X)' + \ell r(X)g'(X)\right)Y^\ell.$$

它的 $Y$-次数和 $R_k(X,Y)$ 的一致。所以，如果要分子上的 $D(R_k(X,Y))$ 与分母上的不可约多项式 $R_k(X,Y)$ 能约分的话，只能有

$$D(R_k(X,Y)) = Ng'(X)R_k(X,Y).$$

与上面完全一致，我们再次比较最低项的次数就得到矛盾。所以，每个 $\dfrac{D(R_k(X,Y))}{R_k(X,Y)}$ 都是不可约分的，为了消去 $R_k(X,Y)$ 的分母，我们只能寄希望于有这样的分母来自于 $\dfrac{D(P)Q - PD(Q)}{Q^2}$ 这一项，然而，如果假设 $Q(X,Y) = R_k(X,Y)^s \widetilde{Q}(X,Y)$，其中 $s \in \mathbb{Z}_{\geqslant 1}$，$\widetilde{Q}(X,Y)$（以及 $P(X,Y)$）

<!-- source: PDF 304; printed: 304; transcription: first-pass; proofreading: applied -->

和 $R_k(X,Y)$ 互素，那么

$$\frac{D(P)Q - PD(Q)}{Q^2} = \frac{D(P)}{R_k^s \widetilde{Q}} - \frac{P}{R_k^{2s}\widetilde{Q}^2}\left(sR_k^{s-1}D(R_k)\widetilde{Q} + R_k^s D(\widetilde{Q})\right)$$

$$= \underbrace{\frac{D(P)}{R_k^s \widetilde{Q}} - \frac{PD(\widetilde{Q})}{R_k^s \widetilde{Q}^2}}_{\text{分母上贡献了}R_k^t\text{ 的项，其中}t \leqslant s} - \frac{sPD(R_k)}{R_k^{s+1}\widetilde{Q}}$$

此时，最后一项在分母上贡献了 $R_k$ 的因子是 $s+1 \geqslant 2$ 是最高的，这是不能消去的。所以为了使得 $(\star)$ 成立，我们只能有

$$f(X)Y - \frac{D(P(X,Y))Q(X,Y) - P(X,Y)D(Q(X,Y))}{Q(X,Y)^2} = 0 \quad \cdots\cdots \quad (\star)$$

同理，$Q(X,Y)$ 也不能有不可约因子，所以 $Q(X,Y) \in \mathbb{C}(X)$，它可以被吸收到 $P(X,Y)$ 中，从而假设 $Q(X,Y)=1$，据此，我们有

$$f(X)Y = D(P(X,Y)) = \sum_{\ell \leqslant N}\left(r(X)' + \ell r(X)g'(X)\right)Y^\ell.$$

比较 $1$ 次项系数，我们得到

$$f(X) = r(X)' + r(X)g'(X).$$

这就证明了结论。$\square$

作为应用，我们有

1) $\displaystyle\int e^{x^2}$ 不是初等函数。

   如若不然，此时 $f = 1$，$g = x^2$，所以存在有理函数 $R(x) = \dfrac{P(x)}{Q(x)}$，其中 $P(x)$ 与 $Q(x)$ 互素并且 $Q(x)$ 是首一的，使得

   $$1 = R(x)' + 2xR(x) \quad \Leftrightarrow \quad P'Q + 2xPQ - Q^2 = PQ'.$$

   这表明 $Q$ 整除 $PQ'$，然而，$P$ 与 $Q$ 互素，所以 $Q$ 整除 $Q'$，这当然是不可能的，除非 $Q(x) \equiv 1$，此时，$R(X)$ 是多项式，$1 = R(x)' + 2xR(x)$ 自然不对（看次数）。

2) $\displaystyle\int \frac{1}{\log(x)}$ 不是初等函数。

   通过变量替换 $x = e^y$，这等价于证明 $\displaystyle\int \frac{e^x}{x}$ 不是初等函数。

   如若不然，此时 $f = x^{-1}$，$g = x$，所以存在有理函数 $R(x) = \dfrac{P(x)}{Q(x)}$，其中 $P(x)$ 与 $Q(x)$ 互素并且 $Q(x)$ 是首一的，使得

   $$x^{-1} = R(x)' + R(x) \quad \Leftrightarrow \quad xP'Q + xPQ - Q^2 = xPQ'.$$

<!-- source: PDF 305; printed: 305; transcription: first-pass; proofreading: applied -->

很明显，$R$ 不是多项式，即 $\deg Q \geqslant 1$。上面的式子表明 $Q$ 整除 $xPQ'$，然而，$Q$ 与 $P$ 互素，所以 $Q$ 整除 $xQ'$。比较各根的重数可知，$Q$ 的所有根只能是 $0$，从而 $Q(x)=x^m$，其中 $m\geqslant1$。代入上面的等式并约去 $x^m$，我们得到

$$xP' +(x-m)P=x^m.$$

令 $x=0$，得到 $-mP(0)=0$，所以 $x$ 整除 $P$。这和 $P(x)$ 与 $Q(x)=x^m$ 互素相矛盾。

**练习.** 证明，$\displaystyle\int \frac{\sin x}{x}$ 不是初等函数。

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../01-math-analysis-i.md) · [校勘记录](../errata.md) · [上一篇：27.1 作业:振荡积分](27-stieltjes-mean-value/27-03-p0290-0295.md) · [下一篇：振荡与衰减、期末考试与寒假作业](29-oscillation-decay/29-01-p0306-0312.md)
