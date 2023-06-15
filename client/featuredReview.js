const createReview = async () => {
    const response = await axios.get(`http://localhost:3001/api/movies`)
    const allMovies = response.data
    const moviesLength = response.data.length
    const mostRecentTitle = allMovies[moviesLength-1].title
    const heading = document.querySelector('h1')
    heading.innerHTML = `Leave a Review for "${mostRecentTitle}"`
    const mostRecentId = allMovies[moviesLength-1]._id
    const response2 = await axios.get(`http://localhost:3001/api/reviews/movieId/${mostRecentId}`)
}

createReview()