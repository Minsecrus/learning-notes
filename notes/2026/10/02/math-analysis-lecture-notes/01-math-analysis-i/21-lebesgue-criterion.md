# 21：振幅、零测集与 Lebesgue 定理

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../01-math-analysis-i.md) · [校勘记录](../errata.md) · [上一篇：20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](20-fundamental-theorem/20-03-p0219-0223.md) · [下一篇：反常积分、Euler 常数与 Stirling 公式](22-improper-integrals.md)

<!-- source: PDF 224; printed: 224; transcription: first-pass; proofreading: applied -->



## 函数的振幅与连续性

我们这一次给出 Riemann 积分的最后一个刻画，这就是所谓的 Lebesgue 定理。

假设 $f : \mathbb{R} \to \mathbb{R}$ 是一个函数，$x_0 \in \mathbb{R}$，我们定义 $f$ 在 $x_0$ 处的**振幅** $\omega(f, x_0)$ 为

$$\omega(f, x_0) = \inf_{\delta > 0} \left( \sup_{\substack{|x - x_0| < \delta, \\ |y - x_0| < \delta}} |f(x) - f(y)| \right) = \lim_{\delta \to 0} \sup_{\substack{|x - x_0| < \delta, \\ |y - x_0| < \delta}} |f(x) - f(y)|.$$

这个概念可以被推广到距离空间的范畴上，假设 $f : X \to Y$ 是两个距离空间 $(X, d_X)$ 和 $(Y, d_Y)$ 之间的映射，对于给定的 $x_0 \in X$，我们定义 $f$ 在 $x_0$ 处的**振幅**为：

$$\omega(f, x_0) = \inf_{\substack{x_0 \in U \\ U\text{是开集}}} \operatorname{diam}\bigl(f(U)\bigr),$$

其中 $\operatorname{diam} V = \sup_{y_1, y_2 \in V} d_Y(y_1, y_2)$ 为 $V$ 的**直径**。

**例子。** 我们有一个在一点处振幅很大的函数：

$$f(x) = \begin{cases} \sin\!\left(\dfrac{1}{x}\right), & x \neq 0; \\ 0, & x = 0. \end{cases}$$

很明显，$\omega(f, 0) = 2$。我们自然知道 $f$ 在 $0$ 处是不连续的。

振幅消失实际上是连续性的刻画：

<span id="ma-lemma-131" class="lecture-anchor"></span>**引理 131。** $f : X \to Y$ 是距离空间 $(X, d_X)$ 和 $(Y, d_Y)$ 之间的映射。$f$ 在 $x_0$ 处连续当且仅当 $\omega(f, x_0) = 0$。

**证明：** 假设 $f$ 在 $x_0$ 处连续，那么，对任意的 $\varepsilon > 0$，存在 $\delta > 0$，当 $d(x, x_0) < \delta$ 时（$\Leftrightarrow x \in B(x_0, \delta) \subset X$），我们有 $d\bigl(f(x), f(x_0)\bigr) < \varepsilon$（$\Leftrightarrow f(x) \in B\bigl(f(x_0), \varepsilon\bigr) \subset Y$）。所以，对于开集合 $U = B(x_0, \delta)$ 而言，$f(U) \subset B\bigl(f(x_0), \varepsilon\bigr) \subset Y$，从而 $\operatorname{diam} f(U) \leqslant 2\varepsilon$。由于 $\varepsilon$ 是任意选取的，所以 $\omega(f, x_0) = 0$。

反过来，假设 $\omega(f, x_0) = 0$，即 $\displaystyle\inf_{\substack{x_0 \in U \\ U\text{是开集}}} \operatorname{diam}\bigl(f(U)\bigr) = 0$，所以对于任意的 $\varepsilon > 0$，存在包含 $x_0$ 的开集 $U \subset X$，使得

$$\operatorname{diam}\bigl(f(U)\bigr) < \varepsilon.$$

由于 $U$ 是开集，所以存在 $\delta > 0$，使得 $B(x_0, \delta) \subset U$，从而 $\operatorname{diam} f\bigl(B(x_0, \delta)\bigr) < \varepsilon$，所以 $d(x, x_0) < \delta$ 时（$\Leftrightarrow x \in B(x_0, \delta)$），$d_Y\bigl(f(x), f(x_0)\bigr) \leqslant \operatorname{diam} f\bigl(B(x_0, \delta)\bigr) < \varepsilon$。这表明 $f$ 在 $x_0$ 处连续。$\square$

对于不连续点，我们有如下的刻画：

<!-- source: PDF 225; printed: 225; transcription: first-pass; proofreading: applied -->

<span id="ma-lemma-132" class="lecture-anchor"></span>**引理 132。** $f : X \to Y$ 是距离空间 $(X, d_X)$ 和 $(Y, d_Y)$ 之间的（任意）映射。对任意 $\varepsilon > 0$，集合

$$\Omega_\varepsilon(f) = \left\{ x \in X \mid \omega(f, x) \geqslant \varepsilon \right\}$$

是 $X$ 中的闭集。

**证明：** 按照闭集的定义，只需要说明它的补集 $X - \Omega_\varepsilon(f) = \left\{ x \in X \mid \omega(f, x) < \varepsilon \right\}$ 为开集即可。首先，我们注意到 $x_0 \in X - \Omega_\varepsilon(f)$ 等价于存在包含 $x_0$ 的开集 $U$，使得 $\operatorname{diam} f(U) < \varepsilon$。据此，我们知道，对于任意的 $x \in U$，利用 $\operatorname{diam} f(U) < \varepsilon$，所以 $x \in X - \Omega_\varepsilon(f)$，即 $U \subset X - \Omega_\varepsilon(f)$。这说明 $X - \Omega_\varepsilon(f)$ 是开集。$\square$

## 零测集

我们现在在 $\mathbb{R}$ 上定义所谓的**测度为零**的集合（你可以认为这是所谓的长度为零的集合）。首先，给定一个有限区间 $I$，我们定义 $|I|$ 为其长度，即右端点减掉左端点的值。

<span id="ma-definition-133" class="lecture-anchor"></span>**定义 133。** $X \subset \mathbb{R}$ 是子集，如果对任意的 $\varepsilon > 0$，总存在**可数个**有界闭区间 $\{I_k\}_{k \geqslant 1}$，使得 $X \subset \bigcup_{k \geqslant 1} I_k$

并且 $\displaystyle\sum_{k=1}^{\infty} |I_k| < \varepsilon$，我们就称 $X$ 是一个**零测集**。

**注记。** 我们可以将定义中的有界闭区间换成有界开区间，这样定义出的零测集与上述定义的是一致的。实际上，如果接受第二种定义，假设对任意的 $\varepsilon > 0$，存在开区间 $\{I_k\}_{k \geqslant 1}$，使得

$$X \subset \bigcup_{k \geqslant 1} I_k, \quad \sum_{k=1}^{\infty} |I_k| < \varepsilon.$$

此时，我们可以选取闭区间 $\{\overline{I_k}\}_{k \geqslant 1}$，我们自然有

$$X \subset \bigcup_{k \geqslant 1} \overline{I_k}, \quad \sum_{k=1}^{\infty} |I_k| = \sum_{k=1}^{\infty} |\overline{I_k}| < \varepsilon.$$

反之，如果接受第一种定义，假设对任意的 $\varepsilon > 0$，存在有界闭区间 $\{K_k\}_{k \geqslant 1}$，使得

$$X \subset \bigcup_{k \geqslant 1} K_k, \quad \sum_{k=1}^{\infty} |K_k| < \varepsilon.$$

假设 $K_k = [a_k, b_k]$，我们令 $I_k = \left(a_k - \dfrac{1}{2^{k+1}}\varepsilon,\, b_k + \dfrac{1}{2^{k+1}}\varepsilon\right)$，那么开区间 $I_k$ 的长度为 $|K_k| + \dfrac{\varepsilon}{2^k}$，所以

$$\sum_{k=1}^{\infty} |I_k| < \sum_{k=1}^{\infty} |K_k| + \sum_{k=1}^{\infty} \frac{\varepsilon}{2^k} = 2\varepsilon.$$

所以，我们可以选取开区间 $\{I_k\}_{k \geqslant 1}$ 来覆盖 $X$。

<span id="ma-proposition-134" class="lecture-anchor"></span>**命题 134。** 可数个零测集的并集仍然是零测集。特别地，可数集是零测集。

**证明：** 假设 $\{X_k\}_{k \geqslant 1}$ 是零测集，按照定义，对于每个 $X_k$ 而言，对任意的 $\dfrac{\varepsilon}{2^k}$，存在有界闭区间的集合 $\{I_{k,i}\}_{i \geqslant 1}$，使得

$$X_k \subset \bigcup_{i \geqslant 1} I_{k,i}, \quad \sum_{i=1}^{\infty} |I_{k,i}| < \frac{\varepsilon}{2^k}.$$

<!-- source: PDF 226; printed: 226; transcription: first-pass; proofreading: applied -->

所以，这一些 $\{I_{k,i}\}_{k,i \geqslant 1}$ 可以作为 $\bigcup_{k \geqslant 1} X_k$ 的覆盖的闭区间

$$\bigcup_{k \geqslant 1} X_k \subset \bigcup_{k \geqslant 1} \bigcup_{i \geqslant 1} I_{k,i}.$$

它们的总长度满足

$$\sum_{i,k=1}^{\infty} |I_{k,i}| < \sum_{k=1}^{\infty} \frac{\varepsilon}{2^k} = \varepsilon.$$

所以，$\bigcup_{k \geqslant 1} X_k$ 是零测集。$\square$

## 黎曼可积性的勒贝格判别

我们用上面的工具来研究 Riemann 可积函数（$f$ 可以在一个赋范线性空间中取值）：

<span id="ma-lemma-135" class="lecture-anchor"></span>**引理 135。** （关键的引理）假设 $f \in \mathcal{R}([a, b])$，对任意的 $\varepsilon > 0$，

$$\Omega_\varepsilon(f) = \left\{ x \in X \mid \omega(f, x) \geqslant \varepsilon \right\}$$

是零测集。

**证明：** 任意给定正常数 $\delta > 0$，根据 Riemann 积分的定义，我们找两个阶梯函数 $F$ 和 $\psi$，使得它们都对应着相同的分划 $\sigma = \{a_0 < a_1 < \cdots < a_n\}$ 并且

$$|f(x) - F(x)| \leqslant \psi(x), \quad \int_a^b \psi < \delta\varepsilon.$$

我们将区间 $[a_i, a_{i+1}]$ 分成两类：

- $\psi$ 在 $[a_i, a_{i+1}]$ 上的取值小于 $\dfrac{1}{2}\varepsilon$。

  在这一类区间上面，我们来研究 $f$ 的振幅，其中 $x, y \in [a_i, a_{i+1}]$：

  $$|f(x) - f(y)| \leqslant |f(x) - F(x)| + |f(y) - F(y)| + \underbrace{|F(x) - F(y)|}_{=0}$$

  $$\leqslant |\psi(x)| + |\psi(y)| < \varepsilon.$$

  据此，我们知道 $\Omega_\varepsilon(f)$ 与此类区间的交集为空集。

- $\psi$ 在 $[a_i, a_{i+1}]$ 上的取值大于等于 $\dfrac{1}{2}\varepsilon$。

  我们将这些小区间记作 $I_1, \cdots, I_m$。按照上面的推理，这一类区间覆盖了 $\Omega_\varepsilon(f)$。根据不等式 $\displaystyle\int_a^b \psi < \delta\varepsilon$，我们知道

  $$\sum_{j \leqslant m} \frac{1}{2}\varepsilon |I_j| \leqslant \int_a^b \psi < \delta\varepsilon$$

  从而，$|I_j|$ 的长度总和小于 $2\delta$。

<!-- source: PDF 227; printed: 227; transcription: first-pass; proofreading: applied -->

由于 $\delta$ 是任意选取的并且 $\Omega_\varepsilon(f) \subset \bigcup_{i=1}^{n} I_m$，所以 $\Omega_\varepsilon(f)$ 是零测集。$\square$

由于 $f$ 在 $x$ 处连续当且仅当 $\omega(f, x) = 0$，从而 $f$ 的不连续点具有如下的刻画：

$$\left\{ x \in I \mid f\text{在}x\text{处不连续} \right\} = \bigcup_{n \geqslant 1} \Omega_{\frac{1}{n}}(f).$$

所以，如果 $f \in \mathcal{R}(I)$，那么 $f$ 的不连续点的集合是零测集（因为可数个零测集的并集还是零测集）。

我们现在来证明 Lebesgue 定理，它给出了 Riemann 可积函数和连续函数之间的基本关联：

<span id="ma-theorem-136" class="lecture-anchor"></span>**定理 136**（Lebesgue）。$f \in \mathcal{R}\left([a, b]\right)$ 当且仅当 $f$ 有界并且其不连续点所构成的集合是零测集。

**证明**：我们做如下的准备工作：

- 选取 $M > 0$，使得对任意的 $x \in [a, b]$，都有 $|f(x)| \leqslant M$。

- 令

$$A = \Omega_{\frac{\varepsilon}{2(b-a)}}(f) = \left\{ x \in [a, b] \middle| \omega(f, x) \geqslant \frac{\varepsilon}{2(b-a)} \right\}.$$

那么，$A$ 是一个闭集也是一个零测集。由于 $A$ 有界，它还是一个紧集。

对于 $A$，由于它是零测集，所以可以选取可数个开区间 $\{I_i\}_{i \geqslant 1}$ 作为 $A$ 的一个开覆盖，并且它们的总长度小于 $\dfrac{\varepsilon}{2M}$，即

$$\sum_{i=1}^{\infty} |I_i| < \frac{\varepsilon}{2M}.$$

根据 $A$ 的紧性，存在有限个小区间 $I_1, \cdots, I_m$，使得 $A \subset U = I_1 \cup \cdots \cup I_m$，我们自然还有

$$\sum_{i=1}^{m} |I_i| < \frac{\varepsilon}{2M}.$$

令 $K = I - U = I \cap (X - U)$。这是两个闭集的交集，所以是闭集。另外，$K$ 是有界的，所以 $K$ 是紧集。对任意的 $y \in K$，按照振幅的定义，都存在包含 $y$ 的开区间 $J_y$，使得对任意的 $t_1, t_2 \in J_y$，我们都有

$$|f(t_1) - f(t_2)| \leqslant \frac{\varepsilon}{2(b-a)}.$$

利用紧性，我们能找到有限个小区间 $J_{y_1}, \cdots, J_{y_\ell}$，使得 $K \subset V = J_{y_1} \cup \cdots \cup J_{y_\ell}$。

我们现在将 $I_1, \cdots, I_m$ 和 $J_{y_1}, \cdots, J_{y_\ell}$ 的端点按照大小顺序排成一列，加上 $a$ 和 $b$，就得到了 $[a, b]$ 的一个分划 $a_0 < a_1 < \cdots < a_{n-1} < a_n$。所以，每个小区间 $[a_i, a_{i+1}]$ 要么完全落在某个 $I_i$ 中，要么完全落在某个 $I_{y_j}$ 中。我们现在构造阶梯函数 $F$ 和 $\psi$ 来逼近 $f$：

$$F(x) = \begin{cases} 0, & x = \text{某个}a_i; \\ 0, & x \in (a_i, a_{i+1})\text{并且}(a_i, a_{i+1})\text{包含在某个}I_j\text{中}; \\ f\!\left(\dfrac{a_i + a_{i+1}}{2}\right), & x \in (a_i, a_{i+1})\text{但是}(a_i, a_{i+1})\text{不包含在任何}I_j\text{中}. \end{cases}$$

<!-- source: PDF 228; printed: 228; transcription: first-pass; proofreading: applied -->

以及

$$\psi(x) = \begin{cases} M, & x = \text{某个}a_i; \\ M, & x \in (a_i, a_{i+1})\text{并且}(a_i, a_{i+1})\text{包含在某个}I_j\text{中}; \\ \dfrac{\varepsilon}{2(b-a)}, & x \in (a_i, a_{i+1})\text{但是}(a_i, a_{i+1})\text{不包含在任何}I_j\text{中}. \end{cases}$$

按照定义，我们有 $|f(x) - F(x)| \leqslant \psi(x)$。为此，我们只需要分情况讨论，在上面前两种情况下，这是显然的；如果 $x \in (a_i, a_{i+1})$ 但是 $(a_i, a_{i+1})$ 不包含在任何 $I_j$ 中，那么，存在 $j_0$，使得 $x \in J_{j_0}$，特别地，$x, \dfrac{a_i + a_{i+1}}{2} \in J_{j_0}$，从而，根据 $J$-型区间的定义，我们有

$$\left| f\!\left( \frac{a_i + a_{i+1}}{2} \right) - f(x) \right| < \frac{\varepsilon}{2(b-a)}.$$

这就是 $|f(x) - F(x)| \leqslant \psi(x)$。最终，我们验证 $\displaystyle\int_a^b \psi \leqslant \varepsilon$：

$$\int_a^b \psi \leqslant \sum_{i=1}^{m} |I_i| \times M + (b - a) \times \frac{\varepsilon}{2(b-a)}$$

$$\leqslant \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$

这就证明了 $f$ 是 Riemann 可积的。$\square$

[返回讲义目录](../../math-analysis-lecture-notes.md) · [学期目录](../01-math-analysis-i.md) · [校勘记录](../errata.md) · [上一篇：20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](20-fundamental-theorem/20-03-p0219-0223.md) · [下一篇：反常积分、Euler 常数与 Stirling 公式](22-improper-integrals.md)
