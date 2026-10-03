function Todo({ text, completed, onToggle, onDelete }) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl p-4 shadow-sm transition ${
        completed
          ? "bg-green-500 text-white"
          : "bg-white text-slate-700"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
          completed
            ? "border-white"
            : "border-indigo-500 hover:bg-indigo-50"
        }`}
        aria-label={
          completed
            ? "Marcar tarea como pendiente"
            : "Marcar tarea como completada"
        }
      >
        {completed && (
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        )}
      </button>

      <span
        className={`flex-1 ${
          completed ? "font-bold text-white" : ""
        }`}
      >
        {text}
      </span>

      <button
        type="button"
        onClick={onDelete}
        className={`text-xl transition ${
          completed
            ? "text-white hover:text-green-100"
            : "text-red-500 hover:text-red-700"
        }`}
        aria-label={`Eliminar tarea: ${text}`}
      >
        🗑
      </button>
    </li>
  );
}

export default Todo;