import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
  scrollPosition: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    hideModal: (state) => {
      state.display = false;
    },
    showModal: (state) => {
      state.display = true;
    },
    getScroll: (state, action) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { hideModal, showModal, getScroll } = modalSlice.actions;

export default modalSlice.reducer;
