# 勘误：14 导数公式与中值定理

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：14：导数公式与中值定理](../../01-math-analysis-i/14-mean-value-theorems.md)

## 数学修正

**原文：**

> $$
> \Gamma_m = \{ (k_1, \cdots, k_n \mid k_1, \cdots, k_n \in \mathbb{Z}_{\geqslant 0}, k_1 + k_2 + \cdots + k_n = m, k_1 + 2k_2 + \cdots + nk_n = n \}.
> $$

**修正：**

> $$
> \Gamma_m = \{ (k_1, \cdots, k_n) \mid k_1, \cdots, k_n \in \mathbb{Z}_{\geqslant 0}, k_1 + k_2 + \cdots + k_n = m, k_1 + 2k_2 + \cdots + nk_n = n \}.
> $$

**理由：** 源图Γm元组缺右括号，集合元素为n元整数向量，补括号不改条件。

**原文：**

> $$
> \begin{aligned}
> (f \cdot g)^{(n+1)} &= \frac{d}{dx} (f \cdot g)^{(n)} = \left( \sum_{k=0}^n \binom{n}{k} f^{(k)}(x) g^{(n-k)}(x) \right)' \\
> &= \sum_{k=0}^n \binom{n}{k} f^{(k+1)}(x) g^{(n-k)}(x) + f^{(k)}(x) g^{(n-k+1)}(x) \\
> &= \sum_{k=0}^{n+1} \left( \binom{n}{k-1} + \binom{n}{k} \right) f^{(k)}(x) g^{(n+1-k)}(x) \\
> &= \sum_{k=0}^{n+1} \binom{n+1}{k} f^{(k)}(x) g^{(n+1-k)}(x)
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> (f \cdot g)^{(n+1)} &= \frac{d}{dx} (f \cdot g)^{(n)} = \left( \sum_{k=0}^n \binom{n}{k} f^{(k)}(x) g^{(n-k)}(x) \right)' \\
> &= \sum_{k=0}^n \binom{n}{k} \big(f^{(k+1)}(x) g^{(n-k)}(x) + f^{(k)}(x) g^{(n-k+1)}(x)\big) \\
> &= \sum_{k=0}^{n+1} \left( \binom{n}{k-1} + \binom{n}{k} \right) f^{(k)}(x) g^{(n+1-k)}(x) \\
> &= \sum_{k=0}^{n+1} \binom{n+1}{k} f^{(k)}(x) g^{(n+1-k)}(x)
> \end{aligned}
> $$

**理由：** 源图Leibniz归纳缺括号，积求导两项必须同在求和且乘binom(n,k)，否则第二项k未绑定并漏系数。

[相关正文：14：导数公式与中值定理](../../01-math-analysis-i/14-mean-value-theorems.md)

## 数学修正

**原文：**

> 在 $x_0$ 的附近（很小的领域）应该是 $f$ 的很好的逼近。

**修正：**

> 在 $x_0$ 的附近（很小的邻域）应该是 $f$ 的很好的逼近。

**理由：** 源图实印领域而语境是x0附近的邻域，属于source_typo，修正数学术语。

**原文：**

> $$
> \lim_{h \to 0} \frac{E_2(h)}{E_1(h)} = \lim_{h \to 0} \frac{f'(x_0) - a)h + o(1)h}{h} = +\infty.
> $$

**修正：**

> $$
> \lim_{h \to 0} \frac{E_2(h)}{E_1(h)} = \lim_{h \to 0} \frac{(f'(x_0) - a)h + o(1)h}{h} = +\infty.
> $$

**理由：** 源图f′−a)h漏左括号；E2已定义(f′−a)h+o1h，恢复一致分子。该候选只修局部括号，本行分母与极限断言另需独立审校，不能自动认可整式。

## 未决数学问题

**原文：**

> $$
> \lim_{h \to 0} \frac{E_2(h)}{E_1(h)} = \lim_{h \to 0} \frac{f'(x_0) - a)h + o(1)h}{h} = +\infty.
> $$

**问题：** E2/E1可能未定义（线性f时E1恒0）；有符号比也未必+∞。源第二分母h给有限极限f′−a，不能仅补括号修复。可以用E1=o(h),E2/h→f′−a≠0表达优劣，需要重组而非唯一小片段。

[相关正文：14：导数公式与中值定理](../../01-math-analysis-i/14-mean-value-theorems.md)

## 数学修正

**原文：**

> $$
> f'(x) = (f'_1(x), \cdots, f'_n(x)).
> $$

**修正：**

> $$
> f'(x_0) = (f'_1(x_0), \cdots, f'_n(x_0)).
> $$

**理由：** 源图也写x，属于source_typo。这里只假定在x0导数存在，结论只能在x0各分量导数，不能称全部x都可微。

[相关正文：14：导数公式与中值定理](../../01-math-analysis-i/14-mean-value-theorems.md)

## 数学修正

**原文：**

> 在本次课的一开始关于关于反函数导数的结论中

**修正：**

> 在本次课的一开始关于反函数导数的结论中

**理由：** 源图实际重复关于，属于source_typo；删重复词。

**原文：**

> 根据可谓函数的复合仍然可微

**修正：**

> 根据可微函数的复合仍然可微

**理由：** 源图可谓错字，属于source_typo；可微函数复合可微，恢复术语。

[相关正文：14：导数公式与中值定理](../../01-math-analysis-i/14-mean-value-theorems.md)

## 数学修正

**原文：**

> 连续性不能退出可微性

**修正：**

> 连续性不能推出可微性

**理由：** 源图不能退出字误，连续不推出可微，恢复推出。

**原文：**

> 找一列点 $\{y_n\}_{n \geqslant q}$，使得

**修正：**

> 找一列点 $\{y_n\}_{n \geqslant 1}$，使得

**理由：** 源图下标确印q但q未定义，序列一般正整数n≥1，下段构造zn、yn对每个正整数n，统一起点。

[相关正文：14：导数公式与中值定理](../../01-math-analysis-i/14-mean-value-theorems.md)

## 数学修正

**原文：**

> 另外，如果令 $\vartheta_k = b^k y_0 - z_k \in [0.1, 1.1)$，我们有

**修正：**

> 另外，如果令 $\vartheta_n = b^n y_0 - z_n \in [0.1, 1.1)$，我们有

**理由：** 源图vk=b^k y0−zk，但已选逼近点yn=zn/b^n、且所有后续公式用vn。修复绑定为vn=b^ny0−zn；k是尾和另用指标，不能混同。

**原文：**

> 根据 $\vartheta_n \in [0.1, 1.1)$，我们知道 $1 - \cos(\pi\vartheta_n) \geqslant \delta_0$，并且 $\vartheta_n \geqslant 0.1$，所以

**修正：**

> 根据 $\vartheta_n \in [0.1, 1.1)$，我们知道 $1 - \cos(\pi\vartheta_n) \geqslant \delta_0$，并且 $\vartheta_n \leqslant 1.1$，所以

**理由：** 源图确印vn≥0.1，属于source_typo。要给(1−cosπvn)/vn下界，需分母上界vn≤1.1，下界vn≥0.1不能推出此界；源范围已保证所改上界。

**原文：**

> 利用 $\vartheta_n \geqslant 1$（注意 $\vartheta_k$ 的选取）

**修正：**

> 利用 $\vartheta_n \geqslant 0.1$（注意 $\vartheta_n$ 的选取）

**理由：** 源图范围[0.1,1.1)不能推出≥1，下式非负和只需分母正，改已有下界0.1并统一n。

**原文：**

> $$
> \left|\sum_{k=0}^{\infty} a^k \frac{1-\cos(b^k\pi\vartheta_n)}{\vartheta_n}\right| \geqslant 1.1^{-1}\delta_0 = \frac{\delta_0}{10}.
> $$

**修正：**

> $$
> \left|\sum_{k=0}^{\infty} a^k \frac{1-\cos(b^k\pi\vartheta_n)}{\vartheta_n}\right| \geqslant 1.1^{-1}\delta_0 \geqslant \frac{\delta_0}{10}.
> $$

**理由：** 源图误等号，10δ0/11>δ0/10；用≥放松已有下界保持后续常数正确。

**原文：**

> $$
> \lim_{y_n \to y_0} \frac{f(y_n)-f(y_0)}{y_n - y_0} = +\infty,
> $$

**修正：**

> $$
> \lim_{n \to \infty} \left|\frac{f(y_n)-f(y_0)}{y_n - y_0}\right| = +\infty,
> $$

**理由：** 源图仅证绝对值下界∞，S2符号(−1)^(zn+1)未必正；如y0=1、奇b则zn=b^n−1偶数给负主项。随n取差商绝对值→∞足以否证有限导数。
