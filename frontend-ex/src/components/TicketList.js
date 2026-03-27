import { useEffect, useState } from 'react';
import API from '../api';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const res = await API.get('/tickets');
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      {tickets.map(ticket => (
        <div key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <small>{ticket.status}</small>
        </div>
      ))}
    </div>
  );
}