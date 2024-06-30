import { configureStore } from '@reduxjs/toolkit';
import promotionReducer from './promotionSlice';

export const store = configureStore({
  reducer: {
    promotion: promotionReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
