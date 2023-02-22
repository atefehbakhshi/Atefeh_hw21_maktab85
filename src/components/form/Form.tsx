import { useDispatch } from "react-redux";
import useInput from "../../hooks/use-input";
import { addContact } from "../../store/form-slice";
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
  let disabeldBtn = true;

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(validName);

  const {
    value: family,
    isValid: familyIsValid,
    hasError: familyHasError,
    valueChangeHandler: familyChangeHandler,
    inputBlurHandler: familyBlurHandler,
    reset: resetFamily,
  } = useInput(validFamilyName);

  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(validPhonNumber);

  const {
    value: relation,
    isValid: relationIsValid,
    hasError: relationHasError,
    valueChangeHandler: relationChangeHandler,
    inputBlurHandler: relationBlurHandler,
    reset: resetRelation,
  } = useInput(validRelation);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validEmail);

  // check all items be valid
  const ValidValues = nameIsValid;
  // familyIsValid &&
  // phoneIsValid &&
  // relationIsValid &&
  // emailIsValid;

  if (ValidValues) {
    disabeldBtn = false;
  }

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

    dispatch(addContact(newContact));

    resetName();
    resetFamily();
    resetPhone();
    resetRelation();
    resetEmail();

    console.log(newContact);
  };

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
        اضافه کردن
      </button>
    </form>
  );
};

export default Form;
