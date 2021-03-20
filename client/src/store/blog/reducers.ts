import { produce } from 'immer';

import * as actions from './actions';

const initialState = {
  posts: {},

};

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case actions.FETCH_POSTS: {
      base.posts = action.payload;
      break;
    }
    case actions.FETCH_SINGLE_POST: {
      const { payload } = action;
      base.posts = { ...base.posts, [payload.id]: payload };

      break;
    }
    case actions.CREATE_POST: {
      const { payload } = action;
      base.posts = {
        ...base.posts, payload,
      };
      break;
    }
    case actions.UPDATE_POST: {
      break;
    }
    case actions.REMOVE_POSTS: {
      base.posts = {};
      break;
    }
    default: {
      return initialState;
    }
  }
}, initialState);

export default reducer;
