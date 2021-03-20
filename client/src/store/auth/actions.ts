import { createAction } from '../utils';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE);

export const ADD_PROFILE = 'ADD_PROFILE';
export const addProfile = createAction(ADD_PROFILE);

export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const removeProfile = createAction(REMOVE_PROFILE);

export const SET_DB_PROFILE = 'SET_DB_PROFILE';
export const setDbProfile = createAction(SET_DB_PROFILE);

export const REMOVE_DB_PROFILE = 'REMOVE_DB_PROFILE';
export const removeDbProfile = createAction(REMOVE_DB_PROFILE);

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createSuccess = 'CREATE_USER_SUCCESS'; 
