import { useEffect, useState } from "react";
import Form from "./components/Form";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import AddTaskModal from "./components/AddTaskModal";
import AddTaskButton from "./components/AddTaskButton";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const getFilteredTasks = () => {
  if (activeFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  if (activeFilter === "pending") {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
  };

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
          <AddTaskButton onClick={() => setIsModalOpen(true)} />

          <FilterButtons
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </aside>

        <section>
          <TodoList
            tasks={getFilteredTasks()}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </section>
      </div>
    </div>

    {isModalOpen && (
      <AddTaskModal
        onAddTask={addTask}
        onClose={() => setIsModalOpen(false)}
      />
    )}
  </main>
  );
}

export default App;