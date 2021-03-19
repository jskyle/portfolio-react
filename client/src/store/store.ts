/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import blog from './blog/reducers';
import auth from './auth/reducers';

export default configureStore({
  reducer: {
    auth,
    blog,
  },
});
