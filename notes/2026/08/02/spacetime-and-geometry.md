# 时空与几何：广义相对论导论中文译注

本系列完整翻译并校注 Sean M. Carroll 的 *Spacetime and Geometry: An Introduction to General Relativity*（Pearson/Addison-Wesley，2004）。正文严格按照教材的九章结构组织，每章一篇；扉页与前言、A–J 十个附录、参考文献和索引另列为补充笔记，因此不会把教材后半部分压缩成摘要。

这里的“译注”包含两层内容：

1. **完整翻译**：保留正文、公式、图题、例题、脚注、交叉引用和章末习题，不用提纲或概述代替原文；
2. **学习注释**：对容易跳步的推导补出中间步骤，对术语给出英文原文，并把译者补充统一标成“译注”，避免与 Carroll 的正文混在一起。

## 版本与页码

- 翻译底本：Pearson/Addison-Wesley 2004 年版，ISBN 0-8053-8732-3；
- PDF 共 526 页；正文印刷页第 1 页对应 PDF 第 14 页；
- 所有章节标题保留原编号，所有编号公式保留原书编号；
- 作者的[官方勘误表](https://www.preposterousuniverse.com/spacetimeandgeometry/)优先于底本中的已知排印错误；
- 作者公开的 [1997 年讲义及 TeX 源码](https://arxiv.org/abs/gr-qc/9712019)只用于交叉校验相同公式，教材新增内容仍以本书扫描页为准。

## 正文章节

| 章节 | 中文标题 | 原书页码 | 笔记 |
| --- | --- | ---: | --- |
| 1 | 狭义相对论与平直时空（Special Relativity and Flat Spacetime） | 1–47 | [第 1 章](./spacetime-and-geometry/01-special-relativity-and-flat-spacetime.md) |
| 2 | 流形（Manifolds） | 48–92 | [第 2 章](./spacetime-and-geometry/02-manifolds.md) |
| 3 | 曲率（Curvature） | 93–150 | [第 3 章](./spacetime-and-geometry/03-curvature.md) |
| 4 | 引力（Gravitation） | 151–192 | [第 4 章](./spacetime-and-geometry/04-gravitation.md) |
| 5 | Schwarzschild 解（The Schwarzschild Solution） | 193–237 | [第 5 章](./spacetime-and-geometry/05-the-schwarzschild-solution.md) |
| 6 | 更一般的黑洞（More General Black Holes） | 238–273 | [第 6 章](./spacetime-and-geometry/06-more-general-black-holes.md) |
| 7 | 微扰理论与引力辐射（Perturbation Theory and Gravitational Radiation） | 274–322 | [第 7 章](./spacetime-and-geometry/07-perturbation-theory-and-gravitational-radiation.md) |
| 8 | 宇宙学（Cosmology） | 323–375 | [第 8 章](./spacetime-and-geometry/08-cosmology.md) |
| 9 | 弯曲时空中的量子场论（Quantum Field Theory in Curved Spacetime） | 376–422 | [第 9 章](./spacetime-and-geometry/09-quantum-field-theory-in-curved-spacetime.md) |

## 前言与附录

- [扉页、版权页与前言](./spacetime-and-geometry/00-front-matter-and-preface.md)
- [附录 A：流形之间的映射](./spacetime-and-geometry/appendix-a-maps-between-manifolds.md)
- [附录 B：微分同胚与 Lie 导数](./spacetime-and-geometry/appendix-b-diffeomorphisms-and-lie-derivatives.md)
- [附录 C：子流形](./spacetime-and-geometry/appendix-c-submanifolds.md)
- [附录 D：超曲面](./spacetime-and-geometry/appendix-d-hypersurfaces.md)
- [附录 E：Stokes 定理](./spacetime-and-geometry/appendix-e-stokes-theorem.md)
- [附录 F：测地线丛](./spacetime-and-geometry/appendix-f-geodesic-congruences.md)
- [附录 G：共形变换](./spacetime-and-geometry/appendix-g-conformal-transformations.md)
- [附录 H：共形图](./spacetime-and-geometry/appendix-h-conformal-diagrams.md)
- [附录 I：平行传播子](./spacetime-and-geometry/appendix-i-the-parallel-propagator.md)
- [附录 J：非坐标基](./spacetime-and-geometry/appendix-j-noncoordinate-bases.md)
- [参考文献](./spacetime-and-geometry/bibliography.md)
- [中英术语索引](./spacetime-and-geometry/index.md)

## 公式转写标准

行内公式使用 `$...$`，独立公式使用 `$$...$$`。编号公式写成下面的形式：

$$
G_{\mu\nu}
=
R_{\mu\nu}-\frac{1}{2}R g_{\mu\nu}.
\tag{4.44}
$$

每个公式都要经过四类检查：

1. 对照原始扫描页确认上下标、正负号、括号、导数和公式编号；
2. 检查自由指标与求和指标是否在等号两边匹配；
3. 用量纲、对称性和前后推导检查表达式是否自洽；
4. 应用作者官方勘误，并在正文中明确说明改动。

原书采用 mostly-plus 度规号差

$$
\eta_{\mu\nu}=\operatorname{diag}(-1,+1,+1,+1),
$$

且通常令 $c=1$。翻译不会静默换成其他教材的符号系统。

## 正文、译注与现代背景

正文中的 Carroll 原意直接译成中文。补出的推导或现代背景使用下面的标签：

> **译注**：这里的内容用于解释原文跳过的步骤，不属于原书正文。

原书写于 2003 年，宇宙学观测和引力波实验部分具有明确的历史时间点。完整翻译会保留当时的原文判断；需要补充今天的结论时，会单独标为“现代背景”，并给出来源日期，避免改写历史语境。

[开始阅读：扉页、版权页与前言](./spacetime-and-geometry/00-front-matter-and-preface.md)
