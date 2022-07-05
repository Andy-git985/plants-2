require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const connectionString = process.env.DB_URL;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');
    const db = client.db('plants');
    const plantCollection = db.collection('store');

    app.set('view engine', 'ejs');

    // Middleware
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Read all results
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });
    // app.get('/', (req, res) => {
    //   db.collection('store')
    //     .find()
    //     .toArray()
    //     .then((store) => {
    //       res.render('index.ejs', { store: store });
    //     })
    //     .catch(/* ... */);
    // });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((error) => console.error(error));
