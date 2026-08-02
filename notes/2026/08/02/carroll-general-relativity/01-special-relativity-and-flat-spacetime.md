# 狭义相对论与平直时空

本篇对应原讲义第一章。目标是把狭义相对论改写成一套可迁移到弯曲时空的语言：事件、度规、四维向量、张量、微分形式和能量动量张量。

## 完整译文分节

1. [时空间隔、度规与 Lorentz 变换](./01-special-relativity-and-flat-spacetime/01-spacetime-interval-and-lorentz-transformations.md)
2. [向量、对偶向量与张量](./01-special-relativity-and-flat-spacetime/02-vectors-dual-vectors-and-tensors.md)
3. [微分形式与 Hodge 对偶](./01-special-relativity-and-flat-spacetime/03-differential-forms-and-hodge-duality.md)
4. [世界线、固有时与四动量](./01-special-relativity-and-flat-spacetime/04-worldlines-proper-time-and-momentum.md)
5. [能量动量张量与理想流体](./01-special-relativity-and-flat-spacetime/05-stress-energy-and-perfect-fluids.md)

下面其余内容是本站为本章编写的导读。

## 从事件开始

事件（event）是时空中的一个点。惯性观察者为事件指定坐标

$$
x^\mu=(t,x,y,z).
$$

坐标取值依赖观察者，两个邻近事件之间的时空间隔

$$
\mathrm ds^2
=
\eta_{\mu\nu}\,\mathrm dx^\mu\mathrm dx^\nu
=
-\mathrm dt^2+\mathrm dx^2+\mathrm dy^2+\mathrm dz^2
$$

对所有惯性观察者相同。

这句话包含狭义相对论最重要的结构：观察者可以混合时间坐标与空间坐标，但必须保持 Minkowski 度规 $\eta$。

## Lorentz 变换怎样出现

只考虑沿 $x$ 方向以速度 $v$ 相对运动的两个惯性系。线性和时空均匀性要求变换形如

$$
\begin{aligned}
t'&=A t+B x,\\
x'&=C t+D x.
\end{aligned}
$$

新坐标原点满足 $x'=0$，并在旧坐标中沿 $x=vt$ 运动，因此

$$
C+Dv=0.
$$

再要求间隔不变：

$$
-\mathrm dt'^2+\mathrm dx'^2
=
-\mathrm dt^2+\mathrm dx^2.
$$

解这些系数并选择 $v=0$ 时连续回到恒等变换，得到

$$
\begin{aligned}
t'&=\gamma(t-vx),\\
x'&=\gamma(x-vt),\\
y'&=y,\\
z'&=z,
\end{aligned}
\qquad
\gamma=\frac{1}{\sqrt{1-v^2}}.
$$

矩阵形式为

$$
x'^\mu=\Lambda^\mu{}_\nu x^\nu,
$$

其中 Lorentz 矩阵满足

$$
\Lambda^\rho{}_\mu
\Lambda^\sigma{}_\nu
\eta_{\rho\sigma}
=
\eta_{\mu\nu}.
$$

这就是“保持间隔不变”的代数表达。

## 快速度参数让变换更像旋转

定义快速度（rapidity）$\varphi$：

$$
v=\tanh\varphi,
\qquad
\gamma=\cosh\varphi,
\qquad
\gamma v=\sinh\varphi.
$$

boost 可以写成

$$
\begin{pmatrix}
t'\\x'
\end{pmatrix}
=
\begin{pmatrix}
\cosh\varphi&-\sinh\varphi\\
-\sinh\varphi&\cosh\varphi
\end{pmatrix}
\begin{pmatrix}
t\\x
\end{pmatrix}.
$$

普通二维旋转使用 $\cos\theta$ 和 $\sin\theta$，Lorentz boost 使用双曲函数。这反映了度规号差中时间方向与空间方向的符号不同。

连续两次同方向 boost 时，快速度直接相加：

$$
\varphi_{12}=\varphi_1+\varphi_2.
$$

由 $v=\tanh\varphi$ 可得速度合成律

$$
v_{12}
=
\frac{v_1+v_2}{1+v_1v_2}.
$$

因此有限速度经过合成仍小于 1。

## 光锥与因果结构

两个事件的分离按间隔分类：

$$
\Delta s^2
\begin{cases}
<0,&\text{类时分离},\\
=0,&\text{类光分离},\\
>0,&\text{类空分离}.
\end{cases}
$$

- 类时分离的事件可以由低于光速的物体连接，不同惯性系同意它们的时间先后；
- 类光分离的事件由光线连接；
- 类空分离的事件无法发生因果影响，不同惯性系可以对它们的先后顺序有不同判断。

光锥（light cone）由 $\mathrm ds^2=0$ 定义。未来光锥包含一个事件可以影响的区域，过去光锥包含能够影响该事件的区域。

## 固有时间

有质量粒子的世界线是类时曲线。沿世界线定义固有时间

$$
\mathrm d\tau^2=-\mathrm ds^2.
$$

若粒子在某惯性系中的三速度为 $\boldsymbol v$，则

$$
\mathrm d\tau
=
\mathrm dt\sqrt{1-\boldsymbol v^2}
=
\frac{\mathrm dt}{\gamma}.
$$

固有时间是与粒子一起运动的理想钟所记录的时间。它是世界线的几何长度，因此不依赖用哪套惯性坐标计算。

### 双生子问题的几何解释

两条世界线连接同样的出发和重逢事件时，各自积累的固有时间是

$$
\tau=\int\sqrt{1-\boldsymbol v(t)^2}\,\mathrm dt.
$$

在平直时空中，连接两个类时分离事件的惯性直线拥有最大的固有时间。改变运动方向的一方走的是分段曲线，因此积累较少的固有时间。关键差异来自世界线，不需要假设某一方的钟发生机械故障。

## 向量、协向量与张量

### 逆变向量

向量分量按坐标本身的 Jacobian 变换：

$$
V'^\mu
=
\frac{\partial x'^\mu}{\partial x^\nu}V^\nu.
$$

在 Lorentz 变换中就是

$$
V'^\mu=\Lambda^\mu{}_\nu V^\nu.
$$

### 协变向量

协向量是把向量映射为标量的线性函数。其分量按逆 Jacobian 变换：

$$
\omega'_\mu
=
\frac{\partial x^\nu}{\partial x'^\mu}\omega_\nu.
$$

梯度是最常见的协向量：

$$
\mathrm df
=
\partial_\mu f\,\mathrm dx^\mu.
$$

### 张量

一个 $(k,l)$ 型张量接受 $k$ 个协向量和 $l$ 个向量，并给出一个标量。分量带 $k$ 个上指标和 $l$ 个下指标：

$$
T^{\mu_1\cdots\mu_k}{}_{\nu_1\cdots\nu_l}.
$$

张量积、缩并、指标置换以及同型张量的线性组合仍然得到张量。偏导数一般无法直接作用在张量上并保持张量变换律，这个问题会在弯曲时空中引出协变导数。

## 度规的四项工作

Minkowski 度规 $\eta_{\mu\nu}$ 同时完成四件事：

1. 计算长度和内积；
2. 区分类时、类光和类空方向；
3. 在向量与协向量之间建立对应；
4. 定义与观察者相关的时间方向和空间超平面。

升降指标为

$$
V_\mu=\eta_{\mu\nu}V^\nu.
$$

在 mostly-plus 号差下，若 $V^\mu=(V^0,V^1,V^2,V^3)$，则

$$
V_\mu=(-V^0,V^1,V^2,V^3).
$$

时间分量降指标时会改变符号。

## Levi-Civita 张量与微分形式

完全反对称符号由

$$
\epsilon_{0123}=+1
$$

以及交换任意两个指标变号来定义。它允许把反对称张量转换成对偶对象。

一个 $p$-形式是完全反对称的 $(0,p)$ 型张量：

$$
\omega
=
\frac{1}{p!}
\omega_{\mu_1\cdots\mu_p}
\mathrm dx^{\mu_1}\wedge\cdots\wedge\mathrm dx^{\mu_p}.
$$

外积满足

$$
\alpha\wedge\beta
=
(-1)^{pq}\beta\wedge\alpha
$$

其中 $\alpha$ 是 $p$-形式，$\beta$ 是 $q$-形式。

外微分把 $p$-形式变成 $(p+1)$-形式：

$$
(\mathrm d\omega)_{\mu_0\cdots\mu_p}
=
(p+1)\partial_{[\mu_0}
\omega_{\mu_1\cdots\mu_p]}.
$$

它满足

$$
\mathrm d^2=0.
$$

Hodge 对偶则依赖度规，把四维中的 $p$-形式映射为 $(4-p)$-形式。

## 电磁场是二形式

电磁四势为一形式

$$
A=A_\mu\,\mathrm dx^\mu.
$$

场强二形式定义为

$$
F=\mathrm dA,
$$

所以

$$
F_{\mu\nu}
=
\partial_\mu A_\nu-
\partial_\nu A_\mu.
$$

由 $\mathrm d^2=0$ 自动得到齐次 Maxwell 方程

$$
\mathrm dF=0
$$

或分量形式

$$
\partial_{[\lambda}F_{\mu\nu]}=0.
$$

有源方程可以写成

$$
\partial_\mu F^{\nu\mu}=J^\nu.
$$

对它再取 $\partial_\nu$，利用 $F^{\nu\mu}$ 的反对称性，得到

$$
\partial_\nu J^\nu=0.
$$

这就是电荷守恒。形式语言把“场强来自势”和“齐次方程自动成立”压缩进 $F=\mathrm dA$。

## 四速度与四动量

四速度定义为

$$
U^\mu=\frac{\mathrm dx^\mu}{\mathrm d\tau}.
$$

若三速度为 $\boldsymbol v$，则

$$
U^\mu=\gamma(1,\boldsymbol v),
\qquad
U^\mu U_\mu=-1.
$$

四动量为

$$
p^\mu=mU^\mu=(E,\boldsymbol p).
$$

由归一化条件得到

$$
p^\mu p_\mu=-m^2,
$$

也就是

$$
E^2=\boldsymbol p^2+m^2.
$$

对于无质量粒子，$p^\mu p_\mu=0$，因此 $E=|\boldsymbol p|$。

## 观察者怎样测量能量

四速度为 $U^\mu$ 的观察者测得粒子四动量 $p^\mu$ 的能量为

$$
E_{(U)}=-p_\mu U^\mu.
$$

这是一个标量，但它依赖观察者 $U$。这两点可以同时成立：测量结果在同一观察者的不同坐标描述下不变，不同运动状态的观察者仍可能测得不同能量。

对光子也有同样关系：

$$
\omega=-k_\mu U^\mu.
$$

引力红移和宇宙学红移最终都会使用这条观察者测量公式。

## 能量动量张量

$T^{\mu\nu}$ 把物质的能量、动量和应力统一起来。在观察者的局部惯性系中：

| 分量 | 含义 |
| --- | --- |
| $T^{00}$ | 能量密度 |
| $T^{0i}$ | 第 $i$ 方向的能量流，也对应动量密度 |
| $T^{i0}$ | 第 $i$ 方向的动量密度 |
| $T^{ij}$ | 第 $j$ 面上第 $i$ 方向的动量通量，即应力 |

无相互作用的尘埃（dust）由静质量密度 $\rho$ 和四速度 $U^\mu$ 描述：

$$
T^{\mu\nu}=\rho U^\mu U^\nu.
$$

各向同性完美流体还包含压力：

$$
T^{\mu\nu}
=
(\rho+p)U^\mu U^\nu
+
p\eta^{\mu\nu}.
$$

在流体静止系 $U^\mu=(1,0,0,0)$ 中，

$$
T^{\mu\nu}
=
\operatorname{diag}(\rho,p,p,p).
$$

压力会进入空间对角分量。在广义相对论中，它也参与产生曲率。

## 局部守恒

平直时空中的能量动量守恒写成

$$
\partial_\mu T^{\mu\nu}=0.
$$

取 $\nu=0$ 得到能量连续性方程，取 $\nu=i$ 得到三个动量守恒方程。

把方程在一个空间区域积分，并使用 Gauss 定理，可以得到：区域内某种能量或动量的变化率，等于穿过边界的相应通量。张量方程因此统一了连续介质力学中的多条守恒定律。

## 一个计算例子：四动量的 Lorentz 变换

设粒子在某惯性系中的四动量为

$$
p^\mu=(E,p_x,p_y,p_z).
$$

沿 $x$ 方向做速度为 $v$ 的 boost：

$$
\begin{aligned}
E'&=\gamma(E-vp_x),\\
p_x'&=\gamma(p_x-vE),\\
p_y'&=p_y,\\
p_z'&=p_z.
\end{aligned}
$$

直接计算可验证

$$
-E'^2+\boldsymbol p'^2
=
-E^2+\boldsymbol p^2
=
-m^2.
$$

能量和三动量各自依赖观察者，四动量的 Minkowski 范数保持不变。

## 常见误区

### 把坐标分量当成几何对象

四个数字 $V^\mu$ 只有连同基向量 $\partial_\mu$ 才定义一个向量。换坐标后分量变化不表示物理向量本身发生了变化。

### 认为时间膨胀只是一种视觉现象

固有时间是钟沿世界线积累的实际读数。重逢后比较两只钟，可以直接检验差异。

### 把 Lorentz 不变量理解为所有观察者测量值都相同

能量、频率和三速度会随观察者改变。不变量是按张量规则组成的标量，例如 $p^\mu p_\mu$。

### 忽略号差

使用 $(-,+,+,+)$ 时，有质量粒子的四速度平方是 $-1$。换成 $(+,-,-,-)$ 会同时改变多处符号。

## 本篇自检

1. 从间隔不变条件怎样得到 Lorentz 矩阵满足的方程？
2. 为什么快速度比普通速度更适合组合 boost？
3. 为什么类空分离事件不能建立因果关系？
4. 怎样从 $U^\mu U_\mu=-1$ 推出 $E^2=\boldsymbol p^2+m^2$？
5. 为什么完美流体的压力出现在 $T^{ij}$ 中？
6. $F=\mathrm dA$ 怎样自动保证齐次 Maxwell 方程？

[上一篇：阅读路线与符号约定](./00-roadmap-and-conventions.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：流形、坐标与张量场](./02-manifolds-and-tensors.md)
