# 勘误：67 缓增分布的 Fourier 变换

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> **定义 461** (收敛性). 给定缓增分布的序列 $\{u_k\}_{k \geqslant 1} \subset \mathcal{S}'(\Omega)$，我们说它在 $\mathcal{S}'(\mathbb{R}^n)$ 的意义下收敛到 $u \in \mathcal{S}'(\Omega)$，记作 $u_k \xrightarrow{\mathcal{S}'} u$，指的是对每个 Schwartz 函数 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，都有

**修正：**

> **定义 461** (收敛性). 给定缓增分布的序列 $\{u_k\}_{k \geqslant 1} \subset \mathcal S'(\mathbb R^n)$，我们说它在 $\mathcal{S}'(\mathbb{R}^n)$ 的意义下收敛到 $u \in \mathcal S'(\mathbb R^n)$，记作 $u_k \xrightarrow{\mathcal{S}'} u$，指的是对每个 Schwartz 函数 $\varphi \in \mathcal{S}(\mathbb{R}^n)$，都有

**理由：** 本节缓增分布只定义在整个Rn，Ω未定义且Schwartz测试函数仍在Rn。收敛定义的序列与极限均应在S′(Rn)，原图沿用普通开集分布的Ω。

**原文：**

> $$\langle \partial^\alpha u_k, \varphi \rangle = \lim_{k \to \infty} \langle u_k, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle u, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle \partial^\alpha u, \varphi \rangle.$$

**修正：**

> $$\lim_{k\to\infty}\langle\partial^\alpha u_k,\varphi\rangle=\lim_{k\to\infty} \langle u_k, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle u, (-1)^{|\alpha|} \partial^\alpha \varphi \rangle = \langle \partial^\alpha u, \varphi \rangle.$$

**理由：** 证明要表达逐项配对的极限，左侧也必须取k的极限；固定k配对一般不等于全序列极限，原图左侧漏lim。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \varphi\in\mathcal S\prime(\mathbb R^n)
> ```

**正文：**

> $\varphi \in \mathcal{S}(\mathbb{R}^n)$

**理由：** 分布导数配对的φ是Schwartz测试函数，原图把它写成缓增分布；Markdown已给S。

**原讲义片段：**

> ```text
> \langle\partial^\alpha u,\partial^\alpha\varphi_k\rangle
> ```

**正文：**

> $$\langle \partial^\alpha u, \varphi \rangle_{\mathcal{S}' \times \mathcal{S}} = (-1)^{|\alpha|} \lim_{k \to \infty} \langle u, \partial^\alpha \varphi_k \rangle$$

**理由：** 导数转移到测试函数一次后右侧应配对u，原图再次保留∂αu会重复求导；Markdown已用u。

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> $$\left| \langle f, \varphi \rangle \right| = \int_{\mathbb{R}^n} \frac{f}{(1+|x|^2)^{\frac{n+1}{2}}} \cdot \left( (1+|x|^2)^{\frac{n+1}{2}} \cdot \varphi \right) dx$$

**修正：**

> $$\left| \langle f, \varphi \rangle \right| =\left|\int_{\mathbb R^n}\frac f{(1+|x|^2)^{(n+1)/2}}\left((1+|x|^2)^{(n+1)/2}\varphi\right)dx\right|$$

**理由：** 左侧是复数配对的绝对值，右侧也应是积分的绝对值。原图直接等于可为复数的积分，遗漏模长。

**原文：**

> $$\leqslant \left( \int_{\mathbb{R}^n} \frac{1}{(1+|x|^2)^{\frac{n+1}{2}}} dx \right) \|f\|_{L^\infty} \cdot N_{n+1}(\varphi).$$

**修正：**

> $$\leqslant \left( \int_{\mathbb{R}^n} \frac{1}{(1+|x|^2)^{\frac{n+1}{2}}} dx \right) C_n\|f\|_{L^\infty}N_{n+1}(\varphi).$$

**理由：** Schwartz范数是有限多个坐标单项式上确界的和，径向权(1+|x|²)^((n+1)/2)由有限单项式和及其系数控制；需保留维数常数Cn，不能无常数直接≤Np。

**原文：**

> $$\text{pv} \frac{1}{x} = \underbrace{\mathbf{1}_{|x|<1} \cdot \text{pv} \frac{1}{x}}_{\in \mathcal{E}'(\mathbb{R}^n)} + \underbrace{\mathbf{1}_{|x| \geqslant 1} \text{pv} \cdot \frac{1}{x}}_{\in L^\infty}.$$

**修正：**

> $$\text{pv} \frac{1}{x} = \underbrace{\mathbf{1}_{|x|<1} \cdot \text{pv} \frac{1}{x}}_{\in\mathcal E'(\mathbb R)} + \underbrace{\mathbf{1}_{|x| \geqslant 1} \text{pv} \cdot \frac{1}{x}}_{\in L^\infty}.$$

**理由：** pv1/x是一元分布，此处紧支集分布所在空间应为R，原图复用Rn。

**原文：**

> 常数 $C$ 和 $m$

**修正：**

> 常数 $C>0$ 和非负整数 $m$

**理由：** 多项式增长可总选非负整数指数，后文N_{m+n+1}也只对整数定义。原图未明确指数和常数的范围，补足所用半范数的条件。

**原文：**

> 试验函数 $\varphi \in \mathcal{D}'(\mathbb{R}^n)$

**修正：**

> 试验函数 $\varphi\in\mathcal D(\mathbb R^n)$

**理由：** φ为供分布配对的测试函数，属于D，原图多prime错误地把它写成分布。

**原文：**

> $\chi \in C_0^\infty(\mathbb{R}^n)$

**修正：**

> $\chi\in C_0^\infty(\mathbb R)$

**理由：** 本例是R上一元函数e^x及一元平移，截断函数应在R，原图复用n维空间。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \varphi_n
> ```

**正文：**

> $\chi_n = \chi(x-n)$

**理由：** 指数增长反例的测试列定义为χn，源图积分末步换成未定义φn，Markdown已一致使用χn。

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> $u = (e^{i e^x})'$

**修正：**

> $u=\frac1i(e^{ie^x})'$

**理由：** 链式导数为i e^x e^(ie^x)=iu，故u是1/i倍导数，原图漏1/i。缓增性仍由有界函数的导数推出。

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-i x \cdot \xi}, \quad \widehat{x^\alpha} = (2\pi)^n (i\xi)^\alpha \delta_0.$$

**修正：**

> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-ia\cdot\xi}, \quad \widehat{x^\alpha}=(2\pi)^n(i\partial_\xi)^\alpha\delta_0.$$

**理由：** δ_a的变换在点a取指数，变量x已被分布求值消去，原图应e^(−iaξ)。

**原文：**

> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-i x \cdot \xi}, \quad \widehat{x^\alpha} = (2\pi)^n (i\xi)^\alpha \delta_0.$$

**修正：**

> $$\widehat{\partial^\alpha \delta_a} = (i\xi)^\alpha e^{-ia\cdot\xi}, \quad \widehat{x^\alpha}=(2\pi)^n(i\partial_\xi)^\alpha\delta_0.$$

**理由：** Fourier变换将物理空间x乘法转为i∂ξ，不是iξ乘法。原图对α>0右侧为ξ^αδ0=0，显然与非零多项式变换冲突。

**原文：**

> $$u = \sum_{|\alpha| \leqslant m} c_\alpha \left( \frac{\xi}{i} \right)^\alpha.$$

**修正：**

> $$u(x)=\frac1{(2\pi)^n}\sum_{|\alpha|\leqslant m}c_\alpha(-ix)^\alpha.$$

**理由：** F^−1(∂ξ^αδ0)=(-ix)^α/(2π)^n。物理变量应x而非ξ，且原图沿用同一组系数cα时必须保留逆变换的归一化因子。

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> 奇分布，即满足 $\check{u} = u$

**修正：**

> 奇分布，即满足 $\check u=-u$

**理由：** 奇分布在反射下变号，原图把奇偶的反射条件写反。

**原文：**

> 偶分布，即满足 $\check{u} = -u$

**修正：**

> 偶分布，即满足 $\check u=u$

**理由：** 偶分布在反射下不变，原图把奇偶的反射条件写反。

**原文：**

> 把 2) 中的 $\lambda$ 选为 $-1$

**修正：**

> 在 1) 中选取矩阵 $A=-\operatorname{Id}$

**理由：** 2)的齐次性只对λ>0成立，不能选−1；奇偶性应直接用1)对可逆反射矩阵−Id的Fourier协变公式，原图引用了错误条目。

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> Heaviside 函数 $H(x)$ 是上述方程的一个解

**修正：**

> $-2\pi iH(\xi)$ 是上述方程的一个解

**理由：** 上式方程为v′=−2πiδ0，Heaviside本身导数仅δ0，必须乘−2πi才满足，原图漏系数。

**原文：**

> $$\widehat{H}(\xi) = -i \cdot \operatorname{vp} \frac{1}{x} + \pi \delta_0.$$

**修正：**

> $$\widehat H(\xi)=-i\operatorname{vp}\frac1\xi + \pi \delta_0.$$

**理由：** Heaviside变换右侧定义在频率变量ξ，主值分母也需ξ，原图混入物理变量x。

**原文：**

> $$-|\xi|^2 \widehat{u} = 1 \quad \Rightarrow \quad \widehat{u}(\xi) = -\frac{1}{|\xi|^2}.$$

**修正：**

> $$-|\xi|^2 \widehat{u} = 1 \quad\text{可选取}\quad\widehat u(\xi)=-\frac1{|\xi|^2}.$$

**理由：** −|ξ|²hat u=1只给一个可能解，还能加零点支持且被|ξ|²消去的分布；原图⇒像是在唯一确定全部基本解，下一页已承认多项式差。改为选取这个特解以保持构造。

[相关正文：67：缓增分布的 Fourier 变换](../../03-math-analysis-iii/67-tempered-fourier.md)

## 数学修正

**原文：**

> 其他的解与 $u$ 相差一个复系数多项式

**修正：**

> 其他的缓增解与 $u$ 相差一个复系数调和多项式

**理由：** 只有在缓增分布范围内，差的调和分布由命题465为多项式；并且它还必须调和，任意多项式不行。原图未说明范围及调和限制。

**原文：**

> 所以这是一个缓增的分布，据此，我们知道

**修正：**

> 所以这是一个缓增的分布。它与前面所选解同为旋转不变、次数为 $2-n$ 的齐次基本解，两者之差是同次的调和多项式；因 $2-n<0$，该差只能为零。因此，我们知道

**理由：** 仅局部可积且∞衰减不能直接唯一确定Fourier基本解。利用此前构造已有的负次齐次性和旋转不变性，把差限制为负次齐次的调和多项式即为零，补足原图从缓增性直接跳到唯一变换的逻辑。
