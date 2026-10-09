---
prev:
  text: "十三、微生物组与宏基因组学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/13-microbiome-metagenomics"
next:
  text: "十五、表观遗传生物信息学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/15-epigenetics"
---

# 十四、多组学整合

> 关键词：genomics / transcriptomics / proteomics / metabolomics / epigenomics / microbiomics；early / late / joint latent\-space / multi\-view integration；MOFA\+ / DIABLO / iCluster / SNF；single\-cell multiomics / CITE\-seq / scATAC\-seq / multiome。
> 
> 

单一组学只看到生物学的一个侧面：基因组是"图纸"，转录组/蛋白组/代谢组是"当下在做什么"，表观组是"为什么这么做"，微生物组是"外来合作者"。 **多组学（multi\-omics）** 的目标是把这些异质数据放在一起，提取单看任何一维都得不到的生物学结构。

## 14\.1 六类组学及其层次

|组学|测量对象|层次|典型技术|
|---|---|---|---|
|基因组 genomics|DNA 序列变异|静态"潜力"|WGS / WES / 基因分型|
|表观基因组 epigenomics|甲基化、染色质可及性、组蛋白修饰|调控开关|WGBS、ChIP\-seq、ATAC\-seq|
|转录组 transcriptomics|mRNA 表达|中间表型|RNA\-seq、单细胞 RNA\-seq|
|蛋白组 proteomics|蛋白丰度/修饰|执行者|质谱（LC\-MS/MS）|
|代谢组 metabolomics|小分子代谢物|表型/功能读出|非靶向质谱/NMR|
|微生物组 microbiomics|共生微生物|外来/生态层|16S / 鸟枪宏基因组（见十三章）|

## 14\.2 整合策略：早期 / 晚期 / 联合隐空间

|策略|做法|优点|缺点|代表|
|---|---|---|---|---|
|**early integration（早期/串联）**|先把各层特征拼成一个大矩阵再建模|直接、可捕捉跨层交互|维度灾难、异质尺度难对齐、易过拟合|拼接后做聚类/分类|
|**late integration（晚期/决策级）**|每层单独分析，再合并结论/投票|稳健、模块化、易解释|丢失跨层协同信号|分别富集后交叉|
|**joint latent space（联合隐空间）**|学一个共享低维表征，同时解释多视图|兼顾交互与去噪|模型复杂、难解释|MOFA\+|
|**multi\-view learning（多视图学习）**|把每个组学当一个"视图"，找一致与互补结构|理论成熟|视具体算法|iCluster、SNF、DIABLO|

## 14\.3 典型算法

|算法|核心思想|输入|用途|文献|成熟度|
|---|---|---|---|---|---|
|**MOFA\+**|多组因子分析：把多组学分解为共享/特异隐因子|多组学样本×特征矩阵|找跨组学协同变异、聚类|Argelaguet et al\., *Genome Biol* 2020;21:174|【成熟·标准流程】|
|**DIABLO（mixOmics）**|监督式多组学：找与分组/表型相关的跨组学判别成分|多组学 \+ 结局标签|biomarker 发现、分类|Singh et al\., *Nat Methods* 2019;16:339–342|【成熟·标准流程】|
|**iCluster（\+）**|联合潜变量聚类，同时给样本分亚型|多组学|分子分型（如癌亚型）|Shen et al\. 2009；Mo et al\. 2013|【成熟·标准流程】|
|**SNF（相似性网络融合）**|先为每组建样本相似性网络，再迭代融合成一张网络|多组学|聚类、患者分层|Wang et al\., *Nat Methods* 2014;11:333–337|【成熟·标准流程】|

**主线脉络**：早期/晚期是"朴素工程"；SNF 用"网络"作通用接口融合异质数据；iCluster/MOFA\+ 把问题写成**潜变量模型**，把"哪部分是组学共享、哪部分是某层特有"显式拆开——这是现代多组学的范式核心。

## 14\.4 单细胞多组学（single\-cell multiomics）

bulk 多组学平均掉了细胞异质性；单细胞多组学在**同一个细胞**里同时测多层：

|技术|同时测什么|文献|意义|
|---|---|---|---|
|**CITE\-seq**|转录组 \+ 表面蛋白（抗体标签，ADT）|Stoeckius et al\., *Nat Methods* 2017;14:865–868|RNA 看不到的细胞表面标志物被补上|
|**scATAC\-seq**|染色质可及性（哪个区域开放）|Buenrostro et al\.|表观调控层|
|**multiome / 10x Multiome**|同一细胞同时 RNA \+ ATAC|商业平台|把"表达"与"调控"在单细胞对齐|

- **解决什么问题？** 把细胞的"基因表达状态"和"染色质调控状态"、"蛋白表型"在单细胞分辨率上对上，理解细胞身份与命运决策。

- **方法学挑战**：模态 dropout（某层在某细胞测不到）、模态间噪声尺度不同、整合与对齐（如 MOFA\+ 已扩展到单细胞；Seurat v5、scVI 类深度生成模型）。

- **现状**：【快速发展】，是当前计算生物学最热方向之一；从"bulk 多组学"到"单细胞多组学"是该领域的下一次范式迁移。

---

## 本章贯穿小结（第八/九/十/十三/十四章）

- **方法取代链**：BLAST→profile HMM（远同源）→ 蛋白语言模型（绕开 MSA）；threading/物理建模 → 同源建模 → AlphaFold 端到端；OTU 聚类 → ASV 去噪；early/late 拼接 → 潜变量多组学。

- **反复出现的主线**：**进化信息/统计规律先于物理原理胜出，而生成式模型正在把"预测"升级为"设计"**。

- **共同的警示**：高置信预测 ≠ 化学/因果正确；关联 ≠ 因果；富集与网络分析是假设生成而非结论。任何"AI 自动完成"的结果都需要实验闭环验证。
