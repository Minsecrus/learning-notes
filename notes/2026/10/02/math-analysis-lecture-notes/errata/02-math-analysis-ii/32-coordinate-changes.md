# 勘误：32 坐标变换、多元 Taylor 展开与子流形

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> 如果对任意的 $x \in \Omega$，$f(x) \neq 0$

**修正：**

> 如果对任意的 $x \in \Omega_1$，$f(x) \neq 0$

**理由：** 本组三条性质的函数域均为Ω1，f∈C∞(Ω1)，原图条件误用未在该段指定的Ω；非零量词必须遍历f的同一域。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> 这个等价性是用光滑的双射定义的

**修正：**

> 这个等价性是用双射及其光滑的逆映射定义的，且双射本身也光滑

**理由：** [坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)定义要求正逆都光滑，并立即给出x↦x³的光滑双射但逆不光滑反例；本页仅光滑双射的复述缺少逆条件，补足双向光滑要求而不改变定义。

**原文：**

> 第二种是 $f^{-1}(p)$

**修正：**

> 第二种是 $\Phi^{-1}(p)$

**理由：** 本段坐标变换记为Φ，同一句坐标公式明确使用Φ^-1(p)；f在下段才被定义为Ω2上的实值函数，不能以其逆来给参数点。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \Phi(x_1,\cdots,x_2)
> ```

**正文：**

> $\Phi(x_1, \cdots, x_n)$

**理由：** 原图给n维参数坐标后写Phi的最后变量x2，紧随同页第二次用xn且地图定义为n维。canonical已有xn，保留正确输入数。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> 连续映射的符合仍然连续

**修正：**

> 连续映射的复合仍然连续

**理由：** 该句用的是f与Φ的复合函数连续性，原图数学操作名称误写符合，统一为前后一直使用的复合。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 未决数学问题

**原文：**

> Hasse 算子

**问题：** 二阶微分对称通常称Hesse/Hessian，原图用Hasse；仅专名拼写差异暂不强改数学正文。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> 对任意的 $h, \ell \in \mathbb{R}$，定义

**修正：**

> 对充分小的 $h, \ell \in \mathbb{R}$，定义

**理由：** f只定义在开集Ω，固定(x,y,Z)后四点需均在Ω；选局部充分小增量可保证四点合法，原图全体实增量无此保证。

**原文：**

> $\lim_{(k, \ell) \to 0} \frac{\Delta(h, \ell)}{h\ell}$

**修正：**

> $\lim_{(h, \ell) \to 0} \frac{\Delta(h, \ell)}{h\ell}$

**理由：** 四点差商自始至终以h和ℓ为变量，k没有在该证明中定义，原图联合极限变量需统一为h、ℓ。

**原文：**

> $$
> \mathbb{R}^2 - (0, 0) \to \mathbb{R}, \ \ (h, \ell) \to \frac{\Delta(h, \ell)}{h\ell},
> $$

**修正：**

> $$
> \{(h,\ell):0<|h|<\delta,\ 0<|\ell|<\delta\}\to\mathbb{R}, \ \ (h, \ell) \to \frac{\Delta(h, \ell)}{h\ell},
> $$

**理由：** 差商分母为hℓ，两个坐标轴上的点都不能直接代入，仅删原点仍包含非法分母零；δ选足够小还保证四个f取值属于Ω。

**原文：**

> 来运用前面的引理。我们可以先令

**修正：**

> 其中 $\delta>0$ 选得足够小，来运用前面引理的去坐标轴局部版本（其证明完全相同）。我们可以先令

**理由：** 本函数只在小邻域中hℓ非零时定义；[坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)引理证明通过固定一个非零坐标和半径控制成立于同样的去坐标轴局部域。说明所用版本，避免把差商宣称在两条轴上有原值。

**原文：**

> $$
> \begin{aligned}
> \lim_{h \to 0} \left( \lim_{\ell \to 0} \frac{\Delta(h, \ell)}{h\ell} \right) &= \lim_{h \to 0} \left( \frac{1}{h} \left( \frac{f(x + h, y + \ell, Z) - f(x + h, y, Z)}{\ell} - \frac{f(x, y + \ell, Z) - f(x, y)}{\ell} \right) \right) \\
> &= \lim_{h \to 0} \frac{1}{h} \left( \frac{\partial f}{\partial y}(x + h, y, Z) - \frac{\partial f}{\partial y}(x, y, Z) \right) \\
> &= \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)(x, y, Z).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \lim_{h \to 0} \left( \lim_{\ell \to 0} \frac{\Delta(h, \ell)}{h\ell} \right) &= \lim_{h \to 0} \left(\lim_{\ell\to0} \frac{1}{h} \left( \frac{f(x + h, y + \ell, Z) - f(x + h, y, Z)}{\ell} - \frac{f(x, y + \ell, Z) - f(x, y, Z)}{\ell} \right) \right) \\
> &= \lim_{h \to 0} \frac{1}{h} \left( \frac{\partial f}{\partial y}(x + h, y, Z) - \frac{\partial f}{\partial y}(x, y, Z) \right) \\
> &= \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)(x, y, Z).
> \end{aligned}
> $$

**理由：** 原图等号右端遗漏内层ℓ→0却仍留下自由ℓ，不能作为迭代极限；第二个差值中的f(x,y)还漏固定参数Z。补足内层极限和统一参数，与下一行两个y偏导的定义对应。

**原文：**

> 反过来，我们也可以先令 $h \to 0$。类似的，我们得到

**修正：**

> 反过来，我们也可以先令 $h \to 0$。由同一引理，外层极限存在，因而反向混合偏导存在，并且我们得到

**理由：** 定理假设没有提前给出反向混合偏导，固定ℓ后的h极限来自fx存在，外层极限则由已证联合差商极限及引理保证。显式写存在性来源，避免在证明中提前假设待证偏导存在。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> $$
> |\alpha| = \alpha_1 + \cdots + \alpha_n \leqslant k,
> $$

**修正：**

> $$
> |\alpha| = \alpha_1 + \cdots + \alpha_n,
> $$

**理由：** 此处定义任意非负多重指标的总阶数，k没有在本段定义；其阶数不应受未指定的上界约束，阶数上界在下一页Taylor求和中才给出。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> $$
> f(y_1, \cdots, y_n) = \sum_{|\alpha| \leqslant k} \frac{\partial^\alpha f(x)}{\alpha!} (x - y)^\alpha + \sum_{|\alpha| = k + 1} \frac{\partial^\alpha f(x + \vartheta(y - x))}{\alpha!} (x - y)^\alpha,
> $$

**修正：**

> $$
> f(y_1, \cdots, y_n) = \sum_{|\alpha| \leqslant k} \frac{\partial^\alpha f(x)}{\alpha!} (y - x)^\alpha + \sum_{|\alpha| = k + 1} \frac{\partial^\alpha f(x + \vartheta(y - x))}{\alpha!} (y - x)^\alpha,
> $$

**理由：** 展开点为x、目标点为y，证明g(t)=f(x+t(y−x))且所有g导数使用y−x。原图定理两处用x−y使奇数次项反号，取一元f(t)=t即可否定。

**原文：**

> $$
> (x - y)^\alpha = (x_1 - y_1)^{\alpha_1} \cdots (x_n - y_n)^{\alpha_n}, \ \ \alpha! = \alpha_1! \cdots \alpha_n!.
> $$

**修正：**

> $$
> (y - x)^\alpha = (y_1 - x_1)^{\alpha_1} \cdots (y_n - x_n)^{\alpha_n}, \ \ \alpha! = \alpha_1! \cdots \alpha_n!.
> $$

**理由：** 与同页从x到y的Taylor增量修复同步，定理后解释的单项式也必须采用y−x，避免定义和定理新式互相冲突。

**原文：**

> 对任意的函数 $f$，我们有

**修正：**

> 对任意的可微函数 $f$，我们有

**理由：** 沿直线方向导数等于微分在v上的值需要f在该点可微，原图任意函数未保证导数存在。当前归纳中实际使用的函数已有该可微性。

**原文：**

> 有如下 $n$ 中可能性：

**修正：**

> 对满足 $\beta_m>0$ 的指标 $m$，有如下可能性（只取非负的多重指标）：

**理由：** 当βm=0时β−em具有负分量，不属于前一步求和的多重指标，且αm!不可取负整数阶乘；实际只计βm正的插入方向。

**原文：**

> $$
> \sum_{m=1}^n \frac{(k - 1)!}{\alpha_m!} = \frac{k!}{\beta!}.
> $$

**修正：**

> $$
> \sum_{\substack{1\leqslant m\leqslant n\\\beta_m>0}} \frac{(k - 1)!}{\alpha_m!} = \frac{k!}{\beta!}.
> $$

**理由：** 与前一句非负多重指标修复联动，系数等式只对βm>0求和；每项等于(k−1)!βm/β!，和为k!/β!，零βm不贡献且不定义负阶乘。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> $\gamma_n'(0) > 0$

**修正：**

> $\gamma_1'(0) > 0$

**理由：** 后文使用x1分量严格递增、γ1逆及x1轴，原图条件误写第n分量；非零γ′可经重排坐标选第1分量非零，与整个拉直构造一致。

**原文：**

> $$
> \Phi : \mathbb{R}^n \to \mathbb{R}^n, \quad (x_1, x_2, \cdots, x_n) \mapsto (\gamma_1^{-1}(x_1), x_2 - \gamma_2(\gamma_1^{-1}(x_1)), , \cdots, x_n - \gamma_n(\gamma_1^{-1}(x_1))).
> $$

**修正：**

> $$
> \Phi : \gamma_1((-\varepsilon,\varepsilon))\times\mathbb{R}^{n-1}\to(-\varepsilon,\varepsilon)\times\mathbb{R}^{n-1}, \quad (x_1, x_2, \cdots, x_n) \mapsto (\gamma_1^{-1}(x_1), x_2 - \gamma_2(\gamma_1^{-1}(x_1)), , \cdots, x_n - \gamma_n(\gamma_1^{-1}(x_1))).
> $$

**理由：** γ1仅在给定的小参数区间上严格单调，γ1逆定义在其像区间，并非全部R。给定公式正好将这个像区间乘Rn−1映至参数区间乘Rn−1。

**原文：**

> $$
> \Phi^{-1} : \mathbb{R}^n \to \mathbb{R}^n, \quad (y_1, y_2, \cdots, y_n) \mapsto (\gamma_1(y_1), y_2 + \gamma_2(y_1), , \cdots, y_n + \gamma_n(y_1)).
> $$

**修正：**

> $$
> \Phi^{-1} : (-\varepsilon,\varepsilon)\times\mathbb{R}^{n-1}\to\gamma_1((-\varepsilon,\varepsilon))\times\mathbb{R}^{n-1}, \quad (y_1, y_2, \cdots, y_n) \mapsto (\gamma_1(y_1), y_2 + \gamma_2(y_1), , \cdots, y_n + \gamma_n(y_1)).
> $$

**理由：** 逆公式需y1在γ的参数区间中，输出第一坐标在γ1的像中；与Φ局部定义域和值域相互对应，不能宣称两个映射在整个Rn定义。

**原文：**

> 在 $0$ 附近，这是一个良好定义并且是可逆的映射

**修正：**

> 在 $\gamma(0)$ 附近，这是一个良好定义并且是可逆的映射

**理由：** 曲线没有假定γ(0)=0，Φ的x端邻域位于γ(0)，映至的y端邻域才位于0。原图把源端基点混为原点。

**原文：**

> 不难看出，这是一个微分同胚。所在，

**修正：**

> 不难看出，这是一个微分同胚（若 $\gamma$ 只为 $C^1$，这里及以下拉直结论取 $C^1$ 类别）。所以，

**理由：** 本页允许C1曲线，而[坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)光滑微分同胚定义为双向C∞；C1输入只保证构造双向C1。明确类别可保留原C1条件和局部拉直结论，避免无根据提升正则性。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> 给定函数 $f : \mathbb{R}^{n-1} \to \mathbb{R}$

**修正：**

> 给定光滑函数 $f : \mathbb{R}^{n-1} \to \mathbb{R}$

**理由：** 紧随宣称Φ及其逆显然光滑，两个映射包含f，原图遗漏f光滑的条件；任意函数如绝对值不能给出光滑图像拉直。

**原文：**

> $$
> \Gamma_f = \{(x, f(x)) \in \mathbb{R}^{n-1} \times \mathbb{R} \subset \mathbb{R}^n \mid x \in \Omega\}.
> $$

**修正：**

> $$
> \Gamma_f = \{(x, f(x)) \in \mathbb{R}^{n-1} \times \mathbb{R} \subset \mathbb{R}^n \mid x \in \mathbb{R}^{n-1}\}.
> $$

**理由：** 本例f明定于全部Rn−1，Ω未作为该例的域给出，且后文Φ是全局映射。图像的x应遍历已给定的函数定义域Rn−1。

**原文：**

> $$
> \mathbf{S}^2_{y<0} = \{(x, z, f(x, z)) \mid f(x, z) = -\sqrt{1 - x^2 - z^2}, x^2 + z^2 < 1\},
> $$

**修正：**

> $$
> \mathbf{S}^2_{y<0} = \{(x, f(x, z), z) \mid f(x, z) = -\sqrt{1 - x^2 - z^2}, x^2 + z^2 < 1\},
> $$

**理由：** 球面点全程按(x,y,z)排序，负平方根是y坐标，原图把它放第三坐标使y负半球标记失真；应将f(x,z)置于第二坐标。

**原文：**

> $\Omega \subset$ 以及

**修正：**

> $\Omega$ 以及

**理由：** 前一句已规定Ω是R²中的区域，原图此处留下没有右端集合的包含号，删去悬空符号以恢复完整条件，并不改变已有域。

**原文：**

> $$
> \Gamma_f = \{(y_1, y_2, f(y_1, y_2) \in \mathbb{R}^2_{y_1, y_2} \times \mathbb{R}^1_{y_3} \mid (y_1, y_2) \in \Omega\}.
> $$

**修正：**

> $$
> \Gamma_f = \{(y_1, y_2, f(y_1, y_2)) \in \mathbb{R}^2_{y_1, y_2} \times \mathbb{R}^1_{y_3} \mid (y_1, y_2) \in \Omega\}.
> $$

**理由：** 函数图像元为三元组，需要在f的函数括号之后再闭合元组括号；原图少一个右括号使成员关系位置不完整。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> y_m+f(y_1,\cdots,y_{m-1})
> ```

**正文：**

> $$
> \Phi^{-1} : \mathbb{R}^n \to \mathbb{R}^n, \quad (y_1, y_2, \cdots, y_n) \mapsto (x_1, \cdots, x_n) = (y_1, y_2, \cdots, y_n + f(y_1, \cdots, y_{n-1})).
> $$

**理由：** 原图逆映射使用未在本例定义的维数m，Φ的环境和最后坐标都是n。canonical已经正确录为yn及yn−1，保留同一全局图像逆公式。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> 整数 $d \geqslant 0$

**修正：**

> 整数 $0\leqslant d\leqslant n$

**理由：** 定义随后使用Rn−d及后n−d个坐标；维数d在0到环境维数n之间，补上该范围保证所写空间和坐标有定义。

**原文：**

> $d' \geqslant 0$

**修正：**

> $0\leqslant d'\leqslant n$

**理由：** 第二套坐标同样要使用Rn−d′，其维数也必须不超过环境n；与第一套定义一致。

**原文：**

> $$
> \Phi : U \cap M = V \cap (\mathbb{R}^d \times \{0\}),
> $$

**修正：**

> $$
> \Phi(U \cap M) = V \cap (\mathbb{R}^d \times \{0\}),
> $$

**理由：** 微分同胚Φ在U上定义，子流形条件是U∩M的像等于V内线性片；原图用冒号代替集合像，使Φ没有作用于其左端集合。

**原文：**

> $$
> \Phi' : U' \cap M = V' \cap (\mathbb{R}^{d'} \times \{0\}),
> $$

**修正：**

> $$
> \Phi'(U' \cap M) = V' \cap (\mathbb{R}^{d'} \times \{0\}),
> $$

**理由：** 第二套坐标的条件同样是Φ′对U′∩M取像，原图与第一套条件同样误用冒号，需联动保持维数比较有效。

**原文：**

> 它有着如下具体的含义：存在 $\operatorname{codim} M$ 个函数，使得 $M$ 恰好是这些函数的公共零点集合。

**修正：**

> 它有着如下局部的含义：在 $U$ 上存在 $\operatorname{codim} M$ 个函数，使得 $M\cap U$ 恰好是这些函数的公共零点集合。

**理由：** Phi及拉回坐标函数仅在U定义，所刻画零点集为M∩U。不能一般宣称整个M是全局连续函数零点集，例如Rn中非闭的开线段子流形就无法作为全空间连续函数零点集。

[相关正文：32：坐标变换、多元 Taylor 展开与子流形](../../02-math-analysis-ii/32-coordinate-changes.md)

## 数学修正

**原文：**

> $$
> \Psi : V \cap (\mathbb{R}^{d'} \times \{0\}) \to V' \cap (\mathbb{R}^{d'} \times \{0\}).
> $$

**修正：**

> $$
> \Psi : V \cap (\mathbb{R}^d \times \{0\}) \to V' \cap (\mathbb{R}^{d'} \times \{0\}).
> $$

**理由：** 上一句限制Ψ到V∩Rd，目标为V′∩Rd′，需要比较两种可能维数，原图源端误写d′使论证提前把两个维数相同化。
