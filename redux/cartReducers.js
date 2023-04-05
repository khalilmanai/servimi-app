import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    
    removeItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const removedItem = state.cartItems[itemIndex];
        state.cartItems.splice(itemIndex, 1);
        state.total -= removedItem.prix * removedItem.quantity;
      }
    },
    
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    calculateTotal: (state) => {
      state.total = state.cartItems.reduce(
        (acc, item) => acc + item.prix * item.quantity,
        0
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
