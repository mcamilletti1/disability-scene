import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TVShows = () => {
    const [shows, setShows] = useState([])


    useEffect(() => {
        const getShows = async () => {
            try {
                const response = await axios.get(`https://mcamilletti1.pythonanywhere.com/api/movie/`);
                const data = response.data;
                const filteredShows = data.filter(show => show.media_type === "TV Show");
                setShows(filteredShows);
            } catch (error) {
                console.error("Error fetching shows:", error);
            }
        }
        getShows();
    }, [shows])

    let navigate = useNavigate()

    const showShow = (id) => {
        navigate(`moviePage/${id}`)
    }

    const handleKeyPress = (e, id) => {
        if (e.key === "Enter") {
            showShow(id);
        }
    }

    if (shows.length === 0) {
        return (
            <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
        )
    } else {
    
    return ( 
        <div className="movies-grid">
            <h2>TV SHOWS</h2>  
            <div className="grid">
                {
                   shows.map((show) => (
                    <div key={show.id} className="movieList">
                        <img className="individualImage" aria-hidden="true" width="203px" height="258px" onClick={() => showShow(show.id)} src={show.img} tabIndex="0" role="button" onKeyPress={(e) => handleKeyPress(e, show.id)}></img>
                        <p className="individualTitle">{show.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
} 
}

export default TVShows