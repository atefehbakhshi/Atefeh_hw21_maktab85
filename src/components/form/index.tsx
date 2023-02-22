import Form from "./Form";

const FormContainer = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-[#4e364e] rounded-lg w-[90%] mx-auto ">
      <p className="text-white">وب اپلیکیشن مدیریت مخاطب</p>
      <Form />
    </div>
  );
};

export default FormContainer;
