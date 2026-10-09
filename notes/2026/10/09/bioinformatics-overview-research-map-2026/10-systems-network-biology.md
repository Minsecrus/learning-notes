---
prev:
  text: "九、结构生物信息学与计算药物发现"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/09-structural-bioinformatics-drug-discovery"
next:
  text: "十一、群体遗传学与 GWAS"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/11-population-genetics-gwas"
---

# 十、系统生物学与网络生物学

> 关键词：gene regulatory network（GRN）/ protein interaction network（PIN）/ metabolic network / signaling pathway；graph theory / network centrality / community detection / network propagation；KEGG / Reactome / STRING / BioGRID；pathway enrichment：GO / GSEA / ORA；统计陷阱。
> 
> 

单个基因/蛋白只是节点，**生物学是网络**。系统生物学（systems biology）把分子放回相互作用的网络里，理解"扰动如何传播、模块如何协同"。

## 10\.1 四类常见生物网络

|网络类型|节点|边|例子|
|---|---|---|---|
|基因调控网络 GRN|基因/转录因子|调控（激活/抑制，常带方向）|TF → 靶基因|
|蛋白相互作用网络 PIN|蛋白|物理结合|Y2H/AP\-MS 实验边|
|代谢网络|代谢物|酶促反应（常超图 hypergraph）|糖酵解|
|信号通路 signaling|蛋白/复合物|磷酸化/级联|MAPK 通路|

## 10\.2 图论基础（graph theory）

- 生物网络建模为图 G=\(V,E\)。**有向图用于调控/信号（边带方向），无向图用于 PPI。加权图**用置信度（如 STRING 综合分）。

- **邻接矩阵/邻接表**是计算起点；现代处理常用图神经网络（GNN）做表示学习。

## 10\.3 网络度量：中心性、社区、传播

- **network centrality（网络中心性）**：度量"节点多重要"。

    - 度中心性（degree）：邻居越多越重要。

    - 介数中心性（betweenness）：在多少条最短路径上，越"桥梁"越关键。

    - 紧密中心性 / PageRank：与"重要邻居相连"则重要。

    - 生物学直觉：**疾病基因常位于网络枢纽附近**，但"高 degree 一定是好药靶"是过度简化（见 10\.6 陷阱）。

- **community detection（社区检测）**：找内部密集、外部稀疏的模块（module）。方法：Louvain、谱聚类、模块度优化。生物学上一个社区常对应一个复合物/通路/功能模块。

- **network propagation / network diffusion（网络传播/扩散）**：把已知的"种子基因"（如差异表达基因）的标签沿边传播到全网络，得到候选优先级。直觉：功能相关基因在网络上近邻。代表方法：random walk with restart（RWR）。

## 10\.4 数据库

|数据库|内容|文献|成熟度|
|---|---|---|---|
|**KEGG**|通路 \+ 基因组 \+ 化合物，最经典的通路百科（Kanehisa \& Goto, *NAR* 2000；持续更新）|Kanehisa 等|【成熟·标准流程】（部分核心通路条目近年转付费，影响学界用法）|
|**Reactome**|人工精选、机器可读的反应/通路数据库|Gillespie et al\., *NAR* 2022|【成熟·标准流程】|
|**STRING**|综合多源的蛋白互作网络（含预测边），带置信度|Szklarczyk et al\., *NAR* 2021;49:D605–D612|【成熟·标准流程】|
|**BioGRID**|实验验证的蛋白/遗传互作，偏"硬证据"|Oughtred et al\., *NAR* 2021|【成熟·标准流程】|

> STRING 与 BioGRID 的区别：STRING 把数据库、共表达、共进化、文本挖掘混在一起给置信分，覆盖广但含"预测边"；BioGRID 只收实验证据，更硬但更稀疏。
> 
> 

## 10\.5 通路富集分析：GO / ORA / GSEA

- **解决什么问题？** 我拿到一长串差异表达基因，想知道"它们扎堆在哪些生物学过程/通路里"。

- **GO（Gene Ontology）**：三套受控词表——分子功能 MF、细胞组分 CC、生物学过程 BP。

- **ORA（Over\-Representation Analysis，过表达分析）**：

    - 输入：一张"差异基因列表"\+ 背景基因全集。

    - 思想：对每个通路，用超几何/Fisher 检验问"差异基因是否在该通路里过度代表"。

    - 局限：**依赖任意的阈值**（top 500？p\<0\.05？）；只看"是否在列表里"，**丢弃了表达变化的连续强度与方向**。

- **GSEA（Gene Set Enrichment Analysis，Subramanian et al\., *****PNAS***** 2005;102:15545–15550）**：

    - 输入：**全基因按某统计量（如 log2FC）排序的完整列表** \+ 基因集（gene sets，如 MSigDB）。

    - 核心思想：不设阈值，问"某通路的基因是否非随机地聚集在排序列表的顶端/底端"，用 running\-sum 富集得分（ES）\+ 置换检验得 p 值/FDR。

    - 为什么有效：利用了全谱信息，对"一组小变化但方向一致"的通路更敏感。

- **现状**：ORA 仍广泛用（快、易解释）；GSEA 是更稳健的现代标准。【成熟·标准流程】。

## 10\.6 通路/网络分析的常见统计陷阱（务必讲清）

|陷阱|事实/解释|后果|
|---|---|---|
|**基因集重叠与非独立**|同一基因属于多条通路，通路间高度相关|多次检验不独立，FDR 控制被破坏；同一现象被"重复计数"|
|**ORA 的阈值任意**|换个 cutoff，结论可能翻转|结果脆弱、不可重复|
|**网络偏倚（network bias）**|研究多的基因 degree 高、注释全；冷门基因被忽略|"显著"往往只是"被研究得多"|
|**相关≠因果**|网络边是相关/共现/物理结合，不等于调控方向|从 PPI 网络推出"X 调控 Y"常越界|
|**富集出"泛泛的大通路"**|GO 高层词过宽（如"细胞过程"）无信息量|报告一大堆不解释问题的条目|
|**数据泄漏 / 基准循环**|用同一批文献既建 STRING/通路又做验证|高估方法性能|
|**多重检验与小样本**|几百条通路 × 多样本|不校正多重检验会遍地显著|

> **主流观点**：富集分析应视为**假设生成（hypothesis generation）**，不是证明；网络传播给出的是**候选排序**，必须独立实验验证。
> 
> 

---
