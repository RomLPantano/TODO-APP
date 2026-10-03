function Todo({ text, completed, onToggle, onDelete }) {
  return (
    <li className={`relative min-h-48 p-5 shadow-md transition ${
        completed
        ? "rotate-1 bg-green-400 text-white"
        : "-rotate-1 bg-yellow-200 text-slate-700"
    }`}>
      <div className="flex items-start justify-between">
        <button
            type="button"
            onClick={onToggle}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
            completed
                ? "border-white bg-white"
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
        </div>

        <span
        className={`mt-6 block break-words text-lg ${
            completed ? "font-bold text-white" : ""
        }`}
        >
        {text}
        </span>
    </li>
  );
}

export default Todo;