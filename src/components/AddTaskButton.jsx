function AddTaskButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-6 w-full rounded-xl bg-indigo-600 px-5 py-3 text-lg font-bold text-white shadow-sm transition hover:bg-indigo-700"
    >
      + Nueva tarea
    </button>
  );
}

export default AddTaskButton;