import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import AddTaskModal from "./components/AddTaskModal";
import Button from "./components/Button";
import { FaPlus } from "react-icons/fa";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";

function App() {
  // Estados iniciales-----------------------------------------------
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Persistencia----------------------------------------------------
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Agregar tarea ---------------------------------------------------
  const addTask = (text, color) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      color,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);

    if (activeFilter !== "all") {
      setActiveFilter("pending");
    }
  };

  // Completar tarea -------------------------------------------------
  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  //Borrar tareas ----------------------------------------------------
  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const deleteCompletedTasks = () => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  //Editar tarea -----------------------------------------------------
  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const updateTask = (id, text, color) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, text, color }
          : task
      )
    );
  };

  // Filtros --------------------------------------------------------
  const getFilteredTasks = () => {
  if (activeFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  if (activeFilter === "pending") {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
  };

  // Cuerpo del componente -------------------------------------------
  return (
  <main className="min-h-screen bg-slate-100 px-4 py-8">
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-10 rounded-2xl bg-white px-6 py-8 text-center shadow-sm">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
          Organiza tu día
        </p>

        <h1 className="text-5xl font-black tracking-tight text-slate-800">
          Mis tareas
        </h1>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-indigo-600" />
      </div>

      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <aside className="rounded-2xl bg-white p-4 shadow-sm">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="mb-6 w-full">
            <span className="flex items-center justify-center gap-2">
              <FaPlus />
              Nueva tarea
            </span>
          </Button>

          <FilterButtons
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="mt-6 flex flex-col gap-2 border-t border-slate-200 pt-6">
            <Button
              variant="secondary"
              onClick={deleteCompletedTasks}
              className="w-full">
              Eliminar completadas
            </Button>

            <Button
              variant="danger"
              onClick={() => setShowDeleteConfirmation(true)}
              className="w-full">
              Eliminar todas
            </Button>
          </div>
        </aside>

        <section>
          <TodoList
            tasks={getFilteredTasks()}
            onToggleTask={toggleTask}
            onEditTask={handleEditTask}
            onDeleteTask={deleteTask}
          />
        </section>
      </div>
    </div>

    {(isModalOpen || taskToEdit) && (
      <AddTaskModal
        task={taskToEdit}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onClose={() => {
          setIsModalOpen(false);
          setTaskToEdit(null);
        }}
      />
    )}

    {showDeleteConfirmation && (
      <DeleteConfirmationModal
        onConfirm={() => {
          deleteAllTasks();
          setShowDeleteConfirmation(false);
        }}
        onClose={() => setShowDeleteConfirmation(false)}/>
    )}
  </main>
  );
}

export default App;