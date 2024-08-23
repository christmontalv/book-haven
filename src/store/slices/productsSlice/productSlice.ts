import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../../types';

interface InitialState {
  items: Book[];
  isLoading: boolean;
}

const initialState: InitialState = {
  items: [
    {
      id: 'book-1',
      title: 'the alquimist',
      description: 'lorem itsum here i was here hehe pog',
      author: 'himiki sakur',
      genders: ['Suspense'],
      photoURL: '/assets/book-1.jpg',
      price: 20,
      stock: 45,
    },
    {
      id: 'book-2',
      title: 'the one piece',
      description: 'lorem itsum here i was here hehe pog',
      author: 'inio asano',
      genders: ['Suspense', 'Action'],
      photoURL: '/assets/book-2.jpg',
      price: 15,
      stock: 50,
    },
    {
      id: 'book-3',
      title: 'Dragon ball',
      description: 'lorem itsum here i was here hehe pog',
      author: 'takana hel',
      genders: ['Romance', 'Terror'],
      photoURL: '/assets/book-3.jpg',
      price: 19,
      stock: 30,
    },
  ],
  isLoading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadMoreProducts: () => {
      console.log('more!!!');
    },
  },
});

export const { loadMoreProducts } = productSlice.actions;
export default productSlice.reducer;
