import { allEntriesPath, lanPathMap } from "./constant";
import { Language } from "./datas";


function replacePath(paths: string[] , language: Language): string[] {
    const newPaths: string[] = [];
    
    paths.forEach((path) => {
        newPaths.push(`${lanPathMap[language]}${path}`)
    });

    return newPaths;
};


export function jumpToRandomEntriesPath(language: Language) {
    let paths: string[];
    if (language === "en-US") {
        paths = allEntriesPath;
    } else if (language === "zh-CN") {
        paths = replacePath(allEntriesPath, "zh-CN");
    } else if (language === "zh-HK") {
        paths = replacePath(allEntriesPath, "zh-HK");
    } else {
        paths = [];
    }
    
    const index = Math.floor(Math.random() * paths.length);
    const target = paths[index];

    if (typeof window !== 'undefined') {
        window.location.href = target;
    }
};
