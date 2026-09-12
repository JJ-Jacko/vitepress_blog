import { Post } from "./datas";


// Paths
export const pathPython = '/python';
export const pathLinux  = '/linux';
export const pathJava   = '/java';
export const pathC      = '/c';
export const pathPythonLanguage     = `${pathPython}/language`;
export const pathPythonDesign       = `${pathPython}/design`;
export const pathPythonLibsTools    = `${pathPython}/libs_tools`;
export const pathLinuxSystem        = `${pathLinux}/system`;
export const pathLinuxTools         = `${pathLinux}/tools`;
export const pathLinuxService       = `${pathLinux}/service`;

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

export const postsLinuxSystem: Post[] = [
    {
        id: 'ssh',
        nameEN: 'SSH',
        nameCN: 'SSH',
    },
    {
        id: 'hibernate',
        nameEN: 'Linux Hibernate Configuration',
        nameCN: 'Linux 配置休眠',
    },
    {
        id: 'system_backup_restore',
        nameEN: 'Linux System Backup & Restore',
        nameCN: 'Linux 系统备份还原',
    },
    {
        id: 'nvidia_driver',
        nameEN: 'Nvidia Driver',
        nameCN: '英伟达驱动',
    },
    {
        id: 'shell_alias',
        nameEN: 'Shell Alias',
        nameCN: 'Shell 命令别名',
    },
    {
        id: 'env_var',
        nameEN: 'Environment variables',
        nameCN: '环境变量',
    },
    {
        id: 'zsh',
        nameEN: 'zsh',
        nameCN: 'zsh',
    },
    {
        id: 'proxy',
        nameEN: 'Proxy',
        nameCN: '代理',
    },
    {
        id: 'make_install',
        nameEN: 'Compile and Install',
        nameCN: '编译安装',
    },
    {
        id: 'upgrade_kernel&headers',
        nameEN: 'Upgrade Kernel and Headers',
        nameCN: '更新 kernel 及 headers',
    },
    {
        id: 'recovery_root_passwd',
        nameEN: 'Recover Root Password',
        nameCN: '恢复 root 密码',
    },
    {
        id: 'archlinux',
        nameEN: 'Install Arch Linux',
        nameCN: '安装 Arch Linux',
    },
    {
        id: 'debian_clean',
        nameEN: 'Debian Clean',
        nameCN: 'Debian 清理',
    },
    {
        id: 'yum',
        nameEN: 'yum',
        nameCN: 'yum',
    }
];

export const postsLinuxTools: Post[] = [
    {
        id: 'nvim',
        nameEN: 'Neovim',
        nameCN: 'Neovim',
    },
    {
        id: 'kali_wifi',
        nameEN: 'Kali sniffs Wi-Fi',
        nameCN: 'Kali 嗅探 Wi-Fi',
    },
    {
        id: 'crack_archive',
        nameEN: 'Crack archive',
        nameCN: '破解压缩包',
    },
    {
        id: 'crack_android',
        nameEN: 'Crack Android',
        nameCN: '安卓监听',
    },
];

export const postsLinuxService: Post[] = [
    {
        id: 'nginx_reverse_proxy',
        nameEN: 'Nginx Reverse Proxy',
        nameCN: 'Nginx 反向代理',
    },
    {
        id: 'nginx_tls',
        nameEN: 'Nginx Configure TLS',
        nameCN: 'Nginx 配置 TLS',
    },
    {
        id: 'samba_server',
        nameEN: 'Samba Server',
        nameCN: 'Samba 服务器',
    },
    {
        id: 'mount_web_page',
        nameEN: 'Mount Web Page',
        nameCN: '网页挂载',
    },
    {
        id: 'gitlab',
        nameEN: 'Gitlab',
        nameCN: 'Gitlab',
    },
    {
        id: 'gitea',
        nameEN: 'Gitea',
        nameCN: 'Gitea',
    },
    {
        id: 'jellyfin',
        nameEN: 'Jellyfin',
        nameCN: 'Jellyfin',
    },
    {
        id: 'openlist',
        nameEN: 'OpenList',
        nameCN: 'OpenList',
    },
    {
        id: 'qbittorrent',
        nameEN: 'qBittorrent',
        nameCN: 'qBittorrent',
    },
    {
        id: 'service_configuration',
        nameEN: 'Service Configuration',
        nameCN: '服务配置',
    },
    {
        id: 'intranet_penetration_frp',
        nameEN: 'Intranet Penetration frp',
        nameCN: '内网穿透 frp',
    },
    {
        id: 'minecraft_server',
        nameEN: 'Minecraft Server',
        nameCN: '我的世界服务器',
    },
];

export const postsJava: Post[] = [
    {
        id: 'data_types',
        nameEN: 'Java Data Types',
        nameCN: 'Java 数据类型',
    },
    {
        id: 'date_time',
        nameEN: 'Java Date Time',
        nameCN: 'Java 日期时间',
    },
    {
        id: 'pack_jar',
        nameEN: 'Pack Jar',
        nameCN: 'Jar 打包',
    },
    {
        id: 'access_modifier',
        nameEN: 'Access Modifier',
        nameCN: '访问修饰符',
    },
];

export const postsC: Post[] = [
    {
        id: 'env',
        nameEN: 'Setup Environment',
        nameCN: '环境搭建',
    },
    {
        id: 'data_unit',
        nameEN: 'Unit of Data',
        nameCN: '数据单位',
    },
    {
        id: 'data_types',
        nameEN: 'C Data Type',
        nameCN: '数据类型',
    },
    {
        id: 'operator',
        nameEN: 'Operator',
        nameCN: '运算符',
    },
];

// languages
export const lanCN = '/translated/zh_cn';
export const lanHK = '/translated/zh_hk';

export const pathPythonCN           = `${lanCN}${pathPython}`;
export const pathLinuxCN            = `${lanCN}${pathLinux}`;
export const pathJavaCN             = `${lanCN}${pathJava}`;
export const pathCCN                = `${lanCN}${pathC}`;
export const pathPythonLanguageCN   = `${lanCN}${pathPythonLanguage}`;
export const pathPythonDesignCN     = `${lanCN}${pathPythonDesign}`;
export const pathPythonLibsToolsCN  = `${lanCN}${pathPythonLibsTools}`;
export const pathLinuxSystemCN      = `${lanCN}${pathLinuxSystem}`;
export const pathLinuxToolsCN       = `${lanCN}${pathLinuxTools}`;
export const pathLinuxServiceCN     = `${lanCN}${pathLinuxService}`;
