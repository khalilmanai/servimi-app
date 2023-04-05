import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartReducers';
import ItemReducer from './ItemReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    item : ItemReducer,
  },
});

export default store;
