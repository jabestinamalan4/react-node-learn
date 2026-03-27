const db = require('../config/db');

exports.getAllTickets = (callback) => {
  db.query('SELECT * FROM tickets', callback);
};

exports.createTicket = (data, callback) => {
  db.query(
    'INSERT INTO tickets (title, description) VALUES (?, ?)',
    [data.title, data.description],
    callback
  );
};