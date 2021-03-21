import { createAction } from '../utils';

export const SET_SETTING = "SET_SETTING";
export const setSetting = createAction(SET_SETTING);

export const TOGGLE_SETTING = "TOGGLE_SETTING";
export const toggleSetting = createAction(TOGGLE_SETTING);
