import { Match } from "../types";
import matchesData from "../data/matches.json";
import { useTranslation } from "react-i18next";

export function NextMatch() {
  const { t } = useTranslation();
  
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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">{nextMatch.opponent}</div>
          <div className="text-blue-100">{nextMatch.venue === 'Home' ? 'Heimspiel' : 'Auswärtsspiel'}</div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-xl md:text-2xl font-bold text-white">{formattedDate}</div>
          <div className="text-blue-100">{nextMatch.motto || "Packende Begegnung!"}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-8 pt-6">
        <div className="text-center">
          <div className="text-xl font-semibold text-white">FC React United</div>
          <div className="text-sm text-blue-100 mt-1">Heim</div>
        </div>
        <div className="text-5xl font-bold text-white">VS</div>
        <div className="text-center">
          <div className="text-xl font-semibold text-white">{nextMatch.opponent}</div>
          <div className="text-sm text-blue-100 mt-1">Gast</div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-sm text-blue-100">📍 React Arena • Berlin</div>
          <div className="text-sm text-blue-100 mt-1">⚽ 20:30 Uhr • Bundesliga Spieltag</div>
        </div>
      </div>
    </div>
  );
}
