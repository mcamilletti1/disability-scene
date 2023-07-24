const loadReviewPage = async () => {
    const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies`)
    const allMovies = response.data
    const moviesLength = response.data.length
    const mostRecentTitle = allMovies[moviesLength-1].title
    const heading = document.querySelector('h1')
    heading.innerHTML = `Leave a Review for "${mostRecentTitle}"`
}


loadReviewPage()

let reviewTitle = document.querySelector('#reviewTitle')
let reviewerNameFL = document.querySelector('#reviewerNameFL')
let reviewTextbox = document.querySelector('#reviewTextbox')
let dateInput = document.querySelector('#date')
let postReview = document.querySelector('#postReview')
const thanku = document.querySelector('#thanku')
const goback = document.querySelector('#goback')


const createReview = async (e) => {
    e.preventDefault()
    const response2 = await axios.get('https://disability-scene-api-production.up.railway.app/movies')
    const allMovies = response2.data
    const moviesLength = response2.data.length
    const mostRecentId = allMovies[moviesLength-1]._id
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
    await axios.post(`https://disability-scene-api-production.up.railway.app/reviews`, {
            movie: mostRecentId,
            title: reviewTitle.value,
            reviewer_name: reviewerNameFL.value,
            review_text: reviewTextbox.value,
            date: dateInput.value,
            casting_score: castingInput,
            character_score: characterInput,
            originality_score: originalityInput,
            accuracy: accuracyInput
    })
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })

}

postReview.addEventListener('click', createReview)