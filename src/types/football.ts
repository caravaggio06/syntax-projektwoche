// types.ts
export interface Match {
  id: number;
  opponent: string;
  date: string;
  venue: 'Home' | 'Away';
  result: string;
  motto_de?: string;  // Opcional
  motto_en?: string;  // Opcional
}

export interface LeagueRow {
  position: number;
  teamName: string;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}
