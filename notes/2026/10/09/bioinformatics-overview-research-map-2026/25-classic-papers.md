---
prev:
  text: "二十四、统计陷阱专章：每一个都曾让真实研究得出错误结论"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/24-statistical-pitfalls"
next:
  text: "二十六、教材与学习资源"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/26-textbooks-learning-resources"
---

# 二十五、经典论文：理解生信历史最值得读的论文清单

下表按**年代从早到晚排序，覆盖比对 / 基因组测序 / 转录组 / GWAS / 单细胞 / 蛋白质结构 / AI 七大主线。每篇给出：核心贡献、历史意义、今天是否仍值得读、DOI（确查不到的标注"待核实"，未作编造**）。这不是"引用数最高榜"，而是**读懂学科脉络的必读起点**。

## 25\.1 序列比对与数据库奠基

|年|论文（作者·简称）|核心贡献|为何重要|今天仍值得读？|DOI|
|---|---|---|---|---|---|
|1970|Needleman \& Wunsch, *J Mol Biol* 48:443|首个动态规划全局序列比对|把"最优比对"变成可计算问题|强烈推荐（理解 DP 思想）|10\.1016/0022\-2836\(70\)90057\-4|
|1978|Dayhoff 等, *Atlas of Protein Sequence and Structure*|PAM 进化替换矩阵|第一个进化计分模型，BLAST 打分的祖先|值得读思想，原书偏老|待核实（丛书，非期刊 DOI）|
|1981|Smith \& Waterman, *J Mol Biol* 147:195|局部最优比对算法|灵敏度金标准，找局部同源|强烈推荐|10\.1016/0022\-2836\(81\)90087\-5|
|1988|Pearson \& Lipman, *PNAS* 85:2444|FASTA 快速数据库搜索|让全库搜索在当时机器上可行|值得读（理解种子\-启发式）|10\.1073/pnas\.85\.8\.2444|
|1990|Altschul 等, *J Mol Biol* 215:403|BLAST 与 E 值统计|生信"瑞士军刀"，高速\+统计显著|强烈推荐（读 E 值一节）|10\.1016/S0022\-2836\(05\)80360\-2|
|1992|Henikoff \& Henikoff, *PNAS* 89:10915|BLOSUM 替换矩阵|比 PAM 更实用的计分矩阵，BLAST 默认|值得读|10\.1073/pnas\.89\.22\.10915|
|1994|Krogh 等, *J Mol Biol* 235:1501|HMM 在序列分析中的系统应用|把概率模型引入序列建模|推荐（衔接 HMM 理论）|10\.1006/jmbi\.1994\.1104|
|1998|Durbin, Eddy, Krogh, Mitchison《Biological Sequence Analysis》（专著）|把概率建模统一讲透|序列建模"圣经"|强烈推荐（教材式阅读）|专著，无单篇 DOI|

## 25\.2 基因组测序、组装与映射

|年|论文（作者·简称）|核心贡献|为何重要|今天仍值得读？|DOI|
|---|---|---|---|---|---|
|1995|Fleischmann 等, *Science* 269:496|第一个自由生活基因组（流感嗜血杆菌）全鸟枪法|证明全基因组鸟枪法可行|值得读（历史意义）|10\.1126/science\.7542800|
|2001|International Human Genome Seq\. Consort\., *Nature* 409:860|人类基因组草图（公共计划）|HGH 里程碑，学科建制化|值得读导读部分|10\.1038/35057062|
|2001|Venter 等 \(Celera\), *Science* 291:1304|商业方人类基因组草图|公私竞赛推动技术|值得读（历史对照）|10\.1126/science\.1058040|
|2002|Kent, *Genome Res* 12:656|BLAT 快速转录本/基因组比对|长序列快速映射先驱|值得读|10\.1101/gr\.229202|
|2008|Zerbino \& Birney, *Genome Res* 18:821|Velvet 短读长 de Bruijn 组装|Illumina 时代组装经典|推荐（理解 DBG 组装）|10\.1101/gr\.074492\.107|
|2009|Li \& Durbin, *Bioinformatics* 25:1754|BWA：BWT 短读段映射|NGS 映射事实标准之一|强烈推荐|10\.1093/bioinformatics/btp324|
|2012|Bankevich 等, *J Comput Biol* 19:455|SPAdes 细菌/单细胞组装|短读长组装主力工具|按需读|10\.1089/cmb\.2012\.0021|
|2012|Langmead \& Salzberg, *Nat Methods* 9:357|Bowtie2 带空位短读段比对|高精度映射标准|按需读|10\.1038/nmeth\.1923|
|2018|Li, *Bioinformatics* 34:3094|minimap2 长/短读段快速映射|长读长时代映射主力|强烈推荐（读 minimizer 思想）|10\.1093/bioinformatics/bty560|
|2022|Nurk 等, *Science* 376:44|T2T\-CHM13 完整人类基因组|第一套无缺口人类基因组|强烈推荐（新基准）|10\.1126/science\.abj6987|

## 25\.3 转录组与差异表达

|年|论文（作者·简称）|核心贡献|为何重要|今天仍值得读？|DOI|
|---|---|---|---|---|---|
|1997|DeRisi 等, *Science* 278:680|宏阵列全基因组表达谱|表达谱时代开端|值得读（历史）|10\.1126/science\.278\.5338\.680|
|1999|Golub 等, *Science* 286:531|基因表达用于癌症分子分类|把聚类/分类引入肿瘤分型|推荐|10\.1126/science\.286\.5439\.531|
|2008|Mortazavi 等, *Nat Methods* 5:621|RNA\-seq 映射与定量（RPKM）|RNA\-seq 定量奠基|强烈推荐|10\.1038/nmeth\.1226|
|2008|Marioni 等, *Genome Res* 18:1509|RNA\-seq 技术重复性与统计|证明 RNA\-seq 可重复、可做 DE|推荐|10\.1101/gr\.079558\.108|
|2010|Robinson 等, *Bioinformatics* 26:139|edgeR 负二项差异表达|DE 标准统计工具之一|推荐（读统计模型）|10\.1093/bioinformatics/btp616|
|2012|Trapnell 等, *Nat Biotechnol* 31:46|Cuffdiff2 转录本差异分析|RNA\-seq 流水线标准|按需读|10\.1038/nbt\.2450|
|2014|Love 等, *Genome Biol* 15:550|DESeq2 离散收缩的 DE|DE 事实标准，统计严谨|强烈推荐|10\.1186/s13059\-014\-0550\-8|

## 25\.4 GWAS 与群体遗传

|年|论文（作者·简称）|核心贡献|为何重要|今天仍值得读？|DOI|
|---|---|---|---|---|---|
|1996|Risch \& Merikangas, *Science* 273:1516|论证全基因组遗传关联的未来|GWAS 理论预言|值得读（思想史）|10\.1126/science\.273\.5281\.1516|
|2005|Klein 等, *Science* 308:385|老年黄斑变性 GWAS|第一批成功 GWAS 之一|值得读|10\.1126/science\.1109589|
|2006|Price 等, *Nat Genet* 38:904|EIGENSTRAT 校正群体分层|解决 GWAS 最大统计陷阱之一|强烈推荐（呼应第二十四章）|10\.1038/ng1847|
|2007|Purcell 等, *Am J Hum Genet* 81:559|PLINK GWAS 分析工具箱|GWAS 事实标准软件|推荐（当手册读）|10\.1086/519795|
|2017|Visscher 等, *Am J Hum Genet* 101:5|GWAS 十年综述|系统理解 GWAS 现状与教训|强烈推荐（综述）|10\.1016/j\.ajhg\.2017\.06\.005|

## 25\.5 单细胞与多组学

|年|论文（作者·简称）|核心贡献|为何重要|今天仍值得读？|DOI|
|---|---|---|---|---|---|
|2009|Tang 等, *Nat Methods* 6:377|首个单细胞 RNA\-seq|开启细胞分辨率时代|值得读（历史）|10\.1038/nmeth\.1315|
|2014|Trapnell 等, *Nat Biotechnol* 32:381|Monocle 拟时序分析|把"轨迹"引入单细胞|推荐|10\.1038/nbt\.2859|
|2015|Macosko 等, *Cell* 161:1202|Drop\-seq 高通量单细胞|让 scRNA\-seq 规模化|强烈推荐|10\.1016/j\.cell\.2015\.05\.002|
|2015|Satija 等, *Nat Biotechnol* 33:495|Seurat / CCA 整合|单细胞分析标准工具|强烈推荐|10\.1038/nbt\.3192|
|2018|Butler 等, *Nat Biotechnol* 36:496|Seurat v3 跨数据集整合|批量去整合的事实标准|推荐|10\.1038/nbt\.4096|
|2018|Haghverdi 等, *Nat Biotechnol* 36:421|MNN 校正单细胞批次|批次效应的单细胞解法|推荐|10\.1038/nbt\.4091|
|2019|Stuart 等, *Cell* 177:1888|Seurat v3 整合与锚点|单细胞整合标准流程|强烈推荐|10\.1016/j\.cell\.2019\.05\.031|

## 25\.6 蛋白质结构与 AI

|年|论文（作者·简称）|核心贡献|为何重要|今天仍值得读？|DOI|
|---|---|---|---|---|---|
|2011|Marks 等, *PLoS One* 6:e28766|用直接耦合分析预测残基接触|证明进化共变可推结构，AlphaFold 前奏|推荐（理解 MSA 思想）|10\.1371/journal\.pone\.0028766|
|2020|Senior 等, *Nature* 577:706|AlphaFold1 深度学习结构预测|第一次用深度网络显著提升 CASP|推荐（看演进）|10\.1038/s41586\-019\-1923\-7|
|2021|Jumper 等, *Nature* 596:583|AlphaFold2 原子精度结构预测|接近实验精度，改写结构生物学|强烈推荐|10\.1038/s41586\-021\-03819\-2|
|2021|Rives 等, *PNAS* 118:e2016239118|ESM 蛋白质语言模型|把预训练表征引入分子生物学|推荐（读思路）|10\.1073/pnas\.2016239118|
|2021|Avsec 等, *Nat Methods* 18:1196|Enformer 从序列预测基因表达|基因组大模型开端|推荐|10\.1038/s41592\-021\-01252\-x|

## 25\.7 大型公共资源与数据库（基础设施必读）

|年|论文|核心贡献|为何重要|DOI|
|---|---|---|---|---|
|2000|Berman 等, *Nucleic Acids Res* 28:235|PDB 蛋白质结构数据库|结构数据底座|10\.1093/nar/28\.1\.235|
|2008|The Cancer Genome Atlas Res\. Net\., *Nature* 455:1061|TCGA 胶质母细胞瘤多维图谱|多组学癌症图谱开端|10\.1038/nature07385|
|2012|Dunham 等 \(ENCODE\), *Nature* 489:57|ENCODE 人类调控元件图谱|把"非编码区"纳入研究|10\.1038/nature11247|
|2013|Altshuler 等 \(1000 Genomes\), *Nature* 526:68|千人基因组计划|人群变异参考|10\.1038/nature15393|
|2013|Benson 等 \(GenBank\), *Nucleic Acids Res* 41:D36|NCBI 资源与 GenBank|序列数据库维护现状|10\.1093/nar/gks1128|

> **阅读建议（事实\+主流观点）：** 本科生不必逐字啃完。**第一遍读"经典算法与统计"系列（Needleman\-Wunsch、Smith\-Waterman、BLAST、DESeq2、Price 2006）以建立方法直觉**；**第二遍按自己感兴趣的方向（如单细胞、结构）精读对应奠基论文**；综述类（Visscher 2017、ENCODE）适合在有了基础后通读，建立全局图景。标注"待核实"的为丛书或历史文献的精确 DOI，使用前请以 PubMed/期刊官网复核。
> 
> 

---
