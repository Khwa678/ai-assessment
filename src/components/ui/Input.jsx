const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400 transition-all duration-300"
    />
  );
};

export default Input;