import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'role',
  initialState: {
    role: null
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    }
  }
});

export const { setRole } = userSlice.actions;
export default userSlice.reducer;
