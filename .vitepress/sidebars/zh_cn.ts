import { DefaultTheme } from "vitepress";
import {
  pathPythonCN            as pathPython,
  pathLinuxCN             as pathLinux,
  pathJavaCN              as pathJava,
  pathCCN                 as pathC,
  pathBackendCN           as pathBackend,
  pathFrontendCN          as pathFrontend,
  pathOtherCN             as pathOther,
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
  postsFrontend,
  postsOther,
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
  [pathFrontend]: [
    {
      text: '前端✨',
      link: pathFrontend,
      items: postsFrontend
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathFrontend}/${post.id}`
        }))
    }
  ],
  [pathOther]: [
    {
      text: '其他💻',
      link: pathOther,
      items: postsOther
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${pathOther}/${post.id}`
        }))
    }
  ],
}
