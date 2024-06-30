import { createSlice } from '@reduxjs/toolkit';
import { Promotion } from '../types/apiTypes';


const initialState: {promotions: Promotion[]} = {
  promotions: [],
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
