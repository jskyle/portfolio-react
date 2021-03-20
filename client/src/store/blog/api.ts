import { axiosInstance } from '../utils';

// individual post routes

export const createPost = (payload: any) => axiosInstance.post('/post/posttodb', payload);

export const editPost = (payload: any) => axiosInstance.put('/post/edit', payload);

export const archivePost = (payload: any) => axiosInstance.patch('/post/archive', payload)

export const getPosts = (type: string) => axiosInstance.get(`/posts/${type}`);

export const getSinglePost = (id: number) => axiosInstance.get(`/posts/${id}`)
