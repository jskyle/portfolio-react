import { produce } from "immer";

import * as actions from "./actions";

const initialState = {
  is_authenticated: false,
  db_profile: null,
  profile: null,
}

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      base.is_authenticated = true;
      break;
    }
    case actions.LOGIN_FAILURE: {
      base.is_authenticated = false;
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
  }
}, initialState);

export default reducer;
