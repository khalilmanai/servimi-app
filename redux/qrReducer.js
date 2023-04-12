import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    scanned: false,
    data : null
  };
  
  const scanSlice = createSlice({
    name: 'scan',
    initialState,
    reducers: {
      setScanned: (state, action) => {
        state.scanned = action.payload;
      },
      setData: (state , action)=>{
        state.data = action.payload;
      }
    },
  });
  
  export const { setScanned , setData } = scanSlice.actions;
export default scanSlice.reducer