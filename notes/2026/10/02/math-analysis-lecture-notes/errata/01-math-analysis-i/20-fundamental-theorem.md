# 勘误：20 Newton-Leibniz 公式与积分计算

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)

## 数学修正

**原文：**

> 4. $f$ 是有界函数并且 $\displaystyle\int_{-a}^{b} f = \overline{\int_a^b} f$。

**修正：**

> 4. $f$ 是有界函数并且 $\underline{\int_a^b} f = \overline{\int_a^b} f$。

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)原图下积分的下划线延伸在积分号和下标下面，确不是负下限-a。恢复下积分与上积分相等才是Darboux可积性判据，属于提取错误。

**原文：**

> $$\underline{D}(f) = \overline{D}(f) = \int_{-a}^{b} f = \overline{\int_a^b} f = \int_a^b f.$$

**修正：**

> $$\underline{D}(f) = \overline{D}(f) = \underline{\int_a^b} f = \overline{\int_a^b} f = \int_a^b f.$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)原图下积分下划线确被误当成负号。全链给出Darboux上下和、上下积分、Riemann积分在可积时相同，恢复下积分是必要提取纠错。

**原文：**

> 我们选定一个 $\sigma_0 = \{b_0 < b_1 < \cdots < b_0\}$，使得 $|\sigma_0| < \delta$。

**修正：**

> 我们选定一个 $\sigma_0 = \{a_0 < a_1 < \cdots < a_n\}$，使得 $|\sigma_0| < \delta$。

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图实际印b0<b1<…<b0，本身首末重复违反严格递增，且后续固定此分划后立即使用ai,ai0。改为a0<…<an同时恢复合法分划与本证明已用的指标，属于源笔误，API所谓图中已是a不实。

**原文：**

> 根据 $|S(f; \sigma, \xi)| < \mathbf{I} + \varepsilon$

**修正：**

> 根据 $|S(f; \sigma, \xi)| < |\mathbf{I}| + \varepsilon$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图从|S-I|<ε推出|S|<I+ε漏I绝对值；当常数函数f=-1时I<0，原上界可负而绝对值非负，矛盾。三角不等式唯一给|I|+ε。

**原文：**

> $$|(a_{i_0} - a_{i_0-1})f(x)| \leqslant |\sum_{i \neq i_0} (a_i - a_{i-1})|f(\xi_i)| + |S(f; \sigma, \xi)|$$

**修正：**

> $$|(a_{i_0} - a_{i_0-1})f(x)| \leqslant \sum_{i \neq i_0} (a_i - a_{i-1})|f(\xi_i)| + |S(f; \sigma, \xi)|$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)该第一估计的求和前多一个无匹配绝对值竖线，源图实际求和前没有竖线。每项长度正且已有|fξi|，和非负，删除游离竖线恢复明确三角不等式。

**原文：**

> $$\leqslant |\sum_{i \neq i_0} (a_i - a_{i-1})|f(a_i)| + \mathbf{I} + \varepsilon.$$

**修正：**

> $$\leqslant \sum_{i \neq i_0} (a_i - a_{i-1})|f(a_i)| + |\mathbf{I}| + \varepsilon.$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)第二行同样多游离求和前竖线，源图没有；另源式I+ε漏I绝对值，在负积分时不成立。修成每项绝对值之和+|I|+ε由前式和|S-I|<ε直接推出，必须与上句界同步。

[相关正文：Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)

## 数学修正

**原文：**

> 实际上，一个可微函数的导数未必是 Rieman 可积的：比如说，在区间

**修正：**

> 实际上，一个可微函数的导数未必是 Riemann 可积的：比如说，在区间

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)原图对应Riemann拼写本身正确，Markdown漏末字母n。恢复统一数学家名称为提取错误，不改Newton-Leibniz条件。

[相关正文：Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)

## 数学修正

**原文：**

> 2) $\pi = \pi$ 的第一个证明。

**修正：**

> 2) $\bar{\pi} = \pi$ 的第一个证明。

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)原图首个π确有上划线，区分先前几何定义的bar π与三角函数周期定义π；π=π本身不能表达此处需要证明两种定义一致，恢复上划线是提取错误。

**原文：**

> $$\int \sec^2 ax = \frac{\tan ax}{a}; \qquad \int \frac{1}{\cos x} = \log\left|\tan\frac{x}{2}\right|.$$

**修正：**

> $$\int \sec^2 ax = \frac{\tan ax}{a}; \qquad \int \frac{1}{\sin x} = \log\left|\tan\frac{x}{2}\right|.$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图被积函数错写cos。直接求导log|tan(x/2)|=(1/2)sec²(x/2)/tan(x/2)=1/sin x，且上面一行已经单列sec原函数。因此改cos为sin是此函数表中唯一相符原函数对。

**原文：**

> $$\int_a^b x^n = \int_a^b \frac{1}{n+1} x^{n+1} = \frac{1}{n+1} x^{n+1}\Big|_a^b = \frac{1}{n+1}(b^{n+1} - a^{n+1}).$$

**修正：**

> $$\int_a^b x^n = \int_a^b \left(\frac{1}{n+1} x^{n+1}\right)\!\prime = \frac{1}{n+1} x^{n+1}\Big|_a^b = \frac{1}{n+1}(b^{n+1} - a^{n+1}).$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图错误将原函数本身再次积分。Newton-Leibniz应先把被积函数认作所列原函数的导数；例如n=0,a=0,b=1原第二项1/2而正确1。补导数符号保留原链的原函数与边界差，不改结论。

**原文：**

> $$\int_{-r}^{r} f = \int_{-r}^{r} \sqrt{1 - x^2}.$$

**修正：**

> $$\int_{-r}^{r} f = \int_{-r}^{r} \sqrt{r^2 - x^2}.$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图f已定义为sqrt(r²-x²)，等式却误变单位圆sqrt(1-x²)。r任意正数，r>1时原右被积函数在部分区间不实；恢复r²与本图半径r及面积r²π/2一致。

[相关正文：Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)

## 数学修正

**原文：**

> $$S_k \longrightarrow f, \quad b_k \longrightarrow f, \quad \mathbb{Z}_{\geqslant 1} \longrightarrow [a, b],$$

**修正：**

> $$S_k \longrightarrow f, \quad b_k \longrightarrow g, \quad \mathbb{Z}_{\geqslant 1} \longrightarrow [a, b],$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图Abel对应表两函数都标f，分部积分表明部分和Sk对应原函数f，另bk必须对应第二独立因子g，才能a=f′、差bk-bk+1对应-g′。恢复g绑定前面的f,g。

**原文：**

> 连续的单调递增的可微映射

**修正：**

> 连续可微的单调递增的映射

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源命题只要求可微，而证明直接假设Φ∈C¹。仅可微单调不保证Φ′有界/Riemann可积，左积分未必定义；补连续可微使被积函数连续且满足本书Riemann框架与证明。

**原文：**

> 根据 $f \in C(I)$ 和 $\Phi \in C^1(I)$

**修正：**

> 根据 $f \in C(J)$ 和 $\Phi \in C^1(I)$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图f定义域是J=[c,d]而非I=[a,b]，复合f∘Φ须f连续于J。

**原文：**

> $$F(x) = \int_a^x f.$$

**修正：**

> $$F(x) = \int_c^x f.$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)f仅在J=[c,d]定义，a为Φ域I端点，可能不属于J。以f域左端c作下限才有定义。

**原文：**

> $$F(\Phi(\beta)) - F(\Phi(\alpha)) = \int_a^{\Phi(\beta)} f - \int_a^{\Phi(\alpha)} f = \int_{\Phi(\alpha)}^{\Phi(\beta)} f.$$

**修正：**

> $$F(\Phi(\beta)) - F(\Phi(\alpha)) = \int_c^{\Phi(\beta)} f - \int_c^{\Phi(\alpha)} f = \int_{\Phi(\alpha)}^{\Phi(\beta)} f.$$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源式继承错误原函数下限a，应与已修F(x)=∫c^x f一致用c，差仍为∫Φα^Φβ。

[相关正文：Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)

## 数学修正

**原文：**

> 这里，我们已经默认了 $a > b$ 的假设。

**修正：**

> 这里，我们已经默认了 $a < b$ 的假设。

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图确把区间I=[a,b]常用积分默认顺序写a>b，然而之前定义仅对a<b，随后才引入反向积分约定。改a<b恢复已存在积分的定义域，属于源笔误。

[相关正文：Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)

## 数学修正

**原文：**

> $$
> \int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}\,dy = \log\frac{2+2\sqrt{2}}{2\sqrt{5}}.
> $$

**修正：**

> $$
> \int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}\,dy = \log\frac{2+2\sqrt{2}}{1+\sqrt{5}}.
> $$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)源图确印分母2sqrt5。独立原函数asinh y=log(y+sqrt(1+y²))给在1与1/2的值差log((2+2sqrt2)/(1+sqrt5))，分母唯一确定，属于源笔误而非API声称源图正确。

**原文：**

> $$
> \int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}\,dy. = \int_{\alpha}^{\beta} \frac{1}{\cosh z}\cosh z\,dz = \beta - \alpha,
> $$

**修正：**

> $$
> \int_{\frac{1}{2}}^1 \frac{1}{\sqrt{1+y^2}}\,dy = \int_{\alpha}^{\beta} \frac{1}{\cosh z}\cosh z\,dz = \beta - \alpha,
> $$

**理由：** [Newton-Leibniz 公式与积分计算](../../01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218.md)原图dy后确有孤立句点而等式继续，相同积分换元y=sinh z后dy=cosh z dz与后续β-α相符；删中途句点恢复一个连续的等式，属于源笔误。

## 未决数学问题

**原文：**

> $$
> = \frac{1}{3} - \frac{1}{3} + \frac{1}{3} = 1.
> $$

**问题：** 印刷原版中此处印有 `= \frac{1}{3} - \frac{1}{3} + \frac{1}{3} = 1.`。算术上 $\frac{1}{3} - \frac{1}{3} + \frac{1}{3} = \frac{1}{3}$，但考虑到例2中分段积分上下限与具体数值前文推导存在多处不一致，无法单凭局部算术推导唯一确定原作者意图，故保持 Markdown 原样并提出不确定性。

[相关正文：20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](../../01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223.md)

## 数学修正

**原文：**

> 我们有 $f$ 在 $[a, c]$ 和 $[c, b]$ 上的限制都是阶梯函数，并且

**修正：**

> 我们有 $f$ 在 $[a, c]$ 和 $[c, b]$ 上的限制都是 Riemann 可积函数，并且

**理由：** [20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](../../01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223.md)原图确误称任意Riemann可积f的两段限制是阶梯函数。反例f(x)=x在任意非退化段都非阶梯，但可积；局部积分可加性应声称两段仍Riemann可积，属于源笔误。

[相关正文：20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](../../01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223.md)

## 数学修正

**原文：**

> $\mu_x = \sum_{k=0}^{n} \binom{n}{j} x^k (1-x)^{n-k} \delta_{\frac{k}{n}}$

**修正：**

> $\mu_x = \sum_{k=0}^{n} \binom{n}{k} x^k (1-x)^{n-k} \delta_{\frac{k}{n}}$

**理由：** [20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](../../01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223.md)源图Bernstein权重二项式下标确误印j，而求和及x幂和Dirac点均以k为指标。修成n choose k，权重由二项式定理总和1，并对应此前W4定义pn,k，属于源笔误。

[相关正文：20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](../../01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223.md)

## 未决数学问题

**原文：**

> 固定 $x_0 \in X$

**问题：** 第三部分开头定义 $K \subset \mathbb{R}^n$ 为紧集，此处的函数与点集均在 $K$ 上讨论。印稿中写为 $x_0 \in X$，其中 $X$ 未在本节中定义，可能是 $x_0 \in K$ 的笔误。由于印稿明确印为 $X$，缺少证明其必然为 $K$ 的绝对证据，故保留原文并提出不确定性。
