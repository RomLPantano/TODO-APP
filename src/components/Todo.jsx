function Todo({ text, completed }) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
      <button
        type="button"
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 text-sm text-indigo-600 transition hover:bg-indigo-50"
        aria-label={
          completed ? "Marcar tarea como pendiente" : "Marcar tarea como completada"
        }
      >
        {completed && "✓"}
      </button>

      <span
        className={`flex-1 text-slate-700 ${
          completed ? "text-slate-400 line-through" : ""
        }`}
      >
        {text}
      </span>

      <button
        type="button"
        className="text-xl text-red-500 transition hover:text-red-700"
        aria-label={`Eliminar tarea: ${text}`}
      >
        🗑
      </button>
    </li>
  );
}

export default Todo;