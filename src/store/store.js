import addCartSlice from "./addCartSlice";
import cartSlice from "./cartSlice";
const { configureStore } = require("@reduxjs/toolkit");


const store=configureStore({
    reducer:{  cart: cartSlice.reducer , cartItem: addCartSlice.reducer }
})

export default store;