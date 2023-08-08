import MovieInfo from './MovieInfo'
import MovieCarousel from './MovieCarousel'


const Home = () => {
    return (
        <div className ="home">
            <MovieCarousel />
            <MovieInfo />
        </div>
    )
}

export default Home