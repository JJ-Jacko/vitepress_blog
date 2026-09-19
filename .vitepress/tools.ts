import { Post, Location } from "./datas";
import { locations } from "./constants";
import { allPosts } from "./constants/posts";


export function getPost(postID: string): Post | null {
    const post = allPosts.find((post) => {
        return postID === post.id;
    });
    
    return post ?? null;
};


export function getLocation(nameEN: string): Location | null {
    const location = locations.find((location) => {
        return nameEN === location.nameEN;
    });
    
    return location ?? null;
};
