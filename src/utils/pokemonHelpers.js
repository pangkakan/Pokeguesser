export function normalizeName(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function formatName(value) {
  if (!value) return "Unknown";

  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function buildPokemonModel(species, pokemon) {
  const englishGenus = species.genera.find(
    (entry) => entry.language.name === "en"
  )?.genus;

  const englishFlavor = species.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    ?.flavor_text?.replace(/\f|\n/g, " ");

  return {
    id: pokemon.id,
    name: pokemon.name,
    displayName: formatName(pokemon.name),

    sprite:
      pokemon.sprites.other?.["official-artwork"]?.front_default ??
      pokemon.sprites.other?.home?.front_default ??
      pokemon.sprites.front_default,

    types: pokemon.types.map((entry) => entry.type.name),
    abilities: pokemon.abilities.map((entry) => entry.ability.name),
    hiddenAbilities: pokemon.abilities
      .filter((entry) => entry.is_hidden)
      .map((entry) => entry.ability.name),

    heightDm: pokemon.height,
    weightHg: pokemon.weight,
    baseExperience: pokemon.base_experience,

    stats: pokemon.stats.map((entry) => ({
      name: entry.stat.name,
      value: entry.base_stat,
    })),

    moveCount: pokemon.moves.length,
    sampleMove:
      pokemon.moves.length > 0
        ? pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)].move.name
        : null,

    generation: species.generation?.name,
    category: englishGenus,
    color: species.color?.name,
    shape: species.shape?.name,
    habitat: species.habitat?.name,
    eggGroups: species.egg_groups.map((entry) => entry.name),
    growthRate: species.growth_rate?.name,
    captureRate: species.capture_rate,
    baseHappiness: species.base_happiness,
    genderRate: species.gender_rate,
    evolvesFrom: species.evolves_from_species?.name,
    flavorText: englishFlavor,
  };
}
