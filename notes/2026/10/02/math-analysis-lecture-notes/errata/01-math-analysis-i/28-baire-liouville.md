# 勘误：28 Baire 纲定理与 Liouville 定理

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> 我们注意到，$U$ 未必是开集

**修正：**

> 我们注意到，$U_\infty$ 未必是开集

**理由：** 这里讨论可数个稠密开集的交，源图变量U漏掉下标∞；有限交封闭性的说明指向U∞。

**原文：**

> 任选 $x \in X$ 和 $\varepsilon_0$

**修正：**

> 任选 $x \in X$ 和 $\varepsilon_0 > 0$

**理由：** 稠密性需要任意正半径；源图未明确ε0正性，且后文要求0<2ε1<ε0，须补充。

**原文：**

> $\overline{B(x_1, 2\varepsilon_1)} = \left\{ y \in X \mid d(y, x) \leqslant 2\varepsilon_1 \right\}$

**修正：**

> $\overline{B(x_1, 2\varepsilon_1)} = \left\{ y \in X \mid d(y, x_1) \leqslant 2\varepsilon_1 \right\}$

**理由：** 闭球B(x1,2ε1)的中心必须是x1；源图错误写x，与紧邻的球名及构造不一致。

**原文：**

> （其中 $x_0 = x$，$\varepsilon_0 = \varepsilon$）

**修正：**

> （其中 $x_0 = x$，$\varepsilon_0$ 是一开始选取的正半径）

**理由：** 证明一开始只选取ε0，ε并未定义；统一使用已有初始半径ε0而不引入悬空变量。

**原文：**

> 对任意的自然数 $n$ 和 $p$，我们有

**修正：**

> 对任意的 $n \geqslant 0$ 和 $p \geqslant 1$，我们有

**理由：** 后续严格求和估计需要至少一步，p=0的零和无法满足严格小于；源图将p写任意自然数。

**原文：**

> $$d(x_{n+p}, x_n) \leqslant d(x_{n+p}, x_{n+p-1}) + d(x_{n+p-2}, x_{n+p-2}) + \cdots + d(x_{n+1}, x_n)$$
>
> $$< \varepsilon_{n+p} + \varepsilon_{n+p-1} + \cdots + \varepsilon_{n+1}$$
>
> $$< 2^{-p-1}\varepsilon_n + 2^{-p-2}\varepsilon_n + \cdots + \varepsilon_n$$

**修正：**

> $$d(x_{n+p}, x_n) \leqslant d(x_{n+p}, x_{n+p-1}) + d(x_{n+p-1}, x_{n+p-2}) + \cdots + d(x_{n+1}, x_n)$$
>
> $$< \varepsilon_{n+p-1} + \varepsilon_{n+p-2} + \cdots + \varepsilon_n$$
>
> $$\leqslant 2^{-(p-1)}\varepsilon_n + 2^{-(p-2)}\varepsilon_n + \cdots + \varepsilon_n$$

**理由：** 源图把一个距离项写成d(xn+p−2,xn+p−2)，半径和也错移一位，幂次并非几何级数。由d(xj+1,xj)<εj及εn+k≤2^-k εn得所列有限和，再与下一行<2εn衔接。

**原文：**

> $$d(x_{n+p}, x_n) < 2^{-n+p}\varepsilon + 2^{-n+p-1}\varepsilon + \cdots + 2^{-n+1}\varepsilon = 2^{-n}\varepsilon.$$

**修正：**

> $$d(x_{n+p}, x_n) < \sum_{k=0}^{p-1} 2^{-(n+k)}\varepsilon_0 < 2^{1-n}\varepsilon_0.$$

**理由：** 实际每步距离受εn+k控制，且εn+k≤2^-(n+k)ε0。有限几何和小于2^(1−n)ε0；源图正负幂与等号均错误。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> 特别地，在最后一个不等式中取 $n = 0$，我们有
>
> $$d(x_p, x_0) < \varepsilon.$$
>
> 令 $p \to \infty$，我们就得到 $d(x_\infty, x) < 2\varepsilon$。$\square$

**修正：**

> 特别地，利用 $x_\infty \in \overline{B(x_1, 2\varepsilon_1)}$，我们有
>
> $$d(x_\infty, x) \leqslant d(x_\infty, x_1) + d(x_1, x) < 2\varepsilon_1 + \varepsilon_0 < 2\varepsilon_0.$$
>
> 因此找到了所需的点 $x_\infty$。$\square$

**理由：** 上一页的有限几何和只能给出2ε0的界，源图d(xp,x0)<ε不成立。用已有闭球x∞∈B闭(x1,2ε1)和d(x1,x)<ε0、2ε1<ε0直接严格证明原目标，保持原构造。

**原文：**

> 即对于每个点 $x \in [a, b]$，$f'(x) = \displaystyle\lim_{n \to \infty} f_n(x)$ 存在。

**修正：**

> 即对于每个点 $x \in [a, b)$，$f'(x) = \displaystyle\lim_{n \to \infty} f_n(x)$ 存在；在 $x=b$ 处，$f_n(b)=0$。

**理由：** 源图右端点截断差商fn(b)恒为0，通常不等于f′(b)，例如f(x)=x；内点逐点收敛正确，b处仍然有界且不影响Baire证明。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> 即对任意的 $x \in (c, d)$,对任意的 $n \geqslant 1$,我们都有

**修正：**

> 即对任意的 $x \in (c, d)$,当 $n$ 足够大以使 $x+1/n \leqslant b$ 时,我们都有

**理由：** 源图显示未截断差商但量词写任意n；靠近b时x+1/n会超出定义域。对每个内点限制充分大的n即可用于后面的极限。

**原文：**

> **命题 163.** 不存在 $[0, 1]$ 上的连续函数序列 $\{f_n\}_{n \geqslant 1} \in C([0, 1])$,使得 $f_n$ 逐点收敛到 $\mathbf{1}_{\mathbb{Q}}$（即有理数的示性函数）。

**修正：**

> **命题 163.** 不存在 $[0, 1]$ 上的连续函数序列 $\{f_n\}_{n \geqslant 1} \subset C([0, 1])$,使得 $f_n$ 逐点收敛到 $\mathbf{1}_{\mathbb{Q}}$（即有理数的示性函数）。

**理由：** 源图把函数序列整体写为单个函数空间的元素；这里每个fn属于C([0,1])，故用子集符号。

**原文：**

> **证明:** 如若不然,我们假设存在 $\{f_n\}_{n \geqslant 1} \in C([0, 1])$,使得对任意的 $x \in [0, 1]$,我们都有

**修正：**

> **证明:** 如若不然,我们假设存在 $\{f_n\}_{n \geqslant 1} \subset C([0, 1])$,使得对任意的 $x \in [0, 1]$,我们都有

**理由：** 源图把函数序列整体写为单个函数空间的元素；这里每个fn属于C([0,1])，故用子集符号。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> 实际上,假设 $v \in V$

**修正：**

> 实际上,假设 $v \in V_k$

**理由：** 证明Vk没有内点应从v∈Vk出发；对任意v∈V，v+εek+1不在Vk的断言为假，例如v=−εek+1。源图亦写V。

**原文：**

> 的子空间 $D$

**修正：**

> 的子集 $D$

**理由：** 至少一点可微的连续函数集合不对加法封闭；可将一个处处不可微函数用互补光滑截断分成两个在不同开区间恒零的函数，二者各属于D但和不属于D。源图“子空间”错误。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> $$\mathbb{C}(f_1, \cdots, f_n) = \left\{ \frac{\displaystyle\sum_{0 \leqslant i_1, i_2, \cdots, i_n \leqslant k} a_{i_1, i_2, \cdots, i_k} (f_1)^{i_1}(f_2)^{i_2} \cdots (f_k)^{i_k}}{\displaystyle\sum_{0 \leqslant j_1, j_2, \cdots, j_n \leqslant \ell} b_{j_1, j_2, \cdots, j_\ell} (f_1)^{j_1}(f_2)^{j_2} \cdots (f_\ell)^{j_\ell}} \,\middle|\, k, \ell \in \mathbb{Z}_{\geqslant 0},\, a_{i_1, i_2, \cdots, i_k},\, b_{j_1, j_2, \cdots, j_\ell} \in \mathbb{C} \right\}.$$

**修正：**

> $$\mathbb{C}(f_1, \cdots, f_n) = \left\{ \frac{\displaystyle\sum_{0 \leqslant i_1, i_2, \cdots, i_n \leqslant k} a_{i_1, i_2, \cdots, i_n} (f_1)^{i_1}(f_2)^{i_2} \cdots (f_n)^{i_n}}{\displaystyle\sum_{0 \leqslant j_1, j_2, \cdots, j_n \leqslant \ell} b_{j_1, j_2, \cdots, j_n} (f_1)^{j_1}(f_2)^{j_2} \cdots (f_n)^{j_n}} \,\middle|\, k, \ell \in \mathbb{Z}_{\geqslant 0},\, a_{i_1, i_2, \cdots, i_n},\, b_{j_1, j_2, \cdots, j_n} \in \mathbb{C},\ \text{分母不恒为零} \right\}.$$

**理由：** 源图混淆变量个数n与次数上界k、ℓ：每个单项式应有n个指数及fn尾项，系数也有n个下标。商函数需排除恒零分母，否则不是域元素。

**原文：**

> 所新添进去的元素 $f_k$

**修正：**

> 所新添进去的元素 $f_{k+1}$

**理由：** 从已有f1,…,fk向下一层扩张所添元素是fk+1，源图下标漏加1。

**原文：**

> 使得 $P(f) = 0$，即存在 $m \geqslant 1$，

**修正：**

> 使得 $P(f_{k+1}) = 0$，即存在 $m \geqslant 1$ 且 $\alpha_m\neq0$，

**理由：** 本项应约束新元素fk+1为非零多项式的根；源图P(f)未定义f且未排除零多项式，否则任意函数都符合条件，最小次数论证也失效。

**原文：**

> $(f_{n+1})' \in K = \mathbb{C}(x, f_1, \cdots, f_n)$

**修正：**

> $(f_{n+1})' \in K = \mathbb{C}(x, f_1, \cdots, f_n, f_{n+1})$

**理由：** 归纳步应证明导数属于新扩张域；指数例f1=ex导数ex不属于C(x)，源图K漏掉新元素fn+1。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> 3) 存在 $m \geqslant 1$，$\alpha_0, \cdots, \alpha_m \in \mathbb{C}(x, f_1, \cdots, f_k)$，使得

**修正：**

> 3) 存在 $m \geqslant 1$，$\alpha_0, \cdots, \alpha_m \in \mathbb{C}(x, f_1, \cdots, f_n)$，使得

**理由：** 该页归纳假设已取n层，代数关系及其求导必须统一为fn+1，系数属于C(x,f1,…,fn)；源图误沿用k。导数项属于K所用的是归纳假设αi′∈K。

**原文：**

> $$\alpha_m(f_{k+1})^m + \alpha_{m-1}(f_{k+1})^{m-1} + \cdots + \alpha_1 f_{k+1} + \alpha_0 = 0.$$

**修正：**

> $$\alpha_m(f_{n+1})^m + \alpha_{m-1}(f_{n+1})^{m-1} + \cdots + \alpha_1 f_{n+1} + \alpha_0 = 0.$$

**理由：** 该页归纳假设已取n层，代数关系及其求导必须统一为fn+1，系数属于C(x,f1,…,fn)；源图误沿用k。导数项属于K所用的是归纳假设αi′∈K。

**原文：**

> $$\overbrace{(\alpha_m)'(f_{k+1})^m + (\alpha_{m-1})'(f_{k+1})^{m-1} + \cdots + (\alpha_1)'f_{k+1} + (\alpha_0)'}^{\text{根据归纳假设，}\alpha_i \in K\text{，所以这是 }K\text{ 中的元素}}$$

**修正：**

> $$\overbrace{(\alpha_m)'(f_{n+1})^m + (\alpha_{m-1})'(f_{n+1})^{m-1} + \cdots + (\alpha_1)'f_{n+1} + (\alpha_0)'}^{\text{根据归纳假设，}\alpha_i' \in K\text{，所以这是 }K\text{ 中的元素}}$$

**理由：** 该页归纳假设已取n层，代数关系及其求导必须统一为fn+1，系数属于C(x,f1,…,fn)；源图误沿用k。导数项属于K所用的是归纳假设αi′∈K。

**原文：**

> $$= - \underbrace{\left(m\alpha_m(f_{k+1})^{m-1} + (m-1)\alpha_{m-1}(f_{k+1})^{m-2} + \cdots + \alpha_1\right)}_{\text{这是 }K\text{ 中的元素，记作 }F} \left(f_{k+1}\right)'.$$

**修正：**

> $$= - \underbrace{\left(m\alpha_m(f_{n+1})^{m-1} + (m-1)\alpha_{m-1}(f_{n+1})^{m-2} + \cdots + \alpha_1\right)}_{\text{这是 }K\text{ 中的元素，记作 }F} \left(f_{n+1}\right)'.$$

**理由：** 该页归纳假设已取n层，代数关系及其求导必须统一为fn+1，系数属于C(x,f1,…,fn)；源图误沿用k。导数项属于K所用的是归纳假设αi′∈K。

**原文：**

> $m$ 时最小的

**修正：**

> $m$ 是最小的

**理由：** 源图亦印为“时最小”，此处表达选取最小次数m，应为“是最小”。

**原文：**

> Louville

**修正：**

> Liouville

**理由：** 该页定理标题已正确拼写Liouville，但此处源图漏字母；统一更正数学家姓名为Liouville。

**原文：**

> Liouvile

**修正：**

> Liouville

**理由：** 该页定理标题已正确拼写Liouville，但此处源图漏字母；统一更正数学家姓名为Liouville。

**原文：**

> 如果 $R' + g'R = f'$

**修正：**

> 如果 $R' + g'R = f$

**理由：** 充分性需要R′+g′R=f才能推出(Re^g)′=fe^g；源图把右侧误加导数符号。

**原文：**

> $$\left(R \cdot e^f\right)' = (R' + g'R)e^g = fe^g.$$

**修正：**

> $$\left(R \cdot e^g\right)' = (R' + g'R)e^g = fe^g.$$

**理由：** 由乘积法则(Re^g)′=(R′+g′R)e^g；源图原函数的指数错写f。

**原文：**

> $K = \mathbb{C}(x, e^f)$

**修正：**

> $K = \mathbb{C}(x, e^g)$

**理由：** 后续全式均在含e^g的域中展开，源图K错写e^f；所研究被积函数为fe^g。

**原文：**

> 假设 $f, g \in \mathbb{C}(X)$ 是有理函数，那么函数

**修正：**

> 假设 $f, g \in \mathbb{C}(X)$ 是有理函数且 $g$ 不是常数，那么函数

**理由：** 源图推论漏了g非常数条件，而[Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)证明明确用到它。若g=0、f=1/x，则原函数log x初等但有理R的导数不可能有简单极点，因此原推论不成立。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> $$Y^m + a_{n-1}(X)Y^{m-1} + \cdots + a_0(x),$$

**修正：**

> $$Y^m + a_{m-1}(X)Y^{m-1} + \cdots + a_0(X),$$

**理由：** 首一多项式次数为m，次高项系数下标应m−1，自由变量为X；源图n−1和小写x错误。

**原文：**

> 其中 $r_k(X)$ 和 $a_i(X)$ 均为 $\mathbb{C}[X]$ 中的元素

**修正：**

> 其中 $r_k(X)$ 和 $a_i(X)$ 均为 $\mathbb{C}(X)$ 中的元素

**理由：** 在有理函数域C(X)上分解后首一化系数及常数因子一般为有理函数，如XY+1首一化为Y+1/X。源图误写C[X]。

**原文：**

> $$\frac{R_k'(x, e^{g(x)})}{R_k(x, e^{g(x)})} = \left(\log(R_k(x, e^{g(x)}))\right)' = r_k(x) + \sum \frac{p_{k,i}'(x, e^{g(x)})}{p_{k,i}(x, e^{g(x)})} - \sum \frac{q_{k,j}'(x, e^{g(x)})}{q_{k,j}(x, e^{g(x)})}.$$

**修正：**

> $$\frac{R_k'(x, e^{g(x)})}{R_k(x, e^{g(x)})} = \left(\log(R_k(x, e^{g(x)}))\right)' = \frac{r_k'(x)}{r_k(x)} + \sum \frac{p_{k,i}'(x, e^{g(x)})}{p_{k,i}(x, e^{g(x)})} - \sum \frac{q_{k,j}'(x, e^{g(x)})}{q_{k,j}(x, e^{g(x)})}.$$

**理由：** 分解取对数导数，常数因子rk(x)贡献rk′/rk而非rk；源图漏导数与除法。

**原文：**

> $$\left. f(X)Y - D(R_0(X, Y)) + \sum_{k=1}^{m} c_k \frac{D(R_k(X, Y))}{R_k(X, Y)} \right|_{X=x, Y=e^g} = 0.$$

**修正：**

> $$\left. f(X)Y - D(R_0(X, Y)) - \sum_{k=1}^{m} c_k \frac{D(R_k(X, Y))}{R_k(X, Y)} \right|_{X=x, Y=e^g} = 0.$$

**理由：** 由fe^g=R0′+Σck Rk′/Rk移项，求和必须取负；源图错写加号。

**原文：**

> $$f(X)Y - D(R_0(X, Y)) + \sum_{k=1}^{m} c_k \frac{D(R_k(X, Y))}{R_k(X, Y)} = 0.$$

**修正：**

> $$f(X)Y - D(R_0(X, Y)) - \sum_{k=1}^{m} c_k \frac{D(R_k(X, Y))}{R_k(X, Y)} = 0.$$

**理由：** 由fe^g=R0′+Σck Rk′/Rk移项，求和必须取负；源图错写加号。

**原文：**

> $$D(R_k(X, Y)) = D\!\left(\sum r(X)Y^l\right) = \sum \left(r(X)' + kr(X)g'(X)\right) Y^l.$$

**修正：**

> $$D(R_k(X, Y)) = D\!\left(\sum r(X)Y^l\right) = \sum \left(r(X)' + \ell r(X)g'(X)\right) Y^l.$$

**理由：** 单项式为r(X)Y^ℓ且D(Y)=g′Y，乘积法则给ℓrg′；源图误用k。

**原文：**

> 我们对 $n$ 进行归纳。

**修正：**

> 不妨设 $r_0\neq0$（否则除去 $Y$ 的因子以降低次数）。我们对 $n$ 进行归纳。

**理由：** 303要除以r0，源图漏排除r0恒零。因e^g永不为零，可除去Y因子使常数项不为零，保留归纳证明。

## 未决数学问题

**原文：**

> 其中 $P(X, Y)$ 和 $Q(X, Y)$ 也是首一的不可约多项式

**问题：** 一般互素分子分母可以可约，乘系数不能使其不可约。完整证明还需处理Rk=Y的可约对数导数和吸收系数导数项；这些步骤互相依赖，需重整302–304证明，不宜局部强改。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> $$g'(X) = \frac{r'_k(X)}{nr_k(X)} = \sum_{i=1}^{m} \frac{1}{X - a_i}.$$

**修正：**

> $$g'(X) = \frac{r'_0(X)}{nr_0(X)} = \sum_{i=1}^{m} \frac{c_i}{X - a_i}.$$

**理由：** 比较的是k=0系数；对数导数极点留数为零、极点的整数重数除以n，可为负或非1。源图下标与全为1的留数错误。

**原文：**

> $$g(X) = \sum_{k=1}^{M}(X - a_k)^{b_k}$$

**修正：**

> $$g(X) = \sum_{k=1}^{M} c_k(X - a_k)^{b_k}$$

**理由：** 有理函数的部分分式和多项式项必须允许任意复系数；源图省略系数，不能表示2/X等函数。

**原文：**

> 其中 $b_k \in \mathbb{Z}$，它的导数不可能是上述的形式，矛盾。

**修正：**

> 其中 $b_k \in \mathbb{Z}$，$c_k\in\mathbb{C}$。其导数的每个有限极点阶数至少为 $2$；非零的有理函数对数导数只有简单极点，若没有极点则恒为 $0$。这与 $g$ 非常数矛盾。

**理由：** 有理函数导数无简单极点；rk′/rk为纯简单极点部分分式，无极点时恒零并推出g常数。补足源图矛盾步骤的依据。

**原文：**

> $$f(X)Y - \frac{D(P(X,Y))Q(X,Y) - P(X,Y)D(P(X,Y))}{Q(X,Y)^2} + \sum_{k=1}^{m} c_k \frac{D(R_k(X,Y))}{R_k(X,Y)} = 0 \quad \cdots\cdots \quad (\star)$$

**修正：**

> $$f(X)Y - \frac{D(P(X,Y))Q(X,Y) - P(X,Y)D(Q(X,Y))}{Q(X,Y)^2} - \sum_{k=1}^{m} c_k \frac{D(R_k(X,Y))}{R_k(X,Y)} = 0 \quad \cdots\cdots \quad (\star)$$

**理由：** 商求导分子为D(P)Q−PD(Q)，源图第二个P误写；由fe^g=R0′+Σ对数导数移项，和项为负。

**原文：**

> $$= Ng'(X)Y^N + \sum_{\ell < N}\left(r(X)' + kr(X)g'(X)\right)Y^\ell.$$

**修正：**

> $$= Ng'(X)Y^N + \sum_{\ell < N}\left(r(X)' + \ell r(X)g'(X)\right)Y^\ell.$$

**理由：** 所求导单项式指数为ℓ，D(rYℓ)=(r′+ℓrg′)Yℓ；源图误用k。

**原文：**

> 如果要分母上的 $D(R_k(X,Y))$ 与分子上的不可约多项式 $R_k(X,Y)$ 能约分的话

**修正：**

> 如果要分子上的 $D(R_k(X,Y))$ 与分母上的不可约多项式 $R_k(X,Y)$ 能约分的话

**理由：** 显示分式D(Rk)/Rk，源图把分子与分母位置说反。

**原文：**

> $$D(R_n(X,Y)) = Ng'(X)R_k(X,Y).$$

**修正：**

> $$D(R_k(X,Y)) = Ng'(X)R_k(X,Y).$$

**理由：** 所研究因子始终为Rk，整除后左端也应D(Rk)；源图错写Rn。

**原文：**

> 于上面完全一致

**修正：**

> 与上面完全一致

**理由：** 源图亦误写“于”，此处表达比较一致，应为“与”。

## 未决数学问题

**原文：**

> 所以，每个 $\dfrac{D(R_k(X,Y))}{R_k(X,Y)}$ 都是不可约分的

**问题：** 源图漏例外Rk=Y：D(Y)=g′Y可约为g′，不贡献Y极点。相同因子的对数导数也可先合并抵消。须重整302–304论证，才能安全处理所有对数导数项。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> $$= \underbrace{\frac{D(P)}{R_k^s \widetilde{Q}} - \frac{PD(\widetilde{Q})}{R_k^s \widetilde{Q}^2}}_{\text{分母上贡献了}R_k^t\text{ 的项，其中}t \leqslant s} - \frac{sP\widetilde{Q}D(R_k)}{R_k^{s+1}}$$

**修正：**

> $$= \underbrace{\frac{D(P)}{R_k^s \widetilde{Q}} - \frac{PD(\widetilde{Q})}{R_k^s \widetilde{Q}^2}}_{\text{分母上贡献了}R_k^t\text{ 的项，其中}t \leqslant s} - \frac{sPD(R_k)}{R_k^{s+1}\widetilde{Q}}$$

**理由：** 展开P D(Q)/Q²该项后Qtilde一次因子应在分母；源图约分错误放在分子。

**原文：**

> $Q(X,Y = 1)$

**修正：**

> $Q(X,Y)=1$

**理由：** 前文将Q吸收到P，实际设Q(X,Y)恒等1；源图把等号写入函数参数括号。

## 未决数学问题

**原文：**

> 同理，$Q(X,Y)$ 也不能有不可约因子

**问题：** 303不可约分断言存在Y例外；例如R0=1/Y时D(R0)=−g′/Y，需另析Laurent负幂排除Y，当前“同理”不能直接推出。

[相关正文：28：Baire 纲定理与 Liouville 定理](../../01-math-analysis-i/28-baire-liouville.md)

## 数学修正

**原文：**

> 很明显，$R$ 不是多项式，即 $\deg Q \geqslant 1$。上面的式子表明 $Q$ 整除 $xPQ'$，然而，$Q$ 与 $PQ'$ 互素，所以 $Q$ 整除 $x$，从而 $Q(x) = x$。代入上面的等式，我们得到

**修正：**

> 很明显，$R$ 不是多项式，即 $\deg Q \geqslant 1$。上面的式子表明 $Q$ 整除 $xPQ'$，然而，$Q$ 与 $P$ 互素，所以 $Q$ 整除 $xQ'$。比较各根的重数可知，$Q$ 的所有根只能是 $0$，从而 $Q(x)=x^m$，其中 $m\geqslant1$。代入上面的等式并约去 $x^m$，我们得到

**理由：** 源图Q与PQ′互素不成立（Q可有重根）。只能由Q、P互素推出Q|xQ′，故Q=x^m，重数m任意，再由原方程排除。

**原文：**

> $$x^2P'Q + x^2P - Q^2 = xP.$$

**修正：**

> $$xP' +(x-m)P=x^m.$$

**理由：** 代入Q=x^m至xP′Q+xPQ−Q²=xPQ′，約去x^(2m)得到xP′+(x−m)P=x^m；源图代入式留有Q且因子错。

**原文：**

> 这表明 $x$ 整除 $Q^2$，这和 $P(x)$ 与 $Q(x)$ 互素相矛盾。

**修正：**

> 令 $x=0$，得到 $-mP(0)=0$，所以 $x$ 整除 $P$。这和 $P(x)$ 与 $Q(x)=x^m$ 互素相矛盾。

**理由：** Q=x^m时x|Q²当然成立，不能矛盾；修正方程在0处给P(0)=0，与P、Q互素冲突。
