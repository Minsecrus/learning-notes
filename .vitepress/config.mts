import { withMermaid } from 'vitepress-plugin-mermaid'
import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { configureMathjax, mathjaxStyle } from './math'
import { createMathStaticTransform } from './math-static'

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
    config: (md) => {
      md.use(footnote)
      configureMathjax(md)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mjx-'),
        nodeTransforms: [createMathStaticTransform()]
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
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => Array.from(
              new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text)
            ).filter((part) => part.isWordLike).map((part) => part.segment)
          }
        },
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索笔记与讲义' },
          modal: {
            displayDetails: '显示详细结果',
            resetButtonTitle: '清空搜索',
            backButtonTitle: '返回搜索',
            noResultsText: '没有找到相关内容',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
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
        text: "2026-10-02",
        items: [
          {
            text: "数学分析课程讲义（丘成桐数学英才班）",
            link: "/notes/2026/10/02/math-analysis-lecture-notes",
            collapsed: true,
            items: [
              {
                text: "数学分析 1",
                link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i",
                collapsed: true,
                items: [
                  { text: "数学分析一课程简介", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/00-09-course-overview" },
                  { text: "1 实数的公理化描述", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/01-real-number-axioms" },
                  { text: "2 区间套、确界与距离空间", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/02-nested-intervals" },
                  {
                    text: "3 Dedekind 分割与实数构造",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/03-dedekind-cuts",
                    collapsed: true,
                    items: [
                      { text: "Dedekind 分割与实数构造", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/03-dedekind-cuts/03-01-p0030-0035" },
                      { text: "3.1 作业:可数与不可数,Schroeder-Bernstein定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/03-dedekind-cuts/03-03-p0036-0039" }
                    ]
                  },
                  { text: "4 极限、级数与 Cauchy 列", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/04-limits" },
                  { text: "5 收敛判别与常数 e", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/05-convergence-tests" },
                  {
                    text: "6 指数函数与三角函数",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/06-exponential-trigonometric",
                    collapsed: true,
                    items: [
                      { text: "指数函数与三角函数", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/06-exponential-trigonometric/06-01-p0059-0064" },
                      { text: "6.1 作业:Riemann重排,Cesàro求和,Banach-Mazur游戏", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/06-exponential-trigonometric/06-03-p0065-0070" }
                    ]
                  },
                  {
                    text: "7 级数判别、完备空间与不动点",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/07-complete-spaces",
                    collapsed: true,
                    items: [
                      { text: "级数判别、完备空间与不动点", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/07-complete-spaces/07-01-p0071-0080" },
                      { text: "7.1 作业:素数的倒数和,Basel问题的Euler“证明”", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/07-complete-spaces/07-03-p0081-0085" }
                    ]
                  },
                  { text: "8 函数的连续性", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/08-continuity" },
                  { text: "9 连续映射与介值定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/09-continuous-maps" },
                  {
                    text: "10 开闭集、紧集与连续性",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/10-topology",
                    collapsed: true,
                    items: [
                      { text: "开闭集、紧集与连续性", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/10-topology/10-01-p0102-0106" },
                      { text: "10.1 数学分析一作业4", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/10-topology/10-02-p0107-0110" }
                    ]
                  },
                  { text: "11 紧性、一致连续与一致收敛", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/11-compactness" },
                  {
                    text: "12 连续函数的构造与完备化",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/12-continuous-functions",
                    collapsed: true,
                    items: [
                      { text: "连续函数的构造与完备化", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/12-continuous-functions/12-01-p0119-0125" },
                      { text: "12.1 作业:有无穷多素数的拓扑证明", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/12-continuous-functions/12-03-p0126-0131" },
                      { text: "12.2 期中考试:连续函数环的极大理想", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/12-continuous-functions/12-05-p0132-0135" }
                    ]
                  },
                  { text: "13 导数与初等函数", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/13-derivatives" },
                  { text: "14 导数公式与中值定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/14-mean-value-theorems" },
                  {
                    text: "15 中值定理、微分方程与圆周率",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/15-derivative-applications",
                    collapsed: true,
                    items: [
                      { text: "中值定理、微分方程与圆周率", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/15-derivative-applications/15-01-p0151-0157" },
                      { text: "15.1 作业:高木贞治函数", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/15-derivative-applications/15-03-p0158-0165" }
                    ]
                  },
                  { text: "16 空间填充曲线、L’Hôpital 法则与 Taylor 展开", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/16-lhopital-taylor" },
                  {
                    text: "17 凸函数与 Jensen 不等式",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/17-convexity",
                    collapsed: true,
                    items: [
                      { text: "凸函数与 Jensen 不等式", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/17-convexity/17-01-p0175-0182" },
                      { text: "17.1 作业:Émile Borel引理,Peano的证明", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/17-convexity/17-03-p0183-0188" }
                    ]
                  },
                  { text: "18 Riemann 积分的定义", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/18-riemann-integral" },
                  {
                    text: "19 Riemann 和与 Darboux 上下和",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/19-darboux-sums",
                    collapsed: true,
                    items: [
                      { text: "Riemann 和与 Darboux 上下和", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/19-darboux-sums/19-01-p0199-0203" },
                      { text: "19.1 作业:Sturm-Louville理论的一个例子", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/19-darboux-sums/19-02-p0204-0209" }
                    ]
                  },
                  {
                    text: "20 Newton-Leibniz 公式与积分计算",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/20-fundamental-theorem",
                    collapsed: true,
                    items: [
                      { text: "Newton-Leibniz 公式与积分计算", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/20-fundamental-theorem/20-01-p0210-0218" },
                      { text: "20.1 作业:Dini定理,多项式逼近与Weierstrass-Stone定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/20-fundamental-theorem/20-03-p0219-0223" }
                    ]
                  },
                  { text: "21 振幅、零测集与 Lebesgue 定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/21-lebesgue-criterion" },
                  { text: "22 反常积分、Euler 常数与 Stirling 公式", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/22-improper-integrals" },
                  {
                    text: "23 微积分历史与含参积分",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/23-parameter-integrals",
                    collapsed: true,
                    items: [
                      { text: "微积分历史与含参积分", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/23-parameter-integrals/23-01-p0239-0245" },
                      { text: "23.1 作业：ζ(2) 的无理性", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/23-parameter-integrals/23-03-p0246-0249" }
                    ]
                  },
                  { text: "24 常微分方程、Kepler 定律与变分法", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/24-ode-variation" },
                  {
                    text: "25 最速降线与积分第一中值定理",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/25-brachistochrone",
                    collapsed: true,
                    items: [
                      { text: "最速降线与积分第一中值定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/25-brachistochrone/25-01-p0262-0266" },
                      { text: "25.1 作业:可写成两个完全平方数的和的整数的密度", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/25-brachistochrone/25-02-p0267-0274" }
                    ]
                  },
                  { text: "26 第二积分中值定理与 Stieltjes 积分", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/26-stieltjes-integral" },
                  {
                    text: "27 Stieltjes 积分的中值定理",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/27-stieltjes-mean-value",
                    collapsed: true,
                    items: [
                      { text: "Stieltjes 积分的中值定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/27-stieltjes-mean-value/27-01-p0283-0289" },
                      { text: "27.1 作业:振荡积分", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/27-stieltjes-mean-value/27-03-p0290-0295" }
                    ]
                  },
                  { text: "28 Baire 纲定理与 Liouville 定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/28-baire-liouville" },
                  {
                    text: "29 振荡与衰减、期末考试与寒假作业",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/29-oscillation-decay",
                    collapsed: true,
                    items: [
                      { text: "振荡与衰减、期末考试与寒假作业", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/29-oscillation-decay/29-01-p0306-0312" },
                      { text: "29.1–29.2 建议阅读与数学分析一期末考试", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/29-oscillation-decay/29-03-p0313-0319" },
                      { text: "29.3 寒假作业", link: "/notes/2026/10/02/math-analysis-lecture-notes/01-math-analysis-i/29-oscillation-decay/29-05-p0320-0333" }
                    ]
                  }
                ]
              },
              {
                text: "数学分析 2",
                link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii",
                collapsed: true,
                items: [
                  { text: "数学分析二课程简介", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/30-00-course-overview" },
                  { text: "30 方向导数、偏导数与微分", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/30-multivariable-derivatives" },
                  {
                    text: "31 映射的微分与 Jacobi 矩阵",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/31-differential-maps",
                    collapsed: true,
                    items: [
                      { text: "映射的微分与 Jacobi 矩阵", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/31-differential-maps/31-01-p0344-0351" },
                      { text: "31.1 作业:齐次函数与Euler公式", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/31-differential-maps/31-03-p0352-0356" }
                    ]
                  },
                  { text: "32 坐标变换、多元 Taylor 展开与子流形", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/32-coordinate-changes" },
                  {
                    text: "33 子流形与反函数定理",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/33-inverse-function",
                    collapsed: true,
                    items: [
                      { text: "子流形与反函数定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/33-inverse-function/33-01-p0368-0374" },
                      { text: "33.1 习题课:拓扑空间", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/33-inverse-function/33-03-p0375-0377" },
                      { text: "33.2 作业:反函数和隐函数定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/33-inverse-function/33-04-p0378-0383" }
                    ]
                  },
                  { text: "34 隐函数定理与子流形参数化", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/34-implicit-function" },
                  {
                    text: "35 原像定理、切空间与法向量",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/35-tangent-spaces",
                    collapsed: true,
                    items: [
                      { text: "原像定理、切空间与法向量", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/35-tangent-spaces/35-01-p0394-0400" },
                      { text: "35.1 作业:隐函数与反函数定理,隐函数定理在多项式和矩阵上的一个重要应用,经典群的子流形结构", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/35-tangent-spaces/35-03-p0401-0405" }
                    ]
                  },
                  { text: "36 切丛与 Lagrange 乘子法", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/36-tangent-bundles" },
                  {
                    text: "37 Hesse 矩阵、极值与凸函数",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/37-hessian-convexity",
                    collapsed: true,
                    items: [
                      { text: "Hesse 矩阵、极值与凸函数", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/37-hessian-convexity/37-01-p0418-0424" },
                      { text: "37.1 习题课:球极投影", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/37-hessian-convexity/37-03-p0425-0427" },
                      { text: "37.2 作业:Lagrange乘子法,Morse引理,横截相交性", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/37-hessian-convexity/37-04-p0428-0432" }
                    ]
                  },
                  { text: "38 σ-代数与可测映射", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/38-measurability" },
                  { text: "39 测度与 Carathéodory 扩张定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/39-measure-extension" },
                  { text: "40 Lebesgue 测度与测度空间的完备化", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/40-lebesgue-measure" },
                  {
                    text: "41 抽象积分与 Beppo Levi 定理",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/41-abstract-integrals",
                    collapsed: true,
                    items: [
                      { text: "抽象积分与 Beppo Levi 定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/41-abstract-integrals/41-01-p0470-0477" },
                      { text: "41.1 作业:子流形与零测集,Stieltjies 测度的构造,Borel-Cantelli 定理和无理数的逼近", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/41-abstract-integrals/41-03-p0478-0483" }
                    ]
                  },
                  { text: "42 Lebesgue 积分与控制收敛定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/42-dominated-convergence" },
                  {
                    text: "43 积分与求导交换、乘积测度",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/43-product-measures",
                    collapsed: true,
                    items: [
                      { text: "积分与求导交换、乘积测度", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/43-product-measures/43-01-p0496-0502" },
                      { text: "43.1 作业:Lebesgue 控制收敛,十进制小数的研究", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/43-product-measures/43-03-p0503-0508" },
                      { text: "43.2 习题课:硬币空间的测度理论", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/43-product-measures/43-05-p0509-0511" }
                    ]
                  },
                  {
                    text: "44 Fubini 定理与积分降维",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/44-fubini",
                    collapsed: true,
                    items: [
                      { text: "Fubini 定理与积分降维", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/44-fubini/44-01-p0512-0519" },
                      { text: "44.1 作业:Archimedes对抛物线面积的计算,Gauss积分", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/44-fubini/44-03-p0520-0523" }
                    ]
                  },
                  { text: "45 换元积分公式", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/45-change-of-variables" },
                  {
                    text: "46 常用换元与子流形上的积分",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/46-submanifold-integrals",
                    collapsed: true,
                    items: [
                      { text: "常用换元与子流形上的积分", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/46-submanifold-integrals/46-01-p0537-0546" },
                      { text: "46.1 期中考试:非Borel集的构造", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/46-submanifold-integrals/46-03-p0547-0552" }
                    ]
                  },
                  { text: "47 球体积与 Stokes 公式的第一个证明", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/47-stokes-first-proof" },
                  {
                    text: "48 Sard 型引理与 Stokes 公式",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/48-stokes-topological-proof",
                    collapsed: true,
                    items: [
                      { text: "Sard 型引理与 Stokes 公式", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/48-stokes-topological-proof/48-01-p0565-0572" },
                      { text: "48.1 作业:曲面曲线积分的计算", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/48-stokes-topological-proof/48-03-p0573-0577" },
                      { text: "48.2 习题课:Riemann积分的定义1", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/48-stokes-topological-proof/48-04-p0578-0584" }
                    ]
                  },
                  { text: "49 散度定理与 Green 公式", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/49-vector-calculus" },
                  { text: "50 Brouwer 不动点定理与 Hilbert 空间", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/50-hilbert-spaces" },
                  {
                    text: "51 函数空间、连续算子与卷积逼近",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/51-convolution-approximation",
                    collapsed: true,
                    items: [
                      { text: "函数空间、连续算子与卷积逼近", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/51-convolution-approximation/51-01-p0602-0611" },
                      { text: "51.1 作业:Stokes公式的应用", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/51-convolution-approximation/51-03-p0612-0617" },
                      { text: "51.2 习题课:Riemann积分的定义2", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/51-convolution-approximation/51-05-p0618-0622" }
                    ]
                  },
                  { text: "52 Hilbert 基与 Fourier 级数", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/52-fourier-series" },
                  {
                    text: "53 Fourier 级数的 L2 理论",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/53-fourier-l2",
                    collapsed: true,
                    items: [
                      { text: "Fourier 级数的 L2 理论", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/53-fourier-l2/53-01-p0632-0639" },
                      { text: "53.1 作业:波动方程的局部能量估计", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/53-fourier-l2/53-03-p0640-0643" },
                      { text: "53.2 习题课:Riemann积分的定义3", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/53-fourier-l2/53-04-p0644-0646" }
                    ]
                  },
                  { text: "54 光滑性、Dirichlet 核与 Fejer 核", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/54-fourier-kernels" },
                  {
                    text: "55 Fourier 级数的收敛理论",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/55-fourier-convergence",
                    collapsed: true,
                    items: [
                      { text: "Fourier 级数的收敛理论", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/55-fourier-convergence/55-01-p0660-0666" },
                      { text: "55.1 作业:Fourier级数的计算,三角函数与球谐函数", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/55-fourier-convergence/55-03-p0667-0673" }
                    ]
                  },
                  { text: "56 Bernstein 定理与等分布", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/56-bernstein-equidistribution" },
                  {
                    text: "57 Roth 定理与数学分析二期末考试",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/57-roth-theorem",
                    collapsed: true,
                    items: [
                      { text: "Roth 定理与数学分析二期末考试", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/57-roth-theorem/57-01-p0684-0697" },
                      { text: "57.1 作业:Fourier级数几乎处处发散的L1-函数", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/57-roth-theorem/57-04-p0698-0703" },
                      { text: "57.2 期末考试:Maass波函数的展开", link: "/notes/2026/10/02/math-analysis-lecture-notes/02-math-analysis-ii/57-roth-theorem/57-06-p0704-0708" }
                    ]
                  }
                ]
              },
              {
                text: "数学分析 3",
                link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii",
                collapsed: true,
                items: [
                  { text: "数学分析三课程简介", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/58-00-course-overview" },
                  { text: "58 分布的定义与基本例子", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/58-distributions" },
                  { text: "59 分布的操作与 Stokes 公式", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/59-distribution-operations" },
                  { text: "60 跳跃公式、Cauchy 积分与单位分解", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/60-jump-cauchy" },
                  {
                    text: "61 分布的局部刻画与支集",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/61-distribution-support",
                    collapsed: true,
                    items: [
                      { text: "分布的局部刻画与支集", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/61-distribution-support/61-01-p0735-0741" },
                      { text: "61.1 作业:齐次分布,Hadamard有限部分,分布除以多项式", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/61-distribution-support/61-03-p0742-0746" }
                    ]
                  },
                  { text: "62 分布的卷积", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/62-distribution-convolution" },
                  {
                    text: "63 基本解与椭圆正则性",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/63-fundamental-solutions",
                    collapsed: true,
                    items: [
                      { text: "基本解与椭圆正则性", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/63-fundamental-solutions/63-01-p0756-0764" },
                      { text: "63.1 作业:分布的例子,Laplace算子、位势方程与分布", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/63-fundamental-solutions/63-03-p0765-0771" }
                    ]
                  },
                  { text: "64 可卷集与三维波动方程", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/64-wave-equation" },
                  {
                    text: "65 复分析选读与 L1 Fourier 变换",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/65-complex-fourier",
                    collapsed: true,
                    items: [
                      { text: "复分析选读与 L1 Fourier 变换", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/65-complex-fourier/65-01-p0781-0789" },
                      { text: "65.1 L1 Fourier 变换与逆变换", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/65-complex-fourier/65-03-p0790-0797" }
                    ]
                  },
                  {
                    text: "66 L2 Fourier 变换、Schwartz 空间与缓增分布",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/66-schwartz-tempered",
                    collapsed: true,
                    items: [
                      { text: "L2 Fourier 变换、Schwartz 空间与缓增分布", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/66-schwartz-tempered/66-01-p0798-0804" },
                      { text: "66.1 作业:Fourier逆变换的另一个计算,一个分布扩张的问题,分布的张量积", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/66-schwartz-tempered/66-03-p0805-0810" }
                    ]
                  },
                  { text: "67 缓增分布的 Fourier 变换", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/67-tempered-fourier" },
                  { text: "68 缓增分布的 Fourier 变换与卷积", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/68-fourier-convolution" },
                  { text: "69 数学物理方程与 Sobolev 空间", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/69-sobolev-introduction" },
                  {
                    text: "70 Sobolev 空间性质与嵌入定理",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/70-sobolev-embedding",
                    collapsed: true,
                    items: [
                      { text: "Sobolev 空间性质与嵌入定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/70-sobolev-embedding/70-01-p0830-0836" },
                      { text: "70.1 作业:Fourier变换的计算,Heisenberg测不准原理,分数次Sobolev空间的物理空间刻画,1维的等", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/70-sobolev-embedding/70-03-p0837-0841" }
                    ]
                  },
                  { text: "71 Riesz 表示、Sobolev 对偶与迹定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/71-riesz-duality" },
                  {
                    text: "72 有界区域的 Sobolev 空间与 Poincare 不等式",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/72-bounded-sobolev",
                    collapsed: true,
                    items: [
                      { text: "有界区域的 Sobolev 空间与 Poincare 不等式", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/72-bounded-sobolev/72-01-p0851-0857" },
                      { text: "72.1 期中测验", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/72-bounded-sobolev/72-03-p0858-0858" }
                    ]
                  },
                  { text: "73 Dirichlet 问题与半空间扩张", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/73-dirichlet" },
                  { text: "74 半空间的迹定理与限制正合列", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/74-trace-theorem" },
                  {
                    text: "75 Sobolev 扩张、局部刻画与曲面上的空间",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/75-sobolev-extension",
                    collapsed: true,
                    items: [
                      { text: "Sobolev 扩张、局部刻画与曲面上的空间", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/75-sobolev-extension/75-01-p0876-0884" },
                      { text: "75.1 作业:二维波动方程的基本解,Airy函数与线性KdV方程", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/75-sobolev-extension/75-03-p0885-0888" }
                    ]
                  },
                  {
                    text: "76 子流形的 Sobolev 空间与椭圆边值问题",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/76-elliptic-boundary",
                    collapsed: true,
                    items: [
                      { text: "子流形的 Sobolev 空间与椭圆边值问题", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/76-elliptic-boundary/76-01-p0889-0898" },
                      { text: "76.1 习题(利用变分与Riesz表示定理解微分方程):一个弹性力学的模型", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/76-elliptic-boundary/76-03-p0899-0899" }
                    ]
                  },
                  { text: "77 紧算子、自伴算子与弱收敛", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/77-compact-operators" },
                  { text: "78 紧算子谱理论与 Laplace 算子", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/78-spectral-decomposition" },
                  { text: "79 特征函数、变分原理与特征值增长", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/79-spectral-asymptotics" },
                  { text: "80 边界正则性与热核的谱构造", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/80-heat-kernel-spectral" },
                  { text: "81 热核、极大值原理与比较定理", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/81-heat-kernel-pde" },
                  { text: "82 热核渐近、Weyl 公式与波前集", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/82-weyl-wavefront" },
                  { text: "83 波前集与非驻相法", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/83-wavefront" },
                  { text: "84 微局部椭圆正则性与奇性传播", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/84-microlocal-ellipticity" },
                  { text: "85 奇性传播定理的证明", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/85-propagation" },
                  {
                    text: "86 分布理论期末复习题",
                    link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/86-revision",
                    collapsed: true,
                    items: [
                      { text: "86.1 分布理论期末复习题第一套", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/86-revision/86-01-p0988-0991" },
                      { text: "86.2 分布理论期末复习题第二套", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/86-revision/86-02-p0992-0993" },
                      { text: "86.3 分布理论期末复习题第三套", link: "/notes/2026/10/02/math-analysis-lecture-notes/03-math-analysis-iii/86-revision/86-03-p0994-1001" }
                    ]
                  }
                ]
              },
              { text: "数学分析讲义勘误与未决问题", link: "/notes/2026/10/02/math-analysis-lecture-notes/errata" }
            ]
          }
        ]
      },
      {
        text: "2026-09-27",
        items: [
          { text: "周易八个纯卦的大象与人格姿态", link: "/notes/2026/09/27/zhouyi-eight-pure-hexagrams-daxiang" }
        ]
      },
      {
        text: "2026-09-15",
        items: [
          {
            text: "信息检索导论中文译文",
            link: "/notes/2026/09/15/introduction-to-information-retrieval",
            collapsed: true,
            items: [
              { text: "扉页、目录、符号表与前言", link: "/notes/2026/09/15/introduction-to-information-retrieval/00-front-matter-and-preface" },
              { text: "第 1 章 布尔检索", link: "/notes/2026/09/15/introduction-to-information-retrieval/01-boolean-retrieval" },
              { text: "第 2 章 词项词汇表与倒排记录表", link: "/notes/2026/09/15/introduction-to-information-retrieval/02-term-vocabulary-and-postings-lists" },
              { text: "第 3 章 词典与容错检索", link: "/notes/2026/09/15/introduction-to-information-retrieval/03-dictionaries-and-tolerant-retrieval" },
              { text: "第 4 章 索引构建", link: "/notes/2026/09/15/introduction-to-information-retrieval/04-index-construction" },
              { text: "第 5 章 索引压缩", link: "/notes/2026/09/15/introduction-to-information-retrieval/05-index-compression" },
              { text: "第 6 章 评分、词项加权与向量空间模型", link: "/notes/2026/09/15/introduction-to-information-retrieval/06-scoring-term-weighting-and-vector-space-model" },
              { text: "第 7 章 完整搜索系统中的评分计算", link: "/notes/2026/09/15/introduction-to-information-retrieval/07-computing-scores-in-a-complete-search-system" },
              { text: "第 8 章 信息检索的评估", link: "/notes/2026/09/15/introduction-to-information-retrieval/08-evaluation-in-information-retrieval" },
              { text: "第 9 章 相关反馈与查询扩展", link: "/notes/2026/09/15/introduction-to-information-retrieval/09-relevance-feedback-and-query-expansion" },
              { text: "第 10 章 XML 检索", link: "/notes/2026/09/15/introduction-to-information-retrieval/10-xml-retrieval" },
              { text: "第 11 章 概率信息检索", link: "/notes/2026/09/15/introduction-to-information-retrieval/11-probabilistic-information-retrieval" },
              { text: "第 12 章 用于信息检索的语言模型", link: "/notes/2026/09/15/introduction-to-information-retrieval/12-language-models-for-information-retrieval" },
              { text: "第 13 章 文本分类与朴素贝叶斯", link: "/notes/2026/09/15/introduction-to-information-retrieval/13-text-classification-and-naive-bayes" },
              { text: "第 14 章 向量空间分类", link: "/notes/2026/09/15/introduction-to-information-retrieval/14-vector-space-classification" },
              { text: "第 15 章 支持向量机与文档机器学习", link: "/notes/2026/09/15/introduction-to-information-retrieval/15-support-vector-machines-and-machine-learning" },
              { text: "第 16 章 平面聚类", link: "/notes/2026/09/15/introduction-to-information-retrieval/16-flat-clustering" },
              { text: "第 17 章 层次聚类", link: "/notes/2026/09/15/introduction-to-information-retrieval/17-hierarchical-clustering" },
              { text: "第 18 章 矩阵分解与潜在语义索引", link: "/notes/2026/09/15/introduction-to-information-retrieval/18-matrix-decompositions-and-latent-semantic-indexing" },
              { text: "第 19 章 Web 搜索基础", link: "/notes/2026/09/15/introduction-to-information-retrieval/19-web-search-basics" },
              { text: "第 20 章 Web 爬取与索引", link: "/notes/2026/09/15/introduction-to-information-retrieval/20-web-crawling-and-indexes" },
              { text: "第 21 章 链接分析", link: "/notes/2026/09/15/introduction-to-information-retrieval/21-link-analysis" },
              { text: "参考文献", link: "/notes/2026/09/15/introduction-to-information-retrieval/22-bibliography" },
              { text: "作者索引", link: "/notes/2026/09/15/introduction-to-information-retrieval/23-author-index" },
              { text: "中英术语索引", link: "/notes/2026/09/15/introduction-to-information-retrieval/24-subject-index" }
            ]
          }
        ]
      },
      {
        text: "2026-09-02",
        items: [
          { text: "史上最伟大的 100 位数学家", link: "/notes/2026/09/02/100-greatest-mathematicians" }
        ]
      },
      {
        text: "2026-08-09",
        items: [
          { text: "The Pragmatic Programmer 100 条原则", link: "/notes/2026/08/09/the-pragmatic-programmer-100-principles" }
        ]
      },
      {
        text: "2026-08-04",
        items: [
          {
            text: "TCP 从入门到抓包",
            link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics",
            collapsed: true,
            items: [
              { text: "导读：如何学习与实验 TCP", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/00-guide" },
              {
                text: "第一篇 TCP 基础直觉与通信模型",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/01-foundations",
                collapsed: true,
                items: [
                  { text: "第1章 一次网络请求是怎样发生的", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/01-foundations/01-network-request" },
                  { text: "第2章 TCP 提供怎样的通信能力", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/01-foundations/02-tcp-capabilities" },
                  { text: "第3章 TCP 是字节流", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/01-foundations/03-byte-stream" }
                ]
              },
              {
                text: "第二篇 认识一条 TCP 连接",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/02-connection",
                collapsed: true,
                items: [
                  { text: "第4章 Socket、地址、端口和四元组", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/02-connection/01-socket-address-port-four-tuple" },
                  { text: "第5章 用一个最小程序建立 TCP 连接", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/02-connection/02-minimal-program" },
                  { text: "第6章 第一次抓包", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/02-connection/03-first-capture" }
                ]
              },
              {
                text: "第三篇 逐字段看懂 TCP 报文头",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header",
                collapsed: true,
                items: [
                  { text: "第7章 网络包的分层结构", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/01-layered-packet" },
                  { text: "第8章 TCP 首部总览", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/02-tcp-header-overview" },
                  { text: "第9章 源端口和目标端口", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/03-source-destination-ports" },
                  { text: "第10章 Sequence Number：给字节编号", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/04-sequence-number" },
                  { text: "第11章 Acknowledgment Number：累计确认", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/05-acknowledgment-number" },
                  { text: "第12章 TCP 标志位", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/06-flags" },
                  { text: "第13章 Data Offset、Window、Checksum 和 Urgent Pointer", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/07-fixed-fields" },
                  { text: "第14章 TCP Options", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/03-header/08-options" }
                ]
              },
              {
                text: "第四篇 TCP 连接的建立、状态和关闭",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/04-lifecycle",
                collapsed: true,
                items: [
                  { text: "第15章 三次握手", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/04-lifecycle/01-three-way-handshake" },
                  { text: "第16章 TCP 连接状态机", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/04-lifecycle/02-state-machine" },
                  { text: "第17章 连接关闭与半关闭", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/04-lifecycle/03-close-half-close" },
                  { text: "第18章 TIME_WAIT、CLOSE_WAIT 和连接释放", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/04-lifecycle/04-time-wait-close-wait" },
                  { text: "第19章 RST、异常断开和半开连接", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/04-lifecycle/05-rst-half-open" }
                ]
              },
              {
                text: "第五篇 TCP 如何可靠而高效地传输数据",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/05-reliability-performance",
                collapsed: true,
                items: [
                  { text: "第20章 确认、丢包检测和重传", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/05-reliability-performance/01-ack-loss-retransmission" },
                  { text: "第21章 乱序、重复数据和 SACK", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/05-reliability-performance/02-reordering-duplicates-sack" },
                  { text: "第22章 流量控制", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/05-reliability-performance/03-flow-control" },
                  { text: "第23章 拥塞控制", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/05-reliability-performance/04-congestion-control" },
                  { text: "第24章 延迟、吞吐量和带宽时延积（BDP）", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/05-reliability-performance/05-latency-throughput-bdp" }
                ]
              },
              {
                text: "第六篇 开发者如何正确使用 TCP",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development",
                collapsed: true,
                items: [
                  { text: "第25章 Socket API 的正确使用", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development/01-socket-api" },
                  { text: "第26章 如何设计应用层协议", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development/02-application-protocol" },
                  { text: "第27章 超时、重试和幂等性", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development/03-timeouts-retries-idempotency" },
                  { text: "第28章 并发、缓冲区和背压", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development/04-concurrency-buffers-backpressure" },
                  { text: "第29章 常用 Socket 选项", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development/05-socket-options" },
                  { text: "第30章 TLS、HTTP 与 TCP 的关系", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/06-application-development/06-tls-http-tcp" }
                ]
              },
              {
                text: "第七篇 抓包诊断、性能分析与进阶环境",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments",
                collapsed: true,
                items: [
                  { text: "第31章 系统化阅读一份 TCP 抓包", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/01-systematic-pcap-reading" },
                  { text: "第32章 常见抓包假象", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/02-capture-artifacts" },
                  { text: "第33章 常见故障案例", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/03-common-failures" },
                  { text: "第34章 TCP 性能调优的边界", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/04-performance-tuning-boundaries" },
                  { text: "第35章 IPv4、IPv6、MTU 和分片", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/05-ipv4-ipv6-mtu-fragmentation" },
                  { text: "第36章 NAT、防火墙和负载均衡", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/06-nat-firewall-load-balancing" },
                  { text: "第37章 TCP Keepalive 与应用层心跳", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/07-keepalive-heartbeat" },
                  { text: "第38章 TCP 安全基础", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/08-security" },
                  { text: "第39章 TCP、UDP 和 QUIC 的对比", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/07-diagnostics-environments/09-tcp-udp-quic" }
                ]
              },
              {
                text: "TCP 速查与规范阅读",
                link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices",
                collapsed: true,
                items: [
                  { text: "TCP 字段速查表", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/a-header-fields" },
                  { text: "TCP 状态速查表", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/b-states" },
                  { text: "Wireshark 过滤器速查", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/c-wireshark-filters" },
                  { text: "常用网络命令", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/d-network-commands" },
                  { text: "TCP 术语表", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/e-glossary" },
                  { text: "RFC 阅读路线", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/f-rfc-roadmap" },
                  {
                    text: "rfc9293",
                    collapsed: true,
                    items: [
                      { text: "1. 目的与范围", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/01-purpose-and-scope" },
                      { text: "2. 引言", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/02-introduction" },
                      { text: "3.1. 首部格式", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-01-header-format" },
                      { text: "3.2. 特定选项定义", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-02-specific-options" },
                      { text: "3.3. TCP 术语概览", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-03-terminology" },
                      { text: "3.4. 序列号", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-04-sequence-numbers" },
                      { text: "3.5. 建立连接", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-05-establishing-a-connection" },
                      { text: "3.6. 关闭连接", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-06-closing-a-connection" },
                      { text: "3.7. 分段", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-07-segmentation" },
                      { text: "3.8. 数据通信", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-08-data-communication" },
                      { text: "3.9. 接口", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-09-interfaces" },
                      { text: "3.10. 事件处理", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-10-event-processing" },
                      { text: "3. 功能规范", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/03-functional-specification" },
                      { text: "4. 术语表", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/04-glossary" },
                      { text: "5. 相对于 RFC 793 的变更", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/05-changes-from-rfc-793" },
                      { text: "6. IANA 注意事项", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/06-iana-considerations" },
                      { text: "7. 安全与隐私注意事项", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/07-security-and-privacy" },
                      { text: "8. 参考文献", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/08-references" },
                      { text: "致谢", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/acknowledgments" },
                      { text: "附录 A：其他实现说明", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/appendix-a" },
                      { text: "附录 B：TCP 需求汇总", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/appendix-b" },
                      { text: "作者地址", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/authors-address" },
                      { text: "RFC 9293：传输控制协议（TCP）", link: "/notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293/index" }
                    ]
                  }
                ]
              }
            ]
          }
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
              { text: "CS188：人工智能导论", link: "/notes/2026/08/01/cs188-introduction-to-ai/00-front-matter" },
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
