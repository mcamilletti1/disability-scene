import MovieCarousel from './MovieCarousel'
import FeaturedMovie from './FeaturedMovie'
import Search from './Search'



const Home = ({ showSearch }) => {

    return (
        <div className ="home">
            {showSearch ? <Search /> : <MovieCarousel />}
            <FeaturedMovie />
        </div>
    )
}

export default Home