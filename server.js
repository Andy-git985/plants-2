require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const connectionString = process.env.DB_URL;

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
