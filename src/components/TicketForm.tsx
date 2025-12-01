import React, { useState } from 'react';

const TicketForm: React.FC = () => {
  const [ticketCount, setTicketCount] = useState<number>(1);
  const ticketPrice = 19.5;
  const totalPrice = ticketCount * ticketPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Danke, deine Bestellung ist eingegangen. Gesamtpreis: ${totalPrice.toFixed(2)} €`);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-xl font-bold mb-2">Ticketkauf</h2>
      <div className="mb-2">
        <label htmlFor="ticketCount" className="block">Anzahl Tickets:</label>
        <input
          type="number"
          id="ticketCount"
          min="1"
          max="20"
          value={ticketCount}
          onChange={(e) => setTicketCount(Math.max(1, Math.min(20, Number(e.target.value))))}
          className="border p-1"
        />
      </div>
      <div className="mb-2">
        <span>Gesamtpreis: {totalPrice.toFixed(2)} €</span>
      </div>
      <button type="submit" className="btn-primary">Bestellung abschicken</button>
    </form>
  );
};

export default TicketForm;