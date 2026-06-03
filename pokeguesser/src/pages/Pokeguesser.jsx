import React, { useEffect, useMemo, useState } from "react";

import PokemonStage from "../components/PokemonStage";
import GenerationSelect from "../components/GenerationSelect";
import GuessForm from "../components/GuessForm";
import HintPanel from "../components/HintPanel";
import ScoreBoard from "../components/ScoreBoard";
import GameControls from "../components/GameControls";

import { getRandomSpecies, getPokemonFromSpecies } from "../api/pokeApi.js";
import { buildPokemonModel, normalizeName } from "../utils/pokemonHelpers.js";
import { buildHintPool } from "../utils/hintHelpers.js";

export default function Pokeguesser() {
  const [selectedGeneration, setSelectedGeneration] = useState("all");
  const [pokemon, setPokemon] = useState(null);
  const [hintPool, setHintPool] = useState([]);
  const [usedHints, setUsedHints] = useState([]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [roundScore, setRoundScore] = useState(100);
  const [totalScore, setTotalScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const canUseHint = useMemo(() => hintPool.length > 0, [hintPool.length]);

  async function startRound(generation = selectedGeneration) {
    setIsLoading(true);
    setMessage("");
    setGuess("");
    setIsSolved(false);
    setUsedHints([]);
    setRoundScore(100);
    setWrongGuesses(0);

    try {
      const species = await getRandomSpecies(generation);
      const pokemonData = await getPokemonFromSpecies(species);
      const model = buildPokemonModel(species, pokemonData);

      setPokemon(model);
      console.log(pokemonData)
      setHintPool(buildHintPool(model, generation));
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong when the Pokémon was fetched. Try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    startRound(selectedGeneration);
  }, []);

  function handleGenerationChange(value) {
    setSelectedGeneration(value);
    startRound(value);
  }

  function handleHint() {
    if (!hintPool.length || isSolved) return;

    const randomIndex = Math.floor(Math.random() * hintPool.length);
    const hint = hintPool[randomIndex];

    setHintPool((current) => current.filter((entry) => entry.id !== hint.id));
    setUsedHints((current) => [...current, hint]);
    setRoundScore((current) => Math.max(0, current - hint.penalty));
  }

  function handleGuessSubmit(event) {
    event.preventDefault();

    if (!pokemon || isSolved) return;

    if (normalizeName(guess) === normalizeName(pokemon.name)) {
      setIsSolved(true);
      setTotalScore((current) => current + roundScore);
      setMessage(`Correct! It was ${pokemon.displayName}. You got ${roundScore} points.`);
      return;
    }

    setWrongGuesses((current) => current + 1);
    setRoundScore((current) => Math.max(0, current - 10));
    setMessage("Wrong guess. Try again or use a hint.");
    setGuess("");
  }

  return (
      <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-4 py-8 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Guess that Pokémon
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-6xl">
                Who's that Pokémon?
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Guess the name, collect points and use Hints strategically.
                Every hint and wrong guess lowers the round score.
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
              <PokemonStage
                  pokemon={pokemon}
                  isSolved={isSolved}
              />

              <ScoreBoard
                  roundScore={roundScore}
                  totalScore={totalScore}
                  wrongGuesses={wrongGuesses}
                  hintCount={usedHints.length}
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
                      onHint={handleHint}
                      onNext={() => startRound(selectedGeneration)}
                      isSolved={isSolved}
                      isLoading={isLoading}
                      canUseHint={canUseHint}
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

            <HintPanel hints={usedHints} />
          </div>
        </div>
      </main>
  );
}
