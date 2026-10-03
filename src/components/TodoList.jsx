import Todo from "./Todo";

function TodoList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Todo
          key={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;