import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { readFromServer } from "./store/form-slice";
import Contacts from "./components/contacts";
import FormContainer from "./components/form";
import Modal from "./modal";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { display: showModal } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(readFromServer());
  }, [dispatch]);

  return (
    <>
      {showModal && <Modal />}
      <ToastContainer />
      <div className="flex flex-col pt-2 xl:max-w-7xl mx-auto">
        <FormContainer />
        <Contacts />
      </div>
    </>
  );
}

export default App;
