# 勘误：16 空间填充曲线、L’Hôpital 法则与 Taylor 展开

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：16：空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)

## 未决数学问题

**原文：**

> 类似地，我们定义 $\left(0, \frac{1}{a}\right)$ 上的函数 $\widetilde{g} = g \circ \varphi$ 是。

**问题：** 原文印刷为“类似地，我们定义 $(0, \frac{1}{a})$ 上的函数 $\tilde{g} = g \circ \varphi$ 是。”，句末多出“是”字，可能是拟稿时的遗留用词。由于修改方式（删除“是”或改动动词“定义”）未在上下文中获得唯一证明，故保留原文并在此记录。

[相关正文：16：空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)

## 数学修正

**原文：**

> $$\lim_{x \to \infty} \frac{x^n}{e^x} = \lim_{x \to 0} \frac{nx^{n-1}}{e^x} = \lim_{x \to \infty} \frac{n(n-1)x^{n-2}}{e^x} = \cdots = \lim_{x \to \infty} \frac{n!}{e^x} = 0.$$

**修正：**

> $$\lim_{x \to \infty} \frac{x^n}{e^x} = \lim_{x \to \infty} \frac{nx^{n-1}}{e^x} = \lim_{x \to \infty} \frac{n(n-1)x^{n-2}}{e^x} = \cdots = \lim_{x \to \infty} \frac{n!}{e^x} = 0.$$

**理由：** [空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)原图该中间极限确误印x趋于0；本例标题及其余每个极限均为x趋于无穷。对正整数n逐次微分得到n!/e^x，趋于0，所以该唯一孤立的端点需统一为无穷，属于源笔误。

## 未决数学问题

**原文：**

> $$\lim_{x \to 0} \frac{\cos x}{x^2} = \lim_{x \to 0} \frac{-2\cos x \sin x}{x} = \lim_{x \to 0} \frac{-2(\cos x)^2 + 2(\sin x)^2}{1} = -\frac{1}{2}.$$

**问题：** [空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)例2原图与canonical均有三重冲突：cos x/x²实际趋+∞、第一微分写-2cos x sin x/x却对应cos²原函数且分母缺2、末值-1/2不等于倒数第二式-2。可重建(cos x-1)/x²的经典例或其他平方例，多处源错不能唯一小改，标uncertain等待独立复核。

[相关正文：16：空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)

## 数学修正

**原文：**

> 如果我们不检验 $f(x)$ 和 $g(x)$ 在 $\infty$ 处是否是零

**修正：**

> 如果我们不检验 $f(x)$ 和 $g(x)$ 在 $0$ 处是否是零

**理由：** [空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)原图例6标题确写x趋于0，下文故意展示错误使用洛必达的结果，检查条件应在0处而非无穷处；sin0=0、e^0=1说明0/0条件不成立。原图末句确误印无穷处，应改0，属于源笔误。

**原文：**

> 2) **Cauchy 余项**.

**修正：**

> 3) **Cauchy 余项**.

**理由：** [空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)Taylor定理同一列已列1)Lagrange、2)Peano余项，随后Cauchy余项再次印2)。独立编号应为3)，原图确重复，属于源笔误。

**原文：**

> 其中 $\overline{R}_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-\xi)^n(x-a)$

**修正：**

> 其中 $\overline{R}_n(x) = \frac{f^{(n+1)}(\xi)}{n!}(x-\xi)^n(x-a)$

**理由：** [空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)原图Cauchy余项分母确印(n+1)!。取H(t)=f(x)-Σ_{k=0}^n f^(k)(t)(x-t)^k/k!，直接微分得H′(t)=-f^(n+1)(t)(x-t)^n/n!，Cauchy中值定理给余项f^(n+1)(ξ)(x-ξ)^n(x-a)/n!。原分母会差因子n+1，属于源笔误。

[相关正文：16：空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)

## 未决数学问题

**原文：**

> 使得 $f^{(n+1)}(c) = 0$。

**问题：** 引理 105 叙述中设存在性变量为 $x_0 \in (a, b)$，但结论处写为 $f^{(n+1)}(c) = 0$，而后文证明结尾给出“选取 $x_0 = x_{n+1}$ 即可”。因无法唯一确定应将结论中的 $c$ 修改为 $x_0$ 还是将条件及证明结尾的 $x_0$ 修改为 $c$，故保留原文并作不确定记录。

[相关正文：16：空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)

## 数学修正

**原文：**

> *Peono*

**修正：**

> *Peano*

**理由：** 已查看[空间填充曲线、L’Hôpital 法则与 Taylor 展开](../../01-math-analysis-i/16-lhopital-taylor.md)原图，同页其他位置使用Peano，标题处Peono是明确拼写笔误，修正不改余项公式。
