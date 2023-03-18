const express = require('express');
const cors = require('cors');
const { getConnection } = require('./db');
const multer = require('multer');
const path = require('path');



const app = express();
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors());
app.use(express.json());

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images');
    
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Your existing routes
app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM bookusers';
  const connection = getConnection();
  connection.query(sql, (error, results) => {
      if (error) throw error;
      res.send(results);
  });
});

app.post('/data', upload.single('Image'), (req, res) => {
  const { Nazov, Kategoria, Kvalita, Cena } = req.body;

  const sql = 'INSERT INTO bookusers (id, MenoPriezvisko, Nazov, Image, Kategoria, Kvalita, Popis) VALUES (NULL,"Zuzka", ?, ?, ?, ?, ?)';
  const values = [Nazov, req.file.filename, Kategoria, Kvalita, Cena];
  
  const connection = getConnection();
  connection.query(sql, values, (error, result) => {
    if (error) throw error;
    console.log('Data inserted successfully');
    res.send('Data inserted successfully');
  });
});

app.listen(3005, () => {
  console.log('Server bude spustený na porte 3005!');
});