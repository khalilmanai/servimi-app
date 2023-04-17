import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartReducers';
import ItemReducer from './ItemReducer';
import qrReducer from './qrReducer';
import userSlice from './userSlice'
import commandsReducer from './commandReducer'
import placeReducer from './placeReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    item : ItemReducer,
    scan : qrReducer,
      role :userSlice,
      commands: commandsReducer,
      place:placeReducer
  },
});

export default store;
