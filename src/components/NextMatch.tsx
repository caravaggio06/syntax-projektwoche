import matchesData from "../data/matches.json";
import type { Match } from "../types/football";

const matches = matchesData as Match[];

export function NextMatch() {
  const today = new Date();

  const futureMatches = matches
    .filter((m) => !m.result || m.result.trim() === "")
    .filter((m) => new Date(m.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const next = futureMatches[0];

  if (!next) {
    return <p className="next-match-meta">No upcoming match scheduled.</p>;
  }

  const venueText =
    next.venue === "Home" || next.venue === "Heim" ? "Home Stadium" : "Away";

  return (
    <div>
      <div className="next-match-opponent">{next.opponent}</div>
      <div className="next-match-meta">
        {new Date(next.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}{" "}
        · {venueText}
      </div>
      {next.motto && <div className="next-match-motto">{next.motto}</div>}
    </div>
  );
}
