import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/use-input";
import {
  addContact,
  editContact,
  removeEditingMode,
} from "../../store/form-slice";
import {
  validFamilyName,
  validName,
  validPhonNumber,
  validRelation,
  validEmail,
} from "../../validationPatterns";

import Input from "./Input";
import Select from "./Select";

const Form = () => {
  const dispatch = useDispatch();
  const [disabeldBtn, setDisabeldBtn] = useState(true);
  const [btnText, setBtnText] = useState("اضافه کردن");

  const { editedContact, editingMode } = useSelector((state) => state.form);

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    editedValue: editName,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(validName);

  const {
    value: family,
    isValid: familyIsValid,
    hasError: familyHasError,
    editedValue: editFamily,
    valueChangeHandler: familyChangeHandler,
    inputBlurHandler: familyBlurHandler,
    reset: resetFamily,
  } = useInput(validFamilyName);

  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    editedValue: editPhone,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(validPhonNumber);

  const {
    value: relation,
    isValid: relationIsValid,
    hasError: relationHasError,
    editedValue: editRelation,
    valueChangeHandler: relationChangeHandler,
    inputBlurHandler: relationBlurHandler,
    reset: resetRelation,
  } = useInput(validRelation);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    editedValue: editEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validEmail);

  // check all items be valid
  const ValidValues =
    nameIsValid &&
    familyIsValid &&
    phoneIsValid &&
    relationIsValid &&
    emailIsValid;

  useEffect(() => {
    if (ValidValues) {
      setDisabeldBtn(false);
    }
  }, [ValidValues]);

  const submitHandler = (event) => {
    event.preventDefault();

    const newContact = {
      id: Math.random(),
      name,
      family,
      phone,
      relation,
      email,
    };

    if (ValidValues) {
      if (!editingMode) {
        dispatch(addContact(newContact));
      } else {
        newContact.id = editedContact.id;
        dispatch(editContact(newContact));
        dispatch(removeEditingMode());
      }

      resetName();
      resetFamily();
      resetPhone();
      resetRelation();
      resetEmail();

      setDisabeldBtn(true);
      setBtnText("اضافه کردن");
    }
  };

  // edited mode
  useEffect(() => {
    if (editingMode) {
      editName(editedContact.name);
      editFamily(editedContact.family);
      editPhone(editedContact.phone);
      editRelation(editedContact.relation);
      editEmail(editedContact.email);
      setDisabeldBtn(false);
      setBtnText("ویرایش");
    }
  }, [editingMode]);

  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="نام..."
        errText="نام وارد شده معتبر نیست."
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={name}
        hasError={nameHasError}
      />
      <Input
        type="text"
        placeholder="نام خانوادگی..."
        errText="نام خانوادگی وارد شده معتبر نیست."
        onChange={familyChangeHandler}
        onBlur={familyBlurHandler}
        value={family}
        hasError={familyHasError}
      />
      <Input
        type="number"
        placeholder="شماره تماس..."
        errText="شماره تماس وارد شده معتبر نیست."
        onChange={phoneChangeHandler}
        onBlur={phoneBlurHandler}
        value={phone}
        hasError={phoneHasError}
      />
      <Select
        onChange={relationChangeHandler}
        onBlur={relationBlurHandler}
        hasError={relationHasError}
        value={relation}
      />
      <Input
        type="email"
        placeholder="ایمیل"
        errText="ایمیل وارد شده معتبر نیست."
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={email}
        hasError={emailHasError}
      />
      <button
        className="bg-[#0f1631] text-white py-2 rounded-md cursor-pointer"
        style={
          disabeldBtn
            ? {
                backgroundColor: "#707589",
                color: "#d1d1d1",
              }
            : undefined
        }
        disabled={disabeldBtn}
      >
        {btnText}
      </button>
    </form>
  );
};

export default Form;
