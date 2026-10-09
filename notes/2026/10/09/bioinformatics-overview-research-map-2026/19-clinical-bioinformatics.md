---
prev:
  text: "十八、AI for Science 与生成式生物学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/18-ai-for-science-generative-biology"
next:
  text: "二十、生物信息学数据库生态：一张完整数据库地图"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/20-databases"
---

# 十九、精准医疗与临床生物信息学

## 19\.1 临床基因组学的核心问题

把基因组学从实验室搬进临床，要回答：这个变异是什么？致病吗？该怎么办？成本谁付？这一章围绕这四个问题展开。

## 19\.2 临床基因组学子领域

### 19\.2\.1 临床基因组学（clinical genomics）

- **场景**：胚系变异检测（遗传病、家族性肿瘤、药物基因组学）。

- **流程**：样本 → WES/WGS/Panel → variant calling → 注释 → 致病性分类 → 报告。

- **成熟度**：【成熟·标准流程】在儿科罕见病、BRCA 等肿瘤易感基因。

### 19\.2\.2 癌症基因组学（cancer genomics）

- **特点**：体细胞突变（somatic）\+ 胚系突变（germline）；肿瘤异质性；低肿瘤纯度（purity）。

- **工具**：Mutect2（GATK）、Strelka2、VarScan2、FACETS（CNV）、ASCAT。

- **数据库**：TCGA（The Cancer Genome Atlas）、cBioPortal、COSMIC。

- **成熟度**：【成熟·标准流程】。

### 19\.2\.3 罕见病基因组学（rare disease genomics）

- **挑战**：\~10,000 种罕见病，单个病患者少；变异新颖；表型异质。

- **工具**：Exomiser、VASP、GADO；表型匹配（HPO 术语 \+ 语义相似度）。

- **数据库**：ClinVar、OMIM、Orphanet。

- **成熟度**：【成熟·标准流程】在教学医院；诊断率 \~30–40%（WES），剩下需结构变异、甲基化、转录组。

### 19\.2\.4 药物基因组学（pharmacogenomics, PGx）

- **场景**：根据 CYP2D6/CYP2C19/TPMT/HLA 等基因变异调整剂量（如华法林、氯吡格雷、巯嘌呤）。

- **成熟度**：【成熟·标准流程】在特定基因—药物对；广泛临床植入仍在推进。

## 19\.3 Variant interpretation：致病性分类

### 19\.3\.1 核心术语

- **pathogenic variant（致病变异）**：明确导致疾病的变异。

- **likely pathogenic（LP）**：\>90% 概率致病。

- **VUS（variant of uncertain significance，意义未明变异）**：证据不足，不能下结论。

- **likely benign / benign**：良性。

- **为什么 VUS 是最大痛点**：临床测序中 30–60% 变异是 VUS，不能指导临床决策；数据积累后每年会有一部分被重新分类为 P/LP 或 B/LB。

### 19\.3\.2 ACMG/AMP 2015 指南（Richards et al\., Genet Med 2017, 19:405–424）

ACMG/AMP 把证据分成三档强度：

- **Very Strong（PVS1）**：无效变异（无义、移码、±1/2 剪接、起始密码子、外显子缺失）且该基因 LOF 是已知致病机制。

- **Strong（PS1–PS4）**：同一氨基酸改变已知致病；位于致病热点；病例对照富集；家系共分离。

- **Moderate（PM1–PM6）**：位于突变热点；在对照中缺失（PM2）；新错义；同一残基其他错义已知致病（PM5）。

- **Supporting（PP1–PP5）**。

- **良性证据（BA1/BS1–BS4/BP1–BP7）**：人群高频；计算预测无害等。

组合规则：如"1 PVS1 \+ 1 Strong"或"≥2 Strong"→ Pathogenic。

- **成熟度**：【成熟·标准流程】。

- **自动化工具**：InterVar（Li \& Wang, 2017）自动应用 ACMG 规则；ClinGen SVI（Sequence Variant Interpretation）工作组为每个基因制定位点特异规格（如 BRCA1、HFE、HHT）。

- **局限**：规则主观性强；不同实验室对同一变异分类不一致（ClinVar 中有 \~10–20% 一致性冲突）；计算证据（PP3/BP4）权重常被争议。

## 19\.4 核心数据库

|数据库|内容|用途|
|---|---|---|
|ClinVar|变异—表型—分类提交|致病性判读|
|gnomAD|大规模人群等位基因频率（v4/v4\.1，\>70 万个体）|人群频率过滤（PM2/BA1）|
|COSMIC|体细胞突变|癌症驱动基因注释|
|TCGA|万例多癌种多组学|癌症基因组参考|
|cBioPortal|TCGA/临床队列交互查询|可视化、队列比较|
|OMIM / Orphanet|遗传病—基因—表型|罕见病匹配|
|1000 Genomes / gnomAD|人群频率|PRS、GWAS 参考|
|PharmGKB|药物—基因—剂量|PGx|

## 19\.5 Liquid biopsy / ctDNA / MRD

### 19\.5\.1 概念

- **ctDNA（circulating tumor DNA，循环肿瘤 DNA）**：肿瘤细胞凋亡/坏死释放到血液的 DNA 片段。

- **liquid biopsy（液体活检）**：用血液（或尿液、脑脊液）中的 ctDNA（或 CTC、外泌体）检测肿瘤，替代组织活检。

- **MRD（minimal/measurable residual disease，微小残留病灶）**：治疗后体内仍残留的微量肿瘤细胞/DNA。MRD 阳性预示复发风险。

### 19\.5\.2 临床现状

- **代表产品**：**Signatera**（Natera，肿瘤知情定制 panel）；**RaDaR**（罗氏）；**Guardant360**（Guardant Health，肿瘤未知 \+ 组织）。

- **关键证据**：

    - GALAXY 研究（Kotani et al\., Nat Med 2023/2024）：Signatera 在结直肠癌术后 MRD 监测中预测总生存（OS）并指导辅助化疗。

    - Medicare 已覆盖 Signatera 用于结直肠、乳腺、卵巢、肌层浸润性膀胱癌及免疫治疗监测。

- **成熟度**：【快速发展】。在 CRC/乳腺癌术后监测中已有指南纳入；在早筛（如 CREDENCE 研究）仍在验证。

- **局限**：

    - 早期肿瘤 ctDNA 丰度极低（\<0\.1%），检测限要求极高；

    - 假阳性（克隆性造血 CHIP）；

    - 阴性不代表无病（假阴性）；

    - 成本高（单次数百到上千元美元）。

## 19\.6 测序如何真正影响临床决策？

1. **确诊**：WES 把儿科不明原因发育迟缓诊断率从 \~20% 提到 \~40%。

2. **靶向治疗**：肿瘤突变 → 匹配靶向药（如 EGFR 突变 → 奥希替尼；BRCA → PARP 抑制剂）。

3. **MRD 监测**：ctDNA 阳性提前数月预警复发。

4. **PGx**：调整剂量避免严重不良反应。

5. **家族筛查**：找到致病变异后，亲属可做级联筛查（cascade testing）。

> **事实**：在 BRCA、Lynch 综合征、儿科罕见病中，基因组检测已改变治疗决策。
> **主流观点**：在大多数常见慢病（如糖尿病、高血压）中，基因组检测尚未改变常规治疗。
> **研究者推测**：随着成本下降和多组学整合，肿瘤靶向 \+ MRD 会先普及，普筛会更晚。
> 
> 

## 19\.7 精准医疗为什么昂贵？哪些技术在降本？AI 能降解释成本吗？

### 19\.7\.1 成本结构

- **测序成本**：WGS 从 2001 年的 30 亿美元降到 2026 年的 \~300–1000 美元（Illumina NovaSeq X、华大 T7）；但**分析与解读成本**反而上升。

- **主要成本**：

    1. 生信 pipeline（计算 \+ 存储）；

    2. 临床科学家/遗传咨询师人工解读（一个 WES 报告数小时到数天）；

    3. 确认实验（Sanger、MLPA）；

    4. 报告周期与质控。

### 19\.7\.2 哪些技术在降本？

- **长读长测序**：Nanopore/PacBio HiFi 把结构变异（SV）检测从盲区变成常规，一次测序覆盖更多变异类型。

- **GPU/云生信**：DeepVariant、DRAGEN 把 WGS 分析从几天降到几小时。

- **Panel 替代 WGS**：小 panel 便宜，但覆盖少；WES/WGS 越来越便宜。

- **自动化 ACMG 注释**：InterVar、VEP、ClinGen 自动规则把初筛自动化。

### 19\.7\.3 AI 真能降低临床解释成本吗？

- **乐观面**：

    - PLM/Foundation model 可预测错义变异功能影响（如 ESM Variant Effect、AlphaMissense），对 VUS 分级有帮助。

    - LLM 辅助撰写报告草稿、整合 ClinVar/文献。

- **谨慎面**：

    - **临床责任**：AI 不能替代遗传学家签字；误分类 P/LP 可能导致错误手术/治疗。

    - **幻觉**：LLM 可能编造不存在的文献/变异。

    - **VUS 不会因为 AI 变没**：VUS 的本质是"实验证据不足"，不是计算不足。

    - **AlphaMissense 等**（Cheng et al\., Science 2023）在错义变异预测上与实验相关，但临床指南并未直接采纳其分数作为 ACMG 证据。

- **成熟度判断**：

    - AI 自动初筛 \+ 人工终审：【快速发展】，已在部分实验室落地。

    - AI 独立临床决策：【有争议或未证明价值】，监管（FDA/CE）仍要求人在回路。

## 19\.8 临床生信工具时间线

|年代|工具/事件|意义|
|---|---|---|
|2003|Human Genome Project 完成|临床基因组学起点|
|2007|1000 Genomes 启动|人群频率参考|
|2010|ClinVar 上线|变异共享分类|
|2015|ACMG/AMP 指南（Richards et al\.）|致病性分类统一|
|2018|gnomAD v1/v2|大规模人群频率|
|2018|DeepVariant|AI variant calling|
|2020|AlphaMissense 预印本（2023 Science）|AI 错义预测|
|2023|GALAXY Signatera MRD|ctDNA 指导化疗|
|2024|AlphaFold 3 / ESM3|蛋白设计与复合物预测|
|2024–2026|长读长 WGS 临床落地、MRD 扩展覆盖|成本下降、适应症扩展|

## 19\.9 结语

精准医疗的真正瓶颈，早已不是"测不出来"，而是"读不懂、用不起、付不起"。AI 在 variant calling、结构预测、变异优先级上已真实降本；但在临床解释上，它更像"超级助手"而非"自动判官"。未来十年的竞争，不是谁的模型更大，而是谁能把模型、临床表型、实验验证、监管路径整合成可负担、可重复、可审计的常规服务。

---

## 全章参考文献（精选，按章节）

**GWAS / 群体遗传**

- Purcell S\. et al\. PLINK: a tool set for whole\-genome association and population\-based linkage analyses\. Am J Hum Genet 81, 559–575 \(2007\)\.

- Loh P\.R\. et al\. Efficient Bayesian mixed\-model analysis increases association power in large cohorts\. Nat Genet 47, 284–290 \(2015\)\.

- Zhou W\. et al\. Efficiently controlling for case\-control imbalance and sample relatedness in large\-scale genetic association studies\. Nat Genet 50, 1335–1341 \(2018\)\.

- Mbatchou J\. et al\. Computationally efficient whole\-genome regression for quantitative and binary traits\. Nat Genet 53, 1097–1103 \(2021\)\.

- Martin A\.R\. et al\. Clinical use of current polygenic risk scores may exacerbate health disparities\. Nat Genet 51, 584–591 \(2019\)\.

- Theodoris C\.V\. et al\. Transfer learning enables predictions in network biology\. Nature 618, 616–624 \(2023\)\. DOI: 10\.1038/s41586\-023\-06139\-9\.

**进化**

- Minh B\.Q\. et al\. IQ\-TREE 2: New models and efficient methods for phylogenetic inference in the genomic era\. Mol Biol Evol 37, 1530–1534 \(2020\)\.

- Stamatakis A\. RAxML version 8\. Mol Biol Evol 31, 1312–1313 \(2014\)\.

- Bouckaert R\. et al\. BEAST 2\.5\. PLoS Comp Biol 15, e1006650 \(2019\)\.

- Kumar S\. et al\. MEGA11\. Mol Biol Evol 38, 3022–3027 \(2021\)\.

**ML / 经典案例**

- Poplin R\. et al\. A universal SNP and small\-indel variant caller using deep neural networks\. Nat Biotechnol 36, 983–987 \(2018\)\.

- Jumper J\. et al\. Highly accurate protein structure prediction with AlphaFold\. Nature 596, 583–589 \(2021\)\.

- Abramson J\. et al\. Accurate structure prediction of biomolecular interactions with AlphaFold 3\. Nature 630, 493–500 \(2024\)\. DOI: 10\.1038/s41586\-024\-07487\-w\.

- Avsec Ž\. et al\. Effective gene expression prediction from sequence by integrating long\-range interactions\. Nat Methods 18, 1196–1203 \(2021\)\.

- Lin Z\. et al\. Evolutionary\-scale prediction of atomic\-level protein structure with a language model\. Science 380, 1123–1130 \(2023\)\.

- Lopez R\. et al\. Deep generative modeling for single\-cell transcriptomics\. Nat Methods 15, 1053–1056 \(2018\)\.

- Ji Y\. et al\. DNABERT: pre\-trained Bidirectional Transformer model for decoding DNA\-language in genome\. Bioinformatics 37, 2112–2119 \(2021\)\.

**Foundation Models**

- Cui H\. et al\. scGPT: toward building a foundation model for single\-cell multi\-omics using generative AI\. Nat Methods \(2024\)\.

- Dalla\-Torre H\. et al\. Nucleotide Transformer: building and evaluating robust foundation models for human genomics\. Nat Methods 22, 287–296 \(2025\)\.

- Hie B\. et al\. Sequence modeling and design from molecular to genome scale with Evo\. Science 386, eado9336 \(2024\)\. DOI: 10\.1126/science\.ado9336\.

- Hayes T\. et al\. Simulating 500 million years of evolution with a language model\. Science \(2025\)\. DOI: 10\.1126/science\.ads0018\.

- Nijkamp E\. et al\. ProGen2: Exploring the boundaries of protein language models\. Cell Systems 14, 563–573 \(2023\)\.

- Madani A\. et al\. Large language models generate functional protein sequences across diverse families\. Nat Biotechnol 41, 1096–1104 \(2023\)\.

**生成式设计**

- Dauparas J\. et al\. Robust deep learning–based protein sequence design using ProteinMPNN\. Science 378, 49–56 \(2022\)\. DOI: 10\.1126/science\.add2187\.

- Watson J\.L\. et al\. De novo design of protein structure and function with RFdiffusion\. Nature 620, 1089–1100 \(2023\)\.

- Krishna R\. et al\. Generalized biomolecular modeling and design with RoseTTAFold All\-Atom\. Science 384, eadl2528 \(2024\)\.

**临床**

- Richards S\. et al\. Standards and guidelines for the interpretation of sequence variants\. Genet Med 19, 405–424 \(2017\)\.

- Kotani D\. et al\. Longitudinal surveillance of circulating tumor DNA and recurrence after adjuvant chemotherapy in stage II colon cancer \(GALAXY\)\. Nat Med \(2023/2024\)\.

- Cheng J\. et al\. Accurate proteome\-wide missense variant effect prediction with AlphaMissense\. Science 381, eadg7490 \(2023\)\.
