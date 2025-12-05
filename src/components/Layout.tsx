import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 dark:from-gray-900 dark:to-gray-800 text-white shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src="/images/clubs/dfb.png"
                alt="FC React United Logo"
                className="h-14 w-14 bg-slate-900 object-contain"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">FC React United</h1>
                <p className="text-blue-200 dark:text-blue-300 text-sm">
                  {t('officialClubSite')}
                </p>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              
              {/* Navigation */}
              <nav className="flex space-x-4">
                <Link 
                  to="/" 
                  className="hover:text-blue-300 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  {t('home')}
                </Link>
                <Link 
                  to="/tickets" 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
                >
                  {t('tickets')}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 FC React United. {t('allRightsReserved')}</p>
          <p className="text-gray-500 text-sm mt-2">
            Syntax Projektwoche • React + TypeScript + Tailwind CSS
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-gray-500 text-sm">
            <span>📧 info@fc-react-united.de</span>
            <span>•</span>
            <span>📞 +49 30 12345678</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
