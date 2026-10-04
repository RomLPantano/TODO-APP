import Modal from "./Modal";
import Button from "./Button";

function DeleteConfirmationModal({ onConfirm, onClose }) {
  return (
    <Modal
      title="Eliminar todas las tareas"
      onClose={onClose}
    >
      <p className="mb-6 text-slate-600">
        ¿Estás seguro de que quieres eliminar todas las tareas?
        Esta acción no se puede deshacer.
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={onClose}>
          Cancelar
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}>
          Eliminar todas
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;