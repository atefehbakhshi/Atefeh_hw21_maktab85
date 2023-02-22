import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [],
  contactId: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contactList = [...state.contactList, action.payload];
      localStorage.setItem("contact", JSON.stringify(state.contactList));
    },
    getContactId: (state, action) => {
      state.contactId = action.payload;
    },
    deleteContact: (state, action) => {
      let newList = state.contactList;
      newList = newList.filter((contact) => contact.id !== state.contactId);

      state.contactList = newList;
      localStorage.setItem("contact", JSON.stringify(newList));
    },
    readFromServer: (state, action) => {
      state.contactList = JSON.parse(localStorage.getItem("contact")) || [];
    },
  },
});

export const { addContact, readFromServer, deleteContact, getContactId } =
  formSlice.actions;

export default formSlice.reducer;
