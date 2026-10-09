---
prev:
  text: "四、基因组学：从 raw reads 到变异与组装"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/04-genomics"
next:
  text: "六、单细胞生物信息学：从实验到计算"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/06-single-cell"
---

# 五、转录组学：从 microarray 到 bulk RNA-seq 与单细胞

> 本章定位：转录组学回答"这个细胞/组织在某个时刻、哪些基因、以多大强度、转录成什么 isoform？" 它与基因组学的根本差异在于——**输入是"表达量"而非"DNA 序列"**，因此统计建模、标准化、差异分析是这里的核心。本章重点讲 bulk RNA\-seq 流水线；scRNA\-seq 与 spatial transcriptomics 只作对比简述（详见另章）。
> 
> 

## 5\.1 技术演化：microarray → bulk RNA\-seq → scRNA\-seq → spatial

- **Microarray（基因芯片）**：把已知探针固定在芯片上，通过杂交荧光强度估计转录本丰度。【过时·被取代】

    - 优点：便宜、通量高、定量成熟（LOESS、RMA 标准化）。

    - 致命局限：只能检测探针设计内的转录本；无法发现新 isoform、新基因、编辑位点；交叉杂交导致定量不准。

- **Bulk RNA\-seq**：Mortazavi et al\., 2008, *Nat Methods* 5:621–628（doi:10\.1038/nmeth\.1226）。把组织中所有 mRNA 反转录成 cDNA，NGS 测序后比对回参考基因组/转录组。【成熟·标准流程】

    - 优点：无偏、动态范围宽、可发现新 isoform/融合/编辑。

    - 局限：把组织中成千上万个细胞"平均"成一个信号，掩盖细胞异质性。

- **scRNA\-seq（单细胞 RNA 测序）**：2014 年后随 Drop\-seq、10x Chromium 商业化爆发。把每个细胞的转录本加上 barcode 单独定量。【快速发展，详见另章】

    - 与 bulk 的对比：bulk 回答"组织整体表达了什么"；sc 回答"组织内有哪些细胞类型、它们各自表达了什么"。

- **Spatial transcriptomics（空间转录组）**：Ståhl et al\., 2016, *Science* 353:478–482；2020 年后 Visium、Stereo\-seq、MERFISH、Xenium 等把基因表达原位定位到组织切片上。【快速发展，简述】

    - 与 scRNA\-seq 的互补：sc 失去空间位置；spatial 通常达不到单细胞分辨率（Visium 55 μm 圆点 ≈ 数个细胞）或通量较低。

## 5\.2 Bulk RNA\-seq 完整流水线

```
raw FASTQ (read1/read2)
  │
  ├─ QC + 修剪（fastp / Trimmomatic）
  │
  ├─ 路线 A：Genome + splice-aware aligner
  │     STAR / HISAT2  →  BAM
  │     └─ featureCounts / htseq-count  →  gene × sample counts matrix
  │
  ├─ 路线 B：Transcriptome pseudoalignment
  │     Salmon / Kallisto  →  estimated TPM / counts
  │
  ├─ 标准化与差异表达
  │     DESeq2 / edgeR / limma-voom
  │
  ├─ 下游
  │     基因富集（GSEA、GO/KEGG、Reactome）
  │     可变剪接（rMATS、SUPPA2）
  │     融合基因（STAR-Fusion、Arriba）
  │     RNA 编辑（REDItools 等）
  │
  └─ 可视化与报告
```

## 5\.3 Splice\-aware 比对：STAR 与 HISAT2

RNA\-seq 读长跨越外显子\-外显子 junction（剪接位点），不能直接用 BWA\-MEM 比对到基因组——因为内含子长达数千 bp，read 会"跳"过一段。

- **STAR**：Dobin et al\., 2013, *Bioinformatics* 29:15–21（doi:10\.1093/bioinformatics/bts635）。核心：用后缀数组（suffix array）做 maximal mappable prefix（MMP）种子，把跨越 junction 的 read 拆成两段对齐，并动态发现新 junction。

    - **优点**：极快（人类全 RNA\-seq 比对 \~30 min/sample，比 TopHat 快 100 倍）、 junction 发现准确、是融合检测与新 isoform 发现的首选。

    - **缺点**：内存大（人类基因组索引 \~30 GB）。

- **HISAT2**：Kim et al\., 2015, *Nat Methods* 12:357–360（doi:10\.1038/nmeth\.3317）。基于 BWT \+ 全局/局部索引，比 STAR 内存小、速度接近；GATK RNA\-seq Best Practices 早期推荐。

- **TopHat / TopHat2**：Trapnell et al\., 2009, *Bioinformatics* 25:1105–1111。HISAT2/STAR 的前身，【过时·被取代】。

- **现状**：STAR 是 2020 年代 bulk RNA\-seq 与 fusion 检测的事实标准；HISAT2 在内存受限场景仍用【成熟·标准流程】。

## 5\.4 Pseudoalignment：Salmon 与 Kallisto，为什么是重要创新

### 5\.4\.1 传统流水线的瓶颈

传统路线是：`read → 基因组比对 → 把 read 分配到基因/转录本 → 计数`。这条线有两个问题：

1. **慢**：STAR 比对一个 sample 仍需 20\~60 min；

2. **多重映射歧义**：一个 read 来自哪个 isoform 本身就不确定（同源外显子、旁系同源基因），传统 featureCounts 经常"丢弃多重映射 read"或"随便挑一个"，引入偏差。

### 5\.4\.2 Pseudoalignment 的核心思想

- **Kallisto**：Bray et al\., 2016, *Nat Biotechnol* 34:525–527（doi:10\.1038/nbt\.3519）。核心洞察：**你根本不需要知道 read 每个碱基对齐在哪里，只需要知道它 compatible with 哪些转录本**。

    - 用 de Bruijn graph 把转录本集压缩成 equivalence classes；

    - 每条 read 只需 k\-mer 哈希查到它属于哪个 equivalence class（即它能来自哪一组转录本）；

    - 再用 EM 算法把这些"转录本集合"的计数分解成单个转录本的丰度。

    - **速度**：比传统 alignment\-based 流程快 \~100 倍，定量精度相当甚至更好。

- **Salmon**：Patro et al\., 2017, *Nat Methods* 14:417–419（doi:10\.1038/nmeth\.4197）。两阶段：先用 quasi\-mapping（轻量比对）找到 compatible transcript set，再用 EM \+ 偏倚校正（GC 偏倚、片段长度偏倚、序列特异性偏倚）估计丰度。

    - **优势**：首次把 GC 偏倚、片段长度分布等系统偏倚显式建模到定量中。

### 5\.4\.3 为什么 pseudoalignment 是重要创新

1. **算法范式转变**：从"逐碱基 DP 比对"转向"集合级别的相容性判定"，把 RNA\-seq 定量从"比对问题"重述为"组合计数 \+ EM 推断问题"。

2. **速度提升两个数量级**：使几百到几千样本的大规模队列 RNA\-seq（如 GTEx 全组织、百万样本队列）在计算上可行。

3. **不确定性显式建模**：EM 自然处理多重映射，输出 bootstrap 样本/后验分布，下游差异表达可"传播定量不确定性"（如 sleuth）。

4. **与 scRNA\-seq 天然契合**：scRNA\-seq 每个细胞只有 \~1 万条 read，传统 STAR 比对每个细胞成本不可接受；Alevin（Salmon 单细胞模块）、KITE 把 pseudoalignment 扩展到 UMI \+ barcode。

- **局限**：pseudoalignment 依赖给定的转录本注释；对新转录本、非模式生物、融合基因的发现能力弱于 STAR \+ StringTie 路线。

- **现状**：Salmon / Kallisto 是 bulk RNA\-seq 转录本水平定量的事实标准【成熟·标准流程】；基因水平差异表达分析中，STAR → featureCounts 与 Salmon/Kallisto → tximport 两条路线并存，结果高度一致。

## 5\.5 定量单位：counts、RPKM、FPKM、TPM

|单位|定义|适用场景|问题|
|---|---|---|---|
|**Raw counts**|比对到该基因/转录本的 read 数|差异表达统计（DESeq2/edgeR）|受文库大小、基因长度影响|
|**RPKM**|Reads Per Kilobase per Million mapped reads|2008\~2010 早期 RNA\-seq|不同基因间不可直接比较|
|**FPKM**|Fragments Per Kilobase per Million mapped fragments（双端按 fragment 计）|同 RPKM|同上|
|**TPM**|Transcripts Per Kilobase per Million；先按长度归一，再按文库大小归一|跨样本表达量比较|仍受组成效应（composition effect）影响，不适合直接做 DE|

- **教学要点**：

    - RPKM/FPKM 先按文库大小归一、再按长度归一，导致**每个样本的 TPM/RPKM 总和依赖于该样本高表达基因**，样本间基因的相对比例会被"挤出"；

    - TPM 先按长度归一、再按文库大小归一，使每个样本 TPM 总和恒为 10⁶，跨样本表达谱更可比；

    - **做差异表达不要直接用 TPM 做输入**——DESeq2/edgeR 期望 raw counts（因为 counts 服从负二项分布，方差\-均值关系已知）。

## 5\.6 差异表达：DESeq2、edgeR、limma

RNA\-seq  counts 不是正态分布，而是 **离散计数** ，且方差随均值增大而增大（overdispersion）。三个主流工具都基于 **负二项分布（negative binomial, NB）** 或其近似：

- **edgeR**：Robinson et al\., 2010, *Bioinformatics* 26:139–140（doi:10\.1093/bioinformatics/btp616）。早期 NB 模型 \+ 经验贝叶斯 squeeze overdispersion；支持小样本（n=2 vs 2）。

- **DESeq2**：Love et al\., 2014, *Genome Biol* 15:550（doi:10\.1186/s13059\-014\-0550\-8）。把 dispersion shrink 到 trend 上，给出更稳定的 fold\-change 与 p 值；是 2020 年代 bulk RNA\-seq DE 的事实标准。

- **limma\-voom**：Ritchie et al\., 2015, *Nucleic Acids Res* 43:e47（doi:10\.1093/nar/gkv007）。把 counts 通过 log2\-CPM \+ 均值\-方差趋势变换（voom）成连续权重，再用成熟的 limma 线性模型做 DE；适合复杂设计（多因素、交互、block）和大样本。

- **主流观点**：三个工具在 balanced 设计下结果高度一致；差异主要出现在小样本、低表达基因、复杂设计场景。教学上常以 DESeq2 入门，复杂设计用 limma\-voom。

- **QC 必须做**：MA plot、sample distance PCA、volcano plot、`assay(rlog)` 热图；这是 RNA\-seq DE 报告的标配。

## 5\.7 通路分析（pathway analysis）

- **ORA（Over\-Representation Analysis）**：先筛 DE genes，再用超几何检验看 GO/KEGG/Reactome 中哪些 term 富集。简单但忽略基因表达量与基因间相关性。

- **GSEA（Gene Set Enrichment Analysis）**：Subramanian et al\., 2005, *PNAS* 102:15545–15550。不硬切 DE，而是按 log2FC 排序列表，检验基因集是否在列表两端富集。【成熟·标准流程】

- **主流观点**：GSEA 是 RNA\-seq 通路分析的事实标准；MSigDB 基因集是最常用的知识库。但 pathway 结果需谨慎——同一批数据换不同数据库（GO vs Reactome vs KEGG）常给出"看似不同"的富集。

## 5\.8 进一步转录本层面分析

### 5\.8\.1 Alternative splicing 与 isoform

- **概念**：同一个基因通过不同剪接产生不同 isoform（可变剪接，alternative splicing）；人 \~95% 多外显子基因存在可变剪接。

- **工具**：

    - **rMATS**（Shen et al\., 2014, *Proc Natl Acad Sci* 111:E5593–E5601）：检测两组间差异外显子包含率（PSI）。

    - **SUPPA2**（Trincado et al\., 2018, *Genome Biol* 19:151）：基于 event 水平 PSI 快速差异剪接。

    - **StringTie**（Pertea et al\., 2015, *Nat Biotechnol* 33:290–295）：从 BAM 组装新 isoform。

- **成熟度**：事件检测【成熟·标准流程】；长读长直接全长 isoform 测序（Iso\-Seq、Direct RNA）仍在【快速发展】。

### 5\.8\.2 RNA editing

- **概念**：转录后 RNA 序列被酶（如 APOBEC、ADAR）改变（最常见 A→I/G），使 RNA 与 DNA 序列不一致。

- **检测**：REDItools、JACUSA 等，需要同时有 DNA\-seq 与 RNA\-seq，把 RNA\-DNA 不一致位点从 SNP/比对错误中区分出来。

- **现状**：【快速发展】；生物学意义在不同组织中差异很大，临床转化【有争议或未证明价值】。

### 5\.8\.3 Fusion gene（融合基因）

- **概念**：两个独立基因因基因组易位融合成一个嵌合转录本，是血液肿瘤（BCR\-ABL、PML\-RARA）和多种实体瘤的关键驱动。

- **检测工具**：STAR\-Fusion（Haas et al\., 2019, *Genome Med* 11:90）、Arriba、FusionCatcher。

- **主流观点**：STAR \+ STAR\-Fusion 是肿瘤 RNA\-seq 融合检测的主流；长读长 Direct RNA 可直接看到融合 junction 的全长结构，但【快速发展】中。

## 5\.9 转录组学工具与方法对比表

|任务|工具|输入|输出|成熟度|
|---|---|---|---|---|
|QC|fastp / FastQC|FASTQ|质控报告|【成熟·标准流程】|
|Splice\-aware 比对|STAR / HISAT2|FASTQ \+ 基因组|BAM|【成熟·标准流程】|
|Pseudoalignment|Salmon / Kallisto|FASTQ \+ 转录本 FASTA|估计 TPM / counts|【成熟·标准流程】|
|基因水平计数|featureCounts / htseq\-count|BAM \+ GTF|counts 矩阵|【成熟·标准流程】|
|差异表达|DESeq2 / edgeR / limma\-voom|counts 矩阵 \+ 设计|DE 表|【成熟·标准流程】|
|通路富集|GSEA / clusterProfiler|DE 表 \+ 基因集|富集结果|【成熟·标准流程】|
|差异剪接|rMATS / SUPPA2|BAM / Salmon|PSI 差异|【成熟·标准流程】|
|融合检测|STAR\-Fusion / Arriba|BAM|融合列表|【成熟·标准流程】|
|新 isoform 组装|StringTie2 / Scallop|BAM|GTF|【成熟·标准流程】|
|单细胞|Seurat / Scanpy / Alevin|单细胞 counts|细胞类型/轨迹|【快速发展】|
|空间转录组|Space Ranger / BayesSpace|空间矩阵|空间表达图|【快速发展】|

## 5\.10 本章小结：三条贯穿主线

1. **为什么出现**：microarray 被 RNA\-seq 取代是因为后者无偏、动态范围宽；bulk RNA\-seq 正在被 scRNA\-seq \+ spatial 补充而不是取代——它们回答不同尺度的问题。

2. **取代了什么**：TopHat 被 STAR/HISAT2 取代；传统 alignment\-based 定量被 Salmon/Kallisto pseudoalignment 大幅加速；RPKM/FPKM 被 TPM 与 raw counts 双轨替代。

3. **与其他方法关系**：转录组学与基因组学共享 BAM/VCF/FASTA 生态；与长读长技术结合后（Iso\-Seq、Direct RNA），正在回答"全长 isoform 到底有多少种"这个短读长时代无法回答的问题。

---

## 附：本章关键参考文献（按出现顺序）

1. Needleman SB, Wunsch CD\. A general method applicable to the search for similarities in the amino acid sequence of two proteins\. *J Mol Biol*\. 1970;48:443–453\. doi:10\.1016/0022\-2836\(70\)90057\-4

2. Smith TF, Waterman MS\. Identification of common molecular subsequences\. *J Mol Biol*\. 1981;147:195–197\. doi:10\.1016/0022\-2836\(81\)90087\-5

3. Dayhoff MO, Schwartz RM, Orcutt BC\. A model of evolutionary change in proteins\. *Atlas of Protein Sequence and Structure*\. 1978;5\(Suppl 3\):345–352\.

4. Henikoff S, Henikoff JG\. Amino acid substitution matrices from protein blocks\. *PNAS*\. 1992;89:10915–10919\. doi:10\.1073/pnas\.89\.22\.10915

5. Pearson WR, Lipman DJ\. Improved tools for biological sequence comparison\. *PNAS*\. 1988;85:2444–2448\. doi:10\.1073/pnas\.85\.8\.2444

6. Altschul SF, Gish W, Miller W, Myers EW, Lipman DJ\. Basic local alignment search tool\. *J Mol Biol*\. 1990;215:403–410\. doi:10\.1016/S0022\-2836\(05\)80360\-2

7. Altschul SF, Madden TL, Schäffer AA, et al\. Gapped BLAST and PSI\-BLAST\. *Nucleic Acids Res*\. 1997;25:3389–3402\. doi:10\.1093/nar/25\.17\.3389

8. Higgins DG, Sharp PM\. CLUSTAL: a package for performing multiple sequence alignment on a microcomputer\. *Gene*\. 1988;73:237–244\.

9. Sievers F, Wilm A, Dineen D, et al\. Fast, scalable generation of high\-quality protein multiple sequence alignments using Clustal Omega\. *Mol Syst Biol*\. 2011;7:539\. doi:10\.1038/msb\.2011\.75

10. Katoh K, Misawa K, Kuma K, Miyata T\. MAFFT: a novel method based on fast Fourier transform\. *Nucleic Acids Res*\. 2002;30:3059–3066\. doi:10\.1093/nar/gkf436

11. Edgar RC\. MUSCLE: multiple sequence alignment with high accuracy and high throughput\. *Nucleic Acids Res*\. 2004;32:1792–1797\. doi:10\.1093/nar/gkh340

12. Langmead B, Trapnell C, Pop M, Salzberg SL\. Ultrafast and memory\-efficient alignment of short DNA sequences to the human genome\. *Genome Biol*\. 2009;10:R25\. doi:10\.1186/gb\-2009\-10\-3\-r25

13. Li H, Durbin R\. Fast and accurate short read alignment with Burrows\-Wheeler transform\. *Bioinformatics*\. 2009;25:1754–1760\. doi:10\.1093/bioinformatics/btp324

14. Li H\. Minimap2 and miniasm: fast mapping and de novo assembly for noisy long sequences / Minimap2: pairwise alignment for nucleotide sequences\. *Bioinformatics*\. 2016;32:2103–2110; 2018;34:3094–3100\. doi:10\.1093/bioinformatics/bty191

15. McKenna A, Hanna M, Banks E, et al\. The Genome Analysis Toolkit\. *Genome Res*\. 2010;20:1297–1303\. doi:10\.1101/gr\.107524\.110

16. Poplin R, Chang PC, Alexander D, et al\. A universal SNP and small\-indel variant caller using deep neural networks\. *Nat Biotechnol*\. 2018;36:983–987\. doi:10\.1038/nbt\.4235

17. Li H, Handsaker B, Wysoker A, et al\. The Sequence Alignment/Map format and SAMtools\. *Bioinformatics*\. 2009;25:2078–2079\. doi:10\.1093/bioinformatics/btp352

18. Zerbino DR, Birney E\. Velvet: algorithms for de novo short read assembly using de Bruijn graphs\. *Genome Res*\. 2008;18:821–829\.

19. Bankevich A, Nurk S, Antipov D, et al\. SPAdes: a new genome assembly algorithm and its applications to single\-cell sequencing\. *J Comput Biol*\. 2012;19:455–477\. doi:10\.1089/cmb\.2012\.0021

20. Koren S, Walenz BP, Berlin K, et al\. Canu: scalable and accurate long\-read assembly via adaptive k\-mer weighting and repeat separation\. *Genome Res*\. 2017;27:722–736\. doi:10\.1101/gr\.215087\.116

21. Kolmogorov M, Yuan J, Lin Y, Pevzner PA\. Assembly of long, error\-prone reads using repeat graphs\. *Nat Biotechnol*\. 2019;37:540–544\. doi:10\.1038/s41587\-019\-0072\-8

22. Cheng H, Concepcion GT, Feng X, Zhang H, Li H\. Haplotype\-resolved de novo assembly using phased assembly graphs with hifiasm\. *Nat Methods*\. 2021;18:170–175\. doi:10\.1038/s41592\-020\-01056\-5

23. Nurk S, Koren S, Rhie A, et al\. The complete sequence of a human genome \(T2T\-CHM13\)\. *Science*\. 2022;376:eabl3534\. doi:10\.1126/science\.abj6987

24. Liao WW, Asri M, Ebler J, et al\. A draft human pangenome reference \(HPRC\)\. *Nature*\. 2023;617:312–324\. doi:10\.1038/s41586\-023\-05896\-x

25. Wang T, Antonacci\-Fulton L, Howe K, et al\. The Human Pangenome Project: a global resource to map genomic diversity\. *Nature*\. 2022;604:437–446\. doi:10\.1038/s41586\-022\-04589\-3

26. Dobin A, Davis CA, Schlesinger F, et al\. STAR: ultrafast universal RNA\-seq aligner\. *Bioinformatics*\. 2013;29:15–21\. doi:10\.1093/bioinformatics/bts635

27. Kim D, Langmead B, Salzberg SL\. HISAT: a fast spliced aligner with low memory requirements / HISAT2\. *Nat Methods*\. 2015;12:357–360\. doi:10\.1038/nmeth\.3317

28. Bray NL, Pimentel H, Melsted P, Pachter L\. Near\-optimal probabilistic RNA\-seq quantification \(Kallisto\)\. *Nat Biotechnol*\. 2016;34:525–527\. doi:10\.1038/nbt\.3519

29. Patro R, Duggal G, Love MI, Irizarry RA, Kingsford C\. Salmon provides fast and bias\-aware quantification of transcript expression\. *Nat Methods*\. 2017;14:417–419\. doi:10\.1038/nmeth\.4197

30. Love MI, Huber W, Anders S\. Moderated estimation of fold change and dispersion for RNA\-seq data with DESeq2\. *Genome Biol*\. 2014;15:550\. doi:10\.1186/s13059\-014\-0550\-8

31. Robinson MD, McCarthy DJ, Smyth GK\. edgeR: a Bioconductor package for differential expression analysis of digital gene expression data\. *Bioinformatics*\. 2010;26:139–140\. doi:10\.1093/bioinformatics/btp616

32. Ritchie ME, Phipson B, Wu D, et al\. limma powers differential expression analyses for RNA\-sequencing and microarray studies\. *Nucleic Acids Res*\. 2015;43:e47\. doi:10\.1093/nar/gkv007

33. Subramanian A, Tamayo P, Mootha VK, et al\. Gene set enrichment analysis\. *PNAS*\. 2005;102:15545–15550\.

34. Mortazavi A, Williams BA, McCue K, Schaeffer L, Wold B\. Mapping and quantifying mammalian transcriptomes by RNA\-Seq\. *Nat Methods*\. 2008;5:621–628\. doi:10\.1038/nmeth\.1226

> 注：以上 DOI 均为对应论文的官方 DOI；如个别 DOI 在出版社迁移中失效，可通过 PubMed 标题检索。文中"主流观点"与"研究者推测"已分别标注，不与事实混淆。
> 
> 
