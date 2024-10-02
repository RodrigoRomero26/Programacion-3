import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGif } from "../../types/gif";

// Define a type for the slice state
interface IInitialState {
  gif: IGif[];
}

// Define the initial state using that type
export const initialState: IInitialState = {
  gif: [],
}; 

 const gifSlice = createSlice({
  name: "gifState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGifs: (state, action: PayloadAction<IGif[]>) => {
      state.gif = action.payload;
    },
    resetGifs: (state) => {
      state.gif = [];
    },
  },
});

export const { setGifs, resetGifs } = gifSlice.actions;

export default gifSlice.reducer;
