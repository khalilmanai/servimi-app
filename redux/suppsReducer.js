import { createSlice } from "@reduxjs/toolkit";


const SuppSlice = createSlice({
    name : 'supp', 
    initialState : [],
    reducers : {
        addSupp(state , action){
            state.push(action.payload)
        }
    }
})

export const {addSupp} = SuppSlice.actions;
export default  SuppSlice.reducer;