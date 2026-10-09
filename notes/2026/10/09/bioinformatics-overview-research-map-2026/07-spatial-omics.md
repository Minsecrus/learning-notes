---
prev:
  text: "六、单细胞生物信息学：从实验到计算"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/06-single-cell"
next:
  text: "八、蛋白质生物信息学"
  link: "/notes/2026/10/09/bioinformatics-overview-research-map-2026/08-protein-bioinformatics"
---

# 七、空间组学（Spatial Omics）

> 单细胞 RNA\-seq 把细胞从组织里拆出来，但**丢失了空间位置**。空间组学要回答："这些细胞在组织里到底怎么排布、怎么相邻、怎么互作？"
> 
> 

---

## 7\.1 为什么 spatial transcriptomics 出现

**解决什么问题？** 传统 scRNA\-seq 需要把组织消化成单细胞悬液，细胞在切片上的位置完全丢失。但组织不是细胞的随机混合：肿瘤有"肿瘤核心\-浸润前沿"，大脑有"皮层分层"，肝脏有"门管区\-中央静脉分区"。这些空间结构直接决定功能。

**为什么有效？** 两类技术路线在 2016–2018 年成熟：

1. **成像型（imaging\-based）**：在组织切片上直接用荧光探针原位看 RNA（MERFISH、seqFISH、Xenium、CosMx）。

2. **测序型（sequencing\-based）**：在带 barcode 的载玻片上捕获组织释放的 RNA，再测序（Ståhl 等, *Science* 2016 的原始 Spatial Transcriptomics；10x Visium；Slide\-seq；Stereo\-seq）。

**与 scRNA\-seq 的关系**：空间数据不是要取代 scRNA\-seq，而是**互补**。常用策略是"用 scRNA\-seq 拿到细胞类型参考，用空间数据拿到位置信息"。

---

## 7\.2 主流平台对比：一张表看懂

|平台|类型|分辨率|基因数|检测方式|优势|局限|成熟度|
|---|---|---|---|---|---|---|---|
|**10x Visium \(经典\)**|测序型|55 μm spot（\~1–10 细胞）|全转录组（polyA）|载玻片上 oligodT 捕获 \+ 测序|全转录组、流程成熟|spot 内多细胞混合，需去卷积|【成熟·标准流程】|
|**10x Visium HD**|测序型|2 μm bin（亚细胞）|全转录组|同上|分辨率大幅提升|计算量巨大；FFPE 需 probe|【快速发展】|
|**Stereo\-seq \(华大\)**|测序型|500 nm 直径（nanoball）|全转录组（polyA 或 probe）|DNA nanoball 阵列|视野大（厘米级）、分辨率高|需要 MGI 测序仪|【快速发展】|
|**Slide\-seq / Slide\-seqV2**|测序型|10 μm（\~1 细胞）|全转录组|磁性 bead 阵列|单细胞级测序型|灵敏度低|【过时·被取代】（被 Visium HD/Stereo\-seq 超越）|
|**MERFISH**|成像型|单细胞/亚细胞|几百到几千（panel）|多重荧光原位杂交|原位、亚细胞|panel 大小有限、需要定制|【成熟·标准流程】（科研版）|
|**seqFISH / seqFISH\+**|成像型|亚细胞|10k\+ 理论|多重 FISH 编码|基因数多|实验复杂|【快速发展】|
|**10x Xenium**|成像型|亚细胞|5K 基因 panel|探针 \+ 原位扩增 \+ 成像|商业化、FFPE 兼容、单细胞分割|panel 固定|【成熟·标准流程】|
|**Nanostring CosMx**|成像型|亚细胞|6K 基因 panel|寡核苷酸探针 \+ 循环成像|FFPE 成熟、多组织验证|背景较高|【成熟·标准流程】|

**2025 年关键 benchmark**（Wang 等, *Nat Commun* 2025, doi:10\.1038/s41467\-025\-64292\-x）在人类肿瘤上系统比较 Visium HD FFPE / Stereo\-seq v1\.3 / Xenium 5K / CosMx 6K：

- 测序型中 **Visium HD FFPE** 灵敏度高于 Stereo\-seq v1\.3；

- 成像型中 **Xenium 5K** 灵敏度高于 CosMx 6K；

- 但两者在**粗粒度细胞类型比例估计上结果接近**——说明对大多数生物学问题，平台选择对结论影响比想象中小。

另一项 2026 年跨 6 种癌症的技术比较（PMC12888464）发现：Xenium 背景更低、基因\-组织学一致性更好；CosMx 因为有膜染色，细胞分割更合理。**粗粒度细胞分类对上游平台差异相对鲁棒**。

---

## 7\.3 Spot\-based vs Single\-cell resolution；Imaging\-based vs Sequencing\-based

这是两组正交的分类维度，必须分清。

### 7\.3\.1 按分辨率分

- **Spot\-based（spot 级）**：Visium 经典版（55 μm spot，每 spot 多细胞）。优点是全转录组；缺点是**每 spot 是混合**，需要 deconvolution（去卷积，如 RCTD、Stereoscope、cell2location）推断每 spot 内的细胞类型比例。

- **Single\-cell resolution（单细胞分辨率）**：Visium HD、Stereo\-seq、Xenium、CosMx、MERFISH。每个"数据单元"接近单个细胞（或亚细胞），不需要去卷积，但**仍需 cell segmentation（细胞分割）**——因为成像型平台给的是"转录本点"，需要把点分到不同细胞里。

### 7\.3\.2 按检测原理分

- **Imaging\-based（成像型）**：Xenium、CosMx、MERFISH、seqFISH。

    - 优点：亚细胞定位、直接看 RNA 点、FFPE 兼容。

    - 缺点：**panel 有限**（5–6k 基因），不是全转录组；需要高分辨率显微镜；图像数据体量大。

- **Sequencing\-based（测序型）**：Visium、Stereo\-seq、Slide\-seq。

    - 优点：全转录组（polyA 捕获）、无 panel 限制、可发现新基因。

    - 缺点：经典版 spot 多细胞；灵敏度比成像型低；需要 NGS 测序仪。

**选择建议**（基于 2025–2026 benchmark 共识）：

- 想探索全转录组、不追求单细胞分辨率 → Visium HD。

- 想做罕见组织/大视野、有 MGI 平台 → Stereo\-seq。

- 想做亚细胞结构、已有 scRNA\-seq 参考、聚焦已知 panel → Xenium 或 CosMx。

- 两者结合是 2025–2026 主流策略：测序型做 unbiased 发现，成像型做高验证。

---

## 7\.4 空间数据特有的计算问题

普通 scRNA\-seq 流水线搬到空间数据上**远远不够**。空间数据有五个独有问题。

### 7\.4\.1 Spatial domain detection（空间域识别）【快速发展】

- **解决什么问题？** 把组织切片在空间上分成"解剖/功能区域"（如肿瘤核心、浸润边界、正常腺体）。

- **与普通聚类的区别**：普通聚类只看表达；空间域要求**相邻位置倾向于同一域**。

- **典型工具**：

    - **BayesSpace**（Zhao 等, *Nat Biotechnol* 2021）：贝叶斯空间先验，把 spot 聚类到 subspot 分辨率。【成熟】

    - **SpaGCN**（Hu 等, *Nat Methods* 2021, doi:10\.1038/s41592\-021\-01255\-8）：图卷积网络整合表达 \+ 位置 \+ 组织学图像。【成熟】

    - **STAGATE**（Dong 等, *Nat Commun* 2022）：自适应图注意力自编码器。

    - **GraphST / stLearn / BASS**：后续深度学习方法。

    - **EnSDD**（PMC11494180, 2024）：融合 8 个现有方法的集成，2024 年提出。

- **局限**：方法众多但缺乏金标准；很多 benchmark 用"解剖学注释"做参考，但解剖边界 ≠ 分子边界。

### 7\.4\.2 Cell segmentation（细胞分割）【快速发展，成像型平台的核心瓶颈】

- **解决什么问题？** 成像型平台给你一堆 RNA 点的坐标，但没有告诉你"哪个点属于哪个细胞"。需要根据细胞核/膜染色图像把组织切成细胞。

- **典型工具**：

    - **Cellpose**（Stringer 等, *Nat Methods* 2021）：通用实例分割，预训练模型效果好。

    - **StarDist**：细胞核分割经典。

    - **10x Xenium 自带 segmentation**（基于核 \+ 膜染色）。

    - **CosMx 自带 segmentation**（膜染色辅助）。

- **核心困难**：

    - 组织切片的细胞密度极高时，膜染色不准会导致**过度分割**（一个细胞被切成两个）或**欠分割**（多个细胞被合成一个）。

    - 2025 年多平台比较显示：MERSCOPE 比 Xenium/CosMx 更容易出现"共表达两个不相关 marker"的异常细胞，反映分割错误。

- **重要警告**：**分割错误会直接影响下游所有分析**。分割后必须人工抽查切片，不要盲信算法输出。

### 7\.4\.3 Cell\-cell interaction / spatial cell\-cell communication（空间细胞互作）【快速发展】

- **解决什么问题？** 第六章讲的 CellChat 假设"表达配体和受体就能通讯"，但忽略了**空间距离**。空间数据能直接看"哪两种细胞物理相邻"。

- **典型工具**：

    - **CellChat 空间版**、**NicheNet 空间扩展**、**MUSE**、**spaCI**：在空间邻近图上做 L\-R 推断。

    - **SpatialDM / SpaGI**：找空间上依赖的配体\-受体对。

- **进步与局限**：相比纯 scRNA\-seq 通讯，空间版加了"物理相邻"约束，假阳性率下降；但**仍然不能证明功能**，需要配体\-受体阻断、类器官共培养等实验。

### 7\.4\.4 Spatially variable genes（空间可变基因）【成熟·标准流程】

- **解决什么问题？** 哪些基因的表达在空间上有显著模式（如只在皮层第 IV 层表达）？

- **典型工具**：

    - **SpatialDE**（Svensson 等, *Nat Methods* 2018）：高斯过程回归。

    - **SpatialDE2 / SPARK\-X**：更快版本。

    - **SpaGCN 内置 SVG 检测**。

- **成熟度**：【成熟·标准流程】，是空间分析的基础步骤。

### 7\.4\.5 3D reconstruction（三维重建）【快速发展】

- **解决什么问题？** 切片是 2D，但组织是 3D。把连续切片配准，重建 3D 表达图谱。

- **典型工具**：TissueOptics、stereoscope 3D、Stereo\-seq 自带 3D pipeline。

- **局限**：切片间形变、配准误差、深度方向采样不足。目前主要用于模式生物（小鼠胚胎、斑马鱼），人体临床应用刚起步。

### 7\.4\.6 Deconvolution（去卷积）【成熟·标准流程】（仅 spot\-based 需要）

- **解决什么问题？** Visium 经典版一个 spot 含多个细胞，怎么知道里面是什么类型？

- **典型工具**：

    - **RCTD / cell2location**（Kleshchevnikov 等, *Nat Biotechnol* 2022）：用 scRNA\-seq 参考做贝叶斯去卷积。

    - **Stereoscope / SPOTlight / BayesPrism**：同类方法。

- **前提**：必须有同组织的 scRNA\-seq 参考。没有参考时只能做"无参考去卷积"，精度差。

---

## 7\.5 空间分析时间线

|年份|里程碑|意义|
|---|---|---|
|2016|Ståhl 等, *Science*：第一个商业化 Spatial Transcriptomics|概念验证|
|2018|10x 收购 Spatial Transcriptomics 并推出 Visium|商业化普及|
|2018|SpatialDE 发表|第一个空间统计检验工具|
|2019–2020|Slide\-seq、MERFISH 普及|单细胞级成像型出现|
|2021|BayesSpace / SpaGCN 发表|空间域深度学习兴起|
|2022|Stereo\-seq（华大）发布；cell2location|大视野测序型成熟|
|2023|10x Xenium、Nanostring CosMx 商业化|成像型进入临床|
|2024|Visium HD 发布（2 μm bin）|测序型进入亚细胞分辨率|
|2025|多平台系统 benchmark 发表|平台选择有了循证依据|

---

## 7\.6 本章小结：空间组学的常见误区

1. **"spot = 细胞"**：错。经典 Visium spot 含多细胞，必须去卷积。

2. **"成像型不需要分割"**：错。分割是最大误差来源。

3. **"空间域 = 解剖结构"**：不一定。分子边界常与解剖边界不完全重合。

4. **"空间互作 = 功能验证"**：仍需功能实验。

5. **"分辨率越高越好"**：分辨率高伴随灵敏度下降、计算量爆炸；要按生物学问题选。

---
