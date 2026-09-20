import {
    Language,
    Location,
    LocationCode,
    Tag,
    TagCode,
} from "../datas";


// Languages
export const lanPathMap: Record<Language, string> = {
    "en-US": "",
    "zh-CN": '/translated/zh_cn',
    "zh-HK": '/translated/zh_hk',
};

// Locations
export const locations: Location[] = [
    {
        code: LocationCode.sz,
        nameEN: 'Shenzhen',
        nameCN: '深圳',
        nameHK: '深圳'
    },
    {
        code: LocationCode.dg,
        nameEN: 'Dongguan',
        nameCN: '东莞',
        nameHK: '東莞'
    },
    {
        code: LocationCode.gz,
        nameEN: 'Guangzhou',
        nameCN: '广州',
        nameHK: '廣州'
    },
];

// Tags
export const tags: Tag[] = [
    {
        code: TagCode.original,
        nameEN: "Original",
        nameCN: "原创",
        nameHK: "原創"
    },
    {
        code: TagCode.learn,
        nameEN: "Learn",
        nameCN: "学习",
        nameHK: "學習"
    },
    {
        code: TagCode.aiAgent,
        nameEN: "AI-Agent",
        nameCN: "智能体",
        nameHK: "智慧體"
    },
    {
        code: TagCode.programmingDesign,
        nameEN: "Programming-Design",
        nameCN: "程序设计",
        nameHK: "程式設計"
    },
    {
        code: TagCode.database,
        nameEN: "Database",
        nameCN: "数据库",
        nameHK: "資料庫"
    },
    {
        code: TagCode.mysql,
        nameEN: "MySQL",
        nameCN: "MySQL",
        nameHK: "MySQL"
    },
    {
        code: TagCode.cache,
        nameEN: "Cache",
        nameCN: "缓存",
        nameHK: "快取"
    },
    {
        code: TagCode.redis,
        nameEN: "Redis",
        nameCN: "Redis",
        nameHK: "Redis"
    },
    {
        code: TagCode.nvidia,
        nameEN: "Nvidia",
        nameCN: "英伟达",
        nameHK: "英偉達"
    },
    {
        code: TagCode.shell,
        nameEN: "Shell",
        nameCN: "Shell",
        nameHK: "Shell"
    },
    {
        code: TagCode.gcc,
        nameEN: "gcc",
        nameCN: "gcc 编译器",
        nameHK: "gcc 編譯器"
    },
    {
        code: TagCode.make,
        nameEN: "make",
        nameCN: "make 构建",
        nameHK: "make 構建"
    },
    {
        code: TagCode.nvim,
        nameEN: "Neovim",
        nameCN: "Neovim 编辑器",
        nameHK: "Neovim 編輯器"
    },
    {
        code: TagCode.kali,
        nameEN: "Kali",
        nameCN: "Kali",
        nameHK: "Kali"
    },
    {
        code: TagCode.metasploit,
        nameEN: "Metasploit",
        nameCN: "Metasploit",
        nameHK: "Metasploit"
    },
    {
        code: TagCode.nginx,
        nameEN: "Nginx",
        nameCN: "Nginx",
        nameHK: "Nginx"
    },
    {
        code: TagCode.apache,
        nameEN: "Apache",
        nameCN: "Apache",
        nameHK: "Apache"
    },
    {
        code: TagCode.git,
        nameEN: "Git",
        nameCN: "Git",
        nameHK: "Git"
    },
    {
        code: TagCode.network,
        nameEN: "Network",
        nameCN: "Network",
        nameHK: "Network"
    },
    {
        code: TagCode.minecraft,
        nameEN: "Minecraft",
        nameCN: "我的世界",
        nameHK: "麥塊"
    },
    {
        code: TagCode.wechatMiniProgram,
        nameEN: "WeChat Mini Program",
        nameCN: "微信小程序",
        nameHK: "微信小程式"
    },
    {
        code: TagCode.powershell,
        nameEN: "PowerShell",
        nameCN: "PowerShell",
        nameHK: "PowerShell"
    },
    {
        code: TagCode.windows,
        nameEN: "Windows System",
        nameCN: "Windows 系统",
        nameHK: "Windows 系統"
    },
    {
        code: TagCode.linux,
        nameEN: "Linux System",
        nameCN: "Linux 系统",
        nameHK: "Linux 系統"
    },
    {
        code: TagCode.vm,
        nameEN: "Virtual-Machine",
        nameCN: "虚拟机",
        nameHK: "虛擬機"
    },
    {
        code: TagCode.virtualbox,
        nameEN: "VirtualBox",
        nameCN: "VirtualBox",
        nameHK: "VirtualBox"
    },
    {
        code: TagCode.IDE,
        nameEN: "IDE",
        nameCN: "集成开放环境",
        nameHK: "整合開發環境"
    },
    {
        code: TagCode.vscode,
        nameEN: "VSCode",
        nameCN: "VSCode",
        nameHK: "VSCode"
    },
    {
        code: TagCode.proxy,
        nameEN: "Proxy",
        nameCN: "代理",
        nameHK: "代理"
    },
    {
        code: TagCode.singbox,
        nameEN: "sing-box",
        nameCN: "sing-box",
        nameHK: "sing-box"
    },
    {
        code: TagCode.vless,
        nameEN: "Vless",
        nameCN: "Vless",
        nameHK: "Vless"
    },
    {
        code: TagCode.hysteria2,
        nameEN: "Hysteria2",
        nameCN: "Hysteria2",
        nameHK: "Hysteria2"
    },

];