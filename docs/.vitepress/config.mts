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
    outline: {
      level: [2, 3]
    },
    
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
      // English (US)
      '/python': [
        {
          text: 'Language',
          collapsed: false,
          items: [
            { text: 'Python data types', link: '/python/data_types' },
            { text: 'Packages Management', link: '/python/packages_management' },
            { text: 're module', link: '/python/module_re' },
            { text: 'shutil module', link: '/python/module_shutil' },
            { text: 'Regular expression', link: '/python/regular_expression' },
            { text: 'File path related', link: '/python/file_path' },
            { text: 'File', link: '/python/file' },
            { text: 'Build Cpython from source code', link: '/python/build_cpython' },
          ]
        },
        {
          text: 'Design',
          collapsed: false,
          items: [
            { text: 'Strategy Pattern', link: '/python/strategy_pattern' },
            { text: 'Design Pattern', link: '/python/design_pattern' },
          ]
        },
        {
          text: 'Third-Party Libraries or Tools',
          collapsed: false,
          items: [
            { text: 'Connect database in Python', link: '/python/connect_database' },
            { text: 'OpenAI SDK', link: '/python/openai_sdk' },
            { text: 'yt-dlp basic usage', link: '/python/yt-dlp' },
          ]
        }
      ],
      '/linux': [
        {
          text: 'System',
          collapsed: false,
          items: [
            { text: 'SSH', link: '/linux/ssh' },
            { text: 'Linux Hibernate Configuration', link: '/linux/hibernate' },
            { text: 'Linux System Backup & Restore', link: '/linux/system_backup_restore' },
            { text: 'Nvidia Driver', link: '/linux/nvidia_driver' },
            { text: 'Shell Alias', link: '/linux/shell_alias' },
            { text: 'Environment variables', link: '/linux/env_var' },
            { text: 'zsh', link: '/linux/zsh' },
            { text: 'Proxy', link: '/linux/proxy' },
            { text: 'Make install', link: '/linux/make_install' },
            { text: 'Update kernel & headers', link: '/linux/upgrade_kernel&headers' },
            { text: 'Recovery root password', link: '/linux/recovery_root_passwd' },
            { text: 'Install Arch Linux', link: '/linux/archlinux' },
            { text: 'Debian Clean', link: '/linux/debian_clean' },
            { text: 'yum', link: '/linux/yum' },
          ]
        },
        {
          text: 'Tools Usage',
          collapsed: false,
          items: [
            { text: 'Neovim', link: '/linux/nvim' },
            { text: 'Kali sniffs Wi-Fi', link: '/linux/kali_wifi' },
            { text: 'Crack archive', link: '/linux/crack_archive' },
            { text: 'Crack Android', link: '/linux/crack_android' },
          ]
        },
        {
          text: 'Service Deployment',
          collapsed: false,
          items: [
            { text: 'Nginx Reverse Proxy', link: '/linux/nginx_reverse_proxy' },
            { text: 'Nginx Configure TLS', link: '/linux/nginx_tls' },
            { text: 'Samba Server', link: '/linux/samba_server' },
            { text: 'Mount Web Page', link: '/linux/mount_web_page' },
            { text: 'Gitlab', link: '/linux/gitlab' },
            { text: 'Service Configuration', link: '/linux/service_configuration' },
            { text: 'Intranet Penetration frp', link: '/linux/intranet_penetration_frp' },
            { text: 'Minecraft Server', link: '/linux/minecraft_server' },
          ]
        }
      ],
      '/java': [
        {
          text: 'Java☕',
          items: [
            { text: 'Java Data Types', link: '/java/data_types' },
            { text: 'Java Date Time', link: '/java/date_time' },
            { text: 'Pack Jar', link: '/java/pack_jar' },
            { text: 'Access Modifier', link: '/java/access_modifier' },
          ]
        }
      ],
      '/c': [
        {
          text: 'C',
          items: [
            { text: 'Setup Environment', link: '/c/env' },
            { text: 'Unit of Data', link: '/c/data_unit' },
            { text: 'C Data Type', link: '/c/data_types' },
            { text: 'Operator', link: '/c/operator' },
          ]
        }
      ],
      '/back-end': [
        {
          text: 'MySQL',
          link: '/back-end/mysql'
        },
        {
          text: 'Redis',
          link: '/back-end/redis'
        }
      ],
      '/front-end': [
        {
          text: 'Fontend✨',
          items: [
            { text: 'WeChat Mini Program', link: '/front-end/wechat_mini_program' },
          ]
        }
      ],
      '/other': [
        {
          text: 'Other💻',
          items: [
            { text: 'Git', link: '/other/git' },
            { text: 'Git Commit rule', link: '/other/git_commit_rule' },
            { text: 'VirtualBox Disk Free', link: '/other/vbox_disk_free' },
            { text: 'VSCode', link: '/other/vscode' },
            { text: 'Windows Configure Hibernate', link: '/other/windows_hibernate' },
            { text: 'Windows Stop Update', link: '/other/windows_stop_update' },
            { text: 'Legacy to UEFI', link: '/other/legacy_to_uefi' },
            { text: 'DIY Proxy', link: '/other/diy_proxy' },
          ]
        }
      ],

      // 中文 (简体)
      '/translated/zh_cn/python': [
        {
          text: '语言',
          collapsed: false,
          items: [
            { text: 'Python 数据类型', link: '/translated/zh_cn/python/data_types' },
            { text: '包管理', link: '/translated/zh_cn/python/packages_management' },
            { text: 're 正则库', link: '/translated/zh_cn/python/module_re' },
            { text: 'shutil 模块', link: '/translated/zh_cn/python/module_shutil' },
            { text: '正则表达式', link: '/translated/zh_cn/python/regular_expression' },
            { text: '文件路径相关', link: '/translated/zh_cn/python/file_path' },
            { text: '文件', link: '/translated/zh_cn/python/file' },
            { text: '从源码构建 Cpython', link: '/translated/zh_cn/python/build_cpython' },
          ]
        },
        {
          text: '设计',
          collapsed: false,
          items: [
            { text: '策略模式', link: '/translated/zh_cn/python/strategy_pattern' },
            { text: '设计模式', link: '/translated/zh_cn/python/design_pattern' },
          ]
        },
        {
          text: '第三方库或工具',
          collapsed: false,
          items: [
            { text: 'Python 连接数据库', link: '/translated/zh_cn/python/connect_database' },
            { text: 'OpenAI SDK', link: '/translated/zh_cn/python/openai_sdk' },
            { text: 'yt-dlp 基本使用', link: '/translated/zh_cn/python/yt-dlp' },
          ]
        }
      ],
      '/translated/zh_cn/linux': [
        {
          text: '系统',
          collapsed: false,
          items: [
            { text: 'SSH', link: '/translated/zh_cn/linux/ssh' },
            { text: 'Linux 配置休眠', link: '/translated/zh_cn/linux/hibernate' },
            { text: 'Linux 系统备份还原', link: '/translated/zh_cn/linux/system_backup_restore' },
            { text: '英伟达驱动', link: '/translated/zh_cn/linux/nvidia_driver' },
            { text: 'Shell 命令别名', link: '/translated/zh_cn/linux/shell_alias' },
            { text: '环境变量', link: '/translated/zh_cn/linux/env_var' },
            { text: 'zsh', link: '/translated/zh_cn/linux/zsh' },
            { text: '代理', link: '/translated/zh_cn/linux/proxy' },
            { text: '编译安装', link: '/translated/zh_cn/linux/make_install' },
            { text: '更新 kernel 及 headers', link: '/translated/zh_cn/linux/upgrade_kernel&headers' },
            { text: '恢复 root 密码', link: '/translated/zh_cn/linux/recovery_root_passwd' },
            { text: '安装 Arch Linux', link: '/translated/zh_cn/linux/archlinux' },
            { text: 'Debian 清理', link: '/translated/zh_cn/linux/debian_clean' },
            { text: 'yum', link: '/translated/zh_cn/linux/yum' },
          ]
        },
        {
          text: '工具使用',
          collapsed: false,
          items: [
            { text: 'Neovim', link: '/translated/zh_cn/linux/nvim' },
            { text: 'Kali 嗅探 Wi-Fi', link: '/translated/zh_cn/linux/kali_wifi' },
            { text: '破解压缩包', link: '/translated/zh_cn/linux/crack_archive' },
            { text: '安卓监听', link: '/translated/zh_cn/linux/crack_android' },
          ]
        },
        {
          text: '部署服务',
          collapsed: false,
          items: [
            { text: 'Nginx 反向代理', link: '/translated/zh_cn/linux/nginx_reverse_proxy' },
            { text: 'Nginx 配置 TLS', link: '/translated/zh_cn/linux/nginx_tls' },
            { text: 'Samba 服务器', link: '/translated/zh_cn/linux/samba_server' },
            { text: '网页挂载', link: '/translated/zh_cn/linux/mount_web_page' },
            { text: 'Gitlab', link: '/translated/zh_cn/linux/gitlab' },
            { text: '服务配置', link: '/translated/zh_cn/linux/service_configuration' },
            { text: '内网穿透 frp', link: '/translated/zh_cn/linux/intranet_penetration_frp' },
            { text: '我的世界服务器', link: '/translated/zh_cn/linux/minecraft_server' },
          ]
        }
      ],
      '/translated/zh_cn/java': [
        {
          text: 'Java☕',
          items: [
            { text: 'Java 数据类型', link: '/translated/zh_cn/java/data_types' },
            { text: 'Java 日期时间', link: '/translated/zh_cn/java/date_time' },
            { text: 'Jar 打包', link: '/translated/zh_cn/java/pack_jar' },
            { text: '访问修饰符', link: '/translated/zh_cn/java/access_modifier' },
          ]
        }
      ],
      '/translated/zh_cn/c': [
        {
          text: 'C',
          items: [
            { text: '环境搭建', link: '/translated/zh_cn/c/env' },
            { text: '数据单位', link: '/translated/zh_cn/c/data_unit' },
            { text: '数据类型', link: '/translated/zh_cn/c/data_types' },
            { text: '运算符', link: '/translated/zh_cn/c/operator' },
          ]
        }
      ],
      '/translated/zh_cn/back-end': [
        {
          text: 'MySQL',
          link: '/translated/zh_cn/back-end/mysql'
        },
        {
          text: 'Redis',
          link: '/translated/zh_cn/back-end/redis'
        }
      ],
      '/translated/zh_cn/front-end': [
        {
          text: '前端✨',
          items: [
            { text: '微信小程序', link: '/translated/zh_cn/front-end/wechat_mini_program' },
          ]
        }
      ],
      '/translated/zh_cn/other': [
        {
          text: '其他💻',
          items: [
            { text: 'Git 基本使用', link: '/translated/zh_cn/other/git' },
            { text: 'Git 提交规范', link: '/translated/zh_cn/other/git_commit_rule' },
            { text: 'VirtualBox 虚拟机磁盘释放空间', link: '/translated/zh_cn/other/vbox_disk_free' },
            { text: 'VSCode 配置及插件', link: '/translated/zh_cn/other/vscode' },
            { text: 'Windows 配置休眠', link: '/translated/zh_cn/other/windows_hibernate' },
            { text: 'Windows 停止更新', link: '/translated/zh_cn/other/windows_stop_update' },
            { text: 'Legacy 无损转 UEFI', link: '/translated/zh_cn/other/legacy_to_uefi' },
            { text: '自建代理', link: '/translated/zh_cn/other/diy_proxy' },
          ]
        }
      ],
    },
 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JJ-Jacko' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/506999103' },
    ],

    footer: {
      message: 'Frame <a href="https://vuejs.github.io/vitepress/v1/zh/" target="_blank">VitePress</a>',
      copyright: '©2025-2026 By Jacko <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2025416683号-2</a>'
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
      link: '/translated/zh_hk'
    },
    zh_cn: {
      label: '🇨🇳 中文 (简体)',
      lang: 'zh_cn',
      link: '/translated/zh_cn'
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
    server : {
      host: true
    }
  },
  lastUpdated: true
})
