# 勘误：73 Dirichlet 问题与半空间扩张

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $$H^1(\mathbb{R}^n) \xrightarrow{\quad \nabla \quad} L^2(\Omega) \xrightarrow{\quad \nabla \quad} H^{-1}(\Omega).$$

**修正：**

> $$H^1(\mathbb{R}^n) \xrightarrow{\quad \partial_k \quad} L^2(\Omega) \xrightarrow{\quad \partial_k \quad} H^{-1}(\Omega),\quad 1\leqslant k\leqslant n.$$

**理由：** ∇为n分量向量，原链标量L2/H−1类型不匹配；随后证明对各k，最小改箭头为单个偏导且保留全空间限制。

**原文：**

> $$|\langle \partial_k u, \varphi \rangle| = |\langle u, \partial_k \varphi \rangle| \leqslant \|u\|_{L^2} \|\nabla \varphi\|_{L^2} = C \|\nabla \varphi\|_{H^1_0}.$$

**修正：**

> $$|\langle \partial_k u, \varphi \rangle| = |\langle u, \partial_k \varphi \rangle| \leqslant \|u\|_{L^2} \|\nabla \varphi\|_{L^2} = C \|\varphi\|_{H^1_0}.$$

**理由：** H01梯度范数等于φ的L2梯度范数，原又对∇φ取H01要求二阶且错量；改范数参数φ。

**原文：**

> 这就说明 $\nabla u \in H^{-1}(\Omega)$

**修正：**

> 这就说明对每个 $k$，$\partial_k u \in H^{-1}(\Omega)$

**理由：** 前式证明各偏导属于标量H−1，∇整体应在n重直积。沿单分量链统一文字。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \{\varphi_p\}_{p\ge1}\subset H_0^1(\mathbb R^n)
> ```

**正文：**

> $\{\varphi_p\}_{p \geqslant 1} \subset C^\infty_0(\Omega)$

**理由：** 原图分部积分逼近列误取全空间H01，canonical已correct为按定义C0Ω。

**原讲义片段：**

> ```text
> v,\partial_k\in L^2(\Omega)
> ```

**正文：**

> $v, \partial_k v \in L^2(\Omega)$

**理由：** 源图缺偏导的v，canonical已补。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> Dirichet 问题

**修正：**

> Dirichlet 问题

**理由：** 原图Dirichet人名漏l。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> u\in H_2^1(\Omega)
> ```

**正文：**

> $u \in H^1_0(\Omega)$

**理由：** 原图显示H上标1下标2，但上下文预设零边界H01，canonical已规范。

**原讲义片段：**

> ```text
> H_0^{(\Omega)}
> ```

**正文：**

> $u \in H^1_0(\Omega)$

**理由：** 源图f作为泛函的域在Ω位于上标且漏1，canonical已规范为H01Ω。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $C = 2 \|f\|_{H^{-1}}$

**修正：**

> $C = C_2 \|f\|_{H^{-1}}$

**理由：** 489负阶范数以完整H1范数定义，而本节H01仅梯度范数；857等价常数C2依赖Ω，不能任意取2。|f(v)|≤||f||H−1||v||H1≤C2||f||||v||H01。

**原文：**

> 当 $v = u$ 时

**修正：**

> 当 $v = \overline{u}$ 时

**理由：** 第一变量线性内积的Riesz向量为ū，须代v=ū才能得||u||²；原v=u一般复杂数下非范数平方。

**原文：**

> $$\|u\|^2_{H^1_0} \leqslant 2 \|f\|_{H^{-1}} \|u\|_{H^1_0} \implies \|u\|_{H^1_0} \leqslant 2 \|f\|_{H^{-1}},$$

**修正：**

> $$\|u\|^2_{H^1_0} \leqslant C_2 \|f\|_{H^{-1}} \|u\|_{H^1_0} \implies \|u\|_{H^1_0} \leqslant C_2 \|f\|_{H^{-1}},$$

**理由：** 将前句范数等价常数C2同样带入两处，由u0单独或除||u||即可，保留证明。

**原文：**

> $$\|(-\Delta)^{-1}(f)\|_{H^1_0} \leqslant 2 \|f\|_{H^{-1}}.$$

**修正：**

> $$\|(-\Delta)^{-1}(f)\|_{H^1_0} \leqslant C_2 \|f\|_{H^{-1}}.$$

**理由：** 同一解算子上界需Ω依赖C2，连续性结论不变。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> 满足 $u|_{\partial \Omega}$ 的边界条件

**修正：**

> 满足 $u|_{\partial \Omega}=0$ 的边界条件

**理由：** 总结Dirichlet零边界，原图缺等号及0，补命题已经确定的边界条件。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $$
> (\partial_j \varphi_\varepsilon) (x) = (\chi_\varepsilon * (\partial_j \tilde{u})) (x) = \int_{\mathbb{R}^n} \chi_\varepsilon(x - y) \widetilde{\partial_j u}(y) dy.
> $$

**修正：**

> $$
> (\partial_j \varphi_\varepsilon) (x) = (\chi_\varepsilon * (\partial_j \tilde{u})) (x) = \int_{\mathbb{R}^n} (\partial_j\chi_\varepsilon)(x - y) \tilde{u}(y) dy.
> $$

**理由：** 原图首式对全空间x写∂jũ，canonical误把它视作零延拓导数函数，n方向有边界δ。全空间可微卷积应对光滑核求导；随后在上半空间远离边界才可等同零延拓导数。

**原文：**

> $$
> \partial_j \varphi_\varepsilon = \chi_\varepsilon * \widetilde{\partial_j u} \xrightarrow{L^2(\mathbb{R}^n)} \widetilde{\partial_j u},
> $$

**修正：**

> $$
> \chi_\varepsilon * \widetilde{\partial_j u} \xrightarrow{L^2(\mathbb{R}^n)} \widetilde{\partial_j u},
> $$

**理由：** 两端L2卷积全空间收敛正确，但该卷积仅上半空间等于∂jφε，不能全局声称等号，否则零延拓非H1有跳跃δ被抹去。

**原文：**

> $$
> \varphi_\varepsilon \Big|_{\mathbb{H}^n} \xrightarrow{L^2(\mathbb{H}^n)} u, \quad \partial_j \varphi_\varepsilon \Big|_{\mathbb{H}^n} \xrightarrow{L^2(\mathbb{R}^n)} \partial_j u.
> $$

**修正：**

> $$
> \varphi_\varepsilon \Big|_{\mathbb{H}^n} \xrightarrow{L^2(\mathbb{H}^n)} u, \quad \partial_j \varphi_\varepsilon \Big|_{\mathbb{H}^n} \xrightarrow{L^2(\mathbb{H}^n)} \partial_j u.
> $$

**理由：** 限制函数的收敛空间应上半空间，原图最后箭头错全空间Rn。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $$
> \operatorname{Ext}_{\text{Sym}} : H^1 (\mathbb{R}^n) \to H^1 (\mathbb{H}^n)
> $$

**修正：**

> $$
> \operatorname{Ext}_{\text{Sym}} : H^1 (\mathbb{H}^n) \to H^1 (\mathbb{R}^n)
> $$

**理由：** 扩张方向必须半空间到全空间，原照抄Res箭头，与紧后Res∘Ext=idH1Hn类型冲突。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> 是连续的满的线性映射击并且

**正文：**

> 是连续的满的线性映射并且

**理由：** 原图多击字，canonical已去叠字。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $$
> \operatorname{Ext}_{\text{Sym}} : C^\infty(\mathbb{R}^n) \cap H^1(\mathbb{H}^n) \to H^1(\mathbb{H}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ u(x', -x_n), & x_n \leqslant 0. \end{cases}
> $$

**修正：**

> $$
> \operatorname{Ext}_{\text{Sym}} : C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^1(\mathbb{H}^n) \to H^1(\mathbb{R}^n), \quad u \mapsto \tilde{u}(x', x_n) = \begin{cases} u(x', x_n), & x_n \geqslant 0; \\ u(x', -x_n), & x_n \leqslant 0. \end{cases}
> $$

**理由：** 光滑函数的半空间限制为稠密输入，输出为全空间反射；原输出半空间且不同函数域直接交，最小标限制与正确输出。

**原文：**

> $$
> \partial_j \left( \operatorname{Ext}_{\text{Sym}}(u) \right) = \operatorname{Ext}_{\text{Sym}} (\partial_k u), \quad k = 1, 2, \cdots, n - 1.
> $$

**修正：**

> $$
> \partial_k \left( \operatorname{Ext}_{\text{Sym}}(u) \right) = \operatorname{Ext}_{\text{Sym}} (\partial_k u), \quad k = 1, 2, \cdots, n - 1.
> $$

**理由：** 切向偏导两边须同k，原j错指标。

**原文：**

> $$
> \begin{aligned}
> \partial_n \left( \operatorname{Ext}_{\text{Sym}}(u) \right) &= \partial_n \left( \tilde{u}(x', x_n) \mathbf{1}_{x_n > 0} + \tilde{u}(x', -x_n) \mathbf{1}_{x_n < 0} \right) \\
> &= \left( \partial_n F(x', x_n) \mathbf{1}_{x_n > 0} + F dx' \right) - \left( \partial_n F(x', -x_n) \mathbf{1}_{x_n > 0} + F dx' \right) \\
> &= (\mathbf{1}_{x_n > 0} - \mathbf{1}_{x_n < 0}) \left( \operatorname{Ext}_{\text{Sym}}(\partial_n u) \right).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \partial_n \left( \operatorname{Ext}_{\text{Sym}}(u) \right) &= \partial_n \left( \tilde{u}(x', x_n) \mathbf{1}_{x_n > 0} + \tilde{u}(x', -x_n) \mathbf{1}_{x_n < 0} \right) \\
> &= \left( \partial_n F(x', x_n) \mathbf{1}_{x_n > 0} + F dx' \right) - \left( \partial_n F(x', -x_n) \mathbf{1}_{x_n < 0} + F dx' \right) \\
> &= (\mathbf{1}_{x_n > 0} - \mathbf{1}_{x_n < 0}) \left( \operatorname{Ext}_{\text{Sym}}(\partial_n u) \right).
> \end{aligned}
> $$

**理由：** 反射分支位于下半空间，链式导数有负号，第二个示性集合应xn<0，原重复xn>0。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> 由于 $C^\infty(\mathbb{R}^n) \cap H^1(\mathbb{H}^n)$

**修正：**

> 由于 $C^\infty(\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^1(\mathbb{H}^n)$

**理由：** 统一865稠密输入为全空间光滑函数的限制，两个不同函数域直接交不严谨。

**原文：**

> 尽管我们在定义中要求 $\operatorname{Ext}_{\text{Sym}}(u)(x', 0) = 0$

**修正：**

> 尽管我们可以选取一个代表，使得 $\operatorname{Ext}_{\text{Sym}}(u)(x', 0) = 0$

**理由：** 反射定义865光滑输入边界为原函数边界值，并未要求零；Sobolev等价类可在零测集选择点值0而迹未必0，这是该段上下文唯一一致解释。

**原文：**

> $$
> \operatorname{Res}(u) = u \Big|_{x_n = t} \in H^1(\mathbb{R}^{n-1}).
> $$

**修正：**

> $$
> \operatorname{Res}_t(u) = u \Big|_{x_n = t} \in H^{\frac12}(\mathbb{R}^{n-1}).
> $$

**理由：** H1全空间/半空间切片的连续可定义迹是H1/2，不能对每t声称H1；Res_t与边界Res不同。后文定理499亦s−1/2。

**原文：**

> $$
> \mathbb{R}_{t > 0} \to H^1(\mathbb{R}^{n-1}), \quad t \mapsto u \Big|_{x_n = t},
> $$

**修正：**

> $$
> \mathbb{R}_{t > 0} \to H^{\frac12}(\mathbb{R}^{n-1}), \quad t \mapsto u \Big|_{x_n = t},
> $$

**理由：** 连续切片映射目标应H1/2，同一组迹损失半阶。

**原文：**

> $$
> \operatorname{Res}(u) \overset{H^1(\mathbb{R}^{n-1})}{=} \lim_{t \to 0^+} u \Big|_{x_n = t}.
> $$

**修正：**

> $$
> \operatorname{Res}(u) \overset{H^{\frac12}(\mathbb{R}^{n-1})}{=} \lim_{t \to 0^+} u \Big|_{x_n = t}.
> $$

**理由：** 趋边界可在H1/2取极限而非原H1，该收敛正对应下一页定理499。

**原文：**

> $$
> C_b^0 \left( \mathbb{R}, H^s(\mathbb{R}^{n-1}) \right) = \left\{ u : \mathbb{R} \to H^s(\mathbb{R}^{n-1}) \text{连续} \;\middle|\; \text{对任意 } t \in \mathbb{R}, \text{存在 } M, \text{使得 } \|u(t)\|_{H^s(\mathbb{R}^{n-1})} < M \right\}.
> $$

**修正：**

> $$
> C_b^0 \left( \mathbb{R}, H^s(\mathbb{R}^{n-1}) \right) = \left\{ u : \mathbb{R} \to H^s(\mathbb{R}^{n-1}) \text{连续} \;\middle|\; \text{存在 } M>0, \text{使得对任意 } t \in \mathbb{R}, \text{使得 } \|u(t)\|_{H^s(\mathbb{R}^{n-1})} < M \right\}.
> $$

**理由：** Cb应统一有界，原∀t∃M仅点wise有限并不有界，交换量词得定义本意。

**原文：**

> $$
> \begin{array}{c}
> C^\infty (\mathbb{R}^n) \cap H^1 (\mathbb{H}^n) \xrightarrow{\quad \iota \quad} H^1 (\mathbb{H}^n) \\
> \qquad \operatorname{Ext}_{\text{Sym}} \searrow \qquad \quad \downarrow \operatorname{Ext}_{\text{Sym}} \\
> \qquad \quad H^1 (\mathbb{R}^n) \quad \Big\downarrow \text{id} \\
> \qquad \quad \ \downarrow \text{Res} \ \ \Big/ \\
> \qquad \quad H^1 (\mathbb{H}^n)
> \end{array}
> $$

**修正：**

> $$
> \begin{array}{ccc}
> C^\infty (\mathbb{R}^n)|_{\mathbb{H}^n} \cap H^1 (\mathbb{H}^n) & \xrightarrow{\quad \iota \quad} & H^1 (\mathbb{H}^n) \\
> \operatorname{Ext}_{\text{Sym}}\Big\downarrow & & \Big\downarrow\operatorname{Ext}_{\text{Sym}} \\
> H^1 (\mathbb{R}^n) & \xrightarrow{\quad \operatorname{id} \quad} & H^1 (\mathbb{R}^n)
> \end{array}
> \qquad
> \operatorname{Res}\circ\operatorname{Ext}_{\text{Sym}}=\operatorname{id}_{H^1(\mathbb{H}^n)}.
> $$

**理由：** 原图右侧id从上方H1(Hn)曲线通往下方H1(Hn)，canonical布局误把id标成H1(Rn)到H1(Hn)，改变映射类型。保留同一稠密延拓交换关系，并将源图右逆关系明确写为Res∘Ext=idH1(Hn)，同时写清光滑函数先限制半空间。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $$
> C_b^0(\mathbb{R}, X) = \{u : \mathbb{R} \to X \text{连续} \mid \text{对任意 } t \in \mathbb{R}, \text{存在 } M, \text{使得 } \|u(t)\| < M\}.
> $$

**修正：**

> $$
> C_b^0(\mathbb{R}, X) = \{u : \mathbb{R} \to X \text{连续} \mid \text{存在 } M>0, \text{使得对任意 } t \in \mathbb{R}, \text{使得 } \|u(t)\| < M\}.
> $$

**理由：** 同866的Cb统一有界定义，必须∃M∀t。

**原文：**

> $u_k(t) \in C_b^0(\mathbb{R}, X)$

**修正：**

> $u_k \in C_b^0(\mathbb{R}, X)$

**理由：** 连续函数空间元素为函数uk而非取值uk(t)∈X，原类型错。

**原文：**

> $$
> \sum_{k=1}^\infty |||u_k(t)||| < \infty,
> $$

**修正：**

> $$
> \sum_{k=1}^\infty |||u_k||| < \infty,
> $$

**理由：** 三竖线为对函数取sup的范数，绝对收敛要求Σ|||uk|||而非值范数。

[相关正文：73：Dirichlet 问题与半空间扩张](../../03-math-analysis-iii/73-dirichlet.md)

## 数学修正

**原文：**

> $u(t) \in C_b^0(X)$

**修正：**

> $u \in C_b^0(\mathbb{R},X)$

**理由：** 连续有界的是u函数R→X而非u(t)值，补空间域R。

**原文：**

> 对任意的 $u \in H^s(\mathbb{R}^n)$, 通过把它限制

**修正：**

> 对于 $s>\frac12$，对任意的 $u \in H^s(\mathbb{R}^n)$, 通过把它限制

**理由：** 限制到超平面并连续嵌Cb需要s>1/2；下一页870明确条件，本页课程预告原漏。
