import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.';

export interface CounterState {
  items:any[];
}

const initialState: CounterState = {
    items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
 reducers:{
    addToBasket:(state , action) => {
        state.items = [...state.items , action.payload]
    },
    removeToBasket:(state , action) => {

    }
 }
})

// Action creators are generated for each case reducer function
export const {addToBasket , removeToBasket} = basketSlice.actions

export const selectBasketItems = (state:RootState) => state.basket.items;

export default basketSlice.reducer