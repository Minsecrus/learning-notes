# 勘误：11 紧性、一致连续与一致收敛

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 我们还可以讲这个函数用极坐标系 $(r, \vartheta)$ 来表达：

**修正：**

> 我们还可以将这个函数用极坐标系 $(r, \vartheta)$ 来表达：

**理由：** 源图“讲”误字，属于source_typo；改将即用极坐标表达该函数，不改数学。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 列 $\{x_n\}_{n \geqslant 1} \in F$，如果 $\lim_{n \to \infty} x_n = x$，那么 $x \in F$。

**修正：**

> 列 $\{x_n\}_{n \geqslant 1} \subset F$，如果 $\lim_{n \to \infty} x_n = x$，那么 $x \in F$。

**理由：** 源图误用∈，属于source_typo。记号{x_n}指点列全部项的集合，应包含于F，而每个xn属于F；整列不作为F的单个点。

**原文：**

> 我们考虑 $\mathcal{U}$ 的子集 $\mathcal{U}'$，即 $\mathcal{U}' = \{U_{\alpha'}\}_{\alpha' \in A'}$，其中 $A' \subset A$。如果 $X \subset \bigcup_{\alpha' \in A'} U_{\alpha'}$，我们就把 $\mathcal{U}' = \{U_{\alpha'}\}_{\alpha' \in A'}$ 称作是 $\mathcal{U} = \{U_\alpha\}_{\alpha \in A}$ 的一个子覆盖。

**修正：**

> 我们考虑 $\mathcal{U}$ 的子集 $\mathcal{U}'$，即 $\mathcal{U}' = \{U_{\alpha'}\}_{\alpha' \in A'}$，其中 $A' \subset A$。如果 $S \subset \bigcup_{\alpha' \in A'} U_{\alpha'}$，我们就把 $\mathcal{U}' = \{U_{\alpha'}\}_{\alpha' \in A'}$ 称作是 $\mathcal{U} = \{U_\alpha\}_{\alpha \in A}$ 的一个子覆盖。

**理由：** 源图误写X，属于source_typo。子覆盖须覆盖原目标子集S，可无需覆盖整个环境空间X，修正与本定义上一段一致。

**原文：**

> 证明：我们利用反证法：如果不然，那么每个 $\delta = \frac{1}{n}$，存在 $x_n, y_n \subset K$（不妨假设 $x_n < y_n$），使得

**修正：**

> 证明：我们利用反证法：如果不然，那么对每个 $\delta = \frac{1}{n}$，存在 $x_n, y_n \in K$（不妨假设 $x_n < y_n$），使得

**理由：** 源图缺对且误用⊂，属于source_typo。所选xn,yn为K中的两个点须∈K；δ=1/n遍历正整数，补介词。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 据此，我们得到据此 $K$ 的开覆盖 $\mathcal{U} = \{U_n | n = 1, 2, \cdots\}$，所以

**修正：**

> 据此，我们得到 $K$ 的开覆盖 $\mathcal{U} = \{U_n | n = 1, 2, \cdots\}$，所以

**理由：** 源图同样重复据此，属于source_typo；删重复连接词。

**原文：**

> **推论 69** (紧性和列紧性的等价性). $K \subset \mathbb{R}$ 是子集，如果对任意 $K$ 中的子序列 $\{x_k\}_{k \geqslant 1} \subset K$，都存在收敛的子序列 $\{x_{k_j}\}_{j \geqslant 1}$，使得 $\lim_{j \to \infty} x_{k_j} \in K$，我们就称 $X$ 是列紧的。

**修正：**

> **推论 69** (紧性和列紧性的等价性). $K \subset \mathbb{R}$ 是子集，如果对任意 $K$ 中的序列 $\{x_k\}_{k \geqslant 1} \subset K$，都存在收敛的子序列 $\{x_{k_j}\}_{j \geqslant 1}$，使得 $\lim_{j \to \infty} x_{k_j} \in K$，我们就称 $K$ 是列紧的。

**理由：** 源图确“子序列”及X，属于source_typo。列紧是K中任意序列有子序列极限仍在K；须称K列紧，X未定义。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 我们这些命题整理为如下几条，其中 $(X, d)$ 是距离空间：

**修正：**

> 我们将这些命题整理为如下几条，其中 $(X, d)$ 是距离空间：

**理由：** 源图漏将，属于source_typo；补动词不变命题。

**原文：**

> 据此，我们得到据此 $K$ 的开覆盖 $\mathcal{U} = \{U_n | n = 1, 2, \cdots\}$，所以

**修正：**

> 据此，我们得到 $K$ 的开覆盖 $\mathcal{U} = \{U_n | n = 1, 2, \cdots\}$，所以

**理由：** 源图同样重复据此，属于source_typo；删重复连接词。

**原文：**

> 2) **定理** 假设 $(X, d)$ 列紧的度量空间（即如果对任意 $X$ 中的点列 $\{x_k\}_{k \geqslant 1}$，

**修正：**

> 2) **定理** 假设 $(X, d)$ 是列紧的度量空间（即如果对任意 $X$ 中的点列 $\{x_k\}_{k \geqslant 1}$，

**理由：** 源图也缺是，属于source_typo；补系词为假设(X,d)列紧，与本项结论相符。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 3) **定理** 假设 $(X, d)$ 度量空间，它是列紧的当且仅当它是紧的。

**修正：**

> 3) **定理** 假设 $(X, d)$ 是度量空间，它是列紧的当且仅当它是紧的。

**理由：** 源图缺是，属于source_typo；补系词保留任意度量空间紧与列紧等价命题。

**原文：**

> - 如果 $B(x_0, \delta) \cup B(x_1, \delta) \cup \cdots \cup B(x_k, \delta) = X$，那么我们已经找到了有限子覆盖 $U_1, \cdots, U_k \in \mathcal{U}$，这个过程到此结束。

**修正：**

> - 如果 $B(x_0, \delta) \cup B(x_1, \delta) \cup \cdots \cup B(x_k, \delta) = X$，那么我们已经找到了有限子覆盖 $U_0, U_1, \cdots, U_k \in \mathcal{U}$，这个过程到此结束。

**理由：** 源图有限子覆盖漏U0，属于source_typo。球覆盖从x0起，须包含U0才能覆盖其对应B(x0,δ)，与归纳构造一致。

## 未决数学问题

**原文：**

> $\left(\frac{2M}{N}\right)^n$

**问题：** 方体数量(2M/N)^n可非整数，边长1/N的n维直径sqrt(n)/N超Lebesgue数。应选整数L>sqrt(n)N，边长1/L、数量(2ML)^n，需较长段落修补。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> **定义 71 (一致收敛性).** 假设 $f : X \to \mathbb{R}$ 是连续函数

**修正：**

> **定义 71 (一致连续性).** 假设 $f : X \to \mathbb{R}$ 是连续函数

**理由：** 源图标题也是一致收敛性，属于source_typo。定义单个函数的ε−δ对全部x,y统一，正是一致连续，未涉及函数列；恢复标题。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 1) $I = (0, 1)$，$f_n(x) = \frac{1}{nx}$，对于每个 $x$，$\lim_{n \to \infty} f_n(x) = 0$，所以 $f_n(x)$ 逐点收敛到 $0$（函数）；然
> 而，对任意的 $\sup_{x \in I} |f_n(x) - 0| = \infty$，所以 $\{f_n\}_{n \geqslant 1}$ 不一致收敛。

**修正：**

> 1) $I = (0, 1)$，$f_n(x) = \frac{1}{nx}$，对于每个 $x$，$\lim_{n \to \infty} f_n(x) = 0$，所以 $f_n(x)$ 逐点收敛到 $0$（函数）；然
> 而，$\sup_{x \in I} |f_n(x) - 0| = \infty$，所以 $\{f_n\}_{n \geqslant 1}$ 不一致收敛。

**理由：** 源图确有悬空的“对任意的”，属于source_typo。其后sup为值无量词对象，删冗词仍陈述每个n对应上确界∞，不改函数列。

[相关正文：11：紧性、一致连续与一致收敛](../../01-math-analysis-i/11-compactness.md)

## 数学修正

**原文：**

> 首先定义函数 $f$：对任意 $x \in I$，按照定义，对任意的 $m$ 和 $n$，我们的都有 $|f_n(x) - f_m(x)| \leqslant d(f_n, f_m)$，所以 $\{f_n(x)\}_{n\geqslant 1}$ 是 Cauchy 数列，据此，可以定义

**修正：**

> 首先定义函数 $f$：对任意 $x \in I$，按照定义，对任意的 $m$ 和 $n$，我们都有 $|f_n(x) - f_m(x)| \leqslant d(f_n, f_m)$，所以 $\{f_n(x)\}_{n\geqslant 1}$ 是 Cauchy 数列，据此，可以定义

**理由：** 源图“我们的都有”多的，属于source_typo；恢复我们都有。

**原文：**

> 对任意的 $x \in [a, b]$，根据逐点收敛性，存在 $N_x \geqslant N_0$，使得当 $n \geqslant N_x$ 时，我们有 $|f_n(x) - f(x)| < \frac{1}{4}\varepsilon$，利用连续性，存在开区间 $I_x$，使得对任意的 $y \in I_x$，我们都有 $|f_n(y) - f(y)| < \frac{1}{2}\varepsilon$。根据上面 $N_0$ 的选取，我们知道对任意的 $m \geqslant N_x$，任意的 $y \in I_x$，我们都有

**修正：**

> 对任意的 $x \in [a, b]$，根据逐点收敛性，存在 $N_x \geqslant N_0$，使得当 $n \geqslant N_x$ 时，我们有 $|f_n(x) - f(x)| < \frac{1}{4}\varepsilon$，利用连续性，存在开区间 $I_x$，使得对任意的 $y \in I_x$，我们都有 $|f_{N_x}(y) - f(y)| < \frac{1}{2}\varepsilon$。根据上面 $N_0$ 的选取，我们知道对任意的 $m \geqslant N_x$，任意的 $y \in I_x$，我们都有

**理由：** 源图该处确印fn，属于source_typo。连续性仅对固定f_{Nx}与f选邻域；为全部无限n共同选邻域未经证明，改为已选Nx后用Cauchy界控制全部m。

**原文：**

> $$
> |f_m(x) - f(x)| \leqslant |f_m(y) - f_{N_x}(y)| + |f_{N_x}(y) - f(y)| < \varepsilon.
> $$

**修正：**

> $$
> |f_m(y) - f(y)| \leqslant |f_m(y) - f_{N_x}(y)| + |f_{N_x}(y) - f(y)| < \varepsilon.
> $$

**理由：** 源图左边实印x，属于source_typo。右边三角不等式在任意y∈Ix控制fm(y)−f(y)，须同一y；不能从右侧的y控制任意x。

**原文：**

> $$
> |f_n(y) - f(y)| < \varepsilon, \quad \forall y \in I_{N_j}.
> $$

**修正：**

> $$
> |f_n(y) - f(y)| < \varepsilon, \quad \forall y \in I_{x_j}.
> $$

**理由：** 源图区间下标实印Nj，属于source_typo。有限覆盖为Ixj，与Nxj为阈值是不同对象，恢复Ixj，结论覆盖全闭区间。
