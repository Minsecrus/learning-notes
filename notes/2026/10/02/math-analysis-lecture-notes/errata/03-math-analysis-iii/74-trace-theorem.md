# 勘误：74 半空间的迹定理与限制正合列

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：74：半空间的迹定理与限制正合列](../../03-math-analysis-iii/74-trace-theorem.md)

## 数学修正

**原文：**

> $$0 = \varphi(x', x_n) = \psi(x') \phi(x_n), \quad \psi(x') \in \mathcal{D}(\mathbb{R}^{n-1}), \; \phi(x_n) \in \mathcal{D}(\mathbb{R}).$$

**修正：**

> $$\varphi(x', x_n) = \psi(x') \phi(x_n), \quad \psi(x') \in \mathcal{D}(\mathbb{R}^{n-1}), \; \phi(x_n) \in \mathcal{D}(\mathbb{R}).$$

**理由：** 分布配对为0而非试验函数本身为0，原误在任选张量试验函数前添加0=，使后面论证无效。

**原文：**

> $$\|\varphi(x', x_n)\|_{H^{-s}(\mathbb{R}^{n-1}_{x'})} \leqslant \frac{1}{x_n^2 + 1} N_{\lfloor -s \rfloor + 2n + 4}(\varphi).$$

**修正：**

> $$\|\varphi(x', x_n)\|_{H^{-s}(\mathbb{R}^{n-1}_{x'})} \leqslant \frac{C_0}{x_n^2 + 1} N_{\max\{0,\lfloor -s \rfloor\} + 2n + 4}(\varphi).$$

**理由：** 800定义Np仅非负整数，s任意很大正时原floor(−s)+2n+4负阶无定义。max(0,floor−s)+2n+4保留s≤0原高阶、s≥0足够控制L2与xn^-2，同时允许依赖s,n的正常数C0，原系数1未由范数定义保证。

**原文：**

> 此时，我们知道

**修正：**

> 此时，存在只依赖于 $s$ 和 $n$ 的常数 $C_0>0$，使得

**理由：** 明确H−s范数由有限Schwartz范数控制所需常数，不能固定1。

**原文：**

> $$|\langle u, \varphi \rangle| \leqslant \int_{\mathbb{R}} |||u(x_n)|||_s \frac{1}{x_n^2 + 1} N_{\lfloor -s \rfloor + 2n + 4}(\varphi) dx_n = C |||u(x_n)|||_s N_{\lfloor -s \rfloor + 2n + 4}(\varphi).$$

**修正：**

> $$|\langle u,\varphi\rangle|\leqslant C_0|||u|||_s N_{\max\{0,\lfloor -s\rfloor\}+2n+4}(\varphi)\int_{\mathbb R}\frac{dx_n}{x_n^2+1}=C|||u|||_s N_{\max\{0,\lfloor -s\rfloor\}+2n+4}(\varphi).$$

**理由：** Cb三竖线范数施于函数u而非u(xn)，积分后不得仍留自由xn；统一前式非负Np阶及C0并由∫(1+xn²)^−1=π合并C。

[相关正文：74：半空间的迹定理与限制正合列](../../03-math-analysis-iii/74-trace-theorem.md)

## 数学修正

**原文：**

> **定理 500**. 对任意的 $u \in H^s(\mathbb{R}^n)$

**修正：**

> **定理 500**. 设 $s>\frac12$。对任意的 $u \in H^s(\mathbb{R}^n)$

**理由：** 独立定理声明明确紧前已给s>1/2，原省略条件使按任意s理解则假。

[相关正文：74：半空间的迹定理与限制正合列](../../03-math-analysis-iii/74-trace-theorem.md)

## 数学修正

**原文：**

> $$\lim_{t_2 \rightarrow t_2} I(\xi; t_1, t_2) = 0.$$

**修正：**

> $$\lim_{t_2 \rightarrow t_1} I(\xi; t_1, t_2) = 0.$$

**理由：** 原图自变量趋自身t2是笔误，紧前说t2→t1，需相位差消失。

**原文：**

> 由于 $\lim_{t_2 \rightarrow t_2} I(\xi; t_1, t_2) = 0$

**修正：**

> 由于 $\lim_{t_2 \rightarrow t_1} I(\xi; t_1, t_2) = 0$

**理由：** 重复出现的同一极限笔误，成同样t2→t1。

**原文：**

> $$\|u(x', t_1) - u(x', t_2)\|^2_{H^{s-\frac{1}{2}}(\mathbb{R}^{n-1})} = \frac{1}{4\pi^2} \int_{\mathbb{R}^n} I(\xi; t_1, t_2)(1 + |\xi|^2)^s |\widehat{u}(\xi)|^2 d\xi.$$

**修正：**

> $$\|u(x', t_1) - u(x', t_2)\|^2_{H^{s-\frac{1}{2}}(\mathbb{R}^{n-1})} \leqslant \frac{1}{4\pi^2} \int_{\mathbb{R}^n} I(\xi; t_1, t_2)(1 + |\xi|^2)^s |\widehat{u}(\xi)|^2 d\xi.$$

**理由：** 从Cauchy所得上界一般非等号；本页前段确写≤，结尾复述误=，改≤即可两次控制收敛。

**原文：**

> 所有右边是一个可积函数

**修正：**

> 所以右边是一个可积函数

**理由：** 原图所有应所以，确定用字误。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> e^{it_2\sqrt{1+|\xi^\prime|^2}\cdot d\xi_n/\sqrt{1+|\xi^\prime|^2}}
> ```

**正文：**

> $$\begin{aligned}
> \int_{\mathbb{R}} \frac{|e^{it_1\xi_n} - e^{it_2\xi_n}|^2}{(1 + |\xi|^2)^s} d\xi_n &= \int_{\mathbb{R}} \frac{|e^{it_1\xi_n} - e^{it_2\xi_n}|^2}{(1 + |\xi'|^2 + \xi_n^2)^s} d\xi_n \\
> &= \frac{1}{(1 + |\xi'|^2)^{s-\frac{1}{2}}} \int_{\mathbb{R}} \frac{\left| e^{it_1 \sqrt{1+|\xi'|^2} \frac{\xi_n}{\sqrt{1+|\xi'|^2}}} - e^{it_2 \sqrt{1+|\xi'|^2} \frac{\xi_n}{\sqrt{1+|\xi'|^2}}} \right|^2}{\left( 1 + \left( \frac{\xi_n}{\sqrt{1+|\xi'|^2}} \right)^2 \right)^s} \cdot \frac{d\xi_n}{\sqrt{1+|\xi'|^2}} \\
> &= \frac{1}{(1 + |\xi'|^2)^{s-\frac{1}{2}}} \underbrace{\int_{\mathbb{R}} \frac{\left| e^{it_1 \sqrt{1+|\xi'|^2} y} - e^{it_2 \sqrt{1+|\xi'|^2} y} \right|^2}{(1 + |y|^2)^s} dy}_{I(\xi; t_1, t_2)}.
> \end{aligned}$$

**理由：** 原图第二项指数误带dξn而非ξn，canonical已改为正确变量，不恢复源错。

[相关正文：74：半空间的迹定理与限制正合列](../../03-math-analysis-iii/74-trace-theorem.md)

## 数学修正

**原文：**

> $$ \|\mathrm{Res}(u)\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})} \leqslant C \lim_{t\to 0^+} \|u|_{x_n=t}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})} = C \|u\|_{H^1(\mathbb{R}^n)}. $$

**修正：**

> $$ \|\mathrm{Res}(u)\|_{H^{\frac12}(\mathbb{R}^{n-1})}=\lim_{t\to0^+}\|u|_{x_n=t}\|_{H^{\frac12}(\mathbb{R}^{n-1})}\leqslant C\|u\|_{H^1(\mathbb{H}^n)}. $$

**理由：** 迹在H1/2连续极限给范数等号，而极限切片范数仅≤C||u||半空间H1，并不等于全空间H1范数；u只定义于Hn。本页原全空间范数无定义且=错，由连续Ext与全空间迹估计唯一确定为半空间上界。

**原文：**

> 下面上面的序列是正合的

**修正：**

> 下面证明上面的序列是正合的

**理由：** 原图句漏证明，紧后论证正合列。

**原文：**

> 一个阶段函数 $a(x)$

**修正：**

> 一个光滑截断函数 $a(x)$

**理由：** 原阶段为截断用字错，后面求a′且aφ应光滑试验函数，需明确光滑截断。

**原文：**

> $$ \begin{aligned} \langle \partial_k \underline{u}, \varphi \rangle &= -\langle \underline{u}, \partial_k \varphi \rangle = -\int_{\mathbb{R}^n} \underline{u}(x) \partial_k \varphi(x) dx \\ &= -\lim_{\varepsilon \to 0} \int_{\mathbb{R}^n} u(x) \underbrace{a\left(\frac{x_n}{\varepsilon}\right)}_{\text{support }\subset \mathbb{H}^n} \partial_k \varphi(x) dx \\ &= -\lim_{\varepsilon \to 0} \int_{\mathbb{H}^n} u(x) a\left(\frac{x_n}{\varepsilon}\right) \partial_k \varphi(x) dx \\ &= \lim_{\varepsilon \to 0} \int_{\mathbb{H}^n} \partial_k u(x) a\left(\frac{x_n}{\varepsilon}\right) \varphi(x) dx + \lim_{\varepsilon \to 0} \int_{\mathbb{H}^n} u(x) \frac{1}{\varepsilon} a'\left(\frac{x_n}{\varepsilon}\right) \delta_k^n \varphi(x) dx. \end{aligned} $$

**修正：**

> $$ \begin{aligned} \langle \partial_k \underline{u}, \varphi \rangle &= -\langle \underline{u}, \partial_k \varphi \rangle = -\int_{\mathbb{R}^n} \underline{u}(x) \partial_k \varphi(x) dx \\ &= -\lim_{\varepsilon \to 0} \int_{\mathbb{R}^n} \underline{u}(x) \underbrace{a\left(\frac{x_n}{\varepsilon}\right)}_{\text{support }\subset \mathbb{H}^n} \partial_k \varphi(x) dx \\ &= -\lim_{\varepsilon \to 0} \int_{\mathbb{H}^n} u(x) a\left(\frac{x_n}{\varepsilon}\right) \partial_k \varphi(x) dx \\ &= \lim_{\varepsilon \to 0} \int_{\mathbb{H}^n} \partial_k u(x) a\left(\frac{x_n}{\varepsilon}\right) \varphi(x) dx + \lim_{\varepsilon \to 0} \int_{\mathbb{H}^n} u(x) \frac{1}{\varepsilon} a'\left(\frac{x_n}{\varepsilon}\right) \delta_k^n \varphi(x) dx. \end{aligned} $$

**理由：** 原u只在上半空间，Rn积分须零延拓u下划线；紧后换Hn恢复u。

[相关正文：74：半空间的迹定理与限制正合列](../../03-math-analysis-iii/74-trace-theorem.md)

## 数学修正

**原文：**

> $$ \begin{aligned} \left| \int_{\mathbb{H}^n} u(x) \frac{1}{\varepsilon} a'\left(\frac{x_n}{\varepsilon}\right) \delta_k^n \varphi(x) dx \right| &= \left| \int_{\varepsilon}^{2\varepsilon} \int_{\mathbb{R}^{n-1}} u(x', x_n) \frac{1}{\varepsilon} a'\left(\frac{x_n}{\varepsilon}\right) \delta_k^n \varphi(x', x_n) dx' dx_n \right| \\ &\leqslant \frac{1}{\varepsilon} \int_{\varepsilon}^{2\varepsilon} \underbrace{\left| a'\left(\frac{x_n}{\varepsilon}\right) \right|}_{O(1)} \underbrace{\| u(x', x_n) \|_{H^{\frac{1}{2}}}}_{o(1),\ \varepsilon \to 0} \underbrace{\| \varphi(x', x_n) \|_{H^{-\frac{1}{2}}}}_{O(1)} dx' dx_n \\ &= o(1). \end{aligned} $$

**修正：**

> $$ \begin{aligned} \left| \int_{\mathbb{H}^n} u(x) \frac{1}{\varepsilon} a'\left(\frac{x_n}{\varepsilon}\right) \delta_k^n \varphi(x) dx \right| &= \left| \int_{\varepsilon}^{2\varepsilon} \int_{\mathbb{R}^{n-1}} u(x', x_n) \frac{1}{\varepsilon} a'\left(\frac{x_n}{\varepsilon}\right) \delta_k^n \varphi(x', x_n) dx' dx_n \right| \\ &\leqslant \frac{1}{\varepsilon} \int_{\varepsilon}^{2\varepsilon} \underbrace{\left| a'\left(\frac{x_n}{\varepsilon}\right) \right|}_{O(1)} \underbrace{\| u(x', x_n) \|_{H^{\frac{1}{2}}}}_{o(1),\ \varepsilon \to 0} \underbrace{\| \varphi(x', x_n) \|_{H^{-\frac{1}{2}}}}_{O(1)} dx_n \\ &= o(1). \end{aligned} $$

**理由：** 切向变量已在Sobolev范数中积分，不可额外再dx′；原源图也多dx′。

**原文：**

> $$ u_\delta(x) \xrightarrow{H^1(\mathbb{R}^n)} \underline{u}(x). $$

**修正：**

> $$ u_\delta(x) \xrightarrow[\delta\to0^+]{H^1(\mathbb{R}^n)} \underline{u}(x). $$

**理由：** 平移连续收敛须δ→0+，补遗漏极限参数。

**原文：**

> $$ v_\delta(x) = u_\delta(x)|_{\mathbb{H}^n} \xrightarrow{H^1(\mathbb{R}^n)} \underline{u}(x)|_{\mathbb{H}^n} = u(x). $$

**修正：**

> $$ v_\delta(x) = u_\delta(x)|_{\mathbb{H}^n} \xrightarrow{H^1(\mathbb{H}^n)} \underline{u}(x)|_{\mathbb{H}^n} = u(x). $$

**理由：** 限制到半空间的vδ应在H1Hn收敛，原箭头照抄全空间错域。

**原文：**

> 既可，其中

**修正：**

> 即可，其中

**理由：** 原图“既可”用字笔误，此处表达只需证明vδ属于H01即可。

**原文：**

> $$ \partial_k \tilde{\varphi}_p = a\left(\frac{2x_n}{\delta}\right) \partial_k \varphi_p(x) + \delta_k^n a'\left(\frac{2x_n}{\delta}\right) \varphi_p(x), $$

**修正：**

> $$ \partial_k \tilde{\varphi}_p = a\left(\frac{2x_n}{\delta}\right) \partial_k \varphi_p(x) + \frac2\delta\delta_k^n a'\left(\frac{2x_n}{\delta}\right) \varphi_p(x), $$

**理由：** ∂n a(2xn/δ)=(2/δ)a′，原链式导数漏2/δ。

**原文：**

> $$ \partial_k \tilde{\varphi}_p \to a\left(\frac{2x_n}{\delta}\right) \partial_k u_\delta(x) + \delta_k^n a'\left(\frac{2x_n}{\delta}\right) u_\delta(x), $$

**修正：**

> $$ \partial_k \tilde{\varphi}_p \to a\left(\frac{2x_n}{\delta}\right) \partial_k u_\delta(x) + \frac2\delta\delta_k^n a'\left(\frac{2x_n}{\delta}\right) u_\delta(x), $$

**理由：** 固定δ的导数极限沿同一链式法则需2/δ，虽该乘uδ项因支集消失为0仍须写正确。

[相关正文：74：半空间的迹定理与限制正合列](../../03-math-analysis-iii/74-trace-theorem.md)

## 数学修正

**原文：**

> 后一项的为 $0$ 因为 $\operatorname{supp}\left(a'\left(\frac{2x_n}{\delta}\right)\right) \cap \operatorname{supp}(u_\delta) = \emptyset$。

**修正：**

> 后一项为 $0$，因为 $a'\left(\frac{2x_n}{\delta}\right)$ 在 $x_n\geqslant\delta$ 时为 $0$，而 $u_\delta$ 在 $x_n\leqslant\delta$ 时为 $0$（几乎处处）。

**理由：** 支集是闭集，a′(2xn/δ)的支集可碰到xn=δ，uδ支集亦可碰同平面，原空交断言一般假；乘积仍因各分支零值为0，保留必要证明结论。

**原文：**

> $$ H_0^1(\mathbb{H}^n) \supset \tilde{\varphi}_p \xrightarrow{H^1(\mathbb{H}^n)} v_\delta, \quad p \to \infty. $$

**修正：**

> $$ H_0^1(\mathbb{H}^n) \ni \tilde{\varphi}_p \xrightarrow{H^1(\mathbb{H}^n)} v_\delta, \quad p \to \infty. $$

**理由：** 函数属于空间，不是函数作为空间的子集，原⊃误写为membership。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 我们选取 $u\in H^1(\mathbb H^n)$ 为它的一个原像

**正文：**

> 我们选取 $u \in H^1(\mathbb{R}^n)$ 为它的一个原像

**理由：** 此处使用全空间迹满射，原图原像域印Hn；canonical已正确Rn。
