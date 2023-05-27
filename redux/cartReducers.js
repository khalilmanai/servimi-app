// reducteur de panier
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartSupps :  [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    //ajout item au panier
    addItemToCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      //ajout supplement au panier
    }, addSuppToCart: (state, action) => {
      return {
        ...state,
        cartSupps: [...state.cartSupps, action.payload],
      };
    },
    //supprimer item du panier
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
    //vider item du panier
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    //calcul total du commande
    calculateTotal: (state) => {
      state.total = state.cartItems.reduce(
        (acc, item) => acc + item.prix * item.quantity,
        0
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, calculateTotal  , addSuppToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
