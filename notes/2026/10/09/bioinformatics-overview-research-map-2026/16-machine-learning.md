---
prev:
  text: "十五、表观遗传生物信息学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/15-epigenetics"
next:
  text: "十七、生物大模型与 Foundation Models"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/17-foundation-models"
---

# 十六、机器学习在生物信息学中的应用

## 16\.1 从"手工特征"到"端到端学习"

生物信息学的 ML 经历了三代：

1. **2000s–2012**：手工特征 \+ 经典 ML（SVM、随机森林），如 SVMlight 做翻译起始位点预测。

2. **2012–2017**：深度学习崛起，CNN/RNN 用于序列（DeepSEA、DanQ）、图像（病理切片）。

3. **2017–至今**：Transformer 一统序列；GNN 建模结构；扩散模型做生成；Foundation Model 把预训练—微调范式引入生物。

## 16\.2 模型家族与适用问题

### 16\.2\.1 经典 ML

|模型|适合数据|典型问题|为什么有效|局限|
|---|---|---|---|---|
|线性/逻辑回归|低维表型/基因型|GWAS 边际检验、PRS|可解释、统计推断成熟|不能抓非线性交互|
|随机森林（RF）|中维表格|变异致病性预测、药物敏感性|自动抓非线性、抗过拟合|高维稀疏生物数据效率低；外推差|
|SVM|小样本、高维稀疏|早期 splice 位点预测、motif 识别|核函数灵活、小样本稳|大数据量训练慢；核选择经验性|
|梯度提升（XGBoost/LightGBM/CatBoost）|中维表格|临床风险评分、variant prioritization|工业级、可解释（SHAP）|不能直接吃原始序列/图像|

- **成熟度**：经典 ML 在线表格/临床预测中【成熟·标准流程】；在原始序列上已被深度学习取代。

- **为什么现在仍用**：数据量小、需要可解释、监管要求（如临床决策支持）时，XGBoost \+ SHAP 仍常优于深度模型。

### 16\.2\.2 深度学习

|模型|适合数据|典型问题|代表工作|
|---|---|---|---|
|CNN|序列（1D）、图像（2D）|转录因子结合位点、基因表达预测、病理影像|DeepSEA、Enformer（卷积主干）、ResNet 病理|
|RNN/LSTM|序列、时间序|早期蛋白语言模型、基因组变异读出|已基本被 Transformer 取代|
|Transformer|任意长序列|蛋白语言模型、DNA 语言模型、多组学|ESM、DNABERT、Geneformer|
|GNN|图（分子、蛋白结构、知识图谱）|蛋白结构预测、分子性质、药物发现|AlphaFold 结构模块、DimeNet、GCN|
|Diffusion|生成（结构/序列/图像）|蛋白骨架设计、分子生成|RFdiffusion、Chroma|
|VAE/扩散|单细胞表达矩阵|降维、批次校正、扰动预测|scVI、scGen|

## 16\.3 经典案例

### 16\.3\.1 DeepVariant（Poplin et al\., Nat Biotechnol 2018, 36:983–987）

- **解决什么问题**：从 NGS BAM 文件调用 SNP/indel。

- **核心思想**：把 pileup 堆叠图转成 3 通道"图像"（参考碱基、read 碱基、strand），用 CNN（Inception）分类为 ref/het/hom\-alt。

- **为什么有效**：测序错误模式有视觉规律（同位置同链错配就是错误），CNN 天然适合。

- **输入输出**：BAM \+ 参考基因组 → VCF。

- **成熟度**：【成熟·标准流程】。UK Biobank WES 50 万样本、All of Us 百万样本级管线使用；PrecisionFDA 多次夺冠。

- **后来改进**：DeepSomatic（体细胞）、PEPPER\-Margin\-DeepVariant（长读长）、DeepVariant v1\.x。

- **局限**：对复杂 SV 仍弱；长读长需专用模型。

### 16\.3\.2 AlphaFold / AlphaFold2/3

- **AF2**（Jumper et al\., Nature 2021, 596:583–589）：用 MSA \+ Evoformer \+ structure module，CASP14 达到实验级精度。【成熟·标准流程】

- **AF3**（Abramson et al\., Nature 2024, 630:493–500, DOI: 10\.1038/s41586\-024\-07487\-w）：扩展到复合物（蛋白—配体—核酸—离子—修饰残基），用扩散解码器。蛋白—配体预测比传统 docking 提升约 50%。【快速发展】（见第十八章）。

- **为什么有效**：MSA 中的共进化信息 = 三维接触的统计代理；端到端几何约束把物理归纳偏置塞进网络。

- **局限**：内在无序区（IDR）精度差；动态构象、配体结合亲和力仍难；复合物在多链柔性区不稳。

### 16\.3\.3 Enformer（Avsec et al\., Nat Methods 2021, 18:1196–1203）

- **解决什么问题**：从 DNA 序列预测基因表达与表观信号（TF 结合、组蛋白修饰、DNase 敏感性）。

- **核心思想**：卷积主干（压缩 128×）\+ Transformer 主干，上下文 \~196 kb，输出数千个细胞类型的 tracks。

- **为什么有效**：远端调控元件（增强子）距离可达 100 kb，需要长程注意力；CNN 抓局部 motif，Transformer 抓长程交互。

- **输入输出**：DNA one\-hot 序列 → 每个位置在每个细胞类型的表达/表观预测。

- **成熟度**：【成熟·标准流程】（非编码变异效应预测的强基线）。

- **后来**：Borzoi（Linder et al\. 2023，U\-net 结构）、Enformer 后继模型继续改进。

- **局限**：跨细胞类型泛化有限；预测的是平均信号，不能抓细胞间异质性；训练数据来自 ENCODE/ Roadmap，存在实验批次偏倚。

### 16\.3\.4 ESM 系列（Evolutionary Scale Modeling）

- **ESM\-1b**（Rives et al\., PNAS 2021）：650M 参数，掩码语言模型在蛋白序列上，验证了"进化语言"可学习结构/功能。

- **ESM\-2**（Lin et al\., Science 2023, 380:481–490）：从 8M 到 15B 参数缩放，证明规模化能涌现出结构与功能表征；ESMFold 可从序列直接快速预测结构。

- **ESM\-3**（Hayes et al\., Science 2025, DOI: 10\.1126/science\.ads0018；bioRxiv 2024）：多模态（序列\+结构 token\+功能 token）生成模型，98B 参数，可设计荧光蛋白等功能蛋白。【快速发展】（见第十七、十八章）。

- **成熟度**：ESM\-2 【成熟·标准流程】；ESM\-3 【快速发展】。

### 16\.3\.5 DNABERT（Ji et al\., Bioinformatics 2021）

- **解决什么问题**：把 DNA 序列当"语言"，用 BERT 式掩码语言模型预训练，再微调到启动子、splice、增强子预测。

- **核心思想**：k\-mer 分词（如 6\-mer），掩码 k\-mer 预测。

- **为什么有效**：DNA 序列有长程统计规律（调控元件、剪切信号），自监督学习不用标注。

- **局限**：k\-mer 分词破坏碱基分辨率；上下文短（512 token）。

- **后来**：**DNABERT\-2**（Zhou et al\., 2024）用 BPE 字节对编码，上下文更长，性能更强。

- **成熟度**：【快速发展】。已被更大模型（Nucleotide Transformer、Evo）超越，但作为教学与小数据基线仍常用。

### 16\.3\.6 scVI（Lopez et al\., Nat Methods 2018, 15:1053–1056）

- **解决什么问题**：单细胞 RNA\-seq 数据稀疏、噪声大、批次效应严重。

- **核心思想**：变分自编码器（VAE），把每个细胞的 count 向量编码到低维潜在 z，再负二项解码回 count。

- **为什么有效**：显式建模 count 分布（负二项 \+ 零膨胀），把库大小、批次作为条件变量，隐式批次校正。

- **输入输出**：基因 count 矩阵 → 低维表示 \+ 校正后表达 \+ 聚类/差异表达。

- **成熟度**：【成熟·标准流程】。scvi\-tools 生态已扩展到 scANVI（半监督注释）、totalVI（蛋白\+RNA）、scTWIN（时间）等。

- **后来**：scGPT、Geneformer 等 Foundation Model 在大规模上挑战 scVI，但 scVI 在小数据、可解释、概率建模上仍有优势。

## 16\.4 模型 × 数据模态适配表

|数据模态|推荐模型|原因|
|---|---|---|
|长序列（DNA/蛋白）|Transformer/SSM（Hyena/Mamba）|长程依赖；自监督 token 预测|
|结构（3D 坐标）|GNN/SE\(3\)\-equivariant|旋转平移不变性；消息传递|
|表达矩阵（bulk/scRNA）|VAE/线性模型/Transformer|高维稀疏；批次校正；非线性流形|
|图（代谢网络、PPI、知识图谱）|GNN/GCN/Graph Transformer|节点关系；归纳偏置|
|医学记录（EHR）|Transformer/梯度提升|时间序列\+表格混合；可解释性要求|
|病理影像|CNN/ViT|2D 图像；多分辨率|

## 16\.5 争议与反思

> **事实**：在许多基准上，深度模型确实超过了手工特征 \+ 经典 ML，尤其在原始序列/图像/结构上。
> **主流观点**：不存在"万能模型"——数据模态、样本量、可解释性需求决定选型。XGBoost 在小表格数据上经常不输 Transformer。
> **研究者推测**：Foundation Model 不会完全取代经典模型，而是在"大数据预训练 \+ 小数据微调"的范式中重新分工。
> 
> 

---
