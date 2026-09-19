export class Post {
    id: string;
    nameEN?: string;
    nameCN?: string;
    nameHK?: string;

    constructor(
        id: string,
        nameEN?: string,
        nameCN?: string,
        nameHK?: string
    ) {
        this.id = id;
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
    nameEN: string;
    nameCN: string;
    nameHK: string;

    constructor(
        nameEN: string,
        nameCN: string,
        nameHK: string,
    ) {
        this.nameEN = nameEN;
        this.nameCN = nameCN;
        this.nameHK = nameHK;
    }
}


export type Language = "en-US" | "zh-CN" | "zh-HK";
