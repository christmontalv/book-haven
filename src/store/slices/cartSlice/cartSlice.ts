import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import {
  addProductToCartReducer,
  decreaseProductQuantityByIdReducer,
  deleteProductByIdReducer,
  increaseProductQuantityByIdReducer,
} from './reducers';

export interface CartProduct extends Book {
  quantity: number;
}

export interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCartReducer,
    increaseProductQuantityByIdReducer,
    decreaseProductQuantityByIdReducer,
    deleteProductByIdReducer,
  },
});

export const {
  addProductToCartReducer: addProductToCart,
  increaseProductQuantityByIdReducer: increaseProductQuantityById,
  decreaseProductQuantityByIdReducer: decreaseProductQuantityById,
  deleteProductByIdReducer: deleteProductById,
} = cartSlice.actions;
export default cartSlice.reducer;
