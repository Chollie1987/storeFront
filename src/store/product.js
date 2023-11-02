import  { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: data,
        selectedProduct: undefined,
        categories: categories,
    },
    reducers: {
        showProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setCategory: (state, action) => {
            state.categories = action.payload;
        }
    }
});

export default productSlice;