# 第 5 章 Schwarzschild 解

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 4 章 引力](./04-gravitation.md) · [下一篇：第 6 章 更一般的黑洞](./06-more-general-black-holes.md)

<!-- source: PDF 206; printed: 193 -->

## 5.1 Schwarzschild 度规

引力理论最显然的应用对象，是球对称引力场。例如，在很好的近似下，这正是描述地球或太阳所产生的场的适当情形；苹果在这种场中下落，行星也在其中运动。此外，我们首先关心的是外部解（即引力物体周围的真空空间），因为理解物体外部试验粒子的运动，既比研究相对难以接近的内部容易，也更具有直接用途。这个问题在广义相对论中的答案除了具有实际价值，还会把我们带向一类描述新现象的非凡解；这些现象令物理学家和天文学家深感兴趣：黑洞。本章研究具有完全球对称性的简单真空解；下一章再在更一般的语境中讨论黑洞的性质。

在广义相对论中，唯一的球对称真空解是 **Schwarzschild 度规**；在重要时空的名单上，它仅次于 Minkowski 空间。使用球坐标 $\{t,r,\theta,\phi\}$，度规为

$$
\mathrm ds^2
=-\left(1-\frac{2GM}{r}\right)\mathrm dt^2
+\left(1-\frac{2GM}{r}\right)^{-1}\mathrm dr^2
+r^2\mathrm d\Omega^2,
\tag{5.1}
$$

其中 $\mathrm d\Omega^2$ 是单位二维球面的度规，

$$
\mathrm d\Omega^2=\mathrm d\theta^2+\sin^2\theta\,\mathrm d\phi^2.
\tag{5.2}
$$

常数 $M$ 被解释为引力物体的质量（不过，要严格建立这一认同还需要一些工作）。本节将通过试探来推导 Schwarzschild 度规；下一节则会更系统地处理解的推导及其后果。

我们关心球状物体**外部**的解，因此需要真空中的 Einstein 方程，

$$
R_{\mu\nu}=0.
\tag{5.3}
$$

<!-- source: PDF 207; printed: 194 -->

我们假设的源是静态的（不随时间演化）并且具有球对称性，所以也要寻找具有这些性质的解。由于坐标无关性带来一些微妙之处，要严谨定义“静态”和“球对称”都需要格外小心。眼下，我们把静态理解为同时满足两个条件：所有度规分量都与时间坐标无关；度规中没有时间—空间交叉项 $(\mathrm dt\,\mathrm dx^i+\mathrm dx^i\,\mathrm dt)$。若设想实施时间反演 $t\to-t$，后一条件便很自然：$\mathrm dt^2$ 项保持不变，任何 $\mathrm dx^i\mathrm dx^j$ 项也保持不变，交叉项却不会。我们希望找到与时间无关的解，它应当在时间反演下不变，所以排除交叉项。为了施加球对称性，先把 Minkowski 空间——一个我们已经熟悉的球对称时空——的度规写成极坐标 $x^\mu=(t,r,\theta,\phi)$ 的形式：

$$
\mathrm ds^2_{\text{Minkowski}}=-\mathrm dt^2+\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.4}
$$

保持球对称性的一个要求，是维持 $\mathrm d\Omega^2$ 的形式。也就是说，为了让球面保持完全球形，$\mathrm d\phi^2$ 项的系数必须等于 $\mathrm d\theta^2$ 项系数的 $\sin^2\theta$ 倍。除此以外，我们可以分别给各项乘上不同系数，只要这些系数都仅仅是径向坐标 $r$ 的函数：

$$
\mathrm ds^2=-e^{2\alpha(r)}\mathrm dt^2+e^{2\beta(r)}\mathrm dr^2
+e^{2\gamma(r)}r^2\mathrm d\Omega^2.
\tag{5.5}
$$

把这些函数写成指数形式，是为了让度规的号差不发生变化。在完整处理中，我们会允许它们具有完全的自由，再观察会发生什么。

即使尚未施加 Einstein 方程，我们也可以利用改变坐标的自由，对静态球对称度规（5.5）稍加简化。在广义相对论中，我们同时定义坐标以及作为这些坐标之函数的度规，这一点有别于其他物理理论。换句话说，我们无法预先知道径向坐标 $r$ 究竟代表什么；只有得到解之后才能解释它。因此设想通过下式定义新坐标 $\bar r$：

$$
\bar r=e^{\gamma(r)}r,
\tag{5.6}
$$

相应的基一形式为

$$
\mathrm d\bar r=e^\gamma\mathrm dr+e^\gamma r\,\mathrm d\gamma
=\left(1+r\frac{\mathrm d\gamma}{\mathrm dr}\right)e^\gamma\mathrm dr.
\tag{5.7}
$$

用这个新变量表示，度规（5.5）成为

$$
\mathrm ds^2=-e^{2\alpha(r)}\mathrm dt^2
+\left(1+r\frac{\mathrm d\gamma}{\mathrm dr}\right)^{-2}
e^{2\beta(r)-2\gamma(r)}\mathrm d\bar r^2
+\bar r^2\mathrm d\Omega^2,
\tag{5.8}
$$

其中每个原本以 $r$ 为自变量的函数，都以显然的方式成为 $\bar r$ 的函数。现在作如下重新标记。

<!-- source: PDF 208; printed: 195 -->

$$
\bar r\to r,
\tag{5.9}
$$

$$
\left(1+r\frac{\mathrm d\gamma}{\mathrm dr}\right)^{-2}
e^{2\beta(r)-2\gamma(r)}\to e^{2\beta}.
\tag{5.10}
$$

没有任何因素会阻止我们这样做，因为它们只是标签，并没有独立的外部定义。若愿意，你也可以继续使用 $\bar r$，并把（5.10）设为 $e^{2\bar\beta}$，但这里无需如此。度规（5.8）变为

$$
\mathrm ds^2=-e^{2\alpha(r)}\mathrm dt^2+e^{2\beta(r)}\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.11}
$$

它看起来与（5.5）完全相同，区别只在于 $e^{2\gamma}$ 因子已经消失。我们没有令 $e^{2\gamma}=1$——那会是关于几何的陈述；我们只是选择了一个不出现这一因子的径向坐标。因此，（5.11）与（5.5）具有完全相同的一般性。

现在把这个度规代入 Einstein 方程，求解函数 $\alpha(r)$ 和 $\beta(r)$。先计算 Christoffel 符号。照常用 $(t,r,\theta,\phi)$ 分别表示 $(0,1,2,3)$，非零 Christoffel 符号为

$$
\begin{aligned}
\Gamma^t{}_{tr}&=\partial_r\alpha,
&\Gamma^r{}_{tt}&=e^{2(\alpha-\beta)}\partial_r\alpha,
&\Gamma^r{}_{rr}&=\partial_r\beta,\\
\Gamma^\theta{}_{r\theta}&=\frac1r,
&\Gamma^r{}_{\theta\theta}&=-re^{-2\beta},
&\Gamma^\phi{}_{r\phi}&=\frac1r,\\
\Gamma^r{}_{\phi\phi}&=-re^{-2\beta}\sin^2\theta,
&\Gamma^\theta{}_{\phi\phi}&=-\sin\theta\cos\theta,
&\Gamma^\phi{}_{\theta\phi}&=\frac{\cos\theta}{\sin\theta}.
\end{aligned}
\tag{5.12}
$$

没有明确写出的分量，要么为零，要么可由对称性从已写出的分量得到。由此得到 Riemann 张量的下列非零分量：

$$
\begin{aligned}
R^t{}_{rtr}&=\partial_r\alpha\,\partial_r\beta-\partial_r^2\alpha-(\partial_r\alpha)^2,\\
R^t{}_{\theta t\theta}&=-re^{-2\beta}\partial_r\alpha,\\
R^t{}_{\phi t\phi}&=-re^{-2\beta}\sin^2\theta\,\partial_r\alpha,\\
R^r{}_{\theta r\theta}&=re^{-2\beta}\partial_r\beta,\\
R^r{}_{\phi r\phi}&=re^{-2\beta}\sin^2\theta\,\partial_r\beta,\\
R^\theta{}_{\phi\theta\phi}&=(1-e^{-2\beta})\sin^2\theta.
\end{aligned}
\tag{5.13}
$$

照常缩并便得到 Ricci 张量：

$$
\begin{aligned}
R_{tt}&=e^{2(\alpha-\beta)}
\left[\partial_r^2\alpha+(\partial_r\alpha)^2
-\partial_r\alpha\,\partial_r\beta+\frac2r\partial_r\alpha\right],\\
R_{rr}&=-\partial_r^2\alpha-(\partial_r\alpha)^2
+\partial_r\alpha\,\partial_r\beta+\frac2r\partial_r\beta,\\
R_{\theta\theta}&=e^{-2\beta}\bigl[r(\partial_r\beta-\partial_r\alpha)-1\bigr]+1,\\
R_{\phi\phi}&=\sin^2\theta\,R_{\theta\theta}.
\end{aligned}
\tag{5.14}
$$

<!-- source: PDF 209; printed: 196 -->

为后文使用，我们还计算曲率标量：

$$
R=-2e^{-2\beta}\left[
\partial_r^2\alpha+(\partial_r\alpha)^2-\partial_r\alpha\,\partial_r\beta
+\frac2r(\partial_r\alpha-\partial_r\beta)
+\frac1{r^2}(1-e^{2\beta})
\right].
\tag{5.15}
$$

得到 Ricci 张量之后，我们希望把它设为零。由于 $R_{tt}$ 与 $R_{rr}$ 分别为零，可以写成

$$
0=e^{2(\beta-\alpha)}R_{tt}+R_{rr}
=\frac2r(\partial_r\alpha+\partial_r\beta),
\tag{5.16}
$$

所以 $\alpha=-\beta+c$，其中 $c$ 为某个常数。通过重标度时间坐标 $t\to e^{-c}t$，可以令这个常数为零，于是

$$
\alpha=-\beta.
\tag{5.17}
$$

接下来考虑 $R_{\theta\theta}=0$；现在它写成

$$
e^{2\alpha}(2r\partial_r\alpha+1)=1.
\tag{5.18}
$$

这等价于

$$
\partial_r(re^{2\alpha})=1.
\tag{5.19}
$$

求解可得

$$
e^{2\alpha}=1-\frac{R_S}{r},
\tag{5.20}
$$

其中 $R_S$ 是一个尚未确定的常数。结合（5.17）和（5.20），度规成为

$$
\mathrm ds^2=-\left(1-\frac{R_S}{r}\right)\mathrm dt^2
+\left(1-\frac{R_S}{r}\right)^{-1}\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.21}
$$

现在只剩单个常数 $R_S$，再无其他自由。因此，这个形式理应满足余下的方程 $R_{tt}=0$ 和 $R_{rr}=0$；直接检验可知，对 $R_S$ 的任意取值，它确实满足这些方程。

最后只需用某个物理参数解释常数 $R_S$，它称为 **Schwarzschild 半径**。这再简单不过。第 4 章已经得到，在弱场极限下，点质量周围度规的 $tt$ 分量满足

$$
g_{tt}=-\left(1-\frac{2GM}{r}\right).
\tag{5.22}
$$

当 $r\gg2GM$ 时，Schwarzschild 度规应退化为弱场情形；而它的 $tt$ 分量已经具有完全相同的形式，只需认定

$$
R_S=2GM.
\tag{5.23}
$$

也可以把这视为参数 $M$ 的定义。

<!-- source: PDF 210; printed: 197 -->

最终结果就是（5.1）所示的 Schwarzschild 度规。我们已经证明，它是 Einstein 方程的静态、球对称真空解。$M$ 充当一个参数；恰好我们知道，可以把它解释为传统的 Newton 质量，即通过研究远离引力源处的轨道所测得的质量。由于使时空弯曲的物体还具有通常所说的引力束缚能，$M$ 不会简单等于物体各组成部分质量的总和；不过在弱场极限下，两种量会一致。注意，当 $M\to0$ 时，我们如预期那样恢复 Minkowski 空间。还要注意，当 $r\to\infty$ 时，度规逐渐趋近 Minkowski 度规；这一性质称为**渐近平坦性**。更技术性的定义涉及在共形图中匹配无穷远处的区域，我们将在下一章讨论。

## 5.2 Birkhoff 定理

**Birkhoff 定理**断言，Schwarzschild 度规是唯一的球对称真空解（尤其不存在这种形式的含时解）。证明它是一项很有启发性的练习，分为三个主要步骤。第一，论证球对称时空可以由二维球面分叶；换句话说，（几乎）每一点都位于一个唯一的球面上，这个球面在球对称的生成元作用下保持不变。第二，纯粹依据几何说明，这种空间上的度规总能（至少在某个局部区域内）写成

$$
\mathrm ds^2=\mathrm d\tau^2(a,b)+r^2(a,b)\mathrm d\Omega^2(\theta,\phi),
\tag{5.24}
$$

其中 $(a,b)$ 是横截这些球面的坐标，$r$ 是这些坐标的函数。第三，把这个度规代入真空 Einstein 方程，证明 Schwarzschild 是唯一解。对于前两点，我们将采用多数物理学家大概会信服、却可能令数学家不安的严谨程度；第三点只是直接计算。更仔细的处理可参见 Hawking 与 Ellis（1973）。这里会用到附录 C 的一些概念，此时阅读该附录或许很有帮助。当然，如果你更关心 Schwarzschild 解的性质，而不太关心其唯一性的证明，可以直接跳到下一节。

先考虑一个四维球对称时空 $M$。球对称意味着具有与球面相同的对称性。（本章所说的球面专指 $S^2$，不指其他维数的球面。）球面的对称性恰好就是三维 Euclidean 空间中的普通旋转；用群论语言，它们组成特殊正交群 $\mathrm{SO}(3)$。（回忆第 1 章对 Lorentz 群和旋转群的讨论。）对于流形上的度规，对称性的特征是存在 Killing 向量。第 3.8 节求出了 $S^2$ 的三个 Killing 向量，记作 $(R,S,T)$；在 $(\theta,\phi)$ 坐标中，它们具有如下形式。

<!-- source: PDF 211; printed: 198 -->

$$
\begin{aligned}
R&=\partial_\phi,\\
S&=\cos\phi\,\partial_\theta-\cot\theta\sin\phi\,\partial_\phi,\\
T&=-\sin\phi\,\partial_\theta-\cot\theta\cos\phi\,\partial_\phi.
\end{aligned}
\tag{5.25}
$$

球对称流形拥有三个与 $S^2$ 上相同的 Killing 向量场。然而，怎样以坐标无关的方式判断一个流形上的一组 Killing 向量与另一流形上的那组向量相同？一组对称变换的结构由这些变换的对易关系给出；对易关系表达的是，按一种顺序实施两个无穷小变换，与按相反顺序实施它们之间的差异。在群论中，这由对称生成元的 Lie 代数表达；在微分几何中，则由 Killing 向量场的对易子表达。这里存在深刻联系，但我们没有时间深入，可参见 Schutz（1980）。在第 3 章习题中，你已经验证了旋转 Killing 向量 $(R,S,T)$ 的对易子满足

$$
\begin{aligned}
[R,S]&=T,\\
[S,T]&=R,\\
[T,R]&=S.
\end{aligned}
\tag{5.26}
$$

这个 Killing 向量代数完全刻画了我们所具有的对称类型。当且仅当一个流形上存在三个满足（5.26）的 Killing 场时，我们称它具有**球对称性**。

附录 C 讨论的 Frobenius 定理指出：若一组向量场对对易子封闭——集合中任意两个场的对易子都是集合内其他场的线性组合——那么这些向量场的积分曲线会拼合成流形的子流形，而所有这些向量场都定义在该流形上。子流形的维数可以小于向量的数量，也可以与之相等，但显然不可能更大。满足（5.26）的向量场当然会形成二维球面。由于这些向量场遍布整个空间，每一点都将恰好落在其中一个球面上。（严格说来是几乎每一点；下面会说明它为何可能并非绝对适用于每一点。）因此，我们说球对称流形可以按球面分叶。

用几个例子把这个说法落到实处。最简单的是平直三维 Euclidean 空间。选定一个原点后，$\mathbb R^3$ 显然关于绕此原点的旋转具有球对称性。在这种旋转下（即沿 Killing 向量场的流），点彼此移动，但每个点都留在一个与原点距离固定的 $S^2$ 上。如图 5.1 所示，这些球面对 $\mathbb R^3$ 形成分叶。当然，它们并没有真正对整个空间分叶，因为原点本身在旋转下保持不动。

**图 5.1**　用二维球面对 $\mathbb R^3$（除原点外）进行分叶。

<!-- source: PDF 212; printed: 199 -->

它不会在某个二维球面上移动。不过应该清楚，空间中几乎所有部分都得到了恰当分叶，而这对我们将已足够。

即使没有一个可供旋转围绕的原点，也可能具有球对称性。虫洞就是一例，其拓扑为 $\mathbb R\times S^2$。若压掉一个维度，并把二维球面画成圆，这种空间可能像图 5.2 那样。在这里，整个流形都能由二维球面分叶。

**图 5.2**　用二维球面对虫洞进行分叶。

既然具有 $\mathrm{SO}(3)$ 对称性的流形可以按球面分叶，第二步便是证明 $M$ 上的度规可以写成（5.24）的形式。所有球面的集合构成一个二维空间，因为一个四维时空正在由二维球面分叶。人们也许希望直接在每个球面上放置坐标 $(\theta,\phi)$，并在所有球面的集合上放置坐标 $(a,b)$，从而得到 $M$ 上的一套完整坐标 $(a,b,\theta,\phi)$。于是每个球面都由 $a=\text{常数}$、$b=\text{常数}$ 指定。我们知道圆球面的度规是 $\mathrm d\Omega^2$；因此这一策略足以保证，当 $a=a_0$、$b=b_0$ 固定（从而 $\mathrm da=\mathrm db=0$）时，受限度规具有形式

$$
\mathrm ds^2(a_0,b_0,\theta,\phi)=f(a_0,b_0)\mathrm d\Omega^2.
\tag{5.27}
$$

特别地，函数 $f$ 必须与 $\theta$、$\phi$ 无关，否则球面会凹凸不平，无法保持圆整。同样显然，当 $\theta=\theta_0$、$\phi=\phi_0$ 固定（从而 $\mathrm d\theta=\mathrm d\phi=0$）时，受限度规具有形式

$$
\mathrm ds^2(a,b,\theta_0,\phi_0)=\mathrm d\tau^2(a,b).
\tag{5.28}
$$

同理，任何对 $\theta$ 或 $\phi$ 的依赖都会破坏对称性，因为这会意味着横截球面的几何取决于你位于球面的什么位置。

然而，我们如此草率地写下这些坐标还不够谨慎，因为不能排除 $\mathrm da\,\mathrm d\theta+\mathrm d\theta\,\mathrm da$ 等交叉项。换句话说，必须恰当地对齐各球面，使沿垂直于某个球面的曲线行进时，$\theta$ 和 $\phi$ 保持不变。要保证这一点，就得更仔细地建立坐标。先考虑球面 $S_q$ 上的一点 $q$（注意，$q$ 不能是所有 Killing 向量都消失的退化点）。只在这个特定球面上放置坐标 $(\theta,\phi)$，暂时不要把它们延伸到整个流形。在 $S_q$ 的每一点 $p$，都有一个二维正交子空间 $O_p$；它由从 $p$ 出发、且在 $p$ 处的切向量与 $S_q$ 正交的测地线上的点组成。注意，存在一个使 $p$ 保持不动的旋转一维子群 $R_p$；事实上，这些旋转保持 $p$ 处任何垂直于 $S_q$ 的方向不变，所以整个二维曲面 $O_p$ 都在 $R_p$ 下保持不变。

考虑一点 $r$：它不在 $S_q$ 上，而在分叶中的另一个球面 $S_r$ 上，并且位于 $S_q$ 在 $p$ 处的正交二维曲面 $O_p$ 中。由于 $p$ 是任意的，这包括 $S_q$ 某邻域中的任意可能点 $r$。注意，$O_p$ 不仅与 $S_q$ 正交，也与 $S_r$ 正交。为说明这一点，考虑如下二维向量平面。

<!-- source: PDF 213; printed: 200 -->

$V_r$ 由切空间 $T_rM$ 中与二维曲面 $O_p$ 正交的向量组成。由于 $O_p$ 在旋转 $R_p$ 下保持不变，而这些旋转是等距映射、因而保持正交性，所以旋转必定把 $V_r$ 映到自身。$R_p$ 也把与 $S_q$ 相切的向量集合映到自身，因为这些旋转保持各球面不变。在四维中，同一点处同时与给定平面正交的两个平面必定是同一平面；因此，与 $S_r$ 相切的向量必定与 $O_p$ 正交。

存在唯一一条与 $S_q$ 正交并连接 $p$ 与 $r$ 的测地线。沿这些测地线行进给出映射 $f:S_q\to S_r$；至少在原球面的一个邻域内，它既是一一映射，也是满射。利用这一映射，我们在 $S_r$（以及类似地，在任何其他球面）上定义坐标：把 $p\in S_q$ 的坐标值 $(\theta,\phi)$ 赋给 $r\in S_r$。由此在整个流形上定义了 $(\theta,\phi)$。接着定义坐标 $(a,b)$：在 $T_qM$ 中选取生成正交空间 $O_q$ 的两个基向量 $S,T$。任何其他球面都由一条唯一的正交测地线与 $q$ 相连；这条测地线在 $T_qM$ 中的切向量为 $aS+bT$。把这些分量 $(a,b)$ 赋作那个球面上每一点的坐标。这样就在整个流形上定义了完整坐标组 $(a,b,\theta,\phi)$。

这些坐标下的度规满足（5.27）和（5.28）；余下要证明的是，沿球面的方向与横截方向之间不存在交叉项。例如，向量场 $\partial_a$ 应与 $\partial_\theta$ 正交，其他情形类似。直接验证这一点并不困难。先考虑 $S_r$ 中某点 $r$ 处的 $\partial_\theta$；这个向量是沿形如 $x^\mu(\theta)=(a_r,b_r,\theta,\phi_r)$ 的曲线的方向导数。由于 $a$、$b$ 沿曲线保持常数，整条曲线都留在球面 $S_r$ 上，所以 $\partial_\theta$ 与球面相切。与此同时，$\partial_a$ 是沿 $x^\mu(a)=(a,b_r,\theta_r,\phi_r)$ 的导数。由于这条曲线留在正交子空间 $O_r$ 中，$\partial_a$ 与 $S_r$ 正交，因而也与 $\partial_\theta$ 正交。类似论证保证 $(a,b)$ 与 $(\theta,\phi)$ 之间没有交叉项。

由此，我们成功地把球对称时空上的度规写成

$$
\begin{aligned}
\mathrm ds^2={}&g_{aa}(a,b)\mathrm da^2
+g_{ab}(a,b)(\mathrm da\,\mathrm db+\mathrm db\,\mathrm da)\\
&+g_{bb}(a,b)\mathrm db^2+r^2(a,b)\mathrm d\Omega^2.
\end{aligned}
\tag{5.29}
$$

这里 $r(a,b)$ 是某个尚未确定的函数，我们只是给它取了一个暗示性的名字。除非 $r$ 只依赖于 $a$，否则没有什么能阻止我们反演 $r(a,b)$，从而把坐标由 $(a,b)$ 改为 $(a,r)$；若 $r$ 只依赖于 $a$，也同样可以改用 $(b,r)$，所以无需单独讨论。于是度规为

$$
\begin{aligned}
\mathrm ds^2={}&g_{aa}(a,r)\mathrm da^2
+g_{ar}(a,r)(\mathrm da\,\mathrm dr+\mathrm dr\,\mathrm da)\\
&+g_{rr}(a,r)\mathrm dr^2+r^2\mathrm d\Omega^2.
\end{aligned}
\tag{5.30}
$$

下一步是寻找函数 $t(a,r)$，使得在 $(t,r)$ 坐标系中，度规没有 $\mathrm dt\,\mathrm dr+\mathrm dr\,\mathrm dt$ 交叉项。注意

$$
\mathrm dt=\frac{\partial t}{\partial a}\mathrm da+\frac{\partial t}{\partial r}\mathrm dr.
\tag{5.31}
$$

<!-- source: PDF 214; printed: 201 -->

因此

$$
\mathrm dt^2
=\left(\frac{\partial t}{\partial a}\right)^2\mathrm da^2
+\left(\frac{\partial t}{\partial a}\right)
 \left(\frac{\partial t}{\partial r}\right)
 (\mathrm da\,\mathrm dr+\mathrm dr\,\mathrm da)
+\left(\frac{\partial t}{\partial r}\right)^2\mathrm dr^2.
\tag{5.32}
$$

我们想把度规（5.30）的前三项换成

$$
m\,\mathrm dt^2+n\,\mathrm dr^2,
\tag{5.33}
$$

其中 $m$、$n$ 是某些函数。这等价于要求

$$
m\left(\frac{\partial t}{\partial a}\right)^2=g_{aa},
\tag{5.34}
$$

$$
n+m\left(\frac{\partial t}{\partial r}\right)^2=g_{rr},
\tag{5.35}
$$

以及

$$
m\left(\frac{\partial t}{\partial a}\right)
 \left(\frac{\partial t}{\partial r}\right)=g_{ar}.
\tag{5.36}
$$

因此，我们恰好有三个方程来决定三个未知量 $t(a,r)$、$m(a,r)$ 和 $n(a,r)$，只差 $t$ 的初始条件。（当然，它们是由未知函数 $g_{aa}$、$g_{ar}$ 和 $g_{rr}$ 表示的“已确定”函数，在这个意义上仍未真正确定。）所以可以把度规写成

$$
\mathrm ds^2=m(t,r)\mathrm dt^2+n(t,r)\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.37}
$$

到这里为止，两个坐标 $t$ 与 $r$ 的唯一区别，是我们选择让 $r$ 乘在二维球面的度规前。这个选择来自平直 Minkowski 空间度规的启发，后者可以写为 $\mathrm ds^2=-\mathrm dt^2+\mathrm dr^2+r^2\mathrm d\Omega^2$。我们知道所讨论的时空是 Lorentz 时空，所以 $m$ 与 $n$ 中必有一个为负。选择 $\mathrm dt^2$ 的系数 $m$ 为负。这个选择并非可以随意作出，后面事实上会看到它可能失效；眼下先作此假设。它并非完全不合理，因为 Minkowski 空间本身具有球对称性，因此会由（5.37）描述。作此选择后，可以用新函数 $\alpha$、$\beta$ 代替 $m$、$n$，使

$$
\mathrm ds^2=-e^{2\alpha(t,r)}\mathrm dt^2+e^{2\beta(t,r)}\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.38}
$$

单靠几何最多只能做到这里；球对称性显然不足以对函数 $\alpha(t,r)$ 和 $\beta(t,r)$ 作出任何实质性断言。因此下一步必须真正求解 Einstein 方程；接下来的步骤与此前推导非常接近。

<!-- source: PDF 215; printed: 202 -->

具体说来，它们沿用第 5.1 节的做法；当时研究的是与（5.38）相似、但额外假定与时间无关的度规。现在会看到，这一假定其实多余，因为解必然是静态的。

度规（5.38）的非零 Christoffel 符号为

$$
\begin{aligned}
\Gamma^t{}_{tt}&=\partial_t\alpha,
&\Gamma^t{}_{tr}&=\partial_r\alpha,
&\Gamma^t{}_{rr}&=e^{2(\beta-\alpha)}\partial_t\beta,\\
\Gamma^r{}_{tt}&=e^{2(\alpha-\beta)}\partial_r\alpha,
&\Gamma^r{}_{tr}&=\partial_t\beta,
&\Gamma^r{}_{rr}&=\partial_r\beta,\\
\Gamma^\theta{}_{r\theta}&=\frac1r,
&\Gamma^r{}_{\theta\theta}&=-re^{-2\beta},
&\Gamma^\phi{}_{r\phi}&=\frac1r,\\
\Gamma^r{}_{\phi\phi}&=-re^{-2\beta}\sin^2\theta,
&\Gamma^\theta{}_{\phi\phi}&=-\sin\theta\cos\theta,
&\Gamma^\phi{}_{\theta\phi}&=\frac{\cos\theta}{\sin\theta}.
\end{aligned}
\tag{5.39}
$$

> **作者勘误（印刷页 202）**：原文在（5.39）后多出一个 “following”；此处已按作者官方勘误删除，不影响公式。

Riemann 张量的非零分量为

$$
\begin{aligned}
R^t{}_{rtr}={}&e^{2(\beta-\alpha)}
\left[\partial_t^2\beta+(\partial_t\beta)^2-\partial_t\alpha\,\partial_t\beta\right]\\
&+\left[\partial_r\alpha\,\partial_r\beta-\partial_r^2\alpha-(\partial_r\alpha)^2\right],\\
R^t{}_{\theta t\theta}&=-re^{-2\beta}\partial_r\alpha,\\
R^t{}_{\phi t\phi}&=-re^{-2\beta}\sin^2\theta\,\partial_r\alpha,\\
R^t{}_{\theta r\theta}&=-re^{-2\alpha}\partial_t\beta,\\
R^t{}_{\phi r\phi}&=-re^{-2\alpha}\sin^2\theta\,\partial_t\beta,\\
R^r{}_{\theta r\theta}&=re^{-2\beta}\partial_r\beta,\\
R^r{}_{\phi r\phi}&=re^{-2\beta}\sin^2\theta\,\partial_r\beta,\\
R^\theta{}_{\phi\theta\phi}&=(1-e^{-2\beta})\sin^2\theta.
\end{aligned}
\tag{5.40}
$$

Ricci 张量为

$$
\begin{aligned}
R_{tt}={}&\left[\partial_t^2\beta+(\partial_t\beta)^2-\partial_t\alpha\,\partial_t\beta\right]\\
&+e^{2(\alpha-\beta)}\left[\partial_r^2\alpha+(\partial_r\alpha)^2
-\partial_r\alpha\,\partial_r\beta+\frac2r\partial_r\alpha\right],\\
R_{rr}={}&-\left[\partial_r^2\alpha+(\partial_r\alpha)^2
-\partial_r\alpha\,\partial_r\beta-\frac2r\partial_r\beta\right]\\
&+e^{2(\beta-\alpha)}\left[\partial_t^2\beta+(\partial_t\beta)^2
-\partial_t\alpha\,\partial_t\beta\right],\\
R_{tr}&=\frac2r\partial_t\beta,\\
R_{\theta\theta}&=e^{-2\beta}\bigl[r(\partial_r\beta-\partial_r\alpha)-1\bigr]+1,\\
R_{\phi\phi}&=R_{\theta\theta}\sin^2\theta.
\end{aligned}
\tag{5.41}
$$

我们的任务是求解真空 Einstein 方程 $R_{\mu\nu}=0$。由 $R_{tr}=0$ 得

$$
\partial_t\beta=0.
\tag{5.42}
$$

<!-- source: PDF 216; printed: 203 -->

对 $R_{\theta\theta}=0$ 取时间导数，并使用 $\partial_t\beta=0$，得到

$$
\partial_t\partial_r\alpha=0.
\tag{5.43}
$$

因此可以写成

$$
\begin{aligned}
\beta&=\beta(r),\\
\alpha&=f(r)+g(t).
\end{aligned}
\tag{5.44}
$$

度规（5.38）的第一项于是为 $-e^{2f(r)}e^{2g(t)}\mathrm dt^2$。但我们总可以通过 $\mathrm dt\to e^{-g(t)}\mathrm dt$ 重新定义时间坐标；换句话说，可以自由选择 $t$ 使 $g(t)=0$，于是 $\alpha(t,r)=f(r)$。因此

$$
\mathrm ds^2=-e^{2\alpha(r)}\mathrm dt^2+e^{2\beta(r)}\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.45}
$$

所有度规分量都与坐标 $t$ 无关。由此证明了一个关键结果：**任意球对称真空度规都具有一个类时 Killing 向量。**

这个性质非常有趣，因而拥有自己的名称：若一个度规具有在无穷远附近为类时的 Killing 向量，就称它是**稳态的**（stationary）。（包括 Schwarzschild 在内，在无穷远处为类时的 Killing 向量，常会在内部某处变为类空。）对于稳态度规，可以选择坐标 $(t,x^1,x^2,x^3)$，使 Killing 向量为 $\partial_t$，并且度规分量与 $t$ 无关；这种坐标下，稳态度规的一般形式为

$$
\mathrm ds^2=g_{00}(\vec x)\mathrm dt^2
+g_{0i}(\vec x)(\mathrm dt\,\mathrm dx^i+\mathrm dx^i\,\mathrm dt)
+g_{ij}(\vec x)\mathrm dx^i\mathrm dx^j.
\tag{5.46}
$$

还有一个更强的性质：如果度规具有与一族超曲面正交的类时 Killing 向量，就称它是**静态的**（static）。（关于超曲面的更多细节参见附录 D。）在第 4 章习题中，你证明了超曲面正交向量场 $v^\mu$ 满足

$$
v_{[\mu}\nabla_\nu v_{\sigma]}=0.
\tag{5.47}
$$

不过还有一个更简单的判据：若已经选择适配坐标，使分量 $g_{\mu\nu}$ 都与 $t$ 无关，那么与 Killing 向量正交的曲面由 $t=\text{常数}$ 定义。操作上，这意味着（5.46）中的时间—空间交叉项不存在；一般的静态度规可以写成

$$
\mathrm ds^2=g_{00}(\vec x)\mathrm dt^2+g_{ij}(\vec x)\mathrm dx^i\mathrm dx^j.
\tag{5.48}
$$

这个形式中只出现时间坐标 $t$ 的偶次幂；因此，“静态”的另一个定义是“稳态，并且在时间反演 $t\to-t$ 下不变”。度规（5.45）显然是静态的。可以把稳态理解为“每一时刻都在做完全相同的事情”，把静态理解为“

<!-- source: PDF 217; printed: 204 -->

什么事情都没有在做”。例如，静态球对称度规（5.45）描述不旋转的恒星或黑洞；始终以同样方式旋转的系统，则由稳态但不静态的度规描述。

注意，（5.45）与（5.11）完全相同，后者正是第 5.1 节最初用来推导 Schwarzschild 解的度规。由此证明了 Birkhoff 定理：唯一的球对称真空解就是 Schwarzschild 度规，

$$
\mathrm ds^2=-\left(1-\frac{2GM}{r}\right)\mathrm dt^2
+\left(1-\frac{2GM}{r}\right)^{-1}\mathrm dr^2+r^2\mathrm d\Omega^2,
\tag{5.49}
$$

正如所承诺的那样。

除要求 Schwarzschild 度规的源具有球对称性外，我们没有对源作任何说明。特别地，我们没有要求源本身静态；只要坍缩保持对称，它可以是一颗正在坍缩的恒星。因此，像超新星爆发这样的过程，如果非常接近球对称——现实中的超新星究竟能多接近球对称，可能取决于其起源——那么与通过其他渠道释放的能量相比，它产生的引力辐射极少。在电磁学中也会得到同样结果：球形电荷分布周围的电磁场与电荷的径向分布无关。

## 5.3 奇点

在考察试验粒子在 Schwarzschild 几何中的行为之前，应该先谈谈奇点。从（5.1）的形式看，度规系数在 $r=0$ 与 $r=2GM$ 处变为无穷大——这似乎表明出了问题。当然，度规系数是依赖坐标的量，不能过分看重它们的数值；完全可能出现一种坐标奇点，它只源于某个特定坐标系失效，而非底层流形失效。平面极坐标的原点就是一个例子：度规 $\mathrm ds^2=\mathrm dr^2+r^2\mathrm d\theta^2$ 在那里退化，逆度规分量 $g^{\theta\theta}=r^{-2}$ 发散，尽管流形的这一点与其他点没有任何不同。

要寻找怎样的坐标无关信号，才能警告我们几何已经失控？事实证明，这个问题很难回答，关于广义相对论中奇点的本性已有整本专著。这里不深入讨论，只采用一个简单判据来判断何时出了问题：曲率变为无穷大。曲率由 Riemann 张量度量，而张量的分量依赖坐标，因此很难直接判断一个张量何时无穷大。不过，可以从曲率构造各种标量；由于标量与坐标无关，说它们变为无穷大就有明确意义。最简单的这类标量是 Ricci 标量。

<!-- source: PDF 218; printed: 205 -->

它是 $R=g^{\mu\nu}R_{\mu\nu}$；还可以构造更高阶标量，例如 $R^{\mu\nu}R_{\mu\nu}$、$R^{\mu\nu\rho\sigma}R_{\mu\nu\rho\sigma}$、$R_{\mu\nu\rho\sigma}R^{\rho\sigma\lambda\tau}R_{\lambda\tau}{}^{\mu\nu}$，等等。若趋近某一点时，这些标量中的任意一个（无需全部）趋于无穷大，我们便把该点视为曲率奇点。还应检查该点并非无限遥远；也就是说，沿某条曲线行进有限距离便能到达它。

由此得到一个足以判定某点为奇点的条件。不过它不是必要条件；一般来说，证明一个给定点没有奇性更困难。为满足本章需要，我们只检验测地线在相关点是否行为良好；若行为良好，就把该点视为非奇异。对于 Schwarzschild 度规（5.1），直接计算得到

$$
R^{\mu\nu\rho\sigma}R_{\mu\nu\rho\sigma}
=\frac{48G^2M^2}{r^6}.
\tag{5.50}
$$

这足以使我们相信，$r=0$ 代表一个货真价实的奇点。

另一个问题点是 Schwarzschild 半径 $r=2GM$。可以检验，没有任何曲率不变量在那里发散。于是我们开始认为，它实际上并不奇异，只是坐标系选得不好。若有可能，最好的做法是变换到更合适的坐标。很快就会看到，这里确实可以做到；在 Schwarzschild 度规中，曲面 $r=2GM$ 的行为十分良好（同时又很有意思）——它划出了黑洞的事件视界。

稍微担心过奇点之后，还应指出：在日常情形下，Schwarzschild 半径以内的度规行为几乎没有实际影响。我们推导的解只在真空中有效，预期它适用于恒星等球状物体的外部。以太阳为例，物体半径延伸到

$$
R_\odot=10^6GM_\odot.
\tag{5.51}
$$

所以 $r=2GM_\odot$ 深处于太阳内部，那里并不适用 Schwarzschild 度规。真实的恒星内部解会把外部 Schwarzschild 度规与一个在原点完全光滑的内部度规匹配起来。不过，确有一些物体需要完整的 Schwarzschild 度规——黑洞。因此，本章将让想象力远远越出太阳系。

## 5.4 Schwarzschild 时空中的测地线

为了更充分地理解 Schwarzschild 度规，第一步是考察测地线的行为。需要用到 Schwarzschild 度规的非零 Christoffel 符号。

<!-- source: PDF 219; printed: 206 -->

$$
\begin{aligned}
\Gamma^r{}_{tt}&=\frac{GM}{r^3}(r-2GM),
&\Gamma^r{}_{rr}&=-\frac{GM}{r(r-2GM)},
&\Gamma^t{}_{tr}&=\frac{GM}{r(r-2GM)},\\
\Gamma^\theta{}_{r\theta}&=\frac1r,
&\Gamma^r{}_{\theta\theta}&=-(r-2GM),
&\Gamma^\phi{}_{r\phi}&=\frac1r,\\
\Gamma^r{}_{\phi\phi}&=-(r-2GM)\sin^2\theta,
&\Gamma^\theta{}_{\phi\phi}&=-\sin\theta\cos\theta,
&\Gamma^\phi{}_{\theta\phi}&=\frac{\cos\theta}{\sin\theta}.
\end{aligned}
\tag{5.52}
$$

因此，测地线方程化为下面四个方程，其中 $\lambda$ 是仿射参数：

$$
\begin{aligned}
&\frac{\mathrm d^2t}{\mathrm d\lambda^2}
+\frac{2GM}{r(r-2GM)}\frac{\mathrm dr}{\mathrm d\lambda}
\frac{\mathrm dt}{\mathrm d\lambda}=0,\\[2mm]
&\frac{\mathrm d^2r}{\mathrm d\lambda^2}
+\frac{GM}{r^3}(r-2GM)\left(\frac{\mathrm dt}{\mathrm d\lambda}\right)^2
-\frac{GM}{r(r-2GM)}\left(\frac{\mathrm dr}{\mathrm d\lambda}\right)^2\\
&\qquad -(r-2GM)\left[
\left(\frac{\mathrm d\theta}{\mathrm d\lambda}\right)^2
+\sin^2\theta\left(\frac{\mathrm d\phi}{\mathrm d\lambda}\right)^2
\right]=0,\\[2mm]
&\frac{\mathrm d^2\theta}{\mathrm d\lambda^2}
+\frac2r\frac{\mathrm d\theta}{\mathrm d\lambda}
\frac{\mathrm dr}{\mathrm d\lambda}
-\sin\theta\cos\theta\left(\frac{\mathrm d\phi}{\mathrm d\lambda}\right)^2=0,\\[2mm]
&\frac{\mathrm d^2\phi}{\mathrm d\lambda^2}
+\frac2r\frac{\mathrm d\phi}{\mathrm d\lambda}
\frac{\mathrm dr}{\mathrm d\lambda}
+2\frac{\cos\theta}{\sin\theta}
\frac{\mathrm d\theta}{\mathrm d\lambda}
\frac{\mathrm d\phi}{\mathrm d\lambda}=0.
\end{aligned}
\tag{5.53}
$$

看来几乎不可能单凭观察就解出这组耦合方程。幸运的是，Schwarzschild 度规的高度对称性大大简化了任务。我们知道它有四个 Killing 向量：三个来自球对称性，一个来自时间平移。对自由粒子而言，每个 Killing 向量都导出一个运动常数。若 $K^\mu$ 是 Killing 向量，则

$$
K_\mu\frac{\mathrm dx^\mu}{\mathrm d\lambda}=\text{常数}.
\tag{5.54}
$$

此外，测地线总还有另一个运动常数：测地线方程与度规相容性共同蕴含，量

$$
\epsilon=-g_{\mu\nu}
\frac{\mathrm dx^\mu}{\mathrm d\lambda}
\frac{\mathrm dx^\nu}{\mathrm d\lambda}
\tag{5.55}
$$

沿路径保持不变。（对任何轨迹，都可以选择参数 $\lambda$ 使 $\epsilon$ 为常数；这里指出的只是，这样的选择与沿测地线的仿射参数化相容。）对于有质量粒子，通常选择 $\lambda=\tau$，于是这个关系就是 $\epsilon=-g_{\mu\nu}U^\mu U^\nu=+1$。无质量粒子沿类光轨迹运动，总有 $\epsilon=0$。

<!-- source: PDF 220; printed: 207 -->

在这种情况下，方程并不固定参数 $\lambda$。如第 3.4 节所述，把类光测地线上的 $\lambda$ 归一化，使四动量等于四速度，即 $p^\mu=\mathrm dx^\mu/\mathrm d\lambda$，是很方便的。我们也可能关心类空测地线（尽管它们不对应粒子的路径），对此选择 $\epsilon=-1$。

先不急着写出与 Killing 向量对应的四个守恒量的显式表达式，来想想它们告诉了我们什么。它们所代表的对称性也存在于平直时空，在那里，由这些对称性产生的守恒量十分熟悉。时间平移不变性导致能量守恒；空间旋转不变性导致角动量三个分量守恒。Schwarzschild 度规中基本也是如此。可以把角动量看成一个三维向量，具有大小（一个分量）和方向（两个分量）。角动量方向守恒意味着粒子在一个平面内运动。可以选择这个平面作为坐标系的赤道面；如果粒子起初不在该平面内，就旋转坐标，直到它位于其中。因此，对单个粒子而言，导致角动量方向守恒的两个 Killing 向量只意味着可以选择

$$
\theta=\frac\pi2.
\tag{5.56}
$$

余下两个 Killing 向量分别对应能量和角动量大小。能量来自类时 Killing 向量

$$
K^\mu=(\partial_t)^\mu=(1,0,0,0).
\tag{5.57}
$$

其守恒量等于角动量大小的 Killing 向量是

$$
R^\mu=(\partial_\phi)^\mu=(0,0,0,1).
\tag{5.58}
$$

在这两种情形下，降低指标都很方便，得到

$$
K_\mu=\left(-\left(1-\frac{2GM}{r}\right),0,0,0\right)
\tag{5.59}
$$

以及

$$
R_\mu=(0,0,0,r^2\sin^2\theta).
\tag{5.60}
$$

由于（5.56）意味着在所关心的测地线上 $\sin\theta=1$，两个守恒量为

$$
E=-K_\mu\frac{\mathrm dx^\mu}{\mathrm d\lambda}
=\left(1-\frac{2GM}{r}\right)\frac{\mathrm dt}{\mathrm d\lambda}
\tag{5.61}
$$

<!-- source: PDF 221; printed: 208 -->

以及

$$
L=R_\mu\frac{\mathrm dx^\mu}{\mathrm d\lambda}
=r^2\frac{\mathrm d\phi}{\mathrm d\lambda}.
\tag{5.62}
$$

对于无质量粒子，可以把它们理解为守恒的能量和角动量；对于有质量粒子，则是粒子的单位质量守恒能量与单位质量守恒角动量。下一章讨论旋转黑洞时，会用 $E$ 与 $L$ 表示实际能量与角动量，不再表示“单位质量”的量；其含义可由上下文判断。注意，（5.62）的恒定性就是 Kepler 第二定律在广义相对论中的对应物——相等时间内扫过相等面积。

回忆第 3.4 节：在那里我们指出，四动量为 $p^\mu$ 的粒子，由四速度为 $U^\mu$ 的观测者测得的能量是 $-p_\mu U^\mu$。即使令观测者保持静止（$U^i=0$），这个量也不等于（5.61），甚至不与之成正比。数学上的原因是，四速度要归一化到 $U_\mu U^\mu=-1$，而 Killing 向量 $K^\mu$ 并未如此归一化；若试图那样归一化，它便不再满足 Killing 方程。更深一层看，$-p_\mu U^\mu$ 可以理解为粒子的惯性或动能，而 $-p_\mu K^\mu$ 是总守恒能量，其中包括引力场造成的势能。引力势能的概念并非总能良好定义，但存在类时 Killing 向量时，总能量定义良好。眼下会用 $E$ 帮助刻画 Schwarzschild 测地线；稍后还会把无质量粒子的 $-p_\mu U^\mu$ 视为观测到的光子频率，用它描述引力红移。

守恒量 $E$ 与 $L$ 合在一起，为理解 Schwarzschild 几何中的粒子轨道提供了方便方法。展开（5.55）中 $\epsilon$ 的表达式，得到

$$
-\left(1-\frac{2GM}{r}\right)
\left(\frac{\mathrm dt}{\mathrm d\lambda}\right)^2
+\left(1-\frac{2GM}{r}\right)^{-1}
\left(\frac{\mathrm dr}{\mathrm d\lambda}\right)^2
+r^2\left(\frac{\mathrm d\phi}{\mathrm d\lambda}\right)^2
=-\epsilon.
\tag{5.63}
$$

把它乘以 $(1-2GM/r)$，并使用 $E$ 与 $L$ 的表达式，得到

$$
-E^2+\left(\frac{\mathrm dr}{\mathrm d\lambda}\right)^2
+\left(1-\frac{2GM}{r}\right)\left(\frac{L^2}{r^2}+\epsilon\right)=0.
\tag{5.64}
$$

这是实质进展：我们把一组杂乱的耦合方程化成了关于 $r(\lambda)$ 的一个方程。将它改写为

$$
\frac12\left(\frac{\mathrm dr}{\mathrm d\lambda}\right)^2+V(r)=\mathcal E
\tag{5.65}
$$

会显得更漂亮。

<!-- source: PDF 222; printed: 209 -->

其中

$$
V(r)=\frac12\epsilon-\epsilon\frac{GM}{r}
+\frac{L^2}{2r^2}-\frac{GML^2}{r^3},
\tag{5.66}
$$

并且

$$
\mathcal E=\frac12E^2.
\tag{5.67}
$$

（5.65）恰好是一个单位质量经典粒子以“能量” $\mathcal E$ 在一维势 $V(r)$ 中运动的方程。看上去略显混乱，但还不算太糟：单位质量守恒能量是 $E$，而坐标 $r$ 的有效势问题所对应的是 $\mathcal E=E^2/2$。

当然，真实物理情形与经典粒子在一维中运动很不相同；这里研究的轨迹是围绕恒星或其他物体的轨道，如图 5.3 所示。感兴趣的不只有 $r(\lambda)$，还有 $t(\lambda)$ 与 $\phi(\lambda)$。尽管如此，只要理解轨道的径向行为，就能在很大程度上理解所有轨道；把这一行为化为熟悉的可解问题会非常有帮助。

**图 5.3**　恒星周围的轨道可以用半径 $r$ 关于参数 $\lambda$ 的函数来刻画。

在 Newton 引力中对轨道作类似分析，也会得到相似结果：一般方程（5.65）相同，但有效势（5.66）没有最后一项。（注意，这个方程并非 $1/r$ 的幂级数，而是精确式。）势（5.66）的第一项只是常数，第二项恰好对应 Newton 引力势，第三项是角动量的贡献，在 Newton 引力与广义相对论中形式相同。最后一项是广义相对论的贡献；事实将表明，它会产生巨大差异，尤其在 $r$ 很小时。

来考察不同可能轨道的有效势，如图 5.4 和图 5.5 所示。不同 $L$ 值对应不同的曲线 $V(r)$；对任一曲线，只要比较 $\mathcal E$ 与 $V(r)$ 就能判断轨道行为。一般来说，粒子会在势中运动，直到到达 $V(r)=\mathcal E$ 的“转向点”，届时它将开始

<!-- source: PDF 223; printed: 210 -->

**图 5.4**　Newton 引力中的有效势。图中画出五条曲线，对应所标出的单位质量角动量 $L$ 值，并取 $GM=1$。注意，对足够大的能量，每条轨道都会到达一个转向点并返回无穷远。左图：Newton 引力、无质量粒子；右图：Newton 引力、有质量粒子。

朝另一个方向运动。有时不存在可遇到的转向点，粒子便会一直前进。另一些情形中，粒子可能只在半径 $r_c=\text{常数}$ 的圆轨道上运动；这可发生在势平坦的位置，即 $\mathrm dV/\mathrm dr=0$。对（5.66）求导，圆轨道出现的条件是

$$
\epsilon GMr_c^2-L^2r_c+3GML^2\gamma=0,
\tag{5.68}
$$

其中在 Newton 引力中 $\gamma=0$，在广义相对论中 $\gamma=1$。若圆轨道对应势的极小值，它就是稳定的；若对应极大值，则不稳定。非圆的束缚轨道会围绕稳定圆轨道的半径振荡。

转向 Newton 引力，圆轨道出现在

$$
r_c=\frac{L^2}{\epsilon GM}.
\tag{5.69}
$$

对于无质量粒子，$\epsilon=0$，不存在圆轨道；这与图 5.4 左图一致，该图显示根本不存在任何束缚轨道。尽管在极坐标中不那么直观，Newton 理论中的无质量粒子会沿直线运动，因为作用在无质量粒子上的 Newton 引力为零。当然，无质量粒子在 Newton 理论中的地位本身就有些成问题，所以依所作假设不同，可能得到不同答案。用有效势语言说，给定能量 $E$ 的光子从 $r=\infty$ 入射，并逐渐“减速”（实际是 $\mathrm dr/\mathrm d\lambda$ 减小，光速本身并未改变），直到它到达

<!-- source: PDF 224; printed: 211 -->

**图 5.5**　广义相对论中的有效势。仍画出五条曲线，对应所标出的单位质量角动量 $L$ 值，并取 $GM=1$。在广义相对论中，最内侧圆轨道的半径不小于 $3GM$；任何落到这个半径以内的测地线轨道，都会继续到达 $r=0$。左图：广义相对论、无质量粒子；右图：广义相对论、有质量粒子。

转向点；随后它开始向外运动，返回 $r=\infty$。较小的 $L$ 值使光子在向外运动前更接近引力物体，这只表示轨迹最初瞄得更靠近引力物体。对于有质量粒子，半径（5.69）处存在稳定圆轨道，也存在围绕该半径振荡的束缚轨道。若能量大于渐近值 $E=1$，轨道不受束缚，描述一个靠近恒星再远离的粒子。Newton 理论中的轨道是圆锥曲线：束缚轨道为圆或椭圆，非束缚轨道为抛物线或双曲线；这里不作证明。

广义相对论中的情形有所不同，不过差异只在 $r$ 足够小时显现。两种理论的差别来自 $-GML^2/r^3$ 项，因此当 $r\to\infty$ 时，两者的行为相同；而当 $r\to0$ 时，势趋于 $-\infty$，不像 Newton 情形那样趋于 $+\infty$。在 $r=2GM$ 处，势总是零；这个半径以内是黑洞，稍后会更深入地讨论。对于无质量粒子，总存在一道势垒（$L=0$ 时例外，此时势恒为零），但能量足够高的光子仍会越过势垒，被不可阻挡地拖向中心。这里的“能量足够高”指“相对于其角动量足够高”——光子频率其实无关紧要，重要的只有它指向的方向。势垒顶部存在不稳定圆轨道。令 $\epsilon=0$、$\gamma=1$，容易从（5.68）解得

$$
r_c=3GM.
\tag{5.70}
$$

图 5.5 左图印证了这一点：对任意 $L$，$V(r)$ 都在 $r=3GM$ 处取得极大值。这意味着光子可以永远在这个半径上作圆周运动，但任何扰动都会使它飞向 $r=0$ 或 $r=\infty$。

<!-- source: PDF 225; printed: 212 -->

对于有质量粒子，依角动量不同，又会出现不同区间。圆轨道位于

$$
r_c=\frac{L^2\pm\sqrt{L^4-12G^2M^2L^2}}{2GM}.
\tag{5.71}
$$

当 $L$ 很大时，有两条圆轨道，一条稳定、一条不稳定。在 $L\to\infty$ 极限下，它们的半径为

$$
r_c=\frac{L^2\pm L^2(1-6G^2M^2/L^2)}{2GM}
=\left(\frac{L^2}{GM},\,3GM\right).
\tag{5.72}
$$

在这个极限下，稳定圆轨道移得更远，不稳定圆轨道则趋近 $3GM$，与无质量情形平行。减小 $L$ 时，两条圆轨道彼此靠近；当（5.71）中的判别式为零时，它们重合，即

$$
L=\sqrt{12}\,GM,
\tag{5.73}
$$

此时

$$
r_c=6GM.
\tag{5.74}
$$

对于更小的 $L$，圆轨道完全消失。因此，在 Schwarzschild 度规中，稳定圆轨道的最小可能半径为 $6GM$。还存在从无穷远入射、转向后返回的非束缚轨道，以及围绕稳定圆轨道半径振荡的非圆束缚轨道。注意，这类轨道在 Newton 引力中会精确描述圆锥曲线，在广义相对论中却不会；要证明这一点，还需解出 $\mathrm d\phi/\mathrm d\lambda$ 的方程。最后，还有从无穷远入射并一路到达 $r=0$ 的轨道：当能量高于势垒时会出现；若 $L<\sqrt{12}GM$，势垒完全消失，也会出现。

由此发现，Schwarzschild 解在 $r>6GM$ 处具有稳定圆轨道，在 $3GM<r<6GM$ 处具有不稳定圆轨道。必须记住，这些结论只针对测地线；只要保持在 $r=2GM$ 之外，受加速的粒子完全可以降到 $r=3GM$ 以下再出来。

## 5.5 实验检验

广义相对论的大多数实验检验都涉及太阳系中试验粒子的运动，因此涉及 Schwarzschild 度规的测地线。Einstein

<!-- source: PDF 226; printed: 213 -->

**图 5.6**　广义相对论中的轨道描绘出不断进动的椭圆。

提出了三项检验：光线偏折、近日点进动和引力红移。光线偏折可在弱场极限下观测，所以留到第 7 章讨论。本节讨论近日点进动与引力红移。（椭圆轨道的近日点是最靠近太阳的点；绕地球或恒星运行的轨道则分别使用近地点或近星点这样的名称。）

近日点进动反映了这样一个事实：广义相对论中的非圆轨道并非完美闭合的椭圆；在很好的近似下，它们是不断进动的椭圆，描绘出图 5.6 所示的花形图案。尽管概念上很简单，计算近日点进动率却略显繁琐；这里沿用 d'Inverno（1992）的做法。策略是把径向坐标 $r$ 的演化写成角坐标 $\phi$ 的函数。对完美椭圆而言，$r(\phi)$ 应以 $2\pi$ 为周期，这反映出每圈轨道的近日点都出现在相同的角位置。借助微扰理论，可以说明广义相对论如何略微改变周期并造成进动。

从 Schwarzschild 度规中有质量粒子的径向运动方程（5.65）出发。为了得到 $\mathrm dr/\mathrm d\phi$ 的方程，乘以

$$
\left(\frac{\mathrm d\phi}{\mathrm d\lambda}\right)^{-2}
=\frac{r^4}{L^2},
\tag{5.75}
$$

从而得到

$$
\left(\frac{\mathrm dr}{\mathrm d\phi}\right)^2
+\frac1{L^2}r^4-\frac{2GM}{L^2}r^3+r^2-2GMr
=\frac{2\mathcal E}{L^2}r^4.
\tag{5.76}
$$

解这个方程时，有两个技巧很有用。第一个是定义新变量

<!-- source: PDF 227; printed: 214 -->

$$
x=\frac{L^2}{GMr}.
\tag{5.77}
$$

由（5.69）可知，在 Newton 圆轨道上 $x=1$。运动方程（5.76）成为

$$
\left(\frac{\mathrm dx}{\mathrm d\phi}\right)^2
+\frac{L^2}{G^2M^2}-2x+x^2-\frac{2G^2M^2}{L^2}x^3
=\frac{2\mathcal E L^2}{G^2M^2}.
\tag{5.78}
$$

第二个技巧是对 $\phi$ 求导，得到关于 $x(\phi)$ 的二阶方程：

$$
\frac{\mathrm d^2x}{\mathrm d\phi^2}-1+x
=\frac{3G^2M^2}{L^2}x^2.
\tag{5.79}
$$

在 Newton 计算中，最后一项不存在，可以精确解出 $x$；这里则可把它当作微扰。

把 $x$ 展开成 Newton 解加一个小偏差：

$$
x=x_0+x_1.
\tag{5.80}
$$

（5.79）的零阶部分为

$$
\frac{\mathrm d^2x_0}{\mathrm d\phi^2}-1+x_0=0,
\tag{5.81}
$$

一阶部分为

$$
\frac{\mathrm d^2x_1}{\mathrm d\phi^2}+x_1
=\frac{3G^2M^2}{L^2}x_0^2.
\tag{5.82}
$$

零阶方程的解可以写成

$$
x_0=1+e\cos\phi.
\tag{5.83}
$$

这是 Newton 或 Kepler 的标准结果；它描述一个完美椭圆，其中 $e$ 是离心率。椭圆由半长轴 $a$ 与半短轴 $b$ 指定：前者是从中心到椭圆最远点的距离，后者是从中心到最近点的距离。离心率满足 $e^2=1-b^2/a^2$。

把 Newton 解代入一阶方程（5.82），得到

$$
\begin{aligned}
\frac{\mathrm d^2x_1}{\mathrm d\phi^2}+x_1
&=\frac{3G^2M^2}{L^2}(1+e\cos\phi)^2\\
&=\frac{3G^2M^2}{L^2}\left[
\left(1+\frac12e^2\right)+2e\cos\phi+\frac12e^2\cos2\phi
\right].
\end{aligned}
\tag{5.84}
$$

<!-- source: PDF 228; printed: 215 -->

为解这个方程，注意

$$
\frac{\mathrm d^2}{\mathrm d\phi^2}(\phi\sin\phi)
+\phi\sin\phi=2\cos\phi
\tag{5.85}
$$

以及

$$
\frac{\mathrm d^2}{\mathrm d\phi^2}(\cos2\phi)+\cos2\phi
=-3\cos2\phi.
\tag{5.86}
$$

与（5.84）比较，可见一个解是

$$
x_1=\frac{3G^2M^2}{L^2}\left[
\left(1+\frac12e^2\right)+e\phi\sin\phi-\frac16e^2\cos2\phi
\right],
\tag{5.87}
$$

你可以自行检验。这里三项的性质各不相同：第一项只是常量位移，第三项围绕零振荡；重要效应包含在第二项中，它会在连续多圈轨道中累积。因此把这一项与零阶解合并，写成

$$
x=1+e\cos\phi+\frac{3G^2M^2e}{L^2}\phi\sin\phi.
\tag{5.88}
$$

即便对微扰后的方程而言，这也不是完整解，但它包含了我们关心的部分。特别地，这个 $x$ 的表达式可以方便地改写成一个角周期略微偏离 $2\pi$ 的椭圆方程：

$$
x=1+e\cos[(1-\alpha)\phi],
\tag{5.89}
$$

其中引入

$$
\alpha=\frac{3G^2M^2}{L^2}.
\tag{5.90}
$$

把 $\cos[(1-\alpha)\phi]$ 对小参数 $\alpha$ 作幂级数展开，就能看出（5.88）与（5.89）的等价性：

$$
\begin{aligned}
\cos[(1-\alpha)\phi]
&=\cos\phi+\alpha\left.
\frac{\mathrm d}{\mathrm d\alpha}\cos[(1-\alpha)\phi]
\right|_{\alpha=0}\\
&=\cos\phi+\alpha\phi\sin\phi.
\end{aligned}
\tag{5.91}
$$

由此发现，在行星每运行一圈的过程中，近日点前进的角度为

$$
\Delta\phi=2\pi\alpha=\frac{6\pi G^2M^2}{L^2}.
\tag{5.92}
$$

为了把角动量 $L$ 换成更常用的量，可以使用适用于 Newton 轨道的表达式，因为我们所求的量

<!-- source: PDF 229; printed: 216 -->

本身已经是一个小微扰。

普通椭圆满足

$$
r=\frac{(1-e^2)a}{1+e\cos\phi},
\tag{5.93}
$$

其中 $a$ 是半长轴。把它与零阶解（5.83）以及 $x$ 的定义（5.77）比较，可知

$$
L^2\approx GM(1-e^2)a.
\tag{5.94}
$$

这是一个近似式；若轨道是完美闭合椭圆，它才严格适用。把它代入（5.92），并恢复光速的显式因子，得到

$$
\Delta\phi=\frac{6\pi GM}{c^2(1-e^2)a}.
\tag{5.95}
$$

历史上，水星进动是广义相对论的第一次检验。事实上，在 Einstein 创立广义相对论之前，人们已经知道水星轨道存在明显偏差，也有人提出过许多解释（包括内太阳系中的“暗物质”）。Einstein 知道这一偏差；提出广义相对论之后，他最先做的工作之一就是证明新理论能正确解释水星近日点进动。水星绕太阳运动的相关轨道参数为

$$
\begin{aligned}
\frac{GM_\odot}{c^2}&=1.48\times10^5\ \mathrm{cm},\\
a&=5.79\times10^{12}\ \mathrm{cm},\\
e&=0.2056,
\end{aligned}
\tag{5.96}
$$

当然还有 $c=3.00\times10^{10}\ \mathrm{cm/sec}$。由此得到

$$
\Delta\phi_{\text{Mercury}}
=5.01\times10^{-7}\ \text{弧度/圈}
=0.103''/\text{圈},
\tag{5.97}
$$

其中 $''$ 表示角秒。通常更习惯以每世纪的进动表示；水星每 88 天绕行一圈，所以

$$
\Delta\phi_{\text{Mercury}}=43.0''/\text{世纪}.
\tag{5.98}
$$

因此，水星轨道的长轴每 100 年进动 $43.0$ 角秒。观测值是每 100 年 $5601$ 角秒；不过，其中很大一部分来自地心坐标系中的分点进动，精确地说是每 100 年 $5025$ 角秒。其他行星的引力扰动再贡献每 100 年 $532$ 角秒，余下每 100 年 $43$ 角秒需要由广义相对论解释，而它的解释相当出色。可以想象，Einstein 第一次算出这个结果时一定非常高兴。

第 2 章已经把光子的引力红移作为等效原理的一个后果加以讨论。Schwarzschild 度规是广义相对论的精确

<!-- source: PDF 230; printed: 217 -->

解，因此应当预言一种红移，并在小块时空区域内退化为等效原理的预言。下面看看这是怎样发生的。

考虑四速度为 $U^\mu$、在 Schwarzschild 坐标中保持静止（$U^i=0$）的观测者。也可以允许观测者运动，但那只会在引力效应之上叠加普通的 Doppler 频移。四速度满足 $U_\mu U^\mu=-1$；对 Schwarzschild 时空中的静止观测者，这意味着

$$
U^0=\left(1-\frac{2GM}{r}\right)^{-1/2}.
\tag{5.99}
$$

任何这样的观测者，对沿类光测地线 $x^\mu(\lambda)$ 传播的光子所测得的频率都是

$$
\omega=-g_{\mu\nu}U^\mu\frac{\mathrm dx^\nu}{\mathrm d\lambda}.
\tag{5.100}
$$

事实上，这个关系定义了 $\lambda$ 的归一化。因此

$$
\omega=\left(1-\frac{2GM}{r}\right)^{1/2}
\frac{\mathrm dt}{\mathrm d\lambda}
\tag{5.101}
$$

$$
=\left(1-\frac{2GM}{r}\right)^{-1/2}E,
\tag{5.102}
$$

其中 $E$ 由应用于光子轨迹的（5.61）定义。$E$ 是守恒的，所以在不同径向距离处测量时，$\omega$ 显然会取不同值。若光子在 $r_1$ 处发射、在 $r_2$ 处观测，观测频率之间的关系是

$$
\frac{\omega_2}{\omega_1}
=\left(\frac{1-2GM/r_1}{1-2GM/r_2}\right)^{1/2}.
\tag{5.103}
$$

这是频移的精确结果；在 $r\gg2GM$ 的极限下，

$$
\begin{aligned}
\frac{\omega_2}{\omega_1}
&=1-\frac{GM}{r_1}+\frac{GM}{r_2}\\
&=1+\Phi_1-\Phi_2,
\end{aligned}
\tag{5.104}
$$

其中 $\Phi=-GM/r$ 是 Newton 势。这个结果告诉我们，$\Phi$ 增大时频率降低，而光子爬出引力场时正是如此，因此发生红移。（落向引力物体的光子会蓝移。）可见 $r\gg2GM$ 的结果与基于等效原理的计算一致。

Pound 与 Rebka 于 1960 年首次探测到引力红移；他们让伽马射线向上传播仅 72 英尺，即 Harvard 物理楼的高度。后续检验越来越精确，常常

<!-- source: PDF 231; printed: 218 -->

使用人造航天器，或携带在飞机上的原子钟。在所有情形中，实验与 Einstein 预言都符合得极好。

自 Einstein 提出三项经典检验之后，人们又提出了更多广义相对论检验。最著名的当然是双脉冲星，将在第 7 章讨论。另一个是由 Shapiro 发现并观测到的引力时间延迟，也在第 7 章讨论。在很不相同的语境中，大爆炸核合成检验了宇宙只有数秒大时的广义相对论，详见第 8 章。现代进展还引入了许多新检验；全面介绍可参见 Will（1981）。

## 5.6 Schwarzschild 黑洞

现在，我们已经了解了麻烦半径 $r=2GM$ 外部测地线的一些行为；这一区域是研究太阳系和大多数其他天体物理情形时所关心的。接下来转向研究这样一类物体：即使在小于 $2GM$ 的半径上，它们仍由 Schwarzschild 解描述——黑洞。（眼下先使用“黑洞”一词，尽管还没有给出这种物体的精确定义。）

理解时空几何的一种方式，是考察由光锥定义的因果结构。因此考虑径向类光曲线，也就是 $\theta$、$\phi$ 恒定且 $\mathrm ds^2=0$ 的曲线：

$$
\mathrm ds^2=0
=-\left(1-\frac{2GM}{r}\right)\mathrm dt^2
+\left(1-\frac{2GM}{r}\right)^{-1}\mathrm dr^2,
\tag{5.105}
$$

由此可见

$$
\frac{\mathrm dt}{\mathrm dr}
=\pm\left(1-\frac{2GM}{r}\right)^{-1}.
\tag{5.106}
$$

它当然度量了 $t$—$r$ 平面时空图上光锥的斜率。$r$ 很大时，斜率是 $\pm1$，与平直空间相同；趋近 $r=2GM$ 时，$\mathrm dt/\mathrm dr\to\pm\infty$，光锥像图 5.7 那样“闭合”。因此，至少在这个坐标系中，趋近 $r=2GM$ 的光线似乎永远无法到达那里，只会渐近于这个半径。

马上会看到，这种到不了 $r=2GM$ 的表象是一种幻觉；光线（或有质量粒子）实际可以毫无困难地到达这个半径。但远处的观测者永远无法看出这一点。假设我们留在外部，而一位勇敢的观测型广义相对论学家跃入黑洞，并不断向后发送信号；我们只会看到信号到达得越来越慢，如图 5.8 所示。习题会要求你更仔细地研究这一现象。当下落观测者趋近 $r=2GM$ 时，从我们的角度看，他们固有时的任意固定间隔 $\Delta\tau_1$ 都对应越来越长的间隔 $\Delta\tau_2$。这一过程永远持续；我们绝不会看到

<!-- source: PDF 232; printed: 219 -->

**图 5.7**　在 Schwarzschild 坐标中，趋近 $r=2GM$ 时，光锥看起来逐渐闭合。

观测者穿过 $r=2GM$，只会看到他们运动得越来越慢（并且由于跃入黑洞这样的莽撞举动而仿佛羞红了脸，信号也越来越红）。

“我们从未看到下落观测者到达 $r=2GM$”是一句有意义的话；但“他们在 $t$—$r$ 平面的轨迹永远到不了那里”却没有同样的意义。后一个说法高度依赖坐标系，我们希望提出更不依赖坐标的问题，例如：“观测者能否在有限固有时内到达这个半径？”最好的做法是改变坐标，换用一个在 $r=2GM$ 处行为更好的系统。现在着手寻找一套合适坐标。当然，坐标变换无法从某种原理中“推导”出来；我们只能给出新坐标，再代入公式。不过，下面会分几个步骤构造这些坐标，希望让选择的动机显得更自然。

**图 5.8**　一个向黑洞自由下落的信标，以恒定固有时间隔 $\Delta\tau_1$ 发射信号。固定在半径 $r$ 处的观测者，以依次增长的时间隔 $\Delta\tau_2$ 接收这些信号。

<!-- source: PDF 233; printed: 220 -->

当前坐标的问题在于：沿趋近 $r=2GM$ 的径向类光测地线，$\mathrm dt/\mathrm dr\to\infty$；相对于坐标时间 $t$，沿 $r$ 方向的进展越来越慢。可以尝试用一个沿类光测地线变化更慢的坐标替换 $t$。先注意，显式求解刻画径向类光曲线的条件（5.106），得到

$$
t=\pm r^*+\text{常数},
\tag{5.107}
$$

其中**龟坐标**（tortoise coordinate）$r^*$ 定义为

$$
r^*=r+2GM\ln\left(\frac{r}{2GM}-1\right).
\tag{5.108}
$$

（只有当 $r\geq2GM$ 时，龟坐标才与 $r$ 有合理关系；不过在更内侧，现有坐标本来就不太好。）用龟坐标表示，Schwarzschild 度规成为

$$
\mathrm ds^2=\left(1-\frac{2GM}{r}\right)
(-\mathrm dt^2+\mathrm dr^{*2})+r^2\mathrm d\Omega^2,
\tag{5.109}
$$

其中把 $r$ 视为 $r^*$ 的函数。这取得了一些进展：光锥现在看起来不再闭合，如图 5.9 所示；此外，在 $r=2GM$ 处没有任何度规系数变为无穷大（尽管 $g_{tt}$ 与 $g_{r^*r^*}$ 都变为零）。不过代价是：所关心的曲面 $r=2GM$ 被推到了无穷远。

下一步是定义自然适配于类光测地线的坐标。令

$$
\begin{aligned}
v&=t+r^*,\\
u&=t-r^*.
\end{aligned}
\tag{5.110}
$$

**图 5.9**　龟坐标中 Schwarzschild 时空的光锥，见方程（5.109）。光锥保持非退化，但曲面 $r=2GM$ 已被推到无穷远。

<!-- source: PDF 234; printed: 221 -->

于是，下落的径向类光测地线由 $v=\text{常数}$ 刻画，外出的径向类光测地线则满足 $u=\text{常数}$。现在回到原来的径向坐标 $r$，同时用新坐标 $v$ 替换类时坐标 $t$。这就是 **Eddington–Finkelstein 坐标**。在这些坐标中，度规为

$$
\mathrm ds^2=-\left(1-\frac{2GM}{r}\right)\mathrm dv^2
+(\mathrm dv\,\mathrm dr+\mathrm dr\,\mathrm dv)+r^2\mathrm d\Omega^2.
\tag{5.111}
$$

这里出现了真正进展的第一个迹象。尽管度规系数 $g_{vv}$ 在 $r=2GM$ 处消失，却没有真正的退化；度规行列式为

$$
g=-r^4\sin^2\theta,
\tag{5.112}
$$

它在 $r=2GM$ 处完全正则。因此度规可逆；我们终于一劳永逸地看出，$r=2GM$ 只是原来 $(t,r,\theta,\phi)$ 系统中的坐标奇点。在 Eddington–Finkelstein 坐标中，径向类光曲线的条件由下式求解：

$$
\frac{\mathrm dv}{\mathrm dr}=
\begin{cases}
0, & \text{下落},\\[1mm]
2\left(1-\dfrac{2GM}{r}\right)^{-1}, & \text{外出}.
\end{cases}
\tag{5.113}
$$

由此能看清发生了什么。在这个坐标系中，光锥在 $r=2GM$ 处仍行为良好，而且该曲面位于有限坐标值。沿类光或类时粒子的路径越过该曲面没有任何困难。另一方面，确实发生了有趣的事情：光锥虽未闭合，却发生倾斜，使得在 $r<2GM$ 时，所有指向未来的路径都朝 $r$ 减小的方向，如图 5.10 所示。

**图 5.10**　方程（5.111）的 $(v,r)$ 坐标中，Schwarzschild 时空的光锥。在这些坐标中，可以沿指向未来的类时路径越过 $r=2GM$。

> **作者勘误（印刷页 221）**：图 5.10 中间光锥的一侧应当完全竖直，并与 $r=2GM$ 的事件视界重合；扫描版原图未正确画直。

<!-- source: PDF 235; printed: 222 -->

曲面 $r=2GM$ 在局部完全正则，却在整体上充当一个有去无回的界面：试验粒子一旦降到它以下，就再也无法返回。我们把**事件视界**粗略定义为这样一个曲面：粒子一旦越过它，就再也不能逃到无穷远；在 Schwarzschild 时空中，事件视界位于 $r=2GM$。（下一章会给出稍微更精确的定义。）尽管事件视界处在固定的径向坐标，它是类光曲面而非类时曲面，所以真正使人无法沿向外方向穿过视界的，是时空自身的因果结构。

任何东西都无法逃出事件视界，我们也就不可能看见它的内部——“黑洞”这一名称由此而来。黑洞就是由事件视界与无穷远隔开的一个时空区域。事件视界的概念是整体性的；视界的位置是关于整个时空的陈述，不能只根据该处的几何加以确定。在更一般的时空中，这一点仍然成立。

还应提到黑洞的两个特征，它们有时在大众想象中引起混淆。第一，黑洞外部的几何，与恒星或行星外部会出现的 Schwarzschild 解完全相同。特别地，黑洞吸入周围一切的能力并不比太阳更强；只要粒子远在 $r=2GM$ 之外，无论引力源是否为黑洞，其行为都完全相同。第二，黑洞有一个容易误导人的 Newton 类比。一个粒子在质量为 $M$ 的引力物体外、距离为 $r$ 处的 Newton 逃逸速度为

$$
v_{\text{esc}}=\sqrt{\frac{2GM}{r}}.
\tag{5.114}
$$

若天真地问 Newton 逃逸速度在哪里等于光速，会恰好得到 $r=2GM$。尽管光速在 Newton 理论中没有基本地位，这似乎仍给人一种耐人寻味的印象：把光看成速度为 $c$ 的惯性粒子时，它似乎无法逃离质量为 $M$、半径小于 $2GM$ 的物体。然而，这种情形与广义相对论中的情况有根本区别。逃逸速度是粒子沿自由轨迹逃离引力源所需的初速度，但我们完全可以考虑受加速轨迹；例如，可以设想选择一种加速度，使粒子以某个恒定速度持续远离大质量物体。因此，所谓的 Newton 黑洞并不具有“任何东西都无法逃离”这一关键性质。广义相对论中，任意类时路径都必须留在自己的光锥内，因而绝不可能逃出事件视界。

## 5.7 最大延拓的 Schwarzschild 解

回顾一下已经完成的工作。由于怀疑原坐标可能无法覆盖整个流形，我们把原来的坐标 $t$ 改成了新坐标 $v$。它有一个很好的性质：若沿径向类光曲线 $v=\text{常数}$ 减小

<!-- source: PDF 236; printed: 223 -->

$r$，就会毫无困难地穿过事件视界。事实上，一个亲自完成这趟旅程的局部观测者甚至不一定知道自己何时越过了事件视界，因为局部几何与其他地方没有区别。因此可以断定，最初的怀疑是正确的：原坐标系没有很好地覆盖整个流形。区域 $r\leq2GM$ 当然应当纳入时空，因为物理粒子很容易到达并穿越那里。不过，还不能保证工作已经结束；或许可以沿其他方向继续延拓流形。

事实上确有其他方向。在 $(v,r)$ 坐标系中，可以沿指向未来的路径越过事件视界，却不能沿指向过去的路径穿越。这似乎不合理，因为出发点是一个与时间无关的解。不过，当初也可以选择 $u$ 代替 $v$；那样度规将成为

$$
\mathrm ds^2=-\left(1-\frac{2GM}{r}\right)\mathrm du^2
-(\mathrm du\,\mathrm dr+\mathrm dr\,\mathrm du)+r^2\mathrm d\Omega^2.
\tag{5.115}
$$

现在又能穿过事件视界，但这次只能沿指向过去的曲线，如图 5.11 所示。

这里也许令人惊讶：可以一致地沿指向未来或指向过去的曲线穿过 $r=2GM$，但会到达不同的地方。根据定义（5.110），这其实合乎预期：保持 $v$ 恒定并减小 $r$ 时，必有 $t\to+\infty$；保持 $u$ 恒定并减小 $r$ 时，必有 $t\to-\infty$。（当 $r\to2GM$ 时，龟坐标 $r^*\to-\infty$。）所以我们已经沿两个不同方向延拓了时空，一个通向未来，一个通向过去。

下一步可以沿类空测地线寻找更多区域。答案是肯定的：还会到达时空的另一个部分。不过，可以定义一组在全局都表现良好的坐标，从而简化过程。第一个猜想也许是同时使用 $u$ 与 $v$（取代 $t$ 与 $r$）。

**图 5.11**　方程（5.115）的 $(u,r)$ 坐标中，Schwarzschild 时空的光锥。在这些坐标中，可以沿指向过去的类时路径越过 $r=2GM$。

> **作者勘误（印刷页 223）**：图 5.11 中间光锥的一侧应当完全竖直，并与 $r=2GM$ 的事件视界重合；扫描版原图未正确画直。

<!-- source: PDF 237; printed: 224 -->

这会得到

$$
\mathrm ds^2=-\frac12\left(1-\frac{2GM}{r}\right)
(\mathrm dv\,\mathrm du+\mathrm du\,\mathrm dv)+r^2\mathrm d\Omega^2,
\tag{5.116}
$$

其中 $r$ 由 $v$、$u$ 隐式定义：

$$
\frac12(v-u)=r+2GM\ln\left(\frac{r}{2GM}-1\right).
\tag{5.117}
$$

实际上，这又引回了最初遇到的退化：在这些坐标中，$r=2GM$ 位于“无限遥远处”（$v=-\infty$ 或 $u=+\infty$）。应当改用把这些点拉回有限坐标值的坐标；一个好选择是

$$
\begin{aligned}
v'&=e^{v/4GM},\\
u'&=-e^{-u/4GM}.
\end{aligned}
\tag{5.118}
$$

用最初的 $(t,r)$ 系统表示，便是

$$
\begin{aligned}
v'&=\left(\frac{r}{2GM}-1\right)^{1/2}e^{(r+t)/4GM},\\
u'&=-\left(\frac{r}{2GM}-1\right)^{1/2}e^{(r-t)/4GM}.
\end{aligned}
\tag{5.119}
$$

在 $(v',u',\theta,\phi)$ 系统中，Schwarzschild 度规为

$$
\mathrm ds^2=-\frac{16G^3M^3}{r}e^{-r/2GM}
(\mathrm dv'\,\mathrm du'+\mathrm du'\,\mathrm dv')
+r^2\mathrm d\Omega^2.
\tag{5.120}
$$

至此，$r=2GM$ 的非奇异性完全显露出来：在这个形式中，任何度规系数在事件视界处都没有特殊行为。

$v'$ 和 $u'$ 都是类光坐标，因为它们的偏导数 $\partial/\partial v'$ 与 $\partial/\partial u'$ 是类光向量。这没有任何问题；在这个系统中，四个偏导向量（两个类光、两个类空）的集合为切空间提供了一组完全合格的基。不过，人们通常更习惯使用一个类时坐标和其余类空坐标的系统。因此定义

$$
T=\frac12(v'+u')
=\left(\frac{r}{2GM}-1\right)^{1/2}e^{r/4GM}
\sinh\left(\frac{t}{4GM}\right)
\tag{5.121}
$$

以及

$$
R=\frac12(v'-u')
=\left(\frac{r}{2GM}-1\right)^{1/2}e^{r/4GM}
\cosh\left(\frac{t}{4GM}\right).
\tag{5.122}
$$

<!-- source: PDF 238; printed: 225 -->

用它们表示，度规成为

$$
\mathrm ds^2=\frac{32G^3M^3}{r}e^{-r/2GM}
(-\mathrm dT^2+\mathrm dR^2)+r^2\mathrm d\Omega^2,
\tag{5.123}
$$

其中 $r$ 由下式隐式定义：

$$
T^2-R^2=\left(1-\frac{r}{2GM}\right)e^{r/2GM}.
\tag{5.124}
$$

坐标 $(T,R,\theta,\phi)$ 称为 **Kruskal 坐标**，有时也称 **Kruskal–Szekeres 坐标**。

> **作者勘误（印刷页 225）**：扫描版把 “Kruskal–Szekeres” 误排为 “Kruskal–Szekres”；此处已改正人名拼写。

Kruskal 坐标具有许多近乎神奇的性质。与 $(t,r^*)$ 坐标一样，径向类光曲线看起来和平直空间中一样：

$$
T=\pm R+\text{常数}.
\tag{5.125}
$$

但与 $(t,r^*)$ 坐标不同，事件视界 $r=2GM$ 并非无限遥远；事实上，它由

$$
T=\pm R
\tag{5.126}
$$

定义，这与它是类光曲面相符。更一般地，可以考虑 $r=\text{常数}$ 的曲面。由（5.124）可知，它们满足

$$
T^2-R^2=\text{常数}.
\tag{5.127}
$$

所以在 $R$—$T$ 平面中，它们表现为双曲线。此外，$t=\text{常数}$ 的曲面由

$$
\frac{T}{R}=\tanh\left(\frac{t}{4GM}\right)
\tag{5.128}
$$

给出；这定义了穿过原点、斜率为 $\tanh(t/4GM)$ 的直线。注意，当 $t\to\pm\infty$ 时，（5.128）与（5.126）相同，所以 $t=\pm\infty$ 与 $r=2GM$ 表示同一曲面。

只要不碰到 $r=0$ 的真实奇点，就应允许坐标 $(T,R)$ 取它们能取到的所有值；因此允许区域是

$$
\begin{aligned}
-\infty&\leq R\leq\infty,\\
T^2&<R^2+1.
\end{aligned}
\tag{5.129}
$$

从（5.121）与（5.122）看，$r<2GM$ 时 $T$、$R$ 似乎会变成虚数，但这只是幻觉；在那个区域，$(r,t)$ 坐标已经失效（具体说，$|t|\to\infty$）。现在可以在 $T$—$R$ 平面中画出时空图（省略 $\theta$、$\phi$），称为 **Kruskal 图**，如图 5.12 所示。图上的每一点都是一个二维球面。这幅图表示最大延拓的

<!-- source: PDF 239; printed: 226 -->

Schwarzschild 几何；Kruskal 坐标覆盖了应当视为由这个解描述的整个流形。

原来的 Schwarzschild 坐标 $(t,r)$ 适用于 $r>2GM$，但这只是 Kruskal 图上流形的一部分。把图分为图 5.13 所示的四个区域很方便。区域 I 对应 $r>2GM$，即原坐标定义良好的那一块。沿指向未来的类光射线可以到达区域 II，沿指向过去的类光射线可以到达区域 III。若考察类空测地线，则会被带到区域 IV。把 $(T,R)$ 与 $(t,r)$ 联系起来的定义（5.121）和（5.122）严格说来只适用于区域 I；在其他区域，必须引入适当的负号，防止坐标变为虚数。

**图 5.12**　Kruskal 图——用 Kruskal 坐标表示的 Schwarzschild 解；所有光锥都与坐标轴成 $\pm45^\circ$。图中 $r=\text{常数}$ 的曲面是双曲线，$t=\text{常数}$ 的曲面是过原点的直线；$r=2GM$ 是对角类光线，$r=0$ 是上下两条奇异边界。

**图 5.13**　Kruskal 图的四个区域：右侧为 I，上方为 II，下方为 III，左侧为 IV。

<!-- source: PDF 240; printed: 227 -->

把 Schwarzschild 几何延拓到不能再延拓之后，我们得到一个非凡时空。区域 II 当然就是通常所说的黑洞。任何东西一旦从区域 I 进入 II，就再也无法返回。事实上，区域 II 中每条指向未来的路径最终都会撞上 $r=0$ 的奇点；一旦进入事件视界，结局便无可挽回。值得强调的是，你不但无法逃回区域 I，甚至无法阻止自己朝 $r$ 减小的方向运动，因为那正是类时方向。在原坐标系中也能看出这一点：当 $r<2GM$ 时，$t$ 变为类空，$r$ 变为类时。你无法停止朝奇点运动，就像无法停止变老一样。由于沿测地线的固有时取极大值，若不挣扎、只在接近奇点时放松下来，反倒能活得最久。当然，能放松的时间不会很长，旅程也谈不上轻松：趋近奇点时，潮汐力变为无穷大。落向奇点时，双脚与头部会被向相反方向拉开，躯干则被挤压到无穷薄。Misner、Thorne 与 Wheeler（1973）第 32.6 节详细描述了一位落入黑洞的天体物理学家的惨烈结局。注意，他们使用附录 J 所讨论的正交归一标架（这不会让旅程更愉快）。

区域 III 和 IV 也许有些出人意料。区域 III 只是区域 II 的时间反演：事物可以从那里逃向我们，我们却永远无法到达那里。它可以看作一个**白洞**。过去存在一个奇点，宇宙仿佛从那里喷涌出来。区域 III 的边界是过去事件视界，区域 II 的边界则是未来事件视界。与此同时，无论时间向前还是向后，都无法从我们的区域 I 到达区域 IV；那里也没有任何人能到达我们这里。它是另一个渐近平坦的时空区域，是我们区域的镜像。可以把它看成通过虫洞（或 Einstein–Rosen 桥）与区域 I 相连：一个连接两个不同区域的颈状构型。考虑把 Kruskal 图沿 $T=\text{常数}$ 的类空曲面切片，如图 5.14；再为清晰起见恢复一个角坐标，就能像图 5.15 那样画出每个切片。在这种切片方式下，Schwarzschild 几何描述两个渐近平坦区域：它们相互靠近，短暂地经由虫洞相连，随后断开。但虫洞闭合得太快，任何类时观测者都无法从一个区域穿越到另一个区域。

Kruskal 图虽令人满意，构造 Schwarzschild 解的共形图、把它压缩进有限区域，往往更加有用。附录 H 讨论了共形图的思想；它是分析广义相对论时空的关键工具，建议现在回顾那部分内容。这里不完整展示构造 Schwarzschild 共形图所需的操作，因为它们与 Minkowski 情形相似，只是代数复杂得多。我们从 Kruskal 坐标的类光版本出发，其中度规

<!-- source: PDF 241; printed: 228 -->

具有如下形式：

$$
\mathrm ds^2=-\frac{16G^3M^3}{r}e^{-r/2GM}
(\mathrm dv'\,\mathrm du'+\mathrm du'\,\mathrm dv')
+r^2\mathrm d\Omega^2,
\tag{5.130}
$$

其中 $r$ 由下式隐式定义：

$$
v'u'=-\left(\frac{r}{2GM}-1\right)e^{r/2GM}.
\tag{5.131}
$$

接着，基本上使用平直时空情形中的同一种变换，就足以把无穷远带到有限坐标值：

$$
\begin{aligned}
v''&=\arctan\left(\frac{v'}{\sqrt{2GM}}\right),\\
u''&=\arctan\left(\frac{u'}{\sqrt{2GM}}\right).
\end{aligned}
\tag{5.132}
$$

**图 5.14**　Kruskal 坐标中的类空切片。图中水平线 A 至 E 是不同 $T=\text{常数}$ 的切片。

**图 5.15**　图 5.14 中各类空切片的几何。两个渐近平坦区域靠近，经一条在中间切片上具有 $r=2GM$ 窄颈的虫洞短暂连通，随后再次分开。

<!-- source: PDF 242; printed: 229 -->

新坐标的取值范围为

$$
\begin{aligned}
-\frac\pi2&<v''<+\frac\pi2,\\
-\frac\pi2&<u''<+\frac\pi2,\\
-\frac\pi2&<v''+u''<\frac\pi2.
\end{aligned}
$$

度规的 $(v'',u'')$ 部分（即保持角坐标不变）现在与 Minkowski 空间共形相关。在新坐标中，$r=0$ 的奇点是直线，从一个渐近区域的类时无穷远延伸到另一个区域的类时无穷远。

因此，最大延拓 Schwarzschild 解的共形图如图 5.16 所示。关于这幅图，唯一真正微妙之处是必须理解：$i^+$ 与 $i^-$（未来与过去无穷远）不同于 $r=0$——有许多类时路径不会撞上奇点。与 Kruskal 图相同，共形图中的光锥都成 $45^\circ$；主要区别是整个时空都被表示在一个有限区域中。还要注意，共形无穷远的结构与 Minkowski 空间相同，这与 Schwarzschild 时空渐近平坦的说法一致。

**图 5.16**　Schwarzschild 时空的共形图。右侧菱形是区域 I，左侧菱形是另一渐近平坦区域 IV；上方为黑洞区域 II，下方为白洞区域 III。对角线 $r=2GM$ 是未来与过去事件视界，波浪状的上下边界 $r=0$ 是奇点；$\mathscr I^\pm$、$i^0$ 与 $i^\pm$ 标出类光、类空与类时无穷远。

## 5.8 恒星与黑洞

刚刚构造的最大延拓 Schwarzschild 解讲述了一个非凡故事：除了我们寻找的黑洞，它还包含一个白洞和另一个渐近平坦区域；后者通过虫洞与我们的宇宙相连。然而，若据此以为这些特征在真实世界中很常见，就为时过早。Schwarzschild 解代表一种高度理想化的情形：它不但球对称，而且整个时空中完全没有能量—动量。Birkhoff 定理意味着，球对称时空的任何真空

<!-- source: PDF 243; printed: 230 -->

区域都由 Schwarzschild 度规的一部分描述，但宇宙其他地方存在物质，可能会彻底改变全局图景。

一个静态球形物体——为明确起见，称它为恒星——若半径大于 $2GM$，其外部是 Schwarzschild 几何，却没有任何奇点或视界，整体结构实际上与 Minkowski 时空非常相似。当然，真实恒星会演化；恒星最终可能在自身引力作用下坍缩，缩到 $r=2GM$ 以下，再继续缩成一个奇点，从而形成黑洞。这样的时空无需白洞，因为它的过去与完整 Schwarzschild 解的过去完全不同。描述恒星坍缩的共形图会像图 5.17 那样。内部阴影区非真空，所以不由 Schwarzschild 解描述；特别地，不存在连接另一个宇宙的虫洞。除了未来有一个产生事件视界的区域外，它渐近于 Minkowski 时空。可见真实黑洞可能与最大延拓 Schwarzschild 解共享奇点和未来视界，却没有白洞、过去视界或独立的渐近区域。

我们相信，这类引力坍缩并非恒星演化的必然终点，却会在某些条件下发生。广义相对论对能够抵抗引力坍缩的恒星种类施加了严格限制；对于任何给定类型的物质，质量足够大总会导致坍缩为黑洞。此外，天体物理观测为黑洞存在于我们的宇宙中提供了极好的证据。

为了理解向黑洞的引力坍缩，首先应理解描述球对称恒星内部的静态构型。这里不会深入该主题，只介绍足以体会内部解基本特征的内容。考虑一般静态球对称

**图 5.17**　由坍缩恒星形成的黑洞之共形图。阴影区含有物质，要由适当的动态内部解描述；外部区域是 Schwarzschild 几何。

<!-- source: PDF 244; printed: 231 -->

度规，即（5.11）：

$$
\mathrm ds^2=-e^{2\alpha(r)}\mathrm dt^2+e^{2\beta(r)}\mathrm dr^2+r^2\mathrm d\Omega^2.
\tag{5.133}
$$

现在寻找非真空解，所以转向完整 Einstein 方程：

$$
G_{\mu\nu}=R_{\mu\nu}-\frac12Rg_{\mu\nu}=8\pi G T_{\mu\nu}.
\tag{5.134}
$$

Einstein 张量可由 Ricci 张量（5.14）与曲率标量（5.15）得到：

$$
\begin{aligned}
G_{tt}&=\frac1{r^2}e^{2(\alpha-\beta)}
\left(2r\partial_r\beta-1+e^{2\beta}\right),\\
G_{rr}&=\frac1{r^2}\left(2r\partial_r\alpha+1-e^{2\beta}\right),\\
G_{\theta\theta}&=r^2e^{-2\beta}\left[
\partial_r^2\alpha+(\partial_r\alpha)^2
-\partial_r\alpha\,\partial_r\beta
+\frac1r(\partial_r\alpha-\partial_r\beta)
\right],\\
G_{\phi\phi}&=\sin^2\theta\,G_{\theta\theta}.
\end{aligned}
\tag{5.135}
$$

把恒星本身建模为理想流体，其能量—动量张量为

$$
T_{\mu\nu}=(\rho+p)U_\mu U_\nu+pg_{\mu\nu}.
\tag{5.136}
$$

能量密度 $\rho$ 和压强 $p$ 都只依赖 $r$。由于寻找静态解，可以让四速度指向类时方向。将它归一化到 $U^\mu U_\mu=-1$，印刷式写成

$$
U_\mu=(e^\alpha,0,0,0),
\tag{5.137}
$$

所以能量—动量张量的分量为

$$
T_{\mu\nu}=
\begin{pmatrix}
e^{2\alpha}\rho & & & \\
& e^{2\beta}p & & \\
& & r^2p & \\
& & & r^2\sin^2\theta\,p
\end{pmatrix}.
\tag{5.138}
$$

> **符号核对说明**：式（5.137）按扫描版原样保留。依本书 $(-,+,+,+)$ 号差，若取未来指向的 $U^t=e^{-\alpha}$，降低指标会得到 $U_t=-e^\alpha$；扫描式缺少这个负号，且作者官方勘误没有列出此项。该符号在（5.136）中以 $U_\mu U_\nu$ 出现，所以不影响（5.138）及后续方程。

因此，Einstein 方程有三个独立分量。$tt$ 分量为

$$
\frac1{r^2}e^{-2\beta}\left(2r\partial_r\beta-1+e^{2\beta}\right)
=8\pi G\rho,
\tag{5.139}
$$

$rr$ 分量为

$$
\frac1{r^2}e^{-2\beta}\left(2r\partial_r\alpha+1-e^{2\beta}\right)
=8\pi Gp,
\tag{5.140}
$$

<!-- source: PDF 245; printed: 232 -->

$\theta\theta$ 分量为

$$
e^{-2\beta}\left[
\partial_r^2\alpha+(\partial_r\alpha)^2
-\partial_r\alpha\,\partial_r\beta
+\frac1r(\partial_r\alpha-\partial_r\beta)
\right]=8\pi Gp.
\tag{5.141}
$$

$\phi\phi$ 方程与 $\theta\theta$ 方程成正比，无需单独考虑。

注意，$tt$ 方程（5.139）只涉及 $\beta$ 与 $\rho$。用新函数 $m(r)$ 取代 $\beta(r)$ 很方便，定义为

$$
m(r)=\frac1{2G}\left(r-re^{-2\beta}\right),
\tag{5.142}
$$

等价地，

$$
e^{2\beta}=\left[1-\frac{2Gm(r)}{r}\right]^{-1},
\tag{5.143}
$$

所以

$$
\mathrm ds^2=-e^{2\alpha(r)}\mathrm dt^2
+\left[1-\frac{2Gm(r)}{r}\right]^{-1}\mathrm dr^2
+r^2\mathrm d\Omega^2.
\tag{5.144}
$$

度规分量 $g_{rr}$ 显然是 Schwarzschild 情形的推广，但 $g_{tt}$ 并非如此。$tt$ 方程（5.139）成为

$$
\frac{\mathrm dm}{\mathrm dr}=4\pi r^2\rho,
\tag{5.145}
$$

积分得到

$$
m(r)=4\pi\int_0^r\rho(r')r'^2\,\mathrm dr'.
\tag{5.146}
$$

设想恒星延伸到半径 $R$；再往外是真空，由 Schwarzschild 解描述。为了让度规在该半径处匹配，Schwarzschild 质量 $M$ 必须是

$$
M=m(R)=4\pi\int_0^R\rho(r)r^2\,\mathrm dr.
\tag{5.147}
$$

看起来，$m(r)$ 只是能量密度在恒星内部的积分，可以解释为半径 $r$ 以内的质量。

不过，把 $m(r)$ 解释为积分能量密度时存在一个微妙之处：在真正的空间积分中，体积元应为

$$
\sqrt\gamma\,\mathrm d^3x
=e^\beta r^2\sin\theta\,\mathrm dr\,\mathrm d\theta\,\mathrm d\phi,
\tag{5.148}
$$

其中

$$
\gamma_{ij}\mathrm dx^i\mathrm dx^j
=e^{2\beta}\mathrm dr^2+r^2\mathrm d\theta^2+r^2\sin^2\theta\,\mathrm d\phi^2
\tag{5.149}
$$

<!-- source: PDF 246; printed: 233 -->

是空间度规。因此，真正的积分能量密度是

$$
\begin{aligned}
\bar M
&=4\pi\int_0^R\rho(r)r^2e^{\beta(r)}\,\mathrm dr\\
&=4\pi\int_0^R
\frac{\rho(r)r^2}{\left[1-\dfrac{2Gm(r)}{r}\right]^{1/2}}\,\mathrm dr.
\end{aligned}
\tag{5.150}
$$

这个差别当然来自恒星中各流体元相互引力吸引所产生的束缚能：

$$
E_B=\bar M-M>0.
\tag{5.151}
$$

束缚能就是把恒星中的物质散布到无穷远所需的能量。在广义相对论中，它并非总是定义良好的概念，但对于球形恒星有明确意义。

用 $m(r)$ 表示，$rr$ 方程（5.140）可写成

$$
\frac{\mathrm d\alpha}{\mathrm dr}
=\frac{Gm(r)+4\pi Gr^3p}{r[r-2Gm(r)]}.
\tag{5.152}
$$

直接使用 $\theta\theta$ 方程不太方便，改用能量—动量守恒 $\nabla_\mu T^{\mu\nu}=0$。对度规（5.144），直接推导可知 $\nu=r$ 是唯一非平凡的分量，它给出

$$
(\rho+p)\frac{\mathrm d\alpha}{\mathrm dr}
=-\frac{\mathrm dp}{\mathrm dr}.
\tag{5.153}
$$

把它与（5.152）结合，消去 $\alpha(r)$，得到

$$
\frac{\mathrm dp}{\mathrm dr}
=-\frac{(\rho+p)[Gm(r)+4\pi Gr^3p]}{r[r-2Gm(r)]}.
\tag{5.154}
$$

这就是 **Tolman–Oppenheimer–Volkoff 方程**，也简称流体静力平衡方程。由于（5.146）把 $m(r)$ 与 $\rho(r)$ 联系起来，该方程也把 $p(r)$ 与 $\rho(r)$ 联系起来。为了得到闭合方程组，还需要一个关系：状态方程。一般来说，它会用能量密度和比熵表示压强，即 $p=p(\rho,S)$。我们常关心熵很小、可以忽略的情形；这时状态方程具有形式

$$
p=p(\rho).
\tag{5.155}
$$

天体物理系统常满足多方状态方程 $p=K\rho^\gamma$，其中 $K$、$\gamma$ 是常数。

一个简单且半现实的恒星模型是假设流体不可压缩：密度在恒星表面以内为常数 $\rho_*$，到达恒星表面，此后

<!-- source: PDF 247; printed: 234 -->

密度消失：

$$
\rho(r)=
\begin{cases}
\rho_*, & r<R,\\
0, & r>R.
\end{cases}
\tag{5.156}
$$

显式指定 $\rho(r)$ 取代了状态方程，因为 $p(r)$ 可以由流体静力平衡确定。直接积分（5.146）得到

$$
m(r)=
\begin{cases}
\dfrac{4\pi}{3}r^3\rho_*, & r<R,\\[2mm]
\dfrac{4\pi}{3}R^3\rho_*=M, & r>R.
\end{cases}
\tag{5.157}
$$

积分流体静力平衡方程，得到

$$
p(r)=\rho_*
\left[
\frac{R\sqrt{R-2GM}-\sqrt{R^3-2GMr^2}}
{\sqrt{R^3-2GMr^2}-3R\sqrt{R-2GM}}
\right].
\tag{5.158}
$$

最后，由（5.152）得到度规分量 $g_{tt}=-e^{2\alpha(r)}$：

$$
e^{\alpha(r)}
=\frac32\left(1-\frac{2GM}{R}\right)^{1/2}
-\frac12\left(1-\frac{2GMr^2}{R^3}\right)^{1/2},
\qquad r<R.
\tag{5.159}
$$

正如预期，越接近恒星核心，压强越高。事实上，对于固定半径为 $R$ 的恒星，如果质量超过

$$
M_{\max}=\frac{4}{9G}R,
\tag{5.160}
$$

中心压强 $p(0)$ 就必须超过无穷大。于是，若试图把比这更大的质量压入半径 $R$ 内，广义相对论不允许静态解；一颗缩到这种大小的恒星必然继续收缩，最终形成黑洞。这个结论是在密度恒定这一相当强的假设下推导出来的；大幅减弱该假设后，结论仍成立。**Buchdahl 定理**指出，任何合理的静态球对称内部解都满足 $M<4R/9G$。严谨证明需要更多工作，不过结果很合理：若自然界存在某个可维持的最大密度，那么原则上能制造的最大质量物体就应处处达到这一密度，正是我们考虑的特殊情形。

当然，这仍不意味着真实天体最终总会坍缩成黑洞。普通行星由物质压强支撑，基本会永远存在下去（暂且忽略行星通过极其不可能的量子隧穿变成完全不同事物，或质子最终衰变的可能性）。但大质量恒星则不同。支撑恒星的压强来自轻核聚变成重核时产生的热量。核燃料耗尽后，温度下降，于是

<!-- source: PDF 248; printed: 235 -->

恒星开始在引力作用下收缩。坍缩最终可能被 Fermi 简并压强阻止：电子被挤得非常靠近，仅凭 Pauli 不相容原理（两个费米子不能处于同一状态）就会抵抗进一步压缩。由电子简并压强支撑的恒星遗迹称为**白矮星**；典型白矮星的大小与地球相近。低质量粒子会在比高质量粒子更低的数密度下发生简并，所以核子对支持白矮星的压强没有显著贡献。白矮星是大多数恒星的终态，在宇宙中极为常见。

然而，若总质量足够大，恒星会达到 **Chandrasekhar 极限**；此时连电子简并压强也不足以抵抗引力。计算给出的 Chandrasekhar 极限约为 $1.4M_\odot$，其中 $M_\odot=2\times10^{33}\ \mathrm g$ 是太阳质量。达到这个极限后，恒星被迫坍缩到更小半径。此时电子与质子结合生成中子和中微子（逆 $\beta$ 衰变），中微子直接飞走。结果形成一颗**中子星**，其典型半径约为 $10\ \mathrm{km}$。中子星的总光度很低，却常常高速自转并具有强磁场。这一组合产生了**脉冲星**：它们在磁极发出的喷流中加速粒子，随中子星自转，看起来会快速闪烁。Bell 于 1967 年发现了脉冲星；人们短暂猜测它们可能是外星文明的信号，后来接受了更平实的天体物理解释。

中子星中心的条件与地球上非常不同，因此我们尚未完全理解其状态方程。尽管如此，人们相信，质量足够大的中子星本身也无法抵抗引力，会继续坍缩；当时对中子星最大可能质量的估计约为 $3$—$4M_\odot$，称为 **Oppenheimer–Volkoff 极限**。中子流体是我们所知最致密的物质（除了一些高度推测性的设想），所以这类坍缩的结果被认为是黑洞。

怎样才能知道那里是否有黑洞？直接探测的根本障碍当然是它的黑暗：忽略 Hawking 辐射——第 9 章将讨论的一种非常微弱的效应——黑洞自身不会发出任何辐射。但黑洞周围有极强的引力场，因此可以通过观测受这些场影响的物质来间接探测。当物质落入黑洞时会升温并发出 X 射线，可由卫星天文台探测。大量黑洞候选体已经通过这种方法发现，真实黑洞存在于宇宙中的证据极强。[^1] 绝大多数候选体属于两类之一。第一类黑洞的质量约为一个太阳质量或稍大，被认为是极大质量恒星演化的终点。另一类是超大质量黑洞。

[^1]: 关于黑洞天体物理证据的综述，见 A. Celotti、J. C. Miller 与 D. W. Sciama（1999），*Class. Quant. Grav.* **16**, A3；<http://arxiv.org/abs/astro-ph/9912180>。

<!-- source: PDF 249; printed: 236 -->

超大质量黑洞的质量介于 $10^6$ 与 $10^9$ 个太阳质量之间。它们位于星系中心，被认为是在星系形成早期为类星体供能的引擎。银河系自身包含一个被认为是黑洞的天体（Sgr A*），质量至少为 $2\times10^6M_\odot$。这些超大质量黑洞形成的确切历史仍不清楚。其他可能性包括在极早期宇宙中产生的微小原初黑洞，以及所谓质量约为一千个太阳质量的“中等质量”黑洞。

物质落入黑洞时，往往会沉降成旋转吸积盘，能量与角动量逐渐注入黑洞。因此，预期天体物理环境中的黑洞应当自转；观测到的证据也与黑洞具有很高自转速率相符。本章专注于球对称 Schwarzschild 解，因而排除了黑洞自转；下一章将转向更一般类型的黑洞。

## 5.9 习题

1. 一只太空猴愉快地沿圆形测地轨道绕 Schwarzschild 黑洞运行。远离黑洞的一只邪恶狒狒想把它送入黑洞送死，于是精确选择时机，沿径向朝黑洞扔下一颗椰子；狒狒知道猴子无法抗拒接住下落的椰子。已知猴子的质量与初始轨道半径、椰子的质量以及黑洞质量，说明你会怎样着手解决这个问题（无需实际计算）。这只勇敢的太空猴可能遭遇哪些结局？

2. 考虑静态、圆对称的 $(2+1)$ 维时空中的理想流体；等价地，它是在 $(3+1)$ 维中具有完美旋转对称性的柱状构型。

   (a) 推导 $(2+1)$ 维 Tolman–Oppenheimer–Volkoff（TOV）方程的对应形式。

   (b) 证明真空解可以写成

   $$
   \mathrm ds^2=-\mathrm dt^2+\frac1{1-8GM}\mathrm dr^2+r^2\mathrm d\theta^2.
   $$

   其中 $M$ 是常数。

   (c) 证明同一个解还可以写成

   $$
   \mathrm ds^2=-\mathrm d\tau^2+\mathrm d\xi^2+\xi^2\mathrm d\phi^2,
   $$

   其中 $\phi\in[0,2\pi(1-8GM)^{1/2}]$。

   (d) 对恒定密度恒星求解 $(2+1)$ 维 TOV 方程。求出 $p(r)$ 并解出度规。

   (e) 对状态方程为 $p=\kappa\rho^{3/2}$ 的恒星求解 $(2+1)$ 维 TOV 方程。求出 $p(r)$ 并解出度规。

   (f) 对 (d)、(e) 两部分的解，求质量

   $$
   M(R)=\int_0^{2\pi}\!\int_0^R\rho r\,\mathrm dr\,\mathrm d\theta
   $$

   以及固有质量

   $$
   \bar M(R)=\int_0^{2\pi}\!\int_0^R\rho\sqrt{-g}\,\mathrm dr\,\mathrm d\theta.
   $$

<!-- source: PDF 250; printed: 237 -->

3. 考虑一个已经落入事件视界以内、$r<2GM$ 的粒子（它不一定沿测地线运动）。使用普通 Schwarzschild 坐标 $(t,r,\theta,\phi)$。证明径向坐标必须以至少如下速率减小：

   $$
   \left|\frac{\mathrm dr}{\mathrm dt}\right|
   \geq\sqrt{\frac{2GM}{r}-1}.
   $$

   计算粒子沿一条从 $r=2GM$ 到 $r=0$ 的轨迹所能拥有的最长寿命。对于质量以太阳质量计的黑洞，把结果用秒表示。证明自由下落且 $E\to0$ 时可以达到这个最大固有时。

4. 考虑带宇宙学常数的真空 Einstein 方程，

   $$
   G_{\mu\nu}+\Lambda g_{\mu\nu}=0.
   $$

   (a) 在 $(t,r)$ 坐标中求最一般的球对称度规，使它在 $\Lambda=0$ 时退化为普通 Schwarzschild 坐标。

   (b) 仿照（5.66），用有效势写出径向测地线的运动方程。画出有质量粒子的有效势草图。

5. 一位共动观测者位于质量为 $M$ 的 Schwarzschild 黑洞周围，空间坐标保持为常数 $(r_*,\theta_*,\phi_*)$。观测者把一个信标径直向下、沿径向轨迹投入黑洞。信标以恒定波长 $\lambda_{\mathrm{em}}$ 发射辐射，这里的波长在信标静止系中测量。

   (a) 计算信标的坐标速度 $\mathrm dr/\mathrm dt$，把它写成 $r$ 的函数。

   (b) 计算信标的固有速度。也就是说，设想在固定 $r$ 处有一位共动观测者；信标经过时，他建立一个局部惯性坐标系，求这位观测者测得的速度。它在 $r=2GM$ 处是多少？

   (c) 计算 $r_*$ 处观测者测得的波长 $\lambda_{\mathrm{obs}}$，把它写成辐射发射半径 $r_{\mathrm{em}}$ 的函数。

   (d) 计算信标在半径 $r_{\mathrm{em}}$ 处发出的一束辐射，于 $r_*$ 处被观测到的时刻 $t_{\mathrm{obs}}$。

   (e) 证明在晚期，红移按指数增长：

   $$
   \frac{\lambda_{\mathrm{obs}}}{\lambda_{\mathrm{em}}}
   \propto e^{t_{\mathrm{obs}}/T}.
   $$

   用黑洞质量 $M$ 表示时间常数 $T$。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：第 4 章 引力](./04-gravitation.md) · [下一篇：第 6 章 更一般的黑洞](./06-more-general-black-holes.md)
