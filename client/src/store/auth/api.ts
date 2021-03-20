import { axiosInstance } from '../utils';

export const signup = (payload: any) => axiosInstance.post('/auth/signup', payload);

export const login = (payload: any) => axiosInstance.post('/auth/login', payload);
