# 第 7 章 微扰理论与引力辐射

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 6 章 更一般的黑洞](./06-more-general-black-holes.md) · [下一篇：第 8 章 宇宙学](./08-cosmology.md)

## 7.1 线性化引力与规范变换

<!-- source: PDF 287; printed: 274 -->

我们最初推导 Einstein 方程时，曾通过考察 Newton 极限来检验方向是否正确。当时的假设包括：引力场很弱；引力场是静态的（没有时间导数）；检验粒子的运动很慢。本章讨论的弱场极限限制更少：场仍然很弱，但可以随时间变化，而且不再限制检验粒子的运动。这样一来，我们便能讨论 Newton 理论中缺失或含义不明确的现象，例如引力辐射（场随时间变化）以及光的偏折（涉及高速运动的粒子）。

引力场很弱，依然体现为度规可以分解成平直的 Minkowski 度规与一个小微扰之和：

$$
g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu},
\qquad |h_{\mu\nu}|\ll 1.
\tag{7.1}
$$

我们只采用使 $\eta_{\mu\nu}$ 具有标准形式的坐标，即 $\eta_{\mu\nu}=\operatorname{diag}(-1,+1,+1,+1)$。由于假定 $h_{\mu\nu}$ 很小，一切高于 $h_{\mu\nu}$ 一阶的量都可以忽略，于是立即得到

$$
g^{\mu\nu}=\eta^{\mu\nu}-h^{\mu\nu},
\tag{7.2}
$$

其中 $h^{\mu\nu}=\eta^{\mu\rho}\eta^{\nu\sigma}h_{\rho\sigma}$。和此前一样，我们可以用 $\eta^{\mu\nu}$ 与 $\eta_{\mu\nu}$ 升降指标，因为由此产生的修正对微扰而言属于更高阶。事实上，可以把广义相对论的线性化版本——忽略 $h_{\mu\nu}$ 一阶以上的效应——看成平直背景时空上传播的对称张量场 $h_{\mu\nu}$ 的理论。这个理论在狭义相对论意义下具有 Lorentz 不变性：在 Lorentz 变换 $x^{\mu'}=\Lambda^{\mu'}{}_{\mu}x^\mu$ 下，平直度规 $\eta_{\mu\nu}$ 保持不变，而微扰按下式变换：

$$
h_{\mu'\nu'}
=\Lambda_{\mu'}{}^\mu\Lambda_{\nu'}{}^\nu h_{\mu\nu}.
\tag{7.3}
$$

<!-- source: PDF 288; printed: 275 -->

注意，我们也可以考察 Minkowski 时空之外某种背景时空附近的小微扰。这时应把度规写成 $g_{\mu\nu}=g^{(0)}_{\mu\nu}+h_{\mu\nu}$，所得理论描述一个对称张量在度规为 $g^{(0)}_{\mu\nu}$ 的弯曲空间中传播。例如，宇宙学就需要采用这种做法。

我们的目标是找出微扰 $h_{\mu\nu}$ 所满足的运动方程，这要通过把 Einstein 方程展开到一阶来完成。先从 Christoffel 符号开始：

$$
\begin{aligned}
\Gamma^\rho{}_{\mu\nu}
&=\frac12 g^{\rho\lambda}
\left(\partial_\mu g_{\nu\lambda}
+\partial_\nu g_{\lambda\mu}
-\partial_\lambda g_{\mu\nu}\right)\\
&=\frac12\eta^{\rho\lambda}
\left(\partial_\mu h_{\nu\lambda}
+\partial_\nu h_{\lambda\mu}
-\partial_\lambda h_{\mu\nu}\right).
\end{aligned}
\tag{7.4}
$$

联络系数本身是一阶量，所以 Riemann 张量中只有 $\Gamma$ 的导数会有贡献，$\Gamma^2$ 项不会贡献。为方便起见先降下一个指标，得到

$$
\begin{aligned}
R_{\mu\nu\rho\sigma}
&=\eta_{\mu\lambda}\partial_\rho\Gamma^\lambda{}_{\nu\sigma}
-\eta_{\mu\lambda}\partial_\sigma\Gamma^\lambda{}_{\nu\rho}\\
&=\frac12\left(
\partial_\rho\partial_\nu h_{\mu\sigma}
+\partial_\sigma\partial_\mu h_{\nu\rho}
-\partial_\sigma\partial_\nu h_{\mu\rho}
-\partial_\rho\partial_\mu h_{\nu\sigma}
\right).
\end{aligned}
\tag{7.5}
$$

对 $\mu$ 与 $\rho$ 缩并便得到 Ricci 张量：

$$
R_{\mu\nu}
=\frac12\left(
\partial_\sigma\partial_\nu h^\sigma{}_{\mu}
+\partial_\sigma\partial_\mu h^\sigma{}_{\nu}
-\partial_\mu\partial_\nu h
-\Box h_{\mu\nu}
\right),
\tag{7.6}
$$

它显然关于 $\mu$ 和 $\nu$ 对称。这里把微扰的迹定义为 $h=\eta^{\mu\nu}h_{\mu\nu}=h^\mu{}_{\mu}$；d'Alembert 算符就是平直空间中的算符，$\Box=-\partial_t^2+\partial_x^2+\partial_y^2+\partial_z^2$。再次缩并，得到 Ricci 标量：

$$
R=\partial_\mu\partial_\nu h^{\mu\nu}-\Box h.
\tag{7.7}
$$

把这些结果合在一起，便得到 Einstein 张量：

$$
\begin{aligned}
G_{\mu\nu}
&=R_{\mu\nu}-\frac12\eta_{\mu\nu}R\\
&=\frac12\left(
\partial_\sigma\partial_\nu h^\sigma{}_{\mu}
+\partial_\sigma\partial_\mu h^\sigma{}_{\nu}
-\partial_\mu\partial_\nu h
-\Box h_{\mu\nu}
-\eta_{\mu\nu}\partial_\rho\partial_\lambda h^{\rho\lambda}
+\eta_{\mu\nu}\Box h
\right).
\end{aligned}
\tag{7.8}
$$

这与我们对线性化理论的理解一致：它描述平直背景上的一个对称张量。对下面的 Lagrangian 关于 $h_{\mu\nu}$ 作变分，也可以导出线性化 Einstein 张量 (7.8)：

$$
\mathcal L=\frac12\left[
(\partial_\mu h^{\mu\nu})(\partial_\nu h)
-(\partial_\mu h^{\rho\sigma})(\partial_\rho h^\mu{}_{\sigma})
+\frac12\eta^{\mu\nu}(\partial_\mu h^{\rho\sigma})(\partial_\nu h_{\rho\sigma})
-\frac12\eta^{\mu\nu}(\partial_\mu h)(\partial_\nu h)
\right].
\tag{7.9}
$$

习题会要求你验证这个 Lagrangian 是否恰当。

<!-- source: PDF 289; printed: 276 -->

线性化场方程当然是 $G_{\mu\nu}=8\pi G T_{\mu\nu}$，其中 $G_{\mu\nu}$ 由 (7.8) 给出，$T_{\mu\nu}$ 是按 $h_{\mu\nu}$ 的零阶计算的能量-动量张量。我们不把能量-动量张量的高阶修正包括进来，因为弱场极限要成立，能量和动量的总量本身也必须很小。换句话说，$T_{\mu\nu}$ 的最低非零阶自动与微扰处于同一量级。还应注意，最低阶的守恒律很简单，就是 $\partial_\mu T^{\mu\nu}=0$。我们经常关心真空方程；它照例就是 $R_{\mu\nu}=0$，其中 $R_{\mu\nu}$ 由 (7.6) 给出。

有了线性化场方程，我们几乎可以着手求解。不过，先要处理规范不变性这个棘手问题。问题来自这样一个事实：条件 $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ 并未完全指定时空坐标系。也许还存在其他坐标系，在其中度规仍能写成 Minkowski 度规加一个小微扰，只是微扰的具体形式会不同。因此，把度规分成平直背景与微扰并不唯一。为了考察这个问题，我们会使用附录 A、B 中关于微分同胚的思想；还未读过这些附录的读者可以直接跳到式 (7.14) 以及紧随其后的两个段落，那里包含核心思想。

先从一种较为抽象的观点理解规范不变性。线性化理论可以看成支配平直背景上张量场行为的理论；这一说法可用一个**背景时空** $M_b$、一个**物理时空** $M_p$，以及一个微分同胚 $\phi:M_b\to M_p$ 来形式化。作为流形，$M_b$ 与 $M_p$ 相同，因为二者彼此微分同胚；不过我们设想它们承载着不同的张量场：在 $M_b$ 上定义平直的 Minkowski 度规 $\eta_{\mu\nu}$，在 $M_p$ 上则有一个满足 Einstein 方程的度规 $g_{\alpha\beta}$。（设想 $M_b$ 配有坐标 $x^\mu$，$M_p$ 配有坐标 $y^\alpha$，尽管这些坐标不会扮演显著角色。）微分同胚 $\phi$ 使我们能在背景时空与物理时空之间来回搬运张量，如图 7.1 所示。我们希望在线性化理论中把一切放在平直背景时空上讨论，因此关心物理度规的拉回 $(\phi^*g)_{\mu\nu}$。微扰可以定义为拉回后的物理度规与平直度规之差。

**图 7.1**　把背景时空 $M_b$（带有平直度规 $\eta_{\mu\nu}$）与物理时空 $M_p$ 联系起来的微分同胚。图中 $\phi:M_b\to M_p$，而 $\phi^*$ 把 $g_{\alpha\beta}$ 拉回为 $M_b$ 上的 $(\phi^*g)_{\mu\nu}$。

<!-- source: PDF 290; printed: 277 -->

**图 7.2**　由背景时空 $M_b$ 上的向量场 $\xi^\mu$ 生成的一参数微分同胚族 $\psi_\epsilon$。图中还画出了 $\phi\circ\psi_\epsilon:M_b\to M_p$ 及其拉回 $(\phi\circ\psi_\epsilon)^*$。

微扰与平直度规的差写成

$$
h_{\mu\nu}=(\phi^*g)_{\mu\nu}-\eta_{\mu\nu}.
\tag{7.10}
$$

仅凭这个定义，并没有理由认为 $h_{\mu\nu}$ 的分量很小；然而，如果 $M_p$ 上的引力场很弱，那么对某些微分同胚 $\phi$，会有 $|h_{\mu\nu}|\ll1$。因此，我们只考察满足这个条件的微分同胚。于是，$g_{\alpha\beta}$ 在物理时空上满足 Einstein 方程，意味着 $h_{\mu\nu}$ 会在背景时空上满足线性化方程，因为可以用微分同胚 $\phi$ 把 Einstein 方程本身拉回去。

用这种语言来说，规范不变性问题就是：$M_b$ 与 $M_p$ 之间存在大量容许的微分同胚；这里“容许”指微扰很小。考虑背景时空上的向量场 $\xi^\mu(x)$。它生成一参数微分同胚族 $\psi_\epsilon:M_b\to M_b$，如图 7.2 所示。当 $\epsilon$ 足够小时，若 $\phi$ 给出的式 (7.10) 微扰很小，那么 $\phi\circ\psi_\epsilon$ 给出的微扰也很小，尽管其取值有所不同。具体地说，可以定义一个由 $\epsilon$ 参数化的微扰族：

$$
\begin{aligned}
h^{(\epsilon)}_{\mu\nu}
&=\left[(\phi\circ\psi_\epsilon)^*g\right]_{\mu\nu}-\eta_{\mu\nu}\\
&=\left[\psi_\epsilon^*(\phi^*g)\right]_{\mu\nu}-\eta_{\mu\nu}.
\end{aligned}
\tag{7.11}
$$

第二个等号使用了一个事实：复合映射下的拉回等于按相反次序复合各个拉回。这源于拉回本身搬运对象的方向与原映射相反。代入关系 (7.10)，得到

$$
\begin{aligned}
h^{(\epsilon)}_{\mu\nu}
&=\psi_\epsilon^*(h+\eta)_{\mu\nu}-\eta_{\mu\nu}\\
&=\psi_\epsilon^*(h_{\mu\nu})+\psi_\epsilon^*(\eta_{\mu\nu})-\eta_{\mu\nu},
\end{aligned}
\tag{7.12}
$$

因为两个张量之和的拉回就是各自拉回之和。现在使用 $\epsilon$ 很小的假设：此时，在最低阶上 $\psi_\epsilon^*(h_{\mu\nu})$ 等于 $h_{\mu\nu}$，另外两项则给出一个 Lie 导数。

<!-- source: PDF 291; printed: 278 -->

$$
\begin{aligned}
h^{(\epsilon)}_{\mu\nu}
&=\psi_\epsilon^*(h_{\mu\nu})
+\epsilon\left[
\frac{\psi_\epsilon^*(\eta_{\mu\nu})-\eta_{\mu\nu}}{\epsilon}
\right]\\
&=h_{\mu\nu}+\epsilon\mathcal L_\xi\eta_{\mu\nu}.
\end{aligned}
\tag{7.13}
$$

附录 B 证明了，度规沿向量场 $\xi_\mu$ 的 Lie 导数为 $\mathcal L_\xi g_{\mu\nu}=2\nabla_{(\mu}\xi_{\nu)}$。当前背景度规是平直的，协变导数退化为偏导数，所以

$$
\boxed{h^{(\epsilon)}_{\mu\nu}
=h_{\mu\nu}+2\epsilon\partial_{(\mu}\xi_{\nu)}}.
\tag{7.14}
$$

这个公式表示：沿向量场 $\epsilon\xi^\mu$ 作无穷小微分同胚时，度规微扰如何改变。在线性化理论中，我们把它称作**规范变换**。

微分同胚 $\psi_\epsilon$ 在保持微扰很小这一要求的同时，给同一个物理情形提供了不同表示。因此，结果 (7.12) 告诉我们，哪些度规微扰表示物理上等价的时空：对某个向量 $\xi^\mu$，彼此相差 $2\epsilon\partial_{(\mu}\xi_{\nu)}$ 的微扰。理论在这种变换下的不变性类似于电磁学在 $A_\mu\to A_\mu+\partial_\mu\lambda$ 下的传统规范不变性。（这个类比不同于附录 J 中与电磁学所作的另一种类比；那里把正交标架形式中的局部 Lorentz 变换与内部向量丛中的换基联系起来。）在电磁学中，规范不变性来自场强 $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$ 在规范变换下保持不变。类似地，变换 (7.14) 引起的线性化 Riemann 张量变化为

$$
\begin{aligned}
\delta R_{\mu\nu\rho\sigma}
=\frac12\big(&
\partial_\rho\partial_\nu\partial_\mu\xi_\sigma
+\partial_\rho\partial_\nu\partial_\sigma\xi_\mu
+\partial_\sigma\partial_\mu\partial_\nu\xi_\rho
+\partial_\sigma\partial_\mu\partial_\rho\xi_\nu\\
&-\partial_\sigma\partial_\nu\partial_\mu\xi_\rho
-\partial_\sigma\partial_\nu\partial_\rho\xi_\mu
-\partial_\rho\partial_\mu\partial_\nu\xi_\sigma
-\partial_\rho\partial_\mu\partial_\sigma\xi_\nu
\big)=0.
\end{aligned}
\tag{7.15}
$$

这个结果验证了我们对度规微扰规范变换的抽象推导：该变换使曲率保持不变，因而物理时空也保持不变。

还可以通过稍微朴素一些、却直接得多的无穷小坐标变换来理解规范不变性。微分同胚 $\psi_\epsilon$ 可以理解为把坐标从 $x^\mu$ 变成 $x^\mu-\epsilon\xi^\mu$。（这个负号并不符合通常习惯；它来自这样的事实：“新”度规从积分曲线前方一小段距离处被拉回，等价于把坐标换成曲线上向后移动一小段距离所得的坐标。）按照张量在坐标变换下的一般规则逐步计算，可以准确导出 (7.14)，不过这样做需要略微“作弊”：把两个不同坐标系里的张量分量直接等同起来。

## 7.2 自由度

<!-- source: PDF 292; printed: 279 -->

有了线性化 Einstein 张量的表达式 (7.8) 以及规范变换作用的表达式 (7.14)，我们已经可以直接选取规范并求解 Einstein 方程。不过，若先在 Minkowski 背景时空中选定一个惯性坐标系，再按照度规微扰各分量在空间转动下的变换性质将它们分解，还能得到更多物理直观。你也许会担心这种分解违背广义相对论不依赖坐标的精神；其实，它与把电磁场强张量分解成电场和磁场没有本质差别。尽管 $\mathbf E$ 与 $\mathbf B$ 都是某个 $(0,2)$ 张量的分量，有时仍然适合站在某个固定观察者的立场，把它们看成三维向量。[^7-1]

度规微扰是一个对称的 $(0,2)$ 张量；电磁场强则是反对称的。在空间转动下，$00$ 分量是标量，$0i$ 分量（等于 $i0$ 分量）构成一个三维向量，而 $ij$ 分量构成一个带两个指标的对称空间张量。这个空间张量还可以继续分成迹与无迹部分。（用群论语言说，我们是在寻找转动群的“不可约表示”；也就是把张量拆成若干独立部分，使每一部分在空间转动下只变换到自身。）因此，把 $h_{\mu\nu}$ 写成

$$
\begin{aligned}
h_{00}&=-2\Phi,\\
h_{0i}&=w_i,\\
h_{ij}&=2s_{ij}-2\Psi\delta_{ij},
\end{aligned}
\tag{7.16}
$$

其中 $\Psi$ 编码 $h_{ij}$ 的迹，$s_{ij}$ 无迹：

$$
\Psi=-\frac16\delta^{ij}h_{ij},
\qquad
s_{ij}=\frac12\left(h_{ij}-\frac13\delta^{kl}h_{kl}\delta_{ij}\right).
\tag{7.17}
$$

完整度规因而写成

$$
\boxed{
\mathrm ds^2=-(1+2\Phi)\mathrm dt^2
+w_i(\mathrm dt\,\mathrm dx^i+\mathrm dx^i\,\mathrm dt)
+\big[(1-2\Psi)\delta_{ij}+2s_{ij}\big]\mathrm dx^i\mathrm dx^j}.
\tag{7.18}
$$

[^7-1]: 这里的讨论沿用 E. Bertschinger 的报告 “Cosmological Dynamics”，该报告发表于法国 Les Houches 的 Summer School on Cosmology and Large Scale Structure（第 60 届，1993 年 8 月 1–28 日）；原书给出的地址为 `http://arXiv.org/abs/astro-ph/9503125`。Bertschinger 关注宇宙学微扰理论，其中类空超曲面随时间膨胀；把他的讨论专门化到不膨胀宇宙则相当直接。

<!-- source: PDF 293; printed: 280 -->

到这里我们还没有选择规范，也没有解任何方程，只是定义了一套方便的记号。无迹张量 $s_{ij}$ 称为**应变**（strain）；随后会看到，引力辐射包含在它之中。有时把空间分量拆成迹与无迹部分并无帮助，这时可以继续直接使用 $h_{ij}$。以后会按具体问题选用合适的记号。还应注意，与第 1 章一样，此处的空间度规就是 $\delta_{ij}$，所以可自由升降空间指标而不改变分量。

为了体会度规微扰中各场的物理含义，考察由测地线方程描述的检验粒子运动。度规 (7.18) 的 Christoffel 符号为

$$
\begin{aligned}
\Gamma^0{}_{00}&=\partial_0\Phi,\\
\Gamma^i{}_{00}&=\partial_i\Phi+\partial_0w_i,\\
\Gamma^0{}_{j0}&=\partial_j\Phi,\\
\Gamma^i{}_{j0}&=\partial_{[j}w_{i]}+\frac12\partial_0h_{ij},\\
\Gamma^0{}_{jk}&=-\partial_{(j}w_{k)}+\frac12\partial_0h_{jk},\\
\Gamma^i{}_{jk}&=\partial_{(j}h_{k)i}-\frac12\partial_i h_{jk}.
\end{aligned}
\tag{7.19}
$$

这些表达式保留了 $h_{ij}$，没有改用 $s_{ij}$ 和 $\Psi$，因为后二者只以组合 $h_{ij}=2s_{ij}-2\Psi\delta_{ij}$ 出现。开始取迹以求 Ricci 张量和 Einstein 方程时，这一区别就会变得重要。既然已经固定惯性标架，适合把四动量 $p^\mu=\mathrm dx^\mu/\mathrm d\lambda$（对有质量粒子，$\lambda=\tau/m$）用能量 $E$ 与三维速度 $v^i=\mathrm dx^i/\mathrm dt$ 表示为

$$
p^0=\frac{\mathrm dt}{\mathrm d\lambda}=E,
\qquad p^i=Ev^i.
\tag{7.20}
$$

取测地线方程

$$
\frac{\mathrm dp^\mu}{\mathrm d\lambda}
+\Gamma^\mu{}_{\rho\sigma}p^\rho p^\sigma=0,
\tag{7.21}
$$

把第二项移到右边，使它看起来像一个力项，再把两边除以 $E$，得到

$$
\frac{\mathrm dp^\mu}{\mathrm dt}
=-\Gamma^\mu{}_{\rho\sigma}\frac{p^\rho p^\sigma}{E}.
\tag{7.22}
$$

$\mu=0$ 分量描述能量的演化：

$$
\frac{\mathrm dE}{\mathrm dt}
=-E\left[
\partial_0\Phi
+2(\partial_k\Phi)v^k
-\left(\partial_{(j}w_{k)}-\frac12\partial_0h_{jk}\right)v^jv^k
\right].
\tag{7.23}
$$

<!-- source: PDF 294; printed: 281 -->

你也许认为能量应当守恒，但 $E=p^0=m\gamma$ 只包括粒子的“惯性”能量——在低速极限下，就是静止能量与动能——并不包括粒子和引力场相互作用产生的能量。

测地线方程的空间分量 $\mu=i$ 变成

$$
\frac{\mathrm dp^i}{\mathrm dt}
=-E\left[
\partial_i\Phi+\partial_0w_i
+2\left(\partial_{[i}w_{j]}+\partial_0h_{ij}\right)v^j
+\left(\partial_{(j}h_{k)i}-\frac12\partial_i h_{jk}\right)v^jv^k
\right].
\tag{7.24}
$$

为了作物理解释，定义“引力电”与“引力磁”三维向量场

$$
G^i\equiv-\partial_i\Phi-\partial_0w_i,
\qquad
H^i\equiv(\boldsymbol\nabla\times\vec w)^i
=\epsilon^{ijk}\partial_jw_k.
\tag{7.25}
$$

它们显然类似于用标势和矢势定义普通电场、磁场的方式。于是 (7.24) 变成

$$
\frac{\mathrm dp^i}{\mathrm dt}
=E\left[
G^i+(\vec v\times\vec H)^i
-2(\partial_0h_{ij})v^j
-\left(\partial_{(j}h_{k)i}-\frac12\partial_i h_{jk}\right)v^jv^k
\right].
\tag{7.26}
$$

右边前两项描述沿测地线运动的检验粒子如何响应标量微扰 $\Phi$ 与向量微扰 $w_i$，其形式使人联想到电磁学中的 Lorentz 力定律。还存在与空间微扰 $h_{ij}$ 的耦合，分别对三维速度呈线性和二次。不同微扰的相对重要性当然取决于所考察的具体物理情形；很快我们就会看到实例。

除检验粒子的运动外，还应考察度规微扰的场方程，也就是线性化 Einstein 方程。用当前变量表示的 Riemann 张量为

$$
\begin{aligned}
R_{0j0l}&=\partial_j\partial_l\Phi
+\partial_0\partial_{(j}w_{l)}
-\frac12\partial_0\partial_0h_{jl},\\
R_{0jkl}&=\partial_j\partial_{[k}w_{l]}
-\partial_0\partial_{[k}h_{l]j},\\
R_{ijkl}&=\partial_j\partial_{[k}h_{l]i}
-\partial_i\partial_{[k}h_{l]j},
\end{aligned}
\tag{7.27}
$$

其他分量由对称性联系起来。用 $\eta^{\mu\nu}$ 缩并，得到 Ricci 张量：

$$
\begin{aligned}
R_{00}&=\nabla^2\Phi+\partial_0\partial_kw^k+3\partial_0^2\Psi,\\
R_{0j}&=-\frac12\nabla^2w_j+\frac12\partial_j\partial_kw^k
+2\partial_0\partial_j\Psi+\partial_0\partial_ks_j{}^k,\\
R_{ij}&=-\partial_i\partial_j(\Phi-\Psi)
-\partial_0\partial_{(i}w_{j)}+\Box\Psi\,\delta_{ij}
-\Box s_{ij}+2\partial_k\partial_{(i}s_{j)}{}^k.
\end{aligned}
\tag{7.28}
$$

<!-- source: PDF 295; printed: 282 -->

这里 $\nabla^2=\delta^{ij}\partial_i\partial_j$ 是三维平直 Laplace 算符。Ricci 张量含有缩并，所以空间微扰的无迹部分和有迹部分现在以不同方式出现。最后可计算 Einstein 张量：

$$
\begin{aligned}
G_{00}&=2\nabla^2\Psi+\partial_k\partial_ls^{kl},\\
G_{0j}&=-\frac12\nabla^2w_j+\frac12\partial_j\partial_kw^k
+2\partial_0\partial_j\Psi+\partial_0\partial_ks_j{}^k,\\
G_{ij}&=(\delta_{ij}\nabla^2-\partial_i\partial_j)(\Phi-\Psi)
+\delta_{ij}\partial_0\partial_kw^k-\partial_0\partial_{(i}w_{j)}\\
&\quad+2\delta_{ij}\partial_0^2\Psi-\Box s_{ij}
+2\partial_k\partial_{(i}s_{j)}{}^k-\delta_{ij}\partial_k\partial_ls^{kl}.
\end{aligned}
\tag{7.29}
$$

把这个表达式代入 Einstein 方程 $G_{\mu\nu}=8\pi G T_{\mu\nu}$，会发现度规分量中只有一小部分是引力场真正的自由度；其余分量满足约束，由其他场决定。先考察 $G_{00}=8\pi G T_{00}$，用 (7.29) 写成

$$
\nabla^2\Psi=4\pi G T_{00}-\frac12\partial_k\partial_ls^{kl}.
\tag{7.30}
$$

这是 $\Psi$ 的方程，不含时间导数。若已知任意时刻 $T_{00}$ 与 $s_{ij}$ 的状态，就能确定 $\Psi$（还差空间无穷远处的边界条件）。因此，$\Psi$ 本身并非传播自由度；它由能量-动量张量和引力应变 $s_{ij}$ 决定。再看 $0j$ 方程，可写成

$$
(\delta_{jk}\nabla^2-\partial_j\partial_k)w^k
=-16\pi G T_{0j}+4\partial_0\partial_j\Psi
+2\partial_0\partial_ks_j{}^k.
\tag{7.31}
$$

这是 $w^i$ 的方程，同样不含时间导数。再次可见，只要知道能量-动量张量与应变（从而能求出 $\Psi$），向量 $w^i$ 就会被确定。最后，$ij$ 方程为

$$
\begin{aligned}
(\delta_{ij}\nabla^2-\partial_i\partial_j)\Phi
={}&8\pi G T_{ij}
+(\delta_{ij}\nabla^2-\partial_i\partial_j-2\delta_{ij}\partial_0^2)\Psi\\
&-\delta_{ij}\partial_0\partial_kw^k+\partial_0\partial_{(i}w_{j)}
+\Box s_{ij}-2\partial_k\partial_{(i}s_{j)}{}^k
+\delta_{ij}\partial_k\partial_ls^{kl}.
\end{aligned}
\tag{7.32}
$$

这里仍没有时间导数作用在 $\Phi$ 上，所以 $\Phi$ 也是其他场的函数，由其他场决定。

因此，Einstein 方程中唯一会传播的自由度位于应变张量 $s_{ij}$ 中；随后将看到，它们用来描述引力波。$h_{\mu\nu}$ 的其他分量由 $s_{ij}$ 与物质场决定，不需要单独指定初始数据。在其他引力理论中，例如第 4.8 节讨论的、含额外场或作用量高阶项的理论，度规的其他分量也可能成为动力学变量。正如第 7.4 节末尾会简要讨论的那样，传播张量场量子化后产生何种自旋的粒子，取决于场在空间转动下的行为。

<!-- source: PDF 296; printed: 283 -->

因此，标量 $\Phi$ 与 $\Psi$ 对应自旋 0，向量 $w_i$ 对应自旋 1，张量 $s_{ij}$ 对应自旋 2。在通常的广义相对论中，只有自旋 2 部分是真正的粒子激发。

上一节说明了规范变换 $h_{\mu\nu}\to h_{\mu\nu}+\partial_\mu\xi_\nu+\partial_\nu\xi_\mu$ 如何由向量场 $\xi^\mu$ 生成。此后把 (7.14) 中的参数 $\epsilon$ 设为 1，并把向量场 $\xi^\mu$ 本身视作小量。在这种变换下，各个度规微扰场的变化为

$$
\begin{aligned}
\Phi&\longrightarrow\Phi+\partial_0\xi^0,\\
w_i&\longrightarrow w_i+\partial_0\xi^i-\partial_i\xi^0,\\
\Psi&\longrightarrow\Psi-\frac13\partial_i\xi^i,\\
s_{ij}&\longrightarrow s_{ij}+\partial_{(i}\xi_{j)}
-\frac13\partial_k\xi^k\delta_{ij},
\end{aligned}
\tag{7.33}
$$

这很容易直接验证。与电磁学和其他规范理论一样，不同情形适合不同规范；下面列出几种常用选择。

先考虑**横向规范**（transverse gauge），它推广了宇宙学中有时使用的共形 Newton 规范或 Poisson 规范。横向规范与电磁学的 Coulomb 规范 $\partial_iA^i=0$ 密切相关。首先把应变固定为空间横向：

$$
\partial_i s^{ij}=0,
\tag{7.34}
$$

这可通过选择满足下式的 $\xi^j$ 实现：

$$
\nabla^2\xi^j+\frac13\partial_j\partial_i\xi^i
=-2\partial_i s^{ij}.
\tag{7.35}
$$

$\xi^0$ 的取值仍未确定，所以可利用这项剩余自由，把向量微扰也变成横向：

$$
\partial_iw^i=0,
\tag{7.36}
$$

做法是选择满足

$$
\nabla^2\xi^0=\partial_iw^i+\partial_0\partial_i\xi^i
\tag{7.37}
$$

的 $\xi^0$。作 Fourier 变换以后，“横向”的含义十分清楚：散度为零意味着张量与波矢正交。无论 (7.35) 还是 (7.37)，都未完全固定 $\xi^\mu$ 的值；两者都是只含空间导数的二阶微分方程，还需要边界条件才能指定一个解。对当前目的而言，只需知道解总是存在。条件 (7.34) 与 (7.36) 合在一起定义横向规范。在这个规范中，Einstein 方程变成

$$
\boxed{G_{00}=2\nabla^2\Psi=8\pi G T_{00}}.
\tag{7.38}
$$

<!-- source: PDF 297; printed: 284 -->

$$
\boxed{G_{0j}=-\frac12\nabla^2w_j+2\partial_0\partial_j\Psi
=8\pi G T_{0j}},
\tag{7.39}
$$

以及

$$
\boxed{
G_{ij}=(\delta_{ij}\nabla^2-\partial_i\partial_j)(\Phi-\Psi)
-\partial_0\partial_{(i}w_{j)}+2\delta_{ij}\partial_0^2\Psi
-\Box s_{ij}=8\pi G T_{ij}}.
\tag{7.40}
$$

本章其余部分会用这些方程，在不同情形中寻找弱场解。

另一个常用规范称为**同步规范**（synchronous gauge）。它等价于选取附录 D 讨论的 Gaussian 正规坐标。它消除了微扰的非空间分量，因而可看作电磁学时间规范 $A^0=0$ 的引力对应物。首先令标势 $\Phi$ 消失：

$$
\Phi=0,
\tag{7.41}
$$

这可通过选择满足

$$
\partial_0\xi^0=-\Phi
\tag{7.42}
$$

的 $\xi^0$ 实现。此后仍可选择 $\xi^i$。把向量分量设为零，

$$
w^i=0,
\tag{7.43}
$$

只需选择满足

$$
\partial_0\xi^i=-w^i+\partial_i\xi^0
\tag{7.44}
$$

的 $\xi^i$。同步规范中的度规于是具有简洁形式

$$
\mathrm ds^2=-\mathrm dt^2+(\delta_{ij}+h_{ij})\mathrm dx^i\mathrm dx^j.
\tag{7.45}
$$

这只是一种规范选择，适用于任何相对 Minkowski 时空只有小微扰的时空。在同步规范中写出 Einstein 方程很直接，不过本章余下部分不会实际使用它，所以不再展开。

除了横向规范与同步规范，计算引力波的产生时还适合采用第三种选择，即 **Lorenz／谐和规范**（Lorenz/harmonic gauge）。如下文所述，它等价于令

$$
\partial_\mu h^\mu{}_{\nu}-\frac12\partial_\nu h=0,
\tag{7.46}
$$

<!-- source: PDF 298; printed: 285 -->

其中 $h=\eta^{\mu\nu}h_{\mu\nu}$。若用前面分解出的各微扰场来表示，这个规范并没有特别简单的形式；但它会使线性化 Einstein 方程具有格外简单的形式。

在转向弱场极限的应用之前，先强调式 (7.16) 对度规微扰分量所作的**代数分解**，与考察张量场而非单点处的张量时还能作出的另一种分解之间的区别，以此结束自由度的讨论。后一种分解能更直接地显露物理自由度，在宇宙学微扰理论中至关重要。它以一个标准事实为基础：向量场可分解成横向部分 $w_\perp^i$ 和纵向部分 $w_\parallel^i$：

$$
w^i=w_\perp^i+w_\parallel^i,
\tag{7.47}
$$

其中横向向量无散，纵向向量无旋：

$$
\partial_iw_\perp^i=0,
\qquad
\epsilon^{ijk}\partial_jw_{\parallel k}=0.
\tag{7.48}
$$

注意，这些是微分方程，所以显然只有用于张量场时才有意义。横向向量可以表示为另一个向量 $\xi^i$ 的旋度；不过，除非再施加 $\partial_i\xi^i=0$ 一类辅助条件，否则 $\xi^i$ 的选择并不唯一。纵向向量则是某个标量 $\lambda$ 的梯度：

$$
w_\perp^i=\epsilon^{ijk}\partial_j\xi_k,
\qquad
w_{\parallel i}=\partial_i\lambda.
\tag{7.49}
$$

正如最初把度规微扰分成标量、向量与张量部分一样，把一个向量场分成由标量和横向向量决定的两部分，也在空间转动下保持不变。标量 $\lambda$ 显然表示一个自由度；向量 $\xi^i$ 看起来表示三个自由度，但其中一个是虚假的，因为 $\xi^i$ 的选择不唯一——这等价于规范变换自由 $\xi_i\to\xi_i+\partial_i\omega$。因此总计仍是三个自由度，恰好足以描述原来的向量场 $w^i$。

同样的步骤也适用于无迹对称张量 $s^{ij}$。它可以分解成横向部分 $s_\perp^{ij}$、螺线部分 $s_{\mathrm S}^{ij}$ 和纵向部分 $s_\parallel^{ij}$：

$$
s^{ij}=s_\perp^{ij}+s_{\mathrm S}^{ij}+s_\parallel^{ij}.
\tag{7.50}
$$

横向部分无散；螺线部分的散度是横向的无散向量；纵向部分的散度则是纵向的无旋向量。

<!-- source: PDF 299; printed: 286 -->

换句话说，它们满足

$$
\partial_i\partial_j s_{\mathrm S}^{ij}=0,
\qquad
\epsilon^{jkl}\partial_k\partial_i s_{\parallel j}{}^i=0.
\tag{7.51}
$$

这意味着，纵向部分可以由一个标量 $\theta$ 导出，而螺线部分可以由一个横向向量 $\zeta^i$ 导出：

$$
s_{\parallel ij}
=\left(\partial_i\partial_j-\frac13\delta_{ij}\nabla^2\right)\theta,
\qquad
s_{\mathrm S ij}=\partial_{(i}\zeta_{j)},
\tag{7.52}
$$

其中

$$
\partial_i\zeta^i=0.
\tag{7.53}
$$

因此，纵向部分包含一个自由度，螺线部分包含两个自由度，横向部分则包含一个无迹对称 $3\times3$ 矩阵余下的两个自由度。我们稍后将会看到，在真空中采用横向无迹规范时，只有 $s_\perp^{ij}$ 保持非零。

综上，原来度规微扰的十个分量可以分成四个标量 $\Phi$、$\Psi$、$\lambda$、$\theta$（各含一个自由度），两个横向向量 $\xi^i$、$\zeta^i$（各含两个自由度），以及一个横向无迹张量 $s_\perp^{ij}$（含两个自由度）。相应地，它们常被称为度规微扰的**标量模**、**向量模**和**张量模**。我们还可以对能量-动量张量作类似分解，再写出 Einstein 方程，从而把规范不变的自由度彼此隔离开来。本书不会真正用到这套分解，但在相关文献中遇到它时，应当知道这些术语的含义。

## 7.3 牛顿场与光子轨迹

我们在第 4 章讨论 Newton 极限时，既假定产生引力场的物质源不随时间变化，也假定在场中运动的测试粒子速度很慢。现在保留静态源的假设，却允许测试粒子具有任意速度。相对论性粒子也会响应空间度规，所以这会把我们此前的分析向前推进一步。

考虑由无压完美流体，即尘埃构成的静态源。在流体静止系中，能量-动量张量为

<!-- source: PDF 300; printed: 287 -->

$$
T_{\mu\nu}=\rho U_\mu U_\nu
=
\begin{pmatrix}
\rho&0&0&0\\
0&0&0&0\\
0&0&0&0\\
0&0&0&0
\end{pmatrix}.
\tag{7.54}
$$

由于背景是平直的，如果源整体运动，我们总可以从静止系作 Lorentz 变换来求它产生的场；不过，这一做法无法处理彼此具有很大相对速度的多个源。

采用式 (7.38)—(7.40) 的横向规范。静态条件使所有时间导数消失，把式 (7.54) 代入后得到

$$
\begin{aligned}
\nabla^2\Psi&=4\pi G\rho,\\
\nabla^2w_j&=0,\\
(\delta_{ij}\nabla^2-\partial_i\partial_j)(\Phi-\Psi)
-\nabla^2s_{ij}&=0.
\end{aligned}
\tag{7.55}
$$

我们寻求处处非奇异且在无穷远表现良好的解，因此只有确实被物质源激发的场才会非零。第二个方程随即给出 $w^i=0$。对第三个方程取迹可得

$$
2\nabla^2(\Phi-\Psi)=0,
\tag{7.56}
$$

从而

$$
\Phi=\Psi.
\tag{7.57}
$$

回想第 4 章最初的 Newton 极限推导，当时 $00$ 分量 $\Phi$ 满足 Poisson 方程；在这里，乍看之下反倒是空间度规中的标量微扰 $\Psi$ 满足该方程。二者的联系隐含在式 (7.56) 中：当 $T_{ij}$ 的迹，也就是三个主压力之和为零时，它强制 $\Phi$ 与 $\Psi$ 相等。把这一结果代回最后一个方程，得到

$$
\nabla^2s_{ij}=0,
\tag{7.58}
$$

良好的边界条件又使 $s_{ij}=0$。所以最终度规为

$$
\boxed{
\mathrm ds^2=-(1+2\Phi)\mathrm dt^2
+(1-2\Phi)(\mathrm dx^2+\mathrm dy^2+\mathrm dz^2)
}.
\tag{7.59}
$$

<!-- source: PDF 301; printed: 288 -->

或者等价地，

$$
h_{\mu\nu}
=\operatorname{diag}(-2\Phi,-2\Phi,-2\Phi,-2\Phi),
\tag{7.60}
$$

其中

$$
\nabla^2\Phi=4\pi G\rho.
\tag{7.61}
$$

这比第 4 章所得结果更完整，因为我们现在也知道空间度规的微扰。

现在考察光子或其他无质量粒子沿类光测地线 $x^\mu(\lambda)$ 的运动，并求解微扰后的测地线方程。图 7.3 展示了我们的设置。我们把度规看成平直背景上的微扰，并相应地把测地线分解为

$$
x^\mu(\lambda)=x^{(0)\mu}(\lambda)+x^{(1)\mu}(\lambda).
\tag{7.62}
$$

这里 $x^{(0)\mu}$ 是一条直的类光测地线。为了求出 $x^{(1)\mu}$，我们将所有量都沿这条背景路径求值。这要求势在背景轨迹和真实轨迹之间的变化不可显著，即 $x^{(1)i}\partial_i\Phi\ll\Phi$。若这项条件对整段路径不成立，可以把路径分成足够短的区间，使每一段上的 $x^{(1)i}$ 都很小，再把各段拼合起来。下面写出的是真实方程；在实际积分时，只需把沿 $x^{(0)\mu}$ 的积分替换为沿真实路径 $x^\mu$ 的积分，这些结果便仍然有效。[^7-2]

**图 7.3**　一条发生偏折的测地线 $x^\mu(\lambda)$，被分解为背景测地线 $x^{(0)\mu}$ 与微扰 $x^{(1)\mu}$。偏折角 $\widehat{\boldsymbol\alpha}$ 表示波矢沿路径旋转量的负值。图中画出的是一个质量为 $M$、冲击参数为 $b$ 的单一物体，不过这套设置具有更一般的适用性。

[^7-2]: 这里概述的方法见 T. Pyne 与 M. Birkinshaw, *Astrophysical Journal* **458**, 46 (1996)，[astro-ph/9504060](http://arxiv.org/abs/astro-ph/9504060)。

<!-- source: PDF 302; printed: 289 -->

在足够短的路径上，$x^{(1)i}$ 必然很小，因此这套近似总能成立；较长路径则可由这些短段拼合而成。

定义背景波矢 $k^\mu$ 以及它的一阶偏差 $\ell^\mu$：

$$
k^\mu\equiv\frac{\mathrm dx^{(0)\mu}}{\mathrm d\lambda},
\qquad
\ell^\mu\equiv\frac{\mathrm dx^{(1)\mu}}{\mathrm d\lambda}.
\tag{7.63}
$$

轨迹为类光曲线的条件是

$$
g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}=0.
\tag{7.64}
$$

在零阶，这给出 $\eta_{\mu\nu}k^\mu k^\nu=0$，也就是

$$
(k^0)^2=(\vec k)^2\equiv k^2.
\tag{7.65}
$$

按照定义，$k^\mu$ 沿背景轨迹为常量。一阶条件为

$$
2\eta_{\mu\nu}k^\mu\ell^\nu
+h_{\mu\nu}k^\mu k^\nu=0,
\tag{7.66}
$$

或写成

$$
-k\ell^0+\vec\ell\mathbin{\cdot}\vec k=2k^2\Phi.
\tag{7.67}
$$

接着对测地线方程作微扰：

$$
\frac{\mathrm d^2x^\mu}{\mathrm d\lambda^2}
+\Gamma^\mu{}_{\rho\sigma}
\frac{\mathrm dx^\rho}{\mathrm d\lambda}
\frac{\mathrm dx^\sigma}{\mathrm d\lambda}=0.
\tag{7.68}
$$

利用 $w_i=0$ 和 $h_{ij}=-2\Phi\delta_{ij}$，由式 (7.19) 可得非零 Christoffel 符号

$$
\Gamma^0{}_{0i}=\Gamma^i{}_{00}=\partial_i\Phi,
\qquad
\Gamma^i{}_{jk}
=\delta_{jk}\partial_i\Phi
-\delta_{ik}\partial_j\Phi
-\delta_{ij}\partial_k\Phi.
\tag{7.69}
$$

零阶方程只说明背景路径是一条直线；一阶方程则为

$$
\frac{\mathrm d\ell^\mu}{\mathrm d\lambda}
=-\Gamma^\mu{}_{\rho\sigma}k^\rho k^\sigma.
\tag{7.70}
$$

<!-- source: PDF 303; printed: 290 -->

等式右边没有 $\ell^\mu$ 的因子，因为 Christoffel 符号本身已经是微扰的一阶量。式 (7.70) 的 $\mu=0$ 分量为

$$
\frac{\mathrm d\ell^0}{\mathrm d\lambda}
=-2k(\vec k\mathbin{\cdot}\vec\nabla\Phi),
\tag{7.71}
$$

空间分量则为

$$
\frac{\mathrm d\vec\ell}{\mathrm d\lambda}
=-2k^2\vec\nabla_\perp\Phi.
\tag{7.72}
$$

这里引入了垂直于路径的梯度，它等于总梯度减去沿路径方向的梯度：

$$
\begin{aligned}
\vec\nabla_\perp\Phi
&\equiv\vec\nabla\Phi-\vec\nabla_\parallel\Phi\\
&=\vec\nabla\Phi
-k^{-2}(\vec k\mathbin{\cdot}\vec\nabla\Phi)\vec k.
\end{aligned}
\tag{7.73}
$$

上述各式中的“路径”都指背景路径。

注意，到 $\Phi$ 的一阶，空间波矢的微扰 $\vec\ell$ 与原来的空间波矢 $\vec k$ 正交。为证明这一点，积分式 (7.71)，得到

$$
\begin{aligned}
\ell^0
&=\int\frac{\mathrm d\ell^0}{\mathrm d\lambda}\,\mathrm d\lambda\\
&=-2k\int(\vec k\mathbin{\cdot}\vec\nabla\Phi)\,\mathrm d\lambda\\
&=-2k\int\left(\frac{\mathrm d\vec x}{\mathrm d\lambda}
\mathbin{\cdot}\vec\nabla\Phi\right)\mathrm d\lambda\\
&=-2k\int\vec\nabla\Phi\mathbin{\cdot}\mathrm d\vec x\\
&=-2k\Phi.
\end{aligned}
\tag{7.74}
$$

积分常数由 $\Phi=0$ 时 $\ell^0=0$ 的要求固定。把它代入式 (7.67)，可见

$$
\vec\ell\mathbin{\cdot}\vec k
=k\ell^0+2k^2\Phi=0,
\tag{7.75}
$$

这验证了 $\vec\ell$ 与 $\vec k$ 到一阶确实正交。

**偏折角** $\widehat{\boldsymbol\alpha}$ 是原空间波矢从光源传播到观测者的过程中发生偏转的量；它是垂直于 $\vec k$ 的平面内的二维向量。（这里使用 $\widehat{\boldsymbol\alpha}$ 而不使用 $\vec\alpha$，因为后者将在第 8 章表示约化偏折角。）根据图 7.3 的几何关系，偏折角可写为

<!-- source: PDF 304; printed: 291 -->

$$
\widehat{\boldsymbol\alpha}
=-\frac{\Delta\vec\ell}{k}.
\tag{7.76}
$$

负号只是在说明，观测者沿光子路径向后看时所测得的偏折角，与波矢的旋转方向相反。由式 (7.72)，波矢的旋转量为

$$
\begin{aligned}
\Delta\vec\ell
&=\int\frac{\mathrm d\vec\ell}{\mathrm d\lambda}\,\mathrm d\lambda\\
&=-2k^2\int\vec\nabla_\perp\Phi\,\mathrm d\lambda.
\end{aligned}
\tag{7.77}
$$

因此，用实际走过的空间距离 $s=k\lambda$ 作积分变量，偏折角可以表示为

$$
\boxed{
\widehat{\boldsymbol\alpha}
=2\int\vec\nabla_\perp\Phi\,\mathrm ds
}.
\tag{7.78}
$$

对于点质量，可以直接求出偏折角。设背景路径沿 $x$ 方向，冲击参数由横向向量 $\vec b$ 定义；在最近接点处，$\vec b$ 从路径指向该质量。令 $b=|\vec b|$，则势为

$$
\Phi=-\frac{GM}{r}
=-\frac{GM}{(b^2+x^2)^{1/2}},
\tag{7.79}
$$

所以其横向梯度为

$$
\vec\nabla_\perp\Phi
=\frac{GM}{(b^2+x^2)^{3/2}}\vec b.
\tag{7.80}
$$

偏折角于是为

$$
\begin{aligned}
\widehat\alpha
&=2GMb\int\frac{\mathrm dx}{(b^2+x^2)^{3/2}}\\
&=\frac{4GM}{b},
\end{aligned}
\tag{7.81}
$$

其中积分区间取为 $-\infty$ 到 $\infty$，即假定光源和观测者都离造成偏折的质量非常远。请记住，我们采用的单位制中 $c=1$；在其他单位制中，式 (7.81) 的分母应补上因子 $c^2$。

太阳引起的光线偏折在历史上曾是检验广义相对论的关键实验。Einstein 提出了三项这样的检验：水星近日点进动、引力红移和光线偏折。广义相对论成功解释了水星近日点进动，但它解释的是一个当时已经观测到的偏差；引力红移则到很久以后才被观测到，

<!-- source: PDF 305; printed: 292 -->

所以光线偏折是 Einstein 理论第一次正确预言尚未被探测到的现象。Eddington 领导的一支著名考察队在 1919 年日全食期间观测了太阳附近恒星的位置；观测结果与广义相对论的预言相符，使这条消息登上了世界各地报纸的头版。预言的效应相当小：对太阳而言，$GM_\odot/c^2=1.48\times10^5\ \mathrm{cm}$，太阳半径为 $R_\odot=6.96\times10^{10}\ \mathrm{cm}$，因此最大偏折角为 $\widehat\alpha=1.75$ 角秒。后来对 Eddington 结果的重新评估，让人怀疑他是否真的达到了最初宣称的精度；现代测量采用对从太阳后方经过的类星体进行高精度干涉观测，从而极其精确地检验广义相对论，而它迄今通过了这些检验。与此同时，对星系和恒星等天体引起的光线偏折的观测，已经以“**引力透镜**”之名成为活跃的研究领域。当然，在这类情形中，我们很少能足够准确地知道透镜质量，以便精密检验广义相对论；更常见的做法是利用观测到的偏折角测量质量。第 8 章将更深入讨论引力透镜。

除了光线偏折，Shapiro 在 1964 年还指出了弱场广义相对论对光子轨迹的另一项可观测后果：**引力时间延迟**。沿类光曲线经过的总坐标时间为

$$
t=\int\frac{\mathrm dx^0}{\mathrm d\lambda}\,\mathrm d\lambda.
\tag{7.82}
$$

我们把自己置于一位远离任何源、在背景惯性系中静止的观测者的位置，因此坐标时间就是该观测者的固有时。在 Newton 势存在时，相对于背景光锥，光子看起来会“减速”，由此产生额外时间延迟

$$
\begin{aligned}
\Delta t
&=\int\frac{\mathrm dx^{(1)0}}{\mathrm d\lambda}\,\mathrm d\lambda\\
&=\int\ell^0\,\mathrm d\lambda\\
&=-2k\int\Phi\,\mathrm d\lambda,
\end{aligned}
\tag{7.83}
$$

也就是

$$
\Delta t=-2\int\Phi\,\mathrm ds.
\tag{7.84}
$$

按照我们的规则，这个积分沿背景路径计算。除 Shapiro 延迟外，还可能存在额外的“几何”时间延迟，因为真实路径走过的空间距离比背景路径更长。太阳引起的光线偏折中，几何延迟可以忽略；在宇宙学应用中，它却可能与 Shapiro 延迟相当。

<!-- source: PDF 306; printed: 293 -->

这一时间延迟已经被观测到；精度最高的测量利用的是航天器，而非自然存在的天体。详情可参见 Will（1981）。

光子穿过 Newton 势的运动会同时造成光线偏折和引力时间延迟。也可以换一种等价的方式推导这些结果：设想光子在一个折射率为

$$
n=1-2\Phi
\tag{7.85}
$$

的介质中传播，这一表达式取到一阶。事实上，我们本可以利用 Fermat 最短时间原理求出光子的运动方程；习题将要求你证明这一点。

## 7.4 引力波解

弱场极限更令人振奋的一项应用是引力辐射。这里研究的是引力场中能够自由传播的自由度：它们的存在不需要局域源，当然，局域源可以产生它们。因此，我们再次回到横向规范下的弱场方程 (7.38)—(7.40)，这一次保留时间导数，同时把能量-动量张量完全关掉，即 $T_{\mu\nu}=0$。于是 $00$ 方程为

$$
\nabla^2\Psi=0,
\tag{7.86}
$$

在良好的边界条件下，这意味着 $\Psi=0$。随后 $0j$ 方程为

$$
\nabla^2w_j=0,
\tag{7.87}
$$

同样给出 $w_j=0$。

接着考察 $ij$ 方程的迹。代入上述结果后得到

$$
\nabla^2\Phi=0,
\tag{7.88}
$$

所以 $\Phi=0$。这样只剩 $ij$ 方程的无迹部分，它成为无迹应变张量的波动方程：

$$
\Box s_{ij}=0.
\tag{7.89}
$$

到目前为止，使用 $s_{ij}$ 很方便。不过文献更常把公式写成整个度规微扰 $h_{\mu\nu}$ 的形式，并采用这样一种拟设：其他所有自由度 $(\Phi,\Psi,w_i)$ 都设为零，且 $s_{ij}$ 横向。这通常称为**横向无迹规范**（transverse traceless gauge），在该规范中

<!-- source: PDF 307; printed: 294 -->

$$
h^{\mathrm{TT}}_{\mu\nu}
=
\begin{pmatrix}
0&0\\
0&2s_{ij}
\end{pmatrix}.
\tag{7.90}
$$

于是运动方程为

$$
\Box h^{\mathrm{TT}}_{\mu\nu}=0.
\tag{7.91}
$$

为了便于与其他资料比较，讨论引力波时我们将使用 $h^{\mathrm{TT}}_{\mu\nu}$ 而非 $s_{ij}$，并始终记住 $h^{\mathrm{TT}}_{\mu\nu}$ 纯为空间分量、无迹且横向：

$$
\begin{aligned}
h^{\mathrm{TT}}_{0\nu}&=0,\\
\eta^{\mu\nu}h^{\mathrm{TT}}_{\mu\nu}&=0,\\
\partial_\mu h_{\mathrm{TT}}^{\mu\nu}&=0.
\end{aligned}
\tag{7.92}
$$

从波动方程 (7.91) 出发寻找解。熟悉电磁学中对应问题的读者会发现，两者的步骤几乎完全相同。这个波动方程一组特别有用的解是平面波：

$$
h^{\mathrm{TT}}_{\mu\nu}=C_{\mu\nu}e^{ik_\sigma x^\sigma},
\tag{7.93}
$$

其中 $C_{\mu\nu}$ 是常量、对称的 $(0,2)$ 张量，并且显然无迹、纯为空间分量：

$$
C_{0\nu}=0,
\qquad
\eta^{\mu\nu}C_{\mu\nu}=0.
\tag{7.94}
$$

当然，$e^{ik_\sigma x^\sigma}$ 是复数，而 $h^{\mathrm{TT}}_{\mu\nu}$ 是实数；计算时把实部和虚部都保留下来，最后再取实部。常向量 $k^\sigma$ 是波矢。为检查它确实是一个解，把拟设代入：

$$
\begin{aligned}
0
&=\Box h^{\mathrm{TT}}_{\mu\nu}\\
&=\eta^{\rho\sigma}\partial_\rho\partial_\sigma
h^{\mathrm{TT}}_{\mu\nu}\\
&=\eta^{\rho\sigma}\partial_\rho
(ik_\sigma h^{\mathrm{TT}}_{\mu\nu})\\
&=-\eta^{\rho\sigma}k_\rho k_\sigma h^{\mathrm{TT}}_{\mu\nu}\\
&=-k_\sigma k^\sigma h^{\mathrm{TT}}_{\mu\nu}.
\end{aligned}
\tag{7.95}
$$

<!-- source: PDF 308; printed: 295 -->

对于一个有意义的解，$h^{\mathrm{TT}}_{\mu\nu}$ 的所有分量不可能处处都为零，所以必须有

$$
k_\sigma k^\sigma=0.
\tag{7.96}
$$

因此，当波矢为类光向量时，平面波 (7.93) 才是线性化方程的解。粗略地说，这意味着引力波以光速传播。波矢的类时分量就是波的频率，我们写成 $k^\sigma=(\omega,k^1,k^2,k^3)$。（更一般地，以四速度 $U^\mu$ 运动的观测者测得的频率为 $\omega=-k_\mu U^\mu$。）波矢为类光向量的条件于是变成

$$
\omega^2=\delta_{ij}k^ik^j.
\tag{7.97}
$$

这个平面波当然远非最一般的解；任意个数，甚至无穷多个不同平面波相加后，仍然满足线性方程 (7.91)。事实上，任意解都可以写成这样的叠加。

我们还必须保证微扰横向。这意味着

$$
\begin{aligned}
0
&=\partial_\mu h_{\mathrm{TT}}^{\mu\nu}\\
&=iC^{\mu\nu}k_\mu e^{ik_\sigma x^\sigma},
\end{aligned}
\tag{7.98}
$$

它成立的条件是

$$
k_\mu C^{\mu\nu}=0.
\tag{7.99}
$$

因此可以说，波矢与 $C^{\mu\nu}$ 正交。

选择空间坐标，使波沿 $x^3$ 方向传播，就能把解写得更显式：

$$
k^\mu=(\omega,0,0,k^3)=(\omega,0,0,\omega),
\tag{7.100}
$$

其中 $k^3=\omega$，因为波矢为类光向量。在这种情况下，$k^\mu C_{\mu\nu}=0$ 与 $C_{0\nu}=0$ 合起来给出

$$
C_{3\nu}=0.
\tag{7.101}
$$

于是 $C_{\mu\nu}$ 仅有的非零分量是 $C_{11}$、$C_{12}$、$C_{21}$ 与 $C_{22}$。又因为 $C_{\mu\nu}$ 无迹且对称，所以一般可写为

$$
C_{\mu\nu}=
\begin{pmatrix}
0&0&0&0\\
0&C_{11}&C_{12}&0\\
0&C_{12}&-C_{11}&0\\
0&0&0&0
\end{pmatrix}.
\tag{7.102}
$$

因此，在这一规范中，沿 $x^3$ 方向传播的平面波完全由两个分量 $C_{11}$、$C_{12}$（以及频率 $\omega$）刻画。

<!-- source: PDF 309; printed: 296 -->

为了直观理解一列经过的引力波会产生怎样的物理效应，考虑测试粒子在波存在时的运动。只求一个粒子的轨迹远远不够，因为那只能告诉我们世界线上各点的坐标值。事实上，对任何单个粒子，我们都能找到一组横向无迹坐标，使它到 $h^{\mathrm{TT}}_{\mu\nu}$ 的一阶看起来静止。为了得到与坐标无关的波效应量度，我们考察邻近粒子的相对运动，即测地线偏离方程所描述的运动。设一些邻近粒子的四速度由同一个向量场 $U^\mu(x)$ 描述，分离向量为 $S^\mu$，则

$$
\frac{D^2}{\mathrm d\tau^2}S^\mu
=R^\mu{}_{\nu\rho\sigma}U^\nu U^\rho S^\sigma.
\tag{7.103}
$$

我们希望把右边计算到 $h^{\mathrm{TT}}_{\mu\nu}$ 的一阶。若测试粒子缓慢运动，可把四速度写成时间方向上的单位向量，加上 $h^{\mathrm{TT}}_{\mu\nu}$ 一阶及更高阶的修正。但 Riemann 张量已经是一阶量，所以 $U^\nu$ 的这些修正可以忽略，取

$$
U^\nu=(1,0,0,0).
\tag{7.104}
$$

因此只需计算 $R^\mu{}_{00\sigma}$，等价地计算 $R_{\mu00\sigma}$。由式 (7.5)，

$$
R_{\mu00\sigma}
=\frac12\left(
\partial_0\partial_0h^{\mathrm{TT}}_{\mu\sigma}
+\partial_\sigma\partial_\mu h^{\mathrm{TT}}_{00}
-\partial_\sigma\partial_0h^{\mathrm{TT}}_{\mu0}
-\partial_\mu\partial_0h^{\mathrm{TT}}_{\sigma0}
\right).
\tag{7.105}
$$

由于 $h^{\mathrm{TT}}_{\mu0}=0$，所以

$$
R_{\mu00\sigma}
=\frac12\partial_0\partial_0h^{\mathrm{TT}}_{\mu\sigma}.
\tag{7.106}
$$

另一方面，对这些缓慢运动的粒子，最低阶有 $\tau=x^0=t$，于是测地线偏离方程变为

$$
\frac{\partial^2}{\partial t^2}S^\mu
=\frac12S^\sigma
\frac{\partial^2}{\partial t^2}h^{\mathrm{TT}\,\mu}{}_{\sigma}.
\tag{7.107}
$$

对沿 $x^3$ 方向传播的波，这意味着只有 $S^1$ 和 $S^2$ 会受到影响：测试粒子只在垂直于波矢的方向上受扰。这与电磁学中的情形相似，平面波的电场和磁场都垂直于波矢。

这列波由两个数刻画。为了后文方便，重新把它们命名为

$$
h_+=C_{11},
\qquad
h_\times=C_{12},
\tag{7.108}
$$

<!-- source: PDF 310; printed: 297 -->

于是

$$
C_{\mu\nu}=
\begin{pmatrix}
0&0&0&0\\
0&h_+&h_\times&0\\
0&h_\times&-h_+&0\\
0&0&0&0
\end{pmatrix}.
\tag{7.109}
$$

先分别考察它们的效应，从 $h_\times=0$ 开始。此时

$$
\frac{\partial^2}{\partial t^2}S^1
=\frac12S^1\frac{\partial^2}{\partial t^2}
\left(h_+e^{ik_\sigma x^\sigma}\right),
\tag{7.110}
$$

以及

$$
\frac{\partial^2}{\partial t^2}S^2
=-\frac12S^2\frac{\partial^2}{\partial t^2}
\left(h_+e^{ik_\sigma x^\sigma}\right).
\tag{7.111}
$$

最低阶下可以立即解出

$$
S^1=\left(1+\frac12h_+e^{ik_\sigma x^\sigma}\right)S^1(0),
\tag{7.112}
$$

以及

$$
S^2=\left(1-\frac12h_+e^{ik_\sigma x^\sigma}\right)S^2(0).
\tag{7.113}
$$

因此，初始沿 $x^1$ 方向分离的粒子会沿 $x^1$ 方向振荡，初始沿 $x^2$ 方向分离的粒子也同理。也就是说，若一开始在 $x$-$y$ 平面放置一圈静止粒子，引力波经过时，它们会按“$+$”形模式来回伸缩，如图 7.4 所示。另一方面，若 $h_+=0$ 而 $h_\times\ne0$，同样的分析会给出

$$
S^1=S^1(0)+\frac12h_\times e^{ik_\sigma x^\sigma}S^2(0),
\tag{7.114}
$$

以及

$$
S^2=S^2(0)+\frac12h_\times e^{ik_\sigma x^\sigma}S^1(0).
\tag{7.115}
$$

**图 7.4**　$+$ 偏振引力波会把一圈测试粒子扭曲成椭圆，并使椭圆按 $+$ 形模式振荡。

<!-- source: PDF 311; printed: 298 -->

**图 7.5**　$\times$ 偏振引力波会把一圈测试粒子扭曲成椭圆，并使椭圆按 $\times$ 形模式振荡。

在这种情况下，粒子环会按“$\times$”形模式来回伸缩，如图 7.5 所示。这样，$h_+$ 和 $h_\times$ 这两个记号的含义就很清楚了。它们量度引力波的两种独立线偏振模，称为“正”偏振（plus）与“交叉”偏振（cross）。如果愿意，也可以定义右旋和左旋圆偏振模：

$$
h_R=\frac{1}{\sqrt2}(h_++ih_\times),
\qquad
h_L=\frac{1}{\sqrt2}(h_+-ih_\times).
\tag{7.116}
$$

纯 $h_R$ 波会使粒子沿右旋方向转动，如图 7.6；左旋模 $h_L$ 的情形类似。注意，每个粒子并不沿粒子环绕行，它们只是在很小的副圆上运动。

我们可以把经典引力波的偏振态与量子化后预期出现的粒子类型联系起来。量子场的自旋直接对应于这个场在空间转动下的变换性质。电磁场有两个独立偏振态，可由 $x$-$y$ 平面中的向量描述；等价地说，一个偏振模在该平面内转动 $360^\circ$ 后保持不变。量子化后，这个理论给出光子，即无质量自旋 1 粒子。另一方面，中微子同样是无质量粒子，描述它的场在转动 $360^\circ$ 后会多出一个负号；它在转动 $720^\circ$ 后才保持不变，因此称其自旋为

**图 7.6**　$R$ 偏振引力波会把一圈测试粒子扭曲成椭圆，并使该椭圆沿右旋方向转动。

<!-- source: PDF 312; printed: 299 -->

$\tfrac12$。一般规律是：若偏振模转过角度 $\theta$ 后保持不变，则自旋 $S=360^\circ/\theta$。引力场的波以光速传播，所以在量子理论中应对应无质量粒子。前述偏振模在 $x$-$y$ 平面中转动 $180^\circ$ 后保持不变，因此预期相应粒子——引力子——具有自旋 2。我们距离探测这种粒子还很遥远，甚至永远无法直接探测它们也不令人意外；但任何像样的量子引力理论都应预言它们的存在。

事实上，从自旋 2 引力子的理论出发，并要求几个简单性质，是推导完整广义相对论 Einstein 方程的一条优美途径。设想从对称张量 $h_{\mu\nu}$ 的 Lagrangian (7.9) 开始，但现在把它看成真正传播于 Minkowski 时空的物理场，而不把它看作动力学度规的微扰。（该 Lagrangian 未包含与物质的耦合，不过加上这种耦合很直接。）再额外要求 $h_{\mu\nu}$ 既与物质的能量-动量张量耦合，也与它自身的能量-动量张量——下文将讨论——耦合。这会在作用量中诱导出更高阶非线性项，并继而诱导出阶数更高的额外“能量-动量”项。反复进行这一过程会引入无穷级数；这个级数却能求和为一个简单表达式，或许因为你已经知道答案：Einstein–Hilbert 作用量，也可能还带有某些高阶项。在这一过程中，物质只与唯一组合 $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ 耦合。换句话说，只要要求一个自旋 2 场与能量-动量张量耦合，最终便会得到广义相对论完整的非线性结构，背景度规 $\eta_{\mu\nu}$ 也会变得完全不可观测。当然，广义相对论的某些整体几何方面会被这套做法掩盖；归根到底，它只是为 Einstein 方程提供了另一条论证。

既然谈到了这些有趣的联系，再指出一个事实：引力波的行为提示了弦理论为什么会给出量子引力理论。考察一根闭弦的基本振动模，如图 7.7 所示。弦环有三种最低能量模：一种整体的

**图 7.7**　弦环的三种基本振动模。最左侧的整体“呼吸”模在转动下保持不变，产生自旋 0 粒子。另外两种模式与引力波的两种偏振相吻合，代表无质量自旋 2 粒子的两个状态。

<!-- source: PDF 313; printed: 300 -->

“呼吸”振荡会改变弦环整体大小，另外两种独立振荡会把弦环拉成椭圆。它们产生三个无质量自由度：一个自旋 0 粒子（膨胀子，dilaton）和一个无质量自旋 2 粒子（引力子）。弦的振荡与引力波作用下测试粒子的运动有显而易见的相似性；这绝非巧合，也正是量子化弦必然产生引力的原因。（弦理论最初被研究为强相互作用理论，但各种模型总会预言一个多余的无质量自旋 2 粒子；后来人们意识到，如果把该理论视为量子引力理论，这个缺陷反而可以成为优点。）额外且不需要的自旋 0（标量）模反映了这样一个事实：弦理论真正预言的是标量-张量引力理论（见第 4.8 节），而普通广义相对论没有这个额外标量。自然界并未观测到这种无质量标量，所以必须存在某种机制，使这个标量在低能下获得质量。

## 7.5 引力波的产生

既然已经掌握线性化真空方程的平面波解，接下来要讨论物质源如何产生引力辐射。为此必须考察与物质耦合的 Einstein 方程 $G_{\mu\nu}=8\pi GT_{\mu\nu}$。由于 $T_{\mu\nu}$ 不再为零，度规微扰除代表引力波的应变张量外，还会包含非零的标量和向量分量；因此不能假定解一开始就具有式 (7.90) 的横向无迹形式。我们将保留整个微扰 $h_{\mu\nu}$，求出远离源处产生的引力波，然后在那里施加横向无迹规范。

即使有源，仍可作一些方便的简化。先定义**迹反转微扰**（trace-reversed perturbation）：

$$
\bar h_{\mu\nu}=h_{\mu\nu}-\frac12h\eta_{\mu\nu}.
\tag{7.117}
$$

这个名称很贴切，因为

$$
\bar h\equiv\eta^{\mu\nu}\bar h_{\mu\nu}=-h.
\tag{7.118}
$$

显然，可以从迹反转形式重建原微扰，所以没有丢失信息。还要注意，若处于远离所有源的真空区，并且能够采用横向无迹规范，那么迹反转微扰与原微扰相等：

$$
\bar h^{\mathrm{TT}}_{\mu\nu}=h^{\mathrm{TT}}_{\mu\nu}.
\tag{7.119}
$$

同时，我们仍有选择规范的自由。式 (7.14) 的规范变换会使迹反转微扰按下式变换：

$$
\bar h_{\mu\nu}
\longrightarrow
\bar h_{\mu\nu}+2\partial_{(\mu}\xi_{\nu)}
-\partial_\lambda\xi^\lambda\eta_{\mu\nu}.
\tag{7.120}
$$

<!-- source: PDF 314; printed: 301 -->

选择满足

$$
\Box\xi_\mu=-\partial_\lambda\bar h^\lambda{}_{\mu}
\tag{7.121}
$$

的规范参数 $\xi_\mu$，就可以令

$$
\partial_\mu\bar h^{\mu\nu}=0.
\tag{7.122}
$$

这一条件称为 **Lorenz 规范**，它与电磁学中常用的 $\partial_\mu A^\mu=0$ 类似。[^7-3] 注意，在这一规范下，原微扰并不横向；实际满足的是

$$
\partial_\mu h^{\mu\nu}=\frac12\partial^\nu h.
\tag{7.123}
$$

把迹反转微扰的定义代入 Einstein 张量的表达式 (7.8)，并利用 Lorenz 规范条件，可得极其简洁的结果

$$
G_{\mu\nu}=-\frac12\Box\bar h_{\mu\nu}.
\tag{7.124}
$$

若用原微扰 $h_{\mu\nu}$ 表示，对应公式会稍显杂乱，这正是引入 $\bar h_{\mu\nu}$ 的理由。于是在这一规范下，线性化 Einstein 方程只是每个分量各自满足的波动方程：

$$
\Box\bar h_{\mu\nu}=-16\pi GT_{\mu\nu}.
\tag{7.125}
$$

与电磁学中的对应问题完全一样，这种方程可以借助 Green 函数求解。这里按照 Wald（1984）简要回顾这一方法。

d'Alembert 算符 $\Box$ 的 Green 函数 $G(x^\sigma-y^\sigma)$ 是带有 delta 函数源的波动方程之解：

$$
\Box_xG(x^\sigma-y^\sigma)
=\delta^{(4)}(x^\sigma-y^\sigma),
\tag{7.126}
$$

其中 $\Box_x$ 表示对坐标 $x^\sigma$ 作用的 d'Alembert 算符。这样的函数之所以有用，是因为式 (7.125) 一类方程的一般解可写成

$$
\bar h_{\mu\nu}(x^\sigma)
=-16\pi G\int G(x^\sigma-y^\sigma)
T_{\mu\nu}(y^\sigma)\,\mathrm d^4y,
\tag{7.127}
$$

直接代回即可验证。（背景就是平直时空，所以无需任何 $\sqrt{-g}$ 因子。）式 (7.126) 的解早已求出；依据它们表示向时间未来或时间过去传播的波，可分别称为“推迟”解或“超前”解。

[^7-3]: 请留意拼写。“规范”（gauge）以 Ludwig Lorenz（1829—1891）命名；更著名的“变换”则由 Hendrick Antoon Lorentz（1853—1928）提出。见 J. D. Jackson 与 L. B. Okun, *Reviews of Modern Physics* **73**, 663 (2001)。

<!-- source: PDF 315; printed: 302 -->

我们关心的是推迟 Green 函数，它表示所考察点过去的信号累积造成的效应。其形式为

$$
G(x^\sigma-y^\sigma)
=-\frac{1}{4\pi|\mathbf x-\mathbf y|}
\delta\!\left[|\mathbf x-\mathbf y|-(x^0-y^0)\right]
\theta(x^0-y^0).
\tag{7.128}
$$

这里用粗体表示空间向量 $\mathbf x=(x^1,x^2,x^3)$ 和 $\mathbf y=(y^1,y^2,y^3)$，其距离为
$|\mathbf x-\mathbf y|=[\delta_{ij}(x^i-y^i)(x^j-y^j)]^{1/2}$。当 $x^0>y^0$ 时，阶跃函数 $\theta(x^0-y^0)=1$；其余情况下为零。推导式 (7.128) 会使讨论偏离主线，但任何标准电动力学或物理偏微分方程教材中都能找到它。

把式 (7.128) 代入式 (7.127)，利用 delta 函数完成对 $y^0$ 的积分，得到

$$
\bar h_{\mu\nu}(t,\mathbf x)
=4G\int\frac{1}{|\mathbf x-\mathbf y|}
T_{\mu\nu}\!\left(t-|\mathbf x-\mathbf y|,\mathbf y\right)
\,\mathrm d^3y,
\tag{7.129}
$$

其中 $t=x^0$。“推迟时间”指的是

$$
t_r=t-|\mathbf x-\mathbf y|.
\tag{7.130}
$$

式 (7.129) 的含义很清楚：$(t,\mathbf x)$ 处引力场的扰动，是过去光锥上各点 $(t_r,\mathbf y)$ 处能量与动量源的影响之和，如图 7.8 所示。

**图 7.8**　$(t,x^i)$ 处引力场的扰动由过去光锥上的事件计算得到。

现在利用这个一般解，考虑一个孤立、相当遥远且由非相对论物质组成的源所发出的引力辐射；这些近似将在推导中逐步精确化。首先约定 Fourier 变换。处理振荡现象时，Fourier 变换总能让问题更容易。给定时空函数 $\phi(t,\mathbf x)$，我们只对时间作 Fourier 变换及其逆变换：

<!-- source: PDF 316; printed: 303 -->

$$
\begin{aligned}
\widetilde\phi(\omega,\mathbf x)
&=\frac{1}{\sqrt{2\pi}}\int\mathrm dt\,
e^{i\omega t}\phi(t,\mathbf x),\\
\phi(t,\mathbf x)
&=\frac{1}{\sqrt{2\pi}}\int\mathrm d\omega\,
e^{-i\omega t}\widetilde\phi(\omega,\mathbf x).
\end{aligned}
\tag{7.131}
$$

对度规微扰作变换，得到

$$
\begin{aligned}
\widetilde{\bar h}_{\mu\nu}(\omega,\mathbf x)
&=\frac{1}{\sqrt{2\pi}}\int\mathrm dt\,
e^{i\omega t}\bar h_{\mu\nu}(t,\mathbf x)\\
&=\frac{4G}{\sqrt{2\pi}}\int\mathrm dt\,\mathrm d^3y\,
e^{i\omega t}
\frac{T_{\mu\nu}(t-|\mathbf x-\mathbf y|,\mathbf y)}
{|\mathbf x-\mathbf y|}\\
&=\frac{4G}{\sqrt{2\pi}}\int\mathrm dt_r\,\mathrm d^3y\,
e^{i\omega t_r}e^{i\omega|\mathbf x-\mathbf y|}
\frac{T_{\mu\nu}(t_r,\mathbf y)}{|\mathbf x-\mathbf y|}\\
&=4G\int\mathrm d^3y\,
e^{i\omega|\mathbf x-\mathbf y|}
\frac{\widetilde T_{\mu\nu}(\omega,\mathbf y)}{|\mathbf x-\mathbf y|}.
\end{aligned}
\tag{7.132}
$$

在这一串等式中，第一行只是 Fourier 变换的定义；第二行来自解 (7.129)；第三行把积分变量从 $t$ 换成 $t_r$；第四行再次使用 Fourier 变换定义。

现在采用以下近似：源是孤立的、离观测者很远，并且运动缓慢。这意味着源可视为以空间距离 $r$ 为中心，其不同部分位于 $r+\delta r$ 处，满足 $\delta r\ll r$，如图 7.9 所示。由于源运动缓慢，它发出的辐射大多处于足够低的频率 $\omega$，使 $\delta r\ll\omega^{-1}$。（本质上，光穿过源所需的时间远短于源的各组成部分自身运动的时间尺度。）在这些近似下，$e^{i\omega|\mathbf x-\mathbf y|}/|\mathbf x-\mathbf y|$ 可替换为 $e^{i\omega r}/r$ 并移到积分号外。因此

$$
\widetilde{\bar h}_{\mu\nu}(\omega,\mathbf x)
=4G\frac{e^{i\omega r}}{r}
\int\mathrm d^3y\,\widetilde T_{\mu\nu}(\omega,\mathbf y).
\tag{7.133}
$$

**图 7.9**　大小为 $\delta r$、距观测者为 $r$ 的一个源。

<!-- source: PDF 317; printed: 304 -->

事实上，无需计算 $\widetilde{\bar h}_{\mu\nu}(\omega,\mathbf x)$ 的所有分量，因为 Lorenz 规范条件 $\partial_\mu\bar h^{\mu\nu}(t,\mathbf x)=0$ 在 Fourier 空间中意味着

$$
\widetilde{\bar h}^{0\nu}
=\frac{i}{\omega}\partial_i\widetilde{\bar h}^{i\nu}.
\tag{7.134}
$$

> **勘误说明：** 本书这一页印刷的式 (7.134) 在右端写有负号；官方勘误指出该负号应删除。这里采用勘误后的正号版本。

因此只需关心 $\widetilde{\bar h}_{\mu\nu}(\omega,\mathbf x)$ 的类空分量，再由式 (7.134) 恢复 $\widetilde{\bar h}^{0\nu}$。先令 $\nu=j$，由 $\widetilde{\bar h}^{ij}$ 求出 $\widetilde{\bar h}^{0j}$，随后再利用 $\widetilde{\bar h}^{i0}$ 求出 $\widetilde{\bar h}^{00}$。根据式 (7.133)，我们需要积分 $\widetilde T_{\mu\nu}(\omega,\mathbf y)$ 的类空分量。先反向使用分部积分：

$$
\int\mathrm d^3y\,\widetilde T^{ij}(\omega,\mathbf y)
=\int\partial_k\!\left(y^i\widetilde T^{kj}\right)\mathrm d^3y
-\int y^i\left(\partial_k\widetilde T^{kj}\right)\mathrm d^3y.
\tag{7.135}
$$

第一项是表面积分；由于源孤立，它会消失。第二项则可利用 $\partial_\mu T^{\mu\nu}=0$ 在 Fourier 空间中的形式，与 $\widetilde T^{0j}$ 联系起来：

$$
-\partial_k\widetilde T^{k\mu}=i\omega\widetilde T^{0\mu}.
\tag{7.136}
$$

因此

$$
\begin{aligned}
\int\mathrm d^3y\,\widetilde T^{ij}(\omega,\mathbf y)
&=i\omega\int y^i\widetilde T^{0j}\,\mathrm d^3y\\
&=\frac{i\omega}{2}\int
\left(y^i\widetilde T^{0j}+y^j\widetilde T^{0i}\right)\mathrm d^3y\\
&=\frac{i\omega}{2}\int
\left[\partial_l\!\left(y^iy^j\widetilde T^{0l}\right)
-y^iy^j\left(\partial_l\widetilde T^{0l}\right)\right]\mathrm d^3y\\
&=-\frac{\omega^2}{2}\int y^iy^j\widetilde T^{00}\,\mathrm d^3y.
\end{aligned}
\tag{7.137}
$$

第二行成立，是因为左边关于 $i,j$ 对称；第三、第四行再次使用了反向分部积分和 $T^{\mu\nu}$ 守恒。通常把源的能量密度**四极矩张量**定义为

$$
I_{ij}(t)=\int y^iy^jT^{00}(t,\mathbf y)\,\mathrm d^3y,
\tag{7.138}
$$

它在每个等时面上都是一个常张量。四极矩张量的整体归一化取决于约定，而且远未统一，所以比较不同资料时要格外小心。用四极矩的 Fourier 变换表示，解具有紧凑形式

$$
\widetilde{\bar h}_{ij}(\omega,\mathbf x)
=-2G\omega^2\frac{e^{i\omega r}}{r}\widetilde I_{ij}(\omega).
\tag{7.139}
$$

<!-- source: PDF 318; printed: 305 -->

把它变换回 $t$，便得到**四极矩公式**：

$$
\boxed{
\bar h_{ij}(t,\mathbf x)
=\frac{2G}{r}\frac{\mathrm d^2I_{ij}}{\mathrm dt^2}(t_r)
}.
\tag{7.140}
$$

这里仍有 $t_r=t-r$。

因此，孤立非相对论物体产生的引力波，正比于观测者的过去光锥与物质源相交处能量密度四极矩的二阶导数。相比之下，电磁辐射的最低阶贡献来自电荷密度随时间变化的**偶极矩**。这种差别源于引力作用的普适性。随时间变化的偶极矩表示密度中心在运动；电磁学中是电荷密度中心，引力中则是能量密度中心。物体的电荷中心可以振荡，但孤立系统的质心若振荡，就会违反动量守恒。（你可以上下摇动一个物体，但作为补偿，你和地球也会以极其微小的幅度朝相反方向摇动。）四极矩量度系统的形状，通常比偶极矩更小；再加上物质与引力的耦合很弱，引力辐射通常远弱于电磁辐射。

一个特别值得关注的例子是双星，即两颗彼此绕转的恒星所发出的引力辐射。为简单起见，考虑两颗质量均为 $M$ 的恒星，在 $x^1$-$x^2$ 平面中沿圆轨道运动，各自距共同质心为 $R$，如图 7.10 所示。我们在 Newton 近似下处理恒星运动，因此可以像 Kepler 那样讨论轨道。刻画圆轨道最方便的方法，是令引力等于向外的“离心力”：

$$
\frac{GM^2}{(2R)^2}=\frac{Mv^2}{R},
\tag{7.141}
$$

由此得到

$$
v=\left(\frac{GM}{4R}\right)^{1/2}.
\tag{7.142}
$$

绕完整一周所需的时间为

$$
T=\frac{2\pi R}{v},
\tag{7.143}
$$

但对我们更有用的是轨道角频率

$$
\Omega=\frac{2\pi}{T}
=\left(\frac{GM}{4R^3}\right)^{1/2}.
\tag{7.144}
$$

<!-- source: PDF 319; printed: 306 -->

**图 7.10**　一个双星系统。两颗质量为 $M$ 的恒星在 $x^1$-$x^2$ 平面内以轨道半径 $R$ 绕转。

用 $\Omega$ 可以把恒星 $a$ 的显式轨迹写为

$$
x_a^1=R\cos\Omega t,
\qquad
x_a^2=R\sin\Omega t,
\tag{7.145}
$$

恒星 $b$ 的轨迹为

$$
x_b^1=-R\cos\Omega t,
\qquad
x_b^2=-R\sin\Omega t.
\tag{7.146}
$$

相应能量密度为

$$
\begin{aligned}
T^{00}(t,\mathbf x)=M\delta(x^3)\bigl[&
\delta(x^1-R\cos\Omega t)\delta(x^2-R\sin\Omega t)\\
&+\delta(x^1+R\cos\Omega t)\delta(x^2+R\sin\Omega t)
\bigr].
\end{aligned}
\tag{7.147}
$$

众多 delta 函数让积分非常直接。由式 (7.138) 得到四极矩

$$
\begin{aligned}
I_{11}&=2MR^2\cos^2\Omega t
=MR^2(1+\cos2\Omega t),\\
I_{22}&=2MR^2\sin^2\Omega t
=MR^2(1-\cos2\Omega t),\\
I_{12}=I_{21}&=2MR^2(\cos\Omega t)(\sin\Omega t)
=MR^2\sin2\Omega t,\\
I_{i3}&=0.
\end{aligned}
\tag{7.148}
$$

于是很容易再由式 (7.140) 求出度规微扰的分量：

<!-- source: PDF 320; printed: 307 -->

$$
\bar h_{ij}(t,\mathbf x)
=\frac{8GM}{r}\Omega^2R^2
\begin{pmatrix}
-\cos2\Omega t_r&-\sin2\Omega t_r&0\\
-\sin2\Omega t_r&\cos2\Omega t_r&0\\
0&0&0
\end{pmatrix}.
\tag{7.149}
$$

$\bar h_{\mu\nu}$ 的其余分量可由要求 Lorenz 规范条件成立而求出。

## 7.6 引力辐射造成的能量损失

讲到这里，自然要讨论通过引力辐射发出的能量。然而，这一讨论立刻会遇到技术上和观念上的困难。前面已经提过，引力场的能量没有真正的局域量度。当然，在弱场极限下，我们把引力视作在固定背景度规上传播的对称张量；这时似乎可以仿照电磁学或其他场论，为涨落 $h_{\mu\nu}$ 推导能量-动量张量。某种程度上确实可以做到，但仍很困难。因此，文献对弱场极限中应把什么当作引力的能量-动量张量提出了多种方案；它们彼此不同，却大多会对物理上定义良好的问题给出相同答案，例如双星系统发射能量的速率。

从技术层面说，一旦考虑能量-动量张量应具有怎样的形式，困难就开始出现。我们之前提到过电磁场和标量场的能量-动量张量；它们共有一个重要特征：都对相关场为二次式。按照假设，我们处理弱场极限时一直只保留度规微扰的线性项。因此，若要追踪引力波携带的能量，至少必须把计算扩展到 $h_{\mu\nu}$ 的二阶。事实上，前面的讨论已经稍稍走了捷径。讨论引力波对测试粒子的效应以及双星系统产生波时，我们使用了测试粒子沿测地线运动这一事实。但我们知道，它来自能量-动量的协变守恒 $\nabla_\mu T^{\mu\nu}=0$。在当前计算阶数下，实际得到的是 $\partial_\mu T^{\mu\nu}=0$，这会意味着测试粒子沿平直背景度规中的直线运动。这正反映了弱场极限无法完整描述自引力系统。实践中最好的办法，是把弱场方程解到某个合适阶数，再事后论证所得解的有效性。下面遵循 Misner、Thorne 与 Wheeler（1973）第 35、36 章概述的步骤；更多细节讨论也可见 Wald（1984）与 Schutz（1985）。

现在把 Einstein 真空方程 $R_{\mu\nu}=0$ 展开到二阶，考察其结果如何解释为一个关于

<!-- source: PDF 321; printed: 308 -->

引力场的能量-动量张量。把度规和 Ricci 张量都展开：

$$
\begin{aligned}
g_{\mu\nu}&=\eta_{\mu\nu}+h^{(1)}_{\mu\nu}+h^{(2)}_{\mu\nu},\\
R_{\mu\nu}&=R^{(0)}_{\mu\nu}+R^{(1)}_{\mu\nu}+R^{(2)}_{\mu\nu},
\end{aligned}
\tag{7.150}
$$

其中 $R^{(1)}_{\mu\nu}$ 与 $h^{(1)}_{\mu\nu}$ 取作同阶，而 $R^{(2)}_{\mu\nu}$ 和 $h^{(2)}_{\mu\nu}$ 的阶数都是 $(h^{(1)}_{\mu\nu})^2$。背景平直，所以零阶方程 $R^{(0)}_{\mu\nu}=0$ 自动满足。一阶真空方程就是

$$
R^{(1)}_{\mu\nu}[h^{(1)}]=0,
\tag{7.151}
$$

它确定一阶微扰 $h^{(1)}_{\mu\nu}$，只差规范变换。二阶微扰 $h^{(2)}_{\mu\nu}$ 由二阶方程确定：

$$
R^{(1)}_{\mu\nu}[h^{(2)}]
+R^{(2)}_{\mu\nu}[h^{(1)}]=0.
\tag{7.152}
$$

记号 $R^{(1)}_{\mu\nu}[h^{(2)}]$ 表示展开后的 Ricci 张量中对度规微扰线性的部分，即式 (7.6)，但作用于二阶微扰 $h^{(2)}_{\mu\nu}$；相应地，$R^{(2)}_{\mu\nu}[h^{(1)}]$ 表示展开后 Ricci 张量的二次部分：

$$
\begin{aligned}
R^{(2)}_{\mu\nu}={}&
\frac12h^{\rho\sigma}\partial_\mu\partial_\nu h_{\rho\sigma}
+\frac14(\partial_\mu h_{\rho\sigma})\partial_\nu h^{\rho\sigma}
+(\partial^\sigma h^\rho{}_{\nu})\partial_{[\sigma}h_{\rho]\mu}
-h^{\rho\sigma}\partial_\rho\partial_{(\mu}h_{\nu)\sigma}\\
&+\frac12\partial_\sigma(h^{\rho\sigma}\partial_\rho h_{\mu\nu})
-\frac14(\partial_\rho h_{\mu\nu})\partial^\rho h
-\left(\partial_\sigma h^{\rho\sigma}-\frac12\partial^\rho h\right)
\partial_{(\mu}h_{\nu)\rho}.
\end{aligned}
\tag{7.153}
$$

这里把它作用于一阶微扰 $h^{(1)}_{\mu\nu}$。没有交叉项，因为交叉项必然属于更高阶。

现在把真空方程写成 $G_{\mu\nu}=0$。这当然等价于 $R_{\mu\nu}=0$，但能让结果呈现出启发性的形式。二阶有

$$
R^{(1)}_{\mu\nu}[h^{(2)}]
-\frac12\eta^{\rho\sigma}R^{(1)}_{\rho\sigma}[h^{(2)}]\eta_{\mu\nu}
=8\pi Gt_{\mu\nu},
\tag{7.154}
$$

其中定义

$$
t_{\mu\nu}\equiv-\frac{1}{8\pi G}
\left\{
R^{(2)}_{\mu\nu}[h^{(1)}]
-\frac12\eta^{\rho\sigma}R^{(2)}_{\rho\sigma}[h^{(1)}]\eta_{\mu\nu}
\right\}.
\tag{7.155}
$$

关于这个表达式，有几点值得注意。第一，没有写出 $h^{(1)\rho\sigma}R^{(1)}_{\rho\sigma}[h^{(1)}]$ 一类项，因为 $R^{(1)}_{\mu\nu}[h^{(1)}]=0$。第二，式 (7.154) 左边并非完整的二阶 Einstein 张量；我们把含 $R^{(2)}_{\mu\nu}[h^{(1)}]$ 的项移到了右边，并有意把它们重新标记为一阶微扰的能量-动量张量 $t_{\mu\nu}$。这种识别

<!-- source: PDF 322; printed: 309 -->

看起来非常合理：$t_{\mu\nu}$ 是一个关于 $h_{\mu\nu}$ 二次的对称张量，它以物质能量-动量张量影响时空度规的同样方式，表示微扰如何影响时空度规。（$h_{\mu\nu}$ 的线性项没有作用，因为一阶方程直接令 $G^{(1)}_{\mu\nu}[h^{(1)}]=0$。）还要注意，$t_{\mu\nu}$ 在背景平直时空的意义下守恒：

$$
\partial_\mu t^{\mu\nu}=0,
\tag{7.156}
$$

这来自 Bianchi 恒等式 $\partial_\mu G^{\mu\nu}=0$。

遗憾的是，把 $t_{\mu\nu}$ 解释为能量-动量张量仍有一些限制。在完整理论中它根本不是张量，不过我们按假设先把这一点搁置。更重要的是，直接计算即可验证，它在规范变换，也就是无穷小微分同胚下并不保持不变。绕开这一困难的一种方法，是在若干个波长范围内对能量-动量张量取平均；用尖括号 $\langle\cdots\rangle$ 表示这一操作。该方法在观念上和实践上都有优点。从观念上看，任一点都能选取 Riemann 正规坐标，因此不可能定义可靠而纯局域的引力能量-动量量度；所谓纯局域，是指只用恰好该点的度规及其一阶导数来定义。若在若干波长范围上取平均，就有希望在一个小区域内捕获足够多的物理曲率，从而描述规范不变量。从实践上看，任何整体为导数的项都会平均为零，有别于导数的乘积：

$$
\left\langle\partial_\mu(X)\right\rangle=0.
\tag{7.157}
$$

因此可以在平均括号内作分部积分：

$$
\left\langle A(\partial_\mu B)\right\rangle
=-\left\langle(\partial_\mu A)B\right\rangle,
\tag{7.158}
$$

这会大幅简化表达式。

考虑到这些性质，现在利用二阶 Ricci 张量的式 (7.153)，计算式 (7.155) 定义的 $t_{\mu\nu}$。（从这里起，不再给度规微扰加上标，因为我们只关心一阶微扰。）取平均的动机之一是得到规范不变答案，但实际计算十分繁琐，所以为说明思路，我们在横向无迹规范中完成计算：

$$
\partial^\mu h^{\mathrm{TT}}_{\mu\nu}=0,
\qquad
h^{\mathrm{TT}}=0.
\tag{7.159}
$$

不要忘记，只有在真空中才允许选择这一规范。在该规范下，$R^{(2)\mathrm{TT}}_{\mu\nu}$ 的非零部分可以写成

$$
\begin{aligned}
R^{(2)\mathrm{TT}}_{\mu\nu}={}&
\frac12h_{\mathrm{TT}}^{\rho\sigma}\partial_\mu\partial_\nu h^{\mathrm{TT}}_{\rho\sigma}
+\frac14(\partial_\mu h^{\mathrm{TT}}_{\rho\sigma})\partial_\nu h_{\mathrm{TT}}^{\rho\sigma}
+\frac12\eta^{\rho\lambda}(\partial^\sigma h^{\mathrm{TT}}_{\rho\nu})
\partial_\sigma h^{\mathrm{TT}}_{\lambda\mu}\\
&-\frac12(\partial^\sigma h^{\mathrm{TT}}_{\rho\nu})
\partial^\rho h^{\mathrm{TT}}_{\sigma\mu}
-h_{\mathrm{TT}}^{\rho\sigma}\partial_\rho\partial_{(\mu}h^{\mathrm{TT}}_{\nu)\sigma}
+\frac12h_{\mathrm{TT}}^{\rho\sigma}\partial_\sigma\partial_\rho h^{\mathrm{TT}}_{\mu\nu}.
\end{aligned}
\tag{7.160}
$$

<!-- source: PDF 323; printed: 310 -->

现在施加平均括号，并在方便处作分部积分。式 (7.160) 的最后三项都会消失，因为分部积分把它们化为平均后为零的散度项。于是剩下

$$
\left\langle R^{(2)\mathrm{TT}}_{\mu\nu}\right\rangle
=-\frac14\left\langle
(\partial_\mu h^{\mathrm{TT}}_{\rho\sigma})(\partial_\nu h_{\mathrm{TT}}^{\rho\sigma})
+2\eta^{\rho\lambda}(\Box h^{\mathrm{TT}}_{\rho\nu})h^{\mathrm{TT}}_{\lambda\mu}
\right\rangle.
\tag{7.161}
$$

微扰满足一阶运动方程，即 $\Box h^{\mathrm{TT}}_{\mu\nu}=0$。所以最终有

$$
\left\langle R^{(2)\mathrm{TT}}_{\mu\nu}\right\rangle
=-\frac14\left\langle
(\partial_\mu h^{\mathrm{TT}}_{\rho\sigma})
(\partial_\nu h_{\mathrm{TT}}^{\rho\sigma})
\right\rangle.
\tag{7.162}
$$

再取迹可得到曲率标量；分部积分后仍会出现一个 $\Box h^{\mathrm{TT}}_{\mu\nu}$ 项，将其置零，因此

$$
\left\langle\eta^{\mu\nu}R^{(2)\mathrm{TT}}_{\mu\nu}\right\rangle=0.
\tag{7.163}
$$

把这些表达式代入式 (7.155)，便得到横向无迹规范下引力波能量-动量张量的简单公式：

$$
\boxed{
t_{\mu\nu}=\frac{1}{32\pi G}
\left\langle
(\partial_\mu h^{\mathrm{TT}}_{\rho\sigma})
(\partial_\nu h_{\mathrm{TT}}^{\rho\sigma})
\right\rangle
}.
\tag{7.164}
$$

请记住，在这一规范中，非空间分量消失，即 $h^{\mathrm{TT}}_{0\mu}=0$。因此有时会看到上式用空间指标 $ij$ 取代时空指标 $\rho\sigma$；两个版本显然等价。如果我们足够强大，能够在不预先选规范的情况下完成对应计算，就会得到

$$
\begin{aligned}
t_{\mu\nu}=\frac{1}{32\pi G}\Big\langle{}
&(\partial_\mu h_{\rho\sigma})(\partial_\nu h^{\rho\sigma})
-\frac12(\partial_\mu h)(\partial_\nu h)\\
&-(\partial_\rho h^{\rho\sigma})(\partial_\mu h_{\nu\sigma})
-(\partial_\rho h^{\rho\sigma})(\partial_\nu h_{\mu\sigma})
\Big\rangle.
\end{aligned}
\tag{7.165}
$$

只需作一些直接的代数操作，就能验证这一表达式确实规范不变；习题将要求你完成证明。

现在为单个平面波计算横向无迹表达式 (7.164)：

$$
h^{\mathrm{TT}}_{\mu\nu}=C_{\mu\nu}\sin(k_\lambda x^\lambda).
\tag{7.166}
$$

这里取了实部，并任意选择相位，使波用正弦而非余弦表示。能量-动量张量为

$$
t_{\mu\nu}=\frac{1}{32\pi G}
k_\mu k_\nu C_{\rho\sigma}C^{\rho\sigma}
\left\langle\cos^2(k_\lambda x^\lambda)\right\rangle.
\tag{7.167}
$$

<!-- source: PDF 324; printed: 311 -->

在若干波长上平均 $\cos^2$ 项，得到

$$
\left\langle\cos^2(k_\lambda x^\lambda)\right\rangle=\frac12.
\tag{7.168}
$$

为简单起见，令波沿 $z$ 轴运动，于是

$$
k_\lambda=(-\omega,0,0,\omega),
\tag{7.169}
$$

其中负号来自降低 $k^\lambda$ 的指标。由式 (7.109)，

$$
C_{\rho\sigma}C^{\rho\sigma}=2(h_+^2+h_\times^2).
\tag{7.170}
$$

引力波文献更常用普通频率 $f=\omega/2\pi$ 表示可观测量，而不使用角频率 $\omega$。把以上结果合在一起，得到

$$
t_{\mu\nu}=\frac{\pi}{8G}f^2(h_+^2+h_\times^2)
\begin{pmatrix}
1&0&0&-1\\
0&0&0&0\\
0&0&0&0\\
-1&0&0&1
\end{pmatrix}.
\tag{7.171}
$$

下一节将谈到，我们预期在地球上观测到的典型引力波源，其频率在 $10^{-4}$ 到 $10^4\ \mathrm{Hz}$ 之间，振幅约为 $h\sim10^{-22}$。因此，把 $z$ 方向的能量通量 $-T_{0z}$ 作数量级估算写成下式很有用：

$$
-T_{0z}\sim10^{-4}
\left(\frac{f}{\mathrm{Hz}}\right)^2
\frac{h_+^2+h_\times^2}{(10^{-21})^2}
\frac{\mathrm{erg}}{\mathrm{cm}^2\cdot\mathrm s}.
\tag{7.172}
$$

这就是原则上每秒能够沉积在探测器每平方厘米面积上的能量。正如 Thorne 指出的那样，[^7-4] 这其实是相当大的能量通量，在频率范围高端尤其如此。作为比较，宇宙学距离处的一颗超新星，其峰值电磁通量大约为 $10^{-9}\ \mathrm{erg}/\mathrm{cm}^2/\mathrm s$；然而，引力波信号只持续数毫秒，可见电磁信号却会延续数月。

现在利用引力波能量-动量张量公式，计算按照四极矩公式 (7.140) 发出引力辐射的系统所损失能量的速率。等时面 $\Sigma$ 上引力辐射包含的总能量定义为

$$
E=\int_\Sigma t_{00}\,\mathrm d^3x,
\tag{7.173}
$$

而一直辐射到无穷远的总能量可以表示为

[^7-4]: K. S. Thorne，载于 *Three Hundred Years of Gravitation*，Cambridge: Cambridge University Press, 1987。

<!-- source: PDF 325; printed: 312 -->

$$
\Delta E=\int P\,\mathrm dt,
\tag{7.174}
$$

其中功率 $P$ 为

$$
P=\int_{S^2_\infty}t_{0\mu}n^\mu r^2\,\mathrm d\Omega.
\tag{7.175}
$$

这里积分在空间无穷远处的二维球面 $S^2_\infty$ 上进行，$n^\mu$ 是与 $S^2_\infty$ 正交的单位类空向量。在极坐标 $\{t,r,\theta,\phi\}$ 中，法向量分量为

$$
n^\mu=(0,1,0,0).
\tag{7.176}
$$

我们希望利用式 (7.164) 的 $t_{\mu\nu}$ 计算功率 $P$。首先遇到的问题是，该式用横向无迹微扰表示，而四极矩公式 (7.140) 用 Lorenz 规范迹反转微扰的空间分量 $\bar h_{ij}$ 表示。最直接的步骤虽然也并不简单：先把 $\bar h_{ij}$ 转换到横向无迹规范。我们关心的是远离发射源的真空中波的行为，所以允许这样做。随后把结果代入 $t_{\mu\nu}$ 公式，再转换回非横向无迹形式。下面说明具体做法。

先引入空间投影张量

$$
P_{ij}=\delta_{ij}-n_in_j,
\tag{7.177}
$$

它把张量分量投影到与单位向量 $n^i$ 正交的曲面上。（更多讨论见附录 D。）这里选择 $n^i$ 指向波的传播方向，于是 $P_{ij}$ 会投影到空间无穷远处的二维球面上。利用投影张量，可按下式构造任意对称空间张量 $X_{ij}$ 的横向无迹版本：

$$
X^{\mathrm{TT}}_{ij}
=\left(P_i{}^kP_j{}^l-\frac12P_{ij}P^{kl}\right)X_{kl}.
\tag{7.178}
$$

你可以自行验证 $X^{\mathrm{TT}}_{ij}$ 的确横向且无迹。因为它无迹，$\bar h^{\mathrm{TT}}_{ij}$ 等于原微扰 $h^{\mathrm{TT}}_{ij}$。代入四极矩公式 (7.140)，得到

$$
h^{\mathrm{TT}}_{ij}=\bar h^{\mathrm{TT}}_{ij}
=\frac{2G}{r}\frac{\mathrm d^2I^{\mathrm{TT}}_{ij}}{\mathrm dt^2}(t-r),
\tag{7.179}
$$

其中四极矩的横向无迹部分也由式 (7.178) 构造。事实上，式 (7.138) 定义的四极矩在表示所产生的波时并非最方便的量，因为它涉及

<!-- source: PDF 326; printed: 313 -->

对能量密度的积分，而该能量密度可能难以确定。可以改用**约化四极矩**：

$$
J_{ij}=I_{ij}-\frac13\delta_{ij}\delta^{kl}I_{kl},
\tag{7.180}
$$

它正是 $I_{ij}$ 的无迹部分。约化四极矩有一个很好的性质：它是 Newton 势多极展开中 $r^{-3}$ 项的系数，

$$
\Phi=-\frac{GM}{r}
-\frac{G}{r^3}D_ix^i
-\frac{3G}{2r^5}J_{ij}x^ix^j+\cdots,
\tag{7.181}
$$

所以对真实物质源更容易作近似。（这里 $D_i$ 是偶极矩，$D_i=\int T^{00}x^i\,\mathrm d^3x$。）四极矩的横向无迹部分当然与约化，也就是无迹四极矩的横向无迹部分相同，所以式 (7.179) 变为

$$
h^{\mathrm{TT}}_{ij}
=\frac{2G}{r}\frac{\mathrm d^2J^{\mathrm{TT}}_{ij}}{\mathrm dt^2}(t-r).
\tag{7.182}
$$

计算功率时，需要的是 $t_{0\mu}n^\mu=t_{0r}$。由于四极矩只依赖推迟时间 $t_r=t-r$，有

$$
\begin{aligned}
\partial_0h^{\mathrm{TT}}_{ij}
&=\frac{2G}{r}\frac{\mathrm d^3J^{\mathrm{TT}}_{ij}}{\mathrm dt^3},\\
\partial_rh^{\mathrm{TT}}_{ij}
&=-\frac{2G}{r}\frac{\mathrm d^3J^{\mathrm{TT}}_{ij}}{\mathrm dt^3}
-\frac{2G}{r^2}\frac{\mathrm d^2J^{\mathrm{TT}}_{ij}}{\mathrm dt^2}\\
&\approx-\frac{2G}{r}\frac{\mathrm d^3J^{\mathrm{TT}}_{ij}}{\mathrm dt^3},
\end{aligned}
\tag{7.183}
$$

其中舍去了 $r^{-2}$ 项，因为我们关心 $r\to\infty$ 的极限。因此能量-动量张量中重要的分量为

$$
t_{0r}=-\frac{G}{8\pi r^2}
\left\langle
\left(\frac{\mathrm d^3J^{\mathrm{TT}}_{ij}}{\mathrm dt^3}\right)
\left(\frac{\mathrm d^3J_{\mathrm{TT}}^{ij}}{\mathrm dt^3}\right)
\right\rangle.
\tag{7.184}
$$

下一步要从横向无迹部分转换回 $J_{ij}$。利用式 (7.178) 并作一些繁复的代数运算，可以直接证明

$$
\begin{aligned}
X^{\mathrm{TT}}_{ij}X_{\mathrm{TT}}^{ij}={}&
X_{ij}X^{ij}-2X_i{}^jX^{ik}n_jn_k
+\frac12X^{ij}X^{kl}n_in_jn_kn_l\\
&-\frac12X^2+XX^{ij}n_in_j,
\end{aligned}
\tag{7.185}
$$

其中 $X=\delta^{ij}X_{ij}$。由于 $J_{ij}$ 无迹，得到

$$
J^{\mathrm{TT}}_{ij}J_{\mathrm{TT}}^{ij}
=J_{ij}J^{ij}-2J_i{}^jJ^{ik}n_jn_k
+\frac12J^{ij}J^{kl}n_in_jn_kn_l,
\tag{7.186}
$$

<!-- source: PDF 327; printed: 314 -->

所以功率为

$$
\begin{aligned}
P=-\frac{G}{8\pi}\int_{S^2_\infty}\Bigg\langle{}
&\frac{\mathrm d^3J_{ij}}{\mathrm dt^3}
\frac{\mathrm d^3J^{ij}}{\mathrm dt^3}
-2\frac{\mathrm d^3J_i{}^j}{\mathrm dt^3}
\frac{\mathrm d^3J^{ik}}{\mathrm dt^3}n_jn_k\\
&+\frac12\frac{\mathrm d^3J^{ij}}{\mathrm dt^3}
\frac{\mathrm d^3J^{kl}}{\mathrm dt^3}n_in_jn_kn_l
\Bigg\rangle\mathrm d\Omega.
\end{aligned}
\tag{7.187}
$$

求这个表达式时，最好回到空间 Cartesian 坐标，其中 $n^i=x^i/r$。四极矩张量由全空间积分定义，所以与角坐标无关。可以把它们移到积分号外，再利用恒等式

$$
\begin{aligned}
\int\mathrm d\Omega&=4\pi,\\
\int n_in_j\,\mathrm d\Omega&=\frac{4\pi}{3}\delta_{ij},\\
\int n_in_jn_kn_l\,\mathrm d\Omega
&=\frac{4\pi}{15}
(\delta_{ij}\delta_{kl}+\delta_{ik}\delta_{jl}+\delta_{il}\delta_{jk}).
\end{aligned}
\tag{7.188}
$$

全部化简后，功率公式收缩为

$$
P=-\frac{G}{5}
\left\langle
\frac{\mathrm d^3J_{ij}}{\mathrm dt^3}
\frac{\mathrm d^3J^{ij}}{\mathrm dt^3}
\right\rangle,
\tag{7.189}
$$

其中要记住，四极矩在推迟时间 $t_r=t-r$ 处求值。公式带负号，因为它表示能量的变化率，而辐射源会损失能量。

对式 (7.148) 描述的双星系统，约化四极矩为

$$
J_{ij}=\frac{MR^2}{3}
\begin{pmatrix}
1+3\cos2\Omega t&3\sin2\Omega t&0\\
3\sin2\Omega t&1-3\cos2\Omega t&0\\
0&0&-2
\end{pmatrix},
\tag{7.190}
$$

所以它的三阶时间导数为

$$
\frac{\mathrm d^3J_{ij}}{\mathrm dt^3}
=8MR^2\Omega^3
\begin{pmatrix}
\sin2\Omega t&-\cos2\Omega t&0\\
-\cos2\Omega t&-\sin2\Omega t&0\\
0&0&0
\end{pmatrix}.
\tag{7.191}
$$

双星辐射的功率于是为

$$
P=-\frac{128}{5}GM^2R^4\Omega^6,
\tag{7.192}
$$

再使用频率表达式 (7.144)，可写成

$$
P=-\frac{2}{5}\frac{G^4M^5}{R^5}.
\tag{7.193}
$$

<!-- source: PDF 328; printed: 315 -->

当然，人们已经观测到引力辐射发射造成的能量损失。1974 年，Hulse 和 Taylor 发现了双星系统 PSR 1913+16。系统中的两颗星都非常小，因此经典效应可以忽略，或至少能够得到控制；其中一颗还是脉冲星。其轨道周期为 8 小时，按天体物理标准极短。脉冲星提供了一只非常精确的时钟，借助它可以测量系统损失能量时轨道周期的变化。结果与广义相对论关于引力辐射造成能量损失的预言一致。

## 7.7 引力波的探测

当代引力物理与天体物理的最高优先级目标之一，是直接探测引力辐射。（这里“直接”指观测引力波对测试物体的影响，与双脉冲星中通过能量损失观测间接效应相对。）完全有理由相信，这类探测很快会在当时已经存在的引力波天文台或正在规划的近期设施中实现。引力辐射一经探测，目标当然会立刻转向从观测中提取有用的天体物理信息。我们对太阳系以外宇宙的现有认识，几乎全部来自电磁辐射观测，另有少量信息来自中微子和宇宙线；引力波天体物理学的出现，将为遥远宇宙中的高能现象打开一扇全新的窗口。[^7-5]

讨论如何探测天体物理引力波之前，先思考哪些源最容易观测。第一项重要认识是：产生显著引力辐射所需的条件，与产生电磁辐射所需的条件很不相同。原因在于，引力波由大质量物体的整体运动产生，而电磁波通常由单个粒子之间不相干的激发产生。因此，一个整体静止的源，例如恒星，也能产生电磁辐射，这对天文学家极为有利。引力波则由运动的大质量物体相干地产生，质量中的每个粒子都以相同方式对波作贡献；这种相干性在一定程度上补偿了静态源无法发射引力波的限制。

所以需要质量大且具有显著整体运动的源。举一个简单例子，考虑第 7.5 节的双星系统：两颗星的质量均为 $M$，轨道半径为 $R$。我们会稍微走一点捷径，在广义相对论已经开始变得重要的区域仍使用 Newton 轨道参数公式，不过这足以作数量级估算。相关参数可以归结为 Schwarzschild 半径 $R_{\mathrm S}=2GM/c^2$，

[^7-5]: 关于引力波天体物理学的综述，见 S. A. Hughes、S. Márka、P. L. Bender 与 C. J. Hogan, “New physics and astronomy with the new gravitational-wave observatories,” [astro-ph/0110349](http://arxiv.org/astro-ph/0110349)。

<!-- source: PDF 329; printed: 316 -->

轨道半径 $R$，以及我们与双星之间的距离 $r$。（从这里起恢复显式的 $c$ 因子，以便与实验比较。）用这些量表示，轨道频率，也就是产生的引力波频率，大约为

$$
f=\frac{\Omega}{2\pi}
\sim\frac{cR_{\mathrm S}^{1/2}}{10R^{3/2}}.
\tag{7.194}
$$

由所得微扰公式 (7.149)，可以估算接收到的引力波振幅：

$$
h\sim\frac{R_{\mathrm S}^2}{rR}.
\tag{7.195}
$$

看看这对可能观测到的物质源意味着什么。一个典型例子是黑洞—黑洞双星的并合。可以选取如下典型参数：两个黑洞的质量均为 10 个太阳质量；双星处于约 $100\ \mathrm{Mpc}$ 的宇宙学距离；两个成员之间的距离为其 Schwarzschild 半径的 10 倍：

$$
\begin{aligned}
R_{\mathrm S}&\sim10^6\ \mathrm{cm},\\
R&\sim10^7\ \mathrm{cm},\\
r&\sim10^{26}\ \mathrm{cm}.
\end{aligned}
\tag{7.196}
$$

因此，这样的源具有

$$
f\sim10^2\ \mathrm s^{-1},
\qquad
h\sim10^{-21}.
\tag{7.197}
$$

若想探测这些参数下的双星并合，就必须对接近 $100\ \mathrm{Hz}$ 的频率和 $10^{-21}$ 量级或更小的应变敏感。

幸运的是，凭借许多科学家的非凡努力，这些参数处于实验能力可及的范围。当前所考虑的引力波探测方法中，最有希望的是干涉测量。这里将只讨论干涉仪，不过完全可以设想将来发明灵敏度更高的新技术。

回想一列经过的引力波，其物理效应是轻微扰动自由落体质量之间的相对位置。如果两个测试质量相距 $L$，其距离变化大约为

$$
\frac{\delta L}{L}\sim h.
\tag{7.198}
$$

设想建造一座天文台，其中测试物体相距数千米量级。要探测振幅约为

<!-- source: PDF 330; printed: 317 -->

$h\sim10^{-21}$ 的波，就要求对下列距离变化具有灵敏度：

$$
\delta L\sim10^{-16}
\left(\frac{h}{10^{-21}}\right)
\left(\frac{L}{\mathrm{km}}\right)\mathrm{cm}.
\tag{7.199}
$$

把它与由 Bohr 半径给出的典型原子尺寸比较：

$$
a_0\sim5\times10^{-9}\ \mathrm{cm},
\tag{7.200}
$$

甚至也可以与约为一个费米的典型原子核尺寸比较：

$$
1\ \mathrm{fm}=10^{-13}\ \mathrm{cm}.
\tag{7.201}
$$

这里反复强调的要点是：一座可行的地面引力波天文台，必须能感知远小于任何可设想测试质量的组成原子尺度的距离变化。

激光干涉仪提供了测量这种微小扰动的方法。考察图 7.11 所示的示意装置。一束激光，典型特征波长约为 $\lambda\sim10^{-4}\ \mathrm{cm}$，射向分束器；分束器把光子送入两条长度均为 $L$ 的真空管。腔体末端放置测试质量，以悬挂在摆上的镜子表示。实际上，光还会在分束器附近的部分反射镜上反弹，所以一个典型光子会在腔体中上下往返

**图 7.11**　引力波干涉仪的示意设计。

<!-- source: PDF 331; printed: 318 -->

约 100 次，然后返回分束器并被导向光电二极管。系统被调整为：若测试质量完全静止，返回的两束光发生相消干涉，不向光电二极管送出信号。正如前面看到的，一列经过的引力波会以相反方式扰动彼此正交的两条长度，令激光脉冲产生相位移动，从而破坏相消干涉。光在两个腔臂内完成 100 次往返期间，累积相移约为

$$
\delta\phi\sim200\left(\frac{2\pi}{\lambda}\right)\delta L
\sim10^{-9},
\tag{7.202}
$$

这里出现 200 而非 100，是因为两条臂中的相移相加。若光子数 $N$ 足够大，足以克服“散粒噪声”，这样微小的相移也能被测量；具体而言，应有 $\sqrt N>\delta\phi$。

建造足够安静且灵敏的引力波天文台会遇到许多技术挑战；原书写作时，多个地点都在攻克它们，包括美国的 LIGO、意大利的 Virgo、德国的 GEO、日本的 TAMA 和澳大利亚的 ACIGA。LIGO，即激光干涉引力波天文台，在当时是最先进的探测器；它由两个设施组成，一个位于华盛顿州，一个位于路易斯安那州，每个设施都有 4 千米长的臂。单座引力波天文台无法在天空中定位物质源；多个探测器对这一任务至关重要，同时也能验证一个表观信号是否真实。

基本噪声源限制了地面天文台探测低频引力波的能力。图 7.12 给出了两种截然不同设计的频率相关灵敏区：LIGO 一类地面天文台，以及 LISA（激光干涉空间天线）一类空间任务。LISA 背后的一般原理与其他干涉仪相同，但具体实现会有巨大差别。原书当时的设计设想三艘航天器绕太阳运行，落后地球大约 3000 万千米，彼此相距 500 万千米。由于间距大得多，LISA 对 $10^{-2}\ \mathrm{Hz}$ 附近的频率敏感。图中灵敏度只应视作示意，因为它们依赖积分时间和其他因素。

引力波天文学家会面对许多潜在噪声源。对地面天文台，低频处的主导效应通常是地震噪声，高频处来自光子散粒噪声，中间频段则来自热噪声。先进地面探测器或许能补偿低频地震噪声，但大气现象或汽车等附近经过物体造成的引力梯度，会带来无法消除的噪声。卫星天文台当然不受这些效应影响；其基本限制预计来自测量航天器之间，更准确地说是航天器内受屏蔽检验质量之间距离变化的误差，以及航天器的非引力加速度。

<!-- source: PDF 332; printed: 319 -->

**图 7.12**　代表性地面（LIGO）和空间（LISA）引力波天文台的灵敏度随频率的变化，以及潜在物质源的预期信号。图片来自 LISA 合作组主页（原书所列地址为 http://lisa.jpl.nasa.gov/）。

最后，对引力波天文台可能观测的物质源作极简短的概述。前面已经提到各种紧致双星。对地面天文台，这类源只有在非常接近并合时才可见，而且其成员必须有足够大的质量，例如中子星或黑洞。根据当时对这类系统的认识外推，在数百 $\mathrm{Mpc}$ 范围内，每年可能发生数次并合。另一个有希望的源是大质量恒星的核心坍缩，它会产生超新星。严格球对称的坍缩不会产生任何引力波，但真实事件预计会受到不稳定性的影响，进而破坏这种对称性。普通望远镜和引力波天文台协同观测超新星，是一个令人振奋的前景。最后，地面天文台还可能观测到周期源，例如转动且并非完全轴对称的中子星。此类源的振幅预计很小，却不一定超出先进探测器的能力范围。

空间探测器感兴趣的源稍有不同。最重要的是，银河系中已知的双星族群必然会提供可探测强度的引力波信号。事实上，无法分辨的双星会成为探测器的混淆噪声源，因为不可能从背景中逐一挑出低强度源。尽管如此，许多强度更高的源应当很容易观测。此外，各种

<!-- source: PDF 333; printed: 320 -->

超大质量黑洞（大于 $1000M_\odot$，例如星系中心的黑洞）演化过程也会产生有趣的物质源，包括这类天体的形成、随后通过吸积较小天体而增长，以及多个超大质量黑洞可能发生的并合。追踪一颗太阳质量黑洞绕超大质量黑洞运动并最终落入其中时的引力波信号演化，将使我们能够精密绘制时空度规，从而以新方式检验广义相对论。

除局域源产生的波之外，还可能存在随机引力波背景。这里指的是一组各向同性的引力波，它们或许产生于早期宇宙，其功率谱随频率平滑变化。一种可能是暴胀产生的近似无标度引力波谱，第 8 章将讨论它。这类波基本不可能被地面探测器直接探测，其强度可能比先进探测器的能力低 5 个数量级；即使 LISA 也难以做到，但下一代空间任务或许可以观测。更可能的是，这些波首先会在宇宙微波背景的偏振中显现。

另一种可能，是剧烈的一阶相变产生原初引力波。这些波的频谱会有明确的峰值频率，并与相变温度 $T$ 存在关系：

$$
f_{\mathrm{peak}}\sim10^{-3}
\left(\frac{T}{1000\ \mathrm{GeV}}\right)\mathrm{Hz}.
\tag{7.203}
$$

因此，一阶电弱相变（$T\sim200\ \mathrm{GeV}$）落在 LISA 可能观测的频段内。这一点格外耐人寻味，因为某些重子生成模型要求这一尺度上发生强相变；想到可能通过引力实验了解电弱物理的重要信息，确实很有启发性。

## 7.8 习题

1. 证明 Lagrangian (7.9) 会给出 Einstein 方程的线性化版本。

2. 考虑一个质量为 $M$、半径为 $R$ 的薄球壳，它以角速度 $\Omega$ 缓慢旋转。

   (a) 证明引力电场 $\vec G$ 为零，并用 $M$、$R$ 与 $\Omega$ 计算引力磁场 $\vec H$。

   (b) 球壳造成的非零引力磁场会拖曳惯性系，这称为 **Lense–Thirring 效应**。计算位于球壳中心、自由落体观测者相对于背景 Minkowski 度规所定义惯性系的转动。换句话说，计算位于球心的平行移动向量之空间分量的进动。

<!-- source: PDF 334; printed: 321 -->

3. Fermat 原理说，光线沿耗时最短的路径运动。对折射率为 $n(\mathbf x)$ 的介质，这等价于令沿路径的时间

   $$
   t=\int n(\mathbf x)\left[\delta_{ij}\,\mathrm dx^i\mathrm dx^j\right]^{1/2}
   \tag{7.204}
   $$

   取极值。证明：取折射率 $n=1-2\Phi$ 时，Fermat 原理会给出 Newton 势扰动时空中光子的正确运动方程。

4. 证明 Lorenz 规范条件 $\partial_\mu\bar h^{\mu\nu}=0$ 等价于**谐和规范**条件。谐和规范定义为

   $$
   \Box x^\mu=0,
   \tag{7.205}
   $$

   其中每个坐标 $x^\mu$ 都被看作时空上的标量函数。（任何满足 $\Box f=0$ 的函数都称为“调和函数”。）

5. 在第 3 章习题中，我们引入了度规

   $$
   \mathrm ds^2=-(\mathrm du\,\mathrm dv+\mathrm dv\,\mathrm du)
   +a^2(u)\mathrm dx^2+b^2(u)\mathrm dy^2,
   \tag{7.206}
   $$

   其中 $a$ 和 $b$ 是未指定的 $u$ 的函数。对适当的 $a$ 和 $b$，它表示一列精确引力平面波。

   (a) 计算该度规的 Christoffel 符号和 Riemann 张量。

   (b) 利用真空 Einstein 方程，推导 $a(u)$ 和 $b(u)$ 所满足的方程。

   (c) 证明可以找到一个精确解，其中 $a$ 与 $b$ 都由任意函数 $f(u)$ 决定。

6. 两个质量均为 $M$ 的物体在事件 $(0,0,0,0)$ 处迎头相撞。在遥远过去 $t\to-\infty$，两物体从 $x\to\pm\infty$ 出发，初速度为零。

   (a) 利用 Newton 理论证明 $x(t)=\pm(9Mt^2/8)^{1/3}$。

   (b) 在怎样的间距下，Newton 近似是合理的？

   (c) 在 $(x,y,z)=(0,R,0)$ 处计算 $h^{\mathrm{TT}}_{xx}(t)$。

7. 可以通过监测两个自由飞行质量之间的距离来探测引力波。若其中一个质量装有激光器和精确时钟，另一个装有优质反射镜，就可以测量激光脉冲完成往返所需的时间，从而测出两质量之间的距离。若要对下列形式的平面波获得最大响应，探测器应当如何定向？

   $$
   \mathrm ds^2=-\mathrm dt^2
   +[1+A\cos(\omega(t-z))]\mathrm dx^2
   +[1-A\cos(\omega(t-z))]\mathrm dy^2
   +\mathrm dz^2.
   $$

   若两质量的平均间距为 $L$，引力波造成的脉冲到达时间最大变化是多少？哪些频率 $\omega$ 无法被探测？

8. 两个质量彼此散射时会产生引力版的**轫致辐射**（bremsstrahlung）。考虑一个小质量 $m$ 以冲击参数 $b$ 和总能量 $E=0$ 从大质量 $M$ 旁散射的过程。取 $M\gg m$ 且 $M/b\ll1$。因为 $M/b\ll1$，小质量的运动可用 Newton 物理描述。若轨道位于 $(x,y)$ 平面，且大质量位于

<!-- source: PDF 335; printed: 322 -->

   $(x,y,z)=(0,0,0)$，计算 $(x,y,z)=(0,0,r)$ 处两种偏振的引力波振幅。由于运动不具周期性，引力波将是突发型信号，并由许多不同频率组成。从物理角度看，你预期主导频率是多少？估算系统辐射的总能量。它与小质量的峰值动能相比如何？

   **提示：** 轨道解可见 Goldstein（2002）：

   $$
   r=\frac{2b}{1+\cos\theta},
   \qquad
   t=\sqrt{\frac{2b^3}{M}}
   \left(\tan\frac{\theta}{2}+\frac13\tan^3\frac{\theta}{2}\right).
   $$

   时间范围为 $t\in(-\infty,\infty)$。与其使用上面关于 $\theta(t)$ 的隐式解，也可以使用

   $$
   \dot\theta=\sqrt{\frac{M}{8b^3}}(1+\cos\theta)^2.
   $$

9. 验证引力波能量-动量张量的表达式 (7.165) 在规范变换 $h_{\mu\nu}\to h_{\mu\nu}+2\partial_{(\mu}\xi_{\nu)}$ 下保持不变。

10. 证明引力微扰总能量的积分表达式 (7.173) 与空间超曲面 $\Sigma$ 的选择无关。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 6 章 更一般的黑洞](./06-more-general-black-holes.md) · [下一篇：第 8 章 宇宙学](./08-cosmology.md)
