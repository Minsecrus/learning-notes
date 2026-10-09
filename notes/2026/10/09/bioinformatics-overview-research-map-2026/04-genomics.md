---
prev:
  text: "三、序列分析基础：从精确比对到启发式索引"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/03-sequence-analysis"
next:
  text: "五、转录组学：从 microarray 到 bulk RNA-seq 与单细胞"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/05-transcriptomics"
---

# 四、基因组学：从 raw reads 到变异与组装

> 本章定位：基因组学的核心问题是——"一个物种/一个个体的 DNA 序列到底是什么样，它和参考序列、和其他个体有什么不同？" 围绕这个问题形成了两条主流路线：**reference\-based mapping**（把读长比对到已有参考基因组上，检测变异）与 **de novo assembly**（不依赖参考，从读长重新拼出基因组）。本章按"raw reads → QC → alignment/assembly → variant calling → annotation → downstream"的真实流水线展开。
> 
> 

## 4\.1 完整流程总览

```
raw FASTQ
  │
  ├─ QC 与质控（FastQC / MultiQC）
  ├─ 修剪（Cutadapt / Trimmomatic / fastp）
  │
  ├─ 路线 A：Reference-based
  │     ├─ 比对：BWA-MEM（短读长）/ Minimap2（长读长）
  │     ├─ 排序 + 去重：SAMtools sambamba / Picard MarkDuplicates
  │     ├─ BQSR / 重比对：GATK (旧版 Best Practices)
  │     ├─ 变异检测：GATK HaplotypeCaller / DeepVariant / FreeBayes / Sniffles（SV）
  │     └─ 变异质控与注释：BCFtools、VEP、ANNOVAR、SnpEff
  │
  └─ 路线 B：De novo assembly
        ├─ 短读长：Velvet / SPAdes
        ├─ 长读长 noisy：Canu / Flye
        ├─ HiFi：hifiasm / HiCanu
        ├─  scaffolding：Hi-C（3D-DNA / SALSA2）/ 光学图谱（Bionano）
        └─ 评估：BUSCO / Merqury / QUAST
```

## 4\.2 原始数据质量控制

### 4\.2\.1 FASTQ 与 read 基本概念

- **FASTQ**：每条 read 四行——`@read_name`、序列、`+`、Phred 质量字符串（每个字符编码一个 Q 值，`Q = -10 log10(p_error)`）。

- **Phred Q20 / Q30**：Q20 = 错误率 1%；Q30 = 错误率 0\.1%。Illumina 如今典型 Q30 ≥ 90%。

### 4\.2\.2 工具

- **FastQC**：Andrews 等的 Java 质控工具，输出每个碱基的质量分布、GC 含量、接头污染、k\-mer 过表达等报告。【成熟·标准流程】

- **MultiQC**（Ewels et al\., 2016, *Bioinformatics* 32:3047–3048）：把多个样本的 FastQC 报告汇总成一张 HTML。【成熟·标准流程】

- **Cutadapt**（Martin, 2011, *EMBnet\.journal* 17:10–12）：去接头、trim 低质量末端、按长度过滤。【成熟·标准流程】

- **Trimmomatic**（Bolger et al\., 2014, *Bioinformatics* 30:2114–2120）：双端 read 协同修剪、滑窗质量截断。【成熟·标准流程】

- **fastp**（Chen et al\., 2018, *Bioinformatics* 34:i604–i605）：单文件高速 QC \+ 修剪，2018 年后逐步取代 Trimmomatic 的默认地位。【成熟·标准流程】

> **主流观点**：现代流水线倾向用 fastp 一步完成 QC 报告 \+ 接头/低质量修剪，再用 FastQC/MultiQC 复核。
> 
> 

## 4\.3 Reference genome 与 de novo assembly 两条路线

### 4\.3\.1 Reference\-based 路线

- **解决什么问题**：已知有高质量参考基因组（如人类 GRCh38、T2T\-CHM13），把个体读长比对上去，检测个体与参考的差异（即变异）。

- **输入**：QC 后读长 \+ 参考 FASTA \+ 索引。

- **输出**：BAM/CRAM 比对文件 \+ VCF/BCF 变异文件。

- **优点**：快、便宜、定量准；**缺点**：无法发现参考中不存在的序列（novel sequence）、对复杂重复区和结构变异不敏感、引入"参考偏差（reference bias）"。

### 4\.3\.2 De novo assembly 路线

- **解决什么问题**：没有或不可靠参考时，从读长本身拼出该物种/个体的基因组。

- **输入**：读长（短/长）\+ 可选的 Hi\-C、光学图谱、测序深度信息。

- **输出**：contig / scaffold FASTA \+ 组装质量评估报告。

- **优点**：无参考偏差、能发现 novel sequence 与复杂变异；**缺点**：计算量大、对测序错误敏感、评估难。

### 4\.3\.3 关键组装术语

- **Contig（重叠群）**：由读长通过 overlap 直接拼接成的连续序列，内部无 N。

- **Scaffold（骨架）**：把 contig 通过 paired\-end / Hi\-C / 光学图谱等长程信息连接起来，中间用 N 占位。

- **Coverage（覆盖度）**：某碱基被读长覆盖的平均次数；人类基因组 30× WGS 即平均每个碱基有 30 条读长覆盖。

- **N50**：把所有 contig 从长到短排序，累加长度达到总长度 50% 时的那条 contig 长度。N50 越大代表组装连续性越好。注意 N50 不是"最长 contig 长度"，也不是"错误率"。

- **BUSCO**（Benchmarking Universal Single\-Copy Orthologs；Simão et al\., 2015, *Bioinformatics* 31:3210–3212）：用保守单拷贝基因集评估组装的**完整性**。

- **Merqury**（Rhie et al\., 2020, *Nat Biotechnol* 38:1144–1146, doi:10\.1038/s41587\-020\-0637\-5）：基于 k\-mer 谱同时评估组装的**准确性（QV）、完整性、压缩性**，是 T2T/HPRC 时代的事实标准。

## 4\.4 短读长组装：Velvet 与 SPAdes

- **Velvet**：Zerbino \& Birney, 2008, *Genome Res* 18:821–829。基于 de Bruijn graph（把序列切成 k\-mer 作为节点，k\-mer 重叠 1 个碱基作为边），通过清理 tips、bubbles、错误连接产生 contig。在 2008\~2012 年代是短读长组装主力。【过时·被取代】

- **SPAdes**：Bankevich et al\., 2012, *J Comput Biol* 19:455–477（doi:10\.1089/cmb\.2012\.0021）。多细胞 de Bruijn \+ 不均衡覆盖度处理 \+ 错读校正，特别擅长细菌、宏基因组与小真核；是微生物基因组组装的事实标准【成熟·标准流程】。

- **局限**：短读长组装的 contig 通常只有数十 kb 级别，无法跨越 10 kb 以上的重复单元；这是短读长时代人类基因组长期"缺 8%"的根本原因。

## 4\.5 长读长组装：Canu、Flye、hifiasm

### 4\.5\.1 Canu

- **论文**：Koren et al\., 2017, *Genome Res* 27:722–736（doi:10\.1101/gr\.215087\.116）。

- **背景**：PacBio 早期与 ONT 早期单分子长读长错误率 \~15%，传统 de Bruijn graph 因错误太多而崩溃。

- **核心思想**：先做 read\-based 错误校正（用其他 reads 投票共识），再用 overlap\-layout\-consensus（OLC）方法组装校正后的读长。

- **现状**：仍用于超长篇 noisy 数据；在 HiFi 时代地位被 hifiasm/Flye 部分取代。【成熟·标准流程】

### 4\.5\.2 Flye

- **论文**：Kolmogorov et al\., 2019, *Nat Biotechnol* 37:540–544（doi:10\.1038/s41587\-019\-0072\-8）。

- **核心思想**：不先做显式 read 校正，而是在 repeat graph（重复图）上直接组装 noisy reads，再用 read 对重复单元做共识修正。对 ONT ultra\-long 与 PacBio CLR 尤其高效。

- **现状**：ONT ultra\-long 与细菌/小型真核长读长组装的常用工具【成熟·标准流程】。

### 4\.5\.3 hifiasm

- **论文**：Cheng et al\., 2021, *Nat Methods* 18:170–175（doi:10\.1038/s41592\-020\-01056\-5）；后续 hifiasm\+\+/double graph 见 Cheng et al\., 2024, *Nat Methods* 21:967–970。

- **背景**：PacBio HiFi（\~10\~20 kb，错误率 \< 1%）兼具"长"与"准"，成为组装 diploid 人类基因组的理想数据。

- **核心思想**：

    1. 用 HiFi reads 间的 overlap 构建 phased assembly graph；

    2. 利用 reads 上的杂合 SNP 信息把两条单倍型（haplotype）分开，避免折叠（collapsing）；

    3. 配合 Hi\-C 数据可在无亲本的情况下做到 chromosome\-scale phased 组装。

- **为什么重要**：hifiasm 让"普通实验室用 \~10 kb HiFi 数据 \+ Hi\-C 就能拼出染色体级 phased 二倍体基因组"成为现实；是 HPRC 47 个样本、T2T 扩展项目的核心组装器之一。

- **现状**：HiFi phased 组装的事实标准【成熟·标准流程】；对 polyploid 与超大基因组用 hifiasm\+\+。

## 4\.6 变异检测：从 SNP 到结构变异

### 4\.6\.1 变异类型学

- **SNP（单核苷酸多态性）**：单个碱基替换。人类基因组平均每 \~1000 bp 一个 SNP。

- **Indel（插入/缺失）**：1\~50 bp 的小插入或缺失。

- **SV（结构变异）**：≥50 bp 的变异，包括缺失、重复、倒位、易位、INS。SV 数量虽少（每人 \~2 万个），但影响的碱基总数比 SNP 多。

- **CNV（拷贝数变异）**：一段区域的拷贝数从 2 变成 1（缺失）或 ≥3（重复/扩增）。

- **Haplotype phasing（单倍型分型）**：把一个二倍体个体的变异按"父源/母源"染色体分组，得到两套单倍型序列。传统方法靠亲本（trio\-binning）或连锁；长读长 \+ Hi\-C 让直接 phasing 成为可能。

### 4\.6\.2 短读长 variant calling 工具链

- **SAMtools / BCFtools**：Li et al\., 2009, *Bioinformatics* 25:1757–1758（doi:10\.1093/bioinformatics/btp352）。BAM 处理、mpileup、简易 SNP/indel calling 的瑞士军刀。【成熟·标准流程】

- **GATK / HaplotypeCaller**：McKenna et al\., 2010, *Genome Res* 20:1297–1303（doi:10\.1101/gr\.107524\.110）。Broad Institute 出品，Best Practices 包括：比对 → MarkDuplicates → BQSR → HaplotypeCaller（局部重组装 \+ 单倍型感知的似然模型）→ VQSR/Filtering。在 Illumina 短读长 SNP/indel calling 上是临床与群体遗传的事实标准【成熟·标准流程】。GATK4 已重写，性能大幅提升。

- **DeepVariant**：Poplin et al\., 2018, *Nat Biotechnol* 36:983–987（doi:10\.1038/nbt\.4235）。把 pileup 图像化后用 Inception 卷积神经网络判定 SNP/indel；在 multiple benchmarks 上准确率超过传统统计模型，是 Google/DeepMind 在生信领域最有影响力的工作之一。【成熟·标准流程，快速发展】

- **FreeBayes**：Garrison \& Marth, 2012, arXiv:1207\.3907。基于贝叶斯模型、可同时处理多倍体与混合样本；在无 GATK license 顾虑、Linux 原生、批量重测序中仍广泛使用【成熟·标准流程】。

### 4\.6\.3 长读长 variant calling

- **短读长对 SV 几乎无能为力**：短读长无法跨越 1 kb 以上的重复单元，SV 断点往往落在重复区，短读长多重映射导致 false negative 极高。

- **长读长工具**：

    - **Sniffles2**（Smolka et al\., 2022, *Genome Res* 32:1771–1784）：基于长读长 split\-read 信号检测 SV。

    - **cuteSV**（Jiang et al\., 2020, *Genome Med* 12:99）：长读长 SV calling 的常用工具。

    - **PAV**（Ebert et al\., 2021, *Science* 372:eabf7111）：基于局部组装的 SV calling，准确率高。

    - **Clair3 / NanoCaller**：长读长 SNP/indel calling（基于 CNN/RNN）。

- **成熟度**：长读长 SV calling 仍在【快速发展】，准确率已显著超过短读长，但群体规模、标准化流程尚未像 GATK 那样完全固化。

## 4\.7 三种测序技术分别改变了什么

|技术|读长|错误率|通量|优势|局限|对生信的影响|
|---|---|---|---|---|---|---|
|**Illumina（短读长）**|100\~300 bp|\~0\.1\~1%（错配为主）|极高（\~1 Tb/run）|便宜、准、通量高|短，跨不过重复|催生 BWT/k\-mer 索引、de Bruijn 组装、GATK 统计模型|
|**PacBio HiFi（环状共识）**|10\~25 kb|\~0\.1\~1%（低 indel）|中（\~100 Gb/SMRT cell）|长且准|贵、通量较低|使 hifiasm phased T2T 组装成为常规；开启长读长 SV 与 phasing|
|**Oxford Nanopore（ONT）**|10 kb\~4 Mb\+|\~5\~15%（indel 为主；新版 Q20\+ 已接近 HiFi）|中低，设备便携|超长读长、实时测序、直接 RNA/表观检测|旧版错误率高、仪器噪声|使 Flye、chimeric 检测、直接 RNA/DNA 修饰检测成为可能|

- **主流观点**：Illumina 在未来 5\~10 年仍是大群体 WGS、临床 WES、RNA\-seq 定量的主力；HiFi 与 ONT 在 de novo 组装、T2T、SV、phasing 上已不可替代。三者是互补而非替代关系。

- **研究者推测**（非事实）：随着 ONT Q20\+ 与 PacBio Revio 通量提升，长读长单价会继续下降，未来临床 WGS 可能以"长读长为主、短读长补定量"的混合模式存在。

## 4\.8 长读长解决了哪些以前难的问题

### 4\.8\.1 T2T 完整基因组

-  **里程碑** ：Nurk et al\., 2022, *Science* 376:eabl3534（T2T\-CHM13 主文，doi:10\.1126/science\.abj6987）。T2T 联盟用 PacBio HiFi \+ ONT ultra\-long \+ Bionano \+ Hi\-C 完成了首个人类基因组的 **几乎完整（除 Y 染色体部分）** 组装，填补了 GRCh38 中约 8% 的缺口（主要是 centromere、acrometric 染色体、rDNA 阵列、segmental duplication）。2024 年又完成 CHM13\-Y（Rhie et al\., 2023, *Nature* 620:596–601, doi:10\.1038/s41586\-023\-06464\-0）。

- **意义**：人类基因组首次拥有"从端粒到端粒"的完整序列，centromere 卫星阵列、segmental duplication、复杂重复区的序列首次被解析。

### 4\.8\.2 人类泛基因组（Human Pangenome）

- **里程碑**：Liao et al\., 2023, *Nature* 617:312–324（doi:10\.1038/s41586\-023\-05896\-x）——Human Pangenome Reference Consortium \(HPRC\) 发布首版 draft 泛基因组，包含来自全球 47 个个体的高质量 phased 二倍体组装。愿景论文见 Wang et al\., 2022, *Nature* 604:437–446（doi:10\.1038/s41586\-022\-04589\-3）。

- **意义**：从"单一参考基因组"转向"代表人类多样性的图基因组"；减少参考偏差，更好地发现罕见变异、群体特异序列与 SV。

- **现状**：HPRC 计划扩展到 350 个个体；图基因组工具（Minigraph\-cactus、PGGB、VG）仍在【快速发展】。

### 4\.8\.3 结构变异与复杂重复区

- **事实**：短读长 WGS 只能可靠检测约 50% 的 SV；长读长把 SV 检测率提升到 \>90%，并首次系统刻画了 segmental duplication、centromere 卫星阵列、rDNA 阵列中的变异（如 Eichler 实验室在 CHM13 上的系列论文）。

- **主流观点**：未来人类遗传学的"大发现"将主要来自 SV 与调控区变异，而非 SNP；长读长是这一波发现的使能技术。

### 4\.8\.4 Haplotype\-resolved genome

- **事实**：hifiasm \+ Hi\-C 可在无亲本 trio 的情况下把二倍体个体的两条单倍型完全分开组装；HPRC 47 个样本均为 phased assembly。这使"个体特异性等位基因表达、复合杂合突变、母源/父源印记"在组装层面可直接观察。

## 4\.9 基因组学工具速查表

|阶段|短读长工具|长读长工具|成熟度|
|---|---|---|---|
|QC|FastQC / MultiQC / fastp / Cutadapt / Trimmomatic|同左 \+ NanoPlot（ONT） / PacBio ccs|【成熟·标准流程】|
|比对|BWA\-MEM / Bowtie2|Minimap2 / LRA / winnowmap2|【成熟·标准流程】|
|BAM 处理|SAMtools / sambamba / Picard|同左|【成熟·标准流程】|
|SNP/indel|GATK HaplotypeCaller / DeepVariant / FreeBayes|Clair3 / DeepVariant\-long / NanoCaller|【成熟·标准流程】 / 长读长部分【快速发展】|
|SV|短读长 Delly、lumpy（有限）|Sniffles2 / cuteSV / PAV|【快速发展】|
|短读长组装|SPAdes / Velvet|—|SPAdes 【成熟·标准流程】；Velvet 【过时·被取代】|
|长读长组装|—|Canu / Flye / hifiasm / hifiasm\+\+|【成熟·标准流程】|
|组装评估|BUSCO / QUAST|Merqury / Yak / QUAST|【成熟·标准流程】|
|注释|BRAKER / AUGUSTUS / RepeatMasker|同左|【成熟·标准流程】|

---
