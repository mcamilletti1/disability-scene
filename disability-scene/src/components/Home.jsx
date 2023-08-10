import MovieCarousel from './MovieCarousel'
import FeaturedMovie from './FeaturedMovie'
import Search from './Search'
import PropTypes from 'prop-types'

Home.propTypes = {
    showSearch: PropTypes.bool.isRequired
}


const Home = ({ showSearch }) => {

    return (
        <div className ="home">
            {showSearch ? <Search /> : <MovieCarousel />}
            <FeaturedMovie />
        </div>
    )
}

export default Home