import React, { useState } from "react";

import PokemonStage from "../components/PokemonStage";
import GenerationSelect from "../components/GenerationSelect";
import GuessForm from "../components/GuessForm";
import ScoreBoard from "../components/ScoreBoard";
import GameControls from "../components/GameControls";

export default function Pokeguesser() {
  const [selectedGeneration, setSelectedGeneration] = useState("all");
  const [guess, setGuess] = useState("");

  function handleGuessSubmit(event) {
    event.preventDefault();
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
                static layout, responsive stage, generation selector,
                score cards and guess form should work:)
              </p>
            </div>

            <div className="w-full max-w-xs">
              <GenerationSelect
                  value={selectedGeneration}
                  onChange={setSelectedGeneration}
                  disabled={false}
              />
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="space-y-5">
              <PokemonStage />

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
                      The form is wired up visually. Game logic later.
                    </p>
                  </div>

                  <GameControls
                      onHint={() => {}}
                      onNext={() => {}}
                      isSolved={false}
                      isLoading={false}
                      canUseHint={false}
                  />
                </div>

                <GuessForm
                    guess={guess}
                    setGuess={setGuess}
                    onSubmit={handleGuessSubmit}
                    disabled={false}
                />
              </div>
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <h2 className="text-xl font-black text-slate-900">Hints</h2>
              <p className="mt-1 text-sm text-slate-500">
                Hints later.
              </p>
            </aside>
          </div>
        </div>
      </main>
  );
}
