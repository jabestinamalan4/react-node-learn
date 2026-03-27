const Ticket = require('../models/ticketModel');

exports.getTickets = (req, res) => {
  Ticket.getAllTickets((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createTicket = (req, res) => {
  const { title, description } = req.body;

  Ticket.createTicket({ title, description }, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Ticket created' });
  });
};