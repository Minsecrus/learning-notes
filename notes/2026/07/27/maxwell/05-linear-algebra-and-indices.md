# 05｜线性代数与指标记号

[上一篇：四条麦克斯韦方程](./04-maxwell-equations.md) · [返回系列目录](../maxwell.md) · [下一篇：狭义相对论](./06-special-relativity.md)

三维麦克斯韦方程把时间和空间分开书写。但进入相对论后，时间与空间坐标就像是被揉进同一个面团里，换个观察者去看，时空网格就会发生倾斜和混合。为了在这么复杂的网格里准确追踪电磁场是怎么扭动的，我们需要一种自带“跟踪定位”功能的语言。这个语言就是线性代数、指标记号和张量——你可以把张量想象成一个高级的风向标，不管你怎么转动坐标系，它永远指着物理实体最真实的方向。

本篇的目标是读懂：

$$
\partial_\mu F^{\mu\nu}
=
\mu_0J^\nu.
$$

## 1. 向量等于几何对象加一组分量

选定一组基底 $\{\mathbf e_1,\mathbf e_2,\mathbf e_3\}$ 后，向量可以写成：

$$
\mathbf v
=
v^1\mathbf e_1
+
v^2\mathbf e_2
+
v^3\mathbf e_3.
$$

使用爱因斯坦求和约定，可以缩写为：

$$
\boxed{
\mathbf v
=
v^i\mathbf e_i
}.
$$

同一个指标 $i$ 在一项中出现两次，就表示对它的所有取值求和：

$$
v^i\mathbf e_i
\equiv
\sum_{i=1}^3v^i\mathbf e_i.
$$

向量 $\mathbf v$ 本身不依赖坐标，但分量 $v^i$ 会随基底变化。

## 2. 为什么分量要反向变换

设新基底由旧基底线性组合而成：

$$
\mathbf e'_i
=
M^j{}_i\mathbf e_j.
$$

同一个向量在新基底下写成：

$$
\mathbf v
=
v'^i\mathbf e'_i.
$$

代入新基底：

$$
\mathbf v
=
v'^iM^j{}_i\mathbf e_j.
$$

另一方面：

$$
\mathbf v
=
v^j\mathbf e_j.
$$

比较 $\mathbf e_j$ 的系数：

$$
v^j
=
M^j{}_iv'^i.
$$

所以：

$$
\boxed{
v'^i
=
\left(M^{-1}\right)^i{}_jv^j
}.
$$

基底朝一个方向变化，分量必须用逆矩阵变化，二者结合后才能表示同一个几何向量。打个比方，如果你把量尺上的刻度间距拉长了一倍（基底变大），那同一个物体的测量读数就会缩水成原来的一半（分量变小）。这一进一退的抵消，正好保证了物体本身的实际长度在现实空间中纹丝不动。

## 3. 对偶向量与上下指标

定义对偶基底 $\{\mathbf e^1,\mathbf e^2,\mathbf e^3\}$，满足：

$$
\mathbf e^i(\mathbf e_j)
=
\delta^i{}_j,
$$

其中克罗内克符号为：

$$
\delta^i{}_j
=
\begin{cases}
1,&i=j,\\
0,&i\neq j.
\end{cases}
$$

对偶向量又称协向量，可以写成：

$$
\omega
=
\omega_i\mathbf e^i.
$$

它作用在向量上得到标量：

$$
\omega(\mathbf v)
=
\omega_iv^i.
$$

这里一个下标与一个上标相同，所以自动求和。

在平坦方正的欧几里得网格里，上下指标就像是在平地上走路，数值看起来完全没有差别。但进入闵可夫斯基时空后，时间方向的度规多了一个负号，这就好比你所在的网格突然有了一些深坑和高山地形，这时候严格区分“指出方向的箭头（上指标）”和“丈量落差的等高线（下指标）”就变得尤为重要了。

## 4. 度规怎样升降指标

度规张量 $g_{\mu\nu}$ 定义两个向量的内积：

$$
\mathbf u\cdot\mathbf v
=
g_{\mu\nu}u^\mu v^\nu.
$$

它可以把上指标变成下指标：

$$
\boxed{
v_\mu
=
g_{\mu\nu}v^\nu
}.
$$

逆度规满足：

$$
g^{\mu\alpha}g_{\alpha\nu}
=
\delta^\mu{}_\nu,
$$

因此可以把指标升回去：

$$
\boxed{
v^\mu
=
g^{\mu\nu}v_\nu
}.
$$

在号差为 $(+,-,-,-)$ 的闵可夫斯基时空中：

$$
\eta_{\mu\nu}
=
\operatorname{diag}(1,-1,-1,-1).
$$

如果：

$$
v^\mu=(v^0,v^1,v^2,v^3),
$$

那么：

$$
v_\mu=(v^0,-v^1,-v^2,-v^3).
$$

缩并得到洛伦兹标量：

$$
v_\mu v^\mu
=
(v^0)^2-(v^1)^2-(v^2)^2-(v^3)^2.
$$

## 5. 张量的含义

坐标做线性变换：

$$
x'^\mu
=
\Lambda^\mu{}_\nu x^\nu.
$$

一个四维向量按同样方式变换：

$$
V'^\mu
=
\Lambda^\mu{}_\nu V^\nu.
$$

二阶逆变张量有两个上指标，每个指标都要乘一个变换矩阵：

$$
\boxed{
T'^{\mu\nu}
=
\Lambda^\mu{}_\alpha
\Lambda^\nu{}_\beta
T^{\alpha\beta}
}.
$$

二阶协变张量则使用逆变换：

$$
T'_{\mu\nu}
=
\left(\Lambda^{-1}\right)^\alpha{}_\mu
\left(\Lambda^{-1}\right)^\beta{}_\nu
T_{\alpha\beta}.
$$

“张量”这一名称的核心含义其实就藏在它那严格的变换规律里。不管你是站在原地不动，还是坐着火箭以接近光速飞奔，不同观察者测出来的数字分量肯定五花八门。但妙就妙在，这些数字就像拉满弦的弓一样，在背地里严丝合缝地按固定比例此消彼长，拼凑在一起共同维护着那个绝对不变的真实物理对象。

## 6. 反对称张量为什么有六个独立分量

电磁场张量满足：

$$
F^{\mu\nu}
=
-F^{\nu\mu}.
$$

令 $\mu=\nu$：

$$
F^{\mu\mu}
=
-F^{\mu\mu},
$$

所以：

$$
F^{\mu\mu}=0.
$$

这意味着矩阵的对角线全军覆没，必须是零。而且上三角区域和下三角区域里的数字就像照镜子一样，大小一样但符号相反。这种“你多我就少，你进我就退”的反对称性质，恰好就像水流转动或者跷跷板一样，因此我们只需要从这里面挑出两种不同指标的无序组合，就能把所有有用的信息抓在手里了。

在 $n$ 维空间中，独立分量数为：

$$
\binom n2
=
\frac{n(n-1)}{2}.
$$

四维时：

$$
\frac{4(4-1)}{2}
=
6.
$$

一般的四维反对称张量可写成：

$$
F^{\mu\nu}
=
\begin{pmatrix}
0 & f_{01} & f_{02} & f_{03}\\
-f_{01} & 0 & f_{12} & f_{13}\\
-f_{02} & -f_{12} & 0 & f_{23}\\
-f_{03} & -f_{13} & -f_{23} & 0
\end{pmatrix}.
$$

这六个位置恰好可以容纳三个电场分量和三个磁场分量。

## 7. 列维-奇维塔符号

三维列维-奇维塔符号定义为：

$$
\varepsilon_{ijk}
=
\begin{cases}
+1,&(i,j,k)\text{ 是 }(1,2,3)\text{ 的偶排列},\\
-1,&(i,j,k)\text{ 是 }(1,2,3)\text{ 的奇排列},\\
0,&\text{任意两个指标相同}.
\end{cases}
$$

叉积可以写成：

$$
\boxed{
\left(\mathbf a\times\mathbf b\right)_i
=
\varepsilon_{ijk}a_jb_k
}.
$$

以 $i=1$ 为例，只有 $(j,k)=(2,3)$ 和 $(3,2)$ 两项不为零：

$$
\begin{aligned}
\left(\mathbf a\times\mathbf b\right)_1
&=
\varepsilon_{123}a_2b_3
+
\varepsilon_{132}a_3b_2
\\
&=
a_2b_3-a_3b_2.
\end{aligned}
$$

旋度也可以写成：

$$
\boxed{
\left(\nabla\times\mathbf A\right)_i
=
\varepsilon_{ijk}\partial_jA_k
},
$$

其中：

$$
\partial_j
\equiv
\frac{\partial}{\partial x^j}.
$$

散度则是：

$$
\boxed{
\nabla\cdot\mathbf A
=
\partial_iA_i
}.
$$

你看，散度就像是算出水流从某个点往外源源不断涌出的速度，而旋度则是测量水流在某个点打转产生旋涡的力度。在这里，这些大家已经很熟的三维点积、叉积、散度和旋度，全都可以被扒掉原本繁琐的外衣，用这一套干净利落的指标语言统一降维打击。

## 8. 四维导数与四维电流

取四维坐标：

$$
x^\mu=(ct,x,y,z).
$$

对坐标求偏导得到下指标算符：

$$
\boxed{
\partial_\mu
\equiv
\frac{\partial}{\partial x^\mu}
=
\left(
\frac{1}{c}\frac{\partial}{\partial t},
\nabla
\right)
}.
$$

四维电流定义为：

$$
\boxed{
J^\mu=(c\rho,\mathbf J)
}.
$$

把指标缩并：

$$
\begin{aligned}
\partial_\mu J^\mu
&=
\partial_0J^0
+
\partial_iJ^i
\\
&=
\frac{1}{c}
\frac{\partial(c\rho)}{\partial t}
+
\nabla\cdot\mathbf J
\\
&=
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf J.
\end{aligned}
$$

这等于是在说，在时空的任意一个角落，既凭空生不出电荷，也凭空消失不了电荷，就像一个蓄水池，水流出去了多少，里面的水位就得老老实实降多少。所以原本直观但也稍长了点的电荷连续性方程，就这样被极其紧凑地压缩成了一个短短的式子：

$$
\boxed{
\partial_\mu J^\mu=0
}.
$$

## 9. 怎样阅读 $\partial_\mu F^{\mu\nu}$

在：

$$
\partial_\mu F^{\mu\nu}
$$

中，$\mu$ 出现两次，是求和指标；$\nu$ 只出现一次，是自由指标。因此：

$$
\partial_\mu F^{\mu\nu}
=
\partial_0F^{0\nu}
+
\partial_1F^{1\nu}
+
\partial_2F^{2\nu}
+
\partial_3F^{3\nu}.
$$

自由指标 $\nu$ 可以分别取 $0,1,2,3$，所以这一行实际上包含四个方程：

$$
\begin{cases}
\partial_\mu F^{\mu0}=\mu_0J^0,\\
\partial_\mu F^{\mu1}=\mu_0J^1,\\
\partial_\mu F^{\mu2}=\mu_0J^2,\\
\partial_\mu F^{\mu3}=\mu_0J^3.
\end{cases}
$$

第七篇会逐项展开它们，看到第一行给出电场高斯定律，后三行共同给出安培—麦克斯韦定律。

## 10. 本篇结论

进入四维表达前，最重要的规则是：

1. 重复一次的上、下指标要自动求和；
2. 只出现一次的指标是自由指标，代表一组方程；
3. 度规负责升降指标；
4. 每个张量指标都按照对应的坐标变换规律变化；
5. 四维反对称张量有六个独立分量，正好容纳 $\mathbf E$ 和 $\mathbf B$。

[上一篇：四条麦克斯韦方程](./04-maxwell-equations.md) · [返回系列目录](../maxwell.md) · [下一篇：狭义相对论](./06-special-relativity.md)
