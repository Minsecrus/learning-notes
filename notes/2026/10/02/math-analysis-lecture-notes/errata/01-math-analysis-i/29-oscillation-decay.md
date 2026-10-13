# 勘误：29 振荡与衰减、期末考试与寒假作业

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> $f^2+f=0$

**修正：**

> $f^2-f=0$

**理由：** [振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)原图确印f²+f=0，所指函数是1_Q，值域{0,1}。代入f=1时原式左边2，改减号后在0和1都等于0，因此这个符号由同句指定的特征函数唯一确定。

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> 我们先假设假设 $f\in C^k([a,b])$

**修正：**

> 我们先假设 $f\in C^k([a,b])$

**理由：** [振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)原图确连续出现“假设假设”，删除一次重复词不改变数学假设。

**原文：**

> $$
> |A_n|\leqslant\frac1n\left(\int_a^b|f'|+2\right).
> $$

**修正：**

> $$
> |A_n|\leqslant\frac1n\left(\int_a^b|f'|+|f(a)|+|f(b)|\right).
> $$

**理由：** [振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)原图无|f|<=1假设，上一行分部积分给边界项[f(a)cos(na)-f(b)cos(nb)]/n。利用|cos|<=1只能界成(|f(a)|+|f(b)|)/n。取f恒为10、a=0、b=pi、n=1，积分20而原界2，直接反例验证必须恢复端点系数。

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> Weierstrasss-Stone

**修正：**

> Weierstrass-Stone

**理由：** 源图为Weierstrass-Stone，转录多s。

**原文：**

> $$\left| \int_a^b P(x) \sin(nx) dx \right| \leqslant \frac{1}{n} \left( \int_a^b |P'| + 2 \right).$$

**修正：**

> $$\left| \int_a^b P(x) \sin(nx) dx \right| \leqslant \frac{1}{n} \left( \int_a^b |P'| + |P(a)| + |P(b)| \right).$$

**理由：** 承接307边界估计，多项式P端点无≤1条件，须用|P(a)|+|P(b)|；源图沿用错误2。

**原文：**

> 任意选取 $N$，使得 $N > \dfrac{2\left( \int_a^b |P'| + 2 \right)}{\varepsilon}$，从而当 $n \geqslant N$ 时，我们有

**修正：**

> 任意选取 $N$，使得 $N > \dfrac{2\left( \int_a^b |P'| + |P(a)| + |P(b)| \right)}{\varepsilon}$，从而当 $n \geqslant N$ 时，我们有

**理由：** 承接307边界估计，多项式P端点无≤1条件，须用|P(a)|+|P(b)|；源图沿用错误2。

**原文：**

> $$\left| \int_a^b f(x) \sin(nx) dx \right| \leqslant \left| \int_a^b P(x) \sin(nx) \right| + \int_a^b |f(x) - P(x)| |\sin(nx)| dx$$

**修正：**

> $$\left| \int_a^b f(x) \sin(nx) dx \right| \leqslant \left| \int_a^b P(x) \sin(nx) dx \right| + \int_a^b |f(x) - P(x)| |\sin(nx)| dx$$

**理由：** 源图积分漏dx；所估计积分与上一显示式相同，补齐变量。

**原文：**

> $$< \frac{\varepsilon}{2} + \frac{1}{2} \frac{\varepsilon}{b - a} \int_a^b = \varepsilon.$$

**修正：**

> $$< \frac{\varepsilon}{2} + \frac{1}{2} \frac{\varepsilon}{b - a} \int_a^b 1\,dx = \varepsilon.$$

**理由：** 源图只有上下限的空积分；由|sin(nx)|≤1，应为∫a^b1 dx=b−a才能得到ε。

**原文：**

> $$\int_a^b \mathbf{1}_{[c,d]} f = \int_c^d \sin(nx) dx = O\!\left(\frac{1}{n}\right).$$

**修正：**

> $$\int_a^b \mathbf{1}_{[c,d]}(x)\sin(nx)\,dx = \int_c^d \sin(nx) dx = O\!\left(\frac{1}{n}\right).$$

**理由：** 正在证明振幅f=1[c,d]情形，源图∫1[c,d] f将成为区间长度；正确被积项应1[c,d] sin(nx)以获得衰减。

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> $$\left|\int_a^b f(x)\sin(nx)dx\right| \leqslant \left|\int_a^b \varphi(x)\sin(nx)\right| + \int_a^b |f(x) - \varphi(x)||\sin(nx)|dx$$

**修正：**

> $$\left|\int_a^b f(x)\sin(nx)dx\right| \leqslant \left|\int_a^b \varphi(x)\sin(nx)\,dx\right| + \int_a^b |f(x) - \varphi(x)||\sin(nx)|dx$$

**理由：** 源图漏该积分dx；阶梯函数估计积分变量为x，补齐微分。

**原文：**

> $$\leqslant \underbrace{\left|\int_a^b \varphi(x)\sin(nx)\right|}_{\text{阶梯函数的极限} = 0} + \underbrace{\int_a^b |f(x) - \varphi(x)|dx}_{<\varepsilon}.$$

**修正：**

> $$\leqslant \underbrace{\left|\int_a^b \varphi(x)\sin(nx)\,dx\right|}_{\text{阶梯函数的极限} = 0} + \underbrace{\int_a^b |f(x) - \varphi(x)|dx}_{<\varepsilon}.$$

**理由：** 源图漏该积分dx；阶梯函数估计积分变量为x，补齐微分。

**原文：**

> 那么，对任意的 $N \in \mathbb{Z}_{>0}$，存在常数 $N$，使得

**修正：**

> 那么，对任意的 $N \in \mathbb{Z}_{>0}$，存在常数 $C_N>0$，使得当 $\lambda\geqslant1$ 时

**理由：** 源图误重复指数N当估计常数，应为公式CN；若负λ且N奇数则右侧为负，须明确正频率λ≥1的衰减区间。

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> 假设对任意的 $x \in I$，$|\phi'(x)| \geqslant 1$。如果

**修正：**

> 假设对任意的 $x \in I=[a,b]$，$|\phi'(x)| \geqslant 1$。如果

**理由：** 本页积分区间已换为[a,b]，源图命题171沿用上一页I却未定义为[a,b]；补齐定义使非驻相条件覆盖积分区间。

**原文：**

> $$I = I_1 \cup I_2 \cup I_3 = [a, c-\delta] \cup [c-\delta, c+\delta] \cup [c+\delta, b].$$

**修正：**

> $$I_1=I\cap(-\infty,c-\delta],\quad I_2=I\cap[c-\delta,c+\delta],\quad I_3=I\cap[c+\delta,\infty),\quad I=I_1\cup I_2\cup I_3.$$

**理由：** 源图c可在端点附近甚至端点，c±δ可超出[a,b]，原分拆会含定义域外区间；各区间与I相交，空区间积分取0。

## 未决数学问题

**原文：**

> $$|J(\lambda)| \leqslant \frac{2\sqrt{3}}{(\lambda)^{\frac{1}{2}}}.$$

**问题：** [振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)由所给界2δ+6/(δλ)优化得到4√3/√λ，无法推出本页印刷2√3。仅该证明不足以确定最优常数，须另核验172与173、174的常数，不能自动当成已证明。

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> $$\left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| \leqslant \int_{I_2} 1dx = 2\delta.$$
>
> 所以，
>
> $$|J(\lambda)| \leqslant \left|\int_{I_1} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_3} e^{i\lambda\phi(x)}dx\right|$$
>
> $$= 2\delta + \frac{6}{\delta\lambda}.$$

**修正：**

> $$\left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| \leqslant \int_{I_2} 1dx \leqslant 2\delta.$$
>
> 所以，
>
> $$|J(\lambda)| \leqslant \left|\int_{I_1} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_3} e^{i\lambda\phi(x)}dx\right|$$
>
> $$\leqslant 2\delta + \frac{6}{\delta\lambda}.$$

**理由：** 各子积分只被上界控制，不等于上界之和；且截取至I后中间段长度≤2δ。源图两处等号都应为≤。

**原文：**

> $$\left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| \leqslant \int_{I_2} 1dx = 2\delta.$$
>
> 所以，
>
> $$|J(\lambda)| \leqslant \left|\int_{I_1} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_3} e^{i\lambda\phi(x)}dx\right|$$
>
> $$= \frac{2^k}{(\delta\lambda)^{\frac{1}{k-1}}} + 2\delta.$$

**修正：**

> $$\left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| \leqslant \int_{I_2} 1dx \leqslant 2\delta.$$
>
> 所以，
>
> $$|J(\lambda)| \leqslant \left|\int_{I_1} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_2} e^{i\lambda\phi(x)}dx\right| + \left|\int_{I_3} e^{i\lambda\phi(x)}dx\right|$$
>
> $$\leqslant \frac{2^k}{(\delta\lambda)^{\frac{1}{k-1}}} + 2\delta.$$

**理由：** 各子积分只被上界控制，不等于上界之和；且截取至I后中间段长度≤2δ。源图两处等号都应为≤。

**原文：**

> 证明：我们用归纳法。当 $k = 2$ 时，命题已经证明。现在假设 $k \geqslant 3$ 并且结论对 $k-1$ 成立，我们仿照上面的证明，不妨假设 $\phi^{(k)}(x) \geqslant 1$，从而 $\phi^{(k-1)}(x)$ 是单调递增的函数。假设存在 $c \in [a,b]$ 使得 $\phi'(c) = 0$。此时，我们将 $[a,b]$ 分成三个区间

**修正：**

> 证明：我们用归纳法。当 $k = 2$ 时，命题已经证明。现在假设 $k \geqslant 3$ 并且结论对 $k-1$ 成立，我们仿照上面的证明，不妨假设 $\phi^{(k)}(x) \geqslant 1$，从而 $\phi^{(k-1)}(x)$ 是单调递增的函数。假设存在 $c \in [a,b]$ 使得 $\phi^{(k-1)}(c) = 0$。此时，我们将 $[a,b]$ 分成三个区间

**理由：** 高阶归纳从φ^(k)≥1推出φ^(k−1)单调，选取的零点应是φ^(k−1)的零点；源图误写φ′。

**原文：**

> 所以在 $I_1$ 和 $I_3$ 上，我们有 $|\phi'(x)| \geqslant \delta$。

**修正：**

> 所以在 $I_1$ 和 $I_3$ 上，我们有 $|\phi^{(k-1)}(x)| \geqslant \delta$。

**理由：** 由φ^(k)≥1及φ^(k−1)(c)=0得远区φ^(k−1)≥δ，才能用k−1阶归纳；源图误用φ′。

**原文：**

> $$I = I_1 \cup I_2 \cup I_3 = [a, c-\delta] \cup [c-\delta, c+\delta] \cup [c+\delta, b].$$

**修正：**

> $$I_1=I\cap(-\infty,c-\delta],\quad I_2=I\cap[c-\delta,c+\delta],\quad I_3=I\cap[c+\delta,\infty),\quad I=I_1\cup I_2\cup I_3.$$

**理由：** 源图允许驻点c靠近端点，分拆必须与I相交，不能积分到[a,b]之外；空段取零。

## 未决数学问题

**原文：**

> 当 $\delta = \sqrt{\dfrac{3}{\lambda}}$，上面的表达式取得最小值，这恰好是要证明的结论。

**问题：** 代入源图2δ+6/(δλ)得4√3/√λ，不是[振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)结论2√3/√λ。只能证明较大常数，源图跨步不成立；需统一复核整节常数而非直接替换一句。

**原文：**

> 当 $\delta = 2^{\frac{(k-1)^2}{k}} \lambda^{-\frac{1}{k}}$ 时，上面的表达式取得最小值，这就完成了证明。

**问题：** 对F(δ)=2^k(δλ)^(-1/(k−1))+2δ求导，最小点为δ=[2^(k−1)/(k−1)]^((k−1)/k)λ^(-1/k)，源图缺(k−1)因子且二次指数错。最小值2kδ仍大于印刷2^k λ^(-1/k)，当前归纳不能完成此结论；需另给更强证明或统一常数。

[相关正文：振荡与衰减、期末考试与寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312.md)

## 数学修正

**原文：**

> $$J_\lambda(x) = \int_a^x e^{i\lambda\phi(t)} dt.$$

**修正：**

> $$J_\lambda(x) = \int_{-M}^x e^{i\lambda\phi(t)} dt.$$

**理由：** 本命题只保证相函数在[-M,M]上二阶导数下界，a是振幅函数而不是已定义下端点；原图沿用a。取−M使全部原函数子区间都受估计。

**原文：**

> $$I(\lambda) \leqslant \frac{2\sqrt{3}}{\lambda^{\frac{1}{2}}} \int_{\mathbb{R}} |a(x)'| dx.$$

**修正：**

> $$|I(\lambda)| \leqslant \frac{2\sqrt{3}}{\lambda^{\frac{1}{2}}} \int_{\mathbb{R}} |a(x)'| dx.$$

**理由：** 振荡积分一般为复数，不能比较大小；分部积分三角估计控制的是模，源图漏绝对值。

## 未决数学问题

**原文：**

> $C = 2\sqrt{3} \displaystyle\int_{\mathbb{R}} |a'(x)| dx$

**问题：** 常数沿用172的2√3，但310–311给出的证明只达4√3。振幅估计结构正确，具体常数需跟随172单独核验，当前不确定。

[相关正文：29.1–29.2：建议阅读与数学分析一期末考试](../../01-math-analysis-i/29-oscillation-decay/29-03-p0313-0319.md)

## 数学修正

**原文：**

> C10）（3 分）证明

**修正：**

> C10）（3 分）证明，对于 $x\in(0,\pi]$，

**理由：** 源图余弦和恒等式在0处右侧为0/0，需限制x不为0；此题后续积分可在端点按连续延拓理解。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> 证明 Hölder 不等式并确定取等号的条件

**修正：**

> 证明 Young 不等式并确定取等号的条件

**理由：** 该显示式ab≤a^p/p+b^q/q是题目A本身的Young不等式，Hölder是范数/积分乘积估计；源图误称Hölder。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> 证明，上述反常积分收敛并确定它们的比值。

**修正：**

> 证明，上述反常积分收敛；当 $f$ 不恒为 $0$ 时，确定它们的比值。

**理由：** 原图量词任意f∈E包含零函数，两积分均0导致比值未定义；补充非零时求比值，零函数仍需证明收敛。

**原文：**

> 如果 $\displaystyle\int_0^{2\pi} f(x)dx = 0$，那么

**修正：**

> 如果 $f(0)=f(2\pi)$ 且 $\displaystyle\int_0^{2\pi} f(x)dx = 0$，那么

**理由：** 源图周期版Wirtinger漏端点相等条件。反例f(x)=x−π有零平均但∫f²=2π³/3>2π=∫f′²；补周期端点条件恢复周期版本及sin、cos等号情形。

**原文：**

> $$A = \int_0^{2\pi} x'(t)y(t)dt.$$

**修正：**

> $$A = \left|\int_0^{2\pi} x'(t)y(t)dt\right|.$$

**理由：** 未规定闭曲线绕行方向，源图积分为有向面积可负，几何面积应取绝对值；否则相反方向的圆不满足所陈述等号条件。

**原文：**

> 存在正整数 $N$ 和实数 $c_1, c_2, \cdots, c_N$，使得

**修正：**

> 存在正整数 $N$ 和实数 $c_0, c_1, c_2, \cdots, c_N$，使得

**理由：** 源图逼近和漏常数P0；所有Pk(k≥1)与常数正交，不能一致逼近φ=1，需要包含c0。

**原文：**

> $$\left\|\varphi(x) - \sum_{k=1}^N c_k P_k(x)\right\|_\infty < \varepsilon.$$

**修正：**

> $$\left\|\varphi(x) - \sum_{k=0}^N c_k P_k(x)\right\|_\infty < \varepsilon.$$

**理由：** 源图从1求和缺P0=1，所有n≥1的Legendre多项式积分为0，故不可能一致逼近非零常数；下限应0。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> $$
> S_n([a,b]) = \left| \{ x_k \mid k \leqslant n,\, x_k \in [a,b] \} \right|.
> $$

**修正：**

> $$
> S_n([a,b]) = \left| \{ k \mid 1\leqslant k \leqslant n,\, x_k \in [a,b] \} \right|.
> $$

**理由：** 统计前n个数的命中次数必须计指标，源图值集合会将重复项去重，例如xk恒为1/2则原集合基数始终1而非n。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> $$
> \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} e^{2\pi p x_k} = 0.
> $$

**修正：**

> $$
> \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} e^{2\pi i p x_k} = 0.
> $$

**理由：** Weyl判据为振荡的复指数，源图漏虚数i；原实指数对xk∈[0,1]恒≥1，平均不可能趋0。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> F7) 假设 $P(x) = x^n + c_{n-1}x^{n-1} + \cdots + c_1 x + c_0$ 是一个 $n$ 次的首一复系数多项式，假设 $P(0) \neq 0$，证明，存在 $\varepsilon_0 > 0$，使得对任意的 $\varepsilon \in (0, \varepsilon_0)$，函数 $f_\varepsilon(x) = P(\varepsilon e^{\pi ix}) \in E$ 并计算 $d(f_\varepsilon)$。

**修正：**

> F7) 假设 $P(x) = x^n + c_{n-1}x^{n-1} + \cdots + c_1 x + c_0$ 是一个 $n$ 次的首一复系数多项式，假设 $P(0) \neq 0$，证明，存在 $\varepsilon_0 > 0$，使得对任意的 $\varepsilon \in (0, \varepsilon_0)$，函数 $f_\varepsilon(x) = P(\varepsilon e^{ix}) \in E$ 并计算 $d(f_\varepsilon)$。

**理由：** E要求2π周期，源图e^(πix)周期为2，通常并无2π周期，不能属于E；改为e^(ix)使x∈[0,2π]绕一整圈，衔接F1及环绕数计算。

**原文：**

> F8) 假设 $P(x) = x^n + c_{n-1}x^{n-1} + \cdots + c_1 x + c_0$ 是一个 $n$ 次的首一复系数多项式，假设 $P(0) \neq 0$，证明，存在 $R_0 > 0$，使得对任意的 $R \in (R_0, \infty)$，函数 $f_R(x) = P(Re^{\pi ix}) \in E$ 并计算 $d(f_R)$。

**修正：**

> F8) 假设 $P(x) = x^n + c_{n-1}x^{n-1} + \cdots + c_1 x + c_0$ 是一个 $n$ 次的首一复系数多项式，假设 $P(0) \neq 0$，证明，存在 $R_0 > 0$，使得对任意的 $R \in (R_0, \infty)$，函数 $f_R(x) = P(Re^{ix}) \in E$ 并计算 $d(f_R)$。

**理由：** E要求2π周期，源图e^(πix)周期为2，通常并无2π周期，不能属于E；改为e^(ix)使x∈[0,2π]绕一整圈，衔接F1及环绕数计算。

**原文：**

> 对任意 $n$ 次的复系数多项式 $P(x)$，它至少有一个根

**修正：**

> 对任意 $n\geqslant1$ 次的复系数多项式 $P(x)$，它至少有一个根

**理由：** 代数基本定理只对非常数多项式成立；源图未排除n=0，非零常数无根，补次数n≥1。

**原文：**

> 对于 $n \geqslant 0$ 且 $0 \leqslant k \leqslant 3^n$，我们有

**修正：**

> 对于 $n \geqslant 0$ 且整数 $0 \leqslant k < 3^n$，我们有

**理由：** 后两定义点k/3^n+1/3^(n+1)、+2/3^(n+1)要求≤1，源图k=3^n超出定义域。限制子区间指标k<3^n并单独定义右端点。

**原文：**

> 并且 $f_{n+1}$ 在形如

**修正：**

> 另令 $f_{n+1}(1)=f_n(1)$，并且 $f_{n+1}$ 在形如

**理由：** 限制k<3^n以修正越界后，需单独保持右端点值，此为源图第一条原本合法的k=3^n情形，保留原构造。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> 对于 $x \in \mathbb{R}$，我们定义 $x^z := e^{z \log x}$

**修正：**

> 对于 $x > 0$，我们定义 $x^z := e^{z \log x}$

**理由：** 该定义用实对数log x，负实数及0无定义；源图误写所有实数，后续Euler求和实际仅在正半轴。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> 1-2-7) 证明，存在常数 $B_2$

**修正：**

> I-2-7) 证明，存在常数 $B_3$

**理由：** 源图题号错以数字1代I，且结论估计常数为B3；B2已用于上一题，恢复本题自己的常数记号B3。

**原文：**

> 1-2-4)

**修正：**

> I-2-4)

**理由：** 这组题属于题目I第二部分，源图漏写字母I为数字1；统一到前文I-2-1、I-2-2的编号。

**原文：**

> 1-2-5)

**修正：**

> I-2-5)

**理由：** 这组题属于题目I第二部分，源图漏写字母I为数字1；统一到前文I-2-1、I-2-2的编号。

**原文：**

> 1-2-6)

**修正：**

> I-2-6)

**理由：** 这组题属于题目I第二部分，源图漏写字母I为数字1；统一到前文I-2-1、I-2-2的编号。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> 对任意的 $T > 0$，都有

**修正：**

> 对任意的 $T \geqslant 2$，都有

**理由：** 源图CT log T在0<T<1为负而左侧积分非负，断言不可能成立；前文均值估计n≥2，限制T≥2恢复所需大参数结论。

**原文：**

> $F = \left\{f \in C(\mathbb{R})\mid \text{存在}\{f_n\}_{n\geqslant 1}\text{ 使得}f_n\text{ 一致收敛到}f\right\}$

**修正：**

> $F = \left\{f \in C(\mathbb{R})\mid \text{存在}\{f_n\}_{n\geqslant 1}\subset E\text{ 使得}f_n\text{ 一致收敛到}f\right\}$

**理由：** 源图定义闭包漏要求逼近序列来自E，否则任取fn=f便有F=C(R)，后续x²等连续函数的平均极限不成立。

**原文：**

> $F$ 维 $E$ 在 $(C(\mathbb{R}), \|\cdot\|_\infty)$ 中的闭包

**修正：**

> $F$ 为 $E$ 在 $(C_b(\mathbb{R}), \|\cdot\|_\infty)$ 中的闭包，其中 $C_b(\mathbb{R})$ 表示有界连续函数空间

**理由：** 源图“维”应“为”，且C(R)包含x等无穷sup范数函数，不能配成该赋范空间；三角多项式及其一致极限均有界，实际闭包在Cb(R)中。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> 对于任意的 $x \in \mathbb{R}$，我们令 $f(x) = \lim_{n \to \infty} \sum_{k=-n}^{n} \dfrac{1}{x+k}$

**修正：**

> 对于任意的 $x \in \mathbb{R}-\mathbb{Z}$，我们令 $f(x) = \lim_{n \to \infty} \sum_{k=-n}^{n} \dfrac{1}{x+k}$

**理由：** 整点时对称和包含1/0，源图开头误宣称所有实数；L1已明确函数定义域为R−Z。

**原文：**

> 对任意的 $\mathbb{R} - \dfrac{1}{2}\mathbb{Z}$

**修正：**

> 对任意的 $x\in\mathbb{R} - \dfrac{1}{2}\mathbb{Z}$

**理由：** 源图量词漏变量x∈；倍角关系在避开半整点的实数x上讨论。

**原文：**

> Pau Lévy

**修正：**

> Paul Lévy

**理由：** 源图数学家名字漏末尾l，万有弦定理为Paul Lévy的结果，恢复姓名。

**原文：**

> $$\Lambda(f) = \{\sigma \in [0,1] \mid \text{存在} x \in [0,1]，\text{使得} f(x+\sigma) = f(x)\}.$$

**修正：**

> $$\Lambda(f) = \{\sigma \in [0,1] \mid \text{存在} x \in [0,1-\sigma]，\text{使得} f(x+\sigma) = f(x)\}.$$

**理由：** f仅定义在[0,1]，水平弦两端都须在定义域；源图x∈[0,1]允许x+σ越界，应限制x≤1−σ。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> $$[0,\varepsilon]\cup\left\{\frac{1}{n}\,\middle|\,n\in\mathbb{Z}_{\geqslant 1}\right\}\subset\bigcap_{f\in E}\Lambda(f).$$

**修正：**

> $$[0,\varepsilon]\cup\left\{\frac{1}{n}\,\middle|\,n\in\mathbb{Z}_{\geqslant 1}\right\}\subset\Lambda(f).$$

**理由：** 源图N2量词为每个固定f存在ε，却将结论写全体f的交；这与N3所求离散集合直接矛盾。正确应属于该固定函数Λ(f)。

[相关正文：29.3：寒假作业](../../01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333.md)

## 数学修正

**原文：**

> W2) 假设存在整数 $a_0, a_2, \cdots, a_n$，$a_0 \neq 0$，使得

**修正：**

> W2) 假设存在整数 $a_0, a_1, a_2, \cdots, a_n$，$a_0 \neq 0$，使得

**理由：** 源图给定系数列表漏a1，但紧接着的方程含a1e；a1同样需为整数，补齐列表。

**原文：**

> W5) 证明 $e$ 是超越数，即不存在整数 $a_0, a_2, \cdots, a_n$，$a_0 \neq 0$，使得

**修正：**

> W5) 证明 $e$ 是超越数，即不存在整数 $a_0, a_1, a_2, \cdots, a_n$，$a_0 \neq 0$，使得

**理由：** 源图给定系数列表漏a1，但紧接着的方程含a1e；a1同样需为整数，补齐列表。

**原文：**

> 对于 $p \in \mathbb{Z}_{\geqslant 0}$

**修正：**

> 对于 $p \in \mathbb{Z}_{\geqslant 1}$

**理由：** 原图此处写p为正整数，转录错成≥0；p=0会出现X^-1而非多项式及(-1)!，须恢复正整数。

**原文：**

> $J \geqslant (p-1)!$

**修正：**

> $|J| \geqslant (p-1)!$

**理由：** 非零整数且被(p−1)!整除只能给绝对值下界；所有ai同时取负会使J变号，源图漏模。
