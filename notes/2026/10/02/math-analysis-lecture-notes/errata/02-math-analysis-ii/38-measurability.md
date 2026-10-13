# 勘误：38 σ-代数与可测映射

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 对任意的 $x \in A$, $\{x\} \in \mathcal{A}$

**修正：**

> 对任意的 $x\in X$，$\{x\} \in \mathcal{A}$

**理由：** 单点生成可数集合全部子集的条件应覆盖X中每个点，源A既未定义也不能替代整个X。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> $\bigcup_{i=1}^\infty A_i \in \bigcup_{j \in J} \mathcal{A}_j = \mathcal{A}$

**修正：**

> $\bigcup_{i=1}^\infty A_i \in\bigcap_{j\in J}\mathcal A_j=\mathcal A$

**理由：** 命题定义A为所有sigma代数的交，结论在每个Aj中属于元素的逻辑为交集，源误用并集且其一般不为代数。

**原文：**

> $\mathcal{P}(X) \in \Sigma(\mathcal{M})$

**修正：**

> $\mathcal P(X)\in\Sigma$

**理由：** 本段定义的集合名为Sigma，没有引入取函数值的Sigma(M)，幂集属于刚定义Sigma以证明非空。

**原文：**

> 在开、并的可数操作以及取逆下是封闭的

**修正：**

> 在交、并的可数操作以及取补下是封闭的

**理由：** sigma代数的集合操作是可数交、可数并及补集，开操作和取逆未定义，源文字应与定义229一致。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 这因为
>
> $$
> \begin{aligned}
> A \cup B &= \bigcup_{i,j} ((A_i^{(1)} \times A_i^{(2)}) \cup (B_j^{(1)} \times B_j^{(2)})) \\
> &= \bigcup_{i,j} \left[ ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} - B_j^{(2)})) \right. \\
> &\qquad \left. \cup ((A_i^{(1)} - B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup ((A_i^{(1)} - B_j^{(1)}) \times (A_i^{(2)} - B_j^{(2)})) \right],
> \end{aligned}
> $$

**修正：**

> 这因为（空集也可写成一个空矩形，以保持有限指标集非空）
>
> $$
> \begin{aligned}
> A \cup B &= \bigcup_{i,j} ((A_i^{(1)} \times A_i^{(2)}) \cup (B_j^{(1)} \times B_j^{(2)})) \\
> &= \bigcup_{i,j} \left[ ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} - B_j^{(2)})) \right. \\
> &\qquad \left. \cup ((A_i^{(1)} - B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup((A_i^{(1)}-B_j^{(1)})\times(A_i^{(2)}-B_j^{(2)}))\cup(B_j^{(1)}\times B_j^{(2)})\right],
> \end{aligned}
> $$

**理由：** 双重并对i和j都要求非空指标族，若某集合为空可用一个空矩形表示，使原有双指标分解覆盖另一集合。

**原文：**

> 这因为
>
> $$
> \begin{aligned}
> A \cup B &= \bigcup_{i,j} ((A_i^{(1)} \times A_i^{(2)}) \cup (B_j^{(1)} \times B_j^{(2)})) \\
> &= \bigcup_{i,j} \left[ ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} - B_j^{(2)})) \right. \\
> &\qquad \left. \cup ((A_i^{(1)} - B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup ((A_i^{(1)} - B_j^{(1)}) \times (A_i^{(2)} - B_j^{(2)})) \right],
> \end{aligned}
> $$

**修正：**

> 这因为（空集也可写成一个空矩形，以保持有限指标集非空）
>
> $$
> \begin{aligned}
> A \cup B &= \bigcup_{i,j} ((A_i^{(1)} \times A_i^{(2)}) \cup (B_j^{(1)} \times B_j^{(2)})) \\
> &= \bigcup_{i,j} \left[ ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup ((A_i^{(1)} \cap B_j^{(1)}) \times (A_i^{(2)} - B_j^{(2)})) \right. \\
> &\qquad \left. \cup ((A_i^{(1)} - B_j^{(1)}) \times (A_i^{(2)} \cap B_j^{(2)})) \cup((A_i^{(1)}-B_j^{(1)})\times(A_i^{(2)}-B_j^{(2)}))\cup(B_j^{(1)}\times B_j^{(2)})\right],
> \end{aligned}
> $$

**理由：** 源列的四项只是把Ai矩形按Bj坐标切分，其并仍等于Ai，遗漏整个B矩形；补Bj矩形后才等于两矩形的并。

**原文：**

> 它们两两不交，所以 $A \cup B \in \widetilde{R}$。

**修正：**

> 每组中的前四项两两不交，但各组之间及它们与 $B$ 矩形未必不交。用所有出现的坐标集合及其补在两个 $X_i$ 中分别作有限共同分割，再选取落在 $A\cup B$ 内的乘积格子，就得到两两不交的矩形并，所以 $A\cup B\in\widetilde R$。

**理由：** 原文不同i、j组的矩形可能相交，不能直接据此称不交并；有限坐标集合取交及补产生共同分割，各乘积格子不交并仍在坐标代数中，补齐源证明的独立化步骤。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> $$
> \mathcal{B}(\mathbb{R}) \otimes \mathcal{B}(\mathbb{R}) = \sigma\left( \{ A \times B \mid A, B \subset \text{是 } \mathbb{R}^1 \text{ 上的 Borel 集} \} \right).
> $$

**修正：**

> $$
> \mathcal{B}(\mathbb{R}) \otimes \mathcal{B}(\mathbb{R}) = \sigma\left( \{ A \times B \mid A,B\text{ 是 }\mathbb R^1 \text{ 上的 Borel 集} \} \right).
> $$

**理由：** 该定义要求A、B是实线上Borel集合，源subset后没有集合，去掉错误包含符号保留集合类别。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 如果 $B \in \mathcal{A}$

**修正：**

> 如果 $B\in\mathcal B$

**理由：** 本段验证B类闭于补集，A类在后半页才引入，假设须取当前B类元素。

**原文：**

> 我们就有 $A^c \in \mathcal{B}$

**修正：**

> 我们就有 $A^c\in\mathcal A$

**理由：** 第二辅助类为A，按其定义证明补集仍属于A，源误沿用第一类B。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 我们已经证明了 $\mathcal{A}_1 \otimes \mathcal{A}_2 = \sigma(\mathcal{R})$ 而 $\sigma(\mathcal{R})$ 是代数。

**修正：**

> 我们已经证明了 $\mathcal A_1\otimes\mathcal A_2=\sigma(\widetilde{\mathcal R})$ 而 $\widetilde{\mathcal R}$ 是代数，所以由定理 240 得到结论。

**理由：** 单调类定理需要生成族本身是代数，R仅单矩形族一般不闭于并，R波浪为有限不交矩形并代数；sigmaR自身为代数是恒真，不能据此证明由R波浪生成的单调类等式。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 这两个测度空间的乘积

**修正：**

> 这两个可测空间的乘积

**理由：** 尚未给定任何测度，此处只有sigma代数的可测空间乘积，不宜误称含测度结构的测度空间。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 那么 $B(x_k, \frac{r}{2}) \subset U$ (从而属于 $\mathfrak{B}_U$) 包含 $x$

**修正：**

> 再选取有理数 $q\in(r/4,r/2)$，那么 $B(x_k,q)\subset U$（从而属于 $\mathfrak B_U$）包含 $x$

**理由：** 所建可数基只包含有理半径球，r由开集给出不必有理，r半球未必属于基。取r四分之一与r二分之一间有理q同时确保含x和包含U。

**原文：**

> 对每个 $B \subset \mathfrak{B}$

**修正：**

> 对每个 $B\in\mathfrak B$

**理由：** B是可数基族中的一个开球，而非基族的子集；原式成员关系误写包含关系，逆像判据需要X中集合。

**原文：**

> $$d((x_1, x_2), (x'_1, x'_2)) = \sqrt{d(x_1, x'_1)^2 + d(x_2, x'_2)^2}.$$

**修正：**

> $$d((x_1, x_2), (x'_1, x'_2)) = \sqrt{d_1(x_1,x_1\prime)^2+d_2(x_2,x_2\prime)^2}.$$

**理由：** 乘积距离由两个不同因子的d1及d2构成，统一d尚未在单个因子定义，原图漏下标。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> $$d((x_1, x_2), (x'_1, x'_2)) = d(x_1, x'_1) + d(x_2, x'_2)$$

**修正：**

> $$d((x_1, x_2), (x'_1, x'_2)) = d_1(x_1,x_1\prime)+d_2(x_2,x_2\prime)$$

**理由：** 和距离分别使用因子d1和d2，原图缺下标，乘积d与因子域不同。

**原文：**

> $$d((x_1, x_2), (x'_1, x'_2)) = \sup \{d(x_1, x'_1), d(x_2, x'_2)\}.$$

**修正：**

> $$d((x_1, x_2), (x'_1, x'_2)) = \sup\{d_1(x_1,x_1\prime),d_2(x_2,x_2\prime)\}.$$

**理由：** 最大距离也分别使用两个因子距离，原图省略下标可能在不同空间无法求值。

**原文：**

> $(Y_2, d_2)$

**修正：**

> $(X_2,d_2)$

**理由：** 定理始终以X1与X2作为两个因子，没有定义Y2，须使用同一个第二距离空间。

**原文：**

> $$\mathcal{B}_Y = \mathcal{B}_{Y_1} \otimes \mathcal{B}_{Y_2},$$

**修正：**

> $$\mathcal B_X=\mathcal B_{X_1}\otimes\mathcal B_{X_2},$$

**理由：** 定理定义X等于X1乘X2，原图从别处复制Y及Yi下标，Borel等式须绑定本定理三个空间。

**原文：**

> 分别是 $X_1$ 和 $X$ 的可数稠密子集

**修正：**

> 分别是 $X_1$ 和 $X_2$ 的可数稠密子集

**理由：** P2用于选择第二因子点p2及构造P1乘P2，不能取在整个乘积X中，源遗漏第二因子下标。

**原文：**

> $$d_1(p_1, x_1) < \frac{\varepsilon}{\sqrt{2}}, \quad d_1(p_2, x_2) < \frac{\varepsilon}{\sqrt{2}}.$$

**修正：**

> $$d_1(p_1, x_1) < \frac{\varepsilon}{\sqrt{2}}, \quad d_2(p_2,x_2) < \frac{\varepsilon}{\sqrt{2}}.$$

**理由：** p2和x2属于第二距离空间，必须使用d2，原图误用第一因子距离d1。

**原文：**

> $(\pi_i \circ \iota)^{-1}(U_i) = U_i \times X \in \mathcal{B}_X$

**修正：**

> 当 $i=1$ 时，$(\pi_1\circ\iota)^{-1}(U_1)=U_1\times X_2\in\mathcal B_X$；当 $i=2$ 时，$(\pi_2\circ\iota)^{-1}(U_2)=X_1\times U_2\in\mathcal B_X$

**理由：** 投影的逆像为对应柱集，i等于2时Ui位于第二坐标，另一因子分别X2或X1；源Ui乘整个X既多一组维数且第二投影次序错误。

[相关正文：38：σ-代数与可测映射](../../02-math-analysis-ii/38-measurability.md)

## 数学修正

**原文：**

> 如果 $E \subset Y$ 是一个子集

**修正：**

> 如果 $E\subset Y$ 是一个非空子集

**理由：** 到集合距离取下确界，空集时等于正无穷不能作为实值函数，因此该实值定义须要求非空。

**原文：**

> 任取 $Y$ 中的开集 $U$, 我们定义

**修正：**

> 任取 $Y$ 中的开集 $U$；$U=Y$ 的逆像显然可测，以下设 $U\ne Y$，我们定义

**理由：** 后续使用到Uc的实值距离，若U等于Y则补集为空；全空间逆像为X可直接处理，无须对空集距离求实值。
