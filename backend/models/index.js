const mongoose = require('mongoose')
const castSchema = require('./cast')
const movieSchema = require('./movie')
const reviewSchema = require('./review')

const Cast = mongoose.model('Cast', castSchema)
const Movie = mongoose.model('Movie', movieSchema)
const Review = mongoose.model('Review', reviewSchema)


module.exports = {
    Cast,
    Movie,
    Review
}