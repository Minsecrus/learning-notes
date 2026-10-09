---
prev:
  text: "二十六、教材与学习资源"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/26-textbooks-learning-resources"
next:
  text: "二十八、2026 年前沿雷达（重点章）"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/28-frontiers-2026"
---

# 二十七、领域地图：生物信息学的树状知识图谱

> 主线：从"读序列"出发，生信不断横向拓宽（组学类型）与纵向加深（从序列→结构→细胞→组织→个体→群体）。每个分支标注成熟度、数据类型、代表算法/软件与当前核心问题。
> 
> 

## 27\.1 文字树状图（缩进列表）

```
Bioinformatics / Computational Biology
├── sequence bioinformatics（序列生物信息学）
│   ├── 序列比对（pairwise/multiple alignment）
│   ├── 数据库检索（BLAST/HMMER）
│   └── 基因预测与注释
├── genomics（基因组学）
│   ├── 基因组组装（de novo assembly）
│   ├── 变异检测（variant calling）
│   ├── 泛基因组 / pangenome
│   └── 结构变异（structural variation）
├── transcriptomics（转录组学）
│   ├── bulk RNA-seq 差异表达
│   ├── 可变剪接（alternative splicing）
│   └── 调控网络推断
├── proteomics（蛋白质组学）
│   ├── 质谱定量与差异
│   ├── 蛋白—蛋白互作
│   └── 翻译后修饰
├── structural bioinformatics（结构生物信息学）
│   ├── 结构预测（AlphaFold 系）
│   ├── 分子对接
│   └── 分子动力学（MD）
├── single-cell（单细胞组学）
│   ├── scRNA-seq 聚类/注释
│   ├── 轨迹推断（trajectory）
│   └── 单细胞多组学
├── spatial omics（空间组学）
│   ├── 空间转录组
│   ├── 空间蛋白组
│   └── 细胞分割与邻域分析
├── population genomics（群体基因组学）
│   ├── 选择信号检测
│   ├── 群体结构/进化史
│   └── 基因型填补 imputation
├── evolutionary genomics（进化基因组学）
│   ├── 系统发育建树
│   ├── 比较基因组
│   └── 正选择/适应性进化
├── microbiome（微生物组）
│   ├── 宏基因组分类与定量
│   ├── 功能宏基因组
│   └── 宿主—微生物互作
├── systems biology（系统生物学）
│   ├── 网络建模
│   ├── 多组学整合
│   └── 动力学/约束模型（如 GEM）
├── clinical bioinformatics（临床生信）
│   ├── 肿瘤体细胞变异解读
│   ├── 胚系变异临床解读
│   └── 伴随诊断 / MRD
├── computational drug discovery（计算药物发现）
│   ├── 虚拟筛选
│   ├── 从头蛋白设计
│   └── AI 分子生成
└── AI for biology（AI for Biology）
    ├── 蛋白/基因组/细胞基础模型
    ├── 多模态生成模型
    └── 因果与预测建模
```

## 27\.2 分支汇总表

|分支|成熟度|主要数据类型|代表性算法/方法|代表性软件|当前最重要的问题|
|---|---|---|---|---|---|
|序列生物信息学|【成熟·标准流程】|核酸/蛋白序列|动态规划比对、HMM、BLAST|BLAST、HMMER、MAFFT|如何在超大数据集下做可扩展检索|
|基因组学（组装/变异）|【成熟·标准流程】（组装【快速发展】）|长/短读段、VCF|de Bruijn/string graph、read mapping|BWA、Minimap2、hifiasm、GATK|高准确长读长组装与复杂区变异|
|泛基因组|【快速发展】|多样本组装、图基因组|pangenome graph、Minigraph|Minigraph\-cactus、vg|图参考的临床与统计适配|
|转录组学|【成熟·标准流程】|表达 counts|负二项模型、伪比对|DESeq2、Salmon、kallisto|批次校正与跨实验整合|
|蛋白质组学|【成熟·标准流程】|质谱峰图|数据库搜索、定量|MaxQuant、DIA\-NN、MSstats|低丰度鉴定与翻译后修饰|
|结构生物信息学|【快速发展】|序列/结构、复合物|E\(3\)/等变网络、扩散、注意力|AlphaFold3、RoseTTAFold、RFdiffusion|动态构象、配体/核酸/动态过程预测|
|单细胞组学|【快速发展】|数千–数百万细胞矩阵|降维聚类、深度生成模型|Scanpy、Seurat、scVI、scGPT|批次/注释/扰动预测的可靠性|
|空间组学|【前沿探索】→【快速发展】|带坐标的表达|图模型、分割、自监督|Squidpy、SpaceRanger|无偏细胞分割与多模态对齐|
|群体基因组学|【成熟·标准流程】|基因型面板|Fst/PCA、局部祖先、选择扫描|PLINK、ADMIXTURE、REFINED|非欧洲人群代表性与 imputation|
|进化基因组学|【成熟·标准流程】|多物种比对/系统树|最大似然、贝叶斯、分子钟|IQ\-TREE、BEAST、RAxML\-NG|基因组时代的物种树/基因树冲突|
|微生物组|【快速发展】|宏基因组读段|marker 基因、读段分箱|Kraken2、MetaPhlAn、MEGAHIT|因果关系与功能推断（多为相关）|
|系统生物学|【快速发展】|多组学\+网络|ODE/约束模型、网络推断|COBRA、CellNOpt|从相关到机制、可泛化的预测|
|临床生信|【成熟·标准流程】（MRD【快速发展】）|肿瘤 WXS/Panel、ctDNA|体细胞检测、变异解读、MRD|GATK、Mutect2、Signatera 系|解读标准化与监管合规|
|计算药物发现|【快速发展】|分子/蛋白结构|生成模型、对接、MD|RFdiffusion、DiffDock、AlphaFold3|实验转化率与可成药性|
|AI for Biology|【快速发展】|跨模态大数据|基础模型、扩散、自监督|ESM3、Evo2、scGPT、AlphaFold3|泛化性、benchmark 污染、真因果|

---
