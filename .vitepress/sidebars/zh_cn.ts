import { DefaultTheme } from "vitepress";
import {
  pathPythonCN            as pathPython,
  pathLinuxCN             as pathLinux,
  pathPythonLanguageCN    as pathPythonLanguage,
  pathPythonDesignCN      as pathPythonDesign,
  pathPythonLibsToolsCN   as pathPythonLibsTools,
  pathLinuxSystemCN       as pathLinuxSystem,
  pathLinuxToolsCN        as pathLinuxTools,
  pathLinuxServiceCN      as pathLinuxService,

  postsPythonLanguage,
  postsPythonDesign,
  postsPythonLibsTools,
  postsLinuxSystem,
  postsLinuxTools,
  postsLinuxService
} from "../constant";


export const sidebar: DefaultTheme.Sidebar = {
  [pathPython]: [
    {
      text: '语言',
      link: pathPython,
      collapsed: false,
      items: postsPythonLanguage
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathPythonLanguage}/${post.id}`
        }))
    },
    {
      text: '设计',
      collapsed: false,
      items: postsPythonDesign
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathPythonDesign}/${post.id}`
        }))
    },
    {
      text: '第三方库或工具',
      collapsed: false,
      items: postsPythonLibsTools
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathPythonLibsTools}/${post.id}`
        }))
    }
  ],
  [pathLinux]: [
    {
      text: '系统',
      collapsed: false,
      items: postsLinuxSystem
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathLinuxSystem}/${post.id}`
        }))
    },
    {
      text: '工具使用',
      collapsed: false,
      items: postsLinuxTools
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathLinuxTools}/${post.id}`
        }))
    },
    {
      text: '部署服务',
      collapsed: false,
      items: postsLinuxService
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathLinuxService}/${post.id}`
        }))
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
      link: '/translated/zh_cn/back-end/redis',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/translated/zh_cn/back-end/redis/data_types' },
      ]
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
        { text: 'PowerShell', link: '/translated/zh_cn/other/powershell' },
        { text: 'VirtualBox 虚拟机磁盘释放空间', link: '/translated/zh_cn/other/vbox_disk_free' },
        { text: 'VSCode 配置及插件', link: '/translated/zh_cn/other/vscode' },
        { text: 'Windows 配置休眠', link: '/translated/zh_cn/other/windows_hibernate' },
        { text: 'Windows 停止更新', link: '/translated/zh_cn/other/windows_stop_update' },
        { text: 'Legacy 无损转 UEFI', link: '/translated/zh_cn/other/legacy_to_uefi' },
        { text: '自建代理', link: '/translated/zh_cn/other/diy_proxy' },
      ]
    }
  ],
}
