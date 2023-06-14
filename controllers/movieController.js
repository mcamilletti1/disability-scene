const { Movie } = require('../models')

const getMovies = async (req, res) => {
    try{
        const movies = await Movie.find({})
        res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getMovieById = async (req, res) => {
    try{
        const { id } = req.params
        const movie = await Movie.findById(id)
        if (movie) {
            res.json(movie)
        } else {
        return res.status(404).send('Movie with the specified ID does not exist')
        }
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const getMovieByTitle = async (req,res) => {
    try{
        const { titleName } = req.params
        const movie = await Movie.find({ title: titleName })
        if (movie) {
            res.json(movie)
        } else {
            return res.status(404).send('Movie with the specified title does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createMovie = async (req,res) => {
    try{
        const { title, mediaType, year, genre, duration, actors, characters, disabilities, themes, img } = req.body
        const movie = await Movie.create({ title, mediaType, year, genre, duration, actors, characters, disabilities, themes, img})
        res.status(201).json(movie)
    }catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateMovie = async (req,res) => {
    try{
        let { id } = req.params
        let movie = await Movie.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' })
        }
        return res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findByIdAndDelete(id)
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' })
        }
        return res.status(200).send("Movie deleted successfully")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    getMovieByTitle
}