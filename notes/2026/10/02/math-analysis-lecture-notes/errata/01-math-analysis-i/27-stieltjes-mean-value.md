# 勘误：27 Stieltjes 积分的中值定理

[返回勘误目录](../../errata.md) · [数学分析 1 勘误](../01-math-analysis-i.md)

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> 对于 Steiltjes 积分

**修正：**

> 对于 Stieltjes 积分

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源图Stieltjes正确拼写，Markdown元音顺序误录，恢复人名。

**原文：**

> $\sigma = \{a = a_0 < a_1 < \cdots < x_{n-1} < a_n = b\}$

**修正：**

> $\sigma = \{a = a_0 < a_1 < \cdots < a_{n-1} < a_n = b\}$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源图再次分划倒数第二字母x误a，统一合法a指标。

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> $$= \mu(a_n)f(a_n) - \mu(a_1)f(a_0) + \sum_{i=1}^{n-1} f(a_i)(\mu(a_{i+1}) - \mu(a_i))$$

**修正：**

> $$= \mu(a_n)f(a_n) - \mu(a_1)f(a_0) - \sum_{i=1}^{n-1} f(a_i)(\mu(a_{i+1}) - \mu(a_i))$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源Abel展开内和符号错。逐项展开Σμi(fi-fi-1)=μnfn-μ1f0-Σi1n-1 fi(μi+1-μi)，积分分部主定理也要求负Stieltjes项。

**原文：**

> $$= \underbrace{\mu(a_n)f(a_n) - \mu(a_0)f(a_0)}_{=f\cdot\mu\big|_a^b} + \underbrace{\sum_{i=0}^{n-1} f(a_i)(\mu(a_{i+1}) - \mu(a_i))}_{\mathbf{I}}.$$

**修正：**

> $$= \underbrace{\mu(a_n)f(a_n) - \mu(a_0)f(a_0)}_{=f\cdot\mu\big|_a^b} - \underbrace{\sum_{i=0}^{n-1} f(a_i)(\mu(a_{i+1}) - \mu(a_i))}_{\mathbf{I}}.$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)合并i=0项后同样应边界项减ΣfiΔμ，前后展开及分部公式一致；原加号错误。

**原文：**

> 使得 $f$ 与 $\displaystyle\int_a^b f d\mu$ 的差距是

**修正：**

> 使得 $\mathbf{I}$ 与 $\displaystyle\int_a^b f d\mu$ 的差距是

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)f为函数而积分为数，不能用上式o(1)描述两者差；上行定义I为近似Riemann和，实际I与积分之差o(1)。

**原文：**

> 这既是所谓的 Dirac

**修正：**

> 这就是所谓的 Dirac

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)既误就是的就，恢复引出例子的句子。

**原文：**

> $c \in [a, b]$

**修正：**

> $c \in (a, b]$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)μc=1_{x≥c}在c=a时整区间常1，所有μ增量0、Stieltjes积分0，与下一页f(c)结论冲突。该定义只给(a,b]的原子，需排除a；c=b仍有最后一段增量1。

**原文：**

> $$a = a_0 < a_1 < \cdots < a_k = c < a_{k+1} < \cdots < a_n = b.$$

**修正：**

> $$a = a_0 < a_1 < \cdots < a_k = c \leqslant a_n = b, \qquad 1\leqslant k\leqslant n.$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)原分划强写c<后一分割点排除合法c=b。以1≤k≤n且c=ak表明c可为末点，全序分划已由σ定义，后续空和亦可处理b原子。

**原文：**

> $$\overline{S}_{\mu_c}(f;\sigma) - \underline{S}_{\mu_c}(f;\sigma) = \underbrace{\sum_{i=1}^{k-2}(M_i - m_i)\big(\mu(a_i) - \mu(a_{i+1})\big)}_{=0} + (M_k - m_k)(\mu(a_k) - \mu(a_{k-1}))$$

**修正：**

> $$\overline{S}_{\mu_c}(f;\sigma) - \underline{S}_{\mu_c}(f;\sigma) = \underbrace{\sum_{i=1}^{k-1}(M_i - m_i)\big(\mu(a_i) - \mu(a_{i-1})\big)}_{=0} + (M_k - m_k)(\mu(a_k) - \mu(a_{k-1}))$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源原子Darboux拆分漏k-1项、又重复k项，并用越界ai+1与反向差。全Σi1n按唯一非零增量i=k拆为1至k-1、单项k、k+1至n；每权重必须μai-μai-1，其余均0，k=n时末和空。

**原文：**

> $$+ \underbrace{\sum_{i=k}^{n}(M_i - m_i)\big(\mu(a_i) - \mu(a_{i+1})\big)}_{=0}$$

**修正：**

> $$+ \underbrace{\sum_{i=k+1}^{n}(M_i - m_i)\big(\mu(a_i) - \mu(a_{i-1})\big)}_{=0}$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源原子Darboux拆分漏k-1项、又重复k项，并用越界ai+1与反向差。全Σi1n按唯一非零增量i=k拆为1至k-1、单项k、k+1至n；每权重必须μai-μai-1，其余均0，k=n时末和空。

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> $$\sum_{i=1}^{k-2} f(a_i)\bigl(\mu(a_i) - \mu(a_{i+1})\bigr) + f(a_k)(\mu(a_k) - \mu(a_{k-1})) + \sum_{i=k}^{n} f(a_i)\bigl(\mu(a_i) - \mu(a_{i+1})\bigr) = f(c).$$

**修正：**

> $$\sum_{i=1}^{k-1} f(a_i)\bigl(\mu(a_i) - \mu(a_{i-1})\bigr) + f(a_k)(\mu(a_k) - \mu(a_{k-1})) + \sum_{i=k+1}^{n} f(a_i)\bigl(\mu(a_i) - \mu(a_{i-1})\bigr) = f(c).$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)与[Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)同一原子求和拆分：正确全范围1至n、权重Δμi，仅i=k为1，三块应1至k-1/k/k+1至n，原逆差及越界不成立。

**原文：**

> $$\mu = \underbrace{\sum_{i=1}^{N} \alpha_n \mu_{x_n}}_{\mu_{\leqslant N}} + \underbrace{\sum_{i=N+1}^{\infty} \alpha_n \mu_{x_n}}_{\mu_{\geqslant N+1}}.$$

**修正：**

> $$\mu = \underbrace{\sum_{i=1}^{N} \alpha_i \mu_{x_i}}_{\mu_{\leqslant N}} + \underbrace{\sum_{i=N+1}^{\infty} \alpha_i \mu_{x_i}}_{\mu_{\geqslant N+1}}.$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源拆分求和指标i、项仍αnμxn导致n未绑定，原μ定义为各n原子之和，拆成前N与尾必须αiμxi。

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> $$\int_a^b f d\mu_{\geqslant N+1} \leqslant \|f\|_\infty \int_a^b d\mu_{\geqslant N+1}$$

**修正：**

> $$\left|\int_a^b f d\mu_{\geqslant N+1}\right| \leqslant \|f\|_\infty \int_a^b d\mu_{\geqslant N+1}$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)尾部误差需要绝对值，f可正可负，三角不等式给|∫f dμtail|≤||f||∞∫dμtail；仅单侧上界不足以推出下方绝对误差界。

**原文：**

> 并没有跟深刻的数学含义

**修正：**

> 并没有更深刻的数学含义

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)源图更误写跟，恢复比较副词。

**原文：**

> $$\int_1^\infty f d\mu = \sum_{n=1}^\infty \alpha_n f(n).$$

**修正：**

> $$\int_0^\infty f d\mu = \sum_{n=1}^\infty \alpha_n f(n).$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)本书Stieltjes增量为μb-μa，若下限1会排除位于1的原子α1；源上下文在[0,∞)定义，所有n≥1应从0积分。常数f=1可验原左sum从2起，恢复0包括首项。

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> $$= f(b)G(b) - G(c)\mu([a, b])$$

**修正：**

> $$= f(b)G(b) - G(c)\ell_\mu([a, b])$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)μ是点的函数，μ([a,b])未定义；前面新长度ell_mu([a,b])=μ(b)-μ(a)才等于f(b)-f(a)，用于第一中值定理的常函数积分。

**原文：**

> $$\int_a^b G d\mu = G(c)\mu([a, b]).$$

**修正：**

> $$\int_a^b G d\mu = G(c)\ell_\mu([a, b]).$$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)μ是点的函数，μ([a,b])未定义；前面新长度ell_mu([a,b])=μ(b)-μ(a)才等于f(b)-f(a)，用于第一中值定理的常函数积分。

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> 是实值 Riemann 可积函数

**修正：**

> 是实值 Stieltjes 可积函数

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)假设属于R([a,b];μ)表明Stieltjes可积，不能自动Riemann可积，如μ常函数时所有有界函数可积；恢复此处类型。

**原文：**

> **证明：** 我们定义函数 $\mu(x) = \lfloor x \rfloor$

**修正：**

> **证明：** 不妨设 $f$ 递增；递减时对 $-f$ 应用相同结论。我们定义函数 $\mu(x) = \lfloor x \rfloor$

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md) lemma只要求单调，末证需使用由f定义的正Stieltjes测度df，因此需先不妨f递增。递减时-f递增、将恒等式乘-1保持同θ∈[0,1]。此为必要符号分支条件而非新增习题解答。

[相关正文：Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)

## 数学修正

**原文：**

> 为什么要对积分理论的加以推广

**修正：**

> 为什么要对积分理论加以推广

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)原句多的字，删除恢复动宾结构。

**原文：**

> 这既是代数上称之为万有性质的性质

**修正：**

> 这就是代数上称之为万有性质的性质

**理由：** [Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)既代就错字，恢复解释连接词。

[相关正文：27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)

## 数学修正

**原文：**

> $$\int_1^\infty f d\mu = \sum_{n=1}^\infty \alpha_n f(n).$$

**修正：**

> $$\int_0^\infty f d\mu = \sum_{n=1}^\infty \alpha_n f(n).$$

**理由：** [27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)A7重复[Stieltjes 积分的中值定理](../../01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289.md)原子首项错误，Stieltjes下限1排除α1原子，题目明在[0,∞)定义，应0至∞才包括所有n≥1。

**原文：**

> 使得对任意 $b', b'' > b(\varepsilon)$

**修正：**

> 使得对任意 $b(\varepsilon)<b', b''<b$

**理由：** [27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)Cauchy准则必须b′、b″属于f域[a,b)，当b有限原条件只下界允许越出定义域，补上b使尾积分定义完整。

## 未决数学问题

**原文：**

> 证明，如果 $|f(x)| \leqslant F(x)$

**问题：** [27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)比较准则未明写f在每个截断闭区间Riemann可积，仅|f|≤可积F不蕴含局部可积（可取Dirichlet函数乘正可积包络）。可能沿用B1默认条件，但原文字未明确；需补局部可积前提方能直接断言反常积分存在，保留条件疑点。

[相关正文：27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)

## 未决数学问题

**原文：**

> $$
> (4)\int_0^{+\infty}\frac{\sin^2 x}{x}dx \qquad (5)\int_0^{2\pi}\frac{dx}{\cos^p x\cos^q x},\ p,q>0 \qquad (6)\int_0^{+\infty}x^p\sin(x^q)dx
> $$

**问题：** [27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)例(5)两因子同为cos且p,q任意正实数，半周负cos的非整数幂不实。可能想写sin/cos并限制第一象限，或保留全周期加绝对值；源图就是cos cos，不能唯一替换，保留uncertain。本章均阶定义另仅允许趋0，但[27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)相位φ(a)可负使比较函数指数增长，与后面~记号用途冲突，需扩展均阶定义或补相位条件。

[相关正文：27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)

## 数学修正

**原文：**

> C5) 假设 $\varphi \in C^1([a, b])$，并且对任意 $x \in [a, b]$，$\varphi'(x) \neq 0$。

**修正：**

> C5) 假设 $\varphi \in C^1([a, b])$，并且对任意 $x \in [a, b]$，$\varphi'(x) > 0$。

**理由：** [27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)C5沿用C4左端Laplace渐近式必须φ递增；仅φ′非零也允许递减，f≡1、φ=-x时主贡献在b而原式在a。补φ′>0与C4换元提示一致，保持题目，不提供答案。

[相关正文：27.1：作业：振荡积分](../../01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295.md)

## 数学修正

**原文：**

> 我们的都有

**修正：**

> 我们都有

**理由：** 原图亦印成“我们的都有”，此处主语为“我们”，删除多余“的”字恢复句意。
