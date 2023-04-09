import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartReducers';
import ItemReducer from './ItemReducer';
import qrReducer from './qrReducer';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    item : ItemReducer,
    scan : qrReducer
  },
});

export default store;
