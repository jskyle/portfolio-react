import axios from 'axios';

const getInArity2 = (
  path,
  map
) => {
  return path.reduce((acc, step) => {
    if (!acc) return undefined;
    return acc[step];
  }, map);
};
const getInArity1 = (path) => (
  map
) => getInArity2(path, map);

export const getIn = (
  path,
  map
) => {
  if (map) return getInArity2(path, map);
  return getInArity1(path);
};

export const identity = (x) => x;


const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({ baseURL });

export const createAction = (type, payloadKey = 'payload') => {
  const action = (payload, meta = {}) => ({
    type,
    [payloadKey]: payload,
    meta,
  });

  action.toString = () => type;

  return action;
};

export const createSelector = (path, transformationFn = identity) => (state) =>
  transformationFn(getIn(path, state), state);

export const createSelectorContext = (root) => (path, transformationFn) => {
  if (typeof path === "string") return createSelector([...root, path], transformationFn);
  return createSelector([...root, ...path], transformationFn);
};
