import React from 'react';
import matches from '../data/matches.json';
import { Match } from '../types/football';

const NextMatch: React.FC = () => {
  const futureMatches = matches
    .filter((match: Match) => !match.result && new Date(match.date) >= new Date())
    .sort((a: Match, b: Match) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nextMatch = futureMatches[0];

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-2">Nächste Begegnung</h2>
      {nextMatch ? (
        <div>
          <span>{nextMatch.opponent} - {new Date(nextMatch.date).toLocaleDateString('de-DE')} - {nextMatch.venue}</span>
          {nextMatch.motto && <p className="italic">{nextMatch.motto}</p>}
        </div>
      ) : (
        <p>Aktuell ist kein Spiel geplant.</p>
      )}
    </div>
  );
};

export default NextMatch;