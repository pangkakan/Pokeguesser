export async function getPokemonByName(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!res.ok) {
        throw new Error(`Could not fetch pokemon: ${name}`);
    }
    return res.json();
}