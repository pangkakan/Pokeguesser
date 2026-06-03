export async function getPokemonByName(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
     if (!res.ok) {
        throw new Error(`Could not fetch pokemon: ${name}`);
    }
    return res.json();
}

export async function getPokemonByType(type) {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);
    if (!res.ok) {
        throw new Error(`Could not fetch pokemon: ${type}`);
    }
    return res.json();
}

export async function getPokemonByAmmount(number) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}}`);
    if (!res.ok) {
        throw new Error(`Could not fetch pokemon by ammount`);
    }
    return res.json();
}