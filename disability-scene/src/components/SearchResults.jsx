import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const FilteredMovies = ({ filteredMovies }) => {
  if (filteredMovies.length === 0) {
    return (
      <div className="movies-grid">
        <h2>SEARCH RESULTS</h2>
        <img
          className="loadingGif"
          src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"
          alt="Loading GIF"
        ></img>
      </div>
    );
  } else {
    return (
      <div className="movies-grid">
        <h2>SEARCH RESULTS</h2>
        <div className="grid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movieList">
              {/* Use Link to navigate to individual movie page */}
              <Link to={`/moviePage/${movie.id}`}>
                <img
                  className="individualImage"
                  aria-hidden="true"
                  width="203px"
                  height="258px"
                  src={movie.img}
                  alt={`${movie.title} poster`}
                />
              </Link>
              <p className="individualTitle">{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

FilteredMovies.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilteredMovies;


