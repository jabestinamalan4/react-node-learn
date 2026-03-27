import { useEffect, useState } from 'react';
import API from '../api';
import type { Ticket } from '../types';

const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const fetchTickets = async () => {
    const res = await API.get<Ticket[]>('/tickets');
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <small>{ticket.status}</small>
        </div>
      ))}
    </div>
  );
};

export default TicketList;