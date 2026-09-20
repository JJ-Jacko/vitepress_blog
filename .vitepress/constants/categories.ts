import { Category } from "../datas";
import * as paths from "./paths";
import * as posts from "./posts";


export const python: Category = {
    path: paths.python,
    childrens: [
        {
            path: paths.pythonLanguage,
            introducePath: paths.python,
            nameEN: 'Language',
            nameCN: '语言',
            posts: posts.pythonLanguage
        },
        {
            path: paths.pythonDesign,
            nameEN: 'Design',
            nameCN: '设计',
            posts: posts.pythonDesign
        },
        {
            path: paths.pythonLibsTools,
            nameEN: 'Third-Party Libraries or Tools',
            nameCN: '第三方库或工具',
            posts: posts.pythonLibsTools
        },
    ]
};

export const linux: Category = {
    path: paths.linux,
    childrens: [
        {
            path: paths.linuxSystem,
            introducePath: paths.linux,
            nameEN: 'System',
            nameCN: '系统',
            posts: posts.linuxSystem
        },
        {
            path: paths.linuxTools,
            nameEN: 'Tools Usage',
            nameCN: '工具使用',
            posts: posts.linuxTools
        },
        {
            path: paths.linuxService,
            nameEN: 'Service Deployment',
            nameCN: '部署服务',
            posts: posts.linuxService
        },
    ]
};

export const java: Category = {
    path: paths.java,
    introducePath: paths.java,
    nameEN: 'Java☕',
    nameCN: 'Java☕',
    posts: posts.java,
};

export const c: Category = {
    path: paths.c,
    introducePath: paths.c,
    nameEN: 'C',
    nameCN: 'C',
    posts: posts.c
};

export const backend: Category = {
    path: paths.backend,
    introducePath: paths.backend,
    nameEN: 'Backend🧩',
    nameCN: '后端🧩',
    childrens: [
        {
            path: paths.backendMySQL,
            introducePath: paths.backendMySQL,
            nameEN: 'MySQL',
            nameCN: 'MySQL'
        },
        {
            path: paths.backendRedis,
            introducePath: paths.backendRedis,
            nameEN: 'Redis',
            nameCN: 'Redis',
            posts: posts.backendRedis
        }
    ]
};

export const frontend: Category = {
    path: paths.frontend,
    introducePath: paths.frontend,
    nameEN: 'Fontend✨',
    nameCN: '前端✨',
    posts: posts.frontend
};

export const other: Category = {
    path: paths.other,
    introducePath: paths.other,
    nameEN: 'Other💻',
    nameCN: '其他💻',
    posts: posts.other
};
