import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
name: "place",
initialState: {},
reducers: {
setPlace: (state, action) => {
return action.payload;
},
},
});

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer;