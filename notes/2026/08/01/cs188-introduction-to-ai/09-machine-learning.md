# 第九章 机器学习

## 本章解决什么问题

前面的章节大多假定概率表、转移模型、奖励或逻辑规则已经给出。机器学习（Machine Learning，ML）让系统从数据中估计预测函数或决策边界。

本章聚焦监督学习：训练样本同时包含输入 $x$ 和正确标签或目标 $y$。

```text
训练数据 (x, y)
→ 选择模型和损失
→ 调整参数
→ 得到预测函数
→ 在未见数据上评估
```

## 监督学习任务

### 分类

输出属于有限类别集合：

$$
y\in\{1,2,\ldots,K\}
$$

例如垃圾邮件检测、手写数字识别和故障类型判断。

### 回归

输出是连续数值：

$$
y\in\mathbb{R}
$$

例如价格预测、温度预测和剩余寿命估计。

## 特征与标签

模型通常不会直接处理完整原始世界，而是接收特征向量：

$$
f(x)=\left[f_1(x),f_2(x),\ldots,f_d(x)\right]
$$

- 输入 $x$：原始对象。
- 特征 $f_i(x)$：从输入提取的可计算属性。
- 标签 $y$：希望模型预测的目标。

传统方法高度依赖人工特征。神经网络可以从原始输入逐层学习内部表示，但数据处理和输入编码仍会决定可学到的信息。

## 数据集划分

### Training Set

用于拟合模型参数，例如权重和条件概率。

### Validation Set

用于选择超参数、模型结构、训练轮数和阈值。

### Test Set

只在开发基本结束后用于估计最终泛化性能。

```text
训练集：学习参数
验证集：作开发决策
测试集：最后评估
```

如果反复根据测试结果修改模型，测试集已经参与开发，最终指标会过度乐观。

## 泛化、欠拟合与过拟合

### 欠拟合

模型太简单、特征不足或训练不充分，训练集和测试集都表现较差。

### 过拟合

模型把训练数据中的噪声和偶然模式也学进去，训练表现很好，未见数据表现较差。

常见缓解方法：

- 增加具有代表性的数据
- 使用独立验证集
- 降低模型复杂度
- 使用正则化
- 对神经网络使用早停或 dropout
- 检查数据泄漏和分布偏移

## Naive Bayes

Naive Bayes 是生成式分类器：它建模类别先验 $P(Y)$ 和给定类别时特征的分布 $P(F\mid Y)$，再通过 Bayes 定理分类。

目标为：

$$
P(y\mid f_1,\ldots,f_d)
\propto
P(y)P(f_1,\ldots,f_d\mid y)
$$

### 条件独立假设

Naive Bayes 假设给定类别 $Y$ 后，各特征条件独立：

$$
P(f_1,\ldots,f_d\mid y)
=\prod_{i=1}^{d}P(f_i\mid y)
$$

因此：

$$
P(y\mid f_1,\ldots,f_d)
\propto
P(y)\prod_{i=1}^{d}P(f_i\mid y)
$$

分类规则：

$$
\hat y=
\operatorname*{arg\,max}_y
P(y)\prod_{i=1}^{d}P(f_i\mid y)
$$

这个独立假设在现实中经常不完全成立，但模型仍可能表现很好，因为分类只要求正确比较类别分数。

## Maximum Likelihood Estimation

最大似然估计（MLE）选择让观测数据最可能出现的参数。

类别先验估计：

$$
\hat P(Y=y)=\frac{N(Y=y)}{N}
$$

对离散特征：

$$
\hat P(F_i=v\mid Y=y)
=\frac{N(F_i=v,Y=y)}{N(Y=y)}
$$

其中 $N(\cdot)$ 表示满足条件的训练样本数。

### Bernoulli 特征

若特征表示某词是否出现：

$$
f_i\in\{0,1\}
$$

模型需要同时考虑出现和未出现的概率：

$$
P(f\mid y)=
\prod_i
P(F_i=1\mid y)^{f_i}
P(F_i=0\mid y)^{1-f_i}
$$

### Multinomial 特征

若特征表示词频，常使用 Multinomial Naive Bayes，根据类别中各词计数估计词分布。

选择 Bernoulli 还是 Multinomial，取决于“是否出现”和“出现次数”哪一种更符合任务。

## Smoothing

若训练集中从未出现某个“特征值—类别”组合，MLE 会给出零概率。连乘中一个零就使整个类别分数变成零。

Laplace 或 add-$k$ smoothing：

$$
\hat P(F_i=v\mid Y=y)
=\frac{N(F_i=v,Y=y)+k}
{N(Y=y)+k|D_i|}
$$

- $k>0$：平滑强度。
- $|D_i|$：特征 $F_i$ 的可能取值数。

平滑相当于加入伪计数，表达“未观察到不代表绝对不可能”。$k$ 通常通过验证集选择。

## 使用对数概率

大量小概率相乘容易数值下溢。取对数后：

$$
\log P(y,f)
=\log P(y)+\sum_i\log P(f_i\mid y)
$$

由于对数单调递增，argmax 不变：

$$
\hat y=
\operatorname*{arg\,max}_y
\left[
\log P(y)+\sum_i\log P(f_i\mid y)
\right]
$$

## 线性分类器

线性分类器给特征分配权重：

$$
\operatorname{score}(x)=w^\top f(x)+b
$$

二分类根据分数正负决定类别。决策边界为：

$$
w^\top f(x)+b=0
$$

在二维特征空间中是直线，在高维空间中是超平面。

每个权重表示对应特征对分类分数的方向和强度：

- $w_i>0$ 推动预测朝正类。
- $w_i<0$ 推动预测朝负类。
- $|w_i|$ 越大，单个单位特征变化影响越大。

## Perceptron

Perceptron 是在线线性分类算法。对标签 $y\in\{-1,+1\}$：

$$
\hat y=\operatorname{sign}(w^\top f(x)+b)
$$

若预测正确，不更新。若预测错误，更新：

$$
w\leftarrow w+\eta y f(x)
$$

$$
b\leftarrow b+\eta y
$$

$\eta>0$ 是学习率。

### 更新直觉

若真实标签 $y=+1$ 却预测为负：

$$
w\leftarrow w+\eta f(x)
$$

会提高这个样本的分数。

若真实标签 $y=-1$ 却预测为正：

$$
w\leftarrow w-\eta f(x)
$$

会降低这个样本的分数。

### 算法流程

```text
初始化 w = 0
重复多个 epoch:
    对每个训练样本 (x, y):
        计算预测
        若预测错误:
            w = w + eta * y * f(x)
```

样本顺序会影响更新轨迹，训练前常进行 shuffle。

### 收敛性质

若训练数据线性可分，Perceptron 在有限次错误后会找到一个能够正确分类全部训练样本的超平面。

若数据不可线性分，权重可能持续震荡。可采用：

- 固定训练轮数
- Pocket Algorithm，保存历史上表现最好的权重
- Averaged Perceptron，对训练过程中的权重取平均
- 改用带平滑损失的 Logistic Regression 或 SVM

## Multiclass Perceptron

为每个类别 $y$ 保存一个权重向量 $w_y$：

$$
\operatorname{score}_y(x)=w_y^\top f(x)
$$

预测：

$$
\hat y=\operatorname*{arg\,max}_y w_y^\top f(x)
$$

若 $\hat y\ne y^*$：

$$
w_{y^*}\leftarrow w_{y^*}+\eta f(x)
$$

$$
w_{\hat y}\leftarrow w_{\hat y}-\eta f(x)
$$

提高正确类别分数，降低错误预测类别分数，其他类别不变。

## 线性回归

线性回归预测连续值：

$$
\hat y=w^\top x+b
$$

常用平方误差：

$$
L(w,b)=\frac{1}{N}\sum_{i=1}^{N}
(y_i-\hat y_i)^2
$$

平方误差对大错误惩罚更强，并且可导，便于优化。

### 矩阵形式

把偏置合并进特征后，设设计矩阵为 $X$、目标向量为 $y$：

$$
L(w)=\|Xw-y\|_2^2
$$

当 $X^\top X$ 可逆时，最小二乘闭式解为：

$$
w=(X^\top X)^{-1}X^\top y
$$

数值计算通常避免显式求逆，使用 QR、SVD 或迭代优化更稳定。

### Regularization

加入 L2 正则化：

$$
L_{\text{reg}}(w)=
\frac{1}{N}\sum_i(y_i-w^\top x_i)^2
+\lambda\|w\|_2^2
$$

$\lambda$ 越大，越强烈地限制权重幅度。它可以降低方差，但过强会导致欠拟合。

## 优化

模型训练经常转化为最小化损失：

$$
w^*=\operatorname*{arg\,min}_w L(w)
$$

### Gradient Descent

梯度指向函数上升最快方向，因此沿负梯度更新：

$$
w\leftarrow w-\eta\nabla_wL(w)
$$

- $\eta$ 太大：可能越过最小点或发散。
- $\eta$ 太小：收敛很慢。
- 特征尺度差异大：损失曲面狭长，优化容易震荡。

### Batch、Stochastic 与 Mini-Batch

| 方法 | 每次梯度使用的数据 | 特点 |
| --- | --- | --- |
| Batch GD | 全部训练集 | 稳定但每步昂贵 |
| SGD | 一个样本 | 更新快、噪声大 |
| Mini-Batch GD | 一小批样本 | 并行效率与稳定性的常用折中 |

SGD 更新有噪声，但在大数据集和非凸问题中，这种噪声有时有助于探索损失曲面。

## Logistic Regression

线性分数可以通过 sigmoid 转成二分类概率：

$$
z=w^\top x+b
$$

$$
\sigma(z)=\frac{1}{1+e^{-z}}
$$

$$
P(Y=1\mid x)=\sigma(z)
$$

由于：

$$
\frac{P(Y=1\mid x)}{P(Y=0\mid x)}=e^z
$$

所以 log-odds 是特征的线性函数：

$$
\log\frac{P(Y=1\mid x)}{P(Y=0\mid x)}
=w^\top x+b
$$

### Binary Cross-Entropy

对 $y\in\{0,1\}$：

$$
L=-\left[
y\log\hat p+(1-y)\log(1-\hat p)
\right]
$$

其中 $\hat p=\sigma(w^\top x+b)$。

该损失来自 Bernoulli likelihood 的负对数。预测越自信却越错误，惩罚越大。

### 梯度

单样本对权重的梯度为：

$$
\nabla_wL=(\hat p-y)x
$$

因此更新：

$$
w\leftarrow w-\eta(\hat p-y)x
$$

Logistic Regression 输出概率，但概率是否校准还需要在独立数据上验证。

## Multiclass Logistic Regression

为每个类别计算 logit：

$$
z_k=w_k^\top x+b_k
$$

Softmax 把 logits 转换为类别分布：

$$
P(Y=k\mid x)=
\frac{e^{z_k}}{\sum_{j=1}^{K}e^{z_j}}
$$

预测：

$$
\hat y=\operatorname*{arg\,max}_k z_k
$$

对 one-hot 标签 $y_k$，交叉熵为：

$$
L=-\sum_{k=1}^{K}y_k\log P(Y=k\mid x)
$$

### 数值稳定的 Softmax

直接计算 $e^{z_k}$ 可能溢出。可以减去最大 logit：

$$
P(Y=k\mid x)=
\frac{e^{z_k-m}}{\sum_j e^{z_j-m}},
\qquad m=\max_jz_j
$$

减去同一个常数不改变概率比例。

## 线性模型的限制

Perceptron、Linear Regression 和 Logistic Regression 都基于输入特征的线性组合。若原始空间中的类别不可线性分，例如 XOR，单个线性边界无法解决。

有两条路线：

1. 人工增加非线性特征，例如 $x_1x_2$、$x_1^2$。
2. 使用能够自动学习多层非线性表示的神经网络。

## 神经网络

多层前馈神经网络由若干线性变换和非线性激活组成。

一层可以写成：

$$
z^{(\ell)}=W^{(\ell)}h^{(\ell-1)}+b^{(\ell)}
$$

$$
h^{(\ell)}=\phi(z^{(\ell)})
$$

其中 $h^{(0)}=x$。

### 为什么需要激活函数

如果每层都只有线性变换：

$$
W_2(W_1x)=Wx
$$

多层仍可合并为一层线性模型。非线性激活使网络能够表示弯曲、分段和复杂决策边界。

### 常见激活函数

Sigmoid：

$$
\sigma(z)=\frac{1}{1+e^{-z}}
$$

ReLU：

$$
\operatorname{ReLU}(z)=\max(0,z)
$$

Sigmoid 输出有界，但深层网络中容易出现梯度饱和。ReLU 计算简单、正区间梯度稳定，是常见隐藏层激活函数。

### 前向传播

输入依次经过每一层，最后输出预测：

```text
x
→ Linear
→ Activation
→ Linear
→ Activation
→ Output Layer
→ Prediction
```

分类输出通常使用 sigmoid 或 softmax，回归输出常使用线性层。

### 损失函数

- 二分类：Binary Cross-Entropy
- 多分类：Softmax Cross-Entropy
- 回归：Mean Squared Error 或其他稳健损失

损失函数定义了模型训练时实际优化的目标。准确率不可导，通常用于评估，交叉熵用于训练。

### Backpropagation

反向传播应用链式法则，从输出层向前计算每个参数对损失的梯度：

$$
\frac{\partial L}{\partial W^{(\ell)}}
=
\frac{\partial L}{\partial z^{(\ell)}}
\frac{\partial z^{(\ell)}}{\partial W^{(\ell)}}
$$

计算出梯度后，优化器更新全部参数。反向传播负责高效求梯度，Gradient Descent、Adam 等优化器负责如何使用梯度移动参数。

## 衡量模型表现

### Accuracy

$$
\operatorname{Accuracy}
=\frac{\text{预测正确数量}}{\text{样本总数}}
$$

类别极度不平衡时，准确率可能误导。例如 99% 样本属于负类，永远预测负类也有 99% accuracy。

### Confusion Matrix

二分类可以统计：

- True Positive
- False Positive
- True Negative
- False Negative

由此得到 precision、recall 和 F1：

$$
\operatorname{Precision}=\frac{TP}{TP+FP}
$$

$$
\operatorname{Recall}=\frac{TP}{TP+FN}
$$

$$
F_1=2\frac{\operatorname{Precision}\cdot\operatorname{Recall}}
{\operatorname{Precision}+\operatorname{Recall}}
$$

应根据错误代价选择指标。医疗筛查可能更重视 recall，垃圾邮件拦截可能更重视 precision。

## 方法之间的关系

| 方法 | 模型类型 | 输出 | 训练核心 |
| --- | --- | --- | --- |
| Naive Bayes | 生成式概率模型 | 类别后验 | 计数、MLE、平滑 |
| Perceptron | 判别式线性分类 | 硬类别 | 错分时更新 |
| Linear Regression | 线性回归 | 连续值 | 最小平方误差 |
| Logistic Regression | 判别式概率分类 | 类别概率 | 最大条件似然、交叉熵 |
| Neural Network | 多层非线性函数 | 依任务而定 | 反向传播与梯度优化 |

## 常见误区

### 训练误差低不等于泛化好

模型可能记住训练样本。必须使用未参与拟合和调参的数据评估。

### Naive Bayes 的独立是假设在给定类别后成立

它要求：

$$
F_i\perp F_j\mid Y
$$

并没有要求特征在总体分布中独立。

### Perceptron 分数不是概率

$w^\top x$ 的大小可以表示相对置信趋势，但未经概率模型和校准，不能直接解释成概率。

### Softmax 对所有 logits 加同一常数不会改变结果

这正是减去最大值进行数值稳定化的依据。

### 模型无法恢复输入中没有的信息

如果特征丢失了决定标签的关键信息，增加训练时间或换更复杂优化器也无法解决根本问题。

## 本章速记

```text
监督学习：从 (x, y) 学预测函数

Naive Bayes：P(y) × 每个特征似然
Smoothing：避免未见事件概率为 0
Perceptron：错分时把边界推向正确方向
Linear Regression：最小化平方误差
Logistic Regression：sigmoid + cross-entropy
Multiclass：softmax + cross-entropy
Neural Network：线性层 + 非线性激活 + backprop

训练集学参数
验证集做选择
测试集做最终评估
```

[上一章：隐马尔可夫模型](./08-hidden-markov-models.md) · [返回合集](../cs188-introduction-to-ai.md) · [下一章：逻辑](./10-logic.md)
