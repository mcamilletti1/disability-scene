import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TVShows from './TVShows'
import LeaveAReview from './LeaveAReview'
//import MoviePage from './MoviePage'
//import LeaveAReview from './LeaveAReview'
//import ActorPage from './ActorPage'

const Main = () => {
    return (
        <div className ="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/TVshows" element={<TVShows />} />
                <Route path="/leaveAReview/:id" element={<LeaveAReview />} />
            </Routes>
        </div>
    )
}

export default Main