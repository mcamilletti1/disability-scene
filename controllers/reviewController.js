const { Review } = require('../models')

const getReviews = async (req, res)=> {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getReviewById = async (req,res) => {
    try{
    const { id } = req.params
    const review = await Review.findById(id)
    if (review) {
        res.json(review)
    } else {
    return res.status(404).send('Review with the specified ID does not exist')
    }
    }catch (e){
       return res.status(500).send(e.message)
    }
}

const getReviewsByMovie = async (req,res) => {
    try{
        const { movieId } = req.params
        const reviews = await Review.find({ movie: movieId})
        if (reviews) {
            res.json(reviews)
        } else {
            return res.status(404).send('Reviews with the specified movie ID do not exist')
        } 
        } catch (e) {
            return res.status(500).send(e.message)
        }
    }

const createReview = async (req,res) => {
    try{
        const { movie, title, reviewerName, reviewText, date, castingScore, characterScore, originalityScore, accuracyScore } = req.body
        const review = await Review.create({ movie, title, reviewerName, reviewText, date, castingScore, characterScore, originalityScore, accuracyScore })
        res.status(201).json(review)
    }catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateReview = async (req,res) => {
    try{
        let { id } = req.params
        const review = await Review.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!review) {
            return res.status(404).json({ message: 'Review not found' })
        }
        return res.status(200).json(review)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findByIdAndDelete(id)
        if (!review) {
            return res.status(404).json({ message: 'Review not found' })
        }
        return res.status(200).send("Review deleted successfully")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
    getReviewsByMovie
}