import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartReducers';
import ItemReducer from './ItemReducer';
import qrReducer from './qrReducer';
import userSlice from './userSlice'
import commandsReducer from './commandReducer'
import placeReducer from './placeReducer';
import suppsReducer from './suppsReducer';
import userIDReducer from './userIDSlice';
import commandeScReducer from './commandeScReducer';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    item : ItemReducer,
    scan : qrReducer,
      role :userSlice,
      commands: commandsReducer,
      place:placeReducer,
      supp : suppsReducer,
      userID : userIDReducer,
      commandeSc : commandeScReducer
  },
});

export default store;
