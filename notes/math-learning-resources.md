# 数学学习资源推荐

这份笔记按实用学习路线整理数学书籍和网络教程，目标不是“收集最多资源”，而是给出一条能走下去的路径。

## 总体原则

学习数学资源时，建议分三类搭配：

1. 直觉资源：先知道概念在说什么。
2. 系统教材：建立完整知识结构。
3. 练习材料：真正把概念变成能力。

不要只看视频。数学最后一定要做题、推导、复述和应用。

## 入门直觉资源

### 3Blue1Brown

适合建立直觉，尤其是线性代数、微积分、神经网络。

推荐内容：

- Essence of Linear Algebra
- Essence of Calculus
- Neural Networks

特点：

- 图像化非常强。
- 很适合先看一遍，获得“这东西到底在干嘛”的感觉。
- 不适合作为唯一教材，因为练习和系统性不够。

链接：

- https://www.3blue1brown.com/

### Khan Academy

适合补基础，尤其是代数、三角、微积分、概率统计。

特点：

- 讲得慢，适合断层补课。
- 有练习题。
- 适合从高中数学到大学初级数学过渡。

链接：

- https://www.khanacademy.org/math

## 线性代数

### 首选网络课：MIT 18.06 Linear Algebra

授课人：Gilbert Strang。

适合：

- 想系统学习线性代数。
- 未来想学 AI、数据科学、工程计算。

链接：

- https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/
- https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/

### 推荐书籍

1. Gilbert Strang, *Introduction to Linear Algebra*
2. David C. Lay, *Linear Algebra and Its Applications*
3. Sheldon Axler, *Linear Algebra Done Right*

建议：

- 应用方向先读 Strang 或 Lay。
- 想走纯数学方向，再读 Axler。

## 微积分

### 网络教程：Paul's Online Math Notes

适合：

- 补微积分。
- 查公式和例题。
- 练习 Calculus I、II、III 和 Differential Equations。

链接：

- https://tutorial.math.lamar.edu/

### 推荐书籍

1. James Stewart, *Calculus*
2. George B. Thomas, *Thomas' Calculus*
3. 《普林斯顿微积分读本》

建议：

- 如果目标是工程和 AI，重点掌握导数、偏导、梯度、链式法则、多元函数。
- 如果目标是数学专业，再往实分析推进。

## 概率论与统计

### 网络课：Harvard Stat 110

授课人：Joe Blitzstein。

适合：

- 系统学习概率论。
- 为统计、机器学习、数据科学打基础。

链接：

- https://stat110.hsites.harvard.edu/

### 推荐书籍

1. Joseph K. Blitzstein, Jessica Hwang, *Introduction to Probability*
2. Sheldon Ross, *A First Course in Probability*
3. OpenStax, *Introductory Statistics*

链接：

- https://openstax.org/books/statistics/pages/1-introduction

建议：

- 概率论先学分布、期望、方差、条件概率、贝叶斯。
- 统计再学估计、假设检验、回归、置信区间。

## 离散数学 / 计算机数学

### 网络课：MIT 6.042J Mathematics for Computer Science

适合：

- 程序员。
- 计算机科学学习者。
- 想补逻辑、证明、图论、组合、概率的人。

链接：

- https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/

### 推荐书籍

1. MIT, *Mathematics for Computer Science*
2. Graham, Knuth, Patashnik, *Concrete Mathematics*
3. Kenneth Rosen, *Discrete Mathematics and Its Applications*

建议：

- 想做算法和软件工程，离散数学非常值得学。
- 想刷算法题，组合、递推、图论尤其重要。

## 图论

### 推荐书籍

1. Reinhard Diestel, *Graph Theory*
2. Douglas West, *Introduction to Graph Theory*

链接：

- https://diestel-graph-theory.com/

建议：

- 软件工程里，图论常用于依赖分析、路径搜索、调度、权限关系、知识图谱。
- 先学 BFS、DFS、最短路径、拓扑排序、最小生成树、网络流。

## 优化理论

### 推荐书籍 / 网络资料

1. Boyd and Vandenberghe, *Convex Optimization*
2. Nocedal and Wright, *Numerical Optimization*

链接：

- https://www.seas.ucla.edu/~vandenbe/cvxbook.html

建议：

- AI 方向先掌握梯度下降、凸性、损失函数、正则化。
- 工程方向再深入约束优化、线性规划、二次规划。

## 机器学习数学综合

### Mathematics for Machine Learning

作者：Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong。

适合：

- 想把线性代数、概率统计、微积分、优化串到机器学习里。

链接：

- https://mml-book.github.io/

### Stanford CS229 相关资料

适合：

- 已有一定数学基础后进入机器学习。

链接：

- https://see.stanford.edu/Course/CS229
- https://cs229.stanford.edu/

## 中文书籍建议

### 偏程序员

1. 《程序员的数学》
2. 《程序员的数学 2：概率统计》
3. 《程序员的数学 3：线性代数》

适合：

- 用比较轻的方式建立数学和编程之间的联系。

### 偏机器学习

1. 李航《统计学习方法》
2. 周志华《机器学习》
3. Goodfellow, Bengio, Courville, *Deep Learning*

建议：

- 李航更偏数学表达和模型。
- 周志华更适合建立机器学习全局视野。
- *Deep Learning* 更适合已经具备线性代数、概率和优化基础后阅读。

## 推荐学习路线

### 路线 A：AI / 数据科学

1. 3Blue1Brown：线性代数和微积分直觉。
2. MIT 18.06：系统学线性代数。
3. Harvard Stat 110：系统学概率。
4. 微积分补偏导、梯度、链式法则。
5. Boyd：学习凸优化基础。
6. Mathematics for Machine Learning：把知识串起来。
7. Stanford CS229：进入机器学习。

### 路线 B：软件工程 / 算法

1. Khan Academy 或同类资源补基础。
2. MIT 6.042J：离散数学和计算机数学。
3. Concrete Mathematics：递推、求和、组合、算法分析。
4. 图论专题：BFS、DFS、最短路径、拓扑排序、网络流。
5. 概率统计基础：为系统设计、实验和数据分析服务。

### 路线 C：工程 / 物理 / 仿真

1. 微积分。
2. 线性代数。
3. 微分方程。
4. 数值分析。
5. 优化理论。
6. 概率统计。

## 最推荐的起步组合

如果现在只想选少量资源，不要贪多，可以这样开始：

1. 3Blue1Brown：先看线性代数和微积分直觉。
2. MIT 18.06：正式学线性代数。
3. Harvard Stat 110：正式学概率论。
4. Paul's Online Math Notes：补微积分和微分方程。
5. MIT 6.042J：补计算机数学。

这五个资源足够支撑很长一段时间的学习。

