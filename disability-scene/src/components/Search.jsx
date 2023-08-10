import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault()
    console.log('searchMovies function called')
    try {
      setLoading(true);
      const response = await axios.get('https://disability-scene-api-production.up.railway.app/movies');
      const allMovies = response.data;
      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredMovies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="movie-search">
      <ul className="movie-list">
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <img
              className="individual-image"
              aria-hidden="true"
              width="203px"
              height="258px"
              src={movie.img}
              alt={`${movie.title} poster`}
            />
            <p className="individual-title">{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Search