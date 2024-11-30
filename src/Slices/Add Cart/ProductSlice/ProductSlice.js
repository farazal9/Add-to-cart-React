import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        IsToast: false,
    },
    reducers: {
        addProduct: (state, action) => {





            const isExist = state.items.find((item) => item.id === action.payload.id);
            console.log(isExist, "isExist");
            if (isExist) {
                state.IsToast = true;

            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

        },

resetToast (state) {
    state.IsToast = false;
},

        increaseQuantity: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity += 1;
            }


        },

        decreaseQuantity: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }


        },


        removeItem: (state, action) => {

            state.items = state.items.filter((item) => item?.id !== action.payload.id)
        },



    },
});


export const  selectTotalPrice =  (state) =>{
    return state.products.items.reduce((total,item) => total + item?.price * item?.quantity ,0  )
};

export const { addProduct, increaseQuantity, decreaseQuantity, removeItem , resetToast} = productSlice.actions;
export default productSlice.reducer;