import PokedexCard from "../components/PokedexCard.jsx";
import {useEffect, useState} from "react";
import {getPokemonByName} from "../api/pokeApi.js";

export default function Pokedex() {
const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        async function loadList() {
            const names = JSON.parse(localStorage.getItem("savedPokemon")) || [];
            const pokemons = await Promise.all(names.map((name) => getPokemonByName(name)));
            setPokemonList(pokemons);
        }
        loadList();
    }, []);

    const handleRemovePokemon = (name) => {
        console.log(`removed ${name} from pokedex`);
        //I väntan på att få tillgång till Jonathans metod för borttagninge från localStorage :)
    };

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {pokemonList.map((pokemon) => (
                    <PokedexCard key={pokemon.name} pokemon={pokemon} onDelete={handleRemovePokemon}/>
                ))}
            </div>
        </div>
    );
}