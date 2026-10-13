# 勘误：36 切丛与 Lagrange 乘子法

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> $f$ 在 $M$ 上的限制

**修正：**

> $F$ 在 $M$ 上的限制

**理由：** 本注记给的是环境光滑映射F，再限制到M得到f，原图小写f已经以M为域，不能作为构造前的环境映射。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> 我们通常把它称为是 $\mathbf{S}^2$ 上的一个旋转。

**修正：**

> 这是 $\mathbf S^2$ 上的一个正交变换；当 $\det A=1$ 时，我们通常把它称为旋转。

**理由：** O3包含行列式负1的反射，旋转对应SO3；长度保持只能推出正交变换，补充正行列式条件保持例子的全部光滑结论。

**原文：**

> $f_{\Phi'}$ 是 $f_\Phi$ 与 $\Psi$ 的复合

**修正：**

> $f_{\Phi\prime}=f_\Phi\circ\Psi^{-1}$

**理由：** 正文Psi从旧坐标到新坐标，f新坐标应先用Psi逆回旧坐标再作用f旧坐标，直接与Psi复合会错定义域。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \Phi(U\prime\cap M)=V\prime\cap(\mathbb R^d\times\{0\})
> ```

**正文：**

> $\Phi'(U' \cap M) = V' \cap (\mathbb{R}^d \times \{0\})$

**理由：** 源新坐标图条件遗漏Phi撇，正文已用新图Phi撇保持域和值域对应。

**原讲义片段：**

> ```text
> \Psi=\Phi\prime{}^{-1}\circ\Phi
> ```

**正文：**

> $$
> \begin{array}{ccccc}
> & & \stackrel{\Psi = \Phi' \circ \Phi^{-1}}{\curvearrowright} & &
> \\
> \tilde{V} \cap (\mathbb{R}^d \times \{0\}) & \xrightarrow{\Phi^{-1}} & M \cap \tilde{U} & \xleftarrow{\Phi'^{-1}} & \tilde{V}' \cap (\mathbb{R}^d \times \{0\}) \\
> & \searrow_{f_\Phi} & \downarrow f & \swarrow_{f_{\Phi'}} &
> \\
> & & N \subset \mathbb{R}^n & &
> \end{array}
> $$

**理由：** 源图组合顺序和各映射域均不相容，正文已选从旧坐标到新坐标的转换Phi撇复合Phi逆，后文需用其逆进行函数换坐标。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> $$
> V \cap \mathbb{R}^m \times \{0\} \to \mathbb{R}^n, \quad (x_1, \dots, x_d) \mapsto f_\Phi(x_1, \dots, x_d).
> $$

**修正：**

> $$
> V\cap(\mathbb R^d\times\{0\})\to \mathbb{R}^n, \quad (x_1, \dots, x_d) \mapsto f_\Phi(x_1, \dots, x_d).
> $$

**理由：** V是m维坐标图，M对应d维平面，原图与Rm乘零相交会把M切片错写成整个背景空间。

**原文：**

> 我们可以把 $f_\Phi$ 拓展成 $V$ 上的函数：

**修正：**

> 把 $V$ 缩小为切向坐标与法向坐标的乘积邻域，使得 $(x_1,\dots,x_d,0,\dots,0)\in V$ 对每个 $x\in V$ 成立后，我们可以把 $f_\Phi$ 拓展成 $V$ 上的函数：

**理由：** 任意开V向平面投影不一定仍在V，所写延拓可能未定义。局部性允许围绕Phi(p)缩小为产品邻域，后续忽略法向坐标的公式才有效。

**原文：**

> $$
> \tilde{F} : V \to \mathbb{R}^n, \quad (x_1, \dots, x_d, x_{d+1}, \dots, x_n) \mapsto f_\Phi(x_1, \dots, x_d).
> $$

**修正：**

> $$
> \tilde{F} : V \to \mathbb{R}^n, \quad (x_1, \dots, x_d, x_{d+1},\dots,x_m) \mapsto f_\Phi(x_1, \dots, x_d).
> $$

**理由：** 延拓定义域V在Rm中，共m个坐标，n是目标维数，原图混淆域和目标指标。

**原文：**

> $V \cap \mathbb{R}^m \times \{0\}$ 上的限制

**修正：**

> $V\cap(\mathbb R^d\times\{0\})$ 上的限制

**理由：** 局部延拓应限制回d维流形坐标平面，原图Rm乘零不是该平面，与同页fPhi域相同修正。

**原文：**

> $f, g \in C^\infty(\Omega_1)$

**修正：**

> $f,g\in C^\infty(M)$

**理由：** 本注记证明M上光滑函数代数结构，Ω1没有引入，须对同一空间M上函数作加法乘法。

**原文：**

> $$
> V = \{(x, y) \subset \mathbb{R}^2 \mid y = |x|\}.
> $$

**修正：**

> $$
> V = \{(x,y)\in\mathbb R^2 \mid y = |x|\}.
> $$

**理由：** 平面坐标对是点，属于R2，原图用子集关系混淆点和集合。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> R^2\times\{0\}上用x_1,\dots,x_d
> ```

**正文：**

> $\mathbb{R}^d \times \{0\}$ 上用

**理由：** 正文已将源固定二维误字改为通用d维切向平面，符合定义212。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> 使得 $\gamma(0) = p$ 且

**修正：**

> 使得 $\gamma(( -\varepsilon,\varepsilon))\subset M$、$\gamma(0)=p$ 且

**理由：** 微分定义需要M内曲线代表切向量，f只定义于M；仅指定Rn内曲线的零点与导数不能保证复合f有定义。

**原文：**

> 子流形之间的映射 $F$ 是由

**修正：**

> 子流形之间的映射 $f$ 是由

**理由：** 子流形映射为f，环境延拓为F，原图此处把两个不同域的映射用了同一个大写名称。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> 其中我们假设了 $f$ 是背景空间上某个光滑映射 $F : \mathbb{R}^m \to N \subset \mathbb{R}^n$ 的限制。

**修正：**

> 其中按定义可在 $p$ 的某个开邻域 $U\subset\mathbb R^m$ 上选取光滑映射 $F:U\to\mathbb R^n$，使得 $F|_{M\cap U}=f|_{M\cap U}$。

**理由：** 定义212只保证局部延拓到目标背景Rn，不保证全Rm延拓，更不保证延拓值都在N；证明线性只需要基点附近一个环境延拓。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> 我证明 $TM$ 在 $p$ 附近是子流形

**修正：**

> 我证明 $TM$ 在 $(p,v)$ 附近是子流形

**理由：** TM的点是基点与切向量的二元组，p本身是M的点，原图在TM的局部判断须使用(p,v)。

**原文：**

> 其中 $p \in M$ 以及

**修正：**

> 其中 $p\in U$ 以及

**理由：** p属于M已由v属于TpM确定，选定局部定义函数的U必须含p，原图遗漏了坐标邻域基点条件。

**原文：**

> $M \cap U = \bigcap_{i \leqslant n-1} f_i^{-1}(0)$

**修正：**

> $M \cap U = \bigcap_{i\leqslant n-d}f_i^{-1}(0)$

**理由：** 定义M的独立函数共n减d个，n减1只对d等于1成立，与本页一般d的列表不一致。

**原文：**

> 对任意的 $q$, 该点处的切空间

**修正：**

> 对任意的 $q\in M\cap U$，该点处的切空间

**理由：** TqM只在M上定义，函数微分也仅在U求值，原图遗漏取点范围。

**原文：**

> $$T_q M = \bigcap_{i \leqslant n-d} \ker d_i f(q),$$

**修正：**

> $$T_q M = \bigcap_{i \leqslant n-d} \ker df_i(q),$$

**理由：** 应取每个标量定义函数fi的微分核，d_i f未定义且没有这样的分量记号，与后文df_i列表一致。

**原文：**

> $$TM \cap (U \times \mathbb{R}^n) = \left\{ (x, y) \in U \times \mathbb{R}^n \;\middle|\; \begin{cases} f_1(x) = 0, \cdots, f_{n-d}(x), \\ df_1(x)(y) = 0, \cdots, df_{n-d}(x)(y) = 0. \end{cases} \right\}.$$

**修正：**

> $$TM \cap (U \times \mathbb{R}^n) = \left\{ (x, y) \in U \times \mathbb{R}^n \;\middle|\; \begin{cases} f_1(x)=\cdots=f_{n-d}(x)=0, \\ df_1(x)(y) = 0, \cdots, df_{n-d}(x)(y) = 0. \end{cases} \right\}.$$

**理由：** 切丛约束需要x属于M即全部定义函数为零，源首行末项遗漏等于零，改为明确的共同零点等式。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> df_{n-i}(q)

**正文：**

> $df_1(q), \cdots, df_{n-d}(q)$

**理由：** 源图两处末定义函数下标误写n减i，正文已用独立函数个数n减d纠正。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> 所以, 我们任意选取 $F \in C^\infty(\mathbb{R}^n)$ 和 $X \in C^\infty(\mathbb{R}^n; \mathbb{R}^n)$, 使得 $\left.F\right|_M = f$, $\left.X\right|_M = X$。那么, 上面的定义就是在计算 $F$ 在 $\mathbb{R}^n$ 沿着 $X$ 的方向导数, 所以 $\nabla_X F$ 光滑的, 它的限制就给出了 $\nabla_X f$, 从而光滑。

**修正：**

> 所以, 对每个 $p\in M$，在它的某个开邻域 $U\subset\mathbb R^m$ 上选取光滑函数 $F$ 和光滑向量值函数 $Y:U\to\mathbb R^m$，使得 $F|_{M\cap U}=f|_{M\cap U}$、$Y|_{M\cap U}=X|_{M\cap U}$。那么, 上面的定义就是在计算 $F$ 在 $U$ 沿着 $Y$ 的方向导数, 所以 $\nabla_Y F$ 光滑的, 它的限制就给出了 $\nabla_X f$, 从而光滑。

**理由：** M在Rm而非Rn，定义只保证逐点局部延拓；非闭子流形光滑函数未必全空间可延拓。局部延拓足以逐点验证方向导数光滑，用Y区分环境函数与原切场。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> 由于 $p$ 是 $f \circ \gamma$ 的最大值

**修正：**

> 由于 $0$ 是 $f\circ\gamma$ 的局部最大值点

**理由：** 复合函数的自变量是实参数t，p是M上的点，gamma(0)等于p，因此复合的极值点是0。

**原文：**

> $\operatorname{rank} dg(p) = m$

**修正：**

> $\operatorname{rank}dg(x)=m$

**理由：** 假设量词绑定的是任意x属于M，没有定义p，满秩条件须在同一x求值。

**原文：**

> Lagrange 乘子法的结论说的是 $f$ 的约束条件极值问题等价于 $L$ 的无条件极值问题, 即我们要找 $(x_1, \cdots, x_n, \lambda_1, \cdots, \lambda_m) \in \mathbb{R}^n \times \mathbb{R}^m$ 来实现 $L$ 的极值就可以了。

**修正：**

> Lagrange 乘子法给出 $f$ 的约束极值的必要条件：存在 $(x_1,\cdots,x_n,\lambda_1,\cdots,\lambda_m)\in\mathbb R^n\times\mathbb R^m$，使得 $dL(x,\lambda)=0$。因此先找 $L$ 的临界点，再检查所对应的 $x$ 是否为约束极值。

**理由：** 约束极值的Lagrange函数临界点通常是无约束鞍点，例如f(x)等于x而约束x等于0。源声明极值等价错误，后一页实际证明的是dL等于零的必要条件。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 使得x是g的局部极大值

**正文：**

> 使得 $x$ 是 $f$ 的局部极大值

**理由：** g定义约束且在约束集恒为0，待求目标是f，正文已纠正源目标函数名。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> $df(T_pM) \equiv 0$, 这表明, $T_pM \subset \operatorname{ker} df(p)$。然而, $T_pM = \operatorname{ker} dg(x)$

**修正：**

> $df(x)(T_xM)\equiv0$，这表明，$T_xM\subset\operatorname{ker}df(x)$。然而，$T_xM=\operatorname{ker}dg(x)$

**理由：** 本段给定极值基点为x，原图突然切换未定义p，切空间与两个微分必须在同一基点x。

**原文：**

> $$\frac{\partial f}{\partial x_i}(x_1, \cdots, x_n) - \lambda \frac{\partial g_k}{\partial x_i}(x_1, \cdots, x_n) = 0,$$

**修正：**

> $$\frac{\partial f}{\partial x_i}(x_1, \cdots, x_n) - \lambda\frac{\partial g}{\partial x_i}(x_1, \cdots, x_n) = 0,$$

**理由：** 例子只给一个约束函数g，不存在带自由k下标的函数gk；同一公式即grad f减lambda grad g。

**原文：**

> $f(x) = d(x, z)^2 = \sqrt{(x_1 - z_1)^2 + \cdots + (x_n - z_n)^2}$

**修正：**

> $f(x) = d(x, z)^2 = (x_1 - z_1)^2 + \cdots + (x_n - z_n)^2$

**理由：** 本例声明平方距离并随后计算梯度2(x减z)，源误加根号变成距离且在z不可微。平方距离公式须去根号，与后面梯度吻合。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> dL(x,L)=0

**正文：**

> $$dL(x, \lambda) = 0.$$

**理由：** L的第二组自变量为乘子lambda，不是函数自身L，正文已正确修正。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> $uv = vw = wz$

**修正：**

> $uv=vw=uw$

**理由：** 面积变量只有u、v、w，梯度相等给vw等于uw等于uv，源wz含未定义z。

**原文：**

> 这表明这个点到三边的距离是一样的, 所以是三角形的内心。

**修正：**

> 这表明这个点到三边的距离分别与对应的高成比例，所以是三角形的重心。

**理由：** 三块面积相等给三条重心坐标均为三分之一，点为重心；距离分别等于对应高的三分之一，不等边三角形距离不相等，内心结论错误。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 数学修正

**原文：**

> $$\frac{\partial f}{\partial v_{i_0 j}} - \lambda_{i_0} \frac{\partial g_{i_0}}{v_{i_0 j}} = 0 \quad \Leftrightarrow \quad v_{i_0 j} \text{ 的余子式与 } v_{i_0 j} \text{ 成比例。}$$

**修正：**

> $$\frac{\partial f}{\partial v_{i_0 j}} - \lambda_{i_0} \frac{\partial g_{i_0}}{\partial v_{i_0j}} = 0 \quad \Leftrightarrow \quad v_{i_0 j} \text{ 的代数余子式与 } v_{i_0 j} \text{ 成比例。}$$

**理由：** Lagrange条件是约束函数对坐标偏导数，源分母遗漏partial，原式不是偏微分记号。

**原文：**

> $$\frac{\partial f}{\partial v_{i_0 j}} - \lambda_{i_0} \frac{\partial g_{i_0}}{v_{i_0 j}} = 0 \quad \Leftrightarrow \quad v_{i_0 j} \text{ 的余子式与 } v_{i_0 j} \text{ 成比例。}$$

**修正：**

> $$\frac{\partial f}{\partial v_{i_0 j}} - \lambda_{i_0} \frac{\partial g_{i_0}}{\partial v_{i_0j}} = 0 \quad \Leftrightarrow \quad v_{i_0 j} \text{ 的代数余子式与 } v_{i_0 j} \text{ 成比例。}$$

**理由：** 行列式对矩阵元素的偏导是带正负号的代数余子式，普通去行列的余子式缺符号不能保证该比例关系。

**原文：**

> 表示 $v_{ij}$ 的余子式, 那么

**修正：**

> 表示 $v_{ij}$ 的代数余子式。在最大值点，由单位矩阵可行可知 $f\geqslant1$，将第 $i$ 行的比例关系与该行内积并用 Laplace 展开，得到 $2\lambda_i=f>0$。那么

**理由：** 从余子式比例关系推出各行正交须除以非零lambda_i，原证明省略了这个必要条件；最大值至少1和同一行Laplace展开给其非零。

**原文：**

> $f$ 的最大值是 1 且等号成立当且仅当

**修正：**

> $f$ 的最大值是 1；对 $|f|$ 而言，等号成立当且仅当

**理由：** 正交矩阵行列式可为负1，仅行正交不能保证f达到最大正1；Hadamard等号针对绝对值，须区分有向行列式与其绝对值。

**原文：**

> 开邻域 $U \subset M$

**修正：**

> 开邻域 $U\subset\mathbb R^m$

**理由：** 定理采用环境开邻域后与M取交，一般低维M不包含环境开集，原图U属于M不符后文交集形式。

**原文：**

> 开邻域 $V \subset M$

**修正：**

> 开邻域 $V\subset\mathbb R^n$

**理由：** 目标邻域围绕q在Rn，后文和N取交，原图误写属于源M且一般无法包含目标点。

**原文：**

> $\Psi : V \to V' \subset \mathbb{R}^m$

**修正：**

> $\Psi:V\to V\prime\subset\mathbb R^n$

**理由：** 目标子流形N位于Rn，目标环境坐标图两端维数须为n，源图误沿用源M的m。

[相关正文：36：切丛与 Lagrange 乘子法](../../02-math-analysis-ii/36-tangent-bundles.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> S\subset M也是R^m的子流形
> ```

**正文：**

> $S \subset N$

**理由：** 原像定理的S属于目标N，正文已纠正源把S放在源M的错误。

**原讲义片段：**

> ```text
> f^{-1}(S)\subset\Omega
> ```

**正文：**

> $f^{-1}(S) \subset M$

**理由：** 本页f定义在M且没有Ω，正文已把源未定义Ω改为M。
