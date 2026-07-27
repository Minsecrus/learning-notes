# 10｜规范势、拉格朗日量与规范对称性

[上一篇：几何代数](./09-geometric-algebra.md) · [返回系列目录](../maxwell.md)

前面的文章把麦克斯韦方程看作关于 $\mathbf E$ 和 $\mathbf B$ 的场方程。本篇再向下追一层：

1. 为什么 $\mathbf E$ 和 $\mathbf B$ 可以由势 $\phi,\mathbf A$ 表示？
2. 为什么同一个电磁场对应许多组不同的势？
3. 怎样从一个拉格朗日密度推导有源麦克斯韦方程？
4. 规范对称性为什么与电荷守恒联系在一起？

## 1. 从无源麦克斯韦方程推导电磁势

从磁场高斯定律开始：

$$
\nabla\cdot\mathbf B=0.
$$

任意旋度的散度恒为零：

$$
\nabla\cdot
\left(\nabla\times\mathbf A\right)
=
0.
$$

想象一下没有源头也没有尽头的封闭水流，在局部单连通区域中，这种散度处处为零的光滑场，总能被直观地看作是另一种“隐藏水流”（即矢势）打漩或旋转产生的结果：

$$
\boxed{
\mathbf B
=
\nabla\times\mathbf A
}.
$$

将它代入法拉第定律：

$$
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t}
=
-\frac{\partial}{\partial t}
\left(\nabla\times\mathbf A\right).
$$

时间偏导与空间旋度可以交换：

$$
\nabla\times\mathbf E
=
-\nabla\times
\frac{\partial\mathbf A}{\partial t}.
$$

因此：

$$
\nabla\times
\left(
\mathbf E
+
\frac{\partial\mathbf A}{\partial t}
\right)
=
0.
$$

局部旋度为零的场可以写成标量场的梯度。选取负号定义标势 $\phi$：

$$
\mathbf E
+
\frac{\partial\mathbf A}{\partial t}
=
-\nabla\phi.
$$

所以：

$$
\boxed{
\mathbf E
=
-\nabla\phi
-
\frac{\partial\mathbf A}{\partial t}
}.
$$

这两个势表示自动满足无源方程：

$$
\nabla\cdot\mathbf B
=
\nabla\cdot
\left(\nabla\times\mathbf A\right)
=
0,
$$

$$
\begin{aligned}
\nabla\times\mathbf E
+
\frac{\partial\mathbf B}{\partial t}
&=
-\nabla\times\nabla\phi
-
\nabla\times
\frac{\partial\mathbf A}{\partial t}
+
\frac{\partial}{\partial t}
\left(\nabla\times\mathbf A\right)
\\
&=
0.
\end{aligned}
$$

## 2. 规范变换为什么不改变场

取任意光滑标量函数 $\chi(\mathbf x,t)$，定义：

$$
\boxed{
\mathbf A'
=
\mathbf A+\nabla\chi
},
$$

$$
\boxed{
\phi'
=
\phi-\frac{\partial\chi}{\partial t}
}.
$$

磁场变为：

$$
\begin{aligned}
\mathbf B'
&=
\nabla\times\mathbf A'
\\
&=
\nabla\times\mathbf A
+
\nabla\times\nabla\chi
\\
&=
\mathbf B.
\end{aligned}
$$

电场变为：

$$
\begin{aligned}
\mathbf E'
&=
-\nabla\phi'
-
\frac{\partial\mathbf A'}{\partial t}
\\
&=
-\nabla\phi
+
\nabla\frac{\partial\chi}{\partial t}
-
\frac{\partial\mathbf A}{\partial t}
-
\frac{\partial}{\partial t}\nabla\chi
\\
&=
\mathbf E.
\end{aligned}
$$

最后两项抵消。因此，一整族不同的 $(\phi,\mathbf A)$ 会给出同一组 $(\mathbf E,\mathbf B)$。这称为规范自由度。

## 3. 洛伦兹规范怎样选出来

常用的洛伦兹规范条件是：

$$
\boxed{
\nabla\cdot\mathbf A
+
\frac{1}{c^2}
\frac{\partial\phi}{\partial t}
=
0
}.
$$

先定义：

$$
G
\equiv
\nabla\cdot\mathbf A
+
\frac{1}{c^2}
\frac{\partial\phi}{\partial t}.
$$

规范变换后：

$$
\begin{aligned}
G'
&=
\nabla\cdot
\left(\mathbf A+\nabla\chi\right)
+
\frac{1}{c^2}
\frac{\partial}{\partial t}
\left(
\phi-\frac{\partial\chi}{\partial t}
\right)
\\
&=
G
+
\nabla^2\chi
-
\frac{1}{c^2}
\frac{\partial^2\chi}{\partial t^2}.
\end{aligned}
$$

只要选择 $\chi$ 满足：

$$
\boxed{
\left(
\nabla^2
-
\frac{1}{c^2}\frac{\partial^2}{\partial t^2}
\right)\chi
=
-G
},
$$

就有 $G'=0$。因此，洛伦兹规范是利用规范自由度施加的一项便利条件。

## 4. 推导标势的波动方程

电场高斯定律为：

$$
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0}.
$$

代入：

$$
\mathbf E
=
-\nabla\phi
-
\frac{\partial\mathbf A}{\partial t},
$$

得到：

$$
-\nabla^2\phi
-
\frac{\partial}{\partial t}
\left(\nabla\cdot\mathbf A\right)
=
\frac{\rho}{\varepsilon_0}.
$$

洛伦兹规范给出：

$$
\nabla\cdot\mathbf A
=
-\frac{1}{c^2}
\frac{\partial\phi}{\partial t}.
$$

代入：

$$
-\nabla^2\phi
+
\frac{1}{c^2}
\frac{\partial^2\phi}{\partial t^2}
=
\frac{\rho}{\varepsilon_0}.
$$

两边乘以 $-1$：

$$
\boxed{
\left(
\nabla^2
-
\frac{1}{c^2}
\frac{\partial^2}{\partial t^2}
\right)\phi
=
-\frac{\rho}{\varepsilon_0}
}.
$$

这下物理图像变得极为清晰：电荷就像是扔进池塘的石头，它是驱动标势产生波纹的“源头”。当电荷分布发生变化时，这种改变不会瞬间传遍宇宙，而是像水波一样，遵循波动方程以有限的速度向外荡漾。

## 5. 推导矢势的波动方程

安培—麦克斯韦定律为：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}.
$$

代入 $\mathbf B=\nabla\times\mathbf A$：

$$
\nabla\times
\left(\nabla\times\mathbf A\right)
=
\mu_0\mathbf J
+
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}.
$$

使用恒等式：

$$
\nabla\times
\left(\nabla\times\mathbf A\right)
=
\nabla\left(\nabla\cdot\mathbf A\right)
-
\nabla^2\mathbf A.
$$

同时：

$$
\frac{\partial\mathbf E}{\partial t}
=
-\nabla\frac{\partial\phi}{\partial t}
-
\frac{\partial^2\mathbf A}{\partial t^2}.
$$

代入：

$$
\begin{aligned}
\nabla\left(\nabla\cdot\mathbf A\right)
-
\nabla^2\mathbf A
={}&
\mu_0\mathbf J
-
\frac{1}{c^2}
\nabla\frac{\partial\phi}{\partial t}
\\
&-
\frac{1}{c^2}
\frac{\partial^2\mathbf A}{\partial t^2}.
\end{aligned}
$$

洛伦兹规范给出：

$$
\nabla\left(\nabla\cdot\mathbf A\right)
=
-\frac{1}{c^2}
\nabla\frac{\partial\phi}{\partial t}.
$$

两边相同的梯度项抵消：

$$
-\nabla^2\mathbf A
=
\mu_0\mathbf J
-
\frac{1}{c^2}
\frac{\partial^2\mathbf A}{\partial t^2}.
$$

整理：

$$
\boxed{
\left(
\nabla^2
-
\frac{1}{c^2}
\frac{\partial^2}{\partial t^2}
\right)\mathbf A
=
-\mu_0\mathbf J
}.
$$

就像电荷激起标势的涟漪一样，空间中流淌的电流就像是无形的“风”，它是驱动矢势产生变化的源头。风怎么吹，矢势的波纹就怎么向外传播。

## 6. 推迟势为什么依赖过去的源

定义波动算符：

$$
L
\equiv
\nabla^2
-
\frac{1}{c^2}\frac{\partial^2}{\partial t^2}.
$$

洛伦兹规范下：

$$
L\phi
=
-\frac{\rho}{\varepsilon_0},
\qquad
L\mathbf A
=
-\mu_0\mathbf J.
$$

宇宙中没有任何消息能超越光速传递。这就要求我们引入一个“信使”——只允许过去的源来影响现在的状态，这种完美体现因果律的推迟格林函数为：

$$
G_{\mathrm{ret}}
\left(
\mathbf x,t;
\mathbf x',t'
\right)
=
\frac{
\delta\left(
t'-t+\lvert\mathbf x-\mathbf x'\rvert/c
\right)
}{
4\pi\lvert\mathbf x-\mathbf x'\rvert
}.
$$

它把源的时间固定到：

$$
t'
=
t-\frac{\lvert\mathbf x-\mathbf x'\rvert}{c}.
$$

定义：

$$
R
=
\lvert\mathbf x-\mathbf x'\rvert,
\qquad
t_{\mathrm r}
=
t-\frac Rc.
$$

卷积后得到推迟势：

$$
\boxed{
\phi(\mathbf x,t)
=
\frac{1}{4\pi\varepsilon_0}
\iiint
\frac{
\rho(\mathbf x',t_{\mathrm r})
}{R}
\,\mathrm d^3x'
},
$$

$$
\boxed{
\mathbf A(\mathbf x,t)
=
\frac{\mu_0}{4\pi}
\iiint
\frac{
\mathbf J(\mathbf x',t_{\mathrm r})
}{R}
\,\mathrm d^3x'
}.
$$

观察点在时间 $t$ 感受到的是源在更早时间 $t-R/c$ 的状态。源的变化以有限速度 $c$ 传播。

在静态极限下，源不随时间变化，推迟时间可以省略，第一式退化为库仑势：

$$
\phi(\mathbf x)
=
\frac{1}{4\pi\varepsilon_0}
\iiint
\frac{\rho(\mathbf x')}{R}
\,\mathrm d^3x'.
$$

## 7. 四维形式与洛伦兹规范

定义：

$$
A^\mu
=
\left(
\frac{\phi}{c},
\mathbf A
\right),
\qquad
\partial_\mu
=
\left(
\frac{1}{c}\partial_t,
\nabla
\right).
$$

洛伦兹规范可以写成：

$$
\boxed{
\partial_\mu A^\mu=0
}.
$$

电磁场张量为：

$$
\boxed{
F_{\mu\nu}
=
\partial_\mu A_\nu
-
\partial_\nu A_\mu
}.
$$

四维达朗贝尔算符为：

$$
\Box
\equiv
\partial_\mu\partial^\mu
=
\frac{1}{c^2}
\frac{\partial^2}{\partial t^2}
-
\nabla^2.
$$

两条势方程可以统一为：

$$
\boxed{
\Box A^\nu
=
\mu_0J^\nu
}.
$$

这与前面的三维形式等价，因为 $\Box=-L$。

## 8. 从拉格朗日密度推导有源麦克斯韦方程

取电磁场拉格朗日密度：

$$
\boxed{
\mathcal L
=
-\frac{1}{4\mu_0}
F_{\mu\nu}F^{\mu\nu}
-
J_\mu A^\mu
}.
$$

作用量为：

$$
S[A]
=
\int\mathcal L\,\mathrm d^4x.
$$

让势发生任意小变化：

$$
A_\nu
\longrightarrow
A_\nu+\delta A_\nu.
$$

场强张量的变化为：

$$
\delta F_{\mu\nu}
=
\partial_\mu\delta A_\nu
-
\partial_\nu\delta A_\mu.
$$

### 变分场强平方项

$$
\delta
\left(
F_{\mu\nu}F^{\mu\nu}
\right)
=
2F^{\mu\nu}\delta F_{\mu\nu}.
$$

所以：

$$
\begin{aligned}
\delta\mathcal L
={}&
-\frac{1}{2\mu_0}
F^{\mu\nu}
\left(
\partial_\mu\delta A_\nu
-
\partial_\nu\delta A_\mu
\right)
-
J^\nu\delta A_\nu.
\end{aligned}
$$

利用 $F^{\mu\nu}=-F^{\nu\mu}$，第二个导数项交换哑指标后与第一个相同：

$$
\boxed{
\delta\mathcal L
=
-\frac{1}{\mu_0}
F^{\mu\nu}
\partial_\mu\delta A_\nu
-
J^\nu\delta A_\nu
}.
$$

### 分部积分

使用：

$$
F^{\mu\nu}\partial_\mu\delta A_\nu
=
\partial_\mu
\left(
F^{\mu\nu}\delta A_\nu
\right)
-
\left(
\partial_\mu F^{\mu\nu}
\right)\delta A_\nu.
$$

代入作用量变分：

$$
\begin{aligned}
\delta S
={}&
-\frac{1}{\mu_0}
\int
\partial_\mu
\left(
F^{\mu\nu}\delta A_\nu
\right)
\mathrm d^4x
\\
&+
\int
\left[
\frac{1}{\mu_0}
\partial_\mu F^{\mu\nu}
-
J^\nu
\right]
\delta A_\nu
\mathrm d^4x.
\end{aligned}
$$

第一项是边界项。令 $\delta A_\nu$ 在边界消失，该项为零。作用量驻定要求对任意内部变分都有 $\delta S=0$，因此方括号必须为零：

$$
\frac{1}{\mu_0}
\partial_\mu F^{\mu\nu}
-
J^\nu
=
0.
$$

最终得到：

$$
\boxed{
\partial_\mu F^{\mu\nu}
=
\mu_0J^\nu
}.
$$

有源麦克斯韦方程由作用量原理导出。无源方程则来自 $F=\mathrm dA$ 的 Bianchi 恒等式。

## 9. 规范不变性怎样要求电荷守恒

采用四维规范变换：

$$
A_\mu
\longrightarrow
A_\mu+\partial_\mu\chi.
$$

这里的四维协变势为 $A_\mu=(\phi/c,-\mathbf A)$。把规范函数重新命名为 $-\chi$，就会得到第二节使用的三维写法；两者描述同一组规范变换。

场强张量不变：

$$
\begin{aligned}
F'_{\mu\nu}
&=
\partial_\mu
\left(A_\nu+\partial_\nu\chi\right)
-
\partial_\nu
\left(A_\mu+\partial_\mu\chi\right)
\\
&=
F_{\mu\nu}
+
\partial_\mu\partial_\nu\chi
-
\partial_\nu\partial_\mu\chi
\\
&=
F_{\mu\nu}.
\end{aligned}
$$

因此，场强平方项保持不变。源耦合项的作用量变化为：

$$
\delta S_{\mathrm{int}}
=
-\int
J^\mu\partial_\mu\chi
\,\mathrm d^4x.
$$

分部积分：

$$
\delta S_{\mathrm{int}}
=
\int
\chi\,\partial_\mu J^\mu
\,\mathrm d^4x
-
\int
\partial_\mu
\left(
\chi J^\mu
\right)\mathrm d^4x.
$$

忽略边界项后，要让任意 $\chi$ 都不改变作用量，必须有：

$$
\boxed{
\partial_\mu J^\mu=0
}.
$$

这就是电荷连续性方程——也就是说电荷不能凭空消失，也不能无中生有，只能像真实的水流一样四处流淌。你看，大自然非常巧妙地把数学上的“选零点自由”（规范不变性）和物理上的“电荷不灭”（电荷守恒）死死地绑定在了一起。

## 10. $U(1)$ 局部相位与电磁相互作用

在量子理论中，带电物质场可以做局部相位变换：

$$
\boxed{
\psi(x)
\longrightarrow
\psi'(x)
=
\exp\left(
-\frac{iq}{\hbar}\chi(x)
\right)\psi(x)
}.
$$

普通导数作用后会多出一项：

$$
\partial_\mu\psi'
=
\exp\left(
-\frac{iq\chi}{\hbar}
\right)
\left[
\partial_\mu\psi
-
\frac{iq}{\hbar}
\left(\partial_\mu\chi\right)\psi
\right].
$$

为了抵消这种因位置而异的“刻度漂移”带来的麻烦，我们需要引入一种能像风向标一样随时随地自动修正角度的工具，也就是协变导数：

$$
\boxed{
D_\mu
=
\partial_\mu
+
\frac{iq}{\hbar}A_\mu
}.
$$

同时令：

$$
A_\mu'
=
A_\mu+\partial_\mu\chi.
$$

那么额外项恰好抵消：

$$
\boxed{
D'_\mu\psi'
=
\exp\left(
-\frac{iq\chi}{\hbar}
\right)
D_\mu\psi
}.
$$

这说明，为了让局部 $U(1)$ 相位变化不影响物理规律，需要引入一个按规范规则变化的场 $A_\mu$。它正是电磁势。

协变导数的对易子给出场强：

$$
\begin{aligned}
[D_\mu,D_\nu]\psi
&=
\frac{iq}{\hbar}
\left(
\partial_\mu A_\nu
-
\partial_\nu A_\mu
\right)\psi
\\
&=
\frac{iq}{\hbar}
F_{\mu\nu}\psi.
\end{aligned}
$$

所以 $F_{\mu\nu}$ 可以理解为规范联络 $A_\mu$ 的曲率。

## 11. 系列总结

十篇文章的逻辑现在闭合了：

$$
\begin{aligned}
\text{局部变化}
&\xrightarrow{\nabla}
\text{散度与旋度}
\\
&\xrightarrow{\text{积分定理}}
\text{通量与环流}
\\
&\xrightarrow{\text{实验与守恒}}
\text{四条麦克斯韦方程}
\\
&\xrightarrow{\text{相对论与张量}}
\text{两条协变方程}
\\
&\xrightarrow{\text{几何积}}
\text{一条多重向量方程}.
\end{aligned}
$$

另一条深入方向从势开始：

$$
\begin{aligned}
A_\mu
&\longrightarrow
F_{\mu\nu}
\\
&\longrightarrow
\mathcal L
\\
&\longrightarrow
\partial_\mu F^{\mu\nu}
=
\mu_0J^\nu.
\end{aligned}
$$

麦克斯韦理论同时是一套局部微分方程、相对论场论、规范理论，也是光的经典理论。

[上一篇：几何代数](./09-geometric-algebra.md) · [返回系列目录](../maxwell.md)
