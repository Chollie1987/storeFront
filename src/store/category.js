import  { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: data,
        selectedCategory: '',
        categories: data.categories,
    },
    reducers: {
        setCategory: (state, action) => {
            console.log(action.payload)
            state.selectedCategory = action.payload;
        }
    }
});

export default categorySlice;