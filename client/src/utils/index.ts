import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";

export const convertArrayToObject = (array: Array<any>, key: any) => {
  const initialValue = {};
  return array.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};


export { PrivateRoute, ScrollToTop};
