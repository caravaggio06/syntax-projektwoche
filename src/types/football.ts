export interface Match {
  id: number;
  opponent: string;
  date: string;
  venue: "Heim" | "Auswärts";
  result: string;
  motto?: string;
}

export interface LeagueRow {
  position: number;
  teamName: string;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}