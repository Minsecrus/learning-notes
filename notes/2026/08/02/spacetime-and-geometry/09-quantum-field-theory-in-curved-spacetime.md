# 第 9 章 弯曲时空中的量子场论

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 8 章 宇宙学](./08-cosmology.md) · [下一篇：附录 A 流形之间的映射](./appendix-a-maps-between-manifolds.md)

<!-- source: PDF 389; printed: 376 -->

## 9.1 引言

没有人相信，广义相对论已经是关于引力的最终理论。奇点定理从理论内部提供了证据，说明它在某种意义上并不完备；更有说服力的事实是，GR 是一套经典理论，而世界从根本上服从量子力学。寻找一套可行的量子引力理论，推动着当代理论物理学中的大量研究；虽然人们在此过程中已经学到许多东西，令人信服的成功却仍遥不可及。

广义相对论包含两个部分：一是时空曲率及其对物质影响的框架，二是度规响应能量—动量的动力学，即 Einstein 方程所描述的内容。在缺少真正量子引力理论的情况下，我们仍可以取 GR 的第一部分——物质场在弯曲时空背景上传播这一观念——并考虑这些物质场服从量子力学的情形。换言之，我们把度规看作固定背景，不要求它服从某套动力学方程，然后研究该弯曲时空中的量子场论（quantum field theory，QFT）。

弯曲时空 QFT 研究中划时代的事件，是 Hawking 在 1976 年认识到：黑洞并不真的“黑”，它会发出热辐射，其 **Hawking 温度**与表面引力 $\kappa$ 成正比：

$$
T=\frac{\kappa}{2\pi}.
\tag{9.1}
$$

（回忆一下，我们采用的单位制令 $\hbar=c=k=1$；Hawking 温度实际上正比于 $\hbar$，并反比于 Boltzmann 常数 $k$。）自这一非凡发现以来，弯曲时空 QFT 已经建立在相当严格的理论基础上，尽管人们通常认为，它的适用范围仍远离任何可能的实验探测。对 Schwarzschild 黑洞，$\kappa=1/(4GM)$，其 Hawking 温度可以写成

$$
T=\frac{1}{8\pi GM}
=1.2\times10^{26}\,\mathrm K\left(\frac{1\,\mathrm g}{M}\right)
=6.0\times10^{-8}\,\mathrm K\left(\frac{M_\odot}{M}\right),
\tag{9.2}
$$

其中 $M_\odot\sim10^{33}\,\mathrm g$ 是太阳质量。因此，一个真实天体物理黑洞的辐射温度甚至远低于 $3\,\mathrm K$ 的宇宙微波背景，完全没有观测希望。

<!-- source: PDF 390; printed: 377 -->

不过，近期的宇宙学观测在一定程度上改变了这种状况。一个例子是，人们似乎发现宇宙正在加速；最直接的解释是，这说明真空能量非零（见第 8 章）。虽然真空能量的大小仍是一个深刻谜题，但显然，理解量子力学物质在弯曲时空中的行为，将在最终解决这一谜题时发挥重要作用。另一个例子来自宇宙学扰动。对微波背景和大尺度结构的观测，有力支持了原初扰动具有近乎无标度的谱；即使在远大于通常宇宙学视界尺度的波长上也是如此。关于这些扰动起源的主流理论来自暴胀。在暴胀图景中，宇宙学扰动起源于暴胀宇宙内量子场的真空涨落。若这一图景正确，那么我们在 CMB 图像中看到的，正是原初量子涨落的印记；这些涨落被宇宙膨胀大幅拉伸，最终又通过引力不稳定性增长成今天所见的星系和星系团。因此，至少宇宙学观测已经为研究弯曲时空中的 QFT 提供了强烈动机。

即使没有这种经验动机，以弯曲时空 QFT 为基础的思想实验，也已经在我们对量子引力的试探性探索中取得丰硕成果。特别地，Hawking 辐射预言的黑洞蒸发导致了信息丢失悖论，后文会讨论这一点。由于很难开展直接触及量子引力问题的真实实验，我们必须依靠聚焦于 GR 与量子力学之间张力的思想实验；这与 Einstein 为协调经典动力学和电磁学的 Lorentz 不变性而使用思想实验十分相似。

带着这些考虑，本章的目标是简要介绍弯曲时空 QFT 的若干思想与结果。许多 GR 入门教材没有涉及这一主题，通常因为学习 GR 不应以熟悉普通的平直时空 QFT 为先决条件。令人高兴的是，研究弯曲时空 QFT 也完全不必先熟悉平直时空 QFT。原因在于：平直时空中最有趣、最有用的 QFT 特征，几乎与弯曲时空中最有趣、最有用的特征截然不同。归根到底，量子场论只是量子力学系统的一个例子，与方势阱或氦原子并无二致。一旦定义了一套场论，它在平直时空中的应用——无论是粒子物理还是凝聚态物理——自然会关注不同场之间的相互作用，通常把这些相互作用看作围绕某个自然真空态的微扰。然而在弯曲时空中，我们通常关注时空本身对场的影响，相互作用反倒偏离了重点。因此，我们可以考虑自由的、无相互作用的场，却必须非常谨慎地定义什么才是适当的真空态。（事实上，正如将会看到的，我们处理的几乎所有

<!-- source: PDF 391; printed: 378 -->

状态都是某种真空态！）所以，熟悉平直时空 QFT 对当前讨论不仅没有必要，甚至可能帮不上太多忙；唯一的先修知识，是普通量子力学的基础。

我们将逐步进入弯曲时空中的量子场论，先回顾每位物理学家在处境艰难时都会求助的系统：简单谐振子。当然，它是体现量子力学工作原理的典范例子；除此之外还有一项额外好处：接下来转向场论时，我们会发现，平直时空中自由场的量子力学，恰好就是无穷多个谐振子的量子力学。（并非空间中的每一点各有一个振子；场的 Fourier 变换中的每一个模式才像一个谐振子。）从这里过渡到场论相当直接。掌握场论基础之后，借助我们此前对 GR 的研究，把理论推广到弯曲时空也并不十分困难，尽管途中会遇到若干微妙问题。本章讨论必然会比较浅显，重点是通过理解平直时空中的 Unruh 效应，掌握 Hawking 辐射的物理基础。特别地，我们不会讨论弯曲时空 QFT 在宇宙学中的重要应用，也不会详细研究重整化及其相关问题。我们主要沿用 Birrell 与 Davies（1982）的讨论；更多内容可参阅该书、Wald（1994）或 Ford 的综述。[^9-1]

[^9-1]: L. H. Ford，〈Quantum field theory in curved spacetime〉（1997），<http://arxiv.org/gr-qc/9707062>。

## 9.2 量子力学

量子场论只是量子力学系统的一个特例，所以可以先回顾这句话的含义。当然，尽管世界从根本上服从量子力学，我们的直觉往往更容易与经典物理对齐，因此先从经典力学出发搭建舞台。任何描述某个系统的物理理论，无论经典还是量子，都由以下三个问题的答案组成：

1. 系统有哪些可能状态？在经典力学中，状态空间通常由一组坐标和动量给出，可以把它们看作系统的“初始条件”。这些量可以精确指定；关于系统状态，需要知道的内容也就全部包含在其中。

2. 关于这个系统，我们能观测什么？经典力学常常只隐含地处理这个问题，因为答案很简单：坐标和动量的任意函数都可以成为可观测量。

3. 系统怎样演化？这通常由一组运动方程表示。给定状态和运动方程，随后的

<!-- source: PDF 392; printed: 379 -->

演化就被唯一确定；因此，初始条件空间等价于该理论的经典解空间。

为了让这些思想更加具体，也因为它与场论研究直接相关，考虑简单谐振子。可以把简单谐振子看成在一维二次势中运动的粒子。它的状态由一个坐标 $x$ 和一个动量 $p$ 指定。为了得到运动方程，可以从 Lagrangian 出发；用 $x$ 及其时间导数 $\dot x$ 表示，它是

$$
L=\frac12\dot x^2-\frac12\omega^2x^2,
\tag{9.3}
$$

这里为方便起见，把振子质量设为 1。立刻可以导出运动方程

$$
\ddot x+\omega^2x=0.
\tag{9.4}
$$

不过，为了过渡到量子力学，使用 Hamiltonian 更方便；它是 $x$ 和 $p$ 的函数，不再是 $x$ 和 $\dot x$ 的函数。Hamiltonian 与 Lagrangian 通过 Legendre 变换联系：

$$
H=p\dot x-L,
\tag{9.5}
$$

其中动量满足

$$
p=\frac{\partial L}{\partial\dot x}=\dot x.
\tag{9.6}
$$

所以，谐振子的 Hamiltonian 为

$$
H=\frac12p^2+\frac12\omega^2x^2,
\tag{9.7}
$$

而作为运动方程的 Hamilton 方程为

$$
\frac{\mathrm dx}{\mathrm dt}=\partial_pH=p,
\qquad
\frac{\mathrm dp}{\mathrm dt}=-\partial_xH=-\omega^2x.
\tag{9.8}
$$

这些方程的解当然很直接；把它们写成复数形式很有用：

$$
x(t)=x_0e^{i(\omega t+\alpha_0)},
\tag{9.9}
$$

其中 $x_0$ 是振幅，$\alpha_0$ 是相位。最后取实部即可得到物理解。

> **作者勘误（印刷页 379，式 (9.9)）：** 扫描版把指数排成 $i\omega t+\alpha_0$；作者勘误要求加上括号，改为 $i(\omega t+\alpha_0)$。上式已采用修正形式。

现在转向量子力学。虽然量子力学与经典力学有着深刻差异，一套给定理论依然由上面三个问题的答案组成，只是答案采取了不同形式。

<!-- source: PDF 393; printed: 380 -->

1. 系统状态由 Hilbert 空间中的一个元素表示。从数学上说，Hilbert 空间就是一个配备复值内积的复向量空间；这种内积具有如下性质：颠倒两个状态在内积中的次序，等价于取复共轭。用 $|\psi\rangle$ 表示 Hilbert 空间的元素，用 $\langle\psi|$ 表示对偶空间的元素，于是 $|\psi_1\rangle$ 与 $|\psi_2\rangle$ 的内积是 $\langle\psi_2|\psi_1\rangle$，并满足

$$
\langle\psi_2|\psi_1\rangle^*
=\langle\psi_1|\psi_2\rangle.
\tag{9.10}
$$

   （这里略过了关于空间完备性的技术要求。）量子力学中感兴趣的 Hilbert 空间往往是无穷维的。例如，如果一个经典系统由坐标 $x$ 和动量 $p$ 表示，可以把 Hilbert 空间取成由 $x$ 的所有平方可积复值函数组成；等价地，也可以取成由 $p$ 的所有平方可积复值函数组成，但不能同时把两者都作为自变量。

2. 可观测量由 Hilbert 空间上的**自伴算符**表示。“自伴”的定义实际上很微妙；但在简单情形下，它就是通常所说的 Hermitian 算符：

$$
A^\dagger=A,
\tag{9.11}
$$

   其中 $A^\dagger$ 对任意状态 $|\psi_1\rangle$、$|\psi_2\rangle$ 都满足

$$
\langle\psi_2|A\psi_1\rangle
=\langle A^\dagger\psi_2|\psi_1\rangle.
\tag{9.12}
$$

   当然，许多算符并非 Hermitian 算符，但可观测量应当具有这一性质。一般而言，这类算符彼此不对易，所以我们无法同时指定系统中一切可能想测量的量的精确值；会有一组完备的对易可观测量，代表我们在同一时刻对系统所能说出的全部内容。

3. 系统演化可以用两种方式之一表示：让 Hilbert 空间中的状态向量作幺正演化，即 **Schrödinger 绘景**；或者让状态保持固定，让可观测量按照运动方程随时间演化，即 **Heisenberg 绘景**。

严格地说，量子力学只是与经典力学不同；并没有必要从一个经典模型出发再把它“量子化”。尽管如此，我们通常恰恰会这么做。即使对简单经典模型，也有不止一种构造量子化版本的方法，其中包括正则量子化、路径积分量子化，以及更加奇特的程序。更糟的是，经典理论与量子理论之间没有简单映射：有些经典理论不存在定义良好的量子对应物，有些经典理论具有多个量子版本，也有些量子理论没有任何经典

<!-- source: PDF 394; printed: 381 -->

对应物。就当前目的而言，我们可以轻松忽略所有这些微妙之处，直接采用正则量子化。

简单谐振子再次提供了一个有用例子。先考虑熟悉的 Schrödinger 绘景；其中状态由随时间演化的复值波函数表示，例如 $\psi(x,t)$。波函数其实就是状态向量 $|\psi\rangle$ 在“delta 函数位置基”$|x\rangle$ 中的一组分量，因此

$$
|\psi(t)\rangle=\int\mathrm dx\,\psi(x,t)|x\rangle.
$$

正则量子化是在坐标算符 $\hat x$ 与其共轭动量 $\hat p$ 上施加正则对易关系

$$
[\hat x,\hat p]=i.
\tag{9.13}
$$

对由依赖 $x$ 和 $t$ 的波函数表示的状态，$\hat x$ 只是乘以 $x$，所以可以令

$$
\hat p=-i\partial_x
\tag{9.14}
$$

来实现（9.13）。Hamiltonian 算符为

$$
H=-\frac12\partial_x^2+\frac12\omega^2x^2,
\tag{9.15}
$$

运动方程就是 Schrödinger 方程

$$
H\psi=i\partial_t\psi.
\tag{9.16}
$$

由于 Hamiltonian 与时间无关，这个方程的解可以分离成空间函数与时间函数，即 $\psi(x,t)=f(t)g(x)$。这些解组成一族由整数 $n\ge0$ 标记的状态；在忽略归一化因子的情况下，有

$$
\psi_n(x,t)
=e^{-\frac12\omega x^2}
H_n(\sqrt\omega\,x)e^{-iE_nt},
\tag{9.17}
$$

其中 $H_n$ 是 $n$ 次 Hermite 多项式，并且

$$
E_n=\left(n+\frac12\right)\omega.
\tag{9.18}
$$

这些状态全都是 $H$ 的本征函数，$E_n$ 是能量本征值。谐振子的任意状态都只是能量本征态的叠加：

$$
\psi(x,t)=\sum_n c_n\psi_n(x,t),
\tag{9.19}
$$

其中系数 $c_n$ 经过适当归一化。

这段简短回顾已经包含量子力学谐振子的若干重要特征。能量本征态具有离散谱；这就是它称为“量子”力学的原因，尽管也不难找到

<!-- source: PDF 395; printed: 382 -->

具有连续谱的系统。系统有一个能量最低的基态，还有一组由能量本征值唯一标记的激发态。基态具有非零能量

$$
E_0=\frac12\omega,
\tag{9.20}
$$

有时称为“零点”能量。值得注意的是，经典系统的最小能量本应为零，对应 $x=0$、$p=0$ 的粒子。量子零点能可以追溯到 Heisenberg 不确定性原理：它禁止我们让一个状态同时在位置和动量上局域化；因此振子中总有最低限度的“抖动”，从而产生非零基态能量。另一方面，我们当然也可以考察势

$$
V(x)=\frac12\omega^2x^2-\frac12\omega
$$

所给出的振子；分析会完全相同，只是（9.18）中的 $1/2$ 项会消失，基态能量也会变成零。量子力学并不坚持零点能必须非零，它只是使能量相对于经典值发生位移。

求解简单谐振子的另一种方法，是引入产生算符 $\hat a^\dagger$ 与湮灭算符 $\hat a$，它们也常称为升算符与降算符，定义为

$$
\hat a=\frac{1}{\sqrt{2\omega}}(\omega\hat x+i\hat p),
\qquad
\hat a^\dagger=\frac{1}{\sqrt{2\omega}}(\omega\hat x-i\hat p),
\tag{9.21}
$$

从而

$$
\hat x=\frac{1}{\sqrt{2\omega}}(\hat a+\hat a^\dagger),
\qquad
\hat p=-i\sqrt{\frac\omega2}(\hat a-\hat a^\dagger).
\tag{9.22}
$$

利用先前的对易关系（9.13）和 Hamiltonian（9.7），很容易算出产生、湮灭算符的对易关系

$$
[\hat a,\hat a^\dagger]=1,
\tag{9.23}
$$

以及 Hamiltonian 的新表达式

$$
H=\left(\hat a^\dagger\hat a+\frac12\right)\omega.
\tag{9.24}
$$

产生与湮灭算符同 Hamiltonian 的对易关系为

$$
\begin{aligned}
[H,\hat a]&=-\omega\hat a,\\
[H,\hat a^\dagger]&=\omega\hat a^\dagger.
\end{aligned}
\tag{9.25}
$$

把这种形式的 Hamiltonian 与能量本征值（9.18）比较，会启发我们定义粒子数算符

$$
\hat n=\hat a^\dagger\hat a.
\tag{9.26}
$$

<!-- source: PDF 396; printed: 383 -->

现在来想想产生算符、湮灭算符和粒子数算符为何名副其实。考虑粒子数算符的一个本征态 $|n\rangle$：

$$
\hat n|n\rangle=n|n\rangle,
\tag{9.27}
$$

左边带帽的 $\hat n$ 表示粒子数算符，右边第一个 $n$ 表示实际数值 $n$。（这是整个量子力学中最迷人的公式。）稍微摆弄对易关系，就很容易证明

$$
\begin{aligned}
\hat n\hat a^\dagger|n\rangle&=(n+1)\hat a^\dagger|n\rangle,\\
\hat n\hat a|n\rangle&=(n-1)\hat a|n\rangle.
\end{aligned}
\tag{9.28}
$$

因此，$\hat a^\dagger$ 作用于 $|n\rangle$ 时，会给出 $\hat n$ 的另一个本征态，其本征值升高 1；$\hat a$ 则给出本征值降低 1 的本征态。与前面一样，可以证明 $n$ 取从 0 到 $\infty$ 的整数值，所以必定存在一个满足

$$
\hat a|0\rangle=0
\tag{9.29}
$$

的真空态 $|0\rangle$。从这个状态出发，通过产生算符的连续作用，可以构造所有本征态：

$$
|n\rangle=\frac{1}{\sqrt{n!}}(\hat a^\dagger)^n|0\rangle.
\tag{9.30}
$$

粒子数算符计数基态之上的激发数。本征态集合 $|n\rangle$ 构成一组基；任意状态都是这些状态的适当线性组合。产生和湮灭算符在其上的作用为

$$
\begin{aligned}
\hat a|n\rangle&=\sqrt n\,|n-1\rangle,\\
\hat a^\dagger|n\rangle&=\sqrt{n+1}\,|n+1\rangle,
\end{aligned}
\tag{9.31}
$$

每个状态的能量当然由（9.18）给出。我们把基态取成与时间无关；于是，服从 Schrödinger 方程的物理系统由状态

$$
|\psi(t)\rangle=\sum_n c_ne^{-iE_nt}|n\rangle
\tag{9.32}
$$

描述，其中 $c_n$ 仍为常系数。

为了平滑过渡到场论，把这套 Schrödinger 绘景描述翻译到 Heisenberg 绘景会很有用；在后一绘景中，状态固定，算符随时间演化。由 Schrödinger 方程（9.16），任何状态都可以形式化地写成某个固定初态在幺正时间演化算符作用下得到的结果：

$$
|\psi(t)\rangle=U(t)|\psi(0)\rangle,
\tag{9.33}
$$

<!-- source: PDF 397; printed: 384 -->

其中

$$
U(t)=\mathcal T\exp\!\left[-i\int_0^t H(t')\,\mathrm dt'\right].
\tag{9.34}
$$

这里 $\mathcal T$ 表示时间序。（所谓幺正，是指 $U^\dagger U=1$。）当然，如果 Hamiltonian 与时间无关，就只是 $U(t)=e^{-iHt}$。对于与时间无关的算符 $A$，它在随时间变化的状态 $|\psi_1(t)\rangle$ 与 $|\psi_2(t)\rangle$ 之间的 Schrödinger 绘景矩阵元，可以改写成 Heisenberg 绘景中的表达式，以随时间变化的算符 $A(t)$ 和与时间无关的状态表示：

$$
\begin{aligned}
\langle\psi_2(t)|A|\psi_1(t)\rangle
&=\langle\psi_2(0)|U^\dagger(t)AU(t)|\psi_1(0)\rangle\\
&=\langle\psi_2|A(t)|\psi_1\rangle.
\end{aligned}
\tag{9.35}
$$

显然，Heisenberg 绘景算符为

$$
A(t)=U^\dagger(t)AU(t).
\tag{9.36}
$$

这类算符满足 **Heisenberg 运动方程**

$$
\frac{\mathrm dA(t)}{\mathrm dt}=i[H,A(t)],
\tag{9.37}
$$

它在这一绘景中取代 Schrödinger 方程。对谐振子可得

$$
\frac{\mathrm d\hat a}{\mathrm dt}=-i\omega\hat a,
\qquad
\frac{\mathrm d\hat a^\dagger}{\mathrm dt}=i\omega\hat a^\dagger,
\tag{9.38}
$$

解为

$$
\hat a(t)=e^{-i\omega t}\hat a(0),
\qquad
\hat a(t)^\dagger=e^{i\omega t}\hat a(0)^\dagger.
\tag{9.39}
$$

由此立刻得到

$$
\hat n(t)=\hat a(t)^\dagger\hat a(t)
=\hat a(0)^\dagger\hat a(0),
\tag{9.40}
$$

这反映了粒子数算符守恒这一事实。

通常会说，Heisenberg 绘景中的状态与时间无关；这种说法虽然正确，却多少有些令人困惑。说这些状态贯穿整个时间延伸，而非只在某个固定时刻定义，也许更合适。为了说清这一点，考虑受外界影响的简单谐振子，例如直接向 Hamiltonian 加入一个驱动项：

$$
H=\frac12p^2+\frac12\omega^2x^2+F(t),
\tag{9.41}
$$

其中函数 $F(t)$ 在某个区间之外消失：

$$
F(t)=
\begin{cases}
0, & t<t_1,\\
F(t), & t_1\le t\le t_2,\\
0, & t_2<t.
\end{cases}
\tag{9.42}
$$

> **作者勘误（印刷页 384，式 (9.34)）：** 扫描版把演化算符写成普通指数；当 $H$ 随时间变化时，它必须是时间序指数。上式以 $\mathcal T$ 明确表示时间排序。

<!-- source: PDF 398; printed: 385 -->

可以想象有人走过来，把振子摇动一小段时间，随后又任其自由运动。在 Schrödinger 绘景中，我们会说：最初处于基态的振子被外力激发，末态不再是基态。在 Heisenberg 绘景中，我们则把状态视为所有时刻上运动方程的一个解，并说粒子数算符从零变成了另一个值。

对于受到瞬时外力作用的振子，显然存在一组在早期时刻看起来像能量本征态的状态，尽管它们在未来不再如此。可以称其为“入态”$|n_{\mathrm{in}}\rangle$，其性质是

$$
\hat n(t<t_1)|n_{\mathrm{in}}\rangle
=n|n_{\mathrm{in}}\rangle.
\tag{9.43}
$$

另有一组独立状态，在晚期时刻看起来像能量本征态，相应称为“出态”$|n_{\mathrm{out}}\rangle$，并满足

$$
\hat n(t>t_2)|n_{\mathrm{out}}\rangle
=n|n_{\mathrm{out}}\rangle.
\tag{9.44}
$$

两组状态都存在于所有时刻，只在适当的渐近区域表现得像能量本征态。任一组都构成整个 Hilbert 空间的一组基，因此特别可以用一组展开另一组。例如，乘上一组完备的入态，可以写成

$$
|n_{\mathrm{out}}\rangle
=\sum_m\langle m_{\mathrm{in}}|n_{\mathrm{out}}\rangle
|m_{\mathrm{in}}\rangle.
\tag{9.45}
$$

复数 $\langle m_{\mathrm{in}}|n_{\mathrm{out}}\rangle$ 是矩阵元，原则上可以由 Hamiltonian（9.41）算出；它们合在一起构成 **S 矩阵**。如果一位观察者具有探测振子激发的办法，就会发现外力改变了激发数；S 矩阵编码了刻画渐近过去与渐近未来之间这些变化所需的信息。不用说，整套讨论几乎无需修改就能移植到场论。对粒子物理而言，外力的角色由不同粒子之间的相互作用扮演；对我们的目的而言，它将由时空曲率扮演。

## 9.3 平直时空中的量子场论

前面已经提到，量子场论只是量子力学系统的一个特例；其中量子化的是一个场——定义在时空上的函数，或更一般的某种张量场——而非单个振子。先从最简单的例子开始：平直时空中的自由标量场。从单个振子过渡到这套场论，只需作几项推广。像往常一样，把理论推广到弯曲时空很直接：将理论写成协变形式

<!-- source: PDF 399; printed: 386 -->

并宣布它成立即可。不过，一旦失去 Minkowski 空间的对称性，量子场论中一些被我们视为核心的观念便不再显得那么关键；尤其是，“真空”和“粒子”的概念将失去特殊地位。（量子力学的讲解有时会指出，波与粒子是适用范围不同的互补概念；但不要被误导：量子场论中真正基本的是场，粒子只是某些受限情形下有用的近似概念。）本节先研究平直时空中的 QFT，下一节再推广到弯曲时空。

从经典理论开始。这里是在平直时空中的实标量场 $\phi(x^\mu)$，就像第 1 章讨论的那样，只是这次推广到 $n$ 维。作用量是 Lagrangian 密度的时空积分，$S=\int\mathrm d^nx\,\mathcal L$；我们考虑 Klein–Gordon Lagrangian

$$
\mathcal L
=-\frac12\eta^{\mu\nu}\partial_\mu\phi\partial_\nu\phi
-\frac12m^2\phi^2.
\tag{9.46}
$$

无需加入体积元因子 $\sqrt{|g|}$，因为我们在 Minkowski 空间中使用惯性坐标，度规为

$$
\mathrm ds^2=-\mathrm dt^2+(\mathrm d\mathbf x)^2.
\tag{9.47}
$$

运动方程是 Klein–Gordon 方程

$$
\Box\phi-m^2\phi=0.
\tag{9.48}
$$

把场论改写成 Hamiltonian 描述很直接。场的共轭动量，就是 Lagrangian 密度对该场时间导数的导数：

$$
\pi=\frac{\partial\mathcal L}{\partial(\partial_0\phi)}.
\tag{9.49}
$$

对 Klein–Gordon Lagrangian（9.46），它是

$$
\pi=\dot\phi.
\tag{9.50}
$$

当然，提到时间导数就假定我们选择了某个特定惯性系；因此，Hamiltonian 程序必然破坏显式的 Lorentz 不变性。不过，只要足够谨慎，所得理论中的可观测量仍会具有 Lorentz 不变性。Hamiltonian 本身可以写成 Hamiltonian 密度在空间上的积分：

$$
H=\int\mathrm d^{n-1}x\,\mathcal H,
\tag{9.51}
$$

它通过 Legendre 变换与 Lagrangian 联系：

$$
\begin{aligned}
\mathcal H(\phi,\pi)
&=\pi\dot\phi-\mathcal L(\phi,\partial_\mu\phi)\\
&=\frac12\pi^2+\frac12(\boldsymbol\nabla\phi)^2
+\frac12m^2\phi^2,
\end{aligned}
\tag{9.52}
$$

<!-- source: PDF 400; printed: 387 -->

其中 $(\boldsymbol\nabla\phi)^2=\delta^{ij}(\partial_i\phi)(\partial_j\phi)$。这套场论与谐振子的对应关系应当很清楚：场值 $\phi(x)$ 扮演坐标 $x$ 的角色，动量场 $\pi(x)$ 取代单个动量 $p$。状态不再由某个固定时刻的两个数 $x$、$p$ 指定；我们必须给出该时刻整个空间上的场值 $\phi(x^i)$ 和 $\pi(x^i)$ 作为初始数据。此外，还多出了谐振子情形中没有的梯度项；除此之外，形式体系非常相似。

必须强调，$\phi(x^\mu)$ 并非波函数；它是一个动力学变量，是谐振子单个自由度 $x$ 的推广。在场论的 Schrödinger 绘景量子化中，我们会定义一个复值波泛函 $\Psi[\phi(x^\mu)]$，表示在每一种构型中找到该场的概率振幅。不过，我们将采用 Heisenberg 绘景，所以首要工作是把 $\phi$ 提升为量子算符。

首先完成经典分析，真正解出这套理论。Klein–Gordon 方程的解不难写出，一个很好的例子是平面波：

$$
\phi(x^\mu)=\phi_0e^{ik_\mu x^\mu}
=\phi_0e^{-i\omega t+i\mathbf k\cdot\mathbf x},
\tag{9.53}
$$

其中波矢的分量为

$$
k^\mu=(\omega,\mathbf k),
\tag{9.54}
$$

而频率必须满足色散关系

$$
\omega^2=\mathbf k^2+m^2.
\tag{9.55}
$$

这类解与（9.9）给出的简单谐振子解明显相似，但也存在重要区别。对谐振子而言，只有一种独立解。由于谐振子的频率唯一，把两个具有指定振幅 $x_0$ 和相位 $\alpha_0$ 的解相加，只会合成第三个频率相同、振幅和相位不同的解。场论中不再如此。由（9.55），频率由空间波矢 $\mathbf k$ 决定，至多差一个正负号。因此，我们得到一组由 $\mathbf k$ 和 $\omega$ 的符号参数化的解，而非单一种类的解。

不过，仍可以构造一组完备正交归一模式，并用它展开任意解，从而写出最一般的解。为了赋予“正交归一”以意义，需要在 Klein–Gordon 方程的解空间上定义内积。尽管模式本身是时空函数，合适的内积却可以表示成在常时超曲面 $\Sigma_t$ 上的积分：

$$
(\phi_1,\phi_2)
=-i\int_{\Sigma_t}
\left(\phi_1\partial_t\phi_2^*
-\phi_2^*\partial_t\phi_1\right)\mathrm d^{n-1}x.
\tag{9.56}
$$

<!-- source: PDF 401; printed: 388 -->

正如所希望的，这个内积实际上与积分所取的超曲面 $\Sigma_t$ 无关；利用 Stokes 定理和 Klein–Gordon 方程很容易验证这一点。把该内积应用于波矢不同的两个平面波，得到

$$
\begin{aligned}
\left(e^{ik_1^\mu x_\mu},e^{ik_2^\nu x_\nu}\right)
&=-i\int_{\Sigma_t}\Big(
e^{-i\omega_1t+i\mathbf k_1\cdot\mathbf x}
\partial_t e^{i\omega_2t-i\mathbf k_2\cdot\mathbf x}\\
&\qquad\qquad
-e^{i\omega_2t-i\mathbf k_2\cdot\mathbf x}
\partial_t e^{-i\omega_1t+i\mathbf k_1\cdot\mathbf x}
\Big)\mathrm d^{n-1}x\\
&=(\omega_2+\omega_1)e^{-i(\omega_1-\omega_2)t}
\int_{\Sigma_t}e^{i(\mathbf k_1-\mathbf k_2)\cdot\mathbf x}
\mathrm d^{n-1}x\\
&=(\omega_2+\omega_1)e^{-i(\omega_1-\omega_2)t}
(2\pi)^{n-1}\delta^{(n-1)}(\mathbf k_1-\mathbf k_2),
\end{aligned}
\tag{9.57}
$$

其中使用了

$$
\int e^{i\mathbf k\cdot\mathbf x}\,\mathrm d^{n-1}x
=(2\pi)^{n-1}\delta^{(n-1)}(\mathbf k).
\tag{9.58}
$$

因此，除非两个模式的空间波矢 $\mathbf k$——进而频率 $\omega$——相同，内积都为零。于是，一组正交归一的模式解为

$$
f_{\mathbf k}(x^\mu)
=\frac{e^{ik_\mu x^\mu}}
{\left[(2\pi)^{n-1}2\omega\right]^{1/2}},
\tag{9.59}
$$

其中 $k^\mu$ 服从（9.55），从而

$$
(f_{\mathbf k_1},f_{\mathbf k_2})
=\delta^{(n-1)}(\mathbf k_1-\mathbf k_2).
\tag{9.60}
$$

给定色散关系（9.55），$\mathbf k$ 只能把频率确定到一个整体正负号。我们的策略是坚持让 $\omega$ 始终取正数，并加入复共轭模式 $f_{\mathbf k}^*(x^\mu)$ 来补全模式集合。（复共轭不仅改变指数中 $\omega$ 项的符号，也改变 $\mathbf k$ 项的符号；不过 $\mathbf k$ 的分量本来就定义在 $-\infty$ 到 $\infty$。）称 $f_{\mathbf k}$ 为正频模式，意思是它们满足

$$
\partial_t f_{\mathbf k}=-i\omega f_{\mathbf k},
\qquad \omega>0,
\tag{9.61}
$$

而 $f_{\mathbf k}^*$ 是负频模式，满足

$$
\partial_t f_{\mathbf k}^*=i\omega f_{\mathbf k}^*,
\qquad \omega>0.
\tag{9.62}
$$

（务必小心：即使 $\omega>0$，这些模式仍称为负频模式，因为时间导数带下来的因子是 $+i\omega$，而非 $-i\omega$。）复共轭模式与原模式正交：

$$
(f_{\mathbf k_1},f_{\mathbf k_2}^*)=0,
\tag{9.63}
$$

> **作者勘误（印刷页 388，式 (9.57)）：** 扫描版在等式左边两次使用 $\mu$ 作为彼此独立的哑指标。上式已把第二个指数的哑指标改为 $\nu$，避免同一表达式内重复占用。

<!-- source: PDF 402; printed: 389 -->

并且复共轭模式彼此正交归一，但范数为负：

$$
(f_{\mathbf k_1}^*,f_{\mathbf k_2}^*)
=-\delta^{(n-1)}(\mathbf k_1-\mathbf k_2).
\tag{9.64}
$$

$f_{\mathbf k}$ 与 $f_{\mathbf k}^*$ 合在一起构成完备集，Klein–Gordon 方程的任意解都可以用它们展开。

为正则量子化这套理论，把经典变量——场及其共轭动量——提升为作用在 Hilbert 空间上的算符，并在等时超曲面上施加正则对易关系：

$$
\begin{aligned}
[\phi(t,\mathbf x),\phi(t,\mathbf x')]&=0,\\
[\pi(t,\mathbf x),\pi(t,\mathbf x')]&=0,\\
[\phi(t,\mathbf x),\pi(t,\mathbf x')]&=
i\delta^{(n-1)}(\mathbf x-\mathbf x').
\end{aligned}
\tag{9.65}
$$

在场论中，必须明确说明场与其动量在整个空间中分别同自身对易。对单个振子，这一点是隐含的，因为只有单一坐标和动量，它们各自必然同自身对易。delta 函数意味着，在相同时刻，除空间点重合外，算符处处对易；这一特征来自因果律的要求，即类空分离的算符不能彼此影响。

正如 Klein–Gordon 方程的经典解可以用模式（9.59）展开，量子算符场 $\phi(t,\mathbf x)$ 也可以。把场算符模式展开的系数记为 $\hat a_{\mathbf k}^\dagger$ 与 $\hat a_{\mathbf k}$，有

$$
\phi(t,\mathbf x)
=\int\mathrm d^{n-1}k
\left[
\hat a_{\mathbf k}f_{\mathbf k}(t,\mathbf x)
+\hat a_{\mathbf k}^\dagger f_{\mathbf k}^*(t,\mathbf x)
\right].
\tag{9.66}
$$

把这一展开代入（9.65），可得算符 $\hat a_{\mathbf k}^\dagger$ 与 $\hat a_{\mathbf k}$ 服从对易关系

$$
\begin{aligned}
[\hat a_{\mathbf k},\hat a_{\mathbf k'}]&=0,\\
[\hat a_{\mathbf k}^\dagger,\hat a_{\mathbf k'}^\dagger]&=0,\\
[\hat a_{\mathbf k},\hat a_{\mathbf k'}^\dagger]
&=\delta^{(n-1)}(\mathbf k-\mathbf k').
\end{aligned}
\tag{9.67}
$$

所以，这些算符服从产生、湮灭算符特有的对易关系；对简单谐振子，我们已在（9.23）中见过它们。区别当然在于：这里有无穷多个这类算符，由 $\mathbf k$ 标记。现在可以看出把模式分成正频与负频的意义：正频模式是湮灭算符的系数，负频模式是产生算符的系数。正频和负频模式的思想可以推广到静态时空，但不能推广到任意时空。

在谐振子情形中，我们用产生和湮灭算符定义 Hilbert 空间的一组基，其中基态是

<!-- source: PDF 403; printed: 390 -->

粒子数算符的本征态。相同程序也适用于自由标量场，只是现在必须分别记录每个空间波矢 $\mathbf k$ 的激发数。存在唯一真空态 $|0\rangle$，其特征是被每个 $\hat a_{\mathbf k}$ 湮灭：

$$
\hat a_{\mathbf k}|0\rangle=0
\qquad\text{对所有 }\mathbf k.
\tag{9.68}
$$

反复作用 $\hat a_{\mathbf k}^\dagger$，可产生含有 $n_{\mathbf k}$ 个相同动量 $\mathbf k$ 的粒子的状态：

$$
|n_{\mathbf k}\rangle
=\frac{1}{\sqrt{n_{\mathbf k}!}}
(\hat a_{\mathbf k}^\dagger)^{n_{\mathbf k}}|0\rangle,
\tag{9.69}
$$

而含有各种动量 $\mathbf k_i$、相应激发数为 $n_i$ 的状态为

$$
|n_1,n_2,\ldots,n_j\rangle
=\frac{1}{\sqrt{n_1!n_2!\cdots n_j!}}
(\hat a_{\mathbf k_1}^\dagger)^{n_1}
(\hat a_{\mathbf k_2}^\dagger)^{n_2}\cdots
(\hat a_{\mathbf k_j}^\dagger)^{n_j}|0\rangle.
\tag{9.70}
$$

产生和湮灭算符作用在这类状态上时，会如预期那样改变激发数：

$$
\begin{aligned}
\hat a_{\mathbf k_i}|n_1,n_2,\ldots,n_i,\ldots,n_j\rangle
&=\sqrt{n_i}\,|n_1,n_2,\ldots,n_i-1,\ldots,n_j\rangle,\\
\hat a_{\mathbf k_i}^\dagger|n_1,n_2,\ldots,n_i,\ldots,n_j\rangle
&=\sqrt{n_i+1}\,|n_1,n_2,\ldots,n_i+1,\ldots,n_j\rangle.
\end{aligned}
\tag{9.71}
$$

可以为每个波矢定义粒子数算符

$$
\hat n_{\mathbf k}=\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k},
\tag{9.72}
$$

它满足

$$
\hat n_{\mathbf k_i}|n_1,n_2,\ldots,n_i,\ldots,n_j\rangle
=n_i|n_1,n_2,\ldots,n_i,\ldots,n_j\rangle.
\tag{9.73}
$$

粒子数算符的本征态构成整个 Hilbert 空间的一组基，称为 **Fock 基**；由这组基构造的空间常称为“Fock 空间”，当然它就是原来的 Hilbert 空间。

一个值得研究的问题，是 Fock 基在 Lorentz 变换下怎样表现。显然，我们一直在利用 Minkowski 空间的对称性，例如采用平面波作为 Klein–Gordon 方程的解基。这些模式的关键性质是，我们能够区分正频和负频，从而把 $\phi$ 的模式展开系数解释为湮灭和产生算符。现在考虑速度 $\mathbf v=\mathrm d\mathbf x/\mathrm dt$ 的 boost，它导出新坐标 $x^{\mu'}$：

$$
t'=\gamma t-\gamma\mathbf v\cdot\mathbf x,
\qquad
\mathbf x'=\gamma\mathbf x-\gamma\mathbf v t,
\tag{9.74}
$$

其中 $\gamma=1/\sqrt{1-v^2}$，逆变换为

$$
t=\gamma t'+\gamma\mathbf v\cdot\mathbf x',
\qquad
\mathbf x=\gamma\mathbf x'+\gamma\mathbf v t'.
\tag{9.75}
$$

> **作者勘误（印刷页 390，式 (9.70)）：** 扫描版在归一化因子的平方根中多排了一个逗号。上式采用连续乘积 $\sqrt{n_1!n_2!\cdots n_j!}$。

<!-- source: PDF 404; printed: 391 -->

模式函数在 boost 后参考系中的时间导数为

$$
\begin{aligned}
\partial_{t'}f_{\mathbf k}
&=\frac{\partial x^\mu}{\partial t'}\partial_\mu f_{\mathbf k}\\
&=\gamma(-i\omega)f_{\mathbf k}
+\gamma\mathbf v\cdot(i\mathbf k)f_{\mathbf k}\\
&=-i\omega'f_{\mathbf k},
\end{aligned}
\tag{9.76}
$$

其中

$$
\omega'=\gamma\omega-\gamma\mathbf v\cdot\mathbf k
\tag{9.77}
$$

就是 boost 后参考系中的频率。显然，描述具有某些动量的一组粒子的状态，会被 boost 成描述相同粒子、但动量经过 boost 的状态。因此，两个参考系中的总粒子数算符一致，真空态尤其一致。从这个意义上说，最初选择哪个惯性系并不重要。下一节会看到，之所以能够找到正频解和负频解，可以追溯到 Minkowski 空间中存在类时 Killing 向量 $\partial_t$；Fock 空间在基变换下的不变性，则可以追溯到所有这类类时 Killing 向量都由 Lorentz 变换彼此联系。因此，即使一个模式的频率依赖惯性系的选择，分解成正频与负频的方式仍然不变。

我们希望像处理谐振子那样，用产生和湮灭算符表示 Hamiltonian

$$
H=\int\mathrm d^{n-1}x
\left[
\frac12\dot\phi^2+\frac12(\boldsymbol\nabla\phi)^2
+\frac12m^2\phi^2
\right].
\tag{9.78}
$$

可以逐项分析这一表达式，先为简单起见从 $\phi^2$ 项开始：

$$
\begin{aligned}
\frac12m^2\int\mathrm d^{n-1}x\,\phi^2
&=\frac12m^2\int\mathrm d^{n-1}x\,\mathrm d^{n-1}k\,\mathrm d^{n-1}k'
\left(\hat a_{\mathbf k}f_{\mathbf k}
+\hat a_{\mathbf k}^\dagger f_{\mathbf k}^*\right)
\left(\hat a_{\mathbf k'}f_{\mathbf k'}
+\hat a_{\mathbf k'}^\dagger f_{\mathbf k'}^*\right)\\
&=\frac12m^2\int\mathrm d^{n-1}x\,\mathrm d^{n-1}k\,\mathrm d^{n-1}k'
\Big(
\hat a_{\mathbf k}\hat a_{\mathbf k'}f_{\mathbf k}f_{\mathbf k'}
+\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k'}f_{\mathbf k}^*f_{\mathbf k'}\\
&\qquad\qquad
+\hat a_{\mathbf k}\hat a_{\mathbf k'}^\dagger f_{\mathbf k}f_{\mathbf k'}^*
+\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k'}^\dagger f_{\mathbf k}^*f_{\mathbf k'}^*
\Big).
\end{aligned}
\tag{9.79}
$$

把括号中的第一项单独拿出来，暂时忽略对 $\mathbf k$ 的积分，再代入模式函数（9.59）的显式形式，可得

$$
\begin{aligned}
&\int\mathrm d^{n-1}x\,\mathrm d^{n-1}k'
\,\hat a_{\mathbf k}\hat a_{\mathbf k'}f_{\mathbf k}f_{\mathbf k'}\\
&\qquad=\int\mathrm d^{n-1}x\,\mathrm d^{n-1}k'
\,\hat a_{\mathbf k}\hat a_{\mathbf k'}
\frac{e^{-i(\omega+\omega')t}e^{i(\mathbf k+\mathbf k')\cdot\mathbf x}}
{2(2\pi)^{n-1}\sqrt{\omega\omega'}}.
\end{aligned}
$$

<!-- source: PDF 405; printed: 392 -->

继续完成空间积分，便有

$$
\begin{aligned}
&\int\mathrm d^{n-1}k'
\,\hat a_{\mathbf k}\hat a_{\mathbf k'}
\frac{e^{-i(\omega+\omega')t}}
{2\sqrt{\omega\omega'}}
\delta^{(n-1)}(\mathbf k+\mathbf k')\\
&\qquad=
\hat a_{\mathbf k}\hat a_{-\mathbf k}
\frac{e^{-2i\omega t}}{2\omega}.
\end{aligned}
\tag{9.80}
$$

这里再次使用了（9.58）。类似地计算（9.79）的其他项，可知 Hamiltonian 的势能贡献变为

$$
\begin{aligned}
\frac12m^2\int\mathrm d^{n-1}x\,\phi^2
=\frac12m^2\int\mathrm d^{n-1}k\left(\frac{1}{2\omega}\right)
\Big[&
\hat a_{\mathbf k}\hat a_{-\mathbf k}e^{-2i\omega t}
+\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k}\\
&+\hat a_{\mathbf k}\hat a_{\mathbf k}^\dagger
+\hat a_{\mathbf k}^\dagger\hat a_{-\mathbf k}^\dagger e^{2i\omega t}
\Big].
\end{aligned}
\tag{9.81}
$$

对动能项和梯度能项，导数分别带下 $\omega$ 与 $\mathbf k$ 因子；得到

$$
\begin{aligned}
\frac12\int\mathrm d^{n-1}x\,\dot\phi^2
=\frac12\int\mathrm d^{n-1}k\left(\frac\omega2\right)
\Big[&-
\hat a_{\mathbf k}\hat a_{-\mathbf k}e^{-2i\omega t}
+\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k}\\
&+\hat a_{\mathbf k}\hat a_{\mathbf k}^\dagger
-\hat a_{\mathbf k}^\dagger\hat a_{-\mathbf k}^\dagger e^{2i\omega t}
\Big]
\end{aligned}
\tag{9.82}
$$

以及

$$
\begin{aligned}
\frac12\int\mathrm d^{n-1}x\,(\boldsymbol\nabla\phi)^2
=\frac12\int\mathrm d^{n-1}k\left(\frac{\mathbf k^2}{2\omega}\right)
\Big[&
\hat a_{\mathbf k}\hat a_{-\mathbf k}e^{-2i\omega t}
+\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k}\\
&+\hat a_{\mathbf k}\hat a_{\mathbf k}^\dagger
+\hat a_{\mathbf k}^\dagger\hat a_{-\mathbf k}^\dagger e^{2i\omega t}
\Big].
\end{aligned}
\tag{9.83}
$$

使用 $\omega^2=\mathbf k^2+m^2$，可以把所有项合起来，将标量场理论的 Hamiltonian 写成

$$
\begin{aligned}
H
&=\frac12\int\mathrm d^{n-1}k
\left[
\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k}
+\hat a_{\mathbf k}\hat a_{\mathbf k}^\dagger
\right]\omega\\
&=\int\mathrm d^{n-1}k
\left[
\hat n_{\mathbf k}+\frac12\delta^{(n-1)}(0)
\right]\omega,
\end{aligned}
\tag{9.84}
$$

最后一步使用对易关系（9.67）以及粒子数算符 $\hat n_{\mathbf k}=\hat a_{\mathbf k}^\dagger\hat a_{\mathbf k}$。按照类似逻辑，可以构造对应于总动量空间分量的算符：

$$
P^i=\int\mathrm d^{n-1}k\,\hat n_{\mathbf k}k^i.
\tag{9.85}
$$

正如所预期的，能量本征态具有固定的激发数，每个激发都携带能量 $\omega$。Fock 基中的激发

<!-- source: PDF 406; printed: 393 -->

被解释为粒子。这就是粒子在量子场论中出现的方式：能量本征态是具有确定动量的粒子集合。当然，我们的模式是延伸遍及整个空间的平面波，并非想到粒子时浮现在脑海中的气泡室局域轨迹。更麻烦的是，在弯曲时空中，波动方程不会拥有可被解释成粒子的确定频率平面波解。解决这两个问题的办法，是从实验装置会观测到什么这一角度作操作性思考。最佳策略是定义一种合理的粒子探测器概念，使其在平直时空中退化为直观图景，再把“粒子”定义为“粒子探测器所探测到的东西”。对定义适当的粒子探测器，可以证明平面波模式会以我们希望的方式“留下轨迹”：在一列这类探测器中，如果平面波触发了一个探测器，那么它很可能沿着由波矢确定的方向，在从第一个探测器出发的路径上触发其他探测器。（应当指出，如果你到 Fermilab 或 CERN 之类的真实粒子加速器参观，那里的探测器与研究弯曲时空量子场论的理论家所发明的探测器几乎没有相似之处；不过在深层意义上，二者确有根本相似性。）关于粒子探测器的讨论，见 Birrell 与 Davies（1982）。

你也许会担心 Hamiltonian（9.84）中的因子 $\delta^{(n-1)}(0)$，而且确实应该担心。它意味着，即使在真空态 $|0\rangle$ 中测量，Hamiltonian 也是无穷大。这一项是谐振子零点能（9.20）的场论对应物。第 4 章讨论宇宙学常数时曾提到，量子涨落导致经典真空能量发生形式上无穷大的位移；当计入引力时，这个对标量场 Hamiltonian 的无穷贡献会表现成发散的宇宙学常数。无穷量 $\delta^{(n-1)}(0)$ 在无穷范围 $\mathbf k$ 上的积分，可以改述为：总能量是在一个无限大空间中对无限能量密度的积分。然而，真正的问题是高频模式贡献的能量密度，无限体积本身并非症结。如果把计算放在体积为 $L^{n-1}$ 的盒子中来正规化，会得到

$$
\frac12\int\mathrm d^{n-1}k\,\delta^{(n-1)}(0)\omega
\longrightarrow
\frac12\left(\frac{L}{2\pi}\right)^{n-1}\sum_{\mathbf k}\omega,
\tag{9.86}
$$

即使 $L$ 有限，它仍然发散，因为 $\mathbf k$，因而 $\omega$，可以任意大。在某个高动量 $k_{\max}$ 处设置截断，就会恢复（4.104）。

讨论简单谐振子时曾指出，如果选择一个具有负极小值的经典势，就可以避免零点能；量子力学贡献未必代表真正答案，它只表示能量相对于经典值的位移。场论中同样如此：可以自由定义最初的经典标量场理论，使量子力学真空能量消失。不过，不能简单地逐个模式减去有限能量，因为我们的自由只是在势中加入单一常数，从而也在 Hamiltonian

<!-- source: PDF 407; printed: 394 -->

密度（9.52）中加入单一常数。为了让真空态 Hamiltonian 有限，这个常数必须是无穷大。减去一个无穷常数没有任何问题；这是量子场论中历史悠久的技术，称为“重整化”。重整化有时显得吓人，甚至仿佛不合法；实际上它完全合理。无穷大只出现在量子理论与其经典对应物之间的关系中，不会出现在任何可观测量里。自然界大概既不知道、也不关心我们为何偏爱经典力学，所以重整化没有任何值得深感不安之处。

当然，一旦通过重整化得到有限真空能量，这个能量可以任意取值；它完全是任意的。弯曲时空中的量子场论仍然如此：我们也许无法把场分解成确定频率模式，所以不可能给每个模式指定真空能量贡献；但仔细分析允许把真空能量重整化为任何想要的数值。这里仍未发生任何深奥事情；经典模型中的真空能量本来就完全任意，只是为了方便才选择为零。宇宙学常数问题并不是量子力学贡献了巨量真空能量，因为这个贡献可以直接通过重整化去掉；问题在于，没有理由让所得任意数恰好接近零。正如前面讨论的，从有效场论视角看，问题更加尖锐，因为我们有理由预期真空能量的标度，即未知量子引力效应应开始贡献的 Planck 标度。不过，本章始终只关心量子场在固定时空背景中的传播，不会把量子能量—动量张量用作 Einstein 方程的源；因此可以选择忽略宇宙学常数问题。

## 9.4 弯曲时空中的量子场论

第 4 章已经讨论过，把物理理论从平直时空推广到弯曲时空有多么容易：只需把理论写成坐标不变的形式，并断言时空弯曲时它仍然成立。这一程序对量子场论仍然有效，不过我们必须放弃一些在平直时空中似乎不可或缺的概念。

从弯曲时空中标量场的 Lagrangian 密度开始：

$$
\mathcal L=\sqrt{-g}\left(
-\frac12g^{\mu\nu}\nabla_\mu\phi\nabla_\nu\phi
-\frac12m^2\phi^2-\xi R\phi^2
\right).
\tag{9.87}
$$

除度规 $g_{\mu\nu}$ 及其行列式按预期出现外，还加入了对曲率标量 $R$ 的直接耦合，用常数 $\xi$ 参数化。由于 $\xi$ 无量纲，没有理由预期它很小；

<!-- source: PDF 408; printed: 395 -->

事实上，它自然应为 1 的量级。文献中最常用的 $\xi$ 取值有两种：**最小耦合**直接关闭与 $R$ 的相互作用，

$$
\xi=0,
\tag{9.88}
$$

而**共形耦合**令

$$
\xi=\frac{n-2}{4(n-1)},
\tag{9.89}
$$

在四维中就是 $\xi=1/6$。利用附录 G 的公式很容易检验：当 $\xi$ 取此值且 $m=0$ 时，标量场理论在共形变换 $g_{\mu\nu}\to\omega^2(x)g_{\mu\nu}$ 下不变。事实上，在真实世界中，没有充分理由选择最小耦合或共形耦合中的任何一种：最小耦合并未增强任何对称性，而共形不变性当然也不是大多数物理理论的对称性。（由于共形变换是局域尺度变化，由质量等有量纲参数刻画的理论通常不具有共形不变性。）即使一套经典理论具有共形不变性，量子化也可能破坏这种对称性；例如，与无质量夸克耦合的量子色动力学（QCD）就是如此。一般而言，在四维中很难找到严格共形不变的相互作用理论，不过已知有些高度超对称的模型具有共形不变性。

可以像以前一样继续量子化理论。共轭动量是

$$
\pi=\frac{\partial\mathcal L}{\partial(\nabla_0\phi)},
\tag{9.90}
$$

对 Lagrangian（9.87）为

$$
\pi=\sqrt{-g}\,\nabla_0\phi.
\tag{9.91}
$$

可以施加正则对易关系

$$
\begin{aligned}
[\phi(t,\mathbf x),\phi(t,\mathbf x')]&=0,\\
[\pi(t,\mathbf x),\pi(t,\mathbf x')]&=0,\\
[\phi(t,\mathbf x),\pi(t,\mathbf x')]
&=\frac{i}{\sqrt{-g}}\delta^{(n-1)}(\mathbf x-\mathbf x').
\end{aligned}
\tag{9.92}
$$

标量场的运动方程为

$$
\Box\phi-m^2\phi-\xi R\phi=0.
\tag{9.93}
$$

对于诱导度规为 $\gamma_{ij}$、单位法向量为 $n^\mu$ 的类空超曲面 $\Sigma$，这个方程的解之间的内积为

<!-- source: PDF 409; printed: 396 -->

$$
(\phi_1,\phi_2)
=-i\int_\Sigma
\left(\phi_1\nabla_\mu\phi_2^*
-\phi_2^*\nabla_\mu\phi_1\right)
n^\mu\sqrt\gamma\,\mathrm d^{n-1}x,
\tag{9.94}
$$

它与 $\Sigma$ 的选择无关。

到目前为止一切顺利。若要继续沿用平直空间中的步骤，现在应当引入一组构成（9.93）解空间完备基的正频和负频模式，用这些模式展开场算符 $\phi$，并把算符系数解释为产生和湮灭算符。程序正是在这里失效。一般时空通常没有任何类时 Killing 向量，所以通常无法找到能把时间依赖因子和空间依赖因子分离开的波动方程解，相应地也无法把模式分类成正频或负频。我们能够找到一组基模式；问题在于，一般会有许多这样的集合，没有办法偏爱其中任何一组，而真空或粒子数算符的概念会敏感地依赖所选集合。

看看还能做些什么。总可以找到（9.93）的一组正交归一解 $f_i(x^\mu)$：

$$
(f_i,f_j)=\delta_{ij},
\tag{9.95}
$$

还有相应的负范数共轭模式：

$$
(f_i^*,f_j^*)=-\delta_{ij}.
\tag{9.96}
$$

指标 $i$ 可以连续，也可以离散；眼下采用适合离散情形的记号。可以选择让这些模式构成完备集，从而将场展开为

$$
\phi=\sum_i\left(\hat a_i f_i+\hat a_i^\dagger f_i^*\right).
\tag{9.97}
$$

系数 $\hat a_i$ 与 $\hat a_i^\dagger$ 具有对易关系

$$
\begin{aligned}
[\hat a_i,\hat a_j]&=0,\\
[\hat a_i^\dagger,\hat a_j^\dagger]&=0,\\
[\hat a_i,\hat a_j^\dagger]&=\delta_{ij}.
\end{aligned}
\tag{9.98}
$$

会有一个被所有湮灭算符湮灭的真空态 $|0_f\rangle$：

$$
\hat a_i|0_f\rangle=0
\qquad\text{对所有 }i.
\tag{9.99}
$$

从这个真空态可以定义 Hilbert 空间的完整 Fock 基。与前面一样，反复作用 $\hat a_i^\dagger$ 会产生含 $n_i$ 个激发的状态：

<!-- source: PDF 410; printed: 397 -->

$$
|n_i\rangle
=\frac{1}{\sqrt{n_i!}}(\hat a_i^\dagger)^{n_i}|0_f\rangle,
\tag{9.100}
$$

具有不同种类激发的状态也同样构造。甚至可以为每个模式定义粒子数算符

$$
\hat n_{fi}=\hat a_i^\dagger\hat a_i.
\tag{9.101}
$$

真空态和粒子数算符上的下标 $f$ 提醒我们，它们是相对于模式集合 $f_i$ 定义的。

这套装置看起来与平直空间中的情况十分相似；为何不能直接宣布 $\hat a_i^\dagger$ 产生的激发就是粒子，就此结束？当然可以，但必须面对还可以作出其他选择这一事实；基模式 $f_i(x^\mu)$ 极不唯一。考虑另一组模式 $g_i(x^\mu)$，它们具有原模式的全部性质，并且同共轭模式 $g_i^*$ 一起构成完备基，使场算符可以展开为

$$
\phi=\sum_i\left(\hat b_i g_i+\hat b_i^\dagger g_i^*\right).
\tag{9.102}
$$

湮灭、产生算符 $\hat b_i$ 与 $\hat b_i^\dagger$ 具有对易关系

$$
\begin{aligned}
[\hat b_i,\hat b_j]&=0,\\
[\hat b_i^\dagger,\hat b_j^\dagger]&=0,\\
[\hat b_i,\hat b_j^\dagger]&=\delta_{ij},
\end{aligned}
\tag{9.103}
$$

并存在一个被所有湮灭算符湮灭的真空态 $|0_g\rangle$：

$$
\hat b_i|0_g\rangle=0
\qquad\text{对所有 }i.
\tag{9.104}
$$

可以在这个真空上反复作用产生算符来构造 Fock 基，并定义粒子数算符

$$
\hat n_{gi}=\hat b_i^\dagger\hat b_i.
\tag{9.105}
$$

从平直到弯曲时空的过渡中，我们失去了偏爱某一组模式的任何理由。在平直时空中，可以要求模式相对于时间坐标具有（9.61）定义的正频，从而挑出一组自然模式。时间坐标并不唯一，因为可以自由作 Lorentz 变换；不过我们已经看到，真空态和总粒子数算符在这类变换下不变。因此，每位惯性观察者都会同意什么是真空态，也会同意周围有多少粒子。

<!-- source: PDF 411; printed: 398 -->

在当前考虑的更一般情形中，如果一位观察者相对于模式集合 $f_i$ 定义粒子，而另一位观察者使用模式集合 $g_i$，他们通常不会同意观测到了多少粒子，甚至可能不会同意究竟有没有粒子。为了看清这一点，方便的做法是用另一组模式展开每一组模式：

$$
\begin{aligned}
g_i&=\sum_j\left(\alpha_{ij}f_j+\beta_{ij}f_j^*\right),\\
f_i&=\sum_j\left(\alpha_{ji}^*g_j-\beta_{ji}g_j^*\right).
\end{aligned}
\tag{9.106}
$$

从一组基模式到另一组的变换称为 **Bogoliubov 变换**；实现变换的矩阵 $\alpha_{ij}$ 与 $\beta_{ij}$ 称为 Bogoliubov 系数。利用模式函数的正交归一性，可以把它们表示成

$$
\begin{aligned}
\alpha_{ij}&=(g_i,f_j),\\
\beta_{ij}&=-(g_i,f_j^*).
\end{aligned}
\tag{9.107}
$$

它们满足自身的归一化条件

$$
\begin{aligned}
\sum_k\left(\alpha_{ik}\alpha_{jk}^*
-\beta_{ik}\beta_{jk}^*\right)&=\delta_{ij},\\
\sum_k\left(\alpha_{ik}\beta_{jk}
-\beta_{ik}\alpha_{jk}\right)&=0.
\end{aligned}
\tag{9.108}
$$

Bogoliubov 系数除了描述模式之间的变换，也可以用来在算符之间作变换：

$$
\begin{aligned}
\hat a_i&=\sum_j\left(
\alpha_{ji}\hat b_j+\beta_{ji}^*\hat b_j^\dagger
\right),\\
\hat b_i&=\sum_j\left(
\alpha_{ij}^*\hat a_j-\beta_{ij}^*\hat a_j^\dagger
\right).
\end{aligned}
\tag{9.109}
$$

现在设系统处于 $f$ 真空 $|0_f\rangle$，其中不会观测到任何 $f$ 粒子；我们想知道，使用 $g$ 模式的观察者会观测到多少粒子。因此，计算 $f$ 真空中 $g$ 粒子数算符的期望值：

$$
\begin{aligned}
\langle0_f|\hat n_{gi}|0_f\rangle
&=\langle0_f|\hat b_i^\dagger\hat b_i|0_f\rangle\\
&=\left\langle0_f\left|
\sum_{jk}
\left(\alpha_{ij}\hat a_j^\dagger-\beta_{ij}\hat a_j\right)
\left(\alpha_{ik}^*\hat a_k-\beta_{ik}^*\hat a_k^\dagger\right)
\right|0_f\right\rangle\\
&=\sum_{jk}(-\beta_{ij})(-\beta_{ik}^*)
\langle0_f|\hat a_j\hat a_k^\dagger|0_f\rangle
\end{aligned}
$$

<!-- source: PDF 412; printed: 399 -->

$$
\begin{aligned}
\langle0_f|\hat n_{gi}|0_f\rangle
&=\sum_{jk}\beta_{ij}\beta_{ik}^*
\langle0_f|(\hat a_k^\dagger\hat a_j+\delta_{jk})|0_f\rangle\\
&=\sum_{jk}\beta_{ij}\beta_{ik}^*\delta_{jk}
\langle0_f|0_f\rangle\\
&=\sum_j\beta_{ij}\beta_{ij}^*.
\end{aligned}
\tag{9.110}
$$

因此，$f$ 真空中的 $g$ 粒子数可以用 Bogoliubov 系数表示为

$$
\langle0_f|\hat n_{gi}|0_f\rangle
=\sum_j|\beta_{ij}|^2.
\tag{9.111}
$$

没有任何理由要求它为零：从一种视角看似空无一物的真空，在另一种视角下会充满粒子。只要任何 $\beta_{ij}$ 非零，两个真空态就不会重合。观察（9.109）可以理解其原因：$\beta_{ij}$ 描述了一组基中的产生算符混入另一组基的湮灭算符。

关于模式和粒子数算符的讨论也许显得过于抽象。真实粒子探测器在一个可能弯曲的时空中沿某条轨迹运动时，它要么探测到粒子，要么没有探测到；它并不知道我们在场论中使用了哪一组基模式。那么，怎样知道这种探测器实际采用了哪一种“粒子”定义？答案是，探测器沿自身轨迹测量固有时 $\tau$，并相对于该固有时定义正频和负频。因此，如果能找到一组满足

$$
\frac{D}{\mathrm d\tau}f_i=-i\omega f_i
\tag{9.112}
$$

的模式 $f_i$，就可以用这些模式计算探测器会看到多少粒子。当然，一般不可能在整个时空上找到这类模式。可能做到这一点的一种情形是**静态时空**，此时存在与超曲面正交的类时 Killing 向量 $K^\mu$。在这种情形下，可以选择一组坐标，使度规分量与时间坐标 $t$ 无关，并且不存在时间—空间交叉项：

$$
\partial_0g_{\mu\nu}=0,
\qquad
g_{0i}=0.
\tag{9.113}
$$

（这里指标 $i,j$ 表示空间分量，不再是模式标记。）对这类度规，d’Alembert 算符作用在某个模式函数 $f(t,\mathbf x)$ 上的结果是

$$
\Box f=\left[
g^{00}\partial_0^2
+\frac12g^{00}g^{ij}(\partial_i g_{00})\partial_j
+g^{ij}\partial_i\partial_j
-g^{ij}\Gamma^k{}_{ij}\partial_k
\right]f.
\tag{9.114}
$$

<!-- source: PDF 413; printed: 400 -->

因此，运动方程（9.93）可以写成

$$
\partial_0^2f
=-(g^{00})^{-1}\left[
g^{ij}\partial_i\partial_j
+\frac12g^{00}g^{ij}(\partial_i g_{00})\partial_j
-g^{ij}\Gamma^k{}_{ij}\partial_k
-(m^2+\xi R)
\right]f.
\tag{9.115}
$$

左边的算符是纯时间导数，右边的算符只涉及空间导数和仅依赖空间的函数。因此可以找到可分离解

$$
f_\omega(t,\mathbf x)=e^{-i\omega t}\bar f_\omega(\mathbf x),
\tag{9.116}
$$

它们可以描述为正频模式：

$$
\partial_t f_\omega(t,\mathbf x)
=-i\omega f_\omega(t,\mathbf x),
\qquad \omega>0.
\tag{9.117}
$$

这一关系可以改写成坐标不变形式

$$
\mathcal L_Kf_\omega
=K^\mu\partial_\mu f_\omega
=-i\omega f_\omega,
\qquad \omega>0,
\tag{9.118}
$$

其中 $\mathcal L_Kf_\omega$ 表示 $f_\omega$ 沿 $K$ 的 Lie 导数。还会有负频共轭模式

$$
\mathcal L_Kf_\omega^*
=K^\mu\partial_\mu f_\omega^*
=i\omega f_\omega^*,
\qquad \omega>0.
\tag{9.119}
$$

模式 $(f_\omega,f_\omega^*)$ 合在一起，会构成静态背景中波动方程解的一组基。除非这些模式与探测器相关，否则它们的存在帮不上忙。如果探测器的轨迹沿 Killing 场的轨道运动，也就是四速度 $U^\mu=\mathrm dx^\mu/\mathrm d\tau$ 与 $K^\mu$ 成正比，那么固有时将与 Killing 时间 $t$ 成正比，相对于这个 Killing 向量为正频的模式便会成为描述 Fock 空间的自然基。下一节讨论 Unruh 效应时，将看到这种现象的实际作用。

上一节提到，量子场论中的真空能量需要重整化。弯曲时空中仍有这一要求，但适当的重整化程序更难构造，因为没有优先的模式基。尽管如此，人们已经发展出代数方法，至少在某些情形下能够严格定义重整化的能量—动量张量。这里不深入这一主题，但至少应介绍其背后的基本思想。即使存在曲率，在足够小的尺度上，时空也应当看起来像 Minkowski 时空。平直时空中的真空能量发散来自短波长模式，所以应当能够在极小尺度上，把弯曲时空中场的行为与平直时空中的行为匹配，并减去出现的发散。具体而言，考虑某个状态 $|\psi\rangle$ 中量子场 $\phi$ 的两点函数

<!-- source: PDF 414; printed: 401 -->

$$
G(x_1,x_2)=\langle\psi|\phi(x_1)\phi(x_2)|\psi\rangle,
\tag{9.120}
$$

其中 $x_1$ 和 $x_2$ 是两个时空点。当 $x_1$ 与 $x_2$ 相互靠近时，Minkowski 真空中的两点函数会变得奇异。我们希望刻画这种奇异性，并要求弯曲时空中的任何正则态都具有它。所谓“相互靠近”，是指连接两点的最短测地线上的距离平方 $\sigma(x_1,x_2)$ 趋于零。在 $x_1$ 和 $x_2$ 非常接近的极限下，测地距离平方就是

$$
\sigma(x_1,x_2)
=g_{\mu\nu}(x_1^\mu-x_2^\mu)(x_1^\nu-x_2^\nu),
\qquad x_1\to x_2.
\tag{9.121}
$$

当然，在 Lorentz 流形上，两点类光分离时测地距离也会消失，并非只有两点重合时才如此。因此，加入一个很小的虚部，并在它趋于零时取极限；定义

$$
\sigma_\epsilon(x_1,x_2)
=\sigma(x_1,x_2)+2i\epsilon(t_1-t_2)+\epsilon^2.
\tag{9.122}
$$

这里 $t$ 是类时坐标，并假定取 $\epsilon\to0^+$ 的极限。（这一公式显式依赖坐标，但这种依赖在该极限下无关紧要。）事实证明，Minkowski 时空自然真空具有唯一的奇异结构：在四维中，两点函数包含形如 $1/(4\pi^2\sigma_\epsilon)$ 的领头奇异项，以及正比于 $\ln\sigma_\epsilon$ 的次领头奇异项，其他所有项都正则。因此，要求弯曲时空中任何物理上合理的量子态服从

$$
G(x_1,x_2)
=\frac{U(x_1,x_2)}{4\pi^2\sigma_\epsilon}
+V(x_1,x_2)\ln\sigma_\epsilon
+W(x_1,x_2),
\tag{9.123}
$$

其中函数 $U(x_1,x_2)$、$V(x_1,x_2)$ 与 $W(x_1,x_2)$ 在 $x_1=x_2$ 处都正则，并且 $U(x,x)=1$。具有这一性质的状态称为 **Hadamard 态**。可以证明，重整化能量—动量张量在所有 Hadamard 态中都定义良好且没有奇异性；在任何非 Hadamard 态中，它都会出现奇异性。如果 Hadamard 条件在某个部分 Cauchy 曲面上成立，那么在其依赖域内处处成立。换言之，能量—动量张量可能在视界上变得奇异，却不会在某组适定初始数据的 Cauchy 发展内部变得奇异。因此，这类状态似乎适合用于弯曲时空 QFT。细节见 Wald（1994）。

由此可见，弯曲时空 QFT 与平直时空 QFT 共享大多数基本特征；关键区别在于，我们无法选定一组所有惯性观察者都会认作粒子的自然基模式。第 9.2 节末尾简要讨论过受瞬时外力作用的振子，以及怎样定义把早期粒子数本征态

<!-- source: PDF 415; printed: 402 -->

与晚期粒子数本征态联系起来的 S 矩阵。同一套思想可以直接移植到量子场论。若时空在渐近过去和渐近未来都是静态的，中间却有某种扰动，就可以定义在早期和晚期为能量本征态的入态与出态，再用一组 Bogoliubov 系数描述入真空怎样以出态来表示成多粒子构型。这种现象称为引力场的粒子产生；相关物理例子包括早期宇宙和黑洞。[^9-2]

[^9-2]: 有趣的是，弯曲时空中粒子产生最早正是由 Schrödinger 本人讨论的；见 E. Schrödinger（1939），*Physica (Utrecht)* **6**, 899。

## 9.5 Unruh 效应

不得不承认，尽管已经花费很多精力理解弯曲时空量子场论的基础，我们其实不会在弯曲背景中开展任何详细计算。接下来研究的是一种依赖前述思想、却连平直时空中也会显现的现象：Unruh 效应。它指出，处于传统 Minkowski 真空态中的加速观察者，会观测到粒子的热谱。从历史上看，Unruh 效应是在试图理解 Hawking 效应背后的物理时发现的；后者是存在黑洞事件视界时的热辐射。我们的策略是仔细导出 Unruh 效应，然后在下一节论证：在合理假设下，它意味着 Hawking 效应。直接导出 Hawking 效应更加困难，只因为在弯曲时空中求解波动方程比在平直时空中更难。

Unruh 效应的基本思想很简单：它体现了这样一种观念——对正频和负频模式采用不同定义的观察者，会对给定状态的粒子含量产生分歧。Minkowski 空间中匀加速观察者的轨迹，沿某个类时 Killing 向量的轨道运动，但该向量不同于通常时间平移对称性的 Killing 向量。因此，可以用适合加速观察者的模式展开场，再计算普通 Minkowski 真空中的粒子数算符；结果将得到粒子的热谱。这个结果可以配上不同的解释语言；最基本的教训是，我们以为惰性的真空其实具有热态的性质。

为了排除一切可能的复杂因素，直达底层现象，考虑一套尽可能简单、但又不至于完全平凡的量子场论：二维时空（$n=2$）中的无质量（$m=0$）标量场。在二维中，共形耦合与最小耦合相同，所以不加入与曲率标量的任何直接相互作用。（这里处于平直时空，因此这种耦合无论如何也不会产生作用。）相关波动方程为

$$
\Box\phi=0.
\tag{9.124}
$$

<!-- source: PDF 416; printed: 403 -->

在量子化这套场论之前，先想想匀加速观察者眼中的二维 Minkowski 空间。度规在惯性坐标中可以写成

$$
\mathrm ds^2=-\mathrm dt^2+\mathrm dx^2.
\tag{9.125}
$$

考虑沿 $x$ 方向作大小为 $\alpha$ 的匀加速运动的观察者。我们声称，其轨迹 $x^\mu(\tau)$ 为

$$
\begin{aligned}
t(\tau)&=\frac1\alpha\sinh(\alpha\tau),\\
x(\tau)&=\frac1\alpha\cosh(\alpha\tau).
\end{aligned}
\tag{9.126}
$$

验证这条路径确实对应恒定加速度。加速度二向量在全局惯性坐标系中为

$$
a^\mu=\frac{D^2x^\mu}{\mathrm d\tau^2}
=\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2},
\tag{9.127}
$$

因为这些坐标中的 Christoffel 符号为零，沿路径的协变导数等于普通导数。因此 $a^\mu$ 的分量为

$$
\begin{aligned}
a^t&=\alpha\sinh(\alpha\tau),\\
a^x&=\alpha\cosh(\alpha\tau),
\end{aligned}
\tag{9.128}
$$

其大小为

$$
\sqrt{a_\mu a^\mu}
=\sqrt{-\alpha^2\sinh^2(\alpha\tau)
+\alpha^2\cosh^2(\alpha\tau)}
=\alpha.
\tag{9.129}
$$

所以，这条路径如愿对应大小为 $\alpha$ 的恒定加速度。加速观察者的轨迹满足

$$
x^2(\tau)=t^2(\tau)+\frac{1}{\alpha^2},
\tag{9.130}
$$

因而描述了一条双曲线：它在过去渐近于类光路径 $x=-t$，在未来渐近于 $x=t$。加速观察者从过去类光无穷远运动到未来类光无穷远；测地观察者到达的则是类时无穷远。

> **作者勘误（印刷页 403，式 (9.130)）：** 扫描版最后一项误写为 $\alpha^2$；正确结果是 $1/\alpha^2$，与（9.126）及双曲线 $x^2-t^2=1/\alpha^2$ 一致。上式已修正。

可以在二维 Minkowski 空间中选择适应匀加速运动的新坐标 $(\eta,\xi)$。令

$$
t=\frac1a e^{a\xi}\sinh(a\eta),
\qquad
x=\frac1a e^{a\xi}\cosh(a\eta),
\qquad (x>|t|).
\tag{9.131}
$$

<!-- source: PDF 417; printed: 404 -->

**图 9.1　Rindler 坐标中的 Minkowski 时空。** 图以 $t$ 为纵轴、$x$ 为横轴，两条粗的类光线把时空分成区域 I—IV。区域 I 是沿 $+x$ 方向作恒定加速运动的观察者能够到达的区域；$(\eta,\xi)$ 坐标可以用于区域 I，也可以单独用于区域 IV，但在区域 IV 中坐标方向相反。曲线表示恒加速度轨迹，$\eta$ 方向沿轨迹、$\xi$ 方向横跨轨迹。向量场 $\partial_\eta$ 对应 Lorentz boost 对称性的生成元。视界 $H^\pm$ 是该向量场的 Killing 视界，也分别代表 Rindler 观察者所见过去与未来的边界。

新坐标的取值范围为

$$
-\infty<\eta,\xi<+\infty,
\tag{9.132}
$$

覆盖图 9.1 中标为区域 I 的楔形 $x>|t|$。在这些坐标中，恒加速度路径（9.126）为

$$
\begin{aligned}
\eta(\tau)&=\frac\alpha a\tau,\\
\xi(\tau)&=\frac1a\ln\!\left(\frac a\alpha\right),
\end{aligned}
\tag{9.133}
$$

所以固有时正比于 $\eta$，空间坐标 $\xi$ 为常数。特别地，$\alpha=a$ 的观察者沿路径

$$
\eta=\tau,
\qquad
\xi=0
\tag{9.134}
$$

运动。这些坐标中的度规为

$$
\mathrm ds^2=e^{2a\xi}(-\mathrm d\eta^2+\mathrm d\xi^2).
\tag{9.135}
$$

带有这一度规的区域 I 称为 **Rindler 空间**，尽管显然它只是 Minkowski 空间的一部分。**Rindler 观察者**沿

<!-- source: PDF 418; printed: 405 -->

（9.133）这样的恒加速度路径运动。Rindler 空间的因果结构类似图 5.12 中最大延拓 Schwarzschild 解的 $r>2GM$ 区域。特别地，图 9.1 中标为 $H^+$ 的类光线 $x=t$，是区域 I 中任意 $\eta=\text{常数}$ 类空超曲面的未来 Cauchy 视界；类似地，$H^-$ 是过去 Cauchy 视界。这些视界令人联想到 Kruskal 图中的事件视界；Schwarzschild 中的静止观察者（$r=\text{常数}$）对应 Rindler 空间中的恒加速度路径。

（9.135）的度规分量与 $\eta$ 无关，因此立刻知道 $\partial_\eta$ 是 Killing 向量。不过，这里终究只是 Minkowski 时空，我们以为自己已经知道全部 Killing 向量。事实上，把 $\partial_\eta$ 用 $(t,x)$ 坐标表示，可得

$$
\begin{aligned}
\partial_\eta
&=\frac{\partial t}{\partial\eta}\partial_t
+\frac{\partial x}{\partial\eta}\partial_x\\
&=e^{a\xi}\left[
\cosh(a\eta)\partial_t+\sinh(a\eta)\partial_x
\right]\\
&=a(x\partial_t+t\partial_x).
\end{aligned}
\tag{9.136}
$$

这恰好就是与 $x$ 方向 boost 相联系的 Killing 场。从这个表达式可以清楚看出，该 Killing 场自然延伸到整个时空：它在区域 II 和 III 中类空，在区域 IV 中类时但指向过去。刚才识别出的视界其实是 $\partial_\eta$ 的 Killing 视界。按（6.12）定义为 Killing 向量范数大小的红移因子为

$$
V=e^{a\xi}.
\tag{9.137}
$$

因此，该 Killing 视界的表面引力 $\kappa=\sqrt{\nabla_\mu V\nabla^\mu V}$ 为

$$
\kappa=a.
\tag{9.138}
$$

这里身处平直空间，没有真实引力；但这个表面引力刻画了 Rindler 观察者的加速度。

也可以把（9.131）的符号翻转，在区域 IV 中定义坐标 $(\eta,\xi)$：

$$
t=-\frac1a e^{a\xi}\sinh(a\eta),
\qquad
x=-\frac1a e^{a\xi}\cosh(a\eta),
\qquad (x<|t|).
\tag{9.139}
$$

> **公式核对说明（9.139）：** 扫描版的区域条件印作 $x<|t|$，上式依底本保留。由同式的 $x=-(1/a)e^{a\xi}\cosh(a\eta)$ 可知，区域 IV 实际满足 $x<-|t|$。作者官方勘误未列出此项。

负号保证 $\partial_\eta$ 与 $\partial_t$ 在区域 IV 中指向相反方向。严格地说，不能同时在区域 I 和 IV 使用 $(\eta,\xi)$，因为这些坐标在两个区域中的取值范围相同；只要明确指出所指区域，就不会有问题。重复使用同一组坐标标签比引入新坐标更好，因为度规（9.135）同时适用于区域 I 和 IV。

<!-- source: PDF 419; printed: 406 -->

沿曲面 $t=0$，除 $x=0$ 这一消失点外，$\partial_\eta$ 是与超曲面正交的类时 Killing 向量。因此，可以用它定义一组正频和负频模式，并在其上为标量场 Hilbert 空间构造 Fock 基。无质量 Klein–Gordon 方程在 Rindler 坐标中为

$$
\Box\phi=e^{-2a\xi}(-\partial_\eta^2+\partial_\xi^2)\phi=0.
\tag{9.140}
$$

归一化平面波 $g_k=(4\pi\omega)^{-1/2}e^{-i\omega\eta+ik\xi}$，其中 $\omega=|k|$，是这个方程的解，而且从 $\partial_\eta g_k=-i\omega g_k$ 看似具有正频。然而，我们需要模式相对于指向未来的 Killing 向量为正频；在区域 IV 中，这个角色由 $\partial_{(-\eta)}=-\partial_\eta$ 扮演。为处理这一麻烦，引入两组模式，一组支撑在区域 I，另一组支撑在区域 IV：

$$
g_k^{(1)}=
\begin{cases}
\dfrac{1}{\sqrt{4\pi\omega}}e^{-i\omega\eta+ik\xi}, & \mathrm I,\\
0, & \mathrm{IV},
\end{cases}
\qquad
g_k^{(2)}=
\begin{cases}
0, & \mathrm I,\\
\dfrac{1}{\sqrt{4\pi\omega}}e^{+i\omega\eta+ik\xi}, & \mathrm{IV}.
\end{cases}
\tag{9.141}
$$

两种情形都取 $\omega=|k|$；在二维中，空间波矢只是单个数 $k$。每组模式都相对于适当的、指向未来的类时 Killing 向量为正频：

$$
\partial_\eta g_k^{(1)}=-i\omega g_k^{(1)},
\qquad
\partial_{(-\eta)}g_k^{(2)}=-i\omega g_k^{(2)},
\qquad \omega>0.
\tag{9.142}
$$

这两组模式连同它们的共轭，构成整个时空上波动方程任意解的完备基模式。（单点 $x=t=0$ 是零测集，无需担心。）两组模式在 Rindler 图的区域 II 和 III 中都不为零；用 $\eta$、$\xi$ 坐标书写会掩盖这一点，但这些函数可以解析延拓到未来和过去区域。把相关湮灭算符记为 $\hat b_k^{(1,2)}$，可写成

$$
\phi=\int\mathrm dk\left(
\hat b_k^{(1)}g_k^{(1)}
+\hat b_k^{(1)\dagger}g_k^{(1)*}
+\hat b_k^{(2)}g_k^{(2)}
+\hat b_k^{(2)\dagger}g_k^{(2)*}
\right).
\tag{9.143}
$$

这一展开不同于（9.66）用原始 Minkowski 模式写出的表达式；在二维中，后者为

$$
\phi=\int\mathrm dk\left(
\hat a_kf_k+\hat a_k^\dagger f_k^*
\right).
\tag{9.144}
$$

<!-- source: PDF 420; printed: 407 -->

很容易检验，模式（9.141）相对于内积（9.94）已正确归一化。在度规（9.135）中，曲面 $\eta=0$ 上指向未来的单位法向量由下式归一化：

$$
-1=g_{\mu\nu}n^\mu n^\nu
=-e^{2a\xi}(n^0)^2,
\tag{9.145}
$$

即

$$
n^0=e^{-a\xi}.
\tag{9.146}
$$

另一方面，空间度规行列式满足

$$
\sqrt\gamma=e^{a\xi}.
\tag{9.147}
$$

所以 $n^0\sqrt\gamma=1$，Rindler 模式内积的计算与普通 Minkowski 模式完全相同。最终得到

$$
\begin{aligned}
(g_{k_1}^{(1)},g_{k_2}^{(1)})&=\delta(k_1-k_2),\\
(g_{k_1}^{(2)},g_{k_2}^{(2)})&=\delta(k_1-k_2),\\
(g_{k_1}^{(1)},g_{k_2}^{(2)})&=0,
\end{aligned}
\tag{9.148}
$$

共轭模式也有类似关系。

于是，在平直二维时空中，有 Minkowski 与 Rindler 两组模式可用于展开 Klein–Gordon 方程的解。虽然两种表示中理论的 Hilbert 空间相同，对它作为 Fock 空间的解释却不同；特别地，真空态不同。Minkowski 真空 $|0_{\mathrm M}\rangle$ 满足

$$
\hat a_k|0_{\mathrm M}\rangle=0,
\tag{9.149}
$$

它在 Rindler 表示中将被描述成多粒子态；同样，Rindler 真空 $|0_{\mathrm R}\rangle$ 满足

$$
\hat b_k^{(1)}|0_{\mathrm R}\rangle
=\hat b_k^{(2)}|0_{\mathrm R}\rangle=0,
\tag{9.150}
$$

它在 Minkowski 表示中将被描述成多粒子态。在实际层面，这一差异出现的原因是，单个 Rindler 模式永远无法写成正频 Minkowski 模式之和；在 $t=0$ 时，Rindler 模式只支撑在半直线上，而这种函数不能只用正频平面波展开。因此，用来定义 $|0_{\mathrm R}\rangle$ 的 Rindler 湮灭算符必然是 Minkowski 产生、湮灭算符的叠加，两个真空无法重合。

<!-- source: PDF 421; printed: 408 -->

Rindler 观察者相对于 boost Killing 向量 $\partial_\eta$ 的轨道静止。因此，区域 I 中这类观察者会用 Rindler 模式 $g_k^{(1)}$ 来描述物理；特别地，他们会认为 Rindler 真空中没有粒子，认为态 $\hat b_k^{(1)\dagger}|0_{\mathrm R}\rangle$ 包含一个频率为 $\omega=|k|$ 的粒子，依此类推。反过来，一个穿行于 Minkowski 真空态的 Rindler 观察者会探测到粒子背景，尽管惯性观察者会把同一状态描述为空无一物。Rindler 观察者会探测到什么样的粒子？我们已经知道如何回答：计算联系 Minkowski 模式与 Rindler 模式的 Bogoliubov 系数，再用它们求 Minkowski 真空中 Rindler 数算符的期望值。这个计算直接，却很繁琐，所以我们采用 Unruh 提出的一条捷径。我们将寻找一组模式：它们与 Minkowski 模式共享同一个真空态（尽管激发态的描述可能不同），同时又更容易与 Rindler 模式比较。具体做法是先从 Rindler 模式出发，把它们解析延拓到整个时空，再用原始 Rindler 模式表示延拓结果。

为看清这一方法，根据（9.131）和（9.139），区域 I 与 IV 中的 Minkowski 坐标 $(t,x)$ 和 Rindler 坐标 $(\eta,\xi)$ 满足

$$
e^{-a(\eta-\xi)}=
\begin{cases}
a(-t+x), & \mathrm I,\\
a(t-x), & \mathrm{IV},
\end{cases}
\qquad
e^{a(\eta+\xi)}=
\begin{cases}
a(t+x), & \mathrm I,\\
a(-t-x), & \mathrm{IV}.
\end{cases}
\tag{9.151}
$$

因此，对于 $k>0$（故 $\omega=k$）的模式 $g_k^{(1)}$，在区域 I 中可把它的时空依赖写成 Minkowski 坐标的形式：

$$
\begin{aligned}
\sqrt{4\pi\omega}\,g_k^{(1)}
&=e^{-i\omega\eta+ik\xi}\\
&=e^{-i\omega(\eta-\xi)}\\
&=a^{i\omega/a}(-t+x)^{i\omega/a}.
\end{aligned}
\tag{9.152}
$$

把这个函数解析延拓到整个时空很直接：只需在任意 $(t,x)$ 上使用最后一个表达式。不过，我们还希望处处用原始 Rindler 模式表示结果。由于 $g_k^{(1)}$ 模式在区域 IV 中为零，必须让 $g_k^{(2)}$ 模式参与进来。对 $k>0$，在区域 IV 中把后者写成 Minkowski 坐标可得

$$
\begin{aligned}
\sqrt{4\pi\omega}\,g_k^{(2)}
&=e^{+i\omega\eta+ik\xi}\\
&=e^{+i\omega(\eta+\xi)}\\
&=a^{-i\omega/a}(-t-x)^{-i\omega/a}.
\end{aligned}
\tag{9.153}
$$

<!-- source: PDF 422; printed: 409 -->

这与我们想要的（9.152）的行为不符。不过，取复共轭并反转波数，就得到

$$
\begin{aligned}
\sqrt{4\pi\omega}\,g_{-k}^{(2)*}
&=e^{-i\omega\eta+ik\xi}\\
&=e^{-i\omega(\eta-\xi)}\\
&=a^{i\omega/a}(t-x)^{i\omega/a}\\
&=a^{i\omega/a}\left[e^{-i\pi}(-t+x)\right]^{i\omega/a}\\
&=a^{i\omega/a}e^{\pi\omega/a}(-t+x)^{i\omega/a}.
\end{aligned}
\tag{9.154}
$$

所以组合

$$
\sqrt{4\pi\omega}
\left(g_k^{(1)}+e^{-\pi\omega/a}g_{-k}^{(2)*}\right)
=a^{i\omega/a}(-t+x)^{i\omega/a}
\tag{9.155}
$$

在整个 $t=0$ 曲面上都有良好定义。这里显式考察了 $k>0$；对 $k<0$ 也可得到相似的解析结果。

这一模式的正确归一化版本为

$$
h_k^{(1)}=
\frac{1}{\sqrt{2\sinh\!\left(\dfrac{\pi\omega}{a}\right)}}
\left(
e^{\pi\omega/2a}g_k^{(1)}
+e^{-\pi\omega/2a}g_{-k}^{(2)*}
\right).
\tag{9.156}
$$

这是 $g_k^{(1)}$ 模式的一种适当解析延拓。为了得到完备集合，还需要加入 $g_k^{(2)}$ 模式的延拓；用类似论证可得

$$
h_k^{(2)}=
\frac{1}{\sqrt{2\sinh\!\left(\dfrac{\pi\omega}{a}\right)}}
\left(
e^{\pi\omega/2a}g_k^{(2)}
+e^{-\pi\omega/2a}g_{-k}^{(1)*}
\right).
\tag{9.157}
$$

例如，要验证 $h_k^{(1)}$ 的归一化，可使用（9.148）：

$$
\begin{aligned}
\left(h_{k_1}^{(1)},h_{k_2}^{(1)}\right)
&=\frac{1}{2\sqrt{\sinh\!\left(\dfrac{\pi\omega_1}{a}\right)
\sinh\!\left(\dfrac{\pi\omega_2}{a}\right)}}
\Bigg[
e^{\pi(\omega_1+\omega_2)/2a}
\left(g_{k_1}^{(1)},g_{k_2}^{(1)}\right)\\
&\qquad\qquad\qquad\qquad
+e^{-\pi(\omega_1+\omega_2)/2a}
\left(g_{-k_1}^{(2)*},g_{-k_2}^{(2)*}\right)
\Bigg]\\
&=\frac{1}{2\sqrt{\sinh\!\left(\dfrac{\pi\omega_1}{a}\right)
\sinh\!\left(\dfrac{\pi\omega_2}{a}\right)}}
\Bigg[
e^{\pi(\omega_1+\omega_2)/2a}\delta(k_1-k_2)\\
&\qquad\qquad\qquad\qquad
+e^{-\pi(\omega_1+\omega_2)/2a}\delta(-k_1+k_2)
\Bigg]\\
&=\frac{e^{\pi\omega_1/a}-e^{-\pi\omega_1/a}}
{2\sinh\!\left(\dfrac{\pi\omega_1}{a}\right)}\delta(k_1-k_2).
\end{aligned}
$$

> **公式核对说明（9.158 前）：** 扫描版在第二个方括号中把 $e^{-\pi(\omega_1+\omega_2)/2a}\delta(-k_1+k_2)$ 前的符号印作正号，上式依底本转写；但共轭模式具有负范数（9.148），而下一行的分子也已写成 $e^{\pi\omega_1/a}-e^{-\pi\omega_1/a}$，所以该 $\delta$ 项在推导中应带负号。作者官方勘误未列出此项。

<!-- source: PDF 423; printed: 410 -->

因此，正如所期望的，

$$
\left(h_{k_1}^{(1)},h_{k_2}^{(1)}\right)=\delta(k_1-k_2).
\tag{9.158}
$$

现在可以用这些模式展开场：

$$
\phi=\int\mathrm dk\left(
\hat c_k^{(1)}h_k^{(1)}
+\hat c_k^{(1)\dagger}h_k^{(1)*}
+\hat c_k^{(2)}h_k^{(2)}
+\hat c_k^{(2)\dagger}h_k^{(2)*}
\right).
\tag{9.159}
$$

根据第 9.4 节对 Bogoliubov 变换的讨论，用 $g_k^{(1,2)}$ 表示 $h_k^{(1,2)}$ 的式（9.156）、（9.157），也相应给出了用算符 $\hat c_k^{(1,2)}$ 表示 Rindler 算符 $\hat b_k^{(1,2)}$ 的公式：

$$
\begin{aligned}
\hat b_k^{(1)}
&=\frac{1}{\sqrt{2\sinh\!\left(\dfrac{\pi\omega}{a}\right)}}
\left(
e^{\pi\omega/2a}\hat c_k^{(1)}
+e^{-\pi\omega/2a}\hat c_{-k}^{(2)\dagger}
\right),\\
\hat b_k^{(2)}
&=\frac{1}{\sqrt{2\sinh\!\left(\dfrac{\pi\omega}{a}\right)}}
\left(
e^{\pi\omega/2a}\hat c_k^{(2)}
+e^{-\pi\omega/2a}\hat c_{-k}^{(1)\dagger}
\right).
\end{aligned}
\tag{9.160}
$$

于是，区域 I 中的 Rindler 数算符

$$
\hat n_{\mathrm R}^{(1)}(k)
=\hat b_k^{(1)\dagger}\hat b_k^{(1)}
\tag{9.161}
$$

可以用新算符 $\hat c_k^{(1,2)}$ 表示。

对 $k>0$，原来的正频 Minkowski 平面波模式 $f_k\propto e^{-i\omega(t-x)}$ 在复 $(t,x)$ 上解析且有界，只要 $\operatorname{Im}(t-x)\leq0$。（这种模式称为“右行”模式，因为它描述向右传播的波。）对新模式 $h_k^{(1)}$ 也一样，只要把虚数次幂的支割线放在复 $(t-x)$ 平面的上半平面；检视（9.152）与（9.154）即可看出这一点，而且它与（9.154）中取 $-1=e^{-i\pi}$ 相容。类似考虑也适用于 $h_k^{(2)}$ 模式：它们在复 $(t+x)$ 平面的下半平面解析且有界，正如 $k<0$ 的正频 Minkowski 平面波模式（左行模式）。因此，有别于原始 Rindler 模式 $g_k^{(1,2)}$，我们知道 $h_k^{(1,2)}$ 模式完全可以用正频 Minkowski 模式 $f_k$ 表示。它们因而共享同一真空态 $|0_{\mathrm M}\rangle$，满足

$$
\hat c_k^{(1)}|0_{\mathrm M}\rangle
=\hat c_k^{(2)}|0_{\mathrm M}\rangle=0.
\tag{9.162}
$$

激发态并不相同，不过这无关紧要，因为我们关心的是当系统恰处于 Minkowski 真空时，Rindler 观察者看见什么。举例而言，区域 I 中的观察者会观测由算符 $\hat b_k^{(1)}$ 定义的粒子；这种频率为 $\omega$ 的粒子的期望数为

$$
\langle0_{\mathrm M}|\hat n_{\mathrm R}^{(1)}(k)|0_{\mathrm M}\rangle
=\langle0_{\mathrm M}|\hat b_k^{(1)\dagger}\hat b_k^{(1)}|0_{\mathrm M}\rangle.
$$

<!-- source: PDF 424; printed: 411 -->

利用（9.160），继续算得

$$
\begin{aligned}
\langle0_{\mathrm M}|\hat n_{\mathrm R}^{(1)}(k)|0_{\mathrm M}\rangle
&=\frac{1}{2\sinh\!\left(\dfrac{\pi\omega}{a}\right)}
\langle0_{\mathrm M}|
e^{-\pi\omega/a}\hat c_{-k}^{(1)}\hat c_{-k}^{(1)\dagger}
|0_{\mathrm M}\rangle\\
&=\frac{e^{-\pi\omega/a}}
{2\sinh\!\left(\dfrac{\pi\omega}{a}\right)}\delta(0)\\
&=\frac{1}{e^{2\pi\omega/a}-1}\delta(0).
\end{aligned}
\tag{9.163}
$$

这里使用了 $\hat c_k^{(1)\dagger}|0_{\mathrm M}\rangle$ 是归一化单粒子态这一事实：

$$
\langle0_{\mathrm M}|
\hat c_k^{(1)}\hat c_k^{(1)\dagger}
|0_{\mathrm M}\rangle=\delta(0).
\tag{9.164}
$$

> **公式核对说明（9.163）：** 由（9.160）第一式直接展开 $\hat b_k^{(1)\dagger}\hat b_k^{(1)}$，真空期望值中留下的算符应是 $\hat c_{-k}^{(2)}\hat c_{-k}^{(2)\dagger}$；扫描版在（9.163）和随后的（9.164）中写成了 $(1)$。两类 $c$ 模式具有相同归一化，因而最终的 $\delta(0)$ 与 Planck 谱不受影响。作者官方勘误未列出此项。

（9.163）中的 delta 函数只是采用不可平方可积的平面波基模式所产生的假象；若改为构造归一化波包，就会得到具有相同频谱的有限结果。

结果（9.163）是温度

$$
T=\frac{a}{2\pi}
\tag{9.165}
$$

所对应的 Planck 谱。因此，*在 Minkowski 真空中做匀加速运动的观察者会观测到粒子的热谱。* 这就是 **Unruh 效应**。当然，热辐射所包含的信息不止频谱（9.163）；要确认它真正是热的，还应检查观测到的粒子之间是否藏有相关性。人们已经完成这种检验：Rindler 观察者探测到的辐射确实是热辐射。在最基本的层面，Unruh 效应表明两组不同的观察者——惯性观察者与 Rindler 观察者——会用截然不同的方式描述同一个状态；再深入一层，它揭示了量子场论真空本质上的热性质。

温度 $T=a/2\pi$ 是沿 $\xi=0$ 路径运动、感受到加速度 $\alpha=a$ 的观察者所测得的温度。由（9.133）可知，任何沿 $\xi=\text{常数}$ 路径运动的观察者都会感受到加速度

$$
\alpha=ae^{-a\xi},
\tag{9.166}
$$

因而应测得温度为 $\alpha/2\pi$ 的热辐射。这与第 6 章关于沿某个 Killing 向量 $K^\mu$ 的轨道运动的静止观察者所见红移的讨论一致：在那里我们发现，在点 $x_1$ 以频率 $\omega_1$ 发出的辐射，在点 $x_2$ 被观测到的频率为

$$
\omega_2=\frac{V_1}{V_2}\omega_1,
\tag{9.167}
$$

其中红移因子 $V$ 是 Killing 向量的范数。在（9.137）中，我们发现与 $\partial_\eta$ 对应的红移因子为 $V=e^{a\xi}$，所以

$$
\omega_2=e^{a(\xi_1-\xi_2)}\omega_1.
\tag{9.168}
$$

<!-- source: PDF 425; printed: 412 -->

因此，若位于 $\xi_1=0$ 的观察者探测到温度 $T=a/2\pi$，位于 $\xi_2=\xi$ 的观察者会看到它红移成 $T=ae^{-a\xi}/2\pi$，恰如（9.166）。特别地，当 $\xi\to+\infty$ 时，温度一路红移到零。这很合理，因为无穷远处的 Rindler 观察者将近乎惯性运动，并会采用与普通 Minkowski 观察者相同的真空和粒子概念。

Unruh 效应告诉我们，加速观察者会在 Minkowski 真空态中探测到粒子。惯性观察者当然会把同一个状态描述成完全空的；事实上，能量—动量张量的期望值为 $\langle T_{\mu\nu}\rangle=0$。可若没有能量—动量，Rindler 观察者怎样探测到粒子？这是一个微妙问题，但并无矛盾。Rindler 观察者若想探测背景粒子，就必须携带探测器——某种与待探测粒子耦合的装置。可是，要让探测器保持恒定加速度，能量并不守恒：我们必须持续对探测器做功，使它继续加速。从 Minkowski 观察者的视角看，Rindler 探测器在吸收粒子的同时也会*发射*粒子；只要引入耦合，发射的可能性便无法避免。探测器记录到一个粒子时，惯性观察者会说它发射了一个粒子，并由此感受到辐射反作用力。归根结底，激发 Rindler 探测器所需的能量不来自背景能量—动量张量，而来自我们为维持探测器加速而输入的能量。

## 9.6 Hawking 效应与黑洞蒸发

虽然 Unruh 效应发生在平直时空中，它却揭示了弯曲时空量子场论最重要的一课：“真空”和“粒子”依赖于观察者，并不属于基本概念。事实上，在理解 Unruh 效应之后，我们几乎立刻就能看出 Hawking 效应怎样出现。这并不令人意外，因为前面已经指出 Rindler 空间的因果结构与描述永恒黑洞的最大延拓 Schwarzschild 时空十分相似。因此，我们无须在弯曲时空中显式计算，也能论证 Hawking 辐射的存在。当然，若想更细致地研究许多性质，仍需充分使用弯曲度规。除 Birrell 与 Davies（1982）以及 Wald（1994）之外，还有一些优秀综述更完整地讨论了这里涉及的问题。[^9-3] 下文对 Hawking 辐射的推导沿用 Jacobson 的思路。

[^9-3]: T. A. Jacobson, “Introductory Lectures on Black Hole Thermodynamics,” 于乌得勒支大学所作讲座（1996），`http://www.fys.ruu.nl/~wwwthe/lectures/itfuu-0196.ps`；R. M. Wald, “The thermodynamics of black holes,” *Living Rev. Rel.* **4**, 6（2001），`http://arxiv.org/gr-qc/9912119`；J. Traschen, “An introduction to black hole evaporation”（2000），`http://arxiv.org/gr-qc/0010055`。

<!-- source: PDF 426; printed: 413 -->

考虑 Schwarzschild 黑洞外部半径 $r_1>2GM$ 处的静止观察者。这种观察者沿类时 Killing 向量 $K=\partial_t$ 的轨道运动。第 6 章已经证明，Schwarzschild 时空中静止观察者的红移因子 $V=\sqrt{-K_\mu K^\mu}$ 为

$$
V=\sqrt{1-\frac{2GM}{r}},
\tag{9.169}
$$

相应的加速度大小为

$$
a=\frac{GM}{r\sqrt{r-2GM}}.
\tag{9.170}
$$

> **公式核对说明（9.170）：** 上式依扫描版保留。扫描式的量纲与后文 $\kappa=\lim(Va)=1/(4GM)$ 不相容；标准 Schwarzschild 静止观察者的固有加速度为 $a=GM/[r^2\sqrt{1-2GM/r}]=GM/[r^{3/2}\sqrt{r-2GM}]$，与（9.169）相乘后才给出后文极限。作者官方勘误未列出此项。

对于非常靠近事件视界的观察者，$r_1-2GM\ll2GM$，与 Schwarzschild 半径设定的尺度相比，这一加速度变得非常大：

$$
a_1\gg\frac{1}{2GM}.
\tag{9.171}
$$

反过来，Schwarzschild 半径又设定了视界附近时空的曲率半径。因此，在 $a_1^{-1}\ll2GM$ 所设定的长度和时间尺度内观察，时空看起来基本平直。现在作一个关键假设：黑洞附近的自由落体观察者看到某个标量场 $\phi$ 的量子态如同 Minkowski 真空，不含任何粒子。这个假设很合理，因为事件视界不是局域屏障；自由落体观察者穿过视界时看不到任何特殊事情发生。这样一来，静止观察者就像平直时空中的匀加速观察者，会探测到温度为 $T_1=a_1/2\pi$ 的 Unruh 辐射。

现在考虑无穷远处的静止观察者，或者至少位于与 $2GM$ 相比很大的距离 $r_2$ 处。在这种情况下，时间尺度 $a_2^{-1}\gg2GM$ 上的时空曲率无法忽略，所以没有理由预期他们会看到温度为 $a_2/2\pi$ 的辐射，这里的 $a_2$ 在 $r_2$ 处求值。不过，在视界附近观测到的辐射会以相应的红移传播到无穷远。可以用上一节末尾的论证判断这种观察者会看见什么：他们应探测到红移至温度

$$
T_2=\frac{V_1}{V_2}T_1
=\frac{V_1}{V_2}\frac{a}{2\pi}
\tag{9.172}
$$

的热辐射。在无穷远处 $V_2\to1$，所以观测温度为

$$
T=\lim_{r_1\to2GM}\frac{V_1a_1}{2\pi}
=\frac{\kappa}{2\pi},
\tag{9.173}
$$

其中 $\kappa=\lim(Va)$ 是表面引力；对 Schwarzschild 黑洞，$\kappa=1/4GM$。平直时空中的加速观察者所处情形有所不同：在 Schwarzschild 时空中，静止 Killing 向量在无穷远处具有有限范数，视界附近的辐射会红移至有限值，而不会一路降为零。远离黑洞的观察者因此看到黑洞以正比于其表面引力的温度发出热辐射通量。这就是著名的 **Hawking 效应**，这种辐射本身称为 Hawking 辐射。

<!-- source: PDF 427; printed: 414 -->

尽管这套推导非常利落，其中没有任何取巧。特别是，它与加速度的联系清楚说明了温度为何正比于黑洞表面引力；这一结论也适用于更一般的黑洞，并不限于 Schwarzschild 黑洞。不过，我们需要明确此前采用的假设：视界附近的真空态对自由落体观察者而言没有奇异性。用技术术语说，就是假定重整化能量—动量张量在视界处有限；等价地说，两点函数满足 Hadamard 条件（9.123）。

考察最大延拓 Schwarzschild 几何中可能的真空态，可以更清楚地理解这个假设的含义。对于由引力坍缩形成的现实黑洞，这些状态未必都具有物理相关性，但理想情形中出现的各种可能性会给现实世界带来启发。这里只描述这些状态，不作定量刻画，也不推导其性质；更多细节可参见上面的文献。

寻找真空态时，可以先寻找在整个时空中都正则的状态，这里的“正则”取 Hadamard 意义（9.123）。Hartle 与 Hawking 为最大延拓 Schwarzschild 时空找到了这样的状态，故称之为 **Hartle–Hawking 真空**。实际上，它是在每一点都正则、并在代表无穷远时间平移的 Schwarzschild Killing 向量 $\partial_t$ 下不变的唯一真空态。回想图 5.16 所示的 Schwarzschild 共形图，Hartle–Hawking 真空在 $r=2GM$ 的过去与未来事件视界 $H^\pm$ 上正则，在过去与未来类光无穷远 $\mathcal I^\pm$ 上也正则。按照上面对静止观察者的分析，我们应当预期 Hartle–Hawking 真空包含黑洞发出的热辐射；事实的确如此。然而，仔细考察这个状态会发现，还有等量热辐射从过去类光无穷远 $\mathcal I^-$ 流入黑洞；换言之，它表示黑洞与环境达到热平衡。这不适合用来模拟我们宇宙中的现实黑洞。

另一个更接近引力坍缩所形成黑洞的真空态是 **Unruh 真空**。它在 $H^+$ 上非奇异，因而预言向外的 Hawking 辐射，却没有从 $\mathcal I^-$ 入射的辐射。Unruh 真空在 Schwarzschild 时空的过去视界 $H^-$ 上是奇异的；若只把它用作现实黑洞的模型，这不成问题，因为图 5.17 那样具有引力坍缩的时空没有白洞，也没有任何过去视界。最后，还可以寻找这样的真空态：没有粒子进入黑洞，也没有粒子逃向无穷远；换言之，在 $\mathcal I^\pm$ 处通量为零。确实存在这样的状态，称为 **Boulware 真空**。它的存在乍看似乎与我们从 Unruh 效应得到的 Hawking 效应论证冲突，但细致分析表明，Boulware 真空在 $H^-$ 与 $H^+$ 上都有奇异性。因此，

<!-- source: PDF 428; printed: 415 -->

在这一状态中，“视界附近的真空对自由落体观察者而言正则”这一假设遭到了破坏。

所以，仔细考察永恒 Schwarzschild 度规中的真空态所得结论与基于 Unruh 效应的推理一致：在 $H^+$ 上正则的状态会预言具有预期形式的 Hawking 辐射。注意，事件视界的存在对这个论证至关重要；没有这种视界，“状态在视界上正则”的要求便失去约束力。以中子星为例，它的半径可能接近 Schwarzschild 半径，但时空中没有任何视界。中子星不会发出 Hawking 辐射。理解这一点的一种方法是：静态中子星度规拥有处处类时的 Killing 向量，可以用它定义遍布整个时空、并在无穷远处与 Minkowski 模式匹配的正频模式。由此得到的真空态其实类似 Boulware 真空，在 $\mathcal I^\pm$ 处没有通量。完整 Boulware 真空在视界上奇异这一事实不会妨碍中子星情形，因为那里根本没有视界。

要完全确信我们选择了适用于现实黑洞的真空态，应当考虑一个时空中的引力坍缩：该时空在过去近似 Minkowski，在未来变成 Schwarzschild，如图 5.17。若模式真空在 $\mathcal I^-$ 上取标准 Minkowski 形式，就可以询问这些模式如何穿过坍缩几何传播到 $\mathcal I^+$，再像（9.45）那样定义 $S$ 矩阵，从而判断渐近观察者会看到什么。事实上，Hawking 最初发现黑洞辐射时所做的正是这种计算；其中包含一些凌乱的代数，但原则上很直接，所得温度与上面的推导相同。

当然，完整计算能告诉我们的不止黑体温度。比如，可以询问发射辐射的波长与 Schwarzschild 半径相当时会发生什么；在这种情况下，上面的近似显然失效。若仔细研究任意种类的粒子从任意类型黑洞——允许其带电和旋转——发射出来的过程，就会发现发射辐射的频谱具有形式

$$
\langle\hat n_\omega\rangle
=\frac{\Gamma(\omega)}{e^{2\pi(\omega-\mu)/\kappa}\mathbin{\pm}1}.
\tag{9.174}
$$

这里 $\kappa$ 当然是表面引力。参数 $\mu$ 是化学势，刻画黑洞摆脱其守恒量子数的倾向：带电黑洞优先发射与黑洞同号电荷的粒子，旋转黑洞优先发射与黑洞同号角动量的粒子。因此，Hawking 辐射倾向于把黑洞带向 Schwarzschild 状态。$\Gamma(\omega)$ 是灰体因子，可理解为波包受到引力场反向散射并落回黑洞所产生的效应。在高频极限，波长很短，可以忽略反向散射；在很低的频率下，波长变得大于 Schwarzschild 半径，反向散射

<!-- source: PDF 429; printed: 416 -->

便开始变得重要。尽管灰体因子的解析表达式很难推导，但对于标量场，在高、低频两个极限中它满足

$$
\begin{aligned}
\Gamma(\omega)&\longrightarrow1,
&\omega&\gg\frac{1}{GM},\\
\Gamma(\omega)&\longrightarrow\frac{A}{4\pi}\omega^2,
&\omega&\ll\frac{1}{GM},
\end{aligned}
\tag{9.175}
$$

其中 $A$ 是黑洞面积。

从经典广义相对论的视角看，发现黑洞会发射热辐射当然令人惊讶，因为我们曾强调，从事件视界内的点无法逃到无穷远。一种形象的理解方式，是借助 Feynman 图来想象真空涨落：涨落表现为虚粒子—反粒子对不断出现又消失。这个图景也有助于理解 Lamb 位移等观测现象；在该现象中，光子与虚电子—正电子对的相互作用会影响原子光谱。通常，粒子对总会湮灭；它们只能通过对与虚粒子耦合的过程进行重整化，间接产生影响。然而，存在事件视界时，一个虚粒子对中偶尔会有一个成员落入黑洞，伙伴则逃向无穷远，如图 9.2 所示。在这个图景中，我们把逃逸的虚粒子观测为 Hawking 辐射。虚粒子对的总能量必须为零，但从无穷远看，落入的粒子可以具有负能量，因为在视界内部，渐近类时 Killing 向量变成了类空向量。这个图景略显非正式，却为正在发生的过程提供了有用直觉。

**图 9.2　真空涨落偶尔使粒子—反粒子对中的一个成员落入事件视界，另一个成员作为 Hawking 辐射逃向无穷远。** 图以 $t$ 为纵轴、$r$ 为横轴；竖直虚线标出 $r=2GM$ 的事件视界。视界外的一对 $e^-$、$e^+$ 形成闭合虚过程并相互湮灭；另一对在视界附近产生后分离，$e^+$ 穿过视界落向黑洞，$e^-$ 向外逃逸。

知道黑洞温度的公式之后，就能确定黑洞参数与

<!-- source: PDF 430; printed: 417 -->

热力学变量之间关系的比例常数，这些关系列在（6.118）中。Hawking 辐射实质上完成了黑洞力学与热力学的结合：平稳黑洞的行为正像处于热平衡的物体，其能量 $E=M$、温度 $T=\kappa/2\pi$、熵 $S=A/4G$。这个熵确实极大。对宇宙中的物质场，熵近似等于相对论性粒子的数目；在一个 Hubble 半径内，这个数目约为

$$
S_{\mathrm M}\sim10^{88}.
\tag{9.176}
$$

与此同时，黑洞熵是在 Planck 单位下测得的视界面积；请记住，我们始终取 $\hbar=1$。换算成天体物理单位可得

$$
S_{\mathrm{BH}}\sim10^{90}
\left(\frac{M}{10^6M_\odot}\right)^2.
\tag{9.177}
$$

因此，仅一个百万太阳质量的黑洞——我们的银河系以及许多其他星系的中心都能找到这种黑洞——就比可见宇宙中全部物质拥有更多熵。宇宙的总熵远低于它可能达到的数值；只需把更多质量放进黑洞，就能使总熵增加。（宇宙学家说 $S_{\mathrm M}$ 很大时，指的是在一个曲率半径内竟能找到如此多的熵，这一点令人惊讶。）我们处于如此低熵状态的原因大概与初始条件有关，或许还与暴胀有关。

回到黑洞力学，我们遇到一个谜题：宏观黑洞的熵极大，可从统计力学的视角看，熵应当衡量可达状态数目的对数。经典黑洞只由少量参数——质量、电荷和自旋——确定，所以很难看出那些状态究竟是什么。尽管如此，人们也许会认为这种差异并不重要，因为关于黑洞状态的任何信息大概都藏在事件视界后面。

引入量子力学后，谜题更严重了，因为黑洞不仅会辐射，还会蒸发。在开始研究弯曲时空量子场论时，我们设定的一条规则是：假定背景度规固定，不考虑量子场自身能量—动量张量的影响。尽管如此，量子力学中仍有能量守恒；例如，在渐近平直时空中，ADM 质量是守恒的。因此，当 Hawking 辐射逃向无穷远时，可以确信它会把能量从黑洞带走，黑洞的质量必然随之减小。（这个现象不违反面积定理，因为量子场的能量—动量张量在视界附近不满足弱能量条件。）质量减小时，表面引力和温度随之升高；这一失控过程会在有限时间内蒸发掉全部质量。

<!-- source: PDF 431; printed: 418 -->

代入数值，黑洞的寿命量级为

$$
\tau_{\mathrm{BH}}
\sim\left(\frac{M}{m_{\mathrm P}}\right)^3t_{\mathrm P}
\sim\left(\frac{M}{M_\odot}\right)^3\times10^{71}\ \mathrm{sec},
\tag{9.178}
$$

其中 $m_{\mathrm P}\sim10^{-5}\ \mathrm g$ 是 Planck 质量，$t_{\mathrm P}\sim10^{-43}\ \mathrm{sec}$ 是 Planck 时间。由于 Hubble 时间 $H_0^{-1}\sim10^{18}\ \mathrm{sec}$，一个太阳质量黑洞的寿命约为宇宙年龄的 $10^{53}$ 倍。这个时间看似很长，但这里讨论的是原则问题。

现在可以看出，黑洞熵问题为何会变得如此严峻。黑洞一旦蒸发完毕，我们便无法再借事件视界隐藏所谓的黑洞状态。黑洞已经消失，只剩它产生的 Hawking 辐射。这种辐射被认为是严格热的，向外粒子之间没有隐藏相关性；因此，它无法携带熵计算所暗示的、规定那些状态所需的巨量信息。于是，若准备两个差异很大的初态，并让它们坍缩成具有相同质量、电荷和自旋的两个黑洞，最终它们会辐射成两团无法区分的 Hawking 粒子云。系统成为黑洞以前用来规定它的信息看起来被抹去了；这就是 **信息丢失悖论**。量子场论和广义相对论都具有幺正演化：由于早期与晚期状态通过运动方程相连，规定早期状态所需的信息恰好等于规定晚期状态所需的信息。然而，在把量子场论与广义相对论结合的过程中，这种幺正性表面上遭到了破坏。我们的论证中很可能在某处采用了不合适的假设，但很难看出问题在哪里。

表达信息丢失悖论实质的一种方法，是考察图 9.3 所示蒸发黑洞的假想共形图。我们其实不知道完整时空应是什么样子；这里作了看似合理的假设：形成一个奇点以及相关的事件视界，等黑洞完全蒸发时两者一同消失，留下具有 Minkowski 因果结构的时空。用 Cauchy 曲面来思考，问题便显而易见。从类空无穷 $i^0$ 延伸到奇点过去一侧 $r=0$ 上某点的一张非时曲面，其未来依赖域会覆盖整个时空，因而它是一张 Cauchy 曲面。可是，从 $i^0$ 延伸到奇点未来一侧 $r=0$ 上某点的一张类似曲面并非 Cauchy 曲面，因为事件视界后的区域不在其依赖域内。由于信息消失进奇点，便无法由未来反推过去。换言之，这个过程在微观意义上表现为时间不可逆，而不只是统计意义上的不可逆，尽管用来预言它的动力学定律在时间反演下完全不变。

处理信息丢失悖论时，应记住这里对黑洞蒸发的分析只是在一种混合理论中进行：量子

<!-- source: PDF 432; printed: 419 -->

**图 9.3　蒸发黑洞的假想共形图。** Hawking 辐射带走能量，使黑洞最终完全蒸发，留下具有 Minkowski 空间因果结构的未来。越过事件视界并落入奇点的信息看起来丢失了。图中底端为过去类时无穷 $i^-$，右端为类空无穷 $i^0$，顶端为未来类时无穷 $i^+$；斜边分别是过去与未来类光无穷远 $\mathcal I^-$、$\mathcal I^+$。左侧竖线是 $r=0$，波浪线表示奇点；从奇点终点向左下延伸的虚线表示事件视界，向右上的箭头表示辐射逃向 $\mathcal I^+$。

场论与广义相对论耦合起来，并非现实的量子引力理论。现实世界中可能发生什么？一种可能是信息确实丢失、幺正性遭到破坏，我们只得接受这一点。许多物理学家无法接受可预测性发生如此根本的崩塌；还有论证指出，破坏幺正性必然会导致能量守恒也遭到破坏。另一种可能是，我们的世界中幺正性看似遭到破坏，只因进入黑洞的信息以某种方式逃到空间中一个不连通的区域，即“婴儿宇宙”。广义相对论预言黑洞中心存在奇点，没有预言会创造一个不连通区域；不过，我们显然处于量子效应将剧烈改变经典预期的区域，所以应当保持开放态度。

反对信息丢失的一些证据来自弦理论。弦理论自然定义在 10 维或 11 维时空中；其中既有一维延展对象——弦，也有各种统称为“膜”（brane）的高维延展对象。弦理论的一个关键方面是高度的超对称性，它把玻色子与费米子联系起来。在现实世界中，即使超对称性存在，也必定已自发破缺，因为我们没有观测到与电子拥有相同质量和电荷的玻色版本。不过，作为思想实验的工具，超对称性极其珍贵。人们可以组合弦和膜的超对称构型，用来描述不同维数中的黑洞几何。弦理论中有一个控制引力强度以及其他力强度的自由参数——更准确地说是一个标量场——即弦耦合。若考虑在某个弦耦合取值下描述黑洞的构型，那么随着耦合减小，Schwarzschild 半径最终会缩到小于

<!-- source: PDF 433; printed: 420 -->

该构型的尺度，于是构型变成一组弱耦合的弦和膜。由于超对称程度很高，可以确信当弦耦合变化时，状态的各种特征保持不变；特别是，自由度数目以及熵应当不变。可是在弱耦合区域已经没有黑洞，只有一团由通常自由度组成的“气体”；诚然，这些自由度是高维中的延展对象，但我们应当能够可靠计算其熵。

Strominger 与 Vafa 对一种带有不同类型荷的五维超对称黑洞考察了这个过程。[^9-4] 他们发现了一个非凡结果：弱耦合系统的自由度数目，恰好与根据强耦合黑洞熵所预言的数目一致。由于黑洞熵以非平凡方式依赖于构型的荷，这种符合不太可能只是偶然。后续研究把分析推广到其他种类的黑洞，依然不断发现相符的结果。不仅如此，还可以研究弱耦合系统上的散射，计算黑洞应有的灰体因子；所得结果同样符合弦耦合一侧的预期。因此，至少在弦理论中，有充分理由相信黑洞辐射所暗示的自由度确实存在。

遗憾的是，弦理论对状态的计数几乎没有直接说明：有关黑洞状态的信息究竟怎样传进向外的 Hawking 辐射。尽管很难设想这个过程实际如何运作，且其中困难重重，我们仍应认真考虑它确实会发生的可能性。想象某些信息——比如整卷百科全书——在一个大黑洞蒸发完毕很久以前被扔进去，困难便显现出来。此时黑洞温度很低，表面引力很小，事件视界附近的时空曲率也相当小。从百科全书的视角看，视界处没有任何特别之处，我们应当预期它基本不受干扰地落过视界。尤其难以想象，百科全书中的信息如何转移到早期发射的 Hawking 辐射中。在幺正演化中，信息不能被复制；它要么随百科全书越过视界，要么必须在越过视界前一刻被有效提取，后一种情形显得难以置信。我们也许希望，信息随百科全书进入奇点附近的区域，并在那里以某种方式保存到黑洞已经很小的晚期。可到那时，大多数辐射粒子早已发出；最终一阵辐射所能访问的状态数，通常小于描述所有可能落入黑洞的不同状态所需的数目。

[^9-4]: A. Strominger 与 C. Vafa, “Microscopic origin of the Bekenstein-Hawking entropy,” *Phys. Lett. B* **379**, 99（1996），`http://arxiv.org/hep-th/9601029`。综述可参见 Johnson（2003），或 A. W. Peet, “TASI lectures on black holes in string theory”（2001），`http://arxiv.org/hep-th/0008241`。

<!-- source: PDF 434; printed: 421 -->

若要设想信息以某种方式编码在向外的辐射中，那么看来即使在早期，也必须在 Hawking 粒子中编码相关性。我们刚才已经论证，这很难做到，因为黑洞很大时，视界只是一个平平无奇的地方。走出这一困境的一种可能方式，是采取激进步骤，放弃局域量子场论。换言之，我们一直隐含假定信息可以合理地描述成位于空间的某个区域中；这是普通量子场论无可争议的特征。但量子引力或许有所不同，黑洞包含的信息可能以非局域方式横跨视界分布。这个建议本身没有直接给出把信息送入向外 Hawking 辐射的机制，但它确实使我们此前用来说明这一过程为何困难的一些论证受到了质疑。

这种非局域性的一种具体实现称为 **全息原理**。这一思想最早由 ’t Hooft 与 Susskind 提出：某一空间区域中的自由度数目不与该区域的体积成正比——局域场论会作此预期——而与该区域边界的面积成正比。[^9-5] 灵感当然来自黑洞熵，因为它随事件视界面积缩放；如果熵统计可达状态的数目，全息原理就能说明，起作用的是面积，而非被包围的体积。人们可能担心如何处理闭宇宙：某一区域或许几乎包含全部空间，边界却非常小。不过，可以用一组从边界向内延伸的“光片”（light-sheets）取代空间区域，从而构造全息原理的更协变版本。全息思想最伟大的成功是第 8 章提到的 AdS/CFT 对应。在该对应中，反 de Sitter 背景中的量子引力物理，等价于定义在 AdS 边界上的无引力共形场论，而边界少一个维度。可以设想，我们在宇宙中观测到的全部物理现象，都可以由定义在较低维数中的某个普通无引力理论作非局域的全息投影来描述。如何构造这样的对应、怎样把它与观测联系起来，目前远不清楚；不过，对宇宙学和宇宙大尺度结构的思考也许是一个很有希望的起点。

这里关于黑洞熵、弦理论与全息思想的评述，显然并非要对这一非常活跃的研究领域作细致导论。它们旨在指出引力物理前沿正在探索的一些可能性。经典广义相对论是迄今为止人类创造的最美物理理论；我们完全有理由期待，把广义相对论与其他物理领域综合起来，会揭示出我们目前只能想象的更深层之美。

[^9-5]: 综述可参见 R. Bousso, “The Holographic Principle”（2002），`http://arxiv.org/hep-th/0203101`。

<!-- source: PDF 435; printed: 422 -->

<!-- 原书此页为空白。 -->

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 8 章 宇宙学](./08-cosmology.md) · [下一篇：附录 A 流形之间的映射](./appendix-a-maps-between-manifolds.md)
