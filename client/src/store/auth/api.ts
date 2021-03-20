import { axiosInstance } from '../utils';

export const signup = (payload: any) => axiosInstance.post('/api/auth/signup', payload);

export const login = (payload: any) => axiosInstance.post('/api/auth/login', payload);
