import { createAction } from '../utils';

export const FETCH_DB_POSTS = 'FETCH_DB_POSTS';
export const fetchPosts = createAction(FETCH_DB_POSTS);

export const CREATE_POST = 'CREATE_POST';
export const createPost = createAction(CREATE_POST);

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = createAction(UPDATE_POST);

export const REMOVE_DB_POSTS = 'REMOVE_DB_POSTS';
export const removePosts = createAction(REMOVE_DB_POSTS);
