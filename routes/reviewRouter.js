const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController.js')

router.get('/', controller.getReviews)
router.get('/:id', controller.getReviewById)
router.get('/movieId/:movieId', controller.getReviewsByMovie)

router.post('/', controller.createReview)

router.put('/:id', controller.updateReview)

router.delete('/:id', controller.deleteReview)

module.exports = router