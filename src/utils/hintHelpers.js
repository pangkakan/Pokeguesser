import { formatName } from "./pokemonHelpers.js";

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function buildHintPool(pokemon, selectedGeneration) {
  const strongestStat = [...pokemon.stats].sort((a, b) => b.value - a.value)[0];
  const isGenderless = pokemon.genderRate === -1;

  const hints = [
    {
      id: "first-letter",
      label: `The first letter is "${pokemon.name.charAt(0).toUpperCase()}".`,
      penalty: 5,
    },
    {
      id: "name-length",
      label: `The name contains ${pokemon.name.length} letters.`,
      penalty: 5,
    },
    {
      id: "type",
      label: `Type: ${pokemon.types.map(formatName).join(" / ")}.`,
      penalty: 5,
    },
    pokemon.category && {
      id: "category",
      label: `Category: ${pokemon.category}.`,
      penalty: 5,
    },
    selectedGeneration === "all" &&
    pokemon.generation && {
      id: "generation",
      label: `Introduced in ${formatName(pokemon.generation)}.`,
      penalty: 5,
    },
    pokemon.heightDm && {
      id: "height",
      label: `Height: ${(pokemon.heightDm / 10).toFixed(1)} meters.`,
      penalty: 5,
    },
    pokemon.weightHg && {
      id: "weight",
      label: `Weight: ${(pokemon.weightHg / 10).toFixed(1)} kg.`,
      penalty: 5,
    },
    pokemon.abilities.length > 0 && {
      id: "ability",
      label: `One of their abilities are ${formatName(randomItem(pokemon.abilities))}.`,
      penalty: 5,
    },
    pokemon.hiddenAbilities.length > 0 && {
      id: "hidden-ability",
      label: `It can have the hidden ability: ${formatName(pokemon.hiddenAbilities[0])}.`,
      penalty: 5,
    },
    pokemon.color && {
      id: "color",
      label: `Pokédex-color: ${formatName(pokemon.color)}.`,
      penalty: 5,
    },
    pokemon.shape && {
      id: "shape",
      label: `Pokédex-form: ${formatName(pokemon.shape)}.`,
      penalty: 5,
    },
    pokemon.habitat && {
      id: "habitat",
      label: `Habitat: ${formatName(pokemon.habitat)}.`,
      penalty: 5,
    },
    pokemon.growthRate && {
      id: "growth-rate",
      label: `Growth rate: ${formatName(pokemon.growthRate)}.`,
      penalty: 5,
    },
    typeof pokemon.captureRate === "number" && {
      id: "capture-rate",
      label: `Capture rate: ${pokemon.captureRate}.`,
      penalty: 5,
    },
    typeof pokemon.baseHappiness === "number" && {
      id: "base-happiness",
      label: `Base happiness: ${pokemon.baseHappiness}.`,
      penalty: 5,
    },
    {
      id: "gender-rate",
      label: isGenderless
          ? "It is genderless."
          : `Percentage female according to gender rate: roughly ${Math.round((pokemon.genderRate / 8) * 100)}%.`,
      penalty: 5,
    },
    pokemon.evolvesFrom && {
      id: "evolves-from",
      label: `It evolves from ${formatName(pokemon.evolvesFrom)}.`,
      penalty: 5,
    },
    strongestStat && {
      id: "strongest-stat",
      label: `Highest base stat is ${formatName(strongestStat.name)}.`,
      penalty: 5,
    },
    pokemon.sampleMove && {
      id: "sample-move",
      label: `A move it can learn is ${formatName(pokemon.sampleMove)}.`,
      penalty: 5,
    },
    pokemon.moveCount && {
      id: "move-count",
      label: `It has ${pokemon.moveCount} registered moves in PokeAPI.`,
      penalty: 5,
    },
    pokemon.baseExperience && {
      id: "base-exp",
      label: `Base experience: ${pokemon.baseExperience}.`,
      penalty: 5,
    },
    pokemon.flavorText && {
      id: "flavor-text",
      label: `Pokédex-text: ${pokemon.flavorText}`,
      penalty: 5,
    }
  ];

  return hints.filter(Boolean);
}
