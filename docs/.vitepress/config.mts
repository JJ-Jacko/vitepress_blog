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
            { text: 'Python 连接数据库', link: '/python/connect_database' },
            { text: 'yt-dlp 基本使用', link: '/python/yt-dlp' },
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
            { text: 'Shell 命令别名', link: '/linux/shell_alias' },
          ]
        }
      ],
      '/java': [
        {
          text: 'Java☕',
          items: [
            { text: 'Java 数据类型', link: '/java/data_types' },
            { text: 'Java 日期时间', link: '/java/date_time' },
            { text: 'Jar 打包', link: '/java/pack_jar' },
          ]
        }
      ],
      '/front-end': [
        {
          text: '前端✨',
          items: [
            { text: '微信小程序', link: '/front-end/wechat_mini_program' },
          ]
        }
      ],
      '/git': [
        {
          text: 'Git💻',
          items: [
            { text: 'Git 基本使用', link: '/git/git' },
            { text: 'Git 提交规范', link: '/git/git_commit_rule' },
            { text: 'VirtualBox 虚拟机磁盘释放空间', link: '/git/vbox_disk_free' },
            { text: 'VSCode 配置及插件', link: '/git/vscode' },
            { text: 'Windows 配置休眠', link: '/git/windows_hibernate' },
            { text: 'Legacy 无损转 UEFI', link: '/git/legacy_to_uefi' },
            { text: 'MySQL', link: '/git/mysql' },
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
