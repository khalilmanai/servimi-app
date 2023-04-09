import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    scanned: false,
  };
  
  const scanSlice = createSlice({
    name: 'scan',
    initialState,
    reducers: {
      setScanned: (state, action) => {
        state.scanned = action.payload;
      },
    },
  });
  
  export const { setScanned } = scanSlice.actions;
export default scanSlice.reducer