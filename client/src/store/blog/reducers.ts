import { produce } from "immer";

import * as actions from "./actions";

const initialState = {
  posts: null,
}

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case actions.FETCH_DB_POSTS: {
      base.posts = action.payload;
      break;
    }
    case actions.REMOVE_DB_POSTS: {
      base.posts = {};
      break;
    }
  }
}, initialState);

export default reducer;
