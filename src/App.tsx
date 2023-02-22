import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Contacts from "./components/contacts";
import FormContainer from "./components/form";
import { readFromServer } from "./store/form-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readFromServer());
  }, [dispatch]);

  return (
    <div className="flex flex-col pt-2">
      <FormContainer />
      <Contacts />
    </div>
  );
}

export default App;
