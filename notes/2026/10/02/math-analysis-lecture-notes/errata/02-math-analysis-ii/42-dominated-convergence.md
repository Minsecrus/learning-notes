# 勘误：42 Lebesgue 积分与控制收敛定理

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> $$
> \int_X f d\mu := \sup_{\substack{\varphi \in \mathcal{E}(X) \\ 0 \leqslant \varphi \leqslant f}} \int_X \varphi d\mu.
> $$

**修正：**

> $$
> \int_X f d\mu := \sup_{\substack{\varphi\in\mathcal E_+(X) \\ 0 \leqslant \varphi \leqslant f}} \int_X \varphi d\mu.
> $$

**理由：** 复述任意空间非负积分定义应使用不限制支撑测度的非负简单族，有限支撑E在非sigma有限空间不能定义正确积分。

**原文：**

> $$
> \mu : \mathbb{Z}_{\geqslant 1} \to [0, \infty], \quad A \mapsto \mu(A) = |A|.
> $$

**修正：**

> $$
> \mu:\mathcal P(\mathbb Z_{\geqslant1})\to[0,\infty], \quad A \mapsto \mu(A) = |A|.
> $$

**理由：** 计数测度以正整数集合的子集A为输入，定义域为幂集，原误写正整数点集。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> (Z≥1,P(Z≥1,μ))

**正文：**

> $(\mathbb{Z}_{\geqslant 1}, \mathcal{P}(\mathbb{Z}_{\geqslant 1}), \mu)$

**理由：** 原测度空间三元组括号把mu误放入幂集，canonical已正确将其作为第三项，保持排版规范化。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> $$
> \int_X |f| d\mu := \sup_{\substack{\varphi \in \mathcal{E}(X) \\ 0 \leqslant \varphi \leqslant |f|}} \int_X \varphi d\mu.
> $$

**修正：**

> $$
> \int_X |f| d\mu := \sup_{\substack{\varphi\in\mathcal E_+(X) \\ 0 \leqslant \varphi \leqslant |f|}} \int_X \varphi d\mu.
> $$

**理由：** 比较判别法调用非负积分上确界，须以不要求非零水平集测度有限的族为候选。

**原文：**

> $\varphi \in \mathcal{E}(X)$ 并且 $0 \leqslant \varphi \leqslant |f|$ 意味着 $\varphi \in \mathcal{E}(X)$

**修正：**

> $\varphi\in\mathcal E_+(X)$ 并且 $0\leqslant\varphi\leqslant|f|$ 意味着 $\varphi\in\mathcal E_+(X)$

**理由：** 本段置零后的非负简单函数仍属于不限支撑的E正族，两个引用同步正确非负积分定义。

**原文：**

> $C_k = B_{2^{k+1}} - B_{2^k}$

**修正：**

> $C_k=B_{2^k}-B_{2^{k-1}}$

**理由：** 分解从B1及C1开始，原C1是半径二到四的环却漏半径一到二；改为k第一环B2减B1同时与次页边长四方块覆盖一致。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> B={x∈X|f(x)>g(x)}

**正文：**

> $B = \{x \in X \mid |f(x)| > h(x)\}$

**理由：** 原证明首行比较的g未定义且f可为复值，canonical已正确以模f超过给定h作为异常集，保留该修复。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> $$
> \mathbb{R}^n \to \mathbb{R}^n, \quad x \mapsto 2^k x,
> $$

**修正：**

> $$
> \mathbb{R}^n \to \mathbb{R}^n, \quad x\mapsto2^{k-1}x,
> $$

**理由：** 第一环自身在k等于一应伸缩因子一，改环定义后从C1到Ck的半径比为2的k减一次方。

**原文：**

> $$
> m(C_k) = (2^k)^n m(C_1) \leqslant 2^{kn} a.
> $$

**修正：**

> $$
> m(C_k)=(2^{k-1})^nm(C_1)\leqslant2^{(k-1)n}a.
> $$

**理由：** 测度缩放系数按正确半径比取n次方，原k等于一即给C1体积乘2的n次方错误。

**原文：**

> $$
> f(x) = \frac{C}{1 + |x|^{n+\varepsilon}} \leqslant \frac{C}{1 + |2^k|^{n+\varepsilon}} \leqslant \frac{C}{|2^k|^{n+\varepsilon}}.
> $$

**修正：**

> $$
> f(x)=\frac C{1+|x|^{n+\varepsilon}}\leqslant\frac C{1+|2^{k-1}|^{n+\varepsilon}}\leqslant\frac C{|2^{k-1}|^{n+\varepsilon}}.
> $$

**理由：** Ck中半径下界为2的k减一次方，控制函数上界须采用这一正确内半径。

**原文：**

> 我们构造简单函数

**修正：**

> 我们构造可测非负函数（有限截断为非负简单函数）

**理由：** 无限环带上系数互异，h通常有无限多个值，不符合有限取值简单函数定义；其积分可由Beppo Levi对有限截断计算。

**原文：**

> $$
> h(x) = C \mathbf{1}_{B_1} + \sum_{k=1}^\infty \frac{C}{|2^k|^{n+\varepsilon}} \mathbf{1}_{C_k}.
> $$

**修正：**

> $$
> h(x)=C\mathbf1_{B_1}+\sum_{k=1}^\infty\frac C{|2^{k-1}|^{n+\varepsilon}}\mathbf1_{C_k}.
> $$

**理由：** 包住B1以外每一环的系数需按内半径2的k减一次方计算，原系数在第一环不足以保证f不超过h。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} h dm &= C m(B_1) + \sum_{k=1}^\infty \frac{C}{|2^k|^{n+\varepsilon}} m(C_k) \\
> &\leqslant C m(B_1) + \sum_{k=1}^\infty \frac{C}{|2^k|^{n+\varepsilon}} 2^{kn} a = C m(B_1) + C a \sum_{k=1}^\infty \frac{1}{2^{k\varepsilon}}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} h dm &= C m(B_1) + \sum_{k=1}^\infty \frac{C}{|2^{k-1}|^{n+\varepsilon}} m(C_k) \\
> &\leqslant C m(B_1) + \sum_{k=1}^\infty \frac{C}{|2^{k-1}|^{n+\varepsilon}} 2^{(k-1)n} a = C m(B_1) + C a \sum_{k=1}^\infty \frac{1}{2^{(k-1)\varepsilon}}.
> \end{aligned}
> $$

**理由：** 按统一的第一环及内半径修复积分计算，系数和体积指数共同减一，最后几何级数仍因epsilon正而收敛。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> 那么 $f$ 是 Lebesgue 可测的并且其 Lebesgue 积分恰为其 Riemann 积分。

**修正：**

> 那么 $f$ 在 Lebesgue 测度的完备化上可测并且其 Lebesgue 积分恰为其 Riemann 积分。本定理中的 Lebesgue 可测性及积分均在该完备化上理解。

**理由：** Riemann可积函数可能在一个不可数零测集合任意取值而非Borel可测；本页前文只构造Borel测度，源次页已指出要用完备性，此处必须明确使用完备化。

**原文：**

> 我们现在用 Borel-可测的简单函数来代替 Darboux 上下和：

**修正：**

> 我们现在用 Borel-可测的简单函数来代替 Darboux 上下和：令 $I_k=[x_{k-1},x_k)$（$k<n$），$I_n=[x_{n-1},x_n]$，使各 $I_k$ 两两不交。

**理由：** 闭区间示性函数在分点重复计数，导致上下函数不夹住f且逐点单调性错误；改用不交半开区间并保留终点b，积分与Darboux和不变。

**原文：**

> $$
> \overline{F}_{\mathcal{J}}(x) = \sum_{k=1}^n M_k \mathbf{1}_{[x_{k-1}, x_k]}, \quad \underline{F}_{\mathcal{J}}(x) = \sum_{k=1}^n m_k \mathbf{1}_{[x_{k-1}, x_k]}.
> $$

**修正：**

> $$
> \overline F_{\mathcal J}(x)=\sum_{k=1}^nM_k\mathbf1_{I_k}(x),\quad\underline F_{\mathcal J}(x)=\sum_{k=1}^nm_k\mathbf1_{I_k}(x).
> $$

**理由：** 上下和使用不交分划的示性函数，避免分点有两个区间时重复两次f值，保证全点上下界和单调性。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> 根据 Beppo Levi 定理，我们就有

**修正：**

> 上下函数一致有界，可先加减常数化为非负上升列：对下函数应用 Beppo Levi，对上函数用常数减去它后应用 Beppo Levi。于是

**理由：** Beppo Levi仅直接适用于非负上升列，上函数下降且f可取负值；一致有界和有限区间测度允许加常数、以常数减上函数来准确调用定理。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 由于上F=下F≥0

**正文：**

> $\overline{F} - \underline{F} \geqslant 0$

**理由：** 原图此处用等号替代两函数差，canonical正确使用非负差推积分零，保持正确表达。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> 这里的“函数”的取值可以取 $\pm\infty$ 或者 $\sqrt{-1} \times \pm\infty$。

**修正：**

> 非负积分的定义允许 $+\infty$ 值；可积的扩展值函数只可能在零测集上取无穷值。为使这里的 $\mathcal L^1$ 具有处处定义的线性运算，先在这些零测集上置零，取处处有限的复值代表。这样的修改不改变后面的 $L^1$ 等价类与积分。

**理由：** 若允许原函数在零测点取正负无穷，则点态相加可能产生无穷减无穷而非线性空间。可积性保证无穷值仅在零测集，先置零取有限代表后线性空间及商空间严格成立。

**原文：**

> $$|\alpha f(x)| + |\beta g(x)| \leqslant |\alpha||f(x)| + |\beta||g(x)|,$$

**修正：**

> $$|\alpha f(x)+\beta g(x)|\leqslant |\alpha||f(x)| + |\beta||g(x)|,$$

**理由：** 证明线性组合可积需要三角不等式控制组合的绝对值，原左式只是右式的恒等分拆，未对组合函数给出上界。

**原文：**

> $f = 0$ 当且仅当 $\int_X |f|d\mu = 0$

**修正：**

> $[f]=0$ 当且仅当 $\int_X|f|\,d\mu=0$

**理由：** 原f作为函数可在非空零测集上非零，积分零只能推出商空间等价类零，不能推出处处零函数。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> $$\int_X -f d\mu = \int_X f_- d\mu - \int_X f_+ d\mu = -\left( \int_X f_- d\mu - \int_X f_+ d\mu \right) = -\int_X f d\mu.$$

**修正：**

> $$\int_X -f d\mu = \int_X f_- d\mu - \int_X f_+ d\mu = -\left(\int_X f_+\,d\mu-\int_X f_-\,d\mu\right) = -\int_X f d\mu.$$

**理由：** 负号后括号应为f自身积分的正部减负部，原括号顺序反过来导致两次负号恢复正积分。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ∫f=∫f+−∫f−=−(∫f−−∫f+)=−∫f

**正文：**

> $$\int_X -f d\mu = \int_X f_- d\mu - \int_X f_+ d\mu = -\left(\int_X f_+\,d\mu-\int_X f_-\,d\mu\right) = -\int_X f d\mu.$$

**理由：** 原图开头漏负号且正负部方向错误，canonical已正确采用负函数与负部减正部，保留该规范化；剩余括号方向另修。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> $A \cap Y \subset \mathcal{A}|_Y$

**修正：**

> $A\cap Y\in\mathcal A|_Y$

**理由：** 限制sigma代数以子空间中的集合为元素，交集是成员而非这族集合的子族。

**原文：**

> 当 $X = \mathbb{R}^n$, $Y$ 是子流形时

**修正：**

> 当 $X=\mathbb R^n$ 且 $\mu$ 为 Lebesgue 测度，$Y$ 是子流形时

**理由：** 余维正的子流形对Lebesgue测度为零，对任意测度如Dirac未必为零；需要明确该注记的测度假设。

**原文：**

> 几乎处处收敛到函数 $f$

**修正：**

> 几乎处处收敛到可测函数 $f$

**理由：** 非完备测度空间中只在零集外定义极限并不能确保任意补值f可测，DCT被积函数需要可测，或须声明空间完备；添加可测前提更局部且符合先前课程约定。

**原文：**

> 证明: 我们要应用 Beppo Levi 定理。首先, 定义正函数序列

**修正：**

> 证明: 我们要应用 Beppo Levi 定理。先在零测集 $N\cup\bigcup_iN_i\cup\{h<0\}$ 上把 $f_i,f,h$ 全部置零；取处处有限的可积控制函数代表，这不改变各积分。于是所有点上都有 $|f_i|\leqslant h$、$|f|\leqslant h$，且 $f_i\to f$。首先, 定义正函数序列

**理由：** 原构造gi仅在公共例外集之外非负，不能直接把它作为全空间正函数用BeppoLevi；可测零集上统一置零并取有限控制代表后每点比较与收敛成立且积分不变。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> a,b∈L1

**正文：**

> $f, g \in L^1(X, \mathcal{A}, \mu)$

**理由：** 原范数证明把函数f、g误写为标量a、b，canonical已正确采用函数变量，保持正确参数。

[相关正文：42：Lebesgue 积分与控制收敛定理](../../02-math-analysis-ii/42-dominated-convergence.md)

## 数学修正

**原文：**

> 在 $X - N \cup \bigcup_{i \geqslant 1} N_i$ 上

**修正：**

> 在 $X-\left(N\cup\bigcup_{i\geqslant1}N_i\right)$ 上

**理由：** 应在全部例外集合之并的补集上应用控制与收敛，原无括号表达可能把Ni再并回有效域。
