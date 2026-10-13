# 勘误：66 L2 Fourier 变换、Schwartz 空间与缓增分布

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> Planchrel

**修正：**

> Plancherel

**理由：** 源图人名Plancherel漏写e，结合L2 Fourier等式可唯一识别。

**原文：**

> $$
> \begin{aligned}
> \|\widehat{f}(\xi)\|_{L^2}^2 &= \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{f}(\xi)} d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} \widehat{f}(\xi) \mathcal{F}^{-1}(\overline{f}(\xi)) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \mathcal{F}\left(\mathcal{F}^{-1}(\overline{f}(\xi))\right)(x) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \overline{f}(x) d \xi.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|\widehat{f}(\xi)\|_{L^2}^2 &= \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{f}(\xi)} d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} \widehat{f}(\xi)(\mathcal{F}^{-1}(\overline{f}))(\xi) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \mathcal{F}\left(\mathcal{F}^{-1}(\overline{f})\right)(x) d x \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \overline{f}(x) d x.
> \end{aligned}
> $$

**理由：** 源图应对函数bar f做逆变换，再在ξ取值；不可先取bar f(ξ)标量后作函数变换。

**原文：**

> $$
> \begin{aligned}
> \|\widehat{f}(\xi)\|_{L^2}^2 &= \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{f}(\xi)} d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} \widehat{f}(\xi) \mathcal{F}^{-1}(\overline{f}(\xi)) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \mathcal{F}\left(\mathcal{F}^{-1}(\overline{f}(\xi))\right)(x) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \overline{f}(x) d \xi.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|\widehat{f}(\xi)\|_{L^2}^2 &= \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{f}(\xi)} d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} \widehat{f}(\xi)(\mathcal{F}^{-1}(\overline{f}))(\xi) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \mathcal{F}\left(\mathcal{F}^{-1}(\overline{f})\right)(x) d x \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \overline{f}(x) d x.
> \end{aligned}
> $$

**理由：** 源图Fubini配对后积分变量已为x，需dx；Fourier及逆变换均作用于整个函数bar f，不是其ξ处值。

**原文：**

> $$
> \begin{aligned}
> \|\widehat{f}(\xi)\|_{L^2}^2 &= \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{f}(\xi)} d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} \widehat{f}(\xi) \mathcal{F}^{-1}(\overline{f}(\xi)) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \mathcal{F}\left(\mathcal{F}^{-1}(\overline{f}(\xi))\right)(x) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \overline{f}(x) d \xi.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|\widehat{f}(\xi)\|_{L^2}^2 &= \int_{\mathbb{R}^n} \widehat{f}(\xi) \overline{\widehat{f}(\xi)} d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} \widehat{f}(\xi)(\mathcal{F}^{-1}(\overline{f}))(\xi) d \xi \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \mathcal{F}\left(\mathcal{F}^{-1}(\overline{f})\right)(x) d x \\
> &= (2\pi)^n \int_{\mathbb{R}^n} f(x) \overline{f}(x) d x.
> \end{aligned}
> $$

**理由：** 源图Plancherel计算末行被积函数以x为变量，微分误写dξ，应dx。

**原文：**

> 定义在 $L^2(\mathbb{R}^n)$ 是稠密的子空间

**修正：**

> 定义在 $L^2(\mathbb{R}^n)$ 中稠密的子空间

**理由：** 源图介词是误写，应为中，说明Fourier先定义于稠密子空间。

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> Planchrel

**修正：**

> Plancherel

**理由：** 源图人名Plancherel漏e，定理是已给出的L2 Fourier等式。

**原文：**

> $$
> (2\pi)^{\frac{n}{2}} \mathcal{F} : L^2(\mathbb{R}^n) \longrightarrow L^2(\mathbb{R}^n)
> $$

**修正：**

> $$
> (2\pi)^{-\frac{n}{2}} \mathcal{F} : L^2(\mathbb{R}^n) \longrightarrow L^2(\mathbb{R}^n)
> $$

**理由：** 源图归一化方向错；已证‖Ff‖2=(2π)^(n/2)‖f‖2，因此等距算子必须乘(2π)^(−n/2)。

**原文：**

> $$
> \mathcal{F}_1(g) = \int_{\mathbb{R}^n} g(x) e^{-i x \xi} d x.
> $$

**修正：**

> $$
> \mathcal{F}_1(g) = \int_{\mathbb{R}^n} g(x) e^{-i x \cdot \xi} d x.
> $$

**理由：** 源图n维Fourier指数须欧氏内积，不能并置两个向量；后文一维例子不需改。

**原文：**

> 所谓, 我们有

**修正：**

> 所以, 我们有

**理由：** 源图所谓为所以的误字，由L2逼近推出变换逼近。

**原文：**

> $$
> \widehat{u} \overset{L^2}{=} \lim_{n \to} \widehat{u_n}.
> $$

**修正：**

> $$
> \widehat{u} \overset{L^2}{=} \lim_{n \to \infty} \widehat{u_n}.
> $$

**理由：** 源图序列极限箭头后缺∞，上下文n≥1截断逼近需n→∞。

**原文：**

> $$
> \widehat{\widehat{f}} = \check{f} \quad \Leftrightarrow \quad \mathcal{F}^2(f) = \check{f}.
> $$

**修正：**

> $$
> \widehat{\widehat{f}} = (2\pi)^n\check{f} \quad \Leftrightarrow \quad \mathcal{F}^2(f) = (2\pi)^n\check{f}.
> $$

**理由：** 源图未归一化Fourier二次变换漏(2π)^n；逆变换定义F^−1=(2π)^−n checkF，故F²=(2π)^n check，亦与Plancherel范数一致。

## 未决数学问题

**原文：**

> 上述一切叙述对 $C_0^\infty(\mathbb{R}^n)$ 是成立的

**问题：** 源图仅范数等式和稠密延拓证明了等距嵌入，等距同构的满射性未证明；F(C0∞)一般不在C0∞，故不能直接把同构叙述说在此子空间成立。还需用逆变换在L2上的连续延拓与互逆关系或证明值域稠密。结论正确，记录证明缺口。

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> $$
> \lim_{n \to \infty} N_p(\varphi_n - \varphi) = 0.
> $$

**修正：**

> $$
> \lim_{k \to \infty} N_p(\varphi_k - \varphi) = 0.
> $$

**理由：** 源图收敛序列在前后均φk，此处误换n（空间维数也用n），统一为k。

**原文：**

> $e^{-x^2} \in \mathcal{S}(\mathbb{R}^n)$

**修正：**

> $e^{-|x|^2} \in \mathcal{S}(\mathbb{R}^n)$

**理由：** 源图Rn向量x的平方未定义，此Gaussian例应欧氏范数平方，与本节n维速降例一致。

**原文：**

> $$
> |(1 + |x|)^{n+1} x^\alpha \partial^\beta \varphi(x)| \leqslant N_{p+n+1}(\varphi),
> $$

**修正：**

> $$
> |(1 + |x|)^{n+1} x^\alpha \partial^\beta \varphi(x)| \leqslant C_n N_{p+n+1}(\varphi),
> $$

**理由：** 源图Np为各单项式范数之和仍不能吸收展开系数1以上；用|x|≤Σ|xj|展开(1+Σ|xj|)^(n+1)，各系数≤(n+1)!，故Cn=(n+1)!足够。

**原文：**

> $$
> |x^\alpha \partial^\beta \varphi(x)| \leqslant \frac{N_{p+n+1}(\varphi)}{(1 + |x|)^{n+1}}.
> $$

**修正：**

> $$
> |x^\alpha \partial^\beta \varphi(x)| \leqslant \frac{C_n N_{p+n+1}(\varphi)}{(1 + |x|)^{n+1}}.
> $$

**理由：** 源图后续速降界承接上一式，同样需要维数常数Cn；其存在由多项式展开严格给出。

**原文：**

> 其中, $n$ 是空间的维数。

**修正：**

> 其中，$n$ 是空间的维数，可取 $C_n=(n+1)!$。

**理由：** 为源图Np求和估计补正确维数常数：多项式展开(1+Σ|xj|)^(n+1)每个系数≤(n+1)!，所有项范数均已纳入Np+n+1。

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> $$
> \|x^\alpha \partial^\beta \varphi(x)\|_{L^1(\mathbb{R}^n)} \leqslant C_n N_{p+d+1}(\varphi).
> $$

**修正：**

> $$
> \|x^\alpha \partial^\beta \varphi(x)\|_{L^1(\mathbb{R}^n)} \leqslant C_n N_{p+n+1}(\varphi).
> $$

**理由：** 可积性估计使用n维空间的衰减权(1+|x|)^−(n+1)，d未定义；原图误写维数符号。

**原文：**

> $$
> \begin{cases}
> \chi(x) = 1, & |x| = 1; \\
> 0 \leqslant \chi(x) \leqslant 1.
> \end{cases}
> $$

**修正：**

> $$
> \begin{cases}
> \chi(x)=1,&|x|\leqslant1; \\
> 0 \leqslant \chi(x) \leqslant 1.
> \end{cases}
> $$

**理由：** 后面的截断估计明确要求χ在整个单位球内恒为1，仅在球面取1不保证χ(x/k)趋于1。原图条件漏小于号。

**原文：**

> $$
> \begin{aligned}
> \left|\left(1 - \chi\left(\frac{x}{k}\right)\right) x^\alpha \partial^\beta \varphi\right| &\leqslant \mathbf{1}_{|x| \geqslant k}(x) \cdot |x|^{-2} \cdot |x^{\alpha+2} \partial^\beta \varphi| \\
> &\leqslant \frac{1}{k^2} N_{p+2}(\varphi) \to 0.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left|\left(1 - \chi\left(\frac{x}{k}\right)\right) x^\alpha \partial^\beta \varphi\right| &\leqslant \mathbf{1}_{|x| \geqslant k}(x) \cdot |x|^{-2} \cdot \sum_{j=1}^n|x^{\alpha+2e_j}\partial^\beta\varphi| \\
> &\leqslant \frac{1}{k^2} N_{p+2}(\varphi) \to 0.
> \end{aligned}
> $$

**理由：** α为多重指标，α+2没有定义；用|x|²=Σx_j²，把x^α乘每个x_j²后求和，才是正确的n维二次权估计。e_j为第j个标准多重指标。

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> $$\widehat{\partial_k \varphi} = i\xi_k \widehat{f}, \quad \widehat{x_k \varphi} = i\partial_k \widehat{\varphi}.$$

**修正：**

> $$\widehat{\partial_k \varphi} = i\xi_k\widehat\varphi, \quad \widehat{x_k \varphi} = i\partial_k \widehat{\varphi}.$$

**理由：** 恒等式左侧是φ的导数的Fourier变换，右侧必须仍为φ的变换；f未在本定理中定义，源图换错符号。

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> $\mathcal{S}'(\mathbb{R}^n) \times \mathcal{S}(\mathbb{R}^n) \to \mathbb{R}$

**修正：**

> $\mathcal S'(\mathbb R^n)\times\mathcal S(\mathbb R^n)\to\mathbb C$

**理由：** 缓增分布和测试函数均为复线性，配对值是复数；原图定理括注误写实数值域，与Tu:S→C声明不符。

**原文：**

> 对每个 $\varphi \in \mathcal{S}'(\mathbb{R}^n)$

**修正：**

> 对每个 $\varphi\in\mathcal S(\mathbb R^n)$

**理由：** Tu的输入是Schwartz测试函数，不是缓增分布。原图测试函数空间多写prime，使半范数Np(φ)失去定义。

**原文：**

> $$|N_{p_0}(\varphi_k) - N_{p_0}(\varphi_\ell)| = N_{p_0}(\varphi_k - \varphi_\ell)$$

**修正：**

> $$|N_{p_0}(\varphi_k)-N_{p_0}(\varphi_\ell)|\leqslant N_{p_0}(\varphi_k - \varphi_\ell)$$

**理由：** 半范数满足反三角不等式，一般没有差的范数等于范数差。取φk=φ、φell=−φ即见左0而右2Npφ，原图等号需改为≤。

[相关正文：L2 Fourier 变换、Schwartz 空间与缓增分布](../../03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804.md)

## 数学修正

**原文：**

> $$|N_{p_0}(\varphi_k) - N_{p_0}(\psi_k)| = N_{p_0}(\varphi_k - \psi_k)$$

**修正：**

> $$|N_{p_0}(\varphi_k)-N_{p_0}(\psi_k)|\leqslant N_{p_0}(\varphi_k - \psi_k)$$

**理由：** 此处同样是反三角不等式，范数之差的绝对值至多差的范数，原图错写等号。

**原文：**

> $$\leqslant N_{p_0}(\varphi_k - \varphi) + N_{p_0}(\varphi_\ell - \varphi) \xrightarrow{k, \ell \to \infty} 0.$$

**修正：**

> $$\leqslant N_{p_0}(\varphi_k - \varphi) + N_{p_0}(\psi_k-\varphi)\xrightarrow{k\to\infty} 0.$$

**理由：** 本段比较两个同时编号k的逼近列φk和ψk，第二项应为ψk−φ，而不是上一段同列的φell−φ；原图复制了错误变量与双极限指标。

**原文：**

> $T_\mu$

**修正：**

> $T_u$

**理由：** 待扩张泛函以给定缓增分布u为下标，本段没有μ。原图把Tu误写Tμ。

[相关正文：66.1：作业：Fourier逆变换的另一个计算，一个分布扩张的问题，分布的张量积](../../03-math-analysis-iii/66-schwartz-tempered/66-03-p0805-0810.md)

## 数学修正

**原文：**

> $$u(t, x) = -t \int_{S^2} u_1(x - t\theta') \frac{\mathrm{d}\sigma_{S^2}(\theta')}{4\pi} - \partial_t \left[ t \int_{S^2} u_0(x - t\theta') \frac{\mathrm{d}\sigma_{S^2}(\theta')}{4\pi} \right].$$

**修正：**

> $$u(t, x) = t \int_{S^2} u_1(x - t\theta') \frac{\mathrm{d}\sigma_{S^2}(\theta')}{4\pi} +\partial_t \left[ t \int_{S^2} u_0(x - t\theta') \frac{\mathrm{d}\sigma_{S^2}(\theta')}{4\pi} \right].$$

**理由：** 给定初值u(0,x)=u0、∂tu(0,x)=u1，Kirchhoff公式两项均为正号；原图写负号会得到负的初值。此前波动算子定义为−∂t²+Δ，其基本解为负，但源项也为负，二者抵消，不会改变此初值检验。

**原文：**

> $$\widehat{\widehat{f}} = \check{f} \Leftrightarrow \mathcal{F}_2^2(f) = \check{f}.$$

**修正：**

> $$\widehat{\widehat{f}} =(2\pi)^n\check f \Leftrightarrow \mathcal{F}_2^2(f) =(2\pi)^n\check f.$$

**理由：** 本课程Fourier变换为∫e^(−ixξ)f dx，没有单位归一化，连续做两次需乘(2π)^n，与逆变换系数(2π)^−n一致。源图两处漏该因子。

**原文：**

> 假设 $\operatorname{supp}(u)$, $\operatorname{supp}(v)$ 和 $\operatorname{supp}(w)$ 是可卷的

**修正：**

> 假设三个支集联合可卷，即在 $\operatorname{supp}(u)\times\operatorname{supp}(v)\times\operatorname{supp}(w)$ 上的求和映射 $(x,y,z)\mapsto x+y+z$ 为固有映射

**理由：** 卷积结合律要求三者联合的求和映射固有；仅任意两者可卷不能保证迭代卷积存在。三条方向两两不反向但相加为0的射线给成对可卷而三者不固有的反例，需说明本题是联合可卷条件。

[相关正文：66.1：作业：Fourier逆变换的另一个计算，一个分布扩张的问题，分布的张量积](../../03-math-analysis-iii/66-schwartz-tempered/66-03-p0805-0810.md)

## 数学修正

**原文：**

> $$\sup_{|\alpha| \le p} \|\partial^\beta (T\varphi)\|_{L^\infty(K)} \le C \sup_{|\beta| \le q} \|\partial^\beta \varphi\|_{L^\infty(L)}.$$

**修正：**

> $$\sup_{|\alpha|\le p}\|\partial^\alpha(T\varphi)\|_{L^\infty(K)} \le C \sup_{|\beta| \le q} \|\partial^\beta \varphi\|_{L^\infty(L)}.$$

**理由：** 左侧上确界遍历α，导数也必须是α，原图写β使α变成无作用变量且β在左侧自由。

**原文：**

> B3) 证明, $x u_\lambda \in L^2(\mathbb{R})$。

**修正：**

> B3) 证明，$xu_\lambda\in L^2(\mathbb R)$ 当且仅当 $\lambda>-\frac32$。

**理由：** 由定义xuλ=x^(λ+1)·1_(0,1)，其平方在0可积恰当2(λ+1)>−1。原题对所有λ>−2声称L²，λ=−7/4反例；精确阈值为−3/2。

[相关正文：66.1：作业：Fourier逆变换的另一个计算，一个分布扩张的问题，分布的张量积](../../03-math-analysis-iii/66-schwartz-tempered/66-03-p0805-0810.md)

## 数学修正

**原文：**

> $\varepsilon_n \to 0$

**修正：**

> $\varepsilon_k\to0$

**理由：** 序列此前以k编号，极限同样用k，避免沿用不存在的编号n。

**原文：**

> $$(f * d_\varepsilon)(x) \to f(x)$$

**修正：**

> $$(f*d_{\varepsilon_k})(x)\to f(x)$$

**理由：** L¹逼近只能选子列得到几乎处处收敛，本题已选εk；结论须沿该子列，不能据此断言所有ε趋于0的逐点极限。

[相关正文：66.1：作业：Fourier逆变换的另一个计算，一个分布扩张的问题，分布的张量积](../../03-math-analysis-iii/66-schwartz-tempered/66-03-p0805-0810.md)

## 数学修正

**原文：**

> $$\mathcal{D}(\mathbb{R}) \to \mathbb{R}, \quad \varphi \mapsto \sum_{k=1}^\infty \left( \varphi\left(\frac{1}{k}\right) - \varphi(0) \right),$$

**修正：**

> $$\mathcal{D}(\mathbb{R}) \to \mathbb{R}, \quad \varphi \mapsto \sum_{k=1}^\infty \left( \varphi\left(\frac1k\right)-\varphi(0)-\frac{\varphi'(0)}k\right),$$

**理由：** 只减常数时取φ在0附近等于x，各项为1/k，原题级数发散。再减一次Taylor项后余项O(k^−2)，和绝对收敛且由二阶半范数控制，才能定义分布。

[相关正文：66.1：作业：Fourier逆变换的另一个计算，一个分布扩张的问题，分布的张量积](../../03-math-analysis-iii/66-schwartz-tempered/66-03-p0805-0810.md)

## 数学修正

**原文：**

> 在 $\operatorname{supp}(\varphi)$ 上

**修正：**

> 在包含 $\operatorname{supp}(\varphi)$ 的一个紧长方体上

**理由：** 把多项式乘紧截断用于D拓扑逼近，需连同支集外的截断区域一起控制各阶导数。仅在原支集上控制不足以保证外部乘积趋于零；用包含支集的紧长方体上的C∞多项式逼近可完成张量积稠密性证明。
