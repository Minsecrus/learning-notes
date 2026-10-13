# 勘误：69 数学物理方程与 Sobolev 空间

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：69：数学物理方程与 Sobolev 空间](../../03-math-analysis-iii/69-sobolev-introduction.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \langle \mathcal{F}_{x \to \xi}(\delta_{0,0}), \varphi \rangle &= \langle u, \int_{\mathbb{R}^n} e^{-ix \cdot \xi} \varphi(t, x) dx \rangle = \left. \int_{\mathbb{R}^n} e^{-ix \cdot \xi} \varphi(t, x) dx \right|_{(t, \xi)=(0,0)} \\
> &= \int_{\mathbb{R}^n} \varphi(0, x) dx = \int_{\mathbb{R}^n} \langle \delta_{t=0}, \varphi(t, x) \rangle dx.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \langle \mathcal{F}_{x \to \xi}(\delta_{0,0}), \varphi \rangle &=\langle\delta_{0,0},\int_{\mathbb R^n} e^{-ix \cdot \xi} \varphi(t, x) dx \rangle = \left. \int_{\mathbb{R}^n} e^{-ix \cdot \xi} \varphi(t, x) dx \right|_{(t, \xi)=(0,0)} \\
> &= \int_{\mathbb{R}^n} \varphi(0, x) dx = \int_{\mathbb{R}^n} \langle \delta_{t=0}, \varphi(t, x) \rangle dx.
> \end{aligned}
> $$

**理由：** 本例正在计算δ_(0,0)的部分Fourier变换，配对分布应为δ_(0,0)，原图误写未定义u。

[相关正文：69：数学物理方程与 Sobolev 空间](../../03-math-analysis-iii/69-sobolev-introduction.md)

## 数学修正

**原文：**

> $$
> \partial_t^2 \left( \widehat{W}(t, \xi) + |\xi|^2 \right) = \delta_{t=0} \cdot b(\xi) |\xi| \cos(t|\xi|).
> $$

**修正：**

> $$
> \left(\partial_t^2+|\xi|^2\right)\widehat{W}(t,\xi) = \delta_{t=0} \cdot b(\xi) |\xi| \cos(t|\xi|).
> $$

**理由：** 原方程是算子∂t²+|ξ|²作用于W，不能把|ξ|²加到W中再对t求二阶导，否则该项被消去。修正算子括号才与δ源项一致。

[相关正文：69：数学物理方程与 Sobolev 空间](../../03-math-analysis-iii/69-sobolev-introduction.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \|\varphi\|_{H^s}^2 &= \int_{\mathbb{R}^n} \underbrace{(1+|\xi|^2)^{s+\frac{n+1}{2}} |\widehat{\varphi}|^2}_{\in L^\infty} \underbrace{(1+|\xi|^2)^{-\frac{n+1}{2}}}_{\in L^1} d\xi \\
> &\leqslant C N_{2s+n+1}(\widehat{\varphi})^2 \int_{\mathbb{R}^n} (1+|\xi|^2)^{-\frac{n+1}{2}} d\xi \\
> &\leqslant C' N_{2s+2n+2}(\varphi)^2.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|\varphi\|_{H^s}^2 &= \int_{\mathbb{R}^n} \underbrace{(1+|\xi|^2)^{s+\frac{n+1}{2}} |\widehat{\varphi}|^2}_{\in L^\infty} \underbrace{(1+|\xi|^2)^{-\frac{n+1}{2}}}_{\in L^1} d\xi \\
> &\leqslant C N_q(\widehat\varphi)^2 \int_{\mathbb{R}^n} (1+|\xi|^2)^{-\frac{n+1}{2}} d\xi \\
> &\leqslant C' N_{q+n+1}(\varphi)^2.
> \end{aligned}
> $$

**理由：** s可为任意实数，2s+n+1可能非整数或负数，Schwartz半范数只对非负整数定义。取q=max(0,ceil(2s+n+1))足够控制该权。

**原文：**

> $$
> \begin{aligned}
> \|\varphi\|_{H^s}^2 &= \int_{\mathbb{R}^n} \underbrace{(1+|\xi|^2)^{s+\frac{n+1}{2}} |\widehat{\varphi}|^2}_{\in L^\infty} \underbrace{(1+|\xi|^2)^{-\frac{n+1}{2}}}_{\in L^1} d\xi \\
> &\leqslant C N_{2s+n+1}(\widehat{\varphi})^2 \int_{\mathbb{R}^n} (1+|\xi|^2)^{-\frac{n+1}{2}} d\xi \\
> &\leqslant C' N_{2s+2n+2}(\varphi)^2.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|\varphi\|_{H^s}^2 &= \int_{\mathbb{R}^n} \underbrace{(1+|\xi|^2)^{s+\frac{n+1}{2}} |\widehat{\varphi}|^2}_{\in L^\infty} \underbrace{(1+|\xi|^2)^{-\frac{n+1}{2}}}_{\in L^1} d\xi \\
> &\leqslant C N_q(\widehat\varphi)^2 \int_{\mathbb{R}^n} (1+|\xi|^2)^{-\frac{n+1}{2}} d\xi \\
> &\leqslant C' N_{q+n+1}(\varphi)^2.
> \end{aligned}
> $$

**理由：** 对上一步的整数q应用Fourier连续估计，物理空间半范数为N_{q+n+1}，避免把实数或负数当范数指标。

**原文：**

> 为了说明这一个点, 我们再次运用我们熟悉的一个技巧。

**修正：**

> 为了说明这一点，令 $q=\max\{0,\lceil2s+n+1\rceil\}$。我们再次运用熟悉的估计技巧。

**理由：** 为下面的Schwartz半范数明确引入非负整数q，保证任意实数s时估计有定义。

**原文：**

> $$
> \mathcal{D}'(\mathbb{R}^n) \subset \varinjlim_{s\in\mathbb{R}} H^s(\mathbb{R}^n) = \bigcup_{s\in\mathbb{R}} H^s(\mathbb{R}^n).
> $$

**修正：**

> $$
> \mathcal E'(\mathbb R^n)\subset\varinjlim_{s\in\mathbb{R}} H^s(\mathbb{R}^n) = \bigcup_{s\in\mathbb{R}} H^s(\mathbb{R}^n).
> $$

**理由：** 定理478证明紧支集分布属于某个全空间Hs，一般D′不成立，甚至缓增常数1也不在任何Hs；原图把E′错写D′，与紧接的831反例矛盾。

**原文：**

> $$
> H^m(\mathbb{R}^n) = \left\{ u \in \mathcal{S}'(\mathbb{R}) \;\middle|\; \text{对任意的多重指标 } \alpha, |\alpha| \leqslant m, \partial^\alpha u \in L^2(\mathbb{R}^n) \right\}.
> $$

**修正：**

> $$
> H^m(\mathbb{R}^n) = \left\{ u\in\mathcal S'(\mathbb R^n) \;\middle|\; \text{对任意的多重指标 } \alpha, |\alpha| \leqslant m, \partial^\alpha u \in L^2(\mathbb{R}^n) \right\}.
> $$

**理由：** 正整数阶Sobolev空间定义在Rn，待刻画分布亦在Rn，原图少n。

**原文：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} (1+|\xi|^2)^s |\widehat{u}|^2 d\xi &\approx \sum_{|\alpha|\leqslant m} \int_{\mathbb{R}^n} |\xi^\alpha \widehat{u}|^2 d\xi \\
> &\stackrel{\text{Planchrel}}{\approx} \sum_{|\alpha|\leqslant m} \int_{\mathbb{R}^n} |\partial^\alpha u|^2 dx.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \int_{\mathbb{R}^n} (1+|\xi|^2)^m|\widehat u|^2 d\xi &\approx \sum_{|\alpha|\leqslant m} \int_{\mathbb{R}^n} |\xi^\alpha \widehat{u}|^2 d\xi \\
> &\stackrel{\text{Planchrel}}{\approx} \sum_{|\alpha|\leqslant m} \int_{\mathbb{R}^n} |\partial^\alpha u|^2 dx.
> \end{aligned}
> $$

**理由：** 正在刻画整数阶Hm，积分权指数应m；s是上一段任意阶符号，原图此处误沿用s。

[相关正文：69：数学物理方程与 Sobolev 空间](../../03-math-analysis-iii/69-sobolev-introduction.md)

## 数学修正

**原文：**

> 我们假设它是多项式增长的。

**修正：**

> 我们假设它光滑，且每一阶导数均为多项式增长。

**理由：** 对任意缓增分布作乘法，乘子必须保持Schwartz测试函数；仅m本身多项式增长无法定义mδ′等乘积。各阶导数多项式增长正是作业A2的条件。

**原文：**

> 由于 $m(\xi)$ 是多项式增长的

**修正：**

> 由于 $m(\xi)$ 光滑且各阶导数均为多项式增长

**理由：** 保持S′的乘法需要Schwartz乘子条件，原说明只写函数增长不足以推出任意分布乘积仍缓增。

**原文：**

> 给定线性微分算子

**修正：**

> 给定常系数线性微分算子

**理由：** 所列Fourier乘子仅对应常系数微分算子，变系数乘法会在频率侧形成卷积，补明确所需常系数前提。
