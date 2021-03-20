import { Dispatch } from 'redux';

import { loginSuccess, loginFailure } from './actions';

import * as api from './api';

export const createUserThunk = (payload: any) => (dispatch: Dispatch) => {
  api.signup(payload)
  .then((response) => { 
    dispatch(loginSuccess(response)); 
})};

// accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MTg4Mzc4LCJleHAiOjE2MTYyNzQ3Nzh9.JRanEwXeXFGDuT33pVCNmGmmf62UjsuseF2XCIqRd1s"
// email: "kyledkearney@gmail.com"
// id: 1
// roles: ["ROLE_ADMIN"]
// username: "kyle"

export const loginUserThunk = (payload: any) => async (dispatch: Dispatch) => {
  api.login(payload).then((response) => {
 
        dispatch(loginSuccess(response.data)); 
  }).catch((err) => {
    // to access message from db
    console.log(err.response.data.message);
    dispatch(loginFailure());
  })
};
