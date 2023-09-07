import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Actors = () => {

    let { id } = useParams()

    console.log(id)

    const [actors, setActors] = useState([])


    useEffect(() => {
        const getActors = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movies/${id}/cast/`);
                console.log("API Response:", response.data)
                const data = response.data;
                setActors(data);
            } catch (error) {
                console.error("Error fetching actors:", error);
            }
        }
        getActors();
    }, [actors, id])

    console.log(actors)

    let navigate = useNavigate()


    const showActor = (id) => {
        navigate(`actorPage/${id}`)
    }

    if (actors.length === 0) {
        return (
            <div className="loadingGif" role="alert">
                Loading...
                <img
                    src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"
                    alt="Loading animation"
                />
            </div>
        )
    } else {
    
    return ( 
        <div className="actor-carousel">
            <h2>Cast & Crew</h2>  
            <div className="actors">
                {
                   actors.map((actor) => (
                    <div 
                    key={actor.id} 
                    className="actorList" 
                    onClick={() => showActor(actor.id)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            showActor(actor.id);
                        }
                    }}>
                        <img className="actorImage" aria-hidden="true" width="100px" height="120px" src={actor.img}></img>
                        <p className="actorTitle">{actor.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
    }
}


export default Actors