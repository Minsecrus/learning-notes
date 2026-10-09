---
prev:
  text: "二十、生物信息学数据库生态：一张完整数据库地图"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/20-databases"
next:
  text: "二十二、生物信息学中的数学基础"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/22-mathematics"
---

# 二十一、生物信息学软件生态：工具分类表与现代科研基础设施

> 主线：生信软件分两层——**领域工具**（做具体分析的算法）和**科研基础设施**（让工具可复现、可扩展的工程底座）。过去十年最大的变化不是某个新算法，而是 Docker、Conda、Snakemake/Nextflow、云与 HPC 把"一次性脚本"逼成"可复现流水线"。
> 
> 

## 21\.1 领域工具分类表

|类别|代表性软件/方法|核心功能|取代/被取代关系|成熟度|
|---|---|---|---|---|
|**Sequence alignment**（序列比对）|BWA\-MEM、Bowtie2、Minimap2、HISAT2、STAR、Minimap2\-x|短/长读段或转录本比对到参考|BWA 取代 SSAHA/BLAT；Minimap2 在长读长上取代 BWA|【成熟·标准流程】|
|**Pairwise / multiple alignment**|MAFFT、Clustal Omega、 MUSCLE、DIAMOND|多序列比对、快速蛋白库搜索|MAFFT 取代 ClustalW；DIAMOND 加速 BLASTp|【成熟·标准流程】|
|**Genome assembly**（基因组组装）|SPAdes、Flye、hifiasm、Canu、Shasta、wtdbg2|从读段拼出 contig/scaffold|长读长组装（Flye/hifiasm）取代短读长为核心|【快速发展】|
|**Variant calling**（变异检测）|GATK HaplotypeCaller、bcftools、DeepVariant、sniffles、Clair3|SNP/Indel/SV 检测|GATK 主导短读长；长读长用 Clair3/sniffles|【成熟·标准流程】|
|**RNA\-seq**|STAR、Salmon、kallisto、featureCounts、DESeq2、edgeR、limma|比对/定量/差异表达|伪比对（Salmon/kallisto）减少 STAR 定量负担|【成熟·标准流程】|
|**Single\-cell**|Scanpy、Seurat、scran、Scater、Harmony、scVI、CellRanger|单细胞表达/整合/聚类/注释|scVI 等深度模型补充传统 Seurat 流程|【快速发展】|
|**Spatial omics**|SpaceRanger、Squidpy、BayesSpace、MERFISH/Xenium 工具链|空间表达对齐与细胞分割|新兴，工具链快速演化|【快速发展】|
|**Protein**|HMMER、AlphaFold2/3、RoseTTAFold、RFdiffusion、ESM 系列|结构预测、同源识别、从头设计|AlphaFold 大幅取代同源建模依赖|【快速发展】|
|**Phylogenetics**（系统发育）|RAxML\-NG、IQ\-TREE、MrBayes、BEAST、FastTree|建树、分歧时间、选择压力|IQ\-TREE/RAxML\-NG 取代老旧 NJ/MP 主流|【成熟·标准流程】|
|**Metagenomics**（宏基因组）|MetaPhlAn、Kraken2、HUMAnN、MEGAHIT、MetaBAT|物种/功能丰度、分箱|读段分箱与 marker 基因法互补|【成熟·标准流程】|
|**Statistics / 机器学习**|R stats、statsmodels、scikit\-learn、PyTorch、TensorFlow|统计检验、建模、深度学习|深度学习补充（不取代）经典统计|【成熟·标准流程】|
|**Workflow management**（工作流管理）|Snakemake、Nextflow、CWL、WDL、Nextflow Tower|编排多步骤、并行、可复现|取代手写 shell 脚本拼接|【快速发展→成熟】|
|**Visualization**（可视化）|matplotlib/Seaborn、ggplot2、Circos、IGV、UCSC、pyGenomeTracks|绘图、基因组浏览器|IGV 取代桌面本地浏览器|【成熟·标准流程】|

## 21\.2 现代科研基础设施（"为什么这个清单人人都该会"）

生信早已不是"会跑几个 BLAST"就行。下面这套底座是 2024–2026 年几乎所有严肃项目的默认配置：

- **Linux / Bash**：绝大多数生信工具是命令行程序，跑在类 Unix 系统上。Bash 用于串联命令、批处理、脚本化。

- **Python**：数据分析与机器学习主力（pandas/numpy/scikit\-learn/PyTorch）。脚本化、AI 模型生态全在 Python。

- **R / Bioconductor**：统计与生信"原生"生态。DESeq2、limma、Seurat、clusterProfiler 等黄金流程只在 R/Bioconductor 上最成熟。

- **Conda / Mamba**：环境与包管理，解决"这个工具要旧 gcc、那个要旧 Python"的依赖地狱。mamba 是 conda 的快速重写。

- **Docker / Singularity\(Apptainer\)**：把整个软件环境打包成镜像，"我这能跑"变成"镜像在哪都能跑"。Singularity/Apptainer 是 HPC 上的安全容器运行时（普通用户无 root）。

- **Git / GitHub**：版本控制与协作。代码、流程、文档同步；可复现性的第一步。

- **Jupyter / R Markdown / Quarto**：可执行笔记，把代码、图、文字放在一起，降低"结果怎么来的"解释成本。

- **HPC（高性能计算）/ SLURM**：提交大规模批作业调度器。基因组/WGS/单细胞动辄数千任务，必须排队调度而非单机跑。

- **Cloud computing（AWS/GCP/Azure、 Terra）**：大尺度队列数据（TCGA 等）放云上，避免下载 PB 级数据——"把计算搬去数据"。

## 21\.3 工作流语言：为什么必须用，而不是手写脚本

|工作流引擎|语言/范式|特点|成熟度|
|---|---|---|---|
|**Snakemake**|Python 式规则（rule\-based）|上手快、与 Python 无缝、本地到 HPC/云可移植|【快速发展→成熟】|
|**Nextflow**|Groovy DSL \+ 模块化|云/HPC 原生、Nf\-core 高质量流水线生态|【成熟·标准流程】|
|**CWL**（Common Workflow Language）|声明式|中立标准、被 GA4GH/大量数据平台采用|【快速发展】|
|**WDL**（Workflow Description Language）|声明式|Broad/GATK 系生态（Terra 平台）常用|【快速发展】|

> **Nf\-core** 值得单独点名：它是 Nextflow 上的社区标准化流水线集合（RNA\-seq、scRNA\-seq、variant 等），本质是"把每个分析做成经过同行评审的可一键复现标准流程"。新人**优先用 Nf\-core 已有流程，而不是自己从头拼脚本**。
> 
> 

## 21\.4 为什么可复现性（reproducibility）对生信极其重要

这是一个**事实层**判断，而非口号：

1. **版本敏感**：同一个 GATK 在 4\.x 与 3\.x、同一个参考装配（hg19 vs GRCh38 vs T2T\-CHM13）下，call 出的变异名单可以显著不同。

2. **参数敏感**：比对/聚类/过滤的阈值一变，差异基因、细胞分群结论就变。

3. **依赖敏感**：未锁定依赖，半年后重新安装结果就对不上。

4. **数据漂移**：SRA/数据库持续更新，今天下载和三年前下载的版本不同。

因此"可复现"是生信论文被信任的前提，工程手段就是：**容器锁定环境 \+ 工作流锁定步骤 \+ 版本锁定数据/参考 \+ 公开代码与参数**。这也是为什么 2024 年以后越来越多期刊要求附带 Snakemake/Nextflow 流水线与容器。

---
