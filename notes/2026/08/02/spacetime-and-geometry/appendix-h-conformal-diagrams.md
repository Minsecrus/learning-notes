# 附录 H 共形图

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 G 共形变换](./appendix-g-conformal-transformations.md) · [下一篇：附录 I 平行传播子](./appendix-i-the-parallel-propagator.md)

<!-- source: PDF 484; printed: 471 -->

原则上，弯曲时空流形可以复杂到几乎无法处理。所幸，许多物理上现实的情形都可以用高度对称的流形近似，尤其是球对称流形。然而，即使时空具有对称性，只要试图想象这种流形的整体结构，它仍会严重挑战我们的空间直觉。因此，若能用一种标准化的时空图表示充分对称时空的整体性质与因果结构，就会非常有用。（这里的“因果结构”是指由光锥定义的不同事件之过去与未来之间的关系。）**共形图**（conformal diagram，又称 Carter–Penrose 图，简称 Penrose 图）优雅地实现了这一目标。

共形图就是一幅普通时空图，只是我们对度规作了一个格外巧妙的坐标变换。目标是画出由光锥定义的时空因果结构，所以所谓“巧妙”，意味着新坐标 $x^{\mu'}$ 含有一个“类时”坐标和一个“径向”坐标，并且径向光锥能在整幅时空图上始终画成 $45^\circ$。此外，我们还希望选择这样一组坐标：在其中，“无穷远”只对应某个有限的坐标值，从而可以一眼看清整个时空的结构。

如前一附录所述，共形变换保持光锥不变。为了找到一组使光锥呈 $45^\circ$ 的坐标，只需找到这样的坐标：我们感兴趣的度规在其中与另一个已知光锥呈 $45^\circ$ 的度规共形相关。（光锥在图上画出的角度当然取决于单位选择，等价地说，也取决于坐标轴怎样绘制；真正的意思是找到一组坐标 $T,R$，使径向类光射线满足 $\mathrm dT/\mathrm dR=\pm1$。）

先从 Minkowski 时空着手，看看这种技巧怎样运作。Minkowski 度规在极坐标中为

$$
\mathrm ds^2
=
-\mathrm dt^2+\mathrm dr^2+r^2\mathrm d\Omega^2,
\tag{H.1}
$$

其中 $\mathrm d\Omega^2=\mathrm d\theta^2+\sin^2\theta\,\mathrm d\phi^2$ 是单位二维球面的度规。在这里，光锥本来就能处处画成 $45^\circ$（轨迹 $t=\pm r$ 是类光的）；不过，我们希望换到取值范围有限的坐标，使整个时空的因果结构更加透明。$\theta,\phi$ 坐标不会发生任何特别的事情，但必须仔细追踪另外两个坐标的取值范围。

<!-- source: PDF 485; printed: 472 -->

起初当然有

$$
-\infty<t<\infty,
\qquad
0\le r<\infty.
\tag{H.2}
$$

严格说来，世界线 $r=0$ 表示一个坐标奇点，应当由另一张坐标图覆盖；不过，我们都清楚这里发生了什么，因此就把 $r=0$ 当作行为良好的位置来处理。

第一个猜想——它最终行不通——也许是直接重新缩放类时坐标与径向坐标，使它们覆盖有限区间。一个很自然的候选是图 H.1 所画的反正切函数，并定义 $\bar t=\arctan t$、$\bar r=\arctan r$。利用 $\mathrm d\tan x=(1/\cos^2x)\mathrm dx$，度规会变成

$$
\mathrm ds^2
=
-\frac{1}{\cos^4\bar t}\,(\mathrm d\bar t)^2
+\frac{1}{\cos^4\bar r}\,(\mathrm d\bar r)^2
+\tan^2\bar r\,\mathrm d\Omega^2,
\tag{H.3}
$$

其中

$$
\begin{aligned}
-\frac{\pi}{2}&<\bar t<\frac{\pi}{2},\\
0&\le\bar r<\frac{\pi}{2}.
\end{aligned}
\tag{H.4}
$$

好消息是新坐标的取值范围有限；坏消息是光锥的斜率

$$
\frac{\mathrm d\bar t}{\mathrm d\bar r}
=
\pm\frac{\cos^2\bar t}{\cos^2\bar r}
$$

并不等于我们想要的 $\pm1$。若画出相应的时空图——读者也许愿意把它当作消遣——便很难看清类光射线会走向何方，尤其是在时空边缘附近。

走出这条死胡同的方法，是进一步发挥一点聪明才智：先不直接摆弄原来的 $t,r$ 坐标，改用类光坐标

$$
\begin{aligned}
u&=t-r,\\
v&=t+r.
\end{aligned}
\tag{H.5}
$$

**图 H.1**　反正切函数把整条实数轴映射到一个有限区间。曲线单调穿过原点，并在 $x\to\pm\infty$ 时分别趋近水平渐近线 $\arctan x=\pm\pi/2$。

<!-- source: PDF 486; printed: 473 -->

**图 H.2**　Minkowski 时空中的类光径向坐标。在 $t$—$r$ 平面中，$u=\text{常数}$ 是斜率 $+1$ 的一族平行类光直线，$v=\text{常数}$ 是斜率 $-1$ 的一族平行类光直线；图中只取 $r\ge0$ 的半平面。

相应的取值范围是

$$
-\infty<u<\infty,
\qquad
-\infty<v<\infty,
\qquad
u\le v.
\tag{H.6}
$$

这些坐标如图 H.2 所示；图上每一点代表一个半径为 $r=\tfrac12(v-u)$ 的二维球面。Minkowski 度规用类光坐标写成

$$
\mathrm ds^2
=
-\frac12\left(
\mathrm du\,\mathrm dv+\mathrm dv\,\mathrm du
\right)
+\frac14(v-u)^2\mathrm d\Omega^2.
\tag{H.7}
$$

现在利用反正切函数把无穷远带到有限坐标值，令

$$
\begin{aligned}
U&=\arctan u,\\
V&=\arctan v,
\end{aligned}
\tag{H.8}
$$

其取值范围为

$$
-\frac{\pi}{2}<U<\frac{\pi}{2},
\qquad
-\frac{\pi}{2}<V<\frac{\pi}{2},
\qquad
U\le V.
\tag{H.9}
$$

于是

$$
\mathrm du\,\mathrm dv+\mathrm dv\,\mathrm du
=
\frac{1}{\cos^2U\cos^2V}
\left(
\mathrm dU\,\mathrm dV+\mathrm dV\,\mathrm dU
\right),
\tag{H.10}
$$

并且

$$
\begin{aligned}
(v-u)^2
&=(\tan V-\tan U)^2\\
&=\frac{1}{\cos^2U\cos^2V}
(\sin V\cos U-\cos V\sin U)^2\\
&=\frac{1}{\cos^2U\cos^2V}\sin^2(V-U).
\end{aligned}
\tag{H.11}
$$

<!-- source: PDF 487; printed: 474 -->

所以，度规（H.7）在这些坐标中为

$$
\mathrm ds^2
=
\frac{1}{4\cos^2U\cos^2V}
\left[
-2\left(\mathrm dU\,\mathrm dV+\mathrm dV\,\mathrm dU\right)
+\sin^2(V-U)\mathrm d\Omega^2
\right].
\tag{H.12}
$$

这个形式颇为诱人，因为度规表现为一个相当简单的表达式乘以整体因子。再通过

$$
T=V+U,
\qquad
R=V-U,
\tag{H.13}
$$

变回类时坐标 $T$ 与径向坐标 $R$，还可以把它写得更漂亮。坐标范围为

$$
0\le R<\pi,
\qquad
|T|+R<\pi.
\tag{H.14}
$$

此时度规为

$$
\mathrm ds^2
=
\omega^{-2}(T,R)
\left(
-\mathrm dT^2+\mathrm dR^2+\sin^2R\,\mathrm d\Omega^2
\right),
\tag{H.15}
$$

其中

$$
\begin{aligned}
\omega
&=2\cos U\cos V\\
&=2\cos\left[\frac12(T-R)\right]
\cos\left[\frac12(T+R)\right]\\
&=\cos T+\cos R.
\end{aligned}
\tag{H.16}
$$

因此，原来的 Minkowski 度规——我们把它记作 $\mathrm ds^2$——可以看成通过共形变换与下列“非物理”度规联系：

$$
\begin{aligned}
(\mathrm d\widetilde s)^2
&=\omega^2(T,R)\mathrm ds^2\\
&=-\mathrm dT^2+\mathrm dR^2+\sin^2R\,\mathrm d\Omega^2.
\end{aligned}
\tag{H.17}
$$

这个度规描述流形 $\mathbb R\times S^3$；其中三维球面纯粹是类空的、完全圆，并且不随时间变化。这个度规具有曲率，与 Minkowski 时空不同。无需为此担心，因为它并非物理度规；无论选择什么坐标，经共形变换得到的真实物理度规都只是平直时空。事实上，（H.17）正是“Einstein 静态宇宙”的度规；它是带有理想流体与宇宙学常数的 Einstein 方程的静态解（图 H.3）。当然，$\mathbb R\times S^3$ 上坐标的完整范围通常是 $-\infty<T<\infty$、$0\le R\le\pi$，而 Minkowski 时空只映射到（H.14）定义的子空间。整个 $\mathbb R\times S^3$ 可以画成一个圆柱，其中每个 $T=\text{常数}$ 的圆代表一个三维球面。阴影区域代表 Minkowski 时空。把阴影区域展开，就会得到图 H.4 所示的三角形 Minkowski 时空；这就是共形图。图中每一点代表一个二维球面。

<!-- source: PDF 488; printed: 475 -->

**图 H.3**　把 Einstein 静态宇宙 $\mathbb R\times S^3$ 画成圆柱。圆柱轴向为 $T$，圆周上的两个对跖点标为 $R=0$ 与 $R=\pi$；由 $T=-\pi$、$T=\pi$ 两个顶点向外张开的阴影双锥形区域与 Minkowski 时空共形相关。

事实上，Minkowski 时空只对应上述图形的**内部**（包括 $R=0$）；边界并不属于原来的时空。这些边界称为**共形无穷远**（conformal infinity），原时空与共形无穷远的并称为**共形紧化**（conformal compactification），它是一个带边界流形。共形图的结构让我们可以把共形无穷远细分成几个不同区域。

**图 H.4**　Minkowski 时空的共形图。整幅图中的光锥斜率都是 $\pm45^\circ$。左侧竖边为 $R=0$，上、下端点分别为 $i^+$、$i^-$，右端点为 $i^0$；上、下斜边分别是 $\mathscr I^+$ 与 $\mathscr I^-$。图内弯曲线分别表示 $t=\text{常数}$ 与 $r=\text{常数}$。

```text
             i⁺
             ●
      R = 0  │╲  ℐ⁺
             │ ╲
             │  ● i⁰
             │ ╱
             │╱  ℐ⁻
             ●
             i⁻
```

<!-- source: PDF 489; printed: 476 -->

共形无穷远的各部分为：

- $i^+$：未来类时无穷远，$T=\pi$、$R=0$；
- $i^0$：空间无穷远，$T=0$、$R=\pi$；
- $i^-$：过去类时无穷远，$T=-\pi$、$R=0$；
- $\mathscr I^+$：未来类光无穷远，$T=\pi-R$、$0<R<\pi$；
- $\mathscr I^-$：过去类光无穷远，$T=-\pi+R$、$0<R<\pi$。

（$\mathscr I^+$ 与 $\mathscr I^-$ 分别读作 “scri-plus” 和 “scri-minus”。）注意，$i^+$、$i^0$ 与 $i^-$ 实际上都是**点**，因为 $R=0$ 与 $R=\pi$ 是 $S^3$ 的北极和南极。与此同时，$\mathscr I^+$ 与 $\mathscr I^-$ 实际上是类光曲面，拓扑为 $\mathbb R\times S^2$。

Minkowski 时空的共形图包含许多重要特征。径向类光测地线在图中成 $\pm45^\circ$。所有类时测地线都从 $i^-$ 出发并终止于 $i^+$；所有类光测地线都从 $\mathscr I^-$ 出发并终止于 $\mathscr I^+$；所有类空测地线的两端都落在 $i^0$。另一方面，如果非测地的类时曲线变得“渐近类光”，它也可能终止于类光无穷远。

能把整个 Minkowski 时空装进一小张纸当然很漂亮，但这并没有告诉我们太多原先不知道的事情。共形图在表示稍微复杂一些的时空时更有用，例如黑洞时空。正如第 6 章讨论的，渐近平坦时空（或一个时空中的渐近平坦区域）与 Minkowski 时空具有相同的 $\mathscr I^+$、$i^0$ 和 $\mathscr I^-$ 结构。同样重要的是，共形图让我们直观看到时空的因果结构；例如，可以判断两个指定点的过去光锥或未来光锥是否相交。在 Minkowski 时空中，任意两点的相应光锥总会相交；弯曲时空则可能更有意思，正如第 2 章膨胀宇宙的例子已经展示的那样。

下面考察第 2 章引入的宇宙学时空之共形图，它生动说明了这种技巧的用途。为空间引入极坐标后，度规变为

$$
\mathrm ds^2
=
-\mathrm dt^2+t^{2q}
\left(
\mathrm dr^2+r^2\mathrm d\Omega^2
\right),
\tag{H.18}
$$

这里为尺度因子选择了幂律行为 $a(t)=t^q$，并取 $0<q<1$。这个度规与 Minkowski 时空的度规之间有一个关键区别：$t=0$ 处存在奇点，因此坐标范围受到限制：

$$
0<t<\infty,
\tag{H.19}
$$

$$
0\le r<\infty.
\tag{H.20}
$$

除这个受限的坐标范围外，分析过程几乎与平直时空的情形完全相同。原因是可以把度规（H.18）写成平直时空度规乘以一个共形因子；一旦完成这一步，只需重复前面的坐标变换，就能把膨胀宇宙度规表示成 Einstein 静态宇宙度规乘以一个共形因子。

<!-- source: PDF 490; printed: 477 -->

先选取一个新的时间坐标 $\eta$，它有时称为**共形时间**（conformal time），并满足

$$
\mathrm dt^2=t^{2q}\mathrm d\eta^2,
\tag{H.21}
$$

即

$$
\eta=\frac{1}{1-q}t^{1-q}.
\tag{H.22}
$$

这个简单选择使尺度因子作为整体共形因子显现出来：

$$
\mathrm ds^2
=
[(1-q)\eta]^{2q/(1-q)}
\left(
-\mathrm d\eta^2+\mathrm dr^2+r^2\mathrm d\Omega^2
\right).
\tag{H.23}
$$

$\eta$ 的取值范围与 $t$ 相同：

$$
0<\eta<\infty.
\tag{H.24}
$$

注意，$\eta$ 是类时坐标［即向量 $\partial_\eta$ 为类时的，$\mathrm ds^2(\partial_\eta,\partial_\eta)<0$］，但它并不测量共动时钟（空间坐标保持不变的时钟）的固有时。若考察轨迹 $x^\mu(\lambda)=(\eta(\lambda),0,0,0)$ 并计算固有时 $\tau(\eta)$，会发现它等于先前的时间坐标，却不等于这个新坐标：$\tau\propto t\propto\eta^{1/(1-q)}$。所以，$\eta$ 是类时坐标，却不是任何人实际测量的时间。这完全没有问题，它只说明可观测量与时空坐标这两个概念彼此独立。

现在，膨胀宇宙度规已经写成 Minkowski 度规乘以共形因子的形式，可以重复同一串坐标变换——（H.5）、（H.8）与（H.13）——只需让 $\eta$ 取代 $t$。这些变换把坐标从 $(\eta,r)$ 变为 $(T,R)$，此时取值范围为

$$
0\le R,
\qquad
0<T,
\qquad
T+R<\pi.
\tag{H.25}
$$

度规（H.23）变为

$$
\mathrm ds^2
=
\omega^{-2}(T,R)
\left(
-\mathrm dT^2+\mathrm dR^2+\sin^2R\,\mathrm d\Omega^2
\right),
\tag{H.26}
$$

运用一番颇为英勇的三角恒等式计算，可以把共形因子写成

$$
\omega(T,R)
=
\left(
\frac{\cos T+\cos R}{2\sin T}
\right)^{2q}
(\cos T+\cos R).
\tag{H.27}
$$

> **公式核对说明**：式（H.27）按扫描版原样保留，作者官方勘误没有列出此项。由（H.5）、（H.8）与（H.13）可得 $\eta=(u+v)/2=\sin T/(\cos T+\cos R)$；再严格依照印刷式（H.23）—（H.26）逐步代入，会得到 $\omega=(\cos T+\cos R)\left[(\cos T+\cos R)/((1-q)\sin T)\right]^{q/(1-q)}$。它与扫描式的指数和常数不同，显示扫描式内部可能存在未收录的排印问题。下面的因果结构结论只依赖共形因子在物理时空内部处处非零以及坐标范围，并不依赖其精确形式。

共形因子的精确形式其实并非首要问题；关键在于，我们再次把度规表示成 Einstein 静态宇宙的度规乘以一个共形因子。这个例子与平直时空情形之间的重要区别在于，

<!-- source: PDF 491; printed: 478 -->

**图 H.5**　当 $a(t)\propto t^q$ 且 $0<q<1$ 时，Robertson–Walker 宇宙的共形图。虚线表示 $t=0$ 的奇点，它也对应 $T=0$；左边界为 $R=0$，上端点、斜边与右端点分别为 $i^+$、$\mathscr I^+$ 与 $i^0$。

```text
             i⁺
             ●
      R = 0  │ ╲  ℐ⁺
             │  ╲
      T = 0  ●╌╌╌● i⁰
             奇点
```

类时坐标在 $T=0$ 的奇点处终止；除此以外，这幅时空图与平直时空的图完全相同。因此得到图 H.5 的共形图，它很像 Minkowski 时空共形图（图 H.4）的上半部分。光锥依旧画成 $45^\circ$。现在可以直接从共形图看清因果结构：很容易在时空中选出两个事件，使它们的过去光锥尚未相交就先撞上奇点（而未来光锥总会重叠）。对于更复杂的几何，这种便利的时空表示方法会更加有用。

---

[返回系列目录](../spacetime-and-geometry.md) · [上一篇：附录 G 共形变换](./appendix-g-conformal-transformations.md) · [下一篇：附录 I 平行传播子](./appendix-i-the-parallel-propagator.md)
