const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alfa01090809',
  database: 'knihovna'
});

connection.connect((err) => {
  if (err) {
    console.error('Chyba pri pripájaní k databáze: ', err);
  } else {
    console.log('Pripojenie k databáze bolo úspešné!');
  }
});

function getConnection() {
  
  return connection;
}

module.exports = { getConnection };