# 勘误：71 Riesz 表示、Sobolev 对偶与迹定理

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 数学修正

**原文：**

> $$
> \left|x - \frac{y_k + y_\ell}{2}\right| \le \frac{1}{2}(|x - y_k| + |x - y_\ell|).
> $$

**修正：**

> $$
> I\leqslant\left|x-\frac{y_k+y_\ell}{2}\right|\leqslant \frac{1}{2}(|x - y_k| + |x - y_\ell|).
> $$

**理由：** 中点属于闭线性子空间F，距x至少I；结合已有上界才可证明中点距离趋于I，并由平行四边形等式得Cauchy。原图只列上界而未写用于趋零的下界，补明确该条件。

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \|y-\pi(x)\|^2=1
> ```

**正文：**

> $$
> \|y - \pi(x)\|^2 = 0,
> $$

**理由：** 向量同时属于F和F的正交补，和自身内积为0，不能为1；源图等式右边误印1，Markdown已为0。

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 数学修正

**原文：**

> 是同构。

**修正：**

> 是共轭线性的等距同构。

**理由：** 本课程内积对第一变量线性、第二变量共轭线性，v映射ell_v=(·,v)满足ell_(av)=bar(a)ell_v，不是复线性。还由Cauchy–Schwarz及在v取值见范数相等，明确Riesz映射性质。

**原文：**

> 如果 $w \in F^\perp$，我们选取 $\lambda$

**修正：**

> 若 $w=0$ 则已属 $\mathbb Cv$；若 $0\ne w\in F^\perp$，则 $\ell(w)\ne0$，我们选取 $\lambda$

**理由：** ℓ(v)>0，w=0时不能取λ使ℓ(λw)=ℓ(v)。非零w∈Fperp才有ℓ(w)≠0（否则属于F交Fperp），原证明漏这一分支。

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 数学修正

**原文：**

> 由于

**修正：**

> 令 $P_s=\max\{0,\lceil2s+n+1\rceil\}+n+1$。由 Schwartz 半范数估计，

**理由：** 任意实数s时半范数指标必须为非负整数；统一用前面已证明的Ps控制Hs范数，原图实数2s+2n+2没有定义。

**原文：**

> $$
> \|\varphi\|_{H^s} \le C' N_{2s+2n+2}(\varphi).
> $$

**修正：**

> $$
> \|\varphi\|_{H^s} \le C' N_{P_s}(\varphi).
> $$

**理由：** 两处缓增性估计均采用定义好的非负整数Ps，避免把非整数或负指数当Schwartz范数指标。

**原文：**

> $$
> |\ell(\varphi)| \le C'' N_{2s+2n+2}(\varphi).
> $$

**修正：**

> $$
> |\ell(\varphi)| \le C'' N_{P_s}(\varphi).
> $$

**理由：** 两处缓增性估计均采用定义好的非负整数Ps，避免把非整数或负指数当Schwartz范数指标。

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 数学修正

**原文：**

> $$|\langle u, \varphi \rangle| \leqslant C' N_{s+n+1}(\varphi),$$

**修正：**

> $$|\langle u, \varphi \rangle| \leqslant C'N_{P_s}(\varphi),$$

**理由：** 沿用Ps=max(0,ceil(2s+n+1))+n+1的Schwartz控制，任意实数s时Ns+n+1未定义，原图需整数化。

**原文：**

> $$
> \begin{aligned}
> |\langle \widehat{v}, \widehat{\varphi} \rangle| &= \left| \left\langle \widehat{u}, \mathcal{F}\left((1 - \Delta)^{-\frac{s}{2}} \varphi\right) \right\rangle \right| \\
> &= (2\pi)^n \left| \left\langle u, (1 - \Delta)^{-\frac{s}{2}} \varphi \right\rangle \right| \\
> &\leqslant C \|(1 - \Delta)^{-\frac{s}{2}} \varphi\|_{H^s} = C \|\varphi\|_{L^2} \\
> &= C' \|\widehat{\varphi}\|_{L^2}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\langle \widehat{v}, \widehat{\varphi} \rangle| &= \left| \left\langle \widehat{u}, \mathcal{F}\left((1 - \Delta)^{-\frac{s}{2}} \varphi\right) \right\rangle \right| \\
> &= (2\pi)^n \left| \left\langle u,\left((1-\Delta)^{-\frac s2}\varphi\right)^\check{}\right\rangle \right| \\
> &\leqslant C \|(1 - \Delta)^{-\frac{s}{2}} \varphi\|_{H^s} = C(2\pi)^{n/2}\|\varphi\|_{L^2} \\
> &= C' \|\widehat{\varphi}\|_{L^2}.
> \end{aligned}
> $$

**理由：** 分布Fourier配对连续转移两次给F²ψ=(2π)^n checkψ，原图第二行遗漏反射。反射保持Hs范数，后面的上界仍成立。

**原文：**

> $$
> \begin{array}{ccc}
> \mathcal{S}(\mathbb{R}^n) & \xrightarrow{\quad \iota \quad} & H^s(\mathbb{R}^n) \\
> & \underset{L_v}{\searrow} & \downarrow L_v \\
> & & \mathbb{C}
> \end{array}
> $$

**修正：**

> $$
> \begin{array}{ccc}
> \mathcal{S}(\mathbb{R}^n) & \xrightarrow{\quad\iota\quad}&L^2(\mathbb R^n) \\
> & \underset{L_v}{\searrow} & \downarrow L_v \\
> & & \mathbb{C}
> \end{array}
> $$

**理由：** 此处刚证明频率泛函Lv按L²范数有界并扩张到L²，交换图右上应L²，原图沿用之前的Hs。

**原文：**

> $$
> \begin{aligned}
> H^{-s}(\mathbb{R}^n) \longrightarrow (H^s(\mathbb{R}^n))^*, \quad u &\mapsto l_u : H^s(\mathbb{R}^n) \to \mathbb{C}, \\
> v &\mapsto \int_{\mathbb{R}^n} u(x)v(x) dx.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> H^{-s}(\mathbb{R}^n) \longrightarrow (H^s(\mathbb{R}^n))^*, \quad u &\mapsto l_u : H^s(\mathbb{R}^n) \to \mathbb{C}, \\
> v&\mapsto\frac1{(2\pi)^n}\int_{\mathbb R^n}\widehat u(\xi)\widehat v(-\xi)\,d\xi.
> \end{aligned}
> $$

**理由：** 一般u∈H^−s可能不是函数，例如适当s时为δ，不能对uv作普通物理积分。频率加权Cauchy–Schwarz保证该积分收敛，它才定义一般Sobolev对偶；当两者是适当函数时等于物理空间双线性积分。

**原文：**

> $$
> \begin{aligned}
> |\langle \widehat{v}, \widehat{\varphi} \rangle| &= \left| \left\langle \widehat{u}, \mathcal{F}\left((1 - \Delta)^{-\frac{s}{2}} \varphi\right) \right\rangle \right| \\
> &= (2\pi)^n \left| \left\langle u, (1 - \Delta)^{-\frac{s}{2}} \varphi \right\rangle \right| \\
> &\leqslant C \|(1 - \Delta)^{-\frac{s}{2}} \varphi\|_{H^s} = C \|\varphi\|_{L^2} \\
> &= C' \|\widehat{\varphi}\|_{L^2}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> |\langle \widehat{v}, \widehat{\varphi} \rangle| &= \left| \left\langle \widehat{u}, \mathcal{F}\left((1 - \Delta)^{-\frac{s}{2}} \varphi\right) \right\rangle \right| \\
> &= (2\pi)^n \left| \left\langle u,\left((1-\Delta)^{-\frac s2}\varphi\right)^\check{}\right\rangle \right| \\
> &\leqslant C \|(1 - \Delta)^{-\frac{s}{2}} \varphi\|_{H^s} = C(2\pi)^{n/2}\|\varphi\|_{L^2} \\
> &= C' \|\widehat{\varphi}\|_{L^2}.
> \end{aligned}
> $$

**理由：** Hs定义为无(2π)因子的频率加权L2范数，且本课程Fourier变换的Plancherel因子为(2π)^(n/2)。因此||(1−Δ)^−s/2 φ||Hs=(2π)^(n/2)||φ||L2，所写同一个C的等号不能省此因子；下一行可吸收到新常数C′。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \|(1-\Delta)^{-s/2}\varphi\|_{H^s}^2=\|\varphi\|_{L^2}^2
> ```

**正文：**

> $$
> \begin{aligned}
> |\langle \widehat{v}, \widehat{\varphi} \rangle| &= \left| \left\langle \widehat{u}, \mathcal{F}\left((1 - \Delta)^{-\frac{s}{2}} \varphi\right) \right\rangle \right| \\
> &= (2\pi)^n \left| \left\langle u,\left((1-\Delta)^{-\frac s2}\varphi\right)^\check{}\right\rangle \right| \\
> &\leqslant C \|(1 - \Delta)^{-\frac{s}{2}} \varphi\|_{H^s} = C(2\pi)^{n/2}\|\varphi\|_{L^2} \\
> &= C' \|\widehat{\varphi}\|_{L^2}.
> \end{aligned}
> $$

**理由：** 此处估计的是线性泛函的绝对值，需由函数的一次范数控制；源图在中间改为平方范数，缩放φ即否证全式。Markdown已保持一次范数。

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 数学修正

**原文：**

> 任意的 $u \in H^{s-\frac{1}{2}}(\mathbb{R}^n)$

**修正：**

> 任意的 $u\in H^{s-\frac12}(\mathbb R^{n-1})$

**理由：** 待扩张边界函数在n−1维超平面，不是n维Rn；原图空间维数漏减1。

[相关正文：71：Riesz 表示、Sobolev 对偶与迹定理](../../03-math-analysis-iii/71-riesz-duality.md)

## 数学修正

**原文：**

> $$
> \widehat{U}(\xi', \xi_n) = \widehat{u}(\xi') \frac{2\pi (1+|\xi'|^2)^{\frac{s}{2}-\frac{1}{2}}}{C_s (1+|\xi|^2)^{\frac{s}{2}}}.
> $$

**修正：**

> $$
> \widehat{U}(\xi', \xi_n) = \widehat{u}(\xi') \frac{2\pi (1+|\xi'|^2)^{s-\frac12}}{C_s (1+|\xi|^2)^s}.
> $$

**理由：** 右逆取hatU=hat u·2π(1+|ξ′|²)^(s−1/2)/(Cs(1+|ξ|²)^s)，借前页∫(1+|ξ|²)^−s dξn=Cs(1+|ξ′|²)^(−s+1/2)归一。原图错用s/2且边界积分漏d微元，需同组修正。

**原文：**

> $$
> \begin{aligned}
> \|U\|_{H^s(\mathbb{R}^n)}^2 &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^n} (1+|\xi|^2)^s |\widehat{u}(\xi')|^2 \frac{2\pi (1+|\xi'|^2)^{2s-1}}{C_s^2 (1+|\xi|^2)^{2s}} d\xi \\
> &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{2s-1} \int_{\mathbb{R}} \frac{d\xi_n}{(1+|\xi|^2)^s} d\xi' \\
> &= \frac{4\pi^2}{C_s} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{s-\frac{1}{2}} d\xi' \\
> &= \frac{4\pi^2}{C_s} \|u\|_{H^{n-1}}^2 < \infty.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|U\|_{H^s(\mathbb{R}^n)}^2 &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^n} (1+|\xi|^2)^s |\widehat{u}(\xi')|^2 \frac{(1+|\xi'|^2)^{2s-1}}{(1+|\xi|^2)^{2s}} d\xi \\
> &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{2s-1} \int_{\mathbb{R}} \frac{d\xi_n}{(1+|\xi|^2)^s} d\xi' \\
> &= \frac{4\pi^2}{C_s} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{s-\frac{1}{2}} d\xi' \\
> &= \frac{4\pi^2}{C_s} \|u\|_{H^{s-\frac12}(\mathbb R^{n-1})}^2 < \infty.
> \end{aligned}
> $$

**理由：** 展开正确扩张乘子的模平方，4π²/Cs²已在积分外，积分内只留(1+|ξ′|²)^(2s−1)/(1+|ξ|²)^(2s)，原图重复放入2π与Cs²。

**原文：**

> $$
> \begin{aligned}
> \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{U}(\xi', \xi_n) d\xi_n &= \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{u}(\xi') \frac{2\pi (1+|\xi'|^2)^{\frac{s}{2}-\frac{1}{2}}}{C_s (1+|\xi|^2)^{\frac{s}{2}}} \xi_n \\
> &= \frac{1}{C_s} \widehat{u}(\xi') (1+|\xi'|^2)^{\frac{s}{2}-\frac{1}{2}} \int_{\mathbb{R}} \frac{1}{C_s (1+|\xi|^2)^{\frac{s}{2}}} \xi_n \\
> &= \widehat{u}(\xi').
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{U}(\xi', \xi_n) d\xi_n &= \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{u}(\xi') \frac{2\pi (1+|\xi'|^2)^{s-\frac12}}{C_s (1+|\xi|^2)^s}\,d\xi_n \\
> &= \frac{1}{C_s} \widehat{u}(\xi') (1+|\xi'|^2)^{s-\frac12} \int_{\mathbb{R}} \frac{1}{(1+|\xi|^2)^s}\,d\xi_n \\
> &= \widehat{u}(\xi').
> \end{aligned}
> $$

**理由：** 右逆取hatU=hat u·2π(1+|ξ′|²)^(s−1/2)/(Cs(1+|ξ|²)^s)，借前页∫(1+|ξ|²)^−s dξn=Cs(1+|ξ′|²)^(−s+1/2)归一。原图错用s/2且边界积分漏d微元，需同组修正。

**原文：**

> $$
> \begin{aligned}
> \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{U}(\xi', \xi_n) d\xi_n &= \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{u}(\xi') \frac{2\pi (1+|\xi'|^2)^{\frac{s}{2}-\frac{1}{2}}}{C_s (1+|\xi|^2)^{\frac{s}{2}}} \xi_n \\
> &= \frac{1}{C_s} \widehat{u}(\xi') (1+|\xi'|^2)^{\frac{s}{2}-\frac{1}{2}} \int_{\mathbb{R}} \frac{1}{C_s (1+|\xi|^2)^{\frac{s}{2}}} \xi_n \\
> &= \widehat{u}(\xi').
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{U}(\xi', \xi_n) d\xi_n &= \frac{1}{2\pi} \int_{\mathbb{R}} \widehat{u}(\xi') \frac{2\pi (1+|\xi'|^2)^{s-\frac12}}{C_s (1+|\xi|^2)^s}\,d\xi_n \\
> &= \frac{1}{C_s} \widehat{u}(\xi') (1+|\xi'|^2)^{s-\frac12} \int_{\mathbb{R}} \frac{1}{(1+|\xi|^2)^s}\,d\xi_n \\
> &= \widehat{u}(\xi').
> \end{aligned}
> $$

**理由：** 2π与外1/(2π)相消后，Cs只有外面一个，内部核为(1+|ξ|²)^−s。原图又多除Cs、错用s/2并缺dξn，不能得到hat u。

**原文：**

> $$
> \begin{aligned}
> \|U\|_{H^s(\mathbb{R}^n)}^2 &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^n} (1+|\xi|^2)^s |\widehat{u}(\xi')|^2 \frac{2\pi (1+|\xi'|^2)^{2s-1}}{C_s^2 (1+|\xi|^2)^{2s}} d\xi \\
> &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{2s-1} \int_{\mathbb{R}} \frac{d\xi_n}{(1+|\xi|^2)^s} d\xi' \\
> &= \frac{4\pi^2}{C_s} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{s-\frac{1}{2}} d\xi' \\
> &= \frac{4\pi^2}{C_s} \|u\|_{H^{n-1}}^2 < \infty.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|U\|_{H^s(\mathbb{R}^n)}^2 &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^n} (1+|\xi|^2)^s |\widehat{u}(\xi')|^2 \frac{(1+|\xi'|^2)^{2s-1}}{(1+|\xi|^2)^{2s}} d\xi \\
> &= \frac{4\pi^2}{C_s^2} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{2s-1} \int_{\mathbb{R}} \frac{d\xi_n}{(1+|\xi|^2)^s} d\xi' \\
> &= \frac{4\pi^2}{C_s} \int_{\mathbb{R}^{n-1}} |\widehat{u}(\xi')|^2 (1+|\xi'|^2)^{s-\frac{1}{2}} d\xi' \\
> &= \frac{4\pi^2}{C_s} \|u\|_{H^{s-\frac12}(\mathbb R^{n-1})}^2 < \infty.
> \end{aligned}
> $$

**理由：** 前式积分权为(1+|ξ′|²)^(s−1/2)，相应是n−1维Hs−1/2范数；原图把空间维数误当Sobolev阶。
