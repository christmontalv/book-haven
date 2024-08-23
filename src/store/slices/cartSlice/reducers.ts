import { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, CartState } from './cartSlice';

export const addProductToCartReducer = (
  state: CartState,
  action: PayloadAction<CartProduct | Omit<CartProduct, 'quantity'>>,
) => {
  let theProductIs = false;

  state.items.forEach((item) => {
    if (item.id === action.payload.id) {
      return (theProductIs = true);
    }
  });

  if (!theProductIs) {
    const newProduct = { ...action.payload, quantity: 1 };
    state.items = [...state.items, newProduct];
  }
};

export const increaseProductQuantityByIdReducer = (
  state: CartState,
  action: PayloadAction<{ id: string }>,
) => {
  state.items = state.items.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }

    return { ...item };
  });
};

export const decreaseProductQuantityByIdReducer = (
  state: CartState,
  action: PayloadAction<{ id: string }>,
) => {
  state.items = state.items.map((item) => {
    if (item.id === action.payload.id && item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1 };
    }

    return { ...item };
  });
};

export const deleteProductByIdReducer = (
  state: CartState,
  action: PayloadAction<{ id: string }>,
) => {
  state.items = state.items.filter((item) => item.id !== action.payload.id);
};
