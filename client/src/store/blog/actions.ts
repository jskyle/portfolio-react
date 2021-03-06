import { createAction } from "../utils";

export const FETCH_DB_POSTS = "FETCH_DB_POSTS"
export const fetchPosts = createAction(FETCH_DB_POSTS);

export const REMOVE_DB_POSTS = "REMOVE_DB_POSTS"
export const removePosts = createAction(REMOVE_DB_POSTS);
