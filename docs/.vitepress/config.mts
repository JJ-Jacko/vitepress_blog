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
            { text: 'Python 数据类型', link: '/python/data_types' },
            { text: 'Python 连接数据库', link: '/python/connect_database' }
          ]
        }
      ],
      '/linux': [
        {
          text: 'Linux🐧',
          items: [
            { text: 'Linux 配置休眠', link: '/linux/hibernate' },
            { text: 'Nginx 反向代理', link: '/linux/nginx_reverse_proxy' },
            { text: 'Nginx 配置 TLS', link: '/linux/nginx_tls' },
            { text: '网页挂载', link: '/linux/mount_web_page' },
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
