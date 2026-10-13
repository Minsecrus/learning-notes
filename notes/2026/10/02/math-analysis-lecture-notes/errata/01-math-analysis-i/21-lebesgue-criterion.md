# 勘误：21 振幅、零测集与 Lebesgue 定理

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：21：振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)

## 数学修正

**原文：**

> 我们定义 $f$ 在 $x$ 出的**振幅** $\omega(f, x_0)$ 为

**修正：**

> 我们定义 $f$ 在 $x_0$ 处的**振幅** $\omega(f, x_0)$ 为

**理由：** 重新核对源图：原句同时印 $x$ 和“出”，前文固定点为 $x_0$，后接的振幅记号也为 $\omega(f,x_0)$。邻域中的 $x$ 是变化变量，定义所指应为固定点 $x_0$；“出”改“处”恢复语义。合并下标与文字修正，其他定义内容保留。

**原文：**

> $$\omega(f, x_0) = \inf_{\delta > 0} \left( \sup_{\substack{|x - x_0| < \delta, \\ |y - x_0| < \delta}} |x - y| \right) = \lim_{\delta \to 0} \sup_{\substack{|x - x_0| < \delta, \\ |y - x_0| < \delta}} |x - y|.$$

**修正：**

> $$\omega(f, x_0) = \inf_{\delta > 0} \left( \sup_{\substack{|x - x_0| < \delta, \\ |y - x_0| < \delta}} |f(x) - f(y)| \right) = \lim_{\delta \to 0} \sup_{\substack{|x - x_0| < \delta, \\ |y - x_0| < \delta}} |f(x) - f(y)|.$$

**理由：** [振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)源图确两处印|x-y|，这只测定义域邻域直径而所有函数都得0，不能测sin(1/x)例在0的振幅2。必须用|f(x)-f(y)|，与同页推广diam(f(U))及连续性刻画一致，属于源笔误。

**原文：**

> $$\operatorname{diam}\bigl(f(U)\bigr) < \delta.$$

**修正：**

> $$\operatorname{diam}\bigl(f(U)\bigr) < \varepsilon.$$

**理由：** [振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)原图该处确为δ，但此δ尚未选取；从振幅0及任意给定ε>0应先选U使diam f(U)<ε，再利用U开选δ。恢复ε是必要源笔误，API声称图中ε不实。

**原文：**

> 我们定义 $f$ 在 $x$ 处的**振幅**为：

**修正：**

> 我们定义 $f$ 在 $x_0$ 处的**振幅**为：

**理由：** [振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)距离空间推广同样给定x0且inf取x0∈U，所以振幅定义点必须x0，源图漏下标。

**原文：**

> 从而 $\operatorname{diam} f(U) < 2\varepsilon$

**修正：**

> 从而 $\operatorname{diam} f(U) \leqslant 2\varepsilon$

**理由：** [振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)源图严格界错用于上确界：开球内任意两像点距离<2ε只能得直径≤2ε，可能上确界等于2ε（实数开球恒等映射）。弱不等式仍足以令ε任意推出振幅0。

[相关正文：21：振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)

## 数学修正

**原文：**

> 所以，我们可以选取开区间 $\{\overline{I_k}\}_{k \geqslant 1}$ 来覆盖 $X$。

**修正：**

> 所以，我们可以选取开区间 $\{I_k\}_{k \geqslant 1}$ 来覆盖 $X$。

**理由：** [振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)原图末句确有overline Ik，前面已把开区间Ik构造为放大后的闭区间Kk，覆盖应使用开区间Ik。bar Ik为其闭包，与“开区间”冲突；删上划线属于源笔误。

[相关正文：21：振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)

## 未决数学问题

**原文：**

> $$\Omega_\varepsilon(f) = \left\{ x \in X \mid \omega(f, x) \geqslant \varepsilon \right\}$$

**问题：** 引理 135 针对 $f \in \mathcal{R}([a,b])$ 讨论，定义集合应为 $\{ x \in [a,b] \mid \omega(f,x) \geqslant \varepsilon \}$（[振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)即写作 $x \in [a,b]$）。源码图像中此处打印为 $x \in X$，Markdown 忠实保留了印刷文本，鉴于属于源码印错且无直接修改证据，保留为不确定项。

[相关正文：21：振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)

## 数学修正

**原文：**

> 对于 $A$，由于它是零测集，所以可以选取可数个开区间 $I_{i\,i\geqslant 1}$ 作为 $A$ 的一个开覆盖，并且它们的总长度小于 $\dfrac{\varepsilon}{2M}$，即

**修正：**

> 对于 $A$，由于它是零测集，所以可以选取可数个开区间 $\{I_i\}_{i \geqslant 1}$ 作为 $A$ 的一个开覆盖，并且它们的总长度小于 $\dfrac{\varepsilon}{2M}$，即

**理由：** [振幅、零测集与 Lebesgue 定理](../../01-math-analysis-i/21-lebesgue-criterion.md)原图开区间序列下标为Ii≥1，没有花括号，Markdown把整个i,i≥1吞进I单个下标。恢复族{Ii}_{i≥1}绑定求和/开覆盖的序列指标是提取纠错，不改变集合。

## 未决数学问题

**原文：**

> 由于 $\delta$ 是任意选取的并且 $\Omega_\varepsilon(f) \subset \bigcup_{i=1}^{n} I_m$，所以 $\Omega_\varepsilon(f)$ 是零测集。

**问题：** 源码第一行打印为 $\Omega_\varepsilon(f) \subset \bigcup_{i=1}^{n} I_m$。前页表明覆盖 $\Omega_\varepsilon(f)$ 的小区间为 $m$ 个（即 $I_1, \cdots, I_m$），正确的并集应为 $\bigcup_{i=1}^{m} I_i$。因属于源码印错且包含下/标索引符号的选择，记为不确定项。
