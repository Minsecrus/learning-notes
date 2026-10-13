# 勘误：40 Lebesgue 测度与测度空间的完备化

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $\lim_{i\to\infty} \mu(A_i) \to 0$

**修正：**

> $\lim_{i\to\infty}\mu(A_i)=0$

**理由：** 复述条件C时同样须说极限等于零，不能令已经取值的极限再趋于零。

**原文：**

> $E \subset \sigma(\mathcal{A})$

**修正：**

> $E\in\sigma(\mathcal A)$

**理由：** 扩张测度作用于sigma代数中的集合，E应为该族的元素，原包含关系错误地把E当作一族可测集合。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> 它们的并为 $(1, \infty)$

**修正：**

> 它们的并为 $[1,\infty)$

**理由：** 给定的第二区间包含端点1，合并后仍包含1，因此左端点必须闭。

**原文：**

> 任意的 $A_i$ 都是分离的

**修正：**

> 任意的 $I_i$ 都是分离的

**理由：** 本段仅定义了P的区间Ii，并未定义Ai；去掉端点后讨论I与各组成区间的分离。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $\{X_p\}_{p\geqslant 1} \subset \mathcal{A}^1$

**修正：**

> $\{X_p\}_{p\geqslant1}\subset\mathcal A(\mathbb R^1)$

**理由：** 实线区间代数在上页定义为A(R1)，A上标1没有定义，C无穷条件需要绑定原代数。

**原文：**

> $I_i' = \left[a_i + \frac{\varepsilon}{2^i}, b_i - \frac{\varepsilon}{2^i}\right] \subset I_i$

**修正：**

> 对于 $a_i<b_i$，令 $\eta_i=\min\{\varepsilon/2^{i+2},(b_i-a_i)/4\}$，取 $I_i'=[a_i+\eta_i,b_i-\eta_i]\subset I_i$；若 $I_i$ 是单点则保留 $I_i'=I_i$（空区间略去）

**理由：** 原缩进每边epsilon除以2的i次方，所有区间长度损失可接近2epsilon且短区间会产生反向端点；较小eta按区间长度截断保证内部非空并总损失小于epsilon，单点需单独保留。

**原文：**

> $$
> m(P) - \varepsilon < m(P') < m(P).
> $$

**修正：**

> $$
> m(P)-\varepsilon<m(P')\leqslant m(P).
> $$

**理由：** 有限区间并可能仅由单点组成且测度为零，紧近似可以等于原集合，故上界必须容许等号。

**原文：**

> $$
> \begin{aligned}
> m(A_i - \widetilde{A}_i) & < \sum_{j\leqslant i} m(A_i - A_j') \\
> & \leqslant \sum_{j\leqslant i} m(A_j - A_j') \leqslant \sum_{j\leqslant i} \frac{a}{2^{j+1}} = \frac{a}{2}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> m(A_i-\widetilde A_i)&\leqslant\sum_{j\leqslant i} m(A_i - A_j') \\
> & \leqslant \sum_{j\leqslant i} m(A_j - A_j') \leqslant \sum_{j\leqslant i} \frac{a}{2^{j+1}} < \frac{a}{2}.
> \end{aligned}
> $$

**理由：** 由有限次次可加性得到不严格上界，i等于一时左边与第一个和式完全相等，原严格小于不成立。

**原文：**

> $$
> \begin{aligned}
> m(A_i - \widetilde{A}_i) & < \sum_{j\leqslant i} m(A_i - A_j') \\
> & \leqslant \sum_{j\leqslant i} m(A_j - A_j') \leqslant \sum_{j\leqslant i} \frac{a}{2^{j+1}} = \frac{a}{2}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> m(A_i-\widetilde A_i)&\leqslant\sum_{j\leqslant i} m(A_i - A_j') \\
> & \leqslant \sum_{j\leqslant i} m(A_j - A_j') \leqslant \sum_{j\leqslant i} \frac{a}{2^{j+1}} < \frac{a}{2}.
> \end{aligned}
> $$

**理由：** 这里只求j不超过i的有限几何和，严格小于从一到无穷的和a二分之一，原等号遗漏有限截断。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $$\lim_{i\to\infty} m(\widetilde{A}_i) > \frac{a}{2} > 0.$$

**修正：**

> $$\lim_{i\to\infty}m(\widetilde A_i)\geqslant\frac a2 > 0.$$

**理由：** 每一项严格大于a二分之一不能保证极限仍严格大于它，极限保持不严格下界足以推出矛盾。

**原文：**

> 后面的 $A_i$ 全为空集

**修正：**

> 后面的 $\widetilde A_i$ 全为空集

**理由：** 区间套原理应用于已构造的下降紧集Ai波浪，原Ai未必紧，结论只适用于波浪序列。

**原文：**

> 区间 $I \in \mathbb{R}$

**修正：**

> 区间 $I\subset\mathbb R$

**理由：** 区间是实线的子集而非一个实数，成员符号类型错误。

**原文：**

> $|I_j|$ 是区间 $I_i$ 的长度

**修正：**

> $|I_j|$ 是区间 $I_j$ 的长度

**理由：** 所列边长符号下标j应指对应第j个坐标区间，原i与j不一致。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $$m : \mathcal{B}(\mathbb{R}^n) \to [0, \infty].$$

**修正：**

> $$m:\mathcal A(\mathbb R^n)\to[0,\infty].$$

**理由：** 此时只定义了有限方块并代数上的加性函数，尚未扩张到Borel代数，定义域须与本段及下一段扩张步骤一致。

**原文：**

> 是有限个闭的方块的并

**修正：**

> 是有限个有界闭方块的并（因而为紧集）

**理由：** 下一页调用引理构造紧子集，Rn闭方块可能无界，须明确选取有界闭方块；有限正体积方块必有界，零体积方块可以丢弃，故加强成立。

**原文：**

> 对于方块 $C$ 而言, 这是显然的, 只要把每条边稍微缩短一点即可。

**修正：**

> 对于零体积方块可以取空集；正有限体积方块的各边均有界且长度为正，取稍短的闭区间即可使体积损失任意小。

**理由：** 零体积方块可能含无界边，缩短一点不能得到紧集；先丢弃零体积方块再对正体积有界方块内缩可严谨获得紧内近似。

**原文：**

> $\{X_p\}_{p \geqslant 1} \subset \mathcal{A}(\mathbb{R}^1)$

**修正：**

> $\{X_p\}_{p\geqslant1}\subset\mathcal A(\mathbb R^n)$

**理由：** Xp是n个区间的乘积，属于Rn的方块代数，误沿用实线维数。

**原文：**

> $S = C_1 \cup C_2 \cup \dots \cup C_m \in \mathcal{A}(\mathbb{R}^1)$, 假设 $m(S) = +\infty$

**修正：**

> $S = C_1 \cup C_2 \cup \dots \cup C_m \in\mathcal A(\mathbb R^n)$，假设 $m(S) = +\infty$

**理由：** S为n维方块的有限并，C无穷条件的代数维数必须与Rn一致。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $\{\widetilde{A}_i\}_{i \geqslant 1} \subset \mathcal{A}(\mathbb{R}^1)$ 是下降

**修正：**

> $\{\widetilde{A}_i\}_{i \geqslant 1} \subset\mathcal A(\mathbb R^n)$ 是下降

**理由：** 构造的紧集序列在n维空间，不属于一维区间代数。

**原文：**

> $$\begin{aligned}
> m(A_i - \widetilde{A}_i) &< \sum_{j \leqslant i} m(A_i - A_j') \\
> &\leqslant \sum_{j \leqslant i} m(A_j - A_j') \leqslant \sum_{j \leqslant i} \frac{a}{2^{j+1}} = \frac{a}{2}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> m(A_i-\widetilde A_i)&\leqslant \sum_{j \leqslant i} m(A_i - A_j') \\
> &\leqslant \sum_{j \leqslant i} m(A_j - A_j') \leqslant \sum_{j \leqslant i} \frac{a}{2^{j+1}} < \frac a2.
> \end{aligned}$$

**理由：** 第一次由次可加性给出的上界可等号成立，例如i等于一，不能使用严格小于。

**原文：**

> $$\begin{aligned}
> m(A_i - \widetilde{A}_i) &< \sum_{j \leqslant i} m(A_i - A_j') \\
> &\leqslant \sum_{j \leqslant i} m(A_j - A_j') \leqslant \sum_{j \leqslant i} \frac{a}{2^{j+1}} = \frac{a}{2}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> m(A_i-\widetilde A_i)&\leqslant \sum_{j \leqslant i} m(A_i - A_j') \\
> &\leqslant \sum_{j \leqslant i} m(A_j - A_j') \leqslant \sum_{j \leqslant i} \frac{a}{2^{j+1}} < \frac a2.
> \end{aligned}$$

**理由：** 有限几何和严格小于无穷几何和a二分之一，原等号混淆截断和与完整级数。

**原文：**

> $$\lim_{i \to \infty} m(\widetilde{A}_i) > \frac{a}{2} > 0.$$

**修正：**

> $$\lim_{i\to\infty}m(\widetilde A_i)\geqslant\frac a2 > 0.$$

**理由：** 各项严格下界在极限中只能保证不严格下界，保留正下界仍足以导出矛盾。

**原文：**

> 后面的 $A_i$ 全为空集

**修正：**

> 后面的 $\widetilde A_i$ 全为空集

**理由：** 区间套性质使用下降紧集Ai波浪，原Ai仅是代数元素不保证紧。

**原文：**

> 任意的区间 $C \subset \mathbb{R}^n$

**修正：**

> 任意的方块 $C\subset\mathbb R^n$

**理由：** C在定理中为n个区间的乘积，前页将其定义为方块，n维对象不宜误称一维区间。

**原文：**

> $E \in \mathcal{B}(\mathbb{R}^1)$

**修正：**

> $E\in\mathcal B(\mathbb R^n)$

**理由：** 该定理构造Rn上的Lebesgue测度，覆盖由n维方块构成，E须为Rn中的Borel集合。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $$\mu \Big( \underbrace{[0, 1] \times \dots \times [1, 1]}_{n \text{ 个}} \Big) = 1,$$

**修正：**

> $$\mu \Big( \underbrace{[0,1]\times\dots\times[0,1]}_{n \text{ 个}} \Big) = 1,$$

**理由：** 归一化应在n维单位正方体上取值一，最后一边若为单点则零体积，不符合Lebesgue测度。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> 它的测度 $m(C_{\frac{1}{k}})$

**修正：**

> 它的测度 $\mu(C_{\frac1k})$

**理由：** 正在刻画的是未知平移不变测度mu，已知Lebesgue测度m不需要重新求值。

**原文：**

> $\left\{\tau_{\frac{i}{N k}}(E)\right\}_{i=0,1,\cdots,N}$ 放到 $E$ 中去

**修正：**

> $\left\{\tau_{\frac{i}{Nk}e_1}(E)\right\}_{i=0,1,\cdots,N}$ 放到 $C_{1/k}$ 中去

**理由：** 将面沿第一坐标平移N加一次，才会形成不交切片并落入正方体；原标量平移及放到同一个面E均不可能。

**原文：**

> $$\mu(C_1) \geqslant \mu(C_{\frac{1}{k}}) \geqslant \sum_{i=0}^{N+1} \mu\left(\tau_{\frac{i}{N k}}(E)\right) = (N+1)E.$$

**修正：**

> $$\mu(C_1) \geqslant \mu(C_{\frac{1}{k}}) \geqslant \sum_{i=0}^{N}\mu\left(\tau_{\frac{i}{Nk}e_1}(E)\right)=(N+1)\mu(E).$$

**理由：** 索引零到N有N加一项，零到N加一多一项且最后切片越出正方体；右端必须是数值测度mu(E)，不能乘集合E。

**原文：**

> $C_1 = \underbrace{[0, 1] \times \cdots \times [1, 1]}_{n \text{ 个}}$

**修正：**

> $C_1 = \underbrace{[0,1]\times\cdots\times[0,1]}_{n \text{ 个}}$

**理由：** k的n次方小正方体拼成完整n维单位方体，最后一个坐标区间不能是单点。

**原文：**

> 上面的 4) 表明，那么 $m$ 和 $\mu$ 在 $\mathcal{A}(\mathbb{R}^n)$ 上面的取值是一样的

**修正：**

> 上面的 4) 表明 $m$ 和 $\mu$ 在有理端点方块生成的代数上取值相同；该代数生成 $\mathcal B(\mathbb R^n)$，且可由有限测度的有理方块覆盖

**理由：** 第四步只证明有理边长方块相同，不能直接断言在任意实端点方块代数上相同；改用有理方块代数生成Borel且sigma有限，唯一性定理即可推出结论。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $\mu = \lambda^{-n}(\rho_{\lambda})_* m$

**修正：**

> $\mu=\lambda^n(\rho_\lambda)_*m$

**理由：** 推出测度在方块上计算其逆像体积，逆像各边缩短lambda倍，因子为lambda的负n次方，归一化需乘lambda正n次方。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 对于A⊂A，如果μ(A)0

**正文：**

> 对于 $A \in \mathcal{A}$，如果 $\mu(A) = 0$

**理由：** 原图可测集关系写为包含且零测条件缺等号，canonical已正确采用成员关系和等于零，不得还原错误。

**原讲义片段：**

> A1⊂A⊂A2

**正文：**

> $A_1 \subset A' \subset A_2$

**理由：** 原图中间元素漏撇，完备化要求夹住新的A撇；canonical已正确，保持此规范化。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> $$m(C - B) \leqslant \sum_{i=1}^{\infty} m(C_i - B_i) = 0,$$

**修正：**

> $$\mu(C-B)\leqslant\sum_{i=1}^{\infty}\mu(C_i-B_i) = 0,$$

**理由：** 一般测度空间的原测度记为mu，m仅用于Lebesgue测度且该空间未定义m，须统一原测度符号。

**原文：**

> $$\mu(B - B \cap \overline{B}) \leqslant m(C \cup \overline{C} - B \cap \overline{B}) \leqslant \mu(C - B) + \mu(\overline{C} - \overline{B}) = 0.$$

**修正：**

> $$\mu(B - B \cap \overline{B}) \leqslant \mu(C\cup\overline C-B\cap\overline B) \leqslant \mu(C - B) + \mu(\overline{C} - \overline{B}) = 0.$$

**理由：** 完备化在任意原测度mu上证明良好定义，不能使用未定义的Lebesgue符号m。

**原文：**

> 这说明 $\mu$ 是测度。

**修正：**

> 这说明 $\mu\prime$ 是测度。

**理由：** 本段新证明可数可加性的对象是扩张mu撇，原测度mu在定理前提中已经给定。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> Bc⊃A′c⊂Cc

**正文：**

> $B^c \supset {A'}^c \supset C^c$

**理由：** 集合取补反转两次包含关系，原图第二个方向错误；canonical已经两次supset，保持正确关系。

**原讲义片段：**

> A′′⊂A；所以A′′∈A

**正文：**

> $A'' \subset A'$

**理由：** 原图末段两处漏撇，新完备空间的零集子集应属于A撇；canonical正确使用A撇和A双撇，保持此修复。

[相关正文：40：Lebesgue 测度与测度空间的完备化](../../02-math-analysis-ii/40-lebesgue-measure.md)

## 数学修正

**原文：**

> 其中，当 $i \geqslant 1$ 时，$\lambda_i \neq 0$。所以

**修正：**

> 其中 $\lambda_0=0$（必要时补上零取值），当 $i\geqslant1$ 时，$\lambda_i\ne0$。所以

**理由：** 零值集合允许无限测度，所以未施加测度限制的第零项系数必须为零，即使f不取零也可加入空零值集合。

**原文：**

> （要求当 $i \geqslant 1$ 时，$\lambda_i \neq 0$）

**修正：**

> （要求 $\lambda_0=0$，当 $i\geqslant1$ 时，$\lambda_i\ne0$）

**理由：** 反向任意表出式没有限制A0的测度，若lambda0非零则可能得到非简单函数，必须明确零系数。

**原文：**

> $\lambda_0, \lambda_1, \cdots, \lambda_m \in \mathbb{C}$ 并且当

**修正：**

> $\lambda_0=0,\lambda_1,\cdots,\lambda_m\in\mathbb C$ 并且当

**理由：** 引理中的表示同样以第零项容纳无限测度的零值集合，须明确lambda0等于零。

**原文：**

> $$f(x) = \sum_{i=0}^{n} \lambda_i \cdot \mathbf{1}_{A_i}(x),$$
> 其中，

**修正：**

> $$f(x) = \sum_{i=0}^{m} \lambda_i \cdot \mathbf{1}_{A_i}(x),$$
> 其中，

**理由：** 值和集合列只编号到m，公式求和上界n未定义，须与m加一个系数一致。

**原文：**

> $$f(x) = \sum_{i=0}^{n} \lambda_i \cdot \mathbf{1}_{A_i}(x).$$
> 这是显然

**修正：**

> $$f(x) = \sum_{i=0}^{m} \lambda_i \cdot \mathbf{1}_{A_i}(x).$$
> 这是显然

**理由：** 值和集合列只编号到m，公式求和上界n未定义，须与m加一个系数一致。

**原文：**

> $$f(x) = \sum_{i=0}^{n} \lambda_i \cdot \mathbf{1}_{A_i}(x).$$
> 的形式，

**修正：**

> $$f(x) = \sum_{i=0}^{m} \lambda_i \cdot \mathbf{1}_{A_i}(x).$$
> 的形式，

**理由：** 值和集合列只编号到m，公式求和上界n未定义，须与m加一个系数一致。
