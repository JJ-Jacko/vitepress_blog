import { DefaultTheme } from "vitepress";
import {
  pathPython,
  pathLinux,
  pathPythonLanguage,
  pathPythonDesign,
  pathPythonLibsTools,
  pathLinuxSystem,
  pathLinuxTools,
  pathLinuxService,

  postsPythonLanguage,
  postsPythonDesign,
  postsPythonLibsTools,
  postsLinuxSystem,
  postsLinuxTools,
  postsLinuxService,
} from "../constant";


export const sidebar: DefaultTheme.Sidebar = {
  [pathPython]: [
    {
      text: 'Language',
      link: pathPython,
      collapsed: false,
      items: postsPythonLanguage
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathPythonLanguage}/${post.id}`
        }))
    },
    {
      text: 'Design',
      collapsed: false,
      items: postsPythonDesign
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathPythonDesign}/${post.id}`
        }))
    },
    {
      text: 'Third-Party Libraries or Tools',
      collapsed: false,
      items: postsPythonLibsTools
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathPythonLibsTools}/${post.id}`
        }))
    }
  ],
  [pathLinux]: [
    {
      text: 'System',
      collapsed: false,
      items: postsLinuxSystem
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathLinuxSystem}/${post.id}`
        }))
    },
    {
      text: 'Tools Usage',
      collapsed: false,
      items: postsLinuxTools
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathLinuxTools}/${post.id}`
        }))
    },
    {
      text: 'Service Deployment',
      collapsed: false,
      items: postsLinuxService
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathLinuxService}/${post.id}`
        }))
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
      link: '/back-end/redis',
      collapsed: false,
      items: [
        { text: 'Data Types', link: '/back-end/redis/data_types' },
      ]
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
        { text: 'PowerShell', link: '/other/powershell' },
        { text: 'VirtualBox Disk Free', link: '/other/vbox_disk_free' },
        { text: 'VSCode', link: '/other/vscode' },
        { text: 'Windows Configure Hibernate', link: '/other/windows_hibernate' },
        { text: 'Windows Stop Update', link: '/other/windows_stop_update' },
        { text: 'Legacy to UEFI', link: '/other/legacy_to_uefi' },
        { text: 'DIY Proxy', link: '/other/diy_proxy' },
      ]
    }
  ],
}
