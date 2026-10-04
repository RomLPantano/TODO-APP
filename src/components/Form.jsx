import { useState } from "react";
import Button from "./Button";

const colors = [
  { value: "yellow", className: "bg-yellow-200" },
  { value: "pink", className: "bg-pink-200" },
  { value: "blue", className: "bg-blue-200" },
];

function Form({
  initialText = "",
  initialColor = "yellow",
  submitLabel = "Agregar tarea",
  onSubmit,
}) {
  const [text, setText] = useState(initialText);
  const [color, setColor] = useState(initialColor);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onSubmit(trimmedText, color);
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
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">
            Color
          </p>

          <div className="flex gap-3">
            {colors.map((colorOption) => (
              <button
                key={colorOption.value}
                type="button"
                onClick={() => setColor(colorOption.value)}
                className={`h-8 w-8 rounded-full ${
                  colorOption.className
                } ring-2 transition hover:scale-110 ${
                  color === colorOption.value
                    ? "ring-indigo-600 ring-offset-2"
                    : "ring-transparent"
                }`}
                aria-label={`Seleccionar color ${colorOption.value}`}
              />
            ))}
          </div>
        </div>

        <Button type="submit">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default Form;