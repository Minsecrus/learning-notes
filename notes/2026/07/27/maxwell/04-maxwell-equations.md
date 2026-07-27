# 04｜四条麦克斯韦方程与电磁波

[上一篇：电磁学的基本量](./03-electromagnetic-quantities.md) · [返回系列目录](../maxwell.md) · [下一篇：线性代数与指标记号](./05-linear-algebra-and-indices.md)

在真空的 SI 单位制中，麦克斯韦方程为：

$$
\boxed{
\begin{aligned}
\nabla\cdot\mathbf E
&=
\frac{\rho}{\varepsilon_0},
\\
\nabla\cdot\mathbf B
&=
0,
\\
\nabla\times\mathbf E
&=
-\frac{\partial\mathbf B}{\partial t},
\\
\nabla\times\mathbf B
&=
\mu_0\mathbf J
+
\mu_0\varepsilon_0
\frac{\partial\mathbf E}{\partial t}.
\end{aligned}
}
$$

这四行分别回答了四个非常直观的问题：

1. 就像泉眼向外冒水一样，电荷是怎样在周围的空间里建立起电场的；
2. 为什么磁场就像没有尽头的闭合水流，永远找不到孤立的“源头”或“尽头”；
3. 就像搅动水池会带起漩涡一样，随时间变化的磁场是如何“搅”出环形的电场的；
4. 不仅仅是流动的电流，甚至连不断变化的电场，也能像搅拌机一样在周围制造出环形的磁场。

下面逐条得到这些公式。

## 1. 从库仑定律得到电场高斯定律

点电荷 $q$ 在距离 $r$ 处产生的电场为：

$$
\mathbf E(\mathbf r)
=
\frac{1}{4\pi\varepsilon_0}
\frac{q}{r^2}\mathbf{\hat r}.
$$

### 先计算球面的电通量

取以点电荷为球心、半径为 $r$ 的球面。电场在整个球面上大小相同，并且与外法向量同向。因此：

$$
\begin{aligned}
\Phi_E
&=
\oiint_S
\mathbf E\cdot\mathrm d\mathbf S
\\
&=
E
\oiint_S\mathrm dS
\\
&=
\frac{q}{4\pi\varepsilon_0r^2}
\cdot4\pi r^2
\\
&=
\frac{q}{\varepsilon_0}.
\end{aligned}
$$

这里的 $r^2$ 被球面积中的 $r^2$ 抵消。这说明平方反比定律与“任意同心球面接收到相同总通量”是同一几何事实的两种表达。

### 为什么任意形状的封闭面也成立

对任意小面元 $\mathrm dS$，设它的外法向量与径向夹角为 $\theta$。通量为：

$$
\begin{aligned}
\mathrm d\Phi_E
&=
\mathbf E\cdot\mathrm d\mathbf S
\\
&=
\frac{q}{4\pi\varepsilon_0r^2}
\cos\theta\,\mathrm dS.
\end{aligned}
$$

从点电荷看去，这个面元张开的立体角为：

$$
\mathrm d\Omega
=
\frac{\cos\theta\,\mathrm dS}{r^2}.
$$

所以：

$$
\mathrm d\Phi_E
=
\frac{q}{4\pi\varepsilon_0}\,\mathrm d\Omega.
$$

如果点电荷位于封闭面内部，整个封闭面包围的总立体角为 $4\pi$：

$$
\Phi_E
=
\frac{q}{4\pi\varepsilon_0}
\int\mathrm d\Omega
=
\frac{q}{\varepsilon_0}.
$$

如果点电荷在封闭面外部，就像你拿一个网兜去接从外面吹来的风，风从一侧吹进去，必然会从另一侧吹出来，进出完全抵消，所以净通量为零。

只要我们把所有电荷产生的这种“风”叠加在一起，就会顺理成章地得到积分形式：

$$
\boxed{
\oiint_{\partial V}
\mathbf E\cdot\mathrm d\mathbf S
=
\frac{Q_{\mathrm{内}}}{\varepsilon_0}
}.
$$

再用高斯散度定理：

$$
\iiint_V
\nabla\cdot\mathbf E\,\mathrm dV
=
\frac{1}{\varepsilon_0}
\iiint_V\rho\,\mathrm dV.
$$

它对任意体积成立，所以：

$$
\boxed{
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0}
}.
$$

### 点电荷处发生了什么

在 $r\neq0$ 的位置直接计算，可以得到：

$$
\nabla\cdot
\left(\frac{\mathbf{\hat r}}{r^2}\right)
=
0.
$$

但包围原点的球面通量不为零，说明散度集中在 $r=0$。用三维狄拉克 delta 函数可以写成：

$$
\nabla\cdot
\left(\frac{\mathbf{\hat r}}{r^2}\right)
=
4\pi\delta^{(3)}(\mathbf r).
$$

这正对应点电荷密度：

$$
\rho(\mathbf r)
=
q\delta^{(3)}(\mathbf r).
$$

## 2. 磁场高斯定律

在现实的物理世界中，我们从来没有遇到过孤零零的“磁荷”。拿一块磁铁来说，它总是有南极和北极，如果你把它从中间掰断，断开的两截并没有变成单独的南极和单独的北极，而是各自又生出了一对新的南北极。这就好像磁场的“水流”总是在身体内部循环往复，形成一个个首尾相接的闭合回路，根本没有源头也没有出水口。所以，无论你用什么形状的虚拟网兜去兜这些磁场线，穿进去的“水流”和穿出来的“水流”永远是严丝合缝地相等的：

$$
\boxed{
\oiint_{\partial V}
\mathbf B\cdot\mathrm d\mathbf S
=
0
}.
$$

使用高斯散度定理：

$$
\iiint_V
\nabla\cdot\mathbf B\,\mathrm dV
=
0.
$$

对任意体积都成立，因此：

$$
\boxed{
\nabla\cdot\mathbf B=0
}.
$$

这条方程的右边为零是一个经验事实。若未来发现磁单极子，方程右边将出现磁荷密度源项。

## 3. 从磁通量变化得到法拉第定律

对一条固定闭合回路 $C$，单位电荷沿回路一周时电场所做的功定义为电动势：

$$
\mathcal E
=
\oint_C
\mathbf E\cdot\mathrm d\mathbf l.
$$

法拉第实验表明，穿过回路的磁通量发生变化时：

$$
\boxed{
\mathcal E
=
-\frac{\mathrm d\Phi_B}{\mathrm dt}
},
$$

其中：

$$
\Phi_B
=
\iint_S
\mathbf B\cdot\mathrm d\mathbf S.
$$

这个负号生动地体现了自然界的一种“倔强”——也就是楞次定律：感应出来的效应总是拼命想抵消原本磁通量的变化。你可以把它想象成在推一扇很重的弹簧门，你越是用力往里推（磁通量增大），门面上感应出来的旋涡电场就会产生一股向外顶的磁场力，死死地抗拒你的推动。

对于固定曲面 $S$：

$$
\oint_{\partial S}
\mathbf E\cdot\mathrm d\mathbf l
=
-\iint_S
\frac{\partial\mathbf B}{\partial t}
\cdot\mathrm d\mathbf S.
$$

左边使用斯托克斯定理：

$$
\iint_S
\left(\nabla\times\mathbf E\right)
\cdot\mathrm d\mathbf S
=
-\iint_S
\frac{\partial\mathbf B}{\partial t}
\cdot\mathrm d\mathbf S.
$$

因为这对任意曲面成立，所以：

$$
\boxed{
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t}
}.
$$

静电场满足 $\nabla\times\mathbf E=0$，可以完全由标势表示。变化磁场产生的电场具有非零旋度，它的场线可以闭合，因此还需要时间变化的矢势项：

$$
\mathbf E
=
-\nabla\phi
-
\frac{\partial\mathbf A}{\partial t}.
$$

如果导线回路本身也在运动，电动势还会包含磁力项：

$$
\mathcal E
=
\oint_C
\left(
\mathbf E+\mathbf v\times\mathbf B
\right)\cdot\mathrm d\mathbf l.
$$

本篇后续推导采用固定回路。

## 4. 安培定律为什么需要麦克斯韦修正

稳恒电流产生环形磁场。对于无限长直导线，由对称性可知磁场沿同心圆切向分布，大小只依赖半径 $r$。实验给出：

$$
B(r)
=
\frac{\mu_0I}{2\pi r}.
$$

沿半径为 $r$ 的圆周积分：

$$
\begin{aligned}
\oint_C
\mathbf B\cdot\mathrm d\mathbf l
&=
B(r)\,2\pi r
\\
&=
\mu_0I.
\end{aligned}
$$

一般的稳恒电流形式为：

$$
\oint_C
\mathbf B\cdot\mathrm d\mathbf l
=
\mu_0I_{\mathrm{内}}.
$$

通过斯托克斯定理可写成：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J.
$$

### 旧公式与电荷守恒发生冲突

这个时候，物理学家的直觉告诉他们，事情好像有些不太对劲。如果我们给旧的安培定律两边同时做一次散度运算，也就是去测一测这个场向外“发散”的能力：

$$
\nabla\cdot
\left(\nabla\times\mathbf B\right)
=
\mu_0\nabla\cdot\mathbf J.
$$

左边恒为零，所以：

$$
\nabla\cdot\mathbf J=0.
$$

连续性方程却要求：

$$
\nabla\cdot\mathbf J
=
-\frac{\partial\rho}{\partial t}.
$$

旧公式只能处理 $\partial\rho/\partial t=0$ 的稳恒情况。为了让动态电荷也满足守恒，假设修正项与变化的电场成正比：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\alpha\frac{\partial\mathbf E}{\partial t}.
$$

两边取散度：

$$
0
=
\mu_0\nabla\cdot\mathbf J
+
\alpha
\frac{\partial}{\partial t}
\left(\nabla\cdot\mathbf E\right).
$$

代入连续性方程和电场高斯定律：

$$
0
=
-\mu_0\frac{\partial\rho}{\partial t}
+
\frac{\alpha}{\varepsilon_0}
\frac{\partial\rho}{\partial t}.
$$

要让任意变化的 $\rho$ 都满足该式，系数必须为：

$$
\alpha
=
\mu_0\varepsilon_0.
$$

于是得到安培—麦克斯韦定律：

$$
\boxed{
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\mu_0\varepsilon_0
\frac{\partial\mathbf E}{\partial t}
}.
$$

### 充电电容说明了什么

电流 $I=\mathrm dQ/\mathrm dt$ 沿导线流入电容极板，但两块极板之间没有传导电流。若选择同一条边界回路：

- 一个曲面穿过导线，包围电流 $I$；
- 另一个曲面鼓入极板间隙，包围的传导电流为零。

只用旧安培定律会得到两个互相冲突的磁场环流。

忽略边缘效应，平行板电容器内：

$$
E
=
\frac{Q}{\varepsilon_0A}.
$$

电通量为：

$$
\Phi_E
=
EA
=
\frac{Q}{\varepsilon_0}.
$$

定义位移电流：

$$
I_{\mathrm d}
\equiv
\varepsilon_0
\frac{\mathrm d\Phi_E}{\mathrm dt}.
$$

代入电通量：

$$
I_{\mathrm d}
=
\varepsilon_0
\frac{\mathrm d}{\mathrm dt}
\left(\frac{Q}{\varepsilon_0}\right)
=
\frac{\mathrm dQ}{\mathrm dt}
=
I.
$$

所以穿过极板间隙的位移电流恰好等于导线中的传导电流。积分形式为：

$$
\boxed{
\oint_C
\mathbf B\cdot\mathrm d\mathbf l
=
\mu_0
\left(
I_{\mathrm{内}}
+
\varepsilon_0\frac{\mathrm d\Phi_E}{\mathrm dt}
\right)
}.
$$

## 5. 四条方程怎样自动保证电荷守恒

从安培—麦克斯韦方程出发：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\mu_0\varepsilon_0
\frac{\partial\mathbf E}{\partial t}.
$$

取散度：

$$
0
=
\mu_0\nabla\cdot\mathbf J
+
\mu_0\varepsilon_0
\frac{\partial}{\partial t}
\left(\nabla\cdot\mathbf E\right).
$$

代入 $\nabla\cdot\mathbf E=\rho/\varepsilon_0$：

$$
0
=
\mu_0
\left(
\nabla\cdot\mathbf J
+
\frac{\partial\rho}{\partial t}
\right).
$$

因此：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J
=
0
}.
$$

麦克斯韦正是通过这神来之笔的“位移电流”，把电路中原本断开的“真空缺口”给巧妙地缝合了，完美地保证了电荷在任何角落里都严格守恒，滴水不漏。

## 6. 从麦克斯韦方程推导电磁波

现在进入没有自由电荷和电流的真空区域：

$$
\rho=0,
\qquad
\mathbf J=0.
$$

四条方程简化为：

$$
\nabla\cdot\mathbf E=0,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf B
=
\mu_0\varepsilon_0
\frac{\partial\mathbf E}{\partial t}.
$$

### 推导电场波动方程

对法拉第定律两边取旋度：

$$
\nabla\times
\left(\nabla\times\mathbf E\right)
=
-\frac{\partial}{\partial t}
\left(\nabla\times\mathbf B\right).
$$

右边代入安培—麦克斯韦定律：

$$
\nabla\times
\left(\nabla\times\mathbf E\right)
=
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf E}{\partial t^2}.
$$

使用向量恒等式：

$$
\nabla\times
\left(\nabla\times\mathbf E\right)
=
\nabla\left(\nabla\cdot\mathbf E\right)
-
\nabla^2\mathbf E.
$$

真空中 $\nabla\cdot\mathbf E=0$，所以：

$$
-\nabla^2\mathbf E
=
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf E}{\partial t^2}.
$$

整理得：

$$
\boxed{
\nabla^2\mathbf E
-
\mu_0\varepsilon_0
\frac{\partial^2\mathbf E}{\partial t^2}
=
0
}.
$$

### 推导磁场波动方程

对安培—麦克斯韦定律取旋度：

$$
\nabla\times
\left(\nabla\times\mathbf B\right)
=
\mu_0\varepsilon_0
\frac{\partial}{\partial t}
\left(\nabla\times\mathbf E\right).
$$

代入法拉第定律：

$$
\nabla\times
\left(\nabla\times\mathbf B\right)
=
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf B}{\partial t^2}.
$$

再使用 $\nabla\cdot\mathbf B=0$：

$$
\boxed{
\nabla^2\mathbf B
-
\mu_0\varepsilon_0
\frac{\partial^2\mathbf B}{\partial t^2}
=
0
}.
$$

标准波动方程的形式是：

$$
\nabla^2\mathbf u
-
\frac{1}{v^2}
\frac{\partial^2\mathbf u}{\partial t^2}
=
0.
$$

比较系数得到电磁波速度：

$$
\boxed{
v
=
\frac{1}{\sqrt{\mu_0\varepsilon_0}}
}.
$$

实验数值恰好等于光速，因此：

$$
\boxed{
c
=
\frac{1}{\sqrt{\mu_0\varepsilon_0}}
}.
$$

光由传播中的电场和磁场组成。

## 7. 平面波中 $\mathbf E$、$\mathbf B$ 与传播方向的关系

考虑沿 $+z$ 方向传播、电场沿 $x$ 方向的平面波：

$$
\mathbf E
=
E_0\cos(kz-\omega t)\,\mathbf e_x.
$$

波动方程要求：

$$
\omega=ck.
$$

设磁场沿 $y$ 方向：

$$
\mathbf B
=
B_0\cos(kz-\omega t)\,\mathbf e_y.
$$

计算电场旋度的 $y$ 分量：

$$
\left(\nabla\times\mathbf E\right)_y
=
\frac{\partial E_x}{\partial z}
=
-kE_0\sin(kz-\omega t).
$$

法拉第定律右边为：

$$
-\frac{\partial B_y}{\partial t}
=
-\omega B_0\sin(kz-\omega t).
$$

比较系数：

$$
kE_0=\omega B_0.
$$

使用 $\omega=ck$：

$$
\boxed{
B_0
=
\frac{E_0}{c}
}.
$$

三个方向互相垂直：

$$
\mathbf E
\perp
\mathbf B,
\qquad
\mathbf E
\perp
\mathbf k,
\qquad
\mathbf B
\perp
\mathbf k.
$$

传播方向由右手关系给出：

$$
\mathbf k
\parallel
\mathbf E\times\mathbf B.
$$

## 8. 从麦克斯韦方程推导能量守恒

安培—麦克斯韦方程点乘 $\mathbf E/\mu_0$：

$$
\frac{1}{\mu_0}
\mathbf E\cdot
\left(\nabla\times\mathbf B\right)
=
\mathbf J\cdot\mathbf E
+
\varepsilon_0
\mathbf E\cdot
\frac{\partial\mathbf E}{\partial t}.
$$

法拉第定律点乘 $\mathbf B/\mu_0$：

$$
\frac{1}{\mu_0}
\mathbf B\cdot
\left(\nabla\times\mathbf E\right)
=
-\frac{1}{\mu_0}
\mathbf B\cdot
\frac{\partial\mathbf B}{\partial t}.
$$

使用向量恒等式：

$$
\nabla\cdot
\left(\mathbf E\times\mathbf B\right)
=
\mathbf B\cdot
\left(\nabla\times\mathbf E\right)
-
\mathbf E\cdot
\left(\nabla\times\mathbf B\right),
$$

将前两式组合：

$$
\frac{1}{\mu_0}
\nabla\cdot
\left(\mathbf E\times\mathbf B\right)
=
-\mathbf J\cdot\mathbf E
-
\varepsilon_0
\mathbf E\cdot
\frac{\partial\mathbf E}{\partial t}
-
\frac{1}{\mu_0}
\mathbf B\cdot
\frac{\partial\mathbf B}{\partial t}.
$$

注意：

$$
\mathbf E\cdot
\frac{\partial\mathbf E}{\partial t}
=
\frac12
\frac{\partial E^2}{\partial t},
$$

$$
\mathbf B\cdot
\frac{\partial\mathbf B}{\partial t}
=
\frac12
\frac{\partial B^2}{\partial t}.
$$

定义电磁能量密度：

$$
\boxed{
u
=
\frac{\varepsilon_0E^2}{2}
+
\frac{B^2}{2\mu_0}
}
$$

和坡印廷向量：

$$
\boxed{
\mathbf S
=
\frac{1}{\mu_0}
\mathbf E\times\mathbf B
}.
$$

便得到坡印廷定理：

$$
\boxed{
\frac{\partial u}{\partial t}
+
\nabla\cdot\mathbf S
=
-\mathbf J\cdot\mathbf E
}.
$$

它表示：

- $\partial u/\partial t$ 是局部电磁能量的变化率；
- $\nabla\cdot\mathbf S$ 是电磁能量的净流出率；
- $\mathbf J\cdot\mathbf E$ 是电场单位时间对物质所做的功。

就这样，麦克斯韦方程组不仅描绘了电磁场的“骨架”（来源和传播），还生动地刻画了电磁能量在空间中如同流水一般涌动和消耗的“血液”流动。

## 9. 本篇结论

四条方程之间存在紧密联系：

$$
\begin{aligned}
\text{电荷}
&\longrightarrow
\text{电场散度},
\\
\text{电流与变化电场}
&\longrightarrow
\text{磁场旋度},
\\
\text{变化磁场}
&\longrightarrow
\text{电场旋度},
\\
\text{无磁荷}
&\longrightarrow
\text{磁场散度为零}.
\end{aligned}
$$

两个旋度方程让 $\mathbf E$ 与 $\mathbf B$ 相互激发，两个散度方程约束它们的源。无源真空中，这套耦合系统自然产生以光速传播的横波。

[上一篇：电磁学的基本量](./03-electromagnetic-quantities.md) · [返回系列目录](../maxwell.md) · [下一篇：线性代数与指标记号](./05-linear-algebra-and-indices.md)
