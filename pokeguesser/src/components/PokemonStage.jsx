const STAGE_BACKGROUND = "../../public/whos-that-pokemon.avif";

export default function PokemonStage() {
  return (
    <div className="flex w-full justify-center">
      <div
        className="relative aspect-[2/1] overflow-hidden rounded-3xl bg-slate-900 shadow-2xl"
        style={{
          width: "min(90vw, 820px)",
          maxWidth: "820px",
        }}
      >
        <img
          src={STAGE_BACKGROUND}
          alt="Who's that Pokémon background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-dashed border-slate-400 bg-white/20"
          style={{
            left: "30%",
            top: "49%",
            width: "31%",
            height: "58%",
          }}
        >
          <span className="text-center text-sm font-black uppercase tracking-wide text-slate-700">
            Pokémon
          </span>
        </div>
      </div>
    </div>
  );
}
