import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineConfig } from 'vitepress'

export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: 'Learning Notes',
  description: '个人学习笔记与资料索引',
  base: process.env.BASE_PATH ?? '/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true
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
      }
      ,{
        text: "2026-07-23",
        items: [
          { text: "MSC2020 数学主题分类中文笔记", link: "/notes/2026/07/23/msc2020-mathematics-subject-classification-zh" }
        ]
      }
      ,{
        text: "2026-06-10",
        items: [
          { text: "负二项分布的期望与方差推导", link: "/notes/2026/06/10/negative-binomial-mean-variance" },
          { text: "几何分布与指数分布的联系", link: "/notes/2026/06/10/geometric-exponential-connection" },
          { text: "泊松分布公式推导与二项分布的联系", link: "/notes/2026/06/10/poisson-distribution-derivation" },
          { text: "协方差、相关系数与柯西不等式", link: "/notes/2026/06/10/covariance-correlation-cauchy-vector" }
        ]
      }
      ,{
        text: "2026-05-31",
        items: [
          { text: "Network Design Principles：Two-Tier、Three-Tier 与 Spine-Leaf", link: "/notes/2026/05/31/network-design-architectures" }
        ]
      }
      ,{
        text: "2026-05-24",
        items: [
          { text: "多局胜制中强者胜率随局数增加而上升", link: "/notes/2026/05/24/best-of-series-stronger-win-rate" },
          { text: "软件架构层级与 Enterprise Architecture 示例", link: "/notes/2026/05/24/software-architecture-levels-enterprise-examples" },
          { text: "Frame、MAC、IP 与 ARP：一次网络访问如何找到下一跳", link: "/notes/2026/05/24/networking-frame-mac-ip" },
          { text: "Socket 与 WebSocket 的区别", link: "/notes/2026/05/24/networking-socket-websocket" },
          { text: "Technical Writing 中的 SEO 工具：Trends、Keyword Planner 与 Analytics", link: "/notes/2026/05/24/technical-writing-seo-tools" },
          { text: "Technical Writing 中的三种 Technical Content", link: "/notes/2026/05/24/technical-writing-content-types" }
        ]
      }
      ,{
        text: "2026-05-22",
        items: [
          { text: "手机个人热点属于什么网络", link: "/notes/2026/05/22/networking-personal-hotspot" },
          { text: "游戏的 P2P 网络是如何实现的", link: "/notes/2026/05/22/game-p2p-networking" }
        ]
      }
      ,{
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

