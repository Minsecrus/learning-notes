# 第十章 逻辑

## 本章解决什么问题

概率模型表示不确定信念，机器学习从数据估计预测函数。逻辑（logic）提供另一种能力：用符号句子表示知识，并通过明确规则推出必然结论。

逻辑智能体通常维护知识库（Knowledge Base，KB）：

```text
感知世界
→ 把新事实加入知识库
→ 根据规则推理
→ 查询应该采取的行动
→ 执行动作并继续更新知识
```

本章从命题逻辑开始，介绍模型检查、DPLL、归结、前向链式推理，再扩展到一阶逻辑。

## Knowledge-Based Agent

知识库是一组关于世界的句子：

$$
KB=\{\alpha_1,\alpha_2,\ldots,\alpha_n\}
$$

智能体需要两种基本操作：

- $\operatorname{TELL}(KB,\alpha)$：把句子 $\alpha$ 加入知识库。
- $\operatorname{ASK}(KB,q)$：查询知识库是否支持结论 $q$。

一个通用循环为：

```text
KB-AGENT(percept):
    TELL(KB, 当前时刻的 percept)
    action = ASK(KB, 当前应该执行什么行动)
    TELL(KB, 自己将执行 action)
    return action
```

知识与推理机制分离后，可以修改知识库而无需重写整个控制程序。

## 逻辑语言的三个层次

### Syntax

语法规定哪些符号序列是合法句子。

### Semantics

语义规定一个句子在某个世界或模型中何时为真。

### Inference

推理算法根据已有句子产生新句子。

```text
Syntax：能不能这样写
Semantics：这样写表达什么、何时为真
Inference：怎样从已知句子得到结论
```

## Model 与 Entailment

模型（model）是对世界的一种完整解释。在命题逻辑中，它为每个命题符号分配真或假。

$M(\alpha)$ 表示使句子 $\alpha$ 为真的模型集合。

知识库蕴含结论 $\alpha$，写作：

$$
KB\models\alpha
$$

含义是：在每一个满足 $KB$ 的模型中，$\alpha$ 都为真。

$$
M(KB)\subseteq M(\alpha)
$$

蕴含是语义关系，描述“结论是否必然成立”。推导符号：

$$
KB\vdash_i\alpha
$$

表示推理算法 $i$ 能从 $KB$ 导出 $\alpha$。

## Soundness 与 Completeness

### Soundness

若算法导出的所有结论都被知识库蕴含：

$$
KB\vdash_i\alpha
\Longrightarrow
KB\models\alpha
$$

则算法是可靠的（sound）。它不会证明错误结论。

### Completeness

若知识库蕴含的每个结论都能被算法导出：

$$
KB\models\alpha
\Longrightarrow
KB\vdash_i\alpha
$$

则算法是完备的（complete）。它不会漏掉任何逻辑上必然成立的结论。

可靠性与完备性是推理算法的两个独立目标。

## 命题逻辑

命题逻辑（Propositional Logic）使用原子命题和逻辑连接词构造句子。

### 命题符号

例如：

```text
R：今天下雨
U：我带了伞
W：衣服湿了
```

每个符号在一个模型中只能是真或假。

### 连接词

| 符号 | 名称 | 含义 |
| --- | --- | --- |
| $\neg A$ | NOT | A 为假 |
| $A\wedge B$ | AND | A、B 都真 |
| $A\vee B$ | OR | 至少一个为真 |
| $A\Rightarrow B$ | Implication | 若 A 真，则 B 真 |
| $A\Leftrightarrow B$ | Biconditional | A 与 B 真值相同 |

蕴含 $A\Rightarrow B$ 只有在 $A$ 真而 $B$ 假时为假。

## Valid、Satisfiable 与 Unsatisfiable

### Valid

句子在所有模型中都为真：

$$
\models\alpha
$$

例如 $A\vee\neg A$。

### Satisfiable

至少存在一个模型使句子为真。例如 $A\wedge B$。

### Unsatisfiable

没有任何模型使句子为真。例如：

$$
A\wedge\neg A
$$

三者关系：

$$
\alpha\text{ valid}
\Longleftrightarrow
\neg\alpha\text{ unsatisfiable}
$$

## 常用逻辑等价式

双重否定：

$$
\neg\neg A\equiv A
$$

Implication elimination：

$$
A\Rightarrow B
\equiv
\neg A\vee B
$$

Biconditional elimination：

$$
A\Leftrightarrow B
\equiv
(A\Rightarrow B)\wedge(B\Rightarrow A)
$$

De Morgan：

$$
\neg(A\wedge B)
\equiv
\neg A\vee\neg B
$$

$$
\neg(A\vee B)
\equiv
\neg A\wedge\neg B
$$

Distributivity：

$$
A\vee(B\wedge C)
\equiv
(A\vee B)\wedge(A\vee C)
$$

$$
A\wedge(B\vee C)
\equiv
(A\wedge B)\vee(A\wedge C)
$$

## Conjunctive Normal Form

合取范式（Conjunctive Normal Form，CNF）是若干 clause 的合取，每个 clause 是若干 literal 的析取。

```text
literal：A 或 ¬A
clause：A ∨ ¬B ∨ C
CNF：(A ∨ ¬B) ∧ (C ∨ D) ∧ (¬A ∨ D)
```

### 转换到 CNF

1. 消除 $\Leftrightarrow$。
2. 消除 $\Rightarrow$。
3. 用 De Morgan 和双重否定把 $\neg$ 推到原子命题前。
4. 用分配律把 $\vee$ 分配到 $\wedge$ 上。
5. 展平并清理重复 literal 或恒真 clause。

例如：

$$
A\Rightarrow(B\wedge C)
$$

先消除蕴含：

$$
\neg A\vee(B\wedge C)
$$

再分配：

$$
(\neg A\vee B)\wedge(\neg A\vee C)
$$

## Model Checking

要判断：

$$
KB\models\alpha
$$

可以枚举所有命题模型，并检查每个满足 $KB$ 的模型是否也满足 $\alpha$。

若有 $n$ 个命题符号，共有：

$$
2^n
$$

个模型。真值表枚举是可靠且完备的，但时间复杂度指数增长。

另一种等价方法是检查：

$$
KB\wedge\neg\alpha
$$

是否不可满足。若不可满足，就不存在“知识库为真但结论为假”的反例模型，因此 $KB\models\alpha$。

## SAT 与 DPLL

SAT 问题询问一个命题逻辑句子是否可满足。DPLL 是针对 CNF 的回溯搜索算法。

### 基本搜索

1. 选择一个尚未赋值的命题符号。
2. 尝试 true 或 false。
3. 简化 clauses。
4. 若所有 clauses 已满足，返回 satisfiable。
5. 若某个 clause 中所有 literals 都为假，回溯。

### Early Termination

- 一个 clause 中只要有一个 literal 为真，该 clause 已满足。
- CNF 中所有 clauses 都满足时，可以立即成功。
- 任意 clause 已经不可能为真时，可以立即失败。

### Pure Symbol

若未满足 clauses 中某个符号只以正形式出现，可以将它设为 true；若只以负形式出现，可以设为 false。这样不会破坏任何尚未满足 clause。

### Unit Clause

若一个 clause 只剩一个未赋值 literal，为使 clause 成立，该 literal 的取值被强制确定。

例如：

$$
(A\vee B),\qquad A=false
$$

则必须令 $B=true$。

反复传播 unit clauses 通常能显著缩小搜索空间。

### DPLL 框架

```text
DPLL(clauses, model):
    if 所有 clauses 已满足:
        return true
    if 某个 clause 已失败:
        return false

    if 存在 pure symbol:
        用满足方向扩展 model，并递归

    if 存在 unit clause:
        用强制取值扩展 model，并递归

    选择一个未赋值 symbol P
    return DPLL(P=true) or DPLL(P=false)
```

DPLL 最坏时间仍为指数级，但传播、分支启发式和 clause learning 能让现代 SAT solver 处理很多大型实例。

## 推理规则

推理规则从某种形式的前提产生结论。

### Modus Ponens

$$
A,\quad A\Rightarrow B
\quad\vdash\quad B
$$

### And-Elimination

$$
A\wedge B
\quad\vdash\quad A
$$

也可以推出 $B$。

### And-Introduction

$$
A,\quad B
\quad\vdash\quad A\wedge B
$$

### Resolution

$$
A\vee B,quad \neg B\vee C
\quad\vdash\quad A\vee C
$$

$B$ 与 $\neg B$ 被消去，得到 resolvent。

## Resolution Theorem Proving

要证明 $KB\models\alpha$：

1. 构造 $KB\wedge\neg\alpha$。
2. 转换为 CNF clauses。
3. 不断对含互补 literals 的 clauses 应用 resolution。
4. 若推出空 clause $\square$，说明产生矛盾。

空 clause 无法在任何模型中满足，因此：

$$
KB\wedge\neg\alpha\text{ unsatisfiable}
$$

从而：

$$
KB\models\alpha
$$

### 一个简单例子

已知：

$$
A\Rightarrow B,qquad A
$$

要证明 $B$。加入 $\neg B$ 后，clauses 为：

$$
\neg A\vee B
$$

$$
A
$$

$$
\neg B
$$

前两个 resolution 得到 $B$；再与 $\neg B$ resolution 得到空 clause，证明完成。

命题逻辑中的 resolution refutation 是可靠且完备的。

## Horn Clauses

Horn clause 至多包含一个正 literal。它常写成规则：

$$
P_1\wedge P_2\wedge\cdots\wedge P_k
\Rightarrow Q
$$

- $P_i$：前提或 premise。
- $Q$：结论或 head。

没有前提的 $Q$ 表示已知事实。

Horn 知识库具有高效的线性时间推理算法，也是规则系统和逻辑编程的重要基础。

## Forward Chaining

Forward Chaining 是数据驱动推理：从已知事实出发，反复触发前提全部成立的规则。

```text
已知事实集合 agenda

while agenda 非空:
    取出新事实 p
    若 p 就是查询，成功
    对每条包含 p 的规则:
        将未满足前提数减一
        若某条规则前提全部满足:
            把它的结论加入 agenda
```

### 示例

$$
Rain\Rightarrow Wet
$$

$$
Wet\wedge Cold\Rightarrow Slippery
$$

已知 $Rain$ 与 $Cold$：

```text
Rain → 推出 Wet
Wet + Cold → 推出 Slippery
```

Forward Chaining 对 definite Horn clauses 是可靠且完备的。

### Forward 与 Backward

- Forward Chaining 从事实向所有可得结论传播，适合持续到来的数据。
- Backward Chaining 从查询倒推需要哪些前提，适合目标明确、知识库很大但相关规则较少的场景。

## 命题逻辑的表达限制

若要表达“所有学生都学习”，命题逻辑需要为每个具体学生写一个单独命题。它缺少对象、变量、关系和量词。

一阶逻辑（First-Order Logic，FOL）增加这些结构。

## 一阶逻辑的元素

### 常量

表示具体对象：

```text
Alice, Berkeley, Room101
```

### 变量

```text
x, y, z
```

### Predicate

表示对象的性质或关系：

$$
Student(Alice)
$$

$$
Likes(Alice,Bob)
$$

### Function

把对象映射到对象：

$$
MotherOf(Alice)
$$

### Term

常量、变量或函数作用于 terms 的结果都是 term。

### Atomic Sentence

谓词作用于 terms：

$$
Knows(Alice,MotherOf(Bob))
$$

再使用 $\neg,\wedge,\vee,\Rightarrow,\Leftrightarrow$ 组合复杂句子。

## Quantifiers

### Universal Quantifier

$$
\forall x\ Student(x)\Rightarrow Learns(x)
$$

表示每个学生都学习。

全称量词常与 implication 一起使用。若写成：

$$
\forall x\ Student(x)\wedge Learns(x)
$$

就声称世界中的每个对象都是学生且都学习，语义通常过强。

### Existential Quantifier

$$
\exists x\ Student(x)\wedge Likes(x,AI)
$$

表示至少存在一个喜欢 AI 的学生。

存在量词常与 conjunction 一起使用。若写成 implication，非学生对象可能让句子轻易成立，无法表达期望含义。

### 量词否定

$$
\neg\forall x\ P(x)
\equiv
\exists x\ \neg P(x)
$$

$$
\neg\exists x\ P(x)
\equiv
\forall x\ \neg P(x)
$$

量词顺序也很重要：

$$
\forall x\exists y\ Loves(x,y)
$$

表示每个人都爱某个人，不要求所有人爱同一个对象。

$$
\exists y\forall x\ Loves(x,y)
$$

表示存在一个被所有人爱的人。

## Substitution 与 Unification

替换 $\theta$ 把变量映射到 term：

$$
\theta=\{x/Alice,\ y/MotherOf(Bob)\}
$$

把替换应用于表达式 $\alpha$，写成：

$$
\operatorname{SUBST}(\theta,\alpha)
$$

Unification 寻找一个替换，使两个表达式相同。

例如：

$$
Knows(x,MotherOf(y))
$$

与：

$$
Knows(Alice,MotherOf(Bob))
$$

可由：

$$
\theta=\{x/Alice,y/Bob\}
$$

统一。

### Most General Unifier

最一般统一器（MGU）只施加使表达式匹配所需的最少约束，其他统一器可以在它基础上继续替换。

### Occurs Check

变量不能被绑定到包含自身的 term，例如：

$$
x=f(x)
$$

在标准一阶项语义下不允许。Occurs check 用于阻止这种循环替换。

### Standardizing Apart

来自不同规则的局部变量应先重命名，避免同名变量被误认为同一个对象。

## Generalized Modus Ponens

若知识库中有事实：

$$
P_1',P_2',\ldots,P_n'
$$

以及规则：

$$
P_1\wedge P_2\wedge\cdots\wedge P_n
\Rightarrow Q
$$

并存在替换 $\theta$ 使：

$$
\operatorname{SUBST}(\theta,P_i)
=
\operatorname{SUBST}(\theta,P_i')
$$

则可以推出：

$$
\operatorname{SUBST}(\theta,Q)
$$

这把命题逻辑的 Modus Ponens 扩展到含变量的规则。

## 一阶逻辑推理

### Grounding

若对象集合有限，可以把全称规则对每个常量实例化，再使用命题逻辑推理。

缺点是实例数量可能巨大，若存在函数符号，可能产生无限多个 ground terms。

### First-Order Forward Chaining

对每条规则，通过 unification 找到能让所有前提匹配已知事实的替换，再加入实例化结论。

### First-Order Resolution

把句子转成一阶 CNF，并在 resolution 前统一互补 literals。通常还需要：

- 消除 implication
- 推动否定
- 标准化变量
- Skolemization 消除 existential quantifiers
- 删除隐含的 universal quantifiers

一阶逻辑推理比命题 SAT 更复杂。一般的一阶逻辑有效性是半可判定的：若结论确实被蕴含，完备证明过程最终可以找到证明；若没有被蕴含，搜索可能永不终止。

## Logical Agent 的状态更新

逻辑智能体必须表示时间，否则事实会冲突。例如：

```text
At(Pacman, A, t=1)
Move(East, t=1)
At(Pacman, B, t=2)
```

常见规则包括：

- successor-state axioms：某事实在下一时刻何时成立
- action preconditions：某行动何时合法
- action effects：行动会改变哪些事实
- frame knowledge：哪些事实在行动后保持不变

若只写行动造成的变化，却没有处理其他事实保持不变的问题，就会遇到 frame problem。

## 逻辑与概率的边界

逻辑适合表达：

- 必然规则
- 组合结构
- 可追踪证明
- 明确约束

概率模型适合表达：

- 传感器噪声
- 不确定因果关系
- 统计规律
- 多种可能世界的信念权重

现代系统经常组合两者：逻辑约束限定合法世界，概率或学习模型在合法选择之间排序。

## 常见误区

### $A\Rightarrow B$ 不表示因果

它只规定真值关系：排除 $A$ 真、$B$ 假的模型。因果方向需要额外语义或因果模型。

### Entailment 与 Inference 要区分

$KB\models\alpha$ 是语义事实；$KB\vdash_i\alpha$ 是某个算法能否找到证明。算法不完备时，推不出来并不表示结论不被蕴含。

### And-Introduction 与 Resolution 是不同规则

从 $A$ 和 $B$ 得到 $A\wedge B$ 是 And-Introduction。Resolution 消去两个 clauses 中互补的 literals。

### 全称量词与存在量词的连接词习惯不同

```text
forall 常配 implication
exists 常配 conjunction
```

这源于两种量词的语义，写反后常得到过强或几乎总为真的句子。

### Closed-World Assumption 需要明确

经典逻辑中，知识库没有证明 $P$，不自动意味着 $\neg P$。某些数据库和规则系统采用“未知即假”的 closed-world assumption，它是额外假设。

## 本章速记

```text
Syntax：合法表达式
Semantics：模型中的真假
Inference：从知识推出结论

KB |= alpha：每个满足 KB 的模型也满足 alpha
Sound：推出的都正确
Complete：正确的都能推出

CNF：clauses 的 conjunction
DPLL：回溯 + pure symbol + unit propagation
Resolution：消去互补 literals
Forward Chaining：从事实触发 Horn rules

FOL = 对象 + 关系 + 函数 + 变量 + 量词
Unification：寻找让表达式匹配的替换
```

[上一章：机器学习](./09-machine-learning.md) · [返回合集](../cs188-introduction-to-ai.md)
