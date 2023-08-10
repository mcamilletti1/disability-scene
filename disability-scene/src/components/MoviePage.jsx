import Actors from './Actors'
import MovieInfo from './MovieInfo'
import Reviews from './Reviews'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const MoviePage = () => {
    const [movie, setMovie] = useState('')
    let { id } = useParams()
    
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies`);
                const data = response.data;
                const moviesLength = data.length;
                const response2 = await axios.get(`https://disability-scene-api-production.up.railway.app/movies/${moviesLength}`);
                const featuredMovie = response2.data;
                setMovie(featuredMovie);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        }
        getMovie();
    }, [movie, id])

    return (
        <div className="movie-page">
            <MovieInfo />
            <Actors />
            <Reviews />
        </div>
    )
}

export default MoviePage