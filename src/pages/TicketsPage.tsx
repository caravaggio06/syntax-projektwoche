import { useState } from "react";
import { useTranslation } from "react-i18next";

const TICKET_PRICE = 25;

export function TicketsPage() {
  const { t, i18n } = useTranslation();
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
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('tickets')}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
          {i18n.language === 'en'
          ? 'Secure now your tickets for FC React United home games. Simple and safe online.'
          : 'Sichern Sie sich jetzt Ihre Tickets für die Heimspiele des FC React United. Einfach, sicher und bequem online.'
         }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Ticket Form - 2/3 width */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {/* Quantity Selector */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('selectTickets')}</h3>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <button
                  type="button"
                  onClick={() => update(quantity - 1)}
                  disabled={quantity <= 1}
                  className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-3xl font-bold transition-colors"
                >
                  −
                </button>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 dark:text-white">{quantity}</div>
                  <div className="text-gray-500 dark:text-gray-400 mt-2">
                    {quantity === 1 
                      ? i18n.language === 'en' ? 'Ticket' : 'Eintrittskarte'
                      : i18n.language === 'en' ? 'Tickets' : 'Eintrittskarten'
                    }
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => update(quantity + 1)}
                  disabled={quantity >= 20}
                  className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-3xl font-bold transition-colors"
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
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>1 {i18n.language === 'en' ? 'Ticket' : 'Eintrittskarte'}</span>
                  <span>20 {i18n.language === 'en' ? 'Tickets' : 'Eintrittskarten'} ({i18n.language === 'en' ? 'Max' : 'Maximum'})</span>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">{t('pricePerTicket')}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                     {i18n.language === 'en' ? 'Price incl. fees' : 'Einzelpreis inkl. Gebühren'}
                    </div>
                  </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">€{TICKET_PRICE.toFixed(2)}</div>
              </div>
              
              <div className="flex justify-between items-center py-6 bg-blue-50 dark:bg-blue-900/20 px-6 rounded-xl">
                <div className="text-lg font-bold text-gray-800 dark:text-gray-200">{t('total')}</div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">€{total.toFixed(2)}</div>
              </div>
            </div>

            {/* Submit Button */}
            <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition duration-300 shadow-lg hover:shadow-xl"
>
  {i18n.language === 'en'
    ? `${quantity} Ticket${quantity > 1 ? 's' : ''} ${t('purchase')} – €${total.toFixed(2)}`
    : `${quantity} Eintrittskarten${quantity > 1 ? 's' : ''} ${t('purchase')} – €${total.toFixed(2)}`
  }
</button>

            {/* Confirmation Message */}
            {confirmed && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-emerald-800 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-800 dark:text-emerald-400">{t('orderConfirmed')}!</h4>
                    <p className="text-green-700 dark:text-emerald-300">
                    {i18n.language === 'en'
                    ? `You purchased ${quantity} ticket${quantity > 1 ? 's' : ''}. Confirmation sent to email.`
                     : `Sie haben ${quantity} Ticket${quantity > 1 ? 's' : ''} gekauft. Bestätigung an E-Mail gesendet.`
                    }
                    </p>
                    <p className="text-green-600 dark:text-emerald-400 mt-2 font-medium">
                      {i18n.language === 'en' ? 'Enjoy the game! ⚽' : 'Viel Spaß beim Spiel! ⚽'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Demo Note */}
            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-center">
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                ⚠️ {t('demoNote')}. {i18n.language === 'en' ? 'No real payment occurs.' : 'Es findet keine echte Zahlung statt.'}
              </p>
            </div>
          </form>
        </div>

        {/* Sidebar Info - 1/3 width */}
        <div className="space-y-8">
          {/* Next Match Info */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">{t('nextHomeGame')}</h4>
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
                <div className="text-sm text-gray-400">
                  🎫 {i18n.language === 'en' ? 'Available seats' : 'Verfügbare Plätze'}: 3.245
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
  <h4 className="font-bold text-gray-800 dark:text-white mb-4">{t('importantInfo')}</h4>
  <ul className="space-y-3">
    {i18n.language === 'en' 
      ? [
          "Tickets are personalized and non-transferable",
          "Admission from 2 hours before the game",
          "Free cancellation up to 24h before the game", 
          "Family discount available from 4 tickets",
          "Accessible seats available",
          "Digital ticket on your smartphone"
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 dark:text-green-400 mt-1">✓</span>
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))
      : [
          "Tickets sind personalisiert und nicht übertragbar",
          "Einlass ab 2 Stunden vor Spielbeginn", 
          "Kostenlose Stornierung bis 24h vor Spiel",
          "Familiendiscount ab 4 Tickets verfügbar",
          "Barrierefreie Plätze verfügbar",
          "Digitales Ticket auf dem Smartphone"
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 dark:text-green-400 mt-1">✓</span>
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))
    }
  </ul>
</div>

          {/* Contact Info */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">{t('contactSupport')}</h4>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
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
