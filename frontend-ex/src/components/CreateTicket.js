import { useState } from 'react';
import API from '../api';

export default function CreateTicket({ refresh }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post('/tickets', { title, description });

    setTitle('');
    setDescription('');
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
}