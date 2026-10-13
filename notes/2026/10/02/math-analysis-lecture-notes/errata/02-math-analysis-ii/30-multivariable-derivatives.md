# 勘误：30 方向导数、偏导数与微分

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> $$
> \frac{\partial}{\partial x_i} = \underbrace{(0, \cdots, 0, 1, 0, \cdots, 0)}_{\text{第 } i \text{ 个位置上为 } 0 \text{，其余为 } 1}.
> $$

**修正：**

> $$
> \frac{\partial}{\partial x_i} = \underbrace{(0, \cdots, 0, 1, 0, \cdots, 0)}_{\text{第 } i \text{ 个位置上为 } 1 \text{，其余为 } 0}.
> $$

**理由：** 原图下括号把0与1写反；前一行明确ei第i位置为1，列出的向量也只有第i位为1，故说明必须同步为其余位置0。

**原文：**

> 这个映射是与 $\mathbb{R}^n$ 上的线性结构相容的，即这是一个线性映射：

**修正：**

> 我们希望这个映射与 $\mathbb{R}^n$ 上的线性结构相容，即成为一个线性映射：

**理由：** 仅所有方向导数存在可得齐次性，[方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)明确加法性还需要额外条件，[方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)给出方向导数v2²/v1的非线性反例。将提前断言改成这里正在探讨的希望，与后页实际结论一致。

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> 那么，$f(x, y)$ 的两个偏导数

**修正：**

> 那么，$f(x, y)$ 在 $(0,0)$ 处的两个偏导数

**理由：** 原图未限定基点而说两个偏导数均为0；在原点沿坐标轴确为0，但例如(1,0)处对y的偏导为1。补足原点限定，与紧随沿v在0处的计算一致。

**原文：**

> $L = \ell((-\varepsilon, \varepsilon))$

**修正：**

> $L = \ell((-a, a))$

**理由：** 该段及上一行直线映射定义域为(-a,a)，下一页限制f到L再与同一映射复合；未定义的ε将使L和该映射的像不一定一致。统一为已经给定的整个参数域。

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> 比如说

**修正：**

> 比如取 $\lambda>0$，并令

**理由：** 所写参数域(-a/λ,a/λ)在λ为0时未定义、λ为负时为空；明确λ>0即可保证与原(-a,a)直线段的像相同。

**原文：**

> 2) 更一般的，给定 $C^1$-曲线
>
> $$\gamma : (-a, a) \to \mathbb{R}^n, \quad t \mapsto \gamma(t).$$

**修正：**

> 2) 更一般的，给定取值于 $\Omega$ 的 $C^1$-曲线，并假设 $f$ 在 $\gamma(0)$ 处可微：
>
> $$\gamma : (-a, a) \to \Omega, \quad t \mapsto \gamma(t).$$

**理由：** 原图任意f及C1曲线不满足所写链式关系；甚至所有方向导数存在也不足。f=x³y/(x⁶+y²)在0定义0，所有原点方向导数为0，但沿γ(t)=(t,t³)跳到1/2。补f基点可微和曲线像包含于定义域为现式所需条件，不增加习题解答。

**原文：**

> 所有偏导数 $\frac{\partial f}{\partial x_i}$ 在 $\Omega$ 上都有定义。

**修正：**

> 所有偏导数 $\frac{\partial f}{\partial x_i}$ 在 $\Omega$ 上都有定义且连续。

**理由：** 下一段称函数图像为超曲面、[方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)赋予由坐标曲线张成的切空间，需要C1正则性。仅偏导存在允许[方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)y²/x一类不连续函数，图像未必是该光滑几何对象。连续偏导保证C1，且不添加图像以外的结论。

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> $$
> (\nabla_v f)(x_0)=\lim_{h\to0}\frac{h(df(x_0))(v))+o(hv)}h=(df(x_0))(v).
> $$

**修正：**

> $$
> (\nabla_v f)(x_0)=\lim_{h\to0}\frac{h(df(x_0))(v)+o(hv)}h=(df(x_0))(v).
> $$

**理由：** 原图分子多一个右括号；由上一行 f(x0+hv)-f(x0)=h df(x0)(v)+o(hv)，分子唯一应为 h df(x0)(v)+o(hv)。

**原文：**

> **注记.** 在微分的定义中，我们根本就没有用到 $\mathbb{R}^n$ 上的坐标系：我们只用到了 $v$ 的长度的概念。所以，可以自然地对在一个赋范线性空间 $(V,\|\cdot\|)$ 上定义的函数来定义其微分：给定函数 $f:V\to\mathbb{R}$ 和 $x_0\in V$，其中 $(V,\|\cdot\|)$ 是一个（$\mathbb{R}$ 或者 $\mathbb{C}$ 上的）赋范线性空间。如果存在 $\mathbb{R}$（或者 $\mathbb{C}$）-线性映射 $A:V\to\mathbb{R}$，使得

**修正：**

> **注记.** 在微分的定义中，我们根本就没有用到 $\mathbb{R}^n$ 上的坐标系：我们只用到了 $v$ 的长度的概念。所以，可以自然地对在一个赋范线性空间 $(V,\|\cdot\|)$ 上定义的函数来定义其微分：给定函数 $f:V\to\mathbb{R}$ 和 $x_0\in V$，其中 $(V,\|\cdot\|)$ 是一个（$\mathbb{R}$ 或者 $\mathbb{C}$ 上的）赋范线性空间；复赋范空间在此视为实赋范空间。如果存在连续的 $\mathbb{R}$-线性映射 $A:V\to\mathbb{R}$，使得

**理由：** 本段函数和值域始终是R，R没有与实标量相容的复向量空间结构，不能称到R的映射为复线性微分。以复空间的实化定义实值函数微分，保持原函数和值域不变；一般赋范空间还需连续线性条件，[映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)已明确补充该要求。

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> $$
> A:\mathbb{R}^n\to\mathbb{R},\quad\frac{\partial}{\partial x_j}\mapsto\begin{cases}
> 0,&i\neq j;\\
> \dfrac{\partial}{\partial x_i},&i=j.
> \end{cases}.
> $$

**修正：**

> $$
> A:\mathbb{R}^n\to\mathbb{R},\quad\frac{\partial}{\partial x_j}\mapsto\begin{cases}
> 0,&i\neq j;\\
> 1,&i=j.
> \end{cases}.
> $$

**理由：** 原图把坐标投影的微分取值写成向量；A:R^n→R的值必须是标量，紧随的Kronecker公式明确dπ_i(e_j)=δ_j^i，i=j时唯一为1。

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> r(v)&=f((x_{0,1}+v_1,\cdots,x_{0,n}+v_n))-f((x_{0,1},\cdots,x_{0,n}))-\sum_{j=1}^n\frac{\partial f}{\partial x_j}(x_0)v_j\\
> &=f((x_{0,1}+v_1,x_{0,2},\cdots,x_{0,n}))-f((x_{0,1},\cdots,x_{0,n}))-\frac{\partial f}{\partial x_1}(x_0)v_1\\
> &\quad+f((x_{0,1}+v_1,x_{0,2}+v_2,x_{0,3},\cdots,x_{0,n}))-f((x_{0,1}+v_1,x_{0,2},\cdots,x_{0,n}))-\frac{\partial f}{\partial x_2}(x_0)v_2\\
> &\quad+\cdots\\
> &\quad+f((x_{0,1}+v_1,\cdots,x_{0,n}+v_n))-f((x_{0,1}+v_1,\cdots,x_{0,n-1}+v_{n-1},x_{0,n}))-\frac{\partial f}{\partial x_n}(x_0)v_n\\
> &=\sum_{j=1}^n\left[\underbrace{\big(f(\cdots,x_{0,j}+v_j,x_{0,j+1},\cdots)-f(\cdots,x_{0,j-1}+v_{j-1},x_{0,j},x_{0,j+1},\cdots)\big)}_{\text{Lagrange 中值定理}}-\frac{\partial f}{\partial x_j}(x_0)v_j\right]\\
> &=\sum_{j=1}^n\frac{\partial f}{\partial x_j}(\widetilde{x}_j)v_j-\frac{\partial f}{\partial x_j}(x_0)v_j.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> r(v)&=f((x_{0,1}+v_1,\cdots,x_{0,n}+v_n))-f((x_{0,1},\cdots,x_{0,n}))-\sum_{j=1}^n\frac{\partial f}{\partial x_j}(x_0)v_j\\
> &=f((x_{0,1}+v_1,x_{0,2},\cdots,x_{0,n}))-f((x_{0,1},\cdots,x_{0,n}))-\frac{\partial f}{\partial x_1}(x_0)v_1\\
> &\quad+f((x_{0,1}+v_1,x_{0,2}+v_2,x_{0,3},\cdots,x_{0,n}))-f((x_{0,1}+v_1,x_{0,2},\cdots,x_{0,n}))-\frac{\partial f}{\partial x_2}(x_0)v_2\\
> &\quad+\cdots\\
> &\quad+f((x_{0,1}+v_1,\cdots,x_{0,n}+v_n))-f((x_{0,1}+v_1,\cdots,x_{0,n-1}+v_{n-1},x_{0,n}))-\frac{\partial f}{\partial x_n}(x_0)v_n\\
> &=\sum_{j=1}^n\left[\underbrace{\big(f(\cdots,x_{0,j}+v_j,x_{0,j+1},\cdots)-f(\cdots,x_{0,j-1}+v_{j-1},x_{0,j},x_{0,j+1},\cdots)\big)}_{\text{Lagrange 中值定理}}-\frac{\partial f}{\partial x_j}(x_0)v_j\right]\\
> &=\sum_{j=1}^n\left(\frac{\partial f}{\partial x_j}(\widetilde{x}_j)-\frac{\partial f}{\partial x_j}(x_0)\right)v_j.
> \end{aligned}
> $$

**理由：** 原图最后求和漏括号，第二项的j游离于求和号；前面的逐坐标望远镜分解和后面的余项估计均要求对两项差一同求和。

**原文：**

> $(x_{0,1}+v_1,\cdots,x_{0,j}+v_j,x_{0,j},\cdots,x_{0,n})$

**修正：**

> $(x_{0,1}+v_1,\cdots,x_{0,j}+v_j,x_{0,j+1},\cdots,x_{0,n})$

**理由：** 原图线段第二端点在第j坐标加v_j后重复x_{0,j}，出现多一维；与第一端点只改变第j坐标及前面的望远镜分解相比，后续应从x_{0,j+1}开始。

**原文：**

> 假设出了第 $i$ 个位置的其它变量都是固定的

**修正：**

> 假设除了第 $j$ 个位置的其它变量都是固定的

**理由：** 本段中值定理逐第j坐标应用，后述线段与tilde{x}_j都使用j；原图“出了”和游离i为笔误。

**原文：**

> 假设函数 $f$ 在 $p$ 处的微分存在

**修正：**

> 假设函数 $f$ 在 $x_0$ 处的微分存在

**理由：** 命题178基点为x0，本页全部公式也使用x0；p在本证明中没有定义，开头回顾假设微分存在时的形式应采用同一x0。

[相关正文：30：方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)

## 数学修正

**原文：**

> 任意给定方向 $v\in\mathbb{R}^m$

**修正：**

> 任意给定方向 $v\in\mathbb{R}^n$

**理由：** [方向导数、偏导数与微分](../../02-math-analysis-ii/30-multivariable-derivatives.md)全学期约定Ω为R^n中开集；γ(t)=x0+tv和本页结尾均以R^n为定义域，原图R^m是不一致的维数。

**原文：**

> 很明显，$x_0$ 是 $f\circ\gamma$ 的最大值

**修正：**

> 很明显，$0$ 是 $f\circ\gamma$ 的最大值点

**理由：** γ的参数域为(-ε,ε)，γ(0)=x0；因而原函数的极大点x0对应复合函数的极大参数0，不能称x0为复合函数的最大值。
