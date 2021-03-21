import { createSelector as createCachedSelector } from "reselect";
import { createSelectorContext, snakeToCamel } from "../utils";


const createSelector = createSelectorContext(["ui"]);

export const overrideScrollTo = createSelector("overrideScrollto");

export const darkMode = createSelector("darkMode")

export const navType = createSelector("navType")

export const content = createSelector("content")

export const getContent = createCachedSelector(
  content,
  (_: any, item: any) => item, 
  (content: any, item: any) => {
    return content[item.type][snakeToCamel(item.key)]
});
