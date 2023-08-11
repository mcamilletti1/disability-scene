import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Movies = () => {
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
    
    return ( 
        <div className="movies-grid">
            <h2>MOVIES</h2>  
            <div className="grid">
                {
                   movies.map((movie) => (
                    <div key={movie.id} className="movieList">
                        <img className="individualImage" aria-hidden="true" width="203px" height="258px" onClick={() => showMovie(movie.id)} src={movie.img}></img>
                        <p className="individualTitle">{movie.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
}

export default Movies