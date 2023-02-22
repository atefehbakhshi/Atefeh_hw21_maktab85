import { addToContact } from "./form-slice";

export const sendContactToServer = (contact) => {
  return (dispatch) => {
    dispatch(addToContact(contact));
  };
};
