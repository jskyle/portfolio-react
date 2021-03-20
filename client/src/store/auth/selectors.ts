import { createSelector as createCachedSelector } from "reselect";

import { createSelectorContext } from "../utils";

const createSelector = createSelectorContext(["auth"]);

export const isAuthenticated = createSelector('isAuthenticated');
export const userRoles = createSelector('roles')
