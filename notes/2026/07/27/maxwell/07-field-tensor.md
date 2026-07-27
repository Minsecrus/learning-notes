# 07｜电磁场张量：四条方程如何变成两条

[上一篇：狭义相对论](./06-special-relativity.md) · [返回系列目录](../maxwell.md) · [下一篇：微分形式](./08-differential-forms.md)

本篇采用以下约定：

$$
x^\mu=(ct,x,y,z),
\qquad
\eta_{\mu\nu}
=
\operatorname{diag}(1,-1,-1,-1),
$$

$$
A^\mu
=
\left(
\frac{\phi}{c},
\mathbf A
\right),
\qquad
J^\mu
=
(c\rho,\mathbf J).
$$

不同教材可能选择相反的度规号差或不同的 $F_{\mu\nu}$ 定义，矩阵中的若干负号会随之变化。只要从头到尾使用同一套约定，最终的三维麦克斯韦方程相同。

## 1. 从四维势构造电磁场张量

四维导数为：

$$
\partial_\mu
=
\left(
\frac{1}{c}\frac{\partial}{\partial t},
\nabla
\right).
$$

升指标后：

$$
\partial^\mu
=
\eta^{\mu\nu}\partial_\nu
=
\left(
\frac{1}{c}\frac{\partial}{\partial t},
-\nabla
\right).
$$

定义电磁场张量：

$$
\boxed{
F^{\mu\nu}
=
\partial^\mu A^\nu
-
\partial^\nu A^\mu
}.
$$

交换指标：

$$
F^{\nu\mu}
=
\partial^\nu A^\mu
-
\partial^\mu A^\nu
=
-F^{\mu\nu},
$$

所以它自动是反对称张量。这就像你站在网格上的两个点之间，从 A 看 B 和从 B 看 A 的坡度刚好相反一样。这种反对称性是电磁场张量的核心灵魂，意味着时间和空间在相互交织时有着严格的“方向性”。

### 时间—空间分量给出电场

令 $i=1,2,3$：

$$
\begin{aligned}
F^{0i}
&=
\partial^0A^i-\partial^iA^0
\\
&=
\frac{1}{c}
\frac{\partial A_i}{\partial t}
+
\frac{1}{c}
\frac{\partial\phi}{\partial x^i}
\\
&=
-\frac{E_i}{c},
\end{aligned}
$$

因为：

$$
E_i
=
-\frac{\partial\phi}{\partial x^i}
-
\frac{\partial A_i}{\partial t}.
$$

因此：

$$
\boxed{
F^{0i}
=
-\frac{E_i}{c},
\qquad
F^{i0}
=
\frac{E_i}{c}
}.
$$

### 空间—空间分量给出磁场

例如：

$$
\begin{aligned}
F^{12}
&=
\partial^1A^2-\partial^2A^1
\\
&=
-\frac{\partial A_y}{\partial x}
+
\frac{\partial A_x}{\partial y}
\\
&=
-B_z.
\end{aligned}
$$

同理：

$$
F^{23}=-B_x,
\qquad
F^{31}=-B_y.
$$

所以：

$$
\boxed{
F^{\mu\nu}
=
\begin{pmatrix}
0 & -E_x/c & -E_y/c & -E_z/c\\
E_x/c & 0 & -B_z & B_y\\
E_y/c & B_z & 0 & -B_x\\
E_z/c & -B_y & B_x & 0
\end{pmatrix}
}.
$$

三个 $F^{0i}$ 放入电场，三个独立的 $F^{ij}$ 放入磁场。

## 2. 有源方程的协变形式

有源的两条麦克斯韦方程可以写成：

$$
\boxed{
\partial_\mu F^{\mu\nu}
=
\mu_0J^\nu
}.
$$

自由指标 $\nu$ 有四个取值，所以这一行包含四个分量方程。

### 取 $\nu=0$：电场高斯定律

展开左边：

$$
\partial_\mu F^{\mu0}
=
\partial_0F^{00}
+
\partial_1F^{10}
+
\partial_2F^{20}
+
\partial_3F^{30}.
$$

反对称性给出 $F^{00}=0$，而：

$$
F^{i0}=\frac{E_i}{c}.
$$

因此：

$$
\partial_\mu F^{\mu0}
=
\frac{1}{c}
\left(
\frac{\partial E_x}{\partial x}
+
\frac{\partial E_y}{\partial y}
+
\frac{\partial E_z}{\partial z}
\right)
=
\frac{1}{c}\nabla\cdot\mathbf E.
$$

右边为：

$$
\mu_0J^0
=
\mu_0c\rho.
$$

所以：

$$
\frac{1}{c}\nabla\cdot\mathbf E
=
\mu_0c\rho.
$$

两边乘以 $c$，再使用 $\mu_0c^2=1/\varepsilon_0$：

$$
\boxed{
\nabla\cdot\mathbf E
=
\frac{\rho}{\varepsilon_0}
}.
$$

### 取 $\nu=1$：安培—麦克斯韦定律的 $x$ 分量

展开：

$$
\partial_\mu F^{\mu1}
=
\partial_0F^{01}
+
\partial_2F^{21}
+
\partial_3F^{31}.
$$

代入矩阵分量：

$$
F^{01}=-\frac{E_x}{c},
\qquad
F^{21}=B_z,
\qquad
F^{31}=-B_y.
$$

于是：

$$
\begin{aligned}
\partial_\mu F^{\mu1}
&=
-\frac{1}{c^2}
\frac{\partial E_x}{\partial t}
+
\frac{\partial B_z}{\partial y}
-
\frac{\partial B_y}{\partial z}
\\
&=
\left(\nabla\times\mathbf B\right)_x
-
\frac{1}{c^2}
\frac{\partial E_x}{\partial t}.
\end{aligned}
$$

右边是 $\mu_0J_x$，所以：

$$
\left(\nabla\times\mathbf B\right)_x
-
\frac{1}{c^2}
\frac{\partial E_x}{\partial t}
=
\mu_0J_x.
$$

取 $\nu=2,3$ 会得到 $y,z$ 分量。三者合并：

$$
\boxed{
\nabla\times\mathbf B
-
\frac{1}{c^2}
\frac{\partial\mathbf E}{\partial t}
=
\mu_0\mathbf J
}.
$$

移项后就是熟悉的安培—麦克斯韦定律。你可以把它想象成风向标和水流的互动：空间里打转的磁场旋涡，一部分是被真实流动的电流源头激发的，另一部分则是被正在不断变化的电场这种“隐形水流”硬生生带动起来的。把四维的方程拆解开，我们又看到了那幅熟悉的动态物理图景。

## 3. 对偶张量

定义四维列维-奇维塔符号，并选择：

$$
\varepsilon^{0123}=+1.
$$

电磁场张量的对偶定义为：

$$
\boxed{
\widetilde F^{\mu\nu}
=
\frac12
\varepsilon^{\mu\nu\rho\sigma}
F_{\rho\sigma}
}.
$$

在本篇约定下：

$$
\boxed{
\widetilde F^{\mu\nu}
=
\begin{pmatrix}
0 & -B_x & -B_y & -B_z\\
B_x & 0 & E_z/c & -E_y/c\\
B_y & -E_z/c & 0 & E_x/c\\
B_z & E_y/c & -E_x/c & 0
\end{pmatrix}
}.
$$

对偶运算交换了电场和磁场在矩阵中的角色，并带入相应的符号与 $c$。

## 4. 无源方程的协变形式

另外两条麦克斯韦方程可以写成：

$$
\boxed{
\partial_\mu\widetilde F^{\mu\nu}
=
0
}.
$$

### 取 $\nu=0$：磁场高斯定律

$$
\begin{aligned}
\partial_\mu\widetilde F^{\mu0}
&=
\partial_1B_x
+
\partial_2B_y
+
\partial_3B_z
\\
&=
\nabla\cdot\mathbf B.
\end{aligned}
$$

所以：

$$
\boxed{
\nabla\cdot\mathbf B=0
}.
$$

### 取 $\nu=1$：法拉第定律的 $x$ 分量

$$
\partial_\mu\widetilde F^{\mu1}
=
\partial_0\widetilde F^{01}
+
\partial_2\widetilde F^{21}
+
\partial_3\widetilde F^{31}.
$$

代入：

$$
\widetilde F^{01}=-B_x,
\qquad
\widetilde F^{21}=-\frac{E_z}{c},
\qquad
\widetilde F^{31}=\frac{E_y}{c}.
$$

得到：

$$
\begin{aligned}
\partial_\mu\widetilde F^{\mu1}
&=
-\frac{1}{c}
\frac{\partial B_x}{\partial t}
-
\frac{1}{c}
\frac{\partial E_z}{\partial y}
+
\frac{1}{c}
\frac{\partial E_y}{\partial z}
\\
&=
-\frac{1}{c}
\left[
\frac{\partial B_x}{\partial t}
+
\left(\nabla\times\mathbf E\right)_x
\right].
\end{aligned}
$$

令它为零：

$$
\left(\nabla\times\mathbf E\right)_x
=
-\frac{\partial B_x}{\partial t}.
$$

其余空间分量同理，于是：

$$
\boxed{
\nabla\times\mathbf E
=
-\frac{\partial\mathbf B}{\partial t}
}.
$$

## 5. 无源方程也可以从势直接推出

由定义：

$$
F_{\mu\nu}
=
\partial_\mu A_\nu
-
\partial_\nu A_\mu.
$$

计算循环和：

$$
\partial_\lambda F_{\mu\nu}
+
\partial_\mu F_{\nu\lambda}
+
\partial_\nu F_{\lambda\mu}.
$$

逐项展开：

$$
\begin{aligned}
={}&
\partial_\lambda\partial_\mu A_\nu
-
\partial_\lambda\partial_\nu A_\mu
\\
&+
\partial_\mu\partial_\nu A_\lambda
-
\partial_\mu\partial_\lambda A_\nu
\\
&+
\partial_\nu\partial_\lambda A_\mu
-
\partial_\nu\partial_\mu A_\lambda.
\end{aligned}
$$

偏导数的顺序可以随意交换，这就好像在四维网格上先向东走再向北爬坡，和先向北爬坡再向东走，你测量到的总体落差是一样的。当把这三项循环相加时，所有的项都会像玩跷跷板一样两两互相抵消，最终什么都不剩，因此：

$$
\boxed{
\partial_\lambda F_{\mu\nu}
+
\partial_\mu F_{\nu\lambda}
+
\partial_\nu F_{\lambda\mu}
=
0
}.
$$

这叫 Bianchi 恒等式，它与：

$$
\partial_\mu\widetilde F^{\mu\nu}=0
$$

等价。无源方程因此内置在 $F$ 由势 $A$ 构造的方式中。

## 6. 电荷守恒怎样藏在有源方程里

对有源方程再取 $\partial_\nu$：

$$
\partial_\nu\partial_\mu F^{\mu\nu}
=
\mu_0\partial_\nu J^\nu.
$$

令左边为 $X$。交换哑指标 $\mu,\nu$：

$$
\begin{aligned}
X
&=
\partial_\mu\partial_\nu F^{\nu\mu}
\\
&=
-\partial_\mu\partial_\nu F^{\mu\nu}
\\
&=
-X.
\end{aligned}
$$

所以 $X=0$。因此：

$$
\boxed{
\partial_\nu J^\nu=0
}.
$$

这就是四维形式的电荷连续性方程。它其实在讲一个非常直白的道理：池塘里的水不可能凭空消失，水位的下降必然伴随着水流向外涌出。“对称的二阶偏导”就像一个不管方向的无偏见测绘员，而“反对称的场张量”却非要分出个正反，这两者一碰头，结果自然就变成了零。正是这种严密的网格运算结构，强有力地保障了电荷在整个宇宙中始终守恒。

## 7. 为什么这种写法是洛伦兹协变的

洛伦兹变换下：

$$
F'^{\mu\nu}
=
\Lambda^\mu{}_\alpha
\Lambda^\nu{}_\beta
F^{\alpha\beta},
$$

$$
J'^\nu
=
\Lambda^\nu{}_\beta J^\beta.
$$

导数按协向量方式变换。缩并掉 $\mu$ 后，$\partial_\mu F^{\mu\nu}$ 只剩自由指标 $\nu$，整体按四维向量变换，恰好与 $J^\nu$ 的变换方式相同。因此：

$$
\partial_\mu F^{\mu\nu}
=
\mu_0J^\nu
$$

在所有惯性系中保持同一形式。无论你是静止在地面，还是坐在一列高速飞驰的动车上，只要大家都用同一套四维网格的坐标语言来记录，这套电磁规律的样貌在不同人眼中看起来就是一模一样的。

## 8. 两个场不变量

张量完全缩并后得到洛伦兹标量。直接代入矩阵可以算出：

$$
\boxed{
F_{\mu\nu}F^{\mu\nu}
=
2\left(
B^2-\frac{E^2}{c^2}
\right)
},
$$

$$
\boxed{
F_{\mu\nu}\widetilde F^{\mu\nu}
=
-\frac{4}{c}
\mathbf E\cdot\mathbf B
}.
$$

因为左边是洛伦兹标量，右边对应的组合在不同惯性系中保持不变。这与上一篇得到的两个场不变量一致。

## 9. 四条怎样变成两条

最终结果是：

$$
\boxed{
\begin{aligned}
\partial_\mu F^{\mu\nu}
&=
\mu_0J^\nu,
\\
\partial_\mu\widetilde F^{\mu\nu}
&=
0.
\end{aligned}
}
$$

第一条在 $\nu=0$ 时给出电场高斯定律，在 $\nu=1,2,3$ 时给出安培—麦克斯韦定律。

第二条在 $\nu=0$ 时给出磁场高斯定律，在 $\nu=1,2,3$ 时给出法拉第定律。

这所谓的“两条”方程，其实是两条带有自由维度的张量宣言，每一条都像折叠伞一样，内部撑开了四个独立的分量关系。它就像把四张散乱的说明书，用时间和空间这套坚固的骨架重新装订成两本精装手册。表面的数量虽然被压缩了，但电磁场怎样像源泉般喷发、又怎样在虚空中相互激荡起伏的全部故事，一点也没有丢失。

[上一篇：狭义相对论](./06-special-relativity.md) · [返回系列目录](../maxwell.md) · [下一篇：微分形式](./08-differential-forms.md)
