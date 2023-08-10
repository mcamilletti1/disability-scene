import Nav from './Nav'

const Header = () => {
    return (
        <div className="header">
            <Nav/>
            <form id="searchForm" role="search">
                <button id="searchButton" type="submit" width="16px" height="16px" aria-label="Search button"><img width="16px" height="16px" aria-hidden="true" src="src/assets/search-sharp.svg"/></button>
                <input id="searchBar" type="text" name="searchInput" placeholder="Search..." aria-label="Search bar"/>
            </form>
        </div>
        
    )
}

export default Header