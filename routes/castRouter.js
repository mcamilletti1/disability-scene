const express = require('express')
const router = express.Router()
const controller = require('../controllers/castController.js')

router.get('/', controller.getCasts)

router.get('/:id', controller.getCastById)

router.get('/movieId/:movieId', controller.getCastByMovie)

router.post('/', controller.createCast)

router.put('/:id', controller.updateCast)

router.delete('/:id', controller.deleteCast)

module.exports = router