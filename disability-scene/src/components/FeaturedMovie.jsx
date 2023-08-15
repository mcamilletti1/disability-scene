import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import RatingComponent from './RatingComponent'
import { Link } from 'react-router-dom'

const FeaturedMovie = () => {
    const [movie, setMovie] = useState('')
    const [reviews, setReviews] = useState([])
    const [roundedSceneScore, setRoundedSceneScore] = useState(0);
    const [featuredCastingScore, setFeaturedCastingScore] = useState(0);
    const [featuredCharacterScore, setFeaturedCharacterScore] = useState(0);
    const [featuredOriginalityScore, setFeaturedOriginalityScore] = useState(0);
    const [featuredAccuracyScore, setFeaturedAccuracyScore] = useState(0);


    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies`);
                const data = response.data;
                const moviesLength = data.length;
                const response2 = await axios.get(`https://disability-scene-api-production.up.railway.app/movies/${moviesLength}`);
                const featuredMovie = response2.data;
                setMovie(featuredMovie);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        }
        getMovie();
    }, [])

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies/${movie.id}/reviews`);
                const data = response.data;
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }
        getReviews();
    }, [movie])


    useEffect(() => {
        let CastingScore = 0
        let CharacterScore = 0
        let OriginalityScore = 0
        let AccuracyScore = 0
        for (let i=0; i < reviews.length; i++)  {
            CastingScore += reviews[i].casting_score
            CharacterScore += reviews[i].character_score
            OriginalityScore += reviews[i].originality_score
            AccuracyScore += reviews[i].accuracy_score
        }

        CastingScore /= reviews.length
        CharacterScore /= reviews.length
        OriginalityScore /= reviews.length
        AccuracyScore /= reviews.length
        let featuredSceneScore = (CastingScore + CharacterScore + OriginalityScore + AccuracyScore)/4
        featuredSceneScore *= 20
        const roundedScore = Math.round(featuredSceneScore)
        setRoundedSceneScore(roundedScore)
        setFeaturedCastingScore(CastingScore)
        setFeaturedCharacterScore(CharacterScore)
        setFeaturedOriginalityScore(OriginalityScore)
        setFeaturedAccuracyScore(AccuracyScore)
    }, [reviews]);

    const reviewsLength = reviews.length

    const id = movie.id
    

    let navigate = useNavigate()


    const showReviewPage = (id) => {
        navigate(`leaveAReview/${id}`)
    }

    if (movie.length === 0) {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"/>
    } else {
    return (
        <section className="movieInfo">
            <section id="main">
                <section id="column1">
                    <h3>Featured Movie: </h3>
                    <img id="featuredPoster" src={movie.img} width="203px" height="300px" alt="Movie Poster"/>
                </section> 
                <section id="column2">
                    <section>
                        <h4 id="movieTitle">{movie.title} ({movie.year})</h4> 
                        <p id="dateGenreDuration">{movie.year} | {movie.genre} | {movie.duration} mins</p>
                        <p id="movieDescription">{movie.description}</p>
                    </section>
                    <section id="scoreStars" height="100px">
                        <section className="scoreInfo">
                            <section id="sceneScore">
                                <img src="src/assets/movieaction.png" width="40px" height="28px" aria-hidden="true"></img>
                                <p id="scoreTitle">Scene Score:</p>
                            </section>
                            <br></br>
                            <p id="scorePercent">{roundedSceneScore}%</p>
                            <p id="numReviews">(Based on {reviewsLength} reviews)</p>
                        </section>
                        <section className="starInfo">
                            <section className="star-line">
                                <p className="star-title">Authentic Casting: </p>
                                <RatingComponent className="stars" alt={featuredCastingScore} score={featuredCastingScore}/>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Representative Characters: </p>
                                <RatingComponent className="stars" alt={featuredCharacterScore} score={featuredCharacterScore}/>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Originality: </p>
                                <RatingComponent className="stars" score={featuredOriginalityScore}/>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Accuracy: </p>
                                <RatingComponent className="stars" score={featuredAccuracyScore}/>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <aside className="tags">
                <h4 id="tagsHeader"><strong>Tags</strong></h4>
                <p className="tagsSubheader"><strong>Disabilities</strong></p>
                <p id="disabilities">{movie.disabilities}</p>
                <p className="tagsSubheader"><strong>Themes</strong></p>
                <p>{movie.themes}</p>
                <p className="tagsSubheader"><strong>Genre</strong></p>
                <p id="genre">{movie.genre}</p>
                <button key={id} onClick={()=>showReviewPage(id)} id="reviewButton" width="216px" height="40px" aria-label="Submit a review">SUBMIT A REVIEW</button>
            </aside>
        </section>
    )
    }
}

export default FeaturedMovie