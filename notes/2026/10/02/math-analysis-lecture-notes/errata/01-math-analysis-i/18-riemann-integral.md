# 勘误：18 Riemann 积分的定义

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：18：Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)

## 数学修正

**原文：**

> 和明显，$(\mathcal{S}, \prec)$

**修正：**

> 很明显，$(\mathcal{S}, \prec)$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图确印“和明显”，本句要引出由分割点包含关系直接得到的偏序三性质，恢复“很明显”属于源笔误。

**原文：**

> 3) 对任意的 $\sigma, \sigma \in \mathcal{S}$

**修正：**

> 3) 对任意的 $\sigma, \sigma' \in \mathcal{S}$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图第3条量词两次写σ，结论却用σ′。取两个任意分划的公共加细需分别量化σ、σ′，以分割点并集即可核验存在，恢复第二个撇号属于源笔误。

[相关正文：18：Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)

## 数学修正

**原文：**

> 映射 $V\varphi : V \to V'$

**修正：**

> 映射 $\varphi : V \to V'$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)先给φ:V→V′，性质2需要将连续线性映射φ作用于积分，Vφ不是已定义映射或乘积。原图确多出V，删去后Σφ(fk)Δa=φ(ΣfkΔa)，由线性直接验证，属于源笔误。

[相关正文：18：Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)

## 数学修正

**原文：**

> 使得我们仍然能够定义它们图像像下的面积。

**修正：**

> 使得我们仍然能够定义它们图像下的面积。

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图确重复“图像像”，删除重复字恢复名词“图像”，不改逼近函数与图示说明，属于源笔误。

[相关正文：18：Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)

## 数学修正

**原文：**

> $$\left| \int_a^b f_n - \int_a^b f_m \right| \leqslant \int_a^b \left| f_n - \int_a^b f_m \right| \leqslant \int_a^b \psi_n + \int_a^b \psi_m \to 0.$$

**修正：**

> $$\left| \int_a^b f_n - \int_a^b f_m \right| \leqslant \int_a^b |f_n - f_m| \leqslant \int_a^b \psi_n + \int_a^b \psi_m \to 0.$$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图右侧把∫fm错误嵌进绝对值。线性后应为|∫(fn-fm)|≤∫|fn-fm|，再以ψn+ψm控制。原式fn=fm=1、区间长度2时反而给右侧2，不能提供趋零的Cauchy控制，恢复差的积分为源笔误。

[相关正文：18：Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)

## 数学修正

**原文：**

> 我们来研究 Riemann 可积函数空间的 $\mathcal{R}(I)$ 的基本性质：

**修正：**

> 我们来研究 Riemann 可积函数空间 $\mathcal{R}(I)$ 的基本性质：

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图空间名词后确多出“的”，造成“空间的的基本性质”；删除多余的恢复原句，属于源笔误。

**原文：**

> 1) $E(I) \subset \mathcal{R}(I)$。

**修正：**

> 1) $\mathcal{E}(I) \subset \mathcal{R}(I)$。

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图此处使用花体E，[Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)定义阶梯函数全体为mathcal E(I)。普通E(I)是未绑定记号，恢复同一个已定义集合符号保证此处包含关系与紧随阶梯函数解释相符，属于提取错误。

**原文：**

> 当 $|x - y| < \dfrac{1}{n}$ 时

**修正：**

> 当 $|x - y| \leqslant \dfrac{b-a}{n}$ 时

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)源证明用长度(b-a)/n的分划，却只要求连续模小于1/n；b-a可大于1且子区间左端点到采样右端的距离等于其长度。由一致连续性可以选n使(b-a)/n小于连续模阈值，所以改为≤(b-a)/n使实际全部取样距离满足已选估计。

**原文：**

> $$F(x) = \sum_{k=1}^n f\!\left(a + k\frac{b-a}{n}\right) \mathbf{1}_{[a+(k-1)\frac{b-a}{n},\, a+k\frac{b-a}{n}]}(x),$$

**修正：**

> $$F(x) = \sum_{k=1}^n f\!\left(a + k\frac{b-a}{n}\right) \mathbf{1}_{[a+(k-1)\frac{b-a}{n},\, a+k\frac{b-a}{n})}(x) + f(b)\mathbf{1}_{\{b\}}(x),$$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)源图闭区间指标使内分割点处重复计数；f≡1时内点F=2无法满足任意小ε的点态误差。半开子区间互不相交并覆盖[a,b)，额外端点b取f(b)，每点仅一个样本，恢复后续一致逼近所需的全区间点态估计。

**原文：**

> 其中，$\mathbf{1}_{[a+(k-1)\frac{b-a}{n},\, a+k\frac{b-a}{n}]}$ 是示性函数。

**修正：**

> 其中，$\mathbf{1}_{[a+(k-1)\frac{b-a}{n},\, a+k\frac{b-a}{n})}$ 和 $\mathbf{1}_{\{b\}}$ 均为相应集合的示性函数。

**理由：** 与同页独立核验的半开子区间构造绑定：原闭区间在内分割点重复计数，须改为互不交叠的半开子区间，并在单点 $b$ 单独取值。此处仍明确给出原区间公式及新增端点的示性函数解释，保留内容而不缩写为泛指记号。

**原文：**

> $\displaystyle\int_a^b \Psi_x = \varepsilon$

**修正：**

> $\displaystyle\int_a^b \Psi = \varepsilon$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)源图在误差控制函数Ψ后误加下标x，未定义Ψx；已定义Ψ(x)恒ε/(b-a)，积分Ψ才等于ε。

[相关正文：18：Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)

## 数学修正

**原文：**

> $\displaystyle\left\|\int_a^b f\right\| \leqslant \left|\int_a^b f\right|$

**修正：**

> $\displaystyle\left\|\int_a^b f\right\| \leqslant \int_a^b |f|$

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图三角不等式右侧确写|∫f|，需改∫|f|。分段常数逼近下有||ΣfkΔa||≤Σ||fk||Δa，极限得到||∫f||≤∫||f||；对标量则为∫|f|。相消函数的积分绝对值不能代替非相消的上界，属于源笔误，API声称图中已正确不实。

**原文：**

> 上的限制都是阶梯函数，并且

**修正：**

> 上的限制都是 Riemann 可积函数，并且

**理由：** [Riemann 积分的定义](../../01-math-analysis-i/18-riemann-integral.md)原图把可积函数的限制误称阶梯；f(x)=x是连续可积函数而任意非退化限制都非阶梯。可加性仅需要两段Riemann可积，须与同样错误的[20.1：作业：Dini定理，多项式逼近与Weierstrass-Stone定理](../../01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223.md)练习一起修。

## 未决数学问题

**原文：**

> 4)（对区间的可加性）假设 $a < c < b$，那么对于任意的 $f \in \mathcal{R}(I)$，我们有 $f$ 在 $[a, c]$ 和 $[c, b]$ 上的限制都是阶梯函数，并且

**问题：** 源码印刷文本写有“限制都是阶梯函数”，但对于一般的 Riemann 可积函数 $f \in \mathcal{R}(I)$，其在子区间上的限制应为 Riemann 可积函数而非阶梯函数。虽然此处可能为原书印刷错误，但由于修正的具体用词（如“Riemann 可积函数”或“可积函数”）无法唯一确定，故保留原文并列入不确定项。
