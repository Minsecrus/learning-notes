# 勘误：78 紧算子谱理论与 Laplace 算子

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$
> \lambda_1 := \sup_{u \in H - \{0\}} |R(u)|.
> $$

**修正：**

> $$
> r_1 := \sup_{u \in H - \{0\}} |R(u)|.
> $$

**理由：** 原图把非负sup|R|当成带符号特征值；一维A=-Id反驳。定义r_1分离非负极值和带符号lambda_1，和910绝对值排序一致，须整组共同应用。

**原文：**

> 上述极值 $\lambda_1$ 可以被实现, 即存在 $u \in H$, $\|u\| = 1$, 使得 $R(u) = \lambda_1$。

**修正：**

> 上述极值 $r_1$ 可以被实现, 即存在 $u \in H$, $\|u\| = 1$, 使得 $|R(u)| = r_1$。

**理由：** A=-Id的R恒为-1，sup|R|=1，原图结论错误。910按绝对值排序确定绝对极值意图；不能只删sup绝对值，负定无限维紧算子的sup R=0可能不达到。

**原文：**

> $$
> \lim_{k \to \infty} |(A(u_k), u_k)| \to \lambda_1.
> $$

**修正：**

> $$
> \lim_{k \to \infty} |(A(u_k), u_k)| = r_1.
> $$

**理由：** 原图已经取绝对值极大化点列，改成r_1并用等号标记极限值，保留原点列。

**原文：**

> 所以, $(A(u_k), u_k) \to (A(u), u)$, 从而, $(Au, u) = \lambda_1$ (此时, 我们证明了更强的结论: $(A(u_k), u_k) \to \lambda_1$)。特别地, 因为 $\lambda_1 \neq 0$ (否则 $A = 0$ 就没什么可说的了), 所以 $u \neq 0$。

**修正：**

> 所以, $(A(u_k), u_k) \to (A(u), u)$, 从而, $|(Au, u)| = r_1$ (此时, 我们证明了更强的结论: $(A(u_k), u_k) \to (A(u), u)$)。特别地, 因为 $r_1 \neq 0$ (否则 $A = 0$ 就没什么可说的了), 所以 $u \neq 0$。

**理由：** 紧性与弱收敛给带符号内积极限(Au,u)，只有其绝对值等于r_1；原图把极限取正被A=-Id反驳。保留已证极限，并使非零条件绑定r_1。

**原文：**

> 所以,
> $$
> R(u) \geqslant \lambda_1.
> $$

**修正：**

> 所以,
> $$
> |R(u)| \geqslant r_1.
> $$

**理由：** 由|(Au,u)|=r_1和0<||u||<=1，唯一能推出的是|R(u)|>=r_1，负极值不能推出原不等式。

**原文：**

> 根据 $\lambda_1$ 的定义, 我们必然有
> $$
> R(u) = \lambda_1.
> $$

**修正：**

> 根据 $r_1$ 的定义, 我们必然有
> $$
> |R(u)| = r_1.
> $$
> 特别地, $\|u\|=1$。

**理由：** 由上确界得到|R(u)|=r_1；再由|(Au,u)|=r_1>0得到r_1/||u||²=r_1，故||u||=1，正是原引理已有结论，仅补其必要归一化结论。

**原文：**

> **注记**. 我们证明了更强的结论: $R(u) = \lambda_1$。

**修正：**

> **注记**. 取 $\lambda_1:=R(u)$, 则 $|\lambda_1|=r_1$。

**理由：** 原图注记重复正极值结论；修成必要带符号定义，使负极值对应负特征值，并让909和910使用同一个lambda_1。

**原文：**

> 5) 假设 $A$ 是紧自伴算子, $u_1 \in H - \{0\}$ 使得 $R(u_1) = \lambda_1$, 那么, $A u_1 = \lambda_1 u_1$, 即 $\lambda_1$ 是 $A$ 的最大特征值。

**修正：**

> 5) 假设 $A$ 是紧自伴算子, $u_1 \in H - \{0\}$ 使得 $|R(u_1)| = r_1$, 并令 $\lambda_1=R(u_1)$, 那么, $A u_1 = \lambda_1 u_1$, 即 $\lambda_1$ 是 $A$ 的绝对值最大的特征值。

**理由：** A=-Id说明非负sup绝对值不能直接作特征值。选绝对极值处的带符号R值，正是910按|lambda_k|递减所要求的结论。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2(Au, v)\varepsilon + O(\varepsilon^2)}{(u, u) + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= \frac{\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2)}{1 + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= (\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2))(1 - 2(u, v)\varepsilon + O(\varepsilon^2)) \\
> &= \lambda_1 + 2(Au - \lambda_1 u, v)\varepsilon + O(\varepsilon^2).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{(u, u) + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= \frac{\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{1 + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= (\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2))(1 - 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)) \\
> &= \lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au - \lambda_1 u, v)) + O(|\varepsilon|^2).
> \end{aligned}
> $$

**理由：** 907原图确定第一变量线性、第二变量共轭线性。复epsilon交叉项为2Re(bar(epsilon)(Au,v))，分母同理，余项为O(|epsilon|²)。保留原逐行代数展开，须与其余行及后续反证联动。

**原文：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2(Au, v)\varepsilon + O(\varepsilon^2)}{(u, u) + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= \frac{\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2)}{1 + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= (\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2))(1 - 2(u, v)\varepsilon + O(\varepsilon^2)) \\
> &= \lambda_1 + 2(Au - \lambda_1 u, v)\varepsilon + O(\varepsilon^2).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{(u, u) + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= \frac{\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{1 + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= (\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2))(1 - 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)) \\
> &= \lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au - \lambda_1 u, v)) + O(|\varepsilon|^2).
> \end{aligned}
> $$

**理由：** 907原图确定第一变量线性、第二变量共轭线性。复epsilon交叉项为2Re(bar(epsilon)(Au,v))，分母同理，余项为O(|epsilon|²)。保留原逐行代数展开，须与其余行及后续反证联动。

**原文：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2(Au, v)\varepsilon + O(\varepsilon^2)}{(u, u) + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= \frac{\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2)}{1 + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= (\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2))(1 - 2(u, v)\varepsilon + O(\varepsilon^2)) \\
> &= \lambda_1 + 2(Au - \lambda_1 u, v)\varepsilon + O(\varepsilon^2).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{(u, u) + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= \frac{\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{1 + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= (\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2))(1 - 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)) \\
> &= \lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au - \lambda_1 u, v)) + O(|\varepsilon|^2).
> \end{aligned}
> $$

**理由：** 907原图确定第一变量线性、第二变量共轭线性。复epsilon交叉项为2Re(bar(epsilon)(Au,v))，分母同理，余项为O(|epsilon|²)。保留原逐行代数展开，须与其余行及后续反证联动。

**原文：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2(Au, v)\varepsilon + O(\varepsilon^2)}{(u, u) + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= \frac{\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2)}{1 + 2(u, v)\varepsilon + O(\varepsilon^2)} \\
> &= (\lambda_1 + 2(Au, v)\varepsilon + O(\varepsilon^2))(1 - 2(u, v)\varepsilon + O(\varepsilon^2)) \\
> &= \lambda_1 + 2(Au - \lambda_1 u, v)\varepsilon + O(\varepsilon^2).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> R(u + \varepsilon v) &= \frac{(A(u + \varepsilon v), u + \varepsilon v)}{(u + \varepsilon v, u + \varepsilon v)} \\
> &\overset{A=A^*}{=} \frac{(Au, u) + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{(u, u) + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= \frac{\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2)}{1 + 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)} \\
> &= (\lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au, v)) + O(|\varepsilon|^2))(1 - 2\operatorname{Re}(\overline{\varepsilon}(u, v)) + O(|\varepsilon|^2)) \\
> &= \lambda_1 + 2\operatorname{Re}(\overline{\varepsilon}(Au - \lambda_1 u, v)) + O(|\varepsilon|^2).
> \end{aligned}
> $$

**理由：** 907原图确定第一变量线性、第二变量共轭线性。复epsilon交叉项为2Re(bar(epsilon)(Au,v))，分母同理，余项为O(|epsilon|²)。保留原逐行代数展开，须与其余行及后续反证联动。

**原文：**

> 由于 $R(u_1)$ 是最大值, 如果 $a = (Au - \lambda_1 u, v) \neq 0$, 我们总可以选取很小的 $\varepsilon = \delta \cdot \bar{a}$, 其中 $\delta > 0$ 足够小, 使得 $|R(u + \varepsilon v) > \lambda_1|$, 这与 $\lambda_1$ 的定义矛盾。所以, 对任意的 $v$, 我们都有

**修正：**

> 由于 $|R(u)|=r_1$ 是 $|R|$ 的最大值, 若 $r_1=0$ 则 $A=0$, 结论显然。否则令 $s=\operatorname{sgn}(\lambda_1)$。如果 $a = (Au - \lambda_1 u, v) \neq 0$, 取 $\varepsilon = \delta s a$, 其中 $\delta > 0$ 足够小, 则 $sR(u+\varepsilon v)=r_1+2\delta|a|^2+O(\delta^2)>r_1$, 从而 $|R(u+\varepsilon v)|>r_1$, 这与 $r_1$ 的定义矛盾。所以, 对任意的 $v$, 我们都有

**理由：** epsilon=delta*s*a给Re(bar(epsilon)*a)=delta*s*|a|²，故sR=r_1+2delta|a|²+O(delta²)>r_1，从而|R|>r_1，正负极值统一得到a=0。保留原有a非零、选epsilon、极值矛盾三个步骤；零情形沿用908的A=0。该段也修正canonical绝对值括号误置于不等式外的录入错误。

**原文：**

> 我们不妨假设 $\|u\| = 1$ (否则除以一个系数)。

**修正：**

> 我们令 $u=u_1/\|u_1\|$, 从而 $\|u\|=1$ (即除以归一化系数)。

**理由：** 原图908先选取极值点u_1，909直接改用u而未交代；R在非零数倍下不变。明确u为u_1的单位化，后续Au-lambda_1u与前页极值点一致，和signed-Rayleigh组共同应用。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> 令 $\lambda_2$ 为 $R$ 在 $H_2$ 上的最大值

**修正：**

> 在 $H_2 - \{0\}$ 上选取使 $|R|$ 取到最大值的点, 并令 $\lambda_2$ 为该点处 $R$ 的取值

**理由：** 原图后文明确按|lambda_1|>=|lambda_2|>=...排序，须每次取绝对极值处的带符号R值，不能只取R的最大值。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \chi(x)f(x) &= \chi(x) \sum_{k \in \mathbb{Z}^n} c_k e^{ik \cdot x} \\
> &= \chi(x) \sum_{k \in \mathbb{Z}^n} \left( \frac{1}{(2\pi)^n} \int_{(0,2\pi)^n} f(y)e^{-ik \cdot y} dy \right) e^{ik \cdot x} \\
> &= \underbrace{\sum_{|k| \leqslant N} c_k \chi(x) e^{ik \cdot x}}_{= T_{\chi, N}(f)} + \underbrace{\chi(x) \sum_{|k| \geqslant N} c_k e^{ik \cdot x}}_{= R_{\chi, N}(f)}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \chi(x)f(x) &= \chi(x) \sum_{k \in \mathbb{Z}^n} c_k e^{ik \cdot x} \\
> &= \chi(x) \sum_{k \in \mathbb{Z}^n} \left( \frac{1}{(2\pi)^n} \int_{(0,2\pi)^n} f(y)e^{-ik \cdot y} dy \right) e^{ik \cdot x} \\
> &= \underbrace{\sum_{|k| \leqslant N} c_k \chi(x) e^{ik \cdot x}}_{= T_{\chi, N}(f)} + \underbrace{\chi(x) \sum_{|k| > N} c_k e^{ik \cdot x}}_{= R_{\chi, N}(f)}.
> \end{aligned}$$

**理由：** 原图前项|k|≤N，尾项也含|k|=N，重复频率使分解恒等式错误。保留前项≤N，将尾项统一改>N。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$R_{\chi, N} : H^1(\mathbb{R}^n) \to L^2(\mathbb{R}^n), \quad f(x) \mapsto \chi(x) \sum_{|k| \geqslant N} c_k e^{ik \cdot x}.$$

**修正：**

> $$R_{\chi, N} : H^1(\mathbb{R}^n) \to L^2(\mathbb{R}^n), \quad f(x) \mapsto \chi(x) \sum_{|k| > N} c_k e^{ik \cdot x}.$$

**理由：** 定义须与911保留前项|k|≤N一致，尾项仅|k|>N，避免重复边界频率。

**原文：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| \geqslant N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^{2n})} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| \geqslant N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| > N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^n)} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| > N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**理由：** 尾项估计对象须与定义同为|k|>N；原图≥N沿袭了前页重复频率。

**原文：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| \geqslant N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^{2n})} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| \geqslant N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| > N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^n)} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| > N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**理由：** 有限秩部分保留|k|≤N，余项的加权和也须仅|k|>N。

**原文：**

> $\{e^{ik \cdot x}\}_{|k| \leqslant N}$

**修正：**

> $\{\chi(x)e^{ik \cdot x}\}_{|k| \leqslant N}$

**理由：** 原图遗漏χ；本页定义的有限秩算子像由χe^{ik·x}张成，一般χ不是常数，不能说落在裸指数函数的张成空间。

**原文：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| \geqslant N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^{2n})} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| \geqslant N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| > N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^n)} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| > N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**理由：** 原图印2n，但f、频率k及积分域均为n维立方体；只纠正范数域维数。

**原文：**

> $$((-\Delta)^{-1}f_1, f_2) = (u_1, \Delta u_2) = -(\nabla u_1, \nabla u_2),$$

**修正：**

> $$((-\Delta)^{-1}f_1, f_2) = (u_1, -\Delta u_2) = (\nabla u_1, \nabla u_2),$$

**理由：** u_2=(-Δ)^-1f_2意味着f_2=-Δu_2，分部积分给正梯度内积；原图两处负号错且与913正算子结论矛盾。须同913镜像等式一起修。

## 未决数学问题

**原文：**

> $$\begin{aligned}
> \|R_{\chi, N}(f)\|^2_{L^2(\mathbb{R}^n)} &\leqslant \left\| \sum_{|k| \geqslant N} c_k e^{ik \cdot x} \right\|^2_{L^2((0,2\pi)^{2n})} \\
> &\leqslant \frac{1}{N^2} \sum_{|k| \geqslant N} |k|^2 |c_k|^2 \\
> &\leqslant \frac{1}{N^2} \|\nabla f\|_{L^2}.
> \end{aligned}$$

**问题：** 原图平方范数上界遗漏平方，Parseval常数(2π)^n，χ也未声明0≤χ≤1；更根本地911系数取一般f在立方体上的Fourier展开，f未具有周期匹配边界，不能直接用∇f控制Σ|k|²|c_k|²。n=1取f在[0,2π]等于x则跳跃周期延拓系数~1/k，加权和发散。可先取ψ∈C0∞立方体且ψ=1于suppχ，把系数改为ψf，最终估计≤C/N²||f||H¹²；也可将中间域限制为Ω零延拓的像。原作者意图无法唯一确定，整段留具体证明缺口，先不猜写新证明。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$(f_1, (-\Delta)^{-1}f_2) = -(\nabla u_1, \nabla u_2).$$

**修正：**

> $$(f_1, (-\Delta)^{-1}f_2) = (\nabla u_1, \nabla u_2).$$

**理由：** f_1=-Δu_1且u_j零边界，分部积分所得梯度内积为正；与912自伴性正号配套，并与同页正算子一致。

**原文：**

> 根据 Dirichlet 问题的解，我们知道 $\varphi_k \in L^2(\Omega)$

**修正：**

> 根据 Dirichlet 问题的解，我们知道 $\varphi_k \in H^1_0(\Omega)$

**理由：** 本页原图重复L²而未表达由Dirichlet逆算子得到的正则性；φ_k=λ_k(-Δ)^-1φ_k，逆算子像为H0¹，紧接定理526也明确该空间。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \sin(\frac{\pi i}{d}k_j x_j)
> ```

**正文：**

> $$\left\{ \prod_{j=1}^n \sin\left(\frac{\pi}{d} k_j \cdot x_j\right) \right\}_{k_1, \cdots, k_n \in (\mathbb{Z}_{\geqslant 1})^n}$$

**理由：** 原图多维产品、Laplace等式和正交积分全含πi，canonical已去除i。若保留i则sin(iπk)=i sinh(πk)边界不为零，且-Δ特征值为负；一维前半页和915目标H0¹唯一确定实正弦。保留canonical正确公式。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$
> \varphi_k = \prod_{j=1}^n \sin \left( \frac{\pi i}{d} k_j \cdot x_j \right),
> $$

**修正：**

> $$
> \varphi_k = \prod_{j=1}^n \sin \left( \frac{\pi}{d} k_j \cdot x_j \right),
> $$

**理由：** 原图正弦参数多出i，sin(iπk)在端点不为0，不能属于H0¹；914一维计算和正特征值公式确定参数为πk/d。六处同组修正。

**原文：**

> 对每个 $j$, $\sin \left( \frac{\pi i}{d} k_j \cdot x \right) \in H_0^1((0,d))$

**修正：**

> 对每个 $j$, $\sin \left( \frac{\pi}{d} k_j \cdot x \right) \in H_0^1((0,d))$

**理由：** 原图正弦参数多出i，sin(iπk)在端点不为0，不能属于H0¹；914一维计算和正特征值公式确定参数为πk/d。六处同组修正。

**原文：**

> $$
> \lim_{p \to \infty} \left\| \varphi_j^{(p)}(x) - \sin \left( \frac{\pi i}{d} k_j \cdot x \right) \right\|_{H^1} = 0.
> $$

**修正：**

> $$
> \lim_{p \to \infty} \left\| \varphi_j^{(p)}(x) - \sin \left( \frac{\pi}{d} k_j \cdot x \right) \right\|_{H^1} = 0.
> $$

**理由：** 原图正弦参数多出i，sin(iπk)在端点不为0，不能属于H0¹；914一维计算和正特征值公式确定参数为πk/d。六处同组修正。

**原文：**

> $$
> \left\| \prod_{j=1}^n \varphi_j^{(p)}(x_j) - \prod_{j=1}^n \sin \left( \frac{\pi i}{d} k_j \cdot x_j \right) \right\|_{H^1}^2 = \prod_{j=1}^n \left\| \varphi_j^{(p)} - \sin \left( \frac{\pi i}{d} k_j \cdot x_j \right) \right\|_{H_0^1}^2 \to 0.
> $$

**修正：**

> $$
> \left\| \prod_{j=1}^n \varphi_j^{(p)}(x_j) - \prod_{j=1}^n \sin \left( \frac{\pi}{d} k_j \cdot x_j \right) \right\|_{H^1}^2 \leqslant C \sum_{j=1}^n \left\| \varphi_j^{(p)} - \sin \left( \frac{\pi}{d} k_j \cdot x_j \right) \right\|_{H_0^1}^2 \to 0.
> $$

**理由：** 原图正弦参数多出i，sin(iπk)在端点不为0，不能属于H0¹；914一维计算和正特征值公式确定参数为πk/d。六处同组修正。

**原文：**

> $$
> \left\| \prod_{j=1}^n \varphi_j^{(p)}(x_j) - \prod_{j=1}^n \sin \left( \frac{\pi i}{d} k_j \cdot x_j \right) \right\|_{H^1}^2 = \prod_{j=1}^n \left\| \varphi_j^{(p)} - \sin \left( \frac{\pi i}{d} k_j \cdot x_j \right) \right\|_{H_0^1}^2 \to 0.
> $$

**修正：**

> $$
> \left\| \prod_{j=1}^n \varphi_j^{(p)}(x_j) - \prod_{j=1}^n \sin \left( \frac{\pi}{d} k_j \cdot x_j \right) \right\|_{H^1}^2 \leqslant C \sum_{j=1}^n \left\| \varphi_j^{(p)} - \sin \left( \frac{\pi}{d} k_j \cdot x_j \right) \right\|_{H_0^1}^2 \to 0.
> $$

**理由：** 原图把积之差的H¹范数错等同误差范数之积（任一因子误差0会使右端0但左端可非0）。用积之差的望远镜展开与各单变量逼近H¹有界性得到≤C·误差平方和，C可独立于p；保留原有趋零结论并同参数去i联动。

**原文：**

> 构成 $L^2$ 的 Hilbert 基

**修正：**

> 归一化后构成 $L^2$ 的 Hilbert 基

**理由：** 产品正弦L²范数=(d/2)^{n/2}，一般不为1；Hilbert基要求正交单位化。只澄清按常数归一化后成为Hilbert基，保持原φ_k和其边界逼近。

**原文：**

> $$
> \Psi(\lambda) = \left| \{ \lambda_k \mid \lambda_k \leqslant \lambda \} \right|.
> $$

**修正：**

> $$
> \Psi(\lambda) = \left| \{ k \geqslant 1 \mid \lambda_k \leqslant \lambda \} \right|.
> $$

**理由：** 原图以特征值的集合计数会去除重复特征值；后面格点数和916 λ2=λ3等均要求按重数计数，因此改为指标k的集合。

**原文：**

> 按照定义, $\Psi(\lambda_k) = k$

**修正：**

> 按上述渐近式, $\Psi(\lambda_k) \sim k$ ($k\to\infty$)

**理由：** 有重数时原等号错误，例如n≥2时Ψ(λ2)至少n+1而非2；既有格点渐近给N((1-ε)λk)<k≤N(λk)，由ε→0挤压可得N(λk)∼k，正是下一行所需。

**原文：**

> $c_n$ 是只依赖于维数的常数

**修正：**

> $c_n$ 是依赖于维数和边长 $d$ 的常数

**理由：** 同页明确c_n=|B_n(1)|d^n/(2π)^n，故原称仅依赖维数遗漏边长d；仅纠正参数依赖。

[相关正文：78：紧算子谱理论与 Laplace 算子](../../03-math-analysis-iii/78-spectral-decomposition.md)

## 数学修正

**原文：**

> $$
> \lambda_k \sim \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |\Omega|^{\frac{2}{n}}} k^{\frac{2}{n}}, \quad \lambda \to \infty.
> $$

**修正：**

> $$
> \lambda_k \sim \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |\Omega|^{\frac{2}{n}}} k^{\frac{2}{n}}, \quad k \to \infty.
> $$

**理由：** 原图限变量印λ，但前文明确研究按k编号的λ_k序列渐近，故应写k趋于无穷。分母|B_n(1)|^{2/n}|Ω|^{2/n}和外层分式的闭括号均保留，原分式结构本来完整。
