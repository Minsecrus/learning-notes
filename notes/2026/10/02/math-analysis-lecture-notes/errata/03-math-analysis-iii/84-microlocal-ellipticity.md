# 勘误：84 微局部椭圆正则性与奇性传播

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> paramatrix

**修正：**

> parametrix

**理由：** 原图拟解的标准英文名称拼写误a，应为parametrix。

**原文：**

> 单色波来来计算

**修正：**

> 单色波来计算

**理由：** 原图重复来字，删一字不变数学内容。

**原文：**

> 它的 $P$ 的**主象征**

**修正：**

> 它的**主象征**

**理由：** 原图重复主语它与P，保留P已定义后的它指代。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> 相函数为 $-x \cdot \xi$

**修正：**

> 相函数为 $x \cdot \xi$

**理由：** lemma550定义振荡因子e^-iφ，此页e^-ix·xi对应φ=x·xi，原负号会反转WF方向。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> paramatrix

**修正：**

> parametrix

**理由：** 原图拟解标准英文名称同968拼写误a。

**原文：**

> $c(x, \xi)$ 对每个固定的 $\xi$ 都是 $\xi$ 的 $d$-次齐次函数

**修正：**

> $c(x, \xi)$ 对每个固定的 $x$ 都是 $\xi$ 的 $d$-次齐次函数

**理由：** 频率齐次性需要固定物理变量x，原图两次写固定xi。

**原文：**

> $c(x, \xi)$ 对每个固定的 $\xi$ 都是 $\xi$ 的 $d+m-k$-次齐次函数

**修正：**

> $c_k(x, \xi)$ 对每个固定的 $x$ 都是 $\xi$ 的 $d+m-k$-次齐次函数

**理由：** 各余项ck次数d+m−k，非原c的次数；同时固定变量应x。

**原文：**

> 它的次数是 $d+m-k$

**修正：**

> 它的次数是 $d+m$

**理由：** 该句刚定义c0，k=0故次数d+m，原残留泛k为笔误。

**原文：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( \underbrace{e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi)}_{c_\alpha(x)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m-1} \pm \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{|\gamma|=k} \pm \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{\geqslant d+m-k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( e^{-ix \cdot \xi} \underbrace{p_\alpha(x) c(x, \xi)}_{c_\alpha(x,\xi)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m} (-1)^{|\alpha|} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{\substack{|\gamma|=k,\ \gamma\leqslant\alpha\\|\alpha|\leqslant m}} (-1)^{|\alpha|}(-i)^k \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{d+k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**理由：** 源图brace只覆盖pαc，canonical误连波因子；后续Leibniz另对波求导，cα只能是振幅。

**原文：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( \underbrace{e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi)}_{c_\alpha(x)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m-1} \pm \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{|\gamma|=k} \pm \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{\geqslant d+m-k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( e^{-ix \cdot \xi} \underbrace{p_\alpha(x) c(x, \xi)}_{c_\alpha(x,\xi)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m} (-1)^{|\alpha|} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{\substack{|\gamma|=k,\ \gamma\leqslant\alpha\\|\alpha|\leqslant m}} (-1)^{|\alpha|}(-i)^k \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{d+k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**理由：** 扣去|γ|=m后仍包含|α|=m、|γ|<m的振幅求导项，原≤m−1错误丢项；前式决定精确符号(-1)^|α|。

**原文：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( \underbrace{e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi)}_{c_\alpha(x)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m-1} \pm \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{|\gamma|=k} \pm \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{\geqslant d+m-k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( e^{-ix \cdot \xi} \underbrace{p_\alpha(x) c(x, \xi)}_{c_\alpha(x,\xi)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m} (-1)^{|\alpha|} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{\substack{|\gamma|=k,\ \gamma\leqslant\alpha\\|\alpha|\leqslant m}} (-1)^{|\alpha|}(-i)^k \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{d+k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**理由：** 原sum未量化alpha，波求γ阶导带(-i)^k不能由实±替代；按上一行Leibniz式补全alpha求和与精确复系数。

**原文：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( \underbrace{e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi)}_{c_\alpha(x)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m-1} \pm \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{|\gamma|=k} \pm \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{\geqslant d+m-k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \partial^\alpha \left( e^{-ix \cdot \xi} \underbrace{p_\alpha(x) c(x, \xi)}_{c_\alpha(x,\xi)} \right) \\
> &= \sum_{|\alpha| \leqslant m} (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \left( \sum_{|\alpha|=m} + \sum_{|\alpha|<m} \right) (-1)^\alpha \sum_{\gamma \leqslant \alpha} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\gamma|=m} (-1)^m \partial^\gamma \left( e^{-ix \cdot \xi} \right) \cdot c_\gamma(x) + \sum_{\gamma \leqslant \alpha, |\gamma| \leqslant m-1, |\alpha| \leqslant m} (-1)^{|\alpha|} \binom{\alpha}{\gamma} \partial^\gamma \left( e^{-ix \cdot \xi} \right) \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right) \\
> &= \sum_{|\alpha|=m} (i\xi)^\alpha e^{-ix \cdot \xi} p_\alpha(x) c(x, \xi) + \sum_{0 \leqslant k \leqslant m-1} \sum_{\substack{|\gamma|=k,\ \gamma\leqslant\alpha\\|\alpha|\leqslant m}} (-1)^{|\alpha|}(-i)^k \binom{\alpha}{\gamma} e^{-ix \cdot \xi} \underbrace{\xi^\gamma \partial^{\alpha-\gamma} \left( c_\alpha(x, \xi) \right)}_{d+k \text{ 次}} \\
> &= e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi).
> \end{aligned}
> $$

**理由：** 该行k=|γ|，xi^γ为k次、x导数不变cα频率d次，乘积恰d+k；原d+m−k与≥均不符。最终按缺失次数m−k重编号为ck则d+m−k。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> e^{-x\cdot\xi}
> ```

**正文：**

> $$
> {}^t P \left( e^{-ix \cdot \xi} c(x, \xi) \right) = e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) c(x, \xi) + e^{-ix \cdot \xi} \sum_{1 \leqslant k \leqslant m} c_k(x, \xi),
> $$

**理由：** 原图lemma552首尾余项漏i，canonical已按整个振荡计算恢复i。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> & {}^t P \left( e^{-ix \cdot \xi} [a_0(x, \xi) + a_1(x, \xi)] \right) - e^{-ix \cdot \xi} \varphi(x) \\
> =& e^{-ix \cdot \xi} R_0(x, \xi) + {}^t P \left( e^{-ix \cdot \xi} a_1(x, \xi) \right) \\
> =& e^{-ix \cdot \xi} R_0(x, \xi) + e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) a_1(x, \xi) + O((-m-1)+m-1)
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> & {}^t P \left( e^{-ix \cdot \xi} [a_0(x, \xi) + a_1(x, \xi)] \right) - e^{-ix \cdot \xi} \varphi(x) \\
> =& e^{-ix \cdot \xi} R_0(x, \xi) + {}^t P \left( e^{-ix \cdot \xi} a_1(x, \xi) \right) \\
> =& e^{-ix \cdot \xi} R_0(x, \xi) + e^{-ix \cdot \xi} (-1)^m p_m(x, \xi) a_1(x, \xi) + e^{-ix\cdot\xi} O((-m-1)+m-1)
> \end{aligned}
> $$

**理由：** 源图余项齐次O是频率振幅，应用lemma552仍需e^-ix·xi整体相位；该页前后R均带相位。

**原文：**

> $R_0(x, \xi)$ 对是有限个

**修正：**

> $R_0(x, \xi)$ 是有限个

**理由：** 原图对是为重复多余字，陈述是有限个频率齐次函数的和。

**原文：**

> $R_1(x, \xi)$ 对是有限个

**修正：**

> $R_1(x, \xi)$ 是有限个

**理由：** 原图对是为重复多余字，陈述是有限个频率齐次函数的和。

**原文：**

> $R_k(x, \xi)$ 对是有限个

**修正：**

> $R_k(x, \xi)$ 是有限个

**理由：** 原图对是为重复多余字，陈述是有限个频率齐次函数的和。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 此时d=m

**正文：**

> $d = -m$

**理由：** 原图写d=m，canonical已正确以1/p_m齐次次数−m改正。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> 存在紧集 $K \subset \Omega$, $x_0 \in \Omega$

**修正：**

> 存在紧集 $K \subset \Omega$, $x_0 \in \mathring K$

**理由：** 原图x0仅在Omega不足以支持非零局部试验函数；pm非零与WF局部定义可选包含x0于内部的紧邻域K。

**原文：**

> $K' \subset K$, $x_0 \in K'$

**修正：**

> $K' \subset \mathring K$, $x_0 \in \mathring K'$

**理由：** 较小紧邻域K′应含x0于内部且落K内部，973才存在在K′邻域恒1并支持于K的光滑psi。

**原文：**

> 利用 $u$ 是分布(的定义), 存在常数 $C_0$, 使得,

**修正：**

> 利用 $u$ 是分布(的定义), 存在非负整数 $M$ 和常数 $C_0$, 使得,

**理由：** 紧集上分布有限阶M与算子阶m无关，原图复用m并无保证；用独立M并联动下文。

**原文：**

> $$ |J(\xi)| \le C \sup_{\substack{|\alpha| \le m, \\ x \in K}} \left| \partial^\alpha \left( e^{-i x \cdot \xi} R_k(x, \xi) \right) \right|. $$

**修正：**

> $$ |J(\xi)| \le C \sup_{\substack{|\alpha| \le M, \\ x \in K}} \left| \partial^\alpha \left( e^{-i x \cdot \xi} R_k(x, \xi) \right) \right|. $$

**理由：** 承紧集分布阶M，不能假定任意u的阶≤微分算子m。

**原文：**

> $$ \sup_{\substack{|\alpha| \le m - k - 1, \\ (x, \xi) \in K \times S^{n-1}}} |\partial^\alpha R_k(x, \xi)| \le C_m. $$

**修正：**

> $$ \sup_{\substack{|\alpha|\le M,\\(x,\xi)\in K\times(S^{n-1}\cap\overline{\Gamma(\xi_0,\beta')})}}|\partial^\alpha R_k(x,\xi)|\le C_{M,k}. $$

**理由：** 需要控制的是至多M阶x导，原m−k−1可为负；振幅仅定义于Gamma(beta)，在较小闭子锥的单位截面紧性给有限界，常数也依k。

**原文：**

> 首先处理 $J(\xi)$。固定 $\xi$,

**修正：**

> 首先处理 $J(\xi)$。固定 $\xi\in\Gamma(\xi_0,\beta')$ 且 $|\xi|\ge1$,

**理由：** 齐次负阶振幅在0可奇异，拟解只需大频率与较小锥的估计；fu紧支Fourier连续使最终WF衰减可把有限频率吸收常数。

**原文：**

> $$ |J(\xi)| \le \frac{C'_m}{(1 + |\xi|)^{m - k - 1}}, $$

**修正：**

> $$ |J(\xi)| \le \frac{C'_{M,k}}{(1 + |\xi|)^{k + 1 - M}}, $$

**理由：** 模大小O(|xi|^(M−k−1))写成分母时应指数k+1−M，原分母符号反向会随k增长。

**原文：**

> 上面右端出现的是一些次数不超过 $m - k - 1$ 的齐次函数的和。

**修正：**

> 上面右端的模可由一些次数不超过 $M - k - 1$ 的齐次函数的模之和控制。

**理由：** 波相位仍在导数中但模为1，Leibniz给振幅项的多项式模上界而非整个带波函数本身齐次；分布阶M加Rk阶≤−k−1，控制次数M−k−1。

**原文：**

> 存在常数 $C_m$, 使得

**修正：**

> 存在常数 $C_{M,k}$, 使得

**理由：** 上界由分布阶M和固定的拟解编号k决定，紧后sup式同用C_Mk，与已修独立阶M一致。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> 次数不超过 $-m - k$

**修正：**

> 次数不超过 $-m$

**理由：** ak=sum_(j=0)^k bj，最高项b0次数−m，非末项−m−k；紧后选择N0=−m也唯一证实。

**原文：**

> 最后处理 $I(\xi)$。我们有

**修正：**

> 最后处理 $I(\xi)$。为运用非驻相引理，先把 $a_k$ 在较小闭锥之外用光滑角向截断延拓，并乘一个在 $|\xi|\ge1$ 恒为 $1$、在原点附近恒为 $0$ 的频率截断；这不改变较小锥内的大频率估计。我们有

**理由：** ak原仅定义于Gamma(beta)，负齐次在0奇异，原图直接宣称全频光滑且满足(1+|xi|)^−m上界缺一步；闭子锥角向扩展加小频率截断是使lemma550假设成立的局部准备。

**原文：**

> 另外, $a_k(x, \xi)$ 是一些

**修正：**

> 另外, 在原锥内的大频率处, $a_k(x, \xi)$ 是一些

**理由：** 经合法频率截断后仅原锥大频率保留齐次项形式，全域不再严格齐次；支集和growth上界仍全域成立。

**原文：**

> 在 $K'$ 上恒为 1

**修正：**

> 在 $K'$ 的邻域恒为 1

**理由：** 与972选K′在K内部相配，psi为1需保留紧支分布的全部导数阶配对。

**原文：**

> 都有我们就有

**修正：**

> 我们就有

**理由：** 原图重复量词尾语，删除多余都有，数学全称条件保持。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> $$ p_m(x, \xi) = \sigma_m(P)(x, \xi) \sum_{|\alpha| = m} p_\alpha(x) (-i\xi)^\alpha. $$

**修正：**

> $$ p_m(x, \xi) = \sigma_m(P)(x, \xi) = \sum_{|\alpha| = m} p_\alpha(x) (-i\xi)^\alpha. $$

**理由：** 原图确漏等号，968原定义直接给出同一(-iξ)^α之和；只补等号以恢复等式，不选择后续981–985不一致归一化方案。

**原文：**

> $$ \mathbf{H}_P = \left( \frac{\partial p_m}{\partial \xi_1}, \cdots, \frac{\partial p_m}{\partial \xi_n}, -\frac{\partial p_m}{\partial x_1}, \cdots, -\frac{\partial p_m}{\partial \xi_n} \right) $$

**修正：**

> $$ \mathbf{H}_P = \left( \frac{\partial p_m}{\partial \xi_1}, \cdots, \frac{\partial p_m}{\partial \xi_n}, -\frac{\partial p_m}{\partial x_1}, \cdots, -\frac{\partial p_m}{\partial x_n} \right) $$

**理由：** 原图末分量误用ξ_n，同页紧缩式H_P=(∂ξp_m,-∂xp_m)和975 Hamilton方程确定末项须为-∂x_np_m。

**原文：**

> $$ \operatorname{Char}(P) := Z(\sigma_m(P)) \subset T^* \Omega = \Omega \times \mathbb{R}^n $$

**修正：**

> $$ \operatorname{Char}(P) := Z(\sigma_m(P))\cap(T^*\Omega)^\times \subset (T^*\Omega)^\times $$

**理由：** WF仅定义于非零余切；若Char包含xi0=0，则(ξ0,0)为零向量不可能与梯度线性无关，没有任何P满足后述简单特征。排除零截面与奇性传播整章条件一致。

[相关正文：84：微局部椭圆正则性与奇性传播](../../03-math-analysis-iii/84-microlocal-ellipticity.md)

## 数学修正

**原文：**

> $$
> \begin{cases}
> x_1'(t) &= \frac{\partial p_m}{\partial \xi_1}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> x_2'(t) &= \frac{\partial p_m}{\partial \xi_2}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \cdots\cdots \\
> x_n'(t) &= \frac{\partial p_m}{\partial \xi_n}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \xi_1'(t) &= -\frac{\partial p_m}{\partial x_1}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \xi_2'(t) &= -\frac{\partial p_m}{\partial x_2}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \cdots\cdots \\
> \xi_n'(t) &= -\frac{\partial p_m}{\partial x_b}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \gamma(0) &= (x_0, \xi_0).
> \end{cases}
> $$

**修正：**

> $$
> \begin{cases}
> x_1'(t) &= \frac{\partial p_m}{\partial \xi_1}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> x_2'(t) &= \frac{\partial p_m}{\partial \xi_2}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \cdots\cdots \\
> x_n'(t) &= \frac{\partial p_m}{\partial \xi_n}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \xi_1'(t) &= -\frac{\partial p_m}{\partial x_1}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \xi_2'(t) &= -\frac{\partial p_m}{\partial x_2}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \cdots\cdots \\
> \xi_n'(t) &= -\frac{\partial p_m}{\partial x_n}(x_1(t), \cdots, x_n(t), \xi_1(t), \cdots, \xi_n(t)), \\
> \gamma(0) &= (x_0, \xi_0).
> \end{cases}
> $$

**理由：** 原图确为x_b；未定义b且坐标只有x_1至x_n，同页向量式和974 Hamilton定义唯一确定为x_n。
