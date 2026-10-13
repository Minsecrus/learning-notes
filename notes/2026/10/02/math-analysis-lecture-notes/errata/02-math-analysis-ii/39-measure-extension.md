# 勘误：39 测度与 Carathéodory 扩张定理

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> $\{A_i\}_{i \geqslant 1} \in \mathcal{A}$

**修正：**

> $\{A_i\}_{i \geqslant 1}\subset\mathcal A$

**理由：** 序列的每个集合属于代数，整个序列是代数中的元素族，成员符号会把序列本身误当作X的可测子集。

**原文：**

> 2) 我们有如下的等式:

**修正：**

> 2) 我们有如下的不等式:

**理由：** 该项所列为可数次可加性的上界不等式，重叠集合时一般不能取等号。

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> 的不相交矩形的并。不难验证, 如果我们令

**修正：**

> 及各坐标端点可开可闭、区间可无界的矩形的不相交有限并，这些集合构成代数。各类矩形均按边长乘积赋值；例如，令

**理由：** 有限开矩形并不闭于补集，无法作为X上的代数；需要包括闭、半开及无界坐标区间，保持后列开矩形边长公式作为例子。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> B_n = A_n - A_n-1

**正文：**

> $B_n = A_n - A_{n-1}$

**理由：** 原图下标排版将前一项写成An后再减一，canonical已准确采用前一集合A下标n减一，保留该正确数学表达。

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> $\bigcup_{i \to \infty} X_i = X$

**修正：**

> $\bigcup_{i\geqslant1}X_i=X$

**理由：** 集合并的指标需给出实际整数范围，趋于无穷是极限符号而不能作为并集索引。

**原文：**

> $\lim_{i \to \infty} \mu(A_i) \to 0$

**修正：**

> $\lim_{i\to\infty}\mu(A_i)=0$

**理由：** 条件C规定数值极限等于零，极限号取值后不再随i变化，应使用等号。

**原文：**

> 根据 $\mathcal{M}$ 的定义, $M \in \mathcal{M}$, 所以 $\mathcal{M}$ 为单调类。

**修正：**

> 根据 $\mathcal M$ 的定义，$M\in\mathcal M$。若 $M_j$ 单调下降，则 $A\cap M_j$ 的测度不超过有限数 $\mu(A)$，由从上连续性同样得到两测度在 $A\cap\bigcap_jM_j$ 上相等。因此 $\mathcal M$ 对两种单调极限均封闭，为单调类。

**理由：** 单调类须同时对上升和下降序列极限封闭，源只验证上升；定义中A有限正好提供从上连续性所需有限测度假设，补齐下降情况。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 从而A包含σ(A)

**正文：**

> 从而 $\mathcal{M}$ 包含 $\sigma(\mathcal{A})$

**理由：** 原图结尾误以原代数A包含它生成的sigma代数，canonical已正确采用单调类M包含sigmaA，保留该正确证明。

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> $$\lim_{n \to \infty} \mu(C_n) = 0 \iff \lim_{i \to \infty} \mu\left(A - \bigcup_{i \leqslant n} A_i\right) = \mu(A) - \lim_{i \to \infty} \mu\left(\bigcup_{i \leqslant n} A_i\right) = 0.$$

**修正：**

> $$\lim_{n \to \infty} \mu(C_n) = 0 \iff \lim_{n\to\infty}\mu\left(A-\bigcup_{i\leqslant n}A_i\right) = \mu(A) - \lim_{n\to\infty}\mu\left(\bigcup_{i\leqslant n}A_i\right) = 0.$$

**理由：** 有限并的上界n随极限变化，i在并号内为绑定指标，原极限指标i不改变该有限并。

**原文：**

> $$\lim_{n \to \infty} \mu(C_n) = 0 \iff \lim_{i \to \infty} \mu\left(A - \bigcup_{i \leqslant n} A_i\right) = \mu(A) - \lim_{i \to \infty} \mu\left(\bigcup_{i \leqslant n} A_i\right) = 0.$$

**修正：**

> $$\lim_{n \to \infty} \mu(C_n) = 0 \iff \lim_{n\to\infty}\mu\left(A-\bigcup_{i\leqslant n}A_i\right) = \mu(A) - \lim_{n\to\infty}\mu\left(\bigcup_{i\leqslant n}A_i\right) = 0.$$

**理由：** 该极限同样取有限并上界n趋于无穷，不能使用并号内已绑定的i作为极限变量。

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> 那么这些区间一定会覆盖 $[0, 1]$

**修正：**

> 那么这些区间的闭包一定覆盖 $[0, 1]$，且取闭包不改变各区间的长度

**理由：** 有限开区间可以覆盖有理点却遗漏一个无理点，原覆盖结论不成立；有限闭包的并是闭集并含稠密的有理点，故覆盖整个单位区间且长度不变。

**原文：**

> $\mu^*(\bigcup_{i \geqslant} E_i) \leqslant \sum_{i=1}^\infty \mu^*(E_i)$

**修正：**

> $\mu^*(\bigcup_{i\geqslant1}E_i) \leqslant \sum_{i=1}^\infty \mu^*(E_i)$

**理由：** 并集指标缺少下界，序列从一开始，应补齐正整数索引范围。

**原文：**

> 不妨假设每个 $E_i$ 的外测度是有限的 (否则没什么需要证明的)。

**修正：**

> 不妨假设 $\sum_{i\geqslant1}\mu^*(E_i)<\infty$（否则所需上界为无穷，不等式显然成立）。

**理由：** 每项有限不能保证级数有限，后续作两个级数的差需要排除无穷减无穷；直接假设所需右边总和有限既充分也不损失一般性。

**原文：**

> 是 $\bigcup_{i \geqslant} E_i$ 的覆盖

**修正：**

> 是 $\bigcup_{i\geqslant1}E_i$ 的覆盖

**理由：** 此处覆盖对象的可数并也缺少指标下界，须与Ei序列正整数范围一致。

**原文：**

> $$0 \leqslant \mu\left(\bigcup_{i \geqslant} E_i\right) - \sum_{i \geqslant 1} \mu^*(E_i) < \sum_{i \geqslant 1} 2^{-i}\varepsilon = \varepsilon.$$

**修正：**

> $$\mu^*\left(\bigcup_{i\geqslant1}E_i\right)\leqslant\sum_{i,j=1}^\infty\mu(A_{i,j}) < \sum_{i\geqslant1}\mu^*(E_i)+\sum_{i\geqslant1}2^{-i}\varepsilon=\sum_{i\geqslant1}\mu^*(E_i)+\varepsilon.$$

**理由：** 原mu未定义在任意Ei的并上，必须用外测度mu星；重叠集合的并外测度可小于各项和，不能断言差非负。由覆盖代价上界直接得到需要的不等式。

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> 为了验证 $\mu$-可测性

**修正：**

> 为了验证 $\mu^*$-可测性

**理由：** 此处使用Caratheodory外测度分割判据，尚未把mu定义到可测集合族，必须保留外测度上标星。

[相关正文：39：测度与 Carathéodory 扩张定理](../../02-math-analysis-ii/39-measure-extension.md)

## 数学修正

**原文：**

> 两个不交的 $\mu$-可测集

**修正：**

> 两个不交的 $\mu^*$-可测集

**理由：** 第六步仍讨论外测度可测集合族B，符号应与第三步定义的mu星可测一致。
