const Input = ({ type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        className="rounded py-1 px-3"
      />
      <p className="text-red-400 text-xs">معتبر نیست</p>
    </div>
  );
};

export default Input;
