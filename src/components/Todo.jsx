import { FaTrash, FaCheck, FaPen  } from "react-icons/fa6";

const noteColors = {
  yellow: "bg-yellow-200",
  pink: "bg-pink-200",
  blue: "bg-blue-200",
};

function Todo({ text, completed, color = "yellow", onToggle, onDelete, onEdit }) {
  return (
    <li className={`relative min-h-48 p-5 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
        completed
        ? "rotate-1 bg-green-400 text-white"
        : `-rotate-1 ${noteColors[color] ?? noteColors.yellow} text-slate-700`
    }`}>
      <div className="flex items-start justify-between">
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
            }> {completed && <FaCheck size={12} />}
        </button>
      </div>  
      
      <div className="absolute bottom-4 right-4 flex items-center gap-3">
        <button
            type="button"
            onClick={onEdit}
            className={`text-xl transition ${
            completed
                ? "text-white hover:text-green-100"
                : "text-indigo-500 hover:text-indigo-700"
            }`}
            aria-label={`Editar tarea: ${text}`}>
            <FaPen />
        </button>

        <button
            type="button"
            onClick={onDelete}
            className={`text-xl transition ${
            completed
                ? "text-white hover:text-green-100"
                : "text-red-500 hover:text-red-700"
            }`}
            aria-label={`Eliminar tarea: ${text}`}>
            <FaTrash />
        </button>

      </div>

      <span
        className={`mt-6 block break-words text-lg ${
            completed ? "font-bold text-white" : ""
            }`}> {text}
      </span>
    </li>
  );
}

export default Todo;