import { Post } from "./datas";


// Paths
export const pathPython = '/python';
export const pathPythonLanguage = `${pathPython}/language`;
export const pathPythonDesign = `${pathPython}/design`;
export const pathPythonLibsTools = `${pathPython}/libs_tools`;

// Posts
export const postsPythonLanguage: Post[] = [
    {
        id: 'data_types',
        nameEN: 'Python data types',
        nameCN: 'Python 数据类型',
    },
    {
        id: 'packages_management',
        nameEN: 'Packages Management',
        nameCN: '包管理',
    },
    {
        id: 'module_re',
        nameEN: 're module',
        nameCN: 're 正则库',
    },
    {
        id: 'module_shutil',
        nameEN: 'shutil module',
        nameCN: 'shutil 模块',
    },
    {
        id: 'regular_expression',
        nameEN: 'Regular expression',
        nameCN: '正则表达式',
    },
    {
        id: 'file_path',
        nameEN: 'File path related',
        nameCN: '文件路径相关',
    },
    {
        id: 'file',
        nameEN: 'File',
        nameCN: '文件',
    },
    {
        id: 'build_cpython',
        nameEN: 'Build Cpython from source code',
        nameCN: '从源码构建 Cpython',
    },
];

export const postsPythonDesign: Post[] = [
    {
        id: 'strategy_pattern',
        nameEN: 'Strategy Pattern',
        nameCN: '策略模式',
    },
    {
        id: 'design_pattern',
        nameEN: 'Design Pattern',
        nameCN: '设计模式',
    },
];

export const postsPythonLibsTools: Post[] = [
    {
        id: 'connect_database',
        nameEN: 'Connect database in Python',
        nameCN: 'Python 连接数据库',
    },
    {
        id: 'openai_sdk',
        nameEN: 'OpenAI SDK',
        nameCN: 'OpenAI SDK',
    },
    {
        id: 'yt-dlp',
        nameEN: 'yt-dlp basic usage',
        nameCN: 'yt-dlp 基本使用',
    },
];

// languages
export const lanCN = '/translated/zh_cn';
export const lanHK = '/translated/zh_hk';

export const pathPythonCN           = `${lanCN}${pathPython}`;
export const pathPythonLanguageCN   = `${lanCN}${pathPythonLanguage}`;
export const pathPythonDesignCN     = `${lanCN}${pathPythonDesign}`;
export const pathPythonLibsToolsCN  = `${lanCN}${pathPythonLibsTools}`;
