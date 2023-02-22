import React from "react";
import Input from "./Input";
import Select from "./Select";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input type="text" placeholder="نام..." />
      <Input type="text" placeholder="نام خانوادگی..." />
      <Input type="number" placeholder="شماره تماس..." />
      <Select />
      <Input type="email" placeholder="ایمیل" />
      <button className="bg-[#0f1631] text-white py-2 rounded-md cursor-pointer">
        اضافه کردن
      </button>
    </form>
  );
};

export default Form;
