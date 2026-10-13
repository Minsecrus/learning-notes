# 勘误：77 紧算子、自伴算子与弱收敛

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 数学修正

**原文：**

> 总能找到 $T(A) \subset Y$ 中的点列 $\{T(x_k)\}_{k\geqslant 1}$, 使得 $\{T(x_k)\}_{k\geqslant 1}$ 在 $Y$ 中收敛

**修正：**

> 对 $T(A) \subset Y$ 中的任意点列 $\{T(x_k)\}_{k\geqslant 1}$, 总能找到一个在 $Y$ 中收敛的子列

**理由：** 原图只有存在一列，非空集合的常值列会使任何有界算子满足。902的无限正交基反例和906的任意子序列证明唯一确定任意点列、收敛子列量词。空集下新全称条件自然成立。

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 数学修正

**原文：**

> 先证明 1)。如果 $T$ 是紧算子, 对任意的 $A \subset X$ 是有界集合, 那么, 存在 $\{x_k\}_{k\geqslant 1} \subset A$, 使得 $\{T(x_k)\}_{k\geqslant 1}$ 在 $Y$ 中收敛。由于连续映射把收敛的序列映射为收敛的序列, 所以, $\{S(T(x_k))\}_{k\geqslant 1}$ 在 $Z$ 中收敛。这表明 $S \circ T$ 是紧算子。

**修正：**

> 先证明 1)。如果 $T$ 是紧算子, 任取有界点列 $\{x_k\}_{k\geqslant 1} \subset X$, 利用紧性可抽取子列 (仍记为 $\{x_k\}_{k\geqslant 1}$), 使得 $\{T(x_k)\}_{k\geqslant 1}$ 在 $Y$ 中收敛。由于连续映射把收敛的序列映射为收敛的序列, 所以, $\{S(T(x_k))\}_{k\geqslant 1}$ 在 $Z$ 中收敛。这表明 $S \circ T$ 是紧算子。

**理由：** 原图从集合中选择某一列不足以证紧性。仅明确任意给定点列及相应子列，原连续映射保存收敛的论证保持。

**原文：**

> 如果 $S$ 是紧算子, 对任意的 $A \subset X$ 是有界集合, 那么, 利用 $T$ 是有界线性算子, $T(A)$ 是 $Y$ 中的有界集合, 所以, 利用 $S$ 是紧算子, 存在序列 $\{T(x_k)\}_{k\geqslant 1} \subset T(A)$, 使得 $\{S(T(x_k))\}_{k\geqslant 1} \subset Z$ 是收敛的序列。这表明, 我们可以选取 $\{x_k\}_{k\geqslant 1} \subset A$, 使得 $\{S(T(x_k))\}_{k\geqslant 1}$ 在 $Z$ 中收敛, 从而 $S \circ T$ 是紧算子。

**修正：**

> 如果 $S$ 是紧算子, 任取有界点列 $\{x_k\}_{k\geqslant 1} \subset X$, 令 $A=\{x_k\}_{k\geqslant 1}$。利用 $T$ 是有界线性算子, $T(A)$ 是 $Y$ 中的有界集合, 所以, 利用 $S$ 是紧算子, 可以选取像点列的子列 (仍记为 $\{T(x_k)\}_{k\geqslant 1} \subset T(A)$), 使得 $\{S(T(x_k))\}_{k\geqslant 1} \subset Z$ 是收敛的序列。这表明, 对原点列可以选取相应子列 (仍记为 $\{x_k\}_{k\geqslant 1} \subset A$), 使得 $\{S(T(x_k))\}_{k\geqslant 1}$ 在 $Z$ 中收敛, 从而 $S \circ T$ 是紧算子。

**理由：** 原图同样只证明存在某列；保持有界映射作用与S抽子列的已有步骤，要求所选子列来自任意给定原点列。

**原文：**

> 现在证明 2)。假设 $A \subset X$ 是有界集合并且对任意的 $a \in A$, $\|a\|_X \leqslant M$。

**修正：**

> 现在证明 2)。任取有界点列 $\{x_k\}_{k\geqslant 1} \subset X$, 令 $A=\{x_k\}_{k\geqslant 1}$, 并且对任意的 $a \in A$, $\|a\|_X \leqslant M$, 其中 $M>0$。

**理由：** 闭性需从任意原点列开始，以便后续对角序列为其子列。绑定原集合A为原点列的集合，缩放与对角法原步骤保持；有界序列总可选正M。

**原文：**

> 根据 $T$ 的线性, 我们知道存在 $A$ 中点列使得其像收敛等价于存在 $\frac{1}{M} A$ 中点列使得其像收敛。

**修正：**

> 根据 $T$ 的线性, 我们知道原点列在 $A$ 中有子列使得其像收敛等价于缩放后的点列在 $\frac{1}{M} A$ 中有子列使得其像收敛。

**理由：** 集合中存在某列不够证明紧性；正数缩放一一对应原点列和子列，保留原缩放论证并修正量词。

**原文：**

> 对于 $T_1$ 而言, 利用紧性, 存在 $\{x_{1,k}\}_{k\geqslant 1} \subset A$,

**修正：**

> 对于 $T_1$ 而言, 利用紧性, 可以抽取原点列的子列 $\{x_{1,k}\}_{k\geqslant 1} \subset A$,

**理由：** 后续T2及以后已经逐次抽子列，第一步也须来自任意原点列；仅补这一联系。

**原文：**

> $T_{m+1}(x_{m,k})$ 在 $Y$ 中收敛

**修正：**

> $T_{m+1}(x_{m+1,k})$ 在 $Y$ 中收敛

**理由：** 原图为m，前句选出的为x_{m+1,k}子列，只能保证T_{m+1}作用于该子列收敛，不能保证作用于上一整列收敛。

**原文：**

> $\{x_{m,1}\}_{m\geqslant k} \subset \{x_{\ell,k}\}_{k\geqslant 1}$

**修正：**

> $\{x_{m,1}\}_{m\geqslant \ell} \subset \{x_{\ell,k}\}_{k\geqslant 1}$

**理由：** 原图尾集下界为k，前提是m>=ell；嵌套子列只能保证从ell项起的对角尾列位于第ell列。固定ell的尾部收敛仍为原论证。

**原文：**

> $$\|T_{\ell_1}(x) - T(x)\|_Y < \frac{\varepsilon}{4}, \quad \|T_{\ell_4}(x) - T(x)\|_Y < \frac{\varepsilon}{4}.$$

**修正：**

> $$\|T_{\ell_1}(x) - T(x)\|_Y < \frac{\varepsilon}{4}, \quad \|T_{\ell_2}(x) - T(x)\|_Y < \frac{\varepsilon}{4}.$$

**理由：** 原图为ell_4，前句仅选ell_1与ell_2，后文也只用i=1,2，所以索引可唯一修正。

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 数学修正

**原文：**

> **例子**. 考虑可分完备内积空间 $H$ 的一组 Hiblert 基 $\{e_k\}_{k\geqslant 1}$, 我们来说明 $e_k \rightharpoonup 0$:

**修正：**

> **例子**. 考虑可分完备内积空间 $H$ 的一组 Hilbert 基 $\{e_k\}_{k\geqslant 1}$, 我们来说明 $e_k \rightharpoonup 0$:

**理由：** 原图第二例确实拼写Hiblert，本页第一例与邻页904均为Hilbert，同一正交完备基名称可唯一确定。仅纠正英文姓名字序，不改变基、弱收敛叙述或其证明。

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> \|x_n-k\|\|y\|

**正文：**

> $$|(x_k, y) - (x, y)| = |(x_k - x, y)| \leqslant \|x_k - x\| \|y\| \to 0.$$

**理由：** 原图范数为x_n-k，前面内积(x_k-x,y)及Cauchy-Schwarz唯一确定应为x_k-x。canonical已有正确内容，不能恢复原书错误。

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 数学修正

**原文：**

> $$\sum_{j=1}^\infty |x_\infty^j|^2 = \sum_{j=1}^\infty \lim_{i \to \infty} |x_{k_i}^j|^2 \leqslant \lim_{i \to \infty} \sum_{j=1}^\infty |x_{k_i}^j|^2 \leqslant A^2.$$

**修正：**

> $$\sum_{j=1}^\infty |x_\infty^j|^2 = \sum_{j=1}^\infty \lim_{i \to \infty} |x_{k_i}^j|^2 \leqslant \liminf_{i \to \infty} \sum_{j=1}^\infty |x_{k_i}^j|^2 \leqslant A^2.$$

**理由：** 原图为lim，逐分量收敛不保证范数平方之和收敛，0与不断变化的正交基交替就给反例。Fatou唯一给出liminf。原图h索引已在canonical改为j，此处不重复修改。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \sum_{j=1}^{\infty}|x_{k_i}^{h}|^2
> ```

**正文：**

> $$\sum_{j=1}^\infty |x_\infty^j|^2 = \sum_{j=1}^\infty \lim_{i \to \infty} |x_{k_i}^j|^2 \leqslant \liminf_{i \to \infty} \sum_{j=1}^\infty |x_{k_i}^j|^2 \leqslant A^2.$$

**理由：** 原图Fatou右侧求和出现未定义h，指标应为j。canonical已有j，仅透明记录，不重复修正。

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 数学修正

**原文：**

> 由于 $N$ 固定, 所以

**修正：**

> 令 $B=\max(1,|a_1|,\ldots,|a_N|)$。由于 $N$ 固定, 所以

**理由：** 904的任意y展开含a_j，905原估计漏这些系数。用有限共同上界B修复原有限项估计，尾项和有限项拆分保持，须与另三项合用。

**原文：**

> $$|(x_{k_i} - x_\infty, e_j)| \leqslant \frac{\varepsilon}{2N}.$$

**修正：**

> $$|(x_{k_i} - x_\infty, e_j)| \leqslant \frac{\varepsilon}{2NB}.$$

**理由：** 固定N后各分量趋于0，可取共同阈值epsilon/(2NB)；与系数上界及求和联动，不能假设任意y的系数皆不超过1。

**原文：**

> $$\begin{aligned}
> |(x_{k_i} - x_\infty, y)| &\leqslant |(x_{k_i} - x_\infty, y')| + \sum_{j \leqslant N} |(x_{k_i} - x_\infty, e_j)| \\
> &\leqslant 2A \times \frac{\varepsilon}{4A} + N \times \frac{\varepsilon}{2N}
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> |(x_{k_i} - x_\infty, y)| &\leqslant |(x_{k_i} - x_\infty, y')| + \sum_{j \leqslant N} |a_j|\, |(x_{k_i} - x_\infty, e_j)| \\
> &\leqslant 2A \times \frac{\varepsilon}{4A} + NB \times \frac{\varepsilon}{2NB}
> \end{aligned}$$

**理由：** 内积第二变量共轭线性，有限项绝对值估计必须保留|a_j|，这直接由904的y展开唯一确定。

**原文：**

> $$\begin{aligned}
> |(x_{k_i} - x_\infty, y)| &\leqslant |(x_{k_i} - x_\infty, y')| + \sum_{j \leqslant N} |(x_{k_i} - x_\infty, e_j)| \\
> &\leqslant 2A \times \frac{\varepsilon}{4A} + N \times \frac{\varepsilon}{2N}
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> |(x_{k_i} - x_\infty, y)| &\leqslant |(x_{k_i} - x_\infty, y')| + \sum_{j \leqslant N} |a_j|\, |(x_{k_i} - x_\infty, e_j)| \\
> &\leqslant 2A \times \frac{\varepsilon}{4A} + NB \times \frac{\varepsilon}{2NB}
> \end{aligned}$$

**理由：** N个系数各不超过B，每项分量界epsilon/(2NB)，有限项总界仍为epsilon/2，与尾项的epsilon/2合起来得到原结论。四项共同应用，保留原证明路线。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \frac{\varepsilon}{2N}=\varepsilon
> ```

**正文：**

> $$|(x_{k_i} - x_\infty, e_j)| \leqslant \frac{\varepsilon}{2NB}.$$

**理由：** 原图有限项界错误追加=epsilon；一般N不等于1/2。canonical已删除错误等号，禁止恢复。

[相关正文：77：紧算子、自伴算子与弱收敛](../../03-math-analysis-iii/77-compact-operators.md)

## 数学修正

**原文：**

> **证明**: 2) $\Rightarrow$ 1) 是显然的: 对任意的有界集 $A \subset H$, 我们总可以选出一个弱收敛的序列 $\{x_k\}_{k \geqslant 1} \subset A$, 使得 $x_k \rightharpoonup x_\infty$, 所以, 2) 表明 $A(x_k) \to A(x_\infty)$, 这说明 $A$ 是紧算子。

**修正：**

> **证明**: 2) $\Rightarrow$ 1) 是显然的: 任取 $H$ 中的有界点列, 利用定理 518 可以抽取弱收敛子列 (仍记为 $\{x_k\}_{k\geqslant 1}$), 使得 $x_k \rightharpoonup x_\infty$。所以, 2) 表明 $A(x_k) \to A(x_\infty)$, 这说明 $A$ 是紧算子。

**理由：** 原图从任意集合选某列，不能证明任意原点列有像收敛子列。定理518已在904–905证明，明确对任意原点列抽弱收敛子列即可，保留原已有推理。
