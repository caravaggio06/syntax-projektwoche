import { Match } from "../types/football";
import matchesData from "../data/matches.json";
import { useTranslation } from "react-i18next";

const CLUB_LOGOS: Record<string, string> = {
  "FC React United": "/images/clubs/dfb.png",          // dein Vereinslogo
  "Bayern München": "/images/clubs/bayern.png",
  "Manchester City": "/images/clubs/man-city.png",
  "Paris Saint-Germain": "/images/clubs/psg.png",
  "Alianza Lima": "/images/clubs/alianza-lima.png",
  "Boca Juniors": "/images/clubs/boca-juniors.svg",
  "Barcelona": "/images/clubs/barcelona.svg",
  "FC Union Berlin": "/images/clubs/union-berlin.png",
  "Rayo Vallecano": "/images/clubs/rayo-vallecano.png",
  "Fenerbahce": "/images/clubs/fenerbahce.png",
};

export function NextMatch() {
  const { t, i18n } = useTranslation();

  // nächsten Gegner ohne Ergebnis finden
  const nextMatch = (matchesData as Match[]).find((match) => !match.result);

  if (!nextMatch)
    return (
      <div className="text-center py-4">
        {i18n.language === "en"
          ? "No upcoming games"
          : "Keine bevorstehenden Spiele"}
      </div>
    );

  const matchDate = new Date(nextMatch.date);
  const formattedDate = matchDate.toLocaleDateString(
    i18n.language === "en" ? "en-US" : "de-DE",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const homeTeamName = "FC React United";
  const awayTeamName = nextMatch.opponent;

  const homeLogo = CLUB_LOGOS[homeTeamName];
  const awayLogo = CLUB_LOGOS[awayTeamName];

  return (
    <div className="space-y-6">
      {/* Kopfbereich */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">
            {awayTeamName}
          </div>
          <div className="text-blue-100">
            {nextMatch.venue === "Home"
              ? i18n.language === "en"
                ? "Home game"
                : "Heimspiel"
              : i18n.language === "en"
              ? "Away game"
              : "Auswärtsspiel"}
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-right">
          <div className="text-xl md:text-2xl font-bold text-white">
            {formattedDate}
          </div>
          <div className="text-blue-100">
            {nextMatch.motto_de || nextMatch.motto_en
              ? i18n.language === "en"
                ? nextMatch.motto_en || nextMatch.motto_de
                : nextMatch.motto_de || nextMatch.motto_en
              : i18n.language === "en"
              ? "Thrilling encounter!"
              : "Packende Begegnung!"}
          </div>
        </div>
      </div>

      {/* Mittelteil mit Logos & VS */}
      <div className="flex items-center justify-center space-x-8 pt-6">
        {/* Heimteam */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            {homeLogo && (
              <img
                src={homeLogo}
                alt={homeTeamName}
                loading="lazy"
                className="h-12 w-12 rounded-full bg-blue-900/40 object-contain"
              />
            )}
            <div className="text-xl font-semibold text-white">
              {homeTeamName}
            </div>
          </div>
          <div className="text-sm text-blue-100 mt-1">
            {i18n.language === "en" ? "Home" : "Heim"}
          </div>
        </div>

        <div className="text-5xl font-bold text-white">VS</div>

        {/* Auswärtsteam */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            {awayLogo && (
              <img
                src={awayLogo}
                alt={awayTeamName}
                loading="lazy"
                className="h-12 w-12 rounded-full bg-blue-900/40 object-contain"
              />
            )}
            <div className="text-xl font-semibold text-white">
              {awayTeamName}
            </div>
          </div>
          <div className="text-sm text-blue-100 mt-1">
            {i18n.language === "en" ? "Guest" : "Gast"}
          </div>
        </div>
      </div>

      {/* Footer mit Stadion / Uhrzeit */}
      <div className="pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-sm text-blue-100">📍 React Arena • Berlin</div>
          <div className="text-sm text-blue-100 mt-1">
            ⚽ 20:30 {i18n.language === "en" ? "o'clock" : "Uhr"} •
            {i18n.language === "en"
              ? " Bundesliga matchday"
              : " Bundesliga Spieltag"}
          </div>
        </div>
      </div>
    </div>
  );
}
