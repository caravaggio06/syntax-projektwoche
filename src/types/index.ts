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

export interface TranslationKeys {
  home: string;
  tickets: string;
  officialClubSite: string;
  allRightsReserved: string;
  welcome: string;
  nextMatch: string;
  lastResults: string;
  leagueTable: string;
  buyTickets: string;
  clubStatistics: string;
  currentPosition: string;
  points: string;
  goals: string;
  goalDifference: string;
  stadium: string;
  capacity: string;
  coach: string;
  founded: string;
  selectTickets: string;
  pricePerTicket: string;
  total: string;
  purchase: string;
  orderConfirmed: string;
  nextHomeGame: string;
  importantInfo: string;
  contactSupport: string;
  demoNote: string;
  homeGame: string;
  awayGame: string;
  vs: string;
  win: string;
  loss: string;
  draw: string;
  result: string;
  loading: string;
  error: string;
  success: string;
  save: string;
  cancel: string;
  continue: string;
}
