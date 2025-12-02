import { Match } from "../types/football";
import matchesData from "../data/matches.json";
import { useTranslation } from "react-i18next";

export function NextMatch() {
  const { t, i18n } = useTranslation();
  
  // Encontrar el próximo partido (sin resultado)
  const nextMatch = (matchesData as Match[]).find(match => !match.result);
  
  if (!nextMatch) return <div className="text-center py-4">
    {i18n.language === 'en' ? 'No upcoming games' : 'Keine bevorstehenden Spiele'}
  </div>;
  
  const matchDate = new Date(nextMatch.date);
  const formattedDate = matchDate.toLocaleDateString(
    i18n.language === 'en' ? 'en-US' : 'de-DE',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

  return (
    <div className="space-y-6">
      {/* PRIMERA SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">{nextMatch.opponent}</div>
          <div className="text-blue-100">
            {nextMatch.venue === 'Home' 
              ? (i18n.language === 'en' ? 'Home game' : 'Heimspiel')
              : (i18n.language === 'en' ? 'Away game' : 'Auswärtsspiel')
            }
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-xl md:text-2xl font-bold text-white">{formattedDate}</div>
          <div className="text-blue-100">
            {nextMatch.motto_de || nextMatch.motto_en 
              ? (i18n.language === 'en' 
                  ? (nextMatch.motto_en || nextMatch.motto_de) 
                  : (nextMatch.motto_de || nextMatch.motto_en)
                )
              : (i18n.language === 'en' ? 'Thrilling encounter!' : 'Packende Begegnung!')
            }
          </div>
        </div>
      </div> {/* ← ¡ESTE CIERRE ES EL QUE FALTA! Cierra el primer flex div */}
      
      {/* SEGUNDA SECCIÓN */}
      <div className="flex items-center justify-center space-x-8 pt-6">
        <div className="text-center">
          <div className="text-xl font-semibold text-white">FC React United</div>
          <div className="text-sm text-blue-100 mt-1">
            {i18n.language === 'en' ? 'Home' : 'Heim'}
          </div>
        </div>
        <div className="text-5xl font-bold text-white">
          {i18n.language === 'en' ? 'VS' : 'VS'}
        </div>
        <div className="text-center">
          <div className="text-xl font-semibold text-white">{nextMatch.opponent}</div>
          <div className="text-sm text-blue-100 mt-1">
            {i18n.language === 'en' ? 'Guest' : 'Gast'}
          </div>
        </div>
      </div>
      
      {/* TERCERA SECCIÓN */}
      <div className="pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-sm text-blue-100">📍 React Arena • Berlin</div>
          <div className="text-sm text-blue-100 mt-1">
            ⚽ 20:30 {i18n.language === 'en' ? "o'clock" : 'Uhr'} • 
            {i18n.language === 'en' ? ' Bundesliga matchday' : ' Bundesliga Spieltag'}
          </div>
        </div>
      </div>
    </div>
  );
}
