import { LastResults } from "../components/LastResults";
import { NextMatch } from "../components/NextMatch";
import { LeagueTable } from "../components/LeagueTable";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Willkommen beim FC React United
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Der moderne Fußballverein mit Tradition und Innovation. 
          Verfolgen Sie alle Spiele, Ergebnisse und holen Sie sich Ihre Tickets.
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-8">
          {/* Next Match Highlight Card */}
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Nächstes Spiel</h2>
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                Highlight
              </span>
            </div>
            <NextMatch />
          </div>

          {/* Recent Results */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Letzte Ergebnisse</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                3 Spiele
              </span>
            </div>
            <LastResults />
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-8">
          {/* League Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-900 text-white p-6">
              <h2 className="text-xl font-bold">Ligatabelle</h2>
              <p className="text-gray-300 text-sm">Bundesliga 2023/2024</p>
            </div>
            <div className="p-4">
              <LeagueTable />
            </div>
          </div>

          {/* Ticket Promotion */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
            <div className="text-center">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="text-xl font-bold mb-3">Tickets verfügbar!</h3>
              <p className="text-green-100 mb-6">
                Sichern Sie sich jetzt Ihre Plätze für die nächsten Heimspiele.
              </p>
              <Link to="/tickets">
                <button className="w-full bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg">
                  Jetzt Tickets kaufen →
                </button>
              </Link>
            </div>
          </div>

          {/* Club Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4">Vereinsinformationen</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Gegründet:</span>
                <span className="font-medium">2023</span>
              </div>
              <div className="flex justify-between">
                <span>Stadion:</span>
                <span className="font-medium">React Arena</span>
              </div>
              <div className="flex justify-between">
                <span>Kapazität:</span>
                <span className="font-medium">55.000 Plätze</span>
              </div>
              <div className="flex justify-between">
                <span>Trainer:</span>
                <span className="font-medium">Maximilian Reactor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
