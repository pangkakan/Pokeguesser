const API_BASE = "https://pokeapi.co/api/v2";

export async function getPokemonByName(name) {
    const res = await fetch(`${API_BASE}/pokemon/${name.toLowerCase()}`);
    if (!res.ok) {
        throw new Error(`Could not fetch pokemon: ${name}`);
    }
    return res.json();
}

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Kunde inte hämta data från ${url}`);
    }

    return response.json();
}

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

export async function getRandomSpecies(generationId) {
    if (generationId !== "all") {
        const generation = await fetchJson(`${API_BASE}/generation/${generationId}`);
        const species = randomItem(generation.pokemon_species);

        return fetchJson(species.url);
    }

    const index = await fetchJson(`${API_BASE}/pokemon-species?limit=1`);
    const allSpecies = await fetchJson(
        `${API_BASE}/pokemon-species?limit=${index.count}`
    );

    const species = randomItem(allSpecies.results);

    return fetchJson(species.url);
}

export async function getPokemonFromSpecies(species) {
    const defaultVariety =
        species.varieties.find((entry) => entry.is_default) ?? species.varieties[0];

    return fetchJson(defaultVariety.pokemon.url);
}
