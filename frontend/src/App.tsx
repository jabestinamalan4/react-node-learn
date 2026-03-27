import { useState } from 'react';
import TicketList from './components/TicketList';
import CreateTicket from './components/CreateTicket';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Ticket System</h1>

      <CreateTicket onCreated={() => setRefresh(!refresh)} />

      <TicketList key={refresh.toString()} />
    </div>
  );
}

export default App;