import { defineConfig } from 'vitepress'

export default defineConfig({
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
    sidebar: [
      {
        text: '概览',
        items: [
          { text: '首页', link: '/' },
          { text: '笔记索引', link: '/notes/' }
        ]
      },
      {
        text: '2026-05-22',
        items: [
          { text: '手机个人热点属于什么网络', link: '/notes/2026/05/22/networking-personal-hotspot' },
          { text: '游戏的 P2P 网络是如何实现的', link: '/notes/2026/05/22/game-p2p-networking' }
        ]
      },
      {
        text: '2026-05-19',
        items: [
          { text: '当今时代非常有用的数学', link: '/notes/2026/05/19/useful-math-today' },
          { text: '数学学习资源推荐', link: '/notes/2026/05/19/math-learning-resources' },
          { text: '现代数学分支思维导图', link: '/notes/2026/05/19/math-branches-mindmap' }
        ]
      }
    ],
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0.',
      copyright: 'Copyright © 2026 Learning Notes'
    },
    socialLinks: []
  }
})
