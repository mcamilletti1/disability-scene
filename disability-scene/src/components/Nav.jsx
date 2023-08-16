import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-links">
            <Link class="nav" to="/"><img id="logo" src="public/assets/logo_on_white.svg" alt="Disability Scene logo" width="125px" height="20px"></img></Link>
            <Link class="nav" to="/movies"><button id="moviesButton"><strong>MOVIES</strong></button></Link>
            <Link class="nav" to="/TVshows"><button id="tvButton"><strong>TV SHOWS</strong></button></Link>
        </div>
    )
}

export default Nav