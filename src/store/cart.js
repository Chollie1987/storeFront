import  { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        itemsInCart: 0,
    },
    reducers: {
        showCart: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setAddToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.itemsInCart += 1;
        }
    }
});

export default cartSlice;