import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TVShows from './TVShows'
import LeaveAReview from './LeaveAReview'
import MoviePage from './MoviePage'
import PropTypes from 'prop-types'
//import ActorPage from './ActorPage'

const Main = ({ showSearch, searchText }) => {
    return (
        <div className ="routes-container">
            <Routes>
                <Route path="/" element={<Home showSearch={showSearch} searchText={searchText}/>} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/TVshows" element={<TVShows />} />
                <Route path="/leaveAReview/:id" element={<LeaveAReview />} />
                <Route path="/moviePage/:id" element={<MoviePage />} />
                <Route path="/movies/moviePage/:id" element={<MoviePage />} />
            </Routes>
        </div>
    )
}

Main.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired
}


export default Main