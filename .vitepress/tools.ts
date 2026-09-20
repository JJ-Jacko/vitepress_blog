import { Post, Location, LocationCode, TagCode, Tag } from "./datas";
import { locations, tags } from "./constants";
import * as posts from "./constants/posts";


export function getPost(postID: string): Post | null {
    const post = posts.all.find((post) => {
        return postID === post.id;
    });
    
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
