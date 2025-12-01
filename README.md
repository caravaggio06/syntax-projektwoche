# Alianza Lima United – Syntax Projektwoche

Frontend-Projekt mit React + TypeScript + Vite.  
Ziel: Kleine Vereinsseite für den fiktiven Club **Alianza Lima United**.

## Features

- Startseite (`/`)
  - Nächste Begegnung (Highlight-Karte)
  - Letzte Spielergebnisse (Liste)
  - Aktuelle Ligatabelle (Tabelle)
- Ticket-Seite (`/tickets`)
  - Auswahl der Ticketanzahl (Input + +/- Buttons)
  - Preisberechnung und Gesamtsumme
  - Fake-Bestellung mit Bestätigungsnachricht (kein Backend)
- Daten aus JSON-Dateien (`src/data/`), Typsicherheit über `src/types/`.

## Technischer Stack

- React
- TypeScript
- Vite
- React Router
- Einfaches CSS (keine UI-Library)

## Voraussetzungen

- Node.js >= 18
- npm

Versionen prüfen:

```bash
node -v
npm -v
```

## Installation

```bash
git clone git@github.com:caravaggio06/syntax-projektwoche.git
cd syntax-projektwoche

npm install
```

## Entwicklung

Dev-Server starten (auf VM):

```bash
npm run dev -- --host 0.0.0.0 --port 5179
```

Im Browser (Laptop):

```text
http://192.168.0.206:5179/
```

## Wichtige Ordner/Dateien

- `src/main.tsx` – Einstieg, React + Router  
- `src/App.tsx` – Routing (`/`, `/tickets`)  
- `src/components/` – Bausteine (Layout, Matches, Tabelle, Tickets)  
- `src/pages/` – Seiten-Komponenten  
- `src/data/` – JSON-Daten für Spiele und Tabelle  
- `src/types/` – TypeScript-Typen  

## Git-Workflow (für Zusammenarbeit)

Haupt-Branches:

- `main` – stabil, nur fertige Features  
- `dev` – Entwicklungsstand  

Neue Features immer von `dev` aus:

```bash
git checkout dev
git pull

git checkout -b feature/<kurzer-name>
# Änderungen machen
git add .
git commit -m "Kurze Beschreibung"
git push -u origin feature/<kurzer-name>
```

Danach Pull Request `feature/<kurzer-name> -> dev` auf GitHub anlegen.

## Typische Aufgaben für Partner

- UI-Feinschliff: CSS/Abstände/Farben in `index.css` oder Komponenten  
- Inhalte aktualisieren: neue Spiele in `src/data/matches.json`  
- Tabelle erweitern: Teams in `src/data/leagueTable.json`  
- Kleine Komponenten anpassen (Texte, Labels, Layout)  
