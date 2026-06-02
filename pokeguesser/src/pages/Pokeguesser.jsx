import React, { useEffect, useState } from "react";

import PokemonStage from "../components/PokemonStage";
import GenerationSelect from "../components/GenerationSelect";
import GuessForm from "../components/GuessForm";
import ScoreBoard from "../components/ScoreBoard";
import GameControls from "../components/GameControls";

import { getRandomSpecies, getPokemonFromSpecies } from "../utils/pokeApi.js";
import { buildPokemonModel, normalizeName } from "../utils/pokemonHelpers.js";

export default function Pokeguesser() {
  const [selectedGeneration, setSelectedGeneration] = useState("all");
  const [pokemon, setPokemon] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function startRound(generation = selectedGeneration) {
    setIsLoading(true);
    setMessage("");
    setGuess("");
    setIsSolved(false);

    try {
      const species = await getRandomSpecies(generation);
      const pokemonData = await getPokemonFromSpecies(species);
      const model = buildPokemonModel(species, pokemonData);

      setPokemon(model);
      console.log(pokemonData)
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong when the Pokémon was fetched. Try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    startRound(selectedGeneration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleGenerationChange(value) {
    setSelectedGeneration(value);
    startRound(value);
  }

  function handleGuessSubmit(event) {
    event.preventDefault();

    if (!pokemon || isSolved) return;

    if (normalizeName(guess) === normalizeName(pokemon.name)) {
      setIsSolved(true);
      setMessage(`Correct! It was ${pokemon.displayName}.`);
      return;
    }

    setMessage("Wrong guess. Try again.");
    setGuess("");
  }

  return (
      <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-4 py-8 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600">
                Guess that Pokémon
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-6xl">
                Who's that Pokémon?
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Pokémon works, and guess
              </p>
            </div>

            <div className="w-full max-w-xs">
              <GenerationSelect
                  value={selectedGeneration}
                  onChange={handleGenerationChange}
                  disabled={isLoading}
              />
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="space-y-5">
              <PokemonStage pokemon={pokemon} isSolved={isSolved} revealPercent={0} />

              <ScoreBoard
                  roundScore={100}
                  totalScore={0}
                  wrongGuesses={0}
                  hintCount={0}
              />

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-black">Your guess</h2>
                    <p className="text-sm text-slate-500">
                      Example: mr-mime can be written as "mr mime" or "mr-mime".
                    </p>
                  </div>

                  <GameControls
                      onHint={() => {}}
                      onNext={() => startRound(selectedGeneration)}
                      isSolved={isSolved}
                      isLoading={isLoading}
                      canUseHint={false}
                  />
                </div>

                <GuessForm
                    guess={guess}
                    setGuess={setGuess}
                    onSubmit={handleGuessSubmit}
                    disabled={isLoading || isSolved}
                />

                {message && (
                    <div
                        className={`mt-4 rounded-2xl p-4 font-semibold ${
                            isSolved
                                ? "bg-emerald-100 text-emerald-900"
                                : "bg-rose-100 text-rose-900"
                        }`}
                    >
                      {message}
                    </div>
                )}

                {isLoading && (
                    <p className="mt-4 text-sm font-semibold text-slate-500">
                      Fetching Pokémon...
                    </p>
                )}
              </div>
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <h2 className="text-xl font-black text-slate-900">Hints</h2>
              <p className="mt-1 text-sm text-slate-500">

              </p>
            </aside>
          </div>
        </div>
      </main>
  );
}
