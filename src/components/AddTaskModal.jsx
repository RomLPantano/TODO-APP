import Form from "./Form";
import Modal from "./Modal";

function AddTaskModal({ task, onAddTask, onUpdateTask, onClose }) {
  return (
    <Modal
      title={task ? "Editar tarea" : "Nueva tarea"}
      onClose={onClose} >
      <Form
        initialText={task?.text ?? ""}
        initialColor={task?.color ?? "yellow"}
        submitLabel={task ? "Guardar cambios" : "Agregar tarea"}
        onSubmit={(text, color) => {
          if (task) {
            onUpdateTask(task.id, text, color);
          } else {
            onAddTask(text, color);
          }

          onClose();
        }}
      />
    </Modal>
  );
}

export default AddTaskModal;