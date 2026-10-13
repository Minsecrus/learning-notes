# 勘误：34 隐函数定理与子流形参数化

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> $$f(\cdot, y) : \mathbb{R}^n \to \mathbb{R}^m,$$

**修正：**

> $$f(\cdot,y):\{x\in\mathbb{R}^n:(x,y)\in\Omega\}\to\mathbb{R}^m,$$

**理由：** f仅定义在Ω，固定y的函数只能在对应切片{x:(x,y)∈Ω}定义；开Ω可以为有界小球，原图不能对全部Rn取值。

**原文：**

> 映射 $\phi : U \to V$, 使得

**修正：**

> 映射 $\phi : U \to V$, 并可取 $U\times V\subset\Omega$，使得

**理由：** 隐函数定理需在函数定义域内给出产品邻域，使每个x∈U的phi(x)以及局部零点条件均有定义；Ω开可缩小U、V保证产品包含关系。

**原文：**

> $d\phi(x) = -(d_y f(x, y))^{-1} \circ d_x f(x, y)$

**修正：**

> $d\phi(x)=-(d_y f(x,\phi(x)))^{-1}\circ d_x f(x,\phi(x))$

**理由：** 由f(x,phi(x))=0求微分，dy和dx须在图像点(x,phi(x))求值。原图自由y没有绑定，也不保证dy在图像外可逆，需明确同一求值点。

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> $\phi(x) = G_2(x, 0) : V \to \mathbb{R}^p$

**修正：**

> $\phi(x) = G_2(x,0):\widetilde V_1\to \mathbb{R}^p$

**理由：** G只定义在产品邻域V1乘V2，0属于V2，故G2(x,0)的自变量域是V1，后文V另为隐函数的值域邻域。

**原文：**

> 所以, 我们可以取 $U = \widetilde{U}, V = \widetilde{V}_1$, 这就证明了隐函数定理的主要论述。

**修正：**

> 所以, 由 $\phi(x^*)=y^*$ 和连续性，我们可以取 $x^*$ 的开邻域 $U\subset\widetilde V_1$ 与 $y^*$ 的开邻域 $V\subset\mathbb R^p$，使得 $U\times V\subset\widetilde U$ 且 $\phi(U)\subset V$。这就证明了隐函数定理的主要论述。

**理由：** 原图U取在Rn加p中的U波浪而V取在Rn中的V1波浪，与定理U属于Rn和V属于Rp冲突。局部逆及phi连续可先取小产品邻域再缩小U，保证局部等价与图像包含。

**原文：**

> $\mathbb{R}^n$ 中的开集 $V$

**修正：**

> $\mathbb{R}^N$ 中的开集 $V$

**理由：** 同一微分同胚的两端均为Rn的大写N维开集；这里小写n尚未引入，须与M的环境维数N一致。

**原文：**

> $$\phi : U \cap M = V \cap (\mathbb{R}^d \times \{0\}),$$

**修正：**

> $$\phi(U\cap M)= V \cap (\mathbb{R}^d \times \{0\}),$$

**理由：** 子流形定义的等式是U与M交集的像等于平面切片；冒号没有对集合施加映射，需补全像的括号。

**原文：**

> $$M = \{ (x, y) \in \mathbb{R}^n \times \mathbb{R}^p \mid f(x, y) = 0 \}.$$

**修正：**

> $$M = \{ (x, y) \in \Omega \mid f(x, y) = 0 \}.$$

**理由：** 前述f只定义在Ω，零点集只能从Ω取点，原图写全部乘积可能包含f没有定义的点。

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> $f : \mathbb{R}^{n+p} \to \mathbb{R}^p$

**修正：**

> $f:\Omega\to\mathbb{R}^p$

**理由：** f沿用隐函数定理的开定义域Ω，一般不在全部Rn加p定义，p个分量的论述保持不变。

**原文：**

> $\Phi : \mathbb{R}^{n+p} \to \mathbb{R}^{n+p}$, 使得 $\phi$

**修正：**

> $\Phi:\Omega\to\mathbb{R}^{n+p}$, 使得 $\Phi$

**理由：** 构造的F只定义在Ω，局部微分同胚是大写Phi而非从Rn到Rp的隐函数phi；两者维数不同不能互换。

**原文：**

> $$M = \{ (x, y) \in \mathbb{R}^n \times \mathbb{R}^p \mid f(x, y) = 0 \}.$$

**修正：**

> $$M = \{ (x,y)\in\Omega\subset\mathbb R^{n\prime}\times\mathbb R^p\mid f(x,y) = 0 \}.$$

**理由：** 定理已规定n等于n撇加p，原图Rn乘Rp总维数额外多p；f的零点只能在Ω中，坐标拆分为n撇和p。

**原文：**

> 存在开集 $U \subset \mathbb{R}^n$ 使得

**修正：**

> 存在包含 $(x^*,y^*)$ 的开集 $U\subset\Omega$ 使得

**理由：** 局部子流形结论必须围绕满秩基点且位于定义域，否则任取空交邻域会使定理失去所声明的局部含义。

**原文：**

> 对于 $c \in \mathbb{R}^p$

**修正：**

> 对于 $c\in f(\Omega)\subset\mathbb R^p$

**理由：** 前文子流形定义排除空集，正则值条件对空纤维为空真。限制c属于像保证纤维非空，同时保留全部非空纤维判据。

**原文：**

> $$f^{-1}(c) = \{ x \in \mathbb{R}^{n+p} \mid f(x) = c \}.$$

**修正：**

> $$f^{-1}(c) = \{ x\in\Omega\mid f(x) = c \}.$$

**理由：** 本推论的f定义于Rn中的Ω，没有额外p个自变量，原图Rn加p和函数定义均不相容。

**原文：**

> $$\left( \frac{\partial f_i}{\partial x_{n+1-j}} \right)_{1 \leqslant i,j \leqslant p}(x) \neq 0,$$

**修正：**

> $$\det\left(\frac{\partial f_i}{\partial x_{n+1-j}}\right)_{1\leqslant i,j\leqslant p}(x)\neq0,$$

**理由：** 满秩要求一个p阶子式行列式非零；矩阵本身非零仅给秩至少1，无法适用隐函数定理的可逆条件。

**原文：**

> 任意选定的 $x \in f^{-c}$

**修正：**

> 任意选定的 $x\in f^{-1}(c)$

**理由：** 纤维始终是c的逆像，指数负c没有该集合的定义，按前后同一逆像记号修正。

**原文：**

> 纤维 $f^{-c}$ 在任意一点附近都是 $p$ 维子流形, 所以 $f^{-1}(c)$ 是 $p$-维子流形。

**修正：**

> 纤维 $f^{-1}(c)$ 在任意一点附近都是 $n-p$ 维子流形, 所以 $f^{-1}(c)$ 是 $n-p$-维子流形。

**理由：** p个独立方程在n维空间的零集维数为n减p，定理199自由坐标维数及本页最后线性代数类比均确认这一结果。

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> 每个 $c \in \Omega$

**修正：**

> 每个 $c\in f(\Omega)$

**理由：** 纤维的底点属于目标像而非定义域Ω，下面无交并指标也明确为fΩ，须使用同一集合。

**原文：**

> $$M^d = \{x \in U \mid f_1(x) = \dots = f_{n-d}(x) = 0\}.$$

**修正：**

> $$M^d\cap U=\{x\in U \mid f_1(x) = \dots = f_{n-d}(x) = 0\}.$$

**理由：** 局部定义方程只描述M与U的交集，一般M可跨越多个坐标图；原图全体M等于U内零集超过了局部结论。

**原文：**

> 在每个点 $x \in M$ 处

**修正：**

> 在每个点 $x\in M\cap U$ 处

**理由：** 所选f只定义于坐标邻域U，微分可在M与U交集求值，不能在U外其他流形点求值。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> f_{n-d}(d)

**正文：**

> $$M^d\cap U=\{x\in U \mid f_1(x) = \dots = f_{n-d}(x) = 0\}.$$

**理由：** 定义映射同一自变量是x，原图末分量误写d，正文已正确转录x且不应改回维数变量。

## 未决数学问题

**原文：**

> 比如纤维是紧的

**问题：** 紧的正则纤维只使其附近有统一满秩邻域，不能排除远处临界点逃向无穷而临界值趋近c。原书没有proper或对附近纤维局部限制的确切条件，需作者意图裁定，保留疑点。

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> $$
> \varphi : U \cap M = V \cap (\mathbb{R}^d \times \{0\}).
> $$

**修正：**

> $$
> \varphi(U\cap M)= V \cap (\mathbb{R}^d \times \{0\}).
> $$

**理由：** 子流形坐标图需要集合的像等式，冒号未表达映射作用，前述定义中同一等式确定括号。

**原文：**

> $f_i = \varphi^* y_i = y_i \circ \varphi$ 即可，其中 $i = d+1, \cdots, n$

**修正：**

> $f_i=\varphi^*y_{d+i}=y_{d+i}\circ\varphi$ 即可，其中 $i=1,\cdots,n-d$

**理由：** 命题及下一注记的函数标号为1至n减d，法向坐标标号为d加1至n，需要把两种指标对应，避免后文f1没有定义。

**原文：**

> 我们沿用命题中的记号，如果令

**修正：**

> 我们沿用上述由坐标拉回选取的函数，对整数 $0\leqslant k\leqslant n-d$，如果令

**理由：** 任意局部定义函数仅在M上满秩，较少方程在其他点未必满秩；刚构造的坐标拉回在整个U独立，故使用这组选定函数及合法整数范围保证注记成立。

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> 存在开集 $U \subset \mathbb{R}^n$，$x^* \in U$

**修正：**

> 存在开集 $U\subset\Omega$，$x^* \in U$

**理由：** f只定义在Ω，参数化结论中的U必须包含于Ω，证明也是取Ω中的局部逆邻域。

**原文：**

> 通过调换 $\{x_i\}$ 坐标的指标

**修正：**

> 通过调换目标空间坐标及 $\{f_i\}$ 分量的指标

**理由：** n加p乘n的Jacobi矩阵满列秩给出n个独立行；排列自变量只调列，不能将原来依赖的前n行变独立，例如f(t)等于(0,t)。应选择并排列目标分量。

**原文：**

> 其中 $\pi : \mathbb{R}^{n+p} \to \mathbb{R}^n$

**修正：**

> 其中 $\pi_y : \mathbb{R}^{n+p} \to \mathbb{R}^n$

**理由：** 前文复合和图示均使用pi下标y表示取前n个目标坐标，这里定义须采用同一个映射名称。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> 图示F目标为\mathbb R^p
> ```

**正文：**

> $$
> \begin{array}{ccc}
> \Omega & \xrightarrow{\quad f \quad} & \mathbb{R}^{n+p} \\
> & \underset{F}{\searrow} & \downarrow \pi_y \\
> & & \mathbb{R}^n
> \end{array}
> $$

**理由：** F取前n个目标分量，图示终点应Rn，当前正文已纠正源图的Rp。

**原讲义片段：**

> ```text
> F:V\to F(U)
> ```

**正文：**

> $F : U \to F(U)$

**理由：** 局部逆定理的原像域为U，V被定义为F的像；当前正文已纠正原图源域V。

**原讲义片段：**

> ```text
> f(x)\in\mathbb R^{n+1}
> ```

**正文：**

> $f(x) \in \mathbb{R}^{n+p}$

**理由：** f有n加p个分量，源图n加1只对p等于1成立；正文已按本定理一般p修正。

[相关正文：34：隐函数定理与子流形参数化](../../02-math-analysis-ii/34-implicit-function.md)

## 数学修正

**原文：**

> 任意选定 $x \in \Omega$

**修正：**

> 任意选定 $x\in f^{-1}(0)$

**理由：** 由正方向导数推出小幅两侧函数异号必须有f(x)等于0；例如f(x)等于x加1在x等于1的微小邻域不会异号。

**原文：**

> $v \in \mathbb{R}^n$

**修正：**

> $v\in\mathbb R^3$

**理由：** 本段函数和曲面均在三维欧氏空间，方向向量属于同一切空间R3，小写n无对应定义。

**原文：**

> $\gamma : [0, 1] \to X$

**修正：**

> $\gamma:[0,1]\to\mathbb R^3$

**理由：** X未定义且f在R3定义，介值定理复合曲线需在函数定义域中；这里只要求连接端点的连续R3曲线。

**原文：**

> 被 $f$ 的图像分成了两个部分

**修正：**

> 被 $M=f^{-1}(0)$ 分成了两个部分

**理由：** R3上的函数图像在R4，不能分割R3中的小邻域；局部隐函数定理分割邻域的是该函数的零点曲面M。

**原文：**

> $$\beta : [0, 2\pi] \to \mathbb{R}^3, \quad (\cos \theta, \sin \theta, 0) + \varepsilon \nu(\theta).$$

**修正：**

> $$\beta : [0, 2\pi] \to \mathbb{R}^3, \quad\theta\mapsto(\cos\theta,\sin\theta,0)+\varepsilon\nu(\theta).$$

**理由：** beta为角度到三维点的曲线，原图公式缺映射自变量及箭头，补全前述参数表达不改变曲线点。

**原文：**

> $\beta(2\pi) = \beta(0)$，曲线所对应的 $\varepsilon$ 却变换了符号

**修正：**

> $\beta(2\pi)=\gamma(0)-\varepsilon\nu(0)$，而 $\beta(0)=\gamma(0)+\varepsilon\nu(0)$，两点位于曲面的相反侧

**理由：** gamma两端相同但半角法向量nu两端互为相反数，固定非零epsilon使beta端点不同且处于相反侧；若端点相同则函数值无法一正一负。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \nu(\theta)=\cos\frac\theta2e_0(\theta)-\sin\frac\theta2e_1(\theta)
> ```

**正文：**

> $$\nu(\theta) = \cos \frac{\theta}{2} e_2(\theta) - \sin \frac{\theta}{2} e_1(\theta)$$

**理由：** 图上首项e0是中心圆切向，与法向要求冲突；e2是垂直轴，和带的径向切向量正交，正文已正确纠正为e2。
