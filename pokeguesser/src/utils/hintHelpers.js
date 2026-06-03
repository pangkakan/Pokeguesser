import { formatName } from "../../../../../../Downloads/03-scoring-basic-hints/03-scoring-basic-hints/src/utils/pokemonHelpers.js";

export function buildHintPool(pokemon, selectedGeneration) {
  const hints = [
    {
      id: "first-letter",
      label: `The first letter is "${pokemon.name.charAt(0).toUpperCase()}".`,
      penalty: 8,
    },
    {
      id: "name-length",
      label: `The name contains ${pokemon.name.length} letters.`,
      penalty: 8,
    },
    {
      id: "type",
      label: `Type: ${pokemon.types.map(formatName).join(" / ")}.`,
      penalty: 8,
    },
    pokemon.category && {
      id: "category",
      label: `Category: ${pokemon.category}.`,
      penalty: 8,
    },
    selectedGeneration === "all" &&
      pokemon.generation && {
        id: "generation",
        label: `Introduced in ${formatName(pokemon.generation)}.`,
        penalty: 8,
      },
  ];

  return hints.filter(Boolean);
}
