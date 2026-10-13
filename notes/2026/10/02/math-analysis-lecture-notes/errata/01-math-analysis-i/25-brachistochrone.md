# 勘误：25 最速降线与积分第一中值定理

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)

## 数学修正

**原文：**

> 在 $(y, f(y))$ 处，小球的速度应该是 $\sqrt{-2Gf(x)}$

**修正：**

> 在 $(x, f(x))$ 处，小球的速度应该是 $\sqrt{-2Gf(x)}$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)源句位置y而势能及后续相邻段均用x，须同一点(x,f(x))才能使用该速度。

**原文：**

> $$\Delta t = \frac{\sqrt{1 + f'(x)^2}\Delta y}{\sqrt{-2Gf(x)}}$$

**修正：**

> $$\Delta t = \frac{\sqrt{1 + f'(x)^2}\Delta x}{\sqrt{-2Gf(x)}}$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)已选两个横坐标x、x+Δx，弧长局部量为sqrt(1+f′²)Δx，源式误Δy与全部后续积分dx不符。

**原文：**

> $$\gamma_s : [0, a] \to (x, f_s(x)).$$

**修正：**

> $$\gamma_s : [0, a] \to \mathbb{R}^2, \quad x\mapsto (x, f_s(x)).$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)原曲线表示式将点当作箭头右侧定义域，又未量化x；补Rn目标及x映射符使已给函数图像参数化有完整类型，不改运动式。

[相关正文：最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)

## 数学修正

**原文：**

> $$\frac{dL}{dX} = G\frac{(1 + V^2)^{\frac{1}{2}}}{(-2GV)^{\frac{3}{2}}}, \quad \frac{dL}{dV} = \frac{V}{\left(-2GX(1 + V^2)\right)^{\frac{1}{2}}}.$$

**修正：**

> $$\frac{dL}{dX} = G\frac{(1 + V^2)^{\frac{1}{2}}}{(-2GX)^{\frac{3}{2}}}, \quad \frac{dL}{dV} = \frac{V}{\left(-2GX(1 + V^2)\right)^{\frac{1}{2}}}.$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)L(X,V)=sqrt(1+V²)(-2GX)^-1/2，独立求X偏导为G sqrt(1+V²)(-2GX)^-3/2；原分母V可能正或0导致非实/无定义，应X，与L域X<0一致。

## 未决数学问题

**原文：**

> 所以，通过选取
>
> $$g(x) = \left(\frac{dL}{dX}\right)(f, f') - \frac{d}{dx}\left(\frac{dL}{dV}\right)(f, f'),$$

**问题：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)允许变分g须g(0)=g(a)=0，却取Euler-Lagrange残差，未说明残差端点为0；而L在f=0的起点本来奇异，积分交换也需反常端控制。可用内部紧支测试函数及变分基本引理，但不能仅靠“足够光滑”解决源端点问题，保留结构疑点。

[相关正文：最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)

## 数学修正

**原文：**

> $$\theta \mapsto \left(\frac{C_1}{2}(2\theta - \sin(2\theta)) + C_2,\ \frac{1}{2}(1 - \cos(2\theta))\right)$$

**修正：**

> $$\theta \mapsto \left(\frac{C_1}{2}(2\theta - \sin(2\theta)) + C_2,\ -\frac{C_1}{2}(1 - \cos(2\theta))\right)$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)此前t=g=C1 sin²θ、f=-g，所以曲线纵坐标是-C1(1-cos2θ)/2，原式漏负号及C1。下一条c=C1/2的标准向下摆线相符。

**原文：**

> 可以确定 $\Theta \in [0, \frac{\pi}{2}]$ 和 $c$

**修正：**

> 可以确定 $\Theta \in (0, 2\pi)$ 和 $c$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)任意a,h>0的终点需a/h=(Θ-sinΘ)/(1-cosΘ)。此比值在(0,2π)从0严格增至无穷：导数[(1-cosΘ)²-(Θ-sinΘ)sinΘ]/(1-cosΘ)²正（下半区显然，上半区用2tan(Θ/2)>Θ）；限制π/2会排除大量终点，完整第一摆线弧范围是(0,2π)。

**原文：**

> $$\gamma : \left[0, \frac{\pi}{2}\right] \to \mathbb{R}^2, \quad \theta \mapsto \left(c(\theta - \sin\theta),\ -c(1 - \cos\theta)\right).$$

**修正：**

> $$\gamma : \left[0, \pi\right] \to \mathbb{R}^2, \quad \theta \mapsto \left(c(\theta - \sin\theta),\ -c(1 - \cos\theta)\right).$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)Huygens定理源参数域只有0至π/2，却下一页滚到γ(π)=(cπ,-2c)，终点不在定义域。需半摆线0至π，才能定义全过程和底点。

## 未决数学问题

**原文：**

> $$g'(x) = \sqrt{\frac{C_1 - g}{g}}$$

**问题：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)将平方关系g(1+g′²)=C1直接选正根，隐含初下降支路；一般终点需Θ可超过π，后半弧g′<0。前半局部正根积分可延续标准摆线，但原文未交待转折与全局最速性，必要条件不等于已经证明全局极小；保留说明问题，勿仅强制全程正根。

[相关正文：最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)

## 数学修正

**原文：**

> 从任意一点 $\gamma(\theta_0)$ 出发的小球

**修正：**

> 从任意一点 $\gamma(\theta_0)$（$0\leqslant\theta_0<\pi$）出发的小球

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)若从底点θ0=π出发，到底点时间0而前面T为正，等时性只适用于从非底点静止释放。排除底点是必要条件，与积分换元cosθ0/2>0一致。

**原文：**

> $$= \sqrt{\frac{2c}{G}} \int_{\theta_0}^{\pi} \frac{\sin\left(\frac{\theta}{2}\right)}{\sqrt{\cos^2\left(\frac{\theta_0}{2}\right) - \cos^2\left(\frac{\theta}{2}\right)}}\, d\theta$$

**修正：**

> $$= \sqrt{\frac{c}{G}} \int_{\theta_0}^{\pi} \frac{\sin\left(\frac{\theta}{2}\right)}{\sqrt{\cos^2\left(\frac{\theta_0}{2}\right) - \cos^2\left(\frac{\theta}{2}\right)}}\, d\theta$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)分子1-cosθ=2sin²θ/2、分母cosθ0-cosθ=2(cos²θ0/2-cos²θ/2)，两个2相消，源式多sqrt2；正确系数换元s=cosθ/2后给πsqrt(c/G)，与末值一致。

**原文：**

> $$m = \inf_{x \in I} f(x), \quad M = \sup_{x \in I} f(x).$$

**修正：**

> $$m = \inf_{x \in [a,b]} f(x), \quad M = \sup_{x \in [a,b]} f(x).$$

**理由：** [最速降线与积分第一中值定理](../../01-math-analysis-i/25-brachistochrone/25-01-p0262-0266.md)定理只给区间[a,b]，这里I未绑定，需在同一区间取函数上下界，积分夹逼才适用。

[相关正文：25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)

## 数学修正

**原文：**

> Darboux 上下颌

**修正：**

> Darboux 上下和

**理由：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)提示源图上下颌为同音错字，所用概念Darboux上下和，修正不增习题解答。

[相关正文：25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)

## 数学修正

**原文：**

> $\int_0^\infty f'(x)$

**修正：**

> $\int_1^\infty f'(x)$

**理由：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)f仅定义在[1,∞)，下限0的f′反常积分没有定义；同命题f积分下限1且原函数极限从1起算，恢复1。

**原文：**

> $$\begin{aligned}
> &(1)\; \int_0^1 \log x\, dx && (2)\; \int_{-\infty}^{+\infty} \frac{dx}{1 + x^2} \\
> &(3)\; \int_0^{+\infty} \frac{dx}{1 + x^4} && (4)\; \int_0^{+\infty} \frac{1 + x^2}{1 + x^4}\, dx \\
> &(5)\; \int_{-\infty}^0 x e^x\, dx && (6)\; \int_0^{+\infty} e^{-\sqrt{x}}\, dx \\
> &(7)\; \int_0^{+\infty} \frac{dx}{(a^2 + x^2)^{3/2}} && (8)\; \int_2^{+\infty} \frac{dx}{x^2 + x - 2} \\
> &(9)\; \int_{-\infty}^{+\infty} \frac{dx}{(x^2 + x + 1)^2} && (10)\; \int_{-1}^1 \frac{dx}{\sqrt{1 - x^2}} \\
> &(11)\; \int_{-1}^1 \frac{\arcsin x}{\sqrt{1 - x^2}}\, dx && (12)\; \int_{-1}^1 \frac{dx}{(2 - x)^2 \sqrt{1 - x^2}} \\
> &(13)\; \int_0^1 \frac{\arcsin \sqrt{x}}{x(1 - x)}\, dx && (14)\; \int_0^1 \frac{(1 - x)^n}{\sqrt{x}}\, dx,\ n \in \mathbb{N}_+ \\
> &(15)\; \int_0^1 \frac{x^n}{\sqrt{1 - x^2}}\, dx,\ n \in \mathbb{N}_+ && (16)\; \int_0^1 x^m (\log x)^n\, dx,\ n \in \mathbb{N}_+,\ m \geqslant 0 \\
> &(17)\; \int_2^{+\infty} \frac{dx}{x(\log x)^p},\ p > 1 && (18)\; \int_0^{+\infty} \frac{\log x}{x^2 + a^2}\, dx \\
> &(19)\; \int_0^{+\infty} x^n e^{-x}\, dx,\ n \in \mathbb{N}_+ && (20)\; \int_{-\infty}^{+\infty} \frac{dx}{(ax^2 + 2bx + c)^n},\ ac - b^2 > 0 \\
> &(21)\; \int_0^{+\infty} x^{2n-1} e^{-x^2}\, dx,\ n \in \mathbb{N}_+ && (22)\; \int_{-\pi}^\pi \frac{1 - r^2}{1 - 2r\cos x + r^2}\, dx,\ 0 < r < 1 \\
> &(23)\; \int_0^{+\infty} e^{-ax} \cos bx\, dx,\ a > 0 && (24)\; \int_0^{+\infty} e^{-ax} \sin bx\, dx,\ a > 0 \\
> &(25)\; \int_0^{+\infty} \frac{dx}{x(x+1)\cdots(x+n)} && (26)\; \int_0^{2\pi} \log \sin x\, dx \\
> &(27)\; \int_0^{+\infty} e^{-x^2}\, dx
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> &(1)\; \int_0^1 \log x\, dx && (2)\; \int_{-\infty}^{+\infty} \frac{dx}{1 + x^2} \\
> &(3)\; \int_0^{+\infty} \frac{dx}{1 + x^4} && (4)\; \int_0^{+\infty} \frac{1 + x^2}{1 + x^4}\, dx \\
> &(5)\; \int_{-\infty}^0 x e^x\, dx && (6)\; \int_0^{+\infty} e^{-\sqrt{x}}\, dx \\
> &(7)\; \int_0^{+\infty} \frac{dx}{(a^2 + x^2)^{3/2}} && (8)\; \int_2^{+\infty} \frac{dx}{x^2 + x - 2} \\
> &(9)\; \int_{-\infty}^{+\infty} \frac{dx}{(x^2 + x + 1)^2} && (10)\; \int_{-1}^1 \frac{dx}{\sqrt{1 - x^2}} \\
> &(11)\; \int_{-1}^1 \frac{\arcsin x}{\sqrt{1 - x^2}}\, dx && (12)\; \int_{-1}^1 \frac{dx}{(2 - x)^2 \sqrt{1 - x^2}} \\
> &(13)\; \int_0^1 \frac{\arcsin \sqrt{x}}{x(1 - x)}\, dx && (14)\; \int_0^1 \frac{(1 - x)^n}{\sqrt{x}}\, dx,\ n \in \mathbb{N}_+ \\
> &(15)\; \int_0^1 \frac{x^n}{\sqrt{1 - x^2}}\, dx,\ n \in \mathbb{N}_+ && (16)\; \int_0^1 x^m (\log x)^n\, dx,\ n \in \mathbb{N}_+,\ m \geqslant 0 \\
> &(17)\; \int_2^{+\infty} \frac{dx}{x(\log x)^p},\ p > 1 && (18)\; \int_0^{+\infty} \frac{\log x}{x^2 + a^2}\, dx \\
> &(19)\; \int_0^{+\infty} x^n e^{-x}\, dx,\ n \in \mathbb{N}_+ && (20)\; \int_{-\infty}^{+\infty} \frac{dx}{(ax^2 + 2bx + c)^n},\ ac - b^2 > 0 \\
> &(21)\; \int_0^{+\infty} x^{2n-1} e^{-x^2}\, dx,\ n \in \mathbb{N}_+ && (22)\; \int_{-\pi}^\pi \frac{1 - r^2}{1 - 2r\cos x + r^2}\, dx,\ 0 < r < 1 \\
> &(23)\; \int_0^{+\infty} e^{-ax} \cos bx\, dx,\ a > 0 && (24)\; \int_0^{+\infty} e^{-ax} \sin bx\, dx,\ a > 0 \\
> &(25)\; \int_0^{+\infty} \frac{dx}{x(x+1)\cdots(x+n)} && (26)\; \int_0^{2\pi} \log |\sin x|\, dx \\
> &(27)\; \int_0^{+\infty} e^{-x^2}\, dx
> \end{aligned}$$

**理由：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)实分析练习在π至2π上sin x<0，实log未定义。以|sin x|为正输入只留有限零点的可积对数奇点，恢复全周期反常积分实定义，不提供求值答案。

## 未决数学问题

**原文：**

> $$\begin{aligned}
> &(1)\; \int_0^1 \log x\, dx && (2)\; \int_{-\infty}^{+\infty} \frac{dx}{1 + x^2} \\
> &(3)\; \int_0^{+\infty} \frac{dx}{1 + x^4} && (4)\; \int_0^{+\infty} \frac{1 + x^2}{1 + x^4}\, dx \\
> &(5)\; \int_{-\infty}^0 x e^x\, dx && (6)\; \int_0^{+\infty} e^{-\sqrt{x}}\, dx \\
> &(7)\; \int_0^{+\infty} \frac{dx}{(a^2 + x^2)^{3/2}} && (8)\; \int_2^{+\infty} \frac{dx}{x^2 + x - 2} \\
> &(9)\; \int_{-\infty}^{+\infty} \frac{dx}{(x^2 + x + 1)^2} && (10)\; \int_{-1}^1 \frac{dx}{\sqrt{1 - x^2}} \\
> &(11)\; \int_{-1}^1 \frac{\arcsin x}{\sqrt{1 - x^2}}\, dx && (12)\; \int_{-1}^1 \frac{dx}{(2 - x)^2 \sqrt{1 - x^2}} \\
> &(13)\; \int_0^1 \frac{\arcsin \sqrt{x}}{x(1 - x)}\, dx && (14)\; \int_0^1 \frac{(1 - x)^n}{\sqrt{x}}\, dx,\ n \in \mathbb{N}_+ \\
> &(15)\; \int_0^1 \frac{x^n}{\sqrt{1 - x^2}}\, dx,\ n \in \mathbb{N}_+ && (16)\; \int_0^1 x^m (\log x)^n\, dx,\ n \in \mathbb{N}_+,\ m \geqslant 0 \\
> &(17)\; \int_2^{+\infty} \frac{dx}{x(\log x)^p},\ p > 1 && (18)\; \int_0^{+\infty} \frac{\log x}{x^2 + a^2}\, dx \\
> &(19)\; \int_0^{+\infty} x^n e^{-x}\, dx,\ n \in \mathbb{N}_+ && (20)\; \int_{-\infty}^{+\infty} \frac{dx}{(ax^2 + 2bx + c)^n},\ ac - b^2 > 0 \\
> &(21)\; \int_0^{+\infty} x^{2n-1} e^{-x^2}\, dx,\ n \in \mathbb{N}_+ && (22)\; \int_{-\pi}^\pi \frac{1 - r^2}{1 - 2r\cos x + r^2}\, dx,\ 0 < r < 1 \\
> &(23)\; \int_0^{+\infty} e^{-ax} \cos bx\, dx,\ a > 0 && (24)\; \int_0^{+\infty} e^{-ax} \sin bx\, dx,\ a > 0 \\
> &(25)\; \int_0^{+\infty} \frac{dx}{x(x+1)\cdots(x+n)} && (26)\; \int_0^{2\pi} \log \sin x\, dx \\
> &(27)\; \int_0^{+\infty} e^{-x^2}\, dx
> \end{aligned}$$

**问题：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)习题D7,D18未给a非零；a=0导致D7发散、D18在0附近发散，可能题目意图包含判敛，无法假定a>0。D20未给n整数/正数，ac-b²>0允许a,c<0，非整数n时负底幂不实。保留条件疑点，不额外替用户作练习答案。

[相关正文：25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)

## 数学修正

**原文：**

> $$f_A(x) = \sum_{n\geqslant 0^+} a_n e^{-nx}.$$

**修正：**

> $$f_A(x) = \sum_{n\geqslant 0} a_n e^{-nx}.$$

**理由：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)源图离散指标n≥0后误带极限用的+，应包括n=0，与同页IA、指示序列及下一页E15恒等式一致。a0若为1则漏首项会令恒等式错误。

[相关正文：25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)

## 数学修正

**原文：**

> 令 $F$ 为 $[0,1]$ 上的全体实值函数的所构成的线性空间

**修正：**

> 令 $F$ 为 $(0,+\infty)$ 上的全体实值函数的所构成的线性空间

**理由：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)源图目标F域写[0,1]，下一页Lψ的变量为x>0且在0可能发散，譬如an=1、ψ=1。必须将目标函数域设正半轴，ψ本身的E仍是[0,1]上的函数，区分输入函数与输出函数域。

[相关正文：25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)

## 数学修正

**原文：**

> 那么对任意的 $x\in[0,1]$，证明

**修正：**

> 那么对任意的 $x>0$，证明

**理由：** [25.1：作业：可写成两个完全平方数的和的整数的密度](../../01-math-analysis-i/25-brachistochrone/25-02-p0267-0274.md)Lψ只定义于正半轴，原序比较的输出变量包含0（可能发散）；输入ψ1≤ψ2仍在[0,1]，输出比较应x>0，因各权重非负。
