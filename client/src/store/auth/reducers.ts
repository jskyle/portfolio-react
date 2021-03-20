import { produce } from 'immer';

import * as actions from './actions';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  id: '',
  username: '',
  email: '',
  roles: [],
};

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      const {accessToken, email, username, id, roles} = action.payload

      base.isAuthenticated =  true;
      base.accessToken = accessToken;
      base.id = id;
      base.username = username;
      base.email = email;
      base.roles = roles;

      break;
    }
    case actions.LOGIN_FAILURE: {
      base = initialState;
      break;
    }
    case actions.ADD_PROFILE: {
      base.profile = action.payload;
      break;
    }
    case actions.REMOVE_PROFILE: {
      base.profile = null;
      break;
    }
    case actions.SET_DB_PROFILE: {
      base.db_profile = action.payload;
      break;
    }
    case actions.REMOVE_DB_PROFILE: {
      base.db_profile = null;
      break;
    }
    default: {
      return base;
    }
  }
}, initialState);

export default reducer;
