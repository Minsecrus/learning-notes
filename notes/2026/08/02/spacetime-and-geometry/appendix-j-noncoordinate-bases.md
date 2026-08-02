# 附录 J 非坐标基

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 I 平行传播子](./appendix-i-the-parallel-propagator.md) · [下一篇：参考文献](./bibliography.md)

> 底本：Sean M. Carroll, *Spacetime and Geometry: An Introduction to General Relativity*，附录 J（印刷页 483–494；PDF 496–507）。公式编号沿用原书。已核对[作者官方勘误表](https://preposterousuniverse.com/spacetimeandgeometry/)；其中没有列出本附录的勘误。

<!-- source: PDF 496; printed: 483 -->

在研究流形之初，我们决定为切空间选取适应于坐标的基。现在，无论出于形式上的美感还是实际计算的需要，都值得重新考察联络与曲率的形式体系；这一次，我们在切空间里使用一组并非由任何坐标系导出的基向量。事实将表明，这种看似细微的侧重点变化会揭示理解联络和曲率的另一种视角，并使它们与粒子物理规范理论之间的关系清晰得多。这里要介绍的概念其实非常直接，但记号极其繁复，因而看起来比实际更困难。

到目前为止，我们一直在利用一个事实：点 $p$ 处切空间 $T_p$ 有一组自然基，即对该点坐标取偏导所得到的向量，$\hat e_{(\mu)}=\partial_\mu$。类似地，余切空间 $T_p^*$ 的一组基由坐标函数的梯度给出，$\hat\theta^{(\mu)}=\mathrm dx^\mu$。当然，没有任何条件阻止我们选取任意喜欢的基。于是设想：在流形的每一点，我们都引入一组基向量 $\hat e_{(a)}$。这里用 Latin 字母作指标，取代 Greek 字母，以提醒自己这些基向量不与任何坐标系相联系。我们将选择这些基向量，使它们按照当前流形的号差具有“正交归一”性质。也就是说，若把度规的标准形记为 $\eta_{ab}$，我们要求基向量的内积满足

$$
g\bigl(\hat e_{(a)},\hat e_{(b)}\bigr)=\eta_{ab},
\tag{J.1}
$$

其中 $g(\ ,\ )$ 是通常的度规张量。因此，在 Lorentz 时空中，$\eta_{ab}$ 表示 Minkowski 度规；在具有正定度规的空间中，它则表示 Euclid 度规。组成一组正交归一基的向量集合有时称为**四脚标架**（tetrad，源自 Greek *tetras*，意为“一组四个”）或**多脚标架**（vielbein，源自 German，意为“许多条腿”）。在不同维数中，它偶尔分别称作 *vierbein*（四维）、*dreibein*（三维）、*zweibein*（二维），依此类推。正如一般无法找到覆盖整个流形的单张坐标图，我们也经常无法找到一组处处定义的光滑基向量场。仍可采用惯常办法处理这个问题：在不同的坐标片中工作，并保证各量在重叠区上行为良好。

引入基的要点，在于任意向量都能表示成基向量的线性组合。具体来说，我们可以用新基表示原来的基向量 $\hat e_{(\mu)}=\partial_\mu$：

<!-- source: PDF 497; printed: 484 -->

$$
\hat e_{(\mu)}=e_\mu{}^a\hat e_{(a)}.
\tag{J.2}
$$

分量 $e_\mu{}^a$ 构成一个 $n\times n$ 可逆矩阵。（按照我们一贯淡化对象与其分量之间区别的做法，下面也把 $e_\mu{}^a$ 本身称为四脚标架或多脚标架，并且常用复数“多脚标架矩阵”。）交换指标的位置便得到其逆矩阵 $e^\mu{}_a$；它们满足

$$
e^\mu{}_a e_\nu{}^a=\delta^\mu{}_\nu,
\qquad
e_\mu{}^a e^\mu{}_b=\delta^a{}_b.
\tag{J.3}
$$

这些逆矩阵给出基向量 $\hat e_{(a)}$ 在坐标基中的分量：

$$
\hat e_{(a)}=e^\mu{}_a\hat e_{(\mu)}.
\tag{J.4}
$$

用逆多脚标架矩阵表示时，式 (J.1) 变为

$$
g_{\mu\nu}e^\mu{}_a e^\nu{}_b=\eta_{ab},
\tag{J.5}
$$

等价地，

$$
g_{\mu\nu}=e_\mu{}^a e_\nu{}^b\eta_{ab}.
\tag{J.6}
$$

最后这个方程有时让人把多脚标架矩阵称作度规的“平方根”。

同样可以在 $T_p^*$ 中建立一组正交归一的一形式基，记为 $\hat\theta^{(a)}$。可以选择它们与基向量相容，使得

$$
\hat\theta^{(a)}\bigl(\hat e_{(b)}\bigr)=\delta^a{}_b.
\tag{J.7}
$$

一个直接推论是，正交归一的一形式与其坐标基版本 $\hat\theta^{(\mu)}=\mathrm dx^\mu$ 之间有关系

$$
\hat\theta^{(\mu)}=e^\mu{}_a\hat\theta^{(a)},
\tag{J.8}
$$

以及

$$
\hat\theta^{(a)}=e_\mu{}^a\hat\theta^{(\mu)}.
\tag{J.9}
$$

因此，$e_\mu{}^a$ 身兼两职：既是坐标基向量用正交归一基向量展开时的分量，也是正交归一基一形式用坐标基一形式展开时的分量。相应地，逆多脚标架矩阵既是正交归一基向量用坐标基展开时的分量，也是坐标基一形式用正交归一基展开时的分量。

<!-- source: PDF 498; printed: 485 -->

任何其他向量也都可以用它在正交归一基中的分量表示。若向量 $V$ 在坐标基中写成 $V^\mu\hat e_{(\mu)}$，在正交归一基中写成 $V^a\hat e_{(a)}$，两组分量的关系为

$$
V^a=e_\mu{}^a V^\mu.
\tag{J.10}
$$

所以，多脚标架矩阵使我们能够“在 Latin 指标与 Greek 指标之间来回切换”。张量记号在这里尤其有用：通常只要看指标的位置，合理的运算方式便是唯一的。我们可以继续在任一种基中表示具有多个指标的张量，甚至使用混合分量：

$$
V^a{}_b
=e_\mu{}^a V^\mu{}_b
=e^\nu{}_b V^a{}_\nu
=e_\mu{}^a e^\nu{}_b V^\mu{}_\nu.
\tag{J.11}
$$

回看式 (J.5)，可以看到度规张量在正交归一基中的分量正是平直度规 $\eta_{ab}$。（出于这个原因，Greek 指标有时称为“弯曲”指标，Latin 指标则称为“平直”指标。）事实上，可以直接用平直度规及其逆矩阵 $\eta^{ab}$ 升降 Latin 指标。你可以自行检验一切都相容，例如，先用度规降低指标再改变正交归一基与坐标基，所得结果与颠倒操作顺序相同。特别是，我们对逆多脚标架矩阵的定义与通常的指标升降约定一致：

$$
e^\mu{}_a=g^{\mu\nu}\eta_{ab}e_\nu{}^b.
\tag{J.12}
$$

我们把 $e_\nu{}^a$ 引入为一组基向量在另一组基中求得的分量。等价地，也可以把它看成一个 $(1,1)$ 张量的分量：

$$
e=e_\nu{}^a\,\mathrm dx^\nu\otimes\hat e_{(a)}.
\tag{J.13}
$$

其实，这正是我们早已熟悉的张量：恒等映射。让这个张量作用在任一向量上，只会在另一组基中得到同一个向量；这正是式 (J.10) 的内容。同样，根据式 (J.3)，若用逆多脚标架矩阵 $e^\mu{}_a$ 把 $e_\nu{}^a$ 上的 Latin 指标转换为 Greek 指标，就得到 Kronecker delta $\delta^\mu{}_\nu$；它当然是向量（或一形式）空间上的恒等映射。值得强调这一点，因为也可以选择把 $e_\nu{}^a$ 解释为一组向量分量——有些参考文献确实如此处理——那样一来，它在坐标变换下的表现会不同。

引入一套新的基向量和基一形式，迫使我们回到最喜爱的主题：变换性质。我们始终谨慎地强调，张量变换律只是坐标变换的间接结果；真正发生的是基的改变。如今有了非坐标基，基的改变便可独立于坐标进行。唯一限制是必须保持式 (J.1) 的正交归一性质。我们知道哪些变换会保持平直度规：在 Euclid 号差的度规中，它们是正交变换；

<!-- source: PDF 499; printed: 486 -->

在 Lorentz 号差的度规中，它们是 Lorentz 变换。因此，我们考虑如下形式的换基：

$$
\hat e_{(a)}
\longrightarrow
\hat e_{(a')}
=\Lambda^a{}_{a'}(x)\hat e_{(a)},
\tag{J.14}
$$

其中矩阵 $\Lambda^a{}_{a'}(x)$ 表示依赖位置的变换，并且在每一点都保持度规的标准形不变：

$$
\Lambda^a{}_{a'}\Lambda^b{}_{b'}\eta_{ab}
=\eta_{a'b'}.
\tag{J.15}
$$

这些矩阵正对应于我们在平直空间中所说的逆 Lorentz 变换，它们作用在基向量上；与从前一样，还有作用在基一形式上的普通 Lorentz 变换 $\Lambda^{a'}{}_a$。就分量而言，仍然用 $\Lambda^{a'}{}_a$ 变换上指标，用 $\Lambda^a{}_{a'}$ 变换下指标。

因此，我们可以在空间的每一点自由施行 Lorentz 变换（或者依号差施行普通 Euclid 转动）。这些变换称为**局域 Lorentz 变换**（local Lorentz transformations，LLT）。我们仍保有通常的坐标变换自由，它们称为**一般坐标变换**（general coordinate transformations，GCT）。两者可以同时发生，从而得到混合的张量变换律：

$$
T^{a'\mu'}{}_{b'\nu'}
=\Lambda^{a'}{}_a
\frac{\partial x^{\mu'}}{\partial x^\mu}
\Lambda^b{}_{b'}
\frac{\partial x^\nu}{\partial x^{\nu'}}
T^{a\mu}{}_{b\nu}.
\tag{J.16}
$$

把我们关于张量的知识转写到非坐标基中，大体上只需把多脚标架矩阵放在正确位置。关键例外出现在开始求导时。在通常的形式体系中，张量的协变导数等于它的偏导数加上修正项；每个指标对应一个修正项，其中包含该张量和联络系数。在非坐标基中，同样的程序仍然成立，但要把普通联络系数 $\Gamma^\lambda{}_{\mu\nu}$ 换成**自旋联络** $\omega_\mu{}^a{}_b$。每个 Latin 指标都按通常方式得到一个自旋联络因子：

$$
\nabla_\mu X^a{}_b
=\partial_\mu X^a{}_b
+\omega_\mu{}^a{}_c X^c{}_b
-\omega_\mu{}^c{}_b X^a{}_c.
\tag{J.17}
$$

（“自旋联络”这个名字源于它可以用来对旋量取协变导数，而传统的联络系数实际上无法完成这一操作。）当 Latin 与 Greek 指标混合出现时，两类修正项都会出现。

张量必须与其写法无关，这一惯常要求让我们能够推导自旋联络、多脚标架矩阵与 $\Gamma^\nu{}_{\mu\lambda}$ 之间的关系。先在纯坐标基中考察向量 $X$ 的协变导数：

$$
\begin{aligned}
\nabla X
&=(\nabla_\mu X^\nu)\,\mathrm dx^\mu\otimes\partial_\nu\\
&=\left(\partial_\mu X^\nu
+\Gamma^\nu{}_{\mu\lambda}X^\lambda\right)
\mathrm dx^\mu\otimes\partial_\nu.
\end{aligned}
\tag{J.18}
$$

<!-- source: PDF 500; printed: 487 -->

现在，在混合基中求出同一个对象，再把它转换到坐标基：

$$
\begin{aligned}
\nabla X
&=(\nabla_\mu X^a)\,\mathrm dx^\mu\otimes\hat e_{(a)}\\
&=\left(\partial_\mu X^a+\omega_\mu{}^a{}_bX^b\right)
\mathrm dx^\mu\otimes\hat e_{(a)}\\
&=\left[\partial_\mu\left(e_\nu{}^aX^\nu\right)
+\omega_\mu{}^a{}_b e_\lambda{}^bX^\lambda\right]
\mathrm dx^\mu\otimes\left(e^\sigma{}_a\partial_\sigma\right)\\
&=e^\sigma{}_a\left(
e_\nu{}^a\partial_\mu X^\nu
+X^\nu\partial_\mu e_\nu{}^a
+\omega_\mu{}^a{}_b e_\lambda{}^bX^\lambda
\right)\mathrm dx^\mu\otimes\partial_\sigma\\
&=\left(
\partial_\mu X^\nu
+e^\nu{}_a\partial_\mu e_\lambda{}^aX^\lambda
+e^\nu{}_a e_\lambda{}^b\omega_\mu{}^a{}_bX^\lambda
\right)\mathrm dx^\mu\otimes\partial_\nu.
\end{aligned}
\tag{J.19}
$$

与式 (J.18) 比较可知

$$
\Gamma^\nu{}_{\mu\lambda}
=e^\nu{}_a\partial_\mu e_\lambda{}^a
+e^\nu{}_a e_\lambda{}^b\omega_\mu{}^a{}_b,
\tag{J.20}
$$

等价地，

$$
\omega_\mu{}^a{}_b
=e_\nu{}^a e^\lambda{}_b\Gamma^\nu{}_{\mu\lambda}
-e^\lambda{}_b\partial_\mu e_\lambda{}^a.
\tag{J.21}
$$

稍作整理，还可以把这个关系写成多脚标架矩阵的协变导数为零：

$$
\begin{aligned}
\nabla_\mu e_\nu{}^a
&=\partial_\mu e_\nu{}^a
-\Gamma^\lambda{}_{\mu\nu}e_\lambda{}^a
+\omega_\mu{}^a{}_b e_\nu{}^b\\
&=0.
\end{aligned}
\tag{J.22}
$$

这个关系有时称为“四脚标架公设”。注意，它恒成立；推导中不需要对联络作任何假设。具体而言，我们既没有假设联络与度规相容，也没有假设它无挠。推导中确实隐含地把 $e_\nu{}^a$ 当作式 (J.13) 中的 $(1,1)$ 张量；由于这个张量是恒等映射，它的协变导数为零并不令人意外。（并非所有参考文献都采用这种观点，阅读时应当留心。）

联络可以看成一种必须引入的结构，用来修正协变导数的变换律；因此，自旋联络本身不服从张量变换律也在意料之中。实际上，在 GCT 下，它的那个 Greek 下指标确实像一形式那样正确变换；但在 LLT 下，自旋联络的变换是非齐次的：

$$
\omega_\mu{}^{a'}{}_{b'}
=\Lambda^{a'}{}_a\Lambda^b{}_{b'}\omega_\mu{}^a{}_b
-\Lambda^c{}_{b'}\partial_\mu\Lambda^{a'}{}_c.
\tag{J.23}
$$

建议你自行验证，这个变换律会让协变导数得到正确的变换。

到这里为止，我们所做的还只是形式上的转写：把早已知道的内容换成新记号。不过，这番工作带来两项收获。第一项前面已经提过：可以描述时空上的旋量场，并对它们取协变导数；这里不再深入讨论。第二项是视角的变化，使我们能把各种张量看成**张量值微分形式**。例如，考虑 $X_\mu{}^a$ 这样的对象；我们

<!-- source: PDF 501; printed: 488 -->

可以把它看成用混合指标写成的 $(1,1)$ 张量，也可以看成“向量值一形式”：它有一个 Greek 下指标，所以按一形式看待；但对于下指标的每个取值，它又是一个向量。类似地，张量 $A_{\mu\nu}{}^a{}_b$ 对 $\mu$ 与 $\nu$ 反对称，可以看作“$(1,1)$ 张量值二形式”。因此，任何带若干个反对称 Greek 下指标和若干个 Latin 指标的张量，都可看成取值于张量丛的微分形式。（普通微分形式就是标量值形式。）考虑外微分时，这种视角便显示出用途。若把 $X_\mu{}^a$ 看作向量值一形式，自然会想取它的外微分：

$$
(\mathrm dX)_{\mu\nu}{}^a
=\partial_\mu X_\nu{}^a-\partial_\nu X_\mu{}^a.
\tag{J.24}
$$

很容易检验，这个对象在 GCT 下像二形式那样变换，也就是服从 $(0,2)$ 张量的变换律；然而，它在 LLT 下不按向量变换，因为 Lorentz 变换依赖位置，从而会在变换律中引入一个非齐次项。适当利用自旋联络可以修正这个问题。自旋联络可以看成一形式，但由于它具有式 (J.23) 的非张量变换律，不能看成张量值一形式。因此，对象

$$
\begin{aligned}
(\mathrm dX)_{\mu\nu}{}^a
+(\omega\wedge X)_{\mu\nu}{}^a
={}&\partial_\mu X_\nu{}^a-\partial_\nu X_\mu{}^a\\
&+\omega_\mu{}^a{}_bX_\nu{}^b
-\omega_\nu{}^a{}_bX_\mu{}^b,
\end{aligned}
\tag{J.25}
$$

正如你可以验证的，它会像正常的张量那样变换。

这套形式体系可以立即用于挠率与曲率的表达式；这两个张量刻画任意给定的联络。挠率有两个反对称下指标，可以看成向量值二形式 $T_{\mu\nu}{}^a$。曲率的最后两个指标总是反对称的，因此它是 $(1,1)$ 张量值二形式 $R^a{}_{b\mu\nu}$。利用在微分形式中省略指标的自由，可以用基一形式

$$
e^a=e_\mu{}^a\,\mathrm dx^\mu
\tag{J.26}
$$

以及自旋联络一形式

$$
\omega^a{}_b=\omega_\mu{}^a{}_b\,\mathrm dx^\mu
\tag{J.27}
$$

来表示它们。注意，我们已经更换记号，定义 $e^a\equiv\hat\theta^{(a)}$；这是相当常见而且更简洁的约定。挠率与曲率的定义关系于是分别为

$$
T^a=\mathrm de^a+\omega^a{}_b\wedge e^b
\tag{J.28}
$$

和

$$
R^a{}_b
=\mathrm d\omega^a{}_b
+\omega^a{}_c\wedge\omega^c{}_b.
\tag{J.29}
$$

<!-- source: PDF 502; printed: 489 -->

请记住，$R^a{}_b$ 表示完整的 Riemann 张量，只是 Greek 指标被省略了；不要把它与 Ricci 张量混淆。这两式称为 **Cartan 结构方程**。它们与通常的定义等价。下面通过挠率验证这一点，曲率的情形则留给你自行检验。由定义有

$$
\begin{aligned}
T_{\mu\nu}{}^\lambda
&=e^\lambda{}_aT_{\mu\nu}{}^a\\
&=e^\lambda{}_a\left(
\partial_\mu e_\nu{}^a-\partial_\nu e_\mu{}^a
+\omega_\mu{}^a{}_b e_\nu{}^b
-\omega_\nu{}^a{}_b e_\mu{}^b
\right)\\
&=\Gamma^\lambda{}_{\mu\nu}
-\Gamma^\lambda{}_{\nu\mu},
\end{aligned}
\tag{J.30}
$$

这正是先前给出的原始定义。这里使用了式 (J.20)，即用多脚标架矩阵与自旋联络表示 $\Gamma^\lambda{}_{\mu\nu}$ 的公式。这些张量所满足的恒等式也可写成

$$
\mathrm dT^a+\omega^a{}_b\wedge T^b
=R^a{}_b\wedge e^b
\tag{J.31}
$$

以及

$$
\mathrm dR^a{}_b
+\omega^a{}_c\wedge R^c{}_b
-R^a{}_c\wedge\omega^c{}_b
=0.
\tag{J.32}
$$

第一式是 $R^\rho{}_{[\sigma\mu\nu]}=0$ 的推广，第二式则是 Bianchi 恒等式 $\nabla_{[\lambda}R^\rho{}_{|\sigma|\mu\nu]}=0$。（有时两式都称为 Bianchi 恒等式。）

这些表达式的形式几乎让人无法抗拒去定义一种“协变外微分”：它作用在张量值形式上时，先取普通外微分，再为每个 Latin 指标加入适当的自旋联络项。虽然这里不正式作出这个定义，但顺着这种想法并无问题；事实上，式 (J.28) 的右边以及式 (J.31)、(J.32) 的左边，都可以看成这样的协变外微分。不过务必小心，式 (J.29) 不能这样理解；自旋联络不属于张量，因而不能对它取任何形式的协变导数。

目前为止，我们的方程对一般联络都成立。下面看看 Christoffel 联络会带来什么。无挠条件就是要求式 (J.28) 为零；这不会立即给出关于自旋联络系数的简单陈述。度规相容性表现为度规协变导数为零，即 $\nabla g=0$。在正交归一基中，度规分量就是 $\eta_{ab}$；把度规写在这组基中，可以看出这一条件意味着什么：

$$
\begin{aligned}
\nabla_\mu\eta_{ab}
&=\partial_\mu\eta_{ab}
-\omega_\mu{}^c{}_a\eta_{cb}
-\omega_\mu{}^c{}_b\eta_{ac}\\
&=-\omega_{\mu ab}-\omega_{\mu ba}.
\end{aligned}
\tag{J.33}
$$

令它等于零，便得到

$$
\omega_{\mu ab}=-\omega_{\mu ba}.
\tag{J.34}
$$

<!-- source: PDF 503; printed: 490 -->

因此，度规相容性等价于自旋联络对两个 Latin 指标反对称。（与先前一样，只有两个指标同时都是上指标或同时都是下指标时，这类陈述才有意义。）无挠和度规相容这两个条件合在一起，使我们能够用多脚标架矩阵表示自旋联络。存在一个给出解的显式公式，但实际计算时，通常更容易直接求解无挠条件

$$
\omega^a{}_b\wedge e^b=-\mathrm de^a,
\tag{J.35}
$$

再利用自旋联络的反对称性找出各个分量。

研究非坐标基的一个重要理由，是它们在某些问题中确实能大幅简化计算，其中包括曲率张量的计算。下面用一个简单例子说明这一点。考虑空间平直的膨胀宇宙，其度规为

$$
\mathrm ds^2
=-\mathrm dt^2
+a^2(t)\delta_{ij}\,\mathrm dx^i\mathrm dx^j.
\tag{J.36}
$$

我们将使用式 (J.26) 与 (J.27) 的微分形式记号；这类计算很好地表明，这套语言不但优雅，在实践中也很有用。对任意几何，度规都可写成

$$
\mathrm ds^2=\eta_{ab}e^a\otimes e^b.
\tag{J.37}
$$

现在需要选择基一形式 $e^a$，使它与度规 (J.36) 相符。选择有很多种，它们通过局域 Lorentz 变换彼此联系；一个显然的选择是

$$
\begin{aligned}
e^0&=\mathrm dt,\\
e^i&=a\,\mathrm dx^i.
\end{aligned}
\tag{J.38}
$$

接下来用式 (J.35) 求解自旋联络。好消息是，我们基本上可以靠猜测完成。先用 $\eta^{ab}$ 与 $\eta_{ab}$ 适当升降指标，从 $\omega_{ab}$ 的反对称性推得

$$
\begin{aligned}
\omega^0{}_0&=0,\\
\omega^0{}_j&=\omega^j{}_0,\\
\omega^i{}_j&=-\omega^j{}_i.
\end{aligned}
\tag{J.39}
$$

然后计算式 (J.35) 的右边：

$$
\begin{aligned}
\mathrm de^0&=0,\\
\mathrm de^i
&=\mathrm da\wedge\mathrm dx^i
=\dot a\,\mathrm dt\wedge\mathrm dx^i.
\end{aligned}
\tag{J.40}
$$

<!-- source: PDF 504; printed: 491 -->

再计算左边：

$$
\begin{aligned}
\omega^0{}_b\wedge e^b
&=\omega^0{}_j\wedge e^j
=a\omega^0{}_j\wedge\mathrm dx^j,\\
\omega^i{}_b\wedge e^b
&=\omega^i{}_0\wedge e^0
+\omega^i{}_j\wedge e^j\\
&=\omega^i{}_0\wedge\mathrm dt
+a\omega^i{}_j\wedge\mathrm dx^j.
\end{aligned}
\tag{J.41}
$$

代入式 (J.35)，得到

$$
\begin{aligned}
\omega^0{}_j\wedge\mathrm dx^j&=0,\\
\omega^i{}_0\wedge\mathrm dt
+a\omega^i{}_j\wedge\mathrm dx^j
&=-\dot a\,\mathrm dt\wedge\mathrm dx^i.
\end{aligned}
\tag{J.42}
$$

我们希望由这些方程求出 $\omega^a{}_b$。很容易想先猜 $\omega^0{}_j=0$；但这样一来，为了求解第二式，就必须令 $\omega^i{}_j=-\dot a\,\delta^i{}_j\mathrm dt$，这与式 (J.39) 中的 $\omega^j{}_i=-\omega^i{}_j$ 不相容。不过，可以令 $\omega^0{}_j$ 与 $\mathrm dx^j$ 成正比，从而利用楔积的反对称性解出第一式。事实上，若选择

$$
\omega^0{}_j=\dot a\,\mathrm dx^j,
\qquad
\omega^i{}_0=\dot a\,\mathrm dx^i,
\tag{J.43}
$$

就会发现，只要再令

$$
\omega^i{}_j=0,
\tag{J.44}
$$

式 (J.42) 的两个方程便都得到满足。

既然已经知道自旋联络，就可以由下式轻松求出曲率：

$$
R^a{}_b
=\mathrm d\omega^a{}_b
+\omega^a{}_c\wedge\omega^c{}_b.
\tag{J.45}
$$

先计算自旋联络形式的外微分：

$$
\begin{aligned}
\mathrm d\omega^i{}_0
&=\ddot a\,\mathrm dt\wedge\mathrm dx^i,\\
\mathrm d\omega^0{}_j
&=\ddot a\,\mathrm dt\wedge\mathrm dx^j,\\
\mathrm d\omega^i{}_j&=0.
\end{aligned}
\tag{J.46}
$$

再计算楔积：

$$
\begin{aligned}
\omega^0{}_c\wedge\omega^c{}_0&=0,\\
\omega^i{}_c\wedge\omega^c{}_0&=0,\\
\omega^i{}_c\wedge\omega^c{}_j
&=\dot a^2\,\mathrm dx^i\wedge\mathrm dx^j.
\end{aligned}
\tag{J.47}
$$

于是得到曲率二形式

$$
\begin{aligned}
R^0{}_0&=0,\\
R^0{}_j&=\ddot a\,\mathrm dt\wedge\mathrm dx^j,\\
R^i{}_0&=\ddot a\,\mathrm dt\wedge\mathrm dx^i,\\
R^i{}_j&=\dot a^2\,\mathrm dx^i\wedge\mathrm dx^j.
\end{aligned}
\tag{J.48}
$$

<!-- source: PDF 505; printed: 492 -->

为了比较，可以用多脚标架矩阵把 $R^a{}_{b\mu\nu}$ 转换成惯用表达式 $R^\rho{}_{\sigma\mu\nu}$：

$$
R^\rho{}_{\sigma\mu\nu}
=e^\rho{}_a e_\sigma{}^bR^a{}_{b\mu\nu}.
\tag{J.49}
$$

式 (J.38) 的多脚标架矩阵及其逆矩阵，用分量形式写成

$$
e_\mu{}^a
=\begin{pmatrix}
1&0&0&0\\
0&a&0&0\\
0&0&a&0\\
0&0&0&a
\end{pmatrix},
\qquad
e^\nu{}_b
=\begin{pmatrix}
1&0&0&0\\
0&a^{-1}&0&0\\
0&0&a^{-1}&0\\
0&0&0&a^{-1}
\end{pmatrix}.
\tag{J.50}
$$

还需要求出基形式楔积的分量；这也很直接：

$$
\left(\mathrm dx^\alpha\wedge\mathrm dx^\beta\right)_{\mu\nu}
=\delta^\alpha{}_\mu\delta^\beta{}_\nu
-\delta^\alpha{}_\nu\delta^\beta{}_\mu.
\tag{J.51}
$$

把所有结果合起来，得到 $R^\rho{}_{\sigma\mu\nu}$ 的分量

$$
\begin{aligned}
R^0{}_{j0l}&=a\ddot a\,\delta_{jl},\\
R^i{}_{0k0}&=-\frac{\ddot a}{a}\delta^i{}_k,\\
R^i{}_{jkl}
&=\dot a^2\left(
\delta^i{}_k\delta_{jl}
-\delta^i{}_l\delta_{jk}
\right),
\end{aligned}
\tag{J.52}
$$

以及由最后两个指标的反对称性得到的其他分量。作缩并便得到 Ricci 张量 $R_{\sigma\nu}=R^\rho{}_{\sigma\rho\nu}$ 的分量：

$$
\begin{aligned}
R_{00}&=-3\frac{\ddot a}{a},\\
R_{i0}&=0,\\
R_{ij}&=\left(a\ddot a+2\dot a^2\right)\delta_{ij}.
\end{aligned}
\tag{J.53}
$$

你可以检验，这与第 8 章所得结果一致。即使在这个简单例子中，四脚标架方法在计算上也比坐标基方法更简便；对更加复杂的度规，它的相对优势还会继续增大。

用非坐标基的语言，可以把 Riemann 几何中的联络和曲率形式体系，与粒子物理规范理论的相应形式体系作比较。在两种情形中，所关注的场都存在于分配给时空每一点的向量空间中。在 Riemann 几何里，这些向量空间包括切空间、余切空间，以及由它们构造出的高阶张量空间；规范理论关注的则是“内部”向量空间。二者的区别在于，切空间及其相关空间与流形自身紧密联系，并在建立流形时就自然定义好了。例如，切空间可以看成某一点所有方向导数组成的空间。相比之下，一个内部向量

<!-- source: PDF 506; printed: 493 -->

空间可以具有任意想要的维数，并且必须作为独立结构附加到流形上。用数学术语说，底流形与定义在每一点的内部向量空间合在一起构成一个**纤维丛**；向量空间的每一个副本称为“纤维”（这与我们对切丛的定义一致）。

除了底流形——对我们来说就是时空——和纤维之外，定义纤维丛的另一项重要成分是“结构群”。它是作用于纤维的 Lie 群，用来描述不同重叠坐标片上的纤维如何缝合。这里不展开细节；四维时空切丛的结构群一般是 $\mathrm{GL}(4,\mathbb R)$，即所有实可逆 $4\times4$ 矩阵组成的群；若有 Lorentz 度规，则可以把它约化为 Lorentz 群 $\mathrm{SO}(3,1)$。现在设想引入一个三维内部向量空间，并用普通转动把这些纤维缝合起来；新纤维丛的结构群就是 $\mathrm{SO}(3)$。生活在这个丛中的一个场可以记作 $\phi^A(x^\mu)$，其中 $A$ 从 1 取到 3；对流形上的每一点，它都是一个三维向量——这个向量属于内部空间，与时空无关。我们可以任意选择纤维中的基；这意味着“物理量”应当在如下局域 $\mathrm{SO}(3)$ 变换下保持不变：

$$
\phi^A(x^\mu)
\longrightarrow
\phi^{A'}(x^\mu)
=O^{A'}{}_A(x^\mu)\phi^A(x^\mu),
\tag{J.54}
$$

其中 $O^{A'}{}_A(x^\mu)$ 是依赖时空位置的 $\mathrm{SO}(3)$ 矩阵。这类变换称为**规范变换**，在它们之下保持不变的理论称为“规范理论”。

在大多数情况下，让物理量在规范变换下保持不变并不困难。唯一的麻烦出现在考虑偏导数 $\partial_\mu\phi^A$ 时。由于矩阵 $O^{A'}{}_A(x^\mu)$ 依赖时空位置，它会给偏导数的变换带来一个不希望出现的项。此时解法应当已经不难猜到：引入联络，修正变换律中的非齐次项。因此，在纤维丛上定义联络 $A_\mu{}^A{}_B$，它有两个“群指标”和一个时空指标。在 GCT 下，它像一形式那样变换；在规范变换下，其变换律为

$$
A_\mu{}^{A'}{}_{B'}
=O^{A'}{}_A O^B{}_{B'}A_\mu{}^A{}_B
-O^C{}_{B'}\partial_\mu O^{A'}{}_C.
\tag{J.55}
$$

（注意：这里的约定与粒子物理文献中的约定不同。）有了这个变换律，“规范协变导数”

$$
D_\mu\phi^A
=\partial_\mu\phi^A+A_\mu{}^A{}_B\phi^B
\tag{J.56}
$$

便会在规范变换下按“张量方式”变换；欢迎你自行检验。（在普通电磁学中，联络就是惯用的向量势。这里不需要任何指标，因为结构群 $\mathrm U(1)$ 是一维的。）

<!-- source: PDF 507; printed: 494 -->

很明显，内部纤维丛上的联络概念与切丛上的联络关系非常密切，在我们一直讨论的正交归一标架图景中尤其如此。例如，式 (J.55) 的变换律与自旋联络的变换律 (J.23) 完全相同。还可以定义一个曲率张量，也就是“场强”张量；它是二形式：

$$
F^A{}_B
=\mathrm dA^A{}_B
+A^A{}_C\wedge A^C{}_B,
\tag{J.57}
$$

这与式 (J.29) 精确对应。可以沿路径平行移动对象，也有类似于平行传播子的构造：把向量沿闭合曲线平行移动所得矩阵取迹，便得到所谓的 **Wilson 环**。

还可以继续发展切丛与内部向量丛之间的关系，不过那将需要另写一本书。这里以强调两种构造之间的重要差别作为结束。差别源于切丛与底流形密切相关，其他纤维丛则是在事后附加上去的。说切空间中位于 $p$ 的向量“沿一条路径指向”经过 $p$，是有意义的；对内部向量丛却不能这样说。因此，内部空间中没有坐标基的对应物——沿曲线取偏导与内部向量无关。随之也不会有类似多脚标架矩阵、把正交归一基与坐标基联系起来的结构。特别地，挠率张量只对切丛上的联络有定义，对任何规范理论联络都没有定义；它可以看作多脚标架矩阵的协变外微分，而内部丛上并不存在这种构造。我们应当理解“联络”概念不同用法之间的关系，同时不要把这种类比推得过远。

## J.1 习题

1. 在式 (J.37) 中，我们提到正交归一基中的度规可以写成

   $$
   \mathrm ds^2=\eta_{ab}e^a\otimes e^b.
   \tag{J.58}
   $$

   这怎么可能？如果度规的分量处处都是 $\eta_{ab}$，我们又如何知道几何究竟是什么？

2. 计算 Mixmaster 宇宙的联络一形式、曲率二形式，并由此求出 Riemann 张量的分量。度规为

   $$
   \mathrm ds^2
   =-\mathrm dt\otimes\mathrm dt
   +\alpha^2\sigma^1\otimes\sigma^1
   +\beta^2\sigma^2\otimes\sigma^2
   +\gamma^2\sigma^3\otimes\sigma^3.
   $$

   这里 $\alpha$、$\beta$、$\gamma$ 只是 $t$ 的函数，一形式 $\sigma^i$ 定义为

   $$
   \begin{aligned}
   \sigma^1
   &=\cos\psi\,\mathrm d\theta
   +\sin\psi\sin\theta\,\mathrm d\phi,\\
   \sigma^2
   &=\sin\psi\,\mathrm d\theta
   -\cos\psi\sin\theta\,\mathrm d\phi,\\
   \sigma^3
   &=\mathrm d\psi+\cos\theta\,\mathrm d\phi.
   \end{aligned}
   $$

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 I 平行传播子](./appendix-i-the-parallel-propagator.md) · [下一篇：参考文献](./bibliography.md)
