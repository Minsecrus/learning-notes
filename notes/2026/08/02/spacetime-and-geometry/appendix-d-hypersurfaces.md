# 附录 D 超曲面

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 C 子流形](./appendix-c-submanifolds.md) · [下一篇：附录 E Stokes 定理](./appendix-e-stokes-theorem.md)

<!-- source: PDF 456; printed: 443 -->

超曲面（hypersurface）是 $n$ 维流形 $M$ 的一个 $(n-1)$ 维子流形 $\Sigma$，也就是余维数为一的子流形。（当然，若 $n=3$，$\Sigma$ 完全可以直接叫作“曲面”，但为保持一致，我们仍会使用前缀“超”。）超曲面在广义相对论中极为有用，与之相伴的形式体系也相当丰富。

本附录汇集研究超曲面时会用到的一组结果：法向量、类光超曲面的生成线、适用于超曲面的 Frobenius 定理、高斯法坐标、诱导度规、投影张量、外曲率，以及带边界流形。这多少像一席内容繁杂的自助餐，但希望它既可口也有营养。

## 法向量与类光生成线

指定超曲面 $\Sigma$ 的一种方法，是令某个函数等于常数：

$$
f(x)=f_*.
\tag{D.1}
$$

向量场

$$
\zeta^\mu=g^{\mu\nu}\nabla_\nu f
\tag{D.2}
$$

与该曲面正交；这里的含义是，它同 $T_p\Sigma\subset T_pM$ 中的所有向量都正交。若 $\zeta^\mu$ 是类时的，就称超曲面是类空的；若 $\zeta^\mu$ 是类空的，超曲面便是类时的；若 $\zeta^\mu$ 是类光（null，即非零但范数为零）向量，超曲面也称为类光超曲面。

> **公式勘误**：式（D.2）已经采用作者的官方勘误。原印刷本把导数指标误排为 $\mu$；与逆度规缩并的正确指标是 $\nu$。

任何与法向量场成比例的向量场

$$
\xi^\mu=h(x)\nabla^\mu f
\tag{D.3}
$$

本身也会是法向量场，其中 $h(x)$ 是某个函数。法向量在相差一个缩放因子的意义下是唯一的，所以任意法向量都能写成这种形式。对于类时和类空超曲面，可以据此定义归一化法向量：

$$
n^\mu
=
\pm\frac{\zeta^\mu}{\left|\zeta_\nu\zeta^\nu\right|^{1/2}}.
\tag{D.4}
$$

类空超曲面上有 $n^\mu n_\mu=-1$，类时超曲面上有 $n^\mu n_\mu=+1$。除去整体取向，这样的法向量场是唯一的。对类空曲面，通常选择使 $n^\mu$ 指向未来的符号。

类光超曲面有一个特殊性质：它能分解成一族类光测地线，这些测地线称为超曲面的**生成线**（generators）。下面说明其原因。

<!-- source: PDF 457; printed: 444 -->

法向量 $\zeta^\mu$ 同时也与 $\Sigma$ 相切，因为类光向量与自身正交。因此，满足

$$
\zeta^\mu=\frac{dx^\mu}{d\alpha}
\tag{D.5}
$$

的积分曲线 $x^\mu(\alpha)$ 是包含在超曲面内的类光曲线。这些曲线必然是测地线，尽管 $\alpha$ 未必是仿射参数。为验证这一点，回忆测地线方程的一般形式可以写成

$$
\zeta^\mu\nabla_\mu\zeta_\nu
=
\eta(\alpha)\zeta_\nu,
\tag{D.6}
$$

其中 $\eta(\alpha)$ 是一个函数；当 $\alpha$ 为仿射参数时，它等于零。把式（D.2）代入并计算：

$$
\begin{aligned}
\zeta^\mu\nabla_\mu\zeta_\nu
&=\zeta^\mu\nabla_\mu\nabla_\nu f\\
&=\zeta^\mu\nabla_\nu\nabla_\mu f\\
&=\zeta^\mu\nabla_\nu\zeta_\mu\\
&=\frac12\nabla_\nu\left(\zeta^\mu\zeta_\mu\right).
\end{aligned}
\tag{D.7}
$$

第二行使用了无挠条件：作用在标量上的协变导数彼此可交换。要注意，尽管在 $\Sigma$ 上 $\zeta^\mu\zeta_\mu=0$，我们仍不能断定 $\nabla_\nu(\zeta^\mu\zeta_\mu)$ 为零，因为离开超曲面以后，$\zeta^\mu\zeta_\mu$ 可能不为零。若该梯度确实为零，式（D.7）就是测地线方程，结论已经得到。

若梯度不为零，可以把 $\zeta^\mu\zeta_\mu=0$ 当作定义子流形 $\Sigma$ 的另一种方式，而它的导数会定义一个法向量。因此必有

$$
\nabla_\mu\left(\zeta^\nu\zeta_\nu\right)
=
g\nabla_\mu f
=
g\zeta_\mu,
\tag{D.8}
$$

其中 $g(x)$ 是某个标量函数。代回式（D.7）可得

$$
\zeta^\mu\nabla_\mu\zeta_\nu
=
\frac12 g\zeta_\nu,
\tag{D.9}
$$

它与式（D.6）的测地线方程等价。一旦知道路径 $x^\mu(\alpha)$ 是测地线，我们就可以用仿射参数 $\lambda(\alpha)$ 重新参数化它。等价地，可以用标量函数 $h(x)$ 重新缩放法向量场：

$$
\xi^\mu=h\zeta^\mu,
\tag{D.10}
$$

并选取 $h$ 使 $\xi^\mu\nabla_\mu\xi^\nu=0$。通常正是这样处理，并把相应的切向量

$$
\xi^\mu=\frac{dx^\mu}{d\lambda}
\tag{D.11}
$$

作为 $\Sigma$ 的法向量。

<!-- source: PDF 458; printed: 445 -->

以这些类光测地线 $x^\mu(\lambda)$ 取并集，就得到类光超曲面 $\Sigma$；它们就是 $\Sigma$ 的生成线。

由式（D.3）可知，与超曲面正交的向量场能够写成 $\xi^\mu=h\nabla^\mu f$。第 4 章的习题要求证明这会推出

$$
\xi_{[\mu}\nabla_\nu\xi_{\sigma]}=0,
\tag{D.12}
$$

用微分形式记号则是

$$
\xi\wedge d\xi=0.
\tag{D.13}
$$

反过来，从第一性原理证明任何满足此式的向量场都与某个超曲面正交会困难一些；不过，这直接来自 Frobenius 定理的对偶表述。设有两个向量 $V^\mu$ 和 $W^\mu$，它们都被满足式（D.12）的一形式 $\xi_\mu$ 湮灭。根据 Frobenius 定理（C.7），$\xi_\mu$ 定义超曲面的充要条件是

$$
\nabla_{[\mu}\xi_{\nu]}V^\mu W^\nu=0.
\tag{D.14}
$$

把式（D.12）作用于 $V^\mu W^\nu$ 并展开反对称化括号，有

$$
\begin{aligned}
\xi_{[\mu}\nabla_\nu\xi_{\sigma]}V^\mu W^\nu
&=
\frac13\left(
\xi_\mu\nabla_{[\nu}\xi_{\sigma]}
+\xi_\nu\nabla_{[\sigma}\xi_{\mu]}
+\xi_\sigma\nabla_{[\mu}\xi_{\nu]}
\right)V^\mu W^\nu\\
&=
\frac13\xi_\sigma\nabla_{[\mu}\xi_{\nu]}V^\mu W^\nu.
\end{aligned}
\tag{D.15}
$$

最后一行使用了 $V^\mu$ 和 $W^\mu$ 均被 $\xi_\mu$ 湮灭这一事实。$\nabla_{[\mu}\xi_{\nu]}V^\mu W^\nu$ 是标量，而 $\xi_\sigma$ 是处处非零的一形式，因此式（D.15）为零的唯一方式就是式（D.14）成立。于是，式（D.12）成立当且仅当 $\xi_\mu$ 与超曲面正交。

## 高斯法坐标

把流形或其中一部分的坐标系自然地适配于某个超曲面 $\Sigma$，往往很方便；**高斯法坐标**（Gaussian normal coordinates）正好提供了这种做法。先在 $\Sigma$ 上选坐标 $y^i=\{y^1,\ldots,y^{n-1}\}$。在每一点 $p\in\Sigma$，构造以 $n^\mu$ 为 $p$ 点切向量的唯一测地线，并令 $z$ 为每条测地线上的仿射参数。若 $n^\mu$ 已归一化且 $z(p)=0$，这个参数就是唯一的。

$\Sigma$ 邻域中的任一点 $q$ 都位于这样一条测地线上。给它赋予坐标 $\{z,y^1,\ldots,y^{n-1}\}$：其中 $y^i$ 是通过所构造测地线与 $q$ 相连的点 $p$ 的坐标。这些坐标就是高斯法坐标。它们不要同“黎曼法坐标”混淆；后者从单个点 $p$ 出发，沿所有方向的测地线构造。若走到测地线聚焦并相交的位置，高斯法坐标终将失效，但在包含 $\Sigma$ 的某个区域内总能建立。以下关于高斯法坐标的陈述都限于它们良定义的区域。

<!-- source: PDF 459; printed: 446 -->

坐标函数 $\{z,y^1,\ldots,y^{n-1}\}$ 对应坐标基向量场 $\{\partial_z,\partial_1,\ldots,\partial_{n-1}\}$。为方便记号，把它们标为

$$
\begin{aligned}
(\partial_z)^\mu&=n^\mu,\\
(\partial_i)^\mu&=Y_{(i)}^\mu.
\end{aligned}
\tag{D.16}
$$

第一行成立，是因为 $\partial_z$ 正是原法向量 $n^\mu$ 沿测地线的延拓。相对于这些基向量，度规具有简单形式。首先，

$$
g_{zz}
=
ds^2(\partial_z,\partial_z)
=
n_\mu n^\mu
=
\pm1,
\tag{D.17}
$$

因为 $n^\mu$ 就是从 $\Sigma$ 发出的测地线的归一化切向量。用 $\sigma$ 统一表示这个符号：

$$
\sigma=n_\mu n^\mu=\pm1.
\tag{D.18}
$$

此外还有 $g_{zi}=n_\mu Y_{(i)}^\mu=0$。这可直接验证：在原曲面 $\Sigma$ 上，由假设有 $n_\mu Y_{(i)}^\mu=0$。随后计算

$$
\begin{aligned}
\frac{D}{dz}\left(n_\mu Y_{(i)}^\mu\right)
&=n^\nu\nabla_\nu\left(n_\mu Y_{(i)}^\mu\right)\\
&=n_\mu n^\nu\nabla_\nu Y_{(i)}^\mu\\
&=n_\mu Y_{(i)}^\nu\nabla_\nu n^\mu\\
&=\frac12Y_{(i)}^\nu\nabla_\nu\left(n_\mu n^\mu\right)\\
&=0.
\end{aligned}
\tag{D.19}
$$

逐行解释如下。第一行是方向协变导数 $D/dz$ 的定义。第二行使用 Leibniz 法则，以及 $n_\mu$ 沿测地线平行移动这一事实，即 $n^\nu\nabla_\nu n_\mu=0$。第三行利用 $n^\mu$ 与 $Y_{(i)}^\mu$ 都是坐标基向量，因此它们的 Lie 括号为零：

$$
[n,Y_{(i)}]^\mu
=
n^\nu\nabla_\nu Y_{(i)}^\mu
-
Y_{(i)}^\nu\nabla_\nu n^\mu
=0.
$$

第四行再次使用 Leibniz 法则和平行移动性质；第五行则反映 $n_\mu n^\mu=\sigma$ 是常数。

因此，高斯法坐标中的度规可以写成

$$
ds^2
=
\sigma\,dz^2
+
\gamma_{ij}dy^i dy^j,
\tag{D.20}
$$

其中 $\gamma_{ij}=g(\partial_i,\partial_j)$ 一般会依赖所有坐标 $\{z,y^1,\ldots,y^{n-1}\}$。这里没有对几何作任何假设；我们只选择了一个使度规具有上述形式的坐标系。

<!-- source: PDF 460; printed: 447 -->

令 $z$ 为常数，会定义一族与原曲面 $\Sigma$ 微分同胚的超曲面。式（D.20）缺少非对角项 $g_{zi}$，体现了向量场 $n^\mu$ 与这一族中的所有曲面都正交，而不只与原来的一个曲面正交。

高斯法坐标并不罕见，我们一直都在使用它。简单例子包括闵可夫斯基空间中的惯性坐标

$$
ds^2=-dt^2+dx^2+dy^2+dz^2,
\tag{D.21}
$$

以及三维欧几里得空间中的极坐标

$$
ds^2=dr^2+r^2d\theta^2+r^2\sin^2\theta\,d\phi^2.
\tag{D.22}
$$

宇宙学中的普通 Robertson–Walker 坐标给出一个稍不平凡的例子：

$$
ds^2
=
-dt^2
+a^2(t)\left[
\frac{dr^2}{1-\kappa r^2}
+r^2d\Omega^2
\right].
\tag{D.23}
$$

RW 几何当然具有很高的对称性，即均匀且各向同性。不过，既然高斯法坐标总能定义，我们便知道，只需改变度规的空间分量，也能描述完全一般的几何。这给出了描述宇宙学微扰的一种常用方式。对平直空间截面，定义“同步规范”（synchronous gauge）为

$$
ds^2
=
-dt^2
+a^2(t)(\delta_{ij}+h_{ij})dx^i dx^j,
\tag{D.24}
$$

其中 $h_{ij}(t,\mathbf{x})$ 是度规微扰；向弯曲空间截面的推广是直接的。这里依然没有对几何作假设，只选取了一个可能很方便的坐标系。

## 诱导度规与诱导体积元

回忆把任意子流形嵌入 $M$ 的映射 $\phi:\Sigma\to M$，它允许我们把度规从 $M$ 拉回 $\Sigma$。若 $\Sigma$ 上的坐标是 $y^i$，$M$ 上的坐标是 $x^\mu$，子流形上的诱导度规定义为

$$
(\phi^*g)_{ij}
=
\frac{\partial x^\mu}{\partial y^i}
\frac{\partial x^\nu}{\partial y^j}
g_{\mu\nu}.
\tag{D.25}
$$

当子流形是超曲面时，这个诱导度规恰好就是式（D.20）中的 $\gamma_{ij}$。高斯法坐标是式（C.2）所述自然嵌入坐标的一个特例：$M$ 中的超曲面由 $z=z_*$ 定义，其上坐标为 $y^i$，映射 $\phi:\Sigma\to M$ 为

$$
\phi:y^i\longmapsto x^\mu=(z_*,y^i).
\tag{D.26}
$$

由 $M$ 上度规的式（D.20）形式立即可知，在此映射下，式（D.25）的拉回就是

$$
(\phi^*g)_{ij}=\gamma_{ij}.
\tag{D.27}
$$

<!-- source: PDF 461; printed: 448 -->

应当记住，式（D.27）只能在高斯法坐标中直接求值；换用别的坐标，右边的写法甚至没有意义。

子流形除继承诱导度规，还会从嵌入它的流形继承诱导体积元。回忆带度规 $g_{\mu\nu}$ 的 $n$ 维流形，其体积元由 Levi–Civita 张量给出，可表示为

$$
\epsilon
=
\sqrt{|g|}\,dx^1\wedge\cdots\wedge dx^n.
\tag{D.28}
$$

为得到子流形 $\Sigma$ 上的体积元，采用使度规具有式（D.20）形式的高斯法坐标 $(z,y^1,\ldots,y^{n-1})$ 很方便。$\Sigma$ 上的体积元 $\hat\epsilon$ 于是具有形式

$$
\hat\epsilon
=
\sqrt{|\gamma|}\,dy^1\wedge\cdots\wedge dy^{n-1}.
\tag{D.29}
$$

把第一个坐标选成超曲面的法向坐标，也就隐含选定了由 $M$ 的取向定义 $\Sigma$ 取向的约定。在这些坐标中，

$$
\sqrt{|g|}=\sqrt{|\gamma|},
\tag{D.30}
$$

所以 $M$ 上的体积元变成

$$
\epsilon
=
\sqrt{|\gamma|}\,dz\wedge dy^1\wedge\cdots\wedge dy^{n-1}.
\tag{D.31}
$$

可以用 $\Sigma$ 的法向量联系这两个体积元；在当前坐标中，其分量为

$$
n^\mu=(1,0,\ldots,0).
\tag{D.32}
$$

$\epsilon$ 与 $n^\mu$ 的缩并记为

$$
[\epsilon(n)]_{\mu_1\cdots\mu_{n-1}}
=
n^\lambda\epsilon_{\lambda\mu_1\cdots\mu_{n-1}}.
\tag{D.33}
$$

在这些坐标中显然有

$$
\begin{aligned}
\epsilon(n)
&=\sqrt{|\gamma|}\,dy^1\wedge\cdots\wedge dy^{n-1}\\
&=\hat\epsilon.
\end{aligned}
\tag{D.34}
$$

因此，诱导体积元的分量是

$$
\hat\epsilon_{\mu_1\cdots\mu_{n-1}}
=
n^\lambda\epsilon_{\lambda\mu_1\cdots\mu_{n-1}}.
\tag{D.35}
$$

这是张量之间的关系，所以在任意坐标系中都成立。反过来，也可以由 $\hat\epsilon$ 与 $n^\mu$ 重建 $\epsilon$：

$$
\frac1n\epsilon_{\nu\mu_1\cdots\mu_{n-1}}
=
n_{[\nu}\hat\epsilon_{\mu_1\cdots\mu_{n-1}]}.
\tag{D.36}
$$

> **公式核对注**：上式按原印刷本逐字转写。若同时沿用式（D.18）的 $n_\mu n^\mu=\sigma=\pm1$ 与式（D.35），把两边同 $n^\nu$ 缩并会显示：对统一涵盖 $\sigma=-1$ 的写法，右端还应带一个 $\sigma$，即 $\sigma n_{[\nu}\hat\epsilon_{\mu_1\cdots\mu_{n-1}]}$。作者公布的官方勘误尚未列出这一点；使用类时法向量时应留意这个符号。

<!-- source: PDF 462; printed: 449 -->

把式（D.36）同 $n^\nu$ 缩并即可验证它。后面讨论 Stokes 定理时，子流形体积元的概念将至关重要。

## 投影张量与外曲率

同超曲面上的诱导度规紧密相关的另一个概念，是超曲面 $\Sigma$ 的投影张量。若单位法向量为 $n^\mu$，则

$$
P_{\mu\nu}
=
g_{\mu\nu}-\sigma n_\mu n_\nu,
\tag{D.37}
$$

其中 $\sigma=n_\mu n^\mu$。下面汇集这个对象的一些有用性质。给定 $T_pM$ 中任意向量 $V^\mu$，$P_{\mu\nu}$ 会把它投影到超曲面的切向方向，也就是投影到同 $n^\mu$ 正交的方向：

$$
\begin{aligned}
(P_{\mu\nu}V^\mu)n^\nu
&=g_{\mu\nu}V^\mu n^\nu
-\sigma n_\mu n_\nu V^\mu n^\nu\\
&=V^\mu n_\mu-\sigma^2V^\mu n_\mu\\
&=0.
\end{aligned}
\tag{D.38}
$$

若 $V^\mu$ 和 $W^\nu$ 已经与 $\Sigma$ 相切，投影张量作用在它们上面就同度规一样：

$$
\begin{aligned}
P_{\mu\nu}V^\mu W^\nu
&=g_{\mu\nu}V^\mu W^\nu
-\sigma n_\mu n_\nu V^\mu W^\nu\\
&=g_{\mu\nu}V^\mu W^\nu.
\end{aligned}
\tag{D.39}
$$

投影张量还是幂等的：作用两次或更多次与只作用一次结果相同，

$$
\begin{aligned}
P^\mu{}_{\lambda}P^\lambda{}_{\nu}
&=(\delta^\mu{}_{\lambda}-\sigma n^\mu n_\lambda)
(\delta^\lambda{}_{\nu}-\sigma n^\lambda n_\nu)\\
&=\delta^\mu{}_{\nu}
-\sigma n^\mu n_\nu
-\sigma n^\mu n_\nu
+\sigma^3n^\mu n_\nu\\
&=P^\mu{}_{\nu}.
\end{aligned}
\tag{D.40}
$$

$P_{\mu\nu}$ 有时称为超曲面的**第一基本形式**（first fundamental form）。它对与 $\Sigma$ 相切的向量确实如同度规，而超曲面往往是类空的，所以也常被称为“空间度规”。

早先初次讨论流形与曲率时，我们仔细区分了空间的“内蕴”曲率和“外蕴”曲率：前者由 Riemann 张量刻画，后者依赖空间怎样嵌入某个更大的空间。例如，一个二维环面可以拥有平直度规，但任何把它嵌入 $\mathbb{R}^3$ 的方式都会让它看起来弯曲。现在可以正式定义适用于超曲面的外蕴曲率。

设有一族超曲面 $\Sigma$，其单位法向量场为 $n^\mu$；以任意方式把 $n^\mu$ 延拓到一个区域中。$\Sigma$ 的**外曲率**（extrinsic curvature）定义为投影张量沿法向量场的 Lie 导数：

$$
K_{\mu\nu}
=
\frac12\mathcal{L}_nP_{\mu\nu}.
\tag{D.41}
$$

<!-- source: PDF 463; printed: 450 -->

外曲率有时也称为子流形的**第二基本形式**。它表示沿法向量场移动时，投影张量——若 $\Sigma$ 为类空，就是空间度规——的变化率；其值与如何把 $n^\mu$ 延拓到 $\Sigma$ 之外无关。经过几行计算可证明，这一定义等价于度规自身经过投影的 Lie 导数：

$$
K_{\mu\nu}
=
\frac12P^\alpha{}_{\mu}P^\beta{}_{\nu}
\mathcal{L}_n g_{\alpha\beta}.
\tag{D.42}
$$

由式（B.20）可知，$g_{\mu\nu}$ 的 Lie 导数由法向量的对称化协变导数给出，于是

$$
K_{\mu\nu}
=
P^\alpha{}_{\mu}P^\beta{}_{\nu}
\nabla_{(\alpha}n_{\beta)}.
\tag{D.43}
$$

这里没有假设 $n^\mu$ 的积分曲线是测地线，因此可以定义其加速度：

$$
a^\mu=n^\nu\nabla_\nu n^\mu.
\tag{D.44}
$$

再作几行计算，式（D.43）等价于

$$
\boxed{
K_{\mu\nu}
=
\nabla_\mu n_\nu
-\sigma n_\mu a_\nu
}.
\tag{D.45}
$$

外曲率有若干很好的性质。它是对称的：

$$
K_{\mu\nu}=K_{\nu\mu}.
\tag{D.46}
$$

这从式（D.41）看很明显，从式（D.45）看则不那么显然。利用 $n^\mu$ 与超曲面正交这一事实，可以核验式（D.45）确实对称。外曲率也同法向方向正交，即它是“纯空间的”：

$$
\begin{aligned}
n^\mu K_{\mu\nu}
&=n^\mu\nabla_\mu n_\nu
-\sigma n^\mu n_\mu a_\nu\\
&=a_\nu-\sigma^2a_\nu\\
&=0.
\end{aligned}
\tag{D.47}
$$

可以把普通协变导数投影到超曲面上，从而定义沿超曲面作用的协变导数 $\hat\nabla_\mu$。例如，对一个 $(1,1)$ 型张量 $X^\mu{}_{\nu}$，有

$$
\hat\nabla_\sigma X^\mu{}_{\nu}
=
P^\alpha{}_{\sigma}
P^\mu{}_{\beta}
P^\gamma{}_{\nu}
\nabla_\alpha X^\beta{}_{\gamma}.
\tag{D.48}
$$

由此可构造超曲面上的曲率张量 $\hat R^\rho{}_{\sigma\mu\nu}$。例如，让协变导数的对易子作用在与超曲面相切的向量场 $V^\mu$ 上，其中 $P^\mu{}_{\nu}V^\nu=V^\mu$：

$$
[\hat\nabla_\mu,\hat\nabla_\nu]V^\rho
=
\hat R^\rho{}_{\sigma\mu\nu}V^\sigma.
\tag{D.49}
$$

<!-- source: PDF 464; printed: 451 -->

有两个重要方程把 $n$ 维 Riemann 曲率同超曲面的 Riemann 曲率以及外曲率联系起来。**Gauss 方程**为

$$
\hat R^\rho{}_{\sigma\mu\nu}
=
P^\rho{}_{\alpha}
P^\beta{}_{\sigma}
P^\gamma{}_{\mu}
P^\delta{}_{\nu}
R^\alpha{}_{\beta\gamma\delta}
+\sigma\left(
K^\rho{}_{\mu}K_{\sigma\nu}
-K^\rho{}_{\nu}K_{\sigma\mu}
\right).
\tag{D.50}
$$

取适当的迹可得超曲面的曲率标量：

$$
\hat R
=
P^{\sigma\nu}\hat R^\lambda{}_{\sigma\lambda\nu}
=
R
-\sigma\left(
2R_{\mu\nu}n^\mu n^\nu
-K^2
+K^{\mu\nu}K_{\mu\nu}
\right),
\tag{D.51}
$$

其中 $K=g^{\mu\nu}K_{\mu\nu}$。另有 **Codazzi 方程**：

$$
\hat\nabla_{[\mu}K_{\nu]}{}^\mu
=
\frac12P^\sigma{}_{\nu}R_{\rho\sigma}n^\rho.
\tag{D.52}
$$

式（D.50）与式（D.52）合称 Gauss–Codazzi 方程。

> **公式勘误**：这里采用了作者的两项官方勘误。式（D.50）右端第二个投影张量的下标应为 $\sigma$，原印刷本误作 $\rho$。式（D.51）中两个外曲率平方项的符号均有误；上式给出的是修正后的 $-K^2+K^{\mu\nu}K_{\mu\nu}$。

为免混淆，应当注意外曲率的定义在不同资料中会有所变化。有些资料把法向量场处处取成测地的，即 $a^\mu=0$；此时各式大为简化，并容易证明

$$
\begin{aligned}
K_{\mu\nu}
&=\frac12\mathcal{L}_nP_{\mu\nu}\\
&=\frac12\mathcal{L}_ng_{\mu\nu}\\
&=\nabla_\mu n_\nu.
\end{aligned}
\tag{D.53}
$$

若预先给定了一整族超曲面，就不能直接假定单位法向量场的积分曲线为测地线。若只给定单个曲面，则可以通过求解测地线方程，把法向量场从该曲面向外延拓。

另一些资料更愿意把外曲率看作定义在 $\Sigma$ 上的张量 $\hat K_{ij}$，而非 $M$ 中的张量。若嵌入为 $\phi:y^i\mapsto x^\mu$，这一版本的外曲率由拉回给出：

$$
\begin{aligned}
\hat K_{ij}
&=(\phi^*K)_{ij}\\
&=
\frac{\partial x^\mu}{\partial y^i}
\frac{\partial x^\nu}{\partial y^j}
K_{\mu\nu}.
\end{aligned}
\tag{D.54}
$$

还有一些资料把外曲率定义成这里定义的负值。在这些不同约定之间来回换算并不困难。

## 带边界流形

最后，一个极常见的超曲面来源，是流形 $M$ 中某个闭区域 $N$ 的边界，惯例记作 $\partial N$。例如，若 $N$ 由 $\mathbb{R}^n$ 中到原点距离满足 $r\le1$ 的所有点组成，那么边界 $\partial N$ 显然就是由 $r=1$ 定义的 $(n-1)$ 维球面。

还可以把这个概念推广到不只考虑某个闭区域、而是考虑整个附有边界的流形的情形。

<!-- source: PDF 465; printed: 452 -->

**带边界流形**（manifold with boundary）是配备一族坐标图册的集合，与第 2 章中的流形定义完全相同，只是坐标图取值于 $\mathbb{R}^n$ 的上半空间，也就是所有满足 $x^1\ge0$ 的 $n$ 元组 $\{x^1,\ldots,x^n\}$。边界 $\partial M$ 是所有被坐标图映到 $x^1=0$ 的点的集合。因此，$\partial M$ 自然是一个没有边界的 $(n-1)$ 维子流形。

后面讨论共形图时会遇到流形边界的一个例子：共形无穷远可以视为时空的边界。借助连续性，可以把边界当作超曲面来处理，包括在其上诱导度规等；在边界上取导数时偶尔需要谨慎，但多数时候可以相信我们的直觉。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 C 子流形](./appendix-c-submanifolds.md) · [下一篇：附录 E Stokes 定理](./appendix-e-stokes-theorem.md)
