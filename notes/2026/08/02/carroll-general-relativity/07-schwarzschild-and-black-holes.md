# Schwarzschild 解与黑洞

本篇对应原讲义第七章。我们从球对称真空出发推导 Schwarzschild 度规，再研究测地线、事件视界、最大延拓、因果结构、旋转黑洞与黑洞热力学。

## 完整译文分节

1. [Schwarzschild 解与 Birkhoff 定理](./07-schwarzschild-and-black-holes/01-schwarzschild-solution-and-birkhoff-theorem.md)
2. [测地线、轨道与近日点进动](./07-schwarzschild-and-black-holes/02-geodesics-orbits-and-perihelion-precession.md)
3. [事件视界、Kruskal 坐标与坍缩](./07-schwarzschild-and-black-holes/03-event-horizon-kruskal-and-collapse.md)
4. [Penrose 图、共形无穷远与无毛性质](./07-schwarzschild-and-black-holes/04-penrose-diagrams-conformal-infinity-and-no-hair.md)
5. [带电黑洞、宇宙监督与极端解](./07-schwarzschild-and-black-holes/05-charged-black-holes-censorship-and-extremality.md)
6. [Kerr 几何、Killing 张量与能层](./07-schwarzschild-and-black-holes/06-kerr-geometry-killing-tensors-and-ergosphere.md)
7. [Penrose 过程、不可约质量与黑洞热力学](./07-schwarzschild-and-black-holes/07-penrose-process-irreducible-mass-and-thermodynamics.md)

下面其余内容是本站为本章编写的导读。

## 球对称意味着什么

球对称表示时空拥有与普通二球面旋转相同的 $SO(3)$ 等距群。群轨道是二球面，因此可以选择面积半径 $r$，使每个对称球面的面积为

$$
A=4\pi r^2.
$$

$r$ 的定义来自球面面积；它不必等于某个空间切片上从中心量出的固有径向距离。

最一般的球对称度规可在适当坐标下写成

$$
\mathrm ds^2
=
-e^{2\alpha(t,r)}\mathrm dt^2
+
e^{2\beta(t,r)}\mathrm dr^2
+
r^2\mathrm d\Omega^2,
$$

其中

$$
\mathrm d\Omega^2
=
\mathrm d\theta^2
+
\sin^2\theta\,\mathrm d\phi^2.
$$

坐标自由已经被用来消去 $\mathrm dt\,\mathrm dr$ 交叉项并固定面积半径。

## 真空方程怎样给出 Schwarzschild 度规

球对称真空区域满足

$$
R_{\mu\nu}=0.
$$

由 $R_{tr}=0$ 可得 $\partial_t\beta=0$。另一个方程说明 $\alpha$ 的时间依赖只是一项可以通过重新定义 $t$ 消去的函数，因此真空解实际上是静态的。

令 $\alpha=\alpha(r)$、$\beta=\beta(r)$。$R_{tt}=0$ 与 $R_{rr}=0$ 的适当组合给出

$$
\alpha'(r)+\beta'(r)=0.
$$

所以

$$
\alpha=-\beta+	ext{常数}.
$$

通过缩放时间坐标消去常数。角向方程随后可以写成

$$
\frac{\mathrm d}{\mathrm dr}
\left[r(1-e^{-2\beta})\right]=0.
$$

积分得到

$$
e^{-2\beta}=1-\frac{C}{r}.
$$

在大 $r$ 极限比较

$$
g_{00}\approx-(1+2\Phi),
\qquad
\Phi=-\frac{GM}{r},
$$

确定

$$
C=2GM.
$$

最终得到 Schwarzschild 度规

$$
\boxed{
\mathrm ds^2
=
-\left(1-\frac{2GM}{r}\right)\mathrm dt^2
+
\left(1-\frac{2GM}{r}\right)^{-1}\mathrm dr^2
+
r^2\mathrm d\Omega^2
}.
$$

## Birkhoff 定理

Birkhoff 定理说明：任何球对称真空解都局部等距于 Schwarzschild 解。

它带来两个重要结论：

1. 球对称真空场必然静态，即使包围它的球对称物质正在径向振动；
2. 球对称运动没有引力波，因为不存在随时间变化的真空外部几何自由度。

定理只约束球对称真空区域。非球对称源当然可以产生引力辐射。

## 两个特殊半径

定义

$$
r_s=2GM.
$$

在 Schwarzschild 坐标中：

- $r=r_s$ 时 $g_{tt}=0$、$g_{rr}$ 发散；
- $r=0$ 时几何真正奇异。

判断方法是计算曲率不变量。Kretschmann 标量为

$$
R_{\mu\nu\rho\sigma}
R^{\mu\nu\rho\sigma}
=
\frac{48G^2M^2}{r^6}.
$$

它在 $r=2GM$ 有限，在 $r=0$ 发散。因此 $r=2GM$ 的发散来自坐标，$r=0$ 才是曲率奇点。

## 对称性给出测地线守恒量

Schwarzschild 时空静态且球对称。时间平移 Killing 向量 $\partial_t$ 给出

$$
E
=
\left(1-\frac{2GM}{r}\right)\dot t.
$$

旋转对称允许把任意测地线放到赤道面 $\theta=\pi/2$，轴向 Killing 向量 $\partial_\phi$ 给出

$$
L=r^2\dot\phi.
$$

点表示对仿射参数求导；类时测地线可用固有时。

归一化条件统一写成

$$
g_{\mu\nu}\dot x^\mu\dot x^\nu=-\varepsilon,
$$

其中

$$
\varepsilon=
\begin{cases}
1,&\text{有质量粒子},\\
0,&\text{光子}.
\end{cases}
$$

代入 $E$ 和 $L$ 后得到径向方程

$$
\frac12\dot r^2+V_{\mathrm{eff}}(r)
=
\frac12E^2,
$$

$$
V_{\mathrm{eff}}(r)
=
\frac12
\left(1-\frac{2GM}{r}\right)
\left(\varepsilon+\frac{L^2}{r^2}\right).
$$

一个四维测地线问题因此降为一维有效势运动。

## 有质量粒子的有效势

取 $\varepsilon=1$ 并展开：

$$
V_{\mathrm{eff}}
=
\frac12
-
\frac{GM}{r}
+
\frac{L^2}{2r^2}
-
\frac{GML^2}{r^3}.
$$

前两项类似 Newton 引力，第三项是离心势，最后一项是相对论修正。它使接近黑洞的轨道失稳。

圆轨道满足

$$
\dot r=0,
\qquad
\frac{\mathrm dV_{\mathrm{eff}}}{\mathrm dr}=0.
$$

解得圆轨道角动量

$$
L^2
=
\frac{GMr^2}{r-3GM}.
$$

因此类时圆轨道只在 $r>3GM$ 存在。进一步检查二阶导数：

- $r>6GM$ 的圆轨道稳定；
- $3GM<r<6GM$ 的圆轨道不稳定；
- $r=6GM$ 是最内稳定圆轨道 ISCO。

## 光子球

对光 $\varepsilon=0$：

$$
V_{\mathrm{eff}}^{\mathrm{null}}
=
\frac{L^2}{2r^2}
\left(1-\frac{2GM}{r}\right).
$$

令导数为零得到

$$
r=3GM.
$$

这是不稳定光子球。受到任意小扰动后，光要么逃向远方，要么落入黑洞。光子球与视界 $r=2GM$ 是不同几何结构。

## 水星近日点进动

用 $u=1/r$ 和 $\phi$ 改写类时轨道方程，可得

$$
\frac{\mathrm d^2u}{\mathrm d\phi^2}+u
=
\frac{GM}{L^2}
+
3GMu^2.
$$

右边最后一项是广义相对论修正。把 Newton 椭圆

$$
u_0(\phi)
=
\frac{GM}{L^2}(1+e\cos\phi)
$$

代入修正项并做一阶微扰，得到每个轨道周期的近似进动

$$
\Delta\phi
\approx
\frac{6\pi GM}{a(1-e^2)}.
$$

恢复光速后分母还要乘 $c^2$。

## Schwarzschild 时间为什么在视界发散

径向光线满足 $\mathrm ds^2=0$、$\mathrm d\Omega=0$：

$$
\frac{\mathrm dt}{\mathrm dr}
=
\pm
\left(1-\frac{2GM}{r}\right)^{-1}.
$$

积分出现对数项，所以在远方观察者使用的 Schwarzschild 时间 $t$ 中，落入物体似乎无限接近视界却永远不穿过。

自由落体者的固有时却在有限值内穿过 $r=2GM$。这种差异说明 Schwarzschild 时间在视界处不适合继续作为光滑坐标。

## 乌龟坐标与 Eddington–Finkelstein 坐标

定义乌龟坐标

$$
r_*
=
r+2GM
\ln\left|
\frac{r}{2GM}-1
\right|.
$$

径向光线满足

$$
t\pm r_*=\text{常数}.
$$

定义先进时间

$$
v=t+r_*.
$$

度规变成

$$
\mathrm ds^2
=
-\left(1-\frac{2GM}{r}\right)\mathrm dv^2
+
2\,\mathrm dv\,\mathrm dr
+
r^2\mathrm d\Omega^2.
$$

所有系数在 $r=2GM$ 有限。这套 ingoing Eddington–Finkelstein 坐标平滑描述落入视界的光和物体。

## Kruskal 最大延拓

先定义

$$
u=t-r_*,
\qquad
v=t+r_*.
$$

再引入

$$
U=-e^{-u/(4GM)},
\qquad
V=e^{v/(4GM)}.
$$

度规的径向部分变为

$$
\mathrm ds^2
=
-\frac{32G^3M^3}{r}
e^{-r/(2GM)}
\mathrm dU\,\mathrm dV
+
r^2\mathrm d\Omega^2,
$$

其中 $r$ 由

$$
-UV
=
\left(\frac{r}{2GM}-1\right)e^{r/(2GM)}
$$

隐式决定。

这套坐标在未来和过去视界都规则，并展示完整的永恒 Schwarzschild 几何：

- 两个渐近平直外部区域；
- 黑洞内部区域；
- 白洞区域；
- $r=0$ 的未来和过去类空奇点。

由恒星坍缩形成的现实黑洞通常只包含其中一个外部区和未来黑洞内部，不包含完整永恒解的第二宇宙和白洞。

## 事件视界的定义

未来类光无穷记为 $\mathscr I^+$。黑洞区域定义为无法向 $\mathscr I^+$ 发送因果信号的事件集合，事件视界是这个集合的边界。

这个定义是全局的：要知道一个点是否能最终把信号送到任意远处，需要知道整个未来时空。事件视界也没有硬质表面；足够大的黑洞视界附近局部曲率可以很小，自由落体者穿越时未必遇到局部异常。

## 视界内为何无法停留

在 $r<2GM$ 内，$r$ 方向的因果性质发生变化。所有未来指向类时或类光曲线都必须朝更小的 $r$ 前进，就像外部区域中的未来指向曲线必须朝更大的时间坐标前进。

因此“在视界内悬停”与“让时间停止流逝”同样不可能。奇点位于自由落体者的未来，而非某个可以绕开的空间中心。

## Penrose 图

共形紧化把无限远压缩到有限坐标，同时保持光锥方向。Penrose 图只记录因果结构：

```text
类光线始终画成 45 度
空间和时间无穷远成为有限边界
视界是类光边界
Schwarzschild 的 r=0 奇点是类空边界
```

图上的距离和面积没有原度规意义，不能用画面长度判断固有时间或曲率大小。

## 黑洞形成与 trapped surface

当物质坍缩到足够紧凑时，可能出现 trapped surface：从这个闭合二曲面向外和向内发出的两族未来光线，其横截面积都在减小。

在适当能量条件和全局假设下，Penrose 奇点定理说明 trapped surface 会导致类光测地线不完备。定理预测经典理论失效或奇点出现，并没有给出量子引力如何解决内部结构。

## 带电与旋转黑洞

下面临时采用几何单位 $G=c=4\pi\varepsilon_0=1$。

### Reissner–Nordström 黑洞

静态球对称带电解的函数为

$$
f(r)
=
1-\frac{2M}{r}+\frac{Q^2}{r^2}.
$$

视界位于

$$
r_\pm
=
M\pm\sqrt{M^2-Q^2}.
$$

- $|Q|<M$ 时有内外两个视界；
- $|Q|=M$ 是极端黑洞；
- $|Q|>M$ 时没有视界，经典解呈现裸奇点。

### Kerr 黑洞

旋转真空黑洞由质量 $M$ 和角动量 $J$ 描述，定义

$$
a=\frac{J}{M}.
$$

视界半径为

$$
r_\pm
=
M\pm\sqrt{M^2-a^2}.
$$

外部存在 ergoregion，其中时间平移 Killing 向量变为空间样，但视界生成元

$$
\chi
=
\partial_t+\Omega_H\partial_\phi
$$

在视界上为类光。ergoregion 内的观察者无法相对无穷远保持静止，必须随黑洞共同旋转。

## Penrose 过程

在 Kerr ergoregion 中，相对于无穷远定义的 Killing 能量可以为负。若一个粒子进入 ergoregion 后分裂：

- 一部分以负 Killing 能量落入黑洞；
- 另一部分逃向无穷远；

逃出部分的能量可以大于原粒子能量，差额来自黑洞旋转能。黑洞质量和角动量相应减少，但视界面积不减。

## 无毛观点与宇宙审查

在标准四维 Einstein–Maxwell 理论和适当平稳性、正则性、渐近平直等条件下，平衡黑洞由

$$
(M,J,Q)
$$

刻画。这是“无毛”观点的核心。它有明确适用条件，含其他场或不同渐近结构的理论可能拥有额外黑洞参数。

弱宇宙审查猜想大意是：合理引力坍缩产生的奇点被事件视界遮蔽，不会直接暴露给远方观察者。它是一项重要猜想，不能当成已经普遍证明的定理。

## 黑洞力学四定律

经典平稳黑洞满足与热力学相似的规律：

1. **第零定律**：平稳视界上的表面引力 $\kappa$ 为常数；
2. **第一定律**：

   $$
   \mathrm dM
   =
   \frac{\kappa}{8\pi G}\mathrm dA
   +
   \Omega_H\mathrm dJ
   +
   \Phi_H\mathrm dQ;
   $$

3. **第二定律**：在经典能量条件下，事件视界面积 $A$ 不减；
4. **第三定律**：通过有限物理过程不能把 $\kappa$ 降到零。

对 Schwarzschild 黑洞

$$
A=4\pi(2GM)^2=16\pi G^2M^2,
$$

$$
\kappa=\frac{1}{4GM}.
$$

## Hawking 温度与 Bekenstein 熵

量子场论把类比变成真实热力学。恢复 $c$、$\hbar$ 和 $k_{\mathrm B}$：

$$
T_H
=
\frac{\hbar c^3}{8\pi GMk_{\mathrm B}},
$$

$$
S_{\mathrm{BH}}
=
\frac{k_{\mathrm B}c^3A}{4G\hbar}.
$$

温度与质量成反比，熵与视界面积成正比。黑洞辐射会降低质量，因此量子理论中经典面积定律要推广为“黑洞熵加外部普通熵不减”的广义第二定律。

## 三种“半径”不要混淆

| 名称 | Schwarzschild 情形 | 含义 |
| --- | --- | --- |
| Schwarzschild 半径 | $2GM$ | 事件视界的面积半径 |
| 光子球半径 | $3GM$ | 不稳定圆形类光轨道 |
| ISCO 半径 | $6GM$ | 最内稳定类时圆轨道 |

它们回答不同问题，不能都笼统称为“黑洞大小”。

## 常见误区

### 认为视界处曲率无限大

Schwarzschild 视界上的曲率不变量有限。坐标发散可由 Eddington–Finkelstein 或 Kruskal 坐标消除。

### 认为远方看不到穿越就表示物体自身也永远无法穿越

远方 Schwarzschild 时间发散，落体固有时有限。两者是不同钟和不同坐标问题。

### 认为事件视界能由局部仪器瞬间探测

事件视界是全局因果边界。局部曲率测量可以很小，也无法单独确定整个未来是否允许信号逃逸。

### 把永恒 Schwarzschild 图直接当成恒星坍缩历史

最大延拓包含白洞和第二外部区；实际坍缩时空的因果图不同。

### 把无毛和宇宙审查说成无条件结论

两者都有严格适用范围；宇宙审查仍属于猜想。

## 本篇自检

1. 球对称怎样把一般度规化简为两个函数？
2. Birkhoff 定理为什么排除球对称引力波？
3. 有效势中的 $-GML^2/r^3$ 项改变了哪些轨道性质？
4. 怎样用曲率不变量区分视界与真正奇点？
5. Eddington–Finkelstein 坐标怎样消除视界坐标发散？
6. 事件视界为什么是全局定义？
7. 黑洞力学第一定律中的三项分别对应什么可交换量？

[上一篇：线性引力与引力波](./06-weak-fields-and-gravitational-waves.md) · [返回合集](../carroll-general-relativity.md) · [下一篇：FRW 宇宙学](./08-cosmology.md)
