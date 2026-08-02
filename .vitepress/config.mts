import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineConfig } from 'vitepress'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { configureMathjax, mathjaxStyle } from './math'

const require = createRequire(import.meta.url)
const mermaidEntry = require.resolve('mermaid')
const dayjsEntry = require.resolve('dayjs', { paths: [dirname(mermaidEntry)] })
const dayjsEsmEntry = resolve(dirname(dayjsEntry), 'esm/index.js')

export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: 'Learning Notes',
  description: '个人学习笔记与资料索引',
  base: process.env.BASE_PATH ?? '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['style', { id: 'mathjax-svg-styles' }, mathjaxStyle]
  ],
  markdown: {
    config: configureMathjax
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mjx-')
      }
    }
  },
  vite: {
    resolve: {
      alias: [
        { find: /^dayjs$/, replacement: dayjsEsmEntry }
      ]
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' }
    ],
    // BEGIN GENERATED NOTES SIDEBAR
    sidebar: [
      {
        text: '概览',
        items: [
          { text: '首页', link: '/' },
          { text: '笔记索引', link: '/notes/' }
        ]
      },
      {
        text: "2026-08-02",
        items: [
          {
            text: "时空与几何：广义相对论导论中文译注",
            link: "/notes/2026/08/02/spacetime-and-geometry",
            collapsed: true,
            items: [
              { text: "扉页、版权页与前言", link: "/notes/2026/08/02/spacetime-and-geometry/00-front-matter-and-preface" },
              { text: "第 1 章 狭义相对论与平直时空", link: "/notes/2026/08/02/spacetime-and-geometry/01-special-relativity-and-flat-spacetime" },
              { text: "第 2 章 流形", link: "/notes/2026/08/02/spacetime-and-geometry/02-manifolds" },
              { text: "第 3 章 曲率", link: "/notes/2026/08/02/spacetime-and-geometry/03-curvature" },
              { text: "第 4 章 引力", link: "/notes/2026/08/02/spacetime-and-geometry/04-gravitation" },
              { text: "第 5 章 Schwarzschild 解", link: "/notes/2026/08/02/spacetime-and-geometry/05-the-schwarzschild-solution" },
              { text: "第 6 章 更一般的黑洞", link: "/notes/2026/08/02/spacetime-and-geometry/06-more-general-black-holes" },
              { text: "第 7 章 微扰理论与引力辐射", link: "/notes/2026/08/02/spacetime-and-geometry/07-perturbation-theory-and-gravitational-radiation" },
              { text: "第 8 章 宇宙学", link: "/notes/2026/08/02/spacetime-and-geometry/08-cosmology" },
              { text: "第 9 章 弯曲时空中的量子场论", link: "/notes/2026/08/02/spacetime-and-geometry/09-quantum-field-theory-in-curved-spacetime" },
              { text: "附录 A 流形之间的映射", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-a-maps-between-manifolds" },
              { text: "附录 B 微分同胚与 Lie 导数", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-b-diffeomorphisms-and-lie-derivatives" },
              { text: "附录 C 子流形", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-c-submanifolds" },
              { text: "附录 D 超曲面", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-d-hypersurfaces" },
              { text: "附录 E Stokes 定理", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-e-stokes-theorem" },
              { text: "附录 F 测地线丛", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-f-geodesic-congruences" },
              { text: "附录 G 共形变换", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-g-conformal-transformations" },
              { text: "附录 H 共形图", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-h-conformal-diagrams" },
              { text: "附录 I 平行传播子", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-i-the-parallel-propagator" },
              { text: "附录 J 非坐标基", link: "/notes/2026/08/02/spacetime-and-geometry/appendix-j-noncoordinate-bases" },
              { text: "参考文献", link: "/notes/2026/08/02/spacetime-and-geometry/bibliography" },
              { text: "中英术语索引", link: "/notes/2026/08/02/spacetime-and-geometry/index" }
            ]
          },
          {
            text: "Sean Carroll 广义相对论讲义完整中文译本",
            link: "/notes/2026/08/02/carroll-general-relativity",
            collapsed: true,
            items: [
              {
                text: "阅读路线、预备知识与符号约定",
                link: "/notes/2026/08/02/carroll-general-relativity/00-roadmap-and-conventions",
                collapsed: true,
                items: [
                  { text: "讲义信息、目录与前言", link: "/notes/2026/08/02/carroll-general-relativity/00-roadmap-and-conventions/01-contents-and-preface" },
                  { text: "原讲义书目", link: "/notes/2026/08/02/carroll-general-relativity/00-roadmap-and-conventions/02-bibliography" }
                ]
              },
              {
                text: "狭义相对论与平直时空",
                link: "/notes/2026/08/02/carroll-general-relativity/01-special-relativity-and-flat-spacetime",
                collapsed: true,
                items: [
                  { text: "时空间隔与洛伦兹变换", link: "/notes/2026/08/02/carroll-general-relativity/01-special-relativity-and-flat-spacetime/01-spacetime-interval-and-lorentz-transformations" },
                  { text: "向量、对偶向量与张量", link: "/notes/2026/08/02/carroll-general-relativity/01-special-relativity-and-flat-spacetime/02-vectors-dual-vectors-and-tensors" },
                  { text: "微分形式与霍奇对偶", link: "/notes/2026/08/02/carroll-general-relativity/01-special-relativity-and-flat-spacetime/03-differential-forms-and-hodge-duality" },
                  { text: "世界线、固有时与动量", link: "/notes/2026/08/02/carroll-general-relativity/01-special-relativity-and-flat-spacetime/04-worldlines-proper-time-and-momentum" },
                  { text: "能量动量张量与理想流体", link: "/notes/2026/08/02/carroll-general-relativity/01-special-relativity-and-flat-spacetime/05-stress-energy-and-perfect-fluids" }
                ]
              },
              {
                text: "流形、坐标与张量场",
                link: "/notes/2026/08/02/carroll-general-relativity/02-manifolds-and-tensors",
                collapsed: true,
                items: [
                  { text: "集合、映射、坐标图与流形", link: "/notes/2026/08/02/carroll-general-relativity/02-manifolds-and-tensors/01-sets-maps-charts-and-manifolds" },
                  { text: "微分、向量与张量分量", link: "/notes/2026/08/02/carroll-general-relativity/02-manifolds-and-tensors/02-differentiation-vectors-and-tensor-components" },
                  { text: "度量、正规坐标与偏导数", link: "/notes/2026/08/02/carroll-general-relativity/02-manifolds-and-tensors/03-metric-normal-coordinates-and-partial-derivatives" },
                  { text: "张量密度、体积形式与积分", link: "/notes/2026/08/02/carroll-general-relativity/02-manifolds-and-tensors/04-tensor-densities-volume-forms-and-integration" }
                ]
              },
              {
                text: "联络、测地线与曲率",
                link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature",
                collapsed: true,
                items: [
                  { text: "协变导数与联络", link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature/01-covariant-derivatives-and-connections" },
                  { text: "平行移动与测地线", link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature/02-parallel-transport-and-geodesics" },
                  { text: "Riemann 张量、恒等式与 Weyl 张量", link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature/03-riemann-tensor-identities-and-weyl" },
                  { text: "曲率实例与测地线偏离", link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature/04-curvature-examples-and-geodesic-deviation" },
                  { text: "四标架、自旋联络与结构方程", link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature/05-tetrads-spin-connection-and-structure-equations" },
                  { text: "纤维丛与规范变换", link: "/notes/2026/08/02/carroll-general-relativity/03-connection-and-curvature/06-fiber-bundles-and-gauge-transformations" }
                ]
              },
              {
                text: "等效原理与爱因斯坦方程",
                link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation",
                collapsed: true,
                items: [
                  { text: "等效原理与引力红移", link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation/01-equivalence-principle-and-redshift" },
                  { text: "弯曲时空与牛顿极限", link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation/02-curved-spacetime-and-newtonian-limit" },
                  { text: "弯曲时空中的物理与爱因斯坦方程", link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation/03-physics-in-curved-spacetime-and-einstein-equations" },
                  { text: "希尔伯特作用量、能量动量张量与弱能量条件", link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation/04-hilbert-action-stress-energy-and-wec" },
                  { text: "引力的替代理论", link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation/05-alternative-theories-of-gravity" },
                  { text: "初值问题与因果结构", link: "/notes/2026/08/02/carroll-general-relativity/04-gravitation-and-einstein-equation/06-initial-value-problem-and-causality" }
                ]
              },
              {
                text: "微分同胚、李导数与 Killing 对称",
                link: "/notes/2026/08/02/carroll-general-relativity/05-diffeomorphisms-and-symmetry",
                collapsed: true,
                items: [
                  { text: "拉回、推前与微分同胚", link: "/notes/2026/08/02/carroll-general-relativity/05-diffeomorphisms-and-symmetry/01-pullbacks-pushforwards-and-diffeomorphisms" },
                  { text: "积分曲线与李导数", link: "/notes/2026/08/02/carroll-general-relativity/05-diffeomorphisms-and-symmetry/02-integral-curves-and-lie-derivatives" },
                  { text: "微分同胚不变性与能量动量守恒", link: "/notes/2026/08/02/carroll-general-relativity/05-diffeomorphisms-and-symmetry/03-diffeomorphism-invariance-and-stress-energy" },
                  { text: "等距映射与 Killing 向量", link: "/notes/2026/08/02/carroll-general-relativity/05-diffeomorphisms-and-symmetry/04-isometries-and-killing-vectors" }
                ]
              },
              {
                text: "线性引力与引力波",
                link: "/notes/2026/08/02/carroll-general-relativity/06-weak-fields-and-gravitational-waves",
                collapsed: true,
                items: [
                  { text: "弱场与引力辐射", link: "/notes/2026/08/02/carroll-general-relativity/06-weak-fields-and-gravitational-waves/01-weak-field-limit-and-gauge" },
                  { text: "平面波、横向无迹规范与偏振", link: "/notes/2026/08/02/carroll-general-relativity/06-weak-fields-and-gravitational-waves/02-plane-waves-tt-gauge-and-polarization" },
                  { text: "引力辐射源与四极矩公式", link: "/notes/2026/08/02/carroll-general-relativity/06-weak-fields-and-gravitational-waves/03-radiation-from-sources-and-quadrupole-formula" },
                  { text: "引力波携带的能量", link: "/notes/2026/08/02/carroll-general-relativity/06-weak-fields-and-gravitational-waves/04-energy-carried-by-gravitational-waves" }
                ]
              },
              {
                text: "Schwarzschild 解与黑洞",
                link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes",
                collapsed: true,
                items: [
                  { text: "施瓦西解与伯克霍夫定理", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/01-schwarzschild-solution-and-birkhoff-theorem" },
                  { text: "测地线、轨道与近日点进动", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/02-geodesics-orbits-and-perihelion-precession" },
                  { text: "事件视界、Kruskal 坐标与引力坍缩", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/03-event-horizon-kruskal-and-collapse" },
                  { text: "Penrose 图、共形无穷与黑洞无毛定理", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/04-penrose-diagrams-conformal-infinity-and-no-hair" },
                  { text: "带电黑洞、宇宙审查与极端性", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/05-charged-black-holes-censorship-and-extremality" },
                  { text: "Kerr 几何、Killing 张量与能层", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/06-kerr-geometry-killing-tensors-and-ergosphere" },
                  { text: "Penrose 过程、不可约质量与黑洞热力学", link: "/notes/2026/08/02/carroll-general-relativity/07-schwarzschild-and-black-holes/07-penrose-process-irreducible-mass-and-thermodynamics" }
                ]
              },
              {
                text: "FRW 宇宙学",
                link: "/notes/2026/08/02/carroll-general-relativity/08-cosmology",
                collapsed: true,
                items: [
                  { text: "均匀性、各向同性与 Robertson-Walker 几何", link: "/notes/2026/08/02/carroll-general-relativity/08-cosmology/01-homogeneity-isotropy-and-rw-geometry" },
                  { text: "宇宙学物质与 Friedmann 方程", link: "/notes/2026/08/02/carroll-general-relativity/08-cosmology/02-cosmological-matter-and-friedmann-equations" },
                  { text: "宇宙学参数与尺度因子的演化", link: "/notes/2026/08/02/carroll-general-relativity/08-cosmology/03-cosmological-parameters-and-scale-factor-evolution" },
                  { text: "红移、光度距离与哈勃定律", link: "/notes/2026/08/02/carroll-general-relativity/08-cosmology/04-redshift-luminosity-distance-and-hubble-law" }
                ]
              }
            ]
          }
        ]
      },
      {
        text: "2026-08-01",
        items: [
          {
            text: "CS 188 人工智能导论教程",
            link: "/notes/2026/08/01/cs188-introduction-to-ai",
            collapsed: true,
            items: [
              { text: "第一章 搜索", link: "/notes/2026/08/01/cs188-introduction-to-ai/01-search" },
              { text: "第二章 约束满足问题", link: "/notes/2026/08/01/cs188-introduction-to-ai/02-constraint-satisfaction-problems" },
              { text: "第三章 博弈", link: "/notes/2026/08/01/cs188-introduction-to-ai/03-games" },
              { text: "第四章 马尔可夫决策过程", link: "/notes/2026/08/01/cs188-introduction-to-ai/04-markov-decision-processes" },
              { text: "第五章 强化学习", link: "/notes/2026/08/01/cs188-introduction-to-ai/05-reinforcement-learning" },
              { text: "第六章 贝叶斯网络", link: "/notes/2026/08/01/cs188-introduction-to-ai/06-bayesian-networks" },
              { text: "第七章 决策网络与完美信息价值", link: "/notes/2026/08/01/cs188-introduction-to-ai/07-decision-networks-and-vpi" },
              { text: "第八章 隐马尔可夫模型", link: "/notes/2026/08/01/cs188-introduction-to-ai/08-hidden-markov-models" },
              { text: "第九章 机器学习", link: "/notes/2026/08/01/cs188-introduction-to-ai/09-machine-learning" },
              { text: "第十章 逻辑", link: "/notes/2026/08/01/cs188-introduction-to-ai/10-logic" }
            ]
          },
          { text: "PEAS 在现代 Coding Harness 中的映射", link: "/notes/2026/08/01/peas-in-modern-coding-harness" }
        ]
      },
      {
        text: "2026-07-27",
        items: [
          {
            text: "麦克斯韦方程：从四条定律到一条统一方程",
            link: "/notes/2026/07/27/maxwell",
            collapsed: true,
            items: [
              { text: "01｜矢量微积分：场、梯度、散度与旋度", link: "/notes/2026/07/27/maxwell/01-vector-calculus" },
              { text: "02｜积分定理：高斯定理与斯托克斯定理", link: "/notes/2026/07/27/maxwell/02-integral-theorems" },
              { text: "03｜电磁学的基本量：电荷、电流、场、通量与势", link: "/notes/2026/07/27/maxwell/03-electromagnetic-quantities" },
              { text: "04｜四条麦克斯韦方程与电磁波", link: "/notes/2026/07/27/maxwell/04-maxwell-equations" },
              { text: "05｜线性代数与指标记号", link: "/notes/2026/07/27/maxwell/05-linear-algebra-and-indices" },
              { text: "06｜狭义相对论：为什么电场和磁场会混合", link: "/notes/2026/07/27/maxwell/06-special-relativity" },
              { text: "07｜电磁场张量：四条方程如何变成两条", link: "/notes/2026/07/27/maxwell/07-field-tensor" },
              { text: "08｜微分形式：用 dF = 0 表示无源方程", link: "/notes/2026/07/27/maxwell/08-differential-forms" },
              { text: "09｜几何代数：四条方程如何写成一条", link: "/notes/2026/07/27/maxwell/09-geometric-algebra" },
              { text: "10｜规范势、拉格朗日量与规范对称性", link: "/notes/2026/07/27/maxwell/10-gauge-and-lagrangian" }
            ]
          }
        ]
      },
      {
        text: "2026-07-23",
        items: [
          { text: "MSC2020 数学主题分类中文笔记", link: "/notes/2026/07/23/msc2020-mathematics-subject-classification-zh" }
        ]
      },
      {
        text: "2026-06-10",
        items: [
          { text: "负二项分布的期望与方差推导", link: "/notes/2026/06/10/negative-binomial-mean-variance" },
          { text: "几何分布与指数分布的联系", link: "/notes/2026/06/10/geometric-exponential-connection" },
          { text: "泊松分布公式推导与二项分布的联系", link: "/notes/2026/06/10/poisson-distribution-derivation" },
          { text: "协方差、相关系数与柯西不等式", link: "/notes/2026/06/10/covariance-correlation-cauchy-vector" }
        ]
      },
      {
        text: "2026-05-31",
        items: [
          { text: "Network Design Principles：Two-Tier、Three-Tier 与 Spine-Leaf", link: "/notes/2026/05/31/network-design-architectures" }
        ]
      },
      {
        text: "2026-05-24",
        items: [
          { text: "多局胜制中强者胜率随局数增加而上升", link: "/notes/2026/05/24/best-of-series-stronger-win-rate" },
          { text: "软件架构层级与 Enterprise Architecture 示例", link: "/notes/2026/05/24/software-architecture-levels-enterprise-examples" },
          { text: "Frame、MAC、IP 与 ARP：一次网络访问如何找到下一跳", link: "/notes/2026/05/24/networking-frame-mac-ip" },
          { text: "Socket 与 WebSocket 的区别", link: "/notes/2026/05/24/networking-socket-websocket" },
          { text: "Technical Writing 中的 SEO 工具：Trends、Keyword Planner 与 Analytics", link: "/notes/2026/05/24/technical-writing-seo-tools" },
          { text: "Technical Writing 中的三种 Technical Content", link: "/notes/2026/05/24/technical-writing-content-types" }
        ]
      },
      {
        text: "2026-05-22",
        items: [
          { text: "手机个人热点属于什么网络", link: "/notes/2026/05/22/networking-personal-hotspot" },
          { text: "游戏的 P2P 网络是如何实现的", link: "/notes/2026/05/22/game-p2p-networking" }
        ]
      },
      {
        text: "2026-05-19",
        items: [
          { text: "当今时代非常有用的数学", link: "/notes/2026/05/19/useful-math-today" },
          { text: "数学学习资源推荐", link: "/notes/2026/05/19/math-learning-resources" },
          { text: "现代数学分支思维导图", link: "/notes/2026/05/19/math-branches-mindmap" }
        ]
      }
    ],
    // END GENERATED NOTES SIDEBAR
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0.',
      copyright: 'Copyright © 2026 Learning Notes'
    },
    socialLinks: []
  }
}))
