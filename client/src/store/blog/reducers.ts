/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import { produce } from 'immer';

import * as actions from './actions';

const initialState = {
  posts: null,
};

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case actions.FETCH_DB_POSTS: {
      base.posts = action.payload;
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
    case actions.REMOVE_DB_POSTS: {
      base.posts = {};
      break;
    }
    default: {
      return initialState;
    }
  }
}, initialState);

export default reducer;
