import ReactDOM from "react-dom";
import DeleteModal from "./DeleteModal";

const Modal = () => {
  return (
    <div>
      {ReactDOM.createPortal(
        <DeleteModal />,
        document.getElementById("modal-root") as HTMLDivElement
      )}
    </div>
  );
};

export default Modal;
