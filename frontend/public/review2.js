const loadReviewPage = async () => {
    const response = await axios.get(`/api/movies`)
    const allMovies = response.data
    const moviesLength = response.data.length
    const movieTitle = allMovies[2].title
    const heading = document.querySelector('h1')
    heading.innerHTML = `Leave a Review for "${movieTitle}"`
}


loadReviewPage()

let reviewTitle = document.querySelector('#reviewTitle')
let reviewerNameFL = document.querySelector('#reviewerNameFL')
let reviewTextbox = document.querySelector('#reviewTextbox')
let dateInput = document.querySelector('#date')
let postReview = document.querySelector('#postReview')


const createReview = async (e) => {
    e.preventDefault()
    const response2 = await axios.get('/api/movies')
    const allMovies = response2.data
    const moviesLength = response2.data.length
    const movieId = allMovies[2]._id
    let castingInput = 0
    let castingStars = document.getElementsByName('castingRating')
    for (i=0; i < castingStars.length; i++) {
        if (castingStars[i].checked) {
            castingInput = castingStars[i].value
        }
    }

    let characterInput = 0
    let characterStars = document.getElementsByName('characterRating')
    for (i=0; i < characterStars.length; i++) {
        if (characterStars[i].checked) {
            characterInput = characterStars[i].value
        }
    }

    let originalityInput = 0
    let originalityStars = document.getElementsByName('originalityRating')
    for (i=0; i < originalityStars.length; i++) {
        if (originalityStars[i].checked) {
            originalityInput = originalityStars[i].value
        }
    }

    let accuracyInput = 0
    let accuracyStars = document.getElementsByName('accuracyRating')
    for (i=0; i < accuracyStars.length; i++) {
        if (accuracyStars[i].checked) {
            accuracyInput = accuracyStars[i].value
        }
    }
    await axios.post(`/api/reviews`, {
            movie: movieId,
            title: reviewTitle.value,
            reviewerName: reviewerNameFL.value,
            reviewText: reviewTextbox.value,
            date: dateInput.value,
            castingScore: castingInput,
            characterScore: characterInput,
            originalityScore: originalityInput,
            accuracyScore: accuracyInput
    })
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })

}

postReview.addEventListener('click', createReview)