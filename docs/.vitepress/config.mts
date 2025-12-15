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
            { text: 'pip', link: '/python/pip' },
            { text: 're 正则库', link: '/python/module_re' },
            { text: '文件路径相关', link: '/python/file_path' },
            { text: 'Python 连接数据库', link: '/python/connect_database' },
            { text: 'yt-dlp 基本使用', link: '/python/yt-dlp' },
            { text: '从源码构建 Cpython', link: '/python/build_cpython' },
          ]
        }
      ],
      '/linux': [
        {
          text: 'Linux🐧',
          items: [
            { text: 'SSH', link: '/linux/ssh' },
            { text: 'Linux 配置休眠', link: '/linux/hibernate' },
            { text: 'Nginx 反向代理', link: '/linux/nginx_reverse_proxy' },
            { text: 'Nginx 配置 TLS', link: '/linux/nginx_tls' },
            { text: '网页挂载', link: '/linux/mount_web_page' },
            { text: 'Shell 命令别名', link: '/linux/shell_alias' },
            { text: 'zsh', link: '/linux/zsh' },
            { text: 'Neovim', link: '/linux/nvim' },
            { text: '代理', link: '/linux/proxy' },
            { text: '编译安装', link: '/linux/make_install' },
            { text: 'Gitlab', link: '/linux/gitlab' },
            { text: '更新 kernel 及 headers', link: '/linux/upgrade_kernel&headers' },
            { text: '恢复 root 密码', link: '/linux/recovery_root_passwd' },
            { text: 'Samba 服务器', link: '/linux/samba_server' },
            { text: '安装 Arch Linux', link: '/linux/archlinux' },
            { text: 'Kali 嗅探 Wi-Fi', link: '/linux/kali_wifi' },
            { text: '破解压缩包', link: '/linux/crack_archive' },
            { text: '安卓监听', link: '/linux/crack_android' },
            { text: 'yum', link: '/linux/yum' },
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
            { text: '访问修饰符', link: '/java/access_modifier' },
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
  },
  locales: {
    root: {
      label: '🇺🇸 English (US)',
      lang: 'en_us'
    },
    zh_hk: {
      label: '🇭🇰 中文 (廣東話)',
      lang: 'zh_hk',
      link: '/zh_hk/index'
    },
    zh_cn: {
      label: '🇨🇳 中文 (简体)',
      lang: 'zh_cn',
      link: '/zh_cn/index'
    },
  }
})
