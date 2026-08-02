# 弯曲时空与牛顿极限

<!-- CARROLL_NAV_TOP -->
> 完整译文 · 原 PDF 第 104–135 页 · [本章入口](../04-gravitation-and-einstein-equation.md) · [全书入口](../../carroll-general-relativity.md)
<!-- /CARROLL_NAV_TOP -->

## 自由粒子的测地线运动

以上种种应当已经为我们的主张提供了绰绰有余的动机：存在引力时，应把时空看作弯曲流形。现在就让我们接受这一点，并开始建立物理学在弯曲时空中的工作方式。等效原理告诉我们，在足够小的时空区域内，物理定律看起来与狭义相对论中的定律相同。用流形的语言来解释，这句话的意思是：若采用以某一点 $p$ 为基点的黎曼正规坐标 $x^\mu$ 来书写这些定律，描述它们的方程就会取与平直空间中相同的形式。最简单的例子是自由下落（无加速）粒子。在平直空间中，这类粒子沿直线运动；用方程来表示，就是参数化路径 $x^\mu(\lambda)$ 的二阶导数为零：

$$
{{d^2 x^\mu}\over{d\lambda^2}} = 0\ .
\tag{4.8}
$$

按照 EEP，只要坐标 $x^\mu$ 是黎曼正规坐标，这个方程在弯曲空间中就应当原封不动地成立。那么，换用其他坐标系会怎样？就目前的写法而言，(4.8) 并不是张量之间的方程。不过，存在唯一一个张量方程，会在克里斯托费尔符号消失时约化为 (4.8)，它就是

$$
{{d^2 x^\mu}\over{d\lambda^2}}+\Gamma^\mu_{\rho\sigma}
  {{d x^\rho}\over{d\lambda}}{{d x^\sigma}\over{d\lambda}} = 0\ .
\tag{4.9}
$$

当然，这正是测地线方程。因此，在广义相对论中，自由粒子沿测地线运动；我们此前提到过这一点，而现在你已经知道它为何成立了。

## 牛顿极限的三个条件

就自由粒子而言，我们已经论证了时空曲率是描述引力所必需的；但尚未说明它是否足够。为此，我们可以展示牛顿引力理论中熟悉的结果如何纳入这一图景。我们用三个条件来定义“牛顿极限”：粒子运动得很慢（相对于光速而言），引力场很弱（可以看作平直空间的微扰），而且引力场是静态的（不随时间变化）。让我们以固有时 $\tau$ 为仿射参数，看看这些假设会怎样影响测地线方程。“运动得很慢”意味着

$$
{{dx^i}\over{d\tau}}<<{{dt}\over{d\tau}}\ ,
\tag{4.10}
$$

所以测地线方程变成

$$
{{d^2 x^\mu}\over{d\tau^2}}+\Gamma^\mu_{00}
  \left({{d t}\over{d\tau}}\right)^2 = 0\ .
\tag{4.11}
$$

由于引力场是静态的，相关的克里斯托费尔符号 $\Gamma^\mu_{00}$ 可以简化为

$$
\begin{aligned}
\Gamma^\mu_{00}&=& {1\over 2} g^{\mu\lambda}
  ({\partial}_{0} g_{\lambda 0} + {\partial}_{0} g_{0 \lambda} - {\partial}_{\lambda }g_{00})\cr
  &=&  - {1\over 2} g^{\mu\lambda}{\partial}_{\lambda }g_{00}\ .
\end{aligned}
\tag{4.12}
$$

最后，由于引力场很弱，我们可以把度规分解成闵可夫斯基形式加上一个小微扰：

$$
g_{\mu\nu}= \eta_{\mu\nu}+ h_{\mu\nu}\ ,\qquad |h_{\mu\nu}|<<1\ .
\tag{4.13}
$$

（我们采用笛卡尔坐标，所以 $\eta_{\mu\nu}$ 是度规的标准形式。在其他坐标中，对度规微扰 $h_{\mu\nu}$ 所施加的这个“小量条件”其实没有明确意义。）根据逆度规的定义 $g^{\mu\nu}g_{\nu\sigma}=\delta^\mu_\sigma$，可以发现精确到 $h$ 的一阶时，

$$
g^{\mu\nu}= \eta^{\mu\nu}- h^{\mu\nu}\ ,
\tag{4.14}
$$

其中 $h^{\mu\nu}= \eta^{\mu\rho}\eta^{\nu\sigma}h_{\rho\sigma}$。事实上，对任意一个在 $h$ 中具有确定阶数的对象，我们都可以用闵可夫斯基度规来升降指标，因为修正项只会在更高阶才有贡献。

## 从测地线方程恢复牛顿引力

把以上结果合在一起，我们得到

$$
\Gamma^\mu_{00}= - {1\over 2} \eta^{\mu\lambda}{\partial}_{\lambda }h_{00}
  \ .
\tag{4.15}
$$

因此，测地线方程 (4.11) 为

$$
{{d^2 x^\mu}\over{d\tau^2}}={1\over 2} \eta^{\mu\lambda}
  {\partial}_{\lambda }h_{00} \left({{d t}\over{d\tau}}\right)^2\ .
\tag{4.16}
$$

利用 ${\partial}_{0} h_{00}=0$，它的 $\mu=0$ 分量就是

$$
{{d^2 t}\over{d\tau^2}}=0\ .
\tag{4.17}
$$

也就是说，${{dt}\over{d\tau}}$ 是常数。为了考察 (4.16) 的类空分量，请回想 $\eta^{\mu\nu}$ 的类空分量正好就是一个 $3\times 3$ 单位矩阵的各分量。因此有

$$
{{d^2 x^i}\over{d\tau^2}}={1\over 2}\left({{d t}\over{d\tau}}
  \right)^2 {\partial}_{i} h_{00} \ .
\tag{4.18}
$$

方程两边同除以 $\left({{d t}\over{d\tau}}\right)^2$，其效果是把左边的微分变量从 $\tau$ 换成 $t$，于是得到

$$
{{d^2 x^i}\over{d t^2}}={1\over 2}{\partial}_{i} h_{00} \ .
\tag{4.19}
$$

这已经开始非常像牛顿引力理论了。事实上，把这个方程与 (4.4) 比较，就会发现只要作如下认定，二者便完全相同：

$$
h_{00} = -2\Phi\ ,
\tag{4.20}
$$

换句话说，

$$
g_{00} = -(1+2\Phi)\ .
\tag{4.21}
$$

<!-- CARROLL_NAV_BOTTOM -->
---
[← 等效原理与引力红移](./01-equivalence-principle-and-redshift.md) · [全书入口](../../carroll-general-relativity.md) · [弯曲时空中的物理与爱因斯坦方程 →](./03-physics-in-curved-spacetime-and-einstein-equations.md)
<!-- /CARROLL_NAV_BOTTOM -->
