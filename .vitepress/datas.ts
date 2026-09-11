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
