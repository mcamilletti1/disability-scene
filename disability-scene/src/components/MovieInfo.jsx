import { useState, useEffect } from 'react'
import axios from 'axios'
import RatingComponent from './RatingComponent'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const MovieInfo = () => {
    const [movie, setMovie] = useState('')
    const [reviews, setReviews] = useState([])
    const [roundedSceneScore, setRoundedSceneScore] = useState(0);
    const [featuredCastingScore, setFeaturedCastingScore] = useState(0);
    const [featuredCharacterScore, setFeaturedCharacterScore] = useState(0);
    const [featuredOriginalityScore, setFeaturedOriginalityScore] = useState(0);
    const [featuredAccuracyScore, setFeaturedAccuracyScore] = useState(0);
    let { id } = useParams()


    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`https://mcamilletti1.pythonanywhere.com/api/movie/${id}/`);
                const featuredMovie = response.data;
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
                const response = await axios.get(`https://mcamilletti1.pythonanywhere.com/api/movie/${id}/reviews/`);
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

    



    if (movie.length === 0 || reviews.length === 0) {
        return (
            <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
        )
    } else if (movie.media_type === "Movie") {

    return (
        <section className="movieInfo">
            <section id="main">
                <section id="column1">
                    <img id="featuredMoviePoster" src={movie.img} width="203px" height="300px" alt="Movie Poster"/>
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
                                <img src="/assets/movieaction.png" width="40px" height="28px" aria-hidden="true"></img>
                                <p id="scoreTitle">Scene Score:</p>
                            </section>
                            <br></br>
                            <p id="scorePercent">{roundedSceneScore}%</p>
                            <p id="numReviews">(Based on {reviewsLength} {reviewsLength === 1 ? 'review' : 'reviews'})</p>
                        </section>
                        <section className="starInfo">
                            <section className="star-line">
                                <p className="star-title">Casting: </p>
                                <RatingComponent className="stars" score={featuredCastingScore}/>
                                <span className="visually-hidden">{featuredCastingScore} stars</span>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Characters: </p>
                                <RatingComponent className="stars" score={featuredCharacterScore}/>
                                <span className="visually-hidden">{featuredCharacterScore} stars</span>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Originality: </p>
                                <RatingComponent className="stars" score={featuredOriginalityScore}/>
                                <span className="visually-hidden">{featuredOriginalityScore} stars</span>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Accuracy: </p>
                                <RatingComponent className="stars" score={featuredAccuracyScore}/>
                                <span className="visually-hidden">{featuredAccuracyScore} stars</span>
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
                <Link to={`/leaveAReview/${id}`}><button key={id} id="reviewButton" width="216px" height="40px" aria-label="Submit a review">SUBMIT A REVIEW</button></Link>
            </aside>
        </section>
    )
    } else {
        return (
            <section className="movieInfo">
            <section id="main">
                <section id="column1">
                    <img id="featuredMoviePoster" src={movie.img} width="203px" height="300px" alt="TV Show Poster"/>
                </section> 
                <section id="column2">
                    <section>
                        <h4 id="movieTitle">{movie.title} ({movie.year})</h4> 
                        <p id="dateGenreDuration">{movie.year} | {movie.genre} | {movie.duration} seasons</p>
                        <p id="movieDescription">{movie.description}</p>
                    </section>
                    <section id="scoreStars" height="100px">
                        <section className="scoreInfo">
                            <section id="sceneScore">
                                <img src="/assets/movieaction.png" width="40px" height="28px" aria-hidden="true"></img>
                                <p id="scoreTitle">Scene Score:</p>
                            </section>
                            <br></br>
                            <p id="scorePercent">{roundedSceneScore}%</p>
                            <p id="numReviews">(Based on {reviewsLength} {reviewsLength === 1 ? 'review' : 'reviews'})</p>
                        </section>
                        <section className="starInfo">
                            <section className="star-line">
                                <p className="star-title">Casting: </p>
                                <RatingComponent className="stars" score={featuredCastingScore}/>
                                <span className="visually-hidden">{featuredCastingScore} stars</span>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Characters: </p>
                                <RatingComponent className="stars" score={featuredCharacterScore}/>
                                <span className="visually-hidden">{featuredCharacterScore} stars</span>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Originality: </p>
                                <RatingComponent className="stars" score={featuredOriginalityScore}/>
                                <span className="visually-hidden">{featuredOriginalityScore} stars</span>
                            </section>
                            <section className="star-line">
                                <p className="star-title">Accuracy: </p>
                                <RatingComponent className="stars" score={featuredAccuracyScore}/>
                                <span className="visually-hidden">{featuredAccuracyScore} stars</span>
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
                <Link to={`/leaveAReview/${id}`}><button key={id} id="reviewButton" width="216px" height="40px" aria-label="Submit a review">SUBMIT A REVIEW</button></Link>
            </aside>
        </section>
        )
    }
}

export default MovieInfo