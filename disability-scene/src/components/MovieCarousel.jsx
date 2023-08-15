import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const MovieCarousel = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies`);
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
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"/>
    } else {
    
    return ( 
        <div className="movie-carousel">
            <h2>MOVIES</h2>  
            <div className="carousel">
                {
                   movies.map((movie, id) => (
                    <div key={movie.id} className="movieList" onClick={() => showMovie(movie.id)}>
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