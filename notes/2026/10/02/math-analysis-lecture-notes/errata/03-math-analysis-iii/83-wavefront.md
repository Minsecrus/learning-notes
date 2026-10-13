# 勘误：83 波前集与非驻相法

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N I &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta| + |\eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| (1 + |\eta|)^N |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| C_N(\Gamma') d\eta \\
> &= \frac{C_N(\Gamma')}{(2\pi)^n} \int_{\Gamma'} (1 + |\eta|)^N |\widehat{f}(\eta)| d\eta.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |I| &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta| + |\eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| (1 + |\eta|)^N |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| C_N(\Gamma') d\eta \\
> &\le \frac{C_N(\Gamma')}{(2\pi)^n} \int_{\mathbb{R}^n} (1 + |\eta|)^N |\widehat{f}(\eta)| d\eta.
> \end{aligned}$$

**理由：** I为复数振荡积分，原图上界必须取模；右端已取各因子模。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N I &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta| + |\eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| (1 + |\eta|)^N |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| C_N(\Gamma') d\eta \\
> &= \frac{C_N(\Gamma')}{(2\pi)^n} \int_{\Gamma'} (1 + |\eta|)^N |\widehat{f}(\eta)| d\eta.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |I| &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta| + |\eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| (1 + |\eta|)^N |\widehat{u}(\eta)| d\eta \\
> &\le \frac{1}{(2\pi)^n} \int_{\Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| C_N(\Gamma') d\eta \\
> &\le \frac{C_N(\Gamma')}{(2\pi)^n} \int_{\mathbb{R}^n} (1 + |\eta|)^N |\widehat{f}(\eta)| d\eta.
> \end{aligned}$$

**理由：** 换元eta→xi″−eta后域为xi″−Gamma′，原图仍写Gamma′且等号错误；正被积函数可扩为全Rn的统一上界。

**原文：**

> $$(1 + |\xi''|)^N \le C_N.$$

**修正：**

> $$(1 + |\xi''|)^N |I| \le C_N.$$

**理由：** 源图结论漏I，若无I则频率任意大时不成立；补被估计量与刚上卷积估计对应。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N II &\le \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi''|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^{-\frac{s_0}{2} - n} |\widehat{u}(\eta)| d\eta.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |II| &\le \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi''|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^{-s_0 - n} |\widehat{u}(\eta)| d\eta.
> \end{aligned}$$

**理由：** II为复数振荡积分，上界应取模，与右端绝对值配对一致。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N II &\le \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi''|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^{-\frac{s_0}{2} - n} |\widehat{u}(\eta)| d\eta.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |II| &\le \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi''|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| |\widehat{u}(\eta)| d\eta \\
> &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\xi'' - \eta|)^{-s_0 - n} |\widehat{u}(\eta)| d\eta.
> \end{aligned}$$

**理由：** 827定义H^-s0的平方权重(1+|eta|²)^−s0，改用1+|eta|时应为−2s0平方权重，Cauchy之前为−s0。Schwartz衰减任意阶，增此指数合法。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$(1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| \le C'' (1 + |\xi'' - \eta|)^{-\frac{s_0}{2} - n}.$$

**修正：**

> $$(1 + |\xi'' - \eta|)^N |\widehat{f}(\xi'' - \eta)| \le C'' (1 + |\xi'' - \eta|)^{-s_0 - n}.$$

**理由：** 承上957一致改足够Schwartz阶，使负Sobolev权重与827定义匹配。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N II &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-\frac{s_0}{2}} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &= C'_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |II| &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &\le C''_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**理由：** II为复值振荡积分，原图的不等式左端必须取绝对值才能与非负上界比较。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N II &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-\frac{s_0}{2}} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &= C'_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |II| &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &\le C''_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**理由：** 用Cauchy-Schwarz前负权重需−s0，平方后−2s0，才由H^-s0控制。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N II &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-\frac{s_0}{2}} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &= C'_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |II| &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &\le C''_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**理由：** 827范数平方(1+|eta|²)^−s0，与(1+|eta|)^−2s0等价且后者≤前者；原−s0无法由H^-s0控制。

**原文：**

> $$\begin{aligned}
> (1 + |\xi''|)^N II &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-\frac{s_0}{2}} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &= C'_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> (1 + |\xi''|)^N |II| &\le C'_\delta \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| \times (1 + |\eta|)^{-n} d\eta \\
> &\le C'_\delta \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2s_0} |\widehat{u}(\eta)|^2 d\eta \right)^{\frac{1}{2}} \times \left( \int_{\mathbb{R}^n - \Gamma'} (1 + |\eta|)^{-2n} d\eta \right)^{\frac{1}{2}} \\
> &\le C''_\delta \|u\|_{H^{-s_0}}.
> \end{aligned}$$

**理由：** 区域为Rn−Gamma′的受限积分，并乘一个有限L²因子，只能≤放大常数乘全域Sobolev范数。

**原文：**

> $$I + II \le \frac{C_N}{(1 + |\xi|)^N}.$$

**修正：**

> $$|I| + |II| \le \frac{C_N}{(1 + |\xi''|)^N}.$$

**理由：** 补复数积分模和本页输入频率xi″；由三角不等式控制widehat(fu)。

**原文：**

> 我们对 $(u, f) = (fu, \psi)$ 用上面的引理：

**修正：**

> 取 $\chi\in C_0^\infty(\Omega)$ 在 $\operatorname{supp}(f)$ 的邻域恒为 $1$。我们对 $(u, f) = (fu, \chi\psi)$ 用上面的引理：

**理由：** lemma544的乘子要求紧支集，psi仅C∞。插一个在supp f邻域为1的chi，使chi psi紧支且chi psi fu=psi fu，后续公式保持。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> 其中 $x_0 \in U$，$\xi_j \in \Gamma$，对任意的 $f \in C_0^\infty(U_j)$

**修正：**

> 其中 $x_0 \in U_j$，$\xi_j \in \Gamma_j$，对任意的 $f \in C_0^\infty(U_j)$

**理由：** 有限覆盖每个j配对Uj,Gammaj，原图遗漏两个指标。

**原文：**

> 存在常数 $C_{j,N,f}$，使得对任意的 $\xi \in \Gamma$，有

**修正：**

> 存在常数 $C_{j,N,f}$，使得对任意的 $\xi \in \Gamma_j$，有

**理由：** 承有限锥覆盖j项，原图Gamma漏j。

**原文：**

> 那么，对任意的 $\xi \in \mathbb{R}^n$，存在 $j$，使得 $\xi \in \Gamma_j$

**修正：**

> 那么，对任意的 $\xi \in \mathbb{R}^n-\{0\}$，存在 $j$，使得 $\xi \in \Gamma_j$

**理由：** 锥覆盖证明仅覆盖非零频率，0不必在各锥；fu紧支分布Fourier在0连续，紧后衰减不等式可用连续性延到0。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$
> p_2(-\Delta) = |\xi|^2 \implies Z(p_2) = \{0\}.
> $$

**修正：**

> $$
> p_2(-\Delta) = |\xi|^2 \implies Z(p_2) = \Omega\times\{0\}.
> $$

**理由：** Z是T*Omega内(x,xi)点集，零点为整个零截面，原图只写频率0省掉x基点。

**原文：**

> $$
> WF(u) \subset \{0\} \cup \emptyset = \{0\}.
> $$

**修正：**

> $$
> WF(u) \subset \bigl(\Omega\times\{0\}\bigr) \cup \emptyset = \Omega\times\{0\}.
> $$

**理由：** 与上Z(p2)零截面联动，WF在非零余切丛所以仍为空。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> 其中 $\chi \geqslant 0$ 并且在原点附近恒为 1。

**修正：**

> 其中 $\chi \geqslant 0$ 并且在原点附近恒为 1，令 $\chi_\varepsilon(\eta)=\chi(\varepsilon\eta)$。

**理由：** 原图未说明频率cutoff缩放；chi(eps eta)才能eps→0时趋1而非物理mollifier，后文965按eta积分的同一cutoff需要此定义。

**原文：**

> 特别地，我们就有

**修正：**

> 取 $\psi\in C_0^\infty(\mathbb{R}^n)$ 在 $K$ 的邻域恒为 $1$。特别地，我们就有

**理由：** uε→u仅分布收敛，配对非紧支函数无直接保证；先引入原页末已有psi截断，配对成为合法试验函数。

**原文：**

> $$
> I_\varepsilon(\xi) = \left\langle u_\varepsilon(x), e^{-i\phi(x,\xi)} a(x, \xi) \right\rangle \to I(\xi).
> $$

**修正：**

> $$
> I_\varepsilon(\xi) = \left\langle u_\varepsilon(x), e^{-i\phi(x,\xi)} \psi(x)a(x, \xi) \right\rangle \to I(\xi).
> $$

**理由：** 紧支截断psi保证D′收敛可配对，且psi在supp u邻域为1，极限就是I。

**原文：**

> $$
> \int_{\mathbb{R}^n} e^{-i\phi(x,\xi)} a(x, \xi) u_\varepsilon(x) dx
> $$

**修正：**

> $$
> \int_{\mathbb{R}^n} e^{-i\phi(x,\xi)} \psi(x)a(x, \xi) u_\varepsilon(x) dx
> $$

**理由：** 衔接已改带psi的Iε定义，使正则化积分与配对为同一量。

**原文：**

> $$
> I_\varepsilon(\xi) = \int_{\mathbb{R}^n} e^{-i\phi(x,\xi)} a(x, \xi) u_\varepsilon(x) dx \to I(\xi), \quad \varepsilon \to 0^+.
> $$

**修正：**

> $$
> I_\varepsilon(\xi) = \int_{\mathbb{R}^n} e^{-i\phi(x,\xi)} \psi(x)a(x, \xi) u_\varepsilon(x) dx \to I(\xi), \quad \varepsilon \to 0^+.
> $$

**理由：** 保持前面定义和后面双积分截断一致，由D′收敛对紧支测试得极限。

**原文：**

> 使得 $\left. \psi(x) \right|_K \equiv 1$

**修正：**

> 使得 $\psi(x)$ 在 $K$ 的邻域恒为 $1$

**理由：** 紧支分布可含delta导数，仅K上值1不能保证psi u=u；邻域恒1保证所有分布阶的乘积保持。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> 由 $\alpha_1$ 和 $\alpha_1$ 决定

**修正：**

> 由 $\alpha_0$ 和 $\alpha_1$ 决定

**理由：** 紧后原图同句明确只依赖alpha0/alpha1，间距alpha0−alpha1决定eps1，前面alpha1重复为笔误。

## 未决数学问题

**原文：**

> $$
> \Omega_1 = \left\{ \eta \in \mathbb{R}^n \mid |\eta - \nabla_x \phi(x, \xi)| < \varepsilon_1 |\nabla_x \phi(x, \xi)| \text{ 或者 } |\eta - \nabla_x \phi(x, \xi)| < \varepsilon_1 |\eta| \right\}.
> $$

**问题：** Omega1定义依赖尚未量化的x，后续却按eta固定域拆双积分并对x分部积分。要保证远区域每个支集x都非驻相，应采用全supp(a~)上统一union或光滑分区；当前x依赖域的指示函数会在x求导产生边界项。需核查续页，不凭单页猜改整个非驻相分拆证明。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,1}(\xi) &\leqslant \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \int_{\Omega_1} |\psi(x)a(x, \xi)||\chi_\varepsilon(\eta)||\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \int_{\Omega_1} |\psi(x)| C_0 (1 + |\xi|)^{N_0} \frac{C_N}{(1 + |\eta| + |\xi|)^N} dxd\eta \\
> &\leqslant C' \int_{\mathbb{R}^n} \int_{\Omega_1} \frac{|\psi(x)|}{(1 + |\eta| + |\xi|)^{N-N_0}} dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} \int_{\Omega_1} \frac{|\psi(x)|}{(1 + |\eta| + |\xi|)^{N-N_0-m}} dxd\eta.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,1}(\xi)| &\leqslant \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \int_{\Omega_1} |\psi(x)a(x, \xi)||\chi_\varepsilon(\eta)||\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \int_{\Omega_1} |\psi(x)| C_0 (1 + |\xi|)^{N_0} \frac{C_N}{(1 + |\eta| + |\xi|)^N} dxd\eta \\
> &\leqslant C' \int_{\mathbb{R}^n} \int_{\Omega_1} \frac{|\psi(x)|}{(1 + |\eta| + |\xi|)^{N-N_0}} dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} \int_{\Omega_1} \frac{|\psi(x)|}{(1 + |\eta| + |\xi|)^{N-N_0-m}} dxd\eta.
> \end{aligned}
> $$

**理由：** 原图近驻相积分可为复数，非负上界比较左端应取模。

**原文：**

> $$
> I_{\varepsilon,1}(\xi) \leqslant \frac{C'}{(1 + |\xi|)^m}.
> $$

**修正：**

> $$
> |I_{\varepsilon,1}(\xi)| \leqslant \frac{C'}{(1 + |\xi|)^m}.
> $$

**理由：** 承接上方绝对值估计，原图末结论同样应对复值积分取模。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$
> |\eta - \nabla_x \phi(x, \xi)| \geqslant \frac{\varepsilon_1}{2} (1 + |\xi| + |\eta|),
> $$

**修正：**

> $$
> |\eta - \nabla_x \phi(x, \xi)| \geqslant c\varepsilon_1 (1 + |\xi| + |\eta|),
> $$

**理由：** 齐次性与紧集非零梯度给单位频率上梯度正下界，但不保证为1；|xi|≥1吸收常数1还需缩小常数。应用固定c>0的下界，原eps1/2不可直接保留。

**原文：**

> $$
> |\nabla_x \widetilde{\phi}(x, \xi, \eta)| \geqslant \frac{\varepsilon_1}{2} (1 + |\xi| + |\eta|).
> $$

**修正：**

> $$
> |\nabla_x \widetilde{\phi}(x, \xi, \eta)| \geqslant c\varepsilon_1 (1 + |\xi| + |\eta|).
> $$

**理由：** 齐次性与紧集非零梯度给单位频率上梯度正下界，但不保证为1；|xi|≥1吸收常数1还需缩小常数。应用固定c>0的下界，原eps1/2不可直接保留。

**原文：**

> 在这里, 我们假设了 $|\xi| \geqslant 1$

**修正：**

> 在这里, $c>0$ 是由紧集上的相函数梯度下界决定的常数，我们假设了 $|\xi| \geqslant 1$

**理由：** 补明刚修正下界常数的来源，保持原只讨论大频率的论证。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$
> |\nabla_x \widetilde{\phi}(x, \xi, \eta)| \geqslant \frac{\varepsilon_1}{2} (1 + |\xi| + |\eta|),
> $$

**修正：**

> $$
> |\nabla_x \widetilde{\phi}(x, \xi, \eta)| \geqslant c\varepsilon_1 (1 + |\xi| + |\eta|),
> $$

**理由：** 齐次性与紧集非零梯度给单位频率上梯度正下界，但不保证为1；|xi|≥1吸收常数1还需缩小常数。应用固定c>0的下界，原eps1/2不可直接保留。

**原文：**

> 只依赖于 $\alpha_1$ 和 $\alpha_1$ 的常数

**修正：**

> 只依赖于 $\alpha_0$ 和 $\alpha_1$ 的常数

**理由：** 与963选择eps1的alpha0−alpha1间距一致，原图重复alpha1。

**原文：**

> (以及 $x \in K$)

**修正：**

> (以及 $x \in \operatorname{supp}\psi$)

**理由：** 被分部积分振幅为psi a，空间支集为supp psi；psi需在K邻域为1，不能假定支持在任意原K内。

**原文：**

> $$
> |({}^t L)^N (\tilde{a}(x, \xi))| \leqslant C_N (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_K(x).
> $$

**修正：**

> $$
> |({}^t L)^N (\tilde{a}(x, \xi))| \leqslant C_N (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_{\operatorname{supp}\psi}(x).
> $$

**理由：** 振幅psi a的导数支集落supp psi，原图1K可能把K之外非零截断导数强置0。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant C_N \int_{\mathbb{R}^n} \int_{\Omega_2} (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_K(x) |\chi_\varepsilon(\eta) \widehat{u}(\eta)| dxd\eta \\
> &\leqslant C' \int_{\Omega_2} (1 + |\xi| + |\eta|)^{-N+N_0} |\widehat{u}(\eta)| dxd\eta.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant C_N \int_{\mathbb{R}^n} \int_{\Omega_2} (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_{\operatorname{supp}\psi}(x) |\chi_\varepsilon(\eta) \widehat{u}(\eta)| dxd\eta \\
> &\leqslant C' \int_{\Omega_2} (1 + |\xi| + |\eta|)^{-N+N_0} |\widehat{u}(\eta)| d\eta.
> \end{aligned}
> $$

**理由：** 与上一振幅支集联动，紧支集体积仍只进入常数。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant C_N \int_{\mathbb{R}^n} \int_{\Omega_2} (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_K(x) |\chi_\varepsilon(\eta) \widehat{u}(\eta)| dxd\eta \\
> &\leqslant C' \int_{\Omega_2} (1 + |\xi| + |\eta|)^{-N+N_0} |\widehat{u}(\eta)| dxd\eta.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant C_N \int_{\mathbb{R}^n} \int_{\Omega_2} (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_{\operatorname{supp}\psi}(x) |\chi_\varepsilon(\eta) \widehat{u}(\eta)| dxd\eta \\
> &\leqslant C' \int_{\Omega_2} (1 + |\xi| + |\eta|)^{-N+N_0} |\widehat{u}(\eta)| d\eta.
> \end{aligned}
> $$

**理由：** 复值积分上界必须取模，右端已用绝对值。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant C_N \int_{\mathbb{R}^n} \int_{\Omega_2} (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_K(x) |\chi_\varepsilon(\eta) \widehat{u}(\eta)| dxd\eta \\
> &\leqslant C' \int_{\Omega_2} (1 + |\xi| + |\eta|)^{-N+N_0} |\widehat{u}(\eta)| dxd\eta.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant C_N \int_{\mathbb{R}^n} \int_{\Omega_2} (1 + |\xi|)^{N_0} (1 + |\xi| + |\eta|)^{-N} \mathbf{1}_{\operatorname{supp}\psi}(x) |\chi_\varepsilon(\eta) \widehat{u}(\eta)| dxd\eta \\
> &\leqslant C' \int_{\Omega_2} (1 + |\xi| + |\eta|)^{-N+N_0} |\widehat{u}(\eta)| d\eta.
> \end{aligned}
> $$

**理由：** 上一行已把有限空间支集的x积分吸收到C′，原图仅eta积分却遗留dx。

**原文：**

> 由于对任意的 $u \in \mathcal{E}'(\mathbb{R}^n) \subset \mathcal{S}'(\mathbb{R}^n) \subset \bigcup_{s \in \mathbb{R}} H^s(\mathbb{R}^n)$, 所以, 我们可以假设 $u \in H^{s_0}(\mathbb{R}^n)$, 从而,

**修正：**

> 由于 $u \in \mathcal{E}'(\mathbb{R}^n)\subset\mathcal{S}'(\mathbb{R}^n)$ 的 Fourier 变换是至多多项式增长的光滑函数，存在 $s_0>0$ 使得 $u\in H^{-s_0}(\mathbb{R}^n)$。从而,

**理由：** 原S′⊂union Hs为假，常函数1的Fourier为delta不属任意Hs；真正可用的是本题u紧支，Fourier光滑多项式增长因而属充分负的Hs。固定s0>0并以H^-s0核对后续权重。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m-\frac{s_0}{2}} \times (1 + |\xi|)^{\frac{s_0}{2}} |\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+s_0} d\eta \right) \|u\|_{H^{s_0}} \\
> &= \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m+s_0} \times (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| d\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+2s_0} d\eta \right)^{\frac12} \|u\|_{H^{-s_0}} \\
> &\leqslant \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**理由：** 承接本页上方对复数积分的模估计。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m-\frac{s_0}{2}} \times (1 + |\xi|)^{\frac{s_0}{2}} |\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+s_0} d\eta \right) \|u\|_{H^{s_0}} \\
> &= \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m+s_0} \times (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| d\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+2s_0} d\eta \right)^{\frac12} \|u\|_{H^{-s_0}} \\
> &\leqslant \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**理由：** 为使H^-s0平方权重可用，Cauchy前拆出(1+|eta|)^−s0，剩余总频率指数应增加s0。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m-\frac{s_0}{2}} \times (1 + |\xi|)^{\frac{s_0}{2}} |\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+s_0} d\eta \right) \|u\|_{H^{s_0}} \\
> &= \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m+s_0} \times (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| d\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+2s_0} d\eta \right)^{\frac12} \|u\|_{H^{-s_0}} \\
> &\leqslant \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**理由：** Sobolev权重必须依eta，且827定义负阶Cauchy前权重为−s0；这里已无空间积分，去遗留dx。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m-\frac{s_0}{2}} \times (1 + |\xi|)^{\frac{s_0}{2}} |\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+s_0} d\eta \right) \|u\|_{H^{s_0}} \\
> &= \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m+s_0} \times (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| d\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+2s_0} d\eta \right)^{\frac12} \|u\|_{H^{-s_0}} \\
> &\leqslant \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**理由：** Cauchy-Schwarz须平方剩余权重并取1/2幂；另一个L²因子为H^-s0范数，原漏根号且指数/范数符号不匹配。

**原文：**

> $$
> \begin{aligned}
> I_{\varepsilon,2}(\xi) &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m-\frac{s_0}{2}} \times (1 + |\xi|)^{\frac{s_0}{2}} |\widehat{u}(\eta)| dxd\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+s_0} d\eta \right) \|u\|_{H^{s_0}} \\
> &= \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |I_{\varepsilon,2}(\xi)| &\leqslant \frac{C'}{(1 + |\xi|)^m} \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-N+N_0+m+s_0} \times (1 + |\eta|)^{-s_0} |\widehat{u}(\eta)| d\eta \\
> &\leqslant \frac{C'}{(1 + |\xi|)^m} \left( \int_{\mathbb{R}^n} (1 + |\xi| + |\eta|)^{-2N+2N_0+2m+2s_0} d\eta \right)^{\frac12} \|u\|_{H^{-s_0}} \\
> &\leqslant \frac{C''}{(1 + |\xi|)^m}.
> \end{aligned}
> $$

**理由：** 积分可由去掉|xi|后的可积权重统一控制，仅给上界而非与xi无关常数的等号。

**原文：**

> $2N > 2N_0 + 2m - s_0 + 1$

**修正：**

> $2N > 2N_0 + 2m + 2s_0 + n$

**理由：** 修正平方权重指数后Rn上的积分需衰减幂大于维数n，原符号错误且把维数当1。

**原文：**

> $$
> |I(\xi)| \leqslant \lim_{\varepsilon \to 0^+} I_{\varepsilon,1}(\xi) + I_{\varepsilon,2}(\xi) \leqslant \frac{C(m)}{(1 + |\xi|)^m}.
> $$

**修正：**

> $$
> |I(\xi)| \leqslant \limsup_{\varepsilon \to 0^+}\bigl(|I_{\varepsilon,1}(\xi)|+|I_{\varepsilon,2}(\xi)|\bigr) \leqslant \frac{C(m)}{(1 + |\xi|)^m}.
> $$

**理由：** Iε→I但两部分单独极限未证明；用三角不等式与一致上界给limsup模和即可。

[相关正文：83：波前集与非驻相法](../../03-math-analysis-iii/83-wavefront.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \widehat{f \Phi^* u}(\xi) &= \int_{\mathbb{R}^n_x} e^{-ix\cdot\xi} f(x)\tilde{u}(\Phi(x)) dx \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))\tilde{u}(y)|d\Phi^{-1}(y)|}_{F(y)} dy \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))|d\Phi^{-1}(y)|}_{F(y)} \tilde{u}(y) dy.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \widehat{f \Phi^* \tilde{u}}(\xi) &= \int_{\mathbb{R}^n_x} e^{-ix\cdot\xi} f(x)\tilde{u}(\Phi(x)) dx \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))|d\Phi^{-1}(y)|}_{F(y)}\tilde{u}(y) dy \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))|d\Phi^{-1}(y)|}_{F(y)} \tilde{u}(y) dy.
> \end{aligned}
> $$

**理由：** 本页定义u=Phi*tilde u，Fourier应计算f u=f Phi*tilde u，原图又拉回已经在Omega的u为错误。

**原文：**

> $$
> \begin{aligned}
> \widehat{f \Phi^* u}(\xi) &= \int_{\mathbb{R}^n_x} e^{-ix\cdot\xi} f(x)\tilde{u}(\Phi(x)) dx \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))\tilde{u}(y)|d\Phi^{-1}(y)|}_{F(y)} dy \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))|d\Phi^{-1}(y)|}_{F(y)} \tilde{u}(y) dy.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \widehat{f \Phi^* \tilde{u}}(\xi) &= \int_{\mathbb{R}^n_x} e^{-ix\cdot\xi} f(x)\tilde{u}(\Phi(x)) dx \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))|d\Phi^{-1}(y)|}_{F(y)}\tilde{u}(y) dy \\
> &= \int_{\mathbb{R}^n_x} e^{-i\Phi^{-1}(y)\cdot\xi} \underbrace{f(\Phi^{-1}(y))|d\Phi^{-1}(y)|}_{F(y)} \tilde{u}(y) dy.
> \end{aligned}
> $$

**理由：** 原图第一括号只含f，canonical误把分布tilde u也收入F；紧后F必须为光滑振幅，用该页最后一行明确定义f乘Jacobian，tilde u应留外。

**原文：**

> $$
> \nabla_y \Phi(y, \xi) = {}^t d\Phi^{-1}(y) \cdot \xi.
> $$

**修正：**

> $$
> \nabla_y \phi(y, \xi) = {}^t d\Phi^{-1}(y) \cdot \xi.
> $$

**理由：** Phi是微分同胚，不是相函数；此处两变量梯度对应phi(y,xi)=Phi^-1(y)·xi。

**原文：**

> $$
> |\nabla_y \Phi(y, \xi) - \eta_0|
> $$

**修正：**

> $$
> \left|\frac{\nabla_y \phi(y, \xi)}{|\nabla_y \phi(y, \xi)|}-\frac{\eta_0}{|\eta_0|}\right|
> $$

**理由：** 锥内xi模任意大，未归一化梯度不可能接近固定eta0；lemma550条件是单位方向接近，改回方向式与同页相函数一致。

**原文：**

> 对于 ${}^t d\Phi^{-1}(y)(\xi_0) = \eta_0$

**修正：**

> 对于 ${}^t d\Phi^{-1}(y_0)(\xi_0) = \eta_0$

**理由：** 固定xi0和eta0仅在基点y0由余切转换确定，其附近用光滑连续性控制，原任意y等号错误。
