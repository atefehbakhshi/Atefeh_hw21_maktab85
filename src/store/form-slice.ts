import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addToContact: (state, action) => {
      state.contactList = [...state.contactList, action.payload];
      localStorage.setItem("contact", JSON.stringify(state.contactList));
    },
    readFromServer: (state, action) => {
      state.contactList = action.payload;
    },
  },
});

export const { addToContact } = formSlice.actions;

export default formSlice.reducer;
