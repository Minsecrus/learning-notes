# 勘误：4 极限、级数与 Cauchy 列

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 那么就称点列 $\{x_n\}$ 在 $(X, d)$ 中有**极限**的，$x$ 称作是它的极限，记为 $\lim_{n\to\infty} x_n = x$。

**修正：**

> 那么就称点列 $\{x_n\}$ 在 $(X, d)$ 中**有极限**的，$x$ 称作是它的极限，记为 $\lim_{n\to\infty} x_n = x$。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图定义11末句“有极限”三字使用同样粗体字，canonical仅“极限”粗体；补完整术语加粗符合源图，公式/量词无变动。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 通过这个例子，我们发现极限的定义对于判断极限是否存并没有太大的帮助。

**修正：**

> 通过这个例子，我们发现极限的定义对于判断极限是否存在并没有太大的帮助。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图第一段确漏“在”，该段正在讨论极限是否存在；恢复“是否存在”是漏字修正，其他内容不动。

**原文：**

> 所以，对任意的一个数 $M$，总能选到 $n$，使得 $\lambda^n > N$（Archimedes 原理）。

**修正：**

> 所以，对任意的一个数 $M$，总能选到 $n$，使得 $\lambda^n > M$（Archimedes 原理）。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图末句量词给任意M却写lambda^n>N，N不是此句指定的阈值。前文lambda^n>=1+n delta，Archimedes取n使1+n delta>M即lambda^n>M，换阈值M唯一吻合论证。

**原文：**

> $|x_n - 0| = \frac{1}{n} < \frac{1}{N} < \varepsilon$

**修正：**

> $|x_n - 0| = \frac{1}{n} \leqslant \frac{1}{N} < \varepsilon$

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图在n>=N条件下写1/n<1/N，但n=N时相等。选N>1/epsilon保证第二个严格不等式正确，首个应为<=，不影响极限证明。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 根据之前的定义，我们可以想当然地定义 $\sum_{i=1}^\infty a_i = +\infty$ 或者 $\sum_{i=1}^\infty a_i = +\infty$ 并称这个级数是收敛到正无穷或者负无穷的。

**修正：**

> 根据之前的定义，我们可以想当然地定义 $\sum_{i=1}^\infty a_i = +\infty$ 或者 $\sum_{i=1}^\infty a_i = -\infty$ 并称这个级数是收敛到正无穷或者负无穷的。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图两种极限均印正无穷，末尾却说明正或负无穷，且定义12第1项已分别定义两种极限；第二个求和极限必须为负无穷，与同段列举一致。

**原文：**

> 根据定义，对于 $\varepsilon = 0.1$（因为对与任意的 $\varepsilon$ 都成立，特别地，我们就取这个数），存在 $N_0$，使得当 $n \geqslant N_0$ 时，$|x_n - x| < 0.1$。

**修正：**

> 根据定义，对于 $\varepsilon = 0.1$（因为对于任意的 $\varepsilon$ 都成立，特别地，我们就取这个数），存在 $N_0$，使得当 $n \geqslant N_0$ 时，$|x_n - x| < 0.1$。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图“对与任意”确错用与；任意epsilon是根据定义选取epsilon=0.1的量词条件，固定介词应“对于”，修复字误无数学改动。

**原文：**

> $|x_n - 0| = \frac{1}{\lambda^n} < \frac{1}{\lambda^N} < \varepsilon$

**修正：**

> $|x_n - 0| = \frac{1}{\lambda^n} \leqslant \frac{1}{\lambda^N} < \varepsilon$

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图在n>=N条件下写lambda^{-n}<lambda^{-N}，n=N时两者相等。lambda>1保证递减，只能给首个<=；N已选lambda^N>1/epsilon，第二个<epsilon正确。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \sum_{j=1}^{n-1} \frac{1}{j} &= \underbrace{\frac{1}{1}}_{1\text{个，}\geqslant \frac{1}{2}} + \underbrace{\left(\frac{1}{2} + \frac{1}{3}\right)}_{2\text{个，}\geqslant \frac{1}{4}} + \underbrace{\left(\frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7}\right)}_{4\text{个，}\geqslant \frac{1}{8}} + \cdots + \underbrace{\left(\frac{1}{2^{k-1}} + \frac{1}{2^{k-1}+1} + \cdot + \cdot + \frac{1}{2^k-1}\right)}_{2^{k-1}\text{个，}\geqslant \frac{1}{2^k}} \\
> &> 1 \times \frac{1}{2} + 2 \times \frac{1}{4} + 4 \times \frac{1}{8} + \cdots + 2^{k-1} \times \frac{1}{2^k} = \frac{k}{2}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \sum_{j=1}^{n-1} \frac{1}{j} &= \underbrace{\frac{1}{1}}_{1\text{个，}\geqslant \frac{1}{2}} + \underbrace{\left(\frac{1}{2} + \frac{1}{3}\right)}_{2\text{个，}\geqslant \frac{1}{4}} + \underbrace{\left(\frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7}\right)}_{4\text{个，}\geqslant \frac{1}{8}} + \cdots + \underbrace{\left(\frac{1}{2^{k-1}} + \frac{1}{2^{k-1}+1} + \cdots + \frac{1}{2^k-1}\right)}_{2^{k-1}\text{个，}\geqslant \frac{1}{2^k}} \\
> &> 1 \times \frac{1}{2} + 2 \times \frac{1}{4} + 4 \times \frac{1}{8} + \cdots + 2^{k-1} \times \frac{1}{2^k} = \frac{k}{2}.
> \end{aligned}
> $$

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图最后一组调和和的省略号确印“+点+点+”，既非完整项也非正确省略号；由前面四项/八项分组及下方2^{k-1}个求和可知意为连续分母项，恢复cdots省略号保持原求和。

**原文：**

> 所以，对任意的 $M$，我们总可以选取很大的 $n$，使得 $a_n \geqslant M$，这说明调和级数是发散的。

**修正：**

> 所以，对任意的 $M$，我们总可以选取很大的 $n$，使得 $x_n \geqslant M$，这说明调和级数是发散的。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图a_n>=M所指分组部分和，[极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)定义12以x_n记部分和、a_n记通项，调和通项1/n有界且趋0无法>=任意M。分组证明得x_{2^k-1}>k/2，故此处应x_n。

**原文：**

> 可计算性将在很多数学问题中都是头等重要的事情，我们后面会数次遇到类似地事情。

**修正：**

> 可计算性将在很多数学问题中都是头等重要的事情，我们后面会数次遇到类似的事情。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图“类似地事情”，名词事情的定语“类似的”使用的，恢复字误不变更数学断言。

**原文：**

> 它们自然的对实数的序列也成立：

**修正：**

> 它们自然地对实数的序列也成立：

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图“自然的对…成立”，此处自然修饰成立用地，修改语法字误不变更适用范围。

**原文：**

> 证明：我们逐条的进行论证。

**修正：**

> 证明：我们逐条地进行论证。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图“逐条的进行论证”，逐条作进行的状语应用地，修复字误不改变证明。

**原文：**

> $$d(x, y) < d(x_{n_0}, x) + d(x_{n_0}, y) < 2\varepsilon.$$

**修正：**

> $$d(x, y) \leqslant d(x_{n_0}, x) + d(x_{n_0}, y) < 2\varepsilon.$$

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图首个不等号实为<，所以模型声称源图<=不正确；但数学修复<=是必需的三角不等式。取x=y=x_n即得0<=0而0<0错误。接受改动、kind应source_typo并以此独立来源说明。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 我们在课程上会尽量的按照这种习惯来学习。

**修正：**

> 我们在课程上会尽量地按照这种习惯来学习。

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图“尽量的按照”，尽量作按照的状语应为地，是句内语法字误；修改保持学习说明含义。

**原文：**

> **命题 14** (四则运算与序关系的交换性). 假设 $\{x_n\}_{n\geqslant 1}$ 和 $\{y_n\}_{n\geqslant 1}$ 是实数数列

**修正：**

> **命题 14** (四则运算与序关系的交换性). 假设 $\{x_n\}_{n\geqslant 1}$ 和 $\{y_n\}_{n\geqslant 1}$ 是收敛的实数数列

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图题设漏收敛条件，却断言和差积商收敛，取x_n=n、y_n=0即可否证第一条。[极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)证明1)开头明确令lim x_n=x、lim y_n=y，随后应用两列的极限定义，证明唯一确定前提为两实数数列收敛。补“收敛的”恢复证明实际使用的条件。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 因为 $y_n \to y$，所以存在 $N_2$，使得对所有的 $n \geqslant N_1$，我们都有 $|y_n - y| < \frac{1}{2}\varepsilon$。此时，我们可以选取 $N = \max(N_1, N_2)$，所以当 $n \geqslant N$ 时，我们有

**修正：**

> 因为 $y_n \to y$，所以存在 $N_2$，使得对所有的 $n \geqslant N_2$，我们都有 $|y_n - y| < \frac{1}{2}\varepsilon$。此时，我们可以选取 $N = \max(N_1, N_2)$，所以当 $n \geqslant N$ 时，我们有

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)源图y序列的epsilon/2阈值命名N2，适用条件却写n>=N1；N1来自x序列而不能控制y。换为n>=N2与下一句N=max(N1,N2)同时满足两列估计的构造吻合。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 简单的四则运算问题（四则运算我们更熟悉）比说，我们要计算 $\lim_{n\to\infty} \frac{n^2 + 3n + 2}{n^2 + 1}$，我们可以按照下面的步骤来做：

**修正：**

> 简单的四则运算问题（四则运算我们更熟悉）比如说，我们要计算 $\lim_{n\to\infty} \frac{n^2 + 3n + 2}{n^2 + 1}$，我们可以按照下面的步骤来做：

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图确漏“如”而写“比说”，后续是在给四则运算求极限的例子，补为“比如说”恢复引例介词。

**原文：**

> **定理 15** (Cauchy 列与 Caucy 判别准则). 假设 $\{x_n\}_{n\geqslant 1}$ 是实数的数列，那么如下命题等价：

**修正：**

> **定理 15** (Cauchy 列与 Cauchy 判别准则). 假设 $\{x_n\}_{n\geqslant 1}$ 是实数的数列，那么如下命题等价：

**理由：** [极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)原图标题第二个Caucy漏h，同一标题第一个Cauchy及下文均为Cauchy，补h恢复统一人名术语。

[相关正文：4：极限、级数与 Cauchy 列](../../01-math-analysis-i/04-limits.md)

## 数学修正

**原文：**

> 我们有 $x_n \geqslant x_{n_0} > x - \varepsilon$。另外，根据上确界的定义，我们还有 $x_n \leqslant x$。所以，对任意的 $n \geqslant N$，都有 $|x_n - x| \leqslant \varepsilon$。

**修正：**

> 我们有 $x_n \geqslant x_{n_0} > s - \varepsilon$。另外，根据上确界的定义，我们还有 $x_n \leqslant s$。所以，对任意的 $n \geqslant N$，都有 $|x_n - s| \leqslant \varepsilon$。

**理由：** 源图设s为上确界，后面的三处自由x均未定义。由s−ε不是上界，xn0>s−ε，再由单调性及上界xn≤s得|xn−s|≤ε；三处统一到s正确。
