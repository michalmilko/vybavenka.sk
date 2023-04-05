const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql80.r4.websupport.sk',
  user: 'michalmilko',
  password: 'Alfa01090809',
  database: 'bookinzer'
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