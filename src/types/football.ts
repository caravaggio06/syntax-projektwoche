export interface Match {
  id: number;
  opponent: string;
  date: string; // ISO Datum
  venue: "Home" | "Away" | "Heim" | "Auswärts";
  result: string; // z.B. "1-1" oder "" für zukünftig
  motto?: string;
}

export interface LeagueRow {
  position: number;
  teamName: string;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}
