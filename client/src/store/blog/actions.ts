import { createAction } from '../utils';

export const FETCH_POSTS = 'FETCH_DB_POSTS';
export const fetchPosts = createAction(FETCH_POSTS);

export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const fetchSinglePost = createAction(FETCH_SINGLE_POST);

export const CREATE_POST = 'CREATE_POST';
export const createPost = createAction(CREATE_POST);

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = createAction(UPDATE_POST);

export const REMOVE_POSTS = 'REMOVE_DB_POSTS';
export const removePosts = createAction(REMOVE_POSTS);
