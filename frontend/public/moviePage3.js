const showMoviePage = async () => {
    const response = await axios.get('https://disability-scene-api-production.up.railway.app/api/movies')
    const allMovies = response.data
    const movieId3 = allMovies[3]._id
    const response1 = await axios.get(`https://disability-scene-api-production.up.railway.app/api/movies/${movieId3}/cast`)
    const allActors = response1.data
    const actorsLength = response1.data.length
    for (let i=0; i < actorsLength; i++) {
        //console.log(allMovies[i].img)
        //console.log(allMovies[i].title)
        actorList = document.querySelector('.actorList')
        actorList.innerHTML += `<li><img class="individualActorImage" aria-hidden="true" width="100px" height="120px" src="${allActors[i].img}"> <p class="individualActor">${allActors[i].name}</p><p class="individualCharacter">${allActors[i].title}</p></li>`
    }

    const response2 = await axios.get(`https://disability-scene-api-production.up.railway.app/api/movies/${movieId3}/reviews`)
    const allReviews = response2.data
    const reviewsLength = response2.data.length
    for (let i=0; i < reviewsLength; i++) {
        reviewList = document.querySelector('.reviewList')
        reviewList.innerHTML += `<li><section height="200px" width="800px" class="review">
        <p class="reviewTitle">${allReviews[i].title}</p>
        <p class="reviewerName">${allReviews[i].reviewer_name}</p>
        <p class="reviewDate">${allReviews[i].date}</p>
        <p class="reviewText">${allReviews[i].review_text}</p>
    </section></li>`
    }

    movieTitle = document.querySelector('#movieTitle')
    movieTitle.innerHTML = `${allMovies[3].title} (${allMovies[3].year})`
    movieDateGenreDuration = document.querySelector('#dateGenreDuration')
    movieDateGenreDuration.innerHTML = `${allMovies[3].year} | ${allMovies[3].genre} | ${allMovies[3].duration} mins`
    movieDescription = document.querySelector('#movieDescription')
    movieDescription.innerHTML = `${allMovies[3].description}`
    movieImage = document.querySelector('#column1')
    movieImage.innerHTML = `<img id="moviePoster" src="${allMovies[3].img}" width="203px" height="300px" alt="Movie Poster"/>`
    const disabilities = document.querySelector('#disabilities')
    disabilities.innerHTML = `${allMovies[3].disabilities.toString()}`
    const themes = document.querySelector('#themes')
    themes.innerHTML = `${allMovies[3].themes.toString()}`
    const genre = document.querySelector('#genre')
    genre.innerHTML = `${allMovies[3].genre.toString()}`
    const getSceneScore = async () => {
        let CastingScore = 0
        let CharacterScore = 0
        let OriginalityScore = 0
        let AccuracyScore = 0
        for (let i=0; i < reviewsLength; i++)  {
            CastingScore += allReviews[i].casting_score
            CharacterScore += allReviews[i].character_score
            OriginalityScore += allReviews[i].originality_score
            AccuracyScore += allReviews[i].accuracy_score
        }

        CastingScore /= reviewsLength
        CharacterScore /= reviewsLength
        OriginalityScore /= reviewsLength
        AccuracyScore /= reviewsLength
        let SceneScore = (CastingScore + CharacterScore + OriginalityScore + AccuracyScore)/4
        SceneScore *= 20
        roundedSceneScore = Math.round(SceneScore)
        const numReviews = document.querySelector('#numReviews')
        numReviews.innerHTML = `(Based on ${reviewsLength} reviews)`
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

        if (CastingScore <= 0.5) {
            casting.innerHTML = `Authentic Casting: <img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (CastingScore > 0.5 && CastingScore <= 1) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (CastingScore > 1 && CastingScore <= 1.5) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CastingScore > 1.5 && CastingScore <= 2) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CastingScore > 2 && CastingScore <= 2.5) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CastingScore > 2.5 && CastingScore <= 3) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (CastingScore > 3 && CastingScore <= 3.5) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CastingScore > 3.5 && CastingScore <= 4) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CastingScore > 4 && CastingScore <= 4.5) {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="4.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            casting.innerHTML = `Authentic Casting: <img src="images/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }


        if (CharacterScore <= 0.5) {
            characters.innerHTML = `Representative Characters: <img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (CharacterScore > 0.5 && CharacterScore <= 1) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (CharacterScore > 1 && CharacterScore <= 1.5) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CharacterScore > 1.5 && CharacterScore <= 2) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CharacterScore > 2 && CharacterScore <= 2.5) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CharacterScore > 2.5 && CharacterScore <= 3) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (CharacterScore > 3 && CharacterScore <= 3.5) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CharacterScore > 3.5 && CharacterScore <= 4) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (CharacterScore > 4 && CharacterScore <= 4.5) {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="4.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            characters.innerHTML = `Representative Characters: <img src="images/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }


        if (OriginalityScore <= 0.5) {
            originality.innerHTML = `Originality: <img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (OriginalityScore > 0.5 && OriginalityScore <= 1) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (OriginalityScore > 1 && OriginalityScore <= 1.5) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (OriginalityScore > 1.5 && OriginalityScore <= 2) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (OriginalityScore > 2 && OriginalityScore <= 2.5) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (OriginalityScore > 2.5 && OriginalityScore <= 3) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (OriginalityScore > 3 && OriginalityScore <= 3.5) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (OriginalityScore > 3.5 && OriginalityScore <= 4) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (OriginalityScore > 4 && OriginalityScore <= 4.5) {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="4.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            originality.innerHTML = `Originality: <img src="images/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }


        if (AccuracyScore <= 0.5) {
            accuracy.innerHTML = `Accuracy: <img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" alt="0.5 Stars"/>`
        } else if (AccuracyScore > 0.5 && AccuracyScore <= 1) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="One Star"/>`
        } else if (AccuracyScore > 1 && AccuracyScore <= 1.5) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="1.5 Stars"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (AccuracyScore > 1.5 && AccuracyScore <= 2) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="Two Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (AccuracyScore > 2 && AccuracyScore <= 2.5) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="2.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (AccuracyScore > 2.5 && AccuracyScore <= 3) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="Three Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="tru"/>`
        } else if (AccuracyScore > 3 && AccuracyScore <= 3.5) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="3.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (AccuracyScore > 3.5 && AccuracyScore <= 4) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="Four Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        } else if (AccuracyScore > 4 && AccuracyScore <= 4.5) {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="4.5 Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" aria-hidden="true"/>`
        } else {
            accuracy.innerHTML = `Accuracy: <img src="images/star.svg" width="14px" height="11px" alt="Five Stars"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/><img src="images/star.svg" width="14px" height="11px" aria-hidden="true"/>`
        }

    }



    getSceneScore()
}

showMoviePage()









