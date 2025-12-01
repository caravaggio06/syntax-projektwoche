import { LastResults } from "../components/LastResults";
import { NextMatch } from "../components/NextMatch";
import { LeagueTable } from "../components/LeagueTable";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="section">
      <section className="section">
        <h2 className="section-title">Latest Results</h2>
        <div className="results-grid">
          <LastResults />
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="section">
          <div className="card card--highlight">
            <div className="card-header card-header--bright">Next Match</div>
            <NextMatch />
          </div>

          <div className="ticket-card">
            <div className="card-header">Buy Tickets</div>
            <p className="muted" style={{ marginBottom: 10 }}>
              Secure your seat for the next home game of Alianza Lima United.
            </p>
            <Link to="/tickets">
              <button className="ticket-cta">Go to Ticket Page</button>
            </Link>
            <div className="ticket-hint">
              Select the exact number of tickets and see the total price on the ticket page.
            </div>
          </div>
        </div>

        <div className="section">
          <div className="table-wrapper">
            <div className="card-header">League Table</div>
            <LeagueTable />
          </div>

          <div className="mobile-promo">
            <div>
              <div className="mobile-promo-tag">Fan Experience</div>
              <div className="mobile-promo-title">Fast &amp; Smart</div>
              <div className="mobile-promo-subtitle">
                All matches, results and tickets – always one tap away.
              </div>
            </div>
            <div className="mobile-promo-badge">Prototype · Alianza Lima United App</div>
          </div>
        </div>
      </section>
    </div>
  );
}
