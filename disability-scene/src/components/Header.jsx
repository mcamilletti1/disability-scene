import Nav from './Nav'

const Header = ({ onSearchButtonClick }) => {
    return (
        <div className="header">
            <Nav/>
            <form id="searchForm" role="search">
                <button id="searchButton" type="button" width="16px" height="16px" aria-label="Search button" onClick={onSearchButtonClick}><img width="16px" height="16px" aria-hidden="true" src="src/assets/search-sharp.svg"/></button>
                <input id="searchBar" type="text" name="searchInput" placeholder="Search..." aria-label="Search bar"/>
            </form>
        </div>
        
    )
}

export default Header