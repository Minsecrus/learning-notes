# 勘误：53 Fourier 级数的 L2 理论

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> $$\int_0^{2\pi} f(x - x_0) e^{ik \cdot x} \frac{dx}{2\pi} = e^{ik \cdot x_0} \int_0^{2\pi} f(x - x_0) e^{ik \cdot (x - x_0)} \frac{dx}{2\pi}$$

**修正：**

> $$\int_0^{2\pi} \widetilde{f}(x - x_0) e^{ik \cdot x} \frac{dx}{2\pi} = e^{ik \cdot x_0} \int_0^{2\pi} \widetilde{f}(x - x_0) e^{ik \cdot (x - x_0)} \frac{dx}{2\pi}$$

**理由：** 平移后的x−x0可能落在原区间外，需要使用已定义的周期延拓函数。原图公式在这两处遗漏延拓记号。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> $$= \int_{\mathbb{R}} \frac{1}{\varepsilon} \chi\left(\frac{y}{\varepsilon}\right) \underbrace{\left(\int_0^{2\pi} \widetilde{f}(x - y) e^{ik \cdot x} \frac{dx}{2\pi}\right)}_{\text{平移之后的积分}} \frac{dy}{2\pi}$$

**修正：**

> $$= \int_{\mathbb{R}} \frac{1}{\varepsilon} \chi\left(\frac{y}{\varepsilon}\right) \underbrace{\left(\int_0^{2\pi} \widetilde{f}(x - y) e^{-ik \cdot x} \frac{dx}{2\pi}\right)}_{\text{平移之后的积分}} dy$$

**理由：** 计算Fourier系数时指数应为−ikx，与上一行一致；实轴卷积对dy积分，只有内层周期内积含1/(2π)，外层再除2π会错误缩小结果。

**原文：**

> $\lambda = \frac{1}{\sqrt{\varepsilon}}$

**修正：**

> $\lambda = \varepsilon^{-2}$

**理由：** 高斯核χ_ε(y)=ε^−1 exp(−y²/(2ε²))/√(2π)，与√(λ/(2π))exp(−λy²/2)比较得λ=ε^−2；原图尺度关系错误。

**原文：**

> $$\mathbf{I} \leqslant \underbrace{\sqrt{\frac{\lambda}{2\pi}} e^{-\frac{\frac{\lambda}{2}\pi^2}{2}}}_{\text{趋于 } 0,\ \lambda \to \infty} \int_{|y| \geqslant \pi} e^{-\frac{\frac{1}{2}y^2}{2}} f(x + y) dy$$

**修正：**

> $$|\mathbf{I}| \leqslant \underbrace{\sqrt{\frac{\lambda}{2\pi}} e^{-\frac{\frac{\lambda}{2}\pi^2}{2}}}_{\text{趋于 } 0,\ \lambda \to \infty} \int_{|y| \geqslant \pi} e^{-\frac{\frac{1}{2}y^2}{2}} |f(x + y)| dy$$

**理由：** f可以为复值，尾积分自身不能作大小比较；应先取尾积分和被积函数的绝对值，再用L∞范数给出实数上界。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> $$g_\lambda(x) = \underbrace{\sqrt{\lambda} \int_{|y| \leqslant \frac{\pi}{4}} e^{-\lambda(1-\cos(y))} f(x + y) dy}_{\mathbf{A}} + \underbrace{\sqrt{\lambda} \int_{\pi \geqslant |y| \geqslant \frac{\pi}{4}} e^{-\lambda(1-\cos(y))} f(x + y) dy}_{\mathbf{B}}.$$

**修正：**

> $$g_\lambda(x) = \underbrace{\sqrt{\frac{\lambda}{2\pi}} \int_{|y| \leqslant \frac{\pi}{4}} e^{-\lambda(1-\cos(y))} f(x + y) dy}_{\mathbf{A}} + \underbrace{\sqrt{\frac{\lambda}{2\pi}} \int_{\pi \geqslant |y| \geqslant \frac{\pi}{4}} e^{-\lambda(1-\cos(y))} f(x + y) dy}_{\mathbf{B}}.$$

**理由：** A与B是前页定义的同一个g_λ拆分，两项必须保留√(λ/(2π))。原图把两项的归一化系数写成√λ，与原定义不等。

**原文：**

> 由于 $1 - \cos(y) > 0$，我们做变量替换 $1 - \cos(y) = z^2$。

**修正：**

> 在 $|y|\le\pi/4$ 上，取有符号的变量替换 $z=\sqrt2\sin(y/2)$，于是 $1-\cos(y)=z^2$ 且逆函数满足 $y\prime(0)=\sqrt2$。

**理由：** y=0时1−cos y=0，不能声明严格正。仅定义z²有两个分支，需选保留正负且可逆的z=√2sin(y/2)，才能正确使用从−z0到z0的换元。

**原文：**

> $$\mathbf{A} - F(0) = \sqrt{\frac{\lambda}{2\pi}} \int_{\mathbb{R}} e^{-\lambda z^2} (F(z) - F(0)) dz$$

**修正：**

> $$\mathbf{A} - \frac{F(0)}{\sqrt2} = \sqrt{\frac{\lambda}{2\pi}} \int_{\mathbb{R}} e^{-\lambda z^2} (F(z) - F(0)) dz$$

**理由：** 换元后的核√(λ/(2π))exp(−λz²)在实轴的积分为1/√2；从A减去常数核贡献时应减F(0)/√2，不能减F(0)。

**原文：**

> $$= \underbrace{\sqrt{\frac{\lambda}{2\pi}} \int_{|z| \leqslant \varepsilon} e^{-\lambda z^2} (F(z) - F(0)) dz}_{\mathbf{C}} + \underbrace{\sqrt{\frac{\lambda}{2\pi}} \int_{|x| \geqslant \varepsilon} e^{-\lambda z^2} (F(z) - F(0)) dz}_{\mathbf{II}}.$$

**修正：**

> $$= \underbrace{\sqrt{\frac{\lambda}{2\pi}} \int_{|z| \leqslant \varepsilon} e^{-\lambda z^2} (F(z) - F(0)) dz}_{\mathbf{C}} + \underbrace{\sqrt{\frac{\lambda}{2\pi}} \int_{|z| \geqslant \varepsilon} e^{-\lambda z^2} (F(z) - F(0)) dz}_{\mathbf{II}}.$$

**理由：** 分割的是换元后的积分变量z的邻域，原图尾积分域把z误写成未积分的参数x。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> $$\mathbf{C} \leqslant \sqrt{\frac{\lambda}{2\pi}} \int_{|z| \leqslant \varepsilon} e^{-\lambda z^2} M |z| dz$$

**修正：**

> $$|\mathbf{C}| \leqslant \sqrt{\frac{\lambda}{2\pi}} \int_{|z| \leqslant \varepsilon} e^{-\lambda z^2} M |z| dz$$

**理由：** F和C可为复值，对C的大小估计应取绝对值，才能用实数积分作上界。

**原文：**

> $$= \frac{M}{\sqrt{\lambda}} \underbrace{\sqrt{\frac{1}{2\pi}} \int_{|t| \leqslant \varepsilon} e^{-t^2} M |t| dt}_{\text{积分有限}} \to 0.$$

**修正：**

> $$= \frac{M}{\sqrt{\lambda}} \underbrace{\sqrt{\frac{1}{2\pi}} \int_{|t| \leqslant \varepsilon\sqrt\lambda} e^{-t^2} |t| dt}_{\text{积分有限}} \to 0.$$

**理由：** 换元t=√λz后积分域应放大为|t|≤ε√λ，M已提到外面，不应再乘一次M。该积分统一不超过全实轴的∫e^−t²|t|dt，故外面的M/√λ保证趋零。

**原文：**

> $$\mathbf{A} \to F(0) = f(x)$$

**修正：**

> $$\mathbf{A} \to \frac{F(0)}{\sqrt2} = f(x)$$

**理由：** 换元导数y′(0)=√2，故F(0)=√2 f(x)。结合核积分为1/√2得到A趋于F(0)/√2=f(x)，修正与前页归一化配套。

**原文：**

> 有限个 $e^{ik \cdot y}$ 的线性组合

**修正：**

> 有限个 $e^{ijy}$（$j\in\mathbb Z$）的线性组合

**理由：** cos^k y展开含k,k−2,…,−k等多个整数频率，而非只含固定的k。各项与f平移后的正交性仍成立，修改频率指标。

**原文：**

> 和 $i \leqslant 1$

**修正：**

> 和 $1\leqslant i\leqslant n$

**理由：** 高维周期性需对每一个坐标方向成立，原图将坐标指标范围误写成i≤1。

**原文：**

> $$(x_1, \cdots, x_n) \mapsto (\exp(ix_1), \cdots, \exp(ix_2)).$$

**修正：**

> $$(x_1, \cdots, x_n) \mapsto (\exp(ix_1), \cdots, \exp(ix_n)).$$

**理由：** n维环面映射的最后坐标应为第n个坐标的指数，原图错重复第2个坐标。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> 类似地, $\mathbb{R}^n$ 以 $2\pi\mathbb{Z}$ 为周期的连续可微函数、光滑函数, 每个周期上可积的函数、在每个周期上平方可积的函数和 $L^\infty$ 的函数分别对应到 $\mathbf{T}^n$ 上的 $C^1(\mathbf{T}^n)$、$C^\infty(\mathbf{T}^n)$、$L^1(\mathbf{T}^n)$、$L^2(\mathbf{T}^n)$ 和 $L^\infty(\mathbf{T}^n)$。

**修正：**

> 类似地, $\mathbb{R}^n$ 以 $2\pi\mathbb{Z}^n$ 为周期的连续可微函数、光滑函数, 每个周期上可积的函数、在每个周期上平方可积的函数和 $L^\infty$ 的函数分别对应到 $\mathbf{T}^n$ 上的 $C^1(\mathbf{T}^n)$、$C^\infty(\mathbf{T}^n)$、$L^1(\mathbf{T}^n)$、$L^2(\mathbf{T}^n)$ 和 $L^\infty(\mathbf{T}^n)$。

**理由：** Rn上每个坐标均以2π为周期，周期格为2πZ^n；原图漏掉格的维数。

**原文：**

> 和 1 维类似, 平方可积的 $2\pi\mathbb{Z}$ 周期函数的 Fourier 级数理论具有干净的表达:

**修正：**

> 和 1 维类似, 平方可积的 $2\pi\mathbb{Z}^n$ 周期函数的 Fourier 级数理论具有干净的表达:

**理由：** Rn上每个坐标均以2π为周期，周期格为2πZ^n；原图漏掉格的维数。

**原文：**

> $$f(x) = \sum_{k\in\mathbb{Z}} \widehat{f}(k) e^{ik\cdot x}.$$

**修正：**

> $$f(x) = \sum_{k\in\mathbb{Z}^n} \widehat{f}(k) e^{ik\cdot x}.$$

**理由：** 高维Fourier级数的频率k是n维整数向量，求和应遍历Z^n，原图求和范围漏掉n。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> $$k = (\underbrace{k_1, k_2, \cdots, k_n}_{k'}) = (k_1, k'), \quad x = (\underbrace{x_1, x_2, \cdots, x_n}_{x'}) = (x_1, x').$$

**修正：**

> $$k = (k_1, \underbrace{k_2, \cdots, k_n}_{k'}) = (k_1, k'), \quad x = (x_1, \underbrace{x_2, \cdots, x_n}_{x'}) = (x_1, x').$$

**理由：** k′和x′表示后n−1个坐标，归纳法才能在n−1维空间上使用它们；原图下括号错误包含了第一个坐标。

**原文：**

> 如果我们知道函数 $f \in L^2(\mathbf{T}^n)$, 那么, 级数
> $$\sum_{k\in\mathbb{Z}} \widehat{f}(k) e^{ik\cdot x}$$
> 在 $L^2$ 中收敛到 $f$。根据我们对 $L^2$ 完备性的证明, 我们知道存在下列函数列的子序列:
> $$\{S_N = \sum_{k\in\mathbb{Z},|k|\leqslant N} \widehat{f}(k) e^{ik\cdot x}\}_{N\geqslant 1},$$
> 它几乎处处收敛到 $f$。然而, 是否整个序列都几乎处处 (不需要选取子序列) 收敛到 $f$ 呢? 这是 Carleson 证明的重要定理, 他本人也因为这项工作获得了 Abel 奖。

**修正：**

> 如果我们知道函数 $f \in L^2(\mathbf{T}^n)$, 那么, 级数
> $$\sum_{k\in\mathbb{Z}^n} \widehat{f}(k) e^{ik\cdot x}$$
> 在 $L^2$ 中收敛到 $f$。根据我们对 $L^2$ 完备性的证明, 我们知道存在下列函数列的子序列:
> $$\{S_N = \sum_{k\in\mathbb{Z}^n,|k|\leqslant N} \widehat{f}(k) e^{ik\cdot x}\}_{N\geqslant 1},$$
> 它几乎处处收敛到 $f$。然而, 是否整个序列都几乎处处 (不需要选取子序列) 收敛到 $f$ 呢? 在一维情形，这是 Carleson 证明的重要定理, 他本人也因为这项工作获得了 Abel 奖。

**理由：** 该段讨论n维环面的Fourier展开和部分和，频率必须遍历n维整数向量，原图的几个求和漏掉维数n。 Carleson的L² Fourier级数几乎处处收敛定理是对一维对称部分和的结论。本段定义了高维球形截断，不能直接把这个一维定理用于所有维数；限定原断言的一维范围。

**原文：**

> 实际上, 即使我们假设了 $f \in C(\mathbf{T}^n) \subset L^2(\mathbf{T}^2)$, 我们也只能说
> $$\sum_{k\in\mathbb{Z}} \widehat{f}(k) e^{ik\cdot x}$$
> 在 $L^2$ 中收敛到 $f$, 这个级数不见得逐点收敛。这是 Fourier 级数的分析中重要的话题 (我们将要学习), 另一方面, 这也表明了为什么 $L^2$ 的理论是重要的: 因为我们总能保证基本的收敛性!

**修正：**

> 实际上, 即使我们假设了 $f \in C(\mathbf{T}^n) \subset L^2(\mathbf{T}^n)$, 我们也只能说
> $$\sum_{k\in\mathbb{Z}^n} \widehat{f}(k) e^{ik\cdot x}$$
> 在 $L^2$ 中收敛到 $f$, 这个级数不见得逐点收敛。这是 Fourier 级数的分析中重要的话题 (我们将要学习), 另一方面, 这也表明了为什么 $L^2$ 的理论是重要的: 因为我们总能保证基本的收敛性!

**理由：** 该段讨论n维环面的Fourier展开和部分和，频率必须遍历n维整数向量，原图的几个求和漏掉维数n。 同一个n维环面上的连续函数属于它自己的L²空间，原图把右边维数写成2。

**原文：**

> $$F(x_1) = 0.$$

**修正：**

> $$F(x_1) = 0\quad\text{几乎处处}.$$

**理由：** F属于L²，运用一维Fourier基的唯一性得到的是几乎处处为零，并非任意选定代表都处处为零。补上与随后归纳所需的测度限定。

**原文：**

> $$\widehat{f}(k) = \int_{\mathbb{R}^n} f(x) e^{-ik\cdot x} \frac{dx}{(2\pi)^n},$$

**修正：**

> $$\widehat{f}(k) = \int_{[0,2\pi]^n} f(x) e^{-ik\cdot x} \frac{dx}{(2\pi)^n},$$

**理由：** 周期L¹函数只要求一个周期内可积，在整个Rn上通常不可积；Fourier系数应在一个周期立方体上积分，原图错误写成全空间。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> $$\left\{\widehat{f}(k) \,\middle|\, \widehat{f}(k) = \int_0^{2\pi} f(x) e^{-ik\cdot x} \frac{dx}{(2\pi)^n} \right\}_{x\in\mathbb{Z}^n}$$

**修正：**

> $$\left\{\widehat{f}(k) \,\middle|\, \widehat{f}(k) = \int_{[0,2\pi]^n} f(x) e^{-ik\cdot x} \frac{dx}{(2\pi)^n} \right\}_{k\in\mathbb{Z}^n}$$

**理由：** 此处是n维周期函数的Fourier系数，积分域应为n维周期立方体，系数序列的指标应为频率k而非空间变量x。

**原文：**

> 那么部分和 $d$ 定义的函数序列

**修正：**

> 那么部分和定义的函数序列

**理由：** 原图在部分和定义一句多出孤立字母d，没有数学所指，删除这个输入笔误。

**原文：**

> $$\lim_{n\to\infty} S_N(x) = f(x) \quad \text{并且} \quad \lim_{N\to\infty} \|S_N - f\|_{L^\infty} = 0.$$

**修正：**

> $$\lim_{N\to\infty} S_N(x) = f(x) \quad \text{并且} \quad \lim_{N\to\infty} \|S_N - f\|_{L^\infty} = 0.$$

**理由：** 正在令部分和的截断阶数N趋无穷，原图极限下标误写为n。

[相关正文：Fourier 级数的 L2 理论](../../02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639.md)

## 数学修正

**原文：**

> Fourier 系数是即可。为此, 我们考虑函数

**修正：**

> Fourier 系数即可。

**理由：** 原图证明的过渡句重复是并含未完成的我们考虑函数，后面实际计算g的Fourier系数已完整，去掉这段输入残句。

**原文：**

> $$\begin{aligned}
> \widehat{g}(k) &= \int_0^{2\pi} \left( \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{il)x} \right) e^{-ikx} dx \\
> &= \int_0^{2\pi} \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} dx \\
> &= \lim_{N\to\infty} \int_0^{2\pi} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} dx \\
> &= \lim_{\substack{N\to\infty \\ N\geqslant |k|}} \widehat{f}(k) = \widehat{f}(k).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{g}(k) &= \int_0^{2\pi} \left( \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{ilx} \right) e^{-ikx} \frac{dx}{2\pi} \\
> &= \int_0^{2\pi} \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} \frac{dx}{2\pi} \\
> &= \lim_{N\to\infty} \int_0^{2\pi} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} \frac{dx}{2\pi} \\
> &= \lim_{\substack{N\to\infty \\ N\geqslant |k|}} \widehat{f}(k) = \widehat{f}(k).
> \end{aligned}$$

**理由：** Fourier系数按归一化测度dx/(2π)定义，原图计算中的三行漏掉归一化；补回后正交积分才等于δ而非2πδ。第一行指数还多出右括号。

**原文：**

> $$\begin{aligned}
> \widehat{g}(k) &= \int_0^{2\pi} \left( \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{il)x} \right) e^{-ikx} dx \\
> &= \int_0^{2\pi} \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} dx \\
> &= \lim_{N\to\infty} \int_0^{2\pi} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} dx \\
> &= \lim_{\substack{N\to\infty \\ N\geqslant |k|}} \widehat{f}(k) = \widehat{f}(k).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{g}(k) &= \int_0^{2\pi} \left( \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{ilx} \right) e^{-ikx} \frac{dx}{2\pi} \\
> &= \int_0^{2\pi} \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} \frac{dx}{2\pi} \\
> &= \lim_{N\to\infty} \int_0^{2\pi} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} \frac{dx}{2\pi} \\
> &= \lim_{\substack{N\to\infty \\ N\geqslant |k|}} \widehat{f}(k) = \widehat{f}(k).
> \end{aligned}$$

**理由：** Fourier系数按归一化测度dx/(2π)定义，原图计算中的三行漏掉归一化；补回后正交积分才等于δ而非2πδ。第一行指数还多出右括号。

**原文：**

> $$\begin{aligned}
> \widehat{g}(k) &= \int_0^{2\pi} \left( \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{il)x} \right) e^{-ikx} dx \\
> &= \int_0^{2\pi} \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} dx \\
> &= \lim_{N\to\infty} \int_0^{2\pi} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} dx \\
> &= \lim_{\substack{N\to\infty \\ N\geqslant |k|}} \widehat{f}(k) = \widehat{f}(k).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \widehat{g}(k) &= \int_0^{2\pi} \left( \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{ilx} \right) e^{-ikx} \frac{dx}{2\pi} \\
> &= \int_0^{2\pi} \lim_{N\to\infty} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} \frac{dx}{2\pi} \\
> &= \lim_{N\to\infty} \int_0^{2\pi} \sum_{-N\leqslant l\leqslant N} \widehat{f}(l) e^{-i(k-l)x} \frac{dx}{2\pi} \\
> &= \lim_{\substack{N\to\infty \\ N\geqslant |k|}} \widehat{f}(k) = \widehat{f}(k).
> \end{aligned}$$

**理由：** Fourier系数按归一化测度dx/(2π)定义，原图计算中的三行漏掉归一化；补回后正交积分才等于δ而非2πδ。第一行指数还多出右括号。

[相关正文：53.1：作业：波动方程的局部能量估计](../../02-math-analysis-ii/53-fourier-l2/53-03-p0640-0643.md)

## 数学修正

**原文：**

> $C(\mathbb{R}^n) \subset L^\infty(\mathbb{R}^n)$ 不是稠密的

**修正：**

> $C(\mathbb{R}^n)\cap L^\infty(\mathbb{R}^n)$ 在 $L^\infty(\mathbb{R}^n)$ 中不是稠密的

**理由：** Rn上连续函数可以无界，C(Rn)不是L∞的子集。本习题的不稠密结论应针对有界连续函数，保持与此前正文对应。

**原文：**

> $\int_{\mathbb{R}^n} \chi(x)dx = 1$

**修正：**

> $\int_{\mathbb{R}^n} f(x)dx = 1$

**理由：** 本题把f缩放成f_ε作为逼近恒等核，必须要求f的积分为1。χ未在该题定义；任意非单位积分的f会使极限变成(∫f)φ。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> f_i\xrightarrow{L^1(X,\mathcal A,\mu)}f
> ```

**正文：**

> $$
> f_i \xrightarrow{L^2(X, \mathcal{A}, \mu)} f, \quad i \to \infty.
> $$

**理由：** 本题在L²范数中假设收敛，原图箭头误标L¹，Markdown已和上下文一致。

[相关正文：53.1：作业：波动方程的局部能量估计](../../02-math-analysis-ii/53-fourier-l2/53-03-p0640-0643.md)

## 数学修正

**原文：**

> 假设 $r \leqslant R$

**修正：**

> 假设 $0\leqslant r\leqslant R$

**理由：** 随后用时间区间[0,r]定义圆台，截断时刻必须非负。原图只给出上界，漏掉下界。

[相关正文：53.1：作业：波动方程的局部能量估计](../../02-math-analysis-ii/53-fourier-l2/53-03-p0640-0643.md)

## 数学修正

**原文：**

> 不同时刻的球面

**修正：**

> 不同时刻的实心球

**理由：** B_t由|x|≤R−t定义，是球内区域并用于体积积分；原图把实心球称为球面。

**原文：**

> 给定 $(t_0, x_0) \in \mathbf{C}_{0 \leqslant t \leqslant r}$。

**修正：**

> 给定 $(t_0, x_0)\in\mathbf{C}_{0\leqslant t\leqslant r}$，且 $t_0<R$，取球坐标中 $0<\theta<\pi$ 的坐标片。

**理由：** 锥顶没有光滑的锥面切空间，球坐标在极点亦失效；所给三个局部标架需要避开锥顶及极点，其他点可换球坐标片处理。

**原文：**

> 对任意的 $r \leqslant R$

**修正：**

> 对任意的 $0\leqslant r\leqslant R$

**理由：** 局部能量积分的截断时刻属于[0,R]，需同时满足非负条件。

**原文：**

> $$
> E_{\text{loc}}(0) = E_{\text{loc}}(r) + \int_{\mathbf{C}_{0 \leqslant t \leqslant r}} |\nabla_L u|^2 + |/\!\nabla u|^2 d\sigma.
> $$

**修正：**

> $$
> E_{\text{loc}}(0) = E_{\text{loc}}(r) + \frac{1}{2\sqrt2}\int_{\mathbf{C}_{0 \leqslant t \leqslant r}} |\nabla_L u|^2 + |/\!\nabla u|^2 d\sigma.
> $$

**理由：** 按通常时空Euclidean面积dσ，锥面外单位法向为(1,ω)/√2。能量流(q,−u_t∇u)的法向通量为((u_t−u_r)²+|∇_S u|²)/(2√2)，原图遗漏该系数。

**原文：**

> （提示：对 $\Box u = 0$ 两边

**修正：**

> 其中 $d\sigma$ 表示时空 Euclidean 面积元。其锥面参数形式为 $d\sigma=\sqrt2\,dt\,dS_x$，因此边界项也等于 $\frac12\int_0^r\int_{|x|=R-t}(|\nabla_Lu|^2+|/\!\nabla u|^2)\,dS_x\,dt$。
>
> （提示：对 $\Box u = 0$ 两边

**理由：** 明确面积元规范，使补回的1/(2√2)与时间乘空间球面面积元下的1/2写法一致；归一化来自直接计算能量流的锥面法向通量。

**原文：**

> 我们现在只假设 $u(t, x)$ 是光滑的。

**修正：**

> 我们现在假设 $u(t,x)$ 光滑并满足波动方程，不再预先假设每一时刻都有紧支集。

**理由：** 有限传播速度是波动方程解的性质，光滑函数本身不保证有限传播。此题放宽的是先前每时刻紧支集的假设，需要保留波动方程条件。

[相关正文：53.2：习题课：Riemann积分的定义3](../../02-math-analysis-ii/53-fourier-l2/53-04-p0644-0646.md)

## 数学修正

**原文：**

> $A$ 上的连续函数在 $A$ 上 Riemann 可积。

**修正：**

> $A$ 上有界的连续函数在 $A$ 上 Riemann 可积。

**理由：** 有界集合未必紧，连续函数未必有界。例如(0,1)上1/x连续但非Riemann可积。补充有界性后，零延拓只可能在零测边界上不连续，从而可用Lebesgue判据。

[相关正文：53.2：习题课：Riemann积分的定义3](../../02-math-analysis-ii/53-fourier-l2/53-04-p0644-0646.md)

## 数学修正

**原文：**

> Borel 集未必是 Lebesgue 可测集。

**修正：**

> Lebesgue 可测集未必是 Borel 集。

**理由：** 所有Borel集都Lebesgue可测，完备化增加的是部分非Borel的零测子集及其扩展；原图把两个集合类的包含关系颠倒。
