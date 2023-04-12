import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartReducers';
import ItemReducer from './ItemReducer';
import qrReducer from './qrReducer';
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    item : ItemReducer,
    scan : qrReducer,
      role :userSlice
  },
});

export default store;
