# 勘误：37 Hesse 矩阵、极值与凸函数

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> 对任意的 $v \in \mathbb{R}^n$, $H_f(v, v) > 0$

**修正：**

> 对任意的非零 $v\in\mathbb R^n$，$H_f(v,v)>0$

**理由：** 正定必须只对非零向量严格为正，零向量的二次型恒为0，原图全体向量量词使任何矩阵都不满足。

**原文：**

> $\nabla^2 f(p_0) \geqslant 0$

**修正：**

> $\nabla^2f(x_0)\geqslant0$

**理由：** 极值点是x0，p0未定义，二阶必要条件在同一基点x0求值，证明也是如此。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \frac{\partial^2f}{\partial x_1^2}(p)作为第二对角项
> ```

**正文：**

> $$
> \nabla^2 f(p) = H_f(p) = \left( \frac{\partial^2 f}{\partial x_i \partial x_j}(p) \right) = \begin{pmatrix}
> \frac{\partial^2 f}{\partial x_1^2}(p) & \frac{\partial^2 f}{\partial x_1 \partial x_2}(p) & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n}(p) \\
> \frac{\partial^2 f}{\partial x_2 \partial x_1}(p) & \frac{\partial^2 f}{\partial x_2^2}(p) & \cdot & \frac{\partial^2 f}{\partial x_2 \partial x_n}(p) \\
> \cdots & \cdot & \cdots & \cdot \\
> \frac{\partial^2 f}{\partial x_n \partial x_1}(p) & \frac{\partial^2 f}{\partial x_n \partial x_2}(p) & \cdots & \frac{\partial^2 f}{\partial x_n^2}(p)
> \end{pmatrix}
> $$

**理由：** Hesse矩阵第2行第2列为对x2二次导数，源图重复x1，正文已经正确修正。

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> 当 $|t| < \varepsilon$ 时

**修正：**

> 当 $0<|t|<\varepsilon$ 时

**理由：** 严格负二阶差值及严格余项界只对非零t成立，t等于0时两边均零且点等于基点，不能有严格小于。

**原文：**

> 并且 $\nabla^2 f(p_0) > 0$

**修正：**

> 并且 $\nabla^2 f(x_0) > 0$

**理由：** 命题中的临界基点是x0，p0未定义，正定Hesse及其特征值须都在x0处。

**原文：**

> 由于 $\nabla^2 f(p_0) > 0$

**修正：**

> 由于 $\nabla^2 f(x_0) > 0$

**理由：** 命题中的临界基点是x0，p0未定义，正定Hesse及其特征值须都在x0处。

**原文：**

> 使得 $x_0$ 是 $f$ 在 $\Omega$ 上的最小值

**修正：**

> 使得 $x_0$ 是 $f$ 在 $U$ 上的最小值

**理由：** 正定Hesse只保证局部严格极小而非Ω全域极小，刚取的U才是二阶判定得到的邻域。

**原文：**

> 其中 $\lambda_1$ 是最小的特征向量

**修正：**

> 其中 $\lambda_1$ 是最小的特征值

**理由：** lambda1是正实特征值而v_i才是特征向量，源图把数值和向量名称混淆。

**原文：**

> 我们可以把 $x$ 写成

**修正：**

> 我们可以把 $w$ 写成

**理由：** 该段展开的任意向量为w，下式左边也是w，x在Taylor中另作附近点，须统一对象。

**原文：**

> $$
> w = a_1 v_1 + \cdots + a_n v_n, \quad \sqrt{\sum_{i \leqslant n} (a_i)^2} = |x|.
> $$

**修正：**

> $$
> w = a_1 v_1 + \cdots + a_n v_n, \quad \sqrt{\sum_{i \leqslant n}(a_i)^2}=|w|.
> $$

**理由：** 标准正交基下展开的是w，其系数欧氏长度等于w长度，原图误用了未展开的x。

**原文：**

> 根据 Taylor 公式 (一阶导数项自动为零), 我们有

**修正：**

> 另外，$\langle w,\nabla^2f(x_0)(w)\rangle=\sum_i\lambda_i a_i^2\geqslant\lambda_1|w|^2$。根据 Taylor 公式 (一阶导数项自动为零), 我们有

**理由：** 前面的矩阵作用范数下界本身不能推出二次型下界，正定特征分解给该二次型下界，保留原范数计算并补齐后续使用的式子。

**原文：**

> $$
> \begin{aligned}
> f(x) &= f(x_0) + \frac{1}{2} \langle x - x_0, \nabla^2 f(x_0)(x - x_0) \rangle + o(|x - x_0|^2) \\
> &\geqslant f(x_0) + \lambda_1 |x - x_0|^2 + o(|x - x_0|^2)
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> f(x) &= f(x_0) + \frac{1}{2} \langle x - x_0, \nabla^2 f(x_0)(x - x_0) \rangle + o(|x - x_0|^2) \\
> &\geqslant f(x_0)+\frac{\lambda_1}{2}|x-x_0|^2+o(|x - x_0|^2)
> \end{aligned}
> $$

**理由：** Taylor二阶项有二分之一，二次型下界必须保留同一系数，原图漏一半导致该不等式一般不成立。

**原文：**

> 当 $|x - x_0| < \varepsilon$ 时

**修正：**

> 当 $0<|x-x_0|<\varepsilon$ 时

**理由：** 严格极小差值的正下界只对不同于x0的点成立，基点自身只能等号。

**原文：**

> $o(|x - x_0|^2) < \frac{1}{2} |\lambda| \frac{|x - x_0|^2}{2}$

**修正：**

> $|o(|x-x_0|^2)|<\frac{1}{2}\lambda_1\frac{|x-x_0|^2}{2}$

**理由：** 正二阶主项需要控制余项绝对值才能获得下界，仅余项小于正数不能排除很负的余项；lambda未定义，应为最小正特征值lambda1。

**原文：**

> $$
> f(x) > f(x_0) + \lambda \times \frac{|x - x_0|^2}{4} > f(x_0)
> $$

**修正：**

> $$
> f(x) > f(x_0)+\lambda_1\times\frac{|x-x_0|^2}{4} > f(x_0)
> $$

**理由：** 本证明正下界由lambda1最小正特征值提供，lambda属于上一反证例的负特征值，不能在此使用。

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> 另外, 如果对任意的 $x, y \in \Omega$

**修正：**

> 另外, 如果对任意不同的 $x,y\in\Omega$

**理由：** 严格凸定义必须排除x等于y，否则任意函数都会被要求f(x)严格小于自身。

**原文：**

> 是 $\Omega$ 上的线性函数

**修正：**

> 是 $\Omega$ 上的仿射函数

**理由：** 含常数b的函数一般不保持零点和加法，是仿射函数；仿射函数仍为凸函数，数学例子结论保持。

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> 选取 $\varepsilon \pm e_i$

**修正：**

> 选取 $\pm\varepsilon e_i$

**理由：** 要将标准基缩小进入Ω应乘epsilon，源epsilon加减向量既不做缩放且数向量加法无定义。

**原文：**

> 我们还可以用 $x, -e_1, \cdots, -e_n$

**修正：**

> 仍假设 $x$ 在第一象限（其他象限相应改变基向量的符号），我们还可以用 $x,-e_1, \cdots, -e_n$

**理由：** 下面凸组合权重lambda_i等于lambda0乘xi，非负性需要xi非负；上段已把上界推广所有象限，此处须重新声明第一象限再同样推广。

**原文：**

> $$\begin{aligned}
> f(0) &\leqslant \lambda_0 f(x) + \lambda_1 f(-e_1) + \lambda_2 f(-e_2) + \cdots + \lambda_n f(-e_n) \\
> &= \lambda_0 (f(x) + x_1 f(-e_1) + x_1 f(-e_2) + \cdots + x_n f(-e_n)).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> f(0) &\leqslant \lambda_0 f(x) + \lambda_1 f(-e_1) + \lambda_2 f(-e_2) + \cdots + \lambda_n f(-e_n) \\
> &= \lambda_0(f(x)+x_1f(-e_1)+x_2f(-e_2) + \cdots + x_n f(-e_n)).
> \end{aligned}$$

**理由：** lambda_i等于lambda0乘xi，所以e2项系数为x2，源重复x1导致不等式与上一行权重不一致。

**原文：**

> $$f(0) - f(x) \leqslant \underbrace{(\lambda_0 - 1)f(x) + \lambda_0 (x_1 f(-e_1) + x_1 f(-e_2) + \cdots + x_n f(-e_n))}_{\text{类似前述, } \leqslant C'|x|}.$$

**修正：**

> $$f(0) - f(x) \leqslant \underbrace{(\lambda_0 - 1)f(x) + \lambda_0(x_1f(-e_1)+x_2f(-e_2) + \cdots + x_n f(-e_n))}_{\text{类似前述, } \leqslant C'|x|}.$$

**理由：** 第二个公式的e2项亦误用x1，须与定义lambda2等于lambda0乘x2保持一致。

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> $$|(\lambda_0 - 1)f(x)| \leqslant \frac{x_1 + \cdots + x_2}{1 + x_1 + \cdots + x_n} |f(x)| \leqslant C''|x||f(x)|.$$

**修正：**

> $$|(\lambda_0 - 1)f(x)| \leqslant \frac{x_1+\cdots+x_n}{1+x_1+\cdots+x_n} |f(x)| \leqslant C''|x||f(x)|.$$

**理由：** lambda0减1的分子是全部n个坐标和，源末下标写2与lambda0定义不同，一般n不等2。

**原文：**

> $$T\Gamma_f(x_0) = \{(x_0, f(x_0)) + df(x_0)(x - x_0) \mid x \in \mathbb{R}^n\}.$$

**修正：**

> $$T\Gamma_f(x_0) = \{(x,f(x_0)+df(x_0)(x-x_0)) \mid x \in \mathbb{R}^n\}.$$

**理由：** 图像切平面属于Rn加1，由自变量x及线性化函数值配对构成；源把Rn加1的点和标量df值直接相加，缺自变量位移分量。

**原文：**

> 都在切平面 $T\Gamma_f(x_0)$，即

**修正：**

> 都在切平面 $T\Gamma_f(x_0)$ 上方，即

**理由：** 凸函数的支撑平面不等式为函数值大于等于线性化值，图像一般不是落在平面自身，源句遗漏上方一词。

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> f(x) &= \underbrace{f(x_0) + \langle \nabla f(x_0), x - x_0 \rangle}_{L_{x_0}(x - x_0)} + \frac{1}{2}\langle x - x_0, \nabla^2 f(x_0)(x - x_0)\rangle + o(|x - x_0|^2) \\
> &\geqslant L_{x_0}(x - x_0).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> f(x) &= \underbrace{f(x_0) + \langle \nabla f(x_0), x - x_0 \rangle}_{L_{x_0}(x)} + \frac{1}{2}\langle x - x_0, \nabla^2 f(x_0)(x - x_0)\rangle + o(|x - x_0|^2) \\
> &\geqslant L_{x_0}(x).
> \end{aligned}$$

**理由：** 前页L_x0(x)定义为f(x0)加df作用x减x0，下划线的同一线性化值参数应x，再代x减x0会重复平移。

**原文：**

> $$\begin{aligned}
> f(x) &= \underbrace{f(x_0) + \langle \nabla f(x_0), x - x_0 \rangle}_{L_{x_0}(x - x_0)} + \frac{1}{2}\langle x - x_0, \nabla^2 f(x_0)(x - x_0)\rangle + o(|x - x_0|^2) \\
> &\geqslant L_{x_0}(x - x_0).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> f(x) &= \underbrace{f(x_0) + \langle \nabla f(x_0), x - x_0 \rangle}_{L_{x_0}(x)} + \frac{1}{2}\langle x - x_0, \nabla^2 f(x_0)(x - x_0)\rangle + o(|x - x_0|^2) \\
> &\geqslant L_{x_0}(x).
> \end{aligned}$$

**理由：** 凸支撑平面不等式作用当前点x，源把线性化函数参数二次平移，与本段Taylor恒等式不符。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> df(x)(y-x)\leqslant f(x)
> ```

**正文：**

> $$df(x)(y - x) \leqslant f(y) - f(x).$$

**理由：** 对凸组合不等式减f(x)除正t得到方向导数不大于f(y)减f(x)，正文已正确补全源右边遗漏的差值。

[相关正文：Hesse 矩阵、极值与凸函数](../../02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424.md)

## 数学修正

**原文：**

> 所以 $\nabla^2 f(x_0)$ 是正定的

**修正：**

> 所以 $\nabla^2f(x_0)$ 是半正定的

**理由：** 对所有单位向量仅得二次型大于等于零，允许零特征值，如常数凸函数；不能据此推出正定。

**原文：**

> $$f(x) - L_{x_0}(x - x_0) = \frac{1}{2}\langle x - x_0, \nabla^2 f(x')(x - x_0)\rangle \geqslant 0,$$

**修正：**

> $$f(x)-L_{x_0}(x) = \frac{1}{2}\langle x - x_0, \nabla^2 f(x')(x - x_0)\rangle \geqslant 0,$$

**理由：** 二阶Lagrange余项是函数减同点x的一阶线性化，前页L定义已包含减x0，源重复平移。

[相关正文：37.1：习题课：球极投影](../../02-math-analysis-ii/37-hessian-convexity/37-03-p0425-0427.md)

## 数学修正

**原文：**

> $$
> \omega : (-\varepsilon, \varepsilon) \to V, \quad \lambda \mapsto \omega(\lambda),
> $$

**修正：**

> $$
> \omega:(-\varepsilon,\varepsilon)\to U, \quad \lambda \mapsto \omega(\lambda),
> $$

**理由：** 重复题面只声明零点邻域U，没有V，分支值域须属于同一U。

**原文：**

> $f_\lambda$ 在 $V$ 中

**修正：**

> $f_\lambda$ 在 $U$ 中

**理由：** 参数不动点唯一性限制在声明的U，原图未定义V，和402同一题一致纠正。

**原文：**

> $$
> P(z_1(c_1, \cdots, c_n), z_2(c_1, \cdots, c_n), \cdots, z_n(c_1, \cdots, c_n)) = 0.
> $$

**修正：**

> $$
> P_c(z_1(c_1,\cdots,c_n))=P_c(z_2(c_1,\cdots,c_n))=\cdots=P_c(z_n(c_1,\cdots,c_n))=0.
> $$

**理由：** 单变量Pc的n个根应分别代入得到零，原图把所有根作为多元参数一起代入，和395及404重复题面同一错误。

[相关正文：37.1：习题课：球极投影](../../02-math-analysis-ii/37-hessian-convexity/37-03-p0425-0427.md)

## 数学修正

**原文：**

> 计算了 $f(p)$ 处

**修正：**

> 计算了 $\Phi(p)$ 处

**理由：** 本段唯一坐标图是Phi，未定义f，映射切空间不变性也在Phi(p)处计算。

**原文：**

> $T_{f(p)} \mathbb{R}^n$

**修正：**

> $T_{\Phi(p)}\mathbb R^n$

**理由：** 目标切空间应以坐标图Phi的像点为基点，源f没有定义，和同段公式Phi(p)统一。

**原文：**

> $d\Phi(p) : T_p \mathbb{R}^n \to T_p \mathbb{R}^n$

**修正：**

> $d\Phi(p):T_p\mathbb R^n\to T_{\Phi(p)}\mathbb R^n$

**理由：** 微分把源基点p切空间送到像点Phi(p)切空间，两端虽然同构Rn但基点不能相同误标。

**原文：**

> 我们知道，$T_S S^2$ 就是平面 $z = -1$

**修正：**

> 我们知道，过南极的仿射切平面 $S+T_SS^2$ 就是平面 $z=-1$

**理由：** 前文TpM定义为原点处的向量子空间，因此TSS2是z等于0；z等于负1是将这个子空间平移到南极后的仿射平面。

**原文：**

> $d\pi(p) : T_p S^2 \to \Sigma$

**修正：**

> $d\pi(p):T_pS^2\to T_{\pi(p)}\Sigma=\mathbb R^2\times\{0\}$

**理由：** 微分的值是切向量，不能落到不含零向量的仿射平面z等于负1；目标应Sigma在像点的向量切空间。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> S=(0,0,1)为南极

**正文：**

> $S = (0, 0, -1)$

**理由：** 图示南极和z负1切平面确定负号，正文已纠正源重复北极坐标。

**原讲义片段：**

> ```text
> 对于p\in S,p\ne N
> ```

**正文：**

> $p \in S^2$

**理由：** 此处点在球面S2而S是单个南极，正文已经纠正源省略平方上标。

[相关正文：37.1：习题课：球极投影](../../02-math-analysis-ii/37-hessian-convexity/37-03-p0425-0427.md)

## 数学修正

**原文：**

> 对于任意的 $v, w \in T_p S^2$

**修正：**

> 对于任意非零的 $v,w\in T_pS^2$

**理由：** 夹角公式分母含两向量长度，零向量使表达式未定义；微分同构保持非零，明确非零量词。

[相关正文：37.2：作业：Lagrange乘子法，Morse引理，横截相交性](../../02-math-analysis-ii/37-hessian-convexity/37-04-p0428-0432.md)

## 数学修正

**原文：**

> $g \circ f$ 是 $U$ 上的凸函数

**修正：**

> $g\circ f$ 是 $\Omega$ 上的凸函数

**理由：** 该题给定f定义在Ω，没有U，凸复合也应在同一凸定义域Ω讨论。

**原文：**

> $d : TM \to TN$

**修正：**

> $df:TM\to TN$

**理由：** 该题研究光滑映射f的切映射，单独符号d没有定义，正确对象是此前定义的df。

**原文：**

> ```text
> 图像 \{(x, y, z) \mid z = \varphi(x, y), (x, y) \in U\}
> ```

**修正：**

> 图像 $\{(x,y,z)\mid z=\varphi(x,y),(x,y)\in U\}$

**理由：** 该集合公式原图是数学式，转录漏掉行内数学界定符使TeX命令直接显示，补齐数学渲染而不改变集合内容。

[相关正文：37.2：作业：Lagrange乘子法，Morse引理，横截相交性](../../02-math-analysis-ii/37-hessian-convexity/37-04-p0428-0432.md)

## 数学修正

**原文：**

> 求 $f$ 在单位球面 $\mathbf{S}^2$ 上

**修正：**

> 求 $f$ 在单位球面 $\mathbf S^{n-1}$ 上

**理由：** 二次型有n个变量，Rn单位球面维数为n减1，源固定二维只对n等于3适用。

**原文：**

> $\alpha_1 \alpha_2 \cdots \alpha_n = 1$

**修正：**

> $\alpha_1+\alpha_2+\cdots+\alpha_n=1$

**理由：** 乘积归一化不能保证所述加权AMGM，例如n等于2且权均1、两变量均3时9大于6。对所有共同缩放必须齐次次数一致，唯一需权和1。

**原文：**

> $$f : \mathbb{R}^n - \{0\} \to, \quad x \mapsto f(x) = \frac{\langle A \cdot x, x \rangle}{|x|^2}.$$

**修正：**

> $$f : \mathbb R^n-\{0\}\to\mathbb R, \quad x \mapsto f(x) = \frac{\langle A \cdot x, x \rangle}{|x|^2}.$$

**理由：** Rayleigh商是实值函数，源箭头后遗漏目标空间，后续df也明确取实数值。

## 未决数学问题

**原文：**

> 试求其最大值

**问题：** 实log要求各x正；n大于1时开单纯形上只有上确界，没有最大值。若允许0需规定0log0的连续延拓，若原题应求最小值又是另一题意；不能唯一选取，保留疑点。

[相关正文：37.2：作业：Lagrange乘子法，Morse引理，横截相交性](../../02-math-analysis-ii/37-hessian-convexity/37-04-p0428-0432.md)

## 数学修正

**原文：**

> $$f(x) = f(\bar{x}) + \frac{\partial^2 f}{\partial x_i \partial x_j}(\bar{x})(x_i - \bar{x}_i)(x_j - \bar{x}_j) + o(|x - \bar{x}|^2).$$

**修正：**

> $$f(x) = f(\bar{x})+\frac12\sum_{i,j=1}^n\frac{\partial^2f}{\partial x_i\partial x_j}(\bar{x})(x_i-\bar{x}_i)(x_j-\bar{x}_j) + o(|x - \bar{x}|^2).$$

**理由：** 二阶Taylor须二分之一及全部矩阵分量求和，源公式遗漏系数且i、j未绑定，简单f等于x平方即可验证源系数错误。

[相关正文：37.2：作业：Lagrange乘子法，Morse引理，横截相交性](../../02-math-analysis-ii/37-hessian-convexity/37-04-p0428-0432.md)

## 数学修正

**原文：**

> $$(f \cdot \varphi_1)(u) = c_1 (u_1)^2 + \sum_{i,j=2}^n u_i u_j H_{ij}(u), \quad u = (u_1, \cdots, u_n) \in U_1.$$

**修正：**

> $$(f\circ\varphi_1)(u) = c_1 (u_1)^2 + \sum_{i,j=2}^n u_i u_j H_{ij}(u), \quad u=(u_1,\cdots,u_n)\in V_1.$$

**理由：** Morse坐标变换是函数复合，f与向量值坐标图的乘积没有该标量函数意义，源点乘符号误写。

**原文：**

> $$(f \cdot \varphi_r)(u) = \sum_{k=1}^r c_k (u_k)^2 + \sum_{i,j=r+1}^n u_i u_j H_{ij}(u), \quad u = (u_1, \cdots, u_n) \in U_r,$$

**修正：**

> $$(f\circ\varphi_r)(u) = \sum_{k=1}^r c_k (u_k)^2 + \sum_{i,j=r+1}^n u_i u_j H_{ij}(u), \quad u=(u_1,\cdots,u_n)\in V_r,$$

**理由：** 归纳坐标变换同样为复合函数，保持和430引理声明相同的复合记号。

**原文：**

> $$(f \cdot \varphi_1)(u) = c_1 (u_1)^2 + \sum_{i,j=2}^n u_i u_j H_{ij}(u), \quad u = (u_1, \cdots, u_n) \in U_1.$$

**修正：**

> $$(f\circ\varphi_1)(u) = c_1 (u_1)^2 + \sum_{i,j=2}^n u_i u_j H_{ij}(u), \quad u=(u_1,\cdots,u_n)\in V_1.$$

**理由：** phi1的域为新坐标V1、像为旧坐标U1，u自变量须在V1，源误把像域标为自变量域。

**原文：**

> $$(f \cdot \varphi_r)(u) = \sum_{k=1}^r c_k (u_k)^2 + \sum_{i,j=r+1}^n u_i u_j H_{ij}(u), \quad u = (u_1, \cdots, u_n) \in U_r,$$

**修正：**

> $$(f\circ\varphi_r)(u) = \sum_{k=1}^r c_k (u_k)^2 + \sum_{i,j=r+1}^n u_i u_j H_{ij}(u), \quad u=(u_1,\cdots,u_n)\in V_r,$$

**理由：** phir从Vr到Ur，复合f(phir(u))只有当u属于Vr才按定义成立，源域写反。

[相关正文：37.2：作业：Lagrange乘子法，Morse引理，横截相交性](../../02-math-analysis-ii/37-hessian-convexity/37-04-p0428-0432.md)

## 数学修正

**原文：**

> $i_1 : M_1 \subset M$

**修正：**

> $i_1:M_1\hookrightarrow M$

**理由：** 包含映射的箭头应表达点到同一点的函数，源用集合包含符号代箭头，需和本题讨论映射横截对应。

**原文：**

> 其中 $g : \mathbb{R}^m \to \mathbb{R}^{m-\operatorname{dim} S}$

**修正：**

> 其中 $g$ 是 $M$ 的某个开邻域到 $\mathbb R^{\operatorname{dim}M-\operatorname{dim}S}$ 的光滑映射

**理由：** 横截判据在目标M内使用S的定义函数，函数数目为M内余维；M可低于环境m维，使用环境余维会加入df无法跨越的法向条件，不能给满秩复合判据。

**原文：**

> T9) 如果 $N$ 是紧的, $f \pitchfork S$

**修正：**

> T9) 如果 $N$ 是紧的、$S$ 在 $M$ 中是闭的，$f\pitchfork S$

**理由：** 非闭S时稳定性可失败：N取紧圆，f恒为原点，S为平面正横轴且不含原点，F(x,t)等于(t,0)在t正时不横截。S闭配合N紧才保证远离原交集的统一分离。
