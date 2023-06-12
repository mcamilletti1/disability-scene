const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/disabilitySeenDatabase')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection errror', e.message)
    })

const db = mongoose.connection

module.exports = db