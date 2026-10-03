import Todo from "./Todo";

function TodoList({ tasks }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Todo
          key={task.id}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;