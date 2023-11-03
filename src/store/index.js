import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import categorySlice from "./category";
import cartSlice from "./cart";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        category: categorySlice.reducer,
        cart: cartSlice.reducer,
    },
});