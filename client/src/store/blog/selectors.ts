import { createSelector as createCachedSelector } from "reselect";
import { createSelectorContext } from "../utils";

const createSelector = createSelectorContext(["blog"]);

export const getPostsSelector = createSelector("posts")

export const getPosts = createCachedSelector(
  getPostsSelector,
  (posts: any) => {
    return Object.values(posts);
  }
)

export const getPost = createCachedSelector(
  getPostsSelector,
  (_: any, id: number) => id,
  (posts: any, id: number) => {
    return posts[id];
  }
)
