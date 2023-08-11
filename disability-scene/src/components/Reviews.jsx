import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    let { id } = useParams()


    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies/${id}/reviews`);
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
    
    return ( 
        <div className="reviewInfo">
            <h2>Reviews</h2> 
            <br></br> 
            <section className="reviewList">
                {
                   reviews.map((review) => (
                    <section key={review.id} onClick={() => showReview(review.id)} height="200px" width="800px" className="review">
                        <p className="reviewTitle">{review.title}</p>
                        <p className="reviewerName">{review.reviewer_name}</p>
                        <p className="reviewDate">{review.date}</p>
                        <p className="reviewText">{review.review_text}</p>
                    </section>
                   ))
                }
            </section>

        </div>
    )
}

export default Reviews