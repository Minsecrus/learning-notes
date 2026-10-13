# 勘误：17 凸函数与 Jensen 不等式

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)

## 数学修正

**原文：**

> 按照 $\Gamma_{\geqslant f}$ 的定义，我们有 $f(tx + (1-t)y) \leqslant tf(x) + (1-t)f(y))$。

**修正：**

> 按照 $\Gamma_{\geqslant f}$ 的定义，我们有 $f(tx + (1-t)y) \leqslant tf(x) + (1-t)f(y)$。

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)原图该凸集定义推论行确有多余右括号。f(tx+(1-t)y)≤tf(x)+(1-t)f(y)已完整配对，末尾多余括号删除属于源笔误。

**原文：**

> 其中 $t_1 + t_2 + \cdots + t_{n+1} = 1$，我们有

**修正：**

> 其中 $t_1 + t_2 + \cdots + t_{n+1} = 1$。当 $t_{n+1}=1$ 时结论显然；以下设 $t_{n+1}<1$，我们有

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)源证明遗漏边界权重情形，在允许tn+1=1时各个除以1-tn+1的式子无定义。由于其余权重非负且和0，此时原Jensen两边都f(xn+1)；补该分支条件后归纳的所有分母正且归一化权重合法。

[相关正文：凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)

## 数学修正

**原文：**

> 根据凸性的第三个等价定义，由于上述不等式的右边是 $h_2$ 的增函数，令 $h_2 \to 0$，我们立即得到右导数的存在性；类似地，如果令 $h_1 \to 0$，我们就得到左右导数存在性。既然左右导数都存在，那么，$f$ 自然在 $\mathring{I}$ 上连续。

**修正：**

> 根据凸性的第三个等价定义，由于上述不等式的右边是 $h_2$ 的增函数，令 $h_2 \to 0$，我们立即得到右导数的存在性；类似地，如果令 $h_1 \to 0$，我们就得到左导数存在性。既然左右导数都存在，那么，$f$ 自然在 $\mathring{I}$ 上连续。

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)原图确写令h1趋于0得到左右导数，但h1只在左差商(f(x0)-f(x0-h1))/h1中出现，所证明是左导数存在；右导数已由前句h2极限得到。改为左导数属于源笔误。

**原文：**

> 其中 $x < z < y$，后一个不等式是运用凸性的第三个等价定义。再令 $z \to x$（$z < x$）就证明了结论。$\square$

**修正：**

> 其中 $x < z < y$，后一个不等式是运用凸性的第三个等价定义。再令 $z \to x$（$z > x$）就证明了结论。$\square$

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)原图同段明确x<z<y，却在z趋于x时注z<x，与已选范围矛盾，须从右侧z>x趋近。原图确有此源笔误；注意同段前面的斜率不等式仍存在另外的方向错误，不能仅凭这一局部修正声称证明正确。

## 未决数学问题

**原文：**

> $$f'_-(x) \leqslant \frac{f(x) - f(y)}{x - y} \leqslant \frac{f(x) - f(z)}{x - z},$$

**问题：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)凸函数证明4同段取x<z<y，却写secant(x,y)≤secant(x,z)。f(t)=t²时x+y>x+z直接否证；仅把z<x改z>x不足以证明左右导数单调。可用左右导数强夹逼另写短证明，但原三项链及其极限不能唯一单字符修复，保留结构疑点。

[相关正文：凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)

## 数学修正

**原文：**

> 由于 $X = [a, b] \cap (\varphi_\varepsilon)^{-1}\bigl((-\infty, \varepsilon]\bigr)$ 是闭集，所以它的上确界 $c = \sup X_\varepsilon \in X_\varepsilon$。我们想证明 $b \in X$（从而，$\varepsilon \geqslant \varphi_\varepsilon(b)$，令 $\varepsilon \to 0$，过渡性结论就成立了），即要证明 $c = b$。

**修正：**

> 由于 $X_\varepsilon = [a, b] \cap (\varphi_\varepsilon)^{-1}\bigl((-\infty, \varepsilon]\bigr)$ 是闭集，所以它的上确界 $c = \sup X_\varepsilon \in X_\varepsilon$。我们想证明 $b \in X_\varepsilon$（从而，$\varepsilon \geqslant \varphi_\varepsilon(b)$，令 $\varepsilon \to 0$，过渡性结论就成立了），即要证明 $c = b$。

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)原图定义X_ε后两处却使用未加下标X。后续用M0=sup X_ε以及ε扰动函数性质进行开闭论证，必须操作同一集合X_ε；恢复绑定下标属于源笔误。

[相关正文：凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)

## 数学修正

**原文：**

> 其中，$x = (x_1, \cdots, x_p)$。

**修正：**

> 其中，$x = (x_1, \cdots, x_n)$。

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)原图Rn范数定义后向量坐标末项写xp，然而求和k=1至n、空间V=Rn，p是任意实数指数甚至非整数，不能当坐标维数。坐标必须为xn，属于源笔误。

**原文：**

> $$f'(x) = -px^{\frac{1}{p}-1}\bigl(1 - x^{\frac{1}{p}}\bigr)^{p-1}$$

**修正：**

> $$f'(x) = -x^{\frac{1}{p}-1}\bigl(1 - x^{\frac{1}{p}}\bigr)^{p-1}$$

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)源图导数多因子p。链式法则的外层p与x^(1/p)导数的1/p相消，正确负系数为1；例如p=2直接微分(1-sqrt x)²=1-2sqrt x+x得1-1/sqrt x，与修式相同。

**原文：**

> $$\|x\|_p = \Bigl(\sum_{k=1}^{n}x_k^p\Bigr)^{\frac{1}{p}},$$

**修正：**

> $$\|x\|_p = \Bigl(\sum_{k=1}^{n}|x_k|^p\Bigr)^{\frac{1}{p}},$$

**理由：** [凸函数与 Jensen 不等式](../../01-math-analysis-i/17-convexity/17-01-p0175-0182.md)源图范数定义漏绝对值，前面Minkowski只对非负ai,bi证明，推到任意Rn须取绝对值。p=1、x=(-1)原值-1不满足非负性，非整数p还可能不定义；绝对值恢复所有p≥1有效范数。

[相关正文：17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)

## 数学修正

**原文：**

> A2)（Taylor 展开式的唯一性，Peano 余项）。假设 $f$ 在 $x_0$ 附近的函数，并且当 $x \to x_0$ 是，满足

**修正：**

> A2)（Taylor 展开式的唯一性，Peano 余项）。假设 $f$ 是 $x_0$ 附近的函数，并且当 $x \to x_0$ 时，满足

**理由：** 已查看[17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)原图，该注记原句确有“在”代系词及“是”代时间条件的错字。有限可微阶与无限可微阶两种情况的数学结论保持，修正为“是”“时”恢复原句意思，属于源笔误。

[相关正文：17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)

## 数学修正

**原文：**

> $$f'(x) = \begin{cases} < 0, & \text{对所有的} \ x \in (x_0 - \delta, x_0); \\ > 0, & \text{对所有的} \ x \in (x_0, x_0 + \delta). \end{cases}$$

**修正：**

> $$f'(x) = \begin{cases} > 0, & \text{对所有的} \ x \in (x_0 - \delta, x_0); \\ < 0, & \text{对所有的} \ x \in (x_0, x_0 + \delta). \end{cases}$$

**理由：** [17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)定理描述极大值而原图给左侧f′<0右侧f′>0。中值定理表明极大值的充分符号条件是左侧递增f′>0、右侧递减f′<0；原条件给局部极小值，如x²。故两符号必须一起互换，属于源笔误。

[相关正文：17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)

## 数学修正

**原文：**

> $\chi\big|_{\{x\,|\,|x|\geqslant 2\}} \equiv 0$

**修正：**

> $\psi\big|_{\{x\,|\,|x|\geqslant 2\}} \equiv 0$

**理由：** [17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)原图多维截断函数ψ的第二条件却写χ，χ为上文一维截断函数且定义域R，不能作用于一般Rn变量x。该条件对应同一ψ:Rn→[0,1]，故恢复ψ为源笔误。

[相关正文：17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)

## 数学修正

**原文：**

> F8) 对任意给定的正数 $\lambda_k > 0$，试计算函数 $f_k(x) = \dfrac{a_k}{k!} x^k \chi(t_k x)$ 在 $x = 0$ 处的任意阶导数（包括零阶）。

**修正：**

> F8) 对任意给定的正数 $t_k > 0$，试计算函数 $f_k(x) = \dfrac{a_k}{k!} x^k \chi(t_k x)$ 在 $x = 0$ 处的任意阶导数（包括零阶）。

**理由：** [17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)原图练习式用tk(x-x0)^k但条件写λk>0，λk未出现于级数。约束已在式中使用的参数tk恢复变量绑定，不增加练习解答，属于源笔误。

[相关正文：17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)

## 数学修正

**原文：**

> $$\frac{f^{(n)}(0)}{n!} = d_n + \sum_{j=1}^{\lfloor n/2 \rfloor} (-1)^j c_{n-2j} b_{n-2j}^j.$$

**修正：**

> $$\frac{f^{(n)}(0)}{n!} = c_n + \sum_{j=1}^{\lfloor n/2 \rfloor} (-1)^j c_{n-2j} b_{n-2j}^j.$$

**理由：** [17.1：作业：Émile Borel引理，Peano的证明](../../01-math-analysis-i/17-convexity/17-03-p0183-0188.md)原图级数系数为ck，展开各项ck x^k/(1+bkx²)的最低次幂x^k系数就是ck。n阶系数含cn以及k=n-2j产生的低阶贡献，原dn未定义，故应cn，属于源笔误。
