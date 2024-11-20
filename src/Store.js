import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './Slices/Add Cart/AddCartSlice'
export const store = configureStore ({
    reducer : {
        counter : counterReducer,
    },
})