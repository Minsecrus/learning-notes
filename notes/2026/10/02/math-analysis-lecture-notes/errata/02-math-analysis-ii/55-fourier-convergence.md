# 勘误：55 Fourier 级数的收敛理论

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> 我们选取依次选取

**修正：**

> 我们依次选取

**理由：** 原图选取波包频率一句重复选取，去掉重复文字。

**原文：**

> 这样得到的所有 $W_{K_\ell}$ 和 $W_{K_\ell}^-$ 在频率空间上面的支集是两两不相交的。

**修正：**

> 不同 $\ell$ 对应的波包在频率空间上的支集互不相交；同一 $\ell$ 下，$W_{K_\ell}^-$ 的频率支集包含在 $W_{K_\ell}$ 的频率支集中。

**理由：** K_(ell+1)>3K_ell只保证不同ell的频率带分离。同一ell的负半波包是完整波包的一部分，两者支集重叠；原图把所有这两类波包都称两两不相交。

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> $$
> \left(\frac{1}{\ell_0}\right)^2 W_{K_{\ell_0}}^-(0) = \left(\frac{1}{\ell_0}\right)^2 \sum_{k=-1}^{-K_{\ell_0}} \frac{1}{k} \sim \frac{\log(K_{\ell_0})}{\ell_0^2}.
> $$

**修正：**

> $$
> \left(\frac{1}{\ell_0}\right)^2 W_{K_{\ell_0}}^-(0) = \left(\frac{1}{\ell_0}\right)^2 \sum_{k=-K_{\ell_0}}^{-1} \frac{1}{k} \sim -\frac{\log(K_{\ell_0})}{\ell_0^2}.
> $$

**理由：** 负频率的求和应从−K到−1，其调和和为−H_K；乘1/ell²后渐近为−log K/ell²。原图倒置求和上下限并漏掉渐近的负号；仍给出向负无穷发散的反例。

**原文：**

> 后面一项的总是有限的

**修正：**

> 后面一项总是有界的

**理由：** 此处需要后面部分和由与ell0无关的常数一致控制，前页∥W_K∥∞≤C与∑ell^−2给出这个有界性；原图用有限和漏写一致界的含义。

**原文：**

> $$
> \begin{aligned}
> & S_N(f)(x_0) - \frac{f_-(x_0) + f_+(x_0)}{2} \\
> = & \int_{-\pi}^\pi D_N(x) (f(x_0 - x) - f_-(x_0) - f_+(x_0)) \frac{dy}{2\pi} \\
> = & \int_0^\pi D_N(y) (f(x_0 - y) - f_-(x_0) + f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\
> = & \int_0^\pi \sin\left(\left(N + \frac{1}{2}\right)y\right) \cdot \underbrace{\frac{y}{\sin\left(\frac{1}{2}y\right)} \cdot \frac{(f(x_0 - y) - f_-(x_0) + f(x_0 + y) - f_+(x_0))}{y}}_{\in L^1} \frac{dy}{2\pi}
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> & S_N(f)(x_0) - \frac{f_-(x_0) + f_+(x_0)}{2} \\
> = & \int_{-\pi}^\pi D_N(y)\left(f(x_0-y)-\frac{f_-(x_0)+f_+(x_0)}2\right) \frac{dy}{2\pi} \\
> = & \int_0^\pi D_N(y) (f(x_0 - y) - f_-(x_0) + f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\
> = & \int_0^\pi \sin\left(\left(N + \frac{1}{2}\right)y\right) \cdot \underbrace{\frac{y}{\sin\left(\frac{1}{2}y\right)} \cdot \frac{(f(x_0 - y) - f_-(x_0) + f(x_0 + y) - f_+(x_0))}{y}}_{\in L^1} \frac{dy}{2\pi}
> \end{aligned}
> $$

**理由：** Dirichlet核积分为1，减去左右极限的平均值应减半和；积分变量由dy指定，应统一用y。原图漏除以2并混用x、y。

**原文：**

> Dirichlet 证明的 (1847)

**修正：**

> Dirichlet 证明的 (1829)

**理由：** Dirichlet原始论文发表于Journal für die reine und angewandte Mathematik第4卷（1829），原图把年份写成1847。原始文献目录：https://geodesic.mathdoc.fr/item/JRAM_1829__4_183134/ 。

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> $0 = x_1 < x_2 < \cdots < x_{\ell-1} < x_\ell = 2\pi = x_1$

**修正：**

> $0 = x_1 < x_2 < \cdots < x_{\ell-1} < x_\ell = 2\pi$

**理由：** 实数参数端点0与2π不同，只有映射到环面后才是同一点；原图把实数排序链写成2π=x1=0。

**原文：**

> $f$ 限制在每个区间 $[x_k, x_{k+1}]$ 上都是 $C^1$ 的

**修正：**

> $f$ 在每个开区间 $(x_k,x_{k+1})$ 上有一个可 $C^1$ 延拓到 $[x_k,x_{k+1}]$ 的限制

**理由：** 允许跳跃间断时，原函数不能同时在相邻闭区间上C¹且有同一个端点值。分段C¹指开区间上的限制具有各自的C¹闭区间延拓，可有不同单侧端点值。

**原文：**

> $$
> \begin{aligned}
> & S_N(f)(x_0) - f(x_0) \\
> = & \int_0^\pi D_N(x) (f(x_0 - x) + f(x_0 + x) - 2f(x_0)) \frac{dx}{2\pi} \\
> = & \int_0^\pi \sin\left(\left(N + \frac{1}{2}\right)y\right) \cdot \underbrace{\frac{y}{\sin\left(\frac{1}{2}y\right)} \cdot \frac{(f(x_0 - y) + f(x_0 + y) - 2f(x_0))}{y}}_{\in L^1} dy
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> & S_N(f)(x_0) - f(x_0) \\
> = & \int_0^\pi D_N(x) (f(x_0 - x) + f(x_0 + x) - 2f(x_0)) \frac{dx}{2\pi} \\
> = & \int_0^\pi \sin\left(\left(N + \frac{1}{2}\right)y\right) \cdot \underbrace{\frac{y}{\sin\left(\frac{1}{2}y\right)} \cdot \frac{(f(x_0 - y) + f(x_0 + y) - 2f(x_0))}{y}}_{\in L^1} \frac{dy}{2\pi}
> \end{aligned}
> $$

**理由：** Dini证明最后一行仍是同一个归一化周期积分，需要dy/(2π)，原图此行漏掉归一化因子。

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> 上述收敛未必是一致收敛, 之后我们将证明, 如果 $\alpha > \frac{1}{2}$, 那么上面的收敛是一致收敛的。

**修正：**

> 对任意 $0<\alpha\le1$，上述收敛都一致。对 $0<\alpha<1$，由 Fejér 核的界可得 $\|F_N*f-f\|_\infty=O(N^{-\alpha})$；令 $P_N=F_N*f$，其次数小于 $N$，故 $S_NP_N=P_N$，从而 $\|S_Nf-f\|_\infty\le(1+\|D_N\|_1)\|P_N-f\|_\infty=O(N^{-\alpha}\log N)\to0$。当 $\alpha=1$ 时同理得到 $O((\log N)^2/N)$。之后的 $\alpha>\frac12$ 条件还保证更强的 Fourier 级数绝对收敛。

**理由：** 原图否认一般正Hölder指数下的一致收敛，这不成立。前文Fejér核逼近率结合Dirichlet核L¹范数O(log N)与三角多项式再现性即可得到任意α>0的一致收敛；α>1/2的后续定理实际给绝对收敛。

**原文：**

> $$ |\widehat{f}(k)| \leqslant \frac{1}{(1 + |k|)^\alpha}. $$

**修正：**

> $$ |\widehat{f}(k)| \leqslant \frac{C_f}{(1 + |k|)^\alpha}. $$

**理由：** Fourier衰减界的常数依赖函数的Hölder范数与零频率大小，不能固定为1；例如任意大常数函数直接违反k=0的原界。补上依赖f的常数。

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> $$ \begin{aligned} &(V([a, x_2], h) - h(x_2)) - (V([a, x_1], h) - h(x_1)) \\ ={} &(V([a, x_2], h) - (V([a, x_1], h)) - (h(x_2) - h(x_1)) \\ \geqslant{} &V([x_1, x_2], h) - (h(x_2) - h(x_1)) \\ \geqslant{} &0. \end{aligned} $$

**修正：**

> $$ \begin{aligned} &(V([a, x_2], h) - h(x_2)) - (V([a, x_1], h) - h(x_1)) \\ ={} &(V([a, x_2], h) - V([a, x_1], h)) - (h(x_2) - h(x_1)) \\ \geqslant{} &V([x_1, x_2], h) - (h(x_2) - h(x_1)) \\ \geqslant{} &0. \end{aligned} $$

**理由：** 变差结构定理第二行括号需表达(V2−V1)−(h2−h1)，原图V1前多出开括号导致算式括号不匹配。

**原文：**

> 界变差函数是 Riemann 可积的

**修正：**

> 有界变差函数是 Riemann 可积的

**理由：** 原图推论376的有界变差一词漏了有字，恢复完整数学术语。

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> 我们不妨假设 $f$ 是单调函数。

**修正：**

> 我们不妨在包含 $x_0$ 的局部区间上处理单调函数，并把分解后的函数作周期延拓；远离 $x_0$ 的部分仍由局部化引理处理。

**理由：** 非恒定周期函数不能在整个实轴上单调。结构定理适用于切开后的区间，需把单调分解用于x0附近的局部段，再周期延拓并以局部化处理其余部分。

**原文：**

> $$ \begin{aligned} &S_N(f)(x_0) - \frac{f_-(x_0) + f_+(x_0)}{2} \\ ={} &\int_0^\pi D_N(x) (f(x_0 - y) - f_-(x_0) + f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\ ={} &\underbrace{\int_0^\pi \frac{\sin\left(\left(N + \frac{1}{2}\right)y\right)}{\sin\left(\frac{1}{2}y\right)} (f(x_0 - y) - f_-(x_0)) \frac{dy}{2\pi}}_{I_-} + \underbrace{\int_0^\pi \frac{\sin\left(\left(N + \frac{1}{2}\right)y\right)}{\sin\left(\frac{1}{2}y\right)} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{I_+}. \end{aligned} $$

**修正：**

> $$ \begin{aligned} &S_N(f)(x_0) - \frac{f_-(x_0) + f_+(x_0)}{2} \\ ={} &\int_0^\pi D_N(y) (f(x_0 - y) - f_-(x_0) + f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\ ={} &\underbrace{\int_0^\pi \frac{\sin\left(\left(N + \frac{1}{2}\right)y\right)}{\sin\left(\frac{1}{2}y\right)} (f(x_0 - y) - f_-(x_0)) \frac{dy}{2\pi}}_{I_-} + \underbrace{\int_0^\pi \frac{\sin\left(\left(N + \frac{1}{2}\right)y\right)}{\sin\left(\frac{1}{2}y\right)} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{I_+}. \end{aligned} $$

**理由：** 该行积分变量为y，核也应取D_N(y)，原图误沿用x。

**原文：**

> $$ \frac{2}{t} \leqslant \frac{1}{\sin\left(\frac{t}{2}\right)} \leqslant \frac{2}{t} + \frac{t}{6}, \quad 0 \leqslant t \leqslant \pi, $$

**修正：**

> $$ \frac{2}{t} \leqslant \frac{1}{\sin\left(\frac{t}{2}\right)} \leqslant \frac{2}{t} + \frac{t}{6}, \quad 0<t\leqslant\pi, $$

**理由：** 正弦分母估计含有1/t与1/sin(t/2)，在t=0没有定义，需排除零端点。

**原文：**

> $$ |I_{+,\delta} - \underbrace{\int_0^\delta \frac{2\sin\left(\left(N + \frac{1}{2}\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{\widetilde{I}_{+,\delta}}| \leqslant \frac{1}{6} \underbrace{\int_0^\delta \left|\sin\left(\left(N + \frac{1}{2}\right)y\right)\right| \times y \times (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{\widetilde{\widetilde{I}}_{+,\delta}}. $$

**修正：**

> $$ |I_{+,\delta} - \underbrace{\int_0^\delta \frac{2\sin\left(\left(N + \frac{1}{2}\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{\widetilde{I}_{+,\delta}}| \leqslant \underbrace{\int_0^\delta \left|\sin\left(\left(N + \frac{1}{2}\right)y\right)\right| \times y \times |f(x_0+y)-f_+(x_0)|\frac{dy}{12\pi}}_{\widetilde{\widetilde{I}}_{+,\delta}}. $$

**理由：** 余项符号原图仅包住未乘1/6的积分，而后页按已经乘1/6的量估计，二者不一致。把1/6并入余项定义的积分测度，配套修改dy/(12π)。

**原文：**

> $$ |I_{+,\delta} - \underbrace{\int_0^\delta \frac{2\sin\left(\left(N + \frac{1}{2}\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{\widetilde{I}_{+,\delta}}| \leqslant \frac{1}{6} \underbrace{\int_0^\delta \left|\sin\left(\left(N + \frac{1}{2}\right)y\right)\right| \times y \times (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{\widetilde{\widetilde{I}}_{+,\delta}}. $$

**修正：**

> $$ |I_{+,\delta} - \underbrace{\int_0^\delta \frac{2\sin\left(\left(N + \frac{1}{2}\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi}}_{\widetilde{I}_{+,\delta}}| \leqslant \underbrace{\int_0^\delta \left|\sin\left(\left(N + \frac{1}{2}\right)y\right)\right| \times y \times |f(x_0+y)-f_+(x_0)|\frac{dy}{12\pi}}_{\widetilde{\widetilde{I}}_{+,\delta}}. $$

**理由：** 误差应由非负绝对值积分控制，对单调下降的分量亦成立；原图漏绝对值。把1/6系数并入dy/(12π)，使余项定义与后页界一致。

**原文：**

> $$ |I_+| \leqslant |\widetilde{I}_{+,\delta}| + \widetilde{\widetilde{I}}_{+,\delta} + I_{+,>\delta}. $$

**修正：**

> $$ |I_+| \leqslant |\widetilde{I}_{+,\delta}| + \widetilde{\widetilde{I}}_{+,\delta} + |I_{+,>\delta}|. $$

**理由：** 三角不等式对远区积分取绝对值，原图末项直接使用可变号积分，不能作为|I+|的上界。

[相关正文：Fourier 级数的收敛理论](../../02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666.md)

## 数学修正

**原文：**

> 首先, 我们有

**修正：**

> 首先，限制 $0<\delta\le1$，我们有

**理由：** 第二步把积分中的y因子删去，需要y≤1。δ本可任意缩小，明确这个选择即可保证所用不等式。

**原文：**

> $c \in (0, \delta)$

**修正：**

> $c\in[0,\delta]$

**理由：** 积分第二中值定理允许端点，若单调因子只在右端点跳跃，所需c可以为δ；不能总断言存在开区间中的c。

**原文：**

> $$ \begin{aligned} \widetilde{I}_{+,\delta} &= \int_0^\delta \frac{\sin\left(\left(N + \frac{1}{2}\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\ &= (f(x_0 + \delta) - f_+(x_0)) \underbrace{\int_{\left(N + \frac{1}{2}\right)c}^{\left(N + \frac{1}{2}\right)\delta} \frac{\sin t}{t} \frac{dt}{2\pi}}_{< \infty}. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \widetilde{I}_{+,\delta} &= \int_0^\delta \frac{2\sin\left(\left(N + \frac12\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\ &= (f(x_0 + \delta) - f_+(x_0)) \underbrace{\int_{\left(N + \frac{1}{2}\right)c}^{\left(N + \frac{1}{2}\right)\delta} \frac{\sin t}{t}\frac{dt}{\pi}}_{< \infty}. \end{aligned} $$

**理由：** 前页定义的tilde I积分核含2 sin((N+1/2)y)/y，此页第一行漏掉2，补回以保持同一积分。

**原文：**

> $$ \begin{aligned} \widetilde{I}_{+,\delta} &= \int_0^\delta \frac{\sin\left(\left(N + \frac{1}{2}\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\ &= (f(x_0 + \delta) - f_+(x_0)) \underbrace{\int_{\left(N + \frac{1}{2}\right)c}^{\left(N + \frac{1}{2}\right)\delta} \frac{\sin t}{t} \frac{dt}{2\pi}}_{< \infty}. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \widetilde{I}_{+,\delta} &= \int_0^\delta \frac{2\sin\left(\left(N + \frac12\right)y\right)}{y} (f(x_0 + y) - f_+(x_0)) \frac{dy}{2\pi} \\ &= (f(x_0 + \delta) - f_+(x_0)) \underbrace{\int_{\left(N + \frac{1}{2}\right)c}^{\left(N + \frac{1}{2}\right)\delta} \frac{\sin t}{t}\frac{dt}{\pi}}_{< \infty}. \end{aligned} $$

**理由：** 与前页tilde I核中系数2配套，换元后的测度应为dt/π，原图漏掉2。

**原文：**

> $$ \widetilde{I}_{+,\delta} < \frac{1}{3} \varepsilon. $$

**修正：**

> $$ |\widetilde{I}_{+,\delta}|<\frac13\varepsilon. $$

**理由：** 第二中值定理给出的积分可能为负，需控制绝对值才能用于后面的三角估计。原图只写单侧上界，不足以证明|I+|小。

**原文：**

> $$ |I_+| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + I_{+,>\delta}. $$

**修正：**

> $$ |I_+| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + |I_{+,>\delta}|. $$

**理由：** 综合误差界时需用远区积分的绝对值，配套修正前页三角不等式。

**原文：**

> $$ I_{+,>\delta} < \frac{\varepsilon}{3}. $$

**修正：**

> $$ |I_{+,>\delta}|<\frac\varepsilon3. $$

**理由：** Riemann–Lebesgue收敛到零给出的是绝对值小，最终证明需要这个界；原图漏掉绝对值。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> 在 $[0, 2\pi]$ 上的定义为

**修正：**

> 在 $[0,2\pi)$ 上的定义为

**理由：** α非整数时该指数函数在0与2π的值不同，不能在闭区间两端按公式赋值同时保持2π周期。用半开基本区间定义再周期延拓即可。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> $$\mathbf{S}^1 = \{(x, y) \in \mathbb{R}^3 \mid x^2 + y^2 = 1\}.$$

**修正：**

> $$\mathbf{S}^1 = \{(x, y) \in \mathbb{R}^2 \mid x^2 + y^2 = 1\}.$$

**理由：** 单位圆是二维空间中的二元坐标集合，原图集合定义误写R³，与前一句R²不一致。

**原文：**

> $f, g \in L^2(\mathbf{T})$

**修正：**

> $f_1,f_2\in L^2(\mathbf T)$

**理由：** 内积公式使用f1和f2，前面的量词应指定这两个函数，原图声明f、g却在公式中换名。

**原文：**

> $f, g \in C^{\infty}(\mathbf{T})$

**修正：**

> $f_1,f_2\in C^\infty(\mathbf T)$

**理由：** 自伴性公式中的函数为f1、f2，与前面量词统一，避免未定义的函数变量。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> $$-\Delta p = \ell^2 p.$$

**修正：**

> $$-\Delta_{\mathbf T}p=\ell^2p.$$

**理由：** p是限制在单位圆上的函数，对它作用的应是圆周Laplace算子Δ_T；环境空间Laplace作用于齐次调和P为零，不能给出ell²的特征值。

**原文：**

> $\left\{ e^{ikx} \mid k \in \mathbb{Z} \right\}$

**修正：**

> $\left\{\frac1{\sqrt{2\pi}}e^{ikx}\mid k\in\mathbb Z\right\}$

**理由：** 本习题圆周测度采用dθ，指数函数范数为√(2π)，Hilbert基要求单位范数。前题s11已有正确归一化，注记漏掉它。

**原文：**

> $f, g \in L^2(\mathbf{S}^2)$

**修正：**

> $f_1,f_2\in L^2(\mathbf S^2)$

**理由：** 球面内积公式使用f1、f2，修正前面量词中的变量名称使其对应同一对函数。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> $f, g \in C^\infty(\mathbf{S}^2)$

**修正：**

> $f_1,f_2\in C^\infty(\mathbf S^2)$

**理由：** 球面自伴性公式使用f1、f2，将量词所指定的函数名称与公式统一。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> $$
> (f_1, f_2) = \int_0^\pi \int_0^{2\pi} f_1(\theta, \varphi) \overline{f_2(\theta, \varphi)} \sin \theta \, d\theta d\varphi
> $$

**修正：**

> $$
> (f_1, f_2) = \int_0^\pi \int_0^{2\pi} f_1(\theta, \varphi) \overline{f_2(\theta, \varphi)} \sin\theta\,d\varphi\,d\theta
> $$

**理由：** 迭代积分外层θ范围0到π，内层φ范围0到2π，微分次序应为dφ dθ；原图微分次序与积分上下限的嵌套相反。

**原文：**

> 对于 $P \in \mathbf{H}^\ell$，我们定义

**修正：**

> 对于 $P\in\mathbf P^\ell$，我们定义

**理由：** 紧接着要求证明D_i作用于P^ell，定义必须先对所有P^ell给出，再限制到其调和子空间H^ell。原图将初始定义域写窄了。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> $\operatorname{Span}\{ \mathbf{H}^\ell \mid \ell = 1, 2, 3, \cdots \}$

**修正：**

> $\operatorname{Span}\{ \mathbf{H}^\ell \mid \ell = 0,1,2,3,\cdots \}$

**理由：** 零次球谐函数是常数，与所有正次数球谐函数正交；若从ell=1开始，其线性张成空间无法逼近非零常数，不可能在L²球面中稠密。

**原文：**

> $L^2(\mathbf{S}^2) = \bigoplus_{\ell 0} \mathbf{H}^\ell$

**修正：**

> $L^2(\mathbf{S}^2) = \bigoplus_{\ell\ge0} \mathbf{H}^\ell$

**理由：** 球谐直和需遍历所有非负次数，原图直和下标印成ell 0，漏掉关系符号。

**原文：**

> 它的维数是 $\ell(\ell+1)$

**修正：**

> 它的维数是 $2\ell+1$

**理由：** 球谐次数ell的特征空间维数为2ell+1，前页S8已证明；ell(ell+1)是特征值。原图混淆维数与特征值。

[相关正文：55.1：作业：Fourier级数的计算，三角函数与球谐函数](../../02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673.md)

## 数学修正

**原文：**

> $$
> Y_m^\ell(\theta, \varphi) = \overline{Y_{-m}^\ell(\theta, \varphi)}.
> $$

**修正：**

> $$
> Y_m^\ell(\theta, \varphi) =(-1)^m\overline{Y_{-m}^\ell(\theta,\varphi)}.
> $$

**理由：** 正m的Rodrigues式包含Condon–Shortley相位；要保持随后J±的正平方根升降系数，负m定义应乘(−1)^m。直接取共轭在ell=1,m=−1时给出相反的升降号。

**原文：**

> 我们有下面的恒等式：

**修正：**

> 我们有下面的恒等式（约定 $|m|>\ell$ 时 $Y_m^\ell=0$）：

**理由：** 升降公式在m=±ell处含越出指标范围的Y_(m±1)，虽然其系数为零，仍需明确这些函数定义为零以覆盖所声明的端点情况。
