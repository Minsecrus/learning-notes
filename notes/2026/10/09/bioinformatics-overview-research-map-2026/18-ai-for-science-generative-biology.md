---
prev:
  text: "十七、生物大模型与 Foundation Models"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/17-foundation-models"
next:
  text: "十九、精准医疗与临床生物信息学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/19-clinical-bioinformatics"
---

# 十八、AI for Science 与生成式生物学

## 18\.1 "读懂生命"与"设计生命"

前几章主要是"读懂"（从序列预测结构/表达/表型）。本章是"设计"——从目标功能反推序列/结构。两者的方法论不同：

- **读懂（prediction）**：输入 x → 输出 y，监督/自监督回归。

- **设计（design/generation）**：给定目标 y（结合某配体、催化某反应），生成 x。这是逆问题（inverse problem），通常不适定（ill\-posed）。

## 18\.2 生成式建模基础

### 18\.2\.1 扩散模型（diffusion model, DDPM）

- **核心思想**：前向过程逐步加高斯噪声到数据；反向过程学习从噪声去噪回数据。训练简单、样本质量高、可条件控制。

- **生物中的关键变体**：

    - 在**连续坐标**上做扩散（如蛋白骨架的 SE\(3\) 等变去噪）；

    - 在**离散 token** 上做扩散（如序列扩散）；

    - 条件扩散（给定配体、给定 motif、给定对称）。

### 18\.2\.2 逆折叠（inverse folding）

- **问题**：给定骨架结构 x，找序列 s 使折叠到 x。

- **传统方法**：Rosetta 能量函数 \+ Monte Carlo，慢且成功率低。

- **深度学习**：直接学 P\(s \| x\)。

    - **ProteinMPNN**（Dauparas et al\., Science 2022, 378:49–56, DOI: 10\.1126/science\.add2187）：消息传递神经网络，图结构上自回归生成序列。native sequence recovery \~52%，实验成功率远超 Rosetta。【成熟·标准流程】

    - **ESM\-IF1**（Hie et al\.）：基于 ESM 结构的逆折叠。

    - **AlphaFold 蒸馏**：把 AF 的结构知识蒸馏到设计模型。

### 18\.2\.3 序列↔结构双向

- **Sequence\-to\-structure**：AF2/AF3、ESMFold。

- **Structure\-to\-sequence**：ProteinMPNN、ESM\-IF。

- **端到端联合**：RFdiffusion（结构扩散）\+ ProteinMPNN（序列）\+ AF2（过滤自洽）= 现代蛋白设计标准三段式 pipeline。

## 18\.3 代表工具

### 18\.3\.1 RFdiffusion（Watson et al\., Nature 2023）

- **解决什么问题**：从头设计蛋白骨架（de novo backbone design）。

- **核心思想**：把 RoseTTAFold 结构预测网络微调到 SE\(3\) 等变扩散去噪任务，从随机噪声出发逐步"去噪"出一个可折叠的蛋白骨架。

- **输入输出**：条件（目标对称、配体、motif 位置、靶蛋白界面）→ 骨架坐标。

- **为什么有效**：SE\(3\) 等变保证旋转/平移不改变结果；在数百万自然结构上训练，学到了"什么样的骨架能折叠"。

- **扩展**：

    - **RFdiffusion All\-Atom**（Krishna et al\., Science 2024, DOI: 10\.1126/science\.adl2528）：扩展到全原子、小分子配体结合口袋设计。

    - **RoseTTAFold Sequence\-Space Diffusion / ProteinGenerator**（Lisanza et al\., Nat Methods 2024）：在序列空间同时生成序列与结构。

- **成熟度**：【成熟·标准流程】（在 IPD/Baker 生态），【快速发展】（学术扩散）。

- **局限**：骨架对了不代表功能对；功能（结合、催化）仍需筛选；长序列、多域蛋白成功率仍低。

### 18\.3\.2 ProteinMPNN（见 18\.2\.2）

- **地位**：与 RFdiffusion 配套的 de facto 序列设计器。

- **改进**：ESM\-IF、OmegaFold 反向、基于 RL 的优化（RSO, Science 2024）。

### 18\.3\.3 ESM / ESM3 用于设计

- **ESM\-2**：zero\-shot fitness landscape、突变效应预测。

- **ESM\-3**（Hayes et al\., Science 2025）：多模态生成，可按提示（如"设计一个荧光蛋白"）生成序列，实验验证了亮度接近/超过自然荧光蛋白。

- **ProGen2**（Nijkamp et al\., Cell Systems 2023）：纯自回归序列生成，控制标签（家族、功能）。

### 18\.3\.4 Chroma、Boltz、Chai 等新势力

- **Chroma**（Generate Biomedicines, Ingraham et al\. 2023）：序列—结构联合扩散生成。

- **Chai\-1 / Boltz\-1**（2024–2025）：开源复合物结构预测，对标 AF3。

- **待核实**：截至 2026 年这些模型的实验验证与临床转化程度，建议跟踪 Nature Methods / BioRxiv 最新论文。

## 18\.4 应用方向

|方向|方法|现状|
|---|---|---|
|从头蛋白设计（de novo binder）|RFdiffusion \+ ProteinMPNN \+ AF2 过滤|已可设计 nM 级结合蛋白（如 IL\-20、GPCR 结合剂）|
|抗体设计|抗体专用逆折叠、PLM、CDR 设计|快速发展；已有进入临床管线的 AI 设计抗体|
|酶设计|RFdiffusion 口袋 \+ 序列设计 \+ 实验筛选|快速发展；成功率仍低，需高通量筛选|
|小分子/药物生成|扩散模型（分子扩散）、JODO、Rationale|快速发展；临床转化早期|
|疫苗设计|抗原表位设计、纳米颗粒展示|已有 COVID 疫苗设计案例|

## 18\.5 讨论：读懂 vs 设计

> **事实**：AlphaFold 让"从序列读结构"几乎免费；RFdiffusion\+ProteinMPNN 让"从目标读序列"从 Rosetta 的月级降到天级。
> **主流观点**：设计比预测难一个量级——预测有明确答案（实验结构），设计没有唯一答案，且需要满足折叠、表达、稳定、功能、免疫原性等多重约束。
> **研究者推测**：
> 
> 1. "读"与"设计"会走向闭环：设计 → 合成 → 实验测量 → 反馈训练（active learning）。
> 
> 2. 生成式模型的"幻觉"（设计出序列但不折叠）仍是主要瓶颈；自洽性过滤（AF2 重折叠）已是标配但不完美。
> 
> 3. AI 设计蛋白的临床转化需要 5–10 年尺度，不能只看论文里的"成功率"。
> 
> 

---
