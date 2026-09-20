import {
    Language,
    Location,
    LocationCode,
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
