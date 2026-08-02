# FRW 宇宙学

本篇对应原讲义第八章。宇宙学用大尺度均匀和各向同性把 Einstein 偏微分方程化成尺度因子 $a(t)$ 的常微分方程。几何、物质状态方程和光的传播共同决定膨胀历史与可观测红移。

## 完整译文分节

1. [均匀各向同性与 Robertson–Walker 几何](./08-cosmology/01-homogeneity-isotropy-and-rw-geometry.md)
2. [宇宙物质与 Friedmann 方程](./08-cosmology/02-cosmological-matter-and-friedmann-equations.md)
3. [宇宙学参数与尺度因子演化](./08-cosmology/03-cosmological-parameters-and-scale-factor-evolution.md)
4. [红移、光度距离与 Hubble 定律](./08-cosmology/04-redshift-luminosity-distance-and-hubble-law.md)

下面其余内容是本站为本章编写的导读。

## 宇宙学原理

在足够大的空间尺度上，假设宇宙的空间切片：

- **均匀**（homogeneous）：每个位置等价；
- **各向同性**（isotropic）：每个方向等价。

各向同性是关于某一点的性质，均匀性是关于不同点的性质。若每一点都各向同性，空间通常也均匀。

三维最大对称空间只有三类常曲率几何：

| $k$ | 空间曲率 | 常用称呼 |
| --- | --- | --- |
| $+1$ | 正 | 闭合球形空间 |
| $0$ | 零 | 平直空间 |
| $-1$ | 负 | 开放双曲空间 |

$k$ 描述空间切片的内在曲率，不直接决定整个四维时空是否弯曲。

## Robertson–Walker 度规

满足宇宙学原理的度规可写成

$$
\boxed{
\mathrm ds^2
=
-\mathrm dt^2
+
a^2(t)
\left[
\frac{\mathrm dr^2}{1-kr^2}
+
r^2\mathrm d\Omega^2
\right]
}.
$$

$a(t)$ 是尺度因子。它把固定共动坐标间隔转换为随时间变化的固有空间距离。

与宇宙平均物质一起运动的共动观察者具有固定 $(r,\theta,\phi)$，四速度为

$$
U^\mu=(1,0,0,0).
$$

对共动观察者，坐标时间 $t$ 就是固有时。

## 尺度因子与物理距离

在平直情形 $k=0$，两个同一时刻、共动间距为 $\Delta\chi$ 的观察者之间固有距离是

$$
D(t)=a(t)\Delta\chi.
$$

对时间求导：

$$
\dot D
=
\frac{\dot a}{a}D
=
H(t)D,
$$

其中

$$
H(t)=\frac{\dot a}{a}
$$

是 Hubble 参数。

这条关系来自度规随时间变化。对足够远的共动点，$\dot D$ 可以大于光速，它不是某个物体在局部惯性系中穿过空间的速度，因此不违反局部光速限制。

## 对称性怎样限制物质

均匀性排除空间位置依赖，各向同性排除优先空间方向和剪切应力。宇宙平均能量动量张量只能取完美流体形式：

$$
T_{\mu\nu}
=
(\rho+p)U_\mu U_\nu
+
pg_{\mu\nu}.
$$

在共动正交标架中

$$
T^{\hat a}{}_{\hat b}
=
\operatorname{diag}(-\rho,p,p,p).
$$

$\rho(t)$ 和 $p(t)$ 只能依赖宇宙时间。

## FRW 度规的 Einstein 张量

把 Robertson–Walker 度规代入曲率计算，得到

$$
G_{00}
=
3\left(H^2+\frac{k}{a^2}\right),
$$

以及空间分量

$$
G_{ij}
=
-\left(
2\frac{\ddot a}{a}
+H^2
+\frac{k}{a^2}
\right)g_{ij}.
$$

所有非对角分量因对称性为零。十个 Einstein 方程因此只剩两个独立标量方程。

## 两条 Friedmann 方程

由

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=
8\pi G T_{\mu\nu}
$$

的 $00$ 分量得到第一 Friedmann 方程：

$$
\boxed{
H^2
=
\frac{8\pi G}{3}\rho
-
\frac{k}{a^2}
+
\frac{\Lambda}{3}
}.
$$

空间分量与第一式组合，得到加速度方程：

$$
\boxed{
\frac{\ddot a}{a}
=
-\frac{4\pi G}{3}(\rho+3p)
+
\frac{\Lambda}{3}
}.
$$

第一式像是关于膨胀率的约束，第二式决定尺度因子的加速度。

## 连续性方程

局部守恒

$$
\nabla_\mu T^{\mu\nu}=0
$$

在 FRW 时空中化为

$$
\boxed{
\dot\rho+3H(\rho+p)=0
}.
$$

它也可以从共动体积的热力学第一定律理解。取物理体积 $V\propto a^3$，总能量 $E=\rho V$：

$$
\mathrm dE=-p\,\mathrm dV.
$$

展开：

$$
V\,\mathrm d\rho
+
\rho\,\mathrm dV
=
-p\,\mathrm dV,
$$

$$
\mathrm d\rho
=
-(\rho+p)\frac{\mathrm dV}{V}
=
-3(\rho+p)\frac{\mathrm da}{a}.
$$

除以 $\mathrm dt$ 就得到连续性方程。

三条式子中只有两条独立：第一 Friedmann 方程与连续性方程可推出加速度方程，反映 Bianchi 恒等式造成的方程依赖。

## 状态方程决定稀释速度

取常数状态方程

$$
p=w\rho.
$$

连续性方程成为

$$
\frac{\dot\rho}{\rho}
=
-3(1+w)\frac{\dot a}{a}.
$$

积分得到

$$
\boxed{
\rho\propto a^{-3(1+w)}
}.
$$

### 非相对论物质

尘埃压力可忽略，$w=0$：

$$
\rho_{\mathrm m}\propto a^{-3}.
$$

共动体积按 $a^3$ 增长，粒子数不变，所以数密度按 $a^{-3}$ 稀释。

### 辐射

辐射满足 $p=\rho/3$，即 $w=1/3$：

$$
\rho_{\mathrm r}\propto a^{-4}.
$$

其中三个 $a^{-1}$ 来自体积膨胀，额外一个 $a^{-1}$ 来自每个光子的能量随红移降低。

### 真空能

宇宙学常数可以移到方程右边，解释成

$$
\rho_\Lambda=\frac{\Lambda}{8\pi G},
\qquad
p_\Lambda=-\rho_\Lambda.
$$

所以 $w=-1$，并且

$$
\rho_\Lambda=\text{常数}.
$$

体积增长时总真空能增加，同时负压力做的功恰好满足连续性方程。

## 平直单组分宇宙的解

取 $k=0$、$\Lambda=0$，由

$$
H^2\propto\rho\propto a^{-3(1+w)}
$$

得到

$$
\frac{\dot a}{a}
\propto
a^{-\frac32(1+w)}.
$$

分离变量并积分：

$$
a^{\frac12(1+3w)}\,\mathrm da
\propto
\mathrm dt,
$$

所以当 $w\ne-1$ 时

$$
\boxed{
a(t)\propto t^{\frac{2}{3(1+w)}}
}.
$$

典型结果：

| 主导成分 | $w$ | $\rho(a)$ | $a(t)$ |
| --- | --- | --- | --- |
| 辐射 | $1/3$ | $a^{-4}$ | $t^{1/2}$ |
| 非相对论物质 | $0$ | $a^{-3}$ | $t^{2/3}$ |
| 刚性流体 | $1$ | $a^{-6}$ | $t^{1/3}$ |

对 $w=-1$，$H$ 为常数，解为

$$
a(t)\propto e^{Ht},
\qquad
H=\sqrt{\frac{\Lambda}{3}},
$$

对应平直切片下的 de Sitter 膨胀。

## 膨胀何时加速

若先把宇宙学常数视作流体的一部分，加速度方程写成

$$
\frac{\ddot a}{a}
=
-\frac{4\pi G}{3}
\sum_s(\rho_s+3p_s).
$$

膨胀加速需要

$$
\rho+3p<0.
$$

对单一状态方程且 $\rho>0$：

$$
w<-\frac13.
$$

这显示在广义相对论中压力也参与主动引力质量。足够负的压力会使 $\ddot a>0$。

## 临界密度与密度参数

定义临界密度

$$
\rho_{\mathrm c}
=
\frac{3H^2}{8\pi G}.
$$

以及

$$
\Omega
=
\frac{\rho}{\rho_{\mathrm c}},
\qquad
\Omega_\Lambda
=
\frac{\Lambda}{3H^2},
\qquad
\Omega_k
=
-\frac{k}{a^2H^2}.
$$

第一 Friedmann 方程变为

$$
1=\Omega+\Omega_\Lambda+\Omega_k.
$$

若 $\Lambda=0$，则

$$
\Omega-1=\frac{k}{a^2H^2}.
$$

因此此时 $\Omega>1$、$=1$、$<1$ 分别对应 $k=+1,0,-1$。

空间曲率符号与宇宙最终是否重新坍缩的关系还取决于物质状态方程和宇宙学常数。离开 $\Lambda=0$、普通正压物质等假设后，不能只凭“开放”或“闭合”判断未来命运。

## 宇宙学红移

考虑径向光线。使用共形时间

$$
\mathrm d\eta=\frac{\mathrm dt}{a(t)},
$$

度规可写成整体乘 $a^2(\eta)$ 的形式。相邻两个波峰沿同一路径传播，其发射时间间隔 $\delta t_{\mathrm e}$ 和接收时间间隔 $\delta t_0$ 满足

$$
\frac{\delta t_0}{a_0}
=
\frac{\delta t_{\mathrm e}}{a_{\mathrm e}}.
$$

频率与周期成反比，所以

$$
\frac{\omega_0}{\omega_{\mathrm e}}
=
\frac{a_{\mathrm e}}{a_0}.
$$

红移定义为

$$
1+z
=
\frac{\lambda_0}{\lambda_{\mathrm e}}
=
\frac{a_0}{a_{\mathrm e}}.
$$

它反映光传播期间尺度因子的变化。对相邻观察者可局部解释为一连串 Doppler 位移，但全程最简洁的描述来自时空几何。

## 光子能量为何按一阶尺度因子降低

共动观察者测得光子频率

$$
\omega=-k_\mu U^\mu.
$$

沿类光测地线求解可得

$$
\omega\propto a^{-1}.
$$

光子数密度按 $a^{-3}$ 稀释，每个光子能量再按 $a^{-1}$ 降低，于是

$$
\rho_{\mathrm r}\propto a^{-4},
$$

与连续性方程推导一致。

## Hubble 定律与低红移展开

光度距离定义为

$$
F=\frac{L}{4\pi d_L^2},
$$

其中 $L$ 是源的本征光度，$F$ 是观测通量。对 FRW 时空，小红移展开为

$$
d_L(z)
=
\frac{1}{H_0}
\left[
z+\frac12(1-q_0)z^2+O(z^3)
\right],
$$

其中

$$
q_0
=
-\left.
\frac{a\ddot a}{\dot a^2}
\right|_0
$$

是当前减速参数。最低阶给出

$$
d_L\approx\frac{z}{H_0},
$$

也就是低红移 Hubble 定律。恢复光速后右边乘 $c$。

二阶项开始包含膨胀加速或减速的信息，因此标准烛光的距离—红移关系能够约束宇宙动力学。

## 大爆炸奇点表达什么

在普通物质、$\Lambda=0$ 的平直解中，向过去追溯会得到

$$
a(t)\to0,
\qquad
\rho(t)\to\infty.
$$

这表示经典 FRW 解在有限固有时前达到测地线不完备和曲率发散。它描述整个空间尺度因子趋零，并非物质从预先存在空间中的某个中心向外爆炸。

当密度接近量子引力尺度时，经典 Einstein 方程预计不再足够。奇点指出理论适用范围终止，没有给出终止之后的微观答案。

## de Sitter 与 anti-de Sitter

真空中只有宇宙学常数时：

- $\Lambda>0$ 给出 de Sitter 时空；
- $\Lambda<0$ 给出 anti-de Sitter 时空。

同一个 de Sitter 时空可以用开放、平直或闭合空间切片表示。这提醒我们，空间切片的 $k$ 依赖对时空的切片选择；完整四维几何拥有更丰富的不变量。

## 1997 年讲义的历史边界

原讲义完成于 1997 年，其最后几页使用当时尚未确定的 $H_0$、$q_0$ 和密度范围来说明如何从观测选择 FRW 模型。本篇保留推导方法和参数定义，不抄录这些历史数值。

阅读旧宇宙学资料时应分开两层：

- Friedmann 方程、连续性方程和红移关系属于理论结构；
- 参数的实测数值和主导成分判断会随观测进展更新。

## 常见误区

### 认为宇宙膨胀必须有空间中心

均匀膨胀由任意两个共动点之间的距离按 $a(t)$ 增长描述，没有流形内部的特殊中心。

### 把 $k$ 直接理解为四维时空曲率

$k$ 只描述固定宇宙时间的三维空间切片。即使 $k=0$，$a(t)$ 变化仍会使四维时空弯曲。

### 认为开放宇宙必然永远膨胀、闭合宇宙必然回缩

这个对应关系需要额外物质和宇宙学常数假设。完整命运由 Friedmann 方程中的所有成分决定。

### 把宇宙红移简单归为普通 Doppler 效应

局部可以使用 Doppler 语言，跨越宇宙尺度的精确关系是 $1+z=a_0/a_{\mathrm e}$。

### 把大爆炸想成空间中的爆炸点

FRW 模型中的 $a\to0$ 同时发生在整个共动空间切片上，没有内部中心。

## 本篇自检

1. 均匀和各向同性怎样把度规限制成 Robertson–Walker 形式？
2. 为什么宇宙平均物质必须表现为完美流体？
3. 怎样从热力学第一定律得到 $\dot\rho+3H(\rho+p)=0$？
4. 为什么物质和辐射分别按 $a^{-3}$ 与 $a^{-4}$ 稀释？
5. 条件 $w<-1/3$ 为什么会导致加速膨胀？
6. 如何从光的传播得到 $1+z=a_0/a_{\mathrm e}$？
7. 为什么 $k=0$ 不表示四维时空平直？

[上一篇：Schwarzschild 解与黑洞](./07-schwarzschild-and-black-holes.md) · [返回合集](../carroll-general-relativity.md)
