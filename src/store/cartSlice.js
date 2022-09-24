import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{cartIsVisisble:false},
    reducers:{
        toggle(state){
                 state.cartIsVisisble= !state.cartIsVisisble;
        }
    }
})

export default cartSlice;

export const cartActions=cartSlice.actions; 