import { configureStore } from '@reduxjs/toolkit';
import promotionReducer from './promotionSlice';

export const store = configureStore({
  reducer: {
    promotion: promotionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
