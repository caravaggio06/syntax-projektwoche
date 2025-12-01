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
    <div className="section">
      <h2 className="section-title">Buy Tickets</h2>

      <form className="ticket-card" onSubmit={handleSubmit}>
        <div className="ticket-row">
          <span className="ticket-label">Number of Tickets</span>
          <div className="ticket-number-control">
            <button
              type="button"
              className="ticket-button"
              onClick={() => update(quantity - 1)}
            >
              −
            </button>
            <input
              className="ticket-input"
              type="number"
              min={1}
              max={20}
              value={quantity}
              onChange={(e) => update(Number(e.target.value))}
            />
            <button
              type="button"
              className="ticket-button"
              onClick={() => update(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="ticket-row">
          <span className="ticket-label">Price per Ticket</span>
          <span className="ticket-total">${TICKET_PRICE.toFixed(2)}</span>
        </div>

        <div className="ticket-row">
          <span className="ticket-label">Total</span>
          <span className="ticket-total">${total.toFixed(2)}</span>
        </div>

        <button type="submit" className="ticket-cta">
          Purchase
        </button>

        <div className="ticket-hint">
          Max. 20 tickets per order. Demo only – no real payment.
        </div>

        {confirmed && (
          <p className="muted" style={{ marginTop: 10 }}>
            Order confirmed for {quantity} ticket(s). Enjoy the match!
          </p>
        )}
      </form>
    </div>
  );
}
