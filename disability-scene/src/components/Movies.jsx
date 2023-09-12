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

    const handleKeyPress = (e, id) => {
        if (e.key === "Enter") {
            showMovie(id);
        }
    }

    if (movies.length === 0) {
        return (
            <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
        )
    } else {
    
    return ( 
        <div className="movies-grid">
            <h2>MOVIES</h2>  
            <div className="grid">
                {
                   movies.map((movie) => (
                    <div key={movie.id} className="movieList">
                        <img className="individualImage" aria-hidden="true" width="203px" height="258px" onClick={() => showMovie(movie.id)} src={movie.img} tabIndex="0" role="button" onKeyPress={(e) => handleKeyPress(e, movie.id)}></img>
                        <p className="individualTitle">{movie.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
} 
}

export default Movies