# 勘误：24 常微分方程、Kepler 定律与变分法

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 未决数学问题

**原文：**

> $$\begin{aligned} \left| T\left(x(t)\right) - T\left(y(t)\right) \right| &\leqslant \int_{t_0}^{t} |f(x(\tau), \tau) - f(y(\tau), \tau)| d\tau \\ &\leqslant \int_{t_0}^{t} C|x(\tau) - y(\tau)| d\tau \leqslant C \sup_{x \in [t_0 - \delta, t_0 + \delta]} \int_{t_0}^{t} d\tau \\ &\leqslant C\delta\, d_\infty\left(x(t), y(t)\right). \end{aligned}$$

**问题：** 影印页在此处打印为 $\leqslant C \sup_{x \in [t_0 - \delta, t_0 + \delta]} \int_{t_0}^{t} d\tau$，漏写了被积分/求上确界的项 $|x(\tau) - y(\tau)|$，且上确界下标变量写作 $x$（应为积分变量 $\tau$）。因纠正方式有多种表达（例如补全 $|x(\tau)-y(\tau)|$ 或直接简化为范数 $d_\infty(x, y)$），改动缺乏唯一确定性，故保持 Markdown 对印本的忠实记录。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> $$\begin{cases} x''(t) = f(x'(t), x(t), t), \\ \big(x(t_0), x'(t_0)\big) = (x_0, t_0) \end{cases}$$

**修正：**

> $$\begin{cases} x''(t) = f(x'(t), x(t), t), \\ \big(x(t_0), x'(t_0)\big) = (x_0, v_0) \end{cases}$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)二阶初始速度误记t0，与随后的X初值列向量(x0,v0)不一致；第二坐标必须v0。

**原文：**

> $$\begin{cases} X'(t) = f(X(t), t), \\ X(t_0) = \begin{pmatrix} x_0 \\ v_0 \end{pmatrix}. \end{cases}$$

**修正：**

> $$\begin{cases} X'(t) = F(X(t), t), \\ X(t_0) = \begin{pmatrix} x_0 \\ v_0 \end{pmatrix}, \end{cases} \qquad F\!\left(\begin{pmatrix}u\\v\end{pmatrix},t\right)=\begin{pmatrix}v\\f(v,u,t)\end{pmatrix}.$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)二阶改一阶仍写标量f(X,t)，原f输入(x′,x,t)，X′为二维向量。按X=(x,x′)逐坐标微分唯一得到F((u,v),t)=(v,f(v,u,t))，补必要向量场定义修复现有转换，不给练习解答。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> 反比于质量的平方

**修正：**

> 反比于距离的平方

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)万有引力文字误印质量，紧接Gm1m2/r²且r为距离，分母唯一对应距离平方。

**原文：**

> 假设行星之间的并没有相互引力

**修正：**

> 假设行星之间并没有相互引力

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)原句多的字，删除孤立字保持理想假设。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> 。所以，如果初始时刻

**修正：**

> 所以，如果初始时刻

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)显示公式已有句点，段首再次游离句点；删除不改结论。

**原文：**

> 根据这些推到

**修正：**

> 根据这些推导

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)数学推导误写推到，校正术语。

**原文：**

> 我们不在追究

**修正：**

> 我们不再追究

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)在代再，指不继续追究原因，恢复同音误字。

**原文：**

> 用复数的形势表达

**修正：**

> 用复数的形式表达

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)形式误写形势，x=r exp(iθ)是表达形式。

**原文：**

> $$x''(t) = -\left[r''(t) - r(t)|\theta'(t)|^2 + i\left(2r'(t)\theta'(t) + r(t)\theta''(t)\right)\right]e^{i\theta(t)}.$$

**修正：**

> $$x''(t) = \left[r''(t) - r(t)|\theta'(t)|^2 + i\left(2r'(t)\theta'(t) + r(t)\theta''(t)\right)\right]e^{i\theta(t)}.$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)极坐标二次求导前多负号；独立求导得x″=(r″-rθ′²+i(2r′θ′+rθ″))exp(iθ)。下方正确径向方程也要求无此前负号。

**原文：**

> 特别地，我们 $\theta$ 局部上是

**修正：**

> 特别地，$\theta$ 局部上是

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源句多我们，θ局部严格递增由θ′=c/r²>0，删误入主语。

**原文：**

> $$r'(t) = -\frac{s'(t)}{s^2(t)} = -\frac{c}{s'(t)}\theta'(t) = -c\frac{ds}{d\theta}(t).$$

**修正：**

> $$r'(t) = -\frac{s'(t)}{s^2(t)} = -\frac{1}{s(t)^2}\frac{ds}{d\theta}(\theta(t))\theta'(t) = -c\frac{ds}{d\theta}(t).$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)中间式-c/s′(t)θ′错误且s′=0时无定义。由s_t′=s_θ′θ_t′及r′=-s_t′/s²得修式，再代θ′=cs²恰为-c ds/dθ，与两侧一致。

**原文：**

> $$r''(t) = \left(-c\frac{ds}{d\theta}(\theta(t))\right)' = -c^2 s(t)^2 \frac{d^2 s}{d^2\theta}(\theta(t)) \quad \Leftrightarrow \quad r''(t) = -c^2 s^2 \frac{d^2 s}{d^2\theta}.$$

**修正：**

> $$r''(t) = \left(-c\frac{ds}{d\theta}(\theta(t))\right)' = -c^2 s(t)^2 \frac{d^2 s}{d\theta^2}(\theta(t)) \quad \Leftrightarrow \quad r''(t) = -c^2 s^2 \frac{d^2 s}{d\theta^2}.$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)二阶θ导数分母d²θ错误，应dθ²，两处统一，与下页dot表示θ导数一致。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> $$s(\theta) = A\cos\theta + B\sin\theta + \frac{GM}{c^2},$$

**修正：**

> $$s(\theta) = B\cos\theta + A\sin\theta + \frac{GM}{c^2},$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)初始Acos+Bsin在s′(0)=0时强制B=0，后文却将B用作非负cos系数及离心率。交换初次任意系数名字后s′(0)=A=0，s″(0)=-B≤0，所有后文B公式统一；修复源常数标号笔误。

**原文：**

> 带入 $s(\theta)$ 的待定表达式

**修正：**

> 代入 $s(\theta)$ 的待定表达式

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)数学操作代入误写带入，校正术语。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> 这就是面积的变化率

**修正：**

> 它的一半就是面积的变化率

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源文把r²θ′=c称面积变化率，下一句小三角形面积明确为r²θ′Δt/2；独立极坐标面积元给dA/dt=c/2，故应其一半。

**原文：**

> 周期 $T = \dfrac{\pi ab}{c}$（因为 $c$ 是面积的变化率）

**修正：**

> 周期 $T = \dfrac{2\pi ab}{c}$（因为 $c/2$ 是面积的变化率）

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)扫一圈面积πab、面积速度c/2，故T=2πab/c。利用b²=aℓ、c²=GMℓ得T²=4π²a³/(GM)，与页内第三定律一致；原T少2。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> 他将讲看到

**修正：**

> 他将看到

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)原句讲字重复误入，删后恢复观测句。

**原文：**

> $$\frac{\frac{1}{2}AB}{AV} = \sin\!\left(\frac{1}{2}\gamma\right) \approx \frac{1}{2}\gamma, \qquad \frac{\frac{1}{2}AB}{AS} = \sin\!\left(\frac{1}{2}\alpha\right) \approx \alpha.$$

**修正：**

> $$\frac{\frac{1}{2}AB}{AV} = \sin\!\left(\frac{1}{2}\gamma\right) \approx \frac{1}{2}\gamma, \qquad \frac{\frac{1}{2}AB}{AS} = \sin\!\left(\frac{1}{2}\alpha\right) \approx \frac{1}{2}\alpha.$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源图小角公式少1/2；sin u~u取u=α/2，正确≈α/2，与同页最末重复关系一致。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> $I = [a, b] \subset$ 是有界区间

**修正：**

> $I = [a, b] \subset \mathbb{R}$ 是有界区间

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源图子集关系右集合缺失，区间定义域为实数，补R使关系完整，且下文γ定义于实区间。

**原文：**

> $$|\gamma'(t)| = \sqrt{\sum_{j=1}^n |\gamma_i'(t)|^2}.$$

**修正：**

> $$|\gamma'(t)| = \sqrt{\sum_{j=1}^n |\gamma_j'(t)|^2}.$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源式求和指标j而被加数为未绑定i，应γj′；由欧氏范数唯一确定。

**原文：**

> $$\ell(\gamma \circ \varphi) = \int_{a'}^{b'} |\varphi(t) \cdot \gamma'(\varphi(t))| dt = \int_{a'}^{b'} |\gamma'(\varphi(t))| \varphi'(t) dt \overset{\tau = \gamma(t)}{=} \int_a^b |\gamma'(\tau)| d\tau = \ell(\gamma).$$

**修正：**

> $$\ell(\gamma \circ \varphi) = \int_{a'}^{b'} |\varphi'(t) \cdot \gamma'(\varphi(t))| dt = \int_{a'}^{b'} |\gamma'(\varphi(t))| \varphi'(t) dt \overset{\tau = \varphi(t)}{=} \int_a^b |\gamma'(\tau)| d\tau = \ell(\gamma).$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源图复合导数漏φ撇号，链式法则(γ∘φ)′=(γ′∘φ)φ′；随后換元应τ=φ(t)，γ(t)为Rn向量不能作为标量积分变量。两处修后φ递增使|φ′|=φ′并可换元得到同一长度。

**原文：**

> 如果我们仅仅和要求

**修正：**

> 如果我们仅仅要求

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源句多和字，删除不改连续曲线说明。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> 其中 $x \in \left[0, \dfrac{\pi}{2}\right]$

**修正：**

> 其中 $\theta \in \left[0, \dfrac{\pi}{2}\right]$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源图参数x=Rsinθ的角范围误标x；x的范围[0,R]，θ才在[0,π/2]。

**原文：**

> $$\ell = \int_0^{\frac{\pi}{2}} \left|(R\cos(\theta), -R\sin(\theta))\right| d\theta = \frac{1}{2}\pi.$$

**修正：**

> $$\ell = \int_0^{\frac{\pi}{2}} \left|(R\cos(\theta), -R\sin(\theta))\right| d\theta = \frac{1}{2}\pi R.$$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)原图半径R圆弧速度范数恒R，积分0至π/2为πR/2；结果少R。

**原文：**

> 周长公式为 $4 \times \dfrac{1}{2}\pi = 2\pi$

**修正：**

> 周长公式为 $4 \times \dfrac{1}{2}\pi R = 2\pi R$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源圆半径任意R，两处周长结果遗漏R，应四倍πR/2=2πR，与前一弧长一致。

[相关正文：24：常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)

## 数学修正

**原文：**

> $$
> \ell(\gamma_s) = \int_a^b \sqrt{\left(\dot{\gamma}_1(s,t)\right)^2 + \left(\dot{\gamma}_2(s,t)\right)^2 + \cdots + \left(\dot{\gamma}_n(s,t)\right)^2}\, dt.
> $$

**修正：**

> $$
> \ell(\gamma_s) = \int_0^1 \sqrt{\left(\dot{\gamma}_1(t,s)\right)^2 + \left(\dot{\gamma}_2(t,s)\right)^2 + \cdots + \left(\dot{\gamma}_n(t,s)\right)^2}\, dt.
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)曲线族域为[0,1]×[-ε,ε]、两端0和1固定，所有长度及变分积分上下限应0、1。源图保留前页旧a,b未定义；此式按已定义域修。首长度式亦把γ分量参数(s,t)改为定义所用(t,s)。

**原文：**

> $$
> \left.\frac{d\ell(\gamma_s)}{ds}\right|_{s=0} = \int_a^b \frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|} \cdot \frac{d}{ds}(\dot{\gamma}(t,0))\, dt
> $$

**修正：**

> $$
> \left.\frac{d\ell(\gamma_s)}{ds}\right|_{s=0} = \int_0^1 \frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|} \cdot \frac{d}{ds}(\dot{\gamma}(t,0))\, dt
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)曲线族域为[0,1]×[-ε,ε]、两端0和1固定，所有长度及变分积分上下限应0、1。源图保留前页旧a,b未定义；此式按已定义域修。首长度式亦把γ分量参数(s,t)改为定义所用(t,s)。

**原文：**

> $$
> = \int_a^b \frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|} \cdot \frac{d}{dt}\left(\frac{d}{ds}(\gamma(t,0))\right) dt
> $$

**修正：**

> $$
> = \int_0^1 \frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|} \cdot \frac{d}{dt}\left(\frac{d}{ds}(\gamma(t,0))\right) dt
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)曲线族域为[0,1]×[-ε,ε]、两端0和1固定，所有长度及变分积分上下限应0、1。源图保留前页旧a,b未定义；此式按已定义域修。首长度式亦把γ分量参数(s,t)改为定义所用(t,s)。

**原文：**

> $$
> = -\int_a^b \frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right) \cdot \frac{d}{ds}(\gamma(t,0))\, dt.
> $$

**修正：**

> $$
> = -\int_0^1 \frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right) \cdot \frac{d}{ds}(\gamma(t,0))\, dt.
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)曲线族域为[0,1]×[-ε,ε]、两端0和1固定，所有长度及变分积分上下限应0、1。源图保留前页旧a,b未定义；此式按已定义域修。首长度式亦把γ分量参数(s,t)改为定义所用(t,s)。

**原文：**

> $$
> \int_a^b \frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right) \cdot X(t)\, dt = 0.
> $$

**修正：**

> $$
> \int_0^1 \frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right) \cdot X(t)\, dt = 0.
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)曲线族域为[0,1]×[-ε,ε]、两端0和1固定，所有长度及变分积分上下限应0、1。源图保留前页旧a,b未定义；此式按已定义域修。首长度式亦把γ分量参数(s,t)改为定义所用(t,s)。

**原文：**

> $$
> \int_a^b \left|\frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right)\right|^2 dt = 0.
> $$

**修正：**

> $$
> \int_0^1 \left|\frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right)\right|^2 dt = 0.
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)曲线族域为[0,1]×[-ε,ε]、两端0和1固定，所有长度及变分积分上下限应0、1。源图保留前页旧a,b未定义；此式按已定义域修。首长度式亦把γ分量参数(s,t)改为定义所用(t,s)。

**原文：**

> 在每个点 $\dot{\gamma}(t_0, 0)$ 处

**修正：**

> 在每个点 $\gamma(t_0, 0)$ 处

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源图变分向量的基点错写速度dotγ，实际s↦γ(t0,s)在s=0的点为γ(t0,0)。

**原文：**

> $$
> [0,1] \times [-\varepsilon, \varepsilon] \to \mathbb{R}^n, \quad (t, x) \to \gamma_0(t) + sX(t)
> $$

**修正：**

> $$
> [0,1] \times [-\varepsilon, \varepsilon] \to \mathbb{R}^n, \quad (t, s) \to \gamma_0(t) + sX(t)
> $$

**理由：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源图映射参数写(t,x)却右侧使用未绑定s，曲线族第二变量为s，恢复绑定。

## 未决数学问题

**原文：**

> 特别地，我们可以取 $X = \frac{d}{dt}\left(\frac{\dot{\gamma}(t,0)}{|\dot{\gamma}(t,0)|}\right)$

**问题：** [常微分方程、Kepler 定律与变分法](../../01-math-analysis-i/24-ode-variation.md)源证明缺|dotγ|非零（否则单位切向量无定义）及足够二阶/三阶正则性；允许扰动须X(0)=X(1)=0，原任意X与选X=(单位切向量)′一般违反固定端点。可用端点为0的正权χ=t(1-t)乘该导数并采用足够光滑条件，或变分基本引理重写。此为结构条件问题，不盲写多个局部片段声称证明已完整。
