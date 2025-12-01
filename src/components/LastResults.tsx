import matchesData from "../data/matches.json";
import type { Match } from "../types/football";

const matches = matchesData as Match[];

export function LastResults() {
  const today = new Date();

  const pastMatches = matches
    .filter((m) => m.result && new Date(m.date) <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      {pastMatches.map((match) => (
        <div key={match.id} className="card card--subtle">
          <div className="result-team">{match.opponent}</div>
          <div className="result-score">{match.result}</div>
          <div className="result-meta">
            {new Date(match.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}{" "}
            ·{" "}
            {match.venue === "Home" || match.venue === "Heim" ? "Home" : "Away"}
          </div>
        </div>
      ))}
    </>
  );
}
