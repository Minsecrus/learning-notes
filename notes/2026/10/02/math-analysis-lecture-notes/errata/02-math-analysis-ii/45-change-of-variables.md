# 勘误：45 换元积分公式

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> 上的正函数，其中

**修正：**

> 上的正可测函数，其中

**理由：** 积分及超水平集测度需要f可测，正取值本身不能保证这些表达有定义。

**原文：**

> $$
> \begin{aligned}
> \int_X g \circ f d\mu &= \int_X (g(f(x)) - g(0)) d\mu \\
> &= \int_X \left( \int_{[0, f(x)]} g'(x) ds \right) d\mu \\
> &= \int_X \left( \int_{[0, \infty)} g'(s) \mathbf{1}_{[0, f(x)]}(s) ds \right) d\mu.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_X g \circ f d\mu &= \int_X (g(f(x)) - g(0)) d\mu \\
> &= \int_X \left( \int_{[0, f(x)]} g'(s) ds \right) d\mu \\
> &= \int_X \left( \int_{[0, \infty)} g'(s) \mathbf{1}_{[0, f(x)]}(s) ds \right) d\mu.
> \end{aligned}
> $$

**理由：** NewtonLeibniz的内积分变量是s，导数应在s点求值，x一般甚至不属于实数域。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> 根据正函数版本的 Fubini 定理，我们有

**修正：**

> 当 $\mu$ 是 $\sigma$-有限测度时，根据正函数版本的 Fubini 定理，我们有以下等式。对任意测度，等式同样可先对有限取值非负简单函数直接验证，再用单调收敛延拓；其中各超水平集的测度随逼近列上升，至多在可数个跳跃水平上需区分严格与非严格不等号，这不影响 $dt$ 积分。

**理由：** 此前Fubini要求两个因子sigma有限，而推论未作此假设；一般测度下层析公式可由简单函数与单调收敛直接证明，明确两个情形避免非法套用。

**原文：**

> $$
> \begin{aligned}
> \int_X g \circ f d\mu &= \int_{X \times [0, \infty)} (g'(s) \mathbf{1}_{[0, f(x)]}(s)) ds \otimes d\mu \\
> &= \int_{[0, \infty)} \left( \int_X g'(s) \mathbf{1}_{[0, f(x)]}(s) d\mu \right) ds \\
> &= \int_{[0, \infty)} g'(s) \mu(\{x \mid f(x) \geqslant s\}) ds.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_X g \circ f d\mu &= \int_{X \times [0, \infty)} (g'(s) \mathbf{1}_{[0, f(x)]}(s)) d\mu\otimes ds \\
> &= \int_{[0, \infty)} \left( \int_X g'(s) \mathbf{1}_{[0, f(x)]}(s) d\mu \right) ds \\
> &= \int_{[0, \infty)} g'(s) \mu(\{x \mid f(x) \geqslant s\}) ds.
> \end{aligned}
> $$

**理由：** 积分域顺序为X乘非负实轴，乘积测度应先X测度后实轴测度。

**原文：**

> 我们假设这个函数是几乎处处有界的，即在一个零测集之外，$\rho$ 是有界的，即存在

**修正：**

> 我们假设这个函数几乎处处取有限值，即在一个零测集之外，$\rho$ 处处取有限值，即存在

**理由：** 每点小于无穷称有限值，不能推出一个统一有界常数；后续分层穷尽只需要几乎处处有限。

**原文：**

> 要点是用 $\rho$ 是几乎处处有界的

**修正：**

> 要点是用 $\rho$ 几乎处处取有限值

**理由：** sigma有限密度分层只要求几乎处处有限，不要求统一本性上界，与定义的逐点小于无穷条件一致。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> 是上升的并且 $Y_p \nearrow X$

**修正：**

> 是上升的并且 $Y_p\nearrow X-N_\infty$，其中 $N_\infty=\{\rho=\infty\}$ 为 $\mu$-零测集；将 $N_\infty$ 并入每个 $Y_p$ 后所得上升列覆盖 $X$ 且各项 $\nu$-测度不变

**理由：** 无穷密度点不属于任何rho小于p的层，原穷尽只覆盖有限值集合；无穷密度零集的nu积分仍为零，加入它即可真正覆盖全空间。

**原文：**

> 为了说明 $\nu(Y_p) \leqslant \infty$

**修正：**

> 为了说明 $\nu(Y_p)<\infty$

**理由：** sigma有限性需要每个穷尽层测度严格有限，小于等于无穷对任何测度都恒真。

**原文：**

> 正可测函数 $\rho$ 几乎处处有界

**修正：**

> 正可测函数 $\rho$ 几乎处处取有限值

**理由：** 密度定义与前一页分层证明对应有限值条件，几乎处处有界比所需条件更强且不等同逐点有限。

**原文：**

> $\mathbb{R}^1$ 上的 Lebesgue 测度 $\Phi_* m_2$

**修正：**

> $\mathbb R^1$ 上由二维 Lebesgue 测度推前得到的测度 $\Phi_*m_2$

**理由：** 投影推前在正长度集合上取无穷，不是通常一维Lebesgue测度，需区分来源测度与推前结果。

**原文：**

> 对任意的 $A \subset \mathbb{R}^1$

**修正：**

> 对任意的 Borel 集 $A\subset\mathbb R^1$

**理由：** 推前在给定可测代数上定义，任意非可测子集不能直接代入测度。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> lim_i∫Y f dν

**正文：**

> $$
> \begin{aligned}
> \int_Y f d\nu &= \lim_{i \to \infty} \int_Y f_i d\nu \\
> &= \lim_{i \to \infty} \int_X f_i \circ \Phi d\mu \\
> &= \int_X f \circ \Phi d\mu.
> \end{aligned}
> $$

**理由：** 原图单调收敛右端漏下标i，canonical已正确以逼近列fi积分。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 右端∫X

**正文：**

> $$
> \int_{\Omega_2} f(y)dy = \int_{\Omega_1} (f \circ \Phi)(x)|J_\Phi(x)|dx.
> $$

**理由：** 微分同胚定义域为Omega1，canonical已将源图未定义X替换为正确区域。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> $S$ 为对称矩阵

**修正：**

> $S$ 为正定对称矩阵

**理由：** 正特征值对角化与极分解唯一性要求取正定平方根，任意对称平方根可带负号而不唯一。

**原文：**

> $O$ 对应着旋转而 $A$ 对应着不同方向上的伸缩

**修正：**

> $O$ 对应着正交变换（旋转或反射），而 $S$ 对应着不同方向上的伸缩

**理由：** O可有负行列式而包含反射；纯各向伸缩由正定S承担，原A还包括O的作用。

**原文：**

> 我们可以取对称矩阵 $S$ 使得

**修正：**

> 我们可以取正定对称矩阵 $S$ 使得

**理由：** 正定平方根唯一，若仅要求对称则例如单位矩阵的正负单位平方根都满足方程，原脚注唯一性不成立。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> 存在开集 $U$ 包含 $K$ 和被 $K$ 包含的闭集 $F$

**修正：**

> 存在开集 $U$ 包含 $A$ 和被 $A$ 包含的闭集 $F$

**理由：** 正则性定理量词是任意Borel集A，K仅出现在测度局部有限假设中，包围对象须为A。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> $$
> F_i \subset A_i \subset U_i, \quad \mu(U_i - F_i) < \frac{\varepsilon}{2^i}.
> $$

**修正：**

> $$
> F_i \subset A_i \subset U_i, \quad \mu(U_i-F_i)<\frac{\varepsilon}{2^{i+1}}.
> $$

**理由：** 把外开近似预算减半，留另一半用于把闭集可数并改成闭集，最终总误差才能小于给定epsilon。

**原文：**

> $$
> \begin{aligned}
> \mu(U - \tilde{F}) & \leqslant \sum_{i \geqslant 1} \mu(U_i - F_i) \\
> & < \sum_{i \geqslant 1} \frac{\varepsilon}{2^i} = \varepsilon.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \mu(U - \tilde{F}) & \leqslant \sum_{i \geqslant 1} \mu(U_i - F_i) \\
> & < \sum_{i \geqslant 1} \frac{\varepsilon}{2^{i+1}}=\frac\varepsilon2.
> \end{aligned}
> $$

**理由：** 采用前述减半的几何误差预算，其和为epsilon的一半。

**原文：**

> 我们只要能证明下述引理即可（从而完成正则性定理的证明）

**修正：**

> 我们只要能证明下述引理，并对 $G=\tilde F$ 以误差 $\varepsilon/2$ 选取闭集 $F\subset\tilde F$ 即可：此时 $\mu(U-F)\leqslant\mu(U-\tilde F)+\mu(\tilde F-F)<\varepsilon$，从而完成正则性定理的证明

**理由：** 原文字用两次epsilon误差直接宣称原预算，需明确闭近似也只用一半并相加控制总差集。

**原文：**

> 对任意的 $j \geqslant 1$，我们定义
>
> $$
> F_j = \bigcup_{i \leqslant j} F_i.
> $$
>
> 这是一列上升的闭集序列并且 $F_j \nearrow G$。特别地，我们有 $\lim_{j \to \infty} F_j = G$，从而当 $j \to \infty$ 时，$\mu(G - F_j) \to 0$。据此，只需要取 $F = F_{k_0}$，其中 $k_0$ 比较大即可。

**修正：**

> 对任意的 $j \geqslant 1$，我们定义
>
> $$
> E_j = \bigcup_{i \leqslant j} F_i.
> $$
>
> 这是一列上升的闭集序列并且 $E_j \nearrow G$。特别地，我们有 $\lim_{j \to \infty} E_j = G$，从而当 $j \to \infty$ 时，$\mu(G - E_j) \to 0$。据此，只需要取 $F = E_{k_0}$，其中 $k_0$ 比较大即可。

**理由：** 原Fj既是给定闭集族的第j项又被重定义为前j项并，产生自指及符号冲突；新Ej表示有限并并用于穷尽与最后选择。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> 任意一个 $F$ 中的收敛点列一定会落在某个

**修正：**

> 任意一个 $F$ 中的收敛点列的充分靠后的各项一定会落在某个

**理由：** 收敛列的有限初项可能分布在任意远的环层，局部有限环层控制只适用于尾部，尾部属于闭集足以推出极限在F。

**原文：**

> 我们分成五个步骤

**修正：**

> 我们分成六个步骤

**理由：** 后文明确列到第六步，修复证明步骤数量的直接编号不一致。

**原文：**

> 假定 $Q$ 是一个边长为 $h > 0$ 的闭正方体

**修正：**

> 假定 $Q\subset\Omega_1$ 是一个边长为 $h>0$ 的闭正方体

**理由：** 微分同胚仅在Omega1定义，正方体须完整包含其中才能对任意点、中心及线段使用映射和导数。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> $$ \begin{aligned} \|\Phi(x) - \Phi(x^*)\| &= \sup_{i \leqslant n} |\Phi_i(x) - \Phi_i(x^*)| \\ &\overset{\text{Lagrange}}{\leqslant} \sup_i \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_j) \right| |(x_j - x_j^*)| \\ &\leqslant \|x - x^*\| \sup_{i \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_j) \right| \\ &\leqslant \frac{h}{2} \sup_{x \in Q} \|\operatorname{Jac}(\Phi)(x)\|. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \|\Phi(x) - \Phi(x^*)\| &= \sup_{i \leqslant n} |\Phi_i(x) - \Phi_i(x^*)| \\ &\overset{\text{Lagrange}}{\leqslant} \sup_i \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_i) \right| |(x_j - x_j^*)| \\ &\leqslant \|x - x^*\| \sup_{i \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_i) \right| \\ &\leqslant \frac{h}{2} \sup_{x \in Q} \|\operatorname{Jac}(\Phi)(x)\|. \end{aligned} $$

**理由：** 每个分量i的Lagrange中间点为xi_i，行求和所有偏导须在同一个点计算，换成随j变化的点不能用单个Jacobian行范数控制。

**原文：**

> $$ \begin{aligned} \|\Phi(x) - \Phi(x^*)\| &= \sup_{i \leqslant n} |\Phi_i(x) - \Phi_i(x^*)| \\ &\overset{\text{Lagrange}}{\leqslant} \sup_i \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_j) \right| |(x_j - x_j^*)| \\ &\leqslant \|x - x^*\| \sup_{i \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_j) \right| \\ &\leqslant \frac{h}{2} \sup_{x \in Q} \|\operatorname{Jac}(\Phi)(x)\|. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \|\Phi(x) - \Phi(x^*)\| &= \sup_{i \leqslant n} |\Phi_i(x) - \Phi_i(x^*)| \\ &\overset{\text{Lagrange}}{\leqslant} \sup_i \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_i) \right| |(x_j - x_j^*)| \\ &\leqslant \|x - x^*\| \sup_{i \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_i) \right| \\ &\leqslant \frac{h}{2} \sup_{x \in Q} \|\operatorname{Jac}(\Phi)(x)\|. \end{aligned} $$

**理由：** 每个分量i的Lagrange中间点为xi_i，行求和所有偏导须在同一个点计算，换成随j变化的点不能用单个Jacobian行范数控制。

**原文：**

> $$ \begin{aligned} m\left( (\operatorname{Jac}_{\Phi}(q_0))^{-1} (\Phi(Q_i)) \right) &= m\left( (\operatorname{Jac}_{\Phi}(q_0))^{-1} \circ \Phi(Q_i) \right) \\ &\leqslant \left( \sup_{x \in Q_i} \| ((\operatorname{Jac}_{\Phi}(q_0))^{-1} \circ \operatorname{Jac}_{\Phi}(x) \| \right)^n m(Q_i) \\ &\leqslant (1 + \varepsilon) m(Q_i). \end{aligned} $$

**修正：**

> $$ \begin{aligned} m\left( (\operatorname{Jac}_{\Phi}(q_0))^{-1} (\Phi(Q_i)) \right) &= m\left( (\operatorname{Jac}_{\Phi}(q_0))^{-1} \circ \Phi(Q_i) \right) \\ &\leqslant \left( \sup_{x \in Q_i} \| (\operatorname{Jac}_{\Phi}(q_0))^{-1} \cdot \operatorname{Jac}_{\Phi}(x) \| \right)^n m(Q_i) \\ &\leqslant (1 + \varepsilon) m(Q_i). \end{aligned} $$

**理由：** 矩阵乘积范数多出一个未闭合左括号；用矩阵乘法点号明确复合导数并使括号成对。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> $$ \begin{aligned} m(Q) &= \sum_i m(\Phi(Q_i)) \\ &\leqslant \sum_i (1 + \varepsilon) \int_{Q_i} |\mathbf{J}_{\Phi}(x)| dx \\ &= (1 + \varepsilon) \int_{\bigcup_i Q_i} |\mathbf{J}_{\Phi}(x)| dx \\ &= (1 + \varepsilon) \int_Q |\mathbf{J}_{\Phi}(x)| dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} m(\Phi(Q)) &= \sum_i m(\Phi(Q_i)) \\ &\leqslant \sum_i (1 + \varepsilon) \int_{Q_i} |\mathbf{J}_{\Phi}(x)| dx \\ &= (1 + \varepsilon) \int_{\bigcup_i Q_i} |\mathbf{J}_{\Phi}(x)| dx \\ &= (1 + \varepsilon) \int_Q |\mathbf{J}_{\Phi}(x)| dx. \end{aligned} $$

**理由：** 各像小正方体覆盖的是Phi(Q)，原左边Q体积一般不等于像体积，伸缩映射可直接反证。

**原文：**

> 对任意的 $i$ 和 $j$，$Q_i \cap Q_j$

**修正：**

> 对任意不同的 $i$ 和 $j$，$Q_i\cap Q_j$

**理由：** 同一正方体与自身的交有正体积，零测边界交只对不同分块成立。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> 每个紧集在这个测度下是有限值

**修正：**

> $\Omega_1$ 中的每个紧集在这个测度下是有限值；上述正则性论证在开子空间上同样成立，可用其紧集穷尽来证明

**理由：** 密度只在Omega1定义，靠近边界可能无界，不能将它直接当作整个Rn上的局部有限密度测度；相对开子空间上的紧集与正则性才是此处所需。

**原文：**

> $$ \mu(U) \leqslant (1 + \varepsilon)\mu(B). $$

**修正：**

> $$ \mu(U)\leqslant\mu(B)+\varepsilon. $$

**理由：** 当B测度为零且非空时，不存在包含B的零测开集，正则性只能保证任意小的加性外误差，乘性近似失效。

**原文：**

> $$ \int_U |\mathbf{J}_{\Phi}(x)| dx \leqslant (1 + \varepsilon) \int_B |\mathbf{J}_{\Phi}(x)| dx. $$

**修正：**

> $$ \int_U |\mathbf{J}_{\Phi}(x)| dx \leqslant \int_B |\mathbf{J}_{\Phi}(x)| dx+\varepsilon. $$

**理由：** 外正则性的加性预算转换为密度积分后仍为加性误差，包含零测集的情形。

**原文：**

> $$ \begin{aligned} m(\Phi(B)) &\leqslant m(\Phi(U)) \leqslant \int_U |\mathbf{J}_{\Phi}(x)| dx \\ &\leqslant (1 + \varepsilon) \int_B |\mathbf{J}_{\Phi}(x)| dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} m(\Phi(B)) &\leqslant m(\Phi(U)) \leqslant \int_U |\mathbf{J}_{\Phi}(x)| dx \\ &\leqslant \int_B |\mathbf{J}_{\Phi}(x)| dx+\varepsilon. \end{aligned} $$

**理由：** 由开集外近似得到的上界须采用相同加性误差，令epsilon趋零才能同时覆盖正测和零测B。

**原文：**

> $f$ 是 $\Omega_1$ 上定义的正可测函数

**修正：**

> $f$ 是 $\Omega_2$ 上定义的正可测函数

**理由：** 左积分在Omega2且右边复合Phi，f必须在像空间定义。

[相关正文：45：换元积分公式](../../02-math-analysis-ii/45-change-of-variables.md)

## 数学修正

**原文：**

> （严格单调的 $C^1$ 函数）

**修正：**

> （双射的 $C^1$ 函数且 $\varphi\prime$ 处处非零）

**理由：** 严格单调C1函数如三次函数在零点导数零，逆函数不C1；微分同胚需非零导数以保证逆的可微性。
