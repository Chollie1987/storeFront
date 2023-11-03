import  { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: data.cart,
    },
    reducers: {
        showCart: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setAddToCart: (state, action) => {
            state.product = action.payload;
        }
    }
});

export default cartSlice;