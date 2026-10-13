# 勘误：72 有界区域的 Sobolev 空间与 Poincare 不等式

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：有界区域的 Sobolev 空间与 Poincare 不等式](../../03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857.md)

## 数学修正

**原文：**

> 我们要在在这个区域

**修正：**

> 我们要在这个区域

**理由：** 851原图只有一个在，canonical重复一个在，恢复源图。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \left(\sum_{|\alpha|\le k}\|\partial^\alpha u\|_{L^2}\right)^{1/2}
> ```

**正文：**

> $$
> \|u\|_{H^k} = \left( \sum_{|\alpha| \leqslant k} \|\partial^\alpha u\|_{L^2}^2 \right)^{\frac{1}{2}}.
> $$

**理由：** 原图定义486范数各项漏平方，canonical已经补齐正确平方和，保留数学正确规范化，不还原源错。

**原讲义片段：**

> ```text
> \|u\|_{H^k}^2=\sum_{|\alpha|\le k}\|\partial^\alpha u\|_{L^2}<\varepsilon
> ```

**正文：**

> $$
> \|u_p - u_q\|_{H^k}^2 = \sum_{|\alpha| \leqslant k} \|\partial^\alpha u_p - \partial^\alpha u_q\|_{L^2}^2 < \varepsilon.
> $$

**理由：** 原图Cauchy证明漏p/q差及各项平方，canonical已正确补全，透明保留。

[相关正文：有界区域的 Sobolev 空间与 Poincare 不等式](../../03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857.md)

## 数学修正

**原文：**

> $u \in H_0^1(\mathbb{R}^n)$

**修正：**

> $u \in H_0^k(\Omega)$

**理由：** 定义488前句明确任意k的Ω上C0闭包，后句照抄全空间H1；原图与canonical该处均错误，改回定义对象。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \partial^\alpha u_p\xrightarrow{\mathcal D'}\partial^\alpha u
> ```

**正文：**

> $$
> \partial^\alpha u_p \xrightarrow{L^2} u^{(\alpha)} \implies \partial^\alpha u_p \xrightarrow{\mathcal{D}'} u^{(\alpha)}.
> $$

**理由：** 另外句源图L2→uα却随后D′→∂αu，canonical按L2嵌D′已经规范为uα；其后唯一性论证才推出二者相等。

**原讲义片段：**

> ```text
> \partial^\alpha u_n\xrightarrow{L^2}\partial^\alpha u
> ```

**正文：**

> $$
> \partial^\alpha u_p \xrightarrow{L^2} \partial^\alpha u.
> $$

**理由：** 本证明列指标为p，原图末式n与维数混淆，canonical已规范为p。

[相关正文：有界区域的 Sobolev 空间与 Poincare 不等式](../../03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857.md)

## 数学修正

**原文：**

> 使得在 $H^s$ 的意义下, $\varphi_k \xrightarrow{H^s} f$

**修正：**

> 使得在 $H^1$ 的意义下, $\varphi_k \xrightarrow{H^1} f$

**理由：** 此处只由f∈H01定义获得H1收敛，s未定义且任意Hs收敛无依据。

**原文：**

> $$
> |\varphi(x) - f(x)| \leqslant C \|\varphi_k(x) - f_k(x)\|_{H^s} \to 0.
> $$

**修正：**

> $$
> |\varphi_k(x) - f(x)| \leqslant C \|\varphi_k - f\|_{H^1} \to 0.
> $$

**理由：** 原φ漏k、fk不存在，Sobolev范数应施于函数φk−f而非点值；紧前收敛阶为1。

**原文：**

> 由于 $\varphi(a) = 0$

**修正：**

> 由于 $\varphi_k(a) = 0$

**理由：** 逼近列φk各自紧支，在端点都为0，原漏k。

**原文：**

> 选取 $\lambda < 1$

**修正：**

> 选取 $0 < \lambda < 1$

**理由：** 缩小g(x/λ)支集需要0<λ<1；原允许λ=0无定义或|λ|>1支集反而扩大。

**原文：**

> $$
> g_\lambda \xrightarrow{H^1} g.
> $$

**修正：**

> $$
> g_\lambda \xrightarrow[\lambda\to1^-]{H^1} g.
> $$

**理由：** 原未指定λ极限，收敛到原函数是λ→1−，与后页另一个ε→0光滑极限区分。

[相关正文：有界区域的 Sobolev 空间与 Poincare 不等式](../../03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> |\langle u, \varphi \rangle| &\leqslant C \|\varphi\|_{H^k} = C \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^2(K)} \\
> &\leqslant C |K|^{\frac{1}{2}} \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)} \\
> &\leqslant C |K|^{\frac{1}{2}} \sup_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\langle u, \varphi \rangle| &\leqslant C \|\varphi\|_{H^k} \leqslant C \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^2(K)} \\
> &\leqslant C |K|^{\frac{1}{2}} \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)} \\
> &\leqslant C' |K|^{\frac{1}{2}} \sup_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)}.
> \end{aligned}
> $$

**理由：** Hk范数为L2各导数平方和开方，≤各L2范数之和而非等号。

**原文：**

> $$
> \begin{aligned}
> |\langle u, \varphi \rangle| &\leqslant C \|\varphi\|_{H^k} = C \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^2(K)} \\
> &\leqslant C |K|^{\frac{1}{2}} \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)} \\
> &\leqslant C |K|^{\frac{1}{2}} \sup_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\langle u, \varphi \rangle| &\leqslant C \|\varphi\|_{H^k} \leqslant C \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^2(K)} \\
> &\leqslant C |K|^{\frac{1}{2}} \sum_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)} \\
> &\leqslant C' |K|^{\frac{1}{2}} \sup_{|\alpha| \leqslant k} \|\partial^\alpha \varphi\|_{L^\infty(K)}.
> \end{aligned}
> $$

**理由：** 有限多个多重指标之和≤项数乘最大值，最后常数须允许扩大为C′。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \varepsilon\to\infty
> ```

**正文：**

> $\varepsilon \to 0$

**理由：** 光滑逼近χeps缩小支集须eps→0，源图误∞，canonical已正确。

**原讲义片段：**

> ```text
> \partial_k(\chi_\varepsilon*g_\lambda)\xrightarrow{L^2}g_\lambda
> ```

**正文：**

> $$
> \partial_k (\chi_\varepsilon * g_\lambda) = \chi_\varepsilon * (\partial_k g_\lambda) \xrightarrow{L^2} \partial_k g_\lambda.
> $$

**理由：** 源图导数逼近式极限漏∂k，canonical已补。

**原讲义片段：**

> 由于 $C_0^\infty(\Omega)$ 在 $H_0^1(\Omega)$ 中稠密

**正文：**

> 由于 $C_0^\infty(\Omega)$ 在 $H_0^k(\Omega)$ 中稠密

**理由：** 原图密度说明及图H01但上下文H−k对偶，canonical已统一H0k。

[相关正文：有界区域的 Sobolev 空间与 Poincare 不等式](../../03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857.md)

## 数学修正

**原文：**

> 存在常数仅依赖于 $\Omega$ 的常数 $C$

**修正：**

> 存在仅依赖于 $\Omega$ 的常数 $C$

**理由：** 原图重复常数，保留完整依赖说明。

**原文：**

> $$
> \int_{\mathbb{R}^n} |\varphi(x)|^2 dx \leqslant 4R^2 \int_{\mathbb{R}^{n-1}} \int_{-\infty}^\infty |\partial_{x_n} \varphi(x', \tau)|^2 d\tau dx' = 4R^2 \int_{\mathbb{R}^n} |\nabla \varphi(x)|^2 dx
> $$

**修正：**

> $$
> \int_{\mathbb{R}^n} |\varphi(x)|^2 dx \leqslant 4R^2 \int_{\mathbb{R}^{n-1}} \int_{-\infty}^\infty |\partial_{x_n} \varphi(x', \tau)|^2 d\tau dx' \leqslant 4R^2 \int_{\mathbb{R}^n} |\nabla \varphi(x)|^2 dx
> $$

**理由：** 仅积分xn方向导数的平方≤全梯度平方和，n>1一般非等号。

**原文：**

> $\{\varphi_k\}_{k \geqslant 1} \subset H_0^1(\mathbb{R}^n)$

**修正：**

> $\{\varphi_k\}_{k \geqslant 1} \subset C_0^\infty(\Omega)$

**理由：** 刚证不等式只对C0Ω，此处按H01Ω定义需取该光滑逼近列，任意全空间H01不能用固定区域Poincare常数。

**原文：**

> $$
> \|\varphi_k\|_{L^2} \leqslant \|\nabla \varphi_k\|_{L^2} \implies \|u\|_{L^2} - \|u - \varphi_k\|_{L^2} \leqslant \|\nabla u\|_{L^2} + \|\nabla \varphi_k - \nabla u\|_{L^2}.
> $$

**修正：**

> $$
> \|\varphi_k\|_{L^2} \leqslant 2R \|\nabla \varphi_k\|_{L^2} \implies \|u\|_{L^2} - \|u - \varphi_k\|_{L^2} \leqslant 2R \|\nabla u\|_{L^2} + 2R \|\nabla \varphi_k - \nabla u\|_{L^2}.
> $$

**理由：** 平方估计系数4R²开方为2R，原极限步漏系数，区域大时常数1不成立；三处一致补2R。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> H^{-k}(\Omega)=(H_0^1(\Omega))^*
> ```

**正文：**

> $$
> H^{-k}(\Omega) = \left( H_0^k(\Omega) \right)^*.
> $$

**理由：** 源图对偶域阶印1而左侧任意k，canonical已正确成k。

**原讲义片段：**

> ```text
> \int_{\mathbb R}|\varphi(x)|^2\,dx
> ```

**正文：**

> $$
> \int_{\mathbb{R}^n} |\varphi(x)|^2 dx \leqslant 4R^2 \int_{\mathbb{R}^{n-1}} \int_{-\infty}^\infty |\partial_{x_n} \varphi(x', \tau)|^2 d\tau dx' \leqslant 4R^2 \int_{\mathbb{R}^n} |\nabla \varphi(x)|^2 dx
> $$

**理由：** 源图对所有x积分域漏n，canonical已正确Rn。

**原讲义片段：**

> ```text
> \|u\|_{L^2}+\|\nabla\varphi_k-\nabla u\|_{L^2}
> ```

**正文：**

> $$
> \|\varphi_k\|_{L^2} \leqslant 2R \|\nabla \varphi_k\|_{L^2} \implies \|u\|_{L^2} - \|u - \varphi_k\|_{L^2} \leqslant 2R \|\nabla u\|_{L^2} + 2R \|\nabla \varphi_k - \nabla u\|_{L^2}.
> $$

**理由：** 源图Poincare极限推理右边u漏梯度，canonical已正确；本轮只再补遗漏常数2R。

[相关正文：有界区域的 Sobolev 空间与 Poincare 不等式](../../03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857.md)

## 数学修正

**原文：**

> 存在非负常数 $C_1$ 和 $C_2$

**修正：**

> 存在正常数 $C_1$ 和 $C_2$

**理由：** 等价范数需严格正常数，后文实际选C1=1及C2=C+1；原非负允许0不能表达等价性。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 求导等预算

**正文：**

> 求导等运算

**理由：** 源图误预算，canonical已规范运算。
