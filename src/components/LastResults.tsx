import { Match } from "../types";
import matchesData from "../data/matches.json";

export function LastResults() {
  // Tomar los últimos 3 partidos con resultado
  const recentMatches = (matchesData as Match[])
    .filter(match => match.result)
    .slice(-3)
    .reverse();

  if (recentMatches.length === 0) {
    return <div className="text-center py-4 text-gray-500">Noch keine Spiele gespielt</div>;
  }

  return (
    <div className="space-y-4">
      {recentMatches.map((match) => {
        const [homeGoals, awayGoals] = match.result.split('-').map(Number);
        const isWin = (match.venue === 'Home' && homeGoals > awayGoals) || 
                     (match.venue === 'Away' && awayGoals > homeGoals);
        const isDraw = homeGoals === awayGoals;

        return (
          <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="flex-1">
              <div className="font-semibold text-gray-800">vs {match.opponent}</div>
              <div className="text-sm text-gray-500">
                {new Date(match.date).toLocaleDateString('de-DE')} • {match.venue === 'Home' ? 'Heim' : 'Auswärts'}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                isWin ? 'bg-green-100 text-green-800' :
                isDraw ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {match.result}
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  isWin ? 'text-green-600' :
                  isDraw ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {isWin ? 'Sieg' : isDraw ? 'Unentschieden' : 'Niederlage'}
                </div>
                <div className="text-xs text-gray-500">Ergebnis</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
