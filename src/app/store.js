import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'features/Home/homeSlice';

const rootReducer = {
  home: homeReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
