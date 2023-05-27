//categorie state
import { createSlice } from "@reduxjs/toolkit";


const CategorySlice = createSlice({
    name : 'categorie', 
    initialState : [],
    reducers : {
        categorie(state , action){
            state.push(action.payload)
        }
    }
})

export const {categorie} = CategorySlice.actions;
export default  CategorySlice.reducer;