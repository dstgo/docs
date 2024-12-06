import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wilson",
  description: "Wilson是一个基于容器虚拟化实现的分布式游戏管理面板",
  themeConfig: {
    logo: "/src/public/logo.png",
    footer: {
      message: '发布于MIT协议',
      copyright: '版权所有 © 2023-2024 <a href="https://github.com/dstgo">dstgo</a>'
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: "概览",
        link: "/src/intro",
      },
      {
        text: "快速开始",
        link: "/src/quickstart",
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dstgo/wilson' }
    ]
  }
})
