const express = require('express')
const router = express.Router()
const CastRouter = require('./castRouter.js')
const MovieRouter = require('./movieRouter.js')
const ReviewRouter = require('./reviewRouter.js')

router.get('/', (req,res) => res.status(200).send('This is the api page'))
router.use('/casts', CastRouter)
router.use('/movies', MovieRouter)
router.use('/reviews', ReviewRouter)


module.exports = router