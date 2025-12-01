import { useState } from "react";

const TICKET_PRICE = 25;

export function TicketsPage() {
  const [quantity, setQuantity] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const total = quantity * TICKET_PRICE;

  const update = (value: number) => {
    if (value < 1 || value > 20) return;
    setQuantity(value);
    setConfirmed(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tickets kaufen</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Sichern Sie sich jetzt Ihre Tickets für die Heimspiele des FC React United.
          Einfach, sicher und bequem online.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Ticket Form - 2/3 width */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Quantity Selector */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Anzahl der Tickets auswählen</h3>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <button
                  type="button"
                  onClick={() => update(quantity - 1)}
                  disabled={quantity <= 1}
                  className="w-16 h-16 flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-3xl font-bold transition-colors"
                >
                  −
                </button>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900">{quantity}</div>
                  <div className="text-gray-500 mt-2">Tickets</div>
                </div>
                
                <button
                  type="button"
                  onClick={() => update(quantity + 1)}
                  disabled={quantity >= 20}
                  className="w-16 h-16 flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-3xl font-bold transition-colors"
                >
                  +
                </button>
              </div>
              
              <div className="max-w-md mx-auto">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={quantity}
                  onChange={(e) => update(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 Ticket</span>
                  <span>20 Tickets (Maximum)</span>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <div>
                  <div className="font-medium text-gray-800">Preis pro Ticket</div>
                  <div className="text-sm text-gray-500">Einzelpreis inkl. Gebühren</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">${TICKET_PRICE.toFixed(2)}</div>
              </div>
              
              <div className="flex justify-between items-center py-6 bg-blue-50 px-6 rounded-xl">
                <div className="text-lg font-bold text-gray-800">Gesamtsumme</div>
                <div className="text-4xl font-bold text-blue-600">${total.toFixed(2)}</div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              {quantity} Ticket{quantity > 1 ? 's' : ''} kaufen – ${total.toFixed(2)}
            </button>

            {/* Confirmation Message */}
            {confirmed && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-800">Bestellung bestätigt!</h4>
                    <p className="text-green-700">
                      Sie haben {quantity} Ticket{quantity > 1 ? 's' : ''} für FC React United gekauft.
                      Eine Bestätigung wurde an Ihre E-Mail gesendet.
                    </p>
                    <p className="text-green-600 mt-2 font-medium">Viel Spaß beim Spiel! ⚽</p>
                  </div>
                </div>
              </div>
            )}

            {/* Demo Note */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-yellow-800 text-sm">
                ⚠️ Dies ist eine Demo-Webseite. Es findet keine echte Zahlung statt.
              </p>
            </div>
          </form>
        </div>

        {/* Sidebar Info - 1/3 width */}
        <div className="space-y-8">
          {/* Next Match Info */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">Nächstes Heimspiel</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">FC React United</div>
                  <div className="text-gray-300">vs Bayern München</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">30. April 2024</div>
                  <div className="text-gray-300">20:30 Uhr</div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400">📍 React Arena, Berlin</div>
                <div className="text-sm text-gray-400">🎫 Verfügbare Plätze: 3.245</div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="font-bold text-gray-800 mb-4">Wichtige Informationen</h4>
            <ul className="space-y-3">
              {[
                "Tickets sind personalisiert und nicht übertragbar",
                "Einlass ab 2 Stunden vor Spielbeginn",
                "Kostenlose Stornierung bis 24h vor Spiel",
                "Familiendiscount ab 4 Tickets verfügbar",
                "Barrierefreie Plätze verfügbar",
                "Digitales Ticket auf dem Smartphone"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h4 className="font-bold text-gray-800 mb-4">Kontakt & Support</h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span>tickets@fc-react-united.de</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>+49 30 12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <span>🕒</span>
                <span>Mo-Fr: 9:00-18:00 Uhr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
