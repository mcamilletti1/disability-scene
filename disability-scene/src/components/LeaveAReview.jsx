import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { csrfToken } from './helpers';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}




const LeaveAReview = () => {
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewerNameFL, setReviewerNameFL] = useState('');
    const [reviewTextbox, setReviewTextbox] = useState('');
    const [movie, setMovie] = useState('');
    const [dateInput, setDateInput] = useState('');
    let { id } = useParams()
    let movieId = parseInt(id)

    const loadReviewPage = async () => {
        try {
            const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies/${id}`);
            const currentMovie = response.data
            setMovie(currentMovie);
            document.title = `Leave a Review for "${currentMovie.title}"`;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadReviewPage();
    }, []);

    console.log(movie)

    const createReview = async (e) => {
        e.preventDefault();

        const castingRating = document.querySelector('input[name="castingRating"]:checked').value;
        const characterRating = document.querySelector('input[name="characterRating"]:checked').value;
        const originalityRating = document.querySelector('input[name="originalityRating"]:checked').value;
        const accuracyRating = document.querySelector('input[name="accuracyRating"]:checked').value;

        const reviewData = {
            "id": getRandomInt(20, 20000),
            "movie": movieId,
            "title": reviewTitle,
            "reviewer_name": reviewerNameFL,
            "review_text": reviewTextbox,
            "date": dateInput,
            "casting_score": castingRating,
            "character_score": characterRating,
            "originality_score": originalityRating,
            "accuracy_score": accuracyRating
        };

        const headers = {
            'X-CSRFToken': csrfToken(), // Include the CSRF token in the headers
            'Content-Type': 'application/json', // Set the content type
        };


        try {
            const apiKey = "00d6bfc6-0b12-4488-a538-55158145af6f"
            const response = await axios.post(`https://disability-scene-api-production.up.railway.app/reviews?api_key=${apiKey}`, reviewData, { headers });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (movie.length === 0) {
        return (
            <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
        )
    } else {

    return (
        <form className="myForm" onSubmit={createReview}>
            <h1>Leave a Review for {movie.title} </h1>
            <p>
                <label>Reviewer First and Last Name
                    <input id="reviewerNameFL" type="text" name="reviewer_name" onChange={(e)=>setReviewerNameFL(e.target.value)} required=""/>
                </label> 
            </p>
  
            <p>
                <label>Date (ex. 15 July 2023) 
                    <input id="date" type="text" name="date" onChange={(e)=>setDateInput(e.target.value)}/>
                </label>
            </p>
  
            <p>On a scale from 1 to 5, please rate this movie based on its disability representation. For Authentic Casting, was the movie cast with disabled actors playing disabled characters? For Representative Characters, did the characters in this movie seem to represent the thoughts and feelings of real people with disabilities or were they mostly stereotypes/caricatures? For Originality, did the movie attempt to subvert common disability tropes and present a new idea, or did it rely on ableist tropes/stereotypes? For Accuracy, did this film accuractely represent the specific disability depicted in the film?</p>
  
   
        <div className="castingRating">
            <p className="ratingLabel">Authentic Casting: </p>
            <input id="rating1" type="radio" name="castingRating" value="1"/>
            <label htmlFor="rating1">1</label>
            <input id="rating2" type="radio" name="castingRating" value="2"/>
            <label htmlFor="rating2">2</label>
            <input id="rating3" type="radio" name="castingRating" value="3"/>
            <label htmlFor="rating3">3</label>
            <input id="rating4" type="radio" name="castingRating" value="4"/>
            <label htmlFor="rating4">4</label>
            <input id="rating5" type="radio" name="castingRating" value="5"/>
            <label htmlFor="rating5">5</label>
        </div>

 
        <div className="characterRating">
            <p className="ratingLabel">Representative Characters: </p>
            <input id="characterRating1" type="radio" name="characterRating" value="1"/>
            <label htmlFor="characterRating1">1</label>
            <input id="characterRating2" type="radio" name="characterRating" value="2"/>
            <label htmlFor="characterRating2">2</label>
            <input id="characterRating3" type="radio" name="characterRating" value="3"/>
            <label htmlFor="characterRating3">3</label>
            <input id="characterRating4" type="radio" name="characterRating" value="4"/>
            <label htmlFor="characterRating4">4</label>
            <input id="characterRating5" type="radio" name="characterRating" value="5"/>
            <label htmlFor="characterRating5">5</label>
        </div>


        <div className="originalityRating">
            <p className="ratingLabel">Originality: </p>
            <input id="originalityRating1" type="radio" name="originalityRating" value="1"/>
            <label htmlFor="originalityRating1">1</label>
            <input id="originalityRating2" type="radio" name="originalityRating" value="2"/>
            <label htmlFor="originalityRating2">2</label>
            <input id="originalityRating3" type="radio" name="originalityRating" value="3"/>
            <label htmlFor="originalityRating3">3</label>
            <input id="originalityRating4" type="radio" name="originalityRating" value="4"/>
            <label htmlFor="originalityRating4">4</label>
            <input id="originalityRating5" type="radio" name="originalityRating" value="5"/>
            <label htmlFor="originalityRating5">5</label>
        </div>


  
        <div className="accuracyRating">
            <p className="ratingLabel">Accuracy: </p>
            <input id="accuracyRating1" type="radio" name="accuracyRating" value="1"/>
            <label htmlFor="accuracyRating1">1</label>
            <input id="accuracyRating2" type="radio" name="accuracyRating" value="2"/>
            <label htmlFor="accuracyRating2">2</label>
            <input id="accuracyRating3" type="radio" name="accuracyRating" value="3"/>
            <label htmlFor="accuracyRating3">3</label>
            <input id="accuracyRating4" type="radio" name="accuracyRating" value="4"/>
            <label htmlFor="accuracyRating4">4</label>
            <input id="accuracyRating5" type="radio" name="accuracyRating" value="5"/>
            <label htmlFor="accuracyRating5">5</label>
        </div>
  
  

  
        <p>
            <label>Write a Title for Your Review
            <input id="reviewTitle" type="text" name="review_title" onChange={(e)=>setReviewTitle(e.target.value)}/>
            </label>
        </p>
  
        <p>
            <label>Write Your Review
                <textarea id="reviewTextbox" maxLength="500" onChange={(e)=>setReviewTextbox(e.target.value)}></textarea>
            </label>
        </p>
  
        <button type="submit" id="postReview">Post Review</button>
  
    </form>
    )
    }
}

export default LeaveAReview