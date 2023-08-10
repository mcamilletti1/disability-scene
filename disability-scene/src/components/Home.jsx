import MovieInfo from './MovieInfo'
import MovieCarousel from './MovieCarousel'
import FeaturedMovie from './FeaturedMovie'


const Home = () => {
    return (
        <div className ="home">
            <MovieCarousel />
            <FeaturedMovie />
        </div>
    )
}

export default Home