import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TVShows from './TVShows'
import LeaveAReview from './LeaveAReview'
import MoviePage from './MoviePage'
import ActorPage from './ActorPage'

const Main = () => {

    return (
        <div className ="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
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




export default Main