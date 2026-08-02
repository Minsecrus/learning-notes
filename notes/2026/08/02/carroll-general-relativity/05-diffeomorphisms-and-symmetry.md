# 微分同胚、李导数与 Killing 对称

本篇对应原讲义第五章。前几篇使用坐标表示几何对象，本篇研究主动地移动流形上的点与张量场。李导数描述张量沿流的变化，Killing 向量则把连续时空对称性转成守恒量。

## 完整译文分节

1. [拉回、推前与微分同胚](./05-diffeomorphisms-and-symmetry/01-pullbacks-pushforwards-and-diffeomorphisms.md)
2. [积分曲线与 Lie 导数](./05-diffeomorphisms-and-symmetry/02-integral-curves-and-lie-derivatives.md)
3. [微分同胚不变性与能量动量守恒](./05-diffeomorphisms-and-symmetry/03-diffeomorphism-invariance-and-stress-energy.md)
4. [等距映射与 Killing 向量](./05-diffeomorphisms-and-symmetry/04-isometries-and-killing-vectors.md)

下面其余内容是本站为本章编写的导读。

## 映射怎样作用于切向量

设光滑映射

$$
\phi:M\to N.
$$

对 $p\in M$，它诱导推前（pushforward）

$$
\phi_*:T_pM\to T_{\phi(p)}N.
$$

若 $V\in T_pM$，对 $N$ 上函数 $f$ 定义

$$
(\phi_*V)(f)
=
V(f\circ\phi).
$$

坐标分量为

$$
(\phi_*V)^a
=
\frac{\partial y^a}{\partial x^\mu}V^\mu.
$$

这就是向量的 Jacobian 变换。

## 拉回怎样作用于协向量

映射 $\phi$ 诱导拉回（pullback）

$$
\phi^*:T^*_{\phi(p)}N\to T_p^*M.
$$

对协向量 $\omega$ 定义

$$
(\phi^*\omega)(V)
=
\omega(\phi_*V).
$$

坐标形式为

$$
(\phi^*\omega)_\mu
=
\frac{\partial y^a}{\partial x^\mu}\omega_a.
$$

拉回还可以自然作用于任意协变张量和微分形式，并满足

$$
\phi^*(\alpha\wedge\beta)
=
\phi^*\alpha\wedge\phi^*\beta,
$$

$$
\phi^*(\mathrm d\alpha)
=
\mathrm d(\phi^*\alpha).
$$

向量只能在映射足够可逆或另有结构时自然拉回；协向量则天然沿映射反方向拉回。

## 微分同胚

若 $\phi:M\to M$ 光滑、双射且逆映射也光滑，$\phi$ 是微分同胚（diffeomorphism）。它保持流形的光滑结构。

要区分两种视角：

- **被动坐标变换**：点和几何场不动，只更换描述它们的坐标标签；
- **主动微分同胚**：坐标图保持不动，把点与场沿映射搬到新位置。

两种视角常可用同样的分量公式描述，但概念作用不同。广义协变表示物理定律对任意坐标表达都成立；微分同胚不变性还说明由同一个场配置整体搬动得到的配置代表相同规范物理。

## 向量场产生流

向量场 $X$ 的积分曲线满足

$$
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
=
X^\mu(x(\lambda)).
$$

在适当区域中，这些积分曲线定义一参数微分同胚族

$$
\phi_\lambda:M\to M,
$$

满足

$$
\phi_0=\operatorname{id},
\qquad
\phi_{\lambda+\sigma}
=
\phi_\lambda\circ\phi_\sigma.
$$

$X$ 是这个流的无穷小生成元。

## 李括号

两个向量场 $X$、$Y$ 的李括号定义为

$$
[X,Y](f)
=
X(Y(f))-Y(X(f)).
$$

坐标分量为

$$
[X,Y]^\mu
=
X^\nu\partial_\nu Y^\mu
-
Y^\nu\partial_\nu X^\mu.
$$

若 $[X,Y]=0$，沿 $X$ 流动再沿 $Y$ 流动，与反过来的结果在无穷小阶相同。坐标基满足

$$
[\partial_\mu,\partial_\nu]=0,
$$

一般非坐标基则可能不对易。

## 李导数

协变导数比较邻近点的张量时需要联络。李导数使用向量场自身产生的流把对象拉回同一点比较，因此不需要预先选择联络。

沿 $X$ 的张量 $T$ 的李导数定义为

$$
\mathcal L_XT
=
\left.
\frac{\mathrm d}{\mathrm d\lambda}
(\phi_\lambda^*T)
\right|_{\lambda=0}.
$$

对标量：

$$
\mathcal L_Xf=X^\mu\partial_\mu f.
$$

对向量：

$$
\mathcal L_XY=[X,Y].
$$

对协向量：

$$
(\mathcal L_X\omega)_\mu
=
X^\nu\partial_\nu\omega_\mu
+
\omega_\nu\partial_\mu X^\nu.
$$

对一般 $(k,l)$ 张量，每个上指标产生一个 $-\partial X$ 项，每个下指标产生一个 $+\partial X$ 项。

## 李导数与协变导数的关系

使用无挠联络，对向量有

$$
(\mathcal L_XY)^\mu
=
X^\nu\nabla_\nu Y^\mu
-
Y^\nu\nabla_\nu X^\mu.
$$

对度规：

$$
(\mathcal L_Xg)_{\mu\nu}
=
X^\rho\nabla_\rho g_{\mu\nu}
+
g_{\rho\nu}\nabla_\mu X^\rho
+
g_{\mu\rho}\nabla_\nu X^\rho.
$$

由度规相容 $\nabla g=0$，得到

$$
(\mathcal L_Xg)_{\mu\nu}
=
\nabla_\mu X_\nu
+
\nabla_\nu X_\mu.
$$

## Killing 向量

若向量场 $K$ 产生的流保持度规，

$$
\mathcal L_Kg_{\mu\nu}=0,
$$

$K$ 称为 Killing 向量。等价的 Killing 方程是

$$
\nabla_\mu K_\nu
+
\nabla_\nu K_\mu=0,
$$

也常写成

$$
\nabla_{(\mu}K_{\nu)}=0.
$$

Killing 向量表示连续等距对称：沿其流移动后，任意向量之间的内积和线元不变。

### 怎样从度规看出 Killing 向量

若度规分量与某坐标 $x^a$ 无关，

$$
\partial_a g_{\mu\nu}=0,
$$

则坐标基向量

$$
K=\partial_a
$$

是 Killing 向量。这样的 $x^a$ 称为循环坐标。

这是一种充分方便的识别方法。某些 Killing 向量在给定坐标中并不直接表现为单个坐标基。

## 测地线守恒量

设测地线切向量为 $U^\mu$，Killing 向量为 $K^\mu$。沿测地线计算

$$
\frac{\mathrm d}{\mathrm d\lambda}(K_\mu U^\mu)
=
U^\nu\nabla_\nu(K_\mu U^\mu).
$$

展开：

$$
U^\nu U^\mu\nabla_\nu K_\mu
+
K_\mu U^\nu\nabla_\nu U^\mu.
$$

第二项因测地线方程为零。第一项中 $U^\nu U^\mu$ 对称，而 $\nabla_\nu K_\mu$ 由 Killing 方程知是反对称的，所以也为零。因此

$$
K_\mu U^\mu=\text{常数}.
$$

时空对称性直接产生粒子运动守恒量。

## 平直时空中的例子

Minkowski 度规与 $t,x,y,z$ 都无关，所以存在四个平移 Killing 向量

$$
\partial_t,
\quad
\partial_x,
\quad
\partial_y,
\quad
\partial_z.
$$

它们对应能量和三个动量守恒。

空间旋转也保持度规。例如绕 $z$ 轴旋转的生成元为

$$
K=-y\partial_x+x\partial_y.
$$

相应守恒量是 $z$ 方向角动量。

Minkowski 时空共有十个独立 Killing 向量：四个平移、三个空间旋转和三个 boost，对应 Poincaré 群的十个生成元。

## 静态、平稳与轴对称

- **平稳时空**（stationary）拥有渐近类时 Killing 向量，度规可选为与时间无关；
- **静态时空**（static）还要求这个类时 Killing 向量正交于一族空间超曲面，可消去时间与空间的交叉项；
- **轴对称时空**拥有闭合轨道的空间 Killing 向量，常写成 $\partial_\phi$。

Schwarzschild 时空既静态又球对称；Kerr 时空平稳且轴对称，但因旋转导致 $g_{t\phi}\ne0$，一般不静态。

## 场的 Noether 流

若物质作用量在由 $K^\mu$ 产生的时空对称下不变，可以构造流

$$
J^\mu=T^{\mu\nu}K_\nu.
$$

其协变散度为

$$
\begin{aligned}
\nabla_\mu J^\mu
&=(\nabla_\mu T^{\mu\nu})K_\nu
+T^{\mu\nu}\nabla_\mu K_\nu\\
&=0.
\end{aligned}
$$

第一项由能量动量守恒消失；第二项由 $T^{\mu\nu}$ 对称和 $\nabla_\mu K_\nu$ 反对称消失。

因此，只有在时空拥有相应对称性时，局部守恒方程才自然产生对应的全局守恒荷。

## 能量动量张量来自平移响应

在平直场论中，连续平移对称通过 Noether 定理产生 canonical energy-momentum tensor。将理论耦合到一般度规后，Hilbert 定义

$$
T_{\mu\nu}
=
-\frac{2}{\sqrt{-g}}
\frac{\delta S_{\mathrm m}}{\delta g^{\mu\nu}}
$$

给出对称张量。它衡量物质作用量对局部几何变形的响应。

微分同胚不变性进一步导出

$$
\nabla_\mu T^{\mu\nu}=0
$$

在物质运动方程成立时为真。这与 Einstein 方程左边的 Bianchi 恒等式相匹配。

## Killing 张量

Killing 向量产生与速度线性的守恒量。更一般的对称张量 $K_{\mu_1\cdots\mu_n}$ 若满足

$$
\nabla_{(\rho}K_{\mu_1\cdots\mu_n)}=0,
$$

则沿测地线

$$
K_{\mu_1\cdots\mu_n}
U^{\mu_1}\cdots U^{\mu_n}
$$

守恒。

Kerr 时空中的 Carter 常数来自一个二阶 Killing 张量，它揭示了不容易直接看出的隐藏对称性。

## 对称性怎样降低计算难度

在解 Einstein 方程前，先确定对称群通常比直接计算所有分量更重要。

```text
球对称
  → 度规只依赖 t 和 r
  → 角向部分固定为二球面
  → 真空方程导出 Schwarzschild 解

均匀且各向同性
  → 空间切片只有常曲率三种可能
  → 度规只剩尺度因子 a(t)
  → Einstein 方程化为 Friedmann 常微分方程
```

对称性同时提供守恒量，使测地线方程从二阶微分方程降为一阶有效势问题。

## 常见误区

### 把坐标无关与主动微分同胚混成同一件事

坐标无关说明同一几何对象可用不同标签描述；主动微分同胚把场配置搬到流形的不同点。广义相对论把后一类相关配置视为规范等价。

### 认为李导数需要度规

李导数由流和拉回定义，不需要度规或联络。Killing 方程出现度规，是因为它专门询问流是否保持度规。

### 认为度规与某坐标无关就是所有对称性

这只直接找到与该坐标基一致的 Killing 向量。其他对称性可能是多个坐标方向的组合。

### 在没有类时 Killing 向量的时空中强求守恒总能量

局部 $\nabla_\mu T^{\mu\nu}=0$ 仍成立，但没有时间平移对称时，通常缺少唯一的全局守恒能量。

## 本篇自检

1. 为什么向量自然推前而协向量自然拉回？
2. 李导数如何在不选联络的情况下比较张量？
3. Killing 方程怎样表示度规沿流不变？
4. 怎样证明 $K_\mu U^\mu$ 沿测地线守恒？
5. 平稳和静态时空的区别是什么？
6. 对称性怎样把 Einstein 偏微分方程化简成常微分方程？

[上一篇：等效原理与爱因斯坦方程](./04-gravitation-and-einstein-equation.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：线性引力与引力波](./06-weak-fields-and-gravitational-waves.md)
