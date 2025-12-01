import { LastResults } from "../components/LastResults";
import { NextMatch } from "../components/NextMatch";
import { LeagueTable } from "../components/LeagueTable";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t('welcome')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
          Der moderne Fußballverein mit Tradition und Innovation. 
          Verfolgen Sie alle Spiele, Ergebnisse und holen Sie sich Ihre Tickets.
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-8">
          {/* Next Match Highlight Card */}
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-900 dark:to-purple-900 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{t('nextMatch')}</h2>
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                Highlight
              </span>
            </div>
            <NextMatch />
          </div>

          {/* Recent Results */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('lastResults')}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                3 Spiele
              </span>
            </div>
            <LastResults />
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-8">
          {/* League Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-900 dark:bg-black text-white p-6">
              <h2 className="text-xl font-bold">{t('leagueTable')}</h2>
              <p className="text-gray-300 text-sm">Bundesliga 2023/2024</p>
            </div>
            <div className="p-4">
              <LeagueTable />
            </div>
          </div>

          {/* Ticket Promotion */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 rounded-2xl shadow-xl p-6 text-white">
            <div className="text-center">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="text-xl font-bold mb-3">{t('buyTickets')}</h3>
              <p className="text-green-100 mb-6">
                Sichern Sie sich jetzt Ihre Plätze für die nächsten Heimspiele.
              </p>
              <Link to="/tickets">
                <button className="w-full bg-white text-emerald-700 hover:bg-gray-100 dark:hover:bg-gray-200 font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg">
                  {t('tickets')} →
                </button>
              </Link>
            </div>
          </div>

          {/* Club Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">{t('clubStatistics')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">7°</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('currentPosition')}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-700 dark:text-green-400">18</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('points')}</div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">22:18</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('goals')}</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">+4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('goalDifference')}</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>{t('stadium')}:</span>
                <span className="font-medium dark:text-gray-300">React Arena</span>
              </div>
              <div className="flex justify-between">
                <span>{t('capacity')}:</span>
                <span className="font-medium dark:text-gray-300">55.000 {t('seats')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('coach')}:</span>
                <span className="font-medium dark:text-gray-300">Maximilian Reactor</span>
              </div>
              <div className="flex justify-between">
                <span>{t('founded')}:</span>
                <span className="font-medium dark:text-gray-300">2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
