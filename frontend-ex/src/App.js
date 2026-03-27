import TicketList from './components/TicketList';
import CreateTicket from './components/CreateTicket';

function App() {
  return (
    <div>
      <h1>Ticket System</h1>
      <CreateTicket refresh={() => window.location.reload()} />
      <TicketList />
    </div>
  );
}

export default App;