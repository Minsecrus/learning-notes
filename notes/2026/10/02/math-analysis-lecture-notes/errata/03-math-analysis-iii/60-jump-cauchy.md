# 勘误：60 跳跃公式、Cauchy 积分与单位分解

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> 0 = -\langle u, \psi' \rangle &= -\left\langle u, \varphi(x) - \left( \int_{\mathbb{R}} \varphi(y)dy \right) \chi(x) \right\rangle \\
> &= \langle u, \varphi \rangle - c \int_{\mathbb{R}} \varphi(x)dx.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> 0 = -\langle u, \psi' \rangle &= -\left\langle u, \varphi(x) - \left( \int_{\mathbb{R}} \varphi(y)dy \right) \chi(x) \right\rangle \\
> &= -\langle u, \varphi \rangle + c \int_{\mathbb{R}} \varphi(x)dx.
> \end{aligned}$$

**理由：** 源图展开负配对时丢负号；线性展开−〈u,φ−(∫φ)χ〉为−〈u,φ〉+c∫φ。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> 连续微的

**修正：**

> 连续可微的

**理由：** 源图缺可字，C1意为连续可微。；已逐页核对原图，所改片段由上下文唯一确定。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> 我就成称

**修正：**

> 我们就称

**理由：** 源图定义402误字。；已逐页核对原图，所改片段由上下文唯一确定。

**原文：**

> 我们另它为

**修正：**

> 我们令它为

**理由：** 源图另为令的笔误。；已逐页核对原图，所改片段由上下文唯一确定。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> 方程的的的基本解

**修正：**

> 方程的基本解

**理由：** 源图只一个的，转录重复。；已逐页核对原图，所改片段由上下文唯一确定。

**原文：**

> 证明留作的作业

**修正：**

> 证明留作作业

**理由：** 源图留作作业，转录多的。；已逐页核对原图，所改片段由上下文唯一确定。

**原文：**

> $$\lim_{p \to} f_p|_K \overset{L^1(K)}{=} f|_K,$$

**修正：**

> $$\lim_{p \to \infty} f_p|_K \overset{L^1(K)}{=} f|_K,$$

**理由：** 源图序列极限箭头后漏∞，上下文p≥1序列收敛唯一确定p→∞。

**原文：**

> $$\lim_{p \to} f_p \overset{\mathcal{D}'}{=} f.$$

**修正：**

> $$\lim_{p \to \infty} f_p \overset{\mathcal{D}'}{=} f.$$

**理由：** 源图序列极限箭头后漏∞，上下文p≥1序列收敛唯一确定p→∞。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ∂f/∂x=a=∂g/∂y=0，∂g/∂x=b=−∂f/∂y=0

**正文：**

> $$\frac{\partial f}{\partial x} = a = \frac{\partial g}{\partial y}, \quad \frac{\partial g}{\partial x} = b = -\frac{\partial f}{\partial y}.$$

**理由：** 源图不当额外=0会强迫导数零；canonical已正确删去，CR只要求对应偏导相等。

**原讲义片段：**

> z ↦ 1/2

**正文：**

> $$\mathbb{C} - \{0\}, \quad z \mapsto \frac{1}{z}.$$

**理由：** 源图函数z→1/2，后文明确为1/z且导数为δ的Cauchy基本解；canonical已正确。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> $$\lim_{p \to} u_p \overset{\mathcal{D}'}{=} u.$$

**修正：**

> $$\lim_{p \to \infty} u_p \overset{\mathcal{D}'}{=} u.$$

**理由：** 源图序列极限箭头后漏∞，上下文p≥1序列收敛唯一确定p→∞。

**原文：**

> $$\lim_{p \to} \partial^\alpha u_p \overset{\mathcal{D}'}{=} \partial^\alpha u.$$

**修正：**

> $$\lim_{p \to \infty} \partial^\alpha u_p \overset{\mathcal{D}'}{=} \partial^\alpha u.$$

**理由：** 源图序列极限箭头后漏∞，上下文p≥1序列收敛唯一确定p→∞。

**原文：**

> $$\begin{aligned}
> \bar{\partial} f_\varepsilon(z) &= \frac{1}{\pi \varepsilon^2} \cdot \mathbf{1}_{|z|\leqslant \varepsilon}(z) - \frac{\bar{z}}{\pi \varepsilon^2} \cdot d\sigma_{|z|=\varepsilon} + \frac{1}{\pi z} \cdot d\sigma_{|z|=\varepsilon} \\
> &= \frac{1}{\pi \varepsilon^2} \cdot \mathbf{1}_{|z|\leqslant \varepsilon}(z).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \bar{\partial} f_\varepsilon(z) &= \frac{1}{\pi \varepsilon^2} \cdot \mathbf{1}_{|z|\leqslant \varepsilon}(z) - \frac{\bar{z}}{\pi \varepsilon^2} \cdot \frac{z}{2\varepsilon} d\sigma_{|z|=\varepsilon} + \frac{1}{\pi z} \cdot \frac{z}{2\varepsilon} d\sigma_{|z|=\varepsilon} \\
> &= \frac{1}{\pi \varepsilon^2} \cdot \mathbf{1}_{|z|\leqslant \varepsilon}(z).
> \end{aligned}$$

**理由：** 源图Stokes边界项漏复法向因子：圆盘外法向νx+iνy=z/ε，bar∂指示函数=−z/(2ε)dσ；圆外符号相反。两个边界系数相等仍相消。

**原文：**

> Stoke 公式

**修正：**

> Stokes 公式

**理由：** 源图人名漏s。；已逐页核对原图，所改片段由上下文唯一确定。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> $$\int_\gamma F(z) d\sigma = \int_\gamma F(\gamma(s)) |\gamma'(s)| ds.$$

**修正：**

> $$\int_\gamma F(z) d\sigma = \int_0^a F(\gamma(s)) |\gamma'(s)| ds.$$

**理由：** 源图参数积分的积分域应为s∈[0,a]；γ已经作为被参数化的曲线。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> h(1/ε)

**正文：**

> $$\frac{1}{\varepsilon^2} h\left(\frac{z}{\varepsilon}\right), \quad h(z) = \frac{1}{\pi} \mathbf{1}_{|z|\leqslant 1}(z),$$

**理由：** 源图缩放参数缺z；核的支集要缩至|z|≤ε，canonical已正确。

## 未决数学问题

**原文：**

> $\gamma : (t_{k-1}, t_k) \to \mathbb{C}$ 是 $C^1$ 的

**问题：** 源图仅要求分段开区间上C1和整曲线连续，无法保证有限长度或端点导数可积，例如s sin(1/s²)在0附近可有无限变差。通常分段C1要求每一闭段C1延拓；是否约定此含义未明，不能悄改定义。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \frac{1}{2\pi i} \int_{|z|=r_0} z^k dz &= \frac{1}{2\pi i} \int_0^{2\pi} (r_0)^k e^{i k \vartheta} (-r_0 \sin\vartheta + r_0 i \cos\vartheta) d\vartheta \\
> &= \frac{1}{2\pi} \int_0^{2\pi} (r_0)^{k+1} e^{i(k\vartheta+1)} d\vartheta \\
> &= \begin{cases} 1, & k = -1; \\ 0, & k \neq -1. \end{cases}
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \frac{1}{2\pi i} \int_{|z|=r_0} z^k dz &= \frac{1}{2\pi i} \int_0^{2\pi} (r_0)^k e^{i k \vartheta} (-r_0 \sin\vartheta + r_0 i \cos\vartheta) d\vartheta \\
> &= \frac{1}{2\pi} \int_0^{2\pi} (r_0)^{k+1} e^{i(k+1)\vartheta} d\vartheta \\
> &= \begin{cases} 1, & k = -1; \\ 0, & k \neq -1. \end{cases}
> \end{aligned}$$

**理由：** 源图指数笔误；z^k dz=r^(k+1)i exp(i(k+1)θ)dθ，k=−1时指数应为0。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> z∈Z

**正文：**

> $$\frac{1}{2\pi i} \int_{|z|=r_0} z^k dz, \quad k \in \mathbb{Z}, r_0 > 0.$$

**理由：** 源图示例整指数变量印成z，canonical已按z^k正确写k。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> 小领域中的试验函数

**修正：**

> 小邻域中的试验函数

**理由：** 源图领域系邻域的误字；此处要求θ支集位于z0的小邻域。

**原文：**

> 要求在 $\theta$ 在

**修正：**

> 要求 $\theta$ 在

**理由：** 源图要求在θ在重复介词，使句法残缺，应删除第一个在。

**原文：**

> Leibiniz

**修正：**

> Leibniz

**理由：** 源图乘积求导公式人名误拼；结合上下文可唯一确定为Leibniz。

**原文：**

> $K \subset V \subset U$

**修正：**

> $K \subset V \subset \Omega$

**理由：** 源图引理407的U未定义；已给定开集Ω，V必须是Ω内包含K的开邻域。

**原文：**

> $0 \leqslant \varphi_i(x) \leqslant 1$

**修正：**

> $0 \leqslant \varphi(x) \leqslant 1$

**理由：** 源图引理407只有单一函数φ，无φ_i，故删除下标i。

[相关正文：60：跳跃公式、Cauchy 积分与单位分解](../../03-math-analysis-iii/60-jump-cauchy.md)

## 数学修正

**原文：**

> 可以选去

**修正：**

> 可以选取

**理由：** 源图去为取的笔误；该句在选取正的δ。

**原文：**

> $$
> K_{3\delta} = \{x \in \mathbb{R}^n \mid |x - k| < 2\delta, \text{对任意的 } k \in K\} \subset U.
> $$

**修正：**

> $$
> K_{3\delta} = \{x \in \mathbb{R}^n \mid |x - k| < 3\delta, \text{存在 } k \in K\} \subset \Omega.
> $$

**理由：** 源图K3δ错误定义为对所有k的2δ球交，无法包含任意K；所需为距离K小于3δ的开邻域，且U应为引理Ω。

**原文：**

> $K_i \subset V \subset U$

**修正：**

> $K_i \subset V_i \subset U_i$

**理由：** 源图逐个应用引理后遗漏V、U下标，具体开集分别为Vi、Ui。

## 未决数学问题

**原文：**

> $$
> \chi_i(x) = \frac{\varphi_i(x)}{\varphi_1(x) + \cdots + \varphi_N(x)}
> $$

**问题：** 源图归一化式只在分母正的开集内有定义；在外部0/0。直接零延拓未必光滑，例如单个φ在支集内部商为1外部为0。通常需再乘在K附近为1且紧支于分母正集的共同截断。此页把细节留作作业，不添加解答，记录构造条件遗漏供勘误说明。
