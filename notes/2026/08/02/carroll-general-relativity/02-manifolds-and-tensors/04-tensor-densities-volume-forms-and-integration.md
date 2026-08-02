# 张量密度、体积形式与积分

<!-- CARROLL_NAV_TOP -->
> 完整译文 · 原 PDF 第 38–61 页 · [本章入口](../02-manifolds-and-tensors.md) · [全书入口](../../carroll-general-relativity.md)
<!-- /CARROLL_NAV_TOP -->

## Levi-Civita 符号与张量密度

现在把 **Levi-Civita 符号**定义为前面的 $\tilde\epsilon_{\mu_1\mu_2\cdots\mu_n}$ 本身——也就是一个具有 $n$ 个指标，并且在*任意坐标系*中都取上述分量的对象。它之所以称为“符号”，当然是因为它并非张量；按照定义，它在坐标变换下不会改变。要把它的行为与普通张量联系起来，首先注意：给定某个 $n\times n$ 矩阵 $M^\mu{}_{\mu'}$，其行列式 $|M|$ 满足
$$
\tilde\epsilon_{\mu_1'\mu_2'\cdots\mu_n'} |M| =
  \tilde\epsilon_{\mu_1\mu_2\cdots\mu_n} M^{\mu_1}{}_{\mu_1'}
  M^{\mu_2}{}_{\mu_2'}\cdots M^{\mu_n}{}_{\mu_n'}\ .
\tag{2.39}
$$
这只是关于行列式的一个真实结论，你可以在一本足够有见识的线性代数教材中找到它。因此，令 $M^\mu{}_{\mu'}=\partial x^\mu/\partial x^{\mu'}$，便有
$$
\tilde\epsilon_{\mu_1'\mu_2'\cdots\mu_n'} =
  \left|{{\partial x^{\mu'}}\over{\partial x^\mu}}\right|
  \tilde\epsilon_{\mu_1\mu_2\cdots\mu_n}
  {{\partial x^{\mu_1}}\over{\partial x^{\mu_1'}}}
  {{\partial x^{\mu_2}}\over{\partial x^{\mu_2'}}}\cdots
  {{\partial x^{\mu_n}}\over{\partial x^{\mu_n'}}}\ .
\tag{2.40}
$$
它非常接近张量变换定律，只是最前面多了一个行列式。以这种方式变换的对象称为**张量密度**（tensor density）。

### 权重与度量行列式

度量的行列式 $g=|g_{\mu\nu}|$ 是另一个例子。很容易验证，只要对 (2.35) 两边取行列式，就会发现坐标变换下有
$$
g(x^{\mu'}) = \left|{{\partial x^{\mu'}}\over{\partial x^\mu}}
  \right|^{-2} g(x^\mu)\ .
\tag{2.41}
$$
因此，$g$ 同样并非张量；它的变换方式与 Levi-Civita 符号相似，只是 Jacobian 被提升到 $-2$ 次幂。Jacobian 的幂次称为张量密度的**权重**（weight）：Levi-Civita 符号是权重为 $1$ 的密度，而 $g$ 是权重为 $-2$ 的标量密度。

## Levi-Civita 张量与可定向性

不过，我们不喜欢张量密度，我们喜欢张量。把一个密度变成真正张量的方法很简单：乘以 $|g|^{w/2}$，其中 $w$ 是该密度的权重（之所以加绝对值，是因为对洛伦兹度量有 $g<0$）。所得对象将按照张量变换定律变换。因此，例如可以把 Levi-Civita 张量定义为
$$
\epsilon_{\mu_1\mu_2\cdots\mu_n}= \sqrt{|g|}\,
  \tilde\epsilon_{\mu_1\mu_2\cdots\mu_n}\ .
\tag{2.42}
$$
在 Hodge 对偶的定义 (1.87) 中使用的正是这个张量；推广到任意流形后，该定义的其余部分保持不变。由于它是真正的张量，我们可以对它升指标，等等。有时人们还定义带上指标的 Levi-Civita 符号 $\tilde\epsilon^{\mu_1\mu_2\cdots\mu_n}$，其分量在数值上与带下指标的符号相等。事实表明，它是权重为 $-1$ 的密度，并且通过下式与带上指标的张量相关：
$$
\epsilon^{\mu_1\mu_2\cdots\mu_n} = {\rm ~sgn}(g){1\over{\sqrt{|g|}}}
  \,\tilde\epsilon^{\mu_1\mu_2\cdots\mu_n}\ .
\tag{2.43}
$$

说句题外话，我们应当坦白承认，即使加入 $\sqrt{|g|}$ 因子，Levi-Civita 张量在某种意义上仍不算完全真正的张量，因为在某些流形上无法全局定义它。能够全局定义它的流形称为**可定向流形**（orientable manifold）；本课程只处理可定向流形。Möbius 带是不可定向流形的一个例子；相关讨论可参见 Schutz 的 *Geometrical Methods in Mathematical Physics*（《数学物理中的几何方法》）或类似教材。

## 流形上的积分

张量密度最后一次出现，是在流形上的积分中。这里无法充分展开这一主题，但至少有必要粗略看一眼。你大概已经知道，在 ${\bf R}^n$ 上的普通微积分中，体积元 $d^nx$ 会在坐标变换下获得一个 Jacobian 因子：
$$
d^nx' = \left|{{\partial x^{\mu'}}\over{\partial x^\mu}}
  \right| d^nx\ .
\tag{2.44}
$$

### 从微分形式理解体积元

从微分形式的观点出发，可以对这个公式给出一种非常优美的解释；它源于如下事实：*在 $n$ 维流形上，被积对象应当正确地理解为一个 $n$-形式。* 朴素体积元 $d^nx$ 本身是一个密度，并非 $n$-形式；不过用它构造真正的 $n$-形式并不困难。要看清其中机制，应作如下对应：
$$
d^nx \leftrightarrow {\rm d}x^0\wedge \cdots \wedge\,{\rm d}x^{n-1}
  \ .
\tag{2.45}
$$
右边的表达式可能具有误导性，因为它看起来像张量（准确地说，是一个 $n$-形式），实际在这里表示的是一个密度。当然，如果 $M$ 上有两个函数 $f$ 和 $g$，那么 ${\rm d}f$ 与 ${\rm d}g$ 是一形式，而 ${\rm d}f\wedge{\rm d}g$ 是二形式。但我们希望把 (2.45) 的右边解释为一个依赖坐标的对象：在 $x^\mu$ 坐标系中，它的行为如同 ${\rm d}x^0\wedge\cdots\wedge{\rm d}x^{n-1}$。这听起来有些棘手，不过实际上只是记号上的歧义；在实践中，我们直接使用简写“$d^nx$”。

为了说明这一番折腾确有道理，来看 (2.45) 在坐标变换下怎样改变。首先注意，楔积的定义允许我们写出
$$
{\rm d}x^0\wedge \cdots \wedge\,{\rm d}x^{n-1} = {1\over {n!}}
  \tilde\epsilon_{\mu_1\cdots\mu_n}
  \,{\rm d}x^{\mu_1}\wedge \cdots \wedge\,{\rm d}x^{\mu_n}\ ,
\tag{2.46}
$$
因为楔积和 Levi-Civita 符号都是完全反对称的。在坐标变换下，$\tilde\epsilon_{\mu_1\cdots\mu_n}$ 保持不变，而一形式依照 (2.16) 改变，于是
$$
\begin{aligned}
\tilde\epsilon_{\mu_1\cdots\mu_n}
  \,{\rm d}x^{\mu_1}\wedge \cdots \wedge \,{\rm d}x^{\mu_n}
  &=& \tilde\epsilon_{\mu_1\cdots\mu_n}
  {{\partial x^{\mu_1}}\over{\partial x^{\mu_1'}}}\cdots
  {{\partial x^{\mu_n}}\over{\partial x^{\mu_n'}}}
  \,{\rm d}x^{\mu_1'}\wedge \cdots \wedge \,{\rm d}x^{\mu_n'}\notag \\
  &=&  \left|{{\partial x^{\mu}}\over{\partial x^{\mu'}}}\right|
  \tilde\epsilon_{\mu_1'\cdots\mu_n'}
  \,{\rm d}x^{\mu_1'}\wedge \cdots \wedge \,{\rm d}x^{\mu_n'}\ .
\end{aligned}
\tag{2.47}
$$
在等式两边乘以 Jacobian，就会重新得到 (2.44)。

### 不变体积元

朴素体积元 $d^nx$ 显然按照密度的方式变换，但只需乘上 $\sqrt{|g|}$，就很容易构造出不变体积元：
$$
\sqrt{|g'|}\,{\rm d}x^{0'}\wedge \cdots \wedge\,{\rm d}x^{(n-1)'}
  = \sqrt{|g|}\,{\rm d}x^0\wedge \cdots \wedge\,{\rm d}x^{n-1}\ ,
\tag{2.48}
$$
它当然就是 $(n!)^{-1}\epsilon_{\mu_1\cdots\mu_n}\,{\rm d}x^{\mu_1}\wedge\cdots\wedge{\rm d}x^{\mu_n}$。为简洁起见，我们通常把体积元写成 $\sqrt{|g|}\,d^nx$，而不显式写出楔积 $\sqrt{|g|}\,{\rm d}x^0\wedge\cdots\wedge{\rm d}x^{n-1}$；只要记住它应当是一个 $n$-形式就足够了。

## Stokes 定理

以最后一段题外话结束本节：来看看微分几何中最优美、最有力的定理之一——Stokes 定理。它是微积分基本定理 $\int^a_b dx=a-b$ 的推广。设有一个带边界 $\partial M$ 的 $n$ 维流形 $M$，以及 $M$ 上的一个 $(n-1)$-形式 $\omega$。（我们还没有讨论带边界流形，不过想法很直观；例如，$M$ 可以是某个 $(n-1)$ 维闭曲面 $\partial M$ 的内部。）于是 ${\rm d}\omega$ 是一个 $n$-形式，可以在 $M$ 上积分；$\omega$ 本身则可以在 $\partial M$ 上积分。Stokes 定理就是
$$
\int_M {\rm d}\omega = \int_{\partial M}\omega\ .
\tag{2.49}
$$
你可以自行确认，这一定理的不同特例不仅包括微积分基本定理，也包括三维向量分析中熟悉的 Green、Gauss 和 Stokes 定理。

<!-- CARROLL_NAV_BOTTOM -->
---
[← 度量、正规坐标与偏导数](./03-metric-normal-coordinates-and-partial-derivatives.md) · [全书入口](../../carroll-general-relativity.md) · [协变导数与联络 →](../03-connection-and-curvature/01-covariant-derivatives-and-connections.md)
<!-- /CARROLL_NAV_BOTTOM -->
