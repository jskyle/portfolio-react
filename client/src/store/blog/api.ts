import { axiosInstance } from '../utils';

export const createPost = (payload: any) => axiosInstance.post('/api/post/posttodb', payload);

export const editPost = (payload: any) => axiosInstance.put('/api/put/post', payload);
