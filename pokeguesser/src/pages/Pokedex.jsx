import PokedexCard from "../components/PokedexCard.jsx";

export default function Pokedex() {
    const tPoke = {
        name: "pikachu",
        base_experience: 112,
        height: 4,
        weight: 60,
        sprites: {
            other: {
                "official-artwork": {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                }
            }
        },
        abilities: [
            {
                ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" },
                is_hidden: false,
                slot: 1
            },
            {
                ability: { name: "lightning-rod", url: "https://pokeapi.co/api/v2/ability/31/" },
                is_hidden: true,
                slot: 3
            }
        ],
        stats: [
            { base_stat: 35, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
            { base_stat: 55, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
            { base_stat: 40, effort: 0, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
            { base_stat: 90, effort: 2, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
        ],
        moves: [
            { move: { name: "thunder-shock", url: "https://pokeapi.co/api/v2/move/84/" } },
            { move: { name: "quick-attack", url: "https://pokeapi.co/api/v2/move/98/" } },
            { move: { name: "electro-ball", url: "https://pokeapi.co/api/v2/move/486/" } },
            { move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" } }
        ]
    };

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <PokedexCard pokemon={tPoke} />
                <PokedexCard pokemon={tPoke} />
                <PokedexCard pokemon={tPoke} />
                <PokedexCard pokemon={tPoke} />
                <PokedexCard pokemon={tPoke} />
                <PokedexCard pokemon={tPoke} />
            </div>
        </div>
    );
}