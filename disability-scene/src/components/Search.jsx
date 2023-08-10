import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

const Search = ({ searchText }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const searchMovies = async () => {
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
  }

  if (searchText) {
    searchMovies()
  }
}, [searchText])



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

Search.propTypes = {
    searchText: PropTypes.string.isRequired,
}



export default Search