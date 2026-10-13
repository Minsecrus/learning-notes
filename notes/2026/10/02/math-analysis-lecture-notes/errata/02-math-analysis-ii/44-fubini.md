# 勘误：44 Fubini 定理与积分降维

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> 对任意上升的集合序列 $\{S_i\}_{i \geqslant 1} \in \mathcal{M}$

**修正：**

> 对任意上升的集合序列 $\{S_i\}_{i\geqslant1}\subset\mathcal M$

**理由：** 单调类中的成员是集合Si，序列构成子族，不把整个序列视为一个成员。

**原文：**

> 对任意下降的集合序列 $\{S_i\}_{i \geqslant 1} \in \mathcal{M}$

**修正：**

> 对任意下降的集合序列 $\{S_i\}_{i\geqslant1}\subset\mathcal M$

**理由：** 单调类中的成员是集合Si，序列构成子族，不把整个序列视为一个成员。

**原文：**

> $\nu < \infty$

**修正：**

> $\nu(Y)<\infty$

**理由：** 有限测度是全空间测度有限，测度函数本身不能直接与数值无穷比较。

**原文：**

> $$\begin{aligned}
> \int_X \nu(S_x) d\mu(x) &= \int_X f(x) d\mu(x) \\
> &\overset{\text{Beppo Levi}}{=} \lim_{i \to \infty} \int_X f_i(x) d\mu(x) \\
> &= \lim_{i \to \infty} \int_X \nu(S_{ix}) d\mu(x) \\
> &= \lim_{i \to \infty} \mu \otimes \nu(S_i) \\
> &= \mu \otimes \nu(S).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \int_X \nu(S_x) d\mu(x) &= \int_X f(x) d\mu(x) \\
> &\overset{\text{Beppo Levi}}{=} \lim_{i \to \infty} \int_X f_i(x) d\mu(x) \\
> &= \lim_{i \to \infty} \int_X \nu((S_i)_x) d\mu(x) \\
> &= \lim_{i \to \infty} \mu \otimes \nu(S_i) \\
> &= \mu \otimes \nu(S).
> \end{aligned}$$

**理由：** 截面符号对集合Si取下标x，原ix合并下标没有此前定义。

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \int_X \nu(S_x) d\mu(x) &= \int_X f(x) d\mu(x) \\
> &\overset{\text{Lebesgue}}{=} \lim_{i \to \infty} \int_X f_i(x) d\mu(x) \\
> &= \lim_{i \to \infty} \int_X \nu(S_{ix}) d\mu(x) \\
> &= \lim_{i \to \infty} \mu \otimes \nu(S_i) \\
> &= \mu \otimes \nu(S).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \int_X \nu(S_x) d\mu(x) &= \int_X f(x) d\mu(x) \\
> &\overset{\text{Lebesgue}}{=} \lim_{i \to \infty} \int_X f_i(x) d\mu(x) \\
> &= \lim_{i \to \infty} \int_X \nu((S_i)_x) d\mu(x) \\
> &= \lim_{i \to \infty} \mu \otimes \nu(S_i) \\
> &= \mu \otimes \nu(S).
> \end{aligned}$$

**理由：** 截面符号对集合Si取下标x，原ix合并下标没有此前定义。

**原文：**

> 从而 $S \in \mathcal{B}$

**修正：**

> 从而 $S_x\in\mathcal B$

**理由：** 此处推出的是Y中的截面可测，S在乘积空间中，不能归入Y的sigma代数。

**原文：**

> 利用已经证明的有限测度的情况, 我们有

**修正：**

> 先在有限测度情形完成上述单调类论证，得到引理在整个有限乘积空间成立。再将测度限制到 $X_p$ 与 $Y_p$，由这个有限测度结论及零延拓可知 $S\cap(X_p\times Y_p)$ 满足引理三条性质；于是我们有

**理由：** 原文在完成一般情形的单调类闭性之前就使用有限情形结论，须先独立完成有限空间的单调类论证；限制空间上的截面及积分再零延拓即可回到全空间。

**原文：**

> $$S \cap (X_p \times Y_p) \in \mathcal{M} = \lim_{i \to \infty} S_i \cap (X_p \times Y_p) \in \mathcal{M}$$

**修正：**

> $$S\cap(X_p\times Y_p)=\lim_{i\to\infty}\bigl(S_i\cap(X_p\times Y_p)\bigr)\in\mathcal M$$

**理由：** 成员关系不能与集合极限串成等号，删除误插的第一次属于M并明确极限作用于交集。

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> $1 \leqslant i \leqslant m$

**修正：**

> $1\leqslant i\leqslant n$

**理由：** 简单函数求和上界为n，系数和集合范围必须使用同一指标。

**原文：**

> $$\int_Y f(x, y) d\nu(y) = \lim_{i \to \infty} \int_Y f_i(x, y) d\mu(y).$$
>
> 由于

**修正：**

> $$\int_Y f(x,y)\,d\nu(y)=\lim_{i\to\infty}\int_Y f_i(x,y)\,d\nu(y).$$
>
> 由于

**理由：** Y因子的测度为nu，单调收敛等号两边必须在同一测度上积分，mu是X因子的测度。

**原文：**

> $$\int_Y f(x, y) d\nu(y) = \lim_{i \to \infty} \int_Y f_i(x, y) d\mu(y).$$
>
> 右端

**修正：**

> $$\int_Y f(x,y)\,d\nu(y)=\lim_{i\to\infty}\int_Y f_i(x,y)\,d\nu(y).$$
>
> 右端

**理由：** Y因子的测度为nu，单调收敛等号两边必须在同一测度上积分，mu是X因子的测度。

**原文：**

> $\int_Y f_i(x, y) d\mu(y)$ 是 $\mathcal{A}$-可测的, 所以 $x \mapsto \int_Y f(x, y) d\mu(y)$

**修正：**

> $\int_Y f_i(x,y)\,d\nu(y)$ 是 $\mathcal A$-可测的，所以 $x\mapsto\int_Y f(x,y)\,d\nu(y)$

**理由：** 对Y变量积分使用nu，所得函数对X可测；两个mu(y)都属于因子测度混用。

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> 在 $X$ 上几乎处处有定义，这个函数是

**修正：**

> 在 $X$ 上几乎处处有定义；在 $N_X$ 上置零后，这个函数是

**理由：** 例外零集上截面积分可能出现无穷减无穷，明确零延拓后才能作为全X上的可测可积函数。

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> $\Omega \subset \mathbb{R}^n$。对任意

**修正：**

> $\Omega\subset\mathbb R^n$，以及其上的实值可积函数 $f:\Omega\to\mathbb R$。对任意

**理由：** 推论原文未定义f及其可积性，降维可积结论需要从给定可积函数开始，不能对任意函数成立。

**原文：**

> $$\Omega_{x_n} = \{ (x_1, \cdots, x_n) \in \mathbb{R}^{n-1} \mid (x_1, \cdots, x_{n-1}, x_n) \in \Omega \}.$$

**修正：**

> $$\Omega_{x_n} = \{(x_1,\cdots,x_{n-1})\in\mathbb R^{n-1} \mid (x_1, \cdots, x_{n-1}, x_n) \in \Omega \}.$$

**理由：** 固定最后一个坐标后截面由前n减一坐标构成，n元组不能属于n减一维空间。

**原文：**

> $\Omega_{x_n} \subset \mathbb{R}^n$

**修正：**

> $\Omega_{x_n}\subset\mathbb R^{n-1}$

**理由：** 截面所在空间维数为n减一，最后坐标是固定参数。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 内层f(x1,...,xn−1)dx1dx1...dxn

**正文：**

> $$\int_\Omega f(x_1, \cdots, x_{n-1}, x_n) dx_1 \cdots dx_n = \int_{\mathbb{R}} \left( \int_{\Omega_{x_n}} f(x_1, \cdots, x_{n-1}, x_n) dx_1 \cdots dx_{n-1} \right) dx_n,$$

**理由：** 原图内层被积函数漏固定末坐标且微分重复并多出末坐标，canonical已正确保留全部自变量并仅积分前n减一维。

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> $$F : \Omega \to \mathbb{R}, \quad x \mapsto f(x) \mathbf{1}_\Omega(x).$$

**修正：**

> $$F:\mathbb R^n\to\mathbb R,\qquad F(x)=\begin{cases}f(x),&x\in\Omega,\\0,&x\notin\Omega.\end{cases}$$

**理由：** 要在全欧氏空间使用Fubini，F的定义域必须为Rn，且f仅在Omega定义，零延拓应分段定义。

**原文：**

> 由于 $|F(x)| \le |f(x)|$，所以，$F$ 是可积的。

**修正：**

> 由零延拓及 $f$ 在 $\Omega$ 上可积，$\int_{\mathbb R^n}|F|\,dm=\int_\Omega|f|\,dm<\infty$，所以 $F$ 是可积的。

**理由：** 原f在Omega外未定义，不能在全空间比较F与f；零延拓的绝对值积分相等严格保证可积。

**原文：**

> $$\begin{aligned}
> \int_{[1,2] \times [0,2]} f(x, y) dxdy &= \int_0^2 y \left( \int_1^2 e^{xy} dx \right) dy \\
> &= \int_0^3 e^{2y} - e^y dy = \frac{1}{2} e^{6y} + e^y - 1.5.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \int_{[1,2] \times [0,2]} f(x, y) dxdy &= \int_0^2 y \left( \int_1^2 e^{xy} dx \right) dy \\
> &= \int_0^2(e^{2y}-e^y)\,dy=\left[\frac12e^{2y}-e^y\right]_0^2=\frac12e^4-e^2+\frac12.
> \end{aligned}$$

**理由：** 积分区域y上界是二；逐项原函数为半个e的二y次方减e的y次方，定积分结果必须不含自由变量y。

[相关正文：Fubini 定理与积分降维](../../02-math-analysis-ii/44-fubini/44-01-p0512-0519.md)

## 数学修正

**原文：**

> $m_3 = m_2 \otimes m_2$

**修正：**

> $m_3=m_2\otimes m_1$

**理由：** 三维柱体是二维圆盘与一维区间的乘积，二加二维张量积属于四维而非三维。

**原文：**

> $$\Omega_z = \{ (x, y) \in \mathbb{R} \mid x^2 + y^2 \le 1 - z^2 \}.$$

**修正：**

> $$\Omega_z = \{(x,y)\in\mathbb R^2\mid x^2+y^2 \le 1 - z^2 \}.$$

**理由：** 二维坐标对的截面是平面中的圆盘，不能属于一维实数。

**原文：**

> 的球面，它的面积是

**修正：**

> 的圆盘，它的面积是

**理由：** 固定球体高度所得截面为平面圆盘，面积pi乘半径平方属于圆盘面积，球面面积公式不同。

**原文：**

> $$\begin{aligned}
> m_3(B(1)) &= \int_\Omega 1 dxdy = \int_{-1}^1 m_2(\Omega_z) dx \\
> &= \pi \int_{-1}^1 1 - z^2 dx = \frac{4}{3} \pi.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> m_3(B(1))&=\int_\Omega1\,dx\,dy\,dz=\int_{-1}^1m_2(\Omega_z)\,dz \\
> &= \pi\int_{-1}^1(1-z^2)\,dz = \frac{4}{3} \pi.
> \end{aligned}$$

**理由：** 三维体积须三重微分，降维后固定参数z为外积分变量，原dx与截面下标不一致。

**原文：**

> $$\begin{aligned}
> m_3(B(1)) &= \int_\Omega 1 dxdy = \int_{-1}^1 m_2(\Omega_z) dx \\
> &= \pi \int_{-1}^1 1 - z^2 dx = \frac{4}{3} \pi.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> m_3(B(1))&=\int_\Omega1\,dx\,dy\,dz=\int_{-1}^1m_2(\Omega_z)\,dz \\
> &= \pi\int_{-1}^1(1-z^2)\,dz = \frac{4}{3} \pi.
> \end{aligned}$$

**理由：** 截面面积是z的函数，外积分必须对z积分。

[相关正文：44.1：作业：Archimedes对抛物线面积的计算，Gauss积分](../../02-math-analysis-ii/44-fubini/44-03-p0520-0523.md)

## 数学修正

**原文：**

> 证明,
> $$
> \int_0^1 \left( \int_0^1 f(x, y) dy \right) dx \neq \int_0^1 \left( \int_0^1 f(x, y) dx \right) dy.
> $$
> Fubini

**修正：**

> 证明,
> $$
> \int_{[0,1]}\left(\int_{[0,1]}f(x,y)\,d\mu(y)\right)\,dm(x)\ne\int_{[0,1]}\left(\int_{[0,1]}f(x,y)\,dm(x)\right)\,d\mu(y).
> $$
> Fubini

**理由：** 这个反例的y测度是计数测度，x测度是Lebesgue测度，统一写dxdy会误作两个Lebesgue积分而都为零，必须写明两个测度。

[相关正文：44.1：作业：Archimedes对抛物线面积的计算，Gauss积分](../../02-math-analysis-ii/44-fubini/44-03-p0520-0523.md)

## 数学修正

**原文：**

> A4) 假设 $(X, \mathcal{A}, \mu)$ 和 $(Y, \mathcal{B}, \nu)$ 是测度空间并且 $\mu$ 和 $\nu$ 是 $\sigma$-有限的。

**修正：**

> A4) 假设 $X=Y=\mathbb R$，$\mathcal A=\mathcal B=\mathcal B(\mathbb R)$，$\mu$ 和 $\nu$ 是这两个 Borel 测度空间上的 $\sigma$-有限测度。

**理由：** 一般测度空间的单点未必可测且实平面对角线不一定属于X乘Y，须按下文实对角线限制为实轴Borel测度空间，才能定义原子并由连续差映射证明对角线可测。

**原文：**

> $A, B \in \Gamma$ 是给定的两点

**修正：**

> $A,B\in\Gamma$ 是给定的两个不同的点

**理由：** 同一点时弦的方向未定义，唯一平行切线与三角形面积比均需两个端点不同。

[相关正文：44.1：作业：Archimedes对抛物线面积的计算，Gauss积分](../../02-math-analysis-ii/44-fubini/44-03-p0520-0523.md)

## 数学修正

**原文：**

> $(\pi, 0), (2\pi, 0), (\pi, 2\pi), (0, \pi)$

**修正：**

> $(\pi,0),(2\pi,\pi),(\pi,2\pi),(0,\pi)$

**理由：** 另三个顶点组成以pi、pi为中心的半个菱形，第四点唯一应为二pi、pi；原二pi、零使相邻边长度不同且不垂直，无法构成所称正方形。
