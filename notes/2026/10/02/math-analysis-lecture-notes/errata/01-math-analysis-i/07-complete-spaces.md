# 勘误：7 级数判别、完备空间与不动点

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> $|P_n| \geqslant \frac{P}{2}$

**修正：**

> $|P_n| \geqslant \frac{|P|}{2}$

**理由：** 源图分子P没有模，属于source_typo。P为非零复数无法与实数有序比较；由Pn→P≠0及反三角不等式最终|Pn|≥|P|/2，修复右侧模。

**原文：**

> $$
> |a_n \cdot a_{n+1} \cdot \cdots \cdot a_{n+p} - 1| < \frac{\varepsilon}{P_{n-1}} < \frac{2\varepsilon}{|P|}.
> $$

**修正：**

> $$
> |a_n \cdot a_{n+1} \cdot \cdots \cdot a_{n+p} - 1| < \frac{\varepsilon}{|P_{n-1}|} < \frac{2\varepsilon}{|P|}.
> $$

**理由：** 源图分母没有模，属于source_typo。取绝对值后的乘积恒等式|Pn−1−Pn+p|=|Pn−1||a_n…a_n+p−1|，除以正实数|Pn−1|得到正确上界。

**原文：**

> $P_{N+p} < 2P_N$

**修正：**

> $|P_{N+p}| < 2|P_N|$

**理由：** 源图两处Pn没有模，属于source_typo。复数序列有界是模的上界；应用乘积尾项的|乘积|<2与恒等式PN+p=PN×尾乘积可得|PN+p|<2|PN|，p=0也直接满足。

**原文：**

> 如果不然，那么 $\lim_{n\to\infty} P_n \neq 0$，首先取 $\varepsilon = \frac{1}{2}$

**修正：**

> 如果不然，那么 $\lim_{n\to\infty} P_n = 0$，首先取 $\varepsilon = \frac{1}{2}$

**理由：** 源图反证假设确印≠0，属于source_typo。已证明极限存在，此处要证明非零，其否定须极限=0，才与固定非零PN后的|Pn/PN−1|<1/2取极限1≤1/2矛盾。

**原文：**

> 固定 $N$，$\lim_{n\to\infty} P_n \neq 0$，在上面不等式中令 $n \to \infty$ 就得到了矛盾。

**修正：**

> 固定 $N$，$\lim_{n\to\infty} P_n = 0$，在上面不等式中令 $n \to \infty$ 就得到了矛盾。

**理由：** 源图固定N后的假设也印≠0，属于source_typo。继承反证极限=0，左侧趋1，与<1/2给出的≤1/2矛盾；修复反证条件。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> 是复数的数列，如果 $\prod_{n=1}^\infty (1 + |a_n|)$ 收敛

**修正：**

> 是复数的数列，且对任意的 $n$ 都有 $a_n \neq -1$。如果 $\prod_{n=1}^\infty (1 + |a_n|)$ 收敛

**理由：** 源图推论30遗漏乘积各因子非零的条件。[级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)定义要求无限乘积的因子非零且极限非零，应用到因子 $1+a_n$ 即要求 $a_n\neq-1$。取 $a_1=-1$、其余 $a_n=0$，绝对乘积等于2而原乘积恒为0，直接否证原无条件断言。补入条件才能使用所引乘积Cauchy准则。

**原文：**

> $$
> (1 - a_1) \cdots (1 - a_n) \leqslant \frac{1}{(1 + a_1) \cdots (1 + a_n)} \leqslant \frac{1}{1 + a_1 + \cdots a_n} \to 0.
> $$

**修正：**

> $$
> (1 - a_1) \cdots (1 - a_n) \leqslant \frac{1}{(1 + a_1) \cdots (1 + a_n)} \leqslant \frac{1}{1 + a_1 + \cdots + a_n} \to 0.
> $$

**理由：** 源图分母省略号后漏加号，表示正项级数的部分和，需为 $1+a_1+\cdots+a_n$ 才与前面展开乘积的下界及级数发散趋零的论证一致。

**原文：**

> 反过从级数收敛证明乘积收敛是显然的。

**修正：**

> 反过来，从级数收敛证明乘积收敛是显然的。

**理由：** 源图末句漏“来”字，“反过来”引出逆向蕴含。仅恢复连接词，保留原书将该逆向证明交给读者的结构，不补写练习解答。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> 熟悉算数基本定理

**修正：**

> 熟悉算术基本定理

**理由：** 源图确印“算数基本定理”，所述正整数唯一素因数分解的标准术语为算术基本定理。仅校正术语字误。

**原文：**

> $$
> \frac{1}{1 - (p_k)^{-s}} = \sum_{e=1}^{\infty} \frac{1}{p_k^{es}},
> $$

**修正：**

> $$
> \frac{1}{1 - (p_k)^{-s}} = \sum_{e=0}^{\infty} \frac{1}{p_k^{es}},
> $$

**理由：** 源图下限确印 $e=1$。当 $q=p_k^{-s}\in(0,1)$，几何和 $(1-q)^{-1}$ 包括常数项1，因此指数必须从0开始；从1开始的和为 $q/(1-q)$，相差1。

**原文：**

> $$
> P_N = \prod_{k \leqslant N} \frac{1}{1 - p_k^{-s}} = \sum_{e_1, e_2, \cdots, e_N = 1}^{\infty} \frac{1}{p_1^{e_1 s} p_2^{e_2 s} \cdots p_N^{e_N s}} = \sum_{e_1, e_2, \cdots, e_N = 1}^{\infty} \frac{1}{\left(p_1^{e_1} p_2^{e_2} \cdots p_N^{e_N}\right)^s}.
> $$

**修正：**

> $$
> P_N = \prod_{k \leqslant N} \frac{1}{1 - p_k^{-s}} = \sum_{e_1, e_2, \cdots, e_N = 0}^{\infty} \frac{1}{p_1^{e_1 s} p_2^{e_2 s} \cdots p_N^{e_N s}} = \sum_{e_1, e_2, \cdots, e_N = 0}^{\infty} \frac{1}{\left(p_1^{e_1} p_2^{e_2} \cdots p_N^{e_N}\right)^s}.
> $$

**理由：** 源图两处多重求和下限都印1。每个几何因子包括指数0，乘积展开必须允许各 $e_j\geqslant0$；否则既遗漏整数1，也遗漏不含全部前N个素数的整数，与下一行 $\mathbf N_N$ 的定义矛盾。

**原文：**

> $$
> P_N = \prod_{k \leqslant n} \frac{1}{1 - p_k^{-s}} = \sum_{n \in \mathbf{N}_N} \frac{1}{n^s}.
> $$

**修正：**

> $$
> P_N = \prod_{k \leqslant N} \frac{1}{1 - p_k^{-s}} = \sum_{n \in \mathbf{N}_N} \frac{1}{n^s}.
> $$

**理由：** 源图该乘积上限印小写n，而 $P_N$ 及前面定义均为前N个素数的乘积，求和中的n只是整数变量。乘积上限应为N，与 $\mathbf N_N$ 的素因数限制一致。

**原文：**

> 上式的右端是零

**修正：**

> 上式的左端是零

**理由：** 源图备注印“右端是零”，但右端 $\sum_{n>p_N}n^{-s}$ 始终有正项。若只有有限个素数且已列全，含有 $>p_N$ 素因子的整数集合为空，因此中间的和及左端差 $\zeta(s)-P_N$ 为零。只改所指位置。

**原文：**

> $$
> \begin{aligned}
> \sum_{k=1}^{\infty} \frac{1}{n^s} &= \underbrace{\frac{1}{1^s}}_{1\text{个，} \geqslant \frac{1}{2^s}} + \underbrace{\left(\frac{1}{2^s} + \frac{1}{3^s}\right)}_{2\text{个，} \geqslant \frac{1}{4^s}} + \cdots + \underbrace{\left(\frac{1}{2^{(k-1)s}} + \frac{1}{\left(2^{k-1} + 1\right)^s} + \cdot + \frac{1}{\left(2^k - 1\right)^s}\right)}_{2^{k-1}\text{个，} \geqslant \frac{1}{2^{ks}}} + \cdots \\
> &\geqslant \sum_{k=1}^{\infty} \frac{1}{2^{ks}} \times 2^{k-1} = \frac{1}{2} \frac{1}{1 - \frac{1}{2^{s-1}}}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \sum_{n=1}^{\infty} \frac{1}{n^s} &= \underbrace{\frac{1}{1^s}}_{1\text{个，} \geqslant \frac{1}{2^s}} + \underbrace{\left(\frac{1}{2^s} + \frac{1}{3^s}\right)}_{2\text{个，} \geqslant \frac{1}{4^s}} + \cdots + \underbrace{\left(\frac{1}{2^{(k-1)s}} + \frac{1}{\left(2^{k-1} + 1\right)^s} + \cdots + \frac{1}{\left(2^k - 1\right)^s}\right)}_{2^{k-1}\text{个，} \geqslant \frac{1}{2^{ks}}} + \cdots \\
> &\geqslant \sum_{k=1}^{\infty} \frac{1}{2^{ks}} \times 2^{k-1} = \frac{1}{2} \frac{1}{2^{s-1} - 1}.
> \end{aligned}
> $$

**理由：** 源图求和指标印k而分母使用未绑定n；正在展开 $\zeta(s)=\sum_{n=1}^\infty n^{-s}$。把求和指标改为n绑定同一变量，分组中的k作为组号保留。

**原文：**

> $$
> \begin{aligned}
> \sum_{k=1}^{\infty} \frac{1}{n^s} &= \underbrace{\frac{1}{1^s}}_{1\text{个，} \geqslant \frac{1}{2^s}} + \underbrace{\left(\frac{1}{2^s} + \frac{1}{3^s}\right)}_{2\text{个，} \geqslant \frac{1}{4^s}} + \cdots + \underbrace{\left(\frac{1}{2^{(k-1)s}} + \frac{1}{\left(2^{k-1} + 1\right)^s} + \cdot + \frac{1}{\left(2^k - 1\right)^s}\right)}_{2^{k-1}\text{个，} \geqslant \frac{1}{2^{ks}}} + \cdots \\
> &\geqslant \sum_{k=1}^{\infty} \frac{1}{2^{ks}} \times 2^{k-1} = \frac{1}{2} \frac{1}{1 - \frac{1}{2^{s-1}}}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \sum_{n=1}^{\infty} \frac{1}{n^s} &= \underbrace{\frac{1}{1^s}}_{1\text{个，} \geqslant \frac{1}{2^s}} + \underbrace{\left(\frac{1}{2^s} + \frac{1}{3^s}\right)}_{2\text{个，} \geqslant \frac{1}{4^s}} + \cdots + \underbrace{\left(\frac{1}{2^{(k-1)s}} + \frac{1}{\left(2^{k-1} + 1\right)^s} + \cdots + \frac{1}{\left(2^k - 1\right)^s}\right)}_{2^{k-1}\text{个，} \geqslant \frac{1}{2^{ks}}} + \cdots \\
> &\geqslant \sum_{k=1}^{\infty} \frac{1}{2^{ks}} \times 2^{k-1} = \frac{1}{2} \frac{1}{2^{s-1} - 1}.
> \end{aligned}
> $$

**理由：** 源图单点缺完整省略号，括号下标声明有 $2^{k-1}$ 个连续分母项，恢复三点表示这些项，不改变分组范围。

**原文：**

> $$
> \begin{aligned}
> \sum_{k=1}^{\infty} \frac{1}{n^s} &= \underbrace{\frac{1}{1^s}}_{1\text{个，} \geqslant \frac{1}{2^s}} + \underbrace{\left(\frac{1}{2^s} + \frac{1}{3^s}\right)}_{2\text{个，} \geqslant \frac{1}{4^s}} + \cdots + \underbrace{\left(\frac{1}{2^{(k-1)s}} + \frac{1}{\left(2^{k-1} + 1\right)^s} + \cdot + \frac{1}{\left(2^k - 1\right)^s}\right)}_{2^{k-1}\text{个，} \geqslant \frac{1}{2^{ks}}} + \cdots \\
> &\geqslant \sum_{k=1}^{\infty} \frac{1}{2^{ks}} \times 2^{k-1} = \frac{1}{2} \frac{1}{1 - \frac{1}{2^{s-1}}}.
> \end{aligned}
> $$

**修正：**

> $$
> \begin{aligned}
> \sum_{n=1}^{\infty} \frac{1}{n^s} &= \underbrace{\frac{1}{1^s}}_{1\text{个，} \geqslant \frac{1}{2^s}} + \underbrace{\left(\frac{1}{2^s} + \frac{1}{3^s}\right)}_{2\text{个，} \geqslant \frac{1}{4^s}} + \cdots + \underbrace{\left(\frac{1}{2^{(k-1)s}} + \frac{1}{\left(2^{k-1} + 1\right)^s} + \cdots + \frac{1}{\left(2^k - 1\right)^s}\right)}_{2^{k-1}\text{个，} \geqslant \frac{1}{2^{ks}}} + \cdots \\
> &\geqslant \sum_{k=1}^{\infty} \frac{1}{2^{ks}} \times 2^{k-1} = \frac{1}{2} \frac{1}{2^{s-1} - 1}.
> \end{aligned}
> $$

**理由：** 源图最后几何和少了从k=1开始所需的首项因子。令 $q=2^{1-s}$，上一式和为 $\frac12\sum_{k=1}^{\infty}q^k=\frac{q}{2(1-q)}=\frac1{2(2^{s-1}-1)}$。当s=2时原等号右边1，真实几何和为1/2，验证需要修正。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> 如果 $\mathscr{P}$ 时有限集合

**修正：**

> 如果 $\mathscr{P}$ 是有限集合

**理由：** 源图误印“时有限集合”，假设谓语应为“是有限集合”，数学条件与反证结构不变。

**原文：**

> $$
> \zeta(s_\ell) = \prod_{p \in \mathscr{P}} \frac{1}{1 - p^{-s_\ell}} \xrightarrow{\ell \to \infty} \prod_{p \in \mathscr{P}} \frac{1}{1 - p^{-1}} = 1.
> $$

**修正：**

> $$
> \zeta(s_\ell) = \prod_{p \in \mathscr{P}} \frac{1}{1 - p^{-s_\ell}} \xrightarrow{\ell \to \infty} \prod_{p \in \mathscr{P}} \frac{1}{1 - p^{-1}} < +\infty.
> $$

**理由：** 源图把有限素数乘积极限写成1。每个因子 $p/(p-1)>1$，且至少有素数2，乘积不能为1。有限集合下各因子都是有限正数，乘积必有限；此有限性才与上一页修正后的 $\zeta(s)\to+\infty$ 矛盾。保留原乘积，校正其结论为有限。

**原文：**

> 素数的个数的渐进公式

**修正：**

> 素数的个数的渐近公式

**理由：** 源图所述素数计数及第n个素数的大规模近似属于渐近公式，原“渐进”是数学术语字误。原年份、人名和叙述保持。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> 作为上判别法的应用

**修正：**

> 作为上述判别法的应用

**理由：** 源图此处漏“述”，句子承接刚证明的Dirichlet与Abel判别法，应为“上述判别法”。只补漏字。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> $$
> \sum_{b=1}^{\infty} \frac{(-1)^n}{n} \left(1 + \frac{1}{n}\right)^n, \quad \sum_{n=1}^{\infty} \frac{(-1)^n}{n} \cos(\frac{1}{n}).
> $$

**修正：**

> $$
> \sum_{n=1}^{\infty} \frac{(-1)^n}{n} \left(1 + \frac{1}{n}\right)^n, \quad \sum_{n=1}^{\infty} \frac{(-1)^n}{n} \cos(\frac{1}{n}).
> $$

**理由：** 源图下限确印b=1，通项仅使用n，恢复求和绑定n，不改变题目内容。

**原文：**

> $d(f, g) = \sup_{x \in [0, 1]} |f(x)|$

**修正：**

> $d(f, g) = \sup_{x \in [0, 1]} |f(x)-g(x)|$

**理由：** 源图距离漏g，f=g=1时原d(f,f)=1违背对角零。sup|f−g|与后面函数空间定义相符，恢复度量。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> 在分析学习中，最经常用到的距离空间的实际上都是赋范线性空间

**修正：**

> 在分析学习中，最经常用到的距离空间实际上都是赋范线性空间

**理由：** 源图实印多余“的”，属于source_typo。删掉“距离空间的实际上”中的冗字，保持原论述。

## 原讲义笔误（正文已订正）

**原讲义片段：**

> xn=T(x)

**正文：**

> $x_n = T^n(x_0)$

**理由：** 源图迭代点误印，canonical已修复，与随后的迭代等式一致。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 数学修正

**原文：**

> $$
> \|x\|_2 \leqslant C_1 \|x\|_1, \quad \|x\|_1 \leqslant C_2 \|x\|_1,
> $$

**修正：**

> $$
> \|x\|_2 \leqslant C_1 \|x\|_1, \quad \|x\|_1 \leqslant C_2 \|x\|_2,
> $$

**理由：** 源图第二个控制范数误印1。等价须双向控制；只自控||x||1≤C2||x||1不能推导相同收敛（如无限维不等价范数），恢复右侧||x||2与前向互为约束。

**原文：**

> 我们对极限所研究的第一个有意义的就问题是求极限这个操作

**修正：**

> 我们对极限所研究的第一个有意义的问题是求极限这个操作

**理由：** 源图确印“有意义的就问题”，属于source_typo；删冗字就保留原语义。

[相关正文：级数判别、完备空间与不动点](../../01-math-analysis-i/07-complete-spaces/07-01-p0071-0080.md)

## 未决数学问题

**原文：**

> $\|A^k\| \leqslant C^{k-1}\|A\|^k$

**问题：** 矩阵幂范数C^(k−1)||A||^k仅k≥1，k=0时||I||≤1/C一般不成立。应单列||I||从k=1求和，一般范数下所列总界也需相应常数。

[相关正文：7.1：作业：素数的倒数和，Basel问题的Euler“证明”](../../01-math-analysis-i/07-complete-spaces/07-03-p0081-0085.md)

## 数学修正

**原文：**

> | 3) $\sum_{n=1}^{\infty} (-1)^n \frac{n-1}{n+1} \frac{1}{\sqrt[3]{n}}$ | (4)

**修正：**

> | (3) $\sum_{n=1}^{\infty} (-1)^n \frac{n-1}{n+1} \frac{1}{\sqrt[3]{n}}$ | (4)

**理由：** 源图第3项左括号实际缺失，属于source_typo；恢复成同组(3)编号，不改变级数。

[相关正文：7.1：作业：素数的倒数和，Basel问题的Euler“证明”](../../01-math-analysis-i/07-complete-spaces/07-03-p0081-0085.md)

## 数学修正

**原文：**

> 都是的收敛。

**修正：**

> 都是收敛的。

**理由：** 源图确印“都是的收敛”，属于source_typo；“都是收敛的”只改错置系词。
