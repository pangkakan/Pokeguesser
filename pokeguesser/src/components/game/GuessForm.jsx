export default function GuessForm({ guess, setGuess, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        value={guess}
        disabled={disabled}
        onChange={(event) => setGuess(event.target.value)}
        placeholder="Enter Pokémon name..."
        className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
      />

      <button
        disabled={disabled || !guess.trim()}
        className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Guess
      </button>
    </form>
  );
}
