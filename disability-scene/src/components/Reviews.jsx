import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [expandedReviews, setExpandedReviews] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get(`https://mcamilletti1.pythonanywhere.com/api/movie/${id}/reviews/`);
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };
        getReviews();
    }, [id]); 

    const toggleReview = (reviewId) => {
        setExpandedReviews(prevState => ({
            ...prevState,
            [reviewId]: !prevState[reviewId]
        }));
    };

    const showReview = (reviewId) => {
        navigate(`reviewPage/${reviewId}`);
    };

    if (reviews.length === 0) {
        return <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif" alt="Loading..." />;
    } else {
        return (
            <div className="review-grid">
                <h4>Reviews</h4>
                <div className="reviewInfo">
                    <section className="reviewList">
                        {reviews.map((review) => (
                            <section key={review.id} className="review">
                                <p className="reviewTitle"><strong>{review.title}</strong></p>
                                <p className="reviewerName"><strong>{review.reviewer_name}</strong></p>
                                <p className="reviewDate"><strong>{review.date}</strong></p>
                                <p className="reviewText">
                                    {expandedReviews[review.id] ? review.review_text : `${review.review_text.substring(0, 100)}...`}
                                    {!expandedReviews[review.id] && (
                                        <button id="readMore" onClick={(e) => {
                                            e.stopPropagation();
                                            toggleReview(review.id);
                                        }}>
                                            Read More
                                        </button>
                                    )}
                                </p>
                                {/* <button onClick={() => showReview(review.id)}>View Review</button> */}
                            </section>
                        ))}
                    </section>
                </div>
            </div>
        );
    }
};

export default Reviews;
