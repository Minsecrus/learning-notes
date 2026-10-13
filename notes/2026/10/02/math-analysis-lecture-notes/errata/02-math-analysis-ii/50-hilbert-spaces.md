# 勘误：50 Brouwer 不动点定理与 Hilbert 空间

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：50：Brouwer 不动点定理与 Hilbert 空间](../../02-math-analysis-ii/50-hilbert-spaces.md)

## 数学修正

**原文：**

> 用传统的第二型曲面积分的记法

**修正：**

> 用传统的第二型曲线积分的记法

**理由：** 该积分沿单位圆周∂D进行，且写成Pdx+Qdy，属于第二型曲线积分；原文曲面积分的维数名称错误。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \oint_{\partial D}(uv_y-vu_y)_x-(uv_x-vu_x)_y\,dxdy
> ```

**正文：**

> $$ \begin{aligned} I &= \oint_{\partial D} (uv_x - vu_x)dx + (uv_y - vu_y)dy \\ &= \int_{D} (uv_y - vu_y)_x - (uv_x - vu_x)_y \, dxdy \\ &= 0, \end{aligned} $$

**理由：** 源图在Green公式第二步把二维面积积分误标为沿一维边界的积分；Markdown已给正确的D上面积积分，保持正确式。

[相关正文：50：Brouwer 不动点定理与 Hilbert 空间](../../02-math-analysis-ii/50-hilbert-spaces.md)

## 数学修正

**原文：**

> 我们下个学期的学期也会

**修正：**

> 我们下个学期也会

**理由：** 原图重复学期词组，删去重复后保留函数空间分析的数学说明。

[相关正文：50：Brouwer 不动点定理与 Hilbert 空间](../../02-math-analysis-ii/50-hilbert-spaces.md)

## 数学修正

**原文：**

> 是范数，我们通常称它为 $L^1$-范数。

**修正：**

> 是半范数；它在商空间 $L^1(X,\mathcal A,\mu)$ 上诱导范数，我们通常称此范数为 $L^1$-范数。

**理由：** 本页该映射的定义域写为未取商的𝓛¹，非零但几乎处处为零的函数也取值零，所以它在𝓛¹上仅是半范数。除去零空间N取商后才是范数，与本页开头的商空间定义一致。

**原文：**

> 其次，我们内积空间

**修正：**

> 其次，我们定义内积空间

**理由：** 原图定义L²的语句缺少动词定义，补字后保留全部定义与内积公式。

**原文：**

> $$\mathcal{L}^\infty(X, \mathcal{A}, \mu) = \{ f : X \to \mathbb{C} \mid \text{存在 } M \in \mathbb{R}_{\geqslant 0}\text{，使得 } |f(x)| \leqslant M \text{ 几乎处处成立} \}.$$

**修正：**

> $$\mathcal{L}^\infty(X, \mathcal{A}, \mu) = \{ f : X \to \mathbb{C} \mid f\text{ 可测，且存在 } M \in \mathbb{R}_{\geqslant 0}\text{，使得 } |f(x)| \leqslant M \text{ 几乎处处成立} \}.$$

**理由：** 本质有界函数空间必须由可测函数构成，否则在不完备的测度空间上可能出现不可测但几乎处处为零的函数，零半范数核与前面定义的N不一致。补齐可测条件，和𝓛¹、𝓛²的定义相容。

[相关正文：50：Brouwer 不动点定理与 Hilbert 空间](../../02-math-analysis-ii/50-hilbert-spaces.md)

## 数学修正

**原文：**

> 存在正整数 $N_p$，使得当

**修正：**

> 可以选取严格递增的正整数 $N_p$（并令 $N_0=1$），使得当

**理由：** 后面称x_Np为子列并使用未定义的N₀，需显式递增选取指标并给出N₀。Cauchy条件的阈值可以任意增大，递归如此选取合法；首项有限，其余差项以2^(−p+1)界定，级数绝对收敛。

[相关正文：50：Brouwer 不动点定理与 Hilbert 空间](../../02-math-analysis-ii/50-hilbert-spaces.md)

## 数学修正

**原文：**

> $$F : X \to \mathbb{C}, \quad x \mapsto F(x) = \sum_{i=1}^\infty |f_i(x)|.$$

**修正：**

> $$F : X \to [0,+\infty], \quad x \mapsto F(x) = \sum_{i=1}^\infty |f_i(x)|.$$

**理由：** F由非负级数定义，未证明收敛之前可以取正无穷，后文也使用F取无穷的零测集。因此最初的值域应是扩展非负实数，而不能先声明为复数。

**原文：**

> $$\lim_{N \to \infty} \left\| \sum_{i=1}^N f_i(x) - f(x) \right\|_{L^1} = \int_X \left| \sum_{i=1}^N f_i(x) - f(x) \right| d\mu = 0.$$

**修正：**

> $$\lim_{N \to \infty} \left\| \sum_{i=1}^N f_i(x) - f(x) \right\|_{L^1} = \lim_{N\to\infty}\int_X \left| \sum_{i=1}^N f_i(x) - f(x) \right| d\mu = 0.$$

**理由：** 控制收敛结论是差函数绝对值的积分随N趋于无穷时趋于零；原图把中间含N的积分直接写成零，漏掉该项前的极限。补齐极限后与左侧L¹收敛完全相同。
