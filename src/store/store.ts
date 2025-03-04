import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

//Slices:
import cartReducer from './slices/cartSlice/cartSlice';
import productsReducer from './slices/productsSlice/productSlice';
import userSliceReducer from './slices/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
    user: userSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
