import { useState } from "react";

const useInput = (validateValue) => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(entredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEntredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const editedValue = (inputValue) => {
    setEntredValue(inputValue);
  };

  const reset = () => {
    setEntredValue("");
    setIsTouched(false);
  };

  return {
    value: entredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    editedValue,
  };
};

export default useInput;
