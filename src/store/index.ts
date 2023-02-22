import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: {
    form: formSlice,
    modal: modalSlice,
  },
});

export default store;
