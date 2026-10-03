function Form() {
  return (
    <form className="mb-6 flex overflow-hidden rounded-xl bg-white shadow-sm">
      <input
        type="text"
        placeholder="¿Qué necesitas hacer?"
        className="min-w-0 flex-1 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400"
      />

      <button
        type="submit"
        className="px-5 text-2xl font-bold text-indigo-600 transition hover:bg-indigo-50"
        aria-label="Agregar tarea"
      >
        +
      </button>
    </form>
  );
}

export default Form;