import React from 'react';
import matches from '../data/matches.json';
import { Match } from '../types/football';

const LastResults: React.FC = () => {
  const pastMatches = matches
    .filter((match: Match) => match.result && new Date(match.date) <= new Date())
    .sort((a: Match, b: Match) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-2">Letzte Ergebnisse</h2>
      <ul>
        {pastMatches.map((match) => (
          <li key={match.id} className="mb-2">
            <span>{match.opponent} - {new Date(match.date).toLocaleDateString('de-DE')} - {match.venue} - {match.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastResults;