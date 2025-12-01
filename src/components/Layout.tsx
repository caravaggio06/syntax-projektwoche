import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <div className="app-card">
        <header className="app-header">
          <div className="app-subtitle">Official Site of the Professional Sports Club</div>
          <h1 className="app-title">FC React United</h1>

          <nav className="app-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "app-nav-link" + (isActive ? " app-nav-link--active" : "")
              }
              end
            >
              Home
            </NavLink>
            <button className="app-nav-link" type="button">
              Matches
            </button>
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                "app-nav-link" + (isActive ? " app-nav-link--active" : "")
              }
            >
              Tickets
            </NavLink>
            <NavLink
              to="/tickets"
              className="app-nav-link app-nav-link--active"
            >
              Buy Tickets
            </NavLink>
          </nav>
        </header>

        {children}
      </div>
    </div>
  );
}
