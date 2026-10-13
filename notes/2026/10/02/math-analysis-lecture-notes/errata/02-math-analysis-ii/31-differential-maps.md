# 勘误：31 映射的微分与 Jacobi 矩阵

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> 假设 $f$ 在 $x \in \Omega$ 处可微分

**修正：**

> 假设 $f$ 在 $x_0 \in \Omega$ 处可微分

**理由：** 紧随的微分df(x0)及两个切空间基点都为x0，原图首句漏下标，统一基点以避免在一个点假设可微而取另一点微分。

**原文：**

> 用 $T_{f(x_0)}\Omega'$ 代表它的定义域的线性空间 $\mathbb{R}^m$

**修正：**

> 用 $T_{f(x_0)}\Omega'$ 代表它的值域的线性空间 $\mathbb{R}^m$

**理由：** df(x0):Rn→Rm的目标切空间对应值域，前一个Tx0Ω已代表定义域；原图第二次写定义域，与紧随箭头及Rn/Rm维数均矛盾。

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> 可以用 $n \times m$ 的矩阵

**修正：**

> 可以用 $m \times n$ 的矩阵

**理由：** df:R^n→R^m以列向量作用，输入n坐标、输出m坐标；原图紧随Jacobi条目也是i≤m、j≤n，因此矩阵有m行n列。

**原文：**

> $(J_{ij})_{\substack{i \leqslant n, \\ j \leqslant m}}$

**修正：**

> $(J_{ji})_{\substack{j \leqslant m, \\ i \leqslant n}}$

**理由：** 本段输入基编号i≤n、输出基编号j≤m，后续第j输出分量明确是Σ_i J_ji v_i；故矩阵条目应以输出j为行、输入i为列。

**原文：**

> $$
> \begin{aligned}
> \frac{|f(x_0 + v) - f(x_0) - df(x_0)v|}{|v|} &= \frac{\big|(\cdots, f_j(x_0 + v) - f_j(x_0), \cdots) - (\cdots, \sum_{i=1}^n J_{ji}v_i, \cdots)\big|}{|v|} \\
> &= \frac{\sqrt{\sum_{j=1}^n \big|f_j(x_0 + v) - f_j(x_0) - \sum_{i=1}^n J_{ji}v_i\big|^2}}{|v|}
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \frac{|f(x_0 + v) - f(x_0) - df(x_0)v|}{|v|} &= \frac{\big|(\cdots, f_j(x_0 + v) - f_j(x_0), \cdots) - (\cdots, \sum_{i=1}^n J_{ji}v_i, \cdots)\big|}{|v|} \\
> &= \frac{\sqrt{\sum_{j=1}^m \big|f_j(x_0 + v) - f_j(x_0) - \sum_{i=1}^n J_{ji}v_i\big|^2}}{|v|}
> \end{aligned}
> $$

**理由：** 这里对输出分量f_j求Euclidean范数和逐分量估计，输出数为m而不是输入维数n；该页前提已明定j=1,…,m，原图上下界和最终项数n均误。输入i求和仍保留上界n。

**原文：**

> $$
> \begin{aligned}
> \frac{|f(x_0 + v) - f(x_0) - df(x_0)v|}{|v|} &= \frac{\sqrt{\sum_{j=1}^n \big|f_j(x_0 + v) - f_j(x_0) - \sum_{i=1}^n J_{ji}v_i\big|^2}}{|v|} \\
> &\leqslant \sum_{j=1}^n \frac{\big|f_j(x_0 + v) - f_j(x_0) - \sum_{i=1}^n J_{ji}v_i\big|}{|v|} = n \times o(1) = o(1),
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \frac{|f(x_0 + v) - f(x_0) - df(x_0)v|}{|v|} &= \frac{\sqrt{\sum_{j=1}^m \big|f_j(x_0 + v) - f_j(x_0) - \sum_{i=1}^n J_{ji}v_i\big|^2}}{|v|} \\
> &\leqslant \sum_{j=1}^m \frac{\big|f_j(x_0 + v) - f_j(x_0) - \sum_{i=1}^n J_{ji}v_i\big|}{|v|} = m \times o(1) = o(1),
> \end{aligned}
> $$

**理由：** 这里对输出分量f_j求Euclidean范数和逐分量估计，输出数为m而不是输入维数n；该页前提已明定j=1,…,m，原图上下界和最终项数n均误。输入i求和仍保留上界n。

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> $$
> o(1) = \frac{\sqrt{\sum_{j=1}^n \Big| f_j\big(x_0 + \overbrace{(0, \cdots, 0, t, 0 \cdots, 0)}^{\text{只有第 } i_0 \text{ 个位置非 } 0}\big) - f_j(x_0) - J_{ji_0}t \Big|^2}}{t}.
> $$

**修正：**

> $$
> o(1) = \frac{\sqrt{\sum_{j=1}^m \Big| f_j\big(x_0 + \overbrace{(0, \cdots, 0, t, 0 \cdots, 0)}^{\text{只有第 } i_0 \text{ 个位置非 } 0}\big) - f_j(x_0) - J_{ji_0}t \Big|^2}}{|t|}.
> $$

**理由：** 继续前页R^m值映射，平方和覆盖m个输出分量；若分母出现t，输入增量v=t e_i的长度应为|t|，以保持微分定义中的非负范数商。

**原文：**

> $$
> \begin{aligned}
> &\sqrt{\sum_{j=1}^n \Big| f_j\big(x_0 + (0, \cdots, 0, t, 0 \cdots, 0)\big) - f_j(x_0) - J_{ji_0}t \Big|^2} \\
> \geqslant &\Big| f_{j_0}\big(x_0 + (0, \cdots, 0, t, 0 \cdots, 0)\big) - f_{j_0}(x_0) - J_{j_0i_0}t \Big|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> &\sqrt{\sum_{j=1}^m \Big| f_j\big(x_0 + (0, \cdots, 0, t, 0 \cdots, 0)\big) - f_j(x_0) - J_{ji_0}t \Big|^2} \\
> \geqslant &\Big| f_{j_0}\big(x_0 + (0, \cdots, 0, t, 0 \cdots, 0)\big) - f_{j_0}(x_0) - J_{j_0i_0}t \Big|.
> \end{aligned}
> $$

**理由：** 继续前页R^m值映射，平方和覆盖m个输出分量；若分母出现t，输入增量v=t e_i的长度应为|t|，以保持微分定义中的非负范数商。

**原文：**

> $$
> o(1) = \Big| f_{j_0}\big(x_0 + (0, \cdots, 0, t, 0 \cdots, 0)\big) - f_{j_0}(x_0) - J_{j_0i_0}t \Big| / t.
> $$

**修正：**

> $$
> o(1) = \Big| f_{j_0}\big(x_0 + (0, \cdots, 0, t, 0 \cdots, 0)\big) - f_{j_0}(x_0) - J_{j_0i_0}t \Big| / |t|.
> $$

**理由：** 这里是上文范数余项比值，v=t e_i的长度为|t|；原图除以带符号t并非原微分定义的范数商。

**原文：**

> **命题 183**. (链式法则) *假设 $\Omega_j \subset \mathbb{R}^{m_j}$ 是开集，其中 $j = 1, 2, 3$，$f : \Omega_1 \to \Omega_2$，$g : \Omega_2 \to \Omega_3$ 是映射。假设 $f$ 在点 $x_1 \in \Omega_1$ 处可微，$g$ 在点 $x_2 = f(x_1) \in \Omega_2$ 处可微，那么复合映射 $g \circ f$ 在 $x_0$ 处可微，并且*
>
> $$
> \big(d(g \circ f)\big)(x_0) = (dg)(f(x_0)) \circ df(x_0).
> $$

**修正：**

> **命题 183**. (链式法则) *假设 $\Omega_j \subset \mathbb{R}^{m_j}$ 是开集，其中 $j = 1, 2, 3$，$f : \Omega_1 \to \Omega_2$，$g : \Omega_2 \to \Omega_3$ 是映射。假设 $f$ 在点 $x_1 \in \Omega_1$ 处可微，$g$ 在点 $x_2 = f(x_1) \in \Omega_2$ 处可微，那么复合映射 $g \circ f$ 在 $x_1$ 处可微，并且*
>
> $$
> \big(d(g \circ f)\big)(x_1) = (dg)(f(x_1)) \circ df(x_1).
> $$

**理由：** 命题假设仅在x1处f可微、在x2=f(x1)处g可微；结论中的x0没有定义，且次页所有交换图与证明均以x1为基点。统一结论和公式为x1，不扩大可微性量词。

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> g(f(x_1 + h)) - g(f(x_1)) &= g(f(x_1) + df(x_1)h + \delta(h)) - g(f(x_1)) \\
> &= df(x_2)(df(x_1)h + \delta(h)) + \Delta(f'(x_0)h + \delta(h)) \\
> &= \underbrace{df(x_2)(df(x_1)h)}_{=dg(x_2) \circ df(x_1)(h)} + df(x_2)(\delta(h)) + \Delta(f'(x_0)h + \delta(h)).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> g(f(x_1 + h)) - g(f(x_1)) &= g(f(x_1) + df(x_1)h + \delta(h)) - g(f(x_1)) \\
> &= dg(x_2)(df(x_1)h + \delta(h)) + \Delta(df(x_1)h + \delta(h)) \\
> &= \underbrace{dg(x_2)(df(x_1)h)}_{=dg(x_2) \circ df(x_1)(h)} + dg(x_2)(\delta(h)) + \Delta(df(x_1)h + \delta(h)).
> \end{aligned}
> $$

**理由：** 本页上一行g(x2+ℓ)展开的线性项为dg(x2)，不是df(x2)；x2甚至未必属于f的定义域。内层增量为df(x1)h+δ(h)，原图f′(x0)是未定义的一维记号与基点。逐处换成同一已定义增量。

**原文：**

> $$
> \begin{aligned}
> &\frac{g(f(x_1 + h)) - g(f(x_1)) - dg(x_2) \circ df(x_1)(h)}{h} \\
> =&\frac{df(x_2)(\delta(h))}{h} + \frac{\Delta(f'(x_0)h + \delta(h))}{h} \\
> \leqslant& C \left| \frac{\delta(h)}{h} \right| + \underbrace{\left| \frac{\Delta(f'(x_0)h + \delta(h))}{f'(x_0)h + \delta(h)} \right|}_{o(1)} \underbrace{\left| \frac{f'(x_0)h + \delta(h)}{h} \right|}_{\leqslant C_1}.
> \end{aligned}
> $$

**修正：**

> 令 $k(h)=df(x_1)h+\delta(h)$，并令 $\eta(\ell)=|\Delta(\ell)|/|\ell|$（$\ell\neq0$），$\eta(0)=0$，则 $\eta(\ell)\to0$。所以，
>
> $$
> \begin{aligned}
> &\frac{\left|g(f(x_1+h))-g(f(x_1))-dg(x_2)\circ df(x_1)(h)\right|}{|h|}\\
> \leqslant& C\frac{|\delta(h)|}{|h|}+\eta(k(h))\frac{|k(h)|}{|h|}\\
> \leqslant& C\frac{|\delta(h)|}{|h|}+\eta(k(h))\left(\|df(x_1)\|+\frac{|\delta(h)|}{|h|}\right).
> \end{aligned}
> $$

**理由：** 原图将向量除以向量h或内层增量，并对向量商写≤，在一般维数无定义。须以标量范数商估计余项。k(h)=df(x1)h+δ(h)=O(|h|)，Δ(k)=o(|k|)；η(0)=0处理k(h)=0的情形，不引入不可除零量。线性dg有界，故右侧趋零。只是修复已有链式法则证明。

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> $$
> e^{A+V} - e^V = \sum_{n=0}^{\infty} \frac{1}{n!} \left( (A+V)^n - A^n \right)
> $$

**修正：**

> $$
> e^{A+V} - e^A = \sum_{n=0}^{\infty} \frac{1}{n!} \left( (A+V)^n - A^n \right)
> $$

**理由：** 右边幂级数逐项减去A^n，且所求是exp在A处的增量；原图左边误写exp(V)。令V=0时原式左exp(A)−I、右0即可反证。

**原文：**

> $$
> (A+V)^n - A^n = \sum_{k=0}^n A^k V A^{n-1-k} + Q_n(V).
> $$

**修正：**

> $$
> (A+V)^n - A^n = \sum_{k=0}^{n-1} A^k V A^{n-1-k} + Q_n(V),\quad n\geqslant1.
> $$

**理由：** 一次V项只有n个位置，左右A的指数和为n−1，故k=0,…,n−1；原图多出k=n项，含A^-1且A不假设可逆。n=0时增量及余项均为0。

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> 我们可以要求 $\|V\| \leqslant \|A\|$，因为最终我们会令 $V \to 0$（除非 $A=0$，此时 $Q_n(V) = V^n$，下面的结论仍然成立），所以

**修正：**

> 增大上页乘法估计的常数使 $c\geqslant1$，令 $M=\max(1,\|A\|)$。因为最终令 $V\to0$，我们只需考虑 $\|V\|\leqslant1$。其中 $Q_0=Q_1=0$，对于 $n\geqslant2$，每个至少有两个 $V$ 的通项，其余因子的范数都不超过 $M$，所以

**理由：** 原图用||A||^{n−2}再漏掉||A||^-2因子，且A=0时该估计未定义。取固定M≥1并限制小增量，统一覆盖所有A和n≥2的余项；c可增大到≥1以允许用c^n界n−1次乘法。

**原文：**

> $$
> \|Q_v(V)\| \leqslant 2^n \times (c^n \|V\|^2 \|A\|^{n-2}).
> $$

**修正：**

> $$
> \|Q_n(V)\| \leqslant 2^n c^n \|V\|^2 M^{n-2},\quad n\geqslant2.
> $$

**理由：** Q的下标应为n。每项有至少两个V，其余至多n−2个因子均受M=max(1,||A||)控制；不再让A=0或n<2出现负幂。

**原文：**

> $$
> \begin{aligned}
> &\left\| \exp(A+V) - \exp(A) - \sum_{n=0}^{\infty} \frac{1}{n!} \left( \sum_{k=0}^n A^k V A^{n-1-k} \right) \right\| \\
> \leqslant& \sum_{n=0}^{\infty} \left\| \frac{1}{n!} Q_n(V) \right\| \leqslant \left( \sum_{n=0}^{\infty} \frac{(2c\|A\|)^n}{n!} \right) \|V\|^2 = e^{2c\|A\|} \|V\|^2.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> &\left\| \exp(A+V)-\exp(A)-\sum_{n=1}^{\infty}\frac1{n!}\left(\sum_{k=0}^{n-1}A^kVA^{n-1-k}\right)\right\|\\
> \leqslant&\sum_{n=2}^{\infty}\frac1{n!}\|Q_n(V)\|\\
> \leqslant&\left(\sum_{n=2}^{\infty}\frac{(2c)^nM^{n-2}}{n!}\right)\|V\|^2
> \leqslant\frac{e^{2cM}}{M^2}\|V\|^2.
> \end{aligned}
> $$

**理由：** 一次项须外层n≥1、内层k≤n−1；Q0=Q1=0，余项从n=2起。按修复后的M估计严格求和得M^-2 e^{2cM}||V||²，固定A时仍为O(||V||²)。原图从||A||^{n−2}直接写e^{2c||A||}丢失因子，不能由其上一界推出。

**原文：**

> $\sum_{n=0}^{\infty} \frac{1}{n!} \left( \sum_{k=0}^n A^k V A^{n-1-k} \right)$ 是收敛的

**修正：**

> $\sum_{n=1}^{\infty} \frac{1}{n!} \left( \sum_{k=0}^{n-1} A^k V A^{n-1-k} \right)$ 是收敛的

**理由：** 与前页正确的一次V项保持一致：n≥1且k≤n−1，否则出现A的负幂。每层n项，阶乘保证绝对收敛。

**原文：**

> $$
> d\exp(A)(V) = \sum_{n=0}^{\infty} \frac{1}{n!} \left( \sum_{k=0}^n A^k V A^{n-1-k} \right)
> $$

**修正：**

> $$
> d\exp(A)(V) = \sum_{n=1}^{\infty} \frac{1}{n!} \left( \sum_{k=0}^{n-1} A^k V A^{n-1-k} \right)
> $$

**理由：** 矩阵指数微分由每个A^n的一次V项构成，共n个插入位置；原图两层边界多算并出现负幂。修后A=0仅n=1项为V，恰与下行d exp(0)=Id相符；A、V交换时也给exp(A)V。

[相关正文：映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)

## 数学修正

**原文：**

> $$
> \Phi : \Omega_2 \to \Omega_2, \quad (r, \vartheta) \mapsto (r \cos \vartheta, r \sin \vartheta).
> $$

**修正：**

> $$
> \Phi : \Omega_2 \to \Omega_1, \quad (r, \vartheta) \mapsto (r \cos \vartheta, r \sin \vartheta).
> $$

**理由：** [映射的微分与 Jacobi 矩阵](../../02-math-analysis-ii/31-differential-maps/31-01-p0344-0351.md)Ω2是极坐标(r,θ)域，Ω1是去正轴的平面点域；值(r cosθ,r sinθ)落在Ω1，原图误写Ω2，比如r=1、θ=π时输出(-1,0)不在Ω2。

[相关正文：31.1：作业：齐次函数与Euler公式](../../02-math-analysis-ii/31-differential-maps/31-03-p0352-0356.md)

## 数学修正

**原文：**

> (2) $f:\mathbb{R}_{>0}\times(0,2\pi)\times\mathbb{R}\to\mathbb{R}^2,\quad(r,\theta,z)\mapsto(r\cos\theta,r\sin\theta,z)$

**修正：**

> (2) $f:\mathbb{R}_{>0}\times(0,2\pi)\times\mathbb{R}\to\mathbb{R}^3,\quad(r,\theta,z)\mapsto(r\cos\theta,r\sin\theta,z)$

**理由：** 同一条映射的值是(r cosθ,r sinθ,z)三元组，且C2明确相同柱面映射值域R^3；原图值域R^2为笔误。

**原文：**

> (6) $f:\mathbb{R}^2\to\mathbb{R}^2,\quad(u,v)\mapsto(\frac{u}{u^2+v^2},\frac{v}{u^2+v^2})$

**修正：**

> (6) $f:\mathbb{R}^2\setminus\{(0,0)\}\to\mathbb{R}^2,\quad(u,v)\mapsto(\frac{u}{u^2+v^2},\frac{v}{u^2+v^2})$

**理由：** 该条两个分量均以u²+v²为分母，原点无定义；唯一必要的定义域排除点为(0,0)。不添加题目解答。

**原文：**

> $x=r\cos\theta,y=\sin\theta,z=z$

**修正：**

> $x=r\cos\theta,y=r\sin\theta,z=z$

**理由：** 原图此处漏r；紧随的Φ(r,θ,z)=(r cosθ,r sinθ,z)和∂_r、∂_θ式均唯一确定y=r sinθ。

**原文：**

> $$
> \frac{\partial^2f}{\partial x^2}+\frac{\partial^2f}{\partial y^2}+\frac{\partial^2f}{\partial z^2}=\frac1{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial f}{\partial\theta}\right)+\frac1{r^2\sin\theta}\left(\sin\theta\frac{\partial f}{\partial r}\right)+\frac1{r^2\sin^2\theta}\frac{\partial^2f}{\partial\varphi^2}.
> $$

**修正：**

> $$
> \frac{\partial^2f}{\partial x^2}+\frac{\partial^2f}{\partial y^2}+\frac{\partial^2f}{\partial z^2}=\frac1{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial f}{\partial r}\right)+\frac1{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial f}{\partial\theta}\right)+\frac1{r^2\sin^2\theta}\frac{\partial^2f}{\partial\varphi^2}.
> $$

**理由：** 从同页球坐标映射求得正交尺度h_r=1,h_θ=r,h_φ=r sinθ，体积因子r²sinθ；div grad的径向项为r^-2 ∂_r(r² f_r)，θ项为(r²sinθ)^-1 ∂_θ(sinθ f_θ)。原图径向内误f_θ、θ项漏外导数且内误f_r；代入f=r²可验证原式不等于Δf=6。只修题中公式，不添加作业解答。

**原文：**

> 证明，下面的函数 $f:\mathbb{R}^n\to\mathbb{R}$ 是齐次函数：

**修正：**

> 证明，下面的函数 $f:\mathbb{R}^n\setminus\{0\}\to\mathbb{R}$ 是齐次函数：

**理由：** 同段齐次函数定义域明确是Rn去原点，D1第四题商函数只假设h(x)在x非0时非零，原点可能为0/0。统一题目列表到已有的非零定义域，不改变四个题目的齐次断言。

[相关正文：31.1：作业：齐次函数与Euler公式](../../02-math-analysis-ii/31-differential-maps/31-03-p0352-0356.md)

## 数学修正

**原文：**

> 对任意 $v\in\mathbb{R}^2$

**修正：**

> 对任意 $v\in\mathbb{R}^n$

**理由：** D组一直是Rn去原点上的齐次函数，方向v应属于同一Rn；此题没有n=2限制，原图二维方向与一般定义域不匹配。

**原文：**

> $T_p\Omega_1$

**修正：**

> $T_p\Omega$

**理由：** 习题T定义的开集只有Ω，曲线类C(p)就在Ω中，Ω1未在该题定义；T4及后续也均用TpΩ，故删误加的下标1。

[相关正文：31.1：作业：齐次函数与Euler公式](../../02-math-analysis-ii/31-differential-maps/31-03-p0352-0356.md)

## 数学修正

**原文：**

> T5) 在 $\Omega$ 上考虑曲线
>
> $$
> \ell_k : (-1, 1) \to \Omega', \ \ t \mapsto p + \underbrace{(0, 0, \cdots, 0, t, 0, \cdots, 0)}_{\text{只有第 } k \text{ 个位置非 } 0}
> $$

**修正：**

> T5) 在 $\Omega$ 上取 $\varepsilon>0$ 足够小，考虑曲线
>
> $$
> \ell_k : (-\varepsilon, \varepsilon) \to \Omega, \ \ t \mapsto p + \underbrace{(0, 0, \cdots, 0, t, 0, \cdots, 0)}_{\text{只有第 } k \text{ 个位置非 } 0}
> $$

**理由：** T5曲线在Ω中通过p，原图目标Ω′写错；任意开Ω不保证p沿坐标方向走1单位仍在其中。Ω开可选ε>0使曲线落Ω，保留同一基向量和待证等式。

**原文：**

> T6) 在 $\Omega$ 上考虑曲线
>
> $$
> \ell'_{k'} : (-1, 1) \to \Omega', \ \ t \mapsto p + \underbrace{(0, 0, \cdots, 0, t, 0, \cdots, 0)}_{\text{只有第 } k' \text{ 个位置非 } 0}
> $$

**修正：**

> T6) 在 $\Omega'$ 上考虑曲线
>
> $$
> \ell'_{k'} : (-1, 1) \to \Omega', \ \ t \mapsto p' + \underbrace{(0, 0, \cdots, 0, t, 0, \cdots, 0)}_{\text{只有第 } k' \text{ 个位置非 } 0}
> $$

**理由：** T6需以目标曲线类作为Tp′Ω′的基来表达f_*，应在Ω′经过p′=f(p)。原图错在Ω并用p，可能维数不同，不能作为C(p′)的元素；Ω′已明定Rm，原(-1,1)可保留。

**原文：**

> $[0, \pi)$

**修正：**

> $[0, \pi]$

**理由：** 允许任意两个非零切向量，包括互为负数，余弦为-1时角为π；半开区间遗漏此合法情况，须包含右端点。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> f:x\mapsto x/|x|
> ```

**正文：**

> $$
> f : \mathbb{R}^n - \{0\} \to \mathbb{R}^n - \{0\}, \ \ x \mapsto \frac{x}{|x|^2}.
> $$

**理由：** 原图反演错写除以|x|，它把整个射线压到单位球、微分在径向为零，不能保非零向量角。canonical已有x/|x|²的正确反演，保持该数学修复。

**原讲义片段：**

> 交换图右上T_{f(x1)}Ω2、左下T_{x1}Ω1、右下T_{g(f(x1))}Ω3

**正文：**

> $$
> \begin{array}{ccc}
> T_p\Omega & \xrightarrow[\approx]{\iota_p} & \mathbb{R}^n \\
> \downarrow f_{*p} & & \downarrow df(p) \\
> T_{p'}\Omega' & \xrightarrow[\approx]{\iota_{p'}} & \mathbb{R}^m
> \end{array}
> $$

**理由：** 原图复制链式法则的旧交换图标签，题中只有Ω、Ω′及p、p′=f(p)，iota_p应到Rn、iota_p′应从Tp′Ω′到Rm。canonical四顶点已正确按本题定义录入，保持，不恢复旧错标签。
