const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'amalan',
  password: 'Jabi@12i',
  database: 'shuru_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

module.exports = db;