# 06｜狭义相对论：为什么电场和磁场会混合

[上一篇：线性代数与指标记号](./05-linear-algebra-and-indices.md) · [返回系列目录](../maxwell.md) · [下一篇：电磁场张量](./07-field-tensor.md)

麦克斯韦方程预言电磁波以固定速度

$$
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
$$

传播。狭义相对论要求所有惯性观察者都测得同一个真空光速 $c$。这会迫使时间和空间按照洛伦兹变换混合，也会迫使电荷与电流、电场与磁场相互混合。

## 1. 从光速不变推导洛伦兹变换

设惯性系 $S'$ 相对 $S$ 沿 $+x$ 方向以速度 $v$ 匀速运动，并令两个坐标系在 $t=t'=0$ 时原点重合。

空间和时间的均匀性要求坐标变换是线性的。$S'$ 的原点满足 $x=vt$，并且在 $S'$ 中始终有 $x'=0$，所以 $x'$ 必须含有因子 $x-vt$：

$$
x'=a(x-vt).
$$

想象我们在玩一个拉扯弹性网格纸的游戏，既然空间的网格线是直的，那代表时间的那根轴也不能被弯折，所以时间也写成最一般的线性形式：

$$
t'=bt+dx.
$$

### 用向右传播的光确定一个条件

从共同原点发出的向右光脉冲在 $S$ 中满足：

$$
x=ct.
$$

在 $S'$ 中也必须满足 $x'=ct'$。代入：

$$
a(c-v)t
=
c(b+dc)t.
$$

约去 $t$：

$$
a(c-v)
=
cb+dc^2.
\tag{1}
$$

### 用向左传播的光确定另一个条件

向左光脉冲满足：

$$
x=-ct,
\qquad
x'=-ct'.
$$

代入变换：

$$
a(-c-v)t
=
-c(b-dc)t.
$$

整理：

$$
a(c+v)
=
cb-dc^2.
\tag{2}
$$

把式 $(1)$ 和式 $(2)$ 相加：

$$
2ac=2cb,
$$

所以：

$$
b=a.
$$

用式 $(1)$ 减去式 $(2)$：

$$
-2av=2dc^2,
$$

所以：

$$
d=-\frac{av}{c^2}.
$$

时间变换变成：

$$
t'
=
a\left(
t-\frac{vx}{c^2}
\right).
$$

### 用逆变换确定系数 $a$

相对运动具有对称性。从 $S'$ 看，$S$ 以速度 $-v$ 运动，所以逆变换应具有相同系数：

$$
x
=
a(x'+vt').
$$

代入刚才得到的 $x'$ 和 $t'$：

$$
\begin{aligned}
x
&=
a\left[
a(x-vt)
+
va\left(
t-\frac{vx}{c^2}
\right)
\right]
\\
&=
a^2
\left(
1-\frac{v^2}{c^2}
\right)x.
\end{aligned}
$$

这对任意 $x$ 都要成立，所以：

$$
a^2
\left(
1-\frac{v^2}{c^2}
\right)
=
1.
$$

定义：

$$
\beta
\equiv
\frac vc,
\qquad
\gamma
\equiv
\frac{1}{\sqrt{1-\beta^2}},
$$

得到：

$$
a=\gamma.
$$

最终的洛伦兹变换是：

$$
\boxed{
\begin{aligned}
ct'
&=
\gamma(ct-\beta x),
\\
x'
&=
\gamma(x-\beta ct),
\\
y'&=y,
\\
z'&=z.
\end{aligned}
}
$$

等价地：

$$
\boxed{
\begin{aligned}
t'
&=
\gamma\left(
t-\frac{vx}{c^2}
\right),
\\
x'
&=
\gamma(x-vt).
\end{aligned}
}
$$

## 2. 时空间隔为什么不变

计算：

$$
\begin{aligned}
c^2t'^2-x'^2
&=
\gamma^2
\left[
\left(
ct-\frac{vx}{c}
\right)^2
-
(x-vt)^2
\right]
\\
&=
\gamma^2
\left(
1-\frac{v^2}{c^2}
\right)
\left(c^2t^2-x^2\right)
\\
&=
c^2t^2-x^2.
\end{aligned}
$$

加入 $y,z$ 后：

$$
\boxed{
c^2t^2-x^2-y^2-z^2
=
c^2t'^2-x'^2-y'^2-z'^2
}.
$$

定义四维位置：

$$
x^\mu=(ct,x,y,z),
$$

以及闵可夫斯基度规：

$$
\eta_{\mu\nu}
=
\operatorname{diag}(1,-1,-1,-1),
$$

不变量可以写成：

$$
\eta_{\mu\nu}x^\mu x^\nu.
$$

洛伦兹变换矩阵必须满足：

$$
\boxed{
\Lambda^{\mathsf T}\eta\Lambda
=
\eta
}.
$$

这就是它保持时空间隔不变的矩阵条件。就像你拿一把坚硬的尺子在桌面上随意平移旋转，无论怎么动，尺子上的刻度距离是不变的。这个矩阵条件就是确保我们在四维时空中做坐标“旋转”时，那把丈量时空的“尺子”永远不弯折的铁律。

## 3. 四维矢量

沿 $x$ 方向的洛伦兹变换矩阵为：

$$
\Lambda^\mu{}_\nu
=
\begin{pmatrix}
\gamma & -\beta\gamma & 0 & 0\\
-\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}.
$$

任何四维矢量都按：

$$
V'^\mu
=
\Lambda^\mu{}_\nu V^\nu
$$

变换。因此：

$$
\begin{aligned}
V'^0
&=
\gamma(V^0-\beta V^1),
\\
V'^1
&=
\gamma(V^1-\beta V^0),
\\
V'^2&=V^2,
\\
V'^3&=V^3.
\end{aligned}
$$

你会发现，时间分量与平行于相对运动的空间分量发生了混合。这就像在逆风狂奔时，迎面吹来的风（空间上的相对运动）实实在在地改变了你对雨滴滴落快慢（时间）的感受，空间和时间就这样交织成了一张不可分割的网。

## 4. 电荷密度与电流密度为什么要组成四维电流

三维连续性方程是：

$$
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J
=
0.
$$

定义：

$$
\boxed{
J^\mu
=
(c\rho,J_x,J_y,J_z)
}.
$$

四维散度为：

$$
\begin{aligned}
\partial_\mu J^\mu
&=
\frac{1}{c}
\frac{\partial(c\rho)}{\partial t}
+
\frac{\partial J_x}{\partial x}
+
\frac{\partial J_y}{\partial y}
+
\frac{\partial J_z}{\partial z}
\\
&=
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J.
\end{aligned}
$$

因此：

$$
\boxed{
\partial_\mu J^\mu=0
}.
$$

若 $J^\mu$ 是四维矢量，这条守恒定律在所有惯性系中具有相同形式。

### 电荷密度与电流怎样混合

对 $J^\mu$ 使用洛伦兹变换：

$$
c\rho'
=
\gamma(c\rho-\beta J_x),
$$

所以：

$$
\boxed{
\rho'
=
\gamma\left(
\rho-\frac{vJ_x}{c^2}
\right)
}.
$$

空间分量为：

$$
\boxed{
J'_x
=
\gamma(J_x-v\rho)
},
$$

$$
J'_y=J_y,
\qquad
J'_z=J_z.
$$

例如，一个参考系中电荷密度为零但存在电流：

$$
\rho=0,
\qquad
J_x\neq0.
$$

在沿导线运动的另一个参考系中：

$$
\rho'
=
-\gamma\frac{vJ_x}{c^2},
$$

一般会出现非零电荷密度。这就是相对论的奇妙之处：就像你原本只看到一条清澈流动的水流（纯电流），但当你顺着水流一起跑起来时，由于时空网格在你眼里发生了倾斜，原本纯粹的“流动”有一部分被挤压投影到了“原地堆积”上，于是你突然看到了电荷的源头。电荷分布与电荷流动，说到底只是同一道时空水流在不同坐标系下的不同显影而已。

## 5. 电场与磁场为什么也会混合

洛伦兹力为：

$$
\mathbf F
=
q\left(
\mathbf E+\mathbf u\times\mathbf B
\right).
$$

粒子速度 $\mathbf u$ 在不同惯性系中变化，力的分量也按相对论规律变化。要让洛伦兹力定律在所有惯性系中保持相同形式，$\mathbf E$ 与 $\mathbf B$ 必须一起变换。

把六个场分量装入反对称矩阵：

$$
F^{\mu\nu}
=
\begin{pmatrix}
0 & -E_x/c & -E_y/c & -E_z/c\\
E_x/c & 0 & -B_z & B_y\\
E_y/c & B_z & 0 & -B_x\\
E_z/c & -B_y & B_x & 0
\end{pmatrix}.
$$

若它是二阶张量，则：

$$
F'^{\mu\nu}
=
\Lambda^\mu{}_\alpha
\Lambda^\nu{}_\beta
F^{\alpha\beta}.
$$

下面计算两个分量，直接看到混合怎样发生。

### 推导 $E'_y$

因为 $y$ 坐标不参与 boost，$\Lambda^2{}_\beta=\delta^2{}_\beta$：

$$
\begin{aligned}
F'^{02}
&=
\Lambda^0{}_\alpha F^{\alpha2}
\\
&=
\gamma F^{02}
-
\beta\gamma F^{12}.
\end{aligned}
$$

代入：

$$
F^{02}=-\frac{E_y}{c},
\qquad
F^{12}=-B_z,
$$

得到：

$$
F'^{02}
=
-\frac{\gamma}{c}
\left(E_y-vB_z\right).
$$

又因为 $F'^{02}=-E'_y/c$，所以：

$$
\boxed{
E'_y
=
\gamma(E_y-vB_z)
}.
$$

### 推导 $B'_z$

同理：

$$
\begin{aligned}
F'^{12}
&=
\Lambda^1{}_\alpha F^{\alpha2}
\\
&=
-\beta\gamma F^{02}
+
\gamma F^{12}
\\
&=
-\gamma
\left(
B_z-\frac{vE_y}{c^2}
\right).
\end{aligned}
$$

由于 $F'^{12}=-B'_z$：

$$
\boxed{
B'_z
=
\gamma
\left(
B_z-\frac{vE_y}{c^2}
\right)
}.
$$

其他分量用同样的矩阵乘法得到。在这背后，电场和磁场就像是一枚挂在四维时空里不断旋转的风向标。当你站着不动时，你可能只看到它的一面（比如纯电场）；可一旦你跑起来，你的运动“撞”上了这个风向标，它的朝向在你的视野中发生了翻转，于是你不可避免地看到它同时展现出了磁场的面貌。

## 6. 沿 $x$ 方向 boost 的完整场变换

如果顺着你奔跑的正前方看去，这枚风向标的转轴本身是不会随着你的迎面冲刺而发生弯曲的，所以平行于相对运动方向的场分量保持不变：

$$
\boxed{
E'_x=E_x,
\qquad
B'_x=B_x
}.
$$

但当你转头看向侧面，视野就像是正在艰难地爬一道陡坡。原本纯粹的电场或者磁场，因为你的相对运动而被强行推挤混合在了一起，于是垂直方向上的分量就变成了这样：

$$
\boxed{
\begin{aligned}
E'_y
&=
\gamma(E_y-vB_z),
\\
E'_z
&=
\gamma(E_z+vB_y),
\\
B'_y
&=
\gamma\left(
B_y+\frac{vE_z}{c^2}
\right),
\\
B'_z
&=
\gamma\left(
B_z-\frac{vE_y}{c^2}
\right).
\end{aligned}
}
$$

用平行、垂直分解可以写得更紧凑：

$$
\mathbf E'_\parallel
=
\mathbf E_\parallel,
\qquad
\mathbf B'_\parallel
=
\mathbf B_\parallel,
$$

$$
\boxed{
\mathbf E'_\perp
=
\gamma
\left(
\mathbf E_\perp
+
\mathbf v\times\mathbf B
\right)
},
$$

$$
\boxed{
\mathbf B'_\perp
=
\gamma
\left(
\mathbf B_\perp
-
\frac{\mathbf v\times\mathbf E}{c^2}
\right)
}.
$$

这一切揭示了一个极具震撼力的物理图景：一个观察者眼里安静悬浮的纯电场，在另一个跑动起来的观察者眼里，就像是平静的水面被快艇劈开，硬生生激荡出了磁场的漩涡。电场和磁场从来都不是两套独立的法则，它们只是同一个完整的“相对论电磁场”这个多面体，在不同时空网格下的不同投影罢了。

## 7. 两个洛伦兹不变量

虽然 $\mathbf E$ 和 $\mathbf B$ 分量会变化，下面两个组合在洛伦兹变换下保持不变：

$$
\boxed{
\mathbf E\cdot\mathbf B
=
\mathbf E'\cdot\mathbf B'
},
$$

$$
\boxed{
E^2-c^2B^2
=
E'^2-c^2B'^2
}.
$$

它们后来会分别对应电磁场张量的缩并：

$$
F_{\mu\nu}\widetilde F^{\mu\nu},
\qquad
F_{\mu\nu}F^{\mu\nu}.
$$

这些不变量可以判断是否存在某个惯性系，使磁场或电场的某一部分消失。

## 8. 本篇结论

狭义相对论带来三条关键结论：

1. 光速不变导出洛伦兹变换；
2. 时间与空间会混合，所以 $\rho$ 与 $\mathbf J$ 要组成四维电流 $J^\mu$；
3. 电场与磁场也会混合，六个分量应组成一个四维反对称张量 $F^{\mu\nu}$。

下一篇会正式构造这个张量，并把四条麦克斯韦方程逐分量压缩成两条协变方程。

[上一篇：线性代数与指标记号](./05-linear-algebra-and-indices.md) · [返回系列目录](../maxwell.md) · [下一篇：电磁场张量](./07-field-tensor.md)
