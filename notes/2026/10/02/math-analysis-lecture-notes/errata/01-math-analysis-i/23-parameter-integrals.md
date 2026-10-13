# 勘误：23 微积分历史与含参积分

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)

## 未决数学问题

**原文：**

> $$f'(x) = a_1 + 2a_2 x^1 + 3a_3 x^2 + \cdots, \quad \int_0^1 f = a_1 + \frac{a_2}{2} + \frac{a_3}{3} + \cdots.$$

**问题：** 对于 $f(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots$，逐项积分 $\int_0^1 f(x)dx$ 应为 $a_0 + \frac{a_1}{2} + \frac{a_2}{3} + \frac{a_3}{4} + \cdots$。影印件中打印为 $a_1 + \frac{a_2}{2} + \frac{a_3}{3} + \cdots$，遗漏了 $a_0$ 且系数下标错位。因无法单从上下文百分之百确定作者是漏写 $a_0$ 还是原级数定义省略了常数项，故列入不确定项。

[相关正文：微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)

## 数学修正

**原文：**

> $$\frac{1}{\pi} = \int_0^1 y(x)dx = \int_0^1 \sqrt{2x - x^2}\,dx.$$

**修正：**

> $$\frac{\pi}{4} = \int_0^1 y(x)dx = \int_0^1 \sqrt{2x - x^2}\,dx.$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)原图确写1/π，但同段单位圆四分之一面积为π/4且下一式又用π/4。换元x=1-cosθ，积分sqrt(2x-x²)从0至1为∫0^{π/2}sin²θ dθ=π/4。修复明显源笔误，API声称图中π/4不实。

[相关正文：微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)

## 数学修正

**原文：**

> $$\frac{d}{dt}\bigg|_{t=t_0}\left(\int_a^b f(x, t)dx\right) = \int_0^1 \frac{df}{dt}(x, t_0)dx.$$

**修正：**

> $$\frac{d}{dt}\bigg|_{t=t_0}\left(\int_a^b f(x, t)dx\right) = \int_a^b \frac{df}{dt}(x, t_0)dx.$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)源图确写右侧0至1，左侧积分区间[a,b]，任意常数被积函数f(x,t)=t给左导数b-a，原右侧1；右侧也应a至b，属于源笔误。

**原文：**

> $$\frac{F(t + h) - F(t)}{h} = \int_a^b \frac{df}{dt}\left(x, t_0 + \theta(x, h)h\right),$$

**修正：**

> $$\frac{F(t_0 + h) - F(t_0)}{h} = \int_a^b \frac{df}{dt}\left(x, t_0 + \theta(x, h)h\right),$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)求t0处导数，而右边中值点及减去积分均用t0，左差商错误用任意t。令f(x,t)=t²可直接看两边为2t+h与2t0+θh不符，须统一左侧t0。省略dx仍是合法记法，不接受API纯补dx候选。

**原文：**

> $$\frac{F(t + h) - F(t)}{h} - \int_a^b \frac{df}{dt}(x, t_0)dx = \int_a^b \left(\frac{df}{dt}\left(x, t_0 + \theta(x, h)h\right) - \frac{df}{dt}(x, t_0)\right).$$

**修正：**

> $$\frac{F(t_0 + h) - F(t_0)}{h} - \int_a^b \frac{df}{dt}(x, t_0)dx = \int_a^b \left(\frac{df}{dt}\left(x, t_0 + \theta(x, h)h\right) - \frac{df}{dt}(x, t_0)\right).$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)求t0处导数，而右边中值点及减去积分均用t0，左差商错误用任意t。令f(x,t)=t²可直接看两边为2t+h与2t0+θh不符，须统一左侧t0。省略dx仍是合法记法，不接受API纯补dx候选。

**原文：**

> $$\left|\frac{F(t + h) - F(t)}{h} - \int_a^b \frac{df}{dt}(x, t_0)dx\right| < \int_a^b \varepsilon = (b - a)\varepsilon.$$

**修正：**

> $$\left|\frac{F(t_0 + h) - F(t_0)}{h} - \int_a^b \frac{df}{dt}(x, t_0)dx\right| < \int_a^b \varepsilon = (b - a)\varepsilon.$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)求t0处导数，而右边中值点及减去积分均用t0，左差商错误用任意t。令f(x,t)=t²可直接看两边为2t+h与2t0+θh不符，须统一左侧t0。省略dx仍是合法记法，不接受API纯补dx候选。

**原文：**

> 即 $\lim_{h \to 0}\left|\dfrac{F(t + h) - F(t)}{h} - \int_a^b \dfrac{df}{dt}(x, t_0)dx\right| = 0$，这就证明命题。$\square$

**修正：**

> 即 $\lim_{h \to 0}\left|\dfrac{F(t_0 + h) - F(t_0)}{h} - \int_a^b \dfrac{df}{dt}(x, t_0)dx\right| = 0$，这就证明命题。$\square$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)求t0处导数，而右边中值点及减去积分均用t0，左差商错误用任意t。令f(x,t)=t²可直接看两边为2t+h与2t0+θh不符，须统一左侧t0。省略dx仍是合法记法，不接受API纯补dx候选。

**原文：**

> 就有 $|f(x, t) - f(x', t')| < \varepsilon$

**修正：**

> 就有 $|\frac{df}{dt}(x, t) - \frac{df}{dt}(x', t')| < \varepsilon$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)源证明需控制df/dt的差，却误引用f连续模；前句已给df/dt在紧集连续，应使用导数的一致连续性。

**原文：**

> 当 $h < \delta$ 时

**修正：**

> 当 $|h| < \delta$ 时

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)双侧h趋0，负h不能仅h<δ保证点距δ内，中值点距为|θh|≤|h|，需绝对值。

**原文：**

> $$|f(y) - f(x)| < \frac{1}{2}\varepsilon, \quad |f(y') - f(x)| < \frac{1}{2}\varepsilon \quad \Rightarrow \quad |f(y) - f(y')| < \varepsilon.$$

**修正：**

> $$|f(y) - f(x_{i_0})| < \frac{1}{2}\varepsilon, \quad |f(y') - f(x_{i_0})| < \frac{1}{2}\varepsilon \quad \Rightarrow \quad |f(y) - f(y')| < \varepsilon.$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)一致连续性有限子覆盖选定中心xi0，末式却用先前任意x（没有保证y/y′在它球内）；两处中心必须xi0，已证y、y′∈B(xi0,2δi0)。

[相关正文：微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)

## 数学修正

**原文：**

> $$\int_0^\infty x^n e^{-tx} dx = n! \frac{1}{t^n}.$$

**修正：**

> $$\int_0^\infty x^n e^{-tx} dx = n! \frac{1}{t^{n+1}}.$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)原图确印t^n，独立换元u=tx使dx=du/t，xn=u^n/t^n，得到n!/t^(n+1)（t>0），故应补指数1，属于源笔误。

**原文：**

> *2) 我们研究积分 $\displaystyle\int_0^\infty e^{-tx} \frac{\sin x}{x} dx$，其中 $t \in [0, \infty)$。*

**修正：**

> *3) 我们研究积分 $\displaystyle\int_0^\infty e^{-tx} \frac{\sin x}{x} dx$，其中 $t \in [0, \infty)$。*

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)原图底部第三例也印2)，上面Gauss例已2)，故顺序应3)。修复重复源编号并保留原例内容。

**原文：**

> $$\int_0^\infty \frac{e^{-\frac{t^2(1+x^2)}{2}}}{1 + x^2} \leqslant \int_0^\infty \frac{2}{t^2(1+x^2)^2} = \frac{1}{t^2} \times \int_0^\infty \frac{dx}{(1+x^2)^2} = O\!\left(\frac{1}{t^2}\right).$$

**修正：**

> $$\int_0^\infty \frac{e^{-\frac{t^2(1+x^2)}{2}}}{1 + x^2} \leqslant \int_0^\infty \frac{2}{t^2(1+x^2)^2} = \frac{2}{t^2} \times \int_0^\infty \frac{dx}{(1+x^2)^2} = O\!\left(\frac{1}{t^2}\right).$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)源图上一项积分2/[t²(1+x²)²]提出常因子漏2，线性直接给2/t²。末阶O(t^-2)仍正确。

**原文：**

> $$\frac{\pi}{2} = \int_0^\infty F'(t) dt = (-I)^2.$$

**修正：**

> $$\frac{\pi}{2} = -\int_0^\infty F'(t) dt = I^2.$$

**理由：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)原式积分F′=F(∞)-F(0)=-π/2，且F′=-I exp(-t²/2)积分=-I²，左正数应负积分。修正符号后π/2=I²，得到所述Gauss积分。

## 未决数学问题

**原文：**

> 一致连续的函数，所以命题仍然成立

**问题：** [微积分历史与含参积分](../../01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245.md)将紧区间上的微分积分交换直接推广无穷区间，只以一致连续为理由，条件不足。对本例x^n exp(-tx)在t∈[1/2,3/2]可另用可积支配x^n exp(-x/2)严格证，但此为证明补充，先标结构疑点。Gauss F(t)在t=0亦不能用所述同一理由逐点微分，需端点限制t>0。

[相关正文：23.1：作业：ζ(2) 的无理性](../../01-math-analysis-i/23-parameter-integrals/23-03-p0246-0249.md)

## 数学修正

**原文：**

> **第一部分：数列 $\left\{\displaystyle\sum_{k=1}^n \dfrac{1}{k^p}\right\}_{\geqslant 1}$**

**修正：**

> **第一部分：数列 $\left\{\displaystyle\sum_{k=1}^n \dfrac{1}{k^p}\right\}_{n \geqslant 1}$**

**理由：** [23.1：作业：ζ(2) 的无理性](../../01-math-analysis-i/23-parameter-integrals/23-03-p0246-0249.md)原图下标确漏n，只写≥1，序列元素表达式使用上限n，需要n≥1量化序列指标。补入n为源笔误，不添加习题答案。
