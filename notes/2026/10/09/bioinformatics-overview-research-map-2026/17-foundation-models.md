---
prev:
  text: "十六、机器学习在生物信息学中的应用"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/16-machine-learning"
next:
  text: "十八、AI for Science 与生成式生物学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/18-ai-for-science-generative-biology"
---

# 十七、生物大模型与 Foundation Models

## 17\.1 什么是生物 Foundation Model

生物 Foundation Model（基础模型）指在大规模未标注生物数据上自监督预训练、可微调/提示到下游任务的大模型。它借鉴 NLP 的 GPT/BERT 范式，但把"token"换成生物符号（碱基、氨基酸、基因、细胞）。

## 17\.2 预训练范式

|范式|思想|代表|适合|
|---|---|---|---|
|掩码语言模型（MLM, masked language modeling）|随机掩掉 15% token，预测被掩内容|BERT、ESM\-2、DNABERT、Geneformer|编码器表征；分类/标注|
|自回归建模（autoregressive）|从左到右预测下一个 token|GPT、ProGen、Evo|生成；序列设计|
|对比学习（contrastive learning）|拉近正样本对、推远负样本对|CLIP、scVI 对比变体、多模态对齐|跨模态对齐|
|去噪扩散（diffusion）|加噪再去噪|RFdiffusion、Chroma|连续结构/分子生成|

- **为什么自监督有效**：生物序列/表达数据本身携带了进化、调控、细胞状态的统计结构；不需要人工标注，"预测下一个 token"就能学到表征。

- **成熟度**：【快速发展】。

## 17\.3 按模态分类

### 17\.3\.1 DNA 语言模型

|模型|机构/作者|时间|规模|特点|
|---|---|---|---|---|
|DNABERT|Ji et al\.|2021|110M|k\-mer 分词；早期代表|
|DNABERT\-2|Zhou et al\.|2024|\~500M|BPE 分词；28 数据集基准|
|Nucleotide Transformer|InstaDeep / 谷歌，Dalla\-Torre et al\.|Nat Methods 2025（22\(2\):287…）|50M–2\.5B|多物种基因组；zero\-shot 变异效应|
|HyenaDNA|Nguyen et al\.|2023/2024|1M–50M|Hyena 算子；长上下文|
|Evo|Arc Institute / Stanford, Hie et al\.|Science 2024, DOI: 10\.1126/science\.ado9336|7B|StripedHyena 架构；131k 上下文；原核全基因组|
|Evo 2|Arc Institute / NVIDIA, Hie et al\.|Nature 2026（Arc Institute 官方公告）|7B / 40B|1 Mb 上下文；跨三域生命；9\.3T 碱基对训练|

- **核心问题**：DNA 模型学的是"序列统计"——motif、剪切信号、密码子偏好、调控语法；但它是否真正"理解"基因调控网络？【有争议】。

- **事实**：Nucleotide Transformer 在 zero\-shot 变异效应预测上超过经典模型；Evo 可生成功能性 DNA 并预测 BRCA1 等临床变异效应。

- **争议**：benchmark 数据泄漏（训练集与测试集同源基因组）；跨物种泛化仍弱。

### 17\.3\.2 RNA Foundation Models

- **现状**：专门的 RNA 大模型比 DNA/蛋白少。RNA 的挑战在于二级结构、非编码 RNA、RNA 修饰。

- **代表**：RNA\-FM（上海科技大学，2022）、RNAErnie、Uni\-RNAlm。

- **成熟度**：【快速发展】。RNA 建模受限于高质量注释少、结构数据少。

- **待核实**：截至 2026 年是否出现类似 ESM 级别的"RNA GPT"，文献仍在快速变化，建议读者关注 arXiv q\-bio\.RM 与 NeurIPS/ICML 2025–2026 论文。

### 17\.3\.3 蛋白质语言模型（PLM）

|模型|机构|时间|规模|特点|
|---|---|---|---|---|
|ESM\-1b|Meta AI, Rives et al\.|PNAS 2021|650M|首个大规模 PLM|
|ProtTrans 系列（ProtBERT/ProtT5）|图宾根/Rostlab|2021|至 3B|T5 编码器—解码器；多语言模型集成|
|ESM\-2|Meta AI, Lin et al\.|Science 2023|15B|规模化涌现结构/功能|
|ESM\-3|EvolutionaryScale, Hayes et al\.|Science 2025|1\.4B–98B|序列\+结构\+功能多模态生成|
|ProGen|Salesforce, Madani et al\.|Nat Biotechnol 2023|1\.2B–13B|自回归生成；控制标签|
|ProGen2|Salesforce, Nijkamp et al\.|Cell Systems 2023|6\.4B|超 10 亿序列；零样本 fitness|

- **为什么 PLM 成功**：UniProt/UniRef 有数十亿条自然序列，进化信号丰富；MSA 隐式被学到。

- **关键论文**：

    - ESM\-2: Lin Z\. et al\. "Evolutionary\-scale prediction of atomic\-level protein structure with a language model\." Science 379, 1123–1130 \(2023\)\.

    - ESM\-3: Hayes T\. et al\. "Simulating 500 million years of evolution with a language model\." Science \(2025\)\. DOI: 10\.1126/science\.ads0018\.

    - ProGen: Madani A\. et al\. "Large language models generate functional protein sequences across diverse families\." Nat Biotechnol 41, 1096–104 \(2023\)\.

### 17\.3\.4 单细胞 Foundation Models

|模型|机构/作者|时间|训练数据|特点|
|---|---|---|---|---|
|scBERT|Yang et al\.|2022|百万级细胞|早期单细胞 Transformer|
|Geneformer|Broad, Theodoris et al\.|Nature 2023, 618:616–624, DOI: 10\.1038/s41586\-023\-06139\-9|\~3000 万单细胞转录组|rank\-value 编码；网络生物学|
|scGPT|多伦多大学, Cui et al\.|Nat Methods 2024|\>3300 万细胞|生成式预训练；多组学|
|scFoundation|清华大学, Hao et al\.|2023/2024|数千万细胞|1B 参数；扰动预测|
|UCE \(Universal Cell Embeddings\)|Rosen et al\.|2024|跨物种|跨物种嵌入|
|GeneCompass|国内团队, Yang et al\.|Cell Research 2024/2025|\>1\.2 亿人鼠细胞|知识注入；跨物种|

- **关键创新**：Geneformer 用 rank\-value encoding（按表达排序的基因序列），避免了原始 count 归一化的难题；scGPT 把基因当 token、细胞当"句子"。

- **争议**：

    - **Benchmark 泄漏**：2026 年 arXiv:2607\.20572 等工作指出，单细胞 FM 的 zero\-shot 基准与预训练语料同源（均来自公共仓库），部分"优异表现"可能反映训练集曝光而非真正泛化。

    - **Batch effect 未解**：2025 年底 bioRxiv 工作显示批次信号仍残留在嵌入中。

    - **注意力 ≠ 调控**：2026 年 arXiv:2602\.17532 发现注意力主要捕获共表达，而非独特调控信号。

- **成熟度**：【快速发展】。研究工具可用，临床转化仍早。

### 17\.3\.5 多模态生物医学模型

- **代表**：

    - **BiomedCLIP**（Microsoft, 2023）：医学影像—文本对比学习。

    - **RadFM / BioBERT / PMC\-LLaMA**：医学文本。

    - **PathLMs**：病理影像 foundation model。

    - **Multimodal single\-cell**：scVI 家族（totalVI、scTWIN）；scGPT 多组学扩展。

- **成熟度**：【快速发展】。

## 17\.4 这些模型究竟学到了什么？

这是本章最核心的问题。基于现有证据，可以分层回答：

1. **学到了进化统计结构**（事实）：PLM 内部表示重现了进化相关性、二级结构、接触图。ESM\-2 15B 涌现出原子级结构预测能力，这不是记忆，而是对"哪些序列能折叠"的统计规律的压缩。

2. **学到了调控语法**（部分事实）：DNA LM 在 splice 位点、启动子、motif 突变效应上与实验相关；但跨细胞类型、跨物种的泛化仍弱。

3. **学到了细胞状态流形**（事实，但被夸大）：scGPT/Geneformer 嵌入能区分细胞类型、轨迹；但 2026 年的审计显示它们在扰动预测、可解释性上并未显著超越 PCA \+ 线性模型。

4. **没有真正"理解"因果机制**（主流观点）：自监督模型学的是关联，不是机制。它预测得准，不代表它知道为什么。

5. **benchmark 泄漏与夸大**（正在被严肃审查）：

    - 单细胞 FM：训练集与基准同源（arXiv:2607\.20572）；

    - 基因组 LM：保守区与调控元件基准与训练基因组重叠；

    - PLM：CASP 等结构预测基准与 PDB 训练集时间分割常不严格。

> **事实**：ESM\-2 在 CASP15 上的结构预测能力是真实的；DeepVariant 在 PrecisionFDA 上的精度是真实的；RFdiffusion 设计的蛋白在晶体学/功能实验中可折叠是真实的。
> **主流观点**：Foundation Model 把"预训练—微调"范式带入生物，大幅降低了小数据任务的门槛；但它不是炼金术，失败案例（如跨族群 PRS、单细胞扰动预测）与成功案例一样多。
> **研究者推测**：未来 3–5 年，foundation model 会从"单一模态大模型"走向"多模态、可因果、可干预"的数字孪生细胞；但这需要大规模扰动数据（如 Perturb\-seq）和更严格的泛化基准。
> 
> 

## 17\.5 Foundation Model 对传统 Pipeline 的影响

|传统 pipeline 步骤|FM 影响|
|---|---|
|Variant calling|DeepVariant 已 CNN 化；FM 化刚起步|
|序列注释（结构/功能）|ESMFold/AF3 替代部分实验|
|单细胞分析（聚类、注释、轨迹）|scGPT/Geneformer 提供预训练嵌入，但 scVI 仍是概率基线|
|调控变异预测|Enformer/NT 替代手工 motif 扫描|
|药物发现|PLM \+ 扩散模型改变蛋白设计流程（见十八章）|

> **结论**：FM 不会一夜之间替代所有工具，但正在把"针对每个任务单独训模型"变成"一个大模型 \+ 轻量微调"。教学上仍需掌握传统方法，因为 FM 的失败模式仍需传统统计/物理知识诊断。
> 
> 

---
