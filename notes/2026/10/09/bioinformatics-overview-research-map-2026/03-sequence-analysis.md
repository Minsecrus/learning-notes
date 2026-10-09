---
prev:
  text: "二、生物信息学发展史"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/02-history"
next:
  text: "四、基因组学：从 raw reads 到变异与组装"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/04-genomics"
---

# 三、序列分析基础：从精确比对到启发式索引

> 本章定位：序列比对（sequence alignment）是几乎所有生信分析的"第一性原理"。无论你后续做基因组、转录组还是蛋白组，第一个要回答的问题永远是——"这条序列和数据库里哪条序列最像？像在哪里？相似度意味着什么？"本章从打分体系讲起，沿着"精确动态规划 → 启发式种子扩展 → 索引化大规模比对"这条主线，把经典算法与现代 aligner 串成一张技术演化地图。
> 
> 

## 3\.1 什么是序列比对，为什么要做比对

**比对（sequence alignment）** 指把两条（pairwise）或多条（multiple）核酸/蛋白序列按残基对齐，使"同源"位置排在同一列，并允许插入空格（gap）来反映进化中的插入/缺失事件。

- **解决什么问题**：判定两条序列在进化/功能上的亲缘关系，定位保守区域，为数据库搜索、同源建模、变异解读、组装、定量提供几何基础。

- **输入 / 输出**：输入是字符序列（DNA/RNA/蛋白）；输出是一条带空格的对齐矩阵，以及一个打分（alignment score）。

- **成熟度**：双序列精确比对理论【成熟·标准流程】；多序列比对【成熟·标准流程】但仍在演化；大规模读长比对【成熟·标准流程】但被新测序技术持续推动迭代。

**两个最根本的分类**：

- **全局比对（global alignment）**：两条序列从头到尾对齐，适合长度相近、整体同源的序列（如同源基因、近缘蛋白）。

- **局部比对（local alignment）**：只找两条序列中相似度最高的一段子串，适合长度差异大、只共享某个结构域的序列（如 BLAST 搜索）。

## 3\.2 打分体系：scoring matrix、PAM、BLOSUM、gap penalty

打分矩阵（scoring matrix）回答一个问题："把 A 和 T 对齐，给几分？把 A 和 A 对齐，给几分？插一个空格，扣几分？" 这直接决定了比对结果是否符合进化直觉。

### 3\.2\.1 替换打分：从 PAM 到 BLOSUM

- **PAM 矩阵（Point Accepted Mutation）：Dayhoff 等 1978 年基于 71 个高度保守蛋白家族的进化观察构建，以"每 100 个残基发生 1 个可接受突变（1 PAM）"为单位，通过矩阵幂次外推得到 PAM30、PAM70、PAM250 等。PAM 数字越大，代表进化距离越远**（Dayhoff et al\., 1978, *Atlas of Protein Sequence and Structure*）。

- **BLOSUM 矩阵（BLOcks SUbstitution Matrix）：Henikoff \&amp; Henikoff 1992 年基于 BLOCKS 数据库中保守 motif 块的直接统计计算，不再依赖进化外推。BLOSUM 数字越大，代表亲缘越近**（如 BLOSUM45 用于远缘、BLOSUM62 用于通用、BLOSUM80 用于近缘）（Henikoff \& Henikoff, 1992, *PNAS* 89:10915–10919, doi:10\.1073/pnas\.89\.22\.10915）。

> **教学要点（反直觉点）**：PAM 数字越大 = 越远；BLOSUM 数字越大 = 越近。这是因为两者构造方向相反，初学者极易混淆。
> 
> 

- **为什么有效**：打分矩阵本质是对数似然比 log\-odds matrix，`S(a,b) = log( q_ab / (p_a · p_b) )`，其中 q\_ab 是观察到 a 替换 b 的频率，p\_a、p\_b 是背景频率。正值意味着该替换比随机期望更常见，反映了氨基酸的物理化学相似性与进化约束。

- **现状**：BLOSUM62 是 BLAST 等工具的默认蛋白替换矩阵【成熟·标准流程】；PAM 如今主要在教科书和理论对比中出现【过时·被取代】。

### 3\.2\.2 空位罚分：gap penalty

插入/缺失（indel）在进化上不是均匀事件——一个长 indel 通常只发生一次，而不是多次单碱基插入的叠加。因此现代比对普遍使用**仿射空位罚分（affine gap penalty）**：

`罚分 = gap_open + gap_extend × 空位长度`

- **为什么不用线性罚分**：线性罚分 `= d × 长度` 会导致比对倾向于大量短 gap，不符合生物学；仿射罚分用较高的开 gap 罚分 \+ 较低的延伸罚分，鼓励"一次开一个长 gap"，更符合 indel 模型。

- **典型取值**：BLAST 蛋白比对常用 gap\_open=11、gap\_extend=1；核酸比对常用 gap\_open=5、gap\_extend=2。

## 3\.3 双序列比对的精确算法：动态规划

### 3\.3\.1 Needleman\-Wunsch（全局比对）

- **论文**：Needleman \& Wunsch, 1970, *J Mol Biol* 48:443–453（doi:10\.1016/0022\-2836\(70\)90057\-4）。

- **解决什么问题**：在给定打分矩阵和 gap penalty 下，找到两条序列全局最优比对。

- **核心思想**：动态规划（dynamic programming, DP）。设序列 A 长度 m、B 长度 n，构造 \(m\+1\)×\(n\+1\) 矩阵 F，`F(i,j)` 表示 A\[1\.\.i\] 与 B\[1\.\.j\] 的最优全局比对得分：

    - `F(i,j) = max( F(i-1,j-1) + s(A_i,B_j), F(i-1,j) - d, F(i,j-1) - d )`

    - 三个方向分别对应"匹配/替换"、"在 A 中插空格"、"在 B 中插空格"。

    - 从 F\(0,0\) 递推到 F\(m,n\)，再回溯（traceback）出比对路径。

- **为什么有效**：最优子结构——全局最优解可以由子问题最优解拼接而成；动态规划保证在给定打分体系下找到数学上的全局最优。

- **复杂度**：时间 O\(mn\)、空间 O\(mn\)。

- **局限**：对长序列（如两条染色体、几百万 bp）不可行。

- **现状**：理论上仍是所有比对算法的基石【成熟·标准流程】；实际大规模搜索中几乎不直接使用。

### 3\.3\.2 Smith\-Waterman（局部比对）

- **论文**：Smith \& Waterman, 1981, *J Mol Biol* 147:195–197（doi:10\.1016/0022\-2836\(81\)90087\-5）。

- **解决什么问题**：只找两条序列中相似度最高的局部片段，而不是强制全局对齐。

- **核心思想**：在 Needleman\-Wunsch 递推式中加入一项 `0`，即：

    - `F(i,j) = max( 0, F(i-1,j-1) + s(A_i,B_j), F(i-1,j) - d, F(i,j-1) - d )`

    - 允许矩阵中任何位置"归零重新开始"，于是最优局部比对对应矩阵中的最大值，从该点回溯到遇到 0 为止。

- **为什么有效**：0 截断使算法不再强迫把低相似度区域纳入比对，天然适合"只共享结构域"或"query 比 db 序列短得多"的场景。

- **复杂度**：同样 O\(mn\)，但常数略高。

- **加速**：后来被 SIMD 指令集（如 SSEARCH、SSW）和 FPGA/GPU 硬件加速；但对数据库级搜索仍太慢。

- **现状**：作为金标准（gold standard）被用于验证启发式算法准确性【成熟·标准流程】；日常大规模搜索已被 BLAST 类启发式取代【过时·被取代】。

## 3\.4 启发式数据库搜索：FASTA 与 BLAST

### 3\.4\.1 为什么精确算法不够用

1980 年代，蛋白质数据库（PIR、Swiss\-Prot）从几千条增长到数十万条。对每条 query 做 Smith\-Waterman 全库比对，时间复杂度为 O\(query\_len × db\_total\_len × N\_queries\)，在当时的计算机上需要数天到数周。生物学家需要"分钟级"的搜索。于是产生了 **启发式（heuristic）** 思路：牺牲少量最优性，换取数量级的速度提升。

### 3\.4\.2 FASTA

- **论文**：Pearson \& Lipman, 1988, *PNAS* 85:2444–2448（doi:10\.1073/pnas\.85\.8\.2444）。

- **核心思想**：先找 query 与 db 序列之间共享的短 k\-mer（ktup，蛋白通常 1\~2，DNA 通常 4\~6），把这些 hot spot 连成对角线（diagonal），再在若干高分对角线附近做带空位的 Smith\-Waterman 局部比对。

- **地位**：第一个广泛使用的快速蛋白/DNA 搜索工具。

- **现状**：仍在使用但份额远低于 BLAST【成熟·标准流程】。

### 3\.4\.3 BLAST

- **论文**：Altschul et al\., 1990, *J Mol Biol* 215:403–410（doi:10\.1016/S0022\-2836\(05\)80360\-2）；Gapped BLAST/PSI\-BLAST 见 Altschul et al\., 1997, *Nucleic Acids Res* 25:3389–3402（doi:10\.1093/nar/25\.17\.3389）。

- **核心思想（seed\-and\-extend，种子\-扩展）**：

    1. **Seeding**：在 query 上取长度为 w 的连续单词（word，蛋白常用 w=3），在 db 中索引所有高分单词（hit）。

    2. **Ungapped extension**：从每个 hit 向两侧无空位扩展，累计打分；若超过阈值则保留。

    3. **Gapped extension**：对高分 hit 再做带空位的 DP 扩展（1997 年后版本）。

- **为什么有效**：真实同源序列几乎必然共享短而高度相似的种子；用短种子定位候选、再用 DP 精修，把 O\(mn\) 的全矩阵计算只花在少数候选位置上。

- **统计显著性**：用极值分布（extreme value distribution, EVD）计算 E\-value，即"在随机数据库中期望出现得分不低于本次比对的条数"，从而评估命中的可信度。这是 BLAST 成为生物信息学"标配"的关键——不仅快，还能给出统计解释。

- **局限**：

    - 启发式可能漏掉低复杂度种子不命中的远缘同源（false negative）。

    - 对 NGS 短读长的百万级数据，BLAST 仍然太慢。

- **现状**：BLASTp/n/x 仍是序列数据库搜索的事实标准【成熟·标准流程】；DIAMOND（Buchfink et al\., 2015, *Nat Methods* 12:59–60, doi:10\.1038/nmeth\.3176）在宏基因组大数据量下进一步把蛋白比对速度提升百倍，但算法框架仍是 seed\-and\-extend。

## 3\.5 多序列比对（MSA）

多序列比对（multiple sequence alignment, MSA）把三条以上序列对齐到同一矩阵，用于构建系统发育树、找保守 motif、设计引物、推断蛋白结构。

### 3\.5\.1 渐进式比对：Clustal 家族

- **论文**：Higgins \& Sharp, 1988, *Gene* 73:237–244（ClustalW；后续 Clustal Omega 见 Sievers et al\., 2011, *Mol Syst Biol* 7:539, doi:10\.1038/msb\.2011\.75）。

- **核心思想（progressive alignment，渐进比对）**：

    1. 先对所有序列两两做全局比对，得到距离矩阵。

    2. 用 neighbor\-joining 或 UPGMA 构建 guide tree（引导树）。

    3. 从最相似的一对开始，沿 guide tree 逐步"合并"已有比对。

- **为什么有效**：两两比对便宜，guide tree 决定了合并顺序；把多序列问题分解成一系列双序列/序列\-profile 比对。

- **局限**：早期错误会沿 guide tree 传播（once a gap, always a gap）；对远缘序列、含大量 indel 的序列效果差。

- **现状**：Clustal Omega 仍广泛使用【成熟·标准流程】。

### 3\.5\.2 MAFFT 与 MUSCLE：迭代精修 \+ 快速傅里叶变换

- **MAFFT**：Katoh et al\., 2002, *Nucleic Acids Res* 30:3059–3066（doi:10\.1093/nar/gkf436）。核心创新：用快速傅里叶变换（FFT）把序列向量化，快速识别同源区段；并引入迭代精修（iterative refinement），反复重排 guide tree 与比对，修正渐进比对的早期错误。速度和准确度都显著优于 ClustalW。

- **MUSCLE**：Edgar, 2004, *Nucleic Acids Res* 32:1792–1797（doi:10\.1093/nar/gkh340）。用 k\-mer 计数快速估算两两距离，构建初版 guide tree，再用二分对数期望（log\-expectation） profile 函数精修；在中等规模 benchmark 上同时比 MAFFT 更快、更准。

- **现状**：MAFFT 与 MUSCLE 是 2020 年代 MSA 的事实标准【成熟·标准流程】；MAFFT 在大基因组级（数千条序列）更常用，MUSCLE 在中小蛋白家族 benchmark 中常作 baseline。

### 3\.5\.3 其他重要 MSA

- **T\-Coffee**（Notredame et al\., 2000, *J Mol Biol* 302:205–217）：把多个双序列比对结果融合成一致性 library，准确度高但慢。

- **ProbCons**（Do et al\., 2005, *Genome Res* 15:330–340）：基于概率一致性的 MSA，理论扎实。

- **MAFFT\-XINS / Clustal Omega / UPP**：针对大规模、远缘、含片段序列的改进。

> **教学注**：MSA 至今没有"银弹"。准确度高度依赖序列相似度分布与 indel 长度分布；实际项目中常同时跑 2\~3 个工具对比，并在保守区做后续分析。
> 
> 

## 3\.6 NGS 读长比对：从 seed\-and\-extend 到 k\-mer 哈希与 BWT

NGS 时代，问题完全变了：不再是"1 条 query × 大数据库"，而是"**上亿条 100\~150 bp 短读长 × 一个人类基因组（\~3 Gb）**"。BLAST 的 seed\-and\-extend 在此规模下仍然太慢。新一代 aligner 的核心创新是**把参考基因组预处理成可快速查询的索引**，把每条读长的定位从 O\(db\) 降到近似 O\(read\_len\)。

### 3\.6\.1 k\-mer hashing

- **核心思想**：把参考基因组切成所有长度为 k 的 k\-mer，建立哈希表 `k-mer → 出现位置列表`。读长到来时，取其若干 k\-mer 直接哈希查表，得到候选位置，再做带空位 DP 扩展。

- **代表**：早期短读长 aligner如 Eland（Illumina 官方）、MAQ（Li et al\., 2008, *Genome Res* 18:1851–1858）；长读长 aligner minimap/minimap2 也用 k\-mer 作为 minimizer。

- **优点**：构建索引快、查询直接；**缺点**：索引内存大（人类基因组 k=11\~15 的哈希表常需几 GB 到十几 GB），重复 k\-mer 会命中海量位置。

### 3\.6\.2 FM\-index 与 Burrows\-Wheeler Transform

- **BWT（Burrows\-Wheeler Transform，Burrows \& Wheeler, 1994 技术报告）**：把一条基因组重排为一个字符串，使相同字符聚集；配合后缀数组（suffix array）与 C 函数、Occ 函数，可在 O\(\|read\|\) 时间内完成精确子串查询，而索引内存仅需 \~0\.5× 基因组大小（即人类基因组约 3 GB，BWT 索引约 3\~4 GB）。

- **FM\-index（Ferragina \& Manzini, 2000, *****FOCS*****）**：在 BWT 上增加元数据，使其可反向遍历序列、可做子串计数与定位，是现代短读长 aligner 的索引基石。

- **为什么有效**：把"在 3 Gb 文本里找一个 100 bp 子串"从线性扫描变成与文本长度无关的查询；索引体积小，可在单机内存中装载全人类基因组。

- **代价**：BWT 索引对"允许少量错配/indel"的精确匹配不直接支持，需要通过**种子定位 \+ 邻接搜索**（如 BWA 的 backtracking、Bowtie 的两阶段 trie 搜索）来扩展。

### 3\.6\.3 短读长 aligner：Bowtie 与 BWA

- **Bowtie**：Langmead et al\., 2009, *Genome Biol* 10:R25（doi:10\.1186/gb\-2009\-10\-3\-r25）。基于 FM\-index，用前缀树（trie）\+ 有界回溯（backtracking）在允许 ≤2\~3 个错配时快速定位 35\~50 bp 的 Illumina 读长。Bowtie2（Langmead \& Salzberg, 2012, *Nat Methods* 9:357–359）进一步支持 gap、长读长（100\~1000 bp）和局部比对。

- **BWA / BWA\-MEM**：Li \& Durbin, 2009, *Bioinformatics* 25:1754–1760（BWA\-backtrack, doi:10\.1093/bioinformatics/btp324）；BWA\-MEM 见 Li, 2013 arXiv:1303\.3997。BWA\-backtrack 用于 ≤100 bp 读长；BWA\-MEM 采用 seed\-and\-extend \+ 不对称间隙罚分，对 70 bp 至若干 Mb 的读长都适用，如今是 Illumina 短读长 WGS/WES 的事实标准。

- **为什么取代了 MAQ / Eland**：BWT 索引更小、更快、并行更好；BWA\-MEM 的 seed\-and\-extend 在准确率与速度间取得了 2010 年代以来最稳的平衡。

- **现状**：BWA\-MEM \+ Bowtie2 是 Illumina 短读长比对的【成熟·标准流程】。

### 3\.6\.4 长读长 aligner：Minimap2

- **论文**：Li, 2018, *Bioinformatics* 34\(18\):3094–3100（doi:10\.1093/bioinformatics/bty191）。

- **背景**：PacBio（\~10\~15% 错误率）和 Oxford Nanopore（\~5\~15% 错误率）长读长出现后，BWT 精确匹配不再适用——因为长读长含大量 indel 与错配，种子很容易"失配"。

- **核心思想**：

    1. 对参考基因组选 minimizer（一段 k\-mer 中按哈希值最小/最大者作为代表），建立稀疏哈希表；

    2. 读长同样提取 minimizer，通过坐标链（chaining）找到共线性候选区域；

    3. 在候选区域做基于 Z\-drop 的带状 DP（banded DP）\+ 凹形 gap 罚分，直接对齐整段长读长。

- **为什么有效**：长读长本身足够长，即使 10\~15% 错误率，仍能找到足够多 minimizer 锚定位置；chaining 把 O\(n²\) 比对压缩到候选区段内；凹形 gap 罚分容忍长读长特有的长 indel。

- **现状**：Minimap2 是 PacBio HiFi / ONT 长读长比对、基因组到基因组比对、cDNA/Direct RNA 比对的事实标准【成熟·标准流程】；后续有 LRA、winnowmap2、GraphMap2 等针对极端重复区的改进。

## 3\.7 三个关键问题的专门讨论

### 3\.7\.1 为什么精确算法后来大量被启发式算法替代？

这是一个"**问题规模爆炸 \+ 索引化预处理**"双重作用的结果。

1. **数据量爆炸**：1990 年 SW 对全库比对需要分钟级；2005 年后 NGS 一次实验产生上亿条读长，若用 Smith\-Waterman 逐条做 O\(mn\)，在人类基因组上单机需要数年。

2. **精确算法的常数与复杂度都无法妥协**：O\(mn\) 对 150 bp 读长 × 3 Gb 基因组，单条读长就是 4\.5×10¹¹ 次操作，上亿条直接不可行。

3. **启发式的"够用哲学"**：生物学上真正关心的同源/正确比对位置几乎总是被高分种子命中；启发式把 DP 只花在少数候选上，牺牲的 false negative 可以通过调整 seed 长度、种子数目、邻接搜索来控制。

4. **索引化让"精确查询"变便宜**：FM\-index / k\-mer 哈希把"找候选位置"变成 O\(read\_len\)，再配合 DP 精修，实质上是"**快速近似定位 \+ 局部精确比对**"的混合范式。

> **主流观点**：在"读长数量从 1 到 10⁸、基因组大小从 10⁶ 到 3×10⁹"的量级跃迁下，任何常数级优化都不够，必须改变算法复杂度。这是算法演化的根本驱动力。
> 
> 

### 3\.7\.2 为什么短读长和长读长需要不同的比对方法？

|维度|Illumina 短读长（\~150 bp）|PacBio HiFi / ONT 长读长（10 kb\~100 kb\+）|
|---|---|---|
|错误率|\~0\.1\~1%（错配为主）|HiFi \~0\.1\~1%；ONT \~5\~15%（indel 为主）|
|唯一定位能力|弱：重复区常多重映射|强：长读长可跨越重复单元|
|种子策略|短 k\-mer \+ 严格错配回溯（BWT）|稀疏 minimizer \+ 长 seed 容错（minimap2）|
|比对 DP|精确 Smith\-Waterman 局部精修|带状 DP \+ 凹形 gap 罚分容忍长 indel|
|主要工具|BWA\-MEM、Bowtie2|Minimap2、LRA、winnowmap2|
|主要用途|SNP/小 indel calling、RNA\-seq 定量|SV 检测、de novo 组装、T2T|

**核心原因**：短读长错误少但**太短**，必须靠精确索引快速定位；长读长错误多但**足够长**，可以容忍错误并靠长度锚定到正确位置。两种范式在"种子严格性 vs 种子稀疏性"上做出相反的选择。

### 3\.7\.3 现代 aligner 的计算瓶颈在哪里？

- **内存**：人类基因组 BWT 索引 \~3\~4 GB；minimap2 minimizer 索引 \~10\~20 GB；多线程并行后内存翻倍。这使得 aligner 是生信流水线中**内存最敏感**的一步。

- **I/O 与压缩**：BAM/CRAM 文件 TB 级读写；如今 CPU 不再是唯一瓶颈，磁盘带宽和 PCIe SSD 经常成为限制。

- **重复区与多映射**：人类基因组 \~50% 是重复序列，短读长在重复区大量多重映射；长读长在极端重复（如 centromeric α\-satellite、rDNA）仍会出现 chaining 歧义。winnowmap2、viraly 等通过"加权 minimizer"或"图形基因组"缓解。

- **比对质量与后续分析耦合**：现代 aligner 不再只输出坐标，还要输出 MAPQ、CIGAR、SA tag；这些元数据直接影响 variant calling 的准确性，因此 aligner 与下游工具（如 DeepVariant、Sniffles）紧密协同。

- **未来方向**：参考基因组从线性 FASTA 转向 pangenome 图（如 VG、Minigraph\-cactus），aligner 需在图结构上做序列到图的比对，这是 2020 年代仍在【快速发展】的方向。

## 3\.8 序列分析算法演化时间线

|年份|里程碑|论文 / 工具|核心创新|成熟度|
|---|---|---|---|---|
|1970|Needleman\-Wunsch|*J Mol Biol*|全局比对动态规划|【成熟·标准流程】|
|1978|PAM 矩阵|Dayhoff|进化外推打分矩阵|【过时·被取代】|
|1981|Smith\-Waterman|*J Mol Biol*|局部比对 DP|【成熟·标准流程】|
|1988|FASTA|Pearson \& Lipman, *PNAS*|k\-mer 热点 \+ 对角线 DP|【成熟·标准流程】|
|1990|BLAST|Altschul, *J Mol Biol*|seed\-and\-extend \+ E\-value|【成熟·标准流程】|
|1992|BLOSUM|Henikoff, *PNAS*|直接从 BLOCKS 统计打分|【成熟·标准流程】|
|1994|BWT|Burrows\-Wheeler|可逆字符串变换|理论基石|
|2002|MAFFT|Katoh, *NAR*|FFT \+ 迭代精修 MSA|【成熟·标准流程】|
|2004|MUSCLE|Edgar, *NAR*|log\-expectation \+ 快速距离|【成熟·标准流程】|
|2009|Bowtie / BWA|Langmead / Li, *Genome Biol*/*Bioinformatics*|FM\-index 短读长比对|【成熟·标准流程】|
|2016|Minimap/miniasm|Li, *Bioinformatics*|minimizer 哈希长读长比对|【成熟·标准流程】|
|2018|Minimap2|Li, *Bioinformatics*|通用长读长 \+ cDNA \+ 组装比对|【成熟·标准流程】|
|2020s|图基因组 aligner|VG、minigraph\-cactus 等|序列到 pangenome 图比对|【快速发展】|

---
