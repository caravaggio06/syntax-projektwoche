export interface Team {
  position: number;
  teamName: string;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface Match {
  id: number;
  opponent: string;
  date: string;
  venue: 'Home' | 'Away';
  result: string;
  motto?: string;
}
