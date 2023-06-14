const showAllMovies = async () => {
    const response = await axios.get(`http://localhost:3001/api/movies`)
    const allMovies = response.data
    const moviesLength = response.data.length
    const mostRecentTitle = allMovies[moviesLength-1].title
    const mostRecentId = allMovies[moviesLength-1]._id
    const response3 = await axios.get(`http://localhost:3001/api/reviews/movieId/${mostRecentId}`)
    const reviewList = response3.data
    const reviewListLength = response3.data.length
    console.log(response3)
    for (let i=0; i < moviesLength; i++) {
        //console.log(allMovies[i].img)
        //console.log(allMovies[i].title)
        movieList = document.querySelector('.movieList')
        movieList.innerHTML += `<li><img class="individualImage" aria-hidden="true" width="203px" height="258px" src="${allMovies[i].img}"> <p class="individualTitle">${allMovies[i].title}</p></li>`
    }
    featuredTitle = document.querySelector('#movieTitle')
    featuredTitle.innerHTML = `${allMovies[moviesLength-1].title} (${allMovies[moviesLength-1].year})`
    featuredDateGenreDuration = document.querySelector('#dateGenreDuration')
    featuredDateGenreDuration.innerHTML = `${allMovies[moviesLength-1].year} | ${allMovies[moviesLength-1].genre} | ${allMovies[moviesLength-1].duration} mins`
    featuredDescription = document.querySelector('#movieDescription')
    featuredDescription.innerHTML = `${allMovies[moviesLength-1].description}`
    featuredImage = document.querySelector('#column1')
    featuredImage.innerHTML = `<img id="featuredPoster" src="${allMovies[moviesLength-1].img}" width="203px" height="300px" alt="Movie Poster"/>`
    const disabilities = document.querySelector('#disabilities')
    disabilities.innerHTML = `${allMovies[moviesLength-1].disabilities.toString()}`
    const themes = document.querySelector('#themes')
    themes.innerHTML = `${allMovies[moviesLength-1].themes.toString()}`
    const genre = document.querySelector('#genre')
    genre.innerHTML = `${allMovies[moviesLength-1].genre.toString()}`
    const getFeaturedSceneScore = async () => {
        let featuredCastingScore = 0
        let featuredCharacterScore = 0
        let featuredOriginalityScore = 0
        let featuredAccuracyScore = 0
        for (let i=0; i < reviewListLength; i++)  {
            featuredCastingScore += reviewList[i].castingScore
            featuredCharacterScore += reviewList[i].characterScore
            featuredOriginalityScore += reviewList[i].originalityScore
            featuredAccuracyScore += reviewList[i].accuracyScore
        }

        featuredCastingScore /= reviewListLength
        featuredCharacterScore /= reviewListLength
        featuredOriginalityScore /= reviewListLength
        featuredAccuracyScore /= reviewListLength
        let featuredSceneScore = (featuredCastingScore + featuredCharacterScore + featuredOriginalityScore + featuredAccuracyScore)/4
        featuredSceneScore *= 20
        roundedSceneScore = Math.round(featuredSceneScore)
        const numReviews = document.querySelector('#numReviews')
        numReviews.innerHTML = `(Based on ${reviewListLength} reviews)`
        const scorePercent = document.querySelector('#scorePercent')
        scorePercent.innerHTML = `${roundedSceneScore}%`
        if (roundedSceneScore >= 50) {
            scorePercent.style.color = "green"
        } else {
            scorePercent.style.color = "red"
        }

        const casting = document.querySelector('#casting')
        const characters = document.querySelector('#characters')
        const originality = document.querySelector('#originality')
        const accuracy = document.querySelector('#accuracy')

        if (featuredCastingScore <= 0.5) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (featuredCastingScore > 0.5 && featuredCastingScore <= 1) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (featuredCastingScore > 1 && featuredCastingScore <= 1.5) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCastingScore > 1.5 )
    }

    getFeaturedSceneScore()
}

showAllMovies()




