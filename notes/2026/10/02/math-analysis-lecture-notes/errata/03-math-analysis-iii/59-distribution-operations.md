# 勘误：59 分布的操作与 Stokes 公式

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> 按照定义，和我们有

**修正：**

> 按照定义，我们有

**理由：** 源图该句误添“和”，删除无意义连词。

**原文：**

> $$\begin{aligned}
> \langle H'(x), \varphi(x) \rangle &= -\langle H(x), \varphi'(x) \rangle = \int_0^\infty \varphi'(x) dx \\
> &= -(\varphi(\infty) - \varphi(0)) = \varphi(0) \\
> &= \langle \delta_0, \varphi \rangle.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle H'(x), \varphi(x) \rangle &= -\langle H(x), \varphi'(x) \rangle = -\int_0^\infty \varphi'(x) dx \\
> &= -(\varphi(\infty) - \varphi(0)) = \varphi(0) \\
> &= \langle \delta_0, \varphi \rangle.
> \end{aligned}$$

**理由：** 由⟨H′,φ⟩=−⟨H,φ′⟩，积分前必须有负号才得φ(0)；源图漏负。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \langle (\log |x|)', \varphi \rangle &= -\lim_{\varepsilon \to 0} \left( \int_{-\infty}^{-\varepsilon} \varphi' \log |x| dx + \int_{\varepsilon}^\infty \varphi' \log |x| dx \right) \\
> &= \lim_{\varepsilon \to 0} \left( \varphi(-\varepsilon) \log(\varepsilon) + \int_{-\infty}^{-\varepsilon} \frac{1}{x} \varphi dx - \varphi(\varepsilon) \log(\varepsilon) + \int_{\varepsilon}^\infty \frac{1}{x} \varphi dx \right).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle (\log |x|)', \varphi \rangle &= -\lim_{\varepsilon \to 0} \left( \int_{-\infty}^{-\varepsilon} \varphi' \log |x| dx + \int_{\varepsilon}^\infty \varphi' \log |x| dx \right) \\
> &= \lim_{\varepsilon \to 0} \left( -\varphi(-\varepsilon) \log(\varepsilon) + \int_{-\infty}^{-\varepsilon} \frac{1}{x} \varphi dx + \varphi(\varepsilon) \log(\varepsilon) + \int_{\varepsilon}^\infty \frac{1}{x} \varphi dx \right).
> \end{aligned}$$

**理由：** 分别对两半轴的−∫φ′log分部积分，边界为−φ(−ε)logε与+φ(ε)logε；源图两处符号反了。

**原文：**

> $f\varphi$ 仍然是 $\mathcal{D}'(\Omega)$ 中的函数

**修正：**

> $f\varphi$ 仍然是 $\mathcal{D}(\Omega)$ 中的函数

**理由：** fφ光滑紧支集，是试验函数D的元素以便与u配对；源图误写分布空间D′。

**原文：**

> $$\partial^\alpha(f \cdot \varphi) = \sum_{\beta+\gamma=\alpha} \partial^\beta f \cdot \partial^\gamma \varphi.$$

**修正：**

> $$\partial^\alpha(f \cdot \varphi) = \sum_{\beta+\gamma=\alpha} \binom{\alpha}{\beta}\partial^\beta f \cdot \partial^\gamma \varphi.$$

**理由：** 多重Leibniz需多重二项式系数，α=2一维交叉项为2f′φ′；源图遗漏。

**原文：**

> $$\begin{aligned}
> |\langle f \cdot u, \varphi \rangle| &\leqslant C \sup_{|\alpha| \leqslant p} \sum_{\beta+\gamma=\alpha} \|\partial^\beta f\|_{L^\infty(K)} \|\partial^\gamma \varphi\|_{L^\infty(K)} \\
> &\leqslant C \underbrace{\sum_{|\beta| \leqslant p} \|\partial^\beta f\|_{L^\infty(K)}}_{\text{新的常数 } C'} \times \sup_{|\gamma| \leqslant p} \|\partial^\gamma \varphi\|_{L^\infty(K)}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> |\langle f \cdot u, \varphi \rangle| &\leqslant C \sup_{|\alpha| \leqslant p} \sum_{\beta+\gamma=\alpha} \binom{\alpha}{\beta}\|\partial^\beta f\|_{L^\infty(K)} \|\partial^\gamma \varphi\|_{L^\infty(K)} \\
> &\leqslant C 2^p\underbrace{\sum_{|\beta| \leqslant p} \|\partial^\beta f\|_{L^\infty(K)}}_{\text{新的常数 } C'} \times \sup_{|\gamma| \leqslant p} \|\partial^\gamma \varphi\|_{L^\infty(K)}.
> \end{aligned}$$

**理由：** 承接正确多重Leibniz，绝对值估计也需要二项式系数；源图缺该系数。

**原文：**

> $$\begin{aligned}
> |\langle f \cdot u, \varphi \rangle| &\leqslant C \sup_{|\alpha| \leqslant p} \sum_{\beta+\gamma=\alpha} \|\partial^\beta f\|_{L^\infty(K)} \|\partial^\gamma \varphi\|_{L^\infty(K)} \\
> &\leqslant C \underbrace{\sum_{|\beta| \leqslant p} \|\partial^\beta f\|_{L^\infty(K)}}_{\text{新的常数 } C'} \times \sup_{|\gamma| \leqslant p} \|\partial^\gamma \varphi\|_{L^\infty(K)}.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> |\langle f \cdot u, \varphi \rangle| &\leqslant C \sup_{|\alpha| \leqslant p} \sum_{\beta+\gamma=\alpha} \binom{\alpha}{\beta}\|\partial^\beta f\|_{L^\infty(K)} \|\partial^\gamma \varphi\|_{L^\infty(K)} \\
> &\leqslant C 2^p\underbrace{\sum_{|\beta| \leqslant p} \|\partial^\beta f\|_{L^\infty(K)}}_{\text{新的常数 } C'} \times \sup_{|\gamma| \leqslant p} \|\partial^\gamma \varphi\|_{L^\infty(K)}.
> \end{aligned}$$

**理由：** 对|α|≤p，多重二项式系数总和为2^|α|≤2^p，可用该因子统一界定并吸收到常数；源图缺因子。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 正半轴积分分部积分后及最终主值极限仍印∫ε∞ φ′ log|x| dx

**正文：**

> $$\begin{aligned}
> \langle (\log |x|)', \varphi \rangle &= -\lim_{\varepsilon \to 0} \left( \int_{-\infty}^{-\varepsilon} \varphi' \log |x| dx + \int_{\varepsilon}^\infty \varphi' \log |x| dx \right) \\
> &= \lim_{\varepsilon \to 0} \left( -\varphi(-\varepsilon) \log(\varepsilon) + \int_{-\infty}^{-\varepsilon} \frac{1}{x} \varphi dx + \varphi(\varepsilon) \log(\varepsilon) + \int_{\varepsilon}^\infty \frac{1}{x} \varphi dx \right).
> \end{aligned}$$

**理由：** 原图两处正半轴本应成为∫φ/x而误留φ′log；canonical已正确转录，不虚构修正候选。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> $$\int_{\mathbb{R}} \frac{1}{x} \cdot x\varphi(x) dx = \int_{\mathbb{R}} 1 \cdot \varphi(x) dx.$$

**修正：**

> $$=\int_{\mathbb{R}} \frac{1}{x} \cdot x\varphi(x) dx = \int_{\mathbb{R}} 1 \cdot \varphi(x) dx.$$

**理由：** 该行继续上一配对等式，源图漏等号，补配对与积分的关系。

**原文：**

> $$(\tau_{x_0}f)(x) = \varphi(x + x_0).$$

**修正：**

> $$(\tau_{x_0}f)(x) = f(x + x_0).$$

**理由：** 被平移函数是f，源图右侧误写φ；应f(x+x0)。

**原文：**

> $$\begin{aligned}
> \langle f(x + x_0), \varphi(x - x_0) \rangle &= \int_{\mathbb{R}^n} f(x + x_0)\varphi(x)dx = \int_{\mathbb{R}^n} f(x)\varphi(x - x_0)dx \\
> &= \langle f(x), \varphi(x - x_0) \rangle = \langle f(x), \tau_{-x_0}\varphi \rangle.
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \langle f(x + x_0), \varphi(x) \rangle &= \int_{\mathbb{R}^n} f(x + x_0)\varphi(x)dx = \int_{\mathbb{R}^n} f(x)\varphi(x - x_0)dx \\
> &= \langle f(x), \varphi(x - x_0) \rangle = \langle f(x), \tau_{-x_0}\varphi \rangle.
> \end{aligned}$$

**理由：** 第一积分被积项为f(x+x0)φ(x)，左边须配对φ(x)；源图提前错移测试函数。

**原文：**

> $$\langle \frac{\tau_{tv}u - u}{t} - \sum_{j=1}^n v_j \partial_j u, \varphi \rangle = \langle u, \underbrace{\frac{\varphi(x - tv) - \varphi(x)}{t} + \sum_{j=1}^n a_j \partial_j \varphi(x)}_{\varphi_t} \rangle.$$

**修正：**

> $$\langle \frac{\tau_{tv}u - u}{t} - \sum_{j=1}^n v_j \partial_j u, \varphi \rangle = \langle u, \underbrace{\frac{\varphi(x - tv) - \varphi(x)}{t} + \sum_{j=1}^n v_j \partial_j \varphi(x)}_{\varphi_t} \rangle.$$

**理由：** 方向向量为v，差商抵消项源图误写未定义aj，应vj以衔接Taylor式。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> 由于 $t$ 很小，上述函数 $\varphi_t(x)$ 的支撑集是紧的

**修正：**

> 当 $|t|\leqslant1$ 时，上述函数 $\varphi_t(x)$ 的支集均包含于同一个紧集 $\operatorname{supp}\varphi+\overline{B(0,|v|)}$

**理由：** D收敛要求公共紧支集；距离≤|v|的平移给统一紧集，逐个函数支集紧不足，补足证明条件。

**原文：**

> $$
> \|\partial^\alpha \varphi_t(x)\|_{L^\infty} = \left\| \sum_{j=1}^n \int_0^1 v_j \left( \partial_j \partial^\alpha \varphi \left(x - ts \frac{v}{|v|}\right) - \partial_j \partial^\alpha \varphi(x) \right) ds \right\|_{L^\infty}
> $$

**修正：**

> $$
> \|\partial^\alpha \varphi_t(x)\|_{L^\infty} = \left\| \sum_{j=1}^n \int_0^1 v_j \left( \partial_j \partial^\alpha \varphi \left(x - tsv\right) - \partial_j \partial^\alpha \varphi(x) \right) ds \right\|_{L^\infty}
> $$

**理由：** 上一Taylor式是x−tsv，求导不改变方向长度；源图错误正规化，还导致v=0时除零。

**原文：**

> $$
> \leqslant \left\| \sum_{j=1}^n \int_0^1 |v_j| \|\partial^{|\alpha|+2} \varphi\|_\infty t ds \right\|_{L^\infty}.
> $$

**修正：**

> $$
> \leqslant |t|\sum_{j,k=1}^n |v_jv_k|\|\partial_k\partial_j\partial^\alpha\varphi\|_{L^\infty}.
> $$

**理由：** 用沿线段Newton-Leibniz得差≤|t|sΣk|vk|‖∂k∂j∂αφ‖，积分s≤1得此界；源图漏向量长度且导数多重指标未指定。

**原文：**

> 其中，最后一步我们用到了 Lagrange 中值定理。再次利用 Lebesgue 控制收敛定理，上面的极限为 0。

**修正：**

> 其中，最后一步利用沿线段的 Newton-Leibniz 公式。右边是一个固定常数乘以 $|t|$，所以当 $t\to0$ 时趋于 $0$。

**理由：** 复值试验函数不能直接用单一ξ的Lagrange中值定理；积分界对复值成立且直接一致趋0。

**原文：**

> 对于我们定义 $\Phi^* u$ 如下

**修正：**

> 我们定义 $\Phi^* u$ 如下

**理由：** 源图多添“对于”且无宾语，删多余词恢复定义句。

**原文：**

> 对任意的紧集 $K \subset \Omega$，存在非负整数 $p$ 和正常数 $C$（$p$ 和 $C$ 依赖于 $K$），使得对任意的 $\varphi \in C_K^\infty(\Omega)$，都有

**修正：**

> 对任意的紧集 $K \subset \Omega_1$，令 $H=\Phi(K)\subset\Omega_2$。由 $u$ 的分布估计，存在非负整数 $p$ 和正常数 $C$（依赖于 $H$），使得对任意的 $\varphi \in C_K^\infty(\Omega_1)$，都有

**理由：** u在Ω2作用于变换后的测试函数，支集H=Φ(K)；原测试支集K⊂Ω1。源图写未指定Ω及同一K混淆两个域。

**原文：**

> $$
> |\langle \Phi^* u, \varphi \rangle| \leqslant C \sup_{|\alpha| \leqslant p} \left\| \partial^\alpha \left( \frac{\varphi(\Phi^{-1}(y))}{|J_\Phi(\Phi^{-1}(y))|} \right) \right\|_{L^\infty(K)}.
> $$

**修正：**

> $$
> |\langle \Phi^* u, \varphi \rangle| \leqslant C \sup_{|\alpha| \leqslant p} \left\| \partial^\alpha \left( \frac{\varphi(\Phi^{-1}(y))}{|J_\Phi(\Phi^{-1}(y))|} \right) \right\|_{L^\infty(H)}.
> $$

**理由：** 被估计函数变量y∈Ω2，支集在H=Φ(K)，不能取x空间K上范数，源图混淆两紧集。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> 这些线性系数都是 $\Phi(y)$ 的不超过 $p + 1$ 阶的导数的多项式。由于我们限制在紧集 $K$ 上

**修正：**

> 这些线性系数由 $\Phi^{-1}(y)$ 及 $|J_{\Phi^{-1}}(y)|$ 的有限阶导数构成，是光滑函数。由于我们限制在紧集 $H=\Phi(K)$ 上

**理由：** 求导对象φ∘Φ^-1乘Jac逆，其系数由逆映射和Jac逆的导数构成，并在y域H紧集上有界，源图用Φ(y)及K均错。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> $g \in C_0^\infty(\Omega)$

**修正：**

> $g \in C_0^\infty(\Omega_2)$

**理由：** g在y域Ω2定义，与Φ复合得到Ω1函数；源图Ω未指定，应Ω2。

**原文：**

> 根据 $L_{\text{loc}}^1(\Omega)$ 到 $\mathcal{D}'(\Omega)$ 嵌入

**修正：**

> 根据 $L_{\text{loc}}^1(\Omega_2)$ 到 $\mathcal{D}'(\Omega_2)$ 嵌入

**理由：** g及积分均在Ω2，单射性应在该域上使用；源图漏域下标。

**原文：**

> $$
> \begin{aligned}
> \left\langle \sum_{k=1}^n \frac{\partial \Phi_k}{\partial x_j} \cdot \frac{\partial u}{\partial y_k} \circ \Phi, \varphi \right\rangle &= -\sum_{k=1}^n \left\langle u, \frac{\partial}{\partial y_k} (\varphi \circ \Psi) \left[ \left( \frac{\partial \Phi_k}{\partial x_j} \circ \Psi \right) |J_\Psi| \right] \right\rangle \\
> &= \left\langle u, \frac{\partial \varphi}{\partial x_j} \circ \Psi |J_\Psi| \right\rangle \\
> &= -\left\langle u \circ \Phi, \frac{\partial \varphi}{\partial x_j} \right\rangle.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left\langle \sum_{k=1}^n \frac{\partial \Phi_k}{\partial x_j} \cdot \frac{\partial u}{\partial y_k} \circ \Phi, \varphi \right\rangle &= -\sum_{k=1}^n \left\langle u, \frac{\partial}{\partial y_k} (\varphi \circ \Psi) \left[ \left( \frac{\partial \Phi_k}{\partial x_j} \circ \Psi \right) |J_\Psi| \right] \right\rangle \\
> &= -\left\langle u, \frac{\partial \varphi}{\partial x_j} \circ \Psi |J_\Psi| \right\rangle \\
> &= -\left\langle u \circ \Phi, \frac{\partial \varphi}{\partial x_j} \right\rangle.
> \end{aligned}
> $$

**理由：** Σk(∂jΦk∘Ψ)∂yk(φ∘Ψ)=∂jφ∘Ψ，前一行负号必须保留；源图中间行漏负，与下一行不一致。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> $f \cdot 1_{(a,x_k]}$ 逐点地收敛到

**修正：**

> $f \cdot 1_{(a,x_k]}$ 几乎处处逐点收敛到

**理由：** xk从左趋x时x处指示值不趋1，只有几乎处处收敛；单点零测集不影响DCT，源图逐点声称过强。

[相关正文：59：分布的操作与 Stokes 公式](../../03-math-analysis-iii/59-distribution-operations.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \langle F', \varphi \rangle = -\langle F, \varphi' \rangle &= \int_{(a,b)} \left( \int_{(a,b)} f \cdot \mathbf{1}_{(a,x]}(y) dy \right) \varphi'(x) dx \\
> &= \iint_{(a,b)\times(a,b)} \mathbf{1}_A(x,y) f(y) \varphi'(x) dx dy.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \langle F', \varphi \rangle = -\langle F, \varphi' \rangle &= -\int_{(a,b)} \left( \int_{(a,b)} f \cdot \mathbf{1}_{(a,x]}(y) dy \right) \varphi'(x) dx \\
> &= -\iint_{(a,b)\times(a,b)} \mathbf{1}_A(x,y) f(y) \varphi'(x) dx dy.
> \end{aligned}
> $$

**理由：** 源图第一行漏负号；分布导数定义为负配对，F代入仍需保留负号。

**原文：**

> $$
> \begin{aligned}
> \langle F', \varphi \rangle = -\langle F, \varphi' \rangle &= \int_{(a,b)} \left( \int_{(a,b)} f \cdot \mathbf{1}_{(a,x]}(y) dy \right) \varphi'(x) dx \\
> &= \iint_{(a,b)\times(a,b)} \mathbf{1}_A(x,y) f(y) \varphi'(x) dx dy.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \langle F', \varphi \rangle = -\langle F, \varphi' \rangle &= -\int_{(a,b)} \left( \int_{(a,b)} f \cdot \mathbf{1}_{(a,x]}(y) dy \right) \varphi'(x) dx \\
> &= -\iint_{(a,b)\times(a,b)} \mathbf{1}_A(x,y) f(y) \varphi'(x) dx dy.
> \end{aligned}
> $$

**理由：** 源图积分换序行承接漏负号，Fubini不改变负号。

**原文：**

> $$
> \begin{aligned}
> \langle F', \varphi \rangle &= \int_{(a,b)} f(y) \left( \int_a^y \varphi'(x) dx \right) dy \\
> &= \int_a^b f(y) \varphi(y) dy = \langle T_f, \varphi \rangle.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \langle F', \varphi \rangle &= -\int_{(a,b)} f(y) \left( \int_y^b \varphi'(x) dx \right) dy \\
> &= \int_a^b f(y) \varphi(y) dy = \langle T_f, \varphi \rangle.
> \end{aligned}
> $$

**理由：** 源图交换积分次序后的内层界限写错：A为y≤x，固定y应由y积至b，且保留分布导数负号。

**原文：**

> $\varphi(a) = 0$

**修正：**

> $\varphi(b) = 0$

**理由：** 采用正确换序界限后用φ(b)=0使−∫_y^bφ′=φ(y)。
