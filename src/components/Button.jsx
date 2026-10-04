function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    smallactions: "text-slate-500 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-4 py-3 font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;