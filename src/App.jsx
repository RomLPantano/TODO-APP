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

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
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
      <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
        TODO APP
      </h1>

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