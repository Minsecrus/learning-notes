# 联络、测地线与曲率

本篇对应原讲义第三章。流形告诉我们怎样在局部使用坐标，度规告诉我们怎样测量长度。还缺少一个关键结构：怎样比较不同点的向量。联络（connection）解决这个问题，曲率则记录这种比较对路径的依赖。

## 完整译文分节

1. [协变导数与联络](./03-connection-and-curvature/01-covariant-derivatives-and-connections.md)
2. [平行移动与测地线](./03-connection-and-curvature/02-parallel-transport-and-geodesics.md)
3. [Riemann 张量、恒等式与 Weyl 张量](./03-connection-and-curvature/03-riemann-tensor-identities-and-weyl.md)
4. [曲率实例与测地线偏离](./03-connection-and-curvature/04-curvature-examples-and-geodesic-deviation.md)
5. [标架、自旋联络与结构方程](./03-connection-and-curvature/05-tetrads-spin-connection-and-structure-equations.md)
6. [纤维丛与规范变换](./03-connection-and-curvature/06-fiber-bundles-and-gauge-transformations.md)

下面其余内容是本站为本章编写的导读。

## 为什么普通导数不够

一个向量场写成

$$
V=V^\nu\partial_\nu.
$$

沿 $x^\mu$ 方向移动时，分量 $V^\nu$ 会变化，基向量 $\partial_\nu$ 也会变化。只对分量求导会漏掉基的变化。

协变导数定义为

$$
\nabla_\mu V^\nu
=
\partial_\mu V^\nu
+
\Gamma^\nu{}_{\mu\rho}V^\rho.
$$

联络系数 $\Gamma^\nu{}_{\mu\rho}$ 补偿坐标基的变化，使整体按张量变换。

对协向量，修正项符号相反：

$$
\nabla_\mu\omega_\nu
=
\partial_\mu\omega_\nu
-
\Gamma^\rho{}_{\mu\nu}\omega_\rho.
$$

这由缩并的 Leibniz 法则决定。因为 $\omega_\nu V^\nu$ 是标量，要求

$$
\nabla_\mu(\omega_\nu V^\nu)
=
\partial_\mu(\omega_\nu V^\nu)
$$

会迫使两个联络项互相抵消。

一般张量每个上指标得到一个加号联络项，每个下指标得到一个减号联络项。

## Christoffel 符号不是张量

坐标变换时，$\Gamma^\rho{}_{\mu\nu}$ 的变换律包含坐标变换的二阶导数。正是这项非张量部分，抵消了 $\partial_\mu V^\nu$ 的额外项。

因此可以在一个点选择坐标使

$$
\Gamma^\rho{}_{\mu\nu}(p)=0,
$$

却不能由此断言引力或曲率在该点消失。张量若在一个坐标系中为零，就会在所有坐标系中为零；Christoffel 符号没有这个性质。

## 挠率与度规相容

联络的反对称部分定义挠率（torsion）：

$$
T^\rho{}_{\mu\nu}
=
\Gamma^\rho{}_{\mu\nu}
-
\Gamma^\rho{}_{\nu\mu}.
$$

标准广义相对论使用无挠联络：

$$
T^\rho{}_{\mu\nu}=0.
$$

同时要求平行移动保持内积，也就是度规相容：

$$
\nabla_\rho g_{\mu\nu}=0.
$$

这两个条件唯一确定 Levi-Civita 联络。

## 从度规推导 Levi-Civita 联络

把度规相容条件展开：

$$
\partial_\mu g_{\nu\rho}
=
\Gamma^\sigma{}_{\mu\nu}g_{\sigma\rho}
+
\Gamma^\sigma{}_{\mu\rho}g_{\nu\sigma}.
$$

再写出循环置换的三式：

$$
\begin{aligned}
\partial_\mu g_{\nu\rho}
&=\Gamma_{\rho\mu\nu}+\Gamma_{\nu\mu\rho},\\
\partial_\nu g_{\rho\mu}
&=\Gamma_{\mu\nu\rho}+\Gamma_{\rho\nu\mu},\\
\partial_\rho g_{\mu\nu}
&=\Gamma_{\nu\rho\mu}+\Gamma_{\mu\rho\nu}.
\end{aligned}
$$

前两式相加再减第三式，使用下方两个指标对称性，得到

$$
\Gamma_{\rho\mu\nu}
=
\frac12
(\partial_\mu g_{\rho\nu}
+\partial_\nu g_{\rho\mu}
-\partial_\rho g_{\mu\nu}).
$$

升起第一个指标：

$$
\Gamma^\rho{}_{\mu\nu}
=
\frac12 g^{\rho\sigma}
(\partial_\mu g_{\sigma\nu}
+\partial_\nu g_{\sigma\mu}
-\partial_\sigma g_{\mu\nu}).
$$

这条公式把度规的一阶导数转成联络。

## 平行移动

沿曲线 $x^\mu(\lambda)$ 的切向量为

$$
U^\mu=\frac{\mathrm dx^\mu}{\mathrm d\lambda}.
$$

向量 $V^\mu(\lambda)$ 沿曲线平行移动的条件是

$$
\frac{DV^\mu}{\mathrm d\lambda}
\equiv
U^\nu\nabla_\nu V^\mu
=0.
$$

展开为

$$
\frac{\mathrm dV^\mu}{\mathrm d\lambda}
+
\Gamma^\mu{}_{\nu\rho}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}V^\rho
=0.
$$

这是一组沿曲线的一阶常微分方程。给定起点向量和路径后，它确定终点向量。弯曲空间中，选择不同路径通常得到不同结果。

## 测地线

若曲线的切向量沿自身平行移动，曲线就是仿射参数化的测地线：

$$
U^\nu\nabla_\nu U^\mu=0.
$$

坐标形式为

$$
\frac{\mathrm d^2x^\mu}{\mathrm d\lambda^2}
+
\Gamma^\mu{}_{\nu\rho}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}
\frac{\mathrm dx^\rho}{\mathrm d\lambda}
=0.
$$

在平直 Cartesian 坐标中 $\Gamma=0$，它退化为匀速直线运动。

### 从长度作用量得到测地线

有质量粒子的固有时作用量为

$$
S=-m\int\mathrm d\tau
=
-m\int
\sqrt{-g_{\mu\nu}\dot x^\mu\dot x^\nu}
\,\mathrm d\lambda.
$$

对 $x^\mu(\lambda)$ 做变分，可以得到测地线方程。若直接采用等价的二次 Lagrangian

$$
L=\frac12 g_{\mu\nu}\dot x^\mu\dot x^\nu,
$$

Euler–Lagrange 方程给出

$$
\frac{\mathrm d}{\mathrm d\lambda}
(g_{\rho\nu}\dot x^\nu)
-
\frac12\partial_\rho g_{\mu\nu}
\dot x^\mu\dot x^\nu=0.
$$

乘以 $g^{\rho\sigma}$ 并整理，正好得到 Christoffel 形式的测地线方程。

### 仿射参数

若 $\lambda$ 是仿射参数，线性变换

$$
\lambda'=a\lambda+b
$$

仍保持测地线方程形式。类时测地线可以用固有时 $\tau$；类光测地线没有固有时，但仍可选择仿射参数。

## 曲率来自平行移动的路径依赖

在一个小闭合回路上平行移动向量，回到起点后的变化与回路面积成正比：

$$
\delta V^\rho
\sim
R^\rho{}_{\sigma\mu\nu}
V^\sigma\,\delta x^\mu\delta x^\nu.
$$

等价地，协变导数的交换子为

$$
[\nabla_\mu,\nabla_\nu]V^\rho
=
R^\rho{}_{\sigma\mu\nu}V^\sigma.
$$

展开得到

$$
R^\rho{}_{\sigma\mu\nu}
=
\partial_\mu\Gamma^\rho{}_{\nu\sigma}
-
\partial_\nu\Gamma^\rho{}_{\mu\sigma}
+
\Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma}
-
\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma}.
$$

虽然单个 $\Gamma$ 不是张量，这个特殊组合是张量。

## Riemann 张量的对称性

降下第一个指标后，Levi-Civita 联络的 Riemann 张量满足

$$
R_{\rho\sigma\mu\nu}
=
-R_{\sigma\rho\mu\nu}
=
-R_{\rho\sigma\nu\mu},
$$

以及交换指标对的对称性

$$
R_{\rho\sigma\mu\nu}
=
R_{\mu\nu\rho\sigma}.
$$

第一 Bianchi 恒等式为

$$
R_{\rho[\sigma\mu\nu]}=0.
$$

在四维中，一个一般四阶张量有 $4^4=256$ 个分量；这些对称性把独立分量减少到 20 个。

## Ricci、标量曲率与 Einstein 张量

缩并 Riemann 张量得到 Ricci 张量：

$$
R_{\mu\nu}=R^\rho{}_{\mu\rho\nu}.
$$

再缩并得到 Ricci 标量：

$$
R=g^{\mu\nu}R_{\mu\nu}.
$$

Einstein 张量定义为

$$
G_{\mu\nu}
=
R_{\mu\nu}-\frac12 Rg_{\mu\nu}.
$$

第二 Bianchi 恒等式

$$
\nabla_{[\lambda}R_{\rho\sigma]\mu\nu}=0
$$

经过缩并给出

$$
\nabla_\mu G^{\mu\nu}=0.
$$

这个零散度性质使 $G_{\mu\nu}$ 能够与守恒的能量动量张量相匹配。

## Weyl 张量

在 $n\ge 3$ 维，Riemann 张量可以拆成由 Ricci 张量决定的部分和无迹的 Weyl 张量 $C_{\rho\sigma\mu\nu}$。

四维中可写成

$$
\begin{aligned}
C_{\rho\sigma\mu\nu}
=\;&R_{\rho\sigma\mu\nu}
-
\left(
g_{\rho[\mu}R_{\nu]\sigma}
-
g_{\sigma[\mu}R_{\nu]\rho}
\right)\\
&+
\frac13 R
g_{\rho[\mu}g_{\nu]\sigma}.
\end{aligned}
$$

Ricci 曲率直接受局部物质源约束，Weyl 曲率包含自由引力场、潮汐作用和引力辐射等信息。真空中 $R_{\mu\nu}=0$ 仍可能有 $C_{\rho\sigma\mu\nu}\ne0$，Schwarzschild 黑洞就是例子。

## 二球面的联络与曲率

对半径 $a$ 的二球面

$$
\mathrm ds^2
=
a^2\mathrm d\theta^2
+
a^2\sin^2\theta\,\mathrm d\phi^2,
$$

非零度规偏导只有

$$
\partial_\theta g_{\phi\phi}
=
2a^2\sin\theta\cos\theta.
$$

代入 Christoffel 公式得到

$$
\Gamma^\theta{}_{\phi\phi}
=
-\sin\theta\cos\theta,
$$

$$
\Gamma^\phi{}_{\theta\phi}
=
\Gamma^\phi{}_{\phi\theta}
=
\cot\theta.
$$

计算一个独立 Riemann 分量：

$$
R^\theta{}_{\phi\theta\phi}
=
\partial_\theta\Gamma^\theta{}_{\phi\phi}
-
\Gamma^\theta{}_{\phi\phi}
\Gamma^\phi{}_{\theta\phi}
=
\sin^2\theta.
$$

降指标后

$$
R_{\theta\phi\theta\phi}
=
a^2\sin^2\theta.
$$

二维中 Ricci 张量满足

$$
R_{ij}=\frac{1}{a^2}g_{ij},
$$

标量曲率为

$$
R=\frac{2}{a^2}.
$$

曲率处处相同，半径越小曲率越大。

## 坐标弯曲与真实曲率

平面使用极坐标时，Christoffel 符号也不为零：

$$
\mathrm ds^2=\mathrm dr^2+r^2\mathrm d\phi^2.
$$

例如

$$
\Gamma^r{}_{\phi\phi}=-r,
\qquad
\Gamma^\phi{}_{r\phi}=\frac1r.
$$

但把这些项代入 Riemann 张量后全部相消，得到 $R^\rho{}_{\sigma\mu\nu}=0$。因此：

- 非零 Christoffel 符号可能只来自弯曲坐标；
- 非零 Riemann 张量表示无法通过换坐标消去的内在曲率。

## 测地线偏离

考虑一族邻近测地线，切向量为 $U^\mu$，分离向量为 $S^\mu$。它们的相对加速度满足

$$
\frac{D^2S^\mu}{\mathrm d\tau^2}
=
R^\mu{}_{\nu\rho\sigma}
U^\nu U^\rho S^\sigma.
$$

单个自由落体观察者在局部感觉不到重力，两个相邻自由落体观察者之间的距离却会因曲率改变。右边就是可测量的潮汐效应。

在 Newton 极限中，这条方程退化为

$$
\frac{\mathrm d^2S^i}{\mathrm dt^2}
\approx
-\partial_i\partial_j\Phi\,S^j.
$$

引力势的一阶导数给出共同加速度，二阶导数给出无法一起消除的相对加速度。

## 正交标架与 tetrad

坐标基通常不是单位正交基。可以在每一点选择局部标架 $e_a=e_a{}^\mu\partial_\mu$，满足

$$
g_{\mu\nu}e_a{}^\mu e_b{}^\nu
=
\eta_{ab}.
$$

逆标架把坐标分量变成局部 Lorentz 分量：

$$
V^a=e^a{}_\mu V^\mu.
$$

实际观察者携带的钟和正交尺更接近 tetrad，而非任意坐标基。局部测量通常先投影到 tetrad 上。

在非坐标基中，联络由 spin connection $\omega^a{}_{b\mu}$ 表示：

$$
\nabla_\mu V^a
=
\partial_\mu V^a
+
\omega^a{}_{b\mu}V^b.
$$

它也用于把旋量耦合到弯曲时空。

## 联络与规范场的类比

电磁势 $A_\mu$ 让带电场的导数变成规范协变导数；几何联络 $\Gamma^\rho{}_{\mu\nu}$ 让张量的导数变成坐标协变导数。两者的曲率都来自导数交换子：

$$
[D_\mu,D_\nu]\sim F_{\mu\nu},
$$

$$
[\nabla_\mu,\nabla_\nu]\sim R^\rho{}_{\sigma\mu\nu}.
$$

类比有助于理解 fiber bundle 语言，但两种联络作用的空间不同，不能把它们当成同一个物理场。

## 常见误区

### 把 Christoffel 符号叫作曲率

$\Gamma$ 可以因坐标选择而出现，Riemann 张量才判断内在曲率。

### 认为测地线总是两点间最短路径

在 Riemann 空间中，短测地线局部极小化长度；在 Lorentz 时空中，类时测地线局部极大化固有时。较长区间还可能出现共轭点，使极值性质改变。

### 把 $R_{\mu\nu}=0$ 理解为完全平直

四维真空只要求 Ricci 张量为零，Weyl 张量仍可非零。只有整个 Riemann 张量为零才局部平直。

### 忘记曲率约定

交换协变导数的顺序或改变 Riemann 定义会改变若干公式的符号。整个推导必须使用同一约定。

## 本篇自检

1. 联络项为什么能够修复向量偏导数的变换律？
2. 无挠和度规相容怎样唯一确定 Levi-Civita 联络？
3. 平行移动的路径依赖怎样由 Riemann 张量表示？
4. 为什么球坐标平面有非零 $\Gamma$ 却没有曲率？
5. Ricci 曲率和 Weyl 曲率分别保留了什么信息？
6. 测地线偏离怎样把抽象曲率变成潮汐测量？

[上一篇：流形、坐标与张量场](./02-manifolds-and-tensors.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：等效原理与爱因斯坦方程](./04-gravitation-and-einstein-equation.md)
