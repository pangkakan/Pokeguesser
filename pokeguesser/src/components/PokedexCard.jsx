export default function PokedexCard({ pokemon, onDelete }) {
    if (!pokemon) return <div>No Data</div>;

    return (
        <div className="relative border rounded p-4 bg-white shadow-sm">

            <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name} className="w-full h-48 object-contain"
            />

            <h3 className="font-bold text-lg capitalize mt-2 text-center">{pokemon.name}</h3>

            <div className="text-center text-m mt-2">
                <p>Exp: {pokemon.base_experience} | Height: {(pokemon.height / 10).toFixed(1)} m | Weight: {(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="mt-2">
                    <p className="font-semibold">Attacks: </p>
                    <ul className="list-disc ml-4">
                        {pokemon.moves?.slice(0, 6).map(move => (
                            <li key={move.move.name} className="capitalize">
                                {move.move.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-2">
                    <p className="font-semibold">Stats: </p>
                    <ul className="list-disc ml-4">
                        {pokemon.stats?.map(stat => (
                            <li key={stat.stat.name} className="capitalize">
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="text-center text-m mt-3">
                <p>
                    Abilities: {pokemon.abilities?.map(a => a.ability.name).join(" | ")}
                </p>
            </div>

            <div className="p-4">
                <button type="button" onClick={() => onDelete?.(pokemon.name)} className="w-full bg-red-600 text-white px-3 py-2 hover:bg-red-700 text-sm rounded">
                    Remove from pokedex
                </button>
            </div>


        </div>
    );
}