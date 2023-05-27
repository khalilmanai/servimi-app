import { createSlice } from "@reduxjs/toolkit";

//item reducer
const ItemSlice = createSlice({
    name : 'item', 
    initialState : [],
    reducers : {
        addItem(state , action){
            state.push(action.payload)
        }
    }
})

export const {addItem} = ItemSlice.actions;
export default  ItemSlice.reducer;