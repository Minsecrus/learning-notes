# 09｜几何代数：四条方程如何写成一条

[上一篇：微分形式](./08-differential-forms.md) · [返回系列目录](../maxwell.md) · [下一篇：规范势与拉格朗日量](./10-gauge-and-lagrangian.md)

张量和微分形式把四条麦克斯韦方程写成两条：

$$
\partial\cdot F
=
\mu_0J,
\qquad
\partial\wedge F
=
0.
$$

几何代数提供一种同时包含内积与外积的乘法，因此可以把这两条继续合并：

$$
\boxed{
\partial F
=
\mu_0J
}.
$$

本篇先在熟悉的三维空间中直接展开这条合并，再说明它的四维时空形式。

## 1. 几何积从哪里来

对两个向量 $\mathbf a,\mathbf b$，定义几何积，使其满足：

$$
\boxed{
\mathbf a\mathbf b
+
\mathbf b\mathbf a
=
2\mathbf a\cdot\mathbf b
}.
$$

如果我们把两股物理量的相遇比作水流交汇，它们的关系可以自然地分为两部分：一部分是顺流叠加的“同行”成分（两者交换位置依然不变），另一部分是相互侧刮、形成漩涡的“错车”成分（交换位置就会反转方向）。反映到数学上，就是把几何积拆成下面这两部分：

$$
\mathbf a\cdot\mathbf b
\equiv
\frac12
\left(
\mathbf a\mathbf b+\mathbf b\mathbf a
\right),
$$

$$
\mathbf a\wedge\mathbf b
\equiv
\frac12
\left(
\mathbf a\mathbf b-\mathbf b\mathbf a
\right).
$$

两式相加：

$$
\boxed{
\mathbf a\mathbf b
=
\mathbf a\cdot\mathbf b
+
\mathbf a\wedge\mathbf b
}.
$$

就像风吹过平原，内积捕捉的是风向沿着你前进步伐的“推力”（一个纯粹的数值），而外积捕捉的则是风把你往侧边吹，跟你的步伐共同扫出的一片“有向面积”（一个二重向量）。所以，几何积其实就是把“沿着走”的投影和“横着扫”的面积打包在了一起，它产出的结果是一个既有数字又有平面的多重向量。

## 2. 正交基底的乘法规则

取三维欧几里得正交单位基底：

$$
\mathbf e_i\cdot\mathbf e_j
=
\delta_{ij}.
$$

当 $i=j$：

$$
\mathbf e_i^2
=
1.
$$

当 $i\neq j$，内积为零：

$$
\mathbf e_i\mathbf e_j
=
\mathbf e_i\wedge\mathbf e_j.
$$

交换顺序：

$$
\boxed{
\mathbf e_i\mathbf e_j
=
-\mathbf e_j\mathbf e_i
\qquad(i\neq j)
}.
$$

例如，平面二重向量的平方为：

$$
\begin{aligned}
\left(\mathbf e_1\mathbf e_2\right)^2
&=
\mathbf e_1\mathbf e_2\mathbf e_1\mathbf e_2
\\
&=
-\mathbf e_1\mathbf e_1\mathbf e_2\mathbf e_2
\\
&=
-1.
\end{aligned}
$$

这就好比你在一个广场上原地连续转了两个90度的弯，也就是转了180度，结果刚好掉头指向了完全相反的方向。这说明，代表着“空间旋转”和“扫描面积”的有向平面，天然就像虚数单位那样，自己跟自己乘一次就能完成一次方向的反转。

## 3. 三维单位赝标量

定义：

$$
\boxed{
I
=
\mathbf e_1\mathbf e_2\mathbf e_3
}.
$$

计算它的平方：

$$
\begin{aligned}
I^2
&=
\mathbf e_1\mathbf e_2\mathbf e_3
\mathbf e_1\mathbf e_2\mathbf e_3
\\
&=
-1.
\end{aligned}
$$

在三维欧几里得几何代数中，$I$ 与所有向量交换。它把向量映射为与其垂直的二重向量：

$$
I\mathbf e_1
=
\mathbf e_2\mathbf e_3,
$$

$$
I\mathbf e_2
=
\mathbf e_3\mathbf e_1,
$$

$$
I\mathbf e_3
=
\mathbf e_1\mathbf e_2.
$$

这就是三维对偶关系。传统叉积产生法向量；几何代数中的外积保留有向平面，二者由 $I$ 联系：

$$
\boxed{
\mathbf a\wedge\mathbf b
=
I(\mathbf a\times\mathbf b)
}.
$$

## 4. 向量导数的几何积

定义向量导数：

$$
\nabla
=
\mathbf e_1\partial_x
+
\mathbf e_2\partial_y
+
\mathbf e_3\partial_z.
$$

对向量场：

$$
\mathbf A
=
A_1\mathbf e_1
+
A_2\mathbf e_2
+
A_3\mathbf e_3
$$

作用：

$$
\nabla\mathbf A
=
\sum_{i,j}
\mathbf e_i\mathbf e_j
\partial_iA_j.
$$

用几何积的分解：

$$
\boxed{
\nabla\mathbf A
=
\nabla\cdot\mathbf A
+
\nabla\wedge\mathbf A
}.
$$

### 标量部分

$i=j$ 时，$\mathbf e_i^2=1$，给出：

$$
\boxed{
\nabla\cdot\mathbf A
=
\partial_xA_x
+
\partial_yA_y
+
\partial_zA_z
}.
$$

### 二重向量部分

例如 $\mathbf e_1\mathbf e_2$ 的系数为：

$$
\partial_xA_y-\partial_yA_x,
$$

这正是旋度的 $z$ 分量。完整关系为：

$$
\boxed{
\nabla\wedge\mathbf A
=
I\left(\nabla\times\mathbf A\right)
}.
$$

因此：

$$
\boxed{
\nabla\mathbf A
=
\nabla\cdot\mathbf A
+
I\left(\nabla\times\mathbf A\right)
}.
$$

你看，这就非常奇妙了：只需要简简单单地对向量场做一次几何乘法，它就像个灵敏的风向标，自动帮你把水流里的“源头涌出量”（散度）和“漩涡打转量”（旋度）分别挑了出来，整整齐齐地摆在不同的维度格子里。

## 5. 把电场和磁场放进同一个多重向量

定义电磁多重向量：

$$
\boxed{
F
=
\mathbf E
+
Ic\mathbf B
}.
$$

其中：

- $\mathbf E$ 是向量；
- $I\mathbf B$ 是二重向量；
- 因子 $c$ 让两部分具有相同量纲。

再把时间导数与空间向量导数组合：

$$
\boxed{
D
=
\frac{1}{c}\frac{\partial}{\partial t}
+
\nabla
}.
$$

下面直接计算 $DF$。

## 6. 完整展开 $DF$

先使用分配律：

$$
\begin{aligned}
DF
={}&
\left(
\frac{1}{c}\partial_t+\nabla
\right)
\left(
\mathbf E+Ic\mathbf B
\right)
\\
={}&
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
+
I\frac{\partial\mathbf B}{\partial t}
+
\nabla\mathbf E
+
Ic\nabla\mathbf B.
\end{aligned}
$$

分别展开两个空间导数：

$$
\nabla\mathbf E
=
\nabla\cdot\mathbf E
+
I\left(\nabla\times\mathbf E\right),
$$

$$
\nabla\mathbf B
=
\nabla\cdot\mathbf B
+
I\left(\nabla\times\mathbf B\right).
$$

因此：

$$
\begin{aligned}
Ic\nabla\mathbf B
&=
Ic\left(\nabla\cdot\mathbf B\right)
+
I^2c\left(\nabla\times\mathbf B\right)
\\
&=
Ic\left(\nabla\cdot\mathbf B\right)
-
c\left(\nabla\times\mathbf B\right).
\end{aligned}
$$

代回并按几何等级分组：

$$
\boxed{
\begin{aligned}
DF
={}&
\underbrace{
\nabla\cdot\mathbf E
}_{\text{标量}}
\\
&+
\underbrace{
\left[
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
-
c\nabla\times\mathbf B
\right]
}_{\text{向量}}
\\
&+
\underbrace{
I\left[
\frac{\partial\mathbf B}{\partial t}
+
\nabla\times\mathbf E
\right]
}_{\text{二重向量}}
\\
&+
\underbrace{
Ic\left(\nabla\cdot\mathbf B\right)
}_{\text{三重向量}}.
\end{aligned}
}
$$

就像我们把一堆混杂的硬币倒进了自动分拣机，经过刚才的计算，原本散落在各处的四条麦克斯韦方程，已经按照“标量”、“向量”、“二重向量”和“三重向量”这四个不同的物理尺寸网格，非常完美地自动对号入座了。

## 7. 代入四条麦克斯韦方程

### 标量部分

$$
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0}.
$$

### 向量部分

安培—麦克斯韦定律为：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}.
$$

所以：

$$
\begin{aligned}
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
-
c\nabla\times\mathbf B
&=
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
-
c\mu_0\mathbf J
-
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
\\
&=
-\mu_0c\mathbf J.
\end{aligned}
$$

### 二重向量部分

法拉第定律给出：

$$
\frac{\partial\mathbf B}{\partial t}
+
\nabla\times\mathbf E
=
0.
$$

### 三重向量部分

磁场高斯定律给出：

$$
\nabla\cdot\mathbf B=0.
$$

因此，整个 $DF$ 简化为：

$$
\boxed{
DF
=
\frac{\rho}{\varepsilon_0}
-
\mu_0c\mathbf J
}.
$$

这是一条三维几何代数形式的麦克斯韦方程。

## 8. 从一条方程还原四条方程

反过来，假设：

$$
DF
=
\frac{\rho}{\varepsilon_0}
-
\mu_0c\mathbf J.
$$

因为等式的右边其实只有“电荷”和“电流”这种基础的标量和向量，完全没有那种像旋风一样的面积或者体积块（也就是没有二重、三重向量）。既然左右两边的总包裹是相等的，这就要求大包裹里每一个对应层级的物理量都必须严丝合缝地各自相等。

### 比较标量

$$
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0}.
$$

### 比较向量

$$
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
-
c\nabla\times\mathbf B
=
-\mu_0c\mathbf J.
$$

移项并除以 $c$：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}.
$$

### 比较二重向量

$$
I\left(
\frac{\partial\mathbf B}{\partial t}
+
\nabla\times\mathbf E
\right)
=
0.
$$

由于 $I$ 可逆：

$$
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t}.
$$

### 比较三重向量

$$
Ic\left(\nabla\cdot\mathbf B\right)
=
0
$$

给出：

$$
\nabla\cdot\mathbf B=0.
$$

所以一条多重向量方程与原来的四条方程完全等价。

## 9. 四维时空几何代数

三维写法仍把时间导数与空间导数拼在一起。时空代数直接使用闵可夫斯基基底：

$$
\gamma_0^2=1,
\qquad
\gamma_1^2
=
\gamma_2^2
=
\gamma_3^2
=
-1.
$$

定义时空向量导数：

$$
\boxed{
\partial
=
\gamma^\mu\partial_\mu
}.
$$

电磁场 $F$ 是时空二重向量，四维电流 $J$ 是时空向量。向量与二重向量的几何积会分成向量部分和三重向量部分：

$$
\boxed{
\partial F
=
\partial\cdot F
+
\partial\wedge F
}.
$$

其中：

$$
\partial\cdot F
=
\mu_0J
$$

是有源方程，而：

$$
\partial\wedge F
=
0
$$

是无源方程。合并后：

$$
\boxed{
\partial F
=
\mu_0J
}.
$$

不同的度规号差、单位制和 $F$ 的定义可能改变整体符号或 $c$ 的位置，但“几何积按等级分解为有源与无源两部分”的结构保持不变。

## 10. 为什么一行可以包含多条方程

普通标量等式只比较一个数。多重向量等式要同时比较每个几何等级，类似复数等式：

$$
a+ib=0
$$

同时要求：

$$
a=0,
\qquad
b=0.
$$

在麦克斯韦方程中，比较的等级更多：

$$
\text{标量}
\oplus
\text{向量}
\oplus
\text{二重向量}
\oplus
\text{三重向量}.
$$

“四条变一条”的关键是把原先分散的散度与旋度信息放进同一个具有分级结构的代数对象中。

[上一篇：微分形式](./08-differential-forms.md) · [返回系列目录](../maxwell.md) · [下一篇：规范势与拉格朗日量](./10-gauge-and-lagrangian.md)
