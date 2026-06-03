export default function HintPanel({ hints }) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
      <h2 className="text-xl font-black text-slate-900">Hints</h2>

      <p className="mt-1 text-sm text-slate-500">
        Hints Stays until next Pokémon.
      </p>

      <div className="mt-4 space-y-3">
        {hints.length === 0 ? (
          <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-500">
            No hints yet. Press Hint if you're stuck.
          </div>
        ) : (
          hints.map((hint, index) => (
            <div
              key={`${hint.id}-${index}`}
              className="rounded-2xl bg-indigo-50 p-4 text-sm text-indigo-950"
            >
              <span className="font-bold">#{index + 1}</span> {hint.label}
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
