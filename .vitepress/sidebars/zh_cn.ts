import { DefaultTheme } from "vitepress";
import {
  pathPythonCN            as pathPython,
  pathLinuxCN             as pathLinux,
  pathJavaCN              as pathJava,
  pathCCN                 as pathC,
  pathBackendCN           as pathBackend,
  pathPythonLanguageCN    as pathPythonLanguage,
  pathPythonDesignCN      as pathPythonDesign,
  pathPythonLibsToolsCN   as pathPythonLibsTools,
  pathLinuxSystemCN       as pathLinuxSystem,
  pathLinuxToolsCN        as pathLinuxTools,
  pathLinuxServiceCN      as pathLinuxService,
  pathBackendMySQLCN      as pathBackendMySQL,
  pathBackendRedisCN      as pathBackendRedis,

  postsPythonLanguage,
  postsPythonDesign,
  postsPythonLibsTools,
  postsLinuxSystem,
  postsLinuxTools,
  postsLinuxService,
  postsJava,
  postsC,
  postsBackendRedis,
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
  [pathJava]: [
    {
      text: 'Java☕',
      link: pathJava,
      items: postsJava
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathJava}/${post.id}`
        }))
    }
  ],
  [pathC]: [
    {
      text: 'C',
      link: pathC,
      items: postsC
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathC}/${post.id}`
        }))
    }
  ],
  [pathBackend]: [
    {
      text: 'MySQL',
      link: pathBackendMySQL
    },
    {
      text: 'Redis',
      link: pathBackendRedis,
      collapsed: false,
      items: postsBackendRedis
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathBackendRedis}/${post.id}`
        }))
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
