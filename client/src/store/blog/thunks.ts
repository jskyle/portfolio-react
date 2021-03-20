import * as api from "./api";
import * as actions from "./actions";

import { Dispatch } from "redux";
import { convertArrayToObject } from "../../utils"

export const createPost = (data: any) => async (dispatch: Dispatch, getState: Function ) => {
 const state = getState();
 const userId = 0;

 const payload = {
   uid: userId,
   ...data,
 };

 return api.createPost(payload).then((response) => {
   actions.createPost(response);
 }).catch(() => {});
};

export const fetchPosts = (type: string) => async (dispatch: Dispatch) => {

  return api.getPosts(type).then((res) => {

    if (res.status !== 204) {
      dispatch(actions.fetchPosts(convertArrayToObject(res.data, "id")));
    }
  }).catch((err) => {
    console.log(err);
  });
};

export const fetchSinglePost = (id: number) => async (dispatch: Dispatch) => {

  return api.getSinglePost(id).then((res) => {
    console.log(res);

    dispatch(actions.fetchSinglePost(res.data))
  }).catch((err) => {
    console.log(err);
  });
};
