# 勘误：3 Dedekind 分割与实数构造

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)

## 数学修正

**原文：**

> - 第二条 3) 指的是对任意

**修正：**

> - 第三条 3) 指的是对任意

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图该条释义标号3)却称第二条；刚列的定义8第3条是X无最大元，释义也描述X中每一点后有更大一点。改称第三条与标号及内容相符。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 如果 $x'_1 \in X$，那么对任意的 $x'_2 > x'_1$，我们就有 $x'_2 \in X'$。

**正文：**

> 如果 $x'_1 \in X'$，那么对任意的 $x'_2 > x'_1$，我们就有 $x'_2 \in X'$。

**理由：** 定义8第2条给出下段X、上段X′。原释义第一处错印集合补集撇号，canonical已正确修复上段向上封闭条件；恢复错印可被负数切割直接否证。

**原讲义片段：**

> 第二条 3) 指的是对任意 $x \in X'$，总存在 $x' \in X$，使得 $x' > x$。

**正文：**

> - 第三条 3) 指的是对任意 $x \in X$，总存在 $x' \in X$，使得 $x' > x$。

**理由：** 定义8第3条要求下段X无最大元，原释义x所属集合错添补集撇号，canonical已正确修复；恢复错印会使下段点大于上段点，与第2条矛盾。另需改“第二条”为“第三条”，记在missing_errata。

[相关正文：Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)

## 数学修正

**原文：**

> 我们假设 $X \not\subset Y$，只要说明 $Y \subset X$ 即可。根据假设，存在 $x \in X$，使得 $x \notin Y$，根据序的定义中的 2)，对任意的 $y \in Y$，都有 $y \leqslant x$（否则 $x < y$，$y \in Y$，就可以推出 $x \in Y$，矛盾！），从而 $y \in X$（因为 $x \in X$），所以 $Y \subset X$。

**修正：**

> 我们假设 $X \not\subset Y$，只要说明 $Y \subset X$ 即可。根据假设，存在 $x \in X$，使得 $x \notin Y$，根据 Dedekind 分割的定义中的 2)，对任意的 $y \in Y$，都有 $y \leqslant x$（否则 $x < y$，$y \in Y$，就可以推出 $x \in Y$，矛盾！），从而 $y \in X$（因为 $x \in X$），所以 $Y \subset X$。

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图“根据序的定义中的2)”所用性质是[Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)定义8第2条，即切割下段元素小于上段元素；同页“序关系”定义仅按集合包含，没有所谓第2条。改指Dedekind分割的定义保留证明步骤并修复引用对象。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 那么X必须是X的最大元

**正文：**

> 那么 $x$ 必须是 $X$ 的最大元

**理由：** x为M0最大元且x属于子集X，故x是X最大元；原图把元素x错成集合X，canonical已正确修复。

[相关正文：Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)

## 数学修正

**原文：**

> 任意选定 $x_0 \in X, x'_0 \in X'$，我们通过归纳的方式来构造一些列的 $(x_k, x'_k)$，其中 $k \geqslant 0$，$x_k \in X$，$x'_k \in X'$。

**修正：**

> 任意选定 $x_0 \in X, x'_0 \in X'$，我们通过归纳的方式来构造一系列的 $(x_k, x'_k)$，其中 $k \geqslant 0$，$x_k \in X$，$x'_k \in X'$。

**理由：** 已看[Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图，确印“一些列”，下面按照k递归构造点对(x_k,x_k′)，表示一系列点对，改“一系列”是字误修复，构造和条件均保持。

**原文：**

> $\bar{0} + X = \{ x + (-a) \mid a \in \mathbb{Q}_{>0} \}$

**修正：**

> $\bar{0} + X = \{ x + (-a) \mid x \in X, a \in \mathbb{Q}_{>0} \}$

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图该集合描述漏掉x的范围，故x成为自由变量。由前页加法定义X+Y={x+y|x∈X,y∈Y}及0切割为负有理数组成，本式必须约束x∈X、a>0；同句后文也明确x∈X。补入所属集合仅恢复已定义加法的量词域。

[相关正文：Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)

## 数学修正

**原文：**

> 由于 $X + Z$ 中的元素形如 $x + (y - x')$，其中 $x \in X$，$y \in Y$，$x' \in X$，根据 $x < x'$，所以这

**修正：**

> 由于 $X + Z$ 中的元素形如 $x + (y - x')$，其中 $x \in X$，$y \in Y$，$x' \in X'$，根据 $x < x'$，所以这

**理由：** 已查看[Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图，X+Z元素中的x′条件漏补集撇号；同页Z={y−x′|y∈Y,x′∈X′}唯一确定，只有上段x′与下段x比较才能推出x<x′。

**原文：**

> 其中 $-X$ 是使得 $X + Z = \bar{0}$ 的（唯一的）那一个 $Z$。按照定义，我们有 $-X = \{ y - x' \mid y \in \bar{0}, x \in X' \}$。

**修正：**

> 其中 $-X$ 是使得 $X + Z = \bar{0}$ 的（唯一的）那一个 $Z$。按照定义，我们有 $-X = \{ y - x' \mid y \in \bar{0}, x' \in X' \}$。

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图负切割定义的元素为y−x′，条件错写x∈X′；由前文Z定义取Y=0，变量必须一致为x′∈X′。

**原文：**

> 是公理 (F5)。

**修正：**

> 是公理 (F4)。

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图称Y=0时X+Z=Y为公理F5，但[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)F4为加法逆元存在、F5为乘法结合律。本页该证明段也标F4；唯一正确引用为F4。

**原文：**

> 对任意 $y$，由于 $Y$ 没有最

**修正：**

> 对任意 $y \in Y$，由于 $Y$ 没有最

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)源图漏写y所属集合。正在证明Y⊂X+Z，需对每个y属于Y构造分解；只有y属于Y且Y无最大元才可选更大tilde y属于Y。补入集合归属恢复必要的量词域，不改变构造。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 存在x′属于X，使得x>x′，令a=x′−x属于Q>0

**正文：**

> 存在 $x' \in X$，使得 $x < x'$，我们令 $a = x' - x \in \mathbb{Q}_{>0}$

**理由：** 原图首行比较号为>，但X无最大元只能保证更大的x′且a=x′−x为正；canonical已正确录成<。

[相关正文：Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)

## 数学修正

**原文：**

> 实际上，根据上面习题的结论，我们先选一个有理数 $x \in X$，并且 $x > 0$。我们任意选取一个有理数 $y' \in Y$。我们当然可以找到 $n$，使得 $n \cdot x > y'$，此时，$n \cdot x \in \underbrace{X + \cdots + X}_{n \text{ 个}}$ 并且比 $Y$ 中的一个元素还要大，这说明 $\underbrace{X + \cdots + X}_{n \text{ 个}} > Y$。

**修正：**

> 实际上，根据上面习题的结论，我们先选一个有理数 $x \in X$，并且 $x > 0$。我们任意选取一个有理数 $y' \in Y'$。我们当然可以找到 $n$，使得 $n \cdot x > y'$，此时，$n \cdot x \in \underbrace{X + \cdots + X}_{n \text{ 个}}$ 并且比 $Y'$ 中的一个元素还要大，这说明 $\underbrace{X + \cdots + X}_{n \text{ 个}} > Y$。

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图第一处y′∈Y确漏补集撇号，而下一处“比Y′中一个元素大”已经有撇号（canonical漏录），故拟改两处整体正确。数学上需选Y′的点y′，n·x>y′且n·x∈nX才能推出nX>Y；超过Y中一元素不够。第一处为源笔误，应使用独立reason/kind说明，不称两处皆OCR。

**原文：**

> 关于实数的唯一性，我们将在后面课程的展开中顺便讨论

**修正：**

> 关于实数的唯一性，我们将会在后面课程的展开中顺便讨论

**理由：** [Dedekind 分割与实数构造](../../01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035.md)原图最后一句确有“将会在”，canonical漏录“会”。v2复合候选同时强改花体R为黑板R，复合候选拒绝后仅恢复这个独立漏字。

[相关正文：3.1：作业：可数与不可数，Schroeder-Bernstein定理](../../01-math-analysis-i/03-dedekind-cuts/03-03-p0036-0039.md)

## 数学修正

**原文：**

> B7-1) $J \subset \mathbb{R}$ 是闭区间并且它的长度 $|J| > 0$。证明，对任意的 $x \in \mathbb{R}$，总存在闭区间，使得 $I \subset J$，$|I| > 0$ 且 $x \notin I$。

**修正：**

> B7-1) $J \subset \mathbb{R}$ 是闭区间并且它的长度 $|J| > 0$。证明，对任意的 $x \in \mathbb{R}$，总存在闭区间 $I$，使得 $I \subset J$，$|I| > 0$ 且 $x \notin I$。

**理由：** [3.1：作业：可数与不可数，Schroeder-Bernstein定理](../../01-math-analysis-i/03-dedekind-cuts/03-03-p0036-0039.md)原图B7-1后续立即使用区间I⊂J与|I|，前面“总存在闭区间”漏变量I。只补区间名称，不改变题设或添加解答。

**原文：**

> 如果 $X$ 是可数集，那么我们总可以将 $X$ 写成

**修正：**

> 如果 $X$ 是非空可数集，那么我们总可以将 $X$ 写成

**理由：** [3.1：作业：可数与不可数，Schroeder-Bernstein定理](../../01-math-analysis-i/03-dedekind-cuts/03-03-p0036-0039.md)本段按存在单射到N定义可数集，故空集也可数；B3所写{x1,x2,...}至少含x1，不能表示空集。补入非空使有限非空集合也可用重复尾项列出，与本页B1及定义一致；未添加练习解答。
