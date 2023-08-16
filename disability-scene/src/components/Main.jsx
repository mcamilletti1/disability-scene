import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TVShows from './TVShows'
import LeaveAReview from './LeaveAReview'
import MoviePage from './MoviePage'
import ActorPage from './ActorPage'
import FilteredMovies from './SearchResults'
import PropTypes from 'prop-types'

const Main = ({ filteredMovies }) => {

    return (
        <div className ="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={filteredMovies.length > 0 ? (
                <FilteredMovies filteredMovies={filteredMovies} /> ) : ( <Movies /> )} />
                <Route path="/TVshows" element={<TVShows />} />
                <Route path="/leaveAReview/:id" element={<LeaveAReview />} />
                <Route path="/moviePage/:id" element={<MoviePage />} />
                <Route path="/movies/moviePage/:id" element={<MoviePage />} />
                <Route path="/moviePage/:id/actorPage/:id" element={<ActorPage />} />
                <Route path="/movies/moviePage/:id/actorPage/:id" element={<ActorPage />} />
            </Routes>
        </div>
    )
}


Main.propTypes = {
    filteredMovies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Main