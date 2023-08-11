import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

   
    
    return ( 
        <div className="movies-grid">
            <h2>MOVIES</h2>  
            <div className="grid">
                {
                   movies.map((movie) => (
                    <div key={movie.id} className="movieList">
                        <Link to={`/moviePage/${movie.id}}`}><img className="individualImage" aria-hidden="true" width="203px" height="258px" src={movie.img}></img></Link>
                        <p className="individualTitle">{movie.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
}

export default Movies