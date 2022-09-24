import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsVisisble: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisisble = !state.cartIsVisisble;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        tittle: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
