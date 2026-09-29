import { Post, Location, Language, lanPathMap, LocationCode, TagCode, Tag, Category } from "./datas";
import { locations, tags } from "./constants";
import * as categories from "./constants/categories";
import * as posts from "./constants/posts";


/**
 * replace target language path to category
 * @returns replaced target language path category
 */
export function categoryReplaceLanPath(
    category: Category,
    language: Language
): Category {
    const newCategory = structuredClone(category);
    
    // Process sub-category
    if (newCategory.childrens) {
        const childs_replaced: Category[] = [];
        
        newCategory.childrens.forEach((sub_category) => {
            childs_replaced.push(categoryReplaceLanPath(sub_category, language));
        });
        
        newCategory.childrens = childs_replaced;
    }

    // Replace path
    newCategory.path = `${lanPathMap[language]}${newCategory.path}`;
    if (newCategory.introducePath) {
        newCategory.introducePath = `${lanPathMap[language]}${newCategory.introducePath}`;
    }

    return newCategory;
};


function findPostFromShortPath(
    categories: Category[],
    postID: string,
    shortPath: string
): Post | undefined {
    for (const category of categories) {
        // Skip categories whose paths do not start the short path
        if (!shortPath.startsWith(category.path)) continue;
        
        // Only have childrens
        if (category.childrens !== undefined && category.posts === undefined) {
            let post = findPostFromShortPath(category.childrens, postID, shortPath);
            if (post) return post;
            else continue;
        }
        // Only have posts
        else if (category.posts !== undefined && category.childrens === undefined) {
            return category.posts.find((post) => post.id === postID);
        }
        // Both have posts & childrens
        else if (category.posts !== undefined && category.childrens !== undefined) {
            // Post in category
            const post = category.posts.find((post) => post.id === postID);
            if (post) return post;

            // Post in sub-category
            const subPost = findPostFromShortPath(category.childrens, postID, shortPath);
            if (subPost) return subPost;
            else continue;
        }
    }
};


export function getPost(relativePath: string): Post | null {
    const filePathsItems = relativePath.split('/');
    const fileNameItems = filePathsItems.at(-1)?.split('.');
    
    // Get short path
    let shortPathItems;
    if (relativePath.startsWith("translated")) {
        shortPathItems = filePathsItems.slice(2, -1)
    }
    else {
        shortPathItems = filePathsItems.slice(0, -1)
    }
    const shortPath = `/${shortPathItems.join('/')}`

    // Get postID
    let postID;
    if (filePathsItems.at(-1) === "index.md") {
        postID = `${filePathsItems?.at(-2)}.index`;
    } else {
        postID = fileNameItems?.at(0) ?? '';
    }
    
    // Find post, falling back to standalone posts (e.g. sub-category introduce pages)
    const post = findPostFromShortPath(categories.all, postID, shortPath)
        ?? posts.single.find((post) => post.id === postID);
    
    return post ?? null;
};


export function getLocation(code: LocationCode): Location | null {
    const location = locations.find((location) => {
        return code === location.code;
    });
    
    return location ?? null;
};


export function getTag(code: TagCode): Tag | null {
    const tag = tags.find((tag) => {
        return code === tag.code;
    });
    
    return tag ?? null;
};
