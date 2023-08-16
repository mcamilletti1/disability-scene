import PropTypes from 'prop-types'

const FilteredMovies = ({ filteredMovies }) => {

  if (filteredMovies.length === 0) {
    return (
      <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
    )
  } else {
  return (
    <div className="movies-grid">
      <h2>SEARCH RESULTS</h2>
      <div className="grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movieList">
            <img
              className="individualImage"
              aria-hidden="true"
              width="203px"
              height="258px"
              src={movie.img}
              alt={`${movie.title} poster`}
            />
            <p className="individualTitle">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
}

FilteredMovies.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default FilteredMovies;

