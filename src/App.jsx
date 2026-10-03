import Form from "./components/Form";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
          TODO APP
        </h1>
        <Form />
        <FilterButtons />
        <TodoList />
      </div>
    </main>
  );
}

export default App;