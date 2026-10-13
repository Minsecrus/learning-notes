# 勘误：8 函数的连续性

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：8：函数的连续性](../../01-math-analysis-i/08-continuity.md)

## 数学修正

**原文：**

> 如果假设 $f: I \to \mathbb{R}$ 在 $x$ 处有极限并且 $\lim\limits_{n \to \infty} f(x_n) = f(x_0)$，我们就称 $f$ 在 $x_0$ 处**连续**。

**修正：**

> 如果假设 $f: I \to \mathbb{R}$ 在 $x_0$ 处有极限并且 $\lim\limits_{x \to x_0} f(x) = f(x_0)$，我们就称 $f$ 在 $x_0$ 处连续。

**理由：** 源图实际也是x与数列极限的错式，主要属于source_typo。定义41在x0处连续要求函数极限lim_{x→x0}f(x)=f(x0)，数列xn并未在该定义绑定；统一点与变量恢复ε−δ定义。候选顺带取消加粗无须专门修正。

**原文：**

> 所以，当 $n \geqslant N$ 时，$|f(x_n) - f(x_0)| < \varepsilon_0$，从而 $f(x_n) \to f(x_0)$。

**修正：**

> 所以，当 $n \geqslant N$ 时，$|f(x_n) - f(x_0)| < \varepsilon$，从而 $f(x_n) \to f(x_0)$。

**理由：** 源图确印ε0，属于source_typo。该正向论证从任意ε>0开始，δ和N为此ε而取；只有|f(xn)−f(x0)|<ε才能得任意精度收敛。ε0仅下一段反证另设，不能用在本段。

[相关正文：8：函数的连续性](../../01-math-analysis-i/08-continuity.md)

## 数学修正

**原文：**

> 2) (局部决定了整体假设 $\{I_k\}_{k \in K}$ 一族**开区间**，

**修正：**

> 2) (局部决定了整体) 假设 $\{I_k\}_{k \in K}$ 一族**开区间**，

**理由：** 源图也漏右括号，属于source_typo；补上“局部决定了整体)”并分开假设语句。

**原文：**

> 如果 $x_0$ 属于另一个 $I_j$，我们需要说明 $f_j(x) = f_k(x)$，

**修正：**

> 如果 $x$ 属于另一个 $I_j$，我们需要说明 $f_j(x) = f_k(x)$，

**理由：** 源图实际印x0，属于source_typo。此段正在给任意x定义f(x)=fk(x)，需在同一点x属于Ij∩Ik处检查兼容性；x0未绑定。

[相关正文：8：函数的连续性](../../01-math-analysis-i/08-continuity.md)

## 数学修正

**原文：**

> （比方说在 $(x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)$ 上定义）$x_0 \in I$ 处有极限，

**修正：**

> （比方说在 $(x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)$ 上定义）在 $x_0 \in I$ 处有极限，

**理由：** 源图缺“在”，属于source_typo。恢复地点介词，函数极限条件不变；分母极限条件另有漏错需补。

**原文：**

> 2) 如果在 $x_0$ 附近，$g(x) \neq 0$，那么 $\frac{f}{g}$ 在 $x_0 \in I$ 处有极限并且

**修正：**

> 3) 如果 $\lim\limits_{x \to x_0} g(x) \neq 0$，那么 $\frac{f}{g}$ 在 $x_0 \in I$ 处有极限并且

**理由：** 重新核对完整源图：命题44编号为1、2、2、4，商极限应为第三项；源条件仅要求附近分母非零仍不足，取 $f=1,g=x,x_0=0$ 即无有限商极限。由题设两函数已有极限，分母极限非零唯一恢复商定理；合并编号与分母条件，两处均保留。

**原文：**

> $$
> \begin{aligned}
> |e^x - e^{x_0}| &\leqslant e^{x_0} \sum_{k=1}^\infty \frac{|x - x_0|^k}{k!} < e^{x_0} \sum_{k=1}^\infty \frac{\delta^k}{k!} \\
> &= \delta e^{x_0} \sum_{k=1}^\infty \frac{\delta^{k-1}}{k!} \leqslant \delta (e^{x_0} \sum_{k=0}^\infty \frac{1^{k-1}}{(k-1)!}) = \delta e^{x_0+1} < \varepsilon.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |e^x - e^{x_0}| &\leqslant e^{x_0} \sum_{k=1}^\infty \frac{|x - x_0|^k}{k!} < e^{x_0} \sum_{k=1}^\infty \frac{\delta^k}{k!} \\
> &= \delta e^{x_0} \sum_{k=1}^\infty \frac{\delta^{k-1}}{k!} \leqslant \delta (e^{x_0} \sum_{k=1}^\infty \frac{1^{k-1}}{(k-1)!}) = \delta e^{x_0+1} < \varepsilon.
> \end{aligned}
> $$

**理由：** 源图求和下限0使(−1)!未定义，原和k≥1，放大各项不改变下限；j=k−1从0起才等于e。

## 未决数学问题

**原文：**

> 2) 常值函数 $f(x) = c$ 和 $f(x) = x$ 是连续函数。

**问题：** 原印本中例子第 2 条完整重复了第 1 条的内容。由于无法唯一推断作者原本想写的内容（如将 1 拆分为常值函数与恒等映射，或直接删除第 2 条），故保持 Markdown 与原印本一致并列入不确定项。

[相关正文：8：函数的连续性](../../01-math-analysis-i/08-continuity.md)

## 数学修正

**原文：**

> 1) 对任意的多项式 $P \in \mathbb{R}[X]$，即 $P(X) = a_d X^d + a_{d-1} X^{d-1} + \cdots + d_0$，

**修正：**

> 1) 对任意的多项式 $P \in \mathbb{R}[X]$，即 $P(X) = a_d X^d + a_{d-1} X^{d-1} + \cdots + a_0$，

**理由：** 源图确印d0，属于source_typo。系数已定义ai、0≤i≤d，常数项应为a0以绑定该系数列表。

**原文：**

> 我们令 $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + d_0$。

**修正：**

> 我们令 $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_0$。

**理由：** 源图函数求值处也印d0，属于source_typo；P(x)为同一多项式的求值，需要与P(X)一致a0。

**原文：**

> 那么复合函数 $(f \circ g)(x) = f(g(x)) \in C(I)$。

**修正：**

> 那么复合函数 $(g \circ f)(x) = g(f(x)) \in C(I)$。

**理由：** 源图f:I→J,g:J→R，唯一类型相容复合g∘f，后文yn=f(xn),g(yn)实际证明它。

**原文：**

> $(f \circ g)(x_n) = f(g(x_n)) \to f(g(x_0))$

**修正：**

> $(g \circ f)(x_n) = g(f(x_n)) \to g(f(x_0))$

**理由：** 源图证明首句亦逆序，由yn=f(xn)→f(x0)，g连续给g(f(xn))→g(f(x0))，统一实际论证。

## 未决数学问题

**原文：**

> 给定 $f \in C(I; J)$（即 $f : I \to \mathbb{R}$ 是连续函数并且 $f$ 的值域落在区间 $J$ 中）和 $g \in C(J)$，那么复合函数 $(f \circ g)(x) = f(g(x)) \in C(I)$。

**问题：** 原印本中映射定义为 $f: I \to J$, $g: J \to \mathbb{R}$，其复合函数按标准记号应为 $g \circ f$ 且 $(g \circ f)(x) = g(f(x))$。但原印本在叙述和证明第一句中均印为 $(f \circ g)(x) = f(g(x))$。因 Markdown 忠实记录了原印本文字，且涉及多处符号改动，故保留原文并标记不确定。

**原文：**

> $$
> e^f := \sum_{n=0}^\infty \frac{f^k}{n!}.
> $$

**问题：** 原印本该公式分子印为 $f^k$，而求和指标与分母均为 $n$，存在印刷错误。因改写为 $\sum_{n=0}^\infty \frac{f^n}{n!}$ 或 $\sum_{k=0}^\infty \frac{f^k}{k!}$ 均可成立，具体符号修复方式不唯一，故列入不确定项。
