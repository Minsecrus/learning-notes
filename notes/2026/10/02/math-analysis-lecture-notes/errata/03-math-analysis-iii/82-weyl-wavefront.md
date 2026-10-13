# 勘误：82 热核渐近、Weyl 公式与波前集

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> $$\Omega = \underbrace{\{x \in \Omega \mid d(x, \partial \Omega) \geqslant d_0\}}_{\Omega_1} \cup \underbrace{\{x \in \Omega \mid d(x, \partial \Omega) > d_0\}}_{\Omega_2}.$$

**修正：**

> $$\Omega = \underbrace{\{x \in \Omega \mid d(x, \partial \Omega) \geqslant d_0\}}_{\Omega_1} \cup \underbrace{\{x \in \Omega \mid d(x, \partial \Omega) < d_0\}}_{\Omega_2}.$$

**理由：** 原图两个区域都是远离边界（≥d0与>d0），不能覆盖Ω；图和后文I2薄边界层决定Ω2为<d0，与Ω1≥不重叠完整分割。

**原文：**

> 用热核比较估计的第二种情形

**修正：**

> 用热核比较估计的第一种情形

**理由：** Ω1内d≥sqrt(2nt)意味着t≤d²/(2n)，正是上面第一分支且后行用t而非t0；源第二序号错误。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> I_1 &\leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_{\Omega_1} \int_{d(x, \partial \Omega)}^\infty e^{-\frac{\tau^2}{4t}} \tau d\tau dx \\
> &= \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_{\Omega_1} \int_0^\infty \mathbf{1}_{\tau \geqslant d(x, \partial \Omega)}(\tau, x) e^{-\frac{\tau^2}{4t}} \tau d\tau dx \\
> &= \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_0^\infty e^{-\frac{\tau^2}{4t}} \tau S(\tau) d\tau.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> I_1 &\leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_{\Omega_1} \int_{d(x, \partial \Omega)}^\infty e^{-\frac{\tau^2}{4t}} \tau d\tau dx \\
> &= \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_{\Omega_1} \int_0^\infty \mathbf{1}_{\tau \geqslant d(x, \partial \Omega)}(\tau, x) e^{-\frac{\tau^2}{4t}} \tau d\tau dx \\
> &\leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}} \frac{1}{2t} \int_0^\infty e^{-\frac{\tau^2}{4t}} \tau S(\tau) d\tau.
> \end{aligned}$$

**理由：** Tonelli换序后的内层面积为Omega1与距离≤tau的交集，原图S(tau)却定义为全Omega的面积，因此此等号应为≤，后续估计完全不变。

**原文：**

> 此时，我们用热核比较估计的第二种情形，从而，

**修正：**

> 此时，我们用热核的非负性，从而，

**理由：** Omega2内t>d²/(2n)时原图使用第一分支指数上界无依据；942已证p≥0，足以直接给所需E−p≤E。与紧后显示式一起局部修复。

**原文：**

> $$E(t, x, x) - p(t, x, x) \leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}} e^{-\frac{d(x, \partial \Omega)^2}{4t}} \leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}}.$$

**修正：**

> $$E(t, x, x) - p(t, x, x) \leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}} e^{0} \leqslant \frac{1}{(4\pi t)^{\frac{n}{2}}}.$$

**理由：** p≥0立即推出E−p≤E，而E(t,x,x)的指数为0。原距离指数误用另一分支，将其改为0后两个相等高斯对角上界成立，后续Omega2面积估计保持。

**原文：**

> $$\int_\Omega E(t, x, x) - p(t, x, x) \leqslant Ct^{-\frac{n}{2}} t^{\frac{1}{2}}.$$

**修正：**

> $$\int_\Omega \bigl(E(t, x, x) - p(t, x, x)\bigr)\,dx \leqslant Ct^{-\frac{n}{2}} t^{\frac{1}{2}}.$$

**理由：** 由I1+I2得到的空间积分，原图漏括号与dx；补明对x积分。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> 存在 $\varepsilon$，使得函数 $d(\cdot, \partial \Omega \cap B_\varepsilon)(x_0)$ 满足

**修正：**

> 存在 $\varepsilon$，使得函数 $d(\cdot, \partial \Omega \cap B_\varepsilon(x_0))$ 满足

**理由：** 原图球心x0括号落在距离函数之外；后文同页距离公式明确球应为B_eps(x0)。

**原文：**

> 1) $d(\cdot, \partial \Omega \cap B_\varepsilon)(x_0)$ 在 $B_{\frac{1}{2}\varepsilon}(x_0) \cap \Omega$ 的光滑函数。

**修正：**

> 1) $d(\cdot, \partial \Omega \cap B_\varepsilon(x_0))$ 是 $B_{\frac{1}{2}\varepsilon}(x_0) \cap \Omega$ 上的光滑函数。

**理由：** 与上一处相同球心笔误，并补缺漏的系词使局部光滑性陈述完整。

**原文：**

> 我们证明存在存在唯一的

**修正：**

> 我们证明存在唯一的

**理由：** 原图重复存在，删除一次，不改变唯一最近点命题。

## 未决数学问题

**原文：**

> 此时，我们令 $\alpha_0 = \frac{1}{2} \min_{i \leqslant m} (\varepsilon_1, \cdots, \varepsilon_m)$ 即可。

**问题：** 有限个半径eps_i/2球覆盖边界，不能仅凭min(eps_i)/2确保整个该宽度内的边界层落入球并继承局部光滑性；还需取此有限覆盖的Lebesgue数或足够小的管状邻域宽度。结论正确，但此定量覆盖步骤需补条件，保留原文并注明。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> $$\Phi : x' \mapsto x_* + (y_* - f(x')) df(x').$$

**修正：**

> $$\Phi : x' \mapsto x_* + (y_* - f(x')) df(x') - x'.$$

**理由：** 原图定义Phi缺-x′而导数和求零方程含-Id、-x′；补残差项与紧前后唯一同一方程相符。

**原文：**

> $$d\Phi(0) = \underbrace{(y_* - f(x'))}_{O(\varepsilon)} \underbrace{\nabla^2 f(x')}_{\text{在 } B_\varepsilon(0) \text{ 上有界}} - \underbrace{\nabla f(x') \cdot \nabla f(x')}_{\text{根据连续性，在 } B_\varepsilon(0) \text{ 上为 } O(\varepsilon^2)} - \mathrm{Id}.$$

**修正：**

> $$d_{x'}\Phi(x') = \underbrace{(y_* - f(x'))}_{O(\varepsilon)} \underbrace{\nabla^2 f(x')}_{\text{在 } B_\varepsilon(0) \text{ 上有界}} - \underbrace{\nabla f(x') \otimes \nabla f(x')}_{\text{根据连续性，在 } B_\varepsilon(0) \text{ 上为 } O(\varepsilon^2)} - \mathrm{Id}.$$

**理由：** 求关于x′的Jacobian应在x′计算，梯度项为矩阵外积而非标量点积；源图残差导数保留-Id，epsilon小时可逆。

**原文：**

> $d\Phi(0)$ 是可逆的

**修正：**

> $d_{x'}\Phi(x')$ 是可逆的

**理由：** 承接刚上式残差Jacobian与局部可逆性。

**原文：**

> $$C = \max \left( C_1, \frac{\Omega}{\alpha_0} \right).$$

**修正：**

> $$C = \max \left( C_1, \frac{|\Omega|}{\alpha_0} \right).$$

**理由：** 域Omega不能与实常数比较，源图缺面积模号；同页刚上S为Lebesgue面积。

**原文：**

> $$S(\alpha) \leqslant |\Omega| = \frac{\Omega}{\alpha_0} \alpha.$$

**修正：**

> $$S(\alpha) \leqslant |\Omega| \leqslant \frac{|\Omega|}{\alpha_0} \alpha.$$

**理由：** alpha≥alpha0仅给后一≤，非等号；系数应Omega面积，与上式选择C联动。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> $$ S(\alpha) \leqslant = \int_0^\alpha C_1 dt = C_1 \alpha. $$

**修正：**

> $$ S(\alpha) \leqslant \int_0^\alpha C_1 dt = C_1 \alpha. $$

**理由：** 原图把≤与=重复，面积上界只有≤。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> Weiestrass-Stone

**修正：**

> Weierstrass-Stone

**理由：** 原图英文姓名拼写缺r，指多项式一致逼近的Weierstrass-Stone定理。

**原文：**

> $$ \lim_{t \to 0^+} t^\alpha \int_0^\infty f_k\left(e^{-t\lambda}\right) e^{-t\lambda} d\mu(\lambda) - \lim_{t \to 0^+} t^\alpha \int_0^\infty f\left(e^{-t\lambda}\right) e^{-t\lambda} d\mu(\lambda) = o_k(1). $$

**修正：**

> $$ \limsup_{t \to 0^+} \left|t^\alpha \int_0^\infty \bigl(f_k-f\bigr)\left(e^{-t\lambda}\right) e^{-t\lambda} d\mu(\lambda)\right| \leqslant C_0\|f_k-f\|_{L^\infty}=o_k(1). $$

**理由：** 正要证明f左侧极限存在，原图提前写两个lim相减存在循环；紧前一致误差上界直接给limsup绝对误差≤C0||fk-f||，结合fk已有极限就推出f的极限，保留原观察证明。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> $$ \lim_{t \to 0^+} t^\alpha \int_1^{t^{-1}} e^{t\lambda} \times e^{-t\lambda} d\mu(\lambda) = \lim_{t \to 0^+} t^\alpha |\{\lambda_k \mid \lambda_k \leqslant t^{-1}\}| $$

**修正：**

> $$ \lim_{t \to 0^+} t^\alpha \int_0^{t^{-1}} e^{t\lambda} \times e^{-t\lambda} d\mu(\lambda) = \lim_{t \to 0^+} t^\alpha |\{k\geqslant1 \mid \lambda_k \leqslant t^{-1}\}| $$

**理由：** f(e^-tλ)的支集为0≤tλ≤1，λ>0测度应从0积分。原图1下限可能遗漏(0,1)特征值，即使有限遗漏不改渐近也不符合本等式。

**原文：**

> $$ \frac{C_0}{\Gamma(\alpha)} \int_0^\infty f\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt = \frac{C_0}{\Gamma(\alpha)} \int_1^\infty e^t \times t^{\alpha-1} e^{-t} dt $$

**修正：**

> $$ \frac{C_0}{\Gamma(\alpha)} \int_0^\infty f\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt = \frac{C_0}{\Gamma(\alpha)} \int_0^1 e^t \times t^{\alpha-1} e^{-t} dt $$

**理由：** f(e^-t)=e^t 1_\[0,1\](t)，原图从1到无穷导致发散，0到1积分才为1/alpha。

**原文：**

> $$ \lim_{t \to 0^+} t^\alpha \int_1^{t^{-1}} e^{t\lambda} \times e^{-t\lambda} d\mu(\lambda) = \lim_{t \to 0^+} t^\alpha |\{\lambda_k \mid \lambda_k \leqslant t^{-1}\}| $$

**修正：**

> $$ \lim_{t \to 0^+} t^\alpha \int_0^{t^{-1}} e^{t\lambda} \times e^{-t\lambda} d\mu(\lambda) = \lim_{t \to 0^+} t^\alpha |\{k\geqslant1 \mid \lambda_k \leqslant t^{-1}\}| $$

**理由：** 952的正测度sum_k delta_lambda_k按重数计数；原图特征值的集合会删除重特征值，应改索引k的集合，与Weyl计数定义一致。

**原文：**

> $$ = \lim_{\lambda \to \infty} \lambda^{-\alpha} |\{\lambda_k \mid \lambda_k \leqslant \lambda\}|. $$

**修正：**

> $$ = \lim_{\lambda \to \infty} \lambda^{-\alpha} |\{k\geqslant1 \mid \lambda_k \leqslant \lambda\}|. $$

**理由：** 952的正测度sum_k delta_lambda_k按重数计数；原图特征值的集合会删除重特征值，应改索引k的集合，与Weyl计数定义一致。

**原文：**

> $$ \lim_{\lambda \to \infty} \lambda^{-\frac{n}{2}} |\{\lambda_k \mid \lambda_k \leqslant \lambda\}| = \frac{|\Omega|}{(4\pi)^{\frac{n}{2}} \Gamma\left(\frac{n}{2} + 1\right)}. $$

**修正：**

> $$ \lim_{\lambda \to \infty} \lambda^{-\frac{n}{2}} |\{k\geqslant1 \mid \lambda_k \leqslant \lambda\}| = \frac{|\Omega|}{(4\pi)^{\frac{n}{2}} \Gamma\left(\frac{n}{2} + 1\right)}. $$

**理由：** 952的正测度sum_k delta_lambda_k按重数计数；原图特征值的集合会删除重特征值，应改索引k的集合，与Weyl计数定义一致。

[相关正文：82：热核渐近、Weyl 公式与波前集](../../03-math-analysis-iii/82-weyl-wavefront.md)

## 数学修正

**原文：**

> $$ \int_0^\infty \left(f_\varepsilon^\pm - f\right)\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt = \int_0^\infty \left(f_\varepsilon^\pm - f\right)\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt $$
> $$ = \int_{1-\varepsilon}^{1+\varepsilon} \left(f_\varepsilon^\pm - f\right)\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt $$
> $$ \leqslant \int_{1-\varepsilon}^{1+\varepsilon} 2e \left(e^{-t}\right) t^{\alpha-1} e^{-t} dt \to 0. $$

**修正：**

> $$ \left|\int_0^\infty \left(f_\varepsilon^\pm - f\right)\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt\right| = \left|\int_0^\infty \left(f_\varepsilon^\pm - f\right)\left(e^{-t}\right) t^{\alpha-1} e^{-t} dt\right| $$
> $$ = \int_{1-\varepsilon}^{1+\varepsilon} \left|\left(f_\varepsilon^\pm - f\right)\left(e^{-t}\right)\right| t^{\alpha-1} e^{-t} dt $$
> $$ \leqslant \int_{1-\varepsilon}^{1+\varepsilon} 2e t^{\alpha-1} e^{-t} dt \to 0. $$

**理由：** f^-−f为负时仅上界不能推出趋零，且原图2e后多写(e^-t)。两近似差固定同号，仅支于t∈[1−eps,1+eps]，0≤f_eps,f≤e；补绝对值、去掉误乘因子，保留重复等式，由区间长度→0证明模积分趋零。

**原文：**

> 对某一个任意的支集

**修正：**

> 对某一个支集

**理由：** 局部光滑的第二刻画是存在某个在x0非零的截断函数；原图某一个任意的量词重复冲突，删任意的与下一页存在型定义一致。
