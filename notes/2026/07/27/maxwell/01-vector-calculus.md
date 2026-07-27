# 01｜矢量微积分：场、梯度、散度与旋度

[返回系列目录](../maxwell.md) · [下一篇：积分定理](./02-integral-theorems.md)

麦克斯韦方程组研究的核心是“场”。你可以将其想象为充满整个空间的某种属性，空间中每一点、每一时刻都有一个对应的物理量。电场和磁场都是既有大小又有方向的向量场，我们通常记为：

$$
\mathbf E=\mathbf E(x,y,z,t),
\qquad
\mathbf B=\mathbf B(x,y,z,t).
$$

要描述这样一个场在某一点附近是如何变化的，我们需要三种基本的局部运算。你可以把它们想象成三种不同的“探测器”：

- 梯度：探测标量场朝哪个方向增加得最快，就像在山坡上寻找最陡峭的向上路径；
- 散度：探测向量场从一个小体积中净流出了多少，就像判断水池里哪里有涌泉，哪里有漏口；
- 旋度：探测向量场沿一个小回路环绕了多少，就像把微小水车放进河流，看它会不会被水流拨动旋转。

本篇将从这些运算的定义出发，推导出它们在坐标系中的常见公式。

## 1. 标量场、向量场与偏导数

像温度这样只有大小没有方向的物理量，可以用标量场表示。想象房间里的每一个点都有一个确定的温度值：

$$
T=T(x,y,z).
$$

而像流体速度这样既有大小又有方向的物理量，需要用向量场表示：

$$
\mathbf v(x,y,z)
=
v_x\mathbf e_x
+
v_y\mathbf e_y
+
v_z\mathbf e_z.
$$

当我们在空间中只改变 $x$ 坐标、保持 $y,z$ 不变时，温度 $T$ 的变化率就是偏导数：

$$
\frac{\partial T}{\partial x}
=
\lim_{\Delta x\to0}
\frac{T(x+\Delta x,y,z)-T(x,y,z)}{\Delta x}.
$$

如果我们在三个方向都各自移动一个极其微小的距离，忽略二阶及更高阶的极小量，那么总的变化量可以写成全微分：

$$
\mathrm dT
=
\frac{\partial T}{\partial x}\,\mathrm dx
+
\frac{\partial T}{\partial y}\,\mathrm dy
+
\frac{\partial T}{\partial z}\,\mathrm dz.
$$

这个全微分正是我们推导梯度公式的起点。

## 2. 梯度是怎样得到的

让我们回到“爬山”的类比。山的高度就是一个标量场 $T$。在你脚下的位置，你可以向四面八方迈出极小的一步，把这个小位移写成向量形式：

$$
\mathrm d\mathbf r
=
\mathbf e_x\,\mathrm dx
+
\mathbf e_y\,\mathrm dy
+
\mathbf e_z\,\mathrm dz.
$$

我们希望找到一个特定的向量，使它与微小位移 $\mathrm d\mathbf r$ 做点积（点乘）后，恰好等于高度的微小变化 $\mathrm dT$。比较上面的全微分公式可知，这个向量必须由各个方向的偏导数组成：

$$
\boxed{
\nabla T
=
\mathbf e_x\frac{\partial T}{\partial x}
+
\mathbf e_y\frac{\partial T}{\partial y}
+
\mathbf e_z\frac{\partial T}{\partial z}
}.
$$

这个特殊的向量 $\nabla T$ 就是梯度。于是，高度的变化就可以简洁地写成：

$$
\mathrm dT
=
\nabla T\cdot\mathrm d\mathbf r.
$$

这说明了什么呢？如果你只沿着某个单位向量 $\mathbf n$ 移动一小段距离 $\mathrm ds$（此时 $\mathrm d\mathbf r=\mathbf n\,\mathrm ds$），那么沿着 $\mathbf n$ 方向的坡度（方向导数）就是：

$$
\frac{\mathrm dT}{\mathrm ds}
=
\nabla T\cdot\mathbf n.
$$

由向量点积的柯西—施瓦茨不等式可知：

$$
\nabla T\cdot\mathbf n
\leq
\lVert\nabla T\rVert\lVert\mathbf n\rVert
=
\lVert\nabla T\rVert.
$$

等号只有在你的移动方向 $\mathbf n$ 与梯度 $\nabla T$ 完全同向时才会成立。因此，梯度 $\nabla T$ 始终指向标量场 $T$ 增长最快的那个方向，而它的长度正是这个最大的增长率。

### 例子

假设空间中有一个标量场：

$$
T(x,y,z)=x^2+2y^2+3z.
$$

根据定义，它的梯度场为：

$$
\nabla T
=
\left(2x,4y,3\right).
$$

在特定的点 $(1,1,0)$，场值增长最快的方向是向着向量 $(2,4,3)$ 的方向，而在这个方向上的最大坡度（方向导数）为：

$$
\lVert\nabla T\rVert
=
\sqrt{2^2+4^2+3^2}
=
\sqrt{29}.
$$

## 3. 从小立方体推导散度

散度衡量的是空间中某处是“源头”还是“漏口”。想象一个流动的河流向量场，我们在水中假想出一个极小的长方体盒子，通过计算水是净流出还是净流入来量化它。

设这个向量场为：

$$
\mathbf A
=
A_x\mathbf e_x
+
A_y\mathbf e_y
+
A_z\mathbf e_z.
$$

取边长分别为 $\Delta x,\Delta y,\Delta z$ 的微小长方体。先看垂直于 $x$ 轴的左右两个面。

右侧面的向外通量（水流量）近似为：

$$
A_x(x+\Delta x,y,z)\,\Delta y\,\Delta z.
$$

左侧面的外法向量朝向左边（$-x$ 方向），所以它的向外通量为：

$$
-A_x(x,y,z)\,\Delta y\,\Delta z.
$$

这两个面加起来的“净流出量”是：

$$
\begin{aligned}
\Delta\Phi_x
&=
\left[
A_x(x+\Delta x,y,z)-A_x(x,y,z)
\right]
\Delta y\,\Delta z
\\
&\approx
\frac{\partial A_x}{\partial x}
\Delta x\,\Delta y\,\Delta z.
\end{aligned}
$$

同理，可以得到 $y$ 和 $z$ 方向另外四个面的净流出量：

$$
\Delta\Phi_y
\approx
\frac{\partial A_y}{\partial y}
\Delta x\,\Delta y\,\Delta z,
$$

$$
\Delta\Phi_z
\approx
\frac{\partial A_z}{\partial z}
\Delta x\,\Delta y\,\Delta z.
$$

把三组表面的通量相加，再除以小长方体体积 $\Delta V=\Delta x\Delta y\Delta z$，我们就得到了单位体积的净流出率：

$$
\frac{\Delta\Phi}{\Delta V}
\approx
\frac{\partial A_x}{\partial x}
+
\frac{\partial A_y}{\partial y}
+
\frac{\partial A_z}{\partial z}.
$$

令小长方体不断收缩直到变成一个点，就得到了散度在直角坐标系下的定义：

$$
\boxed{
\nabla\cdot\mathbf A
=
\frac{\partial A_x}{\partial x}
+
\frac{\partial A_y}{\partial y}
+
\frac{\partial A_z}{\partial z}
}.
$$

散度还有一个不依赖于具体坐标系的本质定义。它表明，散度就是微小闭合曲面向外的总通量与体积之比的极限：

$$
\boxed{
\nabla\cdot\mathbf A
=
\lim_{V\to0}
\frac{1}{V}
\oiint_{\partial V}
\mathbf A\cdot\mathrm d\mathbf S
}.
$$

如果某一点的散度为正，说明这个区域流出的量多于流入的量，就像一根往外喷水的水管；散度为负，说明呈现净流入，就像一个下水道漏口；如果散度为零，只说明这里的局部净流出量为零（进去多少就出来多少），但这并不代表流场本身的流速很小。

## 4. 从小回路推导旋度

旋度衡量的是场的“旋转能力”。如果把一个微小的十字风向标或小水车放进流场，它会不会转起来？我们通过计算流体沿着一个微小回路的环流来量化这种能力。

在 $xy$ 平面取一个边长为 $\Delta x,\Delta y$ 的小矩形，并按从 $+z$ 方向（从上往下）看去的逆时针方向绕边界进行路径积分。

四条边的环流总和近似为：

$$
\begin{aligned}
\Delta C
={}&
A_x(x,y)\Delta x
+
A_y(x+\Delta x,y)\Delta y
\\
&-
A_x(x,y+\Delta y)\Delta x
-
A_y(x,y)\Delta y.
\end{aligned}
$$

利用一阶展开，把相邻点的值用偏导数表示出来：

$$
A_y(x+\Delta x,y)
\approx
A_y(x,y)
+
\frac{\partial A_y}{\partial x}\Delta x,
$$

$$
A_x(x,y+\Delta y)
\approx
A_x(x,y)
+
\frac{\partial A_x}{\partial y}\Delta y.
$$

将这些近似代回环流公式，相同的项会互相消去，剩下的结果是：

$$
\Delta C
\approx
\left(
\frac{\partial A_y}{\partial x}
-
\frac{\partial A_x}{\partial y}
\right)
\Delta x\Delta y.
$$

除以矩形的面积并令矩形无限缩小，我们就得到了水车绕着 $z$ 轴旋转的强度，即旋度的 $z$ 分量：

$$
\left(\nabla\times\mathbf A\right)_z
=
\frac{\partial A_y}{\partial x}
-
\frac{\partial A_x}{\partial y}.
$$

将 $x,y,z$ 进行轮换，可以得到三个方向的完整公式：

$$
\boxed{
\nabla\times\mathbf A
=
\begin{pmatrix}
\dfrac{\partial A_z}{\partial y}
-
\dfrac{\partial A_y}{\partial z}
\\[6pt]
\dfrac{\partial A_x}{\partial z}
-
\dfrac{\partial A_z}{\partial x}
\\[6pt]
\dfrac{\partial A_y}{\partial x}
-
\dfrac{\partial A_x}{\partial y}
\end{pmatrix}
}.
$$

同散度一样，旋度也有一个局部（坐标无关）的定义：

$$
\boxed{
\left(\nabla\times\mathbf A\right)\cdot\mathbf n
=
\lim_{S\to0}
\frac{1}{S}
\oint_{\partial S}
\mathbf A\cdot\mathrm d\mathbf l
}.
$$

因此，旋度向量在任何方向 $\mathbf n$ 上的投影分量，其物理意义就是单位面积的微小回路周围的环流。

## 5. 拉普拉斯算符

如果对一个标量场先求梯度，再对得到的向量场求散度，我们就得到了拉普拉斯算符：

$$
\nabla^2T
\equiv
\nabla\cdot\left(\nabla T\right).
$$

在直角坐标系中，它恰好是各个方向上二阶偏导数的总和：

$$
\boxed{
\nabla^2T
=
\frac{\partial^2T}{\partial x^2}
+
\frac{\partial^2T}{\partial y^2}
+
\frac{\partial^2T}{\partial z^2}
}.
$$

拉普拉斯算符有一个很直观的物理意义：它衡量了空间中某一点的值与其周围邻居平均值之间的差异。比如 $\nabla^2T > 0$ 说明这个点像个“山谷”（低于周围平均），而 $\nabla^2T < 0$ 说明像个“山峰”。

它会频繁地出现在静电势的泊松方程和电磁波方程中：

$$
\nabla^2\phi
=
-\frac{\rho}{\varepsilon_0},
$$

$$
\nabla^2\mathbf E
-
\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}
=
0.
$$

## 6. 两个重要恒等式

在场论中，有两个关于这些算符的恒等式，它们如同天然成立的宇宙法则。

### 梯度的旋度恒为零

纯粹由高度差（梯度）驱动的场，是不可能让微小水车转起来的。因为你不可能在山坡上找到一条“一直下坡，最后却走回原点”的环形路线（除非是在彭罗斯阶梯那种错觉画里）。

从数学上来看，我们取旋度的 $z$ 分量：

$$
\begin{aligned}
\left[
\nabla\times\left(\nabla T\right)
\right]_z
&=
\frac{\partial}{\partial x}
\left(\frac{\partial T}{\partial y}\right)
-
\frac{\partial}{\partial y}
\left(\frac{\partial T}{\partial x}\right)
\\
&=
\frac{\partial^2T}{\partial x\partial y}
-
\frac{\partial^2T}{\partial y\partial x}
\\
&=0.
\end{aligned}
$$

只要标量场的二阶偏导数连续，混合偏导的求导顺序是可以交换的，因此两者相减必定等于零。其他两个分量同理，所以：

$$
\boxed{
\nabla\times\left(\nabla T\right)=0
}.
$$

### 旋度的散度恒为零

由旋转产生的东西，都是一圈一圈闭合的。闭合回路既没有源头也没有尽头，所以不存在什么地方在“往外冒”或“往里漏”，其散度必然为零。

我们直接展开数学公式验证：

$$
\begin{aligned}
\nabla\cdot\left(\nabla\times\mathbf A\right)
={}&
\frac{\partial}{\partial x}
\left(
\frac{\partial A_z}{\partial y}
-
\frac{\partial A_y}{\partial z}
\right)
\\
&+
\frac{\partial}{\partial y}
\left(
\frac{\partial A_x}{\partial z}
-
\frac{\partial A_z}{\partial x}
\right)
\\
&+
\frac{\partial}{\partial z}
\left(
\frac{\partial A_y}{\partial x}
-
\frac{\partial A_x}{\partial y}
\right).
\end{aligned}
$$

展开后你会发现，每一个混合二阶偏导数，都必定会与另一个符号相反的同类项完全抵消，因此：

$$
\boxed{
\nabla\cdot\left(\nabla\times\mathbf A\right)=0
}.
$$

这两个恒等式在电磁学中起到了基石般的作用：

- $\nabla\cdot\mathbf B=0$（磁场无源）使我们能够引入磁矢势，在局部理直气壮地写出 $\mathbf B=\nabla\times\mathbf A$；
- 对安培—麦克斯韦方程两侧同时取散度时，方程左边的旋度项自动变为零，从而顺理成章地导出了电荷守恒定律（连续性方程）。

## 7. 本篇结论

回顾这四个核心算符，它们可以用最简洁的一句话清晰地区分开来：

$$
\begin{aligned}
\nabla T
&:\ \text{上坡最陡的方向},
\\
\nabla\cdot\mathbf A
&:\ \text{单位体积的净流出量},
\\
\nabla\times\mathbf A
&:\ \text{单位面积的局部环流},
\\
\nabla^2T
&:\ \text{梯度的散度}.
\end{aligned}
$$

下一篇我们会把散度和旋度从一个“无限小”的微观区域推广到“有限大”的宏观体积与曲面，这一步正是著名的斯托克斯定理和高斯定理。

[返回系列目录](../maxwell.md) · [下一篇：积分定理](./02-integral-theorems.md)