import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jacko's Mini-world",
  description: "Jacko's personal blog",
  head: [
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    
    search: {
      provider: "local",
      options: {
        locales: {
          zh_hk: {
            translations: {
              button: {
                buttonText: "搜尋"
              },
              modal: {
                noResultsText: "無結果",
                resetButtonTitle: "清除 ",
                footer: {
                  selectText: "選擇",
                  navigateText: "切換",
                  closeText: "關閉"
                }
              }
            }
          },
          zh_cn: {
            translations: {
              button: {
                buttonText: "搜索"
              },
              modal: {
                noResultsText: "无结果",
                resetButtonTitle: "清除",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭"
                }
              }
            }
          }
        }
      }
    },

    sidebar: {
      // 中文 (简体)
      '/zh_cn/python': [
        {
          text: 'Python🐍',
          items: [
            { text: 'Python 数据类型', link: '/zh_cn/python/data_types' },
            { text: 'pip', link: '/zh_cn/python/pip' },
            { text: 're 正则库', link: '/zh_cn/python/module_re' },
            { text: 'shutil 模块', link: '/zh_cn/python/module_shutil' },
            { text: '正则表达式', link: '/zh_cn/python/regular_expression' },
            { text: '文件路径相关', link: '/zh_cn/python/file_path' },
            { text: '文件', link: '/zh_cn/python/file' },
            { text: 'Python 连接数据库', link: '/zh_cn/python/connect_database' },
            { text: 'yt-dlp 基本使用', link: '/zh_cn/python/yt-dlp' },
            { text: '从源码构建 Cpython', link: '/zh_cn/python/build_cpython' },
          ]
        }
      ],
      '/zh_cn/linux': [
        {
          text: 'Linux🐧',
          items: [
            { text: 'SSH', link: '/zh_cn/linux/ssh' },
            { text: 'Linux 配置休眠', link: '/zh_cn/linux/hibernate' },
            { text: 'Nginx 反向代理', link: '/zh_cn/linux/nginx_reverse_proxy' },
            { text: 'Nginx 配置 TLS', link: '/zh_cn/linux/nginx_tls' },
            { text: '网页挂载', link: '/zh_cn/linux/mount_web_page' },
            { text: 'Shell 命令别名', link: '/zh_cn/linux/shell_alias' },
            { text: '环境变量', link: '/zh_cn/linux/env_var' },
            { text: 'zsh', link: '/zh_cn/linux/zsh' },
            { text: 'Neovim', link: '/zh_cn/linux/nvim' },
            { text: '代理', link: '/zh_cn/linux/proxy' },
            { text: '编译安装', link: '/zh_cn/linux/make_install' },
            { text: 'Gitlab', link: '/zh_cn/linux/gitlab' },
            { text: '更新 kernel 及 headers', link: '/zh_cn/linux/upgrade_kernel&headers' },
            { text: '恢复 root 密码', link: '/zh_cn/linux/recovery_root_passwd' },
            { text: 'Samba 服务器', link: '/zh_cn/linux/samba_server' },
            { text: '安装 Arch Linux', link: '/zh_cn/linux/archlinux' },
            { text: 'Kali 嗅探 Wi-Fi', link: '/zh_cn/linux/kali_wifi' },
            { text: '破解压缩包', link: '/zh_cn/linux/crack_archive' },
            { text: '安卓监听', link: '/zh_cn/linux/crack_android' },
            { text: 'yum', link: '/zh_cn/linux/yum' },
          ]
        }
      ],
      '/zh_cn/java': [
        {
          text: 'Java☕',
          items: [
            { text: 'Java 数据类型', link: '/zh_cn/java/data_types' },
            { text: 'Java 日期时间', link: '/zh_cn/java/date_time' },
            { text: 'Jar 打包', link: '/zh_cn/java/pack_jar' },
            { text: '访问修饰符', link: '/zh_cn/java/access_modifier' },
          ]
        }
      ],
      '/zh_cn/c': [
        {
          text: 'C',
          items: [
            { text: '环境搭建', link: '/zh_cn/c/env' },
            { text: '数据单位', link: '/zh_cn/c/data_unit' },
            { text: '数据类型', link: '/zh_cn/c/data_types' },
            { text: '运算符', link: '/zh_cn/c/operator' },
          ]
        }
      ],
      '/zh_cn/front-end': [
        {
          text: '前端✨',
          items: [
            { text: '微信小程序', link: '/zh_cn/front-end/wechat_mini_program' },
          ]
        }
      ],
      '/zh_cn/other': [
        {
          text: '其他💻',
          items: [
            { text: 'Git 基本使用', link: '/zh_cn/other/git' },
            { text: 'Git 提交规范', link: '/zh_cn/other/git_commit_rule' },
            { text: 'VirtualBox 虚拟机磁盘释放空间', link: '/zh_cn/other/vbox_disk_free' },
            { text: 'VSCode 配置及插件', link: '/zh_cn/other/vscode' },
            { text: 'Windows 配置休眠', link: '/zh_cn/other/windows_hibernate' },
            { text: 'Legacy 无损转 UEFI', link: '/zh_cn/other/legacy_to_uefi' },
            { text: 'MySQL', link: '/zh_cn/other/mysql' },
          ]
        }
      ],

      // English (US)
      '/en_us/python': [
        {
          text: 'Python🐍',
          items: [
            { text: 'Python data types', link: '/en_us/python/data_types' },
            { text: 'pip', link: '/en_us/python/pip' },
            { text: 're module', link: '/en_us/python/module_re' },
            { text: 'shutil module', link: '/en_us/python/module_shutil' },
            { text: 'Regular expression', link: '/en_us/python/regular_expression' },
            { text: 'File path related', link: '/en_us/python/file_path' },
            { text: 'File', link: '/en_us/python/file' },
            { text: 'Connect database in Python', link: '/en_us/python/connect_database' },
            { text: 'yt-dlp basic usage', link: '/en_us/python/yt-dlp' },
            { text: 'Build Cpython from source code', link: '/en_us/python/build_cpython' },
          ]
        }
      ],
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
      lang: 'en_us',
      link: '/en_us/index'
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
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  }
})
