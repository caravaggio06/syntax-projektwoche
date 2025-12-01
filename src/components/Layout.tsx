import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Club Name */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl text-blue-900">⚽</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">FC React United</h1>
                <p className="text-blue-200 text-sm">Offizielle Vereinsseite • Bundesliga 2024</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="hover:text-blue-300 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                Home
              </Link>
              <Link 
                to="/tickets" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
              >
                Tickets kaufen
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2024 FC React United. Alle Rechte vorbehalten.</p>
            <p className="text-gray-500 text-sm mt-2">Syntax Projektwoche • React + TypeScript + Tailwind CSS</p>
            <div className="mt-4 flex justify-center space-x-4 text-gray-500">
              <span>📧 info@fc-react-united.de</span>
              <span>•</span>
              <span>📞 +49 123 456789</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
