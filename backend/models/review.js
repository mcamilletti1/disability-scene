const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        movie: { type: Schema.Types.ObjectId, ref: 'movie_id' },
        title: { type: String, required: true },
        reviewerName: { type: String, required: true },
        reviewText: { type: String, required: true },
        date: { type: String, required: true },
        castingScore: { type: Number, required: true },
        characterScore: { type: Number, required: true },
        originalityScore: { type: Number, required: true },
        accuracyScore: { type: Number, required: true }
    },
    {timestamps: true }
)

module.exports = reviewSchema