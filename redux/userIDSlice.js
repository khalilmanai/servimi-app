import { createSlice } from '@reduxjs/toolkit';

const userIDSlice = createSlice({
  name: 'userID',
  initialState: {
    userID: null
  },
  reducers: {
    setuserID: (state, action) => {
      state.userID = action.payload;
    }
  }
});

export const { setuserID} = userIDSlice.actions;
export default userIDSlice.reducer;
