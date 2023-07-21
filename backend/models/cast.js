const { Schema } = require('mongoose')

const castSchema = new Schema(
    {
        name: { type: String, required: true },
        credits: { type: Schema.Types.ObjectId, required: true, ref: 'movie_id' },
        title: { type: String, required: true },
        img: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = castSchema