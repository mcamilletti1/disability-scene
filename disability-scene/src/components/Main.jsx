import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TVShows from './TVShows'
import LeaveAReview from './LeaveAReview'
import MoviePage from './MoviePage'
import Header from './Header'
import FilteredMovies from './SearchResults'
import { useState, useEffect } from 'react'
import ActorPage from './ActorPage'

const Main = () => {
    const [searchResults, setSearchResults] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => { 
        try {
            const response = await axios.get('https://disability-scene-api-production.up.railway.app/movies');
            const data = response.data;
            setMovies(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    getMovies();
}, []);

    const handleSearchSubmit = (searchText) => {
        const filtered = movies.filter((movie) => 
            movie.title.toLowerCase().includes(searchText.toLowerCase())
        )
        setSearchResults(filtered)
    }
    return (
        <div className ="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={searchResults.length > 0 ? <FilteredMovies filteredMovies={searchResults} /> : <Movies />} />
                <Route path="/TVshows" element={<TVShows />} />
                <Route path="/leaveAReview/:id" element={<LeaveAReview />} />
                <Route path="/moviePage/:id" element={<MoviePage />} />
                <Route path="/movies/moviePage/:id" element={<MoviePage />} />
                <Route path="/moviePage/:id/actorPage/:id" element={<ActorPage />} />
            </Routes>
        </div>
    )
}




export default Main