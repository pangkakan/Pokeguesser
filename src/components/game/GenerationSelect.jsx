import { GENERATIONS } from "../../utils/pokemonGenerations.js";

export default function GenerationSelect({ value, onChange, disabled }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
      Select generation

      <select
        value={value}
        disabled={disabled}
        onChange={(event) =>
          onChange(event.target.value === "all" ? "all" : Number(event.target.value))
        }
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {GENERATIONS.map((generation) => (
          <option key={generation.id} value={generation.id}>
            {generation.label}
          </option>
        ))}
      </select>
    </label>
  );
}
