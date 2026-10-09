---
prev:
  text: "七、空间组学（Spatial Omics）"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/07-spatial-omics"
next:
  text: "九、结构生物信息学与计算药物发现"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/09-structural-bioinformatics-drug-discovery"
---

# 八、蛋白质生物信息学

> 关键词：protein sequence analysis / protein family / domain / motif / secondary structure / tertiary structure / protein–protein interaction（PPI）；数据库 Pfam / InterPro / PROSITE / UniProt / PDB；HMM / profile HMM / HMMER / HHpred；homology modeling / threading / co\-evolution / AlphaFold / AlphaFold2 / AlphaFold3 / RoseTTAFold / ESMFold。
> 
> 

蛋白质是细胞内功能的主要执行者。如果说基因组学回答"细胞有哪些零件清单"，蛋白质生物信息学（protein bioinformatics）回答的就是"每个零件长什么样、怎么折叠、和谁结合、如何行使功能"。本章按"序列 → 家族/结构域 → 结构 → 相互作用"的主线展开，并用一整节回答一个被反复误读的问题：**AlphaFold 到底解决了什么，又没解决什么。**

## 8\.1 从序列到结构：问题的分层

给定一段氨基酸序列（一级结构，primary structure），生物信息学要回答层层递进的问题：

1. **它是谁？** —— 找同源、归家族、找结构域与基序（见 8\.2–8\.4）。

2. **它怎么折？** —— 预测二级结构（α 螺旋、β 折叠）与三级结构（3D 坐标）（见 8\.5、8\.8）。

3. **它和谁在一起？** —— 预测蛋白–蛋白相互作用与复合物（见 8\.6、8\.8）。

这个顺序不是偶然的：**同源信息（evolutionary information）几乎是所有经典方法的燃料**。一个孤立的、没有任何同源序列的"孤儿序列"，在 2021 年之前几乎无法预测结构；而今天，蛋白质语言模型正在试图绕开这一依赖（见 8\.8\.4）。

## 8\.2 序列相似性搜索：blast / 比对

- **解决什么问题？** 给定一条新序列，在数据库里找相似序列（homologs，同源物）。相似意味着可能有共同祖先，从而可以"借用"已知序列的功能与结构注释。

- **输入/输出**：输入一条 query 序列 \+ 数据库（如 nr / UniProt）；输出按期望（E\-value）排序的相似序列列表与局部比对。

- **核心思想**：用启发式快速对齐（BLAST，Altschul et al\., *J Mol Biol* 1990），而非精确但昂贵的 Smith–Waterman 动态规划。

- **为什么有效**：选择压力下，功能重要的残基在进化中被保留（conservation），因此同源序列在这些位置高度一致。

- **典型软件**：BLAST 系列（blastp 用于蛋白）、DIAMOND（Buchfink et al\., *Nat Methods* 2015；速度快百倍，适合宏基因组大规模比对）。

- **局限**：对远同源（diverged homology）不敏感——序列同一性低于约 20–30%（"twilight zone"，模糊地带）时，纯序列比对很难看出关系。这正是 profile HMM（8\.4）登场的原因。

- **现状**：【成熟·标准流程】BLAST/DIAMOND 仍是任何序列分析的第一步，未被取代。

- **后来的改进**：DIAMOND 加速；HHblits/HHblits3（Zimmermann et al\., *NAR* 2018）用 profile 代替单序列做迭代搜索，专门解决远同源。

## 8\.3 蛋白质家族、结构域与基序（family / domain / motif）

这三个概念常被混用，但层级不同：

|概念|英文|定义|例子|对应数据库（见 8\.7）|
|---|---|---|---|---|
|蛋白质家族|protein family|一组同源、功能相近的蛋白（常由多个结构域组合）|激酶家族、GPCR 七次跨膜受体家族|Pfam 家族、InterPro 条目|
|结构域|domain|蛋白中能独立折叠、常独立行使功能的一段（\~50–200 aa），是"模块化积木"|激酶结构域、SH2 结构域、锌指|Pfam 家族多数即结构域；SCOP/CATH 按结构分类|
|基序 / 位点|motif / signature|短而高保守的序列片段，标志特定功能位点|酶活性位点、DNA 结合基序、N\-糖基化位点|PROSITE pattern|

- **解决什么问题？** 把一段序列切割成"功能模块"，从而快速推断功能：比如序列里出现一个"跨膜螺旋 \+ 一个激酶结构域"，就可大胆假设它是一个受体激酶。

- **核心思想**：一个家族在进化中反复出现相似的"序列签名"，用统计模型（见 8\.4）识别它。

- **为什么有效**：结构域是进化上可重组的单元（domain shuffling），同一结构域常出现在不同蛋白中，因此"认出结构域"比"认出全长蛋白"更稳健。

- **局限**：嵌合/嵌段融合蛋白、边界模糊的"未分类"区域（DUF，domain of unknown function）；基序规则有时过严（漏检）或过松（误检）。

- **现状**：【成熟·标准流程】。Pfam 已累积数亿条蛋白的注释；DUF 仍占相当比例，是活跃研究区。

- **后来的改进**：AlphaFold 结构预测使大量 DUF 第一次获得结构，进而被重新分类（如 Choudhary et al\., *Science* 2023 对人源 DUF 的系统结构解析）。

## 8\.4 隐马尔可夫模型：HMM / profile HMM / HMMER / HHpred

这是蛋白质家族识别的"心脏"，也是理解 AlphaFold 之前几十年方法学的关键。

### 8\.4\.1 HMM 与 profile HMM

- **解决什么问题？** 单序列比对（BLAST）在远同源面前失效；profile HMM 把**多序列比对（MSA）中每个位置的保守性**编码成一个概率模型，从而比"单一 query"更敏感地识别远缘家族成员。

- **输入/输出**：输入是一个多序列比对（MSA）或一组同源序列；输出是该家族的统计轮廓（profile），可对任意新序列打分并给出"属于该家族"的概率/似然。

- **核心思想（为什么有效）**：

    1. 一条 MSA 里，每个列有残基频率分布：有的列几乎不变（活性位点，高信息含量），有的列随意变化（表面柔性区）。

    2. profile HMM 用一套状态（match / insert / delete）和转移概率，把"某位置出现某残基的概率 \+ 插入/缺失的概率"整体建模。

    3. 对新序列，模型给出"它由这个家族产生"的对数似然（log\-odds）。因为它利用了整个家族的统计规律，而非两条序列的两两比对，所以对远缘、低同源序列更敏感。

- **典型软件**：

    - **HMMER**（Eddy 实验室；Johnson et al\., *Comput Syst Bio* 2008；hmmer3 大幅加速）：从 MSA 构建 profile HMM（`hmmbuild`）、搜索数据库（`hmmsearch`）、用 profile 反过来找同源并再比对（`hmmscan`）。**Pfam 的注释即基于 HMMER**。

    - **HHpred / HHblits / HHsearch**（Söding, *Bioinformatics* 2005；Zimmermann et al\., *NAR* 2018）：用**序列 profile 与 profile 之间的隐马比对**（profile–profile HMM，即把一个 HMM 与另一个 HMM 比对），进一步把敏感性推到极限；HHpred 还会把识别到的同源模板直接建模成 3D 结构（见 8\.8\.1 threading）。

- **局限**：依赖有足够同源序列来构建 MSA；孤儿蛋白（无近缘同源）退化为单序列，能力大减。计算比 BLAST 贵（但 hmmer3 与 GPU 化已大幅改善）。

- **现状**：【成熟·标准流程】。HMMER\+Pfam 是基因组注释的事实标准；HHpred 是远同源识别与模板建模的主力。

- **后来的改进**：蛋白质语言模型（protein language model, pLM）如 ESM2（见 8\.8\.4）用海量无标注序列自监督学习，**在一定程度上替代了 MSA**——单序列也能得到类似"进化信息"的表征，这对孤儿蛋白意义重大。

## 8\.5 蛋白质结构：二级与三级结构

- **二级结构（secondary structure）**：主链局部的周期性构象——α 螺旋（α\-helix）、β 折叠（β\-sheet）、转角/环（loop）。预测二级结构曾是独立问题（如 PSIPRED, Jones 1999；SSpro），今天已被结构预测模型一并解决，单独的二级结构预测器更多作为辅助特征使用。

- **三级结构（tertiary structure）**：全部原子的三维坐标，即"这团蛋白质长什么样"。它决定功能。四级结构（quaternary）指多个亚基如何组装成复合物。

- **输入/输出**：输入氨基酸序列；输出每个残基（理想下每个重原子）的 xyz 坐标，常以 PDB/mmCIF 文件给出。

- **为什么结构这么难？** Anfinsen 原理（1960s）指出序列决定结构，但从 20 种残基的序列空间（长度 n 的组合是 20^n）里找到"天然折叠"，在能量上是 NP 难级别。半个世纪里，物理能量函数 \+ 采样（Rosetta）、同源模板、机器学习三派交替推进，直到 2020 年 AlphaFold2 打破僵局。

## 8\.6 蛋白质相互作用（PPI）与复合物

- **解决什么问题？** 蛋白很少单独干活——它们二聚、成复合物、结合配体/核酸。要理解功能，必须知道"谁和谁在物理上挨着"。

- **输入/输出**：给定（一个或多个）序列/结构，预测结合界面与复合物整体结构；或在全蛋白组范围给出"哪些蛋白对相互作用"的二值/置信网络。

- **方法谱系**：

    - **实验测定**：酵母双杂交（Y2H）、亲和纯化–质谱（AP\-MS）、BioID/邻近标记、共结晶。这是金标准，但昂贵、有偏、覆盖不全。

    - **预测**：早期用共进化（co\-evolution，见 8\.8\.3）、结构域共现、基因组邻近等；AlphaFold\-Multimer（Evans et al\., 2021/2022 预印本）与 AlphaFold3（8\.8\.5）把复合物预测推到接近实验精度。

- **数据库**：STRING（Szklarczyk et al\., *NAR* 2021）、BioGRID（Oughtred et al\., *NAR* 2021）等，见第十章。

- **局限**：PPI 预测偏"静态快照"；体内结合受时空、翻译后修饰、浓度影响，预测网络不等于真实调控网络。

- **现状**：【快速发展】。复合物预测已可用，但界面精度、柔性、瞬时相互作用仍是难点。

## 8\.7 核心数据库

|数据库|内容|组织维度|代表文献（引用）|成熟度|
|---|---|---|---|---|
|**UniProt**（含 Swiss\-Prot / TrEMBL）|蛋白质序列与功能注释，最全的"序列\+知识"库|按蛋白条目|The UniProt Consortium, *Nucleic Acids Res* 2023（51:D523–D531）|【成熟·标准流程】|
|**Pfam**|蛋白家族/结构域的 profile HMM 库|按家族（数千个 HMM）|Mistry et al\., *NAR* 2021（49:D412–D419）|【成熟·标准流程】|
|**InterPro**|整合 Pfam、PROSITE、PANTHER、CATH\-Gene3D 等多源家族/结构域注释，去重统一|整合视图|Blum et al\., *NAR* 2021（49:D349–D354）|【成熟·标准流程】|
|**PROSITE**|短基序/功能位点（signature/pattern \+ profile）|按位点签名|Sigrist et al\., *NAR* 2013（41:D444–D447）|【成熟·标准流程】（pattern 式签名偏保守）|
|**PDB**（Protein Data Bank）|实验解析（X 射线晶体学、NMR、冷冻电镜）的三维结构库|按结构条目|wwPDB 合作组，如 Burley et al\., *NAR* 2021|【成熟·标准流程】（AlphaFold DB 是其"计算扩展"）|
|**AlphaFold DB**|预测结构数据库（与 PDB 互补）|按 UniProt 条目|Varadi et al\., *NAR* 2022（50:D439–D444）|【成熟·标准流程】|

> 注：InterPro 的价值在于"一站式"——你不必分别查 Pfam、PROSITE 等，它把多套 profile/HMM 的命中合并成一致的家族注释，避免重复与矛盾。
> 
> 

## 8\.8 蛋白质结构预测：方法谱系与发展时间线

### 8\.8\.1 homology modeling（同源建模）与 threading（穿线法）

- **homology modeling / comparative modeling**

    - **解决什么问题？** 当 query 有已知结构的同源模板（同一家族）时，直接借用模板坐标建模。

    - **输入/输出**：query 序列 \+ 一个或多个已知结构模板（PDB）；输出 query 的 3D 模型。

    - **核心思想**：结构比序列更保守——即使序列同一性只有 30%，折叠方式往往与模板一致。

    - **为什么有效**：进化中折叠拓扑被强烈保留，模板的主链坐标可"平移"过来，只对 loop 区和侧链做修补。

    - **典型软件**：MODELLER（Sali \& Blundell, *J Mol Biol* 1993）、SWISS\-MODEL（Waterhouse et al\., *NAR* 2018）。

    - **局限**：强依赖好模板；无近缘模板时失效。序列同一性越低，模型越差。

    - **现状**：【成熟·标准流程】（在有模板时仍是高质量首选；但 AlphaFold 类方法在大多数情况下自动完成了这一步）。

- **threading / fold recognition（穿线法）**

    - **解决什么问题？** query 没有近缘模板、但可能与某个"折叠类型"（fold）已知的蛋白在结构上相似。把 query 序列"穿"进各种已知折叠骨架，打分哪种骨架最契合。

    - **核心思想**：折叠类型的总数有限（几百到上千种），即使无序列同源，结构上也可能归属已知 fold。

    - **典型软件**：早期 threading 服务器；HHpred 本质是"profile 识别模板 \+ 自动建模"，是这条线的现代延续。

    - **局限**：对全新折叠（novel fold）无能为力；打分函数粗糙。

    - **现状**：【过时·被取代】作为独立范式基本被深度学习模板选择取代，但 HHpred 思想存活。

### 8\.8\.2 物理能量方法（Rosetta 一类）

- **解决什么问题？** 无模板时，靠物理/统计能量函数从热力学上找最低能构象。

- **核心思想**：天然态是全局能量最小；用片段组装 \+ 蒙特卡洛/最小化采样。

- **现状**：【成熟·仍用于设计】在 de novo 设计、无模板小蛋白、对接的能量精修中仍不可替代，但**单链精度预测**已被 AlphaFold 超越。

### 8\.8\.3 co\-evolution / MSA 共进化（深度学习革命的真正燃料）

- **解决什么问题？** 同一蛋白家族的 MSA 里，若两个残基在三维上相邻（哪怕序列上相距很远），它们的突变会"协同"发生，以维持接触（接触耦合，contact coupling）。

- **核心思想**：从 MSA 的列间相关（直接耦合分析 DCA / Gremlin 等）读出残基–残基接触图（contact map），把 1D 序列问题变成 2D 几何约束问题。

- **为什么有效**：这是第一次让计算机"无需模板、无需物理全原子模拟"就知道哪些残基该挨在一起，极大地把搜索空间从 20^n 压到接触约束下的低维问题。

- **现状**：它不是"被取代"，而是被**吸收**——AlphaFold2 仍用 MSA 与 pair representation 编码共进化信号，只是不再用 DCA 显式输出接触，而是让 Evoformer 端到端学习。

### 8\.8\.4 AlphaFold 系列与 RoseTTAFold、ESMFold

|模型|团队|年份/出处|输入|关键创新|地位|
|---|---|---|---|---|---|
|**AlphaFold（CASP13 初代）**|DeepMind|2018（CASP13）|序列 \+ MSA|用 DL 预测距离/接触，再用物理优化|证明可行，但非端到端|
|**AlphaFold2**|DeepMind|Jumper et al\., *Nature* 2021;596:583–589，DOI 10\.1038/s41586\-021\-03819\-2|序列 \+ MSA|**Evoformer \+ Structure Module**，端到端几何推理；三轨道（seq/pair/structure）|【成熟·标准流程】CASP14 达到实验级精度，范式转折点|
|**RoseTTAFold**|Baker 组（UW）|Baek et al\., *Science* 2021;373:871–876，DOI 10\.1126/science\.abj8754|序列 \+ MSA|"三轨"（three\-track）神经网络，开源复现 AF2 思路并用于复合物|【成熟·标准流程】开源对照|
|**ESMFold / ESM\-2**|Meta（Rives/Lin）|Lin et al\., *Science* 2023;379:1123–1130，DOI 10\.1126/science\.ade2574|**单序列**（无需 MSA 搜索）|蛋白质语言模型从 2 亿\+序列学到进化表征，端到端出结构|【快速发展】牺牲少量精度换数量级速度；适合宏蛋白组大规模预测|
|**AlphaFold3**|Google DeepMind|Abramson et al\., *Nature* 2024;630:493–500，DOI 10\.1038/s41586\-024\-07487\-w|序列 \+ 核酸/小分子/离子|**扩散（diffusion）架构**，联合预测蛋白–核酸–配体–离子复合物|【快速发展】把"单链折叠"扩展到"全部生物分子互作"|

**时间线（protein structure prediction 简史）**

|年代|事件|方法学意义|
|---|---|---|
|1951–1970s|Pauling/Corey 提出 α/β；Anfinsen 序列决定结构|问题被提出|
|1980s–1990s|同源建模（MODELLER）、threading 兴起|借模板|
|1990s–2000s|物理能量 \+ 片段组装（Rosetta）；HMM 家族识别成熟|物理\+统计|
|2011–2017|CASP 中 DCA/共进化、早期 DL 接触预测|从 MSA 读接触|
|2018|AlphaFold 1（CASP13）|DL 初见成效|
|**2020**|**AlphaFold2（CASP14）**|**端到端达实验精度**|
|2021|RoseTTAFold 开源；AlphaFold DB 上线|民主化|
|2022|ProteinMPNN（序列反推，见第九章）|设计闭环|
|2023|RFdiffusion（生成式设计）；ESMFold（单序列、超高速）|生成式 \+ 语言模型|
|**2024**|**AlphaFold3（配体/核酸/离子）**；Baker/Hassabis/Jumper 获诺贝尔化学奖|复合物与全部生物分子|

### 8\.8\.5 重点分析：AlphaFold 到底解决了什么？

**事实（已被同行评议文献与 CASP 验证）：**

- AlphaFold2 在 CASP14 对大多数单结构域目标，预测主链 backbone 的精度达到"与实验结构难分高下"的水平（Jumper et al\., *Nature* 2021）。

- 它把"从序列到结构"从一个需要多年专家、晶体/NMR 实验的问题，变成一次计算运行。随之而来的 AlphaFold DB（Varadi et al\., *NAR* 2022）把数亿蛋白的预测结构公开，极大改变了生物学假设检验的速度。

- 2024 年诺贝尔化学奖一半授予 David Baker（蛋白质设计）、一半授予 Demis Hassabis 与 John Jumper（AlphaFold），标志这一范式被学界正式承认。

**主流观点（学界共识）：** AlphaFold2 解决的是"**给定一个有充分同源序列、且在生理条件下以单一稳定构象存在的球状结构域，其静态天然态三维坐标预测**"。

**研究者推测（仍在验证）：** 它的成功主要不是"学会了物理力场"，而是"学会了进化统计 \+ 几何约束"——这解释了为什么它在孤儿蛋白、低同源、高度动态的对象上会失手。

### 8\.8\.6 哪些还没解决？（务必区分事实与推测）

|问题|事实|状态|
|---|---|---|
| **intrinsically disordered region（IDR，固有无序区）** |这些区域没有单一稳定构象，预测常给出低 pLDDT 的"糊"结构|AF2/AF3 对 IDR 仍弱；【快速发展】|
|**多态/别构态（multiple conformations, allostery）**|同一序列在不同状态下有多个相关构象|AF 给的是一个"平均/最可能"态；【未解决】|
|**蛋白质动力学（dynamics）**|蛋白质是会运动的：呼吸、开合、振动|静态坐标≠动态构象系综（见 8\.8\.7）|
|**翻译后修饰（PTM）、突变效应**|磷酸化、糖基化、致病突变如何改变结构|AF3 支持部分修饰残基，但精度仍待验证；【快速发展】|
|**大复合物 / 膜蛋白 / 柔性复合物**|膜蛋白、超大组装体、柔性界面仍常不准|AF3 改善但远未完美；【快速发展】|
|**孤儿蛋白 / 极低保真同源**|无 MSA 可借|ESMFold 用语言模型缓解但精度下降；【未解决】|
|**配体/核酸结合的定量亲和力**|结构对了不等于结合强弱对了|docking/自由能计算仍不可省（第九章）|

> **提示（事实层面的常见误用）：** pLDDT / ipTM 只是模型自评置信度，**高 pLDDT 不等于化学上正确**，尤其在侧链、催化位点、配体结合处。把 AF 预测结构直接当实验结构用于药物设计而不做实验验证，是高风险做法。
> 
> 

### 8\.8\.7 预测结构 vs\. 真实动态蛋白质（核心辨析）

- **事实**：AlphaFold 输出的是**一张静态快照**（single static snapshot），通常是能量最低/最可能的那一态。

- **主流观点**：真实蛋白质是**构象系综（conformational ensemble）**——它在多个状态间热涨落、相互转化，别构（allostery）、酶催化、信号转导都依赖这种动态。静态坐标丢失了熵、柔性、过渡路径。

- **研究者推测/前沿**：

    - "实验引导的集合"（experiment\-guided ensembles）、用 MD 或元动力学把 AF 结构展开成系综，是当前热点；已有工作尝试让 AF3 与实验约束一致地产出多构象（如近期 *Nature Methods* 关于 measurement\-consistent ensembles 的工作，DOI 10\.1038/s41587\-026\-03166\-5，待核实细节）。

    - 蛋白质动力学目前仍主要靠 **分子动力学模拟（MD，第九章）** 与时间分辨实验，而非单靠 AF。

---
