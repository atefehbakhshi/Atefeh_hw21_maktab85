const Input = ({
  type,
  placeholder,
  errText,
  onChange,
  onBlur,
  value,
  hasError,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        className="rounded py-1 px-3"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {hasError && <p className="text-red-400 text-xs">{errText}</p>}
    </div>
  );
};

export default Input;
