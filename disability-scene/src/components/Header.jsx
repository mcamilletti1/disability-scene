import { useState } from 'react'
import Nav from './Nav'
import PropTypes from 'prop-types'

const Header = ({ onSearchSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchText)
  };

  return (
    <div className="header">
    <Nav/>
    <form id="searchForm" role="search" onSubmit={handleFormSubmit}>
        <button id="searchButton" type="submit" width="16px" height="16px" aria-label="Search button"><img width="16px" height="16px" aria-hidden="true" onClick={handleFormSubmit} src="/assets/search-sharp.svg"/></button>
        <input id="searchBar" type="text" name="searchInput" placeholder="Search..." aria-label="Search bar" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </form>
    </div>
  )
};

Header.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
}

export default Header;