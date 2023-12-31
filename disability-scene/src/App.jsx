import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import axios from 'axios'
import { useState } from 'react'





function App() {
  const [filteredMovies, setFilteredMovies] = useState([])

  const handleSearchSubmit = async (searchText) => {
    try {
      const response = await axios.get('https://mcamilletti1.pythonanywhere.com/api/movie/');
      const allMovies = response.data;
      
      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredMovies(filteredMovies)
  } catch (error) {
    console.error('Error fetching and filtering movies:', error)
  }
};



  return (
    <div className='App'>
      <header>
        <Header onSearchSubmit={handleSearchSubmit} />
      </header>

      <main className="app-main">
        <Main filteredMovies={filteredMovies}/>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
