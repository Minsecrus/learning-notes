# 勘误：80 边界正则性与热核的谱构造

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> 中的必要条件

**修正：**

> 中的充分条件

**理由：** 标题称必要，但定理531只给λ_k^m加权可和⇒H0¹∩H^m（m=2等价；m>2高阶Dirichlet边界兼容未必必要）。只将标题与实际单向论断一致。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> 这个基本等价于（弱于）在 $L^2(\Omega)$ 中的弱收敛：

**修正：**

> 这只测试紧支集光滑函数，弱于 $L^2(\Omega)$ 中的弱收敛；不能直接推出：

**理由：** 原图说明伪证的错误时又声称基本等价，实际上D′收敛不保证对所有L²测试函数收敛，常函数例子的边界项体现差别。明确不能推出弱收敛，不改有意展示的伪证公式。

**原文：**

> $$\sum_{k=1}^\infty \lambda_k c_k \varphi_k \rightharpoonup -\Delta u.$$

**修正：**

> $$\sum_{k=1}^\infty \lambda_k c_k \varphi_k \overset{?}{\rightharpoonup} -\Delta u.$$

**理由：** 此处展示的推断仅有D′收敛支撑，L²弱收敛未得到；加问号与上一句不能推出一致，保留原说明结构。

**原文：**

> 我们知道，$x_k \rightharpoonup x_0$ 不意味着 $x_k$ 的范数是控制的。

**修正：**

> 我们知道，在分布的意义下 $x_k\to x_0$ 不意味着 $x_k$ 的 $L^2$ 范数是受控制的。

**理由：** Hilbert空间弱收敛序列必有界，原图说明句的箭头→未明确拓扑而canonical加⇀造成错。这里伪证只得D′收敛，明确该拓扑即可恢复正确反驳理由；不更改故意错误的伪证。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $$-\Delta v \overset{\mathcal{D}'}{=} -\sum_{k=1}^\infty \lambda_k \frac{f_k}{\lambda_k} \varphi_k = f.$$

**修正：**

> $$-\Delta v \overset{\mathcal{D}'}{=} \sum_{k=1}^\infty \lambda_k \frac{f_k}{\lambda_k} \varphi_k = f.$$

**理由：** -Δφ_k=λ_kφ_k，原图右边多负号会成为-f；去掉该负号使v=f系数/λ_k的构造与Dirichlet解正确。

**原文：**

> 那么，$u \in H_0^1(\Omega) \cap H^m(\Omega)$。

**修正：**

> 那么，$u\in H^m(\Omega)$；当 $m\geqslant1$ 时，还满足 $u\in H_0^1(\Omega)$。

**理由：** 这段从m=0开始归纳，m0假设仅L²可和不能推出零边界H¹。保留m0为Parseval基例，高阶m≥1才由527推出H0¹，和924/927定理范围一致。

**原文：**

> $m = 0$（Poincaré 不等式）和 $m = 1$

**修正：**

> $m = 0$（Parseval 等式）和 $m = 1$

**理由：** m0只给L²展开/可和等价，与Poincaré无关；m1为527能量刻画，m-2归纳可用这两个正确基例。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> v(x)\in H^1_{)}(\Omega)
> ```

**正文：**

> $v(x) \in H_0^1(\Omega)$

**理由：** 原图第二处零下标印为右括号，前句和解唯一性需H0¹，canonical已正确恢复。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $$\|u\|_{H^{k+1}(\Omega)} \leqslant C \left( \|f\|_{H^{k-1}(\Omega)} + \|g\|_{H^{k+\frac{1}{2}}(\Omega)} \right).$$

**修正：**

> $$\|u\|_{H^{k+1}(\Omega)} \leqslant C \left( \|f\|_{H^{k-1}(\Omega)} + \|g\|_{H^{k+\frac{1}{2}}(\partial\Omega)} \right).$$

**理由：** 原图估计范数域错为Ω，但g定义在∂Ω且上句已设H^{k+1/2}(∂Ω)；补边界符号。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $\lambda_k$ 具有多项式的衰减

**修正：**

> $\lambda_k$ 具有多项式的增长

**理由：** 原图称λ_k衰减，但917/923已证明λ_k增长~k^{2/n}，衰减的是e^{-λ_k t}；只改增长一词。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \|\varphi_k(x)\overline{\varphi_k(y)}dx\|_{L^2}
> ```

**正文：**

> $$
> |I_k| \leqslant \|\varphi_k(x) \overline{\varphi_k(y)}\|_{L^2(\Omega \times \Omega)} \|\phi(x, y)\|_{L^2(\Omega \times \Omega)}.
> $$

**理由：** 原图把微分dx放入函数范数，canonical已去除，Cauchy-Schwarz只对函数取范数，保持。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $\lambda_k \geqslant c k^{-\frac{2}{n}}$

**修正：**

> $\lambda_k \geqslant c k^{\frac{2}{n}}$

**理由：** 原图指数多负号；923粗Weyl下界为c k^{2/n}，也唯此能使λ_k^{-2n}≤Ck^{-4}可和。

**原文：**

> $$
> \leqslant C \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 2N_0}} |\partial^\alpha \phi(x, y)|.
> $$
>
> 这表明我们定义出了 $\mathcal{D}'(\Omega \times \Omega)$

**修正：**

> $$
> \leqslant C \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 4N}} |\partial^\alpha \phi(x, y)|.
> $$
>
> 这表明我们定义出了 $\mathcal{D}'(\Omega \times \Omega)$

**理由：** 原图2N_0中N_0未定义，Δ_x^NΔ_y^N是总阶4N微分算子，对(x,y)的控制应取|α|≤4N；N=n固定后这给有限分布阶，929–930全部估计保持一致。

**原文：**

> $$
> |I_k| \leqslant \frac{1}{\lambda_k^{2N}} \|\Delta_x^N \Delta_y^N \phi(x, y)\|_{L^2(K)} \leqslant \frac{1}{\lambda_k^{2N}} \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 2N_0}} |\partial^\alpha \phi(x, y)|
> $$

**修正：**

> $$
> |I_k| \leqslant \frac{1}{\lambda_k^{2N}} \|\Delta_x^N \Delta_y^N \phi(x, y)\|_{L^2(K)} \leqslant \frac{C_K}{\lambda_k^{2N}} \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 4N}} |\partial^\alpha \phi(x, y)|
> $$

**理由：** 原图把K上的L²范数直接用导数sup控制而漏常数；体积sqrt|K|和Δ^N展开有限系数需C_K，随后t积分多|J|。同时将未定义2N_0改总导数阶4N，和分布连续性估计一致。

**原文：**

> $$
> |\langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle| \leqslant \frac{1}{\lambda_k^{2N}} \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 2N_0}} |\partial_{x, y}^\alpha \phi(t, x, y)|
> $$

**修正：**

> $$
> |\langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle| \leqslant \frac{C_K}{\lambda_k^{2N}} \sup_{\substack{(x, y) \in K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|
> $$

**理由：** 原图把K上的L²范数直接用导数sup控制而漏常数；体积sqrt|K|和Δ^N展开有限系数需C_K，随后t积分多|J|。同时将未定义2N_0改总导数阶4N，和分布连续性估计一致。

**原文：**

> $$
> \leqslant \frac{1}{\lambda_k^{2N}} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 2N_0}} |\partial_{x, y}^\alpha \phi(t, x, y)|
> $$

**修正：**

> $$
> \leqslant \frac{C_K}{\lambda_k^{2N}} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|
> $$

**理由：** 原图把K上的L²范数直接用导数sup控制而漏常数；体积sqrt|K|和Δ^N展开有限系数需C_K，随后t积分多|J|。同时将未定义2N_0改总导数阶4N，和分布连续性估计一致。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $$
> \left| \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \right\rangle \right| \leqslant C_{J, K} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 2N_0}} |\partial_{x, y}^\alpha \phi(t, x, y)|.
> $$
>
> 这说明
> $$
> p(t, x, y) \in \mathcal{D}'((0, \infty) \times \Omega \times \Omega).
> $$

**修正：**

> $$
> \left| \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \right\rangle \right| \leqslant C_{J, K} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|.
> $$
>
> 这说明
> $$
> p(t, x, y) \in \mathcal{D}'((0, \infty) \times \Omega \times \Omega).
> $$

**理由：** 原图2N_0中N_0未定义，Δ_x^NΔ_y^N是总阶4N微分算子，对(x,y)的控制应取|α|≤4N；N=n固定后这给有限分布阶，929–930全部估计保持一致。

**原文：**

> $$
> \left| \int_0^\infty e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle dt \right| \leqslant \frac{|J|}{\lambda_k^{2N}} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 2N_0}} |\partial_{x, y}^\alpha \phi(t, x, y)|.
> $$

**修正：**

> $$
> \left| \int_0^\infty e^{-\lambda_k t} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(t, x, y) \rangle dt \right| \leqslant \frac{C_K|J|}{\lambda_k^{2N}} \sup_{\substack{(t, x, y) \in J \times K, \\ |\alpha| \leqslant 4N}} |\partial_{x, y}^\alpha \phi(t, x, y)|.
> $$

**理由：** 原图把K上的L²范数直接用导数sup控制而漏常数；体积sqrt|K|和Δ^N展开有限系数需C_K，随后t积分多|J|。同时将未定义2N_0改总导数阶4N，和分布连续性估计一致。

**原文：**

> 根据定义, 作为 $(0, \infty) \times \mathcal{D} \times \mathcal{D}$ 上的分布

**修正：**

> 根据定义, 作为 $(0, \infty) \times \Omega \times \Omega$ 上的分布

**理由：** 原图D表示测试函数空间，不能作为t,x,y的空间域；本页已明确p∈D′((0,∞)×Ω×Ω)，这三处文字域统一为Ω×Ω。

**原文：**

> 这就说明了作为 $(0, \infty) \times \mathcal{D} \times \mathcal{D}$ 上的分布

**修正：**

> 这就说明了作为 $(0, \infty) \times \Omega \times \Omega$ 上的分布

**理由：** 原图D表示测试函数空间，不能作为t,x,y的空间域；本页已明确p∈D′((0,∞)×Ω×Ω)，这三处文字域统一为Ω×Ω。

**原文：**

> - $p(t, x, y)$ 是 $(0, \infty) \times \mathcal{D} \times \mathcal{D}$ 上的分布

**修正：**

> - $p(t, x, y)$ 是 $(0, \infty) \times \Omega \times \Omega$ 上的分布

**理由：** 原图D表示测试函数空间，不能作为t,x,y的空间域；本页已明确p∈D′((0,∞)×Ω×Ω)，这三处文字域统一为Ω×Ω。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \frac{\lambda_k}{2}\lambda_k e^{-\lambda_kt}\varphi_k(x)\overline{\varphi_k(y)}
> ```

**正文：**

> $$
> = \lim_{m \to \infty} \sum_{k=1}^m \left( -\lambda_k e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} + \frac{\lambda_k}{2} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} + \frac{\lambda_k}{2} e^{-\lambda_k t} \varphi_k(x) \overline{\varphi_k(y)} \right)
> $$

**理由：** 原图两项多乘lambda_k，canonical已按Δφ_k=-λ_kφ_k纠正；热方程项正确抵消，保持。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $$
> f(x) \stackrel{L^2}{=} \sum_{k=1}^\infty a_k \varphi_k(x), \quad g(x) \stackrel{L^2}{=} \sum_{k=1}^\infty b_k \varphi_k(x),
> $$

**修正：**

> $$
> \overline{f(x)} \stackrel{L^2}{=} \sum_{k=1}^\infty a_k \varphi_k(x), \quad g(x) \stackrel{L^2}{=} \sum_{k=1}^\infty b_k \varphi_k(x),
> $$

**理由：** 原图下一行是overline((bar f,φ_k))而a_k定义在f展开上，源式对复杂f不一致；将所展开函数改bar f，则a=(bar f,φ)且sum b bar a=∫fg，恰与分布线性测试配对一致。

**原文：**

> $$
> = \sum_{k=1}^\infty (g, \varphi_k)_{L^2} \overline{(f, \varphi_k)_{L^2}}
> $$

**修正：**

> $$
> = \sum_{k=1}^\infty (g, \varphi_k)_{L^2} \overline{(\overline f, \varphi_k)_{L^2}}
> $$

**理由：** 原图放大图清楚是overline((bar f,φ_k))，canonical漏内层bar f；因∫φ_k f=overline((bar f,φ_k))，需与前面所展开bar f的定义配套。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \left|\sum_k(e^{-\lambda_kt_j}-e^{-\lambda_kt_0})|I_k|\right|
> ```

**正文：**

> $$
> \leqslant \sum_{k \geqslant 1} \left| e^{-\lambda_k t_j} - e^{-\lambda_k t_0} \right| |I_k| \to 0.
> $$

**理由：** 原图上界把绝对值置于整个带符号和外，一般不成立；canonical已恢复逐项三角不等式，控制收敛论证正确，保持。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> 其中 $\chi(x, y) = \chi(x)\chi(y)$

**修正：**

> 其中 $\chi(x, y) = \chi(x)\chi(y)$ 且 $0\leqslant\chi(x)\leqslant1$

**理由：** 本页用χ²代|χ|²且丢弃y因子||χ(y)φ_k(y)||，需要实值0≤χ≤1的通常截断函数；该限定可与任意局部compact support一起选取，补明确本来计算必要条件。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 未决数学问题

**原文：**

> 据此进行迭代, 我们就得到

**问题：** 局部高阶估计本身可成立，但原一层χ递推右边含∇χ·∇^mφ而非χ加权项，须在支集间选嵌套cutoffs或调用局部椭圆估计，不能直接按同χ迭代。末C_m也与前面固定的sup导数C_m复用而非新的估计常数。缺嵌套支集和常数依赖说明，连同934展开列证明缺口，不扩写整段。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> $\chi(x, y)p(t, x, y) \in H^m(\mathbb{R}^n)$

**修正：**

> $\chi(x, y)p(t, x, y) \in H^m(\mathbb{R}^{2n})$

**理由：** 热核的空间变量(x,y)共2n维，原图H^m(R^n)少一倍维度；同段Ω×Ω与Sobolev局部截断唯一确定R^{2n}。

**原文：**

> $$
> E(t, x, y) = \frac{H(t)}{(4\pi t)^n} e^{-\frac{|x|^2+|y|^2}{2t}}
> $$

**修正：**

> $$
> E(t, x, y) = \frac{H(t)}{(2\pi t)^n} e^{-\frac{|x|^2+|y|^2}{2t}}
> $$

**理由：** P=∂t-(1/2)(Δx+Δy)在2n维Gaussian的空间积分为(2πt)^n，原4π分母使质量2^-n，P(E)=2^-nδ0；改2π后质量1且匹配935 PE=δ0。

**原文：**

> $$
> \left( \partial_t - \frac{1}{2} (\Delta_x + \Delta_y) \right) p(t, x, y) = \delta_0,
> $$

**修正：**

> $$
> \left( \partial_t - \frac{1}{2} (\Delta_x + \Delta_y) \right) E(t, x, y) = \delta_0,
> $$

**理由：** 此句定义全空间E基本解，却原图把被作用函数误写p；p在t>0满足齐次热方程，935又调用P(E)=δ0，唯一符号为E。

## 未决数学问题

**原文：**

> $$
> \begin{aligned}
> &\sum_{k \geqslant 1} e^{-\lambda_k t} \nabla_x^{m_1} \nabla_y^{m_2} (\chi(x, y) p(t, x, y)) \\
> &= \sum_{k \geqslant 1} e^{-\lambda_k t} \sum_{\substack{|\alpha_1|+|\alpha_2| \leqslant m_1, \\ |\beta_1|+|\beta_2| \leqslant m_2}} \nabla^{\alpha_1} \chi(x) \nabla^{\alpha_2} \varphi_k(x) \overline{\nabla^{\beta_1} \chi(y) \nabla^{\beta_2} \varphi_k(y)} \\
> &= \sum_{k \geqslant 1} e^{-\lambda_k t} \sum_{\substack{|\alpha_1|+|\alpha_2| \leqslant m_1, |\beta_1|+|\beta_2| \leqslant m_2, \\ |\alpha_2| < m, |\beta_2| < m}} \nabla^{\alpha_1} \chi(x) \nabla^{\alpha_2} \varphi_k(x) \overline{\nabla^{\beta_1} \chi(y) \nabla^{\beta_2} \varphi_k(y)} \\
> &\quad + \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x)^2 \nabla^m \varphi_k(x) \overline{\nabla \varphi_k(y)} + \sum_{k \geqslant 1} e^{-\lambda_k t} \chi(x)^2 \varphi_k(x) \overline{\nabla^m \varphi_k(y)}
> \end{aligned}
> $$

**问题：** 原图左边已含p完整谱级数却又外乘Σe^{-λt}；右边Leibniz少组合系数，未定义m与m1+m2关系，切分最高阶项用χ(x)^2误替χ(x)χ(y)，第一极端项还额外∇φ_k(y)，总阶不一致。正确展开需明确具体多重指标α,β与binomial、两截断及混合阶估计；作者意图缺失，保留此完整推导为疑点，不猜写整页。

[相关正文：80：边界正则性与热核的谱构造](../../03-math-analysis-iii/80-heat-kernel-spectral.md)

## 数学修正

**原文：**

> 选取非负的 $\chi$, 使得它的支集在半径为 $1$ 的小球（在 $\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n$ 中的）内并且其积分恰等于 $1$。

**修正：**

> 选取非负的 $\chi$, 使得它的支集在半径为 $1$ 的小球（在 $\mathbb{R}^1 \times \mathbb{R}^n \times \mathbb{R}^n$ 中的）内并且在原点附近恒等于 $1$，令 $\chi_\varepsilon(z)=\chi(z/\varepsilon)$。

**理由：** 原图按积分1的mollifier选择并不能保证(1-χ_ε)E消除原点奇性；需普通截断χ=1近0和不带归一化系数的缩放。保留支集Bε与卷积分解，使(1-χ_ε)E光滑。

**原文：**

> $$
> \begin{cases}
> 0 \leqslant \theta(z) \leqslant 1, \text{对任意的 } z \in \mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n; \\
> \theta\big|_{B(0, \varepsilon)} \equiv 1; \\
> \theta\big|_{\mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n - B(0, 2\varepsilon)} \equiv 0.
> \end{cases}
> $$

**修正：**

> $$
> \begin{cases}
> 0 \leqslant \theta(z) \leqslant 1, \text{对任意的 } z \in \mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n; \\
> \theta\big|_{B((t_0,x_0,y_0), \varepsilon)} \equiv 1; \\
> \theta\big|_{\mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n - B((t_0,x_0,y_0), 2\varepsilon)} \equiv 0.
> \end{cases}
> $$

**理由：** 本段先在(t0,x0,y0)取小球，t0>0，一般原点不在时空域；原图θ的内球中心误写0，须匹配所选点。

**原文：**

> $$
> \begin{cases}
> 0 \leqslant \theta(z) \leqslant 1, \text{对任意的 } z \in \mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n; \\
> \theta\big|_{B(0, \varepsilon)} \equiv 1; \\
> \theta\big|_{\mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n - B(0, 2\varepsilon)} \equiv 0.
> \end{cases}
> $$

**修正：**

> $$
> \begin{cases}
> 0 \leqslant \theta(z) \leqslant 1, \text{对任意的 } z \in \mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n; \\
> \theta\big|_{B((t_0,x_0,y_0), \varepsilon)} \equiv 1; \\
> \theta\big|_{\mathbb{R} \times \mathbb{R}^n \times \mathbb{R}^n - B((t_0,x_0,y_0), 2\varepsilon)} \equiv 0.
> \end{cases}
> $$

**理由：** θ须支撑在所选点半径2ε球，保证θp为compact distribution；原图中心0误写，与内球同组。
