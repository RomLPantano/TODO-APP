import { useState } from "react";

function Form({ onAddTask }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("yellow");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onAddTask(trimmedText, color);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="¿Qué necesitas hacer?"
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-400"
      />
      <div>
        <p className="mb-2 text-sm font-medium text-slate-600">
            Color de la nota
        </p>

        <div className="flex gap-3">
            <button
            type="button"
            onClick={() => setColor("yellow")}
            className={`h-8 w-8 rounded-full bg-yellow-200 ring-2 transition hover:scale-110 ${
                color === "yellow"
                ? "ring-indigo-600 ring-offset-2"
                : "ring-transparent"
            }`}
            aria-label="Seleccionar amarillo"
            />

            <button
            type="button"
            onClick={() => setColor("pink")}
            className={`h-8 w-8 rounded-full bg-pink-200 ring-2 transition hover:scale-110 ${
            color === "pink"
                ? "ring-indigo-600 ring-offset-2"
                : "ring-transparent"
            }`}
            aria-label="Seleccionar rosa"
            />

            <button
            type="button"
            onClick={() => setColor("blue")}
            className={`h-8 w-8 rounded-full bg-blue-200 ring-2 transition hover:scale-110 ${
            color === "blue"
                ? "ring-indigo-600 ring-offset-2"
                : "ring-transparent"
            }`}
            aria-label="Seleccionar azul"
            />

        </div>
        </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700">
        Agregar tarea
      </button>
    </form>
  );
}

export default Form;