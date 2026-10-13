# 勘误：75 Sobolev 扩张、局部刻画与曲面上的空间

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> 实际上, 这些结论对于更高的正则性 $H^k$ 也成立, 其中 $k \geqslant 2$

**修正：**

> 实际上, 对于更高的正则性 $H^k$，其中 $k \geqslant 2$，正合列中的迹映射应包含 $0,\ldots,k-1$ 阶法向导数的全部迹

**理由：** H0k要求法向jet全消失，单值迹0的xnχ反例不属H02，876泛称原结论逐阶成立须同878的正确jet列成组说明。

**原文：**

> $$H^k(\mathbb{H}^n) \cap C^\infty(\mathbb{R}^n) \subset H^k(\mathbb{H}^n)$$

**修正：**

> $$H^k(\mathbb{H}^n) \cap C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \subset H^k(\mathbb{H}^n)$$

**理由：** 输入应全空间光滑函数的半空间限制，避免不同函数域直接交。

**原文：**

> $$\mathrm{Ext}_{\mathrm{Sym}} : C^\infty(\mathbb{R}^n) \cap H^1(\mathbb{H}^n) \to H^1(\mathbb{R}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ u(x', -x_n), & x_n \leqslant 0. \end{cases}$$

**修正：**

> $$\mathrm{Ext}_{\mathrm{Sym}} : C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^1(\mathbb{H}^n) \to H^1(\mathbb{R}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ u(x', -x_n), & x_n \leqslant 0. \end{cases}$$

**理由：** 同865/866明确光滑输入限制。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \mathrm{Ext}_{Sym}:C^\infty(\mathbb R^n)\cap H^1(\mathbb H^n)\to H^1(\mathbb H^n)
> ```

**正文：**

> $$\mathrm{Ext}_{\mathrm{Sym}} : C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^1(\mathbb{H}^n) \to H^1(\mathbb{R}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ u(x', -x_n), & x_n \leqslant 0. \end{cases}$$

**理由：** source反射输出错Hn，canonical已规范全空间Rn；本轮另写清输入限制。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> $$\partial_j \left( \mathrm{Ext}_{\mathrm{Sym}}(u) \right) = \mathrm{Ext}_{\mathrm{Sym}} (\partial_k u), \quad k = 1, 2, \cdots, n-1.$$

**修正：**

> $$\partial_k \left( \mathrm{Ext}_{\mathrm{Sym}}(u) \right) = \mathrm{Ext}_{\mathrm{Sym}} (\partial_k u), \quad k = 1, 2, \cdots, n-1.$$

**理由：** 复制切向偏导公式时j/k错位，两边同k。

**原文：**

> $C^\infty(\mathbb{R}^n) \cap H^1(\mathbb{H}^n)$ 在

**修正：**

> $C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^1(\mathbb{H}^n)$ 在

**理由：** 稠密函数为全空间光滑函数的限制，统一函数域。

**原文：**

> 在 $x_n = 0$ 出并不连续

**修正：**

> 在 $x_n = 0$ 处一般并不连续

**理由：** 处字源误；若法向导数恰好零则连续，原一般函数的反射法向导数可有跳跃，补一般。

**原文：**

> $$\mathrm{Ext} : H^k(\mathbb{R}^n) \to H^k(\mathbb{H}^n)$$

**修正：**

> $$\mathrm{Ext} : H^k(\mathbb{H}^n) \to H^k(\mathbb{R}^n)$$

**理由：** 引理502扩张须半空间到全空间，与Res∘Ext=id类型匹配。

**原文：**

> $$\mathrm{Ext} : C^\infty(\mathbb{R}^n) \cap H^1(\mathbb{H}^n) \to H^1(\mathbb{H}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ \displaystyle\sum_{0 \leqslant j \leqslant k-1} a_j u(x', -b_j x_n), & x_n < 0. \end{cases}$$

**修正：**

> $$\mathrm{Ext} : C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^k(\mathbb{H}^n) \to H^k(\mathbb{R}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ \displaystyle\sum_{0 \leqslant j \leqslant k-1} a_j u(x', -b_j x_n), & x_n < 0. \end{cases}$$

**理由：** 本段构造k阶延拓，原照抄H1输入/输出且错半空间方向，Vandermonde匹配k个边界jet。

**原文：**

> $0 < b_1 < b_2 < \cdots < b_k$

**修正：**

> $0 < b_0 < b_1 < \cdots < b_{k-1}$

**理由：** 求和j0..k−1需k个正bj，原b1..bk漏b0而多bk；后页a0..ak−1吻合此索引。

**原文：**

> $\{a_j\}_{0 \leqslant j \leqslant k}$

**修正：**

> $\{a_j\}_{0 \leqslant j \leqslant k-1}$

**理由：** k阶匹配有k个待定系数，原写k+1个与求和和后续唯一解不一致。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 是连续的满的线性映射击并且

**正文：**

> 是连续的满的线性映射并且

**理由：** 原源多击字，canonical已规范去除。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> 份量求

**修正：**

> 分量求

**理由：** 坐标分量用字为分量，原份量笔误。

**原文：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} - \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0} - \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**理由：** 上半空间外法向−en，∂n1Hn=+δboundary，原负号反了，须同下半空间项联动。

**原文：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} - \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0} - \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**理由：** 下半空间外法向+en，∂n1lower=−δboundary，原正号反了，修后由Σai(−bi)^ell=1照样边界相消。

**原文：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} - \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0} - \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**理由：** 法向导数求和变量为i，参数却误写bj未被此和约束，须bi；两处同一笔误。

**原文：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} - \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} \tilde{u}(x', x_n) \right) \\
> = & \partial_n \left( \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} \right) + \partial_n \left( \sum_{0 \leqslant j \leqslant k-1} a_j (-b_j)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', -b_j x_n) \mathbf{1}_{x_n < 0} \right) \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> & + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0} - \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^\ell \partial_{x_n}^\ell \partial_{x'}^{\alpha'} u(x', 0) d\sigma_{x_n=0} \\
> = & \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', x_n) \mathbf{1}_{x_n \geqslant 0} + \sum_{0 \leqslant i \leqslant k-1} a_i (-b_i)^{\ell+1} \partial_{x_n}^{\ell+1} \partial_{x'}^{\alpha'} u(x', -b_i x_n) \mathbf{1}_{x_n < 0}.
> \end{aligned}$$

**理由：** 法向导数求和变量为i，参数却误写bj未被此和约束，须bi；两处同一笔误。

**原文：**

> $$0 \to H^k_0 (\mathbb{H}^n) \xrightarrow{\iota} H^k(\mathbb{H}^n) \xrightarrow{\mathrm{Res}} H^{k-\frac{1}{2}}(\partial(\mathbb{H}^n)) \to 0.$$

**修正：**

> $$0 \to H^k_0 (\mathbb{H}^n) \xrightarrow{\iota} H^k(\mathbb{H}^n) \xrightarrow{(\mathrm{Res}\,\partial_n^j)_{j=0}^{k-1}} \bigoplus_{j=0}^{k-1} H^{k-j-\frac{1}{2}}(\partial(\mathbb{H}^n)) \to 0.$$

**理由：** k≥2零值迹不等于H0k（xnχ反例）；全法向jet到0..k−1对应Sobolev阶k−j−1/2才有核H0k，联合满射可用Fourier三角校正显式构造，独立推导另附proof_support；原“重复上次”不足单独证明满射。

## 未决数学问题

**原文：**

> 我们就可以重复上次的证明来说明对任意的整数 $k \geqslant 1$

**问题：** 原文正合列对k≥2缺全部法向jet，单值零迹反例为xnχ。已另以确定联动公式改为全jet正确命题；但原“重复上次”不充分证明联合满射，须多jet显式右逆构造，独立Fourier三角校正推导在proof_support提供，不把额外推导当原证明内容。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> $\Phi(U \cap \Omega) = V_+ = V \cap \{y', y_n) \mid y_n > 0\}$

**修正：**

> $\Phi(U \cap \Omega) = V_+ = V \cap \{(y', y_n) \mid y_n > 0\}$

**理由：** 原图半空间坐标对漏左括号，补(y′,yn)合法集合表达。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> $$
> (\chi_j \cdot u) \circ \Phi_j^{-1} \in H_0^1(V_{j,+}).
> $$

**修正：**

> $$
> (\chi_j \cdot u) \circ \Phi_j^{-1} \in H^1(V_{j,+}).
> $$

**理由：** 前文u仅H1Ω，可有非零边界值，χj接触边界时不能推零迹H01。该段换元及梯度范数证明的是H1，u0为H01另属类似情况。

**原文：**

> $$
> (\chi_j \cdot u) \circ \Phi_j^{-1} \in H_0^1(V_{j,+}) \quad \Leftrightarrow \quad \chi_j \cdot u \in H_0^1(U_{j,+}).
> $$

**修正：**

> $$
> (\chi_j \cdot u) \circ \Phi_j^{-1} \in H^1(V_{j,+}) \quad \Leftrightarrow \quad \chi_j \cdot u \in H^1(U_{j,+}).
> $$

**理由：** 综合上下两种范数换元界及逆坐标得到H1等价；原误H01不能由所示范数估计单独推出且首句u一般边界非零。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> $V_j = V_{j,+} \cup (-V_{j,+})$

**修正：**

> $V_j = \{(y',-y_n)\mid (y',y_n)\in V_j\}$

**理由：** 原上下半集合并漏yn0截面，而且ExtSym反射仅最后坐标。用关于yn0反射不变定义对称Vj，完整保留边界截面。

**原文：**

> 对于 $v_j$ 而言，我们可以用之前构造的对称的扩张 $\operatorname{Ext}_{\text{sym}}(v_j)$

**修正：**

> 把 $v_j$ 在 $\mathbb{H}^n\setminus V_{j,+}$ 上用 $0$ 延拓后，我们可以用之前构造的对称的扩张 $\operatorname{Ext}_{\text{sym}}(v_j)$

**理由：** ExtSym定义于整个Hn，vj目前仅Vj+；χj支集紧含Uj确保在人工图边沿可零延拓H1，不能遗漏这一必要输入步骤。

**原文：**

> $$
> \tilde{u}_j = \left( \operatorname{Ext}_{\text{sym}}(v_j) \right) \circ \Phi_j^{-1}
> $$

**修正：**

> $$
> \tilde{u}_j = \left( \operatorname{Ext}_{\text{sym}}(v_j) \right) \circ \Phi_j
> $$

**理由：** 回到x∈Uj须取y=Φj(x)，原Φj−1输入在Vj且输出Uj无法给y函数配合。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \operatorname{Ext}:H^1(\Omega)\to H^1(\mathbb H^n)
> ```

**正文：**

> $$
> \operatorname{Ext} : H^1(\Omega) \to H^1(\mathbb{R}^n)
> $$

**理由：** 有界区域扩张目标应全空间，原图Hn，canonical已规范Rn。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> 对每个 $i \leqslant N$

**修正：**

> 对每个 $j \leqslant N$

**理由：** 这一段坐标图和单位分解统一j，原量化i错位。

**原文：**

> $$
> \phi_j : U_i \cap (\partial\Omega) \to V'_j \subset \mathbb{R}^{n-1}.
> $$

**修正：**

> $$
> \phi_j : U_j \cap (\partial\Omega) \to V'_j \subset \mathbb{R}^{n-1}.
> $$

**理由：** φj是第j局部图，输入也应Uj，原i不匹配。

**原文：**

> $\Phi_i$ 在 $U_i \cap \partial\Omega$

**修正：**

> $\Phi_j$ 在 $U_j \cap \partial\Omega$

**理由：** 对应第j边界局部图的全坐标Φj限制，紧后都用j。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> $$
> \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 = \|u\|_{L^2(\Omega)}^2 + \iint_{\partial\Omega \times \partial\Omega} \frac{|u(x) - u(y)|^2}{|x - y|^n} d\sigma(x)d\sigma(y).
> $$

**修正：**

> $$
> \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 = \|u\|_{L^2(\partial\Omega)}^2 + \iint_{\partial\Omega \times \partial\Omega} \frac{|u(x) - u(y)|^2}{|x - y|^n} d\sigma(x)d\sigma(y).
> $$

**理由：** 原图定义的u仅在边界上，首项必须是边界L2范数，与本页上下两处定义和曲面积分一致。

**原文：**

> $$
> \|u\|_{H^{\frac{1}{2}}(\Omega)}^2 \leqslant \sum_{j\leqslant N} \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\Omega)}^2.
> $$

**修正：**

> $$
> \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 \leqslant N \sum_{j\leqslant N} \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2.
> $$

**理由：** 原图漏有限项Cauchy不等式常数且范数域误写内部；u=sum χju给平方范数≤N倍平方和，χj均为1/N时原常数1即失败。

**原文：**

> $$
> \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\Omega)}^2 \leqslant C \|u\|_{H^{\frac{1}{2}}(\Omega)}^2 + C \int_{\partial\Omega} |u(y)|^2 \left( \int_{\partial\Omega} \frac{1}{|x - y|^{n-2}} d\sigma(x) \right) d\sigma(y).
> $$

**修正：**

> $$
> \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 \leqslant C \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 + C \int_{\partial\Omega} |u(y)|^2 \left( \int_{\partial\Omega} \frac{1}{|x - y|^{n-2}} d\sigma(x) \right) d\sigma(y).
> $$

**理由：** 原图讨论曲面上的H1/2范数，此处两端均必须使用同一边界空间，内部Ω域属连续抄写笔误。

**原文：**

> $$
> \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\Omega)} \leqslant C \|u\|_{H^{\frac{1}{2}}(\Omega)}^2.
> $$

**修正：**

> $$
> \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 \leqslant C \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2.
> $$

**理由：** 前面刚证明范数平方由范数平方控制；原末式左边漏平方，缩放u为εu即矛盾，同时恢复边界域。

[相关正文：Sobolev 扩张、局部刻画与曲面上的空间](../../03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884.md)

## 数学修正

**原文：**

> $$
> |||u|||_{H^{\frac{1}{2}}(\Omega),\mathcal{U}}^2 = \sum_{j \leqslant N} \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\Omega)}^2,
> $$

**修正：**

> $$
> |||u|||_{H^{\frac{1}{2}}(\partial\Omega),\mathcal{U}}^2 = \sum_{j \leqslant N} \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2,
> $$

**理由：** 本页沿用定义506的边界H1/2及其局部化平方和，原图两个Ω均缺边界符号。

**原文：**

> 那么，范数 $|||\cdot|||_{H^{\frac{1}{2}}(\Omega),\mathcal{U}}$ 与范数 $\|\cdot\|_{H^{\frac{1}{2}}(\Omega)}$ 是等价的。

**修正：**

> 那么，范数 $|||\cdot|||_{H^{\frac{1}{2}}(\partial\Omega),\mathcal{U}}$ 与范数 $\|\cdot\|_{H^{\frac{1}{2}}(\partial\Omega)}$ 是等价的。

**理由：** 两范数都定义在∂Ω上的函数，需与本页最终坐标H1/2边界范数和定义506保持一致。

[相关正文：75.1：作业：二维波动方程的基本解，Airy函数与线性KdV方程](../../03-math-analysis-iii/75-sobolev-extension/75-03-p0885-0888.md)

## 数学修正

**原文：**

> $$\mathring{C}_+ = \{ (t, x) \in \mathbb{R}^{1+2} \mid x^2 + y^2 < t^2 \}.$$

**修正：**

> $$\mathring{C}_+ = \{ (t, x, y) \in \mathbb{R}^{1+2} \mid x^2 + y^2 < t^2,\ t>0 \}.$$

**理由：** 源图印(t,x)及R1+3且漏未来条件；正文空间已经正确R1+2，应补第三坐标与t>0以符合A4取正平方根的未来基本解。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> (t,x,y)\in\mathbb R\times\mathbb R^3
> ```

**正文：**

> $(t, x, y) \in \mathbb{R} \times \mathbb{R}^2$

**理由：** 二维波动方程只有两空间坐标，canonical已纠正源图R3抄写错误；保留这项正确归一化。

**原讲义片段：**

> ```text
> \mathbb R^{1+3}
> ```

**正文：**

> $\mathbb{R}^{1+2} = \mathbb{R} \times \mathbb{R}^2$

**理由：** A3源图空间维数错写1+3；canonical已与题意二维空间保持1+2，后续修复只补坐标与未来条件。

[相关正文：75.1：作业：二维波动方程的基本解，Airy函数与线性KdV方程](../../03-math-analysis-iii/75-sobolev-extension/75-03-p0885-0888.md)

## 数学修正

**原文：**

> $$\langle \square E, \varphi \rangle = \frac{1}{2\pi} \int_0^\infty \left( \int_0^\infty \int_0^{2\pi} \frac{(\square \varphi)(\sqrt{s+r^2}, r \cos \vartheta, r \sin \vartheta)}{2\sqrt{s+r^2}} r dr d\vartheta \right) ds.$$

**修正：**

> $$\langle \square E, \varphi \rangle = -\frac{1}{2\pi} \int_0^\infty \frac{1}{\sqrt{s}} \left( \int_0^\infty \int_0^{2\pi} \frac{(\square \varphi)(\sqrt{s+r^2}, r \cos \vartheta, r \sin \vartheta)}{2\sqrt{s+r^2}} r d\vartheta dr \right) ds.$$

**理由：** E原定义为−1/(2π√ρ)，s=t²−r²且t>0的Jacobian为1/(2√(s+r²))，故原图漏负号与s的−1/2权重；显明积分测度顺序与上下限。

**原文：**

> 我们定义 $\mathbb{R}$ 上的（关于变量 $s$）函数

**修正：**

> 我们定义 $\mathbb{R}_{>0}$ 上的（关于变量 $s$）函数

**理由：** 本式需要√(s+r²)对所有r≥0为实数，局部证明及A7只使用s=ε>0，故原图R需限于正半轴。

**原文：**

> $$\widetilde{\varphi}(s) = \int_0^\infty \int_0^{2\pi} \frac{(\square \varphi)(\sqrt{s+r^2}, r \cos \vartheta, r \sin \vartheta)}{2\sqrt{s+r^2}} r dr d\vartheta.$$

**修正：**

> $$\widetilde{\varphi}(s) = \int_0^\infty \int_0^{2\pi} \frac{\varphi(\sqrt{s+r^2}, r \cos \vartheta, r \sin \vartheta)}{2\sqrt{s+r^2}} r d\vartheta dr.$$

**理由：** A7导数和A8边界值均作用于φ本身；原图辅助函数错误沿用了A4的□φ，必须去掉□以与后续链式求导一致。

**原文：**

> $$(\widetilde{\square \varphi})(s) = (L^* \widetilde{\varphi})(s).$$

**修正：**

> $$(\widetilde{\square \varphi})(s) = -(L^* \widetilde{\varphi})(s).$$

**理由：** 由A1的□(F∘ρ)=−(LF)∘ρ，与任意紧支F作积分再用形式自伴即得T□φ=−L*Tφ；原图右边漏负号。

**原文：**

> $$\langle \square E, \varphi \rangle = -\frac{2}{\pi} \lim_{\varepsilon \to 0} \sqrt{\varepsilon} \frac{d}{ds} \widetilde{\varphi}(s).$$

**修正：**

> $$\langle \square E, \varphi \rangle = -\frac{2}{\pi} \lim_{\varepsilon \to 0} \sqrt{\varepsilon} \frac{d\widetilde{\varphi}}{ds}(\varepsilon).$$

**理由：** 由s^−1/2L*g=(4√s g′)′在ε至∞积分产生下端g′(ε)，原图游离变量s应是ε处的导数，与A7和A8一致。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> 2\sqrt{s+t^2}
> ```

**正文：**

> $$\langle \square E, \varphi \rangle = -\frac{1}{2\pi} \int_0^\infty \frac{1}{\sqrt{s}} \left( \int_0^\infty \int_0^{2\pi} \frac{(\square \varphi)(\sqrt{s+r^2}, r \cos \vartheta, r \sin \vartheta)}{2\sqrt{s+r^2}} r d\vartheta dr \right) ds.$$

**理由：** A4与A6原图分母错写t²；变量变换t=√(s+r²)的Jacobian确定为2√(s+r²)，canonical两处已纠正。

[相关正文：75.1：作业：二维波动方程的基本解，Airy函数与线性KdV方程](../../03-math-analysis-iii/75-sobolev-extension/75-03-p0885-0888.md)

## 数学修正

**原文：**

> 在 $\mathcal{S}'(\mathbb{R} \times \mathbb{R})$ 上有唯一一个满足 $u \in C^\infty(\mathbb{R}_{>0} \times \mathbb{R})$ 的解。

**修正：**

> 在 $\mathbb{R}_{>0} \times \mathbb{R}$ 上有唯一一个可延拓为 $\mathcal{S}'(\mathbb{R}^2)$ 中元素且满足 $u \in C^\infty(\mathbb{R}_{>0} \times \mathbb{R})$ 的解。

**理由：** 题设PDE只在t>0且初值为右侧分布迹，故唯一性针对正时间解；若声称全R²分布唯一，可任加负时间支集分布或t=0的δ且不变正域PDE和右迹。限制唯一正域解并保持可延拓缓增条件。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> E(t,x)\in\mathcal S'(\mathbb R)
> ```

**正文：**

> $E(t, x) \in \mathcal{S}'(\mathbb{R}^2)$

**理由：** B14源图错写一维分布空间；E依赖(t,x)两变量，canonical已正确归一为R²。
