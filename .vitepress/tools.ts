import { Post, Location, LocationCode, TagCode, Tag, Category } from "./datas";
import { locations, tags } from "./constants";
import * as categories from "./constants/categories";


function findPostFromShortPath(
    categories: Category[],
    postID: string,
    shortPath: string
): Post | undefined {
    for (const category of categories) {
        // Only have posts
        if (category.posts !== undefined && category.childrens === undefined) {
            if (category.path === shortPath) {
                return category.posts.find((post) => post.id === postID);
            }
        }
        // Only have childrens
        else if (category.childrens !== undefined && category.posts === undefined) {
            let post = findPostFromShortPath(category.childrens, postID, shortPath);
            if (post) return post;
            else continue;
        }
        // Both have posts & childrens
        else if (category.posts !== undefined && category.childrens !== undefined) {
            if (category.path === shortPath) {
                return category.posts.find((post) => post.id === postID);
            }
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
    
    // Find post
    const post = findPostFromShortPath(categories.all, postID, shortPath);
    
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
