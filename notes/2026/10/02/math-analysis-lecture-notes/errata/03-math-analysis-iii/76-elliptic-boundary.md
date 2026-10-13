# 勘误：76 子流形的 Sobolev 空间与椭圆边值问题

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> $\partial\Omega$ 上的 $H^{\frac{1}{2}}(\Omega)$ 空间

**修正：**

> $\partial\Omega$ 上的 $H^{\frac{1}{2}}(\partial\Omega)$ 空间

**理由：** 定义空间的是边界函数与曲面积分；源图此处Ω缺∂，需与定义506同域。

**原文：**

> $$
> \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 = \|u\|_{L^2(\Omega)}^2 + \iint_{\partial\Omega \times \partial\Omega} \frac{|u(x) - u(y)|^2}{|x - y|^n} d\sigma(x)d\sigma(y),
> $$

**修正：**

> $$
> \|u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 = \|u\|_{L^2(\partial\Omega)}^2 + \iint_{\partial\Omega \times \partial\Omega} \frac{|u(x) - u(y)|^2}{|x - y|^n} d\sigma(x)d\sigma(y),
> $$

**理由：** 本页明确u∈L²(∂Ω)，复述定义506的首项应为边界L²而非内部域Ω。

**原文：**

> $$
> \Phi_j : U_j \cap \partial\Omega \to V_j^+ \subset \mathbb{R}^n_{x_n \ge 0},
> $$

**修正：**

> $$
> \Phi_j : U_j \cap \overline{\Omega} \to V_j^+ \subset \mathbb{R}^n_{x_n \ge 0},
> $$

**理由：** Φj是n维区域边界附近的展平图，随后φj才是其(n−1)维边界限制；原图把Φ的域写∂Ω产生维数矛盾，应是闭区域局部与闭半空间的微分同胚。

**原文：**

> $$
> |||u|||_{H^{\frac{1}{2}}(\Omega), \mathcal{U}}^2 = \sum_{j \le N} \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\Omega)}^2,
> $$

**修正：**

> $$
> |||u|||_{H^{\frac{1}{2}}(\partial\Omega), \mathcal{U}}^2 = \sum_{j \le N} \|\chi_j \cdot u\|_{H^{\frac{1}{2}}(\partial\Omega)}^2,
> $$

**理由：** 这是定义506的边界Gagliardo范数有限局部化，两端Ω均应带边界符号。

**原文：**

> 我们上次证明了 $|||\cdot|||_{H^{\frac{1}{2}}(\Omega), \mathcal{U}}$ 与范数 $\|\cdot\|_{H^{\frac{1}{2}}(\Omega)}$ 是等价的。

**修正：**

> 我们上次证明了 $|||\cdot|||_{H^{\frac{1}{2}}(\partial\Omega), \mathcal{U}}$ 与范数 $\|\cdot\|_{H^{\frac{1}{2}}(\partial\Omega)}$ 是等价的。

**理由：** 所引上次局部化范数定义在边界而非Ω内部，原图连写Ω抄误。

**原文：**

> 我们这次证明 $|||\cdot|||_{H^{\frac{1}{2}}(\Omega), \mathcal{U}}$ 与 $\|\cdot\|_{H^{\frac{1}{2}}(\Omega), \mathcal{U}}$ 等价。

**修正：**

> 我们这次证明 $|||\cdot|||_{H^{\frac{1}{2}}(\partial\Omega), \mathcal{U}}$ 与 $\|\cdot\|_{H^{\frac{1}{2}}(\partial\Omega), \mathcal{U}}$ 等价。

**理由：** 坐标范数已经前文明确以∂Ω为域，本句两个范数都须同一个边界函数空间。

**原文：**

> $\operatorname{supp}(u_j) \subset U_j \cap \Omega$

**修正：**

> $\operatorname{supp}(u_j) \subset U_j \cap \partial\Omega$

**理由：** uj为仅定义于边界的χju，支集不可能落在与边界不交的开放Ω内部；源图漏∂。

**原文：**

> $$
> \phi_j : U_i \cap (\partial\Omega) \to V' \subset \mathbb{R}^{n-1}.
> $$

**修正：**

> $$
> \phi_j : U_j \cap (\partial\Omega) \to V' \subset \mathbb{R}^{n-1}.
> $$

**理由：** 本段固定j并用φj和uj配套，原图最后域标Ui错写应Uj。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> $$
> \|u_j\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 = \iint_{\phi_j^{-1}(V') \times \phi_j^{-1}(V')} \frac{|u_j(x) - u_j(x')|^2}{|x - x'|^n} d\sigma(x)d\sigma(x')
> $$

**修正：**

> $$
> \|u_j\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 \approx \|u_j\|_{L^2(\partial\Omega)}^2 + \iint_{\phi_j^{-1}(V') \times \phi_j^{-1}(V')} \frac{|u_j(x) - u_j(x')|^2}{|x - x'|^n} d\sigma(x)d\sigma(x')
> $$

**理由：** 定义506是L²加Gagliardo半范数，原图漏L²且只积分单个图域；uj紧支在图内，域外积分由L²控制，故图内表达与全范数仅等价而非相等。

**原文：**

> $$
> \approx \iint_{V' \times V'} \frac{\left| \left( u_j \circ \phi_j^{-1} \right)(y) - \left( u_j \circ \phi_j^{-1} \right)(y') \right|^2}{\left| \phi_j^{-1}(y) - \phi_j^{-1}(y') \right|^n} dy dy'
> $$

**修正：**

> $$
> \approx \|u_j \circ \phi_j^{-1}\|_{L^2(V')}^2 + \iint_{V' \times V'} \frac{\left| \left( u_j \circ \phi_j^{-1} \right)(y) - \left( u_j \circ \phi_j^{-1} \right)(y') \right|^2}{\left| \phi_j^{-1}(y) - \phi_j^{-1}(y') \right|^n} dy dy'
> $$

**理由：** 边界L²项在有上下界的Jacobian坐标变换下等价于坐标L²项，必须和前式保持；仅半范数不能代表完整H1/2范数。

**原文：**

> $$
> \|u_j\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 \approx \iint_{V' \times V'} \frac{\left| \left( u_j \circ \phi_j^{-1} \right)(y) - \left( u_j \circ \phi_j^{-1} \right)(y') \right|^2}{|y - y'|^{n-1+2 \times \frac{1}{2}}} dy dy' \approx \|u_j \circ \phi_j^{-1}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})}.
> $$

**修正：**

> $$
> \|u_j\|_{H^{\frac{1}{2}}(\partial\Omega)}^2 \approx \|u_j \circ \phi_j^{-1}\|_{L^2(V')}^2 + \iint_{V' \times V'} \frac{\left| \left( u_j \circ \phi_j^{-1} \right)(y) - \left( u_j \circ \phi_j^{-1} \right)(y') \right|^2}{|y - y'|^{n-1+2 \times \frac{1}{2}}} dy dy' \approx \|u_j \circ \phi_j^{-1}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})}^2.
> $$

**理由：** 前面坐标距离比较只改变Gagliardo分母，保留L²项；两端都是二次齐次的范数平方，原图终端漏平方会在ε缩放下矛盾。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> $\left( H^{\frac{1}{2}}(\Omega), \|\cdot\|_{H^{\frac{1}{2}}(\Omega)} \right)$

**修正：**

> $\left( H^{\frac{1}{2}}(\partial\Omega), \|\cdot\|_{H^{\frac{1}{2}}(\partial\Omega)} \right)$

**理由：** 命题507承接定义506的边界函数空间及完备性证明，函数域须为∂Ω，两处源图遗漏∂。

**原文：**

> $$
> (u_1, u_2)_{H^{\frac{1}{2}}(\partial\Omega)}^2 = (u_1, u_2)_{L^2(\partial\Omega)} + \iint_{\partial\Omega \times \partial\Omega} \frac{(u_1(x) - u_2(y))\left( \overline{u_1(x) - u_2(y)} \right)}{|x - y|^n} d\sigma(x)d\sigma(y).
> $$

**修正：**

> $$
> (u_1, u_2)_{H^{\frac{1}{2}}(\partial\Omega)} = (u_1, u_2)_{L^2(\partial\Omega)} + \iint_{\partial\Omega \times \partial\Omega} \frac{(u_1(x) - u_1(y))\left( \overline{u_2(x) - u_2(y)} \right)}{|x - y|^n} d\sigma(x)d\sigma(y).
> $$

**理由：** 内积需第一变量线性第二变量共轭线性且u1=u2时恢复平方范数；源图误将两个增量都写u1(x)−u2(y)，且左边误平方，现由范数极化唯一纠正。

**原文：**

> $u_1, u_2 \in H^{\frac{1}{2}}(\Omega)$

**修正：**

> $u_1, u_2 \in H^{\frac{1}{2}}(\partial\Omega)$

**理由：** 内积前面明确是边界函数积分，u1和u2必须在边界H1/2空间，源图再次漏∂。

**原文：**

> $$
> u_j\big|_{\partial\Omega} \circ \phi_j^{-1} = (u_j \circ \Phi_j)\big|_{y_n=0}.
> $$

**修正：**

> $$
> u_j\big|_{\partial\Omega} \circ \phi_j^{-1} = (u_j \circ \Phi_j^{-1})\big|_{y_n=0}.
> $$

**理由：** Φj从物理x映到展平y，故y坐标的函数为uj∘Φj逆，边界限制φj也用逆，与889图定义相符。

**原文：**

> $$
> \|u_j\big|_{\partial\Omega}\|_{H^{\frac{1}{2}}(\partial\Omega)} = \|u_j\big|_{\partial\Omega} \circ \phi_j^{-1}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})} = \|(u_j \circ \Phi_j)\big|_{y_n=0}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})}
> $$

**修正：**

> $$
> \|u_j\big|_{\partial\Omega}\|_{H^{\frac{1}{2}}(\partial\Omega)} \approx \|u_j\big|_{\partial\Omega} \circ \phi_j^{-1}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})} = \|(u_j \circ \Phi_j^{-1})\big|_{y_n=0}\|_{H^{\frac{1}{2}}(\mathbb{R}^{n-1})}
> $$

**理由：** 889–890证明物理边界范数与坐标范数仅等价，通常Jacobians不为1，首个等号应约等号；y坐标pullback再次须Φj逆。

**原文：**

> $$
> \le C \|u_j \circ \Phi_j\|_{H^1(\mathbb{H}^n)} \le C' \|u_j\|_{H^1(\Omega)} \le C'' \|u\|_{H^1(\Omega)}.
> $$

**修正：**

> $$
> \le C \|u_j \circ \Phi_j^{-1}\|_{H^1(\mathbb{H}^n)} \le C' \|u_j\|_{H^1(\Omega)} \le C'' \|u\|_{H^1(\Omega)}.
> $$

**理由：** 对半空间函数应用迹估计，必须是物理函数经逆坐标变换后的uj∘Φj逆，源图错方向。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> $f \in H^{\frac{1}{2}}(\Omega)$

**修正：**

> $f \in H^{\frac{1}{2}}(\partial\Omega)$

**理由：** 迹映射的满射目标在边界，原图f所属空间漏∂，与紧接fj边界空间矛盾。

**原文：**

> 存在 $u \in H^1(V_j)$ 并且 $\operatorname{supp}(u) \in H^1(V_j)$

**修正：**

> 存在 $u \in H^1(V_j^+)$ 并且 $u$ 的支集避开图域的人工边界，从而可以在拉回后于图外作零延拓

**理由：** Vj是(n−1)维边界坐标域，抬升函数应在n维Vj+，源图supp(u)属于函数空间毫无类型意义。半空间抬升再乘等于1于fj支集的图内截断，使支集避开人工边界即可拉回并零延拓。

**原文：**

> 我们还有如下的正合列：

**修正：**

> 记 $\nu$ 为边界外单位法向的光滑延拓，$\operatorname{Res}_j u=(\partial_\nu^j u)|_{\partial\Omega}$。我们还有如下的正合列：

**理由：** k≥2时H0k要求所有0至k−1阶法向迹同时为零；需明确定义与目标直和匹配的迹映射，单值迹的连续满射结论仍正确。

**原文：**

> $$
> 0 \to H_0^k(\Omega) \xrightarrow{\iota} H^k(\Omega) \xrightarrow{\operatorname{Res}} H^{k-\frac{1}{2}}(\partial\Omega) \to 0.
> $$

**修正：**

> $$
> 0 \to H_0^k(\Omega) \xrightarrow{\iota} H^k(\Omega) \xrightarrow{(\operatorname{Res}_j)_{0\le j\le k-1}} \bigoplus_{j=0}^{k-1} H^{k-j-\frac{1}{2}}(\partial\Omega) \to 0.
> $$

**理由：** 原图k≥2单值零迹不能推出H0k，如展平图xnχ值迹零而一阶法向迹不零；全法向jet0至k−1同时零恰为H0k核，分量Sobolev阶数每次微分降1，与878半空间修复和局部图一致。

**原文：**

> $u \in H_0^1(\Omega))$

**修正：**

> $u \in H_0^1(\Omega)$

**理由：** 原图空间括号多写一个右括号，配对后为已证明零边值空间H01Ω。

## 未决数学问题

**原文：**

> $\{\varphi_p \circ \Phi_j\}_{p \ge 1}$ 在 $H^1(\Omega)$ 中逼近 $u_j$

**问题：** 半空间任意C0∞逼近列的支集未保证在图域Vj+，直接复合Φj不能全Ω定义。正确证明可再乘图内固定截断等于1于uj支集并零延拓，结论有效；原图省略这个局部化步骤，保留证明文字并报告需补说明。

**原文：**

> 这个定理的证明可以原封不动地用来证明：

**问题：** 全法向jet的同时满射性需半空间显式右逆并在边界图中作各阶jet的三角校正，k=1的单值迹证明不能原封不动代替。对应878已经给出独立Fourier构造，光滑边界图可局部化拼接，修后命题正确；原论证省略需在报告保留。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> 存在唯一的 $u \in H^1(\Omega))$ 解

**修正：**

> 存在唯一的 $u \in H^1(\Omega)$ 解

**理由：** 定理510原图空间括号多一个右括号，数学命题H1解加零迹条件保持不变。

**原文：**

> 存在唯一的 $u \in H^1(\Omega))$, 使得

**修正：**

> 存在唯一的 $u \in H^1(\Omega)$, 使得

**理由：** 定理511原图空间括号重复，删除多余右括号保持原调和边值结论。

**原文：**

> $$
> -\Delta(\chi_j \cdot u) = -\chi_j \cdot f - 2\nabla \chi_j \cdot \nabla u - \chi_j \cdot \Delta u.
> $$

**修正：**

> $$
> -\Delta(\chi_j \cdot u) = \chi_j \cdot f - 2\nabla \chi_j \cdot \nabla u - u \cdot \Delta \chi_j.
> $$

**理由：** 由−Δu=f及Leibniz公式，正确为χjf−2∇χj∇u−uΔχj，原首项误用f且符号错误，使两个f项相抵，末项需乘子二阶导数。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> $\nabla \chi_j \cdot \nabla u, \chi_j \cdot \Delta u \in H^{k-1}$

**修正：**

> $\nabla \chi_j \cdot \nabla u, u \cdot \Delta\chi_j \in H^{k-1}$

**理由：** 配合前页Leibniz修复，需控制的低阶交换子是uΔχj和∇χj∇u；由u∈Hk及χ光滑两项均在Hk−1，原χΔu与所述低阶归纳用途不匹配。

**原文：**

> $$
> \sum_{1 \leqslant i, j \leqslant N} \delta^{ij} \partial_i \partial_j v(\Phi(x)) = f(\Phi(x)),
> $$

**修正：**

> $$
> -\sum_{1 \leqslant i, j \leqslant n} \delta^{ij} \partial_{x^i} \partial_{x^j}(v\circ\Phi)(x) = f(x),
> $$

**理由：** 原方程−Δu=f且u=v∘Φ，物理x处导数必须作用于整个复合函数，指标至n并保留负号、右f(x)；原图把N、复合导数、符号和f自变量混写。

**原文：**

> $$
> \sum_{1 \leqslant i, j \leqslant n} \delta^{ij} \sum_{1 \leqslant k, l \leqslant n} \left( \frac{\partial \Phi^k}{\partial x^i}(\Phi(x)) \frac{\partial \Phi^l}{\partial x^i}(\Phi(x)) \frac{\partial^2 v}{\partial y^k \partial y^l}(\Phi(x)) + \frac{\partial^2 \Phi^k}{\partial x^i \partial x^j}(\Phi(x)) \frac{\partial v}{\partial y^k}(\Phi(x)) \right) = f(\Phi(x)).
> $$

**修正：**

> $$
> -\sum_{1 \leqslant i, j \leqslant n} \delta^{ij} \left( \sum_{1 \leqslant k, l \leqslant n} \frac{\partial \Phi^k}{\partial x^i}(x) \frac{\partial \Phi^l}{\partial x^j}(x) \frac{\partial^2 v}{\partial y^k \partial y^l}(\Phi(x)) + \sum_{1 \leqslant k \leqslant n} \frac{\partial^2 \Phi^k}{\partial x^i \partial x^j}(x) \frac{\partial v}{\partial y^k}(\Phi(x)) \right) = f(x).
> $$

**理由：** 二阶复合链式规则唯一决定此式：Φ导数在x、第二因子用j导数，一阶项只求和k避免l重复n倍；v导数在Φ(x)，整体负号及f(x)随原−Δu=f。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> 并且令 $\psi(y) = \varphi(\Phi^{-1}(y))$, 我们有

**修正：**

> 并且令 $\psi(y) = \varphi(\Phi^{-1}(y))$, 其中 $x=\Phi^{-1}(y)$，我们有

**理由：** 换元积分全部以y为变量，显示式Φ的导数仍用x作简写；必须明确x=Φ逆(y)，下文bkl定义也证实此关系。

**原文：**

> $$
> (b^{kl}) = {}^t (\operatorname{Jac}(\Phi)) \cdot I \cdot (\operatorname{Jac}(\Phi)).
> $$

**修正：**

> $$
> (b^{kl}(y)) = |\operatorname{Jac}\Phi^{-1}(y)| J(y)\,{}^tJ(y), \qquad J_{kj}(y)=\frac{\partial\Phi^k}{\partial x^j}(\Phi^{-1}(y)).
> $$

**理由：** 本页逐分量定义含正Jacobian密度，源图矩阵式漏该因子和评价点；显式定义输出行输入列的J后JJ转置恰等于sum_j ∂jΦk∂jΦl，避免未说明Jac矩阵转置约定。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \nabla_k(v\circ\Phi(x))\cdot\overline{\nabla_k(\psi\circ\Phi(x))}
> ```

**正文：**

> $$
> \int_{V_+} \nabla(v \circ \Phi(x)) \cdot \overline{\nabla(\psi \circ \Phi(x))} |\operatorname{Jac} \Phi^{-1}(y)| dy = \int_{V_+} f(\Phi^{-1}(y)) \overline{\varphi(\Phi^{-1}(y))} |\operatorname{Jac} \Phi^{-1}(y)| dy.
> $$

**理由：** 首行源图梯度带无定义下标k，而随后显式求和j显示普通梯度内积；canonical已经去掉不明k，数学正确保留。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> $$
> B\left(\frac{\tau_t v - v}{t}, \psi\right) = B\left(v, \frac{\tau_{-t}\psi - \psi}{t}\right) + \underbrace{\sum_{1 \leqslant k, l \leqslant n} \int_{V_+} (\tau_{-t}b^{kl}(y) - b^{kl}(y)) \frac{\partial v(y)}{\partial y^k} \overline{\frac{\partial \tau_{-t}\psi(y)}{\partial y^l}} dy}_{I_t}.
> $$

**修正：**

> $$
> B\left(\frac{\tau_t v - v}{t}, \psi\right) = B\left(v, \frac{\tau_{-t}\psi - \psi}{t}\right) + \underbrace{\sum_{1 \leqslant k, l \leqslant n} \int_{V_+} \frac{\tau_{-t}b^{kl}(y) - b^{kl}(y)}{t} \frac{\partial v(y)}{\partial y^k} \overline{\frac{\partial \tau_{-t}\psi(y)}{\partial y^l}} dy}_{I_t}.
> $$

**理由：** 上一式计算的是τtv，转换为(τtv−v)/t必须把交换子也除以t；光滑b均值定理给商一致有界，后文估计正是该差商。

**原文：**

> $$
> \begin{aligned}
> B\left(\frac{\tau_t v - v}{t}, \psi\right) &\leqslant \left| B\left(v, \frac{\tau_{-t}\psi - \psi}{t}\right) \right| + I_t \\
> &\leqslant C \left( \|v\|_{H^1} \|\psi\|_{H^1} + \|F\|_{L^2} \left\| \frac{\tau_{-t}\psi(y) - \psi(y)}{t} \right\|_{L^2} \right).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left|B\left(\frac{\tau_t v - v}{t}, \psi\right)\right| &\leqslant \left| B\left(v, \frac{\tau_{-t}\psi - \psi}{t}\right) \right| + |I_t| \\
> &\leqslant C \left( \|v\|_{H^1} \|\psi\|_{H^1} + \|F\|_{L^2} \left\| \frac{\tau_{-t}\psi(y) - \psi(y)}{t} \right\|_{L^2} \right).
> \end{aligned}
> $$

**理由：** B(v,ψ)与It一般为复数，不能直接比较大小；根据原等式应用三角不等式需两项的绝对值，后文Cauchy估计也用|It|。

**原文：**

> $$
> B\left(\frac{\tau_t v - v}{t}, \psi\right) \leqslant C (\|v\|_{H^1} + \|F\|_{L^2}) \|\psi\|_{H^1_0}.
> $$

**修正：**

> $$
> \left|B\left(\frac{\tau_t v - v}{t}, \psi\right)\right| \leqslant C (\|v\|_{H^1} + \|F\|_{L^2}) \|\psi\|_{H^1_0}.
> $$

**理由：** 对任意复试验函数ψ二次型配对不一定为实数，前面绝对值估计传到最后仍需|B|，取ψ差商后正性保证应用正确。

**原文：**

> $$
> \begin{aligned}
> \left\| \frac{\tau_{-t}\psi(y) - \psi(y)}{t} \right\|_{L^2}^2 &\leqslant \int_{\mathbb{R}^n} \left| \frac{e^{i t \xi_1} - 1}{t} \right|^2 |\hat{\psi}(\xi)|^2 d\xi \\
> &\leqslant \int_{\mathbb{R}^n} |\xi_1|^2 |\hat{\psi}(\xi)|^2 d\xi \leqslant \|\psi\|_{H^1_0}^2.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \left\| \frac{\tau_{-t}\psi(y) - \psi(y)}{t} \right\|_{L^2}^2 &\leqslant \frac{1}{(2\pi)^n}\int_{\mathbb{R}^n} \left| \frac{e^{i t \xi_1} - 1}{t} \right|^2 |\hat{\psi}(\xi)|^2 d\xi \\
> &\leqslant \frac{1}{(2\pi)^n}\int_{\mathbb{R}^n} |\xi_1|^2 |\hat{\psi}(\xi)|^2 d\xi \leqslant \|\psi\|_{H^1_0}^2.
> \end{aligned}
> $$

**理由：** 本书逆Fourier采用(2π)−n约定，因此∫|ξ1|²|hatψ|²=(2π)^n||∂1ψ||²，原最后≤梯度范数漏常数；两频率积分保留Plancherel因子使差商≤梯度范数正确。

## 未决数学问题

**原文：**

> $$
> \begin{aligned}
> B(\tau_t v, \psi) &= \sum_{1 \leqslant k, l \leqslant n} \int_{V_+} b^{kl}(y) \frac{\partial v(y_1 + t, \cdots)}{\partial y^k} \overline{\frac{\partial \psi(y)}{\partial y^l}} dy \\
> &= \sum_{1 \leqslant k, l \leqslant n} \int_{V_+} b^{kl}(y_1 - t, \cdots) \frac{\partial v(y)}{\partial y^k} \overline{\frac{\partial \psi(y_1 - t, \cdots)}{\partial y^l}} dy \\
> &= \sum_{1 \leqslant k, l \leqslant n} \int_{V_+} b^{kl}(y) \frac{\partial v(y)}{\partial y^k} \overline{\frac{\partial \tau_{-t}\psi(y)}{\partial y^l}} dy \\
> &\quad + \sum_{1 \leqslant k, l \leqslant n} \int_{V_+} (\tau_{-t}b^{kl}(y) - b^{kl}(y)) \frac{\partial v(y)}{\partial y^k} \overline{\frac{\partial \tau_{-t}\psi(y)}{\partial y^l}} dy.
> \end{aligned}
> $$

**问题：** 图域V+并非切向平移不变，证明必须先将v零延拓至半空间，并用图内截断处理平移后试验函数以避开人工边界；局部化支集使这一步可严格完成，原图略去，后页已将参数条件修为足够小的非零t。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> 由于 $v \in H_0^1(V_+)$，我们知道 $\frac{\tau_t v - v}{t} \in H_0^1(V_+)$

**修正：**

> 由于 $v \in H_0^1(V_+)$ 且其支集避开图域的人工边界，对充分小的非零 $t$，我们知道 $\frac{\tau_t v - v}{t} \in H_0^1(V_+)$

**理由：** V+为局部半球图域，切向平移不保持人工侧边界；由局部化v支集避开侧边界，只有足够小的非零t才保持零迹空间与差商定义。

**原文：**

> 使得对任意的 $t$，我们都有

**修正：**

> 使得对任意充分小的非零 $t$，我们都有

**理由：** 差商在t=0无定义且局部V+不对任意平移稳定，前段论证只需一致控制t趋零的小非零参数。

**原文：**

> $$
> \sum_{1 \leqslant i,j \leqslant n} \delta^{ij} \sum_{1 \leqslant k,l \leqslant n} \left( \frac{\partial \Phi^k}{\partial x^i}(\Phi(x)) \frac{\partial \Phi^l}{\partial x^i}(\Phi(x)) \frac{\partial^2 v}{\partial y^k \partial y^l}(\Phi(x)) + \frac{\partial^2 \Phi^k}{\partial x^i \partial x^j}(\Phi(x)) \frac{\partial v}{\partial y^k}(\Phi(x)) \right) = f(\Phi(x)).
> $$

**修正：**

> $$
> -\sum_{1 \leqslant i,j \leqslant n} \delta^{ij} \left( \sum_{1 \leqslant k,l \leqslant n} \frac{\partial \Phi^k}{\partial x^i}(x) \frac{\partial \Phi^l}{\partial x^j}(x) \frac{\partial^2 v}{\partial y^k \partial y^l}(\Phi(x)) + \sum_{1 \leqslant k \leqslant n} \frac{\partial^2 \Phi^k}{\partial x^i \partial x^j}(x) \frac{\partial v}{\partial y^k}(\Phi(x)) \right) = f(x).
> $$

**理由：** 重复894的同一链式展开，需要同样负号、Φ系数在x、第二导数指标j、一阶项不重复l与f(x)，由原−Δu=f唯一确定。

**原文：**

> $$
> \sum_{1 \leqslant k,l \leqslant n} \left( b^{kl}(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) + \underbrace{\sum_{i=1}^n \frac{\partial^2 \Phi^k}{\partial x_i^2}(y) \frac{\partial v}{\partial y^k}(y)}_{\in L^2} \right) = \underbrace{f(y)}_{\in L^2}.
> $$

**修正：**

> $$
> \sum_{1 \leqslant k,l \leqslant n} \left( b^{kl}(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) + \underbrace{(\partial_{y^l}b^{kl})(y) \frac{\partial v}{\partial y^k}(y)}_{\in L^2} \right) = \underbrace{-F(y)}_{\in L^2}.
> $$

**理由：** 895弱式分部积分确定−Σkl∂l(bkl∂kv)=F，展开后二阶项与低阶项如修后式。原Φ二阶导在y及f(y)既漏换元与密度又重复l；用现有b和F直接表达唯一且更小。

**原文：**

> $$
> \sum_{1 \leqslant k,l \leqslant n} \left( b^{kl}(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) + \sum_{i=1}^n \frac{\partial^2 \Phi^k}{\partial x_i^2}(y) \frac{\partial v}{\partial y^k}(y) \right) = f(y),
> $$

**修正：**

> $$
> \sum_{1 \leqslant k,l \leqslant n} \left( b^{kl}(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) + (\partial_{y^l}b^{kl})(y) \frac{\partial v}{\partial y^k}(y) \right) = -F(y),
> $$

**理由：** 高阶归纳重复同一强方程，须与895弱式及本页前式一致：二阶和低阶来自散度展开，右端−F。

**原文：**

> $$
> \sum_{1 \leqslant k,l \leqslant n} b^{kl}(y) \frac{\partial^2 (\partial_j v)}{\partial y^k \partial y^l}(y) = - \sum_{1 \leqslant k,l \leqslant n} (\partial_j b^{kl})(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) - \partial_j \left( \sum_{i=1}^n \frac{\partial^2 \Phi^k}{\partial x_i^2}(y) \frac{\partial v}{\partial y^k}(y) \right) + \partial_j f(y).
> $$

**修正：**

> $$
> \sum_{1 \leqslant k,l \leqslant n} b^{kl}(y) \frac{\partial^2 (\partial_j v)}{\partial y^k \partial y^l}(y) = - \sum_{1 \leqslant k,l \leqslant n} (\partial_j b^{kl})(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) - \partial_j \left( \sum_{1 \leqslant k,l \leqslant n} (\partial_{y^l}b^{kl})(y) \frac{\partial v}{\partial y^k}(y) \right) - \partial_j F(y).
> $$

**理由：** 对刚校正的Σbklvkl+Σ(∂lbkl)vk=−F求∂j，再移项唯一给此式；原低阶项游离k、错误Φ(y)及+∂jf应同步纠正。

[相关正文：子流形的 Sobolev 空间与椭圆边值问题](../../03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898.md)

## 数学修正

**原文：**

> 由于 $\partial_j$ 是和边界 $\partial V_+$ 平行方向的导数

**修正：**

> 由于 $\partial_j$ 是和平面边界 $\{y_n=0\}$ 平行方向的导数

**理由：** 切向方向只平行展平后的真实边界yn=0，不平行半球图域的人工侧边界；后者由支集局部化避开。

**原文：**

> $\varphi \in C^\infty(\mathbb{R}^n) \cap H^1(\mathbb{H})$

**修正：**

> $\varphi \in C^\infty(\mathbb{R}^n) \cap H^2(\mathbb{H})$

**理由：** 需要对φ和其一阶导数同时应用H1迹；光滑且仅H1不保证导数H1或其H1/2迹，原论证此处至少H2。

**原文：**

> 对于我们有

**修正：**

> 我们有

**理由：** 原图此处“对于我们有”多写“对于”，去掉后与前面“对于任意”成句。

**原文：**

> 如果 $v \in H_0^1(V_+)$，那么，$\operatorname{Res}(\partial_j v) = 0$

**修正：**

> 如果 $v \in H^k(V_+) \cap H_0^1(V_+)$ 且 $k\ge2$，那么，$\operatorname{Res}(\partial_j v) = 0$

**理由：** v仅H01时∂jv一般只有L²无法定义H1迹；此段高阶归纳已有k≥2和vHk，明示该必要前提后迹交换与H01结论成立。

**原文：**

> 最终，为了说明 $v \in H^k(V_+)$

**修正：**

> 最终，为了说明 $v \in H^{k+1}(V_+)$

**理由：** 本段已经假设v∈Hk，要证明目标为Hk+1，紧接唯一缺的导数∂n^(k+1)明确确认原k漏+1。

**原文：**

> $$
> b^{nn}(y) \frac{\partial^2 v}{\partial y_n \partial y_n}(y) = - \sum_{(k,l) \neq (n,n)} b^{kl}(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) - \sum_{1 \leqslant k,l,i \leqslant n} \frac{\partial^2 \Phi^k}{\partial x_i^2}(y) \frac{\partial v}{\partial y^k}(y) + f(y).
> $$

**修正：**

> $$
> b^{nn}(y) \frac{\partial^2 v}{\partial y_n \partial y_n}(y) = - \sum_{(k,l) \neq (n,n)} b^{kl}(y) \frac{\partial^2 v}{\partial y^k \partial y^l}(y) - \sum_{1 \leqslant k,l \leqslant n} (\partial_{y^l}b^{kl})(y) \frac{\partial v}{\partial y^k}(y) - F(y).
> $$

**理由：** 从895弱式的散度强方程和897成组修复孤立bnnvnn，低阶Σ(∂lbkl)vk与右−F必须一致，避免源图Φ误评价及额外l重复求和。

[相关正文：76.1：习题（利用变分与Riesz表示定理解微分方程）：一个弹性力学的模型](../../03-math-analysis-iii/76-elliptic-boundary/76-03-p0899-0899.md)

## 数学修正

**原文：**

> $c(x) \in C^0(\Omega)$

**修正：**

> $c(x) \in C^0(\overline{\Omega})$

**理由：** 内积Q要对全V有定义且有界，Ω内部连续不保证边界附近有界，如c=dist(x,∂Ω)^−6可使正c的积分发散；光滑有界域上连续至闭域保证所需有界乘子。

**原文：**

> $$
> Q(u, v) = \int_{\Omega} \Delta u \Delta v + c(x)uv dx
> $$

**修正：**

> $$
> Q(u, v) = \int_{\Omega} \Delta u\,\overline{\Delta v} + c(x)u\overline{v}\, dx
> $$

**理由：** 源图在Δv和v上均明确印有共轭横线，canonical遗漏；补回后Q才是复空间上Hermitian正内积，与此前Riesz约定一致。

**原文：**

> $u_2 \in H^{\frac{3}{2}}(\Omega)$，$u_0 \in H^{\frac{7}{2}}(\Omega)$

**修正：**

> $u_2 \in H^{\frac{3}{2}}(\partial\Omega)$，$u_0 \in H^{\frac{7}{2}}(\partial\Omega)$

**理由：** u2和u0是Δu及u的边界值，H4内部解的迹分别在H3/2和H7/2边界空间，源图两处Ω遗漏∂。

## 未决数学问题

**原文：**

> 5) 如果只假设 $c(x)$ 是实值函数，如何给出方程的一个解？

**问题：** 任意实c下并非任意f均可解：取Dirichlet第一本征对−Δφ1=λ1φ1、c=−λ1²，Navier边值使φ1在核，f=φ1不满足正交相容条件。需讨论Fredholm可解条件而不能保证总有解；这是作业询问可能包含的分析，保留原题并报告歧义，不新增答案。

**原文：**

> 6) 当 $c(x)$ 是实数值的时候，试解释如何构造如下方程的解：

**问题：** 任意实c的非齐次Navier数据先抬升再求零边值问题，仍须核正交相容条件；负谱反例同第5问，因此题目若意指无条件总能构造即错误，保留作为需澄清的可解性练习。
