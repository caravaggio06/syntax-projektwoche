import leagueData from "../data/leagueTable.json";
import type { LeagueRow } from "../types/football";

const rows: LeagueRow[] = (leagueData as LeagueRow[])
  .slice()
  .sort((a, b) => b.points - a.points);

export function LeagueTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Team</th>
          <th>P</th>
          <th>Pts</th>
          <th>GD</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const diff = row.goalsFor - row.goalsAgainst;
          const highlight = row.teamName === "FC React United";

          return (
            <tr
              key={row.teamName}
              className={highlight ? "table-row--highlight" : undefined}
            >
              <td>{row.teamName}</td>
              <td>{row.position}</td>
              <td>{row.points}</td>
              <td>{diff}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
