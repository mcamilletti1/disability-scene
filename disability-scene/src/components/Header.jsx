import { useState } from 'react';
import Nav from './Nav';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ onSearchSubmit }) => {
  const [searchText, setSearchText] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const newText = e.target.value;
    setSearchText(newText);

    // Call the search function with the updated text
    onSearchSubmit(newText);
  };

  return (
    <div className="header">
      <Nav />
      <form id="searchForm" role="search">
        <label htmlFor="searchBar" className="visually-hidden">
          Search
        </label>
        <input
          id="searchBar"
          type="text"
          name="searchInput"
          placeholder="Search..."
          aria-label="Search bar"
          value={searchText}
          onChange={handleInputChange} // Update search results as the user types
        />
        <Link to="/searchResults">
          <button
            id="searchButton"
            type="button" // Change to "button" to prevent form submission
            aria-label="Search button"
          >
            <img
              width="16px"
              height="16px"
              aria-hidden="true"
              src="/assets/search-sharp.svg"
            />
          </button>
        </Link>
      </form>
    </div>
  );
};

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default Header;
