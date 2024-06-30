import { createSlice } from '@reduxjs/toolkit';
import { Promotion } from '../types/apiTypes';


const initialState: {promotions: Promotion[]} = {
  promotions: [
    { id: 1, message: 'Summer Sale 50% Off!', date: new Date('2024-06-29') },
    { id: 2, message: 'Buy One Get One Free!', date: new Date('2024-06-28') },
  ],
};

const promotionSlice = createSlice({
  name: 'promotion',
  initialState,
  reducers: {
    addPromotion: (state, action) => {
      state.promotions.push(action.payload);
    },
  },
});

export const { addPromotion } = promotionSlice.actions;
export default promotionSlice.reducer;
