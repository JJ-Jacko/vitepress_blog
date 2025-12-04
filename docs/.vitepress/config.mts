import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jacko's Mini-world",
  description: "Jacko's personal blog",
  themeConfig: {
    sidebar: {
      '/python': [
        {
          text: 'Python🐍',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' }
          ]
        }
      ],
      '/linux': [
        {
          text: 'Linux🐧',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' }
          ]
        }
      ],
      '/java': [
        {
          text: 'Java☕',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' }
          ]
        }
      ],
      '/git': [
        {
          text: 'Git💻',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' }
          ]
        }
      ]
    },
 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JiegeJacko' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Jiege_jacko' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/506999103' },
      { icon: 'instagram', link: 'https://www.instagram.com/jj_jacko_hk/' },
      { icon: 'threads', link: 'https://www.threads.com/@jj_jacko_hk' }
    ],

    footer: {
      message: 'Frame <a href="https://vuejs.github.io/vitepress/v1/zh/" target="_blank">VitePress</a>',
      copyright: '©2025 By Jacko'
    }
  }
})
