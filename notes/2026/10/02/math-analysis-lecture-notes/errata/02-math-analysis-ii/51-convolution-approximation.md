# 勘误：51 函数空间、连续算子与卷积逼近

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> $n-1 = 2k-1$ 是偶数

**修正：**

> $n-1 = 2k-1$ 是奇数

**理由：** 2k−1是奇数，且本段给出的非零单位切向量场正好生活在奇数维球面S^(2k−1)上。原图偶字错误，与接下来的偶数维无非零切向量场定理相矛盾。

**原文：**

> 我们假设 $dV$ 是有界的（把 $V$ 看成映射）。

**修正：**

> 我们假设 $dV$ 是有界的（把 $V$ 看成映射），并且存在 $M>0$，使 $V$ 在 $\Omega$ 上是 $M$-Lipschitz 映射。

**理由：** 一般有界开集可以不凸，导数有界不能直接推出对任意两点的全局Lipschitz估计。补齐证明实际使用的Lipschitz条件；下文环形区域上的径向延拓V可再光滑延拓并截断为Rn上的紧支集光滑向量场，因此满足该条件。

**原文：**

> $$
> \begin{aligned}
> |x - y| &= |\Phi_t(x) - \Phi_t(y) - t(V(x) - V(y))| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + t|V(x) - V(y)| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + tM|x - y|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |x - y| &= |\Phi_t(x) - \Phi_t(y) - t(V(x) - V(y))| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + |t|\,|V(x) - V(y)| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + |t|M|x - y|.
> \end{aligned}
> $$

**理由：** 三角不等式对t(V(x)−V(y))取模时系数是|t|，原文t可为负，不能直接把t移到范数外。

**原文：**

> $$
> \begin{aligned}
> |x - y| &= |\Phi_t(x) - \Phi_t(y) - t(V(x) - V(y))| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + t|V(x) - V(y)| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + tM|x - y|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |x - y| &= |\Phi_t(x) - \Phi_t(y) - t(V(x) - V(y))| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + |t|\,|V(x) - V(y)| \\
> &\leqslant |\Phi_t(x) - \Phi_t(y)| + |t|M|x - y|.
> \end{aligned}
> $$

**理由：** 这一步接续三角不等式和Lipschitz估计，时间系数必须为|t|，才能对零附近的正负时间共同成立。

**原文：**

> 我们用了 $dV$ 的有界性，从而

**修正：**

> 我们用了 $V$ 的 Lipschitz 性质，从而

**理由：** 本段Ω未假设为凸集，导数有界本身不足以推出所写的两点估计。该估计直接来自补充的全局Lipschitz条件。

**原文：**

> $t < (2M)^{-1}$

**修正：**

> $|t| < (2M)^{-1}$

**理由：** 要由两点估计得到至少一半距离的下界，需要1−|t|M大于1/2；仅t小于正数会错误容许任意大的负时间。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> 将行列展开

**修正：**

> 将行列式展开

**理由：** 这里计算的是Jacobian矩阵的行列式关于t的多项式展开，原图遗漏式字。

**原文：**

> 我们现在用反正法

**修正：**

> 我们现在用反证法

**理由：** 该证明假设偶数维球面存在非零向量场后导出体积表达式矛盾，所用方法为反证法，原图同音字错误。

**原文：**

> 我们不妨假设 $V$ 在每个点处都是单位长度的。

**修正：**

> 我们不妨假设 $X$ 在每个点处都是单位长度的。

**理由：** 正在归一化的是球面上的X；后面定义的环形区域向量场V(x)=|x|X(x/|x|)的长度为|x|，一般不等于1。原图将X误写成尚未定义的V。

**原文：**

> $$
> \Omega = \bigcup_{\frac{1}{2} < r < 2} S_r = \bigcup_{\frac{1}{2} < r < 2} (r S^{n-1}).
> $$

**修正：**

> $$
> \Omega = \bigcup_{\frac{1}{\sqrt2} < r < \sqrt2} S_r = \bigcup_{\frac{1}{\sqrt2} < r < \sqrt2} (r S^{n-1}).
> $$

**理由：** 本页Ω的定义是1/2<|x|²<2，所对应的半径范围应开平方，得到1/√2<r<√2。原图的两个并集都漏掉平方根。

**原文：**

> 当 $r$ 足够小的时候

**修正：**

> 当 $t$ 足够小的时候

**理由：** 半径r遍历固定环形区域，其范围已被确定；使用局部微分同胚及单射结论时要求足够小的是参数t。原图误用了r。

**原文：**

> $$
> \Phi_t(\Omega) = \left\{ (x_1, \cdots, x_n) \in \mathbb{R}^n \;\middle|\; \frac{1}{2}t\sqrt{1+t^2} < x_1^2 + \cdots + x_n^2 < 2t\sqrt{1+t^2} \right\}.
> $$

**修正：**

> $$
> \Phi_t(\Omega) = \left\{ (x_1, \cdots, x_n) \in \mathbb{R}^n \;\middle|\; \frac{1}{2}(1+t^2) < x_1^2 + \cdots + x_n^2 < 2(1+t^2) \right\}.
> $$

**理由：** X为单位切向量，故x与V(x)正交且|V(x)|=|x|，所以|x+tV(x)|²=(1+t²)|x|²。应将原平方半径界同时乘1+t²；原图t√(1+t²)在t=0时甚至把像区域变为空集。小时间时每个球面上的映射为局部微分同胚，像既开又闭，确实覆盖目标球面。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \int_X |F| &= \int_X \sum_{i=1}^\infty \sum_{j=1}^\infty |f_i(x)||f_j(x)|d\mu(x) \\
> &= \sum_{i=1}^\infty \sum_{j=1}^\infty \int_X |f_i(x)||f_j(x)|d\mu(x) \\
> &\leqslant \sum_{i=1}^\infty \sum_{j=1}^\infty \|f_i\|_{L^2} \|f_j\|_{L^2} \\
> &= \left( \sum_{i=1}^\infty \|f_i(x)\|_{L^2} \right)^2 < \infty.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_X |F| &= \int_X \sum_{i=1}^\infty \sum_{j=1}^\infty |f_i(x)||f_j(x)|d\mu(x) \\
> &= \sum_{i=1}^\infty \sum_{j=1}^\infty \int_X |f_i(x)||f_j(x)|d\mu(x) \\
> &\leqslant \sum_{i=1}^\infty \sum_{j=1}^\infty \|f_i\|_{L^2} \|f_j\|_{L^2} \\
> &= \left( \sum_{i=1}^\infty \|f_i\|_{L^2} \right)^2 < \infty.
> \end{aligned}
> $$

**理由：** L²范数作用于整个函数f_i；f_i(x)已是一个复数值，不能再作为此测度空间中的函数取L²范数。原图多写了点值自变量。

**原文：**

> $\lim_{N \to \infty} |S_N(x) - f(x)|^2 = 0$

**修正：**

> $\lim_{N \to \infty} |S_N(x) - S(x)|^2 = 0$

**理由：** 本证明刚定义的逐点极限是S，尚未定义f；前一行控制函数和后一行收敛积分也都使用S，故中间的f应统一为S。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> 它在 $L^2([0, 1])$ 上收敛到 $0$，在 $L^1([0, 1])$ 上不收敛。

**修正：**

> 它满足 $\|f_n\|_{L^2([0,1])}=n^{-3/2}$、$\|f_n\|_{L^1([0,1])}=n^{-2}$，所以在这两个空间中都收敛到 $0$；该例没有表现出两种收敛性的差异。

**理由：** 按原图给出的高度1/n和支集长度1/n，直接积分得到L¹范数n^(−2)和L²范数n^(−3/2)，两者都趋零。有限测度上L²收敛本就蕴含L¹收敛，不能保留原写的相反结论；保留函数定义，仅修正确定错误的结论。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \|f_i-f\|_{L^\infty}<\varepsilon
> ```

**正文：**

> $$
> \|f_i - f_j\|_{L^\infty} < \varepsilon.
> $$

**理由：** 此步骤尚未证明极限f在L∞中，须先使用Cauchy条件比较fi与fj，随后令j趋无穷。源图少j，Markdown已正确。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> d_F ((L(x), L(e)) &= \|L(x) - L(e)\|_F = \|L(x - e)\|_F \\
> &\leqslant C\|x - e\|_E = C d_E(x, e).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> d_F (L(x), L(e)) &= \|L(x) - L(e)\|_F = \|L(x - e)\|_F \\
> &\leqslant C\|x - e\|_E = C d_E(x, e).
> \end{aligned}
> $$

**理由：** 距离函数d_F有两个自变量，原图左括号多写一个，使表达式括号不配对，删去这一重复括号。

**原文：**

> 那么，对任意的 $e \in E$，我们有

**修正：**

> 那么，对任意的 $e\in E\setminus\{0\}$，我们有

**理由：** 下一式除以∥e∥，仅对非零向量有定义。零向量因线性性满足L(0)=0，所需有界估计直接成立，故把本次归一化的对象明确限定为非零。

**原文：**

> 假设 $E'$ 在 $E$ 中是稠密的。

**修正：**

> 假设 $E'$ 在 $E$ 中是稠密的，并且 $F$ 是完备的。

**理由：** 连续线性映射延拓需要目标空间F完备，才能保证像Cauchy列的极限存在。若E为ℓ²、E′=c₀₀、F=c₀₀并均用ℓ²范数，L′为恒等映射，则没有取值于F的连续延拓，直接反驳缺条件的原命题。

**原文：**

> 如果存在连续线性映射 $L' : E' \to F$

**修正：**

> 图中左上角应标作 $E'$，且 $i:E'\hookrightarrow E$ 为包含映射。若存在连续线性映射 $L' : E' \to F$

**理由：** 原图交换图左上角误标E，但沿斜箭头的L′定义域是E′，横箭头是E′到E的包含映射。补充正确图注，保留原图和连续延拓的全部命题内容。

**原文：**

> 我们就定义
> $$
> L(e) := \lim_{i \to \infty} L'(e'_i)
> $$

**修正：**

> 由于 $L'$ 有界，$\{L'(e'_i)\}$ 是 Cauchy 列；$F$ 的完备性保证其极限存在。因此定义
> $$
> L(e) := \lim_{i \to \infty} L'(e'_i)
> $$

**理由：** 原证明直接定义像列的极限而未说明它存在。连续线性映射有界使像列Cauchy，补充的目标完备性确保极限存在，后面的序列选择无关性证明才能继续。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \|L(e)\|_F\leqslant\lim_i\|e_i\|_E
> ```

**正文：**

> $$
> \|L(e)\|_F = \lim_{i \to \infty} \|L'(e'_i)\|_F \leqslant \lim_{i \to \infty} C \|e'_i\|_E = C \|e\|_E.
> $$

**理由：** 有界线性映射只保证以算子界C控制范数，原图漏常数C；Markdown已保留必需的常数。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> (f * g)(x) &= \int_{\mathbb{R}^n} f(x-y)g(y)dy \\
> &= \int_{\mathbb{R}^n} f(z)g(x-z)dy \\
> &= (g * f)(x).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> (f * g)(x) &= \int_{\mathbb{R}^n} f(x-y)g(y)dy \\
> &= \int_{\mathbb{R}^n} f(z)g(x-z)dz \\
> &= (g * f)(x).
> \end{aligned}
> $$

**理由：** 这里已经换元z=x−y，积分变量应同步改成dz；原图保留dy但被积函数已经使用z。Lebesgue换元的Jacobian绝对值为1，无需加负号。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> 我们有考虑正函数

**修正：**

> 利用卷积交换律，我们考虑非负函数

**理由：** 原证明后面的估计使用L²平移函数和L¹权函数，需借助上一引理的交换律将g放在平移位置、f放在权函数位置；同步说明这一用法，保留原来的Fubini与Cauchy-Schwarz证明。

**原文：**

> $$
> F : \mathbb{R}^n \to \mathbb{R}_{\geqslant 0}, \quad x \mapsto \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy.
> $$

**修正：**

> $$
> F : \mathbb{R}^n \to [0,+\infty], \quad x \mapsto \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy.
> $$

**理由：** 已知f属于L¹、g属于L²，应将g用于平移的L²内积估计，f用于外层L¹积分。F在证明可积之前可以取正无穷，故同时使用扩展非负实数值域；交换律保证它仍控制|f*g|。

**原文：**

> $$
> \begin{aligned}
> |(f * g)(x)| &= \left| \int_{\mathbb{R}^n} f(x-y)g(y)dy \right| \\
> &\leqslant \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \\
> &\leqslant \|g\|_{L^\infty} \int_{\mathbb{R}^n} |f(x-y)|dy \\
> &= \|f\|_{L^1} \|g\|_{L^\infty}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |(f * g)(x)| &= \left| \int_{\mathbb{R}^n} f(x-y)g(y)dy \right| \\
> &\leqslant \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \\
> &\leqslant \|f\|_{L^\infty} \int_{\mathbb{R}^n} |g(x-y)|dy \\
> &= \|f\|_{L^1} \|g\|_{L^\infty}.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> |(f * g)(x)| &= \left| \int_{\mathbb{R}^n} f(x-y)g(y)dy \right| \\
> &\leqslant \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \\
> &\leqslant \|g\|_{L^\infty} \int_{\mathbb{R}^n} |f(x-y)|dy \\
> &= \|f\|_{L^1} \|g\|_{L^\infty}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |(f * g)(x)| &= \left| \int_{\mathbb{R}^n} f(x-y)g(y)dy \right| \\
> &\leqslant \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \\
> &\leqslant \|f\|_{L^\infty} \int_{\mathbb{R}^n} |g(x-y)|dy \\
> &= \|f\|_{L^1} \|g\|_{L^\infty}.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \int_{\mathbb{R}^n} |f(x-z)||g(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |f(x-y)||g(y)||f(x-z)||g(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)||f(x-z)|dx \right) |g(y)||g(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |f(x-z)|^2dx \right)^{\frac{1}{2}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^n} |g(y)|dy \int_{\mathbb{R}^n} |g(z)|dz.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \int_{\mathbb{R}^n} |g(x-z)||f(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |g(x-y)||f(y)||g(x-z)||f(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)||g(x-z)|dx \right) |f(y)||f(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |g(x-z)|^2dx \right)^{\frac{1}{2}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^n} |f(y)|dy \int_{\mathbb{R}^n} |f(z)|dz.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \int_{\mathbb{R}^n} |f(x-z)||g(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |f(x-y)||g(y)||f(x-z)||g(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)||f(x-z)|dx \right) |g(y)||g(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |f(x-z)|^2dx \right)^{\frac{1}{2}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^n} |g(y)|dy \int_{\mathbb{R}^n} |g(z)|dz.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \int_{\mathbb{R}^n} |g(x-z)||f(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |g(x-y)||f(y)||g(x-z)||f(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)||g(x-z)|dx \right) |f(y)||f(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |g(x-z)|^2dx \right)^{\frac{1}{2}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^n} |f(y)|dy \int_{\mathbb{R}^n} |f(z)|dz.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \int_{\mathbb{R}^n} |f(x-z)||g(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |f(x-y)||g(y)||f(x-z)||g(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)||f(x-z)|dx \right) |g(y)||g(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |f(x-z)|^2dx \right)^{\frac{1}{2}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^n} |g(y)|dy \int_{\mathbb{R}^n} |g(z)|dz.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \int_{\mathbb{R}^n} |g(x-z)||f(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |g(x-y)||f(y)||g(x-z)||f(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)||g(x-z)|dx \right) |f(y)||f(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |g(x-z)|^2dx \right)^{\frac{1}{2}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^n} |f(y)|dy \int_{\mathbb{R}^n} |f(z)|dz.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \int_{\mathbb{R}^n} |f(x-z)||g(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |f(x-y)||g(y)||f(x-z)||g(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)||f(x-z)|dx \right) |g(y)||g(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |f(x-z)|^2dx \right)^{\frac{1}{2}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^n} |g(y)|dy \int_{\mathbb{R}^n} |g(z)|dz.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \int_{\mathbb{R}^n} |g(x-z)||f(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |g(x-y)||f(y)||g(x-z)||f(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)||g(x-z)|dx \right) |f(y)||f(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |g(x-z)|^2dx \right)^{\frac{1}{2}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^n} |f(y)|dy \int_{\mathbb{R}^n} |f(z)|dz.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \int_{\mathbb{R}^n} |f(x-z)||g(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |f(x-y)||g(y)||f(x-z)||g(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)||f(x-z)|dx \right) |g(y)||g(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |f(x-z)|^2dx \right)^{\frac{1}{2}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^n} |g(y)|dy \int_{\mathbb{R}^n} |g(z)|dz.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \int_{\mathbb{R}^n} |g(x-z)||f(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |g(x-y)||f(y)||g(x-z)||f(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)||g(x-z)|dx \right) |f(y)||f(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |g(x-z)|^2dx \right)^{\frac{1}{2}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^n} |f(y)|dy \int_{\mathbb{R}^n} |f(z)|dz.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x-y)||g(y)|dy \int_{\mathbb{R}^n} |f(x-z)||g(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |f(x-y)||g(y)||f(x-z)||g(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)||f(x-z)|dx \right) |g(y)||g(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |f(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |f(x-z)|^2dx \right)^{\frac{1}{2}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |g(y)||g(z)|dydz \\
> &= \|f\|_{L^2}^2 \int_{\mathbb{R}^n} |g(y)|dy \int_{\mathbb{R}^n} |g(z)|dz.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} |F(x)|^2 &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |g(x-y)||f(y)|dy \int_{\mathbb{R}^n} |g(x-z)||f(z)|dz \right) dx \\
> &= \int_{\mathbb{R}^{3n}} |g(x-y)||f(y)||g(x-z)||f(z)|dxdydz \\
> &= \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)||g(x-z)|dx \right) |f(y)||f(z)|dydz \\
> &\leqslant \int_{\mathbb{R}^{2n}} \left( \int_{\mathbb{R}^n} |g(x-y)|^2dx \right)^{\frac{1}{2}} \left( \int_{\mathbb{R}^n} |g(x-z)|^2dx \right)^{\frac{1}{2}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^{2n}} |f(y)||f(z)|dydz \\
> &= \|g\|_{L^2}^2 \int_{\mathbb{R}^n} |f(y)|dy \int_{\mathbb{R}^n} |f(z)|dz.
> \end{aligned}
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

**原文：**

> $$
> \int_{\mathbb{R}^n} |F(x)|^2 \leqslant \|f\|_{L^2}^2 \|g\|_{L^1}^2.
> $$

**修正：**

> $$
> \int_{\mathbb{R}^n} |F(x)|^2 \leqslant \|g\|_{L^2}^2 \|f\|_{L^1}^2.
> $$

**理由：** 这行是同一组卷积L¹×L²估计的联动修正：g为L²平移函数，f为L¹权函数，故同时交换两者在该行中的角色。逐步Fubini及Cauchy-Schwarz后得到∥g∥₂²∥f∥₁²，避免原证明使用未经假设的∥f∥₂和∥g∥₁。

[相关正文：函数空间、连续算子与卷积逼近](../../02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611.md)

## 数学修正

**原文：**

> Lebesgue 控制收敛定义

**修正：**

> Lebesgue 控制收敛定理

**理由：** 后面的含参数积分求导依据Lebesgue控制收敛定理，原图将定理误写为定义。

**原文：**

> 所有存在 $M$

**修正：**

> 所以存在 $M$

**理由：** 紧支集光滑导函数在全空间有界，此处应表达由此推出存在M，原图所有是同音字笔误。

**原文：**

> 在任意一个点 $x$ 处都有的定义, 这是因为 $|\varphi(x - y)g(y)| \leqslant A|g(y)|$ 是可积函数, 我们不需要用 Fubini 定理的结论来说明 $\varphi * g(x)$ 的存在性了。

**修正：**

> 在任意一个点 $x$ 处都有定义。令 $K=\operatorname{supp}\varphi$，则 $|\varphi(x-y)g(y)|\le A\mathbf1_{x-K}(y)|g(y)|$；$x-K$ 是有限测度的紧集，而 $g\in L^p$（$p=1,2,\infty$）均保证右侧可积。因此不需要借助 Fubini 定理的几乎处处结论来说明 $\varphi*g(x)$ 的存在性。

**理由：** 原注记承接p=1、2、∞三个情形，但g属于L²或L∞时A|g|通常不在全空间可积，例如g恒为1。φ的紧支集将积分限定在x−K内，有限测度集上由Hölder不等式可得局部可积，从而每个点的卷积都有定义。

[相关正文：51.1：作业：Stokes公式的应用](../../02-math-analysis-ii/51-convolution-approximation/51-03-p0612-0617.md)

## 数学修正

**原文：**

> $$\operatorname{div}(X) = \lim_{\varepsilon \to 0} \frac{1}{m(B_\varepsilon(x))} \int_{\partial B_\varepsilon(x)} X \cdot \nu \, \mathrm{d}\sigma.$$

**修正：**

> $$\operatorname{div}(X)(x) = \lim_{\varepsilon \to 0} \frac{1}{m(B_\varepsilon(x))} \int_{\partial B_\varepsilon(x)} X \cdot \nu \, \mathrm{d}\sigma.$$

**理由：** 右侧是以x为球心的局部通量极限，返回散度在点x的值；原图左侧只写整个散度函数，需补出评价点x。

**原文：**

> 我们用 $\nu$ 表示其边界的单位法向量场。证明，

**修正：**

> 设 $X$ 是圆盘邻域内的光滑向量场，$\gamma$ 沿 $\partial D_\varepsilon(x)$ 顺时针定向。证明，

**理由：** 本题原图没有定义积分曲线γ及其方向。正文二维旋度采用∂₂X₁−∂₁X₂的符号约定，所以顺时针边界环量除以面积才返回该旋度；同时明确所需向量场及曲线。

**原文：**

> $$\operatorname{curl}(X) = \lim_{\varepsilon \to 0} \frac{1}{\sigma(D_\varepsilon)} \oint_{\gamma} X \cdot \mathrm{d}\gamma$$

**修正：**

> $$\operatorname{curl}(X)(x) = \lim_{\varepsilon \to 0} \frac{1}{m(D_\varepsilon(x))} \oint_{\gamma} X \cdot \mathrm{d}\gamma$$

**理由：** 环量的局部极限应除以圆盘的面积，并评价旋度在圆心x处的值。用m明确二维Lebesgue面积，保持与本题梯度、散度的体积归一化一致；配合顺时针定向符合正文既定的二维旋度符号。

**原文：**

> 它的的运动轨迹

**修正：**

> 它的运动轨迹

**理由：** 描述粒子运动轨迹的原图重复结构助词的，去掉重复字后保留整道物理积分题。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \partial\Sigma
> ```

**正文：**

> $\partial \Omega$

**理由：** Green边界积分域应为已定义区域Ω的边界，原图该题改用了未定义Σ，Markdown已一致为∂Ω。

[相关正文：51.1：作业：Stokes公式的应用](../../02-math-analysis-ii/51-convolution-approximation/51-03-p0612-0617.md)

## 数学修正

**原文：**

> $$F : \mathbb{R}^3 - \{(0, 0, 0)\} \to \mathbb{R}, \quad x \mapsto f(|x|)x.$$

**修正：**

> $$F : \mathbb{R}^3 - \{(0, 0, 0)\} \to \mathbb{R}^3, \quad x \mapsto f(|x|)x.$$

**理由：** 有心力场F(x)=f(|x|)x是三维向量，随后也与三维曲线切向量作内积；原图把值域误写成标量实数，改为R³。

[相关正文：51.1：作业：Stokes公式的应用](../../02-math-analysis-ii/51-convolution-approximation/51-03-p0612-0617.md)

## 数学修正

**原文：**

> $\gamma_1 : [a, b] \to \mathbb{R}^n$

**修正：**

> $\gamma_1 : [a, b] \to U$

**理由：** 本题力场F及势P仅定义在区域U上，第一条运动路径必须落在U内，才能评价沿路径的力场并应用势函数微积分基本定理。

**原文：**

> $\gamma_2 : [a, b] \to \mathbb{R}^n$

**修正：**

> $\gamma_2 : [a, b] \to U$

**理由：** 本题力场与势函数只在U上定义，第二条曲线也需落在U内；与第一条路径的定义域修正配套。

**原文：**

> 不自交指的是 $\gamma$ 是单射

**修正：**

> 不自交指的是 $\gamma$ 在 $[a,b)$ 上是单射

**理由：** 闭曲线满足γ(a)=γ(b)，因此在整个闭区间上不可能单射。除去最后一个重复端点后单射才表达不自交的简单闭曲线。

[相关正文：51.1：作业：Stokes公式的应用](../../02-math-analysis-ii/51-convolution-approximation/51-03-p0612-0617.md)

## 数学修正

**原文：**

> $\operatorname{supp}\rho \in \mathring{\Omega}$

**修正：**

> $\operatorname{supp}\rho \subset \mathring{\Omega}$

**理由：** ρ的支集是点的集合，Gauss定律的假设应要求这个集合包含在Ω内部；原图误用点属于集合的∈符号。

**原文：**

> 是有界光滑带边区域 $\Omega \subset \mathbb{R}^2$ 的边界。

**修正：**

> 一次遍历有界光滑带边区域 $\Omega \subset \mathbb{R}^2$ 的边界。

**理由：** 面积公式按边界积分，需要参数曲线一次遍历边界。只要求曲线像等于边界会容许多次绕行，从而将有向面积积分乘上绕行次数。

**原文：**

> $$ m(\Omega) = \frac{1}{2} \int_a^b \left| \det \begin{pmatrix} x & y \\ x'(t) & y'(t) \end{pmatrix} \right| dt $$

**修正：**

> $$ m(\Omega) = \frac{1}{2} \left|\int_a^b \det \begin{pmatrix} x(t) & y(t) \\ x'(t) & y'(t) \end{pmatrix} dt\right| $$

**理由：** Green公式给出的面积是有向边界积分的绝对值。一般非星形区域或原点在区域外时行列式会变号，不能逐点取绝对值后积分；绝对值应放到整个积分外。原图位置错误，修正后任意一次遍历方向均给同样面积。

[相关正文：51.2：习题课：Riemann积分的定义2](../../02-math-analysis-ii/51-convolution-approximation/51-05-p0618-0622.md)

## 数学修正

**原文：**

> Rimeann 积分

**修正：**

> Riemann 积分

**理由：** 原图把Riemann姓名中的两个字母次序颠倒，统一为全文使用的Riemann积分名称。

**原文：**

> $$ \tilde{f} : \mathbb{R}^n \to \mathbb{R}, \quad x \mapsto \tilde{f}(x) = \begin{cases} f(x), & x \in A; \\ 0, & x \notin A. \end{cases} $$

**修正：**

> $$ \tilde{f} : \mathbb{R}^n \to \mathbb{C}, \quad x \mapsto \tilde{f}(x) = \begin{cases} f(x), & x \in A; \\ 0, & x \notin A. \end{cases} $$

**理由：** 本页明确f为复值函数，零延拓保留f在A上的复数取值，所以延拓函数的值域仍为C。原图误写R。

[相关正文：51.2：习题课：Riemann积分的定义2](../../02-math-analysis-ii/51-convolution-approximation/51-05-p0618-0622.md)

## 数学修正

**原文：**

> Cauchy-Shwarz 不等式

**修正：**

> Cauchy-Schwarz 不等式

**理由：** 积分内积估计的名称是Cauchy-Schwarz不等式，原图Schwarz姓名漏掉字母c；数学公式保留。

[相关正文：51.2：习题课：Riemann积分的定义2](../../02-math-analysis-ii/51-convolution-approximation/51-05-p0618-0622.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> m(C)-m(B)

**正文：**

> $$ B \supset A \supset C, \quad m(B) - m(C) < \varepsilon. $$

**理由：** 此处C包含于B，误差应为大集合测度减小集合测度，原图顺序反转；Markdown已给非负差m(B)−m(C)。

[相关正文：51.2：习题课：Riemann积分的定义2](../../02-math-analysis-ii/51-convolution-approximation/51-05-p0618-0622.md)

## 数学修正

**原文：**

> 和闭包为 $\overline{A}$ 为

**修正：**

> 和闭包 $\overline{A}$ 为

**理由：** 原图在引出内部与闭包的定义时重复为字，去掉重复后保留两条集合定义。
