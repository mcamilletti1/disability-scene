import Actors from './Actors'
import MovieInfo from './MovieInfo'
import Reviews from './Reviews'



const MoviePage = () => {
    

    return (
        <div className="movie-page">
            <MovieInfo />
            <Actors />
            <Reviews />
        </div>
    )
}

export default MoviePage