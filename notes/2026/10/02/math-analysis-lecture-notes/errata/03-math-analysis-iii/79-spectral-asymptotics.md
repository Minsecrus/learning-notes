# 勘误：79 特征函数、变分原理与特征值增长

[返回勘误目录](../../errata.md) · [数学分析 3 勘误](../03-math-analysis-iii.md)

[相关正文：79：特征函数、变分原理与特征值增长](../../03-math-analysis-iii/79-spectral-asymptotics.md)

## 数学修正

**原文：**

> $$ (f, g)_{H^1_0} = \int_\Omega \nabla f \cdot \nabla g dx. $$

**修正：**

> $$ (f, g)_{H^1_0} = \int_\Omega \nabla f \cdot \overline{\nabla g} dx. $$

**理由：** 原图∇g上有清楚横线，canonical漏共轭；第一变量线性复杂内积必须共轭第二变量，否则f=ig时正性失败。

**原文：**

> $$ ((-\Delta)^{-1} f_1, f_2) = (u_1, \Delta u_2) = -(\nabla u_1, \nabla u_2), $$

**修正：**

> $$ ((-\Delta)^{-1} f_1, f_2) = (u_1, -\Delta u_2) = (\nabla u_1, \nabla u_2), $$

**理由：** f2=-Δu2并且零边界，分部积分给正梯度内积；原图重复912同一符号错误，须与912–913正算子修复一致。

[相关正文：79：特征函数、变分原理与特征值增长](../../03-math-analysis-iii/79-spectral-asymptotics.md)

## 数学修正

**原文：**

> 其中 $\|f\|_{H^1_0}^2 = \sum_{k \geqslant 1} \lambda_k |c_k|^2$

**修正：**

> 其中 $c_k=(f,\varphi_k)_{L^2}$ 且 $\|f\|_{L^2}^2 = \sum_{k \geqslant 1} |c_k|^2$

**理由：** 本注记讨论任意f∈H¹而非H0¹，随后以常函数反例说明加权和未必有限；不能先写不存在的H0¹范数等式。Hilbert基下L²系数和Parseval唯一与前后解释一致。

**原文：**

> $$ \varphi_k(x) = \sin\left(\frac{k\pi}{d} x\right), \quad \lambda_k = \frac{\pi^2 k^2}{d^2}. $$

**修正：**

> $$ \varphi_k(x) = \sqrt{\frac2d}\sin\left(\frac{k\pi}{d} x\right), \quad \lambda_k = \frac{\pi^2 k^2}{d^2}. $$

**理由：** 此前固定φ_k为L²单位Hilbert基；原sin的范数sqrt(d/2)，补单位化系数以与本页c_k=(f,φ_k)一致。

**原文：**

> $$ \varphi_k(x) = \sin(kx), \quad \lambda_k = k^2. $$

**修正：**

> $$ \varphi_k(x) = \sqrt{\frac2\pi}\sin(kx), \quad \lambda_k = k^2. $$

**理由：** d=π时单位化系数为sqrt(2/π)，须同一般d、积分与系数联动。

**原文：**

> $$ (f, \varphi_k)_{L^2} = \int_0^\pi \sin(kx) dx = \frac{2}{k}. $$

**修正：**

> $$ (f, \varphi_k)_{L^2} = \sqrt{\frac2\pi}\int_0^\pi \sin(kx) dx = \sqrt{\frac2\pi}\frac{1-(-1)^k}{k}. $$

**理由：** 原图对全部k误写积分2/k，偶k实际0，奇k2/k；同时按单位化φ_k补sqrt(2/π)，保持前页Hilbert基约定。

**原文：**

> $c_k = \frac{2}{k}$

**修正：**

> $c_k = \sqrt{\frac2\pi}\frac{1-(-1)^k}{k}$

**理由：** Hilbert展开系数等于前式积分，需包含偶频为0与单位化常数。

**原文：**

> $$ \sum_{k \geqslant 1} \lambda_k |c_k|^2 = \sum_{k \geqslant 1} k^2 \frac{2}{k^2} = +\infty $$

**修正：**

> $$ \sum_{k \geqslant 1} \lambda_k |c_k|^2 = \sum_{k \geqslant 1} k^2 \frac{2(1-(-1)^k)^2}{\pi k^2} = +\infty $$

**理由：** 原式连2/k的平方也误写2/k²；修正后的单位化系数平方为2(1-(-1)^k)^2/(π k²)，奇k对应固定正数仍发散。

**原文：**

> 如果
> $$ \sum_{k \geqslant 1} b_k \varphi_k, $$

**修正：**

> 如果
> $$ g=\sum_{k \geqslant 1} b_k \varphi_k, $$

**理由：** 原图和canonical漏等式左边g；上文取任意g，紧后配对按b_k展开，唯一确定补g=。

**原文：**

> $$ \langle -\Delta f, g \rangle = \sum_{k \geqslant 1} \lambda_k c_k b_k, $$

**修正：**

> $$ \langle -\Delta f, \overline g \rangle = \sum_{k \geqslant 1} \lambda_k c_k \overline{b_k}, $$

**理由：** 原图g和b_k有共轭横线，canonical遗漏；分布采用线性测试配对，和第一变量线性L²内积一致须共轭测试g及系数。

**原文：**

> 这由 $(\Delta f, \varphi_k)_{L^2} = \lambda_k c_k$

**修正：**

> 这由 $\langle-\Delta f,\overline{\varphi_k}\rangle = \lambda_k c_k$

**理由：** 本页前式是Δφ_k=-λ_kφ_k，末句漏-；Δf通常仅H^-1，用对偶配对明确前文所谓形式L²内积，不假设额外正则性。

## 未决数学问题

**原文：**

> 我们令 $u_1 = f, u_2 = \varphi_k$

**问题：** 此页先取常函数f=1∈H¹\H0¹，第二注记又将u1=f代入要求u1∈H0¹的分部积分；应显式切回f∈H0¹，否则Δ1=0与-λ_k c_k矛盾。918–919对任意H0¹写(Δu1,u2)L²也只是形式记法，Δu1一般仅H^-1。可将整个第二注记改为H^-1/H0¹对偶配对，但作者未明确该f换域，需整段澄清；当前不扩写。

[相关正文：79：特征函数、变分原理与特征值增长](../../03-math-analysis-iii/79-spectral-asymptotics.md)

## 数学修正

**原文：**

> $$ R(u) = \frac{\langle -\Delta u, u \rangle_{L^2}}{\|u\|^2} \stackrel{\text{形式上}}{=} \frac{(-\Delta u, u)_{L^2}}{\|u\|^2}. $$

**修正：**

> $$ R(u) = \frac{\langle -\Delta u, \overline u \rangle_{L^2}}{\|u\|^2} \stackrel{\text{形式上}}{=} \frac{(-\Delta u, u)_{L^2}}{\|u\|^2}. $$

**理由：** 原图u上有共轭横线，canonical漏掉；分布配对测试函数须共轭u以成为实正Dirichlet能量，和形式L²内积一致。

**原文：**

> 3) 对于 $Q \in \operatorname{Gr}_k(H)$

**修正：**

> 4) 对于 $Q \in \operatorname{Gr}_k(H)$

**理由：** 原图两项均标3，但921–922明确称最后一项为4)，唯一序号修正。

**原文：**

> $u = \sum_{k \geqslant 1} c_k \varphi_k \in L^2(\Omega)$

**修正：**

> $u = \sum_{k \geqslant 1} c_k \varphi_k \in H^1_0(\Omega)-\{0\}$

**理由：** Rayleigh仅为非零H0¹元定义，定理1)2)证明中原写只L²弱化了前提；保留定理本来要求的非零H0¹，使能量加权和有限。

**原文：**

> $u \perp \varphi_1, \dots, u \perp \varphi_k$

**修正：**

> $u \perp \varphi_1, \dots, u \perp \varphi_{k-1}$

**理由：** 前述2)与紧接展开从j≥k一致，原图末k误多1；改为k-1，k=1时条件为空。

[相关正文：79：特征函数、变分原理与特征值增长](../../03-math-analysis-iii/79-spectral-asymptotics.md)

## 数学修正

**原文：**

> Ponacaré

**修正：**

> Poincaré

**理由：** 原图姓名拼写错，同页下文Poincaré正确；只改英文姓名。

**原文：**

> $$
> \begin{aligned}
> \lambda_k(\Omega_1) & \sup_{\substack{u \in \iota(\varphi_1) \wedge \cdots \wedge \iota(\varphi_k) \\ u \neq 0}} R(u) \\
> &= \nu\left(\iota(\varphi_1) \wedge \cdots \wedge \iota(\varphi_k)\right) \\
> &\geqslant \lambda_k(\Omega_2).
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \lambda_k(\Omega_1) &= \sup_{\substack{u \in \iota(\varphi_1) \wedge \cdots \wedge \iota(\varphi_k) \\ u \neq 0}} R(u) \\
> &= \nu\left(\iota(\varphi_1) \wedge \cdots \wedge \iota(\varphi_k)\right) \\
> &\geqslant \lambda_k(\Omega_2).
> \end{aligned}
> $$

**理由：** 原图此行漏等号，上面已确立同一sup恒等式，补=恢复比较链。

**原文：**

> 最后一个等号利用的是

**修正：**

> 最后一个不等号利用的是

**理由：** 原图末关系是≥λ_k(Ω2)，引用minmax给下界，不是等号。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> \mu(Q)\ge R(u)\ge\lambda_k
> ```

**正文：**

> $$\nu(Q) \geqslant R(u) \geqslant \lambda_k.$$

**理由：** 原图μ用于(k-1)维P的inf，本处k维Q的sup应ν，canonical已正确修复，保持。

[相关正文：79：特征函数、变分原理与特征值增长](../../03-math-analysis-iii/79-spectral-asymptotics.md)

## 数学修正

**原文：**

> $(0, d)^n \subset \Omega \subset (0, D)^n$ (通过平行移动, 这不改变特征值)

**修正：**

> $x_1+(0, d)^n \subset \Omega \subset x_2+(0, D)^n$ (分别通过平行移动, 这不改变特征值)

**理由：** 任意有界开Ω包含一小立方体且包含在一大立方体，但两者一般不共用同一角点；允许分别平移的x1,x2后几何包含和谱比较正确，原后续标准cube特征值因平移不变。

**原文：**

> $$c_1 = \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |D|^2}, \quad c_2 = \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |d|^2},$$

**修正：**

> $$c_1 = \frac{(2\pi)^2}{2|B_n(1)|^{\frac{2}{n}} |D|^2}, \quad c_2 = \frac{2(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |d|^2},$$

**理由：** 只知λ_k(cube)~C_Dk^{2/n}不推出最终≥C_Dk^{2/n}；取一半渐近常数可由ratio→1直接保证最终下界，同上界取双倍联动。

**原文：**

> $$c_1 = \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |D|^2}, \quad c_2 = \frac{(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |d|^2},$$

**修正：**

> $$c_1 = \frac{(2\pi)^2}{2|B_n(1)|^{\frac{2}{n}} |D|^2}, \quad c_2 = \frac{2(2\pi)^2}{|B_n(1)|^{\frac{2}{n}} |d|^2},$$

**理由：** 原仅渐近C_d，不能把C_d直接当逐k上界（n=1小cube可恰等，大于等于关系在高维通常有边界项）；双倍常数由渐近ratio→1确保最终上界。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> c_1k^{2/n}\le\lambda_k(\Omega)\le 2 k^{2/n}
> ```

**正文：**

> $$c_1 k^{\frac{2}{n}} \leqslant \lambda_k(\Omega) \leqslant c_2 k^{\frac{2}{n}}, \quad k \to \infty.$$

**理由：** 原图上界漏c下标写2，前后都定义c1,c2；canonical已恢复c2，保持。
