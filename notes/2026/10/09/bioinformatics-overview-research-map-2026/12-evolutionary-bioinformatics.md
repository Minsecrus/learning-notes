---
prev:
  text: "十一、群体遗传学与 GWAS"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/11-population-genetics-gwas"
next:
  text: "十三、微生物组与宏基因组学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/13-microbiome-metagenomics"
---

# 十二、进化生物信息学

## 12\.1 为什么需要进化视角

"Nothing in biology makes sense except in the light of evolution\."（Dobzhansky, 1973）。序列比对、基因家族、蛋白质结构预测、功能注释，本质上都在利用进化信息——同源序列携带了选择约束的印记。进化生物信息学就是把这个直觉变成可计算的工具。

## 12\.2 核心概念

### 12\.2\.1 直系同源与旁系同源（ortholog / paralog）

- **解决什么问题**：怎么判断两个基因是"同一个功能在不同物种"还是"同一物种内复制后分化"？

- **ortholog（直系同源）**：物种分化事件产生的同源基因（人血红蛋白 vs 小鼠血红蛋白）。通常功能保守。

- **paralog（旁系同源）**：基因复制事件产生的同源基因（人 α\-球蛋白 vs β\-球蛋白）。功能常分化。

- **outparalog / inparalog / xenolog**：基于复制与物种分化时序的细分。

- **典型数据库/工具**：OrthoDB、Ensembl Compara、OMA、eggNOG、InParanoid。

- **成熟度**：【成熟·标准流程】。

### 12\.2\.2 基因复制与水平基因转移（HGT）

- **基因复制（gene duplication）**：全基因组复制（WGD）、串联复制、逆转录转座、段复制。复制后命运：neofunctionalization（新功能）、subfunctionalization（亚功能化）、非功能化（pseudogene）。

- **水平基因转移（horizontal gene transfer, HGT）**：跨物种直接转移 DNA（细菌接合、转导、转化；真核中内共生基因转移、病毒插入）。HGT 是原核基因组演化的主要动力之一。

- **检测工具**：基于系统发育树不一致（如 RogueNaRok）、基于组成（异常 GC/k\-mer）、基于序列相似度异常。

- **成熟度**：【成熟·标准流程】在原核；【快速发展】在真核。

## 12\.3 系统发育树（phylogenetic tree）

### 12\.3\.1 基本概念

- **节点（node）：现存或祖先分类单元；分支（branch）：演化时间/替换数；根（root）：外类群定根；拓扑（topology）**：分支关系。

- **有根树 vs 无根树**：需要外类群（outgroup）或分子钟假设定根。

### 12\.3\.2 建树方法

|方法|核心思想|优点|缺点|成熟度|
|---|---|---|---|---|
|距离法（NJ, UPGMA）|先算成对距离再聚类|极快|不考虑具体替换模型；UPGMA 假设分子钟|【成熟·标准流程】（快速预览）|
|最大简约（MP）|找替换数最少的树|直观|长枝吸引（long\-branch attraction）|【过时·被取代】在多数分子数据中|
|最大似然（ML）|给定替换模型，找似然最大的树|统计严谨、可处理长序列|计算重；局部最优|【成熟·标准流程】|
|贝叶斯（Bayesian）|在后验分布上采样树|给后验概率、可纳入先验|MCMC 收敛诊断耗时|【成熟·标准流程】|

### 12\.3\.3 最大似然（maximum likelihood, ML）

- **核心思想**：选定替换模型（JC69、K2P、GTR、GTR\+Γ\+I），计算给定树时观测序列的似然，用启发式搜索（NNI、SPR、TBR）找最大似然树。

- **典型软件**：

    - **RAxML/RAxML\-NG**（Stamatakis et al\.）：大规模 ML 树，10⁴ 序列仍可算。【成熟·标准流程】

    - **IQ\-TREE/IQ\-TREE 2**（Minh et al\., 2020）：超快 ML，支持 ModelFinder（自动选模型）、超快速 bootstrap、位点特异模型。【成熟·标准流程】

    - **MEGA**（Kumar et al\.）：图形界面，教学与小数据集友好。【成熟·标准流程】

- **关键概念**：bootstrap（自展支持率）= 1000 次重抽样看分支重现率；\>70% 通常认为可接受。

- **局限**：模型误设、长枝吸引、组成异质性。

### 12\.3\.4 贝叶斯系统发育（Bayesian phylogenetics）

- **核心思想**：用 MCMC 从后验分布 P\(tree, θ \| data\) ∝ P\(data \| tree, θ\)·P\(tree, θ\) 采样。

- **典型软件**：MrBayes、BEAST/BEAST2（见下）、RevBayes。

- **优势**：直接给后验概率；可联合估计分化时间。

- **局限**：MCMC 收敛慢；先验敏感。

### 12\.3\.5 分子钟（molecular clock）与祖先重建

- **分子钟**：假设序列替换速率大致恒定，可用化石校准点（fossil calibration）把分支长度换成绝对时间。

    - 严格钟：速率恒定；

    - 宽松钟（relaxed clock）：速率在分支间变化（UCLN、UCAC）。

- **典型软件**：**BEAST/BEAST2**（Bouckaert et al\., PLOS Comp Biol 2014/2019）：贝叶斯时间树，用 MCMC 联合估计拓扑、分化时间、种群动态（skyline）。【成熟·标准流程】

- **祖先状态重建（ancestral state reconstruction, ASR）**：在树上推断祖先序列/性状。最大似然 ASR（PAML、Mesquite）、贝叶斯 ASR（BEAStr2、RevBayes）。

- **应用**：病毒溯源（HIV、SARS\-CoV\-2 时间树）、基因家族演化、性状演化。

## 12\.4 工具时间线

|年代|工具|作者|意义|
|---|---|---|---|
|1960s|距离法/MP|Edwards, Cavalli\-Sforza, Fitch|系统发育数量化|
|1981|邻接法 NJ|Saitou \& Nei|快速距离树|
|2003|MrBayes|Ronquist \& Huelsenbeck|贝叶斯 MCMC 普及|
|2004|RAxML|Stamatakis|大规模 ML|
|2007|BEAST|Drummond \& Rambaut|分子钟 \+ 时间树|
|2011|MEGA5/6|Kumar et al\.|教学 GUI|
|2015|IQ\-TREE|Nguyen et al\.|超快 ML \+ ModelFinder|
|2020|IQ\-TREE 2|Minh et al\., Mol Biol Evol|模型丰富、超快速 bootstrap|
|2022|BEAST 2\.x|Bouckaert et al\.|模块化插件生态|

## 12\.5 进化与其他领域的关系

- **与序列比对**：树是比对的副产品（如 Progressive Mauve、T\-Coffee 用树指导 progressive alignment）。

- **与蛋白语言模型**：MSA 编码了进化信息；ESM 等 PLM 隐式学习了 MSA 统计结构。

- **与比较基因组学**：树用于推断基因获得/丢失、选择压力（dN/dS，PAML codemr、HYPHY）。

- **与流行病学**：病毒时间树是暴发溯源的核心（Nextstrain 平台）。

> **事实**：ML \+ bootstrap 是现代分子系统发育的事实标准；BEAST 是时间树的事实标准。
> **争议**：在快速辐射演化（如适应辐射、超大规模基因组数据）中，单一树是否足够？共识是用系统发育网络（phylogenetic network）/树不一致分析（ASTRAL、PhyloNet）补充。
> 
> 

---
