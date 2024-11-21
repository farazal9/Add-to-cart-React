import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './Slices/Add Cart/AddCartSlice'
import productReducer from './Slices/Add Cart/ProductSlice/ProductSlice'
export const store = configureStore ({
    reducer : {
        counter : counterReducer,
        products :  productReducer,
    },
})