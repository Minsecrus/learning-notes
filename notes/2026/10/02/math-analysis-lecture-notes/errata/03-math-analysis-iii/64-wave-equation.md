# 勘误：64 可卷集与三维波动方程

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> |x1+x2|≤R⇒|x1|<R,|x2|<R

**正文：**

> $$
> |x_1 + x_2| \leqslant R \Rightarrow |x_1| < R', |x_2| < R',
> $$

**理由：** 源图两项上界遗漏prime，应为另存在的R′；canonical已正确。

**原讲义片段：**

> K1,…,Km是闭集，K0是闭集

**正文：**

> $K_1, \cdots, K_m \subset \mathbb{R}^n$ 是紧集, $K_0$ 是闭集

**理由：** 源图例1若均仅闭集，R与R即可反例；应前m个紧、K0闭，canonical已正确。

## 未决数学问题

**原文：**

> 对任意的可数子集 $J \subset I$

**问题：** 源图可数J任意选择xj未保证Σj xj收敛，表达式无法定义；通常可卷有限族/有限子族条件足以定义有限卷积。一般无限族的作者意图和级数收敛条件不明，暂保留疑点。

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 数学修正

**原文：**

> $$
> \operatorname{supp}(\varphi) \cap \left\{ (\operatorname{supp}(u) + \operatorname{supp}(v) \right\} \neq \emptyset.
> $$

**修正：**

> $$
> \operatorname{supp}(\varphi) \cap \left(\operatorname{supp}(u) + \operatorname{supp}(v)\right) \neq \emptyset.
> $$

**理由：** 源图支集和的括号不匹配，按两个支集的Minkowski和恢复成完整一组括号。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 当k≥N：〈(χku)*(χkv),φ〉=〈(χku)*(χkv),φ〉

**正文：**

> $$
> \langle (\chi_k u) * (\chi_k v), \varphi \rangle = \langle (\chi_N u) * (\chi_N v), \varphi \rangle.
> $$

**理由：** 源图声称稳定的等式右边也写k，恒等式不能说明稳定；canonical已正确写N。

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 数学修正

**原文：**

> $x + y \in \operatorname{supp}(\varphi) \cap \{ (\operatorname{supp}(u) + \operatorname{supp}(v) \}$

**修正：**

> $x + y \in \operatorname{supp}(\varphi) \cap \left(\operatorname{supp}(u) + \operatorname{supp}(v)\right)$

**理由：** 源图集合和的括号未闭合，恢复支集Minkowski和的完整括号。

**原文：**

> 我们取 $N$ 足够大, 使得 $\chi_N \vert_{B_{R'}} \equiv 1$

**修正：**

> 我们取 $N>R'$ 足够大, 使得 $\chi_N \vert_{B_{R'}} \equiv 1$

**理由：** 源图只要求χN在BR′恒1未明说N>R′，需要此量化保证所有k,j≥N的χk,χj均在共同半径R′邻域恒1。

**原文：**

> 那么, 我们
>
> 1)

**修正：**

> 那么, 我们有
>
> 1)

**理由：** 源图命题432引出性质的句子漏有字，补全陈述即可。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 对于k,j≥R

**正文：**

> 对于 $k, j \geqslant N$

**理由：** 源图比较阈值误写R，canonical已正确写N，此N可取大于R′。

**原讲义片段：**

> 假设supp(u)⊂BR

**正文：**

> 假设 $\operatorname{supp}(\varphi) \subset B_R$

**理由：** 源图分布连续性应固定试验函数支集界，不应假设一般u紧支；canonical已正确写φ。

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 数学修正

**原文：**

> 支集在 $|x| > k$ 上

**修正：**

> 支集在 $|x| \geqslant k$ 上

**理由：** 源图把非零集与闭支集混用，χk在|x|≤k恒1保证导数在开球内为零，闭支集可包含边界|x|=k；取k>R′后证明不变。

**原文：**

> $(t, x) \in \mathbb{R} \times \mathbb{R}^n$

**修正：**

> $(t, x) \in \mathbb{R} \times \mathbb{R}^3$

**理由：** 源图此节指定R^(1+3)波动算子，n无另定义，应为3。

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 数学修正

**原文：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} r^2 dr d\sigma_{\mathbf{S}^2} \\
> &= \int_0^\infty \int_{\mathbf{S}^2} \left( -\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi + \frac{1}{r^2}\Delta_{\mathbf{S}^2}\varphi \right)(r, r, \vartheta) r d\sigma_{\mathbf{S}} dr.
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_0^\infty\int_{\mathbf{S}^2} \frac{(\square\varphi)(r,r\vartheta)}{r} r^2 d\sigma_{\mathbf{S}^2}(\vartheta)\,dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} \left( -\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi + \frac{1}{r^2}\Delta_{\mathbf{S}^2}\varphi \right)(r, r, \vartheta) r d\sigma_{\mathbf{S}} dr.
> \end{aligned} $$

**理由：** 源图球坐标积分仍将区域标Rn且微分次序混写；正确为r∈(0,∞)、ϑ∈S²，对x=rϑ在t=r取值。

**原文：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + 2\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + 2\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} -((\partial_t + \partial_r)(\partial_t - \partial_r)(r\varphi))(r, r, \vartheta) d\sigma_{\mathbf{S}^2} dr.
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} -((\partial_t + \partial_r)(\partial_t - \partial_r)(r\varphi))(r, r, \vartheta) d\sigma_{\mathbf{S}^2} dr.
> \end{aligned} $$

**理由：** 源图球面项积分消失后，径向Laplace项应2/r∂r，外乘r得2∂r；写成2∂r再乘r使下一步rφ因式分解错误。

**原文：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + 2\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + 2\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} -((\partial_t + \partial_r)(\partial_t - \partial_r)(r\varphi))(r, r, \vartheta) d\sigma_{\mathbf{S}^2} dr.
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} (-\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi) (r, r, \vartheta) r d\sigma_{\mathbf{S}^2} dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} -((\partial_t + \partial_r)(\partial_t - \partial_r)(r\varphi))(r, r, \vartheta) d\sigma_{\mathbf{S}^2} dr.
> \end{aligned} $$

**理由：** 源图重复的下一行同样漏径向系数1/r，修成2/r才与−(∂t+∂r)(∂t−∂r)(rφ)相等。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 球坐标式(−∂t²φ+∂r²φ+2∂rφ+(1/r)ΔS²φ)r

**正文：**

> $$ \begin{aligned}
> \int_{\mathbb{R}^3} \frac{(\square\varphi)(|x|, x)}{|x|} dx &= \int_0^\infty\int_{\mathbf{S}^2} \frac{(\square\varphi)(r,r\vartheta)}{r} r^2 d\sigma_{\mathbf{S}^2}(\vartheta)\,dr \\
> &= \int_0^\infty \int_{\mathbf{S}^2} \left( -\partial_t^2 \varphi + \partial_r^2 \varphi + \frac{2}{r}\partial_r \varphi + \frac{1}{r^2}\Delta_{\mathbf{S}^2}\varphi \right)(r, r, \vartheta) r d\sigma_{\mathbf{S}} dr.
> \end{aligned} $$

**理由：** 源图此处径向2/r及角向1/r²均漏一r，canonical此前第一处已正确，后续两处另有真实候选。

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 数学修正

**原文：**

> $$ \begin{aligned}
> \left\langle \square \left( -\frac{d\sigma}{\sqrt{t^2+|x|^2}} \right), \varphi \right\rangle &= \int_0^\infty \int_{\mathbf{S}^2} \frac{d}{dr} \left[ (\underline{L}(\psi))(r, r, \vartheta) \right] d\sigma_{\mathbf{S}^2}(\vartheta) dr \\
> &= \int_0^\infty \frac{d}{dr} \left[ \int_{\mathbf{S}^2} (\underline{L}(\psi))(r, r, \vartheta) d\sigma_{\mathbf{S}^2}(\vartheta) \right] dr \\
> &= \lim_{\varepsilon \to 0} \int_{\mathbf{S}^2} (\underline{L}\psi)(\varepsilon, \varepsilon, \vartheta) d\sigma_{\mathbf{S}^2}(\vartheta)
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> \left\langle \square \left( -\frac{d\sigma}{\sqrt{t^2+|x|^2}} \right), \varphi \right\rangle &= \int_0^\infty \int_{\mathbf{S}^2} \frac{d}{dr} \left[ (\underline{L}(\psi))(r, r, \vartheta) \right] d\sigma_{\mathbf{S}^2}(\vartheta) dr \\
> &= \int_0^\infty \frac{d}{dr} \left[ \int_{\mathbf{S}^2} (\underline{L}(\psi))(r, r, \vartheta) d\sigma_{\mathbf{S}^2}(\vartheta) \right] dr \\
> &= -\lim_{\varepsilon \to 0} \int_{\mathbf{S}^2} (\underline{L}\psi)(\varepsilon, \varepsilon, \vartheta) d\sigma_{\mathbf{S}^2}(\vartheta)
> \end{aligned} $$

**理由：** 源图积分d/dr的下端边界项应负，紧支集函数∞处为0，故∫ε∞h′=−h(ε)。

**原文：**

> $$ (\underline{L}\psi)(t, x) = \varphi(t, x) + |x|\underline{L}(\varphi)(t, x). $$

**修正：**

> $$ (\underline{L}\psi)(t, x) = -\varphi(t, x) + |x|\underline{L}(\varphi)(t, x). $$

**理由：** 源图underlineL=∂t−∂r，ψ=rφ，故underlineLr=−1，乘积公式首项−φ。

**原文：**

> $$ \lim_{\varepsilon \to 0} \int_{\mathbf{S}^2} (\underline{L}\psi)(\varepsilon, \varepsilon, \vartheta) d\sigma_{\mathbf{S}^2}(\vartheta) = \int_{\mathbf{S}^2} \varphi(0, 0) d\sigma_{\mathbf{S}^2}(\vartheta) = 4\pi \varphi(0, 0). $$

**修正：**

> $$ \lim_{\varepsilon \to 0} \int_{\mathbf{S}^2} (\underline{L}\psi)(\varepsilon, \varepsilon, \vartheta) d\sigma_{\mathbf{S}^2}(\vartheta) = -\int_{\mathbf{S}^2} \varphi(0, 0) d\sigma_{\mathbf{S}^2}(\vartheta) = -4\pi \varphi(0, 0). $$

**理由：** 源图underlineLψ在顶点极限应−φ0，球面面积4π故其边界极限为−4πφ0；前式额外负边界后得到+4πφ0。

[相关正文：64：可卷集与三维波动方程](../../03-math-analysis-iii/64-wave-equation.md)

## 数学修正

**原文：**

> 为了一下计算明了

**修正：**

> 为了使下面的计算明了

**理由：** 源图一下缺少使及下文限定，修成承接后续计算的完整短语。

**原文：**

> $$ v = -u_0(x)\delta_0(t) \quad \text{或者} \quad -u_1(x)\delta_0(t). $$

**修正：**

> $$ v = u_0(x)\delta_0(t) \quad \text{或者} \quad u_1(x)\delta_0(t). $$

**理由：** 源图v给负号却令vε=正χεui并计算负W*v，与778公式分量不一致。将v定义为正uiδ，与全页逼近和负W*v一致；最终u=−∂tW*v0−W*v1为正Kirchhoff表达式。

**原文：**

> $$ \begin{aligned}
> W * v_\varepsilon(x) &= -\left\langle \frac{d\sigma}{4\pi\sqrt{|t'|^2+|x'|^2}}, \chi_\varepsilon(t-t')u_i(x-x') \right\rangle \\
> &= -\int_{\mathbb{R}^3} \frac{\chi_\varepsilon(t-|x'|)u_i(x-x')}{4\pi |x|} dx \\
> &= -\int_0^\infty \int_{\mathbf{S}^2} \frac{\chi_\varepsilon(t-|r'|)u_i(x-x')}{4\pi} r' d\sigma_{\mathbf{S}^2}(\theta) dr' \\
> &= -\int_0^\infty \chi_\varepsilon(t-r') \left( r' \int_{\mathbf{S}^2} \frac{u_i(x-x')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta') \right) dr' \\
> &\longrightarrow -t \int_{\mathbf{S}^2} \frac{u_i(x-t\theta')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta').
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> (W * v_\varepsilon)(t,x) &= -\left\langle \frac{d\sigma}{4\pi\sqrt{|t'|^2+|x'|^2}}, \chi_\varepsilon(t-t')u_i(x-x') \right\rangle \\
> &= -\int_{\mathbb{R}^3} \frac{\chi_\varepsilon(t-|x'|)u_i(x-x')}{4\pi |x'|} dx' \\
> &= -\int_0^\infty \int_{\mathbf{S}^2} \frac{\chi_\varepsilon(t-|r'|)u_i(x-x')}{4\pi} r' d\sigma_{\mathbf{S}^2}(\theta) dr' \\
> &= -\int_0^\infty \chi_\varepsilon(t-r') \left( r' \int_{\mathbf{S}^2} \frac{u_i(x-x')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta') \right) dr' \\
> &\longrightarrow -t \int_{\mathbf{S}^2} \frac{u_i(x-t\vartheta')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta').
> \end{aligned} $$

**理由：** 源图卷积为时间空间的函数，左项漏时间变量t，应标完整(t,x)。

**原文：**

> $$ \begin{aligned}
> W * v_\varepsilon(x) &= -\left\langle \frac{d\sigma}{4\pi\sqrt{|t'|^2+|x'|^2}}, \chi_\varepsilon(t-t')u_i(x-x') \right\rangle \\
> &= -\int_{\mathbb{R}^3} \frac{\chi_\varepsilon(t-|x'|)u_i(x-x')}{4\pi |x|} dx \\
> &= -\int_0^\infty \int_{\mathbf{S}^2} \frac{\chi_\varepsilon(t-|r'|)u_i(x-x')}{4\pi} r' d\sigma_{\mathbf{S}^2}(\theta) dr' \\
> &= -\int_0^\infty \chi_\varepsilon(t-r') \left( r' \int_{\mathbf{S}^2} \frac{u_i(x-x')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta') \right) dr' \\
> &\longrightarrow -t \int_{\mathbf{S}^2} \frac{u_i(x-t\theta')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta').
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> (W * v_\varepsilon)(t,x) &= -\left\langle \frac{d\sigma}{4\pi\sqrt{|t'|^2+|x'|^2}}, \chi_\varepsilon(t-t')u_i(x-x') \right\rangle \\
> &= -\int_{\mathbb{R}^3} \frac{\chi_\varepsilon(t-|x'|)u_i(x-x')}{4\pi |x'|} dx' \\
> &= -\int_0^\infty \int_{\mathbf{S}^2} \frac{\chi_\varepsilon(t-|r'|)u_i(x-x')}{4\pi} r' d\sigma_{\mathbf{S}^2}(\theta) dr' \\
> &= -\int_0^\infty \chi_\varepsilon(t-r') \left( r' \int_{\mathbf{S}^2} \frac{u_i(x-x')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta') \right) dr' \\
> &\longrightarrow -t \int_{\mathbf{S}^2} \frac{u_i(x-t\vartheta')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta').
> \end{aligned} $$

**理由：** 源图代入光锥测度后分母应积分变量|x′|而非固定点|x|，微分同样应dx′，这样才得到r′dr′球面式。

**原文：**

> $$ W * v(x) = -t H(t) \int_{\mathbf{S}^2} u_i(x-t\theta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi}. $$

**修正：**

> $$ (W * v)(t,x) = -t H(t) \int_{\mathbf{S}^2} u_i(x-t\vartheta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi}. $$

**理由：** 源图球面变量为ϑ′，转录混成θ′，应统一；最终Kirchhoff初值公式两项正号由778的u=−∂tW*v0−W*v1及本页W*v负号确定，且t=0给u0、时间导数给u1。 此处卷积同时依赖t、x，补全左项的时间变量。

**原文：**

> $$ u(t, x) = -t \int_{\mathbf{S}^2} u_1(x-t\theta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi} - \partial_t \left[ t \int_{\mathbf{S}^2} u_0(x-t\theta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi} \right]. $$

**修正：**

> $$ u(t, x) = t \int_{\mathbf{S}^2} u_1(x-t\vartheta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi} + \partial_t \left[ t \int_{\mathbf{S}^2} u_0(x-t\vartheta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi} \right]. $$

**理由：** 源图球面变量为ϑ′，转录混成θ′，应统一；最终Kirchhoff初值公式两项正号由778的u=−∂tW*v0−W*v1及本页W*v负号确定，且t=0给u0、时间导数给u1。

**原文：**

> 由于 $t\theta'$ 是长度为 1 的向量

**修正：**

> 由于 $\vartheta'$ 是长度为 $1$ 的向量，$t\vartheta'$ 的长度为 $t$

**理由：** 源图tϑ′长度应t非1，ϑ′为单位球面的向量，故球面半径为t。

**原文：**

> 半径的圆上的值

**修正：**

> 半径的球面上的值

**理由：** 源图空间为R³，积分域为S²平移缩放后的球面，不能称圆。

**原文：**

> $$ \begin{aligned}
> W * v_\varepsilon(x) &= -\left\langle \frac{d\sigma}{4\pi\sqrt{|t'|^2+|x'|^2}}, \chi_\varepsilon(t-t')u_i(x-x') \right\rangle \\
> &= -\int_{\mathbb{R}^3} \frac{\chi_\varepsilon(t-|x'|)u_i(x-x')}{4\pi |x|} dx \\
> &= -\int_0^\infty \int_{\mathbf{S}^2} \frac{\chi_\varepsilon(t-|r'|)u_i(x-x')}{4\pi} r' d\sigma_{\mathbf{S}^2}(\theta) dr' \\
> &= -\int_0^\infty \chi_\varepsilon(t-r') \left( r' \int_{\mathbf{S}^2} \frac{u_i(x-x')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta') \right) dr' \\
> &\longrightarrow -t \int_{\mathbf{S}^2} \frac{u_i(x-t\theta')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta').
> \end{aligned} $$

**修正：**

> $$ \begin{aligned}
> (W * v_\varepsilon)(t,x) &= -\left\langle \frac{d\sigma}{4\pi\sqrt{|t'|^2+|x'|^2}}, \chi_\varepsilon(t-t')u_i(x-x') \right\rangle \\
> &= -\int_{\mathbb{R}^3} \frac{\chi_\varepsilon(t-|x'|)u_i(x-x')}{4\pi |x'|} dx' \\
> &= -\int_0^\infty \int_{\mathbf{S}^2} \frac{\chi_\varepsilon(t-|r'|)u_i(x-x')}{4\pi} r' d\sigma_{\mathbf{S}^2}(\theta) dr' \\
> &= -\int_0^\infty \chi_\varepsilon(t-r') \left( r' \int_{\mathbf{S}^2} \frac{u_i(x-x')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta') \right) dr' \\
> &\longrightarrow -t \int_{\mathbf{S}^2} \frac{u_i(x-t\vartheta')}{4\pi} d\sigma_{\mathbf{S}^2}(\vartheta').
> \end{aligned} $$

**理由：** 源图球面变量ϑ′而转录为θ′；与积分测度及x′=r′ϑ′定义统一。
