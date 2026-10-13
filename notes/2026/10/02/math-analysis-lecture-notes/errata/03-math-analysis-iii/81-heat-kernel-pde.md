# 勘误：81 热核、极大值原理与比较定理

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> u(t, x) &= \sum_{k=1}^{\infty} c_k e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} (u_0(y), \lambda_k(y))_{L^2} e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} \int_{\Omega} u_0(y) \overline{\lambda_k(y)} dy e^{-t\lambda_k} \varphi_k(x).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> u(t, x) &= \sum_{k=1}^{\infty} c_k e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} (u_0(y), \varphi_k(y))_{L^2} e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} \int_{\Omega} u_0(y) \overline{\varphi_k(y)} dy e^{-t\lambda_k} \varphi_k(x).
> \end{aligned}
> $$

**理由：** 原图把特征函数φ_k写成特征值λ_k(y)，λ_k为常数没有y；Hilbert展开系数应(u0,φk)。

**原文：**

> $$
> \begin{aligned}
> u(t, x) &= \sum_{k=1}^{\infty} c_k e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} (u_0(y), \lambda_k(y))_{L^2} e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} \int_{\Omega} u_0(y) \overline{\lambda_k(y)} dy e^{-t\lambda_k} \varphi_k(x).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> u(t, x) &= \sum_{k=1}^{\infty} c_k e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} (u_0(y), \varphi_k(y))_{L^2} e^{-t\lambda_k} \varphi_k(x) \\
> &= \sum_{k=1}^{\infty} \int_{\Omega} u_0(y) \overline{\varphi_k(y)} dy e^{-t\lambda_k} \varphi_k(x).
> \end{aligned}
> $$

**理由：** 原图三处λ_k(y)误代φ_k(y)，用此前热核p定义和初值Hilbert展开唯一确定；λ_k指数位置仍保持特征值。

**原文：**

> $$
> \begin{aligned}
> u(t, x) &= \int_{\Omega} \sum_{k=1}^{\infty} u_0(y) \overline{\lambda_k(y)} e^{-t\lambda_k} \varphi_k(x) dy \\
> &= \int_{\Omega} p(t, x, y) u_0(y) dy.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> u(t, x) &= \int_{\Omega} \sum_{k=1}^{\infty} u_0(y) \overline{\varphi_k(y)} e^{-t\lambda_k} \varphi_k(x) dy \\
> &= \int_{\Omega} p(t, x, y) u_0(y) dy.
> \end{aligned}
> $$

**理由：** 原图三处λ_k(y)误代φ_k(y)，用此前热核p定义和初值Hilbert展开唯一确定；λ_k指数位置仍保持特征值。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $K \subset \Omega \times \Omega$

**修正：**

> $K \subset \Omega$

**理由：** 此页u(t,x)及试验φ(t,x)只有单个空间变量，原图沿用核页的Ω×Ω；J×K支集应K⊂Ω。

**原文：**

> $$
> \begin{aligned}
> \left| \int_0^{\infty} e^{-\lambda_k t} \langle \varphi_k(x), \phi(t, x) \rangle \right| &\leqslant |K|^{\frac{1}{2}} \sup_{(t, x) \in J \times K} |\phi(t, x)| \int_{t_*}^{T^*} e^{-\lambda_k t} \\
> &\leqslant \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left| \int_0^{\infty} e^{-\lambda_k t} \langle \varphi_k(x), \phi(t, x) \rangle dt \right| &\leqslant |K|^{\frac{1}{2}} \sup_{(t, x) \in J \times K} |\phi(t, x)| \int_{t_*}^{T^*} e^{-\lambda_k t}dt \\
> &\leqslant \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**理由：** 原图定积分漏微分dt；前文相同配对定义用dt，补回积分变量。

**原文：**

> $$
> \begin{aligned}
> \left| \int_0^{\infty} e^{-\lambda_k t} \langle \varphi_k(x), \phi(t, x) \rangle \right| &\leqslant |K|^{\frac{1}{2}} \sup_{(t, x) \in J \times K} |\phi(t, x)| \int_{t_*}^{T^*} e^{-\lambda_k t} \\
> &\leqslant \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left| \int_0^{\infty} e^{-\lambda_k t} \langle \varphi_k(x), \phi(t, x) \rangle dt \right| &\leqslant |K|^{\frac{1}{2}} \sup_{(t, x) \in J \times K} |\phi(t, x)| \int_{t_*}^{T^*} e^{-\lambda_k t}dt \\
> &\leqslant \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**理由：** 本积分紧后用e^{-λ_k t_*}/λ_k估计，变量必须dt，原图缺微分。

**原文：**

> $$
> \begin{aligned}
> \left| \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x), \phi(t, x) \right\rangle \right| &\leqslant \sum_{k \geqslant 1} c_k \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)| \\
> &\leqslant C(J, K, u_0) \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left| \left\langle \sum_{k \geqslant 1} c_k e^{-\lambda_k t} \varphi_k(x), \phi(t, x) \right\rangle \right| &\leqslant \sum_{k \geqslant 1} |c_k| \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)| \\
> &\leqslant C(J, K, u_0) \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**理由：** 原图估计左端漏c_k，真正u为带c_k的级数；原右端仍有c_k，补左端与定义一致。

**原文：**

> $$
> \begin{aligned}
> \left| \left\langle \sum_{k \geqslant 1} e^{-\lambda_k t} \varphi_k(x), \phi(t, x) \right\rangle \right| &\leqslant \sum_{k \geqslant 1} c_k \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)| \\
> &\leqslant C(J, K, u_0) \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left| \left\langle \sum_{k \geqslant 1} c_k e^{-\lambda_k t} \varphi_k(x), \phi(t, x) \right\rangle \right| &\leqslant \sum_{k \geqslant 1} |c_k| \frac{|K|^{\frac{1}{2}} e^{-\lambda_k t_*}}{\lambda_k} \sup_{(t, x) \in J \times K} |\phi(t, x)| \\
> &\leqslant C(J, K, u_0) \sup_{(t, x) \in J \times K} |\phi(t, x)|.
> \end{aligned}
> $$

**理由：** c_k一般复数/负数，原图右端未取绝对值不能作为非负模上界。用|c_k|≤||u0||L²和指数衰减确可和。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> 的 $H^m$ 范数是一致的（不依赖于 $t$）

**修正：**

> 的 $H^m$ 范数是一致有界的（其上界不依赖于 $t$）

**理由：** 热解每个e^{-λt}系数随t衰减，范数一般不是t独立常数。由927谱域估计得到统一上界，明确有界而保留随后连续性论证。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> Lebesguge

**正文：**

> Lebesgue

**理由：** 原图姓名多g，canonical已正确拼写；控制收敛应用由Σ|c_k|²可和支持，保持。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $p(t, x, y) \in C^0 ([0, \infty) \times \Omega \times \Omega)$

**修正：**

> $p(t, x, y) \in C^0 ([0, \infty),\mathcal{D}'(\Omega \times \Omega))$

**理由：** 原图把t0核写成点值连续函数，但931明确p(0)=δ(x-y)，连续性是t映到D′；本段tensor试验函数极限恰只使用分布连续性。

**原文：**

> $$
> \begin{aligned}
> \lim_{t \to 0} \langle u(t, x), \phi(x) \rangle &= \lim_{t \to 0} \langle \langle p(t, x, y), u_0(y) \rangle, \phi(x) \rangle \\
> &= \lim_{t \to 0} \langle p(t, x, y), \phi(x) \otimes u_0(y) \rangle \\
> &= \langle p(0, x, y), \phi(x) \otimes u_0(y) \rangle \\
> &= \sum_{k=1}^{\infty} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(x) \otimes u_0(y) \rangle \\
> &= \sum_{k=1}^{\infty} (u_0, \varphi_k)_{L^2} (\overline{\phi}, \varphi_k)_{L^2} \\
> &= (u_0, \overline{\phi})_{L^2} = \int_{\Omega} u_0(x) \phi(x) dx.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \lim_{t \to 0} \langle u(t, x), \phi(x) \rangle &= \lim_{t \to 0} \langle \langle p(t, x, y), u_0(y) \rangle, \phi(x) \rangle \\
> &= \lim_{t \to 0} \langle p(t, x, y), \phi(x) \otimes u_0(y) \rangle \\
> &= \langle p(0, x, y), \phi(x) \otimes u_0(y) \rangle \\
> &= \sum_{k=1}^{\infty} \langle \varphi_k(x) \overline{\varphi_k(y)}, \phi(x) \otimes u_0(y) \rangle \\
> &= \sum_{k=1}^{\infty} (u_0, \varphi_k)_{L^2} \overline{(\overline{\phi}, \varphi_k)_{L^2}} \\
> &= (u_0, \overline{\phi})_{L^2} = \int_{\Omega} u_0(x) \phi(x) dx.
> \end{aligned}
> $$

**理由：** 原图第二个内积外有共轭横线，canonical漏掉；∫φ_kφ=overline((barφ,φ_k))，正好得到(u0,barφ)线性试验配对。

**原文：**

> $$
> u(t, x) = \int_{\Omega} p(t, x, y) u_0(x) dx
> $$

**修正：**

> $$
> u(t, x) = \int_{\Omega} p(t, x, y) u_0(y) dy
> $$

**理由：** x为输出变量，积分需y；原图u0(x)dx误占输出x并留下free y，同页开头和936定义明确dy。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $$
> u_\varepsilon(t, x) = u(t, x) + \varepsilon |x - a|^2.
> $$

**修正：**

> $$
> u_\varepsilon(t, x) = u(t, x) + \varepsilon (|x-a|^2-M),\quad M>\max_{x\in\overline{\Omega}}|x-a|^2.
> $$

**理由：** 原图+a²使零边界uε正而后文取正最大值不能排除边界。保留固定a和二次扰动，补足常数M使边界uε<0，且Puε=Pu-2nε<0；ε→0仍uε→u，和正最大值反证连成正确同组。

**原文：**

> $u_\varepsilon \big|_{\partial ([0, \infty) \times \overline{\Omega})} > 0$

**修正：**

> $u_\varepsilon \big|_{\partial ([0, \infty) \times \overline{\Omega})} < 0$

**理由：** 补M后的扰动在整个抛物边界严格负，正最大值必在t>0,x∈Ω；原图>号沿用了反向论证。

**原文：**

> $$
> \partial_t u_\varepsilon - \Delta u_\varepsilon > 0.
> $$

**修正：**

> $$
> \partial_t u_\varepsilon - \Delta u_\varepsilon < 0.
> $$

**理由：** 对源+a²即Puε=Pu-2nε<0，原图直接计算写>是确定符号错；常数M不影响该计算。

**原文：**

> $u_\varepsilon(t, x) \geqslant 0$ 即可

**修正：**

> $u_\varepsilon(t, x) \leqslant 0$ 即可

**理由：** 命题目标u≤0，原图却先要证明uε≥0；ε→0所需为uε≤0，与后文假设存在正点和取正最大值一致。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $E_\lambda \subset$。

**修正：**

> $E_\lambda \subset L^2(\Omega)$。

**理由：** 原图⊂后漏集合；本章所有Dirichlet特征子空间按L² Hilbert谱定理给定，补自然环境空间不增加数学假设。

**原文：**

> $$
> p(t, x, y) = \sum_{k=1}^{\infty} e^{-\lambda_k t} \varphi_k(x) \varphi(y)
> $$

**修正：**

> $$
> p(t, x, y) = \sum_{k=1}^{\infty} e^{-\lambda_k t} \varphi_k(x) \varphi_k(y)
> $$

**理由：** 原图遗漏y函数的k下标，核须同一特征模两变量乘积，此前定义唯一确定。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $$
> \widetilde{p}(t, x, y) = \sum_{k=1}^{\infty} e^{-\lambda_k t} \widetilde{\varphi}_k(x) \widetilde{\varphi}_k(y)
> $$

**修正：**

> $$
> \widetilde{p}(t, x, y) = \sum_{k=1}^{\infty} e^{-\lambda_k t} \widetilde{\varphi}_k(x) \overline{\widetilde{\varphi}_k(y)}
> $$

**理由：** 原图新基y因子有共轭横线，canonical漏； arbitrary complex Hilbert基在φ→iφ变换下只有带共轭核保持不变。

**原文：**

> $$
> \widetilde{u}(t, x) = \int_{\Omega} \widetilde{p}(t, y, x) u_0(x) dx.
> $$

**修正：**

> $$
> \widetilde{u}(t, x) = \int_{\Omega} \widetilde{p}(t, x, y) u_0(y) dy.
> $$

**理由：** 原图定义tildeu(t,x)却积分掉x留下y，改标准核配对的dy形式，与已有u(t,x)和后面的唯一性同域。

**原文：**

> $(0, \Omega)$

**修正：**

> $(0,+\infty)\times\Omega$

**理由：** 原图(0,Ω)不是时间区间也不是时空域；热PDE及两解上下文均在t>0,x∈Ω。

**原文：**

> $$
> v(t, x) = \int_{\Omega} E(t, x, y) u_0(x) dx = (E(t, \cdot) * u_0) (x).
> $$

**修正：**

> $$
> v(t, x) = \int_{\Omega} E(t, x, y) u_0(y) dy = (E(t, \cdot) * u_0) (x).
> $$

**理由：** 全空间heat卷积的输出为x，积分变量必须y；下一行PDE积分和卷积(E*u0)(x)已给同一正确形式。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> $$
> v(t,x) \geqslant 0, \quad \text{对任意的 } (x,t) \in [0,\infty) \times \bar{\Omega}.
> $$

**修正：**

> $$
> v(t,x) \geqslant 0, \quad \text{对任意的 } (t,x) \in [0,\infty) \times \bar{\Omega}.
> $$

**理由：** 原图时空点顺序(x,t)与右边时间×空间倒置；仅改元组顺序。

**原文：**

> 那么，$C^\infty((0,\infty)\times\Omega) \cap C^0([0,\infty)\times\bar{\Omega})$

**修正：**

> 那么，$U\in C^\infty((0,\infty)\times\Omega) \cap C^0([0,\infty)\times\bar{\Omega})$

**理由：** 原图C∞前漏U∈，刚定义U=v-u且紧后说明U解热方程，补缺失主语/隶属。

**原文：**

> $(t,x,y) \in (0,\infty) \times \Omega_1 \times \Omega_2$

**修正：**

> $(t,x,y) \in (0,\infty) \times \Omega_1 \times \Omega_1$

**理由：** p1只定义在Ω1×Ω1，y∈Ω2\Ω1时p1未定义；原图练习陈述的共同核比较域必须Ω1×Ω1（未给零延拓）。只修域，不添加题解。

[相关正文：81：热核、极大值原理与比较定理](../../03-math-analysis-iii/81-heat-kernel-pde.md)

## 数学修正

**原文：**

> 通过对 $t$ 求倒数

**修正：**

> 通过对 $t$ 求导数

**理由：** 本句计算t^-n/2 e^{-d0²/(4t)}的极值，源倒数应导数；所得t0=d0²/(2n)可直接验证。

**原文：**

> $\Delta = \{(x,x) \mid x \in \Omega \times \Omega\}$

**修正：**

> $\Delta = \{(x,x) \mid x \in \Omega\}$

**理由：** 原图把对角点的一项坐标x写为Ω×Ω，x实为Ω内n维点，对角集合才位于Ω×Ω。

**原文：**

> $$
> \int_\Omega \frac{1}{(4\pi t)^{\frac{n}{2}}} e^{-\frac{d(x,\partial\Omega)^2}{4t}} dx = O(t^{-\frac{n}{2}+1}),
> $$

**修正：**

> $$
> \int_\Omega \frac{1}{(4\pi t)^{\frac{n}{2}}} e^{-\frac{d(x,\partial\Omega)^2}{4t}} dx = O(t^{-\frac{n}{2}+\frac12}),
> $$

**理由：** 边界厚度sqrt(t)的Gaussian层体积为O(sqrt(t))，乘t^-n/2得到+1/2；946trace余项也明确sqrt(t)，原图+1漏半。
