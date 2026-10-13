# 勘误：46 常用换元与子流形上的积分

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $$\Phi : \Omega_1 \to \Omega_2.$$

**修正：**

> $$\Phi:\Omega_1\to\Omega_2\quad\text{为微分同胚。}$$

**理由：** 换元积分公式不能对任意映射成立，需恢复上一讲定理的微分同胚假设。

**原文：**

> $\Omega_2 = \mathbb{R}^2 - \{(x, 0) \mid x \ge 0\}$

**修正：**

> $\Omega_2 = \mathbb{R}^2 - \{(x,0)\mid x\le0\}$

**理由：** 角度开区间负pi到pi的极坐标像包含正实轴而排除负实轴，割线符号应小于等于零。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 球坐标排除{x=y≥0}

**正文：**

> $\Omega_2 = \mathbb{R}^3 - \{(x, y, z) \mid x \le 0, y = 0, z \in \mathbb{R}\}$

**理由：** 原图排除正对角半平面与角度范围不符，canonical已正确排除负实轴方向乘全部高度，保持正确修复。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $$\iiint_{\mathbb{R}^3} f(x, y, z) dxdydz = \iiint_{\Omega_1} f(r \cos(\varphi) \cos(\theta), r \cos(\varphi) \sin(\theta), r \sin(\varphi)) r^2 \cos(\varphi) dr d\theta.$$

**修正：**

> $$\iiint_{\mathbb{R}^3} f(x, y, z) dxdydz = \iiint_{\Omega_1} f(r \cos(\varphi) \cos(\theta), r \cos(\varphi) \sin(\theta), r \sin(\varphi)) r^2 \cos(\varphi) dr d\theta d\varphi.$$

**理由：** 三参数球坐标换元须三个微分，原式漏纬度phi的积分微分。

**原文：**

> $$\begin{aligned}
> I^2 &= \left( \int_{\mathbb{R}} e^{-x^2} dx \right) \left( \int_{\mathbb{R}} e^{-y^2} dy \right) \\
> &= \iint_{\mathbb{R}^2} e^{-(x^2+y^2)} dxdy \\
> &= \int_0^\infty \int_0^{2\pi} e^{-r^2} r dr d\theta \\
> &= 2\pi \int_0^\infty e^{-r^2} r dr = \pi.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> I^2 &= \left( \int_{\mathbb{R}} e^{-x^2} dx \right) \left( \int_{\mathbb{R}} e^{-y^2} dy \right) \\
> &= \iint_{\mathbb{R}^2} e^{-(x^2+y^2)} dxdy \\
> &= \int_0^\infty \int_0^{2\pi} e^{-r^2} r d\theta dr \\
> &= 2\pi \int_0^\infty e^{-r^2} r dr = \pi.
> \end{aligned}$$

**理由：** 内界零到二pi属于角度，外界零到无穷属于半径，微分次序必须与各积分上下限对应。

**原文：**

> 首先考虑由顶点在原点

**修正：**

> 先假设 $A$ 可逆。首先考虑由顶点在原点

**理由：** 后续使用A逆与Jacobian逆，必须先限定可逆，再单独处理奇异映射。

**原文：**

> $$m(A(\Omega)) = |\det A| m(\Omega).$$

**修正：**

> $$m(A(\Omega))=|\det A|m(\Omega).$$
>
> 若 $A$ 不可逆，则 $A(\Omega)$ 包含在低维线性子空间中，故其 $n$ 维 Lebesgue 测度为零；此时 $\det A=0$，同一公式仍成立。

**理由：** 奇异A没有逆不能用换元证明，但像落在零测低维线性空间且行列式为零，可补全原定理对所有线性映射的范围。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> I²=...=2π，I=√(2π)

**正文：**

> $$\begin{aligned}
> I^2 &= \left( \int_{\mathbb{R}} e^{-x^2} dx \right) \left( \int_{\mathbb{R}} e^{-y^2} dy \right) \\
> &= \iint_{\mathbb{R}^2} e^{-(x^2+y^2)} dxdy \\
> &= \int_0^\infty \int_0^{2\pi} e^{-r^2} r d\theta dr \\
> &= 2\pi \int_0^\infty e^{-r^2} r dr = \pi.
> \end{aligned}$$

**理由：** 源图把半个径向积分误算为一，canonical已正确采用pi及其平方根。

**原讲义片段：**

> m(AΩ)=∫Ω1；m(AΩ)=|detA|m(AΩ)

**正文：**

> $$\begin{aligned}
> 1 = \int_{\Omega} 1 dx &= \int_{A(\Omega)} 1 |\mathbf{J}_{A^{-1}}| dy \\
> &= |\det A|^{-1} \int_{A(\Omega)} 1 dy = |\det A|^{-1} m(A(\Omega)).
> \end{aligned}$$

**理由：** 单位方块的积分为一，canonical已修复源图第一个m(AOmega)误写，随后结论也正确以m(Omega)为因子。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $$\begin{cases}
> A(e_1) &= (A_{11}, A_{12}, \cdots, A_{1n}), \\
> A(e_2) &= (A_{21}, A_{22}, \cdots, A_{2n}), \\
> &\quad \cdots \quad \cdots \quad \cdots \\
> A(e_n) &= (A_{n1}, A_{n2}, \cdots, A_{nn}).
> \end{cases}$$

**修正：**

> $$\begin{cases}
> A(e_1) &= (A_{11},A_{21},\cdots,A_{n1}), \\
> A(e_2) &= (A_{12},A_{22},\cdots,A_{n2}), \\
> &\quad \cdots \quad \cdots \quad \cdots \\
> A(e_n) &= (A_{1n},A_{2n},\cdots,A_{nn}).
> \end{cases}$$

**理由：** 本章约定向量为列向量，A作用于标准基ei得到第i列，原式把行向量误作该像。

**原文：**

> $$\begin{cases}
> A(e_1) &= (A_{11}, A_{12}, \cdots, A_{1n}), \\
> A(e_2) &= (A_{21}, A_{22}, \cdots, A_{2n}), \\
> &\quad \cdots \quad \cdots \quad \cdots \\
> A(e_n) &= (A_{n1}, A_{n2}, \cdots, A_{nn}).
> \end{cases}$$

**修正：**

> $$\begin{cases}
> A(e_1) &= (A_{11},A_{21},\cdots,A_{n1}), \\
> A(e_2) &= (A_{12},A_{22},\cdots,A_{n2}), \\
> &\quad \cdots \quad \cdots \quad \cdots \\
> A(e_n) &= (A_{1n},A_{2n},\cdots,A_{nn}).
> \end{cases}$$

**理由：** 本章约定向量为列向量，A作用于标准基ei得到第i列，原式把行向量误作该像。

**原文：**

> $$\begin{cases}
> A(e_1) &= (A_{11}, A_{12}, \cdots, A_{1n}), \\
> A(e_2) &= (A_{21}, A_{22}, \cdots, A_{2n}), \\
> &\quad \cdots \quad \cdots \quad \cdots \\
> A(e_n) &= (A_{n1}, A_{n2}, \cdots, A_{nn}).
> \end{cases}$$

**修正：**

> $$\begin{cases}
> A(e_1) &= (A_{11},A_{21},\cdots,A_{n1}), \\
> A(e_2) &= (A_{12},A_{22},\cdots,A_{n2}), \\
> &\quad \cdots \quad \cdots \quad \cdots \\
> A(e_n) &= (A_{1n},A_{2n},\cdots,A_{nn}).
> \end{cases}$$

**理由：** 本章约定向量为列向量，A作用于标准基ei得到第i列，原式把行向量误作该像。

**原文：**

> 以 $(A_{i1}, A_{i2}, \cdots, A_{in})$ 为顶点

**修正：**

> 以位置向量 $(A_{1i},A_{2i},\cdots,A_{ni})$ 为从原点出发的边

**理由：** 线性映射的平行多面体由各列像向量作边生成，应与前面的标准基像保持同一列向量约定。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $\Psi_* m$ 为 $\frac{1}{2}dx_2$

**修正：**

> $\Psi_* m$ 在参数 $x_2$ 下为 $dx_2$

**理由：** Psi推前的原始参数测度就是dx2，在线段的参数区间零到二分之一上积分为二分之一，不能再乘二分之一密度。

**原文：**

> $A \subset \mathcal{B}(E)$

**修正：**

> $A\in\mathcal B(E)$

**理由：** A是E的Borel集合，应是Borel代数成员而非其子族。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> Psi(x2)=(2x2,x2)

**正文：**

> $$\Psi : \mathbb{R} \to \mathbb{R}^2, \quad x_2 \mapsto (2x_2, 2x_2).$$

**理由：** 原图第二分量漏二，与先前同一直线及Gram八相冲突，canonical已正确补二。

**原讲义片段：**

> m2=2sqrt2 dx1

**正文：**

> $m_2 = 2\sqrt{2}dx_2$

**理由：** 第二参数化的密度使用x2坐标，canonical已修复源图x1错下标。

**原讲义片段：**

> Phi_*mp

**正文：**

> $\Phi_* m_d$

**理由：** 参数空间维数d，canonical已正确将未定义测度下标p修复为d。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $A \in E$

**修正：**

> $A\in\mathcal B(E)$

**理由：** 测度的输入为Borel子集，E中的单个点不能直接代入集合测度公式。

**原文：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_p(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_p \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_p (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_p (\Phi^{-1}(A)) \\
> &= |\det(G)|^{\frac{1}{2}} \Phi_* m_p(A).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_d(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_d \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} \Phi_* m_d(A).
> \end{aligned}
> $$

**理由：** 参数空间是Rd，其Lebesgue测度记md，p在这段证明中没有定义。

**原文：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_p(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_p \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_p (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_p (\Phi^{-1}(A)) \\
> &= |\det(G)|^{\frac{1}{2}} \Phi_* m_p(A).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_d(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_d \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} \Phi_* m_d(A).
> \end{aligned}
> $$

**理由：** 参数空间是Rd，其Lebesgue测度记md，p在这段证明中没有定义。

**原文：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_p(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_p \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_p (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_p (\Phi^{-1}(A)) \\
> &= |\det(G)|^{\frac{1}{2}} \Phi_* m_p(A).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_d(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_d \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} \Phi_* m_d(A).
> \end{aligned}
> $$

**理由：** 参数空间是Rd，其Lebesgue测度记md，p在这段证明中没有定义。

**原文：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_p(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_p \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_p (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_p (\Phi^{-1}(A)) \\
> &= |\det(G)|^{\frac{1}{2}} \Phi_* m_p(A).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_d(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_d \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} \Phi_* m_d(A).
> \end{aligned}
> $$

**理由：** 维数固定为d，全部原像测度都须用同一个d维Lebesgue测度。

**原文：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_p(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_p \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_p (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_p (\Phi^{-1}(A)) \\
> &= |\det(G)|^{\frac{1}{2}} \Phi_* m_p(A).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_d(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_d \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} \Phi_* m_d(A).
> \end{aligned}
> $$

**理由：** 维数固定为d，全部原像测度都须用同一个d维Lebesgue测度。

**原文：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_p(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_p \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_p (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_p (\Phi^{-1}(A)) \\
> &= |\det(G)|^{\frac{1}{2}} \Phi_* m_p(A).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\det(G_\Psi)|^{\frac{1}{2}} \Psi_* m_d(A) &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| m_d \left( L^{-1}(\Phi^{-1}(A)) \right) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} |\det J_L| |\det J_{L^{-1}}| m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} m_d (\Phi^{-1}(A)) \\
> &= |\det(G_\Phi)|^{\frac{1}{2}} \Phi_* m_d(A).
> \end{aligned}
> $$

**理由：** 最后一行表示Phi参数化的测度，其Gram矩阵须带Phi下标，G未在双参数化比较中单独绑定。

**原文：**

> 以 $A$ 为底高为 $h$ 的柱体

**修正：**

> 以 $A$ 为底高为 $h>0$ 的柱体

**理由：** 正高度保证区间零到h的长度为h，若h负则集合为空且右侧出现负测度。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $$m_n(\tilde{A}) = m_E(A) \times h.$$

**修正：**

> $$m_n(\widetilde A_h) = m_E(A) \times h.$$

**理由：** 上页定义的柱体带高度下标h，避免未定义的无下标集合。

**原文：**

> 符合一个 $\mathbb{R}^n$ 中的正交变换

**修正：**

> 复合一个 $\mathbb R^n$ 中的正交变换及平移

**理由：** 任意仿射超平面未必通过原点，仅正交变换无法移到yn零，还需要保持测度的平移。

**原文：**

> 给定线性函数

**修正：**

> 给定仿射函数

**理由：** 含常数a的表达是仿射函数，保持全体仿射超平面范围与后式一致。

**原文：**

> 由于 $f$ 是线性的

**修正：**

> 由于 $f$ 是仿射的

**理由：** 后式容許任意常数a，函数类型应相应为仿射。

**原文：**

> $$f(x) = f_1 x_1 + \cdots + f_n x_n + a, \quad f_i \in \mathbb{R}, a \in \mathbb{R}, i = 1, \cdots, n.$$

**修正：**

> $$f(x)=f_1x_1+\cdots+f_{n-1}x_{n-1}+a,\quad f_i\in\mathbb R,\ a\in\mathbb R,\ i=1,\cdots,n-1.$$

**理由：** f定义域n减一维，只有n减一坐标及系数，原xn超出其定义域。

**原文：**

> $\nabla f = (f_1, \cdots, f_n)$

**修正：**

> $\nabla f=(f_1,\cdots,f_{n-1})$

**理由：** n减一元函数的梯度包含n减一偏导，与后续法向量n个分量吻合。

**原文：**

> $$\nu = \frac{1}{(1 + |\nabla f|^2)^\frac{1}{2}} (-\nabla f, 1) = \frac{(-f_1, \cdots, -f_{n-1}, 1)}{(1 + |f_1|^2 + \cdots + |f_{n-1}|^2)^\frac{1}{2}}.$$

**修正：**

> $$\nu = \pm\frac{1}{(1 + |\nabla f|^2)^\frac{1}{2}} (-\nabla f, 1) = \frac{(-f_1, \cdots, -f_{n-1}, 1)}{(1 + |f_1|^2 + \cdots + |f_{n-1}|^2)^\frac{1}{2}}.$$

**理由：** 文中声明两个单位法向量，需给正负两种取向而非单一方向。

**原文：**

> $J = (1, f_1, f_2, \cdots, f_{n-1}) = (1, \nabla f)$

**修正：**

> $J=J_\Phi=\begin{pmatrix}\mathbf I_{n-1}\\f_1\quad f_2\quad\cdots\quad f_{n-1}\end{pmatrix}$

**理由：** 图像参数化Jacobian为n行n减一列，上块单位矩阵下块梯度行，原一行数字仅在曲线特例可用。

**原文：**

> $$\det({}^t J \cdot J_\Phi) = 1 + |\nabla f|^2.$$

**修正：**

> $$\det({}^t J_\Phi\cdot J_\Phi) = 1 + |\nabla f|^2.$$

**理由：** 两矩阵均是该参数化的Jacobian，与重新明确的J记号一致。

**原文：**

> $$F = F(x, f(x)), \quad x \in \mathbb{R}^{n-1}.$$

**修正：**

> $$ (F\circ\Phi)(x)=F(x,f(x)), \quad x \in \mathbb{R}^{n-1}.$$

**理由：** 函数F定义在E，复合才定义于参数空间，左边不能直接把整个函数与点值相等。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $y \in S \subset \mathbb{R}^n$

**修正：**

> $y\in M\subset\mathbb R^n$

**理由：** 本段子流形名为M，未定义S，局部参数化围绕M上的任意点。

**原文：**

> $$d\sigma = \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} \Phi_*(dx_1 \cdots dx_d),$$

**修正：**

> $$d\sigma=\Phi_*\left(\sqrt{\det({}^t(\operatorname{Jac}(\Phi))\cdot\operatorname{Jac}(\Phi))}\,(dx_1\cdots dx_d)\right),$$

**理由：** Gram密度是参数空间上的函数，应先乘参数测度再推前；直接乘目标测度须另复合Phi逆，原式未表达这一依赖。

**原文：**

> $$\sigma = \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} \cdot \Phi_*(m)$$

**修正：**

> $$\sigma=\Phi_*\left(\sqrt{\det({}^t(\operatorname{Jac}(\Phi))\cdot\operatorname{Jac}(\Phi))}\,m\right)$$

**理由：** 局部密度在U上，置于推前括号内才能准确表示在V交M上的曲面测度。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $$\operatorname{Jac}(\Psi) = \operatorname{Jac}(\Phi) \circ \operatorname{Jac}(L),$$

**修正：**

> $$\operatorname{Jac}(\Psi)(x\prime)=\operatorname{Jac}(\Phi)(L(x\prime))\cdot\operatorname{Jac}(L)(x\prime),$$

**理由：** 复合微分中Phi的Jacobian在L(xprime)求值，两个不同域的矩阵函数不能在同一未注明参数处直接复合。

**原文：**

> 那么，根据对 $L$ 的换元积分公式，我们有

**修正：**

> 那么，以下各式中 $\operatorname{Jac}(\Psi)$ 与 $\operatorname{Jac}(L)$ 在 $x\prime$ 处取值，第二行的 $\operatorname{Jac}(\Phi)$ 在 $L(x\prime)$ 处取值，第三行则在 $x$ 处取值。根据对 $L$ 的换元积分公式，我们有

**理由：** 明确每行矩阵密度的求值点，换元前后坐标不同，缺此说明容易把两个域的Gram函数误作同一点。

**原文：**

> $$\begin{aligned}
> \sigma'(A) &= \int_{U'} \mathbf{1}_{\Psi^{-1}(A)}(x') \sqrt{\det({}^t(\operatorname{Jac}(\Psi)) \cdot \operatorname{Jac}(\Psi))} dx'_1 \cdots dx'_d \\
> &= \int_{L^{-1}(U)} \mathbf{1}_{L^{-1}(\Phi^{-1}(A))}(x') \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} |\det(\operatorname{Jac}(L))| dx'_1 \cdots dx'_d \\
> &= \int_U \mathbf{1}_{\Phi^{-1}(A)}(x') \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} dx_1 \cdots dx_d \\
> &= \sigma(A).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \sigma'(A) &= \int_{U'} \mathbf{1}_{\Psi^{-1}(A)}(x') \sqrt{\det({}^t(\operatorname{Jac}(\Psi)) \cdot \operatorname{Jac}(\Psi))} dx'_1 \cdots dx'_d \\
> &= \int_{L^{-1}(U)} \mathbf{1}_{L^{-1}(\Phi^{-1}(A))}(x') \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} |\det(\operatorname{Jac}(L))| dx'_1 \cdots dx'_d \\
> &= \int_U \mathbf{1}_{\Phi^{-1}(A)}(x) \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} dx_1 \cdots dx_d \\
> &= \sigma(A).
> \end{aligned}$$

**理由：** 换元后积分变量是U中的x而非Uprime中的xprime，示性函数须与微分坐标对应。

**原文：**

> $$\int_S f d\sigma = \int_U f(\Phi(x)) \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} dx_1 \cdots dx_d.$$

**修正：**

> $$\int_{V\cap M} f\,d\sigma = \int_U f(\Phi(x)) \sqrt{\det({}^t(\operatorname{Jac}(\Phi)) \cdot \operatorname{Jac}(\Phi))} dx_1 \cdots dx_d.$$

**理由：** Phi仅覆盖局部V交M，右积分不包含其余图册，左域须明确为这一局部曲面，S未定义。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> 其中对任意的 $t \in (-1, 1)$

**修正：**

> 其中 $\gamma$ 是该曲线的单射参数化，并且对任意的 $t \in (-1, 1)$

**理由：** 仅非零导数允许多次绕行或自交，几何曲段测度等于参数长度需使用单射图册，防止重复计数。

**原文：**

> $$\begin{aligned}
> \sigma(C_a^b) &= \int_{(-1,1)} \mathbf{1}_{\gamma^{-1}(S_a^b)} \sqrt{\gamma'(t) \cdot \gamma'(t)} dt \\
> &= \int_a^b |\gamma'(t)| dt.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \sigma(C_a^b) &= \int_{(-1,1)} \mathbf{1}_{\gamma^{-1}(C_a^b)} \sqrt{\gamma'(t) \cdot \gamma'(t)} dt \\
> &= \int_a^b |\gamma'(t)| dt.
> \end{aligned}$$

**理由：** 上文定义曲段为C_a^b，S_a^b未定义，示性函数须对正确曲段原像。

**原文：**

> $$\int_{S_a^b} f d\sigma = \int_a^b f(\gamma(t)) |\gamma'(t)| dt.$$

**修正：**

> $$\int_{C_a^b} f d\sigma = \int_a^b f(\gamma(t)) |\gamma'(t)| dt.$$

**理由：** 曲段名称与前面的长度公式一致，修复未定义集合符号。

**原文：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = \mathbf{I} + \nabla f \otimes \nabla f = \begin{pmatrix} 1 + \left(\frac{\partial f}{\partial x_1}\right)^2 & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_1} & 1 + \left(\frac{\partial f}{\partial x_2}\right)^2 & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \cdots & \cdots & \cdots & \cdots \\ \frac{\partial f}{\partial x_n}\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_n}\frac{\partial f}{\partial x_2} & \cdots & 1 + \left(\frac{\partial f}{\partial x_{n-1}}\right)^2 \end{pmatrix}$$

**修正：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = \mathbf{I} + \nabla f \otimes \nabla f = \begin{pmatrix} 1 + \left(\frac{\partial f}{\partial x_1}\right)^2 & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_1} & 1 + \left(\frac{\partial f}{\partial x_2}\right)^2 & \cdots & \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_{n-1}} \\ \cdots & \cdots & \cdots & \cdots \\ \frac{\partial f}{\partial x_{n-1}}\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_{n-1}}\frac{\partial f}{\partial x_2} & \cdots & 1 + \left(\frac{\partial f}{\partial x_{n-1}}\right)^2 \end{pmatrix}$$

**理由：** Gram矩阵第二行最后一项是梯度第二分量乘最后分量，原第一分量属于第一行。

**原文：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = \mathbf{I} + \nabla f \otimes \nabla f = \begin{pmatrix} 1 + \left(\frac{\partial f}{\partial x_1}\right)^2 & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_1} & 1 + \left(\frac{\partial f}{\partial x_2}\right)^2 & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \cdots & \cdots & \cdots & \cdots \\ \frac{\partial f}{\partial x_n}\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_n}\frac{\partial f}{\partial x_2} & \cdots & 1 + \left(\frac{\partial f}{\partial x_{n-1}}\right)^2 \end{pmatrix}$$

**修正：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = \mathbf{I} + \nabla f \otimes \nabla f = \begin{pmatrix} 1 + \left(\frac{\partial f}{\partial x_1}\right)^2 & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_1} & 1 + \left(\frac{\partial f}{\partial x_2}\right)^2 & \cdots & \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_{n-1}} \\ \cdots & \cdots & \cdots & \cdots \\ \frac{\partial f}{\partial x_{n-1}}\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_{n-1}}\frac{\partial f}{\partial x_2} & \cdots & 1 + \left(\frac{\partial f}{\partial x_{n-1}}\right)^2 \end{pmatrix}$$

**理由：** 梯度只有n减一维，最后行应取最后分量n减一，xn不是f的自变量。

**原文：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = \mathbf{I} + \nabla f \otimes \nabla f = \begin{pmatrix} 1 + \left(\frac{\partial f}{\partial x_1}\right)^2 & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_1} & 1 + \left(\frac{\partial f}{\partial x_2}\right)^2 & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \cdots & \cdots & \cdots & \cdots \\ \frac{\partial f}{\partial x_n}\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_n}\frac{\partial f}{\partial x_2} & \cdots & 1 + \left(\frac{\partial f}{\partial x_{n-1}}\right)^2 \end{pmatrix}$$

**修正：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = \mathbf{I} + \nabla f \otimes \nabla f = \begin{pmatrix} 1 + \left(\frac{\partial f}{\partial x_1}\right)^2 & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_1}\frac{\partial f}{\partial x_{n-1}} \\ \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_1} & 1 + \left(\frac{\partial f}{\partial x_2}\right)^2 & \cdots & \frac{\partial f}{\partial x_2}\frac{\partial f}{\partial x_{n-1}} \\ \cdots & \cdots & \cdots & \cdots \\ \frac{\partial f}{\partial x_{n-1}}\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_{n-1}}\frac{\partial f}{\partial x_2} & \cdots & 1 + \left(\frac{\partial f}{\partial x_{n-1}}\right)^2 \end{pmatrix}$$

**理由：** 梯度只有n减一维，最后行应取最后分量n减一，xn不是f的自变量。

[相关正文：常用换元与子流形上的积分](../../02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546.md)

## 数学修正

**原文：**

> $${}^t \operatorname{Jac}(\Phi) \cdot \operatorname{Jac}(\Phi) = 1 + |\nabla f|^2.$$

**修正：**

> $$\det\left({}^t\operatorname{Jac}(\Phi)\cdot\operatorname{Jac}(\Phi)\right)=1+|\nabla f|^2.$$

**理由：** 左边为矩阵右边为标量，前文明确计算行列式，须补det；秩一矩阵行列式公式给一加梯度模平方。

[相关正文：46.1：期中考试：非Borel集的构造](../../02-math-analysis-ii/46-submanifold-integrals/46-03-p0547-0552.md)

## 数学修正

**原文：**

> $$P : \mathbb{R}^2 \times \mathbb{R}, \quad (a, b, x) \mapsto P(a, b, x) = x^3 + bx^2 + ax + 1.$$

**修正：**

> $$P:\mathbb R^2\times\mathbb R\to\mathbb R, \quad (a, b, x) \mapsto P(a, b, x) = x^3 + bx^2 + ax + 1.$$

**理由：** 三次多项式映射需要说明标量陪域，原仅列定义域无映射箭头与陪域。

**原文：**

> $x = \varphi(a', b')$

**修正：**

> $x' = \varphi(a', b')$

**理由：** 等价条件量词针对新参数和新根xprime，旧根x固定，不能等于所有新参数下的根。

[相关正文：46.1：期中考试：非Borel集的构造](../../02-math-analysis-ii/46-submanifold-integrals/46-03-p0547-0552.md)

## 数学修正

**原文：**

> $$
> f(x, y) = \begin{cases}
> n, & \text{如果 } (x, y) = \left(\cos\left(\frac{1}{n}\right), \sin\left(\frac{1}{n}\right)\right),\ n \in \mathbb{Z}_{n \geqslant 1}; \\
> 0, & \text{其余情况}
> \end{cases}
> $$

**修正：**

> $$
> f(x, y) = \begin{cases}
> n, & \text{如果 } (x, y) = \left(\cos\left(\frac{1}{n}\right), \sin\left(\frac{1}{n}\right)\right),\ n\in\mathbb Z_{\geqslant1}; \\
> 0, & \text{其余情况}
> \end{cases}
> $$

**理由：** 集合下标应表示整数范围，原把元素n重复插入Z下标导致未约定符号。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 函数定义域非负、E1却写正象限

**正文：**

> $\mathbb{R}_{\geqslant 0} \times \mathbb{R}_{\geqslant 0} \times \mathbb{R}_{\geqslant 0}$

**理由：** 源图E1连续性域与函数定义和零点说明相冲突，canonical已正确包括闭象限边界。

[相关正文：46.1：期中考试：非Borel集的构造](../../02-math-analysis-ii/46-submanifold-integrals/46-03-p0547-0552.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> H:R4→R2

**正文：**

> $$H : \mathbb{R}^4 \to \mathbb{R}^3, \quad (x, y, z, w) \mapsto (x^2 + y^2 - z^2 - w^2, 2(xw + yz), 2(yw - xz))$$

**理由：** Hopf映射输出三分量，canonical已修正源陪域二维误写为三维。

[相关正文：46.1：期中考试：非Borel集的构造](../../02-math-analysis-ii/46-submanifold-integrals/46-03-p0547-0552.md)

## 数学修正

**原文：**

> $$H_a(x) = \frac{1}{2}\sqrt{\frac{\pi}{a}} e^{-2\sqrt{a}x}.$$

**修正：**

> $$H_a(x) = \frac{1}{2}\sqrt{\frac{\pi}{a}} e^{-2\sqrt{ax}}.$$

**理由：** 源图根号覆盖a和x，提取把x移到根号外；缩放t及配方也严格给指数负二sqrt(ax)。

## 未决数学问题

**原文：**

> H2) (3 分) 证明，函数

**问题：** 原文两个不同小问都标H2，后续H3和H4顺接。保留原编号，重复编号属于版式问题，若统一重编号需同时核对所有引用。

[相关正文：46.1：期中考试：非Borel集的构造](../../02-math-analysis-ii/46-submanifold-integrals/46-03-p0547-0552.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> H4)或H5)

**正文：**

> I4) 或者 I5)

**理由：** 统一可积性属于I组第四第五问，canonical已修复源图错引H组。
