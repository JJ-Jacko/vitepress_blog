import { Post, LocationCode, TagCode } from "../datas";


// Python
export const postsPythonLanguage: Post[] = [
    {
        id: 'data_types',
        date: new Date("2025-06-10 16:00"),
        location: LocationCode.sz,
        tags: [TagCode.original],
        nameEN: 'Python data types',
        nameCN: 'Python 数据类型',

    },
    {
        id: 'packages_management',
        date: new Date("2024-05-04 13:03"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Packages Management',
        nameCN: '包管理',
    },
    {
        id: 'module_re',
        date: new Date("2024-05-15 08:48"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 're module',
        nameCN: 're 正则库',
    },
    {
        id: 'module_shutil',
        date: new Date("2024-08-15 11:42"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'shutil module',
        nameCN: 'shutil 模块',
    },
    {
        id: 'regular_expression',
        date: new Date("2024-05-07 16:22"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Regular expression',
        nameCN: '正则表达式',
    },
    {
        id: 'file_path',
        date: new Date("2024-08-15 14:22"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'File path related',
        nameCN: '文件路径相关',
    },
    {
        id: 'file',
        date: new Date("2024-05-28 10:22"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'File',
        nameCN: '文件',
    },
    {
        id: 'build_cpython',
        date: new Date("2024-11-22 12:42"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Build Cpython from source code',
        nameCN: '从源码构建 Cpython',
    },
];

export const postsPythonDesign: Post[] = [
    {
        id: 'strategy_pattern',
        date: new Date("2026-07-12 21:26"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.programmingDesign],
        nameEN: 'Strategy Pattern',
        nameCN: '策略模式',
    },
    {
        id: 'design_pattern',
        date: new Date("2026-08-08 18:16"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.programmingDesign],
        nameEN: 'Design Pattern',
        nameCN: '设计模式',
    },
];

export const postsPythonLibsTools: Post[] = [
    {
        id: 'connect_database',
        date: new Date("2025-06-10 16:00"),
        location: LocationCode.sz,
        tags: [TagCode.original, TagCode.database],
        nameEN: 'Connect database in Python',
        nameCN: 'Python 连接数据库',
    },
    {
        id: 'openai_sdk',
        date: new Date("2026-08-20 21:57"),
        location: LocationCode.dg,
        tags: [TagCode.learn, TagCode.aiAgent],
        nameEN: 'OpenAI SDK',
        nameCN: 'OpenAI SDK',
    },
    {
        id: 'yt-dlp',
        date: new Date("2024-04-20 10:51"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'yt-dlp basic usage',
        nameCN: 'yt-dlp 基本使用',
    },
];

// Linux
export const postsLinuxSystem: Post[] = [
    {
        id: 'ssh',
        date: new Date("2024-05-12 11:49"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'SSH',
        nameCN: 'SSH',
    },
    {
        id: 'hibernate',
        date: new Date("2025-07-18"),
        location: LocationCode.sz,
        tags: [TagCode.original],
        nameEN: 'Linux Hibernate Configuration',
        nameCN: 'Linux 配置休眠',
    },
    {
        id: 'system_backup_restore',
        date: new Date("2026-04-25 17:13"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Linux System Backup & Restore',
        nameCN: 'Linux 系统备份还原',
    },
    {
        id: 'nvidia_driver',
        date: new Date("2026-04-18 12:48"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.nvidia],
        nameEN: 'Nvidia Driver',
        nameCN: '英伟达驱动',
    },
    {
        id: 'shell_alias',
        date: new Date("2023-09-07 21:08"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.shell],
        nameEN: 'Shell Alias',
        nameCN: 'Shell 命令别名',
    },
    {
        id: 'env_var',
        date: new Date("2022-07-28 22:13"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Environment variables',
        nameCN: '环境变量',
    },
    {
        id: 'zsh',
        date: new Date("2024-08-31 00:25"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'zsh',
        nameCN: 'zsh',
    },
    {
        id: 'proxy',
        date: new Date("2024-08-19 14:17"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Proxy',
        nameCN: '代理',
    },
    {
        id: 'make_install',
        date: new Date("2024-07-26 23:46"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.gcc, TagCode.make],
        nameEN: 'Make install',
        nameCN: '编译安装',
    },
    {
        id: 'upgrade_kernel&headers',
        date: new Date("2024-02-20 14:30"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Upgrade Kernel and Headers',
        nameCN: '更新 kernel 及 headers',
    },
    {
        id: 'recovery_root_passwd',
        date: new Date("2024-05-12 12:20"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Recover Root Password',
        nameCN: '恢复 root 密码',
    },
    {
        id: 'archlinux',
        date: new Date("2023-01-19 15:40"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Install Arch Linux',
        nameCN: '安装 Arch Linux',
    },
    {
        id: 'debian_clean',
        date: new Date("2026-04-18 12:42"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Debian Clean',
        nameCN: 'Debian 清理',
    },
    {
        id: 'yum',
        date: new Date("2024-06-05 21:06"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'yum',
        nameCN: 'yum',
    }
];

export const postsLinuxTools: Post[] = [
    {
        id: 'nvim',
        date: new Date("2024-05-04 12:51"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.nvim],
        nameEN: 'Neovim',
        nameCN: 'Neovim',
    },
    {
        id: 'kali_wifi',
        date: new Date("2024-02-20 12:46"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.kali],
        nameEN: 'Kali sniffs Wi-Fi',
        nameCN: 'Kali 嗅探 Wi-Fi',
    },
    {
        id: 'crack_archive',
        date: new Date("2024-08-04 11:56"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Crack archive',
        nameCN: '破解压缩包',
    },
    {
        id: 'crack_android',
        date: new Date("2023-01-19 18:42"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.metasploit],
        nameEN: 'Crack Android',
        nameCN: '安卓监听',
    },
];

export const postsLinuxService: Post[] = [
    {
        id: 'nginx_reverse_proxy',
        date: new Date("2025-06-11 16:30"),
        location: LocationCode.sz,
        tags: [TagCode.original, TagCode.nginx],
        nameEN: 'Nginx Reverse Proxy',
        nameCN: 'Nginx 反向代理',
    },
    {
        id: 'nginx_tls',
        date: new Date("2025-06-11 16:40"),
        location: LocationCode.sz,
        tags: [TagCode.original, TagCode.nginx],
        nameEN: 'Nginx Configure TLS',
        nameCN: 'Nginx 配置 TLS',
    },
    {
        id: 'samba_server',
        date: new Date("2024-06-04 23:26"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Samba Server',
        nameCN: 'Samba 服务器',
    },
    {
        id: 'mount_web_page',
        date: new Date("2025-06-10 23:00"),
        location: LocationCode.sz,
        tags: [TagCode.original, TagCode.nginx, TagCode.apache],
        nameEN: 'Mount Web Page',
        nameCN: '网页挂载',
    },
    {
        id: 'gitlab',
        date: new Date("2024-08-19 15:03"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.git],
        nameEN: 'Gitlab',
        nameCN: 'Gitlab',
    },
    {
        id: 'gitea',
        date: new Date("2026-08-29 17:05"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.git],
        nameEN: 'Gitea',
        nameCN: 'Gitea',
    },
    {
        id: 'jellyfin',
        date: new Date("2026-09-05 19:12"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Jellyfin',
        nameCN: 'Jellyfin',
    },
    {
        id: 'openlist',
        date: new Date("2026-09-05 19:33"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'OpenList',
        nameCN: 'OpenList',
    },
    {
        id: 'qbittorrent',
        date: new Date("2026-09-05 19:50"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'qBittorrent',
        nameCN: 'qBittorrent',
    },
    {
        id: 'service_configuration',
        date: new Date("2026-04-18 13:32"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Service Configuration',
        nameCN: '服务配置',
    },
    {
        id: 'intranet_penetration_frp',
        date: new Date("2026-04-24 12:22"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.network],
        nameEN: 'Intranet Penetration frp',
        nameCN: '内网穿透 frp',
    },
    {
        id: 'minecraft_server',
        date: new Date("2026-04-18 14:42"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.minecraft],
        nameEN: 'Minecraft Server',
        nameCN: '我的世界服务器',
    },
];

// Java
export const postsJava: Post[] = [
    {
        id: 'data_types',
        date: new Date("2025-06-10 16:00"),
        location: LocationCode.sz,
        tags: [TagCode.original],
        nameEN: 'Java Data Types',
        nameCN: 'Java 数据类型',
    },
    {
        id: 'date_time',
        date: new Date("2025-04-22 11:03"),
        location: LocationCode.sz,
        tags: [TagCode.original],
        nameEN: 'Java Date Time',
        nameCN: 'Java 日期时间',
    },
    {
        id: 'pack_jar',
        date: new Date("2025-12-12 11:55"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Pack Jar',
        nameCN: 'Jar 打包',
    },
    {
        id: 'access_modifier',
        date: new Date("2025-12-12 13:21"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Access Modifier',
        nameCN: '访问修饰符',
    },
];

// C
export const postsC: Post[] = [
    {
        id: 'env',
        date: new Date("2025-12-24 16:59"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Setup Environment',
        nameCN: '环境搭建',
    },
    {
        id: 'data_unit',
        date: new Date("2025-12-24 17:30"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Unit of Data',
        nameCN: '数据单位',
    },
    {
        id: 'data_types',
        date: new Date("2025-12-24 17:59"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'C Data Type',
        nameCN: '数据类型',
    },
    {
        id: 'operator',
        date: new Date("2025-12-25 13:41"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Operator',
        nameCN: '运算符',
    },
];

// Back-end
export const postsBackendRedis: Post[] = [
    {
        id: 'data_types',
        date: new Date("2026-08-24 22:06"),
        location: LocationCode.dg,
        tags: [TagCode.original],
        nameEN: 'Data Types',
        nameCN: '数据类型',
    },
];

// Front-end
export const postsFrontend: Post[] = [
    {
        id: 'wechat_mini_program',
        date: new Date("2023-11-08 21:05"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.wechatMiniProgram],
        nameEN: 'WeChat Mini Program',
        nameCN: '微信小程序',
    },
    {
        id: 'env',
        date: new Date("2026-09-18 14:34"),
        location: LocationCode.gz,
        tags: [TagCode.original],
        nameEN: 'Environment',
        nameCN: '环境',
    }
];

// Other
export const postsOther: Post[] = [
    {
        id: 'git',
        date: new Date("2024-08-31 00:09"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.git],
        nameEN: 'Git',
        nameCN: 'Git 基本使用',
    },
    {
        id: 'git_commit_rule',
        date: new Date("2025-06-10 20:00"),
        location: LocationCode.sz,
        tags: [TagCode.original, TagCode.git],
        nameEN: 'Git Commit rule',
        nameCN: 'Git 提交规范',
    },
    {
        id: 'powershell',
        date: new Date("2026-09-02 15:25"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.powershell, TagCode.shell, TagCode.windows],
        nameEN: 'PowerShell',
        nameCN: 'PowerShell',
    },
    {
        id: 'vbox_disk_free',
        date: new Date("2024-11-22 14:53"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.vm, TagCode.virtualbox],
        nameEN: 'VirtualBox Disk Free',
        nameCN: 'VirtualBox 虚拟机磁盘释放空间',
    },
    {
        id: 'vscode',
        date: new Date("2024-04-20 12:02"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.IDE, TagCode.vscode],
        nameEN: 'VSCode',
        nameCN: 'VSCode 配置及插件',
    },
    {
        id: 'windows_hibernate',
        date: new Date("2023-08-07 11:40"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.windows],
        nameEN: 'Windows Configure Hibernate',
        nameCN: 'Windows 配置休眠',
    },
    {
        id: 'windows_stop_update',
        date: new Date("2026-04-18 11:40"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.windows],
        nameEN: 'Windows Stop Update',
        nameCN: 'Windows 停止更新',
    },
    {
        id: 'legacy_to_uefi',
        date: new Date("2022-02-12 01:12"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.windows],
        nameEN: 'Legacy to UEFI',
        nameCN: 'Legacy 无损转 UEFI',
    },
    {
        id: 'diy_proxy',
        date: new Date("2026-04-18 15:25"),
        location: LocationCode.dg,
        tags: [TagCode.original, TagCode.linux, TagCode.proxy, TagCode.singbox, TagCode.vless, TagCode.hysteria2],
        nameEN: 'DIY Proxy',
        nameCN: '自建代理',
    },
    {
        id: 'sing-box',
        date: new Date("2026-09-18 08:33"),
        location: LocationCode.gz,
        tags: [TagCode.original, TagCode.proxy, TagCode.singbox],
        nameEN: 'sing-box',
        nameCN: 'sing-box',
    }
];

// Single
const postsSingle: Post[] = [
    {
        id: 'me',
        date: new Date("2026-08-18 15:32"),
        location: LocationCode.dg,
        nameEN: 'About me',
        nameCN: '关于我',
        nameHK: '關於我',
    },
    {
        id: 'software_tools',
        date: new Date("2026-09-01 13:32"),
        location: LocationCode.dg,
        nameEN: 'Softwares and Tools Using',
        nameCN: '软件和工具',
        nameHK: '軟體與工具',
    },
    {
        id: 'info_source',
        date: new Date("2026-08-30 16:32"),
        location: LocationCode.dg,
        nameEN: 'Information Source',
        nameCN: '信息来源',
        nameHK: '訊息來源',
    },

    {
        id: 'mysql',
        date: new Date("2024-10-30 11:27"),
        location: LocationCode.dg,
        tags: [TagCode.learn, TagCode.database, TagCode.mysql],
        nameEN: 'MySQL',
        nameCN: 'MySQL',
        nameHK: 'MySQL',
    },
    {
        id: 'redis',
        date: new Date("2026-08-24 17:51"),
        location: LocationCode.dg,
        tags: [TagCode.learn, TagCode.cache, TagCode.redis],
        nameEN: 'Redis',
        nameCN: 'Redis',
        nameHK: 'Redis',
    },
];

// All
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
    ...postsOther,
    ...postsSingle,
];
