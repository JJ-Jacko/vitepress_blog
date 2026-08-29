import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import { sidebar as enUsSidebar } from './sidebars/en_us'
import { sidebar as zhCnSidebar } from './sidebars/zh_cn'
import { sidebar as zhHkSidebar } from './sidebars/zh_hk'


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
      ...enUsSidebar,
      ...zhCnSidebar,
      ...zhHkSidebar
    },
 
    nav: [
      { text: 'CPS Test', link: 'https://cps.jacko.asia' },
    ],

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
