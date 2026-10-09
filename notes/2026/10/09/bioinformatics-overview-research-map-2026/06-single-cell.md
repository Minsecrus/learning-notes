---
prev:
  text: "五、转录组学：从 microarray 到 bulk RNA-seq 与单细胞"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/05-transcriptomics"
next:
  text: "七、空间组学（Spatial Omics）"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/07-spatial-omics"
---

# 六、单细胞生物信息学：从实验到计算

> 面向生命科学本科生的导论。本章覆盖 scRNA\-seq 从原始reads到细胞注释的完整计算流水线，并讨论轨迹、RNA velocity、细胞通讯、调控网络等"前沿分析"的真实成熟度。所有方法按【成熟·标准流程】【快速发展】【有争议或未证明价值】【过时·被取代】四档标注成熟度。
> 
> 

---

## 6\.1 为什么 scRNA\-seq 出现：bulk 测序的分辨率天花板

**解决什么问题？** 传统 bulk RNA\-seq（2000 年代起）把一块组织里成千上万个细胞的 RNA 平均化，只能回答"这块组织整体上调了哪些基因"，无法区分这是"所有细胞都轻度上调"还是"1% 的细胞剧烈上调"。组织里本质上有数十种细胞类型，bulk 平均会把这些结构信号抹平。

**为什么有效？** 2009 年汤富酬等首次实现单细胞 mRNA 测序（汤富酬等, *Nat Methods* 2009），2014 年之后 droplet 微流控技术（Macosko 等, *Cell* 2015, DroN\-seq；Klein 等, *Cell* 2015, inDrop）和 10x Genomics Chromium（2016 起）把单个细胞的建库成本从数百美元降到不足一美元，使得一次实验能测 5,000–100,000 个细胞，真正让"组织内细胞类型图谱"成为可能。

 **被什么取代？**  scRNA\-seq 本身没有被取代，但正在被 **多模态（multimodal）** 扩展：10x Multiome 同时测 RNA \+ ATAC；CITE\-seq（Stoeckius 等, *Nat Methods* 2017）同时测 RNA \+ 表面蛋白；TEA\-seq 进一步加 T 细胞受体。计算上也从"只看 RNA"走向"RNA \+ 染色质 \+ 蛋白"联合建模。

**成熟度**：droplet scRNA\-seq 实验本身已【成熟·标准流程】；计算流水线也已【成熟·标准流程】，但每个环节仍有大量细节陷阱（见 6\.4 节）。

---

## 6\.2 实验侧的四个关键概念：cell barcode / UMI / droplet / doublet / ambient RNA

这五个术语是理解后续所有计算的前提，必须先讲清楚。

### 6\.2\.1 Cell barcode（细胞条形码）【成熟·标准流程】

- **解决什么问题？** droplet 把每个细胞包裹在一个微滴里，同时把带"细胞条形码"的寡聚 dT 引物也包进去。同一微滴内所有 mRNA 反转录后带上**同一个** barcode；不同微滴带不同 barcode。测序后按 barcode 把 reads 拆回"哪个细胞"。

- **输入输出**：输入是混合的 FASTQ；输出是 cell × gene 的 count matrix（数字矩阵，矩阵元素=某 cell barcode 下某基因的 reads/UMI 数）。

- **核心思想**：用一段 10–16 nt 的合成序列给每个细胞"贴标签"，一次测序混合成千上万细胞，事后拆分。

- **为什么有效**：避免了逐细胞建库的物理操作，是成本下降 100 倍的关键。

- **典型软件**：Cell Ranger（10x 官方）、starsolo（STAR 内置）、kb\-python（kallisto/bustools）。

- **局限**：barcode 设计错误率约 1%，需要 whitelist 纠错；不同平台 barcode 集合不通用。

- **现在是否仍广泛使用**：是，几乎所有商业平台都用。

- **后来的改进**：10x 把 barcode 长度从 10nt 升到 16nt（Chromium 3' v3/v3\.1、5'），降低碰撞率；Split\-seq、sci\-RNA\-seq 用组合 index 进一步降低成本。

### 6\.2\.2 UMI（Unique Molecular Identifier，唯一分子标识符）【成熟·标准流程】

- **解决什么问题？** PCR 扩增会引入大量"同一分子被复制很多次"的 PCR 重复，导致 count 不能反映原始 mRNA 数。UMI 在反转录时给每条原始 mRNA 再贴一个随机短序列（典型 10–12 nt），测序后相同 gene \+ 相同 UMI 的 reads 只计一次。

- **输入输出**：原始 reads → UMI 去重 → count matrix 中每个 entry 是**被捕获的原始 mRNA 分子数**（不是 reads 数）。

- **核心思想**：用随机序列标记"分子身份"，把技术重复和生物学信号分开。

- **为什么有效**：10x 数据里约 50–90% 的 reads 是 PCR 重复，不去重会严重高估表达量。

- **典型算法**：UMI\-tools（Smith 等, *Genome Biol* 2017）、Cell Ranger 内置去重。

- **局限**：UMI 长度有限，极低丰度下仍会碰撞；不同 RNA 异构体的 3' 端可能落在同一 UMI 上。

- **现在是否仍广泛使用**：是，已成为 scRNA\-seq 标配。

- **后来的改进**：scDNA\-seq、CITE\-seq、scATAC\-seq 都引入 UMI。

### 6\.2\.3 Droplet（液滴）【成熟·标准流程】

- **解决什么问题？** 把"单细胞 \+ 带 barcode 的引物 \+ 反应试剂"一起包进皮升级水油微滴，在微滴内完成裂解、反转录，避免细胞间 RNA 污染。

- **核心思想**：物理隔离。

- **局限**：

    - **Doublet（双胞/多胞）：一个液滴里掉进 2 个甚至更多细胞，表现为一个"假细胞"同时表达 A、B 两种细胞类型的 marker。10x 平台 doublet 率约 1–8%（取决于细胞浓度），高浓度下可达 10% 以上。这是 scRNA\-seq 最常见的技术噪声之一**。

    - **Ambient RNA（环境 RNA）**：裂解时少数细胞膜破裂，释放的游离 RNA 会被其他空液滴或相邻液滴捕获，造成"不该表达的基因出现低水平背景"。典型贡献占 total UMI 的 5–30%。

- **检测/校正工具**：

    - Doublet 检测：Scrublet（Wolock 等, *Cell Syst* 2019）、DoubletFinder（McGinnis 等, *Mol Cell* 2019）、DoubletDecon、ScDblFinder；10x 官方也提供 scrublet 式预测。【成熟·标准流程】但所有方法对**同型 doublet**（两个相同类型细胞）检测能力有限。

    - Ambient RNA 校正： SoupX（Young 等, *Genome Biol* 2018）、DecontX（Yang 等, *Genome Biol* 2020）。【快速发展】有研究指出校正过度也会删去真实低表达信号。

### 6\.2\.4 其他值得知道的实验侧概念

- **Gene body / 3' bias**：droplet 平台用 oligo\-dT 引物，只能捕获 3' 端 polyA 附近，所以**3' 端 reads 远多于 5'**；这影响亚型分析、可变剪接分析，也影响用 reads 直接比对转录本（要用 UMI 计数）。

- **Lysis efficiency / capture rate**：单个细胞约 10–30 万 mRNA 分子，10x 通常只捕获 2,000–10,000 个 UMI，**capture rate 约 5–15%**。这意味着低表达基因（\< 10 copies/cell）几乎检测不到。

- **5' vs 3' chemistry**：5' 端测序保留 V\(D\)J 可变区信息，所以做 T/B 细胞受体分析用 5'；做普通表达谱用 3'。

---

## 6\.3 标准计算流水线全景

下表是一个"教科书级"scRNA\-seq 分析流水线，从 fastq 到细胞注释。每一步都会单独展开。

|步骤|输入|输出|主流工具|成熟度|
|---|---|---|---|---|
|1\. 比对/计数|fastq|raw count matrix|Cell Ranger, starsolo, kb\-python|【成熟·标准流程】|
|2\. QC 过滤|raw matrix|filtered matrix|Seurat/Scanpy 内置|【成熟·标准流程】|
|3\. Doublet/Ambient 校正|filtered matrix|cleaned matrix|Scrublet/SoupX/DecontX|【成熟·标准流程】（但参数敏感）|
|4\. Normalization|count matrix|normalized matrix|LogNormalize / SCTransform|【成熟·标准流程】|
|5\. Highly variable genes \(HVG\)|normalized matrix|\~2,000 个基因|Seurat/Scanpy 内置|【成熟·标准流程】|
|6\. PCA|HVG matrix|低维 embedding|Seurat/Scanpy|【成熟·标准流程】|
|7\. Batch integration|PCA \+ batch labels|corrected embedding|Harmony / scVI / Seurat RPCA / BBKNN|【成熟·标准流程】但选择有争议|
|8\. Nearest\-neighbor graph|embedding|KNN graph|scanpy\.pp\.neighbors / Seurat|【成熟·标准流程】|
|9\. Clustering|KNN graph|cluster labels|Leiden/Louvain/Louvain\-CTD|【成熟·标准流程】|
|10\. UMAP/t\-SNE|embedding|2D 可视化|umap\-learn / Rtsne|【成熟·标准流程】（仅用于可视化！）|
|11\. Marker gene 找|clusters|差异基因表|Wilcoxon / MAST / edgeR|【成熟·标准流程】|
|12\. Cell annotation|markers \+ 参考|cell type labels|CellTypist / SingleR / Azimuth / 人工|【快速发展】|

### 6\.3\.1 QC（质量控制）【成熟·标准流程】

- **解决什么问题？** 过滤掉低质量细胞（破裂细胞、空液滴、双胞、高线粒体污染）。

- **核心指标**：

    - **nFeature**：每个细胞检测到的基因数（太低=死细胞，太高可能是 doublet）。

    - **nCount / total UMI**：每个细胞的总分子数。

    - **percent\.mt / percent\.ribo**：线粒体/核糖体基因占比。**percent\.mt \> 15–20%** 通常判为破裂细胞；肿瘤组织常放宽到 20%。

- **局限**：阈值是经验值，**没有普适阈值**。血细胞 percent\.mt 天然低，心肌/肝细胞天然高，不能一刀切。

- **常见错误**：过度过滤把稀有细胞类型（如某些免疫细胞）整个删掉。

### 6\.3\.2 Normalization（标准化）【成熟·标准流程】

- **解决什么问题？** 每个细胞的总 UMI 数不同（capture 效率不同），直接比较会把"测得多"误判为"表达高"。

- **两种主流做法**：

    - **LogNormalize**：每个细胞除以 total counts，乘以 scale factor（如 10,000），再 log1p。简单、快，但对高表达基因过度压缩。

    - **SCTransform**（Hafemeister \& Satija, *Genome Biol* 2019）：用正则化负二项回归把"测序深度"和"生物学表达"分开，对高 UMI 基因校正更好。Seurat v4\+ 默认。

- **局限**：normalization 只校正测序深度，**不能校正 batch effect**——那是下一步的事。

### 6\.3\.3 Highly Variable Genes（HVG，高变基因）【成熟·标准流程】

- **解决什么问题？** 全基因组 20,000 个基因里大部分在细胞间不变化或变化极小，把它们塞进 PCA 只会引入噪声。

- **核心思想**：挑出"在细胞间方差显著大于均值预期"的 \~2,000 个基因，后续只在这些基因上做 PCA。

- **为什么有效**：把维度从 20k 降到 2k，信噪比大幅提升。

- **工具**：Seurat `FindVariableFeatures`（vst 方法）、Scanpy `highly_variable_genes`（seurat\_v3/seurat/cell\_ranger）。

- **局限**：HVG 选择对小样本不稳定；稀有细胞类型的 marker 可能因为细胞数太少没进 HVG 列表。

### 6\.3\.4 PCA【成熟·标准流程】

- **解决什么问题？** 2,000 维 HVG 仍然太高，需要降维。

- **核心思想**：线性变换，找方差最大的正交方向。

- **关键决策**：保留多少 PCs？**经验值 30–50**。过多保留噪声维，过少丢信号。

- **为什么不用 t\-SNE/UMAP 直接聚类？** 因为 t\-SNE/UMAP 是**非线性可视化**，距离和邻接关系不可靠，不能直接用作聚类输入。

### 6\.3\.5 Batch effect（批次效应）与整合工具【成熟·标准流程，但工具选择有争议】

- **解决什么问题？** 不同样本、不同批次、不同平台测的数据，技术差异（试剂批号、操作人员、测序深度）会被算法误认为生物学差异。**做任何跨样本/跨条件比较前必须做 batch correction。**

- **核心思想**：找到"技术上相似但生物学不同"的细胞群体（如不同批次的 T 细胞），把它们在 embedding 空间对齐。

- **主流工具对比**：

|工具|类型|优点|缺点|成熟度|
|---|---|---|---|---|
|**Harmony**（Korsunsky 等, *Nat Methods* 2019）|PCA 嵌入上的迭代聚类校正|快、内存小、benchmark 中常排名第一|对极端 batch 效果有限|【成熟·标准流程】|
|**Seurat RPCA / CCA**（Stuart 等, *Cell* 2019）|典型相关分析 \+ 锚点|生态完整、教程多|计算慢、对大数据集吃力|【成熟·标准流程】|
|**BBKNN**（Polanski 等, *Bioinformatics* 2020）|kNN 图层面混批|极快|只改 KNN 图，不改表达矩阵；可能引入假邻居|【成熟·标准流程】|
|**scVI**（Lopez 等, *Nat Methods* 2018）|变分自编码器（VAE）|可扩展到百万细胞、输出概率模型|需要调参、对超参数敏感|【成熟·标准流程】|
|**Harmony vs scVI 之争**|—|2024–2025 多项 benchmark 显示：Harmony 在多数真实场景下最稳；scVI 在大数据集、多条件变量上更强（Chazarra\-Gil 等, *PNAS* 2025, doi:10\.1073/pnas\.2416516122；PMC12315870 指出 Harmony 是唯一在所有测试中表现稳定的方法）|没有"最好"的方法，只有"对你的数据最好"的方法|—|

- **常见错误**：

    1. **把生物学差异当 batch 去掉**：如果两组本来就是不同组织/不同时间点，不应该用强整合把它们"抹平"。整合前先想清楚"什么是我想保留的生物信号"。

    2. **过度整合**：Harmony/scVI 把不该合并的细胞硬合并成一个 cluster，导致"发现不了新细胞类型"。

    3. **在 corrected embedding 上做差异表达**：大多数整合方法**只改 embedding，不改 counts**；做 DGE 必须用 raw counts，不能用 corrected 后的值。

### 6\.3\.6 Nearest\-neighbor graph \+ Clustering【成熟·标准流程】

- **解决什么问题？** 把细胞按"表达相似"分组。

- **核心思想**：在 PCA 空间找每个细胞的 k 近邻（k 通常 10–30），建 KNN 图；然后在图上做社区检测。

- **算法**：

    - **Louvain**：经典、快，但会产生大小不均的 cluster。

    - **Leiden**（Traag 等, *Sci Rep* 2019）：保证连通性、避免 Louvain 的"断开社区"问题，现在默认。

    - **Louvain\-CTD / community detection**：用于层级聚类。

- **分辨率参数 resolution**：**这是最需要手动调的参数**。低 resolution 得到大 cluster（粗分细胞类型），高 resolution 得到小 cluster（细分细胞状态）。

- **常见错误**：

    - **把 cluster 当细胞类型**：cluster 是"算法在某个 resolution 下切出来的连通块"，**不等于生物学细胞类型**。同一个细胞类型在不同 resolution 下会被切成多个 cluster。

    - **盲目追求"细"**：很多论文切 30–50 个 cluster，其中一半是 doublet、批次伪迹或连续状态被硬切成离散块。

### 6\.3\.7 UMAP / t\-SNE 可视化【成熟·标准流程，但极易被误读】

- **解决什么问题？** 把高维数据画到 2D 图上让肉眼看。

- **核心思想**：UMAP（McInnes 等, 2018）用拓扑结构近似，t\-SNE（van der Maaten \& Hinton, 2008）用 t 分布邻居概率。

- **关键警告**：

    1. **UMAP/t\-SNE 上的距离不反映真实距离**。两个点在图上离得远，不代表它们在高维空间真的差很多。

    2. **UMAP 上 cluster 之间的"形状"没有生物学意义**。一个 cluster 拉长成一条曲线，不代表它是连续轨迹。

    3. **UMAP 的结果随机初始化**：同一个数据跑两次，cluster 形状可能不同，但聚类标签应该稳定。

    4. **UMAP 不能用来做统计推断**：不要在 UMAP 上算"两组细胞距离"，那是错的。

### 6\.3\.8 Marker gene 与细胞注释【成熟·标准流程 \+ 【快速发展】】

- **解决什么问题？** 给每个 cluster 起名字（"这是 T cell"、"这是肺泡 II 型细胞"）。

- **两步走**：

    1. **找 marker**：用 Wilcoxon 秩和检验 / MAST（Finak 等, *Genome Biol* 2015）/ edgeR / presto，找"在这个 cluster 显著高表达"的基因。

    2. **注释**：

        - **人工注释**：查已知 marker 表（如 T cell = CD3D/CD3E；B cell = CD79A/MS4A1；巨噬 = CD68/CD163）。最可靠但慢。

        - **SingleR**（Aran 等, *Nat Immunol* 2019）：用 bulk 参考转录组自动标注。【成熟】但 bulk 参考本身有偏差。

        - **CellTypist**（Domínguez Conde 等, *Science* 2022）：用神经网络 \+ 大规模参考数据集（Human Cell Atlas 免疫数据），自动标注。【快速发展】对免疫细胞尤其强。

        - **Azimuth**（Hao 等, *Cell* 2021）：Seurat 生态内置参考映射。【成熟】

        - **scMap / scBERT / scGPT**：深度学习方法，【有争议或未证明价值】（见 6\.5\.5）。

- **常见过度解释**：

    - 看到 CD4\+CD8\+ 双阳就说"双阳性 T 细胞"，可能只是 doublet。

    - 看到一个 cluster 表达好几个 marker 就说"新细胞类型"，90% 情况是 doublet 或批次效应。

    - **判断新细胞类型的标准**：\(a\) 在多个独立样本中重复出现；\(b\) 有明确的 marker 组合；\(c\) 不是 doublet/ambient；\(d\) 有功能验证（至少是正交实验）。

---

## 6\.4 前沿分析：轨迹、RNA velocity、细胞通讯、调控网络

这一节是 scRNA\-seq 最容易被"过度解释"的部分。每个方法都会单独标注成熟度。

### 6\.4\.1 Trajectory inference / Pseudotime（轨迹推断 / 拟时序）【快速发展，但有滥用】

- **解决什么问题？** 细胞分化是连续过程，但 scRNA\-seq 是"快照"。能不能把不同分化阶段的细胞排成一条"伪时间轴"，推断分化路径？

- **输入输出**：输入是细胞 × 基因矩阵（或 PCA embedding \+ KNN 图）；输出是每个细胞的 pseudotime 值 \+ 分支结构。

- **核心思想**：假设相邻细胞表达相似，把细胞排成一条（或分叉的）曲线。

- **典型工具**：

    - **Monocle 3 / Monocle 2**（Trapnell 等, *Nat Biotechnol* 2014；Cao 等, *Nature* 2019）：最经典，用 DDRTree 降维 \+ 反向图嵌入。【成熟】但 Monocle 3 对大数据集慢。

    - **Slingshot**（Street 等, *BMC Bioinformatics* 2018）：先聚类，再在 cluster 间画最小生成树，然后拟合主曲线。【成熟】更稳健。

    - **PAGA**（Wolf 等, *Genome Biol* 2019）：Scanpy 内置，建 cluster 间的简约图。【成熟】

    - **Diffusion Pseudotime \(DPT\)**：Haghverdi 等, *Nat Methods* 2016。

- **为什么有效？** 在已知线性分化系统（如造血、神经发生）里，pseudotime 与真实分化时间高度相关。

- **局限与过度解释警告**：

    1. **pseudotime 不是真实时间**：它只是"沿着某个流形的距离"，单位没有物理意义。

    2. **分支方向需要外部信息**：算法能告诉你"这里分叉"，但不能告诉你"哪边是起点"。需要已知 marker（如分化早期基因）或 RNA velocity 来定方向。

    3. **静态数据不能证明因果**：pseudotime 只能说"这些细胞看起来按这个顺序变化"，不能说"A 真的变成了 B"。

    4. **在稳态组织里 pseudotime 经常是假的**：如果细胞没有分化，只是连续状态波动，算法仍会硬画出一条轨迹。

### 6\.4\.2 RNA velocity（RNA 速度）【快速发展，理论吸引人但实践有严重局限】

- **解决什么问题？** 上面 pseudotime 只能给"顺序"，不能给"方向"。RNA velocity 想从数据本身推断"细胞下一步会变成什么"。

- **核心思想**（La Manno 等, *Nature* 2018）：

    - 基因转录先产生**未剪接的 pre\-mRNA**（内含子保留），然后剪接成成熟 mRNA。

    - 如果某个基因正在被**激活**，未剪接比例 \> 已剪接（因为还在转录中）；

    - 如果正在被**抑制**，未剪接比例 \< 已剪接。

    - 用这个比值推断细胞的"未来方向"。

- **典型工具**：

    - **Velocyto**：原始版本，稳态模型。

    - **scVelo**（Bergen 等, *Nat Biotechnol* 2020）：用动力学模型（EM 框架）估计转录/剪接/降解速率，处理异质性。【快速发展】

    - **veloVI**：变分推断版本，处理稀疏性。

    - **cellDancer / DeepVelo / TIVelo**：深度学习版本。

- **为什么有效？** 在发育、分化系统中，确实能给出与生物学预期一致的方向。

- **局限与争议（2024–2025 年越来越多批评）**：

    1. **前提假设太强**：假设剪接速率 β 和降解速率 γ 跨细胞共享、基因独立。真实数据常违反。

    2. **在稳态细胞中 velocity 经常指向错误方向**：2025 年 PLoS Comput Biol 综述（doi:10\.1371/journal\.pcbi\.1014303）系统比较多个生物学场景后指出，RNA velocity 结果高度依赖参数和数据预处理。

    3. **RNA 半衰期差异巨大**：某些基因半衰期几分钟，某些几小时；统一模型会失真。

    4. **代谢标记方法（scSLAM\-seq 等）**：直接用 4sU 标记新合成 RNA，比间接推断更可靠，但实验成本高。

- **成熟度判断**：【快速发展】但**不应单独作为因果结论**。需要用 lineage tracing（谱系追踪）或时间序列验证。

### 6\.4\.3 Cell\-cell communication（细胞通讯）【快速发展，但过度解释最严重的领域之一】

- **解决什么问题？** 组织里不同细胞类型通过配体\-受体（L\-R）相互作用。scRNA\-seq 能不能推断"哪种细胞在跟哪种细胞说话"？

- **核心思想**：如果细胞 A 表达配体 L，细胞 B 表达受体 R，就推断 A→B 有通讯。

- **典型工具**：

    - **CellChat**（Jin 等, *Nat Commun* 2021）：用数据库（CellChatDB）查 L\-R 对，加 permutation 检验。【快速发展】最流行。

    - **NicheNet**（Browaeys 等, *Nat Methods* 2020）：不仅看 L\-R，还看下游靶基因调控网络，更精细。【快速发展】

    - **CellPhoneDB**（Efremova 等, *Nat Protoc* 2020）：基于多亚基复合物的 L\-R 数据库。

    - **CellPhoneDB v5 / LIANA**：2024–2025 多数据库整合。

- **为什么"看起来"有效？** 已知的免疫细胞通讯（如抗原递呈、T 细胞共刺激）确实能被这些方法重新发现，所以"能 work"。

- **严重警告（过度解释重灾区）**：

    1. **表达 ≠ 蛋白水平**：scRNA\-seq 测的是 mRNA，不是蛋白。受体 mRNA 存在不代表细胞膜上有功能蛋白。

    2. **L\-R 数据库不完整**：已知人类 L\-R 对约 2,000–5,000 对，真实数量可能 10 倍以上；未收录的相互作用全部漏掉。

    3. **相关性 ≠ 因果**：A 表达 L、B 表达 R，不代表 A 真的在体内跟 B 通讯。可能是空间上根本不相邻。

    4. **没有空间信息时尤其危险**：必须用空间转录组（见第七章）验证相邻性。

    5. **任何论文里说"我们发现了 X\-Y 新型细胞通讯"**，都要追问：\(a\) 有没有配体/受体的蛋白验证？\(b\) 有没有空间证据？\(c\) 有没有功能阻断实验？

- **成熟度**：【快速发展】但目前产出**只能作为假设生成**，不能作为结论。

### 6\.4\.4 Gene regulatory network（GRN，基因调控网络）【有争议或未证明价值】

- **解决什么问题？** 转录因子（TF）如何调控下游靶基因？能不能从 scRNA\-seq 推断调控网络？

- **典型工具**：

    - **SCENIC / pySCENIC**（Aibar 等, *Nat Methods* 2017）：用共表达 \+ motif 富集找 TF→靶基因模块。【成熟但被滥用】

    - **CellOracle**（Kamimoto 等, *Nature* 2023）：把 GRN 与 perturbation 模拟结合。

    - **Scribe / Scribe\-TF**：用信息论。

- **核心思想**：TF 与其靶基因共表达 → 推断调控关系。

- **严重局限**：

    1. **共表达 ≠ 调控**：两个基因一起变，可能是共同上游因子驱动，不是 A 直接调控 B。

    2. **scRNA\-seq 的 dropout 噪声**：稀疏数据下共表达估计极不稳定。

    3. **没有扰动实验时，GRN 推断的假阳性率很高**。

- **成熟度**：【有争议或未证明价值】——SCENIC 结果可以生成假设，但**不应作为已证明的调控关系**写进结论。真正的 GRN 验证需要 CUT\&RUN/ATAC \+ 扰动实验。

### 6\.4\.5 Cell state vs Cell type（细胞状态 vs 细胞类型）【概念性争议】

- **概念**：

    - **Cell type（细胞类型）**：稳定的、谱系上固定的身份（如 CD4\+ T cell、肝细胞）。

    - **Cell state（细胞状态）**：同一类型内的短暂功能状态（如 T cell 的活化状态、记忆状态；癌细胞的周期状态）。

- **为什么重要**：过去十年很多"新细胞类型"的报道，事后被证明只是已知类型的状态。

- **判断标准**（Hao 等, *Cell* 2021 讨论；Bock 等, *Nat Methods* 2022 综述）：

    - 类型：跨样本、跨个体、跨时间稳定；有稳定 TF 网络；发育谱系固定。

    - 状态：在诱导/扰动下可逆；表达谱连续变化；同一类型内切换。

- **过度解释警告**：把"细胞周期 S/G2M 期"、"应激状态"、"低质量 cluster"当成新细胞类型，是 scRNA\-seq 论文最常见的错误之一。

---

## 6\.5 单细胞基础模型（Foundation Models）：2023–2026 的热潮与冷却【有争议或未证明价值】

### 6\.5\.1 现象

2023 年起，多个团队发布"单细胞大模型"：

- **scGPT**（Cui 等, *Nat Methods* 2024, doi:10\.1038/s41592\-024\-02201\-0）：在 1000 万细胞上预训练 Transformer。

- **Geneformer**（Chen 等, *Nature* 2024, doi:10\.1038/s41586\-024\-06978\-5）：在 3000 万细胞上预训练。

- **scFoundation**：更大的中文团队模型。

- **scBERT / Universal Cell Embeddings \(UCE\)**：后续工作。

### 6\.5\.2 2024–2025 年的冷却

多项独立 benchmark 显示：

- **零样本（zero\-shot）性能常不如简单方法**：PMC12007350（2025）系统评估指出，Geneformer/scGPT 在 cell type 聚类、batch 混合上**不如直接用 HVG \+ Harmony/scVI**。

- **预训练污染问题**：arXiv 2607\.20572（2026）指出 scFM 的 benchmark 数据集与预训练语料高度重叠，"零样本"成绩可能是记忆而非泛化。

- **扰动预测失败**：Nature 子刊 2025 年研究指出，scGPT/scFoundation 预测基因扰动效应时**未超过"无变化"基线**。

- **BioLLM**（PMC12365531, 2026）总结：scGPT 在多任务上较稳，Geneformer/scFoundation 偏 gene\-level 任务，scBERT 偏弱。

### 6\.5\.3 当前共识

- **成熟度**：【有争议或未证明价值】

- **主流观点**：在有标签数据充足、任务明确的情况下，**经典方法（Harmony \+ scVI \+ CellTypist）通常足够**；基础模型的优势目前主要在 zero\-shot 注释和迁移学习，但稳定性和可解释性仍差。

- **研究者推测**：随着模型更大、训练数据更干净、评估协议更严格（排除预训练污染），基础模型可能在 2027–2028 年真正兑现潜力。但目前不应作为"必选工具"。

---

## 6\.6 关键工具速查表

|工具|语言|用途|论文|成熟度|
|---|---|---|---|---|
|Seurat|R|全流程主力|Stuart 等, *Cell* 2019|【成熟·标准流程】|
|Scanpy / scverse|Python|全流程 \+ 大数据|Wolf 等, *Genome Biol* 2018|【成熟·标准流程】|
|Harmony|R/Python|批次整合|Korsunsky 等, *Nat Methods* 2019|【成熟·标准流程】|
|scVI / scvi\-tools|Python|深度整合|Lopez 等, *Nat Methods* 2018|【成熟·标准流程】|
|BBKNN|Python|图层面混批|Polanski 等, *Bioinformatics* 2020|【成熟·标准流程】|
|CellTypist|Python|自动注释|Domínguez Conde 等, *Science* 2022|【快速发展】|
|SingleR|R|自动注释|Aran 等, *Nat Immunol* 2019|【成熟·标准流程】|
|Monocle3|R|轨迹推断|Trapnell 等, *Nat Biotechnol* 2014; Cao 等, *Nature* 2019|【成熟·标准流程】|
|Slingshot|R|轨迹推断|Street 等, *BMC Bioinformatics* 2018|【成熟·标准流程】|
|scVelo|Python|RNA velocity|Bergen 等, *Nat Biotechnol* 2020|【快速发展】|
|CellChat|R|细胞通讯|Jin 等, *Nat Commun* 2021|【快速发展】|
|NicheNet|R|细胞通讯 \+ 调控|Browaeys 等, *Nat Methods* 2020|【快速发展】|
|SCENIC|R/Python|GRN|Aibar 等, *Nat Methods* 2017|【有争议】|
|scGPT|Python|基础模型|Cui 等, *Nat Methods* 2024|【有争议】|
|Geneformer|Python|基础模型|Chen 等, *Nature* 2024|【有争议】|

---

## 6\.7 本章小结：哪些地方最容易被过度解释

1. **UMAP 形状**：不是生物学结构，是可视化结果。

2. **Cluster 标签**：不等于细胞类型；分辨率是人为参数。

3. **Pseudotime**：不是真实时间，不证明因果。

4. **RNA velocity**：方向可能错，需要谱系追踪验证。

5. **CellChat 通讯**：mRNA ≠ 蛋白，必须有空间和功能验证。

6. **GRN**：共表达 ≠ 调控。

7. **基础模型**：零样本性能常不如简单方法，警惕"大模型万能"叙事。

---
