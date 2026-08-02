# 第 8 章 宇宙学

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 7 章 微扰理论与引力辐射](./07-perturbation-theory-and-gravitational-radiation.md) · [下一篇：第 9 章 弯曲时空中的量子场论](./09-quantum-field-theory-in-curved-spacetime.md)

<!-- source: PDF 336; printed: 323 -->

## 8.1 最大对称宇宙

当代宇宙学模型以这样一种观念为基础：宇宙各处大体相同——这一立场有时称为**哥白尼原理**。乍看之下，这种主张似乎很荒唐；例如，太阳中心与荒凉寒冷的星际空间几乎毫无相似之处。不过，我们只认为哥白尼原理适用于最大的尺度；在这些尺度上，局域的密度起伏已经被平均掉了。许多不同的观测都表明它在这种尺度上成立，例如星系的数目计数，以及对弥散 X 射线和 $\gamma$ 射线背景的观测；最清楚的证据则来自温度约为 $3\,\mathrm K$ 的宇宙微波背景（cosmic microwave background，CMB）。如今我们已经知道，微波背景辐射并非绝对平滑（本来也没有人预期它会绝对平滑），但偏离规则性的程度只有 $10^{-5}$ 量级或更小，这当然足以作为近似描述大尺度时空的基础。

哥白尼原理与流形可能具有的两个更精确的数学性质有关：各向同性与均匀性。**各向同性**是关于流形中某个特定点的性质，它表示无论朝哪个方向看，空间看起来都一样。更形式化地说，若对 $T_pM$ 中任意两个向量 $V$ 和 $W$，都存在 $M$ 的一个等距映射，使得 $W$ 在该等距映射下的推前与 $V$ 平行（$V$ 本身不作推前），那么流形 $M$ 在点 $p$ 周围是各向同性的。微波背景观测所揭示的，正是空间的各向同性。

**均匀性**表示度规在整个流形上都相同。换言之，给定 $M$ 中任意两点 $p$ 和 $q$，都存在一个把 $p$ 映到 $q$ 的等距映射。要注意，均匀性与各向同性之间没有必然联系：一个流形可以处处均匀、却处处不具各向同性（例如取通常度规的 $\mathbb R\times S^2$）；它也可以在某一点周围各向同性、却不均匀（例如圆锥在顶点周围各向同性，但显然不均匀）。另一方面，如果一个空间处处各向同性，它就是均匀的。同样，如果它在一个点周围各向同性并且又是均匀的，那么它在每一点周围都会各向同性。观测已经为各向同性提供了充分证据；哥白尼原理又告诉我们，人类并不处在宇宙中心，因而其他地方的观察者也应该观测到各向同性。下文将同时假定均匀性与各向同性。

<!-- source: PDF 337; printed: 324 -->

均匀性与各向同性之所以有用，是因为二者共同蕴含空间具有最大对称性。经过适当推广，可以把各向同性看成旋转下的不变性，把均匀性看成平移下的不变性。于是，均匀性与各向同性合在一起意味着一个空间拥有可能达到的最大数量的 Killing 向量。对哥白尼原理作一种极端应用，会要求时空本身也是最大对称的。实际情况并非如此；从观测上我们知道，宇宙在空间中均匀且各向同性，但在整个时空中并不如此。不过，从最大对称时空开始讨论仍然很有意思（毕竟，它们是“只有空间最大对称”这一更一般情形的特例）。我们将会看到，从某种意义上说，这样的宇宙是广义相对论的“基态”。与本章后面的内容相比，这段讨论和观测到的宇宙联系较少；偏重经验的读者可以直接跳到下一节。

第 3 章曾经提到，带有度规 $g_{\mu\nu}$ 的 $n$ 维最大对称流形，其 Riemann 张量可以写成

$$
R_{\rho\sigma\mu\nu}
=\kappa\left(g_{\rho\mu}g_{\sigma\nu}-g_{\rho\nu}g_{\sigma\mu}\right),
\tag{8.1}
$$

其中 $\kappa$ 是 Ricci 曲率的一种归一化度量：

$$
\kappa=\frac{R}{n(n-1)},
\tag{8.2}
$$

而 Ricci 标量 $R$ 在整个流形上是常数。因为在任意单点处，我们总能把度规化为标准形式（$g_{\mu\nu}=\eta_{\mu\nu}$），所以在局域意义上，最大对称流形的种类由度规号差以及常数 $\kappa$ 的符号刻画。“局域”这个限定词是必要的，因为还可能存在整体上的差别，例如平面与环面之间的差别。

我们关心号差为 $(-+++)$ 的度规。曲率为零（$\kappa=0$）时，最大对称时空早已为人熟知：它就是 Minkowski 空间，其度规为

$$
\mathrm ds^2=-\mathrm dt^2+\mathrm dx^2+\mathrm dy^2+\mathrm dz^2.
\tag{8.3}
$$

Minkowski 空间的共形图将在附录 H 中推导。

具有正曲率（$\kappa>0$）的最大对称时空称为 **de Sitter 空间**。考虑一个五维 Minkowski 空间，其度规为 $\mathrm ds_5^2=-\mathrm du^2+\mathrm dx^2+\mathrm dy^2+\mathrm dz^2+\mathrm dw^2$，并在其中嵌入由下式给出的双曲面：

$$
-u^2+x^2+y^2+z^2+w^2=\alpha^2.
\tag{8.4}
$$

现在通过下列关系，在双曲面上引入坐标 $\{t,\chi,\theta,\phi\}$：

$$
\begin{aligned}
u&=\alpha\sinh(t/\alpha),\\
w&=\alpha\cosh(t/\alpha)\cos\chi,
\end{aligned}
$$

<!-- source: PDF 338; printed: 325 -->

$$
\begin{aligned}
x&=\alpha\cosh(t/\alpha)\sin\chi\cos\theta,\\
y&=\alpha\cosh(t/\alpha)\sin\chi\sin\theta\cos\phi,\\
z&=\alpha\cosh(t/\alpha)\sin\chi\sin\theta\sin\phi.
\end{aligned}
\tag{8.5}
$$

于是，双曲面上的度规为

$$
\mathrm ds^2=-\mathrm dt^2+\alpha^2\cosh^2(t/\alpha)
\left[\mathrm d\chi^2+\sin^2\chi\left(\mathrm d\theta^2+\sin^2\theta\,\mathrm d\phi^2\right)\right].
\tag{8.6}
$$

圆括号中的表达式就是二球面的度规 $\mathrm d\Omega_2^2$，方括号中的表达式则是三球面的度规 $\mathrm d\Omega_3^2$。因此，de Sitter 空间描述了这样一个空间三球面：它起初收缩，在 $t=0$ 时达到最小尺寸，随后再次膨胀。当然，这一特定描述继承自某一坐标系；我们还会看到其他同样有效的描述。

这些坐标覆盖整个流形。一般来说，可以通过考察坐标系边缘附近测地线的行为来检验这一点；如果坐标不完备，测地线看起来就会在有限仿射参数处终止。因此，de Sitter 空间的拓扑是 $\mathbb R\times S^3$。这使它的共形图很容易推导，因为构造共形图的关键步骤，是把度规写成与 Einstein 静态宇宙共形相关的形式；Einstein 静态宇宙是一个拓扑为 $\mathbb R\times S^3$ 的时空，它描述半径在时间中保持不变的空间三球面。考虑从 $t$ 到 $t'$ 的坐标变换

$$
\cosh(t/\alpha)=\frac{1}{\cos(t^\prime)}.
\tag{8.7}
$$

度规（8.6）变为

$$
\mathrm ds^2=\frac{\alpha^2}{\cos^2(t^\prime)}\,\mathrm d\bar{s}^{2},
\tag{8.8}
$$

其中 $\mathrm d\bar{s}^{2}$ 表示 Einstein 静态宇宙的度规：

$$
\mathrm d\bar{s}^{2}=-(\mathrm d t^\prime)^2+\mathrm d\chi^2+\sin^2\chi\,\mathrm d\Omega_2^2.
\tag{8.9}
$$

新时间坐标的取值范围是

$$
-\frac{\pi}{2}<t^\prime<\frac{\pi}{2}.
\tag{8.10}
$$

de Sitter 空间的共形图，就是它所共形对应的那一片 Einstein 静态宇宙的表示。如图 8.1 所示，它看起来是一个正方形。$t'$ 为常数的类空切片代表三球面；左右边缘的虚线是这个球面的北极和南极。对角线代表类光射线；一个从过去无穷远发出的光子，会在未来无穷远恰好到达球面上的对跖点。

> **图 8.1　de Sitter 时空的共形图。** 类空切片是三球面，因此图中的点代表二球面；左右边缘处除外，那里的每个位置各代表一个点。图中 $-\pi/2<t'<\pi/2$、$0\leq\chi\leq\pi$。

<!-- source: PDF 339; printed: 326 -->

请记住，时空在过去与未来“终止”仅仅是共形变换造成的效果；真实的 de Sitter 空间向过去和未来都无限延伸。还要注意，两点的未来（或过去）光锥可能完全互不相交；这反映出球形空间截面膨胀得如此迅速，以至于从一点出发的光永远无法与来自另一点的光接触。

类似的双曲面构造揭示了 $\kappa<0$ 的最大对称时空，它称为 **anti-de Sitter 空间**。从一个虚构的五维平直流形出发，其度规为 $\mathrm ds_5^2=-\mathrm du^2-\mathrm dv^2+\mathrm dx^2+\mathrm dy^2+\mathrm dz^2$，并嵌入由下式给出的双曲面：

$$
-u^2-v^2+x^2+y^2+z^2=-\alpha^2.
\tag{8.11}
$$

请注意其中所有的负号。随后可通过下列关系在双曲面上引入坐标 $\{t',\rho,\theta,\phi\}$：

$$
\begin{aligned}
u&=\alpha\sin(t^\prime)\cosh\rho,\\
v&=\alpha\cos(t^\prime)\cosh\rho,\\
x&=\alpha\sinh\rho\cos\theta,\\
y&=\alpha\sinh\rho\sin\theta\cos\phi,\\
z&=\alpha\sinh\rho\sin\theta\sin\phi,
\end{aligned}
\tag{8.12}
$$

由此得到双曲面上的度规

$$
\mathrm ds^2=\alpha^2\left[-\cosh^2\rho\,(\mathrm d t^\prime)^2+\mathrm d\rho^2+\sinh^2\rho\,\mathrm d\Omega_2^2\right].
\tag{8.13}
$$

这些坐标有一个奇怪的特征：$t'$ 是周期性的。由（8.12）可知，$t'$ 与 $t'+2\pi$ 代表双曲面上的同一位置。由于 $\partial_{t'}$ 处处类时，当 $t'$ 增大而 $\{\rho,\theta,\phi\}$ 保持不变时，所得曲线是一条闭合类时曲线。不过，这并非时空的内禀性质，只是从这一特定嵌入推导度规所产生的人为结果。我们完全可以考虑这个流形的“覆盖空间”：仍取（8.13）给出的度规，但允许 $t'$ 从 $-\infty$ 变到 $+\infty$。这个空间中没有闭合类时曲线；我们将以此作为 anti-de Sitter 空间的定义。

为了推导共形图，作一个与 de Sitter 情形相似的坐标变换，不过现在变换的是径向坐标：

$$
\cosh\rho=\frac{1}{\cos\chi},
\tag{8.14}
$$

于是

$$
\mathrm ds^2=\frac{\alpha^2}{\cos^2\chi}\,\mathrm d\bar{s}^{2}.
\tag{8.15}
$$

<!-- source: PDF 340; printed: 327 -->

这里的 $\mathrm d\bar{s}^{2}$ 表示 Einstein 静态宇宙的度规（8.9）。与 de Sitter 情形相比，此处的径向坐标出现在共形因子中。此外，对 anti-de Sitter 空间而言，$t'$ 坐标从负无穷延伸到正无穷，而径向坐标的范围是

$$
0\leq\chi<\frac{\pi}{2}.
\tag{8.16}
$$

因此，anti-de Sitter 空间与一半的 Einstein 静态宇宙共形相关。图 8.2 给出了其共形图，并画出若干穿过 $t'=0,\chi=0$ 的代表性类时与类空测地线。由于 $\chi$ 只到 $\pi/2$，没有一直到 $\pi$，这个时空的类空切片具有 $S^3$ 一个半球内部的拓扑，也就是在拓扑上等同于 $\mathbb R^3$；整个时空因而具有 $\mathbb R^4$ 的拓扑。图采用极坐标绘制，所以左侧的一点代表空间原点的一点，右侧的一点则代表空间无穷远处的一个二球面。另一种常见画法是绘制时空的剖面，使空间原点位于中间，左右两侧合起来构成空间无穷远。

anti-de Sitter 空间的一个有趣特征是，无穷远呈现为 $\chi=\pi/2$ 所定义的类时超曲面。无穷远是类时的，因此这个空间并非整体双曲的；若只在一个类空切片上指定信息，初值问题就不是适定的，因为信息随时都可能“从无穷远流入”。另一个有趣特征是，指数映射不能覆盖整个时空；从指定点出发的测地线——例如图中画出的那些——并不覆盖整个流形。如图所示，指向未来的类时测地线最初可以从 $t'=0,\chi=0$ 径向向外运动，但最终会重新会聚到 $t'=\pi,\chi=0$，然后再次径向向外运动。

> **图 8.2　anti-de Sitter 时空的共形图。** 类空切片具有 $\mathbb R^3$ 的拓扑。图中采用极坐标表示，所以除左侧代表空间原点处单点的位置外，图中的点都代表二球面。右侧的无穷远是一个类时曲面。

<!-- source: PDF 341; printed: 328 -->

顺带一提，实在很难不指出：无穷远的类时性质使弦理论中一个非凡特征成为可能，即“AdS/CFT 对应”。这里的 AdS 当然就是我们一直讨论的 anti-de Sitter 空间；CFT 则代表定义在边界上的共形不变场论［对于 $n$ 维 AdS，这个边界本身是一个 $(n-1)$ 维时空］。AdS/CFT 对应提出，在某种极限下，AdS 背景上的量子引力（或其超对称版本）与定义在边界上的共形不变、无引力场论等价。我们对无引力量子场论的了解远多于对量子引力的了解，因此，这一对应如果成立——它看起来很可能成立，但仍未得到证明——便能揭示量子引力中可能发生的许多事情。[^8-1]

于是，我们得到了三种最大对称时空：Minkowski（$\kappa=0$）、de Sitter（$\kappa>0$）和 anti-de Sitter（$\kappa<0$）。其中有没有哪一种可用作现实世界的有用模型？进一步说，它们是 Einstein 方程的解吗？先把（8.1）给出的 Riemann 张量缩并，并专门取四维：

$$
R_{\mu\nu}=3\kappa g_{\mu\nu},
\qquad R=12\kappa.
\tag{8.17}
$$

因此，在最大对称空间中，Ricci 张量与度规成正比。具有这一性质的时空有时称为 Einstein 空间；Einstein 静态宇宙并不是 Einstein 空间的一个例子，这有时会让人迷惑。更糟的是，后面还会遇到 Einstein–de Sitter 宇宙学，它与 Einstein 空间、Einstein 静态宇宙或 de Sitter 空间都没有关系。Einstein 张量为

$$
G_{\mu\nu}=R_{\mu\nu}-\frac12 Rg_{\mu\nu}=-3\kappa g_{\mu\nu}.
\tag{8.18}
$$

因此，Einstein 方程 $G_{\mu\nu}=8\pi G T_{\mu\nu}$ 蕴含（只在最大对称时空中如此，一般情况下并不成立）能量-动量张量与度规成正比：

$$
T_{\mu\nu}=-\frac{3\kappa}{8\pi G}g_{\mu\nu}.
\tag{8.19}
$$

这样的能量-动量张量对应于第 4 章讨论的真空能或宇宙学常数。能量密度与压强为

$$
\rho=-p=\frac{3\kappa}{8\pi G}.
\tag{8.20}
$$

如果 $\rho$ 为正，就得到 de Sitter 解；如果 $\rho$ 为负，就得到 anti-de Sitter 解。然而，我们的宇宙中既有普通物质和辐射，也可能有真空能。最大对称时空与

[^8-1]: 一篇全面综述见 O. Aharony、S. S. Gubser、J. M. Maldacena、H. Ooguri 与 Y. Oz，*Phys. Rept.* **323**, 183 (2000)，<https://arxiv.org/hep-th/9905111>。

<!-- source: PDF 342; printed: 329 -->

在动力学上具有重要含量的物质和／或辐射并不相容。此外，我们观测到宇宙中的可见物质正在彼此远离（也就是下文将讨论的宇宙膨胀），所以过去的物质密度更高；即使今天物质对总能量的贡献微不足道，它在早期宇宙中也会相当显著。因此，最大对称时空不是现实世界的合理模型。不过，在没有任何普通物质或引力辐射时，它们确实代表 Einstein 方程（局域）唯一的解；正是在这个意义上，可以把它们看作广义相对论的基态。

## 8.2 Robertson–Walker 度规

为了描述现实世界，我们不得不放弃那个蕴含整个空间和时间都具有对称性的“完美”哥白尼原理，转而提出一个较宽松的假设。事实表明，假定宇宙在**空间上**均匀且各向同性、同时又随时间演化，既简单直接，也与观测一致。在广义相对论中，这转化为如下陈述：宇宙可以叶分解为类空切片，并且每一个三维切片都是最大对称的。因此，我们把时空看作 $\mathbb R\times\Sigma$，其中 $\mathbb R$ 代表时间方向，$\Sigma$ 是最大对称三维流形。于是时空度规具有形式

$$
\mathrm ds^2=-\mathrm dt^2+R^2(t)\,\mathrm d\sigma^2,
\tag{8.21}
$$

其中 $t$ 是类时坐标，$R(t)$ 是称为**尺度因子**的函数，$\mathrm d\sigma^2$ 是 $\Sigma$ 上的度规，可以表示为

$$
\mathrm d\sigma^2=\gamma_{ij}(u)\,\mathrm du^i\mathrm du^j,
\tag{8.22}
$$

其中 $(u^1,u^2,u^3)$ 是 $\Sigma$ 上的坐标，$\gamma_{ij}$ 是最大对称三维度规。尺度因子告诉我们，在时刻 $t$，类空切片 $\Sigma$ 有多大。（不要把它与曲率标量混淆。）这里采用的坐标中，度规没有 $\mathrm dt\,\mathrm du^i$ 交叉项，且 $\mathrm dt^2$ 的系数与 $u^i$ 无关；这种坐标称为**共动坐标**，是附录 D 所讨论的 Gaussian 法坐标的一种特例。保持 $u^i$ 不变的观察者也称为“共动”观察者。只有共动观察者才会认为宇宙看起来各向同性；事实上，地球并不完全共动，因此，普通的 Doppler 效应使我们在宇宙微波背景中看到偶极各向异性。

我们所关心的因而是最大对称 Euclidean 三维度规 $\gamma_{ij}$。我们知道，最大对称度规满足

$$
{}^{(3)}R_{ijkl}=k\left(\gamma_{ik}\gamma_{jl}-\gamma_{il}\gamma_{jk}\right),
\tag{8.23}
$$

为方便以后使用，这里引入了

$$
k=\frac{{}^{(3)}R}{6},
\tag{8.24}
$$

<!-- source: PDF 343; printed: 330 -->

并在 Riemann 张量上标出上标 $(3)$，提醒我们它与三维度规 $\gamma_{ij}$ 相关，而非整个时空的度规。相应的 Ricci 张量为

$$
{}^{(3)}R_{jl}=2k\gamma_{jl}.
\tag{8.25}
$$

如果空间是最大对称的，它当然也具有球对称性。我们从研究 Schwarzschild 解的过程中已经了解了一些球对称空间；度规可以化为

$$
\mathrm d\sigma^2=\gamma_{ij}\,\mathrm du^i\mathrm du^j
=e^{2\beta(\bar r)}\mathrm d\bar r^2+\bar r^2\mathrm d\Omega^2,
\tag{8.26}
$$

其中 $\bar r$ 是径向坐标，二球面的度规照例为 $\mathrm d\Omega^2=\mathrm d\theta^2+\sin^2\theta\,\mathrm d\phi^2$。这种度规的 Ricci 张量分量可以从（5.14）——静态球对称时空的 Ricci 张量——得到：令其中的 $\alpha=0$ 且 $r=\bar r$，便有

$$
\begin{aligned}
{}^{(3)}R_{11}&=\frac{2}{\bar r}\,\partial_1\beta,\\
{}^{(3)}R_{22}&=e^{-2\beta}\left(\bar r\,\partial_1\beta-1\right)+1,\\
{}^{(3)}R_{33}&=\left[e^{-2\beta}\left(\bar r\,\partial_1\beta-1\right)+1\right]\sin^2\theta.
\end{aligned}
\tag{8.27}
$$

利用（8.25）令这些分量与度规相应分量成正比，就可以解出 $\beta(\bar r)$：

$$
\beta=-\frac12\ln\left(1-k\bar r^2\right),
\tag{8.28}
$$

由此得到三维曲面 $\Sigma$ 上的度规

$$
\mathrm d\sigma^2=\frac{\mathrm d\bar r^2}{1-k\bar r^2}+\bar r^2\mathrm d\Omega^2.
\tag{8.29}
$$

由（8.24）可见，$k$ 的数值设定了空间曲面的曲率，从而也设定了它的大小。通常把它归一化为

$$
k\in\{+1,0,-1\},
\tag{8.30}
$$

并把流形的物理尺寸吸收到尺度因子 $R(t)$ 中。

$k=-1$ 对应 $\Sigma$ 上的恒定负曲率，有时称为**开放**；$k=0$ 对应 $\Sigma$ 上曲率为零，称为**平直**；$k=+1$ 对应 $\Sigma$ 上的正曲率，有时称为**闭合**。采用度规的另一种形式，会让这些情形的物理解释更清楚。为此，引入新的径向坐标 $\chi$，定义为

$$
\mathrm d\chi=\frac{\mathrm d\bar r}{\sqrt{1-k\bar r^2}}.
\tag{8.31}
$$

<!-- source: PDF 344; printed: 331 -->

积分可得

$$
\bar r=S_k(\chi),
\tag{8.32}
$$

其中

$$
S_k(\chi)=
\begin{cases}
\sin\chi, & k=+1,\\
\chi, & k=0,\\
\sinh\chi, & k=-1,
\end{cases}
\tag{8.33}
$$

因而

$$
\mathrm d\sigma^2=\mathrm d\chi^2+S_k^2(\chi)\,\mathrm d\Omega^2.
\tag{8.34}
$$

在平直的 $k=0$ 情形中，$\Sigma$ 上的度规变为

$$
\begin{aligned}
\mathrm d\sigma^2&=\mathrm d\chi^2+\chi^2\mathrm d\Omega^2\\
&=\mathrm dx^2+\mathrm dy^2+\mathrm dz^2,
\end{aligned}
\tag{8.35}
$$

这就是平直 Euclidean 空间。从整体上看，它可以描述 $\mathbb R^3$，也可以描述更复杂的流形，例如三环面 $S^1\times S^1\times S^1$。对于闭合的 $k=+1$ 情形，有

$$
\mathrm d\sigma^2=\mathrm d\chi^2+\sin^2\chi\,\mathrm d\Omega^2,
\tag{8.36}
$$

这就是三球面的度规。在这种情况下，唯一可能的整体结构是完整三球面；有一个例外，即在 $S^3$ 上认同对跖点所得到的不可定向流形 $\mathbb{RP}^3$。最后，在开放的 $k=-1$ 情形中得到

$$
\mathrm d\sigma^2=\mathrm d\chi^2+\sinh^2\chi\,\mathrm d\Omega^2.
\tag{8.37}
$$

这是三维恒定负曲率空间的度规，是第 3.9 节所讨论双曲面的推广。从整体上看，这种空间可以无限延伸——“开放”一词正源于此——但它也可以描述非单连通的紧空间，所以“开放”其实算不上最准确的称呼。

时空度规描述上述某一种最大对称超曲面的尺寸随时间演化，可以写成

$$
\mathrm ds^2=-\mathrm dt^2+R^2(t)
\left[\frac{\mathrm d\bar r^2}{1-k\bar r^2}+\bar r^2\mathrm d\Omega^2\right].
\tag{8.38}
$$

这就是 **Robertson–Walker（RW）度规**。到这里我们还没有使用 Einstein 方程；该方程将决定尺度因子 $R(t)$ 的行为。注意，代换

<!-- source: PDF 345; printed: 332 -->

$$
\begin{aligned}
R&\longrightarrow\lambda^{-1}R,\\
\bar r&\longrightarrow\lambda\bar r,\\
k&\longrightarrow\lambda^{-2}k
\end{aligned}
\tag{8.39}
$$

保持（8.38）不变。因此，我们可以选择方便的归一化。在把曲率 $k$ 归一化为 $\{+1,0,-1\}$ 的变量中，尺度因子具有距离量纲，而径向坐标 $\bar r$（或 $\chi$）实际上是无量纲的；这是最常用的选择。这里我们将不遵循这一惯例，改用无量纲尺度因子

$$
a(t)=\frac{R(t)}{R_0},
\tag{8.40}
$$

具有距离量纲的坐标

$$
r=R_0\bar r,
\tag{8.41}
$$

以及量纲为 $\text{长度}^{-2}$ 的曲率参数

$$
\kappa=\frac{k}{R_0^2}.
\tag{8.42}
$$

注意，$\kappa$ 可以取任意值，不限于 $\{+1,0,-1\}$。用这些变量表示时，Robertson–Walker 度规为

$$
\boxed{
\mathrm ds^2=-\mathrm dt^2+a^2(t)
\left[\frac{\mathrm dr^2}{1-\kappa r^2}+r^2\mathrm d\Omega^2\right]
}.
\tag{8.43}
$$

若要转换回更常见的记号，只需代入关系（8.40）、（8.41）与（8.42）。

有了度规之后，就可以着手计算联络系数和曲率张量。令 $\dot a\equiv\mathrm da/\mathrm dt$，Christoffel 符号为

$$
\begin{aligned}
\Gamma^0{}_{11}&=\frac{a\dot a}{1-\kappa r^2},
&\Gamma^1{}_{11}&=\frac{\kappa r}{1-\kappa r^2},\\
\Gamma^0{}_{22}&=a\dot a\,r^2,
&\Gamma^0{}_{33}&=a\dot a\,r^2\sin^2\theta,\\
\Gamma^1{}_{01}&=\Gamma^2{}_{02}=\Gamma^3{}_{03}=\frac{\dot a}{a},\\
\Gamma^1{}_{22}&=-r(1-\kappa r^2),
&\Gamma^1{}_{33}&=-r(1-\kappa r^2)\sin^2\theta,\\
\Gamma^2{}_{12}&=\Gamma^3{}_{13}=\frac1r,\\
\Gamma^2{}_{33}&=-\sin\theta\cos\theta,
&\Gamma^3{}_{23}&=\cot\theta.
\end{aligned}
\tag{8.44}
$$

<!-- source: PDF 346; printed: 333 -->

以及由下标对称性与这些分量相关的 Christoffel 符号。Ricci 张量的非零分量为

$$
\begin{aligned}
R_{00}&=-3\frac{\ddot a}{a},\\
R_{11}&=\frac{a\ddot a+2\dot a^2+2\kappa}{1-\kappa r^2},\\
R_{22}&=r^2\left(a\ddot a+2\dot a^2+2\kappa\right),\\
R_{33}&=r^2\left(a\ddot a+2\dot a^2+2\kappa\right)\sin^2\theta,
\end{aligned}
\tag{8.45}
$$

因而 Ricci 标量为

$$
R=6\left[\frac{\ddot a}{a}+\left(\frac{\dot a}{a}\right)^2+\frac{\kappa}{a^2}\right].
\tag{8.46}
$$

## 8.3 Friedmann 方程

无论尺度因子 $a(t)$ 具有何种行为，RW 度规都有定义；下一步要把它代入 Einstein 方程，推导把尺度因子与宇宙能量-动量联系起来的 Friedmann 方程。我们选择用理想流体来模拟物质和能量。显然，如果在某个参考系中各向同性的流体产生了在某个参考系中各向同性的度规，那么这两个参考系必定重合；也就是说，流体在共动坐标中静止。于是四速度为

$$
U^\mu=(1,0,0,0),
\tag{8.47}
$$

而能量-动量张量

$$
T_{\mu\nu}=(\rho+p)U_\mu U_\nu+pg_{\mu\nu}
\tag{8.48}
$$

变为

$$
T_{\mu\nu}=
\begin{pmatrix}
\rho&0\\
0&g_{ij}p
\end{pmatrix}.
\tag{8.49}
$$

把一个指标升高以后，它具有方便的形式

$$
T^\mu{}_{\nu}=\operatorname{diag}(-\rho,p,p,p).
\tag{8.50}
$$

注意，其迹为

$$
T=T^\mu{}_{\mu}=-\rho+3p.
\tag{8.51}
$$

在代入 Einstein 方程之前，先考察能量守恒方程的零分量很有启发性：

<!-- source: PDF 347; printed: 334 -->

$$
\begin{aligned}
0&=\nabla_\mu T^\mu{}_{0}\\
&=\partial_\mu T^\mu{}_{0}
+\Gamma^\mu{}_{\mu\lambda}T^\lambda{}_{0}
-\Gamma^\lambda{}_{\mu 0}T^\mu{}_{\lambda}\\
&=-\partial_0\rho-3\frac{\dot a}{a}(\rho+p).
\end{aligned}
\tag{8.52}
$$

为了继续推进，可以选择一个**状态方程**，也就是 $\rho$ 与 $p$ 之间的关系。宇宙学中常见的理想流体往往遵循简单的状态方程

$$
p=w\rho,
\tag{8.53}
$$

其中 $w$ 是与时间无关的常数。当然，无论 $w$ 是否保持常数，我们都可以定义参数 $w=p/\rho$；但如果 $w$ 随时间变化，把 $p=w\rho$ 称作“状态方程”就不太恰当。能量守恒方程变为

$$
\boxed{
\frac{\dot\rho}{\rho}=-3(1+w)\frac{\dot a}{a}
}.
\tag{8.54}
$$

如果 $w$ 是常数，积分得到

$$
\rho\propto a^{-3(1+w)}.
\tag{8.55}
$$

为了了解 $w$ 可以取哪些值，可以回顾第 4 章关于能量条件的讨论。类光主导能量条件允许任一符号的真空能，但在其他情况下要求物质不能使真空失稳；它蕴含

$$
|w|\leq 1.
\tag{8.56}
$$

这个要求绝非不可更改的定论，但它似乎是研究现实世界中可能发生什么时，一个适当保守的出发点。

宇宙学流体最常见的两个例子称为**物质**与**辐射**。物质是任意一组无碰撞的非相对论粒子，它们的压强基本为零：

$$
p_{\mathrm M}=0.
\tag{8.57}
$$

普通恒星和星系都是例子；对它们而言，压强与能量密度相比可以忽略。物质也称为**尘埃**，能量密度主要来自物质的宇宙称为**物质主导**宇宙。物质能量密度按

$$
\rho_{\mathrm M}\propto a^{-3}
\tag{8.58}
$$

衰减。其含义很简单：宇宙膨胀时，粒子的数密度随之降低。对物质而言，能量密度由静止能主导，

<!-- source: PDF 348; printed: 335 -->

而静止能与数密度成正比。辐射既可以用来描述真正的电磁辐射，也可以用来描述以相对论性速度运动的有质量粒子；当这些粒子的速度足够接近光速时，至少就状态方程而言，它们与光子无法区分。各向同性的相对论粒子气体是理想流体，因此其能量-动量张量由（8.48）给出；另一方面，我们也知道，电磁场的 $T_{\mu\nu}$ 可以用场强表示为

$$
T^{\mu\nu}=F^{\mu\lambda}F^\nu{}_{\lambda}
-\frac14 g^{\mu\nu}F^{\lambda\sigma}F_{\lambda\sigma}.
\tag{8.59}
$$

它的迹为

$$
T^\mu{}_{\mu}
=F^{\mu\lambda}F_{\mu\lambda}
-\frac14(4)F^{\lambda\sigma}F_{\lambda\sigma}=0.
\tag{8.60}
$$

这个结果也必须等于（8.51），所以状态方程为

$$
p_{\mathrm R}=\frac13\rho_{\mathrm R}.
\tag{8.61}
$$

大部分能量密度都以辐射形式存在的宇宙称为**辐射主导**宇宙。辐射能量密度按

$$
\rho_{\mathrm R}\propto a^{-4}
\tag{8.62}
$$

衰减。因此，辐射能量密度比物质能量密度衰减得稍快。这是因为光子数密度与非相对论粒子数密度以相同方式降低，而单个光子在红移时还会按 $a^{-1}$ 损失能量；后面会看到这一点。同样，有质量的相对论粒子在共动坐标中“减速”时也会损失能量。我们相信，今天的辐射能量密度远低于物质能量密度，$\rho_{\mathrm M}/\rho_{\mathrm R}\sim10^3$。然而，过去的宇宙要小得多，在非常早期，辐射能量密度应当占据主导。

如前所述，真空能也具有理想流体的形式，状态方程为 $p_\Lambda=-\rho_\Lambda$。它的能量密度是常数：

$$
\rho_\Lambda\propto a^0.
\tag{8.63}
$$

随着宇宙膨胀，物质与辐射的能量密度都会降低。因此，只要宇宙没有开始收缩，任何非零真空能长期来看都倾向于胜出。若发生这种情况，我们就说宇宙变成了**真空主导**。de Sitter 解与 anti-de Sitter 解都是真空主导解。

现在转向 Einstein 方程。回忆它可以写成（4.45）的形式：

$$
R_{\mu\nu}=8\pi G\left(T_{\mu\nu}-\frac12 g_{\mu\nu}T\right).
\tag{8.64}
$$

<!-- source: PDF 349; printed: 336 -->

$\mu\nu=00$ 方程为

$$
-3\frac{\ddot a}{a}=4\pi G(\rho+3p),
\tag{8.65}
$$

而 $\mu\nu=ij$ 方程给出

$$
\frac{\ddot a}{a}+2\left(\frac{\dot a}{a}\right)^2
+2\frac{\kappa}{a^2}=4\pi G(\rho-p).
\tag{8.66}
$$

由于各向同性，$\mu\nu=ij$ 只给出一个独立方程。用（8.65）消去（8.66）中的二阶导数，再稍作整理，得到

$$
\boxed{
\left(\frac{\dot a}{a}\right)^2=\frac{8\pi G}{3}\rho-\frac{\kappa}{a^2}
},
\tag{8.67}
$$

以及

$$
\boxed{
\frac{\ddot a}{a}=-\frac{4\pi G}{3}(\rho+3p)
}.
\tag{8.68}
$$

二者合称 **Friedmann 方程**；满足这些方程、且具有（8.43）形式的度规定义了 Friedmann–Robertson–Walker（FRW）宇宙。事实上，如果知道 $\rho$ 如何依赖 $a$，第一个方程（8.67）已经足以求出 $a(t)$。通常人们说到“Friedmann 方程”时，指的就是这一个；（8.68）有时称为**第二 Friedmann 方程**。

宇宙学参数伴随着许多术语，这里只介绍最基本的几个。膨胀速率由 **Hubble 参数**刻画：

$$
\boxed{H=\frac{\dot a}{a}}.
\tag{8.69}
$$

Hubble 参数在当前历元的值称为 Hubble 常数 $H_0$。当时的测量使我们相信，Hubble 常数为 $70\pm10\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$。（Mpc 表示兆秒差距，$1\ \mathrm{Mpc}=3.09\times10^{24}\ \mathrm{cm}$。）由于这个数值仍有一定不确定性，常把 Hubble 常数参数化为

$$
H_0=100h\ \mathrm{km\,s^{-1}\,Mpc^{-1}},
\tag{8.70}
$$

于是 $h\approx0.7$。典型的宇宙学尺度由 **Hubble 长度**

<!-- source: PDF 350; printed: 337 -->

$$
\begin{aligned}
d_H&=H_0^{-1}c\\
&=9.25\times10^{27}h^{-1}\ \mathrm{cm}\\
&=3.00\times10^3h^{-1}\ \mathrm{Mpc},
\end{aligned}
\tag{8.71}
$$

和 **Hubble 时间**

$$
\begin{aligned}
t_H&=H_0^{-1}\\
&=3.09\times10^{17}h^{-1}\ \mathrm{sec}\\
&=9.78\times10^9h^{-1}\ \mathrm{yr}
\end{aligned}
\tag{8.72}
$$

给出。当然，我们通常令 $c=1$，所以会看到 $H_0^{-1}$ 同时被称为 Hubble 长度与 Hubble 时间。还有**减速参数**

$$
q=-\frac{a\ddot a}{\dot a^2},
\tag{8.73}
$$

它衡量膨胀速率本身的变化率。

另一个有用的量是**密度参数**

$$
\boxed{
\Omega=\frac{8\pi G}{3H^2}\rho=\frac{\rho}{\rho_{\mathrm{crit}}}
},
\tag{8.74}
$$

其中**临界密度**定义为

$$
\rho_{\mathrm{crit}}=\frac{3H^2}{8\pi G}.
\tag{8.75}
$$

这个量通常随时间变化。之所以称它为临界密度，是因为 Friedmann 方程（8.67）可以写成

$$
\Omega-1=\frac{\kappa}{H^2a^2}.
\tag{8.76}
$$

因此，$\kappa$ 的符号由 $\Omega$ 大于、等于还是小于一决定：

$$
\begin{aligned}
\rho<\rho_{\mathrm{crit}}&\ \Longleftrightarrow\ \Omega<1
\ \Longleftrightarrow\ \kappa<0
\ \Longleftrightarrow\ \text{开放},\\
\rho=\rho_{\mathrm{crit}}&\ \Longleftrightarrow\ \Omega=1
\ \Longleftrightarrow\ \kappa=0
\ \Longleftrightarrow\ \text{平直},\\
\rho>\rho_{\mathrm{crit}}&\ \Longleftrightarrow\ \Omega>1
\ \Longleftrightarrow\ \kappa>0
\ \Longleftrightarrow\ \text{闭合}.
\end{aligned}
$$

密度参数由此告诉我们，三种 Robertson–Walker 几何中的哪一种描述了我们的宇宙。通过观测确定它极其重要；当时对宇宙微波背景各向异性的测量使我们相信，$\Omega$ 非常接近一。

<!-- source: PDF 351; printed: 338 -->

## 8.4 尺度因子的演化

给定不同组分 $i$ 的能量密度 $\rho_i$、各自的状态方程 $p_i=p_i(\rho_i)$，以及空间曲率 $\kappa$，就可以求解 Friedmann 方程（8.67），得到尺度因子 $a(t)$ 的完整演化历史。一般来说，我们只需数值积分 Friedmann 方程（它只是一个一阶微分方程）；不过，先对不同宇宙学参数所对应的解的类型建立一些直觉，仍然很有用。

为了简化任务，设想所有不同的能量密度组分都按幂律演化：

$$
\rho_i=\rho_{i0}a^{-n_i}.
\tag{8.77}
$$

与（8.55）比较可知，这等价于假定每个状态方程参数 $w_i=p_i/\rho_i$ 都是常数，且

$$
w_i=\frac13n_i-1.
\tag{8.78}
$$

还可以把空间曲率的贡献视作一种虚构的能量密度，从而进一步精简表达式：

$$
\rho_c\equiv-\frac{3\kappa}{8\pi G a^2},
\tag{8.79}
$$

它对应的密度参数为

$$
\Omega_c=-\frac{\kappa}{H^2a^2}.
\tag{8.80}
$$

当然，它并不是能量密度；别忘了这只是记号上的小把戏。我们常用的几种源的行为汇总如下：

$$
\begin{array}{c|cc}
&w_i&n_i\\ \hline
\text{物质}&0&3\\
\text{辐射}&\frac13&4\\
\text{曲率}&-\frac13&2\\
\text{真空}&-1&0
\end{array}
\tag{8.81}
$$

用这些变量，Friedmann 方程（8.67）可以写成

$$
H^2=\frac{8\pi G}{3}\sum_{i(c)}\rho_i,
\tag{8.82}
$$

这里的记号 $\sum_{i(c)}$ 表示，求和既包括所有真实的能量密度组分 $\rho_i$，也包括空间曲率的贡献

<!-- source: PDF 352; printed: 339 -->

$\rho_c$。注意，如果把方程两边都除以 $H^2$，就得到

$$
1=\sum_{i(c)}\Omega_i.
\tag{8.83}
$$

右边并不是总密度参数 $\Omega$；后者只接收真实能量密度的贡献，不包括曲率。因此有

$$
\Omega_c=1-\Omega.
\tag{8.84}
$$

先来问：如果所有 $\rho_i$（包括 $\rho_c$）都非负，可能发生什么？由于 $H^2$ 与 $\sum_{i(c)}\rho_i$ 成正比，只要 $\sum_{i(c)}\rho_i\neq0$，宇宙就永远不会从膨胀转为收缩。还可以对 Hubble 参数作时间微分：

$$
\dot H=\frac{\ddot a}{a}-\left(\frac{\dot a}{a}\right)^2,
\tag{8.85}
$$

再代入两个 Friedmann 方程（8.67）与（8.68），得到

$$
\dot H=-4\pi G\sum_{i(c)}(1+w_i)\rho_i.
\tag{8.86}
$$

我们假定 $|w_i|\leq1$，所以当所有 $\rho_i$ 都非负时，总有 $\dot H\leq0$。换言之，宇宙继续膨胀，但膨胀率不断减小（这自然引出一个绝佳问题：它最初究竟为什么会变得这么大？）。

由（8.85）可见，$\ddot a$ 可以为正，同时 $\dot H$ 为负——即使 Hubble 参数所测得的膨胀率在减小，尺度因子仍然可以“加速”（例如 $a\propto t^2$）。这是非 Euclidean 几何中无法避开的一个微妙之处。Hubble 参数与尺度因子的导数回答的是两个不同的问题。如果把两个试验粒子放在某个固定的初始距离上，问它们在很短时间后分开了多少，答案由 Hubble 参数给出。另一方面，如果选定某个固定的源，问它随时间推移看起来以何种方式远离我们，答案由尺度因子的变化给出。因此，“加速”（或“减速”）存在两种差别很大、又同样合理的含义。在实际使用中，“加速”通常指 $\ddot a>0$ 的情形，即使 $\dot H<0$。这段讨论并不纯粹是学术性的；下文将会看到，我们目前的真实宇宙看起来正属于这一类。

并不要求每一个 $\rho_i$ 都非负。物质与辐射来自动力学粒子和场，所以我们预期它们的能量密度永远不会是负的；如果可以为负，空空间就可能衰变成一批正能与负能场。然而，真空与曲率的情况有所不同。真空能没有动力学，所以负值不会诱发任何不稳定性；曲率则只是空间几何的性质，可以具有任一符号。因此，如果存在负真空能或

<!-- source: PDF 353; printed: 340 -->

正空间曲率（记住 $\rho_c\propto-\kappa$），Hubble 参数就可能变为零，甚至改变符号。de Sitter 度规（8.6）提供了一个例子：它有正真空能，同时也有正空间曲率；它描述一个起初坍缩、到达转折点、随后开始膨胀的宇宙。

现实世界很杂乱，包含许多不同种类的能量密度。不过，由于不同的源以不同速率演化，在很长的时期内，能量密度显然会由某一种源主导。因此，考察只有一种能量密度 $\rho\propto a^{-n}$ 时 Friedmann 方程的解非常有用。由于我们把空间曲率也算作有效能量源，这意味着所考察的要么是由单一源主导的平直宇宙，要么是带空间曲率的完全空宇宙。Friedmann 方程于是蕴含

$$
\dot a\propto a^{1-n/2}.
\tag{8.87}
$$

立刻积分可得

$$
\boxed{
a\propto t^{2/n}\qquad\left(\rho\propto a^{-n}\right)
}.
\tag{8.88}
$$

例如，考虑由物质主导的平直宇宙，$\Omega=\Omega_{\mathrm M}=1$；它称为 **Einstein–de Sitter 模型**，而且曾经长期作为描述现实世界最受青睐的模型，至少理论家们很喜欢它。在 Einstein–de Sitter 宇宙中，尺度因子按 $a\propto t^{2/3}$ 演化；由辐射主导的平直宇宙则按 $a\propto t^{1/2}$ 演化。附录 H 推导了任何 $n>2$ 的这类宇宙的共形图。尽管我们相信真实宇宙中物质、辐射和真空能都具有非零含量，这些解仍非常有用；后面将会讨论，宇宙在早期由辐射主导，而当尺度因子从 $a\sim1/3000$ 膨胀到 $a\sim1/2$ 时，则由物质主导。

这些解全都在 $a=0$ 处具有一个称为**大爆炸**的奇点。它代表宇宙从奇异状态中诞生，并不是物质爆炸进入一个预先存在的时空。人们或许希望，FRW 宇宙的完美对称性应当为这个奇点负责，但事实并非如此；宇宙学奇点定理表明，任何满足 $\rho>0$ 且 $p\geq0$ 的宇宙都必定始于奇点。当然，当 $a\to0$ 时，能量密度会任意增高，而我们不期待经典广义相对论能在这个区域准确描述自然；量子引力大概会变得重要，尽管目前还不清楚究竟以何种方式重要。

观察（8.88）可知，由真空能主导的宇宙（$n=0$）显然是特例。此时尺度因子以指数形式膨胀，而不是幂律；整个度规为

$$
\mathrm ds^2=-\mathrm dt^2+e^{2Ht}\left(\mathrm dx^2+\mathrm dy^2+\mathrm dz^2\right),
\tag{8.89}
$$

<!-- source: PDF 354; printed: 341 -->

其中 Hubble 参数 $H$ 是常数。当然，第 8.1 节已经描述过一个具有正宇宙学常数的宇宙学时空：de Sitter 空间，它具有 $\kappa>0$ 且 $a\propto\cosh(t/\alpha)$。那个解与这里 $\kappa=0$、$a\propto\exp(Ht)$ 的解有什么关系？它们是同一个时空，只是用不同坐标表示。验证这一点的一种方法，是计算（8.89）的 Riemann 张量，检查它是否具有最大对称时空的特征形式（8.1）。正曲率最大对称时空在局域上唯一，因此，度规（8.6）与（8.89）必定描述同一个流形或其中的一部分。扫描版（8.89）把空间部分的系数印作 $e^{Ht}$；由 $a\propto e^{Ht}$ 可知该系数应为 $a^2=e^{2Ht}$，上式已按作者对印刷页 375 习题 2 中同一度规的勘误作关联修正。实际上，（8.89）的坐标只覆盖 de Sitter 空间的一部分；它们在过去方向不完备。习题会要求你证明，这些坐标中的非共动测地线在有限仿射参数内到达 $t=-\infty$，也就是撞上坐标的边缘。这里也依照同一条勘误，把扫描版正文中的“共动”修正为“非共动”。在图 8.1 的共形图中，这些坐标覆盖正方形右上方的三角区域。关于 de Sitter 与 anti-de Sitter 空间上不同坐标系的更完整描述，可参见 Hawking 与 Ellis（1973）。

另一个有趣的特例是完全空的宇宙，它有 $\rho=0$，但带有空间曲率。Friedmann 方程变为

$$
H^2=-\frac{\kappa}{a^2},
\tag{8.90}
$$

所以曲率 $\kappa$ 必须为负。把曲率看作虚构的能量密度 $\rho_c\propto a^{-2}$，由（8.88）可知，这样的宇宙线性膨胀，$a\propto t$。这个时空称为 **Milne 宇宙**。然而，与 de Sitter 情形类似，我们还知道另一个 $\rho=0$ 的宇宙学时空——这里是平直的 Minkowski 空间。Milne 时空同样只是采用某个不完备坐标系描述的 Minkowski 空间一部分。可以把它看作 Minkowski 时空中某个固定点的未来光锥内部，并由负曲率双曲面作叶分解。验证它时，只需计算 Riemann 张量的所有分量；结果都为零。任何 Riemann 曲率为零的时空在局域上都是 Minkowski 时空。

与这些理想化解相比，现实的宇宙学会包含多种形式的能量-动量。我们确信，当前宇宙的辐射密度明显低于物质密度，但真空与物质在动力学上都很重要。因此，用 $\Omega_{\mathrm M}$ 与 $\Omega_\Lambda$ 参数化与我们相似的宇宙很方便，曲率则由 $\Omega_c=1-\Omega_{\mathrm M}-\Omega_\Lambda$ 固定。图 8.3 给出了这类宇宙若干具体实例的膨胀历史。随着宇宙膨胀，物质、曲率与真空的相对影响会发生变化，因为相应密度的演化速率不同：

$$
\Omega_\Lambda\propto\Omega_c a^2\propto\Omega_{\mathrm M}a^3.
\tag{8.91}
$$

过去当 $a\to0$ 时，曲率与真空都可以忽略，宇宙的行为如同 Einstein–de Sitter 宇宙。未来当 $a\to\infty$ 时，曲率与物质都可以忽略，宇宙将渐近于 de Sitter；除非尺度

<!-- source: PDF 355; printed: 342 -->

因子永远达不到无穷大，因为宇宙会在某个有限时刻开始再次坍缩。

> **图 8.3　不同 $\Omega_{\mathrm M}$ 与 $\Omega_\Lambda$ 取值下的膨胀历史。** 从上到下，各曲线分别描述 $(\Omega_{\mathrm M},\Omega_\Lambda)=(0.3,0.7)$、$(0.3,0.0)$、$(1.0,0.0)$ 与 $(4.0,0.0)$。纵轴为 $a(t)$，横轴为 $H_0(t-t_0)$。

如果真空能为负，再坍缩**总会**发生：随着宇宙膨胀，真空能最终占据主导，而 $\Omega_\Lambda<0$ 的作用是使宇宙减速并再次坍缩（正如 $\Omega_\Lambda>0$ 的作用是把宇宙推开）。当 $\Omega_\Lambda\geq0$ 时也可能再坍缩，只要 $\Omega_{\mathrm M}$ 足够大，使宇宙膨胀在 $\Omega_\Lambda$ 有机会占据主导之前便停止。图 8.4 在 $\Omega_{\mathrm M}/\Omega_\Lambda$ 参数空间的不同区域中表示了这些可能性。对角线代表 $\Omega_{\mathrm{total}}=1$，因而意味着 $\kappa=0$。

为了确定永远膨胀与最终再坍缩之间的分界线，注意坍缩要求 Hubble 参数从正变负时经过零。发生这一转折时的尺度因子 $a_*$，可以通过在 Friedmann 方程中令 $H=0$ 求得：

$$
H^2=0=\frac{8\pi G}{3}
\left(\rho_{\mathrm M0}a_*^{-3}+\rho_{\Lambda0}+\rho_{c0}a_*^{-2}\right).
\tag{8.92}
$$

方程两边除以 $H_0^2$，使用 $\Omega_{c0}=1-\Omega_{\mathrm M0}-\Omega_{\Lambda0}$，再稍作整理，得到

$$
\Omega_{\Lambda0}a_*^3+
\left(1-\Omega_{\mathrm M0}-\Omega_{\Lambda0}\right)a_*
+\Omega_{\mathrm M0}=0.
\tag{8.93}
$$

这是关于转折点尺度因子 $a_*$ 的三次方程。当然，我们其实不太关心 $a_*$ 本身；真正关心的是：给定 $\Omega_{\mathrm M0}$ 后，哪些 $\Omega_{\Lambda0}$ 取值会使（8.93）存在实数解。解这个三次方程并作一些计算，可知宇宙永远膨胀所需的 $\Omega_{\Lambda0}$ 取值为

<!-- source: PDF 356; printed: 343 -->

$$
\Omega_{\Lambda0}\geq
\begin{cases}
0,
&0\leq\Omega_{\mathrm M0}\leq1,\\[4pt]
4\Omega_{\mathrm M0}
\cos^3\!\left[
\dfrac13\cos^{-1}\!\left(\dfrac{1-\Omega_{\mathrm M0}}{\Omega_{\mathrm M0}}\right)
+\dfrac{4\pi}{3}
\right],
&\Omega_{\mathrm M0}>1.
\end{cases}
\tag{8.94}
$$

> **图 8.4　以密度参数 $\Omega_{\mathrm M}$ 与 $\Omega_\Lambda$ 为自变量，物质和真空能主导宇宙的性质。** 图中的斜线把正、负空间曲率区域分开；另一条曲线把“永远膨胀”与“再次坍缩”区域分开。左上角的圆形区域粗略表示实验数据在 2003 年所偏好的参数值。

注意，当 $\Omega_{\Lambda0}=0$ 时，开放和平直宇宙（$\Omega_0=\Omega_{\mathrm M0}\leq1$）将永远膨胀，而闭合宇宙（$\Omega_0=\Omega_{\mathrm M0}>1$）将再次坍缩。传统上对宇宙学常数的排斥，导致一种民间信念，认为这种对应关系是必然的；一旦承认真空能的可能性，空间几何与最终命运之间的任何组合其实都可能出现。[^errata-8-343]

图 8.4 左上角标出了当时偏好的宇宙学参数值：$\Omega_{\mathrm M0}\sim0.3$、$\Omega_{\Lambda0}\sim0.7$，第 8.7 节会进一步讨论。这已经深入永远膨胀的区域；如果真空能真的保持恒定（它也可能不保持），我们的宇宙就注定会永远继续膨胀。

本节最后指出，Friedmann 方程很难拥有静态解。要保持静态，既要有 $\dot a=0$，还要有 $\ddot a=0$。由（8.68）可知，只有当压强满足

$$
p=-\frac13\rho
\tag{8.95}
$$

时才有可能；由（8.67）又可知，空间曲率必须非零：

$$
\frac{\kappa}{a^2}=\frac{8\pi G}{3}\rho.
\tag{8.96}
$$

[^errata-8-343]: 作者勘误表指出，印刷页 343 正文中的 “the the cosmological constant” 重复了一个 *the*；此处按勘误后的文本翻译。

<!-- source: PDF 357; printed: 344 -->

由于能量密度与压强必须异号，只引入物质或辐射无法满足这些条件。当 Einstein 最初在广义相对论中寻找宇宙学解时，天文学家尚未发现宇宙正在膨胀，所以缺乏静态解被视为一个问题。这促使 Einstein 引入宇宙学常数；物质与真空能的组合可以满足静态条件，其中

$$
\rho_\Lambda=\frac12\rho_{\mathrm M},
\tag{8.97}
$$

同时还要配以适当的正空间曲率。这些参数描述 **Einstein 静态宇宙**。今天我们知道宇宙正在膨胀，因此这个解在经验上没有多少吸引力；不过，它对理论家极其有用，为构造共形图提供了基础。

## 8.5 红移与距离

为了判定哪一种 FRW 模型对应我们的宇宙，显然需要通过观测确定若干量。我们当然希望确定 $H_0$，因为它与宇宙年龄有关；也希望知道 $\Omega$，后者通过（8.76）决定 $\kappa$。为了理解这些量可以怎样测量，来考察 FRW 宇宙中的测地运动。这里有许多类空 Killing 向量，却没有能赋予我们守恒能量概念的类时 Killing 向量。不过，这里存在一个 Killing 张量。若 $U^\mu=(1,0,0,0)$ 是共动观察者的四速度，那么张量

$$
K_{\mu\nu}=a^2\left(g_{\mu\nu}+U_\mu U_\nu\right)
\tag{8.98}
$$

满足 $\nabla_{(\sigma}K_{\mu\nu)}=0$（你可以验证），因此它是 Killing 张量。这意味着，如果一个粒子的四速度为 $V^\mu=\mathrm dx^\mu/\mathrm d\lambda$，则

$$
K^2=K_{\mu\nu}V^\mu V^\nu
=a^2\left[V_\mu V^\mu+(U_\mu V^\mu)^2\right]
\tag{8.99}
$$

沿测地线保持常数。先考虑有质量粒子。这时 $V_\mu V^\mu=-1$，所以

$$
(V^0)^2=1+|\vec V|^2,
\tag{8.100}
$$

其中 $|\vec V|^2=g_{ij}V^iV^j$。又有 $U_\mu V^\mu=-V^0$，所以（8.99）蕴含

$$
|\vec V|=\frac{K}{a}.
\tag{8.101}
$$

因此，随着宇宙膨胀，粒子相对于共动坐标“减速”。从物理上说，这确实是一种减速：初始相对速度很高的一团粒子气体，会随着宇宙膨胀而冷却。

<!-- source: PDF 358; printed: 345 -->

类光测地线上也会发生类似现象。这时 $V_\mu V^\mu=0$，而（8.99）蕴含

$$
U_\mu V^\mu=\frac{K}{a}.
\tag{8.102}
$$

> **公式核对说明（8.102）**：上式按扫描版保留。由于前文把 $K$ 取为正值，且未来指向光子的频率满足 $\omega=-U_\mu V^\mu>0$，与上下文一致的符号应为 $U_\mu V^\mu=-K/a$。作者官方勘误没有列出这一项。

但是，共动观察者测得的光子频率为 $\omega=-U_\mu V^\mu$。因此，当宇宙膨胀时，以频率 $\omega_{\mathrm{em}}$ 发射的光子会以较低频率 $\omega_{\mathrm{obs}}$ 被观测到：

$$
\frac{\omega_{\mathrm{obs}}}{\omega_{\mathrm{em}}}
=\frac{a_{\mathrm{em}}}{a_{\mathrm{obs}}}.
\tag{8.103}
$$

宇宙学家喜欢用两个事件之间的**红移** $z$ 来描述这一点，它由波长的相对变化定义：

$$
z_{\mathrm{em}}=
\frac{\lambda_{\mathrm{obs}}-\lambda_{\mathrm{em}}}{\lambda_{\mathrm{em}}}.
\tag{8.104}
$$

如果观测发生在今天（$a_{\mathrm{obs}}=a_0=1$），这就意味着

$$
\boxed{
a_{\mathrm{em}}=\frac{1}{1+z_{\mathrm{em}}}
}.
\tag{8.105}
$$

所以，一个天体的红移告诉我们光子发射时的尺度因子。

注意，这种红移与普通 Doppler 效应不同；导致红移的是空间膨胀，而非观察者与发射者之间的相对速度。尽管如此，如果观测的星系距离与 Hubble 半径 $H_0^{-1}$、空间曲率半径 $\kappa^{-1/2}$ 相比都很小，宇宙膨胀就很像一群星系彼此分离，而红移也很像 Doppler 效应。因此，天文学家常用“速度”$v=cz$ 来理解红移，其中 $c$ 是光速。我们知道，在弯曲时空中不同点处两个物体之间的相对速度其实无法严格定义；不过，在足够短的距离上，这种虚构说法很有效。在这个近似下，可以把我们到星系的“距离”$d$ 取为**瞬时物理距离** $d_P$，即沿当前空间超曲面，从我们到星系所在位置、以厘米等物理单位测量的距离。把 RW 度规写成

$$
\mathrm ds^2=-\mathrm dt^2+a^2(t)R_0^2
\left[\mathrm d\chi^2+S_k^2(\chi)\mathrm d\Omega^2\right],
\tag{8.106}
$$

其中 $S_k(\chi)$ 由（8.33）定义，且 $k\in\{+1,0,-1\}$。采用这种形式，在时刻 $t$ 测得，我们（$\chi=0$）与共动径向坐标为 $\chi$ 的星系之间的瞬时物理距离是

$$
d_P(t)=a(t)R_0\chi,
\tag{8.107}
$$

<!-- source: PDF 359; printed: 346 -->

其中 $\chi$ 保持不变，因为我们假定自己与被观测星系都完全共动。（实际可能并非如此；那时，把所谓“本动速度”产生的修正加进去很容易。）这里给“距离”加引号，是因为一旦离开上述近似，就会出现几种彼此不等价、但都很有用的距离概念；当 $d_P$ 很小时，它们全都一致。此时，观测速度（由红移推断）就是

$$
v=\dot d_P=\dot aR_0\chi=\frac{\dot a}{a}d_P.
\tag{8.108}
$$

在今天求值，变为

$$
\boxed{v=H_0d_P},
\tag{8.109}
$$

这就是著名的 **Hubble 定律**：对于距离不太远的星系，观测到的退行速度与距离成正比。

如果红移不很小，就必须更仔细地思考宇宙学中“距离”的含义。瞬时物理距离是一种方便的构造，但它本身不可观测，因为观测总是涉及过去光锥上的事件，而不是我们当前空间超曲面上的事件。在 Euclidean 空间中，可以用多种方式推断物体距离：例如，把视亮度与内禀光度比较；把视角速度与内禀横向速度比较；或把视角大小与物理尺度比较。对于每一种情形，都可以定义一种距离：如果空间是 Euclidean 的、宇宙也不膨胀，我们就会推断出这个距离。

先从**光度距离** $d_L$ 开始，它定义为满足

$$
d_L^2=\frac{L}{4\pi F},
\tag{8.110}
$$

其中 $L$ 是源的绝对光度，$F$ 是观察者测得的通量（某个探测器单位面积、单位时间接收的能量）。这个定义源自如下事实：在平直空间中，距离为 $d$ 的源，其通量与光度之比就是以源为球心的球面面积的倒数，即 $F/L=1/A(d)=1/(4\pi d^2)$。但在 FRW 宇宙中，通量还会被稀释。光子数守恒告诉我们，源发出的所有光子最终都会穿过一个与发射者相距共动距离 $\chi$ 的球面。不过，还有两种额外效应会稀释通量：单个光子按因子 $(1+z)$ 红移；光子撞到球面的频率也降低，因为发射时间相隔 $\delta t$ 的两个光子，测得的时间间隔将是 $(1+z)\delta t$。因此有

$$
\frac FL=\frac{1}{(1+z)^2A}.
\tag{8.111}
$$

<!-- source: PDF 360; printed: 347 -->

以共动距离 $\chi$ 为半径的球面面积 $A$，可以从（8.106）中 $\mathrm d\Omega^2$ 的系数得到：

$$
A=4\pi R_0^2S_k^2(\chi),
\tag{8.112}
$$

这里令 $a(t)=1$，因为我们在今天观测光子。把这些结果合起来，得到

$$
d_L=(1+z)R_0S_k(\chi).
\tag{8.113}
$$

光度距离 $d_L$ 是有希望测量的量，因为有些天体物理源的绝对光度已知。但 $\chi$ 不可观测，所以必须把它从方程中消去。在一条类光测地线上（为方便起见，取径向测地线），有

$$
0=\mathrm ds^2=-\mathrm dt^2+a^2R_0^2\mathrm d\chi^2,
\tag{8.114}
$$

也就是

$$
\chi=R_0^{-1}\int\frac{\mathrm dt}{a}
=R_0^{-1}\int\frac{\mathrm da}{a^2H(a)},
\tag{8.115}
$$

这里使用了 $H=\dot a/a$。通常利用 $a=1/(1+z)$ 把尺度因子转换为红移，于是

$$
\chi(z)=R_0^{-1}\int_0^z\frac{\mathrm dz'}{H(z')}.
\tag{8.116}
$$

为了求出这个积分中的 Hubble 参数，使用 Friedmann 方程（8.67），并像上一节那样写成

$$
H^2=\frac{8\pi G}{3}\sum_{i(c)}\rho_i.
\tag{8.117}
$$

为了简化，可以再次假定每个密度组分都按幂律演化：

$$
\rho_i(z)=\rho_{i0}a^{-n_i}=\rho_{i0}(1+z)^{n_i}.
\tag{8.118}
$$

于是可写成

$$
H(z)=H_0E(z),
\tag{8.119}
$$

其中

$$
E(z)=\left[\sum_{i(c)}\Omega_{i0}(1+z)^{n_i}\right]^{1/2}.
\tag{8.120}
$$

<!-- source: PDF 361; printed: 348 -->

这里的密度参数 $\Omega_i$ 由（8.74）定义。无论能量源是否按幂律演化，下面涉及 $E(z)$ 的方程都成立；如果不按幂律演化，只需使用 $E(z)=H(z)/H_0$［其中 $H(z)$ 由 Friedmann 方程确定］，而不使用（8.120）。

所以光度距离为

$$
d_L(z)=(1+z)R_0S_k\!\left[
R_0^{-1}H_0^{-1}\int\frac{\mathrm dz'}{E(z')}
\right].
\tag{8.121}
$$

这里的积分上下限沿用（8.116），即从 $0$ 到 $z$。注意，当 $k=0$ 时，$R_0$ 会消去；这是好事，因为这时它完全是任意参数。即使 $R_0$ 并非任意，人们也更常用
$\Omega_{c0}=-k/(R_0^2H_0^2)$ 来表述；这个量既可通过测定空间曲率直接测量，也可先测量密度参数，再利用 $\Omega_{c0}=1-\Omega_0$ 得到。用这个参数，有

$$
R_0=H_0^{-1}\sqrt{-k\Omega_{c0}}
=\frac{H_0^{-1}}{\sqrt{|\Omega_{c0}|}}.
\tag{8.122}
$$

> **公式核对说明（8.122）**：扫描版根号内确实印作 $-k\Omega_{c0}$，这里据实转写；但它与同式第二个等号及前文 $\Omega_{c0}=-k/(R_0^2H_0^2)$ 不相容。由该定义推导出的第一项应为 $H_0^{-1}\sqrt{-k/\Omega_{c0}}$。作者官方勘误没有列出这一项。

因此，用可测宇宙学参数表示的光度距离为

$$
\boxed{
d_L(z)=(1+z)\frac{H_0^{-1}}{\sqrt{|\Omega_{c0}|}}
S_k\!\left[
\sqrt{|\Omega_{c0}|}\int\frac{\mathrm dz'}{E(z')}
\right]
}.
\tag{8.123}
$$

虽然看起来不太灵便，这个方程在宇宙学中却至关重要。给定可观测量 $H_0$ 与 $\Omega_{i0}$，可以直接计算任意红移 $z$ 处天体的光度距离；同样，也可以测量一系列红移处天体的 $d_L(z)$，再从这些信息中提取 $H_0$ 和／或 $\Omega_{i0}$。

除光度距离外，还有另外两种相关的距离度量。光度距离是在假定空间平直时，根据源的内禀光度与观测光度推断出的距离；类似地，**自行距离** $d_M$ 是根据源的内禀运动与观测运动推断出的距离。它定义为

$$
d_M=\frac{u}{\dot\theta},
\tag{8.124}
$$

其中 $u$ 是固有横向速度（例如可用 $\mathrm{km/s}$ 测量），$\dot\theta$ 是观测角速度。另一方面，**角直径距离**是根据源的内禀大小与观测大小推断出的距离；它定义为

$$
d_A=\frac{R}{\theta},
\tag{8.125}
$$

<!-- source: PDF 362; printed: 349 -->

其中 $R$ 是天体的固有大小，$\theta$ 是观测到的角直径。在这两种情形中，都可以推导出与（8.123）类似的公式。幸运的是，各种距离度量中那些对宇宙学参数不太灵便的依赖关系彼此相同，最后只剩下对红移的简单依赖：

$$
d_L=(1+z)d_M=(1+z)^2d_A,
\tag{8.126}
$$

建议你自行验证。因此，只要测出其中一种距离，就很容易转换到其他距离；也可以独立测量不同距离，再利用（8.126）检验 RW 框架的一致性。

既然正在讨论距离，不妨也考察从现在到红移为 $z$ 的天体发出其光线时，二者之间经过了多少时间。如果宇宙今天的年龄是 $t_0$，光子发射时的宇宙年龄是 $t_*$，那么**回望时间**为

$$
\begin{aligned}
t_0-t_*&=\int_{t_*}^{t_0}\mathrm dt\\
&=\int_{a_*}^{1}\frac{\mathrm da}{aH(a)}\\
&=H_0^{-1}\int_0^{z_*}\frac{\mathrm dz'}{(1+z')E(z')}.
\end{aligned}
\tag{8.127}
$$

例如，考虑平直（$k=0$）、物质主导（$\rho=\rho_{\mathrm M}=\rho_{\mathrm M0}a^{-3}$）的宇宙。这时

$$
E(z)=(1+z)^{3/2},
\tag{8.128}
$$

所以

$$
\begin{aligned}
t_0-t_*&=H_0^{-1}\int_0^{z_*}\frac{\mathrm dz'}{(1+z')^{5/2}}\\
&=\frac23H_0^{-1}\left[1-(1+z_*)^{-3/2}\right].
\end{aligned}
\tag{8.129}
$$

令 $t_*\to0$（$z_*\to\infty$），便得到物质主导宇宙的总年龄：

$$
t_0(\mathrm{MD})=\frac23H_0^{-1}.
\tag{8.130}
$$

对于并非完全由物质主导的宇宙，因子 $2/3$ 不会完全正确；不过，对于合理的宇宙学参数值，通常有 $t_0\sim H_0^{-1}$。

## 8.6 引力透镜

第 7 章介绍了引力透镜的概念：Newtonian 引力场使光发生偏折并产生时间延迟。它除了为广义相对论在太阳系中的检验提供途径，

<!-- source: PDF 363; printed: 350 -->

还出现在众多天体物理情境中，并且已经成为现代宇宙学不可或缺的一部分。[^8-2]

宇宙学透镜与先前讨论的情形有两个重要区别：背景由 Robertson–Walker 度规取代 Minkowski 度规；透镜本身也往往比简单点质量复杂。图 8.5 展示了典型的透镜几何。在整个讨论中，我们都假定透镜是“薄”的——其空间尺度远小于源、透镜与观察者之间的距离。此时，可以有意义地谈论到透镜的唯一距离 $d_L$，以及透镜与源之间的距离 $d_{LS}$。

我们用图像不同组成部分之间的一组角度，来描述天空中一幅可能很复杂的像。可以把这些角度看成天空上的二维向量。透镜的作用是扭曲不存在任何偏折时本应观测到的角度——例如源与透镜之间的角度 $\vec\beta$——使其成为由一组角度 $\vec\theta$ 刻画的新像。全程假定这些角都很小。这一映射由**约化透镜角** $\vec\alpha=\vec\theta-\vec\beta$ 描述。根据图 8.5 所示的几何，它与实际偏折角 $\hat{\vec\alpha}$ 的关系为

$$
\vec\alpha=\frac{d_{LS}}{d_S}\hat{\vec\alpha}.
\tag{8.131}
$$

> **图 8.5　引力透镜的几何。** 其关系浓缩在透镜方程（8.132）中。透镜把平直 Minkowski 背景中本应观测到的角 $\vec\beta$ 扭曲为角 $\vec\theta$。图中还标出了实际偏折角 $\hat{\vec\alpha}$、约化透镜角 $\vec\alpha$，以及距离 $d_L$、$d_{LS}$ 和 $d_S$。

[^8-2]: 本节讨论所借鉴的一篇优秀综述见 R. Narayan 与 M. Bartelmann，*Lectures on Gravitational Lensing*，第 13 届 Jerusalem Winter School in Theoretical Physics，<https://arxiv.org/astro-ph/9606001>。

<!-- source: PDF 364; printed: 351 -->

因此得到**透镜方程**

$$
\boxed{
\vec\beta=\vec\theta-\frac{d_{LS}}{d_S}\hat{\vec\alpha}
}.
\tag{8.132}
$$

透镜方程只是描述扰动时空中的光线追迹。

当然，必须仔细思考图中所示“距离”$d_i$ 的意义。透镜作用发生在膨胀宇宙中，而宇宙还可能具有空间曲率。只要把距离 $d_i$ 定义为使透镜方程所描述的几何关系成立，透镜方程依然有效。换言之，给定角度与横向物理大小，它们是在静态 Euclidean 空间背景中会推断出的距离。这恰好就是角直径距离（8.125）的定义。因此，本节所有距离都取为角直径距离。注意，角直径距离不一定可加，所以 $d_S\neq d_L+d_{LS}$。

作为简单例子，考虑点质量透镜。第 7 章研究 Newtonian 极限时发现，穿过引力势 $\Phi$ 的光子，其偏折角为

$$
\hat{\vec\alpha}=2\int\vec\nabla_\perp\Phi\,\mathrm ds,
\tag{8.133}
$$

对于质量为 $M$、冲击参数为 $b$ 的点质量，这变为

$$
\hat\alpha=\frac{4GM}{b}.
\tag{8.134}
$$

冲击参数可以表示为 $b=d_L\theta$。透镜方程（8.132）变为

$$
\beta=\theta-\frac{d_{LS}}{d_Sd_L}\frac{4GM}{\theta}.
\tag{8.135}
$$

考察最简单的情况很有启发性：源与透镜共线（$\beta=0$）。此时，源会被成像为环绕透镜的 **Einstein 环**，其角间隔由 **Einstein 角**给出：

$$
\theta_{\mathrm E}=\sqrt{\frac{4GMd_{LS}}{d_Ld_S}}.
\tag{8.136}
$$

即使在更复杂的构型中，Einstein 角也为透镜作用设定了一个特征尺度。还可以定义相应的距离尺度，即 **Einstein 半径**：

$$
R_{\mathrm E}=\sqrt{\frac{4GMd_Ld_{LS}}{d_S}}.
\tag{8.137}
$$

<!-- source: PDF 365; printed: 352 -->

转换为厘米或其他物理单位时，不要忘记我们的所有方程都令 $c=1$。为了感受典型天体物理情形中的透镜效应大小，可以考虑两种常见现象：银河系内质量约为太阳质量的天体造成的“微透镜”，以及星系或星系团造成的宇宙学透镜。前一种情况下，Einstein 角是毫角秒量级；后一种情况下，则是角秒量级：

$$
\begin{aligned}
\theta_{\mathrm E}
&=0.9\sqrt{\left(\frac{M}{M_\odot}\right)
\left(\frac{10\ \mathrm{kpc}}{D}\right)}\ \mathrm{milliarcsecs}\\
&=0.9\sqrt{\left(\frac{M}{10^{11}M_\odot}\right)
\left(\frac{\mathrm{Gpc}}{D}\right)}\ \mathrm{arcsecs}.
\end{aligned}
\tag{8.138}
$$

这里的有效距离 $D=d_Ld_S/d_{LS}$。

暂时继续考虑点质量透镜。多数时候，我们不会幸运到让源与透镜完美对齐，尽管已经观测到许多壮观的 Einstein 环实例。这时可解（8.135），得到两个像角：

$$
\theta_\pm=\frac12\left(\beta\pm\sqrt{\beta^2+4\theta_{\mathrm E}^2}\right).
\tag{8.139}
$$

$\theta_+$ 处的像总在 Einstein 角之外，$\theta_-$ 处的像则在其内。事实上，这个公式有些误导，因为像的数目总是奇数；对点质量透镜，第三个像与透镜本身处在同一位置。

现在考虑比点质量更一般的透镜。由（8.133）可知，偏折角由 Newtonian 引力势给出。沿从观察者出发、指向过去的测地路径积分，可定义**透镜势**：

$$
\psi(\vec\theta)=2\frac{d_{LS}}{d_Ld_S}
\int\Phi(d_L\vec\theta,s)\,\mathrm ds.
\tag{8.140}
$$

用透镜势表示，只需取梯度便能直接导出约化透镜角：

$$
\begin{aligned}
\vec\alpha&=\vec\nabla_\theta\psi\\
&=2\frac{d_{LS}}{d_S}\int\vec\nabla_\perp\Phi\,\mathrm ds.
\end{aligned}
\tag{8.141}
$$

注意，角梯度 $\vec\nabla_\theta$ 与 $\vec\nabla_\perp$——对透镜所在位置处横向距离所取的梯度——相差因子 $d_L$。薄透镜近似允许我们把积分压缩为在透镜位置求值的量。还可以对透镜势取二维 Laplacian，从而得到**会聚度** $\kappa$：

<!-- source: PDF 366; printed: 353 -->

$$
\begin{aligned}
\kappa(\vec\theta)&=\frac12\nabla_\theta^2\psi\\
&=\frac{d_Ld_{LS}}{d_S}\int\nabla^2\Phi\,\mathrm ds.
\end{aligned}
\tag{8.142}
$$

会聚度可以看作积分质量密度的一种度量。可以反解上面的表达式，把透镜势和约化偏折角都用会聚度写成

$$
\psi(\vec\theta)=\frac1\pi\int
\kappa(\vec\theta')\ln|\vec\theta-\vec\theta'|\,\mathrm d^2\theta',
\tag{8.143}
$$

以及

$$
\vec\alpha(\vec\theta)=\frac1\pi\int
\kappa(\vec\theta')
\frac{\vec\theta-\vec\theta'}{|\vec\theta-\vec\theta'|}
\,\mathrm d^2\theta'.
\tag{8.144}
$$

> **公式核对说明（8.144）**：分母的一次幂按扫描版保留。直接对（8.143）的 $\ln|\vec\theta-\vec\theta'|$ 取二维梯度，通常会得到分母 $|\vec\theta-\vec\theta'|^2$；作者官方勘误没有列出这一项。

检验这些方程时，请记住，向量只在两个横向维度中定义。

会聚度描述引力透镜对光线的聚焦。这种聚焦使源看起来更大，就像放大镜一样。根据 Liouville 关于源所发光子相空间密度守恒的定理，源的表面亮度在透镜作用下保持不变；大小增加因而会使总亮度放大。与此同时，光线穿过透镜时的扭转还会产生畸变，使像的形状发生剪切。为了同时描述这两种现象，考虑透镜映射导数构成的 $2\times2$ 矩阵：

$$
A_{ij}\equiv\frac{\partial\beta^i}{\partial\theta^j}.
\tag{8.145}
$$

注意，这些指标定义在二维 Euclidean 平面中，所以上标与下标并无实质区别。由于 $\vec\beta=\vec\theta-\vec\alpha$，有

$$
\begin{aligned}
A_{ij}&=\delta_{ij}-\frac{\partial\alpha^i}{\partial\theta^j}\\
&=\delta_{ij}-\psi_{ij},
\end{aligned}
\tag{8.146}
$$

这里引入记号

$$
\psi_{ij}\equiv\frac{\partial^2\psi}{\partial\theta^i\partial\theta^j}.
\tag{8.147}
$$

矩阵 $A$ 编码了透镜映射的局域性质。它的逆矩阵称为**放大张量**：

<!-- source: PDF 367; printed: 354 -->

$$
M=\frac{\partial\vec\theta}{\partial\vec\beta}=A^{-1}.
\tag{8.148}
$$

它为何得到这个名字？透镜把由 $\vec\beta$ 描述的一个面积元扭曲成由 $\vec\theta$ 描述的面积元；面积变化由这一映射的 Jacobian 描述，也就是 $M$ 的行列式。该行列式定义为**放大率** $\mu$：

$$
\mu=|M|=\frac1{|A|}.
\tag{8.149}
$$

$\mu$ 的绝对值告诉我们源亮度的实际变化；$\mu$ 可以为负，这意味着像的宇称发生了翻转。我们会谈论“放大”，是因为只有当透镜与源在天空中彼此接近时，透镜作用才容易被察觉；这时聚焦效应只会增大视亮度。天空位置上离源很远的透镜会造成极其微小、永远无法察觉的光度降低。（如果存在多个像，所有像的亮度之和会超过未扭曲源的亮度。）

$A$ 的分量可以分解为会聚与剪切的效应。对于会聚，由 $\kappa=\frac12\nabla_\theta^2\psi$ 得

$$
\kappa=\frac12(\psi_{11}+\psi_{22}).
\tag{8.150}
$$

另一方面，**剪切**会扭曲源的形状。如果一个起初为圆形的源被扭曲成椭率为 $\gamma$、位置角为 $\phi$ 的椭圆，就把剪切的两个分量定义为

$$
\begin{aligned}
\gamma_1&=\gamma\cos(2\phi),\\
\gamma_2&=\gamma\sin(2\phi),
\end{aligned}
\tag{8.151}
$$

从而总剪切为 $\gamma=\sqrt{\gamma_1^2+\gamma_2^2}$。用透镜势表示，各分量为

$$
\begin{aligned}
\gamma_1&=\frac12(\psi_{11}-\psi_{22}),\\
\gamma_2&=\psi_{12}=\psi_{21}.
\end{aligned}
\tag{8.152}
$$

反解这些关系，得到 $A$ 的分量：

$$
A=
\begin{pmatrix}
1-\kappa-\gamma_1&-\gamma_2\\
-\gamma_2&1-\kappa+\gamma_1
\end{pmatrix}.
\tag{8.153}
$$

因此，可以把放大率用会聚度与剪切表示为

$$
\mu=\frac{1}{(1-\kappa)^2-\gamma^2}.
\tag{8.154}
$$

<!-- source: PDF 368; printed: 355 -->

透镜作用的这些特征，在观测宇宙学中正变得越来越重要。一个显然值得关注的情形是所谓的“强透镜”：源位于透镜的 Einstein 半径之内，因而可能产生多个像。通过观测同一个源的几个像，可以推断透镜质量分布的性质（例如寻找暗物质）；还可以利用不同路径上的时间延迟测量 Hubble 常数，并利用透镜现象出现的统计频率约束其他宇宙学参数。不过，透镜作用不必很强也能产生重要影响。“弱透镜”发生在源与透镜相距超过一个 Einstein 半径时，通常只产生微小的放大与剪切；如果事先不知道源的性质，就无法探测这些效应。不过，可以从统计上探测剪切效应：考察成千上万个星系的形状，并假定它们的内禀取向是随机的。弱透镜造成的剪切会在这些形状中产生相关畸变，由此能够揭示观察者与遥远源之间物质分布的大量信息。

## 8.7 我们的宇宙

在讨论 FRW 宇宙学的行为时，我们不断提到与我们所处宇宙相应的宇宙学参数实际值。现在来更系统地讨论今天看到的宇宙，并作一种可信的外推，回溯到早期。由于篇幅有限，也由于宇宙学仍是一个活跃研究领域，我们的讨论必然很简短；关于当前观点的最新说明，请查阅近期综述文章。

我们对膨胀率的许多直接测定，都依靠把光度距离公式（8.123）应用到某类假定内禀光度已知的天体上；这种天体称为**标准烛光**。（有时也测量假定内禀大小已知的天体的角直径，这类天体称为标准尺。）例如，Hubble 常数是利用多种标准烛光测出的；不同方法的共识收敛到上面提到的数值 $H_0=70\pm10\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$。高红移处偏离线性 Hubble 定律（8.109）的程度，可以提供关于密度参数 $\Omega_{i0}$ 的信息，但前提是我们拥有非常明亮、且内禀光度已准确知道的天体。Ia 型超新星提供了这种天体。人们认为，Ia 型超新星是白矮星吸积了足够多质量、超过 Chandrasekhar 极限后发生的爆炸。由于 Chandrasekhar 极限接近普适值，相应爆炸的亮度基本相同（而且，通过跟踪亮度随时间的演化，还可以校正部分内禀差异）。正是对红移 $z>0.3$ 的 Ia 型超新星的测量，首次为非零宇宙学常数提供了直接证据；这些观测意味着 $\Omega_\Lambda$ 实际上大于 $\Omega_{\mathrm M}$。回忆一下，物质无压强，$p_{\mathrm M}=0$；真空能则对应负压强，$p_\Lambda=-\rho_\Lambda$。代入第二 Friedmann 方程（8.68），可知同时含有物质与 $\Lambda$ 的

<!-- source: PDF 369; printed: 356 -->

宇宙满足

$$
\frac{\ddot a}{a}=-\frac{4\pi G}{3}
\left(\rho_{\mathrm M}-2\rho_\Lambda\right).
\tag{8.155}
$$

因此，如果 $\rho_\Lambda$ 相对于 $\rho_{\mathrm M}$ 足够大（超新星观测正是这样指示的），就可以有 $\ddot a>0$，即一个加速宇宙，含义与第 8.4 节所述相同。

物质密度本身也用多种方法测量；这些方法往往先从成团物质的引力效应中测定密度 $\rho_{\mathrm M}$，再外推到更大尺度。由于 $\rho_{\mathrm M}=(3H^2/8\pi G)\Omega_{\mathrm M}$，这样得到的限制常用 $\Omega_{\mathrm M}h^2$ 表示，其中 $h$ 由（8.70）定义。书写本书时，$H_0$ 的不确定性似乎已经足够小，可以相当放心地取 $h^2\approx0.5$；下文都这样做。大多数当时的方法都与下述结果一致：

$$
\Omega_{\mathrm M0}=0.3\pm0.1.
\tag{8.156}
$$

在宇宙学常数获得良好证据以前，这么低的物质密度有时被理解为空间具有负曲率，即 $\kappa<0$ 的迹象。

除了物质与宇宙学常数，宇宙中还有辐射。普通光子是辐射密度最明显的组分，不过任何相对论粒子都会作出贡献。对光子而言，大部分能量密度位于宇宙微波背景中，那是大爆炸遗留下来的辐射。除光子以外，唯一明显的辐射组分候选者是中微子。我们预期遗迹背景中微子的数密度与光子相当；光子密度很可能稍大一些，因为当中微子数目固定以后，光子仍可以继续产生。不过，如果中微子质量足够大（大于约 $10^{-4}\ \mathrm{eV}$），它们今天就已经变成非相对论性的，会贡献于物质而非辐射。当时关于中微子质量的观点表明，这大概正是实际情况，但还不完全清楚。此外，也可能存在尚未探测到的无质量粒子，超出我们已经知道的种类（不过，它们不能太丰富，否则会抑制大尺度结构形成）。总的看来，总辐射密度很可能与光子密度处在同一量级；在这种情况下有

$$
\Omega_{\mathrm R0}\sim10^{-4}.
\tag{8.157}
$$

如前所述，辐射密度低于物质密度并不令人意外，因为前者在宇宙膨胀时衰减得更快。辐射密度按 $a^{-4}$ 变化，物质密度按 $a^{-3}$ 变化，因此物质—辐射密度相等发生在红移

$$
z_{\mathrm{eq}}\approx\frac{\Omega_{\mathrm M0}}{\Omega_{\mathrm R0}}
\sim3\times10^3.
\tag{8.158}
$$

<!-- source: PDF 370; printed: 357 -->

宇宙微波背景的温度各向异性，为宇宙学参数提供了另一个关键约束。其平均温度为 $T_{\mathrm{CMB}}=2.74\ \mathrm K$；1992 年，COBE 卫星发现不同位置之间存在 $\Delta T/T\sim10^{-5}$ 水平的起伏。这些各向异性来自多种源，包括：复合时期光子爬出势阱造成的引力红移／蓝移（Sachs–Wolfe 效应，在大角尺度上占主导）；末次散射面上的内禀温度起伏（在小角尺度上占主导）；以及等离子体运动产生的 Doppler 效应。描述 CMB 各向异性演化的物理超出了本书范围。一幅覆盖全天的 CMB 温度图显然包含大量信息，但没有理论会预测任意给定点处的温度究竟应是多少。现代理论通常预测的是任意给定角尺度上各向异性量的期望值。因此，把各向异性场分解为球谐函数：

$$
\frac{\Delta T}{T}(\theta,\phi)=
\sum_{lm}a_{lm}Y_{lm}(\theta,\phi).
\tag{8.159}
$$

$|a_{lm}|^2$ 的期望值很可能与 $m$ 无关；否则，各向异性的统计特征会随天空位置而改变（当然，我们仍应保持开放态度）。所以，需要测量的相关参数是

$$
C_l=\left\langle|a_{lm}|^2\right\rangle.
\tag{8.160}
$$

对任意固定的 $l$，$m$ 有 $2l+1$ 个可能值，从 $-l$ 到 $l$。除了最低的几个 $l$ 以外，都有足够多对 $a_{lm}$ 的独立测量，可以准确确定其期望值。非常小的 $l$ 上无法约去的不确定性称为**宇宙方差**。

许多实验已经测量了 $C_l$，即所谓 CMB 功率谱；在随后许多年里，改进这些测量都很可能是一项重要任务。（除了温度各向异性，CMB 的偏振还包含大量信息，也是实验投入巨大努力的另一个目标。）为了把这些观测转化为有用信息，需要一个具体理论，把 CMB 功率谱预测成宇宙学参数的函数。有两种主要可能性，尽管其中一种远比另一种更受重视：要么密度扰动在极早期就被印刻到所有尺度上，甚至包括物理波长 $\lambda$ 远大于 Hubble 半径 $H^{-1}$ 的模；要么局域动力学机制在所有历元持续充当各向异性的源。后一种可能性基本已被 CMB 数据排除：如果各向异性持续产生，我们预期 $C_l$ 谱相对平滑、缺乏特征；观测却显示出显著结构。因此，更常见的设想是存在原初扰动源，例如下一节要讨论的暴胀。暴胀扰动是绝热的——物质密度中的扰动

<!-- source: PDF 371; printed: 358 -->

与辐射密度中的扰动相关——并且在所有尺度上幅度近似相等。有了这一输入，就能把 $C_l$ 确定地预测为所有宇宙学参数的函数。实验迄今给出的最重要约束，或许是宇宙在空间上平直或接近平直：$|\Omega_{c0}|<0.1$。结合物质密度测量 $\Omega_{\mathrm M}\approx0.3$，可得真空能密度参数应为

$$
\Omega_{\Lambda0}=0.7\pm0.1.
\tag{8.161}
$$

这与上面描述的 Ia 型超新星结果很好地一致；这里所述的一致图景就是图 8.4 所示的图景。用 $H_0=70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$ 把密度参数转换为物理能量密度，得到

$$
\rho_{\mathrm{vac}}\approx10^{-8}\ \mathrm{erg/cm^3},
\tag{8.162}
$$

正如第 4.5 节讨论真空能时所提到的。

还有一个非凡特征，使我们关于当今宇宙的示意图景得以完整。已经提到，宇宙大约 $30\%$ 的能量密度由物质组成。不过，对宇宙学家而言，“物质”是任意一组非相对论粒子；从引力影响推断出的物质，不一定是我们从地球经验中熟悉的普通物质。所谓**普通物质**，指由原子及其组分（质子、中子与电子）构成的一切；它包括宇宙中的全部恒星、行星、气体与尘埃，无论能否直接看见。这类物质有时称为**重子物质**；这里的重子包括质子、中子和相关粒子，也就是携带一种称为重子数的守恒量子数的强相互作用粒子。当然，从概念上说，电子是普通物质的重要部分；但就质量而言，与质子和中子相比，它们可以忽略：

$$
\begin{aligned}
m_p&=0.938\ \mathrm{GeV},\\
m_n&=0.940\ \mathrm{GeV},\\
m_e&=0.511\times10^{-3}\ \mathrm{GeV}.
\end{aligned}
\tag{8.163}
$$

换言之，普通物质的质量压倒性地来自重子。

事实证明，普通重子物质远不足以解释观测到的密度 $\Omega_{\mathrm M}\approx0.3$。当时对重子密度的最佳估计为

$$
\Omega_b=0.04\pm0.02,
\tag{8.164}
$$

而按大多数标准看，这些误差棒都很保守。这一测定来自多种方法：直接计数重子（精度最低的方法）、检验与上述 CMB 功率谱的一致性，以及检验与下文所述大爆炸核合成对轻元素丰度的预测是否一致。因此，大部分物质密度必定

<!-- source: PDF 372; printed: 359 -->

以**非重子暗物质**的形式存在，下文简称为“暗物质”。（重子也可以是暗的，但越来越常见的做法是把“暗物质”一词专用于非重子组分。）粒子物理标准模型中几乎每一种已知粒子，都已被排除作为这种暗物质的候选者。幸运的是，标准模型之外还有若干可信候选者，包括中性微子（超对称理论预言的额外稳定粒子中最轻者，质量 $\geq100\ \mathrm{GeV}$）和轴子（为解释强相互作用中的 CP 守恒而引入的假想 Peccei–Quinn 对称性自发破缺后产生的轻赝标量粒子，质量约 $10^{-4}\ \mathrm{eV}$）。

关于暗物质，我们为数不多的认识之一是，它必须是冷的：它今天是非相对论性的，而且很早以前就必须已经如此。如果暗物质是热的，就会自由流出过密区，抑制星系形成。我们对冷暗物质（cold dark matter，CDM）的另一点认识是，它与普通物质的相互作用应当非常弱，这才能解释为何至今逃过探测。尽管如此，周围的暗物质粒子偶尔可能会与地面实验室中精心屏蔽的探测器发生散射；通过寻找这类散射效应来直接探测暗物质，会是未来多年另一项重要的实验工作。

$\Omega_{\mathrm M}=0.3$、$\Omega_\Lambda=0.7$ 的图景似乎能符合种类繁多、令人印象深刻的观测数据。图景中最令人惊讶的部分是宇宙学常数。第 4 章提到，对真空能作朴素估计，会得到比测量值大许多个数量级的结果。实际上，这里有三个相互关联的谜题：宇宙学常数为什么比预期小这么多？构成当前宇宙 $70\%$ 的那一小份非零能量源自何处？为什么真空能当前值与物质密度处在同一量级？最后一个问题尤其严峻，因为真空能与物质密度彼此之间演化得很快：

$$
\frac{\Omega_\Lambda}{\Omega_{\mathrm M}}\propto a^3.
\tag{8.165}
$$

如果 $\Omega_{\mathrm M}$ 与 $\Omega_\Lambda$ 今天彼此相当，那么过去的真空能小到无法探测，而未来的物质密度将可以忽略。这个“巧合问题”迄今完全是个谜。一种提议的解法涉及“人择原理”。如果宇宙的许多不同部分——在空间中，甚至在波函数的不同分支中——具有非常不同的宇宙学常数值，那么智能生命最可能出现在其绝对值不太大的地方：很大的正 $\Lambda$ 会在星系形成前就把粒子拉开；很大的负 $\Lambda$ 则会使宇宙在生命有机会演化前便再次坍缩。用人择原理解释观测到的真空能，可以很好地拟合数据；不过，有些人觉得，为了解释这一个量而诉诸如此复杂的方案，多少有些铺张。

<!-- source: PDF 373; printed: 360 -->

另一种可能性或许与巧合问题有关，也或许无关：我们探测到的并非非零宇宙学常数，而是一个紧密模仿真空能性质的动力学组分。对这种可能性的思考，使宇宙学家创造出**暗能量**一词，用来描述已经探测到的那个东西，无论它具有动力学，还是最终证明它终究就是宇宙学常数。我们对暗能量的认识是：它在空间中分布得比较平滑（否则会像暗物质一样，通过局域引力场被探测到），并且随时间演化得很慢（否则不会像超新星数据所表明的那样使宇宙加速）。缓慢滚动的标量场为动力学暗能量源提供了一个简单候选。考虑具有通常作用量的场 $\phi$：

$$
S=\int\mathrm d^4x\sqrt{-g}
\left[-\frac12g^{\mu\nu}\nabla_\mu\phi\nabla_\nu\phi-V(\phi)\right],
\tag{8.166}
$$

它的能量-动量张量为

$$
T_{\mu\nu}=\nabla_\mu\phi\nabla_\nu\phi+
\left[\frac12g^{\rho\sigma}\nabla_\rho\phi\nabla_\sigma\phi-V(\phi)\right]g_{\mu\nu},
\tag{8.167}
$$

> **公式核对说明（8.167）**：方括号内动能项前的正号按扫描版保留。按（8.166）的作用量作度规变分，通常得到 $T_{\mu\nu}=\nabla_\mu\phi\nabla_\nu\phi-[\tfrac12g^{\rho\sigma}\nabla_\rho\phi\nabla_\sigma\phi+V(\phi)]g_{\mu\nu}$；这一形式也与后面的标量场能量密度相容。作者官方勘误没有列出这一项。

运动方程为

$$
\Box\phi-\frac{\mathrm dV}{\mathrm d\phi}=0.
\tag{8.168}
$$

假定该场在整个空间中完全均匀（$\partial_i\phi=0$）。利用 Christoffel 符号（8.44），可以把 d’Alembert 算子写成时间导数与 Hubble 常数的形式，从而将（8.168）写成

$$
\ddot\phi+3H\dot\phi+\frac{\mathrm dV}{\mathrm d\phi}=0.
\tag{8.169}
$$

可以看到，Hubble 参数起着摩擦项的作用：场倾向于沿势向下滚动，但 $H$ 太大时，运动会受到阻尼。因此，势足够平缓的标量场（如图 8.6 所示）会滚动得非常慢，使动能远小于势能 $V(\phi)$。此时能量-动量张量为

$$
T_{\mu\nu}\approx-V(\phi)g_{\mu\nu},
\tag{8.170}
$$

其中 $\phi\approx\text{常数}$。与（4.96）比较可见，标量场势正在模仿真空能。作为简单例子，考虑二次势 $V(\phi)=\frac12m^2\phi^2$。这时（8.169）描述阻尼谐振子；若 $H>m$，就会发生过阻尼。但用粒子物理单位表示，今天的 Hubble 常数为 $H_0\approx10^{-33}\ \mathrm{eV}$，所以这个标量场的质量必须小得惊人，与（8.163）中熟悉的基本粒子质量相去甚远。这看起来是一种不自然的精细调节。尽管如此，动力学暗能量模型

> **图 8.6　缓慢滚动标量场的势能。** 横轴为 $\phi$，纵轴为 $V(\phi)$；曲线在场所在位置附近非常平缓。

<!-- source: PDF 374; printed: 361 -->

仍在被积极探索，部分希望是它们也许能以某种方式解决巧合问题。

有了对当代状况的这幅图景，就可以设想早期宇宙必须是什么样子，才产生我们今天看到的一切。为了形成物理直觉，标记所考虑时代时，用温度往往比用红移或大爆炸以来的时间更有帮助。今天的温度是

$$
T_0=2.74\ \mathrm K=2.4\times10^{-4}\ \mathrm{eV}.
\tag{8.171}
$$

当然，这里的“温度”指宇宙微波背景的视黑体温度。事实上，自复合以来 CMB 就没有处于热平衡，所以不应过分从字面上理解这个概念。在绝热膨胀下，每个相对论粒子都会红移，温度按 $T\propto a^{-1}$ 降低。不过，早期宇宙在某些特定时刻会发生非绝热相变；在这类情况下，温度并不会真正升高，只会下降得更缓慢。为了帮助联系温度、密度与尺度因子，引入两种不同的**相对论性自由度有效数目**度量：$g_*$ 与 $g_{*S}$（$S$ 代表熵）。考虑一组玻色子与费米子物种，每一种都有自己的有效温度 $T_i$ 与自旋态数目 $g_i$。例如，无质量光子有两个自旋态，所以 $g_\gamma=2$；有质量的自旋 $1/2$ 费米子也有两个自旋态，所以 $g_{e^-}=g_{e^+}=2$。两种相对论性自由度有效数目满足

$$
g_*=\sum_{\text{玻色子}}g_i\left(\frac{T_i}{T}\right)^4
+\frac78\sum_{\text{费米子}}g_i\left(\frac{T_i}{T}\right)^4,
\tag{8.172}
$$

以及

$$
g_{*S}=\sum_{\text{玻色子}}g_i\left(\frac{T_i}{T}\right)^3
+\frac78\sum_{\text{费米子}}g_i\left(\frac{T_i}{T}\right)^3.
\tag{8.173}
$$

神秘的 $7/8$ 因子来自计算平衡分布函数时 Bose 统计与 Fermi 统计之间的差异。任何处于热平衡的物种，其温度 $T_i$ 都等于背景温度 $T$；但也可能有已经退耦、温度较低的物种，它们对相对论性自由度有效数目的贡献较小。之所以需要定义两种不同度量，是因为它们扮演不同角色：第一种通过

$$
\rho_{\mathrm R}=\frac{\pi^2}{30}g_*T^4
\tag{8.174}
$$

把温度与相对论性物种中的能量密度联系起来；第二种则把温度与尺度因子联系起来：

$$
T\propto g_{*S}^{-1/3}a^{-1}.
\tag{8.175}
$$

<!-- source: PDF 375; printed: 362 -->

事实上，只要相对论性自由度来自粒子物理标准模型，$g_*$ 与 $g_{*S}$ 预期就近似相等。一个非常粗略的指南是

$$
g_*\approx g_{*S}\sim
\begin{cases}
100,&T>300\ \mathrm{MeV},\\
10,&300\ \mathrm{MeV}>T>1\ \mathrm{MeV},\\
3,&T<1\ \mathrm{MeV}.
\end{cases}
\tag{8.176}
$$

马上会讨论，改变相对论性自由度有效数目的事件，是 $300\ \mathrm{MeV}$ 处的 QCD 相变，以及 $1\ \mathrm{MeV}$ 处电子／正电子对的湮灭。

有了这些背景，就来考察宇宙从早期一直到今天的演化。首先设想一个 Robertson–Walker 度规，其中物质场在 $1\ \mathrm{TeV}=1000\ \mathrm{GeV}$ 的温度下处于热平衡。高温等离子体是基本粒子——夸克、轻子、规范玻色子与 Higgs 玻色子——的复杂混合物。能量密度的主要形式是相对论粒子，所以早期宇宙由辐射主导。它也非常接近平直，因为 Friedmann 方程中的曲率项比物质与辐射密度演化得更慢。因此，Friedmann 方程为

$$
\begin{aligned}
H^2&=\frac{8\pi G}{3}\rho_{\mathrm R}\\
&\approx0.1g_*\frac{T^4}{\bar m_{\mathrm P}^{2}},
\end{aligned}
\tag{8.177}
$$

其中约化 Planck 标度为 $\bar m_{\mathrm P}=(8\pi G)^{-1/2}\approx10^{18}\ \mathrm{GeV}$。如果辐射主导阶段一直延伸到非常早的时刻，宇宙年龄就近似为 $t\sim H^{-1}$，即

$$
t\sim\frac{\bar m_{\mathrm P}}{T^2}.
\tag{8.178}
$$

用常规单位表示，这变为

$$
t\sim10^{-6}\left(\frac{\mathrm{GeV}}{T}\right)^2\ \mathrm{sec}.
\tag{8.179}
$$

当时的粒子加速器实验已经准确描绘了最高大约 $100\ \mathrm{GeV}$ 的物理，因此再多外推一个数量级仍属合理范围。在更高温度下，我们对会发生什么把握较小；$1\ \mathrm{TeV}$ 与 Planck 标度之间也许没有特别有趣的事情，也可能充满各种惊喜。当然，即使标准模型物理已得到充分理解，宇宙学也可能在更低温度带来惊喜；本节描述的是一个保守情景，但始终值得保持开放态度。

<!-- source: PDF 376; printed: 363 -->

标准模型的一个关键特征，是电弱部分的对称性发生自发破缺。在宇宙学中，这一对称破缺发生于电弱相变，温度 $T\sim200\ \mathrm{GeV}$。高于这个温度时，对称性未破缺，所以基本费米子（夸克和轻子）与弱相互作用规范玻色子都没有质量；低于这个温度时，则得到低能实验所熟悉的质量谱。电弱相变预期不会在晚期宇宙留下任何可辨识影响；一种可能的例外是下文要讨论的重子生成。

在这些温度下，由量子色动力学（QCD）描述的强相互作用并不那么强。在低能／低温下，QCD 表现出“禁闭”：夸克与胶子被束缚进重子、介子等复合粒子。但高于 QCD 标度 $\Lambda_{\mathrm{QCD}}\sim300\ \mathrm{MeV}$ 时，夸克与胶子是自由粒子。随着宇宙膨胀并冷却，强相互作用粒子被禁闭到束缚态中，这造成（8.176）所示相对论性自由度有效数目的第一次下降。QCD 相变预期不会在可观测宇宙上留下显著印记。

正如强相互作用在高温时没有那么强，弱相互作用也不像其名称所暗示的那么弱：就能由微扰论准确描述而言，它们依然是弱的；但它们发生得足够快，能使中微子等弱相互作用粒子保持热平衡。当 $T\sim1\ \mathrm{MeV}$ 时，这一点不再成立。这里也大约是电子与正电子变成非相对论性并湮灭的温度，后者会降低相对论性自由度有效数目；但这两个事件彼此无关。温度低于 $1\ \mathrm{MeV}$ 时，我们说弱相互作用“冻结”：相互作用速率降到宇宙膨胀率之下，因此相互作用发生得太不频繁，无法让粒子维持平衡。冷暗物质粒子可能在这个温度从等离子体退耦。更有把握的是，可以推断中子与质子停止相互转化。在这一温度，平衡中子丰度约为质子丰度的 $1/6$，这是中子质量略大造成的。中子寿命有限（$\tau_n=890\ \mathrm{sec}$），比这一历元的宇宙年龄 $t(1\ \mathrm{MeV})\approx1\ \mathrm{sec}$ 稍长；但中子会开始逐渐衰变为质子和轻子。不久之后，温度降到略低于 $100\ \mathrm{keV}$，**大爆炸核合成**（Big-Bang Nucleosynthesis，BBN）开始。

每核子的核结合能通常在 $1\ \mathrm{MeV}$ 量级，所以或许会预期核合成更早发生；然而，每个核子对应的光子数非常多，使核合成直到温度降至 $100\ \mathrm{keV}$ 以下才开始。这时中子／质子比约为 $1/7$。在所有轻核中，核子处于 ${}^4\mathrm{He}$ 的状态在能量上最有利；事实上，大多数自由中子最终正是转化成它：每两个中子和十四个质子，最终留下一个氦核与十二个质子。因此，大约 $25\%$ 的重子质量转化为氦。此外，还有痕量的氘（每个质子约对应 $10^{-5}$ 个氘核）、${}^3\mathrm{He}$（同样约 $10^{-5}$）以及 ${}^7\mathrm{Li}$（约 $10^{-10}$）。

<!-- source: PDF 377; printed: 364 -->

当然，这些数值是预测；对轻元素原初丰度的观测证实了它们。（更重的元素并非在大爆炸中合成，而需要晚期宇宙中的恒星过程。）我们略去了许多关键细节，尤其是那些解释各种丰度如何依赖宇宙学参数的细节。例如，设想偏离标准模型，引入三种以上的轻中微子。这会通过（8.174）增大固定温度下的辐射能量密度，进而缩短给定温度对应的时间尺度，因为 $t\sim H^{-1}\propto\rho_{\mathrm R}^{-1/2}$。于是核合成会稍早发生，产生更高的中子丰度，从而产生更多 ${}^4\mathrm{He}$。对原初氦丰度的观测与标准模型预测一致，提供了轻中微子种类数接近三的最初证据。类似地，核合成相关的所有温度与时间尺度都依赖重子—光子比；要与观测丰度一致，每个光子必须大约对应 $5\times10^{-10}$ 个重子。这正是重子密度参数估计（8.164）的来源，也由此产生了对非重子暗物质的需要。

就本书的目的而言，原初核合成最深刻的特征，或许是它敏感地依赖温度与膨胀率之间的 Friedmann 关系，从而依赖 Einstein 方程。BBN 的成功，在远离日常经验的区域对广义相对论作出了严格检验。Einstein 理论主要源自协调引力与电磁学 Lorentz 对称性下不变性的需要；它竟然成功描述了宇宙只有一秒大时的膨胀，这是一项真正令人印象深刻的成就。直到今天，BBN 仍为各种替代引力理论提供最强的约束之一；尤其重要的是，它是我们拥有任何直接观测痕迹的最早历元。

核合成以后，宇宙中存在一个主要由质子、电子和光子组成的等离子体，并含有一些氦和其他原子核。暗物质也存在，但假定到这个历元，它已经不再与普通物质相互作用。下一个重要事件直到**复合**才发生，此时电子与质子结合（它们与氦的结合稍早一些）。复合发生在温度 $T\approx0.3\ \mathrm{eV}$；此时宇宙由物质主导。同样，氢的结合能是 $13.6\ \mathrm{eV}$，或许会让人预期复合更早发生，但很大的光子／重子比推迟了它。复合的关键意义在于，它标志着宇宙变得透明的历元。背景光子与自由电子强烈相互作用，所以复合之前光子的平均自由程非常短；一旦电子与质子结合成中性氢，平均自由程就变得近乎无限。今天看到的这些背景光子就是宇宙微波背景，它为温度 $T\approx0.3\ \mathrm{eV}$、或红移 $z\approx1200$ 时的宇宙留下了一张快照。复合是一个相当渐进的过程，所以任何关于其发生时刻的指定都必然是近似的。

<!-- source: PDF 378; printed: 365 -->

复合以后，宇宙经历一个称为“黑暗时代”的漫长时期。星系在引力不稳定性作用下逐渐组装起来，但还没有可见恒星照亮宇宙。黑暗时代是一个神秘时期；恒星与星系形成的过程高度复杂且非线性，在充分理解这一时代以前，无疑需要新种类的观测。

我们的故事已经来到今天，但还有两个遗漏点应当回头补上。一个是宇宙中物质与反物质之间的不对称。宇宙中几乎所有可见物质似乎都由质子、中子和电子组成，而非它们的反粒子；如果遥远星系主要由反物质构成，就应当观测到物质／反物质区域边界处质子与反质子偶尔湮灭所产生的高能光子。把这种不对称写进初始条件当然可行，但不知为何让人不满足。大多数物理学家更希望找到一种**重子生成**的动力学机制，使起初物质／反物质对称的状态演化成当前宇宙。这类对称性破缺在粒子物理中很常见，事实上已经提出许多重子生成机制，通常发生在电弱标度或更高温度。不过，尚无任何具体方案有足够强的说服力，能被采纳为标准情景。要理解重子不对称的起源，我们大概需要更深入地理解超出标准模型的物理。

另一个必须提到的遗漏特征是，宇宙当然没有完美地均匀和各向同性；当前宇宙的大尺度结构似乎从极早期就存在的绝热、近乎无标度的扰动演化而来，其幅度约为 $\delta\rho/\rho\sim10^{-5}$。这些扰动的绝热性与无标度性证据，来自 CMB 和大尺度结构的联合观测。在传统宇宙学中，高度的均匀与各向同性以及偏离它们的微小扰动，都被当作神秘的初始条件直接施加。暴胀宇宙情景为二者都提供了一种可能的动力学起源；现在转向这一情景。

## 8.8 暴胀

在对大爆炸模型的传统理解中，宇宙在早期由辐射主导，在晚期由物质主导；按照我们现在的怀疑，在非常晚期又转为真空主导。这幅图景在描述种类繁多的观测数据方面非常成功；不过，仍然可以追问：产生这种宇宙的初始条件看起来自然吗？这类问题也许只会在宇宙学中提出，在其他科学中不会。作为物理学家，我们通常寻找自然定律，并设想可以自由指定初始条件，再问它们在这些定律下如何演化。然而，宇宙似乎只有一组初始条件，所以

<!-- source: PDF 379; printed: 366 -->

问它们相对一般还是经过精细调节，是很合理的。在传统图景中，早期宇宙确实被调节到了难以置信的精度。尤其是，我们宇宙的两个特征显得极不一般：空间平直性，以及高度的均匀性与各向同性。也许我们只能接受这个宇宙，追问不同初始条件的可能性毫无意义。另一种可能是，如果存在某种动力学机制，能把各种各样的初始条件演化向平直、均匀与各向同性，那么这些条件也许比乍看起来更常见。暴胀宇宙情景正提供了这样的机制，而且还有其他成果；尽管我们距离证明它为真还很远，它已经成为现代宇宙学的核心组织原则。

在描述暴胀以前，先说明它声称要解决的两个“不自然”问题：平直性问题，以及与均匀／各向同性相关的视界问题。**平直性问题**来自考察一个含物质与辐射、但没有真空能的宇宙中的 Friedmann 方程。为了以后方便，用约化 Planck 质量 $\bar m_{\mathrm P}=(8\pi G)^{-1/2}$ 将其写成

$$
H^2=\frac{1}{3\bar m_{\mathrm P}^{2}}
\left(\rho_{\mathrm M}+\rho_{\mathrm R}\right)-\frac{\kappa}{a^2}.
\tag{8.180}
$$

曲率项 $-\kappa/a^2$ 显然正比于 $a^{-2}$；能量密度项则随着尺度因子增大而下降得更快，$\rho_{\mathrm M}\propto a^{-3}$、$\rho_{\mathrm R}\propto a^{-4}$。这就引出一个问题：自 Planck 历元以来，$a$ 也许已经增大了 $10^{30}$ 倍，为什么比值 $(\kappa a^{-2})/(\rho/3\bar m_{\mathrm P}^{2})$ 没有远大于一？换一种说法，在物质／辐射主导的宇宙中，$\Omega=1$ 是一个排斥型不动点——任何对这个值的偏离都会随时间增长；那么，为什么今天观测到 $\Omega\sim1$？

**视界问题**源于 FRW 宇宙学中粒子视界的存在，如图 8.7 所示。视界之所以存在，是因为从大爆炸奇点到现在只有有限时间，因此在宇宙年龄以内，光子只能传播有限距离；第 2 章曾对此作过简短讨论。考虑光子在平直宇宙中沿径向轨迹运动（推广到非平直宇宙很直接）。径向类光路径满足

$$
0=\mathrm ds^2=-\mathrm dt^2+a^2\mathrm dr^2,
\tag{8.181}
$$

所以这种光子在时刻 $t_1$ 与 $t_2$ 之间传播的共动（坐标）距离为

$$
\Delta r=\int_{t_1}^{t_2}\frac{\mathrm dt}{a(t)}.
\tag{8.182}
$$

若要得到任意时刻 $t$ 的观察者所测得的物理距离，只需乘以 $a(t)$。为简单起见，设想我们处在物质主导的

<!-- source: PDF 380; printed: 367 -->

宇宙中，此时

$$
a=\left(\frac{t}{t_0}\right)^{2/3}.
\tag{8.183}
$$

记住 $a_0=1$。因此 Hubble 参数为

$$
\begin{aligned}
H&=\frac23t^{-1}\\
&=a^{-3/2}H_0.
\end{aligned}
\tag{8.184}
$$

于是光子传播的共动距离为

$$
\Delta r=2H_0^{-1}\left(\sqrt{a_2}-\sqrt{a_1}\right).
\tag{8.185}
$$

尺度因子固定为 $a=a_*$ 时的共动视界大小，就是光子自大爆炸以来传播的距离：

$$
r_{\mathrm{hor}}(a_*)=2H_0^{-1}\sqrt{a_*}.
\tag{8.186}
$$

因此，在 $a_*$ 的空间超曲面上测得的物理视界大小就是

$$
d_{\mathrm{hor}}(a_*)=a_*r_{\mathrm{hor}}(a_*)=2H_*^{-1}.
\tag{8.187}
$$

实际上，对任何含有物质与辐射、且接近平直的宇宙，在任意一个历元都有

$$
d_{\mathrm{hor}}(a_*)\sim H_*^{-1}=d_H(a_*),
\tag{8.188}
$$

其中 Hubble 距离 $d_H$ 在（8.71）中引入。

> **图 8.7　从大爆炸奇点开始膨胀的宇宙中的过去光锥，展示宇宙学中的粒子视界。** 今天从天空相反方向观测到的复合时期 CMB 两点，在传统宇宙学中没有相互重叠的过去光锥；没有任何因果信号能影响二者，使其具有相同温度。

<!-- source: PDF 381; printed: 368 -->

这一近似等式让人很想把“视界距离”与“Hubble 距离”混用；应当抵制这种诱惑，因为暴胀可以让前者远大于后者，马上就会说明。

视界问题可以简单表述为：CMB 具有极高精度的各向同性，尽管末次散射面上相距很远的点完全处在彼此视界之外。观察 CMB 时，看到的是尺度因子 $a_{\mathrm{CMB}}\approx1/1200$ 时的宇宙；由（8.185），CMB 上一点与地球观察者之间的共动距离为

$$
\begin{aligned}
\Delta r&=2H_0^{-1}\left(1-\sqrt{a_{\mathrm{CMB}}}\right)\\
&\approx2H_0^{-1}.
\end{aligned}
\tag{8.189}
$$

然而，这一点的共动视界距离为

$$
\begin{aligned}
r_{\mathrm{hor}}(a_{\mathrm{CMB}})&=2H_0^{-1}\sqrt{a_{\mathrm{CMB}}}\\
&\approx6\times10^{-2}H_0^{-1}.
\end{aligned}
\tag{8.190}
$$

因此，如果观察 CMB 中相隔很远的两个部分，它们的视界不会重叠；CMB 天空的不同区域在复合时彼此因果断开。然而，观测却表明它们以很高精度处在相同温度。问题随之而来：既然它们从未发生因果接触，怎么会预先知道要以正确方式协调各自演化？我们必须以某种方式修改传统 FRW 宇宙学的因果结构。

设想在传统图景中加入一段**暴胀**时期：极早期宇宙经历一段由某种不同于物质或辐射、且在宇宙膨胀时红移得很慢的组分驱动的加速阶段（$\ddot a>0$）。于是，平直性问题与视界问题可以同时得到解决。为简单起见，考虑暴胀由恒定真空能驱动、从而产生指数膨胀的情形。在真空主导时期，$\rho/3\bar m_{\mathrm P}^{2}\propto a^0$ 相对于 $-\kappa/a^2$ 迅速增长，所以宇宙随时间变得更平直，即 $\Omega$ 被推向一。如果这个过程持续足够长，随后真空能又转化为物质与辐射，那么密度参数会足够接近一，以至于直到当前历元都来不及产生显著变化。另一方面，视界问题可以追溯到这样一个事实：任意两个共动物体之间的物理距离按尺度因子增长，而物质或辐射主导宇宙中的物理视界大小增长得更快，$d_{\mathrm{hor}}\sim a^{n/2}H_0^{-1}$。早期的一段指数膨胀同样能解决这个问题：在这段时期，真正的视界大小会增长到极其巨大，所以我们今天的视界实际上远大于“它等于 Hubble 半径 $H_0^{-1}$”这一朴素估计。

事实上，并不真正需要指数膨胀；对任何加速膨胀，空间曲率相对于能量密度都会减小，

<!-- source: PDF 382; printed: 369 -->

而视界距离会迅速增长。通常要求这个加速阶段持续至少 $60$ 个 $e$-折叠，其中 $e$-折叠数为 $N=\Delta\ln a$；这是解决视界问题所需的数量。超过这一要求很容易，暴胀通常会让当今宇宙的空间平直性达到难以置信的精度。

现在考察如何在早期宇宙中得到暴胀阶段。最直接的方法，是利用标量场的势所提供的真空能；这个标量场称为**暴胀子**。设想宇宙由空间均匀标量的能量主导。相关运动方程正是第 8.7 节讨论动力学暗能量时的方程，唯一差别在于暴胀的能标高得多。RW 度规中标量场的运动方程为

$$
\ddot\phi+3H\dot\phi+V'(\phi)=0,
\tag{8.191}
$$

同时还有 Friedmann 方程

$$
H^2=\frac{1}{3\bar m_{\mathrm P}^{2}}
\left(\frac12\dot\phi^2+V(\phi)\right).
\tag{8.192}
$$

这里忽略了曲率项，因为暴胀无论如何都会把宇宙变平。如果场的演化足够缓慢，使势能支配动能，并且 $\phi$ 的二阶导数足够小，让这种状况维持足够长的时间，就会发生暴胀。因此，我们希望

$$
\begin{aligned}
\dot\phi^2&\ll V(\phi),\\
|\ddot\phi|&\ll|3H\dot\phi|,\ |V'|.
\end{aligned}
\tag{8.193}
$$

要满足这些条件，需要两个称为**慢滚参数**的无量纲量都很小：

$$
\begin{aligned}
\epsilon&=\frac12\bar m_{\mathrm P}^{2}
\left(\frac{V'}{V}\right)^2,\\
\eta&=\bar m_{\mathrm P}^{2}\left(\frac{V''}{V}\right).
\end{aligned}
\tag{8.194}
$$

注意，$\epsilon\geq0$，而 $\eta$ 可以具有任一符号。还要注意，这些定义并不普适；有些人喜欢用 Hubble 参数而非势来定义慢滚参数。这里的选择描述场有没有机会缓慢滚动一段时间；用 Hubble 参数给出的定义描述场实际上是否正在慢滚。当二者都很小时，可以有一段延长的暴胀阶段。不过，这些条件并不充分：无论势长什么样，总可以选择 $|\dot\phi|$ 大到使慢滚永远不适用的初始条件。然而，如果慢滚参数很小，大多数初始条件都会被吸引到暴胀阶段。

<!-- source: PDF 383; printed: 370 -->

要构造满足慢滚条件的势并不困难。考虑也许是最简单的例子：[^8-3]

$$
V(\phi)=\frac12m^2\phi^2.
$$

在这种情形下，

$$
\epsilon=\eta=\frac{2\bar m_{\mathrm P}^{2}}{\phi^2}.
\tag{8.195}
$$

显然，只要 $\phi$ 足够大，就能让慢滚参数小到任意程度。不过，为了使经典分析有意义，还必须要求能量密度不能高到 Planck 能标；这意味着 $\phi\ll\bar m_{\mathrm P}^{2}/m$。如果场从 $\phi_i$ 开始，那么在暴胀结束之前——也就是慢滚参数变成一阶量之前——经历的 $e$-折叠数为

$$
\begin{aligned}
N&=\int_{t_i}^{t_e}H\,\mathrm dt\\
&\approx-\bar m_{\mathrm P}^{-2}
\int_{\phi_i}^{\phi_e}\frac{V}{V'}\,\mathrm d\phi\\
&\approx\frac{\phi_i^2}{4\bar m_{\mathrm P}^{2}}-\frac12.
\end{aligned}
\tag{8.196}
$$

第一个等式始终成立，第二步使用了慢滚近似，第三步则是这个特定模型的结果。因此，要得到 $60$ 个 $e$-折叠，需要 $\phi_i>16\bar m_{\mathrm P}$。再结合能量密度的上限，可知质量参数存在上限 $m\ll\bar m_{\mathrm P}/16$。事实上，下面将会讨论，观测到的密度涨落大小会对 $m$ 给出更严格的上限。然而 $m$ 没有下限，所以，只要愿意设定很大的层级 $m\ll\bar m_{\mathrm P}$，或者等价地设定很小的无量纲数 $m/\bar m_{\mathrm P}$，就很容易得到合适的暴胀势。对 $\lambda\phi^4$ 势重复同样的分析，会得到相似结论：$\lambda$ 必须相当小；人们常说，暴胀子必须是弱耦合的。当然，从某种意义上说，这样做有些取巧，因为当场值 $\phi>\bar m_{\mathrm P}$ 时，应当预期有效势中形如 $\bar m_{\mathrm P}^{4-n}\phi^n$、其中 $n>4$ 的附加项变得重要。因此，在现实模型中，得到合适的势可能相当困难。

暴胀终究会结束，暴胀子势中的能量随之转化成达到热平衡的物质与辐射气体；这个过程称为“**再加热**”（reheating）。正确理解再加热过程至关重要，因为它控制着宇宙中各种我们可能想要或不想要的遗迹如何产生。例如，暴胀的一项重要益处，是它可以把早期宇宙中可能产生、但今天并未观测到的各种遗迹“胀走”。一个经典例子来自粒子物理的大统一理论；这类理论一般预言存在超重的

[^8-3]: 这里沿用 A. R. Liddle 的讲解，见 “An Introduction to Cosmological Inflation”，<https://arxiv.org/astro-ph/9901124>。

<!-- source: PDF 384; printed: 371 -->

磁单极子，而且其丰度会比观测允许值高出许多个数量级。历史上，单极子问题是 Guth 发明暴胀的首要动机；平直性问题和视界问题的解决当时被视为额外收获。暴胀可以把单极子丰度稀释到适当水平，但如果宇宙再加热到高于大统一相变温度，单极子又会重新产生；幸运的是，这对大多数模型并不构成严格限制。类似考虑也适用于其他不想要的遗迹；在超对称模型中，引力微子（graviton 的超对称伙伴）的丰度会带来格外棘手的问题。

与此同时，再加热温度又必须足够高，才能容许某种重子生成机制。对粒子物理模型中暴胀的任何具体实现，都必须仔细确认：不想要的遗迹会被清除，而想要的遗迹（例如重子）能够保存下来。

暴胀情景的一个关键要素是产生密度扰动；它们可能正是 CMB 温度各向异性以及今天所观测星系大尺度结构的起源。暴胀产生密度扰动背后的想法相当直接。暴胀会迅速把周围任何粒子密度衰减到零，只留下真空。不过，加速膨胀宇宙中的真空态具有非零温度，即 **Gibbons–Hawking 温度**，它类似于黑洞的 Hawking 温度。这里无法详细探究这个主题，只概述基本结果。

对由势能 $V$ 主导的宇宙，Gibbons–Hawking 温度为

$$
T_{\mathrm{GH}}=\frac{H}{2\pi}
\sim\frac{V^{1/2}}{\bar m_{\mathrm P}}.
\tag{8.197}
$$

与这一温度相应，在每个波数 $k$ 上，暴胀子场 $\phi$ 都有大小为

$$
|\Delta\phi|_k=T_{\mathrm{GH}}
\tag{8.198}
$$

的涨落。按假设，势几乎是平坦的，所以 $\phi$ 的涨落会导致能量密度的小幅涨落，

$$
\delta\rho=V'(\phi)\delta\phi.
\tag{8.199}
$$

因此，暴胀在所有尺度上都会产生密度扰动。各个波数上的扰动振幅几乎相等，不过随着暴胀子滚动，$V$ 会逐渐变化，从而造成轻微偏离。描述这些扰动是一个相当繁杂的主题，涉及无数不同记号。一个合理的起点是均方根（RMS）密度涨落，

$$
\left.\frac{\delta\rho}{\rho}\right|_{\mathrm{rms}}
=\sqrt{\left\langle
\left(\frac{\delta\rho}{\rho}\right)^2
\right\rangle},
\tag{8.200}
$$

<!-- source: PDF 385; printed: 372 -->

其中尖括号表示对空间位置取平均。对统计各向同性的扰动（期望振幅与方向无关），稍作 Fourier 分析便可写成

$$
\left(
\left.\frac{\delta\rho}{\rho}\right|_{\mathrm{rms}}
\right)^2
=\int\Delta^2(k)\,\mathrm d(\ln k),
\tag{8.201}
$$

这里引入了无量纲功率谱

$$
\Delta^2(k)\equiv\frac{k^3|\delta_k|^2}{2\pi^2},
\tag{8.202}
$$

而 $\delta_k$ 是分数密度扰动 Fourier 变换的期望值，

$$
\delta_k=\frac{1}{(2\pi)^{3/2}}
\int e^{-i\mathbf{k}\cdot\mathbf{x}}
\frac{\delta\rho}{\rho}\,\mathrm d^3x,
\tag{8.203}
$$

这里已经假设它各向同性。由于每个模的振幅都会演化，无量纲功率谱是时间的函数；表达某个具体模型的预言时，最常见的做法，是给出模的物理波长 $\lambda=a/k$ 等于 Hubble 半径 $H^{-1}$ 那一时刻的扰动振幅：

$$
A_{\mathrm S}^2(k)
\equiv\left.\Delta^2(k)\right|_{k=aH}.
\tag{8.204}
$$

因此，$A_{\mathrm S}(k)$ 测量的是不同模在不同时间的振幅。对由缓慢滚动标量场驱动的暴胀，$A_{\mathrm S}(k)$ 通过下式与势联系起来：

$$
A_{\mathrm S}^2(k)
\sim\left.\frac{V^3}{\bar m_{\mathrm P}^{6}(V')^2}\right|_{k=aH}
\sim\left.\frac{V}{\bar m_{\mathrm P}^{4}\epsilon}\right|_{k=aH}.
\tag{8.205}
$$

这里有意略去了无量纲数值因子；不同参考文献对它们的写法差异很大，略去它们能突出结果对势的依赖。

功率谱带下标“$\mathrm S$”，因为它描述度规中的标量涨落。这些涨落与能量—动量分布相联系，而且暴胀产生的密度涨落是**绝热的**——所有粒子种类的密度涨落彼此相关。涨落也是 Gaussian 的；这里的含义是，描述不同尺度涨落的 Fourier 模，其相位彼此不相关。暴胀扰动的这些性质——Gaussian 分布的近标度无关绝热密度涨落谱——都与当前对 CMB 和大尺度结构的观测相符；未来几年计划收集的新数据，应当会大幅提高这些检验的精度。

<!-- source: PDF 386; printed: 373 -->

暴胀期间受到激发的并不只有近乎无质量的暴胀子，其他任何近乎无质量的粒子也会受到激发。另一个重要例子是 graviton，它对应度规中的张量扰动（引力场的传播激发）。张量涨落具有功率谱

$$
A_{\mathrm T}^2(k)
\sim\left.\frac{V}{\bar m_{\mathrm P}^{4}}\right|_{k=aH}.
\tag{8.206}
$$

重要的是，张量振幅只依赖势本身，并不依赖势的导数；因此，对张量扰动的观测会直接提供暴胀能标的信息。

为了理解观测，用可观测量来参数化扰动谱很有帮助。因此写成

$$
A_{\mathrm S}^2(k)\propto k^{n_{\mathrm S}-1}
\tag{8.207}
$$

以及

$$
A_{\mathrm T}^2(k)\propto k^{n_{\mathrm T}},
\tag{8.208}
$$

其中 $n_{\mathrm S}$ 和 $n_{\mathrm T}$ 是谱指数。它们与势的慢滚参数之间满足

$$
n_{\mathrm S}=1-6\epsilon+2\eta
\tag{8.209}
$$

以及

$$
n_{\mathrm T}=-2\epsilon.
\tag{8.210}
$$

在我们所考虑的这类模型中（由单一缓慢滚动的标量场驱动），有一条联系标量模和张量模振幅与谱指数的相容关系。它可以用一种与约定无关的方式，写成不同扰动所造成的可观测温度涨落 $\Delta T$ 之间的关系：

$$
\frac{(\Delta T/T)_{\mathrm T}^{2}}
{(\Delta T/T)_{\mathrm S}^{2}}
=-7n_{\mathrm T}.
\tag{8.211}
$$

张量扰动的存在是暴胀的一项关键预言，原则上可以通过观测 CMB 偏振来检验。普通密度涨落也会产生偏振，其机制是不均匀等离子体中 Thomson 散射截面的各向异性。幸运的是，可以设想把天空上的偏振向量场分解成无旋部分（$E$ 模）和有旋部分（$B$ 模）；标量扰动会产生 $E$ 模偏振，张量扰动则产生 $B$ 模（但在复合之后的宇宙中不可避免还会经历一些处理）。CMB 偏振已经被探测到；未来的挑战将是把

<!-- source: PDF 387; printed: 374 -->

标量与张量贡献分离开来，从而检验简单暴胀模型的预言（8.211）。当然，这不仅要求探测由张量扰动引起的偏振，还要以一定精度测量它的谱指数。

目前对扰动振幅的认识，已经为暴胀的能标提供了重要信息。张量扰动只依赖 $V$，不依赖它的导数；如果 COBE 看到的 CMB 各向异性是由张量涨落造成的（这有可能，尽管不大可能），就能立刻推出 $V_{\mathrm{inflation}}\sim(10^{16}\ \mathrm{GeV})^4$。这里受约束的 $V$ 值，是产生所观测涨落时的势能值，也就是暴胀结束前约 $60$ 个 $e$-折叠时的值。这与大统一能标惊人地接近，是一个非常令人鼓舞的结果。更可能的情形是，CMB 中观测到的扰动具有标量性质；即使如此，仍然可以写出

$$
V_{\mathrm{inflation}}^{1/4}
\sim\epsilon^{1/4}10^{16}\ \mathrm{GeV},
\tag{8.212}
$$

其中 $\epsilon$ 是（8.194）定义的慢滚参数。虽然预期 $\epsilon$ 很小，但指数中的 $1/4$ 意味着结果对 $\epsilon$ 的依赖相当弱；除非这个参数小得异常，否则 $V_{\mathrm{inflation}}^{1/4}\sim10^{15}$–$10^{16}\ \mathrm{GeV}$ 的可能性很大。能够获得如此巨大能标的信息，实在令人惊叹。

## 8.9 习题

1. 考虑一个 $(N+n+1)$ 维时空，坐标为 $\{t,x^I,y^i\}$，其中 $I$ 从 $1$ 到 $N$，$i$ 从 $1$ 到 $n$。令度规为

   $$
   \mathrm ds^2=-\mathrm dt^2
   +a^2(t)\delta_{IJ}\,\mathrm dx^I\mathrm dx^J
   +b^2(t)\gamma_{ij}(y)\,\mathrm dy^i\mathrm dy^j,
   \tag{8.213}
   $$

   其中 $\delta_{IJ}$ 是通常的 Kronecker delta，$\gamma_{ij}(y)$ 是一个 $n$ 维最大对称空间流形上的度规。设把度规 $\gamma$ 归一化，使曲率参数

   $$
   k=\frac{R(\gamma)}{n(n-1)}
   \tag{8.214}
   $$

   取 $+1$、$0$ 或 $-1$，其中 $R(\gamma)$ 是与度规 $\gamma_{ij}$ 相应的 Ricci 标量。

   (a) 计算这个度规的 Ricci 张量。

   (b) 用能量密度 $\rho$ 以及 $x^I$ 和 $y^i$ 方向上的压强 $p^{(N)}$、$p^{(n)}$ 定义能量—动量张量：

      $$
      T_{00}=\rho,
      \tag{8.215}
      $$

      $$
      T_{IJ}=a^2p^{(N)}\delta_{IJ},
      \tag{8.216}
      $$

      $$
      T_{ij}=b^2p^{(n)}\gamma_{ij}.
      \tag{8.217}
      $$

      把度规和 $T_{\mu\nu}$ 代入 Einstein 方程，导出关于 $a$ 和 $b$ 的 Friedmann 型方程（总共三个独立方程）。

<!-- source: PDF 388; printed: 375 -->

   (c) 在静态解 $\dot a=\dot b=\ddot a=\ddot b=0$ 处，用 $k$、$n$ 和 $N$ 表示能量密度和两个压强的方程。由此导出静态解处有效的状态方程参数 $w^{(N)}=p^{(N)}/\rho$ 和 $w^{(n)}=p^{(n)}/\rho$ 的表达式。

2. 考虑采用如下坐标的 de Sitter 空间，其度规为

   $$
   \mathrm ds^2=-\mathrm dt^2
   +e^{2Ht}\left(\mathrm dx^2+\mathrm dy^2+\mathrm dz^2\right).
   \tag{8.218}
   $$

   对非共动观测者（$x^i$ 不是常数）求解测地线方程，得到仿射参数作为 $t$ 的函数。证明这些测地线会在有限仿射参数内到达 $t=-\infty$，从而表明这些坐标不能覆盖整个流形。

   > **作者勘误（印刷页 375，习题 2）**：扫描版式（8.218）的指数误排为 $Ht$；若 $H$ 确实表示 Hubble 参数，正确指数应为 $2Ht$，上式已经改正。原题还误要求考察共动观测者；对共动观测者而言，$t$ 本身就是仿射参数。作者勘误把题目修正为考察非共动观测者，上文采用了这一修正版。

3. 附录 F 讨论了 Raychaudhuri 方程。证明，把它应用于 Robertson–Walker 宇宙学时，Raychaudhuri 方程等价于第二个 Friedmann 方程（8.68）。

4. 考虑最佳拟合宇宙，其密度参数为 $\Omega_{\mathrm R0}=10^{-4}$、$\Omega_{\mathrm M0}=0.3$、$\Omega_{\Lambda0}=0.7$。以对数尺度画出三个 $\Omega_i$ 随尺度因子 $a$ 变化的图，范围从 $a=10^{-35}$ 到 $a=10^{35}$。在图上标出 Planck 时刻、核合成时期和今天。

5. 在平直时空中，物理大小固定的物体离得越远，所张的角就越小；在膨胀宇宙中，这一点未必成立。考虑红移 $z$ 处物理大小为 $L$ 的物体，其角大小为 $\theta(z)$。在物质主导的平直宇宙中，$\theta(z)/L$ 在什么红移处最小？如果所有星系的跨度都至少为 $10\ \mathrm{kpc}$（而且一直如此），这样的宇宙中星系的最小角大小是多少？结果既要用 $H_0$ 表示，也要代入 $H_0=70\ \mathrm{km/s/Mpc}$ 给出数值。

6. 在宇宙学中，通常把非相对论粒子理想化为温度 $T$ 和压强 $p$ 都为零。实际上，随机运动会使它们具有一定温度和压强，并满足 $p\propto T\rho$。

   (a) 有质量粒子气体的压强如何随尺度因子衰减？

   (b) 假设中微子质量为 $m_\nu=0.1\ \mathrm{eV}$，当前温度为 $T_{\nu0}=2\ \mathrm K$。中微子大约在什么红移处从相对论性转变为非相对论性？

7. 假设宇宙在 Planck 时刻起始于能量均分状态（即物质和辐射的能量密度均为 Planck 密度量级，而时间曲率半径和空间曲率半径均为 Planck 长度量级）。忽略任何空间不均匀性，计算正曲率宇宙能持续多久，以及负曲率宇宙在温度达到 $3\ \mathrm K$ 时有多大年龄。平直宇宙在温度达到 $3\ \mathrm K$ 时有多大年龄？当膨胀率减慢到 $H_0=70\ \mathrm{km}\,\mathrm s^{-1}\,\mathrm{Mpc}^{-1}$ 时，平直宇宙会有多大年龄？

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 7 章 微扰理论与引力辐射](./07-perturbation-theory-and-gravitational-radiation.md) · [下一篇：第 9 章 弯曲时空中的量子场论](./09-quantum-field-theory-in-curved-spacetime.md)
