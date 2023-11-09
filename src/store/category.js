import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const url = import.meta.env.VITE_API_URL;
export const getCategory = createAsyncThunk('GET/Category', 
async () => {
    const response = await fetch(`${url}/categories`);
    const json = await response.json();
    console.log(json);
    return json.results;
})

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: data,
        selectedCategory: '',
        categories: [],
    },
    reducers: {
        setCategory: (state, action) => {
            console.log(action.payload)
            state.selectedCategory = action.payload;
        },
     },
        extraReducers: (builder) => {
            builder.addCase(getCategory.fulfilled, (state, action) => {
                console.log(action.payload)
                state.categories = action.payload;
            })
    
    }
});

export default categorySlice;