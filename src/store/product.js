import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const url = import.meta.env.VITE_API_URL;
export const getProducts = createAsyncThunk('GET/Products', 
async () => {
    const response = await fetch(`${url}/products`);
    const json = await response.json();
    console.log(json.results)
    return json.results;
});

export const updateProduct = createAsyncThunk('Put/product/:id', async ({product, amount}) => {
    const updatedProduct = {...product, inStock: product.inStock + amount};

    const response = await fetch(`${url}/product/${product._id}`, {
        method: 'PUT', 
        body: JSON.stringify(updatedProduct),
        headers: {'Content-Type': 'application/json'},
});
    const json = await response.json();
    return json;
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        selectedProduct: undefined,
        products: data.products,
    },
    reducers: {
        showProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setCategory: (state, action) => {
            state.categories = action.payload;
        },
    },
        extraReducers: (builder) => {
            builder.addCase(getProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.products = action.payload;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const updatedProduct = action.payload;
                const index = state.products.findIndex(p => p._id === updateProduct._id
                    );
                    state.products(index) = updatedProduct;
            });
        
    }
});

export default productSlice;