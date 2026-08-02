# 第 3 章 曲率

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 2 章 流形](./02-manifolds.md) · [下一篇：第 4 章 引力](./04-gravitation.md)

<!-- source: PDF 106; printed: 93 -->

## 3.1 概览

我们都知道曲率是什么意思，至少在非正式意义上是这样。在本书前两章里，我们偶尔也会随意提到曲率这个概念，却没有为它给出严谨定义。曲率显然以某种方式依赖于度规，因为度规定义了流形的几何；但要怎样把曲率归于某个给定的度规，却并非一望即知（正如我们已经看到的，即使是平直空间的度规，只要选用足够花哨的坐标系，也可以显得任意复杂）。数学中常常如此：要把我们对某个概念的直觉形式化为可用的数学结构，需要格外谨慎；本章的主题，正是把我们所理解的“曲率”形式化。

我们即将发展的方法对这门学科至关重要；可以肯定地说，本章每页中有用公式的密度高于其他任何一章。先来迅速概括其中最重要的几个公式，为后面的形式体系提供一幅路线图。

曲率显现自身的各种方式都依赖于一种叫作“联络”的东西，它使我们能够把相邻点切空间中的向量彼此联系起来。由度规可以构造出唯一的联络；这一联络包含在一个叫作 **Christoffel 符号**的对象中：

$$
\Gamma^\lambda{}_{\mu\nu}
=\frac12 g^{\lambda\sigma}
\left(\partial_\mu g_{\nu\sigma}
+\partial_\nu g_{\sigma\mu}
-\partial_\sigma g_{\mu\nu}\right).
\tag{3.1}
$$

这种记号让 $\Gamma^\lambda{}_{\mu\nu}$ 看起来像张量，但实际上它并不是张量；所以我们称它为“对象”或“符号”。联络最基本的用途是取**协变导数** $\nabla_\mu$（它是偏导数的推广）；向量场 $V^\nu$ 的协变导数为

$$
\nabla_\mu V^\nu
=\partial_\mu V^\nu
+\Gamma^\nu{}_{\mu\sigma}V^\sigma,
\tag{3.2}
$$

其他种类张量的协变导数也由类似表达式给出。联络还出现在**测地线**定义中；测地线是直线概念的推广。如果参数化曲线 $x^\mu(\lambda)$ 满足

$$
\frac{\mathrm d^2x^\mu}{\mathrm d\lambda^2}
+\Gamma^\mu{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\lambda}
\frac{\mathrm dx^\sigma}{\mathrm d\lambda}
=0,
\tag{3.3}
$$

它就是一条测地线；上式称为**测地线方程**。

<!-- source: PDF 107; printed: 94 -->

最后，曲率在技术上的表达蕴含于 Riemann 张量之中。它是由联络得到的一个 $(1,3)$ 型张量：

$$
R^\rho{}_{\sigma\mu\nu}
=\partial_\mu\Gamma^\rho{}_{\nu\sigma}
-\partial_\nu\Gamma^\rho{}_{\mu\sigma}
+\Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma}
-\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma}.
\tag{3.4}
$$

我们想知道的流形曲率的全部信息，都由 Riemann 张量给出；当且仅当度规完全平直时，它才处处为零。广义相对论的 Einstein 方程把这个张量的某些分量与能量—动量张量联系起来。

研究弯曲流形时，这四个方程都极为重要。现在我们要仔细考察：平直空间中那些熟悉的几何概念，在适应更一般的情形时，怎样产生了这些方程。

## 3.2 协变导数

在讨论流形时我们已经看清，有些概念只要流形一经定义便可以谈论：可以定义函数、求函数的导数、考察参数化路径、建立张量，等等。另一些概念，例如区域的体积或路径的长度，则需要再增加一份结构，也就是引入度规。于是很自然会认为，曲率这个概念只依赖于度规。然而，经过更仔细的处理会发现，曲率依赖于联络，而联络可以依赖度规，也可以不依赖度规。尽管如此，我们还将说明：度规的存在会蕴含某个唯一的联络，这一联络的曲率可以看作度规的曲率。广义相对论使用的正是这个联络，因此在这一特定语境中，把曲率理解为度规的特征、而不再引入额外结构，是完全合理的。

当我们着手解决偏导数不能充当良好张量算子的问题时，联络就成为必需。我们希望拥有一种**协变导数**：在带惯性坐标的平直空间中，它归结为偏导数；在任意流形上，它又按张量方式变换。通常，人们会花一定篇幅来说明为什么要引入协变导数；其实这种需要显而易见——诸如 $\partial_\mu T^{\mu\nu}=0$ 的方程总得以某种方式推广到弯曲空间。因此，我们就接受“拥有协变导数会很有用”这件事，然后着手建立它。

在带惯性坐标的平直空间中，偏导算子 $\partial_\mu$ 把 $(k,l)$ 型张量场映射为 $(k,l+1)$ 型张量场；它对自变量线性作用，并对张量积满足 Leibniz 法则。在现在要考察的更一般情形中，这些性质仍然成立，但偏导数所给出的映射依赖于所用坐标系。因此，我们希望定义一个协变导数算子 $\nabla$，让它以不依赖坐标的方式承担偏导数的工作。直接假定答案当然完全可以，不过我们还是要仔细想一想：偏导数的协变推广应当具有什么性质，以此说明它的来由——说到底，数学结构是人发明出来的，可不是在人行道上捡到的。

<!-- source: PDF 108; printed: 95 -->

首先要求 $\nabla$ 是从 $(k,l)$ 型张量场到 $(k,l+1)$ 型张量场的映射，并具有以下两个性质：

1. **线性性**：$\nabla(T+S)=\nabla T+\nabla S$；
2. **Leibniz（乘积）法则**：$\nabla(T\otimes S)=(\nabla T)\otimes S+T\otimes(\nabla S)$。

只要 $\nabla$ 满足 Leibniz 法则，它总能写成偏导数加上某个线性变换。也就是说，取协变导数时，我们先取偏导数，再施加一项修正，使结果具有协变性。［我们不会证明这个听起来很合理的陈述；有兴趣的读者可参见 Wald（1984）。］来看看这对于向量 $V^\nu$ 的协变导数意味着什么。对每个方向 $\mu$，协变导数 $\nabla_\mu$ 都由偏导数 $\partial_\mu$ 加上一项修正给出；该修正由 $n$ 个矩阵 $(\Gamma_\mu)^\nu{}_\sigma$ 指定（流形维数为 $n$，每个 $\mu$ 对应一个 $n\times n$ 矩阵）。实际书写时通常去掉圆括号，把这些称为**联络系数**的矩阵写成指标位置看起来有些随意的 $\Gamma^\nu{}_{\mu\sigma}$。于是

$$
\boxed{\nabla_\mu V^\nu
=\partial_\mu V^\nu
+\Gamma^\nu{}_{\mu\lambda}V^\lambda.}
\tag{3.5}
$$

请注意，在第二项中，原本属于 $V$ 的指标移到了 $\Gamma$ 上，同时引入了一个新的求和指标。如果这就是用偏导数表示向量协变导数的方式，那么要求左边是一个 $(1,1)$ 型张量，应当就能确定 $\Gamma^\nu{}_{\mu\lambda}$ 的变换性质。换言之，我们要求变换律为

$$
\nabla_{\mu'}V^{\nu'}
=\frac{\partial x^\mu}{\partial x^{\mu'}}
\frac{\partial x^{\nu'}}{\partial x^\nu}
\nabla_\mu V^\nu.
\tag{3.6}
$$

先看左边。利用式（3.5）将它展开，再对我们已经理解的各部分作变换（唯一例外是 $\Gamma^{\nu'}{}_{\mu'\lambda'}$），得到

$$
\begin{aligned}
\nabla_{\mu'}V^{\nu'}
&=\partial_{\mu'}V^{\nu'}
+\Gamma^{\nu'}{}_{\mu'\lambda'}V^{\lambda'}\\
&=\frac{\partial x^\mu}{\partial x^{\mu'}}
  \frac{\partial x^{\nu'}}{\partial x^\nu}
  \partial_\mu V^\nu
+\frac{\partial x^\mu}{\partial x^{\mu'}}V^\nu
  \frac{\partial}{\partial x^\mu}
  \frac{\partial x^{\nu'}}{\partial x^\nu}
+\Gamma^{\nu'}{}_{\mu'\lambda'}
  \frac{\partial x^{\lambda'}}{\partial x^\lambda}V^\lambda.
\end{aligned}
\tag{3.7}
$$

右边的 $\nabla_\mu V^\nu$ 也可以展开：

$$
\frac{\partial x^\mu}{\partial x^{\mu'}}
\frac{\partial x^{\nu'}}{\partial x^\nu}
\nabla_\mu V^\nu
=\frac{\partial x^\mu}{\partial x^{\mu'}}
 \frac{\partial x^{\nu'}}{\partial x^\nu}
 \partial_\mu V^\nu
+\frac{\partial x^\mu}{\partial x^{\mu'}}
 \frac{\partial x^{\nu'}}{\partial x^\nu}
 \Gamma^\nu{}_{\mu\lambda}V^\lambda.
\tag{3.8}
$$

<!-- source: PDF 109; printed: 96 -->

要令最后两个表达式相等；二者的第一项完全相同，因而相消，于是

$$
\Gamma^{\nu'}{}_{\mu'\lambda'}
\frac{\partial x^{\lambda'}}{\partial x^\lambda}V^\lambda
+\frac{\partial x^\mu}{\partial x^{\mu'}}V^\lambda
\frac{\partial}{\partial x^\mu}
\frac{\partial x^{\nu'}}{\partial x^\lambda}
=\frac{\partial x^\mu}{\partial x^{\mu'}}
 \frac{\partial x^{\nu'}}{\partial x^\nu}
 \Gamma^\nu{}_{\mu\lambda}V^\lambda,
\tag{3.9}
$$

这里我们把一个哑指标从 $\nu$ 改记为 $\lambda$。这个方程必须对任意向量 $V^\lambda$ 成立，因此可以从等式两边消去它。再乘以 $\partial x^\lambda/\partial x^{\lambda'}$，把加撇坐标中的联络系数单独留下，并把 $\sigma'\to\lambda'$ 重新标记，结果为

$$
\Gamma^{\nu'}{}_{\mu'\lambda'}
=\frac{\partial x^\mu}{\partial x^{\mu'}}
 \frac{\partial x^\lambda}{\partial x^{\lambda'}}
 \frac{\partial x^{\nu'}}{\partial x^\nu}
 \Gamma^\nu{}_{\mu\lambda}
-\frac{\partial x^\mu}{\partial x^{\mu'}}
 \frac{\partial x^\lambda}{\partial x^{\lambda'}}
 \frac{\partial^2x^{\nu'}}{\partial x^\mu\partial x^\lambda}.
\tag{3.10}
$$

这当然不是张量变换律；右边的第二项破坏了它。这没有问题，因为**联络系数不是张量的分量**。它们被有意构造成非张量对象，但构造方式恰好使组合（3.5）按张量变换——偏导数变换中多出来的项与 $\Gamma$ 变换中多出来的项正好相消。因此，我们并不特别讲究联络系数的指标位置；它们不是张量，所以也不应尝试升降它们的指标。

其他种类张量的协变导数又该怎样处理？采用与向量情形相似的推理，一形式的协变导数也可以表示为偏导数加上某个线性变换。然而到目前为止，没有理由认为表示这一变换的矩阵与系数 $\Gamma^\nu{}_{\mu\lambda}$ 有关。一般说来，可以写成

$$
\nabla_\mu\omega_\nu
=\partial_\mu\omega_\nu
+\widetilde{\Gamma}^\lambda{}_{\mu\nu}\omega_\lambda,
\tag{3.11}
$$

其中，对每个 $\mu$，$\widetilde{\Gamma}^\lambda{}_{\mu\nu}$ 都是一组新的矩阵。请留意各个指标所在的位置。要使 $\nabla_\mu\omega_\nu$ 按张量变换，很容易推出 $\widetilde{\Gamma}$ 的变换性质与 $\Gamma$ 相应的变换性质密切相关；但除此以外，我们还没有建立二者的关系。

> **勘误（原书第 96 页）**　作者澄清：严格说来，不能说带波浪号的联络系数与原 $\Gamma$ 具有完全相同的变换性质；在式（3.10）的对应式中，非齐次项前应为加号，而非减号。这里的译文已按这一勘误避免原书中不精确的说法。

为了建立二者的关系，除了前述两条性质，还需给协变导数增加两项要求：

3. **与缩并可交换**：$\nabla_\mu(T^\lambda{}_{\lambda\rho})=(\nabla T)_\mu{}^\lambda{}_{\lambda\rho}$；
4. **作用于标量时归结为偏导数**：$\nabla_\mu\phi=\partial_\mu\phi$。

这些性质无法“推导”出来；我们只是要求它们作为协变导数定义的一部分而成立。请注意，性质 3 等价于说 Kronecker delta（恒等映射）协变常量，即 $\nabla_\mu\delta^\lambda{}_\sigma=0$；这当然是一个合理要求。

来看看这些新性质蕴含什么。给定一形式场 $\omega_\mu$ 和向量场 $V^\mu$，可以对 $\omega_\lambda V^\lambda$ 所定义的标量取协变导数，得到下一页的结果。

<!-- source: PDF 110; printed: 97 -->

由 Leibniz 法则，

$$
\begin{aligned}
\nabla_\mu(\omega_\lambda V^\lambda)
&=(\nabla_\mu\omega_\lambda)V^\lambda
+\omega_\lambda(\nabla_\mu V^\lambda)\\
&=(\partial_\mu\omega_\lambda)V^\lambda
+\widetilde{\Gamma}^{\sigma}{}_{\mu\lambda}\omega_\sigma V^\lambda
+\omega_\lambda(\partial_\mu V^\lambda)
+\omega_\lambda\Gamma^\lambda{}_{\mu\rho}V^\rho.
\end{aligned}
\tag{3.12}
$$

但 $\omega_\lambda V^\lambda$ 是标量，因此它也必须由偏导数给出：

$$
\begin{aligned}
\nabla_\mu(\omega_\lambda V^\lambda)
&=\partial_\mu(\omega_\lambda V^\lambda)\\
&=(\partial_\mu\omega_\lambda)V^\lambda
+\omega_\lambda(\partial_\mu V^\lambda).
\end{aligned}
\tag{3.13}
$$

只有当式（3.12）中含联络系数的项彼此抵消时，两式才可能相等。重新安排哑指标，必须有

$$
0=\widetilde{\Gamma}^{\sigma}{}_{\mu\lambda}
\omega_\sigma V^\lambda
+\Gamma^\sigma{}_{\mu\lambda}
\omega_\sigma V^\lambda.
\tag{3.14}
$$

由于 $\omega_\sigma$ 与 $V^\lambda$ 都完全任意，故

$$
\widetilde{\Gamma}^{\sigma}{}_{\mu\lambda}
=-\Gamma^\sigma{}_{\mu\lambda}.
\tag{3.15}
$$

因此，我们增加的两个条件允许使用与向量相同的联络系数来表示一形式的协变导数，只是现在要带一个负号（各指标的配对方式也稍有不同）：

$$
\boxed{\nabla_\mu\omega_\nu
=\partial_\mu\omega_\nu
-\Gamma^\lambda{}_{\mu\nu}\omega_\lambda.}
\tag{3.16}
$$

联络系数编码了对任意秩张量取协变导数所需的全部信息，这一点不应令人意外。公式十分直接：每遇到一个上指标，就引入一个带单个 $+\Gamma$ 的项；每遇到一个下指标，就引入一个带单个 $-\Gamma$ 的项：

$$
\begin{aligned}
\nabla_\sigma
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
={}&\partial_\sigma
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}\\
&+\Gamma^{\mu_1}{}_{\sigma\lambda}
T^{\lambda\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
+\Gamma^{\mu_2}{}_{\sigma\lambda}
T^{\mu_1\lambda\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
+\cdots\\
&-\Gamma^\lambda{}_{\sigma\nu_1}
T^{\mu_1\mu_2\cdots\mu_k}{}_{\lambda\nu_2\cdots\nu_l}
-\Gamma^\lambda{}_{\sigma\nu_2}
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\lambda\cdots\nu_l}
-\cdots .
\end{aligned}
\tag{3.17}
$$

这就是协变导数的一般表达式。你可以亲自检验：它来自我们建立的这组公理，以及各类张量都应当是与坐标无关的实体这一通常要求。有时也会使用另一种记号；正如逗号表示偏导数，分号表示协变导数：

$$
\nabla_\sigma
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
\equiv
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l;\sigma}.
\tag{3.18}
$$

本书仍将坚持使用 $\nabla_\sigma$ 记号。

<!-- source: PDF 111; printed: 98 -->

所以，要定义协变导数，就需要在流形上赋予一个联络。在某一坐标系中，联络由一组按式（3.10）变换的系数 $\Gamma^\lambda{}_{\mu\nu}$ 指定（$n$ 维流形上有 $n^3$ 个分量；当 $n=4$ 时是 64 个独立分量）。**联络**这个名称源于它被用来把向量从一个切空间传送到另一个切空间，这一点很快就会看到；这个词有时指算子 $\nabla$，有时指系数 $\Gamma^\lambda{}_{\mu\nu}$。显然，可以在任意流形上定义大量联络，每一个都蕴含一种不同的协变求导概念。在广义相对论中，这种自由度不构成大问题，因为事实证明，每个度规都会定义一个唯一的联络，而 GR 使用的正是它。下面来看其原理。

首先要注意，两个联络之差是张量。设我们定义了两种不同的协变导数 $\nabla_\mu$ 和 $\widehat{\nabla}_\mu$，其联络系数分别为 $\Gamma^\lambda{}_{\mu\nu}$ 与 $\widehat{\Gamma}^\lambda{}_{\mu\nu}$。那么差

$$
S^\lambda{}_{\mu\nu}
=\Gamma^\lambda{}_{\mu\nu}
-\widehat{\Gamma}^\lambda{}_{\mu\nu}
\tag{3.19}
$$

是一个 $(1,2)$ 型张量。（请注意，我们必须为指标位置选定一种约定。）可以把联络系数的变换律代进去，用蛮力证明这一点；不过我们来用一个更巧妙的办法。给定任意向量场 $V^\lambda$，$\nabla_\mu V^\lambda$ 和 $\widehat{\nabla}_\mu V^\lambda$ 都是张量，因此它们之差也一定是张量。这个差就是

$$
\begin{aligned}
\nabla_\mu V^\lambda-\widehat{\nabla}_\mu V^\lambda
&=\partial_\mu V^\lambda
+\Gamma^\lambda{}_{\mu\nu}V^\nu
-\partial_\mu V^\lambda
-\widehat{\Gamma}^\lambda{}_{\mu\nu}V^\nu\\
&=S^\lambda{}_{\mu\nu}V^\nu.
\end{aligned}
\tag{3.20}
$$

> **勘误（原书第 99 页）**　式（3.20）第二项和第四项中 $V$ 的指标，原扫描印成 $\lambda$；作者勘误要求改为 $\nu$。上式已按勘误修正。

由于 $V^\lambda$ 任意，而左边是张量，$S^\lambda{}_{\mu\nu}$ 必定是张量。于是立即得到一个简单结论：任意一组联络系数都可以写成某个基准联络加上一项张量修正，

$$
\Gamma^\lambda{}_{\mu\nu}
=\widehat{\Gamma}^\lambda{}_{\mu\nu}
+S^\lambda{}_{\mu\nu}.
\tag{3.21}
$$

接着注意：给定由 $\Gamma^\lambda{}_{\mu\nu}$ 指定的联络，只需交换两个下指标，立刻就能形成另一个联络。也就是说，系数集 $\Gamma^\lambda{}_{\nu\mu}$ 同样按照式（3.10）变换（因为最后一项中的偏导数可以交换次序），所以它们确定了一个不同的联络。因此，任意给定联络都伴随一个称为**挠率张量**的张量，定义为

$$
T^\lambda{}_{\mu\nu}
=\Gamma^\lambda{}_{\mu\nu}
-\Gamma^\lambda{}_{\nu\mu}
=2\Gamma^\lambda{}_{[\mu\nu]}.
\tag{3.22}
$$

挠率显然对其两个下指标反对称；若一个联络对其两个下指标对称，就称它“无挠”。

现在可以在带度规 $g_{\mu\nu}$ 的流形上定义唯一联络，只需再引入两个性质。

<!-- source: PDF 112; printed: 99 -->

- **无挠**：$\Gamma^\lambda{}_{\mu\nu}=\Gamma^\lambda{}_{(\mu\nu)}$；
- **度规相容**：$\nabla_\rho g_{\mu\nu}=0$。

如果度规关于某个联络的协变导数处处为零，就说该联络**与度规相容**。这会带来几个很好的性质。第一，很容易证明 Levi-Civita 张量与逆度规的协变导数也都为零：

$$
\begin{gathered}
\nabla_\lambda\epsilon_{\mu\nu\rho\sigma}=0,\\
\nabla_\rho g^{\mu\nu}=0.
\end{gathered}
\tag{3.23}
$$

第二，与度规相容的协变导数可与指标的升降交换。于是，对某个向量场 $V^\lambda$，

$$
g_{\mu\lambda}\nabla_\rho V^\lambda
=\nabla_\rho(g_{\mu\lambda}V^\lambda)
=\nabla_\rho V_\mu.
\tag{3.24}
$$

若联络与度规不相容，取协变导数时就必须对指标位置格外谨慎。

我们的主张因而是：在一个给定流形上，对于该流形上的某个给定度规，恰好存在一个既无挠又与这个度规相容的联络。我们不打算把这两项要求纳入协变导数的定义；它们只是从许多可能的协变导数中挑出一个。

可以用度规推导出联络系数的一个显然唯一的表达式，从而同时证明其存在性与唯一性。为此，把度规相容方程按三种不同的指标排列展开：

$$
\begin{aligned}
\nabla_\rho g_{\mu\nu}
&=\partial_\rho g_{\mu\nu}
-\Gamma^\lambda{}_{\rho\mu}g_{\lambda\nu}
-\Gamma^\lambda{}_{\rho\nu}g_{\mu\lambda}=0,\\
\nabla_\mu g_{\nu\rho}
&=\partial_\mu g_{\nu\rho}
-\Gamma^\lambda{}_{\mu\nu}g_{\lambda\rho}
-\Gamma^\lambda{}_{\mu\rho}g_{\nu\lambda}=0,\\
\nabla_\nu g_{\rho\mu}
&=\partial_\nu g_{\rho\mu}
-\Gamma^\lambda{}_{\nu\rho}g_{\lambda\mu}
-\Gamma^\lambda{}_{\nu\mu}g_{\rho\lambda}=0.
\end{aligned}
\tag{3.25}
$$

从第一个方程减去第二、第三个方程，再利用联络的对称性，得到

$$
\partial_\rho g_{\mu\nu}
-\partial_\mu g_{\nu\rho}
-\partial_\nu g_{\rho\mu}
+2\Gamma^\lambda{}_{\mu\nu}g_{\lambda\rho}=0.
\tag{3.26}
$$

乘以 $g^{\sigma\rho}$，很容易解出联络，结果为

$$
\boxed{
\Gamma^\sigma{}_{\mu\nu}
=\frac12 g^{\sigma\rho}
\left(\partial_\mu g_{\nu\rho}
+\partial_\nu g_{\rho\mu}
-\partial_\rho g_{\mu\nu}\right).}
\tag{3.27}
$$

这是本学科中最重要的公式之一；请把它记住。当然，我们目前只证明了：如果一个度规相容且无挠的联络存在，它就必定具有式（3.27）的形式。你可以自行检验，式（3.27）的右边确实像联络一样变换。

<!-- source: PDF 113; printed: 100 -->

我们从度规推导出的这个联络，是通常的广义相对论所依赖的联络。它有不同名称：有时叫 **Christoffel 联络**，有时叫 **Levi-Civita 联络**，有时叫 **Riemann 联络**。相应的联络系数有时称为 **Christoffel 符号**，并写作 $\left\{\begin{smallmatrix}\sigma\\\mu\nu\end{smallmatrix}\right\}$；我们有时也会称它们为 Christoffel 符号，但不会采用这个古怪记号。研究带度规及其相应联络的流形，称为 Riemann 几何；当度规具有 Lorentz 号差时，有时也称伪 Riemann 几何。

在正式使用协变导数之前，还应提到一些零散性质。首先请注意，在普通平直空间中，我们一直隐含地使用一个联络——由平直度规构造的 Christoffel 联络。平直空间中，Christoffel 联络的系数在 Cartesian 坐标中为零，但在曲线坐标系中并不为零。例如，考察极坐标中的平面，其度规为

$$
\mathrm ds^2=\mathrm dr^2+r^2\mathrm d\theta^2.
\tag{3.28}
$$

很容易求得逆度规的非零分量为 $g^{rr}=1$ 和 $g^{\theta\theta}=r^{-2}$。请注意，在一种含义很清楚的记号中，我们把 $r$ 和 $\theta$ 用作指标。来计算一个典型的联络系数：

$$
\begin{aligned}
\Gamma^r{}_{rr}
&=\frac12g^{r\rho}
 (\partial_r g_{r\rho}+\partial_r g_{\rho r}-\partial_\rho g_{rr})\\
&=\frac12g^{rr}
 (\partial_r g_{rr}+\partial_r g_{rr}-\partial_r g_{rr})
+\frac12g^{r\theta}
 (\partial_r g_{r\theta}+\partial_r g_{\theta r}-\partial_\theta g_{rr})\\
&=\frac12(1)(0+0-0)+\frac12(0)(0+0-0)\\
&=0.
\end{aligned}
\tag{3.29}
$$

很遗憾，它为零。但并非所有分量都为零：

$$
\begin{aligned}
\Gamma^r{}_{\theta\theta}
&=\frac12g^{r\rho}
 (\partial_\theta g_{\theta\rho}+\partial_\theta g_{\rho\theta}-\partial_\rho g_{\theta\theta})\\
&=\frac12g^{rr}
 (\partial_\theta g_{\theta r}+\partial_\theta g_{r\theta}-\partial_r g_{\theta\theta})\\
&=\frac12(1)(0+0-2r)\\
&=-r.
\end{aligned}
\tag{3.30}
$$

继续机械计算，最终得到

$$
\begin{gathered}
\Gamma^r{}_{\theta r}=\Gamma^r{}_{r\theta}=0,\\
\Gamma^\theta{}_{rr}=0,\\
\Gamma^\theta{}_{r\theta}=\Gamma^\theta{}_{\theta r}=\frac1r,\\
\Gamma^\theta{}_{\theta\theta}=0.
\end{gathered}
\tag{3.31}
$$

<!-- source: PDF 114; printed: 101 -->

利用这些以及类似的表达式，可以推导出曲线坐标系中散度、梯度和旋度的公式。

反过来，即使在弯曲空间中，仍能让 Christoffel 符号在任意一个指定点处消失。原因是，正如上一章所论证的，我们总能让度规的一阶导数在一点处消失；根据式（3.27），由该度规导出的联络系数也会在该点消失。当然，这只能在一个点上做到，无法在该点的某个邻域中都做到。我们将在第 3.4 节对此作更完整的讨论。

另一个有用性质是：向量关于 Christoffel 联络的散度公式具有简化形式。$V^\mu$ 的协变散度为

$$
\nabla_\mu V^\mu
=\partial_\mu V^\mu
+\Gamma^\mu{}_{\mu\lambda}V^\lambda.
\tag{3.32}
$$

很容易证明 Christoffel 联络满足

$$
\Gamma^\mu{}_{\mu\lambda}
=\frac1{\sqrt{|g|}}\partial_\lambda\sqrt{|g|},
\tag{3.33}
$$

所以得到

$$
\nabla_\mu V^\mu
=\frac1{\sqrt{|g|}}
\partial_\mu\!\left(\sqrt{|g|}V^\mu\right).
\tag{3.34}
$$

高阶张量的散度也有相应公式，但通常不会带来这么显著的简化。

弯曲空间版本的 Stokes 定理使用 Christoffel 协变导数（见附录 E）。若 $V^\mu$ 是区域 $\Sigma$ 上的向量场，而 $\Sigma$ 的边界是 $\partial\Sigma$，则 Stokes 定理为

$$
\boxed{
\int_\Sigma \nabla_\mu V^\mu\sqrt{|g|}\,\mathrm d^n x
=\int_{\partial\Sigma}n_\mu V^\mu\sqrt{|\gamma|}\,
\mathrm d^{n-1}x,}
\tag{3.35}
$$

其中 $n_\mu$ 是 $\partial\Sigma$ 的法向量，$\gamma_{ij}$ 是 $\partial\Sigma$ 上的诱导度规。如果联络不与度规相容或带有挠率，这个方程中就会出现额外项。

最后还需指出：为了构造定义良好的张量，并非总要把偏导数换成协变导数。尤其是，外微分和向量场交换子都能用偏导数得到良好定义；根本原因是，二者都包含反对称化，而反对称化会抵消偏导数变换律中非张量的部分。相同特征也意味着，可以同样好地用（无挠的）协变导数来定义它们：反对称化会使联络系数项消失。因此，若 $\nabla$ 是 Christoffel 联络，$\omega_\mu$ 是一形式，而 $X^\mu$ 与 $Y^\mu$ 是向量场，则可写成下一页的两个公式。

<!-- source: PDF 115; printed: 102 -->

$$
(\mathrm d\omega)_{\mu\nu}
=2\partial_{[\mu}\omega_{\nu]}
=2\nabla_{[\mu}\omega_{\nu]},
\tag{3.36}
$$

以及

$$
[X,Y]^\mu
=X^\lambda\partial_\lambda Y^\mu
-Y^\lambda\partial_\lambda X^\mu
=X^\lambda\nabla_\lambda Y^\mu
-Y^\lambda\nabla_\lambda X^\mu.
\tag{3.37}
$$

> **勘误（原书第 102 页）**　依据本书对外微分的定义，作者要求在式（3.36）的第二项与第三项前各补一个因子 $2$。上式已据此修正。

如果联络并非无挠，上述表达式中的最后一个等号便不再成立；外微分和交换子更基本的定义是用偏导数写出的那些定义。

继续之前，先回顾一下我们逐步给数学对象增加结构的过程。最初只有“集合”这一基本概念；这里假定读者已经熟悉它，至少在非正式意义上如此。接着为集合引入开子集的概念；这等价于引入一个拓扑，从而把集合提升为拓扑空间。再要求每个开集看起来都像 $\mathbb R^n$ 的一个区域（每个开集的 $n$ 相同），并要求坐标图能够光滑地拼合，拓扑空间便成为流形。流形是一种既灵活又强有力的结构；它天然带有切丛、各种秩的张量丛、取外微分的能力，等等。然后我们在流形上放置一个度规，得到带度规的流形（有时称 Riemann 流形）。与度规无关地，我们还发现可以引入联络，从而能够取协变导数。然而一旦有了度规，就自动有唯一的、无挠且与度规相容的联络。类似地，可以独立引入一个体积形式，不过度规本身会自动确定一个体积形式。原则上，没有任何东西阻止我们在一个给定流形上引入不止一个联络、体积形式或度规。在广义相对论中，确实存在一个物理度规，由它确定体积和协变导数，因此这些概念彼此独立这一点并不关键。

## 3.3 平行移动与测地线

现在我们已经知道如何取协变导数，先退一步，把它放回微分的一般背景中。我们把导数理解为量化某个东西变化得有多快的方式。对张量而言，关键问题是：“相对于什么发生变化？”普通函数在时空每一点定义一个数；比较两个不同的数很直接，所以函数的偏导数在任意流形上仍然有效，一点也不奇怪。但张量是从向量和对偶向量到实数的映射，要怎样比较时空不同点处的这种映射，并不清楚。既然我们已成功构造出协变导数，能否把它看成以某种方式测量张量变化率的东西？答案是肯定的：协变导数量化张量场的瞬时变化率，比较基准则是这个张量在“平行移动”后的取值。

<!-- source: PDF 116; printed: 103 -->

> **图 3.1　平直空间中的平行移动。**　在平直空间里，只要保持一个向量的 Cartesian 分量不变，就能平行移动它。图中向量沿曲线从 $p$ 移至 $q$，标注为“保持向量不变（keep vector constant）”。

换句话说，联络定义了一种特定方式，使张量沿某条路径保持常量；以此为基准，就能比较相邻的张量。

事实证明，平行移动这个概念本身就很有意思，值得花些时间思考。回想一下，在平直空间中，无需过分在意向量其实是各个点处切空间的元素；比较不同点处的向量实际上很自然。这里的“比较”包括相加、相减、取点积等等。之所以自然，是因为在平直空间中，把一个向量从一点移到另一点并同时保持它不变是有意义的，如图 3.1 所示。等向量从一点移到另一点之后，就可以进行向量空间中通常允许的运算。

沿一条路径移动向量、并让它始终保持不变的概念，称为**平行移动**。要让平行移动得到良好定义，需要一个联络；平直空间中对向量的直观操作，隐含地使用了该空间上的 Christoffel 联络。平直空间与弯曲空间的关键差别在于：**在弯曲空间中，把向量从一点平行移动到另一点所得的结果，取决于两点之间所取的路径。**

即使尚未建立完整的平行移动机制，凭借我们对二维球面的直觉也能看出这一点。从赤道上的一个向量开始，让它沿等经度线指向。以显然的方式沿一条经线把它平行移动到北极。然后再取原向量，先沿赤道平行移动一个角度 $\theta$，再像刚才一样把它移到北极。如图 3.2 所示，很明显：沿两条不同路径作平行移动的向量到达了同一个终点，却有两个不同的取值，彼此旋转了 $\theta$。

看来，并不存在一种自然方式，能唯一地把向量从一个切空间移到另一个切空间；总可以平行移动它，但结果依赖于路径，而且并没有自然的路径选择。

<!-- source: PDF 117; printed: 104 -->

> **图 3.2　二维球面上的平行移动。**　在弯曲流形上，平行移动的结果可以依赖于所取路径。图中同一赤道向量沿两条经路抵达北极后，方向相差角度 $\theta$。

与我们遇到过的某些问题不同，**这个问题没有解法**——我们只能接受这样一个事实：两个向量只有同属一个切空间时，才能用自然方式比较。例如，两个相互擦肩而过的粒子具有定义良好的相对速度，而且它不可能超过光速。但弯曲流形上处于不同点的两个粒子，并不存在任何定义良好的“相对速度”概念；这个概念本身就没有意义。当然，在某些特殊情形中，仍然可以像它有意义那样谈论，而且这样做也有用；但偶尔有用不能取代严谨定义。

例如在宇宙学中，相比于附近静止光源发出的光，遥远星系的光发生了红移。这个现象与相对运动所产生的通常 Doppler 效应极其相似，所以我们很容易想说，星系正以由其红移所确定的速度“远离我们”。在严谨层面上，这种说法没有意义；用 Wittgenstein 的话说，它是一种“语法错误”——星系并没有在退行，因为它们相对于我们的速度并无良好定义。实际发生的是：光子从那里传播到这里所经过的路径上，我们与星系之间的时空度规发生了变化（宇宙膨胀了），从而使光的波长增大。

下面是误用这个概念的一个例子：把 Doppler 公式直接用于星系红移，会得出其中某些星系正以超光速远离我们的结论，看起来与相对论矛盾。这个表面悖论的解决方式很简单：不应当把“星系退行”这个概念照字面理解。

关于不能做什么已经说得够多；下面来看能做什么。平行移动应当是弯曲空间中“沿路径移动一个向量并保持它不变”这一概念的推广；对任意秩张量也是如此。

<!-- source: PDF 118; printed: 105 -->

给定曲线 $x^\mu(\lambda)$，在平直空间中，要求张量 $T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}$ 沿该曲线保持不变，就只是要求它的分量为常量：

$$
\frac{\mathrm d}{\mathrm d\lambda}
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
=\frac{\mathrm dx^\mu}{\mathrm d\lambda}\partial_\mu
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
=0.
$$

要让这个条件成为真正的张量条件，只需把偏导数换成协变导数，并定义**方向协变导数**为

$$
\frac{D}{\mathrm d\lambda}
=\frac{\mathrm dx^\mu}{\mathrm d\lambda}\nabla_\mu.
\tag{3.38}
$$

这是一个只沿路径定义的映射，把 $(k,l)$ 型张量映射为 $(k,l)$ 型张量。于是，张量 $T$ 沿路径 $x^\mu(\lambda)$ 的**平行移动**，定义为要求 $T$ 沿路径的协变导数为零：

$$
\left(\frac{D}{\mathrm d\lambda}T\right)^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
\equiv
\frac{\mathrm dx^\sigma}{\mathrm d\lambda}
\nabla_\sigma
T^{\mu_1\mu_2\cdots\mu_k}{}_{\nu_1\nu_2\cdots\nu_l}
=0.
\tag{3.39}
$$

这是定义良好的张量方程，因为切向量 $\mathrm dx^\mu/\mathrm d\lambda$ 与协变导数 $\nabla T$ 都是张量；它称为**平行移动方程**。对向量，方程成为

$$
\frac{\mathrm d}{\mathrm d\lambda}V^\mu
+\Gamma^\mu{}_{\sigma\rho}
\frac{\mathrm dx^\sigma}{\mathrm d\lambda}V^\rho
=0.
\tag{3.40}
$$

可以把平行移动方程看成定义初值问题的一阶微分方程：给定路径上某一点处的张量，它沿路径向其他点存在唯一的延拓，并且这一延拓满足式（3.39）。我们说这样的张量经过了平行移动。

平行移动概念显然依赖于联络，不同联络会给出不同答案。如果联络与度规相容，度规关于它总是平行移动的：

$$
\frac{D}{\mathrm d\lambda}g_{\mu\nu}
=\frac{\mathrm dx^\sigma}{\mathrm d\lambda}
\nabla_\sigma g_{\mu\nu}
=0.
\tag{3.41}
$$

由此可知，两个平行移动向量的内积保持不变。也就是说，若 $V^\mu$ 与 $W^\nu$ 沿曲线 $x^\sigma(\lambda)$ 平行移动，则

$$
\begin{aligned}
\frac{D}{\mathrm d\lambda}(g_{\mu\nu}V^\mu W^\nu)
={}&\left(\frac{D}{\mathrm d\lambda}g_{\mu\nu}\right)V^\mu W^\nu
+g_{\mu\nu}\left(\frac{D}{\mathrm d\lambda}V^\mu\right)W^\nu\\
&+g_{\mu\nu}V^\mu
\left(\frac{D}{\mathrm d\lambda}W^\nu\right)
=0.
\end{aligned}
\tag{3.42}
$$

这意味着，关于度规相容联络的平行移动会保持向量的范数、正交关系等。

定义了平行移动之后，合乎逻辑的下一步是讨论测地线。测地线是 Euclidean 空间中直线概念在弯曲空间里的推广。我们都知道直线是什么：它是两点之间距离最短的路径。

<!-- source: PDF 119; printed: 106 -->

但还有一个同样好的定义：直线是一条把自身切向量作平行移动的路径。我们将看到，当且仅当所用联络是 Christoffel 联络时，这两个概念才一致。

先从第二个定义开始，即测地线是一条沿自身平行移动切向量的曲线，因为这个定义在计算上直接得多。路径 $x^\mu(\lambda)$ 的切向量是 $\mathrm dx^\mu/\mathrm d\lambda$。要求它被平行移动，就是

$$
\frac{D}{\mathrm d\lambda}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}=0,
\tag{3.43}
$$

或者写成

$$
\boxed{
\frac{\mathrm d^2x^\mu}{\mathrm d\lambda^2}
+\Gamma^\mu{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\lambda}
\frac{\mathrm dx^\sigma}{\mathrm d\lambda}=0.}
\tag{3.44}
$$

这就是**测地线方程**，也是一个应当记住的公式。如果联络系数是 Euclidean 空间的 Christoffel 符号，很容易看出它会重现通常的直线概念：此时可选择 Cartesian 坐标，使 $\Gamma^\mu{}_{\rho\sigma}=0$，测地线方程就成为 $\mathrm d^2x^\mu/\mathrm d\lambda^2=0$，这正是直线的方程。

这个推导简单得令人难为情；下面转向“最短距离”定义这个更有内容的情形。我们知道，在 Lorentz 时空中定义距离涉及各种微妙之处：类光路径的距离为零；对类时路径，使用固有时更方便。为简单起见，只对类时路径作计算——所得方程最终对任意路径都适用，所以并未损失一般性。于是考虑固有时泛函

$$
\tau
=\int\left(
-g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}
\right)^{1/2}\mathrm d\lambda,
\tag{3.45}
$$

积分沿路径进行。为了寻找距离最短的路径，可以照常使用变分法，寻找这个泛函的临界点。它们会是固有时取**最大值**的曲线，与第 1 章对双生子悖论的讨论一致。不过，可以用一个小技巧简化代数。积分（3.45）具有 $\tau=\int\sqrt{-f}\,\mathrm d\lambda$ 的形式，其中 $f=g_{\mu\nu}(\mathrm dx^\mu/\mathrm d\lambda)(\mathrm dx^\nu/\mathrm d\lambda)$。其变分为

$$
\begin{aligned}
\delta\tau
&=\int\delta\sqrt{-f}\,\mathrm d\lambda\\
&=-\int\frac12(-f)^{-1/2}\delta f\,\mathrm d\lambda.
\end{aligned}
\tag{3.46}
$$

如果现在指定参数就是固有时 $\tau$ 本身，而非任意参数 $\lambda$，那么切向量就是四速度 $U^\mu$，计算会更容易。

<!-- source: PDF 120; printed: 107 -->

这会固定 $f$ 的值：

$$
f=g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}
=g_{\mu\nu}U^\mu U^\nu=-1.
\tag{3.47}
$$

由式（3.46）于是有

$$
\delta\tau=-\frac12\int\delta f\,\mathrm d\tau.
\tag{3.48}
$$

因此，式（3.45）的驻点——即 $\delta\tau=0$ 的路径——等价于下面这个更简单积分在参数化固定时的驻点：

$$
I=\frac12\int f\,\mathrm d\tau
=\frac12\int g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}\,\mathrm d\tau.
\tag{3.49}
$$

（因子 $1/2$ 完全没有必要，但会让后面的表达式更好看。）所以，对这个表达式取变分，是寻找最短距离路径的一条捷径；我们当然要明智地采用它。

$I$ 的驻点自然满足 Euler-Lagrange 方程（1.128），但计算那些方程需要反复运用链式法则；同样简便的做法是，直接考察路径发生无穷小变分时积分的变化：

$$
\begin{gathered}
x^\mu\longrightarrow x^\mu+\delta x^\mu,\\
g_{\mu\nu}\longrightarrow
g_{\mu\nu}+(\partial_\sigma g_{\mu\nu})\delta x^\sigma.
\end{gathered}
\tag{3.50}
$$

第二行来自弯曲时空中的 Taylor 展开；如你所见，它使用偏导数而非协变导数。原因是，此处只是把某个特定坐标系中的分量 $g_{\mu\nu}$ 看成时空上的函数。把它代入式（3.49），只保留 $\delta x^\mu$ 的一阶项，得到

$$
\delta I
=\frac12\int\left[
\partial_\sigma g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}\delta x^\sigma
+g_{\mu\nu}
\frac{\mathrm d(\delta x^\mu)}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}
+g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm d(\delta x^\nu)}{\mathrm d\tau}
\right]\mathrm d\tau.
\tag{3.51}
$$

最后两项可以分部积分。例如，

$$
\begin{aligned}
\frac12\int\left[
g_{\mu\nu}\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm d(\delta x^\nu)}{\mathrm d\tau}
\right]\mathrm d\tau
&=-\frac12\int\left[
g_{\mu\nu}\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2}
+\frac{\mathrm dg_{\mu\nu}}{\mathrm d\tau}
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\right]\delta x^\nu\,\mathrm d\tau\\
&=-\frac12\int\left[
g_{\mu\nu}\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2}
+\partial_\sigma g_{\mu\nu}
\frac{\mathrm dx^\sigma}{\mathrm d\tau}
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\right]\delta x^\nu\,\mathrm d\tau.
\end{aligned}
\tag{3.52}
$$

这里略去了边界项；由于我们令变分 $\delta x^\mu$ 在路径端点处消失，边界项为零。第二行对 $g_{\mu\nu}$ 的导数使用了链式法则。

<!-- source: PDF 121; printed: 108 -->

重新安排一些哑指标之后，变分（3.51）成为

$$
\delta I=-\int\left[
g_{\mu\sigma}\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2}
+\frac12
(\partial_\mu g_{\nu\sigma}
+\partial_\nu g_{\sigma\mu}
-\partial_\sigma g_{\mu\nu})
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}
\right]\delta x^\sigma\,\mathrm d\tau.
\tag{3.53}
$$

我们寻找的是驻点，所以要求 $\delta I$ 对任意变分 $\delta x^\sigma$ 都为零；这意味着

$$
g_{\mu\sigma}\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2}
+\frac12
(\partial_\mu g_{\nu\sigma}
+\partial_\nu g_{\sigma\mu}
-\partial_\sigma g_{\mu\nu})
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}=0,
\tag{3.54}
$$

最后乘以逆度规 $g^{\rho\sigma}$，得到

$$
\frac{\mathrm d^2x^\rho}{\mathrm d\tau^2}
+\frac12g^{\rho\sigma}
(\partial_\mu g_{\nu\sigma}
+\partial_\nu g_{\sigma\mu}
-\partial_\sigma g_{\mu\nu})
\frac{\mathrm dx^\mu}{\mathrm d\tau}
\frac{\mathrm dx^\nu}{\mathrm d\tau}=0.
\tag{3.55}
$$

可以看出，这正是测地线方程（3.40），但其中采用了特定的 Christoffel 联络（3.27）。所以，在带度规的流形上，长度泛函的极值曲线，会关于这个度规所伴随的 Christoffel 联络平行移动自身的切向量。即使同一流形上还定义了别的联络，也与这个结论无关。当然，在 GR 中只使用 Christoffel 联络，因此两种测地线概念相同。

变分原理还提供了一种方便方法，用来实际计算给定度规的 Christoffel 符号。与直接代入式（3.27）相比，常常更省事的做法是：把所研究的度规代入 $g_{\mu\nu}$，然后显式地对积分（3.49）取变分。第 3.5 节将展示这个过程的一个例子。

## 3.4 测地线的性质

测地线在广义相对论中的主要用途，是描述不受加速的测试粒子所遵循的路径。**测试粒子**是指自身不影响其运动所经过几何的物体——严格说来永远做不到，但往往是极好的近似。利用这个概念，例如可以探究太阳周围引力场的性质，而不必担心我们所考察的行星本身产生的场。测地线方程可以看成 Newton 定律 $\boldsymbol f=m\boldsymbol a$ 在 $\boldsymbol f=0$ 的情形向弯曲时空的推广。也可以在右边加入项来引入力；事实上，回看狭义相对论中 Lorentz 力的表达式（1.106），自然会猜想

$$
\frac{\mathrm d^2x^\mu}{\mathrm d\tau^2}
+\Gamma^\mu{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\tau}
\frac{\mathrm dx^\sigma}{\mathrm d\tau}
=\frac qm F^\mu{}_{\nu}
\frac{\mathrm dx^\nu}{\mathrm d\tau}.
\tag{3.56}
$$

以后还会进一步讨论；事实上，这个猜想是正确的。

> **勘误（原书第 108 页）**　作者说明，式（3.56）前的句子在排版时被破坏；这里已按勘误恢复为“回看狭义相对论中 Lorentz 力的表达式（1.106），自然会猜想……”。

<!-- source: PDF 122; printed: 109 -->

还需要更仔细地谈谈测地线路径的参数化。我们在式（3.44）中把测地线方程表述为“切向量被平行移动”这一要求时，用某个参数 $\lambda$ 参数化路径；而在为时空间隔的极值曲线求得公式（3.55）时，最后采用的却是一种非常具体的参数化——固有时。从式（3.55）的形式显然可见，对某些常数 $a$、$b$ 作变换

$$
\tau\longrightarrow\lambda=a\tau+b
\tag{3.57}
$$

会使方程保持不变。任何以这种方式同固有时联系起来的参数都称为**仿射参数**；用它参数化测地线，与使用固有时同样好。在式（3.44）的推导中隐藏着这样一个事实：**要求切向量被平行移动，实际上会约束曲线的参数化**；具体来说，参数必须通过式（3.57）与固有时相联系。换言之，如果从某一点、沿某个初始方向出发，并通过沿这个方向行进、始终让切向量平行移动来构造一条曲线，那么你不仅定义了流形中的一条路径，也定义了沿路径的参数，所差至多只是线性变换。

当然，你仍可随意使用任何其他参数化，但此时式（3.44）不再成立。更一般地，对于某个参数 $\alpha(\lambda)$，你会满足形如

$$
\frac{\mathrm d^2x^\mu}{\mathrm d\alpha^2}
+\Gamma^\mu{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\alpha}
\frac{\mathrm dx^\sigma}{\mathrm d\alpha}
=f(\alpha)\frac{\mathrm dx^\mu}{\mathrm d\alpha}
\tag{3.58}
$$

的方程，其中 $f(\alpha)$ 与仿射参数的关系为

$$
f(\alpha)
=-\left(\frac{\mathrm d^2\alpha}{\mathrm d\lambda^2}\right)
\left(\frac{\mathrm d\alpha}{\mathrm d\lambda}\right)^{-2}.
\tag{3.59}
$$

反过来，如果一条曲线满足式（3.58），总能找到一个仿射参数 $\lambda(\alpha)$，使测地线方程（3.44）成立。

对类时路径，可以用四速度 $U^\mu=\mathrm dx^\mu/\mathrm d\tau$ 把测地线方程写成

$$
U^\lambda\nabla_\lambda U^\mu=0.
\tag{3.60}
$$

类似地，用四动量 $p^\mu=mU^\mu$ 表示时，测地线方程就是

$$
p^\lambda\nabla_\lambda p^\mu=0.
\tag{3.61}
$$

这个关系表达了这样一个观念：自由落体粒子始终沿自身动量所指的方向运动。

对类光路径，固有时为零，因此 $\tau$ 并非合适的仿射参数。尽管如此，询问一条参数化路径 $x^\mu(\lambda)$ 是否满足测地线方程（3.44），仍然有完全良好的定义。

<!-- source: PDF 123; printed: 110 -->

如果一条类光路径对某个参数 $\lambda$ 是测地线，那么对任何形如 $a\lambda+b$ 的其他仿射参数，它仍是测地线。不过，在这些参数中没有像类时路径的固有时那样受偏爱的选择。当然，一旦在路径上某一点选定参数，若想求解测地线方程，这个参数向路径其余部分的延拓就是唯一的。沿类光测地线，常常方便地把仿射参数 $\lambda$ 的归一化选成让 $\mathrm dx^\mu/\mathrm d\lambda$ 等于四动量：

$$
p^\mu=\frac{\mathrm dx^\mu}{\mathrm d\lambda}.
\tag{3.62}
$$

这与类时路径形成对照；对后者，$\mathrm dx^\mu/\mathrm d\tau$ 是单位质量的动量。于是，四速度为 $U^\mu$ 的观测者测得粒子的能量（等价地，由于我们取 $\hbar=1$，也就是频率）为

$$
E=-p_\mu U^\mu.
\tag{3.63}
$$

无论 $p^\mu$ 是类光还是类时，这个表达式总给出四速度为 $U^\mu$ 的观测者所测得的、动量为 $p^\mu$ 的粒子能量；可转到局部惯性坐标中检验它。（有一点要提醒：这个 $E$ 的表达式不包含势能，只含运动和惯性所带来的内禀能量。一般时空中没有定义良好的引力势能概念，不过在某些特殊情形中确实存在。）

具有 Lorentz 度规的时空中，测地线有一项重要性质：相对于度规相容联络，测地线的类型——类时、类光或类空——永远不会改变。理由很简单：平行移动保持内积，而类型由切向量与自身的内积决定。这也说明，在推导式（3.55）时只考察纯类时路径为何是自洽的；对类空路径会推导出同一方程，因为最终结果唯一的差别只是整体负号。

现在来解释先前的说法：类时测地线使固有时取最大值。我们知道这一点，是因为给定任意类时曲线，无论它是不是测地线，都能用一条类光曲线把它近似到任意精度。只需考察沿类时曲线前进的“锯齿形”类光曲线，如图 3.3 所示。增加尖角数目时，类光曲线会越来越接近类时曲线，同时路径长度仍为零。因此类时测地线不可能是固有时的极小曲线，因为总有固有时更小（事实上为零）的曲线与它无限接近；类时测地线实际使固有时取最大值。这也能帮助你记住双生子悖论中哪一个人年龄增长得更多：留在家中的人基本沿一条测地线运动，所以经历的固有时更多。

当然，即使这种说法也略显草率；每次说“最大化”或“最小化”时，严格说来都应加上“局部”二字。流形上两点之间经常不止有一条测地线。例如在 $S^2$ 上，可以画一条穿过任意两点的大圆，并设想沿短路或绕长路在两点之间行进。尽管两条路都是长度泛函的驻点，其中一条显然比另一条长。

> **图 3.3　类光锯齿线逼近类时路径。**　总可以用一串总路径长度为零的类光路径来逼近类时路径。因此，类时测地线必定给出固有时的极大值而非极小值。图中黑色平滑曲线标为“类时”，锯齿形白线标为“类光”。

<!-- source: PDF 124; printed: 111 -->

测地线提供了一种方便方法，把点 $p$ 的切空间 $T_p$ 映射到流形中包含 $p$ 的一个区域；这称为**指数映射**。这个映射又会为该区域定义一组坐标，而且它们自动就是第 2.5 节讨论的局部惯性坐标［即点 $p$ 周围的坐标 $x^{\hat\mu}$，满足 $g_{\hat\mu\hat\nu}(p)=\eta_{\hat\mu\hat\nu}$ 和 $\partial_{\hat\sigma}g_{\hat\mu\hat\nu}(p)=0$］。先注意，任意向量 $k\in T_p$ 都定义一条经过 $p$ 的唯一测地线；在这条测地线上，$k$ 是 $p$ 点处的切向量，并且 $\lambda(p)=0$：

$$
\frac{\mathrm dx^\mu}{\mathrm d\lambda}(\lambda=0)=k^\mu.
\tag{3.64}
$$

唯一性来自测地线方程是二阶微分方程；给定 $x^\mu(p)$ 与 $k^\mu=(\mathrm dx^\mu/\mathrm d\lambda)(p)$ 形式的初始数据，就完全确定了一个解。在这条测地线上，$M$ 中恰有一个点对应 $\lambda=1$。于是，$p$ 点处的指数映射 $\exp_p:T_p\to M$ 定义为

$$
\exp_p(k)=x^\nu(\lambda=1),
\tag{3.65}
$$

其中 $x^\nu(\lambda)$ 是满足初始条件（3.64）的测地线方程解，如图 3.4 所示。

对于零向量附近的某一组切向量 $k^\mu$，这个映射定义良好，而且实际上可逆。不过，取决于几何，从同一点出发的不同测地线最终可能相交；到那时，$\exp_p:T_p\to M$ 就不再是一一映射。此外，指数映射的像未必是整个流形，其定义域也未必是整个切空间。

像之所以可能不是整个 $M$，一个简单原因是可能存在任何测地线都无法连接的两个点。第 8 章讨论的反 de Sitter 空间就是一例。定义域之所以可能不是整个 $T_p$，则是因为测地线可能撞上奇点；我们把奇点理解为“流形的边缘”。具有这种奇点的流形称为**测地不完备**。如果展开更仔细的讨论，实际逻辑方向会反过来。

> **图 3.4　指数映射。**　指数映射把 $T_p$ 中的向量 $k^\mu$ 映到 $M$ 中的一点；该点位于以这个向量为切向量的测地线上，仿射参数值为 1。图中标出了 $T_p$、$M$、$p$、$k^\mu$、$\lambda=1$ 与曲线 $x^\nu(\lambda)$。

> **勘误（原书第 111 页）**　原文 “a convenient a way” 多了一个冠词；这里按作者勘误译为“一种方便方法”。

<!-- source: PDF 125; printed: 112 -->

更确切地说，排除那些人为删去流形一部分而造成的平凡情形之后，定义奇点的最好方式，就是把它看作测地线似乎在那里“终止”的地方。参见 Wald（1984）或 Hawking 与 Ellis（1973）。这绝非纯技术问题：Hawking–Penrose 奇点定理表明，对某些物质内容，广义相对论中的时空几乎必然是测地不完备的。例如，GR 中最有用的两类时空——描述黑洞的 Schwarzschild 解，以及描述均匀、各向同性宇宙的 Friedmann–Robertson–Walker 解——都带有重要奇点；后续各章将讨论它们。

现在用指数映射构造局部惯性坐标。容易的部分，是为 $T_p$ 找到基向量 $\{\hat e_{(\hat\mu)}\}$，使度规分量具有规范形式：

$$
g_{\hat\mu\hat\nu}
=g\!\left(\hat e_{(\hat\mu)},\hat e_{(\hat\nu)}\right)
=\eta_{\hat\mu\hat\nu}.
\tag{3.66}
$$

这里 $g(\ ,\ )$ 表示把度规看成从 $T_p\times T_p$ 到 $\mathbb R$ 的多重线性映射。两种帽子的含义不同：$e$ 上的帽子提醒我们它是基向量，指标上的帽子提醒我们正处在局部惯性坐标中——很快就会看到。这一步容易，因为它只是线性代数，还没有涉及坐标：从 $g_{\mu\nu}$ 的任意一组分量出发，总能把这个矩阵对角化，再重新缩放基向量，使其满足式（3.66）。

我们原本会以为，困难在于寻找一个坐标系 $x^{\hat\mu}$，让基向量 $\{\hat e_{(\hat\mu)}\}$ 构成坐标基，即 $\hat e_{(\hat\mu)}=\partial_{\hat\mu}$，并使 $g_{\hat\mu\hat\nu}$ 的一阶偏导数消失。但事实上，指数映射会自动做到这一点。对任意一个充分接近 $p$ 的点 $q$，都有一条唯一的测地线路径连接 $p$ 和 $q$，并有唯一的参数化 $\lambda$ 满足 $\lambda(p)=0$、$\lambda(q)=1$。在 $p$ 点处，这条测地线的切向量 $k$ 可以写成基向量的线性组合 $k=k^{\hat\mu}\hat e_{(\hat\mu)}$。我们把所求坐标 $x^{\hat\mu}$ 直接定义为这些分量：$x^{\hat\mu}(q)=k^{\hat\mu}$。换言之，坐标 $x^{\hat\mu}(q)$ 被定义成切向量 $k$ 关于归一化基 $\{\hat e_{(\hat\mu)}\}$ 的分量，而 $k$ 经 $\exp_p$ 映到 $q$。以这种方式构造的坐标称为 $p$ 点处的 **Riemann 法坐标**。

> **勘误（原书第 112 页）**　作者指出，“所求坐标 $x^\mu$”中的 $\mu$ 应带帽。这里所有相应坐标均已写为 $x^{\hat\mu}$。

还要验证这些 Riemann 法坐标满足 $\partial_{\hat\sigma}g_{\hat\mu\hat\nu}(p)=0$。注意，切空间中的一条射线——对某个固定向量 $k^{\hat\mu}$，形如 $\lambda k^{\hat\mu}$ 的参数化向量集合——经指数映射会映为一条测地线。因此，在 Riemann 法坐标中，形如

$$
x^{\hat\mu}(\lambda)=\lambda k^{\hat\mu}
\tag{3.67}
$$

的曲线会满足测地线方程。事实上，任何经过 $p$ 的测地线都可以对某个适当向量 $k^{\hat\mu}$ 写成这种形式。因此

$$
\frac{\mathrm d^2x^{\hat\mu}}{\mathrm d\lambda^2}=0.
\tag{3.68}
$$

<!-- source: PDF 126; printed: 113 -->

在这个坐标系中，上式沿任意经过 $p$ 的测地线成立。但由测地线方程还有

$$
\frac{\mathrm d^2x^{\hat\mu}}{\mathrm d\lambda^2}(p)
=-\Gamma^{\hat\mu}{}_{\hat\rho\hat\sigma}(p)
k^{\hat\rho}k^{\hat\sigma},
\tag{3.69}
$$

其中 $k^{\hat\rho}=(\mathrm dx^{\hat\rho}/\mathrm d\lambda)(p)$。由于这对任意 $k^{\hat\rho}$ 都成立，所以

$$
\Gamma^{\hat\mu}{}_{\hat\rho\hat\sigma}(p)=0.
\tag{3.70}
$$

现在利用度规相容性：

$$
\begin{aligned}
0=\nabla_{\hat\sigma}g_{\hat\mu\hat\nu}
&=\partial_{\hat\sigma}g_{\hat\mu\hat\nu}
-\Gamma^{\hat\lambda}{}_{\hat\sigma\hat\mu}
 g_{\hat\lambda\hat\nu}
-\Gamma^{\hat\lambda}{}_{\hat\sigma\hat\nu}
 g_{\hat\mu\hat\lambda}\\
&=\partial_{\hat\sigma}g_{\hat\mu\hat\nu},
\end{aligned}
\tag{3.71}
$$

这里所有量都在 $p$ 点取值。可见，Riemann 法坐标具体实现了第 2.5 节讨论的局部惯性坐标。它们并不唯一：有无穷多个并非 Riemann 法坐标的坐标系，也满足 $g_{\hat\mu\hat\nu}(p)=\eta_{\hat\mu\hat\nu}$ 和 $\partial_{\hat\sigma}g_{\hat\mu\hat\nu}(p)=0$；不过，在 $p$ 点附近展开时，这些坐标系与 Riemann 法坐标的差异只从 $x^{\hat\mu}$ 的三阶开始出现。

## 3.5 再访膨胀宇宙

下面实际运用已经发展的工具，来理解一个简单度规。回想第 2 章研究过的膨胀宇宙度规：

$$
\begin{aligned}
\mathrm ds^2
&=-\mathrm dt^2+a^2(t)
(\mathrm dx^2+\mathrm dy^2+\mathrm dz^2)\\
&=-\mathrm dt^2+a^2(t)\delta_{ij}\,\mathrm dx^i\mathrm dx^j.
\end{aligned}
\tag{3.72}
$$

这个度规描述一个空间截面平直、并随时间膨胀的宇宙；固定空间坐标处各粒子之间的相对距离，与尺度因子 $a(t)$ 成正比增长。

面对一个度规，首先要计算 Christoffel 符号。正如第 3.3 节末尾所说，最简便的方法其实是显式地对式（3.49）那种形式的积分取变分。代入所考察的度规，得到

$$
I=\frac12\int\left[
-\left(\frac{\mathrm dt}{\mathrm d\tau}\right)^2
+a^2(t)\delta_{ij}
\frac{\mathrm dx^i}{\mathrm d\tau}
\frac{\mathrm dx^j}{\mathrm d\tau}
\right]\mathrm d\tau.
\tag{3.73}
$$

方法是考察变分 $x^\mu\to x^\mu+\delta x^\mu$，并要求 $\delta I$ 为零。在 $n$ 维流形上会得到 $n$ 个方程（这里 $n=4$），每个 $\mu$ 对应一个；每个方程都对应测地线方程（3.44）的一个分量。

<!-- source: PDF 127; printed: 114 -->

对 $x^\mu$ 作变分所导出的方程中，$(\mathrm dx^\rho/\mathrm d\tau)(\mathrm dx^\sigma/\mathrm d\tau)$ 的系数就是 $\Gamma^\mu{}_{\rho\sigma}$。

对于度规（3.72），需要分别考察关于 $x^0=t$ 以及某一个 $x^i$ 的变分；选择哪一个 $x^i$ 都没有关系，因为各个类空方向的结果相同。先取 $t\to t+\delta t$。非平凡的时间依赖来自尺度因子；到一阶为止，

$$
a(t+\delta t)=a(t)+\dot a\,\delta t,
\tag{3.74}
$$

其中 $\dot a=\mathrm da/\mathrm dt$。因此

$$
\begin{aligned}
\delta I
&=\frac12\int\left[
-2\frac{\mathrm dt}{\mathrm d\tau}
  \frac{\mathrm d(\delta t)}{\mathrm d\tau}
+2a\dot a\,\delta_{ij}
  \frac{\mathrm dx^i}{\mathrm d\tau}
  \frac{\mathrm dx^j}{\mathrm d\tau}\delta t
\right]\mathrm d\tau\\
&=\int\left[
\frac{\mathrm d^2t}{\mathrm d\tau^2}
+a\dot a\,\delta_{ij}
\frac{\mathrm dx^i}{\mathrm d\tau}
\frac{\mathrm dx^j}{\mathrm d\tau}
\right]\delta t\,\mathrm d\tau,
\end{aligned}
\tag{3.75}
$$

其中像往常一样，分部积分后丢掉了一个边界项。令 $\delta t$ 的系数为零，得到

$$
\frac{\mathrm d^2t}{\mathrm d\tau^2}
+a\dot a\,\delta_{ij}
\frac{\mathrm dx^i}{\mathrm d\tau}
\frac{\mathrm dx^j}{\mathrm d\tau}=0,
\tag{3.76}
$$

它应当等价于测地线方程的 $\mu=0$ 分量：

$$
\frac{\mathrm d^2x^0}{\mathrm d\tau^2}
+\Gamma^0{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\tau}
\frac{\mathrm dx^\sigma}{\mathrm d\tau}=0.
\tag{3.77}
$$

比较这两个方程可知

$$
\begin{gathered}
\Gamma^0{}_{00}=0,\\
\Gamma^0{}_{i0}=\Gamma^0{}_{0i}=0,\\
\Gamma^0{}_{ij}=a\dot a\,\delta_{ij}.
\end{gathered}
\tag{3.78}
$$

可以对一个空间坐标重复这一过程，取 $x^i\to x^i+\delta x^i$。这时变分为

$$
\begin{aligned}
\delta I
&=\frac12\int a^2\left(
2\delta_{ij}\frac{\mathrm dx^i}{\mathrm d\tau}
\frac{\mathrm d(\delta x^j)}{\mathrm d\tau}
\right)\mathrm d\tau\\
&=-\int\left(
a^2\frac{\mathrm d^2x^i}{\mathrm d\tau^2}
+2a\frac{\mathrm da}{\mathrm d\tau}
\frac{\mathrm dx^i}{\mathrm d\tau}
\right)\delta_{ij}\delta x^j\,\mathrm d\tau.
\end{aligned}
\tag{3.79}
$$

利用链式法则，可把 $\mathrm da/\mathrm d\tau$ 用 $\dot a$ 表示：

$$
\frac{\mathrm da}{\mathrm d\tau}
=\dot a\frac{\mathrm dt}{\mathrm d\tau}.
\tag{3.80}
$$

<!-- source: PDF 128; printed: 115 -->

于是，在式（3.79）中令 $\delta x^j$ 的系数为零，得到

$$
\frac{\mathrm d^2x^i}{\mathrm d\tau^2}
+2\frac{\dot a}{a}
\frac{\mathrm dt}{\mathrm d\tau}
\frac{\mathrm dx^i}{\mathrm d\tau}=0.
\tag{3.81}
$$

与测地线方程比较，可知 Christoffel 符号必须满足

$$
\Gamma^i{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\tau}
\frac{\mathrm dx^\sigma}{\mathrm d\tau}
=2\frac{\dot a}{a}
\frac{\mathrm dt}{\mathrm d\tau}
\frac{\mathrm dx^i}{\mathrm d\tau}.
\tag{3.82}
$$

所以 Christoffel 符号为

$$
\begin{gathered}
\Gamma^i{}_{00}=0,\\
\Gamma^i{}_{j0}=\Gamma^i{}_{0j}=\frac{\dot a}{a}\delta^i{}_j,\\
\Gamma^i{}_{jk}=0.
\end{gathered}
\tag{3.83}
$$

式（3.78）与式（3.83）合起来，就是度规（3.72）的全部联络系数。研究该时空的测地线和取协变导数都需要它们；事实上，式（3.76）和式（3.81）合在一起正是测地线方程。

下面用它们求解类光测地线。无质量粒子（例如光子）沿这类曲线运动；此时必须用 $\lambda$ 而非 $\tau$ 作参数。不失一般性，可以考察沿 $x$ 方向的路径，写成 $x^\mu(\lambda)=\{t(\lambda),x(\lambda),0,0\}$。利用 $\mathrm ds^2=0$，这类类光路径很容易求出：

$$
0=-\mathrm dt^2+a^2(t)\,\mathrm dx^2,
\tag{3.84}
$$

所以

$$
\frac{\mathrm dx}{\mathrm d\lambda}
=\frac1a\frac{\mathrm dt}{\mathrm d\lambda}.
\tag{3.85}
$$

第 2.6 节在 $a=t^q$ 时解过这个方程；这里保持更一般的形式。我们还选择了沿 $x$ 正方向运动的路径，这确定了 $\mathrm dx/\mathrm d\lambda$ 的符号。不过，必须区分“类光路径”和“类光测地线”：后者是限制严格得多的一类。为了证明这些路径是测地线，需要把坐标 $t$、$x$ 解为参数 $\lambda$ 的函数。

先求 $\mathrm dt/\mathrm d\lambda$；事实证明，这是我们最感兴趣的量。把类光条件（3.85）代入测地线方程（3.76）的 $\mu=0$ 分量，并记得把 $\tau$ 换成 $\lambda$，得到

$$
\frac{\mathrm d^2t}{\mathrm d\lambda^2}
+\frac{\dot a}{a}
\left(\frac{\mathrm dt}{\mathrm d\lambda}\right)^2=0.
\tag{3.86}
$$

<!-- source: PDF 129; printed: 116 -->

很容易验证，它的解为

$$
\frac{\mathrm dt}{\mathrm d\lambda}=\frac{\omega_0}{a},
\tag{3.87}
$$

其中 $\omega_0$ 是常数。给定 $a(t)$ 后，可以立即积分求得 $t(\lambda)$。不过更有意思的是，考察共动观测者——即空间坐标固定的观测者——所测得的光子能量 $E$；这个观测者的四速度为

$$
U^\mu=(1,0,0,0).
\tag{3.88}
$$

不要误以为静止粒子的四速度类时分量总等于 1。必须满足归一化条件 $g_{\mu\nu}U^\mu U^\nu=-1$；在静止系中 $U^i=0$，所以 $U^0=1/\sqrt{-g_{00}}$。根据式（3.63），并利用 $p^\mu=\mathrm dx^\mu/\mathrm d\lambda$，有

$$
\begin{aligned}
E&=-p_\mu U^\mu\\
&=-g_{00}\frac{\mathrm dx^0}{\mathrm d\lambda}U^0\\
&=\frac{\omega_0}{a}.
\end{aligned}
\tag{3.89}
$$

现在可以看出，式（3.87）的比例常数为何记作 $\omega_0$：$\omega_0$ 就是 $a=1$ 时光子的频率。回想 $E=\hbar\omega$，而我们所用单位制取 $\hbar=1$。

我们揭示了一个深刻现象：**宇宙学红移**。一个光子在尺度因子为 $a_1$ 时以能量 $E_1$ 发射，在尺度因子为 $a_2$ 时以能量 $E_2$ 被观测，则

$$
\frac{E_2}{E_1}=\frac{a_1}{a_2}.
\tag{3.90}
$$

之所以称作“红移”，是因为光子波长与频率成反比；在膨胀宇宙中，波长因而随时间增长。就实际应用而言，这提供了一种简便方式，测量我们与遥远星系之间尺度因子的变化；它还可充当距离的替代指标：既然宇宙一直单调膨胀，红移越大就意味着距离越远。按通常记号，红移量写成

$$
z=\frac{\omega_1-\omega_2}{\omega_2}
=\frac{a_2}{a_1}-1,
\tag{3.91}
$$

所以若没有发生膨胀，$z$ 就为零。例如，当发射者和观测者相距很近，以至于宇宙还没有足够时间发生明显膨胀时，便是如此。

<!-- source: PDF 130; printed: 117 -->

第 3.3 节已经提过，宇宙学红移并非 Doppler 频移（尽管把退行星系说成具有某种“速度”，确实是一种可以理解的诱惑）。现在可以定量理解这句话。你也许会认为，就所发射光子的行为而言，平直时空中两个实际彼此远离的星系，与膨胀时空中处于固定共动坐标的两个星系，差别很小。不过，来考察一个具体例子；它不现实，却很有启发性。

从平直时空开始。设两个星系起初没有彼此远离，而是静止在某个全局惯性坐标系中。一个星系向另一个发射光子；在光子传播期间，我们迅速把两个星系移开，直到间距成为原先的两倍，然后让它们静止在这个距离上；随后光子被第二个星系吸收。显然不会有 Doppler 频移，因为无论在发射时还是吸收时，两个星系都处于静止状态。

现在考察膨胀时空中的类似现象，两个星系固定在各自的共动坐标处。一开始尺度因子保持常量，即宇宙不膨胀。一个星系发射光子；设想在光子的旅程中，宇宙开始膨胀，直到尺度因子成为原先的两倍，然后在光子被吸收之前停止膨胀。在这种情况下肯定会有红移，尽管吸收和发射时都不存在“相对运动”——反正这个概念本身也没有良好定义。尺度因子加倍时，光子的波长也加倍，所以观测到 $z=1$ 的红移。这显示了宇宙学红移与通常 Doppler 效应在概念上的区别。

除了测地线方程，协变导数还将用于把狭义相对论平直时空中的物理定律推广到广义相对论的弯曲几何。下一章会更详细地讨论。一个简单的经验法则是：把所有偏导数换成协变导数，把平直时空度规 $\eta_{\mu\nu}$ 的每次出现换成弯曲度规 $g_{\mu\nu}$。例如，狭义相对论的能量—动量守恒方程 $\partial_\mu T^{\mu\nu}=0$，其中 $T^{\mu\nu}$ 是能量—动量张量，在弯曲时空中成为

$$
\nabla_\mu T^{\mu\nu}=0.
\tag{3.92}
$$

在宇宙学中，通常把充满宇宙的物质建模为理想流体。相应的能量—动量张量，是把式（1.114）推广到弯曲时空所得：

$$
T^{\mu\nu}=(\rho+p)U^\mu U^\nu+pg^{\mu\nu}.
\tag{3.93}
$$

回想一下，$\rho$ 是能量密度，$p$ 是压强，$U^\mu$ 是流体的四速度。对于度规（3.72），逆度规的分量为

$$
g^{\mu\nu}=
\begin{pmatrix}
-1&0&0&0\\
0&a^{-2}&0&0\\
0&0&a^{-2}&0\\
0&0&0&a^{-2}
\end{pmatrix}.
\tag{3.94}
$$

<!-- source: PDF 131; printed: 118 -->

在这些坐标中，可以让流体处在其静止系中，于是四速度分量为 $U^\mu=(1,0,0,0)$。事实上，正如以后将看到的，要让这个特定度规成为 Einstein 方程的解，流体就必须处在其静止系中。因此能量—动量张量为

$$
T^{\mu\nu}=
\begin{pmatrix}
\rho&0&0&0\\
0&a^{-2}p&0&0\\
0&0&a^{-2}p&0\\
0&0&0&a^{-2}p
\end{pmatrix}.
\tag{3.95}
$$

请注意，这些分量特属于度规（3.72）；对其他度规，它们通常会有不同形式。

来看看能量—动量守恒方程 $\nabla_\mu T^{\mu\nu}=0$ 对膨胀宇宙中的理想流体意味着什么。协变导数规则（3.17）给出

$$
\nabla_\mu T^{\mu\nu}
=\partial_\mu T^{\mu\nu}
+\Gamma^\mu{}_{\mu\lambda}T^{\lambda\nu}
+\Gamma^\nu{}_{\mu\lambda}T^{\mu\lambda}=0.
\tag{3.96}
$$

这个方程有四个分量，每个自由指标 $\nu$ 对应一个；其中三个空间分量 $\nu=i\in\{1,2,3\}$ 等价。先把 $\nu=0$ 分量逐项考察。第一项很直接：

$$
\partial_\mu T^{\mu0}=\partial_0T^{00}=\dot\rho.
\tag{3.97}
$$

第二项是

$$
\Gamma^\mu{}_{\mu\lambda}T^{\lambda0}
=\Gamma^\mu{}_{\mu0}T^{00}
=3\frac{\dot a}{a}\rho,
\tag{3.98}
$$

第三项是

$$
\Gamma^0{}_{\mu\lambda}T^{\mu\lambda}
=\Gamma^0{}_{00}T^{00}
+\Gamma^0{}_{11}T^{11}
+\Gamma^0{}_{22}T^{22}
+\Gamma^0{}_{33}T^{33}
=3\frac{\dot a}{a}p.
\tag{3.99}
$$

在每一组等式中，我们先利用 $T^{\mu\nu}$ 为对角矩阵，再使用这个度规中能量—动量张量和联络系数的显式公式。合起来得到

$$
\dot\rho=-3\frac{\dot a}{a}(\rho+p).
\tag{3.100}
$$

现在考察一个空间分量，具体取 $\nu=1$。仍然逐项计算，式（3.96）的第一项为

$$
\partial_\mu T^{\mu1}
=\partial_1T^{11}=a^{-2}\partial_xp.
\tag{3.101}
$$

第二、第三项分别为

$$
\Gamma^\mu{}_{\mu\lambda}T^{\lambda1}
=\Gamma^\mu{}_{\mu1}T^{11}=0,
\tag{3.102}
$$

> **译注**　原扫描在式（3.96）后的说明中把自由指标 $\nu$ 两次误写为 $\mu$；由式（3.96）及随后逐项计算可唯一确定这里应为 $\nu$，译文已明确写出。

<!-- source: PDF 132; printed: 119 -->

以及

$$
\Gamma^1{}_{\mu\lambda}T^{\mu\lambda}
=\Gamma^1{}_{00}T^{00}
+\Gamma^1{}_{11}T^{11}
+\Gamma^1{}_{22}T^{22}
+\Gamma^1{}_{33}T^{33}=0.
\tag{3.103}
$$

对 $\nu=2$ 和 $\nu=3$ 会得到等价结果。因此，能量—动量守恒方程的空间分量简化为

$$
\partial_i p=0.
\tag{3.104}
$$

把这些结果与 Minkowski 时空中的结果作比较很有启发性；只需令 $a=1$、$\dot a=0$ 即可得到后者。压强梯度方程（3.104）不受影响，所以曲率对空间分量没有作用：对共动观测者测得为静止的流体，压强在整个空间中必须恒定。另一方面，对类时分量，宇宙膨胀使式（3.100）的右边成为非零。为了理解这个新特征的后果，考察形如

$$
p=w\rho
\tag{3.105}
$$

的状态方程，其中 $w$ 为某个常数。式（3.100）于是成为

$$
\frac{\dot\rho}{\rho}
=-3(1+w)\frac{\dot a}{a},
\tag{3.106}
$$

解为

$$
\rho\propto a^{-3(1+w)}.
\tag{3.107}
$$

第 1 章提到过三类状态方程具有式（3.105）形式的理想流体：尘埃，$w=0$；辐射，$w=1/3$；真空，$w=-1$。一群非相对论、彼此不相互作用的粒子表现得像尘埃；一群光子或其他无质量粒子表现得像辐射；整个时空中非零且恒定的能量密度表现得像真空。由式（3.107）可见，状态方程决定了宇宙膨胀时能量密度如何演化：

$$
\begin{array}{lll}
\text{物质：}&p=0,&\rho\propto a^{-3},\\
\text{辐射：}&p=\frac13\rho,&\rho\propto a^{-4},\\
\text{真空：}&p=-\rho,&\rho=\text{常量}.
\end{array}
\tag{3.108}
$$

第 8 章将更深入地探究这些行为；目前只需注意，它们很合理。对尘埃，能量密度来自每个粒子的静质量。如果所有粒子质量都是 $m$，能量密度就是 $\rho=nm$，其中 $n$ 是数密度。由于数密度按 $a^{-3}$ 下降——共动区域的物理体积增大，而粒子总数不变——同时质量保持不变，所以预期能量密度满足 $\rho\propto a^{-3}$。

<!-- source: PDF 133; printed: 120 -->

对于辐射，宇宙膨胀时每个粒子（例如光子）的能量按 $a^{-1}$ 红移，而数密度仍满足 $n\propto a^{-3}$，所以预期 $\rho\propto a^{-4}$。最后，真空能量密度是任意物理体积中内禀且不变的能量数额；宇宙膨胀时它完全不发生红移，因此 $\rho=\text{常量}$。

这个例子让平直时空与弯曲时空的差别鲜明起来。例如，考虑我们可能很想称为“能量”的量，即能量密度在空间上的积分：$E=\int\rho a^3\,\mathrm d^3x$。这里积分边界固定在共动坐标上，所以该区域与宇宙一起膨胀；因子 $a^3$ 来自空间度规 $a^2\delta_{ij}$ 行列式的平方根。一般说来，这个数显然不守恒。对尘埃，由于 $\rho\propto a^{-3}$，宇宙膨胀时 $E$ 保持恒定；但对辐射它会减小，对真空能量则会增大。

这很令人不安，因为能量守恒是物理学最珍视的原理之一。发生了什么？一种思路来自 Noether 定理：每一种对称性都蕴含一个守恒量。能量是时间平移不变性所对应的守恒量。显然，在膨胀宇宙中，能量—动量张量定义在一个随时间变化的背景上；因此没有理由认为能量应当守恒。（用第 3.8 节将引入的语言说，就是“没有类时 Killing 向量”。）

尽管如此，我们仍称 $\nabla_\mu T^{\mu\nu}=0$ 为能量—动量守恒方程。它表达的是：能量—动量张量遵守一个确定的定律，即使并不存在一个对应于守恒能量的积分量。从平直时空过渡到弯曲时空，会在式（3.96）中引入额外的 Christoffel 符号项；粗略地说，这些项允许物质场（组成 $T^{\mu\nu}$）与引力场之间传递能量。不过，这种说法不够形式化，不应把它推得过远——事实证明，很难给引力场赋予局部能量密度，尽管在某些情况下可以做到。

当然，还有一种时间平移不变性的概念，它所指的并非背景时空，而是理论本身——也就是定义理论的方程，而非方程的某一个具体解。我们还没有建立广义相对论的动力学方程，但这些方程将会在时间平移以及任何其他坐标变换下保持不变；事实上它们必须如此。这种一般坐标不变性会对理论所允许的构型施加一组约束，通常需要更精细的分析。

最终，你应当接受平直时空和弯曲时空之间存在深刻差别；平直时空物理学中一些我们非常喜爱的概念，在这个更一般的背景中会发生重大改变。这并不意味着广义相对论有任何缺陷；它是放弃那种我们已经习以为常的刚性时空几何之后的自然结果。

<!-- source: PDF 134; printed: 121 -->

## 3.6 Riemann 曲率张量

建立了协变导数和平行移动的机制之后，我们终于可以讨论真正意义上的曲率。曲率由从联络导出的 Riemann 张量量化。这种曲率度量背后的想法是：我们知道联络的“平直性”是什么意思——与 Euclidean 或 Minkowski 度规相伴的通常（而且往往隐含使用的）Christoffel 联络有若干性质，可以看成平直性的不同表现。其中包括：绕闭合回路平行移动后向量不变；张量的协变导数彼此对易；起初平行的测地线会保持平行。我们将看到，研究这些性质中的任意一项在更一般背景下如何改变时，Riemann 张量就会出现。

我们已经用二维球面为例论证过：在弯曲空间中绕闭合回路平行移动向量，会使向量发生变换。所得变换取决于回路包围的总曲率；更有用的是对每一点处的曲率作局部描述，而这正是 Riemann 张量应当提供的内容。因此，引入 Riemann 张量的一种传统方法，是考察绕无穷小回路的平行移动。这里不走这条路，而选择更直接的方法。尽管不展开细节，仍然可以看出答案应具有什么形式。

由于时空在足够小的区域中看起来平直，我们的回路由两个无穷小向量 $A^\mu$ 和 $B^\nu$ 指定。设想平行移动向量 $V^\mu$：先沿 $A^\mu$ 方向移动，再沿 $B^\nu$ 方向移动，然后反向沿 $A^\mu$、$B^\nu$ 返回起点，如图 3.5 所示。平行移动的作用与坐标无关，所以应当有某个张量告诉我们，向量回到起点时怎样发生变化。这个变化是作用于向量的线性变换，因而涉及一个上指标和一个下指标；它还依赖于定义回路的两个向量 $A$、$B$，所以还应有两个下指标与 $A^\mu$、$B^\nu$ 缩并。此外，张量应当对这两个指标反对称，因为交换两个向量就等于沿反方向走过回路，应给出原答案的逆变换。这也符合 $A$、$B$ 为同一向量时变换应消失这一事实。

因此，我们预期向量绕回路平行移动后所经历的变化 $\delta V^\rho$ 形如

$$
\delta V^\rho
=R^\rho{}_{\sigma\mu\nu}V^\sigma A^\mu B^\nu,
\tag{3.109}
$$

其中 $R^\rho{}_{\sigma\mu\nu}$ 是称为 **Riemann 张量**（或简称曲率张量）的 $(1,3)$ 型张量。它对最后两个指标反对称：

$$
R^\rho{}_{\sigma\mu\nu}
=-R^\rho{}_{\sigma\nu\mu}.
\tag{3.110}
$$

> **图 3.5　无穷小回路。**　回路由两个向量 $A^\mu$ 与 $B^\nu$ 定义；箭头显示依次沿 $A$、$B$、$-A$、$-B$ 绕行的方向。

<!-- source: PDF 135; printed: 122 -->

当然，如果把式（3.109）当作 Riemann 张量的定义，就必须为指标次序选定一种约定。人们对于应采用哪一种约定毫无共识，所以务必小心。

根据我们对平行移动的了解，可以非常仔细地执行所需操作，考察向量在这一过程中发生什么；结果会给出用联络系数表示曲率张量的公式。不过，更快的方法是考察一个相关操作：两个协变导数的交换子。它与绕回路平行移动之间的关系应当很明显。张量沿某个方向的协变导数，测量它相对于“经过平行移动后本会具有的值”改变了多少；因为若张量沿某方向被平行移动，它沿该方向的协变导数就是零。因而，两个协变导数的交换子测量的是两种结果之差：先沿一个方向、再沿另一个方向平行移动，与以相反次序进行平行移动，如图 3.6 所示。

> **图 3.6　两个协变导数的交换子。**　四边形两条路径分别按 $\nabla_\mu$ 后 $\nabla_\nu$，以及 $\nabla_\nu$ 后 $\nabla_\mu$ 的次序作用。

实际计算非常直接。考察向量场 $V^\rho$：

$$
\begin{aligned}
[\nabla_\mu,\nabla_\nu]V^\rho
={}&\nabla_\mu\nabla_\nu V^\rho
-\nabla_\nu\nabla_\mu V^\rho\\
={}&\partial_\mu(\nabla_\nu V^\rho)
-\Gamma^\lambda{}_{\mu\nu}\nabla_\lambda V^\rho
+\Gamma^\rho{}_{\mu\sigma}\nabla_\nu V^\sigma
-(\mu\leftrightarrow\nu)\\
={}&\partial_\mu\partial_\nu V^\rho
+(\partial_\mu\Gamma^\rho{}_{\nu\sigma})V^\sigma
+\Gamma^\rho{}_{\nu\sigma}\partial_\mu V^\sigma
-\Gamma^\lambda{}_{\mu\nu}\partial_\lambda V^\rho
-\Gamma^\lambda{}_{\mu\nu}\Gamma^\rho{}_{\lambda\sigma}V^\sigma\\
&+\Gamma^\rho{}_{\mu\sigma}\partial_\nu V^\sigma
+\Gamma^\rho{}_{\mu\sigma}\Gamma^\sigma{}_{\nu\lambda}V^\lambda
-(\mu\leftrightarrow\nu)\\
={}&\left(
\partial_\mu\Gamma^\rho{}_{\nu\sigma}
-\partial_\nu\Gamma^\rho{}_{\mu\sigma}
+\Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma}
-\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma}
\right)V^\sigma
-2\Gamma^\lambda{}_{[\mu\nu]}\nabla_\lambda V^\rho.
\end{aligned}
\tag{3.111}
$$

最后一步重新标记了一些哑指标，并消去了反对称化后相消的若干项。最后一项中的反对称化联络系数 $\Gamma^\lambda{}_{[\mu\nu]}$，正好是挠率张量的一半；而左边显然是张量，所以圆括号内的表达式本身也必定是张量。写成

$$
[\nabla_\mu,\nabla_\nu]V^\rho
=R^\rho{}_{\sigma\mu\nu}V^\sigma
-T^\lambda{}_{\mu\nu}\nabla_\lambda V^\rho,
\tag{3.112}
$$

其中 Riemann 张量被确定为

$$
\boxed{
R^\rho{}_{\sigma\mu\nu}
=\partial_\mu\Gamma^\rho{}_{\nu\sigma}
-\partial_\nu\Gamma^\rho{}_{\mu\sigma}
+\Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma}
-\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma}.}
\tag{3.113}
$$

> **勘误（原书第 122 页）**　原文把式（3.111）最后一项直接称为挠率张量；作者澄清，应说“最后一项中的反对称化联络系数是挠率张量的一半”。译文已按此修正。

关于这个表达式的推导，有几点值得注意：

- 我们当然还没有证明式（3.113）确实就是式（3.109）中出现的同一个张量，但事实的确如此。习题会要求你证明这一点。
- 交换子 $[\nabla_\mu,\nabla_\nu]$ 看起来是微分算子，但它对向量场的作用（至少在无挠时）竟是简单的乘法变换，这也许令人惊讶。Riemann 张量度量协变导数交换子中与向量场成正比的部分，挠率张量则度量与向量场的协变导数成正比的部分；二阶导数完全不会出现。

<!-- source: PDF 136; printed: 123 -->

- 式（3.113）由非张量的元素构成；你可以检验各个变换律如何共同作用，使这个特定组合成为真正的张量。
- 由公式及其推导，$R^\rho{}_{\sigma\mu\nu}$ 对最后两个指标的反对称性立即可见。
- 我们完全从联络构造了曲率张量，丝毫没有提及度规。推导足够谨慎，因此无论联络是否与度规相容、是否无挠，上述表达式都成立。
- 使用现在已经熟悉的方法，可以计算 $[\nabla_\rho,\nabla_\sigma]$ 对任意秩张量的作用。答案是

$$
\begin{aligned}
[\nabla_\rho,\nabla_\sigma]
X^{\mu_1\cdots\mu_k}{}_{\nu_1\cdots\nu_l}
={}&-T^\lambda{}_{\rho\sigma}\nabla_\lambda
X^{\mu_1\cdots\mu_k}{}_{\nu_1\cdots\nu_l}\\
&+R^{\mu_1}{}_{\lambda\rho\sigma}
X^{\lambda\mu_2\cdots\mu_k}{}_{\nu_1\cdots\nu_l}
+R^{\mu_2}{}_{\lambda\rho\sigma}
X^{\mu_1\lambda\cdots\mu_k}{}_{\nu_1\cdots\nu_l}+\cdots\\
&-R^\lambda{}_{\nu_1\rho\sigma}
X^{\mu_1\cdots\mu_k}{}_{\lambda\nu_2\cdots\nu_l}
-R^\lambda{}_{\nu_2\rho\sigma}
X^{\mu_1\cdots\mu_k}{}_{\nu_1\lambda\cdots\nu_l}-\cdots .
\end{aligned}
\tag{3.114}
$$

把挠率张量和 Riemann 张量看成多重线性映射时，二者都能用向量场交换子写出优美表达式。把挠率看成由两个向量场到第三个向量场的映射，有

$$
T(X,Y)=\nabla_XY-\nabla_YX-[X,Y],
\tag{3.115}
$$

把 Riemann 张量看成由三个向量场到第四个向量场的映射，则有下面这个看起来古怪、却很标准的记号：

$$
R(X,Y)Z
=\nabla_X\nabla_YZ
-\nabla_Y\nabla_XZ
-\nabla_{[X,Y]}Z.
\tag{3.116}
$$

这里 $\nabla_X$ 表示沿向量场 $X$ 的协变导数；分量形式为 $\nabla_X=X^\mu\nabla_\mu$。例如，式（3.116）等价于

$$
\begin{aligned}
R^\rho{}_{\sigma\mu\nu}X^\mu Y^\nu Z^\sigma
={}&X^\lambda\nabla_\lambda
\left(Y^\eta\nabla_\eta Z^\rho\right)
-Y^\lambda\nabla_\lambda
\left(X^\eta\nabla_\eta Z^\rho\right)\\
&-\left(X^\lambda\partial_\lambda Y^\eta
-Y^\lambda\partial_\lambda X^\eta\right)
\nabla_\eta Z^\rho,
\end{aligned}
\tag{3.117}
$$

你可以检验它与式（3.113）等价。请注意，式（3.116）中的两个向量 $X$、$Y$，对应 Riemann 张量分量形式中的最后两个指标。

<!-- source: PDF 137; printed: 124 -->

式（3.116）最后一项包含交换子 $[X,Y]$；当 $X$、$Y$ 取为坐标基向量场时，这一项消失，因为 $[\partial_\mu,\partial_\nu]=0$。所以，我们最初对两个协变导数取交换子时没有出现这一项。以后不会大量使用这种记号，但你可能在文献中见到，因此应当能够读懂它。

我们已经把曲率张量定义为刻画联络的对象。现在要承认，GR 中最关心的是 Christoffel 联络。此时联络由度规导出，相应曲率也可以看作度规本身的曲率。凭借这个对应，终于能严格理解我们非正式的说法：度规看起来像 Euclidean 或 Minkowski 度规的空间是平直的。事实上，这个结论在两个方向上都成立：

- 如果存在一个坐标系，使度规分量为常量，那么 Riemann 张量为零。
- 如果 Riemann 张量为零，总能构造一个坐标系，使度规分量为常量。

严格说来，这些陈述应限于流形的单连通区域，即区域内所有回路都能在不离开该区域的情况下光滑收缩到一点。下面将默认满足这个条件。

第一条很容易证明。若处在某个坐标系中，使 $\partial_\sigma g_{\mu\nu}=0$ 处处成立，而不只是在一个点成立，那么 $\Gamma^\rho{}_{\mu\nu}=0$ 且 $\partial_\sigma\Gamma^\rho{}_{\mu\nu}=0$；所以由式（3.113）有 $R^\rho{}_{\sigma\mu\nu}=0$。但这是张量方程；若在一个坐标系中成立，就必在所有坐标系中成立。因此，Riemann 张量为零，是能够找到一个使 $g_{\mu\nu}$ 分量处处恒定的坐标系的必要条件。

第二条主张——$R^\rho{}_{\sigma\mu\nu}=0$ 处处成立，会蕴含存在使度规分量处处恒定的坐标系——证明起来更难一些，但也不太难。先热身：考察在某点 $p$ 定义的一形式 $\omega=\omega_\mu\,\mathrm dx^\mu$。对任意包含 $p$ 的路径 $x^\mu(\lambda)$，可以要求 $\omega_\mu$ 被平行移动，从而沿路径构造唯一的一形式场：

$$
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\nabla_\mu\omega_\nu=0.
\tag{3.118}
$$

一般来说，如果对从 $p$ 出发并经过另一点 $q$ 的不同路径执行这个过程，$q$ 点处 $\omega_\mu$ 的值会依赖于路径。然而，如果 Riemann 张量处处为零，平行移动就与路径无关，于是能在整个流形上定义唯一的一形式场。因此，式（3.118）必须对任意 $\mathrm dx^\mu/\mathrm d\lambda$ 都成立；唯有 $\omega_\mu$ 协变常量时才可能如此：

$$
\nabla_\mu\omega_\nu=0.
\tag{3.119}
$$

在任意流形上，这个方程通常没有解；这里只因假定曲率为零，解才可能存在。我们可以取——

<!-- source: PDF 138; printed: 125 -->

式（3.119）的反对称部分；由式（3.36）可知，这正是外微分：

$$
\nabla_{[\mu}\omega_{\nu]}
=\partial_{[\mu}\omega_{\nu]}=0,
\tag{3.120}
$$

或者用无指标记号写成

$$
\mathrm d\omega=0.
\tag{3.121}
$$

换言之，$\omega$ 是闭形式。由于已经限制了所研究区域的拓扑，它还是恰当形式，即存在标量函数 $\alpha$ 使 $\omega=\mathrm d\alpha$。分量形式为

$$
\omega_\mu=\partial_\mu\alpha.
\tag{3.122}
$$

一形式 $\omega$ 没有什么特殊之处，所以可以对一组一形式 $\hat\theta^{(a)}$ 重复这个过程；在 $n$ 维流形上，$a\in\{1,\ldots,n\}$。可以选择这些一形式，使其组成对偶空间 $T_p^*$ 的归一化基，并让度规关于此基的分量具有规范形式；换言之，

$$
\mathrm ds^2(p)=\eta_{ab}\,
\hat\theta^{(a)}\otimes\hat\theta^{(b)}.
\tag{3.123}
$$

这里广义地使用 $\eta_{ab}$：它是一个矩阵，每个对角元为 $+1$ 或 $-1$，其他位置为零。$+1$ 与 $-1$ 的具体排列取决于度规的规范形式，但对当前论证没有关系。

现在把整组基形式平行移动到流形各处；Riemann 张量为零确保结果与所取路径无关。由于度规关于度规相容联络总是自动被平行移动，度规分量会保持不变：

$$
\mathrm ds^2(\text{任意处})
=\eta_{ab}\,
\hat\theta^{(a)}\otimes\hat\theta^{(b)}.
\tag{3.124}
$$

这样就指定了一组一形式场；在每一点，它们都定义一个使度规分量恒定的基。这件事本身毫不起眼：无论曲率怎样，在任意流形上都能做到。我们要证明的是，它还是一个**坐标基**；这只有在曲率为零时才可能成立。然而，根据导出式（3.122）的同一论证，所有 $\hat\theta^{(a)}$ 都是恰当形式，所以存在一组函数 $y^a$，使这些一形式场就是它们的梯度：

$$
\hat\theta^{(a)}=\mathrm dy^a.
\tag{3.125}
$$

这 $n$ 个函数恰好就是所求坐标；在整个流形上，度规为

$$
\mathrm ds^2=\eta_{ab}\,\mathrm dy^a\mathrm dy^b.
\tag{3.126}
$$

<!-- source: PDF 139; printed: 126 -->

此时，如果愿意，你完全可以不再用 $a,b$ 作指标，改回 $\mu,\nu$。

至此我们验证了：Riemann 张量回答了这样一个问题——某个面目可憎的度规，是否暗中只是平直空间度规在一个古怪坐标系中的样子。计算这个度规的 Riemann 张量，如果结果为零，就知道度规平直；如果不为零，就存在曲率。

## 3.7 Riemann 张量的性质

Riemann 张量有四个指标，粗略看来，在 $n$ 维空间中应有 $n^4$ 个独立分量。实际上，反对称性（3.110）意味着最后两个指标只有 $n(n-1)/2$ 种独立取值，于是剩下 $n^3(n-1)/2$ 个独立分量。然而，当联络是 Christoffel 联络时，还有若干其他对称性，会进一步减少独立分量的数目。现在来考察它们。

> **勘误（原书第 126 页）**　作者要求把本段原文中含混的 “reduce the independent components” 明确为 “reduce the number of independent components”；译文已按“减少独立分量的数目”处理。

推导这些额外对称性的最简便方法，是考察所有指标都在下方的 Riemann 张量：

$$
R_{\rho\sigma\mu\nu}
=g_{\rho\lambda}R^\lambda{}_{\sigma\mu\nu}.
\tag{3.127}
$$

进一步考察这个张量在点 $p$ 处建立的局部惯性坐标 $x^{\hat\mu}$ 中的分量。Christoffel 符号本身会消失，但其导数不会。因此

$$
\begin{aligned}
R_{\hat\rho\hat\sigma\hat\mu\hat\nu}(p)
={}&g_{\hat\rho\hat\lambda}
\left(
\partial_{\hat\mu}\Gamma^{\hat\lambda}{}_{\hat\nu\hat\sigma}
-\partial_{\hat\nu}\Gamma^{\hat\lambda}{}_{\hat\mu\hat\sigma}
\right)\\
={}&\frac12g_{\hat\rho\hat\lambda}g^{\hat\lambda\hat\tau}
\big(
\partial_{\hat\mu}\partial_{\hat\nu}g_{\hat\sigma\hat\tau}
+\partial_{\hat\mu}\partial_{\hat\sigma}g_{\hat\tau\hat\nu}
-\partial_{\hat\mu}\partial_{\hat\tau}g_{\hat\nu\hat\sigma}\\
&\qquad
-\partial_{\hat\nu}\partial_{\hat\mu}g_{\hat\sigma\hat\tau}
-\partial_{\hat\nu}\partial_{\hat\sigma}g_{\hat\tau\hat\mu}
+\partial_{\hat\nu}\partial_{\hat\tau}g_{\hat\mu\hat\sigma}
\big)\\
={}&\frac12\big(
\partial_{\hat\mu}\partial_{\hat\sigma}g_{\hat\rho\hat\nu}
-\partial_{\hat\mu}\partial_{\hat\rho}g_{\hat\nu\hat\sigma}
-\partial_{\hat\nu}\partial_{\hat\sigma}g_{\hat\rho\hat\mu}
+\partial_{\hat\nu}\partial_{\hat\rho}g_{\hat\mu\hat\sigma}
\big).
\end{aligned}
\tag{3.128}
$$

第一行使用了 $\Gamma^{\hat\lambda}{}_{\hat\mu\hat\nu}(p)=0$；第二行使用了 Riemann 法坐标中的 $\partial_{\hat\mu}g^{\hat\lambda\hat\tau}=0$；第三行使用了偏导数可交换这一事实。由这个表达式立即可见 $R_{\rho\sigma\mu\nu}$ 的三项性质。它对前两个指标反对称：

$$
\boxed{R_{\rho\sigma\mu\nu}=-R_{\sigma\rho\mu\nu},}
\tag{3.129}
$$

并对最后两个指标反对称，这一点从式（3.110）已经知道：

$$
\boxed{R_{\rho\sigma\mu\nu}=-R_{\rho\sigma\nu\mu}.}
\tag{3.130}
$$

<!-- source: PDF 140; printed: 127 -->

它在交换第一对指标与第二对指标时不变：

$$
\boxed{R_{\rho\sigma\mu\nu}=R_{\mu\nu\rho\sigma}.}
\tag{3.131}
$$

再多做一点工作——留给你的想象力——可以看出最后三个指标的循环置换之和为零：

$$
\boxed{
R_{\rho\sigma\mu\nu}
+R_{\rho\mu\nu\sigma}
+R_{\rho\nu\sigma\mu}=0.}
\tag{3.132}
$$

给定式（3.130），很容易看出最后一项性质等价于最后三个指标的反对称部分为零：

$$
\boxed{R_{\rho[\sigma\mu\nu]}=0.}
\tag{3.133}
$$

所有这些性质都是在特殊坐标系中推导出来的，但它们全是张量方程；所以在任意坐标中都成立，指标上也就没有费事加帽。它们并不彼此独立；稍加努力就能证明，式（3.129）、（3.130）与（3.133）合起来会蕴含式（3.131）。这些方程在逻辑上怎样互相依赖，通常没有“它们确实成立”这件事重要。

给定 Riemann 张量不同分量之间的这些关系，还剩多少个独立量？先利用 $R_{\rho\sigma\mu\nu}$ 对前两个指标反对称、对后两个指标反对称，并在交换两对指标时对称这些事实。这意味着，可以把它看成一个对称矩阵 $R_{[\rho\sigma][\mu\nu]}$，其中指标对 $\rho\sigma$ 与 $\mu\nu$ 各自被当成一个指标。一个 $m\times m$ 对称矩阵有 $m(m+1)/2$ 个独立分量，一个 $n\times n$ 反对称矩阵有 $n(n-1)/2$ 个独立分量。因此共有

$$
\frac12\left[\frac12n(n-1)\right]
\left[\frac12n(n-1)+1\right]
=\frac18(n^4-2n^3+3n^2-2n)
\tag{3.134}
$$

个独立分量。还需处理额外对称性（3.133）。式（3.133）的一个直接后果是，Riemann 张量的全反对称部分为零：

$$
R_{[\rho\sigma\mu\nu]}=0.
\tag{3.135}
$$

事实上，把这个方程同其他对称性（3.129）、（3.130）及（3.131）结合起来，就足以蕴含式（3.133）；展开式（3.135）并整理所得各项，很容易证明这一点。因此，在计入其他对称性后，施加附加约束（3.135）与施加（3.133）等价。它代表多少条独立限制？设想作分解

$$
R_{\rho\sigma\mu\nu}
=X_{\rho\sigma\mu\nu}+R_{[\rho\sigma\mu\nu]}.
\tag{3.136}
$$

<!-- source: PDF 141; printed: 128 -->

很容易看出，任何全反对称的四指标张量都自动对其第一对、最后一对指标分别反对称，并在交换这两对指标时对称。因此，这些性质对 $X_{\rho\sigma\mu\nu}$ 构成独立限制，与要求（3.135）无关。一个全反对称四指标张量有 $n(n-1)(n-2)(n-3)/4!$ 项，所以式（3.135）把独立分量数减少这么多。最后剩下

$$
\frac18(n^4-2n^3+3n^2-2n)
-\frac1{24}n(n-1)(n-2)(n-3)
=\frac1{12}n^2(n^2-1)
\tag{3.137}
$$

个 Riemann 张量的独立分量。

所以在四维中，Riemann 张量有 20 个独立分量。（在一维中一个也没有。）这 20 个函数，恰好就是第 2 章首次讨论局部惯性坐标时，度规二阶导数中无法通过巧妙选择坐标而置零的 20 个自由度。这应当增强你的信心：Riemann 张量确实是恰当的曲率度量。

除了 Riemann 张量的代数对称性——它们约束任一点处的独立分量数——Riemann 张量还满足一个微分恒等式，它约束不同点处取值的相对关系。在局部惯性坐标中计算 Riemann 张量的协变导数：

$$
\begin{aligned}
\nabla_{\hat\lambda}R_{\hat\rho\hat\sigma\hat\mu\hat\nu}
&=\partial_{\hat\lambda}R_{\hat\rho\hat\sigma\hat\mu\hat\nu}\\
&=\frac12\partial_{\hat\lambda}\big(
\partial_{\hat\mu}\partial_{\hat\sigma}g_{\hat\rho\hat\nu}
-\partial_{\hat\mu}\partial_{\hat\rho}g_{\hat\nu\hat\sigma}
-\partial_{\hat\nu}\partial_{\hat\sigma}g_{\hat\rho\hat\mu}
+\partial_{\hat\nu}\partial_{\hat\rho}g_{\hat\mu\hat\sigma}
\big).
\end{aligned}
\tag{3.138}
$$

对一个只在一点成立的表达式取导数，看起来也许不合法；但我们略去的项都正比于 $\partial_{\hat\sigma}g_{\hat\mu\hat\nu}$，因而会消失。现在考察前三个指标的循环置换之和：

$$
\begin{aligned}
&\nabla_{\hat\lambda}R_{\hat\rho\hat\sigma\hat\mu\hat\nu}
+\nabla_{\hat\rho}R_{\hat\sigma\hat\lambda\hat\mu\hat\nu}
+\nabla_{\hat\sigma}R_{\hat\lambda\hat\rho\hat\mu\hat\nu}\\
&=\frac12\big(
\partial_{\hat\lambda}\partial_{\hat\mu}\partial_{\hat\sigma}g_{\hat\rho\hat\nu}
-\partial_{\hat\lambda}\partial_{\hat\mu}\partial_{\hat\rho}g_{\hat\nu\hat\sigma}
-\partial_{\hat\lambda}\partial_{\hat\nu}\partial_{\hat\sigma}g_{\hat\rho\hat\mu}
+\partial_{\hat\lambda}\partial_{\hat\nu}\partial_{\hat\rho}g_{\hat\mu\hat\sigma}\\
&\qquad
+\partial_{\hat\rho}\partial_{\hat\mu}\partial_{\hat\lambda}g_{\hat\sigma\hat\nu}
-\partial_{\hat\rho}\partial_{\hat\mu}\partial_{\hat\sigma}g_{\hat\nu\hat\lambda}
-\partial_{\hat\rho}\partial_{\hat\nu}\partial_{\hat\lambda}g_{\hat\sigma\hat\mu}
+\partial_{\hat\rho}\partial_{\hat\nu}\partial_{\hat\sigma}g_{\hat\mu\hat\lambda}\\
&\qquad
+\partial_{\hat\sigma}\partial_{\hat\mu}\partial_{\hat\rho}g_{\hat\lambda\hat\nu}
-\partial_{\hat\sigma}\partial_{\hat\mu}\partial_{\hat\lambda}g_{\hat\nu\hat\rho}
-\partial_{\hat\sigma}\partial_{\hat\nu}\partial_{\hat\rho}g_{\hat\lambda\hat\mu}
+\partial_{\hat\sigma}\partial_{\hat\nu}\partial_{\hat\lambda}g_{\hat\mu\hat\rho}
\big)\\
&=0.
\end{aligned}
\tag{3.139}
$$

同样，由于这是张量之间的方程，尽管在特殊坐标系中推导，它仍在任意坐标系中成立。利用反对称性 $R_{\rho\sigma\mu\nu}=-R_{\sigma\rho\mu\nu}$，可把结果写成

$$
\nabla_{[\lambda}R_{\rho\sigma]\mu\nu}=0.
\tag{3.140}
$$

这称为 **Bianchi 恒等式**。对一般联络，还会有涉及挠率张量的额外项。它与 Jacobi 恒等式密切相关——

<!-- source: PDF 142; printed: 129 -->

回想用协变导数交换子定义 Riemann 张量的方式，它表达的是

$$
[[\nabla_\lambda,\nabla_\rho],\nabla_\sigma]
+[[\nabla_\rho,\nabla_\sigma],\nabla_\lambda]
+[[\nabla_\sigma,\nabla_\lambda],\nabla_\rho]=0.
\tag{3.141}
$$

Riemann 张量有四个指标。有时，把一个张量表示成若干部分之和很有用，因为每个部分单独处理起来更容易，而且可能有直接的物理解释。诀窍是以坐标不变的方式来做。例如，可以把 Riemann 张量分成 $R^\rho{}_{\sigma ij}$ 与 $R^\rho{}_{\sigma i0}$，并由它们重建整个张量，因为 $R^\rho{}_{\sigma00}$ 为零。但这种分解显然不在基变换下保持不变；我们要寻找的是改变坐标时仍得到保持的分解。实际上，这就是在考察 Lorentz 群的表示。

我们有两种基本技巧：取缩并，以及取对称部分或反对称部分。例如，给定任意 $(0,2)$ 型张量 $X_{\mu\nu}$，可以把它分解为对称部分和反对称部分：

$$
X_{\mu\nu}=X_{(\mu\nu)}+X_{[\mu\nu]},
\tag{3.142}
$$

对称部分还可进一步分成迹 $X=g^{\mu\nu}X_{(\mu\nu)}$ 与无迹部分 $\widehat X_{\mu\nu}=X_{(\mu\nu)}-\frac1nXg_{\mu\nu}$，于是

$$
X_{\mu\nu}
=\frac1nXg_{\mu\nu}
+\widehat X_{\mu\nu}
+X_{[\mu\nu]}.
\tag{3.143}
$$

（请注意，$X_{[\mu\nu]}$ 自动无迹。）改变坐标时，各个部分 $Xg_{\mu\nu}$、$\widehat X_{\mu\nu}$ 和 $X_{[\mu\nu]}$ 分别旋转到自身之中，而不会彼此混合；我们说，它们定义了 $(0,2)$ 型张量空间的“不变子空间”。对更复杂的张量，对应分解可能没有这么简单。

对于 Riemann 张量，第一步是取一次缩并，得到 **Ricci 张量**：

$$
\boxed{R_{\mu\nu}=R^\lambda{}_{\mu\lambda\nu}.}
\tag{3.144}
$$

对由任意联络——未必是 Christoffel 联络——形成的曲率张量，可以取若干种彼此独立的缩并。我们主要关心 Christoffel 联络；对它而言，式（3.144）是唯一的独立缩并，其余缩并要么为零，要么与它有关。Christoffel 联络的 Ricci 张量由 Riemann 张量的对称性自动保证为对称张量：

$$
\boxed{R_{\mu\nu}=R_{\nu\mu}.}
\tag{3.145}
$$

Ricci 张量的迹称为 **Ricci 标量**（或标量曲率）。

<!-- source: PDF 143; printed: 130 -->

$$
\boxed{R=R^\mu{}_\mu=g^{\mu\nu}R_{\mu\nu}.}
\tag{3.146}
$$

还可以构造无迹部分 $\widehat R_{\mu\nu}=R_{\mu\nu}-\frac1nRg_{\mu\nu}$，但事实证明它并没有特别大的用处；更常见的是直接用 $R_{\mu\nu}$ 和 $R$ 表示各种量。

Ricci 张量和 Ricci 标量包含 Riemann 张量各个迹的全部信息，剩下的是无迹部分。这些部分由 **Weyl 张量**捕获；Weyl 张量基本上就是去掉所有缩并后的 Riemann 张量。在 $n$ 维中，它为

$$
C_{\rho\sigma\mu\nu}
=R_{\rho\sigma\mu\nu}
-\frac{2}{n-2}
\left(g_{\rho[\mu}R_{\nu]\sigma}
-g_{\sigma[\mu}R_{\nu]\rho}\right)
+\frac{2}{(n-1)(n-2)}
g_{\rho[\mu}g_{\nu]\sigma}R.
\tag{3.147}
$$

这个繁复公式被专门设计成让 $C_{\rho\sigma\mu\nu}$ 所有可能的缩并都消失，同时保留 Riemann 张量的对称性：

$$
\begin{gathered}
C_{\rho\sigma\mu\nu}=C_{[\rho\sigma][\mu\nu]},\\
C_{\rho\sigma\mu\nu}=C_{\mu\nu\rho\sigma},\\
C_{\rho[\sigma\mu\nu]}=0.
\end{gathered}
\tag{3.148}
$$

Weyl 张量只在三维及更高维中定义，而且在三维中恒等于零。它最重要的性质之一，是在共形变换下保持不变（见附录 G）。这意味着：先为某个度规 $g_{\mu\nu}$ 计算 $C^\rho{}_{\sigma\mu\nu}$——注意第一个指标在上方——再为度规 $\omega^2(x)g_{\mu\nu}$ 重新计算，其中 $\omega(x)$ 是时空上任意处处非零的函数，所得答案相同。因此，Weyl 张量常被称为**共形张量**。

> **勘误（原书第 130 页）**　式（3.148）后原文笼统写作 “the Appendices”；作者勘误指定应为 **Appendix G**，译文已改为“附录 G”。

Bianchi 恒等式一种格外有用的形式，来自对式（3.139）作两次缩并：

$$
\begin{aligned}
0
&=g^{\nu\sigma}g^{\mu\lambda}
\left(
\nabla_\lambda R_{\rho\sigma\mu\nu}
+\nabla_\rho R_{\sigma\lambda\mu\nu}
+\nabla_\sigma R_{\lambda\rho\mu\nu}
\right)\\
&=\nabla^\mu R_{\rho\mu}
-\nabla_\rho R
+\nabla^\nu R_{\rho\nu},
\end{aligned}
\tag{3.149}
$$

即

$$
\nabla^\mu R_{\rho\mu}=\frac12\nabla_\rho R.
\tag{3.150}
$$

请注意，与偏导数不同，由于度规相容性，给协变导数的指标作升降是有意义的。定义 **Einstein 张量**如下。

<!-- source: PDF 144; printed: 131 -->

$$
\boxed{G_{\mu\nu}=R_{\mu\nu}-\frac12Rg_{\mu\nu}.}
\tag{3.151}
$$

在四维中，可以把 Einstein 张量看成 Ricci 张量的迹反转版本。于是，两次缩并的 Bianchi 恒等式（3.150）等价于

$$
\boxed{\nabla^\mu G_{\mu\nu}=0.}
\tag{3.152}
$$

Ricci 张量和度规都对称，所以 Einstein 张量也对称；它在广义相对论中将极为重要。

此处应停下来，把已经发展的形式体系与曲率的直觉概念作对比。遗憾的是，我们的直觉受到一个事实的污染：我们习惯于想象一维、二维空间嵌入我们所居住的、近似 Euclidean 的空间中。例如，我们认为直线没有曲率，而圆周 $S^1$ 是弯曲的。然而根据式（3.137），Riemann 张量在一、二、三、四维中分别有 0、1、6、20 个独立分量。（这些例子中关于曲率的一切陈述，指的都是 Christoffel 联络、因而也是度规所伴随的曲率。）所以，像 $S^1$ 这样的一维空间不可能具有我们所定义的任何曲率。

这个表面矛盾来自：我们的直观曲率概念依赖于流形的**外禀几何**，它描述空间怎样嵌入某个更大的空间；Riemann 曲率则是空间**内禀几何**的性质，可以由局限在流形内部的观测者测量。生活在圆周上、无法接触更大世界的生物，必定会认为自己生活在平直几何中——例如，那里根本无法构造非退化的无穷小回路，让向量绕回路平行移动后以旋转过的方向返回。附录 D 讨论的外禀曲率，在 GR 中描述时空子流形时偶尔有用；但大多数时候我们关心的是时空本身的内禀几何，它不依赖任何嵌入。

可以用一个二维例子进一步说明内禀与外禀的区别；二维曲率只有一个独立分量。事实上，曲率的全部信息都包含在 Ricci 标量的单个分量中。考察图 3.7 所示的环面，它可以看成平面中的正方形区域，把相对两边分别等同起来；拓扑上是 $S^1\times S^1$。嵌入三维空间的环面从我们的视角看起来弯曲，但显然可以给它赋予一个度规，使其分量在适当坐标系中为常量：只需把它展开，并使用平面的 Euclidean 度规 $\mathrm ds^2=\mathrm dx^2+\mathrm dy^2$。在这个度规下，环面是平直的。

<!-- source: PDF 145; printed: 132 -->

> **图 3.7　平直环面的表示。**　把环面看成平直空间中的正方形，并把相对两边等同。图中左边是嵌入三维空间的环面，右边是正方形基本域；虚线箭头和“identify”标注说明对应边的等同。

也完全可以引入另一个度规，让环面并不平直；这里要强调的是，存在某个度规可使它平直。每当把流形嵌入更大的空间，流形都会从它所嵌入的背景继承一个“诱导度规”，如附录 A 所述。这里的要点是：嵌入平直三维 Euclidean 空间的环面具有弯曲的诱导度规，但仍可选择在环面上放置另一个度规，使其内禀几何平直。

下面转向一个曲率不为零的简单例子。我们已经讨论过二维球面 $S^2$，其度规为

$$
\mathrm ds^2=a^2(\mathrm d\theta^2+\sin^2\theta\,\mathrm d\phi^2),
\tag{3.153}
$$

其中 $a$ 是球面的半径。如果球面嵌入 $\mathbb R^3$，$a$ 确实就是通常意义上的半径；即使没有任何嵌入，我们仍可以把它称为半径。生活在球面上的二维人，可以测量球面面积，除以 $4\pi$，再开平方，从而算出 $a$；把这个量叫作“半径”只是一种方便说法。还应指出，“球面”有时只在较弱的拓扑意义上使用，并不假定任何特定度规；这里所用度规称为**圆度规**。

不展开计算细节，式（3.153）的非零联络系数为

$$
\begin{gathered}
\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta,\\
\Gamma^\phi{}_{\theta\phi}
=\Gamma^\phi{}_{\phi\theta}=\cot\theta.
\end{gathered}
\tag{3.154}
$$

来计算 Riemann 张量一个看起来有希望的分量：

$$
\begin{aligned}
R^\theta{}_{\phi\theta\phi}
&=\partial_\theta\Gamma^\theta{}_{\phi\phi}
-\partial_\phi\Gamma^\theta{}_{\theta\phi}
+\Gamma^\theta{}_{\theta\lambda}\Gamma^\lambda{}_{\phi\phi}
-\Gamma^\theta{}_{\phi\lambda}\Gamma^\lambda{}_{\theta\phi}\\
&=(\sin^2\theta-\cos^2\theta)-(0)+(0)
-(-\sin\theta\cos\theta)(\cot\theta)\\
&=\sin^2\theta.
\end{aligned}
\tag{3.155}
$$

这里的记号显然并不完美：希腊字母 $\lambda$ 是一个需要求和的哑指标，而希腊字母 $\theta$ 和 $\phi$ 却代表特定坐标。把一个指标降下来，得到

<!-- source: PDF 146; printed: 133 -->

$$
\begin{aligned}
R_{\theta\phi\theta\phi}
&=g_{\theta\lambda}R^\lambda{}_{\phi\theta\phi}\\
&=g_{\theta\theta}R^\theta{}_{\phi\theta\phi}\\
&=a^2\sin^2\theta.
\end{aligned}
\tag{3.156}
$$

不难检查，Riemann 张量的每个分量要么为零，要么可以利用对称性化成这个分量。接下来可由 $R_{\mu\nu}=g^{\alpha\beta}R_{\alpha\mu\beta\nu}$ 计算 Ricci 张量，结果为

$$
\begin{aligned}
R_{\theta\theta}
&=g^{\phi\phi}R_{\phi\theta\phi\theta}=1,\\
R_{\theta\phi}&=R_{\phi\theta}=0,\\
R_{\phi\phi}
&=g^{\theta\theta}R_{\theta\phi\theta\phi}=\sin^2\theta.
\end{aligned}
\tag{3.157}
$$

Ricci 标量同样很容易求得：

$$
R=g^{\theta\theta}R_{\theta\theta}
+g^{\phi\phi}R_{\phi\phi}
=\frac{2}{a^2}.
\tag{3.158}
$$

因此，对于二维流形而言能够完全刻画曲率的 Ricci 标量，在整个二维球面上是一个常量。若扰动这个度规——物理上对应于在球面上制造一些凸起——情形便会改变。还要注意，球面半径越大，标量曲率越小。即使在更一般的背景下，我们有时也会用流形的“曲率半径”表示曲率发生变化所跨越的长度尺度；曲率半径越大，曲率本身越小。

## 3.8 对称性与 Killing 向量

真实世界相当杂乱，我们不可能找到一个度规，以完美精度描述实际宇宙，甚至也无法这样描述其中任何一小部分。我们会根据所研究的物理情形，用各种适当的近似来建立时空模型。例如，一颗恒星或行星外部的几何，可以在某个精度阶数上近似为球对称，即使真实情形对这种对称性存在小偏离；这些偏离可以稍后作为微扰加入。

因此，广义相对论与其他物理学领域一样，对具有对称性的解格外感兴趣。事实上，这类性质在 GR 中可能比在电磁学等理论中更加关键，因为 Einstein 方程的非线性性质——下一章会讨论——使任何精确解都很难找到。然而，在弯曲时空的背景下，我们必须比平时更加

<!-- source: PDF 147; printed: 134 -->

谨慎地说明“对称性”究竟指什么。本节将发展一些研究对称性的有用工具；更深入的讨论见附录 B。

如果某种把流形 $M$ 映到自身的变换保持几何不变，也就是说，从一点到另一点时度规在某种意义上保持相同，我们就认为流形 $M$ 具有一种对称性。事实上，不同张量场可以有不同的对称性；度规的对称性称为**等距映射**（isometry）。有时等距映射的存在显而易见。以四维 Minkowski 空间为例：

$$
\mathrm ds^2
=\eta_{\mu\nu}\,\mathrm dx^\mu\mathrm dx^\nu
=-\mathrm dt^2+\mathrm dx^2+\mathrm dy^2+\mathrm dz^2.
\tag{3.159}
$$

我们知道这个空间存在若干等距映射，其中包括平移（$x^\mu\to x^\mu+a^\mu$，$a^\mu$ 固定）和 Lorentz 变换（$x^\mu\to\Lambda^\mu{}_{\nu}x^\nu$，$\Lambda^\mu{}_{\nu}$ 是 Lorentz 变换矩阵）。度规在平移下保持不变这一事实，可以从度规系数 $\eta_{\mu\nu}$ 不依赖任何单独坐标函数 $x^\mu$ 立刻看出。一般地，只要对某个固定的 $\sigma_*$（但对所有 $\mu$、$\nu$）有 $\partial_{\sigma_*}g_{\mu\nu}=0$，沿 $x^{\sigma_*}$ 的平移就是一种对称性：

$$
\partial_{\sigma_*}g_{\mu\nu}=0
\quad\Longrightarrow\quad
x^{\sigma_*}\longrightarrow x^{\sigma_*}+a^{\sigma_*}
\text{ 是一种对称性。}
\tag{3.160}
$$

细心的读者会注意到，我们仍未精确定义“对称性”的含义。粗略说来，我们设想度规在某种变换下保持不变；其精确定义要到附录 B 才会建立。另外，式（3.160）中的蕴含箭头只朝一个方向。若能有一条简洁判据，用于判断一个给定变换何时算作对称性，自然会更理想；很快就会得到这样的判据。

式（3.160）这一类等距映射，会立刻影响测地线方程所描述的测试粒子运动。回顾式（3.61），至少对于类时路径，可以用四动量 $p^\mu=mU^\mu$ 把测地线方程写成

$$
p^\lambda\nabla_\lambda p^\mu=0.
\tag{3.161}
$$

由于度规相容性，可以自由地把指标 $\mu$ 降下来；随后展开协变导数，得到

$$
p^\lambda\partial_\lambda p_\mu
-\Gamma^\sigma{}_{\lambda\mu}p^\lambda p_\sigma=0.
\tag{3.162}
$$

第一项告诉我们动量分量沿路径怎样变化：

$$
p^\lambda\partial_\lambda p_\mu
=m\frac{\mathrm dx^\lambda}{\mathrm d\tau}\partial_\lambda p_\mu
=m\frac{\mathrm dp_\mu}{\mathrm d\tau},
\tag{3.163}
$$

<!-- source: PDF 148; printed: 135 -->

而第二项为

$$
\Gamma^\sigma{}_{\lambda\mu}p^\lambda p_\sigma
=\frac12g^{\sigma\nu}
\left(\partial_\lambda g_{\mu\nu}
+\partial_\mu g_{\nu\lambda}
-\partial_\nu g_{\lambda\mu}\right)p^\lambda p_\sigma
\tag{3.164}
$$

$$
\Gamma^\sigma{}_{\lambda\mu}p^\lambda p_\sigma
=\frac12
\left(\partial_\lambda g_{\mu\nu}
+\partial_\mu g_{\nu\lambda}
-\partial_\nu g_{\lambda\mu}\right)p^\lambda p^\nu
\tag{3.165}
$$

$$
\Gamma^\sigma{}_{\lambda\mu}p^\lambda p_\sigma
=\frac12\left(\partial_\mu g_{\nu\lambda}\right)p^\lambda p^\nu.
\tag{3.166}
$$

从第二行到第三行时，利用了 $p^\lambda p^\nu$ 的对称性。于是，在尚未对对称性作任何假设的情况下，测地线方程可以写成

$$
m\frac{\mathrm dp_\mu}{\mathrm d\tau}
=\frac12\left(\partial_\mu g_{\nu\lambda}\right)p^\lambda p^\nu.
\tag{3.167}
$$

所以，如果所有度规系数都与坐标 $x^{\sigma_*}$ 无关，这种等距映射就意味着动量分量 $p_{\sigma_*}$ 是运动的守恒量：

$$
\partial_{\sigma_*}g_{\mu\nu}=0
\quad\Longrightarrow\quad
\frac{\mathrm dp_{\sigma_*}}{\mathrm d\tau}=0.
\tag{3.168}
$$

虽然以上推导只针对类时测地线，但这个结论对任何测地线都成立。等距映射所蕴含的守恒量，对于研究弯曲背景中的测试粒子运动极为有用。

当然，度规分量与一个或多个坐标无关会蕴含等距映射的存在，其逆命题却未必成立。例如，Lorentz 变换下的对称性，并没有表现为 $\eta_{\mu\nu}$ 与某些坐标无关。事实上，四维中有四类平移和六类 Lorentz 变换，总计十类，显然超过了度规可能不依赖的坐标数目。此外，很容易变换到某个复杂坐标系，使平移对称性也不再明显。这样的坐标变换会改变量度规分量，却不会改变底层几何；而对称性真正刻画的正是底层几何。显然，我们需要一种更系统的方法。

把式（3.168）右侧那个表示某一动量分量恒定的方程，改写成更明显协变的形式，就能建立这样的方法。假设 $g_{\mu\nu}$ 不依赖坐标 $x^{\sigma_*}$，考察向量 $\partial_{\sigma_*}$，并把它记作 $K$：

$$
K=\partial_{\sigma_*},
\tag{3.169}
$$

用分量记号等价地写成

$$
K^\mu=(\partial_{\sigma_*})^\mu=\delta^\mu{}_{\sigma_*}.
\tag{3.170}
$$

我们说向量 $K^\mu$ **生成**这个等距映射；意思是，使几何保持不变的变换，在无穷小层面表现为沿 $K^\mu$ 方向的运动。

<!-- source: PDF 149; printed: 136 -->

这个概念还会在附录 B 中得到更完整的发展。用这一向量，那看起来并不协变的量 $p_{\sigma_*}$ 可简单写成

$$
p_{\sigma_*}=K^\nu p_\nu=K_\nu p^\nu.
\tag{3.171}
$$

与此同时，这个标量沿路径恒定，等价于它沿测地线的方向导数为零：

$$
\frac{\mathrm dp_{\sigma_*}}{\mathrm d\tau}=0
\quad\Longleftrightarrow\quad
p^\mu\nabla_\mu(K_\nu p^\nu)=0.
\tag{3.172}
$$

展开右侧表达式，得到

$$
\begin{aligned}
p^\mu\nabla_\mu(K_\nu p^\nu)
&=p^\mu K_\nu\nabla_\mu p^\nu
+p^\mu p^\nu\nabla_\mu K_\nu\\
&=p^\mu p^\nu\nabla_\mu K_\nu\\
&=p^\mu p^\nu\nabla_{(\mu}K_{\nu)}.
\end{aligned}
\tag{3.173}
$$

第二行调用了测地线方程 $p^\mu\nabla_\mu p^\nu=0$。第三行使用了 $p^\mu p^\nu$ 在 $\mu$、$\nu$ 上自动对称这一事实，因此 $\nabla_\mu K_\nu$ 中只有对称部分可能有贡献。由此可知，任何满足 $\nabla_{(\mu}K_{\nu)}=0$ 的向量 $K_\mu$，都使 $K_\nu p^\nu$ 沿测地线轨迹守恒：

$$
\boxed{
\nabla_{(\mu}K_{\nu)}=0
\quad\Longrightarrow\quad
p^\mu\nabla_\mu(K_\nu p^\nu)=0.}
\tag{3.174}
$$

左边的方程称为 **Killing 方程**，满足它的向量场称为 **Killing 向量场**，简称 **Killing 向量**。可以自行验证：若度规与某个坐标 $x^{\sigma_*}$ 无关，向量 $\partial_{\sigma_*}$ 就满足 Killing 方程。事实上，只要向量 $K^\mu$ 满足 Killing 方程，总能找到一个使 $K=\partial_{\sigma_*}$ 的坐标系；但一般无法找到一个坐标系，让所有 Killing 向量同时具有这种形式，而且向量满足 Killing 方程也不要求它预先写成这种形式。

如附录 B 所探讨的，流形上的 Killing 向量场与该流形度规的连续对称性一一对应。每个 Killing 向量都意味着存在与测地运动相关的守恒量。这个结论可以从物理上理解：根据定义，度规沿 Killing 向量方向不发生变化。粗略地说，自由粒子在这个方向上感受不到力，其动量在该方向上的分量因此守恒。事实上，把用于证明“若 $\nabla_{(\mu}K_{\nu)}=0$，则 $K_\nu p^\nu$ 沿测地线守恒”的同类推理推广到更多指标即可得到：**Killing 张量**是一个对称的 $l$ 指标张量 $K_{\nu_1\cdots\nu_l}$，它满足 Killing 方程的自然推广，并通过与 $l$ 份

<!-- source: PDF 150; printed: 137 -->

动量缩并而导出相应的守恒量：

$$
\nabla_{(\mu}K_{\nu_1\cdots\nu_l)}=0
\quad\Longrightarrow\quad
p^\mu\nabla_\mu
\left(K_{\nu_1\cdots\nu_l}p^{\nu_1}\cdots p^{\nu_l}\right)=0.
\tag{3.175}
$$

> **勘误（原书第 136 页）**　原段因句首多出的 “using” 和错误的标点而语法断裂；这里已按作者勘误恢复为“同类推理可以推广到更多指标：Killing 张量……”这一完整论述。

Killing 张量的简单例子包括度规本身，以及 Killing 向量张量积的对称化。Killing 张量与时空对称性之间没有简单关系，但它们会简化我们对旋转黑洞和膨胀宇宙的分析。

Killing 向量的导数可以借助下式与 Riemann 张量联系起来：

$$
\nabla_\mu\nabla_\sigma K^\rho
=R^\rho{}_{\sigma\mu\nu}K^\nu,
\tag{3.176}
$$

习题会要求你证明这个关系。对该式作缩并，得到

$$
\nabla_\mu\nabla_\sigma K^\mu
=R_{\sigma\nu}K^\nu.
\tag{3.177}
$$

这些关系再配合 Bianchi 恒等式和 Killing 方程，就足以证明 Ricci 标量沿 Killing 向量场的方向导数为零：

$$
K^\lambda\nabla_\lambda R=0.
\tag{3.178}
$$

最后这个事实再次体现了几何沿 Killing 向量场不发生变化这一思想。

类时 Killing 向量除了会给单个粒子的运动带来守恒量，还允许我们为整个时空定义一个守恒能量。给定 Killing 向量 $K_\nu$ 和守恒的能量—动量张量 $T^{\mu\nu}$，可以构造流

$$
J_T^\mu=K_\nu T^{\mu\nu},
\tag{3.179}
$$

它自动守恒：

$$
\begin{aligned}
\nabla_\mu J_T^\mu
&=(\nabla_\mu K_\nu)T^{\mu\nu}
+K_\nu(\nabla_\mu T^{\mu\nu})\\
&=0.
\end{aligned}
\tag{3.180}
$$

第一项因 Killing 方程而消失——上指标的对称性会自动把下指标对称化；第二项因 $T^{\mu\nu}$ 的守恒而消失。如果 $K_\mu$ 类时，就可以在类空超曲面 $\Sigma$ 上积分，定义总能量

$$
E_T=\int_\Sigma J_T^\mu n_\mu\sqrt{\gamma}\,\mathrm d^3x,
\tag{3.181}
$$

其中 $\gamma_{ij}$ 是 $\Sigma$ 上的诱导度规，$n_\mu$ 是 $\Sigma$ 的法向量。附录 E 讨论超曲面上的积分，尤其讨论 Stokes 定理；按照那里的说明，在任何类空

<!-- source: PDF 151; printed: 138 -->

超曲面上积分，$E_T$ 都会取相同的值，因而守恒。这个结果与 3.5 节的讨论吻合得很好：我们在那里发现，总能量在膨胀宇宙中通常并不守恒；膨胀意味着度规随时间变化，所以这个方向上不存在等距映射。当存在类时 Killing 向量时，可以把度规写成与类时坐标无关的形式，Noether 定理就会给出一个守恒能量。类似地，可以用类空 Killing 向量构造守恒动量（或角动量）。

在任何给定时空中实际求解 Killing 方程，可能简单也可能不简单；不过，经常可以通过观察直接写出一些 Killing 向量。（一般度规当然根本没有 Killing 向量，但为了让问题保持简单，我们常常处理高度对称的度规。）例如，对度规 $\mathrm ds^2=\mathrm dx^2+\mathrm dy^2+\mathrm dz^2$ 的 $\mathbb R^3$，度规分量与 $x$、$y$、$z$ 无关，立刻给出三个 Killing 向量：

$$
\begin{aligned}
X^\mu&=(1,0,0),\\
Y^\mu&=(0,1,0),\\
Z^\mu&=(0,0,1).
\end{aligned}
\tag{3.182}
$$

它们显然表示三个平移。$\mathbb R^3$ 还有三个旋转对称性，形式略复杂一些。为了找到它们，先设想变换到极坐标：

$$
\begin{aligned}
x&=r\sin\theta\cos\phi,\\
y&=r\sin\theta\sin\phi,\\
z&=r\cos\theta,
\end{aligned}
\tag{3.183}
$$

此时度规变成

$$
\mathrm ds^2
=\mathrm dr^2+r^2\mathrm d\theta^2
+r^2\sin^2\theta\,\mathrm d\phi^2.
\tag{3.184}
$$

现在，度规——仍是同一个度规，只是换了坐标系——显然与 $\phi$ 无关。因此我们知道 $R=\partial_\phi$ 是 Killing 向量。变换回 Cartesian 坐标，得到

$$
R=-y\partial_x+x\partial_y.
\tag{3.185}
$$

所以它的 Cartesian 分量为 $R^\mu=(-y,x,0)$。由于它表示绕 $z$ 轴的旋转，很容易猜出全部三个旋转 Killing 向量的分量：

$$
\begin{aligned}
R^\mu&=(-y,\phantom{-}x,\phantom{-}0),\\
S^\mu&=(\phantom{-}z,\phantom{-}0,-x),\\
T^\mu&=(\phantom{-}0,-z,\phantom{-}y),
\end{aligned}
\tag{3.186}
$$

<!-- source: PDF 152; printed: 139 -->

它们分别表示绕 $z$、$y$、$x$ 轴的旋转。可以自行检查，它们的确求解了 Killing 方程。整体符号无关紧要，因为一个 Killing 向量乘以负号后仍是 Killing 向量。

这个练习直接给出了二维球面 $S^2$ 的 Killing 向量，其度规为

$$
\mathrm ds^2=\mathrm d\theta^2+\sin^2\theta\,\mathrm d\phi^2.
\tag{3.187}
$$

可以把这个球面理解为 $\mathbb R^3$ 中到原点距离为 1 的点集，而所有旋转 Killing 向量都会把这种球面旋转到自身，所以它们也表示 $S^2$ 的对称性。为了得到这些向量在坐标基下的显式表示，先把三维向量（3.186）变换到极坐标 $x^{\mu'}=(r,\theta,\phi)$。直接计算可得

$$
\begin{aligned}
R&=\partial_\phi,\\
S&=\cos\phi\,\partial_\theta
-\cot\theta\sin\phi\,\partial_\phi,\\
T&=-\sin\phi\,\partial_\theta
-\cot\theta\cos\phi\,\partial_\phi.
\end{aligned}
\tag{3.188}
$$

注意，它们都没有沿 $\partial_r$ 的分量，这对于旋转等距映射是合理的。因此，式（3.188）给出的 $\mathbb R^3$ 三个旋转 Killing 向量，与 $S^2$ 在球极坐标中的三个 Killing 向量完全相同。

在 $n\geq2$ 维中，Killing 向量的数量可以多于维数。原因是，一组 Killing 向量场可以线性无关，即使在流形的任意一个点上，这些向量在该点的取值彼此线性相关。很容易证明——所以你应该亲自做一遍——Killing 向量以常系数作线性组合后仍是 Killing 向量；在这种情况下，该线性组合不算作一个独立的 Killing 向量。若系数随流形上的位置变化，这个结论一般不成立。还可以证明，两个 Killing 向量场的对易子仍是 Killing 向量场；这一点非常有用，但对易子给出的向量场可能并不线性独立，也可能直接为零。因此，找出一个度规的所有 Killing 向量多少有些棘手，答案并非总能一眼看出。

## 3.9 最大对称空间

一个空间最多能有多强的对称性？具有最高可能对称程度的例子，是带平直 Euclidean 度规的 $\mathbb R^n$。从这些变换在某个固定点 $p$ 邻域内所做的事情出发，考察这个空间的等距映射；我们知道，它们是 $n$ 维中的平移和旋转。平移会移动这个点；点可以沿 $n$ 条独立坐标轴移动，因此共有 $n$ 个平移。以 $p$ 为中心的旋转会保持 $p$ 不动；可以把它们理解为把通过 $p$ 的一条坐标轴转向另一条坐标轴。

<!-- source: PDF 153; printed: 140 -->

共有 $n$ 条坐标轴，每条轴都可以转向其余 $n-1$ 条轴；不过，把 $y$ 转向 $x$ 的旋转不能与把 $x$ 转向 $y$ 的旋转重复计数。因此，独立旋转的总数是 $\tfrac12n(n-1)$。于是 $\mathbb R^n$ 共有

$$
n+\frac12n(n-1)=\frac12n(n+1)
\tag{3.189}
$$

个独立对称性。不过，我们的计数论证只涉及对称性在 $p$ 邻域中的行为，并未涉及流形整体；所以即使存在曲率，计数也应相同。若度规号差并非 Euclidean，其中一些旋转实际上会成为 boost，但计数仍然一样。当然，等距映射的数量就是线性无关 Killing 向量场的数量。因此，我们把具有 $\tfrac12n(n+1)$ 个 Killing 向量的 $n$ 维流形称为**最大对称空间**。最熟悉的最大对称空间例子，是 $n$ 维 Euclidean 空间 $\mathbb R^n$ 和 $n$ 维球面 $S^n$。对于 $n$ 维球面，我们通常把它的等距映射看成 $\tfrac12n(n+1)$ 个独立旋转，而不把它们看成旋转与平移的某种混合。不过，只要考察这些旋转对某个固定点 $p$ 的作用，短暂思考就会发现，整组旋转可以分解为绕该点的 $\tfrac12n(n-1)$ 个旋转——它们保持 $p$ 不动——以及另外 $n$ 个沿各方向移动 $p$ 的变换，与 $\mathbb R^n$ 中的情形完全一样。

若流形最大对称，曲率在各处都相同——这由类似平移的等距映射体现——而且在每个方向上都相同——这由类似旋转的等距映射体现。因此，只要知道最大对称空间在一点处的曲率，就知道了它在所有地方的曲率。事实上，可能的最大对称空间只有少数几类；可用标量曲率 $R$（它在各处恒定）、维数 $n$、度规号差，以及可能与整体拓扑有关的一些离散信息来分类。例如，这类信息可区分 $n$ 维环面与 $\mathbb R^n$，也可区分大小不同的环面。由此可见，我们应当能够仅从 Ricci 标量 $R$ 重建这种空间的整个 Riemann 张量。下面来看具体做法。

基本思想很简单：几何在所有方向上看起来都一样，因此曲率张量也应当在所有方向上看起来一样。这究竟意味着什么？先在某点 $p$ 选取局部惯性坐标，使 $g_{\hat\mu\hat\nu}=\eta_{\hat\mu\hat\nu}$。局部惯性坐标当然不唯一；例如，可以在 $p$ 点作 Lorentz 变换，度规分量仍会是 $\eta_{\hat\mu\hat\nu}$。（这里所说的“作 Lorentz 变换”，实际上指改变 $T_p$ 中的基向量；在弯曲时空中，这种操作只在单个点有意义，无法扩展到一个区域。）由于几何最大对称，我们希望 Riemann 张量也具有同样性质：$R_{\hat\rho\hat\sigma\hat\mu\hat\nu}$ 的分量在 Lorentz 变换下也不应改变，因为时空中没有任何优先方向。然而，确有一些张量在 Lorentz 变换下不改变分量——度规、Kronecker delta，以及

<!-- source: PDF 154; printed: 141 -->

Levi-Civita 张量。这意味着，在这些坐标中、在这个点上，$R_{\hat\rho\hat\sigma\hat\mu\hat\nu}$ 的分量会正比于一个由这些不变张量构造出来的张量。尝试匹配 Riemann 张量的对称性，就会发现只有一种可能：

$$
R_{\hat\rho\hat\sigma\hat\mu\hat\nu}
\propto
g_{\hat\rho\hat\mu}g_{\hat\sigma\hat\nu}
-g_{\hat\rho\hat\nu}g_{\hat\sigma\hat\mu}.
\tag{3.190}
$$

然而，这是一个完全张量性的关系，所以它在任何坐标系中都必须成立。我们为了导出这个关系，只考察了单个点 $p$；但在最大对称空间中，所有点都处于同等地位，因此它在任何其他点也必须成立。把两边缩并两次，很容易确定比例常数：左边变成 $R$，右边变成 $n(n-1)$。最终得到一个对任何最大对称空间、任何点、任何坐标系都成立的方程：

$$
R_{\rho\sigma\mu\nu}
=\frac{R}{n(n-1)}
\left(g_{\rho\mu}g_{\sigma\nu}
-g_{\rho\nu}g_{\sigma\mu}\right).
\tag{3.191}
$$

> **勘误（原书第 141 页）**　式（3.191）最后一个 $\nu$ 应是普通下标；上式已按作者勘误写为 $g_{\rho\nu}g_{\sigma\mu}$。

反过来，如果 Riemann 张量满足这个条件——其中 $R$ 在流形上为常数——度规也会最大对称。在二维中，由于曲率只有一个独立分量，只要发现 $R$ 为常数，就足以证明空间最大对称；在更高维中则需要付出更多努力。

所以，从局部来看——暂且忽略整体拓扑问题——给定维数和号差的最大对称空间完全由 $R$ 指定。这类空间的基本分类只需判断 $R$ 为正、为零还是为负，因为 $R$ 的大小代表空间整体尺寸的一次缩放。对于 Euclidean 号差，平直最大对称空间是平面或其适当的高维推广，正曲率空间是球面；负曲率的最大对称 Euclidean 空间是双曲空间，记作 $H^n$。它们较不熟悉，因为即使二维双曲空间也无法等距嵌入 $\mathbb R^3$。下面简要考察这个二维双曲空间。

$H^2$ 与 $\mathbb R^2$ 具有相同拓扑，并有多种表示方法。一种简单表示是 **Poincaré 半平面**：在带坐标 $\{x,y\}$ 的二维区域中取 $y>0$，度规为

$$
\mathrm ds^2=\frac{a^2}{y^2}
\left(\mathrm dx^2+\mathrm dy^2\right).
\tag{3.192}
$$

尽管使用了相似坐标，Poincaré 半平面的几何当然不同于 $\mathbb R^2$ 上半平面的几何。例如，可以计算从 $y_1$ 到 $y_2$、竖直延伸（$x$ 为常数）的一条线段长度：

<!-- source: PDF 155; printed: 142 -->

$$
\begin{aligned}
\Delta s
&=\int_{y_1}^{y_2}
\sqrt{g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm dy}
\frac{\mathrm dx^\nu}{\mathrm dy}}\,\mathrm dy\\
&=a\int_{y_1}^{y_2}\frac{\mathrm dy}{y}\\
&=a\ln\left(\frac{y_2}{y_1}\right).
\end{aligned}
\tag{3.193}
$$

这个结果与 Euclidean 空间中预期的 $\Delta s=y_2-y_1$ 完全不同。特别要注意，对于趋近边界 $y=0$ 的路径，路径长度会变成无穷大。换句话说，对生活在双曲空间上的任何人而言，它根本算不上真正的边界；它位于无限远处。

式（3.192）的非零 Christoffel 符号为

$$
\begin{aligned}
\Gamma^x{}_{xy}=\Gamma^x{}_{yx}&=-y^{-1},\\
\Gamma^y{}_{xx}&=y^{-1},\\
\Gamma^y{}_{yy}&=-y^{-1}.
\end{aligned}
\tag{3.194}
$$

由这些符号很容易证明，测地线满足

$$
(x-x_0)^2+y^2=l^2,
\tag{3.195}
$$

其中 $x_0$ 和 $l$ 是某些常数。这类曲线是圆心位于 $x$ 轴上的半圆，如图 3.8 所示。在 $x_0\to\infty$、$l\to\infty$ 而 $l-x_0$ 保持不变的极限下，得到一条竖直直线。沿用 3.7 节末尾关于 $S^2$ 的讨论，计算 Riemann 张量的一个代表性分量，得到

$$
R^x{}_{yxy}=-y^{-2}.
\tag{3.196}
$$

与二维球面相同，所有其他分量要么为零，要么借助对称性与这个分量相关。这只是我们身处二维空间、曲率仅有一个独立分量这一事实的体现。

> **图 3.8　带负曲率度规的上半平面。**　测地线是与 $x$ 轴垂直相交的半圆和直线。图中画出了若干这样的半圆与竖直线；虚线表示 $x$ 轴。

<!-- source: PDF 156; printed: 143 -->

照常计算便得到 Ricci 张量：

$$
\begin{aligned}
R_{xx}&=-y^{-2},\\
R_{xy}&=0,\\
R_{yy}&=-y^{-2},
\end{aligned}
\tag{3.197}
$$

以及曲率标量

$$
R=-\frac{2}{a^2}.
\tag{3.198}
$$

可见，它与 $S^2$ 的结果大小相同、符号相反；尤其重要的是，它是常数。因为现在处于二维，这已经足以保证我们的度规确实最大对称。当然，也存在让 $H^2$ 看起来大不相同的坐标；习题会引入其中一种。

因此，从局部来看，Euclidean 号差的最大对称空间依 $R$ 的符号，可以是平面、球面或双曲空间。从整体来看，任何最大对称空间（Euclidean 号差）都可这样构造：在这三种空间之一中取一个谨慎选择的区域，再把不同边等同起来，就像从 $\mathbb R^2$ 构造平直环面一样。顺带一提，Gauss–Bonnet 定理概括了局部几何与整体拓扑之间的一种联系。对于二维、紧致、无边界、可定向流形，该定理写成

$$
\chi(M)=\frac{1}{4\pi}
\int_M R\sqrt{|g|}\,\mathrm d^n x,
\tag{3.199}
$$

其中 $\chi(M)$ 是空间的一个拓扑不变量，称为 **Euler 示性数**。一般而言，可以从第 2 章提到的上同调空间计算它；而在二维中，它简单地由下式给出：

$$
\chi(M)=2(1-g),
\tag{3.200}
$$

其中 $g$ 是曲面的亏格：球面的亏格为零；对环面或 Riemann 曲面，它等于“柄”的数量。无论曲率 $R$ 是否为常数，Gauss–Bonnet 定理都成立；当 $R$ 为常数时可以看出，所有亏格 $g\geq2$ 的 Riemann 曲面都必须具有负曲率，正如球面必须有正曲率、环面必须平直一样。

继续这个题外话，暂且想想弦论。弦论声称，构成宇宙的基本对象是微小的一维闭合弦。这类弦具有二维“世界面”，而非一维世界线。在弦论中作微扰论——相当于在量子场论中计算 Feynman 图——需要对所有世界面几何求和；出于技术原因，通常考虑 Euclidean

<!-- source: PDF 157; printed: 144 -->

几何。听起来几何的数量很多，但在二维中，任何度规都可以写成某个参考度规乘以一个共形因子。由于曲率只有一个分量，这个说法应当颇为可信；习题会要求你证明它。对每一种世界面拓扑，可以选取不同的参考度规；若把它选成局部最大对称度规，工作就会简单许多：亏格为零时取圆球面，亏格为一时取平面，更高亏格时取双曲空间。更幸运的是，物理上最有趣的弦论是所谓的临界弦论，其中共形因子本身无关紧要。这正是微扰弦论计算之所以可行的原因之一：只需对一组离散拓扑求和，每种拓扑只有有限多个模参数，例如决定环面不同方向大小的那些参数。

最后再说明一点，然后结束本节。我们已经探讨了 Euclidean 号差的最大对称空间；当然，也有对应的 Lorentzian 号差时空。我们知道，$R=0$ 的最大对称时空就是 Minkowski 空间。正曲率的最大对称时空称为 de Sitter 空间；负曲率的则很有想象力地命名为 anti-de Sitter 空间。第 8 章将更彻底地讨论这些时空。

现在应该已经很清楚，附录会以重要方式补充这些思想。缺乏耐心的读者可以跳过它们，但这样做很可惜。

## 3.10 测地线偏离

Riemann 张量还会以另一种方式作为曲率的结果出现：测地线偏离。你无疑听说过，Euclidean（平直）几何的定义性质是平行公设：起初平行的直线永远保持平行。弯曲空间中当然没有这个性质；例如，在球面上，起初平行的测地线最终一定会相交。我们希望量化任意弯曲空间中的这种行为。

困难在于，“平行”的概念无法从平直空间自然延伸到弯曲空间。我们所能做的最好办法，是考察起初可能平行的测地曲线，并在沿测地线前进时观察它们如何变化。为此，考虑一个单参数测地线族 $\gamma_s(t)$。也就是说，对每个 $s\in\mathbb R$，$\gamma_s$ 都是一条以仿射参数 $t$ 参数化的测地线。这些曲线共同定义一个光滑二维曲面，它嵌入任意维数的流形 $M$ 中。只要选择的是互不相交的一族测地线，就可以把这个曲面上的坐标选为 $s$ 和 $t$。整个曲面是点集 $x^\mu(s,t)\in M$。我们有两个自然向量场：测地线的切向量

$$
T^\mu=\frac{\partial x^\mu}{\partial t},
\tag{3.201}
$$

<!-- source: PDF 158; printed: 145 -->

> **图 3.9　一组测地线。**　测地线族记作 $\gamma_s(t)$，其切向量为 $T^\mu$；向量场 $S^\mu$ 测量相邻测地线之间的偏离。图中 $t$ 沿测地线方向增加，$s$ 横跨测地线族增加。

另一个自然向量场是偏离向量

$$
S^\mu=\frac{\partial x^\mu}{\partial s}.
\tag{3.202}
$$

这个名称来自一种非正式图像：$S^\mu$ 从一条测地线指向它的邻线。

$S^\mu$ 从一条测地线指向下一条测地线的图像，启发我们定义“测地线的相对速度”

$$
V^\mu=(\nabla_T S)^\mu
=T^\rho\nabla_\rho S^\mu,
\tag{3.203}
$$

以及“测地线的相对加速度”

$$
A^\mu=(\nabla_T V)^\mu
=T^\rho\nabla_\rho V^\mu.
\tag{3.204}
$$

> **勘误（原书第 145 页）**　作者补充：严格说来，只有当 $t$ 是固有时，才可把式（3.203）和式（3.204）分别直接解释为相对速度与相对加速度。

这里的名称应当谨慎理解，但这些向量本身定义得很清楚。测地线之间的这种相对加速度，应与一条路径偏离测地线的加速度区分开；后者为 $a^\mu=T^\sigma\nabla_\sigma T^\mu$。

由于 $S$ 和 $T$ 是适配于某个坐标系的基向量，它们的对易子为零：

$$
[S,T]=0.
\tag{3.205}
$$

由式（3.37）可得

$$
S^\rho\nabla_\rho T^\mu
=T^\rho\nabla_\rho S^\mu.
\tag{3.206}
$$

<!-- source: PDF 159; printed: 146 -->

记住这一点，来计算加速度：

$$
\begin{aligned}
A^\mu
&=T^\rho\nabla_\rho
\left(T^\sigma\nabla_\sigma S^\mu\right)\\
&=T^\rho\nabla_\rho
\left(S^\sigma\nabla_\sigma T^\mu\right)\\
&=\left(T^\rho\nabla_\rho S^\sigma\right)
\left(\nabla_\sigma T^\mu\right)
+T^\rho S^\sigma\nabla_\rho\nabla_\sigma T^\mu\\
&=\left(S^\rho\nabla_\rho T^\sigma\right)
\left(\nabla_\sigma T^\mu\right)
+T^\rho S^\sigma
\left(\nabla_\sigma\nabla_\rho T^\mu
+R^\mu{}_{\nu\rho\sigma}T^\nu\right)\\
&=\left(S^\rho\nabla_\rho T^\sigma\right)
\left(\nabla_\sigma T^\mu\right)
+S^\sigma\nabla_\sigma
\left(T^\rho\nabla_\rho T^\mu\right)
-\left(S^\sigma\nabla_\sigma T^\rho\right)
\nabla_\rho T^\mu
+R^\mu{}_{\nu\rho\sigma}T^\nu T^\rho S^\sigma\\
&=R^\mu{}_{\nu\rho\sigma}T^\nu T^\rho S^\sigma.
\end{aligned}
\tag{3.207}
$$

逐行分析这个推导。第一行是 $A^\mu$ 的定义，第二行直接来自式（3.206）。第三行只是 Leibniz 法则。第四行用顺序相反的两次协变导数加 Riemann 张量，替换原先的两次协变导数。第五行再次使用 Leibniz 法则——这次按与通常相反的方向使用——然后消去两个相同的项，并注意到含 $T^\rho\nabla_\rho T^\mu$ 的项为零，因为 $T^\mu$ 是一条测地线的切向量。最终得到

$$
\boxed{
A^\mu=\frac{D^2}{\mathrm dt^2}S^\mu
=R^\mu{}_{\nu\rho\sigma}T^\nu T^\rho S^\sigma,}
\tag{3.208}
$$

这就是**测地线偏离方程**。它表达了一个符合预期的事实：两条相邻测地线之间的相对加速度正比于曲率。

测地线偏离方程刻画一参数相邻测地线族的行为。有时我们会希望跟踪一组多维相邻测地线的行为；它们也许表示一束光子，或一群有质量测试粒子。这样一组测地线形成一个**测地线丛**；附录 F 将推导描述这类测地线丛演化的方程。

在物理上，相邻测地线的加速度当然可解释为引力潮汐力的表现。下一章将更详细地探讨，弯曲时空的性质如何体现为引力场中的物理现象。

## 3.11 习题

1. 验证度规相容性（$\nabla_\sigma g_{\mu\nu}=0$）的下列推论：

$$
\begin{aligned}
\nabla_\sigma g^{\mu\nu}&=0,\\
\nabla_\lambda\varepsilon_{\mu\nu\rho\sigma}&=0.
\end{aligned}
\tag{3.209}
$$

<!-- source: PDF 160; printed: 147 -->

2. 在三维 Euclidean 空间的普通向量分析中，你已经熟悉梯度（$\nabla\phi$）、散度（$\nabla\mathbin{\cdot}V$）和旋度（$\nabla\mathbin{\times}V$）这些运算。利用协变导数，在由下式定义的球极坐标 $\{r,\theta,\phi\}$ 中推导这些运算的公式：

   $$
   x=r\sin\theta\cos\phi,
   \tag{3.210}
   $$

   $$
   y=r\sin\theta\sin\phi,
   \tag{3.211}
   $$

   $$
   z=r\cos\theta.
   \tag{3.212}
   $$

   把你的结果与 Jackson（1999）或同类教材中的结果比较。它们相同吗？它们应该相同吗？

3. 设度规 $g_{\mu\nu}$ 为对角度规。证明 Christoffel 符号为

   $$
   \Gamma^\lambda{}_{\mu\nu}=0,
   \tag{3.213}
   $$

   $$
   \Gamma^\lambda{}_{\mu\mu}
   =-\frac12(g_{\lambda\lambda})^{-1}
   \partial_\lambda g_{\mu\mu},
   \tag{3.214}
   $$

   $$
   \Gamma^\lambda{}_{\mu\lambda}
   =\partial_\mu\left(\ln\sqrt{|g_{\lambda\lambda}|}\right),
   \tag{3.215}
   $$

   $$
   \Gamma^\lambda{}_{\lambda\lambda}
   =\partial_\lambda\left(\ln\sqrt{|g_{\lambda\lambda}|}\right).
   \tag{3.216}
   $$

   在这些表达式中，$\mu\neq\nu\neq\lambda$，而且不对重复指标求和。

4. 在三维 Euclidean 空间中，可以用下式定义抛物面坐标 $(u,v,\phi)$：

   $$
   x=uv\cos\phi,
   \qquad
   y=uv\sin\phi,
   \qquad
   z=\frac12(u^2-v^2).
   $$

   (a) 求抛物面坐标与 Cartesian 坐标之间的坐标变换矩阵 $\partial x^\alpha/\partial x^{\beta'}$，以及逆变换矩阵。这个映射中有奇点吗？

   (b) 用 Cartesian 基向量和基余向量表示相应的基向量与基余向量。

   (c) 求抛物面坐标中的度规与逆度规。

   (d) 计算 Christoffel 符号。

   (e) 计算散度 $\nabla_\mu V^\mu$ 和 Laplacian $\nabla_\mu\nabla^\mu f$。

5. 考察坐标为 $(\theta,\phi)$、度规为下式的二维球面：

   $$
   \mathrm ds^2=\mathrm d\theta^2
   +\sin^2\theta\,\mathrm d\phi^2.
   \tag{3.217}
   $$

   (a) 证明定经度线（$\phi$ 为常数）是测地线，并证明定纬度线（$\theta$ 为常数）中只有赤道（$\theta=\pi/2$）是测地线。

   (b) 取分量为 $V^\mu=(1,0)$ 的向量，沿一条定纬度圆周平行移动一周。所得向量的分量怎样依赖于 $\theta$？

6. 地球表面外部度规的一个良好近似为

   $$
   \mathrm ds^2=-(1+2\Phi)\,\mathrm dt^2
   +(1-2\Phi)\,\mathrm dr^2
   +r^2\left(\mathrm d\theta^2
   +\sin^2\theta\,\mathrm d\phi^2\right),
   \tag{3.218}
   $$

<!-- source: PDF 161; printed: 148 -->

   其中

   $$
   \Phi=-\frac{GM}{r}
   \tag{3.219}
   $$

   可以看作熟悉的 Newton 引力势。这里 $G$ 是 Newton 常数，$M$ 是地球质量。本题中可以假定 $\Phi$ 很小。

   (a) 设一个钟位于地球表面，距地心 $R_1$；另一个钟位于高楼上，距地心 $R_2$。计算每个钟上流逝的时间，把结果写成坐标时间 $t$ 的函数。哪一个钟走得更快？

   (b) 求一条对应于沿地球赤道（$\theta=\pi/2$）作圆周轨道运动的测地线。$\mathrm d\phi/\mathrm dt$ 是多少？

   (c) 半径为 $R_1$ 的卫星贴着地球表面掠过，并忽略空气阻力。它完成一周轨道期间流逝多少固有时？如果愿意，可以只保留 $\Phi$ 的一阶项。代入地球半径等实际数值——别忘了恢复光速——给出以秒为单位的答案。这个数值与静止在地球表面的钟所流逝的固有时相比如何？

7. 本题将使用附录 I 引入的平行传播子，观察 Riemann 张量如何从绕无穷小回路的平行移动中产生。考察下列回路：

   > **习题 7 回路示意图。**　四个顶点为 $A:(x^1,x^2)=(0,0)$、$B:(\delta a,0)$、$C:(\delta a,\delta b)$、$D:(0,\delta b)$；沿 $A\to B\to C\to D\to A$ 的方向绕行。两组曲线分别由 $x^1=0,\delta a$ 与 $x^2=0,\delta b$ 标记。

   利用平行传播子的无穷级数表达式，计算向量沿这个回路从 $A$ 到 $B$、再到 $C$、$D$ 并回到 $A$ 作平行移动时所诱导的变换，保留 $\delta a$ 和 $\delta b$ 的最低非平凡阶；证明结果正比于 Riemann 张量的适当分量。为简化计算，可以在相应路径段上分别使用 $x^1$ 和 $x^2$ 作为参数。

8. 三维球面在坐标 $x^\mu=(\psi,\theta,\phi)$ 中的度规可写成

   $$
   \mathrm ds^2=\mathrm d\psi^2
   +\sin^2\psi\left(\mathrm d\theta^2
   +\sin^2\theta\,\mathrm d\phi^2\right).
   \tag{3.220}
   $$

<!-- source: PDF 162; printed: 149 -->

   (a) 计算 Christoffel 联络系数。可以使用任何方法，不过，通过变分积分（3.49）得到联络系数是很好的练习。

   (b) 计算 Riemann 张量、Ricci 张量和 Ricci 标量。

   (c) 证明这个度规满足式（3.191），从而确认三维球面确实是一个最大对称空间——结果应当符合预期。

9. 证明 Weyl 张量 $C^\mu{}_{\nu\rho\sigma}$ 在共形变换下保持不变。

10. 证明当 $n\geq4$ 时，Weyl 张量满足一个版本的 Bianchi 恒等式：

    $$
    \nabla_\rho C^\rho{}_{\sigma\mu\nu}
    =2\frac{n-3}{n-2}
    \left(
    \nabla_{[\mu}R_{\nu]\sigma}
    +\frac{1}{2(n-1)}g_{\sigma[\mu}\nabla_{\nu]}R
    \right).
    \tag{3.221}
    $$

11. 带度规（3.192）的 Poincaré 半平面最大对称，因此我们会预期它绕任意一点都旋转对称，尽管在 $\{x,y\}$ 坐标中这一点一点也不明显。既然如此，就应当能够把度规写成让旋转对称性显式可见的形式，例如

    $$
    \mathrm ds^2=f^2(r)
    \left(\mathrm dr^2+r^2\mathrm d\theta^2\right).
    \tag{3.222}
    $$

    为证明这种形式确实可行，计算这个度规的曲率标量，并在处处满足 $R=-2/a^2$ 的条件下求解函数 $f(r)$。坐标 $r$ 的取值范围是什么？

12. 证明任意 Killing 向量 $K^\mu$ 都满足正文提到的关系：

    $$
    \begin{aligned}
    \nabla_\mu\nabla_\sigma K^\rho
    &=R^\rho{}_{\sigma\mu\nu}K^\nu,\\
    K^\lambda\nabla_\lambda R&=0.
    \end{aligned}
    \tag{3.223}
    $$

13. 为下列空间找出一组完备 Killing 向量场的显式表达式：

    (a) 度规为 $\mathrm ds^2=-\mathrm dt^2+\mathrm dx^2+\mathrm dy^2+\mathrm dz^2$ 的 Minkowski 空间。

    (b) 坐标为 $\{u,v,x,y\}$、度规为

    $$
    \mathrm ds^2
    =-\left(\mathrm du\,\mathrm dv+\mathrm dv\,\mathrm du\right)
    +a^2(u)\,\mathrm dx^2+b^2(u)\,\mathrm dy^2,
    \tag{3.224}
    $$

    的时空，其中 $a$ 和 $b$ 是未指定的 $u$ 的函数。它表示一个引力波时空。（无需证明的提示：总共有五个 Killing 向量，而且它们的 $u$ 分量 $K^u$ 全都为零。）

    在所有这些情形中，都要仔细区分上指标与下指标。

14. 考察二维球面的三个 Killing 向量（3.188）。证明它们的对易子满足下列代数：

    $$
    \begin{aligned}
    [R,S]&=T,\\
    [S,T]&=R,\\
    [T,R]&=S.
    \end{aligned}
    \tag{3.225}
    $$

15. 利用附录 F 讨论的 Raychaudhuri 方程证明：如果流体沿时空中的测地线流动，且剪切和膨胀均为零，那么该时空必定具有一个类时 Killing 向量。

<!-- source: PDF 163; printed: 150 -->

16. 再次考察三维球面上的度规：

    $$
    \mathrm ds^2=\mathrm d\psi^2
    +\sin^2\psi\left(\mathrm d\theta^2
    +\sin^2\theta\,\mathrm d\phi^2\right).
    \tag{3.226}
    $$

    本题将使用附录 J 讨论的非坐标基。在由余标架 $\hat\theta^{(a)}$ 构成的正交归一标架中，度规会变成

    $$
    \mathrm ds^2
    =\hat\theta^{(1)}\otimes\hat\theta^{(1)}
    +\hat\theta^{(2)}\otimes\hat\theta^{(2)}
    +\hat\theta^{(3)}\otimes\hat\theta^{(3)}.
    \tag{3.227}
    $$

    (a) 找到这样一个正交归一余标架，使矩阵 $e^\mu{}_a$ 为对角矩阵。不必担心覆盖整个流形。

    (b) 通过求解
    $\mathrm de^a+\omega^a{}_b\wedge e^b=0$
    计算自旋联络的各个分量。

    (c) 先计算曲率二形式 $R^a{}_{b\mu\nu}$ 的分量，再作转换，从而计算适配于 $x^\mu$ 的坐标基中 Riemann 张量 $R^\rho{}_{\sigma\mu\nu}$ 的各个分量。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 2 章 流形](./02-manifolds.md) · [下一篇：第 4 章 引力](./04-gravitation.md)
