import { Match } from "../types";
import matchesData from "../data/matches.json";
import { useTranslation } from "react-i18next";

export function NextMatch() {
  const { t } = useTranslation();
  
  // Encontrar el próximo partido (sin resultado)
  const nextMatch = (matchesData as Match[]).find(match => !match.result);
  
  if (!nextMatch) return <div className="text-center py-4">{t('loading')}</div>;
  
  const matchDate = new Date(nextMatch.date);
  const formattedDate = matchDate.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="text-3xl md:text-4xl font-bold">{nextMatch.opponent}</div>
          <div className="text-blue-100">{nextMatch.venue === 'Home' ? t('homeGame') : t('awayGame')}</div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-xl md:text-2xl font-bold">{formattedDate}</div>
          <div className="text-blue-100">{nextMatch.motto || "Packende Begegnung!"}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-8 pt-6">
        <div className="text-center">
          <div className="text-xl font-semibold">FC React United</div>
          <div className="text-sm text-blue-100 mt-1">{t('homeGame')}</div>
        </div>
        <div className="text-5xl font-bold">VS</div>
        <div className="text-center">
          <div className="text-xl font-semibold">{nextMatch.opponent}</div>
          <div className="text-sm text-blue-100 mt-1">{nextMatch.venue === 'Home' ? t('awayGame') : t('homeGame')}</div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-sm text-blue-100">📍 React Arena • Berlin</div>
          <div className="text-sm text-blue-100 mt-1">⚽ 20:30 Uhr • Bundesliga Spieltag 28</div>
        </div>
      </div>
    </div>
  );
}
