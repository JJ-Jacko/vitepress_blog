export enum LocationCode {
    sz = "Shenzhen",
    dg = "Dongguan",
    gz = "Guangzhou",
}


export class Post {
    id: string;
    date: Date;
    location: LocationCode;
    nameEN?: string;
    nameCN?: string;
    nameHK?: string;

    constructor(
        id: string,
        date: Date,
        location: LocationCode,
        nameEN?: string,
        nameCN?: string,
        nameHK?: string
    ) {
        this.id = id;
        this.date = date;
        this.location = location;
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
}


export type Language = "en-US" | "zh-CN" | "zh-HK";
