import React from 'react';
import leagueTable from '../data/leagueTable.json';
import { LeagueRow } from '../types/football';

const LeagueTable: React.FC = () => {
  const sortedTable = leagueTable.sort((a: LeagueRow, b: LeagueRow) => b.points - a.points);

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-2">Ligatabelle</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Platz</th>
            <th>Team</th>
            <th>Punkte</th>
            <th>Tore</th>
            <th>Tordifferenz</th>
          </tr>
        </thead>
        <tbody>
          {sortedTable.map((row) => (
            <tr key={row.position} className={row.teamName === 'FC React United' ? 'bg-highlight' : ''}>
              <td>{row.position}</td>
              <td>{row.teamName}</td>
              <td>{row.points}</td>
              <td>{row.goalsFor}:{row.goalsAgainst}</td>
              <td>{row.goalsFor - row.goalsAgainst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;