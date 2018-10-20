const router = require('express').Router()

const getAllFilms = require('../methods/getAllFilms')
const getFilmByTitle = require('../methods/getFilmsByTitle')

// api routes
router.get('/films', (req, res) => {
  getAllFilms()
    .then(films => res.status(200).json(films))
    .catch(error => res.status(500).send(error))
})

router.get('/films/:title', (req, res) => {
  const { title } = req.params

  getFilmByTitle(title)
    .then(films => res.status(200).json(films))
    .catch(error => res.status(500).send(error))
})

module.exports = router
