import React from "react";

const Select = () => {
  return (
    <div className="flex flex-col gap-2">
      <select className="rounded py-1 px-3">
        <option className="hidden">نسبت</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
        <option value="اعضای خانواده">اعضای خانواده</option>
      </select>
      <p className="text-red-400 text-xs mt-2 ">معتبر نیست</p>
    </div>
  );
};

export default Select;
