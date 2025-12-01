import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones alemanas
const resources = {
  de: {
    translation: {
      // Navegación
      home: "Startseite",
      tickets: "Tickets kaufen",
      matches: "Spiele",
      table: "Tabelle",
      officialClubSite: "Offizielle Vereinsseite • Bundesliga 2024",
      allRightsReserved: "Alle Rechte vorbehalten",
      
      // Home Page
      welcome: "Willkommen beim FC React United",
      nextMatch: "Nächstes Spiel",
      lastResults: "Letzte Ergebnisse",
      leagueTable: "Ligatabelle",
      buyTickets: "Tickets kaufen",
      clubStatistics: "Vereinsstatistik",
      currentPosition: "Aktuelle Position",
      points: "Punkte",
      goals: "Tore",
      goalDifference: "Tordifferenz",
      stadium: "Stadion",
      capacity: "Kapazität",
      coach: "Trainer",
      founded: "Gegründet",
      
      // Tickets Page
      selectTickets: "Anzahl der Tickets auswählen",
      pricePerTicket: "Preis pro Ticket",
      total: "Gesamtsumme",
      purchase: "Kaufen",
      orderConfirmed: "Bestellung bestätigt",
      nextHomeGame: "Nächstes Heimspiel",
      importantInfo: "Wichtige Informationen",
      contactSupport: "Kontakt & Support",
      demoNote: "Dies ist eine Demo-Webseite",
      
      // Match info
      homeGame: "Heimspiel",
      awayGame: "Auswärtsspiel",
      vs: "gegen",
      win: "Sieg",
      loss: "Niederlage",
      draw: "Unentschieden",
      result: "Ergebnis",
      
      // General
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      save: "Speichern",
      cancel: "Abbrechen",
      continue: "Weiter"
    }
  },
  en: {
    translation: {
      home: "Home",
      tickets: "Buy Tickets",
      officialClubSite: "Official Club Site • Bundesliga 2024",
      allRightsReserved: "All rights reserved",
      welcome: "Welcome to FC React United",
      nextMatch: "Next Match",
      lastResults: "Recent Results",
      leagueTable: "League Table",
      buyTickets: "Buy Tickets",
      selectTickets: "Select Number of Tickets",
      pricePerTicket: "Price per Ticket",
      total: "Total Amount",
      purchase: "Purchase",
      orderConfirmed: "Order Confirmed"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
