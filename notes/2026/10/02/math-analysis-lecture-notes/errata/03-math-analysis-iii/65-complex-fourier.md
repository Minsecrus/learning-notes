# 勘误：65 复分析选读与 L1 Fourier 变换

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> $$a_k = \frac{1}{2\pi i} \int_{|\xi - z_0|=r} \frac{F(\xi)}{(\xi - z_0)^k} dz, \quad r < R.$$

**修正：**

> $$a_k = \frac{1}{2\pi i} \int_{|\xi - z_0|=r} \frac{F(\xi)}{(\xi - z_0)^{k+1}} d\xi, \quad r < R.$$

**理由：** 源图Taylor系数式分母漏+1且微分变量错；几何级数1/(ξ−z)=Σ(z−z0)^k/(ξ−z0)^(k+1)，直接配对可证。

**原文：**

> 任意一个数。。

**修正：**

> 任意一个数。

**理由：** 源图句尾重复句号，删一次即可，保持公式说明。

**原文：**

> $$F(z) = \frac{1}{2\pi i} \int_\gamma \frac{F(\xi)}{\xi - z} dz.$$

**修正：**

> $$F(z) = \frac{1}{2\pi i} \int_{|\xi-z_0|=r} \frac{F(\xi)}{\xi - z} d\xi.$$

**理由：** 源图积分变量为ξ应dξ，为对球内点展开需取围绕z0且含z的半径r圆，与下文|z−z0|<r<R一致。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> $|z - z_0| < \varepsilon$

**修正：**

> $0<|z - z_0| < \varepsilon$

**理由：** 源图零点离散性陈述把零点z0本身也包含在F(z)≠0条件内，必须取去心邻域。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> 一个领域 $B_{\delta_1}(\gamma(t_*))$

**修正：**

> 一个邻域 $B_{\delta_1}(\gamma(t_*))$

**理由：** 源图领域为邻域的误字，所指明确为点附近的小球。

**原文：**

> 如果 $F$ 在 $z_0$ 的一个领域

**修正：**

> 如果 $F$ 在 $z_0$ 的一个邻域

**理由：** 源图领域为邻域误字，此处是局部恒零的小球。

**原文：**

> 由于 $F$ 在 $z_0$ 的一个领域

**修正：**

> 由于 $F$ 在 $z_0$ 的一个邻域

**理由：** 源图领域为邻域误字，此处是局部恒零的小球。

**原文：**

> 我们现在证明 $t = 1$

**修正：**

> 我们现在证明 $t_* = 1$

**理由：** 源图参数t没有固定，而此步需要证明最大延伸参数t*等于1。

**原文：**

> $\gamma^{-1}([0, t_*])$

**修正：**

> $\gamma([0, t_*])$

**理由：** 源图把Ω中的曲线像误写成逆像；[0,t*]是参数集合，应取γ的像，逆像在此不合定义域。

**原文：**

> $$|F^{(n)}(z)| \leqslant \frac{n!}{r^n} \sup_{|\xi - z|=r} |f(\xi)|.$$

**修正：**

> $$|F^{(n)}(z)| \leqslant \frac{n!}{r^n} \sup_{|\xi - z|=r} |F(\xi)|.$$

**理由：** 源图Cauchy导数估计的函数为F，f并未定义，大小写错误。

## 未决数学问题

**原文：**

> 由于 $F$ 在 $\gamma(t_*)$ 的任意一个小邻域中都有零点

**问题：** 源图从路径上有零点推断非孤立零点未保证不同零点，路径可在末端恒等一个零点。修正逆像符号并不能补足此证明。可改用所有导数同时为零的开闭集或邻域恒零点的开闭性来严格传播；原文这一步存在证明缺口，不能仅据连续路径一句断言。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> 对 $|z| \leqslant r' < r$，对任意的 $k \geqslant 0$

**修正：**

> 取 $0<r'<r$，对 $|z|\leqslant r'$ 及任意的 $k\geqslant1$

**理由：** 源图导数项ka_k z^(k−1)需要k≥1，且几何级数比较需r′正；选0<r′<r即可覆盖任何球内点。

**原文：**

> $$|k a_k z^{k-1}| \leqslant M \frac{k}{r} \underbrace{\left( \frac{r'}{r} \right)^k}_{b_k}.$$

**修正：**

> $$|k a_k z^{k-1}| \leqslant \frac{M}{r} \underbrace{k\left( \frac{r'}{r} \right)^{k-1}}_{b_k}.$$

**理由：** 源图|ka_k z^(k−1)|的界需(M/r)k(r′/r)^(k−1)而非k次方，且b_k必须包含k才有后文比值(1+1/k)r′/r。

**原文：**

> 上面的的式子

**修正：**

> 上面的式子

**理由：** 源图的重复出现，删除一次即可保留逐项求导结论。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> 假设 $F(z)$ 是区域 $\Omega \subset \mathbb{C}$ 上的复解析函数，那么 $|F(z)|$ 的最大值，如果能取到的话，一定在 $\Omega$ 的边界 $\partial\Omega$ 上取到。

**修正：**

> 假设 $F(z)$ 是连通区域 $\Omega \subset \mathbb{C}$ 上的复解析函数。如果 $F$ 非常值，则 $|F|$ 不能在 $\Omega$ 的内部取到最大值；如果 $F$ 还连续延拓到 $\overline{\Omega}$，那么 $|F|$ 在 $\overline{\Omega}$ 上的最大值（如果能取到）只能在边界 $\partial\Omega$ 上取到。

**理由：** 源图无边界延拓假设却称F在边界取值，且常数整函数反例有内部最大值但边界空。给出连通域内非常值模不取最大值、连续延拓后的边界版本，保留后文常值例外。

**原文：**

> $$|F(z_0)| = \sup_{z\in\Omega} |f(z)|.$$

**修正：**

> $$|F(z_0)| = \sup_{z\in\Omega} |F(z)|.$$

**理由：** 源图最大模证明的f未定义，应是已定义的复解析函数F。

**原文：**

> $$
> \begin{aligned}
> |F(z_0)| &= \left| \frac{1}{2\pi} \int_0^{2\pi} f(z_0 + r e^{i\theta}) d\theta \right| \\
> &\leqslant \frac{1}{2\pi} \int_0^{2\pi} \|F\|_{L^\infty} d\theta \\
> &= \frac{1}{2\pi} \int_0^{2\pi} |F(z_0)| d\theta \\
> &= |F(z_0)|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |F(z_0)| &= \left| \frac{1}{2\pi} \int_0^{2\pi} F(z_0 + r e^{i\theta}) d\theta \right| \\
> &\leqslant \frac{1}{2\pi} \int_0^{2\pi} \|F\|_{L^\infty} d\theta \\
> &= \frac{1}{2\pi} \int_0^{2\pi} |F(z_0)| d\theta \\
> &= |F(z_0)|.
> \end{aligned}
> $$

**理由：** 源图Cauchy平均公式被积函数写f，应为同一函数F。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 当|z|→0时|P(z)|→∞

**正文：**

> 当 $|z| \to \infty$ 时

**理由：** 源图非恒定多项式增长极限误写0，canonical已正确写∞。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> $\xi^m = -\overline{a_m}$

**修正：**

> $\xi^m = \overline{a_m}$

**理由：** 源图选负方向会使模变小，不能与最大值矛盾；选正的共轭方向使主增量为正实数。

**原文：**

> $$F(\delta\xi) = a_0 - \delta^m |a_m|^2 + O(\delta^{m+1}).$$

**修正：**

> $$F(\delta\xi) = a_0 + \delta^m |a_m|^2 + O(\delta^{m+1}).$$

**理由：** 与修正后的ξ^m=bar(a_m)一致，a_mξ^m=|a_m|²，使小δ下模大于a0，与极大模假设矛盾。

**原文：**

> 我们经常取把

**修正：**

> 我们经常取

**理由：** 源图取把重复动词，删除把即可，仍允许内半径0。

**原文：**

> $$a_k = \frac{1}{2\pi i} \int_{|z|=r} \frac{F(z)}{z^k} dz = \frac{1}{2\pi r^k} \int_0^{2\pi} e^{-ik\theta} F(r e^{ik\theta}) d\theta.$$

**修正：**

> $$a_k = \frac{1}{2\pi i} \int_{|z|=r} \frac{F(z)}{z^{k+1}} dz = \frac{1}{2\pi r^k} \int_0^{2\pi} e^{-ik\theta} F(r e^{i\theta}) d\theta.$$

**理由：** 源图Laurent系数公式漏+1，积分zk项的系数需乘z^(−k−1)。

**原文：**

> $$a_k = \frac{1}{2\pi i} \int_{|z|=r} \frac{F(z)}{z^k} dz = \frac{1}{2\pi r^k} \int_0^{2\pi} e^{-ik\theta} F(r e^{ik\theta}) d\theta.$$

**修正：**

> $$a_k = \frac{1}{2\pi i} \int_{|z|=r} \frac{F(z)}{z^{k+1}} dz = \frac{1}{2\pi r^k} \int_0^{2\pi} e^{-ik\theta} F(r e^{i\theta}) d\theta.$$

**理由：** 源图圆周参数z=r exp(iθ)，不是exp(ikθ)，与前式dθ及Fourier因子e^(−ikθ)一致。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> F(δ)=a0−δm|am|+O(δm+1)

**正文：**

> $$F(\delta\xi) = a_0 + \delta^m |a_m|^2 + O(\delta^{m+1}).$$

**理由：** 源图少ξ且模平方少2，canonical已正确修复这两项；其负方向另有source_typo候选。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> $$\frac{1}{\xi - z} = \frac{1}{z} \frac{1}{1 - \frac{\xi}{z}} = \frac{1}{z} \sum_{k=0}^\infty \left(\frac{\xi}{z}\right)^k.$$

**修正：**

> $$\frac{1}{\xi - z} = -\frac{1}{z} \frac{1}{1 - \frac{\xi}{z}} = -\frac{1}{z} \sum_{k=0}^\infty \left(\frac{\xi}{z}\right)^k.$$

**理由：** 源图|z|>|ξ|时1/(ξ−z)=−(1/z)/(1−ξ/z)，两次等号右边都漏负号。

**原文：**

> $$F(z) = \frac{1}{2\pi i} \int_{C'_2} \frac{F(\xi)}{\xi} \sum_{k=0}^\infty \left(\frac{z}{\xi}\right)^k d\xi - \frac{1}{2\pi i} \int_{C'_1} \frac{F(\xi)}{z} \sum_{k=0}^\infty \left(\frac{\xi}{z}\right)^k d\xi.$$

**修正：**

> $$F(z) = \frac{1}{2\pi i} \int_{C'_2} \frac{F(\xi)}{\xi} \sum_{k=0}^\infty \left(\frac{z}{\xi}\right)^k d\xi + \frac{1}{2\pi i} \int_{C'_1} \frac{F(\xi)}{z} \sum_{k=0}^\infty \left(\frac{\xi}{z}\right)^k d\xi.$$

**理由：** 源图内圈积分原先前有−，几何级数展开核又有−，两者相乘应正的内圈展开。

**原文：**

> $$F(z) = \sum_{k=-\infty}^\infty a_k z^k.$$

**修正：**

> $$F(z) = \sum_{k=-\infty}^\infty a_k (z-z_0)^k.$$

**理由：** 源图定义443在z0去心邻域展开，基必须为(z−z0)^k，而非以0为中心的zk。

**原文：**

> 其中的 $z^{-1}$ 的系数

**修正：**

> 其中的 $(z-z_0)^{-1}$ 的系数

**理由：** 源图留数取z0为中心Laurent展开的−1次系数，故需(z−z0)−1。

**原文：**

> $$\operatorname{Res}(F; z_0) = \frac{1}{2\pi i} \int_{|z-z_0|=r} F(z) dz.$$

**修正：**

> $$\operatorname{Res}(F; z_0) = \frac{1}{2\pi i} \int_{|z-z_0|=\rho} F(z) dz,\quad 0<\rho<r.$$

**理由：** 源图只假设F在0<|z−z0|<r全纯，边界半径r处可能无定义；应取任意严格较小正半径ρ。

**原文：**

> 这因为 Laurent

**修正：**

> 这是因为 Laurent

**理由：** 源图解释语缺是字，补全即可，保留其他幂积分为0的论证。

**原文：**

> 使得 $z \in \Omega - \bigcup_{k\leqslant N} B_\varepsilon(z_k)$

**修正：**

> 使得这些小圆盘两两不交，并且其闭包均包含在 $\mathring{\Omega}$ 中

**理由：** 源图z未在证明中给定，此处抠孔需要圆盘彼此不交且严格位于区域内部，以使边界分解及留数积分有效。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> $$e^{iz_0} - e^{-iz_0} = 0 \quad \iff \quad e^{2iz_0} = 1 \quad \iff \quad z_0 \in \mathbb{Z}.$$

**修正：**

> $$e^{iz_0} - e^{-iz_0} = 0 \quad \iff \quad e^{2iz_0} = 1 \quad \iff \quad z_0 \in \pi\mathbb{Z}.$$

**理由：** 源图sin z零点是π整数倍，由e^(2iz0)=1⇒2iz0=2πik直接得z0=πk；sin(πz)才在Z上为零。

**原文：**

> $\sin(z)'\big|_{z=n} \neq 0$，所以，$\sin(z)$

**修正：**

> $\frac{d}{dz}\sin(\pi z)\big|_{z=n} =\pi(-1)^n\neq0$，所以，$\sin(\pi z)$

**理由：** 源图整数处的分母为sin(πz)，该零点导数π(−1)^n非零；sin z在整数n一般根本不是零点。

**原文：**

> 利用 $z = x + iy$，我们很容易看出

**修正：**

> 对 $z\in\partial Q_n$，利用 $z = x + iy$，我们很容易看出

**理由：** 源图O(1/n²)仅在正方形边界成立，不是全复平面对固定a一致估计，补出与留数积分相同的区域。

[相关正文：复分析选读与 L1 Fourier 变换](../../03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789.md)

## 数学修正

**原文：**

> $g(z)$ 再每个

**修正：**

> $g(z)$ 在每个

**理由：** 源图再为在的误字，此句定位Laurent展开的整数点。

**原文：**

> 由于 $\sin(\pi z)$ 的零点是单零点

**修正：**

> 由于 $\sin(\pi z)$ 在每个整数点有单零点，且 $\sin(\pi(n+w))=(-1)^n\sin(\pi w)$ 是 $w$ 的奇函数

**理由：** 源图仅单零点不足以断言负幂一致，平方倒数还可能有−1次项；这里移到整数的sin是奇函数，平方倒数为偶函数，故主部仅1/w²，与f主部相同。

**原文：**

> 对于任意的 $x \in [0, 1]$, 我们很容易证明下面的极限:

**修正：**

> 对于 $x\in[0,1]$，下面的极限关于 $x$ 一致成立:

**理由：** 源图只有逐x极限不能单独推出整个周期条带有界；sin项随|y|指数衰减，Σn1/((x−n)²+y²)=O(1/|y|)在x∈[0,1]一致，故F极限一致为0。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> 假设 $E'$ 在 $E$ 中是稠密的。

**修正：**

> 假设 $E'$ 在 $E$ 中是稠密的，并且 $F$ 是完备的。

**理由：** 源图连续线性映射稠密延拓缺目标空间完备条件；例如E=C[0,1]、E′=多项式、F=同范数多项式，恒等映射无值于F的连续延拓。

**原文：**

> $\{f_k\}_{k \geqslant 1} \subset C(\mathbb{R}^n)$

**修正：**

> $\{f_k\}_{k \geqslant 1} \subset C_\circ(\mathbb{R}^n)$

**理由：** 源图证明C圈闭性时序列需取其中，而非任意连续函数；否则后文fN∈C圈不成立（常数列1反例）。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> $\widehat{\varphi} \in C_\circ(\mathbb{R}^n)$ 的连续性

**修正：**

> $\widehat{\varphi}$ 的连续性及其在无穷远处的衰减（由此说明它属于 $C_\circ(\mathbb{R}^n)$）

**理由：** 源图此处需要证明属于C圈，包含连续性和趋0两个条件，后文也分两步证明；不能只称证明连续性。

**原文：**

> $\xi_k \to x$

**修正：**

> $\xi_k \to \xi$

**理由：** 源图频率点列极限目标下文为ξ，x是物理变量，应统一ξ。

**原文：**

> 当 $\xi \to \infty$

**修正：**

> 当 $|\xi| \to \infty$

**理由：** 源图频率是Rn向量，趋于无穷表示其范数趋∞，需绝对值。

**原文：**

> 想法与第一学期我们学过的 Riemann-Lebesgue 引理。

**修正：**

> 想法与第一学期我们学过的 Riemann-Lebesgue 引理一致。

**理由：** 源图句尾缺谓语一致，补全与前面分部积分想法的比较。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> $$ \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{C}, \quad (x, \xi) \mapsto e^{-ix \cdot \xi} f(\xi) g(x) $$

**修正：**

> $$ \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{C}, \quad (x, \xi) \mapsto e^{-ix \cdot \xi} f(x) g(\xi) $$

**理由：** 源图命题450的Fubini核把f、g的变量互换；展开widehat f(ξ)g(ξ)时应f(x)g(ξ)，与下一行末式一致。

**原文：**

> $$ \begin{aligned} \int_{\mathbb{R}^n} \widehat{f}(\xi) g(\xi) d\xi &= \int_{\mathbb{R}^{2n}} e^{-ix \cdot \xi} f(\xi) g(x) dx d\xi \\ &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} g(\xi) e^{-ix\xi} d\xi \right) f(x) dx \\ &= \int_{\mathbb{R}^n} f(x) \widehat{g}(x) dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \int_{\mathbb{R}^n} \widehat{f}(\xi) g(\xi) d\xi &= \int_{\mathbb{R}^{2n}} e^{-ix \cdot \xi} f(x) g(\xi) dx d\xi \\ &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} g(\xi) e^{-ix\cdot\xi} d\xi \right) f(x) dx \\ &= \int_{\mathbb{R}^n} f(x) \widehat{g}(x) dx. \end{aligned} $$

**理由：** 源图配对展开使用错误变量f(ξ)g(x)，应从f的物理x和g的频率ξ展开成f(x)g(ξ)。

**原文：**

> $$ \begin{aligned} \int_{\mathbb{R}^n} \widehat{f}(\xi) g(\xi) d\xi &= \int_{\mathbb{R}^{2n}} e^{-ix \cdot \xi} f(\xi) g(x) dx d\xi \\ &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} g(\xi) e^{-ix\xi} d\xi \right) f(x) dx \\ &= \int_{\mathbb{R}^n} f(x) \widehat{g}(x) dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \int_{\mathbb{R}^n} \widehat{f}(\xi) g(\xi) d\xi &= \int_{\mathbb{R}^{2n}} e^{-ix \cdot \xi} f(x) g(\xi) dx d\xi \\ &= \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} g(\xi) e^{-ix\cdot\xi} d\xi \right) f(x) dx \\ &= \int_{\mathbb{R}^n} f(x) \widehat{g}(x) dx. \end{aligned} $$

**理由：** 源图此命题n维积分，x与ξ需取欧氏内积，不能把两个向量并置相乘。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> 然而，对于 $\varphi \in \mathcal{D}(\mathbb{R}^n)$

**修正：**

> 然而，对于非零的 $\varphi \in \mathcal{D}(\mathbb{R}^n)$

**理由：** 源图断言试验函数Fourier变换不在D需排除φ=0，零函数及其变换都有紧支集。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> 我们一下给出

**修正：**

> 我们下面给出

**理由：** 源图一下缺完整承接语，后文确为两种计算方法。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> F(ξ)=√(2π)作为初始条件

**正文：**

> $$\begin{cases}
>   F'(\xi) + \xi F(\xi) = 0, \\
>   F(0) = \sqrt{2\pi}
>   \end{cases}$$

**理由：** 源图ODE初值误写Fξ=常数，canonical已正确改为F0，与Gaussian积分一致。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> 作为长方形的上的积分（逆时针）

**修正：**

> 作为顶点的长方形边界上的积分，方向为 $(-n,0)\to(n,0)\to(n,\xi)\to(-n,\xi)\to(-n,0)$

**理由：** 源图句法缺边界，且ξ<0时该轮廓为顺时针；显式给出一致方向，闭路积分无论正负ξ均为0。

**原文：**

> $$\left( \int_{-n \le x \le n, y=0} + \int_{x=n, 0 \le y \le \xi} - \int_{-n \le x \le n, y=\xi} - \int_{x=-n, 0 \le y \le \xi} \right) e^{-\frac{z^2}{2}} d z = 0.$$

**修正：**

> $$\left( \int_{-n \le x \le n, y=0} + \int_{x=n, y:0\to\xi} - \int_{-n \le x \le n, y=\xi} - \int_{x=-n, y:0\to\xi} \right) e^{-\frac{z^2}{2}} d z = 0.$$

**理由：** 源图竖边积分用0≤y≤ξ在ξ<0时为空，不能给负频率Gaussian变换证明；按定向参数y从0到ξ积分，原四段正负号均正确。

**原文：**

> 上面的得到的

**修正：**

> 上面得到的

**理由：** 源图的多余，删去即可保留Fourier逆变换定义说明。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> e^(z²/2)=e^(-(x²−y²)/2)e^(xyi)

**正文：**

> $$e^{-\frac{z^2}{2}} = e^{-\frac{x^2-y^2}{2}} e^{-x y i}, \quad |y| \le |\xi|,$$

**理由：** 源图左边指数负号漏、右边相位负号漏；canonical已正确完成平方，沿竖边实部指数衰减。

[相关正文：65.1：L1 Fourier 变换与逆变换](../../03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \mathcal{F}^{-1}\left( \widehat{G}_\lambda(\xi) \right)(-x) &= \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} e^{-\frac{\lambda^2 |\xi|^2}{2}} e^{-i x \cdot \xi} d \xi \\
> &= \frac{1}{(2\pi)^n} \left( \mathcal{F}\left( e^{-\frac{\lambda^2 |\xi|^2}{2}} \right) \right)(x) \\
> &= G_\lambda.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \mathcal{F}^{-1}\left( \widehat{G}_\lambda(\xi) \right)(-x) &= \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} e^{-\frac{\lambda^2 |\xi|^2}{2}} e^{-i x \cdot \xi} d \xi \\
> &= \frac{1}{(2\pi)^n} \left( \mathcal{F}\left( e^{-\frac{\lambda^2 |\xi|^2}{2}} \right) \right)(x) \\
> &= G_\lambda(x).
> \end{aligned}$$

**理由：** 源图左侧是−x处的逆变换取值，右侧需Gaussian函数在x处取值；Gaussian偶性使−x与x一致。

**原文：**

> 控制函数就选 $\widehat{f}$

**修正：**

> 控制函数就选 $|\widehat{f}|$

**理由：** 源图hat f可为复值，Lebesgue控制收敛的可积控制函数应非负绝对值|hat f|。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> F^−1 hatf的第一行因子1/(2π)^(2n)

**正文：**

> $$\begin{aligned}
> \mathcal{F}^{-1}(\widehat{f})(x) &= \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} e^{i \xi \cdot x} \widehat{f}(\xi) d \xi \\
> &= \lim_{\lambda \to 0} \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \widehat{G}_\lambda(\xi) e^{i \xi \cdot x} \widehat{f}(\xi) d \xi,
> \end{aligned}$$

**理由：** 源图逆变换第一个归一化因子多n次方，canonical已正确写(2π)^−n。

**原讲义片段：**

> 用Gaussian逆变换后仍多1/(2π)^n

**正文：**

> $$\begin{aligned}
> \mathcal{F}^{-1}(\widehat{f})(x) &= \lim_{\lambda \to 0} \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \underbrace{\int_{\mathbb{R}^n} \widehat{G}_\lambda(\xi) e^{i\xi \cdot (x-y)} d\xi}_{\text{Fourier 逆变换}} f(y) d y \\
> &= \lim_{\lambda \to 0} \int_{\mathbb{R}^n} G_\lambda(x-y) f(y) d y \\
> &= \lim_{\lambda \to 0} G_\lambda * f.
> \end{aligned}$$

**理由：** 源图Gaussian逆变换已经吸收(2π)^−n因子，canonical正确删去重复因子。
