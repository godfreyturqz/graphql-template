const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    authorId: String,
    title: String,
    genre: String
})

module.exports = mongoose.model('book', bookSchema)
