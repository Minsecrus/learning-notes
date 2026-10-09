---
prev:
  text: "二十五、经典论文：理解生信历史最值得读的论文清单"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/25-classic-papers"
next:
  text: "二十七、领域地图：生物信息学的树状知识图谱"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/27-field-map"
---

# 二十六、教材与学习资源

本章把教材按**主题 × 难度两条轴整理。难度标注：入门**（零到一、可自学）/ **本科**（本科生主用）/ **研究生**（需数理/编程基础）/ **查阅（工具书、按需翻）。课程同理标注。选书原则：先读一本"全景入门"建立地图，再按方向挑一两本深入，最后用论文与官方文档补前沿。**

## 26\.1 教材分类速查表

|主题|教材（作者/书名）|难度定位|特点|
|---|---|---|---|
|导论（全景）|Mount *Bioinformatics: Sequence and Genome Analysis*|本科|经典序列分析入门，偏实操|
|导论|Pevsner *Bioinformatics and Functional Genomics*|本科|图文并茂，生命科学背景友好|
|导论|Lesk *Introduction to Bioinformatics*|入门/本科|薄、易读，建立全景|
|算法|Jones \& Pevzner *An Introduction to Bioinformatics Algorithms*|本科/研究生|CS 视角，算法\+习题，经典|
|算法|Gusfield *Algorithms on Strings, Trees, and Sequences*|研究生/查阅|字符串算法的权威参考书|
|算法|Durbin, Eddy, Krogh, Mitchison *Biological Sequence Analysis*|研究生|概率建模/HMM/比对的理论基石|
|统计基因组学|Lange *Mathematical and Statistical Methods for Genetic Analysis*|研究生|群体遗传与统计建模|
|统计基因组学|P\. Baldi \& Hatfield *DNA Microarrays and Gene Expression*（或现代 RNA\-seq 综述）|研究生|表达数据统计|
|基因组学|Brown *Genomes* / 各版 *Genome* 教材|本科|基因组生物学主线，配生信视角|
|计算生物学|Hein 等 *Gene Trees in Species Trees* / Felsenstein *Inferring Phylogenies*|研究生/查阅|系统发育权威参考书|
|机器学习|Hastie, Tibshirani, Friedman *The Elements of Statistical Learning*（ESL）|研究生/查阅|统计学习"圣经"，免费 PDF|
|机器学习|James, Witten, Hastie, Tibshirani *An Introduction to Statistical Learning*（ISL）|本科|ESL 的友好入门版，有 Python/R 版|
|机器学习|Geron *Hands\-On Machine Learning with Scikit\-Learn, Keras \& TensorFlow*|入门/本科|动手为主，工程导向|
|系统生物学|Alon *An Introduction to Systems Biology: Design Principles of Biological Circuits*|本科/研究生|网络与反馈设计原理，易读|
|系统生物学|Palsson 等关于约束建模的教材（查阅）|研究生|代谢网络通量分析|
|单细胞|Luecken \& Theis 2019 *Mol Syst Biol* 单细胞分析综述|查阅|现代单细胞流程权威综述|
|编程|Python 数据科学手册（VanderPlas）/ R for Data Science（Wickham）|入门|工具入门，免费在线|

## 26\.2 教材使用建议（主流观点）

- **生命科学背景本科生**：从 **Pevsner 或 Lesk 的导论**入手建立全景；编程用 **R for Data Science / Python 数据科学手册**；统计用 **ISL** 而非直接啃 ESL。

- **想做算法/工具开发**：补 **Jones \& Pevzner** \+ **Gusfield**，再读 **Durbin 等的概率建模**。

- **想做统计/基因组学**：**Lange** 与 **Felsenstein** 是硬底子；实操上反复读 DESeq2、edgeR、PLINK 的官方 vignette 比啃教材更有效。

- **研究生阶段**：教材只作地图，**主战场转为一手论文（见第二十五章）\+ 官方文档 \+ 复现别人的结果**。

## 26\.3 优质公开课与在线资源

|机构/平台|课程/资源|内容|适合阶段|
|---|---|---|---|
|MIT OpenCourseWare|6\.047/6\.878 *Computational Biology: Genomes, Networks, Evolution*|算法\+基因组，讲义完整|本科高年级/研究生|
|Stanford|CS273/Statistics 课程；Andrew Ng 机器学习（CS229 公开讲义）|ML 与生信应用|本科/研究生|
|Harvard|Bioinformatics 系列公开课（如 Prof\. 的 CHIP\-seq/RNA\-seq 教程）|实操流水线|本科|
|Coursera / edX|多所大学 *Bioinformatics* 专项（如 UCSD 系列）|结构化、带练习|入门/本科|
|EMBL\-EBI|培训门户（Train online/在线课）、Workshops 材料|数据库、RNA\-seq、单细胞官方课|本科/研究生|
|NCBI|Bookshelf / *A Primer of Genome Science*、BLAST 官方教程|数据库与工具官方文档|入门/查阅|
|Broad Institute|GATK、单细胞（GATK Connect 等）官方教程|标准流水线|实操|
|公共社区|Rosalind\.info（生信算法编程刷题）、Biostars（问答）|边练边学|入门/本科|
|期刊课程|*Nature Methods*、*Genome Biology* 的 Protocol / 教程|现代方法的 step\-by\-step|研究生|

> **建议（主流观点）：** 公开课最大的价值不是"看完"，而是**边看边在自己的数据/公开数据集上动手跑**。一门 RNA\-seq 课，配合 GEO 里随便下载一个公开数据集做完整分析，收获远大于把十个讲座看完。
> 
> 

---
