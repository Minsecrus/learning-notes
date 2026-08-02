# 等效原理与爱因斯坦方程

本篇对应原讲义第四章。前面已经建立度规、测地线和曲率，现在要回答广义相对论的动力学问题：物质怎样决定曲率，曲率又怎样表现为引力。

## 完整译文分节

1. [等效原理与引力红移](./04-gravitation-and-einstein-equation/01-equivalence-principle-and-redshift.md)
2. [弯曲时空与 Newton 极限](./04-gravitation-and-einstein-equation/02-curved-spacetime-and-newtonian-limit.md)
3. [弯曲时空中的物理与 Einstein 方程](./04-gravitation-and-einstein-equation/03-physics-in-curved-spacetime-and-einstein-equations.md)
4. [Hilbert 作用量、能量动量张量与弱能量条件](./04-gravitation-and-einstein-equation/04-hilbert-action-stress-energy-and-wec.md)
5. [替代引力理论](./04-gravitation-and-einstein-equation/05-alternative-theories-of-gravity.md)
6. [初值问题与因果性](./04-gravitation-and-einstein-equation/06-initial-value-problem-and-causality.md)

下面其余内容是本站为本章编写的导读。

## 等效原理的三个层次

### 惯性质量与引力质量相等

Newton 力学中

$$
m_{\mathrm i}\boldsymbol a
=
-m_{\mathrm g}\boldsymbol\nabla\Phi.
$$

实验显示 $m_{\mathrm i}/m_{\mathrm g}$ 对不同物体相同，于是自由落体加速度与物体质量和组成无关。

### 均匀引力场与加速参考系局部等效

密闭电梯中的观察者仅靠局部实验无法区分：

- 电梯静止在均匀引力场中；
- 电梯在无引力区域做匀加速运动。

“局部”非常重要。足够大的电梯可以测出潮汐效应，从而发现不同位置的自由落体加速度略有不同。

### 局部惯性系

在每个时空点，都能选择自由落体坐标使

$$
g_{\mu\nu}(p)=\eta_{\mu\nu},
\qquad
\Gamma^\rho{}_{\mu\nu}(p)=0.
$$

在这个点，非引力物理定律取狭义相对论形式。曲率涉及联络的变化，无法通过一次坐标选择在整个邻域内消去。

## 引力红移

先用等效原理做思想实验。高度差为 $h$ 的加速火箭具有加速度 $g$。光从底部传播到顶部需要时间约 $h$，顶部接收器在这段时间内增加速度 $gh$，因 Doppler 效应测得频率降低：

$$
\frac{\Delta\omega}{\omega}\approx-gh.
$$

由等效原理，在弱静态引力场中

$$
\frac{\Delta\omega}{\omega}
\approx
\Phi_{\mathrm e}-\Phi_{\mathrm o},
$$

其中 $\Phi_{\mathrm e}$ 和 $\Phi_{\mathrm o}$ 分别是发射点和观测点的 Newton 引力势。光从低势处向高势处传播时红移。

### 静态度规中的精确表达

若时空具有类时 Killing 向量 $\xi^\mu=(\partial_t)^\mu$，光子沿测地线的

$$
E=-k_\mu\xi^\mu
$$

守恒。静止观察者的四速度为

$$
U^\mu
=
\frac{\xi^\mu}{\sqrt{-\xi^\nu\xi_\nu}}.
$$

其测得频率

$$
\omega=-k_\mu U^\mu
=
\frac{E}{\sqrt{-g_{00}}}.
$$

于是两个静止观察者测得的频率满足

$$
\frac{\omega_2}{\omega_1}
=
\sqrt{
\frac{-g_{00}(x_1)}{-g_{00}(x_2)}
}.
$$

这里的频率变化来自观察者四速度与光子四动量的内积，并非光子携带某个绝对频率在途中被消耗。

## 自由落体就是测地线运动

无外力测试粒子的作用量为

$$
S=-m\int\mathrm d\tau.
$$

变分得到

$$
U^\nu\nabla_\nu U^\mu=0.
$$

坐标形式是

$$
\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2}
+
\Gamma^\mu{}_{\nu\rho}
\frac{\mathrm dx^\nu}{\mathrm d\tau}
\frac{\mathrm dx^\rho}{\mathrm d\tau}=0.
$$

广义相对论把“引力”吸收到时空几何中。自由落体的四加速度为零，坐标位置仍可能加速，因为坐标基和坐标时间不必对应局部惯性观测。

## Newton 极限怎样限制度规

考虑静态弱场

$$
g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu},
\qquad
|h_{\mu\nu}|\ll1,
$$

以及缓慢运动粒子 $|\mathrm dx^i/\mathrm dt|\ll1$。空间测地线方程的主导项为

$$
\frac{\mathrm d^2x^i}{\mathrm dt^2}
\approx
-\Gamma^i{}_{00}.
$$

静态条件 $\partial_0g_{\mu\nu}=0$ 给出

$$
\Gamma^i{}_{00}
\approx
-\frac12\partial_i h_{00}.
$$

所以

$$
\frac{\mathrm d^2x^i}{\mathrm dt^2}
\approx
\frac12\partial_i h_{00}.
$$

与 Newton 方程

$$
\frac{\mathrm d^2x^i}{\mathrm dt^2}
=
-\partial_i\Phi
$$

比较，得到

$$
h_{00}=-2\Phi,
\qquad
g_{00}=-(1+2\Phi).
$$

Newton 引力势因此出现在度规的时间分量中。引力时间膨胀和自由落体来自同一个 $g_{00}$。

## 场方程需要满足什么

我们寻找一个对称二阶张量方程，把几何与物质联系起来：

$$
\text{几何张量}=\kappa T_{\mu\nu}.
$$

候选几何张量应满足：

1. 对称，因为 $T_{\mu\nu}$ 对称；
2. 局部，由度规及其有限阶导数组成；
3. 坐标协变；
4. 协变散度为零，以匹配 $\nabla_\mu T^{\mu\nu}=0$；
5. 在弱静态极限中退化为 Poisson 方程 $\nabla^2\Phi=4\pi G\rho$。

Ricci 张量本身一般不满足零散度。Bianchi 恒等式给出的组合

$$
G_{\mu\nu}
=
R_{\mu\nu}-\frac12 Rg_{\mu\nu}
$$

满足

$$
\nabla_\mu G^{\mu\nu}=0.
$$

## Einstein 方程

最简单的场方程为

$$
G_{\mu\nu}=8\pi G T_{\mu\nu}.
$$

加入宇宙学常数后是

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=
8\pi G T_{\mu\nu}.
$$

因为 $\nabla_\rho g_{\mu\nu}=0$，$\Lambda g_{\mu\nu}$ 也自动具有零协变散度。

### 迹反转形式

对四维 Einstein 方程取迹：

$$
g^{\mu\nu}G_{\mu\nu}
=
R-2R=-R=8\pi GT.
$$

所以

$$
R=-8\pi GT.
$$

代回得到

$$
R_{\mu\nu}
=
8\pi G
\left(
T_{\mu\nu}-\frac12g_{\mu\nu}T
\right).
$$

含宇宙学常数时则为

$$
R_{\mu\nu}
=
8\pi G
\left(
T_{\mu\nu}-\frac12g_{\mu\nu}T
\right)
+
\Lambda g_{\mu\nu}.
$$

## 从 Newton 极限确定系数

非相对论物质满足

$$
T_{00}\approx\rho,
\qquad
T_{0i}\approx0,
\qquad
T_{ij}\ll T_{00},
$$

因此

$$
T=g^{\mu\nu}T_{\mu\nu}\approx-\rho.
$$

迹反转方程的 $00$ 分量为

$$
R_{00}
\approx
8\pi G
\left(
\rho-\frac12(-1)(-\rho)
\right)
=
4\pi G\rho.
$$

另一方面，弱静态度规给出

$$
R_{00}\approx\nabla^2\Phi.
$$

于是恢复 Poisson 方程

$$
\nabla^2\Phi=4\pi G\rho.
$$

这一步固定了 Einstein 方程中的 $8\pi G$。

## 物质怎样进入弯曲时空

等效原理给出最小耦合规则：

```text
Minkowski 度规 eta  →  一般度规 g
偏导数 partial      →  协变导数 nabla
平直体积元 d^4x     →  sqrt(-g) d^4x
```

例如平直时空中的标量场作用量

$$
S_\phi
=
\int\mathrm d^4x
\left[
-\frac12\eta^{\mu\nu}
\partial_\mu\phi\partial_\nu\phi
-V(\phi)
\right]
$$

推广为

$$
S_\phi
=
\int\mathrm d^4x\sqrt{-g}
\left[
-\frac12g^{\mu\nu}
\nabla_\mu\phi\nabla_\nu\phi
-V(\phi)
\right].
$$

标量满足 $\nabla_\mu\phi=\partial_\mu\phi$，但二阶导数和体积元仍包含几何信息。

## Hilbert 作用量

引力作用量取最简单的曲率标量：

$$
S_{\mathrm g}
=
\frac{1}{16\pi G}
\int\mathrm d^4x\sqrt{-g}(R-2\Lambda).
$$

总作用量为

$$
S=S_{\mathrm g}+S_{\mathrm m}.
$$

对逆度规 $g^{\mu\nu}$ 变分。首先有

$$
\delta\sqrt{-g}
=
-\frac12\sqrt{-g}
g_{\mu\nu}\delta g^{\mu\nu}.
$$

Ricci 标量变分为

$$
\delta R
=
R_{\mu\nu}\delta g^{\mu\nu}
+
g^{\mu\nu}\delta R_{\mu\nu}.
$$

Palatini 恒等式把最后一项写成全散度：

$$
g^{\mu\nu}\delta R_{\mu\nu}
=
\nabla_\rho
\left(
g^{\mu\nu}\delta\Gamma^\rho{}_{\mu\nu}
-
g^{\mu\rho}\delta\Gamma^\nu{}_{\mu\nu}
\right).
$$

在适当边界条件或补充边界项后，它不贡献体内运动方程。于是

$$
\delta S_{\mathrm g}
=
\frac{1}{16\pi G}
\int\mathrm d^4x\sqrt{-g}
(G_{\mu\nu}+\Lambda g_{\mu\nu})
\delta g^{\mu\nu}.
$$

定义物质能量动量张量

$$
T_{\mu\nu}
=
-\frac{2}{\sqrt{-g}}
\frac{\delta S_{\mathrm m}}{\delta g^{\mu\nu}},
$$

所以

$$
\delta S_{\mathrm m}
=
-\frac12
\int\mathrm d^4x\sqrt{-g}
T_{\mu\nu}\delta g^{\mu\nu}.
$$

令任意 $\delta g^{\mu\nu}$ 下总变分为零，得到

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=
8\pi G T_{\mu\nu}.
$$

场方程因此也可以看成时空几何的 Euler–Lagrange 方程。

## 局部能量动量守恒

Bianchi 恒等式和场方程共同给出

$$
\nabla_\mu T^{\mu\nu}=0.
$$

这是一条局部方程。一般弯曲时空未必拥有全局类时平移对称，因此未必能定义一个对整个宇宙都守恒的总能量。

对尘埃

$$
T^{\mu\nu}=\rho U^\mu U^\nu,
$$

展开守恒式：

$$
\nabla_\mu(\rho U^\mu U^\nu)=0.
$$

把它沿 $U_\nu$ 投影得到粒子数连续性方程；投影到与 $U$ 正交方向得到

$$
U^\mu\nabla_\mu U^\nu=0.
$$

所以尘埃的局部守恒包含自由落体测地线运动。

## 完美流体与压力的引力效应

弯曲时空中的完美流体为

$$
T_{\mu\nu}
=
(\rho+p)U_\mu U_\nu
+
pg_{\mu\nu}.
$$

迹为

$$
T=-\rho+3p.
$$

迹反转源项中，压力和能量密度共同出现。宇宙学加速度方程含有 $\rho+3p$，显示压力也产生引力效应。

## 能量条件

能量条件是对合理物质的附加假设，不是 Einstein 方程自动推出的定理。

### 弱能量条件

任意类时观察者 $U^\mu$ 测得的能量密度非负：

$$
T_{\mu\nu}U^\mu U^\nu\ge0.
$$

完美流体中等价于

$$
\rho\ge0,
\qquad
\rho+p\ge0.
$$

### 零能量条件

任意类光向量 $k^\mu$ 满足

$$
T_{\mu\nu}k^\mu k^\nu\ge0.
$$

它在聚焦定理和奇点定理中发挥作用。量子场可以在局部违反某些经典能量条件，因此使用结论时要明确假设范围。

## 真空并不等于没有引力

真空区域满足

$$
T_{\mu\nu}=0.
$$

若 $\Lambda=0$，场方程给出

$$
R_{\mu\nu}=0.
$$

但 Weyl 张量仍可非零，所以真空可以存在潮汐场和引力波。Schwarzschild 外部区域和真空引力波都说明“没有局部物质”不等于“时空平直”。

## 初值、约束与坐标自由

Einstein 方程看似有十个独立分量，但坐标选择带来四个自由函数，Bianchi 恒等式也使方程之间存在依赖。

在一个空间超曲面上给定：

- 三维空间度规；
- 它如何嵌入四维时空的外曲率；
- 物质场及其初值；

这些数据必须先满足四个约束方程。其余演化方程再把数据推进到未来。选择 harmonic gauge 等坐标条件，可以把主部写成双曲型方程，明确因果传播和定义域依赖。

## 常见误区

### 把等效原理理解为所有引力都能全局消掉

局部惯性坐标只在一点消去联络。曲率和潮汐效应仍然存在。

### 认为 Einstein 方程说明“物质在某个外部空间中压弯时空”

曲率由度规内在定义，不需要外部嵌入空间。图中橡皮膜只是有限类比。

### 认为 $\nabla_\mu T^{\mu\nu}=0$ 总能积分成全局守恒能量

全局守恒量通常还需要相应的时空对称性和合适边界条件。

### 忽略近似条件

$g_{00}=-(1+2\Phi)$ 使用弱场、静态和低速条件。离开这些条件后，不能只靠一个 Newton 势描述引力。

## 本篇自检

1. 等效原理为何只能局部消去引力的一阶效应？
2. 怎样从慢速测地线得到 $g_{00}=-(1+2\Phi)$？
3. 为什么场方程使用 Einstein 张量而非单独的 Ricci 张量？
4. Newton 极限怎样确定系数 $8\pi G$？
5. Hilbert 作用量变分中哪个部分成为边界项？
6. 真空 $R_{\mu\nu}=0$ 为什么仍可有潮汐力？

[上一篇：联络、测地线与曲率](./03-connection-and-curvature.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：微分同胚、李导数与 Killing 对称](./05-diffeomorphisms-and-symmetry.md)
