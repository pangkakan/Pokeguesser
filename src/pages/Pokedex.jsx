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
        const savedPokemon = JSON.parse(localStorage.getItem('savedPokemon') || '[]')
        const updatedSavedPokemon = savedPokemon.filter((pokemonName) => pokemonName !== name);
        localStorage.setItem("savedPokemon", JSON.stringify(updatedSavedPokemon));
        setPokemonList((currentList) =>
            currentList.filter((pokemon) => pokemon.name !== name)
        );
    };

    if (pokemonList.length === 0) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Pokedex is empty :(</h1>
                    <p className="text-gray-600 mt-2">Add pokémons to create your own pokédex!</p>
                </div>
            </div>
        );
    } else {
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
}