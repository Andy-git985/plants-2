// https://plants-2.herokuapp.com/

const data = [
  {
    name: 'Agalaonema',
    price: 120,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    quantity: 10,
    img: '/images/image1.jpg',
    'alt text': 'Hands holding an aglaonema in a grey pot',
  },
  {
    name: 'Rattlesnake plant',
    price: 200,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    quantity: 10,
    img: '/images/image2.jpg',
    'alt text': 'Hand holding rattlesnake plant in a white pot',
  },
  {
    name: 'Monstera plant',
    price: 300,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    quantity: 10,
    img: '/images/image3.jpg',
    'alt text': 'Two hands holding up a monstera plant in a grey pot',
  },
  {
    name: 'Alovcasia Stringray',

    price: 130,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    quantity: 10,
    img: '/images/image4.jpg',
    'alt text':
      'Two sets of hands holding a Alocasia Stringray plant in a white pot',
  },
  {
    name: 'Prayer plant',
    price: 110,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    quantity: 10,
    img: '/images/image5.jpg',
    'alt text':
      'Hand holding three prayer plant cuttings inside glass containers set on a wood base',
  },
  {
    name: 'Pink Aglaonema',
    price: 90,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    quantity: 10,
    img: '/images/image6.jpg',
    'alt text': 'Hand holding up a pink Aglaonema plant in a pink pot',
  },
];

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

    // app.set('view engine', 'ejs');

    // Middleware
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Read all results
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

    app.post('/upload', (req, res) => {
      employeesCollection
        .insertMany(data)
        .then((result) => {
          res.json('Success');
          // res.render('index.ejs', { employees: results });
        })
        .catch((error) => console.error(error));
    });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((error) => console.error(error));
