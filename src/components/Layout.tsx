import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-dark text-light min-h-screen">
      <header className="p-4 bg-primary text-center">
        <h1 className="text-3xl font-bold">FC React United</h1>
        <nav className="mt-2">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/tickets" className="mx-2">Tickets</Link>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;