# 勘误：41 抽象积分与 Beppo Levi 定理

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> $$f(x) = \sum_{i=0}^n \lambda_i \cdot \mathbf{1}_{A_i}(x).$$

**修正：**

> $$f(x)=\sum_{i=0}^m\lambda_i \cdot \mathbf{1}_{A_i}(x).$$

**理由：** 摘要中给出m加一个系数，求和上界n未定义，应为m。

**原文：**

> 其中 $\alpha_0, \alpha_1, \cdots, \alpha_m \in \mathbb{C}$ 并且当

**修正：**

> 其中 $\alpha_0=0,\alpha_1,\cdots,\alpha_m\in\mathbb C$ 并且当

**理由：** 第零项集合可无限测度，alpha0必须为零才能直接代入有限复积分公式；后文也明确不妨alpha0等于零。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> $$f(x) + g(x) = \sum_{i=0}^m \alpha_i \cdot \mathbf{1}_{A_i}(x) + \sum_{j=0}^n \beta_i \cdot \mathbf{1}_{B_j}(x).$$

**修正：**

> $$f(x) + g(x) = \sum_{i=0}^m \alpha_i \cdot \mathbf{1}_{A_i}(x) + \sum_{j=0}^n\beta_j\cdot\mathbf1_{B_j}(x).$$

**理由：** g的展开使用j作为求和指标，系数下标i为未绑定变量，须为beta_j。

**原文：**

> $$\begin{aligned}
> \int_X f + g d\mu &= \sum_{i=1}^m \alpha_i \mu(A_i) + \sum_{j=1}^m \beta_j \mu(B_j) \\
> &= \int_X f d\mu + \int_X g d\mu.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \int_X f + g d\mu &= \sum_{i=1}^m \alpha_i \mu(A_i) + \sum_{j=1}^n\beta_j\mu(B_j) \\
> &= \int_X f d\mu + \int_X g d\mu.
> \end{aligned}$$

**理由：** g的系数与集合有n项，源误沿用f的上界m，导致多求或遗漏。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> $h = f - g \geqslant 0$

**修正：**

> $h=g-f\geqslant0$

**理由：** 前页假定f不超过g，为由正积分推出单调性需取g减f，原差符号方向相反。

**原文：**

> $$\int_X j d\mu := \sum_{\lambda \in \mathbb{C}} \lambda \cdot \mu \left( h^{-1}(\lambda) \right).$$

**修正：**

> $$\int_X h d\mu := \sum_{\lambda \in \mathbb{C}} \lambda \cdot \mu \left( h^{-1}(\lambda) \right).$$

**理由：** 该积分由h的取值逆像求和，j未定义，左侧应为h。

**原文：**

> 我们就称它为**正的简单函数**或者**非负简单函数**。

**修正：**

> 我们就称它为**正的简单函数**或者**非负简单函数**，用 $\mathcal E_+(X)$ 表示它们的全体。

**理由：** 定义278须区别正简单函数与此前有限测度支撑的E(X)，在本注记明确命名无需支撑有限条件的正简单函数族，以保证任意测度空间积分定义一致。

**原文：**

> $$\int_X f d\mu := \sup_{\substack{\varphi \in \mathcal{E}(X) \\ 0 \leqslant \varphi \leqslant f}} \int_X \varphi d\mu.$$

**修正：**

> $$\int_X f d\mu := \sup_{\substack{\varphi\in\mathcal E_+(X) \\ 0 \leqslant \varphi \leqslant f}} \int_X \varphi d\mu.$$

**理由：** 前文E(X)要求非零值逆像有限，若单点测度为无穷，则E仅有零函数，会把常数一积分误为零。按本页注记使用不限制测度的非负简单函数才能定义任意空间的积分。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> $$\mathcal{E}_f = \{ \varphi \in \mathcal{E}(X) \mid 0 \leqslant \varphi \leqslant f \},$$

**修正：**

> $$\mathcal E_f=\{\varphi\in\mathcal E_+(X) \mid 0 \leqslant \varphi \leqslant f \},$$

**理由：** 积分定义应采用所有非负有限取值可测函数，Ef相应使用前页新增的E正族，不能限制于有限支撑测度。

**原文：**

> $$\mathcal{E}_g = \{ \varphi \in \mathcal{E}(X) \mid 0 \leqslant \varphi \leqslant g \}.$$

**修正：**

> $$\mathcal E_g=\{\varphi\in\mathcal E_+(X) \mid 0 \leqslant \varphi \leqslant g \}.$$

**理由：** 同理Eg必须以所有非负简单函数为上确界候选，和任意测度空间积分定义保持一致。

**原文：**

> $$\int_X f d\mu := \sup_{\substack{\varphi \in \mathcal{E}(X) \\ 0 \leqslant \varphi \leqslant f}} \int_X \varphi d\mu,$$

**修正：**

> $$\int_X f d\mu := \sup_{\substack{\varphi\in\mathcal E_+(X) \\ 0 \leqslant \varphi \leqslant f}} \int_X \varphi d\mu,$$

**理由：** 零测性质证明引用非负积分的上确界定义，须使用不限支撑测度的E正族。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> $$
> \int_X f(x) d\mu = \sum_{i=0}^m \lambda \mu(f^{-1}(\lambda)) > 0.
> $$

**修正：**

> $$
> \int_X\varphi(x)d\mu=\sum_{i=0}^m\lambda_i\mu(\varphi^{-1}(\lambda_i))>0.
> $$

**理由：** 有限值简单函数是phi而非原f，取值求和需相应phi逆像及带i的有限取值lambda_i，否则不能引用简单积分定义。

**原文：**

> ```text
> 使得 \(\mu(f^{-1}(\lambda)) > 0\)，所以在测度非零集合 \(f^{-1}(\lambda)\) 上
> ```

**修正：**

> 使得 $\mu(\varphi^{-1}(\lambda))>0$，所以在测度非零集合 $\varphi^{-1}(\lambda)$ 上

**理由：** 由phi积分正推出phi某个正水平集测度正，原f未必是简单函数，其相同水平集不能由此结论推得。

**原文：**

> $f = \operatorname{Re}(f) + \operatorname{Im}(f)$

**修正：**

> $f=\operatorname{Re}(f)+i\operatorname{Im}(f)$

**理由：** 复数实虚部分解必须乘虚数单位i，原漏i改变函数本身。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ∫f0dμ

**正文：**

> $$
> \int_X f d\mu = \int_X f_+ d\mu - \int_X f_- d\mu = 0 - 0 = 0.
> $$

**理由：** 原图负部积分误写f下标零，canonical已经采用负部f下标减号，保持正确表达。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> **证明**：由于对任意的 $i \geqslant 1$，我们有 $f(x) \geqslant f_i(x)$，所以（已经证明），
> $$
> \lim_{i\to\infty} \int_X f_i d\mu \leqslant \int_X f d\mu.
> $$
>
> 我们只要证明下面的不等式即可：
> $$
> \lim_{i\to\infty} \int_X f_i d\mu \geqslant \int_X f d\mu.
> $$
>
> 利用积分的定义，对任意的 $\varepsilon > 0$，选取简单函数 $\varphi(x) = \sum_{i=0}^m \lambda_i \mathbf{1}_{X_i} \leqslant f(x)$，其中 $0 = \lambda_0 < \lambda_1 < \lambda_2 < \dots < \dots < \lambda_m$ 并且当 $i \neq 0$ 时，$\mu(X_i) < \infty$。我们还可以假设 $\bigcup_{i\leqslant m} X_i = X$ 并且
> $$
> \left| \int_X f d\mu - \int_X \varphi d\mu \right| < \frac{1}{2}\varepsilon.
> $$
>
> 根据 $\varphi(x) \leqslant f(x)$，所以在每个 $X_i$ 上，$f(x) \geqslant \lambda_i$。令 $A = \sum_{i=1}^m \mu(X_i)$。如果 $i \neq 0$，我们可以将 $\varphi$ 中的 $\lambda_i$ 替换成 $\lambda_i - \frac{\varepsilon}{2A}$。此时，在每个 $X_i$ 上 $f(x) > \lambda_i$ 并且
> $$
> \left| \int_X f d\mu - \int_X \varphi d\mu \right| < \varepsilon.
> $$
>
> 现在，对每个指标 $i \geqslant 0$，定义集合
> $$
> A_i = \{x \mid f_i(x) \leqslant \varphi(x)\}.
> $$
>
> 由于 $A_i \subset \bigcup_{k=1}^n X_k$，所以 $\mu(A_i)$ 的测度有限。另外，根据 $\{f_i\}_{i\geqslant 1}$ 是上升的，所以 $\{A_i\}_{i\geqslant 1}$ 是下降的子集序列。由于在 $f(x) \neq 0$ 处，$f(x) > \varphi(x)$ 并且 $f(x) = \lim_{i\to\infty} f_i(x)$，所以
> $$
> \lim_{i\to\infty} A_i = \emptyset \quad \Leftrightarrow \quad \lim_{i\to\infty} (A_i)^c = X.
> $$

**修正：**

> **证明**：首先，$f$ 可测，因为对任意实数 $t$ 有 $\{f>t\}=\bigcup_{i\geqslant1}\{f_i>t\}$。由积分的单调性，$\int_X f_i\,d\mu$ 单调上升，因而其极限 $L\in[0,+\infty]$ 存在，并且
> $$
> L=\lim_{i\to\infty}\int_X f_i\,d\mu\leqslant\int_X f\,d\mu.
> $$
> 我们只须证明反向不等式。
>
> 任取处处有限的非负可测简单函数
> $$
> \varphi=\sum_{k=0}^m\lambda_k\mathbf1_{X_k}\leqslant f,
> \qquad 0=\lambda_0<\lambda_1<\cdots<\lambda_m,
> $$
> 其中各 $X_k$ 两两不交且并为 $X$。这里不要求 $\mu(X_k)$ 有限。固定 $0<\theta<1$，对每个 $i\geqslant1$ 定义
> $$
> A_i=\{x\in X\mid f_i(x)\geqslant\theta\varphi(x)\}.
> $$
> 由于 $f_i$ 单调上升，$A_i$ 也单调上升。若 $\varphi(x)>0$，则 $f_i(x)\to f(x)\geqslant\varphi(x)>\theta\varphi(x)$，故 $x$ 最终属于 $A_i$；若 $\varphi(x)=0$，则 $x$ 一直属于 $A_i$。因此
> $$
> A_i\nearrow X,\qquad X_k\cap A_i\nearrow X_k.
> $$

**理由：** 原证明要求正水平集有限测度并与可能为无穷的积分做差，定理却无此限制；固定比例theta和上升达标集合可在任意测度空间证明同一定理。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> f_i(x)≤f_{p+1}(x)

**正文：**

> $$
> f_i(x) \leqslant f_{i+1}(x), \quad \forall i, \quad \forall x.
> $$

**理由：** 原图单调条件误写p加一，canonical正确采用相邻指标i与i加一，保持已正确表达。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> 对固定的指标 $i$，我们定义简单函数
> $$
> \varphi_i(x) = \mathbf{1}_{(A_i)^c}(x)\varphi(x).
> $$
>
> 很明显，我们有 $f_i \geqslant \varphi_i$。按照积分的定义，我们有
> $$
> \int_X \varphi_i d\mu \geqslant \int_X \sum_{k=1}^n \lambda_k \mathbf{1}_{X_k - A_i} d\mu = \sum_{i=1}^n \lambda_k \mu(X_k - A_i).
> $$
>
> 当 $i \to \infty$，我们可以用集合取极限和测度可交换的性质，所以右边的极限恰好就是 $\int_X \varphi d\mu$。从而，
> $$
> \int_X \varphi_i d\mu \geqslant \int_X \varphi d\mu.
> $$
>
> 再根据
> $$
> \left| \int_X f d\mu - \int_X \varphi d\mu \right| < \varepsilon
> $$
> 并且 $\varepsilon$ 是任选的，不等式得证。

**修正：**

> 对固定的 $i$，定义简单函数
> $$
> \varphi_i=\theta\mathbf1_{A_i}\varphi.
> $$
> 在 $A_i$ 上由定义有 $f_i\geqslant\theta\varphi$，在其补集上 $\varphi_i=0\leqslant f_i$。按照简单函数积分的定义，
> $$
> \int_X f_i\,d\mu\geqslant\int_X\varphi_i\,d\mu
> =\theta\sum_{k=1}^m\lambda_k\mu(X_k\cap A_i).
> $$
> 对每个 $k$ 使用测度的从下连续性，再对有限个非负项取极限，得到
> $$
> L\geqslant\theta\sum_{k=1}^m\lambda_k\mu(X_k)
> =\theta\int_X\varphi\,d\mu.
> $$
> 由于 $\theta\in(0,1)$ 任意，令 $\theta\nearrow1$，再对所有不超过 $f$ 的非负简单函数 $\varphi$ 的积分取上确界，便得到
> $$
> L\geqslant\int_X f\,d\mu.
> $$
> 这对简单函数积分有限或为 $+\infty$ 均成立，所需不等式得证。

**理由：** 原下降集合可能有无穷测度且零水平点永远不离开，取极限后还误留下有限i不等式；上升达标集合、theta加权水平积分和简单函数上确界完成无额外条件证明。

**原文：**

> **证明**：由于 $(X, \mathcal{A}, \mu)$ 是 $\sigma$-有限的，我们选取上升序列 $\{X_i\}_{i\geqslant 1}$，使得对每个 $i$ 都有 $\mu(X_i) < \infty$ 并且 $\bigcup_{i\geqslant 1} X_i = X$。我们定义
> $$
> \varphi_i(x) = \begin{cases}
> 0, & x \notin X_i; \\
> i, & x \in X_i \text{ 且 } f(x) \geqslant i; \\
> \frac{k}{2^i}, & x \in X_i, f(x) < i \text{ 且 } \frac{k}{2^i} \leqslant f(x) < \frac{k+1}{2^i}.
> \end{cases}
> $$
>
> 这是上升的函数序列。对任给定的 $x \in X$，不妨设 $x \in X_{i_0}$ 并且 $f(x) < i_0$。根据 $\varphi_i$ 的定义，对任意的 $i \geqslant i_0$，我们有
> $$
> 0 \leqslant f(x) - \varphi_i(x) \leqslant 2^{-i}.
> $$
>
> 这说明 $\{\varphi_i\}_{i\geqslant 1}$ 逐点收敛到 $f$。 $\square$

**修正：**

> **证明**：不需要 $\sigma$-有限性。对每个 $i\geqslant1$，定义非负可测简单函数
> $$
> \varphi_i(x)=\begin{cases}
> i,&f(x)\geqslant i;\\
> \dfrac{k}{2^i},&f(x)<i\text{ 且 }\dfrac{k}{2^i}\leqslant f(x)<\dfrac{k+1}{2^i},\quad k\in\{0,1,\ldots,i2^i-1\}.
> \end{cases}
> $$
> 每个 $\varphi_i$ 只有有限个取值。二进网格逐步加细且截断高度逐步增加，故 $0\leqslant\varphi_i\leqslant\varphi_{i+1}\leqslant f$。若 $f(x)=+\infty$，则 $\varphi_i(x)=i\to+\infty$；若 $f(x)<\infty$，取整数 $i_0>f(x)$，对所有 $i\geqslant i_0$ 都有
> $$
> 0\leqslant f(x)-\varphi_i(x)<2^{-i}.
> $$
> 因此 $\varphi_i\nearrow f$，再由 Beppo Levi 定理得到积分的收敛。 $\square$

**理由：** 推论281对任意测度空间成立，原证明凭空加入sigma有限性并遗漏f无穷值情形；全空间截断及向下二进量化无需有限支撑条件。

[相关正文：抽象积分与 Beppo Levi 定理](../../02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477.md)

## 数学修正

**原文：**

> 即如下简单函数的积分

**修正：**

> 即如下可测非负函数的积分（其有限截断是非负简单函数）

**理由：** 可数个方块上不同下确界的无限和一般有无限多个值，不能称简单函数；有限截断才为简单函数。

**原文：**

> 我们自然期盼 $\varphi(x)$ 给出上升到 $f$ 的简单函数序列

**修正：**

> 在方块边界组成的零测集之外，加细分划并取有限截断可得到几乎处处上升到 $f$ 的非负简单函数序列

**理由：** 无限方块下和不一定有限取值，闭方块在边界重叠会重复取值而破坏逐点上升比较；限定零边界之外并取有限截断，保留Darboux类比的正确内容。

[相关正文：41.1：作业：子流形与零测集，Stieltjies 测度的构造，Borel-Cantelli 定理和无理数的逼近](../../02-math-analysis-ii/41-abstract-integrals/41-03-p0478-0483.md)

## 数学修正

**原文：**

> $U_1 \in \mathbb{R}^m$, $U_2 \in \mathbb{R}^n$

**修正：**

> $U_1\subset\mathbb R^m$, $U_2\subset\mathbb R^n$

**理由：** 开集是各实空间的子集而非其中的点，成员符号类型错误。

**原文：**

> $F_1 \in \mathbb{R}^m$, $F_2 \in \mathbb{R}^n$

**修正：**

> $F_1\subset\mathbb R^m$, $F_2\subset\mathbb R^n$

**理由：** 闭集同样应为实空间子集，乘积集合结论需要该正确类型。

[相关正文：41.1：作业：子流形与零测集，Stieltjies 测度的构造，Borel-Cantelli 定理和无理数的逼近](../../02-math-analysis-ii/41-abstract-integrals/41-03-p0478-0483.md)

## 数学修正

**原文：**

> 存在可数个方块 $C_k$

**修正：**

> 存在可数个方块 $R_k$

**理由：** 下列覆盖与体积求和始终使用Rk，前文写Ck导致覆盖集合未绑定，统一方块变量。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> A<,A>,A+∈A

**正文：**

> $A_<, A_>, A_= \in \mathcal{A}$

**理由：** 原图等值集合最后误写加号，canonical已正确采用等号下标，保持正确引用。

[相关正文：41.1：作业：子流形与零测集，Stieltjies 测度的构造，Borel-Cantelli 定理和无理数的逼近](../../02-math-analysis-ii/41-abstract-integrals/41-03-p0478-0483.md)

## 数学修正

**原文：**

> $\mathbb{R}^1$ 上的左连续的增函数的空间

**修正：**

> $\mathbb R^1$ 上满足 $F(0)=0$ 的左连续增函数的空间

**理由：** 测度只由F的增量确定，任意加常数给出同一测度；D2所定义F已经以F零等于零归一化，加入归一化后才是空间一一对应。

[相关正文：41.1：作业：子流形与零测集，Stieltjies 测度的构造，Borel-Cantelli 定理和无理数的逼近](../../02-math-analysis-ii/41-abstract-integrals/41-03-p0478-0483.md)

## 数学修正

**原文：**

> 对每个实数 $\alpha$

**修正：**

> 对每个无理数 $\alpha$

**理由：** 若alpha为既约有理数a/b，任何不同p/q误差至少1/(bq)，q充分大时不小于1/q平方，故不同有理逼近只有有限个；Dirichlet无限逼近结论须限于无理alpha。
