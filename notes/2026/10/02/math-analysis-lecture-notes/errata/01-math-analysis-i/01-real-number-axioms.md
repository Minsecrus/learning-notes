# 勘误：1 实数的公理化描述

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：1：实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)

## 数学修正

**原文：**

> **练习.** 证明，$x \neq 0$ 乘法逆元 $x^{-1}$ 是唯一的，即若 $x' \in \mathbb{R}$ 也满足 $x \cdot x' = 1$，那么 $x' = x^{-1}$。

**修正：**

> **练习.** 证明，$x \neq 0$ 的乘法逆元 $x^{-1}$ 是唯一的，即若 $x' \in \mathbb{R}$ 也满足 $x \cdot x' = 1$，那么 $x' = x^{-1}$。

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图末行“x非零乘法逆元”确漏结构助词，补的字明确所属关系，练习假设及乘法逆元唯一性不变。

[相关正文：1：实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)

## 数学修正

**原文：**

> **注记.** (F5)-(F9) 这四条公理表明 $(\mathbb{R}^{\times} := \mathbb{R} - \{0\}, \cdot)$ 是一个（交换）群。

**修正：**

> **注记.** (F5)-(F8) 这四条公理表明 $(\mathbb{R}^{\times} := \mathbb{R} - \{0\}, \cdot)$ 是一个（交换）群。

**理由：** 已查看19、[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图。[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)F5、F6、F7、F8分别列出乘法结合律、交换律、单位元和逆元，共四条；[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)F9另列分配律。编号区间末端8唯一吻合“四条”和群公理列表。此处仅校正所引编号，后续使用域公理的结论保留。

**原文：**

> $$
> \frac{x}{y} + \frac{z}{w} = \frac{xw + zx}{yw}, \quad \frac{x}{y} \cdot \frac{z}{w} = \frac{x \cdot z}{y \cdot w}.
> $$

**修正：**

> $$
> \frac{x}{y} + \frac{z}{w} = \frac{xw + yz}{yw}, \quad \frac{x}{y} \cdot \frac{z}{w} = \frac{x \cdot z}{y \cdot w}.
> $$

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)源图分子为xw+zx。通分得到xw+zy，乘法交换律F6给zy=yz，所以模型的xw+yz修复正确，y,w非零假设保留。与私有missing_errata的zy只是等价写法，最终只保留该实际候选。

**原文：**

> $$
> \mathbb{R} \to \mathbb{R}, \quad x \mapsto x^n.
> $$

**修正：**

> $$
> D_n \to \mathbb{R}, \quad x \mapsto x^n, \qquad D_n=\begin{cases}\mathbb{R},&n\geqslant0;\\ \mathbb{R}^{\times},&n<0.\end{cases}
> $$

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图把所有整数幂的函数域写成R。[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)F8仅为非零实数定义乘法逆元，[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)负整数幂正是x^{-1}的重复乘积，所以n<0时必须以R×为域；n>=0时本页已经规定x^0=1且正幂对所有实数定义。此处分段写出唯一合法定义域，没有改变0^0=1的原书约定。

**原文：**

> $x^{n+m} = x^n \cdot x^m$。特别地，$nx+(-n)x = 0$，$x^n \cdot x^{-n} = 1$。

**修正：**

> $x^{n+m} = x^n \cdot x^m$（涉及负整数幂时要求 $x \neq 0$）。特别地，$nx+(-n)x = 0$；当 $x \neq 0$ 时，$x^n \cdot x^{-n} = 1$。

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图该段没有非零底数限制；负幂使用F8仅对非零底数定义的逆元。加法恒等式对任意实数成立，需保留；幂的乘法律遇到负指数及x^n x^{-n}必须在非零底数条件下使用。n=0时原约定也允许x=0，但“当x非零时成立”仍正确且不把原有效情形改成错误命题。

[相关正文：1：实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)

## 数学修正

**原文：**

> 如果 $x > 0$，我们就称 $x$ 是负实数并且称它的符号是负的，记做 $\operatorname{sign}(x) = -$。

**修正：**

> 如果 $x < 0$，我们就称 $x$ 是负实数并且称它的符号是负的，记做 $\operatorname{sign}(x) = -$。

**理由：** 已对照[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图，负数句印x>0，同段正数条件也是x>0，后文R_<0明确为负实数。因此负数条件必须为x<0，符号映射才一致。

[相关正文：1：实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)

## 数学修正

**原文：**

> 其中 $+_{\mathbb{Q}}$ 和 $\cdot_{\mathbb{Q}}$ 分别为有理数 $\mathbb{Q}$ 上的乘法和加法。

**修正：**

> 其中 $+_{\mathbb{Q}}$ 和 $\cdot_{\mathbb{Q}}$ 分别为有理数 $\mathbb{Q}$ 上的加法和乘法。

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图中名称顺序确印“乘法和加法”。紧邻公式iota(x+_Q y)=iota(x)+iota(y)、iota(x·_Q y)=iota(x)·iota(y)，并与[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)两个运算定义一致，唯一确定+_Q为加法、·_Q为乘法。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 0，如果n>0（iota(n)分段定义第二支）

**正文：**

> $$
> \iota(n) =
> \begin{cases}
> \overbrace{1 + 1 + \cdots + 1}^{n\text{个}}, & \text{如果 } n > 0; \\
> 0, & \text{如果 } n = 0; \\
> \underbrace{(-1) + (-1) + \cdots + (-1)}_{-n\text{个}}, & \text{如果 } n < 0.
> \end{cases}
> $$

**理由：** 已查看[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图，第二支条件确印n>0，与第一支重叠且缺少n=0。[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)加法单位元、[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)iota(n)从正负整数的重复和构造，唯一确定零分支为n=0。canonical已经正确录为n=0，不虚构替换候选。

[相关正文：1：实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)

## 数学修正

**原文：**

> 按照定义，就有 $k = m - n$（因为对任意的 $k > 0, \overbrace{1 + 1 + \cdots + 1}^{k\text{个}} > 0, \overbrace{(-1) + 1 + \cdots + (-1)}^{k\text{个}} < 0$）。

**修正：**

> 按照定义，就有 $m = n$（因为对任意的 $k > 0, \overbrace{1 + 1 + \cdots + 1}^{k\text{个}} > 0, \overbrace{(-1) + (-1) + \cdots + (-1)}^{k\text{个}} < 0$）。

**理由：** 已对照22、[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图。22末行证明iota(m-n)=0，正整数像为正，负整数像为负，故m-n=0等价于m=n；[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)负和中间+1也必须为+(-1)，与[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)负整数定义一致。两处修复均正确，但模型声称原图印m=n错误：原图实际印k=m-n，属于原书缺漏结论的源笔误，应采用本独立依据。

**原文：**

> $$
> [ \iota(p) \cdot \iota(t) > \iota(q) \cdot \iota(s) \Leftrightarrow \iota(pt - qs) > 0.
> $$

**修正：**

> $$
> \iota(p) \cdot \iota(t) > \iota(q) \cdot \iota(s) \Leftrightarrow \iota(pt - qs) > 0.
> $$

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图排序证明的显示公式前有孤立左方括号且没有右方括号，括号没有数学运算意义。移除左方括号后，iota(p)iota(t)>iota(q)iota(s)等价于iota(pt-qs)>0，由环同态与序关系直接验证。

**原文：**

> 我们用 $n$ 来表示 $\mathbb{R}$ 中的 $\overbrace{1 + 1 + \cdots + 1}^{k\text{个}}$

**修正：**

> 我们用 $n$ 来表示 $\mathbb{R}$ 中的 $\overbrace{1 + 1 + \cdots + 1}^{n\text{个}}$

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图该注记以n表示实数中的正整数重复和，计数标k；[实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)iota(n)定义明确为n个1，故下标计数改为n。

## 未决数学问题

**原文：**

> 我们有 $n \cdot x = nx, n \cdot x = nx$。

**问题：** 原稿中重复写了两次 $n \cdot x = nx$，可能是笔误，意图可能是 $x \cdot n = nx$ 或 $(-n) \cdot x = -nx$，但无法唯一确定。

[相关正文：1：实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)

## 数学修正

**原文：**

> （等价于对任意的 $n \geqslant 1$ 都有 $a_n \leqslant a_{n+1}$ 并且 $b_{n+1} \geqslant b_n$）

**修正：**

> （等价于对任意的 $n \geqslant 1$ 都有 $a_n \leqslant a_{n+1}$ 并且 $b_{n+1} \leqslant b_n$）

**理由：** [实数的公理化描述](../../01-math-analysis-i/01-real-number-axioms.md)原图下降闭区间套的右端条件印>=。I_{n+1}包含于I_n要求b_{n+1}属于[a_n,b_n]，所以b_{n+1}<=b_n，唯一正确方向为<=。
