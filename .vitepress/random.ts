import { lanPathMap } from "./constants";
import * as paths from "./constants/paths";
import { Language } from "./datas";


function replacePath(paths: string[] , language: Language): string[] {
    const newPaths: string[] = [];
    
    paths.forEach((path) => {
        newPaths.push(`${lanPathMap[language]}${path}`)
    });

    return newPaths;
};


export function jumpToRandomEntriesPath(language: Language) {
    let targets: string[];
    if (language === "en-US") {
        targets = paths.allRoot;
    } else if (language === "zh-CN") {
        targets = replacePath(paths.allRoot, "zh-CN");
    } else if (language === "zh-HK") {
        targets = replacePath(paths.allRoot, "zh-HK");
    } else {
        targets = [];
    }
    
    const index = Math.floor(Math.random() * targets.length);
    const target = targets[index];

    if (typeof window !== 'undefined') {
        window.location.href = target;
    }
};
