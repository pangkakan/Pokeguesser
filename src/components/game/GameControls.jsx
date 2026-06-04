export default function GameControls({
  onHint,
  onNext,
  isSolved,
  isLoading,
  canUseHint,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={onHint}
        disabled={isLoading || isSolved || !canUseHint}
        className="rounded-xl bg-amber-400 px-5 py-3 font-black text-amber-950 shadow-md transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
      >
        Hint
      </button>

      <button
        onClick={onNext}
        disabled={isLoading}
        className="rounded-xl bg-slate-900 px-5 py-3 font-black text-white shadow-md transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Next Pokémon
      </button>
    </div>
  );
}
