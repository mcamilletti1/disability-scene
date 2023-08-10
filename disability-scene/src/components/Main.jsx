import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TVShows from './TVShows'
import LeaveAReview from './LeaveAReview'
import MoviePage from './MoviePage'
import PropTypes from 'prop-types'
//import ActorPage from './ActorPage'

const Main = ({ showSearch }) => {
    return (
        <div className ="routes-container">
            <Routes>
                <Route path="/" element={<Home showSearch={showSearch} />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/TVshows" element={<TVShows />} />
                <Route path="/leaveAReview/:id" element={<LeaveAReview />} />
                <Route path="/moviePage/:id" element={<MoviePage />} />
            </Routes>
        </div>
    )
}

Main.propTypes = {
    showSearch: PropTypes.bool.isRequired
}


export default Main