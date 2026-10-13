# 勘误：43 积分与求导交换、乘积测度

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：积分与求导交换、乘积测度](../../02-math-analysis-ii/43-product-measures/43-01-p0496-0502.md)

## 数学修正

**原文：**

> 几乎处处收敛到函数 $f$

**修正：**

> 几乎处处收敛到可测函数 $f$

**理由：** 重复DCT的前提也须说明极限函数可测，非完备空间在零集上的任意值未必可测。

[相关正文：积分与求导交换、乘积测度](../../02-math-analysis-ii/43-product-measures/43-01-p0496-0502.md)

## 数学修正

**原文：**

> $$F'(t) = \int_X \frac{\partial f}{\partial t}(t, x) d\mu(x).$$

**修正：**

> $$F'(t)=\int_X\frac{\partial f}{\partial t}(x,t)\,d\mu(x).$$

**理由：** 函数f先接受空间变量x后接受参数t，导数公式不能交换两个一般不同类型的自变量。

**原文：**

> 我们知道 $\frac{\partial f}{\partial t}(t, x)$

**修正：**

> 我们知道 $\frac{\partial f}{\partial t}(x,t)$

**理由：** 差商保持空间点x固定、参数t变化，其极限必须是同一次序的偏导。

**原文：**

> 从而 $\frac{\partial f}{\partial t}(t, x)$ 是可测函数

**修正：**

> 从而 $\frac{\partial f}{\partial t}(x,t)$ 是可测函数

**理由：** 可测性在x变量上，保持函数已定义的输入次序。

**原文：**

> 所以 $\frac{\partial f}{\partial t}(t, x)$ 是可积的

**修正：**

> 所以 $\frac{\partial f}{\partial t}(x,t)$ 是可积的

**理由：** 控制函数h约束的是(x,t)点的偏导，不能据此对交换实参的另一表达求可积性。

**原文：**

> $$t \mapsto \int_X \frac{\partial f}{\partial t}(t, x) d\mu(x).$$

**修正：**

> $$t\mapsto\int_X\frac{\partial f}{\partial t}(x,t)\,d\mu(x).$$

**理由：** 参数积分始终固定t且积分空间变量x，修复实参倒置。

**原文：**

> 使得 $\lim_{k \to \infty} \varepsilon_k = 0$。

**修正：**

> 使得 $\varepsilon_k\ne0$、$t+\varepsilon_k\in I$ 且 $\lim_{k\to\infty}\varepsilon_k=0$。

**理由：** 导数差商分母不能为零，t加增量还必须留在开区间内，任意序列趋零需补这两个使用条件。

**原文：**

> 根据中值定理，我们知道最后一式的被积函数可写为 $f'(x, t + \theta \varepsilon_k)$，其中 $\theta \in [0, 1]$。据此，我们有

**修正：**

> 对于固定 $x$，把差值乘模为一的复数使其为非负实数，再对所得函数的实部使用实值中值定理。实部导数的绝对值不超过 $|\partial_tf(x,s)|\leqslant h(x)$，因而有

**理由：** 复值函数的一元中值定理没有同一个中间点实现差商等于复导数，源论断错误。把差值旋转为实数后对实部使用实值定理可获得所需模长上界，不要求复导数等号。

**原文：**

> $$\left| \frac{f(x, t + \varepsilon_k) - f(x, t)}{\varepsilon_k} \right| = |f'(x, t + \theta \varepsilon_k)| \leqslant h(x).$$

**修正：**

> $$\left| \frac{f(x, t + \varepsilon_k) - f(x, t)}{\varepsilon_k} \right| \leqslant\sup_{s\text{ 位于 }t\text{ 与 }t+\varepsilon_k\text{ 之间}}|\partial_tf(x,s)|\leqslant h(x).$$

**理由：** 复差商没有实值中值定理的导数等号，但模长不超过区间上的导数模长上界；这是DCT控制函数所需的正确估计。

**原文：**

> $$\begin{aligned}
> \lim_{k \to \infty} \frac{F(t + \varepsilon_k) - F(t)}{\varepsilon_k} &= \int_X \frac{f(x, t + \varepsilon_k) - f(x, t)}{\varepsilon_k} d\mu(x) \\
> &= \int_X \frac{\partial f(x, t)}{\partial t} d\mu(x).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \lim_{k\to\infty}\frac{F(t+\varepsilon_k)-F(t)}{\varepsilon_k}&=\lim_{k\to\infty}\int_X\frac{f(x,t+\varepsilon_k)-f(x,t)}{\varepsilon_k}\,d\mu(x) \\
> &= \int_X \frac{\partial f(x, t)}{\partial t} d\mu(x).
> \end{aligned}$$

**理由：** 左边已取k极限，第一等号右边还保留有限k差商积分，须补对应极限后才能与偏导积分相等。

[相关正文：积分与求导交换、乘积测度](../../02-math-analysis-ii/43-product-measures/43-01-p0496-0502.md)

## 数学修正

**原文：**

> $$\begin{aligned}
> \mu(A)\nu(B) &= \left( \sum_{j \le n} \mu(A_j) \right) \left( \sum_{j \le n} \nu(B_j) \right) \\
> &= \sum_{j,j' \le m} \mu(A_j)\mu(B_{j'}).
> \end{aligned}$$

**修正：**

> $$\begin{aligned}
> \mu(A)\nu(B) &= \left( \sum_{j \le n} \mu(A_j) \right) \left( \sum_{j \le n} \nu(B_j) \right) \\
> &= \sum_{j,j\prime\le n}\mu(A_j)\nu(B_{j\prime}).
> \end{aligned}$$

**理由：** 第二因子测度为nu，且两族长度n，原mu(B)没有对应定义且上界m沿用上一页变量。

**原文：**

> 它们是两两不交的并且可以把 $A_j$ 都并出来。

**修正：**

> 它们是两两不交的并且可以把 $A_j$ 都并出来。在 $B$ 中同样对所有 $B_j$ 及其补作共同分割；这些坐标分割的乘积格子两两不交。原每个 $A_j\times B_j$ 是若干格子的并，且 $A\times B$ 的格子恰好各出现一次，按有限可加性逐格求和便得到所需等式。

**理由：** 单独细分A不能同时处理两个坐标上的交叠；补充B中的共同分割与乘积格子，才能使矩形的体积乘积展开严格证明分解独立性。

[相关正文：积分与求导交换、乘积测度](../../02-math-analysis-ii/43-product-measures/43-01-p0496-0502.md)

## 数学修正

**原文：**

> $\{A_i\}_{i \ge 1} \subset \mathcal{A}, X_i \nearrow X, \{B_i\}_{i \ge 1} \subset \mathcal{B}, B_j \nearrow Y$

**修正：**

> $\{A_i\}_{i \ge 1} \subset\mathcal A,A_i\nearrow X, \{B_i\}_{i \ge 1} \subset \mathcal{B}, B_i\nearrow Y$

**理由：** 本段使用Ai的有限测度穷尽，Xi没有定义，原沿用错误符号。

**原文：**

> $\{A_i\}_{i \ge 1} \subset \mathcal{A}, X_i \nearrow X, \{B_i\}_{i \ge 1} \subset \mathcal{B}, B_j \nearrow Y$

**修正：**

> $\{A_i\}_{i \ge 1} \subset\mathcal A,A_i\nearrow X, \{B_i\}_{i \ge 1} \subset \mathcal{B}, B_i\nearrow Y$

**理由：** 第二序列也以i编号，配对形成Ai乘Bi的上升穷尽，j未绑定。

**原文：**

> $\mu(A_i)$ 和 $\nu(B_j)$

**修正：**

> $\mu(A_i)$ 和 $\nu(B_i)$

**理由：** 有限性按相同序列索引i逐项成立，后续乘积测度体积需相同Bi。

**原文：**

> 我们可以进一步要求 $A_i$ 们两两不交。

**修正：**

> 先以所有 $A_i$ 及其补作共同坐标分割，再把同一分割块对应的各 $B_i$ 并在一起作为新的第二因子；这样重写后，可以进一步要求 $A_i$ 们两两不交。

**理由：** 仅把Ai细分会产生同一A原子在不同矩形中重复，不能直接说Ai两两不交；合并同一第一坐标原子对应的B因子后才得到该形式，截面公式随之成立。

[相关正文：积分与求导交换、乘积测度](../../02-math-analysis-ii/43-product-measures/43-01-p0496-0502.md)

## 数学修正

**原文：**

> $\{A_i\}_{i \ge 1} \subset \mathcal{A}, A_i \nearrow X, \{B_i\}_{i \ge 1} \subset \mathcal{B}, B_j \nearrow Y$

**修正：**

> $\{A_i\}_{i \ge 1} \subset \mathcal{A}, A_i \nearrow X, \{B_i\}_{i \ge 1} \subset \mathcal{B}, B_i\nearrow Y$

**理由：** 两个穷尽集合列均以i为索引，修复第二族自由j。

**原文：**

> $\mu(A_i)$ 和 $\nu(B_j)$

**修正：**

> $\mu(A_i)$ 和 $\nu(B_i)$

**理由：** 同一配对穷尽矩形Zi需要两个i项测度有限，原j未定义。

**原文：**

> $\theta(S \cap X_i) \to \infty$

**修正：**

> $\theta(S\cap Z_i)\to\infty$

**理由：** 乘积空间穷尽为Zi等于Ai乘Bi，Xi既未定义也不是乘积集合。

**原文：**

> $$\lim_{i \to \infty} \theta(Z_i \cap (A \times B)) \to \infty.$$

**修正：**

> $$\lim_{i\to\infty}\theta(Z_i\cap(A\times B))=\infty.$$

**理由：** 已经取极限的表达是一个扩展数值，须说等于无穷，不能再次让它趋于无穷。

**原文：**

> $\theta(S_0) < \infty$

**修正：**

> $\theta(S_1)<\infty$

**理由：** 下降序列从一开始，S0未定义，从第一项有限即可用从上连续性。

**原文：**

> 当 $x \in X$ 固定时，由于 $S_i \searrow \emptyset$，所以 $(S_i)_x \searrow \emptyset$，从而，$\nu((S_i)_x) \searrow 0$。那么，从而对任意的 $x$，$f_i(x) \to 0$，即函数列 $\{f_i\}_{i \ge 1}$ 逐点收敛到 $0$。

**修正：**

> 由粗糙 Fubini 公式，$\int_X f_1\,d\mu=\theta(S_1)<\infty$，故 $f_1$ 几乎处处有限。对这样的 $x$，$\nu((S_1)_x)<\infty$，而 $(S_i)_x\searrow\emptyset$，由测度从上连续性得到 $f_i(x)=\nu((S_i)_x)\searrow0$。因此函数列几乎处处收敛到零。

**理由：** 下降集合的测度不保证降零，需首截面测度有限；整体theta有限只保证首截面几乎处处有限，从上连续性和DCT恰需几乎处处收敛，补齐该必要限制。

**原文：**

> 第一项 $f_0$ 可以作为控制函数

**修正：**

> 第一项 $f_1$ 可以作为控制函数

**理由：** 函数序列从一开始，f0未定义；上条证明f1可积且在下降列中逐项控制fi。

[相关正文：43.1：作业：Lebesgue 控制收敛，十进制小数的研究](../../02-math-analysis-ii/43-product-measures/43-03-p0503-0508.md)

## 原讲义笔误（正文已订正）

**原讲义片段：**

> A∩Y⊂A|Y

**正文：**

> $A \cap Y \in \mathcal{A}|_Y$

**理由：** 原图限制代数的交集误用包含符号，canonical已经采用正确成员关系，保持正确修复。

[相关正文：43.1：作业：Lebesgue 控制收敛，十进制小数的研究](../../02-math-analysis-ii/43-product-measures/43-03-p0503-0508.md)

## 数学修正

**原文：**

> 都存在阶梯函数序列

**修正：**

> 都存在有限取值可测函数序列（此处不要求非零取值的逆像测度有限）

**理由：** 一般测度空间未假定sigma有限，单点无限测度时此前有限非零支撑阶梯函数只有零，无法逼近常数一；不限制支撑的有限取值可测函数可以点态量化逼近。

[相关正文：43.1：作业：Lebesgue 控制收敛，十进制小数的研究](../../02-math-analysis-ii/43-product-measures/43-03-p0503-0508.md)

## 数学修正

**原文：**

> $$ \tilde{f} : [0, 1] \mapsto \mathbb{C}, \quad x \mapsto \sum_{k \in \mathbb{Z}} f(x + k). $$

**修正：**

> $$ \tilde f:[0,1]\to\mathbb C, \quad x \mapsto \sum_{k \in \mathbb{Z}} f(x + k). $$

**理由：** 定义映射的域与陪域之间用普通箭头，mapsto用于自变量与像的对应。

**原文：**

> 证明, $\tilde{f}$ 是良定义的可测函数并且 $\tilde{f}$ 在 $[0, 1]$ 上可积

**修正：**

> 证明，该级数几乎处处绝对收敛；在不收敛的零测集上把 $\tilde f$ 置零后，它是良定义的可测函数并且在 $[0,1]$ 上可积

**理由：** 可积函数可以在全部整数处非零但积分为零，此时周期求和在零处发散。Tonelli仅保证几乎处处绝对收敛，需指定例外零集上的补值。

[相关正文：43.1：作业：Lebesgue 控制收敛，十进制小数的研究](../../02-math-analysis-ii/43-product-measures/43-03-p0503-0508.md)

## 数学修正

**原文：**

> E1) 证明, 对 $x \in [0, 1)$

**修正：**

> E1) 证明, 对 $x\in(0,1)$

**理由：** 零只有全零小数展开，没有全九尾的第二种非负小数展开；四项等价须排除零端点。

[相关正文：43.1：作业：Lebesgue 控制收敛，十进制小数的研究](../../02-math-analysis-ii/43-product-measures/43-03-p0503-0508.md)

## 数学修正

**原文：**

> E8) 对于 $\alpha_1, \cdots, \alpha_n \in \{0, 1, 2, \cdots\}$

**修正：**

> E8) 对于 $\alpha_1,\cdots,\alpha_n\in\{0,1,\cdots,9\}$

**理由：** 所禁止的字符串必须由十进制数字构成；若包含十，则禁串集为全区间，下一问计数减少一的不等式为假。

[相关正文：43.2：习题课：硬币空间的测度理论](../../02-math-analysis-ii/43-product-measures/43-05-p0509-0511.md)

## 数学修正

**原文：**

> $\mathcal{F}_\infty \neq \Omega$

**修正：**

> $\mathcal F_\infty\ne\mathcal P(\Omega)$

**理由：** 代数是Omega的子集所组成的集合族，比较对象应是其幂集；下一问单点不属于该代数也证明它严格小于幂集。

**原文：**

> 总存在 $n$ 和 $s_1, \cdots, s_k \in \{0, 1\}^n$

**修正：**

> 总存在 $n$ 和互不相同的 $s_1,\cdots,s_k\in\{0,1\}^n$

**理由：** k必须计数不同的柱集，重复字符串不会增加并集却会增加k，导致所定义概率不唯一。

[相关正文：43.2：习题课：硬币空间的测度理论](../../02-math-analysis-ii/43-product-measures/43-05-p0509-0511.md)

## 数学修正

**原文：**

> 为单调上升的自然数序列

**修正：**

> 为严格递增的正整数序列

**理由：** 不同硬币位置的个数决定概率指数；允许重复或零指标会使二的负N次方公式或坐标定义失败。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> {Mp}∈F∞

**正文：**

> $\{M_p\}_{p \geqslant 1} \subset \mathcal{F}_\infty$

**理由：** 集合序列逐项属于代数，canonical已经采用集合族包含符号，保留正确规范化。

**原讲义片段：**

> Ψ*m=P=m

**正文：**

> $\Psi_* m = P$

**理由：** 推前测度在硬币空间上等于P，末尾再等于实区间Lebesgue测度类型不一致，canonical已删除错误等号。

[相关正文：43.2：习题课：硬币空间的测度理论](../../02-math-analysis-ii/43-product-measures/43-05-p0509-0511.md)

## 数学修正

**原文：**

> $s = (s_1, s_2, \cdots, s_n) \in \{0, 1\}^{\mathbb{Z}_{>0}}$

**修正：**

> $s = (s_1, s_2, \cdots, s_n) \in \{0, 1\}^{n}$

**理由：** 长度n的有限字符串属于n次直积，不能属于无限序列空间。
