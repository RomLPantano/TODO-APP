import Todo from "./Todo";

function TodoList({ tasks, onToggleTask, onEditTask, onDeleteTask }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <Todo
          key={task.id}
          text={task.text}
          completed={task.completed}
          color={task.color}
          onToggle={() => onToggleTask(task.id)}
          onEdit={() => onEditTask(task)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;