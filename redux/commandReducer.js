// commands.js
import { createSlice } from "@reduxjs/toolkit";
import { getCommandesServeur } from "../api/axios";


const initialState = {
  commandes: [],
  isLoading: false,
  error: null,
};

const commandsSlice = createSlice({
  name: "commands",
  initialState,
  reducers: {
    getCommandsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getCommandsSuccess(state, action) {
      state.commandes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getCommandsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCommandsStart, getCommandsSuccess, getCommandsFailure } =
  commandsSlice.actions;

export const fetchCommands = () => async (dispatch) => {
  try {
    dispatch(getCommandsStart());
    const response = await getCommandesServeur();
    dispatch(getCommandsSuccess(response));
  } catch (error) {
    dispatch(getCommandsFailure(error.message));
  }
};

export default commandsSlice.reducer;
