# 08｜微分形式：用 $\mathrm dF=0$ 表示无源方程

[上一篇：电磁场张量](./07-field-tensor.md) · [返回系列目录](../maxwell.md) · [下一篇：几何代数](./09-geometric-algebra.md)

矢量分析把梯度、旋度和散度写成三种不同运算。微分形式把它们统一为一个外微分算符 $\mathrm d$，再用广义斯托克斯定理统一各种积分定理。

这套语言还能自然表达“在什么维度上积分”：

- $0$-形式是函数，在点上取值；
- $1$-形式沿曲线积分；
- $2$-形式穿过曲面积分；
- $3$-形式在体积上积分。

## 1. 一形式为什么适合沿曲线积分

三维空间中的一形式可以写成：

$$
\alpha
=
P\,\mathrm dx
+
Q\,\mathrm dy
+
R\,\mathrm dz.
$$

沿参数曲线：

$$
\mathbf r(s)
=
\left(x(s),y(s),z(s)\right)
$$

有：

$$
\mathrm dx
=
\frac{\mathrm dx}{\mathrm ds}\,\mathrm ds,
\qquad
\mathrm dy
=
\frac{\mathrm dy}{\mathrm ds}\,\mathrm ds,
\qquad
\mathrm dz
=
\frac{\mathrm dz}{\mathrm ds}\,\mathrm ds.
$$

所以：

$$
\int_C\alpha
=
\int
\left(
P\frac{\mathrm dx}{\mathrm ds}
+
Q\frac{\mathrm dy}{\mathrm ds}
+
R\frac{\mathrm dz}{\mathrm ds}
\right)\mathrm ds.
$$

如果把 $(P,Q,R)$ 对应为向量场 $\mathbf A$，上式就是：

$$
\int_C
\mathbf A\cdot\mathrm d\mathbf l.
$$

你可以把一形式想象成铺在空间里的风向标，当你沿着一条曲线走过时，它会一路测量并累加你顺着风向走的程度。正因如此，一形式天生就是做线积分最完美的“向导”。

## 2. 外积怎样编码有向面积

基本一形式可以做外积：

$$
\mathrm dx\wedge\mathrm dy.
$$

交换顺序会改变符号：

$$
\boxed{
\mathrm dx\wedge\mathrm dy
=
-\mathrm dy\wedge\mathrm dx
}.
$$

令两个因子相同：

$$
\mathrm dx\wedge\mathrm dx
=
-\mathrm dx\wedge\mathrm dx,
$$

所以：

$$
\boxed{
\mathrm dx\wedge\mathrm dx=0
}.
$$

二形式的一般形式为：

$$
\beta
=
U\,\mathrm dy\wedge\mathrm dz
+
V\,\mathrm dz\wedge\mathrm dx
+
W\,\mathrm dx\wedge\mathrm dy.
$$

三个基底二形式分别代表垂直于 $x,y,z$ 方向的有向面积。因此，二形式适合在曲面上积分。

三形式：

$$
\gamma
=
f\,\mathrm dx\wedge\mathrm dy\wedge\mathrm dz
$$

这就好像用无数个极其微小的立体小方块把整个空间塞得满满当当，三形式自然地捕捉了这种有向的体积感，所以拿它来算体积分就像是在统计房间里一共装满了多少个小方块一样自然。

## 3. 外微分怎样同时产生梯度、旋度和散度

### 对零形式求外微分

对标量函数 $f$：

$$
\boxed{
\mathrm df
=
\frac{\partial f}{\partial x}\,\mathrm dx
+
\frac{\partial f}{\partial y}\,\mathrm dy
+
\frac{\partial f}{\partial z}\,\mathrm dz
}.
$$

从物理直觉上看，这就完全等价于咱们在矢量分析里熟悉的梯度。就好比你正站在半山腰，外微分算符一下就帮你找出了山坡最陡峭的那个爬坡方向和倾斜程度。

### 对一形式求外微分

设：

$$
\alpha
=
P\,\mathrm dx
+
Q\,\mathrm dy
+
R\,\mathrm dz.
$$

使用乘积法则：

$$
\mathrm d\alpha
=
\mathrm dP\wedge\mathrm dx
+
\mathrm dQ\wedge\mathrm dy
+
\mathrm dR\wedge\mathrm dz.
$$

例如：

$$
\mathrm dP
=
\frac{\partial P}{\partial x}\mathrm dx
+
\frac{\partial P}{\partial y}\mathrm dy
+
\frac{\partial P}{\partial z}\mathrm dz.
$$

与 $\mathrm dx$ 外积时，含 $\mathrm dx\wedge\mathrm dx$ 的项为零。全部展开并整理顺序：

$$
\boxed{
\begin{aligned}
\mathrm d\alpha
={}&
\left(
\frac{\partial R}{\partial y}
-
\frac{\partial Q}{\partial z}
\right)
\mathrm dy\wedge\mathrm dz
\\
&+
\left(
\frac{\partial P}{\partial z}
-
\frac{\partial R}{\partial x}
\right)
\mathrm dz\wedge\mathrm dx
\\
&+
\left(
\frac{\partial Q}{\partial x}
-
\frac{\partial P}{\partial y}
\right)
\mathrm dx\wedge\mathrm dy.
\end{aligned}
}
$$

三个系数正是：

$$
\nabla\times(P,Q,R).
$$

你看，这就非常奇妙了，对一形式求外微分，物理上直接就对应着旋度。这就仿佛是在测量河流里一个个小水涡的旋转强度，外微分就像个探测器，把沿着路段的流速累加变成了描述局部打转的漩涡。

### 对二形式求外微分

设：

$$
\beta
=
U\,\mathrm dy\wedge\mathrm dz
+
V\,\mathrm dz\wedge\mathrm dx
+
W\,\mathrm dx\wedge\mathrm dy.
$$

求外微分时，大量含重复微分的项为零，最后只剩：

$$
\boxed{
\mathrm d\beta
=
\left(
\frac{\partial U}{\partial x}
+
\frac{\partial V}{\partial y}
+
\frac{\partial W}{\partial z}
\right)
\mathrm dx\wedge\mathrm dy\wedge\mathrm dz
}.
$$

括号中的系数是向量场 $(U,V,W)$ 的散度。

因此，同一个 $\mathrm d$ 在不同次数的形式上分别表现为：

$$
\boxed{
\text{梯度}
\longrightarrow
\text{旋度}
\longrightarrow
\text{散度}
}.
$$

## 4. 为什么 $\mathrm d^2=0$

先对标量 $f$ 求两次外微分：

$$
\mathrm d(\mathrm df)
=
\partial_\nu\partial_\mu f
\,
\mathrm dx^\nu\wedge\mathrm dx^\mu.
$$

系数 $\partial_\nu\partial_\mu f$ 在交换 $\mu,\nu$ 后保持不变，因为混合偏导可交换；基底 $\mathrm dx^\nu\wedge\mathrm dx^\mu$ 在交换后改变符号。对称系数与反对称基底收缩，结果为零：

$$
\boxed{
\mathrm d^2f=0
}.
$$

同样的论证适用于任意次数的微分形式：

$$
\boxed{
\mathrm d^2=0
}.
$$

矢量分析中的两个恒等式：

$$
\nabla\times(\nabla f)=0,
$$

$$
\nabla\cdot(\nabla\times\mathbf A)=0
$$

都是 $\mathrm d^2=0$ 在三维表示下的结果。

## 5. 广义斯托克斯定理

对任意合适的微分形式 $\omega$：

$$
\boxed{
\int_M\mathrm d\omega
=
\int_{\partial M}\omega
}.
$$

根据流形 $M$ 的维度，它会变成熟悉的不同定理。

### 一维情形

令 $M=[a,b]$，$\omega=f$：

$$
\int_a^b\mathrm df
=
f(b)-f(a).
$$

这是微积分基本定理。

### 二维情形

令 $M=S$，$\omega$ 为一形式：

$$
\int_S\mathrm d\omega
=
\int_{\partial S}\omega.
$$

这对应三维矢量分析中的斯托克斯定理。

### 三维情形

令 $M=V$，$\omega$ 为二形式：

$$
\int_V\mathrm d\omega
=
\int_{\partial V}\omega.
$$

这对应高斯散度定理。

想象你把无数个相邻的小方格拼成一个大曲面，内部相邻边的水流方向刚好相反，互相抵消得干干净净，最后就只剩下最外圈的边缘水流了。这种内部边界奇妙相消的直观图景，在广义斯托克斯定理中被极其优雅地统一成了边界算子的基本性质。

## 6. 把电磁场写成二形式

先使用坐标 $(t,x,y,z)$，并定义电磁势一形式：

$$
\mathcal A
=
A_x\,\mathrm dx
+
A_y\,\mathrm dy
+
A_z\,\mathrm dz
-
\phi\,\mathrm dt.
$$

定义电磁场二形式：

$$
\boxed{
F=\mathrm d\mathcal A
}.
$$

直接展开：

$$
\boxed{
\begin{aligned}
F
={}&
E_x\,\mathrm dx\wedge\mathrm dt
+
E_y\,\mathrm dy\wedge\mathrm dt
+
E_z\,\mathrm dz\wedge\mathrm dt
\\
&+
B_x\,\mathrm dy\wedge\mathrm dz
+
B_y\,\mathrm dz\wedge\mathrm dx
+
B_z\,\mathrm dx\wedge\mathrm dy.
\end{aligned}
}
$$

其中：

$$
\mathbf E
=
-\nabla\phi
-
\frac{\partial\mathbf A}{\partial t},
\qquad
\mathbf B
=
\nabla\times\mathbf A.
$$

## 7. 展开 $\mathrm dF=0$

由于 $F=\mathrm d\mathcal A$：

$$
\mathrm dF
=
\mathrm d(\mathrm d\mathcal A)
=
\mathrm d^2\mathcal A
=
0.
$$

所以：

$$
\boxed{
\mathrm dF=0
}.
$$

就这么一个极其简短的式子，就像一个高度压缩的“魔法包”。咱们现在就把它解压，看看它在咱们熟悉的日常三维世界里，究竟藏着哪些大家都熟知的方程。

### 空间三形式的系数

$\mathrm dx\wedge\mathrm dy\wedge\mathrm dz$ 前面的系数为：

$$
\frac{\partial B_x}{\partial x}
+
\frac{\partial B_y}{\partial y}
+
\frac{\partial B_z}{\partial z}
=
\nabla\cdot\mathbf B.
$$

令 $\mathrm dF=0$，得到：

$$
\boxed{
\nabla\cdot\mathbf B=0
}.
$$

### 含时间的三形式系数

例如，$\mathrm dt\wedge\mathrm dy\wedge\mathrm dz$ 前面的系数为：

$$
\frac{\partial B_x}{\partial t}
+
\frac{\partial E_z}{\partial y}
-
\frac{\partial E_y}{\partial z}.
$$

后两项是 $(\nabla\times\mathbf E)_x$，所以：

$$
\frac{\partial B_x}{\partial t}
+
\left(\nabla\times\mathbf E\right)_x
=
0.
$$

另外两个含时间的基底三形式给出 $y,z$ 分量。合并：

$$
\boxed{
\nabla\times\mathbf E
+
\frac{\partial\mathbf B}{\partial t}
=
0
}.
$$

所以，一条 $\mathrm dF=0$ 正好包含磁场高斯定律和法拉第定律。

## 8. 霍奇星算符与有源方程

外微分会把 $k$-形式变成 $(k+1)$-形式。为了让电磁场二形式连接到电流，需要一个由度规和定向定义的运算：霍奇星算符。

在四维时空中：

$$
\star:
\Omega^k
\longrightarrow
\Omega^{4-k}.
$$

因此：

- $\star F$ 仍是二形式；
- 四维电流一形式 $J$ 的对偶 $\star J$ 是三形式。

有源麦克斯韦方程写成：

$$
\boxed{
\mathrm d\star F
=
\mu_0\star J
}.
$$

在坐标中，霍奇星包含闵可夫斯基度规和列维-奇维塔符号。它与张量对偶：

$$
\widetilde F^{\mu\nu}
=
\frac12
\varepsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}
$$

表达的是同一个运算。展开 $\mathrm d\star F=\mu_0\star J$ 会得到：

$$
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0},
$$

$$
\nabla\times\mathbf B
-
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}
=
\mu_0\mathbf J.
$$

$c$ 的具体位置取决于使用 $t$ 还是 $x^0=ct$ 作为时间坐标；几何方程本身保持同一结构。

## 9. 电荷守恒再次由 $\mathrm d^2=0$ 导出

从有源方程出发：

$$
\mathrm d\star F
=
\mu_0\star J.
$$

两边再作用一次 $\mathrm d$：

$$
\mathrm d^2\star F
=
\mu_0\mathrm d\star J.
$$

左边由 $\mathrm d^2=0$ 自动为零，所以：

$$
\boxed{
\mathrm d\star J=0
}.
$$

展开后就是：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J
=
0
}.
$$

张量语言中，电荷守恒来自反对称张量与对称二阶偏导的缩并；微分形式语言中，同一事实被写成 $\mathrm d^2=0$。

## 10. 局部成立与整体成立

由 $F=\mathrm d\mathcal A$ 一定能推出 $\mathrm dF=0$。反方向需要额外条件。

庞加莱引理说明：在可缩的局部区域内，

$$
\mathrm dF=0
\quad\Longrightarrow\quad
F=\mathrm d\mathcal A.
$$

你可以把空间想象成一片水域，如果没有阻碍水流的孤岛（孔洞），整体的流场和局部的情况是一致的；但如果湖心有个岛，整体的水流结构就会发生根本性的变化，这时候闭形式就没法在整个空间里简单地写成单个全局势的外微分了。像阿哈罗诺夫—玻姆效应以及磁单极子这些深刻的理论描述，其实本质上遇到的正是这种“局部看起来完美、整体却截然不同”的奇妙区别。

## 11. 本篇结论

四条麦克斯韦方程在微分形式语言中变成：

$$
\boxed{
\begin{aligned}
\mathrm dF
&=
0,
\\
\mathrm d\star F
&=
\mu_0\star J.
\end{aligned}
}
$$

第一条来自 $F=\mathrm d\mathcal A$ 与 $\mathrm d^2=0$；第二条描述电荷、电流怎样成为场的源。广义斯托克斯定理则统一了它们的局部形式与积分形式。

[上一篇：电磁场张量](./07-field-tensor.md) · [返回系列目录](../maxwell.md) · [下一篇：几何代数](./09-geometric-algebra.md)
