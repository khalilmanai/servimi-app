import { createSlice } from "@reduxjs/toolkit";


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