import StatCard from "./StatCard.jsx";

export default function ScoreBoard({
  roundScore,
  totalScore,
  wrongGuesses,
  hintCount,
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatCard label="Round score" value={roundScore} />
      <StatCard label="Total score" value={totalScore} />
      <StatCard label="Wrong guesses" value={wrongGuesses} />
      <StatCard label="Hints" value={hintCount} />
    </div>
  );
}
