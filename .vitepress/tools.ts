import { Post } from "./datas";
import { allPosts } from "./constant";


export function getPost(postID: string): Post | null {
    const post = allPosts.find((post) => {
        return postID === post.id;
    });
    
    return post ?? null;
};
