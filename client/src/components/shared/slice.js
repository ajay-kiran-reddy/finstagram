import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  status: "",
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    storeMessage: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
    },
    resetMessage: (state) => {
      state.message = "";
      state.status = "";
    },
  },
});

const global = (state) => state.global;

export { globalSlice, global };
