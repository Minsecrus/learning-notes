# 附录 F 测地线丛

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 E Stokes 定理](./appendix-e-stokes-theorem.md) · [下一篇：附录 G 共形变换](./appendix-g-conformal-transformations.md)

<!-- source: PDF 472; printed: 459 -->

第 3.10 节推导了测地线偏离方程，它支配连接一参数邻近测地线族的分离向量如何演化。若想更完整地理解邻近测地线的行为，需要考察一整**测地线丛**（geodesic congruence），不只考察一参数族。

线丛是时空某个开区域中的一组曲线，使区域中每一点恰好位于其中一条曲线上。可以把测地线丛看作一群互不作用的粒子在时空中沿互不相交的路径运动。若测地线相交，线丛必然在该点终止。多维线丛包含大量信息；这里关注单条测地线邻域内的局部行为，这会使问题变得相当容易处理。

## 类时测地线丛

令

$$
U^\mu=\frac{dx^\mu}{d\tau}
$$

为四维类时测地线丛的切向量场；等价地，它是某种无压流体的四速度场。若流体有压力，$U^\mu$ 的积分曲线一般不会描述测地线。类光（null）测地线会带来特殊问题，后面再讨论；先考虑类时情形。切向量场已归一化并满足测地线方程：

$$
U_\mu U^\mu=-1,
\qquad
U^\nu\nabla_\nu U^\mu=0.
\tag{F.1}
$$

讨论第 3.10 节的测地线偏离方程时，我们考虑了从一条测地线指向邻近测地线的分离向量 $V^\mu$，并得到

$$
\frac{DV^\mu}{d\tau}
\equiv
U^\nu\nabla_\nu V^\mu
=
B^\mu{}_{\nu}V^\nu,
\tag{F.2}
$$

其中

$$
B^\mu{}_{\nu}=\nabla_\nu U^\mu.
\tag{F.3}
$$

第 3 章使用的是 $T$ 而非 $U$，以及 $S$ 而非 $V$。因此，张量 $B_{\mu\nu}$ 可以看作量度 $V^\mu$ 沿线丛平行移动失败的程度；换言之，它描述邻近测地线偏离彼此完全平行的程度。

若要处理整个线丛，而非一参数曲线族，可以设想建立三个与类时测地线正交的法向量，并追踪它们的演化。这组向量不能保持平行移动的程度会告诉我们，线丛中的邻近测地线怎样演化。等价地，可以设想以某点为中心放置一个测试粒子小球，然后定量描述这些粒子相对于中心测地线的演化。所幸，需要追踪的全部信息都包含在 $B_{\mu\nu}$ 的行为中。

<!-- source: PDF 473; printed: 460 -->

给定向量场 $U^\mu$，在每一点 $p$ 考虑 $T_pM$ 中由所有同 $U^\mu$ 正交的向量构成的子空间。$T_pM$ 中任意向量都可以通过投影张量投到这个子空间：

$$
P^\mu{}_{\nu}
=
\delta^\mu{}_{\nu}+U^\mu U_\nu.
\tag{F.4}
$$

这与附录 D 讨论超曲面时的投影张量很相似。此处投向的是切空间的一个向量子空间，并未投向某个子流形，但思想相同。$B_{\mu\nu}$ 已经位于法向子空间中，因为

$$
\begin{aligned}
U^\mu B_{\mu\nu}
&=U^\mu\nabla_\nu U_\mu=0,\\
U^\nu B_{\mu\nu}
&=U^\nu\nabla_\nu U_\mu=0.
\end{aligned}
\tag{F.5}
$$

第一式来自 $\nabla_\nu(U^\mu U_\mu)=\nabla_\nu(-1)=0$，第二式来自测地线方程。不要把 $B_{\mu\nu}$ 同式（D.53）的外曲率 $K_{\mu\nu}$ 混淆；差别在于这里的切向量场 $U^\mu$ 一般不会与任何超曲面正交。

作为 $(0,2)$ 型张量，$B_{\mu\nu}$ 可以分解为对称部分和反对称部分，对称部分还可继续分为迹和无迹部分。由于 $B_{\mu\nu}$ 位于法向子空间中，可以用 $P_{\mu\nu}$ 在分解中取迹。结果写成

$$
B_{\mu\nu}
=
\frac13\theta P_{\mu\nu}
+\sigma_{\mu\nu}
+\omega_{\mu\nu}.
\tag{F.6}
$$

这里引入三个描述分解的量。首先是线丛的**膨胀量**（expansion）

$$
\theta
=
P^{\mu\nu}B_{\mu\nu}
=
\nabla_\mu U^\mu,
\tag{F.7}
$$

它就是 $B_{\mu\nu}$ 的迹。膨胀量描述以所考察测地线为中心的测试粒子球体积怎样变化。它自然是标量，因为体积的整体膨胀或收缩只需一个数来描述。

**剪切**（shear）$\sigma_{\mu\nu}$ 定义为

$$
\sigma_{\mu\nu}
=
B_{(\mu\nu)}-\frac13\theta P_{\mu\nu}.
\tag{F.8}
$$

它是对称且无迹的。剪切表示测试粒子集合的形状畸变，例如从初始球体变成椭球体；对称性表示沿某个方向（例如 $x$ 方向）的伸长与沿反方向 $-x$ 的伸长相同。

<!-- source: PDF 474; printed: 461 -->

最后是**旋转**（rotation）$\omega_{\mu\nu}$：

$$
\omega_{\mu\nu}=B_{[\mu\nu]}.
\tag{F.9}
$$

它是反对称张量，这也很合理。例如，$xy$ 分量描述绕 $z$ 轴一个方向的旋转，而 $yx$ 分量描述绕同一轴的反向旋转。

线丛的演化由这些量沿路径的协变导数描述，其中 $D/d\tau=U^\sigma\nabla_\sigma$。可以先直接对整个 $B_{\mu\nu}$ 计算，再作适当分解：

$$
\begin{aligned}
\frac{DB_{\mu\nu}}{d\tau}
&\equiv U^\sigma\nabla_\sigma B_{\mu\nu}
=U^\sigma\nabla_\sigma\nabla_\nu U_\mu\\
&=U^\sigma\nabla_\nu\nabla_\sigma U_\mu
+U^\sigma R^\lambda{}_{\mu\sigma\nu}U_\lambda\\
&=\nabla_\nu(U^\sigma\nabla_\sigma U_\mu)
-(\nabla_\nu U^\sigma)(\nabla_\sigma U_\mu)
-R_{\lambda\mu\nu\sigma}U^\sigma U^\lambda\\
&=-B^\sigma{}_{\nu}B_{\mu\sigma}
-R_{\lambda\mu\nu\sigma}U^\sigma U^\lambda.
\end{aligned}
\tag{F.10}
$$

对此式取迹，就得到膨胀量的演化方程：

$$
\boxed{
\frac{d\theta}{d\tau}
=
-\frac13\theta^2
-\sigma_{\mu\nu}\sigma^{\mu\nu}
+\omega_{\mu\nu}\omega^{\mu\nu}
-R_{\mu\nu}U^\mu U^\nu
}.
\tag{F.11}
$$

这就是 **Raychaudhuri 方程**，它在奇点定理的证明中起关键作用。有时会取消线丛必须满足测地线方程这一要求；这只会在右端增加一项 $\nabla_\mu(U^\nu\nabla_\nu U^\mu)$。

式（F.10）的对称无迹部分为

$$
\begin{aligned}
\frac{D\sigma_{\mu\nu}}{d\tau}
={}&-\frac23\theta\sigma_{\mu\nu}
-\sigma_{\mu\alpha}\sigma^\alpha{}_{\nu}
-\omega_{\mu\alpha}\omega^\alpha{}_{\nu}\\
&+\frac13P_{\mu\nu}
\left(
\sigma_{\alpha\beta}\sigma^{\alpha\beta}
-\omega_{\alpha\beta}\omega^{\alpha\beta}
\right)\\
&+C_{\alpha\nu\mu\beta}U^\alpha U^\beta
+\frac12\bar R_{\mu\nu},
\end{aligned}
\tag{F.12}
$$

其中 $\bar R_{\mu\nu}$ 是 $R_{\mu\nu}$ 经空间投影后的无迹部分：

$$
\bar R_{\mu\nu}
=
P^\alpha{}_{\mu}P^\beta{}_{\nu}R_{\alpha\beta}
-\frac13P_{\mu\nu}P^{\alpha\beta}R_{\alpha\beta}.
\tag{F.13}
$$

式（F.10）的反对称部分则是

$$
\frac{D\omega_{\mu\nu}}{d\tau}
=
-\frac23\theta\omega_{\mu\nu}
+\sigma_\mu{}^\alpha\omega_{\nu\alpha}
-\sigma_\nu{}^\alpha\omega_{\mu\alpha}.
\tag{F.14}
$$

这些方程没有 Raychaudhuri 方程那么常用，但保留下来很有帮助。

<!-- source: PDF 475; printed: 462 -->

## 聚焦性质

下面简要示范 Raychaudhuri 方程的用法。首先，由于剪切和旋转都是“空间”张量，

$$
\sigma_{\mu\nu}\sigma^{\mu\nu}\ge0,
\qquad
\omega_{\mu\nu}\omega^{\mu\nu}\ge0.
\tag{F.15}
$$

其次，式（F.11）的最后一项正是把 Einstein 方程与强能量条件（SEC）结合时出现的量。由 Einstein 方程可知

$$
R_{\mu\nu}U^\mu U^\nu
=
8\pi G
\left(T_{\mu\nu}-\frac12Tg_{\mu\nu}\right)
U^\mu U^\nu,
\tag{F.16}
$$

而 SEC 要求此式右端对任意类时 $U^\mu$ 都非负。因此，若 SEC 成立，就有

$$
R_{\mu\nu}U^\mu U^\nu\ge0.
\tag{F.17}
$$

最后，$\omega_{\mu\nu}=0$ 当且仅当向量场 $U^\mu$ 与一族超曲面正交。这直接来自两项事实：旋转是空间张量，即 $U^\mu\omega_{\mu\nu}=0$；而据 Frobenius 定理，$U^\mu$ 与超曲面正交的充要条件是 $U_{[\mu}\nabla_\nu U_{\rho]}=0$。具体细节留给读者核验。

因此，若线丛的切向量场与超曲面正交，所在时空又满足 Einstein 方程和 SEC，Raychaudhuri 方程蕴含

$$
\frac{d\theta}{d\tau}
\le
-\frac13\theta^2.
\tag{F.18}
$$

此式容易积分，得到

$$
\theta^{-1}(\tau)
\ge
\theta_0^{-1}+\frac13\tau.
\tag{F.19}
$$

考虑一个与超曲面正交、初始时正在会聚而非膨胀的线丛，即 $\theta_0<0$。式（F.19）说明会聚会持续，并且必然在有限固有时

$$
\tau\le-3\theta_0^{-1}
$$

内遇到焦散，也就是测地线相交的位置。换言之，满足 SEC 的物质无法开始把测地线推开，只会提高它们会聚的速率。

当然，这个结果只适用于某个任意选定的线丛，出现焦散也不表示时空一定存在奇性；即便在平直时空中，测地线也经常相交。不过，奇点定理的许多证明都利用 Raychaudhuri 方程的这一性质，说明时空必定在某种意义下测地不完备。

## 类光测地线丛

接下来考察类光测地线丛。这里更棘手，根本原因在于此前的起点——研究切向量场法向三维子空间中的向量演化——不再十分合适，因为类光曲线的切向量与自身正交。类光情形中关心的是一个二维“空间”子空间内的向量演化；这些向量与类光切向量场

$$
k^\mu=\frac{dx^\mu}{d\lambda}
$$

正交。

<!-- source: PDF 476; printed: 463 -->

这个子空间没有唯一的定义，因为不同 Lorentz 参考系中的观察者对“空间向量”的理解不同。面对此问题，有两种合理做法。一种简洁做法是：从所有同 $k^\mu$ 正交的向量构成的三维空间出发，取等价类来定义抽象二维向量空间；若两个向量相差 $k^\mu$ 的一个倍数，就把它们视为等价。

这里采用更直接的办法：选取第二个“辅助”类光（零范数）向量 $l^\mu$，令它在某个参考系中指向与 $k^\mu$ 相反的空间方向，并归一化为

$$
l^\mu l_\mu=0,
\qquad
l^\mu k_\mu=-1.
\tag{F.20}
$$

还要求辅助向量保持平行移动：

$$
k^\mu\nabla_\mu l^\nu=0.
\tag{F.21}
$$

这同式（F.20）相容，因为平行移动保持内积。辅助类光向量 $l^\mu$ 远非唯一：所谓指向相反空间方向本身就依赖参考系。不过，可以作出一种选择，并希望重要物理量不依赖这种任意选择。

这样，所关心的二维法向向量空间记为 $T_\perp$，它由同时同 $k^\mu$ 和 $l^\mu$ 正交的向量 $V^\mu$ 构成：

$$
T_\perp
=
\left\{
V^\mu\mid V^\mu k_\mu=0,
\ V^\mu l_\mu=0
\right\}.
\tag{F.22}
$$

我们的任务是追踪位于这个子空间中的偏离向量怎样演化；它们代表一族邻近类光测地线。

投影到法向子空间 $T_\perp$ 需要稍加修改的投影张量：

$$
Q_{\mu\nu}
=
g_{\mu\nu}+k_\mu l_\nu+k_\nu l_\mu.
\tag{F.23}
$$

$Q_{\mu\nu}$ 作用在 $T_\perp$ 中的向量 $V^\mu,W^\mu$ 上时如同度规，同时会湮灭任何与 $k^\mu$ 或 $l^\mu$ 成比例的量。它的一些有用性质是

$$
\begin{aligned}
Q_{\mu\nu}V^\mu W^\nu&=g_{\mu\nu}V^\mu W^\nu,\\
Q^\mu{}_{\nu}V^\nu&=V^\mu,\\
Q^\mu{}_{\nu}k^\nu&=0,\\
Q^\mu{}_{\nu}l^\nu&=0,\\
Q^\mu{}_{\nu}Q^\nu{}_{\sigma}&=Q^\mu{}_{\sigma},\\
k^\sigma\nabla_\sigma Q^\mu{}_{\nu}&=0.
\end{aligned}
\tag{F.24}
$$

<!-- source: PDF 477; printed: 464 -->

同类时测地线一样，法向偏离向量 $V^\mu$ 不能保持平行移动的程度由张量 $B^\mu{}_{\nu}=\nabla_\nu k^\mu$ 支配：

$$
\frac{DV^\mu}{d\lambda}
\equiv
k^\nu\nabla_\nu V^\mu
=
B^\mu{}_{\nu}V^\nu.
\tag{F.25}
$$

不过，在类光情形中，整个 $B_{\mu\nu}$ 包含的信息超过需要；相关信息完全包含在其投影版本中：

$$
\hat B^\mu{}_{\nu}
=
Q^\mu{}_{\alpha}Q^\beta{}_{\nu}B^\alpha{}_{\beta}.
\tag{F.26}
$$

利用式（F.24）的各项性质改写式（F.25），即可看出这一点：

$$
\begin{aligned}
\frac{DV^\mu}{d\lambda}
&=k^\nu\nabla_\nu V^\mu\\
&=k^\nu\nabla_\nu(Q^\mu{}_{\rho}V^\rho)\\
&=Q^\mu{}_{\rho}k^\nu\nabla_\nu V^\rho\\
&=Q^\mu{}_{\rho}B^\rho{}_{\nu}V^\nu\\
&=Q^\mu{}_{\rho}B^\rho{}_{\nu}Q^\nu{}_{\sigma}V^\sigma\\
&=\hat B^\mu{}_{\sigma}V^\sigma.
\end{aligned}
\tag{F.27}
$$

所以只需追踪投影张量 $\hat B_{\mu\nu}$ 的演化，无需保留完整的 $B_{\mu\nu}$。

为理解其演化，再把它分解成膨胀、剪切和旋转：

$$
\hat B_{\mu\nu}
=
\frac12\theta Q_{\mu\nu}
+\hat\sigma_{\mu\nu}
+\hat\omega_{\mu\nu},
\tag{F.28}
$$

其中

$$
\begin{aligned}
\theta&=Q^{\mu\nu}\hat B_{\mu\nu}=\hat B^\mu{}_{\mu},\\
\hat\sigma_{\mu\nu}
&=\hat B_{(\mu\nu)}-\frac12\theta Q_{\mu\nu},\\
\hat\omega_{\mu\nu}&=\hat B_{[\mu\nu]}.
\end{aligned}
\tag{F.29}
$$

这里出现 $1/2$ 而非 $1/3$，因为法向空间 $T_\perp$ 是二维的，这也体现为 $Q^{\mu\nu}Q_{\mu\nu}=2$。同类时情形一样，$\hat\omega_{\mu\nu}=0$ 是线丛与超曲面正交的充要条件。

$\hat B_{\mu\nu}$ 沿路径的演化为

$$
\begin{aligned}
\frac{D\hat B_{\mu\nu}}{d\lambda}
&\equiv k^\sigma\nabla_\sigma\hat B_{\mu\nu}
=k^\sigma\nabla_\sigma
\left(Q^\alpha{}_{\mu}Q^\beta{}_{\nu}\nabla_\alpha k_\beta\right)\\
&=Q^\alpha{}_{\mu}Q^\beta{}_{\nu}
k^\sigma\nabla_\sigma\nabla_\alpha k_\beta\\
&=-Q^\alpha{}_{\mu}Q^\beta{}_{\nu}
\left(B^\rho{}_{\alpha}B_{\beta\rho}
+R_{\alpha\lambda\beta\sigma}k^\lambda k^\sigma\right)\\
&=-\hat B_\mu{}^\sigma\hat B_{\nu\sigma}
-Q^\alpha{}_{\mu}Q^\beta{}_{\nu}
R_{\alpha\lambda\beta\sigma}k^\lambda k^\sigma.
\end{aligned}
\tag{F.30}
$$

<!-- source: PDF 478; printed: 465 -->

沿用此前的逻辑，对式（F.30）取迹，可得类光测地线膨胀量的演化方程：

$$
\frac{d\theta}{d\lambda}
=
-\frac12\theta^2
-\hat\sigma_{\mu\nu}\hat\sigma^{\mu\nu}
+\hat\omega_{\mu\nu}\hat\omega^{\mu\nu}
-R_{\mu\nu}k^\mu k^\nu.
\tag{F.31}
$$

令人欣慰的是，这个方程完全不依赖任意选取的辅助向量 $l^\mu$。首先，膨胀量本身不依赖 $l^\mu$：

$$
\begin{aligned}
\theta
&=Q^{\mu\nu}\hat B_{\mu\nu}\\
&=Q^{\mu\nu}B_{\mu\nu}\\
&=g^{\mu\nu}B_{\mu\nu}.
\end{aligned}
\tag{F.32}
$$

第二行来自 $Q^{\mu\nu}Q^\alpha{}_{\nu}=Q^{\mu\alpha}$，第三行来自 $k^\mu B_{\mu\nu}=k^\nu B_{\mu\nu}=0$。这也是起初没有在 $\theta$ 上加帽子的原因。

其次，尽管 $\hat\sigma_{\mu\nu}$ 和 $\hat\omega_{\mu\nu}$ 本身依赖 $l^\mu$，缩并 $\hat\sigma_{\mu\nu}\hat\sigma^{\mu\nu}$ 与 $\hat\omega_{\mu\nu}\hat\omega^{\mu\nu}$ 也都不依赖它；读者可以自行验证。最后，取迹时曲率张量项中的投影张量全部消失。因此，膨胀量的演化有良定义，不依赖任何任意选择。

由于 $k^\mu$ 是类光向量，Einstein 方程给出

$$
\begin{aligned}
R_{\mu\nu}k^\mu k^\nu
&=8\pi G
\left(T_{\mu\nu}-\frac12Tg_{\mu\nu}\right)
k^\mu k^\nu\\
&=8\pi G T_{\mu\nu}k^\mu k^\nu.
\end{aligned}
\tag{F.33}
$$

要使此量非负，只需援引类光能量条件（NEC）；它是第 3 章讨论的所有能量条件中限制最弱的一个。因此，与类时测地线相比，类光测地线会在更一般的情形下趋向会聚成焦散。

还可以继续得到剪切的演化方程

$$
\frac{D\hat\sigma_{\mu\nu}}{d\lambda}
=
-\theta\hat\sigma_{\mu\nu}
-Q^\alpha{}_{\mu}Q^\beta{}_{\nu}
C_{\alpha\lambda\beta\sigma}k^\lambda k^\sigma,
\tag{F.34}
$$

以及旋转的演化方程

$$
\frac{D\hat\omega_{\mu\nu}}{d\lambda}
=
-\theta\hat\omega_{\mu\nu}.
\tag{F.35}
$$

这些方程不如膨胀量方程自然，因为剪切和旋转确实依赖 $l^\mu$ 的选择；不过，它们在特定情形中仍然有用。

<!-- source: PDF 479; printed: 466 -->

PDF 第 479 页为空白页。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 E Stokes 定理](./appendix-e-stokes-theorem.md) · [下一篇：附录 G 共形变换](./appendix-g-conformal-transformations.md)
