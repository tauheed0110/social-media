// store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './state/postsSlice';

const store = configureStore({
  reducer: {
    postReducer: postReducer,
  },
});

export default store;
