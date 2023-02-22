import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    hideModal: (state, action) => {
      return false;
    },
    showModal: (state, action) => {
      return true;
    },
  },
});

export const { hideModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;
