import Form from "./Form";

function AddTaskModal({ onAddTask, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">
            Nueva tarea
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-slate-400 transition hover:text-slate-600"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <Form
          onAddTask={(text) => {
            onAddTask(text);
            onClose();
          }}
        />
      </div>
    </div>
  );
}

export default AddTaskModal;