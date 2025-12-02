import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  de: {
    translation: {
      // Navegación
      home: "Startseite",
      tickets: "Eintrittskarten kaufen",
      matches: "Spiele",
      table: "Tabelle",
      officialClubSite: "Offizielle Vereinsseite • Bundesliga 2024",
      allRightsReserved: "Alle Rechte vorbehalten",
      
      // Home Page
      welcome: "Willkommen beim FC React United",
      nextMatch: "Nächstes Spiel",
      lastResults: "Letzte Ergebnisse",
      leagueTable: "Ligatabelle",
      buyTickets: "Eintrittskarten kaufen",
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
      selectTickets: "Anzahl den karten auswählen",
      pricePerTicket: "Preis pro Karte",
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
      continue: "Weiter",
      language: "Sprache",
      theme: "Thema",
      darkMode: "Dark Mode",
      lightMode: "Light Mode"

      
    }
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      tickets: "Buy Tickets",
      matches: "Matches",
      table: "Table",
      officialClubSite: "Official Club Site • Bundesliga 2024",
      allRightsReserved: "All rights reserved",
      
      // Home Page
      welcome: "Welcome to FC React United",
      nextMatch: "Next Match",
      lastResults: "Recent Results",
      leagueTable: "League Table",
      buyTickets: "Buy Tickets",
      clubStatistics: "Club Statistics",
      currentPosition: "Current Position",
      points: "Points",
      goals: "Goals",
      goalDifference: "Goal Difference",
      stadium: "Stadium",
      capacity: "Capacity",
      coach: "Coach",
      founded: "Founded",
      
      // Tickets Page
      selectTickets: "Select Number of Tickets",
      pricePerTicket: "Price per Ticket",
      total: "Total Amount",
      purchase: "Purchase",
      orderConfirmed: "Order Confirmed",
      nextHomeGame: "Next Home Game",
      importantInfo: "Important Information",
      contactSupport: "Contact & Support",
      demoNote: "This is a demo website",
      
      // Match info
      homeGame: "Home Game",
      awayGame: "Away Game",
      vs: "vs",
      win: "Win",
      loss: "Loss",
      draw: "Draw",
      result: "Result",
      
      // General
      loading: "Loading...",
      error: "Error",
      success: "Success",
      save: "Save",
      cancel: "Cancel",
      continue: "Continue",
      language: "Language",
      theme: "Theme",
      darkMode: "Dark Mode",
      lightMode: "Light Mode"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Cambiado a 'en' como fallback
    lng: 'de', // Idioma inicial por defecto
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
