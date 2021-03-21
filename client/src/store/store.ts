import { configureStore } from '@reduxjs/toolkit';
import blog from './blog/reducers';
import auth from './auth/reducers';
import ui from './ui/reducers';

export default configureStore({
  reducer: {
    auth,
    blog,
    ui,
  },
});
