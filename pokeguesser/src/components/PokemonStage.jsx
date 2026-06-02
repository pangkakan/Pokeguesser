const STAGE_BACKGROUND = "/whos-that-pokemon.avif";

export default function PokemonStage({ pokemon, revealPercent, isSolved }) {
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
                    alt="Who's that Pokémon-bakgrund"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {pokemon?.sprite && (
                    <div
                        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                        style={{
                            left: "30%",
                            top: "49%",
                            width: "31%",
                            height: "58%",
                        }}
                    >
                        <img
                            src={pokemon.sprite}
                            alt="Pokemon-silhuett"
                            draggable="false"
                            className={`absolute h-full w-full object-contain transition duration-500 ${
                                isSolved ? "opacity-100" : "brightness-0"
                            }`}
                        />

                        {!isSolved && revealPercent > 0 && (
                            <img
                                src={pokemon.sprite}
                                alt="Partly revealed Pokémon"
                                draggable="false"
                                className="absolute h-full w-full object-contain transition duration-500"
                                style={{
                                    clipPath: `inset(${100 - revealPercent}% 0 0 0)`,
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
