---
prev:
  text: "十四、多组学整合"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/14-multiomics"
next:
  text: "十六、机器学习在生物信息学中的应用"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/16-machine-learning"
---

# 十五、表观遗传生物信息学

> 表观遗传不改变 DNA 序列，但调控基因表达。本章覆盖三大类标记：DNA 甲基化、组蛋白修饰、染色质可及性，以及对应的测序技术与计算方法。
> 
> 

---

## 15\.1 三大类表观标记总览

|标记类型|化学本质|测序方法|生物学功能|
|---|---|---|---|
|**DNA methylation（DNA 甲基化，5mC）**|CpG 位点的胞嘧啶甲基化|Bisulfite sequencing（WGBS / RRBS / scBS）|启动子高甲基化 → 基因沉默；印记、X 失活|
|**Histone modification（组蛋白修饰）**|组蛋白尾巴（H3K4me3 等）共价修饰|ChIP\-seq / CUT\&RUN / CUT\&Tag|H3K4me3=启动子活跃；H3K27ac=增强子活跃；H3K27me3=抑制|
|**Chromatin accessibility（染色质可及性）**|DNA 被开放还是压缩|ATAC\-seq / DNase\-seq|开放区域 = 潜在调控元件（启动子、增强子）|

---

## 15\.2 DNA 甲基化与 Bisulfite Sequencing

### 15\.2\.1 Bisulfite sequencing（亚硫酸氢盐测序）【成熟·标准流程】

- **解决什么问题？** 怎么在全基因组上单个碱基分辨率地测 5mC？

- **核心化学**：亚硫酸氢盐处理把**未甲基化的胞嘧啶变成尿嘧啶（测序时读成 T），甲基化**的胞嘧啶不变（仍读成 C）。通过比较处理前后的 C/T 比例，推断每个 CpG 的甲基化率。

- **输入输出**：

    - 输入：基因组 DNA；

    - 输出：每个 CpG 位点的甲基化率（0–100%）。

- **为什么有效？** 化学上把甲基化信息编码到序列差异里，复用 NGS 平台。

- **主要变体**：

    - **WGBS（Whole\-Genome Bisulfite Sequencing）**：全基因组单碱基分辨率。金标准。【成熟·标准流程】

    - **RRBS（Reduced Representation Bisulfite Sequencing）**：用 MspI 酶切富集 CpG 富集区，便宜但只覆盖启动子/CpG 岛约 10% 基因组。【成熟·标准流程】

    - **scBS\-seq / scWGBS**（Smallwood 等, *Nat Methods* 2014）：单细胞甲基化。【快速发展】

    - **MethylationEPIC / Illumina BeadChip**：芯片法，便宜、覆盖 \~850k CpG，临床常用。

- **局限**：

    - 亚硫酸氢盐反应剧烈，会破坏 DNA（脱嘧啶、链断裂），导致起始 DNA 量大、覆盖不均。

    - **不能区分 5mC 和 5hmC**（5\-羟甲基胞嘧啶）——它们都抗亚硫酸氢盐转换。要区分需 OxBS\-seq / TAB\-seq。

    - 单细胞甲基化数据极稀疏（每个细胞只覆盖 \~10–30% CpG），需要 imputation（如 MambaCpG, *Brief Bioinform* 2025, doi:10\.1093/bib/bbaf360）。

- **后来的改进**：scDEEP\-mC（2025，PMC12234882）提高单细胞覆盖；Nanopore 直接测序**不需要亚硫酸氢盐**，可直接测 5mC 和 5hmC，是新兴方向。

### 15\.2\.2 甲基化数据分析核心流程【成熟·标准流程】

1. **比对**：Bismark（Krueger 等, *Bioinformatics* 2011）、BS\-Seeker2、bwa\-meth。把 reads 比对到"亚硫酸氢盐转换后"的参考基因组。

2. **提取甲基化率**：每个 CpG 的 C  reads / total reads。

3. **差异甲基化区域（DMR）**：用 DSS / bsseq / Metilene 找两组间差异甲基化区域。

4. **注释**：DMR 落在启动子还是基因体？是否对应已知基因？

---

## 15\.3 组蛋白修饰与 ChIP\-seq / CUT\&Tag

### 15\.3\.1 ChIP\-seq（Chromatin Immunoprecipitation sequencing）【成熟·标准流程】

- **解决什么问题？** 怎么知道某个组蛋白修饰（如 H3K4me3）或转录因子在基因组上的结合位置？

- **核心思想**：

    1. 用甲醛把 DNA\-蛋白交联固定；

    2. 超声打碎染色质；

    3. 用**针对目标蛋白/修饰的抗体**把复合物拉下来（免疫沉淀）；

    4. 解交联、测序；

    5. 比对到基因组，"reads 富集的区域"就是结合位点。

- **输入输出**：输入是染色质 DNA；输出是基因组上的 reads 富集峰（peak）。

- **为什么有效？** 抗体特异性决定一切。ENCODE 标准要求抗体经过验证。

- **局限**：

    - 需要大量起始细胞（百万级）；

    - 抗体特异性是最大误差来源；

    - 交联超声步骤引入批次效应；

    - 无法做单细胞（传统 ChIP\-seq）。

### 15\.3\.2 CUT\&RUN / CUT\&Tag【快速发展，正在取代 ChIP\-seq】

- **解决什么问题？** ChIP\-seq 需要百万细胞、交联步骤复杂。能不能用更少细胞、不做交联？

- **核心思想**（Skene 等, *eLife* 2017 CUT\&RUN；Kaya\-Okur 等, *Nat Commun* 2019 CUT\&Tag）：

    - 在完整细胞核内，用抗体靶向目标蛋白；

    - 接上 Protein A\-MNase（CUT\&RUN）或 Protein A\-Tn5（CUT\&Tag）；

    - 激活后在目标位点附近切割并测序。

- **为什么有效？** 不需要交联、不需要超声，背景低、起始量可低到 100 个细胞，**可以做单细胞（scCUT\&Tag）**。

- **成熟度**：【快速发展】但 2024–2026 年正在快速取代 ChIP\-seq 成为新标准。ENCODE 已接受 CUT\&Tag 作为替代。

- **局限**：

    - 对某些极罕见修饰（如 H3K9me3 异染色质区）效果不如 ChIP\-seq；

    - Tn5 有序列偏好。

---

## 15\.4 染色质可及性与 ATAC\-seq

### 15\.4\.1 ATAC\-seq（Assay for Transposase\-Accessible Chromatin sequencing）【成熟·标准流程】

- **解决什么问题？** 怎么知道基因组上哪些区域是"开放"的（有转录因子结合）？

- **核心思想**（Buenrostro 等, *Nat Methods* 2013）：

    - Tn5 转座酶会**优先插入开放 DNA**；

    - 在插入位点同时加测序接头；

    - 测序富集开放区域。

- **输入输出**：输入是细胞核；输出是开放染色质区域（peak）。

- **为什么有效？** 只需 500–50,000 个细胞，实验周期 1 天，远快于 DNase\-seq / FAIRE\-seq。

- **优势**：可做单细胞（scATAC\-seq，10x Chromium Single Cell ATAC）。

- **局限**：

    - Tn5 有序列偏好（略偏 GC 丰富区）；

    - 线粒体 DNA 高背景（需用 detergent 去除或 bioinformatics 过滤）；

    - 开放 ≠ 有功能：开放区可能是"准备好但没激活"。

---

## 15\.5 Peak calling（峰调用）【成熟·标准流程】

- **解决什么问题？** ChIP\-seq / ATAC\-seq 的 reads 怎么变成"区域列表"？

- **典型算法**：

    - **MACS2**（Zhang 等, *Genome Biol* 2008；最新版 MACS3）：ENCODE ATAC\-seq 官方默认。核心是滑动窗口 \+ Poisson 检验 \+ 局部背景估计。【成熟·标准流程】

    - **HMMRATAC**：专门为 ATAC\-seq 设计，用 HMM 分离 nucleosome\-free / nucleosome 区域。

    - **SEACR**：专为 CUT\&RUN/CUT\&Tag 稀疏数据设计。

    - **Genrich**：单样本无对照 peak calling。

- **核心概念**：

    - **Input control**：ChIP\-seq 通常需要 input 对照（未免疫沉淀的染色质），用于扣除基因组可重复性偏差。

    - **FDR / q\-value**：peak 显著性阈值，常用 0\.01。

- **局限**：

    - Peak 数对参数极敏感；

    - 宽 peak（如 H3K27me3 抑制标记）和窄 peak（如 TF 结合）要用不同参数；

    - scATAC\-seq 不能直接 peak call，要先 pseudobulk 到 cell type 再 call。

---

## 15\.6 Motif analysis（基序分析）【成熟·标准流程】

- **解决什么问题？** 在开放区域/peak 里，富集了哪些转录因子结合 motif？

- **核心思想**：已知 TF 的 DNA 结合序列有特定"基序"（如 AP\-1 = TGAGTCA）。在 peak 序列里统计哪些 motif 富集，反推"哪些 TF 可能在这里结合"。

- **典型工具**：

    - **HOMER**（Heinz 等, *Mol Cell* 2010）：`findMotifsGenome.pl`，最常用。【成熟】

    - **MEME / MEME\-ChIP**：经典 de novo motif 发现。

    - **HOMER / JASPAR / CIS\-BP**：motif 数据库。

- **局限与警告**：

    - **Motif 富集 ≠ TF 真的结合**：需要 ChIP\-seq / CUT\&Tag 验证。

    - 很多 TF 共享相似 motif（如 AP\-1 家族），无法仅凭 motif 区分具体哪个 TF。

    - 单细胞数据 motif 分析（chromVAR 等）噪声大。

---

## 15\.7 Chromatin state（染色质状态）【成熟·标准流程】

- **解决什么问题？** 单看一个组蛋白修饰不够。能不能把多个修饰组合起来，把基因组分成"启动子、增强子、绝缘子、异染色质"等功能状态？

- **核心思想**：在同一样本上测多个 ChIP\-seq（如 H3K4me3 \+ H3K4me1 \+ H3K27ac \+ H3K27me3 \+ H3K9me3），用无监督学习把基因组切成"状态段"。

- **典型工具**：

    - **ChromHMM**（Ernst 等, *Nat Methods* 2012）：HMM 模型，把基因组分成 15–25 个状态。【成熟·标准流程】

    - **Segmentor / Segway**：同类。

- **输出**：例如 "状态 1 = 强启动子"、"状态 7 = 活跃增强子"、"状态 13 = 异染色质"。

- **为什么有效？** ENCODE/Roadmap Epigenomics 用这个方法绘制了人体多组织的染色质状态图谱，是解释 GWAS SNP 落在非编码区功能的基础。

- **局限**：状态数（15 vs 25）是人为设定；状态命名带解释性。

---

## 15\.8 单细胞表观分析工具：ArchR / Signac

### 15\.8\.1 scATAC\-seq 计算流程【成熟·标准流程】

与 scRNA\-seq 类似，但矩阵是"细胞 × peak（或 bin）"，且更稀疏（每个细胞只测几千个 peak）。

1. **比对 \+ fragment 计数**：Cell Ranger ATAC、ArchR、Signac。

2. **QC**：

    - 每个细胞的 fragments 数（典型 \> 3,000）；

    - TSS enrichment（转录起始位点富集度）——scATAC 特有的关键 QC 指标；

    - 核小体信号分布（insert size periodicity）。

3. **LSI / TF\-IDF 降维**：scATAC 不直接用 PCA，常用 LSI（latent semantic indexing）。

4. **聚类 \+ UMAP**：与 scRNA 类似。

5. **Peak calling**：把同 cluster 细胞 pseudobulk 后用 MACS2 call peak。

6. **Gene activity / gene score**：把 peak 信号投射到基因附近，近似"该基因是否开放"。

7. **Marker feature / motif 富集**：chromVAR 算每个细胞的 TF 活性。

### 15\.8\.2 工具对比

|工具|语言|生态|成熟度|
|---|---|---|---|
|**ArchR**（Granja 等, *Nat Genet* 2021）|R|高性能 scATAC \+ multiome|【成熟·标准流程】|
|**Signac**（Stuart 等, *Genome Biol* 2021）|R|Seurat 生态|【成熟·标准流程】|
|**scATAC\-pro / snapATAC**|Python/R|模块化|【成熟·标准流程】|
|**ArchR \+ ArchR\-multiome**|R|RNA\+ATAC 联合|【成熟·标准流程】|

**主流观点**：ArchR 和 Signac 二选一即可。新手建议从 Signac 开始（与 Seurat 同源）；大数据集用 ArchR（速度快）。

---

## 15\.9 多模态与新兴方向

- **Multiome（RNA \+ ATAC 同时测）**：10x Multiome 是主流。计算上用 WNN（weighted nearest neighbor, Hao 等, *Cell* 2021）或 MOFA\+（Argelaguet 等, *Genome Biol* 2020）整合。【快速发展】

- **scCUT\&Tag \+ scRNA 多组学**：2024–2025 年开始普及。

- **Nanopore 直接表观测序**：不需要亚硫酸氢盐，同时测 5mC、6mA、5hmC，且读长超长。【快速发展】但错误率和成本仍是瓶颈。

- **空间表观组学（spatial ATAC、spatial methylation）**：2024–2025 刚起步。【快速发展】

---

## 15\.10 表观组学常见误区

1. **"开放 = 表达"**：不一定。开放染色质可能是"准备但未激活"，也可能是被动开放。必须与 RNA 数据联合看。

2. **"Peak 越多越好"**：参数宽松会得到大量假峰。要对照 input control。

3. **"Motif 富集 = 该 TF 在工作"**：必须有 CUT\&Tag / 蛋白数据验证。

4. **"DNA 甲基化只在启动子"**：基因体甲基化、增强子甲基化、远端调控都很重要，不要只看启动子。

5. **"ChIP\-seq 是金标准"**：抗体特异性是最大误差源，ENCODE 要求所有抗体验证。CUT\&Tag 正在取代 ChIP\-seq。

---

## 15\.11 本章关键工具速查表

|工具|用途|论文|成熟度|
|---|---|---|---|
|MACS2/MACS3|Peak calling|Zhang 等, *Genome Biol* 2008|【成熟·标准流程】|
|Bismark|Bisulfite 比对|Krueger 等, *Bioinformatics* 2011|【成熟·标准流程】|
|HOMER|Motif 分析|Heinz 等, *Mol Cell* 2010|【成熟·标准流程】|
|ChromHMM|染色质状态|Ernst 等, *Nat Methods* 2012|【成熟·标准流程】|
|ArchR|scATAC 分析|Granja 等, *Nat Genet* 2021|【成熟·标准流程】|
|Signac|scATAC \+ multiome|Stuart 等, *Genome Biol* 2021|【成熟·标准流程】|
|SEACR|CUT\&RUN peak calling|Meers 等, *Genome Biol* 2019|【快速发展】|
|HMMRATAC|ATAC 专用 peak calling|Gorkin 等, *Nat Commun* 2019|【快速发展】|
|chromVAR|scATAC TF 活性|Schep 等, *Nat Methods* 2017|【成熟·标准流程】|
|MOFA\+|多组学整合|Argelaguet 等, *Genome Biol* 2020|【快速发展】|

---

## 三章共同的方法论提醒

1. **没有"最优工具"，只有"对你的数据合适的工具"**：所有 benchmark 都显示，方法性能随数据集特征变化。

2. **可视化不是结论**：UMAP、t\-SNE、UMAP 上的 cluster 形状都不能作为统计证据。

3. **相关性 ≠ 因果**：细胞通讯、GRN、轨迹推断都是"假设生成"工具，需要功能实验验证。

4. **2024–2026 年的趋势**：

    - 单细胞基础模型（scGPT/Geneformer）热潮冷却，回归经典方法；

    - 空间组学平台趋于成熟，多平台 benchmark 出现；

    - CUT\&Tag 取代 ChIP\-seq；

    - 多模态（RNA \+ ATAC \+ 蛋白）成为主流。

5. **本科生入门建议**：先把 Seurat \+ Scanpy \+ Harmony \+ CellTypist 这套标准流程跑通，再读前沿论文。**不要一开始就追大模型。**

---

> 引用规范说明：本章关键论断均标注作者\+年份\+期刊；2024–2026 新进展基于实际文献检索核验。个别工具细节（如具体 DOI 后缀）标"待核实"处需读者在官方文档二次确认。
> 
> 
