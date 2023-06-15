const showAllActorsAndReviews = async () => {
    const response = await axios.get('http://localhost:3001/api/movies')
    const allMovies = response.data
    const movieId0 = allMovies[0]._id
    const response1 = await axios.get(`http://localhost:3001/api/casts/movieId/${movieId0}`)
    const allActors = response1.data
    const actorsLength = response1.data.length
    for (let i=0; i < actorsLength; i++) {
        //console.log(allMovies[i].img)
        //console.log(allMovies[i].title)
        actorList = document.querySelector('.actorList')
        actorList.innerHTML += `<li><img class="individualActorImage" aria-hidden="true" width="100px" height="120px" src="${allActors[i].img}"> <p class="individualActor">${allActors[i].name}</p><p class="individualCharacter">${allActors[i].title}</p></li>`
    }

    const response2 = await axios.get(`http://localhost:3001/api/reviews/movieId/${movieId0}`)
    const allReviews = response2.data
    const reviewsLength = response2.data.length
    for (let i=0; i < reviewsLength; i++) {
        reviewList = document.querySelector('.reviewList')
        reviewList.innerHTML += `<li><section height="200px" width="800px" class="review">
        <p class="reviewTitle">${allReviews[i].title}</p>
        <p class="reviewerName">${allReviews[i].reviewerName}</p>
        <p class="reviewDate">${allReviews[i].date}</p>
        <p class="reviewText">${allReviews[i].reviewText}</p>
    </section></li>`
    }
}



showAllActorsAndReviews()