# 勘误：6 指数函数与三角函数

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)

## 数学修正

**原文：**

> $$
> \frac{a_n}{n} \leqslant \frac{\ell a_k + a_r}{n} = \frac{\ell a_k + a_r}{\ell k + r}.
> $$

**修正：**

> $$
> \frac{x_n}{n} \leqslant \frac{\ell x_k + x_r}{n} = \frac{\ell x_k + x_r}{\ell k + r}.
> $$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图题目和数列有界性都用x_n，证明显示式突然用未定义a_n,a_k,a_r。由次可加性重复ell次得到x_n<=ell x_k+x_r，恢复所有指标为x统一同一数列，不更改证明结构。

**原文：**

> $$
> \lim_{i \to \infty} \frac{a_{n_i}}{n_i} \to \limsup \frac{a_n}{n}.
> $$

**修正：**

> $$
> \lim_{i \to \infty} \frac{x_{n_i}}{n_i} = \limsup_{n \to \infty} \frac{x_n}{n}.
> $$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图此处使用未定义a数列并写极限值“趋向”上极限。正在选取实现上极限的子列，前面已证明x_n/n有界，因此子列的极限应等于其上极限；改x指标并用等号恢复同一极限关系。

**原文：**

> 从而，$\frac{\ell_i a_k + a_{r_i}}{\ell_i k + r_i} \to \frac{a_k}{k}$。所以，我们得到
>
> $$
> \limsup_{n \to \infty} \frac{a_n}{n} \leqslant \frac{a_k}{k}.
> $$

**修正：**

> 从而，$\frac{\ell_i x_k + x_{r_i}}{\ell_i k + r_i} \to \frac{x_k}{k}$。所以，我们得到
>
> $$
> \limsup_{n \to \infty} \frac{x_n}{n} \leqslant \frac{x_k}{k}.
> $$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图题设为x_n，证明仍用未定义a_k,a_{r_i},a_n；这一复合候选仅在相邻两个极限式统一为x。k固定时r_i取有限余数，分子商趋x_k/k；子列极限取得limsup(x_n/n)，故上下文唯一使用同一x数列。两处变量修复都正确。

**原文：**

> $$
> \limsup_{n \to \infty} \frac{a_n}{n} \leqslant \liminf_{k \to \infty} \frac{a_k}{k}.
> $$

**修正：**

> $$
> \limsup_{n \to \infty} \frac{x_n}{n} \leqslant \liminf_{k \to \infty} \frac{x_k}{k}.
> $$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图最终上、下极限仍误用a，需统一为题设x，才使上下极限不等式证明x_n/n收敛。没有新增证明步骤。

**原文：**

> 假设对任意的自然数 $m$ 和 $n$，都有 $x_{m+n} \leqslant x_m + x_n$

**修正：**

> 假设对任意的正整数 $m$ 和 $n$，都有 $x_{m+n} \leqslant x_m + x_n$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图数列指标n>=1，课程[3.1：作业：可数与不可数，Schroeder-Bernstein定理](../../01-math-analysis-i/03-dedekind-cuts/03-03-p0036-0039.md)约定自然数含0，因此本句对任意自然数会引用尚未定义x_0。次可加性条件实际只需正整数m,n；证明对r=0的余项可以另约定x_0=0安全扩展。此处修正量词域。

**原文：**

> 证明：先固定一个自然数 $k$。对任意的 $n = \ell k + r$

**修正：**

> 证明：约定 $x_0 = 0$，先固定一个正整数 $k$。对任意的 $n = \ell k + r$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图k用于整数除法n=ell k+r及后文x_k/k，故必须k>=1；原自然数含0。r可以为0，原数列仅有正整数指标，在不引入新证明的前提下须声明x_0=0，该扩展与正整数次可加性兼容（x_{m+0}=x_m<=x_m+0）。

[相关正文：指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)

## 数学修正

**原文：**

> **练习.** （重要！）证明，我们可以我们 $\mathbb{C}$ 上的指数函数：

**修正：**

> **练习.** （重要！）证明，我们可以定义 $\mathbb{C}$ 上的指数函数：

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)源图重复“我们可以我们”，紧邻显示式给exp:C→C以级数定义，而段首“指数函数的构造”、上段“我们可以定义”皆明确本练习要求证明此定义良好。因此改为“我们可以定义”恢复句子且不提供解答。

**原文：**

> 一个双指标序列的重排 $\{y_n\}_{n \geqslant 1}$ 直观上说的我们要求当每个 $a_{i,j}$（位置不同的时候视作是不同的）都在数列 $\{y_n\}_{n \geqslant 1}$ 中出现且只出现一次并且 $\{y_n\}_{n \geqslant 1}$ 中不再出现别的项。

**修正：**

> 一个双指标序列的重排 $\{y_n\}_{n \geqslant 1}$ 直观上说的我们要求当每个 $x_{i,j}$（位置不同的时候视作是不同的）都在数列 $\{y_n\}_{n \geqslant 1}$ 中出现且只出现一次并且 $\{y_n\}_{n \geqslant 1}$ 中不再出现别的项。

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)前一显示式已定义F(i,j)=x_{i,j}且后面y_n=x_{Phi(n)}，重排直观释义中的a_{i,j}没有定义；源图确印a，用x与同一双指标序列一致，仅名称修复。

**原文：**

> 所谓的**重排**指的是一个双射 $\Phi : \mathbb{Z}_{\geqslant 1} \to \mathbb{Z}_{\geqslant 1} \times \mathbb{Z}$，从而对任意的 $n \geqslant 1$，我们令 $y_n = x_{\Phi(n)}$，其中 $\Phi(n) \in \mathbb{Z}_{\geqslant 1} \times \mathbb{Z}$ 是一个双指标。

**修正：**

> 所谓的**重排**指的是一个双射 $\Phi : \mathbb{Z}_{\geqslant 1} \to \mathbb{Z}_{\geqslant 1} \times \mathbb{Z}_{\geqslant 1}$，从而对任意的 $n \geqslant 1$，我们令 $y_n = x_{\Phi(n)}$，其中 $\Phi(n) \in \mathbb{Z}_{\geqslant 1} \times \mathbb{Z}_{\geqslant 1}$ 是一个双指标。

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图先声明双指标x_{i,j},i,j>=1，并给F域为Z>=1×Z>=1；Phi全域枚举这些指标，因此第二因子必须正整数集合。拟改两处补>=1消除负数/零指标未定义，与已经声明的F域一致。

**原文：**

> $$
> \left| \frac{x^k}{k!} \right| \leqslant \frac{1}{2^k} \quad (\Leftrightarrow (2M)^k \leqslant k!, \text{ 如果 } k \ge M)
> $$

**修正：**

> $$
> \left| \frac{x^k}{k!} \right| \leqslant \frac{1}{2^k} \quad (\Leftrightarrow (2M)^k \leqslant k!, \text{ 如果 } k \geqslant N)
> $$

**理由：** [指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)原图不等式(2M)^k<=k!后写“如果k>=M”，该阈值不成立，如M=2,k=2时16>2。前文刚选择N使所有k>=N满足|x^k/k!|<=2^{-k}，等价的阶乘式也适用于同一阈值N。替M为N恢复明确已有条件，未替练习增加解答。

[相关正文：指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)

## 数学修正

**原文：**

> 为了证明绝对收敛的情形，我们要把级数分拆成两个部分。首先对于任意的实数其中给定实数 $x$，我们定义

**修正：**

> 为了证明绝对收敛的情形，我们要把级数分拆成两个部分。首先对于给定实数 $x$，我们定义

**理由：** 源图实际含“任意的实数其中给定实数”这一重复语病，属于source_typo；保持指定实数x后定义正负部分的数学内容，删重复片段。

[相关正文：指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \sum_{k=1}^{\infty} c_n &= \Big(\sum_{k=1}^{\infty} a_k^+\Big)\Big(\sum_{k=1}^{\infty} b_k^+\Big) + \Big(\sum_{k=1}^{\infty} a_k^-\Big)\Big(\sum_{k=1}^{\infty} b_k^-\Big) - \Big(\sum_{k=1}^{\infty} a_k^+\Big)\Big(\sum_{k=1}^{\infty} b_k^-\Big) - \Big(\sum_{k=1}^{\infty} a_k^-\Big)\Big(\sum_{k=1}^{\infty} b_k^+\Big) \\
> &= \Big(\sum_{k=1}^{\infty} a_k^+ + \sum_{k=1}^{\infty} a_k^-\Big)\Big(\sum_{k=1}^{\infty} b_k^+ + \sum_{k=1}^{\infty} b_k^-\Big) \\
> &= \Big(\sum_{k=1}^{\infty} a_k\Big)\Big(\sum_{k=1}^{\infty} b_k\Big).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \sum_{k=1}^{\infty} c_n &= \Big(\sum_{k=1}^{\infty} a_k^+\Big)\Big(\sum_{k=1}^{\infty} b_k^+\Big) + \Big(\sum_{k=1}^{\infty} a_k^-\Big)\Big(\sum_{k=1}^{\infty} b_k^-\Big) - \Big(\sum_{k=1}^{\infty} a_k^+\Big)\Big(\sum_{k=1}^{\infty} b_k^-\Big) - \Big(\sum_{k=1}^{\infty} a_k^-\Big)\Big(\sum_{k=1}^{\infty} b_k^+\Big) \\
> &= \Big(\sum_{k=1}^{\infty} a_k^+ - \sum_{k=1}^{\infty} a_k^-\Big)\Big(\sum_{k=1}^{\infty} b_k^+ - \sum_{k=1}^{\infty} b_k^-\Big) \\
> &= \Big(\sum_{k=1}^{\infty} a_k\Big)\Big(\sum_{k=1}^{\infty} b_k\Big).
> \end{aligned}
> $$

**理由：** 源图括号内确印加号，属于source_typo。[指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)定义x=x^+−x^-，且本行前一展开为A+B+ + A−B− − A+B− − A−B+，因式分解必为(A+−A−)(B+−B−)，两处负号由展开独立验证。

**原文：**

> **练习.** 试证明级数形式的 *Funibi* 定理：假设级数

**修正：**

> **练习.** 试证明级数形式的 *Fubini* 定理：假设级数

**理由：** 源图实际人名Funibi转置字母；该换序求和定理指Fubini，修正拼写不增添练习解答。

## 未决数学问题

**原文：**

> 假设级数 $\sum_{k=2}^{\infty} \Big(\sum_{j=1}^{k} a_j b_{k-j}\Big)$ 是绝对收敛的（复数）级数

**问题：** Fubini练习只假设对角先求和所得级数绝对收敛，不能推出绝对双重和。a1=1,a2=−1其他0、bj=1时对角仅首项非零但∑bj发散；需∑k∑j|a_j b_(k−j)|<∞，原意不唯一。

[相关正文：指数函数与三角函数](../../01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064.md)

## 数学修正

**原文：**

> $$
> \cos z = \frac{e^{iz} + e^{-iz}}{2} = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!}, \quad \sin z = \frac{e^{iz} - e^{-iz}}{2i} = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!}.
> $$

**修正：**

> $$
> \cos z = \frac{e^{iz} + e^{-iz}}{2} = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k}}{(2k)!}, \quad \sin z = \frac{e^{iz} - e^{-iz}}{2i} = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k+1}}{(2k+1)!}.
> $$

**理由：** 源图确印x幂，属于source_typo。定义cos z、sin z的自变量为任意复数z，由exp(±iz)的幂级数相加相减，偶/奇次项均须z幂，x未绑定。

**原文：**

> 目前 $\sin(z)$ 和 $\cos(z)$ 使用级数来定义的。

**修正：**

> 目前 $\sin(z)$ 和 $\cos(z)$ 是使用级数来定义的。

**理由：** 源图缺系词“是”，属于source_typo；恢复“是使用级数来定义的”保持定义说明。

**原文：**

> 3 中学数学里我们是这样定义三角函数的：

**修正：**

> 2) 中学数学里我们是这样定义三角函数的：

**理由：** 源图注记首项1)、下一项单独3且没有第二项；此处应顺序2)，修正源编号误印。

[相关正文：6.1：作业：Riemann重排，Cesàro求和，Banach-Mazur游戏](../../01-math-analysis-i/06-exponential-trigonometric/06-03-p0065-0070.md)

## 数学修正

**原文：**

> $$
> a_n = \prod_{k=1}^n (1 + \frac{1}{p_n}).
> $$

**修正：**

> $$
> a_n = \prod_{k=1}^n (1 + \frac{1}{p_k}).
> $$

**理由：** 源图连乘分母确印p_n，属于source_typo。若每因子固定p_n，快速增长条件使(1+1/p_n)^n→1，违背H1极限属于(1,2]；使用p_k才是累积前n项的乘积，与H2编码全部序列相符。

**原文：**

> I1) 对任意 $s = \{s_n\}_{n \geqslant 1} \in \mathcal{S}$，我们定义数列

**修正：**

> I1) 对任意 $s = \{s_n\}_{n \geqslant 0} \in \mathcal{S}$，我们定义数列

**理由：** 源图I1印n≥1，而同页集合S定义n≥0且[6.1：作业：Riemann重排，Cesàro求和，Banach-Mazur游戏](../../01-math-analysis-i/06-exponential-trigonometric/06-03-p0065-0070.md)用s0，属于source_typo。统一序列从0起，仍需另补公式漏s0，不能仅改范围就声称全部练习正确。

**原文：**

> $$
> c_n = \sum_{k=0}^n \frac{s_1 s_2 \cdots s_k}{2^k}.
> $$

**修正：**

> $$
> c_n = \sum_{k=0}^n \frac{s_0 s_1 s_2 \cdots s_k}{2^k}.
> $$

**理由：** 源图分子漏s0。原空乘积1导致c0=1、极限独立s0只能在[0,2]，与[-2,2]满射及[6.1：作业：Riemann重排，Cesàro求和，Banach-Mazur游戏](../../01-math-analysis-i/06-exponential-trigonometric/06-03-p0065-0070.md)根式前因子s0矛盾。补s0后c0=s0，半角递推恰给I3根式。

[相关正文：6.1：作业：Riemann重排，Cesàro求和，Banach-Mazur游戏](../../01-math-analysis-i/06-exponential-trigonometric/06-03-p0065-0070.md)

## 数学修正

**原文：**

> I3) 对于 $s = \{s_n\}_{n \geqslant 1} \in \mathcal{S}$，证明，

**修正：**

> I3) 对于 $s = \{s_n\}_{n \geqslant 0} \in \mathcal{S}$，证明，

**理由：** 源图I3印n≥1，而根式明确用s0且集合S定义n≥0；属于source_typo，统一指标域。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> h:S→(1,2]

**正文：**

> $h : \mathcal{S} \to [-2, 2]$

**理由：** 源图值域沿用H，canonical已正确恢复二进制值域。
