import { Match } from "../types";
import matchesData from "../data/matches.json";

export function NextMatch() {
  // Encontrar el próximo partido (sin resultado)
  const nextMatch = (matchesData as Match[]).find(match => !match.result);
  
  if (!nextMatch) return <div className="text-center py-4">Keine bevorstehenden Spiele</div>;
  
  const matchDate = new Date(nextMatch.date);
  const formattedDate = matchDate.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold">{nextMatch.opponent}</div>
          <div className="text-blue-100">{nextMatch.venue === 'Home' ? 'Heimspiel' : 'Auswärtsspiel'}</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{formattedDate}</div>
          <div className="text-blue-100">{nextMatch.motto || "Packende Begegnung!"}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-4 pt-4">
        <div className="text-center">
          <div className="text-lg font-semibold">FC React United</div>
          <div className="text-4xl font-bold mt-2">VS</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold">{nextMatch.opponent}</div>
          <div className="text-sm text-blue-100 mt-1">{nextMatch.venue === 'Home' ? 'Gast' : 'Gastgeber'}</div>
        </div>
      </div>
    </div>
  );
}
