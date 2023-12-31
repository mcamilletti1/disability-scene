import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    let { id } = useParams()


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
    }, [reviews, id])

    let navigate = useNavigate()


    const showReview = (id) => {
        navigate(`reviewPage/${id}`)
    }

   if (reviews.length === 0) {
    return (
        <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
    )
   } else {
    
    return ( 
        <div className="review-grid">
            <h4>Reviews</h4>
        <div className="reviewInfo">
            <section className="reviewList">
                {
                   reviews.map((review) => (
                    <section key={review.id} onClick={() => showReview(review.id)} height="200px" className="review">
                        <p className="reviewTitle"><strong>{review.title}</strong></p>
                        <p className="reviewerName"><strong>{review.reviewer_name}</strong></p>
                        <p className="reviewDate"><strong>{review.date}</strong></p>
                        <p className="reviewText">{review.review_text}</p>
                    </section>
                   ))
                }
            </section>

        </div>
        </div>
    )
    }
}

export default Reviews