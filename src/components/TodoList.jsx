import Todo from "./Todo";

function TodoList() {
  return (
    <ul className="space-y-3">
      <Todo text="Comprar comida" completed={false} />
      <Todo text="Estudiar React" completed={false} />
      <Todo text="Terminar TP" completed={true} />
    </ul>
  );
}

export default TodoList;