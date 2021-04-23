import { configureStore } from '@reduxjs/toolkit';
import ui from './ui/reducers';

export default configureStore({
  reducer: {
    ui,
  },
});
