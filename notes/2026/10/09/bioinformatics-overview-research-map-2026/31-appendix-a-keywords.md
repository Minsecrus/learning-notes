---
prev:
  text: "三十、给本科生的学习路径：从生命科学新生到能做独立生信项目"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/30-learning-path"
next:
  text: "附录 B：50 个最重要的软件、数据库和在线资源"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/32-appendix-b-resources"
---

# 附录 A：100 个生物信息学必须知道的关键词

> 每条：中英术语 \+ 一句话解释。
> 
> 

1. **序列比对（Sequence alignment）**：把两条或多条核酸/蛋白序列按相似性对齐。

2. **动态规划比对（Dynamic programming alignment）**：Smith\-Waterman/Needleman\-Wunsch 式精确算法。

3. **BLAST（Basic Local Alignment Search Tool）**：在序列库中快速找局部同源匹配的标准工具。

4. **多序列比对（Multiple sequence alignment, MSA）**：把多条同源序列对齐成矩阵。

5. **隐马尔可夫模型（Hidden Markov Model, HMM）**：用于序列家族/结构域概率建模（HMMER）。

6. **de novo 组装（De novo assembly）**：不依赖参考，从读段拼出基因组。

7. **读段（Read）**：测序仪读出的一段短/长序列。

8. **contig / scaffold**：连续重叠群 / 带缺口的更高层次组装单元。

9. **N50**：衡量组装连续性的常用指标。

10. **端粒到端粒（T2T）**：无缺口完整染色体级组装。

11. **结构变异（Structural Variation, SV）**：kb–Mb 级的插入/缺失/倒位/易位。

12. **比对（Read mapping/alignment）**：把读段定位回参考基因组。

13. **Variant calling**：从比对中识别基因组变异的过程。

14. **SNP / Indel**：单核苷酸多态 / 插入缺失。

15. **VCF（Variant Call Format）**：存储变异的标准文本格式。

16. **GATK（Genome Analysis Toolkit）**：主流短读长变异检测框架。

17. **Phasing（相位）**：区分变异来自父源还是母源单倍型。

18. **RNA\-seq**：对转录组测序定量表达。

19. **差异表达分析（Differential expression, DE）**：比较两组间基因表达是否显著变化。

20. **DESeq2**：基于负二项分布的差异表达标准 R 包。

21. **伪比对（Pseudo\-alignment）**：Salmon/kallisto 快速定量方式。

22. **可变剪接（Alternative splicing）**：同一基因产生不同转录本。

23. **基因本体（Gene Ontology, GO）**：统一基因功能的受控词汇。

24. **通路富集（Pathway enrichment）**：判断差异基因集中在哪些通路。

25. **KEGG / Reactome**：两大主流通路数据库。

26. **蛋白结构预测（Protein structure prediction）**：从序列预测三维折叠。

27. **AlphaFold2/3**：DeepMind 高精度结构/复合物预测模型。

28. **pLDDT**：AlphaFold 给出的残基置信度打分。

29. **冷冻电镜（Cryo\-EM）**：实验测定大分子结构的主流技术。

30. **分子对接（Molecular docking）**：预测小分子与蛋白结合姿态。

31. **分子动力学（Molecular dynamics, MD）**：模拟原子随时间运动。

32. **从头蛋白设计（De novo protein design）**：设计自然界不存在的蛋白。

33. **扩散模型（Diffusion model）**：RFdiffusion 等生成新结构的生成式方法。

34. **同源建模（Homology modeling）**：用已知结构模板建模目标。

35. **PDB（Protein Data Bank）**：实验测定结构公共库。

36. **UniProt**：蛋白序列与功能注释主库。

37. **Pfam / InterPro**：蛋白家族/结构域注释库。

38. **质谱蛋白质组学（Mass spectrometry proteomics）**：用质谱鉴定与定量蛋白。

39. **单细胞测序（Single\-cell sequencing）**：在单个细胞分辨率测组学。

40. **scRNA\-seq**：单细胞转录组测序。

41. **降维（Dimensionality reduction）**：PCA/t\-SNE/UMAP 压缩高维细胞数据。

42. **聚类（Clustering）**：把相似细胞/基因分组。

43. **批次效应（Batch effect）**：非生物学的技术差异导致的信号。

44. **Harmony / scVI**：单细胞数据整合与去批次常用方法。

45. **轨迹推断（Trajectory inference）**：推断细胞分化连续路径。

46. **细胞类型注释（Cell type annotation）**：给每个细胞群命名细胞类型。

47. **空间转录组（Spatial transcriptomics）**：保留组织空间位置测表达。

48. **Visium / Xenium / Stereo\-seq**：主流空间组学平台。

49. **细胞图谱（Cell atlas）**：系统性描绘某生物全部细胞类型。

50. **Human Cell Atlas（HCA）**：人类单细胞多组学图谱计划。

51. **基础模型（Foundation model）**：大规模自监督预训练、可迁移的通用模型。

52. **ESM 系列**：Meta/EvolutionaryScale 蛋白语言模型。

53. **scGPT / Geneformer**：单细胞基础模型代表。

54. **Evo2**：Arc Institute 的基因组 DNA 基础模型。

55. **自监督学习（Self\-supervised learning）**：从无标签数据构造任务预训练。

56. **Transformer / attention**：大模型的核心神经网络结构。

57. **宏基因组学（Metagenomics）**：直接测环境中全部微生物基因组。

58. **16S rRNA**：原核物种分类的经典标记基因。

59. **读段分箱（Binning）**：把宏基因组读段聚到各物种基因组。

60. **Kraken2 / MetaPhlAn**：宏基因组快速物种定量工具。

61. **微生物组（Microbiome）**：寄居人体/环境的微生物群落。

62. **系统发育学（Phylogenetics）**：推断物种/序列进化关系。

63. **最大似然树（Maximum likelihood tree）**：IQ\-TREE/RAxML 主流建树法。

64. **分子钟（Molecular clock）**：用序列差异估算分歧时间。

65. **正选择（Positive selection）**：自然选择驱动有利变异固定。

66. **群体基因组学（Population genomics）**：群体内遗传变异与进化。

67. **GWAS（Genome\-Wide Association Study）**：全基因组关联分析找性状相关变异。

68. **eQTL（expression QTL）**：影响基因表达水平的遗传位点。

69. **imputation（基因型填补）**：根据参考面板推断未测基因型。

70. **PCA in genetics**：用主成分揭示人群遗传结构。

71. **泛基因组（Pangenome）**：代表一个物种种群全部遗传变异的图参考。

72. **HPRC**：人类泛基因组参考联盟。

73. **gnomAD**：大规模健康人群等位基因频率库。

74. **ClinVar**：变异—表型—临床意义人工审编库。

75. **COSMIC**：肿瘤体细胞突变目录。

76. **TCGA**：癌症多组学大队列。

77. **GTEx**：健康人多组织表达/eQTL 库。

78. **ENCODE**：人类调控元件百科全书。

79. **CRISPR 筛选（CRISPR screen）**：批量敲除/激活基因看表型。

80. **Perturb\-seq**：CRISPR 扰动 \+ 单细胞读出。

81. **CRISPRi / CRISPRa**：基因敲低 / 激活。

82. **液体活检（Liquid biopsy）**：用血中游离核酸无创检测肿瘤。

83. **ctDNA**：循环肿瘤 DNA。

84. **MRD（Minimal Residual Disease）**：治疗后极微量残留病灶检测。

85. **多组学整合（Multiomics integration）**：融合多种组学数据。

86. **共线性分析（Colocalization）**：判断两个信号是否来自同一因果变异。

87. **孟德尔随机化（Mendelian randomization）**：用遗传工具变量推断因果。

88. **网络生物学（Network biology）**：用互作网络理解系统。

89. **系统生物学（Systems biology）**：从系统层面建模生物过程。

90. **约束模型（Genome\-scale model, GEM）**：基于化学计量约束的代谢模型。

91. **Python / R**：生信两大主力语言。

92. **Bioconductor**：R 上的生信包生态。

93. **Conda / Mamba**：环境与包管理工具。

94. **Docker / Singularity\(Apptainer\)**：软件环境容器化。

95. **Snakemake / Nextflow**：工作流管理系统。

96. **Nf\-core**：Nextflow 标准化流水线集合。

97. **Git / GitHub**：版本控制与协作。

98. **HPC / SLURM**：高性能计算集群与作业调度。

99. **可复现性（Reproducibility）**：结果可被他人按相同流程重现。

100. **因果推断（Causal inference）**：从相关走向因果关系估计。

> 实际条数：100 条。
> 
> 

---
