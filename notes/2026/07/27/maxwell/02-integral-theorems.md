# 02｜积分定理：高斯定理与斯托克斯定理

[上一篇：矢量微积分](./01-vector-calculus.md) · [返回系列目录](../maxwell.md) · [下一篇：电磁学的基本量](./03-electromagnetic-quantities.md)
上一篇定义了散度和旋度，它们描述一个点附近的局部行为。本篇要回答：

> 怎样把每一点的局部变化，累积成一个有限区域边界上的可测量结果？

答案来自高斯散度定理和斯托克斯定理。这两个听起来高深的名字，其实骨子里都在讲述同一个极其简单的道理——内部细节的抵消。它们都可以追溯到我们中学时代就接触过的一维微积分基本定理（牛顿-莱布尼茨公式）。

## 1. 从一维微积分基本定理开始

把区间 $[a,b]$ 分成很多小段：

$$
a=x_0<x_1<\cdots<x_n=b.
$$

在很短的小段上，

$$
f(x_{i+1})-f(x_i)
\approx
f'(x_i)\Delta x_i.
$$

把所有小段相加，左边发生望远镜式消去：

$$
\begin{aligned}
\sum_{i=0}^{n-1}
\left[f(x_{i+1})-f(x_i)\right]
&=
\cancel{f(x_1)}-f(x_0)
\\
&\quad+
\cancel{f(x_2)}-\cancel{f(x_1)}
+\cdots
\\
&\quad+
f(x_n)-\cancel{f(x_{n-1})}
\\
&=
f(b)-f(a).
\end{aligned}
$$

右边在分割无限细时变成积分，所以：

$$
\boxed{
\int_a^b f'(x)\,\mathrm dx
=
f(b)-f(a)
}.
$$

关键现象是：相邻小区间共享的内部端点互相抵消，最后只剩整个区间的边界 $a,b$。

## 2. 高斯散度定理

高斯定理把“体积内的散度”转换成“封闭表面的通量”。你可以把它想象成在计算一个大水池里凭空冒出多少水：水池内部无数个微小“泉眼”（散度）咕噜咕噜冒出来的水量总和，一定完全等于最后从水池表面漫出去的宏观总水量（通量）：

$$
\boxed{
\iiint_V
\left(\nabla\cdot\mathbf A\right)\,\mathrm dV
=
\oiint_{\partial V}
\mathbf A\cdot\mathrm d\mathbf S
}.
$$

其中：

- $V$ 是三维区域；
- $\partial V$ 是它的封闭边界；
- $\mathrm d\mathbf S=\mathbf n\,\mathrm dS$，$\mathbf n$ 是向外单位法向量。

### 为什么这个定理成立

根据散度的局部定义，对一个很小的体积 $\Delta V_i$ 有：

$$
\left(\nabla\cdot\mathbf A\right)_i\Delta V_i
\approx
\oiint_{\partial(\Delta V_i)}
\mathbf A\cdot\mathrm d\mathbf S.
$$

把大区域 $V$ 切成很多小体积并求和：

$$
\sum_i
\left(\nabla\cdot\mathbf A\right)_i\Delta V_i
\approx
\sum_i
\oiint_{\partial(\Delta V_i)}
\mathbf A\cdot\mathrm d\mathbf S.
$$

想象用细密的网格把大水池切成无数个微小的立方体水箱。任意两个相邻小体积共享一个面。对于左边的小水箱来说，水是流出这个面的；但对右边相邻的小水箱来说，同样的水却是流进来的。一进一出，内部接触面上的水流效果完全抵消。因此，共享面上的两份通量为：

$$
\mathbf A\cdot\mathbf n\,\Delta S
+
\mathbf A\cdot(-\mathbf n)\,\Delta S
=
0.
$$

所有内部面都成对抵消，最后只剩大区域的外表面。令分割无限细，左边成为体积分：

$$
\iiint_V
\left(\nabla\cdot\mathbf A\right)\,\mathrm dV,
$$

右边成为外边界通量：

$$
\oiint_{\partial V}
\mathbf A\cdot\mathrm d\mathbf S.
$$

这就得到高斯散度定理。

### 直接验证一个例子

取向量场：

$$
\mathbf A=(x,y,z),
$$

区域为单位立方体 $0\leq x,y,z\leq1$。散度为：

$$
\nabla\cdot\mathbf A
=
\frac{\partial x}{\partial x}
+
\frac{\partial y}{\partial y}
+
\frac{\partial z}{\partial z}
=
3.
$$

因此体积分为：

$$
\iiint_V3\,\mathrm dV
=
3.
$$

再看表面通量。$x=1$ 面上 $\mathbf A\cdot\mathbf n=1$，面积为 $1$，通量为 $1$；$x=0$ 面上的通量为 $0$。$y,z$ 两组面也各贡献 $1$。总通量为：

$$
1+1+1=3,
$$

与体积分完全一致。

## 3. 斯托克斯定理

斯托克斯定理把“曲面上的旋度通量”转换成“曲面边界上的环流”。打个比方，如果我们把曲面想象成一片布满微小漩涡的水面，内部的每个小漩涡（旋度）都在原地打转。当你把所有小漩涡的旋转效果加起来时，内部相邻漩涡的边缘水流相互摩擦抵消，最后水面上能实际观测到的，就只剩下沿着最外圈边缘的一股宏观大水流（环流）：

$$
\boxed{
\iint_S
\left(\nabla\times\mathbf A\right)
\cdot\mathrm d\mathbf S
=
\oint_{\partial S}
\mathbf A\cdot\mathrm d\mathbf l
}.
$$

曲面法向量和边界方向必须满足右手定则：右手四指沿边界积分方向弯曲时，大拇指指向选定的法向量。

### 为什么内部边界会消失

根据旋度的局部定义，对一个很小的面元 $\Delta S_i$ 有：

$$
\left(\nabla\times\mathbf A\right)_i
\cdot\mathbf n_i\,\Delta S_i
\approx
\oint_{\partial(\Delta S_i)}
\mathbf A\cdot\mathrm d\mathbf l.
$$

把大曲面切成很多网格般的小面元，假想每个小面元上都有一个微小的齿轮或漩涡在按同方向旋转。相邻的两个面元会共享一条边，但在交界处，两个相邻漩涡的流动方向恰好是“顶牛”的——一个带动水流向上，另一个就带动水流向下。所以：

$$
\int_{\text{共享边}}
\mathbf A\cdot\mathrm d\mathbf l
+
\int_{\text{反向共享边}}
\mathbf A\cdot\mathrm d\mathbf l
=
0.
$$

所有内部边都抵消，最后只剩整个曲面的外边界 $\partial S$。令面元无限小，就得到斯托克斯定理。

### 直接验证一个例子

取：

$$
\mathbf A
=
\left(-\frac y2,\frac x2,0\right).
$$

它的旋度为：

$$
\nabla\times\mathbf A
=
(0,0,1).
$$

令 $S$ 为 $xy$ 平面的单位圆盘，法向量为 $\mathbf e_z$。左边为：

$$
\iint_S1\,\mathrm dS
=
\pi.
$$

边界单位圆可参数化为：

$$
\mathbf r(\theta)
=
(\cos\theta,\sin\theta,0),
\qquad
0\leq\theta\leq2\pi.
$$

于是：

$$
\mathrm d\mathbf l
=
(-\sin\theta,\cos\theta,0)\,\mathrm d\theta,
$$

$$
\mathbf A
=
\left(
-\frac{\sin\theta}{2},
\frac{\cos\theta}{2},
0
\right).
$$

边界环流为：

$$
\begin{aligned}
\oint_{\partial S}
\mathbf A\cdot\mathrm d\mathbf l
&=
\int_0^{2\pi}
\frac{\sin^2\theta+\cos^2\theta}{2}
\,\mathrm d\theta
\\
&=
\frac12\int_0^{2\pi}\mathrm d\theta
\\
&=
\pi.
\end{aligned}
$$

两边再次相等。

## 4. 把麦克斯韦方程从微分形式变成积分形式

如果说微分形式是用显微镜观察空间里极其微小的一个点，那积分形式就是退后一步，纵览整个宏观的物理系统。积分定理的价值恰好就在于充当了这两种视角间的桥梁：它们能把每一点难以直接体会的局部微观“泉眼”或“漩涡”，完美地转换成整个区域宏观可测量的大尺度物理定律。

### 电场高斯定律

从微分形式开始：

$$
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0}.
$$

对体积 $V$ 积分：

$$
\iiint_V
\nabla\cdot\mathbf E\,\mathrm dV
=
\frac{1}{\varepsilon_0}
\iiint_V\rho\,\mathrm dV.
$$

左边使用高斯定理，右边定义为区域内总电荷 $Q_{\mathrm{内}}$：

$$
\boxed{
\oiint_{\partial V}
\mathbf E\cdot\mathrm d\mathbf S
=
\frac{Q_{\mathrm{内}}}{\varepsilon_0}
}.
$$

### 磁场高斯定律

从：

$$
\nabla\cdot\mathbf B=0
$$

得到：

$$
\boxed{
\oiint_{\partial V}
\mathbf B\cdot\mathrm d\mathbf S
=
0
}.
$$

任意封闭表面的净磁通量都为零。

### 法拉第电磁感应定律

从：

$$
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t}
$$

对一个固定曲面 $S$ 积分：

$$
\iint_S
\left(\nabla\times\mathbf E\right)
\cdot\mathrm d\mathbf S
=
-\iint_S
\frac{\partial\mathbf B}{\partial t}
\cdot\mathrm d\mathbf S.
$$

左边使用斯托克斯定理；固定曲面允许把时间导数移到积分号外：

$$
\boxed{
\oint_{\partial S}
\mathbf E\cdot\mathrm d\mathbf l
=
-\frac{\mathrm d}{\mathrm dt}
\iint_S
\mathbf B\cdot\mathrm d\mathbf S
}.
$$

定义磁通量

$$
\Phi_B
=
\iint_S
\mathbf B\cdot\mathrm d\mathbf S,
$$

就得到熟悉的形式：

$$
\boxed{
\mathcal E
=
\oint_{\partial S}
\mathbf E\cdot\mathrm d\mathbf l
=
-\frac{\mathrm d\Phi_B}{\mathrm dt}
}.
$$

### 安培—麦克斯韦定律

从：

$$
\nabla\times\mathbf B
=
\mu_0\mathbf J
+
\mu_0\varepsilon_0
\frac{\partial\mathbf E}{\partial t}
$$

对曲面积分并使用斯托克斯定理：

$$
\begin{aligned}
\oint_{\partial S}
\mathbf B\cdot\mathrm d\mathbf l
&=
\mu_0
\iint_S
\mathbf J\cdot\mathrm d\mathbf S
\\
&\quad+
\mu_0\varepsilon_0
\frac{\mathrm d}{\mathrm dt}
\iint_S
\mathbf E\cdot\mathrm d\mathbf S.
\end{aligned}
$$

定义穿过曲面的电流

$$
I_{\mathrm{内}}
=
\iint_S
\mathbf J\cdot\mathrm d\mathbf S
$$

和电通量

$$
\Phi_E
=
\iint_S
\mathbf E\cdot\mathrm d\mathbf S,
$$

得到：

$$
\boxed{
\oint_{\partial S}
\mathbf B\cdot\mathrm d\mathbf l
=
\mu_0I_{\mathrm{内}}
+
\mu_0\varepsilon_0
\frac{\mathrm d\Phi_E}{\mathrm dt}
}.
$$

## 5. 积分形式还能推回微分形式吗

可以，但需要积分关系对任意足够小的区域都成立。

以电场高斯定律为例：

$$
\oiint_{\partial V}
\mathbf E\cdot\mathrm d\mathbf S
=
\frac{1}{\varepsilon_0}
\iiint_V\rho\,\mathrm dV.
$$

用高斯定理改写左边：

$$
\iiint_V
\left(
\nabla\cdot\mathbf E
-
\frac{\rho}{\varepsilon_0}
\right)\mathrm dV
=
0.
$$

如果这对任意小体积 $V$ 都成立，并且被积函数连续，那么被积函数只能处处为零：

$$
\nabla\cdot\mathbf E
-
\frac{\rho}{\varepsilon_0}
=
0.
$$

因此，积分形式与微分形式在通常的光滑条件下携带相同信息。

## 6. 本篇结论

两个积分定理共享同一种结构：

$$
\boxed{
\text{区域内部的导数积分}
=
\text{区域边界上的场积分}
}.
$$

高斯定理处理中间维度为三维体积、边界为二维封闭曲面；斯托克斯定理处理中间维度为二维曲面、边界为一维闭合曲线。第八篇会看到，它们都是广义斯托克斯定理的具体版本。

[上一篇：矢量微积分](./01-vector-calculus.md) · [返回系列目录](../maxwell.md) · [下一篇：电磁学的基本量](./03-electromagnetic-quantities.md)
