# 宇宙学物质与 Friedmann 方程

<!-- CARROLL_NAV_TOP -->
> 完整译文 · 原 PDF 第 224–238 页 · [本章入口](../08-cosmology.md) · [全书入口](../../carroll-general-relativity.md)
<!-- /CARROLL_NAV_TOP -->

## 完美流体的能量—动量张量

宇宙中含有物质，因此我们不关注 Einstein 方程的真空解。我们将选择用完美流体来模拟宇宙中的物质和能量。第一节讨论过完美流体；按照那里的定义，完美流体在自身静止系中具有各向同性。完美流体的能量—动量张量可以写成
$$
T_{{\mu\nu}} = (p+\rho)U_\mu U_\nu + pg_{\mu\nu}\ ,
\tag{8.15}
$$
其中，$\rho$ 和 $p$ 分别是在静止系中测得的能量密度与压强，$U^\mu$ 是流体的四维速度。很明显，如果一个在某个参考系中各向同性的流体产生的度规也在某个参考系中各向同性，那么这两个参考系必定重合；也就是说，流体在共动坐标中处于静止状态。此时四维速度为
$$
U^\mu = (1,0,0,0)\ ,
\tag{8.16}
$$
能量—动量张量为
$$
T_{\mu\nu}= \left(\matrix{\rho &0&0&0\cr 0& & & \cr
  0& & g_{ij} p& \cr 0& & & \cr}\right)\ .
\tag{8.17}
$$
把一个指标升高之后，它具有更方便的形式
$$
T^\mu{}_\nu = {\rm diag}(-\rho,p,p,p)\ .
\tag{8.18}
$$
注意，它的迹为
$$
T = T^\mu{}_\mu = -\rho +3p\ .
\tag{8.19}
$$

## 能量守恒与状态方程

在代入 Einstein 方程之前，先考察能量守恒方程的零分量会很有启发性：
$$
\begin{aligned}
0 &=&  \nabla_\mu T^\mu{}_0\cr
  &=&  {\partial}_{\mu }T^\mu{}_0 +\Gamma^\mu_{\mu 0}T^0{}_0
  -\Gamma^\lambda_{\mu 0}T^\mu{}_\lambda\cr
  &=&  -{\partial}_{0}\rho -3{{\dot a}\over a}(\rho+p)\ .
\end{aligned}
\tag{8.20}
$$
为了继续推导，必须选择一个**状态方程**，也就是 $\rho$ 与 $p$ 之间的关系。与宇宙学相关的完美流体几乎全都服从如下简单的状态方程
$$
p=w\rho\ ,
\tag{8.21}
$$
其中 $w$ 是与时间无关的常数。能量守恒方程变为
$$
{{\dot \rho}\over\rho} = -3(1+w){{\dot a}\over{a}}\ ,
\tag{8.22}
$$
积分可得
$$
\rho \propto a^{-3(1+w)}\ .
\tag{8.23}
$$

## 尘埃与辐射

宇宙学流体最常见的两个例子称为**尘埃**和**辐射**。尘埃是无碰撞的非相对论物质，满足 $w=0$。普通恒星和星系就是例子；与能量密度相比，它们的压强可以忽略。尘埃也称为“物质”，能量密度主要来自尘埃的宇宙称为**物质主导**宇宙。物质的能量密度按下式下降
$$
\rho\propto a^{-3}\ .
\tag{8.24}
$$
它的含义很简单：随着宇宙膨胀，粒子数密度随之降低。（对尘埃来说，能量密度以静止能量为主，而静止能量正比于粒子数密度。）“辐射”既可以指真正的电磁辐射，也可以指以足够接近光速的相对速度运动的有质量粒子，以至于它们与光子无法区分（至少就状态方程而言如此）。尽管辐射是完美流体，因而其能量—动量张量由 (8.15) 给出，我们也知道 $T_{\mu\nu}$ 可以用场强表示为
$$
T^{\mu\nu}= {1\over{4\pi}}(F^{\mu\lambda}F^\nu{}_\lambda
  -{1\over 4}g^{\mu\nu} F^{\lambda\sigma}F_{\lambda\sigma})\ .
\tag{8.25}
$$
它的迹为
$$
T^\mu{}_\mu = {1\over{4\pi}}\left[F^{\mu\lambda}F_{\mu\lambda}
  -{1\over 4}(4)F^{\lambda\sigma}F_{\lambda\sigma}\right] = 0\ .
\tag{8.26}
$$
但这个结果也必须等于 (8.19)，所以状态方程是
$$
p = {1\over 3}\rho\ .
\tag{8.27}
$$
大部分能量密度以辐射形式存在的宇宙称为**辐射主导**宇宙。辐射的能量密度按下式下降
$$
\rho \propto a^{-4}\ .
\tag{8.28}
$$
因此，辐射的能量密度下降得比物质稍快一些；这是因为光子数密度的下降方式与非相对论粒子的数密度相同，但单个光子还会随着红移按 $a^{-1}$ 损失能量，稍后我们会看到这一点。（同样，有质量的相对论粒子在共动坐标中“慢下来”时也会损失能量。）我们相信，今天宇宙的能量密度由物质主导，并且 $\rho_{\rm mat}/\rho_{\rm rad}\sim10^6$。不过，过去的宇宙要小得多，在极早期，辐射的能量密度应当占据主导地位。

## 真空能量

有时还会考虑另一种能量—动量形式，即真空本身的能量—动量。向真空中引入能量等价于引入宇宙学常数。含宇宙学常数的 Einstein 方程为
$$
G_{\mu\nu}= 8\pi GT_{\mu\nu}-\Lambda g_{\mu\nu}\ ,
\tag{8.29}
$$
显然，它与没有宇宙学常数、但为真空引入如下能量—动量张量的方程具有相同形式：
$$
T^{\rm (vac)}_{\mu\nu}= -{{\Lambda}\over{8\pi G}}g_{\mu\nu}\ .
\tag{8.30}
$$
它具有完美流体的形式，其中
$$
\rho = -p = {{\Lambda}\over{8\pi G}}\ .
\tag{8.31}
$$
因此 $w=-1$，能量密度与 $a$ 无关，这也正是真空能量密度应有的性质。随着宇宙膨胀，物质和辐射的能量密度都会降低，所以只要真空能量非零，长远来看它就倾向于占据上风（前提是宇宙不开始收缩）。如果发生这种情况，我们就说宇宙变成了**真空主导**宇宙。

## Friedmann 方程

现在转向 Einstein 方程。回想一下，它们可以写成 (4.45) 的形式：
$$
R_{\mu\nu}= 8\pi G\left(T_{\mu\nu}- {1\over 2}g_{\mu\nu}T\right)\ .
\tag{8.32}
$$
${\mu\nu}= 00$ 方程为
$$
-3{{\ddot a}\over a}=4\pi G(\rho+3p)\ ,
\tag{8.33}
$$
${\mu\nu}= ij$ 方程给出
$$
{{\ddot a}\over a} + 2\left({{\dot a}\over a}\right)^2
  +2{k\over{a^2}}= 4\pi G(\rho-p)\ .
\tag{8.34}
$$
（由于各向同性，${\mu\nu}= ij$ 只给出一个彼此独立的方程。）我们可以用 (8.33) 消去 (8.34) 中的二阶导数，再稍作整理，得到
$$
{{\ddot a}\over a}=-{{4\pi G}\over 3}(\rho+3p)\ ,
\tag{8.35}
$$
以及
$$
\left({{\dot a}\over a}\right)^2={{8\pi G}\over 3}\rho
  -{{k}\over a^2}\ .
\tag{8.36}
$$
这两个方程合称 **Friedmann 方程**；满足这些方程且具有 (8.7) 形式度规的宇宙，定义了 Friedmann-Robertson-Walker（FRW）宇宙。

<!-- CARROLL_NAV_BOTTOM -->
---
[← 均匀性、各向同性与 Robertson-Walker 几何](./01-homogeneity-isotropy-and-rw-geometry.md) · [全书入口](../../carroll-general-relativity.md) · [宇宙学参数与尺度因子的演化 →](./03-cosmological-parameters-and-scale-factor-evolution.md)
<!-- /CARROLL_NAV_BOTTOM -->
