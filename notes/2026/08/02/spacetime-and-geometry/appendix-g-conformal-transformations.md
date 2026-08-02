# 附录 G 共形变换

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 F 测地线丛](./appendix-f-geodesic-congruences.md) · [下一篇：附录 H 共形图](./appendix-h-conformal-diagrams.md)

<!-- source: PDF 480; printed: 467 -->

**共形变换**（conformal transformation）本质上是局部尺度的改变。距离由度规衡量，因此，这类变换通过把度规乘以一个依赖时空位置且处处非零的函数来实现：

$$
\widetilde g_{\mu\nu}=\omega^2(x)g_{\mu\nu},
\tag{G.1}
$$

等价地，

$$
(\mathrm d\widetilde s)^2=\omega^2(x)\mathrm ds^2,
\tag{G.2}
$$

其中 $\omega(x)$ 是某个处处非零的函数。（这里用 $x$ 表示时空坐标 $x^\mu$ 的全体。）逆共形变换显然很简单：$g_{\mu\nu}=\omega^{-2}\widetilde g_{\mu\nu}$。这类变换在广义相对论中有许多用途；我们尤其会用它来改变标量—张量理论中的动力学变量（如第 4.8 节），以及把时空重新映射为方便的共形图（如下一个附录）。

首先指出一个关键事实：**类光曲线在共形变换下保持不变。** 这句话的意思很直接：若曲线 $x^\mu(\lambda)$ 相对于 $g_{\mu\nu}$ 是类光的，那么它相对于 $\widetilde g_{\mu\nu}$ 也同样是类光的。只要理解曲线 $x^\mu(\lambda)$ 为类光，当且仅当它的切向量 $\mathrm dx^\mu/\mathrm d\lambda$ 为类光，这个结论便立即成立：

$$
g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}
=0.
\tag{G.3}
$$

在共形相关的度规中，

$$
\widetilde g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}
=
\omega^2(x)g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}
=0.
\tag{G.4}
$$

因此，由一个度规定义为类光的曲线，相对于任何与它共形相关的度规也都是类光的。也可以说，“共形变换保持光锥不变。”（事实上，可以验证任意两个四维向量之间的夹角也保持不变；这一性质与复分析中熟悉的共形变换相同。）

下面考察几何量在共形变换下如何变化。共形变换并非坐标变换；它实际改变了几何。例如，$\widetilde g_{\mu\nu}$ 的类时测地线一般会不同于 $g_{\mu\nu}$ 的类时测地线。不过，可以用共形变换来更换动力学变量：任何作为 $g_{\mu\nu}$ 的函数的量，

<!-- source: PDF 481; printed: 468 -->

同样都可以看成 $\widetilde g_{\mu\nu}$ 与 $\omega(x)$ 的函数。此时我们说这些量用**共形标架**（conformal frame）表示。本附录汇集若干公式，用来说明原度规 $g_{\mu\nu}$ 中的量与共形度规 $\widetilde g_{\mu\nu}$ 中的量怎样相互联系。

先从 Christoffel 符号开始。联络系数关于度规的一阶导数是线性的，关于逆度规也同样是线性的，所以共形变换后的联络具有形式

$$
\widetilde\Gamma^\rho{}_{\mu\nu}
=
\Gamma^\rho{}_{\mu\nu}
+C^\rho{}_{\mu\nu}.
\tag{G.5}
$$

$C^\rho{}_{\mu\nu}$ 显然是张量，因为它是两个联络之差。显式计算得到

$$
C^\rho{}_{\mu\nu}
=
\omega^{-1}
\left(
\delta^\rho{}_\mu\nabla_\nu\omega
+\delta^\rho{}_\nu\nabla_\mu\omega
-g_{\mu\nu}g^{\rho\lambda}\nabla_\lambda\omega
\right).
\tag{G.6}
$$

考察 Riemann 张量在共形变换下的行为时，这个公式立即派上用场。事实上，在任何形如（G.5）的联络变换下，都有

$$
\widetilde R^\rho{}_{\sigma\mu\nu}
=
R^\rho{}_{\sigma\mu\nu}
+\nabla_\mu C^\rho{}_{\nu\sigma}
-\nabla_\nu C^\rho{}_{\mu\sigma}
+C^\rho{}_{\mu\lambda}C^\lambda{}_{\nu\sigma}
-C^\rho{}_{\nu\lambda}C^\lambda{}_{\mu\sigma}.
\tag{G.7}
$$

于是，只需把（G.6）代入并耐心展开，便得到

$$
\begin{aligned}
\widetilde R^\rho{}_{\sigma\mu\nu}
={}&R^\rho{}_{\sigma\mu\nu}
-2\left(
\delta^\rho{}_{[\mu}\delta^\alpha{}_{\nu]}\delta^\beta{}_\sigma
-g_{\sigma[\mu}\delta^\alpha{}_{\nu]}g^{\rho\beta}
\right)
\omega^{-1}(\nabla_\alpha\nabla_\beta\omega)
\\
&+2\left(
2\delta^\rho{}_{[\mu}\delta^\alpha{}_{\nu]}\delta^\beta{}_\sigma
-2g_{\sigma[\mu}\delta^\alpha{}_{\nu]}g^{\rho\beta}
+g_{\sigma[\mu}\delta^\rho{}_{\nu]}g^{\alpha\beta}
\right)
\omega^{-2}(\nabla_\alpha\omega)(\nabla_\beta\omega).
\end{aligned}
\tag{G.8}
$$

把第一与第三个指标缩并，得到 Ricci 张量：

$$
\begin{aligned}
\widetilde R_{\sigma\nu}
={}&R_{\sigma\nu}
-\left[
(n-2)\delta^\alpha{}_\sigma\delta^\beta{}_\nu
+g_{\sigma\nu}g^{\alpha\beta}
\right]
\omega^{-1}(\nabla_\alpha\nabla_\beta\omega)
\\
&+\left[
2(n-2)\delta^\alpha{}_\sigma\delta^\beta{}_\nu
-(n-3)g_{\sigma\nu}g^{\alpha\beta}
\right]
\omega^{-2}(\nabla_\alpha\omega)(\nabla_\beta\omega),
\end{aligned}
\tag{G.9}
$$

其中 $n$ 是维数。再用 $\widetilde g^{\mu\nu}=\omega^{-2}g^{\mu\nu}$ 升起一个指标并缩并，得到曲率标量：

$$
\widetilde R
=
\omega^{-2}R
-2(n-1)g^{\alpha\beta}\omega^{-3}
(\nabla_\alpha\nabla_\beta\omega)
-(n-1)(n-4)g^{\alpha\beta}\omega^{-4}
(\nabla_\alpha\omega)(\nabla_\beta\omega).
\tag{G.10}
$$

另一个有用的量是标量场 $\phi$ 的协变导数。无论在原始标架还是共形标架中，一阶协变导数都等于偏导数，所以二者相同：

$$
\widetilde\nabla_\mu\phi
=
\nabla_\mu\phi
=
\partial_\mu\phi.
\tag{G.11}
$$

<!-- source: PDF 482; printed: 469 -->

二阶导数会涉及 Christoffel 符号，因此具有非平凡的变换规律：

$$
\widetilde\nabla_\mu\widetilde\nabla_\nu\phi
=
\nabla_\mu\nabla_\nu\phi
-\left(
\delta^\alpha{}_\mu\delta^\beta{}_\nu
+\delta^\beta{}_\mu\delta^\alpha{}_\nu
-g_{\mu\nu}g^{\alpha\beta}
\right)
\omega^{-1}(\nabla_\alpha\omega)(\nabla_\beta\phi).
\tag{G.12}
$$

将其与 $\widetilde g^{\mu\nu}$ 缩并，得到 d’Alembert 算符：

$$
\widetilde\Box\phi
=
\omega^{-2}\Box\phi
+(n-2)g^{\alpha\beta}\omega^{-3}
(\nabla_\alpha\omega)(\nabla_\beta\phi).
\tag{G.13}
$$

最后，有时需要反向计算，用共形度规表示原度规中的量。这只是一些繁琐的计算；为方便起见，把结果列在这里。曲率张量及其缩并为

$$
\begin{aligned}
R^\rho{}_{\sigma\mu\nu}
={}&\widetilde R^\rho{}_{\sigma\mu\nu}
+2\left(
\delta^\rho{}_{[\mu}\delta^\alpha{}_{\nu]}\delta^\beta{}_\sigma
-\widetilde g_{\sigma[\mu}\delta^\alpha{}_{\nu]}\widetilde g^{\rho\beta}
\right)
\omega^{-1}(\widetilde\nabla_\alpha\widetilde\nabla_\beta\omega)
\\
&+2\widetilde g_{\sigma[\mu}\delta^\rho{}_{\nu]}\widetilde g^{\alpha\beta}
\omega^{-2}(\widetilde\nabla_\alpha\omega)(\widetilde\nabla_\beta\omega),
\end{aligned}
\tag{G.14}
$$

$$
\begin{aligned}
R_{\sigma\nu}
={}&\widetilde R_{\sigma\nu}
+\left[
(n-2)\delta^\alpha{}_\sigma\delta^\beta{}_\nu
+\widetilde g_{\sigma\nu}\widetilde g^{\alpha\beta}
\right]
\omega^{-1}(\widetilde\nabla_\alpha\widetilde\nabla_\beta\omega)
\\
&-(n-1)\widetilde g_{\sigma\nu}\widetilde g^{\alpha\beta}
\omega^{-2}(\widetilde\nabla_\alpha\omega)(\widetilde\nabla_\beta\omega),
\end{aligned}
\tag{G.15}
$$

以及

$$
R
=
\omega^2\widetilde R
+2(n-1)\widetilde g^{\alpha\beta}\omega
(\widetilde\nabla_\alpha\widetilde\nabla_\beta\omega)
-n(n-1)\widetilde g^{\alpha\beta}
(\widetilde\nabla_\alpha\omega)(\widetilde\nabla_\beta\omega),
\tag{G.16}
$$

而标量场的协变导数为

$$
\nabla_\mu\nabla_\nu\phi
=
\widetilde\nabla_\mu\widetilde\nabla_\nu\phi
+\left(
\delta^\alpha{}_\mu\delta^\beta{}_\nu
+\delta^\beta{}_\mu\delta^\alpha{}_\nu
-\widetilde g_{\mu\nu}\widetilde g^{\alpha\beta}
\right)
\omega^{-1}(\widetilde\nabla_\alpha\omega)(\widetilde\nabla_\beta\phi),
\tag{G.17}
$$

以及

$$
\Box\phi
=
\omega^2\widetilde\Box\phi
-(n-2)\widetilde g^{\alpha\beta}\omega
(\widetilde\nabla_\alpha\omega)(\widetilde\nabla_\beta\phi).
\tag{G.18}
$$

## G.1 习题

> **作者官方勘误（印刷页 469）**：本页的附录习题编号印错。扫描版依次排为 1、9、10；这里按显然正确的连续次序校正为 1、2、3。

1. 证明共形变换保持类光测地线不变，也就是说，$g_{\mu\nu}$ 的类光测地线与 $\omega^2g_{\mu\nu}$ 的类光测地线相同。（我们已经知道类光**曲线**保持不变；这里还必须证明变换后的曲线仍为测地线。）原度规与共形度规中的仿射参数具有怎样的关系？

2. 证明在二维中，总能找到一个共形变换（假定算符 $\nabla^\mu\nabla_\mu$ 可逆），使变换后度规的曲率至少在某个坐标图内消失。（一般无法在整个流形上同时做到这一点。）这意味着，任意二维度规都能在局部写成平直度规乘以一个共形因子。

3. 假设两个度规通过如下整体共形变换联系：

$$
\widetilde g_{\mu\nu}=e^{\alpha(x)}g_{\mu\nu}.
\tag{G.19}
$$

<!-- source: PDF 483; printed: 470 -->

   (a) 证明：若 $\xi^\mu$ 是度规 $g_{\mu\nu}$ 的 Killing 向量，那么它是度规 $\widetilde g_{\mu\nu}$ 的共形 Killing 向量。**共形 Killing 向量**满足方程

   $$
   \nabla_\mu\xi_\nu+\nabla_\nu\xi_\mu
   =
   (\nabla_\lambda\alpha)\xi^\lambda g_{\mu\nu}.
   \tag{G.20}
   $$

   (b) 证明：沿 $\widetilde g_{\mu\nu}$ 中的光子测地线，$\xi_\mu k^\mu$ 为常数。这里 $k^\mu$ 是光子的四动量。

   (c) 证明：共形时间 $\eta=\int \mathrm dt/R(t)$ 对应于共形 Killing 向量 $\xi=\partial_\eta$。

   (d) 利用 (c) 重新推导尺度因子与红移之间的关系。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 F 测地线丛](./appendix-f-geodesic-congruences.md) · [下一篇：附录 H 共形图](./appendix-h-conformal-diagrams.md)
