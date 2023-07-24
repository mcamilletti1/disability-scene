
const searchButton = document.querySelector('#searchButton')

const searchMovies = async (e) => {
    e.preventDefault()
    const response = await axios.get('https://disability-scene-api-production.up.railway.app/movies')
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
}




searchButton.addEventListener('click', searchMovies)