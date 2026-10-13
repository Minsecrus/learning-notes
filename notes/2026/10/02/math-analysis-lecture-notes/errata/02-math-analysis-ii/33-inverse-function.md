# 勘误：33 子流形与反函数定理

[返回勘误目录](../../errata.md) · [数学分析 2 勘误](../02-math-analysis-ii.md)

[相关正文：子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)

## 数学修正

**原文：**

> 整数 $d \geqslant 0$

**修正：**

> 整数 $0\leqslant d\leqslant n$

**理由：** 定义190复述定义189，后n−d坐标的表达要求d不超过n；与前页同一维数范围一致。

**原文：**

> $\Phi : U \cap M = V \cap (\mathbb{R}^d \times \{0\})$

**修正：**

> $\Phi(U \cap M) = V \cap (\mathbb{R}^d \times \{0\})$

**理由：** 子流形定义要求取集合U∩M在Φ下的像，原图复述时再次将取像错成冒号；与定义189联动修正。

**原文：**

> 局部上 $M$ 是 $\mathbb{R}^n$

**修正：**

> 局部上 $M$ 是 $\mathbb{R}^d$

**理由：** 前后都已明确M局部微分同胚于Rd中的开集/开球，n是环境维数不能代替M维数；d<n的曲线或曲面即可反证原句。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> ```text
> y_{d+1},\cdots,y_d 以及 \Phi^*y_{d+1},\cdots,\Phi^*y_d
> ```

**正文：**

> $\Phi^*y_{d+1}, \cdots, \Phi^*y_n$

**理由：** 原图两份n−d个函数列表的末指标都错为d；同段零点公式及前页定义要求d+1到n。canonical已正确录为yn，保持该修复。

[相关正文：子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)

## 数学修正

**原文：**

> $$ \begin{aligned} y + h &= f(g(y + h)) = f(x + \overbrace{B(h) + \Delta(h)}^{o(1)}) \\ &= y + A(\underbrace{B(h)}_{=h} + \Delta(h)) + \delta(B(h) + \Delta(h)). \end{aligned} $$

**修正：**

> $$ \begin{aligned} y + h &= f(g(y + h)) = f(x + \overbrace{B(h) + \Delta(h)}^{o(1)}) \\ &= y + A(B(h) + \Delta(h)) + \delta(B(h) + \Delta(h)). \end{aligned} $$

**理由：** B=A^-1一般不是Id，故B(h)=h的原图括号注记错误；实际在A作用后才有A(B(h))=h。删除错误注记，保留完整的正确A(B(h)+Delta)运算。

**原文：**

> 对任意的 $x, y \in X$

**修正：**

> 对任意的 $x, x' \in X$

**理由：** 紧随压缩不等式使用x及x′，原图量词只写x、y而未绑定x′；统一量化与公式同一对点，保持Banach定理条件。

[相关正文：子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)

## 数学修正

**原文：**

> $$
> F:\mathbb{R}^n\to\mathbb{R}^n,\quad x\mapsto df(x_0)^{-1}\big((f(x_0+x)-f(x_0))\big).
> $$

**修正：**

> $$
> F:\{x\in\mathbb{R}^n:x_0+x\in\Omega\}\to\mathbb{R}^n,\quad x\mapsto df(x_0)^{-1}\big((f(x_0+x)-f(x_0))\big).
> $$

**理由：** [子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)f仅定义于开集Ω；F(x)含f(x0+x)，必须满足x0+x∈Ω，即平移域Ω-x0，不能无条件宣称在整个R^n定义。

**原文：**

> $f=\tau_{f(x_0)}\circ df(x_0)^{-1}\circ F\circ\tau_{-x_0}$

**修正：**

> $f=\tau_{f(x_0)}\circ df(x_0)\circ F\circ\tau_{-x_0}$

**理由：** 按原图F定义，F(x-x0)=df(x0)^-1(f(x)-f(x0))；左乘df(x0)再平移才能还原f，再乘逆矩阵将额外引入第二个逆因子。

**原文：**

> $$
> dT(0)=df(0)-\mathrm{Id}=0.
> $$

**修正：**

> $$
> dT(0)=\mathrm{Id}-df(0)=0.
> $$

**理由：** T(x)=x-f(x)+y，直接求微分为Id-df(x)；归一化点上两者都为0不使错误的微分表达变正确。

**原文：**

> 根据 $df$ 的连续性，存在 $r>0$，使得对任意的 $x\in B(0,r)$

**修正：**

> 根据 $df$ 的连续性，存在 $r>0$，使得 $\overline{B(0,r)}\subset\Omega$，并且对任意的 $x\in\overline{B(0,r)}$

**理由：** 后页在闭球X上用Banach定理，要求f、T在闭球所有点定义并有统一导数界。Ω开且0∈Ω、dT(0)=0，由连续性可先取较大邻域再缩半径，获得闭球包含关系和同一严格界。

**原文：**

> 其中，矩阵的范数 $\|dT(x)\|$ 我们可以任意地事先取定。

**修正：**

> 其中，矩阵的范数 $\|dT(x)\|$ 取为所选向量范数诱导的算子范数。

**理由：** 下页直接使用||dT(x)v||≤||dT(x)|| ||v||，需与向量范数相容的诱导算子范数。任意缩放矩阵范数不保证该常数为1；若坚持任意矩阵范数须另写等价常数并相应缩小导数界。此改法保留现有1/10估计。

**原文：**

> $$
> g(t)=f(tx+(1-t)x')-(x+(1-t)x').
> $$

**修正：**

> $$
> g(t)=f(tx+(1-t)x')-(tx+(1-t)x').
> $$

**理由：** 原图减项漏t。g需是f-Id在x′到x线段上的限制，才能有g(1)-g(0)=(f(x)-x)-(f(x′)-x′)及其导数式。

**原文：**

> $$
> \begin{aligned}
> T(x)-T(x')&=(f(x)-x)-(f(x')-x')\\
> &=g(1)-g(0)=\int_0^1g'(t)dt\\
> &=\int_0^1 df(tx+(1-t)x')(x-x')-(x-x')dt.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> T(x)-T(x')&=(x-f(x))-(x'-f(x'))\\
> &=-(g(1)-g(0))=-\int_0^1g'(t)dt\\
> &=\int_0^1\big(\mathrm{Id}-df(tx+(1-t)x')\big)(x-x')dt.
> \end{aligned}
> $$

**理由：** 保留T=x-f+y和修复后的g=f-Id，则T(x)-T(x′)=-(g(1)-g(0))；原图整条等号链反号。末项即积分dT(path)(x-x′)，与后页压缩估计一致，必须联动更正。

[相关正文：子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)

## 数学修正

**原文：**

> $$
> \begin{aligned}
> \|T(x)-T(x')\|&=\int_0^1\|T(tx+(1-t)x')(x-x')\|dt\\
> &\leqslant\int_0^1\frac1{10}\|(x-x')\|dt\\
> &=\frac1{10}\|(x-x')\|.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|T(x)-T(x')\|&\leqslant\int_0^1\|dT(tx+(1-t)x')(x-x')\|dt\\
> &\leqslant\int_0^1\frac1{10}\|(x-x')\|dt\\
> &=\frac1{10}\|(x-x')\|.
> \end{aligned}
> $$

**理由：** 上一页的向量积分取范数必须使用积分三角不等式，不能一般取等号；被积分算子是dT，T(path)本身是向量不能再作用于(x-x′)。

**原文：**

> 使得 $f(X)\subset X$

**修正：**

> 使得 $T(X)\subset X$

**理由：** 压缩映像定理用于T而非f，T的不动点才对应f(x)=y；同段后文明确写T:X→X。

**原文：**

> 实际上，我们取 $X=B(0,r)$

**修正：**

> 实际上，我们取 $X=\overline{B(0,r)}$

**理由：** 实际应用Banach定理的空间在本页随后明确是闭球，开球一般不完备；提前统一为同一闭球以避免更换X时遗漏边界。与上一页闭球包含Ω的修复联动。

**原文：**

> 对于 $x'=0$ 和 $x\in B(0,r)$

**修正：**

> 对于 $x'=0$ 和 $x\in\overline{B(0,r)}$

**理由：** 要证明T把实际使用的闭球X映入自身，估计须包含边界；导数界在上一页已取于闭球，|y|<r/2使边界仍得到0.1r+r/2<r。

**原文：**

> $$
> \begin{aligned}
> \|T(x)\|&\leqslant\|T(x)-T(0)\|+\|T(0)\|\\
> &=\frac1{10}|x|+|y|\\
> &<r.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \|T(x)\|&\leqslant\|T(x)-T(0)\|+\|T(0)\|\\
> &\leqslant\frac1{10}|x|+|y|\\
> &<r.
> \end{aligned}
> $$

**理由：** 由压缩估计仅知||T(x)-T(0)||≤0.1||x||，并非一般相等；原图此处误用了等号。

**原文：**

> $$
> U=B(0,r)\cap T^{-1}(B(0,\frac r2)),\quad V=B(0,\frac r2).
> $$

**修正：**

> $$
> U=B(0,r)\cap f^{-1}(B(0,\frac r2)),\quad V=B(0,\frac r2).
> $$

**理由：** 定义U是为了得到f:U→V，而T依赖事先给定的y且不是f。所需原像应为f^-1(V)；例如f=Id时T恒等于参数y，原写法让U为整球，f(U)不等于V。

**原文：**

> $$
> \begin{aligned}
> 0&=\|f(x)-f(x')\|=\int_0^1df(tx+(1-t)x')(x-x')dt\\
> &=x-x'+\int_0^1\big(df(tx+(1-t)x')-\mathrm{Id}\big)(x-x').
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> 0&=f(x)-f(x')=\int_0^1df(tx+(1-t)x')(x-x')dt\\
> &=x-x'+\int_0^1\big(df(tx+(1-t)x')-\mathrm{Id}\big)(x-x')dt.
> \end{aligned}
> $$

**理由：** 这是由f(x)=f(x′)得到的向量恒等式；原图把标量范数与向量积分直接相等，且最后积分漏dt。先写向量差为0，再在下一行取范数即可恢复论证。

[相关正文：子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)

## 数学修正

**原文：**

> $$
> |g(y)-g(y')|\leqslant1.1\times|y-y'|.
> $$

**修正：**

> $$
> |g(y)-g(y')|\leqslant\frac{10}{9}|y-y'|.
> $$

**理由：** 本页上一行a≤a/10+b唯一推出a≤10b/9，而10/9>1.1。取一维f(x)=0.905x，dT=0.095<0.1但逆的Lipschitz常数1/0.905>1.1，足以排除原常数。

**原文：**

> $$
> B_{ij}(y)=\sum\frac{A_{i'j'}(g(y))A_{i''j''}(g(y))\cdots A_{i'''j'''}(g(y))}{\det A(y)}.
> $$

**修正：**

> $$
> B_{ij}(y)=\sum\frac{A_{i'j'}(g(y))A_{i''j''}(g(y))\cdots A_{i'''j'''}(g(y))}{\det A(g(y))}.
> $$

**理由：** 原图A定义在U上且B(y)=A^-1(g(y))，逆矩阵的分母必须与分子同样在g(y)求值；y位于V，不保证属于A的定义域U。

**原文：**

> 在求 $\ell$ 次导数的时候，分母上只会出现 $\det A$，而导数都出现在分子上面，而由链式法导致的 $g$ 的导数至多出现到 $\ell-1$ 阶。据此，我们知道 $B_{ij}(y)$ 是 $C^{k-1}$ 的，从而 $g=f^{-1}$ 是 $C^k$ 的。

**修正：**

> 由链式法则，在求 $\ell$ 次导数的时候，$g$ 的导数至多出现到 $\ell$ 阶。已知 $g\in C^1$，由 $dg=A^{-1}\circ g$ 逐阶归纳：若 $g\in C^j$ 且 $1\leqslant j\leqslant k-1$，则 $dg\in C^j$，因而 $g\in C^{j+1}$。据此，我们知道 $B_{ij}(y)$ 是 $C^{k-1}$ 的，从而 $g=f^{-1}$ 是 $C^k$ 的。

**理由：** 一阶求导已出现DA^-1(g)·dg，故声称g最多出现ℓ−1阶错误。A∈C^{k−1}且det A≠0给出A^-1∈C^{k−1}；从正则性引理已知g∈C^1，再以dg=A^-1∘g逐阶归纳至C^k，避免把尚未得到的高阶导数作为前提。这只修复已有定理证明，不添加作业解答。

[相关正文：子流形与反函数定理](../../02-math-analysis-ii/33-inverse-function/33-01-p0368-0374.md)

## 数学修正

**原文：**

> $(x,\cdots,x_n)$

**修正：**

> $(x_1,\cdots,x_n)$

**理由：** 前页及图中的U坐标为(x1,…,xn)，原图本页漏首个下标1；x若指整向量不能与x2,…,xn组成坐标系。

[相关正文：33.1：习题课：拓扑空间](../../02-math-analysis-ii/33-inverse-function/33-03-p0375-0377.md)

## 数学修正

**原文：**

> $\mathcal{T} = \{U | U \subset X\}$

**修正：**

> $\mathcal{T}\subseteq\{U | U \subset X\}$

**理由：** 原图等号把T固定为全部子集即离散拓扑，却说是某些子集并随后讨论一般拓扑；初始条件应T是幂集的子集，公理再决定哪些子集为开集。

[相关正文：33.1：习题课：拓扑空间](../../02-math-analysis-ii/33-inverse-function/33-03-p0375-0377.md)

## 数学修正

**原文：**

> $$
> \overline{d}(\iota(x), \iota(y)) = d(x, y),
> $$

**修正：**

> $$
> \overline{d}(f(x), f(y)) = d(x, y),
> $$

**理由：** 等距同构定义取定的双射为f，iota是前页子集包含映射且这里没有到目标空间的iota；距离保持条件应作用于同一双射f。

[相关正文：33.2：作业：反函数和隐函数定理](../../02-math-analysis-ii/33-inverse-function/33-04-p0378-0383.md)

## 数学修正

**原文：**

> B3) $\Omega = \{(x, y) \in \mathbb{R}^2 | x > 0\} \subset \mathbb{R}^2$

**修正：**

> B2) $\Omega = \{(x, y) \in \mathbb{R}^2 | x > 0\} \subset \mathbb{R}^2$

**理由：** 本组先B1，接着有两个不同的B3；第一条压力函数问题位于B1和下一条B3映射之间，按相邻题序其编号唯一应B2，避免两个不同题目共享同一定位标签。

**原文：**

> $(x_0, y_0 \in \Omega)$

**修正：**

> $(x_0, y_0)\in\Omega$

**理由：** Ω是二维点组成的开集，条件应二维元组(x0,y0)属于Ω；原图把成员关系放在元组括号中导致点的两个分量未正确绑定。

**原文：**

> 存在 $p_0$ 点处的一个开邻域 $U$ 以及 $U$ 上的 $C^1$ 函数 $\phi$，使得

**修正：**

> 存在 $x_0$ 点处的一个开邻域 $U$、$y_0$ 点处的一个开邻域 $V$，以及从 $U$ 到 $V$ 的 $C^1$ 函数 $\phi$，使得对任意的 $(x,y)\in U\times V$，

**理由：** F在(x0,y0)为0且Fy在该点为1，隐函数的自变量邻域应围绕x0。p0是p函数值而非x基点；一般p可在远处产生别的根，等价关系须限定局部y邻域，不可宣称Ω全域只有一根。

**原文：**

> 3) 证明，对任意的 $(x, y) \in \mathbb{R}^2$，总能开集 $U$ 和 $V$，使得 $(x, y) \in U$，$f(x, y) \in V$，$f : U \to V$ 是光滑的微分同胚。

**修正：**

> 3) 证明，对任意的 $(x, y) \in \mathbb{R}^2$，总能找到开集 $U$ 和 $V$，使得 $(x, y) \in U$，$\varphi(x, y) \in V$，$\varphi : U \to V$ 是光滑的微分同胚。

**理由：** 该题唯一给定的映射是varphi，前两问均检验它的Jacobi矩阵。原图本条复制反函数定理时误用f，改回varphi并保留同一局部结论。

[相关正文：33.2：作业：反函数和隐函数定理](../../02-math-analysis-ii/33-inverse-function/33-04-p0378-0383.md)

## 数学修正

**原文：**

> 其中 $|x| = \sqrt{|x_1|^2 + \cdots + |x_n|^2}$。假设 $\lambda_1, \cdots, \lambda_n$ 是 $A$ 的特征值。
>
> D1) 试证明，$\|A\| = \sup_{k=1,\cdots,n} |\lambda_k|$。

**修正：**

> 其中 $|x| = \sqrt{|x_1|^2 + \cdots + |x_n|^2}$。假设 $\lambda_1, \cdots, \lambda_n$ 是 $A^{\mathsf T}A$ 的特征值。
>
> D1) 试证明，$\|A\| = \sqrt{\max_{k=1,\cdots,n}\lambda_k}$。

**理由：** 原图M_n是全部实矩阵，没有对称或自伴条件。A=[[0,1],[0,0]]的欧氏算子范数为1而所有特征值为0，否定原式。定义给出||A||²=sup_{|x|=1}xᵀAᵀAx，AᵀA对称半正定，故唯一通用谱表达为其最大特征值平方根。保留所有实矩阵的原量词及后续范数等价任务，不添加解答；若仅加A对称，将改变原问题空间。

**原文：**

> 是 $\mathbb{R}^2$ 上的 $C^1$ 的群结构 $(\mathbb{R}, \star)$

**修正：**

> 是 $\mathbb{R}^2$ 上的 $C^1$ 的群结构 $(\mathbb{R}^2, \star)$

**理由：** 同一题映射及元素均为二维向量，原图结尾群的底集误写R，应为R²。

**原文：**

> $$\|d\mathcal{C}(A) - \mathbf{I}_{n^2 \times n^2}\| \leqslant 6\|A - \mathbf{I}_{n \times n}\| + 3\|A - \mathbf{I}_{n \times n}\|^2.$$

**修正：**

> $$\|d\mathcal{C}(A) - 3\mathbf{I}_{n^2 \times n^2}\| \leqslant 6\|A - \mathbf{I}_{n \times n}\| + 3\|A - \mathbf{I}_{n \times n}\|^2.$$

**理由：** C(A)=A³的微分是X↦A²X+AXA+XA²，在A=I时为3X。原图用Id作差，在A=I使左边2、右边0，直接矛盾；将基准改为3Id后，令E=A−I，差算子为3EX+3XE+E²X+EXE+XE²，恰给出题中的6||E||+3||E||²。只修题中公式，不添加公开解答。

[相关正文：33.2：作业：反函数和隐函数定理](../../02-math-analysis-ii/33-inverse-function/33-04-p0378-0383.md)

## 数学修正

**原文：**

> 计算它的微分 $d\mathcal{C}(A)$

**修正：**

> 计算它的微分 $d\Theta(A)$

**理由：** D5定义平方映射Theta并将它用于平方根的反函数定理，C是前题立方映射，原图微分记号未切换。应求本题的dTheta。

## 未决数学问题

**原文：**

> E4)

**问题：** E组跳过E3且下一题E5，题目内容无缺失证据，保留原编号，不据题序补造缺题或强改两个后继编号。
