import Actors from './Actors'
import MovieInfo from './MovieInfo'
import Reviews from './Reviews'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const MoviePage = () => {
    const [movie, setMovie] = useState('')
    let { id } = useParams()
    

    return (
        <div className="movie-page">
            <MovieInfo />
            <Actors />
            <Reviews />
        </div>
    )
}

export default MoviePage