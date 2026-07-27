# 麦克斯韦方程：从四条定律到一条统一方程

这一系列把麦克斯韦方程拆成十篇文章。每篇都从问题出发，给出关键公式的推导过程，并说明推导中使用的假设。建议顺序阅读；已经熟悉矢量微积分的读者可以从第四篇开始。

全系列默认使用真空中的 SI 单位制，并采用右手坐标系。核心目标是理解下面三层表达为何等价：

$$
\begin{aligned}
&\text{四条三维麦克斯韦方程}
\\
&\qquad\Downarrow
\\
&\text{两条四维协变方程}
\\
&\qquad\Downarrow
\\
&\text{一条几何代数方程}
\end{aligned}
$$

## 十篇文章

1. [矢量微积分：场、梯度、散度与旋度](./maxwell/01-vector-calculus.md)

   从小位移、小立方体和小回路出发，推导梯度、散度、旋度与拉普拉斯算符。

2. [积分定理：高斯定理与斯托克斯定理](./maxwell/02-integral-theorems.md)

   解释内部边界如何相消，并把麦克斯韦方程的微分形式逐条变成积分形式。

3. [电磁学的基本量：电荷、电流、场、通量与势](./maxwell/03-electromagnetic-quantities.md)

   推导 $Q=\int\rho\,\mathrm dV$、$I=\int\mathbf J\cdot\mathrm d\mathbf S$、连续性方程以及电磁势。

4. [四条麦克斯韦方程与电磁波](./maxwell/04-maxwell-equations.md)

   从库仑定律、法拉第实验和充电电容出发得到四条方程，再逐步推导光速为 $c$ 的波动方程。

5. [线性代数与指标记号](./maxwell/05-linear-algebra-and-indices.md)

   推导爱因斯坦求和、升降指标、反对称张量的六个独立分量及列维-奇维塔符号。

6. [狭义相对论：为什么电场和磁场会混合](./maxwell/06-special-relativity.md)

   从光速不变推导洛伦兹变换，并说明 $\rho$ 与 $\mathbf J$、$\mathbf E$ 与 $\mathbf B$ 如何组成四维对象。

7. [电磁场张量：四条方程如何变成两条](./maxwell/07-field-tensor.md)

   展开 $F^{\mu\nu}$ 和它的对偶张量，逐分量还原四条麦克斯韦方程。

8. [微分形式：用 $\mathrm dF=0$ 表示无源方程](./maxwell/08-differential-forms.md)

   从外积、外微分和广义斯托克斯定理出发，推导 $\mathrm dF=0$ 与 $\mathrm d\star F=\mu_0\star J$。

9. [几何代数：四条方程如何写成一条](./maxwell/09-geometric-algebra.md)

   直接展开几何积，验证一条多重向量方程如何按标量、向量、二重向量和三重向量分级还原四条方程。

10. [规范势、拉格朗日量与规范对称性](./maxwell/10-gauge-and-lagrangian.md)

    推导 $\mathbf E$、$\mathbf B$ 的势表示、势的波动方程，并通过作用量变分得到有源麦克斯韦方程。

## 先记住主线

真空中的四条麦克斯韦方程是：

$$
\begin{aligned}
\nabla\cdot\mathbf E
&=
\frac{\rho}{\varepsilon_0},
&
\nabla\cdot\mathbf B
&=
0,
\\
\nabla\times\mathbf E
&=
-\frac{\partial\mathbf B}{\partial t},
&
\nabla\times\mathbf B
&=
\mu_0\mathbf J
+
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}.
\end{aligned}
$$

在四维时空中，它们可以写成：

$$
\partial_\mu F^{\mu\nu}
=
\mu_0J^\nu,
\qquad
\partial_\mu\widetilde F^{\mu\nu}
=
0.
$$

在时空几何代数中，它们还可以进一步写成：

$$
\partial F
=
\mu_0J.
$$

最后一行看起来很短，但其中包含不同等级的几何对象。第九篇会把它完全展开，从而看清这项压缩没有丢失任何方程。
