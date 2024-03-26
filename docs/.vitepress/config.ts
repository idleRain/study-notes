import type { DefaultTheme, UserConfig } from 'vitepress'

const config: UserConfig<DefaultTheme.Config> = {
  // 站点级选项
  title: '小丁童鞋的学习笔记',
  description: '一个记录学习 MySql 的笔记',
  head: [['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}]],
  lang: 'zh',

  themeConfig: {
    // 主题级选项
    logo: '/avatar.jpg',
    returnToTopLabel: '返回顶部',
    nav: [
      { text: '基础笔记', link: '/' },
      { text: '进阶笔记', link: '/advanced' },
      { text: 'github', link: 'https://github.com/idleRain' },
      {
        text: '相关技术',
        items: [
          { text: 'vitepress', link: 'https://vitepress.dev/zh/' },
          { text: 'markdown-it', link: 'https://github.com/markdown-it/markdown-it' },
          { text: 'localtunnel', link: 'https://github.com/localtunnel/localtunnel' }
        ]
      }
    ],
    sidebar: [
      { text: '基础笔记', link: '/' },
      { text: '进阶笔记', link: '/advanced' }
    ],
    sidebarMenuLabel: '目录',
    outline: { label: '页面导航' }
  }
}

export default config
