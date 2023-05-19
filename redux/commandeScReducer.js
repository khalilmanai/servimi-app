import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commandeSc : {}
}



const CommandeScSlice = createSlice({
    name :"commandeSc", 
    initialState : initialState, 
    reducers : {
        setCommande: (state , action)=>{
            state.status = action.payload;
          }
    }
})


export  const setStatus = CommandeScSlice.actions
export default CommandeScSlice.reducer