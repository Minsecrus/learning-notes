# 勘误：48 Sard 型引理与 Stokes 公式

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \|\Phi(x) - \Phi(a) - d\Phi(a)(x - a)\| &= \sup_{k \leqslant n} |\Phi_k(x) - \Phi_i(a) - d\Phi_k(a)(x - a)| \\
> &\overset{\text{Lagrange}}{\leqslant} \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_k}{\partial x_j}(\xi_k) - \frac{\partial \Phi_k}{\partial x_j}(a) \right| |(x_j - a_j)| \\
> &\leqslant \|x - a\| \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_k) - \frac{\partial \Phi_i}{\partial x_j}(a) \right| \\
> &= \|d\Phi(x) - d\Phi(a)\| \|x - a\| \\
> &\leqslant \frac{\delta}{N}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|\Phi(x) - \Phi(a) - d\Phi(a)(x - a)\| &= \sup_{k \leqslant n} |\Phi_k(x)-\Phi_k(a)-d\Phi_k(a)(x-a)| \\
> &\overset{\text{Lagrange}}{\leqslant} \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_k}{\partial x_j}(\xi_k) - \frac{\partial \Phi_k}{\partial x_j}(a) \right| |(x_j - a_j)| \\
> &\leqslant \|x - a\| \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial\Phi_k}{\partial x_j}(\xi_k)-\frac{\partial\Phi_k}{\partial x_j}(a) \right| \\
> &\leqslant\left(\sup_{z\in Q_i}\|d\Phi(z)-d\Phi(a)\|\right)\|x-a\| \\
> &\leqslant \frac{\delta}{N}.
> \end{aligned}$$

**理由：** k分量Taylor差中三个项都应为同一分量，i在上确界中未绑定。

**原文：**

> $$\begin{aligned}
> \|\Phi(x) - \Phi(a) - d\Phi(a)(x - a)\| &= \sup_{k \leqslant n} |\Phi_k(x) - \Phi_i(a) - d\Phi_k(a)(x - a)| \\
> &\overset{\text{Lagrange}}{\leqslant} \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_k}{\partial x_j}(\xi_k) - \frac{\partial \Phi_k}{\partial x_j}(a) \right| |(x_j - a_j)| \\
> &\leqslant \|x - a\| \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_k) - \frac{\partial \Phi_i}{\partial x_j}(a) \right| \\
> &= \|d\Phi(x) - d\Phi(a)\| \|x - a\| \\
> &\leqslant \frac{\delta}{N}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|\Phi(x) - \Phi(a) - d\Phi(a)(x - a)\| &= \sup_{k \leqslant n} |\Phi_k(x)-\Phi_k(a)-d\Phi_k(a)(x-a)| \\
> &\overset{\text{Lagrange}}{\leqslant} \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_k}{\partial x_j}(\xi_k) - \frac{\partial \Phi_k}{\partial x_j}(a) \right| |(x_j - a_j)| \\
> &\leqslant \|x - a\| \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial\Phi_k}{\partial x_j}(\xi_k)-\frac{\partial\Phi_k}{\partial x_j}(a) \right| \\
> &\leqslant\left(\sup_{z\in Q_i}\|d\Phi(z)-d\Phi(a)\|\right)\|x-a\| \\
> &\leqslant \frac{\delta}{N}.
> \end{aligned}$$

**理由：** 上确界及中间点均按k行，差分偏导也须取k行而非小方块指标i。

**原文：**

> $$\begin{aligned}
> \|\Phi(x) - \Phi(a) - d\Phi(a)(x - a)\| &= \sup_{k \leqslant n} |\Phi_k(x) - \Phi_i(a) - d\Phi_k(a)(x - a)| \\
> &\overset{\text{Lagrange}}{\leqslant} \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_k}{\partial x_j}(\xi_k) - \frac{\partial \Phi_k}{\partial x_j}(a) \right| |(x_j - a_j)| \\
> &\leqslant \|x - a\| \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_i}{\partial x_j}(\xi_k) - \frac{\partial \Phi_i}{\partial x_j}(a) \right| \\
> &= \|d\Phi(x) - d\Phi(a)\| \|x - a\| \\
> &\leqslant \frac{\delta}{N}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|\Phi(x) - \Phi(a) - d\Phi(a)(x - a)\| &= \sup_{k \leqslant n} |\Phi_k(x)-\Phi_k(a)-d\Phi_k(a)(x-a)| \\
> &\overset{\text{Lagrange}}{\leqslant} \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial \Phi_k}{\partial x_j}(\xi_k) - \frac{\partial \Phi_k}{\partial x_j}(a) \right| |(x_j - a_j)| \\
> &\leqslant \|x - a\| \sup_{k \leqslant n} \sum_{j \leqslant n} \left| \frac{\partial\Phi_k}{\partial x_j}(\xi_k)-\frac{\partial\Phi_k}{\partial x_j}(a) \right| \\
> &\leqslant\left(\sup_{z\in Q_i}\|d\Phi(z)-d\Phi(a)\|\right)\|x-a\| \\
> &\leqslant \frac{\delta}{N}.
> \end{aligned}$$

**理由：** 各行中间点xi_k不同，不能等于在端点x的单个Jacobian差范数；对小块内所有点取上确界可用一致连续delta控制。

**原文：**

> $$\{ x \in Q_i \mid \Phi(a) + d\Phi(a)(x - a) \}$$

**修正：**

> $$\{\Phi(a)+d\Phi(a)(x-a)\mid x\in Q_i\}$$

**理由：** 集合应由仿射像点组成，竖线右边须为限制条件而非一个向量表达。

**原文：**

> $\frac{\delta}{N}$ 距离的地方（这里我们用 Euclid 距离，上述用的范数很明显是不超过 Euclid 的范数的（$=$ 平方和再开方））

**修正：**

> $\sqrt n\frac\delta N$ 距离的地方（这里使用 Euclid 距离，由 $|v|\leqslant\sqrt n\|v\|$ 把最大坐标范数的误差转换为 Euclid 距离）

**理由：** 最大坐标误差delta除N只控制Euclid误差sqrt n乘delta除N，原使用相反方向范数不等式遗漏维数因子。

**原文：**

> $$\|\Phi(x) - \Phi(a)\| \leqslant \|d\Phi(a)\| \|x - a\| + \|d\Phi(x) - d\Phi(a)\| \|x - a\| \leqslant M \|x - a\|.$$

**修正：**

> $$\|\Phi(x) - \Phi(a)\| \leqslant \left(\sup_{k\leqslant n}\sum_{j\leqslant n}\left|\frac{\partial\Phi_k}{\partial x_j}(\xi_k)\right|\right)\|x-a\|\leqslant M\|x-a\|.$$

**理由：** 三角估计得到的导数基点范数加导数差未必小于最大导数M；直接逐分量中值定理在同一行中间点取行和，才可用整个Q上的最大范数M。

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> $2 \times \frac{\delta}{N}$ 为高

**修正：**

> $2\sqrt n\frac\delta N$ 为高

**理由：** 圆柱厚度由Euclid距离的双侧误差控制，须带上一页已修复的sqrt n维数因子。

**原文：**

> $$\left( c_{n-1} \sqrt{n}\frac{M}{N} \right)^{n-1} \times \left( 2 \times \frac{\delta}{N} \right) = C_n M^{n-1} \frac{\delta}{N^n}.$$

**修正：**

> $$c_{n-1}\left(\sqrt n\frac MN\right)^{n-1}\times\left(2\sqrt n\frac\delta N\right) = C_n M^{n-1} \frac{\delta}{N^n}.$$

**理由：** 底球体积为单位n减一维体积常数乘半径的n减一次方，常数不能也乘该次方；高度还须sqrt n转换因子，所有维数常数并入Cn。

**原文：**

> 由于至多有 $N^n$ 个这样的 $Q_i$

**修正：**

> 这里在 $n=1$ 时约定 $c_0=1$；维数常数 $C_n$ 取上述圆柱体积式所给出的值。由于至多有 $N^n$ 个这样的 $Q_i$

**理由：** 一维Sard估计也适用，零维底球体积约定一即可；Cn随此前正确Euclid厚度调整，仍只依赖维数。

**原文：**

> $$\begin{aligned}
> m(\Phi(\operatorname{Sing}(\Phi))) &\leqslant \sum_{Q_i \cap \operatorname{Sing}\Phi \neq \emptyset} m(\Phi(Q_i)) \\
> &\leqslant N^n \times \left[ C_n M^{n-1} \frac{\delta}{N^n} \right] \\
> &= C_n M^{n-1} \delta.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> m(\Phi(Q\cap\operatorname{Sing}(\Phi)))&\leqslant \sum_{Q_i \cap \operatorname{Sing}\Phi \neq \emptyset} m(\Phi(Q_i)) \\
> &\leqslant N^n \times \left[ C_n M^{n-1} \frac{\delta}{N^n} \right] \\
> &= C_n M^{n-1} \delta.
> \end{aligned}$$

**理由：** 本步小方块只覆盖固定Q，不能用其有限和控制整个U上的临界值集；每个Q结论再可数并。

**原文：**

> 所以 $\Phi(\operatorname{Sing}(\Phi))$ 是零测集

**修正：**

> 所以 $\Phi(Q\cap\operatorname{Sing}(\Phi))$ 是零测集。再对覆盖 $U$ 的可数个闭正方体取并，得到 $\Phi(\operatorname{Sing}(\Phi))$ 是零测集

**理由：** 将固定方块局部估计与全域结论分开，以开头可数方块覆盖完成全域零测性。

**原文：**

> 讨论到 $\mathbb{R}^1$ 的映射

**修正：**

> 讨论到 $\mathbb R^{n-1}$ 的映射

**理由：** 此处投影目标是n减一维，与后面映射和秩阈值一致，原一维表述只在n等于二成立。

**原文：**

> $F : U \to \mathbb{R}$

**修正：**

> $F:\Omega\to\mathbb R$

**理由：** 余面积公式左积分域Omega，F必须在同一开区域定义，U在该段未给定。

**原文：**

> 对任意的 $x \in U$，$dF(x) \neq 0$

**修正：**

> 对任意的 $x\in\Omega$，$dF(x) \neq 0$

**理由：** 非退化前提应覆盖给定开区域Omega，保持定义域一致。

**原文：**

> 对任意的 $U$ 上的可积函数 $f$

**修正：**

> 对任意的 $\Omega$ 上的可积函数 $f$

**理由：** 可积性区域与左边体积分必须相同，消除未定义U。

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> $$\Phi : U \cap \partial\Omega = V \cap (\mathbb{R}^{n-1} \times \{0\}).$$

**修正：**

> $$\Phi(U\cap\partial\Omega)=V\cap(\mathbb R^{n-1}\times\{0\}).$$

**理由：** 微分同胚将局部边界映到标准超平面，应写集合像的等式，原域集合与目标集合不能直接相等。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 积分Rm

**正文：**

> $$\begin{aligned}
> \int_{\Omega} \frac{\partial \varphi}{\partial x_1}(x)dx &= \int_{\mathbb{R}^n} 1_{\Omega}(x) \frac{\partial \varphi}{\partial x_1}(x)dx \\
> &\overset{\text{Fubini}}{=} \int_{\mathbb{R}^{n-1}} \left( \int_{\mathbb{R}} 1_{\Omega}(x_1, \cdots, x_n) \frac{\partial \varphi}{\partial x_1}(x_1, \cdots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> &= \int_{\mathbb{R}^{n-1} - \pi(\operatorname{Sing}(\pi))} \left( \int_{\mathbb{R}} 1_{\Omega}(x_1, \cdots, x_n) \frac{\partial \varphi}{\partial x_1}(x_1, \cdots, x_n) dx_1 \right) dx_2 \cdots dx_n.
> \end{aligned}$$

**理由：** 背景维数n，canonical已修复源图未定义m维积分区域。

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> 附近必然有一个开集 $U$

**修正：**

> 附近必然有一个 $\partial\Omega$ 中的相对开集 $U$

**理由：** 边界是余维一子流形，不含背景空间的非空开集；满秩点集合在边界的相对拓扑中开放。

**原文：**

> 这给出了从 $x$ 到 $x'$ 的道路。

**修正：**

> 这给出了从 $x$ 到 $x''$ 的道路。

**理由：** 拼接道路的终点是beta的一端x双撇，不能仍为两段连接处x单撇。

**原文：**

> $X$ 的一个**连通分支**。

**修正：**

> $X$ 的一个**道路连通分支**。

**理由：** 任意欧氏子集的道路等价类只定义道路连通分支，普通连通集合未必道路连通；开子集时两种分支才一致。

**原文：**

> 那么每个连通 $U$ 的连通分支都是开集

**修正：**

> 那么 $U$ 的每个道路连通分支都是开集，且与通常的连通分支一致

**理由：** Euclid开集局部道路连通，使道路分支开放且闭于U；一个连通分支不能跨越这些相对开闭道路分支。

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> $$\gamma : [0, 1] \to X \subset \mathbb{R}^n,$$

**修正：**

> $$\gamma : [0, 1] \to U \subset \mathbb{R}^n,$$

**理由：** 道路必须留在函数f的定义域U内，X未定义且不能据此复合f。

**原文：**

> 我们考虑 $x'$ 在 $\pi$ 下的逆向

**修正：**

> 我们考虑 $x'$ 在背景空间投影 $\pi:\mathbb R^n\to\mathbb R^{n-1}$ 下的逆像

**理由：** 本行直线为整个背景空间投影的纤维；此前限制于边界的投影纤维仅为有限个边界交点。

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> 假设 $\Omega$ 在 $V$ 上由

**修正：**

> 假设 $\partial\Omega\cap V$ 由

**理由：** 局部零水平集定义的是边界，区域自身由一侧不等式定义。

**原文：**

> 定义了 $\Omega$。

**修正：**

> 定义了 $\Omega\cap V$。

**理由：** 定义函数只在局部V给定，不等式只能表述Omega在V内的部分。

**原文：**

> $$a_1(x'), b_1(x'), a_2(x'), b_2(x'), \dots, a_k(x'), b_k(x') \in L_{x'}.$$

**修正：**

> $$a_1(x'), b_1(x'), a_2(x'), b_2(x'), \dots, a_k(x'), b_k(x') \in\mathbb R.$$

**理由：** 端点随后作为实数积分限并与x撇配成坐标，须将线上的交点以第一坐标记为实数。

**原文：**

> 这里我们一共有 $2k$（偶数个点）

**修正：**

> 这里各 $a_j,b_j$ 表示对应交点的 $x_1$ 坐标；我们一共有 $2k$（偶数个点）

**理由：** 明确端点函数为实数坐标，避免点与实数在图像及积分上下限中混用。

**原文：**

> $\nabla_{\frac{\partial}{\partial x_1}} f(a_j(x')) \neq 0, f(x', a_j(x')) = 0$

**修正：**

> $\nabla_{\frac{\partial}{\partial x_1}} f(a_j(x'),x')\neq0,\ f(a_j(x'),x')=0$

**理由：** 定义函数按第一坐标在前排列，偏导的计算点和零水平式都须按同一坐标序排列。

**原文：**

> 所以在 $x'$ 附近，区间的个数 $k(x')$ 是常数

**修正：**

> 此外，若附近出现其它交点，可由紧边界中取收敛子列，其极限仍在原纤维上，违背原交点邻域中隐函数分支的唯一性。因此在 $x'$ 附近，区间的个数 $k(x')$ 是常数

**理由：** 隐函数只保证已有交点的分支存在，排除逃逸的新交点须补充紧边界的收敛子列与局部唯一性。

**原文：**

> $$
> \begin{aligned}
> & \int_{U_i} \left( \int_{\mathbb{R}} \mathbf{1}_{\Omega}(x_1, \dots, x_n) \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \int_{U_i} \left( \int_{\mathbb{R} \cap L_{x'}} \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \sum_{j=1}^k \int_{U_i} \left( \int_{a_i(x')}^{b_i(x')} \frac{\partial \varphi}{\partial x_1}(x_1, x') dx_1 \right) dx'.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> & \int_{U_i} \left( \int_{\mathbb{R}} \mathbf{1}_{\Omega}(x_1, \dots, x_n) \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \int_{U_i} \left( \int_{\Omega\cap L_{x'}} \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \sum_{j=1}^k \int_{U_i} \left( \int_{a_j(x')}^{b_j(x')} \frac{\partial \varphi}{\partial x_1}(x_1, x') dx_1 \right) dx'.
> \end{aligned}
> $$

**理由：** Fubini内积分保留区域示性函数，删除示性函数后积分域必须是区域与纤维相交部分。

**原文：**

> $$
> \begin{aligned}
> & \int_{U_i} \left( \int_{\mathbb{R}} \mathbf{1}_{\Omega}(x_1, \dots, x_n) \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \int_{U_i} \left( \int_{\mathbb{R} \cap L_{x'}} \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \sum_{j=1}^k \int_{U_i} \left( \int_{a_i(x')}^{b_i(x')} \frac{\partial \varphi}{\partial x_1}(x_1, x') dx_1 \right) dx'.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> & \int_{U_i} \left( \int_{\mathbb{R}} \mathbf{1}_{\Omega}(x_1, \dots, x_n) \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \int_{U_i} \left( \int_{\Omega\cap L_{x'}} \frac{\partial \varphi}{\partial x_1}(x_1, \dots, x_n) dx_1 \right) dx_2 \cdots dx_n \\
> = & \sum_{j=1}^k \int_{U_i} \left( \int_{a_j(x')}^{b_j(x')} \frac{\partial \varphi}{\partial x_1}(x_1, x') dx_1 \right) dx'.
> \end{aligned}
> $$

**理由：** 外层对j求和，每一项的上下限必须取同一j号区间。

**原文：**

> 在每个区间 $[a_i(x'), b_i(x')]$

**修正：**

> 在每个区间 $[a_j(x'), b_j(x')]$

**理由：** Newton-Leibniz作用于j号区间，与相邻求和指标对应。

[相关正文：Sard 型引理与 Stokes 公式](../../02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \int_{U_i} \varphi(b_j(x'), x') dx' &= \int_{\partial\Omega_{i, b_j}} \frac{1}{\sqrt{1 + |\nabla b_j|^2}} \varphi(b_j(x'), x') d\sigma \\
> &= \int_{\partial\Omega_{i, b_j}} \nu_1 f d\sigma.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{U_i} \varphi(b_j(x'), x') dx' &= \int_{\partial\Omega_{i, b_j}} \frac{1}{\sqrt{1 + |\nabla b_j|^2}} \varphi(b_j(x'), x') d\sigma \\
> &= \int_{\partial\Omega_{i, b_j}} \nu_1\varphi\,d\sigma.
> \end{aligned}
> $$

**理由：** 公式的被积函数始终为phi，f是前页局部边界定义函数，此处误用符号。

**原文：**

> $$\int_{U_i} \varphi(a_j(x'), x') dx' = \int_{\partial\Omega_{i, a_j}} \nu_1 \varphi d\sigma.$$

**修正：**

> $$\int_{U_i} \varphi(a_j(x'), x') dx' = -\int_{\partial\Omega_{i, a_j}} \nu_1 \varphi d\sigma.$$

**理由：** 下端点外法向第一分量为负，图像密度与正的底积分相等时须有负号；与上下端点差合成正的边界通量。

**原文：**

> $$\partial\Omega \cap \pi^{-1}(U_i) = \bigcup_{i \leqslant k} \left( \partial\Omega_{i, a_j} \cup \partial\Omega_{i, b_j} \right),$$

**修正：**

> $$\partial\Omega \cap \pi^{-1}(U_i) = \bigcup_{j\leqslant k} \left( \partial\Omega_{i, a_j} \cup \partial\Omega_{i, b_j} \right),$$

**理由：** i表示固定的基底连通分支，组成该分支上边界的上下图像应遍历端点指标j。

**原文：**

> 再对所有的连通分支 $U_i$ 求和，根据 $\pi^{-1}(\mathbb{R}^{n-1} - \pi(\operatorname{Sing}(\pi))) = \partial\Omega - \operatorname{Sing}(\pi)$，我们就有

**修正：**

> 再对所有的连通分支 $U_i$ 求和。令 $A=\{x\in\partial\Omega\mid\pi(x)\in\pi(\operatorname{Sing}(\pi))\}$，于是限制在边界上的投影满足 $\pi^{-1}(\mathbb R^{n-1}-\pi(\operatorname{Sing}(\pi)))=\partial\Omega-A$，我们就有

**理由：** 临界值的原像可能包含投影同值的正则点，不能与临界点集合等同；须用完整临界值原像A。

**原文：**

> $$\int_{\Omega} \frac{\partial \varphi}{\partial x_1}(x) dx = \int_{\partial\Omega - \operatorname{Sing}(\pi)} \nu_1 \cdot \varphi d\sigma.$$

**修正：**

> $$\int_{\Omega}\frac{\partial\varphi}{\partial x_1}(x)\,dx=\int_{\partial\Omega-A} \nu_1 \cdot \varphi d\sigma.$$

**理由：** 对非临界基底分支求和仅得到边界排除临界值原像A上的积分。

**原文：**

> 存在 $w \in T_x \partial\Omega$

**修正：**

> 存在非零向量 $w\in T_x\partial\Omega$

**理由：** 秩亏保证核中存在非零向量，只有非零的第一坐标轴方向才能由正交推出法向第一分量为零。

**原文：**

> 所以，
>
> $$\int_{\partial\Omega - \operatorname{Sing}(\pi)} \nu_1 \cdot \varphi d\sigma = \int_{\partial\Omega} \nu_1 \cdot \varphi d\sigma.$$

**修正：**

> 对于 $A-\operatorname{Sing}(\pi)$，投影在每个点附近给出边界的图像坐标。其基底属于零测集 $\pi(\operatorname{Sing}(\pi))$，图像曲面测度有连续的密度，故每个局部图像中的这部分曲面测度为零。由可数个图像邻域覆盖，得到 $\sigma(A-\operatorname{Sing}(\pi))=0$。结合 $\nu_1$ 在临界点上为零，可知 $\int_A\nu_1\varphi\,d\sigma=0$。所以，
>
> $$\int_{\partial\Omega-A} \nu_1 \cdot \varphi d\sigma = \int_{\partial\Omega} \nu_1 \cdot \varphi d\sigma.$$

**理由：** 被排除的A中含有正则点，须利用局部图像密度和临界值零测证明额外部分曲面零测，才能恢复全边界积分。

[相关正文：48.1：作业：曲面曲线积分的计算](../../02-math-analysis-ii/48-stokes-topological-proof/48-03-p0573-0577.md)

## 数学修正

**原文：**

> 正可测函数 $\rho$ 几乎处处有界

**修正：**

> 正可测函数 $\rho$ 几乎处处取有限值

**理由：** sigma有限性只要求密度几乎处处有限，各密度水平截断与原空间有限测度覆盖构成可数有限新测度覆盖。

**原文：**

> $\mathbb{R}^1$ 上的 Lebesgue 测度 ${\pi_1}_* m_2$

**修正：**

> 由二维 Lebesgue 测度推前到 $\mathbb R$ 上的测度 ${\pi_1}_*m_2$

**理由：** 整条无限竖直纤维的推前测度在正长度基底集上为无穷，不能称为一维Lebesgue测度，原措辞自相矛盾。

**原文：**

> A4) （换元积分公式，条件更弱）如果

**修正：**

> A4) （换元积分公式，条件更弱）给定 $\mathbb R^n$ 中的两个开集 $\Omega_1,\Omega_2$。如果

**理由：** 普通同维换元公式和Jacobian的可微定义需要给定同维欧氏开域，补回已知公式沿用的条件。

[相关正文：48.1：作业：曲面曲线积分的计算](../../02-math-analysis-ii/48-stokes-topological-proof/48-03-p0573-0577.md)

## 数学修正

**原文：**

> 我们定义直线

**修正：**

> 这里将 $\pi$ 也用于相同公式定义的背景空间投影；我们定义直线

**理由：** M上投影的逆像只为M内交点，整条直线使用背景空间投影，明确两种同符号映射的作用域。

**原文：**

> $F : U \to \mathbb{R}$

**修正：**

> $F:\Omega\to\mathbb R$

**理由：** 余面积公式积分区域为Omega，函数的定义域必须与之相同。

**原文：**

> 对任意的 $x \in U$

**修正：**

> 对任意的 $x\in\Omega$

**理由：** 微分非退化前提应覆盖同一Omega，U在该题未定义。

**原文：**

> 对任意的 $U$ 上的可积函数

**修正：**

> $\Omega$ 上的任意可积函数

**理由：** 被积函数可积性须在左端积分域Omega上假定，消除未定义U。

[相关正文：48.1：作业：曲面曲线积分的计算](../../02-math-analysis-ii/48-stokes-topological-proof/48-03-p0573-0577.md)

## 数学修正

**原文：**

> $V$ 的质心坐标 $(\bar{x}_1, \cdots, \bar{x}_n)$ 由下式确定：

**修正：**

> 若 $0<\int_V\rho(x)\,dx<\infty$ 且各 $\int_V|x_i|\rho(x)\,dx<\infty$，$V$ 的质心坐标 $(\bar x_1,\cdots,\bar x_n)$ 由下式确定：

**理由：** 质心分母必须非零有限，各分子需要绝对有限以定义实坐标；任意密度区域并不自动满足这些条件。

**原文：**

> 由下式给出：
> $$ \Phi(x) = -\int_{\mathbb{R}^3} \frac{\rho(y)}{|x - y|} dy, \quad G(x) = -\nabla \Phi(x) $$

**修正：**

> 在下列积分有限且势函数可微的点，由下式给出：
> $$ \Phi(x) = -\int_{\mathbb{R}^3} \frac{\rho(y)}{|x - y|} dy, \quad G(x) = -\nabla \Phi(x) $$

**理由：** 非负L1密度不足以保证Newton势在每一点有限或经典可微，例如局部径向二次奇性在中心导致势发散。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> (c cosh u cos v,c sinh u,sin v)

**正文：**

> $(u, v) \mapsto (x, y) = (c \cosh u \cos v, c \sinh u \sin v)$

**理由：** 所称二维椭圆坐标须有两分量，源图第二分量中多余逗号导致三分量，canonical已恢复乘积。

[相关正文：48.1：作业：曲面曲线积分的计算](../../02-math-analysis-ii/48-stokes-topological-proof/48-03-p0573-0577.md)

## 数学修正

**原文：**

> $$ \rho(x) = \begin{cases} f(|x|), & r < |x| < R; \\ 0, & |x| > R \text{ 或 } |x| < r. \end{cases} $$

**修正：**

> $$ \rho(x) = \begin{cases} f(|x|), & r < |x| < R; \\ 0, & |x|\geqslant R\text{ 或 }|x|\leqslant r. \end{cases} $$

**理由：** 分段密度应在两个边界球面也有定义；赋零不影响三维Lebesgue积分及引力。

**原文：**

> 其中 $f$ 是在 $[r, R]$

**修正：**

> 其中 $0\leqslant r<R$，$f$ 是在 $[r, R]$

**理由：** 球壳内外半径须非负且有序，才能符合该区域及一维密度的定义。

**原文：**

> 证明，$C$ 的长度为

**修正：**

> 证明，该参数曲线 $C$ 按遍历次数计的长度为

**理由：** 极坐标参数可能重复走过同一曲线，速度积分计算参数曲线长度带遍历重数，不能无条件等于几何像的一次子流形测度。

## 未决数学问题

**原文：**

> $\int_C \frac{z^2}{x^2 + y^2} ds$

**问题：** 原图C1(a)分母为x+y平方，canonical已添加x的平方。原式可出现非可积极点，但题目可能允许广义发散答案，无法仅凭标准形式唯一确认作者意图；须独立裁定此首次转录改动。

**原文：**

> $$ [0, 2\pi] \times [0, 2\pi] \to \mathbb{R}^3, \quad (\theta, \varphi) \mapsto ((b + a \cos \theta) \cos \varphi, (b + a \cos \theta) \sin \varphi, a \sin \theta), $$

**问题：** 原图C2(b)第二分量半径为b加a乘sin theta，canonical改成cos形成标准环面。题目只说参数曲面而未指定环面，原参数可另定义曲面，不能只凭习惯题型改题；需作者意图或最终人工裁定。

[相关正文：48.2：习题课：Riemann积分的定义1](../../02-math-analysis-ii/48-stokes-topological-proof/48-04-p0578-0584.md)

## 数学修正

**原文：**

> 形如 $[a_1, b_1] \times \cdots [a_n, b_n]$

**修正：**

> 形如 $[a_1,b_1]\times\cdots\times[a_n,b_n]$

**理由：** 矩形是笛卡尔积，省略号后须仍使用乘积运算符以完整表示各坐标区间。

**原文：**

> $(a_1, b_1) \times \cdots (a_n, b_n)$

**修正：**

> $(a_1,b_1)\times\cdots\times(a_n,b_n)$

**理由：** 矩形内部同样是开区间的笛卡尔积，补回末因子前的乘积符号。

**原文：**

> $$P_{\sigma_1,\cdots,\sigma_n} = \left\{ [a_{\ell_1}, a_{\ell_1+1}] \times \cdots \times [a_{\ell_n}, a_{\ell_n+1}] \;\middle|\; 0 \leqslant \ell_1 \leqslant n_1 - 1, \cdots, 0 \leqslant \ell_n \leqslant n_n - 1 \right\}.$$

**修正：**

> $$P_{\sigma_1,\cdots,\sigma_n} = \left\{ [a_{1,\ell_1},a_{1,\ell_1+1}]\times\cdots\times[a_{n,\ell_n},a_{n,\ell_n+1}] \;\middle|\; 0 \leqslant \ell_1 \leqslant n_1 - 1, \cdots, 0 \leqslant \ell_n \leqslant n_n - 1 \right\}.$$

**理由：** 每一坐标使用独立分划节点ai,j，节点必须保留第一指标所属坐标。

**原文：**

> $P$ 的一个分划是一些更小的矩形的并。

**修正：**

> $P$ 的一个分划是一些更小矩形组成的有限集合，这些矩形的并为 $P$。

**理由：** 分划是矩形族而非并集合本身，否则所有分划都等于同一个P且加细关系失去定义。

**原文：**

> $P = [a_1, b_1] \times \cdots [a_n, b_n]$

**修正：**

> $P=[a_1,b_1]\times\cdots\times[a_n,b_n]$

**理由：** 体积定义的矩形仍是笛卡尔积，补回末区间前遗漏的乘积运算。

[相关正文：48.2：习题课：Riemann积分的定义1](../../02-math-analysis-ii/48-stokes-topological-proof/48-04-p0578-0584.md)

## 数学修正

**原文：**

> 如果存在有限个矩形 $P_1, \cdots, P_m$

**修正：**

> 如果存在有限个闭矩形 $P_1,\cdots,P_m$（这里允许退化矩形，其体积仍由 R1 的乘积公式给出；也允许空的矩形族）

**理由：** 可铺集对交封闭须包含低维交界及空集，A减B内部也可能只剩边界；允许退化闭矩形及空族才能使随后R3与R4成立。

[相关正文：48.2：习题课：Riemann积分的定义1](../../02-math-analysis-ii/48-stokes-topological-proof/48-04-p0578-0584.md)

## 数学修正

**原文：**

> 存在 $\Phi_\varepsilon, \Psi_\varepsilon \in \mathcal{E}(P)$，

**修正：**

> 存在 $\Phi_\varepsilon,\Psi_\varepsilon\in\mathcal E(P)$，其中 $\Psi_\varepsilon$ 为实值非负函数，

**理由：** 复杂值空间没有全序，误差上界Psi必须实值非负，才能定义后续逐点及积分不等式。

**原文：**

> $\{\phi_k\}_{k \geqslant 1}, \{\psi_k\}_{k \geqslant 1} \subset \mathcal{E}(P)$，

**修正：**

> $\{\phi_k\}_{k\geqslant1},\{\psi_k\}_{k\geqslant1}\subset\mathcal E(P)$，其中每个 $\psi_k$ 为实值非负函数，

**理由：** 序列条件也必须明确实值非负误差控制函数，原允许复值的E(P)不能直接比较大小。

[相关正文：48.2：习题课：Riemann积分的定义1](../../02-math-analysis-ii/48-stokes-topological-proof/48-04-p0578-0584.md)

## 数学修正

**原文：**

> $$ \overline{D}(f) = \overline{\int_Q} f, \quad \underline{D}(f) = \underline{\int_Q} f. $$

**修正：**

> $$ \overline{D}(f) = \overline{\int_P} f, \quad \underline{D}(f) = \underline{\int_P} f. $$

**理由：** 本题已经固定函数的定义域为矩形P；Q只是分划中的小矩形，不能作为整个函数的上下积分区域。原图两处下标均误写Q，统一为P。

**原文：**

> 给定实值函数 $f : Q \to \mathbb{R}$。

**修正：**

> 给定实值函数 $f : P \to \mathbb{R}$。

**理由：** 上下文固定总矩形P，本题丁及下一题的积分也都在P上；Q在乙中表示分划的小矩形。将函数定义域统一为P，避免同一字母同时代表总区域和分划元素。

**原文：**

> 甲) $f \in \mathcal{R}(Q);$

**修正：**

> 甲) $f \in \mathcal{R}(P);$

**理由：** 本题函数的定义域及丁中的上下积分均在总矩形P上，甲的Riemann可积性也必须在P上，与定义域勘误共同应用。

**原文：**

> 我们假设它们是 Riemann 可积德。

**修正：**

> 我们假设它们是 Riemann 可积的。

**理由：** 原图在表达两函数可积这一假设时误用同音字德，改为结构助词的。

[相关正文：48.2：习题课：Riemann积分的定义1](../../02-math-analysis-ii/48-stokes-topological-proof/48-04-p0578-0584.md)

## 数学修正

**原文：**

> Cauchy-Shwarz 不等式

**修正：**

> Cauchy-Schwarz 不等式

**理由：** 原文缺少Schwarz姓名中的字母c，积分内积估计的标准名称应为Cauchy-Schwarz不等式，公式无需改动。
