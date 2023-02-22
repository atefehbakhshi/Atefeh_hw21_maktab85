const Select = ({ onChange, onBlur, hasError }) => {
  return (
    <div className="flex flex-col gap-2">
      <select className="rounded py-1 px-3" onChange={onChange} onBlur={onBlur}>
        <option className="hidden">نسبت</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
        <option value="اعضای خانواده">اعضای خانواده</option>
      </select>
      {hasError && (
        <p className="text-red-400 text-xs mt-2 ">نسبت الزامی می باشد.</p>
      )}
    </div>
  );
};

export default Select;
