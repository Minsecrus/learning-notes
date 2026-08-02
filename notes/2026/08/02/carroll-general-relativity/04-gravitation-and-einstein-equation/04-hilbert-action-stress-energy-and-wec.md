# 希尔伯特作用量、能量动量张量与弱能量条件

<!-- CARROLL_NAV_TOP -->
> 完整译文 · 原 PDF 第 104–135 页 · [本章入口](../04-gravitation-and-einstein-equation.md) · [全书入口](../../carroll-general-relativity.md)
<!-- /CARROLL_NAV_TOP -->

## 希尔伯特作用量

为了让你更确信我们推导出的爱因斯坦方程确实是正确的度规场方程，下面换用一种更现代的观点，看看如何从作用量原理出发推导它们。（事实上，最先推导出这些方程的是希尔伯特，他采用的正是作用量原理。但爱因斯坦此前关于这个主题的论文给了他启发，而且爱因斯坦本人也独立推导出了这些方程，所以方程以爱因斯坦命名是恰当的。不过，作用量称为希尔伯特作用量同样名副其实。）作用量应当是拉格朗日密度在时空上的积分（通常简称“拉格朗日量”，尽管严格来说，拉格朗日量是拉格朗日密度在空间上的积分）：

$$
S_H=\int d^nx {\cal L}_H\ .
\tag{4.54}
$$

拉格朗日密度是一个张量密度，可以写成 ${\sqrt{-g}}$ 乘以一个标量。我们能用度规构造出哪些标量？由于已经知道，在任意一点都可以把度规设成其标准形式，并令其一阶导数为零，所以任何非平凡标量都必须至少涉及度规的二阶导数。黎曼张量当然由度规的二阶导数构成；我们先前还论证过，能够从黎曼张量构造出的唯一独立标量是里奇标量 $R$。有一件事我们没有证明、但仍然成立：由度规及其一阶、二阶导数构成的任意非平凡张量，都可以用度规和黎曼张量来表示。因此，由度规构造且所含导数不高于二阶的唯一独立标量，就是里奇标量。希尔伯特由此认为，它是拉格朗日量最简单的可能选择，并提出

$$
{\cal L}_H = {\sqrt{-g}}R\ .
\tag{4.55}
$$

运动方程应当来自作用量对度规的变分。事实上，我们来考虑对逆度规 $g^{\mu\nu}$ 的变分；这在计算上稍微容易一些，得到的方程组却是等价的。利用 $R=g^{\mu\nu}R_{\mu\nu}$，一般有

$$
\begin{aligned}
\delta S &=&  \int d^nx\left[{\sqrt{-g}}g^{\mu\nu}\delta R_{\mu\nu}+ {\sqrt{-g}}R_{\mu\nu}\delta
  g^{\mu\nu}+ R\delta{\sqrt{-g}}\right]\cr
  &=& (\delta S)_1 +(\delta S)_2 +(\delta S)_3 \ .
\end{aligned}
\tag{4.56}
$$

第二项 $(\delta S)_2$ 已经具有“某个表达式乘以 $\delta g^{\mu\nu}$”的形式；下面更仔细地考察另外两项。

## 曲率项的变分

回想一下，里奇张量是黎曼张量的缩并，而黎曼张量为

$$
R^\rho{}_{\mu\lambda\nu} = {\partial}_{\lambda }\Gamma^\lambda_{\nu\mu}
  +\Gamma^\rho_{\lambda\sigma}\Gamma^\sigma_{\nu\mu}
  - (\lambda \leftrightarrow \nu)\ .
\tag{4.57}
$$

为了求它对度规的变分，可以先对联络关于度规作变分，再把结果代入这个表达式。不过，我们先考虑联络的任意变分，作如下替换：

$$
\Gamma^\rho_{\nu\mu}\rightarrow \Gamma^\rho_{\nu\mu}+
  \delta\Gamma^\rho_{\nu\mu}\ .
\tag{4.58}
$$

变分 $\delta\Gamma^\rho_{\nu\mu}$ 是两个联络之差，因而它本身是一个张量。于是我们可以取它的协变导数：

$$
\nabla_\lambda(\delta\Gamma^\rho_{\nu\mu})=
  {\partial}_{\lambda}(\delta\Gamma^\rho_{\nu\mu})
  +\Gamma^\rho_{\lambda\sigma}\delta\Gamma^\sigma_{\nu\mu}
  -\Gamma^\sigma_{\lambda\nu}\delta\Gamma^\rho_{\sigma\mu}
  -\Gamma^\sigma_{\lambda\mu}\delta\Gamma^\rho_{\nu\sigma}\ .
\tag{4.59}
$$

有了这个表达式，再做少量运算，很容易证明

$$
\delta R^\rho{}_{\mu\lambda\nu}=
  \nabla_\lambda(\delta\Gamma^\rho_{\nu\mu})
  -\nabla_\nu(\delta\Gamma^\rho_{\lambda\mu})\ .
\tag{4.60}
$$

你可以亲自检验。因此，(4.56) 第一项对 $\delta S$ 的贡献可以写成

$$
\begin{aligned}
(\delta S)_1 &=&
  \int d^nx {\sqrt{-g}}~g^{\mu\nu}\left[\nabla_\lambda(
  \delta\Gamma^\lambda_{\nu\mu})
  -\nabla_\nu(\delta\Gamma^\lambda_{\lambda\mu})\right]\cr
  &=& \int d^nx {\sqrt{-g}}~ {\nabla_\sigma}\left[g^{\mu\sigma}(\delta
  \Gamma^\lambda_{\lambda\mu}) - g^{{\mu\nu}}(\delta
  \Gamma^\sigma_{\mu\nu})\right]\ ,
\end{aligned}
\tag{4.61}
$$

这里使用了度规适配性，并重新命名了几个哑指标。现在，我们得到的是某个向量的协变散度关于自然体积元的积分；根据斯托克斯定理，它等于无穷远处的一个边界贡献，而我们可以让变分在无穷远处消失，从而把这项设为零。（我们其实还没有证明，前面用微分形式表述的斯托克斯定理可以这样理解，不过你很容易说服自己它确实成立。）因此，这一项对总变分没有贡献。

## 体积因子的变分

为了理解 $(\delta S)_3$ 项，我们需要用到下面这个对任意矩阵 $M$ 都成立的事实：

$$
\mathop{\rm Tr}\nolimits(\ln M) = \ln(\det M)\ .
\tag{4.62}
$$

这里，$\ln M$ 由 $\exp(\ln M)=M$ 定义。（对数而言这一点显而易见，对矩阵则没有那么直接。）对这个恒等式作变分，得到

$$
\mathop{\rm Tr}\nolimits(M^{-1} \delta M) = {1\over{\det M}}\delta(\det M)\ .
\tag{4.63}
$$

这里利用了迹的循环性质，使我们可以忽略 $M^{-1}$ 与 $\delta M$ 可能不对易这一事实。现在把它应用于逆度规，即取 $M = g^{\mu\nu}$。此时 $\det M=g^{-1}$（其中 $g=\det g_{{\mu\nu}}$），并且

$$
\delta(g^{-1})={1\over g}g_{\mu\nu}\delta g^{\mu\nu}\ .
\tag{4.64}
$$

现在直接代入即可：

$$
\begin{aligned}
\delta{\sqrt{-g}}&=&  \delta[(-g^{-1})^{-1/2}]\cr
  &=& -{1\over 2}(-g^{-1})^{-3/2}\delta(-g^{-1})\cr
  &=&  -{1\over 2}{\sqrt{-g}}g_{\mu\nu}\delta g^{\mu\nu}\ .
\end{aligned}
\tag{4.65}
$$

回到 (4.56)，并记住 $(\delta S)_1$ 没有贡献，我们得到

$$
\delta S = \int d^nx {\sqrt{-g}}~\left[R_{{\mu\nu}} -{1\over 2} Rg_{\mu\nu}\right]
  \delta g^{\mu\nu}\ .
\tag{4.66}
$$

它应当对任意变分都为零，因此我们得到真空中的爱因斯坦方程：

$$
{1\over{{\sqrt{-g}}}}{{\delta S}\over{\delta g^{\mu\nu}}}
  =R_{{\mu\nu}} -{1\over 2} Rg_{\mu\nu}=0\ .
\tag{4.67}
$$

## 物质作用量与能量动量张量

这个简单作用量导出的真空场方程，与我们先前通过较为非正式的论证得到的方程相同。这当然会让我们更有信心，相信自己的方向是对的。不过，我们真正希望得到的还包括非真空场方程。这意味着要考虑如下形式的作用量：

$$
S={{1}\over{8\pi G}}S_H+S_M\ ,
\tag{4.68}
$$

其中 $S_M$ 是物质的作用量；我们颇有先见之明地为引力作用量选定了归一化（尽管恰当的归一化在一定程度上依赖约定）。沿用上面的步骤，会得到

$$
{1\over{{\sqrt{-g}}}}{{\delta S}\over{\delta g^{\mu\nu}}}
  ={{1}\over{8\pi G}}\left(R_{{\mu\nu}} -{1\over 2} Rg_{\mu\nu}\right)
  +{1\over{{\sqrt{-g}}}} {{\delta S_M}\over{\delta g^{\mu\nu}}}=0\ ,
\tag{4.69}
$$

如果能够作如下认定，我们就恢复了爱因斯坦方程：

$$
T_{\mu\nu}= -{1\over{{\sqrt{-g}}}}{{\delta S_M}\over{\delta g^{\mu\nu}}}\ .
\tag{4.70}
$$

我们凭什么认为可以这样认定？事实上，(4.70) 最终会成为定义对称能量—动量张量的最佳方式。棘手之处在于证明它是守恒的；它其实自动守恒，但我们要到下一节才会说明原因。

我们说 (4.70) 给出了能量—动量张量的“最佳”定义，是因为你还会见到其他定义。在平直的闵可夫斯基空间中，有一种替代定义，有时会出现在电磁学或场论教材里。在这种语境下，能量—动量守恒来自拉格朗日量在时空平移下的对称性。*诺特定理*断言，拉格朗日量的每一种对称性都意味着一条守恒定律存在；在四种时空平移下保持不变，会导出一个满足 ${\partial}_{\mu }S^{\mu\nu}=0$ 的张量 $S^{\mu\nu}$（共四个关系，对应于 $\nu$ 的每一个取值）。具体细节可参见 Wald 的书或许多场论教材中的任意一本。把诺特的步骤应用于一个依赖某些场 $\psi^i$ 及其一阶导数 ${\partial}_{\mu}\psi^i$ 的拉格朗日量，可以得到

$$
S^{\mu\nu}={{\delta{\cal L}}\over{\delta({\partial}_{\mu}\psi^i)}}\partial^\nu\psi^i
  -\eta^{\mu\nu}{\cal L}\ ,
\tag{4.71}
$$

这里默认对 $i$ 求和。你可以利用物质场的运动方程，验证这个张量确实守恒。$S^{\mu\nu}$ 常被称为“正则能量—动量张量”；不过，对我们来说使用 (4.70) 更方便，理由有好几个。最重要的是，从作用量推导爱因斯坦方程时，真正出现在方程右边的就是 (4.70)，而且 (4.71) 并不总能推广到弯曲时空。即使在平直空间中，(4.70) 也有自己的优点：它显然是对称的，而且保证具有规范不变性；(4.71) 则不具备这两项保证。因此，我们将坚持以 (4.70) 作为能量—动量张量的定义。

## 弱能量条件

有时，在不指定导出 $T_{\mu\nu}$ 的物质理论时思考爱因斯坦方程会很有用。这会留下非常大的任意性。例如，考虑“哪些度规满足爱因斯坦方程？”这个问题。如果不给 $T_{\mu\nu}$ 施加某些约束，答案就是“任何度规都可以”：随意选取一个度规，计算它的爱因斯坦张量 $G_{\mu\nu}$，然后要求 $T_{\mu\nu}$ 等于 $G_{\mu\nu}$ 即可。（根据比安基恒等式，它会自动守恒。）我们真正关心的是，当存在“现实的”能量和动量源时，爱因斯坦方程是否有解——至于“现实”究竟是什么意思，还需另说。对 $T_{\mu\nu}$ 最常提出的性质要求，是它表示正的能量密度——不允许负质量。在局部惯性系中，这个要求可以表述为 $\rho = T_{00} \geq 0$。为了把它改写成与坐标无关的陈述，我们要求

$$
T_{\mu\nu}V^\mu V^\nu \geq 0\ ,\qquad{\rm ~for~all~timelike~vectors~}
  V^\mu\ .
\tag{4.72}
$$

这称为**弱能量条件**（Weak Energy Condition，WEC）。它看起来是一项颇为合理的要求；许多关于广义相对论解的重要定理（例如霍金和彭罗斯的奇点定理）都依赖这个条件或与它非常接近的条件。遗憾的是，它并非不可动摇。事实上，构造一个违反 WEC、但在其他方面完全正当的经典场论并不困难；要构造一个遵守 WEC 的量子场论却几乎不可能。尽管如此，假定除最极端情形外 WEC 都成立，仍是合理的。（还有一些更强的能量条件，但它们比 WEC 更难成立，我们就不深入讨论了。）

<!-- CARROLL_NAV_BOTTOM -->
---
[← 弯曲时空中的物理与爱因斯坦方程](./03-physics-in-curved-spacetime-and-einstein-equations.md) · [全书入口](../../carroll-general-relativity.md) · [引力的替代理论 →](./05-alternative-theories-of-gravity.md)
<!-- /CARROLL_NAV_BOTTOM -->
