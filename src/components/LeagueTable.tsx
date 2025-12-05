import { Team } from "../types";
import teamsData from "../data/teams.json";

const TEAM_LOGOS: Record<string, string> = {
  "FC React United": "/images/clubs/dfb.png",
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

export function LeagueTable() {
  const teams = teamsData as Team[];
  const currentTeam = "FC React United";

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Pos.
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Mannschaft
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Punkte
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Tore
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Diff.
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {teams.map((team) => {
            const isCurrent = team.teamName === currentTeam;
            const diff = team.goalsFor - team.goalsAgainst;
            const logoSrc = TEAM_LOGOS[team.teamName];

            return (
              <tr
                key={team.position}
                className={`
                  hover:bg-gray-50 dark:hover:bg-gray-700/50 transition
                  ${
                    isCurrent
                      ? "bg-blue-50 dark:bg-blue-900/20 font-semibold"
                      : ""
                  }
                `}
              >
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  {team.position}
                </td>

                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center gap-3">
                    {logoSrc && (
                      <img
                        src={logoSrc}
                        alt={team.teamName}
                        loading="lazy"
                        className="h-6 w-6 rounded-full bg-gray-900 object-contain"
                      />
                    )}

                    <div className="flex items-center gap-2">
                      <span>{team.teamName}</span>
                      {isCurrent && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-400">
                          Unser Team
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  {team.points}
                </td>

                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  {team.goalsFor}:{team.goalsAgainst}
                </td>

                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${
                    diff > 0
                      ? "text-green-600 dark:text-green-500"
                      : diff < 0
                      ? "text-red-600 dark:text-red-500"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {diff > 0 ? "+" : ""}
                  {diff}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900 rounded mr-2"></div>
            <span>FC React United (Unser Team)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-100 dark:bg-green-900 rounded mr-2"></div>
            <span>Positive Tordifferenz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
