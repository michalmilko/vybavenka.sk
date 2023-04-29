const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'vybavenk_vybavenka',
  password: 'WrZ2BA7HTw5*',
  database: 'vybavenk_book'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL database connected!');
});
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


const upload = multer({ storage: storage });

const router = express.Router();

router.post('/users', upload.single('Image'), (req, res) => {

  const {MenoPriezvisko, Nazov, Kategoria, Kvalita, Popis, Email, deletePassword} = req.body;
  const filename = path.basename(req.file.filename);

  const sql = 'INSERT INTO bookusers (MenoPriezvisko, Nazov, Image, Kategoria, Kvalita, Popis, Email, deletePassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
   const values = [MenoPriezvisko, Nazov, filename, Kategoria, Kvalita, Popis, Email, deletePassword];

  
  connection.query(sql, values, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send('User added to database!');
  });
});

router.get('/users', (req, res) => {
  connection.query('SELECT * FROM bookusers', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.use('/api', router);

app.listen(port, () => {
  console.log('Server bude spustený na porte ' + port);
});