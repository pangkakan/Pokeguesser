export default function PokedexCard({ pokemon }) {
    if (!pokemon) return <div>No Data</div>;

    return (
        <div className="border rounded-lg p-4 bg-white shadow">
            <img
                src={pokemon.sprites?.other?.['official-artwork']?.front_default}
                alt={pokemon.name} className="w-full h-48 object-contain bg-gray-100"
            />

            <h3 className="font-bold text-lg capitalize mt-2">{pokemon.name}</h3>

            <div>Exp: {pokemon.base_experience}</div>

            <div className="mt-2">
                <p className="font-semibold">Attacks: </p>
                <ul className="list-disc ml-4">
                    {pokemon.moves?.slice(0, 5).map(move => (
                        <li key={move.move.name} className="capitalize">
                            {move.move.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-2">
                <p className="font-semibold">Abilities: </p>
                <ul className="list-disc ml-4">
                    {pokemon.abilities?.slice(0, 5).map(a => (
                        <li key={a.ability.name} className="capitalize">
                            {a.ability.name}
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
    );
}