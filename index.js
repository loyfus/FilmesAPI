require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const filmeRoutes = require('./routes/movie');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/', filmeRoutes); 

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
