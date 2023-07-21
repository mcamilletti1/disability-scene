const express= require('express')
const router = express.Router()
const controller = require('../controllers/movieController.js')

router.get('/', controller.getMovies)

router.get('/:id', controller.getMovieById)

router.get('/title/:titleName', controller.getMovieByTitle)

router.post('/', controller.createMovie)

router.put('/:id', controller.updateMovie)

router.delete('/:id', controller.deleteMovie)

module.exports = router