import { produce } from 'immer';

import { content } from "./content";

import * as actions from './actions';

const initialState = {
  darkMode: false,
  content,
};

const reducer = produce<any>((base: any, action: any) => {
  switch (action.type) {
    case actions.SET_SETTING: {
      const { setting, value } = action.payload;
      base[setting] = value;
      break;
    }
    case actions.TOGGLE_SETTING: {
      base[action.payload] = !base[action.payload];
      break;
    }
  }
}, initialState);

export default reducer;
