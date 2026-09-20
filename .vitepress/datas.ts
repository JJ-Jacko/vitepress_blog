export enum LocationCode {
    sz = "Shenzhen",
    dg = "Dongguan",
    gz = "Guangzhou",
};


export enum TagCode {
    original = "Original",
    learn = "Learn",
    aiAgent = "AI-Agent",
    programmingDesign = "Programming-Design",
    database = "Database",
    nvidia = "Nvidia",
    shell = "Shell",
    gcc = "gcc",
    make = "make",
    nvim = "Neovim",
    kali = "kali",
    metasploit = "Metasploit",
    nginx = "Nginx",
    apache = "Apache",
    git = "Git",
    network = "Network",
    minecraft = "Minecraft",
    wechatMiniProgram = "wechatMiniProgram",
    powershell = "PowerShell",
    windows = "Windows",
    linux = "Linux",
    vm = "Virtual-Machine",
    virtualbox = "VirtualBox",
    IDE = "IDE",
    vscode = "VSCode",
    proxy = "Proxy",
    singbox = "sing-box",
    vless = "Vless",
    hysteria2 = "Hysteria2",
};


export class Post {
    id: string;
    date: Date;
    location: LocationCode;
    tags: TagCode[];
    nameEN?: string;
    nameCN?: string;
    nameHK?: string;

    constructor(
        id: string,
        date: Date,
        location: LocationCode,
        tags: TagCode[],
        nameEN?: string,
        nameCN?: string,
        nameHK?: string
    ) {
        this.id = id;
        this.date = date;
        this.location = location;
        this.tags = tags;
        this.nameEN = nameEN;
        this.nameCN = nameCN;
        this.nameHK = nameHK;
    }
};


export class Category {
    path: string;
    nameEN?: string;
    nameCN?: string;
    nameHK?: string;
    introducePath?: string;
    posts?: Post[];
    childrens?: Category[];

    constructor(
        path: string,
        nameEN?: string,
        nameCN?: string,
        nameHK?: string,
        introducePath?: string,
        posts?: Post[],
        childrens?: Category[]
    ) {
        this.path = path;
        this.nameEN = nameEN;
        this.nameCN = nameCN;
        this.nameHK = nameHK;
        this.introducePath = introducePath;
        this.posts = posts;
        this.childrens = childrens;
    }
};


export class Location {
    code: LocationCode;
    nameEN: string;
    nameCN: string;
    nameHK: string;

    constructor(
        code: LocationCode,
        nameEN: string,
        nameCN: string,
        nameHK: string,
    ) {
        this.code = code;
        this.nameEN = nameEN;
        this.nameCN = nameCN;
        this.nameHK = nameHK;
    }
};


export class Tag {
    code: TagCode;
    nameEN: string;
    nameCN: string;
    nameHK: string;

    constructor(
        code: TagCode,
        nameEN: string,
        nameCN: string,
        nameHK: string,
    ) {
        this.code = code;
        this.nameEN = nameEN;
        this.nameCN = nameCN;
        this.nameHK = nameHK;
    }
};


export type Language = "en-US" | "zh-CN" | "zh-HK";
