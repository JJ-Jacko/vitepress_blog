import { DefaultTheme } from "vitepress";

import { Category, Language, lanLocalizedNameMap } from "../datas";


export function categoryToSidebarItems(
    category: Category,
    language: Language
): DefaultTheme.SidebarItem[] {
    const localizedName = lanLocalizedNameMap[language];

    // Uncategorized Category
    if (category.posts) {
        return [{
            text: category[localizedName],
            link: category.introducePath,
            items: category.posts
                .filter((post) => post[localizedName] !== undefined)
                .map((post) => ({
                    text: post[localizedName],
                    link: `${category.path}/${post.id}`
                }))
        }];
    }

    // Categorized Category
    else if (category.childrens) {
        return category.childrens
            .map((child_category) => {
                if (child_category.posts === undefined) {
                    return {
                        text: child_category[localizedName],
                        link: child_category.introducePath
                    }
                } else {
                    return {
                        text: child_category[localizedName],
                        link: child_category.introducePath,
                        collapsed: false,
                        items: child_category.posts
                            .map((post) => ({
                                text: post[localizedName],
                                link: `${child_category.path}/${post.id}`
                            }))
                    }
                }
            });
    }

    else {
        return [];
    }
};