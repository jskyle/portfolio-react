import * as api from "./api";
import * as actions from "./actions";

import { Dispatch } from "redux";

export const createPost = (data: any) => async (dispatch: Dispatch, getState: Function ) => {
 const state = getState();
 const userId = 0;

 const payload = {
   uid: userId,
   ...data,
 };

 return api.createPost(payload).then((response) => {
   actions.createPost(response);
 }).catch(() => {})
}
