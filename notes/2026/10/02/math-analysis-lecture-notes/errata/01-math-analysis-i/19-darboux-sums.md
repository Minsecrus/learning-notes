# 勘误：19 Riemann 和与 Darboux 上下和

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：Riemann 和与 Darboux 上下和](../../01-math-analysis-i/19-darboux-sums/19-01-p0199-0203.md)

## 数学修正

**原文：**

> $$S(f; \sigma, \xi) = (a_1 - a_0)f(\xi_i) + (a_2 - a_1)f(\xi_i) + \cdots + (a_n - a_{n-1})f(\xi_n).$$

**修正：**

> $$S(f; \sigma, \xi) = (a_1 - a_0)f(\xi_1) + (a_2 - a_1)f(\xi_2) + \cdots + (a_n - a_{n-1})f(\xi_n).$$

**理由：** [Riemann 和与 Darboux 上下和](../../01-math-analysis-i/19-darboux-sums/19-01-p0199-0203.md)原图展开Riemann和第一、第二项都写ξi，然而这两项分别来自区间[a0,a1]与[a1,a2]，定义采样点ξ1、ξ2，必须对应各自子区间，属于源笔误。

## 未决数学问题

**原文：**

> $\sigma = \{a = a_0 < a_1 < \cdots < x_{n-1} < a_n = b\}$

**问题：** 源码图片中分割点序列印为了 $x_{n-1}$（按上下文习惯可能为 $a_{n-1}$），但图中两处分划表达均清晰印为 $x_{n-1}$，无法仅凭借上下文证据百分之百排除作者特定符号习惯，故列入不确定项。

[相关正文：Riemann 和与 Darboux 上下和](../../01-math-analysis-i/19-darboux-sums/19-01-p0199-0203.md)

## 数学修正

**原文：**

> **注记.** 我们们通常将定理写作 $\displaystyle\lim_{|\sigma| \to 0} S(f; \sigma, \xi) = \int_a^b f$，其中 $f \in \mathcal{R}(I)$。实际上，任意选取一个序列 $\{(\sigma_n, \xi_n)\}_{n \geqslant 1} \subset \mathcal{S}'(I)$，上面的定理表明只要当 $|\sigma_n| \to 0$，我们就有 $\lim_{n \to} S(f; \sigma_n, \xi_n) = \int_a^b f$。

**修正：**

> **注记.** 我们通常将定理写作 $\displaystyle\lim_{|\sigma| \to 0} S(f; \sigma, \xi) = \int_a^b f$，其中 $f \in \mathcal{R}(I)$。实际上，任意选取一个序列 $\{(\sigma_n, \xi_n)\}_{n \geqslant 1} \subset \mathcal{S}'(I)$，上面的定理表明只要当 $|\sigma_n| \to 0$，我们就有 $\lim_{n \to \infty} S(f; \sigma_n, \xi_n) = \int_a^b f$。

**理由：** [Riemann 和与 Darboux 上下和](../../01-math-analysis-i/19-darboux-sums/19-01-p0199-0203.md)原图确重复“我们们”且极限下标漏无穷。该序列积分在n趋于无穷时逼近目标积分，上文已给趋零误差；删重复字并补n→∞恢复完整语句和有效极限，属于源笔误。

[相关正文：Riemann 和与 Darboux 上下和](../../01-math-analysis-i/19-darboux-sums/19-01-p0199-0203.md)

## 未决数学问题

**原文：**

> $$\underline{S}(f; \sigma) \leqslant \overline{S}(f; \sigma'), \quad \underline{S}(f; \sigma') \leqslant \overline{S}(f; \sigma),$$

**问题：** 原书图像中此处公式打印为 $\overline{S}(f; \sigma) \leqslant \overline{S}(f; \sigma'), \quad \underline{S}(f; \sigma') \leqslant \overline{S}(f; \sigma)$，且后续段落中关于细分 $\sigma \prec \sigma'$ 与上下和单调性的符号表达存在前后不一致，无法 uniquely 判定原作者对符号 $\prec$ 的定义及该处的具体修改意图。

[相关正文：19.1：作业：Sturm-Louville理论的一个例子](../../01-math-analysis-i/19-darboux-sums/19-02-p0204-0209.md)

## 数学修正

**原文：**

> ；D3) $f(x) = x^{\frac{1}{3}}(1-x)^{\frac{2}{3}}$

**修正：**

> ；D4) $f(x) = x^{\frac{1}{3}}(1-x)^{\frac{2}{3}}$

**理由：** [19.1：作业：Sturm-Louville理论的一个例子](../../01-math-analysis-i/19-darboux-sums/19-02-p0204-0209.md)源图习题D3重复，两项函数不同，下一项D5，故第二D3应D4，恢复顺序编号不增加练习答案，属于源笔误。

[相关正文：19.1：作业：Sturm-Louville理论的一个例子](../../01-math-analysis-i/19-darboux-sums/19-02-p0204-0209.md)

## 数学修正

**原文：**

> 证明：$M_1 \leq 4M_0 M_2$。

**修正：**

> 证明：$M_1^2 \leqslant 4M_0 M_2$。

**理由：** [19.1：作业：Sturm-Louville理论的一个例子](../../01-math-analysis-i/19-darboux-sums/19-02-p0204-0209.md)源图向量值Landau练习确漏M1平方。标量练习有M1²≤4M0M2；向量情形取任意x处导数方向的单位向量投影，标量估计给||f′(x)||²≤4M0M2，取sup仍成立。把f乘小常数会使原一次M1与二次右侧尺度不一致，平方是必要的源笔误修正。

[相关正文：19.1：作业：Sturm-Louville理论的一个例子](../../01-math-analysis-i/19-darboux-sums/19-02-p0204-0209.md)

## 数学修正

**原文：**

> - 如果 $t'_1$ 和 $t'_2$ 是 $x'$ 的两个相邻的零点，那么存在唯一的 $t'_3 \in [t_1, t_2]$，使得 $x(t'_3) = 0$。

**修正：**

> - 如果 $t'_1$ 和 $t'_2$ 是 $x'$ 的两个相邻的零点，那么存在唯一的 $t'_3 \in [t'_1, t'_2]$，使得 $x(t'_3) = 0$。

**理由：** [19.1：作业：Sturm-Louville理论的一个例子](../../01-math-analysis-i/19-darboux-sums/19-02-p0204-0209.md)源图第二项两个相邻零点是x′的t1′、t2′，结论区间却写第一项x零点的t1,t2。该存在唯一性命题应在已选相邻导数零点之间讨论x的零点，两个端点补撇号绑定当前量词，属于源笔误。
