const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.post('/filmes', (req, res) => {
  const { title, director, releaseYear, genre, rating, description } = req.body;

  if (!title || !director || !releaseYear || !genre || !rating || !description) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const newMovie = new Movie({
    title,
    director,
    releaseYear,
    genre,
    rating,
    description
  });

  newMovie.save()
    .then((movie) => {
      res.status(201).json({
        message: 'Filme criado com sucesso!',
        movie
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Erro ao criar o filme!',
        error: err
      });
    });
});

router.get('/filmes', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.status(200).json({
        message: 'Filmes encontrados com sucesso!',
        movies
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Erro ao buscar filmes!',
        error: err
      });
    });
});

module.exports = router;