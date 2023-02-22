import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Contacts from "./components/contacts";
import FormContainer from "./components/form";
import Modal from "./modal";
import { readFromServer } from "./store/form-slice";

function App() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(readFromServer());
  }, [dispatch]);

  return (
    <>
      {showModal && <Modal />}

      <div className="flex flex-col pt-2">
        <FormContainer />
        <Contacts />
      </div>
    </>
  );
}

export default App;
