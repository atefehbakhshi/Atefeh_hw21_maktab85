import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    hideModal: (state) => {
      return false;
    },
    showModal: (state) => {
      return true;
    },
  },
});

export const { hideModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;
