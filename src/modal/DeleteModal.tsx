import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteContact } from "../store/form-slice";
import { hideModal } from "../store/modal-slice";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { scrollPosition } = useSelector((state) => state.modal);

  const deleteHandler = () => {
    dispatch(deleteContact());
    dispatch(hideModal());
    toast("Contact deleted successfully!");
  };

  const cancelHandler = () => {
    dispatch(hideModal());
  };

  return (
    <div className=" flex justify-center h-[100%] bg-[#0000006e] w-full absolute">
      <div
        className="text-center bg-white px-4 py-8 rounded-lg w-2/3 h-[10rem]"
        style={{ marginTop: `${scrollPosition + 200}px` }}
      >
        <p className="mb-4"> مخاطب حذف شود؟</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={deleteHandler}
            className="bg-[#707589] text-[#d1d1d1] w-[4rem] rounded-lg px-2 py-1"
          >
            بله
          </button>
          <button
            onClick={cancelHandler}
            className="bg-[#0f1631] text-white w-[4rem] rounded-lg px-2 py-1"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
