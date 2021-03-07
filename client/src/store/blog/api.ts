import axios from "axios";

export const createPost = (payload: any) => {
  return axios.post(`/api/post/posttodb`, payload);
};

export const editPost = (payload: any) => {
  return axios.put('/api/put/post', payload);
};
