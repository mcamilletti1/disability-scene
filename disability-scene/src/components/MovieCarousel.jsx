import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const MovieCarousel = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://mcamilletti1.pythonanywhere.com/api/movie/`);
                const data = response.data;
                setMovies(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMovies();
    }, [movies])

    let navigate = useNavigate()


    const showMovie = (id) => {
        navigate(`moviePage/${id}`)
    }

    if (movies.length === 0) {
        return (
            <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
        )
    } else {

    return ( 
        <div className="movie-carousel">
            <h2>MOVIES</h2>  
            <div className="carousel">
                {
                   movies.map((movie) => (
                    <div key={movie.id} className="movieList" onClick={() => showMovie(movie.id)} role="button" tabIndex="0">
                        <img className="individualImage" aria-hidden="true" width="203px" height="258px" src={movie.img}></img>
                        <p className="individualTitle">{movie.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
    }
}

export default MovieCarousel