# 03｜电磁学的基本量：电荷、电流、场、通量与势

[上一篇：积分定理](./02-integral-theorems.md) · [返回系列目录](../maxwell.md) · [下一篇：四条麦克斯韦方程](./04-maxwell-equations.md)

麦克斯韦方程里出现了六个核心量：

$$
\rho,\quad
\mathbf J,\quad
\mathbf E,\quad
\mathbf B,\quad
\phi,\quad
\mathbf A.
$$

它们分别描述电荷分布、电荷流动、电场、磁场、标势和矢势。本篇从“一个小区域里有多少电荷”和“单位时间穿过多少电荷”开始，逐步得到这些量之间的关系。

## 1. 从离散电荷到电荷密度

如果区域内有离散点电荷 $q_1,q_2,\ldots$，总电荷是：

$$
Q=\sum_iq_i.
$$

当电荷连续分布时，取一个很小的体积 $\Delta V$。定义体电荷密度：

$$
\rho(\mathbf x,t)
=
\lim_{\Delta V\to0}
\frac{\Delta Q}{\Delta V}.
$$

因此，小体积中的电荷近似为：

$$
\Delta Q
\approx
\rho\,\Delta V.
$$

把整个区域分成小块并相加，极限下得到：

$$
\boxed{
Q
=
\iiint_V
\rho(\mathbf x,t)\,\mathrm dV
}.
$$

### 例子：均匀带电球

半径为 $R$ 的球内电荷密度为常数 $\rho_0$，总电荷为：

$$
\begin{aligned}
Q
&=
\iiint_V\rho_0\,\mathrm dV
\\
&=
\rho_0
\int_0^R4\pi r^2\,\mathrm dr
\\
&=
\frac{4}{3}\pi R^3\rho_0.
\end{aligned}
$$

这个结果就是“密度乘体积”。

## 2. 从移动电荷推导电流密度

设单位体积内有 $n$ 个载流子，每个载流子的电荷为 $q$，平均漂移速度为 $\mathbf v$。于是：

$$
\rho=nq.
$$

先考虑载流子垂直穿过面积为 $\Delta S$ 的小平面。在时间 $\Delta t$ 内，距离平面不超过 $v\Delta t$ 的载流子会穿过它。这个薄柱体体积为：

$$
\Delta V
=
v\Delta t\,\Delta S.
$$

其中包含的电荷为：

$$
\Delta Q
=
nq\,\Delta V
=
nqv\Delta t\,\Delta S.
$$

电流定义为单位时间通过的电荷：

$$
I
=
\frac{\Delta Q}{\Delta t}
=
nqv\Delta S.
$$

因此，电流密度应定义为：

$$
\boxed{
\mathbf J
=
nq\mathbf v
=
\rho\mathbf v
}.
$$

你可以把这想象成水管里的水流，或者是吹过窗户的风。如果水流是斜着冲过来的，只有正对着截面方向的那部分水能真正穿过去。所以在算流量时，我们只关心垂直穿透表面的那部分：

$$
\mathrm dI
=
\mathbf J\cdot\mathrm d\mathbf S.
$$

在整个截面上积分：

$$
\boxed{
I
=
\iint_S
\mathbf J\cdot\mathrm d\mathbf S
}.
$$

总电流 $I$ 是一个穿过指定曲面的数值；电流密度 $\mathbf J(\mathbf x,t)$ 是定义在空间各点的向量场。

## 3. 从电荷守恒推导连续性方程

取一个固定体积 $V$。体积内的总电荷为：

$$
Q_V(t)
=
\iiint_V\rho(\mathbf x,t)\,\mathrm dV.
$$

你可以把这个固定体积想象成一个有几个出水口的水池。如果水（电荷）不能凭空产生，也不会变魔术一样消失，那么水池里水位的下降速度，一定丝毫不差地等于所有出水口往外流水速度的总和：

$$
\frac{\mathrm dQ_V}{\mathrm dt}
=
-\oiint_{\partial V}
\mathbf J\cdot\mathrm d\mathbf S.
$$

代入 $Q_V$，并对右边使用高斯定理：

$$
\iiint_V
\frac{\partial\rho}{\partial t}\,\mathrm dV
=
-\iiint_V
\nabla\cdot\mathbf J\,\mathrm dV.
$$

移到同一边：

$$
\iiint_V
\left(
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J
\right)\mathrm dV
=
0.
$$

既然我们刚才画的这个“水池”可以是宇宙中任何一个随便圈出来的小角落，那么要让这个等式对所有情况都成立，括号里面的内容就必须在每一点都永远等于零：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J
=
0
}.
$$

这就是局部形式的电荷连续性方程。

- $\partial\rho/\partial t<0$ 表示当地电荷密度正在减少；
- $\nabla\cdot\mathbf J>0$ 表示当地有净电流向外流出；
- 两项大小相等、符号相反。

## 4. 电场和磁场怎样被定义

电场和磁场通过带电粒子所受的洛伦兹力定义：

$$
\boxed{
\mathbf F
=
q\left(
\mathbf E
+
\mathbf v\times\mathbf B
\right)
}.
$$

当试探电荷静止时，$\mathbf v=0$，所以：

$$
\boxed{
\mathbf E
=
\frac{\mathbf F}{q}
}.
$$

磁力只作用于运动电荷，并且方向同时垂直于 $\mathbf v$ 和 $\mathbf B$。由于：

$$
\mathbf v\cdot
\left(\mathbf v\times\mathbf B\right)
=
0,
$$

磁力对粒子瞬时速度方向没有分量。它可以改变速度方向，但单独存在时不会改变粒子的动能：

$$
\frac{\mathrm dK}{\mathrm dt}
=
\mathbf F\cdot\mathbf v
=
q\mathbf E\cdot\mathbf v.
$$

你看，算动能变化时磁力那部分神秘地变成零了！这就好比推车上坡，电场就像是在背后一直使劲推你的那个人，能实打实地给你增加能量；而磁场就像是铁轨，它极其霸道地规定了你必须往哪拐弯，但绝不会帮你多出哪怕一丁点的力气去加速。

## 5. 通量与环流

向量场穿过曲面 $S$ 的通量定义为：

$$
\Phi_{\mathbf A}
=
\iint_S
\mathbf A\cdot\mathrm d\mathbf S.
$$

因此，电通量和磁通量分别是：

$$
\Phi_E
=
\iint_S
\mathbf E\cdot\mathrm d\mathbf S,
$$

$$
\Phi_B
=
\iint_S
\mathbf B\cdot\mathrm d\mathbf S.
$$

就像我们之前说的吹风过窗户一样，点积这个数学操作其实是个非常聪明的“筛选器”，它会自动帮你把那些顺着窗户滑过去的无效风量剔除，只留下真正垂直穿透进去的部分：

$$
\mathbf A\cdot\mathrm d\mathbf S
=
A\cos\theta\,\mathrm dS.
$$

向量场沿曲线 $C$ 的环流定义为：

$$
\mathcal C_{\mathbf A}
=
\int_C
\mathbf A\cdot\mathrm d\mathbf l.
$$

闭合曲线上的电场环流

$$
\oint_C\mathbf E\cdot\mathrm d\mathbf l
$$

这其实就是让你绕着某个圈走上一整圈。如果是电场环流，它算的就是：推着一个电荷在电场里像爬山一样绕一整圈回到原地后，电场到底总共帮你做了多少功，还是你费了多大劲去抵抗它。

## 6. 静电势是怎样得到的

静电情况下，电场满足：

$$
\nabla\times\mathbf E=0.
$$

由斯托克斯定理：

$$
\oint_C
\mathbf E\cdot\mathrm d\mathbf l
=
\iint_S
\left(\nabla\times\mathbf E\right)
\cdot\mathrm d\mathbf S
=
0.
$$

只要绕圈走一趟白做功，就说明不管你走哪条路从起点到终点，耗费的总力气都一模一样！这就好比你从山脚爬到山顶，不管走哪条蜿蜒的山路，海拔高度差总是固定的。于是我们就可以心安理得地定义一个类似“海拔”的东西——也就是电势差：

$$
\phi(\mathbf b)-\phi(\mathbf a)
=
-\int_{\mathbf a}^{\mathbf b}
\mathbf E\cdot\mathrm d\mathbf l.
$$

令终点发生小位移 $\mathrm d\mathbf r$：

$$
\mathrm d\phi
=
-\mathbf E\cdot\mathrm d\mathbf r.
$$

另一方面，梯度定义给出：

$$
\mathrm d\phi
=
\nabla\phi\cdot\mathrm d\mathbf r.
$$

对任意 $\mathrm d\mathbf r$ 比较两式，得到：

$$
\boxed{
\mathbf E
=
-\nabla\phi
}.
$$

公式里突然冒出来的负号非常关键。你想啊，水总是顺着最陡峭的斜坡往低处流，电场也是一样的脾气，它永远像个风向标一样，指向那个让“电势海拔”下降最快、最陡的下坡方向。

## 7. 矢势是怎样得到的

磁场满足：

$$
\nabla\cdot\mathbf B=0.
$$

任何旋度的散度都恒为零：

$$
\nabla\cdot
\left(\nabla\times\mathbf A\right)
=
0.
$$

在没有拓扑孔洞的局部区域中，反过来也成立：散度为零的光滑向量场可以写成某个向量场的旋度。因此定义矢势 $\mathbf A$：

$$
\boxed{
\mathbf B
=
\nabla\times\mathbf A
}.
$$

时间变化的情况下，法拉第定律为：

$$
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t}.
$$

代入 $\mathbf B=\nabla\times\mathbf A$：

$$
\nabla\times\mathbf E
=
-\nabla\times
\frac{\partial\mathbf A}{\partial t}.
$$

移到左边：

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

既然这个括号里一大坨东西的旋度是零，那它就和之前的静电场一样听话，不存在任何漩涡。我们完全可以把它看作是某个“海拔地形图”的倾斜程度，也就是某个标量的负梯度，所以：

$$
\boxed{
\mathbf E
=
-\nabla\phi
-
\frac{\partial\mathbf A}{\partial t}
}.
$$

静电公式 $\mathbf E=-\nabla\phi$ 是它在 $\partial\mathbf A/\partial t=0$ 时的特例。

## 8. 势为什么不唯一

令任意光滑函数为 $\chi(\mathbf x,t)$，进行变换：

$$
\mathbf A'
=
\mathbf A+\nabla\chi,
$$

$$
\phi'
=
\phi-\frac{\partial\chi}{\partial t}.
$$

新的磁场为：

$$
\begin{aligned}
\mathbf B'
&=
\nabla\times\mathbf A'
\\
&=
\nabla\times\mathbf A
+
\nabla\times\left(\nabla\chi\right)
\\
&=
\mathbf B.
\end{aligned}
$$

新的电场为：

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

因为空间梯度与时间偏导可交换，额外两项抵消。改变势并未改变可观测的 $\mathbf E$ 和 $\mathbf B$，这种自由度称为规范自由度，第十篇会进一步展开。

## 9. 真空常数与光速

真空介电常数和真空磁导率分别是 $\varepsilon_0$ 与 $\mu_0$。麦克斯韦方程预言的波速为：

$$
\boxed{
c
=
\frac{1}{\sqrt{\mu_0\varepsilon_0}}
}.
$$

等价地：

$$
\mu_0\varepsilon_0
=
\frac{1}{c^2}.
$$

第四篇会从四条麦克斯韦方程完整推导这个结果。

## 10. 本篇关系图

本篇的核心关系是：

$$
\begin{aligned}
Q
&=
\iiint_V\rho\,\mathrm dV,
\\
I
&=
\iint_S\mathbf J\cdot\mathrm d\mathbf S,
\\
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J
&=
0,
\\
\mathbf F
&=
q\left(\mathbf E+\mathbf v\times\mathbf B\right),
\\
\mathbf B
&=
\nabla\times\mathbf A,
\\
\mathbf E
&=
-\nabla\phi-\frac{\partial\mathbf A}{\partial t}.
\end{aligned}
$$

下一篇我们会把这些辛苦凑齐的积木全部拼在一起，放进四条麦克斯韦方程里，并像破案一样解释每个源头究竟为什么要长成现在这副模样。

[上一篇：积分定理](./02-integral-theorems.md) · [返回系列目录](../maxwell.md) · [下一篇：四条麦克斯韦方程](./04-maxwell-equations.md)
