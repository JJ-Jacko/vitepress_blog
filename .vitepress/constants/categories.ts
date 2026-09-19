import { Category } from "../datas";
import {
    pathPython,
    pathLinux,
    pathJava,
    pathC,
    pathBackend,
    pathFrontend,
    pathOther,

    pathPythonLanguage,
    pathPythonDesign,
    pathPythonLibsTools,
    pathLinuxSystem,
    pathLinuxService,
    pathLinuxTools,
    pathBackendMySQL,
    pathBackendRedis,
} from "./paths";
import {
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
} from "./posts";


export const categoryPython: Category = {
    path: pathPython,
    childrens: [
        {
            path: pathPythonLanguage,
            introducePath: pathPython,
            nameEN: 'Language',
            nameCN: '语言',
            posts: postsPythonLanguage
        },
        {
            path: pathPythonDesign,
            nameEN: 'Design',
            nameCN: '设计',
            posts: postsPythonDesign
        },
        {
            path: pathPythonLibsTools,
            nameEN: 'Third-Party Libraries or Tools',
            nameCN: '第三方库或工具',
            posts: postsPythonLibsTools
        },
    ]
};

export const categoryLinux: Category = {
    path: pathLinux,
    childrens: [
        {
            path: pathLinuxSystem,
            introducePath: pathLinux,
            nameEN: 'System',
            nameCN: '系统',
            posts: postsLinuxSystem
        },
        {
            path: pathLinuxTools,
            nameEN: 'Tools Usage',
            nameCN: '工具使用',
            posts: postsLinuxTools
        },
        {
            path: pathLinuxService,
            nameEN: 'Service Deployment',
            nameCN: '部署服务',
            posts: postsLinuxService
        },
    ]
};

export const categoryJava: Category = {
    path: pathJava,
    introducePath: pathJava,
    nameEN: 'Java☕',
    nameCN: 'Java☕',
    posts: postsJava,
};

export const categoryC: Category = {
    path: pathC,
    introducePath: pathC,
    nameEN: 'C',
    nameCN: 'C',
    posts: postsC
};

export const categoryBackend: Category = {
    path: pathBackend,
    introducePath: pathBackend,
    nameEN: 'Backend🧩',
    nameCN: '后端🧩',
    childrens: [
        {
            path: pathBackendMySQL,
            introducePath: pathBackendMySQL,
            nameEN: 'MySQL',
            nameCN: 'MySQL'
        },
        {
            path: pathBackendRedis,
            introducePath: pathBackendRedis,
            nameEN: 'Redis',
            nameCN: 'Redis',
            posts: postsBackendRedis
        }
    ]
};

export const categoryFrontend: Category = {
    path: pathFrontend,
    introducePath: pathFrontend,
    nameEN: 'Fontend✨',
    nameCN: '前端✨',
    posts: postsFrontend
};

export const categoryOther: Category = {
    path: pathOther,
    introducePath: pathOther,
    nameEN: 'Other💻',
    nameCN: '其他💻',
    posts: postsOther
};
