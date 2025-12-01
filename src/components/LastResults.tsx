import { Match } from "../types";
import matchesData from "../data/matches.json";
import { useTranslation } from "react-i18next";

export function LastResults() {
  const { t } = useTranslation();
  
  // Tomar los últimos 3 partidos con resultado
  const recentMatches = (matchesData as Match[])
    .filter(match => match.result)
    .slice(-3)
    .reverse();

  if (recentMatches.length === 0) {
    return <div className="text-center py-4 text-gray-500 dark:text-gray-400">{t('loading')}</div>;
  }

  return (
    <div className="space-y-4">
      {recentMatches.map((match) => {
        const [homeGoals, awayGoals] = match.result.split('-').map(Number);
        const isWin = (match.venue === 'Home' && homeGoals > awayGoals) || 
                     (match.venue === 'Away' && awayGoals > homeGoals);
        const isDraw = homeGoals === awayGoals;

        return (
          <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <div className="flex-1">
              <div className="font-semibold text-gray-800 dark:text-gray-200">vs {match.opponent}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(match.date).toLocaleDateString('de-DE')} • {match.venue === 'Home' ? t('homeGame') : t('awayGame')}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                isWin ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' :
                isDraw ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' :
                'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
              }`}>
                {match.result}
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  isWin ? 'text-green-600 dark:text-green-500' :
                  isDraw ? 'text-yellow-600 dark:text-yellow-500' :
                  'text-red-600 dark:text-red-500'
                }`}>
                  {isWin ? t('win') : isDraw ? t('draw') : t('loss')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('result')}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
