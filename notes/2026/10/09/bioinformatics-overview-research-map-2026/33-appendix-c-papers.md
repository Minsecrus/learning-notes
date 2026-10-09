---
prev:
  text: "附录 B：50 个最重要的软件、数据库和在线资源"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/32-appendix-b-resources"
next: false
---

# 附录 C：如果只读 20 篇论文，应该读哪些？（按年代排序）

> 每篇：年份 / 作者 / 核心贡献 / 为何重要 / 今天是否仍值得读。DOI/链接以官方来源为准，个别卷期以"待核实"标注。
> 
> 

1. **1953｜Watson \& Crick** — *Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid*（*Nature*）。核心贡献：DNA 双螺旋结构。为何重要：整个分子生物学与生信的起点。今天仍值得读：读其推理之简洁，是科学史必读。

2. **1970｜Needleman \& Wunsch** — *A general method applicable to the search for similarities in the amino acid sequence of two proteins*（*J Mol Biol*）。核心贡献：全局动态规划比对。为何重要：序列比对算法之母。今天仍值得读：理解动态规划本质。

3. **1990｜Benson / Smith\-Waterman 系；代表为 Smith \& Waterman 1981** — 局部比对 Smith\-Waterman（*J Mol Biol* 1981）。核心贡献：局部相似性比对。为何重要：BLAST 思想源头。今天仍值得读：经典算法。

4. **1997｜Kanehisa \& Goto** — *KEGG: Kyoto Encyclopedia of Genes and Genomes*（*Nucleic Acids Res*）。核心贡献：把基因映射到通路的数据库范式。为何重要：富集分析与通路思维基础。今天仍值得读：理解数据库设计哲学。

5. **2000｜Lander 等（Human Genome）** — Initial working draft of human genome（*Nature* 2001 正式刊，2000 草案）。核心贡献：人类基因组草图。为何重要：基因组时代的开端。今天仍值得读：理解早期基因组学的野心与局限。

6. **2001｜Durbin/Eddie/Krogh/Mitchison《Biological Sequence Analysis》**（书，可作为代表文献）。核心贡献：序列概率模型（HMM）系统教材。为何重要：把统计模型引入序列分析。今天仍值得读：理论功底必读。

7. **2008／2009｜Trapnell 等 Cufflinks / Cuffdiff** — *Transcript assembly and quantification by RNA\-Seq*（*Nat Biotechnol* 2010）。核心贡献：RNA\-seq 定量与差异。为何重要：转录组定量范式。今天仍值得读：其思想已被 Salmon/DESeq2 部分取代，历史可读。

8. **2011｜MacManes；代表为 Trapnell 2012 Cuffdiff 2** — 略；改用 **2014 Love et al\. DESeq2**：*Moderated estimation of fold change and dispersion for RNA\-seq data with DESeq2*（*Genome Biology* 2014）。核心贡献：负二项经验贝叶斯差异表达。为何重要：至今 RNA\-seq 差异分析事实标准。今天仍值得读：仍在用。

9. **2013｜Buenrostro 等 ATAC\-seq** — *Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin*（*Nat Methods* 2013）。核心贡献：低成本测开放染色质。为何重要：表观组学普及。今天仍值得读：理解表观读出。

10. **2017｜Rousseeuw / Huber 等；代表为 Butler 等 2018 Seurat / Stuart 2019** — 单细胞：**Stuart \& Butler et al\., Comprehensive integration of single\-cell data**（*Cell* 2019）。核心贡献：跨数据集单细胞整合。为何重要：现代单细胞分析范式。今天仍值得读：方法仍在用。

11. **2017｜Jardine/Fraser；代表为 Saez\-Rodriguez 系；更关键为 2019 Xie et al\. scVI**：Lopez et al\., *Deep generative modeling for single\-cell transcriptomics*（*Nat Methods* 2018/2020）。核心贡献：变分自编码器整合单细胞。为何重要：深度模型进入单细胞。今天仍值得读：深度单细胞入门。

12. **2021｜Jumper et al\.（DeepMind）** — *Highly accurate protein structure prediction with AlphaFold*（*Nature* 2021）。核心贡献：原子级精度单链结构预测。为何重要：重塑结构生物学；2024 诺贝尔化学奖基石。今天仍值得读：范式变革之作。

13. **2022｜Nurk 等（T2T Consortium）** — *The complete sequence of a human genome*（*Science* 2022）。核心贡献：首个人类无缺口基因组 T2T\-CHM13。为何重要：补齐参考基因组最后 \~8%。今天仍值得读：理解长读长威力。

14. **2023｜Liao/Asri 等（HPRC）** — *A draft human pangenome reference*（*Nature* 2023，doi:10\.1038/s41586\-023\-05896\-x）。核心贡献：47 个多样个体泛基因组。为何重要：从单参考走向图参考。今天仍值得读：泛基因组入门。

15. **2024｜Abramson et al\.（DeepMind/Isomorphic）** — *Accurate structure prediction of biomolecular interactions with AlphaFold 3*（*Nature* 2024，PubMed 38718835）。核心贡献：蛋白—核酸—小分子复合物联合预测。为何重要：从单链到全生命分子。今天仍值得读：最新范式。

16. **2024｜Hayes/Guo 等（EvolutionaryScale）** — ESM3：一个模型同时推理序列—结构—功能（2024 发布，*Science* 2025 正式）。核心贡献：多模态蛋白生成模型，生成新荧光蛋白。为何重要：生成式蛋白设计里程碑。今天仍值得读：代表 AI for biology 现状。

17. **2024｜Zheng/Thompson/White/Jin** — *Massively parallel in vivo Perturb\-seq reveals cell\-type\-specific transcriptional networks in cortical development*（*Cell* 2024）。核心贡献：体内大规模单细胞 CRISPR 扰动。为何重要：功能基因组学规模化。今天仍值得读：perturb 方向必读。

18. **2024｜Cheng \& Qu 等（hifiasm\(ONT\)）** — *Efficient near\-telomere\-to\-telomere assembly of nanopore simplex reads*（2025 预印本）。核心贡献：标准纳米孔读段即可近 T2T 组装。为何重要：长读长组装平民化。今天仍值得读：组装新标杆。

19. **2025｜Arc Institute \+ Stanford（B\. Hie 组）** — *Genome modeling and design across all domains of life with Evo 2*（2025 预印本；**2026 年 3 月正式发表于 Nature**）。核心贡献：40B 参数、百万上下文 DNA 基础模型。为何重要：基因组基础模型代表。今天仍值得读：理解基因组大模型能力与边界。

20. **2025–2026｜单细胞基础模型审计（如 scContam）** — *Auditing pretraining contamination in single\-cell foundation model benchmarks*（arXiv 2607\.20572，2026）。核心贡献：指出 scFM benchmark 预训练污染与零样本局限。为何重要：提醒"AI hype"需要审计。今天仍值得读：培养批判性判断。

> 实际篇数：20 篇（按年代排序）。
> 
> 

---

*（本部分为《2026 生物信息学全景导论与研究地图》第六部分：数据库生态 / 软件生态 / 领域地图 / 前沿雷达 / 研究范式变化 / 附录 A–C。）*
