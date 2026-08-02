# 线性引力与引力波

本篇对应原讲义第六章。完整 Einstein 方程是非线性的；当时空只比 Minkowski 时空轻微弯曲时，可以按小扰动展开。最低非平凡阶把场方程化成波动方程，并显示引力具有两个传播自由度。

## 完整译文分节

1. [弱场极限与规范自由度](./06-weak-fields-and-gravitational-waves/01-weak-field-limit-and-gauge.md)
2. [平面波、TT 规范与偏振](./06-weak-fields-and-gravitational-waves/02-plane-waves-tt-gauge-and-polarization.md)
3. [源产生的辐射与四极矩公式](./06-weak-fields-and-gravitational-waves/03-radiation-from-sources-and-quadrupole-formula.md)
4. [引力波携带的能量](./06-weak-fields-and-gravitational-waves/04-energy-carried-by-gravitational-waves.md)

下面其余内容是本站为本章编写的导读。

## 弱场近似

写成

$$
g_{\mu\nu}
=
\eta_{\mu\nu}+h_{\mu\nu},
\qquad
|h_{\mu\nu}|\ll1.
$$

只保留 $h$ 的一阶项，舍弃 $h^2$、$h\partial h$ 等高阶项。逆度规由

$$
g^{\mu\rho}g_{\rho\nu}=\delta^\mu{}_\nu
$$

给出

$$
g^{\mu\nu}
=
\eta^{\mu\nu}-h^{\mu\nu}+O(h^2).
$$

线性阶升降 $h$ 的指标时使用背景度规 $\eta$：

$$
h^\mu{}_\nu=\eta^{\mu\rho}h_{\rho\nu}.
$$

迹定义为

$$
h=\eta^{\mu\nu}h_{\mu\nu}.
$$

## 线性化联络与曲率

Christoffel 符号的一阶部分为

$$
\Gamma^\rho{}_{\mu\nu}
=
\frac12\eta^{\rho\sigma}
(\partial_\mu h_{\sigma\nu}
+\partial_\nu h_{\sigma\mu}
-\partial_\sigma h_{\mu\nu}).
$$

$\Gamma\Gamma$ 已是二阶小量，所以线性 Riemann 张量只保留 $\partial\Gamma$：

$$
R_{\rho\sigma\mu\nu}^{(1)}
=
\frac12
\left(
\partial_\mu\partial_\sigma h_{\rho\nu}
+
\partial_\nu\partial_\rho h_{\sigma\mu}
-
\partial_\nu\partial_\sigma h_{\rho\mu}
-
\partial_\mu\partial_\rho h_{\sigma\nu}
\right).
$$

缩并得到

$$
R_{\mu\nu}^{(1)}
=
\frac12
\left(
\partial_\rho\partial_\mu h^\rho{}_\nu
+
\partial_\rho\partial_\nu h^\rho{}_\mu
-
\Box h_{\mu\nu}
-
\partial_\mu\partial_\nu h
\right),
$$

其中

$$
\Box=\eta^{\rho\sigma}\partial_\rho\partial_\sigma
=
-\partial_t^2+\nabla^2.
$$

## 坐标自由在线性理论中的表现

做无穷小坐标变换

$$
x'^\mu=x^\mu+\xi^\mu(x).
$$

把同一度规重新写在新坐标下，扰动变化为

$$
h'_{\mu\nu}
=
h_{\mu\nu}
-
\partial_\mu\xi_\nu
-
\partial_\nu\xi_\mu.
$$

因此 $h_{\mu\nu}$ 的十个分量并非十个独立物理场。某些分量只反映坐标选择。

在线性阶，Riemann 张量在这个变换下保持不变。可观测潮汐作用依赖曲率，因此不会被纯坐标扰动伪造。

## 迹反转扰动

定义

$$
\bar h_{\mu\nu}
=
h_{\mu\nu}
-
\frac12\eta_{\mu\nu}h.
$$

四维中再次迹反转会回到原扰动：

$$
h_{\mu\nu}
=
\bar h_{\mu\nu}
-
\frac12\eta_{\mu\nu}\bar h,
\qquad
\bar h=-h.
$$

采用 harmonic gauge

$$
\partial^\mu\bar h_{\mu\nu}=0.
$$

在线性坐标变换下，总能在适当条件下选择 $\xi^\mu$ 使该式成立。仍满足

$$
\Box\xi^\mu=0
$$

的变换保留 harmonic gauge，形成剩余规范自由。

## 线性化 Einstein 方程

在 harmonic gauge 中，线性 Einstein 张量大幅简化：

$$
G_{\mu\nu}^{(1)}
=
-\frac12\Box\bar h_{\mu\nu}.
$$

所以场方程成为

$$
\Box\bar h_{\mu\nu}
=
-16\pi G T_{\mu\nu}.
$$

真空中

$$
\Box\bar h_{\mu\nu}=0.
$$

这与电磁势在 Lorenz gauge 中的波动方程相似。区别在于电磁扰动是四矢量，引力扰动是对称二阶张量。

## 平面波解

考虑复数表示

$$
\bar h_{\mu\nu}
=
C_{\mu\nu}e^{ik_\rho x^\rho},
$$

最后取实部。波动方程要求

$$
k^\rho k_\rho=0,
$$

所以引力扰动沿类光方向传播。harmonic gauge 要求

$$
k^\mu C_{\mu\nu}=0.
$$

对称矩阵 $C_{\mu\nu}$ 原有十个分量。四个 harmonic 条件和四个剩余坐标自由最终留下两个物理自由度。

## 横向无迹规范

对真空平面波，可以进一步选 transverse-traceless gauge，简称 TT gauge：

$$
h_{0\mu}^{\mathrm{TT}}=0,
$$

$$
\partial_i h_{ij}^{\mathrm{TT}}=0,
$$

$$
\delta^{ij}h_{ij}^{\mathrm{TT}}=0.
$$

若波沿 $z$ 方向传播，空间扰动矩阵为

$$
h_{ij}^{\mathrm{TT}}(t-z)
=
\begin{pmatrix}
h_+&h_\times&0\\
h_\times&-h_+&0\\
0&0&0
\end{pmatrix}.
$$

$h_+$ 和 $h_\times$ 是两种独立极化，旋转 $45^\circ$ 后彼此转换。

## 波怎样移动自由测试粒子

单个自由粒子的坐标轨迹可以通过坐标选择看起来保持不动。真正可测的是邻近粒子间的相对距离，由测地线偏离描述：

$$
\frac{D^2S^\mu}{\mathrm d\tau^2}
=
R^\mu{}_{\nu\rho\sigma}
U^\nu U^\rho S^\sigma.
$$

对缓慢测试粒子 $U^\mu\approx(1,0,0,0)$，TT gauge 中

$$
R_{i00j}^{(1)}
=
\frac12\ddot h_{ij}^{\mathrm{TT}}.
$$

所以

$$
\ddot S^i
=
\frac12\ddot h^i{}_j{}^{\mathrm{TT}}S^j.
$$

积分到一阶可写成

$$
\delta S^i
\approx
\frac12h^i{}_j{}^{\mathrm{TT}}S_0^j.
$$

### 两种极化的几何图像

在垂直传播方向的平面中放一圈自由粒子：

- $+$ 极化交替拉伸 $x$ 方向、压缩 $y$ 方向，再交换；
- $\times$ 极化完成同样变形，但主轴旋转 $45^\circ$；
- 沿传播方向的一阶距离不变，所以波是横向的。

局部面积在一阶保持不变，对应扰动无迹。

## 为什么没有单极和偶极引力辐射

源的总质量是质量单极矩。在孤立系统中总能量守恒，所以单极矩不能周期变化并辐射。

质量偶极矩为

$$
D_i=\int\rho x_i\,\mathrm d^3x.
$$

其一阶导数是总动量，总动量守恒使二阶导数为零，因此也没有独立偶极引力辐射。

最低可辐射多极矩是质量四极矩。

## 延迟解与远区波

线性场方程的延迟解为

$$
\bar h_{\mu\nu}(t,\boldsymbol x)
=
4G
\int
\frac{T_{\mu\nu}(t-|\boldsymbol x-\boldsymbol y|,\boldsymbol y)}
{|\boldsymbol x-\boldsymbol y|}
\,\mathrm d^3y.
$$

若观测距离 $r$ 远大于源尺寸，并且源内部速度较低，可展开分母与延迟时间。空间分量的主导辐射项为

$$
\bar h_{ij}(t,\boldsymbol x)
\approx
\frac{2G}{r}
\frac{\mathrm d^2I_{ij}(t-r)}{\mathrm dt^2},
$$

其中

$$
I_{ij}(t)
=
\int\rho(t,\boldsymbol y)y_i y_j\,\mathrm d^3y.
$$

真正的辐射场要再取横向无迹投影：

$$
h_{ij}^{\mathrm{TT}}
=
\frac{2G}{r}
\ddot Q_{ij}^{\mathrm{TT}}(t-r),
$$

无迹四极矩为

$$
Q_{ij}
=
\int\rho
\left(
y_i y_j-\frac13\delta_{ij}\boldsymbol y^2
\right)
\mathrm d^3y.
$$

恢复光速后，振幅前因子为 $2G/(c^4r)$。

## 引力波携带的能量

引力能量无法在任意尺度上由唯一局部张量表示。对波长远短于背景曲率尺度的弱波，可以对多个波长做平均，得到有效能量通量。

在 TT gauge 中，平均能流量级为

$$
\langle T_{00}^{\mathrm{GW}}\rangle
\sim
\frac{1}{32\pi G}
\left\langle
\dot h_{ij}^{\mathrm{TT}}
\dot h_{ij}^{\mathrm{TT}}
\right\rangle.
$$

孤立慢速源的总辐射功率由四极矩公式给出：

$$
P
=
\frac{G}{5}
\left\langle
\dddot Q_{ij}\dddot Q_{ij}
\right\rangle.
$$

恢复 SI 单位：

$$
P
=
\frac{G}{5c^5}
\left\langle
\dddot Q_{ij}\dddot Q_{ij}
\right\rangle.
$$

$c^{-5}$ 表明普通非相对论系统的引力辐射非常弱；质量大、运动快且四极矩快速变化的致密系统最有效。

## 圆轨道双体的尺度关系

两个质量组成半径尺度 $a$、角频率 $\Omega$ 的双体，四极矩量级为

$$
Q\sim\mu a^2,
$$

其中 $\mu$ 是约化质量。三次时间导数量级

$$
\dddot Q\sim\mu a^2\Omega^3.
$$

因此

$$
P\sim\frac{G}{c^5}\mu^2a^4\Omega^6.
$$

利用 Newton 圆轨道关系 $\Omega^2\sim GM/a^3$，可见轨道缩小时功率迅速增加。系统损失轨道能量，频率和振幅随时间上升，形成 inspiral chirp 的基本机制。

## 近区、辐射区与近似边界

弱场推导同时使用若干条件：

- $|h_{\mu\nu}|\ll1$；
- 只保留线性项；
- 背景近似为 Minkowski；
- 四极矩公式还要求源内部运动较慢、观测点位于远区；
- 波能量需要在多个波长上平均。

近区场可随 $1/r^2$ 或更快衰减，主要反映瞬时束缚场；辐射区的波振幅按 $1/r$ 衰减，可以把能量输送到无穷远。

强场双体并合阶段需要非线性数值相对论，不能继续依赖简单四极矩公式。

## 规范量与可观测量

| 表达式 | 是否直接规范不变 | 用途 |
| --- | --- | --- |
| $h_{\mu\nu}$ | 否 | 方便描述弱场扰动 |
| harmonic gauge 条件 | 坐标选择 | 简化场方程 |
| TT 分量 | 对远区自由波具有物理意义 | 表示两个辐射自由度 |
| 线性 Riemann 张量 | 是 | 描述潮汐效应 |
| 测试质量相对位移 | 是 | 对应探测器读数 |

判断一个波是否真实存在时，应检查曲率或观察者之间的相对运动，不能只看某组坐标中的 $h_{\mu\nu}$ 是否振荡。

## 常见误区

### 把 $h_{\mu\nu}$ 的十个分量都当成极化

坐标自由和约束消去八个非物理自由度，四维真空引力波只剩两个传播极化。

### 认为自由粒子坐标不动就没有波

TT 坐标中粒子坐标可以固定，度规改变使它们之间的固有距离变化。

### 把线性理论用于任意强场

事件视界附近或并合时 $h$ 未必小，线性叠加和四极矩近似会失效。

### 忘记源的守恒律

单极和偶极项不辐射与总能量、总动量守恒直接相关。任意手写的时变质量分布若违反守恒，可能产生虚假的低阶辐射。

## 本篇自检

1. 无穷小坐标变换怎样改变 $h_{\mu\nu}$？
2. 迹反转和 harmonic gauge 怎样把 Einstein 方程化成波动方程？
3. 十个对称扰动分量为什么最终只留下两个物理自由度？
4. 测地线偏离怎样给出引力波的可观测作用？
5. 为什么最低引力辐射多极矩是四极矩？
6. 四极矩公式依赖哪些弱场、慢速和远区假设？

[上一篇：微分同胚、李导数与 Killing 对称](./05-diffeomorphisms-and-symmetry.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：Schwarzschild 解与黑洞](./07-schwarzschild-and-black-holes.md)
