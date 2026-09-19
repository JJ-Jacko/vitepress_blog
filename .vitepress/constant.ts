import {
    Post,
    Category,
    Language,
    Location,
} from "./datas";


// Paths
const pathPython     = '/python';
const pathLinux      = '/linux';
const pathJava       = '/java';
const pathC          = '/c';
const pathBackend    = '/back-end';
const pathFrontend   = '/front-end';
const pathOther      = '/other';
const pathPythonLanguage     = `${pathPython}/language`;
const pathPythonDesign       = `${pathPython}/design`;
const pathPythonLibsTools    = `${pathPython}/libs_tools`;
const pathLinuxSystem        = `${pathLinux}/system`;
const pathLinuxTools         = `${pathLinux}/tools`;
const pathLinuxService       = `${pathLinux}/service`;
const pathBackendMySQL       = `${pathBackend}/mysql`;
const pathBackendRedis       = `${pathBackend}/redis`;
export const allEntriesPath = [
    pathPython,
    pathLinux,
    pathJava,
    pathC,
    pathBackend,
    pathFrontend,
    pathOther,
];

// Languages
export const lanPathMap: Record<Language, string> = {
    "en-US": "",
    "zh-CN": '/translated/zh_cn',
    "zh-HK": '/translated/zh_hk',
};

// Posts
export const postsPythonLanguage: Post[] = [
    {
        id: 'data_types',
        date: new Date("2025-06-10 16:00"),
        nameEN: 'Python data types',
        nameCN: 'Python 数据类型',

    },
    {
        id: 'packages_management',
        date: new Date("2024-05-04 13:03"),
        nameEN: 'Packages Management',
        nameCN: '包管理',
    },
    {
        id: 'module_re',
        date: new Date("2024-05-15 08:48"),
        nameEN: 're module',
        nameCN: 're 正则库',
    },
    {
        id: 'module_shutil',
        date: new Date("2024-08-15 11:42"),
        nameEN: 'shutil module',
        nameCN: 'shutil 模块',
    },
    {
        id: 'regular_expression',
        date: new Date("2024-05-07 16:22"),
        nameEN: 'Regular expression',
        nameCN: '正则表达式',
    },
    {
        id: 'file_path',
        date: new Date("2024-08-15 14:22"),
        nameEN: 'File path related',
        nameCN: '文件路径相关',
    },
    {
        id: 'file',
        date: new Date("2024-05-28 10:22"),
        nameEN: 'File',
        nameCN: '文件',
    },
    {
        id: 'build_cpython',
        date: new Date("2024-11-22 12:42"),
        nameEN: 'Build Cpython from source code',
        nameCN: '从源码构建 Cpython',
    },
];

export const postsPythonDesign: Post[] = [
    {
        id: 'strategy_pattern',
        date: new Date("2026-07-12 21:26"),
        nameEN: 'Strategy Pattern',
        nameCN: '策略模式',
    },
    {
        id: 'design_pattern',
        date: new Date("2026-08-08 18:16"),
        nameEN: 'Design Pattern',
        nameCN: '设计模式',
    },
];

export const postsPythonLibsTools: Post[] = [
    {
        id: 'connect_database',
        date: new Date("2025-06-10 16:00"),
        nameEN: 'Connect database in Python',
        nameCN: 'Python 连接数据库',
    },
    {
        id: 'openai_sdk',
        date: new Date("2026-08-20 21:57"),
        nameEN: 'OpenAI SDK',
        nameCN: 'OpenAI SDK',
    },
    {
        id: 'yt-dlp',
        date: new Date("2024-04-20 10:51"),
        nameEN: 'yt-dlp basic usage',
        nameCN: 'yt-dlp 基本使用',
    },
];

export const postsLinuxSystem: Post[] = [
    {
        id: 'ssh',
        date: new Date("2024-05-12 11:49"),
        nameEN: 'SSH',
        nameCN: 'SSH',
    },
    {
        id: 'hibernate',
        date: new Date("2025-07-18"),
        nameEN: 'Linux Hibernate Configuration',
        nameCN: 'Linux 配置休眠',
    },
    {
        id: 'system_backup_restore',
        date: new Date("2026-04-25 17:13"),
        nameEN: 'Linux System Backup & Restore',
        nameCN: 'Linux 系统备份还原',
    },
    {
        id: 'nvidia_driver',
        date: new Date("2026-04-18 12:48"),
        nameEN: 'Nvidia Driver',
        nameCN: '英伟达驱动',
    },
    {
        id: 'shell_alias',
        date: new Date("2023-09-07 21:08"),
        nameEN: 'Shell Alias',
        nameCN: 'Shell 命令别名',
    },
    {
        id: 'env_var',
        date: new Date("2022-07-28 22:13"),
        nameEN: 'Environment variables',
        nameCN: '环境变量',
    },
    {
        id: 'zsh',
        date: new Date("2024-08-31 00:25"),
        nameEN: 'zsh',
        nameCN: 'zsh',
    },
    {
        id: 'proxy',
        date: new Date("2024-08-19 14:17"),
        nameEN: 'Proxy',
        nameCN: '代理',
    },
    {
        id: 'make_install',
        date: new Date("2024-07-26 23:46"),
        nameEN: 'Make install',
        nameCN: '编译安装',
    },
    {
        id: 'upgrade_kernel&headers',
        date: new Date("2024-02-20 14:30"),
        nameEN: 'Upgrade Kernel and Headers',
        nameCN: '更新 kernel 及 headers',
    },
    {
        id: 'recovery_root_passwd',
        date: new Date("2024-05-12 12:20"),
        nameEN: 'Recover Root Password',
        nameCN: '恢复 root 密码',
    },
    {
        id: 'archlinux',
        date: new Date("2023-01-19 15:40"),
        nameEN: 'Install Arch Linux',
        nameCN: '安装 Arch Linux',
    },
    {
        id: 'debian_clean',
        date: new Date("2026-04-18 12:42"),
        nameEN: 'Debian Clean',
        nameCN: 'Debian 清理',
    },
    {
        id: 'yum',
        date: new Date("2024-06-05 21:06"),
        nameEN: 'yum',
        nameCN: 'yum',
    }
];

export const postsLinuxTools: Post[] = [
    {
        id: 'nvim',
        date: new Date("2024-05-04 12:51"),
        nameEN: 'Neovim',
        nameCN: 'Neovim',
    },
    {
        id: 'kali_wifi',
        date: new Date("2024-02-20 12:46"),
        nameEN: 'Kali sniffs Wi-Fi',
        nameCN: 'Kali 嗅探 Wi-Fi',
    },
    {
        id: 'crack_archive',
        date: new Date("2024-08-04 11:56"),
        nameEN: 'Crack archive',
        nameCN: '破解压缩包',
    },
    {
        id: 'crack_android',
        date: new Date("2023-01-19 18:42"),
        nameEN: 'Crack Android',
        nameCN: '安卓监听',
    },
];

export const postsLinuxService: Post[] = [
    {
        id: 'nginx_reverse_proxy',
        date: new Date("2025-06-11 16:30"),
        nameEN: 'Nginx Reverse Proxy',
        nameCN: 'Nginx 反向代理',
    },
    {
        id: 'nginx_tls',
        date: new Date("2025-06-11 16:40"),
        nameEN: 'Nginx Configure TLS',
        nameCN: 'Nginx 配置 TLS',
    },
    {
        id: 'samba_server',
        date: new Date("2024-06-04 23:26"),
        nameEN: 'Samba Server',
        nameCN: 'Samba 服务器',
    },
    {
        id: 'mount_web_page',
        date: new Date("2025-06-10 23:00"),
        nameEN: 'Mount Web Page',
        nameCN: '网页挂载',
    },
    {
        id: 'gitlab',
        date: new Date("2024-08-19 15:03"),
        nameEN: 'Gitlab',
        nameCN: 'Gitlab',
    },
    {
        id: 'gitea',
        date: new Date("2026-08-29 17:05"),
        nameEN: 'Gitea',
        nameCN: 'Gitea',
    },
    {
        id: 'jellyfin',
        date: new Date("2026-09-05 19:12"),
        nameEN: 'Jellyfin',
        nameCN: 'Jellyfin',
    },
    {
        id: 'openlist',
        date: new Date("2026-09-05 19:33"),
        nameEN: 'OpenList',
        nameCN: 'OpenList',
    },
    {
        id: 'qbittorrent',
        date: new Date("2026-09-05 19:50"),
        nameEN: 'qBittorrent',
        nameCN: 'qBittorrent',
    },
    {
        id: 'service_configuration',
        date: new Date("2026-04-18 13:32"),
        nameEN: 'Service Configuration',
        nameCN: '服务配置',
    },
    {
        id: 'intranet_penetration_frp',
        date: new Date("2026-04-24 12:22"),
        nameEN: 'Intranet Penetration frp',
        nameCN: '内网穿透 frp',
    },
    {
        id: 'minecraft_server',
        date: new Date("2026-04-18 14:42"),
        nameEN: 'Minecraft Server',
        nameCN: '我的世界服务器',
    },
];

export const postsJava: Post[] = [
    {
        id: 'data_types',
        date: new Date("2025-06-10 16:00"),
        nameEN: 'Java Data Types',
        nameCN: 'Java 数据类型',
    },
    {
        id: 'date_time',
        date: new Date("2025-04-22 11:03"),
        nameEN: 'Java Date Time',
        nameCN: 'Java 日期时间',
    },
    {
        id: 'pack_jar',
        date: new Date("2025-12-12 11:55"),
        nameEN: 'Pack Jar',
        nameCN: 'Jar 打包',
    },
    {
        id: 'access_modifier',
        date: new Date("2025-12-12 13:21"),
        nameEN: 'Access Modifier',
        nameCN: '访问修饰符',
    },
];

export const postsC: Post[] = [
    {
        id: 'env',
        date: new Date("2025-12-24 16:59"),
        nameEN: 'Setup Environment',
        nameCN: '环境搭建',
    },
    {
        id: 'data_unit',
        date: new Date("2025-12-24 17:30"),
        nameEN: 'Unit of Data',
        nameCN: '数据单位',
    },
    {
        id: 'data_types',
        date: new Date("2025-12-24 17:59"),
        nameEN: 'C Data Type',
        nameCN: '数据类型',
    },
    {
        id: 'operator',
        date: new Date("2025-12-25 13:41"),
        nameEN: 'Operator',
        nameCN: '运算符',
    },
];

export const postsBackendRedis: Post[] = [
    {
        id: 'data_types',
        date: new Date("2026-08-24 22:06"),
        nameEN: 'Data Types',
        nameCN: '数据类型',
    },
];

export const postsFrontend: Post[] = [
    {
        id: 'wechat_mini_program',
        date: new Date("2023-11-08 21:05"),
        nameEN: 'WeChat Mini Program',
        nameCN: '微信小程序',
    },
    {
        id: 'env',
        date: new Date("2026-09-18 14:34"),
        nameEN: 'Environment',
        nameCN: '环境',
    }
];

export const postsOther: Post[] = [
    {
        id: 'git',
        date: new Date("2024-08-31 00:09"),
        nameEN: 'Git',
        nameCN: 'Git 基本使用',
    },
    {
        id: 'git_commit_rule',
        date: new Date("2025-06-10 20:00"),
        nameEN: 'Git Commit rule',
        nameCN: 'Git 提交规范',
    },
    {
        id: 'powershell',
        date: new Date("2026-09-02 15:25"),
        nameEN: 'PowerShell',
        nameCN: 'PowerShell',
    },
    {
        id: 'vbox_disk_free',
        date: new Date("2024-11-22 14:53"),
        nameEN: 'VirtualBox Disk Free',
        nameCN: 'VirtualBox 虚拟机磁盘释放空间',
    },
    {
        id: 'vscode',
        date: new Date("2024-04-20 12:02"),
        nameEN: 'VSCode',
        nameCN: 'VSCode 配置及插件',
    },
    {
        id: 'windows_hibernate',
        date: new Date("2023-08-07 11:40"),
        nameEN: 'Windows Configure Hibernate',
        nameCN: 'Windows 配置休眠',
    },
    {
        id: 'windows_stop_update',
        date: new Date("2026-04-18 11:40"),
        nameEN: 'Windows Stop Update',
        nameCN: 'Windows 停止更新',
    },
    {
        id: 'legacy_to_uefi',
        date: new Date("2022-02-12 01:12"),
        nameEN: 'Legacy to UEFI',
        nameCN: 'Legacy 无损转 UEFI',
    },
    {
        id: 'diy_proxy',
        date: new Date("2026-04-18 15:25"),
        nameEN: 'DIY Proxy',
        nameCN: '自建代理',
    },
    {
        id: 'sing-box',
        date: new Date("2026-09-18 08:33"),
        nameEN: 'sing-box',
        nameCN: 'sing-box',
    }
];

export const allPosts: Post[] = [
    ...postsPythonLanguage,
    ...postsPythonDesign,
    ...postsPythonLibsTools,
    ...postsLinuxSystem,
    ...postsLinuxTools,
    ...postsLinuxService,
    ...postsJava,
    ...postsC,
    ...postsBackendRedis,
    ...postsFrontend,
    ...postsOther
];

// Categories
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

// Locations
export const locations: Location[] = [
    {
        nameEN: 'Shenzhen',
        nameCN: '深圳',
        nameHK: '深圳'
    },
    {
        nameEN: 'Dongguan',
        nameCN: '东莞',
        nameHK: '東莞'
    },
    {
        nameEN: 'Guangzhou',
        nameCN: '广州',
        nameHK: '廣州'
    },
];
