# 勘误：22 反常积分、Euler 常数与 Stirling 公式

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：22：反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)

## 数学修正

**原文：**

> $[b, b^-]$

**修正：**

> $[a, b^-]$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图确印[b,b^-]，b^-<b而未定义倒序闭区间，随后截断积分下限a上限b^-。正确局部可积条件应在[a,b^-]，属于源笔误。

**原文：**

> （其中 $a$ 和 $b$）可以取正负无穷：

**修正：**

> （其中 $a$ 和 $b$ 可以取正负无穷）：

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)原图括号确在正负无穷后，恢复整段a,b可为无穷的注解范围是提取纠错。

[相关正文：22：反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)

## 数学修正

**原文：**

> $$\int_{100}^M \frac{1}{x \log x \log\log x} dx = \int_2^M \frac{1}{\log\log x} d\log\log x = \log\log\log M - \log\log\log(100).$$

**修正：**

> $$\int_{100}^M \frac{1}{x \log x \log\log x} dx = \int_{100}^M \frac{1}{\log\log x} d\log\log x = \log\log\log M - \log\log\log(100).$$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图第二积分确误从2开始，前后等式下限100且常数logloglog100，2至M跨越loglog x=0的点e并不具有所写有限反常积分。下限100恢复同一次换元及原函数差，属于源笔误。

**原文：**

> 5) $\displaystyle\int_1^{\infty} \frac{1}{x \log^\alpha(x)}$

**修正：**

> 5) $\displaystyle\int_2^{\infty} \frac{1}{x \log^\alpha(x)}$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)原图例5标题确印1，但推导从2开始且α>1；以1为下限在1附近因log x~x-1必发散，若要表达本段无穷端收敛实例只能改2，属于源笔误。注意本例最后误说极限无穷/不收敛，需另补。

**原文：**

> 当 $M \to \infty$ 时，上式的极限是无穷大，从而这个反常积分不收敛。
>
> 6) 在假设函数 $f$ 在 $[0, \infty)$ 上可积分

**修正：**

> 当 $M \to \infty$ 时，上式的极限为 $\dfrac{1}{(\alpha-1)(\log 2)^{\alpha-1}}$，从而这个反常积分收敛。
>
> 6) 假设函数 $f$ 在 $[0, \infty)$ 上可积分

**理由：** 重新核对源图：例5假设 $\alpha>1$，已有原函数差在 $M\to\infty$ 时趋于 $1/((\alpha-1)(\log2)^{\alpha-1})$，故该尾积分收敛。例6印“在假设函数”，删孤立在字。原两个匹配片段仅因都包含编号6而交叠；组合保留两项修订及完整分段。

**原文：**

> $$f(x) = \frac{1}{n}, \quad x \in \left[n - \frac{1}{n^3}, n\right].$$

**修正：**

> $$f(x) = n, \quad x \in \left[n - \frac{1}{n^3}, n\right].$$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图高度1/n趋0且面积1/n⁴，与本例声称f不趋0及积分Σ1/n²均矛盾。给定宽度1/n³及面积1/n²唯一强制高度n，修后f(n)=n不趋0且可积，恢复本例指定反例。

## 未决数学问题

**原文：**

> $\displaystyle\int_1^{\infty} \frac{1}{x^\alpha}$

**问题：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)例1、2源图与canonical被积函数1/x^α，而原函数、排除α=-1、判别α<-1/α>-1均属于x^α。若保留被积函数则应系统改原函数为1-α并改临界值1，若保留整个推导則把四处被积函数改x^α。两种数学正确意图都可，标uncertain不能随意选择。

[相关正文：22：反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)

## 数学修正

**原文：**

> $$\sum_{1 \leqslant n \leqslant N} n^\alpha \leqslant \int_2^{N+1} x^\alpha dx = \frac{(N+1)^\alpha - 2^\alpha}{\alpha + 1}.$$

**修正：**

> $$\sum_{1 \leqslant n \leqslant N} n^\alpha \leqslant \int_1^{N+1} x^\alpha dx = \frac{(N+1)^{\alpha+1} - 1}{\alpha + 1}.$$

**理由：** 重新核对源图：原积分下限2漏了第一段，取 $N=1$ 原上界为零而左侧为1；对递增的 $x^\alpha$ 逐段有 $k^\alpha\leqslant\int_k^{k+1}x^\alpha dx$，求和给下限1。原函数为 $x^{\alpha+1}/(\alpha+1)$，故结果分子为 $(N+1)^{\alpha+1}-1$；组合保留指数与下限修正。

## 未决数学问题

**原文：**

> $$\underline{f} = \sum_{k=1}^{n-1} f(k) \mathbf{1}_{[k,k+1]}(x), \quad \overline{f} = \sum_{k=1}^{n-1} f(k+1) \mathbf{1}_{[k,k+1]}(x).$$

**问题：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)面积法的闭区间指示函数在整数内点重复相加，f≡1时underline f(k)=2>f，原点态下上夹逼错误。积分本身不受有限点影响。可改半开区间并定义端点值或将不等式限于非整数点，需统一两函数及后文pointwise声称，不能只盲改一个括号。

[相关正文：22：反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)

## 数学修正

**原文：**

> $(N+1)^{\alpha+1} - N^\alpha \leqslant CN^\alpha$

**修正：**

> $(N+1)^{\alpha+1} - N^{\alpha+1} \leqslant CN^\alpha$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)原图被减项确是N^α，原左侧为阶N^(α+1)无法有界于CN^α。中值定理应作用u↦u^(α+1)在[N,N+1]，得差≤C N^α，指数补+1为必要源笔误。

**原文：**

> $$1 + \sum_{2 \leqslant n \leqslant N} n^\alpha \geqslant 1 + \int_1^N x^\alpha dx = 1 + \frac{(N-1)^\alpha - 1}{\alpha + 1}.$$

**修正：**

> $$1 + \sum_{2 \leqslant n \leqslant N} n^\alpha \geqslant 1 + \int_1^N x^\alpha dx = 1 + \frac{N^{\alpha+1} - 1}{\alpha + 1}.$$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图原函数上端值错(N-1)^α，实际积分明确从1至N，直接积分为(N^(α+1)-1)/(α+1)。原左两项为Σk1N k^α，正确下界足以与上页上界完成数量级估计。

## 未决数学问题

**原文：**

> $$\sum_{1 \leqslant n \leqslant N} n^\alpha - \frac{N^{\alpha+1} - 1}{\alpha + 1} \leqslant N^{\alpha+1} - (N-1)^{\alpha+1} + O(1) = O(N^\alpha).$$

**问题：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)所谓下界后的“这表明”仍写≤正差，不能由紧前正确的下界推出；缺少分母与负号也使意图不唯一。已修前式∑≥1+∫1N后可直接得差≥1完成下界，原此行应重建或删除，但不自动改写数学证明。

[相关正文：22：反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)

## 数学修正

**原文：**

> $$1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} \leqslant 1 + \int_2^{n+1} \frac{dx}{x} = \log(n+1) - \log 2 + 1.$$

**修正：**

> $$1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} \leqslant 1 + \int_1^n \frac{dx}{x} = \log n + 1.$$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图递减函数的上界用了错误平移：n=2时1.5>1+log(3/2)。每项1/k≤∫k-1^k 1/x对k≥2成立，求和得1+∫1^n，恢复真实上界。

**原文：**

> $$\log\left(1 + \frac{1}{n}\right) \leqslant 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} - \log n \leqslant \log\left(1 + \frac{1}{n}\right) - \log 2 + 1$$

**修正：**

> $$\log\left(1 + \frac{1}{n}\right) \leqslant 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} - \log n \leqslant 1$$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)此上界继承前一个错误积分上界；以已独立修正Hn≤1+log n减去log n唯一得到an≤1，左下界正确保留。

**原文：**

> $$a_n = \sum_{k=1}^{\infty} \left(\frac{1}{k} - \int_k^{k+1} \frac{dx}{x}\right) = \sum_{k=1}^{\infty} \int_k^{k+1} \left(\frac{1}{k} - \frac{1}{x}\right) dx.$$

**修正：**

> $$a_n = \frac{1}{n} + \sum_{k=1}^{n-1} \left(\frac{1}{k} - \int_k^{k+1} \frac{dx}{x}\right) = \frac{1}{n} + \sum_{k=1}^{n-1} \int_k^{k+1} \left(\frac{1}{k} - \frac{1}{x}\right) dx.$$

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图两处无穷和不能等于变动an，定义[反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)an=Hn-log n。k1至n-1的积分和为log n、1/k和为Hn-1，必须再加1/n。API有限和候选遗漏此项已拒绝，本完整式由望远镜精确核验。

**原文：**

> 由此可见，这是一个单调递增的序列

**修正：**

> 由此可见，这是一个单调递减的序列

**理由：** [反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)源图递增错误；an+1-an=1/(n+1)-log(1+1/n)<0，因为∫n^{n+1}1/x>1/(n+1)。依据[反常积分、Euler 常数与 Stirling 公式](../../01-math-analysis-i/22-improper-integrals.md)定义明确为递减，连同本页正确表达式与上下界仍证明收敛。
