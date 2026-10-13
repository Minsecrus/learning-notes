# 勘误：26 第二积分中值定理与 Stieltjes 积分

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> 线段 $[G(a), G(\xi)]$ 或者 $[G(\xi), G(a)]$

**修正：**

> 线段 $[G(b), G(\xi)]$ 或者 $[G(\xi), G(b)]$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)前式凸组合明确用G(b)、Gξ，源文误将b写a。因0≤f(b)/f(a)≤1，组合在这两个值之间，应G(b)。

**原文：**

> $c \in [a, \xi]$

**修正：**

> $c \in [\xi, b]$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)连续函数G在ξ和b之间取前式凸组合值，不能保证a至ξ。原区间与前面的两个取值不符，修成ξ至b，仍包含于定理[a,b]。

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> 此时定理显然成立。我们定义

**修正：**

> 此时定理显然成立）。我们定义

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源图否则说明有左括号缺右括号，恢复条件分支解释范围，不改f(a)=0蕴含f≡0（非负递减）。

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> $\rho \in \mathbb{R}\bigl([a, b]\bigr)$

**修正：**

> $\rho \in \mathcal{R}\bigl([a, b]\bigr)$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源图R类型误为实数记号，此处rho是非负Riemann可积函数，mathcal R([a,b])才是定义的函数集合，与[第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)同一练习明确mathcal R一致。

**原文：**

> $\sigma = \{a = a_0 < a_1 < \cdots < x_n - 1 < a_n = b\}$

**修正：**

> $\sigma = \{a = a_0 < a_1 < \cdots < a_{n-1} < a_n = b\}$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)分划全用ai，倒数第二分割点错成xn-1；源图也同误，恢复a_(n-1)与随后区间/求和对应。

**原文：**

> 所定义的的 Darboux

**修正：**

> 所定义的 Darboux

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源图重复的字，删除重复不改定义。

**原文：**

> 我们 j 记

**修正：**

> 我们记

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)原图“我们j记”误入孤立拉丁字j，j在此不充当数学变量，删除。

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> $\sigma = \{a = a_0 < a_1 < \cdots < x_{n-1} < a_n = b\}$

**修正：**

> $\sigma = \{a = a_0 < a_1 < \cdots < a_{n-1} < a_n = b\}$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源图分割点指标用a，仅倒数第二误写x，恢复已定义分划ai。

**原文：**

> $$\left|\sum_{i=1}^n f(\xi_i) \cdot l([a_{i_1}, a_i]) - \int_a^b f d\mu\right| < \varepsilon.$$

**修正：**

> $$\left|\sum_{i=1}^n f(\xi_i) \cdot \ell_\mu([a_{i-1}, a_i]) - \int_a^b f d\mu\right| < \varepsilon.$$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源式区间端点下标误i1，且权重必须是重新定义的长度ell_mu=μ(ai)-μ(ai-1)，不能用普通长度。该式近似Stieltjes积分，从Darboux权重唯一确定。

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> $$\underline{S}_\mu(f; \sigma) \leqslant \sum_{i=1}^n f(\xi_i) \cdot \ell([a_{i_1}, a_i]) \leqslant \overline{S}_\mu(f; \sigma).$$

**修正：**

> $$\underline{S}_\mu(f; \sigma) \leqslant \sum_{i=1}^n f(\xi_i) \cdot \ell_\mu([a_{i-1}, a_i]) \leqslant \overline{S}_\mu(f; \sigma).$$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源式继承错误区间端点i1与缺μ权重，恢复ell_mu使上下和夹逼中间项合法；普通长度时任意μ不成立。

**原文：**

> $$< \varepsilon \sum_{i=1}^n (\mu(a_i) - \mu(a_{i-1})) = \ell_\mu([a, b])\varepsilon.$$

**修正：**

> $$\leqslant \varepsilon \sum_{i=1}^n (\mu(a_i) - \mu(a_{i-1})) = \ell_\mu([a, b])\varepsilon.$$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)μ允许常函数，全部增量0时原0<0错误；由各正增量估计一般应≤，仍可将ε任意小证明可积。

**原文：**

> $$< \sum_{i=1}^n \frac{\mu(b) - \mu(a)}{n}(f(a_i) - f(a_{i-1}))$$

**修正：**

> $$= \sum_{i=1}^n \frac{\mu(b) - \mu(a)}{n}(f(a_i) - f(a_{i-1}))$$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)已选择μ(ai)-μ(ai-1)恰等于(μb-μa)/n，替换得到等号，源严格小于错误（f或μ常函数时0<0）。

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> 那么对于 $|f| \in \mathcal{R}([a, b]; \mu)$

**修正：**

> 那么 $|f| \in \mathcal{R}([a, b]; \mu)$

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源句多对于导致命题谓语不通，保持绝对值可积结论。

[相关正文：26：第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)

## 数学修正

**原文：**

> 等式取极限立的

**修正：**

> 等式取极限成立的

**理由：** [第二积分中值定理与 Stieltjes 积分](../../01-math-analysis-i/26-stieltjes-integral.md)源句缺成字，恢复取极限成立。
