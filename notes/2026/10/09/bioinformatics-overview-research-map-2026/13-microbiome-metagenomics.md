---
prev:
  text: "十二、进化生物信息学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/12-evolutionary-bioinformatics"
next:
  text: "十四、多组学整合"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/14-multiomics"
---

# 十三、微生物组与宏基因组学

> 关键词：16S / shotgun metagenomics / metatranscriptomics；reads → taxonomy → abundance → diversity → functional annotation；alpha diversity / beta diversity / OTU / ASV；QIIME2 / DADA2 / Kraken / MetaPhlAn / HUMAnN；统计与因果推断。
> 
> 

人体/环境里数万亿微生物构成**微生物组（microbiome）**，它们参与代谢、免疫、疾病。宏基因组学（metagenomics）直接从样本里抽全部 DNA 测序，绕开"培养"——这是该领域的方法论革命。

## 13\.1 三种技术路线

|技术|测什么|分辨率|成本/深度|成熟度|
|---|---|---|---|---|
|**16S rRNA 扩增子**|只扩增 16S 核糖体 RNA 基因的可变区|粗（多到属，少数到种）|便宜、样本量大|【成熟·标准流程】|
|**shotgun metagenomics（鸟枪法宏基因组）**|样本中全部基因组 DNA|高（到菌株、可推功能基因）|贵、数据大|【成熟·标准流程】|
|**metatranscriptomics（宏转录组）**|样本中的 RNA（活跃表达）|谁在"干活"，而非谁"在"|更贵、易降解|【快速发展】|

## 13\.2 标准分析流程（pipeline）

```
原始 reads → 质量控制/去宿主 → [聚类/去噪] → 分类注释 → 物种丰度表
     → α/β 多样性 → 差异物种 → 功能注释 → 统计关联
```

1. **reads**：测序原始读段。

2. **taxonomy（物种注释）**：把每条 read 对应到分类阶元（界门纲目科属种）。16S 用参考库（SILVA/Greengenes）；鸟枪用比对（Kraken）或标记基因法（MetaPhlAn）。

3. **abundance（丰度）**：得到"属/种 × 样本"的丰度表。

4. **diversity（多样性）**：见 13\.3。

5. **functional annotation（功能注释）**：把微生物基因映射到通路/基因家族（如 HUMAnN 把鸟枪数据归到 MetaCyc 通路）。

## 13\.3 核心概念：OTU / ASV / α 多样性 / β 多样性

- **OTU（Operational Taxonomic Unit，操作分类单元）**：早期做法——把相似性 ≥97%（16S）的 reads 聚成一簇，当作一个"种"。【过时·被取代】，正被 ASV 取代。

-  **ASV（Amplicon Sequence Variant，扩增子序列变异）** ：用 **去噪（denoising）** 代替硬聚类（DADA2 的核心），分辨到单核苷酸差异，可重复、可跨研究比较。【成熟·标准流程】。

- **alpha diversity（α 多样性）：单个样本内部**的多样性。

    - 丰富度 richness（有多少种）、Shannon / Simpson 指数（兼顾丰富度与均匀度）、Faith's PD（进化多样性）。

- **beta diversity（β 多样性）：样本之间**的差异。

    - Bray–Curtis、Jaccard、UniFrac（加权/未加权，考虑进化距离）距离矩阵 → PCoA/NMDS 排序图 → PERMANOVA 检验组间差异。

## 13\.4 工具链

|工具|做什么|文献|成熟度|
|---|---|---|---|
|**QIIME 2**|端到端 16S/扩增子流程框架（插件化、可追溯）|Bolyen et al\., *Nat Biotechnol* 2019;37:852–857|【成熟·标准流程】|
|**DADA2**|从 16S reads 去噪得到 ASV（QIIME2 常用后端）|Callahan et al\., *Nat Methods* 2016;13:581–583|【成熟·标准流程】|
|**Kraken 2**|基于精确 k\-mer 比对做鸟枪 read 物种注释（极快）|Wood et al\., *Genome Biol* 2019|【成熟·标准流程】|
|**MetaPhlAn**|用进化标记基因（clade\-specific markers）稳健估计物种丰度|Truong et al\., *Genome Res* 2015；Beghini et al\., *NAR* 2021（v3）|【成熟·标准流程】|
|**HUMAnN**|把宏基因组/宏转录组归到基因家族与通路丰度|Franzosa et al\.|【成熟·标准流程】|

## 13\.5 微生物组研究的统计与因果推断问题

微生物组研究（尤其"菌群与疾病"）近年反复被质疑"可重复性差、关联不等于因果"。关键陷阱：

|问题|解释|性质|
|---|---|---|
|**组成性数据（compositional data）**|丰度是相对的（总和恒为 1），一个菌增多会"挤"别人，造成伪相关|事实；需用 ALR/CLR 变换等组成分析|
|**批次效应 / 污染**|提取试剂、测序批次、阴性对照缺失导致大量假信号|事实|
|**样本量小 \+ 高维**|几百样本 × 上万特征，严重过拟合|事实|
|**多样性指标的混淆**|α 多样性常随测序深度、饮食、年龄变化|事实|
|**关联 ≠ 因果**|"患者菌群不同"不代表"菌群致病"；可能是疾病改变了菌群|主流观点；需粪菌移植 FMT、无菌动物、纵向设计验证|
|**过度宣称机制**|从丰度差异跳到"某菌通过某代谢物治疗某病"|研究者推测；大量早期"明星菌"后期被重复失败|
|**p 值追逐**|多重检验（成千上万菌）未严格控制 FDR|事实|

> **主流观点**：微生物组领域正从"描述性关联"走向**纵向队列 \+ 干预实验 \+ 因果推断方法（如中介分析、孟德尔随机化思路）**；早期很多"菌群—疾病"强关联需谨慎对待，部分被高估。【有争议或未证明价值】：不少跨人群的"菌群诊断"模型在独立队列上失效。
> 
> 

---
