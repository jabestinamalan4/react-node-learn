import { useState } from 'react';
import API from '../api';

interface Props {
  onCreated: () => void;
}

const CreateTicket: React.FC<Props> = ({ onCreated }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await API.post('/tickets', { title, description });

    setTitle('');
    setDescription('');
    onCreated();
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
};

export default CreateTicket;