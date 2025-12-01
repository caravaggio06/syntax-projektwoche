import { Team } from "../types";
import teamsData from "../data/teams.json";

export function LeagueTable() {
  const teams = teamsData as Team[];
  const currentTeam = "FC React United";

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos.</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mannschaft</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Punkte</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tore</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diff.</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teams.map((team) => (
            <tr 
              key={team.position} 
              className={`
                hover:bg-gray-50 transition
                ${team.teamName === currentTeam ? 'bg-blue-50 font-semibold' : ''}
              `}
            >
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{team.position}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                {team.teamName}
                {team.teamName === currentTeam && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    Unser Team
                  </span>
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{team.points}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                {team.goalsFor}:{team.goalsAgainst}
              </td>
              <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${
                team.goalsFor - team.goalsAgainst > 0 ? 'text-green-600' :
                team.goalsFor - team.goalsAgainst < 0 ? 'text-red-600' :
                'text-gray-600'
              }`}>
                {team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}
                {team.goalsFor - team.goalsAgainst}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-100 rounded mr-2"></div>
            <span>FC React United (Unser Team)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-100 rounded mr-2"></div>
            <span>Positive Tordifferenz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
