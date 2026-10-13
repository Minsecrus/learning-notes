# 勘误：57 Roth 定理与数学分析二期末考试

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> $$
> \bar{\rho}(A) = \limsup_{n \to \infty} \frac{|\{x \in A \mid x \leqslant A\}|}{n}.
> $$

**修正：**

> $$
> \bar{\rho}(A) = \limsup_{n \to \infty} \frac{|\{x \in A \mid x\leqslant n\}|}{n}.
> $$

**理由：** 上密度用前n个整数中的元素数除以n，不能把整数x与集合A作数值比较。原图计数条件错把n写成A。

**原文：**

> 即存在 $x, y, z \in A$

**修正：**

> 即存在 $x,y,z\in A$，$x<y<z$

**理由：** Roth定理保证非平凡三项等差数列，必须有三个不同元素；原图不加次序条件则任何非空A取x=y=z都满足，丢失定理内容。

**原文：**

> 给定自然数 $N$

**修正：**

> 给定正整数 $N$

**理由：** 离散Fourier理论使用模N及1/N，N必须为正整数，避免自然数约定允许零时定义失效。

**原文：**

> $\{e^{i \frac{2\pi i}{N} kx} \mid k = 0, 1, \cdots, N-1\}$

**修正：**

> $\{e^{\frac{2\pi i}{N}kx} \mid k = 0, 1, \cdots, N-1\}$

**理由：** 标准正交基应为单位复数指数exp(2πikx/N)，原图多写一个i使指数变成负实数，不再正交。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> $$
> f = \sum_{k=0}^{n-1} \left( f, e^{i \frac{2\pi i}{N} kx} \right) e^{i \frac{2\pi i}{N} kx}.
> $$

**修正：**

> $$
> f = \sum_{k=0}^{N-1} \left( f, e^{\frac{2\pi i}{N}kx} \right) e^{\frac{2\pi i}{N}kx}.
> $$

**理由：** 有限Fourier展开有N个频率，求和上限为N−1。该行两处频率指数也多写了一个i，应与前面的逆变换公式及正交基一致。

**原文：**

> $$
> \begin{aligned}
> (f, g) &= \left( \sum_{k=0}^{N-1} \frac{\hat{f}(k)}{N} e^{\frac{2\pi i}{N} kx}, \sum_{\ell=0}^{N-1} \frac{\hat{g}(\ell)}{N} e^{\frac{2\pi i}{N} \ell x} \right) \\
> &= \sum_{k=0}^{N-1} \sum_{\ell=0}^{N-1} \frac{\hat{f}(k)}{N} \frac{\overline{\hat{g}(\ell)}}{N} \underbrace{\left( e^{\frac{2\pi i}{N} kx}, e^{\frac{2\pi i}{N} \ell x} \right)}_{\ell=k} \\
> &= \sum_{k=0}^{N-1} \frac{\hat{f}(k)}{N} \frac{\hat{k}(\ell)}{N} \\
> &= \frac{1}{N} (\hat{f}, \hat{g}).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> (f, g) &= \left( \sum_{k=0}^{N-1} \frac{\hat{f}(k)}{N} e^{\frac{2\pi i}{N} kx}, \sum_{\ell=0}^{N-1} \frac{\hat{g}(\ell)}{N} e^{\frac{2\pi i}{N} \ell x} \right) \\
> &= \sum_{k=0}^{N-1} \sum_{\ell=0}^{N-1} \frac{\hat{f}(k)}{N} \frac{\overline{\hat{g}(\ell)}}{N} \underbrace{\left( e^{\frac{2\pi i}{N} kx}, e^{\frac{2\pi i}{N} \ell x} \right)}_{\ell=k} \\
> &= \sum_{k=0}^{N-1} \frac{\hat{f}(k)}{N} \frac{\overline{\hat g(k)}}N \\
> &= \frac{1}{N} (\hat{f}, \hat{g}).
> \end{aligned}
> $$

**理由：** 利用频率正交性后ell=k，第二个函数的系数应为共轭hat g(k)。原图误写不存在的函数hat k及未收缩的ell。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> 我们有如下两个直观

**修正：**

> 我们有如下三个直观

**理由：** 该注记实际列出三点，原图前置计数写成两个，修正枚举数。

**原文：**

> 所有一共有 $\delta^3 N^2$ 中选择

**修正：**

> 所以一共有 $\delta^3N^2$ 种选择

**理由：** 原图随机计数解释的所以、种两处输入错误，修正文字同时保留正确的δ³N²计数。

**原文：**

> 大约有 $\delta^2 N^3$ 个

**修正：**

> 大约有 $\delta^3N^2$ 个

**理由：** 模N三项数列由两项确定，随机取入A需三个元素均入，主量为δ³N²；原图此处把N和δ幂次颠倒，与上一句及精确Fourier主项不符。

**原文：**

> $$
> \begin{aligned}
> \left| \sum_{k=1}^{N-1} \hat{\mathbf{1}_A}(k)^2 \hat{\mathbf{1}_A}(-2k) \right| &\leqslant \left( \max_{k \neq 0} |\hat{\mathbf{1}_A}(-2k)| \right) \sum_{k=1}^{N-1} |\hat{\mathbf{1}_A}(k)|^2 \\
> &\leqslant \varepsilon N \sum_{k=0}^{N-1} |\hat{\mathbf{1}_A}(k)|^2 \\
> &= \varepsilon \delta N^2.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left| \sum_{k=1}^{N-1} \hat{\mathbf{1}_A}(k)^2 \hat{\mathbf{1}_A}(-2k) \right| &\leqslant \left( \max_{k \neq 0} |\hat{\mathbf{1}_A}(-2k)| \right) \sum_{k=1}^{N-1} |\hat{\mathbf{1}_A}(k)|^2 \\
> &\leqslant \varepsilon N \sum_{k=0}^{N-1} |\hat{\mathbf{1}_A}(k)|^2 \\
> &=\varepsilon\delta N^3.
> \end{aligned}
> $$

**理由：** 未除以N的三重频率和上界为εN·(N|A|)=εδN³；只有代入𝔑1外面的1/N后才是εδN²。原图这一步提前少乘一个N。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> 然后在证明等差数列

**修正：**

> 然后再证明等差数列

**理由：** 原图说明从模N进展到整数等差数列时，将再误写为在。

**原文：**

> 我们把 $\mathbf{T}_N$ 替换为 $P$

**修正：**

> 我们把 $\mathbf T_N$ 替换为 $P_1$

**理由：** 本段找到的长等差数列名为P1，尚未定义P；替换对象应对应刚构造的P1。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 未决数学问题

**原文：**

> $P$ 中的元素个数不超过 $\frac{N}{3}$ 个

**问题：** N仅假定奇数，不一定被3整除。P1=[0,N/3)中的整数有ceil(N/3)个，会超过N/3；这影响精确的9/8密度增量及长度下界，不能直接由此推出引理385。需统一处理整数端点与后面迭代的奇数长度条件，暂不猜改精确常数。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> $\|\widehat{F}\|_{L^\infty} \leqslant \|F\|_{L^1}$

**修正：**

> $\|\widehat F\|_{L^\infty}\leqslant N\|F\|_{L^1}$

**理由：** 该离散内积采用概率测度1/N，L¹范数为(1/N)∑|F|，而Fourier变换未归一化。由紧接的∑|F|估计得到N∥F∥1；原图漏掉N。

## 未决数学问题

**原文：**

> $$
> 0 < \ell_2 - \ell_1 \leqslant \sqrt{N}, \quad k(\ell_2 - \ell_1) \bmod N \leqslant \sqrt{N}.
> $$

**问题：** 这里要求正的差d≤√N且取非负余数kd mod N≤√N，一般不成立：k=N−1且N>4时任意这样的正d都给余数N−d>√N。抽屉法能控制的是有符号距离到N的倍数，需与下一页的取整、集合构造及相位估计成组重证。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 未决数学问题

**原文：**

> 其中 $m = m' = \frac{1}{8}\lfloor \frac{N}{d} \rfloor$, 从而上面两个集合不相交 (看长度), 这表明

**问题：** m和m′计数应为整数，1/8·floor(N/d)未必整数；构造还把余数N视为T_N元素，但T_N只含0到N−1，删短后又要求m=|B|/2，未保证偶数。这些整数、零元素和长度问题需一起重证，不能只换一个端点。

**原文：**

> $$
> \begin{aligned}
> |\widehat{1_B}(k) - |B|| &\leqslant \sum_{|j| \leqslant \frac{|B|}{2}} \frac{2\pi |j| (kd - sN)}{N} \\
> &\leqslant \frac{2\pi}{\sqrt{N}} \sum_{|j| \leqslant \frac{|B|}{2}} |j| \\
> &\leqslant \frac{2\pi}{\sqrt{N}} \frac{1}{2} \left( \frac{|B|}{2} \right)^2 = \frac{1}{2} |B| \times \frac{\pi}{4} \frac{|B|}{\sqrt{N}}.
> \end{aligned}
> $$

**问题：** 对称整数求和∑_(|j|≤M)|j|=M(M+1)，不小于原文所用M²/2。原相位误差链因此不成立，并与上一页非负模余数的反例、取整后的长度相互关联；需要新的完整估计才能推出|hat1_B|≥|B|/2。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> $$ \sum_{x \in \mathbf{T}_N} |H(x)| + H(x) \geqslant \frac{\varepsilon N}{2}|B|. $$

**修正：**

> $$ \sum_{x\in\mathbf T_N} (|H(x)|+H(x)) \geqslant \frac{\varepsilon N}{2}|B|. $$

**理由：** 零均值恒等式要求把H(x)也纳入对x的求和。原图没有括号，按通常优先级H(x)成为未求和的自由项，无法推出下一步平均值估计。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> 密度是至少是 $(\delta + \frac{1}{8}\varepsilon)|B|$

**修正：**

> 密度至少是 $(\delta+\frac18\varepsilon)$

**理由：** 密度为交集数量除以集合大小，不能含额外因子|B|。原图把数量下界写成密度，移去该因子后与两集合加权平均原理一致。

**原文：**

> 密度是 $(\delta + \frac{1}{8}\varepsilon)|B|$

**修正：**

> 密度至少是 $(\delta+\frac18\varepsilon)$

**理由：** 两部分密度的加权平均至少δ+ε/8，所以至少一部分的密度达到该下界；它是比例，原图不应乘|B|。

**原文：**

> $$ |A \cap P| \geqslant (\delta + \frac{1}{8})|P|. $$

**修正：**

> $$ |A\cap P|\geqslant(\delta+\frac18\varepsilon)|P|. $$

**理由：** 两种情况都只推出ε/8的密度增量。原图引理387结论漏写ε，与下一步取ε=δ²/8所得δ²/64不一致。

## 未决数学问题

**原文：**

> **命题 388**

**问题：** 本命题由模N三项等差数列计数及引理385–387导出，前面的证明要求N为奇数，又存在取整、正余数和相位估计缺口；此处未假定奇数，后面迭代得到的长度也可能为偶数。命题需完整的整数长度证明，目前不能把这些前提遗漏当作已证明。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> 一组基 $e^{2\pi i k x}$

**修正：**

> 一组基 $e^{ik\theta}$（以 $z=e^{i\theta}$ 参数化单位圆）

**理由：** 后续Fourier系数积分用0到2π的角度变量，并以z=re^(iθ)定义Poisson核，基函数应统一为e^(ikθ)；原图混用周期1和周期2π的圆周参数。

**原文：**

> $f = e^{2\pi k x}$

**修正：**

> $f(\theta)=e^{ik\theta}$

**理由：** 本段解决单位圆边界Fourier基函数，指数需为纯虚ikθ，与角度周期2π的系数积分一致。原图漏i且混用周期1的2π倍数。

**原文：**

> $$ \begin{cases} \Delta u_k &= 0, \quad x \in \stackrel{\circ}{D}, \\ u_k\big|_{\partial D} &= e^{2\pi i k x}. \end{cases} $$

**修正：**

> $$ \begin{cases} \Delta u_k &= 0, \quad x \in \stackrel{\circ}{D}, \\ u_k\big|_{\partial D} &= e^{ik\theta}. \end{cases} $$

**理由：** 边界使用z=e^(iθ)的角度参数，对应基函数e^(ikθ)，统一与下一页0到2π的系数积分。

## 未决数学问题

**原文：**

> 只要新得到的等差数列的长度不是零, 我们就可以迭代

**问题：** 命题388还要求当前长度N_j>33δ_j^−2，非零并不足以继续使用。62/δ和128/δ还需整数化，前面奇数长度条件未维护；最后仅保证长度≥1不能导出可完成所有密度增长步骤。应重证迭代次数和全部长度门槛，暂不猜改常数。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> $f(x) = \sum_{k \in \mathbf{Z}} \widehat{f}(k)e^{2\pi i k x}$

**修正：**

> $f(\theta)=\sum_{k\in\mathbf Z}\widehat f(k)e^{ik\theta}$

**理由：** 以角度θ参数化圆周时，周期为2π，Fourier展开不再多乘2π。原图同页最终积分已采用角度规范。

**原文：**

> $$ f(x) = \sum_{k \in \mathbf{Z}} \widehat{f}(k)u_k(x). $$

**修正：**

> $$ u(z)=\sum_{k\in\mathbf Z}\widehat f(k)u_k(z). $$

**理由：** 组合调和基函数得到的是圆盘内待求函数u，边界数据f仅定义在单位圆。原图把延拓函数误写为f。

**原文：**

> $$ z^k\big|_{r=1} = e^{2\pi i k x}. $$

**修正：**

> $$ z^k\big|_{r=1}=e^{ik\theta}. $$

**理由：** z=e^(iθ)时z^k=e^(ikθ)，原图频率的2π因子与单位圆角度混用。

**原文：**

> 实际上, 对于上述计算在 $z \neq 0$ 处, 但是, $z^k$ 在 $0$ 处是不良好定义。为此, 当 $k < 0$ 时, 我们考虑复共轭 $z^{|k|}$

**修正：**

> 上述结论对非负整数 $k$ 在整个圆盘成立。若直接取负整数 $k$，则 $z^k$ 在 $0$ 处没有定义；因此，当 $k<0$ 时，我们改取 $\bar z^{|k|}$

**理由：** 非负整数幂是多项式，在0处也定义良好；只有负幂才在0有奇点。负频率的正规调和延拓应取共轭幂，原图漏共轭横线且把非负幂说成在0未定义。

**原文：**

> $$ z^{|k|}\bigg|_{r=1} = e^{2\pi i k x}, \quad k < 0. $$

**修正：**

> $$ \bar z^{|k|}\big|_{r=1}=e^{ik\theta}, \quad k < 0. $$

**理由：** k<0时共轭z的|k|次幂在单位圆等于e^(ikθ)。普通z的|k|次幂给相反频率，原图漏共轭并混用角度尺度。

**原文：**

> $$ \begin{cases} \Delta u_k &= 0, \\ u_k\big|_{\partial D} &= e^{2\pi i k x}, \end{cases} \quad \Rightarrow \quad u_k = \begin{cases} z^k, & k \geqslant 0; \\ \bar{z}^{|k|}, & k < 0. \end{cases}. $$

**修正：**

> $$ \begin{cases} \Delta u_k &= 0, \\ u_k\big|_{\partial D} &= e^{ik\theta}, \end{cases} \quad \Rightarrow \quad u_k = \begin{cases} z^k, & k \geqslant 0; \\ \bar{z}^{|k|}, & k < 0. \end{cases}. $$

**理由：** 各正负频率的边界条件统一用角度θ，才能与z^k和共轭幂及最终Poisson积分吻合。

[相关正文：Roth 定理与数学分析二期末考试](../../02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697.md)

## 数学修正

**原文：**

> $$
> \int_{\delta \leqslant |\theta| \leqslant \pi} |P_r(\theta)| \frac{dx}{2\pi} \to 0, \quad r \to 1.
> $$

**修正：**

> $$
> \int_{\delta \leqslant |\theta| \leqslant \pi} |P_r(\theta)|\frac{d\theta}{2\pi} \to 0, \quad r \to 1.
> $$

**理由：** 积分变量和定义域均为θ，原图把积分微元误写成dx。

**原文：**

> 这表明, $\left. P_r * f \right|_{S^1} = f$。

**修正：**

> 这表明，将 $u(re^{i\theta})=(P_r*f)(\theta)$ 按 $u(e^{i\theta})=f(\theta)$ 延拓到边界后，所得 $u$ 在闭圆盘上连续。

**理由：** 只有r趋于1的统一极限等于f；固定r<1的Poisson卷积一般不等于f，原图把极限误作固定半径的限制。统一径向收敛与f连续性共同给闭圆盘连续延拓。

## 未决数学问题

**原文：**

> 从而, 我们只要对对 $\theta = 0$ 验证即可

**问题：** 调和性在旋转下不变，并不意味着一个非径向函数只需在一条半径上验证Laplace算子为零；Poisson核依赖θ，原第二种捷径缺乏推论。前面按局部一致收敛的幂级数逐项求导已能证明调和性；此处额外捷径保留为论证疑点，不能宣称已被证实。

[相关正文：57.1：作业：Fourier级数几乎处处发散的L1-函数](../../02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703.md)

## 数学修正

**原文：**

> 它在 $[-\pi, \pi]$ 上是有界的单调函数

**修正：**

> 它在 $[-\pi,\pi)$ 上是有界的单调函数

**理由：** 周期函数满足f(−π)=f(π)，若在整个闭区间单调只能为常数。改用半开周期区间容许端点跳跃，与题目要证明的BV Fourier系数衰减和后续Gibbs例一致。

**原文：**

> $$ f(x) = \begin{cases} 0, & x = 0; \\ \frac{\pi - x}{2}, \end{cases} $$

**修正：**

> $$ f(x) = \begin{cases} 0, & x = 0; \\ \frac{\pi-x}{2},&0<x<2\pi.\end{cases} $$

**理由：** 锯齿函数分段定义第二支需注明0<x<2π，才能与x=0的单独取值及周期延拓区分。

[相关正文：57.1：作业：Fourier级数几乎处处发散的L1-函数](../../02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703.md)

## 数学修正

**原文：**

> $$ \max_{x \in (0, \frac{\pi}{N}]} S_N(f)(x) - \frac{\pi}{2} = \int_0^\pi \frac{\sin(y)}{y} dy - \frac{\pi}{2} > 0. $$

**修正：**

> $$ \lim_{N\to\infty}\left(\max_{x\in(0,\frac\pi N]}S_N(f)(x)-\frac\pi2\right) = \int_0^\pi \frac{\sin(y)}{y} dy - \frac{\pi}{2} > 0. $$

**理由：** 固定有限N不满足原等式，例如N=1左侧为1−π/2<0；将x=t/N后，Σsin(kt/N)/k一致逼近∫0^t sin y/y dy，其在[0,π]最大值为t=π处，原图漏写N趋于无穷的极限。

**原文：**

> Fourier 系数收敛的典型行为

**修正：**

> Fourier 级数部分和的典型行为

**理由：** Gibbs现象描述部分和在跳跃附近的形状与过冲，不是各Fourier系数的收敛行为，原图术语错置。

**原文：**

> Fourier 级数在间断点处起伏的最大值竟比间断本身 ($f_+(0) - f_-(0) = \pi$) 要大 8.9%。

**修正：**

> Fourier 级数部分和在间断点附近超出右极限的量，约为跳跃高度 $f_+(0)-f_-(0)=\pi$ 的 $8.9\%$。

**理由：** Si(π)−π/2约为0.281，除以跳跃高度π才得到8.949%；最大峰值Si(π)约1.852小于π，原图把过冲相对跳跃高度的百分比误说为峰值比π大。

**原文：**

> $$ \sum_{k \in \mathbb{Z}} \frac{\widehat{f}(k)}{k} $$

**修正：**

> $$ \sum_{k\in\mathbb Z\setminus\{0\}}\frac{\widehat f(k)}k $$

**理由：** k=0使分母为零，必须排除；对其余频率由Parseval与Σk^−2有限、Cauchy–Schwarz即得绝对收敛。

[相关正文：57.1：作业：Fourier级数几乎处处发散的L1-函数](../../02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703.md)

## 数学修正

**原文：**

> 正的奇数 $\lambda_1 < \lambda_2 < \cdots < \lambda_n$

**修正：**

> 正的奇数 $1=\lambda_1<\lambda_2<\cdots<\lambda_n$

**理由：** 下一页同时规定m1=n和2m_k+1=λ_k(2n+1)，这强制λ1=1，不能任意取第一个正奇数。其余频率可归纳选大。

[相关正文：57.1：作业：Fourier级数几乎处处发散的L1-函数](../../02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703.md)

## 数学修正

**原文：**

> $$\int_0^{2\pi} \phi_n(x) = 2 \text{ 并且 } S_{m_k}\phi_n(x) = \sum_{s=1}^n I_{m_k, \Delta_s}(x).$$

**修正：**

> $$\int_0^{2\pi}\phi_n(x)\,dx=2 \text{ 并且 } S_{m_k}\phi_n(x) = \sum_{s=1}^n I_{m_k, \Delta_s}(x).$$

**理由：** 积分计算的变量是x，原图K1漏写微元dx；每个区间长度2/m_k²贡献2/n。

**原文：**

> （足够大的）正奇数 $\lambda_1 < \lambda_2 < \cdots < \lambda_n$

**修正：**

> 正奇数 $1=\lambda_1<\lambda_2<\cdots<\lambda_n$（依次将 $\lambda_2,\ldots,\lambda_n$ 取足够大）

**理由：** m1=n固定λ1=1；Riemann–Lebesgue用于k≥2的先前脉冲，仅后续λ_k需选足够大。原图把λ1也列为可选大与定义不符。

**原文：**

> $\{\sigma_\ell, \Delta_j\}_{\ell \leqslant n-1, j \leqslant n}$

**修正：**

> $\{\sigma_\ell:2\leqslant\ell\leqslant n\}\cup\{\Delta_j:1\leqslant j\leqslant n\}$

**理由：** σ在开头定义为σ2到σn，原图索引写到n−1并隐含未定义σ1；区间族应覆盖实际全部σ和Δ。

[相关正文：57.1：作业：Fourier级数几乎处处发散的L1-函数](../../02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703.md)

## 数学修正

**原文：**

> $$\frac{1}{n} \sum_{s=k}^n \frac{1}{\sin\left(\frac{1}{2}(x - A_s)\right)} \geqslant \frac{1}{\pi} \sum_{\ell=1}^{n-k} \frac{1}{\ell}.$$

**修正：**

> $$\frac1n\left|\sum_{s=k}^n\frac1{\sin(\frac12(x-A_s))}\right| \geqslant \frac{1}{\pi} \sum_{\ell=1}^{n-k} \frac{1}{\ell}.$$

**理由：** 当x∈σk且s≥k时，x−A_s在(−2π,0)，每个分母均为负，原不带绝对值的和不可能大于正的调和和。K6已使用绝对值，需同样取绝对值才给K8的下界。

**原文：**

> 存在子区间序列 $\{E_n\}_{n \geqslant 10000}$

**修正：**

> 存在可测集合序列 $\{E_n\}_{n\geqslant10000}$

**理由：** E_n由多个σ区间内按正弦阈值截取的集合并成，一般不是单个子区间；K10明确给出可测集合构造，原图称子区间不准确。

**原文：**

> 子区间序列 $\{E_n\}_{n \geqslant 1}$

**修正：**

> 可测集合序列 $\{E_n\}_{n\geqslant1}$

**理由：** 此处重选上一步的E_n子序列，仍为可测集合，通常不为区间。

**原文：**

> 对任意的 $n$，我们有 $M_n \geqslant 2M_{n-1}$

**修正：**

> 对任意的 $n\geqslant2$，我们有 $M_n\geqslant2M_{n-1}$

**理由：** M序列从1起，递推与M_{n−1}比较仅可从n=2起；原图对n=1引用未定义M0。M1≥2已另行给定。

[相关正文：57.1：作业：Fourier级数几乎处处发散的L1-函数](../../02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703.md)

## 数学修正

**原文：**

> c) $\sup_{1 \leqslant k \leqslant n-1} q_k \leqslant \frac{\sqrt{M_n}}{2^n}$

**修正：**

> c) 对 $n\geqslant2$，$\sup_{1 \leqslant k \leqslant n-1} q_k \leqslant \frac{\sqrt{M_n}}{2^n}$

**理由：** n=1时没有前项，sup空集合不是所用的正整数频率界；明确此条件只要求n≥2。

**原文：**

> 一个 $N_x \leqslant \frac{\sqrt{M_n}}{2^n}$

**修正：**

> 一个 $N_x\leqslant q_n\leqslant\frac{\sqrt{M_{n+1}}}{2^{n+1}}$

**理由：** K13(d)仅给N_x≤q_n，K13(c)用指标n+1才给q_n≤√M_{n+1}/2^(n+1)；没有q_n≤√M_n/2^n，原图将下一项控制写成当前项。

**原文：**

> K18) 证明，

**修正：**

> K18) 证明，对 $0\leqslant N\leqslant q_n$，

**理由：** 尾和用Dirichlet核最大值2N+1控制，须N≤q_n≤√M_{n+1}/2^(n+1)，结合M_{s+1}≥2M_s得尾界O(2^−n)。若不限制N，原数据不足以给与N无关的该估计；此界只用于K16所选N_x。

**原文：**

> $f(x)$ 的 Fourier 变换的部分和

**修正：**

> $f(x)$ 的 Fourier 级数的部分和

**理由：** 此处S_N是周期函数Fourier级数的截断和，原图误称Fourier变换的部分和。

[相关正文：57.2：期末考试：Maass波函数的展开](../../02-math-analysis-ii/57-roth-theorem/57-06-p0704-0708.md)

## 数学修正

**原文：**

> M8) (2 分) 证明，任给的 $f \in \mathscr{E}_s$，对任意的 $(x, y) \in \mathbb{H}$，级数 $\sum_{n \in \mathbb{Z}} a_k(f, y) e^{2\pi ikx}$ 收敛并且

**修正：**

> M8) (2 分) 证明，任给的 $f \in \mathscr{E}_s$，对任意的 $(x, y) \in \mathbb{H}$，级数 $\sum_{k\in\mathbb Z}a_k(f,y) e^{2\pi ikx}$ 收敛并且

**理由：** M8展开的系数和指数均用k，应对k求和，原图误把求和指标写为n。

**原文：**

> $$\sum_{n \in \mathbb{Z}} a_k(f, y) e^{2\pi ikx} = f(x, y).$$

**修正：**

> $$\sum_{k\in\mathbb Z}a_k(f,y) e^{2\pi ikx} = f(x, y).$$

**理由：** M8展开的系数和指数均用k，应对k求和，原图误把求和指标写为n。

[相关正文：57.2：期末考试：Maass波函数的展开](../../02-math-analysis-ii/57-roth-theorem/57-06-p0704-0708.md)

## 数学修正

**原文：**

> 对任意的 $(x, y)$

**修正：**

> 对任意的 $(x,y)\in\mathbb H$

**理由：** K_s只在y>0定义，幂y^(1/2−s)亦用正实数y；Maass波函数题的定义域为上半平面，原图末题遗漏域条件。

**原文：**

> 落在 $\mathcal{E}_s$ 中

**修正：**

> 落在 $\mathscr E_s$ 中

**理由：** 本题的空间从开始定义为mathscr E_s，末尾切换mathcal字体没有另一定义；统一指向既定Maass波函数空间。
