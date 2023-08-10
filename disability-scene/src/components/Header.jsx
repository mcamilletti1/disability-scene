import Nav from './Nav'
import PropTypes from 'prop-types'
import { useState } from 'react'



const Header = ({ onSearchButtonClick }) => {
    const [searchText, setSearchText] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Search button clicked')
        onSearchButtonClick(searchText)
    }

    return (
        <div className="header">
            <Nav/>
            <form id="searchForm" role="search" onSubmit={handleFormSubmit}>
                <button id="searchButton" type="submit" width="16px" height="16px" aria-label="Search button"><img width="16px" height="16px" aria-hidden="true" src="src/assets/search-sharp.svg"/></button>
                <input id="searchBar" type="text" name="searchInput" placeholder="Search..." aria-label="Search bar" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </form>
        </div>
        
    )
}

Header.propTypes = {
    onSearchButtonClick: PropTypes.func.isRequired
}

export default Header