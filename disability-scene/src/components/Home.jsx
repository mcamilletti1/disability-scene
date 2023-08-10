import MovieCarousel from './MovieCarousel'
import FeaturedMovie from './FeaturedMovie'
import Search from './Search'
import PropTypes from 'prop-types'



const Home = ({ showSearch }) => {
    console.log('showSearch:', showSearch)

    return (
        <div className ="home">
            {showSearch ? <Search /> : <MovieCarousel />}
            <FeaturedMovie />
        </div>
    )
}

Home.propTypes = {
    showSearch: PropTypes.bool.isRequired
}

export default Home