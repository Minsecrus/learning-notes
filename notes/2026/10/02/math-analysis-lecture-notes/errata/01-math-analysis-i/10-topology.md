# 勘误：10 开闭集、紧集与连续性

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：开闭集、紧集与连续性](../../01-math-analysis-i/10-topology/10-01-p0102-0106.md)

## 数学修正

**原文：**

> 在 $\mathbb{R}_{>0,\neq 1} \times \mathbb{R}_{>0} \to \mathbb{R}$ 有自然的距离函数

**修正：**

> 在 $\mathbb{R}_{>0,\neq 1} \times \mathbb{R}_{>0}$ 有自然的距离函数

**理由：** 源图实际把箭头与值域写入距离空间对象，属于source_typo；距离定义在乘积集合本身，应删去→R保持前面LOG映射仍有该值域。

**原文：**

> $$
> D : \mathbb{R}_{>0,\neq 1} \times \mathbb{R}_{>0} \longrightarrow \mathbb{R}, \quad (y, x) \mapsto \frac{y}{x}.
> $$

**修正：**

> $$
> D : \mathbb{R}_{\neq 0} \times \mathbb{R} \longrightarrow \mathbb{R}, \quad (y, x) \mapsto \frac{x}{y}.
> $$

**理由：** 源图D的定义域与分式都错误，属于source_typo。F(a,x)=(log a,log x)∈R≠0×R，故D(y,x)=x/y才得到log_a x；原D无法复合且给倒数。

[相关正文：开闭集、紧集与连续性](../../01-math-analysis-i/10-topology/10-01-p0102-0106.md)

## 数学修正

**原文：**

> 都存在 $x' \in X$，使得 $d(x', x) < \varepsilon$

**修正：**

> 都存在 $x' \in X'$，使得 $d(x', x) < \varepsilon$

**理由：** 源图误印X。稠密定义须从指定子集X′找逼近点，原X条件对任意子集都自动成立（取x′=x）而不等价稠密。

**原文：**

> 即 $x$ 中的每个点都可以用 $X'$ 中的点来逼近

**修正：**

> 即 $X$ 中的每个点都可以用 $X'$ 中的点来逼近

**理由：** 源图小写x指代集合错误；此解释需大写空间X中每个点，类型修复。

**原文：**

> 对任意的连续映射 $F_1 : X' \to Y$ 和 $F_2 : X' \to Y$

**修正：**

> 对任意的连续映射 $F_1 : X \to Y$ 和 $F_2 : X \to Y$

**理由：** 源图错误定义域X′，属于source_typo。限制F_i|X′且证明在X任意x取极限，只有定义在X上的连续映射才有该全局结论。

[相关正文：开闭集、紧集与连续性](../../01-math-analysis-i/10-topology/10-01-p0102-0106.md)

## 数学修正

**原文：**

> (1) 如果 $U \subset \mathbb{R}$ 是开区间的并，即 $U = \bigcup\limits_{\alpha \in A} I_\alpha$，其中 $I_\alpha$ 是开区间（指标集 $A$ 是任意的），就称 $X$ 是**开集**。

**修正：**

> (1) 如果 $U \subset \mathbb{R}$ 是开区间的并，即 $U = \bigcup\limits_{\alpha \in A} I_\alpha$，其中 $I_\alpha$ 是开区间（指标集 $A$ 是任意的），就称 $U$ 是**开集**。

**理由：** 源图称X，但被定义集合为U，X未绑定；恢复开集对象U。

**原文：**

> 1) $\emptyset \in \mathcal{T}$，$X \in \mathcal{T}$。

**修正：**

> 1) $\emptyset \in \mathcal{T}$，$\mathbb{R} \in \mathcal{T}$。

**理由：** 源图写X而命题是R的标准拓扑，X未定义；全集须R，完整拓扑满足空集及全集都是开集。

[相关正文：开闭集、紧集与连续性](../../01-math-analysis-i/10-topology/10-01-p0102-0106.md)

## 数学修正

**原文：**

> 从而 $(x_1, x_2) \in \mathcal{I}_x$ 中，所以 $(x_1, x_2) \subset \mathbf{I}_x$。

**修正：**

> 从而 $I_1 \cup I_2 \in \mathcal{I}_x$，所以 $(x_1, x_2) \subset \mathbf{I}_x$。

**理由：** 源图(x1,x2)∈I_x错误，因为x未必在这两个点之间。I1,I2都含x，其并是含x且属于U的开区间，故I1∪I2∈I_x；这推出(x1,x2)包含于该并再包含于大区间。

[相关正文：开闭集、紧集与连续性](../../01-math-analysis-i/10-topology/10-01-p0102-0106.md)

## 数学修正

**原文：**

> 由于 $U$ 是开集，存在 $\delta > 0$，是的对任意满足 $|y - y_0| < \delta$ 的 $y$，我们都有 $y \in U$。

**修正：**

> 由于 $U$ 是开集，存在 $\delta > 0$，使得对任意满足 $|y - y_0| < \delta$ 的 $y$，我们都有 $y \in U$。

**理由：** 源图“是的”错字，恢复存在δ使得的量词句。

**原文：**

> 这说明对任意的 $\delta$，存在 $\varepsilon$，使得当 $x - x_0| < \varepsilon$ 时，我们有 $|f(x) - f(x_0)| < \delta$

**修正：**

> 这说明对任意的 $\delta$，存在 $\varepsilon$，使得当 $|x - x_0| < \varepsilon$ 时，我们有 $|f(x) - f(x_0)| < \delta$

**理由：** 源图左绝对值符号已正确，canonical漏录，恢复|x−x0|<ε与函数连续的邻域条件。

**原文：**

> 根据 $\overline{X}$ 是闭区间，所以 $x \in \overline{X}$。

**修正：**

> 根据 $\overline{X}$ 是闭集，所以 $x \in \overline{X}$。

**理由：** 源图实际写闭区间，属于source_typo。任意子集闭包是闭集但可以不连通，如X={0,2}，不能称区间；闭集对序列极限封闭才是所用性质。

**原文：**

> 不妨假设 $x \notin X$。那么，对任意的任意 $n > 0$

**修正：**

> 不妨假设 $x \notin X$。那么，对任意 $n > 0$

**理由：** 源图也重复任意，属于source_typo；删冗字量词不变。

[相关正文：10.1：数学分析一作业4](../../01-math-analysis-i/10-topology/10-02-p0107-0110.md)

## 数学修正

**原文：**

> 就称 $X$ 是距离空间 $(X, d)$ 中的**开集**。

**修正：**

> 就称 $U$ 是距离空间 $(X, d)$ 中的**开集**。

**理由：** 源图称X，属于source_typo。开集定义对象为球的并U，之后也是证明U开条件，故统一为U。

[相关正文：10.1：数学分析一作业4](../../01-math-analysis-i/10-topology/10-02-p0107-0110.md)

## 数学修正

**原文：**

> 2) 对任意 $Y$ 中的闭集 $F$，其逆像 $f^{-1}(F)$ 为 $X$ 中的闭集。

**修正：**

> 3) 对任意 $Y$ 中的闭集 $F$，其逆像 $f^{-1}(F)$ 为 $X$ 中的闭集。

**理由：** 源图重复编号2)，属于source_typo。三条等价陈述依次1、2、3，闭集逆像为第三项。

[相关正文：10.1：数学分析一作业4](../../01-math-analysis-i/10-topology/10-02-p0107-0110.md)

## 数学修正

**原文：**

> C8) 假设连续函数 $f : [a, b] \to \mathbb{R}$ 是单射。如果 $f(a) < f(b)$，证明，$f$ 是严格递增的的。

**修正：**

> C8) 假设连续函数 $f : [a, b] \to \mathbb{R}$ 是单射。如果 $f(a) < f(b)$，证明，$f$ 是严格递增的。

**理由：** 源图也重复的，属于source_typo；删除重复不变练习。
