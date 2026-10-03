function FilterButton({ children, active = false }) {
  const baseStyles =
    "rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition";

  const activeStyles = "bg-indigo-600 text-white hover:bg-indigo-700";

  const inactiveStyles =
    "bg-white text-slate-600 hover:bg-slate-50";

  return (
    <button
      type="button"
      className={`${baseStyles} ${
        active ? activeStyles : inactiveStyles
      }`}
    >
      {children}
    </button>
  );
}

export default FilterButton;