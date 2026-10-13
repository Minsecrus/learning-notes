# 勘误：35 原像定理、切空间与法向量

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> 那么反函数定理等价于说

**修正：**

> 那么隐函数定理等价于说

**理由：** 一般n到m满秩映射的零纤维为n减m维子流形是隐函数定理几何版本；反函数定理只直接覆盖等维可逆微分的情形。

**原文：**

> 它在 $\mathbb{R}^n$ 中的余维数

**修正：**

> 它在 $\mathbb{R}^m$ 中的余维数

**理由：** 该句所述0点是Rm中的零维子流形，其余维为m；原图Rn与结论m不一致。

**原文：**

> 可以被 $n-s$ 个函数定义

**修正：**

> 可以被 $m-s$ 个函数定义

**理由：** S位于m维目标且维数s，独立法向定义函数个数应m减s，后文函数列表和秩计算均采用此数。

**原文：**

> $$\begin{cases}
> 1) & S \cap V = g_1^{-1}(0) \cap \cdots \cap g_s^{-1}(0); \\
> 2) & \text{对任意 } y' \in S \cap V, dg_1(y'), \cdots, dg_{m-s}(y') \text{ 线性无关.}
> \end{cases}$$

**修正：**

> $$\begin{cases}
> 1) & S \cap V = g_1^{-1}(0) \cap \cdots \cap g_{m-s}^{-1}(0); \\
> 2) & \text{对任意 } y' \in S \cap V, dg_1(y'), \cdots, dg_{m-s}(y') \text{ 线性无关.}
> \end{cases}$$

**理由：** S的局部零集需要全部m减s个独立定义函数，索引s是维数而非余维数，与紧接的微分列表不一致。

**原文：**

> $$\begin{aligned}
> f^{-1}(S) \cap U &= \{ x \in \Omega \mid f(x) \in S \cap V \} \\
> &= \{ x \in \mathbb{R}^n \mid g_1(f(x)), \cdots, g_{m-s}(f(x)) = 0 \} \\
> &= (g_1 \circ f)^{-1}(0) \cap \cdots \cap (g_{m-s} \circ f)^{-1}(0).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> f^{-1}(S) \cap U &= \{ x \in \Omega \mid f(x) \in S \cap V \} \\
> &= \{ x\in U\mid g_1(f(x))=\cdots=g_{m-s}(f(x))=0 \} \\
> &= (g_1 \circ f)^{-1}(0) \cap \cdots \cap (g_{m-s} \circ f)^{-1}(0).
> \end{aligned}$$

**理由：** 这些复合函数仅定义在U等于f逆像V，在全部Rn会包含f或g没有定义的点；并明确所有分量同时等于零与下行逆像交集一致。

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> $$d(f^*G)(x) = df(x) \circ dG(y)$$

**修正：**

> $$d(f^*G)(x)=dG(y)\circ df(x)$$

**理由：** G与f复合的微分先作用df从Rn到Rm，再作用dG从Rm到Rm减s；原图顺序相反导致维数不匹配。

**原文：**

> $\operatorname{rank} dG(x) = m-s$

**修正：**

> $\operatorname{rank} dG(y) = m-s$

**理由：** G的定义域是目标邻域V中的y，x属于Ω且维数可能不同，秩必须在y等于f(x)求值。

**原文：**

> $$P(z_1(c_1, \cdots, c_n), z_2(c_1, \cdots, c_n), \cdots, z_n(c_1, \cdots, c_n)) = 0.$$

**修正：**

> $$P_c(z_1(c_1,\cdots,c_n))=P_c(z_2(c_1,\cdots,c_n))=\cdots=P_c(z_n(c_1,\cdots,c_n))=0.$$

**理由：** 给定的是单变量多项式，各个z_i分别是同一系数c的根；原图将n个根同时填入单变量P导致表达式没有定义，应分别对每个根求值为零。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> G:V\to\mathbb R^m
> ```

**正文：**

> $G : V \to \mathbb{R}^{m-s}$

**理由：** G只有m减s个分量，正文已正确修正源目标Rm，不应恢复到错误维数。

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> $p = (p_1, \cdots, p_d)$

**修正：**

> $p=(p_1,\cdots,p_d,0,\cdots,0)$

**理由：** M在Rn中且后n减d坐标为零，基点p须保留全部n个坐标，才能和后面Rn内曲线及向量相加。

**原文：**

> $$\gamma_i : (-1, 1) \to \mathbb{R}^n, \quad t \mapsto (0, \cdots, t, 0, \cdots),$$

**修正：**

> $$\gamma_i : (-1, 1) \to \mathbb{R}^n, \quad t\mapsto p+(0,\cdots,t,0,\cdots),$$

**理由：** 用于定义TpM的曲线必须过p，原图过原点只能给T0M，平移p保持曲线落在同一线性子空间并保留导数。

**原文：**

> 所以，$\mathbb{R}^d \times \{0\} \subset T_p M$。

**修正：**

> 进一步，对任意 $v\in\mathbb R^d\times\{0\}$，曲线 $t\mapsto p+tv$ 落在 $M$ 中且在零点导数为 $v$。所以，$\mathbb{R}^d\times\{0\}\subset T_pM$。

**理由：** 切向量集合的线性性质尚待证明，只得到基向量不足以推出整个线性空间包含关系；同一平移直线构造对任意v成立，补齐原证明遗漏的包含步骤。

**原文：**

> 为了说明 $\mathbb{R}^d \times \{0\} \subset T_p M$

**修正：**

> 为了说明 $T_pM\subset\mathbb R^d\times\{0\}$

**理由：** 本段取任意流形内曲线并证明导数后面坐标为零，是前段包含关系的反向；原图两次写同一方向不能推出相等。

**原文：**

> 这显然是 $\mathbb{R}^d \times \{0\}$ 中的一条曲线。

**修正：**

> 这显然是 $\mathbb{R}^d\times\{0\}$ 中的一个向量。

**理由：** gamma在零点的导数是固定向量，已经不含参数t，称作曲线混淆对象类型，按公式修正。

**原文：**

> $p \in U$，其中

**修正：**

> $p\in M$，其中

**理由：** TpM及Phi(p)处的Phi(M)切空间要求p属于M，仅在包含M的U内不够，证明一直取M上经过p的曲线。

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> $\left. d\Phi \right|_{x=p}(T_p M) \supset T_{\Phi(p)}\Phi(M)$

**修正：**

> $\left.d\Phi\right|_{x=p}(T_pM)\subset T_{\Phi(p)}\Phi(M)$

**理由：** 由M上任意曲线复合得到Phi(M)内曲线先给出像包含于目标切空间；再以全部目标曲线来自此构造得到反向，原图第一方向颠倒。

**原文：**

> $\Phi : U \cap M = V \cap (\mathbb{R}^d \times \{0\})$

**修正：**

> $\Phi(U\cap M)=V \cap (\mathbb{R}^d \times \{0\})$

**理由：** 局部坐标图的集合等式应是交集的像，冒号未表达Phi作用，前述定义唯一确定该修正。

**原文：**

> $$T_p M = (d\Phi)^{-1}\Big|_{\Phi(p)}(\mathbb{R}^d \times \{0\}).$$

**修正：**

> $$T_p M = d(\Phi^{-1})\Big|_{\Phi(p)}(\mathbb{R}^d \times \{0\}).$$

**理由：** 在Phi(p)处需要逆映射的微分，等于在p处dPhi的逆；原图把dPhi自身的逆标在Phi(p)处，Phi甚至可能不在那里定义。

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> $$M = \{x \in U \mid f_1(x) = \cdots = f_{n-d}(x) = 0\}$$

**修正：**

> $$M\cap U=\{x\in U \mid f_1(x) = \cdots = f_{n-d}(x) = 0\}$$

**理由：** 这组选定函数只局部定义M，故零集描述M与U交集，不能把整个M限制为同一坐标邻域内。

**原文：**

> 对任意的 $x \in M$, $n - d$ 个线性函数 $f_1, \cdots, f_{n-d}$

**修正：**

> 对任意的 $x\in M\cap U$，$n-d$ 个线性函数 $df_1(x),\cdots,df_{n-d}(x)$

**理由：** f_i是光滑定义函数，满秩条件是它们在x处的线性微分独立，函数本身通常非线性；并须限制在函数定义域U。

**原文：**

> $$T_p M = \bigcap_{k=1}^{n-d} \ker df_i \Big|_{x=p} = \ker df \Big|_{x=p}.$$

**修正：**

> $$T_p M = \bigcap_{i=1}^{n-d}\ker df_i\Big|_{x=p} = \ker df \Big|_{x=p}.$$

**理由：** 交集指标必须绑定被取核的微分i，原图用k而核中仍有自由i，不能表示全部独立定义函数。

**原文：**

> 由于 $\Phi(M)$ 为

**修正：**

> 由于 $\Phi(M\cap U)$ 为

**理由：** Phi只定义于局部U，M一般不包含U内，证明所用像应限于局部流形部分M与U交集。

**原文：**

> $$\mathbb{R}^d \times \{0\} = T_{\Phi(p)}\Phi(M) = d\Phi \Big|_{x=p}(T_p M).$$

**修正：**

> $$\mathbb{R}^d \times \{0\} = T_{\Phi(p)}\Phi(M\cap U)=d\Phi \Big|_{x=p}(T_p M).$$

**理由：** 同一局部坐标图只作用于M与U交集，其在p处切空间和M相同，原式Phi(M)可能在U外没有定义。

**原文：**

> $T_p M \subset \bigcap_{k=1}^{n-d} \ker df_i$

**修正：**

> $T_pM\subset\bigcap_{i=1}^{n-d}\ker df_i(p)$

**理由：** 包含关系需要同时取所有定义函数的微分核，交集索引必须和函数下标一致且在共同基点p求值。

**原文：**

> $\dim \bigcap_{k=1}^{n-d} \ker df_i \geqslant d$

**修正：**

> $\dim\bigcap_{i=1}^{n-d}\ker df_i(p)=d$

**理由：** n减d个独立线性微分给秩n减d，秩零度定理给共同核维数恰为d；仅大于等于d不能由TpM包含推出相等。

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> 对于 $p = (x_1, \dots, x_n)$

**修正：**

> 对于 $p=(x_1,\dots,x_n)\in M$

**理由：** TpM与非零法向量仅在流形上的基点定义，这里需要明确p属于零曲面而非任意Rn点。

[相关正文：原像定理、切空间与法向量](../../02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400.md)

## 数学修正

**原文：**

> 不同点的切空间是不同的

**修正：**

> 不同点的切空间可以不同

**理由：** 同柱面相同角度的不同高度具有同一切空间，不能宣称任意不同点都不同；下面原文也承认作为Rn子空间可能相同。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> (-x,y,0)

**正文：**

> $(-y, x, 0)$

**理由：** 源图所给向量与柱面法向量(2x,2y,0)一般不正交；正文已正确改为(-y,x,0)，内积恒为0。

[相关正文：35.1：作业：隐函数与反函数定理，隐函数定理在多项式和矩阵上的一个重要应用，经典群的子流形结构](../../02-math-analysis-ii/35-tangent-spaces/35-03-p0401-0405.md)

## 数学修正

**原文：**

> $\bigcap_{i \leqslant \ell} Z_i$ 是维数

**修正：**

> $U\cap\bigcap_{i\leqslant\ell}Z_i$ 是维数

**理由：** 只假设共同零点x处独立，隐函数定理给x附近的局部结论，原图整体零集在远处可有奇点，必须使用刚声明的邻域U。

**原文：**

> $$\Gamma_f = \{(x, y) \in \mathbb{R}^{n+m} \mid x \in \mathbb{R}^n, y \in \mathbb{R}^m, y = f(x)\}$$

**修正：**

> $$\Gamma_f = \{(x, y) \in \mathbb{R}^{n+m} \mid x\in\Omega,y\in\mathbb{R}^m, y = f(x)\}$$

**理由：** f只定义在Ω，图像的第一坐标须属于Ω，原图对全部Rn取值超出定义域。

[相关正文：35.1：作业：隐函数与反函数定理，隐函数定理在多项式和矩阵上的一个重要应用，经典群的子流形结构](../../02-math-analysis-ii/35-tangent-spaces/35-03-p0401-0405.md)

## 数学修正

**原文：**

> $$\omega : (-\varepsilon, \varepsilon) \to V, \quad \lambda \mapsto \omega(\lambda),$$

**修正：**

> $$\omega:(-\varepsilon,\varepsilon)\to U, \quad \lambda \mapsto \omega(\lambda),$$

**理由：** 题目唯一选定零点邻域是U，V没有引入，隐函数的固定点分支应落在同一U中。

**原文：**

> $f_\lambda$ 在 $V$ 中

**修正：**

> $f_\lambda$ 在 $U$ 中

**理由：** 参数固定点的唯一性须指刚声明的U，原图未定义V，和分支映射值域使用相同邻域。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> t\in(-0.5,0,5)
> ```

**正文：**

> $t \in (-0.5, 0.5)$

**理由：** 源标点使区间端点多出逗号，题目压缩参数应为绝对值小于0.5，正文已按唯一实数区间修正。

[相关正文：35.1：作业：隐函数与反函数定理，隐函数定理在多项式和矩阵上的一个重要应用，经典群的子流形结构](../../02-math-analysis-ii/35-tangent-spaces/35-03-p0401-0405.md)

## 数学修正

**原文：**

> 使得 $M$ 是 $\phi$ 的图像

**修正：**

> 使得 $M$ 在 $(0,1)$ 的一个邻域内是 $\phi$ 的图像

**理由：** 隐函数定理只给该点附近图像，整条三次曲线一般不能由0附近的小区间函数表示，保留原题已声明的局部含义。

## 未决数学问题

**原文：**

> B8)

**问题：** 原题B6后直接B8且B9延续，无法仅从编号判定是否漏印B7，保留源编号，不凭空补题。

[相关正文：35.1：作业：隐函数与反函数定理，隐函数定理在多项式和矩阵上的一个重要应用，经典群的子流形结构](../../02-math-analysis-ii/35-tangent-spaces/35-03-p0401-0405.md)

## 数学修正

**原文：**

> $$P(z_1(c_1, \cdots, c_n), z_2(c_1, \cdots, c_n), \cdots, z_n(c_1, \cdots, c_n)) = 0.$$

**修正：**

> $$P_c(z_1(c_1,\cdots,c_n))=P_c(z_2(c_1,\cdots,c_n))=\cdots=P_c(z_n(c_1,\cdots,c_n))=0.$$

**理由：** 给定的是单变量多项式，各个z_i分别是同一系数c的根；原图将n个根同时填入单变量P导致表达式没有定义，应分别对每个根求值为零。

**原文：**

> $$\mathbb{R}^{n+1} \to \mathbb{R}[X], \quad c \mapsto X^n + c_1 X^{n-1} + \cdots + c_n.$$

**修正：**

> $$\mathbb{R}^n\to\mathbb{R}[X], \quad c \mapsto X^n + c_1 X^{n-1} + \cdots + c_n.$$

**理由：** 首一n次多项式自由系数仅c1至cn共n个，题首c与b均在Rn，原图域维数多加1。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> -x_0^2+x_0^2+x^2=0

**正文：**

> $$C = \{(x_0, x_1, x_2) \mid -x_0^2 + x_1^2 + x_2^2 = 0\}.$$

**理由：** 原图漏下标并重复x0，正文采用图示及后续锥尖题面确定的双锥方程，数学上已正确。

**原讲义片段：**

> ```text
> V\to\mathbb R,\quad c\mapsto z(c)
> ```

**正文：**

> $$U \to \mathbb{R}, \quad c \mapsto z(c)$$

**理由：** 根分支自变量是系数c属于U，V是实根邻域，正文已把源域V改为U。
