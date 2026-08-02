# 流形、坐标与张量场

本篇对应原讲义第二章。平直时空可以用一套全局 Cartesian 坐标描述，弯曲时空一般做不到。流形语言允许我们在每个小区域使用坐标，同时保证不同区域的描述能够拼成同一个几何对象。

## 完整译文分节

1. [集合、映射、坐标图与流形](./02-manifolds-and-tensors/01-sets-maps-charts-and-manifolds.md)
2. [微分、向量与张量分量](./02-manifolds-and-tensors/02-differentiation-vectors-and-tensor-components.md)
3. [度规、正规坐标与偏导数](./02-manifolds-and-tensors/03-metric-normal-coordinates-and-partial-derivatives.md)
4. [张量密度、体积形式与积分](./02-manifolds-and-tensors/04-tensor-densities-volume-forms-and-integration.md)

下面其余内容是本站为本章编写的导读。

## 为什么需要流形

地球表面是最直观的例子：

- 在足够小的区域，可以用两个实数作为坐标；
- 不存在一张既无撕裂又无重叠的平面地图覆盖整个球面；
- 不同地图在重叠区域必须能够相互换算。

四维时空也采用同样思路。局部坐标使微积分可用，全局几何由所有兼容的局部描述共同决定。

## 拓扑流形

一个 $n$ 维拓扑流形 $M$ 需要满足：

1. 每一点附近都与 $\mathbb R^n$ 的一个开集同胚；
2. 任意两个不同点存在互不相交的邻域，即 Hausdorff 条件；
3. 拓扑具有可数基，使流形不会大到无法用可数信息控制。

第一条给出“局部像 $\mathbb R^n$”，后两条排除许多病态空间。物理计算主要依赖第一条，后两条保证极限、曲线和分割统一等工具表现正常。

## 坐标图与图册

坐标图（chart）是一对 $(U,\varphi)$：

$$
\varphi:U\subset M\longrightarrow \varphi(U)\subset\mathbb R^n.
$$

若

$$
\varphi(p)=(x^1(p),\ldots,x^n(p)),
$$

那么 $x^\mu$ 是点 $p$ 在这张图中的坐标。

两张图 $(U,\varphi)$ 与 $(V,\psi)$ 在重叠区域 $U\cap V$ 上给出转移映射

$$
\psi\circ\varphi^{-1}:
\varphi(U\cap V)\longrightarrow\psi(U\cap V).
$$

若所有转移映射都是光滑的，这些图构成光滑图册（smooth atlas），$M$ 就是光滑流形。

坐标属于图，点属于流形。一个点可以在不同图中获得不同坐标，正如同一地点可以有经纬度坐标和某张城市地图的平面坐标。

## 球面为何需要多张图

单位二球面

$$
S^2=\{(X,Y,Z)\in\mathbb R^3\mid X^2+Y^2+Z^2=1\}
$$

可以用球坐标

$$
X=\sin\theta\cos\phi,
\quad
Y=\sin\theta\sin\phi,
\quad
Z=\cos\theta
$$

描述大部分区域，但 $\theta=0,\pi$ 时所有 $\phi$ 指向同一点。这里的坐标失败并不表示球面有几何奇点。

也可以从北极或南极作立体投影，每张图覆盖除投影点以外的整个球面，两张图合起来覆盖 $S^2$。这说明“坐标出现问题”和“空间出现问题”必须分开判断。

## 光滑函数与曲线

函数 $f:M\to\mathbb R$ 在坐标图中表示为

$$
f\circ\varphi^{-1}:\mathbb R^n\to\mathbb R.
$$

若这个普通多元函数光滑，就称 $f$ 在该区域光滑。

一条参数曲线是映射

$$
\gamma:I\subset\mathbb R\to M.
$$

在坐标中写成 $x^\mu(\lambda)$。曲线本身与参数选择无关；重新参数化只改变沿曲线前进的速度。

## 切向量是方向导数

在点 $p$ 的切向量 $V$ 可以定义为作用在光滑函数上的导子（derivation）：

$$
V:C^\infty(M)\to\mathbb R,
$$

满足线性与 Leibniz 法则

$$
V(fg)=f(p)V(g)+g(p)V(f).
$$

坐标图产生一组切空间基

$$
\partial_\mu\big|_p
=
\left.\frac{\partial}{\partial x^\mu}\right|_p.
$$

任意切向量可写成

$$
V=V^\mu\partial_\mu.
$$

因此点 $p$ 的所有切向量组成 $n$ 维向量空间 $T_pM$。

### 曲线的切向量

若 $\gamma(0)=p$，曲线在 $p$ 的切向量作用于函数 $f$ 为

$$
V(f)
=
\left.\frac{\mathrm d}{\mathrm d\lambda}
f(\gamma(\lambda))\right|_{\lambda=0}.
$$

在坐标中

$$
V^\mu
=
\left.\frac{\mathrm dx^\mu}{\mathrm d\lambda}\right|_{0}.
$$

具有相同一阶方向导数的曲线定义同一个切向量。

## 坐标变换时基与分量怎样配合

从 $x^\mu$ 换到 $x'^\mu$，链式法则给出

$$
\partial'_\mu
=
\frac{\partial x^\nu}{\partial x'^\mu}\partial_\nu.
$$

为了保持

$$
V=V^\mu\partial_\mu=V'^\mu\partial'_\mu,
$$

分量必须按相反方向变换：

$$
V'^\mu
=
\frac{\partial x'^\mu}{\partial x^\nu}V^\nu.
$$

基变化与分量变化互相抵消，使几何向量 $V$ 不依赖坐标。

## 余切空间

切空间的对偶空间记为 $T_p^*M$。其元素是协向量或一形式。坐标函数的微分形成对偶基

$$
\mathrm dx^\mu(\partial_\nu)=\delta^\mu{}_\nu.
$$

任意协向量写成

$$
\omega=\omega_\mu\,\mathrm dx^\mu.
$$

坐标变换时

$$
\omega'_\mu
=
\frac{\partial x^\nu}{\partial x'^\mu}\omega_\nu.
$$

函数的微分

$$
\mathrm df=\partial_\mu f\,\mathrm dx^\mu
$$

天然是一形式，因为链式法则恰好给出协向量变换律。

## 张量场

点 $p$ 处的 $(k,l)$ 型张量属于

$$
T_pM^{\otimes k}\otimes T_p^*M^{\otimes l}.
$$

在坐标基下写为

$$
T
=
T^{\mu_1\cdots\mu_k}{}_{\nu_1\cdots\nu_l}
\partial_{\mu_1}\otimes\cdots\otimes\partial_{\mu_k}
\otimes
\mathrm dx^{\nu_1}\otimes\cdots\otimes\mathrm dx^{\nu_l}.
$$

若每一点都光滑地指定一个张量，就得到张量场。

### 判断张量的可靠方法

可以使用三种方法：

1. 从坐标无关定义出发；
2. 检查坐标变换律；
3. 由已知张量通过张量积、缩并、对称化或反对称化构造。

仅凭“带很多指标”无法判断一个量是否为张量。Christoffel 符号就是重要反例。

## 为什么向量的偏导数不是张量

向量变换为

$$
V'^\nu
=
\frac{\partial x'^\nu}{\partial x^\rho}V^\rho.
$$

对新坐标求偏导：

$$
\partial'_\mu V'^\nu
=
\frac{\partial x^\sigma}{\partial x'^\mu}
\frac{\partial x'^\nu}{\partial x^\rho}
\partial_\sigma V^\rho
+
\frac{\partial x^\sigma}{\partial x'^\mu}
\frac{\partial^2x'^\nu}{\partial x^\sigma\partial x^\rho}
V^\rho.
$$

第一项具有 $(1,1)$ 张量的变换形式，第二项包含坐标变换的二阶导数。一般坐标变换下它不会消失，所以 $\partial_\mu V^\nu$ 不是张量。

后续引入的联络项会恰好抵消这项额外贡献：

$$
\nabla_\mu V^\nu
=
\partial_\mu V^\nu
+
\Gamma^\nu{}_{\mu\rho}V^\rho.
$$

## 度规场

度规是对称、非退化的 $(0,2)$ 张量场：

$$
g_p:T_pM\times T_pM\to\mathbb R.
$$

它给出

$$
\langle V,W\rangle=g_{\mu\nu}V^\mu W^\nu.
$$

非退化表示存在逆度规 $g^{\mu\nu}$，满足

$$
g^{\mu\rho}g_{\rho\nu}=\delta^\mu{}_\nu.
$$

Riemann 度规全为正号；Lorentz 度规含一个负号和三个正号。Sylvester 惯性定律保证在同一点做可逆基变换时，正负号的数目不会改变。

## 每一点都能选择局部惯性坐标

在任意一点 $p$，总能选择 Riemann 正规坐标，使

$$
g_{\mu\nu}(p)=\eta_{\mu\nu},
\qquad
\partial_\rho g_{\mu\nu}(p)=0.
$$

这表示在一个点上可以消去度规的一阶变化。一般无法同时消去二阶导数，曲率正是由这些无法消掉的二阶信息构成。

因此：

- 局部惯性系可以消去“均匀引力”式的一阶效应；
- 潮汐效应涉及邻近自由落体世界线的相对加速度，无法在整个邻域中消去。

## 度规行列式与体积元

记

$$
g=\det(g_{\mu\nu}).
$$

在 Lorentz 号差下 $g<0$。坐标不变的四维体积元为

$$
\mathrm dV
=
\sqrt{|g|}\,
\mathrm dx^0\mathrm dx^1\mathrm dx^2\mathrm dx^3.
$$

原因是坐标变换下 $\mathrm d^nx$ 带一个 Jacobian，而 $\sqrt{|g|}$ 带逆 Jacobian，两者相消。

积分标量场时写成

$$
\int_M f\sqrt{|g|}\,\mathrm d^nx.
$$

只有 $\mathrm d^nx$ 而没有 $\sqrt{|g|}$ 的表达式通常依赖坐标。

## 二球面的具体计算

半径为 $a$ 的二球面度规为

$$
\mathrm ds^2
=
a^2\mathrm d\theta^2
+
a^2\sin^2\theta\,\mathrm d\phi^2.
$$

矩阵与逆矩阵是

$$
g_{ij}
=
\begin{pmatrix}
a^2&0\\
0&a^2\sin^2\theta
\end{pmatrix},
\qquad
g^{ij}
=
\begin{pmatrix}
a^{-2}&0\\
0&(a^2\sin^2\theta)^{-1}
\end{pmatrix}.
$$

行列式与面积元为

$$
g=a^4\sin^2\theta,
\qquad
\mathrm dA=a^2\sin\theta\,\mathrm d\theta\mathrm d\phi.
$$

积分得到总面积

$$
A
=
\int_0^{2\pi}\int_0^\pi
a^2\sin\theta\,\mathrm d\theta\mathrm d\phi
=
4\pi a^2.
$$

$\sin\theta$ 不是额外的物理密度，它来自球坐标网格面积随纬度变化。

## 张量密度

有些量在坐标变换下除了张量变换外，还会乘 Jacobian 行列式的某个幂，这类对象称为张量密度。$\sqrt{|g|}$ 是权重为 $+1$ 的标量密度。

Levi-Civita 符号 $[\mu\nu\rho\sigma]$ 只是一组固定数字；与 $\sqrt{|g|}$ 组合后才得到真正的 Levi-Civita 张量：

$$
\varepsilon_{\mu\nu\rho\sigma}
=
\sqrt{|g|}\,[\mu\nu\rho\sigma].
$$

区分符号、密度和张量，可以避免在一般坐标中误用平直时空公式。

## 常见误区

### 把流形想成必须嵌入更高维空间的曲面

流形可以内在定义。四维时空不需要先放进某个五维 Euclid 空间，才拥有曲率和度规。

### 认为坐标奇点就是物理奇点

球坐标在极点失效，球面依然光滑。需要换图或计算坐标不变量来判断。

### 在不同点直接相减向量

$V_p\in T_pM$ 与 $W_q\in T_qM$ 位于不同向量空间。没有额外规则时，$V_p-W_q$ 没有定义。下一篇的联络会提供比较方法。

### 忘记体积元

一般坐标下积分必须包含 $\sqrt{|g|}$，否则积分值会随坐标标签改变。

## 本篇自检

1. 坐标图、坐标与流形上的点分别是什么？
2. 为什么球坐标的极点问题不代表球面有奇点？
3. 怎样把曲线在一点的等价类理解成切向量？
4. 向量偏导数的变换律多出了哪一项？
5. Riemann 正规坐标能在一点消去哪几类量，又不能消去哪类量？
6. 为什么积分体积元包含 $\sqrt{|g|}$？

[上一篇：狭义相对论与平直时空](./01-special-relativity-and-flat-spacetime.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：联络、测地线与曲率](./03-connection-and-curvature.md)
