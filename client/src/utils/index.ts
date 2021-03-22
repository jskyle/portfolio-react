import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";
import Emoji from "./Emoji"

export const convertArrayToObject = (array: Array<any>, key: any) => {
  const initialValue = {};
  return array.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export const formatDate = (date: any) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return `${da} ${mo} ${ye}`
}


export { PrivateRoute, ScrollToTop, Emoji};
