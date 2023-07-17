

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
        movieList.innerHTML += `<li><a href="file:///Users/margaretcamilletti/Desktop/GA/seir-ec-58/projects/disability-scene/client/moviePage${i}.html"><img class="individualImage" aria-hidden="true" width="203px" height="258px" src="${allMovies[i].img}"> <p class="individualTitle">${allMovies[i].title}</p></a></li>`
    }
    featuredTitle = document.querySelector('#movieTitle')
    featuredTitle.innerHTML = `${allMovies[moviesLength-1].title} (${allMovies[moviesLength-1].year})`
    featuredDateGenreDuration = document.querySelector('#dateGenreDuration')
    featuredDateGenreDuration.innerHTML = `${allMovies[moviesLength-1].year} | ${allMovies[moviesLength-1].genre} | ${allMovies[moviesLength-1].duration} mins`
    featuredDescription = document.querySelector('#movieDescription')
    featuredDescription.innerHTML = `${allMovies[moviesLength-1].description}`
    featuredImage = document.querySelector('#column1')
    featuredImage.innerHTML = `<h1>Featured Movie: </h1><img id="featuredPoster" src="${allMovies[moviesLength-1].img}" width="203px" height="300px" alt="Movie Poster"/>`
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
        } else if (featuredCastingScore > 1.5 && featuredCastingScore <= 2) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCastingScore > 2 && featuredCastingScore <= 2.5) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCastingScore > 2.5 && featuredCastingScore <= 3) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (featuredCastingScore > 3 && featuredCastingScore <= 3.5) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCastingScore > 3.5 && featuredCastingScore <= 4) {
            casting.innerHTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCastingScore > 4 && featuredCastingScore <= 4.5) {
            casting.HTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="4.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            casting.HTML = `Authentic Casting: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }


        if (featuredCharacterScore <= 0.5) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (featuredCharacterScore > 0.5 && featuredCharacterScore <= 1) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (featuredCharacterScore > 1 && featuredCharacterScore <= 1.5) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCharacterScore > 1.5 && featuredCharacterScore <= 2) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCharacterScore > 2 && featuredCharacterScore <= 2.5) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCharacterScore > 2.5 && featuredCharacterScore <= 3) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (featuredCharacterScore > 3 && featuredCharacterScore <= 3.5) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCharacterScore > 3.5 && featuredCharacterScore <= 4) {
            characters.innerHTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredCharacterScore > 4 && featuredCharacterScore <= 4.5) {
            characters.HTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="4.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            characters.HTML = `Representative Characters: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }


        if (featuredOriginalityScore <= 0.5) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (featuredOriginalityScore > 0.5 && featuredOriginalityScore <= 1) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (featuredOriginalityScore > 1 && featuredOriginalityScore <= 1.5) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredOriginalityScore > 1.5 && featuredOriginalityScore <= 2) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredOriginalityScore > 2 && featuredOriginalityScore <= 2.5) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredOriginalityScore > 2.5 && featuredOriginalityScore <= 3) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (featuredOriginalityScore > 3 && featuredOriginalityScore <= 3.5) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredOriginalityScore > 3.5 && featuredOriginalityScore <= 4) {
            originality.innerHTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredOriginalityScore > 4 && featuredOriginalityScore <= 4.5) {
            originality.HTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="4.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            originality.HTML = `Originality: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }


        if (featuredAccuracyScore <= 0.5) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (featuredAccuracyScore > 0.5 && featuredAccuracyScore <= 1) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (featuredAccuracyScore > 1 && featuredAccuracyScore <= 1.5) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredAccuracyScore > 1.5 && featuredAccuracyScore <= 2) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredAccuracyScore > 2 && featuredAccuracyScore <= 2.5) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredAccuracyScore > 2.5 && featuredAccuracyScore <= 3) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (featuredAccuracyScore > 3 && featuredAccuracyScore <= 3.5) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredAccuracyScore > 3.5 && featuredAccuracyScore <= 4) {
            accuracy.innerHTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (featuredAccuracyScore > 4 && featuredAccuracyScore <= 4.5) {
            accuracy.HTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="4.5 Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            accuracy.HTML = `Accuracy: <img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="file:///Users/margaretcamilletti/Downloads/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }

    }



    getFeaturedSceneScore()
}

showAllMovies()

const searchButton = document.querySelector('#searchButton')

const searchMovies = async (e) => {
    e.preventDefault()
    const response = await axios.get('http://localhost:3001/api/movies')
    const allMovies = response.data
    searchBar = document.querySelector('#searchBar')
    movieList = document.querySelector('.movieList')
    movieList.innerHTML = ""
    let text = searchBar.value

  
    for (i=0; i<allMovies.length; i++) {
        if (text === allMovies[i].title) {
            movieList.innerHTML += movieList.innerHTML += `<li><img class="individualImage" aria-hidden="true" width="203px" height="258px" src="${allMovies[i].img}"> <p class="individualTitle">${allMovies[i].title}</p></li>`
        } else {
            console.log("booo")
        }
    }

    for (i=0; i<allMovies.length; i++) {
        if (allMovies[i].disabilities.includes(text)) {
            movieList.innerHTML += movieList.innerHTML += `<li><img class="individualImage" aria-hidden="true" width="203px" height="258px" src="${allMovies[i].img}"> <p class="individualTitle">${allMovies[i].title}</p></li>`
        } else {
            console.log("boooo")
        }
    }

    for (i=0; i<allMovies.length; i++) {
        if (allMovies[i].themes.includes(text)) {
            movieList.innerHTML += movieList.innerHTML += `<li><img class="individualImage" aria-hidden="true" width="203px" height="258px" src="${allMovies[i].img}"> <p class="individualTitle">${allMovies[i].title}</p></li>`
        } else {
            console.log("boooo")
        }
    }

    for (i=0; i<allMovies.length; i++) {
        if (allMovies[i].genre.includes(text)) {
            movieList.innerHTML += movieList.innerHTML += `<li><img class="individualImage" aria-hidden="true" width="203px" height="258px" src="${allMovies[i].img}"> <p class="individualTitle">${allMovies[i].title}</p></li>`
        } else {
            console.log("boooo")
        }
    }


}




searchButton.addEventListener('click', searchMovies)




