const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        mediaType: {type: String, required: true },
        year: { type: Number, required: true },
        genre: { type: Array, required: true },
        duration: { type: Number, required: true },
        actors: { type: Array, required: true },
        characters: { type: Array, required: true },
        disabilities: { type: Array, required: true },
        themes: { type: Array, required: true },
        img: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = movieSchema