import { createSlice } from '@reduxjs/toolkit'
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
     const index = state.items.findIndex((item) => item.id === action.payload.id)
    const newBasket = [...state.items];

    if(index >= 0){
      newBasket.splice(index , 1)
    }else{
      console.warn(`Cant remove menu with id ${action.payload.id}`)
    }
      
    state.items = newBasket
    }
 }
})

// Action creators are generated for each case reducer function
export const {addToBasket , removeToBasket} = basketSlice.actions

export const selectBasketItems = (state:RootState) => state.basket.items;
export const selectSpecificItems = (state:RootState , id:Number) => state.basket.items.filter((item) => item.id === id)
export const basketItemsTotal = (state:RootState) => state.basket.items.reduce((total , item) => total += parseInt(item.menu_price) , 0)

export default basketSlice.reducer