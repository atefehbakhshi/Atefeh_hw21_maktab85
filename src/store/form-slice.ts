import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [],
  contactId: 0,
  editingMode: false,
  editedContact: {},
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
    deleteContact: (state) => {
      let newList = state.contactList;
      newList = newList.filter((contact) => contact.id !== state.contactId);

      state.contactList = newList;
      localStorage.setItem("contact", JSON.stringify(newList));
    },
    readFromServer: (state) => {
      state.contactList = JSON.parse(localStorage.getItem("contact")) || [];
    },
    changeToEditingMode: (state, action) => {
      state.editingMode = true;
      state.editedContact = action.payload;
    },
    removeEditingMode: (state) => {
      state.editingMode = false;
    },
    editContact: (state, action) => {
      let newList = state.contactList;
      let index = newList.findIndex((i) => i.id === action.payload.id);
      newList.splice(index, 1, action.payload);

      state.contactList = newList;
      localStorage.setItem("contact", JSON.stringify(newList));
    },
  },
});

export const {
  addContact,
  editContact,
  deleteContact,
  readFromServer,
  getContactId,
  changeToEditingMode,
  removeEditingMode,
} = formSlice.actions;

export default formSlice.reducer;
